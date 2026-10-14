import type { ValidationResult } from "../types/uen";

export function validateUEN(input: string): ValidationResult {
  const something = input;

  return {
    isValid: false,
    formatType: "Unknown/Invalid Format",
    message: something,
  };
}
