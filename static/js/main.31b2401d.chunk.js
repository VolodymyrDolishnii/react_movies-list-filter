(this["webpackJsonpreact_movies-list-filter"]=this["webpackJsonpreact_movies-list-filter"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){"use strict";i.r(t);var s=i(3),a=i.n(s),n=(i(10),i(5)),c=i(1),l=(i(11),i(4)),r=(i(12),i(13),i(0)),o=function(e){var t=e.movie,i=t.imdbUrl,s=t.imgUrl,a=t.description,n=t.title;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:s,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:n})})]}),Object(r.jsxs)("div",{className:"content",children:[a,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:i,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},d=function(){var e=Object(c.useState)(""),t=Object(n.a)(e,2),i=t[0],s=t[1],a=l.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())||e.description.toLowerCase().includes(i.toLowerCase())}));return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsxs)("div",{className:"page-content",children:[Object(r.jsx)("div",{className:"search-bar",children:Object(r.jsx)("input",{id:"search-query",type:"text",className:"input-field",placeholder:"Search...",value:i,onChange:function(e){var t=e.target.value;s(t)}})}),a.length>0?Object(r.jsx)(m,{movies:a}):"Nothing found"]}),Object(r.jsx)("div",{className:"sidebar",children:"Sidebar will be here"})]})};a.a.render(Object(r.jsx)(d,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.31b2401d.chunk.js.map