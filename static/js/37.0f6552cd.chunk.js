(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{135:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return n.default.createElement(i.default,{timestamp:new Date},"Great catching up today Aaron. I\u2019ve got our next mentoring session schedule for next Tuesday 6th November if this still works for you? How do you feel about tackling some more advanced photography techniques?")};var n=s(r(0)),i=s(r(77));function s(t){return t&&t.__esModule?t:{default:t}}},38:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.type=e.avatarSizes=e.lineHeights=e.fontSizes=e.colors=e.AVATAR_SIZE_DEFAULT=e.AVATAR_SIZE_SMALL=e.AVATAR_SIZE_SMALLER=e.TYPE_LINE_HEIGHT_PARAGRAPH=e.TYPE_LINE_HEIGHT_HEADING_6=e.TYPE_LINE_HEIGHT_HEADING_5=e.TYPE_LINE_HEIGHT_HEADING_4=e.TYPE_LINE_HEIGHT_HEADING_3=e.TYPE_LINE_HEIGHT_HEADING_2=e.TYPE_LINE_HEIGHT_HEADING_1=e.TYPE_FONT_SIZE_PARAGRAPH=e.TYPE_FONT_SIZE_HEADING_6=e.TYPE_FONT_SIZE_HEADING_5=e.TYPE_FONT_SIZE_HEADING_4=e.TYPE_FONT_SIZE_HEADING_3=e.TYPE_FONT_SIZE_HEADING_2=e.TYPE_FONT_SIZE_HEADING_1=e.GRADIENT_PRIMARY=e.COLOR_SHADOW=e.COLOR_BLACK_ALPHA20=e.COLOR_GRAY=e.COLOR_WHITE_ALPHA60=e.COLOR_WHITE=e.COLOR_WHITE_BLUE=e.COLOR_BLUE_GRAY=e.COLOR_GRAY_BLUE=e.COLOR_DARK=e.COLOR_SECONDARY=e.COLOR_WHITE_ALPHA30=e.COLOR_ERROR=e.COLOR_PRIMARY_FILL=e.COLOR_PRIMARY_LIGHT=e.COLOR_PRIMARY=void 0;e.COLOR_PRIMARY="#5887F9";e.COLOR_PRIMARY_LIGHT="#60C3FF";e.COLOR_PRIMARY_FILL="#dce9ff";e.COLOR_ERROR="#FC5F6B";e.COLOR_WHITE_ALPHA30="rgba(255, 255, 255, 0.3)";e.COLOR_SECONDARY="rgba(255, 255, 255, 0.3)";e.COLOR_DARK="#4C5264";e.COLOR_GRAY_BLUE="#BCC5D3";e.COLOR_BLUE_GRAY="#b0caff";e.COLOR_WHITE_BLUE="#E2E8ED";e.COLOR_WHITE="#ffffff";e.COLOR_WHITE_ALPHA60="rgba(255, 255, 255, 0.6)";e.COLOR_GRAY="rgba(255, 255, 255, 0.6)";e.COLOR_BLACK_ALPHA20="rgba(0, 0, 0, 0.2)";e.COLOR_SHADOW="rgba(0, 0, 0, 0.2)";e.GRADIENT_PRIMARY=["#5574f7","#60C3FF"];e.TYPE_FONT_SIZE_HEADING_1=36;e.TYPE_FONT_SIZE_HEADING_2=24;e.TYPE_FONT_SIZE_HEADING_3=20;e.TYPE_FONT_SIZE_HEADING_4=16;e.TYPE_FONT_SIZE_HEADING_5=14;e.TYPE_FONT_SIZE_HEADING_6=12;e.TYPE_FONT_SIZE_PARAGRAPH=14;e.TYPE_LINE_HEIGHT_HEADING_1=1.5;e.TYPE_LINE_HEIGHT_HEADING_2=1.75;e.TYPE_LINE_HEIGHT_HEADING_3=1.625;e.TYPE_LINE_HEIGHT_HEADING_4=1.25;e.TYPE_LINE_HEIGHT_HEADING_5=1.125;e.TYPE_LINE_HEIGHT_HEADING_6=1;e.TYPE_LINE_HEIGHT_PARAGRAPH=1.25;e.AVATAR_SIZE_SMALLER=2.5;e.AVATAR_SIZE_SMALL=3.75;e.AVATAR_SIZE_DEFAULT=6.25;var n={primary:"#5887F9",primaryLight:"#60C3FF",primaryFill:"#dce9ff",error:"#FC5F6B",secondary:"rgba(255, 255, 255, 0.3)",dark:"#4C5264",grayBlue:"#BCC5D3",whiteBlue:"#E2E8ED",white:"#ffffff",gray:"rgba(255, 255, 255, 0.6)"};e.colors=n;var i={h1:36,h2:24,h3:20,h4:16,h5:14,h6:12,p:14};e.fontSizes=i;var s={h1:1.5,h2:1.75,h3:1.625,h4:1.25,h5:1.125,h6:1,p:1.25};e.lineHeights=s;var a={smaller:2.5,small:3.75,default:6.25};e.avatarSizes=a;var o={fontSizes:i,lineHeights:s};e.type=o;var u={colors:n,type:o,avatarSizes:a};e.default=u},62:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}});var n,i=(n=r(63))&&n.__esModule?n:{default:n}},63:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.value,r=(0,s.default)(e).format("MMM D, HH:mm");return i.default.createElement(i.Fragment,null,r)};var n,i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}(r(0)),s=(n=r(71))&&n.__esModule?n:{default:n}},71:function(t,e,r){"use strict";r.r(e);var n="millisecond",i="second",s="minute",a="hour",o="day",u="week",f="month",_="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,d=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},E={padStart:h,padZoneStr:function(t){var e=Math.abs(t),r=Math.floor(e/60),n=e%60;return(t<=0?"+":"-")+h(r,2,"0")+":"+h(n,2,"0")},monthDiff:function(t,e){var r=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(r,"months"),i=e-n<0,s=t.clone().add(r+(i?-1:1),"months");return Number(-(r+(e-n)/(i?n-s:s-n))||0)},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(t){return{M:f,y:_,w:u,d:o,h:a,m:s,s:i,ms:n}[t]||String(t||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},O="en",I={};I[O]=l;var p=function(t){return t instanceof g},A=function(t,e,r){var n;if(!t)return null;if("string"===typeof t)I[t]&&(n=t),e&&(I[t]=e,n=t);else{var i=t.name;I[i]=t,n=i}return r||(O=n),n},H=function(t,e){if(p(t))return t.clone();var r=e?"string"===typeof e?{format:e}:e:{};return r.date=t,new g(r)},m=function(t,e){return H(t,{locale:e.$L})},y=E;y.parseLocale=A,y.isDayjs=p,y.wrapper=m;var g=function(){function t(t){this.parse(t)}var e=t.prototype;return e.parse=function(t){this.$d=function(t){var e;return null===t?new Date(NaN):y.isUndefined(t)?new Date:t instanceof Date?t:"string"===typeof t&&/.*[^Z]$/i.test(t)&&(e=t.match(c))?new Date(e[1],e[2]-1,e[3]||1,e[4]||0,e[5]||0,e[6]||0,e[7]||0):new Date(t)}(t.date),this.init(t)},e.init=function(t){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds(),this.$L=this.$L||A(t.locale,null,!0)||O},e.$utils=function(){return y},e.isValid=function(){return!("Invalid Date"===this.$d.toString())},e.isSame=function(t,e){var r=H(t);return this.startOf(e)<=r&&r<=this.endOf(e)},e.isAfter=function(t,e){return H(t)<this.startOf(e)},e.isBefore=function(t,e){return this.endOf(e)<H(t)},e.year=function(){return this.$y},e.month=function(){return this.$M},e.day=function(){return this.$W},e.date=function(){return this.$D},e.hour=function(){return this.$H},e.minute=function(){return this.$m},e.second=function(){return this.$s},e.millisecond=function(){return this.$ms},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,e){var r=this,n=!!y.isUndefined(e)||e,c=function(t,e){var i=m(new Date(r.$y,e,t),r);return n?i:i.endOf(o)},d=function(t,e){return m(r.toDate()[t].apply(r.toDate(),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)};switch(y.prettyUnit(t)){case _:return n?c(1,0):c(31,11);case f:return n?c(1,this.$M):c(0,this.$M+1);case u:var l=this.$locale().weekStart||0;return c(n?this.$D-(this.$W-l):this.$D+(6-(this.$W-l)),this.$M);case o:case"date":return d("setHours",0);case a:return d("setMinutes",1);case s:return d("setSeconds",2);case i:return d("setMilliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,e){var r,u=y.prettyUnit(t),c=(r={},r[o]="setDate",r.date="setDate",r[f]="setMonth",r[_]="setFullYear",r[a]="setHours",r[s]="setMinutes",r[i]="setSeconds",r[n]="setMilliseconds",r)[u],d=u===o?this.$D+(e-this.$W):e;return this.$d[c]&&this.$d[c](d),this.init(),this},e.set=function(t,e){return this.clone().$set(t,e)},e.add=function(t,e){var r,n=this;t=Number(t);var c=y.prettyUnit(e),d=function(e,r){var i=n.set("date",1).set(e,r+t);return i.set("date",Math.min(n.$D,i.daysInMonth()))},l=function(e){var r=new Date(n.$d);return r.setDate(r.getDate()+e*t),m(r,n)};if(c===f)return d(f,this.$M);if(c===_)return d(_,this.$y);if(c===o)return l(1);if(c===u)return l(7);var h=(r={},r[s]=6e4,r[a]=36e5,r[i]=1e3,r)[c]||1,E=this.valueOf()+t*h;return m(E,this)},e.subtract=function(t,e){return this.add(-1*t,e)},e.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",n=y.padZoneStr(this.$d.getTimezoneOffset()),i=this.$locale(),s=i.weekdays,a=i.months,o=function(t,e,r,n){return t&&t[e]||r[e].substr(0,n)},u=function(t){return 0===e.$H?12:y.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0")},f={YY:String(this.$y).slice(-2),YYYY:String(this.$y),M:String(this.$M+1),MM:y.padStart(this.$M+1,2,"0"),MMM:o(i.monthsShort,this.$M,a,3),MMMM:a[this.$M],D:String(this.$D),DD:y.padStart(this.$D,2,"0"),d:String(this.$W),dd:o(i.weekdaysMin,this.$W,s,2),ddd:o(i.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(this.$H),HH:y.padStart(this.$H,2,"0"),h:u("h"),hh:u("hh"),a:this.$H<12?"am":"pm",A:this.$H<12?"AM":"PM",m:String(this.$m),mm:y.padStart(this.$m,2,"0"),s:String(this.$s),ss:y.padStart(this.$s,2,"0"),SSS:y.padStart(this.$ms,3,"0"),Z:n};return r.replace(d,function(t){return t.indexOf("[")>-1?t.replace(/\[|\]/g,""):f[t]||n.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,e,r){var n,c=y.prettyUnit(e),d=H(t),l=6e4*(d.utcOffset()-this.utcOffset()),h=this-d,E=y.monthDiff(this,d);return E=(n={},n[_]=E/12,n[f]=E,n.quarter=E/3,n[u]=(h-l)/6048e5,n[o]=(h-l)/864e5,n[a]=h/36e5,n[s]=h/6e4,n[i]=h/1e3,n)[c]||h,r?E:y.absFloor(E)},e.daysInMonth=function(){return this.endOf(f).$D},e.$locale=function(){return I[this.$L]},e.locale=function(t,e){var r=this.clone();return r.$L=A(t,e,!0),r},e.clone=function(){return m(this.toDate(),this)},e.toDate=function(){return new Date(this.$d)},e.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},e.toJSON=function(){return this.toISOString()},e.toISOString=function(){return this.$d.toISOString()},e.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},e.toString=function(){return this.$d.toUTCString()},t}();H.prototype=g.prototype,H.extend=function(t,e){return t(e,g,H),H},H.locale=A,H.isDayjs=p,H.unix=function(t){return H(1e3*t)},H.en=I[O];e.default=H},77:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i.default}});var n,i=(n=r(78))&&n.__esModule?n:{default:n}},78:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=h;var n,i=f(r(0)),s=f(r(1)),a=(n=r(62))&&n.__esModule?n:{default:n},o=r(38),u=r(42);function f(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}function _(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},s=Object.keys(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)r=s[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var c=s.default.div.withConfig({displayName:"ChatBubble__Wrapper",componentId:"sc-15gboux-0"})(["",";border-radius:0.375em;padding:1em;position:relative;::after{content:'';height:0;border-top:0.421875rem solid transparent;border-bottom:0.421875rem solid transparent;"," position:absolute;top:0.83125rem;width:0;}"],function(t){switch(t.variant){case"secondary":return(0,s.css)(["background:",";color:",";"],o.COLOR_WHITE_BLUE,o.COLOR_DARK);case"default":default:return(0,s.css)(["background:linear-gradient(to top right,#5574f7,#60c3ff);color:",";"],o.COLOR_WHITE)}},function(t){var e=t.arrowSide,r=t.variant;switch(e){case"left":return(0,s.css)(["border-right:0.43rem solid ",";left:-0.43rem;"],"secondary"===r?o.COLOR_WHITE_BLUE:"#5a99fb");case"right":default:return(0,s.css)(["border-left:0.43rem solid ",";right:-0.43rem;"],"secondary"===r?o.COLOR_WHITE_BLUE:"#60c3ff")}}),d=s.default.p.withConfig({displayName:"ChatBubble__Message",componentId:"sc-15gboux-1"})(["font-size:",";font-weight:400;line-height:1.5;margin:0;"],(0,u.styleLengths)(o.TYPE_FONT_SIZE_PARAGRAPH)),l=s.default.div.withConfig({displayName:"ChatBubble__MessageTimestamp",componentId:"sc-15gboux-2"})(["color:",";font-size:",";font-weight:400;padding:0.1875em;text-align:right;"],o.COLOR_GRAY_BLUE,(0,u.styleLengths)(o.TYPE_FONT_SIZE_HEADING_6));function h(t){var e=t.children,r=t.timestamp,n=_(t,["children","timestamp"]);return i.default.createElement(i.Fragment,null,i.default.createElement(c,n,i.default.createElement(d,null,e)),r&&i.default.createElement(l,{title:r.toString()},i.default.createElement(a.default,{value:r})))}h.defaultProps={arrowSide:"right",variant:"default"}}}]);
//# sourceMappingURL=37.0f6552cd.chunk.js.map