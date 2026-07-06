import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AirIcon from "@mui/icons-material/Air";
import AcUnitSharpIcon from '@mui/icons-material/AcUnitSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import "./InfoBox.css"
export default function InfoBox({info}){
    const INIT_URL =
    "https://png.pngtree.com/thumb_back/fh260/background/20211018/pngtree-sky-with-cloudy-weather-image_912201.png";

    const HOT_URL = "https://static.vecteezy.com/system/resources/thumbnails/047/386/051/small/heat-stroke-concept-for-climate-change-heat-wave-or-global-warming-orange-sky-with-clouds-and-bright-sun-photo.jpg";
    const COLD_URL = "https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.jpg?s=612x612&w=0&k=20&c=HBpXbY4mvVDxUowmAibqHYvNqi-wIEU9DmXFxW4Cj98=";
    const RAIN_URL = "https://img.magnific.com/free-photo/weather-effects-composition_23-2149853295.jpg";

    // let info1 = {
    //     city : "Delhi",
    //     temp : 25.05,
    //     tempMin : 25.05,
    //     tempMax : 25.05,
    //     humidity : 47,
    //     feelsLike : 24.84,
    //     weather : "haze"
    // }

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity >= 80 
                    ? RAIN_URL 
                    : info.temp <= 15 
                    ? COLD_URL
                    :info.temp > 30
                    ? HOT_URL : INIT_URL

                }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <b>{info.city}
                    &nbsp;{info.humidity >= 80 
                    ? <ThunderstormSharpIcon sx={{color : "grey"}} />
                    : info.temp <= 15 
                    ? <AcUnitSharpIcon sx={{color : "blue"}}/>
                    :info.temp > 30
                    ? <WbSunnySharpIcon sx={{color : "orange"}}/>
                    : <AirIcon sx={{color : "purple"}}/>
                    }
                </b>
                </Typography>
                <Typography variant="body2" sx={{ color: 'black' }} component={"span"}>
                <p>
                    <ThermostatIcon sx={{ color: "#ff5722", verticalAlign: "middle" }} />
                    Temperature : {info.temp}&deg;C
                </p>
                <p>
                    <WaterDropIcon sx={{ color: "#2196f3", verticalAlign: "middle" }} />
                    Humidity : {info.humidity}
                </p>
                <p> 
                    <DeviceThermostatIcon sx={{ color: "#ff9800", verticalAlign: "middle" }} />
                    Min Temperature : {info.tempMin}&deg;C
                </p>
                <p>
                    <DeviceThermostatIcon sx={{ color: "#ff9800", verticalAlign: "middle" }} />
                    Max Temperature : {info.tempMax}&deg;C</p>
                <p>
                    <AirIcon sx={{ color: "#4caf50", verticalAlign: "middle" }} />
                    The weather can be described as <i>{info.weather}</i> and feels 
                    like {info.feelsLike}&deg;C
                </p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}