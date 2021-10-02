export default function initScrollAnimation() {
  const sections = document.querySelectorAll(
    "[data-section-anime='scrollAnime']"
  );
  const activeClass = "ativo";

  if (sections.length) {
    function scrollAnimate() {
      sections.forEach((section) => {
        const windowTop = window.scrollY + window.innerHeight * 0.6;
        if (windowTop > section.offsetTop) {
          section.classList.add(activeClass);
        } else if (section.classList.contains(activeClass)) {
          section.classList.remove(activeClass);
        }
      });
    }
    scrollAnimate();
    window.addEventListener("scroll", scrollAnimate);
  }
}
