!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(()=>{const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("input"),r=document.createElement("button");return e.id="newProject",t.innerHTML="New Project",n.placeholder="Name of project",r.innerHTML="Create Project",e.append(t,n,r),e})(),c=(()=>{const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("input"),r=document.createElement("input"),c=document.createElement("textarea"),o=document.createElement("h3"),d=document.createElement("select"),l=document.createElement("option"),a=document.createElement("option"),i=document.createElement("option"),u=document.createElement("h3"),s=document.createElement("select"),m=document.createElement("option"),p=document.createElement("button");return e.id="create",t.innerHTML="New Task",n.placeholder="Task",r.placeholder="Due date",c.placeholder="Add details here",o.innerHTML="Priority",l.innerHTML="None",a.innerHTML="Low",i.innerHTML="High",u.innerHTML="Project",s.id="projectSelection",p.innerHTML="Create Task",d.append(l,a,i),o.appendChild(d),s.append(m),u.appendChild(s),e.append(t,n,r,c,o,u,p),e})(),o=(()=>{const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("input"),r=document.createElement("input"),c=document.createElement("textarea"),o=document.createElement("h3"),d=document.createElement("select"),l=document.createElement("option"),a=document.createElement("option"),i=document.createElement("option"),u=document.createElement("h3"),s=document.createElement("select"),m=document.createElement("option"),p=document.createElement("section"),E=document.createElement("button"),L=document.createElement("button");return e.id="edit",t.innerHTML="Edit Task",n.placeholder="Task",r.placeholder="Due date",c.placeholder="Add details here",o.innerHTML="Priority",l.innerHTML="None",a.innerHTML="Low",i.innerHTML="High",u.innerHTML="Project",s.id="projectReselection",p.id="btn",E.innerHTML="Create Task",L.innerHTML="Cancel",d.append(l,a,i),o.appendChild(d),s.append(m),u.appendChild(s),p.append(E,L),e.append(t,n,r,c,o,u,p),e})(),d=(()=>{const e=document.createElement("section"),t=document.createElement("button"),n=document.createElement("div");return e.id="nav",e.classList.add("hide"),t.innerHTML="New Project",n.innerHTML="Inbox",e.append(t,n),e})(),l=(()=>{const e=document.createElement("span");return e.id="toggleMenu",e.innerHTML="=",e})(),a=(()=>{const e=document.createElement("section"),t=document.createElement("h1");return e.id="task",t.innerHTML="Inbox",e.appendChild(t),e})();var i=(()=>{const e=document.createElement("section"),t=document.createElement("button");return e.id="new",t.innerHTML="New Task",e.appendChild(t),e})();const u=e=>{const t=[];return{name:e,tasks:t,addTask:e=>{t.push(e)},removeTask:e=>{t.splice(t.indexOf(e),1)}}};(()=>{const e=document.querySelector("body"),t=document.createElement("div");t.id="main";const n=[u("Index")];d.querySelector("button").addEventListener("click",()=>{e.querySelector("#newProject")?r.remove():e.appendChild(r)}),r.querySelector("button").addEventListener("click",()=>{const e=r.querySelector("input");if(e.value){n.push(u(e.value)),(e=>{const t=document.createElement("div");t.innerHTML=e.name,d.appendChild(t)})(n[n.length-1]);const t=document.createElement("option");t.innerHTML=e.value,c.querySelector("#projectSelection").appendChild(t),e.value="",r.remove()}}),l.addEventListener("click",()=>{d.classList.toggle("hide")}),i.querySelector("button").addEventListener("click",()=>{e.querySelector("#create")?c.remove():e.appendChild(c)}),c.querySelector("button").addEventListener("click",()=>{const t=c.querySelector("input"),r=c.querySelectorAll("input")[1],d=c.querySelector("textarea");if(t.value){const l={title:t.value,date:"No due date",description:"No description",priority:"None",completed:!1};r.value&&(l.date=r.value),d.value&&(l.description=d.value),n[0].addTask(l);const i=(e=>{const t=document.createElement("div"),n=document.createElement("input"),r=document.createElement("section"),c=document.createElement("section"),o=document.createElement("h2"),d=document.createElement("h3"),l=document.createElement("section"),i=document.createElement("h4"),u=document.createElement("section"),s=document.createElement("button"),m=document.createElement("button");return t.classList.add("task"),n.type="checkbox",c.classList.add("taskHead"),o.innerHTML=e.title,d.innerHTML=e.date,l.classList.add("taskBase"),i.innerHTML=e.description,s.innerHTML="Edit",m.innerHTML="Delete",n.classList.add("hide"),d.classList.add("hide"),i.classList.add("hide"),s.classList.add("hide"),m.classList.add("hide"),u.append(s,m),l.append(i,u),c.append(o,d),r.append(c,l),t.append(n,r),a.appendChild(t),t.addEventListener("mouseenter",()=>{n.classList.remove("hide")}),t.addEventListener("mouseleave",()=>{n.classList.add("hide")}),c.addEventListener("click",()=>{d.classList.toggle("hide"),i.classList.toggle("hide"),s.classList.toggle("hide"),m.classList.toggle("hide")}),t})(l);t.value="",r.value="",d.value="",c.remove(),i.querySelector("input").addEventListener("click",()=>{l.completed=!l.completed,console.log(l.completed),i.querySelector("h2").classList.toggle("completed"),i.querySelector("h3").classList.toggle("completed"),i.querySelector("h4").classList.toggle("completed")}),i.querySelector("button").addEventListener("click",()=>{e.querySelector("#edit")?o.remove():e.appendChild(o),o.querySelector("input").value=l.title,o.querySelectorAll("input")[1].value=l.date,o.querySelector("textarea").value=l.description}),i.querySelectorAll("button")[1].addEventListener("click",()=>{n[0].removeTask(l),i.remove()}),o.querySelector("button").addEventListener("click",()=>{l.title=o.querySelector("input").value,l.date=o.querySelectorAll("input")[1].value,l.description=o.querySelector("textarea").value,i.querySelector("h2").innerHTML=l.title,i.querySelector("h3").innerHTML=l.date,i.querySelector("h4").innerHTML=l.description,console.log(l),o.remove()}),o.querySelectorAll("button")[1].addEventListener("click",()=>{o.remove()})}}),t.append(d,l,a,i),e.appendChild(t)})()}]);