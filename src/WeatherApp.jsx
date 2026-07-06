import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp() {
    const INIT_URL =
    "https://png.pngtree.com/thumb_back/fh260/background/20211018/pngtree-sky-with-cloudy-weather-image_912201.png";

    const HOT_URL = "https://static.vecteezy.com/system/resources/thumbnails/047/386/051/small/heat-stroke-concept-for-climate-change-heat-wave-or-global-warming-orange-sky-with-clouds-and-bright-sun-photo.jpg";
    const COLD_URL = "https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.jpg?s=612x612&w=0&k=20&c=HBpXbY4mvVDxUowmAibqHYvNqi-wIEU9DmXFxW4Cj98=";
    const RAIN_URL = "https://img.magnific.com/free-photo/weather-effects-composition_23-2149853295.jpg";

    const [weatherInfo , setWeatherInfo] = useState(null)

    let updateInfo = (result) => {
        setWeatherInfo(result)
    }

    let backgroundImage = INIT_URL;

    if (weatherInfo) {
        if (weatherInfo.humidity >= 80) {
            backgroundImage = RAIN_URL;
        } else if (weatherInfo.temp <= 15) {
            backgroundImage = COLD_URL;
        } else if (weatherInfo.temp > 30) {
            backgroundImage = HOT_URL;
        }
    }

    return (
        <div 
        style={{ 
        backgroundImage: `url(${backgroundImage})`, // Or "/bg-image.jpg" for the public folder
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        minHeight: '100vh'

        }}>
            <br></br>
            <h1 style={{
                textAlign : "center",
                color : "#250121", 
                marginTop : "0",
            }}>SkyCast</h1>
            <h3 style={{
                color : "#250121", 
                textAlign : "center",
            }}
            ><i>- Real-Time Weather Forecast at Your Fingertips.</i></h3>
            <SearchBox updateInfo={updateInfo}/>
            {weatherInfo && <InfoBox info={weatherInfo}/>}
        </div>
    )
}