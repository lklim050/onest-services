import React, { useState } from "react";
import type { WeatherData } from "../services/weatherApi";

interface WeatherTableProps {
  data: WeatherData | undefined | null;
  isRefreshing: boolean;
  onRefresh: () => void;
}

const getWeatherIcon = (forecast: string) => {
  const lower = forecast.toLowerCase();

  // 1. Thundery / Lightning
  if (lower.includes("thunder") || lower.includes("lightning")) {
    return (
      <svg
        className="w-6 h-6 text-amber-500 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    );
  }

  // 2. Rain / Showers
  if (lower.includes("rain") || lower.includes("shower")) {
    return (
      <svg
        className="w-6 h-6 text-blue-500 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 16.2A4.5 4.5 0 0017.5 8h-1.8A7 7 0 104 14.9M16 19v2M12 17v2M8 19v2"
        />
      </svg>
    );
  }

  // 3. Cloudy / Overcast / Hazy / Mist / Fog / Windy
  if (
    lower.includes("cloud") ||
    lower.includes("hazy") ||
    lower.includes("mist") ||
    lower.includes("fog") ||
    lower.includes("windy")
  ) {
    return (
      <svg
        className="w-6 h-6 text-gray-500 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    );
  }

  // 4. Fair / Sunny (Default)
  return (
    <svg
      className="w-6 h-6 text-amber-400 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
};

export const WeatherTable: React.FC<WeatherTableProps> = ({
  data,
  onRefresh,
  isRefreshing,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const forecasts = data?.data?.items?.[0]?.forecasts || [];
  const lastUpdate = data?.data?.items?.[0]?.update_timestamp || "N.A.";
  const timeText = data?.data?.items?.[0]?.valid_period?.text || "N.A.";

  const filteredForecasts = forecasts.filter((item) =>
    item.area.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="flex gap-2">
        <input
          type="text"
          id="area"
          placeholder="Filter by area (e.g., Ang Mo Kio)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#4A3B32] bg-white text-gray-900"
        />
        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          className="px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 disabled:opacity-50 cursor-pointer"
        >
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </button>
        <button
          onClick={() => setSearchTerm("")}
          className="px-2.5 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 text-gray-700 cursor-pointer font-mono"
        >
          Clear
        </button>
      </div>

      {/* Validity Panel */}
      <div className="p-3 bg-gray-50 border border-gray-200 rounded text-xs space-y-1 text-gray-600">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Last Update:</span>
          <span>
            {lastUpdate !== "N.A."
              ? new Date(lastUpdate).toLocaleTimeString("en-SG", {
                  timeZone: "Asia/Singapore",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })
              : "N.A."}{" "}
            (Singapore Time)
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Validity Period:</span>
          <span>{timeText}</span>
        </div>
      </div>

      {/* Table / Results */}
      {forecasts.length === 0 ? (
        <p className="text-sm text-gray-500 py-4 text-center">
          No weather forecast data available. You may click "Check API Status"
          button on top right corner to check.
        </p>
      ) : filteredForecasts.length === 0 ? (
        <p className="text-sm text-gray-500 py-4 text-center">
          No matching locations found for "{searchTerm}".
        </p>
      ) : (
        <div>
          <p className="text-xs text-gray-500 font-medium pb-4">
            Showing {filteredForecasts.length} of {forecasts.length} regions
          </p>
          <div className="w-[80%] mx-auto border border-gray-200 rounded">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-gray-100 border-b border-gray-200 text-gray-700 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-2.5 font-semibold">Area</th>
                  <th className="px-4 py-2.5 font-semibold">Forecast</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredForecasts.map((item) => (
                  <tr key={item.area} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 text-gray-900 font-medium">
                      {item.area}
                    </td>
                    <td className="px-4 py-2.5 text-gray-600 flex gap-4">
                      <span>{item.forecast}</span>
                      <span
                        className="text-base"
                        role="img"
                        aria-label="weather icon"
                      >
                        {getWeatherIcon(item.forecast)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherTable;
