document.getElementById("scroll-to").addEventListener("click", () => {
  document.getElementById("scroll-here").scrollIntoView({
    behavior: "smooth",
  });
});
