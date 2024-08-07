import{j as K,m as Q,_ as B,V as U,k as Y,ao as Z,d as ee,u as oe,s as w,l as ne,e as te,g as s,C as le,ar as ie,t as ae,h as se,v as re,i as V,T as ce,as as de,at as ue,au as ge,av as pe,aw as me,ax as fe,ay as ve,az as $e,P as v}from"./index-KkQdgUcf.js";import{c as ye}from"./vnode-DKG64mRH.js";const _=(e,o,n,i,a)=>({backgroundColor:e,border:`${i.lineWidth}px ${i.lineType} ${o}`,[`${a}-icon`]:{color:n}}),he=e=>{const{componentCls:o,motionDurationSlow:n,marginXS:i,marginSM:a,fontSize:u,fontSizeLG:r,lineHeight:g,borderRadiusLG:$,motionEaseInOutCirc:c,alertIconSizeLG:d,colorText:m,paddingContentVerticalSM:f,alertPaddingHorizontal:y,paddingMD:C,paddingContentHorizontalLG:x}=e;return{[o]:B(B({},U(e)),{position:"relative",display:"flex",alignItems:"center",padding:`${f}px ${y}px`,wordWrap:"break-word",borderRadius:$,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:i,lineHeight:0},"&-description":{display:"none",fontSize:u,lineHeight:g},"&-message":{color:m},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${c}, opacity ${n} ${c},
        padding-top ${n} ${c}, padding-bottom ${n} ${c},
        margin-bottom ${n} ${c}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",paddingInline:x,paddingBlock:C,[`${o}-icon`]:{marginInlineEnd:a,fontSize:d,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:i,color:m,fontSize:r},[`${o}-description`]:{display:"block"}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Ce=e=>{const{componentCls:o,colorSuccess:n,colorSuccessBorder:i,colorSuccessBg:a,colorWarning:u,colorWarningBorder:r,colorWarningBg:g,colorError:$,colorErrorBorder:c,colorErrorBg:d,colorInfo:m,colorInfoBorder:f,colorInfoBg:y}=e;return{[o]:{"&-success":_(a,i,n,e,o),"&-info":_(y,f,m,e,o),"&-warning":_(g,r,u,e,o),"&-error":B(B({},_(d,c,$,e,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},xe=e=>{const{componentCls:o,iconCls:n,motionDurationMid:i,marginXS:a,fontSizeIcon:u,colorIcon:r,colorIconHover:g}=e;return{[o]:{"&-action":{marginInlineStart:a},[`${o}-close-icon`]:{marginInlineStart:a,padding:0,overflow:"hidden",fontSize:u,lineHeight:`${u}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:r,transition:`color ${i}`,"&:hover":{color:g}}},"&-close-text":{color:r,transition:`color ${i}`,"&:hover":{color:g}}}}},Se=e=>[he(e),Ce(e),xe(e)],Ie=K("Alert",e=>{const{fontSizeHeading3:o}=e,n=Q(e,{alertIconSizeLG:o,alertPaddingHorizontal:12});return[Se(n)]}),be={success:de,info:ue,error:ge,warning:pe},we={success:me,info:fe,error:ve,warning:$e},_e=Z("success","info","warning","error"),Be=()=>({type:v.oneOf(_e),closable:{type:Boolean,default:void 0},closeText:v.any,message:v.any,description:v.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:v.any,closeIcon:v.any,onClose:Function}),Te=ee({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:Be(),setup(e,o){let{slots:n,emit:i,attrs:a,expose:u}=o;const{prefixCls:r,direction:g}=oe("alert",e),[$,c]=Ie(r),d=w(!1),m=w(!1),f=w(),y=l=>{l.preventDefault();const p=f.value;p.style.height=`${p.offsetHeight}px`,p.style.height=`${p.offsetHeight}px`,d.value=!0,i("close",l)},C=()=>{var l;d.value=!1,m.value=!0,(l=e.afterClose)===null||l===void 0||l.call(e)},x=ne(()=>{const{type:l}=e;return l!==void 0?l:e.banner?"warning":"info"});u({animationEnd:C});const j=w({});return()=>{var l,p,T,H,z,E,A,O,L,F;const{banner:D,closeIcon:W=(l=n.closeIcon)===null||l===void 0?void 0:l.call(n)}=e;let{closable:M,showIcon:h}=e;const P=(p=e.closeText)!==null&&p!==void 0?p:(T=n.closeText)===null||T===void 0?void 0:T.call(n),S=(H=e.description)!==null&&H!==void 0?H:(z=n.description)===null||z===void 0?void 0:z.call(n),G=(E=e.message)!==null&&E!==void 0?E:(A=n.message)===null||A===void 0?void 0:A.call(n),I=(O=e.icon)!==null&&O!==void 0?O:(L=n.icon)===null||L===void 0?void 0:L.call(n),R=(F=n.action)===null||F===void 0?void 0:F.call(n);h=D&&h===void 0?!0:h;const k=(S?we:be)[x.value]||null;P&&(M=!0);const t=r.value,N=te(t,{[`${t}-${x.value}`]:!0,[`${t}-closing`]:d.value,[`${t}-with-description`]:!!S,[`${t}-no-icon`]:!h,[`${t}-banner`]:!!D,[`${t}-closable`]:M,[`${t}-rtl`]:g.value==="rtl",[c.value]:!0}),X=M?s("button",{type:"button",onClick:y,class:`${t}-close-icon`,tabindex:0},[P?s("span",{class:`${t}-close-text`},[P]):W===void 0?s(le,null,null):W]):null,q=I&&(ie(I)?ye(I,{class:`${t}-icon`}):s("span",{class:`${t}-icon`},[I]))||s(k,{class:`${t}-icon`},null),J=ae(`${t}-motion`,{appear:!1,css:!0,onAfterLeave:C,onBeforeLeave:b=>{b.style.maxHeight=`${b.offsetHeight}px`},onLeave:b=>{b.style.maxHeight="0px"}});return $(m.value?null:s(ce,J,{default:()=>[se(s("div",V(V({role:"alert"},a),{},{style:[a.style,j.value],class:[a.class,N],"data-show":!d.value,ref:f}),[h?q:null,s("div",{class:`${t}-content`},[G?s("div",{class:`${t}-message`},[G]):null,S?s("div",{class:`${t}-description`},[S]):null]),R?s("div",{class:`${t}-action`},[R]):null,X]),[[re,!d.value]])]}))}}}),Ee=Y(Te);export{Ee as _};
