(()=>{var e={448:e=>{window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=[],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],s={t:"top",r:"right",b:"bottom",l:"left",c:"centered"};function i(){}var c=["click","focusin","keydown","input"];function d(e){c.forEach((function(t){e.addEventListener(t,e===document?M:_)}))}function l(e){return Array.isArray(e)?e.map(l):"[object Object]"===I(e)?Object.keys(e).reduce((function(t,n){return t[n]=l(e[n]),t}),{}):e}function u(e,t){var n=e.calendar.querySelector(".qs-overlay"),o=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[p(t,e,o),m(t,e,o),f(e,o)].join(""),o&&window.requestAnimationFrame((function(){S(!0,e)}))}function p(e,t,n){return['<div class="qs-controls'+(n?" qs-blur":"")+'">','<div class="qs-arrow qs-left"></div>','<div class="qs-month-year">','<span class="qs-month">'+t.months[e.getMonth()]+"</span>",'<span class="qs-year">'+e.getFullYear()+"</span>","</div>",'<div class="qs-arrow qs-right"></div>',"</div>"].join("")}function m(e,t,n){var o=t.currentMonth,r=t.currentYear,a=t.dateSelected,s=t.maxDate,i=t.minDate,c=t.showAllDates,d=t.days,l=t.disabledDates,u=t.startDay,p=t.weekendIndices,m=t.events,f=t.getRange?t.getRange():{},y=+f.start,h=+f.end,g=w(new Date(e).setDate(1)),v=g.getDay()-u,b=v<0?7:0;g.setMonth(g.getMonth()+1),g.setDate(0);var D=g.getDate(),E=[],q=b+7*((v+D)/7|0);q+=(v+D)%7?7:0;for(var S=1;S<=q;S++){var x=(S-1)%7,I=d[x],j=S-(v>=0?v:7+v),M=new Date(r,o,j),_=m[+M],k=j<1||j>D,L=k?j<1?-1:1:0,B=k&&!c,P=B?"":M.getDate(),O=+M==+a,C=x===p[0]||x===p[1],Y=y!==h,A="qs-square "+I;_&&!B&&(A+=" qs-event"),k&&(A+=" qs-outside-current-month"),!c&&k||(A+=" qs-num"),O&&(A+=" qs-active"),(l[+M]||t.disabler(M)||C&&t.noWeekends||i&&+M<+i||s&&+M>+s)&&!B&&(A+=" qs-disabled"),+w(new Date)==+M&&(A+=" qs-current"),+M===y&&h&&Y&&(A+=" qs-range-start"),+M>y&&+M<h&&(A+=" qs-range-middle"),+M===h&&y&&Y&&(A+=" qs-range-end"),B&&(A+=" qs-empty",P=""),E.push('<div class="'+A+'" data-direction="'+L+'">'+P+"</div>")}var N=d.map((function(e){return'<div class="qs-square qs-day">'+e+"</div>"})).concat(E);return N.unshift('<div class="qs-squares'+(n?" qs-blur":"")+'">'),N.push("</div>"),N.join("")}function f(e,t){var n=e.overlayPlaceholder,o=e.overlayButton;return['<div class="qs-overlay'+(t?"":" qs-hidden")+'">',"<div>",'<input class="qs-overlay-year" placeholder="'+n+'" inputmode="numeric" />','<div class="qs-close">&#10005;</div>',"</div>",'<div class="qs-overlay-month-container">'+e.overlayMonths.map((function(e,t){return'<div class="qs-overlay-month" data-month-num="'+t+'">'+e+"</div>"})).join("")+"</div>",'<div class="qs-submit qs-disabled">'+o+"</div>","</div>"].join("")}function y(e,t,n){var o=t.el,r=t.calendar.querySelector(".qs-active"),a=e.textContent,s=t.sibling;(o.disabled||o.readOnly)&&t.respectDisabledReadOnly||(t.dateSelected=n?void 0:new Date(t.currentYear,t.currentMonth,a),r&&r.classList.remove("qs-active"),n||e.classList.add("qs-active"),g(o,t,n),n||E(t),s&&(h({instance:t,deselect:n}),t.first&&!s.dateSelected&&(s.currentYear=t.currentYear,s.currentMonth=t.currentMonth,s.currentMonthName=t.currentMonthName),u(t),u(s)),t.onSelect(t,n?void 0:new Date(t.dateSelected)))}function h(e){var t=e.instance.first?e.instance:e.instance.sibling,n=t.sibling;t===e.instance?e.deselect?(t.minDate=t.originalMinDate,n.minDate=n.originalMinDate):n.minDate=t.dateSelected:e.deselect?(n.maxDate=n.originalMaxDate,t.maxDate=t.originalMaxDate):t.maxDate=n.dateSelected}function g(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==i?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function v(e,t,n,o){n||o?(n&&(t.currentYear=+n),o&&(t.currentMonth=+o)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],u(t),t.onMonthChange(t)}function b(e){if(!e.noPosition){var t=e.position.top,n=e.position.right;if(e.position.centered)return e.calendarContainer.classList.add("qs-centered");var o=e.positionedEl.getBoundingClientRect(),r=e.el.getBoundingClientRect(),a=e.calendarContainer.getBoundingClientRect(),s=r.top-o.top+(t?-1*a.height:r.height)+"px",i=r.left-o.left+(n?r.width-a.width:0)+"px";e.calendarContainer.style.setProperty("top",s),e.calendarContainer.style.setProperty("left",i)}}function D(e){return"[object Date]"===I(e)&&"Invalid Date"!==e.toString()}function w(e){if(D(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function E(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&("overlay"!==e.defaultView&&S(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function q(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),"overlay"===e.defaultView&&S(!1,e),b(e),e.onShow(e))}function S(e,t){var n=t.calendar,o=n.querySelector(".qs-overlay"),r=o.querySelector(".qs-overlay-year"),a=n.querySelector(".qs-controls"),s=n.querySelector(".qs-squares");e?(o.classList.add("qs-hidden"),a.classList.remove("qs-blur"),s.classList.remove("qs-blur"),r.value=""):(o.classList.remove("qs-hidden"),a.classList.add("qs-blur"),s.classList.add("qs-blur"),r.focus())}function x(e,t,n,o){var r=isNaN(+(new Date).setFullYear(t.value||void 0)),a=r?null:t.value;13===e.which||13===e.keyCode||"click"===e.type?o?v(null,n,a,o):r||t.classList.contains("qs-disabled")||v(null,n,a):n.calendar.contains(t)&&n.calendar.querySelector(".qs-submit").classList[r?"add":"remove"]("qs-disabled")}function I(e){return{}.toString.call(e)}function j(e){o.forEach((function(t){t!==e&&E(t)}))}function M(e){if(!e.__qs_shadow_dom){var t=e.which||e.keyCode,n=e.type,r=e.target,s=r.classList,i=o.filter((function(e){return e.calendar.contains(r)||e.el===r}))[0],c=i&&i.calendar.contains(r);if(!(i&&i.isMobile&&i.disableMobile))if("click"===n){if(!i)return o.forEach(E);if(i.disabled)return;var d=i.calendar,l=i.calendarContainer,p=i.disableYearOverlay,m=i.nonInput,f=d.querySelector(".qs-overlay-year"),h=!!d.querySelector(".qs-hidden"),g=d.querySelector(".qs-month-year").contains(r),b=r.dataset.monthNum;if(i.noPosition&&!c)(l.classList.contains("qs-hidden")?q:E)(i);else if(s.contains("qs-arrow"))v(s,i);else if(g||s.contains("qs-close"))p||S(!h,i);else if(b)x(e,f,i,b);else{if(s.contains("qs-disabled"))return;if(s.contains("qs-num")){var D=r.textContent,w=+r.dataset.direction,I=new Date(i.currentYear,i.currentMonth+w,D);if(w){i.currentYear=I.getFullYear(),i.currentMonth=I.getMonth(),i.currentMonthName=a[i.currentMonth],u(i);for(var M,_=i.calendar.querySelectorAll('[data-direction="0"]'),k=0;!M;){var L=_[k];L.textContent===D&&(M=L),k++}r=M}return void(+I==+i.dateSelected?y(r,i,!0):r.classList.contains("qs-disabled")||y(r,i))}s.contains("qs-submit")?x(e,f,i):m&&r===i.el&&(q(i),j(i))}}else if("focusin"===n&&i)q(i),j(i);else if("keydown"===n&&9===t&&i)E(i);else if("keydown"===n&&i&&!i.disabled){var B=!i.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===t&&B&&c?x(e,r,i):27===t&&B&&c&&S(!0,i)}else if("input"===n){if(!i||!i.calendar.contains(r))return;var P=i.calendar.querySelector(".qs-submit"),O=r.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);r.value=O,P.classList[4===O.length?"remove":"add"]("qs-disabled")}}}function _(e){M(e),e.__qs_shadow_dom=!0}function k(e,t){c.forEach((function(n){e.removeEventListener(n,t)}))}function L(){q(this)}function B(){E(this)}function P(e,t){var n=w(e),o=this.currentYear,r=this.currentMonth,a=this.sibling;if(null==e)return this.dateSelected=void 0,g(this.el,this,!0),a&&(h({instance:this,deselect:!0}),u(a)),u(this),this;if(!D(e))throw new Error("`setDate` needs a JavaScript Date object.");if(this.disabledDates[+n]||n<this.minDate||n>this.maxDate)throw new Error("You can't manually set a date that's disabled.");this.dateSelected=n,t&&(this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()]),g(this.el,this),a&&(h({instance:this}),u(a));var s=o===n.getFullYear()&&r===n.getMonth();return s||t?u(this,n):s||u(this,new Date(o,r,1)),this}function O(e){return Y(this,e,!0)}function C(e){return Y(this,e)}function Y(e,t,n){var o=e.dateSelected,r=e.first,a=e.sibling,s=e.minDate,i=e.maxDate,c=w(t),d=n?"Min":"Max";function l(){return"original"+d+"Date"}function p(){return d.toLowerCase()+"Date"}function m(){return"set"+d}function f(){throw new Error("Out-of-range date passed to "+m())}if(null==t)e[l()]=void 0,a?(a[l()]=void 0,n?(r&&!o||!r&&!a.dateSelected)&&(e.minDate=void 0,a.minDate=void 0):(r&&!a.dateSelected||!r&&!o)&&(e.maxDate=void 0,a.maxDate=void 0)):e[p()]=void 0;else{if(!D(t))throw new Error("Invalid date passed to "+m());a?((r&&n&&c>(o||i)||r&&!n&&c<(a.dateSelected||s)||!r&&n&&c>(a.dateSelected||i)||!r&&!n&&c<(o||s))&&f(),e[l()]=c,a[l()]=c,(n&&(r&&!o||!r&&!a.dateSelected)||!n&&(r&&!a.dateSelected||!r&&!o))&&(e[p()]=c,a[p()]=c)):((n&&c>(o||i)||!n&&c<(o||s))&&f(),e[p()]=c)}return a&&u(a),u(e),e}function A(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function N(){var e=this.shadowDom,t=this.positionedEl,n=this.calendarContainer,r=this.sibling,a=this;this.inlinePosition&&(o.some((function(e){return e!==a&&e.positionedEl===t}))||t.style.setProperty("position",null)),n.remove(),o=o.filter((function(e){return e!==a})),r&&delete r.sibling,o.length||k(document,M);var s=o.some((function(t){return t.shadowDom===e}));for(var i in e&&!s&&k(e,_),this)delete this[i];o.length||c.forEach((function(e){document.removeEventListener(e,M)}))}function $(e,t){var n=new Date(e);if(!D(n))throw new Error("Invalid date passed to `navigate`");this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),u(this),t&&this.onMonthChange(this)}function F(){var e=!this.calendarContainer.classList.contains("qs-hidden"),t=!this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");e&&S(t,this)}t.default=function(e,t){var n=function(e,t){var n,c,d=function(e){var t=l(e);t.events&&(t.events=t.events.reduce((function(e,t){if(!D(t))throw new Error('"options.events" must only contain valid JavaScript Date objects.');return e[+w(t)]=!0,e}),{})),["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var n=t[e];if(n&&!D(n))throw new Error('"options.'+e+'" needs to be a valid JavaScript Date object.');t[e]=w(n)}));var n=t.position,a=t.maxDate,c=t.minDate,d=t.dateSelected,u=t.overlayPlaceholder,p=t.overlayButton,m=t.startDay,f=t.id;if(t.startDate=w(t.startDate||d||new Date),t.disabledDates=(t.disabledDates||[]).reduce((function(e,t){var n=+w(t);if(!D(t))throw new Error('You supplied an invalid date to "options.disabledDates".');if(n===+w(d))throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');return e[n]=1,e}),{}),t.hasOwnProperty("id")&&null==f)throw new Error("`id` cannot be `null` or `undefined`");if(null!=f){var y=o.filter((function(e){return e.id===f}));if(y.length>1)throw new Error("Only two datepickers can share an id.");y.length?(t.second=!0,t.sibling=y[0]):t.first=!0}var h=["tr","tl","br","bl","c"].some((function(e){return n===e}));if(n&&!h)throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');function g(e){throw new Error('"dateSelected" in options is '+(e?"less":"greater")+' than "'+(e||"max")+'Date".')}if(t.position=function(e){var t=e[0],n=e[1],o={};return o[s[t]]=1,n&&(o[s[n]]=1),o}(n||"bl"),a<c)throw new Error('"maxDate" in options is less than "minDate".');if(d&&(c>d&&g("min"),a<d&&g()),["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof t[e]&&(t[e]=i)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,n){var o=t[e],r=n?12:7;if(o){if(!Array.isArray(o)||o.length!==r||o.some((function(e){return"string"!=typeof e})))throw new Error('"'+e+'" must be an array with '+r+" strings.");t[n?n<2?"months":"overlayMonths":"days"]=o}})),m&&m>0&&m<7){var v=(t.customDays||r).slice(),b=v.splice(0,m);t.customDays=v.concat(b),t.startDay=+m,t.weekendIndices=[v.length-1,v.length]}else t.startDay=0,t.weekendIndices=[6,0];"string"!=typeof u&&delete t.overlayPlaceholder,"string"!=typeof p&&delete t.overlayButton;var E=t.defaultView;if(E&&"calendar"!==E&&"overlay"!==E)throw new Error('options.defaultView must either be "calendar" or "overlay".');return t.defaultView=E||"calendar",t}(t||{startDate:w(new Date),position:"bl",defaultView:"calendar"}),u=e;if("string"==typeof u)u="#"===u[0]?document.getElementById(u.slice(1)):document.querySelector(u);else{if("[object ShadowRoot]"===I(u))throw new Error("Using a shadow DOM as your selector is not supported.");for(var p,m=u.parentNode;!p;){var f=I(m);"[object HTMLDocument]"===f?p=!0:"[object ShadowRoot]"===f?(p=!0,n=m,c=m.host):m=m.parentNode}}if(!u)throw new Error("No selector / element found.");if(o.some((function(e){return e.el===u})))throw new Error("A datepicker already exists on that element.");var y=u===document.body,h=n?u.parentElement||n:y?document.body:u.parentElement,v=n?u.parentElement||c:h,b=document.createElement("div"),E=document.createElement("div");b.className="qs-datepicker-container qs-hidden",E.className="qs-datepicker";var S={shadowDom:n,customElement:c,positionedEl:v,el:u,parent:h,nonInput:"INPUT"!==u.nodeName,noPosition:y,position:!y&&d.position,startDate:d.startDate,dateSelected:d.dateSelected,disabledDates:d.disabledDates,minDate:d.minDate,maxDate:d.maxDate,noWeekends:!!d.noWeekends,weekendIndices:d.weekendIndices,calendarContainer:b,calendar:E,currentMonth:(d.startDate||d.dateSelected).getMonth(),currentMonthName:(d.months||a)[(d.startDate||d.dateSelected).getMonth()],currentYear:(d.startDate||d.dateSelected).getFullYear(),events:d.events||{},defaultView:d.defaultView,setDate:P,remove:N,setMin:O,setMax:C,show:L,hide:B,navigate:$,toggleOverlay:F,onSelect:d.onSelect,onShow:d.onShow,onHide:d.onHide,onMonthChange:d.onMonthChange,formatter:d.formatter,disabler:d.disabler,months:d.months||a,days:d.customDays||r,startDay:d.startDay,overlayMonths:d.overlayMonths||(d.months||a).map((function(e){return e.slice(0,3)})),overlayPlaceholder:d.overlayPlaceholder||"4-digit year",overlayButton:d.overlayButton||"Submit",disableYearOverlay:!!d.disableYearOverlay,disableMobile:!!d.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!d.alwaysShow,id:d.id,showAllDates:!!d.showAllDates,respectDisabledReadOnly:!!d.respectDisabledReadOnly,first:d.first,second:d.second};if(d.sibling){var x=d.sibling,j=S,M=x.minDate||j.minDate,_=x.maxDate||j.maxDate;j.sibling=x,x.sibling=j,x.minDate=M,x.maxDate=_,j.minDate=M,j.maxDate=_,x.originalMinDate=M,x.originalMaxDate=_,j.originalMinDate=M,j.originalMaxDate=_,x.getRange=A,j.getRange=A}d.dateSelected&&g(u,S);var k=getComputedStyle(v).position;y||k&&"static"!==k||(S.inlinePosition=!0,v.style.setProperty("position","relative"));var Y=o.filter((function(e){return e.positionedEl===S.positionedEl}));return Y.some((function(e){return e.inlinePosition}))&&(S.inlinePosition=!0,Y.forEach((function(e){e.inlinePosition=!0}))),b.appendChild(E),h.appendChild(b),S.alwaysShow&&q(S),S}(e,t);if(o.length||d(document),n.shadowDom&&(o.some((function(e){return e.shadowDom===n.shadowDom}))||d(n.shadowDom)),o.push(n),n.second){var c=n.sibling;h({instance:n,deselect:!n.dateSelected}),h({instance:c,deselect:!c.dateSelected}),u(c)}return u(n,n.startDate||n.dateSelected),n.alwaysShow&&b(n),n}}]).default}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=(e,t)=>{"object"==typeof t?window.localStorage.setItem(e,JSON.stringify(t)):window.localStorage.setItem(e,t)},t=e=>JSON.parse(window.localStorage.getItem(e)),o=(()=>{const e={popup:{id:null,description:""},selectedDate:null,selectedProject:null,selectedPriority:3,typedValue:"",type:"create",itemID:null};let t=e;return{get:()=>t,set:e=>(t={...t,...e},t),reset:()=>(t={...t,...e},t)}})(),r=(()=>{const n=t("idArray")||[];return{generate:()=>{const t=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}));let o=t();for(;n.includes(o);)o=t();return n.push(o),e("idArray",n),o}}})(),a=()=>{const e=o.get();return{description:e.popup.description,id:e.popup.id?e.popup.id:r.generate()}},s=(()=>{const n=t("projects")?t("projects"):[],o=()=>{e("projects",n)};return{get:()=>n,getItemById:e=>{for(const t of n)if(t.id===e)return t},add:e=>{n.push(e),o()},update:e=>{for(const t of n)t.id===e&&(n[n.indexOf(t)]=a());o()},remove:e=>{for(const t of n)t.id===e&&n.splice(n.indexOf(t),1);o()}}})(),i=e=>{const t=document.createElement("button");if(t.id=e.id,e.classes&&t.classList.add(...e.classes),t.type="button",e.icons&&e.icons.length)for(const n of e.icons){const e=document.createElement("i");n.id&&(e.id=n.id),e.classList.add(...n.classes),t.append(e)}if(e.description){const n=document.createElement("p");n.textContent=e.description,n.classList.add(`text--${e.id}`),n.id=`text--${e.id}`,t.append(n)}return t},c=(e,t)=>{const n=document.createElement("input");return n.type="text",n.id=e,n.placeholder=t,n.classList.add(`input--${e}`),n},d=e=>{const t="submit"===e.type,n=document.createElement("form");n.id="popup",n.classList.add("popup");const r=document.createElement("div");r.classList.add("popup__header-container");const a=document.createElement("h2");a.classList.add("popup__header"),a.textContent=t?"Add project":"Edit project",r.append(a);const d=document.createElement("div");d.classList.add("popup__content-container");const l=document.createElement("label");l.textContent="Name",l.classList.add("popup__name-label");const u=c("project-name","e.g. Work");u.id="name-input",d.append(l,u),t||(u.value=s.getItemById(o.get().popup.id).description);const p=document.createElement("div");p.classList.add("popup__controls");const m=i({id:t?"popup-submit":"popup-save",description:t?"Add":"Save",classes:["button","button--submit"]}),f=i({id:"popup-cancel",description:"Cancel",classes:["button"]});return p.append(m,f),n.append(r,d,p),n},l=e=>i({id:`${e}`,classes:["button","button--edit"],icons:[{id:"icon-edit",classes:["fa-fw","far","fa-edit"]}]}),u=e=>i({id:`${e}`,classes:["button","button--remove"],icons:[{id:"trash-alt",classes:["fa-fw","far","fa-trash-alt"]}]}),p=e=>{const t=e.getMonth(),n=e.getDate(),o=e.getFullYear();return m(e)?"Today":f(e)?"Tomorrow":y(e)?`${h(t)} ${n}`:`${h(t)} ${n} ${o}`},m=e=>{const t=new Date;return t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()&&t.getFullYear()===e.getFullYear()},f=e=>{const t=new Date;return t.getMonth()===e.getMonth()&&e.getDate()-t.getDate()==1&&t.getFullYear()===e.getFullYear()},y=e=>(new Date).getFullYear()===e.getFullYear();function h(e){switch(e){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Aug";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec"}}const g=(e,t)=>{const n=document.createElement("li");n.id=e.id,n.classList.add(`${t.listId}__item`);const o=document.createElement("div");o.classList.add(`${t.listId}__item-content`);const r=document.createElement("div");if(r.textContent=e.description,r.classList.add("text"),o.append(r),e.dueDate){const t=document.createElement("div");t.textContent=p(e.dueDate),t.classList.add("date-text"),o.append(t)}const a=document.createElement("div"),s=document.createElement("div");if(s.classList.add(`${t.listId}__controls`),t.sideButtons)for(const n of t.sideButtons){const o=n.func(`${n.id}|${e.id}`);o.classList.add(`${t.listId}__side-buttons`),a.append(o)}if(t.controlButtons)for(const n of t.controlButtons){const o=n.func(`${n.id}|${e.id}`);o.classList.add(`${t.listId}__control-buttons`),s.append(o)}return n.append(a,o,s),n},v=(e,t)=>{const n=document.createElement("ul");n.id=t.listId,n.classList.add(t.listId);const o=e;if(o.length)for(const e of o){const o=g(e,t);n.append(o)}return n},b=()=>v(s.get(),{listId:"project-list",controlButtons:[{id:"project-edit",func:l},{id:"project-remove",func:u}]}),D=i({id:"task-init",classes:["button","button--task-init"],description:"Add task",icons:[{id:"plus",classes:["fa","fa-plus","task_button__icons"]},{id:"plus-circle",classes:["fa","fa-plus-circle","task_button__icons"]}]}),w=()=>{const e=o.get();return{description:e.typedValue,dueDate:e.selectedDate,priority:e.selectedPriority,project:e.selectedProject,id:e.itemID?e.itemID:r.generate(),complete:!1}},E=(()=>{const n=t("toDoList")?t("toDoList"):[];for(const e of n)e.dueDate&&"object"!=typeof e.dueDate&&(e.dueDate=new Date(e.dueDate));const o=()=>{e("toDoList",n)};return{get:e=>n.filter(e),getItemById:e=>{for(const t of n)if(t.id===e)return t},add:e=>{n.push(e),o()},update:e=>{for(const t of n)t.id===e&&(n[n.indexOf(t)]=w());o()},remove:e=>{for(const t of n)t.id===e&&n.splice(n.indexOf(t),1);o()}}})(),q=e=>i({id:`${e}`,classes:["button","button--check-circle"],icons:[{id:"check-circle-off",classes:["far","fa-circle"]},{id:"check-circle-on",classes:["far","fa-check-circle"]}]}),S=()=>{document.getElementById("popup").remove(),document.getElementById("dark-screen").style.display="none"},x=e=>{switch(e){case 0:return"red";case 1:return"orange";case 2:return"blue";case 3:return null}},I=()=>{const e=document.createElement("form");e.classList.add("form"),e.id="task-editor";const t=o.get();t.itemID&&e.classList.add(t.itemID);const n=document.createElement("div");n.classList.add("input-controls");const r=c("input","e.g. Find my car keys again");r.value=t.typedValue;const a=document.createElement("div");a.classList.add("extras");const s=i({id:"date",classes:["button","button--date"],description:t.selectedDate?p(t.selectedDate):"Schedule"}),d=i({id:"project-picker",classes:["button","button--project-picker"],description:t.selectedProject?t.selectedProject.description:"Project"}),l=i({id:"priority-picker",classes:["button","button--priority-picker"],icons:[{id:"picker-icon",classes:[3===t.selectedPriority?"far":"fas","fa-flag"]}]});l.classList.add(x(t.selectedPriority)),a.append(s,d,l),n.append(r,a);const u=document.createElement("div");u.classList.add("form-controls");const m=i({id:"create"===t.type?"submit":"save",classes:["button","button--submit"],description:"create"===t.type?"Add task":"Save"});t.typedValue&&m.classList.add("button--submit--ready");const f=i({id:"cancel",classes:["button","button--cancel"],description:"Cancel"});return u.append(m,f),e.append(n,u),e},j=e=>{const t=document.createElement("ul");t.classList.add("project-picker-list"),t.id="project-picker-list";for(const n of e){const e=document.createElement("li");e.classList.add("project-picker-list__item"),e.number=n.id;const r=document.createElement("div");r.classList.add("project-picker-list__container");const a=document.createElement("i");a.classList.add("fas","fa-clipboard-list");const s=document.createElement("p");if(s.textContent=n.description,s.classList.add("project-picker-list__text"),r.append(a,s),o.get().selectedProject===n){const e=document.createElement("i");e.classList.add("fas","fa-check"),r.append(e)}e.append(r),t.append(e)}return document.getElementById("project-picker").append(t),j};var M=n(448),_=n.n(M);const k=()=>{const e=document.getElementById("task-editor"),t=(o.get(),I());e.replaceWith(t);const n=document.getElementById("date");_()(n,{disableYearOverlay:!0,minDate:new Date,onSelect:(e,t)=>{o.set({selectedDate:t}),k()}})},L=()=>{const e=document.getElementById("main");e.addEventListener("click",(t=>{if(D.contains(t.target)){D.remove(),o.reset(),console.log(o.get()),B(),document.getElementById("main").append(I());const e=document.getElementById("date");_()(e,{disableYearOverlay:!0,minDate:new Date,onSelect:(e,t)=>{o.set({selectedDate:t}),k()}})}t.target.matches("#date > *, #date")&&t.stopPropagation();const n=document.getElementById("project-picker-list"),r=document.getElementById("project-picker");if(n&&n.contains(t.target)){const e=document.querySelectorAll(".project-picker-list__item");for(const n of e)if(n.contains(t.target)){o.set({selectedProject:s.getItemById(n.number)}),k();break}}else n&&e.projectPickerOpen?(n.remove(),e.projectPickerOpen=!1):r&&r.contains(t.target)&&(j(s.get()),e.projectPickerOpen=!0);const a=document.getElementById("priority-picker"),i=document.getElementById("priority-picker-list");if(i&&i.contains(t.target)){const e=document.querySelectorAll(".priority-picker-list__item");for(const n of e)if(n.contains(t.target)){o.set({selectedPriority:n.number}),k();break}i.remove()}else i&&e.priorityPickerOpen?(i.remove(),e.priorityPickerOpen=!1):a&&a.contains(t.target)&&((()=>{const e=document.createElement("ul");e.classList.add("priority-picker-list"),e.id="priority-picker-list";for(let t=0;t<4;t++){const n=document.createElement("li");n.id=`priority-picker-list__item${t}`,n.number=t,n.classList.add("priority-picker-list__item");const r=document.createElement("div");r.classList.add("priority-picker-list__container");const a=x(t),s=document.createElement("i");s.classList.add("fas","fa-flag",a);const i=document.createElement("p");if(i.textContent=`Priority ${t+1}`,i.classList.add("priority-picker-list__text"),r.append(s,i),o.get().selectedPriority===t){const e=document.createElement("i");e.classList.add("fas","fa-check"),r.append(e)}n.append(r),e.append(n)}document.getElementById("priority-picker").append(e)})(),e.priorityPickerOpen=!0);const c=document.getElementById("cancel");if(c&&c.contains(t.target))return void B();const d=document.getElementById("submit");if(d&&d.contains(t.target)){if(!o.get().typedValue)return;const e=w();return E.add(e),void B()}if(t.target.matches(".button--remove, .button--remove > *, .button--remove > * > *")){const e=document.querySelectorAll(".todolist__item");for(const n of e)n.contains(t.target)&&(E.remove(n.id),n.remove())}if(t.target.matches(".button--edit, .button--edit > *, .button--edit > * > *")){const e=t.target.closest(".todolist__item");B();const n=document.getElementById(e.id),r=E.getItemById(n.id);o.set({typedValue:r.description,selectedDate:r.dueDate,selectedProject:r.project,selectedPriority:r.priority,type:"edit",itemID:r.id});const a=I();n.replaceWith(a);const s=document.getElementById("date");_()(s,{disableYearOverlay:!0,minDate:new Date,onSelect:(e,t)=>{o.set({selectedDate:t}),k()}})}const l=document.getElementById("save");if(l&&l.contains(t.target)){const e=o.get();if(!e.typedValue)return;E.update(e.itemID),B()}if(t.target.matches(".todolist__side-buttons *")){const e=t.target.closest(".todolist__item");E.update(e.id),B()}})),e.addEventListener("input",(e=>{const t=document.getElementById("input");if(t&&t.contains(e.target)){o.set({typedValue:t.value});const e=document.getElementById("submit"),n=document.getElementById("save");t.value&&(e&&e.classList.add("button--submit--ready"),n&&n.classList.add("button--submit--ready")),t.value||(e&&e.classList.remove("button--submit--ready"),n&&n.classList.remove("button--submit--ready"))}}))},B=e=>{e?o.set({currentPage:e}):e=o.get().currentPage;const t=document.createElement("div");t.id="main",t.classList.add("main-container"),document.getElementById("main")&&(document.getElementById("main").replaceWith(t),L());const n=document.createElement("h1");n.textContent=(e=>"project"===e.type?e.project.description:"today"===e.type?"Today":"upcoming"===e.type?"Upcoming":"Landing")(e);const r=(()=>{const e=o.get();let t;return t="project"===e.currentPage.type?t=>!!t.project&&t.project.id===e.currentPage.project.id:"today"===e.currentPage.type?e=>!!e.dueDate&&m(e.dueDate):"upcoming"===e.currentPage.type?e=>!!e.dueDate&&(e=>{const t=new Date;return(e.getTime()-t.getTime())/864e5<=14})(e.dueDate):()=>!0,v(E.get(t),{listId:"todolist",controlButtons:[{id:"edit",func:l},{id:"remove",func:u}],sideButtons:[{id:"check-circle",func:q}]})})();t.append(n,r,D),document.querySelectorAll(".todolist__side-buttons").forEach((e=>{const t=e.closest(".todolist__item"),n=E.getItemById(t.id);e.classList.add(x(n.priority))}))};(()=>{const e=document.body;e.addEventListener("click",(e=>{const t=document.getElementById("project-header");if(t&&t.contains(e.target)){const e=document.getElementById("project-list-container"),t="none"===e.style.display;e.style.display=t?"block":"none";const n=document.getElementById("collapse");n.style.animation=t?"unrotate 0.25s":"rotate 0.25s",setTimeout((()=>{n.style.transform=t?"rotate(0)":"rotate(-0.25turn)"}),200)}const n=document.getElementById("project-add");if(n&&n.contains(e.target)&&(document.getElementById("dark-screen").append(d({type:"submit"})),document.getElementById("dark-screen").style.display="flex"),e.target.matches(".button--remove, .button--remove > *, .button--remove > * > *")){const t=document.querySelectorAll(".project-list__item");for(const n of t)if(n.contains(e.target)){s.remove(n.id);break}return void document.getElementById("project-list").replaceWith(b())}if(e.target.matches(".button--edit, .button--edit > *, .button--edit > * > *")){const t=document.querySelectorAll(".project-list__item");for(const n of t)if(n.contains(e.target)){const e=s.getItemById(n.id);o.set({popup:{id:e.id,description:e.description}}),document.getElementById("dark-screen").append(d({type:"edit"})),document.getElementById("dark-screen").style.display="flex"}return}const r=document.getElementById("popup-cancel");r&&r.contains(e.target)&&S();const i=document.getElementById("popup-submit");if(i&&i.contains(e.target)){const e=a();s.add(e),S(),document.getElementById("project-list").replaceWith(b())}const c=document.getElementById("popup-save");if(c&&c.contains(e.target)&&(s.update(o.get().popup.id),S(),document.getElementById("project-list").replaceWith(b())),e.target.matches(".project-list__item, .project-list__item *")){const t=e.target.closest(".project-list__item");B({type:"project",project:s.getItemById(t.id)})}document.getElementById("home").contains(e.target)&&B({type:"home",project:"none"}),document.getElementById("today").contains(e.target)&&B({type:"today",project:"none"}),document.getElementById("upcoming").contains(e.target)&&B({type:"upcoming",project:"none"})})),e.addEventListener("input",(e=>{const t=document.getElementById("name-input");if(t&&t.contains(e.target)){const e=o.get().popup.id;o.set({popup:{description:t.value,id:e}})}}))})(),B({type:"home",projects:"none"}),L();const P=document.getElementById("project-list-container"),O=b();P.append(O)})()})();