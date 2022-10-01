(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1077:function(t,e,n){"use strict";n.r(e);n(10),n(4),n(52),n(8);var a=n(2),i=Object(a.c)({props:{styles:{type:String,default:""},vertical:{type:Boolean,default:!1}},data:function(){return{tabs:[]}},updated:function(){var t=this.$children.filter((function(t){return"SmartTab"===t.$options.name}));t.length!==this.tabs.length&&(this.tabs=t)},mounted:function(){this.tabs=this.$children.filter((function(t){return"SmartTab"===t.$options.name}))},methods:{selectTab:function(t){var e=t.id;this.tabs.forEach((function(t){t.active=t.id===e})),this.$emit("tab-changed",e)}}}),l=(n(1085),n(23)),r=Object(l.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-1 h-full flex-nowrap",class:{"flex-col h-auto":!t.vertical}},[n("div",{staticClass:"relative tabs hide-scrollbar",class:[{"border-r border-dividerLight":t.vertical},t.styles]},[n("div",{staticClass:"flex flex-1"},[n("div",{staticClass:"flex justify-between flex-1",class:{"flex-col":t.vertical}},[n("div",{staticClass:"flex",class:{"flex-col space-y-2 p-2":t.vertical}},t._l(t.tabs,(function(e,a){return n("button",{key:"tab-"+a,staticClass:"tab",class:[{active:e.active},{vertical:t.vertical}],attrs:{"aria-label":e.label},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.selectTab(e)},click:function(n){return t.selectTab(e)}}},[e.icon?n("SmartIcon",{staticClass:"svg-icons",attrs:{name:e.icon}}):t._e(),t._v(" "),t.vertical&&e.label?n("tippy",{attrs:{placement:"left",theme:"tooltip",content:e.label}}):e.label?n("span",[t._v(t._s(e.label))]):t._e(),t._v(" "),e.info&&"null"!==e.info?n("span",{staticClass:"tab-info"},[t._v("\n              "+t._s(e.info)+"\n            ")]):t._e(),t._v(" "),e.indicator?n("span",{staticClass:"w-1 h-1 ml-2 rounded-full bg-accentLight"}):t._e()],1)})),0),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[t._t("actions")],2)])])]),t._v(" "),n("div",{staticClass:"w-full h-full contents",class:{"!flex flex-col flex-1 overflow-y-auto hide-scrollbar":t.vertical}},[t._t("default")],2)])}),[],!1,null,"330295f6",null);e.default=r.exports;installComponents(r,{SmartIcon:n(120).default})},1085:function(t,e,n){"use strict";n(968)},1086:function(t,e,n){var a=n(131)(!1);a.push([t.i,'.tabs[data-v-330295f6] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  white-space: nowrap;\n  overflow: auto;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n}\n.tabs .tab[data-v-330295f6] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n  -ms-flex-negative: 0;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  color: var(--secondary-color);\n  font-weight: 600;\n  cursor: pointer;\n}\n.tabs .tab[data-v-330295f6]:hover {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab[data-v-330295f6]:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.tabs .tab[data-v-330295f6]:focus-visible {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab .tab-info[data-v-330295f6] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n  width: 1.25rem;\n  height: 1rem;\n  margin-left: 0.5rem;\n  font-size: 8px;\n  line-height: 1;\n  border-color: var(--divider-color);\n  border-width: 1px;\n  border-radius: 0.25rem;\n  color: var(--secondary-light-color);\n}\n.tabs .tab[data-v-330295f6]::after {\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0px;\n  background-color: transparent;\n  z-index: 2;\n  height: 0.125rem;\n  content: "";\n}\n.tabs .tab[data-v-330295f6]:focus::after {\n  background-color: var(--divider-color);\n}\n.tabs .tab.active[data-v-330295f6] {\n  color: var(--secondary-dark-color);\n}\n.tabs .tab.active .tab-info[data-v-330295f6] {\n  color: var(--secondary-color);\n  border-color: var(--divider-dark-color);\n}\n.tabs .tab.active[data-v-330295f6]::after {\n  background-color: var(--accent-color);\n}\n.tabs .tab.vertical[data-v-330295f6] {\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n}\n.tabs .tab.vertical[data-v-330295f6]:focus::after {\n  display: none;\n}\n.tabs .tab.vertical.active[data-v-330295f6] {\n  color: var(--accent-color);\n}\n.tabs .tab.vertical.active .tab-info[data-v-330295f6] {\n  color: var(--secondary-color);\n  border-color: var(--divider-dark-color);\n}\n.tabs .tab.vertical.active[data-v-330295f6]::after {\n  display: none;\n}',""]),t.exports=a},968:function(t,e,n){var a=n(1086);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(132).default)("3f6bd5c5",a,!0,{sourceMap:!1})}}]);