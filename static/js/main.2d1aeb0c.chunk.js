(this["webpackJsonpmovie-hopper-frontend"]=this["webpackJsonpmovie-hopper-frontend"]||[]).push([[0],{56:function(e,a,t){e.exports=t.p+"static/media/loader-large.2151e713.png"},68:function(e,a,t){e.exports=t(98)},73:function(e,a,t){},74:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(16),l=t.n(o),i=(t(73),t(62)),c=t(5),s=(t(74),t(100)),m=function(){return r.a.createElement("a",{className:"h1-link",href:"#/"},r.a.createElement(s.a,{className:"header"},r.a.createElement("h1",{id:"main-heading",className:"header-h1","aria-label":"Movie Hopper App - Find Movies in Common!"},"Movie Hopper")))},u=t(13),v=t(18),p=t(19),d=t(21),f=t(20),E=t(101),h=t(66),b=t(56),y=t.n(b),O=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){return Object(v.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader","aria-label":"Loading..."},r.a.createElement("img",{alt:"Loading",src:y.a}))}}]),t}(n.Component),g=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){return Object(v.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.handleMount()}},{key:"render",value:function(){var e=this.props,a=e.movieGoersList,t=e.handleSelect,o=e.selectedIds;return a.length>0?r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"moviegoers-list-title","aria-label":"Moviegoers List"},"Movie Goers"),r.a.createElement(E.a,{className:"p-0 moviegoers-list"},a.map((function(e,a){return r.a.createElement(h.a,{className:"moviegoer-card",active:-1!==o.indexOf(e.id),key:a,onClick:function(){return t(e.id)},"aria-label":e.name},e.name)})))):r.a.createElement(O,null)}}]),t}(n.Component),M=t(60),N=t.n(M).a.create({baseURL:"https://hopper.developme.space/api/",headers:{Accept:"application/json"}}),j=function(e){return{type:"SET_MOVIES",movies:e}},k=function(e,a){return e.frequency<a.frequency?1:-1},L=Object(u.b)((function(e){var a=e.selectedMovieGoer.length>0?e.selectedMovieGoer.map((function(e){return e.id})):"";return{movieGoersList:e.movieGoersList,selectedIds:a}}),(function(e){return{handleMount:function(){return e((function(e){N.get("/people").then((function(a){var t=a.data;e(function(e){return{type:"SET_PEOPLE",data:e}}(t.data))}))}))},handleSelect:function(a){return e(function(e){return function(a,t){a(function(e){return{type:"SELECT_MOVIEGOER",id:e}}(e));var n=t().selectedMovieGoer.map((function(e){return e.id}));1===n.length?N.get("/people/".concat(e)).then((function(e){var t=e.data.data.movies.map((function(e){return{frequency:1,movie:e}}));a(j(t.sort(k)))})):n.length>1&&N.get("/people/match?people=".concat(n.join(","))).then((function(e){var t=e.data;a(j(t.data.filter((function(e){return e.frequency>1})).sort(k)))}))}}(a))}}}))(g),S=function(){return r.a.createElement("p",{className:"footer","aria-label":"Copyright statement"},"Copyright \xa9 2020 Nik Osvalds, Kieran Cott, Henry Macfarlane, Richard Stibbard")},w=t(8),C=t(28),G=t(17),A=function(e){var a=e.movieFrequency,t=e.numPeopleSelected;return 1===t?null:t===a?r.a.createElement(w.a.Header,{className:"movie-card-header","aria-label":a},"You ",2===t?"both":"all"," like this movie!"):r.a.createElement(w.a.Header,{className:"movie-card-header","aria-label":a},a," people like this movie!")},_=function(e){var a=e.movies,t=e.numPeopleSelected;return a.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"movies-title","aria-label":"Movies"},"Movies"),r.a.createElement(C.a,{className:"movies-list","aria-label":"Movies List"},a.map((function(e,a){return 1!==t&&1===e.frequency?null:r.a.createElement(w.a,{key:a,className:"movie-card"},r.a.createElement(A,{numPeopleSelected:t,movieFrequency:e.frequency}),r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,{"aria-label":e.movie.name},e.movie.name)),r.a.createElement(w.a.Footer,{"aria-label":e.movie.year},e.movie.year))})))):r.a.createElement(G.a,{variant:"primary",className:"instructions","aria-label":"Select a person to see their favourite movies. Select multiple people to see movies they have in common!"},r.a.createElement(r.a.Fragment,null,t>1?"You don't have any movies in common!":"Select a person to see their favourite movies."),r.a.createElement("br",null),r.a.createElement(r.a.Fragment,null,t<1?"Select multiple people to see movies they have in common!":null))},q=Object(u.b)((function(e){return{movies:e.movies,numPeopleSelected:e.selectedMovieGoer.length}}))(_),F=function(e){var a=e.handleReset;return r.a.createElement("div",{className:"search-button-container"},r.a.createElement("button",{className:"search-button btn btn-dark",onClick:a,"aria-label":"Click to clear selection"},"Clear Selection"))},R=Object(u.b)("",(function(e){return{handleReset:function(){return e({type:"CLEAR_ALL"})}}}))(F),x=t(38),I=t(36),P=t(39),T=function(){return r.a.createElement("section",{className:"container mt-4 p-4 big-buttons-container"},r.a.createElement("a",{href:"#/movies",className:"m-4"},r.a.createElement(x.a,{id:"movies-btn","aria-label":"start with films",className:"p-2",variant:"primary",size:"lg",block:!0},r.a.createElement("span",{class:"hover-hide"},r.a.createElement(I.a,{icon:P.a,size:"6x","aria-label":"film reel icon"})))),r.a.createElement("a",{href:"#/people",className:"m-4"},r.a.createElement(x.a,{id:"people-btn","aria-label":"start with people",className:"p-2",variant:"secondary",size:"lg",block:!0},r.a.createElement("span",{class:"hover-hide"},r.a.createElement(I.a,{icon:P.b,size:"6x","aria-label":"people icon"})))))},H=function(e){Object(d.a)(t,e);var a=Object(f.a)(t);function t(){return Object(v.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.handleMount()}},{key:"render",value:function(){var e=this.props.movies;return e.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"movies-title","aria-label":"Movies"},"Movies"),r.a.createElement(C.a,{className:"movies-list","aria-label":"Movies List"},e.map((function(e,a){return r.a.createElement(w.a,{key:a,className:"movie-card"},r.a.createElement(w.a.Header,{className:"movie-card-header","aria-label":e.frequency},(1===e.frequency?"1 person likes":"".concat(e.frequency," people like"))+" this movie!"),r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Title,{"aria-label":e.movie.name},e.movie.name)),r.a.createElement(w.a.Footer,{"aria-label":e.movie.year},e.movie.year))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(G.a,{variant:"primary",className:"instructions","aria-label":"No favourite movies yet!"},"No favourite movies yet!"))}}]),t}(n.Component),D=Object(u.b)((function(e){return{movies:e.movies}}),(function(e){return{handleMount:function(){return e((function(e){N.get("/movies").then((function(a){var t=a.data;e(j(t.sort(k)))}))}))}}}))(H),V=function(){return r.a.createElement("section",{className:"container"},r.a.createElement(G.a,{className:"container m-4 text-center",variant:"danger"},"Page not found! Head ",r.a.createElement(G.a.Link,{href:"/"},"home")," to start over."))};var z=function(){return r.a.createElement(i.a,null,r.a.createElement(m,null),r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"},r.a.createElement(T,null)),r.a.createElement(c.a,{exact:!0,path:"/people"},r.a.createElement(L,null),r.a.createElement(R,null),r.a.createElement(q,null)),r.a.createElement(c.a,{exact:!0,path:"/movies"},r.a.createElement(D,null)),r.a.createElement(V,null)),r.a.createElement(S,null))},B=t(22),U={selectedMovieGoer:[],movieGoersList:[],movies:[],loaded:!1},J=t(15),X=t(64),Y=function(e,a){switch(a.type){case"SET_PEOPLE":return function(e,a){return Object(J.a)(Object(J.a)({},e),{},{movieGoersList:a.data})}(e,a);case"SELECT_MOVIEGOER":return function(e,a){var t=Object(X.a)(e.selectedMovieGoer),n=t.findIndex((function(e){return a.id===e.id}));if(-1!==n)t.splice(n,1);else{var r=e.movieGoersList.find((function(e){return e.id===a.id}));t.push(r)}return Object(J.a)(Object(J.a)({},e),{},{selectedMovieGoer:t})}(e,a);case"SET_MOVIES":return function(e,a){return Object(J.a)(Object(J.a)({},e),{},{movies:a.movies})}(e,a);case"CLEAR_ALL":return Object(J.a)(Object(J.a)({},e),{},{selectedMovieGoer:[],movies:[]});default:return e}},K=t(63),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.c,W=Object(B.d)(Y,U,Q(Object(B.a)(K.a)));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:W},r.a.createElement(z,null))),document.getElementById("root")),function(e,a){var t=[],n=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"].join(",");e.addEventListener("keydown",(function(e){t.push(e.key),(t=t.slice(-10)).join(",")===n&&c(0)}));var r=0,o=0,l=e.body,i=e.getElementById("main-heading"),c=function e(a){var t=a-o;o=a,r+=t/5e3*360,l.style.backgroundColor="hsl(".concat(r,", 50%, 50%)"),Math.floor(r)%2?i.style.color="white":i.style.color="black",requestAnimationFrame(e)}}(document,window)}},[[68,1,2]]]);
//# sourceMappingURL=main.2d1aeb0c.chunk.js.map