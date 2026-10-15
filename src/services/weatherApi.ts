const WEATHER_API_URL =
  "https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast";

export interface ForecastItem {
  area: string;
  forecast: string;
}

export interface WeatherValidPeriod {
  text: string;
  start: string;
  end: string;
}

export interface WeatherItem {
  update_timestamp: string;
  valid_period: WeatherValidPeriod;
  forecasts: ForecastItem[];
}

export interface NEAWeatherData {
  code: number;
  data: {
    items: WeatherItem[];
  };
}

export async function fetchWeatherForecast(): Promise<NEAWeatherData> {
  const res = await fetch(WEATHER_API_URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch weather data, message: ${res.status}`);
  }

  const data: NEAWeatherData = await res.json();
  return data;
}
