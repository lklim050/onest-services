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
      length: uen.length,
    };
  }
  if (uen.length < 9 || uen.length > 10) {
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

  const formatBRegex = /^(18|19|20)\d{2}\d{5}[A-Z]$/;
  if (formatBRegex.test(uen)) {
    const year = Number(uen.substring(0, 4));

    return {
      isValid: true,
      formatType: "Format B (old format for local companies)",
      metadata: ACRA_DEFAULT_METADATA,
      message: `Valid Format B UEN (Local company).`,
      year,
      length: uen.length,
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
        message: `Invalid entity type indicator '${entityIndicator}' in Format C UEN.`,
        length: uen.length,
      };
    }

    return {
      isValid: true,
      formatType: "Format C (new format)",
      metadata,
      message: `Valid Format C UEN structure. Company registered in year ${year}`,
      year,
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
