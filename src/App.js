import { useState } from "react"
import Cityinput from "./component/Cityinput"
import Heading from "./component/Heading"
import Weatherdisplay from "./component/Weatherdisplay"

function App() {
    const [weatherdata, setweatherdata] = useState(null)

    return (
        <div className="relative w-full h-svh">
            <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
                <source src="https://www.pexels.com/download/video/1860175/" type="video/mp4" />
            </video>
            <div className="relative z-10 min-h-screen flex justify-center items-center">
                <div className="bg-gradient-to-r from-orange-200 from-0% via-blue-100 via-50% to-blue-400 to-100% p-5 rounded-md basis-[80%] md:basis-[60%] lg:basis-[50%]">
                    <Heading></Heading>
                    <Cityinput setweatherdata={setweatherdata}></Cityinput>
                    <Weatherdisplay weatherdata={weatherdata}></Weatherdisplay>
                </div>
            </div>
        </div>
    )
}

export default App