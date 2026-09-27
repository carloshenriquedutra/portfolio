export function readLocaleFromUrl(search) {
  return new URLSearchParams(search).get("lang");
}

export function writeLocaleToUrl(locale, location = window.location) {
  const url = new URL(location.href);
  if (locale === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", locale);
  }
  window.history.replaceState({}, "", url);
}
