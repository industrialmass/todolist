(()=>{var e={448:e=>{window,e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=[],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["January","February","March","April","May","June","July","August","September","October","November","December"],i={t:"top",r:"right",b:"bottom",l:"left",c:"centered"};function s(){}var c=["click","focusin","keydown","input"];function d(e){c.forEach((function(t){e.addEventListener(t,e===document?I:L)}))}function l(e){return Array.isArray(e)?e.map(l):"[object Object]"===M(e)?Object.keys(e).reduce((function(t,n){return t[n]=l(e[n]),t}),{}):e}function u(e,t){var n=e.calendar.querySelector(".qs-overlay"),o=n&&!n.classList.contains("qs-hidden");t=t||new Date(e.currentYear,e.currentMonth),e.calendar.innerHTML=[p(t,e,o),m(t,e,o),f(e,o)].join(""),o&&window.requestAnimationFrame((function(){S(!0,e)}))}function p(e,t,n){return['<div class="qs-controls'+(n?" qs-blur":"")+'">','<div class="qs-arrow qs-left"></div>','<div class="qs-month-year">','<span class="qs-month">'+t.months[e.getMonth()]+"</span>",'<span class="qs-year">'+e.getFullYear()+"</span>","</div>",'<div class="qs-arrow qs-right"></div>',"</div>"].join("")}function m(e,t,n){var o=t.currentMonth,r=t.currentYear,a=t.dateSelected,i=t.maxDate,s=t.minDate,c=t.showAllDates,d=t.days,l=t.disabledDates,u=t.startDay,p=t.weekendIndices,m=t.events,f=t.getRange?t.getRange():{},h=+f.start,y=+f.end,v=w(new Date(e).setDate(1)),g=v.getDay()-u,b=g<0?7:0;v.setMonth(v.getMonth()+1),v.setDate(0);var D=v.getDate(),E=[],q=b+7*((g+D)/7|0);q+=(g+D)%7?7:0;for(var S=1;S<=q;S++){var x=(S-1)%7,M=d[x],k=S-(g>=0?g:7+g),I=new Date(r,o,k),L=m[+I],j=k<1||k>D,B=j?k<1?-1:1:0,_=j&&!c,P=_?"":I.getDate(),O=+I==+a,C=x===p[0]||x===p[1],Y=h!==y,A="qs-square "+M;L&&!_&&(A+=" qs-event"),j&&(A+=" qs-outside-current-month"),!c&&j||(A+=" qs-num"),O&&(A+=" qs-active"),(l[+I]||t.disabler(I)||C&&t.noWeekends||s&&+I<+s||i&&+I>+i)&&!_&&(A+=" qs-disabled"),+w(new Date)==+I&&(A+=" qs-current"),+I===h&&y&&Y&&(A+=" qs-range-start"),+I>h&&+I<y&&(A+=" qs-range-middle"),+I===y&&h&&Y&&(A+=" qs-range-end"),_&&(A+=" qs-empty",P=""),E.push('<div class="'+A+'" data-direction="'+B+'">'+P+"</div>")}var N=d.map((function(e){return'<div class="qs-square qs-day">'+e+"</div>"})).concat(E);return N.unshift('<div class="qs-squares'+(n?" qs-blur":"")+'">'),N.push("</div>"),N.join("")}function f(e,t){var n=e.overlayPlaceholder,o=e.overlayButton;return['<div class="qs-overlay'+(t?"":" qs-hidden")+'">',"<div>",'<input class="qs-overlay-year" placeholder="'+n+'" inputmode="numeric" />','<div class="qs-close">&#10005;</div>',"</div>",'<div class="qs-overlay-month-container">'+e.overlayMonths.map((function(e,t){return'<div class="qs-overlay-month" data-month-num="'+t+'">'+e+"</div>"})).join("")+"</div>",'<div class="qs-submit qs-disabled">'+o+"</div>","</div>"].join("")}function h(e,t,n){var o=t.el,r=t.calendar.querySelector(".qs-active"),a=e.textContent,i=t.sibling;(o.disabled||o.readOnly)&&t.respectDisabledReadOnly||(t.dateSelected=n?void 0:new Date(t.currentYear,t.currentMonth,a),r&&r.classList.remove("qs-active"),n||e.classList.add("qs-active"),v(o,t,n),n||E(t),i&&(y({instance:t,deselect:n}),t.first&&!i.dateSelected&&(i.currentYear=t.currentYear,i.currentMonth=t.currentMonth,i.currentMonthName=t.currentMonthName),u(t),u(i)),t.onSelect(t,n?void 0:new Date(t.dateSelected)))}function y(e){var t=e.instance.first?e.instance:e.instance.sibling,n=t.sibling;t===e.instance?e.deselect?(t.minDate=t.originalMinDate,n.minDate=n.originalMinDate):n.minDate=t.dateSelected:e.deselect?(n.maxDate=n.originalMaxDate,t.maxDate=t.originalMaxDate):t.maxDate=n.dateSelected}function v(e,t,n){if(!t.nonInput)return n?e.value="":t.formatter!==s?t.formatter(e,t.dateSelected,t):void(e.value=t.dateSelected.toDateString())}function g(e,t,n,o){n||o?(n&&(t.currentYear=+n),o&&(t.currentMonth=+o)):(t.currentMonth+=e.contains("qs-right")?1:-1,12===t.currentMonth?(t.currentMonth=0,t.currentYear++):-1===t.currentMonth&&(t.currentMonth=11,t.currentYear--)),t.currentMonthName=t.months[t.currentMonth],u(t),t.onMonthChange(t)}function b(e){if(!e.noPosition){var t=e.position.top,n=e.position.right;if(e.position.centered)return e.calendarContainer.classList.add("qs-centered");var o=e.positionedEl.getBoundingClientRect(),r=e.el.getBoundingClientRect(),a=e.calendarContainer.getBoundingClientRect(),i=r.top-o.top+(t?-1*a.height:r.height)+"px",s=r.left-o.left+(n?r.width-a.width:0)+"px";e.calendarContainer.style.setProperty("top",i),e.calendarContainer.style.setProperty("left",s)}}function D(e){return"[object Date]"===M(e)&&"Invalid Date"!==e.toString()}function w(e){if(D(e)||"number"==typeof e&&!isNaN(e)){var t=new Date(+e);return new Date(t.getFullYear(),t.getMonth(),t.getDate())}}function E(e){e.disabled||!e.calendarContainer.classList.contains("qs-hidden")&&!e.alwaysShow&&("overlay"!==e.defaultView&&S(!0,e),e.calendarContainer.classList.add("qs-hidden"),e.onHide(e))}function q(e){e.disabled||(e.calendarContainer.classList.remove("qs-hidden"),"overlay"===e.defaultView&&S(!1,e),b(e),e.onShow(e))}function S(e,t){var n=t.calendar,o=n.querySelector(".qs-overlay"),r=o.querySelector(".qs-overlay-year"),a=n.querySelector(".qs-controls"),i=n.querySelector(".qs-squares");e?(o.classList.add("qs-hidden"),a.classList.remove("qs-blur"),i.classList.remove("qs-blur"),r.value=""):(o.classList.remove("qs-hidden"),a.classList.add("qs-blur"),i.classList.add("qs-blur"),r.focus())}function x(e,t,n,o){var r=isNaN(+(new Date).setFullYear(t.value||void 0)),a=r?null:t.value;13===e.which||13===e.keyCode||"click"===e.type?o?g(null,n,a,o):r||t.classList.contains("qs-disabled")||g(null,n,a):n.calendar.contains(t)&&n.calendar.querySelector(".qs-submit").classList[r?"add":"remove"]("qs-disabled")}function M(e){return{}.toString.call(e)}function k(e){o.forEach((function(t){t!==e&&E(t)}))}function I(e){if(!e.__qs_shadow_dom){var t=e.which||e.keyCode,n=e.type,r=e.target,i=r.classList,s=o.filter((function(e){return e.calendar.contains(r)||e.el===r}))[0],c=s&&s.calendar.contains(r);if(!(s&&s.isMobile&&s.disableMobile))if("click"===n){if(!s)return o.forEach(E);if(s.disabled)return;var d=s.calendar,l=s.calendarContainer,p=s.disableYearOverlay,m=s.nonInput,f=d.querySelector(".qs-overlay-year"),y=!!d.querySelector(".qs-hidden"),v=d.querySelector(".qs-month-year").contains(r),b=r.dataset.monthNum;if(s.noPosition&&!c)(l.classList.contains("qs-hidden")?q:E)(s);else if(i.contains("qs-arrow"))g(i,s);else if(v||i.contains("qs-close"))p||S(!y,s);else if(b)x(e,f,s,b);else{if(i.contains("qs-disabled"))return;if(i.contains("qs-num")){var D=r.textContent,w=+r.dataset.direction,M=new Date(s.currentYear,s.currentMonth+w,D);if(w){s.currentYear=M.getFullYear(),s.currentMonth=M.getMonth(),s.currentMonthName=a[s.currentMonth],u(s);for(var I,L=s.calendar.querySelectorAll('[data-direction="0"]'),j=0;!I;){var B=L[j];B.textContent===D&&(I=B),j++}r=I}return void(+M==+s.dateSelected?h(r,s,!0):r.classList.contains("qs-disabled")||h(r,s))}i.contains("qs-submit")?x(e,f,s):m&&r===s.el&&(q(s),k(s))}}else if("focusin"===n&&s)q(s),k(s);else if("keydown"===n&&9===t&&s)E(s);else if("keydown"===n&&s&&!s.disabled){var _=!s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");13===t&&_&&c?x(e,r,s):27===t&&_&&c&&S(!0,s)}else if("input"===n){if(!s||!s.calendar.contains(r))return;var P=s.calendar.querySelector(".qs-submit"),O=r.value.split("").reduce((function(e,t){return e||"0"!==t?e+(t.match(/[0-9]/)?t:""):""}),"").slice(0,4);r.value=O,P.classList[4===O.length?"remove":"add"]("qs-disabled")}}}function L(e){I(e),e.__qs_shadow_dom=!0}function j(e,t){c.forEach((function(n){e.removeEventListener(n,t)}))}function B(){q(this)}function _(){E(this)}function P(e,t){var n=w(e),o=this.currentYear,r=this.currentMonth,a=this.sibling;if(null==e)return this.dateSelected=void 0,v(this.el,this,!0),a&&(y({instance:this,deselect:!0}),u(a)),u(this),this;if(!D(e))throw new Error("`setDate` needs a JavaScript Date object.");if(this.disabledDates[+n]||n<this.minDate||n>this.maxDate)throw new Error("You can't manually set a date that's disabled.");this.dateSelected=n,t&&(this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),this.currentMonthName=this.months[n.getMonth()]),v(this.el,this),a&&(y({instance:this}),u(a));var i=o===n.getFullYear()&&r===n.getMonth();return i||t?u(this,n):i||u(this,new Date(o,r,1)),this}function O(e){return Y(this,e,!0)}function C(e){return Y(this,e)}function Y(e,t,n){var o=e.dateSelected,r=e.first,a=e.sibling,i=e.minDate,s=e.maxDate,c=w(t),d=n?"Min":"Max";function l(){return"original"+d+"Date"}function p(){return d.toLowerCase()+"Date"}function m(){return"set"+d}function f(){throw new Error("Out-of-range date passed to "+m())}if(null==t)e[l()]=void 0,a?(a[l()]=void 0,n?(r&&!o||!r&&!a.dateSelected)&&(e.minDate=void 0,a.minDate=void 0):(r&&!a.dateSelected||!r&&!o)&&(e.maxDate=void 0,a.maxDate=void 0)):e[p()]=void 0;else{if(!D(t))throw new Error("Invalid date passed to "+m());a?((r&&n&&c>(o||s)||r&&!n&&c<(a.dateSelected||i)||!r&&n&&c>(a.dateSelected||s)||!r&&!n&&c<(o||i))&&f(),e[l()]=c,a[l()]=c,(n&&(r&&!o||!r&&!a.dateSelected)||!n&&(r&&!a.dateSelected||!r&&!o))&&(e[p()]=c,a[p()]=c)):((n&&c>(o||s)||!n&&c<(o||i))&&f(),e[p()]=c)}return a&&u(a),u(e),e}function A(){var e=this.first?this:this.sibling,t=e.sibling;return{start:e.dateSelected,end:t.dateSelected}}function N(){var e=this.shadowDom,t=this.positionedEl,n=this.calendarContainer,r=this.sibling,a=this;this.inlinePosition&&(o.some((function(e){return e!==a&&e.positionedEl===t}))||t.style.setProperty("position",null)),n.remove(),o=o.filter((function(e){return e!==a})),r&&delete r.sibling,o.length||j(document,I);var i=o.some((function(t){return t.shadowDom===e}));for(var s in e&&!i&&j(e,L),this)delete this[s];o.length||c.forEach((function(e){document.removeEventListener(e,I)}))}function F(e,t){var n=new Date(e);if(!D(n))throw new Error("Invalid date passed to `navigate`");this.currentYear=n.getFullYear(),this.currentMonth=n.getMonth(),u(this),t&&this.onMonthChange(this)}function V(){var e=!this.calendarContainer.classList.contains("qs-hidden"),t=!this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");e&&S(t,this)}t.default=function(e,t){var n=function(e,t){var n,c,d=function(e){var t=l(e);t.events&&(t.events=t.events.reduce((function(e,t){if(!D(t))throw new Error('"options.events" must only contain valid JavaScript Date objects.');return e[+w(t)]=!0,e}),{})),["startDate","dateSelected","minDate","maxDate"].forEach((function(e){var n=t[e];if(n&&!D(n))throw new Error('"options.'+e+'" needs to be a valid JavaScript Date object.');t[e]=w(n)}));var n=t.position,a=t.maxDate,c=t.minDate,d=t.dateSelected,u=t.overlayPlaceholder,p=t.overlayButton,m=t.startDay,f=t.id;if(t.startDate=w(t.startDate||d||new Date),t.disabledDates=(t.disabledDates||[]).reduce((function(e,t){var n=+w(t);if(!D(t))throw new Error('You supplied an invalid date to "options.disabledDates".');if(n===+w(d))throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');return e[n]=1,e}),{}),t.hasOwnProperty("id")&&null==f)throw new Error("`id` cannot be `null` or `undefined`");if(null!=f){var h=o.filter((function(e){return e.id===f}));if(h.length>1)throw new Error("Only two datepickers can share an id.");h.length?(t.second=!0,t.sibling=h[0]):t.first=!0}var y=["tr","tl","br","bl","c"].some((function(e){return n===e}));if(n&&!y)throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');function v(e){throw new Error('"dateSelected" in options is '+(e?"less":"greater")+' than "'+(e||"max")+'Date".')}if(t.position=function(e){var t=e[0],n=e[1],o={};return o[i[t]]=1,n&&(o[i[n]]=1),o}(n||"bl"),a<c)throw new Error('"maxDate" in options is less than "minDate".');if(d&&(c>d&&v("min"),a<d&&v()),["onSelect","onShow","onHide","onMonthChange","formatter","disabler"].forEach((function(e){"function"!=typeof t[e]&&(t[e]=s)})),["customDays","customMonths","customOverlayMonths"].forEach((function(e,n){var o=t[e],r=n?12:7;if(o){if(!Array.isArray(o)||o.length!==r||o.some((function(e){return"string"!=typeof e})))throw new Error('"'+e+'" must be an array with '+r+" strings.");t[n?n<2?"months":"overlayMonths":"days"]=o}})),m&&m>0&&m<7){var g=(t.customDays||r).slice(),b=g.splice(0,m);t.customDays=g.concat(b),t.startDay=+m,t.weekendIndices=[g.length-1,g.length]}else t.startDay=0,t.weekendIndices=[6,0];"string"!=typeof u&&delete t.overlayPlaceholder,"string"!=typeof p&&delete t.overlayButton;var E=t.defaultView;if(E&&"calendar"!==E&&"overlay"!==E)throw new Error('options.defaultView must either be "calendar" or "overlay".');return t.defaultView=E||"calendar",t}(t||{startDate:w(new Date),position:"bl",defaultView:"calendar"}),u=e;if("string"==typeof u)u="#"===u[0]?document.getElementById(u.slice(1)):document.querySelector(u);else{if("[object ShadowRoot]"===M(u))throw new Error("Using a shadow DOM as your selector is not supported.");for(var p,m=u.parentNode;!p;){var f=M(m);"[object HTMLDocument]"===f?p=!0:"[object ShadowRoot]"===f?(p=!0,n=m,c=m.host):m=m.parentNode}}if(!u)throw new Error("No selector / element found.");if(o.some((function(e){return e.el===u})))throw new Error("A datepicker already exists on that element.");var h=u===document.body,y=n?u.parentElement||n:h?document.body:u.parentElement,g=n?u.parentElement||c:y,b=document.createElement("div"),E=document.createElement("div");b.className="qs-datepicker-container qs-hidden",E.className="qs-datepicker";var S={shadowDom:n,customElement:c,positionedEl:g,el:u,parent:y,nonInput:"INPUT"!==u.nodeName,noPosition:h,position:!h&&d.position,startDate:d.startDate,dateSelected:d.dateSelected,disabledDates:d.disabledDates,minDate:d.minDate,maxDate:d.maxDate,noWeekends:!!d.noWeekends,weekendIndices:d.weekendIndices,calendarContainer:b,calendar:E,currentMonth:(d.startDate||d.dateSelected).getMonth(),currentMonthName:(d.months||a)[(d.startDate||d.dateSelected).getMonth()],currentYear:(d.startDate||d.dateSelected).getFullYear(),events:d.events||{},defaultView:d.defaultView,setDate:P,remove:N,setMin:O,setMax:C,show:B,hide:_,navigate:F,toggleOverlay:V,onSelect:d.onSelect,onShow:d.onShow,onHide:d.onHide,onMonthChange:d.onMonthChange,formatter:d.formatter,disabler:d.disabler,months:d.months||a,days:d.customDays||r,startDay:d.startDay,overlayMonths:d.overlayMonths||(d.months||a).map((function(e){return e.slice(0,3)})),overlayPlaceholder:d.overlayPlaceholder||"4-digit year",overlayButton:d.overlayButton||"Submit",disableYearOverlay:!!d.disableYearOverlay,disableMobile:!!d.disableMobile,isMobile:"ontouchstart"in window,alwaysShow:!!d.alwaysShow,id:d.id,showAllDates:!!d.showAllDates,respectDisabledReadOnly:!!d.respectDisabledReadOnly,first:d.first,second:d.second};if(d.sibling){var x=d.sibling,k=S,I=x.minDate||k.minDate,L=x.maxDate||k.maxDate;k.sibling=x,x.sibling=k,x.minDate=I,x.maxDate=L,k.minDate=I,k.maxDate=L,x.originalMinDate=I,x.originalMaxDate=L,k.originalMinDate=I,k.originalMaxDate=L,x.getRange=A,k.getRange=A}d.dateSelected&&v(u,S);var j=getComputedStyle(g).position;h||j&&"static"!==j||(S.inlinePosition=!0,g.style.setProperty("position","relative"));var Y=o.filter((function(e){return e.positionedEl===S.positionedEl}));return Y.some((function(e){return e.inlinePosition}))&&(S.inlinePosition=!0,Y.forEach((function(e){e.inlinePosition=!0}))),b.appendChild(E),y.appendChild(b),S.alwaysShow&&q(S),S}(e,t);if(o.length||d(document),n.shadowDom&&(o.some((function(e){return e.shadowDom===n.shadowDom}))||d(n.shadowDom)),o.push(n),n.second){var c=n.sibling;y({instance:n,deselect:!n.dateSelected}),y({instance:c,deselect:!c.dateSelected}),u(c)}return u(n,n.startDate||n.dateSelected),n.alwaysShow&&b(n),n}}]).default}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=(e,t)=>{"object"==typeof t?window.localStorage.setItem(e,JSON.stringify(t)):window.localStorage.setItem(e,t)},t=e=>JSON.parse(window.localStorage.getItem(e)),o=(()=>{const e={popup:{description:""},selectedDate:null,selectedProject:null,selectedPriority:3,typedValue:"",type:"create",itemID:null};let t=e;return{get:()=>t,set:e=>(t={...t,...e},t),reset:()=>(t=e,t)}})(),r=(()=>{const n=t("idArray")||[];return{generate:()=>{const t=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}));let o=t();for(;n.includes(o);)o=t();return n.push(o),e("idArray",n),o}}})(),a=()=>{const e=o.get();return{description:e.popup.description,id:e.popup.id?e.popup.id:r.generate()}},i=(()=>{const n=t("projects")?t("projects"):[];console.log(n);const o=()=>{e("projects",n)};return{get:()=>n,getItemById:e=>{for(const t of n)if(t.id===e)return t},add:e=>{n.push(e),o()},update:e=>{for(const t of n)t.id===e&&(n[n.indexOf(t)]=a());o()},remove:e=>{for(const t of n)t.id===e&&n.splice(n.indexOf(t),1);o()}}})(),s=e=>{const t=document.createElement("button");if(t.id=e.id,e.classes&&t.classList.add(...e.classes),t.type="button",e.icons&&e.icons.length)for(const n of e.icons){const e=document.createElement("i");n.id&&(e.id=n.id),e.classList.add(...n.classes),t.append(e)}if(e.description){const n=document.createElement("p");n.textContent=e.description,n.classList.add(`text--${e.id}`),n.id=`text--${e.id}`,t.append(n)}return t},c=s({id:"task-init",classes:["button","button--task-init"],description:"Add task",icons:[{id:"plus",classes:["fa","fa-plus","task_button__icons"]},{id:"plus-circle",classes:["fa","fa-plus-circle","task_button__icons"]}]}),d=(e,t)=>{const n=document.createElement("li");n.id=e.id,n.classList.add(`${t.listId}__item`);const o=document.createElement("div"),r=document.createElement("div");r.textContent=e.description,o.append(r);const a=document.createElement("div"),i=document.createElement("div");if(i.classList.add(`${t.listId}__controls`),t){if(t.sideButtons)for(const e of t.sideButtons)a.append(e.func(e.id));if(t.controlButtons)for(const e of t.controlButtons)i.append(e.func(e.id))}return n.append(a,o,i),n},l=(e,t)=>{const n=document.createElement("ul");n.id=t.listId,n.classList.add(t.listId);const o=e;if(o.length)for(const e of o){const o=d(e,t);n.append(o)}return n},u=()=>{const e=o.get();return{description:e.typedValue,dueDate:e.selectedDate,priority:e.selectedPriority,project:e.selectedProject,id:e.itemID?e.itemID:r.generate()}},p=(()=>{const n=t("toDoList")?t("toDoList"):[];for(const e of n)e.dueDate&&"object"!=typeof e.dueDate&&(e.dueDate=new Date(e.dueDate));const o=()=>{e("toDoList",n)};return{get:()=>n,getItemById:e=>{for(const t of n)if(t.id===e)return t},add:e=>{n.push(e),o()},update:e=>{for(const t of n)t.id===e&&(n[n.indexOf(t)]=u());o()},remove:e=>{for(const t of n)t.id===e&&n.splice(n.indexOf(t),1);o()}}})(),m=e=>s({id:`${e}`,classes:["button","button--check-circle"],icons:[{id:"check-circle-off",classes:["far","fa-circle"]},{id:"check-circle-on",classes:["far","fa-check-circle"]}]}),f=e=>s({id:`${e}`,classes:["button","button--edit"],icons:[{id:"icon-edit",classes:["fa-fw","far","fa-edit"]}]}),h=e=>s({id:`${e}`,classes:["button","button--remove"],icons:[{id:"trash-alt",classes:["fa-fw","far","fa-trash-alt"]}]}),y=()=>l(p.get(),{listId:"todolist",controlButtons:[{id:"remove",func:h},{id:"edit",func:f}],sideButtons:[{id:"check-circle",func:m}]}),v=(e,t)=>{const n=document.createElement("input");return n.type="text",n.id=e,n.placeholder=t,n.classList.add(`input--${e}`),n},g=e=>{const t=e.getFullYear(),n=e.getMonth(),o=e.getDate(),r=new Date,a=r.getMonth(),i=r.getDate(),s=r.getFullYear();return n===a&&o===i&&t===s?"Today":n===a&&o-i==1&&t===s?"Tomorrow":`${function(e){switch(e){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Aug";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec"}}(n)} ${o}`},b=e=>{switch(e){case 0:return"red";case 1:return"orange";case 2:return"blue";case 3:return null}},D=()=>{const e=document.createElement("form");e.classList.add("form"),e.id="task-editor";const t=o.get();t.itemID&&e.classList.add(t.itemID);const n=document.createElement("div");n.classList.add("input-controls");const r=v("input","e.g. Find my car keys again");r.value=t.typedValue;const a=document.createElement("div");a.classList.add("extras");const i=s({id:"date",classes:["button","button--date"],description:t.selectedDate?g(t.selectedDate):"Schedule"}),c=s({id:"project-picker",classes:["button","button--project-picker"],description:t.selectedProject?t.selectedProject.description:"Project"}),d=s({id:"priority-picker",classes:["button","button--priority-picker"],icons:[{id:"picker-icon",classes:[3===t.selectedPriority?"far":"fas","fa-flag"]}]});d.classList.add(b(t.selectedPriority)),a.append(i,c,d),n.append(r,a);const l=document.createElement("div");l.classList.add("form-controls");const u=s({id:"create"===t.type?"submit":"save",classes:["button","button--submit"],description:"create"===t.type?"Add task":"Save"}),p=s({id:"cancel",classes:["button","button--cancel"],description:"Cancel"});return l.append(u,p),e.append(n,l),e},w=e=>{const t=document.createElement("ul");t.classList.add("project-picker-list"),t.id="project-picker-list";for(const n of e){const e=document.createElement("li");e.classList.add("project-picker-list__item"),e.number=n.id;const r=document.createElement("div");r.classList.add("project-picker-list__container");const a=document.createElement("i");a.classList.add("fas","fa-clipboard-list");const i=document.createElement("p");if(i.textContent=n.description,i.classList.add("project-picker-list__text"),r.append(a,i),o.get().selectedProject===n){const e=document.createElement("i");e.classList.add("fas","fa-check"),r.append(e)}e.append(r),t.append(e)}return document.getElementById("project-picker").append(t),w};var E=n(448),q=n.n(E);const S=()=>{const e=document.getElementById("task-editor"),t=(o.get(),D());e.replaceWith(t);const n=document.getElementById("date");q()(n,{disableYearOverlay:!0,minDate:new Date,onSelect:(e,t)=>{o.set({selectedDate:t}),S()}})},x=((()=>{const e=document.body;e.addEventListener("click",(e=>{const t=document.getElementById("project-header");if(t&&t.contains(e.target)){const e=document.getElementById("project-list-container"),t="none"===e.style.display;e.style.display=t?"block":"none";const n=document.getElementById("collapse");n.style.animation=t?"unrotate 0.25s":"rotate 0.25s",setTimeout((()=>{n.style.transform=t?"rotate(0)":"rotate(-0.25turn)"}),200)}const n=document.getElementById("project-add");n&&n.contains(e.target)&&(document.getElementById("dark-screen").append((()=>{const e=document.createElement("form");e.id="popup",e.classList.add("popup");const t=document.createElement("h2");t.textContent="Add project";const n=document.createElement("div"),o=document.createElement("label");o.textContent="Name";const r=v("project-name","e.g. Work");r.id="name-input",n.append(o,r);const a=document.createElement("div");a.classList.add("popup__controls");const i=s({id:"popup-submit",description:"Add",classes:"button"}),c=s({id:"popup-cancel",description:"Cancel",classes:"button"});return a.append(i,c),e.append(t,n,a),e})()),document.getElementById("dark-screen").style.display="flex");const o=document.getElementById("popup-cancel");o&&o.contains(e.target)&&(document.getElementById("popup").remove(),document.getElementById("dark-screen").style.display="none");const r=document.getElementById("popup-submit");if(r&&r.contains(e.target)){const e=a();i.add(e),document.getElementById("popup").remove(),document.getElementById("dark-screen").style.display="none"}})),e.addEventListener("input",(e=>{const t=document.getElementById("name-input");t&&t.contains(e.target)&&o.set({popup:{description:t.value}})}))})(),()=>{const e=o.get(),t=document.getElementById("task-editor"),n=document.getElementById("main");if(t)if("edit"===e.type){const e=y();document.getElementById("todolist").replaceWith(e)}else t.remove(),n.append(c);o.reset()});(()=>{const e=document.getElementById("main"),t=document.createElement("h1");t.textContent="Landing";const n=y();e.append(t,n,c);const o=document.getElementById("project-list-container"),r=l(i.get(),{listId:"project-list",controlButtons:[{id:"project-remove",func:h},{id:"project-edit",func:f}]});o.append(r)})();const M=document.getElementById("main");M.addEventListener("click",(e=>{if(c.contains(e.target)){c.remove(),x(),M.append(D());const e=document.getElementById("date");q()(e,{disableYearOverlay:!0,minDate:new Date,onSelect:(e,t)=>{o.set({selectedDate:t}),S()}})}e.target.matches("#date > *, #date")&&e.stopPropagation();const t=document.getElementById("project-picker-list"),n=document.getElementById("project-picker");if(t&&t.contains(e.target)){const t=document.querySelectorAll(".project-picker-list__item");for(const n of t)if(n.contains(e.target)){o.set({selectedProject:i.getItemById(n.number)}),S();break}}else t&&M.projectPickerOpen?(t.remove(),M.projectPickerOpen=!1):n&&n.contains(e.target)&&(w(i.get()),M.projectPickerOpen=!0);const r=document.getElementById("priority-picker"),a=document.getElementById("priority-picker-list");if(a&&a.contains(e.target)){const t=document.querySelectorAll(".priority-picker-list__item");for(const n of t)if(n.contains(e.target)){o.set({selectedPriority:n.number}),S();break}a.remove()}else a&&M.priorityPickerOpen?(a.remove(),M.priorityPickerOpen=!1):r&&r.contains(e.target)&&((()=>{const e=document.createElement("ul");e.classList.add("priority-picker-list"),e.id="priority-picker-list";for(let t=0;t<4;t++){const n=document.createElement("li");n.id=`priority-picker-list__item${t}`,n.number=t,n.classList.add("priority-picker-list__item");const r=document.createElement("div");r.classList.add("priority-picker-list__container");const a=b(t),i=document.createElement("i");i.classList.add("fas","fa-flag",a);const s=document.createElement("p");if(s.textContent=`Priority ${t+1}`,s.classList.add("priority-picker-list__text"),r.append(i,s),o.get().selectedPriority===t){const e=document.createElement("i");e.classList.add("fas","fa-check"),r.append(e)}n.append(r),e.append(n)}document.getElementById("priority-picker").append(e)})(),M.priorityPickerOpen=!0);const s=document.getElementById("cancel");if(s&&s.contains(e.target))return void x();const d=document.getElementById("submit");if(d&&d.contains(e.target)){const e=document.getElementById("input");if(!e.value)return void M.append(document.createElement("span").textContent="yo");const t=u();p.add(t),e.value=null;const n=document.getElementById("todolist");return n&&n.remove(),M.append(y()),document.getElementById("task-editor").remove(),o.reset(),void M.append(c)}if(e.target.matches(".button--remove, .button--remove > *, .button--remove > * > *")){const t=document.querySelectorAll(".todolist__item");for(const n of t)n.contains(e.target)&&(p.remove(n.id),n.remove())}if(e.target.matches(".button--edit, .button--edit > *, .button--edit > * > *")){const t=document.querySelectorAll(".todolist__item");o.get();for(const n of t)if(n.contains(e.target)){x();const e=p.getItemById(n.id);o.set({typedValue:e.description,selectedDate:e.dueDate,selectedProject:e.project,selectedPriority:e.priority,type:"edit",itemID:e.id});const t=D();n.replaceWith(t);const r=document.getElementById("date");q()(r,{disableYearOverlay:!0,minDate:new Date,onSelect:(e,t)=>{o.set({selectedDate:t}),S()}})}}const l=document.getElementById("save");if(l&&l.contains(e.target)){const e=o.get();p.update(e.itemID),x()}})),M.addEventListener("input",(e=>{const t=document.getElementById("input");t&&t.contains(e.target)&&o.set({typedValue:t.value})}))})()})();