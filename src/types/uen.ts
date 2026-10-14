export interface UENMetadata {
  issuanceAgency: string;
  entityType: string;
}

export type UENFormatType =
  | "Format A (old format for businesses)"
  | "Format B (old format for local companies)"
  | "Format C (new format)"
  | "Unknown/Invalid Format";

export interface ValidationResult {
  isValid: boolean;
  formatType: UENFormatType;
  metadata?: UENMetadata;
  message: string;
  year?: number;
  length: number;
}
