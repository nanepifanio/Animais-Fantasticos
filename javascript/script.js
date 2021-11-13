import TabNav from "./tabNav.js";
const tabNav = new TabNav("[data-animais='tabNav']", "[data-anime]", "ativo");
tabNav.init();

import AccordionList from "./accordionList.js";
const accordion = new AccordionList("[data-faq-anime='accordion']", "ativo");
accordion.init();

import SmoothScroll from "./smoothScroll.js";
const scrollSuave = new SmoothScroll("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

import ScrollAnima from "./scrollAnima.js";
const scrollAnima = new ScrollAnima(
  "[data-section-anime='scrollAnime']",
  "ativo"
);
scrollAnima.init();

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

import DropDownMenu from "./dropdown-menu.js";
const dropDown = new DropDownMenu("[data-dropdown]", "ativo");
dropDown.init();

import MenuMobile from "./menu-mobile.js";
const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="list"]',
  "ativo"
);
menuMobile.init();

import Funcionamento from "./funcionamento.js";
const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

import fetchAnimais from "./fetch-animais.js";
fetchAnimais("./animaisapi.json", ".numeros-grid");

import fetchBitcoin from "./fetch-bitcoin.js";
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
