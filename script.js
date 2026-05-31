const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.style.background =
    window.scrollY > 50
      ? "rgba(5, 5, 5, 0.92)"
      : "rgba(5, 5, 5, 0.72)";
});