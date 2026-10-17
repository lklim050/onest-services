import React, { useState } from "react";

interface APIHealthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const APIHealthModal: React.FC<APIHealthModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isChecking, setIsChecking] = useState(false);
  const [apiStatus, setApiStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  if (!isOpen) return null;

  const runHealthCheck = async () => {
    setIsChecking(true);
    setApiStatus("idle");

    try {
      const response = await fetch(
        "https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast",
      );

      if (response.ok) {
        setApiStatus("success");
      } else {
        setApiStatus("error");
      }
    } catch {
      setApiStatus("error");
    }

    setIsChecking(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg border border-gray-200 max-w-md w-full p-6 space-y-4">
        <div className="flex justify-between items-center border-b border-gray-200 pb-3">
          <h2 className="font-bold text-gray-900 text-base">
            API Health Check
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
            Verify connectivity to External Weather APIs
          </p>

          <div className="p-3 bg-gray-50 border border-gray-200 rounded space-y-2">
            <div className="flex justify-between items-center">
              <span>Weather API (data.gov.sg):</span>
              <span
                className={`font-semibold ${
                  apiStatus === "success"
                    ? "text-green-600"
                    : apiStatus === "error"
                      ? "text-red-600"
                      : "text-gray-500"
                }`}
              >
                {apiStatus === "success"
                  ? "Online"
                  : apiStatus === "error"
                    ? "Offline / Error"
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

export default APIHealthModal;
