export default function initAccordionList() {
  const faqTitle = document.querySelectorAll("[data-faq-anime='accordion']");
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
