(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1021:function(e,t,i){"use strict";i.r(t);var n=i(2),o=i(66),l=i(20),s=i(90),r=Object(n.c)({props:{request:{type:Object,default:()=>{}},collectionIndex:{type:Number,default:null},folderIndex:{type:Number,default:null},folderName:{type:String,default:null},requestIndex:[Number,String],doc:Boolean,saveRequest:Boolean,collectionsType:{type:Object,default:()=>{}},folderPath:{type:String,default:null},picked:{type:Object,default:()=>{}}},setup:()=>({active:Object(l.g)(s.p,null),tippyActions:Object(n.m)(null),options:Object(n.m)(null),edit:Object(n.m)(null),duplicate:Object(n.m)(null),deleteAction:Object(n.m)(null)}),data:()=>({dragging:!1,requestMethodLabels:{get:"text-green-500",post:"text-yellow-500",put:"text-blue-500",delete:"text-red-500",default:"text-gray-500"},confirmRemove:!1}),computed:{isSelected(){return this.picked&&"my-request"===this.picked.pickedType&&this.picked.folderPath===this.folderPath&&this.picked.requestIndex===this.requestIndex}},methods:{selectRequest(){this.active&&"user-collection"===this.active.originLocation&&this.active.folderPath===this.folderPath&&this.active.requestIndex===this.requestIndex?Object(s.x)(null):this.$props.saveRequest?this.$emit("select",{picked:{pickedType:"my-request",collectionIndex:this.collectionIndex,folderPath:this.folderPath,folderName:this.folderName,requestIndex:this.requestIndex}}):Object(s.w)(Object(o.safelyExtractRESTRequest)(Object(o.translateToNewRequest)(this.request),Object(s.b)()),{originLocation:"user-collection",folderPath:this.folderPath,requestIndex:this.requestIndex})},dragStart(e){var{dataTransfer:t}=e;this.dragging=!this.dragging,t.setData("folderPath",this.folderPath),t.setData("requestIndex",this.requestIndex)},removeRequest(){this.$emit("remove-request",{collectionIndex:this.$props.collectionIndex,folderName:this.$props.folderName,folderPath:this.folderPath,requestIndex:this.$props.requestIndex})},getRequestLabelColor(e){return this.requestMethodLabels[e.toLowerCase()]||this.requestMethodLabels.default}}}),a=i(16),c=Object(a.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex flex-col",class:[{"bg-primaryLight":e.dragging}]},[i("div",{staticClass:"flex items-stretch group",attrs:{draggable:"true"},on:{dragstart:e.dragStart,dragover:function(e){e.stopPropagation()},dragleave:function(t){e.dragging=!1},dragend:function(t){e.dragging=!1},contextmenu:function(t){t.preventDefault(),e.options.tippy().show()}}},[i("span",{staticClass:"cursor-pointer flex px-2 w-16 items-center justify-center truncate",class:e.getRequestLabelColor(e.request.method),on:{click:function(t){e.doc||e.selectRequest()}}},[e.isSelected?i("SmartIcon",{staticClass:"svg-icons",class:{"text-accent":e.isSelected},attrs:{name:"check-circle"}}):i("span",{staticClass:"truncate"},[e._v("\n        "+e._s(e.request.method)+"\n      ")])],1),e._v(" "),i("span",{staticClass:"cursor-pointer flex flex-1 min-w-0 py-2 pr-2 transition items-center group-hover:text-secondaryDark",on:{click:function(t){e.doc||e.selectRequest()}}},[i("span",{staticClass:"truncate",class:{"text-accent":e.isSelected}},[e._v("\n        "+e._s(e.request.name)+"\n      ")]),e._v(" "),e.active&&"user-collection"===e.active.originLocation&&e.active.folderPath===e.folderPath&&e.active.requestIndex===e.requestIndex?i("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"relative h-1.5 w-1.5 flex flex-shrink-0 mx-3",attrs:{title:""+e.$t("collection.request_in_use")}},[i("span",{staticClass:"absolute animate-ping inline-flex flex-shrink-0 h-full w-full rounded-full bg-green-500 opacity-75"}),e._v(" "),i("span",{staticClass:"relative inline-flex flex-shrink-0 rounded-full h-1.5 w-1.5 bg-green-500"})]):e._e()]),e._v(" "),i("div",{staticClass:"flex"},[e.saveRequest||e.doc?e._e():i("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],staticClass:"hidden group-hover:inline-flex",attrs:{svg:"rotate-ccw",title:e.$t("action.restore")},nativeOn:{click:function(t){e.doc||e.selectRequest()}}}),e._v(" "),i("span",[i("tippy",{ref:"options",attrs:{interactive:"",trigger:"click",theme:"popover",arrow:"","on-shown":function(){return e.tippyActions.focus()}},scopedSlots:e._u([{key:"trigger",fn:function(){return[i("ButtonSecondary",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tooltip"},expression:"{ theme: 'tooltip' }"}],attrs:{title:e.$t("action.more"),svg:"more-vertical"}})]},proxy:!0}])},[e._v(" "),i("div",{ref:"tippyActions",staticClass:"flex flex-col focus:outline-none",attrs:{tabindex:"0"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"e",void 0,t.key,void 0)?null:e.edit.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"d",void 0,t.key,void 0)?null:e.duplicate.$el.click()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteAction.$el.click()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0))return null;e.options.tippy().hide()}]}},[i("SmartItem",{ref:"edit",attrs:{svg:"edit",label:e.$t("action.edit"),shortcut:["E"]},nativeOn:{click:function(t){return function(){e.$emit("edit-request",{collectionIndex:e.collectionIndex,folderIndex:e.folderIndex,folderName:e.folderName,request:e.request,requestIndex:e.requestIndex,folderPath:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),i("SmartItem",{ref:"duplicate",attrs:{svg:"copy",label:e.$t("action.duplicate"),shortcut:["D"]},nativeOn:{click:function(t){return function(){e.$emit("duplicate-request",{collectionIndex:e.collectionIndex,folderIndex:e.folderIndex,folderName:e.folderName,request:e.request,requestIndex:e.requestIndex,folderPath:e.folderPath}),e.options.tippy().hide()}.apply(null,arguments)}}}),e._v(" "),i("SmartItem",{ref:"deleteAction",attrs:{svg:"trash-2",label:e.$t("action.delete"),shortcut:["⌫"]},nativeOn:{click:function(t){return function(){e.confirmRemove=!0,e.options.tippy().hide()}.apply(null,arguments)}}})],1)])],1)],1)]),e._v(" "),i("SmartConfirmModal",{attrs:{show:e.confirmRemove,title:e.$t("confirm.remove_request")},on:{"hide-modal":function(t){e.confirmRemove=!1},resolve:e.removeRequest}})],1)}),[],!1,null,null,null);t.default=c.exports;installComponents(c,{SmartIcon:i(98).default,ButtonSecondary:i(83).default,SmartItem:i(126).default,SmartConfirmModal:i(324).default})}}]);