(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),s=(c(20),c(21),c(22),c(2)),r=c(6),j=c.n(r),i=c(0),l=function(e){var t=e.to,c=e.text;return Object(i.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},children:c})},o=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",text:"Home"}),Object(i.jsx)(l,{to:"/people",text:"People"})]})})})},b=c(8),d=c(11),h=c(4),O=c(1);function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var u=function(e){return e[e.NONE=0]="NONE",e.UPLOAD_ERROR="Unable to upload people",e}({}),p=(c(24),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.person;return Object(i.jsx)(a.b,{to:"../".concat(t.slug),className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},f=function(e){var t=e.people,c=e.selectedPerson;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){var n=t.find((function(t){return t.name===e.motherName})),a=t.find((function(t){return t.name===e.fatherName}));return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(m,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:n?Object(i.jsx)(m,{person:n}):e.motherName||"-"}),Object(i.jsx)("td",{children:a?Object(i.jsx)(m,{person:a}):e.fatherName||"-"})]},e.slug)}))})]})},v=function(){var e=Object(s.h)().slug,t=void 0===e?"":e,c=Object(O.useState)([]),n=Object(h.a)(c,2),a=n[0],r=n[1],j=Object(O.useState)(u.NONE),l=Object(h.a)(j,2),o=l[0],m=l[1],v=Object(O.useState)(!1),N=Object(h.a)(v,2),g=N[0],y=N[1],P=function(){var e=Object(d.a)(Object(b.a)().mark((function e(){var t;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,x();case 4:t=e.sent,r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),m(u.UPLOAD_ERROR);case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){P()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[g&&Object(i.jsx)(p,{}),o!==u.NONE&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!g&&!a.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),o===u.NONE&&a.length>0&&Object(i.jsx)(f,{people:a,selectedPerson:t})]})})]})},N=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},g=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})}),Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)(N,{})}),Object(i.jsx)(s.b,{path:"/home",element:Object(i.jsx)(s.a,{to:"/",replace:!0})}),Object(i.jsxs)(s.b,{path:"/people",children:[Object(i.jsx)(s.b,{index:!0,element:Object(i.jsx)(v,{})}),Object(i.jsx)(s.b,{path:":slug",element:Object(i.jsx)(v,{})})]}),Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(g,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.8a16d769.chunk.js.map