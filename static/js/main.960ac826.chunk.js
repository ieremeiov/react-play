(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(15),c=n.n(a),i=n(9),s=n(7),l=n(17),u=n(18),d=(n(28),n(1)),h=n(2),b=n(4),f=n(3),p=n(5),g=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?size=200x200"),alt:"robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return console.log("Rendering CardList"),r.a.createElement("div",null,t.map(function(e){return r.a.createElement(g,{key:e.id,id:e.id,name:e.name,email:e.email})}))},E=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(b.a)(this,Object(f.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log("Rendering CounterButton"),r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.PureComponent),v=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log("Rendering Header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(E,{color:"red"}))}}]),t}(o.Component),O=function(e){var t=e.searchChange;return console.log("Rendering SearchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue","aria-label":"Search Robots",type:"search",placeholder:"search robots",onChange:t}))},w=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},j=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(f.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"OOps. That is not good"):this.props.children}}]),t}(o.Component),y=(n(30),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?r.a.createElement("h1",null," Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement(v,null),r.a.createElement(O,{searchField:t,searchChange:n}),r.a.createElement(w,null,r.a.createElement(j,null,r.a.createElement(m,{robots:c}))))}}]),t}(o.Component)),R=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(y),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var k={searchField:""},_={isPending:!1,robots:[],error:""},T=(n(32),Object(l.createLogger)(),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}})),N=Object(s.d)(T,Object(s.a)(u.a));c.a.render(r.a.createElement(i.a,{store:N},r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-play",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-play","/service-worker.js");C?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):S(t,e)})}}()}},[[19,2,1]]]);
//# sourceMappingURL=main.960ac826.chunk.js.map