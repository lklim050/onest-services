import {
  ACRA_DEFAULT_METADATA,
  UEN_ENTITY_TYPE_INDICATORS,
} from "../data/uenmetadata";
import type { ValidationResult } from "../types/uen";

export function validateUEN(input: string): ValidationResult {
  const uen = input.trim().toUpperCase();

  if (!uen) {
    return {
      isValid: false,
      formatType: "Unknown/Invalid Format",
      message: "You did not input anything",
    };
  }
  if (uen.length < 9 || uen.length > 10) {
    return {
      isValid: false,
      formatType: "Unknown/Invalid Format",
      message: `A valid UEN is either 9 or 10 characters long. Your input "${uen}" has ${uen.length} characters`,
    };
  }

  const formatARegex = /^\d{8}[A-Z]$/;
  if (formatARegex.test(uen)) {
    return {
      isValid: true,
      formatType: "Businesses (ACRA)",
      metadata: ACRA_DEFAULT_METADATA,
      message: "Valid UEN (Businesses).",
    };
  }

  const formatBRegex = /^(18|19|20)\d{2}\d{5}[A-Z]$/;
  if (formatBRegex.test(uen)) {
    const year = Number(uen.substring(0, 4));

    return {
      isValid: true,
      formatType: "Local Companies (ACRA)",
      metadata: ACRA_DEFAULT_METADATA,
      message: `Your input ${uen} is a Valid UEN strucure (Local Companies).`,
      year,
    };
  }

  const formatCRegex = /^[RST]\d{2}[A-Z]{2}\d{4}[A-Z]$/;
  if (formatCRegex.test(uen)) {
    const year2digit = Number(uen.substring(1, 3));
    const entityIndicator = uen.substring(3, 5);
    const metadata = UEN_ENTITY_TYPE_INDICATORS[entityIndicator];
    const year =
      uen[0] === "T"
        ? 2000 + year2digit
        : uen[0] === "S"
          ? 1900 + year2digit
          : 1800 + year2digit;

    if (!metadata) {
      return {
        isValid: false,
        formatType: "Unknown/Invalid Format",
        message: `Invalid entity type indicator '${entityIndicator}'.`,
      };
    }

    return {
      isValid: true,
      formatType: "All Other Entities",
      metadata,
      message: "Valid UEN structure.",
      year,
    };
  }

  return {
    isValid: false,
    formatType: "Unknown/Invalid Format",
    message: `Please check your input "${uen}"`,
  };
}
