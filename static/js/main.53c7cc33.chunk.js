(this.webpackJsonphipstagram=this.webpackJsonphipstagram||[]).push([[0],{108:function(e,t,a){e.exports={main:"style_main__PB2yG",menu:"style_menu__19S8d"}},109:function(e,t,a){e.exports={setting:"setting_setting__37n4x"}},114:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(103),c=a.n(n),r=(a(114),a(20)),i=a(33),l=a.n(i),o={inputs:[{label:"Login",name:"name",type:"text"},{label:"Email",name:"email",type:"email"},{label:"Password",name:"password",type:"password"}]},d={inputs:[{label:"Login",name:"name",type:"text"},{label:"Password",name:"password",type:"password"}]},j=a(19),u=a(17),m=a(39),b=a(13),h=a(8),p=a(5),f=a.n(p),O=a(15),x=a.n(O),_="https://hipstagram-api.herokuapp.com",g=a(0),v=u.a().shape({name:u.b().required().min(4),password:u.b().required().min(8).max(16),email:u.b().required("Please enter email").email()}),N=function(e){var t=Object(j.d)({resolver:Object(m.a)(v)}),a=t.register,s=t.handleSubmit,n=t.formState.errors,c=Object(b.g)();console.log(n);return Object(g.jsxs)("div",{className:l.a.main,children:[Object(g.jsx)(h.b,{to:"/",children:Object(g.jsx)("h1",{children:"Hipstagram"})}),Object(g.jsx)("div",{className:l.a.form,children:Object(g.jsxs)("form",{onSubmit:s((function(e){console.log(e);var t=e.name,a=e.email,s=e.password;t&&a&&s&&function(e,t,a){return x.a.post(_+"/auth/registration",{login:e,email:t,password:a})}(t,a,s).then(c.push("/auth/login")).catch((function(e){f.a.toast({html:e,classes:"#c628282 red darken-3"}),c.push("/auth/registration")}))})),children:[o.inputs.map((function(e,t){var s;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("label",{className:l.a.input,children:e.label})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",Object(r.a)({className:l.a.input,name:e.name,type:e.type},a(e.name)))}),Object(g.jsx)("div",{className:l.a.p,children:null===(s=n[e.name])||void 0===s?void 0:s.message})]},t)})),Object(g.jsx)("button",{className:l.a.button,children:"Submit"}),Object(g.jsxs)("div",{className:l.a.login,children:["If you have account you can",Object(g.jsx)(h.b,{to:"/auth/login",children:Object(g.jsx)("h2",{children:"Login"})})]})]})})]})},w=a(3),y=a(34),S=a.n(y),k=(a(240),function(){return Object(g.jsxs)("div",{className:"lds-ripple",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]})}),C=u.a().shape({name:u.b().required(),password:u.b().required().min(6)}),E=function(e){var t=Object(j.d)({resolver:Object(m.a)(C)}),a=t.register,n=t.handleSubmit,c=t.formState.errors,i=Object(s.useState)(!1),l=Object(w.a)(i,2),o=l[0],u=l[1],p=Object(s.useState)((function(){return JSON.parse(localStorage.getItem("currentUserToken"))}));return Object(w.a)(p,1)[0]?Object(g.jsx)(b.a,{to:"/users/current"}):Object(g.jsxs)("div",{className:S.a.main,children:[Object(g.jsx)(h.b,{to:"/",children:Object(g.jsx)("h1",{style:{textDecoration:"none"},children:"Hipstagram"})}),Object(g.jsxs)("div",{className:S.a.form,children:[Object(g.jsxs)("form",{onSubmit:n((function(t){console.log(t);var a=t.name,s=t.password;u(!0),a&&s?function(e,t){return x.a.post(_+"/auth/login",{login:e,password:t}).then((function(e){return e.data.access_token&&localStorage.setItem("currentUserToken",JSON.stringify(e.data.access_token)),e.data}))}(a,s).then((function(){e.history.push("/users/current"),window.location.reload()})).catch((function(e){u(!1),f.a.toast({html:e,classes:"#c628282 red darken-3"})})):u(!1)})),children:[d.inputs.map((function(e,t){var s;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("label",{className:S.a.input,children:e.label})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",Object(r.a)({className:S.a.input,name:e.name,type:e.type},a(e.name)))}),Object(g.jsx)("p",{className:S.a.p,children:null===(s=c[e.name])||void 0===s?void 0:s.message})]},t)})),Object(g.jsx)("button",{className:S.a.button,disabled:o,children:"Submit"}),o&&Object(g.jsx)(k,{})]}),Object(g.jsxs)("div",{className:S.a.registration,children:["If you not have account you can",Object(g.jsx)(h.b,{to:"/auth/registration",children:Object(g.jsx)("h2",{children:"Registration"})})]})]})]})},P=a(70),I=a.n(P),F=a(55),R=a.n(F),D=function(){return Object(g.jsxs)("div",{className:R.a.header,children:[Object(g.jsx)(h.b,{to:"/auth/login",children:Object(g.jsx)("button",{className:R.a.button,children:"Sign in"})}),Object(g.jsx)(h.b,{to:"/auth/registration",children:Object(g.jsx)("button",{className:R.a.button,children:"Sign up"})})]})},A=function(){return Object(g.jsx)("div",{className:I.a.main,children:Object(g.jsxs)("div",{className:I.a.head,children:[Object(g.jsx)("h1",{children:" Hipstargram"}),Object(g.jsx)(D,{})]})})},L=a(72),q=a(108),U=a.n(q),T=a(26),M=a.n(T),J=(a(241),{Authorization:JSON.parse(localStorage.getItem("currentUserToken")),"Content-Type":"application/json"}),H=function(){return x.a.get(_+"/users/current",{headers:J})},B=a(40),G=a.n(B),Q={background:"transparent",color:"black",border:"0"},Y=function(e){var t=e.commentById,a=e.id,n=e.handleDeleteComment,c=Object(s.useState)([]),r=Object(w.a)(c,2),i=r[0],l=r[1],o=Object(s.useState)(!1),d=Object(w.a)(o,2),j=d[0],u=d[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:function(){return function(e){l(t.filter((function(t){return t.postId===e}))),u(!j)}(a)},className:"waves-effect btn",style:Q,children:j?"Close":"Read comments"}),Object(g.jsx)("div",{className:j?"show-on-medium":"hide-on-med-and-up hide-on-med-and-down",children:i.map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("i",{className:"material-icons",style:{cursor:"pointer"},onClick:function(){return n(e.id,u(!1))},children:"delete"}),Object(g.jsxs)("div",{className:G.a.content,children:[Object(g.jsxs)("div",{className:G.a.title,children:[Object(g.jsx)(h.b,{to:"/users/"+e.owner.id,children:Object(g.jsx)("img",{className:G.a.avatar,src:e.owner.avatar,alt:e.owner.login})}),Object(g.jsx)("h4",{className:G.a.login,children:e.owner.login})]}),Object(g.jsxs)("span",{className:G.a.text,children:["comment:",e.text]})]})]},e.id)}))})]})},W={background:"transparent",color:"black",border:"0"},X=function(e){var t=e.id,a=Object(s.useState)(""),n=Object(w.a)(a,2),c=n[0],r=n[1],i=Object(s.useState)(""),l=Object(w.a)(i,2),o=l[0],d=l[1],j=Object(s.useState)([]),u=Object(w.a)(j,2),m=u[0],b=u[1],h=document.querySelectorAll("input");return Object(s.useEffect)((function(){(function(e){return x.a.get(_+"/comments/"+e,{headers:J})})(t).then((function(e){return b(e.data)})).catch((function(e){f.a.toast({html:e,classes:"#c628282 red darken-3"})}))}),[o]),Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{onChange:function(e){return r(e.target.value)},type:"text",placeholder:"add a comment"}),Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{onClick:function(){var e;""===c?f.a.toast({html:"Need to write anything",classes:"#c628282 red darken-3"}):(e={postId:t,text:c},x.a.post(_+"/comments",e,{headers:J})).then((function(e){return d(e.data)})).then(h.forEach((function(e){return e.value=""}))).then(f.a.toast({html:"YOUR ARE ADDED COMMENT ",classes:"#c628282 green darken-3"})).catch((function(e){f.a.toast({html:e,classes:"#c628282 red darken-3"})}))},className:"waves-effect btn",style:W,children:"Add comment"}),m.length?Object(g.jsx)(Y,{commentById:m,handleDeleteComment:function(e){(function(e){return x.a.delete(_+"/comments/"+e,{headers:J})})(e).then(b(m.filter((function(t){return t.id!==e})))).catch((function(e){f.a.toast({html:e,classes:"#c628282 red darken-3"})}))},id:t}):""]})]})},Z=function(e){var t=e.post,a=e.id,n=Object(s.useState)(t.likes.length),c=Object(w.a)(n,2),r=c[0],i=c[1],l=Object(s.useState)((function(){return t.likes.filter((function(e){return e._id===a})).length?"liked":"unliked"})),o=Object(w.a)(l,2),d=o[0],j=o[1],u=function(e){(function(e){return x.a.get(_+"/posts/like/"+e,{headers:J})})(e).then((function(e){return"liked"===e.data.status?j("liked")||i((function(e){return e+1})):j("unliked")||i((function(e){return e-1}))})).catch((function(e){f.a.toast({html:e,classes:"#c628282 red darken-3"})}))};Object(s.useEffect)((function(){f.a.AutoInit()}));return Object(g.jsx)("div",{className:"feed",children:Object(g.jsxs)("div",{className:"card feed_card",children:[Object(g.jsx)("h6",{children:t.ownerId}),Object(g.jsx)("div",{className:"card-image",children:Object(g.jsx)("img",{className:"materialboxed",id:"image",onClick:function(){var e=document.querySelector("#image");f.a.Materialbox.getInstance(e)},src:t.imgUrl,alt:"post"})}),Object(g.jsxs)("div",{className:"card-content",children:[Object(g.jsx)("i",{className:"material-icons",onClick:function(){return u(t._id)},style:0!==r?{color:"red",cursor:"pointer"}:{color:"black",cursor:"pointer"},children:"favorite_border"}),r,"liked"===d?Object(g.jsx)("i",{className:"material-icons",children:"thumb_up"}):Object(g.jsx)("i",{className:"material-icons",children:"thumb_down"}),Object(g.jsx)("p",{children:t.title}),Object(g.jsx)(X,{id:t._id})]})]})},t._id)},z=function(){var e=Object(s.useState)([]),t=Object(w.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){f.a.AutoInit()}));var c=function(){var e=document.querySelector("#modal");f.a.Modal.getInstance(e).open()};Object(s.useEffect)((function(){H().then((function(e){return n(e.data)})).catch((function(e){return f.a.toast({html:e,classes:"#c628282 red darken-3"})}))}),[]);if(0!==a.length){var r=a.login,i=a.email,l=a.avatar,o=a.posts,d=a.followers,j=a.firstName,u=a.lastName,m=a.id;return Object(g.jsxs)("div",{className:M.a.profile,children:[Object(g.jsxs)("div",{className:M.a.profile_header,children:[Object(g.jsx)("div",{children:Object(g.jsx)("div",{onClick:c,className:"waves-effect waves-light",children:Object(g.jsx)("img",{className:M.a.avatar,src:l||"https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png",alt:"avatar"})})}),Object(g.jsxs)("div",{className:"modal",id:"modal",children:[Object(g.jsxs)("div",{className:"modal-content",children:[Object(g.jsx)("h4",{children:j||"First name"}),Object(g.jsx)("h4",{children:u||"Last name"}),Object(g.jsx)("h6",{children:i||"Email"})]}),Object(g.jsx)("div",{className:"modal-footer",children:Object(g.jsx)("div",{className:"modal-close waves-effect  btn-flat",children:"Close"})})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:M.a.login,onClick:c,children:r}),Object(g.jsxs)("div",{className:M.a.posts,children:[Object(g.jsxs)("h5",{children:[o.length,":posts"]}),Object(g.jsxs)("h5",{onClick:function(){return function(){var e=document.querySelector("#modal_follow");f.a.Modal.getInstance(e).open()}()},className:M.a.posts_item,children:[d.length,":followers"]})]}),Object(g.jsx)("div",{id:"modal_follow",className:"modal",children:Object(g.jsx)("div",{className:"modal-content",children:a.followers.map((function(e){return Object(g.jsxs)("div",{className:M.a.follower_title,children:[Object(g.jsx)("h5",{children:e.login}),Object(g.jsx)("h5",{children:e.email})]},e.id)}))})})]})]}),Object(g.jsx)("div",{className:M.a.create_post,children:Object(g.jsx)(h.b,{to:"/users/posts",children:"Create Post"})}),Object(g.jsx)("div",{className:M.a.feed_gallery,children:o.map((function(e){return Object(g.jsx)(Z,{id:m,post:e},e._id)}))})]})}return Object(g.jsx)(k,{})},K=a(41),V=a.n(K),$=function(e){var t=function(){localStorage.removeItem("currentUserToken"),window.location.replace("/auth/login")};return Object(g.jsx)("nav",{children:Object(g.jsxs)("div",{className:"nav-wrapper white",children:[Object(g.jsx)(h.b,{to:"#",className:"brand-logo left",children:Object(g.jsx)("span",{className:V.a.logo_title,children:"Hipstagram"})}),Object(g.jsxs)("ul",{id:"nav-mobile",className:"right",children:[Object(g.jsx)("li",{className:V.a.link,children:Object(g.jsx)(h.b,{to:"/users",children:"Users"})}),Object(g.jsx)("li",{className:V.a.link,children:Object(g.jsx)(h.b,{to:"/users/current",children:"User Profile"})}),Object(g.jsx)("li",{className:V.a.link,children:Object(g.jsx)(h.b,{to:"/users/setting",children:"Setting"})}),Object(g.jsx)("li",{className:V.a.link,onClick:function(){return t()},children:Object(g.jsx)("i",{style:{color:"black",marginRight:"10px",cursor:"pointer"},className:"material-icons",children:"directions_run"})})]})]})})},ee=a(30),te=a.n(ee),ae=u.a().shape({login:u.b().required().min(4,"Login is too short!").max(20,"Login is too long!"),firstName:u.b().required().min(4,"First name is too short!").max(20,"First name is too long!"),lastName:u.b().required().min(4,"Last name is too short!").max(20,"Last name is too long!"),email:u.b().required("Please enter email").email()}),se=function(){var e=Object(s.useState)(""),t=Object(w.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),i=Object(w.a)(c,2),l=i[0],o=i[1];Object(s.useEffect)((function(){H().then((function(e){return o(e.data)}))}),[]);var d=Object(j.d)({resolver:Object(m.a)(ae)}),u=d.register,b=d.handleSubmit,h=d.formState.errors;return Object(g.jsxs)("form",{className:te.a.form,onSubmit:b((function(e){console.log(e);var t=e.login,s=e.firstName,n=e.lastName,c=e.email,r={login:t,firstName:s,lastName:n,email:c,avatar:a.imagePreview};console.log(r),t&&s&&n&&c&&a?function(e){return x.a.patch(_+"/users/current",e,{headers:J})}(r).then((function(e){return o(e)})).then(f.a.toast({html:"ALl CHANGED",classes:"#c628282 green darken-3"})).catch((function(e){f.a.toast({html:"Request entity too large",classes:"#c628282 red darken-3"})})):f.a.toast({html:"NEED FILL ALL INPUTS ",classes:"#c628282 orange darken-3"})})),children:[Object(g.jsxs)("div",{className:te.a.upload_file,children:[Object(g.jsxs)("div",{className:"file-field input-field ",children:[Object(g.jsxs)("div",{className:"btn  grey darken-4",children:[Object(g.jsx)("span",{children:"File"}),Object(g.jsx)("input",{onChange:function(e){var t=new FileReader,s=e.target.files[0];if(console.log(s),n(s),null===s)return n({imagePreview:a});t.onloadend=function(){n({imagePreview:t.result})},t.readAsDataURL(s)},type:"file"})]}),Object(g.jsx)("div",{className:"file-path-wrapper",children:Object(g.jsx)("input",{className:"file-path ",type:"text",placeholder:"add photo .png"})})]}),Object(g.jsx)("img",{className:te.a.avatar,src:a?a.imagePreview:l.avatar,alt:"avatar"})]}),Object(g.jsx)("label",{children:"Login"}),Object(g.jsx)("input",Object(r.a)({type:"text",placeholder:"Login",name:"login"},u("login"))),Object(g.jsx)("div",{className:te.a.p,children:h.login&&h.message}),Object(g.jsx)("label",{children:"First name"}),Object(g.jsx)("input",Object(r.a)({type:"text",placeholder:"First name",name:"firstName"},u("firstName"))),Object(g.jsx)("div",{className:te.a.p,children:h.firstName&&h.message}),Object(g.jsx)("label",{children:"Last name"}),Object(g.jsx)("input",Object(r.a)({type:"text",placeholder:"Last name",name:"lastName"},u("lastName"))),Object(g.jsx)("div",{className:te.a.p,children:h.lastName&&h.message}),Object(g.jsx)("label",{children:"Email"}),Object(g.jsx)("input",Object(r.a)({type:"email",placeholder:"Email",name:"email"},u("email"))),Object(g.jsx)("div",{className:te.a.p,children:h.email&&h.message}),Object(g.jsx)("button",{className:te.a.button,children:"Save"})]})},ne=a(27),ce=a.n(ne),re=function(){var e=Object(j.d)({}),t=e.register,a=e.handleSubmit,n=e.formState.errors,c=e.watch,i=Object(s.useRef)({});i.current=c("password","");return Object(g.jsxs)("form",{className:ce.a.form_password,onSubmit:a((function(e){(function(e){return x.a.post(_+"/auth/updatePassword",e,{headers:J})})(e).then((function(e){return console.log(e)})).then(f.a.toast({html:"YOUR ARE ADDED NEW PASSWORD ",classes:"#c628282 green darken-3"})).catch((function(e){f.a.toast({html:"SOMETHING WRONG",classes:"#c628282 red darken-3"})}))})),children:[Object(g.jsxs)("div",{className:ce.a.form_div,children:[Object(g.jsxs)("div",{className:ce.a.div_input,children:[Object(g.jsx)("label",{children:"Password"}),Object(g.jsx)("input",Object(r.a)({name:"password",type:"password",placeholder:"Password",className:ce.a.input},t("password",{required:"You must specify a password",maxLength:20}))),n.password&&Object(g.jsx)("p",{className:ce.a.p,children:"Password must have at least 8 characters"})]}),Object(g.jsxs)("div",{className:ce.a.div_input,children:[Object(g.jsx)("label",{children:"Confirm Password"}),Object(g.jsx)("input",Object(r.a)(Object(r.a)({name:"confirmPassword",type:"password",placeholder:"Confirm password"},t("confirmPassword",{validate:function(e){return e===i.current||"The passwords do not match"}})),{},{className:ce.a.input})),n.confirmPassword&&Object(g.jsx)("p",{className:ce.a.p,children:" The passwords do not match"})]})]}),Object(g.jsx)("button",{className:ce.a.button,children:"Save"})]})},ie=a(109),le=a.n(ie),oe=function(){return Object(g.jsxs)("div",{className:le.a.setting,children:[Object(g.jsx)(se,{}),Object(g.jsx)(re,{})]})},de=a(56),je=a.n(de),ue=function(e){var t=e.user,a=Object(s.useState)(t.isFollow),n=Object(w.a)(a,2),c=n[0],r=n[1],i=function(e){(function(e){return x.a.get(_+"/users/follow/"+e,{headers:J})})(e).then((function(e){return 200===e.status?r(!c):""})).catch((function(e){f.a.toast({html:e,classes:"#c628282 red darken-3"})}))};return Object(g.jsxs)("div",{className:je.a.user_card,children:[Object(g.jsx)(h.c,{to:"/users/"+t._id,children:Object(g.jsx)("div",{className:je.a.user_image,children:Object(g.jsx)("img",{src:t.avatar?t.avatar:"https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png",alt:"avatar"})})}),Object(g.jsx)("h5",{children:t.login}),Object(g.jsx)("h6",{children:t.email}),Object(g.jsx)("button",{onClick:function(){return i(t._id)},className:je.a.button,style:c?{color:"#bf0098",background:"transparent"}:{color:"#00e5ff",background:"transparent"},children:c?"UnFollow":"Follow"})]})},me=function(){var e=Object(s.useState)(null),t=Object(w.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)([]),r=Object(w.a)(c,2),i=r[0],l=r[1],o=i===[]?a:i;Object(s.useEffect)((function(){x.a.get(_+"/users",{headers:J}).then((function(e){return n(e.data)})).catch((function(e){return f.a.toast({html:e,classes:"#c628282 red darken-3"})}))}),[]);return null!==a?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("input",{type:"text",placeholder:"Tab to Search users...",onChange:function(e){var t=e.target.value,s=a.filter((function(e){return e.login.toLowerCase().includes(t.toLowerCase())}));l(s)}}),null!==o&&0!==o.length?o.map((function(e){return Object(g.jsx)(ue,{user:e},e._id)})):Object(g.jsx)("p",{children:"Sorry...User not found..."})]}):Object(g.jsx)(k,{})},be=a(71),he=a.n(be),pe=(a(242),function(){var e=Object(s.useState)(""),t=Object(w.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(w.a)(c,2),i=r[0],l=r[1],o=Object(s.useState)({}),d=Object(w.a)(o,2),j=d[0],u=d[1];console.log(j);return Object(g.jsxs)("div",{className:"post",children:[Object(g.jsxs)("div",{className:" input_filed",children:[Object(g.jsx)("input",{onChange:function(e){return n(e.target.value)},value:a,type:"text",placeholder:"Title"}),Object(g.jsxs)("div",{className:"file-field input-field",children:[Object(g.jsxs)("div",{className:"btn grey darken-4",children:[Object(g.jsx)("span",{children:"File_upload"}),Object(g.jsx)("input",{onChange:function(e){return l(e.target.files[0])},type:"file"})]}),Object(g.jsx)("div",{className:"file-path-wrapper",children:Object(g.jsx)("input",{className:"file-path validate",type:"text"})})]})]}),Object(g.jsx)("button",{onClick:function(){if(a&&i){var e=new FormData;e.append("image",i),e.append("title",a),(t=e,x.a.post(_+"/posts",t,{headers:J})).then((function(e){return u(e.data)})).then(f.a.toast({html:"YOUR ARE ADDED POST ",classes:"#c628282 green darken-3"}))}else f.a.toast({html:"NEED  TO WRITE AND ADD SOMETHING",classes:"#c628282 red darken-3"});var t},className:"btn waves-effect waves-light  grey darken-4",children:"Add post"})]})}),fe=a(28),Oe=a.n(fe),xe=function(e){var t=e.match.params.id,a=Object(s.useState)(null),n=Object(w.a)(a,2),c=n[0],r=n[1],i=Object(s.useState)(null),l=Object(w.a)(i,2),o=l[0],d=l[1],j=e.history.goBack;Object(s.useEffect)((function(){(function(e){return x.a.get(_+"/users/"+e,{headers:J})})(t).then((function(e){return r(e.data)}))}),[t]),Object(s.useEffect)((function(){f.a.AutoInit()}));var u=function(e){(function(e){return x.a.get(_+"/users/followersAndFollowing/"+e,{headers:J})})(e).then((function(e){return d(e.data.followers)}))};if(null!==c){var m=c.posts;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:Oe.a.profile,children:Object(g.jsxs)("div",{className:Oe.a.profile_header,children:[Object(g.jsx)("div",{children:Object(g.jsx)("div",{children:Object(g.jsx)("img",{className:Oe.a.avatar,src:c.avatar?c.avatar:"https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png",alt:"avatar"})})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:Oe.a.login,children:c.login?c.login:"User"}),Object(g.jsxs)("div",{className:Oe.a.posts,children:[Object(g.jsxs)("h5",{children:[c.posts.length?c.posts.length:"",":posts"]}),Object(g.jsxs)("h5",{className:Oe.a.posts_item,onClick:function(){return u(t)},children:[c.followersCount?c.followersCount:"",":followers"]}),Object(g.jsx)("span",{onClick:function(){return function(){var e=document.querySelector("#modal1");f.a.Modal.getInstance(e).open()}()},style:{display:o?"block":"none",cursor:"pointer"},children:"?"}),Object(g.jsx)("div",{id:"modal1",className:"modal",children:Object(g.jsx)("div",{className:"modal-content",children:o?o.map((function(e){return Object(g.jsxs)("div",{className:Oe.a.followers_title,children:[Object(g.jsx)("h5",{children:e.login}),Object(g.jsx)("h5",{children:e.email})]},e.id)})):""})})]})]})]})}),Object(g.jsx)("span",{className:Oe.a.span,onClick:function(){j()},children:"Go back"}),Object(g.jsx)("div",{className:Oe.a.feed_gallery,children:m.map((function(e){return Object(g.jsx)(Z,{post:e},e._id)}))})]})}return Object(g.jsx)(k,{})},_e=function(){return Object(g.jsxs)("div",{className:he.a.layout,children:[Object(g.jsx)($,{}),Object(g.jsx)("div",{className:he.a.content,children:Object(g.jsxs)(b.d,{children:[Object(g.jsx)(b.b,{exact:!0,path:"/users",component:me}),Object(g.jsx)(b.b,{exact:!0,path:"/users/posts",component:pe}),Object(g.jsx)(b.b,{exact:!0,path:"/users/current",component:z}),Object(g.jsx)(b.b,{exact:!0,path:"/users/setting",component:oe}),Object(g.jsx)(b.b,{path:"/users/:id",component:xe})]})})]})},ge=function(){var e=Object(b.h)(),t=Object(L.b)(e,(function(e){return e.pathname}),{from:{opacity:0,transform:"0.5s"},enter:{opacity:1,transform:"0.5s"},leave:{opacity:0,transform:"0.5s"}});return Object(g.jsxs)("div",{children:[t.map((function(e){var t=e.item,a=e.props,s=e.key;return Object(g.jsx)(L.a.div,{style:a,children:Object(g.jsx)("div",{className:U.a.main,children:Object(g.jsxs)(b.d,{location:t,children:[Object(g.jsx)(b.b,{exact:!0,path:"/",component:A}),Object(g.jsx)(b.b,{path:"/auth/login",component:E}),Object(g.jsx)(b.b,{path:"/auth/registration",component:N})]})})},s)})),Object(g.jsx)(b.b,{path:"/users",component:_e})]})},ve=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(h.a,{basename:"/hipstagram-useState",children:Object(g.jsx)(ge,{})})})};c.a.render(Object(g.jsx)(ve,{}),document.getElementById("root"))},26:function(e,t,a){e.exports={profile:"profile_profile__18DjM",profile_header:"profile_profile_header__1le9A",avatar:"profile_avatar__FgQu5",posts:"profile_posts__3742B",posts_item:"profile_posts_item__2eCUj",feed_gallery:"profile_feed_gallery__2QReO",image:"profile_image__15hjC",create_post:"profile_create_post__2ZdOe",login:"profile_login__1fnbh",follower_title:"profile_follower_title__tgFRg"}},27:function(e,t,a){e.exports={form_password:"password_form_password__J6RYL",form_div:"password_form_div__16d_h",div_input:"password_div_input__E2Qyn",button:"password_button__1moKl",p:"password_p__16x7f"}},28:function(e,t,a){e.exports={profile:"userProfile_profile__FHRee",profile_header:"userProfile_profile_header__1ZhOy",avatar:"userProfile_avatar__3DjGJ",posts:"userProfile_posts__3GQIy",posts_item:"userProfile_posts_item__3zFDe",feed_gallery:"userProfile_feed_gallery__1xEgo",image:"userProfile_image__2FwX3",span:"userProfile_span__XYb1U",followers_title:"userProfile_followers_title__3MQ6P"}},30:function(e,t,a){e.exports={form:"profileForm_form__1e4ho",button:"profileForm_button__2prBM",upload_file:"profileForm_upload_file__1eMIn",avatar:"profileForm_avatar__3i1jt",p:"profileForm_p__3t9iq"}},33:function(e,t,a){e.exports={main:"registrationStyle_main__1Q0Ik",form:"registrationStyle_form__2MB1g",login:"registrationStyle_login__y2X7j",input:"registrationStyle_input__2tZp8",button:"registrationStyle_button__2v98d",p:"registrationStyle_p__3jYJK"}},34:function(e,t,a){e.exports={main:"authStyle_main__Ej0Sf",form:"authStyle_form__f5wwW",registration:"authStyle_registration__2390x",input:"authStyle_input__1kd0O",button:"authStyle_button__1se6p",p:"authStyle_p__2S1Uf"}},40:function(e,t,a){e.exports={content:"commentRead_content__1N0ug",title:"commentRead_title__j2AQb",login:"commentRead_login__2LDkv",avatar:"commentRead_avatar__2ywJh",text:"commentRead_text__3KPgl"}},41:function(e,t,a){e.exports={link:"style_link__1MB4i",logo_title:"style_logo_title__1FO5H"}},55:function(e,t,a){e.exports={header:"headerStyle_header__3eaaJ",button:"headerStyle_button__21Hq4"}},56:function(e,t,a){e.exports={user_card:"user_user_card__1G1mF",user_image:"user_user_image__27bXi",button:"user_button__Iv62X"}},70:function(e,t,a){e.exports={main:"homeStyle_main__1Zb_I",head:"homeStyle_head__3w0pz"}},71:function(e,t,a){e.exports={layout:"layout_layout__9MTZ8",content:"layout_content__R9Jfr"}}},[[243,1,2]]]);
//# sourceMappingURL=main.53c7cc33.chunk.js.map