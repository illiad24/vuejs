import{_ as c,m as u,E as _,F as b,e as w,f,a as s,b as a,w as h,g as F,h as g,i as v,r as o,o as E}from"./index-BrnFJBwU.js";const x={name:"LoginForm",components:{VeeForm:w,Field:b,ErrorMessage:_},data(){return{shema:F({email:v().required().email(2),password:g().required()})}},methods:{...u("auth",["loginWithEmailAndPassword"]),async onSubmit(t,{resetForm:e}){try{const{email:r,password:n}=t;await this.loginWithEmailAndPassword({email:r,password:n}),e(),this.$router.push({name:"products"})}catch{alert()}}}},y={class:"container"},$={class:"body"};function V(t,e,r,n,d,l){const i=o("Field"),m=o("ErrorMessage"),p=o("VeeForm");return E(),f("div",y,[e[3]||(e[3]=s("h1",null,"Форма Реєстрації",-1)),s("div",$,[a(p,{"validation-schema":d.shema,onSubmit:l.onSubmit},{default:h(()=>[s("div",null,[e[0]||(e[0]=s("label",{for:"email"},"Email:",-1)),a(i,{name:"email",type:"text"}),a(m,{name:"email"})]),s("div",null,[e[1]||(e[1]=s("label",{for:"password"},"password:",-1)),a(i,{name:"password",type:"text"}),a(m,{name:"password"})]),e[2]||(e[2]=s("button",{type:"submit"},"Зареєструватись",-1))]),_:1},8,["validation-schema","onSubmit"])])])}const A=c(x,[["render",V],["__scopeId","data-v-ea46bb16"]]);export{A as default};
