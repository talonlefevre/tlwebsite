function goToHome() {
  window.location.href = "index.html";
}

function goToAbout() {
  window.location.href = "about.html";
}
function goToServices() {
  window.location.href = "services.html";
} 
function goToContact() {
  window.location.href = "contact.html";
}

const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");

// main toggle
menuBtn.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}
