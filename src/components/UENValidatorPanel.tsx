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
          <span>{result.isValid ? "YES VALID!!" : "NO INVALID!!"}</span>
          <span>{result.formatType}</span>
          <span>{result.message}</span>
        </div>
      )}
    </div>
  );
};

export default UENValidatorPanel;
