import { useEffect, useState } from 'react';
import ForecastTile from '../ForecastTile/ForecastTile';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import * as styles from './WeatherCard.css';
import { getWeather, Weather } from '../../services/ApiService';

export default function WeatherCard() {
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    getWeather()
      .then(setWeather);
  }, []);

  if (!weather) return (<p>Loading...</p>);

  const forecasts = weather.forecast.map(forecast => (
    <ForecastTile
      day={forecast.day}
      icon={forecast.weather}
      temp={forecast.temp}
      key={forecast.day}
    />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.currentContainer}>
        <div className={styles.currentIcon}>
          <WeatherIcon iconType={weather.current.weather} size='lg' />
        </div>
        <p className={styles.tempText}>{weather.current.temp}°</p>
        <p className={styles.windText}>{weather.current.wind} m/s</p>
      </div>
      <div className={styles.forecastList}>
        {forecasts}
      </div>
    </div>
  )
}