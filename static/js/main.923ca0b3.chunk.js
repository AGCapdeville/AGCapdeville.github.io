(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){e.exports={container:"nav_container__30K7Z",name:"nav_name__2-A1V",links:"nav_links__1zgQq",link:"nav_link__2H2KV",bars:"nav_bars__wWN5l",activeLink:"nav_activeLink__3vBYR",show:"nav_show__2dxWu"}},37:function(e,t,a){e.exports=a(66)},42:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),i=(a(42),a(11),a(6)),o=a(9),s=a(12),m=function(){var e=Object(i.e)().pathname,t=function(t){return t===e?s.activeLink:s.link};return l.a.createElement("div",{className:s.container},l.a.createElement("div",null,l.a.createElement(o.b,{to:"/",className:t("/")},"Home")),l.a.createElement("div",null,l.a.createElement(o.b,{to:"/portfolio",className:t("/portfolio")},"Portfolio")))},u=a(16),p=a.n(u),d=a(30),E=a(10),v=a(31),h=a.n(v),f=function(){var e=function(e){console.log("url:"+e);var t=Object(n.useState)(null),a=Object(E.a)(t,2),l=a[0],r=a[1],c=Object(n.useState)(!0),i=Object(E.a)(c,2),o=i[0],s=i[1],m=Object(n.useState)(!1),u=Object(E.a)(m,2),v=u[0],f=u[1];return Object(n.useEffect)((function(){(function(){var t=Object(d.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f(!1),s(!0),h()({method:"get",url:e}).then((function(e){console.log(" Response: \n",e),r(e.data),s(!1)})).catch((function(e){f(!0)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),[{data:l,isLoading:o,isError:v}]}("https://api.github.com/users/agcapdeville/repos"),t=Object(E.a)(e,1)[0],a=t.data,r=t.isLoading;t.isError;if(console.log(r),r)return"loading...";var c=Object.keys(a).length,i=0,o=new Date(a[0].updated_at),s=new Date(a[0].updated_at),m=0;for(m=0;m<c;m++)(s=new Date(a[m].updated_at))>o&&(o=s,i=m);var u=a[i].name,v="https://github.com/AGCapdeville/"+u;return l.a.createElement("div",null,"[ Current Working On :",l.a.createElement("a",{href:v}," ",u," ")," ]")},b=function(){return l.a.createElement("div",{className:"Text_color_offwhite"},l.a.createElement("header",{className:"App-body"},l.a.createElement("div",{className:"Section_color"},l.a.createElement("div",{className:"App-img"},l.a.createElement("img",{src:"https://i.imgur.com/eDmARH5.jpg",className:"rounded-circle",alt:"profile img"})),l.a.createElement("div",{className:"MainTitle"},"Adam G Capdeville")),l.a.createElement("div",{className:"App-description"},l.a.createElement("p",null,l.a.createElement("div",null," ","Currently, I am a computer science student at CSUCI who has a passion\nfor intelligent code, whether it's intelligently written or written to exhibit intelligence."," "))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(f,null))),l.a.createElement("div",{className:"SkillSection"},l.a.createElement("div",{className:"Title"}," ",l.a.createElement("b",null,"Skills")," "),l.a.createElement("div",{className:"grid-hero"},l.a.createElement("div",{className:"SubTitle"}," Languages "),l.a.createElement("div",{className:"SubTitle"}," Frameworks & Libraries "),l.a.createElement("div",{className:"SubTitle"}," Database "),l.a.createElement("ul",null,l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"C / C++"),l.a.createElement("li",null,"C#"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"JavaScript")),l.a.createElement("ul",null,l.a.createElement("li",null,"React"),l.a.createElement("li",null,"React-Native"),l.a.createElement("li",null,"Bootstrap")),l.a.createElement("ul",null,l.a.createElement("li",null,"MySQL"),l.a.createElement("li",null,"MongoDB"))))))},g=a(32),_=a(33),w=a(35),k=a(34),N=a(36),j=function(e){function t(){return Object(g.a)(this,t),Object(w.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App-body"},l.a.createElement("header",{className:"App-body Section_color_grey"},l.a.createElement("div",{style:{float:"center",paddingTop:"20px"}},l.a.createElement("h1",null,"Portfolio"))))}}]),t}(l.a.Component),O=function(){return l.a.createElement("footer",{className:"App-footer"},l.a.createElement("div",null,"Adam Capdeville 2019 |",l.a.createElement("a",{className:"App-link",href:"https://www.linkedin.com/in/adamcapdeville/"},l.a.createElement("b",null," Linkedin "))," |",l.a.createElement("a",{className:"App-link",href:"https://github.com/AGCapdeville/"},l.a.createElement("b",null," GitHub"))))},S=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement("div",null,l.a.createElement(i.a,{exact:!0,path:"/",component:b}),l.a.createElement(i.a,{exact:!0,path:"/portfolio",component:j})),l.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.923ca0b3.chunk.js.map