(this["webpackJsonpmy-test"]=this["webpackJsonpmy-test"]||[]).push([[0],{109:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(25),s=n.n(r),i=(n(99),n(18)),o=n(14),j=n(8),l=n(168),u=n(169),b=n(164),d=n(165),O=n(43),h=(n(72),n(30)),f=n(1),p=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),i=s[0],p=s[1],x=Object(c.useState)(null),g=Object(j.a)(x,2),m=g[0],v=g[1],y=Object(c.useState)(null),S=Object(j.a)(y,2),_=S[0],w=S[1],k=Object(c.useState)(!1),E=Object(j.a)(k,2),T=E[0],U=E[1],D=Object(h.b)(),N=Object(h.c)((function(e){return e.loginStatusReducer})),C=Object(o.f)();Object(c.useEffect)((function(){console.log("uToken",N),""!==N.token&&C("/allUsers")})),Object(c.useEffect)((function(){null!==m&&!0!==m&&U(!T)}),[m]),Object(c.useEffect)((function(){var e;null!==_&&""!==_&&(C("/allUsers"),D((e=_,console.log(e),{type:"Token_Login",payload:e})))}),[_]);return Object(f.jsx)(l.a,{children:Object(f.jsxs)(u.a,{elevation:10,style:{padding:20,height:"400px",width:380,margin:"20px auto",align:"center"},children:[Object(f.jsx)(l.a,{align:"center",children:Object(f.jsx)("h1",{children:"Login Here"})}),Object(f.jsx)(b.a,{label:"UserName",placeholder:"Enter Your Email",value:n,onChange:function(e){a(e.target.value)},fullWidth:!0,required:!0}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(b.a,{label:"Password",placeholder:"Enter Your Password",type:"password",value:i,onChange:function(e){p(e.target.value)},fullWidth:!0,required:!0}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),T?Object(f.jsx)("h2",{children:"loading...."}):Object(f.jsx)(d.a,{disabled:T,type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0",height:40},fullWidth:!0,onClick:function(e){U(!T),e.preventDefault(),a(""),p("");var t={email:n,password:i};fetch("https://reqres.in/api/login",{method:"POST",headers:{Accept:"Application/json","content-type":"Application/json"},body:JSON.stringify(t)}).then((function(e){return console.log(e),200===e.status?(v(!0),e.json()):(v(!1),O.b.warning("Incorrect Username passwords",{position:"top-center"}),e.json())})).then((function(e){console.log(e),e.hasOwnProperty("token")&&""!==e.token&&w(e.token)}))},children:"signin"}),Object(f.jsx)(O.a,{})]})})},x=[{path:"/",element:Object(f.jsx)(p,{})}],g=n(37),m=n.n(g),v=n(51),y=(n(109),n(32)),S=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(h.b)(),s=Object(o.f)();Object(h.c)((function(e){return e.loginStatusReducer}));function i(){return(i=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users?page=2");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n.data),a(n.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"app-container",children:[Object(f.jsx)(d.a,{variant:"outlined",onClick:function(){console.log("Delete Token"),r({type:"Delete_Token"}),s("/")},children:"Log Out"}),Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"#"}),Object(f.jsx)("td",{children:"ID"}),Object(f.jsx)("td",{children:"First_Name"}),Object(f.jsx)("td",{children:"Last_Name"}),Object(f.jsx)("td",{children:"Email"}),Object(f.jsx)("td",{children:"UserInfo"})]})}),Object(f.jsx)("tbody",{children:n.map((function(e,t){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t}),Object(f.jsx)("td",{children:e.id}),Object(f.jsx)("td",{children:e.first_name}),Object(f.jsx)("td",{children:e.last_name}),Object(f.jsx)("td",{children:e.email}),Object(f.jsx)("td",{children:Object(f.jsx)(y.b,{to:"/allUsers/userupdate",state:e.id,children:"Update"})}),Object(f.jsx)("td",{children:Object(f.jsx)(y.b,{to:"#",state:e.id,children:"Delete"})})]})})}))})]})]})})},_=n(85),w=n.n(_),k=n(171),E=n(166),T=n(170),U=function(){var e={margin:"8px 0",height:40},t=Object(o.e)(),n=Object(c.useState)(null),a=Object(j.a)(n,2),r=a[0],s=a[1],h=Object(c.useState)({}),p=Object(j.a)(h,2),x=p[0],g=p[1],y=Object(c.useState)(!0),S=Object(j.a)(y,2),_=S[0],U=S[1],D=Object(c.useState)(!1),N=Object(j.a)(D,2),C=N[0],I=N[1],L=Object(c.useState)(!1),F=Object(j.a)(L,2),q=F[0],W=F[1],P=Object(c.useState)(!1),A=Object(j.a)(P,2),R=(A[0],A[1]);Object(c.useEffect)((function(){0!==t.state&&null!==t.state&&(W(!0),s(t.state))}),[]),Object(c.useEffect)((function(){null===r&&""===r||function(){J.apply(this,arguments)}()}),[r]);function J(){return(J=Object(v.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://reqres.in/api/users/ ".concat(r));case 2:t=e.sent,console.log(t),n=Object(i.a)({},t.data.data),g(n),W(!q);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),t=Object(i.a)({},x),e.next=4,fetch("https://reqres.in/api/users/2",{method:"PUT",headers:{Accept:"Application/json","content-type":"Application/json"},body:JSON.stringify(t)}).then((function(e){if(200===e.status)return e.json();R(!0)})).then((function(e){console.log("",e),console.log(e.data),g(Object(i.a)({},e)),U(!_),I(!1),O.b.success("Your data has been successfully updated",{position:"top-center"})}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.jsx)(f.Fragment,{children:q?Object(f.jsx)(E.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:q,children:Object(f.jsx)(T.a,{color:"inherit"})}):Object(f.jsx)(l.a,{children:Object(f.jsxs)(u.a,{elevation:10,style:{padding:20,height:"300px",width:300,margin:"20px auto",align:"center"},children:[Object(f.jsxs)(k.a,{variant:"h4",component:"h4",children:["User ID : ",x.id]}),_?Object(f.jsx)(b.a,{value:x.first_name,onChange:function(e){var t=Object(i.a)({},x);t.first_name=e.target.value,g(t)},fullWidth:!0,required:!0}):"First Name : ".concat(x.first_name),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),_?Object(f.jsx)(b.a,{value:x.last_name,onChange:function(e){var t=Object(i.a)({},x);t.last_name=e.target.value,g(t)},fullWidth:!0,required:!0}):"Last Name : ".concat(x.last_name),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),_?Object(f.jsx)(b.a,{value:x.email,onChange:function(e){var t=Object(i.a)({},x);t.email=e.target.value,g(t)},fullWidth:!0,required:!0}):"Email ID : ".concat(x.email),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),C?Object(f.jsx)(d.a,{disabled:!0,type:"submit",color:"error",variant:"contained",style:e,fullWidth:!0,children:"Loading..."}):Object(f.jsx)(d.a,{type:"submit",color:"primary",variant:"contained",style:e,fullWidth:!0,onClick:function(){return X.apply(this,arguments)},children:"Save"}),Object(f.jsx)(O.a,{})]})})})},D=[{path:"/allUsers",element:Object(f.jsx)(S,{})},{path:"/allUsers/userupdate",element:Object(f.jsx)(U,{})}],N=function(){var e=Object(h.c)((function(e){return e.loginStatusReducer}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(o.c,{children:[e.token&&D.map((function(e){return Object(f.jsx)(o.a,Object(i.a)({exact:!0},e))})),x.map((function(e){return Object(f.jsx)(o.a,Object(i.a)({},e))}))]})})},C=n(59),I={token:"",listOfUser:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Token_Login":return console.log("Store",t),Object(i.a)(Object(i.a)({},e),{},{token:t.payload});case"Delete_Token":var n=Object(i.a)({},e);return n.token="",n;default:return e}},F=Object(C.a)({loginStatusReducer:L}),q=Object(C.b)(F,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};q.subscribe((function(){console.log(q.getState())})),s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(y.a,{children:Object(f.jsx)(h.a,{store:q,children:Object(f.jsx)(N,{})})})}),document.getElementById("root")),W()},99:function(e,t,n){}},[[128,1,2]]]);
//# sourceMappingURL=main.f9d7655f.chunk.js.map