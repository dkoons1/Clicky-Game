(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump"}]')},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),c=a.n(o),s=a(4),r=a(5),l=a(7),m=a(6),u=a(8);a(14);var g=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.shuffleDeck(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})),i.a.createElement("div",{className:"content"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Name:")," ",e.name),i.a.createElement("li",null,i.a.createElement("strong",null,"Occupation:")," ",e.occupation),i.a.createElement("li",null,i.a.createElement("strong",null,"Location:")," ",e.location))))};a(15);var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(16);var d=function(e){return i.a.createElement("h1",{className:"title"},e.children)},h=a(1);a(17);var k=function(e){return i.a.createElement("div",{className:"gameWrap"},i.a.createElement("h1",{className:"score"}," Score: ",e.score),i.a.createElement("h2",{className:"score"},e.message))},f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={friends:h,clickedFriends:[],score:0,message:""},a.shuffleDeck=function(e){var t=a.state.clickedFriends;return t.includes(e)?(a.setState({clickedFriends:[],score:0,message:"Oh no! You lost!"}),void console.log("you lose")):(t.push(e),12==t.length?(a.setState({score:0,clickedFriends:[],message:"Good job! You Won!"}),void console.log("winner")):(a.setState({friends:h,clickedFriends:t,score:a.state.score+1,message:""}),void h.sort((function(e,t){return.5-Math.random()}))))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(d,null,"Friends List"),i.a.createElement(k,{score:this.state.score,message:this.state.message}),this.state.friends.map((function(t){return i.a.createElement(g,{shuffleDeck:e.shuffleDeck,id:t.id,key:t.id,name:t.name,image:t.image,occupation:t.occupation,location:t.location})})))}}]),t}(n.Component);a(18);c.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.5496e342.chunk.js.map