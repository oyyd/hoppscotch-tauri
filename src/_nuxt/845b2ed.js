(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1001:function(e,t,n){"use strict";n.d(t,"k",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return m})),n.d(t,"l",(function(){return y})),n.d(t,"i",(function(){return j})),n.d(t,"a",(function(){return O})),n.d(t,"j",(function(){return w})),n.d(t,"m",(function(){return x})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return _})),n.d(t,"f",(function(){return R})),n.d(t,"b",(function(){return C})),n.d(t,"d",(function(){return k}));n(11),n(9),n(14),n(8),n(13);var r=n(41),s=n(33),a=(n(12),n(10),n(4),n(55),n(52),n(42)),o=n(46),i=n(82),c=n(49),u=n(29);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={request:Object(i.makeGQLRequest)({name:"Untitled request",url:"https://echo.hoppscotch.io/graphql",headers:[],variables:'{\n  "id": "1"\n}',query:"query Request {\n  method\n  url\n  headers {\n    key\n    value\n  }\n}\n"}),schema:"",response:""},f=Object(c.b)({setSession:function(e,t){return t.session},setName:function(e,t){var n=t.newName;return{request:p(p({},e.request),{},{name:n})}},setURL:function(e,t){var n=t.newURL;return{request:p(p({},e.request),{},{url:n})}},setHeaders:function(e,t){var n=t.headers;return{request:p(p({},e.request),{},{headers:n})}},addHeader:function(e,t){var n=t.header;return{request:p(p({},e.request),{},{headers:[].concat(Object(r.a)(e.request.headers),[n])})}},removeHeader:function(e,t){var n=t.headerIndex;return{request:p(p({},e.request),{},{headers:e.request.headers.filter((function(e,t){return t!==n}))})}},updateHeader:function(e,t){var n=t.headerIndex,r=t.updatedHeader;return{request:p(p({},e.request),{},{headers:e.request.headers.map((function(e,t){return t===n?r:e}))})}},setQuery:function(e,t){var n=t.newQuery;return{request:p(p({},e.request),{},{query:n})}},setVariables:function(e,t){var n=t.newVariables;return{request:p(p({},e.request),{},{variables:n})}},setResponse:function(e,t){return{response:t.newResponse}}}),v=new c.a(d,f);function b(e){v.dispatch({dispatcher:"setURL",payload:{newURL:e}})}function h(e){v.dispatch({dispatcher:"setHeaders",payload:{headers:e}})}function m(e){v.dispatch({dispatcher:"setQuery",payload:{newQuery:e}})}function y(e){v.dispatch({dispatcher:"setVariables",payload:{newVariables:e}})}function j(e){v.dispatch({dispatcher:"setResponse",payload:{newResponse:e}})}function O(){return v.value}function w(e){v.dispatch({dispatcher:"setSession",payload:{session:e}})}function x(){return Object(u.h)(q,v.value.request.name,(function(e){v.dispatch({dispatcher:"setName",payload:{newName:e}})}))}var q=v.subject$.pipe(Object(a.a)("request","name"),Object(o.a)()),g=v.subject$.pipe(Object(a.a)("request","url"),Object(o.a)()),_=v.subject$.pipe(Object(a.a)("request","query"),Object(o.a)()),R=v.subject$.pipe(Object(a.a)("request","variables"),Object(o.a)()),C=v.subject$.pipe(Object(a.a)("request","headers"),Object(o.a)()),k=v.subject$.pipe(Object(a.a)("response"),Object(o.a)())},2260:function(e,t,n){"use strict";n.r(t);n(134),n(4),n(75),n(66),n(997),n(314),n(59),n(133);var r=n(2),s=n(969),a=n(380),o=n(29),i=n(1001),c={setup:function(e,t){var n=Object(o.d)(),c=Object(o.j)(),u=Object(o.g)(i.d,""),l=Object(r.m)(null),p=Object(r.m)(!0);Object(s.a)(l,u,Object(r.k)({extendedEditorConfig:{mode:"application/ld+json",readOnly:!0,lineWrapping:p},linter:null,completer:null,environmentHighlights:!1}));var d=Object(r.m)("download"),f=Object(r.m)("copy");return{t:n,responseString:u,schemaEditor:l,linewrapEnabled:p,downloadResponseIcon:d,copyResponseIcon:f,copyResponse:function(){Object(a.a)(u.value),f.value="check",c.success("".concat(n("state.copied_to_clipboard"))),setTimeout((function(){return f.value="copy"}),1e3)},downloadResponse:function(){var e=u.value,t=new Blob([e],{type:"application/json"}),r=document.createElement("a"),s=URL.createObjectURL(t);r.href=s,r.download="".concat(s.split("/").pop().split("#")[0].split("?")[0]),document.body.appendChild(r),r.click(),d.value="check",c.success("".concat(n("state.download_started"))),setTimeout((function(){document.body.removeChild(r),URL.revokeObjectURL(s),d.value="download"}),1e3)}}}},u=c,l=n(23),p=Object(l.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",["loading"===e.responseString?n("div",{staticClass:"flex flex-col items-center justify-center p-4"},[n("SmartSpinner",{staticClass:"my-4"}),e._v(" "),n("span",{staticClass:"text-secondaryLight"},[e._v(e._s(e.t("state.loading")))])],1):e.responseString?n("div",[n("div",{staticClass:"sticky top-0 z-10 flex items-center justify-between flex-1 pl-4 border-b bg-primary border-dividerLight"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n        "+e._s(e.t("response.title"))+"\n      ")]),e._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.linewrapEnabled},attrs:{title:e.t("state.linewrap"),svg:"wrap-text"},nativeOn:{click:function(t){t.preventDefault(),e.linewrapEnabled=!e.linewrapEnabled}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"downloadResponse",attrs:{title:e.t("action.download_file"),svg:e.downloadResponseIcon},nativeOn:{click:function(t){return e.downloadResponse.apply(null,arguments)}}}),e._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"copyResponseButton",attrs:{title:e.t("action.copy"),svg:e.copyResponseIcon},nativeOn:{click:function(t){return e.copyResponse.apply(null,arguments)}}})],1)]),e._v(" "),n("div",{ref:"schemaEditor"})]):n("div",{staticClass:"flex flex-col items-center justify-center flex-1 p-4 text-secondaryLight"},[n("div",{staticClass:"flex pb-4 my-4 space-x-2"},[n("div",{staticClass:"flex flex-col items-end space-y-4 text-right"},[n("span",{staticClass:"flex items-center flex-1"},[e._v("\n          "+e._s(e.t("shortcut.general.command_menu"))+"\n        ")]),e._v(" "),n("span",{staticClass:"flex items-center flex-1"},[e._v("\n          "+e._s(e.t("shortcut.general.help_menu"))+"\n        ")])]),e._v(" "),e._m(0)]),e._v(" "),n("ButtonSecondary",{attrs:{label:""+e.t("app.documentation"),to:"https://docs.hoppscotch.io/features/response",svg:"external-link",blank:"",outline:"",reverse:""}})],1)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col space-y-4"},[n("div",{staticClass:"flex"},[n("span",{staticClass:"shortcut-key"},[e._v("/")])]),e._v(" "),n("div",{staticClass:"flex"},[n("span",{staticClass:"shortcut-key"},[e._v("?")])])])}],!1,null,null,null);t.default=p.exports;installComponents(p,{SmartSpinner:n(186).default,ButtonSecondary:n(104).default})},996:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));n(59);var r={"application/json":"json","application/ld+json":"json","application/hal+json":"json","application/vnd.api+json":"json","application/xml":"xml","application/x-www-form-urlencoded":"multipart","multipart/form-data":"multipart","text/html":"html","text/plain":"plain"};function s(e){return/\bjson\b/i.test(e)}}}]);