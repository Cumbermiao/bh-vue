!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BhDatetime=t():e.BhDatetime=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}({0:function(e,t,o){e.exports=o(38)},38:function(e,t,o){var n,i,r={};n=o(39),i=o(40),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;i&&(a.template=i),a.computed||(a.computed={}),Object.keys(r).forEach(function(e){var t=r[e];a.computed[e]=function(){return t}})},39:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){if("range"!==e.jqxDateTimeInput("selectionMode"))return e.jqxDateTimeInput("getDate");var t=e.jqxDateTimeInput("getRange"),o=[];return o[0]=moment(t.from).format("YYYY-MM-DD HH:mm:ss"),o[1]=moment(t.to).format("YYYY-MM-DD HH:mm:ss"),o},n=function(e,t){var n=o(e);if("range"!==e.jqxDateTimeInput("selectionMode")){if(n==t)return;e.jqxDateTimeInput("setDate",t)}else{if(!$.isArray(t)||t.length<2)return;if(n[0]===t[0]&&n[1]===t[1])return;e.jqxDateTimeInput("setRange",t[0],t[1])}};t.default={data:function(){return{defaultOpts:{culture:"zh-CN",dateFormat:"yyyy-MM-dd",timeFormat:"yyyy-MM-dd hh:mm",showTime:!0,min:void 0,max:void 0,placeHolder:"",selectionMode:"default",showFooter:!1},jqxObj:null}},props:["value","options","disabled"],methods:{getText:function(){return $(this.$el).jqxDateTimeInput("getText")},setRange:function(e,t){return $(this.$el).jqxDateTimeInput("setRange",e,t)},setMinDate:function(e){$(this.$el).jqxDateTimeInput("setMinDate",e)},setMaxDate:function(e){$(this.$el).jqxDateTimeInput("setMaxDate",e)}},ready:function(){var e=this,t=e.options=$.extend({},e.defaultOpts,e.options),i=t.showTime?t.timeFormat:t.dateFormat,r=$(e.$el),a=e.jqxObj=r.jqxDateTimeInput({formatString:i,showTimeButton:t.showTime,min:t.min,max:t.max,culture:t.culture,placeHolder:t.placeHolder,selectionMode:t.selectionMode,showFooter:t.showFooter});n(a,this.value),r.jqxDateTimeInput({disabled:this.disabled}),a.on("change",function(t){e.value=o(a)}),e.$watch("value",function(e){n(a,e)}),e.$watch("disabled",function(e){r.jqxDateTimeInput({disabled:e})})},beforeDestroy:function(){var e=$(this.$el);e.jqxDateTimeInput("destroy")}}},40:function(e,t){e.exports=" <div></div> "}})});