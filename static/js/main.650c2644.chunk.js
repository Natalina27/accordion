(this.webpackJsonpaccordion=this.webpackJsonpaccordion||[]).push([[0],{1:function(e,n,a){e.exports={accordion:"styles_accordion__1RZi6",accordionQuestion:"styles_accordionQuestion__1woR9",accordionAnswer:"styles_accordionAnswer__1PKlK",accordionItem:"styles_accordionItem__2oQGj",selected:"styles_selected__1InZB"}},14:function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),o=a(4),r=a.n(o),s=a(7),i=a(8),l=a(2),d=a(5),u=a.n(d),m=a(1),p=a.n(m),w=function(e){var n,a=e.index,t=e.source,o=e.openAnswer,r=e.handleAnswerClick,s=e.id,i=u()((n={},Object(l.a)(n,p.a.accordionItem,!0),Object(l.a)(n,p.a.selected,o),n));return c.a.createElement("div",{className:i},c.a.createElement("div",{className:p.a.accordionQuestion,onClick:function(){return r(s)}},c.a.createElement("span",null,a+1,".",t.question)),c.a.createElement("p",{className:p.a.accordionAnswer},t.answer))},_=a(6),f=a.n(_),y=function(e){var n=e.source,a=e.title,t=e.openAnswer,o=e.handleAnswerClick;return c.a.createElement("section",{className:f.a.accordion},c.a.createElement("h1",null,a),n.map((function(e,n){var a=e.id,r=e.isOpen,s=Object(i.a)(e,["id","isOpen"]);return c.a.createElement(w,{key:a,id:a,isOpen:r,source:s,index:n,handleAnswerClick:o,openAnswer:t})})))};y.defaultProps={title:"Accordion"};var A=[{question:"What is your name?",answer:"My name is Masha",id:"123",isOpen:!1},{question:"How old are you?",answer:"I am 23",id:"456",isOpen:!1},{question:"What business are you doing?",answer:"I am student",id:"789",isOpen:!1}],O=function(){var e=A.isOpen,n=Object(t.useState)(e),a=Object(s.a)(n,2),o=a[0],r=a[1];return c.a.createElement(y,{source:A,openAnswer:o,handleAnswerClick:function(e){A.map((function(n){return n.id===e&&r(!o)}))}})};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))},6:function(e,n,a){e.exports={accordion:"styles_accordion__2Izd7"}},9:function(e,n,a){e.exports=a(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.650c2644.chunk.js.map