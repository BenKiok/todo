!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("input"),r=document.createElement("button");e.id="newProject",t.innerHTML="New Project",n.placeholder="Name of project",r.innerHTML="Create Project",e.append(t,n,r)})();(()=>{const e=document.createElement("div"),t=document.createElement("h2"),n=document.createElement("input"),r=document.createElement("input"),o=document.createElement("textarea"),c=document.createElement("h3"),i=document.createElement("select"),a=document.createElement("option"),d=document.createElement("option"),l=document.createElement("option"),m=document.createElement("h3"),u=document.createElement("select"),p=document.createElement("option"),s=document.createElement("option"),E=document.createElement("option"),T=document.createElement("button");e.id="form",t.innerHTML="New Task",n.placeholder="Task",r.placeholder="Due date",o.placeholder="Add details here",c.innerHTML="Priority",a.innerHTML="None",d.innerHTML="Low",l.innerHTML="High",m.innerHTML="Project",u.id="projectSelection",s.innerHTML="Example 1",E.innerHTML="Example 2",T.innerHTML="Create Task",i.append(a,d,l),c.appendChild(i),u.append(p,s,E),m.appendChild(u),e.append(t,n,r,o,c,m,T)})();const r=(()=>{const e=document.createElement("section"),t=document.createElement("button"),n=document.createElement("div");return e.id="nav",e.classList.add("hide"),t.innerHTML="New Project",n.innerHTML="Inbox",e.append(t,n),e})(),o=(()=>{const e=document.createElement("span");return e.id="toggleMenu",e.innerHTML="=",e})(),c=(()=>{const e=document.createElement("section"),t=document.createElement("h1");return e.id="task",t.innerHTML="Inbox",e.appendChild(t),e})(),i=e=>{const t=document.createElement("div"),n=document.createElement("section"),r=document.createElement("h2"),o=document.createElement("h3"),i=document.createElement("section"),a=document.createElement("h4"),d=document.createElement("section"),l=document.createElement("button"),m=document.createElement("button");n.classList.add("taskHead"),r.innerHTML=e.title,o.innerHTML=e.date,i.classList.add("taskBase"),a.innerHTML=e.description,l.innerHTML="Edit",m.innerHTML="Delete",d.append(l,m),i.append(a,d),n.append(r,o),t.append(n,i),c.appendChild(t)};var a=(()=>{const e=document.createElement("section"),t=document.createElement("button");return e.id="new",t.innerHTML="New Task",e.appendChild(t),e})();(()=>{const e=document.querySelector("body"),t=document.createElement("div");t.id="main",i({title:"Example 1",date:"05/29/20",description:"This is a sample description to test the appendTask function",priority:"none"}),i({title:"Example 2",date:"",description:"This is a sample description to test the appendTask function",priority:"none"}),i({title:"Example 3",date:"05/29/20",description:"",priority:"none"}),t.append(r,o,c,a),e.appendChild(t)})()}]);