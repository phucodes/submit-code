webpackJsonp([9],{"9j4c":function(t,e,a){"use strict";var i=a("rJ5C"),n=a.n(i);e.a={methods:{handleScroll:function(t){console.log("Scrolled!");var e=t.deltaY,a=["/people-first","/people-second","people-third"],i=this.$route.path,n=a.indexOf(i);a.includes(i,0)&&(console.log("yeah"),e<0&&(n-=1,this.$router.push(a[n])),n+=1,this.$router.push(a[n]))}},created:function(){window.addEventListener("wheel",this.handleScroll)},destroyed:function(){window.removeEventListener("wheel",this.handleScroll)},name:"card-template",data:function(){return{infos:n.a}}}},Z1fD:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".navigation[data-v-7e722b0c]{width:45%;text-align:center;margin:0 auto}.arrow[data-v-7e722b0c]{border:solid #494949;border-width:0 3px 3px 0;display:inline-block;padding:5px;margin:0 5px 2px;-webkit-transition:.5s ease-in-out;transition:.5s ease-in-out}.navigation[data-v-7e722b0c]:hover{-webkit-transform:scale(2);transform:scale(2)}",""])},dayu:function(t,e,a){var i=a("Z1fD");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("61e54fa8",i,!1,{sourceMap:!1})},r8D2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("9j4c"),n=a("yorX"),o=!1;var s=function(t){o||a("dayu")},r=a("VU/8")(i.a,n.a,!1,s,"data-v-7e722b0c",null);r.options.__file="pages\\mission-spread.vue",e.default=r.exports},rJ5C:function(t,e){t.exports=[{title:"Sputnik I",text:"First man-made sattelite",nationality:"Soviet Union",url:"https://upload.wikimedia.org/wikipedia/commons/b/b0/Sputnik_1.jpg",year:"4 October 1957"},{title:"Sputnik II",text:"Laika Voyage",nationality:"Soviet Union",url:"https://media.newyorker.com/photos/59fb65a52d0aaf4a81445779/master/w_727,c_limit/Wellerstein-Laika.jpg",year:"3 November 1957"},{title:"Vostok 6",text:"First Woman In Space",nationality:"Soviet Union",url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vostok_6_capsule_on_display%2C_2016.jpg/1920px-Vostok_6_capsule_on_display%2C_2016.jpg",year:"16 June 1963",link:"https://phudinhn.github.io/Launch-Code-HTML-Me-Something/"}]},yorX:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"card-template"},on:{scroll:t.handleScroll}},[a("h1",[t._v("Missions and Launches")]),a("nuxt-link",{staticClass:"return",attrs:{to:"people"}},[t._v("Return to main page")]),a("div",{staticClass:"card-container"},t._l(t.infos.slice(0,3),function(e){return a("ul",{key:e.id,staticClass:"card"},[a("li",[a("a",{staticClass:"character-handlings",attrs:{href:e.link}},[a("span",{staticClass:"photo"},[a("img",{staticClass:"photo_size",attrs:{src:e.url,alt:"image"}})]),a("h2",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.text))]),a("p",[t._v(t._s(e.year))]),a("p",[t._v("Nationality: "+t._s(e.nationality))])])])])}))],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n}});