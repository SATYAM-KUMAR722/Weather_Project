import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from 'react';

export default function WeatherApp() {

    const [weatherInfo, setweatherInfo] = useState({
        location: "",
        temp: 0,
        humidity: 0,
        feelslike: "",
        weather: 0,
        wind: 0,
        pressure: 0,
    });

    const [isPresent,setisPresent] = useState(false);

    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
        setisPresent(true);
    }
    return (
        <div >
            <SearchBox updateInfo={updateInfo} />
            <br /><br />
         {isPresent && <InfoBox info={weatherInfo} />}   
        </div>
    )
}