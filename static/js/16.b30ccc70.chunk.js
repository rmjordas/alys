(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{107:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return n.default.createElement(o.default,{value:"Mentor",icon:n.default.createElement(a.default,null)})};var n=_(r(0)),o=_(r(75)),a=_(r(44));function _(e){return e&&e.__esModule?e:{default:e}}},39:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.type=t.avatarSizes=t.lineHeights=t.fontSizes=t.colors=t.AVATAR_SIZE_DEFAULT=t.AVATAR_SIZE_SMALL=t.AVATAR_SIZE_SMALLER=t.TYPE_LINE_HEIGHT_PARAGRAPH=t.TYPE_LINE_HEIGHT_HEADING_6=t.TYPE_LINE_HEIGHT_HEADING_5=t.TYPE_LINE_HEIGHT_HEADING_4=t.TYPE_LINE_HEIGHT_HEADING_3=t.TYPE_LINE_HEIGHT_HEADING_2=t.TYPE_LINE_HEIGHT_HEADING_1=t.TYPE_FONT_SIZE_PARAGRAPH=t.TYPE_FONT_SIZE_HEADING_6=t.TYPE_FONT_SIZE_HEADING_5=t.TYPE_FONT_SIZE_HEADING_4=t.TYPE_FONT_SIZE_HEADING_3=t.TYPE_FONT_SIZE_HEADING_2=t.TYPE_FONT_SIZE_HEADING_1=t.GRADIENT_PRIMARY=t.COLOR_GRAY=t.COLOR_WHITE_ALPHA60=t.COLOR_WHITE=t.COLOR_WHITE_BLUE=t.COLOR_GRAY_BLUE=t.COLOR_DARK=t.COLOR_SECONDARY=t.COLOR_WHITE_ALPHA30=t.COLOR_ERROR=t.COLOR_PRIMARY_FILL=t.COLOR_PRIMARY_LIGHT=t.COLOR_PRIMARY=void 0;t.COLOR_PRIMARY="#5887F9";t.COLOR_PRIMARY_LIGHT="#60C3FF";t.COLOR_PRIMARY_FILL="#dce9ff";t.COLOR_ERROR="#FC5F6B";t.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";t.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";t.COLOR_DARK="#4C5264";t.COLOR_GRAY_BLUE="#BCC5D3";t.COLOR_WHITE_BLUE="#E2E8ED";t.COLOR_WHITE="#ffffff";t.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";t.COLOR_GRAY="rgba(255, 255, 255, 0.6)";t.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];t.TYPE_FONT_SIZE_HEADING_1=36;t.TYPE_FONT_SIZE_HEADING_2=24;t.TYPE_FONT_SIZE_HEADING_3=20;t.TYPE_FONT_SIZE_HEADING_4=16;t.TYPE_FONT_SIZE_HEADING_5=14;t.TYPE_FONT_SIZE_HEADING_6=12;t.TYPE_FONT_SIZE_PARAGRAPH=14;t.TYPE_LINE_HEIGHT_HEADING_1=1.5;t.TYPE_LINE_HEIGHT_HEADING_2=1.75;t.TYPE_LINE_HEIGHT_HEADING_3=1.625;t.TYPE_LINE_HEIGHT_HEADING_4=1.25;t.TYPE_LINE_HEIGHT_HEADING_5=1.125;t.TYPE_LINE_HEIGHT_HEADING_6=1;t.TYPE_LINE_HEIGHT_PARAGRAPH=1.25;t.AVATAR_SIZE_SMALLER=2.5;t.AVATAR_SIZE_SMALL=3.75;t.AVATAR_SIZE_DEFAULT=6.25;var n={primary:"#5887F9",primaryLight:"#60C3FF",primaryFill:"#dce9ff",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};t.colors=n;var o={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};t.fontSizes=o;var a={h1:1.5,h2:1.75,h3:1.625,h4:1.25,h5:1.125,h6:1,p:1.25};t.lineHeights=a;var _={smaller:2.5,small:3.75,default:6.25};t.avatarSizes=_;var i={fontSizes:o,lineHeights:a};t.type=i;var u={colors:n,type:i,avatarSizes:_};t.default=u},40:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(41))&&n.__esModule?n:{default:n}},41:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var n,o=(n=r(0))&&n.__esModule?n:{default:n},a=r(43);function _(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function i(e){var t=e.fontSize,r=e.viewBox,n=e.children,i=_(e,["fontSize","viewBox","children"]);return o.default.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",color:"inherit",viewBox:r,focusable:!1,width:(0,a.styleLengths)(t),height:(0,a.styleLengths)(t)},i),n)}i.defaultProps={fontSize:24,viewBox:"0 0 24 24"}},42:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.iconDark=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.COLOR_WHITE,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.COLOR_DARK;return e?t:r};var n=r(39)},44:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(45))&&n.__esModule?n:{default:n}},45:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=i(r(0)),o=r(39),a=r(42),_=i(r(40));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function l(e){var t=e.dark,r=e.color,i=u(e,["dark","color"]),l={fill:"none",stroke:(0,a.iconDark)(t,o.COLOR_WHITE,r?o.colors[r]:"currentColor"),strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10};return n.default.createElement(_.default,Object.assign({viewBox:"0 0 21.7 19.4"},i),n.default.createElement("g",{id:"mentor-icon",transform:"translate(0 0)"},n.default.createElement("path",Object.assign({},l,{id:"path",d:"M10.3,13.6v3l-5,2.3"})),n.default.createElement("path",Object.assign({},l,{id:"path-2","data-name":"path",d:"M16.1,13.6v3l5.1,2.3"})),n.default.createElement("path",Object.assign({},l,{id:"path-3","data-name":"path",d:"M15,14.1a5.2,5.2,0,0,0,3.5-4.9V4.6A4.055,4.055,0,0,0,14.4.5H12.2A4.14,4.14,0,0,0,8,4.6V9.2a5.2,5.2,0,0,0,3.5,4.9"})),n.default.createElement("path",Object.assign({},l,{id:"path-4","data-name":"path",d:"M4.6,11.3v2.4L.5,15.6"})),n.default.createElement("path",Object.assign({},l,{id:"path-5","data-name":"path",d:"M6.9.5H6.1A3.372,3.372,0,0,0,2.7,3.9V7.6a4.249,4.249,0,0,0,2.8,4"}))))}l.defaultProps={dark:!1}},75:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(76))&&n.__esModule?n:{default:n}},76:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=(n=r(1))&&n.__esModule?n:{default:n},_=r(39);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=a.default.div.withConfig({displayName:"BottomBarAction__Action",componentId:"eaapxw-0"})(["padding:0.875em 0.875em;cursor:pointer;color:",";svg{width:1.15em;transition:color 0.2s ease-in-out;color:",";}&:hover svg{color:",";}@media (min-width:34em){padding:1.3125em 3em;svg{width:initial;}}@media (min-width:60em){padding:1.75em 3.5em;}"],_.COLOR_GRAY_BLUE,function(e){return e.selected?_.COLOR_PRIMARY:"inherit"},_.COLOR_PRIMARY_LIGHT),O=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=l(this,(e=f(t)).call.apply(e,[this].concat(o))))._handleOnClick=function(e){var t=r.props,n=t.value,o=t.onChange;o&&o(e,n)},r}var r,n,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,o.PureComponent),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.icon,r=e.selected;return o.default.createElement(E,{selected:r,onClick:this._handleOnClick},t)}}])&&u(r.prototype,n),a&&u(r,a),t}();t.default=O}}]);
//# sourceMappingURL=16.b30ccc70.chunk.js.map