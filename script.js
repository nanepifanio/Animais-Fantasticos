const qs = (elemento) => document.querySelector(elemento);
const qsa = (elemento) => document.querySelectorAll(elemento);

function initTabNav() {
  const imgsAnimais = qsa(".animais-lista li");
  const animaisSection = qsa("[data-anime]");
  const activeClass = "ativo";

  if (animaisSection.length && imgsAnimais.length) {
    animaisSection[0].classList.add(
      animaisSection[0].dataset.anime,
      activeClass
    );

    function toAnimalDescription(index) {
      const dataAnime = animaisSection[index].dataset.anime;
      animaisSection.forEach((section) => {
        section.classList.remove(activeClass);
      });
      animaisSection[index].classList.add(activeClass, dataAnime);
    }

    imgsAnimais.forEach((img, index) => {
      img.addEventListener("click", () => {
        toAnimalDescription(index);
      });
    });
  }
}
initTabNav();

function initAccordionList() {
  const faqTitle = qsa("dt");
  const activeClass = "ativo";

  if (faqTitle.length) {
    faqTitle[0].nextElementSibling.classList.add(activeClass);

    function openFaqText() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    faqTitle.forEach((title) => {
      title.addEventListener("click", openFaqText);
    });
  }
}
initAccordionList();

function initSmoothScroll() {
  const internalLinks = qsa('a[href^="#"]');

  function toSection(event) {
    event.preventDefault();
    const sectionId = this.getAttribute("href");
    window.scrollTo({
      top: qs(`${sectionId}`).offsetTop,
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
initSmoothScroll();

function initScrollAnimation() {
  const sections = qsa(".grid-section");
  const activeClass = "ativo";

  if (sections.length) {
    function scrollAnimate() {
      sections.forEach((section) => {
        const windowTop = window.scrollY + window.innerHeight * 0.6;
        if (windowTop > section.offsetTop) {
          section.classList.add(activeClass);
        } else {
          section.classList.remove(activeClass);
        }
      });
    }
  }
  scrollAnimate();
  window.addEventListener("scroll", scrollAnimate);
}
initScrollAnimation();
