(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(99)},101:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(102))&&n.__esModule?n:{default:n}},102:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=O;var n=u(r(0)),a=r(100),_=u(r(97));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},_=Object.keys(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function O(e){var t=e.dark,r=l(e,["dark"]),u={fill:"none",stroke:(0,a.iconDark)(t),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10};return n.default.createElement(_.default,Object.assign({viewBox:"0 0 21.7 19.4"},r),n.default.createElement("g",{id:"mentor-icon",transform:"translate(0 0)"},n.default.createElement("path",Object.assign({},u,{id:"path",d:"M10.3,13.6v3l-5,2.3"})),n.default.createElement("path",Object.assign({},u,{id:"path-2","data-name":"path",d:"M16.1,13.6v3l5.1,2.3"})),n.default.createElement("path",Object.assign({},u,{id:"path-3","data-name":"path",d:"M15,14.1a5.2,5.2,0,0,0,3.5-4.9V4.6A4.055,4.055,0,0,0,14.4.5H12.2A4.14,4.14,0,0,0,8,4.6V9.2a5.2,5.2,0,0,0,3.5,4.9"})),n.default.createElement("path",Object.assign({},u,{id:"path-4","data-name":"path",d:"M4.6,11.3v2.4L.5,15.6"})),n.default.createElement("path",Object.assign({},u,{id:"path-5","data-name":"path",d:"M6.9.5H6.1A3.372,3.372,0,0,0,2.7,3.9V7.6a4.249,4.249,0,0,0,2.8,4"}))))}O.defaultProps={dark:!1}},44:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(a.default,null)};var n=_(r(0)),a=_(r(101));function _(e){return e&&e.__esModule?e:{default:e}}},97:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(98))&&n.__esModule?n:{default:n}},98:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n,a=(n=r(0))&&n.__esModule?n:{default:n},_=r(7);function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},_=Object.keys(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(n=0;n<_.length;n++)r=_[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function l(e){var t=e.fontSize,r=e.viewBox,n=e.children,l=u(e,["fontSize","viewBox","children"]);return a.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,_.styleLengths)(t),height:(0,_.styleLengths)(t)},l),n)}l.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},99:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;var n={colors:{primary:"#5887F9",primaryLight:"#60C3FF",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"},type:{fontSizes:{h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14}}};t.default=n}}]);
//# sourceMappingURL=29.5dfced98.chunk.js.map