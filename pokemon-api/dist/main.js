(()=>{function e(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var c=e.apply(t,r);function i(e){n(c,o,a,i,u,"next",e)}function u(e){n(c,o,a,i,u,"throw",e)}i(void 0)}))}}var o,a=function(){var e=r(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d();case 3:return t=e.sent,document.getElementById("poke-id").innerText=t.id,document.getElementById("poke-name").innerText=t.name,document.getElementById("height").innerText=t.height,document.getElementById("weight").innerText=t.weight,document.getElementById("abilities").innerText=t.abilities,document.getElementById("poke-img").src=t.front_pic,n=t.types,c(n),e.abrupt("return",t);case 15:e.prev=15,e.t0=e.catch(0),document.getElementById("not-found-msg").style="display: block";case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),c=function(t){var n,r=e(t);try{for(r.s();!(n=r.n()).done;){type=n.value;var o=u(type);o.addEventListener("click",g),document.getElementById("types-list").appendChild(o)}}catch(e){r.e(e)}finally{r.f()}},i=function(t){var n,r=e(t);try{for(r.s();!(n=r.n()).done;){Pokémon=n.value;var o=u(Pokémon);o.addEventListener("click",s),document.getElementById("pokemon-list").appendChild(o)}}catch(e){r.e(e)}finally{r.f()}},u=function(e){var t=document.createElement("button");return t.setAttribute("class","list-group-item list-group-item-action"),t.setAttribute("type","button"),t.innerText=e,t},s=function(e){var t=e.target;f(),document.getElementById("search-inpt").value=t.innerText,a(),document.getElementById("data").style="display: block",document.getElementById("pokemon-list-opener").style="display: none"},d=function(){var e=r(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("search-inpt").value,e.next=3,axios.get("http://localhost:8080/pokemon/get/".concat(t,"/"),{headers:{"Access-Control-Allow-Origin":"*",username:"".concat(o)}});case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,document.getElementById("poke-img").src=t.back_pic;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,document.getElementById("poke-img").src=t.front_pic;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=r(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(),e.next=3,a();case 3:if(!e.sent){e.next=5;break}document.getElementById("data").style="display: flex;";case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){document.getElementById("not-found-msg").style="display: none",document.getElementById("data").style="display: none",document.getElementById("types-list").innerHTML="",document.getElementById("pokemon-list").innerHTML=""},y=function(){var e=r(regeneratorRuntime.mark((function e(t){var n,r,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.innerText,e.next=3,axios.get("https://pokeapi.co/api/v2/type/".concat(n,"/"));case 3:return r=e.sent,o=r.data,a=o.pokemon.map((function(e){return e.pokemon.name})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=r(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,document.getElementById("pokemon-list").innerHTML="",e.t0=i,e.next=5,y(n);case 5:e.t1=e.sent,(0,e.t0)(e.t1),document.getElementById("data").style="display: none",document.getElementById("pokemon-list-opener").style="display: block";case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=r(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),o=document.getElementById("username-input").value,document.getElementById("username").innerText+=o,document.getElementById("signing-form").classList.remove("d-flex"),document.getElementById("signing-form").classList.add("d-none"),document.getElementById("sign-out-btn").classList.remove("d-none"),document.getElementById("sign-out-btn").classList.add(["d-flex","align-self-end","p-5"]),e.next=9,axios.post("http://localhost:8080/user/signin",{},{headers:{username:"".concat(o)}});case 9:n=e.sent,console.log(n.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("poke-id").innerText,e.t0=axios,e.t1="http://localhost:8080/pokemon/catch/".concat(t),e.next=5,d();case 5:return e.t2=e.sent,e.t3={pokemon:e.t2},e.t4={headers:{username:"".concat(o)}},e.next=10,e.t0.put.call(e.t0,e.t1,e.t3,e.t4);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("poke-id").innerText,e.next=3,axios.delete("http://localhost:8080/pokemon/release/".concat(t),{headers:{username:"".concat(o),Accept:"application/json",Authorization:"Bearer <token_here>"}});case 3:document.getElementById("my-poke-list").innerHTML="";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var t=r(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,axios.get("http://localhost:8080/pokemon/",{headers:{username:"".concat(o)}});case 2:n=t.sent,console.log(n.data),r=e(n.data);try{for(r.s();!(a=r.n()).done;)pokemon=a.value,(c=u(pokemon.name)).addEventListener("click",s),document.getElementById("my-poke-list").appendChild(c)}catch(e){r.e(e)}finally{r.f()}case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();document.getElementById("search-btn").addEventListener("click",p),document.getElementById("poke-img").addEventListener("mouseover",m),document.getElementById("poke-img").addEventListener("mouseout",l),document.getElementById("close-msg").addEventListener("click",(function(){document.getElementById("not-found-msg").style="display: none"})),document.getElementById("search-inpt").addEventListener("input",f),document.getElementById("close-pok-list-btn").addEventListener("click",(function(){document.getElementById("pokemon-list-opener").style="display: none",document.getElementById("data").style="display: block"})),document.getElementById("submit-btn").addEventListener("click",v),document.getElementById("catch-btn").addEventListener("click",h),document.getElementById("release-btn").addEventListener("click",E),document.getElementById("my-pokemons-btn").addEventListener("click",k),document.getElementById("sign-out-btn").addEventListener("click",(function(){o="",document.getElementById("username").innerText=o,document.getElementById("signing-form").style="display: flex"}))})();