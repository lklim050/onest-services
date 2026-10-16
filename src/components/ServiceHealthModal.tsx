import React, { useState } from "react";
import { validateUEN } from "../utils/uenValidator";

interface ServiceHealthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceHealthModal: React.FC<ServiceHealthModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isChecking, setIsChecking] = useState(false);
  const [uenEngineStatus, setUenEngineStatus] = useState<boolean | null>(null);

  if (!isOpen) return null;

  const runHealthCheck = async () => {
    setIsChecking(true);
    setUenEngineStatus(null);

    try {
      const testResult = validateUEN("200001234E");
      setUenEngineStatus(testResult.isValid);
    } catch {
      setUenEngineStatus(false);
    }

    setIsChecking(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg border border-gray-200 max-w-md w-full p-6 space-y-4">
        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
          <h2 className="font-bold text-gray-900 text-base">
            UEN Service Health Check
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-sm font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 text-sm text-gray-700">
          <p className="text-xs text-gray-500">
            Verify local UEN service integrity.
          </p>

          <div className="p-3 bg-gray-50 border border-gray-200 rounded space-y-2">
            <div className="flex justify-between items-center">
              <span>UEN Validator Engine:</span>
              <span
                className={`font-semibold ${
                  uenEngineStatus === true
                    ? "text-green-600"
                    : uenEngineStatus === false
                      ? "text-red-600"
                      : "text-gray-500"
                }`}
              >
                {uenEngineStatus === true
                  ? "Operational"
                  : uenEngineStatus === false
                    ? "Failed"
                    : "Not Tested"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={runHealthCheck}
            disabled={isChecking}
            className="px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 disabled:opacity-50 cursor-pointer"
          >
            {isChecking ? "Running Check..." : "Run Diagnostics"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHealthModal;
