import ForecastTile from '../ForecastTile/ForecastTile';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import * as styles from './WeatherCard.css';

export default function WeatherCard() {
  return (
    <div className={styles.container}>
      <div className={styles.currentContainer}>
        <div className={styles.currentIcon}>
          <WeatherIcon iconType='sun' size='lg' />
        </div>
        <p className={styles.tempText}>12°</p>
        <p className={styles.windText}>12 m/s</p>
      </div>
      <div className={styles.forecastList}>
        <ForecastTile day='Man' icon='cloud' temp='12' />
        <ForecastTile day='Man' icon='cloud' temp='12' />
        <ForecastTile day='Man' icon='cloud' temp='12' />
        <ForecastTile day='Man' icon='cloud' temp='12' />
        <ForecastTile day='Man' icon='cloud' temp='12' />
        <ForecastTile day='Man' icon='cloud' temp='12' />
        <ForecastTile day='Man' icon='cloud' temp='12' />
      </div>
    </div>
  )
}