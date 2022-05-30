(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[100],{1596:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(234),i=n.n(a),l=n(93),o=n(480),r=n(477),c=n(33),m=n(5),u=n.n(m),g=n(570),j=n(9),d=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){u.a.get("/api/autocomplete/data").then((function(e){return a(e.data.autoComplete)}))}),[]),n.length?Object(j.jsx)(g.a,{suggestions:n,className:"form-control",filterKey:"title",suggestionLimit:4,placeholder:"Search for any of the top 250 IMDB movies"}):null},p=function(){var e=Object(s.useState)([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]),t=Object(c.a)(e,1)[0];return Object(j.jsx)(g.a,{filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'",suggestions:t,className:"form-control"})},b=n(2),h=n.n(b),x=n(42),f=n(56),O=n(34),S=n(70),C=n(54),v=n(94),N=function(){var e=Object(s.useState)([{name:"Jake Shelton",img:x.default},{name:"Edith Baldwin",img:f.default},{name:"Jennifer Wolfe",img:O.default},{name:"Emily Washington",img:S.default},{name:"Heather Green",img:v.default},{name:"Brian Moore",img:C.default}]),t=Object(c.a)(e,1)[0];return Object(j.jsx)(g.a,{filterKey:"name",placeholder:"Type 'a'",className:"form-control",suggestions:t,customRender:function(e,t,n,s,a,i){return Object(j.jsxs)("li",{onMouseEnter:function(){return i(n.indexOf(e))},className:h()("suggestion-item",{active:n.indexOf(e)===s}),onClick:function(e){a(null,e)},children:[Object(j.jsx)("img",{src:e.img,alt:e.name,height:"32",width:"32",className:"me-1"}),Object(j.jsx)("span",{children:e.name})]},t)}})},y=function(){var e=Object(s.useState)([{groupTitle:"1970s",data:[{title:"C"}]},{groupTitle:"1980s",data:[{title:"C++"},{title:"Perl"}]},{groupTitle:"1990s",data:[{title:"Haskell"},{title:"Python"},{title:"Java"},{title:"Javascript"},{title:"PHP"},{title:"Ruby"}]},{groupTitle:"2000s",data:[{title:"C#"},{title:"Scala"},{title:"Clojure"},{title:"Go"}]},{groupTitle:"2010s",data:[{title:"Elm"}]}]),t=Object(c.a)(e,1)[0];return Object(j.jsx)(g.a,{grouped:!0,filterKey:"title",placeholder:"Type 'c'",className:"form-control",suggestions:t,filterHeaderKey:"groupTitle"})},A=function(){var e=Object(s.useState)([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]),t=Object(c.a)(e,1)[0];return Object(j.jsx)(g.a,{suggestions:t,className:"form-control",filterKey:"title",suggestionLimit:2,placeholder:"Type 'a'"})},T=function(){var e=Object(s.useState)([{title:"React.js"},{title:"Angular.js"},{title:"Javascript"},{title:"Vue.js"},{title:"HTML"},{title:"CSS"},{title:"SCSS"},{title:"PHP"},{title:"Laravel"}]),t=Object(c.a)(e,1)[0];return Object(j.jsx)(g.a,{filterKey:"title",suggestionLimit:4,placeholder:"Type 'a'",className:"form-control",suggestions:t,defaultSuggestions:!0})},P=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteBasic = () => {\n  const [suggestions] = useState([\n    {\n      title: 'React.js'\n    },\n    {\n      title: 'Angular.js'\n    },\n    {\n      title: 'Javascript'\n    },\n    {\n      title: 'Vue.js'\n    },\n    {\n      title: 'HTML'\n    },\n    {\n      title: 'CSS'\n    },\n    {\n      title: 'SCSS'\n    },\n    {\n      title: 'PHP'\n    },\n    {\n      title: 'Laravel'\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={4}\n      placeholder=\"Type 'a'\"\n    />\n  )\n}\nexport default AutoCompleteBasic\n"})}),H=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteSections = () => {\n  const [suggestions] = useState([\n    {\n      groupTitle: '1970s',\n      data: [\n        {\n          title: 'C'\n        }\n      ]\n    },\n    {\n      groupTitle: '1980s',\n      data: [\n        {\n          title: 'C++'\n        },\n        {\n          title: 'Perl'\n        }\n      ]\n    },\n    {\n      groupTitle: '1990s',\n      data: [\n        {\n          title: 'Haskell'\n        },\n        {\n          title: 'Python'\n        },\n        {\n          title: 'Java'\n        },\n        {\n          title: 'Javascript'\n        },\n        {\n          title: 'PHP'\n        },\n        {\n          title: 'Ruby'\n        }\n      ]\n    },\n    {\n      groupTitle: '2000s',\n      data: [\n        {\n          title: 'C#'\n        },\n        {\n          title: 'Scala'\n        },\n        {\n          title: 'Clojure'\n        },\n        {\n          title: 'Go'\n        }\n      ]\n    },\n    {\n      groupTitle: '2010s',\n      data: [\n        {\n          title: 'Elm'\n        }\n      ]\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      filterHeaderKey='groupTitle'\n      grouped={true}\n      placeholder=\"Type 'c'\"\n    />\n  )\n}\nexport default AutoCompleteSections\n"})}),L=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState, useEffect } from 'react'\nimport axios from 'axios'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteAjax = () => {\n  const [suggestions, setSuggestions] = useState([])\n\n  useEffect(() => {\n    axios\n      .get('/api/autocomplete/data')\n      .then(response => setSuggestions(response.data.autoComplete))\n  }, [])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={4}\n      placeholder='Search for any of the top 250 IMDB movies'\n    />\n  )\n}\nexport default AutoCompleteAjax\n"})}),R=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport classnames from 'classnames'\nimport AutoComplete from '@components/autocomplete'\nimport img1 from '@src/assets/images/portrait/small/avatar-s-1.jpg'\nimport img2 from '@src/assets/images/portrait/small/avatar-s-2.jpg'\nimport img3 from '@src/assets/images/portrait/small/avatar-s-3.jpg'\nimport img4 from '@src/assets/images/portrait/small/avatar-s-4.jpg'\nimport img5 from '@src/assets/images/portrait/small/avatar-s-5.jpg'\nimport img6 from '@src/assets/images/portrait/small/avatar-s-6.jpg'\n\nconst AutoCompleteRender = () => {\n  const [suggestions] = useState([\n    {\n      name: 'Jake Shelton',\n      img: img1\n    },\n    {\n      name: 'Edith Baldwin',\n      img: img2\n    },\n    {\n      name: 'Jennifer Wolfe',\n      img: img3\n    },\n    {\n      name: 'Emily Washington',\n      img: img4\n    },\n    {\n      name: 'Heather Green',\n      img: img6\n    },\n    {\n      name: 'Brian Moore',\n      img: img5\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='name'\n      placeholder=\"Type 'a'\"\n      customRender={(\n        suggestion,\n        i,\n        filteredData,\n        activeSuggestion,\n        onSuggestionItemClick,\n        onSuggestionItemHover\n      ) => (\n        <li\n          className={classnames('suggestion-item', {\n            active: filteredData.indexOf(suggestion) === activeSuggestion\n          })}\n          key={i}\n          onMouseEnter={() =>\n            onSuggestionItemHover(filteredData.indexOf(suggestion))\n          }\n          onClick={e => {\n            onSuggestionItemClick(null, e)\n          }}\n        >\n          <img\n            src={suggestion.img}\n            alt={suggestion.name}\n            height='32'\n            width='32'\n            className='me-1'\n          />\n          <span>{suggestion.name}</span>\n        </li>\n      )}\n    />\n  )\n}\nexport default AutoCompleteRender\n"})}),E=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteDefaultSuggestions = () => {\n  const [suggestions] = useState([\n    {\n      title: 'React.js'\n    },\n    {\n      title: 'Angular.js'\n    },\n    {\n      title: 'Javascript'\n    },\n    {\n      title: 'Vue.js'\n    },\n    {\n      title: 'HTML'\n    },\n    {\n      title: 'CSS'\n    },\n    {\n      title: 'SCSS'\n    },\n    {\n      title: 'PHP'\n    },\n    {\n      title: 'Laravel'\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={4}\n      defaultSuggestions={true}\n      placeholder=\"Type 'a'\"\n    />\n  )\n}\nexport default AutoCompleteDefaultSuggestions\n"})}),B=Object(j.jsx)("pre",{children:Object(j.jsx)("code",{className:"language-jsx",children:"\nimport React, { useState } from 'react'\nimport AutoComplete from '@components/autocomplete'\n\nconst AutoCompleteSearchLimit = () => {\n  const [suggestions] = useState([\n    {\n      title: 'React.js'\n    },\n    {\n      title: 'Angular.js'\n    },\n    {\n      title: 'Javascript'\n    },\n    {\n      title: 'Vue.js'\n    },\n    {\n      title: 'HTML'\n    },\n    {\n      title: 'CSS'\n    },\n    {\n      title: 'SCSS'\n    },\n    {\n      title: 'PHP'\n    },\n    {\n      title: 'Laravel'\n    }\n  ])\n\n  return (\n    <AutoComplete\n      suggestions={suggestions}\n      className='form-control'\n      filterKey='title'\n      suggestionLimit={2}\n      placeholder=\"Type 'a'\"\n    />\n  )\n}\nexport default AutoCompleteSearchLimit\n"})});t.default=function(){return Object(s.useEffect)((function(){i.a.highlightAll()}),[]),Object(j.jsxs)(s.Fragment,{children:[Object(j.jsx)(r.a,{breadCrumbTitle:"Auto Complete",breadCrumbParent:"Extra Components",breadCrumbActive:"Auto Complete"}),Object(j.jsxs)(l.ib,{children:[Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Basic",code:P,children:Object(j.jsx)(p,{})})}),Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Sections",code:H,children:Object(j.jsx)(y,{})})}),Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Ajax",code:L,children:Object(j.jsx)(d,{})})}),Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Custom Render",code:R,children:Object(j.jsx)(N,{})})}),Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Default Suggestions",code:E,children:Object(j.jsx)(T,{})})}),Object(j.jsx)(l.B,{xl:"6",lg:"12",children:Object(j.jsx)(o.a,{title:"Search Limit",code:B,children:Object(j.jsx)(A,{})})})]})]})}},477:function(e,t,n){"use strict";var s=n(478),a=n(876),i=n(809),l=n(810),o=n(808),r=n(834),c=n(93),m=n(9);t.a=function(e){var t=e.breadCrumbTitle,n=e.breadCrumbParent,u=e.breadCrumbParent2,g=e.breadCrumbParent3,j=e.breadCrumbActive;return Object(m.jsxs)("div",{className:"content-header row",children:[Object(m.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(m.jsx)("div",{className:"row breadcrumbs-top",children:Object(m.jsxs)("div",{className:"col-12",children:[t?Object(m.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(m.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(m.jsxs)(c.g,{children:[Object(m.jsx)(c.h,{tag:"li",children:Object(m.jsx)(s.b,{to:"/",children:"Home"})}),Object(m.jsx)(c.h,{tag:"li",className:"text-primary",children:n}),u?Object(m.jsx)(c.h,{tag:"li",className:"text-primary",children:u}):"",g?Object(m.jsx)(c.h,{tag:"li",className:"text-primary",children:g}):"",Object(m.jsx)(c.h,{tag:"li",active:!0,children:j})]})})]})})}),Object(m.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(m.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(m.jsxs)(c.tb,{children:[Object(m.jsx)(c.G,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(m.jsx)(a.a,{size:14})}),Object(m.jsxs)(c.F,{tag:"ul",end:!0,children:[Object(m.jsxs)(c.E,{tag:s.b,to:"/apps/todo",children:[Object(m.jsx)(i.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(m.jsxs)(c.E,{tag:s.b,to:"/apps/chat",children:[Object(m.jsx)(l.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(m.jsxs)(c.E,{tag:s.b,to:"/apps/email",children:[Object(m.jsx)(o.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(m.jsxs)(c.E,{tag:s.b,to:"/apps/calendar",children:[Object(m.jsx)(r.a,{className:"me-1",size:14}),Object(m.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},480:function(e,t,n){"use strict";var s=n(33),a=n(1),i=n(849),l=n(93),o=n(9);t.a=function(e){var t=e.title,n=e.children,r=e.noBody,c=e.code,m=e.iconCode,u=Object(a.useState)(!1),g=Object(s.a)(u,2),j=g[0],d=g[1],p=m||Object(o.jsx)(i.a,{size:15}),b=r?a.Fragment:l.m;return Object(o.jsxs)(l.l,{className:"card-snippet",children:[Object(o.jsxs)(l.p,{children:[Object(o.jsx)(l.v,{tag:"h4",children:t}),Object(o.jsx)("div",{className:"views cursor-pointer",onClick:function(){return d(!j)},children:p})]}),Object(o.jsx)(b,{children:n}),Object(o.jsx)(l.C,{isOpen:j,children:Object(o.jsx)(l.m,{children:c})})]})}}}]);
//# sourceMappingURL=100.1a1198e9.chunk.js.map