(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{119:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(o.default,{text:"Secondary",color:"secondary"})};var n=l(r(0)),o=l(r(51));function l(e){return e&&e.__esModule?e:{default:e}}},35:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.fontSizes=t.colors=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;var n={primary:"#5887F9",primaryLight:"#60C3FF",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=n;var o={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=o;var l={colors:n,type:{fontSizes:o}};t.default=l},36:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(37))&&n.__esModule?n:{default:n}},37:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=_;var n,o=(n=r(0))&&n.__esModule?n:{default:n},l=r(39);function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _(e){var t=e.fontSize,r=e.viewBox,n=e.children,_=a(e,["fontSize","viewBox","children"]);return o.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,l.styleLengths)(t),height:(0,l.styleLengths)(t)},_),n)}_.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},38:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(35)},47:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(48))&&n.__esModule?n:{default:n}},48:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n=_(r(0)),o=r(35),l=r(38),a=_(r(36));function _(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function i(e){var t=e.dark,r=e.color,_=u(e,["dark","color"]),i={fill:"none",stroke:(0,l.iconDark)(t,o.COLOR_WHITE,o.colors[r]),strokeLinecap:"round",strokeMiterlimit:10};return n.default.createElement(a.default,Object.assign({viewBox:"0 0 19 19"},_),n.default.createElement("g",{id:"new-icon",transform:"translate(0 0)"},n.default.createElement("line",Object.assign({},i,{id:"line",x1:"18",transform:"translate(0.5 9.5)"})),n.default.createElement("line",Object.assign({},i,{id:"line-2","data-name":"line",y1:"18",transform:"translate(9.5 0.5)"}))))}i.defaultProps={dark:!1,color:"dark"}},51:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(52))&&n.__esModule?n:{default:n}},52:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var n=_(r(0)),o=_(r(1)),l=r(35),a=_(r(47));function _(e){return e&&e.__esModule?e:{default:e}}var u=o.default.div.withConfig({displayName:"Pill__Wrapper",componentId:"sc-1rpzq4t-0"})(["display:inline-block;font-size:","px;font-weight:500;padding:0.5em 0.75em;border-radius:0.375em;background-color:",";color:",";text-transform:uppercase;"],l.TYPE_FONT_SIZE_HEADING_6,function(e){var t=e.color;return l.colors[t]},l.COLOR_WHITE),i=(0,o.default)(a.default).attrs(function(){return{fontSize:"".concat(l.TYPE_FONT_SIZE_HEADING_6,"px")}}).withConfig({displayName:"Pill__AddIcon",componentId:"sc-1rpzq4t-1"})(["&& line{stroke:",";}"],l.COLOR_WHITE);function f(e){var t=e.text,r=e.color,o=e.add;return n.default.createElement(u,{color:r},o?n.default.createElement(i,null):t)}f.defaultProps={color:"primary",add:!1}}}]);
//# sourceMappingURL=52.7077a4d2.chunk.js.map