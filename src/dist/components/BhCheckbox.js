!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BhCheckbox=t():e.BhCheckbox=t()}(this,function(){return function(e){function t(s){if(o[s])return o[s].exports;var c=o[s]={exports:{},id:s,loaded:!1};return e[s].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(11)},,,,,,,,,,,function(e,t,o){var s,c,l={};s=o(12),c=o(13),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;c&&(a.template=c),a.computed||(a.computed={}),Object.keys(l).forEach(function(e){var t=l[e];a.computed[e]=function(){return t}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{jqxObj:null}},props:{inGroup:{type:Boolean,default:!1},extra:Object,value:{default:""},ischeck:{default:!1},disabled:{default:!1,type:Boolean}},methods:{change:function(e){this.$dispatch("change",{value:this.value,checked:e.target.checked,el:this.$el,extra:this.extra})}}}},function(e,t){e.exports=" <div> <label v-if=inGroup :class='{\"bh-disabled\": disabled}'> <input type=checkbox :value=value @change.stop=change($event) v-model=ischeck :disabled=disabled> <i class=bh-choice-helper></i> <slot></slot> </label> <div v-else class=bh-checkbox> <label :class='{\"bh-disabled\": disabled}'> <input type=checkbox :value=value @change.stop=change($event) v-model=ischeck :disabled=disabled> <i class=bh-choice-helper></i> <slot></slot> </label> </div> </div> "}])});