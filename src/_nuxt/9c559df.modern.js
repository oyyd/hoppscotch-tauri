(window.webpackJsonp=window.webpackJsonp||[]).push([[76,93],{1020:function(e,t,n){"use strict";n.r(t);n(58),n(175),n(329),n(203),n(134),n(326),n(99);var a=n(2),i=n(1738),r=n.n(i),l=n(1029),s=n.n(l),o=n(1739),c=n.n(o),d=n(263),u=n(82),h=n(20),p={"&":"&amp;","<":"&lt;",">":"&gt;"},v=Object(a.c)({props:{value:{type:String,default:""},placeholder:{type:String,default:""},styles:{type:String,default:""}},setup:()=>({aggregateEnvs:Object(h.g)(u.b)}),data:()=>({internalValue:"",htmlOutput:"",debouncedHandler:null,highlight:[{text:/(<<\w+>>)/g,style:"cursor-help transition rounded px-1 focus:outline-none mx-0.5"}],highlightEnabled:!0,highlightStyle:"",caseSensitive:!0,fireOn:"input",fireOnEnabled:!0}),watch:{aggregateEnvs(){this.processHighlights()},highlightStyle(){this.processHighlights()},highlight(){this.processHighlights()},value(){this.internalValue!==this.value&&(this.internalValue=this.value,this.processHighlights())},highlightEnabled(){this.processHighlights()},caseSensitive(){this.processHighlights()},htmlOutput(){var e=this.saveSelection(this.$refs.editor);this.$refs.editor.innerHTML=this.htmlOutput,this.restoreSelection(this.$refs.editor,e)}},mounted(){this.fireOnEnabled&&this.$refs.editor.addEventListener(this.fireOn,this.handleChange),this.internalValue=this.value,this.processHighlights()},methods:{handleCompositionEnd(){this.handleChange()},handlePaste(e){this.handleChange(),this.$emit("paste",{event:e,previousValue:this.internalValue})},handleChange(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&"inputType"in e&&"insertCompositionText"===e.inputType||(this.debouncedHandler=s()((function(){this.$refs.editor&&this.internalValue!==this.$refs.editor.textContent&&(this.internalValue=this.$refs.editor.textContent,this.processHighlights())}),5),this.debouncedHandler())},processHighlights(){var e=this;if(!this.highlightEnabled)return this.htmlOutput=this.internalValue,void(this.intervalTree!==this.value&&(this.$emit("input",this.internalValue),this.$emit("change",this.internalValue)));var t=new r.a,n=[],a=this.normalizedHighlights();if(a){for(var i=function(n){var i=a[n];if(i.text&&("string"==typeof i.text&&e.getIndicesOf(i.text,e.internalValue,c()(i.caseSensitive)?e.caseSensitive:i.caseSensitive).forEach((n=>{var a=n+i.text.length-1;e.insertRange(n,a,i,t)})),"[object RegExp]"===Object.prototype.toString.call(i.text)&&e.getRegexIndices(i.text,e.internalValue).forEach((n=>{e.insertRange(n.start,n.end,i,t)}))),void 0!==i.start&&void 0!==i.end&&i.start<i.end){var r=i.start,l=i.end-1;e.insertRange(r,l,i,t)}},l=0;l<a.length;l++)i(l);n=(n=t.search(0,this.internalValue.length)).sort(((e,t)=>e.start-t.start));for(var s="",o=0,d=function(t){var a,i,r,l=n[t];s+=e.safe_tags_replace(e.internalValue.substring(o,l.start));var c=e.internalValue.substring(l.start,l.end+1).slice(2,-2);s+='<span class="'.concat(n[t].style," ").concat(void 0===(null===(a=e.aggregateEnvs.find((e=>e.key===c)))||void 0===a?void 0:a.value)?"bg-red-400 text-red-50 hover:bg-red-600":"bg-accentDark text-accentContrast hover:bg-accent",'" v-tippy data-tippy-content="').concat(e.getEnvName(null===(i=e.aggregateEnvs.find((e=>e.key===c)))||void 0===i?void 0:i.sourceEnv)," <kbd>").concat(e.getEnvValue(null===(r=e.aggregateEnvs.find((e=>e.key===c)))||void 0===r?void 0:r.value),'</kbd>">').concat(e.safe_tags_replace(e.internalValue.substring(l.start,l.end+1)),"</span>"),o=l.end+1},u=0;u<n.length;u++)d(u);o<this.internalValue.length&&(s+=this.safe_tags_replace(this.internalValue.substring(o,this.internalValue.length)))," "===s[s.length-1]&&(s=s.substring(0,s.length-1),s+="&nbsp;"),this.htmlOutput=s,this.$nextTick((()=>{this.renderTippy()})),this.internalValue!==this.value&&(this.$emit("input",this.internalValue),this.$emit("change",this.internalValue))}},renderTippy(){document.querySelectorAll("[v-tippy]").forEach((e=>{Object(d.c)(e,{content:e.dataset["tippy-content"],theme:"tooltip",popperOptions:{modifiers:{preventOverflow:{enabled:!1},hide:{enabled:!1}}}})}))},insertRange(e,t,n,a){var i=a.search(e,t),r=i.reduce(((e,t)=>Math.max(t.end-t.start,e)),0);0===i.length?a.insert(e,t,{start:e,end:t,style:n.style}):t-e>r&&(i.forEach((e=>{a.remove(e.start,e.end,e)})),a.insert(e,t,{start:e,end:t,style:n.style}))},normalizedHighlights(){if(null==this.highlight)return null;if("[object RegExp]"===Object.prototype.toString.call(this.highlight)||"string"==typeof this.highlight)return[{text:this.highlight}];if("[object Array]"===Object.prototype.toString.call(this.highlight)&&this.highlight.length>0){var e="string"==typeof this.highlightStyle?this.highlightStyle:Object.keys(this.highlightStyle).map((e=>e+":"+this.highlightStyle[e])).join(";")+";",t=this.highlight.filter((e=>e===Object.prototype.toString.call(e)==="[object RegExp]"));return this.highlight.filter((e=>e===Object.prototype.toString.call(e)!=="[object RegExp]")).map((t=>{if(t.text||"string"==typeof t)return{text:t.text||t,style:t.style||e,caseSensitive:t.caseSensitive};if(void 0!==t.start&&void 0!==t.end)return{style:t.style||e,start:t.start,end:t.end,caseSensitive:t.caseSensitive};throw new Error("Please provide a valid highlight object or string")})).sort(((e,t)=>e.text&&t.text?e.text>t.text:e.start===t.start?e.end<t.end:e.start<t.start)).concat(t)}return console.error("Expected a string or an array of strings"),null},safe_tags_replace(e){return e.replace(/[&<>]/g,this.replaceTag)},replaceTag:e=>p[e]||e,getRegexIndices(e,t){if(!e.global)return console.error("Expected "+e+" to be global"),[];e=RegExp(e);for(var n=[],a=null;null!=(a=e.exec(t));)n.push({start:a.index,end:a.index+a[0].length-1});return n},getIndicesOf(e,t,n){var a=e.length;if(0===a)return[];var i,r=0,l=[];for(n||(t=t.toLowerCase(),e=e.toLowerCase());(i=t.indexOf(e,r))>-1;)l.push(i),r=i+a;return l},saveSelection(e){var t;if(window.getSelection&&document.createRange){var n=window.getSelection();if(!n||0===n.rangeCount)return;var a=n.getRangeAt(0),i=a.cloneRange();return i.selectNodeContents(e),i.setEnd(a.startContainer,a.startOffset),{start:t="".concat(i).length,end:t+"".concat(a).length}}if(document.selection){var r=document.selection.createRange(),l=document.body.createTextRange();return l.moveToElementText(e),l.setEndPoint("EndToStart",r),{start:t=l.text.length,end:t+r.text.length}}},restoreSelection(e,t){if(t)if(window.getSelection&&document.createRange){var n=0,a=document.createRange();a.setStart(e,0),a.collapse(!0);for(var i,r=[e],l=!1,s=!1;!s&&(i=r.pop());)if(3===i.nodeType){var o=n+i.length;!l&&t.start>=n&&t.start<=o&&(a.setStart(i,t.start-n),l=!0),l&&t.end>=n&&t.end<=o&&(a.setEnd(i,t.end-n),s=!0),n=o}else for(var c=i.childNodes.length;c--;)r.push(i.childNodes[c]);var d=window.getSelection();d.removeAllRanges(),d.addRange(a)}else if(document.selection){var u=document.body.createTextRange();u.moveToElementText(e),u.collapse(!0),u.moveEnd("character",t.end),u.moveStart("character",t.start),u.select()}},getEnvName:e=>e||"choose an environment",getEnvValue:e=>e?e.replace(/"/g,"&quot;"):"not found"}}),g=v,f=(n(1162),n(16)),m=Object(f.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"env-input-container"},[n("div",{ref:"editor",staticClass:"env-input",class:e.styles,attrs:{placeholder:e.placeholder,contenteditable:"true",spellcheck:"false"},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.$emit("enter",t))},function(t){return e.$emit("keydown",t)}],keyup:function(t){return e.$emit("keyup",t)},click:function(t){return e.$emit("click",t)},paste:e.handlePaste,compositionend:e.handleCompositionEnd}})])}),[],!1,null,"51359fa4",null);t.default=m.exports},1162:function(e,t,n){"use strict";n(932)},1163:function(e,t,n){var a=n(109)(!1);a.push([e.i,".env-input-container[data-v-51359fa4] {\n  position: relative;\n  display: -ms-inline-grid;\n  display: inline-grid;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n}\n[contenteditable][data-v-51359fa4] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  color: var(--secondary-dark-color);\n}\n[contenteditable][data-v-51359fa4]:empty {\n  line-height: 2;\n}\n[contenteditable][data-v-51359fa4]:empty::before {\n  color: var(--secondary-color);\n  opacity: 0.35;\n  pointer-events: none;\n  content: attr(placeholder);\n}\n.env-input[data-v-51359fa4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  justify-items: start;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  resize: none;\n}\n.env-input[data-v-51359fa4]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.env-input[data-v-51359fa4]::-webkit-scrollbar {\n  display: none;\n}",""]),e.exports=a},1704:function(e,t,n){"use strict";var a=n(24),i=n(334).start,r=n(475)("trimStart"),l=r?function(){return i(this)}:"".trimStart;a({target:"String",proto:!0,name:"trimStart",forced:r},{trimStart:l,trimLeft:l})},2083:function(e,t,n){"use strict";n.r(t);n(58),n(111),n(327),n(112),n(134),n(1704),n(151);var a=n(2),i=n(328),r=n.n(i),l=n(154),s=n.n(l),o=n(899),c=n(90),d=n(20),u=n(268),h={setup:(e,t)=>{var n=Object(d.d)(),i=Object(d.j)(),l=Object(a.m)(!1),h=Object(a.m)(""),p=Object(a.m)(null),v=Object(a.m)(null);Object(o.a)(p,h,{extendedEditorConfig:{mode:"text/x-yaml",placeholder:"".concat(n("state.bulk_mode_placeholder"))},linter:null,completer:null,environmentHighlights:!0});var g=Object(d.a)(Object(c.C)(),"body"),f=Object(a.a)({get:()=>Object(u.a)(g.value),set(e){g.value=Object(u.b)(e)}}),m=Object(a.m)([{key:"",value:"",active:!0}]);Object(a.x)(m,(e=>{e.length>0&&""!==e[e.length-1].key&&m.value.push({key:"",value:"",active:!0})})),Object(a.x)(f,(e=>{var t=m.value.filter((e=>""!==e.key));r()(e,t)||(m.value=e)}),{immediate:!0}),Object(a.x)(m,(e=>{var t=e.filter((e=>""!==e.key));r()(f.value,t)||(f.value=t)})),Object(a.x)(h,(()=>{try{var e=h.value.split("\n").filter((e=>e.trim().length>0&&e.includes(":"))).map((e=>({key:e.substring(0,e.indexOf(":")).trimLeft().replace(/^#/,""),value:e.substring(e.indexOf(":")+1).trimLeft(),active:!e.trim().startsWith("#")}))),t=m.value.filter((e=>""!==e.key));r()(t,e)||(m.value=e)}catch(e){i.error("".concat(n("error.something_went_wrong"))),console.error(e)}})),Object(a.x)(m,(e=>{if(!l.value)try{var t=h.value.split("\n").map((e=>({key:e.substring(0,e.indexOf(":")).trimLeft().replace(/^#/,""),value:e.substring(e.indexOf(":")+1).trimLeft(),active:!e.trim().startsWith("#")}))),a=e.filter((e=>""!==e.key));r()(t,a)||(h.value=a.map((e=>"".concat(e.active?"":"#").concat(e.key,": ").concat(e.value))).join("\n"))}catch(e){i.error("".concat(n("error.something_went_wrong"))),console.error(e)}}));return{t:n,bulkMode:l,bulkEditor:p,workingUrlEncodedParams:m,addUrlEncodedParam:()=>{m.value.push({key:"",value:"",active:!0})},updateUrlEncodedParam:(e,t)=>{m.value=m.value.map(((n,a)=>a===e?t:n))},deleteUrlEncodedParam:e=>{var t=s()(m.value);t.length>0&&e===t.length-1||(v.value&&(v.value.goAway(0),v.value=null),v.value=i.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:(e,n)=>{m.value=t,n.goAway(0),v.value=null}}],onComplete:()=>{v.value=null}})),m.value.splice(e,1)},clearContent:()=>{m.value=[{key:"",value:"",active:!0}],h.value=""}}}},p=h,v=n(16),g=Object(v.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between flex-1 pl-4 border-b bg-primary border-dividerLight top-upperTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("request.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:e.t("app.wiki"),svg:"help-circle"}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(t){return e.clearContent()}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.bulkMode},attrs:{title:e.t("state.bulk_mode"),svg:"edit"},nativeOn:{click:function(t){e.bulkMode=!e.bulkMode}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("add.new"),svg:"plus",disabled:e.bulkMode},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1)]),e._v(" "),e.bulkMode?n("div",{ref:"bulkEditor"}):n("div",[e._l(e.workingUrlEncodedParams,(function(t,a){return n("div",{key:"param-"+a,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight"},[n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.parameter",{count:a+1}),styles:"\n          bg-transparent\n          flex\n          flex-1\n          py-1\n          px-4\n        "},on:{change:function(n){return e.updateUrlEncodedParam(a,{key:n,value:t.value,active:t.active})}},model:{value:t.key,callback:function(n){e.$set(t,"key",n)},expression:"param.key"}}),e._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+e.t("count.value",{count:a+1}),styles:"\n          bg-transparent\n          flex\n          flex-1\n          py-1\n          px-4\n        "},on:{change:function(n){return e.updateUrlEncodedParam(a,{key:t.key,value:n,active:t.active})}},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"param.value"}}),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.hasOwnProperty("active")?t.active?e.t("action.turn_off"):e.t("action.turn_on"):e.t("action.turn_off"),svg:t.hasOwnProperty("active")?t.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){return e.updateUrlEncodedParam(a,{key:t.key,value:t.value,active:!t.active})}}})],1),e._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(t){return e.deleteUrlEncodedParam(a)}}})],1)],1)})),e._v(" "),0===e.workingUrlEncodedParams.length?n("div",{staticClass:"flex flex-col text-secondaryLight p-4 items-center justify-center"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+e.$colorMode.value+"/add_category.svg",loading:"lazy",alt:""+e.t("empty.body")}}),e._v(" "),n("span",{staticClass:"pb-4 text-center"},[e._v("\n        "+e._s(e.t("empty.body"))+"\n      ")]),e._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{filled:"",label:""+e.t("add.new"),svg:"plus"},nativeOn:{click:function(t){return e.addUrlEncodedParam.apply(null,arguments)}}})],1):e._e()],2)])}),[],!1,null,null,null);t.default=g.exports;installComponents(g,{ButtonSecondary:n(83).default,SmartEnvInput:n(1020).default})},926:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n(58);var a={"application/json":"json","application/ld+json":"json","application/hal+json":"json","application/vnd.api+json":"json","application/xml":"xml","application/x-www-form-urlencoded":"multipart","multipart/form-data":"multipart","text/html":"html","text/plain":"plain"};function i(e){return/\bjson\b/i.test(e)}},932:function(e,t,n){var a=n(1163);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n(110).default)("87f8a8d6",a,!0,{sourceMap:!1})}}]);