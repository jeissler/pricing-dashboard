/**
 * TypeScript interfaces for pricing data structure
 * Based on the API response from Serif Health pricing API
 */

export interface Distribution {
  count: number
  '5th': number
  '10th': number
  '25th': number
  '50th': number
  '75th': number
  '90th': number
  '95th': number
  rate_min: number
  rate_max: number
}

export interface Rate {
  row_id: string
  network_id: string
  code: string
  original_code: string
  rate: number
  mrf_rate: number
  ein: string
  npi_list: string
  source_group_id: string
  group_id: string
  npi_region: string
  npi_taxonomy: string
  code_type: string
  original_code_type: string
  code_type_version: string
  modifier_list: string | null
  bundled_code_list: string | null
  billing_class: string
  place_of_service_list: string
  negotiation_type: string
  arrangement: string
  cms_baseline_schedule: string
  cms_baseline_rate: number
  expiration: string
  additional_information: string | null
  is_billable_primary_taxonomy: boolean
  is_billable_secondary_taxonomy: boolean
  is_billable_claims: boolean
  is_imputed: boolean
  anesthesia_base_units: number | null
  anesthesia_time_unit: number | null
  anesthesia_conversion_rate: number | null
  anesthesia_estimated_dollar_amount: number | null
  anesthesia_conversion_factor_methodology: string | null
  relative_to_baseline: number
  npi_list_length: number
  npiGeo: string | null
  cbsas: string | null
  place_of_service: string
  entity_name: string
  entity_address: string
  matched_on: string
  matched_id: string
  network_name: string
  network_region: string
  network_year_month: string
  date_accessed: string
  payer_name: string
  npi_taxonomy_name: string
  network_template_id: string
  baseline_schedule: string
  baseline_rate: number
  baseline_original: string | null
  baseline_original_type: string | null
}

export interface PricingCodeData {
  code: string
  distribution: Distribution
  rates: Rate[]
}

/**
 * Main pricing data type - a record mapping CPT codes to their pricing data
 */
export type PricingData = Record<string, PricingCodeData>
