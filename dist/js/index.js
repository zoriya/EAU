!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var a,r=function(){return function(e,t,n,a,r,o,i){this.name=e,this.appid=t,this.thumbnail=n,this.launcher=a,this.launcherID=r,this.isInstalled=o,this.localPath=i}}();!function(e){e[e.LocalOnly=0]="LocalOnly",e[e.Steam=1]="Steam"}(a||(a={}))},function(e,t,n){"use strict";n.r(t),n.d(t,"setup",function(){return u});var a,r,o=n(0),i=n(2),s=n(4).ipcRenderer,c=5,l=0;function u(){c=5,a=null,l=0,[],r=null,c=0,a=document.querySelector(".carousel"),$.getJSON("http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=7C218E8D1347C3CD6CB8117E5ED533BC&steamid="+Object(i.a)()+"&format=json",JSON,function(e){if(0!=e.response.total_count)for(var t=[],n=0;n<e.response.total_count;n++){var a=e.response.games[n];t[n]=new f(a.appid,a.name,a.img_logo_url),n+1==e.response.total_count&&d(t)}else console.log("no recent played games")})}function d(e){for(var t=document.getElementsByClassName("carousel__cell"),n=0;n<t.length;n++)n<e.length?(t[n].src="https://steamcdn-a.akamaihd.net/steam/apps/"+e[n].AppId+"/header.jpg",t[n].dataset.game=JSON.stringify(new o.a(null,e[n].AppId,t[n].srcn,o.b.Steam,null,null,null)),t[n].id=n.toString(),t[n].addEventListener("click",function(){p(event.target,!1)})):t[n].classList.add("disabled");var a=document.createElement("Useless-div");a.id=Math.round(e.length/2).toString(),p(a,!1),a.remove}function p(e,t){null==r&&(r=e),r!=e&&r.classList.remove("higlight"),l=40*(c-e.id)+l,c!=e.id||0!=t?(e.classList.add("higlight"),a.style.transform="translateZ(-1000px) rotateY("+l+"deg)",c=e.id,r=e):s.send("LaunchGame",e.dataset.game)}var f=function(){return function(e,t,n){this.AppId=e,this.name=t,this.thumb=n}}()},function(e,t,n){"use strict";function a(){var e=navigator.userAgent.toLowerCase();if(console.log("Agent: "+e),e.indexOf(" electron/")>-1){var t=new(n(3))("config").get("steam");return null!=t?t:"76561198196430655"}return console.log("AGENT IS NOT ELECTRON, NO HANDLING FOR NOW"),"76561198196430655"}n.d(t,"a",function(){return a})},function(e,t,n){const a=n(4),r=n(8),o=n(9);e.exports=class{constructor(e){this.path=r.join((a.app||a.remote.app).getPath("userData"),e+".json"),this.data=function(e){try{return JSON.parse(o.readFileSync(e))}catch{return{}}}(this.path)}get(e){return this.data[e]}set(e,t){this.data[e]=t,o.writeFileSync(this.path,JSON.stringify(this.data))}}},function(e,t){e.exports=require("electron")},function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),o=n(3);function i(){var e;e=a.a(),$.get("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=7C218E8D1347C3CD6CB8117E5ED533BC&steamid="+e+"&include_appinfo=1&include_played_free_games=1&appids_filter=&format=json",function(e){for(var t=[],n=0;n<e.response.game_count;n++){var a=e.response.games[n],i="https://steamcdn-a.akamaihd.net/steam/apps/"+a.appid+"/header.jpg";t[n]=new r.a(a.name,a.appid,i,r.b.Steam,null,!0,null)}var s=new o("Games");s.set("games",t)})}n.d(t,"populateGrid",function(){return c});var s=n(4).ipcRenderer;function c(){var e=navigator.userAgent.toLowerCase().indexOf(" electron/")>-1?new o("Games").get("games"):(console.log("AGENT IS NOT ELECTRON, NO HANDLING FOR NOW"),null);i();for(var t=document.getElementById("library"),n=function(){var n=e[a],r="<img src='"+n.thumbnail+"'/> <p>"+n.name+"</p>",o=document.createElement("div");o.className="game",o.onclick=function(){var e;e=n,s.send("LaunchGame",e)},n.isInstalled&&(r+='<img src="../../dist/drawables/installed.svg" style="position: absolute; top: 0; right: 0; padding: 5px;"/>'),o.innerHTML=r,null!=t&&t.appendChild(o)},a=0;a<e.length;a++)n()}},function(e,t,n){n(7),e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),o=n(3);function i(){$("#content").load("fragments/home.html",function(){Object(a.setup)(),Object(r.populateGrid)()}),document.getElementById("title").innerHTML="EAU"}$(function(){new o("config").get("dark-mode")&&$("#body").addClass("dark-mode"),i(),document.getElementById("title").onclick=function(){i()},document.getElementById("searchBtn").onclick=function(){var e;(e=document.getElementById("searchInput")).value="",e.focus()},document.getElementById("settingsBtn").onclick=function(){$("#content").load("fragments/settings.html",function(){$(".switch").find("input[type=checkbox]").on("change",function(){var e=$(this).prop("checked");e?$("#body").addClass("dark-mode"):$("#body").removeClass("dark-mode");var t=new o("config");t.set("dark-mode",e)}),$("#body").hasClass("dark-mode")&&$(".switch").find("input[type=checkbox]").prop("checked",!0)}),document.getElementById("title").innerHTML="<i class='icon fas fa-arrow-left'></i>  Settings"}}),n(5),n(1)},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0Nhcm91c2VsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9Ub2tlbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0dhbWVMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0xpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIkdhbWUiLCJsYXVuY2hlciIsImFwcGlkIiwidGh1bWJuYWlsIiwibGF1bmNoZXJJRCIsImlzSW5zdGFsbGVkIiwibG9jYWxQYXRoIiwidGhpcyIsInNldHVwIiwiY2Fyb3VzZWwiLCJsYXN0c2VsZWN0ZWQiLCJfR2FtZV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwiX1Rva2VuTWFuYWdlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwiaXBjUmVuZGVyZXIiLCJzZWxlY3RlZEluZGV4IiwiYW5nbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkIiwiZ2V0SlNPTiIsIkpTT04iLCJkYXRhIiwicmVzcG9uc2UiLCJ0b3RhbF9jb3VudCIsIlNlbGVjdGVkUmVjZW50R2FtZXMiLCJnYW1lIiwiZ2FtZXMiLCJHYW1lTWV0YSIsImltZ19sb2dvX3VybCIsImluaUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImxpc3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwic3JjIiwiQXBwSWQiLCJkYXRhc2V0Iiwic3RyaW5naWZ5Iiwic3JjbiIsIlN0ZWFtIiwiaWQiLCJ0b1N0cmluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb3RhdGVDYXJvdXNlbCIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwiTWF0aCIsInJvdW5kIiwicmVtb3ZlIiwiYnlwYXNzIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJzZW5kIiwidGh1bWIiLCJnZXRTdGVhbVRva2VuIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwidGtuIiwiZWxlY3Ryb24iLCJwYXRoIiwiZnMiLCJbb2JqZWN0IE9iamVjdF0iLCJqb2luIiwiYXBwIiwicmVtb3RlIiwiZ2V0UGF0aCIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwicmVhZEZpbGUiLCJ3cml0ZUZpbGVTeW5jIiwicmVxdWlyZSIsIlN0b3JlIiwiVXBkYXRlR2FtZXNKU09OIiwic3RlYW1Ub2tlbiIsIlRva2VuTWFuYWdlciIsImdhbWVfY291bnQiLCJnYW1lRGF0YSIsInN0b3JlIiwic2V0IiwicG9wdWxhdGVHcmlkIiwiZ3JpZCIsImdldEVsZW1lbnRCeUlkIiwiX2xvb3BfMSIsImdyaWRIdG1sIiwiZWxlbWVudCIsImNsYXNzTmFtZSIsIm9uY2xpY2siLCJnYW1lQ2xpY2tlZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiX0Nhcm91c2VsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfTGlicmFyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwiaG9tZSIsImxvYWQiLCJhZGRDbGFzcyIsImlucHV0IiwiZm9jdXMiLCJmaW5kIiwib24iLCJjaGVja2VkIiwicHJvcCIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEVBQUEsR0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxHQUFBLENBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsUUFBQSxJQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxFQUFBLENBQTBDSyxZQUFBLEVBQUFDLElBQUFMLEtBSzFDWixFQUFBa0IsRUFBQSxTQUFBaEIsR0FDQSxvQkFBQWlCLGVBQUFDLGFBQ0FOLE9BQUFDLGVBQUFiLEVBQUFpQixPQUFBQyxZQUFBLENBQXdEQyxNQUFBLFdBRXhEUCxPQUFBQyxlQUFBYixFQUFBLGNBQWlEbUIsT0FBQSxLQVFqRHJCLEVBQUFzQixFQUFBLFNBQUFELEVBQUFFLEdBRUEsR0FEQSxFQUFBQSxJQUFBRixFQUFBckIsRUFBQXFCLElBQ0EsRUFBQUUsRUFBQSxPQUFBRixFQUNBLEtBQUFFLEdBQUEsaUJBQUFGLFFBQUFHLFdBQUEsT0FBQUgsRUFDQSxJQUFBSSxFQUFBWCxPQUFBWSxPQUFBLE1BR0EsR0FGQTFCLEVBQUFr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RUFBUSxrQkMzQ1JHLEVBQUFELFFBQUFnSCxRQUFBLHVCQ0FBL0csRUFBQUQsUUFBQWdILFFBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJ2YXIgR2FtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWUobmFtZSwgYXBwaWQsIHRodW1ibmFpbCwgbGF1bmNoZXIsIGxhdW5jaGVySUQsIGlzSW5zdGFsbGVkLCBsb2NhbFBhdGgpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYXBwaWQgPSBhcHBpZDtcclxuICAgICAgICB0aGlzLnRodW1ibmFpbCA9IHRodW1ibmFpbDtcclxuICAgICAgICB0aGlzLmxhdW5jaGVyID0gbGF1bmNoZXI7XHJcbiAgICAgICAgdGhpcy5sYXVuY2hlcklEID0gbGF1bmNoZXJJRDtcclxuICAgICAgICB0aGlzLmlzSW5zdGFsbGVkID0gaXNJbnN0YWxsZWQ7XHJcbiAgICAgICAgdGhpcy5sb2NhbFBhdGggPSBsb2NhbFBhdGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gR2FtZTtcclxufSgpKTtcclxuZXhwb3J0IHsgR2FtZSB9O1xyXG5leHBvcnQgdmFyIGxhdW5jaGVyO1xyXG4oZnVuY3Rpb24gKGxhdW5jaGVyKSB7XHJcbiAgICBsYXVuY2hlcltsYXVuY2hlcltcIkxvY2FsT25seVwiXSA9IDBdID0gXCJMb2NhbE9ubHlcIjtcclxuICAgIGxhdW5jaGVyW2xhdW5jaGVyW1wiU3RlYW1cIl0gPSAxXSA9IFwiU3RlYW1cIjtcclxufSkobGF1bmNoZXIgfHwgKGxhdW5jaGVyID0ge30pKTtcclxuIiwiLy9pbXBvcnQge0dhbWV9IGZyb20gXCIuL0xpYnJhcnlcIlxyXG5pbXBvcnQgeyBHYW1lLCBsYXVuY2hlciB9IGZyb20gXCIuL0dhbWVcIjtcclxuaW1wb3J0IHsgZ2V0U3RlYW1Ub2tlbiB9IGZyb20gXCIuL1Rva2VuTWFuYWdlclwiO1xyXG52YXIgaXBjUmVuZGVyZXIgPSByZXF1aXJlKCdlbGVjdHJvbicpLmlwY1JlbmRlcmVyO1xyXG52YXIgc2VsZWN0ZWRJbmRleCA9IDU7XHJcbnZhciBjYXJvdXNlbDtcclxudmFyIGFuZ2xlID0gMDtcclxudmFyIFNlbGVjdGVkUmVjZW50R2FtZXMgPSBbXTtcclxudmFyIGxhc3RzZWxlY3RlZDtcclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgc2VsZWN0ZWRJbmRleCA9IDU7XHJcbiAgICBjYXJvdXNlbCA9IG51bGw7XHJcbiAgICBhbmdsZSA9IDA7XHJcbiAgICBTZWxlY3RlZFJlY2VudEdhbWVzID0gW107XHJcbiAgICBsYXN0c2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAvL0dldCByZWNlbnQgcGxheWVkIGdhbWUgZnJvbSBzdGVhbS8vXHJcbiAgICBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWxcIik7XHJcbiAgICAkLmdldEpTT04oXCJodHRwOi8vYXBpLnN0ZWFtcG93ZXJlZC5jb20vSVBsYXllclNlcnZpY2UvR2V0UmVjZW50bHlQbGF5ZWRHYW1lcy92MDAwMS8/a2V5PTdDMjE4RThEMTM0N0MzQ0Q2Q0I4MTE3RTVFRDUzM0JDJnN0ZWFtaWQ9XCIgKyBnZXRTdGVhbVRva2VuKCkgKyBcIiZmb3JtYXQ9anNvblwiLCBKU09OLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlLnRvdGFsX2NvdW50ID09IDApIHsgLy8gbnVsbCBjaGVjayB0byBwcmV2ZW50IGVycm9yIHRoZXJlIGlzIG5vIHJlY2VudCBnYW1lXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gcmVjZW50IHBsYXllZCBnYW1lc1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgU2VsZWN0ZWRSZWNlbnRHYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5yZXNwb25zZS50b3RhbF9jb3VudDsgaSsrKSAvL09iamVjdC5rZXlzKGRhdGEucmVzcG9uc2UuZ2FtZXNbMF0pIGNvbXB0ZSBsZSBub21icmUgZGUgY2zDqSBhIHBhcnRpciBkZSAwXHJcbiAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGdhbWUgPSBkYXRhLnJlc3BvbnNlLmdhbWVzW2ldO1xyXG4gICAgICAgICAgICBTZWxlY3RlZFJlY2VudEdhbWVzW2ldID0gbmV3IEdhbWVNZXRhKGdhbWUuYXBwaWQsIGdhbWUubmFtZSwgZ2FtZS5pbWdfbG9nb191cmwpO1xyXG4gICAgICAgICAgICBpZiAoaSArIDEgPT0gZGF0YS5yZXNwb25zZS50b3RhbF9jb3VudCkge1xyXG4gICAgICAgICAgICAgICAgaW5pQ2FsbGJhY2soU2VsZWN0ZWRSZWNlbnRHYW1lcyk7XHJcbiAgICAgICAgICAgIH0gLy9sYXVuY2ggc2NyaXB0IHVzZXIgdmFyaWFibGUgYWZ0ZXIgYWxsIGNhbGxiYWNrcyBhcmUgZmluaXNoZWRcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpbmlDYWxsYmFjayhTZWxlY3RlZFJlY2VudEdhbWVzKSB7XHJcbiAgICAvL0FkZCByZWNlbnQgcGxheWVkIGdhbWUgdG8gY2Fyb3VzZWwvL1xyXG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2Fyb3VzZWxfX2NlbGxcIik7IC8vYXMgYW55IGJlY2F1c2Ugd2Ugd2FudCBhIEhUTUxpbWFnZSBjb2xsZWN0aW9uIGFuZCBodG1sZWxlbWVudCBpcyBub3QgZ2VuZXJpY1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSAvL2xvb3AgaW50byBjYXJvdXNlbF9jZWxsIHRvIGFkZCBldmVudCBsaXN0ZW5lciArIHRodW1iXHJcbiAgICAge1xyXG4gICAgICAgIGlmIChpIDwgU2VsZWN0ZWRSZWNlbnRHYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGlzdFtpXS5zcmMgPSBcImh0dHBzOi8vc3RlYW1jZG4tYS5ha2FtYWloZC5uZXQvc3RlYW0vYXBwcy9cIiArIFNlbGVjdGVkUmVjZW50R2FtZXNbaV0uQXBwSWQgKyBcIi9oZWFkZXIuanBnXCI7XHJcbiAgICAgICAgICAgIGxpc3RbaV0uZGF0YXNldC5nYW1lID0gSlNPTi5zdHJpbmdpZnkobmV3IEdhbWUobnVsbCwgU2VsZWN0ZWRSZWNlbnRHYW1lc1tpXS5BcHBJZCwgbGlzdFtpXS5zcmNuLCBsYXVuY2hlci5TdGVhbSwgbnVsbCwgbnVsbCwgbnVsbCkpO1xyXG4gICAgICAgICAgICBsaXN0W2ldLmlkID0gaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBsaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXYgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICByb3RhdGVDYXJvdXNlbChldiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxpc3RbaV0uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1VzZWxlc3MtZGl2Jyk7XHJcbiAgICBlbC5pZCA9IE1hdGgucm91bmQoU2VsZWN0ZWRSZWNlbnRHYW1lcy5sZW5ndGggLyAyKS50b1N0cmluZygpOyAvLyB0cmljayB0aGUgY2Fyb3VzZWxyb2F0ZSB0byB3b3JrIGV2ZW4gd2lob3V0IGEgVGFyZ2V0RXZlbnQgcmVmZXJlbmNlXHJcbiAgICByb3RhdGVDYXJvdXNlbChlbCwgZmFsc2UpO1xyXG4gICAgZWwucmVtb3ZlO1xyXG59XHJcbmZ1bmN0aW9uIHJvdGF0ZUNhcm91c2VsKHRhcmdldCwgYnlwYXNzKSB7XHJcbiAgICBpZiAobGFzdHNlbGVjdGVkID09IG51bGwpIHtcclxuICAgICAgICBsYXN0c2VsZWN0ZWQgPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBpZiAobGFzdHNlbGVjdGVkICE9IHRhcmdldCkge1xyXG4gICAgICAgIGxhc3RzZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnbGlnaHRcIik7XHJcbiAgICB9XHJcbiAgICBhbmdsZSA9IChzZWxlY3RlZEluZGV4IC0gdGFyZ2V0LmlkKSAqIDQwICsgYW5nbGU7IC8vKjQwIHRvIGNvbnZlcnQgaW4gYW5nbGUgc3RlcFxyXG4gICAgLy9MYXVuY2ggdGhlIGdhbWUgb24gdGhlIGZyb250IG9mIHRoZSBjYXJvdXNlbFxyXG4gICAgaWYgKHNlbGVjdGVkSW5kZXggPT0gdGFyZ2V0LmlkICYmIGJ5cGFzcyA9PSBmYWxzZSkgLy8gdGhlIGJ5cGFzcyBpcyBmb3IgaW5pXHJcbiAgICAge1xyXG4gICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoJ0xhdW5jaEdhbWUnLCB0YXJnZXQuZGF0YXNldC5nYW1lKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpZ2xpZ2h0XCIpOyAvLyBtYWtlIHRoZSBjZW50cmFsIGNlbGwgYmlnZ2VyXHJcbiAgICBjYXJvdXNlbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVooLTEwMDBweCkgcm90YXRlWShcIiArIGFuZ2xlICsgXCJkZWcpXCI7XHJcbiAgICBzZWxlY3RlZEluZGV4ID0gdGFyZ2V0LmlkO1xyXG4gICAgbGFzdHNlbGVjdGVkID0gdGFyZ2V0O1xyXG59XHJcbnZhciBHYW1lTWV0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVNZXRhKEFwcElkLCBuYW1lLCB0aHVtYikge1xyXG4gICAgICAgIHRoaXMuQXBwSWQgPSBBcHBJZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGh1bWIgPSB0aHVtYjtcclxuICAgIH1cclxuICAgIHJldHVybiBHYW1lTWV0YTtcclxufSgpKTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN0ZWFtVG9rZW4oKSB7XHJcbiAgICB2YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgY29uc29sZS5sb2coXCJBZ2VudDogXCIgKyB1c2VyQWdlbnQpO1xyXG4gICAgdmFyIGlzRWxlY3Ryb24gPSB1c2VyQWdlbnQuaW5kZXhPZihcIiBlbGVjdHJvbi9cIikgPiAtMTtcclxuICAgIGlmIChpc0VsZWN0cm9uKSB7XHJcbiAgICAgICAgdmFyIFN0b3JlID0gcmVxdWlyZShcIi4uL2pzL3N0b3JlXCIpO1xyXG4gICAgICAgIHZhciB0a25TdG9yZSA9IG5ldyBTdG9yZShcImNvbmZpZ1wiKTtcclxuICAgICAgICB2YXIgdGtuID0gdGtuU3RvcmUuZ2V0KFwic3RlYW1cIik7XHJcbiAgICAgICAgcmV0dXJuIHRrbiAhPSBudWxsID8gdGtuIDogXCI3NjU2MTE5ODE5NjQzMDY1NVwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBR0VOVCBJUyBOT1QgRUxFQ1RST04sIE5PIEhBTkRMSU5HIEZPUiBOT1dcIik7XHJcbiAgICAgICAgcmV0dXJuIFwiNzY1NjExOTgxOTY0MzA2NTVcIjsgLy9BIGRlZmF1bHQgc3RlYW0gY2xpZW50IGlkIChmb3IgdGVzdGluZyBvbmx5KVxyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZShcImVsZWN0cm9uXCIpO1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5cclxuY2xhc3MgU3RvcmVcclxueyAgICBcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aC5qb2luKChlbGVjdHJvbi5hcHAgfHwgZWxlY3Ryb24ucmVtb3RlLmFwcCkuZ2V0UGF0aChcInVzZXJEYXRhXCIpLCBuYW1lICsgXCIuanNvblwiKTtcclxuICAgICAgICB0aGlzLmRhdGEgPSByZWFkRmlsZSh0aGlzLnBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChrZXkpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHNldChrZXksIHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgZnMud3JpdGVGaWxlU3luYyh0aGlzLnBhdGgsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkRmlsZShwYXRoKVxyXG57XHJcbiAgICB0cnlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGF0aCkpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2hcclxuICAgIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU3RvcmU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwidmFyIFN0b3JlID0gcmVxdWlyZShcIi4uL2pzL3N0b3JlXCIpO1xyXG5pbXBvcnQgKiBhcyBUb2tlbk1hbmFnZXIgZnJvbSBcIi4vVG9rZW5NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEdhbWUsIGxhdW5jaGVyIH0gZnJvbSBcIi4vR2FtZVwiO1xyXG5leHBvcnQgZnVuY3Rpb24gTG9hZEdhbWVzKCkge1xyXG4gICAgdmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIHZhciBpc0VsZWN0cm9uID0gdXNlckFnZW50LmluZGV4T2YoXCIgZWxlY3Ryb24vXCIpID4gLTE7XHJcbiAgICBpZiAoaXNFbGVjdHJvbikge1xyXG4gICAgICAgIHZhciBzdG9yZSA9IG5ldyBTdG9yZShcIkdhbWVzXCIpO1xyXG4gICAgICAgIHJldHVybiBzdG9yZS5nZXQoXCJnYW1lc1wiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQUdFTlQgSVMgTk9UIEVMRUNUUk9OLCBOTyBIQU5ETElORyBGT1IgTk9XXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVHYW1lc0pTT04oKSB7XHJcbiAgICBBZGRTdGVhbUdhbWVzKCk7XHJcbn1cclxuLy8jcmVnaW9uIFN0ZWFtUmVxdWVzdHNcclxuZnVuY3Rpb24gQWRkU3RlYW1HYW1lcygpIHtcclxuICAgIHZhciBzdGVhbVRva2VuID0gVG9rZW5NYW5hZ2VyLmdldFN0ZWFtVG9rZW4oKTtcclxuICAgICQuZ2V0KFwiaHR0cHM6Ly9hcGkuc3RlYW1wb3dlcmVkLmNvbS9JUGxheWVyU2VydmljZS9HZXRPd25lZEdhbWVzL3YxL1wiICtcclxuICAgICAgICBcIj9rZXk9N0MyMThFOEQxMzQ3QzNDRDZDQjgxMTdFNUVENTMzQkNcIiArXHJcbiAgICAgICAgXCImc3RlYW1pZD1cIiArIHN0ZWFtVG9rZW4gK1xyXG4gICAgICAgIFwiJmluY2x1ZGVfYXBwaW5mbz0xXCIgK1xyXG4gICAgICAgIFwiJmluY2x1ZGVfcGxheWVkX2ZyZWVfZ2FtZXM9MVwiICtcclxuICAgICAgICBcIiZhcHBpZHNfZmlsdGVyPSZmb3JtYXQ9anNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHZhciBnYW1lcyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5yZXNwb25zZS5nYW1lX2NvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGdhbWVEYXRhID0gZGF0YS5yZXNwb25zZS5nYW1lc1tpXTtcclxuICAgICAgICAgICAgdmFyIHRodW1ibmFpbCA9IFwiaHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9zdGVhbS9hcHBzL1wiICsgZ2FtZURhdGEuYXBwaWQgKyBcIi9oZWFkZXIuanBnXCI7XHJcbiAgICAgICAgICAgIGdhbWVzW2ldID0gbmV3IEdhbWUoZ2FtZURhdGEubmFtZSwgZ2FtZURhdGEuYXBwaWQsIHRodW1ibmFpbCwgbGF1bmNoZXIuU3RlYW0sIG51bGwsIHRydWUsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL1Nob3VsZCB1c2UgYSBjb29raWUgaWYgdGhlIHVzZXIgaXMgaW4gdGhlIGJyb3dzZXJcclxuICAgICAgICB2YXIgc3RvcmUgPSBuZXcgU3RvcmUoXCJHYW1lc1wiKTtcclxuICAgICAgICBzdG9yZS5zZXQoXCJnYW1lc1wiLCBnYW1lcyk7IC8vU0hPVUxETidUIERPIElUIExJS0UgVEhBVCwgSXQgb3ZlcnJpZGUgZXZlcnkgZ2FtZXMgaW4gdGhlIGpzb24uXHJcbiAgICB9KTtcclxufVxyXG4vLyNlbmRyZWdpb25cclxuIiwiaW1wb3J0IHsgTG9hZEdhbWVzLCBVcGRhdGVHYW1lc0pTT04gfSBmcm9tIFwiLi9HYW1lTG9hZGVyXCI7XHJcbnZhciBpcGNSZW5kZXJlciA9IHJlcXVpcmUoJ2VsZWN0cm9uJykuaXBjUmVuZGVyZXI7XHJcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUdyaWQoKSB7XHJcbiAgICB2YXIgZ2FtZXMgPSBMb2FkR2FtZXMoKTtcclxuICAgIFVwZGF0ZUdhbWVzSlNPTigpO1xyXG4gICAgdmFyIGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpYnJhcnlcIik7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ2FtZSA9IGdhbWVzW2ldO1xyXG4gICAgICAgIHZhciBncmlkSHRtbCA9IFwiPGltZyBzcmM9J1wiICsgZ2FtZS50aHVtYm5haWwgKyBcIicvPiA8cD5cIiArIGdhbWUubmFtZSArIFwiPC9wPlwiO1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiZ2FtZVwiO1xyXG4gICAgICAgIGVsZW1lbnQub25jbGljayA9IGZ1bmN0aW9uICgpIHsgb25HYW1lQ2xpY2soZ2FtZSk7IH07XHJcbiAgICAgICAgaWYgKGdhbWUuaXNJbnN0YWxsZWQpXHJcbiAgICAgICAgICAgIGdyaWRIdG1sICs9ICc8aW1nIHNyYz1cIi4uLy4uL2Rpc3QvZHJhd2FibGVzL2luc3RhbGxlZC5zdmdcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyByaWdodDogMDsgcGFkZGluZzogNXB4O1wiLz4nO1xyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZ3JpZEh0bWw7XHJcbiAgICAgICAgaWYgKGdyaWQgIT0gbnVsbClcclxuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdhbWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgX2xvb3BfMSgpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIG9uR2FtZUNsaWNrKGdhbWVDbGlja2VkKSB7XHJcbiAgICBpcGNSZW5kZXJlci5zZW5kKCdMYXVuY2hHYW1lJywgZ2FtZUNsaWNrZWQpO1xyXG59XHJcbiIsIi8vIGltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjsgLy9Vc2luZyBnbG9iYWwgc2NvcGUganF1ZXJ5IGluc3RlYWQgYmVhY2F1c2UgaXQgbWFrZSBhIGh1Z2UgZmlsZSBpZiB3ZSB1c2UgdGhpcy5cclxuaW1wb3J0IHsgc2V0dXAgfSBmcm9tIFwiLi9DYXJvdXNlbFwiO1xyXG5pbXBvcnQgeyBwb3B1bGF0ZUdyaWQgfSBmcm9tIFwiLi9MaWJyYXJ5XCI7XHJcbnZhciBTdG9yZSA9IHJlcXVpcmUoXCIuLi9qcy9zdG9yZVwiKTtcclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY29uZmlnID0gbmV3IFN0b3JlKFwiY29uZmlnXCIpO1xyXG4gICAgaWYgKGNvbmZpZy5nZXQoXCJkYXJrLW1vZGVcIikpIHtcclxuICAgICAgICAkKFwiI2JvZHlcIikuYWRkQ2xhc3MoXCJkYXJrLW1vZGVcIik7XHJcbiAgICB9XHJcbiAgICBob21lKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IGhvbWUoKTsgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IG9wZW5TZWFyY2goKTsgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3NCdG5cIikub25jbGljayA9IGZ1bmN0aW9uICgpIHsgb3BlblNldHRpbmdzKCk7IH07XHJcbn0pO1xyXG5mdW5jdGlvbiBob21lKCkge1xyXG4gICAgJChcIiNjb250ZW50XCIpLmxvYWQoXCJmcmFnbWVudHMvaG9tZS5odG1sXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXR1cCgpO1xyXG4gICAgICAgIHBvcHVsYXRlR3JpZCgpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLmlubmVySFRNTCA9IFwiRUFVXCI7XHJcbn1cclxuZnVuY3Rpb24gb3BlblNlYXJjaCgpIHtcclxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIik7XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBpbnB1dC5mb2N1cygpO1xyXG59XHJcbmZ1bmN0aW9uIG9wZW5TZXR0aW5ncygpIHtcclxuICAgICQoXCIjY29udGVudFwiKS5sb2FkKFwiZnJhZ21lbnRzL3NldHRpbmdzLmh0bWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIuc3dpdGNoXCIpLmZpbmQoXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGVja2VkID0gJCh0aGlzKS5wcm9wKFwiY2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWQpXHJcbiAgICAgICAgICAgICAgICAkKFwiI2JvZHlcIikuYWRkQ2xhc3MoXCJkYXJrLW1vZGVcIik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICQoXCIjYm9keVwiKS5yZW1vdmVDbGFzcyhcImRhcmstbW9kZVwiKTtcclxuICAgICAgICAgICAgdmFyIHN0b3JlID0gbmV3IFN0b3JlKFwiY29uZmlnXCIpO1xyXG4gICAgICAgICAgICBzdG9yZS5zZXQoXCJkYXJrLW1vZGVcIiwgY2hlY2tlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCQoXCIjYm9keVwiKS5oYXNDbGFzcyhcImRhcmstbW9kZVwiKSlcclxuICAgICAgICAgICAgJChcIi5zd2l0Y2hcIikuZmluZChcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLmlubmVySFRNTCA9IFwiPGkgY2xhc3M9J2ljb24gZmFzIGZhLWFycm93LWxlZnQnPjwvaT4gIFNldHRpbmdzXCI7XHJcbn1cclxucmVxdWlyZShcIi4vTGlicmFyeVwiKTtcclxucmVxdWlyZShcIi4vQ2Fyb3VzZWxcIik7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==