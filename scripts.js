document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM content to be fully loaded
  setTimeout(function () {
    // Hide the preloader with animation
    hidePreloader();
  }, 10);
});

function hidePreloader() {
  // Select the preloader element
  var preloader = document.getElementById("loader-wrapper");

  // Add the "loaded" class to trigger the bounce and fade animation
  document.body.classList.add("loaded");

  // After the animation duration, hide the preloader
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1000); // Adjust the time to match the animation duration
}
