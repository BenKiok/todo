!function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=(()=>{const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("input"),r=document.createElement("button");return e.id="newProject",t.innerHTML="New Project",n.placeholder="Name of project",r.innerHTML="Create Project",e.append(t,n,r),e})(),c=(()=>{const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("input"),r=document.createElement("input"),c=document.createElement("textarea"),o=document.createElement("h3"),d=document.createElement("select"),a=document.createElement("option"),l=document.createElement("option"),i=document.createElement("option"),u=document.createElement("h3"),m=document.createElement("select"),s=document.createElement("option"),p=document.createElement("button");return e.id="create",t.innerHTML="New Task",n.placeholder="Task",r.placeholder="Due date",c.placeholder="Add details here",o.innerHTML="Priority",a.innerHTML="None",l.innerHTML="Low",i.innerHTML="High",u.innerHTML="Project",m.id="projectSelection",p.innerHTML="Create Task",d.append(a,l,i),o.appendChild(d),m.append(s),u.appendChild(m),e.append(t,n,r,c,o,u,p),e})(),o=(()=>{const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("input"),r=document.createElement("input"),c=document.createElement("textarea"),o=document.createElement("h3"),d=document.createElement("select"),a=document.createElement("option"),l=document.createElement("option"),i=document.createElement("option"),u=document.createElement("h3"),m=document.createElement("select"),s=document.createElement("option"),p=document.createElement("section"),E=document.createElement("button"),L=document.createElement("button");return e.id="edit",t.innerHTML="Edit Task",n.placeholder="Task",r.placeholder="Due date",c.placeholder="Add details here",o.innerHTML="Priority",a.innerHTML="None",l.innerHTML="Low",i.innerHTML="High",u.innerHTML="Project",m.id="projectReselection",p.id="btn",E.innerHTML="Create Task",L.innerHTML="Cancel",d.append(a,l,i),o.appendChild(d),m.append(s),u.appendChild(m),p.append(E,L),e.append(t,n,r,c,o,u,p),e})(),d=(()=>{const e=document.createElement("section"),t=document.createElement("button"),n=document.createElement("div");return e.id="nav",e.classList.add("hide"),t.innerHTML="New Project",n.innerHTML="Inbox",e.append(t,n),e})(),a=(()=>{const e=document.createElement("span");return e.id="toggleMenu",e.innerHTML="=",e})(),l=(()=>{const e=document.createElement("section"),t=document.createElement("h1");return e.id="task",t.innerHTML="Inbox",e.appendChild(t),e})();var i=(()=>{const e=document.createElement("section"),t=document.createElement("button");return e.id="new",t.innerHTML="New Task",e.appendChild(t),e})();const u=e=>{const t=[];return{name:e,tasks:t,addTask:e=>{t.push(e)},removeTask:e=>{t.splice(t.indexOf(e),1)}}};(()=>{const e=document.querySelector("body"),t=document.createElement("div");t.id="main";const n=[u("Index")];d.querySelector("button").addEventListener("click",()=>{e.querySelector("#newProject")?r.remove():e.appendChild(r)}),r.querySelector("button").addEventListener("click",()=>{const e=r.querySelector("input");if(e.value){n.push(u(e.value)),(e=>{const t=document.createElement("div");t.innerHTML=e.name,d.appendChild(t)})(n[n.length-1]);const t=document.createElement("option");t.innerHTML=e.value,c.querySelector("#projectSelection").appendChild(t),e.value="",r.remove()}}),a.addEventListener("click",()=>{d.classList.toggle("hide")}),i.querySelector("button").addEventListener("click",()=>{e.querySelector("#create")?c.remove():e.appendChild(c)}),c.querySelector("button").addEventListener("click",()=>{const t=c.querySelector("input"),n=c.querySelectorAll("input")[1],r=c.querySelector("textarea");if(t.value){const d=(e=>{const t=[];return{title:e,date:"No due date",description:"No description",priority:"None",projects:t,addToProject:e=>{t.push(e)},removeFromProject:e=>{t.splice(t.indexOf(e),1)}}})(t.value);n.value&&(d.date=n.value),r.value&&(d.description=r.value);const a=(e=>{const t=document.createElement("div"),n=document.createElement("section"),r=document.createElement("h2"),c=document.createElement("h3"),o=document.createElement("section"),d=document.createElement("h4"),a=document.createElement("section"),i=document.createElement("button"),u=document.createElement("button");return n.classList.add("taskHead"),r.innerHTML=e.title,c.innerHTML=e.date,o.classList.add("taskBase"),d.innerHTML=e.description,i.innerHTML="Edit",u.innerHTML="Delete",c.classList.add("hide"),d.classList.add("hide"),i.classList.add("hide"),u.classList.add("hide"),a.append(i,u),o.append(d,a),n.append(r,c),t.append(n,o),l.appendChild(t),n.addEventListener("click",()=>{c.classList.toggle("hide"),d.classList.toggle("hide"),i.classList.toggle("hide"),u.classList.toggle("hide")}),t})(d);t.value="",n.value="",r.value="",c.remove(),a.querySelector("button").addEventListener("click",()=>{e.querySelector("#edit")?o.remove():e.appendChild(o),o.querySelector("input").value=d.title,o.querySelectorAll("input")[1].value=d.date,o.querySelector("textarea").value=d.description}),o.querySelector("button").addEventListener("click",()=>{d.title=o.querySelector("input").value,d.date=o.querySelectorAll("input")[1].value,d.description=o.querySelector("textarea").value,a.querySelector("h2").innerHTML=d.title,a.querySelector("h3").innerHTML=d.date,a.querySelector("h4").innerHTML=d.description,console.log(d),o.remove()}),o.querySelectorAll("button")[1].addEventListener("click",()=>{o.remove()})}}),t.append(d,a,l,i),e.appendChild(t)})()}]);