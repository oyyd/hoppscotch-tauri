(window.webpackJsonp=window.webpackJsonp||[]).push([[81,151],{1709:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(58),n(134);var o=n(2);function a(e){return{responseBodyText:Object(o.a)((()=>"loading"===e.type||"network_fail"===e.type||"script_fail"===e.type||"fail"===e.type?"":"string"==typeof e.body?e.body:new TextDecoder("utf-8").decode(e.body).replace(/\0+$/,"")))}}},1710:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(34),n(37),n(927),n(259),n(58),n(111);var o=n(2),a=n(20);function c(e,t){var n=Object(o.m)("download"),c=Object(a.j)(),i=Object(a.d)();return{downloadIcon:n,downloadResponse:()=>{var o=t.value,a=new Blob([o],{type:e}),l=document.createElement("a"),s=URL.createObjectURL(a);l.href=s,l.download="".concat(s.split("/").pop().split("#")[0].split("?")[0]),document.body.appendChild(l),l.click(),n.value="check",c.success("".concat(i("state.download_started"))),setTimeout((()=>{document.body.removeChild(l),URL.revokeObjectURL(s),n.value="download"}),1e3)}}}},1711:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(2),a=n(325),c=n(20);function i(e){var t=Object(c.j)(),n=Object(c.d)(),i=Object(o.m)("copy");return{copyIcon:i,copyResponse:()=>{Object(a.a)(e.value),i.value="check",t.success("".concat(n("state.copied_to_clipboard"))),setTimeout((()=>i.value="copy"),1e3)}}}},2222:function(e,t,n){"use strict";n.r(t);n(58),n(111);var o=n(2),a=n(899),c=n(20),i=n(1709),l=n(1710),s=n(1711),p={props:{response:{key:"response",required:!0,type:null}},setup:(e,t)=>{var n=Object(c.d)(),p=e,{responseBodyText:r}=Object(i.a)(p.response),d=Object(o.a)((()=>(p.response.headers.find((e=>"content-type"===e.key.toLowerCase())).value||"").split(";")[0].toLowerCase())),{downloadIcon:u,downloadResponse:y}=Object(l.a)(d.value,r),{copyIcon:v,copyResponse:b}=Object(s.a)(r),m=Object(o.m)(null),f=Object(o.m)(!0);return Object(a.a)(m,r,Object(o.k)({extendedEditorConfig:{mode:"application/xml",readOnly:!0,lineWrapping:f},linter:null,completer:null,environmentHighlights:!0})),{t:n,downloadIcon:u,downloadResponse:y,copyIcon:v,copyResponse:b,xmlResponse:m,linewrapEnabled:f}}},r=p,d=n(16),u=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between pl-4 border-b bg-primary border-dividerLight top-lowerSecondaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[e._v("\n      "+e._s(e.t("response.body"))+"\n    ")]),e._v(" "),n("div",{staticClass:"flex"},[e.response.body?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":e.linewrapEnabled},attrs:{title:e.t("state.linewrap"),svg:"wrap-text"},nativeOn:{click:function(t){t.preventDefault(),e.linewrapEnabled=!e.linewrapEnabled}}}):e._e(),e._v(" "),e.response.body?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"downloadResponse",attrs:{title:e.t("action.download_file"),svg:e.downloadIcon},nativeOn:{click:function(t){return e.downloadResponse.apply(null,arguments)}}}):e._e(),e._v(" "),e.response.body?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"copyResponse",attrs:{title:e.t("action.copy"),svg:e.copyIcon},nativeOn:{click:function(t){return e.copyResponse.apply(null,arguments)}}}):e._e()],1)]),e._v(" "),n("div",{ref:"xmlResponse"})])}),[],!1,null,null,null);t.default=u.exports;installComponents(u,{ButtonSecondary:n(83).default})},926:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));n(58);var o={"application/json":"json","application/ld+json":"json","application/hal+json":"json","application/vnd.api+json":"json","application/xml":"xml","application/x-www-form-urlencoded":"multipart","multipart/form-data":"multipart","text/html":"html","text/plain":"plain"};function a(e){return/\bjson\b/i.test(e)}}}]);