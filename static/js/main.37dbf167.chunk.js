(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),o=(a(45),a(7)),s=a(117),l=a(3),m=Object(n.createContext)(),i=a(38),u=a(4),p=function(){var e=Object(n.useContext)(m),t=e.store;return(0,e.setContext)(Object(u.a)({},t,{loggedIn:!0})),r.a.createElement("div",{className:"main"})},d=a(8),E=a.n(d),f=a(12),b=a(5),h=a(35),g=a.n(h),v=(a(90),function(e,t){var a=Object(n.useState)({error:!1,username:g()(e,"location.state.username",""),password:""}),c=Object(o.a)(a,2),s=c[0],l=c[1],m=function(e){var t,a=e.target;l(Object(u.a)({},s,(t={},Object(b.a)(t,a.name,a.value),Object(b.a)(t,"error",""),t)))},i=function(){var t=Object(f.a)(E.a.mark(function t(a){var n,r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),n=s.username,r=s.password;try{"admin"===n&&"admin"===r&&(localStorage.setItem("TOKEN","SHANKARREGMI.GITHUB.IO"),e.history.push("/"))}catch(c){l(Object(u.a)({},s,{error:c.message}))}case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:i},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"heading"},"Login")),r.a.createElement("div",{className:"text-center error-text "+(s.error?"":"visibility-hidden")},r.a.createElement("span",null,s.error)),r.a.createElement("input",{type:"text",className:"form-control col-sm-9",name:"username",id:"username",value:s.username,onChange:m,required:!0}),r.a.createElement("input",{type:"password",className:"form-control col-sm-9",name:"password",id:"password",value:s.password,onChange:m,required:!0}),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"submit",className:"btn login-btn"},"Login")),r.a.createElement("div",{className:"text-center signup-text"},r.a.createElement("span",null,"Don't have an account yet? ",r.a.createElement("a",{href:"/register"},"Create here")))))}),N=a(20),O=a.n(N),x=a(6),j="https://api.shankar.xyz",w=function(){var e={};return localStorage.getItem("TOKEN")&&(e.Authorization=localStorage.getItem("TOKEN")),e},y=function(e,t){return console.log("POST /".concat(e)),O.a.post("".concat(j,"/").concat(e),t,{headers:w()}).then(function(e){return"OK"===Object(x.get)(e,"data.status")?Object(x.get)(e,"data.data"):null}).catch(function(e){throw Object(x.get)(e,"response.data.error",{message:"Unknown Error !!"})})},S=function(e,t){var a=Object(n.useState)({error:"",firstName:"",lastName:"",email:"",password:""}),c=Object(o.a)(a,2),s=c[0],l=c[1],m=function(e){var t,a=e.target;l(Object(u.a)({},s,(t={},Object(b.a)(t,a.name,a.value),Object(b.a)(t,"error",""),t)))},i=function(){var e=Object(f.a)(E.a.mark(function e(t){var a,n,r,c,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=s.firstName,n=s.lastName,r=s.email,c=s.password,e.prev=2,e.next=5,y("auth/register",{firstName:a,lastName:n,email:r,password:c});case 5:o=e.sent,q.push("/login",{username:o.username}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),l(Object(u.a)({},s,{error:e.t0.message}));case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:i},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",{className:"heading"},"Signup")),r.a.createElement("div",{className:"text-center error-text "+(s.error?"":"visibility-hidden")},r.a.createElement("span",null,s.error)),r.a.createElement("input",{type:"text",className:"form-control col-sm-9",placeholder:"First Name",name:"firstName",id:"firstName",value:s.firstName,onChange:m,required:!0}),r.a.createElement("input",{type:"text",className:"form-control col-sm-9",placeholder:"Last Name",name:"lastName",id:"lastName",value:s.lastName,onChange:m,required:!0}),r.a.createElement("input",{type:"text",className:"form-control col-sm-9",placeholder:"Email",name:"email",id:"email",value:s.email,onChange:m,required:!0}),r.a.createElement("input",{type:"password",className:"form-control col-sm-9",placeholder:"Password",name:"password",id:"password",value:s.password,onChange:m,required:!0}),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{type:"submit",className:"btn login-btn"},"Sign up"))))},C=function(){return localStorage.getItem("TOKEN")},I=function(e){var t=e.component,a=Object(i.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return C()?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},k=Object(s.e)(function(){return r.a.createElement(s.d,null,r.a.createElement(I,{component:p,exact:!0,path:"/"}),r.a.createElement(s.b,{exact:!0,path:"/",render:function(){return C()?r.a.createElement(s.a,{to:"/"}):r.a.createElement(s.a,{to:"/login"})}}),r.a.createElement(s.b,{exact:!0,path:"/login",render:function(){return C()?r.a.createElement(s.a,{to:"/"}):r.a.createElement(s.b,{path:"/login",component:v})}}),r.a.createElement(s.b,{exact:!0,path:"/register",component:S}),r.a.createElement(s.a,{to:"/"}))}),q=Object(l.a)();Object(c.render)(r.a.createElement(function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(m.Provider,{value:{store:a,setContext:c}},r.a.createElement(s.c,{history:q},r.a.createElement(k,null)))},null),document.getElementById("root"))},40:function(e,t,a){e.exports=a(116)},45:function(e,t,a){},90:function(e,t,a){}},[[40,2,1]]]);
//# sourceMappingURL=main.37dbf167.chunk.js.map