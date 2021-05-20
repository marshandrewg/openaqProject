(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{69:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),s=n(15),o=n.n(s),l=(n(69),n(8)),i=n.n(l),j=n(13),d=n(11),u=n(42),b=n.n(u),h=n(44),O=n(62),x=n(19),p=n(10),m=(n(94),n.p,n(48)),f=n(7),g=n(29),v=n(57),y=n(63),S=function(e){return Object(c.jsx)(v.a,Object(m.a)(Object(m.a)({id:"button-tooltip"},e),{},{children:"Press to Submit new Measurement"}))};var w=function(e){return Object(c.jsxs)(f.a,{onSubmit:function(t){t.preventDefault(),e.handleSubmit(t)},children:[Object(c.jsx)(x.a,{children:Object(c.jsx)(p.a,{children:Object(c.jsxs)(f.a.Group,{controlId:"cityM",children:[Object(c.jsx)(f.a.Label,{children:"Enter a city:"}),Object(c.jsx)(f.a.Control,{size:"lg",type:"text",placeholder:"Enter city name"})]})})}),Object(c.jsxs)(x.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsxs)(f.a.Group,{controlId:"coordinatesM",children:[Object(c.jsx)(f.a.Label,{children:"Enter a coordinates:"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"Enter coordinates"})]})}),Object(c.jsx)(p.a,{children:Object(c.jsxs)(f.a.Group,{controlId:"countryM",children:[Object(c.jsx)(f.a.Label,{children:"Enter a country:"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"Enter country"})]})})]}),Object(c.jsxs)(x.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsxs)(f.a.Group,{controlId:"dateM",children:[Object(c.jsx)(f.a.Label,{children:"Enter a date:"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"Enter date"})]})}),Object(c.jsx)(p.a,{children:Object(c.jsxs)(f.a.Group,{controlId:"locationM",children:[Object(c.jsx)(f.a.Label,{children:"Enter a location:"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"Enter location"})]})})]}),Object(c.jsxs)(x.a,{children:[Object(c.jsx)(p.a,{children:Object(c.jsxs)(f.a.Group,{controlId:"parameterM",children:[Object(c.jsx)(f.a.Label,{children:"Enter a parameter:"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"Enter parameter"})]})}),Object(c.jsx)(p.a,{children:Object(c.jsxs)(f.a.Group,{controlId:"unitM",children:[Object(c.jsx)(f.a.Label,{children:"Enter a unit:"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"Enter unit"})]})})]}),Object(c.jsx)(x.a,{children:Object(c.jsx)(p.a,{children:Object(c.jsxs)(f.a.Group,{controlId:"valueM",children:[Object(c.jsx)(f.a.Label,{children:"Enter a value:"}),Object(c.jsx)(f.a.Control,{type:"text",placeholder:"Enter value"})]})})}),Object(c.jsx)(x.a,{children:Object(c.jsx)(p.a,{children:Object(c.jsx)(y.a,{placement:"right",delay:{show:250,hide:400},overlay:S,children:Object(c.jsx)(g.a,{variant:"primary",type:"submit",children:"Submit"})})})})]})};var E=function(e){return Object(c.jsxs)(f.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(c.jsx)(f.a.Label,{children:"Select a city to view measurments"}),Object(c.jsx)(f.a.Control,{as:"select",onChange:e.handleChange,children:e.options})]})};n(101),n(100),n(58);var C=n(45),L=n(60),N=function(e){var t=e.children,n=Object(a.useState)(!0),r=Object(d.a)(n,2),s=r[0],o=r[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(L.a,{children:[!s&&Object(c.jsx)(g.a,{onClick:function(){return o(!0)},children:"Show Toast"}),Object(c.jsxs)(C.a,{show:s,onClose:function(){return o(!1)},children:[Object(c.jsx)(C.a.Header,{children:Object(c.jsx)("strong",{className:"mr-auto",children:"Starting"})}),Object(c.jsx)(C.a.Body,{children:t})]})]})})},I=(n(92),n(61));var M=function(e){return Object(c.jsxs)(I.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Location"}),Object(c.jsx)("th",{children:"Parameter"}),Object(c.jsx)("th",{children:"Unit"}),Object(c.jsx)("th",{children:"Value"}),Object(c.jsx)("th",{children:"Date"})]})}),Object(c.jsx)("tbody",{children:e.rows})]})};var G=function(){var e=Object(a.useState)(["loading"]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(1),o=Object(d.a)(s,2);o[0],o[1],Object(a.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()("https://api.openaq.org/v1/cities?country=US");case 2:t=e.sent,r(t.data.results),f(t.data.results[0].name),console.log(m),console.log("first city"+t.data.results[0].name);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=Object(a.useState)(""),u=Object(d.a)(l,2),m=u[0],f=u[1],g=Object(a.useState)([]),v=Object(d.a)(g,2),y=v[0],S=v[1];Object(a.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("city chosen"+m),e.next=3,b()("https://api.openaq.org/v1/measurements?country=US&city="+m);case 3:t=e.sent,console.log(t),S(t.data.results),console.log(y);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]);var C=Object(a.useState)({}),L=Object(d.a)(C,2),I=L[0],G=L[1];return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("new measurement"+JSON.stringify(I)),e.next=3,b()({method:"POST",headers:{"Content-Type":"application/json"},url:"http://localhost:5050/api/v1/measurements",data:JSON.stringify(I)});case 3:t=e.sent,console.log("Fetching user stuff"+JSON.stringify(t.data)),t.data.city===m&&y.push(t.data),console.log(y);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[I]),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)(h.a,{className:"mt-5",children:Object(c.jsxs)("h1",{className:"header",children:["OpenAQ App ",Object(c.jsx)(O.a,{variant:"secondary",children:"Now running with React-Bootstrap!"})]})}),Object(c.jsx)(h.a,{className:"p-3",children:Object(c.jsxs)(N,{className:"p-4",children:[Object(c.jsx)("span",{role:"img","aria-label":"tada",children:"\ud83c\udf89"}),"This app allows you to select a city and view air quality measurements from a public api hosted at openaq.org. To begin, click on the select button below and choose a city!",Object(c.jsx)("span",{role:"img","aria-label":"tada",children:"\ud83c\udf89"})]})}),Object(c.jsx)(h.a,{className:"p-3",children:Object(c.jsxs)(x.a,{children:[Object(c.jsxs)(p.a,{children:[Object(c.jsx)(E,{options:n.map((function(e){return Object(c.jsx)("option",{value:e.name,children:e.name})})),handleChange:function(e){return f(e.target.value)}}),Object(c.jsx)(M,{rows:y.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.location}),Object(c.jsx)("td",{children:e.parameter}),Object(c.jsx)("td",{children:e.unit}),Object(c.jsx)("td",{children:e.value}),Object(c.jsx)("td",{children:Date(e.date)})]})}))})]}),Object(c.jsx)(p.a,{children:Object(c.jsx)(w,{handleSubmit:function(e){return function(e){console.log("event"),console.log(e),!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),G({city:e.target[0].value,coordinates:e.target[1].value,country:e.target[2].value,date:e.target[3].value,location:e.target[4].value,parameter:e.target[5].value,unit:e.target[6].value,value:e.target[7].value}),console.log(I)}(e)}})})]})})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(G,{})}),document.getElementById("root")),k()}},[[93,1,2]]]);
//# sourceMappingURL=main.ebbb0248.chunk.js.map