import TabNav from "./tabNav.js";
const tabNav = new TabNav("[data-animais='tabNav']", "[data-anime]", "ativo");
tabNav.init();

import AccordionList from "./accordionList.js";
const accordion = new AccordionList("[data-faq-anime='accordion']", "ativo");
accordion.init();

import SmoothScroll from "./smoothScroll.js";
const scrollSuave = new SmoothScroll("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

import initScrollAnimation from "./scrollAnimation.js";
initScrollAnimation();

import Modal from "./modal.js";
const modal = new Modal(
  "[data-modal='abrir']",
  "[data-modal='fechar']",
  "[data-modal='container']",
  "ativo"
);
modal.init();

import ToolTip from "./tooltip.js";
const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

import initDropDownMenu from "./dropdown-menu.js";
initDropDownMenu();

import initMenuMobile from "./menu-mobile.js";
initMenuMobile();

import initFuncionamento from "./funcionamento.js";
initFuncionamento();

import fetchAnimais from "./fetch-animais.js";
fetchAnimais("../animaisapi.json", ".numeros-grid");

import fetchBitcoin from "./fetch-bitcoin.js";
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
