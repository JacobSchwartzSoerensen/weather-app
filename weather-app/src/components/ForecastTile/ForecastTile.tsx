import WeatherIcon, { WeatherIconProps } from '../WeatherIcon/WeatherIcon';
import * as styles from './ForecastTile.css';

export interface ForecastTileProps {
  day: number;
  icon: WeatherIconProps['iconType'];
  temp: number;
}

const dayMap: Record<number, string> = {
  0: 'Søn',
  1: 'Man',
  2: 'Tir',
  3: 'Ons',
  4: 'Tor',
  5: 'Fre',
  6: 'Lør'
};

export default function ForecastTile({ day, icon, temp }: ForecastTileProps) {
  const roundedTemp = Math.round(temp);

  return (
    <div className={styles.tile}>
      <p className={styles.day}>{dayMap[day]}</p>
      <WeatherIcon iconType={icon} size='sm' />
      <p className={styles.temp}>{roundedTemp}°</p>
    </div>
  )
}