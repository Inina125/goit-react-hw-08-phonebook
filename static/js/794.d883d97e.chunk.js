"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[794],{4794:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,i,c,a,o,s,l,u,d,p,x,h,f,m=t(168),g=t(6444),Z=g.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),b=(g.ZP.input(i||(i=(0,m.Z)(["\n  color: #333;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  width: 300px;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 10px;\n  margin: 8px 0;\n"]))),g.ZP.button(c||(c=(0,m.Z)(["\n  width: 300px;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 5px;\n  margin: 5px 0px;\n  border-color: #ccc;\n  border-radius: 6px;\n  text-transform: capitalize;\n"]))),t(9434)),j=function(n){return n.contacts.items},v=function(n){return n.contacts.isLoading},y=function(n){return n.contacts.error},P=function(n){return n.filter.value},w=t(7272),k=t(6694),C=t(3329),F=function(){var n=(0,b.I0)(),e=(0,b.v9)(j);return(0,C.jsxs)(Z,{onSubmit:function(t){t.preventDefault();var r=t.currentTarget,i=r.elements.name.value,c=r.elements.number.value;e.filter((function(n){return n.name===i})).length>0?alert("".concat(i," is already in contacts")):(n((0,w.uK)({name:i,number:c})),r.reset())},children:[(0,C.jsxs)(k.ar,{children:["Name",(0,C.jsx)(k.Fy,{type:"text",name:"name",placeholder:"Enter contact name"})]}),(0,C.jsxs)(k.ar,{children:["Phone",(0,C.jsx)(k.Fy,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"Enter phone",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)(k.Sn,{type:"submit",children:"Add contact"})]})},I=g.ZP.p(a||(a=(0,m.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 8px;\n"]))),_=t(4808),z=function(){var n=(0,b.I0)(),e=(0,b.v9)(P);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(I,{children:"Find contacts by name"}),(0,C.jsx)(k.Fy,{type:"text",name:"filter",value:e,onChange:function(e){!function(e){n((0,_.T)(e))}(e.target.value)}})]})},E=g.ZP.ul(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n"]))),L=g.ZP.li(s||(s=(0,m.Z)(["\n  display: flex;\n  min-width: 300px;\n  color: #333;\n  align-items: center;\n  height: 48px;\n  line-height: 48px;\n  justify-content: space-between;\n"]))),q=g.ZP.span(l||(l=(0,m.Z)([""]))),D=g.ZP.button(u||(u=(0,m.Z)(["\n  font-size: 12px;\n  padding: 0 16px;\n  height: 22px;\n  line-height: 21px;\n  border: none;\n  border-radius: 10px;\n  font-weight: 500;\n  background-color: #ff5039;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n"]))),K=function(){var n=(0,b.I0)(),e=(0,b.v9)(P),t=(0,b.v9)(j);if(!t)return null;var r=t;return e&&(r=r.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))),(0,C.jsx)(E,{children:r.map((function(e){return(0,C.jsxs)(L,{children:[(0,C.jsxs)(q,{children:[e.name,": ",e.number]}),(0,C.jsx)(D,{onClick:function(){return n((0,w.GK)(e.id))},children:"Delete"})]},e.id)}))})},N=t(2791),S=g.ZP.div(d||(d=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 80px);\n  align-items: center;\n"]))),T=g.ZP.h1(p||(p=(0,m.Z)(["\n  margin-top: 50px;\n  margin-bottom: 15px;\n"]))),A=g.ZP.div(x||(x=(0,m.Z)(["\n  display: flex;\n  gap: 0 50px;\n"]))),G=g.ZP.section(h||(h=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),R=g.ZP.h2(f||(f=(0,m.Z)(["\n  margin-top: 25px;\n"]))),B=function(){var n=(0,b.I0)(),e=(0,b.v9)(v),t=(0,b.v9)(y);return(0,N.useEffect)((function(){n((0,w.yF)())}),[n]),(0,C.jsxs)(S,{children:[(0,C.jsx)(T,{children:"Phonebook"}),(0,C.jsxs)(A,{children:[(0,C.jsxs)(G,{children:[(0,C.jsx)(R,{children:"New Contact"}),(0,C.jsx)(F,{})]}),(0,C.jsxs)(G,{children:[(0,C.jsx)(R,{children:"Contacts"}),(0,C.jsx)(z,{}),(0,C.jsx)(K,{})]})]}),e&&!t&&(0,C.jsx)("b",{children:"Request in progress..."})]})}}}]);
//# sourceMappingURL=794.d883d97e.chunk.js.map