(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-help-index"],{"0641":function(t,n,e){"use strict";e.r(n);var a=e("8b63"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"2a33":function(t,n,e){var a=e("bcc4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("1ae21c2b",a,!0,{sourceMap:!1,shadowMode:!1})},"8a9d":function(t,n,e){"use strict";var a=e("2a33"),i=e.n(a);i.a},"8b63":function(t,n,e){"use strict";e("7a82");var a=e("dbce").default,i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("d3b7");var o=i(e("7052")),s=i(e("5f31")),u=a(e("951d")),l=e("98d4"),c={components:{MescrollBody:o.default},mixins:[s.default],data:function(){return{list:(0,l.getEmptyPaginateObj)(),upOption:{auto:!0,page:{size:15},noMoreSize:12,empty:{tip:"亲，暂无相关数据"}}}},onLoad:function(t){},methods:{upCallback:function(t){var n=this;n.getHelpList(t.num).then((function(t){var e=t.data.length,a=t.data.total;n.mescroll.endBySize(e,a)})).catch((function(){return n.mescroll.endErr()}))},getHelpList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=this;return new Promise((function(e,a){u.list({page:t}).then((function(a){var i=a.data.list;n.list.data=(0,l.getMoreListData)(i,n.list,t),e(i)}))}))}}};n.default=c},"951d":function(t,n,e){"use strict";e("7a82");var a=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.list=void 0;var i=a(e("1601")),o={list:"help/list"};n.list=function(t){return i.default.get(o.list,t)}},a00a:function(t,n,e){"use strict";e.r(n);var a=e("b45f"),i=e("0641");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("8a9d");var s=e("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"298ff59a",null,!1,a["a"],void 0);n["default"]=u.exports},b45f:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("mescroll-body",{ref:"mescrollRef",attrs:{sticky:!0,down:{use:!1},up:t.upOption},on:{init:function(n){arguments[0]=n=t.$handleEvent(n),t.mescrollInit.apply(void 0,arguments)},up:function(n){arguments[0]=n=t.$handleEvent(n),t.upCallback.apply(void 0,arguments)}}},t._l(t.list.data,(function(n,a){return e("v-uni-view",{key:a,staticClass:"help cont-box b-f"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-text",[t._v(t._s(n.title))])],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-text",[t._v(t._s(n.content))])],1)],1)})),1)],1)},i=[]},bcc4:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 引入uView全局scss变量文件 */.help[data-v-298ff59a]{border-bottom:%?1?% solid #f6f6f9}.help .title[data-v-298ff59a]{font-size:%?32?%;color:#333;margin-bottom:%?10?%}.help .content[data-v-298ff59a]{font-size:%?26?%;color:#666}',""]),t.exports=n}}]);