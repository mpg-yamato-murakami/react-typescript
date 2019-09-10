import React, { useState, useEffect } from 'react';
import OpenWeatherMapService from '../services/OpenWeatherMapService'

type Props = {
  city: string
}

export const CurrentWeather: React.FC<Props> = (props) => {
  const [current, setCurrent] = useState<any>(null);

  useEffect(() => {
    console.log('cityが変った', props.city)
    if (props.city) {
      (async () => {
        const res = await OpenWeatherMapService.current(props.city)
        setCurrent(res.data)
      })()
    }
    return () => {
      console.log('cityが変わりそうだ', props.city)
      setCurrent(null)
    }
  }, [props.city])

  if (!current) {
    return <div>loading...</div>
  }

  return (
    <>
      <div>
        今日の天気 at {props.city}
      </div>
      <table>
        <thead>
        <tr>
          <th>天気</th>
          <th>最高気温</th>
          <th>最低気温</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{current.weather[0].main}</td>
          <td>{current.main.temp_max}</td>
          <td>{current.main.temp_min}</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}