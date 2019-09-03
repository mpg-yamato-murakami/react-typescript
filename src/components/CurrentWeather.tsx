import React from 'react';
import OpenWeatherMapService from '../services/OpenWeatherMapService'

type Props = {
  city: string
}

export const CurrentWeather: React.FC<Props> = (props) => {
  return (
    <div>
      今日の天気 { props.city }
    </div>
  )
}