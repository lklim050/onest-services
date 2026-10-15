// src/components/WeatherTable.tsx
import React, { useState } from "react";
import type { WeatherData } from "../services/weatherApi";

interface WeatherTableProps {
  data: WeatherData | undefined | null;
}

export const WeatherTable: React.FC<WeatherTableProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const forecasts = data?.data?.items?.[0]?.forecasts || [];
  const lastUpdate = data?.data?.items?.[0]?.update_timestamp || "N.A.";
  const timeText = data?.data?.items?.[0]?.valid_period?.text || "N.A.";

  const filteredForecasts = forecasts.filter((item) =>
    item.area.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (forecasts.length === 0) {
    return <p>No weather forecast data available.</p>;
  }

  return (
    <div>
      {/* INPUT */}
      <div>
        <input
          type="text"
          placeholder="Filter by area (e.g., Ang Mo Kio)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300"
        />
      </div>
      <br />
      <p>
        Last Update:{" "}
        <span>
          {new Date(lastUpdate).toLocaleTimeString("en-SG", {
            timeZone: "Asia/Singapore",
          })}{" "}
          (Singapore Time)
        </span>
      </p>
      <p>
        Validity Period: <span>{timeText || "N.A."}</span>
      </p>
      <br />
      {/* TABLE */}
      {filteredForecasts.length === 0 ? (
        <p>No matching locations found for "{searchTerm}".</p>
      ) : (
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
            {filteredForecasts.map((item) => (
              <tr key={item.area}>
                <td>{item.area}</td>
                <td>{item.forecast}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WeatherTable;
