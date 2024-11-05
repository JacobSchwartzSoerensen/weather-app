import WeatherIcon, { WeatherIconProps } from '../WeatherIcon/WeatherIcon';
import * as styles from './ForecastTile.css';

export interface ForecastTileProps {
  day: string;
  icon: WeatherIconProps['iconType'];
  temp: string;
}

export default function ForecastTile({ day, icon, temp }: ForecastTileProps) {
  return (
    <div className={styles.tile}>
      <p className={styles.day}>{day}</p>
      <WeatherIcon iconType={icon} size='sm' />
      <p className={styles.temp}>{temp}°</p>
    </div>
  )
}