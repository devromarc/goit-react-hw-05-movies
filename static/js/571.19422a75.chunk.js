(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[571],{571:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(861),a=n(439),i=n(757),s=n.n(i),c=n(791),o=n(689),u=n(87),p=n(737),l=n(997),v={movieDetailsContainer:"MovieDetailsPage_movieDetailsContainer__-pEBL",image:"MovieDetailsPage_image__7h3fN",movieDetailsWrap:"MovieDetailsPage_movieDetailsWrap__3IYy9",movieTitle:"MovieDetailsPage_movieTitle__cP+Gv",additionalInfo:"MovieDetailsPage_additionalInfo__gII0w",divider:"MovieDetailsPage_divider__vcEHU"},f=n(7),d=n.n(f),h="Button_btn__RBtNK",m=n(184),x=function(e){var t=e.btn;return(0,m.jsx)("button",{className:h,children:t})},g=x;x.prototype={btn:d().string.isRequired};var _=function(){var e,t,n=(0,o.UO)().movieId,i=(0,c.useState)(),f=(0,a.Z)(i,2),d=f[0],h=f[1],x=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,c.useEffect)((function(){(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.TP)(n);case 3:t=e.sent,h(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[n]),d?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.rU,{to:x,children:(0,m.jsx)(g,{btn:" < Go Back"})}),(0,m.jsxs)("div",{className:v.movieDetailsContainer,children:[(0,m.jsx)("img",{className:v.image,src:d.poster_path?"https://image.tmdb.org/t/p/w500".concat(d.poster_path):"https://fakeimg.pl/600x400?text=No+Image+Available",alt:d.title}),(0,m.jsxs)("div",{className:v.movieDetailsWrap,children:[(0,m.jsx)("h1",{className:v.movieTitle,children:d.title}),(0,m.jsxs)("h4",{className:v.userScore,children:["User score: ",Math.round(10*d.vote_average),"%"]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:d.overview}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("p",{children:d.genres.map((function(e){return(0,m.jsxs)("span",{children:[" ",e.name]},e.id)}))})]})]}),(0,m.jsx)("hr",{}),(0,m.jsx)("h3",{className:v.additionalInfo,children:"Additional information"}),(0,m.jsx)(u.rU,{to:"cast",children:(0,m.jsx)(g,{btn:"Cast"})}),(0,m.jsx)(u.rU,{to:"reviews",children:(0,m.jsx)(g,{btn:"Reviews"})}),(0,m.jsx)("hr",{className:v.divider}),(0,m.jsx)(c.Suspense,{fallback:(0,m.jsx)(l.a,{}),children:(0,m.jsx)(o.j3,{})})]}):(0,m.jsx)(l.a,{})}},737:function(e,t,n){"use strict";n.d(t,{Hg:function(){return o},Jh:function(){return v},TP:function(){return p},z1:function(){return u},zv:function(){return l}});var r=n(861),a=n(757),i=n.n(a),s=n(759),c="6185b0bb605a39cc0b9b44e58909054a";s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,n){"use strict";var r=n(47);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,s){if(s!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=571.19422a75.chunk.js.map