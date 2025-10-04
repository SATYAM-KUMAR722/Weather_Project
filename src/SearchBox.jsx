import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.weatherapi.com/v1/current.json"
    const KEY = "bcae7f7731474395a29104938251105"

    let getWeatherinfo = async () => {
        try {
            let response = await fetch(`${API_URL}?key=${KEY}&q=${city}&aqi=yes`)
            let jsonResponse = await response.json()
            console.log(jsonResponse)
            let result = {
                location: jsonResponse.location.region,
                temp: jsonResponse.current.temp_c,
                humidity: jsonResponse.current.humidity,
                feelslike: jsonResponse.current.feelslike_c,
                weather: jsonResponse.current.condition.text,
                wind: jsonResponse.current.wind_kph,
                pressure: jsonResponse.current.pressure_mb,
            }
            console.log(result)
            return result;
        }
        catch (error) {
            console.log("Failed to fetch weather info:", error);
            throw error;
        }
    }

    let handelChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(city);
            setCity("");
            let info = await getWeatherinfo();
            updateInfo(info);
        } catch (error) {
            setError(true);
            console.log("Error fetching weather info:", error);
        }
    };


    return (
        <div>
            <h2 style={{ fontSize: "40px",}}>Weather App</h2>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handelChange} required />
                <br /><br />
                <Button variant="contained" type='submit' >Search</Button>
            </form>
            {error && <p style={{color: "red"}}> No Such City Exists!</p>}
        </div>
    )
}