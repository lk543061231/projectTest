(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ChooseAddress/cityList"],{"0ab1":function(t,e,n){},"2be0":function(t,e,n){"use strict";n.r(e);var r=n("65ba"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"3e57":function(t,e,n){},"504e":function(t,e,n){"use strict";var r=n("3e57"),i=n.n(r);i.a},"65ba":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),i=u(n("0601")),o=u(n("3c42"));function u(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,r,i,o,u){try{var c=t[o](u),a=c.value}catch(s){return void n(s)}c.done?e(a):Promise.resolve(a).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(t){c(o,r,i,u,a,"next",t)}function a(t){c(o,r,i,u,a,"throw",t)}u(void 0)}))}}var s=[],f=!1,l=0,d={data:function(){return{keyChanged:!1,keywordCurrentName:"",keywordCurrent:0,renderList:[],list:[]}},onPageScroll:function(t){if(!f)for(var e=t.scrollTop,n=0;n<s.length;n++)e>s[n]&&(this.keywordCurrent=n)},watch:{keywordCurrent:function(t){var e=this;this.keywordCurrentName=this.renderList[t].key,l&&clearTimeout(l),this.keyChanged=!0,l=setTimeout((function(){e.keyChanged=!1}),500)}},onLoad:function(t){this.initList()},methods:{chooseCity:function(e){var n=getCurrentPages(),r=n[n.length-2].$vm;r.city=e.label,r.searchList(),t.navigateBack()},initList:function(){var t=this,e=o.default,n={};e.forEach((function(t){var e=i.default.getLetter(t.label).firstletter;n[e]||(n[e]=[]),n[e].push(t)}));var r=[];for(var u in n)r.push(u);r.sort();var c=[];r.forEach((function(t){for(var e in n)e==t&&c.push({key:e,list:n[e]})})),this.renderList=c,setTimeout((function(){t.calcAnchor()}),500)},calcAnchor:function(){var t=this,e=this.renderList;this.systemInfo.navigationBarHeight,this.systemInfo.statusBarHeight;e.forEach(function(){var e=a(r.default.mark((function e(n){var i;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getElSize("keyword"+n.key);case 2:i=e.sent,n.top=i.top,s.push(i.top);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onKeywordClick:function(e){f=!0,setTimeout((function(){f=!1}),500),this.keywordCurrent=e,t.pageScrollTo({scrollTop:this.renderList[e].top})},getElSize:function(e){return new Promise((function(n){var r=t.createSelectorQuery().select("#"+e);r.boundingClientRect((function(t){n(t)})).exec()}))}}};e.default=d}).call(this,n("543d")["default"])},"765b":function(t,e,n){"use strict";var r=n("0ab1"),i=n.n(r);i.a},"94cc":function(t,e,n){"use strict";n.r(e);var r=n("b65e"),i=n("2be0");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("765b"),n("504e");var u,c=n("f0c5"),a=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"c28632dc",null,!1,r["a"],u);e["default"]=a.exports},b65e:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},c0eb:function(t,e,n){"use strict";(function(t){n("1a7b");r(n("66fd"));var e=r(n("94cc"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])}},[["c0eb","common/runtime","common/vendor"]]]);