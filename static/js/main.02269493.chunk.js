(this["webpackJsonpShujaat Azim Portfolio"]=this["webpackJsonpShujaat Azim Portfolio"]||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(3),i=n(1),s=n(0),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(a.a)(n,2),r=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://shujaatazim.github.io/",j="SA.",h="Shujaat Azim",u="Full Stack Software Engineer",b="I am an enthusiastic full stack software engineer with a background in, and passion for technology, medicine, and finance. I am a seasoned professional with a diverse background in many fields, which enables me to quickly adopt and master new technologies. I am always eager to continue learning and improving!",d="",m={linkedin:"https://www.linkedin.com/in/shujaatazim/",github:"https://github.com/ShujaatAzim"},O=[{name:"Pok\xe9book",description:"Finally! A way to track and share your Pokemon Card collection to help you with trading, selling, and showing off!",stack:["React","Rails","Javascript"],sourceCode:"https://github.com/ShujaatAzim/PokeBook-Frontend",livePreview:"https://pokebook.shujaatazim.com"},{name:"TweedleDoo",description:"Not just your simple, everyday to-do list! Create multiple lists, fill them with bite-sized tasks, and watch your productivity soar!",stack:["React","Rails","Javascript"],sourceCode:"https://github.com/ShujaatAzim/TweedleDoo-Frontend",livePreview:"https://tweedledoo.shujaatazim.com"},{name:"Projective",description:"A project management app that breaks down large projects into manageable (and deferable) pieces. Full stack app built just in Rails!",stack:["Rails","Ruby"],sourceCode:"https://github.com/ShujaatAzim/Projective",livePreview:"https://projective.shujaatazim.com"}],x=["React","Ruby on Rails","Javascript","Ruby","HTML","CSS","Redux","SASS","Material UI","Git","Jest"],p="shujaatazim@gmail.com",f=n(14),k=n.n(f),v=n(12),g=n.n(v),N=n(16),_=n.n(N),w=n(15),y=n.n(w),S=(n(26),function(){var e=Object(i.useContext)(l),t=Object(a.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(a.a)(r,2),j=o[0],h=o[1],u=function(){return h(!j)};return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,x.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,p?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(s.jsx)(g.a,{}):Object(s.jsx)(k.a,{})}),Object(s.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(s.jsx)(y.a,{}):Object(s.jsx)(_.a,{})})]})}),C=(n(32),function(){var e=o,t=j;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(S,{})]})}),z=n(10),P=n.n(z),A=n(17),R=n.n(A),E=(n(33),function(){var e=h,t=u,n=b,c=d,a=m;return Object(s.jsxs)("div",{className:"about center",children:[e&&Object(s.jsxs)("h1",{children:["Hi! My name is ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["I am a ",t,"!"]}),Object(s.jsx)("p",{className:"about__desc",children:n&&n}),Object(s.jsxs)("div",{className:"about__contact center",children:[c&&Object(s.jsx)("a",{href:c,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(s.jsxs)(s.Fragment,{children:[a.github&&Object(s.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),a.linkedin&&Object(s.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(R.a,{})})]})]})]})}),I=n(7),F=n.n(I),J=n(18),T=n.n(J),L=(n(35),function(e){var t=e.project;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(s.jsx)("li",{className:"project__stack-item",children:e},F()())}))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(P.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(T.a,{})})]})}),M=(n(36),function(){return O.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(s.jsx)(L,{project:e},F()())}))})]}):null}),B=(n(37),function(){return x.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},F()())}))})]}):null}),D=n(19),H=n.n(D),q=(n(38),function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top",children:Object(s.jsx)(H.a,{fontSize:"large"})})}):null}),G=(n(39),function(){return p?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(p),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(n(40),function(){return Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/ShujaatAzim",className:"link footer__link",children:"Created By Shujaat Azim"})})}),Y=(n(41),function(){var e=Object(i.useContext)(l),t=Object(a.a)(e,1)[0].themeName;return Object(s.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(s.jsx)(C,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(E,{}),Object(s.jsx)(M,{}),Object(s.jsx)(B,{}),Object(s.jsx)(G,{})]}),Object(s.jsx)(q,{}),Object(s.jsx)(U,{})]})});n(42);Object(c.render)(Object(s.jsx)(r,{children:Object(s.jsx)(Y,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.02269493.chunk.js.map