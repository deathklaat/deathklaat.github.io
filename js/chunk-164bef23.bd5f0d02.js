(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-164bef23"],{4567:function(t,i,s){"use strict";s("9dc0")},"9dc0":function(t,i,s){},e22a:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"notification-fade"}},[t.isActive?s("div",{staticClass:"notification-message"},[s("div",{staticClass:"notification-message__text"},[t._v(t._s(t.message))])]):t._e()])},n=[],a=s("a70a"),o={data:function(){return{message:"",isActive:!1}},created:function(){a["a"].$on("show-notification-message",this.show),a["a"].$on("app-clicked",this.hide)},beforeDestroy:function(){a["a"].$off("show-notification-message",this.show),a["a"].$off("app-clicked",this.hide)},methods:{show:function(t){this.message=t,this.isActive=!0},hide:function(){this.message="",this.isActive=!1}}},c=o,f=(s("4567"),s("2877")),h=Object(f["a"])(c,e,n,!1,null,null,null);i["default"]=h.exports}}]);
//# sourceMappingURL=chunk-164bef23.bd5f0d02.js.map