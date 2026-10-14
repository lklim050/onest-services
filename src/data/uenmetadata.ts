import type { UENMetadata } from "../types/uen";

export const UEN_ENTITY_TYPE_INDICATORS: Record<string, UENMetadata> = {
  // ACRA
  LP: {
    issuanceAgency: "Accounting and Corporate Regulatory Authority (ACRA)",
    entityType: "Limited Partnership",
  },
  LL: {
    issuanceAgency: "Accounting and Corporate Regulatory Authority (ACRA)",
    entityType: "Limited Liability Partnerships",
  },
  FC: {
    issuanceAgency: "Accounting and Corporate Regulatory Authority (ACRA)",
    entityType: "Foreign Companies",
  },
  PF: {
    issuanceAgency: "Accounting and Corporate Regulatory Authority (ACRA)",
    entityType: "Public Accounting Firms",
  },

  // ESG
  RF: {
    issuanceAgency: "Enterprise Singapore (ESG)",
    entityType:
      "Representative Offices (Foreign Companies, Government Agencies, Trade Associations/Chambers/Non-Profit)",
  },

  // Muis
  MO: {
    issuanceAgency: "Islamic Religious Council of Singapore (Muis)",
    entityType: "Mosques",
  },
  MM: {
    issuanceAgency: "Islamic Religious Council of Singapore (Muis)",
    entityType: "Madrasahs",
  },

  // MCI
  NB: {
    issuanceAgency: "Ministry of Communications and Information (MCI)",
    entityType: "News Bureaus",
  },

  // MCCY (Charities, Co-op, Mutual Benefit)
  CC: {
    issuanceAgency: "Ministry of Culture, Community and Youth Charities Unit",
    entityType: "Charities and Institutions of a Public Character",
  },
  CS: {
    issuanceAgency:
      "Ministry of Culture, Community and Youth Registry of Co-operative Societies",
    entityType: "Cooperative Societies",
  },
  MB: {
    issuanceAgency:
      "Ministry of Culture, Community and Youth Registry of Mutual Benefit Organisation",
    entityType: "Mutual Benefit Organisations",
  },

  // Mindef
  FM: {
    issuanceAgency: "Ministry of Defence (Mindef)",
    entityType: "Foreign Military Units",
  },

  // MOE
  GS: {
    issuanceAgency: "Ministry of Education (MOE)",
    entityType: "Government and Government-Aided Schools",
  },

  // MFA
  DP: {
    issuanceAgency: "Ministry of Foreign Affairs (MFA)",
    entityType: "High Commissions, Embassies",
  },
  CP: {
    issuanceAgency: "Ministry of Foreign Affairs (MFA)",
    entityType: "Consulate",
  },
  NR: {
    issuanceAgency: "Ministry of Foreign Affairs (MFA)",
    entityType: "International Organisations (registered with MFA)",
  },

  // MOH
  CM: {
    issuanceAgency: "Ministry of Health (MOH)",
    entityType: "Only Medical Clinic",
  },
  CD: {
    issuanceAgency: "Ministry of Health (MOH)",
    entityType: "Only Dental Clinic",
  },
  MD: {
    issuanceAgency: "Ministry of Health (MOH)",
    entityType: "Both Medical and Dental Clinic",
  },
  HS: { issuanceAgency: "Ministry of Health (MOH)", entityType: "Hospitals" },
  VH: {
    issuanceAgency: "Ministry of Health (MOH)",
    entityType: "Voluntary Welfare Home",
  },
  CH: {
    issuanceAgency: "Ministry of Health (MOH)",
    entityType: "Commercial Home",
  },
  MH: {
    issuanceAgency: "Ministry of Health (MOH)",
    entityType: "Maternity Home",
  },
  CL: {
    issuanceAgency: "Ministry of Health (MOH)",
    entityType: "Clinical Laboratory",
  },
  XL: {
    issuanceAgency: "Ministry of Health (MOH)",
    entityType: "Xray Laboratory",
  },
  CX: {
    issuanceAgency: "Ministry of Health (MOH)",
    entityType: "Both Clinical and Xray Laboratory",
  },
  HC: {
    issuanceAgency: "Ministry of Health (MOH)",
    entityType: "Healthcare Service Providers",
  },

  // MLAW
  RP: {
    issuanceAgency: "Ministry of Law (MLAW)",
    entityType: "Foreign Law Practice Representative Offices",
  },

  // MOM
  TU: {
    issuanceAgency: "Ministry of Manpower (MOM)",
    entityType: "Trade Unions",
  },

  // MND
  TC: {
    issuanceAgency: "Ministry of National Development (MND)",
    entityType: "Town Councils",
  },

  // MAS
  FB: {
    issuanceAgency: "Monetary Authority of Singapore (MAS)",
    entityType: "Bank Representative Offices",
  },
  FN: {
    issuanceAgency: "Monetary Authority of Singapore (MAS)",
    entityType: "Insurance Representative Offices",
  },

  // PA
  PA: {
    issuanceAgency: "People's Association (PA)",
    entityType: "PA Services",
  },
  PB: {
    issuanceAgency: "People's Association (PA)",
    entityType: "Grassroot Units",
  },

  // ROS
  SS: {
    issuanceAgency: "Registry of Societies (ROS)",
    entityType: "Societies",
  },

  // SLA
  MC: {
    issuanceAgency: "Singapore Land Authority (SLA)",
    entityType: "Management Corporations",
  },
  SM: {
    issuanceAgency: "Singapore Land Authority (SLA)",
    entityType: "Subsidiary Management Corporations",
  },

  // SNDGO
  GA: {
    issuanceAgency: "Smart Nation and Digital Government Office (SNDGO)",
    entityType: "Organs of State, Ministries and Departments",
  },
  GB: {
    issuanceAgency: "Smart Nation and Digital Government Office (SNDGO)",
    entityType: "Statutory Boards and bodies performing public duties",
  },
};

export const ACRA_DEFAULT_METADATA: UENMetadata = {
  issuanceAgency: "Accounting and Corporate Regulatory Authority (ACRA)",
  entityType: "Local Company / Business",
};
