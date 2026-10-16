import { Link } from "react-router-dom";
import UENValidatorPanel from "../components/UENValidatorPanel";
import ServiceHealthModal from "../components/ServiceHealthModal";
import { useState } from "react";

export const UenPage = () => {
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-sm font-medium text-blue-600">
          &larr; Back to Home
        </Link>
        <button
          onClick={() => setIsHealthModalOpen(true)}
          className="text-xs px-3 py-1.5 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition-colors cursor-pointer font-semibold"
        >
          Check Service Status
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-bold">UEN Validator</h1>
        <p className="text-sm text-gray-700 mt-2">
          Verify entity number formats and issuing authorities.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <UENValidatorPanel />
      </div>
      <ServiceHealthModal
        isOpen={isHealthModalOpen}
        onClose={() => setIsHealthModalOpen(false)}
      />
    </div>
  );
};

export default UenPage;
