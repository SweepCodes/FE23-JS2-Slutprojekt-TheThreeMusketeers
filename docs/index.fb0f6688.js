let e,t,n,o;var r=globalThis,i={},s={},a=r.parcelRequire5068;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},r.parcelRequire5068=a),(0,a.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,o=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)o.set(t[n],{baseUrl:e,path:t[n+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["5ReQc","index.fb0f6688.js","dFkmT","trash.c5fb1540.png"]'));const d=document.getElementById("log-in-register-page");function c(e){let t=document.getElementById("error-message");t&&t.remove();let n=document.createElement("p");n.innerText=e,n.id="error-message",n.classList.add("centerText"),n.style.color="red",d.append(n)}const m="https://musketeerium-default-rtdb.europe-west1.firebasedatabase.app/";async function l(){let e=await fetch(m+"/.json");return(await e.json()).users}async function u(){let e=await fetch(m+"/.json");return(await e.json()).comments}async function g(e,t,n){let o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t,profilepic:n})},r=await fetch(m+"/users/.json",o);return await r.json()}async function p(e){let t={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},n=await fetch(m+"/users/"+e+"/.json",t);return await n.json()}async function f(e,t,n,o){let r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e,category:t,context:n,username:o})},i=await fetch(m+"/comments/.json",r);return(await i.json()).comments}async function y(e){let t={method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)},n=await fetch(m+"/comments/"+e+"/.json",t);return await n.json()}function E(){h("remove","user-choice",document.getElementById("profile-images-one"),document.getElementById("profile-images-two"),document.getElementById("profile-images-three"))}function h(e,t,...n){n.forEach(n=>{"add"===e?n.classList.add(t):"remove"===e&&n.classList.remove(t)})}async function v(e,t){let n=await l();for(let o in n){let r=n[o];if(r.username===e&&r.password===t){let e=document.getElementById("error-message");return e&&e.remove(),!0}}return c("Wrong username or password!"),!1}async function w(e,t,n){let o=document.getElementById("profile-images-one"),r=document.getElementById("profile-images-two"),i=document.getElementById("profile-images-three"),s=await l();if(!(o.classList.contains("user-choice")||r.classList.contains("user-choice")||i.classList.contains("user-choice")))return c("Chose profile picture!"),!1;for(let t in s)if(s[t].username===e)return c("Username already Exsists!"),!1;if(t!==n)return c("Passwords needs to be the same!"),!1;{let e=document.getElementById("error-message");return e&&e.remove(),!0}}const L=document.getElementById("e-sport-forum"),B=document.querySelector("#esports-title"),I=document.querySelector("#e-sport-comments-posted"),b=document.getElementById("movies-tv-shows-forum"),T=document.querySelector("#movies-title"),S=document.querySelector("#movies-comments-posted"),x=document.getElementById("mobile-games-forum"),q=document.querySelector("#mobile-games-title"),j=document.querySelector("#mobile-games-comments-posted"),k=document.querySelector("#user-comments");function H(e,t,n){let o=document.getElementById("logged-in-profile-pic");for(let r in e){let i=e[r];t.value===i.username&&n.value===i.password&&(o.src=i.profilepic,h("add","circle",o))}}async function M(e,t){let n=document.getElementById("profile-page-profile-picture"),o=document.getElementById("profile-page-username"),r=document.getElementById("delete-button"),i=await l();for(let s in i){let a=i[s];a.username===e&&(n.src=a.profilepic,o.innerText=a.username,h("add","hidden",r),h("add","circle",n),e===t&&h("remove","hidden",r))}}async function O(){let e=document.querySelector("aside"),t=document.createElement("h2");t.innerText="Users:",e.append(t);let n=await l();for(let t in n){let o=document.createElement("p");o.innerText=n[t].username,o.classList.add("users"),e.append(o)}}var C={};async function R(e,t){let n=await u();k.innerHTML=" ";let o=document.createElement("h1");o.innerText="Profile comments",k.append(o);let r=0;for(let o in n)e==n[o].username&&e!==t&&r++;let i=r-3;for(let o in n)if(e==n[o].username){let r=document.createElement("div"),s=document.createElement("p");if(r.classList.add("forum-container"),s.innerText=n[o].context,r.append(s),k.append(r),i>0&&(i--,r.remove()),e===t){let e=new URL(C),t=document.createElement("img");t.src=e.toString(),t.classList.add("deleteTrashCanButtonForComments"),r.append(t),t.addEventListener("click",()=>{y(o),r.remove()})}}}async function U(e){let t=await u();for(let n in S.innerHTML="",I.innerHTML="",j.innerHTML="",t)!function(e,t,n,o,r){let i=document.createElement("div"),s=document.createElement("p"),a=document.createElement("h2");if(a.innerText=e,s.innerText=t,i.classList.add("forum-container"),i.append(a,s),L.classList.contains("hidden")||n!=B.innerText?b.classList.contains("hidden")||n!=T.innerText?x.classList.contains("hidden")||n!=q.innerText||j.append(i):S.append(i):I.append(i),e===o){let e=new URL(C),t=document.createElement("img");t.src=e.toString(),t.classList.add("deleteTrashCanButtonForComments"),i.append(t),t.addEventListener("click",async()=>{await y(r),i.remove()})}}(t[n].username,t[n].context,t[n].category,e,n)}C=new URL("trash.c5fb1540.png",import.meta.url).toString();const _=document.getElementById("log-in-register-page"),D=document.getElementById("log-in-div"),F=document.getElementById("log-in-form"),N=document.getElementById("log-in-username"),J=document.getElementById("log-in-password"),P=document.getElementById("register-div"),A=document.getElementById("register-form"),G=document.getElementById("register-username"),Q=document.getElementById("register-password"),V=document.getElementById("confirm-password"),W=document.getElementById("profile-images-div"),z=document.getElementById("profile-images-one"),K=document.getElementById("profile-images-two"),X=document.getElementById("profile-images-three"),Y=document.getElementById("nav-bar"),Z=document.getElementById("home-page"),$=document.getElementById("header-bar"),ee=document.getElementById("mobile-games-forum"),et=document.getElementById("movies-tv-shows-forum"),en=document.getElementById("e-sport-forum"),eo=document.getElementById("profile-page"),er=document.getElementById("delete-button"),ei=document.getElementById("log-out-button"),es=document.getElementById("logged-in-username"),ea=document.querySelector("aside"),ed=document.querySelector("#esports-form"),ec=document.querySelector("#esports-title"),em=document.querySelector("#e-sports-comment"),el=document.querySelector("#movies-tv-shows-form"),eu=document.querySelector("#movies-title"),eg=document.querySelector("#movies-tv-shows-comment"),ep=document.querySelector("#mobile-games-form"),ef=document.querySelector("#mobile-games-title"),ey=document.querySelector("#mobile-games-comment");async function eE(e,n,r){e.preventDefault();let i=n.innerText,s=r.value,a=t,d=await l();for(let e in d)d[e].username===t&&await f(o,i,s,a);U(t),r.value=""}_.addEventListener("click",e=>{if(e.target instanceof HTMLElement&&e.target.classList.contains("toggle-pages")){F.reset(),A.reset(),D.classList.toggle("hidden"),P.classList.toggle("hidden");let e=document.getElementById("error-message");e&&e.remove(),E()}}),W.addEventListener("click",t=>{let n=t.target;"profile-images-div"!==n.id&&(z.classList.toggle("user-choice","profile-images-one"===n.id),K.classList.toggle("user-choice","profile-images-two"===n.id),X.classList.toggle("user-choice","profile-images-three"===n.id),"profile-images-one"===n.id&&(e=z.src),"profile-images-two"===n.id&&(e=K.src),"profile-images-three"===n.id&&(e=X.src))}),F.addEventListener("submit",async e=>{e.preventDefault(),await v(N.value,J.value)&&(t=N.value,es.innerText=t,h("add","hidden",D),h("remove","hidden",Y,Z,ea),H(await l(),N,J),E(),O(),F.reset())}),A.addEventListener("submit",async n=>{n.preventDefault(),await w(G.value,Q.value,V.value)&&(await g(G.value,Q.value,e),t=G.value,es.innerText=t,h("remove","hidden",Y,Z,ea),h("add","hidden",P),H(await l(),G,Q),E(),O(),A.reset())}),$.addEventListener("click",async e=>{let o=e.target;switch(o.innerText){case"Mobile Games":h("remove","hidden",ee),h("add","hidden",et,en,Z,eo),await U(t);break;case"Movies/TV-Shows":h("remove","hidden",et),h("add","hidden",ee,en,Z,eo),await U(t);break;case"E-Sports":h("remove","hidden",en),h("add","hidden",ee,et,Z,eo),U(t);break;default:"logo"!=o.id||Y.classList.contains("hidden")?"logged-in-profile-pic"==o.id&&(R(n,t),h("remove","hidden",eo),h("add","hidden",Z,en,ee,et),M(t,t)):(h("remove","hidden",Z),h("add","hidden",ee,et,en,eo))}}),ei.addEventListener("click",()=>{h("remove","hidden",D),h("add","hidden",er,Y,Z,en,ee,et,eo,ea),ea.innerHTML=""}),ea.addEventListener("click",async e=>{let o=e.target;o.classList.contains("users")&&(R(n=o.innerText,t),h("remove","hidden",eo),h("add","hidden",Z,en,ee,et),await M(n,t))}),er.addEventListener("click",async()=>{let e=await l();for(let n in e)e[n].username===t&&await p(n);h("remove","hidden",D),h("add","hidden",er,Y,Z,en,ee,et,eo,ea),ea.innerHTML=""}),ed.addEventListener("submit",async e=>await eE(e,ec,em)),el.addEventListener("submit",async e=>await eE(e,eu,eg)),ep.addEventListener("submit",async e=>await eE(e,ef,ey));
//# sourceMappingURL=index.fb0f6688.js.map
