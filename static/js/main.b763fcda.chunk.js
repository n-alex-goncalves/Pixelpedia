(this.webpackJsonppixelpedia=this.webpackJsonppixelpedia||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var c=a(21),n=a.n(c),s=a(29),i=a(123),o=a(121),r=a(116),l=a(120),d=a(117),h=(a(74),a(75),a(2)),j=a.n(h),m=a(42),u=a.n(m),b=a(14),g=a(52),O=a.n(g),p=a(4),x={isSignedIn:!1},f={signInFlow:"popup",signInSuccessUrl:"/",signInOptions:[b.a.auth.EmailAuthProvider.PROVIDER_ID,b.a.auth.GoogleAuthProvider.PROVIDER_ID,b.a.auth.TwitterAuthProvider.PROVIDER_ID,b.a.auth.FacebookAuthProvider.PROVIDER_ID,b.a.auth.GithubAuthProvider.PROVIDER_ID]};b.a.initializeApp({apiKey:"AIzaSyD-3d0cBNN33wQ5JvUsQfBB9ERDMJ-kkqI",authDomain:"pixelpedia-fa44c.firebaseapp.com",projectId:"pixelpedia-fa44c",storageBucket:"pixelpedia-fa44c.appspot.com",messagingSenderId:"30869197092",appId:"1:30869197092:web:bc6eb12e71843cd45723b1"});var I=function(){var e=Object(h.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],n=function(){return c(!1)},m=function(){return c(!0)};console.log("Theme",localStorage.getItem("theme"));var g=!0;"false"==localStorage.getItem("theme")&&(g=!1);var I=j.a.useState(g),v=Object(s.a)(I,2),y=v[0],k=v[1];function w(){k((function(e){return!e})),localStorage.setItem("theme",!y),document.getElementById("theme").className=y?"light-theme":"dark-theme"}console.log("Dark theme is ",y),document.getElementById("theme").className=y?"dark-theme":"light-theme";var S=Object(h.useState)(null),N=Object(s.a)(S,2),D=(N[0],N[1]);return Object(h.useEffect)((function(){var e=b.a.auth().onAuthStateChanged((function(e){x.isSignedIn=!!e,D(e),console.log(e)}));return function(){x.isSignedIn||e()}}),[]),x.isSignedIn?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:y?"dark-theme":"light-theme",children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(i.a.Brand,{href:"#home",style:{color:y?"white":"#202020",marginLeft:"0.8rem"},children:Object(p.jsx)("h3",{children:"pixelpedia"})}),Object(p.jsx)(o.a,{className:"mr-auto"}),Object(p.jsx)(O.a,{checked:!y,onstyle:"outline-secondary",offstyle:"outline-warning",onlabel:"\u2600\ufe0f",offlabel:"\ud83c\udf1a",onChange:w}),Object(p.jsxs)(r.a,{className:"shmancy",variant:"outline-info",onClick:m,children:["Signed in as ",b.a.auth().currentUser.displayName]})]})}),Object(p.jsxs)(l.a,{show:a,onHide:n,style:{backgroundcolor:y?"white":"black"},children:[Object(p.jsx)(l.a.Header,{closeButton:!0,children:Object(p.jsx)(l.a.Title,{className:"shmancy",children:"Profile"})}),Object(p.jsxs)(l.a.Body,{children:[Object(p.jsxs)(d.a,{children:[Object(p.jsxs)("h3",{style:{textAlign:"center"},children:["Hey, ",b.a.auth().currentUser.displayName," \ud83d\udc4b"]}),Object(p.jsx)("br",{})]}),Object(p.jsxs)(d.a,{style:{display:"flex",justifyContent:"center"},children:[Object(p.jsx)(r.a,{className:"shmancy",variant:"outline-danger",onClick:function(){b.a.auth().signOut(),x.isSignedIn=!1},children:"Sign Out"}),Object(p.jsx)(r.a,{className:"shmancy",variant:"outline-info",href:"https://docs.google.com/forms/d/e/1FAIpQLSf4OcdHdulTPqXFh_A56PoO4Je_VxkNKMEIi34wrljER0EorQ/viewform",target:"_blank",children:"Submit a Photo Spot"})]})]})]})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:y?"dark-theme":"#202020",children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(i.a.Brand,{className:"shmancy",href:"#home",style:{color:y?"white":"black",marginLeft:"0.8rem"},children:Object(p.jsx)("h3",{children:"pixelpedia"})}),Object(p.jsx)(o.a,{className:"mr-auto"}),Object(p.jsx)(O.a,{checked:!y,onstyle:"outline-secondary",offstyle:"outline-warning",onlabel:"\u2600\ufe0f",offlabel:"\ud83c\udf1a",onChange:w}),Object(p.jsx)(r.a,{className:"shmancy",variant:"outline-info",onClick:m,children:"Sign In"})]})}),Object(p.jsxs)(l.a,{show:a,onHide:n,children:[Object(p.jsx)(l.a.Header,{closeButton:!0,children:Object(p.jsx)(l.a.Title,{className:"shmancy",children:"Sign In"})}),Object(p.jsx)(l.a.Body,{children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)("h2",{className:"shmancy",style:{textAlign:"center"},children:"Welcome to pixelpedia"}),Object(p.jsx)(u.a,{uiConfig:f,firebaseAuth:b.a.auth()})]})})]})]})},v=a(31),y=a.n(v),k=a(69),w=a(118),S=a(119),N=a(122);y.a.workerClass=k.a,y.a.accessToken="pk.eyJ1IjoianVuZWFkazI3IiwiYSI6ImNrbXpvcml4ajA0OXkydm8yODFmN3dtemgifQ.YacZnbSOmX93UZJMH7WLKg";var D=function(){var e=Object(h.useRef)(),t=Object(h.useState)(-79.0541),a=Object(s.a)(t,2),c=a[0],i=a[1],o=Object(h.useState)(35.9132),l=Object(s.a)(o,2),j=l[0],m=l[1],u=Object(h.useState)(12.15),b=Object(s.a)(u,2),g=b[0],O=b[1];Object(h.useEffect)((function(){var t="mapbox://styles/juneadk27/cknou38682ur817mztigvh1ux";"false"==localStorage.getItem("theme")&&(t="mapbox://styles/juneadk27/ckn10m3z11mxg17loh9k451jr");var a=new y.a.Map({container:e.current,style:t,center:[c,j],zoom:g}),s=new MapboxGeocoder({accessToken:y.a.accessToken,mapboxgl:y.a,marker:!1,placeholder:"Find photo spots around...",bbox:[-79.5657,35.4682,-77.2503,36.2836],proximity:{longitude:-79.055847,latitude:35.9132}});return a.addControl(s),a.on("load",(function(){a.addSource("single-point",{type:"geojson",data:{type:"FeatureCollection",features:[]}}),a.addLayer({id:"point",source:"single-point",type:"circle",paint:{"circle-radius":10,"circle-color":"#448ee4"}})})),a.on("click",(function(e){var t=a.queryRenderedFeatures(e.point,{layers:["pixelpediatest"]});if(t.length){var c=t[0],s=c.geometry.coordinates[1],i=c.geometry.coordinates[0];console.log("FEATURE",c);var o=document.createElement("div");n.a.render(Object(p.jsx)(d.a,{children:Object(p.jsxs)(w.a,{children:[Object(p.jsxs)(S.a,{children:[Object(p.jsx)("h3",{children:c.properties.Name}),Object(p.jsx)("p",{children:c.properties.Description}),Object(p.jsxs)(r.a,{variant:"dark",block:!0,href:"https://maps.google.com/?q="+s+","+i,target:"_blank",children:[Object(p.jsxs)("svg",{"aria-hidden":"true",class:"native svg-icon iconGoogle",width:"18",height:"18",viewBox:"0 0 18 18",children:[Object(p.jsx)("path",{d:"M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.66-.15-1.18z",fill:"#4285F4"}),Object(p.jsx)("path",{d:"M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z",fill:"#34A853"}),Object(p.jsx)("path",{d:"M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z",fill:"#FBBC05"}),Object(p.jsx)("path",{d:"M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 001.83 5.4L4.5 7.49a4.77 4.77 0 014.48-3.3z",fill:"#EA4335"})]}),"View on Google Maps"]})]}),Object(p.jsx)(S.a,{children:Object(p.jsxs)(N.a,{fade:!0,children:[Object(p.jsx)(N.a.Item,{children:Object(p.jsx)("img",{className:"d-block width-100",src:c.properties.Img,alt:"First slide"})}),Object(p.jsx)(N.a.Item,{children:Object(p.jsx)("img",{className:"d-block width-100",src:"https://i.pinimg.com/originals/8f/20/91/8f209105e938d26a19780f97dfc825b8.jpg",alt:"Second slide"})}),Object(p.jsx)(N.a.Item,{children:Object(p.jsx)("img",{className:"d-block width-100",src:"https://www.unc.edu/wp-content/uploads/2019/04/008919_BellTowerClimb0178.jpg",alt:"Third slide"})})]})})]})}),o);var l=!0;"false"==localStorage.getItem("theme")&&(l=!1);new y.a.Popup({offset:[0,-15],className:l?"dark":"light",id:"mapboxPopupID"}).setLngLat(c.geometry.coordinates).setDOMContent(o).addTo(a)}})),new MutationObserver((function(e,t){console.log("Mutations:",e),console.log("Observer:",t),e.forEach((function(e){"class"===e.attributeName&&(console.log(e.target.className),"light-theme"==e.target.className?a.setStyle("mapbox://styles/juneadk27/ckn10m3z11mxg17loh9k451jr"):a.setStyle("mapbox://styles/juneadk27/cknou38682ur817mztigvh1ux"))}))})).observe(x,{attributes:!0}),a.on("move",(function(){i(a.getCenter().lng.toFixed(4)),m(a.getCenter().lat.toFixed(4)),O(a.getZoom().toFixed(2))})),function(){return a.remove()}}),[]);var x=document.getElementById("theme");return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"sidebar",children:["Longitude: ",c," | Latitude: ",j," | Zoom: ",g]}),Object(p.jsx)("div",{className:"map-container",ref:e})]})},E=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(j.a.Fragment,{children:Object(p.jsx)(D,{})})})};b.a.auth.EmailAuthProvider.PROVIDER_ID,b.a.auth.GoogleAuthProvider.PROVIDER_ID,b.a.auth.TwitterAuthProvider.PROVIDER_ID,b.a.auth.FacebookAuthProvider.PROVIDER_ID,b.a.auth.GithubAuthProvider.PROVIDER_ID;n.a.render(Object(p.jsx)(I,{}),document.getElementById("nav")),n.a.render(Object(p.jsx)(E,{}),document.getElementById("map"))}},[[114,1,2]]]);
//# sourceMappingURL=main.b763fcda.chunk.js.map