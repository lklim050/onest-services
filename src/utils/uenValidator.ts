import { ACRA_DEFAULT_METADATA } from "../data/uenmetadata";
import type { ValidationResult } from "../types/uen";

export function validateUEN(input: string): ValidationResult {
  const uen = input.trim().toUpperCase();

  if (!uen) {
    return {
      isValid: false,
      formatType: "Unknown/Invalid Format",
      message: "You did not input anything",
      length: uen.length,
    };
  }
  if (uen.length < 9 || uen.length > 11) {
    return {
      isValid: false,
      formatType: "Unknown/Invalid Format",
      message: "UEN is either 9 or 10 characters long",
      length: uen.length,
    };
  }

  const formatARegex = /^\d{8}[A-Z]$/;
  if (formatARegex.test(uen)) {
    return {
      isValid: true,
      formatType: "Format A (old format for businesses)",
      metadata: ACRA_DEFAULT_METADATA,
      message: "Valid Format A UEN (Businesses registered).",
      length: uen.length,
    };
  }

  const formatBRegex = /^\d{9}[A-Z]$/;
  if (formatBRegex.test(uen)) {
    return {
      isValid: true,
      formatType: "Format B (old format for local companies)",
      metadata: ACRA_DEFAULT_METADATA,
      message: "Valid Format B UEN (Local Businesses registered).",
      length: uen.length,
    };
  }
  return {
    isValid: false,
    formatType: "Unknown/Invalid Format",
    message: uen,
    length: uen.length,
  };
}
