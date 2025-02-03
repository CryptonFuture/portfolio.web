const typed = new Typed('.multiple-text', {
    strings: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'REACT JS'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})




document.addEventListener("DOMContentLoaded", function () {
    const skillCircles = document.querySelectorAll(".skill-circle");
  
    skillCircles.forEach((circle) => {
      const percent = circle.getAttribute("data-percent");
      circle.style.setProperty("--percent", `${(percent / 100) * 360}deg`);
    });
  });


   