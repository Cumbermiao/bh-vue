!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.BhChoose=t():e.BhChoose=t()}(this,function(){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(17)},,,,function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(o[a]=!0)}for(n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&o[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){function o(e,t){for(var r=0;r<e.length;r++){var o=e[r],n=h[o.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](o.parts[a]);for(;a<o.parts.length;a++)n.parts.push(c(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(c(o.parts[a],t));h[o.id]={id:o.id,refs:1,parts:i}}}}function n(e){for(var t=[],r={},o=0;o<e.length;o++){var n=e[o],a=n[0],i=n[1],s=n[2],c=n[3],l={css:i,media:s,sourceMap:c};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function a(e,t){var r=p(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?r.insertBefore(t,o.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function c(e,t){var r,o,n;if(t.singleton){var a=g++;r=b||(b=s(t)),o=l.bind(null,r,a,!1),n=l.bind(null,r,a,!0)}else r=s(t),o=d.bind(null,r),n=function(){i(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}function l(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,n);else{var a=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t){var r=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},f=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=u(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,v=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=f()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=n(e);return o(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var s=r[i],c=h[s.id];c.refs--,a.push(c)}if(e){var l=n(e);o(l,t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete h[c.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},,,,,,,,,,,,function(e,t,r){var o,n,a={};r(18),o=r(20),n=r(32),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(i.template=n),i.computed||(i.computed={}),Object.keys(a).forEach(function(e){var t=a[e];i.computed[e]=function(){return t}})},function(e,t,r){var o=r(19);"string"==typeof o&&(o=[[e.id,o,""]]);r(5)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,r){t=e.exports=r(4)(),t.push([e.id,".bh-choose{width:100%;overflow:hidden;border:1px solid #d8dcf0}.bh-choose .side{padding:5px;display:inline-block}.bh-choose .side.left{border-right:none}.bh-choose .side.left .search-box{background:rgba(63,81,181,.04)}.bh-choose .side.left .search-box i,.bh-choose .side.left .search-box input{border:none}.bh-choose .side.right{background:rgba(63,81,181,.04);position:relative;border-left:1px solid #d8dcf0}.bh-choose .side.right .title{padding:4px 0;text-indent:5px;border-bottom:none}.bh-choose .side.right .before{border:44px solid transparent;border-left:14px solid #d8dcf0;position:absolute;top:128px;left:0}.bh-choose .side.right .after{border:44px solid transparent;border-left:14px solid #fff;position:absolute;top:128px;left:-1px}.bh-choose .side.right .right-list{overflow:auto}",""])},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(21),a=o(n),i=r(26),s=o(i);t.default={data:function(){return{checkedRows:[],searchVal:"",operations:{title:"操作",width:100,items:[{title:"删除",name:"del",type:"link"}]}}},computed:{queryParams:function(){var e=this.leftParams||{};return e[this.localSearchField]=this.searchVal,e},columns:function(){var e=this;return e.leftCols?e.leftCols:[{dataField:"onlineDate",cellsRenderer:function(t,r,o,n){if(!e.leftcellsRenderer)return console.error("no leftcellsRenderer defined for bhChoose !"),"";var a=$(e.leftcellsRenderer(t,r,o,n));return $(a.children()[0]).addClass("gm-member-user"),a.prop("outerHTML")}}]},rcolumns:function(){var e=this;return e.rightCols?e.rightCols:[{dataField:"onlineDate",cellsRenderer:function(t,r,o,n){if(!e.rightcellsRenderer)return console.error("no rightcellsRenderer defined for bhChoose !"),"";var a=$(e.rightcellsRenderer(t,r,o,n));return $(a.children()[0]).addClass("gm-member-user"),a.prop("outerHTML")}}]}},props:{id:{default:"id"},height:{default:313},leftWidth:{default:"50%"},rightWidth:{default:"50%"},localSearchField:{default:"keyword"},pageNumberField:{default:"pageNumber"},pageSizeField:{default:"pageSize"},placeholder:{default:"输入关键字"},rightTitle:{default:"已选择"},leftSourceUrl:String,leftSourceAction:String,leftCols:Array,rightSourceUrl:String,localdata:Array,rightSourceAction:String,rightCols:Array,leftParams:Object,rightParams:Object,type:{type:String,default:"post"},showHeader:{type:Boolean,default:!1},showSelectedTip:{type:Boolean,default:!0},leftcellsRenderer:Function,rightcellsRenderer:Function,nicescroll:{type:Boolean,default:!0},callbacks:Object},methods:{reload:function(e){"left"!==e&&this.$refs.bhchooserighttable.render(),"right"!==e&&this.$refs.bhchooselefttable.render()},onCheckChange:function(e,t){if(t){var r=this;e?r.$refs.bhchooserighttable.addRow(t):r.$refs.bhchooserighttable.deleteRowById(t[this.id]),this.$dispatch("change")}},leftListRendered:function(){var e=this;e.$dispatch("left-ready"),setTimeout(function(){e.$refs.bhchooselefttable.setChecked(e.$refs.bhchooserighttable.getTotalRecords(),e.id)},0)},rightListRendered:function(){this.nicescroll&&$(this.$el).find(".right-list").niceScroll()},search:function(){this.$refs.bhchooselefttable.render()},getChecked:function(){return this.$refs.bhchooserighttable.getTotalRecords()},checkById:function(e){return this.$refs.bhchooselefttable.checkById(e)},uncheck:function(e){this.uncheckById(e[this.id])},uncheckById:function(e){return this.$refs.bhchooselefttable.uncheckById(e)},addItem:function(e){return this.$refs.bhchooselefttable.addRow(e)},addAndCheck:function(e){this.addItem(e),this.$refs.bhchooselefttable.refresh(),this.checkById(e[this.id])}},components:{BhSearch:a.default,BhDatatable:s.default}}},function(e,t,r){var o,n,a={};r(22),o=r(24),n=r(25),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(i.template=n),i.computed||(i.computed={}),Object.keys(a).forEach(function(e){var t=a[e];i.computed[e]=function(){return t}})},function(e,t,r){var o=r(23);"string"==typeof o&&(o=[[e.id,o,""]]);r(5)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,r){t=e.exports=r(4)(),t.push([e.id,"@icon-color: #999;.search-box[_v-78ff1161]{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative}.search-box input[_v-78ff1161]{text-indent:33px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:auto}.search-box .icon-search[_v-78ff1161]{left:0;position:absolute;padding:5px 6px;color:@icon-color}.search-box a[_v-78ff1161]{border:none;margin-left:-1px}",""])},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e?e.trim():""};t.default={data:function(){return{jqxObj:null}},props:{value:{type:String,default:""},showButton:{type:Boolean,default:!0},source:{default:function(){return[]}},placeholder:{default:"输入要搜索的关键字"},btnText:{default:"搜索"},maxlength:{type:Number,default:20},minlength:{type:Number,default:0}},methods:{getValue:function(){return r(this.value)},search:function(){this.$dispatch("search",r(this.value))}},ready:function(){var e=$(this.$el);this.jqxObj=e.jqxInput({source:this.source}),this.$nextTick(function(){e.find("input.jqx-input-group-addon").css("border-right-width","1px")})},beforeDestroy:function(){var e=$(this.$el);e.jqxInput("destroy")}}},function(e,t){e.exports=' <div class=search-box _v-78ff1161=""> <input type=text v-model=value class=bh-form-control @keyup.enter=search :maxlength=maxlength :minlength=minlength :placeholder=placeholder _v-78ff1161=""> <i class="iconfont icon-search" _v-78ff1161=""></i> <a v-if=showButton class="bh-btn bh-btn-primary bh-btn-small j-search-btn" href=javascript:void(0); @click=search _v-78ff1161="">{{btnText}}</a> </div> '},function(e,t,r){var o,n,a={};o=r(27),n=r(31),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports.default);var i="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;n&&(i.template=n),i.computed||(i.computed={}),Object.keys(a).forEach(function(e){var t=a[e];i.computed[e]=function(){return t}})},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(28),a=o(n),i=34,s=function(e){var t=e.callbacks,r={dataType:"json",type:e.queryType,id:e.id};return e.url?(r.url=e.url,r.root=e.root):r.localdata=e.localdata||[],new $.jqx.dataAdapter(r,{contentType:e.contentType,formatData:function(t){return e.pageable&&(t[e.pageNumberField]=t.pagenum+1,t[e.pageSizeField]=t.pagesize),"pagenum"!==e.pageNumberField&&delete t.pagenum,"pagesize"!==e.pageSizeField&&delete t.pagesize,$.extend(t,e.queryParams),(0,a.default)(t)},beforeSend:function(e){t&&t.beforeSend&&t.beforeSend(e)},downloadComplete:function(e,o,n){t&&t.downloadComplete&&t.downloadComplete(e,o,r)},loadError:function(e,r,o){throw t&&t.loadError&&t.loadError(r,o),new Error("loadError:"+o.toString())}})},c=function(e){var t=$(e.$el);return{text:"checkbox",dataField:"checkbox",width:i+"px",renderer:function(e,t,r){var o='<div class="selectAllCheckboxFlag bh-checkbox bh-mh-8"><label><input type="checkbox" value=""><i class="bh-choice-helper"></i></label>';return o},rendered:function(e,r,o){var n=this;return e.on("click","input",function(e){var r=t.find("table"),o=r.find("div.bh-checkbox"),a=$(n);a.hasClass("selectFlag")?(a.prop("checked",!1).removeClass("selectFlag"),o.each(function(){$(this).find("input").prop("checked",!1)})):(a.prop("checked",!0).addClass("selectFlag"),o.each(function(){$(this).find("input").prop("checked",!0)})),e.stopPropagation()}),!0},cellsRenderer:function(t,r,o,n){var a='<div class="bh-checkbox"><label><input type="checkbox" @checked value="" data-id="@dataId" data-row=@dataRow><i class="bh-choice-helper"></i></label>';return a=a.replace("@dataId",n[e.id]).replace("@dataRow",t),a=n.checkbox?a.replace("@checked","checked"):a.replace("@checked","")}}},l=function(e,t){if(!e.hasClass("selectAllCheckboxFlag")){var r=t.find("div.selectAllCheckboxFlag").find("input"),o=t.find("table"),n=o.find("div.bh-checkbox");if(e.prop("checked")){var a=!0;n.find("input").each(function(){$(this).prop("checked")||(a=!1)}),a?r.prop("checked",!0).addClass("selectFlag"):r.prop("checked",!1).removeClass("selectFlag")}else r.prop("checked",!1).removeClass("selectFlag")}},d=function(e,t){return"button"===t.type?"<button data-name='"+t.name+"' data-row='"+e+"' class='opt-button'> style='padding: 0 5px;'"+t.title+"</button>":"<a href='javascript:void(0)' data-name='"+t.name+"' data-row='"+e+"' class='opt-button' style='padding: 0 5px;'>"+t.title+"</a>"},h=function(e){var t=e.operations,r=t.title;return{text:r,cellsAlign:"center",align:"center",columnType:"none",editable:!1,sortable:!1,dataField:null,cellsRenderer:function(e,r,o){var n=t.items,a="";return $.each(n,function(t,r){a+=d(e,r)}),a}}},u=function(e){return e.jqxDataTable("getSelection")},f=function(e){return e.jqxDataTable("getRows")},p=function(e){e.checkable&&$(e.$el).find("div.bh-checkbox input[data-id]").each(function(){var t=$(this);t[0].checked=$.inArray(t.attr("data-id"),e.checkedIds)>-1})};t.default={data:function(){return{checkedIds:[]}},props:{id:{default:"id"},width:{default:"100%"},height:{default:"auto"},showHeader:{default:!0,type:Boolean},checkable:{default:!1,type:Boolean},pageable:{default:!0,type:Boolean},pageNumberField:{default:"pageNumber"},pageSizeField:{default:"pageSize"},sortable:{default:!0,type:Boolean},reorder:{default:!1,type:Boolean},resize:{default:!1,type:Boolean},url:String,localdata:Array,root:String,columns:Array,contentType:{default:"application/json",type:String},queryType:{default:"GET",type:String},enableBrowserSelection:{default:!0},selectionMode:{default:"singleRow"},pagerMode:{type:String,default:"advanced"},queryParams:Object,selectedRows:Array,checkedRows:Array,operations:Object,callbacks:{type:Object,default:function(){return{}}}},methods:{render:function(){$(this.$el).jqxDataTable("render")},refresh:function(){$(this.$el).jqxDataTable("refresh")},getTotalRecords:function(){return $(this.$el).jqxDataTable("getRows")},getRowById:function(e){for(var t=this.id,r=this.getTotalRecords(),o=0,n=r.length;o<n;o++)if(r[o][t]==e)return r[o];return null},getChecked:function(){return this.checkedRows},setChecked:function(e,t){this.checkedRows=$.extend(!0,[],e);var r=this.checkedIds=[];$.each(e,function(e,o){return r.push(o[t])}),p(this)},selectRow:function(e){var t=$(this.$el);t.jqxDataTable("selectRow",e)},addRow:function(e){$(this.$el).jqxDataTable("addRow",null,e)},deleteRowById:function(e){var t=this.id,r=$(this.$el),o=f(r);$.each(o,function(o,n){if(n[t]==e)return r.jqxDataTable("deleteRow",o),!1})},checkById:function(e){var t=this,r=t.getRowById(e);return r?void($.inArray(e,t.checkedIds)>-1||(t.checkedRows.push(r),t.checkedIds.push(e),t.$dispatch("check-change",!0,r))):null},uncheckById:function(e){var t=this,r=this.id;if($.inArray(e,t.checkedIds)===-1){var o={};return o[r]=e,void t.$dispatch("check-change",!1,o)}$.each(t.checkedRows,function(o,n){if(n[r]==e){var a=t.checkedRows.splice(o,1)[0];return t.checkedIds.splice(o,1),p(t),t.$dispatch("check-change",!1,a),!1}})},clear:function(){var e=$(this.$el);e.jqxDataTable("clear")}},ready:function(){var e=this,t=$(e.$el);e.checkable&&e.columns.unshift(c(e)),e.operations&&e.operations.items&&e.operations.items.length>0&&e.columns.push(h(e)),e.jqxObj=t.jqxDataTable({width:e.width,height:e.height,showHeader:e.showHeader,pageable:e.pageable,sortable:e.sortable,columnsReorder:e.reorder,columnsResize:e.resize,enableBrowserSelection:e.enableBrowserSelection,selectionMode:e.selectionMode,pagerMode:e.pagerMode,source:s(e),columns:e.columns,serverProcessing:!0,rendered:function(){p(e),e.$dispatch("rendered")},ready:function(){var r=t,o=r.find("table");if(e.checkable){var n=o.find("div.bh-checkbox"),a=!0;n.each(function(){var e=$(this);if(0===e.find("input[checked]").length)return a=!1,!1});var i=r.find("div.selectAllCheckboxFlag").find("input");a?i.prop("checked",!0).addClass("selectFlag"):i.prop("checked",!1).removeClass("selectFlag"),t.on("click","div.bh-checkbox",function(r){var o=$(r.currentTarget).find("input"),n=o.data("id")+"",a=o[0].checked;l($(this).find("input"),t),a?e.checkById(n):e.uncheckById(n)})}e.selectedRows=u(t),t.on("rowSelect",function(r){e.selectedRows=u(t)}),t.on("click",".opt-button",function(){var r=$(this),o=r.attr("data-row"),n=r.attr("data-name"),a=f(t);e.$dispatch(n,a[o])}),e.$dispatch("ready")}})},destory:function(){var e=$(this.$el);e.off("click","div.bh-checkbox"),e.off("rowSelect"),e.off("click",".opt-button"),e.jqxDataTable("destroy")}}},function(e,t,r){e.exports={default:r(29),__esModule:!0}},function(e,t,r){var o=r(30),n=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},function(e,t){var r=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(e,t){e.exports=" <div class=bh-datatable></div> "},function(e,t){e.exports=' <div class=bh-choose> <div class="side left bh-pull-left" :style="{width: leftWidth}"> <bh-search :show-button=false :value.sync=searchVal :placeholder=placeholder @search=search class=bh-mb-8></bh-search> <div class=left-list> <bh-datatable v-ref:bhchooselefttable :id=id :checkable=true :height=height :checked-rows.sync=checkedRows :show-header=showHeader :url=leftSourceUrl :page-number-field=pageNumberField :page-size-field=pageSizeField selection-mode=default :root=leftSourceAction :columns=columns :query-type=type :query-params=queryParams class=transparentGrid @rendered=leftListRendered @check-change=onCheckChange :callbacks=callbacks> </bh-datatable> </div> </div> <div class="side right bh-pull-left" :style="{width: rightWidth}"> <div class=before></div> <div class=title>{{rightTitle}}</div> <div class=right-list :style=\'{height: height + "px"}\'> <bh-datatable v-ref:bhchooserighttable :id=id :url=rightSourceUrl :localdata=localdata :pageable=false :show-header=showHeader :root=rightSourceAction :columns=rcolumns :query-type=type :query-params=rightParams :operations=operations class=transparentGrid @del=uncheck @rendered=rightListRendered> </bh-datatable> </div> <div class=after></div> </div> </div> '}])});