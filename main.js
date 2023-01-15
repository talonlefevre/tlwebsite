function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function goToHome() {
  console.log("goToHome function called");
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
