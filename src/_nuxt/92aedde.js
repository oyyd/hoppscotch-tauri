(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1971:function(t,e,a){"use strict";a.r(e);var l=a(2),o=Object(l.c)({props:{to:{type:String,default:""},exact:{type:Boolean,default:!0},blank:{type:Boolean,default:!1},label:{type:String,default:""},icon:{type:String,default:""},svg:{type:String,default:""},color:{type:String,default:""},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}}),s=a(23),n=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SmartLink",{staticClass:"inline-flex items-center py-2 font-semibold transition transform hover:translate-x-2 focus:outline-none focus-visible:translate-x-2",class:[t.label?"px-4":"px-2",t.active?t.color?"text-"+t.color+"-500 hover:text-"+t.color+"-600 focus-visible:text-"+t.color+"-600":"text-accent hover:text-accentDark focus-visible:text-accentDark":"hover:text-secondaryDark focus-visible:text-secondaryDark",t.color?"text-"+t.color+"-500 hover:text-"+t.color+"-600 focus-visible:text-"+t.color+"-600":"",{"opacity-75 cursor-not-allowed":t.disabled}],attrs:{to:""+(/^\/(?!\/).*$/.test(t.to)?t.localePath(t.to):t.to),exact:t.exact,blank:t.blank,disabled:t.disabled,type:"button"}},[t.icon?a("i",{staticClass:"material-icons",class:t.label?"mr-4 opacity-75":""},[t._v("\n    "+t._s(t.icon)+"\n  ")]):t._e(),t._v(" "),t.svg?a("SmartIcon",{staticClass:"svg-icons",class:t.label?"mr-4 opacity-75":"",attrs:{name:t.svg}}):t._e(),t._v(" "),a("span",{staticClass:"truncate"},[t._v("\n    "+t._s(t.label)+"\n  ")])],1)}),[],!1,null,null,null);e.default=n.exports;installComponents(n,{SmartIcon:a(120).default,SmartLink:a(254).default})}}]);