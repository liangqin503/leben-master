(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shoppingpage-search-index"],{"638d":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 引入uView全局scss变量文件 */.container[data-v-749a5284]{padding:%?20?%;min-height:100vh;background:#f7f7f7}.search-wrapper[data-v-749a5284]{display:flex;height:%?64?%}.search-input[data-v-749a5284]{width:80%;background:#fff;border-radius:%?10?% 0 0 %?10?%;box-sizing:border-box;overflow:hidden}.search-input .search-input-wrapper[data-v-749a5284]{display:flex}.search-input .search-input-wrapper .left[data-v-749a5284]{display:flex;width:%?60?%;justify-content:center;align-items:center}.search-input .search-input-wrapper .left .search-icon[data-v-749a5284]{display:block;color:#b4b4b4;font-size:%?28?%}.search-input .search-input-wrapper .right[data-v-749a5284]{flex:1}.search-input .search-input-wrapper .right uni-input[data-v-749a5284]{font-size:%?28?%;height:%?64?%;display:flex;align-items:center}.search-input .search-input-wrapper .right uni-input .input-placeholder[data-v-749a5284]{color:#aba9a9}.search-button[data-v-749a5284]{width:20%;box-sizing:border-box}.search-button .button[data-v-749a5284]{height:%?64?%;font-size:%?28?%;border-radius:0 %?10?% %?10?% 0;background:#fa2209;color:#fff;display:flex;justify-content:center;align-items:center}.history .his-head[data-v-749a5284]{font-size:%?28?%;padding:%?50?% 0 0 0;color:#777}.history .his-head .icon[data-v-749a5284]{float:right}.history .his-list[data-v-749a5284]{padding:%?20?% 0;overflow:hidden}.history .his-list .his-item[data-v-749a5284]{width:33.3%;float:left;padding:%?10?%;box-sizing:border-box}.history .his-list .his-item .history-button[data-v-749a5284]{text-align:center;padding:%?14?%;line-height:%?30?%;border-radius:%?100?%;background:#fff;font-size:%?26?%;border:%?1?% solid #efefef;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=i},"72d5":function(t,i,a){"use strict";var e=a("d09b"),n=a.n(e);n.a},8280:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"search-wrapper"},[a("v-uni-view",{staticClass:"search-input"},[a("v-uni-view",{staticClass:"search-input-wrapper"},[a("v-uni-view",{staticClass:"left"},[a("v-uni-text",{staticClass:"search-icon iconfont icon-search"})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-input",{staticClass:"input",attrs:{focus:"true",placeholder:"请输入您搜索的商品",type:"text"},model:{value:t.searchValue,callback:function(i){t.searchValue=i},expression:"searchValue"}})],1)],1)],1),a("v-uni-view",{staticClass:"search-button"},[a("v-uni-view",{staticClass:"button",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onSearch.apply(void 0,arguments)}}},[t._v("搜索")])],1)],1),t.historySearch.length?a("v-uni-view",{staticClass:"history"},[a("v-uni-view",{staticClass:"his-head"},[a("v-uni-text",{staticClass:"title"},[t._v("最近搜索")]),a("v-uni-text",{staticClass:"icon iconfont icon-delete",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clearSearch.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"his-list"},t._l(t.historySearch,(function(i,e){return a("v-uni-view",{key:e,staticClass:"his-item"},[a("v-uni-view",{staticClass:"history-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleQuick(i)}}},[t._v(t._s(i))])],1)})),1)],1):t._e()],1)},n=[]},"96de":function(t,i,a){"use strict";a.r(i);var e=a("8280"),n=a("fcd5");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("72d5");var r=a("f0c5"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"749a5284",null,!1,e["a"],void 0);i["default"]=o.exports},b68d:function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("c975"),a("a434"),a("3c65");var e={data:function(){return{historySearch:[],searchValue:""}},onLoad:function(t){this.historySearch=this.getHistorySearch()},methods:{getHistorySearch:function(){return uni.getStorageSync("historySearch")||[]},onSearch:function(){var t=this.searchValue;t&&(this.setHistory(t),this.$navTo("shoppingpage/goods/list",{search:t}))},setHistory:function(t){var i=this.getHistorySearch(),a=i.indexOf(t);a>-1&&i.splice(a,1),i.unshift(t),this.historySearch=i,this.onUpdateStorage()},clearSearch:function(){this.historySearch=[],this.onUpdateStorage()},onUpdateStorage:function(t){uni.setStorageSync("historySearch",this.historySearch)},handleQuick:function(t){this.$navTo("shoppingpage/goods/list",{search:t})}}};i.default=e},d09b:function(t,i,a){var e=a("638d");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("0baec9c5",e,!0,{sourceMap:!1,shadowMode:!1})},fcd5:function(t,i,a){"use strict";a.r(i);var e=a("b68d"),n=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a}}]);