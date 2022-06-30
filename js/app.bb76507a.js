(function(){"use strict";var e={967:function(e,t,a){var o=a(9242),n=a(3396);function r(e,t,a,o,r,s){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}var s=(0,n.aZ)({data(){return{}},computed:{},mounted(){},methods:{}}),i=a(89);const l=(0,i.Z)(s,[["render",r]]);var d=l,c=a(65),u=a(6265),m=a.n(u);const p={namespaced:!0,state(){return{count:0}},mutations:{increment(e){e.count++},add(e,t){console.log("add.... in mutations"),e.count++}},actions:{add(e,t){console.log("add.... in actions"),e.commit("add",t)},serverApi(e){m().get("https://api.uixsj.cn/hitokoto/get?type=social").then((e=>{console.log("server response:",e.data)}),(e=>{alert(e.message)}))}},getters:{getComplexValue(e){return e.count+8}}};var v=p,b=(0,c.MT)({modules:{testOptions:v}}),h=a(678),g=a(7139);const f={class:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},_=(0,n._)("a",{class:"navbar-brand",href:"#"},"Cloud IP",-1),y=(0,n._)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),w={class:"collapse navbar-collapse",id:"navbarsExampleDefault"},S={class:"navbar-nav mr-auto"},k={class:"nav-item active"},D=(0,n.Uk)("HOME "),x={class:"nav-item"},U=(0,n.Uk)("TECH-SUPPORT "),A={class:"nav-item"},C=(0,n.Uk)("GIFT CARD "),P={class:"nav-item"},Z=(0,n.Uk)("FOR PARTNERS "),j={class:"nav-item dropdown"},O=(0,n._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"dropdown02","data-toggle":"dropdown","aria-expanded":"false"},"ABOUT",-1),H={class:"dropdown-menu","aria-labelledby":"dropdown02"},I=(0,n.Uk)("CONTACT US"),N=(0,n.Uk)("CUSTOMER SERVICE"),q={key:0,class:"nav-item dropdown"},F=(0,n._)("a",{class:"nav-link dropdown-toggle",href:"#",id:"dropdown01","data-toggle":"dropdown","aria-expanded":"false"},"SETTINGS",-1),T={class:"dropdown-menu","aria-labelledby":"dropdown01"},L=(0,n.Uk)("Profile"),M={class:"form-inline my-2 my-lg-0"},E=["href"],B=(0,n.Uk)("Settings"),R={role:"main"},W=(0,n._)("footer",{class:"text-muted",style:{"padding-top":"5rem"}},[(0,n._)("hr"),(0,n._)("div",{class:"container"},[(0,n._)("p",null,"2020-2022 © Cloud IP"),(0,n._)("p",null,[(0,n.Uk)("Contact US at Email: "),(0,n._)("a",{href:"mailto:"},"Visit the homepage"),(0,n.Uk)(" or Phone(USA): "),(0,n._)("a",{href:"/docs/4.6/getting-started/introduction/"},"+1 4753432839"),(0,n.Uk)(".")])])],-1);function z(e,t,a,r,s,i){const l=(0,n.up)("RouterLink"),d=(0,n.up)("router-link"),c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",f,[_,y,(0,n._)("div",w,[(0,n._)("ul",S,[(0,n._)("li",k,[(0,n.Wm)(l,{to:{path:"/HomePage/Index"},class:(0,g.C_)("nav-link")},{default:(0,n.w5)((()=>[D])),_:1})]),(0,n._)("li",x,[(0,n.Wm)(l,{to:{path:"/HomePage/TechSupport"},class:(0,g.C_)("nav-link")},{default:(0,n.w5)((()=>[U])),_:1})]),(0,n._)("li",A,[(0,n.Wm)(l,{to:{path:"/HomePage/GiftCard"},class:(0,g.C_)("nav-link")},{default:(0,n.w5)((()=>[C])),_:1})]),(0,n._)("li",P,[(0,n.Wm)(l,{to:{path:"/HomePage/ForPartner"},class:(0,g.C_)("nav-link")},{default:(0,n.w5)((()=>[Z])),_:1})]),(0,n._)("li",j,[O,(0,n._)("div",H,[(0,n.Wm)(d,{to:{path:"/HomePage/ContactUS"},class:(0,g.C_)("dropdown-item")},{default:(0,n.w5)((()=>[I])),_:1}),(0,n.Wm)(d,{to:{path:"/HomePage/CustomerService"},class:(0,g.C_)("dropdown-item")},{default:(0,n.w5)((()=>[N])),_:1})])]),e.homeObj.isLogin()?((0,n.wg)(),(0,n.iD)("li",q,[F,(0,n._)("div",T,[(0,n.Wm)(d,{to:{path:"/UserProfile"},class:(0,g.C_)("dropdown-item")},{default:(0,n.w5)((()=>[L])),_:1}),(0,n._)("a",{class:"dropdown-item",onClick:t[0]||(t[0]=(0,o.iM)((t=>e.homeObj.logoutHome()),["prevent"])),href:"#"},"LogOut")])])):(0,n.kq)("",!0)]),(0,n._)("form",M,[(0,n.kq)("",!0),e.homeObj.isLogin()?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("a",{key:1,href:`https://user.cloud-ip.net/#/Login?return_url=${e.homeObj.return_url}`,class:"btn btn-outline-success my-2 my-sm-0"},"Sign In",8,E)),e.homeObj.isLogin()?((0,n.wg)(),(0,n.j4)(d,{key:2,to:{path:"/UserProfile"},class:(0,g.C_)("btn btn-outline-success my-2 my-sm-0")},{default:(0,n.w5)((()=>[B])),_:1})):(0,n.kq)("",!0)])])]),(0,n._)("main",R,[(0,n.Wm)(c)]),W],64)}var $,G=a(6050),V=a(4870),Y=a(2482);class K{}function J(){return sessionStorage.getItem(K.tokenName)}function Q(){sessionStorage.removeItem(K.tokenName)}(0,Y.Z)(K,"tokenName","access_token"),(0,Y.Z)(K,"returnUrl","http://www.cloud-ip.net/%23/OauthDone"),(0,Y.Z)(K,"reflectKey","rule"),(0,Y.Z)(K,"seprator_symb","&&"),function(e){e["CloudUserHost"]="https://userapi.cloud-ip.net:88",e["FinancialHost"]="https://financialapi.cloud-ip.net:8888",e["DDNSServerHost"]="https://ddns.cloud-ip.net"}($||($={}));var X=$;class ee{static getUserAPIServer(){return X.CloudUserHost.endsWith("/")?X.CloudUserHost.substring(0,X.CloudUserHost.length-1):X.CloudUserHost}static getFinancialAPIServer(){return X.FinancialHost.endsWith("/")?X.FinancialHost.substring(0,X.FinancialHost.length-1):X.FinancialHost}static getDDNSAPIServer(){return X.DDNSServerHost.endsWith("/")?X.DDNSServerHost.substring(0,X.DDNSServerHost.length-1):X.DDNSServerHost}}class te{constructor(){}static getApiService(){return null!==this.apiService&&void 0!==this.apiService||(this.apiService=new te,G.Z.log("ApiServiceImpl is null=========",this.apiService)),G.Z.log("ApiServiceImpl=========",this.apiService),this.apiService}async logOut(e,t){null!==e&&void 0!==e&&await m().post(te.LogoutApiUrl,{},{params:{access_token:e}}).then((e=>{console.log("server response in success:",e.data),t.onDone()}),(e=>{console.log("server response in error:",e.data)}))}async tokenStatus(e,t){await m().post(te.tokenStatusApiUrl,{},{params:{access_token:e}}).then((e=>{console.log("server response in success:",e.data),e.data.status?t.onValid():t.onInValid()}),(e=>{console.log("server response in error:",e.data)}))}}(0,Y.Z)(te,"baseApiUrl",ee.getUserAPIServer()),(0,Y.Z)(te,"regApiUrl",te.baseApiUrl+"/register"),(0,Y.Z)(te,"LoginApiUrl",te.baseApiUrl+"/login"),(0,Y.Z)(te,"tokenStatusApiUrl",te.baseApiUrl+"/tokenStatus"),(0,Y.Z)(te,"LogoutApiUrl",te.baseApiUrl+"/logout"),(0,Y.Z)(te,"apiService",void 0);var ae=(0,n.aZ)({setup(){function e(){return J()?(G.Z.log("isLogin:{}",!0),!0):(G.Z.log("isLogin:{}",!1),!1)}function t(){te.getApiService().logOut(J(),{onDone(){Q(),location.reload()}})}function a(){window.location.replace("https://user.cloud-ip.net/#/Login?return_url="+K.returnUrl)}let o=(0,V.qj)({logoutHome:t,isLogin:e,HomeSignIn:a,return_url:K.returnUrl});return{homeObj:o}},data(){return{}},mounted(){}});const oe=(0,i.Z)(ae,[["render",z]]);var ne=oe;const re=(0,n.uE)('<div class="jumbotron" style="padding-top:6.5rem;" data-v-75e48b3e><div class="container" data-v-75e48b3e><div class="row col-xs-6 block2 center" data-v-75e48b3e><form class="p-2 form-horizontal form-inline w-75" data-v-75e48b3e><div class="input-group" data-v-75e48b3e><input type="text" class="form-control" placeholder="Host Name" aria-label="search" data-v-75e48b3e><select data-v-75e48b3e><option value="@cloud-dns" data-v-75e48b3e>cloud-dns</option></select><button type="submit" style="margin-left:5px;" class="btn btn-outline-success" data-v-75e48b3e>GO</button></div></form></div><div style="padding-top:15px;" data-v-75e48b3e><p style="padding-top:4.8rem;" data-v-75e48b3e>Find Your Computer Anywhere In The World, Build Your IT System/Data Center At Your Home. Access Your Home Data Center World Wide. </p></div></div></div><div class="container" data-v-75e48b3e><div class="card-deck mb-3 text-center" data-v-75e48b3e><div class="card mb-4 shadow-sm" data-v-75e48b3e><div class="card-header" data-v-75e48b3e><h4 class="my-0 font-weight-normal" data-v-75e48b3e>Free</h4></div><div class="card-body" data-v-75e48b3e><h1 class="card-title pricing-card-title" data-v-75e48b3e>$0 <small class="text-muted" data-v-75e48b3e>/ mo</small></h1><ul class="list-unstyled mt-3 mb-4" data-v-75e48b3e><li data-v-75e48b3e>1 Free Domain Name</li><li data-v-75e48b3e>Free SSL Certificate included</li><li data-v-75e48b3e>Renew SSL / 3 month</li><li data-v-75e48b3e>.</li></ul><button type="button" class="btn btn-lg btn-block btn-outline-primary" data-v-75e48b3e>Sign up for free</button></div></div><div class="card mb-4 shadow-sm" data-v-75e48b3e><div class="card-header" data-v-75e48b3e><h4 class="my-0 font-weight-normal" data-v-75e48b3e>Bronze</h4></div><div class="card-body" data-v-75e48b3e><h1 class="card-title pricing-card-title" data-v-75e48b3e>$3.99 <small class="text-muted" data-v-75e48b3e>/ mo</small></h1><ul class="list-unstyled mt-3 mb-4" data-v-75e48b3e><li data-v-75e48b3e>5 Domain Name</li><li data-v-75e48b3e>Free SSL Certificates Included</li><li data-v-75e48b3e>Permanent SSL Certificates</li><li data-v-75e48b3e>.</li></ul><button type="button" class="btn btn-lg btn-block btn-primary" data-v-75e48b3e>Get started</button></div></div><div class="card mb-4 shadow-sm" data-v-75e48b3e><div class="card-header" data-v-75e48b3e><h4 class="my-0 font-weight-normal" data-v-75e48b3e>Silver</h4></div><div class="card-body" data-v-75e48b3e><h1 class="card-title pricing-card-title" data-v-75e48b3e>$5.99 <small class="text-muted" data-v-75e48b3e>/ mo</small></h1><ul class="list-unstyled mt-3 mb-4" data-v-75e48b3e><li data-v-75e48b3e>10 Domain Name</li><li data-v-75e48b3e>Free SSL Certificates Included</li><li data-v-75e48b3e>Permanent SSL Certificates</li><li data-v-75e48b3e>Router Online Reminder</li></ul><button type="button" class="btn btn-lg btn-block btn-primary" data-v-75e48b3e>Contact us</button></div></div></div></div>',2);function se(e,t,a,o,n,r){return re}var ie=(0,n.aZ)({setup(){let e=(0,V.qj)({});return{homeObj:e}},data(){return{}},mounted(){}});const le=(0,i.Z)(ie,[["render",se],["__scopeId","data-v-75e48b3e"]]);var de=le;const ce=(0,n.uE)('<div class="jumbotron" style="padding-top:6.5rem;" data-v-4d0448b4><div class="container" data-v-4d0448b4><div class="row col-xs-6 block2 center" data-v-4d0448b4><form class="p-2 form-horizontal form-inline w-75" data-v-4d0448b4><div class="input-group" data-v-4d0448b4><input type="text" class="form-control" placeholder="Serial Number" aria-label="search" data-v-4d0448b4><button type="submit" style="margin-left:5px;" class="btn btn-outline-success" data-v-4d0448b4>Verify</button></div></form></div><div style="padding-top:15px;" data-v-4d0448b4><p style="padding-top:4.8rem;" data-v-4d0448b4></p></div></div></div><div class="container" data-v-4d0448b4></div>',2);function ue(e,t,a,o,n,r){return ce}var me=(0,n.aZ)({setup(){let e=(0,V.qj)({});return{homeObj:e}},data(){return{}},mounted(){}});const pe=(0,i.Z)(me,[["render",ue],["__scopeId","data-v-4d0448b4"]]);var ve=pe;const be={class:"container cont_page"},he=(0,n.Uk)(" Dynamic DNS Server: ddns.cloud-ip.net "),ge=(0,n._)("br",null,null,-1),fe=(0,n.Uk)(" Request: /cloud-dns/hostRegister. "),_e=[he,ge,fe];function ye(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",be,_e)}var we=(0,n.aZ)({setup(){let e=(0,V.qj)({});return{techSObj:e}},data(){return{}},mounted(){}});const Se=(0,i.Z)(we,[["render",ye]]);var ke=Se;const De={class:"container cont_page"};function xe(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",De," How to Partner with Cloud-IP: ")}var Ue=(0,n.aZ)({setup(){let e=(0,V.qj)({});return{techSObj:e}},data(){return{}},mounted(){}});const Ae=(0,i.Z)(Ue,[["render",xe]]);var Ce=Ae;const Pe={class:"container cont_page"};function Ze(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",Pe," ContactUS ")}var je=(0,n.aZ)({setup(){let e=(0,V.qj)({});return{techSObj:e}},data(){return{}},mounted(){}});const Oe=(0,i.Z)(je,[["render",Ze]]);var He=Oe;const Ie={class:"container cont_page"};function Ne(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",Ie," Customer Service ")}var qe=(0,n.aZ)({setup(){let e=(0,V.qj)({});return{techSObj:e}},data(){return{}},mounted(){}});const Fe=(0,i.Z)(qe,[["render",Ne]]);var Te=Fe;const Le={id:"wrapper"},Me={id:"content-wrapper",class:"d-flex flex-column"},Ee={id:"content"},Be=(0,n._)("a",{class:"scroll-to-top rounded",href:"#page-top"},[(0,n._)("i",{class:"fas fa-angle-up"})],-1),Re=(0,n._)("div",{class:"modal fade",id:"logoutModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},[(0,n._)("div",{class:"modal-dialog",role:"document"},[(0,n._)("div",{class:"modal-content"},[(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"exampleModalLabel"},"Ready to Leave?"),(0,n._)("button",{class:"close",type:"button","data-dismiss":"modal","aria-label":"Close"},[(0,n._)("span",{"aria-hidden":"true"},"×")])]),(0,n._)("div",{class:"modal-body"},'Select "Logout" below if you are ready to end your current session.'),(0,n._)("div",{class:"modal-footer"},[(0,n._)("button",{class:"btn btn-secondary",type:"button","data-dismiss":"modal"},"Cancel"),(0,n._)("a",{class:"btn btn-primary",href:"login.html"},"Logout")])])])],-1);function We(e,t,a,o,r,s){const i=(0,n.up)("SideBar"),l=(0,n.up)("TopBar"),d=(0,n.up)("router-view"),c=(0,n.up)("MyFooter");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",Le,[(0,n.Wm)(i),(0,n._)("div",Me,[(0,n._)("div",Ee,[(0,n.Wm)(l),(0,n.Wm)(d)]),(0,n.Wm)(c)])]),Be,Re],64)}var ze=(0,n.aZ)({setup(){return{}},components:{SideBar:(0,n.RC)((()=>a.e(291).then(a.bind(a,1291)))),TopBar:(0,n.RC)((()=>a.e(844).then(a.bind(a,4844)))),MyFooter:(0,n.RC)((()=>a.e(890).then(a.bind(a,2890))))},data(){return{}},mounted(){}});const $e=(0,i.Z)(ze,[["render",We]]);var Ge=$e;const Ve={class:"container-fluid"},Ye=(0,n._)("h1",{class:"h3 mb-2 text-gray-800"},"Domains",-1),Ke={class:"input-group"},Je=(0,n._)("input",{type:"text",class:"form-control bg-white border-0 small",placeholder:"Search Your Domain...","aria-label":"Search","aria-describedby":"basic-addon2"},null,-1),Qe={class:"input-group-append"},Xe=(0,n._)("i",{class:"fas fa-plus fa-sm"},null,-1),et=(0,n._)("span",{class:"text"}," Add New Domain",-1),tt=[Xe,et],at={class:"card-body",style:{"margin-top":"20px"}},ot={class:"table-responsive"},nt={class:"table table-bordered",id:"dataTable",width:"100%",cellspacing:"0"},rt=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"Host"),(0,n._)("th",null,"Zone"),(0,n._)("th",null,"Action")])],-1),st=["onClick"];function it(e,t,a,r,s,i){return(0,n.wg)(),(0,n.iD)("div",Ve,[Ye,e.domainsObj.allowAdd?((0,n.wg)(),(0,n.iD)("form",{key:0,onSubmit:t[1]||(t[1]=(0,o.iM)(((...t)=>e.domainsObj.addNewDomain&&e.domainsObj.addNewDomain(...t)),["prevent"])),class:"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"},[(0,n._)("div",Ke,[Je,(0,n._)("div",Qe,[(0,n._)("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=(0,o.iM)(((...t)=>e.domainsObj.addNewDomain&&e.domainsObj.addNewDomain(...t)),["prevent"]))},tt)])])],32)):(0,n.kq)("",!0),(0,n._)("div",at,[(0,n._)("div",ot,[(0,n._)("table",nt,[rt,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.domainsObj.cloud_domains,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.id},[(0,n._)("td",null,(0,g.zw)(t.host),1),(0,n._)("td",null,(0,g.zw)(t.domain),1),(0,n._)("td",null,[(0,n._)("button",{class:"btn btn-primary",type:"button",onClick:a=>e.domainsObj.domainAction(`${t.id}`)},"Update",8,st)])])))),128))])])])])])}const lt=ee.getDDNSAPIServer(),dt=lt+"/ddns-host/myhosts",ct=lt+"/ddns-host/getFreeDomain";function ut(e){G.Z.log("...createMyFreeDomain...");const t=J();m().post(ct,{},{params:{access_token:t}}).then((t=>{console.log("server response in createMyFreeDomain:",t.data),e.onFreeDomainReady(t.data.id)}),(e=>{console.log("server response error in createMyFreeDomain:",e.data)}))}function mt(e){G.Z.log("...loadAllMyDomains...");const t=J();m().post(dt,{},{params:{access_token:t}}).then((t=>{console.log("server response in loadAllMyDomains:",t.data),e.onAllMyDomains(t.data.myhosts)}),(e=>{console.log("server response error in loadAllMyDomains:",e.data)}))}var pt=(0,n.aZ)({setup(){let e=(0,V.qj)({allowAdd:!0,domainAction(e){G.Z.log("the id is:{},host is:{}",e,this.cloud_domains[e].host)},addNewDomain(){G.Z.log("add a new Domain under my plan..")},cloud_domains:[{id:"1",host:"loading...",domain:"loading...",type:"0",lastUpdate:"loading...",expireDate:"8888"}]});return{domainsObj:e}},data(){return{}},mounted(){const e={onFreeDomainReady(e){G.Z.log("my free domain id is:{}",e)}},t=this,a={onAllMyDomains(a){G.Z.log("domains:{}",a),null===a||void 0===a||0===a.length?ut(e):t.domainsObj.cloud_domains=a}};mt(a)}});const vt=(0,i.Z)(pt,[["render",it]]);var bt=vt;const ht={class:"container"};function gt(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",ht," Domain Plans ")}var ft=(0,n.aZ)({setup(){let e=(0,V.qj)({return_url:K.returnUrl});return{homeObj:e}},data(){return{}},mounted(){}});const _t=(0,i.Z)(ft,[["render",gt]]);var yt=_t;const wt={class:"container"};function St(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",wt," User Information ")}var kt=(0,n.aZ)({setup(){let e=(0,V.qj)({return_url:K.returnUrl});return{homeObj:e}},data(){return{}},mounted(){}});const Dt=(0,i.Z)(kt,[["render",St]]);var xt=Dt;const Ut={class:"container"};function At(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",Ut," 2Fa Fido ")}var Ct=(0,n.aZ)({setup(){let e=(0,V.qj)({return_url:K.returnUrl});return{homeObj:e}},data(){return{}},mounted(){}});const Pt=(0,i.Z)(Ct,[["render",At]]);var Zt=Pt;const jt={class:"container"};function Ot(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",jt," Account Protect ")}var Ht=(0,n.aZ)({setup(){let e=(0,V.qj)({return_url:K.returnUrl});return{homeObj:e}},data(){return{}},mounted(){}});const It=(0,i.Z)(Ht,[["render",Ot]]);var Nt=It;const qt={class:"container"};function Ft(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",qt," SSL Certs ")}var Tt=(0,n.aZ)({setup(){let e=(0,V.qj)({return_url:K.returnUrl});return{homeObj:e}},data(){return{}},mounted(){}});const Lt=(0,i.Z)(Tt,[["render",Ft]]);var Mt=Lt;const Et={class:"container"};function Bt(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",Et," Payment History ")}var Rt=(0,n.aZ)({setup(){let e=(0,V.qj)({return_url:K.returnUrl});return{homeObj:e}},data(){return{}},mounted(){}});const Wt=(0,i.Z)(Rt,[["render",Bt]]);var zt=Wt;const $t={class:"container"};function Gt(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",$t," Payment Method ")}var Vt=(0,n.aZ)({setup(){let e=(0,V.qj)({return_url:K.returnUrl});return{homeObj:e}},data(){return{}},mounted(){}});const Yt=(0,i.Z)(Vt,[["render",Gt]]);var Kt=Yt;const Jt={class:"container-fluid"},Qt=(0,n._)("div",{class:"d-sm-flex align-items-center justify-content-between mb-4"},[(0,n._)("h1",{class:"h3 mb-0 text-gray-800"},"Dashboard"),(0,n._)("a",{href:"#",class:"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"},[(0,n._)("i",{class:"fas fa-download fa-sm text-white-50"}),(0,n.Uk)(" Generate Report")])],-1),Xt={class:"row"},ea={class:"col-xl-3 col-md-6 mb-4"},ta={class:"card border-left-primary shadow h-100 py-2"},aa={class:"card-body"},oa={class:"row no-gutters align-items-center"},na={class:"col mr-2"},ra={class:"text-xs font-weight-bold text-primary text-uppercase mb-1"},sa=(0,n.Uk)("Manage Domains"),ia={class:"h5 mb-0 font-weight-bold text-gray-800"},la=(0,n._)("div",{class:"col-auto"},[(0,n._)("i",{class:"fas fa-globe fa-2x text-gray-300"})],-1),da={class:"col-xl-3 col-md-6 mb-4"},ca={class:"card border-left-success shadow h-100 py-2"},ua={class:"card-body"},ma={class:"row no-gutters align-items-center"},pa={class:"col mr-2"},va=(0,n._)("div",{class:"text-xs font-weight-bold text-success text-uppercase mb-1"},"Balance",-1),ba={class:"h5 mb-0 font-weight-bold text-gray-800"},ha=(0,n._)("div",{class:"col-auto"},[(0,n._)("i",{class:"fas fa-dollar-sign fa-2x text-gray-300"})],-1),ga=(0,n._)("div",{class:"row"},[(0,n._)("div",{class:"col-lg-6 mb-4"},[(0,n._)("div",{class:"card shadow mb-4"},[(0,n._)("div",{class:"card-header py-3"},[(0,n._)("h6",{class:"m-0 font-weight-bold text-primary"},"Projects")]),(0,n._)("div",{class:"card-body"},[(0,n._)("h4",{class:"small font-weight-bold"},[(0,n.Uk)("Server Migration "),(0,n._)("span",{class:"float-right"},"20%")]),(0,n._)("div",{class:"progress mb-4"},[(0,n._)("div",{class:"progress-bar bg-danger",role:"progressbar",style:{width:"20%"},"aria-valuenow":"20","aria-valuemin":"0","aria-valuemax":"100"})]),(0,n._)("h4",{class:"small font-weight-bold"},[(0,n.Uk)("Sales Tracking "),(0,n._)("span",{class:"float-right"},"40%")]),(0,n._)("div",{class:"progress mb-4"},[(0,n._)("div",{class:"progress-bar bg-warning",role:"progressbar",style:{width:"40%"},"aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100"})]),(0,n._)("h4",{class:"small font-weight-bold"},[(0,n.Uk)("Customer Database "),(0,n._)("span",{class:"float-right"},"60%")]),(0,n._)("div",{class:"progress mb-4"},[(0,n._)("div",{class:"progress-bar",role:"progressbar",style:{width:"60%"},"aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"})]),(0,n._)("h4",{class:"small font-weight-bold"},[(0,n.Uk)("Payout Details "),(0,n._)("span",{class:"float-right"},"80%")]),(0,n._)("div",{class:"progress mb-4"},[(0,n._)("div",{class:"progress-bar bg-info",role:"progressbar",style:{width:"80%"},"aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"})]),(0,n._)("h4",{class:"small font-weight-bold"},[(0,n.Uk)("Account Setup "),(0,n._)("span",{class:"float-right"},"Complete!")]),(0,n._)("div",{class:"progress"},[(0,n._)("div",{class:"progress-bar bg-success",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"})])])]),(0,n._)("div",{class:"row"},[(0,n._)("div",{class:"col-lg-6 mb-4"},[(0,n._)("div",{class:"card bg-primary text-white shadow"},[(0,n._)("div",{class:"card-body"},[(0,n.Uk)(" Primary "),(0,n._)("div",{class:"text-white-50 small"},"#4e73df")])])]),(0,n._)("div",{class:"col-lg-6 mb-4"},[(0,n._)("div",{class:"card bg-success text-white shadow"},[(0,n._)("div",{class:"card-body"},[(0,n.Uk)(" Success "),(0,n._)("div",{class:"text-white-50 small"},"#1cc88a")])])]),(0,n._)("div",{class:"col-lg-6 mb-4"},[(0,n._)("div",{class:"card bg-info text-white shadow"},[(0,n._)("div",{class:"card-body"},[(0,n.Uk)(" Info "),(0,n._)("div",{class:"text-white-50 small"},"#36b9cc")])])]),(0,n._)("div",{class:"col-lg-6 mb-4"},[(0,n._)("div",{class:"card bg-warning text-white shadow"},[(0,n._)("div",{class:"card-body"},[(0,n.Uk)(" Warning "),(0,n._)("div",{class:"text-white-50 small"},"#f6c23e")])])]),(0,n._)("div",{class:"col-lg-6 mb-4"},[(0,n._)("div",{class:"card bg-danger text-white shadow"},[(0,n._)("div",{class:"card-body"},[(0,n.Uk)(" Danger "),(0,n._)("div",{class:"text-white-50 small"},"#e74a3b")])])]),(0,n._)("div",{class:"col-lg-6 mb-4"},[(0,n._)("div",{class:"card bg-secondary text-white shadow"},[(0,n._)("div",{class:"card-body"},[(0,n.Uk)(" Secondary "),(0,n._)("div",{class:"text-white-50 small"},"#858796")])])])])]),(0,n._)("div",{class:"col-lg-6 mb-4"},[(0,n._)("div",{class:"card shadow mb-4"},[(0,n._)("div",{class:"card-header py-3"},[(0,n._)("h6",{class:"m-0 font-weight-bold text-primary"},"Illustrations")]),(0,n._)("div",{class:"card-body"},[(0,n._)("div",{class:"text-center"},[(0,n._)("img",{class:"img-fluid px-3 px-sm-4 mt-3 mb-4",style:{width:"25rem"},src:"https://githubstatic.cloud-ip.net/resources/cloud_ip/v1/img/undraw_posting_photo.svg",alt:""})]),(0,n._)("p",null,[(0,n.Uk)("Add some quality, svg illustrations to your project courtesy of "),(0,n._)("a",{target:"_blank",rel:"nofollow",href:"https://undraw.co/"},"unDraw"),(0,n.Uk)(", a constantly updated collection of beautiful svg images that you can use completely free and without attribution!")]),(0,n._)("a",{target:"_blank",rel:"nofollow",href:"https://undraw.co/"},"Browse Illustrations on unDraw →")])]),(0,n._)("div",{class:"card shadow mb-4"},[(0,n._)("div",{class:"card-header py-3"},[(0,n._)("h6",{class:"m-0 font-weight-bold text-primary"},"Development Approach")]),(0,n._)("div",{class:"card-body"},[(0,n._)("p",null,"SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes."),(0,n._)("p",{class:"mb-0"},"Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.")])])])],-1);function fa(e,t,a,o,r,s){const i=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",Jt,[Qt,(0,n._)("div",Xt,[(0,n._)("div",ea,[(0,n._)("div",ta,[(0,n._)("div",aa,[(0,n._)("div",oa,[(0,n._)("div",na,[(0,n._)("div",ra,[(0,n.Wm)(i,{to:{path:"/UserProfile/MyDomains"}},{default:(0,n.w5)((()=>[sa])),_:1})]),(0,n._)("div",ia,(0,g.zw)(e.profileObj.domainSize),1)]),la])])])]),(0,n._)("div",da,[(0,n._)("div",ca,[(0,n._)("div",ua,[(0,n._)("div",ma,[(0,n._)("div",pa,[va,(0,n._)("div",ba,"$"+(0,g.zw)(e.profileObj.accountBalance),1)]),ha])])])]),(0,n.kq)("",!0),(0,n.kq)("",!0)]),ga])}var _a=a(6520);const ya=ee.getFinancialAPIServer(),wa=ya+"/financial/myBalance";function Sa(e){G.Z.log("...loadAccountBalance...");const t=J();m().post(wa,{},{params:{access_token:t}}).then((t=>{console.log("server response in success:",t.data),e.onAccountBalance(t.data.balanace)}),(e=>{console.log("server response in error:",e.data)}))}class ka{constructor(){(0,Y.Z)(this,"domainSize",void 0),(0,Y.Z)(this,"accountBalance",void 0)}loadProfile(){this.domainSize=20;const e=this;Sa({onAccountBalance(t){e.accountBalance=t}})}}class Da extends _a.w3{constructor(...e){super(...e),(0,Y.Z)(this,"profileObj",new ka)}setup(){return{}}created(){this.profileObj.loadProfile()}mounted(){}}const xa=(0,i.Z)(Da,[["render",fa]]);var Ua=xa;const Aa={class:"container"};function Ca(e,t,a,o,r,s){return(0,n.wg)(),(0,n.iD)("div",Aa)}var Pa=(0,n.aZ)({props:{access_token:{type:String,required:!1}},components:{},data(){return{}},mounted(){G.Z.log("....a"),void 0===this.$route.query.access_token&&""===this.$route.query.access_token||null===this.$route.query.return_url?this.$router.replace({path:"/",params:{}}):(sessionStorage.removeItem(K.tokenName),sessionStorage.setItem(K.tokenName,this.$route.query.access_token+""),this.$router.replace({path:"/UserProfile",params:{}}))},methods:{}});const Za=(0,i.Z)(Pa,[["render",Ca]]);var ja=Za;const Oa=(0,h.p7)({history:(0,h.r5)(),routes:[{path:"/HomePage",name:"HomePage",component:ne,meta:{title:"Cloud-IP Dynamic DNS Service",isAuth:!1},children:[{path:"Index",component:de,meta:{title:"Home",isAuth:!1}},{path:"TechSupport",component:ke,meta:{title:"TechSupport",isAuth:!1}},{path:"GiftCard",component:ve,meta:{title:"GiftCard",isAuth:!1}},{path:"ForPartner",component:Ce,meta:{title:"ForPartner",isAuth:!1}},{path:"ContactUS",component:He,meta:{title:"ContactUS",isAuth:!1}},{path:"CustomerService",component:Te,meta:{title:"CustomerService",isAuth:!1}},{path:"/HomePage",redirect:"/HomePage/Index"}]},{path:"/UserProfile",name:"UserProfile",component:Ge,meta:{title:"UserProfile",isAuth:!0},beforeEnter:async(e,t,a)=>{const o=J();if(null!==o&&void 0!==o&&null!==o){G.Z.log("check the quality of the access_token!");const e=await Ha(o+"");G.Z.log("check the quality of the access_token done:{}",e),"true"===e&&(G.Z.log("the access_token is success."),a())}},children:[{path:"ProfileHome",component:Ua,meta:{title:"用户后台",isAuth:!0}},{path:"MyDomains",component:bt,meta:{title:"My Domains",isAuth:!0}},{path:"SSLCerts",component:Mt,meta:{title:"HTTPS SSL Certs",isAuth:!0}},{path:"PaymentMethod",component:Kt,meta:{title:"Payment Method",isAuth:!0}},{path:"PaymentHistory",component:zt,meta:{title:"Payment History",isAuth:!0}},{path:"DomainPlans",component:yt,meta:{title:"Domain Plans",isAuth:!0}},{path:"UserInformation",component:xt,meta:{title:"User Information",isAuth:!0}},{path:"TwoFaFido",component:Zt,meta:{title:"User Information",isAuth:!0}},{path:"AccountProtect",component:Nt,meta:{title:"Account Protect",isAuth:!0}},{path:"/UserProfile",redirect:"/UserProfile/ProfileHome"}]},{path:"/OauthDone",name:"OauthDone",component:ja,meta:{title:"OauthDone",isAuth:!1}},{path:"/",redirect:"/HomePage"}]});async function Ha(e){return new Promise(((t,a)=>{te.getApiService().tokenStatus(e,{onInValid(){t("false")},onValid(){t("true")}})}))}Oa.beforeEach(((e,t,a)=>{console.log("beforeEach....",e.path),e.meta.isAuth?(console.log("applying router protection.......",e.path),J()?a():window.location.replace("https://user.cloud-ip.net/#/Login?return_url="+K.returnUrl)):a()})),Oa.afterEach(((e,t)=>{document.title=e.meta.title||"myTitle",console.log("afterEach....")}));var Ia=Oa,Na={version(){return"1.0.0"},install(e){G.Z.log("installing this plugin..."),e.directive("bigdog",{mounted(e,t){G.Z.log("Customized Directives...mounted")},updated(e,t){G.Z.log("Customized Directives...updated",t.value)}})}};const qa=(0,o.ri)(d).use(Ia).use(b).use(Na);qa.mount("#app")},6050:function(e,t,a){a.d(t,{Z:function(){return o}});class o{static log(...e){console.log(e)}}}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,r){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],r=e[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[l])}))?o.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{291:"1541f7df",844:"1388ad19",890:"9f9114a3"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="CloudDNSPortal:";a.l=function(o,n,r,s){if(e[o])e[o].push(n);else{var i,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==t+r){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+r),i.src=o),e[o]=[n];var m=function(t,a){i.onerror=i.onload=null,clearTimeout(p);var n=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={143:0};a.f.j=function(t,o){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise((function(a,o){n=e[t]=[a,o]}));o.push(n[2]=r);var s=a.p+a.u(t),i=new Error,l=function(o){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",i.name="ChunkLoadError",i.type=r,i.request=s,n[1](i)}};a.l(s,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,s=o[0],i=o[1],l=o[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var c=l(a)}for(t&&t(o);d<s.length;d++)r=s[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},o=self["webpackChunkCloudDNSPortal"]=self["webpackChunkCloudDNSPortal"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(967)}));o=a.O(o)})();