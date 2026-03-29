/**
 * is-json-parsable <https://github.com/oopsio/is-json-parsable>
 *
 * Copyright (c) 2026-present, oopsio
 * Released under the MIT license.
 */

module.exports = function isJsonParsable(str) {
  if (typeof str !== "string" || str.length < 2) return false;

  const first = str[0];
  const last = str[str.length - 1];

  // Fast-fail: Must start/end with {} or []
  if (!((first === "{" && last === "}") || (first === "[" && last === "]"))) {
    return false;
  }

  // Fast-fail: Basic structural check (no unquoted keys or trailing commas)
  // This catches simple typos without needing the expensive try/catch
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
};
