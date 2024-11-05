import sun from '../../assets/icons/sun.png';
import cloud from '../../assets/icons/cloud.png';
import cloudy from '../../assets/icons/cloudy.png';
import foog from '../../assets/icons/foog.png';
import rainy from '../../assets/icons/rainy.png';
import snowy from '../../assets/icons/snowy.png';
import storm from '../../assets/icons/storm.png';
import * as styles from './WeatherIcon.css';
import { WeatherType } from '../../services/ApiService';

export interface WeatherIconProps {
  iconType: WeatherType;
  size: 'lg' | 'sm';
}


// Map WeatherTypes to icons
const srcMap: Record<WeatherType, string> = {
  sun: sun,
  cloud: cloud,
  cloudy: cloudy,
  foog: foog,
  rainy: rainy,
  snowy: snowy,
  storm: storm,
};

export default function WeatherIcon({ iconType, size }: WeatherIconProps) {
  const iconSrc = srcMap[iconType];

  return (
    <img src={iconSrc} className={styles.icon[size]} />
  )
}