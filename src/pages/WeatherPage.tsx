import { Link } from "react-router-dom";
import WeatherForecastPanel from "../components/WeatherForecastPanel";
import APIHealthModal from "../components/APIHealthModal";
import { useState } from "react";

export const WeatherPage = () => {
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-medium text-blue-600 hover:underline inline-block"
        >
          &larr; Back to Home
        </Link>
        <button
          onClick={() => setIsHealthModalOpen(true)}
          className="text-xs px-3 py-1.5 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition-colors cursor-pointer font-semibold"
        >
          Check API Status
        </button>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Singapore Weather Forecast</h1>
        <p className="text-sm text-gray-500 mt-2">
          Real-time 2-hour NEA weather outlook.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <WeatherForecastPanel />
      </div>
      {/* Health Check Modal */}
      <APIHealthModal
        isOpen={isHealthModalOpen}
        onClose={() => setIsHealthModalOpen(false)}
      />
    </div>
  );
};

export default WeatherPage;
