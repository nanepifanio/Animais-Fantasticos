export default function initAccordionList() {
  const faqTitle = document.querySelectorAll("[data-faq-anime='accordion']");
  const activeClass = "ativo";

  function openFaqText() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (faqTitle.length) {
    faqTitle[0].nextElementSibling.classList.add(activeClass);

    faqTitle.forEach((title) => {
      title.addEventListener("click", openFaqText);
    });
  }
}
