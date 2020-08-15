(this["webpackJsonpclasses-to-calendar"]=this["webpackJsonpclasses-to-calendar"]||[]).push([[0],{155:function(e,a,t){e.exports=t(183)},183:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(13),l=t.n(o),i=t(97),c=t(17),s=t(27),d=t(18),u=t(256),m=t(134),h=t(257),p=t(228),g=t(224),f=t(227),y=t(226),E=t(53),v=t(187),b=Object(v.a)((function(e){return{titleWrapper:{flexGrow:1},title:{display:"inline-flex",alignItems:"center","&:hover":{cursor:"pointer"}},navLink:{marginLeft:e.spacing(2)},logo:{height:"24px",paddingRight:"8px"}}}));var C=function(e){var a=b(),t=Object(d.f)(),n=e.openInstructions,o=e.extractedClasses;return r.a.createElement(g.a,{position:"fixed"},r.a.createElement(y.a,null,r.a.createElement(E.a,{variant:"h5",className:a.titleWrapper},r.a.createElement("span",{onClick:function(){return t.push("/")},className:a.title},r.a.createElement("img",{className:a.logo,src:"/logo.png",alt:"Logo png"}),"Classes to Calendar")),r.a.createElement(f.a,{color:"inherit",className:a.navLink,component:s.b,to:"/upload",onClick:n},"Upload"),o.length>0&&r.a.createElement(f.a,{color:"inherit",className:a.navLink,component:s.b,to:"/classes"},"Classes"),r.a.createElement(f.a,{color:"inherit",className:a.navLink,onClick:n},"Instructions"),r.a.createElement(f.a,{target:"blank",href:"https://github.com/broden-wanner/classes-to-calendar/issues",color:"inherit",className:a.navLink},"Issues"),r.a.createElement(f.a,{target:"blank",href:"https://github.com/broden-wanner/classes-to-calendar",color:"inherit",className:a.navLink},"Github repo"),r.a.createElement(f.a,{color:"inherit",className:a.navLink,component:s.b,to:"/contact"},"Contact")))},w=t(229),x=t(232),k=t(230),O=t(231),N=Object(p.a)((function(e){return{homeContent:{padding:e.spacing(8,0,6),display:"flex",alignItems:"center",width:"100%"},homeButtons:{marginTop:e.spacing(4)},card:{padding:"50px"},logo:{paddingLeft:e.spacing(1)},title:{display:"flex",width:"100%",justifyContent:"center",alignItems:"center"}}}));function S(e){var a=N(),t=e.openInstructions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.homeContent},r.a.createElement(w.a,{maxWidth:"md"},r.a.createElement(k.a,{className:a.card},r.a.createElement(O.a,null,r.a.createElement(E.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,className:a.title},"Classes to Calendar",r.a.createElement("img",{className:a.logo,src:"/logo.png",alt:"Logo png",height:"100"})),r.a.createElement(E.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"An online app that takes the html file of your class schedule and enters it in Google Calendar, or you can export it to whatever calendar you want."),r.a.createElement("div",{className:a.homeButtons},r.a.createElement(x.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(x.a,{item:!0},r.a.createElement(f.a,{variant:"contained",color:"primary",component:s.b,to:"/upload",onClick:t},"Upload class schedule html file")))))))))}var I=t(51),T=t.n(I),j=t(136),A=t(79),D=t(80),L=t(137),F=t(135),R=t(15),W=t(233),B=t(234),P=t(4),z=t(119),G=t.n(z),M=t(120),H=t.n(M),U=t(121),Y=t.n(U),q=function(e){Object(L.a)(t,e);var a=Object(F.a)(t);function t(){var e;Object(A.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={dragging:!1,userHasSelectedFile:!1},e.dragCounter=0,e.dropRef=r.a.createRef(),e.allowedFiles=["html","htm"],e.isAllowedFile=function(a){var t=a.name.match(/\.([0-9a-z]+)/i);return e.allowedFiles.includes(t[1].toLowerCase())},e.handleDrag=function(e){e.preventDefault(),e.stopPropagation()},e.handleDragIn=function(a){a.preventDefault(),a.stopPropagation(),e.dragCounter++,a.dataTransfer.items&&a.dataTransfer.items.length>0&&e.setState({dragging:!0})},e.handleDragOut=function(a){a.preventDefault(),a.stopPropagation(),e.dragCounter--,e.dragCounter>0||e.setState({dragging:!1})},e.handleDrop=function(a){if(a.preventDefault(),a.stopPropagation(),e.setState({dragging:!1}),a.dataTransfer.files&&a.dataTransfer.files.length>0){var t=a.dataTransfer.files[0];if(!e.isAllowedFile(t))return void e.props.openToast("Invalid file type. Make sure it is html or htm.","error");e.setState({userHasSelectedFile:!0}),e.props.handleFileSelect(t),a.dataTransfer.clearData(),e.dragCounter=0}},e.handleFileSelect=function(a){e.setState({dragging:!1}),a.target.files&&a.target.files.length>0&&(e.setState({userHasSelectedFile:!0}),e.props.handleFileSelect(a.target.files[0]),e.dragCounter=0)},e}return Object(D.a)(t,[{key:"componentDidMount",value:function(){var e=this.dropRef.current;this.dragCounter=0,e.addEventListener("dragenter",this.handleDragIn),e.addEventListener("dragleave",this.handleDragOut),e.addEventListener("dragover",this.handleDrag),e.addEventListener("drop",this.handleDrop)}},{key:"componentWillUnmount",value:function(){var e=this.dropRef.current;e.removeEventListener("dragenter",this.handleDragIn),e.removeEventListener("dragleave",this.handleDragOut),e.removeEventListener("dragover",this.handleDrag),e.removeEventListener("drop",this.handleDrop)}},{key:"render",value:function(){var e=this.props.classes,a=r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{style:{fontSize:80},color:"action"}),r.a.createElement(E.a,{component:"h4",variant:"h4",color:"textSecondary",align:"center"},"Drag and drop .html or .htm file here")),t=r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{style:{fontSize:80},color:"action"}),r.a.createElement(E.a,{component:"h4",variant:"h4",color:"textSecondary"},"Add file")),n=r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{style:{fontSize:80},color:"action"}),r.a.createElement(E.a,{color:"textSecondary",className:e.filePreview},this.props.selectedFileName));return r.a.createElement(k.a,{variante:"outlined",className:e.cardStyle},r.a.createElement(O.a,null,r.a.createElement("label",{htmlFor:"html-upload"},r.a.createElement("div",{ref:this.dropRef,className:e.dropzoneArea},r.a.createElement("div",{className:e.uploadInfo},this.state.userHasSelectedFile?n:this.state.dragging?t:a)))),r.a.createElement(W.a,{className:e.buttonContainer},r.a.createElement("input",{accept:"text/html, text/htm",className:e.input,id:"html-upload",type:"file",onChange:this.handleFileSelect}),r.a.createElement("label",{htmlFor:"html-upload"},r.a.createElement(f.a,{variant:"contained",color:"primary",component:"span"},"Browse")),r.a.createElement(f.a,{variant:"contained",color:"primary",disabled:!this.props.selectedFileName,onClick:this.props.handleUpload},"Upload")),"uploading"===this.props.uploadStatus&&r.a.createElement("div",{className:e.loadingOverlay},r.a.createElement(B.a,null)))}}]),t}(n.Component),_=Object(P.a)((function(e){return{cardStyle:{padding:"20px"},dropzoneArea:{display:"flex",position:"relative",border:"2px dashed #ccc",width:"100%",minHeight:"400px",padding:"20px",transition:"all 0.1s ease-in-out","&:hover":{backgroundColor:e.palette.grey[200],cursor:"pointer"}},loadingOverlay:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:0,left:0,zIndex:9999,width:"100%",height:"100%",borderRadius:"4px",backgroundColor:Object(R.c)(e.palette.grey[900],.4),flexGrow:0,flexBasis:"66.66667%",maxWidth:"65.86667%",maxHeight:"94.3%",marginTop:e.spacing(2)},uploadInfo:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"},filePreview:{fontSize:"34px",marginTop:e.spacing(2)},input:{display:"none"},buttonContainer:{justifyContent:"center"}}}))(q),V=t(21),K=t(258),J=t(133),$=Object(p.a)((function(e){return{datePicker:{flex:1},datePickerContainer:{flexDirection:"column"}}}));var Z=function(e){var a=$(),t=e.startDate,n=e.onStartDateChange,o=e.endDate,l=e.onEndDateChange;return r.a.createElement(V.a,{utils:J.a},r.a.createElement(x.a,{container:!0,className:a.datePickerContainer},r.a.createElement(K.a,{className:a.datePicker,disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",label:"Start date",value:t,onChange:n,KeyboardButtonProps:{"aria-label":"change date"}}),r.a.createElement(K.a,{className:a.datePicker,disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",label:"End date",value:o,onChange:l,KeyboardButtonProps:{"aria-label":"change date"}})))},Q=Object(p.a)((function(e){return{uploadContent:{display:"flex",width:"100%",alignItems:"center",flexDirection:"column"},uploadContainer:{position:"relative",padding:0},header:{color:e.palette.grey[50],marginBottom:e.spacing(2)},sectionTitle:{marginBottom:e.spacing(1)},pageContent:{marginTop:"15vh"},datePicker:{padding:e.spacing(4)}}}));var X=function(e){var a=Q(),t=Object(d.f)(),o=Object(n.useState)(null),l=Object(c.a)(o,2),i=l[0],s=l[1],u=Object(n.useState)(""),m=Object(c.a)(u,2),h=m[0],p=m[1],g=Object(n.useState)(""),f=Object(c.a)(g,2),y=f[0],v=f[1],b=Object(n.useState)(new Date(2020,8,8)),C=Object(c.a)(b,2),N=C[0],S=C[1],I=Object(n.useState)(new Date(2020,11,16)),A=Object(c.a)(I,2),D=A[0],L=A[1];return r.a.createElement("div",{className:a.uploadContent},r.a.createElement(w.a,{className:a.pageContent},r.a.createElement(w.a,{className:a.header},r.a.createElement(E.a,{variant:"h2",align:"center",component:"h1",color:"inherit"},"Upload Schedule")),r.a.createElement(w.a,{maxWidth:"xl",className:a.uploadContainer},r.a.createElement(x.a,{container:!0,justify:"space-between",spacing:4},r.a.createElement(x.a,{item:!0,xs:8},r.a.createElement(_,{handleFileSelect:function(e){s(e),p(e.name)},handleUpload:function(){var a="".concat("","/api/upload-html"),n=new FormData;n.append("file",i),n.append("startDate",Object(j.a)(N,"Y-M-d")),n.append("endDate",Object(j.a)(D,"Y-M-d")),v("uploading"),T.a.post(a,n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){v("uploaded");var n=a.data,r=n.classes,o=n.extracted_all;if(!(r&&Array.isArray(r)&&r.length>0))throw new Error("No classes extracted. Ensure your image meets the requirements.");e.handleClasses(r),o?e.openToast("Classes extracted","success"):e.openToast("Only some data extracted. Fill in the missing info.","warning"),t.push("/classes")})).catch((function(a){console.error("Error with image upload",a);var t="";t=a.response?a.response.data.message:a.message,e.openToast(t,"error"),v("uploaded")}))},uploadStatus:y,selectedFileName:h,openToast:e.openToast})),r.a.createElement(x.a,{item:!0,xs:4},r.a.createElement(k.a,null,r.a.createElement(O.a,{className:a.datePicker},r.a.createElement(E.a,{className:a.sectionTitle,component:"h5",variant:"h5"},"Select date range"),r.a.createElement(E.a,{variant:"body2"},"Defaults to the current UMN term: ",r.a.createElement("strong",null,"Fall 2020")),r.a.createElement(Z,{startDate:N,onStartDateChange:S,endDate:D,onEndDateChange:L}))))))))},ee=t(122),ae=t.n(ee),te=t(123),ne=t.n(te),re=t(125),oe=t.n(re),le=t(126),ie=t.n(le),ce=t(124),se=t.n(ce),de=t(266),ue=t(244),me=t(185),he=t(96),pe=t(243),ge={success:ae.a,warning:ne.a,error:se.a,info:oe.a},fe=Object(p.a)((function(e){return{success:{backgroundColor:he.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:pe.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}}));var ye=function(e){var a=fe(),t=e.message,n=e.handleClose,o=e.variant,l=e.open,i=ge[o];return r.a.createElement(de.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:l,onClose:n,autoHideDuration:4e3},r.a.createElement(ue.a,{className:a[o],"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(i,{className:a.icon+" "+a.iconVariant}),t),action:[r.a.createElement(me.a,{key:"close","aria-label":"close",color:"inherit",onClick:n},r.a.createElement(ie.a,{className:a.icon}))]}))},Ee=t(262),ve=t(245),be=t(246),Ce=t(241),we=t(265),xe=t(239),ke=t(247),Oe=t(127),Ne=t.n(Oe),Se=Object(P.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(Ee.a),Ie=Object(P.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(ve.a),Te=Object(P.a)((function(e){return{root:{padding:e.spacing(2)}}}))(be.a),je=Object(p.a)((function(e){return{heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},inputField:{marginBottom:e.spacing(1)},info:{flexDirection:"column"}}}));var Ae=function(e){var a=je(),t=e.cls,o=e.handleClassChange,l=e.handleClassDelete,i=Object(n.useState)(t.name),s=Object(c.a)(i,2),d=s[0],u=s[1],m=function(e){t[e.target.name]=e.target.value,o(t),"name"===e.target.name&&u(t.name)};return r.a.createElement(Se,{key:t.id},r.a.createElement(Ie,{expandIcon:r.a.createElement(Ne.a,null),"aria-controls":"panel1a-content"},r.a.createElement(E.a,{className:a.heading,color:"primary"},d)),r.a.createElement(Te,{className:a.info},Object.keys(t).map((function(e,n){return"id"!==e&&r.a.createElement(Ce.a,{key:n,className:a.inputField,required:!0},r.a.createElement(we.a,null,e.replace(/_/g," ").replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))),r.a.createElement(xe.a,{name:e,defaultValue:t[e],onChange:m}))}))),r.a.createElement(ke.a,null,r.a.createElement(f.a,{color:"primary",onClick:function(){l(t)},variant:"contained"},"Remove")))},De=t(268),Le=t(251),Fe=t(132),Re=t.n(Fe),We=t(67),Be=t.n(We),Pe=t(101),ze=function(){function e(){Object(A.a)(this,e),this.signedIn=!1,this.gapi=null,this.onLoadCallback=null,this.calendar=null,this.GoogleAuth=null,this.initClient=this.initClient.bind(this),this.handleClientLoad=this.handleClientLoad.bind(this),this.handleAuthClick=this.handleAuthClick.bind(this),this.updateSigninStatus=this.updateSigninStatus.bind(this),this.handleClientLoad()}return Object(D.a)(e,[{key:"getConfig",value:function(){var e=Object(Pe.a)(Be.a.mark((function e(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("".concat("","/api/google-config"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"initClient",value:function(){var e=Object(Pe.a)(Be.a.mark((function e(){var a,t=this;return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.gapi=window.gapi,e.next=3,this.getConfig();case 3:a=e.sent,this.gapi.client.init(a.data).then((function(){if(t.GoogleAuth=t.gapi.auth2.getAuthInstance(),!t.GoogleAuth)throw new Error("Could not authorize Google API");t.GoogleAuth.isSignedIn.listen(t.updateSigninStatus),t.updateSigninStatus(t.GoogleAuth.isSignedIn.get()),t.onLoadCallback&&t.onLoadCallback(t.signedIn)})).catch((function(e){console.error("Error in setting up the google client:"),console.error(e)}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleClientLoad",value:function(){var e=this;this.gapi=window.gapi;var a=document.createElement("script");a.src="https://apis.google.com/js/api.js",document.body.appendChild(a),a.onload=function(){window.gapi.load("client:auth2",e.initClient)}}},{key:"handleAuthClick",value:function(){this.GoogleAuth?this.GoogleAuth.signIn():console.error("App not authorized with Google")}},{key:"updateSigninStatus",value:function(e){this.signedIn=e,this.onLoadCallback&&this.onLoadCallback(e)}},{key:"listCalendars",value:function(){return this.gapi.client.calendar.calendarList.list()}},{key:"createCalendar",value:function(e){var a=this,t={summary:e,timeZone:"America/Chicago"};return this.gapi.client.calendar.calendars.insert(t).then((function(e){a.calendar=e.result,console.log(e)}))}},{key:"createEvent",value:function(e){return this.gapi.client.calendar.events.insert({calendarId:this.calendar.id,resource:e})}},{key:"setCalendar",value:function(e){this.calendar=e}}]),e}(),Ge=t(267),Me=t(248),He=t(260),Ue=t(263),Ye=t(259),qe=t(249),_e=t(250),Ve=t(128),Ke=t.n(Ve),Je=t(129),$e=t.n(Je),Ze=t(130),Qe=t.n(Ze),Xe=Object(p.a)((function(e){return{card:{position:"relative",marginBottom:e.spacing(1)},buttonContainer:{display:"flex",justifyContent:"center"},optionsForm:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},formField:{marginLeft:e.spacing(4),marginBottom:e.spacing(2)},extendedIcon:{marginRight:"4px"},infoText:{marginBottom:e.spacing(1)},actionSection:{marginBottom:e.spacing(3),marginTop:e.spacing(2),"&:last-child":{marginBottom:0},"&:first-child":{marginTop:0}},datePicker:{flex:1,"&:last-child":{marginLeft:e.spacing(2)}}}}));var ea=function(e){var a=Xe(),t=e.sendToGcal,o=e.authorizeGcal,l=e.gcalClient,i=e.signedIn,s=e.exportCalendar,d=Object(n.useState)("new"),u=Object(c.a)(d,2),m=u[0],h=u[1],p=Object(n.useState)([]),g=Object(c.a)(p,2),y=g[0],v=g[1],b=Object(n.useState)(""),C=Object(c.a)(b,2),w=C[0],x=C[1],N=Object(n.useState)("Class Schedule"),S=Object(c.a)(N,2),I=S[0],T=S[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{className:a.card},r.a.createElement(O.a,null,r.a.createElement("div",{className:a.actionSection},r.a.createElement(E.a,{variant:"h6",component:"h6"},"Add to Google Calendar"),r.a.createElement("p",{className:a.infoText},"You can add your classes to Google Calendar by either making a new calendar or adding them to an existing one. You must authorize GCal in order to do this."),r.a.createElement("div",{className:a.optionsForm},r.a.createElement(Ce.a,{component:"fieldset"},r.a.createElement(Ge.a,{"aria-label":"calendarOption",name:"calendarOption",defaultValue:m,onChange:function(a){h(a.target.value),"existing"===a.target.value&&0===y.length&&l.listCalendars().then((function(e){v(e.result.items)})).catch((function(a){e.openToast("Could not retrieve your calendar list.","error"),console.error(a)}))}},r.a.createElement(Me.a,{value:"new",control:r.a.createElement(He.a,null),label:"Make a new calendar",disabled:!i}),"new"===m&&r.a.createElement(Ue.a,{className:a.formField,label:"New calendar name",variant:"filled",onChange:function(e){T(e.target.value)},defaultValue:I,disabled:!i}),r.a.createElement(Me.a,{value:"existing",control:r.a.createElement(He.a,null),label:"Add to existing calendar",disabled:!i}),"existing"===m&&r.a.createElement(Ce.a,{className:a.formField,style:{width:"300px"}},r.a.createElement(we.a,null,"Select from calendars..."),r.a.createElement(Ye.a,{label:"existing-calendar",defaultValue:"",onChange:function(e){x(e.target.value)},style:{width:"300px"}},y.map((function(e){return r.a.createElement(qe.a,{key:e.id,value:e.id},e.summary)}))))))),r.a.createElement("div",{className:a.buttonContainer},r.a.createElement(f.a,{onClick:o},r.a.createElement(Ke.a,{className:a.extendedIcon}),"Authorize GCal"),r.a.createElement(f.a,{color:"primary",onClick:function(a){if("new"===m)I?t(m,I,null):e.openToast("Must specify a name for the new calendar","error");else if("existing"===m)if(w){var n=y.filter((function(e){return e.id===w}))[0];t(m,null,n)}else e.openToast("Must select a calendar","error")},disabled:!i},r.a.createElement($e.a,{className:a.extendedIcon}),"Send to GCal"))),r.a.createElement(_e.a,null),e.children,r.a.createElement("div",{className:a.actionSection},r.a.createElement(E.a,{variant:"h6",component:"h6"},"Export to Another Calendar"),r.a.createElement("p",{className:a.infoText},"You can also export your classes to another calendar by clicking the export button. This will download a file that you can import to any other calendar service."),r.a.createElement("div",{className:a.buttonContainer},r.a.createElement(f.a,{color:"primary",onClick:s},r.a.createElement(Qe.a,{className:a.extendedIcon}),"Download"))))))},aa=Object(p.a)((function(e){return{classesPage:{display:"flex",width:"100%",justifyContent:"center",overflow:"auto"},loadingOverlay:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:0,left:0,zIndex:9999,width:"100%",height:"100%",borderRadius:"4px",backgroundColor:Object(R.c)(e.palette.grey[900],.4)},content:{height:"max-content",marginTop:"10vh",marginBottom:"10vh"},classesContainer:{display:"flex"},classList:{textAlign:"center",flex:3},actionCol:{flex:2,position:"relative",marginLeft:e.spacing(1)},header:{color:e.palette.grey[50],marginBottom:e.spacing(2)},classesInfo:{borderBottomLeftRadius:0,borderBottomRightRadius:0,textAlign:"left"},fabButton:{position:"relative",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}})),ta=new ze;var na=function(e){var a=aa(),t=Object(n.useState)(ta.signedIn),o=Object(c.a)(t,2),l=o[0],i=o[1],s=Object(n.useState)("unbegun"),u=Object(c.a)(s,2),m=u[0],h=u[1];return ta.onLoadCallback=function(e){i(e)},0===e.extractedClasses.length?r.a.createElement(d.a,{to:"/"}):r.a.createElement("div",{className:a.classesPage},r.a.createElement(w.a,{className:a.content},r.a.createElement(w.a,{className:a.header},r.a.createElement(E.a,{variant:"h2",align:"center",component:"h1",color:"inherit"},"Review Classes")),r.a.createElement(w.a,{className:a.classesContainer},r.a.createElement("div",{className:a.classList},r.a.createElement(k.a,{className:a.classesInfo},r.a.createElement(O.a,{style:{paddingBottom:"16px"}},"The classes extracted from your html are below. Review and edit the info for each class by clicking on it and changing anything that's incorrect.")),e.extractedClasses.map((function(a){return r.a.createElement(Ae,{key:a.id,cls:a,handleClassChange:e.handleClassChange,handleClassDelete:e.handleClassDelete})})),r.a.createElement(De.a,{title:"Add class","aria-label":"add class"},r.a.createElement(Le.a,{color:"primary",className:a.fabButton,onClick:e.handleClassAdd},r.a.createElement(Re.a,null)))),r.a.createElement("div",{className:a.actionCol},r.a.createElement(ea,{sendToGcal:function(a,t,n){h("creating"),function(e,a,t){return"new"===e?a?ta.createCalendar(a):new Promise((function(e,a){return a()})):"existing"===e?new Promise(t?function(e,a){ta.setCalendar(t),e()}:function(e,a){return a()}):void 0}(a,t,n).then((function(){!function(){ta.calendar||e.openToast("A calendar must be selected","error");var a=[],t=0;T.a.post("".concat("","/api/events"),e.extractedClasses).then((function(n){(a=n.data).forEach((function(n){ta.createEvent(n).then((function(n){++t===a.length&&(h("created"),e.openToast("Successfully create events! Check your gcal","success"))})).catch((function(a){e.openToast("Could not create event "+n.summary,"error"),console.error(a)}))}))})).catch((function(a){e.openToast(a.message,"error"),h("error"),console.error(a)}))}()})).catch((function(a){e.openToast("Could not create or add to calendar.","error")}))},authorizeGcal:function(){ta.handleAuthClick()},gcalClient:ta,exportCalendar:function(){T.a.post("".concat("","/api/ics"),e.extractedClasses).then((function(e){var a=e.data.ics,t=document.createElement("a");t.setAttribute("href","data:text/calendar;charset=utf-8,"+encodeURIComponent(a)),t.setAttribute("download","class-calendar.ics"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)})).catch((function(a){e.openToast("Could create ics file. Please try again.","error"),console.error(a)}))},signedIn:l,openToast:e.openToast},"creating"===m&&r.a.createElement("div",{className:a.loadingOverlay},r.a.createElement(B.a,null)))))))},ra=t(261),oa=t(252),la=t(236),ia=t(242),ca=t(186),sa=t(253),da=t(254),ua=t(237),ma=Object(p.a)((function(e){return{content:{maxWidth:"960px",width:"100%"}}}));var ha=function(e){var a=ma(),t=e.open,n=e.onClose;return r.a.createElement(ra.a,{open:t,onClose:n,maxWidth:"md"},r.a.createElement(oa.a,{id:"simple-dialog-title"},"How To"),r.a.createElement(la.a,{className:a.content},r.a.createElement(ia.a,{component:"nav",dense:!0},r.a.createElement(ca.a,null,r.a.createElement(sa.a,null,r.a.createElement(E.a,null,"1.")),r.a.createElement(da.a,null,"Go to myu.umn.edu, click on academics, and go to the 'My Classes' tab.")),r.a.createElement(ca.a,null,r.a.createElement(sa.a,null,r.a.createElement(E.a,null,"2.")),r.a.createElement(da.a,null,"Click to a week where all the classes appear. (If the first week doesn't have classes on Monday for instance, go to the second week so the Monday classes can be seen.)")),r.a.createElement(ca.a,{style:{display:"text",justifyContent:"center"}},r.a.createElement("img",{src:"example-calendar.png",height:"300",alt:"Example Calendar"})),r.a.createElement(ca.a,null,r.a.createElement(sa.a,null,r.a.createElement(E.a,null,"3.")),r.a.createElement(da.a,null,'Right-click somewhere on the webpage and click "Save As..." to save the html file somewhere you\'ll rememeber. (This will also download an extra folder that you can delete. All you need is the .html file)')),r.a.createElement(ca.a,null,r.a.createElement(sa.a,null,r.a.createElement(E.a,null,"4.")),r.a.createElement(da.a,null,"Drag and drop the html file here or select from your files by clicking on the upload zone.")),r.a.createElement(ca.a,null,r.a.createElement(sa.a,null,r.a.createElement(E.a,null,"5.")),r.a.createElement(da.a,null,"Once your html file is chosen, select the dates you would like the classes to be added with the date picker. The start and end dates default to the current UMN term dates.")),r.a.createElement(ca.a,null,r.a.createElement(sa.a,null,r.a.createElement(E.a,null,"6.")),r.a.createElement(da.a,null,'Once your html file is chose, click the "Upload" button, and wait for the classes to be read.')),r.a.createElement(ca.a,null,r.a.createElement(sa.a,null,r.a.createElement(E.a,null,"7.")),r.a.createElement(da.a,null,"After the classes have been loaded, correct any data that is wrong on the next screen by clicking the class and directly editing it.")),r.a.createElement(ca.a,null,r.a.createElement(sa.a,null,r.a.createElement(E.a,null,"8.")),r.a.createElement(da.a,null,"Authorize the app to use your Google Calendar, and set your calendar creation options. Then submit and voil\xe0.")))),r.a.createElement(ua.a,null,r.a.createElement(f.a,{onClick:n,color:"primary"},"Close")))},pa=Object(p.a)((function(e){return{page:{display:"flex",width:"100%",overflow:"auto"},content:{marginTop:"10vh",paddingBottom:"5vh","& p":{marginBottom:e.spacing(5)}},card:{marginBottom:"10vh",padding:e.spacing(2)}}}));var ga=function(){var e=pa();return r.a.createElement("div",{className:e.page},r.a.createElement(w.a,{className:e.content},r.a.createElement(k.a,{className:e.card},r.a.createElement(O.a,null,r.a.createElement(E.a,{variant:"h2",component:"h2"},"Privacy Policy"),r.a.createElement(E.a,null,"Last updated January 06, 2020"),r.a.createElement("p",null,'Thank you for choosing to be part of our community (\u201cCompany\u201d, \u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our notice\xa0, or our practices with regards to your personal information, please contact us at wanne036@umn.edu. When you visit our website classes-to-calendar.xyz, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice\xa0that you do not agree with, please discontinue use of our Sites and our services.\xa0 This privacy notice\xa0applies to all information collected through our website (such as classes-to-calendar.xyz), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy notice\xa0as the "Services").\xa0\xa0 Please read this privacy notice\xa0carefully as it will help you make informed decisions about sharing your personal information with us.\xa0\xa0'),r.a.createElement(E.a,{variant:"h6",component:"h6"},"1. WHAT INFORMATION DO WE COLLECT AND HOW DO WE USE IT?\xa0\xa0"),r.a.createElement("p",null,"We collect no information from any users. All data that is used to complete the service provided by the website for a specific user is not knowingly retained anywhere. That is the design of the website. The data that is used during use is only for the function of the app and that is all."),r.a.createElement(E.a,{variant:"h6",component:"h6"},"2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?\xa0\xa0"),r.a.createElement("p",null,"In Short:\xa0\xa0Your information will not be shared with anyone since we keep none of your information. If under any circumstance you find your information has been shared, please email wanne036 or report it."),r.a.createElement(E.a,{variant:"h6",component:"h6"},"3. HOW LONG DO WE KEEP YOUR INFORMATION?"),"\xa0",r.a.createElement("p",null,"In Short:\xa0\xa0We don't keep any of your information. All information pertaining to a user is destroyed after they leave the site."),r.a.createElement(E.a,{variant:"h6",component:"h6"},"4. HOW DO WE KEEP YOUR INFORMATION SAFE?"),"\xa0\xa0",r.a.createElement("p",null,"In Short:\xa0\xa0We aim to protect your personal information through a system of organizational and technical security measures.\xa0\xa0 We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. No personal information is retained after use, and all that is transmitted during use is sent with encryption over HTTPS. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the services within a secure environment.\xa0"),r.a.createElement(E.a,{variant:"h6",component:"h6"},"5. DO WE COLLECT INFORMATION FROM MINORS?\xa0\xa0"),"\xa0",r.a.createElement("p",null,"In Short:\xa0\xa0We do not knowingly collect data from or market to children under 18 years of age.\xa0\xa0 We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent\u2019s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at wanne036@umn.edu."),r.a.createElement(E.a,{variant:"h6",component:"h6"},"6. WHAT ARE YOUR PRIVACY RIGHTS?"),"\xa0\xa0",r.a.createElement("p",null,"If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:\xa0",r.a.createElement("a",{href:"http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"},"http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"),"."),r.a.createElement(E.a,{variant:"h6",component:"h6"},"7. CONTROLS FOR DO-NOT-TRACK FEATURES\xa0"),"\xa0",r.a.createElement("p",null,"Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (\u201cDNT\u201d) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice."),r.a.createElement(E.a,{variant:"h6",component:"h6"},"8. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"),"\xa0",r.a.createElement("p",null,"In Short:\xa0\xa0Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.\xa0\xa0\xa0 California Civil Code Section 1798.83, also known as the \u201cShine The Light\u201d law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.\xa0 If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from our systems."),r.a.createElement(E.a,{variant:"h6",component:"h6"},"9. DO WE MAKE UPDATES TO THIS POLICY?"),"\xa0\xa0",r.a.createElement("p",null,"In Short:\xa0\xa0Yes, we will update this policy as necessary to stay compliant with relevant laws.\xa0\xa0 We may update this privacy notice\xa0from time to time. The updated version will be indicated by an updated \u201cRevised\u201d date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice\xa0frequently to be informed of how we are protecting your information."),r.a.createElement(E.a,{variant:"h6",component:"h6"},"10. HOW CAN YOU CONTACT US ABOUT THIS POLICY?\xa0"),r.a.createElement("p",null,"If you have questions or comments about this policy, you may email us at wanne036@umn.edu or by post to: Broden Wanner, 615 Fulton Street SE #214 Minneapolis, MN 55455, United States")))))},fa=Object(p.a)((function(e){return{footer:{position:"absolute",top:"auto",bottom:"0",width:"100%"},extendedIcon:{marginRight:"8px"},footerLink:{color:e.palette.grey[400],opacity:.5},divder:{marginLeft:e.spacing(2),marginRight:e.spacing(2),color:e.palette.grey[400],opacity:.5}}}));var ya=function(){var e=fa();return r.a.createElement(g.a,{position:"fixed",color:"primary",className:e.footer},r.a.createElement(y.a,null,r.a.createElement(x.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(s.b,{to:"/privacy-policy",className:e.footerLink},"Privacy Policy"),r.a.createElement("span",{className:e.divder},"|"),r.a.createElement(s.b,{to:"/contact",className:e.footerLink},"Contact"),r.a.createElement("span",{className:e.divder},"|"),r.a.createElement(E.a,{component:"p",variant:"body2",className:e.footerLink},"\xa9 2020 Broden Wanner"))))},Ea=t(255),va=Object(p.a)((function(e){return{page:{display:"flex",width:"100%",overflow:"auto"},content:{marginTop:"10vh",paddingBottom:"5vh","& p":{marginBottom:e.spacing(3)}},title:{marginBottom:e.spacing(5)},email:{fontWeight:"bold"},card:{marginBottom:"10vh",padding:e.spacing(2)}}}));var ba=function(){var e=va();return r.a.createElement("div",{className:e.page},r.a.createElement(w.a,{className:e.content,maxWidth:"md"},r.a.createElement(k.a,{className:e.card},r.a.createElement(O.a,null,r.a.createElement(E.a,{variant:"h2",component:"h2",className:e.title},"Contact"),r.a.createElement(E.a,null,"If you are having issues or would like to contribute, you can access the"," ",r.a.createElement(Ea.a,{target:"blank",href:"https://github.com/broden-wanner/classes-to-calendar"},"GitHub repository.")," ","For issues, go to the issues tab of the project and file an issue. For other questions, send an email to the following address:"),r.a.createElement(E.a,{className:e.email},"Email: ",r.a.createElement(Ea.a,{href:"mailto:wanne036@umn.edu"},"wanne036@umn.edu"))))))},Ca=Object(m.a)({palette:{primary:{light:"#913447",main:"#760219",dark:"#520111",contrastText:"#fff"},secondary:{light:"#FFDF7E",main:"#FFD75E",dark:"#b29641",contrastText:"#000"}}}),wa=Object(p.a)((function(e){return{background:{display:"flex",height:"100vh",width:"100vw",background:'url("gopher.jpg") no-repeat center center fixed',backgroundSize:"cover"}}}));var xa=function(){var e=wa(),a=Object(n.useState)(JSON.parse(localStorage.getItem("extractedClasses"))||[]),t=Object(c.a)(a,2),o=t[0],l=t[1],m=Object(n.useState)(!1),p=Object(c.a)(m,2),g=p[0],f=p[1],y=Object(n.useState)(""),E=Object(c.a)(y,2),v=E[0],b=E[1],w=Object(n.useState)("error"),x=Object(c.a)(w,2),k=x[0],O=x[1],N=Object(n.useState)(!1),I=Object(c.a)(N,2),T=I[0],j=I[1];Object(n.useEffect)((function(){localStorage.setItem("extractedClasses",JSON.stringify(o))}),[o]);var A=function(e,a){f(!0),b(e),O(a)},D=function(){j(!0)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(h.a,{theme:Ca},r.a.createElement("div",{className:e.background},r.a.createElement(s.a,null,r.a.createElement(C,{openInstructions:D,extractedClasses:o}),r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(S,{openInstructions:D})),r.a.createElement(d.b,{exact:!0,path:"/upload"},r.a.createElement(X,{openToast:A,handleClasses:function(e){l(e)}})),r.a.createElement(d.b,{exact:!0,path:"/classes"},r.a.createElement(na,{extractedClasses:o,handleClassChange:function(e){var a=o.indexOf(e);o.splice(a,1,e),l(Object(i.a)(o))},handleClassAdd:function(){var e={name:"Class Name",dept:"",course_num:"",section:"",location:"",start_time:"",end_time:"",start_date:"",end_date:"",days_of_week:"",id:o.length+1};l([].concat(Object(i.a)(o),[e]))},handleClassDelete:function(e){var a=o.indexOf(e);o.splice(a,1),l(Object(i.a)(o)),A("Class deleted","success")},openToast:A})),r.a.createElement(d.b,{exact:!0,path:"/privacy-policy"},r.a.createElement(ga,null)),r.a.createElement(d.b,{exact:!0,path:"/contact"},r.a.createElement(ba,null)),r.a.createElement(ya,null)),r.a.createElement(ha,{open:T,onClose:function(){j(!1)}}),r.a.createElement(ye,{open:g,handleClose:function(e,a){"clickaway"!==a&&f(!1)},message:v,variant:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(xa,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[155,1,2]]]);
//# sourceMappingURL=main.22278ed9.chunk.js.map