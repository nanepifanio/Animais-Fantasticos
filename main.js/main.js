(()=>{"use strict";function t(t,e,n){const o=document.documentElement,a="data-outside";function c(i){t.contains(i.target)||(t.removeAttribute(a),e.forEach((t=>{o.removeEventListener(t,c)})),n())}t.hasAttribute(a)||(e.forEach((t=>{setTimeout((()=>{o.addEventListener(t,c)}))})),t.setAttribute(a,""))}!function(){const t=document.querySelectorAll("[data-animais='tabNav']"),e=document.querySelectorAll("[data-anime]"),n="ativo";if(e.length&&t.length){function o(t){const o=e[t].dataset.anime;e.forEach((t=>{t.classList.remove(n)})),e[t].classList.add(n,o)}e[0].classList.add(e[0].dataset.anime,n),t.forEach(((t,e)=>{t.addEventListener("click",(()=>{o(e)}))}))}}(),function(){const t=document.querySelectorAll("[data-faq-anime='accordion']"),e="ativo";function n(){this.classList.toggle(e),this.nextElementSibling.classList.toggle(e)}t.length&&(t[0].nextElementSibling.classList.add(e),t.forEach((t=>{t.addEventListener("click",n)})))}(),function(){function t(t){t.preventDefault();const e=this.getAttribute("href");window.scrollTo({top:document.querySelector(`${e}`).offsetTop,behavior:"smooth"})}document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",t)}))}(),function(){const t=document.querySelectorAll("[data-section-anime='scrollAnime']"),e="ativo";if(t.length){function n(){t.forEach((t=>{window.scrollY+.6*window.innerHeight>t.offsetTop?t.classList.add(e):t.classList.contains(e)&&t.classList.remove(e)}))}n(),window.addEventListener("scroll",n)}}(),function(){const t=document.querySelector("[data-modal='abrir']"),e=document.querySelector("[data-modal='fechar']"),n=document.querySelector("[data-modal='container']");if(t&&e&&n){function o(t){t.preventDefault(),t.target===this&&n.classList.toggle("ativo")}t.addEventListener("click",o),e.addEventListener("click",o),n.addEventListener("click",o)}}(),function(){const t=document.querySelectorAll("[data-tooltip]");function e(){const t=function(t){const e=document.createElement("div"),n=t.getAttribute("aria-label");return e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),e}(this);n.toolTipBox=t,n.element=this,this.addEventListener("mousemove",n),o.toolTipBox=t,o.element=this,this.addEventListener("mouseleave",o)}const n={handleEvent(t){this.toolTipBox.style.top=`${t.pageY+20}px`,this.toolTipBox.style.left=`${t.pageX+20}px`}},o={handleEvent(){this.toolTipBox.remove(),this.element.removeEventListener("mouseleave",o),this.element.removeEventListener("mousemove",n)}};t.forEach((t=>{t.addEventListener("mouseover",e)}))}(),function(){const e=document.querySelectorAll("[data-dropdown]"),n="ativo";if(e.length){function o(e){e.preventDefault(),this.classList.add(n),t(this,["touchstart","click"],(()=>{this.classList.remove(n)}))}e.forEach((t=>{["touchstart","click"].forEach((e=>{t.addEventListener(e,o)}))}))}}(),function(){const e=document.querySelector('[data-menu="button"]'),n=document.querySelector('[data-menu="list"]'),o="ativo",a=["click","touchstart"];if(e&&n){function c(){n.classList.add(o),e.classList.add(o),t(n,a,(()=>{n.classList.remove(o),e.classList.remove(o)}))}a.forEach((t=>{e.addEventListener(t,c)}))}}(),function(){const t=document.querySelector("[data-semana]");if(t){const e=t.dataset.semana.split(",").map(Number),n=t.dataset.horario.split(",").map(Number),o=new Date,a=o.getDay(),c=o.getHours(),i=e.some((t=>t===a)),s=c>=n[0]&&c<n[1];i&&s&&t.classList.add("aberto")}}(),async function(){try{const t=await fetch("./animaisapi.json"),e=await t.json(),n=document.querySelector(".numeros-grid");n&&(e.forEach((t=>{const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.especie}</h3>\n                     <span data-numero>${t.total}</span>`,e}(t);n.appendChild(e)})),function(){const t=document.querySelector(".numeros"),e=new MutationObserver((function(t){t[0].target.classList.contains("ativo")&&(e.disconnect(),document.querySelectorAll("[data-numero]").forEach((t=>{const e=+t.innerText,n=e/100;let o=0;const a=setInterval((()=>{o+=n,t.innerText=o.toFixed(0),o>e&&(t.innerText=e,clearInterval(a))}),25*Math.random())})))}));e.observe(t,{attributes:!0})}())}catch(t){console.log(Error(t))}}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>function(t){const e=1e3/t;document.querySelector(".btc-preco").innerText=`${e.toFixed(5).replace(".",",")}`}(t.BRL.buy))).catch((t=>console.log(Error(t))))})();