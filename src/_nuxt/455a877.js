(window.webpackJsonp=window.webpackJsonp||[]).push([[86,84,92,94],{1002:function(t,e,n){var i=n(1234);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(132).default)("87f8a8d6",i,!0,{sourceMap:!1})},1091:function(t,e,n){"use strict";n.r(e);n(59),n(204),n(384),n(4),n(8),n(90),n(12),n(150),n(178),n(55),n(11),n(10),n(162),n(381),n(122);var i=n(2),o=n(1809),r=n.n(o),a=n(1100),s=n.n(a),l=n(1810),c=n.n(l),u=n(318),d=n(103),p=n(29),h={"&":"&amp;","<":"&lt;",">":"&gt;"},f=Object(i.c)({props:{value:{type:String,default:""},placeholder:{type:String,default:""},styles:{type:String,default:""}},setup:function(){return{aggregateEnvs:Object(p.g)(d.b)}},data:function(){return{internalValue:"",htmlOutput:"",debouncedHandler:null,highlight:[{text:/(<<\w+>>)/g,style:"cursor-help transition rounded px-1 focus:outline-none mx-0.5"}],highlightEnabled:!0,highlightStyle:"",caseSensitive:!0,fireOn:"input",fireOnEnabled:!0}},watch:{aggregateEnvs:function(){this.processHighlights()},highlightStyle:function(){this.processHighlights()},highlight:function(){this.processHighlights()},value:function(){this.internalValue!==this.value&&(this.internalValue=this.value,this.processHighlights())},highlightEnabled:function(){this.processHighlights()},caseSensitive:function(){this.processHighlights()},htmlOutput:function(){var t=this.saveSelection(this.$refs.editor);this.$refs.editor.innerHTML=this.htmlOutput,this.restoreSelection(this.$refs.editor,t)}},mounted:function(){this.fireOnEnabled&&this.$refs.editor.addEventListener(this.fireOn,this.handleChange),this.internalValue=this.value,this.processHighlights()},methods:{handleCompositionEnd:function(){this.handleChange()},handlePaste:function(t){this.handleChange(),this.$emit("paste",{event:t,previousValue:this.internalValue})},handleChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&"inputType"in t&&"insertCompositionText"===t.inputType||(this.debouncedHandler=s()((function(){this.$refs.editor&&this.internalValue!==this.$refs.editor.textContent&&(this.internalValue=this.$refs.editor.textContent,this.processHighlights())}),5),this.debouncedHandler())},processHighlights:function(){var t=this;if(!this.highlightEnabled)return this.htmlOutput=this.internalValue,void(this.intervalTree!==this.value&&(this.$emit("input",this.internalValue),this.$emit("change",this.internalValue)));var e=new r.a,n=[],i=this.normalizedHighlights();if(i){for(var o=function(n){var o=i[n];if(o.text&&("string"==typeof o.text&&t.getIndicesOf(o.text,t.internalValue,c()(o.caseSensitive)?t.caseSensitive:o.caseSensitive).forEach((function(n){var i=n+o.text.length-1;t.insertRange(n,i,o,e)})),"[object RegExp]"===Object.prototype.toString.call(o.text)&&t.getRegexIndices(o.text,t.internalValue).forEach((function(n){t.insertRange(n.start,n.end,o,e)}))),void 0!==o.start&&void 0!==o.end&&o.start<o.end){var r=o.start,a=o.end-1;t.insertRange(r,a,o,e)}},a=0;a<i.length;a++)o(a);n=(n=e.search(0,this.internalValue.length)).sort((function(t,e){return t.start-e.start}));for(var s="",l=0,u=function(e){var i,o,r,a=n[e];s+=t.safe_tags_replace(t.internalValue.substring(l,a.start));var c=t.internalValue.substring(a.start,a.end+1).slice(2,-2);s+='<span class="'.concat(n[e].style," ").concat(void 0===(null===(i=t.aggregateEnvs.find((function(t){return t.key===c})))||void 0===i?void 0:i.value)?"bg-red-400 text-red-50 hover:bg-red-600":"bg-accentDark text-accentContrast hover:bg-accent",'" v-tippy data-tippy-content="').concat(t.getEnvName(null===(o=t.aggregateEnvs.find((function(t){return t.key===c})))||void 0===o?void 0:o.sourceEnv)," <kbd>").concat(t.getEnvValue(null===(r=t.aggregateEnvs.find((function(t){return t.key===c})))||void 0===r?void 0:r.value),'</kbd>">').concat(t.safe_tags_replace(t.internalValue.substring(a.start,a.end+1)),"</span>"),l=a.end+1},d=0;d<n.length;d++)u(d);l<this.internalValue.length&&(s+=this.safe_tags_replace(this.internalValue.substring(l,this.internalValue.length)))," "===s[s.length-1]&&(s=s.substring(0,s.length-1),s+="&nbsp;"),this.htmlOutput=s,this.$nextTick((function(){t.renderTippy()})),this.internalValue!==this.value&&(this.$emit("input",this.internalValue),this.$emit("change",this.internalValue))}},renderTippy:function(){document.querySelectorAll("[v-tippy]").forEach((function(t){Object(u.c)(t,{content:t.dataset["tippy-content"],theme:"tooltip",popperOptions:{modifiers:{preventOverflow:{enabled:!1},hide:{enabled:!1}}}})}))},insertRange:function(t,e,n,i){var o=i.search(t,e),r=o.reduce((function(t,e){return Math.max(e.end-e.start,t)}),0);0===o.length?i.insert(t,e,{start:t,end:e,style:n.style}):e-t>r&&(o.forEach((function(t){i.remove(t.start,t.end,t)})),i.insert(t,e,{start:t,end:e,style:n.style}))},normalizedHighlights:function(){var t=this;if(null==this.highlight)return null;if("[object RegExp]"===Object.prototype.toString.call(this.highlight)||"string"==typeof this.highlight)return[{text:this.highlight}];if("[object Array]"===Object.prototype.toString.call(this.highlight)&&this.highlight.length>0){var e="string"==typeof this.highlightStyle?this.highlightStyle:Object.keys(this.highlightStyle).map((function(e){return e+":"+t.highlightStyle[e]})).join(";")+";",n=this.highlight.filter((function(t){return t===Object.prototype.toString.call(t)==="[object RegExp]"}));return this.highlight.filter((function(t){return t===Object.prototype.toString.call(t)!=="[object RegExp]"})).map((function(t){if(t.text||"string"==typeof t)return{text:t.text||t,style:t.style||e,caseSensitive:t.caseSensitive};if(void 0!==t.start&&void 0!==t.end)return{style:t.style||e,start:t.start,end:t.end,caseSensitive:t.caseSensitive};throw new Error("Please provide a valid highlight object or string")})).sort((function(t,e){return t.text&&e.text?t.text>e.text:t.start===e.start?t.end<e.end:t.start<e.start})).concat(n)}return console.error("Expected a string or an array of strings"),null},safe_tags_replace:function(t){return t.replace(/[&<>]/g,this.replaceTag)},replaceTag:function(t){return h[t]||t},getRegexIndices:function(t,e){if(!t.global)return console.error("Expected "+t+" to be global"),[];t=RegExp(t);for(var n=[],i=null;null!=(i=t.exec(e));)n.push({start:i.index,end:i.index+i[0].length-1});return n},getIndicesOf:function(t,e,n){var i=t.length;if(0===i)return[];var o,r=0,a=[];for(n||(e=e.toLowerCase(),t=t.toLowerCase());(o=e.indexOf(t,r))>-1;)a.push(o),r=o+i;return a},saveSelection:function(t){var e;if(window.getSelection&&document.createRange){var n=window.getSelection();if(!n||0===n.rangeCount)return;var i=n.getRangeAt(0),o=i.cloneRange();return o.selectNodeContents(t),o.setEnd(i.startContainer,i.startOffset),{start:e="".concat(o).length,end:e+"".concat(i).length}}if(document.selection){var r=document.selection.createRange(),a=document.body.createTextRange();return a.moveToElementText(t),a.setEndPoint("EndToStart",r),{start:e=a.text.length,end:e+r.text.length}}},restoreSelection:function(t,e){if(e)if(window.getSelection&&document.createRange){var n=0,i=document.createRange();i.setStart(t,0),i.collapse(!0);for(var o,r=[t],a=!1,s=!1;!s&&(o=r.pop());)if(3===o.nodeType){var l=n+o.length;!a&&e.start>=n&&e.start<=l&&(i.setStart(o,e.start-n),a=!0),a&&e.end>=n&&e.end<=l&&(i.setEnd(o,e.end-n),s=!0),n=l}else for(var c=o.childNodes.length;c--;)r.push(o.childNodes[c]);var u=window.getSelection();u.removeAllRanges(),u.addRange(i)}else if(document.selection){var d=document.body.createTextRange();d.moveToElementText(t),d.collapse(!0),d.moveEnd("character",e.end),d.moveStart("character",e.start),d.select()}},getEnvName:function(t){return t||"choose an environment"},getEnvValue:function(t){return t?t.replace(/"/g,"&quot;"):"not found"}}}),v=f,g=(n(1233),n(23)),m=Object(g.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"env-input-container"},[n("div",{ref:"editor",staticClass:"env-input",class:t.styles,attrs:{placeholder:t.placeholder,contenteditable:"true",spellcheck:"false"},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.$emit("enter",e))},function(e){return t.$emit("keydown",e)}],keyup:function(e){return t.$emit("keyup",e)},click:function(e){return t.$emit("click",e)},paste:t.handlePaste,compositionend:t.handleCompositionEnd}})])}),[],!1,null,"51359fa4",null);e.default=m.exports},1233:function(t,e,n){"use strict";n(1002)},1234:function(t,e,n){var i=n(131)(!1);i.push([t.i,".env-input-container[data-v-51359fa4] {\n  position: relative;\n  display: -ms-inline-grid;\n  display: inline-grid;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 0%;\n  -webkit-flex: 1 1 0%;\n  flex: 1 1 0%;\n}\n[contenteditable][data-v-51359fa4] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n  color: var(--secondary-dark-color);\n}\n[contenteditable][data-v-51359fa4]:empty {\n  line-height: 2;\n}\n[contenteditable][data-v-51359fa4]:empty::before {\n  color: var(--secondary-color);\n  opacity: 0.35;\n  pointer-events: none;\n  content: attr(placeholder);\n}\n.env-input[data-v-51359fa4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  justify-items: start;\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  resize: none;\n}\n.env-input[data-v-51359fa4]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.env-input[data-v-51359fa4]::-webkit-scrollbar {\n  display: none;\n}",""]),t.exports=i},1249:function(t,e,n){var i=n(1861);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(132).default)("c702dc10",i,!0,{sourceMap:!1})},1788:function(t,e,n){var i=n(1913);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(132).default)("2789757d",i,!0,{sourceMap:!1})},1840:function(t,e,n){"use strict";n.r(e);var i=n(2),o={info:"\tℹ️ [INFO]:\t",client:"\t⬅️ [SENT]:\t",server:"\t➡️ [RECEIVED]:\t"};function r(t){return o[t]}var a=n(29),s={};s.props={log:{type:Array,default:function(){return[]}},title:{type:String,default:""}},s.setup=function(t,e){var n=Object(a.d)(),o=t,s=Object(i.m)(null);return Object(i.x)((function(){return o.log}),(function(){s.value&&(s.value.scrollHeight-s.value.scrollTop-s.value.clientHeight<5&&Object(i.f)((function(){return s.value.scrollTop=s.value.scrollHeight})))})),{source:r,t:n,logsRef:s}};var l=s,c=(n(1860),n(23)),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"sticky top-0 z-10 flex items-center justify-between flex-1 pl-4 border-b bg-primary border-dividerLight"},[n("label",{staticClass:"py-2 font-semibold text-secondaryLight",attrs:{for:"log"}},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t._v(" "),n("div",{ref:"logsRef",staticClass:"realtime-log",attrs:{name:"log"}},[t.log?n("span",{staticClass:"space-y-2"},t._l(t.log,(function(e,i){return n("span",{key:"entry-"+i,style:{color:e.color}},[t._v(t._s(e.ts)+t._s(t.source(e.source))+t._s(e.payload))])})),0):n("span",[t._v(t._s(t.t("response.waiting_for_connection")))])])])}),[],!1,null,"86dafc8e",null);e.default=u.exports},1860:function(t,e,n){"use strict";n(1249)},1861:function(t,e,n){var i=n(131)(!1);i.push([t.i,".realtime-log[data-v-86dafc8e] {\n  padding: 1rem;\n  background-color: transparent;\n  color: var(--secondary-color);\n  overflow: auto;\n  height: 256px;\n}\n.realtime-log[data-v-86dafc8e], .realtime-log span[data-v-86dafc8e] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.realtime-log span[data-v-86dafc8e] {\n  display: block;\n  overflow-wrap: break-word;\n  word-break: break-all;\n}",""]),t.exports=i},1912:function(t,e,n){"use strict";n(1788)},1913:function(t,e,n){var i=n(131)(!1);i.push([t.i,'input[type=checkbox][data-v-e69fe2fa] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  display: none;\n}\ninput[type=checkbox]+label[data-v-e69fe2fa] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  cursor: pointer;\n}\ninput[type=checkbox]+label[data-v-e69fe2fa]::before {\n  border-color: var(--divider-color);\n  border-width: 2px;\n  border-radius: 0.25rem;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  color: transparent;\n  height: 1rem;\n  width: 1rem;\n  font-family: var(--font-icon);\n  margin-right: 0.75rem;\n  -webkit-transition-property: background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform, filter, backdrop-filter;\n  -o-transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, -webkit-box-shadow, transform, -webkit-transform, filter, backdrop-filter;\n  -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -o-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-transition-duration: 150ms;\n  -o-transition-duration: 150ms;\n  transition-duration: 150ms;\n  content: "";\n}\n.group:hover input[type=checkbox]+label[data-v-e69fe2fa]::before {\n  border-color: var(--accent-dark-color);\n}\ninput[type=checkbox]:checked+label[data-v-e69fe2fa]::before {\n  background-color: var(--accent-color);\n  border-color: var(--accent-color);\n  color: var(--accent-contrast-color);\n}',""]),t.exports=i},1944:function(t,e,n){"use strict";n.r(e);var i=n(2),o=Object(i.c)({props:{on:{type:Boolean,default:!1}}}),r=(n(1912),n(23)),a=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inline-flex items-center justify-center transition cursor-pointer flex-nowrap group hover:text-secondaryDark",on:{click:function(e){return t.$emit("change")}}},[n("input",{attrs:{id:"checkbox",type:"checkbox",name:"checkbox"},domProps:{checked:t.on},on:{change:function(e){return t.$emit("change")}}}),t._v(" "),n("label",{staticClass:"pl-0 font-semibold align-middle cursor-pointer",attrs:{for:"checkbox"}},[t._t("default")],2)])}),[],!1,null,"e69fe2fa",null);e.default=a.exports},2231:function(t,e){},2264:function(t,e,n){"use strict";n.r(e);var i=n(41),o=n(43),r=(n(12),n(10),n(4),n(55),n(2)),a=n(317),s=(n(531),n(2224)),l=n.n(s),c=n(2236),u=n(2248),d=n(2246),p=n.n(d),h=n(1100),f=n.n(h),v=n(205),g=n(28),m=n(208),b=n(357),y=n(29),x={v4:u.a,v3:c.io,v2:l.a},k=Object(r.c)({components:{Splitpanes:a.Splitpanes,Pane:a.Pane},setup:function(){return{windowInnerWidth:Object(m.a)(),SIDEBAR:Object(g.j)("SIDEBAR"),COLUMN_LAYOUT:Object(g.j)("COLUMN_LAYOUT"),SIDEBAR_ON_LEFT:Object(g.j)("SIDEBAR_ON_LEFT"),socketIoClients:x,url:Object(y.h)(b.c,"",b.l),clientVersion:Object(y.h)(b.h,"",b.q),path:Object(y.h)(b.e,"",b.n),connectingState:Object(y.h)(b.a,!1,b.j),connectionState:Object(y.h)(b.b,!1,b.k),io:Object(y.h)(b.g,null,b.p),log:Object(y.h)(b.d,[],b.m),authTypeOptions:Object(r.m)(null)}},data:function(){return{isUrlValid:!0,communication:{eventName:"",inputs:[""]},authType:"None",bearerToken:"",authActive:!0}},computed:{urlValid:function(){return this.isUrlValid}},watch:{url:function(){this.debouncer()},connectionState:function(t){t?this.$refs.versionOptions.tippy().disable():this.$refs.versionOptions.tippy().enable()}},created:function(){this.worker=this.$worker.createRejexWorker(),this.worker.addEventListener("message",this.workerResponseHandler)},destroyed:function(){this.worker.terminate()},methods:{debouncer:f()((function(){this.worker.postMessage({type:"socketio",url:this.url})}),1e3),workerResponseHandler:function(t){var e=t.data;e.url===this.url&&(this.isUrlValid=e.result)},removeCommunicationInput:function(t){var e=t.index;this.$delete(this.communication.inputs,e)},addCommunicationInput:function(){this.communication.inputs.push("")},toggleConnection:function(){return this.connectionState?this.disconnect():this.connect()},connect:function(){var t=this;this.connectingState=!0,this.log=[{payload:this.$t("state.connecting_to",{name:this.url}),source:"info",color:"var(--accent-color)"}];try{this.path||(this.path="/socket.io");var e=x[this.clientVersion];this.authActive&&"Bearer"===this.authType?this.io=new e(this.url,{path:this.path,auth:{token:this.bearerToken}}):this.io=new e(this.url,{path:this.path}),p()(e.Manager)(this.io),this.io.on("connect",(function(){t.connectingState=!1,t.connectionState=!0,t.log=[{payload:t.$t("state.connected_to",{name:t.url}),source:"info",color:"var(--accent-color)",ts:(new Date).toLocaleTimeString()}],t.$toast.success(t.$t("state.connected"))})),this.io.on("*",(function(t){var e=t.data,n=Object(o.a)(e,2),i=n[0],r=n[1];Object(b.i)({payload:"[".concat(i,"] ").concat(r?JSON.stringify(r):""),source:"server",ts:(new Date).toLocaleTimeString()})})),this.io.on("connect_error",(function(e){t.handleError(e)})),this.io.on("reconnect_error",(function(e){t.handleError(e)})),this.io.on("error",(function(){t.handleError()})),this.io.on("disconnect",(function(){t.connectingState=!1,t.connectionState=!1,Object(b.i)({payload:t.$t("state.disconnected_from",{name:t.url}),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),t.$toast.error(t.$t("state.disconnected"))}))}catch(t){this.handleError(t),this.$toast.error(this.$t("error.something_went_wrong"))}Object(v.b)({platform:"socketio"})},disconnect:function(){this.io.close()},handleError:function(t){this.disconnect(),this.connectingState=!1,this.connectionState=!1,Object(b.i)({payload:this.$t("error.something_went_wrong"),source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()}),null!==t&&Object(b.i)({payload:t,source:"info",color:"#ff5555",ts:(new Date).toLocaleTimeString()})},sendMessage:function(){var t,e=this.communication.eventName,n=(this.communication.inputs||[]).map((function(t){try{return JSON.parse(t)}catch(e){return t}})).filter((function(t){return!!t}));this.io&&((t=this.io).emit.apply(t,[e].concat(Object(i.a)(n),[function(t){Object(b.i)({payload:"[".concat(e,"] ").concat(JSON.stringify(t)),source:"server",ts:(new Date).toLocaleTimeString()})}])),Object(b.i)({payload:"[".concat(e,"] ").concat(JSON.stringify(n)),source:"client",ts:(new Date).toLocaleTimeString()}),this.communication.inputs=[""])},onSelectVersion:function(t){this.clientVersion=t,this.$refs.versionOptions.tippy().hide()}}}),w=n(23),_=Object(w.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Splitpanes",{staticClass:"smart-splitter",class:{"!flex-row-reverse":t.SIDEBAR_ON_LEFT&&t.windowInnerWidth.x.value>=768},attrs:{rtl:t.SIDEBAR_ON_LEFT&&t.windowInnerWidth.x.value>=768,horizontal:!(t.windowInnerWidth.x.value>=768)}},[n("Pane",{staticClass:"hide-scrollbar !overflow-auto",attrs:{size:"75","min-size":"65"}},[n("Splitpanes",{staticClass:"smart-splitter",attrs:{horizontal:t.COLUMN_LAYOUT}},[n("Pane",{staticClass:"hide-scrollbar !overflow-auto",attrs:{size:t.COLUMN_LAYOUT?45:50}},[n("div",{staticClass:"sticky top-0 z-10 flex p-4 bg-primary"},[n("div",{staticClass:"inline-flex flex-1 space-x-2"},[n("div",{staticClass:"flex flex-1"},[n("label",{attrs:{for:"client-version"}},[n("tippy",{ref:"versionOptions",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:t._u([{key:"trigger",fn:function(){return[n("span",{staticClass:"select-wrapper"},[n("input",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"flex px-4 py-2 font-semibold border rounded-l cursor-pointer bg-primaryLight border-divider text-secondaryDark w-26 hover:border-dividerDark focus-visible:bg-transparent focus-visible:border-dividerDark",attrs:{id:"client-version",title:"socket.io-client version",readonly:"",disabled:t.connectionState},domProps:{value:"Client "+t.clientVersion}})])]},proxy:!0}])},[t._v(" "),t._l(t.socketIoClients,(function(e,i){return n("SmartItem",{key:"client-"+i,attrs:{label:"Client "+i},nativeOn:{click:function(e){return t.onSelectVersion(i)}}})}))],2)],1),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"flex flex-1 w-full px-4 py-2 border bg-primaryLight border-divider text-secondaryDark hover:border-dividerDark focus-visible:bg-transparent focus-visible:border-dividerDark",class:{error:!t.urlValid},attrs:{id:"socketio-url",type:"url",autocomplete:"off",spellcheck:"false",placeholder:t.$t("socketio.url"),disabled:t.connectionState},domProps:{value:t.url},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.urlValid&&t.toggleConnection()},input:function(e){e.target.composing||(t.url=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],staticClass:"flex flex-1 w-full px-4 py-2 border rounded-r bg-primaryLight border-divider text-secondaryDark hover:border-dividerDark focus-visible:bg-transparent focus-visible:border-dividerDark",attrs:{id:"socketio-path",spellcheck:"false",disabled:t.connectionState},domProps:{value:t.path},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.urlValid&&t.toggleConnection()},input:function(e){e.target.composing||(t.path=e.target.value)}}})]),t._v(" "),n("ButtonPrimary",{staticClass:"w-32",attrs:{id:"connect",disabled:!t.urlValid,name:"connect",label:t.connectionState?t.$t("action.disconnect"):t.$t("action.connect"),loading:t.connectingState},nativeOn:{click:function(e){return t.toggleConnection.apply(null,arguments)}}})],1)]),t._v(" "),n("div",{staticClass:"sticky z-10 flex items-center justify-between flex-1 pl-4 border-b bg-primary border-dividerLight top-upperPrimaryStickyFold"},[n("span",{staticClass:"flex items-center"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[t._v("\n              "+t._s(t.$t("authorization.type"))+"\n            ")]),t._v(" "),n("tippy",{ref:"authTypeOptions",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:""},scopedSlots:t._u([{key:"trigger",fn:function(){return[n("span",{staticClass:"select-wrapper"},[n("ButtonSecondary",{staticClass:"pr-8 ml-2 rounded-none",attrs:{label:t.authType}})],1)]},proxy:!0}])},[t._v(" "),n("SmartItem",{attrs:{label:"None",icon:"None"===t.authType?"radio_button_checked":"radio_button_unchecked",active:"None"===t.authType},nativeOn:{click:function(e){return function(){t.authType="None",t.authTypeOptions.tippy().hide()}.apply(null,arguments)}}}),t._v(" "),n("SmartItem",{attrs:{label:"Bearer Token",icon:"Bearer"===t.authType?"radio_button_checked":"radio_button_unchecked",active:"Bearer"===t.authType},nativeOn:{click:function(e){return function(){t.authType="Bearer",t.authTypeOptions.tippy().hide()}.apply(null,arguments)}}})],1)],1),t._v(" "),n("div",{staticClass:"flex"},[n("SmartCheckbox",{staticClass:"px-2",attrs:{on:t.authActive},on:{change:function(e){t.authActive=!t.authActive}}},[t._v("\n              "+t._s(t.$t("state.enabled"))+"\n            ")]),t._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/authorization",blank:"",title:t.$t("app.wiki"),svg:"help-circle"}}),t._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.$t("action.clear"),svg:"trash-2"},nativeOn:{click:function(e){return t.clearContent.apply(null,arguments)}}})],1)]),t._v(" "),"None"===t.authType?n("div",{staticClass:"flex flex-col items-center justify-center p-4 text-secondaryLight"},[n("img",{staticClass:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",attrs:{src:"/images/states/"+t.$colorMode.value+"/login.svg",loading:"lazy",alt:t.$t("empty.authorization")}}),t._v(" "),n("span",{staticClass:"pb-4 text-center"},[t._v("\n            This SocketIO connection does not use any authentication.\n          ")]),t._v(" "),n("ButtonSecondary",{staticClass:"mb-4",attrs:{outline:"",label:t.$t("app.documentation"),to:"https://docs.hoppscotch.io/features/authorization",blank:"",svg:"external-link",reverse:""}})],1):t._e(),t._v(" "),"Bearer"===t.authType?n("div",{staticClass:"flex border-b border-dividerLight"},[n("div",{staticClass:"w-2/3 border-r border-dividerLight"},[n("div",{staticClass:"flex border-b border-dividerLight"},[n("SmartEnvInput",{attrs:{placeholder:"Token",styles:"bg-transparent flex flex-1 py-1 px-4"},model:{value:t.bearerToken,callback:function(e){t.bearerToken=e},expression:"bearerToken"}})],1)]),t._v(" "),n("div",{staticClass:"sticky h-full p-4 overflow-auto bg-primary top-upperTertiaryStickyFold min-w-46 max-w-1/3 z-9"},[n("div",{staticClass:"p-2"},[n("div",{staticClass:"pb-2 text-secondaryLight"},[t._v("\n                "+t._s(t.$t("helpers.authorization"))+"\n              ")]),t._v(" "),n("SmartAnchor",{staticClass:"link",attrs:{label:t.$t("authorization.learn")+"   →",to:"https://docs.hoppscotch.io/features/authorization",blank:""}})],1)])]):t._e()]),t._v(" "),n("Pane",{staticClass:"hide-scrollbar !overflow-auto",attrs:{size:t.COLUMN_LAYOUT?65:50}},[n("RealtimeLog",{attrs:{title:t.$t("socketio.log"),log:t.log}})],1)],1)],1),t._v(" "),t.SIDEBAR?n("Pane",{staticClass:"hide-scrollbar !overflow-auto",attrs:{size:"25","min-size":"20"}},[n("div",{staticClass:"flex flex-col flex-1 p-4"},[n("label",{staticClass:"font-semibold text-secondaryLight",attrs:{for:"events"}},[t._v("\n        "+t._s(t.$t("socketio.events"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"flex px-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.communication.eventName,expression:"communication.eventName"}],staticClass:"input",attrs:{id:"event_name",name:"event_name",placeholder:t.$t("socketio.event_name"),type:"text",autocomplete:"off",disabled:!t.connectionState},domProps:{value:t.communication.eventName},on:{input:function(e){e.target.composing||t.$set(t.communication,"eventName",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"flex items-center justify-between flex-1 p-4"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[t._v("\n        "+t._s(t.$t("socketio.communication"))+"\n      ")]),t._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.$t("add.new"),svg:"plus"},nativeOn:{click:function(e){return t.addCommunicationInput.apply(null,arguments)}}})],1)]),t._v(" "),n("div",{staticClass:"flex flex-col px-4 pb-4 space-y-2"},t._l(t.communication.inputs,(function(e,i){return n("div",{key:"input-"+i},[n("div",{staticClass:"flex space-x-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.communication.inputs[i],expression:"communication.inputs[index]"}],staticClass:"input",attrs:{name:"message",placeholder:t.$t("count.message",{count:i+1}),type:"text",autocomplete:"off",disabled:!t.connectionState},domProps:{value:t.communication.inputs[i]},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.connectionState&&t.sendMessage()},input:function(e){e.target.composing||t.$set(t.communication.inputs,i,e.target.value)}}}),t._v(" "),i+1!==t.communication.inputs.length?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.$t("action.remove"),svg:"trash",color:"red",outline:""},nativeOn:{click:function(e){return t.removeCommunicationInput({index:i})}}}):t._e(),t._v(" "),i+1===t.communication.inputs.length?n("ButtonPrimary",{attrs:{id:"send",name:"send",disabled:!t.connectionState,label:t.$t("action.send")},nativeOn:{click:function(e){return t.sendMessage.apply(null,arguments)}}}):t._e()],1)])})),0)]):t._e()],1)}),[],!1,null,null,null);e.default=_.exports;installComponents(_,{SmartItem:n(149).default,ButtonPrimary:n(177).default,ButtonSecondary:n(104).default,SmartCheckbox:n(1944).default,SmartEnvInput:n(1091).default,SmartAnchor:n(387).default,RealtimeLog:n(1840).default})}}]);