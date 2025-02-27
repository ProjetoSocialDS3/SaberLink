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

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.innerHTML = `
        <span class="navbar-toggler-icon">
            <span class="middle-bar"></span>
        </span>
    `;

    navbarToggler.addEventListener('click', function() {
        navbarCollapse.style.transition = 'height 0.3s ease';
    });

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbarToggler.click();
            }
        });
    });
});

const savedTheme = localStorage.getItem("theme");
const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark-theme");
}

updateThemeToggleText();