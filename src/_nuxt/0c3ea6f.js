(window.webpackJsonp=window.webpackJsonp||[]).push([[67,94],{1002:function(t,e,n){var i=n(1234);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(132).default)("87f8a8d6",i,!0,{sourceMap:!1})},1091:function(t,e,n){"use strict";n.r(e);n(59),n(204),n(384),n(4),n(8),n(90),n(12),n(150),n(178),n(55),n(11),n(10),n(162),n(381),n(122);var i=n(2),a=n(1809),r=n.n(a),l=n(1100),o=n.n(l),s=n(1810),c=n.n(s),u=n(318),d=n(103),h=n(29),p={"&":"&amp;","<":"&lt;",">":"&gt;"},v=Object(i.c)({props:{value:{type:String,default:""},placeholder:{type:String,default:""},styles:{type:String,default:""}},setup:function(){return{aggregateEnvs:Object(h.g)(d.b)}},data:function(){return{internalValue:"",htmlOutput:"",debouncedHandler:null,highlight:[{text:/(<<\w+>>)/g,style:"cursor-help transition rounded px-1 focus:outline-none mx-0.5"}],highlightEnabled:!0,highlightStyle:"",caseSensitive:!0,fireOn:"input",fireOnEnabled:!0}},watch:{aggregateEnvs:function(){this.processHighlights()},highlightStyle:function(){this.processHighlights()},highlight:function(){this.processHighlights()},value:function(){this.internalValue!==this.value&&(this.internalValue=this.value,this.processHighlights())},highlightEnabled:function(){this.processHighlights()},caseSensitive:function(){this.processHighlights()},htmlOutput:function(){var t=this.saveSelection(this.$refs.editor);this.$refs.editor.innerHTML=this.htmlOutput,this.restoreSelection(this.$refs.editor,t)}},mounted:function(){this.fireOnEnabled&&this.$refs.editor.addEventListener(this.fireOn,this.handleChange),this.internalValue=this.value,this.processHighlights()},methods:{handleCompositionEnd:function(){this.handleChange()},handlePaste:function(t){this.handleChange(),this.$emit("paste",{event:t,previousValue:this.internalValue})},handleChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&"inputType"in t&&"insertCompositionText"===t.inputType||(this.debouncedHandler=o()((function(){this.$refs.editor&&this.internalValue!==this.$refs.editor.textContent&&(this.internalValue=this.$refs.editor.textContent,this.processHighlights())}),5),this.debouncedHandler())},processHighlights:function(){var t=this;if(!this.highlightEnabled)return this.htmlOutput=this.internalValue,void(this.intervalTree!==this.value&&(this.$emit("input",this.internalValue),this.$emit("change",this.internalValue)));var e=new r.a,n=[],i=this.normalizedHighlights();if(i){for(var a=function(n){var a=i[n];if(a.text&&("string"==typeof a.text&&t.getIndicesOf(a.text,t.internalValue,c()(a.caseSensitive)?t.caseSensitive:a.caseSensitive).forEach((function(n){var i=n+a.text.length-1;t.insertRange(n,i,a,e)})),"[object RegExp]"===Object.prototype.toString.call(a.text)&&t.getRegexIndices(a.text,t.internalValue).forEach((function(n){t.insertRange(n.start,n.end,a,e)}))),void 0!==a.start&&void 0!==a.end&&a.start<a.end){var r=a.start,l=a.end-1;t.insertRange(r,l,a,e)}},l=0;l<i.length;l++)a(l);n=(n=e.search(0,this.internalValue.length)).sort((function(t,e){return t.start-e.start}));for(var o="",s=0,u=function(e){var i,a,r,l=n[e];o+=t.safe_tags_replace(t.internalValue.substring(s,l.start));var c=t.internalValue.substring(l.start,l.end+1).slice(2,-2);o+='<span class="'.concat(n[e].style," ").concat(void 0===(null===(i=t.aggregateEnvs.find((function(t){return t.key===c})))||void 0===i?void 0:i.value)?"bg-red-400 text-red-50 hover:bg-red-600":"bg-accentDark text-accentContrast hover:bg-accent",'" v-tippy data-tippy-content="').concat(t.getEnvName(null===(a=t.aggregateEnvs.find((function(t){return t.key===c})))||void 0===a?void 0:a.sourceEnv)," <kbd>").concat(t.getEnvValue(null===(r=t.aggregateEnvs.find((function(t){return t.key===c})))||void 0===r?void 0:r.value),'</kbd>">').concat(t.safe_tags_replace(t.internalValue.substring(l.start,l.end+1)),"</span>"),s=l.end+1},d=0;d<n.length;d++)u(d);s<this.internalValue.length&&(o+=this.safe_tags_replace(this.internalValue.substring(s,this.internalValue.length)))," "===o[o.length-1]&&(o=o.substring(0,o.length-1),o+="&nbsp;"),this.htmlOutput=o,this.$nextTick((function(){t.renderTippy()})),this.internalValue!==this.value&&(this.$emit("input",this.internalValue),this.$emit("change",this.internalValue))}},renderTippy:function(){document.querySelectorAll("[v-tippy]").forEach((function(t){Object(u.c)(t,{content:t.dataset["tippy-content"],theme:"tooltip",popperOptions:{modifiers:{preventOverflow:{enabled:!1},hide:{enabled:!1}}}})}))},insertRange:function(t,e,n,i){var a=i.search(t,e),r=a.reduce((function(t,e){return Math.max(e.end-e.start,t)}),0);0===a.length?i.insert(t,e,{start:t,end:e,style:n.style}):e-t>r&&(a.forEach((function(t){i.remove(t.start,t.end,t)})),i.insert(t,e,{start:t,end:e,style:n.style}))},normalizedHighlights:function(){var t=this;if(null==this.highlight)return null;if("[object RegExp]"===Object.prototype.toString.call(this.highlight)||"string"==typeof this.highlight)return[{text:this.highlight}];if("[object Array]"===Object.prototype.toString.call(this.highlight)&&this.highlight.length>0){var e="string"==typeof this.highlightStyle?this.highlightStyle:Object.keys(this.highlightStyle).map((function(e){return e+":"+t.highlightStyle[e]})).join(";")+";",n=this.highlight.filter((function(t){return t===Object.prototype.toString.call(t)==="[object RegExp]"}));return this.highlight.filter((function(t){return t===Object.prototype.toString.call(t)!=="[object RegExp]"})).map((function(t){if(t.text||"string"==typeof t)return{text:t.text||t,style:t.style||e,caseSensitive:t.caseSensitive};if(void 0!==t.start&&void 0!==t.end)return{style:t.style||e,start:t.start,end:t.end,caseSensitive:t.caseSensitive};throw new Error("Please provide a valid highlight object or string")})).sort((function(t,e){return t.text&&e.text?t.text>e.text:t.start===e.start?t.end<e.end:t.start<e.start})).concat(n)}return console.error("Expected a string or an array of strings"),null},safe_tags_replace:function(t){return t.replace(/[&<>]/g,this.replaceTag)},replaceTag:function(t){return p[t]||t},getRegexIndices:function(t,e){if(!t.global)return console.error("Expected "+t+" to be global"),[];t=RegExp(t);for(var n=[],i=null;null!=(i=t.exec(e));)n.push({start:i.index,end:i.index+i[0].length-1});return n},getIndicesOf:function(t,e,n){var i=t.length;if(0===i)return[];var a,r=0,l=[];for(n||(e=e.toLowerCase(),t=t.toLowerCase());(a=e.indexOf(t,r))>-1;)l.push(a),r=a+i;return l},saveSelection:function(t){var e;if(window.getSelection&&document.createRange){var n=window.getSelection();if(!n||0===n.rangeCount)return;var i=n.getRangeAt(0),a=i.cloneRange();return a.selectNodeContents(t),a.setEnd(i.startContainer,i.startOffset),{start:e="".concat(a).length,end:e+"".concat(i).length}}if(document.selection){var r=document.selection.createRange(),l=document.body.createTextRange();return l.moveToElementText(t),l.setEndPoint("EndToStart",r),{start:e=l.text.length,end:e+r.text.length}}},restoreSelection:function(t,e){if(e)if(window.getSelection&&document.createRange){var n=0,i=document.createRange();i.setStart(t,0),i.collapse(!0);for(var a,r=[t],l=!1,o=!1;!o&&(a=r.pop());)if(3===a.nodeType){var s=n+a.length;!l&&e.start>=n&&e.start<=s&&(i.setStart(a,e.start-n),l=!0),l&&e.end>=n&&e.end<=s&&(i.setEnd(a,e.end-n),o=!0),n=s}else for(var c=a.childNodes.length;c--;)r.push(a.childNodes[c]);var u=window.getSelection();u.removeAllRanges(),u.addRange(i)}else if(document.selection){var d=document.body.createTextRange();d.moveToElementText(t),d.collapse(!0),d.moveEnd("character",e.end),d.moveStart("character",e.start),d.select()}},getEnvName:function(t){return t||"choose an environment"},getEnvValue:function(t){return t?t.replace(/"/g,"&quot;"):"not found"}}}),f=v,g=(n(1233),n(23)),m=Object(g.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"env-input-container"},[n("div",{ref:"editor",staticClass:"env-input",class:t.styles,attrs:{placeholder:t.placeholder,contenteditable:"true",spellcheck:"false"},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.$emit("enter",e))},function(e){return t.$emit("keydown",e)}],keyup:function(e){return t.$emit("keyup",e)},click:function(e){return t.$emit("click",e)},paste:t.handlePaste,compositionend:t.handleCompositionEnd}})])}),[],!1,null,"51359fa4",null);e.default=m.exports},1233:function(t,e,n){"use strict";n(1002)},1234:function(t,e,n){var i=n(131)(!1);i.push([t.i,".env-input-container[data-v-51359fa4] {\n  position: relative;\n  display: -ms-inline-grid;\n  display: inline-grid;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n}\n[contenteditable][data-v-51359fa4] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  color: var(--secondary-dark-color);\n}\n[contenteditable][data-v-51359fa4]:empty {\n  line-height: 2;\n}\n[contenteditable][data-v-51359fa4]:empty::before {\n  color: var(--secondary-color);\n  opacity: 0.35;\n  pointer-events: none;\n  content: attr(placeholder);\n}\n.env-input[data-v-51359fa4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  justify-items: start;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  resize: none;\n}\n.env-input[data-v-51359fa4]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.env-input[data-v-51359fa4]::-webkit-scrollbar {\n  display: none;\n}",""]),t.exports=i},1775:function(t,e,n){"use strict";var i=n(25),a=n(388).start,r=n(537)("trimStart"),l=r?function(){return a(this)}:"".trimStart;i({target:"String",proto:!0,name:"trimStart",forced:r},{trimStart:l,trimLeft:l})},2252:function(t,e,n){"use strict";n.r(e);n(10),n(4),n(55),n(59),n(133),n(382),n(121),n(135),n(162),n(1775),n(180),n(178),n(12),n(183);var i=n(2),a=n(383),r=n.n(a),l=n(184),o=n.n(l),s=n(969),c=n(29),u=n(110),d={setup:function(t,e){var n=Object(c.d)(),a=Object(c.j)(),l=Object(i.m)(!1),d=Object(i.m)(""),h=Object(i.m)(null),p=Object(i.m)(null);Object(s.a)(p,d,{extendedEditorConfig:{mode:"text/x-yaml",placeholder:"".concat(n("state.bulk_mode_placeholder"))},linter:null,completer:null,environmentHighlights:!0});var v=Object(c.h)(u.m,[],u.v),f=Object(i.m)([{key:"",value:"",active:!0}]);Object(i.x)(f,(function(t){t.length>0&&""!==t[t.length-1].key&&f.value.push({key:"",value:"",active:!0})})),Object(i.x)(v,(function(t){var e=f.value.filter((function(t){return""!==t.key}));r()(t,e)||(f.value=t)}),{immediate:!0}),Object(i.x)(f,(function(t){var e=t.filter((function(t){return""!==t.key}));r()(v.value,e)||(v.value=e)})),Object(i.x)(d,(function(){try{var t=d.value.split("\n").filter((function(t){return t.trim().length>0&&t.includes(":")})).map((function(t){return{key:t.substring(0,t.indexOf(":")).trimLeft().replace(/^#/,""),value:t.substring(t.indexOf(":")+1).trimLeft(),active:!t.trim().startsWith("#")}})),e=f.value.filter((function(t){return""!==t.key}));r()(e,t)||(f.value=t)}catch(t){a.error("".concat(n("error.something_went_wrong"))),console.error(t)}})),Object(i.x)(f,(function(t){if(!l.value)try{var e=d.value.split("\n").map((function(t){return{key:t.substring(0,t.indexOf(":")).trimLeft().replace(/^#/,""),value:t.substring(t.indexOf(":")+1).trimLeft(),active:!t.trim().startsWith("#")}})),i=t.filter((function(t){return""!==t.key}));r()(e,i)||(d.value=i.map((function(t){return"".concat(t.active?"":"#").concat(t.key,": ").concat(t.value)})).join("\n"))}catch(t){a.error("".concat(n("error.something_went_wrong"))),console.error(t)}}));return{t:n,bulkMode:l,bulkEditor:p,workingParams:f,addParam:function(){f.value.push({key:"",value:"",active:!0})},updateParam:function(t,e){f.value=f.value.map((function(n,i){return i===t?e:n}))},deleteParam:function(t){var e=o()(f.value);e.length>0&&t===e.length-1||(h.value&&(h.value.goAway(0),h.value=null),h.value=a.success("".concat(n("state.deleted")),{action:[{text:"".concat(n("action.undo")),onClick:function(t,n){f.value=e,n.goAway(0),h.value=null}}],onComplete:function(){h.value=null}})),f.value.splice(t,1)},clearContent:function(){f.value=[{key:"",value:"",active:!0}],d.value=""}}}},h=d,p=n(23),v=Object(p.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between flex-1 pl-4 border-b bg-primary border-dividerLight top-upperSecondaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[t._v("\n      "+t._s(t.t("request.parameter_list"))+"\n    ")]),t._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/parameters",blank:"",title:t.t("app.wiki"),svg:"help-circle"}}),t._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.t("action.clear_all"),svg:"trash-2"},nativeOn:{click:function(e){return t.clearContent()}}}),t._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":t.bulkMode},attrs:{title:t.t("state.bulk_mode"),svg:"edit"},nativeOn:{click:function(e){t.bulkMode=!t.bulkMode}}}),t._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.t("add.new"),svg:"plus",disabled:t.bulkMode},nativeOn:{click:function(e){return t.addParam.apply(null,arguments)}}})],1)]),t._v(" "),t.bulkMode?n("div",{ref:"bulkEditor"}):n("div",[t._l(t.workingParams,(function(e,i){return n("div",{key:"param-"+i,staticClass:"flex border-b divide-x divide-dividerLight border-dividerLight"},[n("SmartEnvInput",{attrs:{placeholder:""+t.t("count.parameter",{count:i+1}),styles:"\n          bg-transparent\n          flex\n          flex-1\n          py-1\n          px-4\n        "},on:{change:function(n){return t.updateParam(i,{key:n,value:e.value,active:e.active})}},model:{value:e.key,callback:function(n){t.$set(e,"key",n)},expression:"param.key"}}),t._v(" "),n("SmartEnvInput",{attrs:{placeholder:""+t.t("count.value",{count:i+1}),styles:"\n          bg-transparent\n          flex\n          flex-1\n          py-1\n          px-4\n        "},on:{change:function(n){return t.updateParam(i,{key:e.key,value:n,active:e.active})}},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"param.value"}}),t._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.hasOwnProperty("active")?e.active?t.t("action.turn_off"):t.t("action.turn_on"):t.t("action.turn_off"),svg:e.hasOwnProperty("active")?e.active?"check-circle":"circle":"check-circle",color:"green"},nativeOn:{click:function(n){t.updateParam(i,{key:e.key,value:e.value,active:!!e.hasOwnProperty("active")&&!e.active})}}})],1),t._v(" "),n("span",[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.t("action.remove"),svg:"trash",color:"red"},nativeOn:{click:function(e){return t.deleteParam(i)}}})],1)],1)})),t._v(" "),0===t.workingParams.length?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+t.$colorMode.value+"/add_files.svg",loading:"lazy",alt:""+t.t("empty.parameters")}}),t._v(" "),n("span",{staticClass:"pb-4 text-center"},[t._v("\n        "+t._s(t.t("empty.parameters"))+"\n      ")]),t._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{label:""+t.t("add.new"),svg:"plus",filled:""},nativeOn:{click:function(e){return t.addParam.apply(null,arguments)}}})],1):t._e()],2)])}),[],!1,null,null,null);e.default=v.exports;installComponents(v,{ButtonSecondary:n(104).default,SmartEnvInput:n(1091).default})},996:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));n(59);var i={"application/json":"json","application/ld+json":"json","application/hal+json":"json","application/vnd.api+json":"json","application/xml":"xml","application/x-www-form-urlencoded":"multipart","multipart/form-data":"multipart","text/html":"html","text/plain":"plain"};function a(t){return/\bjson\b/i.test(t)}}}]);