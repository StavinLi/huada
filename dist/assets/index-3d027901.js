import{f as i,D as f,o as y,c as k,w as v,I as m,a as p,m as C,X as S,d as b,l as h,J as w,T as O}from"./index-d8d4d952.js";import{_ as $,c as B,f as u}from"./$plugin-vue_export-helper-cc2b3d55-c66155d4.js";let s=0;const d="nut-overflow-hidden",z=e=>[()=>{if(e())try{!s&&u.classList.add(d),s++}catch{}},()=>{if(e()&&s)try{s--,!s&&u.classList.remove(d)}catch{}}],{componentName:N,create:g}=B("overlay"),x=g({props:{visible:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:2e3},duration:{type:[Number,String],default:.3},lockScroll:{type:Boolean,default:!0},overlayClass:{type:String,default:""},overlayStyle:{type:Object},closeOnClickOverlay:{type:Boolean,default:!0}},emits:["click","update:visible"],setup(e,{emit:t}){const[l,o]=z(()=>e.lockScroll),a=i(()=>({[N]:!0,[e.overlayClass]:!0})),n=i(()=>({transitionDuration:`${e.duration}s`,zIndex:e.zIndex,...e.overlayStyle}));return f(()=>{e.visible?l():o()}),{classes:a,style:n,onClick:c=>{t("click",c),e.closeOnClickOverlay&&t("update:visible",!1)}}}});function I(e,t,l,o,a,n){return y(),k(O,{name:"overlay-fade"},{default:v(()=>[m(p("view",{class:C(e.classes),onClick:t[0]||(t[0]=S((...r)=>e.onClick&&e.onClick(...r),["stop"])),style:b(e.style)},[h(e.$slots,"default")],6),[[w,e.visible]])]),_:3})}const D=$(x,[["render",I]]),L=e=>e,T=L(D);export{D as O,T as a};
