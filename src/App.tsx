import { Link, Route, Routes } from "react-router-dom";
// import UENValidatorPanel from "./components/UENValidatorPanel";
// import WeatherForecastPanel from "./components/WeatherForecastPanel";
import HomePage from "./pages/HomePage";
import UenPage from "./pages/UenPage";
import WeatherPage from "./pages/WeatherPage";

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <nav className="border-b border-white-300 bg-gray-300 px-6 py-4">
        <div className="flex items-center justify-between mx-auto max-w-4xl ">
          <Link to="/" className="font-bold text-xl">
            OneST Service
          </Link>
          <div className="flex space-x-6 text-m font-medium">
            <Link to="/uen-validator">UEN Validator</Link>
            <Link to="/weather-forecast">Weather Forecast</Link>
          </div>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/uen-validator" element={<UenPage />} />
          <Route path="/weather-forecast" element={<WeatherPage />} />
        </Routes>
      </main>
    </div>
  );
}

// export function App() {
//   return (
//     <div className="min-h-screen bg-grey-50 py-10 px-4">
//       <header className="max-w-xl mx-auto mb-8 text-center bg-black">
//         <h1 className="text-3xl font-extrabold text-gray-900">
//           oneST web service
//         </h1>
//         <p className="text-sm text-gray-600 mt-1">
//           UEN Validation & Weather Forecast Dashboard
//         </p>
//       </header>

//       <main className="bg-black">
//         {/* Render our UEN Validator Component */}
//         <UENValidatorPanel />
//         <WeatherForecastPanel />
//       </main>
//     </div>
//   );
// }

export default App;
