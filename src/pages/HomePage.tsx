import react from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="p-20">
      <h1>Page Here</h1>
      <p>Select a tool here</p>
      <ul>
        <li>
          <Link to="/uen-validator">UEN Validator</Link>
        </li>
        <li>
          <Link to="/weather-forecast">Weather Forecast</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
