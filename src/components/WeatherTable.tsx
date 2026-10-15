// src/components/WeatherTable.tsx
import React from "react";
import type { WeatherData } from "../services/weatherApi";

interface WeatherTableProps {
  data: WeatherData | undefined | null;
}

export const WeatherTable: React.FC<WeatherTableProps> = ({ data }) => {
  const forecasts = data?.data?.items?.[0]?.forecasts || [];

  // to add later
  const filteredForecasts = forecasts.filter((item) =>
    item.area.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
