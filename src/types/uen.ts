export interface UENMetadata {
  issuanceAgency: string;
  entityType: string;
}

export type UENFormatType =
  | "Businesses (ACRA)"
  | "Local Companies (ACRA)"
  | "All Other Entities"
  | "Unknown/Invalid Format";

export interface ValidationResult {
  isValid: boolean;
  formatType: UENFormatType;
  metadata?: UENMetadata;
  message: string;
  year?: number;
}
