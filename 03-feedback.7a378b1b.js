function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var i,o,r,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function T(e){return c=e,f=setTimeout(h,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function h(){var e=v();if(j(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?m(n,r-(e-c)):n}(e))}function w(e){return f=void 0,g&&i?y(e):(i=o=void 0,a)}function O(){var e=v(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return T(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=u=o=f=void 0},O.flush=function(){return void 0===f?a:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),T=localStorage.getItem("feedback-form-state");if(T){const{email:e,message:t}=JSON.parse(T);y.email.value=e,y.message.value=t}y.addEventListener("input",e(t)((function(e){const{email:t,message:n}=e.currentTarget;localStorage.setItem("feedback-form-state",JSON.stringify({email:t.value,message:n.value}))}),500)),y.addEventListener("submit",(function(e){console.log(e.currentTarget),localStorage.removeItem("feedback-form-state"),y.reset()}));
//# sourceMappingURL=03-feedback.7a378b1b.js.map
