(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[39],{1594:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s(93),r=s(481),i=s(133),n=s(764),l=s(33),o=s(5),j=s.n(o),d=s(808),b=s(12),h=s(129),x=s(479),u=s(485),O=s.n(u),m=s(687),p=s(9),f=["icon","color","stats","statTitle","series","options","type","height"],g=function(e){var t=e.icon,s=e.color,a=e.stats,r=e.statTitle,i=e.series,n=e.options,l=e.type,o=e.height,j=Object(h.a)(e,f);return Object(p.jsxs)(c.l,Object(b.a)(Object(b.a)({},j),{},{children:[Object(p.jsxs)(c.p,{className:"align-items-start pb-0",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{className:"fw-bolder",children:a}),Object(p.jsx)(c.u,{children:r})]}),Object(p.jsx)(x.a,{className:"avatar-stats p-50 m-0",color:"light-".concat(s),icon:t})]}),Object(p.jsx)(O.a,{options:n,series:i,type:l,height:o||100})]}))},w=g;g.defaultProps={options:m.b,color:"primary"};var y=function(e){var t=e.warning,s=Object(a.useState)(null),c=Object(l.a)(s,2),r=c[0],i=c[1];Object(a.useEffect)((function(){j.a.get("/card/card-statistics/newsletter").then((function(e){return i(e.data)}))}),[]);var n={chart:{id:"newsletter",toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:[t],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#ffc085"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return null!==r?Object(p.jsx)(w,{icon:Object(p.jsx)(d.a,{size:21}),color:"warning",stats:"28.7k",statTitle:"Newsletter",series:r.series,type:"line",options:n}):null},v=s(896),N=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){j.a.get("/card/card-statistics/site-traffic").then((function(e){return c(e.data)}))}),[]),null!==s?Object(p.jsx)(w,{icon:Object(p.jsx)(v.a,{size:21}),color:"primary",stats:"78.9k",statTitle:"Site Traffic",series:s.series,type:"line"}):null},k=s(937),T=function(e){var t=e.success,s=Object(a.useState)(null),c=Object(l.a)(s,2),r=c[0],i=c[1];Object(a.useEffect)((function(){j.a.get("/card/card-statistics/active-users").then((function(e){return i(e.data)}))}),[]);var n={chart:{id:"activeUsers",toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:[t],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#55DD92"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return null!==r?Object(p.jsx)(w,{icon:Object(p.jsx)(k.a,{size:21}),color:"success",stats:"659.8k",statTitle:"Active Users",series:r.series,options:n,type:"line"}):null},B=s(806),z=s(604),C=function(e){var t=e.danger,s=Object(a.useState)(null),c=Object(l.a)(s,2),r=c[0],i=c[1],n={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[t],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(a.useEffect)((function(){j.a.get("/card/card-statistics/sales").then((function(e){return i(e.data)}))}),[]),null!==r?Object(p.jsx)(z.a,{icon:Object(p.jsx)(B.a,{size:21}),color:"danger",stats:r.analyticsData.sales,statTitle:"Quarterly Sales",options:n,series:r.series,type:"area"}):null},S=s(759),F=s(767),E=s(769),I=s(811),P=function(e){var t=e.kFormatter,s=e.success,c=Object(a.useState)(null),r=Object(l.a)(c,2),i=r[0],n=r[1],o={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[s],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(a.useEffect)((function(){j.a.get("/card/card-statistics/revenue").then((function(e){return n(e.data)}))}),[]),null!==i?Object(p.jsx)(z.a,{icon:Object(p.jsx)(I.a,{size:21}),color:"success",stats:t(i.analyticsData.revenue),statTitle:"Revenue Generated",options:o,series:i.series,type:"area"}):null},D=s(477),L=s(760),R=function(e){var t=e.icon,s=e.color,a=e.stats,r=e.statTitle,i=e.className;return Object(p.jsx)(c.l,{className:"text-center",children:Object(p.jsxs)(c.m,{className:i,children:[Object(p.jsx)("div",{className:"avatar p-50 m-0 mb-1 ".concat(s?"bg-light-".concat(s):"bg-light-primary"),children:Object(p.jsx)("div",{className:"avatar-content",children:t})}),Object(p.jsx)("h2",{className:"fw-bolder",children:a}),Object(p.jsx)("p",{className:"card-text line-ellipsis",children:r})]})})},A=s(711),U=s(866),G=s(810),J=s(918),M=s(803),W=s(826),H=s(933),Q=s(855),V=s(914),$=s(816),q=s(817);t.default=function(){var e=Object(a.useContext)(i.a);return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(D.a,{breadCrumbTitle:"Statistics Cards",breadCrumbParent:"Card",breadCrumbActive:"Statistics Cards"}),Object(p.jsxs)(c.ib,{children:[Object(p.jsx)(c.B,{lg:"2",xs:"6",children:Object(p.jsx)(F.a,{warning:e.colors.warning.main})}),Object(p.jsx)(c.B,{lg:"2",xs:"6",children:Object(p.jsx)(E.a,{info:e.colors.info.main})}),Object(p.jsx)(c.B,{lg:"8",sm:"12",children:Object(p.jsx)(n.a,{cols:{md:"3",sm:"6",xs:"12"}})})]}),Object(p.jsxs)(c.ib,{children:[Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(R,{icon:Object(p.jsx)(U.a,{size:21}),color:"info",stats:"36.9k",statTitle:"Views"})}),Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(R,{icon:Object(p.jsx)(G.a,{size:21}),color:"warning",stats:"12k",statTitle:"Comments"})}),Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(R,{icon:Object(p.jsx)(J.a,{size:21}),color:"danger",stats:"97.8k",statTitle:"Orders"})}),Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(R,{icon:Object(p.jsx)(M.a,{size:21}),color:"primary",stats:"26.8",statTitle:"Bookmarks"})}),Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(R,{icon:Object(p.jsx)(W.a,{size:21}),color:"success",stats:"689",statTitle:"Reviews"})}),Object(p.jsx)(c.B,{xl:"2",md:"4",sm:"6",children:Object(p.jsx)(R,{icon:Object(p.jsx)(H.a,{size:21}),color:"danger",stats:"2.1k",statTitle:"Returns"})})]}),Object(p.jsxs)(c.ib,{children:[Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(A.a,{icon:Object(p.jsx)(Q.a,{size:21}),color:"primary",stats:"86%",statTitle:"CPU Usage"})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(A.a,{icon:Object(p.jsx)(V.a,{size:21}),color:"success",stats:"1.2gb",statTitle:"Memory Usage"})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(A.a,{icon:Object(p.jsx)($.a,{size:21}),color:"danger",stats:"0.1%",statTitle:"Downtime Ratio"})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(A.a,{icon:Object(p.jsx)(q.a,{size:21}),color:"warning",stats:"13",statTitle:"Issues Found"})})]}),Object(p.jsxs)(c.ib,{children:[Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(L.a,{kFormatter:r.g})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(P,{kFormatter:r.g,success:e.colors.success.main})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(C,{danger:e.colors.danger.main})}),Object(p.jsx)(c.B,{lg:"3",sm:"6",children:Object(p.jsx)(S.a,{kFormatter:r.g,warning:e.colors.warning.main})})]}),Object(p.jsxs)(c.ib,{children:[Object(p.jsx)(c.B,{lg:"4",sm:"6",children:Object(p.jsx)(N,{})}),Object(p.jsx)(c.B,{lg:"4",sm:"6",children:Object(p.jsx)(T,{success:e.colors.success.main})}),Object(p.jsx)(c.B,{lg:"4",sm:"6",children:Object(p.jsx)(y,{warning:e.colors.warning.main})})]})]})}},477:function(e,t,s){"use strict";var a=s(478),c=s(876),r=s(809),i=s(810),n=s(808),l=s(834),o=s(93),j=s(9);t.a=function(e){var t=e.breadCrumbTitle,s=e.breadCrumbParent,d=e.breadCrumbParent2,b=e.breadCrumbParent3,h=e.breadCrumbActive;return Object(j.jsxs)("div",{className:"content-header row",children:[Object(j.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(j.jsx)("div",{className:"row breadcrumbs-top",children:Object(j.jsxs)("div",{className:"col-12",children:[t?Object(j.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(j.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(j.jsxs)(o.g,{children:[Object(j.jsx)(o.h,{tag:"li",children:Object(j.jsx)(a.b,{to:"/",children:"Home"})}),Object(j.jsx)(o.h,{tag:"li",className:"text-primary",children:s}),d?Object(j.jsx)(o.h,{tag:"li",className:"text-primary",children:d}):"",b?Object(j.jsx)(o.h,{tag:"li",className:"text-primary",children:b}):"",Object(j.jsx)(o.h,{tag:"li",active:!0,children:h})]})})]})})}),Object(j.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(j.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(j.jsxs)(o.tb,{children:[Object(j.jsx)(o.G,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(j.jsx)(c.a,{size:14})}),Object(j.jsxs)(o.F,{tag:"ul",end:!0,children:[Object(j.jsxs)(o.E,{tag:a.b,to:"/apps/todo",children:[Object(j.jsx)(r.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(j.jsxs)(o.E,{tag:a.b,to:"/apps/chat",children:[Object(j.jsx)(i.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(j.jsxs)(o.E,{tag:a.b,to:"/apps/email",children:[Object(j.jsx)(n.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(j.jsxs)(o.E,{tag:a.b,to:"/apps/calendar",children:[Object(j.jsx)(l.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},604:function(e,t,s){"use strict";var a=s(12),c=s(16),r=s(129),i=s(479),n=s(2),l=s.n(n),o=s(485),j=s.n(o),d=s(93),b=s(687),h=s(9),x=["icon","color","stats","statTitle","series","options","type","height","className"],u=function(e){var t=e.icon,s=e.color,n=e.stats,o=e.statTitle,b=e.series,u=e.options,O=e.type,m=e.height,p=e.className,f=Object(r.a)(e,x);return Object(h.jsxs)(d.l,Object(a.a)(Object(a.a)({},f),{},{children:[Object(h.jsxs)(d.m,{className:l()("pb-0",Object(c.a)({},p,p)),children:[Object(h.jsx)(i.a,{className:"avatar-stats p-50 m-0",color:"light-".concat(s),icon:t}),Object(h.jsx)("h2",{className:"fw-bolder mt-1",children:n}),Object(h.jsx)("p",{className:"card-text",children:o})]}),Object(h.jsx)(j.a,{options:u,series:b,type:O,height:m||100})]}))};t.a=u,u.defaultProps={color:"primary",options:b.a}},658:function(e,t,s){"use strict";var a=s(485),c=s.n(a),r=s(93),i=s(9),n=function(e){var t=e.title,s=e.stats,a=e.options,n=e.series,l=e.type,o=e.height;return Object(i.jsx)(r.l,{className:"card-tiny-line-stats",children:Object(i.jsxs)(r.m,{className:"pb-50",children:[Object(i.jsx)("h6",{children:t}),Object(i.jsx)("h2",{className:"fw-bolder mb-1",children:s}),Object(i.jsx)(c.a,{options:a,series:n,type:l,height:o})]})})};t.a=n,n.defaultProps={height:100}},687:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return c}));var a={chart:{toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},c={chart:{toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#A9A2F6"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}}},711:function(e,t,s){"use strict";var a=s(16),c=s(2),r=s.n(c),i=s(93),n=s(9);t.a=function(e){var t=e.icon,s=e.color,c=e.stats,l=e.renderStats,o=e.statTitle,j=e.className,d=e.statsMargin;return Object(n.jsx)(i.l,{children:Object(n.jsx)(i.m,{className:j,children:Object(n.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(n.jsxs)("div",{children:[l||Object(n.jsx)("h2",{className:r()("fw-bolder",Object(a.a)({"mb-0":!d},d,d)),children:c}),Object(n.jsx)("p",{className:"card-text",children:o})]}),Object(n.jsx)("div",{className:"avatar avatar-stats p-50 m-0 ".concat(s?"bg-light-".concat(s):"bg-light-primary"),children:Object(n.jsx)("div",{className:"avatar-content",children:t})})]})})})}},759:function(e,t,s){"use strict";var a=s(33),c=s(1),r=s(5),i=s.n(r),n=s(900),l=s(604),o=s(9);t.a=function(e){var t=e.kFormatter,s=e.warning,r=Object(c.useState)(null),j=Object(a.a)(r,2),d=j[0],b=j[1],h={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[s],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(c.useEffect)((function(){return i.a.get("/card/card-statistics/orders").then((function(e){return b(e.data)})),function(){return b(null)}}),[]),null!==d?Object(o.jsx)(l.a,{icon:Object(o.jsx)(n.a,{size:21}),color:"warning",stats:t(d.analyticsData.orders),statTitle:"Orders Received",options:h,series:d.series,type:"area"}):null}},760:function(e,t,s){"use strict";var a=s(33),c=s(1),r=s(5),i=s.n(r),n=s(940),l=s(604),o=s(9);t.a=function(e){var t=e.kFormatter,s=Object(c.useState)(null),r=Object(a.a)(s,2),j=r[0],d=r[1];return Object(c.useEffect)((function(){return i.a.get("/card/card-statistics/subscribers").then((function(e){return d(e.data)})),function(){return d(null)}}),[]),null!==j?Object(o.jsx)(l.a,{icon:Object(o.jsx)(n.a,{size:21}),color:"primary",stats:t(j.analyticsData.subscribers),statTitle:"Subscribers Gained",series:j.series,type:"area"}):null}},764:function(e,t,s){"use strict";var a=s(12),c=s(16),r=s(2),i=s.n(r),n=s(932),l=s(807),o=s(832),j=s(858),d=s(479),b=s(93),h=s(9);t.a=function(e){var t=e.cols,s=[{title:"230k",subtitle:"Sales",color:"light-primary",icon:Object(h.jsx)(n.a,{size:24})},{title:"8.549k",subtitle:"Customers",color:"light-info",icon:Object(h.jsx)(l.a,{size:24})},{title:"1.423k",subtitle:"Products",color:"light-danger",icon:Object(h.jsx)(o.a,{size:24})},{title:"$9745",subtitle:"Revenue",color:"light-success",icon:Object(h.jsx)(j.a,{size:24})}];return Object(h.jsxs)(b.l,{className:"card-statistics",children:[Object(h.jsxs)(b.p,{children:[Object(h.jsx)(b.v,{tag:"h4",children:"Statistics"}),Object(h.jsx)(b.u,{className:"card-text font-small-2 me-25 mb-0",children:"Updated 1 month ago"})]}),Object(h.jsx)(b.m,{className:"statistics-body",children:Object(h.jsx)(b.ib,{children:s.map((function(e,r){var n=Object.keys(t),l=2===r?"sm":n[0];return Object(h.jsx)(b.B,Object(a.a)(Object(a.a)({},t),{},{className:i()(Object(c.a)({},"mb-2 mb-".concat(l,"-0"),r!==s.length-1)),children:Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)(d.a,{color:e.color,icon:e.icon,className:"me-2"}),Object(h.jsxs)("div",{className:"my-auto",children:[Object(h.jsx)("h4",{className:"fw-bolder mb-0",children:e.title}),Object(h.jsx)(b.u,{className:"font-small-3 mb-0",children:e.subtitle})]})]})}),r)}))})})]})}},767:function(e,t,s){"use strict";var a=s(33),c=s(1),r=s(5),i=s.n(r),n=s(658),l=s(9);t.a=function(e){var t=e.warning,s=Object(c.useState)(null),r=Object(a.a)(s,2),o=r[0],j=r[1];Object(c.useEffect)((function(){return i.a.get("/card/card-statistics/orders-bar-chart").then((function(e){return j(e.data)})),function(){return j(null)}}),[]);var d={chart:{stacked:!0,toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0,top:-15,bottom:-15}},plotOptions:{bar:{horizontal:!1,columnWidth:"20%",borderRadius:[0,5],colors:{backgroundBarColors:["#f3f3f3","#f3f3f3","#f3f3f3","#f3f3f3","#f3f3f3"],backgroundBarRadius:5}}},legend:{show:!1},dataLabels:{enabled:!1},colors:[t],xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}};return null!==o?Object(l.jsx)(n.a,{height:70,type:"bar",options:d,title:o.title,stats:o.statistics,series:o.series}):null}},769:function(e,t,s){"use strict";var a=s(33),c=s(1),r=s(5),i=s.n(r),n=s(658),l=s(9);t.a=function(e){var t=e.info,s=Object(c.useState)(null),r=Object(a.a)(s,2),o=r[0],j=r[1];Object(c.useEffect)((function(){return i.a.get("/card/card-statistics/profit-line-chart").then((function(e){return j(e.data)})),function(){return j(null)}}),[]);var d={chart:{toolbar:{show:!1},zoom:{enabled:!1}},grid:{borderColor:"#EBEBEB",strokeDashArray:5,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-30,bottom:-10}},stroke:{width:3},colors:[t],series:[{data:[0,20,5,30,15,45]}],markers:{size:2,colors:t,strokeColors:t,strokeWidth:2,strokeOpacity:1,strokeDashArray:0,fillOpacity:1,discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:"#ffffff",strokeColor:t,size:5}],shape:"circle",radius:2,hover:{size:3}},xaxis:{labels:{show:!0,style:{fontSize:"0px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}};return null!==o?Object(l.jsx)(n.a,{height:70,type:"line",options:d,title:o.title,stats:o.statistics,series:o.series}):null}}}]);
//# sourceMappingURL=39.89cc3409.chunk.js.map