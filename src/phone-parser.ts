/**
 * Phone Parser with dynamic import for code splitting
 *
 * This module provides phone number parsing with optional strict validation.
 * When strictValidation is false (default), it uses libphonenumber-js (min metadata).
 * When strictValidation is true, it dynamically loads libphonenumber-js/max for
 * more precise validation, but only when needed (code splitting).
 */

import type { CountryCode, PhoneNumber } from 'libphonenumber-js';
import { parsePhoneNumberFromString as parseMin } from 'libphonenumber-js';

// Cache for the dynamically loaded max parser
let parseMaxCached: typeof parseMin | null = null;
let parseMaxLoading: Promise<typeof parseMin> | null = null;

/**
 * Dynamically loads libphonenumber-js/max for strict validation.
 * Uses caching to avoid multiple loads.
 *
 * @returns Promise that resolves to the parsePhoneNumberFromString function from /max
 */
export async function loadStrictParser(): Promise<typeof parseMin> {
  if (parseMaxCached) {
    return parseMaxCached;
  }

  if (parseMaxLoading) {
    return parseMaxLoading;
  }

  parseMaxLoading = import('libphonenumber-js/max')
    .then((module) => {
      parseMaxCached = module.parsePhoneNumberFromString;
      return parseMaxCached;
    });

  return parseMaxLoading;
}

/**
 * Parses a phone number using the appropriate parser based on strictValidation flag.
 *
 * When strictValidation is false: Uses min metadata (synchronous, smaller bundle)
 * When strictValidation is true: Uses max metadata (async load, precise validation)
 *
 * @param phoneNumber - The phone number string to parse
 * @param countryCode - Optional default country code
 * @param strictValidation - Whether to use strict validation (max metadata)
 * @returns The parsed PhoneNumber object or undefined
 */
export function parsePhoneNumber(
  phoneNumber: string,
  countryCode?: CountryCode,
  strictValidation: boolean = false
): PhoneNumber | undefined {
  if (!strictValidation) {
    return countryCode
      ? parseMin(phoneNumber, countryCode)
      : parseMin(phoneNumber);
  }

  if (parseMaxCached) {
    return countryCode
      ? parseMaxCached(phoneNumber, countryCode)
      : parseMaxCached(phoneNumber);
  }

  return countryCode
    ? parseMin(phoneNumber, countryCode)
    : parseMin(phoneNumber);
}

export function isStrictParserReady(): boolean {
  return parseMaxCached !== null;
}

export { parseMin };
