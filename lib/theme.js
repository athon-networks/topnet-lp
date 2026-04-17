const THEME_STORAGE_KEY = "topnet-theme";

function isValidTheme(theme) {
  return theme === "light" || theme === "dark";
}

export function getPreferredTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (isValidTheme(storedTheme)) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme) {
  if (typeof document === "undefined") {
    return;
  }

  const safeTheme = isValidTheme(theme) ? theme : "light";
  const root = document.documentElement;
  root.classList.toggle("dark", safeTheme === "dark");
  root.dataset.theme = safeTheme;
  window.localStorage.setItem(THEME_STORAGE_KEY, safeTheme);
}

export function toggleTheme() {
  if (typeof document === "undefined") {
    return "light";
  }

  const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
  return nextTheme;
}

export { THEME_STORAGE_KEY };
