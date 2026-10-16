import { Link } from "react-router-dom";
import WeatherForecastPanel from "../components/WeatherForecastPanel";

export const WeatherPage = () => {
  return (
    <div className="space-y-6">
      <Link
        to="/"
        className="text-sm font-medium text-blue-600 hover:underline inline-block"
      >
        &larr; Back to Home
      </Link>

      <div>
        <h1 className="text-3xl font-bold">Singapore Weather Forecast</h1>
        <p className="text-sm text-gray-500 mt-2">
          Real-time 2-hour NEA weather outlook.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <WeatherForecastPanel />
      </div>
    </div>
  );
};

export default WeatherPage;
