(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),u=n(1),a=n(4),l=n.n(a),b=(n(13),n(14),n(0)),j=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.NONE="NONE",t.ALPABET="ALPHABET",t.LENGTH="LENGTH"}(s||(s={}));var h=function(){var t=Object(u.useState)(s.NONE),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(u.useState)(!1),a=Object(r.a)(o,2),h=a[0],N=a[1],O=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(i.a)(t);return o.sort((function(t,e){switch(n){case s.ALPABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(d,{sortType:n,isReversed:h});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==s.ALPABET}),onClick:function(){return c(s.ALPABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==s.LENGTH}),onClick:function(){return c(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!h}),onClick:function(){return N(!h)},children:"Reverse"}),h||n!==s.NONE?Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){N(!1),c(s.NONE)},children:"Reset"}):null]}),Object(b.jsx)("ul",{children:Object(b.jsx)(j,{goods:O})})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f31c172c.chunk.js.map