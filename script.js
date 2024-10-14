function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-theme")
            ? "dark"
            : "light",
    );
    updateThemeToggleText();
}

function updateThemeToggleText() {
    const themeToggle = document.querySelector(".theme-toggle");
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Tema Claro";
    } else {
        themeToggle.textContent = "Tema Escuro";
    }
}

// Verificar tema salvo
const savedTheme = localStorage.getItem("theme");
const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-theme");
}

updateThemeToggleText();