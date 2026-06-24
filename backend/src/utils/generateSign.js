import crypto from 'crypto';

/**
 * Generates MD5 signature for ZyqraPay API payload
 * @param {Object} params - The request parameter payload
 * @param {string} key - The Pay-in or payout secret key
 * @returns {string} The MD5 hash of the signed query string
 */
export function generateSign(params, key) {
  // Step 1: Sort keys alphabetically
  const sortedKeys = Object.keys(params).sort((a, b) =>
    a.localeCompare(b, "en")
  );

  // Step 2: Filter empty values and join with &
  const signString = sortedKeys
    .filter(k => 
      params[k] !== "" &&
      params[k] !== undefined &&
      params[k] !== null &&
      k !== "sign"
    )
    .map(k => `${k}=${params[k]}`)
    .join("&");

  // Step 3: Append key
  const finalString = `${signString}&key=${key}`;

  // Step 4: MD5 hash
  return crypto.createHash("md5").update(finalString).digest("hex");
}
