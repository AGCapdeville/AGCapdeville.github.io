(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{118:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(24),l=t.n(o),c=(t(83),t(14)),i=t(11),s="AGCapdeville",m=["SEVEN TIMES DOWN,","EIGHT TIMES UP.","- Japanese Proverb"],u=["Be Goal Oriented.","Fail Quickly, And Get Back Up.","Be Reslient, And Determined.","Complete, And Repeat."],d=(t(119),t(57)),g=t(74),_=t(47),b=t(70),h=t.n(b),p=t(125),v=t(124),f=t(121),E=t(122),y=t(20),w=t(4),k=t.n(w),T=t(6),N=t.n(T),C=(t(88),t(89),function(){return r.a.createElement("div",{id:"starsContainer"},r.a.createElement("div",{id:"starsS"}),r.a.createElement("div",{id:"starsM"}),r.a.createElement("div",{id:"starsL"}))}),S=t(54),I=t(71),O=(new Date).getFullYear(),x=function(){return r.a.createElement("div",{className:S.container},"Adam Capdeville ",r.a.createElement(I.a,null)," "," ".concat(O)," | ",r.a.createElement("a",{className:S.link,href:"https://www.https://github.com/AGCapdeville/AGCapdeville.github.io",target:"_blank"},"Source"))},j=t(37),L=t(127),D=t(123),B=t(38),R=Object(L.a)("nav/SET_ACTIVE_NAV"),A=Object(D.a)(Object(j.a)({},R,(function(e,a){return a.payload})),"Home"),W=(Object(B.a)((function(e){return e.nav}),(function(e){return e})),t(90),t(32)),P=t.n(W),M=t(39),Q=t(40),K=t.n(Q),H=t(23),J=t.n(H);var G=function(){var e=function(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],o=t[1],l=Object(n.useState)(!0),c=Object(i.a)(l,2),s=c[0],m=c[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),g=d[0],_=d[1];return Object(n.useEffect)((function(){(function(){var a=Object(M.a)(P.a.mark((function a(){return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:_(!1),m(!0),K()({method:"get",url:e}).then((function(e){console.log(" Response: \n",e),o(e.data),m(!1)})).catch((function(e){_(!0)}));case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),[{data:r,isLoading:s,isError:g}]}("https://api.github.com/users/".concat(s,"/repos")),a=Object(i.a)(e,1)[0],t=a.data;if(a.isLoading)return"loading...";var o=function(e){var a=Object.keys(e).length,t=0,n=new Date(e[t].updated_at),r=new Date(e[0].updated_at),o=0;for(o=0;o<a;o++)(r=new Date(e[o].updated_at))>n&&(n=r,t=o);return t}(t),l="https://github.com/".concat(s,"/").concat(t[o].name),c=new Date(Date.parse(t[o].updated_at)),m=c.getDate(),u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c.getMonth()],d=c.getFullYear(),g="".concat(u,", ").concat(m,", ").concat(d);return r.a.createElement("div",{className:J.a.container},r.a.createElement("div",{className:J.a.repoRow},r.a.createElement("div",{className:J.a.repo},r.a.createElement("div",{className:J.a.text},"Most Recent Commit: [",r.a.createElement("a",{href:l,className:J.a.repoLink,target:"_blank"},t[o].name),"]"),"[",r.a.createElement("div",{className:J.a.dateText}," ",g," "),"]")),r.a.createElement("div",{className:J.a.repoRow},"GitHub Repo Total: [",r.a.createElement("a",{className:J.a.repoLink,href:"https://github.com/AGCapdeville?tab=repositories",target:"_blank"},t.length),"]"))},Z=t(34),q=t(12),F=t.n(q);var U=function(){var e=function(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],o=t[1],l=Object(n.useState)(!0),c=Object(i.a)(l,2),s=c[0],m=c[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),g=d[0],_=d[1];return Object(n.useEffect)((function(){(function(){var a=Object(M.a)(P.a.mark((function a(){return P.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:_(!1),m(!0),K()({method:"get",url:e}).then((function(e){console.log(" Response: \n",e),o(e.data),m(!1)})).catch((function(e){_(!0)}));case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),[{data:r,isLoading:s,isError:g}]}("https://api.github.com/users/".concat(s,"/starred")),a=Object(i.a)(e,1)[0],t=a.data;if(a.isLoading)return"loading...";var o=function(e){var a=Object.keys(e).length,t=0,n=new Date(e[t].updated_at),r=new Date(e[0].updated_at),o=0;for(o=0;o<a;o++)(r=new Date(e[o].updated_at))>n&&(n=r,t=o);return t}(t);"https://github.com/".concat(s,"/").concat(t[o].name);return r.a.createElement("div",{className:F.a.reposContainer},t.map((function(e,a){if(null!=e.description)return r.a.createElement("a",{className:F.a.repoLink,key:a,href:e.html_url,target:"_blank"},r.a.createElement("div",{className:F.a.repoCard},r.a.createElement("div",{className:F.a.repoTitle},e.name),r.a.createElement("div",{className:F.a.repoImage},function(e){switch(e){case"JavaScript":return r.a.createElement("div",{className:F.a.languageIconContainer},r.a.createElement(Z.b,{className:F.a.languageIcon}));case"Python":return r.a.createElement("div",{className:F.a.languageIconContainer},r.a.createElement(Z.c,{className:F.a.languageIcon}));case"Java":return r.a.createElement("div",{className:F.a.languageIconContainer},r.a.createElement(Z.a,{className:F.a.languageIcon}));default:return r.a.createElement("div",{className:F.a.languageIconContainer},r.a.createElement("div",{className:F.a.languageIconDefault}," ",e," "))}}(e.language)),r.a.createElement("div",{className:F.a.repoText},e.description)))})))};function V(e){var a=r.a.useState(!1),t=Object(i.a)(a,2),n=t[0],o=t[1],l=r.a.useRef();return r.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return o(e.isIntersecting)}))})).observe(l.current)}),[]),r.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:l},e.children)}var Y=function(e){window.scrollTo({top:e.current.offsetTop,behavior:"smooth"})},z=function(){var e=Object(c.b)(),a=Object(n.useState)(!0),t=Object(i.a)(a,2),o=t[0],l=t[1],s=Object(n.useState)(!1),b=Object(i.a)(s,2),w=b[0],T=b[1],S=Object(n.useState)(!1),I=Object(i.a)(S,2),O=I[0],j=I[1],L=function(e){switch(e){case"daruma":l(!0),T(!1),j(!1);break;case"why":l(!1),T(!0),j(!1);break;case"what":l(!1),T(!1),j(!0)}},D=Object(n.useRef)(null),B=Object(n.useRef)(null),A=Object(n.useRef)(null),W=Object(n.useRef)(null),P=(Object(n.useRef)(null),Object(n.useRef)(null));return r.a.createElement("div",{className:k.a.body},r.a.createElement("div",null,r.a.createElement("div",{ref:D,className:k.a.landingTitle},r.a.createElement("div",null,"Hello, I'm ",r.a.createElement("strong",{style:{color:"coral"}},"Adam Capdeville"),"."),r.a.createElement("div",null,"I'm a full-stack software engineer."),r.a.createElement("br",null),r.a.createElement("button",{className:k.a.continueButton,onClick:function(){Y(B)}},"continue")),r.a.createElement(C,null)),r.a.createElement(p.a,{sticky:"top",collapseOnSelect:!0,bsPrefix:"navbar",expand:"md",variant:"dark",className:k.a.navbar},r.a.createElement(p.a.Brand,{className:k.a.navLink},"Adam Capdeville"),r.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:k.a.navbarToggle}),r.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav",className:k.a.navbarColapse},r.a.createElement(v.a.Link,{eventKey:"1",className:k.a.navLink,onClick:function(){return Y(D)}},"Home"),r.a.createElement(v.a.Link,{eventKey:"2",className:k.a.navLink,onClick:function(){return Y(B)}},"About"),r.a.createElement(v.a.Link,{eventKey:"3",className:k.a.navLink,onClick:function(){return Y(A)}},"Work"),r.a.createElement(v.a.Link,{eventKey:"4",className:k.a.navLink,onClick:function(){return Y(W)}},"System"),r.a.createElement(v.a.Link,{eventKey:"5",className:k.a.navLink,onClick:function(){return Y(P)}},"Contact"),r.a.createElement(v.a.Link,{as:y.b,to:"/blogs",eventKey:"6",className:k.a.navLink,onClick:function(){Y(D),e(R("Blogs"))}},"Dev Blog"))),r.a.createElement("div",{className:k.a.screenContainer},r.a.createElement("section",{ref:B,id:"About",className:k.a.aboutSection},r.a.createElement("div",{className:k.a.profileImage},r.a.createElement("img",{src:"https://i.imgur.com/NYjsR8e.jpg",alt:"profile img"})),r.a.createElement("div",{className:k.a.centerText},r.a.createElement("p",null," I'm a student, hacker, board game geek, cosplay weaver, and artist. Every day I strive to learn, develop and solve tough and interesting problems. I have over 4 years of programing experience, with a multitude of languages. "))),r.a.createElement("section",{ref:A,id:"Work",className:k.a.workSection},r.a.createElement("br",null),r.a.createElement("strong",{className:k.a.sectionTitle},"Work"),r.a.createElement("br",null),r.a.createElement(G,null),r.a.createElement("br",null),r.a.createElement(U,null),r.a.createElement("br",null)),r.a.createElement("section",{ref:W,id:"System",className:N.a.systemSection},r.a.createElement("strong",{className:k.a.sectionTitle},"My System"),r.a.createElement("br",null),u.map((function(e){return r.a.createElement("div",{className:"box"},r.a.createElement(V,{key:e},r.a.createElement("strong",{className:N.a.mySystemText},e)))})),r.a.createElement("div",{className:N.a.daruma_container},r.a.createElement("img",{src:h.a,className:N.a.daruma}),r.a.createElement("div",{className:N.a.daruma_shadow_container},r.a.createElement("div",{className:N.a.daruma_shadow}),r.a.createElement("div",{className:N.a.daruma_shadow_m}))),r.a.createElement("div",{className:N.a.darumaToggleInfoOuterContainer},r.a.createElement("div",{className:N.a.darumaToggleButtonsContainer},r.a.createElement("button",{onClick:function(){return L("daruma")},"aria-controls":"darumaText","aria-expanded":o,className:N.a.darumaToggleButton,opacity:o},"Daruma Proverb."),r.a.createElement("button",{onClick:function(){return L("what")},"aria-controls":"darumaWhatText","aria-expanded":O,className:N.a.darumaToggleButton},"What Is Daruma?"),r.a.createElement("button",{onClick:function(){return L("why")},"aria-controls":"darumaWhyText","aria-expanded":w,className:N.a.darumaToggleButton},"Why Daruma?")),r.a.createElement("div",{className:N.a.darumaToggleInfoContainer},r.a.createElement(f.a,{in:O},r.a.createElement("div",{id:"darumaWhatText",className:N.a.darumaToggleInfo},r.a.createElement("strong",null,"What Is A Daruma doll?"),r.a.createElement("p",null,"A Daruma doll (\u9054\u78e8, daruma) is a hollow, round, Japanese traditional doll modeled after Bodhidharma, the founder of the Zen tradition of Buddhism. ... Daruma dolls are seen as a symbol of perseverance and good luck, making them a popular gift of encouragement."))),r.a.createElement(f.a,{in:o},r.a.createElement("div",{id:"darumaText",className:N.a.darumaToggleInfo},r.a.createElement("div",null,r.a.createElement("div",{className:N.a.darumaQuote},r.a.createElement("div",{className:N.a.leftQuote},r.a.createElement(d.a,null)),r.a.createElement("div",{className:N.a.darumaQuoteText},r.a.createElement("div",null,m[0]),r.a.createElement("div",null,m[1])),r.a.createElement("div",{className:N.a.rightQuote},r.a.createElement(d.a,null))),r.a.createElement("div",{className:N.a.darumaQuoteEnd},r.a.createElement("strong",{className:N.a.darumaQuoteEnd},m[3]))))),r.a.createElement(f.a,{in:w},r.a.createElement("div",{id:"darumaWhyText",className:N.a.darumaToggleInfo},r.a.createElement("strong",null,"Why The Daruma doll?"),r.a.createElement("p",null,"Because it embodies my system of work. The Daruma doll, to me, represents setting goals and seeing them through to the end; staying focused and determined to finish any project I set my self on.")))))),r.a.createElement("section",{ref:P,id:"Contact",className:k.a.contactSection},r.a.createElement("div",{className:k.a.sectionTitle},"Lets connect,"),r.a.createElement(E.a,{className:k.a.contactIconContainer},r.a.createElement("div",{className:k.a.contactIcon,style:{backgroundColor:"#08a0e9"},onClick:function(){return window.location.href="mailto:agcapdeville@gmail.com"},target:"_blank"},r.a.createElement(g.a,{className:k.a.icon})),r.a.createElement("a",{className:k.a.contactIcon,style:{backgroundColor:"dodgerblue"},href:"https://www.facebook.com/adam.capdeville.90",target:"_blank"},r.a.createElement(_.a,{className:k.a.icon})),r.a.createElement("a",{className:k.a.contactIcon,style:{backgroundColor:"#0E76AE"},href:"https://www.linkedin.com/in/adamcapdeville/",target:"_blank"},r.a.createElement(_.c,{className:k.a.icon})),r.a.createElement("a",{className:k.a.contactIcon,style:{backgroundColor:"purple"},href:"https://github.com/AGCapdeville",target:"_blank"},r.a.createElement(_.b,{className:k.a.icon}))))),r.a.createElement(x,null))},X=t(16),$=t.n(X),ee=[{title:"Capstone Dev Blog",date:"August 27, 2020",description:"Slay The Tower is a dynamic deck building video game, developed with React/Redux to create a sleek and unique user experience.",blog:{title:"Capstone Dev Blog",abstract:"Slay The Tower is a dynamic deck building video game developed in React / Redux to create a sleek and unique user experience. The world of the game is set around a legendary tower. There are those who live peacefully outside the tower, and the brave few who choose to climb and reside within. Legend states that the one who makes it to the top of the Tower is granted anything they desire.The user starts the game by selecting a hero\u2019s weapon (deck) to begin their arduous climb. Every floor of the tower is its own pocket dimension, with some expanding the size of the outside world. As the hero progresses, they must balance risk and reward. Defeating enemies grants gold and cards, but choosing to fight dire foes has the possibility to grant even greater reward. Players must choose cards wisely, as the core of the game is deck building emphasizing on card synergy. Mythical relics of power can be acquired from Trials of the Tower, however with the chance for great reward, comes greater risk. With every attempt on the Tower, the player will learn of different strategies and outcomes. My project aims to develop a complex game, all while learning through implementation. ",heroImage:"https://i.imgur.com/VhZypLr.jpg",entry:[{title:"Setup Dev Blog & Narrowing Of Project Scope",date:"August 28, 2020",description:["Initiated this development blog as well as began reviewing feedback given by my capstone advisor, Profesor Erik Kaltman."],img:[""]}]}},{title:"Web Dev Blog",date:"../../..",description:"comming soon ...",blog:{title:"Web Dev Blog",abstract:"info",heroImage:"https://i.imgur.com/Fyji2AK.jpeg",entry:[{title:"Initial Capstone Project",date:"August 27, 2020",description:["Example"],img:[""]}]}}],ae=Object(L.a)("blog/SET_BLOG"),te=Object(D.a)(Object(j.a)({},ae,(function(e,a){return a.payload})),{title:"Capstone Dev Blog",abstract:"Slay The Tower is a dynamic deck building video game developed in React / Redux to create a sleek and unique user experience. The world of the game is set around a legendary tower. There are those who live peacefully outside the tower, and the brave few who choose to climb and reside within. Legend states that the one who makes it to the top of the Tower is granted anything they desire.The user starts the game by selecting a hero\u2019s weapon (deck) to begin their arduous climb. Every floor of the tower is its own pocket dimension, with some expanding the size of the outside world. As the hero progresses, they must balance risk and reward. Defeating enemies grants gold and cards, but choosing to fight dire foes has the possibility to grant even greater reward. Players must choose cards wisely, as the core of the game is deck building emphasizing on card synergy. Mythical relics of power can be acquired from Trials of the Tower, however with the chance for great reward, comes greater risk. With every attempt on the Tower, the player will learn of different strategies and outcomes. My project aims to develop a complex game, all while learning through implementation. ",heroImage:"https://i.imgur.com/VhZypLr.jpg",entry:[{title:"Setup Dev Blog & Narrowing Of Project Scope",date:"August 28, 2020",description:["Initiated this development blog as well as began reviewing feedback given by my capstone advisor, Profesor Erik Kaltman."],img:[""]}]}),ne=Object(B.a)((function(e){return e.blog}),(function(e){return e})),re=t(126),oe=function(){var e=Object(c.b)(),a=Object(n.useRef)(null);return r.a.createElement("div",{ref:a,className:"blogContainer"},r.a.createElement(p.a,{sticky:"top",bsPrefix:"navbar",variant:"dark",className:$.a.navbar},r.a.createElement(p.a.Brand,{as:y.b,to:"/",className:$.a.navLink,onClick:function(){return e(R("Home"))}},"Adam Capdeville"),r.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:$.a.navbarToggle})),r.a.createElement("div",{className:$.a.blogScreenTitle},r.a.createElement("div",{className:$.a.dotSlash},"./"),"Dev Blogs"),r.a.createElement("div",{className:$.a.heroImageContainer},r.a.createElement("img",{className:$.a.heroImage,src:"https://i.imgur.com/Fyji2AK.jpeg"})),r.a.createElement("div",{className:$.a.blogList},ee.map((function(t,n){return r.a.createElement("div",null,r.a.createElement(y.b,{to:"/blog",className:$.a.blogLink},r.a.createElement(re.a,{key:n,className:$.a.blogCard,onClick:function(){var n;n=a,window.scrollTo({top:n.current.offsetTop,behavior:"smooth"}),e(ae(t.blog)),e(R("Blog"))}},r.a.createElement(re.a.Body,null,r.a.createElement(re.a.Title,{className:$.a.blogCardTitle},r.a.createElement("strong",null,t.title)," "),r.a.createElement(re.a.Text,null," ",t.description," "),r.a.createElement(re.a.Subtitle,{className:$.a.blogCardDate}," ",t.date," ")))),r.a.createElement("hr",null))}))))},le=t(18),ce=t.n(le),ie=function(){var e=Object(c.b)(),a=Object(c.c)(ne);return r.a.createElement("div",null,r.a.createElement(p.a,{sticky:"top",bsPrefix:"navbar",variant:"dark",className:ce.a.navbar},r.a.createElement(p.a.Brand,{as:y.b,to:"/",className:ce.a.navLink,onClick:function(){return e(R("Home"))}},"Adam Capdeville"),r.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav",className:ce.a.navbarToggle})),r.a.createElement("div",{className:ce.a.blogScreenTitle},a.title),r.a.createElement("div",{className:ce.a.heroImageContainer},r.a.createElement("img",{className:ce.a.heroImage,src:a.heroImage})),r.a.createElement("div",{className:ce.a.blogContainer},r.a.createElement(re.a,{className:ce.a.abstractContainer},r.a.createElement("div",{className:ce.a.abstract},r.a.createElement("h4",null,r.a.createElement("strong",null,"Abstract")),r.a.createElement("p",{className:ce.a.abstractText},a.abstract))),a.entry.map((function(e,a){return r.a.createElement(re.a,{className:ce.a.entry,key:a},r.a.createElement(re.a.Title,null,e.title),r.a.createElement(re.a.Subtitle,null,e.date),e.description.map((function(a,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re.a.Body,{key:t}," ",a," "),r.a.createElement(re.a.Body,null," ",r.a.createElement("img",{src:e.img[t]})," "))})))}))))},se=t(8);var me=function(){return r.a.createElement("div",null,r.a.createElement(se.d,null,r.a.createElement(se.b,{path:"/",exact:!0,component:z}),r.a.createElement(se.b,{path:"/blogs",exact:!0,component:oe}),r.a.createElement(se.b,{path:"/blog",exact:!0,component:ie}),r.a.createElement(se.a,{to:"/"})))},ue=t(25),de=t(75),ge=t(76),_e=Object(ue.combineReducers)({nav:A,blog:te});var be=document.getElementById("root"),he=function(e){var a=[de.a],t=[ue.applyMiddleware.apply(void 0,a)],n=ge.composeWithDevTools.apply(void 0,t);return Object(ue.createStore)(_e,e,n)}();l.a.render(r.a.createElement(y.a,null,r.a.createElement(c.a,{store:he},r.a.createElement(me,null))),be)},12:function(e,a,t){e.exports={reposContainer:"github_reposContainer__3CZ3b",repoCard:"github_repoCard__KWnNU",repoTitle:"github_repoTitle__2NUck",repoImage:"github_repoImage__3tsC9",repoText:"github_repoText__1x6sf",languageIconContainer:"github_languageIconContainer__3tZZg",languageIcon:"github_languageIcon__3MksM",languageIconDefault:"github_languageIconDefault__3oln3",repoLink:"github_repoLink__1t6lg"}},16:function(e,a,t){e.exports={blogContainer:"blogs_blogContainer__3eFMg",heroImageContainer:"blogs_heroImageContainer__1i-DC",heroImage:"blogs_heroImage__2qOjw",blogList:"blogs_blogList__2T5qK",blogCard:"blogs_blogCard__2Yx6r",blogCardTitle:"blogs_blogCardTitle__3wecv",blogCardDate:"blogs_blogCardDate___7d5j",blogScreenTitle:"blogs_blogScreenTitle___lWTV",dotSlash:"blogs_dotSlash__2elid",moduleBody:"blogs_moduleBody__3Lmt9",item:"blogs_item__OGo43",title:"blogs_title__1ScYM",moduleSkill:"blogs_moduleSkill__CXfLL",navbar:"blogs_navbar__3qRB-",navbarColapse:"blogs_navbarColapse__1Ojcr",navbarToggle:"blogs_navbarToggle__2qXiZ",navLink:"blogs_navLink__3WS3O",blogLink:"blogs_blogLink__38hcV"}},18:function(e,a,t){e.exports={blogScreenTitle:"blog_blogScreenTitle__3aUJD",blogContainer:"blog_blogContainer__2ImoJ",abstractContainer:"blog_abstractContainer__1yOdD",abstract:"blog_abstract__D5SVZ",abstractText:"blog_abstractText__2FCM4",entry:"blog_entry__UZKN7",heroImageContainer:"blog_heroImageContainer__1RaDP",heroImage:"blog_heroImage__2AHV1",navbar:"blog_navbar__XhPmb",navLink:"blog_navLink__23cHO"}},23:function(e,a,t){e.exports={container:"currentRepo_container__2W7J2",repoRow:"currentRepo_repoRow__chAUy",repo:"currentRepo_repo__Qdsaf",repoLink:"currentRepo_repoLink__1R4Jn",dateRow:"currentRepo_dateRow__1rA_f",dateText:"currentRepo_dateText__Hg-Vu",text:"currentRepo_text__30hH-",blinkyGreen:"currentRepo_blinkyGreen__fxHYd"}},4:function(e,a,t){e.exports={logo:"landing_logo__1hgZC",navbar:"landing_navbar__38D3X",navbarColapse:"landing_navbarColapse__2zzHI",navbarToggle:"landing_navbarToggle__29xe1",navLink:"landing_navLink__1irxL",landingTitle:"landing_landingTitle__14ep1",continueButton:"landing_continueButton__1O3mO",screenContainer:"landing_screenContainer__YH4GW",aboutSection:"landing_aboutSection__3Ygnq",workSection:"landing_workSection__2MPP0",influentialSection:"landing_influentialSection__2if8v",contactSection:"landing_contactSection__kLPwn",contactIconContainer:"landing_contactIconContainer__3TpJn",contactIcon:"landing_contactIcon__2fIzH",icon:"landing_icon__2OrBQ",sectionTitle:"landing_sectionTitle__13Ygi",centerText:"landing_centerText__W2BA5",profileImage:"landing_profileImage__1ZIUs",body:"landing_body__154mB",name:"landing_name__3JbT_",listTitle:"landing_listTitle__3IcPJ",listContainer:"landing_listContainer__KmUWj",list:"landing_list__2fie3",about:"landing_about__m3-bO"}},54:function(e,a,t){e.exports={container:"footer_container__3Mbmx",link:"footer_link__rNuqK"}},6:function(e,a,t){e.exports={systemSection:"systemSection_systemSection__1k8uW",mySystemText:"systemSection_mySystemText__3Hj1o",darumaQuote:"systemSection_darumaQuote__2cFCg",darumaQuoteText:"systemSection_darumaQuoteText__1V5KR",leftQuote:"systemSection_leftQuote__1XFZo",rightQuote:"systemSection_rightQuote__iZCHJ",darumaQuoteEnd:"systemSection_darumaQuoteEnd__39sT7",daruma_container:"systemSection_daruma_container__1pcPS",daruma:"systemSection_daruma__3_XOo",daruma_shadow_container:"systemSection_daruma_shadow_container__2BUof",daruma_shadow:"systemSection_daruma_shadow__3Dm7c",shadow:"systemSection_shadow__1APys",daruma_shadow_m:"systemSection_daruma_shadow_m__321UN",shadow_m:"systemSection_shadow_m__wAb10",darumaToggleInfoOuterContainer:"systemSection_darumaToggleInfoOuterContainer__26ahs",darumaToggleInfoContainer:"systemSection_darumaToggleInfoContainer__wuFGX",darumaToggleInfo:"systemSection_darumaToggleInfo__1q2BQ",darumaToggleButtonsContainer:"systemSection_darumaToggleButtonsContainer__KTMQa",darumaToggleButton:"systemSection_darumaToggleButton__5xhLN",aboutDaruma:"systemSection_aboutDaruma__1upuK"}},70:function(e,a,t){e.exports=t.p+"static/media/daruma.a0dade87.png"},78:function(e,a,t){e.exports=t(118)},83:function(e,a,t){},88:function(e,a,t){},89:function(e,a,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.46163417.chunk.js.map