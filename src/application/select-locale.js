import { normalizeLocale } from "../domain/locale.js";

export function selectLocale(requestedLocale, availableContent) {
  const locale = normalizeLocale(requestedLocale);
  return Object.prototype.hasOwnProperty.call(availableContent, locale) ? locale : "en";
}
