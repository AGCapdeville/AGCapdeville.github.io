(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{11:function(e,a,t){e.exports={blogScreenTitle:"blog_blogScreenTitle__3aUJD",blogContainer:"blog_blogContainer__2ImoJ",abstractContainer:"blog_abstractContainer__1yOdD",abstract:"blog_abstract__D5SVZ",abstractText:"blog_abstractText__2FCM4",entry:"blog_entry__UZKN7",entryImageContainer:"blog_entryImageContainer__19eLV",entryImage:"blog_entryImage__3fHFd",entryVideoContainer:"blog_entryVideoContainer__3k7oi",entryVideo:"blog_entryVideo__J0i6g",heroImageContainer:"blog_heroImageContainer__1RaDP",heroImage:"blog_heroImage__2AHV1",navbar:"blog_navbar__XhPmb",navLink:"blog_navLink__23cHO"}},118:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(23),l=t.n(o),c=(t(83),t(15)),i=t(12),s="AGCapdeville",m=["SEVEN TIMES DOWN,","EIGHT TIMES UP.","- Japanese Proverb"],d=["Be Goal Oriented.","Fail Quickly, And Get Back Up.","Be Reslient, And Determined.","Complete, And Repeat."],u=(t(119),t(57)),g=t(74),_=t(47),b=t(70),p=t.n(b),h=t(125),v=t(124),f=t(121),E=t(122),y=t(20),k=t(4),w=t.n(k),N=t(6),C=t.n(N),T=(t(88),t(89),function(){return r.a.createElement("div",{id:"starsContainer"},r.a.createElement("div",{id:"starsS"}),r.a.createElement("div",{id:"starsM"}),r.a.createElement("div",{id:"starsL"}))}),I=t(54),S=t(71),j=(new Date).getFullYear(),O=function(){return r.a.createElement("div",{className:I.container},"Adam Capdeville ",r.a.createElement(S.a,null)," "," ".concat(j)," | ",r.a.createElement("a",{className:I.link,href:"https://www.https://github.com/AGCapdeville/AGCapdeville.github.io",target:"_blank"},"Source"))},x=t(37),L=t(127),D=t(123),B=t(38),A=Object(L.a)("nav/SET_ACTIVE_NAV"),R=Object(D.a)(Object(x.a)({},A,(function(e,a){return a.payload})),"Home"),W=(Object(B.a)((function(e){return e.nav}),(function(e){return e})),t(90),t(31)),M=t.n(W),P=t(39),Q=t(40),J=t.n(Q),H=t(32),K=t.n(H);var G=function(){var e=function(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],o=t[1],l=Object(n.useState)(!0),c=Object(i.a)(l,2),s=c[0],m=c[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2),g=u[0],_=u[1];return Object(n.useEffect)((function(){(function(){var a=Object(P.a)(M.a.mark((function a(){return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:_(!1),m(!0),J()({method:"get",url:e}).then((function(e){console.log(" Response: \n",e),o(e.data),m(!1)})).catch((function(e){_(!0)}));case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),[{data:r,isLoading:s,isError:g}]}("https://api.github.com/users/".concat(s,"/repos")),a=Object(i.a)(e,1)[0],t=a.data;if(a.isLoading)return"loading...";var o=function(e){var a=Object.keys(e).length,t=0,n=new Date(e[t].updated_at),r=new Date(e[0].updated_at),o=0;for(o=0;o<a;o++)(r=new Date(e[o].updated_at))>n&&(n=r,t=o);return t}(t),l="https://github.com/".concat(s,"/").concat(t[o].name),c=new Date(Date.parse(t[o].updated_at)),m=c.getDate(),d=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c.getMonth()],u=c.getFullYear(),g="".concat(d,", ").concat(m,", ").concat(u);return r.a.createElement("div",{className:K.a.container},r.a.createElement("div",{className:K.a.repoRow},"Most Recent Commit:",r.a.createElement("a",{href:l,className:K.a.repoLink,target:"_blank"},"[",t[o].name,"]"),r.a.createElement("div",{className:K.a.dateText}," [",g,"] ")),r.a.createElement("div",null,"GitHub Repo Total: [",r.a.createElement("a",{className:K.a.repoLink,href:"https://github.com/AGCapdeville?tab=repositories",target:"_blank"},t.length),"]"))},V=t(34),F=t(13),Z=t.n(F);var U=function(){var e=function(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],o=t[1],l=Object(n.useState)(!0),c=Object(i.a)(l,2),s=c[0],m=c[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2),g=u[0],_=u[1];return Object(n.useEffect)((function(){(function(){var a=Object(P.a)(M.a.mark((function a(){return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:_(!1),m(!0),J()({method:"get",url:e}).then((function(e){console.log(" Response: \n",e),o(e.data),m(!1)})).catch((function(e){_(!0)}));case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),[{data:r,isLoading:s,isError:g}]}("https://api.github.com/users/".concat(s,"/starred")),a=Object(i.a)(e,1)[0],t=a.data;if(a.isLoading)return"loading...";var o=function(e){var a=Object.keys(e).length,t=0,n=new Date(e[t].updated_at),r=new Date(e[0].updated_at),o=0;for(o=0;o<a;o++)(r=new Date(e[o].updated_at))>n&&(n=r,t=o);return t}(t);"https://github.com/".concat(s,"/").concat(t[o].name);return r.a.createElement("div",{className:Z.a.reposContainer},t.map((function(e,a){if(null!=e.description)return r.a.createElement("a",{className:Z.a.repoLink,key:a,href:e.html_url,target:"_blank"},r.a.createElement("div",{className:Z.a.repoCard},r.a.createElement("div",{className:Z.a.repoTitle},e.name),r.a.createElement("div",{className:Z.a.repoImage},function(e){switch(e){case"JavaScript":return r.a.createElement("div",{className:Z.a.languageIconContainer},r.a.createElement(V.b,{className:Z.a.languageIcon}));case"Python":return r.a.createElement("div",{className:Z.a.languageIconContainer},r.a.createElement(V.c,{className:Z.a.languageIcon}));case"Java":return r.a.createElement("div",{className:Z.a.languageIconContainer},r.a.createElement(V.a,{className:Z.a.languageIcon}));default:return r.a.createElement("div",{className:Z.a.languageIconContainer},r.a.createElement("div",{className:Z.a.languageIconDefault}," ",e," "))}}(e.language)),r.a.createElement("div",{className:Z.a.repoText},e.description)))})))};function q(e){var a=r.a.useState(!1),t=Object(i.a)(a,2),n=t[0],o=t[1],l=r.a.useRef();return r.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return o(e.isIntersecting)}))})).observe(l.current)}),[]),r.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:l},e.children)}var Y=function(e){window.scrollTo({top:e.current.offsetTop,behavior:"smooth"})},X=function(){var e=Object(c.b)(),a=Object(n.useState)(!0),t=Object(i.a)(a,2),o=t[0],l=t[1],s=Object(n.useState)(!1),b=Object(i.a)(s,2),k=b[0],N=b[1],I=Object(n.useState)(!1),S=Object(i.a)(I,2),j=S[0],x=S[1],L=function(e){switch(e){case"daruma":l(!0),N(!1),x(!1);break;case"why":l(!1),N(!0),x(!1);break;case"what":l(!1),N(!1),x(!0)}},D=Object(n.useRef)(null),B=Object(n.useRef)(null),R=Object(n.useRef)(null),W=Object(n.useRef)(null),M=(Object(n.useRef)(null),Object(n.useRef)(null));return r.a.createElement("div",{className:w.a.body},r.a.createElement("div",null,r.a.createElement("div",{ref:D,className:w.a.landingTitle},r.a.createElement("div",null,"Hello, I'm ",r.a.createElement("strong",{style:{color:"coral"}},"Adam Capdeville"),"."),r.a.createElement("div",null,"I'm a full-stack software engineer."),r.a.createElement("br",null),r.a.createElement("button",{className:w.a.continueButton,onClick:function(){Y(B)}},"continue")),r.a.createElement(T,null)),r.a.createElement(h.a,{sticky:"top",collapseOnSelect:!0,bsPrefix:"navbar",expand:"md",variant:"dark",className:w.a.navbar},r.a.createElement(h.a.Brand,{className:w.a.navLink},"Adam Capdeville"),r.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:w.a.navbarToggle}),r.a.createElement(h.a.Collapse,{id:"responsive-navbar-nav",className:w.a.navbarColapse},r.a.createElement(v.a.Link,{eventKey:"1",className:w.a.navLink,onClick:function(){return Y(D)}},"Home"),r.a.createElement(v.a.Link,{eventKey:"2",className:w.a.navLink,onClick:function(){return Y(B)}},"About"),r.a.createElement(v.a.Link,{eventKey:"3",className:w.a.navLink,onClick:function(){return Y(R)}},"Work"),r.a.createElement(v.a.Link,{eventKey:"4",className:w.a.navLink,onClick:function(){return Y(W)}},"System"),r.a.createElement(v.a.Link,{eventKey:"5",className:w.a.navLink,onClick:function(){return Y(M)}},"Contact"),r.a.createElement(v.a.Link,{as:y.b,to:"/blogs",eventKey:"6",className:w.a.navLink,onClick:function(){Y(D),e(A("Blogs"))}},"Dev Blog"))),r.a.createElement("div",{className:w.a.screenContainer},r.a.createElement("section",{ref:B,id:"About",className:w.a.aboutSection},r.a.createElement("div",{className:w.a.profileImage},r.a.createElement("img",{src:"https://i.imgur.com/NYjsR8e.jpg",alt:"profile img"})),r.a.createElement("div",{className:w.a.centerText},r.a.createElement("p",null," I'm a student, hacker, board game geek, cosplay weaver, and artist. Every day I strive to learn, develop and solve tough and interesting problems. I have over 4 years of programing experience, with a multitude of languages. "))),r.a.createElement("section",{ref:R,id:"Work",className:w.a.workSection},r.a.createElement("br",null),r.a.createElement("strong",{className:w.a.sectionTitle},"Work"),r.a.createElement("br",null),r.a.createElement(G,null),r.a.createElement("br",null),r.a.createElement(U,null),r.a.createElement("br",null)),r.a.createElement("section",{ref:W,id:"System",className:C.a.systemSection},r.a.createElement("strong",{className:w.a.sectionTitle},"My System"),r.a.createElement("br",null),d.map((function(e){return r.a.createElement("div",{className:"box"},r.a.createElement(q,{key:e},r.a.createElement("strong",{className:C.a.mySystemText},e)))})),r.a.createElement("div",{className:C.a.daruma_container},r.a.createElement("img",{src:p.a,className:C.a.daruma}),r.a.createElement("div",{className:C.a.daruma_shadow_container},r.a.createElement("div",{className:C.a.daruma_shadow}),r.a.createElement("div",{className:C.a.daruma_shadow_m}))),r.a.createElement("div",{className:C.a.darumaToggleInfoOuterContainer},r.a.createElement("div",{className:C.a.darumaToggleButtonsContainer},r.a.createElement("button",{onClick:function(){return L("daruma")},"aria-controls":"darumaText","aria-expanded":o,className:C.a.darumaToggleButton,opacity:o},"Daruma Proverb."),r.a.createElement("button",{onClick:function(){return L("what")},"aria-controls":"darumaWhatText","aria-expanded":j,className:C.a.darumaToggleButton},"What Is Daruma?"),r.a.createElement("button",{onClick:function(){return L("why")},"aria-controls":"darumaWhyText","aria-expanded":k,className:C.a.darumaToggleButton},"Why Daruma?")),r.a.createElement("div",{className:C.a.darumaToggleInfoContainer},r.a.createElement(f.a,{in:j},r.a.createElement("div",{id:"darumaWhatText",className:C.a.darumaToggleInfo},r.a.createElement("strong",null,"What Is A Daruma doll?"),r.a.createElement("p",null,"A Daruma doll (\u9054\u78e8, daruma) is a hollow, round, Japanese traditional doll modeled after Bodhidharma, the founder of the Zen tradition of Buddhism. ... Daruma dolls are seen as a symbol of perseverance and good luck, making them a popular gift of encouragement."))),r.a.createElement(f.a,{in:o},r.a.createElement("div",{id:"darumaText",className:C.a.darumaToggleInfo},r.a.createElement("div",null,r.a.createElement("div",{className:C.a.darumaQuote},r.a.createElement("div",{className:C.a.leftQuote},r.a.createElement(u.a,null)),r.a.createElement("div",{className:C.a.darumaQuoteText},r.a.createElement("div",null,m[0]),r.a.createElement("div",null,m[1])),r.a.createElement("div",{className:C.a.rightQuote},r.a.createElement(u.a,null))),r.a.createElement("div",{className:C.a.darumaQuoteEnd},r.a.createElement("strong",{className:C.a.darumaQuoteEnd},m[3]))))),r.a.createElement(f.a,{in:k},r.a.createElement("div",{id:"darumaWhyText",className:C.a.darumaToggleInfo},r.a.createElement("strong",null,"Why The Daruma doll?"),r.a.createElement("p",null,"Because it embodies my system of work. The Daruma doll, to me, represents setting goals and seeing them through to the end; staying focused and determined to finish any project I set my self on.")))))),r.a.createElement("section",{ref:M,id:"Contact",className:w.a.contactSection},r.a.createElement("div",{className:w.a.sectionTitle},"Lets connect,"),r.a.createElement(E.a,{className:w.a.contactIconContainer},r.a.createElement("div",{className:w.a.contactIcon,style:{backgroundColor:"#08a0e9"},onClick:function(){return window.location.href="mailto:agcapdeville@gmail.com"},target:"_blank"},r.a.createElement(g.a,{className:w.a.icon})),r.a.createElement("a",{className:w.a.contactIcon,style:{backgroundColor:"dodgerblue"},href:"https://www.facebook.com/adam.capdeville.90",target:"_blank"},r.a.createElement(_.a,{className:w.a.icon})),r.a.createElement("a",{className:w.a.contactIcon,style:{backgroundColor:"#0E76AE"},href:"https://www.linkedin.com/in/adamcapdeville/",target:"_blank"},r.a.createElement(_.c,{className:w.a.icon})),r.a.createElement("a",{className:w.a.contactIcon,style:{backgroundColor:"purple"},href:"https://github.com/AGCapdeville",target:"_blank"},r.a.createElement(_.b,{className:w.a.icon}))))),r.a.createElement(O,null))},z=t(17),$=t.n(z),ee=[{title:"Capstone Dev Blog",date:"August 27, 2020",description:"Slay The Tower is a dynamic deck building video game, developed with React/Redux to create a sleek and unique user experience.",blog:{title:"Capstone Dev Blog",abstract:"Slay The Tower is a dynamic deck building video game developed in React / Redux to create a sleek and unique user experience. Players start the game by selecting a hero\u2019s weapon (deck) to begin their arduous climb. As the hero progresses, they must balance risk and reward. Defeating enemies grants gold and cards, but choosing to fight dire foes has the possibility to grant even greater treasures. Players must choose cards wisely, as the core of the game is deck building emphasizing on card synergy. With every attempt on the Tower, the player will learn of different strategies and outcomes. My project aims to develop a complex game, all while learning through implementation.",heroImage:"https://i.imgur.com/kPXC7j9.jpg",entry:[{title:"Setup Dev Blog & Narrowing Of Project Scope",subtitle:"Sprint 0",date:"August 28, 2020",description:["Initiated this development blog as well as began reviewing feedback given by my capstone advisor, Profesor Erik Kaltman."],img:[""],vid:[""]},{title:"Game Design & Mechanics",subtitle:"Sprint 1 : week 1",date:"August 31, 2020",description:["I reviewed my design document and sprint goals, and I decided to narrow down each section to core components. Through narrowing my scope, I will have progress as my main design philosophy and be able to complete my capstone with greater efficiency.","After narrowing the design document, I completed the sprint goals outline. I wrapped up the week by researching card game mechanics. I tested combat mechanics in my game via index cards and dice. After receiving some feedback I kept revisiting the same luck and user efficacy design difficulties. Further research will be needed in order for me to create a more cohesive user game experience.","I learned that for one I have to admit that the game I create will not be perfect, I am not a team of people but just a passionate individual with a love for rpgs. I need to focus on narrowing design mechanics and simplifying the process as much as possible."],img:[,"https://i.imgur.com/ra0i3fm.jpeg"],vid:[]},{title:"Map Navigation",subtitle:"Sprint 1 : Week 2 ",date:"September 7, 2020",description:["I started week 2 developing the main components of the game flow starting with map navigation. I completed development of the user map navigation, as well as reached out to communicate art direction with Michael Mygen (lead artist).","Developing the map navigation I faced a few obstacles. At first I wanted procedural map navigation, similar to Slay The Spire, but found that was out of scope. So I pivoted, and after a few revisions, the current map design is centered around choosing between paths laid out in front of the user as cards. For now paths are generated based on a dice roll, with the more unique paths, such as shops, rest areas, trials and elite creeps being the rarest.","Path cards will display: path event, field type ( weather conditions ) and what lies after the event ( paths that will be presented after resolving the chosen event card ). The current map navigation is bare bones and displays card boxes with text/emoji images inside, describing what lays ahead. A map legend is displayed on the right, depicting what each emoji/symbol represents.","At the end of the week I learned that overall I need to keep scope in mind when developing each component. I don\u2019t need to have the best procedural engine, I just need a map to generate. After the map works, then I can further develop other components and come back to refactor and upgrade at a later time."],img:[],vid:[,"https://i.imgur.com/19xmdWZ.mp4"]},{title:"Bonfire, Shop, Trial & Reward Screen",subtitle:"Sprint 2 : Week 3",date:"September 14, 2020",description:["Weekend..."],img:[],vid:[]}]}},{title:"Web Dev Blog",date:"../../..",description:"comming soon ...",blog:{title:"Web Dev Blog",abstract:"info",heroImage:"https://i.imgur.com/Fyji2AK.jpeg",entry:[{title:"Initial Capstone Project",date:"August 27, 2020",description:["Example"],img:[""]}]}}],ae=Object(L.a)("blog/SET_BLOG"),te=ee[0],ne=Object(D.a)(Object(x.a)({},ae,(function(e,a){return a.payload})),te),re=Object(B.a)((function(e){return e.blog}),(function(e){return e})),oe=t(126),le=function(){var e=Object(c.b)(),a=Object(n.useRef)(null);return r.a.createElement("div",{ref:a,className:"blogContainer"},r.a.createElement(h.a,{sticky:"top",bsPrefix:"navbar",variant:"dark",className:$.a.navbar},r.a.createElement(h.a.Brand,{as:y.b,to:"/",className:$.a.navLink,onClick:function(){return e(A("Home"))}},"Adam Capdeville"),r.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:$.a.navbarToggle})),r.a.createElement("div",{className:$.a.blogScreenTitle},r.a.createElement("div",{className:$.a.dotSlash},"./"),"Dev Blogs"),r.a.createElement("div",{className:$.a.heroImageContainer},r.a.createElement("img",{className:$.a.heroImage,src:"https://i.imgur.com/Fyji2AK.jpeg"})),r.a.createElement("div",{className:$.a.blogList},ee.map((function(t,n){return r.a.createElement("div",null,r.a.createElement(y.b,{to:"/blog",className:$.a.blogLink},r.a.createElement(oe.a,{key:n,className:$.a.blogCard,onClick:function(){var n;n=a,window.scrollTo({top:n.current.offsetTop,behavior:"smooth"}),e(ae(t.blog)),e(A("Blog"))}},r.a.createElement(oe.a.Body,null,r.a.createElement(oe.a.Title,{className:$.a.blogCardTitle},r.a.createElement("strong",null,t.title)," "),r.a.createElement(oe.a.Text,null," ",t.description," "),r.a.createElement(oe.a.Subtitle,{className:$.a.blogCardDate}," ",t.date," ")))),r.a.createElement("hr",null))}))))},ce=t(11),ie=t.n(ce),se=function(){var e=Object(c.b)(),a=Object(c.c)(re);return r.a.createElement("div",null,r.a.createElement(h.a,{sticky:"top",bsPrefix:"navbar",variant:"dark",className:ie.a.navbar},r.a.createElement(h.a.Brand,{as:y.b,to:"/",className:ie.a.navLink,onClick:function(){return e(A("Home"))}},"Adam Capdeville"),r.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:ie.a.navbarToggle})),r.a.createElement("div",{className:ie.a.blogScreenTitle},a.title),r.a.createElement("div",{className:ie.a.heroImageContainer},r.a.createElement("img",{className:ie.a.heroImage,src:a.heroImage})),r.a.createElement("div",{className:ie.a.blogContainer},r.a.createElement(oe.a,{className:ie.a.abstractContainer},r.a.createElement("div",{className:ie.a.abstract},r.a.createElement("h4",null,r.a.createElement("strong",null,"Abstract")),r.a.createElement("p",{className:ie.a.abstractText},a.abstract))),a.entry.map((function(e,a){return r.a.createElement(oe.a,{className:ie.a.entry,key:a},r.a.createElement("h4",null,r.a.createElement("strong",null,e.title)),r.a.createElement("h5",null,r.a.createElement("strong",null,e.subtitle)),r.a.createElement(oe.a.Subtitle,null,e.date),e.description.map((function(a,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a.Body,{key:t}," ",a," "),e.img[t]&&r.a.createElement(oe.a.Body,{className:ie.a.entryImageContainer},r.a.createElement("img",{className:ie.a.entryImage,src:e.img[t]})),e.vid[t]&&r.a.createElement(oe.a.Body,null,r.a.createElement("div",{className:ie.a.entryVideoContainer},r.a.createElement("video",{className:ie.a.entryVideo,controls:!0},r.a.createElement("source",{src:e.vid[t],type:"video/mp4"})))))})))})),r.a.createElement("br",null)))},me=t(8);var de=function(){return r.a.createElement("div",null,r.a.createElement(me.d,null,r.a.createElement(me.b,{path:"/",exact:!0,component:X}),r.a.createElement(me.b,{path:"/blogs",exact:!0,component:le}),r.a.createElement(me.b,{path:"/blog",exact:!0,component:se}),r.a.createElement(me.a,{to:"/"})))},ue=t(24),ge=t(75),_e=t(76),be=Object(ue.combineReducers)({nav:R,blog:ne});var pe=document.getElementById("root"),he=function(e){var a=[ge.a],t=[ue.applyMiddleware.apply(void 0,a)],n=_e.composeWithDevTools.apply(void 0,t);return Object(ue.createStore)(be,e,n)}();l.a.render(r.a.createElement(y.a,null,r.a.createElement(c.a,{store:he},r.a.createElement(de,null))),pe)},13:function(e,a,t){e.exports={reposContainer:"github_reposContainer__3CZ3b",repoCard:"github_repoCard__KWnNU",repoTitle:"github_repoTitle__2NUck",repoImage:"github_repoImage__3tsC9",repoText:"github_repoText__1x6sf",languageIconContainer:"github_languageIconContainer__3tZZg",languageIcon:"github_languageIcon__3MksM",languageIconDefault:"github_languageIconDefault__3oln3",repoLink:"github_repoLink__1t6lg"}},17:function(e,a,t){e.exports={blogContainer:"blogs_blogContainer__3eFMg",heroImageContainer:"blogs_heroImageContainer__1i-DC",heroImage:"blogs_heroImage__2qOjw",blogList:"blogs_blogList__2T5qK",blogCard:"blogs_blogCard__2Yx6r",blogCardTitle:"blogs_blogCardTitle__3wecv",blogCardDate:"blogs_blogCardDate___7d5j",blogScreenTitle:"blogs_blogScreenTitle___lWTV",dotSlash:"blogs_dotSlash__2elid",moduleBody:"blogs_moduleBody__3Lmt9",item:"blogs_item__OGo43",title:"blogs_title__1ScYM",moduleSkill:"blogs_moduleSkill__CXfLL",navbar:"blogs_navbar__3qRB-",navbarColapse:"blogs_navbarColapse__1Ojcr",navbarToggle:"blogs_navbarToggle__2qXiZ",navLink:"blogs_navLink__3WS3O",blogLink:"blogs_blogLink__38hcV"}},32:function(e,a,t){e.exports={container:"currentRepo_container__2W7J2",repoRow:"currentRepo_repoRow__chAUy",repo:"currentRepo_repo__Qdsaf",repoLink:"currentRepo_repoLink__1R4Jn",dateRow:"currentRepo_dateRow__1rA_f",dateText:"currentRepo_dateText__Hg-Vu",blinkyGreen:"currentRepo_blinkyGreen__fxHYd"}},4:function(e,a,t){e.exports={logo:"landing_logo__1hgZC",navbar:"landing_navbar__38D3X",navbarColapse:"landing_navbarColapse__2zzHI",navbarToggle:"landing_navbarToggle__29xe1",navLink:"landing_navLink__1irxL",landingTitle:"landing_landingTitle__14ep1",continueButton:"landing_continueButton__1O3mO",screenContainer:"landing_screenContainer__YH4GW",aboutSection:"landing_aboutSection__3Ygnq",workSection:"landing_workSection__2MPP0",influentialSection:"landing_influentialSection__2if8v",contactSection:"landing_contactSection__kLPwn",contactIconContainer:"landing_contactIconContainer__3TpJn",contactIcon:"landing_contactIcon__2fIzH",icon:"landing_icon__2OrBQ",sectionTitle:"landing_sectionTitle__13Ygi",centerText:"landing_centerText__W2BA5",profileImage:"landing_profileImage__1ZIUs",body:"landing_body__154mB",name:"landing_name__3JbT_",listTitle:"landing_listTitle__3IcPJ",listContainer:"landing_listContainer__KmUWj",list:"landing_list__2fie3",about:"landing_about__m3-bO"}},54:function(e,a,t){e.exports={container:"footer_container__3Mbmx",link:"footer_link__rNuqK"}},6:function(e,a,t){e.exports={systemSection:"systemSection_systemSection__1k8uW",mySystemText:"systemSection_mySystemText__3Hj1o",darumaQuote:"systemSection_darumaQuote__2cFCg",darumaQuoteText:"systemSection_darumaQuoteText__1V5KR",leftQuote:"systemSection_leftQuote__1XFZo",rightQuote:"systemSection_rightQuote__iZCHJ",darumaQuoteEnd:"systemSection_darumaQuoteEnd__39sT7",daruma_container:"systemSection_daruma_container__1pcPS",daruma:"systemSection_daruma__3_XOo",daruma_shadow_container:"systemSection_daruma_shadow_container__2BUof",daruma_shadow:"systemSection_daruma_shadow__3Dm7c",shadow:"systemSection_shadow__1APys",daruma_shadow_m:"systemSection_daruma_shadow_m__321UN",shadow_m:"systemSection_shadow_m__wAb10",darumaToggleInfoOuterContainer:"systemSection_darumaToggleInfoOuterContainer__26ahs",darumaToggleInfoContainer:"systemSection_darumaToggleInfoContainer__wuFGX",darumaToggleInfo:"systemSection_darumaToggleInfo__1q2BQ",darumaToggleButtonsContainer:"systemSection_darumaToggleButtonsContainer__KTMQa",darumaToggleButton:"systemSection_darumaToggleButton__5xhLN",aboutDaruma:"systemSection_aboutDaruma__1upuK"}},70:function(e,a,t){e.exports=t.p+"static/media/daruma.a0dade87.png"},78:function(e,a,t){e.exports=t(118)},83:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.fedf6477.chunk.js.map