import UENValidatorPanel from "./components/UENValidatorPanel";

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <header className="max-w-xl mx-auto mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">
          oneST web service
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          UEN Validation & Weather Forecast Dashboard
        </p>
      </header>

      <main>
        {/* Render our UEN Validator Component */}
        <UENValidatorPanel />
      </main>
    </div>
  );
}

export default App;
