(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["stories"],{"199a":function(t,e,s){},2909:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var r=s("6b75");function i(t){if(Array.isArray(t))return Object(r["a"])(t)}s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0"),s("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var a=s("06c5");function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return i(t)||o(t)||Object(a["a"])(t)||n()}},"4f67":function(t,e,s){t.exports=s.p+"img/ic_filter.1e3f3870.svg"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var r=s("1d80"),i=s("5899"),o="["+i+"]",a=RegExp("^"+o+o+"*"),n=RegExp(o+o+"*$"),c=function(t){return function(e){var s=String(r(e));return 1&t&&(s=s.replace(a,"")),2&t&&(s=s.replace(n,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},a9e3:function(t,e,s){"use strict";var r=s("83ab"),i=s("da84"),o=s("94ca"),a=s("6eeb"),n=s("5135"),c=s("c6b6"),l=s("7156"),u=s("c04e"),d=s("d039"),g=s("7c73"),f=s("241c").f,h=s("06cf").f,p=s("9bf2").f,y=s("58a8").trim,v="Number",_=i[v],m=_.prototype,b=c(g(m))==v,C=function(t){var e,s,r,i,o,a,n,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=y(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(o=l.slice(2),a=o.length,n=0;n<a;n++)if(c=o.charCodeAt(n),c<48||c>i)return NaN;return parseInt(o,r)}return+l};if(o(v,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var k,S=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof S&&(b?d((function(){m.valueOf.call(s)})):c(s)!=v)?l(new _(C(e)),s,S):C(e)},I=r?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;I.length>w;w++)n(_,k=I[w])&&!n(S,k)&&p(S,k,h(_,k));S.prototype=m,m.constructor=S,a(i,v,S)}},bc87:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var r=s("d4ec"),i=s("bee2"),o=(s("b0c0"),s("1881")),a=s.n(o),n=function(){function t(e){var s=e.component,i=e.props,o=void 0===i?{}:i,a=e.params,n=void 0===a?{}:a,c=e.events,l=void 0===c?{}:c;Object(r["a"])(this,t),this.component=s,this.props=o,this.params=n,this.events={opened:function(){Object.assign(s,{modalName:n.name})},closed:function(){}},Object.assign(this.events,l)}return Object(i["a"])(t,[{key:"show",value:function(){a.a.rootInstance.$modal.show(this.component,this.props,this.params,this.events)}},{key:"hide",value:function(){a.a.rootInstance.$emit("close")}}]),t}()},d3fe:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.pageIsReady?r("div",{staticClass:"stories-page page"},[r("div",{staticClass:"stories-page__header"},[r("div",{staticClass:"page__title mb-0"},[r("nav-back"),t._v(" Истории "),r("span",{staticClass:"stories-page__counter"},[t._v(t._s(Object.keys(t.stories).length))])],1),r("div",{staticClass:"stories-page__right-block d-flex"},[r("div",{staticClass:"stories-page__all-stories-checkbox"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.showAllStories,expression:"showAllStories"}],staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.showAllStories)?t._i(t.showAllStories,null)>-1:t.showAllStories},on:{change:function(e){var s=t.showAllStories,r=e.target,i=!!r.checked;if(Array.isArray(s)){var o=null,a=t._i(s,o);r.checked?a<0&&(t.showAllStories=s.concat([o])):a>-1&&(t.showAllStories=s.slice(0,a).concat(s.slice(a+1)))}else t.showAllStories=i}}}),r("label",[t._v("Показать все истории")])]),r("ui-button",{staticClass:"stories-page__filter-button d-flex",attrs:{color:"transparent"},on:{clicked:t.onCategoryFilterClick}},[t._v(" Фильтр "),r("img",{staticClass:"stories-page__filter-icon",attrs:{src:s("4f67"),width:"22",height:"20"}})]),r("ui-button",{on:{clicked:t.resetSearchFields}},[t._v("Поиск")]),r("ui-button",{staticClass:"stories-page__add-story-button d-flex",attrs:{color:"blue"},on:{clicked:t.onAddStoryClick}},[t._v(" Добавить историю ")])],1)]),t.showSearchPanel?r("div",{staticClass:"stories-page__search-panel form-group"},[r("div",{staticClass:"form-group"},[r("label",[t._v("ID истории")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchStoryId,expression:"searchStoryId"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchStoryId},on:{input:function(e){e.target.composing||(t.searchStoryId=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[t._v("Название истории")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchStoryName,expression:"searchStoryName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.searchStoryName},on:{input:function(e){e.target.composing||(t.searchStoryName=e.target.value)}}})]),r("ui-button",{on:{clicked:t.onSearchButtonClick}},[t._v("Найти")])],1):t._e(),t.showAllStories?r("div",{staticClass:"stories-page__list"},[r("div",{staticClass:"stories-page__category-title"},[t._v(" Все истории ")]),t.stories.length?r("div",{staticClass:"stories-page__category-stories"},[r("div",{staticClass:"d-flex flex-wrap"},t._l(t.stories,(function(e){return r("div",{key:e.id,staticClass:"list-group-item stories-page__story-item"},[r("story-card",{attrs:{story:e},on:{clicked:t.onStoryClick}})],1)})),0)]):t._e()]):r("div",{staticClass:"stories-page__list"},[t.searchResultList.length?r("div",{staticClass:"stories-page__category-stories"},[r("div",{staticClass:"stories-page__category-title"},[t._v(" Результаты поиска ")]),r("div",{staticClass:"d-flex flex-wrap"},t._l(t.searchResultList,(function(e){return r("div",{key:e.id,staticClass:"list-group-item stories-page__story-item"},[r("story-card",{attrs:{story:e},on:{clicked:t.onStoryClick}})],1)})),0)]):t._e(),t.nonCategoriesStories.length?r("div",{staticClass:"stories-page__category-stories"},[r("div",{staticClass:"stories-page__category-title"},[t._v(" Без категории ")]),r("div",{staticClass:"d-flex flex-wrap"},t._l(t.nonCategoriesStories,(function(e){return r("div",{key:e.id,staticClass:"list-group-item stories-page__story-item"},[r("story-card",{attrs:{story:e},on:{clicked:t.onStoryClick}})],1)})),0)]):t._e(),t._l(t.categoriesList,(function(e,s){return t.availableCategoriesIds.includes(e.id)?r("div",{key:s,staticClass:"stories-page__category-stories"},[r("div",{staticClass:"stories-page__category-title"},[t._v(" "+t._s(e.name)+" ")]),r("div",{staticClass:"stories-page__category-stories-list"},[r("draggable",t._b({staticClass:"list-group",attrs:{tag:"ul",move:t.onCategoryStoryMoved},on:{start:function(e){t.storyDragging=!0},end:function(e){t.storyDragging=!1},change:function(s){return t.onCategoryStoryOrderChange(e.id)}},model:{value:e.stories,callback:function(s){t.$set(e,"stories",s)},expression:"category.stories"}},"draggable",t.storyDragOptions,!1),[r("transition-group",{staticClass:"d-flex flex-wrap",attrs:{type:"transition",name:"flip-list"}},t._l(e.stories,(function(e){return r("li",{key:e.id,staticClass:"list-group-item stories-page__story-item"},[r("story-card",{attrs:{story:e},on:{clicked:t.onStoryClick}})],1)})),0)],1)],1)]):t._e()}))],2),t.showCategoryPicker?r("div",{staticClass:"category-picker"},[r("div",{staticClass:"category-picker__content"},[r("div",{staticClass:"category-picker__close-button",on:{click:t.onCategoryFilterCloseClick}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),r("div",{ref:"categoryPicker",staticClass:"category-picker__list"},t._l(t.categoriesOptions,(function(e,s){return r("div",{key:s,staticClass:"category-picker__category"},[r("input",{staticClass:"category-picker__checkbox",attrs:{type:"checkbox",id:"category-option-"+s},domProps:{checked:e.checked,value:e.id}}),r("label",{staticClass:"page__input-title",attrs:{for:"category-option-"+s}},[t._v(t._s(e.name))])])})),0),r("ui-button",{staticClass:"category-picker__apply-button",on:{clicked:t.sortCategories}},[t._v("ПРИМЕНИТЬ")])],1)]):t._e()]):t._e()},i=[],o=s("2909"),a=s("1da1"),n=s("5530"),c=(s("96cf"),s("d3b7"),s("3ca3"),s("ddb0"),s("d81d"),s("4de4"),s("159b"),s("7db0"),s("b0c0"),s("caad"),s("2532"),s("2f62")),l=s("b76a"),u=s.n(l),d=(s("bc87"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-popup"},[s("div",{staticClass:"mb-3 modal-popup__title"},[t._v(" Выберите историю "),s("svg",{staticClass:"bi bi-x-lg modal-popup__close",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#2D4C70",viewBox:"0 0 16 16"},on:{click:t.close}},[s("path",{attrs:{d:"M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"}})])]),s("div",{staticClass:"form-group"},[s("b-form-select",{attrs:{options:t.options,disabled:-1===t.selectedStoryId},model:{value:t.selectedStoryId,callback:function(e){t.selectedStoryId=e},expression:"selectedStoryId"}})],1),s("ui-button",{on:{clicked:t.onAddClick}},[t._v("Добавить")])],1)}),g=[],f=(s("a9e3"),s("a70a")),h={props:{categoryId:Number},data:function(){return{selectedStoryId:null,options:[]}},components:{UiButton:function(){return s.e("chunk-7a628425").then(s.bind(null,"832a"))}},computed:{stories:function(){var t=this;return this.$store.state.stories.list.filter((function(e){return!e.categories.find((function(e){return e.id===t.categoryId}))}))}},created:function(){var t=this;this.options=this.stories.filter((function(e){return!e.categories||-1===e.categories.indexOf(t.categoryId)})).map((function(t){return{value:t.id,text:t.title}})),this.options.length?this.selectedStoryId=this.options[0].value:(this.selectedStoryId=-1,this.options=[{value:-1,text:"Нет подходящих историй"}])},methods:Object(n["a"])(Object(n["a"])({},Object(c["d"])("firebase",["ADD_STORY_TO_CATEGORY"])),{},{close:function(){this.$modal.hide("pick-story-modal")},onAddClick:function(){alert("todo допилить, сейчас не сохраняет в фаербазу"),this.ADD_STORY_TO_CATEGORY({categoryId:this.categoryId,storyId:parseInt(this.selectedStoryId,10)}),f["a"].$emit("stories-updated"),this.close()}})},p=h,y=s("2877"),v=Object(y["a"])(p,d,g,!1,null,null,null),_=(v.exports,{data:function(){return{pageIsReady:!1,selectedFilterOption:0,categoriesOptions:[],showCategoryPicker:!1,storyDragging:!1,categoriesList:[],categoryDragLocked:!1,showSearchPanel:!1,searchStoryId:"",searchStoryName:"",searchResultList:[],showAllStories:!1}},components:{draggable:u.a,UiButton:function(){return s.e("chunk-7a628425").then(s.bind(null,"832a"))},StoryCard:function(){return s.e("chunk-5375c262").then(s.bind(null,"de2b"))},NavBack:function(){return s.e("chunk-49c533a1").then(s.bind(null,"e019"))}},computed:{stories:function(){return this.$store.state.firebase.config.Stories.stories},categories:function(){return this.$store.state.firebase.config.Stories.categories},storyDragOptions:function(){return{animation:0,group:"description",disabled:!1,ghostClass:"ghost"}},availableCategoriesIds:function(){return this.categoriesOptions.filter((function(t){return t.checked})).map((function(t){return t.id}))},categoriesListArray:function(){var t=this,e=[];return this.availableCategoriesIds.forEach((function(s){var r=t.categories.find((function(t){return t.id===s})),i=[];t.stories.forEach((function(t){t.categories.find((function(t){return t.id===s}))&&i.push(t)})),e.push({id:r.id,name:r.name,stories:i})})),e},nonCategoriesStories:function(){return this.stories.filter((function(t){return!t.categories||!t.categories.length}))}},created:function(){f["a"].$off("stories-updated").$on("stories-updated",this.fetchData)},beforeDestroy:function(){f["a"].$off("stories-updated",this.fetchData)},mounted:function(){this.fetchData(),this.selectedFilterOption=0},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(c["b"])("firebase",["getConfig"])),Object(c["b"])("stories",["updateCategoryOrder"])),{},{fetchData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getConfig();case 2:t.pageIsReady=!0,t.categoriesOptions=t.categories.map((function(t){return{id:t.id,name:t.name,checked:!0}})),t.categoriesList=Object(o["a"])(t.categoriesListArray);case 5:case"end":return e.stop()}}),e)})))()},onStoryClick:function(t){this.$router.push("/story/".concat(t))},onAddStoryClick:function(){this.$router.push("/story")},onCategoryFilterClick:function(){this.showCategoryPicker=!0},onCategoryFilterCloseClick:function(){this.showCategoryPicker=!1},sortCategories:function(){var t=this;if(this.$refs.categoryPicker){var e=this.$refs.categoryPicker.querySelectorAll(".category-picker__checkbox");e.forEach((function(e){var s=parseInt(e.value,10),r=t.categoriesOptions.find((function(t){return t.id===s}));r.checked=e.checked})),this.onCategoryFilterCloseClick()}},onCategoryStoryOrderChange:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(r=e.categoriesList.find((function(e){return e.id===t})),!r){s.next=7;break}return e.categoryDragLocked=!0,s.next=5,e.updateCategoryOrder({categoryId:t,stories:r.stories.map((function(t){return t.id}))});case 5:e.categoryDragLocked=!1,f["a"].$emit("show-notification-message","Сортировка историй обновлена");case 7:case"end":return s.stop()}}),s)})))()},onCategoryStoryMoved:function(){return!this.categoryDragLocked},resetSearchFields:function(){this.showSearchPanel=!this.showSearchPanel,this.searchStoryId=this.searchStoryName="",this.searchResultList=[]},onSearchButtonClick:function(){var t=this;if(this.searchStoryId.length){var e=this.stories.find((function(e){return e.id===parseInt(t.searchStoryId)}));e&&this.searchResultList.push(e)}else if(this.searchStoryName.length){var s=this.stories.filter((function(e){return e.title.toLowerCase().includes(t.searchStoryName.toLowerCase())}));s.length&&(this.searchResultList=s)}}})}),m=_,b=(s("efb3"),Object(y["a"])(m,r,i,!1,null,null,null));e["default"]=b.exports},efb3:function(t,e,s){"use strict";s("199a")}}]);
//# sourceMappingURL=stories.1f4f45c2.js.map