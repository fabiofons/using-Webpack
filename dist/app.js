!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);var r;e(1);(r=document.querySelector("#send")).addEventListener("keydown",function(n){13===n.keyCode&&""!==r.value&&(o(r),r.value="",a())});var o=function(n){var t=sessionStorage.getItem("userName");db.collection("messages").add({name:t,date:firebase.firestore.FieldValue.serverTimestamp(),body:n.value}).then(function(n){console.log("Document written with ID: ",n.id)})},i=document.getElementById("chat"),a=function(){i.scrollTop+i.clientHeight===i.scrollHeight||s()},s=function(){i.scrollTop=i.scrollHeight}},function(n,t,e){var r=e(2);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(4)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){(n.exports=e(3)(!1)).push([n.i,"* {\n  box-sizing: border-box;\n  font-family: 'Rubik', sans-serif; }\n\nbody, html {\n  height: 100vh; }\n\n.login {\n  /* display: none; */\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(25, 25, 25, 0.7);\n  z-index: 2; }\n\n.chart {\n  width: 400px;\n  margin: 200px auto 0;\n  padding: 10px;\n  height: 210px;\n  background: red;\n  color: white;\n  border-radius: 5px; }\n\n.chart h2 {\n  text-align: center; }\n\n.chart p {\n  margin-left: 10%; }\n\n.chart input[type=text] {\n  display: block;\n  width: 80%;\n  margin: 10px auto; }\n\n.chart button {\n  display: block;\n  height: 25px;\n  width: 50px;\n  margin-left: auto;\n  margin-right: 10%;\n  border-radius: 5px; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  font-size: 14px;\n  height: 100%; }\n\n.mainbox {\n  display: flex;\n  max-width: 1000px;\n  min-height: 750px;\n  height: 100%;\n  margin: 20px auto; }\n\n.contacts {\n  display: inline-block;\n  background-color: #343a40;\n  width: 270px;\n  height: 750px; }\n\n.contacts .user {\n  cursor: pointer;\n  position: relative; }\n\n.contacts .user .state {\n  font-size: 0.6rem;\n  color: lightgrey;\n  padding: 10px 10px 10px 20px; }\n\n.contacts .user .name {\n  display: inline-block;\n  font-size: 0.9rem;\n  color: lightgrey; }\n\n.contacts .user .fa-ellipsis-v {\n  position: absolute;\n  margin-top: 15px;\n  right: 20px;\n  font-size: 0.9rem;\n  color: white; }\n\n/* Active User */\n.user.active {\n  background-color: #007bff; }\n\n.user.active i.fa-circle {\n  background-color: #18ff18;\n  color: #18ff18;\n  border-radius: 50%; }\n\n.user.active .name {\n  font-weight: 500;\n  color: white; }\n\n.conversation {\n  display: inline-block;\n  height: 750px;\n  width: 100%; }\n\n.conversation .close-chat {\n  height: 5%;\n  border: 1px solid lightgray;\n  border-bottom: none;\n  color: gray; }\n\n.conversation .close-chat p {\n  font-size: 0.8rem;\n  padding: 10px 20px;\n  text-align: right;\n  margin: 0; }\n\n.conversation .chat {\n  height: 85%;\n  width: 100%;\n  overflow-y: scroll;\n  border: 1px solid lightgray;\n  border-bottom: none; }\n\n.conversation .chat .message {\n  padding-bottom: 5px;\n  margin-left: 10px; }\n\n.conversation .chat .message .title {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: gray;\n  margin: 20px 10px 10px; }\n\n.conversation .chat .message .title span {\n  font-weight: 400;\n  padding: 5px; }\n\n.conversation .chat .message .text {\n  font-size: 0.9rem;\n  margin: 0 10px 10px; }\n\n.conversation .type-zone {\n  display: flex;\n  height: 10%;\n  width: 100%;\n  border: 1px solid lightgray;\n  justify-content: center; }\n\n.conversation .type-zone .send {\n  margin-top: 10px;\n  width: 95%;\n  height: 40px;\n  padding: 7px 10px;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  text-align: left; }\n\n.conversation .type-zone i {\n  display: block;\n  position: relative;\n  top: 22px;\n  right: 30px;\n  color: gray;\n  font-size: 1rem; }\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot).concat(n," */")});return[e].concat(i).concat([o]).join("\n")}var a,s,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<n.length;a++){var s=n[a];null!=s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),c=null,l=0,u=[],f=e(5);function p(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(m(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,e);e.insertBefore(t,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function v(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return b(t,n.attrs),h(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function m(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=l++;e=c||(c=v(t)),r=w.bind(null,e,a,!1),o=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),h(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),o=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=v(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){g(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return p(e,t),function(n){for(var r=[],o=0;o<e.length;o++){var a=e[o];(s=i[a.id]).refs--,r.push(s)}n&&p(d(n,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var y,x=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function w(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);