"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{449:function(e,n,t){t.d(n,{SB:function(){return s},Vs:function(){return i},bI:function(){return a},fS:function(){return c},ge:function(){return o}});var r=t(41),o=function(){return fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},c=function(e){return fetch("".concat(r.b.request).concat(e,"?language=en-US"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},i=function(e){return fetch("".concat(r.b.request).concat(e,"/credits"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},s=function(e){return fetch("".concat(r.b.request).concat(e,"/reviews"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},a=function(e){return fetch("".concat(r.b.searchMovie,"?query=").concat(e,"&include_adult=false&language=en-US&page=1"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))}},41:function(e,n,t){t.d(n,{Y:function(){return o},b:function(){return r}});var r={request:"https://api.themoviedb.org/3/movie/",key:"b95b13270f44be3e23d3c62e0852c09c",token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTViMTMyNzBmNDRiZTNlMjNkM2M2MmUwODUyYzA5YyIsInN1YiI6IjY1OTQzYTZkMDI4ZjE0NzY5NGM3MjJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cmSUhygmIIjUC6Ea5HsTcu7XR4RoGg8-6MjFJfqrV7k",getImage:"https://image.tmdb.org/t/p/w500",searchMovie:"https://api.themoviedb.org/3/search/movie"},o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat(r.token)}}},936:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(439),o=t(791),c=t(689),i=t(87),s=t(637),a=t(449),u="Home_main__3ilkD",h="Home_title__L087v",m="Home_trendingList__9nInU",f="Home_trendingItem__JEDPS",l="Home_link__2zIq5",g="Home_error__42g6p",d=t(184),j=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],j=n[1],p=(0,o.useState)("idle"),_=(0,r.Z)(p,2),w=_[0],k=_[1],v=(0,o.useState)(""),I=(0,r.Z)(v,2),b=I[0],N=I[1],y=(0,c.TH)();return(0,o.useEffect)((function(){k("pending"),(0,a.ge)().then((function(e){var n=e.results;j(n),k("resolved")})).catch((function(e){k("error"),N(e.message)}))}),[]),(0,d.jsxs)(d.Fragment,{children:["pending"===w&&(0,d.jsx)(s.Z,{}),"resolved"===w&&(0,d.jsxs)("main",{className:u,children:[(0,d.jsx)("h1",{className:h,children:"Trending today"}),(0,d.jsx)("ul",{className:m,children:t.map((function(e){var n=e.id,t=e.title,r=e.name;return(0,d.jsx)("li",{className:f,children:(0,d.jsx)(i.OL,{className:l,to:"movies/".concat(n),state:{from:y},children:null!==t&&void 0!==t?t:r})},n)}))})]}),"error"===w&&(0,d.jsx)("h1",{className:g,children:b})]})}}}]);
//# sourceMappingURL=936.9bcbba85.chunk.js.map