function Weatherdisplay({ weatherdata }) {
    if (!weatherdata) {
        return (
            <p className="font-medium text-center text-base md:text-lg lg:text-xl">Please search your city.</p>
        )
    }
    return (
        <div className="flex justify-center">
            <div className="border-2 rounded-md sm:w-9/12 md:w-10/12 lg:w-3/4">
                <div className="text-center text-xl font-semibold p-2 md:text-2xl lg:text-3xl">
                    <h1>{`${weatherdata.cityname},${weatherdata.countryname}`}</h1>
                    <h1>{`${weatherdata.temperature}`}</h1>
                    <h1>{`${weatherdata.description}`}</h1>
                </div>
                <div className="m-3">
                    <hr className="border-black border-opacity-30"></hr>
                </div>
                <div className="p-2 flex justify-between text-sm md:text-lg lg:text-xl">
                    <p><b>Humidity:</b> {weatherdata.humidity}</p>
                    <p><b>Pressure:</b> {weatherdata.pressure}</p>
                    <p><b>Wind:</b> {weatherdata.wind}</p>
                </div>
            </div>
        </div>
    )
}

export default Weatherdisplay