import TReact, { useState, useEffect } from 'react'

const API_KEY = '664e8f7c8cfb719b9e05b40720bc9565'
function App() {
  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('')
  const URL = 'https://api.openweathermap.org/data/2.5/weather?'
  const FULL_URL = `${URL}q=${city}&units=metric&appid=${API_KEY}`

  const search = ((event) => {
    if (event.key === 'Enter') {
      fetch(FULL_URL)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data)
          console.log(data)
        })
      setCity('')
    }

  })
  // search()

  return (
    <div className="app">
      <div className="search">
        <input
          value={city}
          onChange={e => setCity(e.target.value)}
          onKeyDown={search}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="middile">
              <div className="location">
                {weather.name ? <p>{weather.name}, {weather.sys.country}</p> : <p>Location</p>}
              </div>
              <div className="temp">
                {weather.main ? <h1>{weather.main.temp.toFixed()}°C</h1> : <h1>0°C</h1>}
                {weather.weather ? <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" /> : <img src="http://openweathermap.org/img/w/01d.png" alt="weather icon" />}
                {weather.weather ? <p>{weather.weather[0].description}</p> : <p>Weather</p>}
              </div>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>
              {weather.main ? <p>{weather.main.feels_like.toFixed()}°C</p> : <p>0°C</p>}
            </p>
            <p>Feels Like</p>
          </div>
          <div className="wind">
            <p className='bold'>
              {weather.wind ? <p>{weather.wind.speed}km/h</p> : <p>0km/h</p>}
            </p>
            <p>Wind Speed</p>
          </div>
          <div className="humidity">
            <p className='bold'>
              {weather.main ? <p>{weather.main.humidity}%</p> : <p>0%</p>}
            </p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
