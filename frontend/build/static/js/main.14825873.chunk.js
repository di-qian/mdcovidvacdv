(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{172:function(e,t,c){},193:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(74),i=c.n(r),o=(c(172),c(2)),u=c(3),s=c(0),l=Object(u.d)().translate([-3330,800]).scale([15e3]),j=Object(u.e)(l),d=function(e){var t=e.data,c=e.rowByCounty,a=e.onHover,r=e.hoveredValue,i=e.fadeOpacity,o=e.colorScale,u=e.colorValue;return Object(s.jsx)(s.Fragment,{children:Object(n.useMemo)((function(){return t.features.map((function(e,t){return Object(s.jsx)("g",{className:"geomarks",onMouseEnter:function(){a(e.properties.county)},onMouseOut:function(){a(null)},opacity:r&&e.properties.county===r?i:1,children:Object(s.jsx)("path",{fill:c.get(e.properties.county)?o(u(c.get(e.properties.county))):"grey",d:j(e)})},t)}))}),[c,o,u,r,t.features,i,a])})},b=function(e){var t=e.data,c=e.covidData,a=e.rowByCounty,r=e.onHoveredValue,i=Object(n.useState)(null),l=Object(o.a)(i,2),j=l[0],b=l[1],O=function(e){return+e.fullyvaccinatedcumulative},f=Object(n.useMemo)((function(){return Object(u.j)(u.f).domain([0,Object(u.h)(c,O)])}),[c,O]);return Object(n.useEffect)((function(){r(j)}),[j]),Object(s.jsx)(d,{data:t,rowByCounty:a,onHover:b,hoveredValue:j,fadeOpacity:.4,colorScale:f,colorValue:O})},O=function(e){var t=e.xScale,c=e.innerHeight,a=e.tickFormat,r=e.tickOffset,i=void 0===r?3:r;return Object(s.jsx)(s.Fragment,{children:Object(n.useMemo)((function(){return t.ticks().map((function(e){return Object(s.jsxs)("g",{className:"tick",transform:"translate(".concat(t(e),",0)"),children:[Object(s.jsx)("line",{y2:c}),Object(s.jsx)("text",{style:{textAnchor:"middle"},dy:".71em",y:c+i,children:a(e)})]},e)}))}),[t,c,a,i])})},f=function(e){var t=e.yScale,c=e.left,a=e.innerWidth,r=e.tickOffset,i=void 0===r?3:r;return Object(s.jsx)(s.Fragment,{children:Object(n.useMemo)((function(){return t.ticks(5).map((function(e){return Object(s.jsxs)("g",{className:"tick",transform:"translate(".concat(c,",").concat(t(e),")"),children:[Object(s.jsx)("line",{x2:a}),Object(s.jsx)("text",{style:{textAnchor:"end"},x:-i,dy:"0.32em",children:e})]},e)}))}),[t,c,a,i])})},h=function(e){var t=e.binnedData,c=e.xScale,a=e.yScale,r=e.tooltipFormat,i=e.innerHeight;return Object(s.jsx)(s.Fragment,{children:Object(n.useMemo)((function(){return t.map((function(e){return Object(s.jsx)("rect",{className:"mark",x:c(e.x0),y:a(e.y),width:c(e.x1)-c(e.x0),height:i-a(e.y),children:Object(s.jsx)("title",{children:r(e.y)})},e.x0)}))}),[t,c,a,r,i])})},x=10,m=0,v=65,y=100,p=function(e){var t=e.data,c=e.width,a=e.height,r=e.setBrushExtent,i=e.xValue,l=Object(n.useRef)(),j=a-x-v,d=c-y-m,b=function(e){return e.fullyvaccinatedcumulative},p=Object(u.o)("%m/%d/%Y"),g=Object(n.useMemo)((function(){return Object(u.k)().domain(Object(u.c)(t,i)).range([y,c]).nice()}),[t,i,c]),S=Object(n.useMemo)((function(){var e=g.domain(),c=Object(o.a)(e,2),n=c[0],a=c[1];return Object(u.a)().value(i).domain(g.domain()).thresholds(Object(u.n)(n,a))(t).map((function(e){return{y:Object(u.m)(e,b),x0:e.x0,x1:e.x1}}))}),[i,b,g,t]),M=Object(n.useMemo)((function(){return Object(u.i)().domain([0,Object(u.h)(S,(function(e){return e.y}))]).range([j,0])}),[S,j]);return Object(n.useEffect)((function(){var e=Object(u.b)().extent([[y,x],[c,j+x]]);e(Object(u.l)(l.current)),e.on("brush end",(function(e){r(e.selection&&e.selection.map(g.invert))}))}),[d,j,r,c,g.invert]),Object(s.jsxs)("svg",{width:c,height:a,children:[Object(s.jsxs)("g",{transform:"translate(0,".concat(x,")"),children:[Object(s.jsx)(O,{xScale:g,innerHeight:j,tickFormat:p,tickOffset:7}),Object(s.jsx)("text",{className:"axis-label",textAnchor:"middle",transform:"translate(".concat(-75+y,", ").concat(j/2,") rotate(-90)"),children:"Cumulative"}),Object(s.jsx)(f,{yScale:M,left:y,innerWidth:d,tickOffset:7}),Object(s.jsx)("text",{className:"axis-label",x:d/2,y:j+45,textAnchor:"middle",children:"Date"}),Object(s.jsx)(h,{binnedData:S,xScale:g,yScale:M,tooltipFormat:function(e){return e},circleRadius:2,innerHeight:j})]}),Object(s.jsx)("g",{ref:l})]})},g=c(76),S=c(75),M=c.n(S),D=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){M.a.get("/api/v1/mdcovidvac").then((function(e){var t;a(((t=e.data.results.rows).map((function(e){e.vaccination_date=new Date(e.vaccination_date),e.fullyvaccinatedcumulative=+e.fullyvaccinatedcumulative})),t))}))}),[]),c},k=function(e){var t=e.hoveredValue,c=e.hoveredData,a=e.mousePosition,r={left:"".concat(a.x,"px"),top:"".concat(a.y,"px")};return Object(s.jsx)("div",{className:"Tooltip",style:r,children:Object(n.useMemo)((function(){return Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:Object(s.jsxs)("th",{colSpan:"2",children:[t," County"]})})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{colSpan:"1",children:"Fully Vaccinated Cumulative"}),Object(s.jsx)("td",{colSpan:"1",children:c&&c.fullyvaccinatedcumulative?c.fullyvaccinatedcumulative:"No Data"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{colSpan:"1",children:"Fully Vaccinated Today"}),Object(s.jsx)("td",{colSpan:"1",children:c&&c.fullyvaccinated?c.fullyvaccinated:"No Data"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{colSpan:"1",children:"At Least One Dose Cumulative"}),Object(s.jsx)("td",{colSpan:"1",children:c&&c.atleastonedosecumulative?c.atleastonedosecumulative:"No Data"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{colSpan:"1",children:"At Least One Dose Today"}),Object(s.jsx)("td",{colSpan:"1",children:c&&c.atleastonedose?c.atleastonedose:"No Data"})]})]})]})}),[c,t])})},w=function(e){return e.vaccination_date},N=function(){var e=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){Object(u.g)("https://gist.githubusercontent.com/di-qian/c990854620364f452311ade8e15db0a3/raw/0912547deeff4b88ece5caf4fe5628c717c41794/mdcountyshape.json").then((function(e){var t=e.objects.MarylandCountyBoundary;a(Object(g.a)(e,t))}))}),[]),c}(),t=D(),c=Object(n.useState)(null),a=Object(o.a)(c,2),r=a[0],i=a[1],l=Object(n.useState)(null),j=Object(o.a)(l,2),d=j[0],O=j[1],f=Object(n.useState)(),h=Object(o.a)(f,2),x=h[0],m=h[1],v=Object(n.useCallback)((function(e){var t=e.clientX,c=e.clientY;O({x:t,y:c})}),[O]),y=function(e){var t=new Date(e),c=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return a<10&&(a="0"+a),n<10&&(n="0"+n),c+"-"+n+"-"+a};if(!e||!t)return Object(s.jsx)("pre",{children:"Loading..."});var S=x?t.filter((function(e){var t=w(e);return t>x[0]&&t<x[1]})):t,M=new Map;return S.forEach((function(e){M.set(e.county,e)})),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("svg",{className:"mapbg",width:1100,height:700,onMouseMove:v,children:Object(s.jsx)(b,{data:e,covidData:t,rowByCounty:M,onHoveredValue:i})}),Object(s.jsx)("h2",{className:"headerText",children:"Maryland Covid 19 Vaccination by County"}),Object(s.jsxs)("h3",{className:"dateText",children:["Date: ",y(x?x[0]:"12/14/2021 10:00:00 AM")," to"," ",y(x?x[1]:"06/11/2021 10:00:00 AM")]}),Object(s.jsx)(p,{data:t,width:1100,height:175,xValue:w,setBrushExtent:m}),r?Object(s.jsx)(k,{hoveredValue:r,hoveredData:M.get(r),mousePosition:d}):null]})};var F=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(N,{})})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.14825873.chunk.js.map