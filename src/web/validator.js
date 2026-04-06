/**
 * Input validation utilities.
 */

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/;

function validateEmail(email) {
  if (typeof email !== "string") return { valid: false, error: "Email must be a string" };
  if (email.length > 254) return { valid: false, error: "Email too long" };
  if (!emailRegex.test(email)) return { valid: false, error: "Invalid email format" };
  return { valid: true };
}

function validatePassword(password, options = {}) {
  const minLength = options.minLength || 8;
  const errors = [];

  if (typeof password !== "string") return { valid: false, errors: ["Password must be a string"] };
  if (password.length < minLength) errors.push(`Minimum ${minLength} characters`);
  if (!/[A-Z]/.test(password)) errors.push("Must contain uppercase letter");
  if (!/[a-z]/.test(password)) errors.push("Must contain lowercase letter");
  if (!/[0-9]/.test(password)) errors.push("Must contain number");

  return { valid: errors.length === 0, errors };
}

function validateUrl(url) {
  if (typeof url !== "string") return { valid: false, error: "URL must be a string" };
  return { valid: urlRegex.test(url), error: urlRegex.test(url) ? null : "Invalid URL" };
}

module.exports = { validateEmail, validatePassword, validateUrl };
