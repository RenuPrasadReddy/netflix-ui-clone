(this["webpackJsonpreact-netflix-clone"]=this["webpackJsonpreact-netflix-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(18),o=n.n(c),i=(n(28),n(29),n(4)),s=n.n(i),r=n(6),l=n(5),u=n(19),d=n(22),v=n.n(d),h=n(23),p=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3"}),b=(n(69),n(0)),m={height:"390",width:"100%",playerVars:{autoplay:1}},g=function(e){var t=e.title,n=e.fetchUrl,c=Object(a.useState)([]),o=Object(l.a)(c,2),i=o[0],d=o[1],h=Object(a.useState)(""),g=Object(l.a)(h,2),j=g[0],f=g[1];Object(a.useEffect)((function(){function e(){return(e=Object(r.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(n);case 2:a=e.sent,console.log(t,a.data.results),d(a.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h2",{className:"row_title",children:t}),Object(b.jsx)("div",{className:"row_posters",children:i.map((function(t){return Object(b.jsx)("img",{className:"row_poster ".concat(e.isLargeRow&&"row_posterLarge"),onClick:function(){return function(e){j?f(""):(console.log("m name=",null===e||void 0===e?void 0:e.name),v()((null===e||void 0===e?void 0:e.name.replaceAll(" ",""))||"").then((function(e){var t=new URLSearchParams(new URL(e).search);console.log("v=",t.get("v")),f(t.get("v"))})).catch((function(e){return console.log("error while getting url",e)})))}(t)},src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.isLargeRow?t.poster_path:t.backdrop_path),alt:t.name},t.id)}))}),j&&Object(b.jsx)(u.a,{videoId:j,opts:m})]})},j="",f={fetchNetflixOriginals:"/discover/tv?api_key=".concat(j,"&with_network=123"),fetchTrending:"/trending/all/week?api_key=".concat(j,"&language=en-US"),fetchTopRated:"/movie/top_rated?api_key=".concat(j,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(j,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(j,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(j,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(j,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(j,"&with_genres=99")},_=f,O=["NETFLIX ORIGINALS","Trending","Top Rated","Action Movies","Comedy Movies","Horror Movies","Romance Movies","Documentaries"],x=Object.values(f),w=(n(71),function(){var e,t,n=Object(a.useState)(),c=Object(l.a)(n,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){function e(){return(e=Object(r.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(_.fetchNetflixOriginals);case 2:t=e.sent,console.log({response:t}),n=Math.ceil(Math.random()*t.data.results.length-1),i(t.data.results[n]);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original/").concat(null===o||void 0===o?void 0:o.backdrop_path,")")},children:[Object(b.jsxs)("div",{className:"banner_contents",children:[Object(b.jsx)("h1",{className:"banner_title",children:(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)}),Object(b.jsxs)("div",{className:"banner_buttons",children:[Object(b.jsx)("button",{className:"banner_button",children:"Play"}),Object(b.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(b.jsx)("h1",{className:"banner_description",children:(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(b.jsx)("div",{className:"banner_fadeBottom"})]})}),N=(n(72),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0];t[1];return Object(b.jsxs)("div",{className:"nav ".concat(n&&"nav_black"),children:[console.log("show=",n),Object(b.jsx)("img",{className:"nav_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png",alt:"Netflix_logo"}),Object(b.jsx)("img",{className:"nav_avatar",src:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png",alt:"Netflix Logo"})]})});var k=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(N,{}),Object(b.jsx)(w,{}),O.map((function(e,t){return Object(b.jsx)(g,{title:e,fetchUrl:x[t],isLargeRow:"NETFLIX ORIGINALS"===e},e)}))]})};o.a.render(Object(b.jsx)(k,{}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.089df918.chunk.js.map