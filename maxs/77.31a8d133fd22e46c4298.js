"use strict";(self.webpackChunkmaxs=self.webpackChunkmaxs||[]).push([[77],{6077:(T,m,l)=>{l.r(m),l.d(m,{AuthModule:()=>M});var u=l(2057),s=l(4751),d=l(1979),p=l(348),x=l(4466),t=l(793);let h=(()=>{class n{constructor(){this.close=new t.vpe}onClose(){this.close.emit()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:8,vars:4,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return o.onClose()}),t.qZA(),t.TgZ(1,"div",1),t.TgZ(2,"p"),t._uU(3),t.qZA(),t.TgZ(4,"div",2),t.TgZ(5,"button",3),t.NdJ("click",function(){return o.onClose()}),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Oqu(o.message),t.xp6(3),t.hij(" ",t.lcZ(7,2,"CLOSE")," "))},pipes:[p.X$],styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vw;background-color:#000000bf;z-index:50}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background-color:#fff;box-shadow:0 2px 8px #00000042}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),n})(),g=(()=>{class n{constructor(e){this.viewContainerRef=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b))},n.\u0275dir=t.lG2({type:n,selectors:[["","appPlaceholder",""]]}),n})();var f=l(7954);let b=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-loading-spinner"]],decls:5,vars:0,consts:[[1,"lds-ring"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div"),t._UZ(2,"div"),t._UZ(3,"div"),t._UZ(4,"div"),t.qZA())},styles:[".lds-ring[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:8px;border:8px solid rgb(60,10,197);border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:rgb(121,93,248) transparent transparent transparent}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){animation-delay:.45s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){animation-delay:.3s}.lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){animation-delay:.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),n})();function _(n,r){}function v(n,r){1&n&&(t.TgZ(0,"div",6),t._UZ(1,"app-loading-spinner"),t.qZA())}function C(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"form",7,8),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.MAs(1);return t.oxw().onSubmit(i)}),t.TgZ(2,"h1",9),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",10),t.TgZ(6,"label",11),t._uU(7),t.ALo(8,"translate"),t.qZA(),t._UZ(9,"input",12),t.qZA(),t.TgZ(10,"div",10),t.TgZ(11,"label",13),t._uU(12),t.ALo(13,"translate"),t.qZA(),t._UZ(14,"input",14),t.qZA(),t.TgZ(15,"div",15),t.TgZ(16,"button",16),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.MAs(1);t.xp6(3),t.Oqu(t.lcZ(4,5,"LOGINPAGE")),t.xp6(4),t.Oqu(t.lcZ(8,7,"EMAIL")),t.xp6(5),t.Oqu(t.lcZ(13,9,"PASSWORD")),t.xp6(4),t.Q6J("disabled",!e.valid),t.xp6(1),t.hij(" ",t.lcZ(18,11,"LOGIN")," ")}}let Z=(()=>{class n{constructor(e,o,i,a){this.authService=e,this.router=o,this.componentFactoryResolver=i,this.translate=a,this.isLoginMode=!0,this.isLoading=!1,this.error=null}onSubmit(e){if(!e.valid)return;const o=e.value.email,i=e.value.password;let a;this.isLoading=!0,a=this.isLoginMode?this.authService.login(o,i):this.authService.signup(o,i),a.subscribe(c=>{this.isLoading=!1,this.router.navigate([""])},c=>{console.log(c),this.error=c,this.showErrorAlert(c),this.isLoading=!1}),e.reset()}onHandleError(){this.error=null}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe()}showErrorAlert(e){const o=this.componentFactoryResolver.resolveComponentFactory(h),i=this.alertHost.viewContainerRef;i.clear();const a=i.createComponent(o);a.instance.message=e,this.closeSub=a.instance.close.subscribe(()=>{this.closeSub.unsubscribe(),i.clear()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.e),t.Y36(d.F0),t.Y36(t._Vd),t.Y36(p.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],viewQuery:function(e,o){if(1&e&&t.Gf(g,5),2&e){let i;t.iGM(i=t.CRH())&&(o.alertHost=i.first)}},decls:6,vars:2,consts:[["appPlaceholder",""],[1,"fully"],[1,"row","authy"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["style","text-align: center",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"head-border-center"],[1,"form-group"],["for","email",1,"email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password",1,"password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],[1,"butn",2,"text-align","center"],["type","submit",1,"btn","btn-success",3,"disabled"]],template:function(e,o){1&e&&(t.YNc(0,_,0,0,"ng-template",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.YNc(4,v,2,0,"div",4),t.YNc(5,C,19,13,"form",5),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("ngIf",!o.isLoading))},directives:[g,u.O5,b,s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,s.Q7,s.on,s.wO],pipes:[p.X$],styles:['form[_ngcontent-%COMP%]{background-color:#367b97;border-radius:2%;padding:15px;width:390px;color:#fff;position:relative;margin:40px auto auto}.fully[_ngcontent-%COMP%]{height:720px;background-color:azure}form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;letter-spacing:1px}.email[_ngcontent-%COMP%]{position:relative;line-height:1.7;font-size:25px;letter-spacing:1px;text-align:center;margin:5px 30px 5px auto}.password[_ngcontent-%COMP%]{line-height:1.7;letter-spacing:1px;font-size:25px;text-align:center;margin:5px 30px 5px auto}input[_ngcontent-%COMP%]{width:300px;margin:auto}.butn[_ngcontent-%COMP%]{margin-left:0}.head-border-center[_ngcontent-%COMP%]:after{content:"";display:block;width:70px;height:3px;margin:20px auto;background-color:#ff8b38}']}),n})();function A(n,r){}function O(n,r){1&n&&(t.TgZ(0,"div",5),t._UZ(1,"app-loading-spinner"),t.qZA())}function w(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"form",6,7),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.MAs(1);return t.oxw().onSubmit(i)}),t.TgZ(2,"h1",8),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",9),t.TgZ(6,"label",10),t._uU(7),t.ALo(8,"translate"),t.qZA(),t._UZ(9,"input",11),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"label",12),t._uU(12),t.ALo(13,"translate"),t.qZA(),t._UZ(14,"input",13),t.qZA(),t.TgZ(15,"div",14),t.TgZ(16,"button",15),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.MAs(1);t.xp6(3),t.Oqu(t.lcZ(4,5,"REGPAGE")),t.xp6(4),t.Oqu(t.lcZ(8,7,"EMAIL")),t.xp6(5),t.Oqu(t.lcZ(13,9,"PASSWORD")),t.xp6(4),t.Q6J("disabled",!e.valid),t.xp6(1),t.hij(" ",t.lcZ(18,11,"SIGNUP")," ")}}let y=(()=>{class n{constructor(e,o,i,a){this.authService=e,this.router=o,this.componentFactoryResolver=i,this.translate=a,this.isLoginMode=!1,this.isLoading=!1,this.error=null}onSubmit(e){if(!e.valid)return;const o=e.value.email,i=e.value.password;let a;this.isLoading=!0,a=this.isLoginMode?this.authService.login(o,i):this.authService.signup(o,i),a.subscribe(c=>{this.isLoading=!1,this.router.navigate(["/home"])},c=>{console.log(c),this.error=c,this.showErrorAlert(c),this.isLoading=!1}),e.reset()}onHandleError(){this.error=null}ngOnDestroy(){this.closeSub&&this.closeSub.unsubscribe()}showErrorAlert(e){const o=this.componentFactoryResolver.resolveComponentFactory(h),i=this.alertHost.viewContainerRef;i.clear();const a=i.createComponent(o);a.instance.message=e,this.closeSub=a.instance.close.subscribe(()=>{this.closeSub.unsubscribe(),i.clear()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.e),t.Y36(d.F0),t.Y36(t._Vd),t.Y36(p.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],viewQuery:function(e,o){if(1&e&&t.Gf(g,5),2&e){let i;t.iGM(i=t.CRH())&&(o.alertHost=i.first)}},decls:5,vars:2,consts:[["appPlaceholder",""],[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["style","text-align: center",4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[2,"text-align","center"],[3,"ngSubmit"],["authForm","ngForm"],[1,"head-border-center"],[1,"form-group"],["for","email",1,"email"],["type","email","id","email","ngModel","","name","email","required","","email","",1,"form-control"],["for","password",1,"password"],["type","password","id","password","ngModel","","name","password","required","","minlength","6",1,"form-control"],[1,"butn"],["type","submit",1,"btn","btn-success",3,"disabled"]],template:function(e,o){1&e&&(t.YNc(0,A,0,0,"ng-template",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,O,2,0,"div",3),t.YNc(4,w,19,13,"form",4),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",o.isLoading),t.xp6(1),t.Q6J("ngIf",!o.isLoading))},directives:[g,u.O5,b,s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,s.Q7,s.on,s.wO],pipes:[p.X$],styles:['form[_ngcontent-%COMP%]{background-color:#1e808a;border-radius:2%;padding:15px;width:390px;color:#fff;position:relative;margin:40px auto auto}form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px;letter-spacing:2px}.email[_ngcontent-%COMP%]{position:relative;margin-left:125px;line-height:1.7;font-size:25px;letter-spacing:2px}.password[_ngcontent-%COMP%]{margin-left:120px;line-height:1.7;letter-spacing:2px;font-size:25px}input[_ngcontent-%COMP%]{width:300px;margin:auto}.butn[_ngcontent-%COMP%]{margin-left:130px}.head-border-center[_ngcontent-%COMP%]:after{content:"";display:block;width:70px;height:3px;margin:20px auto;background-color:#ff8b38}']}),n})(),M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,s.u5,d.Bz.forChild([{path:"",component:Z},{path:"reg",component:y}]),x.m,p.aw]]}),n})()}}]);