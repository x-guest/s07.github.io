const sidebarToggleBtns = document.querySelectorAll(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const searchForm = document.querySelector(".menu-toggle");
const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".theme-text");
const menuIcon = themeToggleBtn.querySelector(".menu-icon");
const menuLinks = document.querySelectorAll(".menu-link");

// Toggle class state on buttons click
const buttons = document.querySelectorAll(".menu-link.settings.null");

// Updates the theme icon based on current theme and sidebar state
const updateThemeIcon = () => {
  const isDark = document.body.classList.contains("dark-theme");
  themeIcon.textContent = sidebar.classList.contains("collapsed") ? (isDark ? "День" : "Ночь") : "Ночь";
};

// Apply dark theme if saved or system prefers, then update icon
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

document.body.classList.toggle("dark-theme", shouldUseDarkTheme);
updateThemeIcon();

// Toggle between themes on theme button click
themeToggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon();
});

// Toggle sidebar collapsed state on buttons click
sidebarToggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    updateThemeIcon();
  });
});

// Toggle class state on buttons click
buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    // 1. Remove the class from all buttons
    buttons.forEach(b => b.classList.remove("active"));
    
    // 2. Add the class to the one that was clicked
    this.classList.add("active");
  });
});


// Expand sidebar by default on large screens
if (window.innerWidth > 768) sidebar.classList.remove("collapsed");
