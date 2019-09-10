import React, { useState, useEffect, useMemo } from 'react';
import OpenWeatherMapService from '../services/OpenWeatherMapService'

type Props = {
  city: string
}

export const WeeklyWeather: React.FC<Props> = (props) => {
  const [weathers, setWeathers] = useState<any>(null);

  useEffect(() => {
    if (props.city) {
      (async () => {
        const res = await OpenWeatherMapService.forecast(props.city)
        setWeathers(res.data.list)
      })()
    }
    return () => {
      setWeathers(null)
    }
  }, [props.city])

  const _weeklyWeathers = useMemo(() => {
    if (!weathers) return;

    return weathers.map((weather: any) => {
      return (
        <tr key={weather.dt}>
          <td>{ weather.dt }</td>
          <td>{ weather.weather[0].main }</td>
          <td>{ weather.temp.max }</td>
          <td>{ weather.temp.min }</td>
        </tr>
      )
    })
  }, [weathers])

  if (!weathers) {
    return <div>loading...</div>
  }

  return (
    <>
      <div>
        週間天気予報
      </div>
      <table>
        <thead>
        <tr>
          <th>日付</th>
          <th>天気</th>
          <th>最高気温</th>
          <th>最低気温</th>
        </tr>
        </thead>
        <tbody>
          { _weeklyWeathers }
        </tbody>
      </table>
    </>
  )
}