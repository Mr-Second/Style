(function(){var e;new(e=function(){function e(){var e,t,s,n,c,l,r,o,u,a,i;s=/(\:hover|\:focus|\:disabled|\:active|\:visited)/g;try{for(a=document.styleSheets,r=0,o=a.length;o>r;r++)for(l=a[r],t=[],i=l.cssRules,e=0,u=i.length;u>e;e++)c=i[e],c.type===CSSRule.STYLE_RULE&&s.test(c.selectorText)&&(n=function(e){return".pseudo-class-"+e.replace(":","")},this.insertRule(c.cssText.replace(s,n)))}catch(d){}}return e.prototype.insertRule=function(e){var t,s;return t=document.getElementsByTagName("head")[0],s=document.createElement("style"),s.type="text/css",s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e)),t.appendChild(s)},e}())}).call(this);