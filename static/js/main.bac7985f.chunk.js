(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{49:function(t,e,n){"use strict";n.r(e);var a,r=n(5),c=n(0),s=n(16),o=n.n(s),i=n(21),u=n(4),j=n(9),d=n.n(j),b=n(8),l=n(3),O=n(15),p=n(11),f=n(14),x=n(12),h=n(19),m=n(20),v=n(1),k=x.a.div(a||(a=Object(p.a)(["\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  padding: 8px;\n  margin-bottom: 8px;\n  background-color: white;\n"])));var g=function(t){return Object(v.jsx)(f.b,{draggableId:t.task.id,index:t.index,children:function(e){return Object(v.jsxs)(k,Object(l.a)(Object(l.a)(Object(l.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:[t.task.content,Object(v.jsx)("span",{onClick:function(){return function(e,n,a){var r=t.state.columns[e],c=Array.from(r.taskIds);c.splice(n,1);var s=t.state.tasks,o=(s[a],Object(h.a)(s,[a].map(m.a)));t.setState(Object(l.a)(Object(l.a)({},t.state),{},{tasks:Object(l.a)({},o),columns:Object(l.a)(Object(l.a)({},t.state.columns),{},Object(b.a)({},e,Object(l.a)(Object(l.a)({},r),{},{taskIds:c})))}))}(t.columnId,t.index,t.task.id)},children:" X"})]}))}})};var y,S,I,w=function(t){var e=Object(c.useState)(!0),n=Object(r.a)(e,2),a=n[0],s=n[1],o=Object(c.useState)(""),i=Object(r.a)(o,2),u=i[0],j=i[1];return Object(v.jsx)("div",{children:a?Object(v.jsx)("button",{onClick:function(){s(!1)},children:"New"}):Object(v.jsx)("input",{type:"text",value:u,onChange:function(t){j(t.target.value)},onBlur:function(){s(!0),function(e,n){var a="task-"+Math.floor(1e5*Math.random()),r=t.state.columns[e],c=Array.from(r.taskIds);c.push(a);var s={id:a,content:n};t.setState(Object(l.a)(Object(l.a)({},t.state),{},{tasks:Object(l.a)(Object(l.a)({},t.state.tasks),{},Object(b.a)({},a,s)),columns:Object(l.a)(Object(l.a)({},t.state.columns),{},Object(b.a)({},e,Object(l.a)(Object(l.a)({},t.state.columns[e]),{},{taskIds:c})))}))}(t.columnId,u),j("")}})})},C=x.a.div(y||(y=Object(p.a)(["\n  margin: 8px;\n  border: 1px solid lightgrey;\n  border-radius: 2px;\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 10px;\n"]))),P=x.a.h3(S||(S=Object(p.a)(["\n  padding: 8px;\n"]))),A=x.a.div(I||(I=Object(p.a)(["\n  padding: 8px;\n"])));var T=function(t){return Object(v.jsx)(f.b,{draggableId:t.column.id,index:t.index,children:function(e){return Object(v.jsxs)(C,Object(l.a)(Object(l.a)({},e.draggableProps),{},{ref:e.innerRef,children:[Object(v.jsxs)(P,Object(l.a)(Object(l.a)({},e.dragHandleProps),{},{children:[t.column.title,Object(v.jsx)("span",{onClick:function(){return function(e,n){var a=t.state.columns[e].taskIds.reduce((function(t,e){return t[e],Object(h.a)(t,[e].map(m.a))}),t.state.tasks),r=t.state.columns,c=(r[e],Object(h.a)(r,[e].map(m.a))),s=Array.from(t.state.columnOrder);s.splice(n,1),t.setState({tasks:Object(l.a)({},a),columns:Object(l.a)({},c),columnOrder:s})}(t.column.id,t.index)},children:" X"})]})),Object(v.jsx)(f.c,{droppableId:t.column.id,type:"task",children:function(e){return Object(v.jsxs)(A,Object(l.a)(Object(l.a)({},e.droppableProps),{},{ref:e.innerRef,children:[t.tasks.map((function(e,n){return Object(v.jsx)(g,{task:e,index:n,columnId:t.column.id,state:t.state,setState:t.setState},e.id)})),e.placeholder]}))}}),Object(v.jsx)(w,{columnId:t.column.id,state:t.state,setState:t.setState})]}))}})};var J,N=function(t){var e=Object(c.useState)(!0),n=Object(r.a)(e,2),a=n[0],s=n[1],o=Object(c.useState)(""),i=Object(r.a)(o,2),u=i[0],j=i[1];return Object(v.jsx)("div",{children:a?Object(v.jsx)("button",{onClick:function(){s(!1)},children:"New Column"}):Object(v.jsx)("input",{type:"text",value:u,onChange:function(t){j(t.target.value)},onBlur:function(){s(!0),function(e){var n=Array.from(t.state.columnOrder),a="column-"+Math.floor(1e5*Math.random());n.push(a);var r={id:a,title:e,taskIds:[]};t.setState(Object(l.a)(Object(l.a)({},t.state),{},{columnOrder:n,columns:Object(l.a)(Object(l.a)({},t.state.columns),{},Object(b.a)({},a,r))}))}(u),j("")}})})},R=x.a.div(J||(J=Object(p.a)(["\n  display: flex;\n"])));var B=function(t){var e={tasks:{},columns:{},columnOrder:[]},n=Object(c.useState)(e),a=Object(r.a)(n,2),s=a[0],o=a[1];function i(){return(i=Object(O.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/board",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token},body:JSON.stringify(s)});case 2:return n=e.sent,e.next=5,n.json();case 5:e.sent;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(O.a)(d.a.mark((function e(){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/board",{headers:{Authorization:"Bearer "+t.token}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.board);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){(function(){return u.apply(this,arguments)})().then((function(t){return o(t)}))}),[t.token]),Object(c.useEffect)((function(){s!==e&&function(){i.apply(this,arguments)}()}),[s]),Object(v.jsxs)(f.a,{onDragEnd:function(t){var e,n=t.destination,a=t.source,r=t.draggableId,c=t.type;if(n&&(n.droppableId!==a.droppableId||n.index!==a.index)){if("column"===c){var i=Array.from(s.columnOrder);return i.splice(a.index,1),i.splice(n.index,0,r),void o(Object(l.a)(Object(l.a)({},s),{},{columnOrder:i}))}var u=s.columns[a.droppableId],j=s.columns[n.droppableId];if(u!==j){var d=Array.from(u.taskIds);d.splice(a.index,1);var O=Object(l.a)(Object(l.a)({},u),{},{taskIds:d}),p=Array.from(j.taskIds);p.splice(n.index,0,r);var f=Object(l.a)(Object(l.a)({},j),{},{taskIds:p});o(Object(l.a)(Object(l.a)({},s),{},{columns:Object(l.a)(Object(l.a)({},s.columns),{},(e={},Object(b.a)(e,O.id,O),Object(b.a)(e,f.id,f),e))}))}else{var x=Array.from(u.taskIds);x.splice(a.index,1),x.splice(n.index,0,r);var h=Object(l.a)(Object(l.a)({},u),{},{taskIds:x});o(Object(l.a)(Object(l.a)({},s),{},{columns:Object(l.a)(Object(l.a)({},s.columns),{},Object(b.a)({},h.id,h))}))}}},children:[Object(v.jsx)(N,{state:s,setState:o}),Object(v.jsx)(f.c,{droppableId:"all-columns",direction:"horizontal",type:"column",children:function(t){return Object(v.jsxs)(R,Object(l.a)(Object(l.a)({},t.droppableProps),{},{ref:t.innerRef,children:[s.columnOrder.map((function(t,e){var n=s.columns[t],a=n.taskIds.map((function(t){return s.tasks[t]}));return Object(v.jsx)(T,{column:n,tasks:a,index:e,state:s,setState:o},n.id)})),t.placeholder]}))}})]})};var _=function(t){var e=Object(c.useState)(),n=Object(r.a)(e,2),a=n[0],s=n[1],o=Object(c.useState)(),i=Object(r.a)(o,2),j=i[0],b=i[1],l=Object(u.g)();function p(){return(p=Object(O.a)(d.a.mark((function t(){var e,n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(e=new URLSearchParams).append("username",a),e.append("password",j),t.next=5,fetch("/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e.toString()});case 5:return n=t.sent,t.next=8,n.json();case 8:return r=t.sent,t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){return p.apply(this,arguments)}().then((function(e){t.setToken(e.access_token),localStorage.setItem("token",JSON.stringify(e.access_token)),l.push("/")}))},children:[Object(v.jsxs)("p",{children:["Username: ",Object(v.jsx)("input",{type:"text",onChange:function(t){return s(t.target.value)}})]}),Object(v.jsxs)("p",{children:["Password: ",Object(v.jsx)("input",{type:"password",onChange:function(t){return b(t.target.value)}})]}),Object(v.jsx)("p",{children:Object(v.jsx)("button",{children:"Login"})})]})})};var E=function(t){var e=Object(c.useState)(),n=Object(r.a)(e,2),a=n[0],s=n[1],o=Object(c.useState)(),i=Object(r.a)(o,2),j=i[0],b=i[1],l=Object(u.g)();function p(){return(p=Object(O.a)(d.a.mark((function t(){var e,n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={username:a,password_hash:j},t.next=3,fetch("/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){return p.apply(this,arguments)}().then((function(e){t.setToken(e.access_token),localStorage.setItem("token",JSON.stringify(e.access_token)),l.push("/")}))},children:["Username ",Object(v.jsx)("input",{type:"text",onChange:function(t){return s(t.target.value)}}),"Password ",Object(v.jsx)("input",{type:"password",onChange:function(t){return b(t.target.value)}}),Object(v.jsx)("button",{children:"Register"})]})})};function M(){var t=Object(c.useState)((function(){return function(){var t=localStorage.getItem("token");return JSON.parse(t)}()})),e=Object(r.a)(t,2),n=e[0],a=e[1];return Object(v.jsx)(i.a,{children:Object(v.jsxs)(u.d,{children:[Object(v.jsx)(u.b,{exact:!0,path:"/",children:n?Object(v.jsx)(B,{token:n}):Object(v.jsx)(u.a,{to:"/login"})}),Object(v.jsx)(u.b,{path:"/login",children:Object(v.jsx)(_,{setToken:a})}),Object(v.jsx)(u.b,{path:"/register",children:Object(v.jsx)(E,{setToken:a})})]})})}o.a.render(Object(v.jsx)(M,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.bac7985f.chunk.js.map