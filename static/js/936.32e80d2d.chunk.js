"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{489:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(87),o="Movies_list__60yww",c="Movies_item__JuFo4",i="Movies_link__AT-t+",s=t(184),a=function(e){var n=e.movies,t=e.location;return(0,s.jsx)("ul",{className:o,children:n.map((function(e){var n=e.id,o=e.title,a=e.name;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(r.OL,{className:i,to:"/movies/".concat(n),state:{from:t},children:null!==o&&void 0!==o?o:a})},n)}))})}},449:function(e,n,t){t.d(n,{SB:function(){return s},Vs:function(){return i},bI:function(){return a},fS:function(){return c},ge:function(){return o}});var r=t(41),o=function(){return fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},c=function(e){return fetch("".concat(r.b.request).concat(e,"?language=en-US"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},i=function(e){return fetch("".concat(r.b.request).concat(e,"/credits"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},s=function(e){return fetch("".concat(r.b.request).concat(e,"/reviews"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},a=function(e){return fetch("".concat(r.b.searchMovie,"?query=").concat(e,"&include_adult=false&language=en-US&page=1"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))}},41:function(e,n,t){t.d(n,{Y:function(){return o},b:function(){return r}});var r={request:"https://api.themoviedb.org/3/movie/",key:"b95b13270f44be3e23d3c62e0852c09c",token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTViMTMyNzBmNDRiZTNlMjNkM2M2MmUwODUyYzA5YyIsInN1YiI6IjY1OTQzYTZkMDI4ZjE0NzY5NGM3MjJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cmSUhygmIIjUC6Ea5HsTcu7XR4RoGg8-6MjFJfqrV7k",getImage:"https://image.tmdb.org/t/p/w500",searchMovie:"https://api.themoviedb.org/3/search/movie"},o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat(r.token)}}},936:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(439),o=t(791),c=t(689),i=t(489),s=t(637),a=t(449),u="Home_main__3ilkD",h="Home_title__L087v",m="Home_error__42g6p",f=t(184),l=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],l=n[1],d=(0,o.useState)("idle"),g=(0,r.Z)(d,2),j=g[0],p=g[1],v=(0,o.useState)(""),w=(0,r.Z)(v,2),_=w[0],k=w[1],b=(0,c.TH)();return(0,o.useEffect)((function(){p("pending"),(0,a.ge)().then((function(e){var n=e.results;l(n),p("resolved")})).catch((function(e){p("error"),k(e.message)}))}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("main",{className:u,children:[(0,f.jsx)("h1",{className:h,children:"Trending today"}),"pending"===j&&(0,f.jsx)(s.Z,{}),"resolved"===j&&(0,f.jsx)(i.Z,{movies:t,location:b}),"error"===j&&(0,f.jsx)("h1",{className:m,children:_})]})})}}}]);
//# sourceMappingURL=936.32e80d2d.chunk.js.map