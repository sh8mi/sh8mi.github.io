(this["webpackJsonpsimpleshop-ui"]=this["webpackJsonpsimpleshop-ui"]||[]).push([[0],{18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(12),r=a.n(s),i=(a(18),a(2)),o=a.n(i),l=a(4),d=a(5),u=a(6),j=a(13),b=a(3),h=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"https://api.regdelivery.de",m=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",body:JSON.stringify(a)});case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return m("".concat(h,"/items?query=").concat(e))},x=a(0),v=function(e){var t=e.position,a=void 0===t?"end":t,c=e.name,n=void 0===c?"drawer":c,s=e.children;return Object(x.jsxs)("div",{className:"offcanvas offcanvas-".concat(a),tabIndex:"-1",id:n,"aria-labelledby":"".concat(n,"Label"),"data-bs-backdrop":"true",children:[Object(x.jsx)("div",{className:"offcanvas-header"}),Object(x.jsx)("div",{className:"offcanvas-body",children:s})]})},f=a(7),w=function(e){var t=e.quantity,a=void 0===t?1:t,c=e.updateQuantity,n=e.className,s=void 0===n?"item-counter":n;return Object(x.jsxs)("div",{className:s,children:[Object(x.jsx)("button",{className:"".concat(s,"-dec"),disabled:a<=1,onClick:function(){return c(a-1)},children:" -"}),Object(x.jsxs)("span",{className:"".concat(s,"-val"),children:[" ",a," "]}),Object(x.jsx)("button",{className:"".concat(s,"-inc"),onClick:function(){return c(a+1)},children:" + "})]})},g=function(){var e=Object(u.useStripe)(),t=Object(u.useElements)(),a=_(),c=a.store,n=a.setStoreData,s=function(){var a=Object(l.a)(o.a.mark((function a(s){var r,i,l,d,j;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s.preventDefault(),window.$(".pay-button").prop("disabled",!0),window.$("#pay-loading").show(),window.$(".pay-button-text").hide(),e&&t){a.next=6;break}return a.abrupt("return");case 6:return a.next=8,e.createPaymentMethod({type:"card",card:t.getElement(u.CardElement)});case 8:if(r=a.sent,i=r.error,l=r.paymentMethod,!i){a.next=16;break}window.$("#charge-failure-alert").show(),setTimeout((function(){window.$("#charge-failure-alert").hide(),window.$(".pay-button").prop("disabled",!1),window.$("#pay-loading").hide(),window.$(".pay-button-text").show()}),3e3),a.next=23;break;case 16:return d=Object(f.a)(c.cart),j={},d.forEach((function(e){return j[e.id]=e.quantity})),a.next=21,o={itemlist:j},b=l.id,p("".concat(h,"/charge/?apikey=test_api_key&payment_method=").concat(b),o);case 21:a.sent&&(window.$("#checkoutModal").modal("hide"),window.$(".cart-close").click(),window.$("#charge-success-alert").show(),n({cart:[]}),t.getElement(u.CardElement).clear(),setTimeout((function(){window.$("#charge-success-alert").hide(),window.$(".pay-button").prop("disabled",!1),window.$("#pay-loading").hide(),window.$(".pay-button-text").show()}),3e3));case 23:case"end":return a.stop()}var o,b}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"modal fade",id:"checkoutModal","aria-hidden":"true","aria-labelledby":"checkoutModallabel",tabIndex:"-1",children:Object(x.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsx)("div",{className:"modal-header",children:Object(x.jsx)("h5",{className:"modal-title",children:"Enter your Credit Card Details"})}),Object(x.jsx)("div",{className:"modal-body",children:Object(x.jsx)(u.CardElement,{options:{hidePostalCode:!0}})}),Object(x.jsx)("div",{className:"modal-footer",children:Object(x.jsxs)("button",{className:"btn btn-primary pay-button",onClick:s,children:[Object(x.jsx)("span",{className:"pay-button-text",children:"Pay"}),Object(x.jsx)("span",{className:"pay-loading",id:"pay-loading",children:Object(x.jsx)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",enableBackground:"new 0 0 50 50",children:Object(x.jsx)("path",{fill:"#fff",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:Object(x.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})})]})})]})})})},N=function(){var e=_(),t=e.store,a=e.setStoreData,c=null===t||void 0===t?void 0:t.cart.reduce((function(e,t){return e+t.quantity*t.price}),0),n=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.$("#checkoutModal").modal("show");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"cart-container",children:[Object(x.jsxs)("div",{className:"cart-header",children:[Object(x.jsx)("div",{className:"cart-title",children:Object(x.jsx)("span",{children:"Your Cart"})}),Object(x.jsx)("div",{className:"cart-close","data-bs-dismiss":"offcanvas",children:Object(x.jsx)("span",{children:"X"})})]}),Object(x.jsx)("div",{className:"cart-body",children:t.cart.length?null===t||void 0===t?void 0:t.cart.map((function(e){return Object(x.jsxs)("div",{className:"cart-item",children:[Object(x.jsx)("div",{className:"cart-item-thumb",children:Object(x.jsx)("img",{src:e.imageUrl,alt:e.name})}),Object(x.jsxs)("div",{className:"cart-item-description",children:[Object(x.jsx)("span",{className:"cart-item-name",children:e.name}),Object(x.jsx)("span",{className:"cart-item-price",children:e.price}),Object(x.jsx)("span",{className:"cart-item-remove",onClick:function(){return function(e){var c=Object(f.a)(t.cart),n=t.cart.findIndex((function(t){return t.id===e.id}));c.splice(n,1),a(Object(b.a)(Object(b.a)({},t),{},{cart:c}))}(e)},children:"Remove"})]}),Object(x.jsx)("div",{className:"cart-item-counter",children:Object(x.jsx)(w,{quantity:e.quantity,className:"cart-counter",updateQuantity:function(c){return function(e,c){var n=Object(f.a)(t.cart),s=t.cart.findIndex((function(t){return t.id===e.id}));s>-1&&(c?n.splice(s,1,Object(b.a)(Object(b.a)({},e),{},{quantity:c})):n.splice(s,1)),a(Object(b.a)(Object(b.a)({},t),{},{cart:n}))}(e,c)}})})]},e.id)})):Object(x.jsx)("div",{className:"empty-cart",children:"Your cart is empty."})}),Object(x.jsxs)("div",{className:"sub-total",children:[Object(x.jsx)("span",{className:"sub-total-title",children:"Subtotal :"}),Object(x.jsxs)("span",{className:"sub-total-price",children:["\u20ac ",parseFloat(c).toFixed(2)]})]}),Object(x.jsx)("div",{className:"cart-footer",children:Object(x.jsxs)("button",{onClick:function(){return n()},disabled:!(null===t||void 0===t?void 0:t.cart.length),children:[Object(x.jsx)("span",{className:"cart-button",children:Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#887e7e",className:"bi bi-cart-plus",viewBox:"0 0 16 16",children:[Object(x.jsx)("path",{d:"M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"}),Object(x.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})}),Object(x.jsx)("span",{className:"add-to-cart-text",children:"Proceed to checkout"})]})}),Object(x.jsx)(g,{})]})},y=a(10),k=function(){var e=_(),t=e.store,a=e.setStoreData,c=n.a.useState({username:"",password:"",test:""}),s=Object(d.a)(c,2),r=s[0],i=s[1],u=function(){var e=Object(l.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),console.log("loggin in"),window.$(".login-button").prop("disabled",!0),window.$("#login-loading").show(),window.$(".login-button-text").hide(),setTimeout((function(){var e=r.username,c=r.password;"admin"!==e&&"admin"!==c?(window.$(".login-button").prop("disabled",!1),window.$(".login-error").css("visibility","visible"),window.$(".form-group input").addClass("is-invalid"),window.$("#login-loading").hide(),window.$(".login-button-text").show()):(window.$("#loginModal").modal("hide"),a(Object(b.a)(Object(b.a)({},t),{},{user:{apikey:"test_api_key",username:e,password:c}})))}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){i(Object(b.a)(Object(b.a)({},r),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(x.jsx)("div",{className:"modal fade",id:"loginModal","aria-hidden":"true","aria-labelledby":"loginModallabel",tabIndex:"-1",children:Object(x.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(x.jsxs)("div",{className:"modal-content",children:[Object(x.jsx)("div",{className:"modal-header",children:Object(x.jsx)("h5",{className:"modal-title",children:"Login"})}),Object(x.jsxs)("div",{className:"modal-body",children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"username",children:"Username"}),Object(x.jsx)("input",{name:"username",type:"text",className:"form-control",value:r.username,onChange:j})]}),Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{name:"password",type:"password",className:"form-control",value:r.password,onChange:j})]}),Object(x.jsx)("div",{className:"login-error",children:"Invalid username/password"})]}),Object(x.jsx)("div",{className:"modal-footer",children:Object(x.jsxs)("button",{className:"btn btn-primary login-button",onClick:u,children:[Object(x.jsx)("span",{className:"login-button-text",children:"Login"}),Object(x.jsx)("span",{className:"login-loading",id:"login-loading",children:Object(x.jsx)("svg",{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",enableBackground:"new 0 0 50 50",children:Object(x.jsx)("path",{fill:"#fff",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:Object(x.jsx)("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})})})]})})]})})})},S=function(e){var t,a=e.onSearchResult,n=Object(c.useState)([]),s=Object(d.a)(n,2),r=s[0],i=s[1],u=Object(c.useState)(""),j=Object(d.a)(u,2),p=j[0],f=j[1],w=_(),g=w.store,y=w.setStoreData;Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(h);case 2:t=e.sent,i(t),document.title=t.title;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var S=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=6;break}return e.next=3,O(p);case 3:c=e.sent,a(c),f("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("div",{className:"logo-icon",children:Object(x.jsx)("img",{src:r.logoURL,alt:"Shop Logo"})}),Object(x.jsx)("div",{className:"shop-title",children:Object(x.jsx)("span",{children:r.title})}),Object(x.jsx)("div",{className:"search",children:Object(x.jsx)("input",{id:"searchInput",type:"text",value:p,onChange:function(e){return f(e.target.value)},onKeyPress:S,placeholder:"Search..."})}),Object(x.jsxs)("div",{className:"account-icon dropdown",children:[Object(x.jsx)("i",{className:"bi bi-person-circle dropdown-toggle","data-bs-toggle":"dropdown",id:"account-menu"}),Object(x.jsx)("ul",{className:"dropdown-menu","aria-labelledby":"account-menu",children:Object(x.jsx)("li",{children:Object(x.jsx)("span",{className:"dropdown-item",onClick:function(){g.user.apikey?y(Object(b.a)(Object(b.a)({},g),{},{user:{}})):window.$("#loginModal").modal("show")},children:(null===g||void 0===g||null===(t=g.user)||void 0===t?void 0:t.apikey)?"Logout":"Login"})})})]}),Object(x.jsxs)("div",{className:"cart",onClick:function(){var e=document.getElementById("cartDrawer");new window.bootstrap.Offcanvas(e).show()},children:[Object(x.jsx)("span",{className:"cart-icon",children:Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#887e7e",className:"bi bi-cart-plus",viewBox:"0 0 16 16",children:[Object(x.jsx)("path",{d:"M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"}),Object(x.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})}),g.cart.length?Object(x.jsx)("div",{className:"number-items",children:g.cart.length}):null]}),Object(x.jsx)(v,{position:"end",name:"cartDrawer",children:Object(x.jsx)(N,{})}),Object(x.jsx)(k,{})]})},C=function(e){var t=e.onSearchResult,a=e.children;return Object(x.jsxs)("div",{className:"layout",children:[Object(x.jsx)(S,{onSearchResult:t}),Object(x.jsx)("div",{className:"container",children:a}),Object(x.jsx)("div",{id:"charge-success-alert",className:"charge-success-alert alert alert-success",role:"alert",children:"Thank you for your order! We will process it soon."}),Object(x.jsx)("div",{id:"charge-failure-alert",className:"charge-failure-alert alert alert-danger",role:"alert",children:"Oops, something went wrong. Please try again."})]})},$=function(e){var t=e.item,a=void 0===t?{}:t,s=_(),r=s.store,i=s.setStoreData,o=n.a.useState(1),l=Object(d.a)(o,2),u=l[0],j=l[1];return Object(c.useEffect)((function(){var e=(r.cart||[]).find((function(e){return e.id===a.id}));j((null===e||void 0===e?void 0:e.quantity)||1)}),[a,r.cart]),Object(x.jsxs)("div",{className:"item-detail",children:[Object(x.jsx)("div",{className:"item-detail-close","data-bs-dismiss":"offcanvas",children:Object(x.jsx)("span",{children:"X"})}),Object(x.jsx)("div",{className:"item-name",children:Object(x.jsx)("h1",{children:a.name})}),Object(x.jsx)("div",{className:"item-price",children:"\u20ac ".concat(a.price," EUR")}),Object(x.jsx)("div",{className:"item-image",children:Object(x.jsx)("img",{src:a.imageUrl,alt:a.name})}),Object(x.jsx)("div",{className:"quantity",children:Object(x.jsx)(w,{quantity:u,updateQuantity:j})}),Object(x.jsxs)("div",{className:"sub-total",children:[Object(x.jsx)("span",{className:"sub-total-title",children:"Subtotal :"}),Object(x.jsxs)("span",{className:"sub-total-price",children:["\u20ac ",parseFloat(a.price*u).toFixed(2)]})]}),Object(x.jsx)("div",{className:"add-to-cart","data-bs-dismiss":"offcanvas",children:Object(x.jsxs)("button",{onClick:function(){var e=Object(f.a)(r.cart),t=r.cart.findIndex((function(e){return e.id===a.id}));t>-1?u?e.splice(t,1,Object(b.a)(Object(b.a)({},a),{},{quantity:u})):e.splice(t,1):u&&e.push(Object(b.a)(Object(b.a)({},a),{},{quantity:u})),i(Object(b.a)(Object(b.a)({},r),{},{cart:e}))},children:[Object(x.jsx)("span",{className:"cart-button",children:Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#887e7e",className:"bi bi-cart-plus",viewBox:"0 0 16 16",children:[Object(x.jsx)("path",{d:"M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"}),Object(x.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})}),Object(x.jsx)("span",{className:"add-to-cart-text",children:"Add to Cart"})]})})]})},E=function(e){var t=e.items,a=void 0===t?[]:t,n=Object(c.useState)(null),s=Object(d.a)(n,2),r=s[0],i=s[1];return Object(x.jsxs)("div",{className:"items-container",children:[a.map((function(e){return Object(x.jsxs)("div",{className:"item","data-bs-toggle":"offcanvas","data-bs-target":"#itemsDrawer","aria-controls":"itemsDrawer",onClick:function(){return i(e)},children:[Object(x.jsx)("div",{className:"item-image",children:Object(x.jsx)("img",{src:e.imageUrl,alt:e.name})}),Object(x.jsx)("div",{className:"item-name",children:e.name}),Object(x.jsx)("div",{className:"item-price",children:"\u20ac ".concat(e.price," EUR")}),Object(x.jsx)("div",{className:"item-category",children:e.category})]},e.id)})),Object(x.jsx)(v,{position:"end",name:"itemsDrawer",children:r&&Object(x.jsx)($,{item:r})})]})},M=Object(j.a)("pk_test_Yle4AOLnKeejMpFv0WzVsRdq00CbmvTuaS"),H=n.a.createContext({}),_=function(){return Object(c.useContext)(H)},z=function(e){var t=e.children,a=Object(c.useState)({cart:[],user:{}}),n=Object(d.a)(a,2),s=n[0],r=n[1],i=Object(c.useCallback)((function(e){r(e)}),[]);return Object(x.jsx)(H.Provider,{value:{store:s,setStoreData:i},children:t})},D=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(x.jsx)(z,{children:Object(x.jsx)(u.Elements,{stripe:M,children:Object(x.jsx)(C,{onSearchResult:function(e){return n(e)},children:Object(x.jsx)(E,{items:a})})})})};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b7b65213.chunk.js.map