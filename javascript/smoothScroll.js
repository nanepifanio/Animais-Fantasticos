export default function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  function toSection(event) {
    event.preventDefault();
    const sectionId = this.getAttribute("href");
    window.scrollTo({
      top: document.querySelector(`${sectionId}`).offsetTop,
      behavior: "smooth",
    });

    // Forma alternativa
    //   const section = qs(sectionId);
    //   section.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", toSection);
  });
}
