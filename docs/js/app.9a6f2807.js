(function(t){function e(e){for(var r,s,i=e[0],u=e[1],c=e[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vm-trello-demo/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"158c":function(t,e,n){"use strict";var r=n("5410"),o=n.n(r);o.a},"17ad":function(t,e,n){},"1dca":function(t,e,n){},5410:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("ecee"),a=n("c074"),s=n("ad3d");o["c"].add(a["a"]),r["a"].component("AppIcon",s["a"]);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],c=(n("034f"),n("2877")),l={},d=Object(c["a"])(l,i,u,!1,null,null,null),m=d.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"board"},[n("div",{staticClass:"flex flex-row items-start"},[t._l(t.board.columns,(function(e,r){return n("BoardColumn",{key:r,attrs:{column:e,columnIndex:r,board:t.board}})})),n("div",{staticClass:"column flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newColumnName,expression:"newColumnName"}],staticClass:"p-2 mr-2 flex-grow",attrs:{type:"text",placeholder:"New column name"},domProps:{value:t.newColumnName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createColumn(e)},input:function(e){e.target.composing||(t.newColumnName=e.target.value)}}})])],2),t.isTaskOpen?n("div",{staticClass:"task-bg",on:{mousedown:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("router-view",{on:{"close-modal":t.close}})],1):t._e()])])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"other-mods"},[n("a",{staticClass:"btn-mod",attrs:{href:"https://johanibtaten.github.io/vmod-texteditor-demo/",target:"_blank"}},[t._v("Demo Vue Module 1")]),n("a",{staticClass:"btn-mod",attrs:{href:"https://johanibtaten.github.io/vmod-filesfolders-demo/",target:"_blank"}},[t._v("Demo Vue Module 2")])])}],b=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),h=n("2f62"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppDrop",{on:{drop:t.moveTaskOrColumn}},[n("AppDrag",{staticClass:"column relative",attrs:{transferData:{type:"column",fromColumnIndex:t.columnIndex}}},[n("div",{staticClass:"flex items-center mb-2 font-bold"},[t._v("\n      "+t._s(t.column.name)+"\n    ")]),n("div",{staticClass:"close-column absolute p-2 text-right",attrs:{title:"Delete Column"},on:{click:t.deleteColumn}},[n("span",[t._v("╳")])]),n("div",{staticClass:"list-reset"},[t._l(t.column.tasks,(function(e,r){return n("ColumnTask",{key:r,attrs:{task:e,taskIndex:r,column:t.column,columnIndex:t.columnIndex,board:t.board}})})),n("input",{staticClass:"block p-2 w-full bg-transparent",attrs:{type:"text",placeholder:"+ Enter new task"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTask(e,t.column.tasks)}}})],2)])],1)},g=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppDrop",{on:{drop:t.moveTaskOrColumn}},[n("AppDrag",{staticClass:"relative",attrs:{transferData:{type:"task",fromColumnIndex:t.columnIndex,fromTaskIndex:t.taskIndex}}},[n("div",{staticClass:"close-task p-2 text-right absolute",attrs:{title:"Delete Task"},on:{click:t.deleteTask}},[n("span",[t._v("╳")])]),n("div",{staticClass:"task",on:{click:function(e){return t.goToTask(t.task)}}},[n("span",{staticClass:"w-full flex-no-shrink font-bold"},[t._v("\n        "+t._s(t.task.name)+"\n      ")]),t.task.description?n("p",{staticClass:"w-full flex-no-shrink mt-1 text-sm"},[t._v("\n        "+t._s()+"\n        "+t._s(t._f("truncate")(t.task.description,10))+"\n      ")]):t._e()])])],1)},O=[],x=(n("c5f6"),{props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},board:{type:Object,required:!0}},methods:{moveTaskOrColumn:function(t){"task"===t.type?this.moveTask(t):this.moveColumn(t)},moveTask:function(t){var e=t.fromColumnIndex,n=t.fromTaskIndex,r=this.board.columns[e].tasks;this.$store.commit("MOVE_TASK",{fromTasks:r,fromTaskIndex:n,toTasks:this.column.tasks,toTaskIndex:this.taskIndex})},moveColumn:function(t){var e=t.fromColumnIndex;this.$store.commit("MOVE_COLUMN",{fromColumnIndex:e,toColumnIndex:this.columnIndex})}}}),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{draggable:""},on:{dragstart:function(e){return e.target!==e.currentTarget?null:t.onDrag(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[t._t("default")],2)},_=[],T={props:{transferData:{type:Object,required:!0}},methods:{onDrag:function(t){t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move",t.dataTransfer.setData("payload",JSON.stringify(this.transferData))}}},w=T,j=Object(c["a"])(w,C,_,!1,null,"03b95683",null),E=j.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{drop:function(e){return e.stopPropagation(),t.onDrop(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[t._t("default")],2)},A=[],I={methods:{onDrop:function(t){var e=JSON.parse(t.dataTransfer.getData("payload"));this.$emit("drop",e)}}},S=I,P=Object(c["a"])(S,D,A,!1,null,"3c4801c0",null),$=P.exports,N={components:{AppDrag:E,AppDrop:$},mixins:[x],props:{task:{type:Object,required:!0},taskIndex:{type:Number,required:!0}},methods:{goToTask:function(t){this.$router.push({name:"task",params:{id:t.id}})},deleteTask:function(){confirm("Are you sure you want to delete this task ?")&&this.$store.commit("DELETE_TASK",{columnIndex:this.columnIndex,taskIndex:this.taskIndex})}}},M=N,L=(n("5804"),Object(c["a"])(M,y,O,!1,null,null,null)),U=L.exports,K={components:{ColumnTask:U,AppDrag:E,AppDrop:$},mixins:[x],methods:{createTask:function(t,e){""!==t.target.value.trim()&&(this.$store.commit("CREATE_TASK",{tasks:e,name:t.target.value}),t.target.value="")},deleteColumn:function(){confirm("Are you sure you want to delete this column ?")&&this.$store.commit("DELETE_COLUMN",this.columnIndex)}}},q=K,J=(n("f9e1"),Object(c["a"])(q,k,g,!1,null,null,null)),V=J.exports;function B(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?B(Object(n),!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var F={components:{BoardColumn:V},data:function(){return{newColumnName:""}},computed:R({},Object(h["c"])(["board"]),{isTaskOpen:function(){return"task"===this.$route.name}}),methods:{close:function(){this.$router.push({name:"board"})},createColumn:function(){this.$store.commit("CREATE_COLUMN",{name:this.newColumnName}),this.newColumnName=""}}},z=F,G=(n("158c"),Object(c["a"])(z,p,v,!1,null,null,null)),H=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-view"},[n("div",{staticClass:"flex flex-col flex-grow items-start justify-between px-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"p-2 w-full mr-2 block text-xl font-bold",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"relative w-full bg-transparent px-2 border mt-2 h-64 border-none leading-normal",domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),n("AppButton",{on:{click:t.saveTask}},[t._v("Sauver")])],1)])},W=[];function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(Object(n),!0).forEach((function(e){Object(b["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Z={data:function(){return{name:"",description:""}},computed:Y({},Object(h["b"])(["getTask"]),{task:function(){return this.getTask(this.$route.params.id)}}),methods:{saveTask:function(){this.$store.commit("UPDATE_TASK",{task:this.task,taskPayload:{name:this.name,description:this.description}}),this.$emit("close-modal")}},created:function(){this.name=this.task.name,this.description=this.task.description}},tt=Z,et=(n("b39f"),Object(c["a"])(tt,Q,W,!1,null,null,null)),nt=et.exports;r["a"].use(f["a"]);var rt=new f["a"]({mode:"history",base:"/vm-trello-demo/",routes:[{path:"/",name:"board",component:H,children:[{path:"task/:id",name:"task",component:nt}]}]});n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54");function ot(){return Math.random().toString(16).slice(2)}function at(t){t.subscribe((function(t,e){localStorage.setItem("board",JSON.stringify(e.board))}))}var st={name:"workshop",columns:[{name:"Todo",tasks:[{description:"",name:"First task",id:ot(),userAssigned:null},{description:"",name:"Second task",id:ot(),userAssigned:null},{description:"",name:"And third",id:ot(),userAssigned:null}]},{name:"In-progress",tasks:[{description:"",name:"First task",id:ot(),userAssigned:null}]},{name:"Done",tasks:[{description:"",name:"First task",id:ot(),userAssigned:null}]}]};function it(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=ut(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function ut(t,e){if(t){if("string"===typeof t)return ct(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ct(t,e):void 0}}function ct(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}r["a"].use(h["a"]);var lt=JSON.parse(localStorage.getItem("board"))||st,dt=new h["a"].Store({plugins:[at],state:{board:lt},getters:{getTask:function(t){return function(e){var n,r=it(t.board.columns);try{for(r.s();!(n=r.n()).done;){var o,a=n.value,s=it(a.tasks);try{for(s.s();!(o=s.n()).done;){var i=o.value;if(i.id===e)return i}}catch(u){s.e(u)}finally{s.f()}}}catch(u){r.e(u)}finally{r.f()}}}},mutations:{CREATE_COLUMN:function(t,e){var n=e.name;t.board.columns.push({name:n,tasks:[]})},CREATE_TASK:function(t,e){var n=e.tasks,r=e.name;n.push({name:r,id:ot(),description:""})},UPDATE_TASK:function(t,e){var n=e.task,r=e.taskPayload;for(var o in r)n[o]=r[o]},MOVE_TASK:function(t,e){var n=e.fromTasks,r=e.toTasks,o=e.fromTaskIndex,a=e.toTaskIndex,s=n.splice(o,1)[0];r.splice(a,0,s)},MOVE_COLUMN:function(t,e){var n=e.fromColumnIndex,r=e.toColumnIndex,o=t.board.columns,a=o.splice(n,1)[0];o.splice(r,0,a)},DELETE_COLUMN:function(t,e){var n=t.board.columns;n.splice(e,1)},DELETE_TASK:function(t,e){var n=e.columnIndex,r=e.taskIndex,o=t.board.columns,a=o[n],s=a.tasks;s.splice(r,1)}}}),mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._g(t._b({staticClass:"button"},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)},ft=[],pt={},vt=pt,bt=(n("99e1"),Object(c["a"])(vt,mt,ft,!1,null,"05f11dbd",null)),ht=bt.exports,kt=(n("28a5"),function(t,e){var n="",r=t.split(" ");return r.length>e&&(n="…"),r.splice(0,e).join(" ")+n});r["a"].filter("truncate",kt),r["a"].component("AppButton",ht),r["a"].config.productionTip=!1,new r["a"]({router:rt,store:dt,render:function(t){return t(m)}}).$mount("#app")},5804:function(t,e,n){"use strict";var r=n("bc54"),o=n.n(r);o.a},"64a9":function(t,e,n){},"99e1":function(t,e,n){"use strict";var r=n("1dca"),o=n.n(r);o.a},aedd:function(t,e,n){},b39f:function(t,e,n){"use strict";var r=n("aedd"),o=n.n(r);o.a},bc54:function(t,e,n){},f9e1:function(t,e,n){"use strict";var r=n("17ad"),o=n.n(r);o.a}});
//# sourceMappingURL=app.9a6f2807.js.map