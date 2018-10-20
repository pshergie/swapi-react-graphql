(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"addPerson",function(){return $});var a=n(0),i=n.n(a),s=n(46),c=n.n(s),o=n(21),l=n(45),u=n(56),p=n(112),h=n(113),m=n(111),d=n(80),f=n(18),v=n(19),b=n(33),E="PERSON_LIST_ADD_PERSON",y={viewedPersonList:[]},g=function(e,t){return!!t.viewedPersonList.map(function(e){return e.id}).includes(e.id)};var O=n(11),j=n(12),w=n(14),P=n(13),k=n(15),L=n(110),F=n(115),S=n(54),x=n.n(S),I=[{key:0,path:"/",name:"Search"},{key:1,path:"/history",name:"History"}],C=(n(78),function(e){function t(){return Object(O.a)(this,t),Object(w.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.location.pathname;return i.a.createElement("header",{className:"header"},I.map(function(t){var n=e===t.path;return i.a.createElement("div",{key:t.key,className:x()("route",{isActive:n})},i.a.createElement(L.a,{to:t.path},t.name))}))}}]),t}(a.Component)),A=Object(F.a)(C),N=n(20),q=n.n(N),D=n(30),H=n(31),Y=n(32),_=n.n(Y);function $(e){return{type:E,person:e}}n(94);var M=function(e){function t(){return Object(O.a)(this,t),Object(w.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.persons,t=this.props.PersonListActions.addPerson;return i.a.createElement("ul",null,e.map(function(e){return i.a.createElement("li",{key:e.id,className:"person"},i.a.createElement(L.a,{to:{pathname:"/person/".concat(e.id),state:{person:e}},onClick:function(){return t(e)}},e.name))}))}}]),t}(i.a.Component);var R=Object(v.b)(null,function(e){return{PersonListActions:Object(f.a)(r,e)}})(M);function B(){var e=Object(H.a)(['query ($PersonFilter: String!) {\n  allPersons(filter: {name_contains: $PersonFilter }) {\n    id\n    name\n    birthYear\n    gender\n    height\n    species(filter: {name: "Human"}) {\n      name\n    }\n  }\n}']);return B=function(){return e},e}var J=_()(B()),G=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(w.a)(this,Object(P.a)(t).call(this,e))).onPersonsFetched=function(e){n.setState({personList:e,isLoading:!1})},n.onSubmit=function(){var e=Object(D.a)(q.a.mark(function e(t,r){var a,i,s;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.searchInput.current.value){e.next=4;break}r.preventDefault(),e.next=5;break;case 4:return e.abrupt("return");case 5:return n.setState({isLoading:!0}),e.next=8,t.query({query:J,variables:{PersonFilter:n.searchInput.current.value}});case 8:a=e.sent,i=a.data,s=i.allPersons.filter(function(e){return e.species.length>0}),n.onPersonsFetched(s);case 12:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),n.state={personList:null,isLoading:!1},n.searchInput=i.a.createRef(),n}return Object(k.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.personList,r=t.isLoading;return i.a.createElement(o.ApolloConsumer,null,function(t){return i.a.createElement(a.Fragment,null,i.a.createElement("h2",null,"Enter a name:"),i.a.createElement("form",null,i.a.createElement("input",{type:"text",placeholder:"Max Mustermann",ref:e.searchInput,required:!0,autoFocus:!0}),i.a.createElement("br",null),i.a.createElement("button",{onClick:function(n){return e.onSubmit(t,n)}},"Search")),i.a.createElement("br",null),r&&i.a.createElement("p",null,"Loading..."),n&&!r&&0===n.length&&i.a.createElement("p",null,"Nothing found :("),n&&!r&&i.a.createElement(a.Fragment,null,i.a.createElement("h2",null,"Here are results:"),i.a.createElement(R,{persons:n})))})}}]),t}(a.Component),T=Object(o.withApollo)(G),U=n(116),z=function(e,t){var n=!0,r=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){if(i.value.id===t.id)return!0}}catch(c){r=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}return!1},K=function(e,t){var n=function(e){var t=[];return e.forEach(function(e,n,r){n&&e.episodeId-r[n-1].episodeId===1&&(t.includes(r[n-1])?t.push(e):t.push(r[n-1],e))}),t}(t);return!(t.length<2||!n.length)&&function(e,t){var n=[];return t.forEach(function(r,a){a&&r.characters.forEach(function(i){i.species.length&&z(i.films,r)&&z(i.films,t[a-1])&&i.id!==e&&(n.includes(i)||n.push(i))})}),n}(e,n)},Q=function(e){var t=e.person;if(!t.films)return null;var n=K(t.id,t.films);return n&&n.length>0?i.a.createElement("div",null,i.a.createElement("h2",null,"Humans who played with this person in at least two consecutive movies:"),i.a.createElement(R,{persons:n})):null};function V(){var e=Object(H.a)(['query ($PersonFilter: ID!) {\n  Person(id: $PersonFilter) {\n    films(orderBy: episodeId_ASC) {\n      id\n      episodeId\n      characters {\n        id\n        name\n        birthYear\n        gender\n        height\n        species(filter: {name:"Human"}) {\n          name\n        }\n        films {\n          id\n        }\n      }\n    }\n  }\n}']);return V=function(){return e},e}var W=_()(V()),X=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(w.a)(this,Object(P.a)(t).call(this,e))).state={films:[],isLoading:!1},n}var n;return Object(k.a)(t,e),Object(j.a)(t,[{key:"componentDidMount",value:function(){this.state.films.length||this.fetchFilms(this.props.location.state.person,this.props.client)}},{key:"componentDidUpdate",value:function(e){e.location.state.person.id!==this.props.location.state.person.id&&(this.setState({films:[]}),this.fetchFilms(this.props.location.state.person,this.props.client))}},{key:"fetchFilms",value:(n=Object(D.a)(q.a.mark(function e(t,n){var r,a;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,n.query({query:W,variables:{PersonFilter:t.id}});case 3:r=e.sent,a=r.data,this.setState({films:a.Person.films,isLoading:!1});case 6:case"end":return e.stop()}},e,this)})),function(e,t){return n.apply(this,arguments)})},{key:"render",value:function(){if(this.props.location&&this.props.location.state){var e=this.props.location.state.person,t=this.state,n=t.films,r=t.isLoading;return i.a.createElement("div",null,i.a.createElement("h2",null,e.name),e.birthYear&&i.a.createElement("p",null,"birth year: ",e.birthYear),e.gender&&i.a.createElement("p",null,"gender: ",e.gender),e.height&&i.a.createElement("p",null,"height: ",e.height),r&&i.a.createElement("p",null,"Loading..."),n.length>0&&i.a.createElement(Q,{person:Object(b.a)({},e,{films:n})}))}return i.a.createElement(U.a,{to:"/"})}}]),t}(a.Component),Z=function(e){function t(){return Object(O.a)(this,t),Object(w.a)(this,Object(P.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.props.viewedPersonList;return i.a.createElement("div",null,e&&e.length>0?i.a.createElement(a.Fragment,null,i.a.createElement("h2",null,"Persons you had already viewed:"),i.a.createElement(R,{persons:e})):i.a.createElement(a.Fragment,null,i.a.createElement("h2",null,"You hadn't seen anybody yet."),i.a.createElement(L.a,{to:"/"},i.a.createElement("p",null,"Get back to search page"))))}}]),t}(a.Component);var ee=Object(v.b)(function(e){return{viewedPersonList:e.viewedPersonList}})(Z),te=Object(f.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:var n=g(t.person,e)?null:e.viewedPersonList.push(t.person);return Object(b.a)({},e,n);default:return e}}),ne=new l.a({link:new u.a({uri:"https://api.graphcms.com/simple/v1/swapi"}),cache:new p.a});n(101);var re=document.getElementById("root");c.a.render(i.a.createElement(function(){return i.a.createElement(o.ApolloProvider,{client:ne},i.a.createElement(v.a,{store:te},i.a.createElement(h.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(A,null),i.a.createElement("div",{className:"Content"},i.a.createElement(m.a,null,i.a.createElement(d.a,{exact:!0,path:"/",component:T}),i.a.createElement(d.a,{exact:!0,path:"/person/:id",render:function(e){return i.a.createElement(X,Object.assign({},e,{client:ne}))}}),i.a.createElement(d.a,{exact:!0,path:"/history",component:ee})))))))},null),re)},58:function(e,t,n){e.exports=n(103)},78:function(e,t,n){},94:function(e,t,n){}},[[58,2,1]]]);
//# sourceMappingURL=main.164afad0.chunk.js.map