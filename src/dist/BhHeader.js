!function(e){function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}var t={};return o.m=e,o.c=t,o.p="",o(0)}({0:function(e,o,t){e.exports=t(129)},129:function(e,o,t){var n,r,s={};n=t(130),r=t(131),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(i.template=r),i.computed||(i.computed={}),Object.keys(s).forEach(function(e){var o=s[e];i.computed[e]=function(){return o}})},130:function(e,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var t=function(e){var o=$(e.$el);o.bhHeader({showAsideNav:e.hasSidemenu,logo:e.logo,title:e.slogon,isNavHide:e.hideNav,icons:e.icons,nav:e.navItems,dropMenu:e.dropMenus,userImage:e.userInfo.image,userInfo:e.userInfo}),o.on("headerRoleChange",function(o,t,n){e.$dispatch("role-change",o,t,n)})};o.default={props:{hasSidemenu:Boolean,logo:String,slogon:String,hideNav:{default:!1},navItems:Array,sideMenus:Object,dropMenus:Array,icons:Array,userInfo:{default:function(){return{image:"http://res.wisedu.com/scenes/public/images/demo/user1.png"}}}},ready:function(){var e=this;t(this),this.$watch("sideMenus",function(o,t){$.bhAsideNav.init(e.sideMenus)})}}},131:function(e,o){e.exports=" <header></header> "}});