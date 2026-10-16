import React from "react";
import { Link } from "react-router-dom";
import WeatherForecastPanel from "../components/WeatherForecastPanel";

export const WeatherPage = () => {
  return (
    <div className="p-20">
      <h1>Weather Page here</h1>
      <Link to="/">Back to Home</Link>
      <WeatherForecastPanel />
    </div>
  );
};

export default WeatherPage;
