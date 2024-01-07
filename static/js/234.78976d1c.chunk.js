"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[234],{234:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(439),o=t(791),i=t(689),s=t(449),c=t(637),u={reviewsList:"Reviews_reviewsList__hDAQA",reviewsListItem:"Reviews_reviewsListItem__FIdwO",author:"Reviews_author__CqYAZ",notFound:"Reviews_notFound__FzYY5",error:"Reviews_error__urRRw"},a=t(184),h=function(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),t=n[0],h=n[1],f=(0,o.useState)("idle"),m=(0,r.Z)(f,2),d=m[0],l=m[1],w=(0,o.useState)(""),g=(0,r.Z)(w,2),v=g[0],j=g[1],p=(0,i.UO)().movieId;return(0,o.useEffect)((function(){l("pending"),(0,s.SB)(p).then((function(e){var n=e.results.map((function(e){return{author:e.author,content:e.content,id:e.id}}));h(n),l("resolved")})).catch((function(e){l("error"),j(e.message)}))}),[p]),(0,a.jsxs)(a.Fragment,{children:["pending"===d&&(0,a.jsx)(c.Z,{}),"error"===d&&(0,a.jsx)("h1",{className:u.error,children:v}),"resolved"===d&&(0,a.jsx)("section",{className:u.sectionReviews,children:(0,a.jsx)("ul",{className:u.reviewsList,children:t.length>0?t.map((function(e){var n=e.author,t=e.content,r=e.id;return(0,a.jsxs)("li",{className:u.reviewsListItem,children:[(0,a.jsxs)("p",{className:u.author,children:["Author: ",n]}),(0,a.jsx)("p",{className:u.content,children:t})]},r)})):(0,a.jsx)("li",{className:u.notFound,children:"We don`t have any reviews for this movie"})})})]})}},449:function(e,n,t){t.d(n,{SB:function(){return c},Vs:function(){return s},bI:function(){return u},fS:function(){return i},ge:function(){return o}});var r=t(41),o=function(){return fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},i=function(e){return fetch("".concat(r.b.request).concat(e,"?language=en-US"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},s=function(e){return fetch("".concat(r.b.request).concat(e,"/credits"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},c=function(e){return fetch("".concat(r.b.request).concat(e,"/reviews"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))},u=function(e){return fetch("".concat(r.b.searchMovie,"?query=").concat(e,"&include_adult=false&language=en-US&page=1"),r.Y).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops, something went wrong"))}))}},41:function(e,n,t){t.d(n,{Y:function(){return o},b:function(){return r}});var r={request:"https://api.themoviedb.org/3/movie/",key:"b95b13270f44be3e23d3c62e0852c09c",token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTViMTMyNzBmNDRiZTNlMjNkM2M2MmUwODUyYzA5YyIsInN1YiI6IjY1OTQzYTZkMDI4ZjE0NzY5NGM3MjJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cmSUhygmIIjUC6Ea5HsTcu7XR4RoGg8-6MjFJfqrV7k",getImage:"https://image.tmdb.org/t/p/w500",searchMovie:"https://api.themoviedb.org/3/search/movie"},o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat(r.token)}}}}]);
//# sourceMappingURL=234.78976d1c.chunk.js.map