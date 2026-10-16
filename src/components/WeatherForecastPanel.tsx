import { useQuery } from "@tanstack/react-query";
import { fetchWeatherForecast } from "../services/weatherApi";
import WeatherTable from "./WeatherTable";

export function WeatherForecastPanel() {
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchWeatherForecast,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return (
      <div className="py-8 text-center text-sm text-gray-500">
        Loading 2-hour weather forecast...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded text-sm text-red-800">
        Failed to load weather data. Please try again later.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <WeatherTable
        data={data}
        onRefresh={() => refetch()}
        isRefreshing={isFetching}
      />
    </div>
  );
}

export default WeatherForecastPanel;
