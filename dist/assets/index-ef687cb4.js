import{c as i,C as f,d as y,s as k,t as v,H as C,f as m,i as p,X as S,j as b,h,I as O,T as w}from"./index-ececa4c8.js";import{_ as $,c as B,f as u}from"./_plugin-vue_export-helper-cc2b3d55-78f862a9.js";let s=0;const d="nut-overflow-hidden",z=e=>[()=>{if(e())try{!s&&u.classList.add(d),s++}catch{}},()=>{if(e()&&s)try{s--,!s&&u.classList.remove(d)}catch{}}],{componentName:N,create:g}=B("overlay"),x=g({props:{visible:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:2e3},duration:{type:[Number,String],default:.3},lockScroll:{type:Boolean,default:!0},overlayClass:{type:String,default:""},overlayStyle:{type:Object},closeOnClickOverlay:{type:Boolean,default:!0}},emits:["click","update:visible"],setup(e,{emit:t}){const[l,o]=z(()=>e.lockScroll),a=i(()=>({[N]:!0,[e.overlayClass]:!0})),n=i(()=>({transitionDuration:`${e.duration}s`,zIndex:e.zIndex,...e.overlayStyle}));return f(()=>{e.visible?l():o()}),{classes:a,style:n,onClick:c=>{t("click",c),e.closeOnClickOverlay&&t("update:visible",!1)}}}});function I(e,t,l,o,a,n){return y(),k(w,{name:"overlay-fade"},{default:v(()=>[C(m("view",{class:p(e.classes),onClick:t[0]||(t[0]=S((...r)=>e.onClick&&e.onClick(...r),["stop"])),style:b(e.style)},[h(e.$slots,"default")],6),[[O,e.visible]])]),_:3})}const L=$(x,[["render",I]]),j=e=>e,M=j(L);export{L as O,M as a};
