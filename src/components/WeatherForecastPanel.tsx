import { useQuery } from "@tanstack/react-query";
// import React from "react";
import { fetchWeatherForecast } from "../services/weatherApi";
import WeatherTable from "./WeatherTable";

export function WeatherForecastPanel() {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeatherForecast,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return (
      <div className="text-center text-gray-500">
        Loading 2-hour weather forecast...
      </div>
    );
  }

  return (
    <div>
      <h1>Weather Panel Here</h1>
      <WeatherTable />
      {JSON.stringify(data.data.items)}
    </div>
  );
}

export default WeatherForecastPanel;
