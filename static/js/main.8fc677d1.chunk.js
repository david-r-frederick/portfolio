(this["webpackJsonppro-folio"]=this["webpackJsonppro-folio"]||[]).push([[0],[,,function(e,a,t){e.exports={App:"App_App__3VFvM",sectionsContainer:"App_sectionsContainer__3EyHF",text:"App_text__gA2FA",experienceImg:"App_experienceImg__1P6Hv",experienceContent:"App_experienceContent__2PzJO",experienceBullet:"App_experienceBullet__2gdRR",educationPrimary:"App_educationPrimary__1jzi8",stackRow:"App_stackRow__1XCSN",stackItem:"App_stackItem__3g0tR",stackIcon:"App_stackIcon__2oPGc",jsIcon:"App_jsIcon__LpCB-",cssIcon:"App_cssIcon__2og8U",reactIcon:"App_reactIcon__2h0iU",htmlIcon:"App_htmlIcon__HqHPX",bootstrapIcon:"App_bootstrapIcon__2NM8E",about:"App_about__8_P8P",blackCover:"App_blackCover__1AtL1",topBar:"App_topBar__1k_TW",meBox:"App_meBox__1VVwd",name:"App_name__3kLMq",jobTitle:"App_jobTitle__3SMsT",hamburgerButton:"App_hamburgerButton__3ftub",line:"App_line__1wJqd",expText:"App_expText__2mv2T"}},,function(e,a,t){e.exports={projectContainer:"Project_projectContainer__2KzvV",projectImg:"Project_projectImg__3OpwU",projectTitle:"Project_projectTitle__NvDP6",projectTechnologies:"Project_projectTechnologies__3Lxp_",projectButton:"Project_projectButton__226jf",viewProjectBtn:"Project_viewProjectBtn__3Jxjc",seeCodeBtn:"Project_seeCodeBtn__3j-yZ"}},function(e,a,t){e.exports={navContainer:"SideBar_navContainer__3iTgW",meBox:"SideBar_meBox__1qJQn",name:"SideBar_name__WhWuS",jobTitle:"SideBar_jobTitle__2-8wr",navLinksContainer:"SideBar_navLinksContainer__2kEnH",toggled:"SideBar_toggled__3yPUl"}},,,,,,,function(e,a,t){e.exports={navLinkanchor:"NavLink_navLinkanchor__3Ze8Y",changeBackground:"NavLink_changeBackground__1Cqpd",navLinkColorBlock:"NavLink_navLinkColorBlock__270P-",navText:"NavLink_navText__3eUhr",red:"NavLink_red__1DXjB",green:"NavLink_green__1tF3O",blue:"NavLink_blue__1-lAV",brown:"NavLink_brown__2ugrT",yellow:"NavLink_yellow__36-5j",indigo:"NavLink_indigo__VzXqM",orange:"NavLink_orange__2BMdh"}},,function(e,a,t){e.exports={contactRow:"ContactItem_contactRow__2RsWc",iconWrapper:"ContactItem_iconWrapper__Ek2Gj",icon:"ContactItem_icon__2pL9B"}},,function(e,a,t){e.exports={bar:"SectionHeaderBar_bar__5a0Ov",title:"SectionHeaderBar_title__2ydNV"}},function(e,a,t){e.exports=t.p+"static/media/LamarUniversity.a0bc14af.jpg"},,,,,,function(e,a,t){e.exports=t.p+"static/media/ResumeDavidFrederick.74e567f9.pdf"},function(e,a,t){e.exports=t.p+"static/media/BurgerBuilderBig.6b42c00e.png"},function(e,a,t){e.exports=t.p+"static/media/OmnifoodBig.eebfbdc7.png"},function(e,a,t){e.exports=t.p+"static/media/BugTrackerBig.35426327.png"},function(e,a,t){e.exports=t.p+"static/media/WeatherAppBig.7fc7252c.png"},function(e,a,t){e.exports={card:"Card_card__bwZx1"}},function(e,a,t){e.exports=t.p+"static/media/TXARNG.14a68d93.svg"},,,,function(e,a,t){e.exports=t(44)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(22),l=t.n(c),i=(t(38),t(7)),o=t(8),s=t(10),m=t(9),d=t(12),p=t.n(d),u=function(e){var a=[p.a.navLinkColorBlock,p.a[e.color]];return r.a.createElement("li",null,r.a.createElement("a",{onClick:e.onClick,className:p.a.navLinkanchor,href:e.href},r.a.createElement("div",{className:a.join(" ")}),r.a.createElement("span",{className:p.a.navText},e.title)))},f=t(5),g=t.n(f),E=t(23),v=t.n(E),h=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).handleNavLinkClick=function(a){e.scrollToHeader(a),e.props.closeSideBar()},e}return Object(o.a)(t,[{key:"scrollToHeader",value:function(e){e.current.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this,a=this.props.refs,t=a.aboutRef,n=a.experienceRef,c=a.projectsRef,l=a.skillsRef,i=a.educationRef,o=a.contactRef;return r.a.createElement("div",{className:"".concat(g.a.navContainer," ").concat(this.props.toggled?g.a.toggled:g.a.unToggled)},r.a.createElement("div",{className:g.a.meBox},r.a.createElement("h2",{className:g.a.name},"David",r.a.createElement("br",null),"Frederick"),r.a.createElement("p",{className:g.a.jobTitle},"Front-End Developer")),r.a.createElement("ul",{className:g.a.navLinksContainer},r.a.createElement(u,{onClick:function(){return e.handleNavLinkClick(t)},color:"blue",ref:"about",title:"About"}),r.a.createElement(u,{onClick:function(){return e.handleNavLinkClick(n)},color:"yellow",ref:"experience",title:"Experience"}),r.a.createElement(u,{onClick:function(){return e.handleNavLinkClick(c)},color:"red",ref:"projects",title:"Projects"}),r.a.createElement(u,{onClick:function(){return e.handleNavLinkClick(l)},color:"green",ref:"skills",title:"Skills"}),r.a.createElement(u,{onClick:function(){return e.handleNavLinkClick(i)},color:"brown",ref:"education",title:"Education"}),r.a.createElement(u,{onClick:function(){return e.handleNavLinkClick(o)},color:"indigo",ref:"contact",title:"Contact"}),r.a.createElement(u,{onClick:function(){window.open(v.a,"_blank","fullscreen=yes")},color:"orange",ref:"resume",title:"Resume"})))}}]),t}(r.a.Component),_=t(16),k=t.n(_),b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:k.a.bar},r.a.createElement("h1",{className:k.a.title},this.props.title))}}]),t}(r.a.Component),x=t(2),N=t.n(x),w=t(13),j=t(30),y=t(6),C=t(24),B=t.n(C),T=t(25),I=t.n(T),R=t(26),S=t.n(R),A=t(27),L=t.n(A),P=t(14),O=t.n(P),H=function(e){return r.a.createElement("div",{className:"container my-4 ".concat(O.a.contactRow)},r.a.createElement("a",{onClick:e.onClick,dataToolTip:e.tooltip,className:O.a.iconWrapper,href:e.href,target:e.target},r.a.createElement(e.icon,{className:O.a.icon})),r.a.createElement("a",{onClick:e.onClick,className:"ml-4",href:e.href},e.linkText))},M=t(28),U=t.n(M),D=function(e){return r.a.createElement("div",{className:"".concat(U.a.card)},e.children)},F=t(17),W=t.n(F),V=t(29),J=t.n(V),X=t(4),G=t.n(X),z=function(e){var a=e.title,t=e.technologies,c=e.codeHref,l=e.projectHref,i=e.projectImage,o=e.altMessage;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"".concat(G.a.projectContainer)},r.a.createElement("h2",{className:G.a.projectTitle},a),r.a.createElement("h3",{className:G.a.projectTechnologies},t),r.a.createElement("img",{className:G.a.projectImg,src:i,alt:o}),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:l,className:"".concat(G.a.viewProjectBtn," ").concat(G.a.projectButton)},"View Project"),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:c,className:"".concat(G.a.seeCodeBtn," ").concat(G.a.projectButton)},"See Code")))},q=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).aboutRef=r.a.createRef(),n.experienceRef=r.a.createRef(),n.projectsRef=r.a.createRef(),n.skillsRef=r.a.createRef(),n.educationRef=r.a.createRef(),n.contactRef=r.a.createRef(),n.state={sidebarTogg:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){window.innerWidth>991&&e.setState({sidebarTogg:!1})}))}},{key:"closeSideBar",value:function(){this.setState({sidebarTogg:!1})}},{key:"render",value:function(){var e=this,a=this.aboutRef,t=this.experienceRef,n=this.projectsRef,c=this.skillsRef,l=this.educationRef,i=this.contactRef;return r.a.createElement("div",{className:N.a.App},r.a.createElement(h,{refs:{aboutRef:a,experienceRef:t,projectsRef:n,skillsRef:c,educationRef:l,contactRef:i},toggled:this.state.sidebarTogg,closeSideBar:this.closeSideBar}),this.state.sidebarTogg?r.a.createElement("div",{onClick:this.closeSideBar,className:N.a.blackCover}):null,r.a.createElement("div",{className:N.a.topBar},r.a.createElement("div",{className:N.a.meBox},r.a.createElement("h2",{className:N.a.name},"David",r.a.createElement("br",null),"Frederick"),r.a.createElement("p",{className:N.a.jobTitle},"Front-End Developer"))),r.a.createElement("button",{className:N.a.hamburgerButton,onClick:function(){return e.setState((function(e){return{sidebarTogg:!e.sidebarTogg}}))}},r.a.createElement("div",{className:N.a.line}),r.a.createElement("div",{className:N.a.line}),r.a.createElement("div",{className:N.a.line})),r.a.createElement("div",{className:N.a.sectionsContainer},r.a.createElement("div",{ref:this.aboutRef},r.a.createElement(b,{id:"about",title:"ABOUT"})),r.a.createElement("div",{className:"container ".concat(N.a.about)},r.a.createElement("p",{className:N.a.text},"I graduated in 2016 with my Bachelor's degree in psychology and have decided to leverage that experience towards front-end development, using what I know of how people think to create great experiences for them. I enjoy working with Javascript and React the most, but am constantly improving by learning other languages and frameworks. I am currently learning React Native and SQL. ",r.a.createElement("br",null),r.a.createElement("br",null)," I worked in an IT environment for four years during college and spent a majority of my time in my previous roll working on digital design and handling technology aspects of the office- to include rebuilding their website. To view my rebuild, click here.")),r.a.createElement("div",{ref:this.experienceRef},r.a.createElement(b,{id:"experience",title:"EXPERIENCE"})),r.a.createElement("div",{className:"container my-4"},r.a.createElement(D,null,r.a.createElement("div",{className:"my-3 mx-3"},r.a.createElement("div",{className:"d-flex flex-row ".concat(N.a.experienceContent)},r.a.createElement("img",{className:N.a.experienceImg,src:W.a,alt:"Lamar University Logo"}),r.a.createElement("div",{className:"d-flex align-items-center justify-content-between w-100 mx-3 ".concat(N.a.expText)},r.a.createElement("h2",null,"Lamar University"),r.a.createElement("h4",null,"Tech Support & Admin. Specialist"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",null,"State university specializing in engineering that offers bachelor's, master's, and doctorate level degrees.")),r.a.createElement("h5",null,"MEDIA & WEB SUPPORT"),r.a.createElement("ul",null,r.a.createElement("li",{className:N.a.experienceBullet},"Completed redesign of 4 department websites using a CMS"),r.a.createElement("li",{className:N.a.experienceBullet},"Managed all media platforms: Facebook, FormStack, Setmore, Outlook, Google Forms"," "),r.a.createElement("li",{className:N.a.experienceBullet},"Designed digital marketing materials, flyers, and programs for 50+ biannual events"),r.a.createElement("li",{className:N.a.experienceBullet},"Trained and supervised team of 4 employees")),r.a.createElement("br",null),r.a.createElement("h5",null,"ADMINISTRATIVE SUPPORT"),r.a.createElement("ul",null,r.a.createElement("li",{className:N.a.experienceBullet},"Created comprehensive office policies and procedures manual"),r.a.createElement("li",{className:N.a.experienceBullet},"Provided excellent customer service to students, faculty, staff, and visiting professors"),r.a.createElement("li",{className:N.a.experienceBullet},"Assist in execution of hurricane response operations to assist international students in evacuation and inquiries"),r.a.createElement("li",{className:N.a.experienceBullet},"Coordinate events to include: reserving space, ordering supplies, and fundraising")),r.a.createElement("br",null),r.a.createElement("p",null,"Sep 2018 - Apr 2020 | Beaumont, TX")))),r.a.createElement(D,null,r.a.createElement("div",{className:"my-3 mx-3"},r.a.createElement("div",{className:"d-flex flex-row ".concat(N.a.experienceContent)},r.a.createElement("img",{className:N.a.experienceImg,src:W.a,alt:"Lamar University Logo"}),r.a.createElement("div",{className:"d-flex align-items-center justify-content-between w-100 mx-3 ".concat(N.a.expText)},r.a.createElement("h2",null,"Lamar University"),r.a.createElement("h4",null,"Computer Lab Technician"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",null,"State university specializing in engineering that offers bachelor's, master's, and doctorate level degrees.")),r.a.createElement("h5",null,"LOCAL IT SUPPORT"),r.a.createElement("ul",null,r.a.createElement("li",null,"Provided on-site IT services by diagnosing and resolving software and hardware issues of department computers for students, faculty, and staff"),r.a.createElement("li",null,"Oversaw technology in classrooms and the office to include projectors, copiers, printers, scanners, and computers"),r.a.createElement("li",null,"Delivered excellent customer service by warmly greeting visitors, actively listening to needs, and asking for clarification when necessary")),r.a.createElement("br",null),r.a.createElement("p",null,"Sep 2012 - May 2016 | Beaumont, TX")))),r.a.createElement(D,null,r.a.createElement("div",{className:"my-3 mx-3"},r.a.createElement("div",{className:"d-flex flex-row ".concat(N.a.experienceContent)},r.a.createElement("img",{className:N.a.experienceImg,src:J.a,alt:"Texas Army National Guard Logo"}),r.a.createElement("div",{className:"d-flex align-items-center justify-content-between w-100 mx-3 ".concat(N.a.expText)},r.a.createElement("h2",null,"Texas Army National Guard"),r.a.createElement("h4",null,"Chaplain Assistant"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("i",null,"United States Military Branch specializing in ground operations.")),r.a.createElement("h5",null,"RELIGIOUS SUPPORT"),r.a.createElement("ul",null,r.a.createElement("li",{className:N.a.experienceBullet},"Presented to executive staff on company morale, religions, and needs"),r.a.createElement("li",{className:N.a.experienceBullet},"Prepared for and helped to execute Sunday services"),r.a.createElement("li",{className:N.a.experienceBullet},"Cared for soldiers through prayers and visiting injured in hospital")),r.a.createElement("br",null),r.a.createElement("p",null,"Feb 2008 - Mar 2014 | Houston, TX"))))),r.a.createElement("div",{ref:this.projectsRef},r.a.createElement(b,{title:"PROJECTS"})),r.a.createElement("div",{className:"row d-flex justify-content-around my-4"},r.a.createElement(z,{title:"Bug Tracker",technologies:"React JS, BootStrap, Firebase",codeHref:"https://github.com/david-r-frederick/bug-tracker",projectHref:"https://bug-tracker-6ea40.web.app/login",projectImage:S.a,altMessage:"Bug Tracker project image"}),r.a.createElement(z,{title:"Burger Builder",technologies:"React JS, Firebase",codeHref:"https://github.com/david-r-frederick/burger-builder-demo",projectHref:"https://react-my-burger-fc3a1.web.app/",projectImage:B.a,altMessage:"Weather app project image"})),r.a.createElement("div",{className:"row d-flex justify-content-around my-4"},r.a.createElement(z,{title:"Omnifood",technologies:"HTML, CSS, jQuery",codeHref:"https://github.com/david-r-frederick/omnifood-website-demo",projectHref:"https://david-r-frederick.github.io/omnifood-website-demo/",projectImage:I.a,altMessage:"Omnifood project image"}),r.a.createElement(z,{title:"Weather App",technologies:"React JS",codeHref:"https://github.com/david-r-frederick/personal-react-demos/tree/master/weather-app-demo",projectHref:"https://weather-app-3b941.web.app/current",projectImage:L.a,altMessage:"Weather app project image"})),r.a.createElement("div",{ref:this.skillsRef},r.a.createElement(b,{id:"stack",title:"STACK"})),r.a.createElement("div",{className:"container my-4"},r.a.createElement(D,null,r.a.createElement("div",{className:N.a.stackRow},r.a.createElement("div",{className:N.a.stackItem},r.a.createElement(y.e,{className:"".concat(N.a.stackIcon," ").concat(N.a.jsIcon)}),r.a.createElement("p",null,"JavaScript")),r.a.createElement("div",{className:N.a.stackItem},r.a.createElement(y.c,{className:"".concat(N.a.stackIcon," ").concat(N.a.cssIcon)}),r.a.createElement("p",null,"CSS")),r.a.createElement("div",{className:N.a.stackItem},r.a.createElement(y.f,{className:"".concat(N.a.stackIcon," ").concat(N.a.reactIcon)}),r.a.createElement("p",null,"React")),r.a.createElement("div",{className:N.a.stackItem},r.a.createElement(y.d,{className:"".concat(N.a.stackIcon," ").concat(N.a.htmlIcon)}),r.a.createElement("p",null,"HTML5")),r.a.createElement("div",{className:N.a.stackItem},r.a.createElement(y.a,{className:"".concat(N.a.stackIcon," ").concat(N.a.bootstrapIcon)}),r.a.createElement("p",null,"BootStrap"))))),r.a.createElement("div",{ref:this.educationRef},r.a.createElement(b,{id:"education",title:"EDUCATION"})),r.a.createElement("div",{className:"container my-4"},r.a.createElement(D,null,r.a.createElement("div",{className:"my-3 mx-3"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://www.lamar.edu",className:N.a.educationPrimary},"Lamar University"),r.a.createElement("p",null," Beaumont, TX"),r.a.createElement("ul",null,r.a.createElement("li",null,"B.A. in Psychology"),r.a.createElement("li",null,"Graduation Date: May 2016")))))),r.a.createElement("div",{ref:this.contactRef},r.a.createElement(b,{id:"contact",title:"CONTACT"})),r.a.createElement("div",null,r.a.createElement(H,{tooltip:"Copy Email",href:"/",linkText:"dfrederick79@gmail.com",icon:w.c,target:"/",onClick:function(e){e.preventDefault(),navigator.clipboard.writeText("dfrederick79@gmail.com"),alert("Email copied")}}),r.a.createElement(H,{tooltip:"Copy Phone Number",href:"/",linkText:"409-543-7859",icon:w.d,target:"/",onClick:function(e){e.preventDefault(),navigator.clipboard.writeText("409-543-7859"),alert("Phone number copied")}}),r.a.createElement(H,{tooltip:"View my GitHub",href:"https://github.com/david-r-frederick",linkText:"https://github.com/david-r-frederick",icon:w.a,target:"blank"}),r.a.createElement(H,{tooltip:"View my LinkedIn Profile",href:"https://www.linkedin.com/in/david-frederick-413b30ab/",linkText:"https://www.linkedin.com/in/david-frederick-413b30ab/",icon:w.b,target:"blank"}),r.a.createElement(H,{tooltip:"View my HackerRank",href:"https://www.hackerrank.com/dfrederick79?hr_r=1",linkText:"https://www.hackerrank.com/dfrederick79?hr_r=1",icon:j.a,target:"blank"}),r.a.createElement(H,{tooltip:"View my Codewars Kata",href:"https://www.codewars.com/users/d-frederick",linkText:"https://www.codewars.com/users/d-frederick",icon:y.b,target:"blank"}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=t(32);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K.a,null,r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[33,1,2]]]);
//# sourceMappingURL=main.8fc677d1.chunk.js.map