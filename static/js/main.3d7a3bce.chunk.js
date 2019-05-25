(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(49),o=(a(59),a(7)),l=a(25),i=a.n(l),s=a(50),u=a(51),d=a.n(u),m=a(52),p=a.n(m),f=a(53),h=a(3),g=a.n(h),v=(a(174),function(e){var t=e.data,a=e.type,n={Users:[{id:"name",Header:"Name",accessor:function(e){return"".concat(g()(e,"profile.firstName","")," ").concat(g()(e,"profile.lastName",""))}},{id:"email",Header:"Email",accessor:function(e){return"".concat(g()(e,"emails.0.address",""))}},{id:"owner",Header:"Owner",accessor:function(e){return"".concat(g()(e,"owner.name","")," (").concat(e.owner.type,")")}}],Requests:[{Header:"Code",accessor:"code"},{id:"booker",Header:"Booker",accessor:function(e){return"".concat(g()(e,"booker.profile.firstName","")," ").concat(g()(e,"booker.profile.lastName",""))}},{id:"company",Header:"Company",accessor:function(e){return"".concat(g()(e,"company.name",""))}},{id:"landlord",Header:"Landlord",accessor:function(e){return"".concat(g()(e,"landlord.name",""))}}],Apartments:[{Header:"Code",accessor:"code"},{id:"address",Header:"Address",accessor:function(e){return"".concat(g()(e,"address.formattedAddress",""))}},{id:"owner",Header:"Owner",accessor:function(e){return"".concat(g()(e,"owner.name",""))}},{id:"price",Header:"Price/Month",accessor:function(e){return"".concat(g()(e,"pricing.price",0)," ").concat(g()(e,"pricing.currency","").toUpperCase())}}]};return r.a.createElement("div",null,r.a.createElement("h4",null,a),r.a.createElement(f.a,{defaultPageSize:5,minRows:1,data:t,columns:n[a]}))}),E=function(e){var t=e.error;return r.a.createElement("div",{className:"container",id:"no-match"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("h5",null,t))},b=localStorage.getItem("API_URL")||"http://localhost:3060",y=localStorage.getItem("API_ENV")||"development";localStorage.setItem("API_URL",b);var N=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),u=Object(o.a)(l,2),m=u[0],f=u[1],h=Object(n.useState)(b),g=Object(o.a)(h,2),N=g[0],O=g[1],j=Object(n.useState)(y),k=Object(o.a)(j,2),w=k[0],S=k[1],I=Object(n.useState)(!1),A=Object(o.a)(I,2),P=A[0],C=A[1],H=Object(n.useState)("No Match Found !!"),x=Object(o.a)(H,2),V=x[0],_=x[1],F=function(e){var t=e.target;S(t.value),localStorage.setItem("API_ENV",t.value),"development"===t.value?R("http://localhost:3060"):"staging"===t.value?R("https://feature-search-galadriel-api.homelike.xyz"):R("https://galadriel-api.homelike.xyz"),setTimeout(function(){C(!P)},500)},R=function(e){O(e),localStorage.setItem("API_URL",e)},U=function(){var e=Object(s.a)(i.a.mark(function e(t){var a,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.value,c(a),!a){e.next=13;break}return e.prev=3,e.next=6,d.a.get("".concat(N,"/search/searchAll?term=").concat(a)).then(function(e){return e.data});case 6:(n=e.sent)&&n.data&&n.data.length?(r=p()(n.data,function(e){return e.schemaType}),f(r)):(_("No Match Found !!"),f({})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),_(e.t0.message);case 13:case"end":return e.stop()}},e,this,[[3,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-bars float-right",onClick:function(){return C(!P)}}),r.a.createElement("div",{className:"container",id:"search-container"},r.a.createElement("div",{className:"row"},r.a.createElement("input",{type:"text",placeholder:"Type anything...",className:"form-control col-sm-12",name:"username",id:"username",value:a,onChange:U}))),Object.keys(m).length?Object.keys(m).map(function(e){return r.a.createElement("div",{className:"container",id:"suggestion-container",key:e},r.a.createElement(v,{data:m[e],type:e}))}):a&&a.length>1?r.a.createElement(E,{error:V}):"",P?r.a.createElement("div",{className:"api-modal"},r.a.createElement("div",null,r.a.createElement("p",null,"Select Environment:"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"development",name:"API_ENV",defaultValue:"development",checked:"development"===w,onChange:F}),r.a.createElement("label",{htmlFor:"development"},"Development")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"staging",name:"API_ENV",defaultValue:"staging",checked:"staging"===w,onChange:F}),r.a.createElement("label",{htmlFor:"staging"},"Staging")),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",id:"production",name:"API_ENV",defaultValue:"production",checked:"production"===w,onChange:F}),r.a.createElement("label",{htmlFor:"production"},"Production")))):"")},O=r.a.createContext();Object(c.render)(r.a.createElement(function(){var e=Object(n.useState)(),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(O.Provider,{value:{store:a,setContext:c}},r.a.createElement(N,null))},null),document.getElementById("root"))},54:function(e,t,a){e.exports=a(176)},59:function(e,t,a){}},[[54,2,1]]]);
//# sourceMappingURL=main.3d7a3bce.chunk.js.map