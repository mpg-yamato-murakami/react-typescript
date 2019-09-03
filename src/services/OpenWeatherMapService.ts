import axios from 'axios'
const API_PATH = '//api.openweathermap.org/data/2.5'
const API_KEY = '8b05a3552ea5162ff5046cc8caa5c213'
class OpenWeatherMapServiceClass {
  current(city: string) {
    const params = {
      appid: API_KEY,
      units: 'metric',
      lang: 'jp',
      q: city
    }
    return axios.get(`${API_PATH}/weather`, {
      params
    });
  }
  forecast(city: string) {
    const params = {
      appid: API_KEY,
      units: 'metric',
      lang: 'jp',
      cnt: 7,
      q: city
    }
    return axios.get(`${API_PATH}/forecast/daily`, {
      params
    });
  }
}
export default new OpenWeatherMapServiceClass()