(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shoppingmall-index"],{"0008":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"tabbar"},[t._l(t.itemlist.data,(function(e,o){return[i("v-uni-view",{key:o+"_0",staticClass:"item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo(e)}}},[i("v-uni-view",{staticClass:"item_box"},[i("v-uni-view",{class:{"tab-img":!e.check,"active-img":e.check}},[i("v-uni-image",{attrs:{src:e.icon}})],1),i("v-uni-view",{staticClass:"text",style:{color:e.check?t.itemlist.active_color:"#666",marginTop:e.check?"18rpx":"10rpx"}},[t._v(t._s(e.name))])],1)],1)]}))],2)],1)},n=[]},"03d5":function(t,e,i){"use strict";var o=i("8bc1"),n=i.n(o);n.a},"0c2d":function(t,e,i){"use strict";i.r(e);var o=i("b7fe"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"0cd9":function(t,e,i){"use strict";i.r(e);var o=i("6b6c"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"0fda":function(t,e,i){"use strict";i("7a82");var o=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.toRefund=e.toCreateOrder=e.toCloseOrder=e.shopCollect=e.shopActive=e.orderPay=e.getshopWeekday=e.getshopService=e.getorderPayLlist=e.getShopList=e.getShopDetail=e.getServiceTime=e.getServiceDetail=e.getOrderList=e.getOrderDetail=e.getOrderCode=e.getCityList=void 0;var n=o(i("1601")),a={getshop_list:"/zshop/shopList",shop_detail:"zshop/shopDetail",getshop_service:"zshop/shopService",getservice_detail:"zshop/shopServiceDetail",getshop_weekday:"zshop/shopDay",getService_time:"zshop/shopTime",tocreate_order:"zshop/shopCreateOrder",getorder_pay_list:"/zshop/order_pay_detail",order_pay_url:"zshop/order_pay",getcity_list_url:"zshop/cityList",getorderList_url:"zshop/order_list",getorder_detail:"zshop/order_detail",getOrder_code:"zshop/order_qrcode",torefund_url:"zshop/order_Refund",order_close:"zshop/order_close",shop_collect:"zshop/shop_collect",getshop_active:"zshop/shopActive"};e.shopActive=function(t){return n.default.post(a.getshop_active,t)};e.shopCollect=function(t){return n.default.post(a.shop_collect,t)};e.toCloseOrder=function(t){return n.default.post(a.order_close,t)};e.toRefund=function(t){return n.default.post(a.torefund_url,t)};e.getOrderCode=function(t){return n.default.get(a.getOrder_code,t)};e.getOrderDetail=function(t){return n.default.get(a.getorder_detail,t)};e.getOrderList=function(t){return n.default.get(a.getorderList_url,t)};e.getCityList=function(t){return n.default.post(a.getcity_list_url,t)};e.orderPay=function(t){return n.default.post(a.order_pay_url,t)};e.getorderPayLlist=function(t){return n.default.get(a.getorder_pay_list,t)};e.toCreateOrder=function(t){return n.default.post(a.tocreate_order,t)};e.getServiceTime=function(t){return n.default.get(a.getService_time,t)};e.getshopWeekday=function(t){return n.default.get(a.getshop_weekday,t)};e.getServiceDetail=function(t){return n.default.get(a.getservice_detail,t)};e.getshopService=function(t){return n.default.get(a.getshop_service,t)};e.getShopDetail=function(t){return n.default.get(a.shop_detail,t)};e.getShopList=function(t){return n.default.get(a.getshop_list,t)}},1045:function(t,e,i){var o=i("bb59");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("7bcd3eb7",o,!0,{sourceMap:!1,shadowMode:!1})},"111f":function(t,e,i){"use strict";i.r(e);var o=i("c9b2"),n=i("306e");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("03d5");var s=i("f0c5"),r=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"095e3b7e",null,!1,o["a"],void 0);e["default"]=r.exports},1302:function(t,e,i){"use strict";i.r(e);var o=i("f7fe"),n=i("0cd9");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("a3c6");var s=i("f0c5"),r=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"36307caf",null,!1,o["a"],void 0);e["default"]=r.exports},1488:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var o={name:"u-badge",props:{type:{type:String,default:"error"},size:{type:String,default:"default"},isDot:{type:Boolean,default:!1},count:{type:[Number,String]},overflowCount:{type:Number,default:99},showZero:{type:Boolean,default:!1},offset:{type:Array,default:function(){return[20,20]}},absolute:{type:Boolean,default:!0},fontSize:{type:[String,Number],default:"24"},color:{type:String,default:"#ffffff"},bgColor:{type:String,default:""},isCenter:{type:Boolean,default:!1}},computed:{boxStyle:function(){var t={};return this.isCenter?(t.top=0,t.right=0,t.transform="translateY(-50%) translateX(50%)"):(t.top=this.offset[0]+"rpx",t.right=this.offset[1]+"rpx",t.transform="translateY(0) translateX(0)"),"mini"==this.size&&(t.transform=t.transform+" scale(0.8)"),t},showText:function(){return this.isDot?"":this.count>this.overflowCount?"".concat(this.overflowCount,"+"):this.count},show:function(){return 0!=this.count||0!=this.showZero}}};e.default=o},"1fad":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("14d9");var o={data:function(){return{indicatorDots:!1,autoplay:!0,interval:2e3,duration:1500,imgCurrent:0,imgHeights:[],currentTag:0,windowWidth:750}},props:{bannerlist:{type:Array,default:function(){return[]}}},created:function(){var t=this;uni.getSystemInfo({success:function(e){var i=e.windowWidth;t.windowWidth=i>750?750:i}})},mounted:function(){},methods:{getIndex:function(t){this.currentTag=t.detail.current},_imagesHeight:function(t){var e=t.detail,i=e.width,o=e.height,n=i/o,a=.94*this.windowWidth/n;this.imgHeights.push(a)},toArticle:function(t){t.id&&uni.navigateTo({url:"/pages/article/index?id="+t.id})}}};e.default=o},"2d36":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{position:"relative"}},[i("v-uni-view",{staticStyle:{width:"100%","border-radius":"15rpx",overflow:"hidden",height:"275rpx"}},[i("v-uni-swiper",{staticStyle:{height:"100%"},attrs:{circular:!0,"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,current:t.imgCurrent},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.getIndex.apply(void 0,arguments)}}},t._l(t.bannerlist,(function(e){return i("v-uni-swiper-item",{key:e.id},[""!=e.image?i("v-uni-image",{staticStyle:{width:"100%"},attrs:{src:e.image,mode:"widthFix"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toArticle(e)},load:function(e){arguments[0]=e=t.$handleEvent(e),t._imagesHeight.apply(void 0,arguments)}}}):i("v-uni-view",{style:{width:"100%",height:"100%",backgroundColor:e.color}})],1)})),1)],1),i("v-uni-view",{staticClass:"idos"},t._l(t.bannerlist,(function(e,o){return i("v-uni-view",{key:o,staticClass:"idos-item",class:{"idos-active":t.currentTag==o}})})),1)],1)},n=[]},"306e":function(t,e,i){"use strict";i.r(e);var o=i("1488"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},4686:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uniIcons:i("f6d4").default,uBadge:i("111f").default,uIcon:i("0648").default,tabbar:i("9f31").default,uToast:i("1302").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isLoading?t._e():o("v-uni-view",{staticClass:"container"},[o("v-uni-image",{staticStyle:{width:"100vw",height:"100vh",position:"fixed",top:"0",bottom:"0",left:"0","z-index":"-1"},attrs:{src:t.bgimage,mode:"widthFix"}}),o("v-uni-view",{staticClass:"banner"},[o("banner",{attrs:{bannerlist:t.bannerlist}})],1),o("v-uni-view",{staticClass:"top-data"},[o("v-uni-view",{staticClass:"left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCar.apply(void 0,arguments)}}},[o("uni-icons",{attrs:{type:"cart",size:"28"}}),o("v-uni-text",{staticStyle:{"margin-left":"10rpx"}},[t._v("购物车")]),o("u-badge",{attrs:{type:"error",offset:[-5,-15],count:"1"}})],1),o("v-uni-view",{staticStyle:{position:"relative"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toOrder.apply(void 0,arguments)}}},[o("v-uni-image",{staticStyle:{width:"192rpx",height:"78rpx"},attrs:{src:i("d56f")}}),o("u-badge",{attrs:{type:"error",offset:t.offset,count:"20"}})],1)],1),o("v-uni-view",{staticClass:"goods-box",style:{paddingBottom:t.goods&&t.goods.length<=0?"150rpx":"20rpx"}},[t.hot&&t.hot.hot?[o("v-uni-view",{staticClass:"hot"},[o("v-uni-view",{staticClass:"title"},[o("v-uni-view",[t._v("当前热销")]),o("v-uni-view",{staticStyle:{color:"red","font-size":"28rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)}}},[t._v("更多分类"),o("u-icon",{attrs:{name:"arrow-right-double"}})],1)],1),t._l(t.hot.hot,(function(e){return o("v-uni-view",{key:e.goods_id,staticClass:"goods-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e.goods_id)}}},[o("v-uni-image",{attrs:{src:e.image?e.image:"/static/default.png"}}),o("v-uni-view",{staticClass:"goods-data"},[o("v-uni-view",{staticClass:"goods_name"},[t._v(t._s(e.goods_name))]),o("v-uni-view",{staticClass:"sale-data"},[t._v("已售"+t._s(e.sales_actual))]),o("v-uni-view",{staticClass:"price-box"},[o("v-uni-view",{staticStyle:{color:"red","font-size":"36rpx"}},[t._v("￥"+t._s(e.goods_price_min))]),o("v-uni-view",[o("v-uni-button",{staticClass:"buy-btn"},[t._v("立即购买")])],1)],1)],1)],1)}))],2)]:t._e()],2),o("v-uni-view",{staticClass:"goods-box",staticStyle:{"padding-bottom":"150rpx"}},[t.goods.length>0?o("v-uni-view",{staticClass:"like"},[o("v-uni-view",{staticClass:"title"},[o("v-uni-view",[t._v("猜你喜欢")])],1),o("v-uni-view",{staticClass:"goods-list  column__2"},t._l(t.goods,(function(e,i){return o("v-uni-view",{key:i,staticClass:"goods-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e.goods_id)}}},[o("v-uni-view",{staticClass:"goods-image"},[o("v-uni-image",{staticClass:"image",attrs:{mode:"aspectFill",src:e.image?e.image:"/static/default.png"}})],1),o("v-uni-view",{staticClass:"detail"},[o("v-uni-view",{staticClass:"goods-name twoline-hide"},[o("v-uni-text",{staticClass:"twoline-hide",staticStyle:{"text-align":"center"}},[t._v(t._s(e.goods_name))])],1),o("v-uni-view",{staticClass:"detail-price oneline-hide align",staticStyle:{"text-align":"center"}},[o("v-uni-text",{staticClass:"goods-price f-30 col-m",staticStyle:{color:"red !important"}},[t._v("￥"+t._s(e.goods_price_min))]),o("v-uni-text",{staticClass:"line-price col-9 f-24"},[t._v("￥"+t._s(e.goods_price_max))]),1==e.is_drsc?o("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","margin-left":"10rpx",color:"#1EBE11"}},[t._v(t._s(e.give_hdq))]):t._e()],1)],1)],1)})),1)],1):t._e()],1),o("tabbar",{attrs:{is_check:"2",itemlist:t.tablist}}),o("u-toast",{ref:"uToast"})],1)},a=[]},"5a93":function(t,e,i){"use strict";i.r(e);var o=i("9d7e"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},"6b6c":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("c975"),i("b64b"),i("ac1f"),i("00b4");var o={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=o},7282:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 引入uView全局scss变量文件 */.idos[data-v-72bdac28]{width:100%;position:absolute;bottom:%?20?%;display:flex;align-items:center;justify-content:center}.idos .idos-item[data-v-72bdac28]{width:%?15?%;height:%?15?%;margin:0 %?10?%;border-radius:100%;background:#fff}.idos .idos-active[data-v-72bdac28]{width:%?40?%;background:#e9353e;border-radius:%?10?%}',""]),t.exports=e},8026:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 引入uView全局scss变量文件 */.tabbar[data-v-f2c6e592]{border-top-left-radius:%?50?%;border-top-right-radius:%?50?%;width:100%;border-top:#f1f5fa 1px solid;background:#fff;color:#707177;position:fixed;bottom:%?0?%;z-index:9999;height:%?140?%;left:50%;max-width:750px;-webkit-transform:translate(-50%);transform:translate(-50%);display:flex;justify-content:space-around;align-items:center}.tabbar .item[data-v-f2c6e592]{margin-top:%?10?%;float:left;text-align:center;position:relative;display:flex;justify-content:center;align-items:center}.tabbar .item .text[data-v-f2c6e592]{font-size:%?24?%}.item_box[data-v-f2c6e592]{height:%?120?%;width:%?120?%}.tab-img[data-v-f2c6e592]{background:#fff}.tab-img uni-image[data-v-f2c6e592]{width:%?60?%;height:%?60?%}.active-img[data-v-f2c6e592]{width:%?110?%;height:%?110?%;background-color:#fff;margin-top:%?-50?%;margin-left:%?5?%;border-radius:100%}.active-img uni-image[data-v-f2c6e592]{width:%?75?%;height:%?75?%;margin-top:%?17.5?%}.active[data-v-f2c6e592]{color:#5980ff}@media screen and (min-width:750px){.item_box[data-v-f2c6e592]{width:60px;height:60px}.tabbar[data-v-f2c6e592]{height:70px}.active-img uni-image[data-v-f2c6e592]{width:45px;height:45px;margin-top:%?17.5?%}.tab-img uni-image[data-v-f2c6e592]{width:40px;height:40px}.tabbar .item .text[data-v-f2c6e592]{font-size:%?22?%}}',""]),t.exports=e},"8a7d":function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 引入uView全局scss变量文件 */.u-badge[data-v-095e3b7e]{display:inline-flex;justify-content:center;align-items:center;line-height:%?24?%;padding:%?4?% %?8?%;border-radius:%?100?%;z-index:9}.u-badge--bg--primary[data-v-095e3b7e]{background-color:#2979ff}.u-badge--bg--error[data-v-095e3b7e]{background-color:#fa3534}.u-badge--bg--success[data-v-095e3b7e]{background-color:#19be6b}.u-badge--bg--info[data-v-095e3b7e]{background-color:#909399}.u-badge--bg--warning[data-v-095e3b7e]{background-color:#f90}.u-badge-dot[data-v-095e3b7e]{height:%?16?%;width:%?16?%;border-radius:%?100?%;line-height:1}.u-badge-mini[data-v-095e3b7e]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}.u-info[data-v-095e3b7e]{background-color:#909399;color:#fff}',""]),t.exports=e},"8bc1":function(t,e,i){var o=i("8a7d");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("2afd87f4",o,!0,{sourceMap:!1,shadowMode:!1})},"9d7e":function(t,e,i){"use strict";i("7a82");var o=i("dbce").default,n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("2909"));i("d3b7"),i("3ca3"),i("ddb0"),i("99af");o(i("0fda"));var s=o(i("a470")),r=n(i("8d3b")),d=n(i("5aaf")),c=n(i("c83d")),u=n(i("9f31")),l={active_color:"#333",data:[{name:"首页",icon:"/static/tabbar/home.png",url:"/",check:!1,midButton:!1},{name:"商城",icon:"/static/tabbar/shop-active.png",url:"/pages/shoppingmall/index",check:!0,midButton:!0},{name:"我的",icon:"/static/tabbar/user.png",url:"/pages/user/index",check:!1,midButton:!1}]},f={components:{tabbar:u.default,banner:c.default},data:function(){return{offset:[-10,-5],bgimage:"",isLoading:!1,itemStyle:{column:2,display:"slide"},bannerlist:[{image:"/static/banner/banner1.png",color:"#ffaa7f"},{image:"/static/banner/banner2.png",color:"#fff7b9"},{image:"/static/banner/banner3.png",color:"#cbdeff"}],goods:[{goods_id:1,image:"",goods_name:"珍珠奶茶",sales_actual:20,goods_price_min:15,goods_price_max:17,is_drsc:1,give_hdq:"2323"},{goods_id:2,image:"/static/default1.png",goods_name:"芒果冰沙",sales_actual:20,goods_price_min:15,goods_price_max:19,is_drsc:1,give_hdq:"2323"}],hot:{hot:[{goods_id:1,image:"",goods_name:"珍珠奶茶",sales_actual:20,goods_price_min:15}]},page:1,customHeight:30,show_video:0,tablist:l}},onLoad:function(){uni.hideTabBar();var t=this;uni.getSystemInfo({success:function(e){var i=e.windowWidth;t.windowWidth=i>750?750:i}}),this.customHeight=this.customBarH},onShow:function(){var t=r.default.getters.commondata.bgimage?r.default.getters.commondata:d.default.get("CommonData");this.show_video=r.default.getters.commondata.open_video?r.default.getters.commondata.open_video:0,t&&t.bgimage&&(this.bgimage=t.bgimage)},methods:{getMore:function(){uni.navigateTo({url:"/shoppingpage/category/index"})},toCar:function(){uni.navigateTo({url:"/shoppingpage/cart/index"})},toDetail:function(t){console.log("跳转",t),uni.navigateTo({url:"/shoppingpage/goods/detail?goodsId="+t,fail:function(t){console.log(t)}})},toOrder:function(){uni.navigateTo({url:"/shoppingpage/order/index"})},getInitData:function(t){var e=this;e.isLoading=!0,Promise.all([e.getGoodsList(),e.getPageData()]).then((function(t){e.isLoading=!1,console.log("请求",t)})).catch((function(t){})).finally((function(){t&&t()}))},getGoodsList:function(){var t=this;return new Promise((function(e,i){s.getLovelyList({page:t.page}).then((function(i){var o=i.data.like;console.log(o);var n=t.goods;o.length>0&&(n=[].concat((0,a.default)(n),(0,a.default)(o))),t.goods=n,e(i.data.like)})).catch((function(t){}))}))},getPageData:function(){var t=this;return new Promise((function(e,i){s.hotlist().then((function(i){console.log("商城首页数据",i.data,i.data.list),t.hot=i.data.list,t.bannerlist=i.data.list.banlan,console.log("轮播",t.bannerlist),e(i.data.list)})).catch((function(t){i(t)})).finally((function(){}))}))}},onReachBottom:function(){this.page=this.page+1},onPullDownRefresh:function(){this.page=1,this.goods=new Array}};e.default=f},"9f31":function(t,e,i){"use strict";i.r(e);var o=i("0008"),n=i("0c2d");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("d599");var s=i("f0c5"),r=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"f2c6e592",null,!1,o["a"],void 0);e["default"]=r.exports},a3c6:function(t,e,i){"use strict";var o=i("b413"),n=i.n(o);n.a},a470:function(t,e,i){"use strict";i("7a82");var o=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.specData=e.skuInfo=e.recommended=e.poster=e.list=e.hotlist=e.goodsCollect=e.getLovelyList=e.detail=e.basic=void 0;var n=o(i("5530"));i("a9e3");var a=o(i("1601")),s={list:"goods/list",hot_list:"zshop/shopIndex",detail:"goods/detail",basic:"goods/basic",specData:"goods/specData",skuInfo:"goods/skuInfo",recommended:"goods/recommended",poster:"goods/poster",getlovely_list:"zshop/shopLike",goods_collect:"zshop/goods_collect"};e.goodsCollect=function(t){return a.default.post(s.goods_collect,t)};e.getLovelyList=function(t){return a.default.get(s.getlovely_list,t)};e.hotlist=function(t,e){return a.default.get(s.hot_list,t,e)};e.list=function(t,e){return a.default.get(s.list,t,e)};e.detail=function(t,e,i){return e=Number(e),a.default.get(s.detail,(0,n.default)({goodsId:t,verifyStatus:e},i))};e.basic=function(t,e,i){return e=Number(e),a.default.get(s.basic,(0,n.default)({goodsId:t,verifyStatus:e},i))};e.specData=function(t){return a.default.get(s.specData,{goodsId:t})};e.recommended=function(){return a.default.get(s.recommended)};e.skuInfo=function(t,e,i){return a.default.get(s.skuInfo,(0,n.default)({goodsId:t,goodsSkuId:e},i))};e.poster=function(t){return a.default.get(s.poster,t)}},b07b:function(t,e,i){var o=i("8026");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("37ce9e4c",o,!0,{sourceMap:!1,shadowMode:!1})},b413:function(t,e,i){var o=i("dde1");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("5218d977",o,!0,{sourceMap:!1,shadowMode:!1})},b7fe:function(t,e,i){"use strict";i("7a82");var o=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(i("8d3b")),o(i("5aaf"));var n={data:function(){return{count:0}},methods:{navTo:function(t){console.log("跳转",t,t.url),t.check||uni.reLaunch({url:t.url})}},props:{itemlist:{},is_check:0,parent:{},open_video:""},created:function(){console.log("菜单=====",this.itemlist)},mounted:function(){},watch:{parent:function(t){this.count=t}}};e.default=n},bb59:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 引入uView全局scss变量文件 */.container[data-v-3c2c6b4d]{padding:0 %?25?%;padding-bottom:%?140?%}.banner[data-v-3c2c6b4d]{width:100%;margin:%?30?% auto %?20?%;position:relative}.banner .banner-item[data-v-3c2c6b4d]{width:100%;position:relative;margin:0 auto;border-radius:%?15?%;overflow:hidden;background:linear-gradient(90deg,rgba(99,25,52,.4),hsla(0,0%,95.3%,.4))}.top-data[data-v-3c2c6b4d]{width:100%;display:flex;align-items:center;justify-content:space-between;margin:%?30?% auto 0}.top-data .left[data-v-3c2c6b4d]{display:flex;align-items:center;justify-content:center;position:relative}.goods-box[data-v-3c2c6b4d]{width:100%;background-color:#fff;margin:%?20?% auto}.goods-box .title[data-v-3c2c6b4d]{width:100%;display:flex;align-items:center;justify-content:space-between;font-size:%?32?%}.goods-box .hot[data-v-3c2c6b4d]{padding:%?20?%}.goods-box .hot .goods-item[data-v-3c2c6b4d]{display:flex;margin:%?40?% 0}.goods-box .hot .goods-item uni-image[data-v-3c2c6b4d]{width:%?200?%;height:%?200?%;background-color:#ddd}.goods-box .hot .goods-item .goods-data[data-v-3c2c6b4d]{margin-left:%?20?%}.goods-box .hot .goods-item .goods-data .goods_name[data-v-3c2c6b4d]{margin-bottom:%?15?%}.goods-box .hot .goods-item .goods-data .stock[data-v-3c2c6b4d]{border:%?1?% solid red;color:red;padding:%?2?% %?10?%}.goods-box .hot .goods-item .goods-data .sale-data[data-v-3c2c6b4d]{font-size:%?24?%;color:#999;margin:%?30?% %?0?% %?5?%}.goods-box .hot .goods-item .goods-data .price-box[data-v-3c2c6b4d]{min-width:%?450?%;display:flex;align-items:center;justify-content:space-between}.goods-box .hot .goods-item .goods-data .price-box .buy-btn[data-v-3c2c6b4d]{color:#e9353e;background:#ffece8;width:%?160?%;height:%?60?%;padding:0;line-height:%?60?%;font-size:%?30?%}.like[data-v-3c2c6b4d]{position:relative;padding:%?20?%}.like .goods-list[data-v-3c2c6b4d]{box-sizing:border-box;display:flex;flex-wrap:wrap;margin-top:%?25?%;justify-content:space-between}.like .goods-list .goods-item[data-v-3c2c6b4d]{background:#fff;box-sizing:border-box;padding:%?6?%;width:48%;margin:%?20?% 0}.like .goods-list .goods-item .goods-image[data-v-3c2c6b4d]{position:relative;height:0;padding:0 %?20?%;padding-bottom:100%;overflow:hidden;background:#fff;overflow:hidden}.like .goods-list .goods-item .goods-image[data-v-3c2c6b4d]:after{content:"";display:block;margin-top:100%}.like .goods-list .goods-item .goods-image .image[data-v-3c2c6b4d]{position:absolute;width:100%;height:100%;top:0;left:0;-o-object-fit:cover;object-fit:cover;background:#fafafa;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.like .goods-list .goods-item .goods-image .image[data-v-3c2c6b4d]:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.like .goods-list .goods-item .detail[data-v-3c2c6b4d]{padding:%?8?%;background:#fff}.like .goods-list .goods-item .detail .goods-name[data-v-3c2c6b4d]{min-height:%?68?%;line-height:1.3;white-space:normal;color:#484848;font-size:%?26?%;margin-bottom:%?4?%}.like .goods-list .goods-item .detail .detail-price .goods-price[data-v-3c2c6b4d]{margin-right:%?8?%}.like .goods-list .goods-item .detail .detail-price .line-price[data-v-3c2c6b4d]{text-decoration:line-through}.like .goods-list.display__slide[data-v-3c2c6b4d]{white-space:nowrap;font-size:0}.like .goods-list.display__slide .goods-item[data-v-3c2c6b4d]{display:inline-block}.like .goods-list.display__list .goods-item[data-v-3c2c6b4d]{float:left}',""]),t.exports=e},c83d:function(t,e,i){"use strict";i.r(e);var o=i("2d36"),n=i("d559");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("d56c");var s=i("f0c5"),r=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"72bdac28",null,!1,o["a"],void 0);e["default"]=r.exports},c9b2:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.show?i("v-uni-view",{staticClass:"u-badge",class:[t.isDot?"u-badge-dot":"","mini"==t.size?"u-badge-mini":"",t.type?"u-badge--bg--"+t.type:""],style:[{top:t.offset[0]+"rpx",right:t.offset[1]+"rpx",fontSize:t.fontSize+"rpx",position:t.absolute?"absolute":"static",color:t.color,backgroundColor:t.bgColor},t.boxStyle]},[t._v(t._s(t.showText))]):t._e()},n=[]},cf81:function(t,e,i){var o=i("7282");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("e3768ef4",o,!0,{sourceMap:!1,shadowMode:!1})},d559:function(t,e,i){"use strict";i.r(e);var o=i("1fad"),n=i.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);e["default"]=n.a},d56c:function(t,e,i){"use strict";var o=i("cf81"),n=i.n(o);n.a},d56f:function(t,e,i){t.exports=i.p+"static/img/title.02cf7a12.png"},d599:function(t,e,i){"use strict";var o=i("b07b"),n=i.n(o);n.a},dde1:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 引入uView全局scss变量文件 */.u-toast[data-v-36307caf]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-36307caf]{opacity:1}.u-icon[data-v-36307caf]{margin-right:%?10?%;display:flex;flex-direction:row;align-items:center;line-height:normal}.u-position-center[data-v-36307caf]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-36307caf]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-36307caf]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-36307caf]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-36307caf]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-36307caf]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-36307caf]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-36307caf]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-36307caf]{color:#fff;background-color:#585858}',""]),t.exports=e},e2f3:function(t,e,i){"use strict";i.r(e);var o=i("4686"),n=i("5a93");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("f37e");var s=i("f0c5"),r=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"3c2c6b4d",null,!1,o["a"],void 0);e["default"]=r.exports},f37e:function(t,e,i){"use strict";var o=i("1045"),n=i.n(o);n.a},f7fe:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return o}));var o={uIcon:i("0648").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},a=[]}}]);