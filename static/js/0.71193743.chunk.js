(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),o=a(9),c=a(6),i=a(0),s=a.n(i),u=a(21),p=a.n(u),d=a(164),h=a.n(d);a(172),a(173),a(174),a(175),a(176);t.default=function(){var e=Object(i.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],u=Object(i.useState)("# Output"),d=Object(c.a)(u,2),l=d[0],m=d[1],b=Object(i.useState)(!1),f=Object(c.a)(b,2),v=f[0],k=f[1],w=function(){var e=Object(o.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n(t),!t){e.next=16;break}return e.prev=2,k(!0),e.next=6,p.a.get("https://regmi-solutions.de/python/api.php",{params:{apikey:"shankarboro",code:t}}).then(function(e){return e.data});case 6:a=e.sent,m("#Output \n".concat(a)),k(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),k(!1);case 14:e.next=17;break;case 16:m("# Output");case 17:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t){return e.apply(this,arguments)}}();return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-7 no-padding"},s.a.createElement(h.a,{focus:!0,name:"editorInput",mode:"python",theme:"monokai",width:"100%",height:"100vh",debounceChangePeriod:2e3,fontSize:14,tabSize:2,value:a,onChange:w,editorProps:{$blockScrolling:1/0}})),s.a.createElement("div",{className:"col-md-5 no-padding"},s.a.createElement(h.a,{value:l,readOnly:!0,name:"codeOutput",mode:"python",theme:"kuroir",width:"100%",height:"100vh",showGutter:!1,fontSize:14,tabSize:2,editorProps:{$blockScrolling:1/0}})),v&&s.a.createElement("i",{className:"fas fa-spinner fa-spin float-right"}))}}}]);
//# sourceMappingURL=0.71193743.chunk.js.map