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
  
 const menu_btn = document.querySelector('.hamburger');

 menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
 });