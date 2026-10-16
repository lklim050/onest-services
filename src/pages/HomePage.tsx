import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Services Ultility</h1>
        <p className="text-sm text-gray-500 mt-2">
          Select a service below to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Link
          to="/uen-validator"
          className="p-5 bg-white border border-gray-200 rounded-lg hover:border-blue-500 "
        >
          <h2 className="font-semibold text-base mb-1">UEN Validator</h2>
          <p className="text-sm text-gray-500">
            Verify Singapore company and entity registration numbers.
          </p>
        </Link>

        <Link
          to="/weather-forecast"
          className="p-5 bg-white border border-gray-200 rounded-lg hover:border-blue-500"
        >
          <h2 className="font-semibold text-base mb-1">Weather Forecast</h2>
          <p className="text-sm text-gray-500">
            Check real-time NEA weather conditions across Singapore regions.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
