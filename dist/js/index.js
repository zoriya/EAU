!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";n.r(t),n.d(t,"setup",function(){return i});var r,o=0,c=0;function i(){r=document.querySelector(".carousel");for(var e=document.getElementsByClassName("carousel__cell"),t=0;t<e.length;t++)e[t].id=t.toString(),e[t].addEventListener("click",function(){u(event.target.id)})}function u(e){c=20*(o-e)+c,r.style.transform="translateZ(-880px) rotateY("+c+"deg)",o=e}},function(e,t,n){"use strict";n.r(t),n.d(t,"populateGrid",function(){return o});var r;function o(){$.get("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=7C218E8D1347C3CD6CB8117E5ED533BC&steamid=76561198250223174&include_appinfo=1&include_played_free_games=1&appids_filter=",function(e){for(var t=e.response,n=document.getElementById("library"),r=function(){var r=t.games[o],c="<img src='"+("https://steamcdn-a.akamaihd.net/steam/apps/"+e.response.games[o].appid+"/header.jpg")+"'/> <p>"+r.name+"</p>",i=document.createElement("div");i.className="game",i.onclick=function(){var e;e=r,console.log(e.name)},i.innerHTML=c,null!=n&&n.appendChild(i)},o=0;o<t.game_count;o++)r()})}!function(e){e[e.LocalOnly=0]="LocalOnly",e[e.Steam=1]="Steam"}(r||(r={}))},,function(e,t,n){n(4),e.exports=n(0)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(1);function c(){$("#content").load("fragments/home.html",function(){Object(r.setup)(),Object(o.populateGrid)()}),document.getElementById("title").innerHTML="EAU"}$(function(){c(),document.getElementById("title").onclick=function(){c()},document.getElementById("searchBtn").onclick=function(){var e;(e=document.getElementById("searchInput")).value="",e.focus()},document.getElementById("settingsBtn").onclick=function(){$("#content").load("fragments/settings.html",function(){}),document.getElementById("title").innerHTML="<i class='icon fas fa-arrow-left'></i>  Settings"}}),n(1),n(0)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL0Nhcm91c2VsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9MaWJyYXJ5LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9pbmRleC50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl9fd2VicGFja19leHBvcnRzX18iLCJzZXR1cCIsImNhcm91c2VsIiwic2VsZWN0ZWRJbmRleCIsImFuZ2xlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGlzdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJpZCIsInRvU3RyaW5nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdGF0ZUNhcm91c2VsIiwiZXZlbnQiLCJ0YXJnZXQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInBvcHVsYXRlR3JpZCIsImxhdW5jaGVyIiwiJCIsImRhdGEiLCJyZXNwb25zZSIsImdyaWQiLCJnZXRFbGVtZW50QnlJZCIsIl9sb29wXzEiLCJnYW1lIiwiZ2FtZXMiLCJncmlkSHRtbCIsImFwcGlkIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbmNsaWNrIiwiZ2FtZUNsaWNrZWQiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJnYW1lX2NvdW50IiwiX0Nhcm91c2VsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJfTGlicmFyeV9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwiaG9tZSIsImxvYWQiLCJpbnB1dCIsImZvY3VzIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFpRG1CLE9BQUEsS0FRakRyQixFQUFBc0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQXJCLEVBQUFxQixJQUNBLEVBQUFFLEVBQUEsT0FBQUYsRUFDQSxLQUFBRSxHQUFBLGlCQUFBRixRQUFBRyxXQUFBLE9BQUFILEVBQ0EsSUFBQUksRUFBQVgsT0FBQVksT0FBQSxNQUdBLEdBRkExQixFQUFBa0IsRUFBQU8sR0FDQVgsT0FBQUMsZUFBQVUsRUFBQSxXQUF5Q1QsWUFBQSxFQUFBSyxVQUN6QyxFQUFBRSxHQUFBLGlCQUFBRixFQUFBLFFBQUFNLEtBQUFOLEVBQUFyQixFQUFBVSxFQUFBZSxFQUFBRSxFQUFBLFNBQUFBLEdBQWdILE9BQUFOLEVBQUFNLElBQXFCQyxLQUFBLEtBQUFELElBQ3JJLE9BQUFGLEdBSUF6QixFQUFBNkIsRUFBQSxTQUFBMUIsR0FDQSxJQUFBUyxFQUFBVCxLQUFBcUIsV0FDQSxXQUEyQixPQUFBckIsRUFBQSxTQUMzQixXQUFpQyxPQUFBQSxHQUVqQyxPQURBSCxFQUFBVSxFQUFBRSxFQUFBLElBQUFBLEdBQ0FBLEdBSUFaLEVBQUFhLEVBQUEsU0FBQWlCLEVBQUFDLEdBQXNELE9BQUFqQixPQUFBa0IsVUFBQUMsZUFBQTFCLEtBQUF1QixFQUFBQyxJQUd0RC9CLEVBQUFrQyxFQUFBLEdBSUFsQyxJQUFBbUMsRUFBQSxrQ0NsRkFuQyxFQUFBa0IsRUFBQWtCLEdBQUFwQyxFQUFBVSxFQUFBMEIsRUFBQSwwQkFBQUMsSUFBQSxJQUNBQyxFQURBQyxFQUFBLEVBRUFDLEVBQUEsRUFDTyxTQUFBSCxJQUNQQyxFQUFBRyxTQUFBQyxjQUFBLGFBRUEsSUFEQSxJQUFBQyxFQUFBRixTQUFBRyx1QkFBQSxrQkFDQXhDLEVBQUEsRUFBbUJBLEVBQUF1QyxFQUFBRSxPQUFpQnpDLElBQ3BDdUMsRUFBQXZDLEdBQUEwQyxHQUFBMUMsRUFBQTJDLFdBQ0FKLEVBQUF2QyxHQUFBNEMsaUJBQUEsbUJBRUFDLEVBREFDLE1BQUFDLE9BQ0FMLE1BS0EsU0FBQUcsRUFBQUUsR0FDQVgsRUFBQSxJQUFBRCxFQUFBWSxHQUFBWCxFQUNBRixFQUFBYyxNQUFBQyxVQUFBLDhCQUFBYixFQUFBLE9BQ0FELEVBQUFZLGlDQ2xCQW5ELEVBQUFrQixFQUFBa0IsR0FBQXBDLEVBQUFVLEVBQUEwQixFQUFBLGlDQUFBa0IsSUFBQSxJQVlBQyxFQUtPLFNBQUFELElBQ1BFLEVBQUF2QyxJQUFBLDRMQUtBLFNBQUF3QyxHQWNBLElBYkEsSUFBQUMsRUFBQUQsRUFBQUMsU0FDQUMsRUFBQWxCLFNBQUFtQixlQUFBLFdBQ0FDLEVBQUEsV0FDQSxJQUFBQyxFQUFBSixFQUFBSyxNQUFBM0QsR0FFQTRELEVBQUEsY0FEQSw4Q0FBQVAsRUFBQUMsU0FBQUssTUFBQTNELEdBQUE2RCxNQUFBLGVBQ0EsVUFBQUgsRUFBQW5ELEtBQUEsT0FDQXVELEVBQUF6QixTQUFBMEIsY0FBQSxPQUNBRCxFQUFBRSxVQUFBLE9BQ0FGLEVBQUFHLFFBQUEsV0FVQSxJQUFBQyxJQVYyQ1IsRUFXM0NTLFFBQUFDLElBQUFGLEVBQUEzRCxPQVZBdUQsRUFBQU8sVUFBQVQsRUFDQSxNQUFBTCxHQUNBQSxFQUFBZSxZQUFBUixJQUVBOUQsRUFBQSxFQUF1QkEsRUFBQXNELEVBQUFpQixXQUF5QnZFLElBQ2hEeUQsT0F6QkEsU0FBQU4sR0FDQUEsSUFBQSx5QkFDQUEsSUFBQSxpQkFGQSxDQUdDQSxNQUFBLHlFQ2hCRHZELEVBQUFrQixFQUFBa0IsR0FBQSxJQUFBd0MsRUFBQTVFLEVBQUEsR0FBQTZFLEVBQUE3RSxFQUFBLEdBU0EsU0FBQThFLElBQ0F0QixFQUFBLFlBQUF1QixLQUFBLGlDQUNRakUsT0FBQThELEVBQUEsTUFBQTlELEdBQ0FBLE9BQUErRCxFQUFBLGFBQUEvRCxLQUVSMkIsU0FBQW1CLGVBQUEsU0FBQWEsVUFBQSxNQVhBakIsRUFBQSxXQUNBc0IsSUFDQXJDLFNBQUFtQixlQUFBLFNBQUFTLFFBQUEsV0FBNERTLEtBQzVEckMsU0FBQW1CLGVBQUEsYUFBQVMsUUFBQSxXQVVBLElBQ0FXLEtBQUF2QyxTQUFBbUIsZUFBQSxnQkFDQXZDLE1BQUEsR0FDQTJELEVBQUFDLFNBWkF4QyxTQUFBbUIsZUFBQSxlQUFBUyxRQUFBLFdBZUFiLEVBQUEsWUFBQXVCLEtBQUEsd0NBR0F0QyxTQUFBbUIsZUFBQSxTQUFBYSxVQUFBLHNEQUVBekUsRUFBUSxHQUNSQSxFQUFRIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwidmFyIHNlbGVjdGVkSW5kZXggPSAwO1xyXG52YXIgY2Fyb3VzZWw7XHJcbnZhciBhbmdsZSA9IDA7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgIGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbFwiKTtcclxuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcm91c2VsX19jZWxsXCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGlzdFtpXS5pZCA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgICBsaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBldiA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgcm90YXRlQ2Fyb3VzZWwoZXYuaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgO1xyXG59XHJcbmZ1bmN0aW9uIHJvdGF0ZUNhcm91c2VsKHRhcmdldCkge1xyXG4gICAgYW5nbGUgPSAoc2VsZWN0ZWRJbmRleCAtIHRhcmdldCkgKiAyMCArIGFuZ2xlO1xyXG4gICAgY2Fyb3VzZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVaKC04ODBweCkgcm90YXRlWShcIiArIGFuZ2xlICsgXCJkZWcpXCI7XHJcbiAgICBzZWxlY3RlZEluZGV4ID0gdGFyZ2V0O1xyXG59XHJcbiIsInZhciBHYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZShuYW1lLCBpZCwgdGh1bWJuYWlsLCBsYXVuY2hlciwgbGF1bmNoZXJJRCwgaXNJbnN0YWxsZWQsIGxvY2FsUGF0aCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMudGh1bWJuYWlsID0gdGh1bWJuYWlsO1xyXG4gICAgICAgIHRoaXMubGF1bmNoZXIgPSBsYXVuY2hlcjtcclxuICAgICAgICB0aGlzLmxhdW5jaGVySUQgPSBsYXVuY2hlcklEO1xyXG4gICAgICAgIHRoaXMuaXNJbnN0YWxsZWQgPSBpc0luc3RhbGxlZDtcclxuICAgICAgICB0aGlzLmxvY2FsUGF0aCA9IGxvY2FsUGF0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBHYW1lO1xyXG59KCkpO1xyXG52YXIgbGF1bmNoZXI7XHJcbihmdW5jdGlvbiAobGF1bmNoZXIpIHtcclxuICAgIGxhdW5jaGVyW2xhdW5jaGVyW1wiTG9jYWxPbmx5XCJdID0gMF0gPSBcIkxvY2FsT25seVwiO1xyXG4gICAgbGF1bmNoZXJbbGF1bmNoZXJbXCJTdGVhbVwiXSA9IDFdID0gXCJTdGVhbVwiO1xyXG59KShsYXVuY2hlciB8fCAobGF1bmNoZXIgPSB7fSkpO1xyXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVHcmlkKCkge1xyXG4gICAgJC5nZXQoXCJodHRwczovL2FwaS5zdGVhbXBvd2VyZWQuY29tL0lQbGF5ZXJTZXJ2aWNlL0dldE93bmVkR2FtZXMvdjEvXCIgK1xyXG4gICAgICAgIFwiP2tleT03QzIxOEU4RDEzNDdDM0NENkNCODExN0U1RUQ1MzNCQ1wiICtcclxuICAgICAgICBcIiZzdGVhbWlkPTc2NTYxMTk4MjUwMjIzMTc0XCIgK1xyXG4gICAgICAgIFwiJmluY2x1ZGVfYXBwaW5mbz0xXCIgK1xyXG4gICAgICAgIFwiJmluY2x1ZGVfcGxheWVkX2ZyZWVfZ2FtZXM9MVwiICtcclxuICAgICAgICBcIiZhcHBpZHNfZmlsdGVyPVwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHZhciByZXNwb25zZSA9IGRhdGEucmVzcG9uc2U7XHJcbiAgICAgICAgdmFyIGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpYnJhcnlcIik7XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBnYW1lID0gcmVzcG9uc2UuZ2FtZXNbaV07XHJcbiAgICAgICAgICAgIHZhciB0aHVtYm5haWwgPSBcImh0dHBzOi8vc3RlYW1jZG4tYS5ha2FtYWloZC5uZXQvc3RlYW0vYXBwcy9cIiArIGRhdGEucmVzcG9uc2UuZ2FtZXNbaV0uYXBwaWQgKyBcIi9oZWFkZXIuanBnXCI7XHJcbiAgICAgICAgICAgIHZhciBncmlkSHRtbCA9IFwiPGltZyBzcmM9J1wiICsgdGh1bWJuYWlsICsgXCInLz4gPHA+XCIgKyBnYW1lLm5hbWUgKyBcIjwvcD5cIjtcclxuICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiZ2FtZVwiO1xyXG4gICAgICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IG9uR2FtZUNsaWNrKGdhbWUpOyB9O1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGdyaWRIdG1sO1xyXG4gICAgICAgICAgICBpZiAoZ3JpZCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzcG9uc2UuZ2FtZV9jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIF9sb29wXzEoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBvbkdhbWVDbGljayhnYW1lQ2xpY2tlZCkge1xyXG4gICAgY29uc29sZS5sb2coZ2FtZUNsaWNrZWQubmFtZSk7XHJcbn1cclxuIiwiLy8gaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiOyAvL1VzaW5nIGdsb2JhbCBzY29wZSBqcXVlcnkgaW5zdGVhZCBiZWFjYXVzZSBpdCBtYWtlIGEgaHVnZSBmaWxlIGlmIHdlIHVzZSB0aGlzLlxyXG5pbXBvcnQgeyBzZXR1cCB9IGZyb20gXCIuL0Nhcm91c2VsXCI7XHJcbmltcG9ydCB7IHBvcHVsYXRlR3JpZCB9IGZyb20gXCIuL0xpYnJhcnlcIjtcclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBob21lKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IGhvbWUoKTsgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7IG9wZW5TZWFyY2goKTsgfTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3NCdG5cIikub25jbGljayA9IGZ1bmN0aW9uICgpIHsgb3BlblNldHRpbmdzKCk7IH07XHJcbn0pO1xyXG5mdW5jdGlvbiBob21lKCkge1xyXG4gICAgJChcIiNjb250ZW50XCIpLmxvYWQoXCJmcmFnbWVudHMvaG9tZS5odG1sXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXR1cCgpO1xyXG4gICAgICAgIHBvcHVsYXRlR3JpZCgpO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLmlubmVySFRNTCA9IFwiRUFVXCI7XHJcbn1cclxuZnVuY3Rpb24gb3BlblNlYXJjaCgpIHtcclxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIik7XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBpbnB1dC5mb2N1cygpO1xyXG59XHJcbmZ1bmN0aW9uIG9wZW5TZXR0aW5ncygpIHtcclxuICAgICQoXCIjY29udGVudFwiKS5sb2FkKFwiZnJhZ21lbnRzL3NldHRpbmdzLmh0bWxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vRG8gdGhpbmdzIHdoZW4gdGhlIHNldHRpbmdzIGhhcyBiZWVuIGxvYWRlZC5cclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS5pbm5lckhUTUwgPSBcIjxpIGNsYXNzPSdpY29uIGZhcyBmYS1hcnJvdy1sZWZ0Jz48L2k+ICBTZXR0aW5nc1wiO1xyXG59XHJcbnJlcXVpcmUoXCIuL0xpYnJhcnlcIik7XHJcbnJlcXVpcmUoXCIuL0Nhcm91c2VsXCIpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9