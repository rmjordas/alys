(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{207:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return r.default.createElement(n.default,null)};var r=E(_(0)),n=E(_(329));function E(e){return e&&e.__esModule?e:{default:e}}},329:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var r,n=(r=_(330))&&r.__esModule?r:{default:r}},330:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=l(_(0)),n=_(40),E=_(43),a=l(_(41));function l(e){return e&&e.__esModule?e:{default:e}}function O(e,t){if(null==e)return{};var _,r,n=function(e,t){if(null==e)return{};var _,r,n={},E=Object.keys(e);for(r=0;r<E.length;r++)_=E[r],t.indexOf(_)>=0||(n[_]=e[_]);return n}(e,t);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(e);for(r=0;r<E.length;r++)_=E[r],t.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call(e,_)&&(n[_]=e[_])}return n}function o(e){var t=e.dark,_=e.color,l=O(e,["dark","color"]),o={fill:"none",stroke:(0,E.iconDark)(t,n.COLOR_WHITE,_?n.colors[_]:"currentColor"),strokeMiterlimit:10};return r.default.createElement(a.default,Object.assign({viewBox:"0 0 17 22"},l),r.default.createElement("g",{id:"tablet-icon",transform:"translate(0 0)"},r.default.createElement("path",Object.assign({},o,{id:"path",d:"M15.5,21.5H1.5a.945.945,0,0,1-1-1V1.5a.945.945,0,0,1,1-1h14a.945.945,0,0,1,1,1v19A.945.945,0,0,1,15.5,21.5Z"})),r.default.createElement("line",Object.assign({},o,{id:"line",x2:"16",transform:"translate(1 4.5)"})),r.default.createElement("line",Object.assign({},o,{id:"line-2","data-name":"line",strokeLinecap:"round",x2:"2",transform:"translate(7.5 2.5)"})),r.default.createElement("circle",Object.assign({},o,{id:"ellipse",cx:"0.5",cy:"0.5",r:"0.5",transform:"translate(8 18.5)"}))))}o.defaultProps={dark:!1}},40:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.type=t.avatarSizes=t.lineHeights=t.fontSizes=t.colors=t.AVATAR_SIZE_DEFAULT=t.AVATAR_SIZE_SMALL=t.AVATAR_SIZE_SMALLER=t.TYPE_LINE_HEIGHT_PARAGRAPH=t.TYPE_LINE_HEIGHT_HEADING_6=t.TYPE_LINE_HEIGHT_HEADING_5=t.TYPE_LINE_HEIGHT_HEADING_4=t.TYPE_LINE_HEIGHT_HEADING_3=t.TYPE_LINE_HEIGHT_HEADING_2=t.TYPE_LINE_HEIGHT_HEADING_1=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_SHADOW=t.COLOR_BLACK_ALPHA20=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_BLUE_GRAY=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_FILL=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_PRIMARY_FILL="#dce9ff";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_BLUE_GRAY="#b0caff";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.COLOR_BLACK_ALPHA20="rgba(0, 0, 0, 0.2)";t.COLOR_SHADOW="rgba(0, 0, 0, 0.2)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;t.TYPE_LINE_HEIGHT_HEADING_1=1.5;t.TYPE_LINE_HEIGHT_HEADING_2=1.75;t.TYPE_LINE_HEIGHT_HEADING_3=1.625;t.TYPE_LINE_HEIGHT_HEADING_4=1.25;t.TYPE_LINE_HEIGHT_HEADING_5=1.125;t.TYPE_LINE_HEIGHT_HEADING_6=1;t.TYPE_LINE_HEIGHT_PARAGRAPH=1.25;t.AVATAR_SIZE_SMALLER=2.5;t.AVATAR_SIZE_SMALL=3.75;t.AVATAR_SIZE_DEFAULT=6.25;var r={primary:"#5887F9",primaryLight:"#60C3FF",primaryFill:"#dce9ff",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=r;var n={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=n;var E={h1:1.5,h2:1.75,h3:1.625,h4:1.25,h5:1.125,h6:1,p:1.25};t.lineHeights=E;var a={smaller:2.5,small:3.75,default:6.25};t.avatarSizes=a;var l={fontSizes:n,lineHeights:E};t.type=l;var O={colors:r,type:l,avatarSizes:a};t.default=O},41:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.default}});var r,n=(r=_(42))&&r.__esModule?r:{default:r}},42:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var r,n=(r=_(0))&&r.__esModule?r:{default:r},E=_(44);function a(e,t){if(null==e)return{};var _,r,n=function(e,t){if(null==e)return{};var _,r,n={},E=Object.keys(e);for(r=0;r<E.length;r++)_=E[r],t.indexOf(_)>=0||(n[_]=e[_]);return n}(e,t);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(e);for(r=0;r<E.length;r++)_=E[r],t.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call(e,_)&&(n[_]=e[_])}return n}function l(e){var t=e.fontSize,_=e.viewBox,r=e.children,l=a(e,["fontSize","viewBox","children"]);return n.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:_,focusable:!1,width:(0,E.styleLengths)(t),height:(0,E.styleLengths)(t)},l),r)}l.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},43:function(e,t,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.COLOR_WHITE,_=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.COLOR_DARK;return e?t:_};var r=_(40)}}]);
//# sourceMappingURL=104.0eba85c9.chunk.js.map