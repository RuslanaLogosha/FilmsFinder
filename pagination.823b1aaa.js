parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"o8lo":[function(require,module,exports) {
var e=[],t=document.getElementById("list"),n=document.getElementById("pagination"),c=document.querySelector(".arrow_left"),i=document.querySelector(".arrow_right"),r=1,a=5,d=Math.ceil(e.length/a);function l(e,t,n,c){t.innerHTML="";for(var i=n*--c,r=i+n,a=e.slice(i,r),d=0;d<a.length;d++){var l=a[d],o=document.createElement("div");o.classList.add("item"),o.innerText=l,t.appendChild(o)}}function o(e,t,n){t.innerHTML="";for(var c=Math.ceil(e.length/n),i=1;i<c+1;i++){var r=u(i,e);t.appendChild(r)}}function u(e,n){var c=document.createElement("button");return c.innerText=e,r==e&&c.classList.add("active"),c.addEventListener("click",function(){l(n,t,a,r=e),document.querySelector(".pagenumbers button.active").classList.remove("active"),c.classList.add("active")}),c}function s(){r>1&&(r--,o(e,n,a),l(e,t,a,r))}function v(){r<d&&(r++,o(e,n,a),l(e,t,a,r))}l(e,t,a,r),o(e,n,a),c.addEventListener("click",s),i.addEventListener("click",v);
},{}]},{},["o8lo"], null)
//# sourceMappingURL=/pagination.823b1aaa.js.map