(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1009:function(t,e,n){"use strict";n.d(e,"c",(function(){return N})),n.d(e,"b",(function(){return C})),n.d(e,"e",(function(){return q})),n.d(e,"g",(function(){return T})),n.d(e,"d",(function(){return F})),n.d(e,"f",(function(){return P})),n.d(e,"a",(function(){return J}));var r=n(28),i=(n(45),n(157)),a=n(180),o=(n(128),n(211),n(0)),c=n(36),u=n(6),l=n(74);function s(t){return Object(o.h)(l.s,t.of)}function f(t){return Object(o.g)(t.of(l.q))}function p(t){return function(e){return t.map(e,l.s)}}function d(t){return Object(o.h)(l.g,t.of)}function v(t){var e=d(t);return function(t){return Object(o.h)(t,e)}}function h(t){var e=_(t),n=v(t);return function(t){return e(n(t))}}function m(t){return function(e){return Object(o.h)(e,t.of)}}function b(t){var e=_(t),n=m(t);return function(t){return e(n(t))}}function y(t){return function(e){return function(n){return t.of(l.h(e)(n))}}}function j(t){return Object(o.h)(l.f,t.of)}function g(t){return function(e,n){return function(r){return t.map(r,l.p(e,n))}}}function w(t){return function(e,n){return function(r){return t.chain(r,l.p(e,n))}}}function O(t){return function(e){return function(n){return t.chain(n,l.p(e,t.of))}}}function x(t){return Object(c.d)(t,l.d)}function k(t){return Object(r.a)(t,l.a)}function _(t){var e=f(t);return function(n){return function(r){return t.chain(r,l.p((function(){return e()}),n))}}}function E(t){var e=s(t);return function(n){return function(r){return t.chain(r,l.p(n,e))}}}var S=n(31),B=(n(156),s(S.g)),N=y(S.g),C=S.k,q=(S.g,S.e,l.f,g(S.e)),T=(S.d,S.f,S.g,function(t){return function(){return t().then((function(t){return l.s(t)}),(function(){return l.q}))}}),F=(S.g,S.f,S.g,S.f,x(S.e)),P=(S.b,B),J=_(S.f),I=(o.j,S.f,S.g,S.e,l.b,S.e,l.b,l.d,S.e,l.c,S.e,l.c,S.e,l.c,S.e,l.c,u.b,P(u.a)),R=function(t){var e=function(t){return Object(o.h)(S.m(t),S.j(l.t(o.a)))}(t);return function(t){return u.g(t)?e(t):I}},A=function(t){var e=function(t){return function(e){return function(){return u.p(e).reduce((function(e,n,r){return e.then((function(i){return u.h(i)?e:t(r+1,n)().then((function(t){return u.h(t)?t:(i.value.push(t.value),i)}))}))}),t(0,u.e(e))().then(l.o(u.n)))}}}(t);return function(t){return u.g(t)?e(t):I}};o.j,o.j},1765:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));n(58),n(111),n(203);function r(t,e){for(var n=t.split("\n"),r=0,i=0;r<n.length;){if(!(e>n[r].length+i))return{line:r+1,ch:e-i+1};i+=n[r].length+1,r++}throw new Error("Invalid input")}function i(t,e){var n=t.split("\n");if(n.length<e.line)throw new Error("Invalid position");return n.slice(0,e.line).reduce(((t,e)=>t+e.length+1),0)+e.ch}},1766:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r,i,a,o,c,u,l;n(58),n(179);function s(t){r=t,i=t.length,a=o=c=-1,j(),g();try{var e=f();return m("EOF"),e}catch(t){var n=d();return m("EOF"),n}}function f(){var t=a,e=[];if(m("{"),!y("}")){do{e.push(p())}while(y(","));m("}")}return{kind:"Object",start:t,end:c,members:e}}function p(){var t=a,e="String"===l?h():null;m("String"),m(":");var n=v();return{kind:"Member",start:t,end:c,key:e,value:n}}function d(){var t=a,e=[];if(m("["),!y("]")){do{e.push(v())}while(y(","));m("]")}return{kind:"Array",start:t,end:c,values:e}}function v(){switch(l){case"[":return d();case"{":return f();case"String":case"Number":case"Boolean":case"Null":var t=h();return g(),t}return m("Value")}function h(){return{kind:l,start:a,end:o,value:JSON.parse(r.slice(a,o))}}function m(t){if(l!==t){var e;if("EOF"===l)e="[end of file]";else if(o-a>1)e="`".concat(r.slice(a,o),"`");else{var n=r.slice(a).match(/^.+?\b/);e="`".concat(n?n[0]:r[a],"`")}throw b("Expected ".concat(t," but found ").concat(e,"."))}g()}function b(t){return{message:t,start:a,end:o}}function y(t){if(l===t)return g(),!0}function j(){o<i&&(o++,u=o===i?0:r.charCodeAt(o))}function g(){for(c=o;9===u||10===u||13===u||32===u;)j();if(0!==u){switch(a=o,u){case 34:return l="String",function(){j();for(;34!==u&&u>31;)if(92===u)switch(j(),u){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:j();break;case 117:j(),w(),w(),w(),w();break;default:throw b("Bad character escape sequence.")}else{if(o===i)throw b("Unterminated string.");j()}if(34===u)return void j();throw b("Unterminated string.")}();case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return l="Number",function(){45===u&&j();48===u?j():O();46===u&&(j(),O());69!==u&&101!==u||(j(),43!==u&&45!==u||j(),O())}();case 102:if("false"!==r.slice(a,a+5))break;return o+=4,j(),void(l="Boolean");case 110:if("null"!==r.slice(a,a+4))break;return o+=3,j(),void(l="Null");case 116:if("true"!==r.slice(a,a+4))break;return o+=3,j(),void(l="Boolean")}l=r[a],j()}else l="EOF"}function w(){if(u>=48&&u<=57||u>=65&&u<=70||u>=97&&u<=102)return j();throw b("Expected hexadecimal digit.")}function O(){if(u<48||u>57)throw b("Expected decimal digit.");do{j()}while(u>=48&&u<=57)}},1818:function(t,e,n){"use strict";n(63);var r=n(1765),i=n(1766);e.a=t=>{try{return Object(i.a)(t),Promise.resolve([])}catch(e){return Promise.resolve([{from:Object(r.a)(t,e.start),to:Object(r.a)(t,e.end),message:e.message,severity:"error"}])}}},2079:function(t,e,n){"use strict";n.r(e);var r=n(12),i=(n(99),n(2)),a=n(1009),o=n(0),c=n(899),u={"text/plain":"text/x-yaml","text/html":"htmlmixed","application/xml":"application/xml","application/hal+json":"application/ld+json","application/vnd.api+json":"application/ld+json","application/json":"application/ld+json"};var l=n(20),s=n(926),f=n(90),p=n(1818),d=(n(63),t=>a.g((()=>new Promise(((e,n)=>{var r=new FileReader;r.onload=()=>{e(r.result)},r.onerror=()=>{n(new Error("File err"))},r.readAsText(t)}))))),v={props:{contentType:{key:"contentType",required:!0,type:null}}};v.setup=(t,e)=>{var n=Object(l.d)(),v=t,h=Object(l.j)(),m=Object(l.a)(Object(f.C)(),"body"),b=Object(i.m)("wand"),y=Object(i.a)((()=>{return t=v.contentType,u[t]||"text/x-yaml";var t})),j=Object(i.a)((()=>Object(s.a)(v.contentType)?p.a:null));Object(i.y)((()=>console.log(y.value)));var g=Object(i.m)(!0),w=Object(i.m)(null);Object(c.a)(w,m,Object(i.k)({extendedEditorConfig:{lineWrapping:g,mode:y,placeholder:n("request.raw_body").toString()},linter:j,completer:null,environmentHighlights:!0}));var O=function(){var t=Object(r.a)((function*(t){var e;yield Object(o.k)(null===(e=t.target.files)||void 0===e?void 0:e[0],a.f,a.a(a.c((t=>void 0!==t))),a.a(d),a.e((()=>h.error("".concat(n("action.choose_file")))),(t=>{m.value=t,h.success("".concat(n("state.file_imported")))})))()}));return function(e){return t.apply(this,arguments)}}();return{t:n,prettifyIcon:b,linewrapEnabled:g,rawBodyParameters:w,clearContent:()=>{m.value=""},uploadPayload:O,prettifyRequestBody:()=>{try{var t=JSON.parse(m.value);m.value=JSON.stringify(t,null,2),b.value="check"}catch(t){console.error(t),b.value="info",h.error("".concat(n("error.json_prettify_invalid_body")))}setTimeout((()=>b.value="wand"),1e3)}}};var h=v,m=n(16),b=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sticky z-10 flex items-center justify-between flex-1 pl-4 border-b bg-primary border-dividerLight top-upperTertiaryStickyFold"},[n("label",{staticClass:"font-semibold text-secondaryLight"},[t._v("\n      "+t._s(t.t("request.raw_body"))+"\n    ")]),t._v(" "),n("div",{staticClass:"flex"},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{to:"https://docs.hoppscotch.io/features/body",blank:"",title:t.t("app.wiki"),svg:"help-circle"}}),t._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],class:{"!text-accent":t.linewrapEnabled},attrs:{title:t.t("state.linewrap"),svg:"wrap-text"},nativeOn:{click:function(e){e.preventDefault(),t.linewrapEnabled=!t.linewrapEnabled}}}),t._v(" "),n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.t("action.clear"),svg:"trash-2"},nativeOn:{click:function(e){return t.clearContent.apply(null,arguments)}}}),t._v(" "),t.contentType&&t.contentType.endsWith("json")?n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],ref:"prettifyRequest",attrs:{title:t.t("action.prettify"),svg:t.prettifyIcon},nativeOn:{click:function(e){return t.prettifyRequestBody.apply(null,arguments)}}}):t._e(),t._v(" "),n("label",{attrs:{for:"payload"}},[n("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:t.t("import.title"),svg:"file-plus"},nativeOn:{click:function(e){return t.$refs.payload.click()}}})],1),t._v(" "),n("input",{ref:"payload",staticClass:"input",attrs:{name:"payload",type:"file"},on:{change:t.uploadPayload}})],1)]),t._v(" "),n("div",{ref:"rawBodyParameters"})])}),[],!1,null,null,null);e.default=b.exports;installComponents(b,{ButtonSecondary:n(83).default})},926:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}));n(58);var r={"application/json":"json","application/ld+json":"json","application/hal+json":"json","application/vnd.api+json":"json","application/xml":"xml","application/x-www-form-urlencoded":"multipart","multipart/form-data":"multipart","text/html":"html","text/plain":"plain"};function i(t){return/\bjson\b/i.test(t)}}}]);