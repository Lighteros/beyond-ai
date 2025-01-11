import{$ as ft,A as Gt,B as Ut,D as Qt,E as Xt,F as Yt,Fa as re,G as Zt,Ia as oe,Ma as ie,Q as Jt,W as It,Y as g,b as st,c as ct,ca as te,d as _t,f as Tt,fa as ee,g as Ft,j as qt,ja as ne,k as Ht,l as lt,m as Kt,o as ut,p as A,q as $t,t as v,u as Ot,v as Et,x as Vt,y as G,z as J}from"./chunk-RBQJDO3X.mjs";import{e as S,g as y}from"./chunk-HGKSM6ZA.mjs";y();y();y();y();var tt=t=>t;var dt={ms:t=>1e3*t,s:t=>t/1e3};function At(t,e){return e?t*(1e3/e):0}y();y();var ae=(t,e,r)=>(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t,Ae=1e-7,Me=12;function Ce(t,e,r,n,o){let i,a,f=0;do a=e+(r-e)/2,i=ae(a,n,o)-t,i>0?r=a:e=a;while(Math.abs(i)>Ae&&++f<Me);return a}function et(t,e,r,n){if(t===e&&r===n)return tt;let o=i=>Ce(i,0,1,t,r);return i=>i===0||i===1?i:ae(o(i),e,n)}var Dn={ease:et(.25,.1,.25,1),"ease-in":et(.42,0,1,1),"ease-in-out":et(.42,0,.58,1),"ease-out":et(0,0,.58,1)};y();function se(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}y();var X={};Object.defineProperty(X,"__esModule",{value:!0});X.warning=function(){};X.invariant=function(){};var Fn=X.__esModule,qn=X.warning,Pe=X.invariant;y();var De=5;function pt(t,e,r){let n=Math.max(e-De,0);return At(r-t(n),e-n)}var Y={stiffness:100,damping:10,mass:1},Be=(t=Y.stiffness,e=Y.damping,r=Y.mass)=>e/(2*Math.sqrt(t*r));function Ne(t,e,r){return t<e&&r>=e||t>e&&r<=e}var Ct=({stiffness:t=Y.stiffness,damping:e=Y.damping,mass:r=Y.mass,from:n=0,to:o=1,velocity:i=0,restSpeed:a=2,restDistance:f=.5}={})=>{i=i?dt.s(i):0;let u={done:!1,hasReachedTarget:!1,current:n,target:o},d=o-n,s=Math.sqrt(t/r)/1e3,c=Be(t,e,r),b;if(c<1){let p=s*Math.sqrt(1-c*c);b=w=>o-Math.exp(-c*s*w)*((c*s*d-i)/p*Math.sin(p*w)+d*Math.cos(p*w))}else b=p=>o-Math.exp(-s*p)*(d+(s*d-i)*p);return p=>{u.current=b(p);let w=p===0?i:pt(b,p,u.current),E=Math.abs(w)<=a,x=Math.abs(o-u.current)<=f;return u.done=E&&x,u.hasReachedTarget=Ne(n,o,u.current),u}},ce=({from:t=0,velocity:e=0,power:r=.8,decay:n=.325,bounceDamping:o,bounceStiffness:i,changeTarget:a,min:f,max:u,restDistance:d=.5,restSpeed:s})=>{n=dt.ms(n);let c={hasReachedTarget:!1,done:!1,current:t,target:t},b=l=>f!==void 0&&l<f||u!==void 0&&l>u,p=l=>f===void 0?u:u===void 0||Math.abs(f-l)<Math.abs(u-l)?f:u,w=r*e,E=t+w,x=a===void 0?E:a(E);c.target=x,x!==E&&(w=x-t);let j=l=>-w*Math.exp(-l/n),M=l=>x+j(l),V=l=>{let _=j(l),z=M(l);c.done=Math.abs(_)<=d,c.current=c.done?x:z},T,C,B=l=>{b(c.current)&&(T=l,C=Ct({from:c.current,to:p(c.current),velocity:pt(M,l,c.current),damping:o,stiffness:i,restDistance:d,restSpeed:s}))};return B(0),l=>{let _=!1;return!C&&T===void 0&&(_=!0,V(l),B(l)),T!==void 0&&l>T?(c.hasReachedTarget=!0,C(l-T)):(c.hasReachedTarget=!1,!_&&V(l),c)}},Mt=10,We=1e4;function le(t){let e,r=Mt,n=t(0),o=[n.current];for(;!n.done&&r<We;)n=t(r),o.push(n.done?n.target:n.current),e===void 0&&n.hasReachedTarget&&(e=r),r+=Mt;let i=r-Mt;return o.length===1&&o.push(n.current),{keyframes:o,duration:i/1e3,overshootDuration:(e??i)/1e3}}var ze=["","X","Y","Z"],Fe=["translate","scale","rotate","skew"];var ue={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},qe={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:ue,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:tt},skew:ue},He=new Map,Ke=t=>`--motion-${t}`,he=["x","y","z"];Fe.forEach(t=>{ze.forEach(e=>{he.push(t+e),He.set(Ke(t+e),qe[t])})});var hr=new Set(he);var fe=t=>document.createElement("div").animate(t,{duration:.001}),de={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{fe({opacity:[1]})}catch{return!1}return!0},finished:()=>!!fe({opacity:[0,1]}).finished},kt={},$e={};for(let t in de)$e[t]=()=>(kt[t]===void 0&&(kt[t]=de[t]()),kt[t]);function ge(t,e){var r;return typeof t=="string"?e?((r=e[t])!==null&&r!==void 0||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}function ye(t){let e=new WeakMap;return(r={})=>{let n=new Map,o=(a=0,f=100,u=0,d=!1)=>{let s=`${a}-${f}-${u}-${d}`;return n.has(s)||n.set(s,t(Object.assign({from:a,to:f,velocity:u,restSpeed:d?.05:2,restDistance:d?.01:.5},r))),n.get(s)},i=a=>(e.has(a)||e.set(a,le(a)),e.get(a));return{createAnimation:(a,f,u,d,s)=>{var c,b;let p,w=a.length;if(u&&w<=2&&a.every(Ge)){let x=a[w-1],j=w===1?null:a[0],M=0,V=0,T=s?.generator;if(T){let{animation:l,generatorStartTime:_}=s,z=l?.startTime||_||0,F=l?.currentTime||performance.now()-z,N=T(F).current;V=(c=j)!==null&&c!==void 0?c:N,(w===1||w===2&&a[0]===null)&&(M=pt(ot=>T(ot).current,F,N))}else V=(b=j)!==null&&b!==void 0?b:parseFloat(f());let C=o(V,x,M,d?.includes("scale")),B=i(C);p=Object.assign(Object.assign({},B),{easing:"linear"}),s&&(s.generator=C,s.generatorStartTime=performance.now())}else p={easing:"ease",duration:i(o(0,100)).overshootDuration};return p}}}}var Ge=t=>typeof t!="string",gr=ye(Ct),yr=ye(ce),Ue={any:0,all:1};function Qe(t,e,{root:r,margin:n,amount:o="any"}={}){if(typeof IntersectionObserver>"u")return()=>{};let i=ge(t),a=new WeakMap,f=d=>{d.forEach(s=>{let c=a.get(s.target);if(s.isIntersecting!==!!c)if(s.isIntersecting){let b=e(s);typeof b=="function"?a.set(s.target,b):u.unobserve(s.target)}else c&&(c(s),a.delete(s.target))})},u=new IntersectionObserver(f,{root:r,rootMargin:n,threshold:typeof o=="number"?o:Ue[o]});return i.forEach(d=>u.observe(d)),()=>u.disconnect()}var mt=new WeakMap,W;function Xe(t,e){if(e){let{inlineSize:r,blockSize:n}=e[0];return{width:r,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function Ye({target:t,contentRect:e,borderBoxSize:r}){var n;(n=mt.get(t))===null||n===void 0||n.forEach(o=>{o({target:t,contentSize:e,get size(){return Xe(t,r)}})})}function Ze(t){t.forEach(Ye)}function Je(){typeof ResizeObserver<"u"&&(W=new ResizeObserver(Ze))}function tn(t,e){W||Je();let r=ge(t);return r.forEach(n=>{let o=mt.get(n);o||(o=new Set,mt.set(n,o)),o.add(e),W?.observe(n)}),()=>{r.forEach(n=>{let o=mt.get(n);o?.delete(e),o?.size||W?.unobserve(n)})}}var ht=new Set,nt;function en(){nt=()=>{let t={width:S.innerWidth,height:S.innerHeight},e={target:S,size:t,contentSize:t};ht.forEach(r=>r(e))},S.addEventListener("resize",nt)}function nn(t){return ht.add(t),nt||en(),()=>{ht.delete(t),!ht.size&&nt&&(nt=void 0)}}function ve(t,e){return typeof t=="function"?nn(t):tn(t,e)}function Rt(t,e,r){t.dispatchEvent(new CustomEvent(e,{detail:{originalEvent:r}}))}function pe(t,e,r){t.dispatchEvent(new CustomEvent(e,{detail:{originalEntry:r}}))}var rn={isActive:t=>!!t.inView,subscribe:(t,{enable:e,disable:r},{inViewOptions:n={}})=>{let{once:o}=n,i=se(n,["once"]);return Qe(t,a=>{if(e(),pe(t,"viewenter",a),!o)return f=>{r(),pe(t,"viewleave",f)}},i)}},me=(t,e,r)=>n=>{(!n.pointerType||n.pointerType==="mouse")&&(r(),Rt(t,e,n))},on={isActive:t=>!!t.hover,subscribe:(t,{enable:e,disable:r})=>{let n=me(t,"hoverstart",e),o=me(t,"hoverend",r);return t.addEventListener("pointerenter",n),t.addEventListener("pointerleave",o),()=>{t.removeEventListener("pointerenter",n),t.removeEventListener("pointerleave",o)}}},an={isActive:t=>!!t.press,subscribe:(t,{enable:e,disable:r})=>{let n=i=>{r(),Rt(t,"pressend",i),S.removeEventListener("pointerup",n)},o=i=>{e(),Rt(t,"pressstart",i),S.addEventListener("pointerup",n)};return t.addEventListener("pointerdown",o),()=>{t.removeEventListener("pointerdown",o),S.removeEventListener("pointerup",n)}}},sn={inView:rn,hover:on,press:an},vr=["initial","animate",...Object.keys(sn),"exit"];var cn=100,ln={left:t=>`translateX(-${t}px)`,right:t=>`translateX(${t}px)`,top:t=>`translateY(-${t}px)`,bottom:t=>`translateY(${t}px)`},jt=typeof Animation<"u"&&typeof Animation.prototype.updatePlaybackRate=="function";function Lt(t){let{slots:e,gap:r,padding:n,paddingPerSide:o,paddingTop:i,paddingRight:a,paddingBottom:f,paddingLeft:u,speed:d,hoverFactor:s,direction:c,alignment:b,sizingOptions:p,fadeOptions:w,style:E}=t,{fadeContent:x,overflow:j,fadeWidth:M,fadeInset:V,fadeAlpha:T}=w,{widthType:C,heightType:B}=p,l=o?`${i}px ${a}px ${f}px ${u}px`:`${n}px`,_=It.current()===It.canvas,z=st.count(e),F=z>0;c===!0&&(c="left");let N=c==="left"||c==="right",ot=Gt(0),it=ln[c],Se=Ut(ot,it),U=A(null),k=ut(()=>[Tt(),Tt()],[]),[q,_e]=$t({parent:null,children:null}),Pt=[],gt=[],Z=0,yt=0;_&&(Z=z?Math.floor(10/z):0,yt=1),!_&&F&&q.parent&&(Z=Math.round(q.parent/q.children*2)+1,Z=Math.min(Z,cn),yt=1);let Dt=qt(()=>{if(F&&U.current){let m=N?U.current.offsetWidth:U.current.offsetHeight,h=k[0].current?N?k[0].current.offsetLeft:k[0].current.offsetTop:0,O=(k[1].current?N?k[1].current.offsetLeft+k[1].current.offsetWidth:k[1].current.offsetTop+k[1].current.offsetHeight:0)-h+r;_e({parent:m,children:O})}},[]),Bt=_?{contentVisibility:"auto"}:{};if(F){if(!_){let m=A(!0);lt(()=>(Et.read(Dt),ve(U.current,({contentSize:h})=>{!m.current&&(h.width||h.height)&&Et.read(Dt),m.current=!1})),[])}Pt=st.map(e,(m,h)=>{var L,O,H,K;let $;h===0&&($=k[0]),h===e.length-1&&($=k[1]);let Q={width:C?(L=m.props)===null||L===void 0?void 0:L.width:"100%",height:B?(O=m.props)===null||O===void 0?void 0:O.height:"100%"};return v(J,{inherit:"id",children:v("li",{ref:$,style:Q,children:_t(m,{style:{...(H=m.props)===null||H===void 0?void 0:H.style,...Q,flexShrink:0,...Bt},layoutId:m.props.layoutId?m.props.layoutId+"-original-"+h:void 0},(K=m.props)===null||K===void 0?void 0:K.children)})})})}if(!_)for(let m=0;m<Z;m++)gt=[...gt,...st.map(e,(h,L)=>{var O,H,K,$,Q,St;let Ie={width:C?(O=h.props)===null||O===void 0?void 0:O.width:"100%",height:B?(H=h.props)===null||H===void 0?void 0:H.height:"100%",willChange:"transform"};return v(J,{inherit:"id",children:v("li",{style:Ie,"aria-hidden":!0,children:_t(h,{key:m+" "+L,style:{...(K=h.props)===null||K===void 0?void 0:K.style,width:C?($=h.props)===null||$===void 0?void 0:$.width:"100%",height:B?(Q=h.props)===null||Q===void 0?void 0:Q.height:"100%",flexShrink:0,...Bt},layoutId:h.props.layoutId?h.props.layoutId+"-dupe-"+m:void 0},(St=h.props)===null||St===void 0?void 0:St.children)},m+"li"+L)},m+"lg"+L)})];let R=q.children+q.children*Math.round(q.parent/q.children),vt=A(null),bt=A(null),at=A(0),wt=A(!1),Nt=Xt(),Wt=A(null),I=A(null);if(!_){let m=Zt(U);jt?(lt(()=>{if(!(Nt||!R||!d))return I.current=Wt.current.animate({transform:[it(0),it(R)]},{duration:Math.abs(R)/d*1e3,iterations:1/0,easing:"linear"}),()=>I.current.cancel()},[s,R,d]),lt(()=>{I.current&&(m&&I.current.playState==="paused"?I.current.play():!m&&I.current.playState==="running"&&I.current.pause())},[m])):Qt(h=>{if(!R||Nt||jt)return;vt.current===null&&(vt.current=h),h=h-vt.current;let O=(bt.current===null?0:h-bt.current)*(d/1e3);wt.current&&(O*=s),at.current+=O,at.current=Yt(0,R,at.current),bt.current=h,m&&ot.set(at.current)})}let Te=N?"to right":"to bottom",zt=M/2,Oe=100-M/2,Ee=mn(V,0,zt),Ve=100-V,xt=`linear-gradient(${Te}, rgba(0, 0, 0, ${T}) ${Ee}%, rgba(0, 0, 0, 1) ${zt}%, rgba(0, 0, 0, 1) ${Oe}%, rgba(0, 0, 0, ${T}) ${Ve}%)`;return F?v("section",{style:{...be,opacity:yt,WebkitMaskImage:x?xt:void 0,MozMaskImage:x?xt:void 0,maskImage:x?xt:void 0,overflow:j?"visible":"hidden",padding:l},ref:U,children:Ot(G.ul,{ref:Wt,style:{...be,gap:r,top:c==="bottom"&&we(R)?-R:void 0,left:c==="right"&&we(R)?-R:void 0,placeItems:b,position:"relative",flexDirection:N?"row":"column",...E,willChange:_?"auto":"transform",transform:jt?it(0):Se},onMouseEnter:()=>{wt.current=!0,I.current&&(I.current.playbackRate=s)},onMouseLeave:()=>{wt.current=!1,I.current&&(I.current.playbackRate=1)},children:[Pt,gt]})}):Ot("section",{style:un,children:[v("div",{style:fn,children:"\u2728"}),v("p",{style:dn,children:"Connect to Content"}),v("p",{style:pn,children:"Add layers or components to infinitely loop on your page."})]})}Lt.defaultProps={gap:10,padding:10,sizingOptions:{widthType:!0,heightType:!0},fadeOptions:{fadeContent:!0,overflow:!1,fadeWidth:25,fadeAlpha:0,fadeInset:0},direction:!0};ft(Lt,{slots:{type:g.Array,title:"Children",control:{type:g.ComponentInstance}},speed:{type:g.Number,title:"Speed",min:0,max:1e3,defaultValue:100,unit:"%",displayStepper:!0,step:5},direction:{type:g.Enum,title:"Direction",options:["left","right","top","bottom"],optionIcons:["direction-left","direction-right","direction-up","direction-down"],optionTitles:["Left","Right","Top","Bottom"],defaultValue:"left",displaySegmentedControl:!0},alignment:{type:g.Enum,title:"Align",options:["flex-start","center","flex-end"],optionIcons:{direction:{right:["align-top","align-middle","align-bottom"],left:["align-top","align-middle","align-bottom"],top:["align-left","align-center","align-right"],bottom:["align-left","align-center","align-right"]}},defaultValue:"center",displaySegmentedControl:!0},gap:{type:g.Number,title:"Gap"},padding:{title:"Padding",type:g.FusedNumber,toggleKey:"paddingPerSide",toggleTitles:["Padding","Padding per side"],valueKeys:["paddingTop","paddingRight","paddingBottom","paddingLeft"],valueLabels:["T","R","B","L"],min:0},sizingOptions:{type:g.Object,title:"Sizing",controls:{widthType:{type:g.Boolean,title:"Width",enabledTitle:"Auto",disabledTitle:"Stretch",defaultValue:!0},heightType:{type:g.Boolean,title:"Height",enabledTitle:"Auto",disabledTitle:"Stretch",defaultValue:!0}}},fadeOptions:{type:g.Object,title:"Clipping",controls:{fadeContent:{type:g.Boolean,title:"Fade",defaultValue:!0},overflow:{type:g.Boolean,title:"Overflow",enabledTitle:"Show",disabledTitle:"Hide",defaultValue:!1,hidden(t){return t.fadeContent===!0}},fadeWidth:{type:g.Number,title:"Width",defaultValue:25,min:0,max:100,unit:"%",hidden(t){return t.fadeContent===!1}},fadeInset:{type:g.Number,title:"Inset",defaultValue:0,min:0,max:100,unit:"%",hidden(t){return t.fadeContent===!1}},fadeAlpha:{type:g.Number,title:"Opacity",defaultValue:0,min:0,max:1,step:.05,hidden(t){return t.fadeContent===!1}}}},hoverFactor:{type:g.Number,title:"Hover",min:0,max:1,unit:"x",defaultValue:1,step:.1,displayStepper:!0,description:"Slows down the speed while you are hovering."}});var be={display:"flex",width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%",placeItems:"center",margin:0,padding:0,listStyleType:"none",textIndent:"none"},un={display:"flex",width:"100%",height:"100%",placeContent:"center",placeItems:"center",flexDirection:"column",color:"#96F",background:"rgba(136, 85, 255, 0.1)",fontSize:11,overflow:"hidden",padding:"20px 20px 30px 20px"},fn={fontSize:32,marginBottom:10},dn={margin:0,marginBottom:10,fontWeight:600,textAlign:"center"},pn={margin:0,opacity:.7,maxWidth:150,lineHeight:1.5,textAlign:"center"},mn=(t,e,r)=>Math.min(Math.max(t,e),r),we=t=>typeof t=="number"&&!isNaN(t);y();var hn=["VNQfl4umq","cLntgKqD5"],gn="framer-Kdmjf",yn={cLntgKqD5:"framer-v-1fdpm7l",VNQfl4umq:"framer-v-1kw7v2r"};function xe(t,...e){let r={};return e?.forEach(n=>n&&Object.assign(r,t[n])),r}var vn={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},bn=({value:t,children:e})=>{let r=Ht(Vt),n=t??r.transition,o=ut(()=>({...r,transition:n}),[JSON.stringify(n)]);return v(Vt.Provider,{value:o,children:e})},wn=G(ct),xn={"Variant 1":"VNQfl4umq","Variant 2":"cLntgKqD5"},Sn=({height:t,id:e,title:r,width:n,...o})=>{var i,a,f;return{...o,IIeVr0sc7:(i=r??o.IIeVr0sc7)!==null&&i!==void 0?i:"VISION",variant:(f=(a=xn[o.variant])!==null&&a!==void 0?a:o.variant)!==null&&f!==void 0?f:"VNQfl4umq"}},_n=(t,e)=>e.join("-")+t.layoutDependency,Tn=Ft(function(t,e){let{activeLocale:r,setLocale:n}=Jt(),{style:o,className:i,layoutId:a,variant:f,IIeVr0sc7:u,...d}=Sn(t),{baseVariant:s,classNames:c,gestureVariant:b,setGestureState:p,setVariant:w,variants:E}=re({cycleOrder:hn,defaultVariant:"VNQfl4umq",variant:f,variantClassNames:yn}),x=_n(t,E),j=A(null),M=Kt(),V=[],T=ee();return v(J,{id:a??M,children:v(wn,{animate:E,initial:!1,children:v(bn,{value:vn,children:v(G.div,{...d,className:te(gn,...V,"framer-1kw7v2r",i,c),"data-border":!0,"data-framer-name":"Variant 1",layoutDependency:x,layoutId:"VNQfl4umq",onHoverEnd:()=>p({isHovered:!1}),onHoverStart:()=>p({isHovered:!0}),onTap:()=>p({isPressed:!1}),onTapCancel:()=>p({isPressed:!1}),onTapStart:()=>p({isPressed:!0}),ref:e??j,style:{"--border-bottom-width":"1px","--border-color":"rgb(59, 59, 59)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",backgroundColor:"rgb(28, 28, 28)",borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,...o},variants:{cLntgKqD5:{"--border-bottom-width":"0px","--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px",backgroundColor:"rgb(23, 23, 23)",borderBottomLeftRadius:4,borderBottomRightRadius:4,borderTopLeftRadius:4,borderTopRightRadius:4}},...xe({cLntgKqD5:{"data-framer-name":"Variant 2"}},s,b),children:v(oe,{__fromCanvasComponent:!0,children:v(ct,{children:v(G.p,{style:{"--font-selector":"Q1VTVE9NO0dlaXN0IFNlbWlCb2xk","--framer-font-family":'"Geist SemiBold", "Geist SemiBold Placeholder", sans-serif',"--framer-font-size":"12px","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv, var(--token-577e863d-991d-4965-9c80-895f52c445cd, rgb(177, 240, 2)))"},children:"VISION"})}),className:"framer-uglql0","data-framer-name":"VISION",fonts:["CUSTOM;Geist SemiBold"],layoutDependency:x,layoutId:"LaIb0rKeH",style:{"--extracted-r6o4lv":"var(--token-577e863d-991d-4965-9c80-895f52c445cd, rgb(177, 240, 2))","--framer-paragraph-spacing":"0px"},text:u,variants:{cLntgKqD5:{"--extracted-r6o4lv":"var(--token-5f775928-41ea-4fe0-af0d-fb6cc34398b3, rgb(164, 164, 164))"}},verticalAlignment:"top",withExternalLayout:!0,...xe({cLntgKqD5:{children:v(ct,{children:v(G.p,{style:{"--font-selector":"Q1VTVE9NO0dlaXN0IFNlbWlCb2xk","--framer-font-family":'"Geist SemiBold", "Geist SemiBold Placeholder", sans-serif',"--framer-font-size":"12px","--framer-text-alignment":"center","--framer-text-color":"var(--extracted-r6o4lv, var(--token-5f775928-41ea-4fe0-af0d-fb6cc34398b3, rgb(164, 164, 164)))"},children:"VISION"})})}},s,b)})})})})})}),On=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-Kdmjf.framer-13lbk9n, .framer-Kdmjf .framer-13lbk9n { display: block; }",".framer-Kdmjf.framer-1kw7v2r { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 16px 8px 16px; position: relative; width: min-content; }",".framer-Kdmjf .framer-uglql0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Kdmjf.framer-1kw7v2r { gap: 0px; } .framer-Kdmjf.framer-1kw7v2r > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Kdmjf.framer-1kw7v2r > :first-child { margin-left: 0px; } .framer-Kdmjf.framer-1kw7v2r > :last-child { margin-right: 0px; } }",".framer-Kdmjf.framer-v-1fdpm7l.framer-1kw7v2r { padding: 4px 8px 4px 8px; }",'.framer-Kdmjf[data-border="true"]::after, .framer-Kdmjf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'],rt=ne(Tn,On,"framer-Kdmjf"),kr=rt;rt.displayName="green-tag";rt.defaultProps={height:30,width:73};ft(rt,{variant:{options:["VNQfl4umq","cLntgKqD5"],optionTitles:["Variant 1","Variant 2"],title:"Variant",type:g.Enum},IIeVr0sc7:{defaultValue:"VISION",displayTextArea:!1,title:"Title",type:g.String}});ie(rt,[{explicitInter:!0,fonts:[{family:"Geist SemiBold",source:"custom",url:"/assets/9eDylmPTBHtXOfkHUgMHlT8LFnY.woff"}]}],{supportsExplicitInterCodegen:!0});export{Lt as a,kr as b};
//# sourceMappingURL=chunk-TRV7NC7V.mjs.map
