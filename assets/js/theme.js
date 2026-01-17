// assets/js/theme.js

(function () {
    function applyTheme(theme) {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);

        const btn = document.getElementById("themeToggle");
        if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
    }

    // Set theme early (default to light)
    const stored = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-bs-theme", stored);

    // Expose init so pages can call it after navbar is injected
    window.initThemeToggle = function initThemeToggle() {
        const btn = document.getElementById("themeToggle");
        if (!btn) return;

        // Sync icon on load
        const current = document.documentElement.getAttribute("data-bs-theme") || "light";
        btn.textContent = current === "dark" ? "☀️" : "🌙";

        // Avoid double-binding if initThemeToggle gets called multiple times
        if (btn.dataset.bound === "1") return;
        btn.dataset.bound = "1";

        btn.addEventListener("click", () => {
            const now = document.documentElement.getAttribute("data-bs-theme") || "light";
            applyTheme(now === "dark" ? "light" : "dark");
        });
    };
})();
