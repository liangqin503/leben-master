(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shortvideo-history"],{"06b9":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}));var i={uniIcons:a("f6d4").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"data-box"},t._l(t.history,(function(e){return a("v-uni-view",{key:e.log_id,staticClass:"video_item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.previewVideo(e)}}},[a("v-uni-video",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.video_url,poster:e.image_url,"show-play-btn":!1,"show-center-play-btn":!1,"show-fullscreen-btn":!1}}),a("v-uni-view",{staticClass:"like"},[a("uni-icons",{attrs:{type:"heart",color:"#fff"}}),t._v(t._s(e.like_count))],1)],1)})),1)],1)},n=[]},1065:function(t,e,a){"use strict";var i=a("b154"),o=a.n(i);o.a},2588:function(t,e,a){"use strict";a.r(e);var i=a("06b9"),o=a("66c5");for(var n in o)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("1065");var l=a("f0c5"),d=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,"330a3f46",null,!1,i["a"],void 0);e["default"]=d.exports},"5ece":function(t,e,a){"use strict";a("7a82");var i=a("dbce").default,o=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("99af");var n=o(a("2909")),l=i(a("819f")),d={data:function(){return{page:1,current:0,list:[{name:"历史记录"}],history:[]}},onLoad:function(){},onShow:function(){this.history=new Array,this.getHistorylist()},methods:{previewVideo:function(t){console.log(t),uni.navigateTo({url:"./detail?log_id="+t.log_id})},click:function(t){console.log(t),this.current=t},getHistorylist:function(t){var e=this,a={page:this.page};l.getHistorylist(a).then((function(t){console.log("历史记录",t);var a=e.history;t.data.history_list.data.length>0?a=[].concat((0,n.default)(a),(0,n.default)(t.data.history_list.data)):e.page=e.page-1,e.history=a}))}},onReachBottom:function(){this.page=this.page+1,this.getHistorylist()}};e.default=d},"66c5":function(t,e,a){"use strict";a.r(e);var i=a("5ece"),o=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"819f":function(t,e,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.videogetUser=e.tabView=e.tabLikes=e.historyPlay=e.getcollectList=e.getVideolist=e.getVideoAuth=e.getHistorylist=e.getActualData=e.collectVideo=e.collectPlayAdd=e.collectPlay=e.authplayVideo=e.addplayList=e.addAuthplayVideo=void 0;var o=i(a("1601")),n={getVideo_url:"zvideo/list",tab_likes:"zvideo/like",getactual_data:"zvideo/detail",tab_view:"zvideo/look",gethistorylist:"zvideo/lookList",getvideoauth:"zvideo/authIndex",history_play:"zvideo/history_play",addplayList:"zvideo/history_play_add",getUser_url:"zvideo/get_user",auth_play:"zvideo/auth_play",addauth_play:"zvideo/auth_play_add",collect_video:"zvideo/collect",video_collectList:"zvideo/collectList",collect_play:"zvideo/collect_play",collect_play_add:"zvideo/collect_play_add"};e.collectPlayAdd=function(t,e){return o.default.get(n.collect_play_add,t,e)};e.collectPlay=function(t,e){return o.default.get(n.collect_play,t,e)};e.getcollectList=function(t,e){return o.default.get(n.video_collectList,t,e)};e.collectVideo=function(t,e){return o.default.post(n.collect_video,t,e)};e.addAuthplayVideo=function(t,e){return o.default.get(n.addauth_play,t,e)};e.authplayVideo=function(t,e){return o.default.get(n.auth_play,t,e)};e.videogetUser=function(t,e){return o.default.get(n.getUser_url,t,e)};e.addplayList=function(t,e){return o.default.get(n.addplayList,t,e)};e.historyPlay=function(t,e){return o.default.get(n.history_play,t,e)};e.getVideoAuth=function(t,e){return o.default.get(n.getvideoauth,t,e)};e.getHistorylist=function(t,e){return o.default.get(n.gethistorylist,t,e)};e.tabView=function(t,e){return o.default.post(n.tab_view,t,e)};e.getActualData=function(t,e){return o.default.get(n.getactual_data,t,e)};e.tabLikes=function(t,e){return o.default.post(n.tab_likes,t,e)};e.getVideolist=function(t,e){return o.default.post(n.getVideo_url,t,e)}},a563:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 引入uView全局scss变量文件 */uni-page-body[data-v-330a3f46], .container[data-v-330a3f46]{background:#000}body.?%PAGE?%[data-v-330a3f46]{background:#000}.data-box[data-v-330a3f46]{width:100%;margin-top:%?40?%;display:flex;flex-wrap:wrap}.video_item[data-v-330a3f46]{width:33%;height:%?350?%;position:relative}.video_item .like[data-v-330a3f46]{position:absolute;display:flex;color:#fff;left:%?15?%;bottom:%?20?%}',""]),t.exports=e},b154:function(t,e,a){var i=a("a563");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("889a8fea",i,!0,{sourceMap:!1,shadowMode:!1})}}]);