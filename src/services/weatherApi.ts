const WEATHER_API_URL =
  "https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast";

// export interface WeatherResponse {}

export async function fetchWeatherForecast(): Promise<any> {
  const res = await fetch(WEATHER_API_URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch weather data, message: ${res.status}`);
  }
  const data = await res.json();

  return data;
}
