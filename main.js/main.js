(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,i){var r=e&&e.prototype instanceof p?e:p,o=Object.create(r.prototype),a=new M(i||[]);return o._invoke=function(t,e,n){var i=h;return function(r,o){if(i===d)throw new Error("Generator is already running");if(i===v){if("throw"===r)throw o;return D()}for(n.method=r,n.arg=o;;){var a=n.delegate;if(a){var s=x(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var c=l(t,e,n);if("normal"===c.type){if(i=n.done?v:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=v,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",v="completed",m={};function p(){}function y(){}function g(){}var w={};c(w,o,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(C([])));L&&L!==n&&i.call(L,o)&&(w=L);var E=g.prototype=p.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function n(r,o,a,s){var c=l(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&i.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var r;this._invoke=function(t,i){function o(){return new e((function(e,r){n(t,i,e,r)}))}return r=r?r.then(o,o):o()}}function x(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,x(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=l(i,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,m;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function n(){for(;++r<t.length;)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:D}}function D(){return{value:e,done:!0}}return y.prototype=g,c(E,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},k(T.prototype),c(T.prototype,a,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,i,r,o){void 0===o&&(o=Promise);var a=new T(u(e,n,i,r),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),c(E,s,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=C,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(i,r){return s.type="throw",s.arg=t,n.next=i,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;A(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:C(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}var r=function(){function e(n,i,r){t(this,e),this.imgsAnimais=document.querySelectorAll(n),this.animaisSection=document.querySelectorAll(i),this.activeClass=r}return i(e,[{key:"toAnimalDescription",value:function(t){var e=this,n=this.animaisSection[t].dataset.anime;this.animaisSection.forEach((function(t){t.classList.remove(e.activeClass)})),this.animaisSection[t].classList.add(this.activeClass,n)}},{key:"addTabNavListener",value:function(){var t=this;this.imgsAnimais.forEach((function(e,n){e.addEventListener("click",(function(){t.toAnimalDescription(n)}))}))}},{key:"init",value:function(){return this.animaisSection.length&&this.imgsAnimais.length&&(this.animaisSection[0].classList.add(this.animaisSection[0].dataset.anime,this.activeClass),this.addTabNavListener()),this}}]),e}(),o=function(){function e(n,i){t(this,e),this.accordionElements=document.querySelectorAll(n),this.cls=i,this.showText=this.showText.bind(this)}return i(e,[{key:"showText",value:function(t){t.currentTarget.classList.toggle(this.cls),t.currentTarget.nextElementSibling.classList.toggle(this.cls)}},{key:"accordionEventListener",value:function(){var t=this;this.accordionElements.forEach((function(e){e.addEventListener("click",t.showText)}))}},{key:"init",value:function(){return this.accordionElements.length&&(this.accordionEventListener(),this.accordionElements[0].nextElementSibling.classList.add(this.cls)),this}}]),e}(),a=function(){function e(n,i){t(this,e),this.linksInternos=document.querySelectorAll(n),this.options=void 0===i?{behavior:"smooth",block:"start"}:i,this.toSection=this.toSection.bind(this)}return i(e,[{key:"toSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinkEvent",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.toSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinkEvent(),this}}]),e}();function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var c=function(){function e(n,i){var r,o;t(this,e),this.sections=document.querySelectorAll(n),this.activeClass=i,this.checkDistance=(r=this.checkDistance.bind(this),50,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];o&&clearTimeout(o),o=setTimeout((function(){r.apply(void 0,e),o=null}),50)}),this.windowTop=.6*window.innerHeight}return i(e,[{key:"getDistance",value:function(){var t,e=this;this.distance=(t=this.sections,function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(t){var n=t.offsetTop;return{element:t,offset:Math.floor(n-e.windowTop)}}))}},{key:"checkDistance",value:function(){var t=this;this.distance.forEach((function(e){window.scrollY>e.offset?e.element.classList.add(t.activeClass):e.element.classList.contains(t.activeClass)&&e.element.classList.remove(t.activeClass)}))}},{key:"scrollEventListener",value:function(){window.addEventListener("scroll",this.checkDistance)}},{key:"init",value:function(){return this.sections.length&&(this.getDistance(),this.checkDistance(),this.scrollEventListener()),this}},{key:"stop",value:function(){window.removeEventListener("scroll",this.checkDistance)}}]),e}(),u=function(){function e(n,i,r,o){t(this,e),this.abrir=document.querySelector(n),this.fechar=document.querySelector(i),this.modalContainer=document.querySelector(r),this.activeClass=o}return i(e,[{key:"toggleModal",value:function(){this.modalContainer.classList.toggle(this.activeClass)}},{key:"addModalListener",value:function(){var t=this;document.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n===t.abrir&&t.toggleModal(),n===t.fechar&&t.toggleModal(),n===t.container&&t.toggleModal()}))}},{key:"init",value:function(){return this.abrir&&this.fechar&&this.modalContainer&&this.addModalListener(),this}}]),e}(),l=function(){function e(n){t(this,e),this.tooltips=document.querySelectorAll(n),this.showTooltip=this.showTooltip.bind(this),this.followMouse=this.followMouse.bind(this),this.closeToolTip=this.closeToolTip.bind(this)}return i(e,[{key:"showTooltip",value:function(t){var e=t.currentTarget;this.criarToolTipBox(e),e.addEventListener("mousemove",this.followMouse),e.addEventListener("mouseleave",this.closeToolTip)}},{key:"followMouse",value:function(t){var e=t.pageX,n=t.pageY;this.toolTipBox.style.top="".concat(n+20,"px"),e+240>window.innerWidth?this.toolTipBox.style.left="".concat(e-190,"px"):this.toolTipBox.style.left="".concat(e+20,"px")}},{key:"closeToolTip",value:function(t){var e=t.currentTarget;this.toolTipBox.remove(),e.removeEventListener("mouseleave",this.closeToolTip),e.removeEventListener("mousemove",this.followMouse)}},{key:"criarToolTipBox",value:function(t){var e=document.createElement("div"),n=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=n,document.body.appendChild(e),this.toolTipBox=e}},{key:"addTooltipListener",value:function(){var t=this;this.tooltips.forEach((function(e){e.addEventListener("mouseover",t.showTooltip)}))}},{key:"init",value:function(){return this.tooltips.length&&this.addTooltipListener(),this}}]),e}();function h(t,e,n){var i=document.documentElement,r="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(r),e.forEach((function(t){i.removeEventListener(t,o)})),n())}t.hasAttribute(r)||(e.forEach((function(t){setTimeout((function(){i.addEventListener(t,o)}))})),t.setAttribute(r,""))}var f=function(){function e(n,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["touchstart","click"];t(this,e),this.dropDownMenus=document.querySelectorAll(n),this.activeClass=i,this.userEvent=r,this.handleMenu=this.handleMenu.bind(this)}return i(e,[{key:"handleMenu",value:function(t){var e=this;t.preventDefault();var n=t.currentTarget;n.classList.add(this.activeClass),h(n,this.userEvent,(function(){n.classList.remove(e.activeClass)}))}},{key:"addDropDownListener",value:function(){var t=this;this.dropDownMenus.forEach((function(e){t.userEvent.forEach((function(n){e.addEventListener(n,t.handleMenu)}))}))}},{key:"init",value:function(){return this.dropDownMenus.length&&this.addDropDownListener(),this}}]),e}(),d=function(){function e(n,i,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["click","touchstart"];t(this,e),this.menuButton=document.querySelector(n),this.menuList=document.querySelector(i),this.activeClass=r,this.eventos=o,this.handleMenu=this.handleMenu.bind(this)}return i(e,[{key:"handleMenu",value:function(){var t=this;this.menuList.classList.add(this.activeClass),this.menuButton.classList.add(this.activeClass),h(this.menuList,this.eventos,(function(){t.menuList.classList.remove(t.activeClass),t.menuButton.classList.remove(t.activeClass)}))}},{key:"addMenuMobileListener",value:function(){var t=this;this.eventos.forEach((function(e){t.menuButton.addEventListener(e,t.handleMenu)}))}},{key:"init",value:function(){return this.menuButton&&this.menuList&&this.addMenuMobileListener(),this}}]),e}(),v=function(){function e(n,i){t(this,e),this.funcionamento=document.querySelector(n),this.colorStatus=i}return i(e,[{key:"dadosFuncionamento",value:function(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horariosSemana=this.funcionamento.dataset.horario.split(",").map(Number)}},{key:"dadosAtuais",value:function(){var t=new Date;this.diaSemana=t.getDay(),this.horarioAgora=t.getUTCHours()-3}},{key:"checaDados",value:function(){var t=this;return this.semanaAberto=this.diasSemana.some((function(e){return e===t.diaSemana})),this.horarioAberto=this.horarioAgora>=this.horariosSemana[0]&&this.horarioAgora<this.horariosSemana[1],this.semanaAberto&&this.horarioAberto}},{key:"fechadoOuAberto",value:function(){this.checaDados()&&this.funcionamento.classList.add(this.colorStatus)}},{key:"init",value:function(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAtuais(),this.fechadoOuAberto()),this}}]),e}();function m(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(i,r)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){m(o,i,r,a,s,"next",t)}function s(t){m(o,i,r,a,s,"throw",t)}a(void 0)}))}}var y=n(757),g=n.n(y),w=function(){function e(n,i,r){t(this,e),this.numeros=document.querySelectorAll(n),this.observeTarget=document.querySelector(i),this.observerClass=r,this.handleMutation=this.handleMutation.bind(this)}return i(e,[{key:"animaNumeros",value:function(){var t=this;this.numeros.forEach((function(e){return t.constructor.incrementarNumero(e)}))}},{key:"handleMutation",value:function(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}},{key:"addObserverListener",value:function(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observeTarget,{attributes:!0})}},{key:"init",value:function(){return this.numeros.length&&this.observeTarget&&this.addObserverListener(),this}}],[{key:"incrementarNumero",value:function(t){var e=+t.innerText,n=e/100,i=0,r=setInterval((function(){i+=n,t.innerText=i.toFixed(0),i>e&&(t.innerText=e,clearInterval(r))}),25*Math.random())}}]),e}();new r("[data-animais='tabNav']","[data-anime]","ativo").init(),new o("[data-faq-anime='accordion']","ativo").init(),new a("[data-menu='suave'] a[href^='#']").init(),new c("[data-section-anime='scrollAnime']","ativo").init(),new u("[data-modal='abrir']","[data-modal='fechar']","[data-modal='container']","ativo").init(),new l("[data-tooltip]").init(),new f("[data-dropdown]","ativo").init(),new d('[data-menu="button"]','[data-menu="list"]',"ativo").init(),new v("[data-semana]","aberto").init(),function(t,e){var n=document.querySelector(".numeros-grid");function i(t){t.forEach((function(t){var e=function(t){var e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML="<h3>".concat(t.especie,"</h3>\n                     <span data-numero>").concat(t.total,"</span>"),e}(t);n.appendChild(e)}))}function r(){new w("[data-numero]",".numeros","ativo").init()}function o(){return(o=p(g().mark((function e(){var o,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return o=e.sent,e.next=6,o.json();case 6:a=e.sent,n&&(i(a),r()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(Error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}("../../animaisapi.json"),fetch("https://blockchain.info/ticker").then((function(t){return t.json()})).then((function(t){return e=1e3/t.BRL.buy,void(document.querySelector(".btc-preco").innerText="".concat(e.toFixed(5).replace(".",",")));var e})).catch((function(t){return console.log(Error(t))}))})()})();