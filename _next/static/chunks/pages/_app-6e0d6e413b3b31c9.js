(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7973)}])},9749:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,l=void 0!==n&&n,c=e.priority,s=void 0!==c&&c,m=e.loading,g=e.lazyRoot,j=void 0===g?null:g,E=e.lazyBoundary,N=void 0===E?"200px":E,C=e.className,P=e.quality,I=e.width,L=e.height,R=e.style,M=e.objectFit,_=e.objectPosition,U=e.onLoadingComplete,B=e.placeholder,q=void 0===B?"empty":B,H=e.blurDataURL,V=v(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=u.useContext(p.ImageConfigContext),T=u.useMemo((function(){var e=b||D||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:r})}),[D]),W=V,K=r?"responsive":"intrinsic";"layout"in W&&(W.layout&&(K=W.layout),delete W.layout);var Q=z;if("loader"in W){if(W.loader){var X=W.loader;Q=function(e){e.config;var t=v(e,["config"]);return X(t)}}delete W.loader}var J="";if(function(e){return"object"===typeof e&&(A(e)||function(e){return void 0!==e.src}(e))}(t)){var F=A(t)?t.default:t;if(!F.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(F)));if(H=H||F.blurDataURL,J=F.src,(!K||"fill"!==K)&&(L=L||F.height,I=I||F.width,!F.height||!F.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(F)))}t="string"===typeof t?t:J;var G=S(I),Y=S(L),$=S(P),Z=!s&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=o(u.useState(!1),2),re=te[0],ne=te[1],ie=o(h.useIntersection({rootRef:j,rootMargin:N,disabled:!Z}),3),oe=ie[0],ae=ie[1],le=ie[2],ce=!Z||ae,se={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:_};0;0;var he=Object.assign({},R,"raw"===K?{}:fe),pe="blur"!==q||re?{}:{filter:"blur(20px)",backgroundSize:M||"cover",backgroundImage:'url("'.concat(H,'")'),backgroundPosition:_||"0% 0%"};if("fill"===K)se.display="block",se.position="absolute",se.top=0,se.left=0,se.bottom=0,se.right=0;else if("undefined"!==typeof G&&"undefined"!==typeof Y){var me=Y/G,ge=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===K?(se.display="block",se.position="relative",de=!0,ue.paddingTop=ge):"intrinsic"===K?(se.display="inline-block",se.position="relative",se.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(G,"%27%20height=%27").concat(Y,"%27/%3e")):"fixed"===K&&(se.display="inline-block",se.position="relative",se.width=G,se.height=Y)}else 0;var ye={src:x,srcSet:void 0,sizes:void 0};ce&&(ye=O({config:T,src:t,unoptimized:l,layout:K,width:G,quality:$,sizes:r,loader:Q}));var ve=t;0;var be,we="imagesrcset",xe="imagesizes";we="imageSrcSet",xe="imageSizes";var je=(i(be={},we,ye.srcSet),i(be,xe,ye.sizes),be),Ae=u.default.useLayoutEffect,Oe=u.useRef(U),Se=u.useRef(t);u.useEffect((function(){Oe.current=U}),[U]),Ae((function(){Se.current!==t&&(le(),Se.current=t)}),[le,t]);var ze=y({isLazy:Z,imgAttributes:ye,heightInt:Y,widthInt:G,qualityInt:$,layout:K,className:C,imgStyle:he,blurStyle:pe,loading:m,config:T,unoptimized:l,placeholder:q,loader:Q,srcString:ve,onLoadingCompleteRef:Oe,setBlurComplete:ne,setIntersection:oe,isVisible:ce},W);return u.default.createElement(u.default.Fragment,null,"raw"===K?u.default.createElement(k,Object.assign({},ze)):u.default.createElement("span",{style:se},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(k,Object.assign({},ze))),s?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},je))):null)};var c,s,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),d=(c=r(3121))&&c.__esModule?c:{default:c},f=r(139),h=r(9246),p=r(8730),m=(r(670),r(2700));function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){g(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}function v(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,x=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=new URL("".concat(t.path).concat(N(r))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,i=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(N(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(N(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function A(e){return void 0!==e.default}function O(e){var t=e.config,r=e.src,n=e.unoptimized,i=e.layout,o=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var u=function(e,t,r,n){var i=e.deviceSizes,o=e.allSizes;if(n&&("fill"===r||"responsive"===r||"raw"===r)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var u,d=.01*(u=Math).min.apply(u,a(s));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,c),d=u.widths,f=u.kind,h=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,n){return"".concat(s({config:t,src:r,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:r,quality:l,width:d[h]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=j.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(r))}function E(e,t,r,n,i,o){e&&e.src!==x&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===n&&o(!0),null===i||void 0===i?void 0:i.current)){var r=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:r,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,r=e.heightInt,n=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,c=e.blurStyle,s=e.isLazy,d=e.placeholder,f=e.loading,h=e.srcString,p=e.config,m=e.unoptimized,g=e.loader,b=e.onLoadingCompleteRef,w=e.setBlurComplete,x=e.setIntersection,j=e.onLoad,A=e.onError,S=(e.isVisible,v(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},S,t,"raw"===o?{height:r,width:n}:{},{decoding:"async","data-nimg":o,className:a,style:y({},l,c),ref:u.useCallback((function(e){x(e),(null===e||void 0===e?void 0:e.complete)&&E(e,h,0,d,b,w)}),[x,h,o,d,b,w]),onLoad:function(e){E(e.currentTarget,h,0,d,b,w),j&&j(e)},onError:function(e){"blur"===d&&w(!0),A&&A(e)}})),(s||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},S,O({config:p,src:h,unoptimized:m,layout:o,width:n,quality:i,sizes:t.sizes,loader:g}),"raw"===o?{height:r,width:n}:{},{decoding:"async","data-nimg":o,style:l,className:a,loading:f||"lazy"}))))};function N(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},l=r(1003),c=r(880),s=r(9246);function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var i=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;d[t+"%"+r+(i?"%"+i:"")]=!0}}var h=a.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,o=void 0===n?!0!==Boolean(!1):n,h=e.href,p=e.as,m=e.children,g=e.prefetch,y=e.passHref,v=e.replace,b=e.shallow,w=e.scroll,x=e.locale,j=e.onClick,A=e.onMouseEnter,O=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=m,o&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var S,z=!1!==g,E=c.useRouter(),k=a.default.useMemo((function(){var e=i(l.resolveHref(E,h,!0),2),t=e[0],r=e[1];return{href:t,as:p?l.resolveHref(E,p):r||t}}),[E,h,p]),N=k.href,C=k.as,P=a.default.useRef(N),I=a.default.useRef(C);o&&(S=a.default.Children.only(r));var L=o?S&&"object"===typeof S&&S.ref:t,R=i(s.useIntersection({rootMargin:"200px"}),3),M=R[0],_=R[1],U=R[2],B=a.default.useCallback((function(e){I.current===C&&P.current===N||(U(),I.current=C,P.current=N),M(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[C,L,N,U,M]);a.default.useEffect((function(){var e=_&&z&&l.isLocalURL(N),t="undefined"!==typeof x?x:E&&E.locale,r=d[N+"%"+C+(t?"%"+t:"")];e&&!r&&f(E,N,C,{locale:t})}),[C,N,_,x,z,E]);var q={ref:B,onClick:function(e){o||"function"!==typeof j||j(e),o&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,r,n,i,o,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),t[i?"replace":"push"](r,n,{shallow:o,locale:c,scroll:a}))}(e,E,N,C,v,b,w,x)},onMouseEnter:function(e){o||"function"!==typeof A||A(e),o&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),l.isLocalURL(N)&&f(E,N,C,{priority:!0})}};if(!o||y||"a"===S.type&&!("href"in S.props)){var H="undefined"!==typeof x?x:E&&E.locale,V=E&&E.isLocaleDomain&&l.getDomainLocale(C,H,E&&E.locales,E&&E.domainLocales);q.href=V||l.addBasePath(l.addLocale(C,H,E&&E.defaultLocale))}return o?a.default.cloneElement(S,q):a.default.createElement("a",Object.assign({},O,q),r)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!l,u=o.useRef(),d=i(o.useState(!1),2),f=d[0],h=d[1],p=i(o.useState(t?t.current:null),2),m=p[0],g=p[1],y=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=c.get(n):(t=c.get(r),s.push(r));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(r,t={id:r,observer:o,elements:i}),t}(r),i=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:r}))}),[n,m,r,f]),v=o.useCallback((function(){h(!1)}),[]);return o.useEffect((function(){if(!l&&!f){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&g(t.current)}),[t]),[y,f,v]};var o=r(7294),a=r(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},7973:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(5893),i=(r(6774),r(7294)),o=r(5675),a=r.n(o),l=r(1664),c=r.n(l),s={src:"/portfolio-v2/assets/_next/static/media/logoAltWhite.82597185.png",height:604,width:807,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAAXElEQVR42iWMsQpAYBzE/xTJCyij8Ch2JYNSshq8gCzfwmL4Vu/6y325uut+w50Rm1HhOcnUIlOk7NxcjOqxKRpeDhwPiQWRCxye7ceagpKONgz0wcbKwEwvL0wfRf4w2VTxVXAAAAAASUVORK5CYII="},u={src:"/portfolio-v2/assets/_next/static/media/logoAlt.866d2499.png",height:604,width:807,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAATElEQVR42gXAMQpFYAAA4M9f7yUXUEbhKHYlg1KyGlxAln9hMVhdVgSUHocUCfxtLqcBAWqvXXT7AZkoeqxAJVdoNQgSVovepDOZjR8PHwsl40+EeQAAAABJRU5ErkJggg=="},d=r(8193),f=r(9583),h=r(3750),p=r(1163),m=function(){var e=(0,i.useState)(!1),t=e[0],r=e[1],o=(0,i.useState)(!1),l=o[0],m=o[1],g=(0,i.useState)("#ecf0f3"),y=g[0],v=g[1],b=(0,i.useState)("#1f2937"),w=b[0],x=b[1],j=(0,i.useState)(u),A=j[0],O=j[1],S=(0,p.useRouter)();(0,i.useEffect)((function(){"/vpn"===S.asPath||"/forkify"===S.asPath||"/https"===S.asPath||"/android"===S.asPath?(v("transparent"),x("#ecf0f3")):(v("#ecf0f3"),x("#1f2937"))}),[S]);var z=function(){r(!t)},E=function(){v("#ecf0f3"),x("#1f2937"),O(u)};return(0,i.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>=90?m(!0):m(!1)}))}),[]),(0,i.useEffect)((function(){window.addEventListener("scroll",(function(){"/vpn"===S.asPath||"/forkify"===S.asPath||"/https"===S.asPath||"/android"===S.asPath?window.scrollY>=240?(v("#ecf0f3"),x("#1f2937"),O(u),m(!0)):(O(s),v("transparent"),x("#ecf0f3"),m(!1)):(O(u),v("#ecf0f3"),x("#1f2937"))}))}),[S]),(0,n.jsxs)("div",{style:{backgroundColor:"".concat(y)},className:l?"fixed w-full h-20 shadow-xl z-[100]":"fixed w-full h-20 z-[100]",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center w-full h-full px-10 2xl:px-16",children:[(0,n.jsx)("div",{className:"grid md:grid-cols-2 p-3",href:"/",children:(0,n.jsx)(c(),{href:"/",className:"absolute ",children:(0,n.jsx)(a(),{src:A.src,alt:"logo",width:"67",height:"50",className:"hover:",onClick:E})})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("ul",{style:{color:"".concat(w)},className:"hidden md:flex",children:[(0,n.jsx)(c(),{href:"/#home",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Incio"})}),(0,n.jsx)(c(),{href:"/#about",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Acerca de"})}),(0,n.jsx)(c(),{href:"/#skills",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Habilidades"})}),(0,n.jsx)(c(),{href:"/#projects",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Proyectos"})}),(0,n.jsx)(c(),{href:"/#contact",children:(0,n.jsx)("li",{className:"ml-10 text-sm uppercase hover:border-b",children:"Cotacto"})})]}),(0,n.jsx)("div",{onClick:z,className:"md:hidden",children:(0,n.jsx)(d.qTj,{style:{color:"".concat(w)},size:25})})]})]}),(0,n.jsx)("div",{className:t?"":"md:hidden fixed left-0 top-0 w-full h-screen bg-black/70",children:(0,n.jsxs)("div",{className:t?"fixed left-[-100%] top-0 p-10 ease-in duration-500":" fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex w-full items-center justify-between",children:[(0,n.jsx)(a(),{src:A.src,alt:"/",width:67,height:50,onClick:E}),(0,n.jsx)("div",{onClick:z,className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer",children:(0,n.jsx)(d.oHP,{})})]}),(0,n.jsx)("div",{className:"border-b border-gray-300 my-4",children:(0,n.jsx)("p",{className:"w-[85%] md:w-[90%] py-4",children:"Let`'`s build something together"})})]}),(0,n.jsxs)("div",{className:"py-4 flex flex-col",children:[(0,n.jsxs)("ul",{className:"uppercase",children:[(0,n.jsx)(c(),{href:"/#home",children:(0,n.jsx)("li",{onClick:z,className:"py-4 text-sm",children:"Inicio"})}),(0,n.jsx)(c(),{href:"/#about",children:(0,n.jsx)("li",{onClick:z,className:"py-4 text-sm",children:"Acerca de"})}),(0,n.jsx)(c(),{href:"/#skills",children:(0,n.jsx)("li",{onClick:z,className:"py-4 text-sm",children:"Habilidades"})}),(0,n.jsx)(c(),{href:"/#projects",children:(0,n.jsx)("li",{onClick:z,className:"py-4 text-sm",children:"Proyectos"})}),(0,n.jsx)(c(),{href:"/#contact",children:(0,n.jsx)("li",{onClick:z,className:"py-4 text-sm",children:"Cotacto"})})]}),(0,n.jsxs)("div",{className:"pt-40",children:[(0,n.jsx)("p",{className:"uppercase tracking-widest text-[#5661e5]",children:"Comuniqu\xe9monos"}),(0,n.jsxs)("div",{className:"flex items-center justify-between my-4 w-full sm:w-[80%]",children:[(0,n.jsx)(c(),{href:"https://www.linkedin.com/in/williams-amaya-580779231/",children:(0,n.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",children:(0,n.jsx)(f.BUd,{})})}),(0,n.jsx)(c(),{href:"https://github.com/whistemalo",children:(0,n.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",children:(0,n.jsx)(f.hJX,{})})}),(0,n.jsx)("a",{href:"mailto:whistemalo@gmail.com",children:(0,n.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",children:(0,n.jsx)(d.Dme,{})})}),(0,n.jsx)("a",{href:"Williams Amaya.pdf",children:(0,n.jsx)("div",{className:"rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",children:(0,n.jsx)(h.z8x,{})})})]})]})]})]})})]})};function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){g(e,t,r[t])}))}return e}var v=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{}),(0,n.jsx)(t,y({},r))]})}},6774:function(){},5675:function(e,t,r){e.exports=r(9749)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)},8193:function(e,t,r){"use strict";r.d(t,{Dme:function(){return o},oHP:function(){return i},qTj:function(){return a}});var n=r(8357);function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(e)}function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]})(e)}},3750:function(e,t,r){"use strict";r.d(t,{z8x:function(){return i}});var n=r(8357);function i(e){return(0,n.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"}}]})(e)}},9583:function(e,t,r){"use strict";r.d(t,{BUd:function(){return o},hJX:function(){return i}});var n=r(8357);function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return n.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,i=e.attr,o=e.size,c=e.title,s=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(880)}));var r=e.O();_N_E=r}]);