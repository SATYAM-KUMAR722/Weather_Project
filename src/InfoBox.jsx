import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {

    const Hot_URL = "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3Vubnl8ZW58MHx8MHx8fDA%3D"
    
    const COLD_URL = "https://images.unsplash.com/photo-1683743861027-db01af51ebd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHNub3d8ZW58MHx8MHx8fDA%3D"
    
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"


    return (
        <div>

            <Card sx={{ maxWidth: 400,  borderRadius: 4, boxShadow: 1.5, }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? Hot_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent  >
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        <p style={{ marginBottom: '8px' }}>{info.location}{" "}
                            {info.humidity > 80 
                            ? <AcUnitIcon sx={{ color: 'deepskyblue' }}/> 
                            : info.temp > 20 
                            ? <SunnyIcon sx={{ color: 'gold' }}/> 
                            : <ThunderstormIcon sx={{ color: 'purple' }}/>}
                        </p>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="div">
                        <p>Temperature  = <strong>{info.temp}&deg;C</strong></p>
                        <p>Humidity  = <strong>{info.humidity}</strong></p>
                        <p>Wind = <strong>{info.wind}kph</strong></p>
                        <p>Pressure  = <strong>{info.pressure}mb</strong></p>
                        <p>The weather feels <i>{info.feelslike}</i>, with an apparent temperature of <strong>{info.weather}°C</strong>.</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}