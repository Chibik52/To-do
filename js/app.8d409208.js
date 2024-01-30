(function(){"use strict";var t={9934:function(t,e,n){var o=n(9242),r=n(3396);const a={class:"header"},i=(0,r._)("h1",{style:{"font-size":"48pt"}},"To-do",-1),s={class:"routLinks"},u={class:"content"};function c(t,e){const n=(0,r.up)("router-link"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,[i,(0,r._)("nav",s,[(0,r.Wm)(n,{to:"/",class:"routLinks"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Uk)(" | "),(0,r.Wm)(n,{to:"/about",class:"routLinks"},{default:(0,r.w5)((()=>[(0,r.Uk)("About")])),_:1})])]),(0,r._)("div",u,[(0,r.Wm)(c,null,{default:(0,r.w5)((({Component:t})=>[(0,r.Wm)(o.uT,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(t)))])),_:2},1024)])),_:1})])],64)}var l=n(89);const d={},f=(0,l.Z)(d,[["render",c]]);var m=f,p=n(2483),h=n(7139);const k={class:"home"},v={style:{"text-align":"left"}},g=["name"],b=["onUpdate:modelValue"],y={style:{"text-decoration":"solid"}},w=["onClick"];function T(t,e,n,a,i,s){return(0,r.wg)(),(0,r.iD)("div",k,[(0,r._)("div",v,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[0]||(e[0]=e=>t.taskName=e),onKeydown:e[1]||(e[1]=(0,o.D2)((e=>{this.addTask(t.taskName),t.taskName=""}),["enter"]))},null,544),[[o.nr,t.taskName]]),(0,r._)("button",{onClick:e[2]||(e[2]=e=>{this.addTask(t.taskName),t.taskName=""}),style:{cursor:"pointer"}},"Add new task")]),i.tasks.length?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("h2",{key:0,name:t.activeComponent},"No tasks yet",8,g)),(0,r.Wm)(o.W3,{name:"fade",mode:"out-in"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.tasks,((t,n)=>((0,r.wg)(),(0,r.iD)("p",{key:t,class:(0,h.C_)(["task",{finishedTask:t.finished}]),draggable:"true"},[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":e=>t.finished=e,onChange:e[3]||(e[3]=t=>this.saveTasks())},null,40,b),[[o.e8,t.finished]]),(0,r.Uk)(" "+(0,h.zw)(t.taskName)+" ",1),(0,r._)("span",y,[(0,r._)("button",{onClick:t=>this.deleteTask(n),style:{cursor:"pointer",height:"25px",width:"100%"}},"Delete Task",8,w)])],2)))),128))])),_:1})])}n(560);var _={name:"HomeView",components:{},data(){return{tasks:[]}},methods:{addTask(t){void 0!=t&&""!=t.trim()&&(this.tasks.push({finished:!1,taskName:t}),this.saveTasks())},deleteTask(t){this.tasks.splice(t,1),this.saveTasks()},saveTasks(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}},mounted(){localStorage.getItem("tasks")&&(this.tasks=JSON.parse(localStorage.getItem("tasks")))}};const O=(0,l.Z)(_,[["render",T]]);var N=O;const j=[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7714))}],C=(0,p.p7)({history:(0,p.PO)("/To-do/"),routes:j});var S=C;(0,o.ri)(m).use(S).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.fcd1be3c.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="to-do:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[r];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/To-do/"}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),s=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],u=o[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(u)var l=u(n)}for(e&&e(o);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunkto_do"]=self["webpackChunkto_do"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9934)}));o=n.O(o)})();
//# sourceMappingURL=app.8d409208.js.map