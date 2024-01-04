!function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,n(i.key),i)}}function e(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{DT2Y:function(t,n,i){"use strict";i.r(n),i.d(n,"LoginModule",function(){return E});var r,a=i("ofXK"),s=i("tyNb"),c=i("3Pt+"),u=i("quSY"),l=i("LuMM"),m=i("h3Yp"),b=i("pj3a"),f=i("2Vo4"),g=i("fXoL"),p=((r=e(function t(){o(this,t),this.onLoadBehavior=new f.a(null)})).\u0275fac=function(t){return new(t||r)},r.\u0275prov=g.Mb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),d=i("CN8f"),h=i("Wp6s"),v=i("kmnG"),y=i("qFsG"),w=i("bTqV"),C=i("q5Bh");function x(t,e){if(1&t&&g.Rb(0,"card-alert",16),2&t){var n=g.gc();g.mc("tipo",n.mensagemRespostaLogin.tipo),g.mc("codigo",n.mensagemRespostaLogin.codigo),g.mc("mensagem",n.mensagemRespostaLogin.mensagem)}}var k,O,U,L=[{path:"",component:(k=function(){function t(e,n,i,r){o(this,t),this.service=e,this.auth=n,this.router=i,this.onLoadService=r,this.feedv1=!0,this.mensagemRespostaLogin=new b.a,this.subscribeLogin=new u.a(null),this.subscribeMensagem=new u.a(null),this.formControlUsuario=new c.e({emailFormGroup:new c.c,senhaFormGroup:new c.c})}return e(t,[{key:"ngOnInit",value:function(){this.hideSplash(),sessionStorage.getItem("logout")}},{key:"onSubmitLogin",value:function(){this.formControlUsuario.disable();var t=this.formControlUsuario.controls,e=t.emailFormGroup,n=t.senhaFormGroup;this.autenticarWithEmail({email:e.value,senha:n.value})}},{key:"initiByStorage",value:function(){var t=this.auth.getToken();t&&(this.formControlUsuario.controls.emailFormGroup.setValue(t.email),this.formControlUsuario.controls.senhaFormGroup.setValue(t.senha),this.autenticarWithEmail({email:t.email,senha:t.senha}))}},{key:"autenticarWithEmail",value:function(t){var e=this;this.service.signWithEmail(t.email,t.senha).then(function(){var n;e.service.behaviorUsuarioLogado.subscribe(function(n){var o;n?(localStorage.setItem("usuario",btoa(JSON.stringify(n))),localStorage.setItem("token",btoa(JSON.stringify(t))),e.router.navigate(e.router.route.FEED),e.mensagemRespostaLogin=null):(e.service.behaviorLoginMensagem.subscribe(function(t){t&&(e.mensagemRespostaLogin=t)}),null===(o=e.subscribeMensagem)||void 0===o||o.unsubscribe())}),null===(n=e.subscribeLogin)||void 0===n||n.unsubscribe()}),this.formControlUsuario.reset(),this.formControlUsuario.enable()}},{key:"newPassword",value:function(){this.router.navigate(this.router.route.REDEFINE_PASSWORD)}},{key:"newAccoumt",value:function(){this.router.navigate(this.router.route.NEW_ACCOUNT)}},{key:"feed",value:function(){this.router.navigate(this.router.route.FEED)}},{key:"goTo",value:function(t){this.router.navigate(t)}},{key:"ngOnDestroy",value:function(){this.service.behaviorUsuarioLogado.next(null)}},{key:"hideSplash",value:function(){var t=this;setTimeout(function(){t.onLoadService.onLoadBehavior.next(!0)},500)}}]),t}(),k.\u0275fac=function(t){return new(t||k)(g.Qb(d.a),g.Qb(l.a),g.Qb(m.a),g.Qb(p))},k.\u0275cmp=g.Kb({type:k,selectors:[["app-login"]],decls:24,vars:2,consts:[[1,"content"],[1,"card"],[1,"card-container"],[1,"logo"],["src","../../../assets/imagens/logo.png","width","60%","alt","Logo Sandra Cosmeticos",2,"border-radius","10px"],[1,"example-form","card-alert"],[3,"tipo","codigo","mensagem",4,"ngIf"],[1,"example-form",3,"formGroup","ngSubmit"],["form","ngForm"],["appearance","fill","color","primary",1,"example-full-width"],["formControlName","emailFormGroup","type","text","matInput",""],["formControlName","senhaFormGroup","type","password","matInput",""],[1,"botao"],["mat-raised-button","","color","primary","type","submit"],["mat-stroked-button","","target","_blank","color","primary",3,"click"],["mat-stroked-button","","target","_blank","color","link",3,"click"],[3,"tipo","codigo","mensagem"]],template:function(t,e){1&t&&(g.Vb(0,"div",0),g.Vb(1,"mat-card",1),g.Vb(2,"div",2),g.Vb(3,"div",3),g.Rb(4,"img",4),g.Ub(),g.Vb(5,"div",5),g.yc(6,x,1,3,"card-alert",6),g.Ub(),g.Vb(7,"form",7,8),g.cc("ngSubmit",function(){return e.onSubmitLogin()}),g.Vb(9,"mat-form-field",9),g.Vb(10,"mat-label"),g.zc(11,"E-mail"),g.Ub(),g.Rb(12,"input",10),g.Ub(),g.Vb(13,"mat-form-field",9),g.Vb(14,"mat-label"),g.zc(15,"Senha"),g.Ub(),g.Rb(16,"input",11),g.Ub(),g.Vb(17,"div",12),g.Vb(18,"button",13),g.zc(19," Entrar "),g.Ub(),g.Vb(20,"a",14),g.cc("click",function(){return e.newPassword()}),g.zc(21,"Esqueci minha senha"),g.Ub(),g.Vb(22,"a",15),g.cc("click",function(){return e.feed()}),g.zc(23,"Continuar"),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub(),g.Ub()),2&t&&(g.Eb(6),g.lc("ngIf",null!=(null==e.mensagemRespostaLogin?null:e.mensagemRespostaLogin.codigo)),g.Eb(1),g.lc("formGroup",e.formControlUsuario))},directives:[h.a,a.l,c.q,c.l,c.f,v.b,v.f,c.b,y.b,c.k,c.d,w.b,w.a,C.a],styles:[".content[_ngcontent-%COMP%]{height:100%;border-radius:4px;border:1px solid #eee;justify-content:center!important}.card-container[_ngcontent-%COMP%]{flex-wrap:wrap;padding:15px}.card[_ngcontent-%COMP%], .card-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center}.card[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #eee;background-color:#fafafa;height:-moz-max-content;height:max-content;min-height:50%;width:90%;padding:16px;align-items:center;transition:all .2s ease-in-out;line-height:24px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:95%;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.botao[_ngcontent-%COMP%]{justify-content:center}.botao[_ngcontent-%COMP%], .logo[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column}.logo[_ngcontent-%COMP%]{align-items:center;margin-bottom:15px;border-radius:90px}a[_ngcontent-%COMP%]{margin-top:20px}input[_ngcontent-%COMP%]{width:95%}div[_ngcontent-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fafafa}.card-alert[_ngcontent-%COMP%]{margin-bottom:10px}"]}),k)}],P=((O=e(function t(){o(this,t)})).\u0275fac=function(t){return new(t||O)},O.\u0275mod=g.Ob({type:O}),O.\u0275inj=g.Nb({imports:[[s.c.forChild(L)],s.c]}),O),M=i("vvyD"),S=i("Tbt5"),E=((U=e(function t(){o(this,t)})).\u0275fac=function(t){return new(t||U)},U.\u0275mod=g.Ob({type:U}),U.\u0275inj=g.Nb({imports:[[a.c,P,M.a,c.g,c.o,S.a]]}),U)}}])}();