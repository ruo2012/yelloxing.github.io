!function(n){function o(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}var e={};o.m=n,o.c=e,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:t})},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},o.p="",o(o.s=0)}([function(n,o,e){e(1),n.exports=e(5)},function(n,o,e){window.Core={},e(2),e(3),e(4)},function(n,o){window.doAjax=function(n,o,e){var t=getXHR();t.onreadystatechange=function(){4==this.readyState&&(200==this.status?o&&o(this.responseText):e&&e())},t.open("get",n+"?Token="+(new Date).valueOf(),!0),t.send()},window.getXHR=function(){var n=window.Core.xmlhttp;return n||(n=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP"),window.Core.xmlhttp=n,n)}},function(n,o){window.bookContentDom=void 0,window.contentDom=void 0,window.bookname="",window.doClipboard=function(n){window.clipboard(n.parentNode.innerText)},window.addClipboard=function(){var n,o,e=document.getElementsByClassName("code");for(n=0;n<e.length;n++)o=e[n],window.append(o,window.stringToDom('<div class="clipboard" onclick="doClipboard(this)"></div>'))},window.openBook=function(n){window.bookname=n.split(/\//)[1]+"/"+n.split(/\//)[2],window.location.hash=n.split(/\//)[1]+"/"+n.split(/\//)[2],window.bookContentDom||(window.bookContentDom=document.getElementById("book-content")),window.contentDom=void 0,window.doAjax(n,function(n){window.bookContentDom.innerHTML=n;var o=window.bookContentDom.getElementsByTagName("script");o.length>0&&window.eval.call(window,o[0].innerText)},function(){window.bookContentDom.innerHTML="通信错误"})},window.openContent=function(n,o){var e=document.getElementsByClassName("select");e.length>0&&e[0].setAttribute("class",""),n&&n.setAttribute("class","select"),window.location.hash=window.bookname+"/"+o.match(/\/([A-Za-z0-9]+)\./)[0].replace(/\//,"").replace(/\./,""),window.contentDom||(window.contentDom=document.getElementById("content")),window.doAjax(o,function(n){window.contentDom.innerHTML=n,window.addClipboard();var o=window.contentDom.getElementsByTagName("script");o.length>0&&window.eval.call(window,o[0].innerText)},function(){window.contentDom.innerHTML="通信错误"})}},function(n,o){window.prepend=function(n,o){if(1===o.nodeType||11===o.nodeType||9===o.nodeType)n.insertBefore(o,n.childNodes[0]);else{if("string"!=typeof o)throw new Error("Not acceptable type!");n.insertBefore(stringToDom(o),n.childNodes[0])}},window.append=function(n,o){if(1===o.nodeType||11===o.nodeType||9===o.nodeType)n.appendChild(o);else{if("string"!=typeof o)throw new Error("Not acceptable type!");n.appendChild(stringToDom(o))}},window.stringToDom=function(n){var o=document.createElement("div");return o.innerHTML=n,o.childNodes[0]},window.remove=function(n){n.parentNode.removeChild(n)},window.clipboard=function(n){window.prepend(document.getElementsByTagName("body")[0],window.stringToDom('<textarea id="clipboard-textarea">'+n+"</textarea>")),document.getElementById("clipboard-textarea").select(),document.execCommand("copy",!1,null),window.remove(document.getElementById("clipboard-textarea"))}},function(n,o){}]);