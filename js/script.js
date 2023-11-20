document.addEventListener("DOMContentLoaded", function() {
    var logo = document.getElementById("logo");
    var mainContent = document.querySelector(".main-content");
    var logoContainer = document.querySelector(".logo-container");
    var body = document.getElementsByTagName("body")[0]

    var tl = gsap.timeline();

    // Get the dimensions of the logo and its container
    var originalLogoWidth = logo.offsetWidth;
    var originalLogoHeight = logo.offsetHeight;
    var containerWidth = logo.parentElement.offsetWidth;
    var containerHeight = logo.parentElement.offsetHeight;
    mainContent.style.opacity = 0;
    mainContent.style.display = "none";

    // Calculate the original goal destination based on the container dimensions
    var originalGoalDestinationX = containerWidth / 2 - originalLogoWidth / 2;
    var originalGoalDestinationY = containerHeight / 2 - originalLogoHeight / 2;

    tl.set(logo, { x: 0, y: 0, transformOrigin: "top left", scale: 1 })
      .to(logo, { duration: 2, opacity: 1, ease: "power2.inOut" })
      .to(logo, { duration: 2, height: "10%", ease: "power2.inOut" })
      .to(logo, {
          duration: 2,
          scale: 1, // Reset scale to 1 before recalculating the position
          x: -(originalGoalDestinationX + 110),
          y: -(originalGoalDestinationY + 70),
          ease: "power2.inOut",
          onComplete: function() {
            mainContent.style.display = 'block';
            mainContent.style.opacity = 1;
            body.style.overflow = "auto";
            
            logoContainer.remove()
          }
      });

});
