/**
 * Square Web Payments SDK integration
 *
 * To set up Square payments for large job deposits:
 * 1. Get your Square Application ID from https://developer.squareup.com
 * 2. Set the APPLICATION_ID and LOCATION_ID below
 * 3. Load the Square Web Payments SDK: https://web.squarecdn.com/v1/square.js
 *
 * The BookingForm component on the /contact page will use this
 * for deposit collection on large jobs.
 */

export const SQUARE_CONFIG = {
  // Replace with your Square Application ID
  applicationId: "sandbox-sq0idb-REPLACE_ME",
  // Replace with your Square Location ID
  locationId: "REPLACE_ME",
  // Use 'https://web.squarecdn.com/v1/square.js' for production
  // Use 'https://sandbox.web.squarecdn.com/v1/square.js' for testing
  sdkUrl: "https://sandbox.web.squarecdn.com/v1/square.js",
};

export async function initializeSquare() {
  if (typeof window === "undefined") return null;

  // @ts-expect-error Square is loaded via script tag
  const payments = window.Square?.payments(
    SQUARE_CONFIG.applicationId,
    SQUARE_CONFIG.locationId
  );

  return payments ?? null;
}
