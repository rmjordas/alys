(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement(_.default,{block:!0,text:"Example block"})};var r=i(n(0)),_=i(n(48));function i(e){return e&&e.__esModule?e:{default:e}}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.type=t.avatarSizes=t.lineHeights=t.fontSizes=t.colors=t.AVATAR_SIZE_DEFAULT=t.AVATAR_SIZE_SMALL=t.AVATAR_SIZE_SMALLER=t.TYPE_LINE_HEIGHT_PARAGRAPH=t.TYPE_LINE_HEIGHT_HEADING_6=t.TYPE_LINE_HEIGHT_HEADING_5=t.TYPE_LINE_HEIGHT_HEADING_4=t.TYPE_LINE_HEIGHT_HEADING_3=t.TYPE_LINE_HEIGHT_HEADING_2=t.TYPE_LINE_HEIGHT_HEADING_1=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_BLUE_GRAY=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_FILL=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_PRIMARY_FILL="#dce9ff";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_BLUE_GRAY="#b0caff";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;t.TYPE_LINE_HEIGHT_HEADING_1=1.5;t.TYPE_LINE_HEIGHT_HEADING_2=1.75;t.TYPE_LINE_HEIGHT_HEADING_3=1.625;t.TYPE_LINE_HEIGHT_HEADING_4=1.25;t.TYPE_LINE_HEIGHT_HEADING_5=1.125;t.TYPE_LINE_HEIGHT_HEADING_6=1;t.TYPE_LINE_HEIGHT_PARAGRAPH=1.25;t.AVATAR_SIZE_SMALLER=2.5;t.AVATAR_SIZE_SMALL=3.75;t.AVATAR_SIZE_DEFAULT=6.25;var r={primary:"#5887F9",primaryLight:"#60C3FF",primaryFill:"#dce9ff",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=r;var _={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=_;var i={h1:1.5,h2:1.75,h3:1.625,h4:1.25,h5:1.125,h6:1,p:1.25};t.lineHeights=i;var o={smaller:2.5,small:3.75,default:6.25};t.avatarSizes=o;var E={fontSizes:_,lineHeights:i};t.type=E;var a={colors:r,type:E,avatarSizes:o};t.default=a},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _.default}});var r,_=(r=n(49))&&r.__esModule?r:{default:r}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var r,_=(r=n(0))&&r.__esModule?r:{default:r},i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),o=n(39),E=n(43);function a(e,t){if(null==e)return{};var n,r,_=function(e,t){if(null==e)return{};var n,r,_={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(_[n]=e[n]);return _}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(_[n]=e[n])}return _}var l=(0,i.css)(["background-color:",";&&{cursor:default;}"],o.COLOR_GRAY_BLUE);function c(e){var t=e.icon,n=e.type,r=void 0===n?"default":n,o=e.iconOnly,E=void 0!==o&&o;if(!t)return null;var a=(0,i.default)(t).attrs(function(){return{dark:"link"!==r}}).withConfig({displayName:"Button__Icon",componentId:"lsnwxn-0"})(["margin-right:",";vertical-align:middle;&& svg{font-size:1.125em;}"],E?0:"1.125em");return _.default.createElement(a,null)}var u=i.default.div.attrs(function(e){return{children:e.text,role:"button"}}).withConfig({displayName:"Button__BasicButton",componentId:"lsnwxn-1"})(["box-sizing:border-box;border:0;outline:none;user-select:none;display:inline-block;text-align:center;vertical-align:middle;background:",";color:",";text-transform:uppercase;border-radius:0.375em;padding:1em;font-size:",";font-weight:500;overflow:hidden;position:relative;&:hover{cursor:pointer;}",""],function(e){return"link"===e.type?"transparent":o.COLOR_PRIMARY},function(e){return"link"===e.type?o.COLOR_PRIMARY:o.COLOR_WHITE},(0,E.styleLengths)(o.TYPE_FONT_SIZE_HEADING_6),function(e){return e.disabled&&l}),O=(0,i.default)(u).attrs(function(e){return{children:c({icon:e.icon,iconOnly:!0})}}).withConfig({displayName:"Button__IconOnlyButton",componentId:"lsnwxn-2"})(["border-radius:50%;"]),I=(0,i.default)(u).withConfig({displayName:"Button__WideButton",componentId:"lsnwxn-3"})(["display:flex;flex-direction:row;align-items:center;justify-content:center;background:",";color:",";border-radius:",";min-height:4em;margin:",";"],function(e){var t,n=e.type;return e.disabled?"link"===n?"transparent":o.COLOR_GRAY_BLUE:"link"===n?"transparent":(t=o.GRADIENT_PRIMARY,"linear-gradient(to right, ".concat(t,")"))},function(e){var t=e.type,n=e.disabled,r=e.theme.darkMode;return"link"===t?n?"inherit":r?"inherit":o.COLOR_PRIMARY:o.COLOR_WHITE},function(e){return e.block?0:"0.375em"},function(e){return e.block?0:"1.25em 1.875em"});function d(e){var t=e.basic,n=e.text,r=e.block,i=e.type,o=e.icon,E=e.iconOnly,l=a(e,["basic","text","block","type","icon","iconOnly"]);return l.disabled&&(l.onClick=void 0),E?_.default.createElement(O,Object.assign({icon:o},l)):t?_.default.createElement(u,Object.assign({text:n,type:i},l)):_.default.createElement(I,Object.assign({block:r,type:i},l),c({icon:o,type:i})," ",n)}d.defaultProps={basic:!1,block:!1,color:"default",icon:null,iconOnly:!1,type:"default",disabled:!1}}}]);
//# sourceMappingURL=20.fee5a373.chunk.js.map