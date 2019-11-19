exports.ids=[1],exports.modules={34:function(n,e,t){"use strict";var r=t(1),a=t(0),o=t.n(a),u=t(2);function i(){var n=Object(r.a)(["\n  background: #cc8888;\n  color: #fff;\n  display: block;\n  padding: 0.75rem 1rem;\n  margin-bottom: 2rem;\n"]);return i=function(){return n},n}var c=t.n(u).a.div(i());e.a=function(n){var e=n.message;return e?o.a.createElement(c,null,e):null}},35:function(n,e,t){"use strict";t.d(e,"a",function(){return d});var r=t(1),a=t(0),o=t.n(a),u=t(2),i=t.n(u);function c(){var n=Object(r.a)(["\n  background: transparent;\n  border: none;\n  border-bottom: solid 1px #555;\n  box-sizing: border-box;\n  color: ",";\n  font-size: 0.8rem;\n  margin-bottom: 1px;\n  padding: 0.5rem 0rem;\n  width: 100%;\n\n  &:-webkit-autofill,\n  &:-webkit-autofill:hover,\n  &:-webkit-autofill:focus {\n    background: transparent;\n    color: #f0f0f0;\n    -webkit-box-shadow: 0px;\n  }\n\n  &:focus {\n    border-bottom: solid 2px #6c72b5;\n    margin-bottom: 0px;\n    outline: none;\n  }\n"]);return c=function(){return n},n}function l(){var n=Object(r.a)(["\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n"]);return l=function(){return n},n}function m(){var n=Object(r.a)(["\n  margin-bottom: 2rem;\n"]);return m=function(){return n},n}var s=i.a.div(m()),d=i.a.label(l()),f=i.a.input(c(),function(n){return n.theme.inputColor});e.b=function(n){var e=n.autoFocus,t=void 0!==e&&e,r=n.label,a=n.name,u=n.placeholder,i=void 0===u?"":u,c=n.required,l=void 0!==c&&c,m=n.type,b=void 0===m?"text":m,v=n.value,g=n.onChange,p=void 0===g?function(){}:g;return o.a.createElement(s,null,o.a.createElement(d,null,r),o.a.createElement(f,{autoFocus:t,name:a,placeholder:i,required:l,type:b,value:v,onChange:p,"data-test-input":a}))}},36:function(n,e,t){"use strict";var r=t(1),a=t(2),o=t.n(a);function u(){var n=Object(r.a)(["\n  min-height: 100vh;\n  padding: 2rem;\n  width: 100%;\n"]);return u=function(){return n},n}e.a=o.a.div(u())},37:function(n,e,t){"use strict";t.d(e,"a",function(){return j}),t.d(e,"c",function(){return O}),t.d(e,"b",function(){return x}),t.d(e,"e",function(){return w}),t.d(e,"d",function(){return E});var r=t(1),a=t(5),o=t(6),u=t(18),i=t(2),c=t.n(i);function l(){var n=Object(r.a)(["\n    margin: 0 0.5rem;\n  "]);return l=function(){return n},n}function m(){var n=Object(r.a)(["\n  font-size: 0.75rem;\n  margin-right: 0.5rem;\n  text-decoration: none;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  ","\n"]);return m=function(){return n},n}function s(){var n=Object(r.a)(["\n  padding: 1rem 0;\n  width: 100%;\n"]);return s=function(){return n},n}function d(){var n=Object(r.a)(["\n    margin-top: 0.5rem 0;\n  "]);return d=function(){return n},n}function f(){var n=Object(r.a)(["\n  ","\n"]);return f=function(){return n},n}function b(){var n=Object(r.a)(["\n    margin-bottom: 3rem;\n  "]);return b=function(){return n},n}function v(){var n=Object(r.a)(["\n  font-size: 1.25rem;\n  margin-bottom: 2rem;\n\n  ","\n"]);return v=function(){return n},n}function g(){var n=Object(r.a)(["\n    max-width: 20rem;\n  "]);return g=function(){return n},n}function p(){var n=Object(r.a)(["\n    ","\n    height: auto;\n    max-width: 20rem;\n  "]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  margin: 0;\n  padding: 2rem 3rem;\n  width: 100%;\n\n  ","\n\n  ","\n"]);return h=function(){return n},n}var j=c.a.form(h(),function(n){return n.theme.containerBackground},o.a.tablet(p(),u.a),o.a.desktop(g())),O=c.a.h1(v(),o.a.tablet(b())),x=c.a.div(f(),o.a.tablet(d())),w=c.a.div(s()),E=c()(a.Link)(m(),o.a.tablet(l()))},38:function(n,e,t){"use strict";var r=t(1),a=t(2),o=t.n(a),u=t(36);function i(){var n=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n"]);return i=function(){return n},n}e.a=o()(u.a)(i())},43:function(n,e,t){"use strict";t.r(e);var r=t(3),a=t.n(r),o=t(4),u=t(14),i=t(0),c=t.n(i),l=t(37),m=t(17),s=t(34),d=t(16),f=t(35);var b=function(n){var e=n.errorMessage,t=void 0===e?null:e,r=n.isSubmitting,a=void 0!==r&&r,o=n.signIn,b=Object(i.useState)(""),v=Object(u.a)(b,2),g=v[0],p=v[1],h=Object(i.useState)(""),j=Object(u.a)(h,2),O=j[0],x=j[1];return c.a.createElement(l.a,{onSubmit:function(n){n.preventDefault(),o(g,O)}},a?c.a.createElement(d.a,null):"",c.a.createElement(l.c,null,"Welcome Back ",c.a.createElement("span",{role:"img","aria-label":"smiley"},"😊")),c.a.createElement(s.a,{message:t}),c.a.createElement(f.b,{label:"Email",name:"email",placeholder:"john.smith@company.com",required:!0,type:"email",value:g,onChange:function(n){var e=n.target;return p(e.value)}}),c.a.createElement(f.b,{label:"Password",name:"password",placeholder:"****************",required:!0,type:"password",value:O,onChange:function(n){var e=n.target;return x(e.value)}}),c.a.createElement(l.b,null,c.a.createElement(m.a,{"data-test-sign-in-button":"true"},"Sign In")),c.a.createElement(l.e,null,c.a.createElement(l.d,{to:"/sign-up"},"Sign Up"),c.a.createElement(l.d,{to:"/reset-password"},"Reset Password")))},v=t(38),g=t(10),p=t(12);e.default=Object(p.connect)(null)(function(n){var e=n.api,t=n.dispatch,r=n.history,l=Object(i.useState)(null),m=Object(u.a)(l,2),s=m[0],d=m[1],f=Object(i.useState)(!1),p=Object(u.a)(f,2),h=p[0],j=p[1],O=(x=Object(o.a)(a.a.mark(function n(o,u){var i,c;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(null),j(!0),n.next=5,e.createSession(o,u);case 5:i=n.sent,c=i.token,localStorage.setItem("token",c),t(Object(g.b)()),j(!1),r.push("/boards"),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),j(!1),d(n.t0.toString());case 17:case"end":return n.stop()}},n,null,[[0,13]])})),function(n,e){return x.apply(this,arguments)});var x;return c.a.createElement(v.a,null,c.a.createElement(b,{errorMessage:s,isSubmitting:h,signIn:O}))})}};