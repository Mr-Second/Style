/*!

Holder - client side image placeholders
Version 2.7.1+6hydf
© 2015 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  http://opensource.org/licenses/MIT

*/
!function(e){if(e.document){var t=e.document;t.querySelectorAll||(t.querySelectorAll=function(n){var r,i=t.createElement("style"),o=[];for(t.documentElement.firstChild.appendChild(i),t._qsa=[],i.styleSheet.cssText=n+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",e.scrollBy(0,0),i.parentNode.removeChild(i);t._qsa.length;)r=t._qsa.shift(),r.style.removeAttribute("x-qsa"),o.push(r);return t._qsa=null,o}),t.querySelector||(t.querySelector=function(e){var n=t.querySelectorAll(e);return n.length?n[0]:null}),t.getElementsByClassName||(t.getElementsByClassName=function(e){return e=String(e).replace(/^|\s+/g,"."),t.querySelectorAll(e)}),Object.keys||(Object.keys=function(e){if(e!==Object(e))throw TypeError("Object.keys called on non-object");var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n}),function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.atob=e.atob||function(e){e=String(e);var n,r=0,i=[],o=0,a=0;if(e=e.replace(/\s/g,""),e.length%4===0&&(e=e.replace(/=+$/,"")),e.length%4===1)throw Error("InvalidCharacterError");if(/[^+/0-9A-Za-z]/.test(e))throw Error("InvalidCharacterError");for(;r<e.length;)n=t.indexOf(e.charAt(r)),o=o<<6|n,a+=6,24===a&&(i.push(String.fromCharCode(o>>16&255)),i.push(String.fromCharCode(o>>8&255)),i.push(String.fromCharCode(255&o)),a=0,o=0),r+=1;return 12===a?(o>>=4,i.push(String.fromCharCode(255&o))):18===a&&(o>>=2,i.push(String.fromCharCode(o>>8&255)),i.push(String.fromCharCode(255&o))),i.join("")},e.btoa=e.btoa||function(e){e=String(e);var n,r,i,o,a,l,s,d=0,u=[];if(/[^\x00-\xFF]/.test(e))throw Error("InvalidCharacterError");for(;d<e.length;)n=e.charCodeAt(d++),r=e.charCodeAt(d++),i=e.charCodeAt(d++),o=n>>2,a=(3&n)<<4|r>>4,l=(15&r)<<2|i>>6,s=63&i,d===e.length+2?(l=64,s=64):d===e.length+1&&(s=64),u.push(t.charAt(o),t.charAt(a),t.charAt(l),t.charAt(s));return u.join("")}}(e),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(e){var t=this.__proto__||this.constructor.prototype;return e in this&&(!(e in t)||t[e]!==this[e])}),// copyright Paul Irish 2015
function(){if("performance"in e==!1&&(e.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in e.performance==!1){var t=Date.now();performance.timing&&performance.timing.navigationStart&&(t=performance.timing.navigationStart),e.performance.now=function(){return Date.now()-t}}}(),e.requestAnimationFrame||(e.webkitRequestAnimationFrame?!function(e){e.requestAnimationFrame=function(t){return webkitRequestAnimationFrame(function(){t(e.performance.now())})},e.cancelAnimationFrame=webkitCancelAnimationFrame}(e):e.mozRequestAnimationFrame?!function(e){e.requestAnimationFrame=function(t){return mozRequestAnimationFrame(function(){t(e.performance.now())})},e.cancelAnimationFrame=mozCancelAnimationFrame}(e):!function(e){e.requestAnimationFrame=function(t){return e.setTimeout(t,1e3/60)},e.cancelAnimationFrame=e.clearTimeout}(e))}}(this),function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports.Holder=t():e.Holder=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){(function(t){function r(e,t,n,r){var o=i(n.substr(n.lastIndexOf(e.domain)),e);o&&l({mode:null,el:r,flags:o,engineSettings:t})}function i(e,t){var n={theme:O(R.settings.themes.gray,null),stylesheets:t.stylesheets,instanceOptions:t};return e.match(/([\d]+p?)x([\d]+p?)(?:\?|$)/)?o(e,n):a(e,n)}function o(e,t){var n=e.split("?"),r=n[0].split("/");t.holderURL=e;var i=r[1],o=i.match(/([\d]+p?)x([\d]+p?)/);if(!o)return!1;if(t.fluid=-1!==i.indexOf("p"),t.dimensions={width:o[1].replace("p","%"),height:o[2].replace("p","%")},2===n.length){var a=T.parse(n[1]);if(a.bg&&(t.theme.background=(-1===a.bg.indexOf("#")?"#":"")+a.bg),a.fg&&(t.theme.foreground=(-1===a.fg.indexOf("#")?"#":"")+a.fg),a.theme&&t.instanceOptions.themes.hasOwnProperty(a.theme)&&(t.theme=O(t.instanceOptions.themes[a.theme],null)),a.text&&(t.text=a.text),a.textmode&&(t.textmode=a.textmode),a.size&&(t.size=a.size),a.font&&(t.font=a.font),a.align&&(t.align=a.align),t.nowrap=A.truthy(a.nowrap),t.auto=A.truthy(a.auto),A.truthy(a.random)){R.vars.cache.themeKeys=R.vars.cache.themeKeys||Object.keys(t.instanceOptions.themes);var l=R.vars.cache.themeKeys[0|Math.random()*R.vars.cache.themeKeys.length];t.theme=O(t.instanceOptions.themes[l],null)}}return t}function a(e,t){var n=!1,r=String.fromCharCode(11),i=e.replace(/([^\\])\//g,"$1"+r).split(r),o=/%[0-9a-f]{2}/gi,a=t.instanceOptions;t.holderURL=[];for(var l=i.length,s=0;l>s;s++){var d=i[s];if(d.match(o))try{d=decodeURIComponent(d)}catch(u){d=i[s]}var c=!1;if(R.flags.dimensions.match(d))n=!0,t.dimensions=R.flags.dimensions.output(d),c=!0;else if(R.flags.fluid.match(d))n=!0,t.dimensions=R.flags.fluid.output(d),t.fluid=!0,c=!0;else if(R.flags.textmode.match(d))t.textmode=R.flags.textmode.output(d),c=!0;else if(R.flags.colors.match(d)){var h=R.flags.colors.output(d);t.theme=O(t.theme,h),c=!0}else if(a.themes[d])a.themes.hasOwnProperty(d)&&(t.theme=O(a.themes[d],null)),c=!0;else if(R.flags.font.match(d))t.font=R.flags.font.output(d),c=!0;else if(R.flags.auto.match(d))t.auto=!0,c=!0;else if(R.flags.text.match(d))t.text=R.flags.text.output(d),c=!0;else if(R.flags.size.match(d))t.size=R.flags.size.output(d),c=!0;else if(R.flags.random.match(d)){null==R.vars.cache.themeKeys&&(R.vars.cache.themeKeys=Object.keys(a.themes));var f=R.vars.cache.themeKeys[0|Math.random()*R.vars.cache.themeKeys.length];t.theme=O(a.themes[f],null),c=!0}c&&t.holderURL.push(d)}return t.holderURL.unshift(a.domain),t.holderURL=t.holderURL.join("/"),n?t:!1}function l(e){var t=e.mode,n=e.el,r=e.flags,i=e.engineSettings,o=r.dimensions,a=r.theme,l=o.width+"x"+o.height;if(t=null==t?r.fluid?"fluid":"image":t,null!=r.text&&(a.text=r.text,"object"===n.nodeName.toLowerCase())){for(var d=a.text.split("\\n"),u=0;u<d.length;u++)d[u]=A.encodeHtmlEntity(d[u]);a.text=d.join("\\n")}var f=r.holderURL,g=O(i,null);if(r.font&&(a.font=r.font,!g.noFontFallback&&"img"===n.nodeName.toLowerCase()&&R.setup.supportsCanvas&&"svg"===g.renderer&&(g=O(g,{renderer:"canvas"}))),r.font&&"canvas"==g.renderer&&(g.reRender=!0),"background"==t)null==n.getAttribute("data-background-src")&&v(n,{"data-background-src":f});else{var p={};p[R.vars.dataAttr]=f,v(n,p)}r.theme=a,n.holderData={flags:r,engineSettings:g},("image"==t||"fluid"==t)&&v(n,{alt:a.text?a.text+" ["+l+"]":l});var m={mode:t,el:n,holderSettings:{dimensions:o,theme:a,flags:r},engineSettings:g};"image"==t?("html"!=g.renderer&&r.auto||(n.style.width=o.width+"px",n.style.height=o.height+"px"),"html"==g.renderer?n.style.backgroundColor=a.background:(s(m),"exact"==r.textmode&&(n.holderData.resizeUpdate=!0,R.vars.resizableImages.push(n),c(n)))):"background"==t&&"html"!=g.renderer?s(m):"fluid"==t&&(n.holderData.resizeUpdate=!0,"%"==o.height.slice(-1)?n.style.height=o.height:null!=r.auto&&r.auto||(n.style.height=o.height+"px"),"%"==o.width.slice(-1)?n.style.width=o.width:null!=r.auto&&r.auto||(n.style.width=o.width+"px"),("inline"==n.style.display||""===n.style.display||"none"==n.style.display)&&(n.style.display="block"),h(n),"html"==g.renderer?n.style.backgroundColor=a.background:(R.vars.resizableImages.push(n),c(n)))}function s(e){function n(){var t=null;switch(l.renderer){case"canvas":t=P(u,e);break;case"svg":t=B(u,e);break;default:throw"Holder: invalid renderer: "+l.renderer}return t}var r=null,i=e.mode,o=e.holderSettings,a=e.el,l=e.engineSettings;switch(l.renderer){case"svg":if(!R.setup.supportsSVG)return;break;case"canvas":if(!R.setup.supportsCanvas)return;break;default:return}var s={width:o.dimensions.width,height:o.dimensions.height,theme:o.theme,flags:o.flags},u=d(s);if(r=n(),null==r)throw"Holder: couldn't render placeholder";"background"==i?(a.style.backgroundImage="url("+r+")",a.style.backgroundSize=s.width+"px "+s.height+"px"):("img"===a.nodeName.toLowerCase()?v(a,{src:r}):"object"===a.nodeName.toLowerCase()&&(v(a,{data:r}),v(a,{type:"image/svg+xml"})),l.reRender&&t.setTimeout(function(){var e=n();if(null==e)throw"Holder: couldn't render placeholder";"img"===a.nodeName.toLowerCase()?v(a,{src:e}):"object"===a.nodeName.toLowerCase()&&(v(a,{data:e}),v(a,{type:"image/svg+xml"}))},100)),v(a,{"data-holder-rendered":!0})}function d(e){function t(e,t,n,r){t.width=n,t.height=r,e.width=Math.max(e.width,t.width),e.height+=t.height}var n=R.defaults.size;switch(parseFloat(e.theme.size)?n=e.theme.size:parseFloat(e.flags.size)&&(n=e.flags.size),e.font={family:e.theme.font?e.theme.font:"Arial, Helvetica, Open Sans, sans-serif",size:u(e.width,e.height,n),units:e.theme.units?e.theme.units:R.defaults.units,weight:e.theme.fontweight?e.theme.fontweight:"bold"},e.text=e.theme.text||Math.floor(e.width)+"x"+Math.floor(e.height),e.noWrap=e.theme.nowrap||e.flags.nowrap,e.align=e.theme.align||e.flags.align||"center",e.flags.textmode){case"literal":e.text=e.flags.dimensions.width+"x"+e.flags.dimensions.height;break;case"exact":if(!e.flags.exactDimensions)break;e.text=Math.floor(e.flags.exactDimensions.width)+"x"+Math.floor(e.flags.exactDimensions.height)}var r=new k({width:e.width,height:e.height}),i=r.Shape,o=new i.Rect("holderBg",{fill:e.theme.background});o.resize(e.width,e.height),r.root.add(o);var a=new i.Group("holderTextGroup",{text:e.text,align:e.align,font:e.font,fill:e.theme.foreground});a.moveTo(null,null,1),r.root.add(a);var l=a.textPositionData=M(r);if(!l)throw"Holder: staging fallback not supported yet.";a.properties.leading=l.boundingBox.height;var s=null,d=null,c=e.width*R.setup.lineWrapRatio,h=c;if(l.lineCount>1){var f,g=0,p=0,m=0;d=new i.Group("line"+m),("left"===e.align||"right"===e.align)&&(h=e.width*(1-2*(1-R.setup.lineWrapRatio)));for(var v=0;v<l.words.length;v++){var y=l.words[v];s=new i.Text(y.text);var x="\\n"==y.text;!e.noWrap&&(g+y.width>=h||x===!0)&&(t(a,d,g,a.properties.leading),a.add(d),g=0,p+=a.properties.leading,m+=1,d=new i.Group("line"+m),d.y=p),x!==!0&&(s.moveTo(g,0),g+=l.spaceWidth+y.width,d.add(s))}if(t(a,d,g,a.properties.leading),a.add(d),"left"===e.align)a.moveTo(e.width-c,null,null);else if("right"===e.align){for(f in a.children)d=a.children[f],d.moveTo(e.width-d.width,null,null);a.moveTo(0-(e.width-c),null,null)}else{for(f in a.children)d=a.children[f],d.moveTo((a.width-d.width)/2,null,null);a.moveTo((e.width-a.width)/2,null,null)}a.moveTo(null,(e.height-a.height)/2,null),(e.height-a.height)/2<0&&a.moveTo(null,0,null)}else s=new i.Text(e.text),d=new i.Group("line0"),d.add(s),a.add(d),"left"===e.align?a.moveTo(e.width-c,null,null):"right"===e.align?a.moveTo(0-(e.width-c),null,null):a.moveTo((e.width-l.boundingBox.width)/2,null,null),a.moveTo(null,(e.height-l.boundingBox.height)/2,null);return r}function u(e,t,n){var r=parseInt(e,10),i=parseInt(t,10),o=Math.max(r,i),a=Math.min(r,i),l=.8*Math.min(a,o*R.defaults.scale);return Math.round(Math.max(n,l))}function c(e){var t;t=null==e||null==e.nodeType?R.vars.resizableImages:[e];for(var n=0,r=t.length;r>n;n++){var i=t[n];if(i.holderData){var o=i.holderData.flags,a=z(i);if(a){if(!i.holderData.resizeUpdate)continue;if(o.fluid&&o.auto){var l=i.holderData.fluidConfig;switch(l.mode){case"width":a.height=a.width/l.ratio;break;case"height":a.width=a.height*l.ratio}}var d={mode:"image",holderSettings:{dimensions:a,theme:o.theme,flags:o},el:i,engineSettings:i.holderData.engineSettings};"exact"==o.textmode&&(o.exactDimensions=a,d.holderSettings.dimensions=o.dimensions),s(d)}else p(i)}}}function h(e){if(e.holderData){var t=z(e);if(t){var n=e.holderData.flags,r={fluidHeight:"%"==n.dimensions.height.slice(-1),fluidWidth:"%"==n.dimensions.width.slice(-1),mode:null,initialDimensions:t};r.fluidWidth&&!r.fluidHeight?(r.mode="width",r.ratio=r.initialDimensions.width/parseFloat(n.dimensions.height)):!r.fluidWidth&&r.fluidHeight&&(r.mode="height",r.ratio=parseFloat(n.dimensions.width)/r.initialDimensions.height),e.holderData.fluidConfig=r}else p(e)}}function f(){for(var e,n=[],r=Object.keys(R.vars.invisibleImages),i=0,o=r.length;o>i;i++)e=R.vars.invisibleImages[r[i]],z(e)&&"img"==e.nodeName.toLowerCase()&&(n.push(e),delete R.vars.invisibleImages[r[i]]);n.length&&N.run({images:n}),t.requestAnimationFrame(f)}function g(){R.vars.visibilityCheckStarted||(t.requestAnimationFrame(f),R.vars.visibilityCheckStarted=!0)}function p(e){e.holderData.invisibleId||(R.vars.invisibleId+=1,R.vars.invisibleImages["i"+R.vars.invisibleId]=e,e.holderData.invisibleId=R.vars.invisibleId)}function m(e,t){return null==t?document.createElement(e):document.createElementNS(t,e)}function v(e,t){for(var n in t)e.setAttribute(n,t[n])}function y(e,t,n){var r,i;null==e?(e=m("svg",j),r=m("defs",j),i=m("style",j),v(i,{type:"text/css"}),r.appendChild(i),e.appendChild(r)):i=e.querySelector("style"),e.webkitMatchesSelector&&e.setAttribute("xmlns",j);for(var o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===D&&e.removeChild(e.childNodes[o]);for(;i.childNodes.length;)i.removeChild(i.childNodes[0]);return v(e,{width:t,height:n,viewBox:"0 0 "+t+" "+n,preserveAspectRatio:"none"}),e}function x(e,n){if(t.XMLSerializer){var r=new XMLSerializer,i="",o=n.stylesheets;if(n.svgXMLStylesheet){for(var a=w(),l=o.length-1;l>=0;l--){var s=a.createProcessingInstruction("xml-stylesheet",'href="'+o[l]+'" rel="stylesheet"');a.insertBefore(s,a.firstChild)}a.removeChild(a.documentElement),i=r.serializeToString(a)}var d=r.serializeToString(e);return d=d.replace(/\&amp;(\#[0-9]{2,}\;)/g,"&$1"),i+d}}function w(){return t.DOMParser?(new DOMParser).parseFromString("<xml />","application/xml"):void 0}function b(e){R.vars.debounceTimer||e.call(this),R.vars.debounceTimer&&t.clearTimeout(R.vars.debounceTimer),R.vars.debounceTimer=t.setTimeout(function(){R.vars.debounceTimer=null,e.call(this)},R.setup.debounce)}function S(){b(function(){c(null)})}var C=n(1),k=n(2),A=n(3),T=n(4),O=A.extend,E=A.getNodeArray,z=A.dimensionCheck,j="http://www.w3.org/2000/svg",D=8,F="2.7.1",L="\nCreated with Holder.js "+F+".\nLearn more at http://holderjs.com\n(c) 2012-2015 Ivan Malopinsky - http://imsky.co\n",N={version:F,addTheme:function(e,t){return null!=e&&null!=t&&(R.settings.themes[e]=t),delete R.vars.cache.themeKeys,this},addImage:function(e,t){var n=document.querySelectorAll(t);if(n.length)for(var r=0,i=n.length;i>r;r++){var o=m("img"),a={};a[R.vars.dataAttr]=e,v(o,a),n[r].appendChild(o)}return this},setResizeUpdate:function(e,t){e.holderData&&(e.holderData.resizeUpdate=!!t,e.holderData.resizeUpdate&&c(e))},run:function(e){e=e||{};var n={},o=O(R.settings,e);R.vars.preempted=!0,R.vars.dataAttr=o.dataAttr||R.vars.dataAttr,n.renderer=o.renderer?o.renderer:R.setup.renderer,-1===R.setup.renderers.join(",").indexOf(n.renderer)&&(n.renderer=R.setup.supportsSVG?"svg":R.setup.supportsCanvas?"canvas":"html");var a=E(o.images),s=E(o.bgnodes),d=E(o.stylenodes),u=E(o.objects);n.stylesheets=[],n.svgXMLStylesheet=!0,n.noFontFallback=o.noFontFallback?o.noFontFallback:!1;for(var c=0;c<d.length;c++){var h=d[c];if(h.attributes.rel&&h.attributes.href&&"stylesheet"==h.attributes.rel.value){var f=h.attributes.href.value,g=m("a");g.href=f;var p=g.protocol+"//"+g.host+g.pathname+g.search;n.stylesheets.push(p)}}for(c=0;c<s.length;c++)if(t.getComputedStyle){var v=t.getComputedStyle(s[c],null).getPropertyValue("background-image"),y=s[c].getAttribute("data-background-src"),x=null;x=null==y?v:y;var w=null,b="?"+o.domain+"/";if(0===x.indexOf(b))w=x.slice(1);else if(-1!=x.indexOf(b)){var S=x.substr(x.indexOf(b)).slice(1),C=S.match(/([^\"]*)"?\)/);null!=C&&(w=C[1])}if(null!=w){var k=i(w,o);k&&l({mode:"background",el:s[c],flags:k,engineSettings:n})}}for(c=0;c<u.length;c++){var T=u[c],z={};try{z.data=T.getAttribute("data"),z.dataSrc=T.getAttribute(R.vars.dataAttr)}catch(j){}var D=null!=z.data&&0===z.data.indexOf(o.domain),F=null!=z.dataSrc&&0===z.dataSrc.indexOf(o.domain);D?r(o,n,z.data,T):F&&r(o,n,z.dataSrc,T)}for(c=0;c<a.length;c++){var L=a[c],N={};try{N.src=L.getAttribute("src"),N.dataSrc=L.getAttribute(R.vars.dataAttr),N.rendered=L.getAttribute("data-holder-rendered")}catch(j){}var M=null!=N.src,P=null!=N.dataSrc&&0===N.dataSrc.indexOf(o.domain),B=null!=N.rendered&&"true"==N.rendered;M?0===N.src.indexOf(o.domain)?r(o,n,N.src,L):P&&(B?r(o,n,N.dataSrc,L):!function(e,t,n,i,o){A.imageExists(e,function(e){e||r(t,n,i,o)})}(N.src,o,n,N.dataSrc,L)):P&&r(o,n,N.dataSrc,L)}return this}},R={settings:{domain:"holder.js",images:"img",objects:"object",bgnodes:"body .holderjs",stylenodes:"head link.holderjs",stylesheets:[],themes:{gray:{background:"#EEEEEE",foreground:"#AAAAAA"},social:{background:"#3a5a97",foreground:"#FFFFFF"},industrial:{background:"#434A52",foreground:"#C2F200"},sky:{background:"#0D8FDB",foreground:"#FFFFFF"},vine:{background:"#39DBAC",foreground:"#1E292C"},lava:{background:"#F8591A",foreground:"#1C2846"}}},defaults:{size:10,units:"pt",scale:1/16},flags:{dimensions:{regex:/^(\d+)x(\d+)$/,output:function(e){var t=this.regex.exec(e);return{width:+t[1],height:+t[2]}}},fluid:{regex:/^([0-9]+%?)x([0-9]+%?)$/,output:function(e){var t=this.regex.exec(e);return{width:t[1],height:t[2]}}},colors:{regex:/(?:#|\^)([0-9a-f]{3,})\:(?:#|\^)([0-9a-f]{3,})/i,output:function(e){var t=this.regex.exec(e);return{foreground:"#"+t[2],background:"#"+t[1]}}},text:{regex:/text\:(.*)/,output:function(e){return this.regex.exec(e)[1].replace("\\/","/")}},font:{regex:/font\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},random:{regex:/^random$/},size:{regex:/size\:(\d+)/,output:function(e){return this.regex.exec(e)[1]}}}},M=function(){var e=null,t=null,n=null;return function(r){var i=r.root;if(R.setup.supportsSVG){var o=!1,a=function(e){return document.createTextNode(e)};(null==e||e.parentNode!==document.body)&&(o=!0),e=y(e,i.properties.width,i.properties.height),e.style.display="block",o&&(t=m("text",j),n=a(null),v(t,{x:0}),t.appendChild(n),e.appendChild(t),document.body.appendChild(e),e.style.visibility="hidden",e.style.position="absolute",e.style.top="-100%",e.style.left="-100%");var l=i.children.holderTextGroup,s=l.properties;v(t,{y:s.font.size,style:A.cssProps({"font-weight":s.font.weight,"font-size":s.font.size+s.font.units,"font-family":s.font.family})}),n.nodeValue=s.text;var d=t.getBBox(),u=Math.ceil(d.width/(i.properties.width*R.setup.lineWrapRatio)),c=s.text.split(" "),h=s.text.match(/\\n/g);u+=null==h?0:h.length,n.nodeValue=s.text.replace(/[ ]+/g,"");var f=t.getComputedTextLength(),g=d.width-f,p=Math.round(g/Math.max(1,c.length-1)),x=[];if(u>1){n.nodeValue="";for(var w=0;w<c.length;w++)if(0!==c[w].length){n.nodeValue=A.decodeHtmlEntity(c[w]);var b=t.getBBox();x.push({text:c[w],width:b.width})}}return e.style.display="none",{spaceWidth:p,lineCount:u,boundingBox:d,words:x}}return!1}}(),P=function(){var e=m("canvas"),t=null;return function(n){null==t&&(t=e.getContext("2d"));var r=n.root;e.width=R.dpr(r.properties.width),e.height=R.dpr(r.properties.height),t.textBaseline="middle",t.fillStyle=r.children.holderBg.properties.fill,t.fillRect(0,0,R.dpr(r.children.holderBg.width),R.dpr(r.children.holderBg.height));{var i=r.children.holderTextGroup;i.properties}t.font=i.properties.font.weight+" "+R.dpr(i.properties.font.size)+i.properties.font.units+" "+i.properties.font.family+", monospace",t.fillStyle=i.properties.fill;for(var o in i.children){var a=i.children[o];for(var l in a.children){var s=a.children[l],d=R.dpr(i.x+a.x+s.x),u=R.dpr(i.y+a.y+s.y+i.properties.leading/2);t.fillText(s.properties.text,d,u)}}return e.toDataURL("image/png")}}(),B=function(){if(t.XMLSerializer){var e=w(),n=y(null,0,0),r=m("rect",j);return n.appendChild(r),function(t,i){var o=t.root;y(n,o.properties.width,o.properties.height);for(var a=n.querySelectorAll("g"),l=0;l<a.length;l++)a[l].parentNode.removeChild(a[l]);var s=i.holderSettings.flags.holderURL,d="holder_"+(Number(new Date)+32768+(0|32768*Math.random())).toString(16),u=m("g",j),c=o.children.holderTextGroup,h=c.properties,f=m("g",j),g=c.textPositionData,p="#"+d+" text { "+A.cssProps({fill:h.fill,"font-weight":h.font.weight,"font-family":h.font.family+", monospace","font-size":h.font.size+h.font.units})+" } ",w=e.createComment("\nSource URL: "+s+L),b=e.createCDATASection(p),S=n.querySelector("style");v(u,{id:d}),n.insertBefore(w,n.firstChild),S.appendChild(b),u.appendChild(r),u.appendChild(f),n.appendChild(u),v(r,{width:o.children.holderBg.width,height:o.children.holderBg.height,fill:o.children.holderBg.properties.fill}),c.y+=.8*g.boundingBox.height;for(var C in c.children){var k=c.children[C];for(var T in k.children){var O=k.children[T],E=c.x+k.x+O.x,z=c.y+k.y+O.y,D=m("text",j),F=document.createTextNode(null);v(D,{x:E,y:z}),F.nodeValue=O.properties.text,D.appendChild(F),f.appendChild(D)}}var N=I(x(n,i.engineSettings),"background"===i.mode);return N}}}(),I=function(){var e="data:image/svg+xml;charset=UTF-8,",t="data:image/svg+xml;charset=UTF-8;base64,";return function(n,r){return r?t+btoa(unescape(encodeURIComponent(n))):e+encodeURIComponent(n)}}();for(var q in R.flags)R.flags.hasOwnProperty(q)&&(R.flags[q].match=function(e){return e.match(this.regex)});R.setup={renderer:"html",debounce:100,ratio:1,supportsCanvas:!1,supportsSVG:!1,lineWrapRatio:.9,renderers:["html","canvas","svg"]},R.dpr=function(e){return e*R.setup.ratio},R.vars={preempted:!1,resizableImages:[],invisibleImages:{},invisibleId:0,visibilityCheckStarted:!1,debounceTimer:null,cache:{},dataAttr:"data-src"},function(){var e=1,n=1,r=m("canvas"),i=null;r.getContext&&-1!=r.toDataURL("image/png").indexOf("data:image/png")&&(R.setup.renderer="canvas",i=r.getContext("2d"),R.setup.supportsCanvas=!0),R.setup.supportsCanvas&&(e=t.devicePixelRatio||1,n=i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1),R.setup.ratio=e/n,document.createElementNS&&document.createElementNS(j,"svg").createSVGRect&&(R.setup.renderer="svg",R.setup.supportsSVG=!0)}(),g(),C&&C(function(){R.vars.preempted||N.run(),t.addEventListener?(t.addEventListener("resize",S,!1),t.addEventListener("orientationchange",S,!1)):t.attachEvent("onresize",S),"object"==typeof t.Turbolinks&&t.document.addEventListener("page:change",function(){N.run()})}),e.exports=N}).call(t,function(){return this}())},function(e){/*!
	 * onDomReady.js 1.4.0 (c) 2013 Tubal Martin - MIT license
	 *
	 * Specially modified to work with Holder.js
	 */
function t(e){function t(e){if(!b){if(!a.body)return i(t);for(b=!0;e=S.shift();)i(e)}}function n(e){(x||e.type===s||a[h]===c)&&(r(),t())}function r(){x?(a[y](m,n,d),e[y](s,n,d)):(a[g](v,n),e[g](u,n))}function i(e,t){setTimeout(e,+t>=0?t:1)}function o(e){b?i(e):S.push(e)}null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function k(){document.removeEventListener("DOMContentLoaded",k,!1),document.readyState="complete"},!1),document.readyState="loading");var a=e.document,l=a.documentElement,s="load",d=!1,u="on"+s,c="complete",h="readyState",f="attachEvent",g="detachEvent",p="addEventListener",m="DOMContentLoaded",v="onreadystatechange",y="removeEventListener",x=p in a,w=d,b=d,S=[];if(a[h]===c)i(t);else if(x)a[p](m,n,d),e[p](s,n,d);else{a[f](v,n),e[f](u,n);try{w=null==e.frameElement&&l}catch(C){}w&&w.doScroll&&!function A(){if(!b){try{w.doScroll("left")}catch(e){return i(A,50)}r(),t()}}()}return o.version="1.4.0",o.isReady=function(){return b},o}e.exports="undefined"!=typeof window&&t(window)},function(e,t,n){var r=n(5),i=function(e){function t(e,t){for(var n in t)e[n]=t[n];return e}var n=1,i=r.defclass({constructor:function(e){n++,this.parent=null,this.children={},this.id=n,this.name="n"+n,null!=e&&(this.name=e),this.x=0,this.y=0,this.z=0,this.width=0,this.height=0},resize:function(e,t){null!=e&&(this.width=e),null!=t&&(this.height=t)},moveTo:function(e,t,n){this.x=null!=e?e:this.x,this.y=null!=t?t:this.y,this.z=null!=n?n:this.z},add:function(e){var t=e.name;if(null!=this.children[t])throw"SceneGraph: child with that name already exists: "+t;this.children[t]=e,e.parent=this}}),o=r(i,function(t){this.constructor=function(){t.constructor.call(this,"root"),this.properties=e}}),a=r(i,function(e){function n(n,r){if(e.constructor.call(this,n),this.properties={fill:"#000"},null!=r)t(this.properties,r);else if(null!=n&&"string"!=typeof n)throw"SceneGraph: invalid node name"}this.Group=r.extend(this,{constructor:n,type:"group"}),this.Rect=r.extend(this,{constructor:n,type:"rect"}),this.Text=r.extend(this,{constructor:function(e){n.call(this),this.properties.text=e},type:"text"})}),l=new o;return this.Shape=a,this.root=l,this};e.exports=i},function(e,t){(function(e){t.extend=function(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);if(null!=t)for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);return n},t.cssProps=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+":"+e[n]);return t.join(";")},t.encodeHtmlEntity=function(e){for(var t=[],n=0,r=e.length-1;r>=0;r--)n=e.charCodeAt(r),t.unshift(n>128?["&#",n,";"].join(""):e[r]);return t.join("")},t.getNodeArray=function(t){var n=null;return"string"==typeof t?n=document.querySelectorAll(t):e.NodeList&&t instanceof e.NodeList?n=t:e.Node&&t instanceof e.Node?n=[t]:e.HTMLCollection&&t instanceof e.HTMLCollection?n=t:t instanceof Array?n=t:null===t&&(n=[]),n},t.imageExists=function(e,t){var n=new Image;n.onerror=function(){t.call(this,!1)},n.onload=function(){t.call(this,!0)},n.src=e},t.decodeHtmlEntity=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(t)})},t.dimensionCheck=function(e){var t={height:e.clientHeight,width:e.clientWidth};return t.height&&t.width?t:!1},t.truthy=function(e){return"string"==typeof e?"true"===e||"yes"===e||"1"===e||"on"===e||"\u2713"===e:!!e}}).call(t,function(){return this}())},function(e,t,n){var r=encodeURIComponent,i=decodeURIComponent,o=n(6),a=n(7),l=/(\w+)\[(\d+)\]/,s=/\w+\.\w+/;t.parse=function(e){if("string"!=typeof e)return{};if(e=o(e),""===e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t={},n=e.split("&"),r=0;r<n.length;r++){var a,d,u,c=n[r].split("="),h=i(c[0]);if(a=l.exec(h))t[a[1]]=t[a[1]]||[],t[a[1]][a[2]]=i(c[1]);else if(a=s.test(h)){for(a=h.split("."),d=t;a.length;)if(u=a.shift(),u.length){if(d[u]){if(d[u]&&"object"!=typeof d[u])break}else d[u]={};a.length||(d[u]=i(c[1])),d=d[u]}}else t[c[0]]=null==c[1]?"":i(c[1])}return t},t.stringify=function(e){if(!e)return"";var t=[];for(var n in e){var i=e[n];if("array"!=a(i))t.push(r(n)+"="+r(e[n]));else for(var o=0;o<i.length;++o)t.push(r(n+"["+o+"]")+"="+r(i[o]))}return t.join("&")}},function(e){var t=function(){},n=Array.prototype.slice,r=function(e,r){var i=t.prototype="function"==typeof e?e.prototype:e,o=new t,a=r.apply(o,n.call(arguments,2).concat(i));if("object"==typeof a)for(var l in a)o[l]=a[l];if(!o.hasOwnProperty("constructor"))return o;var s=o.constructor;return s.prototype=o,s};r.defclass=function(e){var t=e.constructor;return t.prototype=e,t},r.extend=function(e,t){return r(e,function(e){return this.uber=e,t})},e.exports=r},function(e,t){function n(e){return e.replace(/^\s*|\s*$/g,"")}t=e.exports=n,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},function(e){var t=Object.prototype.toString;e.exports=function(e){switch(t.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!==e?"nan":e&&1===e.nodeType?"element":(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e),typeof e)}}])}),function(e,t){t&&(Holder=e.Holder)}(this,"undefined"!=typeof Meteor&&"undefined"!=typeof Package),function(){var e;new(e=function(){function e(){var e,t,n,r,i,o,a,l,s,d,u;n=/(\:hover|\:focus|\:disabled|\:active|\:visited)/g;try{for(d=document.styleSheets,a=0,l=d.length;l>a;a++)for(o=d[a],t=[],u=o.cssRules,e=0,s=u.length;s>e;e++)i=u[e],i.type===CSSRule.STYLE_RULE&&n.test(i.selectorText)&&(r=function(e){return".pseudo-class-"+e.replace(":","")},this.insertRule(i.cssText.replace(n,r)))}catch(c){}}return e.prototype.insertRule=function(e){var t,n;return t=document.getElementsByTagName("head")[0],n=document.createElement("style"),n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)},e}())}.call(this),function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var o=i[e],a={};for(var l in o)if(o.hasOwnProperty(l)){if(l==n)for(var s in r)r.hasOwnProperty(s)&&(a[s]=r[s]);a[l]=o[l]}return i[e]=a},DFS:function(e,n){for(var r in e)n.call(e,r,e[r]),"Object"===t.util.type(e)&&t.languages.DFS(e[r],n)}},highlightAll:function(e,n){for(var r,i=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),o=0;r=i[o++];)t.highlightElement(r,e===!0,n)},highlightElement:function(r,i,o){for(var a,l,s=r;s&&!e.test(s.className);)s=s.parentNode;if(s&&(a=(s.className.match(e)||[,""])[1],l=t.languages[a]),l){r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+a,s=r.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(e,"").replace(/\s+/g," ")+" language-"+a);var d=r.textContent;if(d){d=d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00a0/g," ");var u={element:r,language:a,grammar:l,code:d};if(t.hooks.run("before-highlight",u),i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){u.highlightedCode=n.stringify(JSON.parse(e.data)),u.element.innerHTML=u.highlightedCode,o&&o.call(u.element),t.hooks.run("after-highlight",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar),u.element.innerHTML=u.highlightedCode,o&&o.call(r),t.hooks.run("after-highlight",u)}}},highlight:function(e,r){return n.stringify(t.tokenize(e,r))},tokenize:function(e,n){var r=t.Token,i=[e],o=n.rest;if(o){for(var a in o)n[a]=o[a];delete n.rest}e:for(var a in n)if(n.hasOwnProperty(a)&&n[a]){var l=n[a],s=l.inside,d=!!l.lookbehind||0;l=l.pattern||l;for(var u=0;u<i.length;u++){var c=i[u];if(i.length>e.length)break e;if(!(c instanceof r)){l.lastIndex=0;var h=l.exec(c);if(h){d&&(d=h[1].length);var f=h.index-1+d,h=h[0].slice(d),g=h.length,p=f+g,m=c.slice(0,f+1),v=c.slice(p+1),y=[u,1];m&&y.push(m);var x=new r(a,s?t.tokenize(h,s):h);y.push(x),v&&y.push(v),Array.prototype.splice.apply(i,y)}}}}return i},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[],r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(r&&r.length)for(var i,o=0;i=r[o++];)i(n)}}},n=t.Token=function(e,t){this.type=e,this.content=t};if(n.stringify=function(e){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(n.stringify).join("");var r={type:e.type,content:n.stringify(e.content),tag:"span",classes:["token",e.type],attributes:{}};"comment"==r.type&&(r.attributes.spellcheck="true"),t.hooks.run("wrap",r);var i="";for(var o in r.attributes)i+=o+'="'+(r.attributes[o]||"")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'" '+i+">"+r.content+"</"+r.tag+">"},!self.document)return void self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r]))),self.close()},!1);var r=document.getElementsByTagName("script");r=r[r.length-1],r&&(t.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?--(&gt;|&gt;)/g,prolog:/&lt;\?.+?\?&gt;/,doctype:/&lt;!DOCTYPE.+?&gt;/,cdata:/&lt;!\[CDATA\[[\w\W]+?]]&gt;/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?&gt;/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|&gt;|"/g}},punctuation:/\/?&gt;/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),$(document).on("ready page:load",function(){Prism.highlightAll(),$('.styleguide-example a[href="#"]').click(function(e){e.preventDefault()}),$("a.navbar-brand").click(function(){$(window).scrollTop()<1&&(window.index||(window.location="../"))}),$(".styleguide-example").append('<div class="styleguide-example-show-code-toggle">Show Code</div>'),$(".styleguide-example-show-code-toggle").click(function(e){$toggle=$(e.target),$htmlBlock=$toggle.parent().find(".styleguide-html"),$htmlBlock.collapse("toggle"),$toggle.html("Show Code"==$toggle.html()?"Hide Code":"Show Code")}),$(".styleguide-html").addClass("collapse")});