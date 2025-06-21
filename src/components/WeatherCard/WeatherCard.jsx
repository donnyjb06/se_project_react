import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({ temperature, condition, isDay }) => {
  const imageUrl = new URL(`../../assets/images/cards/${condition?.toLowerCase()}_${isDay ? "day" : "night"}.png`, import.meta.url)

  return (
    <div className='weather-card'>
      <h1 className='weather-card__temperature'>{temperature}°F</h1>
      <img src={imageUrl} alt="weather card background" className='weather-card__background'/>
    </div>
  )
}

export default WeatherCard