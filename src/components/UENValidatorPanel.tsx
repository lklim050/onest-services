import React, { useState } from "react";
import type { ValidationResult } from "../types/uen";
import { validateUEN } from "../utils/uenValidator";

const UENValidatorPanel = () => {
  const [input, setInput] = useState("default");
  const [result, setResult] = useState<ValidationResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateUEN(input);
    setResult(result);
  };

  return (
    <div>
      <h1>test render</h1>
      {/* INPUT */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="uen"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type valid UEN here..."
          className="flex-1 px-4 py-2 border border-gray-300"
        />
        <button type="submit" className="px-6 py-2">
          Submit
        </button>
      </form>
      <br />
      {input}
      <br />
      {/* RESULT */}
      {result && (
        <div>
          <p>
            Is UEN valid?:{" "}
            <span>{result.isValid ? "YES VALID!!" : "NO INVALID!!"}</span>
          </p>
          <p>
            What format?: <span>{result.formatType}</span>
          </p>
          {result.metadata && (
            <p>
              Entity Type: <span>{result.metadata?.entityType || "N.A."}</span>
              <br />
              Issued By:{" "}
              <span>{result.metadata?.issuanceAgency || "N.A."}</span>
            </p>
          )}

          <p>
            Comment: <span>{result.message}</span>
          </p>
          {result.year && (
            <p>
              Incorporation Year: <span>{result.year || "N.A."}</span>
            </p>
          )}

          <p>{result.length}</p>
        </div>
      )}
    </div>
  );
};

export default UENValidatorPanel;
