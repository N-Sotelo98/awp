(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(3),i=n.n(r),c=(n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var s=n(4),u=n(6),h=n(5),f=n(1),m=n(7),d=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={heroes:[]},n}return Object(m.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.onLine||(null===localStorage.getItem("heroes")?this.setState({heroes:[]}):(console.log(localStorage.getItem("heroes")),this.setState({heroes:JSON.parse(localStorage.getItem("heroes"))}))),fetch("https://gateway.marvel.com:443/v1/public/characters?ts=marvelapi&hash=985b84f5b7374243977307c3726b8e88&apikey=72648eeba99211e404e226773f072ecc").then((function(e){return e.json()})).then((function(t){e.setState({heroes:t.data.results}),console.log(JSON.stringify(e.state.heroes)),localStorage.setItem("heroes",JSON.stringify(e.state.heroes))}))}}]),Object(f.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Ejecricio PWA"),a.a.createElement("h3",null,"Numero de superheroes :"),a.a.createElement("span",null,this.state.heroes.length),this.state.heroes?a.a.createElement(a.a.Fragment,null,this.state.heroes.map((function(e){return a.a.createElement("div",null,a.a.createElement("h4",null,"id: ",e.id),a.a.createElement("h4",null,"Nombre: ",e.name),a.a.createElement("h4",null,"Description:"),a.a.createElement("p",null,e.description),a.a.createElement("img",{src:e.thumbnail.path+"/portrait_xlarge.jpg"}))}))):a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"No hay ni mierd")))}}]),t}(o.Component);i.a.render(a.a.createElement(d,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");c?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(t,e)}))}}()},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.6421a84d.chunk.js.map