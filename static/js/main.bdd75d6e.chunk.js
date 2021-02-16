(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{18:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(12),i=a.n(r),s=a(5),o=a.n(s),l=a(9),u=a(3),d=a(7),p=(a(18),a(0)),b=function(e){var t=e.currentSong,a=e.isPlaying;return Object(p.jsxs)("div",{className:"song-container",children:[Object(p.jsx)("img",{src:t.cover,alt:t.name,className:a?"img-rotate":null}),Object(p.jsx)("h2",{children:t.name}),Object(p.jsx)("h3",{children:t.artist})]})},j=a(6),h=a(4),m=function(e){var t=e.currentSong,a=e.isPlaying,c=e.setIsPlaying,r=e.audioRef,i=e.setSongInfo,s=e.songInfo,d=e.songs,b=e.setCurrentSong,m=e.setSongs;Object(n.useEffect)((function(){var e=d.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{active:!0}):Object(u.a)(Object(u.a)({},e),{},{active:!1})}));m(e)}),[t]);var f=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},g=function(){var e=Object(l.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=d.findIndex((function(e){return e.id===t.id})),"skip-forward"!==n){e.next=6;break}return e.next=4,b(d[(c+1)%d.length]);case 4:e.next=7;break;case 6:(c-1)%d.length===-1?b(d[d.length-1]):b(d[(c-1)%d.length]);case 7:a&&r.current.play();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(s.animationPercentage,"%)")};return Object(p.jsxs)("div",{className:"player",children:[Object(p.jsxs)("div",{className:"time-control",children:[Object(p.jsx)("p",{children:f(s.currentTime)}),Object(p.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],",").concat(t.color[1],")")},className:"track",children:[Object(p.jsx)("input",{min:0,max:s.duration||0,value:s.currentTime,type:"range",onChange:function(e){r.current.currentTime=e.target.value,i(Object(u.a)(Object(u.a)({},s),{},{currentTime:e.target.value}))}}),Object(p.jsx)("div",{style:v,className:"animate-track"})]}),Object(p.jsx)("p",{children:s.duration?f(s.duration):"00:00"})]}),Object(p.jsxs)("div",{className:"play-control",children:[Object(p.jsx)(j.a,{onClick:function(){return g("skip-back")},className:"skip-back",size:"2x",icon:h.a}),Object(p.jsx)(j.a,{onClick:function(){a?(r.current.pause(),c(!a)):(r.current.play(),c(!a))},className:"play",size:"2x",icon:a?h.d:h.e}),Object(p.jsx)(j.a,{onClick:function(){return g("skip-forward")},className:"skip-forward",size:"2x",icon:h.b})]})]})},f=function(e){var t=e.song,a=e.setCurrentSong,n=e.audioRef;return function(e,t){if(e){var a=t.current.play();void 0!==a&&a.then((function(e){t.current.play()}))}}(e.isPlaying,n),Object(p.jsxs)("div",{onClick:function(){a(t)},className:"library-song ".concat(t.active?"selected":null),children:[Object(p.jsx)("img",{src:t.cover,alt:t.name}),Object(p.jsxs)("div",{className:"song-description",children:[Object(p.jsx)("h3",{children:t.name}),Object(p.jsx)("h4",{children:t.artist})]})]})},g=function(e){var t=e.songs,a=e.setCurrentSong,n=e.audioRef,c=e.isPlaying,r=e.libraryStatus;return Object(p.jsxs)("div",{className:"library ".concat(r?"active-library":null),children:[Object(p.jsx)("h2",{children:"Library"}),Object(p.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(p.jsx)(f,{setCurrentSong:a,song:e,songs:t,audioRef:n,isPlaying:c},e.id)}))})]})},v=function(e){var t=e.libraryStatus,a=e.setLibraryStatus;return Object(p.jsxs)("nav",{children:[Object(p.jsx)("h1",{children:"Soulfully"}),Object(p.jsxs)("button",{onClick:function(){return a(!t)},children:[Object(p.jsx)(j.a,{icon:h.c})," ","Library"]})]})},O=a(27);var x=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"Obata Maa",cover:"https://i.ytimg.com/vi/57cZpp4sTmY/maxresdefault.jpg",artist:"Kasun Kalhara",audio:"https://ia803002.us.archive.org/7/items/obatamaaadarayakalabawabykasunkalhara/Obata_Maa_Adaraya_kala_Bawa_%28%E0%B6%94%E0%B6%B6%E0%B6%A7_%E0%B6%B8_%E0%B6%86%E0%B6%AF%E0%B6%BB%E0%B6%BA_%E0%B6%9A%E0%B6%BD_%E0%B6%B6%E0%B7%80_%E0%B6%B8%E0%B6%AD%E0%B6%BB%E0%B6%B8%29_-_By_Kasun_Kalhara.mp3",color:["#9F7C69","#B63E09"],id:Object(O.a)(),active:!1},{name:"Atheethaye Maa",cover:"https://i.ytimg.com/vi/57cZpp4sTmY/maxresdefault.jpg",artist:"Kasun Kalhara",audio:"https://www.topsinhalamp3.net/downloads/s25jfrnr5x15i/Atheethaye_Ma.mp3",color:["#9F7C69","#B63E09"],id:Object(O.a)(),active:!1}]};var y=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(x()),a=Object(d.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(c[0]),s=Object(d.a)(i,2),j=s[0],h=s[1],f=Object(n.useState)(!1),O=Object(d.a)(f,2),y=O[0],S=O[1],B=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),k=Object(d.a)(B,2),E=k[0],w=k[1],C=Object(n.useState)(!1),A=Object(d.a)(C,2),N=A[0],_=A[1],M=function(e){var t=e.target.currentTime,a=e.target.duration,n=Math.round(t),c=Math.round(a),r=Math.round(n/c*100);w(Object(u.a)(Object(u.a)({},E),{},{currentTime:t,duration:a,animationPercentage:r}))},P=function(){var t=Object(l.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.findIndex((function(e){return e.id===j.id})),t.next=3,h(c[(a+1)%c.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"App ".concat(N?"library-active":""),children:[Object(p.jsx)(v,{libraryStatus:N,setLibraryStatus:_}),Object(p.jsx)(g,{songs:c,setCurrentSong:h,audioRef:e,isPlaying:y,setSongs:r,currentSong:j,libraryStatus:N}),Object(p.jsx)(b,{currentSong:j,isPlaying:y}),Object(p.jsx)(m,{isPlaying:y,currentSong:j,setIsPlaying:S,songInfo:E,setSongInfo:w,audioRef:e,songs:c,setCurrentSong:h,setSongs:r}),Object(p.jsx)("audio",{onTimeUpdate:M,ref:e,src:j.audio,onLoadedMetadata:M,onEnded:P})]})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.bdd75d6e.chunk.js.map