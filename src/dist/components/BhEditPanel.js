!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.BhEditPanel=e():t.BhEditPanel=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){t.exports=n(113)},1:function(t,e,n){var o,i,r={};n(2),o=n(6),i=n(7),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(r).forEach(function(t){var e=r[t];s.computed[t]=function(){return e}})},2:function(t,e,n){var o=n(3);"string"==typeof o&&(o=[[t.id,o,""]]);n(5)(o,{});o.locals&&(t.exports=o.locals)},3:function(t,e,n){e=t.exports=n(4)(),e.push([t.id,"i[_v-ca80e6be]{float:left;margin-right:3px}.icon-right i[_v-ca80e6be]{float:right;margin-left:3px}",""])},4:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},5:function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=p[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(c(o.parts[r],e))}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(c(o.parts[r],e));p[o.id]={id:o.id,refs:1,parts:s}}}}function i(t){for(var e=[],n={},o=0;o<t.length;o++){var i=t[o],r=i[0],s=i[1],a=i[2],c=i[3],l={css:s,media:a,sourceMap:c};n[r]?n[r].parts.push(l):e.push(n[r]={id:r,parts:[l]})}return e}function r(t,e){var n=h(),o=m[m.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function c(t,e){var n,o,i;if(e.singleton){var r=b++;n=v||(v=a(e)),o=l.bind(null,n,r,!1),i=l.bind(null,n,r,!0)}else n=a(e),o=u.bind(null,n),i=function(){s(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function l(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function u(t,e){var n=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,b=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return o(n,e),function(t){for(var r=[],s=0;s<n.length;s++){var a=n[s],c=p[a.id];c.refs--,r.push(c)}if(t){var l=i(t);o(l,e)}for(var s=0;s<r.length;s++){var c=r[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete p[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},6:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{classObj:function(){var t={"bh-btn":!0,"bh-btn-small":this.small,"waves-effect":this.waves,"icon-right":"left"!==this.iconDir};return t["bh-btn-"+this.type]=!0,t}},props:{small:{type:Boolean,default:!0},waves:{type:Boolean,default:!0},type:{default:"default"},icon:String,iconDir:{default:"left"}}}},7:function(t,e){t.exports=' <button :class=classObj type=button _v-ca80e6be=""> <slot _v-ca80e6be=""></slot><i v-if=icon class="iconfont icon-{{icon}}" _v-ca80e6be=""></i> </button> '},113:function(t,e,n){var o,i,r={};n(114),o=n(116),i=n(117),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;i&&(s.template=i),s.computed||(s.computed={}),Object.keys(r).forEach(function(t){var e=r[t];s.computed[t]=function(){return e}})},114:function(t,e,n){var o=n(115);"string"==typeof o&&(o=[[t.id,o,""]]);n(5)(o,{});o.locals&&(t.exports=o.locals)},115:function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".scenes-ci-container-case[_v-715c3b4a]{border:1px solid #eee}.sc-title-borderLeft[_v-715c3b4a]{display:inline-block}.opt-text[_v-715c3b4a]{vertical-align:text-bottom}.expand-icon[_v-715c3b4a]{cursor:pointer}",""])},116:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),r=o(i),s=function(){$.bhPaperPileDialog.resetPageFooter()};e.default={props:{title:String,canDel:{default:!1,type:Boolean},canEdit:{default:!0,type:Boolean},isLock:{default:!1,type:Boolean},isEdit:{default:!1,type:Boolean},expand:{default:!1,type:Boolean},onEdit:Function,onSave:Function,onDel:Function,onCancel:Function},computed:{iconCls:function(){var t={"bh-ml-16":!0,icon:!0,iconfont:!0},e=this.expand?"icon-keyboardarrowup":"icon-keyboardarrowright";return t[e]=!0,t}},methods:{toggle:function(){this.expand=!this.expand,this.$nextTick(function(){s()})},setEdit:function(t){this.isEdit=t,this.$dispatch("status-change",t)},edit:function(){var t=this;this.onEdit&&this.onEdit.call(this.$parent).then(function(){t.setEdit(!0)})},save:function(){var t=this;this.onSave&&this.onSave.call(this.$parent).then(function(){t.setEdit(!1),s()})},del:function(){var t=this;this.onDel&&this.onDel.call(this.$parent).then(function(e){t.setEdit(!1)})},cancel:function(){var t=this;this.onCancel&&this.onCancel.call(this.$parent).then(function(){t.setEdit(!1),s()})}},components:{BhButton:r.default}}},117:function(t,e){t.exports=' <div class="scenes-ci-container-case bh-p-16 bh-border-h bh-border-v bh-mb-16" :class={&quot;bh-bg-success-5&quot;:!expand} _v-715c3b4a=""> <div class="sc-title-borderLeft bh-mr-32" :class={&quot;bh-mb-16&quot;:expand} bh-role-form-outline=title _v-715c3b4a=""> {{title}} <i v-if=isLock class="icon iconfont icon-lock bh-mh-16 bh-color-grey-3" _v-715c3b4a=""></i> </div> <div class=bh-pull-right v-if=!isEdit _v-715c3b4a=""> <a class="opt-text bh-mr-16" href=javascript:void(0) @click=del v-if="expand &amp;&amp; canDel" _v-715c3b4a="">删除</a> <a class="opt-text bh-mr-16" href=javascript:void(0) @click=edit v-if="expand &amp;&amp; canEdit" _v-715c3b4a="">修改</a> <i class=expand-icon :class=iconCls @click=toggle _v-715c3b4a=""></i> </div> <div v-if=expand _v-715c3b4a=""> <slot _v-715c3b4a=""></slot> </div> <div class="btns bh-mt-16" v-if=isEdit _v-715c3b4a=""> <bh-button type=primary @click=save _v-715c3b4a="">保存</bh-button> <bh-button class=bh-ml-16 @click=cancel _v-715c3b4a="">取消</bh-button> </div> </div> '}})});