const isInIndex = window.location.pathname.split('/').pop().startsWith("index");
		
// Set the correct path prefix based on the current file
let pathPrefix = isInIndex ? './' : '../../../';

let icon = document.getElementById("icon");

// Function to toggle theme and store preference
function toggleTheme() {
  document.body.classList.toggle("Dark-Theme");
  if (document.body.classList.contains("Dark-Theme")) {
    icon.src = `${pathPrefix}images/icons/theme-icon/moon.png`;
    localStorage.setItem("theme", "dark"); // Store theme preference
  } else {
    icon.src = `${pathPrefix}images/icons/theme-icon/sun.png`;
    localStorage.setItem("theme", "light"); // Store theme preference
  }
}

// Check if there's a theme preference stored
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("Dark-Theme");
  icon.src = `${pathPrefix}images/icons/theme-icon/moon.png`;
} else {
  icon.src = `${pathPrefix}images/icons/theme-icon/sun.png`;
}

// Event listener for click on icon to toggle theme
icon.onclick = toggleTheme;
