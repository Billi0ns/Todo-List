!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);o(1);let n=3,r=[{title:"Buy milk on my way home",notes:"One litter of milk",checkedState:"",todoid:"1",project:"default"},{title:"Drink milk",notes:"Drink a glass of milk",checkedState:"checked",todoid:"2",project:"default"}];const i=()=>{g(),h(),a(),d(),v(),l(),p()},a=()=>{Array.from(document.querySelectorAll(".todo__title")).map(e=>{e.addEventListener("input",e=>{c(e).title=e.target.value})})},d=()=>{Array.from(document.querySelectorAll(".todo__notes")).map(e=>{e.addEventListener("input",e=>{c(e).notes=e.target.value})})},c=e=>{const t=e.target.dataset.todoid;return r.find(e=>e.todoid===t)};document.querySelector(".addTodoBtn").addEventListener("click",e=>{n+=1;const t=s();r.push(t),f(t),i()});const s=()=>({title:"",notes:"",checkedState:"",todoid:""+n,project:document.querySelector(".project-title").textContent}),l=()=>{Array.from(document.querySelectorAll(".todo__deleteBtn")).map(e=>{e.addEventListener("click",u)})},u=e=>{const t=c(e);e.target.closest(".todo").remove(),r.splice(r.indexOf(t),1),console.log(r)},f=e=>{const t=document.querySelector(".todo-list"),o=`\n  <div class="todo">\n      <div class="todo__default">\n          <div class="todo__checkbox ${e.checkedState}"></div>\n          <input type="text" value="${e.title}" class="todo__title ${e.checkedState}" data-todoid="${e.todoid}" placeholder="New To-Do" readonly ></input>\n          <button class="todo__deleteBtn" data-todoid="${e.todoid}"></button>\n      </div>\n      <div class="todo__expand">\n          <textarea class="todo__notes resize-ta" placeholder="Notes" data-todoid="${e.todoid}">${e.notes}</textarea>\n      </div>\n  </div>`;t.insertAdjacentHTML("beforeend",o)},p=()=>{Array.from(document.querySelectorAll(".resize-ta")).map(e=>{e.addEventListener("keyup",()=>{e.style.height=m(e.value)+"px"})})},m=e=>20+16*(e.match(/\n/g)||[]).length+20,g=()=>{Array.from(document.querySelectorAll(".todo__default")).map(e=>{e.addEventListener("dblclick",b)})},b=e=>{const t=e.target,o=t.classList.contains("todo__checkbox"),n=t.classList.contains("todo__deleteBtn");o||n||(t.closest(".todo").classList.add("expanded"),document.querySelector(".todo.expanded .todo__title").removeAttribute("readonly"),window.getSelection().removeAllRanges())},h=()=>{window.addEventListener("click",e=>{const t=document.querySelector(".todo.expanded");if(t&&!t.contains(e.target)){document.querySelector(".todo.expanded .todo__title").setAttribute("readonly","true");Array.from(document.querySelectorAll(".expanded")).map(e=>{e.classList.remove("expanded")})}})},v=()=>{Array.from(document.querySelectorAll(".todo__checkbox")).map(e=>{e.addEventListener("click",_)})},_=e=>{e.target.classList.contains("checked")?(e=>{const t=e.target;t.classList.remove("checked"),t.nextElementSibling.classList.remove("checked")})(e):(e=>{const t=e.target;t.classList.add("checked"),t.nextElementSibling.classList.add("checked")})(e)};(e=>{e.map(e=>f(e))})(r),i()},function(e,t,o){var n=o(2),r=o(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);e.exports=r.locals||{}},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function d(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function c(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],s=o[c]||0,l="".concat(c," ").concat(s);o[c]=s+1;var u=d(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:b(f,t),references:1}),n.push(l)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,g=0;function b(e,t){var o,n,r;if(t.singleton){var i=g++;o=m||(m=s(t)),n=f.bind(null,o,i,!1),r=f.bind(null,o,i,!0)}else o=s(t),n=p.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=d(o[n]);a[r].references--}for(var i=c(e,t),s=0;s<o.length;s++){var l=d(o[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}o=i}}}},function(e,t,o){var n=o(4),r=o(5),i=o(6),a=o(7);t=n(!1);var d=r(i),c=r(a);t.push([e.i,'*,*::before,*::after{box-sizing:border-box}*{margin:0;padding:0}html{font-size:62.5%;font-family:"Montserrat",sans-serif;color:#fff}input{font-family:"Montserrat",sans-serif}.container{display:grid;grid-template-columns:25rem 1fr}.sidebar{background:#1f2225;height:100vh;padding:2rem;display:grid;grid-template-columns:auto 1fr;grid-template-rows:3.2rem auto}.sidebar__title{font-size:2rem;display:flex;align-items:center;margin-left:1rem}.sidebar__title>div{margin-left:1rem}.sidebar__list{font-size:1.5rem;margin-top:2rem;margin-left:1rem;grid-row:2/3;grid-column:2/3}.sidebar__list div{padding:5px;cursor:pointer;border-radius:3px}.sidebar__list div:hover{background-color:#ff007652}.sidebar__addProject{display:flex;align-items:center}.sidebar__addProject:hover{background-color:#1f2225 !important}.sidebar__addProject--text{background-color:#1f2225;border:none;outline:none;padding-right:2px;padding-bottom:2px;color:#fff;border-bottom:2px solid transparent}.sidebar__addProject--text:focus{border-bottom:2px solid #ff007652}.sidebar__addProjectBtn{font-size:2rem}.right-container{background:#23262a;height:100vh;padding:3rem 10rem}.header{display:flex;align-items:center}.header svg{fill:#ff0;width:2.5rem;height:2.5rem}.project-title{font-size:2.7rem;display:flex;align-items:center;margin-left:5px;padding-top:2px}.addTodoBtn{margin-left:auto;outline:none;border:none;color:#fff;background-color:inherit;position:relative;font-size:4rem;cursor:pointer}.todo-list{margin-top:5rem}.todo{border-radius:3px;transition:padding .3s ease,margin .3s ease;user-select:none}.todo__default{display:flex;align-items:center;padding:.5rem;border-radius:3px;z-index:10}.todo__default:hover{background-color:#264272}.todo__checkbox{width:1.3rem;height:1.3rem;border:1px solid #6b6d70;border-radius:3px;position:relative;cursor:pointer}.todo__checkbox::before{content:"";width:20px;height:20px;position:absolute;top:-5px;left:-4px;background:url('+d+");visibility:hidden}.todo__title{margin-left:1rem;font-size:1.5rem;background-color:inherit;border:none;color:#fff;outline:none;cursor:default;position:relative;width:100%}.todo__deleteBtn{background:url("+c+') no-repeat;background-size:contain;border:none;outline:none;height:1.7rem;transform:translateX(2rem);padding-right:1.7rem;opacity:0;cursor:pointer;transition:.3s ease-out}.todo:not(.expanded):hover .todo__deleteBtn,.todo__deleteBtn:hover{transform:translateX(0);transition:.3s ease;opacity:1}.todo__expand{padding:.5rem;margin-left:2.4rem;display:none}.todo.expanded{padding:1rem 0;margin:3rem 0;background-color:#2d3033;box-shadow:0px 3px 10px 2px rgba(0,0,0,.3);transition:padding .3s ease,margin .3s ease}.todo.expanded .todo__default{user-select:none}.todo.expanded .todo__default:hover{background-color:#2d3033}.todo.expanded .todo__title{cursor:text}.todo.expanded>.todo__expand{display:block}.todo__notes{color:#fff;font-size:1.4rem;background-color:#2d3033;border:none;resize:none;width:100%;height:4rem;font-family:"Montserrat",sans-serif;outline:none}.todo__checkbox.checked::before{visibility:visible}.todo__title.checked{text-decoration:line-through;color:#919395}',""]),e.exports=t},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,d=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(c," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(i).concat([r]).join("\n")}var a,d,c;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},function(e,t,o){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,o){"use strict";o.r(t),t.default=o.p+"b5c61e221f058b1be97467c6f8e422cc.svg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"cc76bc32cbf478b0f59eb944bb1398b3.svg"}]);