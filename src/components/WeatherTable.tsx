// src/components/WeatherTable.tsx
import React from "react";

interface ForecastItem {
  area: string;
  forecast: string;
}

interface WeatherTableProps {
  data: any; // Can be typed strictly later based on your API response structure
}

export const WeatherTable: React.FC<WeatherTableProps> = ({ data }) => {
  // Safely extract the forecast array from the NEA API nested response
  const forecasts: ForecastItem[] = data?.data?.items?.[0]?.forecasts || [];

  if (forecasts.length === 0) {
    return <p>No weather forecast data available.</p>;
  }

  return (
    <div>
      <table
        border={1}
        cellPadding={8}
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Area</th>
            <th>Forecast</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((item) => (
            <tr key={item.area}>
              <td>{item.area}</td>
              <td>{item.forecast}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
