// Change Mode

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  var isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

// Event listener for dark mode toggle button/icon
document.getElementById("change-mode").addEventListener("click", function () {
  toggleDarkMode();
  document.getElementById("change-mode").classList.toggle("ri-sun-line");
});

// Check if dark mode preference is stored in localStorage
document.addEventListener("DOMContentLoaded", function () {
  var darkMode = localStorage.getItem("darkMode");

  // Apply dark mode if it was set
  if (darkMode === "true") {
    document.body.classList.add("dark-mode");
    document.getElementById("change-mode").classList.add("ri-sun-line");
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("change-mode").classList.remove("ri-sun-line");
  }
});
