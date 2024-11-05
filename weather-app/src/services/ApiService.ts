export type WeatherType = 'sun' | 'cloudy' | 'cloud' | 'foog' | 'rainy' | 'snowy' | 'storm';

// Map selected WMO codes to our WeatherTypes
const weatherCodeMap: Record<string, WeatherType> = {
	'0': 'sun',
	'1': 'sun',
	'2': 'cloudy',
	'3': 'cloud',
	'45': 'foog',
	'48': 'foog',
	'51': 'rainy',
	'53': 'rainy',
	'55': 'rainy',
	'56': 'rainy',
	'57': 'rainy',
	'61': 'rainy',
	'63': 'rainy',
	'65': 'rainy',
	'66': 'rainy',
	'67': 'rainy',
	'71': 'snowy',
	'73': 'snowy',
	'75': 'snowy',
	'77': 'snowy',
	'80': 'rainy',
	'81': 'rainy',
	'82': 'rainy',
	'85': 'snowy',
	'86': 'snowy',
	'95': 'storm',
	'96': 'storm',
	'99': 'storm'
}

export interface WeatherResponse {
  current: {
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  daily: {
    temperature_2m_max: number[];
    time: string[];
    weather_code: number[];
  };
}

export interface Weather {
  current: {
    weather: WeatherType;
    temp: number;
    wind: number;
  };
  forecast: {
    day: number;
    weather: WeatherType;
    temp: number;
  }[]
}

/**
 * Gets the current weather and a 7 day forecast for Rosenkrantzgade 19B, 8000 Aarhus C
 */
export async function getWeather(): Promise<Weather> {
  const params = new URLSearchParams({
    latitude: '56.1518',
    longitude: '10.2064',
    current: 'temperature_2m,weather_code,wind_speed_10m',
    daily: 'weather_code,temperature_2m_max',
    wind_speed_unit: 'ms',
    timezone: 'Europe/Berlin'
  });

  const response = await fetch('https://api.open-meteo.com/v1/forecast?' + params);
  const json: WeatherResponse = await response.json()

  return {
    current: {
      weather: weatherCodeMap[json.current.weather_code.toString()] || '',
      temp: json.current.temperature_2m,
      wind: json.current.wind_speed_10m,
    },
    forecast: json.daily.time.map((time, i) => {
      const date = new Date(time);

      return {
        day: date.getDay(),
        temp: json.daily.temperature_2m_max[i],
        weather: weatherCodeMap[json.daily.weather_code[i].toString()]
      }
    }),
  }
}