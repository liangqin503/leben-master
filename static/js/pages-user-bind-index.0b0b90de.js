(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-bind-index"],{"00b8":function(t,e,a){"use strict";a.r(e);var n=a("73d5"),i=a("84fc");for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("721e");var s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"b82601cc",null,!1,n["a"],void 0);e["default"]=u.exports},"04b7":function(t,e,a){var n=a("1dff");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("e1d07e2a",n,!0,{sourceMap:!1,shadowMode:!1})},"0f67":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.withdrawConfig=e.updateName=e.towithdraw=e.torenew=e.toRecharge=e.toRealname=e.thirdIsRealname=e.testApi=e.isRealname=e.info=e.getmyselfAssets=e.getmyTeamDetail=e.getmyTeam=e.getbalanceLog=e.getSelfmenu=e.getSVIPTips=e.getRechargeConfig=e.getRealnameDetail=e.getOldBrand=e.getNewBrand=e.getMyfans=e.getCollectlist=e.getChildMenu=e.getCard=e.getBanklist=e.editBankInfo=e.changeHeadImg=e.bindRecommend=e.bindMobile=e.bindBankcard=e.assets=void 0;var i=n(a("5530")),r=n(a("1601")),s={userInfo:"zuser/myself",assets:"user/assets",bindMobile:"user/bindMobile",is_realname_url:"idcard/is_realname",getRealname_url:"idcard/detail",toRealname_url:"idcard/add",renew_url:"appverson/is_renew",getNewBrand_url:"appverson/detail",getoldBrand_url:"appverson/list",gettest_url:"https://open.zhongwy.cn/api/v1/client/coin/getprice",getSvip_Tips:"user/zfinan_svip_tip",getmyTeam_url:"user/myTeam",getmyTeamDetail_url:"user/myTeamDetail",bindRecommend_url:"user/user_bind_pid",getcard_url:"idcard/bank_card",bindbankcard_url:"idcard/add_bank_card",getbanklist_url:"idcard/bank_list",editBankInfo_url:"idcard/set_bank_card",getSelfmenu_url:"user/myself_menu",thirdrealname:"zuser/login_lfx_check",get_child_menu:"zuser/myself_child",changeHeadImg_url:"zuser/userAvatar",getmyself_assets:"zuser/myself_assets",getbalanceLog_url:"zuser/balanceLog",updateNickName:"zuser/nickName",getrecharge_config:"zuser/recharge_config",torecharge_url:"zuser/recharge",withdraw_config:"zuser/withdraw_config",towithdraw_url:"zuser/withdraw",getCollectlist_url:"zuser/my_collect",getmyfans:"/zuser/fans"};e.getMyfans=function(t){return r.default.get(s.getmyfans,t)};e.getCollectlist=function(t){return r.default.get(s.getCollectlist_url,t)};e.towithdraw=function(t){return r.default.post(s.towithdraw_url,t)};e.withdrawConfig=function(t){return r.default.post(s.withdraw_config,t)};e.toRecharge=function(t){return r.default.post(s.torecharge_url,t)};e.getRechargeConfig=function(t){return r.default.post(s.getrecharge_config,t)};e.updateName=function(t){return r.default.post(s.updateNickName,t)};e.getbalanceLog=function(t){return r.default.get(s.getbalanceLog_url,t)};e.getmyselfAssets=function(t){return r.default.get(s.getmyself_assets,t)};e.changeHeadImg=function(t){return r.default.post(s.changeHeadImg_url,t)};e.getChildMenu=function(t){return r.default.post(s.get_child_menu,t)};e.thirdIsRealname=function(t){return r.default.post(s.thirdrealname,t)};e.getSelfmenu=function(t){return r.default.post(s.getSelfmenu_url,t)};e.editBankInfo=function(t){return r.default.post(s.editBankInfo_url,t)};e.getBanklist=function(t){return r.default.post(s.getbanklist_url,t)};e.bindBankcard=function(t){return r.default.post(s.bindbankcard_url,t)};e.getCard=function(t){return r.default.post(s.getcard_url,t)};e.bindRecommend=function(t){return r.default.post(s.bindRecommend_url,t)};e.getmyTeam=function(t){return r.default.post(s.getmyTeam_url,t)};e.getmyTeamDetail=function(t){return r.default.post(s.getmyTeamDetail_url,t)};e.getSVIPTips=function(t){return r.default.get(s.getSvip_Tips,t)};e.testApi=function(t){return r.default.post(s.gettest_url,t)};e.getOldBrand=function(t){return r.default.post(s.getoldBrand_url,t)};e.getNewBrand=function(t){return r.default.post(s.getNewBrand_url,t)};e.torenew=function(t){return r.default.post(s.renew_url,t)};e.toRealname=function(t){return r.default.post(s.toRealname_url,t)};e.getRealnameDetail=function(t){return r.default.post(s.getRealname_url)};e.isRealname=function(t){return r.default.post(s.is_realname_url)};e.info=function(t,e){var a=(0,i.default)({isPrompt:!0,load:!0},e);return r.default.get(s.userInfo,t,a)};e.assets=function(t,e){return r.default.get(s.assets,t,e)};e.bindMobile=function(t,e){return r.default.post(s.bindMobile,t,e)}},"1dff":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 引入uView全局scss变量文件 */.container[data-v-b82601cc]{padding:%?100?% %?60?%;min-height:100vh;background-color:#fff}.header[data-v-b82601cc]{margin-bottom:%?50?%}.header .title[data-v-b82601cc]{color:#191919;font-size:%?50?%}.header .sub-title[data-v-b82601cc]{margin-top:%?20?%;color:#b3b3b3;font-size:%?25?%}.form-item[data-v-b82601cc]{display:flex;padding:%?18?%;border-bottom:%?1?% solid #f3f1f2;margin-bottom:%?25?%;height:%?96?%}.form-item--input[data-v-b82601cc]{font-size:%?26?%;letter-spacing:%?1?%;flex:1;height:100%}.form-item--parts[data-v-b82601cc]{min-width:%?100?%;height:100%}.form-item .captcha[data-v-b82601cc]{height:100%}.form-item .captcha .image[data-v-b82601cc]{display:block;width:%?192?%;height:100%}.form-item .captcha-sms[data-v-b82601cc]{font-size:%?22?%;line-height:%?50?%;padding-right:%?20?%}.form-item .captcha-sms .activate[data-v-b82601cc]{color:#cea26a}.form-item .captcha-sms .un-activate[data-v-b82601cc]{color:#9e9e9e}.submit-button[data-v-b82601cc]{width:100%;height:%?86?%;margin-top:%?70?%;background:linear-gradient(90deg,#ecb53c,#ff9211);text-align:center;line-height:%?86?%;color:#fff;border-radius:%?80?%;box-shadow:0 10px 20px 0 rgba(0,0,0,.1);letter-spacing:%?5?%}',""]),t.exports=e},"721e":function(t,e,a){"use strict";var n=a("04b7"),i=a.n(n);i.a},"73d5":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",[t._v("绑定您的手机号")])],1),a("v-uni-view",{staticClass:"sub-title"},[a("v-uni-text",[t._v("为了更好的服务您，请绑定手机号")])],1)],1),a("v-uni-view",{staticClass:"submit-form"},[a("v-uni-view",{staticClass:"form-item"},[a("v-uni-input",{staticClass:"form-item--input",attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号码"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-input",{staticClass:"form-item--input",attrs:{type:"text",maxlength:"5",placeholder:"请输入图形验证码"},model:{value:t.captchaCode,callback:function(e){t.captchaCode=e},expression:"captchaCode"}}),a("v-uni-view",{staticClass:"form-item--parts"},[a("v-uni-view",{staticClass:"captcha",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCaptcha()}}},[a("v-uni-image",{staticClass:"image",attrs:{src:t.captcha.base64}})],1)],1)],1),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-input",{staticClass:"form-item--input",attrs:{type:"number",maxlength:"6",placeholder:"请输入短信验证码"},model:{value:t.smsCode,callback:function(e){t.smsCode=e},expression:"smsCode"}}),a("v-uni-view",{staticClass:"form-item--parts"},[a("v-uni-view",{staticClass:"captcha-sms",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handelSmsCaptcha()}}},[t.smsState?a("v-uni-text",{staticClass:"un-activate"},[t._v("重新发送("+t._s(t.times)+")秒")]):a("v-uni-text",{staticClass:"activate"},[t._v("获取验证码")])],1)],1)],1),a("v-uni-view",{staticClass:"submit-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSubmit()}}},[a("v-uni-text",[t._v("确认绑定")])],1)],1)],1)},i=[]},"84fc":function(t,e,a){"use strict";a.r(e);var n=a("dcb9"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"8c33":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.image=function(){return i.default.get(r.image,{},{load:!1})},e.sendSmsCaptcha=function(t){return i.default.post(r.sendSmsCaptcha,t,{load:!1})};var i=n(a("1601")),r={image:"captcha/image",sendSmsCaptcha:"captcha/sendSmsCaptcha"}},ca23:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.isPositiveInteger=e.isPhone=e.isNumber=e.isMobile=e.isInteger=e.isEmpty=e.isEmail=e.isDouble=void 0,a("498a"),a("ac1f"),a("00b4"),a("466d");e.isEmpty=function(t){return""==t.trim()};e.isPhone=function(t){return/^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/.test(t)};e.isMobile=function(t){return/^(1[3456789]\d{9})$/.test(t)};e.isEmail=function(t){if(null==t||""==t)return!1;var e=t.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);return null!=e};e.isNumber=function(t){return!(!i(t)&&!n(t))};e.isPositiveInteger=function(t){return/(^[0-9]\d*$)/.test(t)};var n=function(t){if(null==t||""==t)return!1;var e=t.match(/^[-\+]?\d+$/);return null!=e};e.isInteger=n;var i=function(t){if(null==t||""==t)return!1;var e=t.match(/^[-\+]?\d+(\.\d+)?$/);return null!=e};e.isDouble=i},dcb9:function(t,e,a){"use strict";a("7a82");var n=a("dbce").default,i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("a9e3");i(a("8d3b"));var r=n(a("0f67")),s=n(a("8c33")),u=n(a("ca23")),o={data:function(){return{isLoading:!1,captcha:{},smsState:!1,times:60,mobile:"",captchaCode:"",smsCode:""}},created:function(){this.getCaptcha()},methods:{getCaptcha:function(){var t=this;s.image().then((function(e){return t.captcha=e.data}))},handelSmsCaptcha:function(){this.isLoading||this.smsState||!this.formValidation(10)||(this.sendSmsCaptcha(),this.getCaptcha())},formValidation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=this;return!!(10!==t||e.validteMobile(e.mobile)&&e.validteCaptchaCode(e.captchaCode))&&!!(20!==t||e.validteMobile(e.mobile)&&e.validteSmsCode(e.smsCode))},validteMobile:function(t){return u.isEmpty(t)?(this.$toast("请先输入手机号"),!1):!!u.isMobile(t)||(this.$toast("请输入正确格式的手机号"),!1)},validteCaptchaCode:function(t){return!u.isEmpty(t)||(this.$toast("请先输入图形验证码"),!1)},validteSmsCode:function(t){return!u.isEmpty(t)||(this.$toast("请先输入短信验证码"),!1)},sendSmsCaptcha:function(){var t=this;t.isLoading=!0,s.sendSmsCaptcha({form:{captchaKey:t.captcha.key,captchaCode:t.captchaCode,mobile:t.mobile}}).then((function(e){t.$toast(e.message),t.timer()})).finally((function(){return t.isLoading=!1}))},timer:function(){var t=this;t.smsState=!0;var e=setInterval((function(){t.times=t.times-1,t.times<=0&&(t.smsState=!1,t.times=60,clearInterval(e))}),1e3)},handleSubmit:function(){!this.isLoading&&this.formValidation(20)&&this.onSubmitEvent()},onSubmitEvent:function(){var t=this;t.isLoading=!0,r.bindMobile({form:{smsCode:t.smsCode,mobile:t.mobile}}).then((function(e){t.$toast(e.message),setTimeout((function(){t.onNavigateBack(1)}),2e3)})).finally((function(){return t.isLoading=!1}))},onNavigateBack:function(t){uni.navigateBack({delta:Number(t||1)})}}};e.default=o}}]);