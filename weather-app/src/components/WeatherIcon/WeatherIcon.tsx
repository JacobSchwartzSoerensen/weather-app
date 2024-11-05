import sun from '../../assets/icons/sun.png';
import cloud from '../../assets/icons/cloud.png';
import * as styles from './WeatherIcon.css';

export interface WeatherIconProps {
  iconType: 'sun' | 'cloud';
  size: 'lg' | 'sm';
}

const srcMap: Record<WeatherIconProps['iconType'], string> = {
  sun: sun,
  cloud: cloud
}

export default function WeatherIcon({ iconType, size }: WeatherIconProps) {
  const iconSrc = srcMap[iconType];

  return (
    <img src={iconSrc} className={styles.icon[size]} />
  )
}