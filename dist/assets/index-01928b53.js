import{_}from"./index-27291024.js";import{r as m,d as e,s as d,t as f,f as s,e as n,k as y,x as u,F as h,i as r,S as l,L as a,l as o}from"./index-a0d10b01.js";const k=s("span",null,"样本编号",-1),x=s("span",null,"检测日期",-1),B={key:0},D={key:1},N={__name:"index",setup(g){let p=m([{type:2,name:"刘小波",relationId:1,num:"HD5768954673",time:"2023.02.23",status:6},{type:1,name:"刘小波",relationId:2,num:"HD5768954673",time:"2023.02.23",status:1},{type:3,name:"刘小波",isSelf:!0,num:"HD5768954673",time:"2023.02.23",status:5}]),c={1:"样本已绑定、尚未完成问卷填写",2:"绑定成功、样本待回寄",3:"样本回寄中",4:"样本合格、检测生产中",5:"样本不合格，检测终止",6:"已出报告"};return(C,H)=>(e(),d(_,{name:"simple-manage"},{default:f(()=>[s("ul",null,[(e(!0),n(h,null,y(u(p),(t,i)=>(e(),n("li",{key:i,class:r(`type${t.type}`)},[s("h3",null,[l(a(t.name)+" ",1),s("span",null,a(["","本人","亲属"][t.relationId]),1)]),s("div",null,[s("p",null,[k,l(),s("span",null,a(t.num),1)]),s("p",null,[x,l(),s("span",null,a(t.time),1)])]),s("p",{class:r({active:t.status===5})},[l(a(u(c)[t.status])+" ",1),t.status===6?(e(),n("span",B,"查看报告")):o("",!0),t.status===1?(e(),n("span",D,"填写问卷")):o("",!0)],2)],2))),128))])]),_:1}))}};export{N as default};
