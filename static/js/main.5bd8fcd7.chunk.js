(this["webpackJsonppro-folio"]=this["webpackJsonppro-folio"]||[]).push([[0],{11:function(e,a,t){e.exports={navContainer:"SideBar_navContainer__3iTgW",navLinksContainer:"SideBar_navLinksContainer__2kEnH",navCustom:"SideBar_navCustom__27EhR",collapseContainer:"SideBar_collapseContainer__Cf81t",jobTitle:"SideBar_jobTitle__2-8wr",meBox:"SideBar_meBox__1qJQn",name:"SideBar_name__WhWuS"}},2:function(e,a,t){e.exports={App:"App_App__3VFvM",sectionsContainer:"App_sectionsContainer__3EyHF",text:"App_text__gA2FA",experienceImg:"App_experienceImg__1P6Hv",experienceContent:"App_experienceContent__2PzJO",experienceBullet:"App_experienceBullet__2gdRR",projectContainer:"App_projectContainer__3M6_l",projectImg:"App_projectImg__1dPVK",projectButton:"App_projectButton__1ZKG7",viewProjectBtn:"App_viewProjectBtn__1D1wV",seeCodeBtn:"App_seeCodeBtn__bDeK3",projectTitle:"App_projectTitle__2A-AA",projectTechnologies:"App_projectTechnologies__1m1BR",educationPrimary:"App_educationPrimary__1jzi8",stackRow:"App_stackRow__1XCSN",stackItem:"App_stackItem__3g0tR",stackIcon:"App_stackIcon__2oPGc",jsIcon:"App_jsIcon__LpCB-",cssIcon:"App_cssIcon__2og8U",reactIcon:"App_reactIcon__2h0iU",htmlIcon:"App_htmlIcon__HqHPX",bootstrapIcon:"App_bootstrapIcon__2NM8E",about:"App_about__8_P8P",blackCover:"App_blackCover__1AtL1",expText:"App_expText__2mv2T"}},20:function(e,a,t){e.exports={navLinkanchor:"NavLink_navLinkanchor__3Ze8Y",changeBackground:"NavLink_changeBackground__1Cqpd",navLinkColorBlock:"NavLink_navLinkColorBlock__270P-",navText:"NavLink_navText__3eUhr",red:"NavLink_red__1DXjB",green:"NavLink_green__1tF3O",blue:"NavLink_blue__1-lAV",brown:"NavLink_brown__2ugrT",yellow:"NavLink_yellow__36-5j",indigo:"NavLink_indigo__VzXqM",orange:"NavLink_orange__2BMdh"}},24:function(e,a,t){e.exports={contactRow:"ContactItem_contactRow__2RsWc",iconWrapper:"ContactItem_iconWrapper__Ek2Gj",icon:"ContactItem_icon__2pL9B"}},27:function(e,a,t){e.exports={bar:"SectionHeaderBar_bar__5a0Ov",title:"SectionHeaderBar_title__2ydNV"}},28:function(e,a,t){e.exports=t.p+"static/media/LamarUniversity.a0bc14af.jpg"},39:function(e,a,t){e.exports=t.p+"static/media/BurgerBuilderBig.6b42c00e.png"},40:function(e,a,t){e.exports=t.p+"static/media/OmnifoodBig.eebfbdc7.png"},41:function(e,a,t){e.exports=t.p+"static/media/BugTrackerBig.35426327.png"},42:function(e,a,t){e.exports=t.p+"static/media/WeatherAppBig.7fc7252c.png"},43:function(e,a,t){e.exports={card:"Card_card__bwZx1"}},44:function(e,a,t){e.exports=t.p+"static/media/TXARNG.14a68d93.svg"},48:function(e,a,t){e.exports=t(63)},53:function(e,a,t){},59:function(e,a,t){e.exports=t.p+"static/media/PAISD.bd8f7616.jpg"},63:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(18),l=t.n(c),o=(t(53),t(14)),i=t(15),s=t(17),m=t(16),p=t(66),d=t(67),u=t(20),f=t.n(u),E=function(e){var a=[f.a.navLinkColorBlock,f.a[e.color]];return r.a.createElement("li",null,r.a.createElement("a",{onClick:e.onClick,className:f.a.navLinkanchor,href:e.href},r.a.createElement("div",{className:a.join(" ")}),r.a.createElement("span",{className:f.a.navText},e.title)))},g=t(11),h=t.n(g),v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"scrollToHeader",value:function(e){e.current.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this,a=this.props.refs,t=a.aboutRef,n=a.experienceRef,c=a.projectsRef,l=a.skillsRef,o=a.educationRef,i=a.contactRef;return r.a.createElement(p.a,{className:h.a.navContainer,expand:"lg"},r.a.createElement("div",{className:h.a.meBox},r.a.createElement("h2",{className:h.a.name},"David",r.a.createElement("br",null),"Frederick"),r.a.createElement("p",{className:h.a.jobTitle},"Front-End Developer")),r.a.createElement(p.a.Toggle,{onClick:this.props.sidebarToggled,"aria-controls":"basic-navbar-nav"}),r.a.createElement(p.a.Collapse,{className:h.a.collapseContainer,id:"basic-navbar-nav"},r.a.createElement(d.a,{className:h.a.navCustom},r.a.createElement("ul",{className:h.a.navLinksContainer},r.a.createElement(E,{onClick:function(){e.scrollToHeader(t)},color:"blue",ref:"about",title:"About"}),r.a.createElement(E,{onClick:function(){e.scrollToHeader(n)},color:"yellow",ref:"experience",title:"Experience"}),r.a.createElement(E,{onClick:function(){e.scrollToHeader(c)},color:"red",ref:"projects",title:"Projects"}),r.a.createElement(E,{onClick:function(){e.scrollToHeader(l)},color:"green",ref:"skills",title:"Skills"}),r.a.createElement(E,{onClick:function(){e.scrollToHeader(o)},color:"brown",ref:"education",title:"Education"}),r.a.createElement(E,{onClick:function(){e.scrollToHeader(i)},color:"indigo",ref:"contact",title:"Contact"}),r.a.createElement(E,{color:"orange",ref:"resume",title:"Resume"})))))}}]),t}(r.a.Component),_=t(27),k=t.n(_),b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:k.a.bar},r.a.createElement("h1",{className:k.a.title},this.props.title))}}]),t}(r.a.Component),N=t(2),x=t.n(N),w=t(21),j=t(45),C=t(12),T=t(39),y=t.n(T),B=t(40),R=t.n(B),I=t(41),A=t.n(I),S=t(42),P=t.n(S),L=t(24),O=t.n(L),H=function(e){return r.a.createElement("div",{className:"container my-4 ".concat(O.a.contactRow)},r.a.createElement("a",{onClick:e.onClick,dataToolTip:e.tooltip,className:O.a.iconWrapper,href:e.href,target:e.target},r.a.createElement(e.icon,{className:O.a.icon})),r.a.createElement("a",{onClick:e.onClick,className:"ml-4",href:e.href},e.linkText))},U=t(43),M=t.n(U),V=function(e){return r.a.createElement("div",{className:"".concat(M.a.card)},e.children)},D=t(28),F=t.n(D),W=(t(59),t(44)),G=t.n(W),J=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).aboutRef=r.a.createRef(),n.experienceRef=r.a.createRef(),n.projectsRef=r.a.createRef(),n.skillsRef=r.a.createRef(),n.educationRef=r.a.createRef(),n.contactRef=r.a.createRef(),n.state={sidebarTogg:!1},n}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.aboutRef,t=this.experienceRef,n=this.projectsRef,c=this.skillsRef,l=this.educationRef,o=this.contactRef;return r.a.createElement("div",{className:x.a.App},r.a.createElement(v,{refs:{aboutRef:a,experienceRef:t,projectsRef:n,skillsRef:c,educationRef:l,contactRef:o},sidebarToggled:function(){return e.setState((function(e){return{sidebarTogg:!e.sidebarTogg}}))}}),this.state.sidebarTogg?r.a.createElement("div",{className:x.a.blackCover}):null,r.a.createElement("div",{className:x.a.sectionsContainer},r.a.createElement("div",{ref:this.aboutRef},r.a.createElement(b,{id:"about",title:"ABOUT"})),r.a.createElement("div",{className:"container ".concat(x.a.about)},r.a.createElement("p",{className:x.a.text},"I graduated in 2016 with my Bachelor's degree in psychology and have decided to leverage that experience towards front-end development, using what I know of how people think to create great experiences for them. I enjoy working with Javascript and React the most, but am constantly improving by learning other languages and frameworks. I am currently learning React Native and SQL. ",r.a.createElement("br",null),r.a.createElement("br",null)," I worked in an IT environment for four years during college and spent a majority of my time in my previous roll working on digital design and handling technology aspects of the office- to include rebuilding their website. To view my rebuild, click here.")),r.a.createElement("div",{ref:this.experienceRef},r.a.createElement(b,{id:"experience",title:"EXPERIENCE"})),r.a.createElement("div",{className:"container my-4"},r.a.createElement(V,null,r.a.createElement("div",{className:"my-3 mx-3"},r.a.createElement("div",{className:"d-flex flex-row ".concat(x.a.experienceContent)},r.a.createElement("img",{className:x.a.experienceImg,src:F.a,alt:"Lamar University Logo"}),r.a.createElement("div",{className:"d-flex align-items-center justify-content-between w-100 mx-3 ".concat(x.a.expText)},r.a.createElement("h2",null,"Lamar University"),r.a.createElement("h4",null,"Tech Support & Admin. Specialist"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",null,"State university specializing in engineering that offers bachelor's, master's, and doctorate level degrees.")),r.a.createElement("h5",null,"MEDIA & WEB SUPPORT"),r.a.createElement("ul",null,r.a.createElement("li",{className:x.a.experienceBullet},"Completed redesign of 4 department websites using a CMS"),r.a.createElement("li",{className:x.a.experienceBullet},"Managed all media platforms: Facebook, FormStack, Setmore, Outlook, Google Forms"," "),r.a.createElement("li",{className:x.a.experienceBullet},"Designed digital marketing materials, flyers, and programs for 50+ biannual events"),r.a.createElement("li",{className:x.a.experienceBullet},"Trained and supervised team of 4 employees")),r.a.createElement("br",null),r.a.createElement("h5",null,"ADMINISTRATIVE SUPPORT"),r.a.createElement("ul",null,r.a.createElement("li",{className:x.a.experienceBullet},"Created comprehensive office policies and procedures manual"),r.a.createElement("li",{className:x.a.experienceBullet},"Provided excellent customer service to students, faculty, staff, and visiting professors"),r.a.createElement("li",{className:x.a.experienceBullet},"Assist in execution of hurricane response operations to assist international students in evacuation and inquiries"),r.a.createElement("li",{className:x.a.experienceBullet},"Coordinate events to include: reserving space, ordering supplies, and fundraising")),r.a.createElement("br",null),r.a.createElement("p",null,"Sep 2018 - Apr 2020 | Beaumont, TX")))),r.a.createElement(V,null,r.a.createElement("div",{className:"my-3 mx-3"},r.a.createElement("div",{className:"d-flex flex-row ".concat(x.a.experienceContent)},r.a.createElement("img",{className:x.a.experienceImg,src:F.a,alt:"Lamar University Logo"}),r.a.createElement("div",{className:"d-flex align-items-center justify-content-between w-100 mx-3 ".concat(x.a.expText)},r.a.createElement("h2",null,"Lamar University"),r.a.createElement("h4",null,"Computer Lab Technician"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",null,"State university specializing in engineering that offers bachelor's, master's, and doctorate level degrees.")),r.a.createElement("h5",null,"LOCAL IT SUPPORT"),r.a.createElement("ul",null,r.a.createElement("li",null,"Provided on-site IT services by diagnosing and resolving software and hardware issues of department computers for students, faculty, and staff"),r.a.createElement("li",null,"Oversaw technology in classrooms and the office to include projectors, copiers, printers, scanners, and computers"),r.a.createElement("li",null,"Delivered excellent customer service by warmly greeting visitors, actively listening to needs, and asking for clarification when necessary")),r.a.createElement("br",null),r.a.createElement("p",null,"Sep 2012 - May 2016 | Beaumont, TX")))),r.a.createElement(V,null,r.a.createElement("div",{className:"my-3 mx-3"},r.a.createElement("div",{className:"d-flex flex-row ".concat(x.a.experienceContent)},r.a.createElement("img",{className:x.a.experienceImg,src:G.a,alt:"Texas Army National Guard Logo"}),r.a.createElement("div",{className:"d-flex align-items-center justify-content-between w-100 mx-3 ".concat(x.a.expText)},r.a.createElement("h2",null,"Texas Army National Guard"),r.a.createElement("h4",null,"Chaplain Assistant"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",null,"United States Military Branch specializing in ground operations.")),r.a.createElement("h5",null,"RELIGIOUS SUPPORT"),r.a.createElement("ul",null,r.a.createElement("li",{className:x.a.experienceBullet},"Presented to executive staff on company morale, religions, and needs"),r.a.createElement("li",{className:x.a.experienceBullet},"Prepared for and helped to execute Sunday services"),r.a.createElement("li",{className:x.a.experienceBullet},"Cared for soldiers through prayers and visiting injured in hospital")),r.a.createElement("br",null),r.a.createElement("p",null,"Feb 2008 - Mar 2014 | Houston, TX"))))),r.a.createElement("div",{ref:this.projectsRef},r.a.createElement(b,{title:"PROJECTS"})),r.a.createElement("div",{className:"row d-flex justify-content-around my-4"},r.a.createElement("div",{className:x.a.projectContainer},r.a.createElement("h2",{className:x.a.projectTitle},"Bug Tracker"),r.a.createElement("h3",{className:x.a.projectTechnologies},"React JS, Firebase"),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://bug-tracker-6ea40.web.app/login",className:"".concat(x.a.viewProjectBtn," ").concat(x.a.projectButton)},"View Project"),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/david-r-frederick/bug-tracker",className:"".concat(x.a.seeCodeBtn," ").concat(x.a.projectButton)},"See Code"),r.a.createElement("img",{className:x.a.projectImg,src:A.a,alt:"third project"})),r.a.createElement("div",{className:"".concat(x.a.projectContainer)},r.a.createElement("h2",{className:x.a.projectTitle},"Burger Builder"),r.a.createElement("h3",{className:x.a.projectTechnologies},"React JS, Firebase"),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://react-my-burger-fc3a1.web.app/",className:"".concat(x.a.viewProjectBtn," ").concat(x.a.projectButton)},"View Project"),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/david-r-frederick/burger-builder-demo",className:"".concat(x.a.seeCodeBtn," ").concat(x.a.projectButton)},"See Code"),r.a.createElement("img",{className:x.a.projectImg,src:y.a,alt:"first project"}))),r.a.createElement("div",{className:"row d-flex justify-content-around my-4"},r.a.createElement("div",{className:"".concat(x.a.projectContainer)},r.a.createElement("h2",{className:x.a.projectTitle},"Omnifood"),r.a.createElement("h3",{className:x.a.projectTechnologies},"HTML, CSS, jQuery"),r.a.createElement("img",{className:x.a.projectImg,src:R.a,alt:"second project"}),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://david-r-frederick.github.io/omnifood-website-demo/",className:"".concat(x.a.viewProjectBtn," ").concat(x.a.projectButton)},"View Project"),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/david-r-frederick/omnifood-website-demo",className:"".concat(x.a.seeCodeBtn," ").concat(x.a.projectButton)},"See Code")),r.a.createElement("div",{className:"".concat(x.a.projectContainer)},r.a.createElement("h2",{className:x.a.projectTitle},"Weather App"),r.a.createElement("h3",{className:x.a.projectTechnologies},"React JS"),r.a.createElement("img",{className:x.a.projectImg,src:P.a,alt:"second project"}),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://weather-app-3b941.web.app/current",className:"".concat(x.a.viewProjectBtn," ").concat(x.a.projectButton)},"View Project"),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/david-r-frederick/personal-react-demos/tree/master/weather-app-demo",className:"".concat(x.a.seeCodeBtn," ").concat(x.a.projectButton)},"See Code"))),r.a.createElement("div",{ref:this.skillsRef},r.a.createElement(b,{id:"stack",title:"STACK"})),r.a.createElement("div",{className:"container my-4"},r.a.createElement(V,null,r.a.createElement("div",{className:x.a.stackRow},r.a.createElement("div",{className:x.a.stackItem},r.a.createElement(C.e,{className:"".concat(x.a.stackIcon," ").concat(x.a.jsIcon)}),r.a.createElement("p",null,"JavaScript")),r.a.createElement("div",{className:x.a.stackItem},r.a.createElement(C.c,{className:"".concat(x.a.stackIcon," ").concat(x.a.cssIcon)}),r.a.createElement("p",null,"CSS")),r.a.createElement("div",{className:x.a.stackItem},r.a.createElement(C.f,{className:"".concat(x.a.stackIcon," ").concat(x.a.reactIcon)}),r.a.createElement("p",null,"React")),r.a.createElement("div",{className:x.a.stackItem},r.a.createElement(C.d,{className:"".concat(x.a.stackIcon," ").concat(x.a.htmlIcon)}),r.a.createElement("p",null,"HTML5")),r.a.createElement("div",{className:x.a.stackItem},r.a.createElement(C.a,{className:"".concat(x.a.stackIcon," ").concat(x.a.bootstrapIcon)}),r.a.createElement("p",null,"BootStrap"))))),r.a.createElement("div",{ref:this.educationRef},r.a.createElement(b,{id:"education",title:"EDUCATION"})),r.a.createElement("div",{className:"container my-4"},r.a.createElement(V,null,r.a.createElement("div",{className:"my-3 mx-3"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://www.lamar.edu",className:x.a.educationPrimary},"Lamar University"),r.a.createElement("p",null," Beaumont, TX"),r.a.createElement("ul",null,r.a.createElement("li",null,"B.A. in Psychology"),r.a.createElement("li",null,"Graduation Date: May 2016")))))),r.a.createElement("div",{ref:this.contactRef},r.a.createElement(b,{id:"contact",title:"CONTACT"})),r.a.createElement("div",null,r.a.createElement(H,{tooltip:"Copy Email",href:"/",linkText:"dfrederick79@gmail.com",icon:w.c,target:"/",onClick:function(e){e.preventDefault(),navigator.clipboard.writeText("dfrederick79@gmail.com"),alert("Email copied")}}),r.a.createElement(H,{tooltip:"Copy Phone Number",href:"/",linkText:"409-543-7859",icon:w.d,target:"/",onClick:function(e){e.preventDefault(),navigator.clipboard.writeText("409-543-7859"),alert("Phone number copied")}}),r.a.createElement(H,{tooltip:"View my GitHub",href:"https://github.com/david-r-frederick",linkText:"https://github.com/david-r-frederick",icon:w.a,target:"blank"}),r.a.createElement(H,{tooltip:"View my LinkedIn Profile",href:"https://www.linkedin.com/in/david-frederick-413b30ab/",linkText:"https://www.linkedin.com/in/david-frederick-413b30ab/",icon:w.b,target:"blank"}),r.a.createElement(H,{tooltip:"View my HackerRank",href:"https://www.hackerrank.com/dfrederick79?hr_r=1",linkText:"https://www.hackerrank.com/dfrederick79?hr_r=1",icon:j.a,target:"blank"}),r.a.createElement(H,{tooltip:"View my Codewars Kata",href:"https://www.codewars.com/users/d-frederick",linkText:"https://www.codewars.com/users/d-frederick",icon:C.b,target:"blank"}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=t(47);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X.a,null,r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.5bd8fcd7.chunk.js.map