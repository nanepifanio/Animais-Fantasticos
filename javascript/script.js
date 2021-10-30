import initTabNav from "./tabNav.js";
initTabNav();

import initAccordionList from "./accordionList.js";
initAccordionList();

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
