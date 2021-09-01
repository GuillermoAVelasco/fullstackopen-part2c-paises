import axios from "axios"
import { useEffect,useState } from "react"

const DatosPais=({datosPais})=>{
    const pais=datosPais[0]
    const [weather,setWeather]=useState([])
    
    useEffect(()=>{
        const baseURL = process.env.REACT_APP_API_KEY
        setWeather([])
        axios.get(`http://api.weatherstack.com/current?access_key=${baseURL}&query=${pais.capital}`)
        .then(response=>{
            setWeather(response.data.current)
        })
    },[])
    console.log(weather)
    return (        
        <div>
            <h1>{pais.name}</h1>        
            <p>Capital {pais.capital}</p>
            <p>population {pais.population}</p>          
            <h2>Languages</h2>
            <ul>
                {pais.languages.map(lang=> <li key={lang.name}>{lang.name}</li>)}
            </ul>
            <img alt="flag"  src={pais.flag}/>
            <h2>Weather in {pais.capital}</h2>
            <p>Temperature:{weather.temperature} celsius</p>
            <img alt="weather_icons"  src={weather.weather_icons}/>
            <p>wind:{weather.wind_speed} {weather.wind_dir}</p>
        </div>
        )
    
}

/*
  <h1>{name}</h1>        
            <p>Capital {capital}</p>
            <p>population {population}</p>          
            <h2>Languages</h2>
          
*/


export default DatosPais