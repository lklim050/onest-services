import { Route, Routes } from "react-router-dom";
// import UENValidatorPanel from "./components/UENValidatorPanel";
// import WeatherForecastPanel from "./components/WeatherForecastPanel";
import HomePage from "./pages/HomePage";
import UenPage from "./pages/UenPage";
import WeatherPage from "./pages/WeatherPage";

export function App() {
  return (
    <div>
      <nav className="p-20">
        <h1>Nav Bar here</h1>
        <a href="/">Home</a>
        <a href="/uen-validator">UEN Validator</a>
        <a href="/weather-forecast">Weather Forecast</a>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/uen-validator" element={<UenPage />} />
        <Route path="/weather-forecast" element={<WeatherPage />} />
      </Routes>
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
