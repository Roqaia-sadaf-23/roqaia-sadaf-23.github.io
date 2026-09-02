"use strict";

// Policy text and language links remain available without JavaScript.
(() => {
  const root = document.documentElement;
  const button = document.getElementById("privacy-theme-toggle");
  const themeColor = document.querySelector('meta[name="theme-color"]');
  let savedTheme;
  try {
    savedTheme = localStorage.getItem("portfolio-theme");
  } catch (_) {
    // Use the device preference when storage is unavailable.
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const isDark = theme === "dark";
    const label = isDark
      ? "تفعيل الوضع الفاتح / Switch to light theme"
      : "تفعيل الوضع الداكن / Switch to dark theme";
    button.setAttribute("aria-label", label);
    button.title = label;
    themeColor.setAttribute("content", isDark ? "#09172a" : "#f7f9fc");
  }

  applyTheme(
    savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
  );
  button.hidden = false;
  button.addEventListener("click", () => {
    const theme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (_) {
      // The theme still works for this visit if storage is unavailable.
    }
  });
  document.getElementById("privacy-year").textContent = new Date().getFullYear();
})();
