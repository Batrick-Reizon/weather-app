import axios from "axios"
import { useState } from "react"

function Cityinput({setweatherdata})
{
    const [city,setcity] = useState("")

    const handlechange = (event) =>
    {
        setcity(event.target.value)
    }

    const getweather = () =>
    {
        const weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c6096a82a8ae84fd63962e33f0d7615`)

        weatherdata.then((message) =>
        {
            const data = message.data
            const weatherinfo = {
                cityname:data.name,
                countryname:data.sys.country,
                temperature:data.main.temp,
                description:data.weather[0].description,
                humidity:data.main.humidity,
                pressure:data.main.pressure,
                wind:data.wind.speed,
            }
            setweatherdata(weatherinfo)
            console.log(weatherinfo)
            setcity("")
        })
        .catch((errormessage) =>
    {
        console.log("Error",errormessage)
    })
    }

    return(
        <div className="p-2 text-center">
            <input type="text" value={city} onChange={handlechange} placeholder="Enter Your City Name" className="p-1 border border-black rounded-md w-full sm:w-2/4 md:w-1/2 lg:w-2/6"></input>
            <button className="bg-black text-white m-2 py-1 px-2 rounded-md" onClick={getweather}>Get Result</button>
        </div>
    )
}

export default Cityinput