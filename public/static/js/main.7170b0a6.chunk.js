(this.webpackJsonpsputnik=this.webpackJsonpsputnik||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.2810b0e6.png"},function(e,t,n){e.exports=n.p+"static/media/account.b52edd56.svg"},,,function(e,t,n){e.exports=n.p+"static/media/add.303fe227.svg"},function(e,t,n){e.exports=n.p+"static/media/menu.32118a56.svg"},function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(10),r=n.n(l),o=(n(18),n(3)),s=n(5),c=n(4),u=n(1),m=n(2),h=n(6),d=n(7),g=n.n(d),p=n(11),v=n.n(p),b=n(12),f=n.n(b),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).navToLogin=n.navToLogin.bind(Object(u.a)(n)),n.navToCrArt=n.navToCrArt.bind(Object(u.a)(n)),n.navToProfile=n.navToProfile.bind(Object(u.a)(n)),n.navToHome=n.navToHome.bind(Object(u.a)(n)),n.menutoggle=n.menutoggle.bind(Object(u.a)(n)),n.menuclose=n.menuclose.bind(Object(u.a)(n)),n.state={mmenu:!1},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"navToCrArt",value:function(){this.menuclose(),this.props.navTo("CrArt")}},{key:"navToHome",value:function(){this.menuclose(),this.props.navTo("home")}},{key:"navToProfile",value:function(){this.menuclose(),this.props.navTo("profile")}},{key:"navToLogin",value:function(){this.menuclose(),this.props.loginbtn()}},{key:"menutoggle",value:function(){var e=this;this.setState((function(t){return e.state.mmenu?{mmenu:!1}:{mmenu:!0}}))}},{key:"menuclose",value:function(){this.setState((function(){return{mmenu:!1}}))}}]),Object(m.a)(t,[{key:"render",value:function(){var e,t,n;return this.state.mmenu&&(e={transform:" translate(440px, -250px)",transitionDelay:"0.1s",display:"block"},t={transform:"translate(200px, -250px)",transitionDelay:"0s"},n={transform:"rotateZ(-90deg)"}),i.a.createElement("nav",null,i.a.createElement("img",{id:"menu",onClick:this.menutoggle,style:n,src:f.a,alt:""}),i.a.createElement("div",{className:"nav-con"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{id:"earth",src:g.a,alt:"logo"}),i.a.createElement("span",null,"SPUTNIK")),i.a.createElement("div",{className:"links",id:"menuj",style:e},i.a.createElement("img",{className:"CArtbtn",onClick:this.navToCrArt,src:v.a,alt:"+"}),i.a.createElement("li",{onClick:this.navToHome},"Home"),this.props.islogin?i.a.createElement("li",{className:"sbtn",onClick:this.navToProfile},"Profile"):i.a.createElement("li",{className:"logReg_btn sbtn",onClick:this.navToLogin},"Login/ Register"),this.props.islogin?i.a.createElement("div",{className:"userPic",style:{backgroundImage:"url(".concat(this.props.userPic,")")}}):null),i.a.createElement("div",{className:"linkss",id:"menubkg",style:t})))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).setreg=n.setreg.bind(Object(u.a)(n)),n.setlog=n.setlog.bind(Object(u.a)(n)),n.sendLogData=n.sendLogData.bind(Object(u.a)(n)),n.sendRegData=n.sendRegData.bind(Object(u.a)(n)),n.state={loc:"log"},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"sendLogData",value:function(){var e=document.getElementById("email").value,t=document.getElementById("pass").value;this.props.dologin(e,t)}},{key:"sendRegData",value:function(){var e=this,t=document.getElementById("email").value,n=document.getElementById("pass").value,a=document.getElementById("name").value;-1!==t.indexOf("@")&&-1!==t.indexOf(".")?n.length<8?alert("Password should be greater than 8 letters"):fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:a,email:t,password:n}})}).then((function(e){return e.json()})).then((function(t){t.user.token?(e.setlog(),alert("Registration Complete Now log in ")):t.errors&&alert(t.errors.body)})).catch((function(e){alert(e)})):alert("Invalid email ")}},{key:"setreg",value:function(){this.setState((function(){return{loc:"reg"}}))}},{key:"setlog",value:function(){this.setState((function(){return{loc:"log"}}))}}]),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"overlay",onClick:this.props.remLogReg}),i.a.createElement("div",{className:"logReg"},i.a.createElement("div",{className:"logNav"},i.a.createElement("span",{onClick:this.setlog,className:"log"===this.state.loc?"active log":"log"},"Login"),i.a.createElement("span",{onClick:this.setreg,className:"reg"===this.state.loc?"active reg ":"reg"},"Register")),"log"===this.state.loc?null:i.a.createElement("input",{id:"name",type:"text",placeholder:"Name"}),i.a.createElement("input",{id:"email",type:"text",placeholder:"Email"}),i.a.createElement("input",{id:"pass",type:"password",placeholder:"Password"}),"log"===this.state.loc?i.a.createElement("button",{className:"loginBtn",onClick:this.sendLogData},"Login"):i.a.createElement("button",{className:"regBtn",onClick:this.sendRegData},"Register")))}}]),t}(a.Component),j=n(8),O=n.n(j),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).click=n.click.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"click",value:function(){this.props.onArtClick(this.props.slug)}}]),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"article",onClick:this.click},i.a.createElement(C,{pic:this.props.pic,name:this.props.name}),i.a.createElement("br",null),i.a.createElement("div",{className:"body"},i.a.createElement("h1",null,this.props.title),i.a.createElement("p",null,this.props.text)))}}]),t}(a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"authorCard"},i.a.createElement("img",{id:"proPic",src:this.props.pic,alt:"Profile "}),i.a.createElement("span",{className:"authName"},this.props.name," "))}}]),t}(a.Component),T=k,N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"bar"},i.a.createElement("span",{id:"first"},"Feed"),i.a.createElement("span",null,"Global"),i.a.createElement("span",null,"Trend"),i.a.createElement("span",{id:"noneBorder"},"Tags"))}}]),t}(a.Component);var A=function(){return i.a.createElement("div",null,i.a.createElement("img",{className:"loader",src:g.a,alt:""}))},w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).onArtClick=n.onArtClick.bind(Object(u.a)(n)),n.state={articles:[],isloading:!0},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"onArtClick",value:function(e){this.props.navToArt(e)}},{key:"getarticle",value:function(){var e=this;fetch("/api/articles").then((function(e){return e.json()})).then((function(t){e.setState({articles:t.articles,isloading:!1})}))}}]),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getarticle()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Home"},i.a.createElement(N,null),this.state.isloading?i.a.createElement(A,null):this.state.articles.map((function(t){return i.a.createElement(T,{key:t.slug,slug:t.slug,title:t.title,text:t.body,pic:t.author.image,name:t.author.username,onArtClick:e.onArtClick})})))}}]),t}(i.a.Component),x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).createArt=n.createArt.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"createArt",value:function(){var e=this,t=document.getElementById("title").value,n=document.getElementById("description").value,a=document.getElementById("body").value,i=document.getElementById("tags").value.split(" ");t.length<2?alert("Title must be longer than 2 letters"):a.split(" ").length<10?alert("Body must be longer than 10 Words"):fetch("/api/articles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({article:{title:t,description:n,body:a,tagList:i}})}).then((function(e){return e.json()})).then((function(t){t.article.slug?e.props.navTo("home"):t.error&&alert(t.error.body)})).catch((function(e){alert(e)}))}}]),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"CArt_con"},i.a.createElement("h1",null," Create your Article"),i.a.createElement("input",{id:"title",type:"text",placeholder:"title"}),i.a.createElement("input",{id:"description",type:"text",placeholder:"description"}),i.a.createElement("textarea",{id:"body",type:"text",placeholder:"write your text here"}),i.a.createElement("input",{id:"tags",type:"text",placeholder:"tags"}),i.a.createElement("button",{onClick:this.createArt}," Create")))}}]),t}(a.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"back_gradient"}),i.a.createElement("div",{className:"main_con"},i.a.createElement("div",{className:"user_info"},i.a.createElement("img",{id:"user_pro_img",src:this.props.pic?this.props.pic:O.a,alt:""}),i.a.createElement("h1",{id:"user_name"}," ",this.props.user_name),i.a.createElement("h4",{id:"user_email"},this.props.user_email," ")),i.a.createElement("div",{className:"acc_info"},i.a.createElement("div",null," ",i.a.createElement("h1",{className:"pro_num"},this.props.article_num)," ",i.a.createElement("h3",null,"Fav. Articles"),"   "),i.a.createElement("div",null," ",i.a.createElement("h1",{className:"pro_num"},this.props.follower_num)," ",i.a.createElement("h3",null,"Followers"),"  "),i.a.createElement("div",null," ",i.a.createElement("h1",{className:"pro_num"},this.props.following_num),"  ",i.a.createElement("h3",null,"Following")," "))))}}]),t}(a.Component),P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).addcomnt=n.addcomnt.bind(Object(u.a)(n)),n.reloadComnt=n.reloadComnt.bind(Object(u.a)(n)),n.state={article:null,comments:null},fetch("/api/articles/".concat(n.props.slug)).then((function(e){return e.json()})).then((function(e){n.setState({article:e.article})})),n.reloadComnt(),n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"addcomnt",value:function(){var e=this,t=document.getElementById("comment_text").value;fetch("/api/articles/".concat(this.props.slug,"/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:{body:t}})}).then((function(e){return e.json()})).then((function(t){t.comment?e.reloadComnt():alert(t)}))}},{key:"reloadComnt",value:function(){var e=this;fetch("/api/articles/".concat(this.props.slug,"/comments")).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({comments:t})}))}}]),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.state.article?i.a.createElement("div",null," ",i.a.createElement(T,{key:this.state.article.slug,slug:this.state.article.slug,title:this.state.article.title,text:this.state.article.body,pic:this.state.article.author.image,name:this.state.article.author.username}),i.a.createElement("div",{className:"article",id:"tags"},this.state.article.description?i.a.createElement("span",null,i.a.createElement("span",null,"Description:-")," ",this.state.article.description,i.a.createElement("br",null)," "):null,i.a.createElement("span",null,"Tags:-"),"   ",this.state.article.tagList.map((function(e){return e+" "}))),i.a.createElement("div",{className:"article",id:"comnt_box"},i.a.createElement("input",{id:"comment_text",type:"text",placeholder:"Comment on this Article"}),i.a.createElement("button",{onClick:this.addcomnt,id:"comnt_btn"},"Comment")),i.a.createElement("div",{className:"article"},"Commnets : -"),this.state.comments?this.state.comments.map((function(e){return i.a.createElement(T,{key:e.id,id:e.id,text:e.body,pic:e.author.image,name:e.author.username})})):null):null)}}]),t}(i.a.Component),D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).islogin(),n.dologin=n.dologin.bind(Object(u.a)(n)),n.loginmenu=n.loginmenu.bind(Object(u.a)(n)),n.remLogReg=n.remLogReg.bind(Object(u.a)(n)),n.navTo=n.navTo.bind(Object(u.a)(n)),n.islogin=n.islogin.bind(Object(u.a)(n)),n.navToArt=n.navToArt.bind(Object(u.a)(n)),n.state={userDetails:{},islogin:!1,loginModal:!1,whichPage:"home",slug:!1},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"navToArt",value:function(e){this.setState((function(){return{slug:e,whichPage:"Art"}}))}},{key:"loginmenu",value:function(){this.setState((function(){return{loginModal:!0}}))}},{key:"remLogReg",value:function(){this.setState((function(){return{loginModal:!1}}))}},{key:"dologin",value:function(e,t){var n=this;fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{email:e,password:t}})}).then((function(e){return e.json()})).then((function(e){e.token?n.setState((function(){return{userDetails:e,loginModal:!1,islogin:!0}})):e.errors&&alert(e.errors.body)}))}},{key:"navTo",value:function(e){"CrArt"===e&&this.loginmenu(),this.setState((function(){return{whichPage:e}}))}},{key:"islogin",value:function(){var e=this;fetch("/api/user/islogin",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){t.token&&e.setState((function(){return{userDetails:t,loginModal:!1,islogin:!0}}))}))}}]),Object(m.a)(t,[{key:"render",value:function(){var e;return"home"===this.state.whichPage&&(e=i.a.createElement(w,{navToArt:this.navToArt})),"profile"===this.state.whichPage&&(e=i.a.createElement(_,{pic:this.state.userDetails.image,user_name:this.state.userDetails.username,user_email:this.state.userDetails.email,article_num:this.state.userDetails.favArt.length-1,following_num:this.state.userDetails.following.length-1,follower_num:10})),"CrArt"===this.state.whichPage&&(e=i.a.createElement(x,{navTo:this.navTo})),"Art"===this.state.whichPage&&(e=i.a.createElement(P,{slug:this.state.slug})),i.a.createElement("div",null,this.state.loginModal?i.a.createElement(y,{dologin:this.dologin,remLogReg:this.remLogReg}):null,i.a.createElement(E,{navTo:this.navTo,islogin:this.state.islogin,loginbtn:this.loginmenu,userPic:this.state.userDetails.image?this.state.userDetails.image:O.a}),e)}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.7170b0a6.chunk.js.map