(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1030:function(e,t,r){"use strict";r.r(t);var n=r(2),s=r(66),i=r(97),a=r(931),c=Object(n.c)({props:{picked:{type:Object,default:null},savingMode:{type:Boolean,default:!1},request:{type:Object,default:()=>{}},folderPath:{type:String,default:null},requestIndex:{type:Number,default:null},doc:Boolean},setup:()=>({tippyActions:Object(n.m)(null),options:Object(n.m)(null),edit:Object(n.m)(null),duplicate:Object(n.m)(null),deleteAction:Object(n.m)(null)}),data:()=>({dragging:!1,confirmRemove:!1}),computed:{isSelected(){return this.picked&&"gql-my-request"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.picked.requestIndex===this.requestIndex}},methods:{pick(){this.$emit("select",{picked:{pickedType:"gql-my-request",folderPath:this.folderPath,requestIndex:this.requestIndex}})},selectRequest(){this.savingMode?this.pick():Object(a.j)({request:Object(s.makeGQLRequest)({name:this.$props.request.name,url:this.$props.request.url,query:this.$props.request.query,headers:this.$props.request.headers,variables:this.$props.request.variables}),schema:"",response:""})},dragStart(e){var{dataTransfer:t}=e;this.dragging=!this.dragging,t.setData("folderPath",this.folderPath),t.setData("requestIndex",this.requestIndex)},removeRequest(){this.picked&&"gql-my-request"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.picked.requestIndex===this.requestIndex&&this.$emit("select",{picked:null}),Object(i.t)(this.folderPath,this.requestIndex),this.$toast.success("".concat(this.$t("state.deleted")))}}}),u=r(16),o=Object(u.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[r("div",{staticClass:"flex items-stretch group",attrs:{draggable:"true"},on:{dragstart:e.dragStart,dragover:function(e){e.stopPropagation()},dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[r("span",{staticClass:"cursor-pointer flex px-2 w-16 items-center justify-center truncate",on:{click:function(t){e.doc||e.selectRequest()}}},[r("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:e.isSelected?"check-circle":"file"}})],1),e._v(" "),r("span",{staticClass:"cursor-pointer flex flex-1 min-w-0 py-2 pr-2 transition group-hover:text-secondaryDark",on:{click:function(t){e.doc||e.selectRequest()}}},[r("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.request.name)+"\n      ")])]),e._v(" "),r("div",{staticClass:"flex"},[e.savingMode?e._e():r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"rotate-ccw",title:e.$t("action.restore")},nativeOn:{click:function(t){e.doc||e.selectRequest()}}}),e._v(" "),r("span",[r("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[r("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[e._v(" "),r("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"d",void 0,t.key,void 0)?null:e.duplicate.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[r("SmartItem",{ref:"edit",attrs:{svg:"edit",label:""+e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-request",{request:e.request,requestIndex:e.requestIndex,folderPath:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),r("SmartItem",{ref:"duplicate",attrs:{svg:"copy",label:""+e.$t("action.duplicate"),shortcut:["D"]},nativeOn:{click:function(t){return function(){e.$emit("duplicate-request",{request:e.request,requestIndex:e.requestIndex,folderPath:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),r("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:""+e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)])],1)],1)]),e._v(" "),r("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:""+e.$t("confirm.remove_request")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeRequest}})],1)}),[],!1,null,null,null);t.default=o.exports;installComponents(o,{SmartIcon:r(98).default,ButtonSecondary:r(83).default,SmartItem:r(126).default,SmartConfirmModal:r(324).default})},931:function(e,t,r){"use strict";r.d(t,"k",(function(){return h})),r.d(t,"g",(function(){return m})),r.d(t,"h",(function(){return y})),r.d(t,"l",(function(){return v})),r.d(t,"i",(function(){return q})),r.d(t,"a",(function(){return b})),r.d(t,"j",(function(){return g})),r.d(t,"m",(function(){return k})),r.d(t,"e",(function(){return j})),r.d(t,"c",(function(){return x})),r.d(t,"f",(function(){return w})),r.d(t,"b",(function(){return $})),r.d(t,"d",(function(){return P}));var n=r(30),s=(r(34),r(37),r(33)),i=r(35),a=r(66),c=r(41),u=r(20);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={request:Object(a.makeGQLRequest)({name:"Untitled request",url:"https://echo.hoppscotch.io/graphql",headers:[],variables:'{\n  "id": "1"\n}',query:"query Request {\n  method\n  url\n  headers {\n    key\n    value\n  }\n}\n"}),schema:"",response:""},p=Object(c.b)({setSession(e,t){var{session:r}=t;return r},setName(e,t){var{newName:r}=t;return{request:d(d({},e.request),{},{name:r})}},setURL(e,t){var{newURL:r}=t;return{request:d(d({},e.request),{},{url:r})}},setHeaders(e,t){var{headers:r}=t;return{request:d(d({},e.request),{},{headers:r})}},addHeader(e,t){var{header:r}=t;return{request:d(d({},e.request),{},{headers:[...e.request.headers,r]})}},removeHeader(e,t){var{headerIndex:r}=t;return{request:d(d({},e.request),{},{headers:e.request.headers.filter(((e,t)=>t!==r))})}},updateHeader(e,t){var{headerIndex:r,updatedHeader:n}=t;return{request:d(d({},e.request),{},{headers:e.request.headers.map(((e,t)=>t===r?n:e))})}},setQuery(e,t){var{newQuery:r}=t;return{request:d(d({},e.request),{},{query:r})}},setVariables(e,t){var{newVariables:r}=t;return{request:d(d({},e.request),{},{variables:r})}},setResponse(e,t){var{newResponse:r}=t;return{response:r}}}),f=new c.a(l,p);function h(e){f.dispatch({dispatcher:"setURL",payload:{newURL:e}})}function m(e){f.dispatch({dispatcher:"setHeaders",payload:{headers:e}})}function y(e){f.dispatch({dispatcher:"setQuery",payload:{newQuery:e}})}function v(e){f.dispatch({dispatcher:"setVariables",payload:{newVariables:e}})}function q(e){f.dispatch({dispatcher:"setResponse",payload:{newResponse:e}})}function b(){return f.value}function g(e){f.dispatch({dispatcher:"setSession",payload:{session:e}})}function k(){return Object(u.h)(O,f.value.request.name,(e=>{f.dispatch({dispatcher:"setName",payload:{newName:e}})}))}var O=f.subject$.pipe(Object(s.a)("request","name"),Object(i.a)()),j=f.subject$.pipe(Object(s.a)("request","url"),Object(i.a)()),x=f.subject$.pipe(Object(s.a)("request","query"),Object(i.a)()),w=f.subject$.pipe(Object(s.a)("request","variables"),Object(i.a)()),$=f.subject$.pipe(Object(s.a)("request","headers"),Object(i.a)()),P=f.subject$.pipe(Object(s.a)("response"),Object(i.a)())}}]);