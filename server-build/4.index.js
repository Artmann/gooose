exports.ids=[4],exports.modules={40:function(n,e,r){"use strict";r.r(e);var t=r(14),o=r(1),a=r(0),c=r.n(a),i=r(10),u=r(30),d=r(19),l=Object(a.createContext)(d.a),f=l.Consumer,m=(l.Provider,r(18)),s=r(31),b=r.n(s),p=r(2),g=r.n(p),v=r(5);function x(){var n=Object(o.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  letter-spacing: 0.04rem;\n  padding: 0.25rem 1.25rem;\n  text-transform: uppercase;\n"]);return x=function(){return n},n}function h(){var n=Object(o.a)(["\n  flex: 1;\n  line-height: 1.75;\n  font-size: 1.0rem;\n  padding: 0.5rem 1.25rem;\n\n  p { margin: 0; }\n"]);return h=function(){return n},n}function E(){var n=Object(o.a)(["\n  background: ",";\n  height: 2.5rem;\n  left: 0;\n  margin-bottom: 1rem;\n  position: absolute;\n  top: 1.5rem;\n  width: 0.25rem;\n"]);return E=function(){return n},n}function j(){var n=Object(o.a)(["\n  ","\n  background: ",";\n  border: solid 1px ","\n  color: ",";\n  display: flex;\n  flex-direction: column;\n  font-size: 1.25rem;\n  justify-content: space-between;\n  margin-bottom: 2.5rem;\n  padding: 0.5rem 0.25rem;\n  position: relative;\n  text-decoration: none;\n  width: 100%;\n"]);return j=function(){return n},n}var O=g.a.div(j(),m.a,function(n){return n.background},function(n){return n.borderColor},function(n){return n.color}),k=g.a.div(E(),function(n){return n.color}),C=g.a.div(h()),y=g.a.div(x(),function(n){return n.color});var w=Object(v.withRouter)(function(n){var e=n.card,r=n.history,t=n.index,o=e.color,a=e.key,i=e.text;return c.a.createElement(u.Draggable,{draggableId:e.id,index:t},function(n,t){return c.a.createElement(f,null,function(t){return c.a.createElement(O,Object.assign({background:t.containerBackground,borderColor:t.borderColor,color:t.textColor,ref:n.innerRef},n.draggableProps,n.dragHandleProps,{onClick:function(){return r.push("/cards/".concat(e.id))}}),c.a.createElement(k,{color:o}),c.a.createElement(C,{dangerouslySetInnerHTML:{__html:b()(i||"")}}),c.a.createElement(y,{color:t.secondaryTextColor},a))})})}),z=r(6);function M(){var n=Object(o.a)([" display: block; "]);return M=function(){return n},n}function S(){var n=Object(o.a)(["\n  color: ","\n  display: none;\n  font-size: 1rem;\n  font-weight: 700;\n  letter-spacing: 0.07rem;\n  margin-bottom: 1.5rem;\n  text-align: center;\n  text-transform: uppercase;\n  width: 100%;\n\n  ","\n"]);return S=function(){return n},n}function D(){var n=Object(o.a)(["\n    display: flex;\n    flex: 1;\n    max-width: 24rem;\n    padding-top: 2rem;\n  "]);return D=function(){return n},n}function I(){var n=Object(o.a)(["\n  align-items: center;\n  border-right: solid 1px ",";\n  display: ",";\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 1.5rem 2rem;\n\n  &:last-child {\n    border: none;\n  }\n\n  ","\n"]);return I=function(){return n},n}var L=g.a.div(I(),function(n){return n.borderColor},function(n){return n.isCurrent?"flex":"none"},z.a.desktop(D())),P=g.a.div(S(),function(n){return n.color},z.a.desktop(M()));var R=function(n){var e=n.cards,r=n.column,t=n.currentColumn,o=n.onCardMoved,a=void 0===o?function(){}:o,i=r.id===t.id,d=e.filter(function(n){return n.columnId===r.id}).sort(function(n,e){return n.order-e.order});return c.a.createElement(u.DragDropContext,{onDragEnd:function(n){var e=n.destination,t=n.source,o=d[t.index];e&&a(r,o,e.index)}},c.a.createElement(u.Droppable,{droppableId:"droppable"},function(n,e){return c.a.createElement(f,null,function(e){return c.a.createElement(L,{borderColor:e.borderColor,isCurrent:i,ref:n.innerRef},c.a.createElement(P,{color:e.headerColor},r.name),d.map(function(n,e){return c.a.createElement(w,{card:n,key:e,index:e})}))})}))},H=r(32),T=r.n(H);function _(){var n=Object(o.a)(["\n  color: ",";\n  font-size: 1rem;\n  letter-spacing: 0.05rem;\n  text-transform: uppercase;\n"]);return _=function(){return n},n}function B(){var n=Object(o.a)(["\n    position: relative;\n  "]);return B=function(){return n},n}function N(){var n=Object(o.a)(["\n  background: #fff;\n  border: solid 1px ",";\n  display: flex;\n  height: 3rem;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n\n  ","\n"]);return N=function(){return n},n}var q=g.a.div(N(),function(n){return n.borderColor},z.a.desktop(B())),A=g.a.h1(_(),function(n){return n.color});var F=function(n){var e=n.title;return c.a.createElement(f,null,function(n){return c.a.createElement(q,{borderColor:n.borderColor},c.a.createElement(A,{color:n.textColor},e))})};function G(){var n=Object(o.a)(["\n    padding-top: 0;\n  "]);return G=function(){return n},n}function J(){var n=Object(o.a)(["\n  background: ",";\n  padding-top: 2.5rem;\n  position: relative;\n\n  ","\n"]);return J=function(){return n},n}var K=g.a.div(J(),function(n){return n.background},z.a.desktop(G()));function Q(n){var e=n.children,r=n.title;return c.a.createElement(f,null,function(n){return c.a.createElement(K,{background:n.background},c.a.createElement(F,{title:r}),e)})}var U=r(12);function V(){var n=Object(o.a)(["\n  background: #15cd72;\n  bottom: 1rem;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 1rem;\n  line-height: 1rem;\n  padding: 1rem;\n  position: fixed;\n  right: 1rem;\n  z-index: 100;\n"]);return V=function(){return n},n}function W(){var n=Object(o.a)(["\n  display: flex;\n"]);return W=function(){return n},n}var X=g.a.div(W()),Y=g()(v.Link)(V());e.default=Object(U.connect)(function(n){var e=n.data;return{boards:e.boards,cards:e.cards}})(function(n){var e=n.boards,r=n.cards,o=n.dispatch,u=n.match.params.id,d=Object(a.useState)(0),l=Object(t.a)(d,2),m=l[0],s=l[1];if(Object(a.useEffect)(function(){o(Object(i.c)(u)),o(Object(i.e)())},[]),0===e.length)return c.a.createElement("div",null,"Loading...");var b,p,g=e.find(function(n){return"".concat(n.id)===u}),v=g.columns[m],x=Object(z.b)()?v.name:g.name,h=!1,E=function(n,e,r){o(Object(i.h)(n,e,r))};return c.a.createElement(T.a,{onSwipeStart:function(){h=!1},onSwipeMove:function(n){h?p=n:b=n,h=!0},onSwipeEnd:function(){var n=b.x-p.x,e=n>0?Math.min(m+1,g.columns.length-1):Math.max(0,m-1);Math.abs(n)>50&&s(e)}},c.a.createElement(f,null,function(n){return c.a.createElement(Q,{background:n.background,title:x},c.a.createElement(X,null,g.columns.map(function(n,e){return c.a.createElement(R,{column:n,currentColumn:v,key:e,cards:r,onCardMoved:E})})),c.a.createElement(Y,{to:"/boards/".concat(g.id,"/cards/new")},c.a.createElement("i",{className:"fas fa-plus"})))}))})}};