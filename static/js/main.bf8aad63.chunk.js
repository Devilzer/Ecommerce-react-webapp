(this["webpackJsonpecommerce-webapp"]=this["webpackJsonpecommerce-webapp"]||[]).push([[0],{61:function(e,t,c){},62:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c.n(n),s=c(13),i=c.n(s),o=(c(61),c(62),c(4)),u=c(17),l=c(3),d=c(45),j=c.n(d),b=function(e){new j.a({text:e,layout:"bottomRight",theme:"nest",type:"alert",timeout:500}).show()},O=function(e){return{type:"SET_FILTER",payload:e}},p=function(e){return{type:"SET_PAGE",payload:e}},h=c(35),f=c.n(h),v=c(46),m=c(47),x=c.n(m),y=function(e){return b("Added to Cart."),{type:"ADD_PRODUCT_CART",payload:e}};var g=function(e){var t=e.setType,c=Object(o.b)(),r=Object(o.c)((function(e){return e.ui.users})),s=Object(n.useState)({email:"",password:""}),i=Object(u.a)(s,2),d=i[0],j=i[1];return Object(a.jsxs)("div",{className:"login-container",children:[Object(a.jsxs)("div",{className:"contents",children:[Object(a.jsx)("div",{className:"wtext",children:"Welcome Back,"}),Object(a.jsx)("h1",{children:"Log In!"}),Object(a.jsx)("input",{type:"text",value:d.email,onChange:function(e){return j(Object(l.a)(Object(l.a)({},d),{},{email:e.target.value}))},placeholder:"Email"}),Object(a.jsx)("input",{type:"password",value:d.password,onChange:function(e){return j(Object(l.a)(Object(l.a)({},d),{},{password:e.target.value}))},placeholder:"Password"}),Object(a.jsx)("button",{onClick:function(){if(""!==d.email&&""!==d.password){var e,t=r.findIndex((function(e){return e.email===d.email}));if(-1!==t)if(r[t].password===d.password)c((e=r[t],b("Login Success."),{type:"LOGIN_USER",payload:e}));else b("Invalid Email or Password!");else b("Invalid User!")}else b("Please fill the values!")},children:"Log In"})]}),Object(a.jsx)("div",{className:"switch",onClick:function(){return t("signup")},children:"Create account"})]})};var N=function(e){var t=e.setType,c=Object(o.b)(),r=Object(o.c)((function(e){return e.ui.users})),s=Object(n.useState)({name:"",email:"",password:""}),i=Object(u.a)(s,2),d=i[0],j=i[1];return Object(a.jsxs)("div",{className:"signup-container",children:[Object(a.jsxs)("div",{className:"contents",children:[Object(a.jsx)("div",{className:"wtext",children:"Hello,"}),Object(a.jsx)("h1",{children:"Create account!"}),Object(a.jsx)("input",{type:"text",value:d.name,onChange:function(e){return j(Object(l.a)(Object(l.a)({},d),{},{name:e.target.value}))},placeholder:"Name"}),Object(a.jsx)("input",{type:"text",value:d.email,onChange:function(e){return j(Object(l.a)(Object(l.a)({},d),{},{email:e.target.value}))},placeholder:"Email"}),Object(a.jsx)("input",{type:"text",value:d.password,onChange:function(e){return j(Object(l.a)(Object(l.a)({},d),{},{password:e.target.value}))},placeholder:"Password"}),Object(a.jsx)("button",{onClick:function(){var e;""!==d.name&&""!==d.email&&""!==d.password?-1===r.findIndex((function(e){return e.email===d.email}))?(c((e=d,b("Registered Successfully."),{type:"ADD_USER",payload:e})),j(Object(l.a)(Object(l.a)({},d),{},{name:"",password:"",email:""}))):b("Email already registered !"):b("Please fill the values!")},children:"Create account"})]}),Object(a.jsx)("div",{className:"switch",onClick:function(){return t("login")},children:"Log In"})]})};var C=function(){var e=Object(n.useState)("login"),t=Object(u.a)(e,2),c=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:["login"===c&&Object(a.jsx)(g,{setType:r}),"signup"===c&&Object(a.jsx)(N,{setType:r})]})},E=c(104),T=c(28),w=c(105);var S=function(e){var t=e.product,c=Object(o.b)();return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsx)("img",{src:t.img,className:"image",alt:"product"}),Object(a.jsx)("div",{className:"name",children:t.title}),Object(a.jsx)(w.a,{name:"read-only",value:Math.round(t.rating),readOnly:!0}),Object(a.jsxs)("div",{className:"price",children:["Rs ",t.price]}),Object(a.jsx)(E.a,{variant:"contained",color:"primary",onClick:function(){var e=t.id;c(y(e))},children:Object(a.jsx)("i",{className:"fas fa-cart-plus"})})]})};var R=function(){var e,t=Object(o.c)((function(e){return e})),c=t.product.products;"true"===t.ui.filter?(e=Object(T.a)(c)).sort((function(e,t){var c=e.price,a=t.price,n=0;return c>a?n=1:c<a&&(n=-1),n})):e=t.product.products;var n=[];return n=""!==t.ui.search?e.filter((function(e){return-1!==e.title.toLowerCase().indexOf(t.ui.search.toLowerCase())})):e,Object(a.jsx)("div",{className:"product-page",children:n.map((function(e,t){return Object(a.jsx)(S,{product:e},t)}))})},_=c(26);var k=function(e){var t=e.product,c=Object(o.b)(),n=Object(o.c)((function(e){return e.product.products})).find((function(e){return e.id===t.id}));return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("img",{src:n.img}),Object(a.jsxs)("div",{className:"sub-info",children:[Object(a.jsx)("div",{className:"name",children:n.title}),Object(a.jsx)(w.a,{name:"read-only",value:Math.round(n.rating),readOnly:!0}),Object(a.jsxs)("div",{className:"price",children:[Object(a.jsx)("span",{children:"Rs"})," ",n.price]})]}),Object(a.jsxs)("div",{className:"qyt-container",children:[Object(a.jsx)("div",{className:"qty",children:"Quantity"}),Object(a.jsxs)("div",{className:"btn",children:[Object(a.jsx)(E.a,{variant:"contained",color:"primary",onClick:function(){var e;t.quantity>1&&c((e=t.id,b("Removed from Cart."),{type:"DECRESE_QUANTITY",payload:e}))},children:Object(a.jsx)("i",{className:"fas fa-minus-circle"})}),Object(a.jsx)("span",{className:"cnt",children:t.quantity}),Object(a.jsx)(E.a,{variant:"contained",color:"primary",onClick:function(){var e=t.id;c(y(e))},children:Object(a.jsx)("i",{className:"fas fa-plus-circle"})})]})]}),Object(a.jsx)("div",{className:"delete-cont",children:Object(a.jsx)(E.a,{variant:"contained",color:"secondary",onClick:function(){var e;c((e=t.id,b("Removed from Cart."),{type:"DELETE_PRODUCT_CART",payload:e}))},children:Object(a.jsx)("i",{className:"fas fa-trash-alt"})})})]})})};var D=function(){var e,t=Object(o.b)(),c=Object(o.c)((function(e){return e.cart.cart})),n=Object(o.c)((function(e){return e.product.products})),r=0,s=Object(_.a)(c);try{var i=function(){var t=e.value,c=n.find((function(e){return e.id===t.id}));r+=c.price*t.quantity};for(s.s();!(e=s.n()).done;)i()}catch(u){s.e(u)}finally{s.f()}return Object(a.jsxs)("div",{className:"cart-container",children:[0===c.length&&Object(a.jsx)("div",{className:"empty",children:"Cart is empty!"}),Object(a.jsx)("div",{className:"cartItems-container",children:c.map((function(e,t){return Object(a.jsx)(k,{product:e},t)}))}),Object(a.jsxs)("div",{className:"total",children:[Object(a.jsxs)(E.a,{color:"primary",onClick:function(){t(p("thankyou")),t((b("Cart checkout success."),{type:"CHECK_OUT"}))},children:["Check Out\xa0",Object(a.jsx)("i",{className:"fas fa-shopping-cart"})]}),Object(a.jsxs)("div",{className:"tprice",children:[Object(a.jsx)("span",{children:"RS"}),"\xa0 ",r," \xa0\xa0"]})]})]})};var I=function(e){var t=e.product,c=Object(o.c)((function(e){return e.product.products})).find((function(e){return e.id===t.id}));return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsx)("div",{children:c.title})," \xa0- \xa0",Object(a.jsxs)("div",{children:["Quantity: ",t.quantity]})," \xa0 - \xa0",Object(a.jsxs)("div",{children:["price: ",c.price]})]})};var U=function(){var e,t=Object(o.c)((function(e){return e.cart.order})),c=Object(o.c)((function(e){return e.product.products})),n=Object(o.c)((function(e){return e.ui.user.name})),r=0,s=Object(_.a)(t);try{var i=function(){var t=e.value,a=c.find((function(e){return e.id===t.id}));r+=a.price*t.quantity};for(s.s();!(e=s.n()).done;)i()}catch(u){s.e(u)}finally{s.f()}return Object(a.jsxs)("div",{className:"thank-container",children:[Object(a.jsxs)("h1",{children:[n," Thank You for Shopping With us!"]}),Object(a.jsxs)("div",{className:"order-container",children:[Object(a.jsx)("h2",{children:"Order Details"}),t.map((function(e,t){return Object(a.jsx)(I,{product:e},t)})),Object(a.jsx)("div",{className:"total",children:Object(a.jsxs)("div",{children:["Total : ",r]})})]})]})};var L=function(){var e,t=Object(o.b)(),c=Object(o.c)((function(e){return e}));return Object(n.useEffect)((function(){return t(function(){var e=Object(v.a)(f.a.mark((function e(t){var c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://my-json-server.typicode.com/Devilzer/Ecommerce-react-webapp/products");case 3:c=e.sent,a=c.data,t({type:"SET_PRODUCTS",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),e="true"===c.ui.filter?Object(a.jsx)("div",{className:"sort-con",children:Object(a.jsxs)("div",{onClick:function(){return t(O("false"))},children:["\xa0",Object(a.jsx)("span",{children:"Sort By Price"}),"\xa0",Object(a.jsx)("i",{className:"fas fa-times-circle"})]})}):Object(a.jsx)("div",{className:"sort-con",children:Object(a.jsxs)("div",{onClick:function(){return t(O("true"))},children:["\xa0",Object(a.jsx)("span",{children:"Sort By Price"}),"\xa0"]})}),Object(a.jsxs)("div",{className:"home-container",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("div",{className:"heading",onClick:function(){return t(p("home"))},children:"Ecommerce Store"}),"home"===c.ui.page&&Object(a.jsx)("input",{type:"text",placeholder:"Search Products....",value:c.ui.search,onChange:function(e){return t({type:"UPDATE_SEARCH",payload:e.target.value})}}),Object(a.jsxs)("div",{className:"head-buttons",children:[Object(a.jsxs)("div",{className:"cart",onClick:function(){return t(p("cart"))},children:[Object(a.jsx)("span",{children:c.cart.cart.length}),Object(a.jsx)("i",{className:"fab fa-opencart"})]}),Object(a.jsxs)(E.a,{onClick:function(){return t((b("Logout Success."),{type:"LOGOUT_USER"}))},children:["Log Out\xa0",Object(a.jsx)("i",{className:"fas fa-sign-out-alt"})]})]})]}),"home"===c.ui.page&&e,"home"===c.ui.page&&Object(a.jsx)(R,{}),"cart"===c.ui.page&&Object(a.jsx)(D,{}),"thankyou"===c.ui.page&&Object(a.jsx)(U,{})]})};c(87),c(88);var A=function(){var e=Object(o.c)((function(e){return e.ui.isLoggedIn}));return Object(a.jsxs)("div",{className:"App",children:[!1===e&&Object(a.jsx)(C,{}),!0===e&&Object(a.jsx)(L,{})]})},P=c(14),q={page:"home",filter:"false",search:"",isLoggedIn:!1,users:[],user:{}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":return Object(l.a)(Object(l.a)({},e),{},{users:[].concat(Object(T.a)(e.users),[t.payload])});case"LOGIN_USER":return Object(l.a)(Object(l.a)({},e),{},{isLoggedIn:!0,user:t.payload});case"UPDATE_SEARCH":return Object(l.a)(Object(l.a)({},e),{},{search:t.payload});case"SET_FILTER":return Object(l.a)(Object(l.a)({},e),{},{filter:t.payload});case"SET_PAGE":return Object(l.a)(Object(l.a)({},e),{},{page:t.payload});case"LOGOUT_USER":return Object(l.a)(Object(l.a)({},e),{},{isLoggedIn:!1,user:{}});default:return e}},H={products:[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS":return Object(l.a)(Object(l.a)({},e),{},{products:t.payload});default:return e}},F={cart:[],order:[]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT_CART":var c=e.cart,a=c.findIndex((function(e,c){if(e.id===t.payload)return!0}));if(-1===a){var n={id:t.payload,quantity:1};c.push(n)}else{var r=c[a].quantity;c[a].quantity=r+1}return Object(l.a)(Object(l.a)({},e),{},{cart:c});case"DECRESE_QUANTITY":var s=e.cart,i=s.findIndex((function(e,c){if(e.id===t.payload)return!0})),o=s[i].quantity;return s[i].quantity=o-1,Object(l.a)(Object(l.a)({},e),{},{cart:s});case"DELETE_PRODUCT_CART":var u=e.cart,d=u.findIndex((function(e,c){if(e.id===t.payload)return!0}));return u.splice(d,1),Object(l.a)(Object(l.a)({},e),{},{cart:u});case"CHECK_OUT":var j=e.cart;return Object(l.a)(Object(l.a)({},e),{},{cart:[],order:j});default:return e}},Q=Object(P.combineReducers)({ui:G,product:B,cart:M}),W=c(49),Y=c(50),J=Object(P.createStore)(Q,Object(W.composeWithDevTools)(Object(P.applyMiddleware)(Y.a)));i.a.render(Object(a.jsx)(o.a,{store:J,children:Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.bf8aad63.chunk.js.map