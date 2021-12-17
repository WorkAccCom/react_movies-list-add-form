(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{11:function(t){t.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},18:function(t,e,i){},19:function(t,e,i){},20:function(t,e,i){},22:function(t,e,i){},23:function(t,e,i){"use strict";i.r(e);var a=i(9),s=i.n(a),n=(i(17),i(2)),c=i(12),o=i(4),r=i(5),l=i(7),d=i(6),m=i(1),h=i.n(m),j=(i(18),i(19),i(20),i(0)),b=function(t){var e=t.title,i=t.description,a=t.imgUrl,s=t.imdbUrl;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-image",children:Object(j.jsx)("figure",{className:"image is-4by3",children:Object(j.jsx)("img",{src:a,alt:"Film logo"})})}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsxs)("div",{className:"media",children:[Object(j.jsx)("div",{className:"media-left",children:Object(j.jsx)("figure",{className:"image is-48x48",children:Object(j.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(j.jsx)("div",{className:"media-content",children:Object(j.jsx)("p",{className:"title is-8",children:e})})]}),Object(j.jsxs)("div",{className:"content",children:[i,Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:s,children:"IMDB"})]})]})]})},p=function(t){var e=t.movies;return Object(j.jsx)("div",{className:"movies",children:e.map((function(t){return Object(j.jsx)(b,Object(n.a)({},t),t.imdbId)}))})},u=i(3),g=(i(22),function(t){Object(l.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(o.a)(this,i);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""},t.addData=function(e){var i=e.target,a=i.name,s=i.value;t.setState((function(t){return Object(n.a)(Object(n.a)({},t),{},Object(u.a)({},a,s))}))},t.submitForm=function(e){e.preventDefault(),t.props.movieAdder(t.state),t.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})},t}return Object(r.a)(i,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.submitForm,className:"add-movie",children:[Object(j.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.addData,placeholder:"Title",className:"add-movie__input"}),Object(j.jsx)("input",{type:"text",name:"description",value:this.state.description,onChange:this.addData,placeholder:"Description",className:"add-movie__input"}),Object(j.jsx)("input",{type:"text",name:"imgUrl",value:this.state.imgUrl,onChange:this.addData,placeholder:"Img URL",className:"add-movie__input"}),Object(j.jsx)("input",{type:"text",name:"imdbUrl",value:this.state.imdbUrl,onChange:this.addData,placeholder:"IMBD URL",className:"add-movie__input"}),Object(j.jsx)("input",{type:"text",name:"imdbId",value:this.state.imdbId,onChange:this.addData,placeholder:"IMBD Id",className:"add-movie__input add-movie__input--last"}),Object(j.jsx)("button",{type:"submit",className:"add-movie__submit-button",children:"Add movie"})]})}}]),i}(m.Component)),v=i(11),O=function(t){Object(l.a)(i,t);var e=Object(d.a)(i);function i(){var t;Object(o.a)(this,i);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={movies:v},t.addMovie=function(e){t.setState((function(t){return{movies:[].concat(Object(c.a)(t.movies),[Object(n.a)({},e)])}}))},t}return Object(r.a)(i,[{key:"render",value:function(){var t=this.state.movies;return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("div",{className:"page-content",children:Object(j.jsx)(p,{movies:t})}),Object(j.jsx)("div",{className:"sidebar",children:Object(j.jsx)(g,{movieAdder:this.addMovie})})]})}}]),i}(h.a.Component);s.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.77a4776a.chunk.js.map