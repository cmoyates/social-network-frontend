(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},126:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(14),i=n.n(r),s=(n(113),n(20)),a=n(13),l=(n(114),n(29)),u=n(17),j=n(10),p=n.n(j),b=n(16),f=n(57),d=n.n(f),h=n(2),O=function(e){var t=function(){var t=Object(b.a)(p.a.mark((function t(n){var c,o,r,i,s,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=!1,o=null,t.prev=2,t.next=5,fetch("https://fast-coast-04774.herokuapp.com/profiles/email/"+n.profileObj.email);case 5:return r=t.sent,t.next=8,r.json();case 8:i=t.sent,o=i,console.log("Profile Exists!"),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0),c=!0;case 17:if(!c){t.next=37;break}return console.log("Creating new Profile..."),t.prev=19,s={user_email:n.profileObj.email,user_name:n.profileObj.name,img_url:n.profileObj.imageUrl},t.next=23,fetch("https://fast-coast-04774.herokuapp.com/profiles",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)});case 23:return a=t.sent,t.next=26,a.json();case 26:return(o=t.sent).profiles_following=[o.profile_id],t.next=30,fetch("https://fast-coast-04774.herokuapp.com/profiles/"+o.profile_id,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)});case 30:console.log("Profile Created!"),t.next=37;break;case 33:return t.prev=33,t.t1=t.catch(19),console.log(t.t1),t.abrupt("return");case 37:e.setProfile(o),e.setIsAuth(!0),console.log("Login Successful");case 40:case"end":return t.stop()}}),t,null,[[2,13],[19,33]])})));return function(e){return t.apply(this,arguments)}}();return e.isAuth?Object(h.jsx)(u.a,{to:"/feed"}):Object(h.jsxs)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:[Object(h.jsx)("h1",{children:"Welcome to the Social Network!"}),Object(h.jsx)("p",{children:Object(h.jsx)(d.a,{clientId:"399415598384-sgkom02f57l549gtnn877013fg004ke5.apps.googleusercontent.com",buttonText:"Login",onSuccess:t,onFailure:function(e){console.log("Login Failed"),console.log(e)},isSignedIn:!0,cookiePolicy:"single_host_origin"})})]})},x=n(169),m=n(170),g=n(168),v=n(172),k=n(89),S=n.n(k),C=n(88),w=n.n(C),y=n(87),_=n.n(y),I=n(171),P=n(188),T=n(163),A=n(166),L=Object(T.a)((function(e){return{cardHeader:{display:"flex",flexDirection:"row",alignItems:"center"},nameText:{paddingLeft:"10px"}}})),N=function(e){var t=L(),n=Object(u.g)(),c=function(t){e.isSinglePostPage||n.push("/profile/"+t.user_id)};return e.commentList.length>0?Object(h.jsx)("div",{children:e.commentList.map((function(e,n){return Object(h.jsxs)("div",{children:[Object(h.jsx)(A.a,{}),Object(h.jsxs)(g.a,{children:[Object(h.jsxs)("div",{className:t.cardHeader,children:[Object(h.jsx)(P.a,{src:e.user_img,onClick:function(){c(e)}}),Object(h.jsx)("h4",{className:t.nameText,onClick:function(){c(e)},children:e.user_name})]}),Object(h.jsx)(A.a,{}),Object(h.jsx)("p",{children:e.content})]})]},n)}))}):null},D=Object(T.a)((function(e){return{cardHeader:{display:"flex",flexDirection:"row",alignItems:"center"},nameText:{paddingLeft:"10px"}}})),F=function(e){var t=D(),n=Object(u.g)(),o=Object(c.useState)([]),r=Object(a.a)(o,2),i=r[0],s=r[1];Object(c.useEffect)((function(){s(e.post)}),[]);var l=function(){f||n.push("/profile/"+i.user_id)},j=function(){var t=Object(b.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.post.likes.includes(e.viewer_ID)?e.post.likes=e.post.likes.filter((function(t){return t!==e.viewer_ID})):e.post.likes.push(e.viewer_ID),t.next=3,fetch("https://fast-coast-04774.herokuapp.com/posts/"+e.post.post_id,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.post)});case 3:n=t.sent,s(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=-1===e.viewer_ID;return Object(h.jsxs)(x.a,{style:{margin:20},children:[Object(h.jsxs)(g.a,{children:[Object(h.jsxs)("div",{className:t.cardHeader,children:[Object(h.jsx)(P.a,{src:e.post.user_img,onClick:l}),Object(h.jsx)("h3",{className:t.nameText,onClick:l,children:e.post.user_name})]}),Object(h.jsx)(A.a,{}),Object(h.jsx)("p",{children:e.post.content})]}),Object(h.jsx)(A.a,{}),Object(h.jsx)(m.a,{children:Object(h.jsxs)(I.a,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[Object(h.jsxs)(v.a,{size:"small",color:e.post.likes.includes(e.viewer_ID)?"primary":"default",disabled:f,startIcon:Object(h.jsx)(_.a,{}),onClick:function(){j()},children:["Like (",e.post.likes.length,")"]}),Object(h.jsx)(A.a,{orientation:"vertical",flexItem:!0}),Object(h.jsx)(v.a,{size:"small",disabled:f,startIcon:Object(h.jsx)(w.a,{}),onClick:function(){e.commentCallback()},children:"Comment"}),Object(h.jsx)(A.a,{orientation:"vertical",flexItem:!0}),Object(h.jsx)(v.a,{size:"small",startIcon:Object(h.jsx)(S.a,{}),onClick:function(){e.setSnackbarOpen(!0),navigator.clipboard.writeText("https://cmoyates.github.io/Social-Network-Frontend/#/post/"+e.post.post_id)},children:"Share"})]})}),Object(h.jsx)(N,{commentList:e.post.comments.commentList,isSinglePostPage:f})]})},z=n(184),E=n(187),J=n(176),G=n(174),H=n(173);var B=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),o=n[0],r=n[1];return Object(h.jsx)("div",{children:Object(h.jsxs)(E.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(h.jsx)(H.a,{id:"form-dialog-title",children:"Post"}),Object(h.jsx)(G.a,{children:Object(h.jsx)(z.a,{value:o,onChange:function(e){r(e.target.value)},autoFocus:!0,margin:"dense",id:"content",label:"Content",fullWidth:!0,multiline:!0})}),Object(h.jsxs)(J.a,{children:[Object(h.jsx)(v.a,{onClick:Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleSubmit({user_id:e.profile.profile_id,user_name:e.profile.user_name,user_img:e.profile.img_url,content:o});case 2:case"end":return t.stop()}}),t)}))),color:"primary",children:"Submit"}),Object(h.jsx)(v.a,{onClick:e.handleClose,color:"primary",children:"Cancel"})]})]})})};var U=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),o=n[0],r=n[1];return Object(h.jsx)("div",{children:Object(h.jsxs)(E.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(h.jsx)(H.a,{id:"form-dialog-title",children:"Comment"}),Object(h.jsx)(G.a,{children:Object(h.jsx)(z.a,{value:o,onChange:function(e){r(e.target.value)},autoFocus:!0,margin:"dense",id:"content",label:"Content",fullWidth:!0,multiline:!0})}),Object(h.jsxs)(J.a,{children:[Object(h.jsx)(v.a,{onClick:Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.handleSubmit({user_id:e.profile.profile_id,user_name:e.profile.user_name,user_img:e.profile.img_url,content:o});case 2:case"end":return t.stop()}}),t)}))),color:"primary",children:"Submit"}),Object(h.jsx)(v.a,{onClick:e.handleClose,color:"primary",children:"Cancel"})]})]})})},W=n(177),R=n(42),$=n.n(R),q=n(179),M=n(189),V=Object(T.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),K=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),o=n[0],r=n[1],i=Object(c.useState)(null),s=Object(a.a)(i,2),l=s[0],u=s[1],j=Object(c.useState)(!1),f=Object(a.a)(j,2),d=f[0],O=f[1],x=Object(c.useState)(!1),m=Object(a.a)(x,2),g=m[0],k=m[1],S=Object(c.useState)(!1),C=Object(a.a)(S,2),w=C[0],y=C[1],_=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!1),e.next=3,fetch("https://fast-coast-04774.herokuapp.com/posts",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)});case 3:return e.sent,e.next=6,P();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!1),l.comments.commentList.push(t),e.next=4,fetch("https://fast-coast-04774.herokuapp.com/posts/"+l.post_id,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(l)});case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var t=Object(b.a)(p.a.mark((function t(){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fast-coast-04774.herokuapp.com/posts/following/"+e.profile.profile_id);case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,console.log("Posts"),console.log(c),r(c);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){document.title="Social Network",console.log("Test"),P()}),[e.profile.primary_color]);V();var T=function(e,t){"clickaway"!==t&&y(!1)};return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)(v.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){O(!0)},children:Object(h.jsx)("b",{children:"Post"})}),Object(h.jsx)(W.a,{maxWidth:"sm",children:o.map((function(t){return Object(h.jsx)(F,{post:t,viewer_ID:e.profile.profile_id,setSnackbarOpen:y,commentCallback:function(){u(t),k(!0)}},t.post_id)}))}),Object(h.jsx)(B,{open:d,handleClose:function(){O(!1)},handleSubmit:_,profile:e.profile}),Object(h.jsx)(U,{open:g,handleClose:function(){k(!1)},handleSubmit:I,profile:e.profile,post:l}),Object(h.jsx)(M.a,{open:w,autoHideDuration:3e3,onClose:T,message:"Link copied to clipboard",action:Object(h.jsx)(q.a,{size:"small","aria-label":"close",color:"inherit",onClick:T,children:Object(h.jsx)($.a,{fontSize:"small"})})})]})},Q=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"404: Page not found"})})},X=n(92),Y=["component","isAuth"],Z=function(e){var t=e.component,n=e.isAuth,c=Object(X.a)(e,Y);return Object(h.jsx)(u.b,Object(s.a)(Object(s.a)({},c),{},{render:function(e){return n?Object(h.jsx)(t,Object(s.a)({},e)):Object(h.jsx)(u.a,{to:{pathname:"/",state:{from:e.location}}})}}))},ee=function(){var e=Object(u.h)().id,t=Object(c.useState)(null),n=Object(a.a)(t,2),o=n[0],r=n[1],i=Object(c.useState)(!1),s=Object(a.a)(i,2),l=s[0],j=s[1],f=function(){var t=Object(b.a)(p.a.mark((function t(){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(null),t.next=3,fetch("https://fast-coast-04774.herokuapp.com/posts/"+e);case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,document.title="Social Network",console.log(c),r(c);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){f()}),[e]);var d=function(e,t){"clickaway"!==t&&j(!1)};return o?Object(h.jsxs)("div",{children:[Object(h.jsx)(I.a,{container:!0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"100vh"},children:Object(h.jsx)(I.a,{item:!0,children:Object(h.jsx)(F,{post:o,viewer_ID:-1,setSnackbarOpen:j},o.post_id)})}),Object(h.jsx)(M.a,{open:l,autoHideDuration:3e3,onClose:d,message:"Link copied to clipboard",action:Object(h.jsx)(q.a,{size:"small","aria-label":"close",color:"inherit",onClick:d,children:Object(h.jsx)($.a,{fontSize:"small"})})})]}):null},te=Object(T.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),ne=function(e){te();var t=Object(u.h)().id,n=Object(c.useState)(null),o=Object(a.a)(n,2),r=o[0],i=o[1],s=Object(c.useState)([]),l=Object(a.a)(s,2),j=l[0],f=l[1],d=Object(c.useState)(!1),O=Object(a.a)(d,2),x=O[0],m=O[1],g=Object(c.useState)(null),k=Object(a.a)(g,2),S=k[0],C=k[1],w=Object(c.useState)(!1),y=Object(a.a)(w,2),_=y[0],I=y[1],P=Object(c.useState)(!1),T=Object(a.a)(P,2),A=(T[0],T[1]),L=function(){var e=Object(b.a)(p.a.mark((function e(){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(null),e.next=4,fetch("https://fast-coast-04774.herokuapp.com/profiles/"+t);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,document.title=c.user_name,console.log(c),i(c),e.next=13,N();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),i(-1);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(p.a.mark((function e(){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fast-coast-04774.herokuapp.com/posts/user/"+t);case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c),f(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!1),S.comments.commentList.push(t),e.next=4,fetch("https://fast-coast-04774.herokuapp.com/posts/"+S.post_id,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(S)});case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e,t){"clickaway"!==t&&I(!1)},E=function(){var n=Object(b.a)(p.a.mark((function n(){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.profile.profiles_following.includes(parseInt(t))?e.profile.profiles_following=e.profile.profiles_following.filter((function(e){return e!==parseInt(t)})):e.profile.profiles_following.push(parseInt(t)),A(!0),n.next=4,fetch("https://fast-coast-04774.herokuapp.com/profiles/"+e.profile.profile_id,{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e.profile)});case 4:A(!1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(c.useEffect)((function(){L()}),[t]),r?-1===r?Object(h.jsx)(u.a,{to:{pathname:"/404",state:{from:e.location}}}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{children:[r.user_name," ",parseInt(t)!==e.profile.profile_id?Object(h.jsx)(v.a,{variant:"outlined",onClick:function(){E()},children:e.profile.profiles_following.includes(parseInt(t))?"Following":"Follow"}):null]}),Object(h.jsx)(W.a,{maxWidth:"sm",children:j.map((function(t){return Object(h.jsx)(F,{post:t,viewer_ID:e.profile.profile_id,setSnackbarOpen:I,commentCallback:function(){C(t),m(!0)}},t.post_id)}))}),Object(h.jsx)(U,{open:x,handleClose:function(){m(!1)},handleSubmit:D,profile:e.profile,post:S}),Object(h.jsx)(M.a,{open:_,autoHideDuration:3e3,onClose:z,message:"Link copied to clipboard",action:Object(h.jsx)(q.a,{size:"small","aria-label":"close",color:"inherit",onClick:z,children:Object(h.jsx)($.a,{fontSize:"small"})})})]}):null},ce=n(182),oe=n(183),re=n(128),ie=n(91),se=n(181),ae=n(178),le=n(175),ue=n(94),je=n(180),pe=n(191),be=n(190),fe=function(e){return Object(h.jsx)(je.a,{open:e.open,anchorEl:e.anchorEl,role:void 0,transition:!0,disablePortal:!0,children:function(t){var n=t.TransitionProps,c=t.placement;return Object(h.jsx)(le.a,Object(s.a)(Object(s.a)({},n),{},{style:{transformOrigin:"bottom"===c?"center top":"center bottom"},children:Object(h.jsx)(ue.a,{children:Object(h.jsx)(ae.a,{onClickAway:e.handleClose,children:Object(h.jsxs)(be.a,{autoFocusItem:e.open,id:"menu-list-grow",children:[Object(h.jsx)(f.GoogleLogout,{clientId:"399415598384-sgkom02f57l549gtnn877013fg004ke5.apps.googleusercontent.com",render:function(e){return Object(h.jsx)(pe.a,{onClick:e.onClick,disabled:e.disabled,children:"Logout"})},buttonText:"Logout",onLogoutSuccess:e.logout}),Object(h.jsx)(pe.a,{onClick:e.accColorClick,children:"Select Accent Color"})]})})})}))}})},de=function(e){return Object(h.jsx)(ue.a,{variant:"outlined",square:!0,onClick:function(){e.submit(e.color)},style:{backgroundColor:e.color,width:37.5,height:32}})},he=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722"],Oe=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)(E.a,{open:e.open,onClose:e.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(h.jsx)(H.a,{id:"form-dialog-title",children:"Pick a Color"}),Object(h.jsx)(G.a,{style:{width:150},children:Object(h.jsxs)(I.a,{container:!0,spacing:0,children:[Object(h.jsxs)(I.a,{container:!0,item:!0,xs:12,spacing:0,children:[Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[0],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[1],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[2],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[3],submit:e.handleSubmit})})]}),Object(h.jsxs)(I.a,{container:!0,item:!0,xs:12,spacing:0,children:[Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[4],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[5],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[6],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[7],submit:e.handleSubmit})})]}),Object(h.jsxs)(I.a,{container:!0,item:!0,xs:12,spacing:0,children:[Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[8],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[9],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[10],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[11],submit:e.handleSubmit})})]}),Object(h.jsxs)(I.a,{container:!0,item:!0,xs:12,spacing:0,children:[Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[12],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[13],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[14],submit:e.handleSubmit})}),Object(h.jsx)(I.a,{item:!0,xs:3,children:Object(h.jsx)(de,{color:he[15],submit:e.handleSubmit})})]})]})}),Object(h.jsx)(J.a,{})]})})},xe=n(185),me=n(5),ge=Object(T.a)((function(){return{root:{"&$disabled $notchedOutline":{boarderColor:"yellow !important"}},disabled:{},notchedOutline:{}}})),ve=Object(me.a)({})(z.a),ke=function(e){var t=Object(u.g)(),n=ge(),o=Object(c.useState)(""),r=Object(a.a)(o,2),i=r[0],l=r[1],j=Object(c.useState)(!1),p=Object(a.a)(j,2),b=p[0],f=p[1];return Object(h.jsx)("div",{style:{width:300},children:Object(h.jsx)(xe.a,{id:"free-solo-2-demo",disableClearable:!0,options:e.profiles,getOptionLabel:function(e){return e.user_name},open:b,onOpen:function(){i.length>2&&f(!0)},onClose:function(){return f(!1)},inputValue:i,onInputChange:function(e,t){l(t),f(t.length>2)},onChange:function(e,n){t.push("/profile/"+n.profile_id)},popupIcon:null,style:{hasPopupIcon:!1,hasClearIcon:!1},renderInput:function(e){return Object(h.jsx)(ve,Object(s.a)(Object(s.a)({},e),{},{label:"Search",margin:"normal",variant:"outlined",InputProps:Object(s.a)(Object(s.a)({},e.InputProps),{},{type:"search",classes:{root:n.root,disabled:n.disabled,notchedOutline:n.notchedOutline}})}))}})})},Se=Object(T.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Ce=function(e){var t=Se(),n=Object(u.g)(),o=Object(c.useState)(!1),r=Object(a.a)(o,2),i=r[0],s=r[1],l=Object(c.useState)(!1),j=Object(a.a)(l,2),f=j[0],d=j[1],O=Object(c.useState)("#3f50b5"),x=Object(a.a)(O,2),m=x[0],g=x[1],v=Object(c.useState)([]),k=Object(a.a)(v,2),S=k[0],C=k[1],w=Object(c.useRef)(null),y=function(){var e=Object(b.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fast-coast-04774.herokuapp.com/profiles");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,C(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){y()}),[]);var _=function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(!1),g(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=Object(ie.a)({palette:{primary:{light:"#757ce8",main:m,dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}});return Object(h.jsxs)(se.a,{theme:T,children:[Object(h.jsx)(ce.a,{position:"static",children:Object(h.jsxs)(oe.a,{children:[Object(h.jsxs)(I.a,{container:!0,direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(h.jsx)(I.a,{item:!0,children:Object(h.jsx)(re.a,{variant:"h5",onClick:function(){n.push("/feed")},children:"Social Network"})}),Object(h.jsx)(I.a,{item:!0,children:Object(h.jsx)("div",{className:t.title,children:Object(h.jsx)(ke,{style:{flexGrow:1},profiles:S})})}),Object(h.jsx)(I.a,{item:!0,children:Object(h.jsx)(re.a,{onClick:function(){n.push("/profile/"+e.profile.profile_id)},children:e.profile.user_name})})]}),Object(h.jsx)(q.a,{className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(){s(!i)},ref:w,"aria-controls":i?"menu-list-grow":void 0,"aria-haspopup":"true",children:Object(h.jsx)(P.a,{src:e.profile.img_url})})]})}),e.page,Object(h.jsx)(fe,{open:i,anchorEl:w.current,handleClose:function(e){w.current&&w.current.contains(e.target)||s(!1)},accColorClick:function(){s(!1),d(!0)},logout:function(){console.log("Logout Successful"),e.setProfile([]),e.setIsAuth(!1)}}),Object(h.jsx)(Oe,{open:f,handleClose:function(){d(!1)},handleSubmit:_})]})};var we=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(!1),i=Object(a.a)(r,2),j=i[0],p=i[1];return Object(h.jsx)(l.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(u.d,{children:[Object(h.jsx)(u.b,{exact:!0,path:"/",component:function(){return Object(h.jsx)(O,{setProfile:o,setIsAuth:p,isAuth:j})}}),Object(h.jsx)(Z,{path:"/Feed",isAuth:j,component:function(e){return Object(h.jsx)(Ce,Object(s.a)(Object(s.a)({},e),{},{profile:n,setProfile:o,isAuth:j,setIsAuth:p,page:Object(h.jsx)(K,{profile:n})}))}}),Object(h.jsx)(u.b,{exact:!0,path:"/404",component:Q}),Object(h.jsx)(u.b,{path:"/post/:id",component:ee}),Object(h.jsx)(Z,{path:"/profile/:id",profile:n,isAuth:j,component:function(e){return Object(h.jsx)(Ce,Object(s.a)(Object(s.a)({},e),{},{profile:n,setProfile:o,isAuth:j,setIsAuth:p,page:Object(h.jsx)(ne,{profile:n})}))}}),Object(h.jsx)(u.a,{to:"/404"})]})})})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(we,{})}),document.getElementById("root")),ye()}},[[126,1,2]]]);
//# sourceMappingURL=main.c9e686e6.chunk.js.map