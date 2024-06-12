AOS.init();
var loader = document.getElementById("loading");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", scrollToSectionFromLink);
});

function scrollToSectionFromLink(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  const sectionId = this.getAttribute("href").substring(1);
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
