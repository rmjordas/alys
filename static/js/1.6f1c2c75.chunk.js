(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{117:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(f=(0,n.useState)("Mentor"),c=2,function(e){if(Array.isArray(e))return e}(f)||function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(i){a=!0,l=i}finally{try{n||null==u.return||u.return()}finally{if(a)throw l}}return r}(f,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),t=e[0],r=e[1];var f,c;return n.default.createElement(n.Fragment,null,n.default.createElement("p",null,"Selected: ",n.default.createElement("strong",null,t)),n.default.createElement(a.default,{value:t,onChange:function(e,t){return r(t)}},n.default.createElement(l.default,{value:"Home",icon:n.default.createElement(o.default,null)}),n.default.createElement(l.default,{value:"Mentor",icon:n.default.createElement(u.default,null)}),n.default.createElement(l.default,{value:"Comment",icon:n.default.createElement(i.default,null)}),n.default.createElement(l.default,{value:"Settings",icon:n.default.createElement(d.default,null)})))};var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=f(r(245)),l=f(r(83)),o=f(r(85)),u=f(r(43)),i=f(r(73)),d=f(r(87));function f(e){return e&&e.__esModule?e:{default:e}}},245:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(246))&&n.__esModule?n:{default:n}},246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.children,r=e.value,n=e.onChange,l=a.Children.map(t,function(e,t){if(!(0,a.isValidElement)(e))return null;var l=void 0===e.props.value?t:e.props.value;return(0,a.cloneElement)(e,{selected:l===r,value:l,onChange:n})});return a.default.createElement(u,null,l)};var n,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),l=(n=r(1))&&n.__esModule?n:{default:n},o=r(38);var u=l.default.div.withConfig({displayName:"BottomBar__Wrapper",componentId:"sc-1ghdcrz-0"})(["display:flex;justify-content:space-around;align-items:center;width:100%;overflow-x:auto;max-height:5.3125em;background:",";@media (min-width:34em){justify-content:center;}"],o.COLOR_WHITE)},38:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.type=t.avatarSizes=t.lineHeights=t.fontSizes=t.colors=t.AVATAR_SIZE_DEFAULT=t.AVATAR_SIZE_SMALL=t.AVATAR_SIZE_SMALLER=t.TYPE_LINE_HEIGHT_PARAGRAPH=t.TYPE_LINE_HEIGHT_HEADING_6=t.TYPE_LINE_HEIGHT_HEADING_5=t.TYPE_LINE_HEIGHT_HEADING_4=t.TYPE_LINE_HEIGHT_HEADING_3=t.TYPE_LINE_HEIGHT_HEADING_2=t.TYPE_LINE_HEIGHT_HEADING_1=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_SHADOW=t.COLOR_BLACK_ALPHA20=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_BLUE_GRAY=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_FILL=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_PRIMARY_FILL="#dce9ff";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_BLUE_GRAY="#b0caff";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.COLOR_BLACK_ALPHA20="rgba(0, 0, 0, 0.2)";t.COLOR_SHADOW="rgba(0, 0, 0, 0.2)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;t.TYPE_LINE_HEIGHT_HEADING_1=1.5;t.TYPE_LINE_HEIGHT_HEADING_2=1.75;t.TYPE_LINE_HEIGHT_HEADING_3=1.625;t.TYPE_LINE_HEIGHT_HEADING_4=1.25;t.TYPE_LINE_HEIGHT_HEADING_5=1.125;t.TYPE_LINE_HEIGHT_HEADING_6=1;t.TYPE_LINE_HEIGHT_PARAGRAPH=1.25;t.AVATAR_SIZE_SMALLER=2.5;t.AVATAR_SIZE_SMALL=3.75;t.AVATAR_SIZE_DEFAULT=6.25;var n={primary:"#5887F9",primaryLight:"#60C3FF",primaryFill:"#dce9ff",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=n;var a={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=a;var l={h1:1.5,h2:1.75,h3:1.625,h4:1.25,h5:1.125,h6:1,p:1.25};t.lineHeights=l;var o={smaller:2.5,small:3.75,default:6.25};t.avatarSizes=o;var u={fontSizes:a,lineHeights:l};t.type=u;var i={colors:n,type:u,avatarSizes:o};t.default=i},39:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(40))&&n.__esModule?n:{default:n}},40:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var n,a=(n=r(0))&&n.__esModule?n:{default:n},l=r(42);function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function u(e){var t=e.fontSize,r=e.viewBox,n=e.children,u=o(e,["fontSize","viewBox","children"]);return a.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,l.styleLengths)(t),height:(0,l.styleLengths)(t)},u),n)}u.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},41:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(38)},43:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(44))&&n.__esModule?n:{default:n}},44:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var n=u(r(0)),a=r(38),l=r(41),o=u(r(39));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e){var t=e.dark,r=e.color,u=i(e,["dark","color"]),d={fill:"none",stroke:(0,l.iconDark)(t,a.COLOR_WHITE,r?a.colors[r]:"currentColor"),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10};return n.default.createElement(o.default,Object.assign({viewBox:"0 0 21.7 19.4"},u),n.default.createElement("g",{id:"mentor-icon",transform:"translate(0 0)"},n.default.createElement("path",Object.assign({},d,{id:"path",d:"M10.3,13.6v3l-5,2.3"})),n.default.createElement("path",Object.assign({},d,{id:"path-2","data-name":"path",d:"M16.1,13.6v3l5.1,2.3"})),n.default.createElement("path",Object.assign({},d,{id:"path-3","data-name":"path",d:"M15,14.1a5.2,5.2,0,0,0,3.5-4.9V4.6A4.055,4.055,0,0,0,14.4.5H12.2A4.14,4.14,0,0,0,8,4.6V9.2a5.2,5.2,0,0,0,3.5,4.9"})),n.default.createElement("path",Object.assign({},d,{id:"path-4","data-name":"path",d:"M4.6,11.3v2.4L.5,15.6"})),n.default.createElement("path",Object.assign({},d,{id:"path-5","data-name":"path",d:"M6.9.5H6.1A3.372,3.372,0,0,0,2.7,3.9V7.6a4.249,4.249,0,0,0,2.8,4"}))))}d.defaultProps={dark:!1}},73:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(74))&&n.__esModule?n:{default:n}},74:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var n=u(r(0)),a=r(38),l=r(41),o=u(r(39));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e){var t=e.dark,r=e.color,u=i(e,["dark","color"]);return n.default.createElement(o.default,Object.assign({viewBox:"0 0 21.4 18.3"},u),n.default.createElement("g",{id:"comment-icon",transform:"translate(0 0)"},n.default.createElement("path",{id:"path",fill:"none",stroke:(0,l.iconDark)(t,a.COLOR_WHITE,r?a.colors[r]:"currentColor"),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,d:"M10.7.5C5.1.5.5,4.3.5,9a7.82,7.82,0,0,0,2.6,5.7l-.8,3.1,4-1.1a12.307,12.307,0,0,0,4.4.8c5.6,0,10.2-3.8,10.2-8.5S16.4.5,10.7.5Z"})))}d.defaultProps={dark:!1}},83:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(84))&&n.__esModule?n:{default:n}},84:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.icon,r=e.selected,a=e.value,l=e.onChange;return n.default.createElement(u,{selected:r,onClick:function(e){l&&l(e,a)}},t)};var n=o(r(0)),a=o(r(1)),l=r(38);function o(e){return e&&e.__esModule?e:{default:e}}var u=a.default.div.withConfig({displayName:"BottomBarAction__Action",componentId:"eaapxw-0"})(["padding:0.875em 0.875em;cursor:pointer;color:",";svg{width:1.15em;transition:color 0.2s ease-in-out;color:",";}&:hover svg{color:",";}@media (min-width:34em){padding:1.3125em 3em;svg{width:initial;}}@media (min-width:60em){padding:1.75em 3.5em;}"],l.COLOR_GRAY_BLUE,function(e){return e.selected?l.COLOR_PRIMARY:"inherit"},l.COLOR_PRIMARY_LIGHT)},85:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(86))&&n.__esModule?n:{default:n}},86:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var n=u(r(0)),a=r(38),l=r(41),o=u(r(39));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e){var t=e.dark,r=e.color,u=i(e,["dark","color"]),d={fill:"none",stroke:(0,l.iconDark)(t,a.COLOR_WHITE,r?a.colors[r]:"currentColor"),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10};return n.default.createElement(o.default,Object.assign({viewBox:"0 0 20.4 19.6"},u),n.default.createElement("g",{id:"home-icon",transform:"translate(0 0)"},n.default.createElement("path",Object.assign({},d,{id:"path",d:"M17.5,8.1h2.4L10.2.5.5,8.1h2"})),n.default.createElement("path",Object.assign({},d,{id:"path-2","data-name":"path",d:"M17.5,7.1"})),n.default.createElement("path",Object.assign({},d,{id:"path-3","data-name":"path",d:"M2.5,8.1"})),n.default.createElement("path",Object.assign({},d,{id:"path-4","data-name":"path",d:"M2.5,8.1v11h6v-6h3v6h6V8.1"}))))}d.defaultProps={dark:!1}},87:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var n,a=(n=r(88))&&n.__esModule?n:{default:n}},88:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var n=u(r(0)),a=r(38),l=r(41),o=u(r(39));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e){var t=e.dark,r=e.color,u=i(e,["dark","color"]);return n.default.createElement(o.default,Object.assign({viewBox:"0 0 19.875 19.98"},u),n.default.createElement("path",{id:"path",fill:"none",stroke:(0,l.iconDark)(t,a.COLOR_WHITE,r?a.colors[r]:"currentColor"),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,d:"M18.7,15.7,11.1,8.1A4.638,4.638,0,0,0,11.5,6,5.549,5.549,0,0,0,6,.5a4.618,4.618,0,0,0-2.6.7L7.3,5.1,5.1,7.3,1.2,3.4A4.618,4.618,0,0,0,.5,6,5.549,5.549,0,0,0,6,11.5a5.222,5.222,0,0,0,2.1-.4l7.6,7.6a2.175,2.175,0,0,0,3,0h0A2,2,0,0,0,18.7,15.7Z"}))}d.defaultProps={dark:!1}}}]);
//# sourceMappingURL=1.6f1c2c75.chunk.js.map