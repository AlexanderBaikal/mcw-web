(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!o(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5566:function(e,t,n){"use strict";n.d(t,{w_:function(){return u},Pd:function(){return o}});var r=n(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var n,i=e.attr,o=e.size,l=e.title,u=c(e,["attr","size","title"]),s=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,u,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},6124:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2551:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(7294),i=n(1597),o=n(5566),a=n(5971),c=n(6726),l=c.default.nav.withConfig({displayName:"NavbarElements__Nav",componentId:"sc-jlg5wa-0"})(["background:",';height:80px;display:flex;justify-content:space-between;width:"100%";align-items:center;font-style:1rem;position:sticky;top:0;z-index:999;@media screen and (max-width:960px){background:',";transition:0.8s all ease;}"],(function(e){return e.active?"#fff":"#2196F3"}),(function(e){return e.click?"#fff":"rgba(255,255,255,1)"})),u=c.default.div.withConfig({displayName:"NavbarElements__NavbarContainer",componentId:"sc-jlg5wa-1"})(["display:flex;justify-content:space-between;height:80px;z-index:1;width:100%;padding-left:10%;padding-right:10%;"]),s=(0,c.default)(i.Link).withConfig({displayName:"NavbarElements__NavLogo",componentId:"sc-jlg5wa-2"})(["color:",";justify-self:flex-start;cursor:pointer;text-decoration:none;font-size:1.5rem;display:flex;align-items:center;@media screen and (max-width:960px){color:#2196f3;}"],(function(e){return e.dark?"#2196F3":"#fff"})),f=c.default.div.withConfig({displayName:"NavbarElements__MobileIcon",componentId:"sc-jlg5wa-3"})(["display:none;@media screen and (max-width:960px){display:block;position:absolute;top:0;right:0;transform:translate(-100%,60%);font-size:1.8rem;cursor:pointer;}"]),d=c.default.ul.withConfig({displayName:"NavbarElements__NavMenu",componentId:"sc-jlg5wa-4"})(["display:flex;align-items:center;list-style:none;text-align:center;margin-right:80px;@media screen and (max-width:960px){margin-right:0px;display:flex;flex-direction:column;width:fit-content;height:fit-content;position:absolute;top:",";right:0;opacity:1;transition:all 0.2s ease;background:#fff;}"],(function(e){return e.click?"100%":"-1000px"})),p=c.default.span.withConfig({displayName:"NavbarElements__SemiBold",componentId:"sc-jlg5wa-5"})(["font-weight:600;"]),m=(0,c.default)(i.Link).withConfig({displayName:"NavbarElements__NavLinks",componentId:"sc-jlg5wa-6"})(["color:",";display:flex;align-items:center;text-decoration:none;padding:0.5rem 1rem;height:100%;@media screen and (max-width:960px){text-align:center;padding:2rem;width:100%;display:table;color:#2196f3;&:hover{color:#000;transition:all 0.3s ease;}}@media screen and (max-width:960px){}"],(function(e){return e.dark?"#2196F3":"#fff"})),h=c.default.li.withConfig({displayName:"NavbarElements__NavItem",componentId:"sc-jlg5wa-7"})(["height:80px;display:flex;justify-content:center;@media screen and (max-width:960px){width:100%;}"]),y=c.default.div.withConfig({displayName:"NavbarElements__HiddenNarrow",componentId:"sc-jlg5wa-8"})(["display:flex;@media screen and (max-width:960px){display:none;}"]),g=c.default.div.withConfig({displayName:"NavbarElements__HiddenWide",componentId:"sc-jlg5wa-9"})(["display:none;@media screen and (max-width:960px){display:flex;}"]),b=n(8346),w=n.n(b),v=c.default.button.withConfig({displayName:"ButtonElements__Button",componentId:"sc-15iad85-0"})(["border-radius:4px;background:",";align-self:center;white-space:nowrap;padding:",";color:",";font-size:",';outline:none;border:1px #2196f3 solid;cursor:pointer;font-family:"Montserrat",sans-serif;&:hover{border-color:',";transition:all 0.3s ease-out;background:",";color:",";}@media screen and (max-width:960px){}"],(function(e){return e.primary?"#000":"#FFF"}),(function(e){return e.big?"16px 64px":"10px 20px"}),(function(e){return e.primary?"#fff":"#2196f3"}),(function(e){return e.fontBig?"20px":"16px"}),(function(e){return e.primary?"#fff":"#000"}),(function(e){return e.primary?"#fff":"#000"}),(function(e){return e.primary?"#2196f3":"#fff"})),E=n(5127),T=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],i=(0,r.useState)(!1),c=i[0],b=i[1],T=(0,E.Z)().width,x=function(){return n(!t)},C=function(){window.scrollY>=80?b(!0):b(!1)};return(0,r.useEffect)((function(){return C(),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]),r.createElement(r.Fragment,null,r.createElement(o.Pd.Provider,{value:{color:"#141414"}},r.createElement(l,{active:c,click:t},r.createElement(u,null,r.createElement(s,{dark:c,to:"/"},r.createElement(w(),{fill:c||T<960?"#2196F3":"#fff",style:{height:"40px",paddingRight:"12px"}}),T>=960?r.createElement(r.Fragment,null,r.createElement("span",null,"Mega"),r.createElement(p,null,"carwash")):null),r.createElement(f,{onClick:x},t?r.createElement(a.aHS,{color:"#2196F3"}):r.createElement(a.Fm7,{color:"#2196F3"})),r.createElement(d,{onClick:x,click:t},r.createElement(h,null,r.createElement(m,{dark:c,to:"/"},"Home")),r.createElement(h,null,r.createElement(m,{dark:c,to:"/author"},"Author")),r.createElement(g,null,r.createElement(h,null,r.createElement(m,{dark:c,to:"/"},"Contact us")))),r.createElement(h,null,r.createElement(y,null,r.createElement(v,null,"Contact us")))))))},x=n(3040),C=c.default.div.withConfig({displayName:"FooterElements__FooterContainer",componentId:"sc-1iruki0-0"})(["background-color:#101522;display:flex;flex-direction:column;justify-content:center;align-items:center;"]),k=(c.default.section.withConfig({displayName:"FooterElements__SocialMedia",componentId:"sc-1iruki0-1"})(["max-width:1000px;width:100%;"]),c.default.div.withConfig({displayName:"FooterElements__SocialMediaWrap",componentId:"sc-1iruki0-2"})(["display:flex;justify-content:space-between;align-items:center;width:90%;max-width:1000px;margin:20px auto;@media screen and (max-width:820px){flex-direction:column;}"])),O=(0,c.default)(i.Link).withConfig({displayName:"FooterElements__SocialLogo",componentId:"sc-1iruki0-3"})(["color:#fff;justify-self:start;cursor:pointer;text-decoration:none;font-style:2rem;display:flex;align-items:center;margin-bottom:16px;"]),A=((0,c.default)(x.kNg).withConfig({displayName:"FooterElements__SocialIcon",componentId:"sc-1iruki0-4"})(["margin-right:10px;"]),c.default.small.withConfig({displayName:"FooterElements__WebsiteRights",componentId:"sc-1iruki0-5"})(["color:#fff;margin-bottom:16px;"])),S=c.default.div.withConfig({displayName:"FooterElements__SocialIcons",componentId:"sc-1iruki0-6"})(["display:flex;justify-content:space-between;align-items:center;width:144px;"]),j=c.default.a.withConfig({displayName:"FooterElements__SocialIconLink",componentId:"sc-1iruki0-7"})(["color:#fff;font-size:24px;"]),N=function(){return r.createElement(C,null,r.createElement(k,null,r.createElement(O,{to:"/"},r.createElement(w(),{fill:"#fff",style:{height:"16px",paddingRight:"10px"}}),"Megacarwash"),r.createElement(A,null,"© 2022 Aleksandr Baranov"),r.createElement(S,null,r.createElement(j,{href:"https://github.com/AlexanderBaikal",target:"blank","aria-label":"Github"},r.createElement(a.hJX,null)),r.createElement(j,{href:"https://www.instagram.com/alex_baikalovvv/",target:"blank","aria-label":"Intagram"},r.createElement(a.Zf_,null)),r.createElement(j,{href:"https://www.linkedin.com/in/aleksandr-baikalov/",target:"blank","aria-label":"LinkedIn"},r.createElement(a.ltd,null)))))},_=function(e){var t=e.children;(0,i.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(T,null),r.createElement("main",null,t),r.createElement(N,null))}},9376:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,i,o,a,c=n(7294),l=n(5697),u=n.n(l),s=n(6124),f=n.n(s),d=n(523),p=n.n(d),m=n(4756),h=n.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",T="href",x="http-equiv",C="innerHTML",k="itemprop",O="name",A="property",S="rel",j="src",N="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",P="defer",L="encodeSpecialCharacters",M="onChangeClientState",F="titleTemplate",R=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),B=[w.NOSCRIPT,w.SCRIPT,w.STYLE],z="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){var t=J(e,w.TITLE),n=J(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,I);return t||r||void 0},V=function(e){return J(e,M)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],l=c.toLowerCase();-1===t.indexOf(l)||n===S&&"canonical"===e[n].toLowerCase()||l===S&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==E&&c!==k||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],l=h()({},r[c],i[c]);r[c]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;le(w.BODY,r),le(w.HTML,i),ce(f,d);var p={baseTag:ue(w.BASE,n),linkTags:ue(w.LINK,o),metaTags:ue(w.META,a),noscriptTags:ue(w.NOSCRIPT,c),scriptTags:ue(w.SCRIPT,u),styleTags:ue(w.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(z),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(z):n.getAttribute(z)!==a.join(",")&&n.setAttribute(z,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(z,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[z]=!0,i=fe(n,r),[c.createElement(w.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[z]=!0,r);return Object.keys(t).forEach((function(e){var n=_[e]||e;if(n===C||n===E){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===C||e===E)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,i,r),link:de(w.LINK,o,r),meta:de(w.META,a,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,l,r),style:de(w.STYLE,u,r),title:de(w.TITLE,{title:f,titleAttributes:d},r)}},me=f()((function(e){return{baseTag:$([T,N],e),bodyAttributes:Q(y,e),defer:J(e,P),encode:J(e,L),htmlAttributes:Q(g,e),linkTags:G(w.LINK,[S,T],e),metaTags:G(w.META,[O,v,x,A,k],e),noscriptTags:G(w.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:G(w.SCRIPT,[j,C],e),styleTags:G(w.STYLE,[E],e),title:Z(e),titleAttributes:Q(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),pe)((function(){return null})),he=(i=me,a=o=function(e){function t(){return D(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return Y({},i,((t={})[r.type]=a,t.titleAttributes=Y({},o),t));case w.BODY:return Y({},i,{bodyAttributes:Y({},o)});case w.HTML:return Y({},i,{htmlAttributes:Y({},o)})}return Y({},i,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(U(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(i,r)},q(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=n(1597);function ge(e){var t,n,r=e.description,i=e.lang,o=e.meta,a=e.title,l=(0,ye.useStaticQuery)("63159454").site,u=r||l.siteMetadata.description,s=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(he,{htmlAttributes:{lang:i},title:a,titleTemplate:s?"%s | "+s:null,meta:[{name:"description",content:u},{property:"og:title",content:a},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:a},{name:"twitter:description",content:u}].concat(o)})}ge.defaultProps={lang:"en",meta:[],description:""};var be=ge},5127:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294);function i(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function o(){var e=(0,r.useState)(i()),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(i())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}},8346:function(e,t,n){var r=n(7294);function i(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"megacarwash"),r.createElement("polygon",{points:"37.27 50.51 37.27 65.7 26.86 55.22 26.7 55.22 16.57 65.35 16.57 48.74 16.58 48.74 16.57 34.08 0.14 50.51 0 50.63 0 81.27 18.63 81.22 26.74 73.1 34.79 81.27 53.83 81.27 53.78 34 37.27 50.51",key:1}),r.createElement("polygon",{points:"16.56 30.76 16.56 15.57 26.97 26.05 27.13 26.05 37.26 15.92 37.26 32.54 37.25 32.54 37.26 47.19 53.69 30.76 53.83 30.64 53.83 0 35.2 0.06 27.08 8.18 19.03 0 0 0 0.05 47.27 16.56 30.76",key:2}),r.createElement("path",{d:"M49.73,42.32a4,4,0,1,1,0-2.36h4.1a8,8,0,1,0,0,2.36Z",transform:"translate(-18.97)",key:3})])}i.defaultProps={id:"layer_1","data-name":"Layer 1",viewBox:"0 0 53.83 81.27"},e.exports=i,i.default=i}}]);
//# sourceMappingURL=commons-2e8d3bd42dd87a77e911.js.map