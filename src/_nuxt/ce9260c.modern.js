(window.webpackJsonp=window.webpackJsonp||[]).push([[60,61,68,76,93,95],{1009:function(e,t,n){"use strict";n.d(t,"c",(function(){return P})),n.d(t,"b",(function(){return $})),n.d(t,"e",(function(){return T})),n.d(t,"g",(function(){return B})),n.d(t,"d",(function(){return R})),n.d(t,"f",(function(){return L})),n.d(t,"a",(function(){return N}));var a=n(28),i=(n(45),n(157)),r=n(180),l=(n(128),n(211),n(0)),o=n(36),s=n(6),c=n(74);function u(e){return Object(l.h)(c.s,e.of)}function p(e){return Object(l.g)(e.of(c.q))}function d(e){return function(t){return e.map(t,c.s)}}function v(e){return Object(l.h)(c.g,e.of)}function f(e){var t=v(e);return function(e){return Object(l.h)(e,t)}}function h(e){var t=_(e),n=f(e);return function(e){return t(n(e))}}function y(e){return function(t){return Object(l.h)(t,e.of)}}function m(e){var t=_(e),n=y(e);return function(e){return t(n(e))}}function g(e){return function(t){return function(n){return e.of(c.h(t)(n))}}}function b(e){return Object(l.h)(c.f,e.of)}function x(e){return function(t,n){return function(a){return e.map(a,c.p(t,n))}}}function k(e){return function(t,n){return function(a){return e.chain(a,c.p(t,n))}}}function w(e){return function(t){return function(n){return e.chain(n,c.p(t,e.of))}}}function O(e){return Object(o.d)(e,c.d)}function j(e){return Object(a.a)(e,c.a)}function _(e){var t=p(e);return function(n){return function(a){return e.chain(a,c.p((function(){return t()}),n))}}}function S(e){var t=u(e);return function(n){return function(a){return e.chain(a,c.p(n,t))}}}var E=n(31),C=(n(156),u(E.g)),P=g(E.g),$=E.k,T=(E.g,E.e,c.f,x(E.e)),B=(E.d,E.f,E.g,function(e){return function(){return e().then((function(e){return c.s(e)}),(function(){return c.q}))}}),R=(E.g,E.f,E.g,E.f,O(E.e)),L=(E.b,C),N=_(E.f),F=(l.j,E.f,E.g,E.e,c.b,E.e,c.b,c.d,E.e,c.c,E.e,c.c,E.e,c.c,E.e,c.c,s.b,L(s.a)),V=function(e){var t=function(e){return Object(l.h)(E.m(e),E.j(c.t(l.a)))}(e);return function(e){return s.g(e)?t(e):F}},H=function(e){var t=function(e){return function(t){return function(){return s.p(t).reduce((function(t,n,a){return t.then((function(i){return s.h(i)?t:e(a+1,n)().then((function(e){return s.h(e)?e:(i.value.push(e.value),i)}))}))}),e(0,s.e(t))().then(c.o(s.n)))}}}(e);return function(e){return s.g(e)?t(e):F}};l.j,l.j},1020:function(e,t,n){"use strict";n.r(t);n(58),n(175),n(329),n(203),n(134),n(326),n(99);var a=n(2),i=n(1738),r=n.n(i),l=n(1029),o=n.n(l),s=n(1739),c=n.n(s),u=n(263),p=n(82),d=n(20),v={"&":"&amp;","<":"&lt;",">":"&gt;"},f=Object(a.c)({props:{value:{type:String,default:""},placeholder:{type:String,default:""},styles:{type:String,default:""}},setup:()=>({aggregateEnvs:Object(d.g)(p.b)}),data:()=>({internalValue:"",htmlOutput:"",debouncedHandler:null,highlight:[{text:/(<<\w+>>)/g,style:"cursor-help transition rounded px-1 focus:outline-none mx-0.5"}],highlightEnabled:!0,highlightStyle:"",caseSensitive:!0,fireOn:"input",fireOnEnabled:!0}),watch:{aggregateEnvs(){this.processHighlights()},highlightStyle(){this.processHighlights()},highlight(){this.processHighlights()},value(){this.internalValue!==this.value&&(this.internalValue=this.value,this.processHighlights())},highlightEnabled(){this.processHighlights()},caseSensitive(){this.processHighlights()},htmlOutput(){var e=this.saveSelection(this.$refs.editor);this.$refs.editor.innerHTML=this.htmlOutput,this.restoreSelection(this.$refs.editor,e)}},mounted(){this.fireOnEnabled&&this.$refs.editor.addEventListener(this.fireOn,this.handleChange),this.internalValue=this.value,this.processHighlights()},methods:{handleCompositionEnd(){this.handleChange()},handlePaste(e){this.handleChange(),this.$emit("paste",{event:e,previousValue:this.internalValue})},handleChange(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&"inputType"in e&&"insertCompositionText"===e.inputType||(this.debouncedHandler=o()((function(){this.$refs.editor&&this.internalValue!==this.$refs.editor.textContent&&(this.internalValue=this.$refs.editor.textContent,this.processHighlights())}),5),this.debouncedHandler())},processHighlights(){var e=this;if(!this.highlightEnabled)return this.htmlOutput=this.internalValue,void(this.intervalTree!==this.value&&(this.$emit("input",this.internalValue),this.$emit("change",this.internalValue)));var t=new r.a,n=[],a=this.normalizedHighlights();if(a){for(var i=function(n){var i=a[n];if(i.text&&("string"==typeof i.text&&e.getIndicesOf(i.text,e.internalValue,c()(i.caseSensitive)?e.caseSensitive:i.caseSensitive).forEach((n=>{var a=n+i.text.length-1;e.insertRange(n,a,i,t)})),"[object RegExp]"===Object.prototype.toString.call(i.text)&&e.getRegexIndices(i.text,e.internalValue).forEach((n=>{e.insertRange(n.start,n.end,i,t)}))),void 0!==i.start&&void 0!==i.end&&i.start<i.end){var r=i.start,l=i.end-1;e.insertRange(r,l,i,t)}},l=0;l<a.length;l++)i(l);n=(n=t.search(0,this.internalValue.length)).sort(((e,t)=>e.start-t.start));for(var o="",s=0,u=function(t){var a,i,r,l=n[t];o+=e.safe_tags_replace(e.internalValue.substring(s,l.start));var c=e.internalValue.substring(l.start,l.end+1).slice(2,-2);o+='<span class="'.concat(n[t].style," ").concat(void 0===(null===(a=e.aggregateEnvs.find((e=>e.key===c)))||void 0===a?void 0:a.value)?"bg-red-400 text-red-50 hover:bg-red-600":"bg-accentDark text-accentContrast hover:bg-accent",'" v-tippy data-tippy-content="').concat(e.getEnvName(null===(i=e.aggregateEnvs.find((e=>e.key===c)))||void 0===i?void 0:i.sourceEnv)," <kbd>").concat(e.getEnvValue(null===(r=e.aggregateEnvs.find((e=>e.key===c)))||void 0===r?void 0:r.value),'</kbd>">').concat(e.safe_tags_replace(e.internalValue.substring(l.start,l.end+1)),"</span>"),s=l.end+1},p=0;p<n.length;p++)u(p);s<this.internalValue.length&&(o+=this.safe_tags_replace(this.internalValue.substring(s,this.internalValue.length)))," "===o[o.length-1]&&(o=o.substring(0,o.length-1),o+="&nbsp;"),this.htmlOutput=o,this.$nextTick((()=>{this.renderTippy()})),this.internalValue!==this.value&&(this.$emit("input",this.internalValue),this.$emit("change",this.internalValue))}},renderTippy(){document.querySelectorAll("[v-tippy]").forEach((e=>{Object(u.c)(e,{content:e.dataset["tippy-content"],theme:"tooltip",popperOptions:{modifiers:{preventOverflow:{enabled:!1},hide:{enabled:!1}}}})}))},insertRange(e,t,n,a){var i=a.search(e,t),r=i.reduce(((e,t)=>Math.max(t.end-t.start,e)),0);0===i.length?a.insert(e,t,{start:e,end:t,style:n.style}):t-e>r&&(i.forEach((e=>{a.remove(e.start,e.end,e)})),a.insert(e,t,{start:e,end:t,style:n.style}))},normalizedHighlights(){if(null==this.highlight)return null;if("[object RegExp]"===Object.prototype.toString.call(this.highlight)||"string"==typeof this.highlight)return[{text:this.highlight}];if("[object Array]"===Object.prototype.toString.call(this.highlight)&&this.highlight.length>0){var e="string"==typeof this.highlightStyle?this.highlightStyle:Object.keys(this.highlightStyle).map((e=>e+":"+this.highlightStyle[e])).join(";")+";",t=this.highlight.filter((e=>e===Object.prototype.toString.call(e)==="[object RegExp]"));return this.highlight.filter((e=>e===Object.prototype.toString.call(e)!=="[object RegExp]")).map((t=>{if(t.text||"string"==typeof t)return{text:t.text||t,style:t.style||e,caseSensitive:t.caseSensitive};if(void 0!==t.start&&void 0!==t.end)return{style:t.style||e,start:t.start,end:t.end,caseSensitive:t.caseSensitive};throw new Error("Please provide a valid highlight object or string")})).sort(((e,t)=>e.text&&t.text?e.text>t.text:e.start===t.start?e.end<t.end:e.start<t.start)).concat(t)}return console.error("Expected a string or an array of strings"),null},safe_tags_replace(e){return e.replace(/[&<>]/g,this.replaceTag)},replaceTag:e=>v[e]||e,getRegexIndices(e,t){if(!e.global)return console.error("Expected "+e+" to be global"),[];e=RegExp(e);for(var n=[],a=null;null!=(a=e.exec(t));)n.push({start:a.index,end:a.index+a[0].length-1});return n},getIndicesOf(e,t,n){var a=e.length;if(0===a)return[];var i,r=0,l=[];for(n||(t=t.toLowerCase(),e=e.toLowerCase());(i=t.indexOf(e,r))>-1;)l.push(i),r=i+a;return l},saveSelection(e){var t;if(window.getSelection&&document.createRange){var n=window.getSelection();if(!n||0===n.rangeCount)return;var a=n.getRangeAt(0),i=a.cloneRange();return i.selectNodeContents(e),i.setEnd(a.startContainer,a.startOffset),{start:t="".concat(i).length,end:t+"".concat(a).length}}if(document.selection){var r=document.selection.createRange(),l=document.body.createTextRange();return l.moveToElementText(e),l.setEndPoint("EndToStart",r),{start:t=l.text.length,end:t+r.text.length}}},restoreSelection(e,t){if(t)if(window.getSelection&&document.createRange){var n=0,a=document.createRange();a.setStart(e,0),a.collapse(!0);for(var i,r=[e],l=!1,o=!1;!o&&(i=r.pop());)if(3===i.nodeType){var s=n+i.length;!l&&t.start>=n&&t.start<=s&&(a.setStart(i,t.start-n),l=!0),l&&t.end>=n&&t.end<=s&&(a.setEnd(i,t.end-n),o=!0),n=s}else for(var c=i.childNodes.length;c--;)r.push(i.childNodes[c]);var u=window.getSelection();u.removeAllRanges(),u.addRange(a)}else if(document.selection){var p=document.body.createTextRange();p.moveToElementText(e),p.collapse(!0),p.moveEnd("character",t.end),p.moveStart("character",t.start),p.select()}},getEnvName:e=>e||"choose an environment",getEnvValue:e=>e?e.replace(/"/g,"&quot;"):"not found"}}),h=f,y=(n(1162),n(16)),m=Object(y.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"env-input-container"},[n("div",{ref:"editor",staticClass:"env-input",class:e.styles,attrs:{placeholder:e.placeholder,contenteditable:"true",spellcheck:"false"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.$emit("enter",t))},function(t){return e.$emit("keydown",t)}],keyup:function(t){return e.$emit("keyup",t)},click:function(t){return e.$emit("click",t)},paste:e.handlePaste,compositionend:e.handleCompositionEnd}})])}),[],!1,null,"51359fa4",null);t.default=m.exports},1162:function(e,t,n){"use strict";n(932)},1163:function(e,t,n){var a=n(109)(!1);a.push([e.i,".env-input-container[data-v-51359fa4] {\n  position: relative;\n  display: -ms-inline-grid;\n  display: inline-grid;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n}\n[contenteditable][data-v-51359fa4] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  color: var(--secondary-dark-color);\n}\n[contenteditable][data-v-51359fa4]:empty {\n  line-height: 2;\n}\n[contenteditable][data-v-51359fa4]:empty::before {\n  color: var(--secondary-color);\n  opacity: 0.35;\n  pointer-events: none;\n  content: attr(placeholder);\n}\n.env-input[data-v-51359fa4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  justify-items: start;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  resize: none;\n}\n.env-input[data-v-51359fa4]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.env-input[data-v-51359fa4]::-webkit-scrollbar {\n  display: none;\n}",""]),e.exports=a},1704:function(e,t,n){"use strict";var a=n(24),i=n(334).start,r=n(475)("trimStart"),l=r?function(){return i(this)}:"".trimStart;a({target:"String",proto:!0,name:"trimStart",forced:r},{trimStart:l,trimLeft:l})},1765:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));n(58),n(111),n(203);function a(e,t){for(var n=e.split("\n"),a=0,i=0;a<n.length;){if(!(t>n[a].length+i))return{line:a+1,ch:t-i+1};i+=n[a].length+1,a++}throw new Error("Invalid input")}function i(e,t){var n=e.split("\n");if(n.length<t.line)throw new Error("Invalid position");return n.slice(0,t.line).reduce(((e,t)=>e+t.length+1),0)+t.ch}},1766:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,i,r,l,o,s,c;n(58),n(179);function u(e){a=e,i=e.length,r=l=o=-1,b(),x();try{var t=p();return y("EOF"),t}catch(e){var n=v();return y("EOF"),n}}function p(){var e=r,t=[];if(y("{"),!g("}")){do{t.push(d())}while(g(","));y("}")}return{kind:"Object",start:e,end:o,members:t}}function d(){var e=r,t="String"===c?h():null;y("String"),y(":");var n=f();return{kind:"Member",start:e,end:o,key:t,value:n}}function v(){var e=r,t=[];if(y("["),!g("]")){do{t.push(f())}while(g(","));y("]")}return{kind:"Array",start:e,end:o,values:t}}function f(){switch(c){case"[":return v();case"{":return p();case"String":case"Number":case"Boolean":case"Null":var e=h();return x(),e}return y("Value")}function h(){return{kind:c,start:r,end:l,value:JSON.parse(a.slice(r,l))}}function y(e){if(c!==e){var t;if("EOF"===c)t="[end of file]";else if(l-r>1)t="`".concat(a.slice(r,l),"`");else{var n=a.slice(r).match(/^.+?\b/);t="`".concat(n?n[0]:a[r],"`")}throw m("Expected ".concat(e," but found ").concat(t,"."))}x()}function m(e){return{message:e,start:r,end:l}}function g(e){if(c===e)return x(),!0}function b(){l<i&&(l++,s=l===i?0:a.charCodeAt(l))}function x(){for(o=l;9===s||10===s||13===s||32===s;)b();if(0!==s){switch(r=l,s){case 34:return c="String",function(){b();for(;34!==s&&s>31;)if(92===s)switch(b(),s){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:b();break;case 117:b(),k(),k(),k(),k();break;default:throw m("Bad character escape sequence.")}else{if(l===i)throw m("Unterminated string.");b()}if(34===s)return void b();throw m("Unterminated string.")}();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return c="Number",function(){45===s&&b();48===s?b():w();46===s&&(b(),w());69!==s&&101!==s||(b(),43!==s&&45!==s||b(),w())}();case 102:if("false"!==a.slice(r,r+5))break;return l+=4,b(),void(c="Boolean");case 110:if("null"!==a.slice(r,r+4))break;return l+=3,b(),void(c="Null");case 116:if("true"!==a.slice(r,r+4))break;return l+=3,b(),void(c="Boolean")}c=a[r],b()}else c="EOF"}function k(){if(s>=48&&s<=57||s>=65&&s<=70||s>=97&&s<=102)return b();throw m("Expected hexadecimal digit.")}function w(){if(s<48||s>57)throw m("Expected decimal digit.");do{b()}while(s>=48&&s<=57)}},1786:function(e,t,n){var a=n(1871);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(110).default)("011af550",a,!0,{sourceMap:!1})},1818:function(e,t,n){"use strict";n(63);var a=n(1765),i=n(1766);t.a=e=>{try{return Object(i.a)(e),Promise.resolve([])}catch(t){return Promise.resolve([{from:Object(a.a)(e,t.start),to:Object(a.a)(e,t.end),message:t.message,severity:"error"}])}}},1845:function(e,t,n){var a=n(2048);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(110).default)("477c2feb",a,!0,{sourceMap:!1})},1870:function(e,t,n){"use strict";n(1786)},1871:function(e,t,n){var a=n(109)(!1);a.push([e.i,".chip[data-v-b459a34e] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  border-radius: 0.25rem;\n  padding-left: 0.5rem;\n  padding-right: 0.125rem;\n  background-color: var(--primary-dark-color);\n}",""]),e.exports=a},1896:function(e,t,n){"use strict";n.r(t);n(1870);var a=n(16),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"chip"},[n("i",{staticClass:"opacity-75 material-icons"},[e._v("attachment")]),e._v(" "),n("span",{staticClass:"px-2 truncate max-w-32"},[e._t("default")],2)])}),[],!1,null,"b459a34e",null);t.default=i.exports},2047:function(e,t,n){"use strict";n(1845)},2048:function(e,t,n){var a=n(109)(!1);a.push([e.i,".file-chips-container[data-v-561eb45a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n  white-space: nowrap;\n  overflow: auto;\n  background-color: transparent;\n}\n.file-chips-container .file-chips-wrapper[data-v-561eb45a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  padding: 0.25rem;\n  width: 0px;\n}",""]),e.exports=a},2079:function(e,t,n){"use strict";n.r(t);var a=n(12),i=(n(99),n(2)),r=n(1009),l=n(0),o=n(899),s={"text/plain":"text/x-yaml","text/html":"htmlmixed","application/xml":"application/xml","application/hal+json":"application/ld+json","application/vnd.api+json":"application/ld+json","application/json":"application/ld+json"};var c=n(20),u=n(926),p=n(90),d=n(1818),v=(n(63),e=>r.g((()=>new Promise(((t,n)=>{var a=new FileReader;a.onload=()=>{t(a.result)},a.onerror=()=>{n(new Error("File err"))},a.readAsText(e)}))))),f={props:{contentType:{key:"contentType",required:!0,type:null}}};f.setup=(e,t)=>{var n=Object(c.d)(),f=e,h=Object(c.j)(),y=Object(c.a)(Object(p.C)(),"body"),m=Object(i.m)("wand"),g=Object(i.a)((()=>{return e=f.contentType,s[e]||"text/x-yaml";var e})),b=Object(i.a)((()=>Object(u.a)(f.contentType)?d.a:null));Object(i.y)((()=>console.log(g.value)));var x=Object(i.m)(!0),k=Object(i.m)(null);Object(o.a)(k,y,Object(i.k)({extendedEditorConfig:{lineWrapping:x,mode:g,placeholder:n("request.raw_body").toString()},linter:b,completer:null,environmentHighlights:!0}));var w=function(){var e=Object(a.a)((function*(e){var t;yield Object(l.k)(null===(t=e.target.files)||void 0===t?void 0:t[0],r.f,r.a(r.c((e=>void 0!==e))),r.a(v),r.e((()=>h.error("".concat(n("action.choose_file")))),(e=>{y.value=e,h.success("".concat(n("state.file_imported")))})))()}));return function(t){return e.apply(this,arguments)}}();return{t:n,prettifyIcon:m,linewrapEnabled:x,rawBodyParameters:k,clearContent:()=>{y.value=""},uploadPayload:w,prettifyRequestBody:()=>{try{var e=JSON.parse(y.value);y.value=JSON.stringify(e,null,2),m.value="check"}catch(e){console.error(e),m.value="info",h.error("".concat(n("error.json_prettify_invalid_body")))}setTimeout((()=>m.value="wand"),1e3)}}};var h=f,y=n(16),m=Object(y.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between flex-1 pl-4 border-b bg-primary border-dividerLight top-upperTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.raw_body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.linewrapEnabled},attrs:{title:e.t("state.linewrap"),svg:"wrap-text"},nativeOn:{click:function(t){t.preventDefault(),e.linewrapEnabled=!e.linewrapEnabled}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent.apply(null,arguments)}}}),e._v(" "),e.contentType&&e.contentType.endsWith("json")?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"prettifyRequest",attrs:{title:e.t("action.prettify"),svg:e.prettifyIcon},nativeOn:{click:function(t){return e.prettifyRequestBody.apply(null,arguments)}}}):e._e(),e._v(" "),n("label",{attrs:{for:"payload"}},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("import.title"),svg:"file-plus"},nativeOn:{click:function(t){return e.$refs.payload.click()}}})],1),e._v(" "),n("input",{ref:"payload",staticClass:"input",attrs:{name:"payload",type:"file"},on:{change:e.uploadPayload}})],1)]),e._v(" "),n("div",{ref:"rawBodyParameters"})])}),[],!1,null,null,null);t.default=m.exports;installComponents(m,{ButtonSecondary:n(83).default})},2082:function(e,t,n){"use strict";n.r(t);var a=n(30),i=n(2),r=n(328),l=n.n(r),o=n(202),s=n(20),c=n(90);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={setup:(e,t)=>{var n=Object(s.d)(),a=Object(s.j)(),r=Object(i.m)(null),u=Object(s.a)(Object(c.C)(),"body"),d=Object(i.m)([{key:"",value:"",active:!0,isFile:!1}]);Object(i.x)(d,(e=>{e.length>0&&""!==e[e.length-1].key&&d.value.push({key:"",value:"",active:!0,isFile:!1})})),Object(i.x)(u,(e=>{var t=d.value.filter((e=>""!==e.key));l()(e,t)||(d.value=e)}),{immediate:!0}),Object(i.x)(d,(e=>{var t=e.filter((e=>""!==e.key));l()(u.value,t)||(u.value=t)}));var v=(e,t)=>{d.value=d.value.map(((n,a)=>a===e?t:n))};return{bodyParams:u,workingParams:d,addBodyParam:()=>{d.value.push({key:"",value:"",active:!0,isFile:!1})},updateBodyParam:v,deleteBodyParam:e=>{var t=Object(o.clone)(d.value);t.length>0&&e===t.length-1||(r.value&&(r.value.goAway(0),r.value=null),r.value=a.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:(e,n)=>{d.value=t,n.goAway(0),r.value=null}}],onComplete:()=>{r.value=null}})),d.value.splice(e,1)},clearContent:()=>{d.value=[{key:"",value:"",active:!0,isFile:!1}]},setRequestAttachment:(e,t,n)=>{var a;if(0!==(null===(a=n.target.files)||void 0===a?void 0:a.length)){var i=p(p({},t),{},{isFile:!0,value:Array.from(n.target.files)});v(e,i)}else v(e,p(p({},t),{},{isFile:!1,value:""}))}}}},v=d,f=(n(2047),n(16)),h=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between flex-1 pl-4 border-b bg-primary border-dividerLight top-upperTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.$t("request.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.$t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addBodyParam.apply(null,arguments)}}})],1)]),e._v(" "),e._l(e.workingParams,(function(t,a){return n("div",{key:"param-"+a,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight"},[n("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.parameter",{count:a+1}),styles:"\n        bg-transparent\n        flex\n        flex-1\n        py-1\n        px-4\n      "},on:{change:function(n){return e.updateBodyParam(a,{key:n,value:t.value,active:t.active,isFile:t.isFile})}},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"param.key"}}),e._v(" "),t.isFile?n("div",{staticClass:"file-chips-container hide-scrollbar"},[n("div",{staticClass:"space-x-2 file-chips-wrapper"},e._l(t.value,(function(t,i){return n("SmartFileChip",{key:"param-"+a+"-file-"+i},[e._v("\n          "+e._s(t.name)+"\n        ")])})),1)]):n("span",{staticClass:"flex flex-1"},[n("SmartEnvInput",{attrs:{placeholder:""+e.$t("count.value",{count:a+1}),styles:"\n          bg-transparent\n          flex\n          flex-1\n          py-1\n          px-4\n        "},on:{change:function(n){return e.updateBodyParam(a,{key:t.key,value:n,active:t.active,isFile:t.isFile})}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"param.value"}})],1),e._v(" "),n("span",[n("label",{staticClass:"p-0",attrs:{for:"attachment"+a}},[n("input",{ref:"attachment"+a,refInFor:!0,staticClass:"p-1 transition cursor-pointer file:transition file:cursor-pointer text-secondaryLight hover:text-secondaryDark file:mr-2 file:py-1 file:px-4 file:rounded file:border-0 file:text-tiny text-tiny file:text-secondary hover:file:text-secondaryDark file:bg-primaryLight hover:file:bg-primaryDark",attrs:{id:"attachment"+a,name:"attachment"+a,type:"file",multiple:""},on:{change:function(n){return e.setRequestAttachment(a,t,n)}}})])]),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.$t("action.turn_off"):e.$t("action.turn_on"):e.$t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){e.updateBodyParam(a,{key:t.key,value:t.value,active:!!t.hasOwnProperty("active")&&!t.active,isFile:t.isFile})}}})],1),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteBodyParam(a)}}})],1)],1)})),e._v(" "),0===e.bodyParams.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/upload_single_file.svg",loading:"lazy",alt:""+e.$t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v("\n      "+e._s(e.$t("empty.body"))+"\n    ")]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+e.$t("add.new"),filled:"",svg:"plus"},nativeOn:{click:function(t){return e.addBodyParam.apply(null,arguments)}}})],1):e._e()],2)}),[],!1,null,"561eb45a",null);t.default=h.exports;installComponents(h,{ButtonSecondary:n(83).default,SmartEnvInput:n(1020).default,SmartFileChip:n(1896).default})},2083:function(e,t,n){"use strict";n.r(t);n(58),n(111),n(327),n(112),n(134),n(1704),n(151);var a=n(2),i=n(328),r=n.n(i),l=n(154),o=n.n(l),s=n(899),c=n(90),u=n(20),p=n(268),d={setup:(e,t)=>{var n=Object(u.d)(),i=Object(u.j)(),l=Object(a.m)(!1),d=Object(a.m)(""),v=Object(a.m)(null),f=Object(a.m)(null);Object(s.a)(v,d,{extendedEditorConfig:{mode:"text/x-yaml",placeholder:"".concat(n("state.bulk_mode_placeholder"))},linter:null,completer:null,environmentHighlights:!0});var h=Object(u.a)(Object(c.C)(),"body"),y=Object(a.a)({get:()=>Object(p.a)(h.value),set(e){h.value=Object(p.b)(e)}}),m=Object(a.m)([{key:"",value:"",active:!0}]);Object(a.x)(m,(e=>{e.length>0&&""!==e[e.length-1].key&&m.value.push({key:"",value:"",active:!0})})),Object(a.x)(y,(e=>{var t=m.value.filter((e=>""!==e.key));r()(e,t)||(m.value=e)}),{immediate:!0}),Object(a.x)(m,(e=>{var t=e.filter((e=>""!==e.key));r()(y.value,t)||(y.value=t)})),Object(a.x)(d,(()=>{try{var e=d.value.split("\n").filter((e=>e.trim().length>0&&e.includes(":"))).map((e=>({key:e.substring(0,e.indexOf(":")).trimLeft().replace(/^#/,""),value:e.substring(e.indexOf(":")+1).trimLeft(),active:!e.trim().startsWith("#")}))),t=m.value.filter((e=>""!==e.key));r()(t,e)||(m.value=e)}catch(e){i.error("".concat(n("error.something_went_wrong"))),console.error(e)}})),Object(a.x)(m,(e=>{if(!l.value)try{var t=d.value.split("\n").map((e=>({key:e.substring(0,e.indexOf(":")).trimLeft().replace(/^#/,""),value:e.substring(e.indexOf(":")+1).trimLeft(),active:!e.trim().startsWith("#")}))),a=e.filter((e=>""!==e.key));r()(t,a)||(d.value=a.map((e=>"".concat(e.active?"":"#").concat(e.key,": ").concat(e.value))).join("\n"))}catch(e){i.error("".concat(n("error.something_went_wrong"))),console.error(e)}}));return{t:n,bulkMode:l,bulkEditor:v,workingUrlEncodedParams:m,addUrlEncodedParam:()=>{m.value.push({key:"",value:"",active:!0})},updateUrlEncodedParam:(e,t)=>{m.value=m.value.map(((n,a)=>a===e?t:n))},deleteUrlEncodedParam:e=>{var t=o()(m.value);t.length>0&&e===t.length-1||(f.value&&(f.value.goAway(0),f.value=null),f.value=i.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:(e,n)=>{m.value=t,n.goAway(0),f.value=null}}],onComplete:()=>{f.value=null}})),m.value.splice(e,1)},clearContent:()=>{m.value=[{key:"",value:"",active:!0}],d.value=""}}}},v=d,f=n(16),h=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between flex-1 pl-4 border-b bg-primary border-dividerLight top-upperTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.bulkMode},attrs:{title:e.t("state.bulk_mode"),svg:"edit"},nativeOn:{click:function(t){e.bulkMode=!e.bulkMode}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("add.new"),svg:"plus",disabled:e.bulkMode},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1)]),e._v(" "),e.bulkMode?n("div",{ref:"bulkEditor"}):n("div",[e._l(e.workingUrlEncodedParams,(function(t,a){return n("div",{key:"param-"+a,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight"},[n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.parameter",{count:a+1}),styles:"\n          bg-transparent\n          flex\n          flex-1\n          py-1\n          px-4\n        "},on:{change:function(n){return e.updateUrlEncodedParam(a,{key:n,value:t.value,active:t.active})}},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"param.key"}}),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:a+1}),styles:"\n          bg-transparent\n          flex\n          flex-1\n          py-1\n          px-4\n        "},on:{change:function(n){return e.updateUrlEncodedParam(a,{key:t.key,value:n,active:t.active})}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"param.value"}}),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.t("action.turn_off"):e.t("action.turn_on"):e.t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){return e.updateUrlEncodedParam(a,{key:t.key,value:t.value,active:!t.active})}}})],1),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteUrlEncodedParam(a)}}})],1)],1)})),e._v(" "),0===e.workingUrlEncodedParams.length?n("div",{staticClass:"flex flex-col text-secondaryLight p-4 items-center justify-center"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/add_category.svg",loading:"lazy",alt:""+e.t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v("\n        "+e._s(e.t("empty.body"))+"\n      ")]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{filled:"",label:""+e.t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1):e._e()],2)])}),[],!1,null,null,null);t.default=h.exports;installComponents(h,{ButtonSecondary:n(83).default,SmartEnvInput:n(1020).default})},2159:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(20),r=n(90),l=n(926),o=Object(a.c)({setup:()=>({validContentTypes:Object.keys(l.b),contentType:Object(i.h)(r.i,null,r.s)})}),s=n(16),c=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between flex-1 pl-4 border-b bg-primary border-dividerLight top-upperSecondaryStickyFold"},[n("span",{staticClass:"flex items-center"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n        "+e._s(e.$t("request.content_type"))+"\n      ")]),e._v(" "),n("tippy",{ref:"contentTypeOptions",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("span",{staticClass:"select-wrapper"},[n("ButtonSecondary",{staticClass:"pr-8 ml-2 rounded-none",attrs:{label:e.contentType||e.$t("state.none").toLowerCase()}})],1)]},proxy:!0}])},[e._v(" "),n("SmartItem",{attrs:{label:e.$t("state.none").toLowerCase(),"info-icon":null===e.contentType?"done":"","active-info-icon":null===e.contentType},nativeOn:{click:function(t){return function(){e.contentType=null,e.$refs.contentTypeOptions.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),e._l(e.validContentTypes,(function(t,a){return n("SmartItem",{key:"contentTypeItem-"+a,attrs:{label:t,"info-icon":t===e.contentType?"done":"","active-info-icon":t===e.contentType},nativeOn:{click:function(n){return function(){e.contentType=t,e.$refs.contentTypeOptions.tippy().hide()}.apply(null,arguments)}}})}))],2)],1)]),e._v(" "),"multipart/form-data"===e.contentType?n("HttpBodyParameters"):"application/x-www-form-urlencoded"===e.contentType?n("HttpURLEncodedParams"):null!==e.contentType?n("HttpRawBody",{attrs:{"content-type":e.contentType}}):e._e(),e._v(" "),null==e.contentType?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/upload_single_file.svg",loading:"lazy",alt:""+e.$t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v("\n      "+e._s(e.$t("empty.body"))+"\n    ")]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{outline:"",label:""+e.$t("app.documentation"),to:"https://docs.hoppscotch.io/features/body",blank:"",svg:"external-link",reverse:""}})],1):e._e()],1)}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{ButtonSecondary:n(83).default,SmartItem:n(126).default,HttpBodyParameters:n(2082).default,HttpURLEncodedParams:n(2083).default,HttpRawBody:n(2079).default})},926:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n(58);var a={"application/json":"json","application/ld+json":"json","application/hal+json":"json","application/vnd.api+json":"json","application/xml":"xml","application/x-www-form-urlencoded":"multipart","multipart/form-data":"multipart","text/html":"html","text/plain":"plain"};function i(e){return/\bjson\b/i.test(e)}},932:function(e,t,n){var a=n(1163);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(110).default)("87f8a8d6",a,!0,{sourceMap:!1})}}]);