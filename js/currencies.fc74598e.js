(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["currencies"],{bc87:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("d4ec"),r=n("bee2"),s=(n("b0c0"),n("1881")),i=n.n(s),o=function(){function e(t){var n=t.component,r=t.props,s=void 0===r?{}:r,i=t.params,o=void 0===i?{}:i,l=t.events,c=void 0===l?{}:l;Object(a["a"])(this,e),this.component=n,this.props=s,this.params=o,this.events={opened:function(){Object.assign(n,{modalName:o.name})},closed:function(){}},Object.assign(this.events,c)}return Object(r["a"])(e,[{key:"show",value:function(){i.a.rootInstance.$modal.show(this.component,this.props,this.params,this.events)}},{key:"hide",value:function(){i.a.rootInstance.$emit("close")}}]),e}()},c3c7:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("div",{staticClass:"page__title"},[n("nav-back"),e._v(" Список валют "),n("ui-button",{staticClass:"page__add-button",attrs:{color:"blue"},on:{clicked:e.onAddClick}},[e._v(" Добавить ")])],1),n("table",{staticClass:"users-list table table-striped"},[e._m(0),n("tbody",e._l(e.currencies,(function(t,a){return n("tr",{key:a},[n("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),n("td",[e._v(e._s(t.name))]),n("td",[t.id>0?n("span",[e._v(e._s(t.greed))]):n("span",[e._v("-")])]),n("td",[t.id>0?n("span",[e._v(e._s(t.start_value))]):n("span",[e._v("-")])]),n("td",[t.id>0?n("svg",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"bi bi-pencil page__active-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16",title:"Редактировать"},on:{click:function(n){return e.onEditClick(t)}}},[n("path",{attrs:{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"}})]):n("span",[e._v("-")])])])})),0)])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("ID")]),n("th",{attrs:{scope:"col"}},[e._v("Название")]),n("th",{staticStyle:{"max-width":"50px"},attrs:{scope:"col"}},[e._v("Повышенная жадность")]),n("th",{staticStyle:{"max-width":"50px"},attrs:{scope:"col"}},[e._v("Стартовый баланс")]),n("th",{attrs:{scope:"col"}},[e._v("Действия")])])])}],s=n("5530"),i=n("1da1"),o=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("2f62")),l=n("bc87"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-popup",on:{click:e.resetAlert,keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?e.onAddClick.apply(null,arguments):null}}},[n("div",{staticClass:"mb-3 modal-popup__title"},[e._v(" Добавление валюты "),n("svg",{staticClass:"bi bi-x-lg modal-popup__close",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#2D4C70",viewBox:"0 0 16 16"},on:{click:e.close}},[n("path",{attrs:{d:"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"}})])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],ref:"input",staticClass:"form-control mb-2",attrs:{type:"text",placeholder:"Название"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("label",{staticClass:"modal-popup__label"},[e._v("Повышенная жадность")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.greed,expression:"greed",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Повышенная жадность",min:"0",oninput:"validity.valid||(value=0)"},domProps:{value:e.greed},on:{input:function(t){t.target.composing||(e.greed=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("label",{staticClass:"modal-popup__label"},[e._v("Стартовый баланс")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],staticClass:"form-control mb-2",attrs:{type:"number",placeholder:"Стартовый баланс",min:"0",oninput:"validity.valid||(value=0)"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("ui-button",{staticClass:"mt-3 mb-2",on:{clicked:e.onAddClick}},[e._v("Добавить")]),e.alert.length?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.alert))]):e._e()],1)},u=[],d=(n("b0c0"),n("25f0"),{data:function(){return{name:"",value:0,greed:1,alert:"",canReset:!1}},components:{UiButton:function(){return n.e("chunk-7a628425").then(n.bind(null,"832a"))}},computed:Object(s["a"])({},Object(o["c"])("firebase",["getNewEntityID"])),mounted:function(){this.$refs.input.focus()},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])("firebase",["saveCurrency"])),{},{resetAlert:function(){this.canReset&&(this.alert="",this.canReset=!1)},setAlert:function(e){var t=this;this.alert=e,setTimeout((function(){t.canReset=!0}),250)},onAddClick:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.name){t.next=3;break}return e.setAlert("Необходимо ввести название"),t.abrupt("return");case 3:return t.next=5,e.saveCurrency({id:e.getNewEntityID("Currencies"),name:e.name,greed:e.greed,start_value:e.value});case 5:n=t.sent,n.error?e.setAlert("Ошибка: ".concat(n.error.toString())):e.close();case 7:case"end":return t.stop()}}),t)})))()},close:function(){this.$modal.hide("add-currency-modal")}})}),p=d,m=n("2877"),v=Object(m["a"])(p,c,u,!1,null,null,null),h=v.exports,f=function(){var e=new l["a"]({component:h,props:{},params:{transition:"scale",name:"add-currency-modal",width:"100%",height:"100%",classes:"modal-popup__overlay"}});e.show()},b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal-popup",on:{keyup:function(t){return t.type.indexOf("key")||13===t.keyCode?e.onSaveClick.apply(null,arguments):null}}},[n("div",{staticClass:"mb-3 modal-popup__title"},[e._v(" Редактирование валюты "),n("svg",{staticClass:"bi bi-x-lg modal-popup__close",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#2D4C70",viewBox:"0 0 16 16"},on:{click:e.close}},[n("path",{attrs:{d:"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"}})])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],ref:"input",staticClass:"form-control mb-2",attrs:{type:"text",placeholder:"Название"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("label",{staticClass:"modal-popup__label"},[e._v("Повышенная жадность")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.greed,expression:"greed",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Повышенная жадность",min:"0",oninput:"validity.valid||(value=0)"},domProps:{value:e.greed},on:{input:function(t){t.target.composing||(e.greed=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("label",{staticClass:"modal-popup__label"},[e._v("Стартовый баланс")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],staticClass:"form-control mb-2",attrs:{type:"number",placeholder:"Стартовый баланс",min:"0",oninput:"validity.valid||(value=0)"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("ui-button",{staticClass:"mt-3 mb-2",on:{clicked:e.onSaveClick}},[e._v("Сохранить")]),e.alert.length?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.alert))]):e._e()],1)},g=[],_=n("a70a"),w={props:["currency"],data:function(){return{name:"",value:0,greed:0,alert:""}},components:{UiButton:function(){return n.e("chunk-7a628425").then(n.bind(null,"832a"))}},mounted:function(){this.name=this.currency.name,this.greed=this.currency.greed,this.value=this.currency.start_value,this.$refs.input.focus()},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])("firebase",["saveCurrency"])),{},{resetAlert:function(){this.canReset&&(this.alert="",this.canReset=!1)},setAlert:function(e){var t=this;this.alert=e,setTimeout((function(){t.canReset=!0}),250)},onSaveClick:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.name){t.next=3;break}return e.setAlert("Необходимо ввести название"),t.abrupt("return");case 3:return n={id:e.currency.id,name:e.name,greed:parseInt(e.greed,10),start_value:parseInt(e.value,10)},t.next=6,e.saveCurrency(n);case 6:a=t.sent,a.error?_["a"].$emit("show-notification-message","Ошибка: ".concat(a.error.toString())):e.close();case 8:case"end":return t.stop()}}),t)})))()},close:function(){this.$modal.hide("edit-currency-modal")}})},C=w,y=Object(m["a"])(C,b,g,!1,null,null,null),k=y.exports,x=function(e){var t=new l["a"]({component:k,props:{currency:e},params:{transition:"scale",name:"edit-currency-modal",width:"100%",height:"100%",classes:"modal-popup__overlay"}});t.show()},O={components:{UiButton:function(){return n.e("chunk-7a628425").then(n.bind(null,"832a"))},NavBack:function(){return n.e("chunk-49c533a1").then(n.bind(null,"e019"))}},computed:{currencies:function(){return this.$store.state.firebase.config.Currencies}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getConfig();case 2:case"end":return t.stop()}}),t)})))()},methods:Object(s["a"])(Object(s["a"])({},Object(o["b"])("firebase",["getConfig"])),{},{onEditClick:function(e){x(e)},onAddClick:function(){f()}})},j=O,$=Object(m["a"])(j,a,r,!1,null,null,null);t["default"]=$.exports}}]);
//# sourceMappingURL=currencies.fc74598e.js.map