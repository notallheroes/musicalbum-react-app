(this.webpackJsonpmusicswag=this.webpackJsonpmusicswag||[]).push([[0],{11:function(e,t,c){e.exports={button:"Generate_button__2tP17",description:"Generate_description__Xaj_-"}},22:function(e,t,c){e.exports={image:"Preloader_image__2dzk-"}},23:function(e,t,c){e.exports={headerPicture:"Header_headerPicture__3P0_K"}},29:function(e,t,c){},4:function(e,t,c){e.exports={music:"Music_music__2WTUK",musicWrapper:"Music_musicWrapper__2B97P",description:"Music_description__13DlI",name:"Music_name__3J1SO"}},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(20),i=c.n(r),n=(c(29),c(5)),o=c(24),u=c(2),d=c(21),l=(c(48),c.p+"static/media/sonyaPreview.32a16de6.png"),h=c.p+"static/media/sonya.9c5b9d4b.png",p=c.p+"static/media/gifka.3ddf3e78.gif",j=c(22),b=c.n(j),m=c(0),O=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:b.a.image,src:p})})},f=c(8),_=c.n(f),x=c(4),g=c.n(x),v=function(e){var t=e.music.image[1]["#text"],c=e.music.image[3]["#text"];return Object(m.jsxs)("div",{onClick:function(){e.dispatch({type:"ADD_COVER",coverFull:c,id:e.id})},className:g.a.music,children:[Object(m.jsx)("img",{className:g.a.poster,src:t}),Object(m.jsxs)("div",{className:g.a.description,children:[Object(m.jsx)("div",{className:g.a.name,children:e.music.name}),Object(m.jsx)("div",{className:g.a.artist,children:e.music.artist})]})]})},S=function(e){return 0==e.music.length?null:1==e.showIt?Object(m.jsx)("div",{className:g.a.musicWrapper,children:e.music.slice(0,5).map((function(t,c){return Object(m.jsx)(v,{music:e.music[c],dispatch:e.dispatch,id:e.id},"".concat(c,"-").concat(t.name))}))}):null};var w=function(e){var t=Object(s.useState)(""),c=Object(n.a)(t,2),a=c[0],r=c[1],i=function(e,t){var c=Object(s.useState)(e),a=Object(n.a)(c,2),r=a[0],i=a[1];return Object(s.useEffect)((function(){var c=setTimeout((function(){i(e)}),t);return function(){clearTimeout(c)}}),[e]),r}(a,500);return Object(s.useEffect)((function(){i?e.search(i):e.dispatch({type:"SEARCH_MUSIC_SUCCESS",payload:[]})}),[i]),1==e.showSearch?Object(m.jsxs)("div",{className:_.a.wrapperSearch,children:[Object(m.jsxs)("form",{className:_.a.form,children:[Object(m.jsx)("input",{className:_.a.search,placeholder:"Search for Album...",value:a,onChange:function(t){e.dispatch({type:"SEARCH_MUSIC_REQUEST"}),r(t.target.value),t.preventDefault()},onFocus:function(t){e.dispatch({type:"SHOW_IT"})},type:"text"}),Object(m.jsx)("div",{className:_.a.preloader,children:e.loading?Object(m.jsx)(O,{}):null})]}),Object(m.jsx)(S,{id:e.id,music:e.music,dispatch:e.dispatch,showIt:e.showIt})]}):null},C=c(23),N=c.n(C),I=c.p+"static/media/header.c588872b.png",y=function(e){return Object(m.jsx)("header",{children:Object(m.jsx)("img",{className:N.a.headerPicture,src:I})})},D=(c(50),c(51),c.p+"static/media/default.70798349.png"),E=function(e){return null==e.poster?Object(m.jsx)("div",{className:"box",children:Object(m.jsx)("img",{src:D})}):Object(m.jsx)("div",{className:"box",children:Object(m.jsx)("img",{src:e.poster})})},k=function(e){var t=function(t){return e.dispatch({type:"ADD_ACTIVE",id:t.currentTarget.id})};return Object(m.jsxs)("div",{className:1==e.photoDisabled?"picture pictureDisabled":"picture",children:[Object(m.jsx)("img",{className:"photo",src:e.photo}),Object(m.jsx)("div",{id:"0",onClick:t,className:0==e.id?"poster active first":"poster first",children:Object(m.jsx)(E,{poster:e.poster[0]})}),Object(m.jsx)("div",{id:"1",onClick:t,className:1==e.id?"poster active second":"poster second",children:Object(m.jsx)(E,{poster:e.poster[1]})}),Object(m.jsx)("div",{id:"2",onClick:t,className:2==e.id?"poster active third":"poster third",children:Object(m.jsx)(E,{poster:e.poster[2]})}),Object(m.jsx)("div",{id:"3",onClick:t,className:3==e.id?"poster active fourth":"poster fourth",children:Object(m.jsx)(E,{poster:e.poster[3]})})]})},A=c(6),T=c.n(A),F=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:T.a.created,children:["Created By: ",Object(m.jsx)("a",{className:T.a.peksfeks,href:"https://vk.com/peksfeks1",children:"@notallheroes"})]}),Object(m.jsxs)("div",{className:T.a.powered,children:["Powered ",Object(m.jsx)("a",{className:T.a.lastfm,href:"",children:"Last.fm"})]}),Object(m.jsxs)("div",{className:T.a.copyright,children:[Object(m.jsx)("div",{children:"\xae 2020 Sonya Grigorenko Swag"}),Object(m.jsx)("div",{children:"All rights reserved"})]})]})},H=c(11),P=c.n(H),R=function(e){var t=Object(s.useRef)(null);if(1==e.showButton){return setTimeout((function(){t.current.scrollIntoView({behavior:"smooth"})}),100),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{ref:t,onClick:function(){e.dispatch({type:"CHANGE_PHOTO"})},className:P.a.button,children:"Generate Swag"})})}return 1==e.showDescription?Object(m.jsx)("div",{className:P.a.description,children:"Don't forget to screenshot your swag. It will be discarded once you leave this page."}):null},U={photo:l,loading:!1,music:[],poster:[null,null,null,null],showIt:!0,showButton:!1,showDescription:!1,showSearch:!0,id:0,searchInput:null,photoDisabled:!1},B=function(e,t){switch(t.type){case"SEARCH_MUSIC_REQUEST":return Object(u.a)(Object(u.a)({},e),{},{loading:!0,showIt:!0});case"SEARCH_MUSIC_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{loading:!1,music:t.payload});case"ADD_COVER":function c(e){return null!=e}return Object(u.a)(Object(u.a)({},e),{},{poster:function(e,t){return e.splice(t.id,1,t.coverFull),Object(o.a)(e)}(e.poster,t),showIt:!1,showButton:(s=e.poster,a=e.showButton,!!s.every(c)||a)});case"ADD_ACTIVE":return Object(u.a)(Object(u.a)({},e),{},{id:t.id});case"SHOW_IT":return Object(u.a)(Object(u.a)({},e),{},{showIt:!0});case"CHANGE_PHOTO":return Object(u.a)(Object(u.a)({},e),{},{id:null,photo:h,showButton:!1,showDescription:!0,showSearch:!1,photoDisabled:!0});case"HANDLE_SEARCH":return Object(u.a)(Object(u.a)({},e),{},{searchInput:t.search});default:return e}var s,a};var M=function(){var e=Object(s.useReducer)(B,U),t=Object(n.a)(e,2),c=t[0],a=t[1],r=c.music,i=c.loading,o=c.photo,u=c.poster,l=c.id,h=c.showIt,p=c.showButton,j=c.showDescription,b=c.showSearch,O=c.searchInput,f=c.photoDisabled;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(y,{}),Object(m.jsx)(w,{search:function(e){d.get("http://ws.audioscrobbler.com/2.0/?method=album.search&album=".concat(e,"&api_key=40912a147e8e5c3f25851fca0618d4fb&format=json")).then((function(e){console.log(e),a({type:"SEARCH_MUSIC_SUCCESS",payload:e.data.results.albummatches.album})}))},loading:i,id:l,music:r,dispatch:a,showIt:h,showSearch:b,searchInput:O}),Object(m.jsx)(k,{dispatch:a,id:l,poster:u,photo:o,photoDisabled:f}),Object(m.jsx)(R,{showButton:p,showDescription:j,dispatch:a}),Object(m.jsx)(F,{})]})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),r(e),i(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),G()},6:function(e,t,c){e.exports={created:"Footer_created__2aEOm",peksfeks:"Footer_peksfeks__2z8yf",powered:"Footer_powered__2Usaf",lastfm:"Footer_lastfm__3KZXS",copyright:"Footer_copyright__3ZTfd"}},8:function(e,t,c){e.exports={wrapperSearch:"Search_wrapperSearch__arC4g",form:"Search_form__3Mfgt",search:"Search_search__37Yn-",button:"Search_button__glRy3",preloader:"Search_preloader__21O5p"}}},[[52,1,2]]]);
//# sourceMappingURL=main.1e953d51.chunk.js.map