(this["webpackJsonpsimpleshop-ui"]=this["webpackJsonpsimpleshop-ui"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(6),s=c.n(r),i=(c(11),c(2)),o=c.n(i),l=c(3),d=c(4),j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_URL||"https://regdelivery.de",u=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u("".concat(j,"/items?query=").concat(e))},m=c(0),h=function(e){var t=e.position,c=void 0===t?"end":t,n=e.name,a=void 0===n?"drawer":n,r=e.children;return Object(m.jsxs)("div",{className:"offcanvas offcanvas-".concat(c),tabIndex:"-1",id:a,"aria-labelledby":"".concat(a,"Label"),children:[Object(m.jsx)("div",{className:"offcanvas-header"}),Object(m.jsx)("div",{className:"offcanvas-body",children:r})]})},v=function(){return Object(m.jsx)("div",{children:"Your Cart is Empty"})},O=function(e){var t=e.onSearchResult,c=Object(n.useState)([]),a=Object(d.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(""),O=Object(d.a)(i,2),x=O[0],p=O[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(j);case 2:t=e.sent,s(t),document.title=t.title;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=function(){var e=Object(l.a)(o.a.mark((function e(c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==c.key){e.next=6;break}return e.next=3,b(x);case 3:n=e.sent,t(n),p("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"logo-icon",children:Object(m.jsx)("img",{src:r.logoURL,alt:"Shop Logo"})}),Object(m.jsx)("div",{className:"shop-title",children:Object(m.jsx)("span",{children:r.title})}),Object(m.jsx)("div",{className:"search",children:Object(m.jsx)("input",{id:"searchInput",type:"text",value:x,onChange:function(e){return p(e.target.value)},onKeyPress:f,placeholder:"Search..."})}),Object(m.jsx)("div",{className:"cart","data-bs-toggle":"offcanvas","data-bs-target":"#cartDrawer","aria-controls":"cartDrawer",children:Object(m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"#887e7e",className:"bi bi-cart-plus",viewBox:"0 0 16 16",children:[Object(m.jsx)("path",{d:"M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"}),Object(m.jsx)("path",{d:"M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})]})}),Object(m.jsx)(h,{position:"end",name:"cartDrawer",children:Object(m.jsx)(v,{})})]})},x=function(e){var t=e.onSearchResult,c=e.children;return Object(m.jsxs)("div",{className:"layout",children:[Object(m.jsx)(O,{onSearchResult:t}),Object(m.jsx)("div",{className:"container",children:c})]})},p=function(e){var t=e.item,c=void 0===t?{}:t;return Object(m.jsxs)("div",{className:"item-detail",children:[Object(m.jsx)("div",{className:"item-name",children:Object(m.jsx)("h1",{children:c.name})}),Object(m.jsx)("div",{className:"item-price",children:"\u20ac ".concat(c.price," EUR")}),Object(m.jsx)("div",{className:"item-image",children:Object(m.jsx)("img",{src:c.imageUrl,alt:c.name})}),Object(m.jsx)("div",{className:"quantity",children:Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("button",{className:"btn btn-outline-secondary add-remove-btn",type:"button",id:"button-add",children:"-"}),Object(m.jsx)("input",{type:"text",className:"form-control",style:{outline:"none"}}),Object(m.jsx)("button",{className:"btn btn-outline-secondary add-remove-btn",type:"button",id:"button-remove",children:"+"})]})}),Object(m.jsx)("div",{className:"add-to-cart",children:Object(m.jsx)("button",{children:"Add to Cart"})})]})},f=function(e){var t=e.items,c=void 0===t?[]:t,a=Object(n.useState)(null),r=Object(d.a)(a,2),s=r[0],i=r[1];return Object(m.jsxs)("div",{className:"items-container",children:[c.map((function(e){return Object(m.jsxs)("div",{className:"item","data-bs-toggle":"offcanvas","data-bs-target":"#itemsDrawer","aria-controls":"itemsDrawer",onClick:function(){return i(e)},children:[Object(m.jsx)("div",{className:"item-image",children:Object(m.jsx)("img",{src:e.imageUrl,alt:e.name})}),Object(m.jsx)("div",{className:"item-name",children:e.name}),Object(m.jsx)("div",{className:"item-price",children:"\u20ac ".concat(e.price," EUR")}),Object(m.jsx)("div",{className:"item-category",children:e.category})]},e.id)})),Object(m.jsx)(h,{position:"end",name:"itemsDrawer",children:s&&Object(m.jsx)(p,{item:s})})]})},N=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(m.jsx)(x,{onSearchResult:function(e){return a(e)},children:Object(m.jsx)(f,{items:c})})};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.79fac585.chunk.js.map