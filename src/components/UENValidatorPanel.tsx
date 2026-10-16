import React, { useState } from "react";
import type { ValidationResult } from "../types/uen";
import { validateUEN } from "../utils/uenValidator";

const UENValidatorPanel = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ValidationResult | null>(null);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const validationResult = validateUEN(input.trim());
    setResult(validationResult);
  };

  return (
    <div className="space-y-4">
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          id="uen"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. T08LL0001A or 200001234E"
          className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-black bg-white text-gray-900"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-black text-white text-sm font-medium rounded hover:bg-gray-800 cursor-pointer"
        >
          Validate
        </button>
      </form>

      {/* Result Panel */}
      {result && (
        <div
          className={`p-4 rounded border ${
            result.isValid
              ? "bg-gray-50 border-green-300 text-gray-900"
              : "bg-gray-50 border-red-300 text-gray-900"
          }`}
        >
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Validation Status
            </span>
            <span
              className={`px-2 py-0.5 text-xs font-bold rounded ${
                result.isValid
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {result.isValid ? "VALID UEN" : "INVALID UEN"}
            </span>
          </div>

          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Format Type:</span>
              <span className="font-medium">{result.formatType || "N.A."}</span>
            </div>

            {result.year && (
              <div className="flex justify-between">
                <span className="text-gray-500">Incorporation Year:</span>
                <span className="font-medium">{result.year}</span>
              </div>
            )}

            {result.metadata && (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-500">Entity Type:</span>
                  <span className="font-medium">
                    {result.metadata.entityType || "N.A."}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Issuing Agency:</span>
                  <span className="font-medium">
                    {result.metadata.issuanceAgency || "N.A."}
                  </span>
                </div>
              </>
            )}

            <div className="pt-2 mt-2 border-t border-gray-200">
              <span className="text-gray-500 block mb-1">Remarks:</span>
              <p className="text-gray-700 bg-white p-2 rounded border border-gray-200 text-xs">
                {result.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UENValidatorPanel;
