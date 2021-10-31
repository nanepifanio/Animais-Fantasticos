import initTabNav from "./tabNav.js";
initTabNav();

import AccordionList from "./accordionList.js";
const accordion = new AccordionList("[data-faq-anime='accordion']", "ativo");
accordion.init();

import SmoothScroll from "./smoothScroll.js";
const scrollSuave = new SmoothScroll("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

import initScrollAnimation from "./scrollAnimation.js";
initScrollAnimation();

import initModal from "./modal.js";
initModal();

import initToolTip from "./tooltip.js";
initToolTip();

import initDropDownMenu from "./dropdown-menu.js";
initDropDownMenu();

import initMenuMobile from "./menu-mobile.js";
initMenuMobile();

import initFuncionamento from "./funcionamento.js";
initFuncionamento();

import initFetchAnimais from "./fetch-animais.js";
initFetchAnimais();

import initFetchBitcoin from "./fetch-bitcoin.js";
initFetchBitcoin();
