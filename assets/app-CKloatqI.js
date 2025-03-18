const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.html-C1gfJO5R.js","assets/plugin-vue_export-helper-DlAUqK2U.js","assets/home.html-D_pnXYHR.js","assets/intro.html-C61ofPw1.js","assets/index.html-DvdlAVKL.js","assets/index.html-B0iDKrUt.js","assets/component_oslo_messaging.html-1qeNmHg8.js","assets/index.html-nPSxFHXL.js","assets/openstack_3service.html-BzU4BJ9k.js","assets/index.html-BuyuW4sI.js","assets/openstack_serv4ice.html-BL8oJ4lS.js","assets/index.html-QHL2qJ2q.js","assets/launcher.html-gquoGsfi.js","assets/pci_passthrough.html-CaIV7We3.js","assets/service.html-fVA5zupP.js","assets/404.html-BxVWEwpu.js","assets/index.html-DA1aStA9.js","assets/index.html-DcnHO8yo.js","assets/index.html-BSxu_TIf.js","assets/index.html-Cu_FsMPz.js","assets/index.html-B7TSOtDC.js","assets/index.html-DLnAvT3L.js","assets/index.html-CSlWzq2T.js","assets/index.html-CSo9dkKU.js","assets/index.html-3sawvGgA.js","assets/index.html-DoRpofML.js","assets/index.html-Buu-Rja4.js","assets/index.html-Bqosupmv.js","assets/index.html-DJExny4D.js","assets/index.html-CIRjCVYQ.js","assets/index.html-C-nisTJr.js","assets/index.html-j9cWq9R5.js","assets/index.html-CWn75Zrq.js","assets/index.html-BieKuVlB.js","assets/index.html-BNer7Qgv.js","assets/index.html-DIDOxKID.js","assets/index.html-BRbljHwB.js","assets/index.html-CZqVqzit.js","assets/index.html-DKd79Axu.js","assets/index.html-CTyGazeV.js","assets/index.html-CmfLGlg-.js","assets/index.html-B923ifLm.js","assets/index.html-C6BRckAk.js","assets/index.html-DxJlZ7tT.js","assets/index.html-DNbdHipd.js","assets/index.html-C71Nrxhy.js"])))=>i.map(i=>d[i]);
var th=Object.defineProperty;var nh=(e,t,n)=>t in e?th(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var pr=(e,t,n)=>nh(e,typeof t!="symbol"?t+"":t,n);const sh="modulepreload",ih=function(e){return"/"+e},Tl={},ne=function(t,n,s){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(o=>{if(o=ih(o),o in Tl)return;Tl[o]=!0;const u=o.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${p}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":sh,u||(d.as="script"),d.crossOrigin="",d.href=o,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,h)=>{d.addEventListener("load",f),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function os(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ee={},Un=[],Pt=()=>{},rh=()=>!1,Ws=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ea=e=>e.startsWith("onUpdate:"),Fe=Object.assign,wa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ah=Object.prototype.hasOwnProperty,ve=(e,t)=>ah.call(e,t),ie=Array.isArray,Cs=e=>Hi(e)==="[object Map]",lh=e=>Hi(e)==="[object Set]",re=e=>typeof e=="function",Be=e=>typeof e=="string",cs=e=>typeof e=="symbol",Oe=e=>e!==null&&typeof e=="object",su=e=>(Oe(e)||re(e))&&re(e.then)&&re(e.catch),oh=Object.prototype.toString,Hi=e=>oh.call(e),ch=e=>Hi(e).slice(8,-1),uh=e=>Hi(e)==="[object Object]",Sa=e=>Be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jn=os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ui=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ph=/-(\w)/g,Ke=Ui(e=>e.replace(ph,(t,n)=>n?n.toUpperCase():"")),dh=/\B([A-Z])/g,vn=Ui(e=>e.replace(dh,"-$1").toLowerCase()),us=Ui(e=>e.charAt(0).toUpperCase()+e.slice(1)),dr=Ui(e=>e?`on${us(e)}`:""),pn=(e,t)=>!Object.is(e,t),fr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Qn=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},fh=e=>{const t=parseFloat(e);return isNaN(t)?e:t},hh=e=>{const t=Be(e)?Number(e):NaN;return isNaN(t)?e:t};let Bl;const ji=()=>Bl||(Bl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gi(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=Be(s)?_h(s):Gi(s);if(i)for(const r in i)t[r]=i[r]}return t}else if(Be(e)||Oe(e))return e}const gh=/;(?![^(]*\))/g,vh=/:([^]+)/,mh=/\/\*[^]*?\*\//g;function _h(e){const t={};return e.replace(mh,"").split(gh).forEach(n=>{if(n){const s=n.split(vh);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function kh(e){let t="";if(!e||Be(e))return t;for(const n in e){const s=e[n];if(Be(s)||typeof s=="number"){const i=n.startsWith("--")?n:vn(n);t+=`${i}:${s};`}}return t}function qi(e){let t="";if(Be(e))t=e;else if(ie(e))for(let n=0;n<e.length;n++){const s=qi(e[n]);s&&(t+=s+" ")}else if(Oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const iu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yh=os(iu),Ol=os(iu+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function Ca(e){return!!e||e===""}const bh=os("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),Ah=os("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");function Eh(e){if(e==null)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"}const wh=/[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;function Sh(e,t){return e.replace(wh,n=>`\\${n}`)}/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ye;class Ch{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ye,!t&&Ye&&(this.index=(Ye.scopes||(Ye.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ye;try{return Ye=this,t()}finally{Ye=n}}}on(){Ye=this}off(){Ye=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ru(){return Ye}function xh(e,t=!1){Ye&&Ye.cleanups.push(e)}let Ae;const hr=new WeakSet;class au{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ye&&Ye.active&&Ye.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,hr.has(this)&&(hr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ou(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Il(this),cu(this);const t=Ae,n=At;Ae=this,At=!0;try{return this.fn()}finally{uu(this),Ae=t,At=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ba(t);this.deps=this.depsTail=void 0,Il(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?hr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Vr(this)&&this.run()}get dirty(){return Vr(this)}}let lu=0,xs,Ts;function ou(e,t=!1){if(e.flags|=8,t){e.next=Ts,Ts=e;return}e.next=xs,xs=e}function xa(){lu++}function Ta(){if(--lu>0)return;if(Ts){let t=Ts;for(Ts=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;xs;){let t=xs;for(xs=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function cu(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function uu(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ba(s),Th(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function Vr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(pu(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function pu(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Rs))return;e.globalVersion=Rs;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Vr(e)){e.flags&=-3;return}const n=Ae,s=At;Ae=e,At=!0;try{cu(e);const i=e.fn(e._value);(t.version===0||pn(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ae=n,At=s,uu(e),e.flags&=-3}}function Ba(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ba(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Th(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let At=!0;const du=[];function Wt(){du.push(At),At=!1}function Yt(){const e=du.pop();At=e===void 0?!0:e}function Il(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ae;Ae=void 0;try{t()}finally{Ae=n}}}let Rs=0;class Bh{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ki{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!Ae||!At||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new Bh(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,fu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=s)}return n}trigger(t){this.version++,Rs++,this.notify(t)}notify(t){xa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ta()}}}function fu(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)fu(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Bi=new WeakMap,Bn=Symbol(""),$r=Symbol(""),Ns=Symbol("");function Ge(e,t,n){if(At&&Ae){let s=Bi.get(e);s||Bi.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ki),i.map=s,i.key=n),i.track()}}function Gt(e,t,n,s,i,r){const a=Bi.get(e);if(!a){Rs++;return}const l=o=>{o&&o.trigger()};if(xa(),t==="clear")a.forEach(l);else{const o=ie(e),u=o&&Sa(n);if(o&&n==="length"){const p=Number(s);a.forEach((d,f)=>{(f==="length"||f===Ns||!cs(f)&&f>=p)&&l(d)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),u&&l(a.get(Ns)),t){case"add":o?u&&l(a.get("length")):(l(a.get(Bn)),Cs(e)&&l(a.get($r)));break;case"delete":o||(l(a.get(Bn)),Cs(e)&&l(a.get($r)));break;case"set":Cs(e)&&l(a.get(Bn));break}}Ta()}function Oh(e,t){const n=Bi.get(e);return n&&n.get(t)}function Vn(e){const t=oe(e);return t===e?t:(Ge(t,"iterate",Ns),Et(e)?t:t.map(Xe))}function Oa(e){return Ge(e=oe(e),"iterate",Ns),e}const Ih={__proto__:null,[Symbol.iterator](){return gr(this,Symbol.iterator,Xe)},concat(...e){return Vn(this).concat(...e.map(t=>ie(t)?Vn(t):t))},entries(){return gr(this,"entries",e=>(e[1]=Xe(e[1]),e))},every(e,t){return Mt(this,"every",e,t,void 0,arguments)},filter(e,t){return Mt(this,"filter",e,t,n=>n.map(Xe),arguments)},find(e,t){return Mt(this,"find",e,t,Xe,arguments)},findIndex(e,t){return Mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Mt(this,"findLast",e,t,Xe,arguments)},findLastIndex(e,t){return Mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return vr(this,"includes",e)},indexOf(...e){return vr(this,"indexOf",e)},join(e){return Vn(this).join(e)},lastIndexOf(...e){return vr(this,"lastIndexOf",e)},map(e,t){return Mt(this,"map",e,t,void 0,arguments)},pop(){return vs(this,"pop")},push(...e){return vs(this,"push",e)},reduce(e,...t){return Dl(this,"reduce",e,t)},reduceRight(e,...t){return Dl(this,"reduceRight",e,t)},shift(){return vs(this,"shift")},some(e,t){return Mt(this,"some",e,t,void 0,arguments)},splice(...e){return vs(this,"splice",e)},toReversed(){return Vn(this).toReversed()},toSorted(e){return Vn(this).toSorted(e)},toSpliced(...e){return Vn(this).toSpliced(...e)},unshift(...e){return vs(this,"unshift",e)},values(){return gr(this,"values",Xe)}};function gr(e,t,n){const s=Oa(e),i=s[t]();return s!==e&&!Et(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Dh=Array.prototype;function Mt(e,t,n,s,i,r){const a=Oa(e),l=a!==e&&!Et(e),o=a[t];if(o!==Dh[t]){const d=o.apply(e,r);return l?Xe(d):d}let u=n;a!==e&&(l?u=function(d,f){return n.call(this,Xe(d),f,e)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,e)}));const p=o.call(a,u,s);return l&&i?i(p):p}function Dl(e,t,n,s){const i=Oa(e);let r=n;return i!==e&&(Et(e)?n.length>3&&(r=function(a,l,o){return n.call(this,a,l,o,e)}):r=function(a,l,o){return n.call(this,a,Xe(l),o,e)}),i[t](r,...s)}function vr(e,t,n){const s=oe(e);Ge(s,"iterate",Ns);const i=s[t](...n);return(i===-1||i===!1)&&La(n[0])?(n[0]=oe(n[0]),s[t](...n)):i}function vs(e,t,n=[]){Wt(),xa();const s=oe(e)[t].apply(e,n);return Ta(),Yt(),s}const Lh=os("__proto__,__v_isRef,__isVue"),hu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(cs));function Ph(e){cs(e)||(e=String(e));const t=oe(this);return Ge(t,"has",e),t.hasOwnProperty(e)}class gu{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?jh:ku:r?_u:mu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const a=ie(t);if(!i){let o;if(a&&(o=Ih[n]))return o;if(n==="hasOwnProperty")return Ph}const l=Reflect.get(t,n,Pe(t)?t:s);return(cs(n)?hu.has(n):Lh(n))||(i||Ge(t,"get",n),r)?l:Pe(l)?a&&Sa(n)?l:l.value:Oe(l)?i?mn(l):Ys(l):l}}class vu extends gu{constructor(t=!1){super(!1,t)}set(t,n,s,i){let r=t[n];if(!this._isShallow){const o=On(r);if(!Et(s)&&!On(s)&&(r=oe(r),s=oe(s)),!ie(t)&&Pe(r)&&!Pe(s))return o?!1:(r.value=s,!0)}const a=ie(t)&&Sa(n)?Number(n)<t.length:ve(t,n),l=Reflect.set(t,n,s,Pe(t)?t:i);return t===oe(i)&&(a?pn(s,r)&&Gt(t,"set",n,s):Gt(t,"add",n,s)),l}deleteProperty(t,n){const s=ve(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&Gt(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!cs(n)||!hu.has(n))&&Ge(t,"has",n),s}ownKeys(t){return Ge(t,"iterate",ie(t)?"length":Bn),Reflect.ownKeys(t)}}class Fh extends gu{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Rh=new vu,Nh=new Fh,Mh=new vu(!0);const zr=e=>e,fi=e=>Reflect.getPrototypeOf(e);function Vh(e,t,n){return function(...s){const i=this.__v_raw,r=oe(i),a=Cs(r),l=e==="entries"||e===Symbol.iterator&&a,o=e==="keys"&&a,u=i[e](...s),p=n?zr:t?Hr:Xe;return!t&&Ge(r,"iterate",o?$r:Bn),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:l?[p(d[0]),p(d[1])]:p(d),done:f}},[Symbol.iterator](){return this}}}}function hi(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function $h(e,t){const n={get(i){const r=this.__v_raw,a=oe(r),l=oe(i);e||(pn(i,l)&&Ge(a,"get",i),Ge(a,"get",l));const{has:o}=fi(a),u=t?zr:e?Hr:Xe;if(o.call(a,i))return u(r.get(i));if(o.call(a,l))return u(r.get(l));r!==a&&r.get(i)},get size(){const i=this.__v_raw;return!e&&Ge(oe(i),"iterate",Bn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,a=oe(r),l=oe(i);return e||(pn(i,l)&&Ge(a,"has",i),Ge(a,"has",l)),i===l?r.has(i):r.has(i)||r.has(l)},forEach(i,r){const a=this,l=a.__v_raw,o=oe(l),u=t?zr:e?Hr:Xe;return!e&&Ge(o,"iterate",Bn),l.forEach((p,d)=>i.call(r,u(p),u(d),a))}};return Fe(n,e?{add:hi("add"),set:hi("set"),delete:hi("delete"),clear:hi("clear")}:{add(i){!t&&!Et(i)&&!On(i)&&(i=oe(i));const r=oe(this);return fi(r).has.call(r,i)||(r.add(i),Gt(r,"add",i,i)),this},set(i,r){!t&&!Et(r)&&!On(r)&&(r=oe(r));const a=oe(this),{has:l,get:o}=fi(a);let u=l.call(a,i);u||(i=oe(i),u=l.call(a,i));const p=o.call(a,i);return a.set(i,r),u?pn(r,p)&&Gt(a,"set",i,r):Gt(a,"add",i,r),this},delete(i){const r=oe(this),{has:a,get:l}=fi(r);let o=a.call(r,i);o||(i=oe(i),o=a.call(r,i)),l&&l.call(r,i);const u=r.delete(i);return o&&Gt(r,"delete",i,void 0),u},clear(){const i=oe(this),r=i.size!==0,a=i.clear();return r&&Gt(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Vh(i,e,t)}),n}function Ia(e,t){const n=$h(e,t);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(ve(n,i)&&i in s?n:s,i,r)}const zh={get:Ia(!1,!1)},Hh={get:Ia(!1,!0)},Uh={get:Ia(!0,!1)};const mu=new WeakMap,_u=new WeakMap,ku=new WeakMap,jh=new WeakMap;function Gh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qh(e){return e.__v_skip||!Object.isExtensible(e)?0:Gh(ch(e))}function Ys(e){return On(e)?e:Da(e,!1,Rh,zh,mu)}function yu(e){return Da(e,!1,Mh,Hh,_u)}function mn(e){return Da(e,!0,Nh,Uh,ku)}function Da(e,t,n,s,i){if(!Oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const a=qh(e);if(a===0)return e;const l=new Proxy(e,a===2?s:n);return i.set(e,l),l}function Bs(e){return On(e)?Bs(e.__v_raw):!!(e&&e.__v_isReactive)}function On(e){return!!(e&&e.__v_isReadonly)}function Et(e){return!!(e&&e.__v_isShallow)}function La(e){return e?!!e.__v_raw:!1}function oe(e){const t=e&&e.__v_raw;return t?oe(t):e}function Kh(e){return!ve(e,"__v_skip")&&Object.isExtensible(e)&&Qn(e,"__v_skip",!0),e}const Xe=e=>Oe(e)?Ys(e):e,Hr=e=>Oe(e)?mn(e):e;function Pe(e){return e?e.__v_isRef===!0:!1}function ee(e){return bu(e,!1)}function He(e){return bu(e,!0)}function bu(e,t){return Pe(e)?e:new Wh(e,t)}class Wh{constructor(t,n){this.dep=new Ki,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:oe(t),this._value=n?t:Xe(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Et(t)||On(t);t=s?t:oe(t),pn(t,n)&&(this._rawValue=t,this._value=s?t:Xe(t),this.dep.trigger())}}function un(e){return Pe(e)?e.value:e}const Yh={get:(e,t,n)=>t==="__v_raw"?e:un(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Au(e){return Bs(e)?e:new Proxy(e,Yh)}class Xh{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Ki,{get:s,set:i}=t(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=i}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Eu(e){return new Xh(e)}function Qh(e){const t=ie(e)?new Array(e.length):{};for(const n in e)t[n]=wu(e,n);return t}class Jh{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Oh(oe(this._object),this._key)}}class Zh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function ps(e,t,n){return Pe(e)?e:re(e)?new Zh(e):Oe(e)&&arguments.length>1?wu(e,t,n):ee(e)}function wu(e,t,n){const s=e[t];return Pe(s)?s:new Jh(e,t,n)}class eg{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ki(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return ou(this,!0),!0}get value(){const t=this.dep.track();return pu(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function tg(e,t,n=!1){let s,i;return re(e)?s=e:(s=e.get,i=e.set),new eg(s,i,n)}const gi={},Oi=new WeakMap;let wn;function ng(e,t=!1,n=wn){if(n){let s=Oi.get(n);s||Oi.set(n,s=[]),s.push(e)}}function sg(e,t,n=Ee){const{immediate:s,deep:i,once:r,scheduler:a,augmentJob:l,call:o}=n,u=w=>i?w:Et(w)||i===!1||i===0?cn(w,1):cn(w);let p,d,f,h,m=!1,_=!1;if(Pe(e)?(d=()=>e.value,m=Et(e)):Bs(e)?(d=()=>u(e),m=!0):ie(e)?(_=!0,m=e.some(w=>Bs(w)||Et(w)),d=()=>e.map(w=>{if(Pe(w))return w.value;if(Bs(w))return u(w);if(re(w))return o?o(w,2):w()})):re(e)?t?d=o?()=>o(e,2):e:d=()=>{if(f){Wt();try{f()}finally{Yt()}}const w=wn;wn=p;try{return o?o(e,3,[h]):e(h)}finally{wn=w}}:d=Pt,t&&i){const w=d,P=i===!0?1/0:i;d=()=>cn(w(),P)}const b=ru(),y=()=>{p.stop(),b&&wa(b.effects,p)};if(r&&t){const w=t;t=(...P)=>{w(...P),y()}}let E=_?new Array(e.length).fill(gi):gi;const g=w=>{if(!(!(p.flags&1)||!p.dirty&&!w))if(t){const P=p.run();if(i||m||(_?P.some((M,R)=>pn(M,E[R])):pn(P,E))){f&&f();const M=wn;wn=p;try{const R=[P,E===gi?void 0:_&&E[0]===gi?[]:E,h];o?o(t,3,R):t(...R),E=P}finally{wn=M}}}else p.run()};return l&&l(g),p=new au(d),p.scheduler=a?()=>a(g,!1):g,h=w=>ng(w,!1,p),f=p.onStop=()=>{const w=Oi.get(p);if(w){if(o)o(w,4);else for(const P of w)P();Oi.delete(p)}},t?s?g(!0):E=p.run():a?a(g.bind(null,!0),!0):p.run(),y.pause=p.pause.bind(p),y.resume=p.resume.bind(p),y.stop=y,y}function cn(e,t=1/0,n){if(t<=0||!Oe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Pe(e))cn(e.value,t,n);else if(ie(e))for(let s=0;s<e.length;s++)cn(e[s],t,n);else if(lh(e)||Cs(e))e.forEach(s=>{cn(s,t,n)});else if(uh(e)){for(const s in e)cn(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&cn(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Os=[];let mr=!1;function nn(e,...t){if(mr)return;mr=!0,Wt();const n=Os.length?Os[Os.length-1].component:null,s=n&&n.appContext.config.warnHandler,i=ig();if(s)ds(s,n,11,[e+t.map(r=>{var a,l;return(l=(a=r.toString)==null?void 0:a.call(r))!=null?l:JSON.stringify(r)}).join(""),n&&n.proxy,i.map(({vnode:r})=>`at <${dp(n,r.type)}>`).join(`
`),i]);else{const r=[`[Vue warn]: ${e}`,...t];i.length&&r.push(`
`,...rg(i)),console.warn(...r)}Yt(),mr=!1}function ig(){let e=Os[Os.length-1];if(!e)return[];const t=[];for(;e;){const n=t[0];n&&n.vnode===e?n.recurseCount++:t.push({vnode:e,recurseCount:0});const s=e.component&&e.component.parent;e=s&&s.vnode}return t}function rg(e){const t=[];return e.forEach((n,s)=>{t.push(...s===0?[]:[`
`],...ag(n))}),t}function ag({vnode:e,recurseCount:t}){const n=t>0?`... (${t} recursive calls)`:"",s=e.component?e.component.parent==null:!1,i=` at <${dp(e.component,e.type,s)}`,r=">"+n;return e.props?[i,...lg(e.props),r]:[i+r]}function lg(e){const t=[],n=Object.keys(e);return n.slice(0,3).forEach(s=>{t.push(...Su(s,e[s]))}),n.length>3&&t.push(" ..."),t}function Su(e,t,n){return Be(t)?(t=JSON.stringify(t),n?t:[`${e}=${t}`]):typeof t=="number"||typeof t=="boolean"||t==null?n?t:[`${e}=${t}`]:Pe(t)?(t=Su(e,oe(t.value),!0),n?t:[`${e}=Ref<`,t,">"]):re(t)?[`${e}=fn${t.name?`<${t.name}>`:""}`]:(t=oe(t),n?t:[`${e}=`,t])}function ds(e,t,n,s){try{return s?e(...s):e()}catch(i){Xs(i,t,n)}}function St(e,t,n,s){if(re(e)){const i=ds(e,t,n,s);return i&&su(i)&&i.catch(r=>{Xs(r,t,n)}),i}if(ie(e)){const i=[];for(let r=0;r<e.length;r++)i.push(St(e[r],t,n,s));return i}}function Xs(e,t,n,s=!0){const i=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ee;if(t){let l=t.parent;const o=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const p=l.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,o,u)===!1)return}l=l.parent}if(r){Wt(),ds(r,null,10,[e,o,u]),Yt();return}}og(e,n,i,s,a)}function og(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const Qe=[];let It=-1;const Gn=[];let rn=null,zn=0;const Cu=Promise.resolve();let Ii=null;function Xt(e){const t=Ii||Cu;return e?t.then(this?e.bind(this):e):t}function cg(e){let t=It+1,n=Qe.length;for(;t<n;){const s=t+n>>>1,i=Qe[s],r=Ms(i);r<e||r===e&&i.flags&2?t=s+1:n=s}return t}function Pa(e){if(!(e.flags&1)){const t=Ms(e),n=Qe[Qe.length-1];!n||!(e.flags&2)&&t>=Ms(n)?Qe.push(e):Qe.splice(cg(t),0,e),e.flags|=1,xu()}}function xu(){Ii||(Ii=Cu.then(Tu))}function ug(e){ie(e)?Gn.push(...e):rn&&e.id===-1?rn.splice(zn+1,0,e):e.flags&1||(Gn.push(e),e.flags|=1),xu()}function Ll(e,t,n=It+1){for(;n<Qe.length;n++){const s=Qe[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Qe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Di(e){if(Gn.length){const t=[...new Set(Gn)].sort((n,s)=>Ms(n)-Ms(s));if(Gn.length=0,rn){rn.push(...t);return}for(rn=t,zn=0;zn<rn.length;zn++){const n=rn[zn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}rn=null,zn=0}}const Ms=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Tu(e){try{for(It=0;It<Qe.length;It++){const t=Qe[It];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ds(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;It<Qe.length;It++){const t=Qe[It];t&&(t.flags&=-2)}It=-1,Qe.length=0,Di(),Ii=null,(Qe.length||Gn.length)&&Tu()}}let Lt,bs=[],Ur=!1;function Wi(e,...t){Lt?Lt.emit(e,...t):Ur||bs.push({event:e,args:t})}function Bu(e,t){var n,s;Lt=e,Lt?(Lt.enabled=!0,bs.forEach(({event:i,args:r})=>Lt.emit(i,...r)),bs=[]):typeof window<"u"&&window.HTMLElement&&!((s=(n=window.navigator)==null?void 0:n.userAgent)!=null&&s.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Bu(r,t)}),setTimeout(()=>{Lt||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ur=!0,bs=[])},3e3)):(Ur=!0,bs=[])}function pg(e,t){Wi("app:init",e,t,{Fragment:Je,Text:dn,Comment:st,Static:Wn})}function dg(e){Wi("app:unmount",e)}const fg=Fa("component:added"),Ou=Fa("component:updated"),hg=Fa("component:removed"),gg=e=>{Lt&&typeof Lt.cleanupBuffer=="function"&&!Lt.cleanupBuffer(e)&&hg(e)};/*! #__NO_SIDE_EFFECTS__ */function Fa(e){return t=>{Wi(e,t.appContext.app,t.uid,t.parent?t.parent.uid:void 0,t)}}function vg(e,t,n){Wi("component:emit",e.appContext.app,e,t,n)}let kt=null,Iu=null;function Li(e){const t=kt;return kt=e,Iu=e&&e.type.__scopeId||null,t}function mg(e,t=kt,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&Kl(-1);const r=Li(t);let a;try{a=e(...i)}finally{Li(r),s._d&&Kl(1)}return Ou(t),a};return s._n=!0,s._c=!0,s._d=!0,s}function Dt(e,t,n,s){const i=e.dirs,r=t&&t.dirs;for(let a=0;a<i.length;a++){const l=i[a];r&&(l.oldValue=r[a].value);let o=l.dir[s];o&&(Wt(),St(o,n,8,[e.el,l,e,t]),Yt())}}const _g=Symbol("_vte"),Du=e=>e.__isTeleport,an=Symbol("_leaveCb"),vi=Symbol("_enterCb");function Lu(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ie(()=>{e.isMounted=!0}),Xi(()=>{e.isUnmounting=!0}),e}const vt=[Function,Array],Pu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vt,onEnter:vt,onAfterEnter:vt,onEnterCancelled:vt,onBeforeLeave:vt,onLeave:vt,onAfterLeave:vt,onLeaveCancelled:vt,onBeforeAppear:vt,onAppear:vt,onAfterAppear:vt,onAppearCancelled:vt},Fu=e=>{const t=e.subTree;return t.component?Fu(t.component):t},kg={name:"BaseTransition",props:Pu,setup(e,{slots:t}){const n=Pn(),s=Lu();return()=>{const i=t.default&&Ra(t.default(),!0);if(!i||!i.length)return;const r=Ru(i),a=oe(e),{mode:l}=a;if(s.isLeaving)return _r(r);const o=Pl(r);if(!o)return _r(r);let u=Vs(o,a,s,n,f=>u=f);o.type!==st&&In(o,u);const p=n.subTree,d=p&&Pl(p);if(d&&d.type!==st&&!Cn(o,d)&&Fu(n).type!==st){const f=Vs(d,a,s,n);if(In(d,f),l==="out-in"&&o.type!==st)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave},_r(r);l==="in-out"&&o.type!==st&&(f.delayLeave=(h,m,_)=>{const b=Nu(s,d);b[String(d.key)]=d,h[an]=()=>{m(),h[an]=void 0,delete u.delayedLeave},u.delayedLeave=_})}return r}}};function Ru(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==st){t=n;break}}return t}const yg=kg;function Nu(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Vs(e,t,n,s,i){const{appear:r,mode:a,persisted:l=!1,onBeforeEnter:o,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:b,onAppear:y,onAfterAppear:E,onAppearCancelled:g}=t,w=String(e.key),P=Nu(n,e),M=(V,O)=>{V&&St(V,s,9,O)},R=(V,O)=>{const W=O[1];M(V,O),ie(V)?V.every(L=>L.length<=1)&&W():V.length<=1&&W()},Q={mode:a,persisted:l,beforeEnter(V){let O=o;if(!n.isMounted)if(r)O=b||o;else return;V[an]&&V[an](!0);const W=P[w];W&&Cn(e,W)&&W.el[an]&&W.el[an](),M(O,[V])},enter(V){let O=u,W=p,L=d;if(!n.isMounted)if(r)O=y||u,W=E||p,L=g||d;else return;let J=!1;const ae=V[vi]=ke=>{J||(J=!0,ke?M(L,[V]):M(W,[V]),Q.delayedLeave&&Q.delayedLeave(),V[vi]=void 0)};O?R(O,[V,ae]):ae()},leave(V,O){const W=String(e.key);if(V[vi]&&V[vi](!0),n.isUnmounting)return O();M(f,[V]);let L=!1;const J=V[an]=ae=>{L||(L=!0,O(),ae?M(_,[V]):M(m,[V]),V[an]=void 0,P[W]===e&&delete P[W])};P[W]=e,h?R(h,[V,J]):J()},clone(V){const O=Vs(V,t,n,s,i);return i&&i(O),O}};return Q}function _r(e){if(Qs(e))return e=fn(e),e.children=null,e}function Pl(e){if(!Qs(e))return Du(e.type)&&e.children?Ru(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&re(n.default))return n.default()}}function In(e,t){e.shapeFlag&6&&e.component?(e.transition=t,In(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ra(e,t=!1,n){let s=[],i=0;for(let r=0;r<e.length;r++){let a=e[r];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:r);a.type===Je?(a.patchFlag&128&&i++,s=s.concat(Ra(a.children,t,l))):(t||a.type!==st)&&s.push(l!=null?fn(a,{key:l}):a)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function z(e,t){return re(e)?Fe({name:e.name},t,{setup:e}):e}function Na(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Pi(e,t,n,s,i=!1){if(ie(e)){e.forEach((m,_)=>Pi(m,t&&(ie(t)?t[_]:t),n,s,i));return}if(qn(s)&&!i)return;const r=s.shapeFlag&4?Ua(s.component):s.el,a=i?null:r,{i:l,r:o}=e,u=t&&t.r,p=l.refs===Ee?l.refs={}:l.refs,d=l.setupState,f=oe(d),h=d===Ee?()=>!1:m=>ve(f,m);if(u!=null&&u!==o&&(Be(u)?(p[u]=null,h(u)&&(d[u]=null)):Pe(u)&&(u.value=null)),re(o))ds(o,l,12,[a,p]);else{const m=Be(o),_=Pe(o);if(m||_){const b=()=>{if(e.f){const y=m?h(o)?d[o]:p[o]:o.value;i?ie(y)&&wa(y,r):ie(y)?y.includes(r)||y.push(r):m?(p[o]=[r],h(o)&&(d[o]=p[o])):(o.value=[r],e.k&&(p[e.k]=o.value))}else m?(p[o]=a,h(o)&&(d[o]=a)):_&&(o.value=a,e.k&&(p[e.k]=a))};a?(b.id=-1,ct(b,n)):b()}}}let Fl=!1;const yn=()=>{Fl||(console.error("Hydration completed but contains mismatches."),Fl=!0)},bg=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Ag=e=>e.namespaceURI.includes("MathML"),mi=e=>{if(e.nodeType===1){if(bg(e))return"svg";if(Ag(e))return"mathml"}},Sn=e=>e.nodeType===8;function Eg(e){const{mt:t,p:n,o:{patchProp:s,createText:i,nextSibling:r,parentNode:a,remove:l,insert:o,createComment:u}}=e,p=(g,w)=>{if(!w.hasChildNodes()){nn("Attempting to hydrate existing markup but container is empty. Performing full mount instead."),n(null,g,w),Di(),w._vnode=g;return}d(w.firstChild,g,null,null,null),Di(),w._vnode=g},d=(g,w,P,M,R,Q=!1)=>{Q=Q||!!w.dynamicChildren;const V=Sn(g)&&g.data==="[",O=()=>_(g,w,P,M,R,V),{type:W,ref:L,shapeFlag:J,patchFlag:ae}=w;let ke=g.nodeType;w.el=g,Qn(g,"__vnode",w,!0),Qn(g,"__vueParentComponent",P,!0),ae===-2&&(Q=!1,w.dynamicChildren=null);let K=null;switch(W){case dn:ke!==3?w.children===""?(o(w.el=i(""),a(g),g),K=g):K=O():(g.data!==w.children&&(nn("Hydration text mismatch in",g.parentNode,`
  - rendered on server: ${JSON.stringify(g.data)}
  - expected on client: ${JSON.stringify(w.children)}`),yn(),g.data=w.children),K=r(g));break;case st:E(g)?(K=r(g),y(w.el=g.content.firstChild,g,P)):ke!==8||V?K=O():K=r(g);break;case Wn:if(V&&(g=r(g),ke=g.nodeType),ke===1||ke===3){K=g;const $=!w.children.length;for(let Y=0;Y<w.staticCount;Y++)$&&(w.children+=K.nodeType===1?K.outerHTML:K.data),Y===w.staticCount-1&&(w.anchor=K),K=r(K);return V?r(K):K}else O();break;case Je:V?K=m(g,w,P,M,R,Q):K=O();break;default:if(J&1)(ke!==1||w.type.toLowerCase()!==g.tagName.toLowerCase())&&!E(g)?K=O():K=f(g,w,P,M,R,Q);else if(J&6){w.slotScopeIds=R;const $=a(g);if(V?K=b(g):Sn(g)&&g.data==="teleport start"?K=b(g,g.data,"teleport end"):K=r(g),t(w,$,null,P,M,mi($),Q),qn(w)){let Y;V?(Y=Me(Je),Y.anchor=K?K.previousSibling:$.lastChild):Y=g.nodeType===3?op(""):Me("div"),Y.el=g,w.component.subTree=Y}}else J&64?ke!==8?K=O():K=w.type.hydrate(g,w,P,M,R,Q,e,h):J&128?K=w.type.hydrate(g,w,P,M,mi(a(g)),R,Q,e,d):nn("Invalid HostVNode type:",W,`(${typeof W})`)}return L!=null&&Pi(L,null,M,w),K},f=(g,w,P,M,R,Q)=>{Q=Q||!!w.dynamicChildren;const{type:V,props:O,patchFlag:W,shapeFlag:L,dirs:J,transition:ae}=w,ke=V==="input"||V==="option";if(ke||W!==-1){J&&Dt(w,null,P,"created");let K=!1;if(E(g)){K=Zu(null,ae)&&P&&P.vnode.props&&P.vnode.props.appear;const Y=g.content.firstChild;K&&ae.beforeEnter(Y),y(Y,g,P),w.el=g=Y}if(L&16&&!(O&&(O.innerHTML||O.textContent))){let Y=h(g.firstChild,w,g,P,M,R,Q),pe=!1;for(;Y;){As(g,1)||(pe||(nn("Hydration children mismatch on",g,`
Server rendered element contains more child nodes than client vdom.`),pe=!0),yn());const Re=Y;Y=Y.nextSibling,l(Re)}}else if(L&8){let Y=w.children;Y[0]===`
`&&(g.tagName==="PRE"||g.tagName==="TEXTAREA")&&(Y=Y.slice(1)),g.textContent!==Y&&(As(g,0)||(nn("Hydration text content mismatch on",g,`
  - rendered on server: ${g.textContent}
  - expected on client: ${w.children}`),yn()),g.textContent=w.children)}if(O){const Y=g.tagName.includes("-");for(const pe in O)!(J&&J.some(Re=>Re.dir.created))&&wg(g,pe,O[pe],w,P)&&yn(),(ke&&(pe.endsWith("value")||pe==="indeterminate")||Ws(pe)&&!jn(pe)||pe[0]==="."||Y)&&s(g,pe,null,O[pe],void 0,P)}let $;($=O&&O.onVnodeBeforeMount)&&mt($,P,w),J&&Dt(w,null,P,"beforeMount"),(($=O&&O.onVnodeMounted)||J||K)&&rp(()=>{$&&mt($,P,w),K&&ae.enter(g),J&&Dt(w,null,P,"mounted")},M)}return g.nextSibling},h=(g,w,P,M,R,Q,V)=>{V=V||!!w.dynamicChildren;const O=w.children,W=O.length;let L=!1;for(let J=0;J<W;J++){const ae=V?O[J]:O[J]=_t(O[J]),ke=ae.type===dn;g?(ke&&!V&&J+1<W&&_t(O[J+1]).type===dn&&(o(i(g.data.slice(ae.children.length)),P,r(g)),g.data=ae.children),g=d(g,ae,M,R,Q,V)):ke&&!ae.children?o(ae.el=i(""),P):(As(P,1)||(L||(nn("Hydration children mismatch on",P,`
Server rendered element contains fewer child nodes than client vdom.`),L=!0),yn()),n(null,ae,P,null,M,R,mi(P),Q))}return g},m=(g,w,P,M,R,Q)=>{const{slotScopeIds:V}=w;V&&(R=R?R.concat(V):V);const O=a(g),W=h(r(g),w,O,P,M,R,Q);return W&&Sn(W)&&W.data==="]"?r(w.anchor=W):(yn(),o(w.anchor=u("]"),O,W),W)},_=(g,w,P,M,R,Q)=>{if(As(g.parentElement,1)||(nn(`Hydration node mismatch:
- rendered on server:`,g,g.nodeType===3?"(text)":Sn(g)&&g.data==="["?"(start of fragment)":"",`
- expected on client:`,w.type),yn()),w.el=null,Q){const W=b(g);for(;;){const L=r(g);if(L&&L!==W)l(L);else break}}const V=r(g),O=a(g);return l(g),n(null,w,O,V,P,M,mi(O),R),V},b=(g,w="[",P="]")=>{let M=0;for(;g;)if(g=r(g),g&&Sn(g)&&(g.data===w&&M++,g.data===P)){if(M===0)return r(g);M--}return g},y=(g,w,P)=>{const M=w.parentNode;M&&M.replaceChild(g,w);let R=P;for(;R;)R.vnode.el===w&&(R.vnode.el=R.subTree.el=g),R=R.parent},E=g=>g.nodeType===1&&g.tagName==="TEMPLATE";return[p,d]}function wg(e,t,n,s,i){let r,a,l,o;if(t==="class")l=e.getAttribute("class"),o=qi(n),Sg(Rl(l||""),Rl(o))||(r=2,a="class");else if(t==="style"){l=e.getAttribute("style")||"",o=Be(n)?n:kh(Gi(n));const u=Nl(l),p=Nl(o);if(s.dirs)for(const{dir:d,value:f}of s.dirs)d.name==="show"&&!f&&p.set("display","none");i&&Mu(i,s,p),Cg(u,p)||(r=3,a="style")}else(e instanceof SVGElement&&Ah(t)||e instanceof HTMLElement&&(Ol(t)||bh(t)))&&(Ol(t)?(l=e.hasAttribute(t),o=Ca(n)):n==null?(l=e.hasAttribute(t),o=!1):(e.hasAttribute(t)?l=e.getAttribute(t):t==="value"&&e.tagName==="TEXTAREA"?l=e.value:l=!1,o=Eh(n)?String(n):!1),l!==o&&(r=4,a=t));if(r!=null&&!As(e,r)){const u=f=>f===!1?"(not rendered)":`${a}="${f}"`,p=`Hydration ${Vu[r]} mismatch on`,d=`
  - rendered on server: ${u(l)}
  - expected on client: ${u(o)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;return nn(p,e,d),!0}return!1}function Rl(e){return new Set(e.trim().split(/\s+/))}function Sg(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}function Nl(e){const t=new Map;for(const n of e.split(";")){let[s,i]=n.split(":");s=s.trim(),i=i&&i.trim(),s&&i&&t.set(s,i)}return t}function Cg(e,t){if(e.size!==t.size)return!1;for(const[n,s]of e)if(s!==t.get(n))return!1;return!0}function Mu(e,t,n){const s=e.subTree;if(e.getCssVars&&(t===s||s&&s.type===Je&&s.children.includes(t))){const i=e.getCssVars();for(const r in i)n.set(`--${Sh(r)}`,String(i[r]))}t===s&&e.parent&&Mu(e.parent,e.vnode,n)}const Ml="data-allow-mismatch",Vu={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function As(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(Ml);)e=e.parentElement;const n=e&&e.getAttribute(Ml);if(n==null)return!1;if(n==="")return!0;{const s=n.split(",");return t===0&&s.includes("children")?!0:n.split(",").includes(Vu[t])}}ji().requestIdleCallback;ji().cancelIdleCallback;function xg(e,t){if(Sn(e)&&e.data==="["){let n=1,s=e.nextSibling;for(;s;){if(s.nodeType===1){if(t(s)===!1)break}else if(Sn(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else t(e)}const qn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Tg(e){re(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:i=200,hydrate:r,timeout:a,suspensible:l=!0,onError:o}=e;let u=null,p,d=0;const f=()=>(d++,u=null,h()),h=()=>{let m;return u||(m=u=t().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),o)return new Promise((b,y)=>{o(_,()=>b(f()),()=>y(_),d+1)});throw _}).then(_=>m!==u&&u?u:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),p=_,_)))};return z({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(m,_,b){const y=r?()=>{const E=r(b,g=>xg(m,g));E&&(_.bum||(_.bum=[])).push(E)}:b;p?y():h().then(()=>!_.isUnmounted&&y())},get __asyncResolved(){return p},setup(){const m=$e;if(Na(m),p)return()=>kr(p,m);const _=g=>{u=null,Xs(g,m,13,!s)};if(l&&m.suspense||Jn)return h().then(g=>()=>kr(g,m)).catch(g=>(_(g),()=>s?Me(s,{error:g}):null));const b=ee(!1),y=ee(),E=ee(!!i);return i&&setTimeout(()=>{E.value=!1},i),a!=null&&setTimeout(()=>{if(!b.value&&!y.value){const g=new Error(`Async component timed out after ${a}ms.`);_(g),y.value=g}},a),h().then(()=>{b.value=!0,m.parent&&Qs(m.parent.vnode)&&m.parent.update()}).catch(g=>{_(g),y.value=g}),()=>{if(b.value&&p)return kr(p,m);if(y.value&&s)return Me(s,{error:y.value});if(n&&!E.value)return Me(n)}}})}function kr(e,t){const{ref:n,props:s,children:i,ce:r}=t.vnode,a=Me(e,s,i);return a.ref=n,a.ce=r,delete t.vnode.ce,a}const Qs=e=>e.type.__isKeepAlive;function Bg(e,t){$u(e,"a",t)}function Og(e,t){$u(e,"da",t)}function $u(e,t,n=$e){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Yi(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Qs(i.parent.vnode)&&Ig(s,t,n,i),i=i.parent}}function Ig(e,t,n,s){const i=Yi(t,e,s,!0);Js(()=>{wa(s[t],i)},n)}function Yi(e,t,n=$e,s=!1){if(n){const i=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...a)=>{Wt();const l=Zs(n),o=St(t,n,e,a);return l(),Yt(),o});return s?i.unshift(r):i.push(r),r}}const Qt=e=>(t,n=$e)=>{(!Jn||e==="sp")&&Yi(e,(...s)=>t(...s),n)},Dg=Qt("bm"),Ie=Qt("m"),Lg=Qt("bu"),zu=Qt("u"),Xi=Qt("bum"),Js=Qt("um"),Pg=Qt("sp"),Fg=Qt("rtg"),Rg=Qt("rtc");function Ng(e,t=$e){Yi("ec",e,t)}const Mg="components";function Ct(e,t){return $g(Mg,e,!0,t)||e}const Vg=Symbol.for("v-ndc");function $g(e,t,n=!0,s=!1){const i=kt||$e;if(i){const r=i.type;{const l=pp(r,!1);if(l&&(l===t||l===Ke(t)||l===us(Ke(t))))return r}const a=Vl(i[e]||r[e],t)||Vl(i.appContext[e],t);return!a&&s?r:a}}function Vl(e,t){return e&&(e[t]||e[Ke(t)]||e[us(Ke(t))])}const jr=e=>e?cp(e)?Ua(e):jr(e.parent):null,Is=Fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>jr(e.parent),$root:e=>jr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ma(e),$forceUpdate:e=>e.f||(e.f=()=>{Pa(e.update)}),$nextTick:e=>e.n||(e.n=Xt.bind(e.proxy)),$watch:e=>av.bind(e)}),yr=(e,t)=>e!==Ee&&!e.__isScriptSetup&&ve(e,t),zg={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:a,type:l,appContext:o}=e;let u;if(t[0]!=="$"){const h=a[t];if(h!==void 0)switch(h){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return r[t]}else{if(yr(s,t))return a[t]=1,s[t];if(i!==Ee&&ve(i,t))return a[t]=2,i[t];if((u=e.propsOptions[0])&&ve(u,t))return a[t]=3,r[t];if(n!==Ee&&ve(n,t))return a[t]=4,n[t];Gr&&(a[t]=0)}}const p=Is[t];let d,f;if(p)return t==="$attrs"&&Ge(e.attrs,"get",""),p(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(n!==Ee&&ve(n,t))return a[t]=4,n[t];if(f=o.config.globalProperties,ve(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:r}=e;return yr(i,t)?(i[t]=n,!0):s!==Ee&&ve(s,t)?(s[t]=n,!0):ve(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,propsOptions:r}},a){let l;return!!n[a]||e!==Ee&&ve(e,a)||yr(t,a)||(l=r[0])&&ve(l,a)||ve(s,a)||ve(Is,a)||ve(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ve(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function $l(e){return ie(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Gr=!0;function Hg(e){const t=Ma(e),n=e.proxy,s=e.ctx;Gr=!1,t.beforeCreate&&zl(t.beforeCreate,e,"bc");const{data:i,computed:r,methods:a,watch:l,provide:o,inject:u,created:p,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:_,deactivated:b,beforeDestroy:y,beforeUnmount:E,destroyed:g,unmounted:w,render:P,renderTracked:M,renderTriggered:R,errorCaptured:Q,serverPrefetch:V,expose:O,inheritAttrs:W,components:L,directives:J,filters:ae}=t;if(u&&Ug(u,s,null),a)for(const $ in a){const Y=a[$];re(Y)&&(s[$]=Y.bind(n))}if(i){const $=i.call(n,n);Oe($)&&(e.data=Ys($))}if(Gr=!0,r)for(const $ in r){const Y=r[$],pe=re(Y)?Y.bind(n,n):re(Y.get)?Y.get.bind(n,n):Pt,Re=!re(Y)&&re(Y.set)?Y.set.bind(n):Pt,Ne=A({get:pe,set:Re});Object.defineProperty(s,$,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:ye=>Ne.value=ye})}if(l)for(const $ in l)Hu(l[$],s,n,$);if(o){const $=re(o)?o.call(n):o;Reflect.ownKeys($).forEach(Y=>{wt(Y,$[Y])})}p&&zl(p,e,"c");function K($,Y){ie(Y)?Y.forEach(pe=>$(pe.bind(n))):Y&&$(Y.bind(n))}if(K(Dg,d),K(Ie,f),K(Lg,h),K(zu,m),K(Bg,_),K(Og,b),K(Ng,Q),K(Rg,M),K(Fg,R),K(Xi,E),K(Js,w),K(Pg,V),ie(O))if(O.length){const $=e.exposed||(e.exposed={});O.forEach(Y=>{Object.defineProperty($,Y,{get:()=>n[Y],set:pe=>n[Y]=pe})})}else e.exposed||(e.exposed={});P&&e.render===Pt&&(e.render=P),W!=null&&(e.inheritAttrs=W),L&&(e.components=L),J&&(e.directives=J),V&&Na(e)}function Ug(e,t,n=Pt){ie(e)&&(e=qr(e));for(const s in e){const i=e[s];let r;Oe(i)?"default"in i?r=xe(i.from||s,i.default,!0):r=xe(i.from||s):r=xe(i),Pe(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[s]=r}}function zl(e,t,n){St(ie(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Hu(e,t,n,s){let i=s.includes(".")?np(n,s):()=>n[s];if(Be(e)){const r=t[e];re(r)&&de(i,r)}else if(re(e))de(i,e.bind(n));else if(Oe(e))if(ie(e))e.forEach(r=>Hu(r,t,n,s));else{const r=re(e.handler)?e.handler.bind(n):t[e.handler];re(r)&&de(i,r,e)}}function Ma(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(t);let o;return l?o=l:!i.length&&!n&&!s?o=t:(o={},i.length&&i.forEach(u=>Fi(o,u,a,!0)),Fi(o,t,a)),Oe(t)&&r.set(t,o),o}function Fi(e,t,n,s=!1){const{mixins:i,extends:r}=t;r&&Fi(e,r,n,!0),i&&i.forEach(a=>Fi(e,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const l=jg[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const jg={data:Hl,props:Ul,emits:Ul,methods:Es,computed:Es,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:Es,directives:Es,watch:qg,provide:Hl,inject:Gg};function Hl(e,t){return t?e?function(){return Fe(re(e)?e.call(this,this):e,re(t)?t.call(this,this):t)}:t:e}function Gg(e,t){return Es(qr(e),qr(t))}function qr(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function We(e,t){return e?[...new Set([].concat(e,t))]:t}function Es(e,t){return e?Fe(Object.create(null),e,t):t}function Ul(e,t){return e?ie(e)&&ie(t)?[...new Set([...e,...t])]:Fe(Object.create(null),$l(e),$l(t??{})):t}function qg(e,t){if(!e)return t;if(!t)return e;const n=Fe(Object.create(null),e);for(const s in t)n[s]=We(e[s],t[s]);return n}function Uu(){return{app:null,config:{isNativeTag:rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kg=0;function Wg(e,t){return function(s,i=null){re(s)||(s=Fe({},s)),i!=null&&!Oe(i)&&(i=null);const r=Uu(),a=new WeakSet,l=[];let o=!1;const u=r.app={_uid:Kg++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Ql,get config(){return r.config},set config(p){},use(p,...d){return a.has(p)||(p&&re(p.install)?(a.add(p),p.install(u,...d)):re(p)&&(a.add(p),p(u,...d))),u},mixin(p){return r.mixins.includes(p)||r.mixins.push(p),u},component(p,d){return d?(r.components[p]=d,u):r.components[p]},directive(p,d){return d?(r.directives[p]=d,u):r.directives[p]},mount(p,d,f){if(!o){const h=u._ceVNode||Me(s,i);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),d&&t?t(h,p):e(h,p,f),o=!0,u._container=p,p.__vue_app__=u,u._instance=h.component,pg(u,Ql),Ua(h.component)}},onUnmount(p){l.push(p)},unmount(){o&&(St(l,u._instance,16),e(null,u._container),u._instance=null,dg(u),delete u._container.__vue_app__)},provide(p,d){return r.provides[p]=d,u},runWithContext(p){const d=Kn;Kn=u;try{return p()}finally{Kn=d}}};return u}}let Kn=null;function wt(e,t){if($e){let n=$e.provides;const s=$e.parent&&$e.parent.provides;s===n&&(n=$e.provides=Object.create(s)),n[e]=t}}function xe(e,t,n=!1){const s=$e||kt;if(s||Kn){const i=Kn?Kn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&re(t)?t.call(s&&s.proxy):t}}const ju={},Gu=()=>Object.create(ju),qu=e=>Object.getPrototypeOf(e)===ju;function Yg(e,t,n,s=!1){const i={},r=Gu();e.propsDefaults=Object.create(null),Ku(e,t,i,r);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=s?i:yu(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function Xg(e,t,n,s){const{props:i,attrs:r,vnode:{patchFlag:a}}=e,l=oe(i),[o]=e.propsOptions;let u=!1;if((s||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let d=0;d<p.length;d++){let f=p[d];if(Qi(e.emitsOptions,f))continue;const h=t[f];if(o)if(ve(r,f))h!==r[f]&&(r[f]=h,u=!0);else{const m=Ke(f);i[m]=Kr(o,l,m,h,e,!1)}else h!==r[f]&&(r[f]=h,u=!0)}}}else{Ku(e,t,i,r)&&(u=!0);let p;for(const d in l)(!t||!ve(t,d)&&((p=vn(d))===d||!ve(t,p)))&&(o?n&&(n[d]!==void 0||n[p]!==void 0)&&(i[d]=Kr(o,l,d,void 0,e,!0)):delete i[d]);if(r!==l)for(const d in r)(!t||!ve(t,d))&&(delete r[d],u=!0)}u&&Gt(e.attrs,"set","")}function Ku(e,t,n,s){const[i,r]=e.propsOptions;let a=!1,l;if(t)for(let o in t){if(jn(o))continue;const u=t[o];let p;i&&ve(i,p=Ke(o))?!r||!r.includes(p)?n[p]=u:(l||(l={}))[p]=u:Qi(e.emitsOptions,o)||(!(o in s)||u!==s[o])&&(s[o]=u,a=!0)}if(r){const o=oe(n),u=l||Ee;for(let p=0;p<r.length;p++){const d=r[p];n[d]=Kr(i,o,d,u[d],e,!ve(u,d))}}return a}function Kr(e,t,n,s,i,r){const a=e[n];if(a!=null){const l=ve(a,"default");if(l&&s===void 0){const o=a.default;if(a.type!==Function&&!a.skipFactory&&re(o)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const p=Zs(i);s=u[n]=o.call(null,t),p()}}else s=o;i.ce&&i.ce._setProp(n,s)}a[0]&&(r&&!l?s=!1:a[1]&&(s===""||s===vn(n))&&(s=!0))}return s}const Qg=new WeakMap;function Wu(e,t,n=!1){const s=n?Qg:t.propsCache,i=s.get(e);if(i)return i;const r=e.props,a={},l=[];let o=!1;if(!re(e)){const p=d=>{o=!0;const[f,h]=Wu(d,t,!0);Fe(a,f),h&&l.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!r&&!o)return Oe(e)&&s.set(e,Un),Un;if(ie(r))for(let p=0;p<r.length;p++){const d=Ke(r[p]);jl(d)&&(a[d]=Ee)}else if(r)for(const p in r){const d=Ke(p);if(jl(d)){const f=r[p],h=a[d]=ie(f)||re(f)?{type:f}:Fe({},f),m=h.type;let _=!1,b=!0;if(ie(m))for(let y=0;y<m.length;++y){const E=m[y],g=re(E)&&E.name;if(g==="Boolean"){_=!0;break}else g==="String"&&(b=!1)}else _=re(m)&&m.name==="Boolean";h[0]=_,h[1]=b,(_||ve(h,"default"))&&l.push(d)}}const u=[a,l];return Oe(e)&&s.set(e,u),u}function jl(e){return e[0]!=="$"&&!jn(e)}const Yu=e=>e[0]==="_"||e==="$stable",Va=e=>ie(e)?e.map(_t):[_t(e)],Jg=(e,t,n)=>{if(t._n)return t;const s=mg((...i)=>Va(t(...i)),n);return s._c=!1,s},Xu=(e,t,n)=>{const s=e._ctx;for(const i in e){if(Yu(i))continue;const r=e[i];if(re(r))t[i]=Jg(i,r,s);else if(r!=null){const a=Va(r);t[i]=()=>a}}},Qu=(e,t)=>{const n=Va(t);e.slots.default=()=>n},Ju=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Zg=(e,t,n)=>{const s=e.slots=Gu();if(e.vnode.shapeFlag&32){const i=t._;i?(Ju(s,t,n),n&&Qn(s,"_",i,!0)):Xu(t,s)}else t&&Qu(e,t)},ev=(e,t,n)=>{const{vnode:s,slots:i}=e;let r=!0,a=Ee;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:Ju(i,t,n):(r=!t.$stable,Xu(t,i)),a=t}else t&&(Qu(e,t),a={default:1});if(r)for(const l in i)!Yu(l)&&a[l]==null&&delete i[l]},ct=rp;function tv(e){return nv(e,Eg)}function nv(e,t){const n=ji();n.__VUE__=!0,Bu(n.__VUE_DEVTOOLS_GLOBAL_HOOK__,n);const{insert:s,remove:i,patchProp:r,createElement:a,createText:l,createComment:o,setText:u,setElementText:p,parentNode:d,nextSibling:f,setScopeId:h=Pt,insertStaticContent:m}=e,_=(v,k,S,B=null,C=null,I=null,H=void 0,N=null,F=!!k.dynamicChildren)=>{if(v===k)return;v&&!Cn(v,k)&&(B=x(v),ye(v,C,I,!0),v=null),k.patchFlag===-2&&(F=!1,k.dynamicChildren=null);const{type:D,ref:te,shapeFlag:j}=k;switch(D){case dn:b(v,k,S,B);break;case st:y(v,k,S,B);break;case Wn:v==null&&E(k,S,B,H);break;case Je:L(v,k,S,B,C,I,H,N,F);break;default:j&1?P(v,k,S,B,C,I,H,N,F):j&6?J(v,k,S,B,C,I,H,N,F):(j&64||j&128)&&D.process(v,k,S,B,C,I,H,N,F,X)}te!=null&&C&&Pi(te,v&&v.ref,I,k||v,!k)},b=(v,k,S,B)=>{if(v==null)s(k.el=l(k.children),S,B);else{const C=k.el=v.el;k.children!==v.children&&u(C,k.children)}},y=(v,k,S,B)=>{v==null?s(k.el=o(k.children||""),S,B):k.el=v.el},E=(v,k,S,B)=>{[v.el,v.anchor]=m(v.children,k,S,B,v.el,v.anchor)},g=({el:v,anchor:k},S,B)=>{let C;for(;v&&v!==k;)C=f(v),s(v,S,B),v=C;s(k,S,B)},w=({el:v,anchor:k})=>{let S;for(;v&&v!==k;)S=f(v),i(v),v=S;i(k)},P=(v,k,S,B,C,I,H,N,F)=>{k.type==="svg"?H="svg":k.type==="math"&&(H="mathml"),v==null?M(k,S,B,C,I,H,N,F):V(v,k,C,I,H,N,F)},M=(v,k,S,B,C,I,H,N)=>{let F,D;const{props:te,shapeFlag:j,transition:Z,dirs:se}=v;if(F=v.el=a(v.type,I,te&&te.is,te),j&8?p(F,v.children):j&16&&Q(v.children,F,null,B,C,br(v,I),H,N),se&&Dt(v,null,B,"created"),R(F,v,v.scopeId,H,B),te){for(const be in te)be!=="value"&&!jn(be)&&r(F,be,null,te[be],I,B);"value"in te&&r(F,"value",null,te.value,I),(D=te.onVnodeBeforeMount)&&mt(D,B,v)}Qn(F,"__vnode",v,!0),Qn(F,"__vueParentComponent",B,!0),se&&Dt(v,null,B,"beforeMount");const ue=Zu(C,Z);ue&&Z.beforeEnter(F),s(F,k,S),((D=te&&te.onVnodeMounted)||ue||se)&&ct(()=>{D&&mt(D,B,v),ue&&Z.enter(F),se&&Dt(v,null,B,"mounted")},C)},R=(v,k,S,B,C)=>{if(S&&h(v,S),B)for(let I=0;I<B.length;I++)h(v,B[I]);if(C){let I=C.subTree;if(k===I||ip(I.type)&&(I.ssContent===k||I.ssFallback===k)){const H=C.vnode;R(v,H,H.scopeId,H.slotScopeIds,C.parent)}}},Q=(v,k,S,B,C,I,H,N,F=0)=>{for(let D=F;D<v.length;D++){const te=v[D]=N?ln(v[D]):_t(v[D]);_(null,te,k,S,B,C,I,H,N)}},V=(v,k,S,B,C,I,H)=>{const N=k.el=v.el;N.__vnode=k;let{patchFlag:F,dynamicChildren:D,dirs:te}=k;F|=v.patchFlag&16;const j=v.props||Ee,Z=k.props||Ee;let se;if(S&&bn(S,!1),(se=Z.onVnodeBeforeUpdate)&&mt(se,S,k,v),te&&Dt(k,v,S,"beforeUpdate"),S&&bn(S,!0),(j.innerHTML&&Z.innerHTML==null||j.textContent&&Z.textContent==null)&&p(N,""),D?O(v.dynamicChildren,D,N,S,B,br(k,C),I):H||Y(v,k,N,null,S,B,br(k,C),I,!1),F>0){if(F&16)W(N,j,Z,S,C);else if(F&2&&j.class!==Z.class&&r(N,"class",null,Z.class,C),F&4&&r(N,"style",j.style,Z.style,C),F&8){const ue=k.dynamicProps;for(let be=0;be<ue.length;be++){const me=ue[be],at=j[me],je=Z[me];(je!==at||me==="value")&&r(N,me,at,je,C,S)}}F&1&&v.children!==k.children&&p(N,k.children)}else!H&&D==null&&W(N,j,Z,S,C);((se=Z.onVnodeUpdated)||te)&&ct(()=>{se&&mt(se,S,k,v),te&&Dt(k,v,S,"updated")},B)},O=(v,k,S,B,C,I,H)=>{for(let N=0;N<k.length;N++){const F=v[N],D=k[N],te=F.el&&(F.type===Je||!Cn(F,D)||F.shapeFlag&70)?d(F.el):S;_(F,D,te,null,B,C,I,H,!0)}},W=(v,k,S,B,C)=>{if(k!==S){if(k!==Ee)for(const I in k)!jn(I)&&!(I in S)&&r(v,I,k[I],null,C,B);for(const I in S){if(jn(I))continue;const H=S[I],N=k[I];H!==N&&I!=="value"&&r(v,I,N,H,C,B)}"value"in S&&r(v,"value",k.value,S.value,C)}},L=(v,k,S,B,C,I,H,N,F)=>{const D=k.el=v?v.el:l(""),te=k.anchor=v?v.anchor:l("");let{patchFlag:j,dynamicChildren:Z,slotScopeIds:se}=k;se&&(N=N?N.concat(se):se),v==null?(s(D,S,B),s(te,S,B),Q(k.children||[],S,te,C,I,H,N,F)):j>0&&j&64&&Z&&v.dynamicChildren?(O(v.dynamicChildren,Z,S,C,I,H,N),(k.key!=null||C&&k===C.subTree)&&ep(v,k,!0)):Y(v,k,S,te,C,I,H,N,F)},J=(v,k,S,B,C,I,H,N,F)=>{k.slotScopeIds=N,v==null?k.shapeFlag&512?C.ctx.activate(k,S,B,H,F):ae(k,S,B,C,I,H,F):ke(v,k,F)},ae=(v,k,S,B,C,I,H)=>{const N=v.component=yv(v,B,C);if(Qs(v)&&(N.ctx.renderer=X),bv(N,!1,H),N.asyncDep){if(C&&C.registerDep(N,K,H),!v.el){const F=N.subTree=Me(st);y(null,F,k,S)}}else K(N,v,k,S,C,I,H)},ke=(v,k,S)=>{const B=k.component=v.component;if(pv(v,k,S))if(B.asyncDep&&!B.asyncResolved){$(B,k,S);return}else B.next=k,B.update();else k.el=v.el,B.vnode=k},K=(v,k,S,B,C,I,H)=>{const N=()=>{if(v.isMounted){let{next:j,bu:Z,u:se,parent:ue,vnode:be}=v;{const lt=tp(v);if(lt){j&&(j.el=be.el,$(v,j,H)),lt.asyncDep.then(()=>{v.isUnmounted||N()});return}}let me=j,at;bn(v,!1),j?(j.el=be.el,$(v,j,H)):j=be,Z&&fr(Z),(at=j.props&&j.props.onVnodeBeforeUpdate)&&mt(at,ue,j,be),bn(v,!0);const je=Ar(v),bt=v.subTree;v.subTree=je,_(bt,je,d(bt.el),x(bt),v,C,I),j.el=je.el,me===null&&dv(v,je.el),se&&ct(se,C),(at=j.props&&j.props.onVnodeUpdated)&&ct(()=>mt(at,ue,j,be),C),Ou(v)}else{let j;const{el:Z,props:se}=k,{bm:ue,m:be,parent:me,root:at,type:je}=v,bt=qn(k);if(bn(v,!1),ue&&fr(ue),!bt&&(j=se&&se.onVnodeBeforeMount)&&mt(j,me,k),bn(v,!0),Z&&Ce){const lt=()=>{v.subTree=Ar(v),Ce(Z,v.subTree,v,C,null)};bt&&je.__asyncHydrate?je.__asyncHydrate(Z,v,lt):lt()}else{at.ce&&at.ce._injectChildStyle(je);const lt=v.subTree=Ar(v);_(null,lt,S,B,v,C,I),k.el=lt.el}if(be&&ct(be,C),!bt&&(j=se&&se.onVnodeMounted)){const lt=k;ct(()=>mt(j,me,lt),C)}(k.shapeFlag&256||me&&qn(me.vnode)&&me.vnode.shapeFlag&256)&&v.a&&ct(v.a,C),v.isMounted=!0,fg(v),k=S=B=null}};v.scope.on();const F=v.effect=new au(N);v.scope.off();const D=v.update=F.run.bind(F),te=v.job=F.runIfDirty.bind(F);te.i=v,te.id=v.uid,F.scheduler=()=>Pa(te),bn(v,!0),D()},$=(v,k,S)=>{k.component=v;const B=v.vnode.props;v.vnode=k,v.next=null,Xg(v,k.props,B,S),ev(v,k.children,S),Wt(),Ll(v),Yt()},Y=(v,k,S,B,C,I,H,N,F=!1)=>{const D=v&&v.children,te=v?v.shapeFlag:0,j=k.children,{patchFlag:Z,shapeFlag:se}=k;if(Z>0){if(Z&128){Re(D,j,S,B,C,I,H,N,F);return}else if(Z&256){pe(D,j,S,B,C,I,H,N,F);return}}se&8?(te&16&&gt(D,C,I),j!==D&&p(S,j)):te&16?se&16?Re(D,j,S,B,C,I,H,N,F):gt(D,C,I,!0):(te&8&&p(S,""),se&16&&Q(j,S,B,C,I,H,N,F))},pe=(v,k,S,B,C,I,H,N,F)=>{v=v||Un,k=k||Un;const D=v.length,te=k.length,j=Math.min(D,te);let Z;for(Z=0;Z<j;Z++){const se=k[Z]=F?ln(k[Z]):_t(k[Z]);_(v[Z],se,S,null,C,I,H,N,F)}D>te?gt(v,C,I,!0,!1,j):Q(k,S,B,C,I,H,N,F,j)},Re=(v,k,S,B,C,I,H,N,F)=>{let D=0;const te=k.length;let j=v.length-1,Z=te-1;for(;D<=j&&D<=Z;){const se=v[D],ue=k[D]=F?ln(k[D]):_t(k[D]);if(Cn(se,ue))_(se,ue,S,null,C,I,H,N,F);else break;D++}for(;D<=j&&D<=Z;){const se=v[j],ue=k[Z]=F?ln(k[Z]):_t(k[Z]);if(Cn(se,ue))_(se,ue,S,null,C,I,H,N,F);else break;j--,Z--}if(D>j){if(D<=Z){const se=Z+1,ue=se<te?k[se].el:B;for(;D<=Z;)_(null,k[D]=F?ln(k[D]):_t(k[D]),S,ue,C,I,H,N,F),D++}}else if(D>Z)for(;D<=j;)ye(v[D],C,I,!0),D++;else{const se=D,ue=D,be=new Map;for(D=ue;D<=Z;D++){const ot=k[D]=F?ln(k[D]):_t(k[D]);ot.key!=null&&be.set(ot.key,D)}let me,at=0;const je=Z-ue+1;let bt=!1,lt=0;const gs=new Array(je);for(D=0;D<je;D++)gs[D]=0;for(D=se;D<=j;D++){const ot=v[D];if(at>=je){ye(ot,C,I,!0);continue}let Bt;if(ot.key!=null)Bt=be.get(ot.key);else for(me=ue;me<=Z;me++)if(gs[me-ue]===0&&Cn(ot,k[me])){Bt=me;break}Bt===void 0?ye(ot,C,I,!0):(gs[Bt-ue]=D+1,Bt>=lt?lt=Bt:bt=!0,_(ot,k[Bt],S,null,C,I,H,N,F),at++)}const Cl=bt?sv(gs):Un;for(me=Cl.length-1,D=je-1;D>=0;D--){const ot=ue+D,Bt=k[ot],xl=ot+1<te?k[ot+1].el:B;gs[D]===0?_(null,Bt,S,xl,C,I,H,N,F):bt&&(me<0||D!==Cl[me]?Ne(Bt,S,xl,2):me--)}}},Ne=(v,k,S,B,C=null)=>{const{el:I,type:H,transition:N,children:F,shapeFlag:D}=v;if(D&6){Ne(v.component.subTree,k,S,B);return}if(D&128){v.suspense.move(k,S,B);return}if(D&64){H.move(v,k,S,X);return}if(H===Je){s(I,k,S);for(let j=0;j<F.length;j++)Ne(F[j],k,S,B);s(v.anchor,k,S);return}if(H===Wn){g(v,k,S);return}if(B!==2&&D&1&&N)if(B===0)N.beforeEnter(I),s(I,k,S),ct(()=>N.enter(I),C);else{const{leave:j,delayLeave:Z,afterLeave:se}=N,ue=()=>s(I,k,S),be=()=>{j(I,()=>{ue(),se&&se()})};Z?Z(I,ue,be):be()}else s(I,k,S)},ye=(v,k,S,B=!1,C=!1)=>{const{type:I,props:H,ref:N,children:F,dynamicChildren:D,shapeFlag:te,patchFlag:j,dirs:Z,cacheIndex:se}=v;if(j===-2&&(C=!1),N!=null&&Pi(N,null,S,v,!0),se!=null&&(k.renderCache[se]=void 0),te&256){k.ctx.deactivate(v);return}const ue=te&1&&Z,be=!qn(v);let me;if(be&&(me=H&&H.onVnodeBeforeUnmount)&&mt(me,k,v),te&6)en(v.component,S,B);else{if(te&128){v.suspense.unmount(S,B);return}ue&&Dt(v,null,k,"beforeUnmount"),te&64?v.type.remove(v,k,S,X,B):D&&!D.hasOnce&&(I!==Je||j>0&&j&64)?gt(D,k,S,!1,!0):(I===Je&&j&384||!C&&te&16)&&gt(F,k,S),B&&ht(v)}(be&&(me=H&&H.onVnodeUnmounted)||ue)&&ct(()=>{me&&mt(me,k,v),ue&&Dt(v,null,k,"unmounted")},S)},ht=v=>{const{type:k,el:S,anchor:B,transition:C}=v;if(k===Je){Nt(S,B);return}if(k===Wn){w(v);return}const I=()=>{i(S),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(v.shapeFlag&1&&C&&!C.persisted){const{leave:H,delayLeave:N}=C,F=()=>H(S,I);N?N(v.el,I,F):F()}else I()},Nt=(v,k)=>{let S;for(;v!==k;)S=f(v),i(v),v=S;i(k)},en=(v,k,S)=>{const{bum:B,scope:C,job:I,subTree:H,um:N,m:F,a:D}=v;Gl(F),Gl(D),B&&fr(B),C.stop(),I&&(I.flags|=8,ye(H,v,k,S)),N&&ct(N,k),ct(()=>{v.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve()),gg(v)},gt=(v,k,S,B=!1,C=!1,I=0)=>{for(let H=I;H<v.length;H++)ye(v[H],k,S,B,C)},x=v=>{if(v.shapeFlag&6)return x(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const k=f(v.anchor||v.el),S=k&&k[_g];return S?f(S):k};let G=!1;const U=(v,k,S)=>{v==null?k._vnode&&ye(k._vnode,null,null,!0):_(k._vnode||null,v,k,null,null,null,S),k._vnode=v,G||(G=!0,Ll(),Di(),G=!1)},X={p:_,um:ye,m:Ne,r:ht,mt:ae,mc:Q,pc:Y,pbc:O,n:x,o:e};let he,Ce;return t&&([he,Ce]=t(X)),{render:U,hydrate:he,createApp:Wg(U,he)}}function br({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function bn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Zu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ep(e,t,n=!1){const s=e.children,i=t.children;if(ie(s)&&ie(i))for(let r=0;r<s.length;r++){const a=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=ln(i[r]),l.el=a.el),!n&&l.patchFlag!==-2&&ep(a,l)),l.type===dn&&(l.el=a.el)}}function sv(e){const t=e.slice(),n=[0];let s,i,r,a,l;const o=e.length;for(s=0;s<o;s++){const u=e[s];if(u!==0){if(i=n[n.length-1],e[i]<u){t[s]=i,n.push(s);continue}for(r=0,a=n.length-1;r<a;)l=r+a>>1,e[n[l]]<u?r=l+1:a=l;u<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=t[a];return n}function tp(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:tp(t)}function Gl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const iv=Symbol.for("v-scx"),rv=()=>xe(iv);function $a(e,t){return za(e,null,t)}function de(e,t,n){return za(e,t,n)}function za(e,t,n=Ee){const{immediate:s,deep:i,flush:r,once:a}=n,l=Fe({},n),o=t&&s||!t&&r!=="post";let u;if(Jn){if(r==="sync"){const h=rv();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!o){const h=()=>{};return h.stop=Pt,h.resume=Pt,h.pause=Pt,h}}const p=$e;l.call=(h,m,_)=>St(h,p,m,_);let d=!1;r==="post"?l.scheduler=h=>{ct(h,p&&p.suspense)}:r!=="sync"&&(d=!0,l.scheduler=(h,m)=>{m?h():Pa(h)}),l.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,p&&(h.id=p.uid,h.i=p))};const f=sg(e,t,l);return Jn&&(u?u.push(f):o&&f()),f}function av(e,t,n){const s=this.proxy,i=Be(e)?e.includes(".")?np(s,e):()=>s[e]:e.bind(s,s);let r;re(t)?r=t:(r=t.handler,n=t);const a=Zs(this),l=za(i,r.bind(s),n);return a(),l}function np(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const lv=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${vn(t)}Modifiers`];function ov(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Ee;let i=n;const r=t.startsWith("update:"),a=r&&lv(s,t.slice(7));a&&(a.trim&&(i=n.map(p=>Be(p)?p.trim():p)),a.number&&(i=n.map(fh))),vg(e,t,i);let l,o=s[l=dr(t)]||s[l=dr(Ke(t))];!o&&r&&(o=s[l=dr(vn(t))]),o&&St(o,e,6,i);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,St(u,e,6,i)}}function sp(e,t,n=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let a={},l=!1;if(!re(e)){const o=u=>{const p=sp(u,t,!0);p&&(l=!0,Fe(a,p))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!r&&!l?(Oe(e)&&s.set(e,null),null):(ie(r)?r.forEach(o=>a[o]=null):Fe(a,r),Oe(e)&&s.set(e,a),a)}function Qi(e,t){return!e||!Ws(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(e,t[0].toLowerCase()+t.slice(1))||ve(e,vn(t))||ve(e,t))}function Ar(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:a,attrs:l,emit:o,render:u,renderCache:p,props:d,data:f,setupState:h,ctx:m,inheritAttrs:_}=e,b=Li(e);let y,E;try{if(n.shapeFlag&4){const w=i||s,P=w;y=_t(u.call(P,w,p,d,h,f,m)),E=l}else{const w=t;y=_t(w.length>1?w(d,{attrs:l,slots:a,emit:o}):w(d,null)),E=t.props?l:cv(l)}}catch(w){Ds.length=0,Xs(w,e,1),y=Me(st)}let g=y;if(E&&_!==!1){const w=Object.keys(E),{shapeFlag:P}=g;w.length&&P&7&&(r&&w.some(Ea)&&(E=uv(E,r)),g=fn(g,E,!1,!0))}return n.dirs&&(g=fn(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&In(g,n.transition),y=g,Li(b),y}const cv=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ws(n))&&((t||(t={}))[n]=e[n]);return t},uv=(e,t)=>{const n={};for(const s in e)(!Ea(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function pv(e,t,n){const{props:s,children:i,component:r}=e,{props:a,children:l,patchFlag:o}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return s?ql(s,a,u):!!a;if(o&8){const p=t.dynamicProps;for(let d=0;d<p.length;d++){const f=p[d];if(a[f]!==s[f]&&!Qi(u,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===a?!1:s?a?ql(s,a,u):!0:!!a;return!1}function ql(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(t[r]!==e[r]&&!Qi(n,r))return!0}return!1}function dv({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const ip=e=>e.__isSuspense;function rp(e,t){t&&t.pendingBranch?ie(e)?t.effects.push(...e):t.effects.push(e):ug(e)}const Je=Symbol.for("v-fgt"),dn=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),Wn=Symbol.for("v-stc"),Ds=[];let pt=null;function By(e=!1){Ds.push(pt=e?null:[])}function fv(){Ds.pop(),pt=Ds[Ds.length-1]||null}let $s=1;function Kl(e){$s+=e,e<0&&pt&&(pt.hasOnce=!0)}function hv(e){return e.dynamicChildren=$s>0?pt||Un:null,fv(),$s>0&&pt&&pt.push(e),e}function Oy(e,t,n,s,i,r){return hv(lp(e,t,n,s,i,r,!0))}function Ri(e){return e?e.__v_isVNode===!0:!1}function Cn(e,t){return e.type===t.type&&e.key===t.key}const ap=({key:e})=>e??null,wi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Be(e)||Pe(e)||re(e)?{i:kt,r:e,k:t,f:!!n}:e:null);function lp(e,t=null,n=null,s=0,i=null,r=e===Je?0:1,a=!1,l=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ap(t),ref:t&&wi(t),scopeId:Iu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kt};return l?(Ha(o,n),r&128&&e.normalize(o)):n&&(o.shapeFlag|=Be(n)?8:16),$s>0&&!a&&pt&&(o.patchFlag>0||r&6)&&o.patchFlag!==32&&pt.push(o),o}const Me=gv;function gv(e,t=null,n=null,s=0,i=null,r=!1){if((!e||e===Vg)&&(e=st),Ri(e)){const l=fn(e,t,!0);return n&&Ha(l,n),$s>0&&!r&&pt&&(l.shapeFlag&6?pt[pt.indexOf(e)]=l:pt.push(l)),l.patchFlag=-2,l}if(xv(e)&&(e=e.__vccOpts),t){t=vv(t);let{class:l,style:o}=t;l&&!Be(l)&&(t.class=qi(l)),Oe(o)&&(La(o)&&!ie(o)&&(o=Fe({},o)),t.style=Gi(o))}const a=Be(e)?1:ip(e)?128:Du(e)?64:Oe(e)?4:re(e)?2:0;return lp(e,t,n,s,i,a,r,!0)}function vv(e){return e?La(e)||qu(e)?Fe({},e):e:null}function fn(e,t,n=!1,s=!1){const{props:i,ref:r,patchFlag:a,children:l,transition:o}=e,u=t?mv(i||{},t):i,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&ap(u),ref:t&&t.ref?n&&r?ie(r)?r.concat(wi(t)):[r,wi(t)]:wi(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Je?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:o,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fn(e.ssContent),ssFallback:e.ssFallback&&fn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return o&&s&&In(p,o.clone(p)),p}function op(e=" ",t=0){return Me(dn,null,e,t)}function Iy(e,t){const n=Me(Wn,null,e);return n.staticCount=t,n}function _t(e){return e==null||typeof e=="boolean"?Me(st):ie(e)?Me(Je,null,e.slice()):Ri(e)?ln(e):Me(dn,null,String(e))}function ln(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:fn(e)}function Ha(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ie(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Ha(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!qu(t)?t._ctx=kt:i===3&&kt&&(kt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else re(t)?(t={default:t,_ctx:kt},n=32):(t=String(t),s&64?(n=16,t=[op(t)]):n=8);e.children=t,e.shapeFlag|=n}function mv(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=qi([t.class,s.class]));else if(i==="style")t.style=Gi([t.style,s.style]);else if(Ws(i)){const r=t[i],a=s[i];a&&r!==a&&!(ie(r)&&r.includes(a))&&(t[i]=r?[].concat(r,a):a)}else i!==""&&(t[i]=s[i])}return t}function mt(e,t,n,s=null){St(e,t,7,[n,s])}const _v=Uu();let kv=0;function yv(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||_v,r={uid:kv++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ch(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wu(s,i),emitsOptions:sp(s,i),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ov.bind(null,r),e.ce&&e.ce(r),r}let $e=null;const Pn=()=>$e||kt;let Ni,Wr;{const e=ji(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),r=>{i.length>1?i.forEach(a=>a(r)):i[0](r)}};Ni=t("__VUE_INSTANCE_SETTERS__",n=>$e=n),Wr=t("__VUE_SSR_SETTERS__",n=>Jn=n)}const Zs=e=>{const t=$e;return Ni(e),e.scope.on(),()=>{e.scope.off(),Ni(t)}},Wl=()=>{$e&&$e.scope.off(),Ni(null)};function cp(e){return e.vnode.shapeFlag&4}let Jn=!1;function bv(e,t=!1,n=!1){t&&Wr(t);const{props:s,children:i}=e.vnode,r=cp(e);Yg(e,s,r,t),Zg(e,i,n);const a=r?Av(e,t):void 0;return t&&Wr(!1),a}function Av(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,zg);const{setup:s}=n;if(s){Wt();const i=e.setupContext=s.length>1?wv(e):null,r=Zs(e),a=ds(s,e,0,[e.props,i]),l=su(a);if(Yt(),r(),(l||e.sp)&&!qn(e)&&Na(e),l){if(a.then(Wl,Wl),t)return a.then(o=>{Yl(e,o,t)}).catch(o=>{Xs(o,e,0)});e.asyncDep=a}else Yl(e,a,t)}else up(e,t)}function Yl(e,t,n){re(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Oe(t)&&(e.devtoolsRawSetupState=t,e.setupState=Au(t)),up(e,n)}let Xl;function up(e,t,n){const s=e.type;if(!e.render){if(!t&&Xl&&!s.render){const i=s.template||Ma(e).template;if(i){const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:o}=s,u=Fe(Fe({isCustomElement:r,delimiters:l},a),o);s.render=Xl(i,u)}}e.render=s.render||Pt}{const i=Zs(e);Wt();try{Hg(e)}finally{Yt(),i()}}}const Ev={get(e,t){return Ge(e,"get",""),e[t]}};function wv(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ev),slots:e.slots,emit:e.emit,expose:t}}function Ua(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Au(Kh(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Is)return Is[n](e)},has(t,n){return n in t||n in Is}})):e.proxy}const Sv=/(?:^|[-_])(\w)/g,Cv=e=>e.replace(Sv,t=>t.toUpperCase()).replace(/[-_]/g,"");function pp(e,t=!0){return re(e)?e.displayName||e.name:e.name||t&&e.__name}function dp(e,t,n=!1){let s=pp(t);if(!s&&t.__file){const i=t.__file.match(/([^/\\]+)\.\w+$/);i&&(s=i[1])}if(!s&&e&&e.parent){const i=r=>{for(const a in r)if(r[a]===t)return a};s=i(e.components||e.parent.type.components)||i(e.appContext.components)}return s?Cv(s):n?"App":"Anonymous"}function xv(e){return re(e)&&"__vccOpts"in e}const A=(e,t)=>tg(e,t,Jn);function c(e,t,n){const s=arguments.length;return s===2?Oe(t)&&!ie(t)?Ri(t)?Me(e,null,[t]):Me(e,t):Me(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ri(n)&&(n=[n]),Me(e,t,n))}const Ql="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yr;const Jl=typeof window<"u"&&window.trustedTypes;if(Jl)try{Yr=Jl.createPolicy("vue",{createHTML:e=>e})}catch{}const fp=Yr?e=>Yr.createHTML(e):e=>e,Tv="http://www.w3.org/2000/svg",Bv="http://www.w3.org/1998/Math/MathML",Ut=typeof document<"u"?document:null,Zl=Ut&&Ut.createElement("template"),Ov={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?Ut.createElementNS(Tv,e):t==="mathml"?Ut.createElementNS(Bv,e):n?Ut.createElement(e,{is:n}):Ut.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Ut.createTextNode(e),createComment:e=>Ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,r){const a=n?n.previousSibling:t.lastChild;if(i&&(i===r||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Zl.innerHTML=fp(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Zl.content;if(s==="svg"||s==="mathml"){const o=l.firstChild;for(;o.firstChild;)l.appendChild(o.firstChild);l.removeChild(o)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},tn="transition",ms="animation",Zn=Symbol("_vtc"),hp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gp=Fe({},Pu,hp),Iv=e=>(e.displayName="Transition",e.props=gp,e),es=Iv((e,{slots:t})=>c(yg,vp(e),t)),An=(e,t=[])=>{ie(e)?e.forEach(n=>n(...t)):e&&e(...t)},eo=e=>e?ie(e)?e.some(t=>t.length>1):e.length>1:!1;function vp(e){const t={};for(const L in e)L in hp||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:o=r,appearActiveClass:u=a,appearToClass:p=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,m=Dv(i),_=m&&m[0],b=m&&m[1],{onBeforeEnter:y,onEnter:E,onEnterCancelled:g,onLeave:w,onLeaveCancelled:P,onBeforeAppear:M=y,onAppear:R=E,onAppearCancelled:Q=g}=t,V=(L,J,ae)=>{sn(L,J?p:l),sn(L,J?u:a),ae&&ae()},O=(L,J)=>{L._isLeaving=!1,sn(L,d),sn(L,h),sn(L,f),J&&J()},W=L=>(J,ae)=>{const ke=L?R:E,K=()=>V(J,L,ae);An(ke,[J,K]),to(()=>{sn(J,L?o:r),zt(J,L?p:l),eo(ke)||no(J,s,_,K)})};return Fe(t,{onBeforeEnter(L){An(y,[L]),zt(L,r),zt(L,a)},onBeforeAppear(L){An(M,[L]),zt(L,o),zt(L,u)},onEnter:W(!1),onAppear:W(!0),onLeave(L,J){L._isLeaving=!0;const ae=()=>O(L,J);zt(L,d),zt(L,f),_p(),to(()=>{L._isLeaving&&(sn(L,d),zt(L,h),eo(w)||no(L,s,b,ae))}),An(w,[L,ae])},onEnterCancelled(L){V(L,!1),An(g,[L])},onAppearCancelled(L){V(L,!0),An(Q,[L])},onLeaveCancelled(L){O(L),An(P,[L])}})}function Dv(e){if(e==null)return null;if(Oe(e))return[Er(e.enter),Er(e.leave)];{const t=Er(e);return[t,t]}}function Er(e){return hh(e)}function zt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Zn]||(e[Zn]=new Set)).add(t)}function sn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Zn];n&&(n.delete(t),n.size||(e[Zn]=void 0))}function to(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Lv=0;function no(e,t,n,s){const i=e._endId=++Lv,r=()=>{i===e._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:a,timeout:l,propCount:o}=mp(e,t);if(!a)return s();const u=a+"end";let p=0;const d=()=>{e.removeEventListener(u,f),r()},f=h=>{h.target===e&&++p>=o&&d()};setTimeout(()=>{p<o&&d()},l+1),e.addEventListener(u,f)}function mp(e,t){const n=window.getComputedStyle(e),s=m=>(n[m]||"").split(", "),i=s(`${tn}Delay`),r=s(`${tn}Duration`),a=so(i,r),l=s(`${ms}Delay`),o=s(`${ms}Duration`),u=so(l,o);let p=null,d=0,f=0;t===tn?a>0&&(p=tn,d=a,f=r.length):t===ms?u>0&&(p=ms,d=u,f=o.length):(d=Math.max(a,u),p=d>0?a>u?tn:ms:null,f=p?p===tn?r.length:o.length:0);const h=p===tn&&/\b(transform|all)(,|$)/.test(s(`${tn}Property`).toString());return{type:p,timeout:d,propCount:f,hasTransform:h}}function so(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>io(n)+io(e[s])))}function io(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function _p(){return document.body.offsetHeight}function Pv(e,t,n){const s=e[Zn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ro=Symbol("_vod"),Fv=Symbol("_vsh"),Rv=Symbol(""),Nv=/(^|;)\s*display\s*:/;function Mv(e,t,n){const s=e.style,i=Be(n);let r=!1;if(n&&!i){if(t)if(Be(t))for(const a of t.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Si(s,l,"")}else for(const a in t)n[a]==null&&Si(s,a,"");for(const a in n)a==="display"&&(r=!0),Si(s,a,n[a])}else if(i){if(t!==n){const a=s[Rv];a&&(n+=";"+a),s.cssText=n,r=Nv.test(n)}}else t&&e.removeAttribute("style");ro in e&&(e[ro]=r?s.display:"",e[Fv]&&(s.display="none"))}const ao=/\s*!important$/;function Si(e,t,n){if(ie(n))n.forEach(s=>Si(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Vv(e,t);ao.test(n)?e.setProperty(vn(s),n.replace(ao,""),"important"):e[s]=n}}const lo=["Webkit","Moz","ms"],wr={};function Vv(e,t){const n=wr[t];if(n)return n;let s=Ke(t);if(s!=="filter"&&s in e)return wr[t]=s;s=us(s);for(let i=0;i<lo.length;i++){const r=lo[i]+s;if(r in e)return wr[t]=r}return t}const oo="http://www.w3.org/1999/xlink";function co(e,t,n,s,i,r=yh(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(oo,t.slice(6,t.length)):e.setAttributeNS(oo,t,n):n==null||r&&!Ca(n)?e.removeAttribute(t):e.setAttribute(t,r?"":cs(n)?String(n):n)}function uo(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?fp(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,o=n==null?e.type==="checkbox"?"on":"":String(n);(l!==o||!("_value"in e))&&(e.value=o),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ca(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(i||t)}function $v(e,t,n,s){e.addEventListener(t,n,s)}function zv(e,t,n,s){e.removeEventListener(t,n,s)}const po=Symbol("_vei");function Hv(e,t,n,s,i=null){const r=e[po]||(e[po]={}),a=r[t];if(s&&a)a.value=s;else{const[l,o]=Uv(t);if(s){const u=r[t]=qv(s,i);$v(e,l,u,o)}else a&&(zv(e,l,a,o),r[t]=void 0)}}const fo=/(?:Once|Passive|Capture)$/;function Uv(e){let t;if(fo.test(e)){t={};let s;for(;s=e.match(fo);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):vn(e.slice(2)),t]}let Sr=0;const jv=Promise.resolve(),Gv=()=>Sr||(jv.then(()=>Sr=0),Sr=Date.now());function qv(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;St(Kv(s,n.value),t,5,[s])};return n.value=e,n.attached=Gv(),n}function Kv(e,t){if(ie(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const ho=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Wv=(e,t,n,s,i,r)=>{const a=i==="svg";t==="class"?Pv(e,s,a):t==="style"?Mv(e,n,s):Ws(t)?Ea(t)||Hv(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Yv(e,t,s,a))?(uo(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&co(e,t,s,a,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Be(s))?uo(e,Ke(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),co(e,t,s,a))};function Yv(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ho(t)&&re(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ho(t)&&Be(n)?!1:t in e}const kp=new WeakMap,yp=new WeakMap,Mi=Symbol("_moveCb"),go=Symbol("_enterCb"),Xv=e=>(delete e.props.mode,e),Qv=Xv({name:"TransitionGroup",props:Fe({},gp,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Pn(),s=Lu();let i,r;return zu(()=>{if(!i.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!t1(i[0].el,n.vnode.el,a))return;i.forEach(Jv),i.forEach(Zv);const l=i.filter(e1);_p(),l.forEach(o=>{const u=o.el,p=u.style;zt(u,a),p.transform=p.webkitTransform=p.transitionDuration="";const d=u[Mi]=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u[Mi]=null,sn(u,a))};u.addEventListener("transitionend",d)})}),()=>{const a=oe(e),l=vp(a);let o=a.tag||Je;if(i=[],r)for(let u=0;u<r.length;u++){const p=r[u];p.el&&p.el instanceof Element&&(i.push(p),In(p,Vs(p,l,s,n)),kp.set(p,p.el.getBoundingClientRect()))}r=t.default?Ra(t.default()):[];for(let u=0;u<r.length;u++){const p=r[u];p.key!=null&&In(p,Vs(p,l,s,n))}return Me(o,null,r)}}}),bp=Qv;function Jv(e){const t=e.el;t[Mi]&&t[Mi](),t[go]&&t[go]()}function Zv(e){yp.set(e,e.el.getBoundingClientRect())}function e1(e){const t=kp.get(e),n=yp.get(e),s=t.left-n.left,i=t.top-n.top;if(s||i){const r=e.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",e}}function t1(e,t,n){const s=e.cloneNode(),i=e[Zn];i&&i.forEach(l=>{l.split(/\s+/).forEach(o=>o&&s.classList.remove(o))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const r=t.nodeType===1?t:t.parentNode;r.appendChild(s);const{hasTransform:a}=mp(s);return r.removeChild(s),a}const n1=Fe({patchProp:Wv},Ov);let Cr,vo=!1;function s1(){return Cr=vo?Cr:tv(n1),vo=!0,Cr}const i1=(...e)=>{const t=s1().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=a1(s);if(i)return n(i,!0,r1(i))},t};function r1(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function a1(e){return Be(e)?document.querySelector(e):e}var ei=e=>/^[a-z][a-z0-9+.-]*:/.test(e)||e.startsWith("//"),l1=/.md((\?|#).*)?$/,ja=(e,t="/")=>ei(e)||e.startsWith("/")&&!e.startsWith(t)&&!l1.test(e),Fn=e=>/^(https?:)?\/\//.test(e),mo=e=>{if(!e||e.endsWith("/"))return e;let t=e.replace(/(^|\/)README.md$/i,"$1index.html");return t.endsWith(".md")?t=`${t.substring(0,t.length-3)}.html`:t.endsWith(".html")||(t=`${t}.html`),t.endsWith("/index.html")&&(t=t.substring(0,t.length-10)),t},o1="http://.",c1=(e,t)=>{if(!e.startsWith("/")&&t){const n=t.slice(0,t.lastIndexOf("/"));return mo(new URL(`${n}/${e}`,o1).pathname)}return mo(e)},u1=(e,t)=>{const n=Object.keys(e).sort((s,i)=>{const r=i.split("/").length-s.split("/").length;return r!==0?r:i.length-s.length});for(const s of n)if(t.startsWith(s))return s;return"/"},p1=/(#|\?)/,Ap=e=>{const[t,...n]=e.split(p1);return{pathname:t,hashAndQueries:n.join("")}},d1=["link","meta","script","style","noscript","template"],f1=["title","base"],h1=([e,t,n])=>f1.includes(e)?e:d1.includes(e)?e==="meta"&&t.name?`${e}.${t.name}`:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,Object.entries(t).map(([s,i])=>typeof i=="boolean"?i?[s,""]:null:[s,i]).filter(s=>s!=null).sort(([s],[i])=>s.localeCompare(i)),n]):null,g1=e=>{const t=new Set,n=[];return e.forEach(s=>{const i=h1(s);i&&!t.has(i)&&(t.add(i),n.push(s))}),n},v1=e=>e.startsWith("/")?e:`/${e}`,Ep=e=>e.endsWith("/")||e.endsWith(".html")?e:`${e}/`,Ga=e=>e.endsWith("/")?e.slice(0,-1):e,wp=e=>e.startsWith("/")?e.slice(1):e,Ji=e=>Object.prototype.toString.call(e)==="[object Object]",Te=e=>typeof e=="string";const m1=JSON.parse("{}"),_1=Object.fromEntries([["/",{loader:()=>ne(()=>import("./index.html-C1gfJO5R.js"),__vite__mapDeps([0,1])),meta:{t:"主页",i:"home"}}],["/home.html",{loader:()=>ne(()=>import("./home.html-D_pnXYHR.js"),__vite__mapDeps([2,1])),meta:{t:"导航",i:"daohang",I:!1}}],["/intro.html",{loader:()=>ne(()=>import("./intro.html-C61ofPw1.js"),__vite__mapDeps([3,1])),meta:{t:"关于",i:"wenhao",I:!1}}],["/openstack/",{loader:()=>ne(()=>import("./index.html-DvdlAVKL.js"),__vite__mapDeps([4,1])),meta:{d:1741191327e3,c:["openstack"],g:["openstack"],v:"/home/sky.jpg",r:{minutes:.07,words:20},t:"代码走读openstack",i:"ops",O:1,y:"a"}}],["/other/",{loader:()=>ne(()=>import("./index.html-B0iDKrUt.js"),__vite__mapDeps([5,1])),meta:{d:1741191327e3,c:["openstack"],g:["openstack"],v:"/discoverybackground/ocean4.jpg",r:{minutes:.07,words:20},t:"随记",i:"duihua",O:2,y:"a"}}],["/other/component_oslo_messaging.html",{loader:()=>ne(()=>import("./component_oslo_messaging.html-1qeNmHg8.js"),__vite__mapDeps([6,1])),meta:{d:174143502e4,c:["openstack组件","随记","oslo_messaging"],g:["oslo_service","Transport","RPC","oslo_messaging"],e:`<h2>oslo_messaging</h2>
<p>🌈相关链接<a href="https://ylzhong.top/openstack/nova/service.html" target="_blank" rel="noopener noreferrer">openstack中的Service</a></p>
<h3>Transport</h3>
<p>在创建<code>RPCServer</code>和<code>RPCClient</code>都需要指定<code>transport</code>，openstack的每个模块中<code>rpcapi.py</code>的<code>init()</code>方法中都会存在<code>create_transport()</code>方法，本质是调用<code>msg_transport._get_transport</code></p>`,r:{minutes:5.25,words:1576},t:"oslo_messaging组件",i:"page",y:"a"}}],["/openstack/neutron/",{loader:()=>ne(()=>import("./index.html-nPSxFHXL.js"),__vite__mapDeps([7,1])),meta:{d:1741191327e3,c:["neutron"],g:["neutron"],v:"/discoverybackground/ocean2.jpg",r:{minutes:.07,words:20},t:"网络服务neutron",i:"net",O:2,y:"a"}}],["/openstack/neutron/openstack_3service.html",{loader:()=>ne(()=>import("./openstack_3service.html-BzU4BJ9k.js"),__vite__mapDeps([8,1])),meta:{d:174143502e4,c:["openstack中的Service","随记","oslo"],g:["WSGIService","oslo_messaging","wsgi"],e:`<h2>nova.service.Service</h2>
<p>主要用于启动rpc服务，启动定时任务</p>
<h3>create</h3>
<p>以<code>nova.service.Service.create</code>方法为例：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 父类为oslo_service.Service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">@</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">classmethod</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> create</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic">cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> binary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> topic</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> manager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">           report_interval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> periodic_enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">           periodic_fuzzy_delay</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> periodic_interval_max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> 	  # 相关配置检查</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> host:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        host </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.host</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> binary:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        binary </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> os.path.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">basename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(sys.argv[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> topic:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        topic </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> binary.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">rpartition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'nova-'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> manager:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        # 为当前的wsgi服务配置对应的manager，manager中用来启动定时任务，或暴露endpoint服务端点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        manager </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> SERVICE_MANAGERS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(binary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> report_interval </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        report_interval </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.report_interval</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> periodic_enable </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        periodic_enable </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.periodic_enable</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> periodic_fuzzy_delay </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        periodic_fuzzy_delay </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.periodic_fuzzy_delay</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    debugger.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	  # 调用超类的构造方法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    service_obj </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(host, binary, topic, manager,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      report_interval</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">report_interval,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      periodic_enable</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">periodic_enable,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      periodic_fuzzy_delay</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">periodic_fuzzy_delay,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      periodic_interval_max</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">periodic_interval_max)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        utils.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">raise_if_old_compute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> exception.TooOldComputeService </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> e:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.workarounds.disable_compute_service_check_for_ffu:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">            LOG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">warning</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(e))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            raise</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> service_obj</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.44,words:1931},t:"openstack中的Service",i:"page",y:"a"}}],["/openstack/cinder/",{loader:()=>ne(()=>import("./index.html-BuyuW4sI.js"),__vite__mapDeps([9,1])),meta:{d:1741191327e3,c:["cinder"],g:["cinder"],v:"/discoverybackground/ocean3.jpg",r:{minutes:.06,words:19},t:"卷服务cinder",i:"cinder",O:3,y:"a"}}],["/openstack/cinder/openstack_serv4ice.html",{loader:()=>ne(()=>import("./openstack_serv4ice.html-BL8oJ4lS.js"),__vite__mapDeps([10,1])),meta:{d:174143502e4,c:["openstack中的Service","随记","oslo"],g:["WSGIService","oslo_messaging","wsgi"],e:`<h2>nova.service.Service</h2>
<p>主要用于启动rpc服务，启动定时任务</p>
<h3>create</h3>
<p>以<code>nova.service.Service.create</code>方法为例：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 父类为oslo_service.Service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">@</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">classmethod</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> create</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic">cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> binary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> topic</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> manager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">           report_interval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> periodic_enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">           periodic_fuzzy_delay</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> periodic_interval_max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> 	  # 相关配置检查</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> host:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        host </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.host</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> binary:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        binary </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> os.path.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">basename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(sys.argv[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> topic:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        topic </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> binary.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">rpartition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'nova-'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> manager:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        # 为当前的wsgi服务配置对应的manager，manager中用来启动定时任务，或暴露endpoint服务端点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        manager </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> SERVICE_MANAGERS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(binary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> report_interval </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        report_interval </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.report_interval</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> periodic_enable </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        periodic_enable </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.periodic_enable</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> periodic_fuzzy_delay </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        periodic_fuzzy_delay </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.periodic_fuzzy_delay</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    debugger.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	  # 调用超类的构造方法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    service_obj </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(host, binary, topic, manager,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      report_interval</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">report_interval,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      periodic_enable</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">periodic_enable,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      periodic_fuzzy_delay</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">periodic_fuzzy_delay,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      periodic_interval_max</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">periodic_interval_max)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        utils.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">raise_if_old_compute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> exception.TooOldComputeService </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> e:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.workarounds.disable_compute_service_check_for_ffu:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">            LOG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">warning</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(e))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            raise</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> service_obj</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.44,words:1931},t:"openstack中的Service",i:"page",y:"a"}}],["/openstack/nova/",{loader:()=>ne(()=>import("./index.html-QHL2qJ2q.js"),__vite__mapDeps([11,1])),meta:{d:1741191327e3,c:["nova"],g:["nova"],v:"/discoverybackground/ocean1.jpg",r:{minutes:.07,words:20},t:"计算服务nova",i:"nova",O:1,y:"a"}}],["/openstack/nova/launcher.html",{loader:()=>ne(()=>import("./launcher.html-gquoGsfi.js"),__vite__mapDeps([12,1])),meta:{d:1741593044e3,c:["openstack中的Launcher","随记","oslo"],g:["ServiceLauncher","Launcher","ProcessLauncher"],e:`<h2>Launcher</h2>
<h3>Launcher基类</h3>
<p>Openstack中使用启动器<code>oslo_service.service.Launcher</code>管理各种<code>Service</code>，启动器能在收到<code>systemctl stop</code>发出的<code>kill -15</code>信号之后，执行内部<code>services</code>的<code>stop()</code>方法，如果能在<code>stop()</code>中添加优雅关闭的逻辑代码，则能实现服务的生命流程托管于<code>Launcher</code>，从而实现整个主进程的优雅关闭</p>`,r:{minutes:6.74,words:2021},t:"Launcher",i:"page",y:"a"}}],["/openstack/nova/pci_passthrough.html",{loader:()=>ne(()=>import("./pci_passthrough.html-CaIV7We3.js"),__vite__mapDeps([13,1])),meta:{d:1742130587e3,c:["设备PCI直通","随记"],g:["PCI passthrough"],e:`<h2>PCI直通示例</h2>
<p>一些PCI设备提供独占设备能力和共享能力，在使用SR-IOV时，物理设备会被虚拟化为多个PCI设备，虚拟化设备可以分配给不同的主机，在PCI直通的情况下，完整的物理设备只会分配给一个主机。</p>
<h3>计算节点准备</h3>
<ul>
<li>
<p>硬件要求：</p>
<ul>
<li>BIOS 启用 VT-d（Intel）或 AMD-Vi（AMD）。</li>
<li>Linux 内核启用 IOMMU：添加<code>intel_iommu=on</code>或<code>amd_iommu=on</code>到内核参数。</li>
</ul>
</li>
<li>
<p>验证命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">dmesg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -i</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> iommu</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 检查 IOMMU 是否启用</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">lspci</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -v</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">               # 查看 PCI 设备信息及地址（如 0000:41:00.0）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:3.12,words:935},t:"PCI直通",i:"page",y:"a"}}],["/openstack/nova/service.html",{loader:()=>ne(()=>import("./service.html-fVA5zupP.js"),__vite__mapDeps([14,1])),meta:{d:174143502e4,c:["openstack中的Service","随记","oslo"],g:["WSGIService","oslo_messaging","wsgi"],e:`<h2>nova.service.Service</h2>
<p>主要用于启动rpc服务，启动定时任务</p>
<h3>create</h3>
<p>以<code>nova.service.Service.create</code>方法为例：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 父类为oslo_service.Service</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">@</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">classmethod</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> create</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E5C07B;--shiki-dark-font-style:italic">cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> binary</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> topic</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> manager</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">           report_interval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> periodic_enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic">           periodic_fuzzy_delay</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#D19A66;--shiki-dark-font-style:italic"> periodic_interval_max</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> 	  # 相关配置检查</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> host:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        host </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.host</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> binary:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        binary </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> os.path.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">basename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(sys.argv[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">])</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> topic:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        topic </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> binary.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">rpartition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'nova-'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> manager:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">        # 为当前的wsgi服务配置对应的manager，manager中用来启动定时任务，或暴露endpoint服务端点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        manager </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> SERVICE_MANAGERS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(binary)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> report_interval </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        report_interval </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.report_interval</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> periodic_enable </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        periodic_enable </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.periodic_enable</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> periodic_fuzzy_delay </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">is</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> None</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        periodic_fuzzy_delay </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.periodic_fuzzy_delay</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    debugger.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	  # 调用超类的构造方法</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    service_obj </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B"> cls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(host, binary, topic, manager,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      report_interval</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">report_interval,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      periodic_enable</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">periodic_enable,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      periodic_fuzzy_delay</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">periodic_fuzzy_delay,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">                      periodic_interval_max</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">periodic_interval_max)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    try</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        utils.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">raise_if_old_compute</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    except</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> exception.TooOldComputeService </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">as</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> e:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66"> CONF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.workarounds.disable_compute_service_check_for_ffu:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">            LOG</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">warning</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(e))</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">            raise</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> service_obj</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.36,words:1909},t:"Service",i:"page",y:"a"}}],["/404.html",{loader:()=>ne(()=>import("./404.html-BxVWEwpu.js"),__vite__mapDeps([15,1])),meta:{t:""}}],["/category/",{loader:()=>ne(()=>import("./index.html-DA1aStA9.js"),__vite__mapDeps([16,1])),meta:{t:"分类",I:!1}}],["/category/openstack/",{loader:()=>ne(()=>import("./index.html-DcnHO8yo.js"),__vite__mapDeps([17,1])),meta:{t:"openstack 分类",I:!1}}],["/category/openstack%E7%BB%84%E4%BB%B6/",{loader:()=>ne(()=>import("./index.html-BSxu_TIf.js"),__vite__mapDeps([18,1])),meta:{t:"openstack组件 分类",I:!1}}],["/category/%E9%9A%8F%E8%AE%B0/",{loader:()=>ne(()=>import("./index.html-Cu_FsMPz.js"),__vite__mapDeps([19,1])),meta:{t:"随记 分类",I:!1}}],["/category/oslo-messaging/",{loader:()=>ne(()=>import("./index.html-B7TSOtDC.js"),__vite__mapDeps([20,1])),meta:{t:"oslo_messaging 分类",I:!1}}],["/category/neutron/",{loader:()=>ne(()=>import("./index.html-DLnAvT3L.js"),__vite__mapDeps([21,1])),meta:{t:"neutron 分类",I:!1}}],["/category/openstack%E4%B8%AD%E7%9A%84service/",{loader:()=>ne(()=>import("./index.html-CSlWzq2T.js"),__vite__mapDeps([22,1])),meta:{t:"openstack中的Service 分类",I:!1}}],["/category/oslo/",{loader:()=>ne(()=>import("./index.html-CSo9dkKU.js"),__vite__mapDeps([23,1])),meta:{t:"oslo 分类",I:!1}}],["/category/cinder/",{loader:()=>ne(()=>import("./index.html-3sawvGgA.js"),__vite__mapDeps([24,1])),meta:{t:"cinder 分类",I:!1}}],["/category/nova/",{loader:()=>ne(()=>import("./index.html-DoRpofML.js"),__vite__mapDeps([25,1])),meta:{t:"nova 分类",I:!1}}],["/category/openstack%E4%B8%AD%E7%9A%84launcher/",{loader:()=>ne(()=>import("./index.html-Buu-Rja4.js"),__vite__mapDeps([26,1])),meta:{t:"openstack中的Launcher 分类",I:!1}}],["/category/%E8%AE%BE%E5%A4%87pci%E7%9B%B4%E9%80%9A/",{loader:()=>ne(()=>import("./index.html-Bqosupmv.js"),__vite__mapDeps([27,1])),meta:{t:"设备PCI直通 分类",I:!1}}],["/tag/",{loader:()=>ne(()=>import("./index.html-DJExny4D.js"),__vite__mapDeps([28,1])),meta:{t:"标签",I:!1}}],["/tag/openstack/",{loader:()=>ne(()=>import("./index.html-CIRjCVYQ.js"),__vite__mapDeps([29,1])),meta:{t:"标签: openstack",I:!1}}],["/tag/oslo-service/",{loader:()=>ne(()=>import("./index.html-C-nisTJr.js"),__vite__mapDeps([30,1])),meta:{t:"标签: oslo_service",I:!1}}],["/tag/transport/",{loader:()=>ne(()=>import("./index.html-j9cWq9R5.js"),__vite__mapDeps([31,1])),meta:{t:"标签: Transport",I:!1}}],["/tag/rpc/",{loader:()=>ne(()=>import("./index.html-CWn75Zrq.js"),__vite__mapDeps([32,1])),meta:{t:"标签: RPC",I:!1}}],["/tag/oslo-messaging/",{loader:()=>ne(()=>import("./index.html-BieKuVlB.js"),__vite__mapDeps([33,1])),meta:{t:"标签: oslo_messaging",I:!1}}],["/tag/neutron/",{loader:()=>ne(()=>import("./index.html-BNer7Qgv.js"),__vite__mapDeps([34,1])),meta:{t:"标签: neutron",I:!1}}],["/tag/wsgiservice/",{loader:()=>ne(()=>import("./index.html-DIDOxKID.js"),__vite__mapDeps([35,1])),meta:{t:"标签: WSGIService",I:!1}}],["/tag/wsgi/",{loader:()=>ne(()=>import("./index.html-BRbljHwB.js"),__vite__mapDeps([36,1])),meta:{t:"标签: wsgi",I:!1}}],["/tag/cinder/",{loader:()=>ne(()=>import("./index.html-CZqVqzit.js"),__vite__mapDeps([37,1])),meta:{t:"标签: cinder",I:!1}}],["/tag/nova/",{loader:()=>ne(()=>import("./index.html-DKd79Axu.js"),__vite__mapDeps([38,1])),meta:{t:"标签: nova",I:!1}}],["/tag/servicelauncher/",{loader:()=>ne(()=>import("./index.html-CTyGazeV.js"),__vite__mapDeps([39,1])),meta:{t:"标签: ServiceLauncher",I:!1}}],["/tag/launcher/",{loader:()=>ne(()=>import("./index.html-CmfLGlg-.js"),__vite__mapDeps([40,1])),meta:{t:"标签: Launcher",I:!1}}],["/tag/processlauncher/",{loader:()=>ne(()=>import("./index.html-B923ifLm.js"),__vite__mapDeps([41,1])),meta:{t:"标签: ProcessLauncher",I:!1}}],["/tag/pci-passthrough/",{loader:()=>ne(()=>import("./index.html-C6BRckAk.js"),__vite__mapDeps([42,1])),meta:{t:"标签: PCI passthrough",I:!1}}],["/article/",{loader:()=>ne(()=>import("./index.html-DxJlZ7tT.js"),__vite__mapDeps([43,1])),meta:{t:"文章",I:!1}}],["/star/",{loader:()=>ne(()=>import("./index.html-DNbdHipd.js"),__vite__mapDeps([44,1])),meta:{t:"星标",I:!1}}],["/timeline/",{loader:()=>ne(()=>import("./index.html-C71Nrxhy.js"),__vite__mapDeps([45,1])),meta:{t:"时间轴",I:!1}}]]);function k1(){return Sp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Sp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const y1=typeof Proxy=="function",b1="devtools-plugin:setup",A1="plugin:settings:set";let $n,Xr;function E1(){var e;return $n!==void 0||(typeof window<"u"&&window.performance?($n=!0,Xr=window.performance):typeof globalThis<"u"&&(!((e=globalThis.perf_hooks)===null||e===void 0)&&e.performance)?($n=!0,Xr=globalThis.perf_hooks.performance):$n=!1),$n}function w1(){return E1()?Xr.now():Date.now()}class S1{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const s={};if(t.settings)for(const a in t.settings){const l=t.settings[a];s[a]=l.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let r=Object.assign({},s);try{const a=localStorage.getItem(i),l=JSON.parse(a);Object.assign(r,l)}catch{}this.fallbacks={getSettings(){return r},setSettings(a){try{localStorage.setItem(i,JSON.stringify(a))}catch{}r=a},now(){return w1()}},n&&n.on(A1,(a,l)=>{a===this.plugin.id&&this.fallbacks.setSettings(l)}),this.proxiedOn=new Proxy({},{get:(a,l)=>this.target?this.target.on[l]:(...o)=>{this.onQueue.push({method:l,args:o})}}),this.proxiedTarget=new Proxy({},{get:(a,l)=>this.target?this.target[l]:l==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(l)?(...o)=>(this.targetQueue.push({method:l,args:o,resolve:()=>{}}),this.fallbacks[l](...o)):(...o)=>new Promise(u=>{this.targetQueue.push({method:l,args:o,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function C1(e,t){const n=e,s=Sp(),i=k1(),r=y1&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(b1,e,t);else{const a=r?new S1(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof document<"u";function Cp(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function x1(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Cp(e.default)}const ge=Object.assign;function xr(e,t){const n={};for(const s in t){const i=t[s];n[s]=ft(i)?i.map(e):e(i)}return n}const Ls=()=>{},ft=Array.isArray,xp=/#/g,T1=/&/g,B1=/\//g,O1=/=/g,I1=/\?/g,Tp=/\+/g,D1=/%5B/g,L1=/%5D/g,Bp=/%5E/g,P1=/%60/g,Op=/%7B/g,F1=/%7C/g,Ip=/%7D/g,R1=/%20/g;function qa(e){return encodeURI(""+e).replace(F1,"|").replace(D1,"[").replace(L1,"]")}function N1(e){return qa(e).replace(Op,"{").replace(Ip,"}").replace(Bp,"^")}function Qr(e){return qa(e).replace(Tp,"%2B").replace(R1,"+").replace(xp,"%23").replace(T1,"%26").replace(P1,"`").replace(Op,"{").replace(Ip,"}").replace(Bp,"^")}function M1(e){return Qr(e).replace(O1,"%3D")}function V1(e){return qa(e).replace(xp,"%23").replace(I1,"%3F")}function $1(e){return e==null?"":V1(e).replace(B1,"%2F")}function ts(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const z1=/\/$/,H1=e=>e.replace(z1,"");function Tr(e,t,n="/"){let s,i={},r="",a="";const l=t.indexOf("#");let o=t.indexOf("?");return l<o&&l>=0&&(o=-1),o>-1&&(s=t.slice(0,o),r=t.slice(o+1,l>-1?l:t.length),i=e(r)),l>-1&&(s=s||t.slice(0,l),a=t.slice(l,t.length)),s=q1(s??t,n),{fullPath:s+(r&&"?")+r+a,path:s,query:i,hash:ts(a)}}function U1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _o(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function j1(e,t,n){const s=t.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&hn(t.matched[s],n.matched[i])&&Dp(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function hn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Dp(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!G1(e[n],t[n]))return!1;return!0}function G1(e,t){return ft(e)?ko(e,t):ft(t)?ko(t,e):e===t}function ko(e,t){return ft(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function q1(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,a,l;for(a=0;a<s.length;a++)if(l=s[a],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(a).join("/")}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zs;(function(e){e.pop="pop",e.push="push"})(zs||(zs={}));var Ps;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ps||(Ps={}));function K1(e){if(!e)if(jt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),H1(e)}const W1=/^[^#]+#/;function Y1(e,t){return e.replace(W1,"#")+t}function X1(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Zi=()=>({left:window.scrollX,top:window.scrollY});function Q1(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=X1(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function yo(e,t){return(history.state?history.state.position-t:-1)+e}const Jr=new Map;function J1(e,t){Jr.set(e,t)}function Z1(e){const t=Jr.get(e);return Jr.delete(e),t}let em=()=>location.protocol+"//"+location.host;function Lp(e,t){const{pathname:n,search:s,hash:i}=t,r=e.indexOf("#");if(r>-1){let l=i.includes(e.slice(r))?e.slice(r).length:1,o=i.slice(l);return o[0]!=="/"&&(o="/"+o),_o(o,"")}return _o(n,e)+s+i}function tm(e,t,n,s){let i=[],r=[],a=null;const l=({state:f})=>{const h=Lp(e,location),m=n.value,_=t.value;let b=0;if(f){if(n.value=h,t.value=f,a&&a===m){a=null;return}b=_?f.position-_.position:0}else s(h);i.forEach(y=>{y(n.value,m,{delta:b,type:zs.pop,direction:b?b>0?Ps.forward:Ps.back:Ps.unknown})})};function o(){a=n.value}function u(f){i.push(f);const h=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(h),h}function p(){const{history:f}=window;f.state&&f.replaceState(ge({},f.state,{scroll:Zi()}),"")}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",p,{passive:!0}),{pauseListeners:o,listen:u,destroy:d}}function bo(e,t,n,s=!1,i=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:i?Zi():null}}function nm(e){const{history:t,location:n}=window,s={value:Lp(e,n)},i={value:t.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(o,u,p){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+o:em()+e+o;try{t[p?"replaceState":"pushState"](u,"",f),i.value=u}catch(h){console.error(h),n[p?"replace":"assign"](f)}}function a(o,u){const p=ge({},t.state,bo(i.value.back,o,i.value.forward,!0),u,{position:i.value.position});r(o,p,!0),s.value=o}function l(o,u){const p=ge({},i.value,t.state,{forward:o,scroll:Zi()});r(p.current,p,!0);const d=ge({},bo(s.value,o,null),{position:p.position+1},u);r(o,d,!1),s.value=o}return{location:s,state:i,push:l,replace:a}}function sm(e){e=K1(e);const t=nm(e),n=tm(e,t.state,t.location,t.replace);function s(r,a=!0){a||n.pauseListeners(),history.go(r)}const i=ge({location:"",base:e,go:s,createHref:Y1.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Pp(e){return typeof e=="string"||e&&typeof e=="object"}function Fp(e){return typeof e=="string"||typeof e=="symbol"}const Rp=Symbol("");var Ao;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ao||(Ao={}));function ns(e,t){return ge(new Error,{type:e,[Rp]:!0},t)}function Vt(e,t){return e instanceof Error&&Rp in e&&(t==null||!!(e.type&t))}const Eo="[^/]+?",im={sensitive:!1,strict:!1,start:!0,end:!0},rm=/[.+*?^${}()[\]/\\]/g;function am(e,t){const n=ge({},im,t),s=[];let i=n.start?"^":"";const r=[];for(const u of e){const p=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let d=0;d<u.length;d++){const f=u[d];let h=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(rm,"\\$&"),h+=40;else if(f.type===1){const{value:m,repeatable:_,optional:b,regexp:y}=f;r.push({name:m,repeatable:_,optional:b});const E=y||Eo;if(E!==Eo){h+=10;try{new RegExp(`(${E})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${m}" (${E}): `+w.message)}}let g=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(g=b&&u.length<2?`(?:/${g})`:"/"+g),b&&(g+="?"),i+=g,h+=20,b&&(h+=-8),_&&(h+=-20),E===".*"&&(h+=-50)}p.push(h)}s.push(p)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function l(u){const p=u.match(a),d={};if(!p)return null;for(let f=1;f<p.length;f++){const h=p[f]||"",m=r[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function o(u){let p="",d=!1;for(const f of e){(!d||!p.endsWith("/"))&&(p+="/"),d=!1;for(const h of f)if(h.type===0)p+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:b}=h,y=m in u?u[m]:"";if(ft(y)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const E=ft(y)?y.join("/"):y;if(!E)if(b)f.length<2&&(p.endsWith("/")?p=p.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);p+=E}}return p||"/"}return{re:a,score:s,keys:r,parse:l,stringify:o}}function lm(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Np(e,t){let n=0;const s=e.score,i=t.score;for(;n<s.length&&n<i.length;){const r=lm(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(wo(s))return 1;if(wo(i))return-1}return i.length-s.length}function wo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const om={type:0,value:""},cm=/[a-zA-Z0-9_]/;function um(e){if(!e)return[[]];if(e==="/")return[[om]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,s=n;const i=[];let r;function a(){r&&i.push(r),r=[]}let l=0,o,u="",p="";function d(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(o==="*"||o==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:p,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=o}for(;l<e.length;){if(o=e[l++],o==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:o==="/"?(u&&d(),a()):o===":"?(d(),n=1):f();break;case 4:f(),n=s;break;case 1:o==="("?n=2:cm.test(o)?f():(d(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&l--);break;case 2:o===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+o:n=3:p+=o;break;case 3:d(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&l--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),a(),i}function pm(e,t,n){const s=am(um(e.path),n),i=ge(s,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function dm(e,t){const n=[],s=new Map;t=To({strict:!1,end:!0,sensitive:!1},t);function i(d){return s.get(d)}function r(d,f,h){const m=!h,_=Co(d);_.aliasOf=h&&h.record;const b=To(t,d),y=[_];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const P of w)y.push(Co(ge({},_,{components:h?h.record.components:_.components,path:P,aliasOf:h?h.record:_})))}let E,g;for(const w of y){const{path:P}=w;if(f&&P[0]!=="/"){const M=f.record.path,R=M[M.length-1]==="/"?"":"/";w.path=f.record.path+(P&&R+P)}if(E=pm(w,f,b),h?h.alias.push(E):(g=g||E,g!==E&&g.alias.push(E),m&&d.name&&!xo(E)&&a(d.name)),Mp(E)&&o(E),_.children){const M=_.children;for(let R=0;R<M.length;R++)r(M[R],E,h&&h.children[R])}h=h||E}return g?()=>{a(g)}:Ls}function a(d){if(Fp(d)){const f=s.get(d);f&&(s.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&s.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function l(){return n}function o(d){const f=gm(d,n);n.splice(f,0,d),d.record.name&&!xo(d)&&s.set(d.record.name,d)}function u(d,f){let h,m={},_,b;if("name"in d&&d.name){if(h=s.get(d.name),!h)throw ns(1,{location:d});b=h.record.name,m=ge(So(f.params,h.keys.filter(g=>!g.optional).concat(h.parent?h.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),d.params&&So(d.params,h.keys.map(g=>g.name))),_=h.stringify(m)}else if(d.path!=null)_=d.path,h=n.find(g=>g.re.test(_)),h&&(m=h.parse(_),b=h.record.name);else{if(h=f.name?s.get(f.name):n.find(g=>g.re.test(f.path)),!h)throw ns(1,{location:d,currentLocation:f});b=h.record.name,m=ge({},f.params,d.params),_=h.stringify(m)}const y=[];let E=h;for(;E;)y.unshift(E.record),E=E.parent;return{name:b,path:_,params:m,matched:y,meta:hm(y)}}e.forEach(d=>r(d));function p(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:a,clearRoutes:p,getRoutes:l,getRecordMatcher:i}}function So(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Co(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function fm(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function xo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hm(e){return e.reduce((t,n)=>ge(t,n.meta),{})}function To(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function gm(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;Np(e,t[r])<0?s=r:n=r+1}const i=vm(e);return i&&(s=t.lastIndexOf(i,s-1)),s}function vm(e){let t=e;for(;t=t.parent;)if(Mp(t)&&Np(e,t)===0)return t}function Mp({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function mm(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Tp," "),a=r.indexOf("="),l=ts(a<0?r:r.slice(0,a)),o=a<0?null:ts(r.slice(a+1));if(l in t){let u=t[l];ft(u)||(u=t[l]=[u]),u.push(o)}else t[l]=o}return t}function Bo(e){let t="";for(let n in e){const s=e[n];if(n=M1(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(ft(s)?s.map(r=>r&&Qr(r)):[s&&Qr(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function _m(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=ft(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return t}const km=Symbol(""),Oo=Symbol(""),er=Symbol(""),Ka=Symbol(""),Zr=Symbol("");function _s(){let e=[];function t(s){return e.push(s),()=>{const i=e.indexOf(s);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function on(e,t,n,s,i,r=a=>a()){const a=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,o)=>{const u=f=>{f===!1?o(ns(4,{from:n,to:t})):f instanceof Error?o(f):Pp(f)?o(ns(2,{from:t,to:f})):(a&&s.enterCallbacks[i]===a&&typeof f=="function"&&a.push(f),l())},p=r(()=>e.call(s&&s.instances[i],t,n,u));let d=Promise.resolve(p);e.length<3&&(d=d.then(u)),d.catch(f=>o(f))})}function Br(e,t,n,s,i=r=>r()){const r=[];for(const a of e)for(const l in a.components){let o=a.components[l];if(!(t!=="beforeRouteEnter"&&!a.instances[l]))if(Cp(o)){const p=(o.__vccOpts||o)[t];p&&r.push(on(p,n,s,a,l,i))}else{let u=o();r.push(()=>u.then(p=>{if(!p)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const d=x1(p)?p.default:p;a.mods[l]=p,a.components[l]=d;const h=(d.__vccOpts||d)[t];return h&&on(h,n,s,a,l,i)()}))}}return r}function Io(e){const t=xe(er),n=xe(Ka),s=A(()=>{const o=un(e.to);return t.resolve(o)}),i=A(()=>{const{matched:o}=s.value,{length:u}=o,p=o[u-1],d=n.matched;if(!p||!d.length)return-1;const f=d.findIndex(hn.bind(null,p));if(f>-1)return f;const h=Do(o[u-2]);return u>1&&Do(p)===h&&d[d.length-1].path!==h?d.findIndex(hn.bind(null,o[u-2])):f}),r=A(()=>i.value>-1&&Em(n.params,s.value.params)),a=A(()=>i.value>-1&&i.value===n.matched.length-1&&Dp(n.params,s.value.params));function l(o={}){return Am(o)?t[un(e.replace)?"replace":"push"](un(e.to)).catch(Ls):Promise.resolve()}if(jt){const o=Pn();if(o){const u={route:s.value,isActive:r.value,isExactActive:a.value,error:null};o.__vrl_devtools=o.__vrl_devtools||[],o.__vrl_devtools.push(u),$a(()=>{u.route=s.value,u.isActive=r.value,u.isExactActive=a.value,u.error=Pp(un(e.to))?null:'Invalid "to" value'},{flush:"post"})}}return{route:s,href:A(()=>s.value.href),isActive:r,isExactActive:a,navigate:l}}const ym=z({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Io,setup(e,{slots:t}){const n=Ys(Io(e)),{options:s}=xe(er),i=A(()=>({[Lo(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Lo(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:c("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),bm=ym;function Am(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Em(e,t){for(const n in t){const s=t[n],i=e[n];if(typeof s=="string"){if(s!==i)return!1}else if(!ft(i)||i.length!==s.length||s.some((r,a)=>r!==i[a]))return!1}return!0}function Do(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Lo=(e,t,n)=>e??t??n,wm=z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=xe(Zr),i=A(()=>e.route||s.value),r=xe(Oo,0),a=A(()=>{let u=un(r);const{matched:p}=i.value;let d;for(;(d=p[u])&&!d.components;)u++;return u}),l=A(()=>i.value.matched[a.value]);wt(Oo,A(()=>a.value+1)),wt(km,l),wt(Zr,i);const o=ee();return de(()=>[o.value,l.value,e.name],([u,p,d],[f,h,m])=>{p&&(p.instances[d]=u,h&&h!==p&&u&&u===f&&(p.leaveGuards.size||(p.leaveGuards=h.leaveGuards),p.updateGuards.size||(p.updateGuards=h.updateGuards))),u&&p&&(!h||!hn(p,h)||!f)&&(p.enterCallbacks[d]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=i.value,p=e.name,d=l.value,f=d&&d.components[p];if(!f)return Po(n.default,{Component:f,route:u});const h=d.props[p],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,b=c(f,ge({},m,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(d.instances[p]=null)},ref:o}));if(jt&&b.ref){const y={depth:a.value,name:d.name,path:d.path,meta:d.meta};(ft(b.ref)?b.ref.map(g=>g.i):[b.ref.i]).forEach(g=>{g.__vrv_devtools=y})}return Po(n.default,{Component:b,route:u})||b}}});function Po(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Sm=wm;function ks(e,t){const n=ge({},e,{matched:e.matched.map(s=>Rm(s,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:e.fullPath,tooltip:t,value:n}}}function _i(e){return{_custom:{display:e}}}let Cm=0;function xm(e,t,n){if(t.__hasDevtools)return;t.__hasDevtools=!0;const s=Cm++;C1({id:"org.vuejs.router"+(s?"."+s:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:e},i=>{typeof i.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),i.on.inspectComponent((p,d)=>{p.instanceData&&p.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:ks(t.currentRoute.value,"Current Route")})}),i.on.visitComponentTree(({treeNode:p,componentInstance:d})=>{if(d.__vrv_devtools){const f=d.__vrv_devtools;p.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Vp})}ft(d.__vrl_devtools)&&(d.__devtoolsApi=i,d.__vrl_devtools.forEach(f=>{let h=f.route.path,m=Hp,_="",b=0;f.error?(h=f.error,m=Dm,b=Lm):f.isExactActive?(m=zp,_="This is exactly active"):f.isActive&&(m=$p,_="This link is active"),p.tags.push({label:h,textColor:b,tooltip:_,backgroundColor:m})}))}),de(t.currentRoute,()=>{o(),i.notifyComponentUpdate(),i.sendInspectorTree(l),i.sendInspectorState(l)});const r="router:navigations:"+s;i.addTimelineLayer({id:r,label:`Router${s?" "+s:""} Navigations`,color:4237508}),t.onError((p,d)=>{i.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:d.fullPath,logType:"error",time:i.now(),data:{error:p},groupId:d.meta.__navigationId}})});let a=0;t.beforeEach((p,d)=>{const f={guard:_i("beforeEach"),from:ks(d,"Current Location during this navigation"),to:ks(p,"Target location")};Object.defineProperty(p.meta,"__navigationId",{value:a++}),i.addTimelineEvent({layerId:r,event:{time:i.now(),title:"Start of navigation",subtitle:p.fullPath,data:f,groupId:p.meta.__navigationId}})}),t.afterEach((p,d,f)=>{const h={guard:_i("afterEach")};f?(h.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},h.status=_i("❌")):h.status=_i("✅"),h.from=ks(d,"Current Location during this navigation"),h.to=ks(p,"Target location"),i.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:p.fullPath,time:i.now(),data:h,logType:f?"warning":"default",groupId:p.meta.__navigationId}})});const l="router-inspector:"+s;i.addInspector({id:l,label:"Routes"+(s?" "+s:""),icon:"book",treeFilterPlaceholder:"Search routes"});function o(){if(!u)return;const p=u;let d=n.getRoutes().filter(f=>!f.parent||!f.parent.record.components);d.forEach(Gp),p.filter&&(d=d.filter(f=>ea(f,p.filter.toLowerCase()))),d.forEach(f=>jp(f,t.currentRoute.value)),p.rootNodes=d.map(Up)}let u;i.on.getInspectorTree(p=>{u=p,p.app===e&&p.inspectorId===l&&o()}),i.on.getInspectorState(p=>{if(p.app===e&&p.inspectorId===l){const f=n.getRoutes().find(h=>h.record.__vd_id===p.nodeId);f&&(p.state={options:Bm(f)})}}),i.sendInspectorTree(l),i.sendInspectorState(l)})}function Tm(e){return e.optional?e.repeatable?"*":"?":e.repeatable?"+":""}function Bm(e){const{record:t}=e,n=[{editable:!1,key:"path",value:t.path}];return t.name!=null&&n.push({editable:!1,key:"name",value:t.name}),n.push({editable:!1,key:"regexp",value:e.re}),e.keys.length&&n.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:e.keys.map(s=>`${s.name}${Tm(s)}`).join(" "),tooltip:"Param keys",value:e.keys}}}),t.redirect!=null&&n.push({editable:!1,key:"redirect",value:t.redirect}),e.alias.length&&n.push({editable:!1,key:"aliases",value:e.alias.map(s=>s.record.path)}),Object.keys(e.record.meta).length&&n.push({editable:!1,key:"meta",value:e.record.meta}),n.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:e.score.map(s=>s.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:e.score}}}),n}const Vp=15485081,$p=2450411,zp=8702998,Om=2282478,Hp=16486972,Im=6710886,Dm=16704226,Lm=12131356;function Up(e){const t=[],{record:n}=e;n.name!=null&&t.push({label:String(n.name),textColor:0,backgroundColor:Om}),n.aliasOf&&t.push({label:"alias",textColor:0,backgroundColor:Hp}),e.__vd_match&&t.push({label:"matches",textColor:0,backgroundColor:Vp}),e.__vd_exactActive&&t.push({label:"exact",textColor:0,backgroundColor:zp}),e.__vd_active&&t.push({label:"active",textColor:0,backgroundColor:$p}),n.redirect&&t.push({label:typeof n.redirect=="string"?`redirect: ${n.redirect}`:"redirects",textColor:16777215,backgroundColor:Im});let s=n.__vd_id;return s==null&&(s=String(Pm++),n.__vd_id=s),{id:s,label:n.path,tags:t,children:e.children.map(Up)}}let Pm=0;const Fm=/^\/(.*)\/([a-z]*)$/;function jp(e,t){const n=t.matched.length&&hn(t.matched[t.matched.length-1],e.record);e.__vd_exactActive=e.__vd_active=n,n||(e.__vd_active=t.matched.some(s=>hn(s,e.record))),e.children.forEach(s=>jp(s,t))}function Gp(e){e.__vd_match=!1,e.children.forEach(Gp)}function ea(e,t){const n=String(e.re).match(Fm);if(e.__vd_match=!1,!n||n.length<3)return!1;if(new RegExp(n[1].replace(/\$$/,""),n[2]).test(t))return e.children.forEach(a=>ea(a,t)),e.record.path!=="/"||t==="/"?(e.__vd_match=e.re.test(t),!0):!1;const i=e.record.path.toLowerCase(),r=ts(i);return!t.startsWith("/")&&(r.includes(t)||i.includes(t))||r.startsWith(t)||i.startsWith(t)||e.record.name&&String(e.record.name).includes(t)?!0:e.children.some(a=>ea(a,t))}function Rm(e,t){const n={};for(const s in e)t.includes(s)||(n[s]=e[s]);return n}function Nm(e){const t=dm(e.routes,e),n=e.parseQuery||mm,s=e.stringifyQuery||Bo,i=e.history,r=_s(),a=_s(),l=_s(),o=He(Ht);let u=Ht;jt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=xr.bind(null,x=>""+x),d=xr.bind(null,$1),f=xr.bind(null,ts);function h(x,G){let U,X;return Fp(x)?(U=t.getRecordMatcher(x),X=G):X=x,t.addRoute(X,U)}function m(x){const G=t.getRecordMatcher(x);G&&t.removeRoute(G)}function _(){return t.getRoutes().map(x=>x.record)}function b(x){return!!t.getRecordMatcher(x)}function y(x,G){if(G=ge({},G||o.value),typeof x=="string"){const k=Tr(n,x,G.path),S=t.resolve({path:k.path},G),B=i.createHref(k.fullPath);return ge(k,S,{params:f(S.params),hash:ts(k.hash),redirectedFrom:void 0,href:B})}let U;if(x.path!=null)U=ge({},x,{path:Tr(n,x.path,G.path).path});else{const k=ge({},x.params);for(const S in k)k[S]==null&&delete k[S];U=ge({},x,{params:d(k)}),G.params=d(G.params)}const X=t.resolve(U,G),he=x.hash||"";X.params=p(f(X.params));const Ce=U1(s,ge({},x,{hash:N1(he),path:X.path})),v=i.createHref(Ce);return ge({fullPath:Ce,hash:he,query:s===Bo?_m(x.query):x.query||{}},X,{redirectedFrom:void 0,href:v})}function E(x){return typeof x=="string"?Tr(n,x,o.value.path):ge({},x)}function g(x,G){if(u!==x)return ns(8,{from:G,to:x})}function w(x){return R(x)}function P(x){return w(ge(E(x),{replace:!0}))}function M(x){const G=x.matched[x.matched.length-1];if(G&&G.redirect){const{redirect:U}=G;let X=typeof U=="function"?U(x):U;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=E(X):{path:X},X.params={}),ge({query:x.query,hash:x.hash,params:X.path!=null?{}:x.params},X)}}function R(x,G){const U=u=y(x),X=o.value,he=x.state,Ce=x.force,v=x.replace===!0,k=M(U);if(k)return R(ge(E(k),{state:typeof k=="object"?ge({},he,k.state):he,force:Ce,replace:v}),G||U);const S=U;S.redirectedFrom=G;let B;return!Ce&&j1(s,X,U)&&(B=ns(16,{to:S,from:X}),Ne(X,X,!0,!1)),(B?Promise.resolve(B):O(S,X)).catch(C=>Vt(C)?Vt(C,2)?C:Re(C):Y(C,S,X)).then(C=>{if(C){if(Vt(C,2))return R(ge({replace:v},E(C.to),{state:typeof C.to=="object"?ge({},he,C.to.state):he,force:Ce}),G||S)}else C=L(S,X,!0,v,he);return W(S,X,C),C})}function Q(x,G){const U=g(x,G);return U?Promise.reject(U):Promise.resolve()}function V(x){const G=Nt.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(x):x()}function O(x,G){let U;const[X,he,Ce]=Mm(x,G);U=Br(X.reverse(),"beforeRouteLeave",x,G);for(const k of X)k.leaveGuards.forEach(S=>{U.push(on(S,x,G))});const v=Q.bind(null,x,G);return U.push(v),gt(U).then(()=>{U=[];for(const k of r.list())U.push(on(k,x,G));return U.push(v),gt(U)}).then(()=>{U=Br(he,"beforeRouteUpdate",x,G);for(const k of he)k.updateGuards.forEach(S=>{U.push(on(S,x,G))});return U.push(v),gt(U)}).then(()=>{U=[];for(const k of Ce)if(k.beforeEnter)if(ft(k.beforeEnter))for(const S of k.beforeEnter)U.push(on(S,x,G));else U.push(on(k.beforeEnter,x,G));return U.push(v),gt(U)}).then(()=>(x.matched.forEach(k=>k.enterCallbacks={}),U=Br(Ce,"beforeRouteEnter",x,G,V),U.push(v),gt(U))).then(()=>{U=[];for(const k of a.list())U.push(on(k,x,G));return U.push(v),gt(U)}).catch(k=>Vt(k,8)?k:Promise.reject(k))}function W(x,G,U){l.list().forEach(X=>V(()=>X(x,G,U)))}function L(x,G,U,X,he){const Ce=g(x,G);if(Ce)return Ce;const v=G===Ht,k=jt?history.state:{};U&&(X||v?i.replace(x.fullPath,ge({scroll:v&&k&&k.scroll},he)):i.push(x.fullPath,he)),o.value=x,Ne(x,G,U,v),Re()}let J;function ae(){J||(J=i.listen((x,G,U)=>{if(!en.listening)return;const X=y(x),he=M(X);if(he){R(ge(he,{replace:!0}),X).catch(Ls);return}u=X;const Ce=o.value;jt&&J1(yo(Ce.fullPath,U.delta),Zi()),O(X,Ce).catch(v=>Vt(v,12)?v:Vt(v,2)?(R(v.to,X).then(k=>{Vt(k,20)&&!U.delta&&U.type===zs.pop&&i.go(-1,!1)}).catch(Ls),Promise.reject()):(U.delta&&i.go(-U.delta,!1),Y(v,X,Ce))).then(v=>{v=v||L(X,Ce,!1),v&&(U.delta&&!Vt(v,8)?i.go(-U.delta,!1):U.type===zs.pop&&Vt(v,20)&&i.go(-1,!1)),W(X,Ce,v)}).catch(Ls)}))}let ke=_s(),K=_s(),$;function Y(x,G,U){Re(x);const X=K.list();return X.length?X.forEach(he=>he(x,G,U)):console.error(x),Promise.reject(x)}function pe(){return $&&o.value!==Ht?Promise.resolve():new Promise((x,G)=>{ke.add([x,G])})}function Re(x){return $||($=!x,ae(),ke.list().forEach(([G,U])=>x?U(x):G()),ke.reset()),x}function Ne(x,G,U,X){const{scrollBehavior:he}=e;if(!jt||!he)return Promise.resolve();const Ce=!U&&Z1(yo(x.fullPath,0))||(X||!U)&&history.state&&history.state.scroll||null;return Xt().then(()=>he(x,G,Ce)).then(v=>v&&Q1(v)).catch(v=>Y(v,x,G))}const ye=x=>i.go(x);let ht;const Nt=new Set,en={currentRoute:o,listening:!0,addRoute:h,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:_,resolve:y,options:e,push:w,replace:P,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:r.add,beforeResolve:a.add,afterEach:l.add,onError:K.add,isReady:pe,install(x){const G=this;x.component("RouterLink",bm),x.component("RouterView",Sm),x.config.globalProperties.$router=G,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>un(o)}),jt&&!ht&&o.value===Ht&&(ht=!0,w(i.location).catch(he=>{}));const U={};for(const he in Ht)Object.defineProperty(U,he,{get:()=>o.value[he],enumerable:!0});x.provide(er,G),x.provide(Ka,yu(U)),x.provide(Zr,o);const X=x.unmount;Nt.add(x),x.unmount=function(){Nt.delete(x),Nt.size<1&&(u=Ht,J&&J(),J=null,o.value=Ht,ht=!1,$=!1),X()},jt&&xm(x,G,t)}};function gt(x){return x.reduce((G,U)=>G.then(()=>V(U)),Promise.resolve())}return en}function Mm(e,t){const n=[],s=[],i=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const l=t.matched[a];l&&(e.matched.find(u=>hn(u,l))?s.push(l):n.push(l));const o=e.matched[a];o&&(t.matched.find(u=>hn(u,o))||i.push(o))}return[n,s,i]}function Jt(){return xe(er)}function Ft(e){return xe(Ka)}var Wa=Symbol(""),Tt=()=>{const e=xe(Wa);if(!e)throw new Error("useClientData() is called without provider.");return e},Vm=()=>Tt().pageComponent,De=()=>Tt().pageData,_e=()=>Tt().pageFrontmatter,$m=()=>Tt().pageHead,Ya=()=>Tt().pageLang,zm=()=>Tt().pageLayout,tt=()=>Tt().routeLocale,qp=()=>Tt().routePath,Hm=()=>Tt().routes,Kp=()=>Tt().siteData,ti=()=>Tt().siteLocaleData,Um=Symbol(""),ta=He(m1),Yn=He(_1),Wp=(e,t)=>{const n=c1(e,t);if(Yn.value[n])return n;const s=encodeURI(n);if(Yn.value[s])return s;const i=ta.value[n]||ta.value[s];return i||n},yt=(e,t)=>{const{pathname:n,hashAndQueries:s}=Ap(e),i=Wp(n,t),r=i+s;return Yn.value[i]?{...Yn.value[i],path:r,notFound:!1}:{...Yn.value["/404.html"],path:r,notFound:!0}},jm=(e,t)=>{const{pathname:n,hashAndQueries:s}=Ap(e);return Wp(n,t)+s},Gm=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const t=e.currentTarget.getAttribute("target");if(t!=null&&t.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},Ve=z({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(e,{slots:t}){const n=Jt(),s=Ft(),i=A(()=>e.to.startsWith("#")||e.to.startsWith("?")?e.to:`/${jm(e.to,s.path).substring(1)}`);return()=>c("a",{class:["route-link",{[e.activeClass]:e.active}],href:i.value,onClick:(r={})=>{Gm(r)&&n.push(e.to).catch()}},t.default())}}),qm=z({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=ps(e,"config"),s=Ft(),i=Kp(),r=A(()=>ei(n.value.link)),a=A(()=>n.value.target||(r.value?"_blank":void 0)),l=A(()=>a.value==="_blank"),o=A(()=>!r.value&&!l.value),u=A(()=>n.value.rel||(l.value?"noopener noreferrer":null)),p=A(()=>n.value.ariaLabel??n.value.text),d=A(()=>{if(n.value.exact)return!1;const h=Object.keys(i.value.locales);return h.length?h.every(m=>m!==n.value.link):n.value.link!=="/"}),f=A(()=>o.value?n.value.activeMatch?(n.value.activeMatch instanceof RegExp?n.value.activeMatch:new RegExp(n.value.activeMatch,"u")).test(s.path):d.value?s.path.startsWith(n.value.link):s.path===n.value.link:!1);return()=>{const{before:h,after:m,default:_}=t,b=(_==null?void 0:_(n.value))??[h==null?void 0:h(n.value),n.value.text,m==null?void 0:m(n.value)];return o.value?c(Ve,{class:"auto-link",to:n.value.link,active:f.value,"aria-label":p.value},()=>b):c("a",{class:"auto-link external-link",href:n.value.link,"aria-label":p.value,rel:u.value,target:a.value},b)}}}),Yp=z({name:"ClientOnly",setup(e,t){const n=ee(!1);return Ie(()=>{n.value=!0}),()=>{var s,i;return n.value?(i=(s=t.slots).default)==null?void 0:i.call(s):null}}}),Xp=z({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(e){const t=Vm(),n=A(()=>{if(!e.path)return t.value;const s=yt(e.path);return Tg(async()=>s.loader().then(({comp:i})=>i))});return()=>c(n.value)}}),Km="Layout",Wm="en-US",En=Ys({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageHead:(e,t,n)=>{const s=Te(t.description)?t.description:n.description,i=[...Array.isArray(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:s}]];return g1(i)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||Wm,resolvePageLayout:(e,t)=>{const n=Te(e.frontmatter.layout)?e.frontmatter.layout:Km;if(!t[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return t[n]},resolveRouteLocale:(e,t)=>u1(e,decodeURI(t)),resolveSiteLocaleData:({base:e,locales:t,...n},s)=>{var i;return{...n,...t[s],head:[...((i=t[s])==null?void 0:i.head)??[],...n.head]}}}),Rt=(e={})=>e,we=e=>Fn(e)?e:`/${wp(e)}`;const Ym=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Xm=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function Rn(e){return ru()?(xh(e),!0):!1}function et(e){return typeof e=="function"?e():un(e)}const ni=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Qm=Object.prototype.toString,Jm=e=>Qm.call(e)==="[object Object]",ss=()=>{},Fo=Zm();function Zm(){var e,t;return ni&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Xa(e,t){function n(...s){return new Promise((i,r)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(i).catch(r)})}return n}const Qp=e=>e();function e_(e,t={}){let n,s,i=ss;const r=l=>{clearTimeout(l),i(),i=ss};return l=>{const o=et(e),u=et(t.maxWait);return n&&r(n),o<=0||u!==void 0&&u<=0?(s&&(r(s),s=null),Promise.resolve(l())):new Promise((p,d)=>{i=t.rejectOnCancel?d:p,u&&!s&&(s=setTimeout(()=>{n&&r(n),s=null,p(l())},u)),n=setTimeout(()=>{s&&r(s),s=null,p(l())},o)})}}function t_(...e){let t=0,n,s=!0,i=ss,r,a,l,o,u;!Pe(e[0])&&typeof e[0]=="object"?{delay:a,trailing:l=!0,leading:o=!0,rejectOnCancel:u=!1}=e[0]:[a,l=!0,o=!0,u=!1]=e;const p=()=>{n&&(clearTimeout(n),n=void 0,i(),i=ss)};return f=>{const h=et(a),m=Date.now()-t,_=()=>r=f();return p(),h<=0?(t=Date.now(),_()):(m>h&&(o||!s)?(t=Date.now(),_()):l&&(r=new Promise((b,y)=>{i=u?y:b,n=setTimeout(()=>{t=Date.now(),s=!0,b(_()),p()},Math.max(0,h-m))})),!o&&!n&&(n=setTimeout(()=>s=!0,h)),s=!1,r)}}function n_(e=Qp){const t=ee(!0);function n(){t.value=!1}function s(){t.value=!0}const i=(...r)=>{t.value&&e(...r)};return{isActive:mn(t),pause:n,resume:s,eventFilter:i}}function s_(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const s=t;t=void 0,s&&await s},n}function i_(e){return Pn()}function r_(...e){if(e.length!==1)return ps(...e);const t=e[0];return typeof t=="function"?mn(Eu(()=>({get:t,set:ss}))):ee(t)}function a_(e,t=200,n={}){return Xa(e_(t,n),e)}function l_(e,t=200,n=!1,s=!0,i=!1){return Xa(t_(t,n,s,i),e)}function o_(e,t,n={}){const{eventFilter:s=Qp,...i}=n;return de(e,Xa(s,t),i)}function c_(e,t,n={}){const{eventFilter:s,...i}=n,{eventFilter:r,pause:a,resume:l,isActive:o}=n_(s);return{stop:o_(e,t,{...i,eventFilter:r}),pause:a,resume:l,isActive:o}}function tr(e,t=!0,n){i_()?Ie(e,n):t?e():Xt(e)}function u_(e,t,n={}){const{immediate:s=!0}=n,i=ee(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function l(){i.value=!1,a()}function o(...u){a(),i.value=!0,r=setTimeout(()=>{i.value=!1,r=null,e(...u)},et(t))}return s&&(i.value=!0,ni&&o()),Rn(l),{isPending:mn(i),start:o,stop:l}}function na(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,i=Pe(e),r=ee(e);function a(l){if(arguments.length)return r.value=l,r.value;{const o=et(n);return r.value=r.value===o?et(s):o,r.value}}return i?a:[r,a]}const xt=ni?window:void 0,Jp=ni?window.document:void 0,Zp=ni?window.navigator:void 0;function qt(e){var t;const n=et(e);return(t=n==null?void 0:n.$el)!=null?t:n}function ze(...e){let t,n,s,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,i]=e,t=xt):[t,n,s,i]=e,!t)return ss;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const r=[],a=()=>{r.forEach(p=>p()),r.length=0},l=(p,d,f,h)=>(p.addEventListener(d,f,h),()=>p.removeEventListener(d,f,h)),o=de(()=>[qt(t),et(i)],([p,d])=>{if(a(),!p)return;const f=Jm(d)?{...d}:d;r.push(...n.flatMap(h=>s.map(m=>l(p,h,m,f))))},{immediate:!0,flush:"post"}),u=()=>{o(),a()};return Rn(u),u}function p_(){const e=ee(!1),t=Pn();return t&&Ie(()=>{e.value=!0},t),e}function si(e){const t=p_();return A(()=>(t.value,!!e()))}function Qa(e,t={}){const{window:n=xt}=t,s=si(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const r=ee(!1),a=u=>{r.value=u.matches},l=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",a):i.removeListener(a))},o=$a(()=>{s.value&&(l(),i=n.matchMedia(et(e)),"addEventListener"in i?i.addEventListener("change",a):i.addListener(a),r.value=i.matches)});return Rn(()=>{o(),l(),i=void 0}),r}function Ro(e,t={}){const{controls:n=!1,navigator:s=Zp}=t,i=si(()=>s&&"permissions"in s),r=He(),a=typeof e=="string"?{name:e}:e,l=He(),o=()=>{var p,d;l.value=(d=(p=r.value)==null?void 0:p.state)!=null?d:"prompt"};ze(r,"change",o);const u=s_(async()=>{if(i.value){if(!r.value)try{r.value=await s.permissions.query(a)}catch{r.value=void 0}finally{o()}if(n)return oe(r.value)}});return u(),n?{state:l,isSupported:i,query:u}:l}function d_(e={}){const{navigator:t=Zp,read:n=!1,source:s,copiedDuring:i=1500,legacy:r=!1}=e,a=si(()=>t&&"clipboard"in t),l=Ro("clipboard-read"),o=Ro("clipboard-write"),u=A(()=>a.value||r),p=ee(""),d=ee(!1),f=u_(()=>d.value=!1,i);function h(){a.value&&y(l.value)?t.clipboard.readText().then(E=>{p.value=E}):p.value=b()}u.value&&n&&ze(["copy","cut"],h);async function m(E=et(s)){u.value&&E!=null&&(a.value&&y(o.value)?await t.clipboard.writeText(E):_(E),p.value=E,d.value=!0,f.start())}function _(E){const g=document.createElement("textarea");g.value=E??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function b(){var E,g,w;return(w=(g=(E=document==null?void 0:document.getSelection)==null?void 0:E.call(document))==null?void 0:g.toString())!=null?w:""}function y(E){return E==="granted"||E==="prompt"}return{isSupported:u,text:p,copied:d,copy:m}}const ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yi="__vueuse_ssr_handlers__",f_=h_();function h_(){return yi in ki||(ki[yi]=ki[yi]||{}),ki[yi]}function g_(e,t){return f_[e]||t}function v_(e){return Qa("(prefers-color-scheme: dark)",e)}function m_(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const __={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},No="vueuse-storage";function Ja(e,t,n,s={}){var i;const{flush:r="pre",deep:a=!0,listenToStorageChanges:l=!0,writeDefaults:o=!0,mergeDefaults:u=!1,shallow:p,window:d=xt,eventFilter:f,onError:h=O=>{console.error(O)},initOnMounted:m}=s,_=(p?He:ee)(typeof t=="function"?t():t);if(!n)try{n=g_("getDefaultStorage",()=>{var O;return(O=xt)==null?void 0:O.localStorage})()}catch(O){h(O)}if(!n)return _;const b=et(t),y=m_(b),E=(i=s.serializer)!=null?i:__[y],{pause:g,resume:w}=c_(_,()=>M(_.value),{flush:r,deep:a,eventFilter:f});d&&l&&tr(()=>{n instanceof Storage?ze(d,"storage",Q):ze(d,No,V),m&&Q()}),m||Q();function P(O,W){if(d){const L={key:e,oldValue:O,newValue:W,storageArea:n};d.dispatchEvent(n instanceof Storage?new StorageEvent("storage",L):new CustomEvent(No,{detail:L}))}}function M(O){try{const W=n.getItem(e);if(O==null)P(W,null),n.removeItem(e);else{const L=E.write(O);W!==L&&(n.setItem(e,L),P(W,L))}}catch(W){h(W)}}function R(O){const W=O?O.newValue:n.getItem(e);if(W==null)return o&&b!=null&&n.setItem(e,E.write(b)),b;if(!O&&u){const L=E.read(W);return typeof u=="function"?u(L,b):y==="object"&&!Array.isArray(L)?{...b,...L}:L}else return typeof W!="string"?W:E.read(W)}function Q(O){if(!(O&&O.storageArea!==n)){if(O&&O.key==null){_.value=b;return}if(!(O&&O.key!==e)){g();try{(O==null?void 0:O.newValue)!==E.write(_.value)&&(_.value=R(O))}catch(W){h(W)}finally{O?Xt(w):w()}}}}function V(O){Q(O.detail)}return _}function k_(e,t,n={}){const{window:s=xt,...i}=n;let r;const a=si(()=>s&&"ResizeObserver"in s),l=()=>{r&&(r.disconnect(),r=void 0)},o=A(()=>{const d=et(e);return Array.isArray(d)?d.map(f=>qt(f)):[qt(d)]}),u=de(o,d=>{if(l(),a.value&&s){r=new ResizeObserver(t);for(const f of d)f&&r.observe(f,i)}},{immediate:!0,flush:"post"}),p=()=>{l(),u()};return Rn(p),{isSupported:a,stop:p}}function y_(e,t={width:0,height:0},n={}){const{window:s=xt,box:i="content-box"}=n,r=A(()=>{var d,f;return(f=(d=qt(e))==null?void 0:d.namespaceURI)==null?void 0:f.includes("svg")}),a=ee(t.width),l=ee(t.height),{stop:o}=k_(e,([d])=>{const f=i==="border-box"?d.borderBoxSize:i==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(s&&r.value){const h=qt(e);if(h){const m=h.getBoundingClientRect();a.value=m.width,l.value=m.height}}else if(f){const h=Array.isArray(f)?f:[f];a.value=h.reduce((m,{inlineSize:_})=>m+_,0),l.value=h.reduce((m,{blockSize:_})=>m+_,0)}else a.value=d.contentRect.width,l.value=d.contentRect.height},n);tr(()=>{const d=qt(e);d&&(a.value="offsetWidth"in d?d.offsetWidth:t.width,l.value="offsetHeight"in d?d.offsetHeight:t.height)});const u=de(()=>qt(e),d=>{a.value=d?t.width:0,l.value=d?t.height:0});function p(){o(),u()}return{width:a,height:l,stop:p}}const Mo=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function nr(e,t={}){const{document:n=Jp,autoExit:s=!1}=t,i=A(()=>{var y;return(y=qt(e))!=null?y:n==null?void 0:n.querySelector("html")}),r=ee(!1),a=A(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(y=>n&&y in n||i.value&&y in i.value)),l=A(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(y=>n&&y in n||i.value&&y in i.value)),o=A(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(y=>n&&y in n||i.value&&y in i.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(y=>n&&y in n),p=si(()=>i.value&&n&&a.value!==void 0&&l.value!==void 0&&o.value!==void 0),d=()=>u?(n==null?void 0:n[u])===i.value:!1,f=()=>{if(o.value){if(n&&n[o.value]!=null)return n[o.value];{const y=i.value;if((y==null?void 0:y[o.value])!=null)return!!y[o.value]}}return!1};async function h(){if(!(!p.value||!r.value)){if(l.value)if((n==null?void 0:n[l.value])!=null)await n[l.value]();else{const y=i.value;(y==null?void 0:y[l.value])!=null&&await y[l.value]()}r.value=!1}}async function m(){if(!p.value||r.value)return;f()&&await h();const y=i.value;a.value&&(y==null?void 0:y[a.value])!=null&&(await y[a.value](),r.value=!0)}async function _(){await(r.value?h():m())}const b=()=>{const y=f();(!y||y&&d())&&(r.value=y)};return ze(n,Mo,b,!1),ze(()=>qt(i),Mo,b,!1),s&&Rn(h),{isSupported:p,isFullscreen:r,enter:m,exit:h,toggle:_}}function Or(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function b_(e,t,n={}){const{window:s=xt}=n;return Ja(e,t,s==null?void 0:s.localStorage,n)}function A_(e={}){const{window:t=xt}=e;if(!t)return ee(["en"]);const n=t.navigator,s=ee(n.languages);return ze(t,"languagechange",()=>{s.value=n.languages}),s}function ed(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:ed(n)}}function E_(e){const t=e||window.event,n=t.target;return ed(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const Ir=new WeakMap;function Za(e,t=!1){const n=ee(t);let s=null,i="";de(r_(e),l=>{const o=Or(et(l));if(o){const u=o;if(Ir.get(u)||Ir.set(u,u.style.overflow),u.style.overflow!=="hidden"&&(i=u.style.overflow),u.style.overflow==="hidden")return n.value=!0;if(n.value)return u.style.overflow="hidden"}},{immediate:!0});const r=()=>{const l=Or(et(e));!l||n.value||(Fo&&(s=ze(l,"touchmove",o=>{E_(o)},{passive:!1})),l.style.overflow="hidden",n.value=!0)},a=()=>{const l=Or(et(e));!l||!n.value||(Fo&&(s==null||s()),l.style.overflow=i,Ir.delete(l),n.value=!1)};return Rn(a),A({get(){return n.value},set(l){l?r():a()}})}function w_(e,t,n={}){const{window:s=xt}=n;return Ja(e,t,s==null?void 0:s.sessionStorage,n)}let S_=0;function C_(e,t={}){const n=ee(!1),{document:s=Jp,immediate:i=!0,manual:r=!1,id:a=`vueuse_styletag_${++S_}`}=t,l=ee(e);let o=()=>{};const u=()=>{if(!s)return;const d=s.getElementById(a)||s.createElement("style");d.isConnected||(d.id=a,t.media&&(d.media=t.media),s.head.appendChild(d)),!n.value&&(o=de(l,f=>{d.textContent=f},{immediate:!0}),n.value=!0)},p=()=>{!s||!n.value||(o(),s.head.removeChild(s.getElementById(a)),n.value=!1)};return i&&!r&&tr(u),r||Rn(p),{id:a,css:l,unload:p,load:u,isLoaded:mn(n)}}function x_(e={}){const{window:t=xt,behavior:n="auto"}=e;if(!t)return{x:ee(0),y:ee(0)};const s=ee(t.scrollX),i=ee(t.scrollY),r=A({get(){return s.value},set(l){scrollTo({left:l,behavior:n})}}),a=A({get(){return i.value},set(l){scrollTo({top:l,behavior:n})}});return ze(t,"scroll",()=>{s.value=t.scrollX,i.value=t.scrollY},{capture:!1,passive:!0}),{x:r,y:a}}function T_(e={}){const{window:t=xt,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:r=!0,type:a="inner"}=e,l=ee(n),o=ee(s),u=()=>{t&&(a==="outer"?(l.value=t.outerWidth,o.value=t.outerHeight):r?(l.value=t.innerWidth,o.value=t.innerHeight):(l.value=t.document.documentElement.clientWidth,o.value=t.document.documentElement.clientHeight))};if(u(),tr(u),ze("resize",u,{passive:!0}),i){const p=Qa("(orientation: portrait)");de(p,()=>u())}return{width:l,height:o}}const Vo=(e,t)=>{var s;const n=(s=Pn())==null?void 0:s.appContext.components;return n?e in n||Ke(e)in n||us(Ke(e))in n:!1},{keys:B_}=Object,td=({type:e="info",text:t="",vertical:n,color:s,bgColor:i},{slots:r})=>{var a;return c("span",{class:["vp-badge",e,{diy:s||i}],style:{verticalAlign:n??!1,backgroundColor:i??!1,color:s??!1}},((a=r.default)==null?void 0:a.call(r))??t)};td.displayName="Badge";var O_=z({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const t=A(()=>{const s=["font-icon icon"],i=`iconfont icon-${e.icon}`;return s.push(i),s}),n=A(()=>{const s={};return e.color&&(s.color=e.color),e.size&&(s["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),B_(s).length?s:null});return()=>e.icon?c("span",{key:e.icon,class:t.value,style:n.value}):null}});const I_={enhance:({app:e})=>{Vo("Badge")||e.component("Badge",td),Vo("FontIcon")||e.component("FontIcon",O_)},setup:()=>{C_(`@import url("//at.alicdn.com/t/c/font_4062992_tb8s0spt8xq.css");
`)},rootComponents:[]},D_=Object.freeze(Object.defineProperty({__proto__:null,default:I_},Symbol.toStringTag,{value:"Module"})),$o=async(e,t)=>{const{path:n,query:s}=e.currentRoute.value,{scrollBehavior:i}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:n,query:s,hash:t}),e.options.scrollBehavior=i},L_=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:s=5})=>{const i=Jt();ze("scroll",a_(()=>{var m,_;const a=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(a-0)<s){$o(i,"");return}const o=window.innerHeight+a,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),p=Math.abs(u-o)<s,d=Array.from(document.querySelectorAll(e)),h=Array.from(document.querySelectorAll(t)).filter(b=>d.some(y=>y.hash===b.hash));for(let b=0;b<h.length;b++){const y=h[b],E=h[b+1],g=a>=(((m=y.parentElement)==null?void 0:m.offsetTop)??0)-s,w=!E||a<(((_=E.parentElement)==null?void 0:_.offsetTop)??0)-s;if(!(g&&w))continue;const M=decodeURIComponent(i.currentRoute.value.hash),R=decodeURIComponent(y.hash);if(M===R)return;if(p){for(let Q=b+1;Q<h.length;Q++)if(M===decodeURIComponent(h[Q].hash))return}$o(i,R);return}},n))},P_=".vp-sidebar-link, .vp-toc-link",F_=".header-anchor",R_=200,N_=5,M_=Rt({setup(){L_({headerLinkSelector:P_,headerAnchorSelector:F_,delay:R_,offset:N_})}}),V_=Object.freeze(Object.defineProperty({__proto__:null,default:M_},Symbol.toStringTag,{value:"Module"})),Kt=(e,t)=>{var s;const n=(s=(t==null?void 0:t._instance)??Pn())==null?void 0:s.appContext.components;return n?e in n||Ke(e)in n||us(Ke(e))in n:!1},$_=e=>{const t=tt();return A(()=>e[t.value]??{})},Dr=e=>typeof e=="number",{isArray:sa}=Array,Vi=(e,t)=>Te(e)&&e.startsWith(t),z_=(e,t)=>Te(e)&&e.endsWith(t),{entries:Nn}=Object,{fromEntries:H_}=Object,{keys:Dn}=Object,el=e=>{if(e){if(typeof e=="number")return new Date(e);const t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},sr=e=>Vi(e,"/");let nd=e=>Te(e.title)?{title:e.title}:null;const sd=Symbol(""),U_=e=>{nd=e},j_=()=>xe(sd),G_=e=>{e.provide(sd,nd)};var q_={"/":{title:"目录",empty:"暂无目录"}},K_=z({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){const t=j_(),n=$_(q_),s=De(),i=Hm(),r=Kp(),a=He(Nn(i.value).map(([o,{meta:u}])=>{const p=t(u);if(!p)return null;const d=o.split("/").length;return{level:z_(o,"/")?d-2:d-1,base:o.replace(/\/[^/]+\/?$/,"/"),path:o,...p}}).filter(o=>Ji(o)&&Te(o.title))),l=A(()=>{const o=e.base?v1(Ep(e.base)):s.value.path.replace(/\/[^/]+$/,"/"),u=o.split("/").length-2,p=[];return a.value.filter(({level:d,path:f})=>{if(!Vi(f,o)||f===o)return!1;if(o==="/"){const h=Dn(r.value.locales).filter(m=>m!=="/");if(f==="/404.html"||h.some(m=>Vi(f,m)))return!1}return d-u<=e.level}).sort(({title:d,level:f,order:h},{title:m,level:_,order:b})=>f-_||(Dr(h)?Dr(b)?h>0?b>0?h-b:-1:b<0?h-b:1:h:Dr(b)?b:d.localeCompare(m))).forEach(d=>{var m;const{base:f,level:h}=d;switch(h-u){case 1:{p.push(d);break}case 2:{const _=p.find(b=>b.path===f);_&&(_.children??(_.children=[])).push(d);break}default:{const _=p.find(b=>b.path===f.replace(/\/[^/]+\/$/,"/"));if(_){const b=(m=_.children)==null?void 0:m.find(y=>y.path===f);b&&(b.children??(b.children=[])).push(d)}}}}),p});return()=>{const o=l.value.some(u=>u.children);return c("div",{class:["vp-catalog",{index:e.index}]},[e.hideHeading?null:c("h2",{class:"vp-catalog-main-title"},n.value.title),l.value.length?c(e.index?"ol":"ul",{class:["vp-catalog-list",{deep:o}]},l.value.map(({children:u=[],title:p,path:d,content:f})=>{const h=c(Ve,{class:"vp-catalog-title",to:d},()=>f?c(f):p);return c("li",{class:"vp-catalog-item"},o?[c("h3",{id:p,class:["vp-catalog-child-title",{"has-children":u.length}]},[c("a",{href:`#${p}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),h]),u.length?c(e.index?"ol":"ul",{class:"vp-child-catalogs"},u.map(({children:m=[],content:_,path:b,title:y})=>c("li",{class:"vp-child-catalog"},[c("div",{class:["vp-catalog-sub-title",{"has-children":m.length}]},[c("a",{href:`#${y}`,class:"vp-catalog-header-anchor"},"#"),c(Ve,{class:"vp-catalog-title",to:b},()=>_?c(_):y)]),m.length?c(e.index?"ol":"div",{class:e.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},m.map(({content:E,path:g,title:w})=>e.index?c("li",{class:"vp-sub-catalog"},c(Ve,{to:g},()=>E?c(E):w)):c(Ve,{class:"vp-sub-catalog-link",to:g},()=>E?c(E):w))):null]))):null]:c("div",{class:"vp-catalog-child-title"},h))})):c("p",{class:"vp-empty-catalog"},n.value.empty)])}}}),W_=Rt({enhance:({app:e})=>{G_(e),Kt("Catalog",e)||e.component("Catalog",K_)}});const Y_=Object.freeze(Object.defineProperty({__proto__:null,default:W_},Symbol.toStringTag,{value:"Module"})),X_=e=>{const t=tt();return A(()=>e[t.value]??{})};var Q_={"/":{backToTop:"返回顶部"}};const J_=z({name:"BackToTop",setup(){const e=_e(),t=X_(Q_),n=He(),{height:s}=y_(n),{height:i}=T_(),{y:r}=x_(),a=A(()=>e.value.backToTop!==!1&&r.value>100),l=A(()=>r.value/(s.value-i.value)*100);return Ie(()=>{n.value=document.body}),()=>c(es,{name:"back-to-top"},()=>a.value?c("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[c("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":l.value},c("svg",c("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*l.value*.48} ${Math.PI*(100-l.value)*.48}`}))),c("div",{class:"back-to-top-icon"})]):null)}}),Z_=Rt({rootComponents:[J_]}),e0=Object.freeze(Object.defineProperty({__proto__:null,default:Z_},Symbol.toStringTag,{value:"Module"})),t0=e=>typeof e<"u";/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const zo=(e,t)=>{e.classList.add(t)},Ho=(e,t)=>{e.classList.remove(t)},n0=e=>{var t;(t=e==null?void 0:e.parentNode)==null||t.removeChild(e)},Lr=(e,t,n)=>e<t?t:e>n?n:e,Uo=e=>(-1+e)*100,s0=(()=>{const e=[],t=()=>{const n=e.shift();n&&n(t)};return n=>{e.push(n),e.length===1&&t()}})(),i0=e=>e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(t,n)=>n.toUpperCase()),bi=(()=>{const e=["Webkit","O","Moz","ms"],t={},n=r=>{const{style:a}=document.body;if(r in a)return r;const l=r.charAt(0).toUpperCase()+r.slice(1);let o=e.length;for(;o--;){const u=`${e[o]}${l}`;if(u in a)return u}return r},s=r=>{const a=i0(r);return t[a]??(t[a]=n(a))},i=(r,a,l)=>{r.style[s(a)]=l};return(r,a)=>{for(const l in a){const o=a[l];Object.hasOwn(a,l)&&t0(o)&&i(r,l,o)}}})(),$t={minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},Le={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:e=>{const{speed:t,easing:n}=$t,s=Le.isStarted(),i=Lr(e,$t.minimum,1);Le.percent=i===1?null:i;const r=Le.render(!s),a=r.querySelector($t.barSelector);return r.offsetWidth,s0(l=>{bi(a,{transform:`translate3d(${Uo(i)}%,0,0)`,transition:`all ${t}ms ${n}`}),i===1?(bi(r,{transition:"none",opacity:"1"}),r.offsetWidth,setTimeout(()=>{bi(r,{transition:`all ${t}ms linear`,opacity:"0"}),setTimeout(()=>{Le.remove(),l()},t)},t)):setTimeout(()=>{l()},t)}),Le},isStarted:()=>typeof Le.percent=="number",start:()=>{Le.percent||Le.set(0);const e=()=>{setTimeout(()=>{Le.percent&&(Le.trickle(),e())},$t.trickleSpeed)};return e(),Le},done:e=>!e&&!Le.percent?Le:Le.increase(.3+.5*Math.random()).set(1),increase:e=>{let{percent:t}=Le;return t?(t=Lr(t+(typeof e=="number"?e:(1-t)*Lr(Math.random()*t,.1,.95)),0,.994),Le.set(t)):Le.start()},trickle:()=>Le.increase(Math.random()*$t.trickleRate),render:e=>{if(Le.isRendered())return document.getElementById("nprogress");zo(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=$t.template;const n=t.querySelector($t.barSelector),s=document.querySelector($t.parent),i=e?"-100":Uo(Le.percent??0);return bi(n,{transition:"all 0 linear",transform:`translate3d(${i}%,0,0)`}),s&&(s!==document.body&&zo(s,"nprogress-custom-parent"),s.appendChild(t)),t},remove:()=>{Ho(document.documentElement,"nprogress-busy"),Ho(document.querySelector($t.parent),"nprogress-custom-parent"),n0(document.getElementById("nprogress"))}},r0=()=>{Ie(()=>{const e=Jt(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||Le.start()}),e.afterEach(n=>{t.add(n.path),Le.done()})})},a0=Rt({setup(){r0()}}),l0=Object.freeze(Object.defineProperty({__proto__:null,default:a0},Symbol.toStringTag,{value:"Module"}));var o0=Object.create,id=Object.defineProperty,c0=Object.getOwnPropertyDescriptor,tl=Object.getOwnPropertyNames,u0=Object.getPrototypeOf,p0=Object.prototype.hasOwnProperty,d0=(e,t)=>function(){return e&&(t=(0,e[tl(e)[0]])(e=0)),t},f0=(e,t)=>function(){return t||(0,e[tl(e)[0]])((t={exports:{}}).exports,t),t.exports},h0=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of tl(t))!p0.call(e,i)&&i!==n&&id(e,i,{get:()=>t[i],enumerable:!(s=c0(t,i))||s.enumerable});return e},g0=(e,t,n)=>(n=e!=null?o0(u0(e)):{},h0(id(n,"default",{value:e,enumerable:!0}),e)),ii=d0({"../../node_modules/.pnpm/tsup@8.3.0_@microsoft+api-extractor@7.43.0_@types+node@20.16.14__@swc+core@1.5.29_jiti@2.0.0__utvtwgyeu6xd57udthcnogp47u/node_modules/tsup/assets/esm_shims.js"(){}}),v0=f0({"../../node_modules/.pnpm/rfdc@1.4.1/node_modules/rfdc/index.js"(e,t){ii(),t.exports=s;function n(r){return r instanceof Buffer?Buffer.from(r):new r.constructor(r.buffer.slice(),r.byteOffset,r.length)}function s(r){if(r=r||{},r.circles)return i(r);const a=new Map;if(a.set(Date,d=>new Date(d)),a.set(Map,(d,f)=>new Map(o(Array.from(d),f))),a.set(Set,(d,f)=>new Set(o(Array.from(d),f))),r.constructorHandlers)for(const d of r.constructorHandlers)a.set(d[0],d[1]);let l=null;return r.proto?p:u;function o(d,f){const h=Object.keys(d),m=new Array(h.length);for(let _=0;_<h.length;_++){const b=h[_],y=d[b];typeof y!="object"||y===null?m[b]=y:y.constructor!==Object&&(l=a.get(y.constructor))?m[b]=l(y,f):ArrayBuffer.isView(y)?m[b]=n(y):m[b]=f(y)}return m}function u(d){if(typeof d!="object"||d===null)return d;if(Array.isArray(d))return o(d,u);if(d.constructor!==Object&&(l=a.get(d.constructor)))return l(d,u);const f={};for(const h in d){if(Object.hasOwnProperty.call(d,h)===!1)continue;const m=d[h];typeof m!="object"||m===null?f[h]=m:m.constructor!==Object&&(l=a.get(m.constructor))?f[h]=l(m,u):ArrayBuffer.isView(m)?f[h]=n(m):f[h]=u(m)}return f}function p(d){if(typeof d!="object"||d===null)return d;if(Array.isArray(d))return o(d,p);if(d.constructor!==Object&&(l=a.get(d.constructor)))return l(d,p);const f={};for(const h in d){const m=d[h];typeof m!="object"||m===null?f[h]=m:m.constructor!==Object&&(l=a.get(m.constructor))?f[h]=l(m,p):ArrayBuffer.isView(m)?f[h]=n(m):f[h]=p(m)}return f}}function i(r){const a=[],l=[],o=new Map;if(o.set(Date,h=>new Date(h)),o.set(Map,(h,m)=>new Map(p(Array.from(h),m))),o.set(Set,(h,m)=>new Set(p(Array.from(h),m))),r.constructorHandlers)for(const h of r.constructorHandlers)o.set(h[0],h[1]);let u=null;return r.proto?f:d;function p(h,m){const _=Object.keys(h),b=new Array(_.length);for(let y=0;y<_.length;y++){const E=_[y],g=h[E];if(typeof g!="object"||g===null)b[E]=g;else if(g.constructor!==Object&&(u=o.get(g.constructor)))b[E]=u(g,m);else if(ArrayBuffer.isView(g))b[E]=n(g);else{const w=a.indexOf(g);w!==-1?b[E]=l[w]:b[E]=m(g)}}return b}function d(h){if(typeof h!="object"||h===null)return h;if(Array.isArray(h))return p(h,d);if(h.constructor!==Object&&(u=o.get(h.constructor)))return u(h,d);const m={};a.push(h),l.push(m);for(const _ in h){if(Object.hasOwnProperty.call(h,_)===!1)continue;const b=h[_];if(typeof b!="object"||b===null)m[_]=b;else if(b.constructor!==Object&&(u=o.get(b.constructor)))m[_]=u(b,d);else if(ArrayBuffer.isView(b))m[_]=n(b);else{const y=a.indexOf(b);y!==-1?m[_]=l[y]:m[_]=d(b)}}return a.pop(),l.pop(),m}function f(h){if(typeof h!="object"||h===null)return h;if(Array.isArray(h))return p(h,f);if(h.constructor!==Object&&(u=o.get(h.constructor)))return u(h,f);const m={};a.push(h),l.push(m);for(const _ in h){const b=h[_];if(typeof b!="object"||b===null)m[_]=b;else if(b.constructor!==Object&&(u=o.get(b.constructor)))m[_]=u(b,f);else if(ArrayBuffer.isView(b))m[_]=n(b);else{const y=a.indexOf(b);y!==-1?m[_]=l[y]:m[_]=f(b)}}return a.pop(),l.pop(),m}}}});ii();ii();ii();var rd=typeof navigator<"u",q=typeof window<"u"?window:typeof globalThis<"u"?globalThis:typeof global<"u"?global:{};typeof q.chrome<"u"&&q.chrome.devtools;rd&&(q.self,q.top);var jo;typeof navigator<"u"&&((jo=navigator.userAgent)==null||jo.toLowerCase().includes("electron"));ii();var m0=g0(v0()),_0=/(?:^|[-_/])(\w)/g;function k0(e,t){return t?t.toUpperCase():""}function y0(e){return e&&`${e}`.replace(_0,k0)}function b0(e,t){let n=e.replace(/^[a-z]:/i,"").replace(/\\/g,"/");n.endsWith(`index${t}`)&&(n=n.replace(`/index${t}`,t));const s=n.lastIndexOf("/"),i=n.substring(s+1);{const r=i.lastIndexOf(t);return i.substring(0,r)}}var Go=(0,m0.default)({circles:!0});const A0={trailing:!0};function is(e,t=25,n={}){if(n={...A0,...n},!Number.isFinite(t))throw new TypeError("Expected `wait` to be a finite number");let s,i,r=[],a,l;const o=(u,p)=>(a=E0(e,u,p),a.finally(()=>{if(a=null,n.trailing&&l&&!i){const d=o(u,l);return l=null,d}}),a);return function(...u){return a?(n.trailing&&(l=u),a):new Promise(p=>{const d=!i&&n.leading;clearTimeout(i),i=setTimeout(()=>{i=null;const f=n.leading?s:o(this,u);for(const h of r)h(f);r=[]},t),d?(s=o(this,u),p(s)):r.push(p)})}}async function E0(e,t,n){return await e.apply(t,n)}function ia(e,t={},n){for(const s in e){const i=e[s],r=n?`${n}:${s}`:s;typeof i=="object"&&i!==null?ia(i,t,r):typeof i=="function"&&(t[r]=i)}return t}const w0={run:e=>e()},S0=()=>w0,ad=typeof console.createTask<"u"?console.createTask:S0;function C0(e,t){const n=t.shift(),s=ad(n);return e.reduce((i,r)=>i.then(()=>s.run(()=>r(...t))),Promise.resolve())}function x0(e,t){const n=t.shift(),s=ad(n);return Promise.all(e.map(i=>s.run(()=>i(...t))))}function Pr(e,t){for(const n of[...e])n(t)}class T0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const i=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!s.allowDeprecated){let a=r.message;a||(a=`${i} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,i=(...r)=>(typeof s=="function"&&s(),s=void 0,i=void 0,n(...r));return s=this.hook(t,i),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];delete this._hooks[t];for(const i of s)this.hook(t,i)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=ia(t),s=Object.keys(n).map(i=>this.hook(i,n[i]));return()=>{for(const i of s.splice(0,s.length))i()}}removeHooks(t){const n=ia(t);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(C0,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(x0,t,...n)}callHookWith(t,n,...s){const i=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Pr(this._before,i);const r=t(n in this._hooks?[...this._hooks[n]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&i&&Pr(this._after,i)}):(this._after&&i&&Pr(this._after,i),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function ld(){return new T0}var B0=Object.create,od=Object.defineProperty,O0=Object.getOwnPropertyDescriptor,nl=Object.getOwnPropertyNames,I0=Object.getPrototypeOf,D0=Object.prototype.hasOwnProperty,L0=(e,t)=>function(){return e&&(t=(0,e[nl(e)[0]])(e=0)),t},cd=(e,t)=>function(){return t||(0,e[nl(e)[0]])((t={exports:{}}).exports,t),t.exports},P0=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of nl(t))!D0.call(e,i)&&i!==n&&od(e,i,{get:()=>t[i],enumerable:!(s=O0(t,i))||s.enumerable});return e},F0=(e,t,n)=>(n=e!=null?B0(I0(e)):{},P0(od(n,"default",{value:e,enumerable:!0}),e)),T=L0({"../../node_modules/.pnpm/tsup@8.3.0_@microsoft+api-extractor@7.43.0_@types+node@20.16.14__@swc+core@1.5.29_jiti@2.0.0__utvtwgyeu6xd57udthcnogp47u/node_modules/tsup/assets/esm_shims.js"(){}}),R0=cd({"../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/lib/speakingurl.js"(e,t){T(),function(n){var s={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"Ae",Å:"A",Æ:"AE",Ç:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"Oe",Ő:"O",Ø:"O",Ù:"U",Ú:"U",Û:"U",Ü:"Ue",Ű:"U",Ý:"Y",Þ:"TH",ß:"ss",à:"a",á:"a",â:"a",ã:"a",ä:"ae",å:"a",æ:"ae",ç:"c",è:"e",é:"e",ê:"e",ë:"e",ì:"i",í:"i",î:"i",ï:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"oe",ő:"o",ø:"o",ù:"u",ú:"u",û:"u",ü:"ue",ű:"u",ý:"y",þ:"th",ÿ:"y","ẞ":"SS",ا:"a",أ:"a",إ:"i",آ:"aa",ؤ:"u",ئ:"e",ء:"a",ب:"b",ت:"t",ث:"th",ج:"j",ح:"h",خ:"kh",د:"d",ذ:"th",ر:"r",ز:"z",س:"s",ش:"sh",ص:"s",ض:"dh",ط:"t",ظ:"z",ع:"a",غ:"gh",ف:"f",ق:"q",ك:"k",ل:"l",م:"m",ن:"n",ه:"h",و:"w",ي:"y",ى:"a",ة:"h",ﻻ:"la",ﻷ:"laa",ﻹ:"lai",ﻵ:"laa",گ:"g",چ:"ch",پ:"p",ژ:"zh",ک:"k",ی:"y","َ":"a","ً":"an","ِ":"e","ٍ":"en","ُ":"u","ٌ":"on","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9",က:"k",ခ:"kh",ဂ:"g",ဃ:"ga",င:"ng",စ:"s",ဆ:"sa",ဇ:"z","စျ":"za",ည:"ny",ဋ:"t",ဌ:"ta",ဍ:"d",ဎ:"da",ဏ:"na",တ:"t",ထ:"ta",ဒ:"d",ဓ:"da",န:"n",ပ:"p",ဖ:"pa",ဗ:"b",ဘ:"ba",မ:"m",ယ:"y",ရ:"ya",လ:"l",ဝ:"w",သ:"th",ဟ:"h",ဠ:"la",အ:"a","ြ":"y","ျ":"ya","ွ":"w","ြွ":"yw","ျွ":"ywa","ှ":"h",ဧ:"e","၏":"-e",ဣ:"i",ဤ:"-i",ဉ:"u",ဦ:"-u",ဩ:"aw","သြော":"aw",ဪ:"aw","၀":"0","၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","္":"","့":"","း":"",č:"c",ď:"d",ě:"e",ň:"n",ř:"r",š:"s",ť:"t",ů:"u",ž:"z",Č:"C",Ď:"D",Ě:"E",Ň:"N",Ř:"R",Š:"S",Ť:"T",Ů:"U",Ž:"Z",ހ:"h",ށ:"sh",ނ:"n",ރ:"r",ބ:"b",ޅ:"lh",ކ:"k",އ:"a",ވ:"v",މ:"m",ފ:"f",ދ:"dh",ތ:"th",ލ:"l",ގ:"g",ޏ:"gn",ސ:"s",ޑ:"d",ޒ:"z",ޓ:"t",ޔ:"y",ޕ:"p",ޖ:"j",ޗ:"ch",ޘ:"tt",ޙ:"hh",ޚ:"kh",ޛ:"th",ޜ:"z",ޝ:"sh",ޞ:"s",ޟ:"d",ޠ:"t",ޡ:"z",ޢ:"a",ޣ:"gh",ޤ:"q",ޥ:"w","ަ":"a","ާ":"aa","ި":"i","ީ":"ee","ު":"u","ޫ":"oo","ެ":"e","ޭ":"ey","ޮ":"o","ޯ":"oa","ް":"",ა:"a",ბ:"b",გ:"g",დ:"d",ე:"e",ვ:"v",ზ:"z",თ:"t",ი:"i",კ:"k",ლ:"l",მ:"m",ნ:"n",ო:"o",პ:"p",ჟ:"zh",რ:"r",ს:"s",ტ:"t",უ:"u",ფ:"p",ქ:"k",ღ:"gh",ყ:"q",შ:"sh",ჩ:"ch",ც:"ts",ძ:"dz",წ:"ts",ჭ:"ch",ხ:"kh",ჯ:"j",ჰ:"h",α:"a",β:"v",γ:"g",δ:"d",ε:"e",ζ:"z",η:"i",θ:"th",ι:"i",κ:"k",λ:"l",μ:"m",ν:"n",ξ:"ks",ο:"o",π:"p",ρ:"r",σ:"s",τ:"t",υ:"y",φ:"f",χ:"x",ψ:"ps",ω:"o",ά:"a",έ:"e",ί:"i",ό:"o",ύ:"y",ή:"i",ώ:"o",ς:"s",ϊ:"i",ΰ:"y",ϋ:"y",ΐ:"i",Α:"A",Β:"B",Γ:"G",Δ:"D",Ε:"E",Ζ:"Z",Η:"I",Θ:"TH",Ι:"I",Κ:"K",Λ:"L",Μ:"M",Ν:"N",Ξ:"KS",Ο:"O",Π:"P",Ρ:"R",Σ:"S",Τ:"T",Υ:"Y",Φ:"F",Χ:"X",Ψ:"PS",Ω:"O",Ά:"A",Έ:"E",Ί:"I",Ό:"O",Ύ:"Y",Ή:"I",Ώ:"O",Ϊ:"I",Ϋ:"Y",ā:"a",ē:"e",ģ:"g",ī:"i",ķ:"k",ļ:"l",ņ:"n",ū:"u",Ā:"A",Ē:"E",Ģ:"G",Ī:"I",Ķ:"k",Ļ:"L",Ņ:"N",Ū:"U",Ќ:"Kj",ќ:"kj",Љ:"Lj",љ:"lj",Њ:"Nj",њ:"nj",Тс:"Ts",тс:"ts",ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"E",Ł:"L",Ń:"N",Ś:"S",Ź:"Z",Ż:"Z",Є:"Ye",І:"I",Ї:"Yi",Ґ:"G",є:"ye",і:"i",ї:"yi",ґ:"g",ă:"a",Ă:"A",ș:"s",Ș:"S",ț:"t",Ț:"T",ţ:"t",Ţ:"T",а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"yo",ж:"zh",з:"z",и:"i",й:"i",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"kh",ц:"c",ч:"ch",ш:"sh",щ:"sh",ъ:"",ы:"y",ь:"",э:"e",ю:"yu",я:"ya",А:"A",Б:"B",В:"V",Г:"G",Д:"D",Е:"E",Ё:"Yo",Ж:"Zh",З:"Z",И:"I",Й:"I",К:"K",Л:"L",М:"M",Н:"N",О:"O",П:"P",Р:"R",С:"S",Т:"T",У:"U",Ф:"F",Х:"Kh",Ц:"C",Ч:"Ch",Ш:"Sh",Щ:"Sh",Ъ:"",Ы:"Y",Ь:"",Э:"E",Ю:"Yu",Я:"Ya",ђ:"dj",ј:"j",ћ:"c",џ:"dz",Ђ:"Dj",Ј:"j",Ћ:"C",Џ:"Dz",ľ:"l",ĺ:"l",ŕ:"r",Ľ:"L",Ĺ:"L",Ŕ:"R",ş:"s",Ş:"S",ı:"i",İ:"I",ğ:"g",Ğ:"G",ả:"a",Ả:"A",ẳ:"a",Ẳ:"A",ẩ:"a",Ẩ:"A",đ:"d",Đ:"D",ẹ:"e",Ẹ:"E",ẽ:"e",Ẽ:"E",ẻ:"e",Ẻ:"E",ế:"e",Ế:"E",ề:"e",Ề:"E",ệ:"e",Ệ:"E",ễ:"e",Ễ:"E",ể:"e",Ể:"E",ỏ:"o",ọ:"o",Ọ:"o",ố:"o",Ố:"O",ồ:"o",Ồ:"O",ổ:"o",Ổ:"O",ộ:"o",Ộ:"O",ỗ:"o",Ỗ:"O",ơ:"o",Ơ:"O",ớ:"o",Ớ:"O",ờ:"o",Ờ:"O",ợ:"o",Ợ:"O",ỡ:"o",Ỡ:"O",Ở:"o",ở:"o",ị:"i",Ị:"I",ĩ:"i",Ĩ:"I",ỉ:"i",Ỉ:"i",ủ:"u",Ủ:"U",ụ:"u",Ụ:"U",ũ:"u",Ũ:"U",ư:"u",Ư:"U",ứ:"u",Ứ:"U",ừ:"u",Ừ:"U",ự:"u",Ự:"U",ữ:"u",Ữ:"U",ử:"u",Ử:"ư",ỷ:"y",Ỷ:"y",ỳ:"y",Ỳ:"Y",ỵ:"y",Ỵ:"Y",ỹ:"y",Ỹ:"Y",ạ:"a",Ạ:"A",ấ:"a",Ấ:"A",ầ:"a",Ầ:"A",ậ:"a",Ậ:"A",ẫ:"a",Ẫ:"A",ắ:"a",Ắ:"A",ằ:"a",Ằ:"A",ặ:"a",Ặ:"A",ẵ:"a",Ẵ:"A","⓪":"0","①":"1","②":"2","③":"3","④":"4","⑤":"5","⑥":"6","⑦":"7","⑧":"8","⑨":"9","⑩":"10","⑪":"11","⑫":"12","⑬":"13","⑭":"14","⑮":"15","⑯":"16","⑰":"17","⑱":"18","⑲":"18","⑳":"18","⓵":"1","⓶":"2","⓷":"3","⓸":"4","⓹":"5","⓺":"6","⓻":"7","⓼":"8","⓽":"9","⓾":"10","⓿":"0","⓫":"11","⓬":"12","⓭":"13","⓮":"14","⓯":"15","⓰":"16","⓱":"17","⓲":"18","⓳":"19","⓴":"20","Ⓐ":"A","Ⓑ":"B","Ⓒ":"C","Ⓓ":"D","Ⓔ":"E","Ⓕ":"F","Ⓖ":"G","Ⓗ":"H","Ⓘ":"I","Ⓙ":"J","Ⓚ":"K","Ⓛ":"L","Ⓜ":"M","Ⓝ":"N","Ⓞ":"O","Ⓟ":"P","Ⓠ":"Q","Ⓡ":"R","Ⓢ":"S","Ⓣ":"T","Ⓤ":"U","Ⓥ":"V","Ⓦ":"W","Ⓧ":"X","Ⓨ":"Y","Ⓩ":"Z","ⓐ":"a","ⓑ":"b","ⓒ":"c","ⓓ":"d","ⓔ":"e","ⓕ":"f","ⓖ":"g","ⓗ":"h","ⓘ":"i","ⓙ":"j","ⓚ":"k","ⓛ":"l","ⓜ":"m","ⓝ":"n","ⓞ":"o","ⓟ":"p","ⓠ":"q","ⓡ":"r","ⓢ":"s","ⓣ":"t","ⓤ":"u","ⓦ":"v","ⓥ":"w","ⓧ":"x","ⓨ":"y","ⓩ":"z","“":'"',"”":'"',"‘":"'","’":"'","∂":"d",ƒ:"f","™":"(TM)","©":"(C)",œ:"oe",Œ:"OE","®":"(R)","†":"+","℠":"(SM)","…":"...","˚":"o",º:"o",ª:"a","•":"*","၊":",","။":".",$:"USD","€":"EUR","₢":"BRN","₣":"FRF","£":"GBP","₤":"ITL","₦":"NGN","₧":"ESP","₩":"KRW","₪":"ILS","₫":"VND","₭":"LAK","₮":"MNT","₯":"GRD","₱":"ARS","₲":"PYG","₳":"ARA","₴":"UAH","₵":"GHS","¢":"cent","¥":"CNY",元:"CNY",円:"YEN","﷼":"IRR","₠":"EWE","฿":"THB","₨":"INR","₹":"INR","₰":"PF","₺":"TRY","؋":"AFN","₼":"AZN",лв:"BGN","៛":"KHR","₡":"CRC","₸":"KZT",ден:"MKD",zł:"PLN","₽":"RUB","₾":"GEL"},i=["်","ް"],r={"ာ":"a","ါ":"a","ေ":"e","ဲ":"e","ိ":"i","ီ":"i","ို":"o","ု":"u","ူ":"u","ေါင်":"aung","ော":"aw","ော်":"aw","ေါ":"aw","ေါ်":"aw","်":"်","က်":"et","ိုက်":"aik","ောက်":"auk","င်":"in","ိုင်":"aing","ောင်":"aung","စ်":"it","ည်":"i","တ်":"at","ိတ်":"eik","ုတ်":"ok","ွတ်":"ut","ေတ်":"it","ဒ်":"d","ိုဒ်":"ok","ုဒ်":"ait","န်":"an","ာန်":"an","ိန်":"ein","ုန်":"on","ွန်":"un","ပ်":"at","ိပ်":"eik","ုပ်":"ok","ွပ်":"ut","န်ုပ်":"nub","မ်":"an","ိမ်":"ein","ုမ်":"on","ွမ်":"un","ယ်":"e","ိုလ်":"ol","ဉ်":"in","ံ":"an","ိံ":"ein","ုံ":"on","ައް":"ah","ަށް":"ah"},a={en:{},az:{ç:"c",ə:"e",ğ:"g",ı:"i",ö:"o",ş:"s",ü:"u",Ç:"C",Ə:"E",Ğ:"G",İ:"I",Ö:"O",Ş:"S",Ü:"U"},cs:{č:"c",ď:"d",ě:"e",ň:"n",ř:"r",š:"s",ť:"t",ů:"u",ž:"z",Č:"C",Ď:"D",Ě:"E",Ň:"N",Ř:"R",Š:"S",Ť:"T",Ů:"U",Ž:"Z"},fi:{ä:"a",Ä:"A",ö:"o",Ö:"O"},hu:{ä:"a",Ä:"A",ö:"o",Ö:"O",ü:"u",Ü:"U",ű:"u",Ű:"U"},lt:{ą:"a",č:"c",ę:"e",ė:"e",į:"i",š:"s",ų:"u",ū:"u",ž:"z",Ą:"A",Č:"C",Ę:"E",Ė:"E",Į:"I",Š:"S",Ų:"U",Ū:"U"},lv:{ā:"a",č:"c",ē:"e",ģ:"g",ī:"i",ķ:"k",ļ:"l",ņ:"n",š:"s",ū:"u",ž:"z",Ā:"A",Č:"C",Ē:"E",Ģ:"G",Ī:"i",Ķ:"k",Ļ:"L",Ņ:"N",Š:"S",Ū:"u",Ž:"Z"},pl:{ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ó:"o",ś:"s",ź:"z",ż:"z",Ą:"A",Ć:"C",Ę:"e",Ł:"L",Ń:"N",Ó:"O",Ś:"S",Ź:"Z",Ż:"Z"},sv:{ä:"a",Ä:"A",ö:"o",Ö:"O"},sk:{ä:"a",Ä:"A"},sr:{љ:"lj",њ:"nj",Љ:"Lj",Њ:"Nj",đ:"dj",Đ:"Dj"},tr:{Ü:"U",Ö:"O",ü:"u",ö:"o"}},l={ar:{"∆":"delta","∞":"la-nihaya","♥":"hob","&":"wa","|":"aw","<":"aqal-men",">":"akbar-men","∑":"majmou","¤":"omla"},az:{},ca:{"∆":"delta","∞":"infinit","♥":"amor","&":"i","|":"o","<":"menys que",">":"mes que","∑":"suma dels","¤":"moneda"},cs:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"nebo","<":"mensi nez",">":"vetsi nez","∑":"soucet","¤":"mena"},de:{"∆":"delta","∞":"unendlich","♥":"Liebe","&":"und","|":"oder","<":"kleiner als",">":"groesser als","∑":"Summe von","¤":"Waehrung"},dv:{"∆":"delta","∞":"kolunulaa","♥":"loabi","&":"aai","|":"noonee","<":"ah vure kuda",">":"ah vure bodu","∑":"jumula","¤":"faisaa"},en:{"∆":"delta","∞":"infinity","♥":"love","&":"and","|":"or","<":"less than",">":"greater than","∑":"sum","¤":"currency"},es:{"∆":"delta","∞":"infinito","♥":"amor","&":"y","|":"u","<":"menos que",">":"mas que","∑":"suma de los","¤":"moneda"},fa:{"∆":"delta","∞":"bi-nahayat","♥":"eshgh","&":"va","|":"ya","<":"kamtar-az",">":"bishtar-az","∑":"majmooe","¤":"vahed"},fi:{"∆":"delta","∞":"aarettomyys","♥":"rakkaus","&":"ja","|":"tai","<":"pienempi kuin",">":"suurempi kuin","∑":"summa","¤":"valuutta"},fr:{"∆":"delta","∞":"infiniment","♥":"Amour","&":"et","|":"ou","<":"moins que",">":"superieure a","∑":"somme des","¤":"monnaie"},ge:{"∆":"delta","∞":"usasruloba","♥":"siqvaruli","&":"da","|":"an","<":"naklebi",">":"meti","∑":"jami","¤":"valuta"},gr:{},hu:{"∆":"delta","∞":"vegtelen","♥":"szerelem","&":"es","|":"vagy","<":"kisebb mint",">":"nagyobb mint","∑":"szumma","¤":"penznem"},it:{"∆":"delta","∞":"infinito","♥":"amore","&":"e","|":"o","<":"minore di",">":"maggiore di","∑":"somma","¤":"moneta"},lt:{"∆":"delta","∞":"begalybe","♥":"meile","&":"ir","|":"ar","<":"maziau nei",">":"daugiau nei","∑":"suma","¤":"valiuta"},lv:{"∆":"delta","∞":"bezgaliba","♥":"milestiba","&":"un","|":"vai","<":"mazak neka",">":"lielaks neka","∑":"summa","¤":"valuta"},my:{"∆":"kwahkhyaet","∞":"asaonasme","♥":"akhyait","&":"nhin","|":"tho","<":"ngethaw",">":"kyithaw","∑":"paungld","¤":"ngwekye"},mk:{},nl:{"∆":"delta","∞":"oneindig","♥":"liefde","&":"en","|":"of","<":"kleiner dan",">":"groter dan","∑":"som","¤":"valuta"},pl:{"∆":"delta","∞":"nieskonczonosc","♥":"milosc","&":"i","|":"lub","<":"mniejsze niz",">":"wieksze niz","∑":"suma","¤":"waluta"},pt:{"∆":"delta","∞":"infinito","♥":"amor","&":"e","|":"ou","<":"menor que",">":"maior que","∑":"soma","¤":"moeda"},ro:{"∆":"delta","∞":"infinit","♥":"dragoste","&":"si","|":"sau","<":"mai mic ca",">":"mai mare ca","∑":"suma","¤":"valuta"},ru:{"∆":"delta","∞":"beskonechno","♥":"lubov","&":"i","|":"ili","<":"menshe",">":"bolshe","∑":"summa","¤":"valjuta"},sk:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"alebo","<":"menej ako",">":"viac ako","∑":"sucet","¤":"mena"},sr:{},tr:{"∆":"delta","∞":"sonsuzluk","♥":"ask","&":"ve","|":"veya","<":"kucuktur",">":"buyuktur","∑":"toplam","¤":"para birimi"},uk:{"∆":"delta","∞":"bezkinechnist","♥":"lubov","&":"i","|":"abo","<":"menshe",">":"bilshe","∑":"suma","¤":"valjuta"},vn:{"∆":"delta","∞":"vo cuc","♥":"yeu","&":"va","|":"hoac","<":"nho hon",">":"lon hon","∑":"tong","¤":"tien te"}},o=[";","?",":","@","&","=","+","$",",","/"].join(""),u=[";","?",":","@","&","=","+","$",","].join(""),p=[".","!","~","*","'","(",")"].join(""),d=function(b,y){var E="-",g="",w="",P=!0,M={},R,Q,V,O,W,L,J,ae,ke,K,$,Y,pe,Re,Ne="";if(typeof b!="string")return"";if(typeof y=="string"&&(E=y),J=l.en,ae=a.en,typeof y=="object"){R=y.maintainCase||!1,M=y.custom&&typeof y.custom=="object"?y.custom:M,V=+y.truncate>1&&y.truncate||!1,O=y.uric||!1,W=y.uricNoSlash||!1,L=y.mark||!1,P=!(y.symbols===!1||y.lang===!1),E=y.separator||E,O&&(Ne+=o),W&&(Ne+=u),L&&(Ne+=p),J=y.lang&&l[y.lang]&&P?l[y.lang]:P?l.en:{},ae=y.lang&&a[y.lang]?a[y.lang]:y.lang===!1||y.lang===!0?{}:a.en,y.titleCase&&typeof y.titleCase.length=="number"&&Array.prototype.toString.call(y.titleCase)?(y.titleCase.forEach(function(ye){M[ye+""]=ye+""}),Q=!0):Q=!!y.titleCase,y.custom&&typeof y.custom.length=="number"&&Array.prototype.toString.call(y.custom)&&y.custom.forEach(function(ye){M[ye+""]=ye+""}),Object.keys(M).forEach(function(ye){var ht;ye.length>1?ht=new RegExp("\\b"+h(ye)+"\\b","gi"):ht=new RegExp(h(ye),"gi"),b=b.replace(ht,M[ye])});for($ in M)Ne+=$}for(Ne+=E,Ne=h(Ne),b=b.replace(/(^\s+|\s+$)/g,""),pe=!1,Re=!1,K=0,Y=b.length;K<Y;K++)$=b[K],m($,M)?pe=!1:ae[$]?($=pe&&ae[$].match(/[A-Za-z0-9]/)?" "+ae[$]:ae[$],pe=!1):$ in s?(K+1<Y&&i.indexOf(b[K+1])>=0?(w+=$,$=""):Re===!0?($=r[w]+s[$],w=""):$=pe&&s[$].match(/[A-Za-z0-9]/)?" "+s[$]:s[$],pe=!1,Re=!1):$ in r?(w+=$,$="",K===Y-1&&($=r[w]),Re=!0):J[$]&&!(O&&o.indexOf($)!==-1)&&!(W&&u.indexOf($)!==-1)?($=pe||g.substr(-1).match(/[A-Za-z0-9]/)?E+J[$]:J[$],$+=b[K+1]!==void 0&&b[K+1].match(/[A-Za-z0-9]/)?E:"",pe=!0):(Re===!0?($=r[w]+$,w="",Re=!1):pe&&(/[A-Za-z0-9]/.test($)||g.substr(-1).match(/A-Za-z0-9]/))&&($=" "+$),pe=!1),g+=$.replace(new RegExp("[^\\w\\s"+Ne+"_-]","g"),E);return Q&&(g=g.replace(/(\w)(\S*)/g,function(ye,ht,Nt){var en=ht.toUpperCase()+(Nt!==null?Nt:"");return Object.keys(M).indexOf(en.toLowerCase())<0?en:en.toLowerCase()})),g=g.replace(/\s+/g,E).replace(new RegExp("\\"+E+"+","g"),E).replace(new RegExp("(^\\"+E+"+|\\"+E+"+$)","g"),""),V&&g.length>V&&(ke=g.charAt(V)===E,g=g.slice(0,V),ke||(g=g.slice(0,g.lastIndexOf(E)))),!R&&!Q&&(g=g.toLowerCase()),g},f=function(b){return function(E){return d(E,b)}},h=function(b){return b.replace(/[-\\^$*+?.()|[\]{}\/]/g,"\\$&")},m=function(_,b){for(var y in b)if(b[y]===_)return!0};if(typeof t<"u"&&t.exports)t.exports=d,t.exports.createSlug=f;else if(typeof define<"u"&&define.amd)define([],function(){return d});else try{if(n.getSlug||n.createSlug)throw"speakingurl: globals exists /(getSlug|createSlug)/";n.getSlug=d,n.createSlug=f}catch{}}(e)}}),N0=cd({"../../node_modules/.pnpm/speakingurl@14.0.1/node_modules/speakingurl/index.js"(e,t){T(),t.exports=R0()}});T();T();T();T();T();T();T();function M0(e){return!!(e&&e.__v_isReadonly)}function ud(e){return M0(e)?ud(e.__v_raw):!!(e&&e.__v_isReactive)}function Fr(e){return!!(e&&e.__v_isRef===!0)}function ws(e){const t=e&&e.__v_raw;return t?ws(t):e}T();function V0(e){var t;const n=e.name||e._componentTag||e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__||e.__name;return n==="index"&&((t=e.__file)!=null&&t.endsWith("index.vue"))?"":n}function $0(e){const t=e.__file;if(t)return y0(b0(t,".vue"))}function qo(e,t){return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__=t,t}function ir(e){if(e.__VUE_DEVTOOLS_NEXT_APP_RECORD__)return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;if(e.root)return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__}async function z0(e){const{app:t,uid:n,instance:s}=e;try{if(s.__VUE_DEVTOOLS_NEXT_UID__)return s.__VUE_DEVTOOLS_NEXT_UID__;const i=await ir(t);if(!i)return null;const r=i.rootInstance===s;return`${i.id}:${r?"root":n}`}catch{}}function pd(e){var t,n;const s=(t=e.subTree)==null?void 0:t.type,i=ir(e);return i?((n=i==null?void 0:i.types)==null?void 0:n.Fragment)===s:!1}function rr(e){var t,n,s;const i=V0((e==null?void 0:e.type)||{});if(i)return i;if((e==null?void 0:e.root)===e)return"Root";for(const a in(n=(t=e.parent)==null?void 0:t.type)==null?void 0:n.components)if(e.parent.type.components[a]===(e==null?void 0:e.type))return qo(e,a);for(const a in(s=e.appContext)==null?void 0:s.components)if(e.appContext.components[a]===(e==null?void 0:e.type))return qo(e,a);const r=$0((e==null?void 0:e.type)||{});return r||"Anonymous Component"}function ra(e,t){return t=t||`${e.id}:root`,e.instanceMap.get(t)||e.instanceMap.get(":root")}var H0=class{constructor(){this.refEditor=new U0}set(e,t,n,s){const i=Array.isArray(t)?t:t.split(".");for(;i.length>1;){const l=i.shift();e instanceof Map&&(e=e.get(l)),e instanceof Set?e=Array.from(e.values())[l]:e=e[l],this.refEditor.isRef(e)&&(e=this.refEditor.get(e))}const r=i[0],a=this.refEditor.get(e)[r];s?s(e,r,n):this.refEditor.isRef(a)?this.refEditor.set(a,n):e[r]=n}get(e,t){const n=Array.isArray(t)?t:t.split(".");for(let s=0;s<n.length;s++)if(e instanceof Map?e=e.get(n[s]):e=e[n[s]],this.refEditor.isRef(e)&&(e=this.refEditor.get(e)),!e)return;return e}has(e,t,n=!1){if(typeof e>"u")return!1;const s=Array.isArray(t)?t.slice():t.split("."),i=n?2:1;for(;e&&s.length>i;){const r=s.shift();e=e[r],this.refEditor.isRef(e)&&(e=this.refEditor.get(e))}return e!=null&&Object.prototype.hasOwnProperty.call(e,s[0])}createDefaultSetCallback(e){return(t,n,s)=>{if((e.remove||e.newKey)&&(Array.isArray(t)?t.splice(n,1):ws(t)instanceof Map?t.delete(n):ws(t)instanceof Set?t.delete(Array.from(t.values())[n]):Reflect.deleteProperty(t,n)),!e.remove){const i=t[e.newKey||n];this.refEditor.isRef(i)?this.refEditor.set(i,s):ws(t)instanceof Map?t.set(e.newKey||n,s):ws(t)instanceof Set?t.add(s):t[e.newKey||n]=s}}}},U0=class{set(e,t){if(Fr(e))e.value=t;else{if(e instanceof Set&&Array.isArray(t)){e.clear(),t.forEach(i=>e.add(i));return}const n=Object.keys(t);if(e instanceof Map){const i=new Set(e.keys());n.forEach(r=>{e.set(r,Reflect.get(t,r)),i.delete(r)}),i.forEach(r=>e.delete(r));return}const s=new Set(Object.keys(e));n.forEach(i=>{Reflect.set(e,i,Reflect.get(t,i)),s.delete(i)}),s.forEach(i=>Reflect.deleteProperty(e,i))}}get(e){return Fr(e)?e.value:e}isRef(e){return Fr(e)||ud(e)}};T();function sl(e){return pd(e)?j0(e.subTree):e.subTree?[e.subTree.el]:[]}function j0(e){if(!e.children)return[];const t=[];return e.children.forEach(n=>{n.component?t.push(...sl(n.component)):n!=null&&n.el&&t.push(n.el)}),t}T();T();function G0(){const e={top:0,bottom:0,left:0,right:0,get width(){return e.right-e.left},get height(){return e.bottom-e.top}};return e}var Ai;function q0(e){return Ai||(Ai=document.createRange()),Ai.selectNode(e),Ai.getBoundingClientRect()}function K0(e){const t=G0();if(!e.children)return t;for(let n=0,s=e.children.length;n<s;n++){const i=e.children[n];let r;if(i.component)r=Ln(i.component);else if(i.el){const a=i.el;a.nodeType===1||a.getBoundingClientRect?r=a.getBoundingClientRect():a.nodeType===3&&a.data.trim()&&(r=q0(a))}r&&W0(t,r)}return t}function W0(e,t){return(!e.top||t.top<e.top)&&(e.top=t.top),(!e.bottom||t.bottom>e.bottom)&&(e.bottom=t.bottom),(!e.left||t.left<e.left)&&(e.left=t.left),(!e.right||t.right>e.right)&&(e.right=t.right),e}var Ko={top:0,left:0,right:0,bottom:0,width:0,height:0};function Ln(e){const t=e.subTree.el;return typeof window>"u"?Ko:pd(e)?K0(e.subTree):(t==null?void 0:t.nodeType)===1?t==null?void 0:t.getBoundingClientRect():e.subTree.component?Ln(e.subTree.component):Ko}var dd="__vue-devtools-component-inspector__",fd="__vue-devtools-component-inspector__card__",hd="__vue-devtools-component-inspector__name__",gd="__vue-devtools-component-inspector__indicator__",vd={display:"block",zIndex:2147483640,position:"fixed",backgroundColor:"#42b88325",border:"1px solid #42b88350",borderRadius:"5px",transition:"all 0.1s ease-in",pointerEvents:"none"},Y0={fontFamily:"Arial, Helvetica, sans-serif",padding:"5px 8px",borderRadius:"4px",textAlign:"left",position:"absolute",left:0,color:"#e9e9e9",fontSize:"14px",fontWeight:600,lineHeight:"24px",backgroundColor:"#42b883",boxShadow:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"},X0={display:"inline-block",fontWeight:400,fontStyle:"normal",fontSize:"12px",opacity:.7};function fs(){return document.getElementById(dd)}function Q0(){return document.getElementById(fd)}function J0(){return document.getElementById(gd)}function Z0(){return document.getElementById(hd)}function il(e){return{left:`${Math.round(e.left*100)/100}px`,top:`${Math.round(e.top*100)/100}px`,width:`${Math.round(e.width*100)/100}px`,height:`${Math.round(e.height*100)/100}px`}}function rl(e){var t;const n=document.createElement("div");n.id=(t=e.elementId)!=null?t:dd,Object.assign(n.style,{...vd,...il(e.bounds),...e.style});const s=document.createElement("span");s.id=fd,Object.assign(s.style,{...Y0,top:e.bounds.top<35?0:"-35px"});const i=document.createElement("span");i.id=hd,i.innerHTML=`&lt;${e.name}&gt;&nbsp;&nbsp;`;const r=document.createElement("i");return r.id=gd,r.innerHTML=`${Math.round(e.bounds.width*100)/100} x ${Math.round(e.bounds.height*100)/100}`,Object.assign(r.style,X0),s.appendChild(i),s.appendChild(r),n.appendChild(s),document.body.appendChild(n),n}function al(e){const t=fs(),n=Q0(),s=Z0(),i=J0();t&&(Object.assign(t.style,{...vd,...il(e.bounds)}),Object.assign(n.style,{top:e.bounds.top<35?0:"-35px"}),s.innerHTML=`&lt;${e.name}&gt;&nbsp;&nbsp;`,i.innerHTML=`${Math.round(e.bounds.width*100)/100} x ${Math.round(e.bounds.height*100)/100}`)}function e2(e){const t=Ln(e),n=rr(e);fs()?al({bounds:t,name:n}):rl({bounds:t,name:n})}function md(){const e=fs();e&&(e.style.display="none")}var aa=null;function la(e){const t=e.target;if(t){const n=t.__vueParentComponent;if(n&&(aa=n,n.vnode.el)){const i=Ln(n),r=rr(n);fs()?al({bounds:i,name:r}):rl({bounds:i,name:r})}}}function t2(e,t){var n;if(e.preventDefault(),e.stopPropagation(),aa){const s=(n=nt.value)==null?void 0:n.app;z0({app:s,uid:s.uid,instance:aa}).then(i=>{t(i)})}}var $i=null;function n2(){md(),window.removeEventListener("mouseover",la),window.removeEventListener("click",$i,!0),$i=null}function s2(){return window.addEventListener("mouseover",la),new Promise(e=>{function t(n){n.preventDefault(),n.stopPropagation(),t2(n,s=>{window.removeEventListener("click",t,!0),$i=null,window.removeEventListener("mouseover",la);const i=fs();i&&(i.style.display="none"),e(JSON.stringify({id:s}))})}$i=t,window.addEventListener("click",t,!0)})}function i2(e){const t=ra(nt.value,e.id);if(t){const[n]=sl(t);if(typeof n.scrollIntoView=="function")n.scrollIntoView({behavior:"smooth"});else{const s=Ln(t),i=document.createElement("div"),r={...il(s),position:"absolute"};Object.assign(i.style,r),document.body.appendChild(i),i.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{document.body.removeChild(i)},2e3)}setTimeout(()=>{const s=Ln(t);if(s.width||s.height){const i=rr(t),r=fs();r?al({...e,name:i,bounds:s}):rl({...e,name:i,bounds:s}),setTimeout(()=>{r&&(r.style.display="none")},1500)}},1200)}}T();var Wo,Yo;(Yo=(Wo=q).__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__)!=null||(Wo.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__=!0);function r2(e){let t=0;const n=setInterval(()=>{q.__VUE_INSPECTOR__&&(clearInterval(n),t+=30,e()),t>=5e3&&clearInterval(n)},30)}function a2(){const e=q.__VUE_INSPECTOR__,t=e.openInEditor;e.openInEditor=async(...n)=>{e.disable(),t(...n)}}function l2(){return new Promise(e=>{function t(){a2(),e(q.__VUE_INSPECTOR__)}q.__VUE_INSPECTOR__?t():r2(()=>{t()})})}T();T();T();var o2="__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";function c2(){if(!rd||typeof localStorage>"u"||localStorage===null)return{recordingState:!1,mouseEventEnabled:!1,keyboardEventEnabled:!1,componentEventEnabled:!1,performanceEventEnabled:!1,selected:""};const e=localStorage.getItem(o2);return e?JSON.parse(e):{recordingState:!1,mouseEventEnabled:!1,keyboardEventEnabled:!1,componentEventEnabled:!1,performanceEventEnabled:!1,selected:""}}T();T();T();var Xo,Qo;(Qo=(Xo=q).__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS)!=null||(Xo.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS=[]);var u2=new Proxy(q.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS,{get(e,t,n){return Reflect.get(e,t,n)}});function p2(e,t){dt.timelineLayersState[t.id]=!1,u2.push({...e,descriptorId:t.id,appRecord:ir(t.app)})}var Jo,Zo;(Zo=(Jo=q).__VUE_DEVTOOLS_KIT_INSPECTOR__)!=null||(Jo.__VUE_DEVTOOLS_KIT_INSPECTOR__=[]);var ll=new Proxy(q.__VUE_DEVTOOLS_KIT_INSPECTOR__,{get(e,t,n){return Reflect.get(e,t,n)}}),_d=is(()=>{hs.hooks.callHook("sendInspectorToClient",kd())});function d2(e,t){ll.push({options:e,descriptor:t,treeFilter:"",selectedNodeId:"",appRecord:ir(t.app)}),_d()}function kd(){return ll.filter(e=>e.descriptor.app===nt.value.app).filter(e=>e.descriptor.id!=="components").map(e=>{var t;const n=e.descriptor,s=e.options;return{id:s.id,label:s.label,logo:n.logo,icon:`custom-ic-baseline-${(t=s==null?void 0:s.icon)==null?void 0:t.replace(/_/g,"-")}`,packageName:n.packageName,homepage:n.homepage,pluginId:n.id}})}function Ci(e,t){return ll.find(n=>n.options.id===e&&(t?n.descriptor.app===t:!0))}function f2(){const e=ld();e.hook("addInspector",({inspector:s,plugin:i})=>{d2(s,i.descriptor)});const t=is(async({inspectorId:s,plugin:i})=>{var r;if(!s||!((r=i==null?void 0:i.descriptor)!=null&&r.app)||dt.highPerfModeEnabled)return;const a=Ci(s,i.descriptor.app),l={app:i.descriptor.app,inspectorId:s,filter:(a==null?void 0:a.treeFilter)||"",rootNodes:[]};await new Promise(o=>{e.callHookWith(async u=>{await Promise.all(u.map(p=>p(l))),o()},"getInspectorTree")}),e.callHookWith(async o=>{await Promise.all(o.map(u=>u({inspectorId:s,rootNodes:l.rootNodes})))},"sendInspectorTreeToClient")},120);e.hook("sendInspectorTree",t);const n=is(async({inspectorId:s,plugin:i})=>{var r;if(!s||!((r=i==null?void 0:i.descriptor)!=null&&r.app)||dt.highPerfModeEnabled)return;const a=Ci(s,i.descriptor.app),l={app:i.descriptor.app,inspectorId:s,nodeId:(a==null?void 0:a.selectedNodeId)||"",state:null},o={currentTab:`custom-inspector:${s}`};l.nodeId&&await new Promise(u=>{e.callHookWith(async p=>{await Promise.all(p.map(d=>d(l,o))),u()},"getInspectorState")}),e.callHookWith(async u=>{await Promise.all(u.map(p=>p({inspectorId:s,nodeId:l.nodeId,state:l.state})))},"sendInspectorStateToClient")},120);return e.hook("sendInspectorState",n),e.hook("customInspectorSelectNode",({inspectorId:s,nodeId:i,plugin:r})=>{const a=Ci(s,r.descriptor.app);a&&(a.selectedNodeId=i)}),e.hook("timelineLayerAdded",({options:s,plugin:i})=>{p2(s,i.descriptor)}),e.hook("timelineEventAdded",({options:s,plugin:i})=>{var r;const a=["performance","component-event","keyboard","mouse"];dt.highPerfModeEnabled||!((r=dt.timelineLayersState)!=null&&r[i.descriptor.id])&&!a.includes(s.layerId)||e.callHookWith(async l=>{await Promise.all(l.map(o=>o(s)))},"sendTimelineEventToClient")}),e.hook("getComponentInstances",async({app:s})=>{const i=s.__VUE_DEVTOOLS_NEXT_APP_RECORD__;if(!i)return null;const r=i.id.toString();return[...i.instanceMap].filter(([l])=>l.split(":")[0]===r).map(([,l])=>l)}),e.hook("getComponentBounds",async({instance:s})=>Ln(s)),e.hook("getComponentName",({instance:s})=>rr(s)),e.hook("componentHighlight",({uid:s})=>{const i=nt.value.instanceMap.get(s);i&&e2(i)}),e.hook("componentUnhighlight",()=>{md()}),e}var ec,tc;(tc=(ec=q).__VUE_DEVTOOLS_KIT_APP_RECORDS__)!=null||(ec.__VUE_DEVTOOLS_KIT_APP_RECORDS__=[]);var nc,sc;(sc=(nc=q).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__)!=null||(nc.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__={});var ic,rc;(rc=(ic=q).__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__)!=null||(ic.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__="");var ac,lc;(lc=(ac=q).__VUE_DEVTOOLS_KIT_CUSTOM_TABS__)!=null||(ac.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__=[]);var oc,cc;(cc=(oc=q).__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__)!=null||(oc.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__=[]);var xn="__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";function h2(){return{connected:!1,clientConnected:!1,vitePluginDetected:!0,appRecords:[],activeAppRecordId:"",tabs:[],commands:[],highPerfModeEnabled:!0,devtoolsClientDetected:{},perfUniqueGroupId:0,timelineLayersState:c2()}}var uc,pc;(pc=(uc=q)[xn])!=null||(uc[xn]=h2());var g2=is(e=>{hs.hooks.callHook("devtoolsStateUpdated",{state:e})});is((e,t)=>{hs.hooks.callHook("devtoolsConnectedUpdated",{state:e,oldState:t})});var ar=new Proxy(q.__VUE_DEVTOOLS_KIT_APP_RECORDS__,{get(e,t,n){return t==="value"?q.__VUE_DEVTOOLS_KIT_APP_RECORDS__:q.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t]}}),nt=new Proxy(q.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__,{get(e,t,n){return t==="value"?q.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__:t==="id"?q.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__:q.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t]}});function yd(){g2({...q[xn],appRecords:ar.value,activeAppRecordId:nt.id,tabs:q.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,commands:q.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__})}function v2(e){q.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__=e,yd()}function m2(e){q.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__=e,yd()}var dt=new Proxy(q[xn],{get(e,t){return t==="appRecords"?ar:t==="activeAppRecordId"?nt.id:t==="tabs"?q.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__:t==="commands"?q.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__:q[xn][t]},deleteProperty(e,t){return delete e[t],!0},set(e,t,n){return{...q[xn]},e[t]=n,q[xn][t]=n,!0}});function _2(e={}){var t,n,s;const{file:i,host:r,baseUrl:a=window.location.origin,line:l=0,column:o=0}=e;if(i){if(r==="chrome-extension"){const u=i.replace(/\\/g,"\\\\"),p=(n=(t=window.VUE_DEVTOOLS_CONFIG)==null?void 0:t.openInEditorHost)!=null?n:"/";fetch(`${p}__open-in-editor?file=${encodeURI(i)}`).then(d=>{if(!d.ok){const f=`Opening component ${u} failed`;console.log(`%c${f}`,"color:red")}})}else if(dt.vitePluginDetected){const u=(s=q.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__)!=null?s:a;q.__VUE_INSPECTOR__.openInEditor(u,i,l,o)}}}T();T();T();T();T();var dc,fc;(fc=(dc=q).__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__)!=null||(dc.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__=[]);var ol=new Proxy(q.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__,{get(e,t,n){return Reflect.get(e,t,n)}});function oa(e){const t={};return Object.keys(e).forEach(n=>{t[n]=e[n].defaultValue}),t}function cl(e){return`__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`}function k2(e){var t,n,s;const i=(n=(t=ol.find(r=>{var a;return r[0].id===e&&!!((a=r[0])!=null&&a.settings)}))==null?void 0:t[0])!=null?n:null;return(s=i==null?void 0:i.settings)!=null?s:null}function bd(e,t){var n,s,i;const r=cl(e);if(r){const a=localStorage.getItem(r);if(a)return JSON.parse(a)}if(e){const a=(s=(n=ol.find(l=>l[0].id===e))==null?void 0:n[0])!=null?s:null;return oa((i=a==null?void 0:a.settings)!=null?i:{})}return oa(t)}function y2(e,t){const n=cl(e);localStorage.getItem(n)||localStorage.setItem(n,JSON.stringify(oa(t)))}function b2(e,t,n){const s=cl(e),i=localStorage.getItem(s),r=JSON.parse(i||"{}"),a={...r,[t]:n};localStorage.setItem(s,JSON.stringify(a)),hs.hooks.callHookWith(l=>{l.forEach(o=>o({pluginId:e,key:t,oldValue:r[t],newValue:n,settings:a}))},"setPluginSettings")}T();T();T();T();T();T();T();T();T();T();T();var hc,gc,ut=(gc=(hc=q).__VUE_DEVTOOLS_HOOK)!=null?gc:hc.__VUE_DEVTOOLS_HOOK=ld(),A2={vueAppInit(e){ut.hook("app:init",e)},vueAppUnmount(e){ut.hook("app:unmount",e)},vueAppConnected(e){ut.hook("app:connected",e)},componentAdded(e){return ut.hook("component:added",e)},componentEmit(e){return ut.hook("component:emit",e)},componentUpdated(e){return ut.hook("component:updated",e)},componentRemoved(e){return ut.hook("component:removed",e)},setupDevtoolsPlugin(e){ut.hook("devtools-plugin:setup",e)},perfStart(e){return ut.hook("perf:start",e)},perfEnd(e){return ut.hook("perf:end",e)}},Ad={on:A2,setupDevToolsPlugin(e,t){return ut.callHook("devtools-plugin:setup",e,t)}},E2=class{constructor({plugin:e,ctx:t}){this.hooks=t.hooks,this.plugin=e}get on(){return{visitComponentTree:e=>{this.hooks.hook("visitComponentTree",e)},inspectComponent:e=>{this.hooks.hook("inspectComponent",e)},editComponentState:e=>{this.hooks.hook("editComponentState",e)},getInspectorTree:e=>{this.hooks.hook("getInspectorTree",e)},getInspectorState:e=>{this.hooks.hook("getInspectorState",e)},editInspectorState:e=>{this.hooks.hook("editInspectorState",e)},inspectTimelineEvent:e=>{this.hooks.hook("inspectTimelineEvent",e)},timelineCleared:e=>{this.hooks.hook("timelineCleared",e)},setPluginSettings:e=>{this.hooks.hook("setPluginSettings",e)}}}notifyComponentUpdate(e){var t;const n=kd().find(s=>s.packageName===this.plugin.descriptor.packageName);if(n!=null&&n.id){if(e){const s=[e.appContext.app,e.uid,(t=e.parent)==null?void 0:t.uid,e];ut.callHook("component:updated",...s)}else ut.callHook("component:updated");this.hooks.callHook("sendInspectorState",{inspectorId:n.id,plugin:this.plugin})}}addInspector(e){this.hooks.callHook("addInspector",{inspector:e,plugin:this.plugin}),this.plugin.descriptor.settings&&y2(e.id,this.plugin.descriptor.settings)}sendInspectorTree(e){this.hooks.callHook("sendInspectorTree",{inspectorId:e,plugin:this.plugin})}sendInspectorState(e){this.hooks.callHook("sendInspectorState",{inspectorId:e,plugin:this.plugin})}selectInspectorNode(e,t){this.hooks.callHook("customInspectorSelectNode",{inspectorId:e,nodeId:t,plugin:this.plugin})}visitComponentTree(e){return this.hooks.callHook("visitComponentTree",e)}now(){return Date.now()}addTimelineLayer(e){this.hooks.callHook("timelineLayerAdded",{options:e,plugin:this.plugin})}addTimelineEvent(e){this.hooks.callHook("timelineEventAdded",{options:e,plugin:this.plugin})}getSettings(e){return bd(e??this.plugin.descriptor.id,this.plugin.descriptor.settings)}getComponentInstances(e){return this.hooks.callHook("getComponentInstances",{app:e})}getComponentBounds(e){return this.hooks.callHook("getComponentBounds",{instance:e})}getComponentName(e){return this.hooks.callHook("getComponentName",{instance:e})}highlightElement(e){const t=e.__VUE_DEVTOOLS_NEXT_UID__;return this.hooks.callHook("componentHighlight",{uid:t})}unhighlightElement(){return this.hooks.callHook("componentUnhighlight")}},w2=E2;T();T();T();T();var S2="__vue_devtool_undefined__",C2="__vue_devtool_infinity__",x2="__vue_devtool_negative_infinity__",T2="__vue_devtool_nan__";T();T();var B2={[S2]:"undefined",[T2]:"NaN",[C2]:"Infinity",[x2]:"-Infinity"};Object.entries(B2).reduce((e,[t,n])=>(e[n]=t,e),{});T();T();T();T();T();var vc,mc;(mc=(vc=q).__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__)!=null||(vc.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__=new Set);function O2(e,t){return Ad.setupDevToolsPlugin(e,t)}function I2(e,t){const[n,s]=e;if(n.app!==t)return;const i=new w2({plugin:{setupFn:s,descriptor:n},ctx:hs});n.packageName==="vuex"&&i.on.editInspectorState(r=>{i.sendInspectorState(r.inspectorId)}),s(i)}function D2(e){q.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e)||(q.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e),ol.forEach(t=>{I2(t,e)}))}T();T();var Hs="__VUE_DEVTOOLS_ROUTER__",rs="__VUE_DEVTOOLS_ROUTER_INFO__",_c,kc;(kc=(_c=q)[rs])!=null||(_c[rs]={currentRoute:null,routes:[]});var yc,bc;(bc=(yc=q)[Hs])!=null||(yc[Hs]={});new Proxy(q[rs],{get(e,t){return q[rs][t]}});new Proxy(q[Hs],{get(e,t){if(t==="value")return q[Hs]}});function L2(e){const t=new Map;return((e==null?void 0:e.getRoutes())||[]).filter(n=>!t.has(n.path)&&t.set(n.path,1))}function ul(e){return e.map(t=>{let{path:n,name:s,children:i,meta:r}=t;return i!=null&&i.length&&(i=ul(i)),{path:n,name:s,children:i,meta:r}})}function P2(e){if(e){const{fullPath:t,hash:n,href:s,path:i,name:r,matched:a,params:l,query:o}=e;return{fullPath:t,hash:n,href:s,path:i,name:r,params:l,query:o,matched:ul(a)}}return e}function F2(e,t){function n(){var s;const i=(s=e.app)==null?void 0:s.config.globalProperties.$router,r=P2(i==null?void 0:i.currentRoute.value),a=ul(L2(i)),l=console.warn;console.warn=()=>{},q[rs]={currentRoute:r?Go(r):{},routes:Go(a)},q[Hs]=i,console.warn=l}n(),Ad.on.componentUpdated(is(()=>{var s;((s=t.value)==null?void 0:s.app)===e.app&&(n(),!dt.highPerfModeEnabled&&hs.hooks.callHook("routerInfoUpdated",{state:q[rs]}))},200))}function R2(e){return{async getInspectorTree(t){const n={...t,app:nt.value.app,rootNodes:[]};return await new Promise(s=>{e.callHookWith(async i=>{await Promise.all(i.map(r=>r(n))),s()},"getInspectorTree")}),n.rootNodes},async getInspectorState(t){const n={...t,app:nt.value.app,state:null},s={currentTab:`custom-inspector:${t.inspectorId}`};return await new Promise(i=>{e.callHookWith(async r=>{await Promise.all(r.map(a=>a(n,s))),i()},"getInspectorState")}),n.state},editInspectorState(t){const n=new H0,s={...t,app:nt.value.app,set:(i,r=t.path,a=t.state.value,l)=>{n.set(i,r,a,l||n.createDefaultSetCallback(t.state))}};e.callHookWith(i=>{i.forEach(r=>r(s))},"editInspectorState")},sendInspectorState(t){const n=Ci(t);e.callHook("sendInspectorState",{inspectorId:t,plugin:{descriptor:n.descriptor,setupFn:()=>({})}})},inspectComponentInspector(){return s2()},cancelInspectComponentInspector(){return n2()},getComponentRenderCode(t){const n=ra(nt.value,t);if(n)return(n==null?void 0:n.type)instanceof Function?n.type.toString():n.render.toString()},scrollToComponent(t){return i2({id:t})},openInEditor:_2,getVueInspector:l2,toggleApp(t){const n=ar.value.find(s=>s.id===t);n&&(m2(t),v2(n),F2(n,nt),_d(),D2(n.app))},inspectDOM(t){const n=ra(nt.value,t);if(n){const[s]=sl(n);s&&(q.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__=s)}},updatePluginSettings(t,n,s){b2(t,n,s)},getPluginSettings(t){return{options:k2(t),values:bd(t)}}}}T();var Ac,Ec;(Ec=(Ac=q).__VUE_DEVTOOLS_ENV__)!=null||(Ac.__VUE_DEVTOOLS_ENV__={vitePluginDetected:!1});var wc=f2(),Sc,Cc;(Cc=(Sc=q).__VUE_DEVTOOLS_KIT_CONTEXT__)!=null||(Sc.__VUE_DEVTOOLS_KIT_CONTEXT__={hooks:wc,get state(){return{...dt,activeAppRecordId:nt.id,activeAppRecord:nt.value,appRecords:ar.value}},api:R2(wc)});var hs=q.__VUE_DEVTOOLS_KIT_CONTEXT__;T();F0(N0());var xc,Tc;(Tc=(xc=q).__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__)!=null||(xc.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__={id:0,appIds:new Set});T();function N2(e){dt.highPerfModeEnabled=e??!dt.highPerfModeEnabled}T();T();T();function M2(e){dt.devtoolsClientDetected={...dt.devtoolsClientDetected,...e};const t=Object.values(dt.devtoolsClientDetected).some(Boolean);N2(!t)}var Bc,Oc;(Oc=(Bc=q).__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__)!=null||(Bc.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__=M2);T();T();T();T();T();T();T();var V2=class{constructor(){this.keyToValue=new Map,this.valueToKey=new Map}set(e,t){this.keyToValue.set(e,t),this.valueToKey.set(t,e)}getByKey(e){return this.keyToValue.get(e)}getByValue(e){return this.valueToKey.get(e)}clear(){this.keyToValue.clear(),this.valueToKey.clear()}},Ed=class{constructor(e){this.generateIdentifier=e,this.kv=new V2}register(e,t){this.kv.getByValue(e)||(t||(t=this.generateIdentifier(e)),this.kv.set(t,e))}clear(){this.kv.clear()}getIdentifier(e){return this.kv.getByValue(e)}getValue(e){return this.kv.getByKey(e)}},$2=class extends Ed{constructor(){super(e=>e.name),this.classToAllowedProps=new Map}register(e,t){typeof t=="object"?(t.allowProps&&this.classToAllowedProps.set(e,t.allowProps),super.register(e,t.identifier)):super.register(e,t)}getAllowedProps(e){return this.classToAllowedProps.get(e)}};T();T();function z2(e){if("values"in Object)return Object.values(e);const t=[];for(const n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t}function H2(e,t){const n=z2(e);if("find"in n)return n.find(t);const s=n;for(let i=0;i<s.length;i++){const r=s[i];if(t(r))return r}}function as(e,t){Object.entries(e).forEach(([n,s])=>t(s,n))}function xi(e,t){return e.indexOf(t)!==-1}function Ic(e,t){for(let n=0;n<e.length;n++){const s=e[n];if(t(s))return s}}var U2=class{constructor(){this.transfomers={}}register(e){this.transfomers[e.name]=e}findApplicable(e){return H2(this.transfomers,t=>t.isApplicable(e))}findByName(e){return this.transfomers[e]}};T();T();var j2=e=>Object.prototype.toString.call(e).slice(8,-1),wd=e=>typeof e>"u",G2=e=>e===null,Us=e=>typeof e!="object"||e===null||e===Object.prototype?!1:Object.getPrototypeOf(e)===null?!0:Object.getPrototypeOf(e)===Object.prototype,ca=e=>Us(e)&&Object.keys(e).length===0,gn=e=>Array.isArray(e),q2=e=>typeof e=="string",K2=e=>typeof e=="number"&&!isNaN(e),W2=e=>typeof e=="boolean",Y2=e=>e instanceof RegExp,js=e=>e instanceof Map,Gs=e=>e instanceof Set,Sd=e=>j2(e)==="Symbol",X2=e=>e instanceof Date&&!isNaN(e.valueOf()),Q2=e=>e instanceof Error,Dc=e=>typeof e=="number"&&isNaN(e),J2=e=>W2(e)||G2(e)||wd(e)||K2(e)||q2(e)||Sd(e),Z2=e=>typeof e=="bigint",e3=e=>e===1/0||e===-1/0,t3=e=>ArrayBuffer.isView(e)&&!(e instanceof DataView),n3=e=>e instanceof URL;T();var Cd=e=>e.replace(/\./g,"\\."),Rr=e=>e.map(String).map(Cd).join("."),Fs=e=>{const t=[];let n="";for(let i=0;i<e.length;i++){let r=e.charAt(i);if(r==="\\"&&e.charAt(i+1)==="."){n+=".",i++;continue}if(r==="."){t.push(n),n="";continue}n+=r}const s=n;return t.push(s),t};T();function Ot(e,t,n,s){return{isApplicable:e,annotation:t,transform:n,untransform:s}}var xd=[Ot(wd,"undefined",()=>null,()=>{}),Ot(Z2,"bigint",e=>e.toString(),e=>typeof BigInt<"u"?BigInt(e):(console.error("Please add a BigInt polyfill."),e)),Ot(X2,"Date",e=>e.toISOString(),e=>new Date(e)),Ot(Q2,"Error",(e,t)=>{const n={name:e.name,message:e.message};return t.allowedErrorProps.forEach(s=>{n[s]=e[s]}),n},(e,t)=>{const n=new Error(e.message);return n.name=e.name,n.stack=e.stack,t.allowedErrorProps.forEach(s=>{n[s]=e[s]}),n}),Ot(Y2,"regexp",e=>""+e,e=>{const t=e.slice(1,e.lastIndexOf("/")),n=e.slice(e.lastIndexOf("/")+1);return new RegExp(t,n)}),Ot(Gs,"set",e=>[...e.values()],e=>new Set(e)),Ot(js,"map",e=>[...e.entries()],e=>new Map(e)),Ot(e=>Dc(e)||e3(e),"number",e=>Dc(e)?"NaN":e>0?"Infinity":"-Infinity",Number),Ot(e=>e===0&&1/e===-1/0,"number",()=>"-0",Number),Ot(n3,"URL",e=>e.toString(),e=>new URL(e))];function lr(e,t,n,s){return{isApplicable:e,annotation:t,transform:n,untransform:s}}var Td=lr((e,t)=>Sd(e)?!!t.symbolRegistry.getIdentifier(e):!1,(e,t)=>["symbol",t.symbolRegistry.getIdentifier(e)],e=>e.description,(e,t,n)=>{const s=n.symbolRegistry.getValue(t[1]);if(!s)throw new Error("Trying to deserialize unknown symbol");return s}),s3=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce((e,t)=>(e[t.name]=t,e),{}),Bd=lr(t3,e=>["typed-array",e.constructor.name],e=>[...e],(e,t)=>{const n=s3[t[1]];if(!n)throw new Error("Trying to deserialize unknown typed array");return new n(e)});function Od(e,t){return e!=null&&e.constructor?!!t.classRegistry.getIdentifier(e.constructor):!1}var Id=lr(Od,(e,t)=>["class",t.classRegistry.getIdentifier(e.constructor)],(e,t)=>{const n=t.classRegistry.getAllowedProps(e.constructor);if(!n)return{...e};const s={};return n.forEach(i=>{s[i]=e[i]}),s},(e,t,n)=>{const s=n.classRegistry.getValue(t[1]);if(!s)throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");return Object.assign(Object.create(s.prototype),e)}),Dd=lr((e,t)=>!!t.customTransformerRegistry.findApplicable(e),(e,t)=>["custom",t.customTransformerRegistry.findApplicable(e).name],(e,t)=>t.customTransformerRegistry.findApplicable(e).serialize(e),(e,t,n)=>{const s=n.customTransformerRegistry.findByName(t[1]);if(!s)throw new Error("Trying to deserialize unknown custom value");return s.deserialize(e)}),i3=[Id,Td,Dd,Bd],Lc=(e,t)=>{const n=Ic(i3,i=>i.isApplicable(e,t));if(n)return{value:n.transform(e,t),type:n.annotation(e,t)};const s=Ic(xd,i=>i.isApplicable(e,t));if(s)return{value:s.transform(e,t),type:s.annotation}},Ld={};xd.forEach(e=>{Ld[e.annotation]=e});var r3=(e,t,n)=>{if(gn(t))switch(t[0]){case"symbol":return Td.untransform(e,t,n);case"class":return Id.untransform(e,t,n);case"custom":return Dd.untransform(e,t,n);case"typed-array":return Bd.untransform(e,t,n);default:throw new Error("Unknown transformation: "+t)}else{const s=Ld[t];if(!s)throw new Error("Unknown transformation: "+t);return s.untransform(e,n)}};T();var Hn=(e,t)=>{const n=e.keys();for(;t>0;)n.next(),t--;return n.next().value};function Pd(e){if(xi(e,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(xi(e,"prototype"))throw new Error("prototype is not allowed as a property");if(xi(e,"constructor"))throw new Error("constructor is not allowed as a property")}var a3=(e,t)=>{Pd(t);for(let n=0;n<t.length;n++){const s=t[n];if(Gs(e))e=Hn(e,+s);else if(js(e)){const i=+s,r=+t[++n]==0?"key":"value",a=Hn(e,i);switch(r){case"key":e=a;break;case"value":e=e.get(a);break}}else e=e[s]}return e},ua=(e,t,n)=>{if(Pd(t),t.length===0)return n(e);let s=e;for(let r=0;r<t.length-1;r++){const a=t[r];if(gn(s)){const l=+a;s=s[l]}else if(Us(s))s=s[a];else if(Gs(s)){const l=+a;s=Hn(s,l)}else if(js(s)){if(r===t.length-2)break;const o=+a,u=+t[++r]==0?"key":"value",p=Hn(s,o);switch(u){case"key":s=p;break;case"value":s=s.get(p);break}}}const i=t[t.length-1];if(gn(s)?s[+i]=n(s[+i]):Us(s)&&(s[i]=n(s[i])),Gs(s)){const r=Hn(s,+i),a=n(r);r!==a&&(s.delete(r),s.add(a))}if(js(s)){const r=+t[t.length-2],a=Hn(s,r);switch(+i==0?"key":"value"){case"key":{const o=n(a);s.set(o,s.get(a)),o!==a&&s.delete(a);break}case"value":{s.set(a,n(s.get(a)));break}}}return e};function pa(e,t,n=[]){if(!e)return;if(!gn(e)){as(e,(r,a)=>pa(r,t,[...n,...Fs(a)]));return}const[s,i]=e;i&&as(i,(r,a)=>{pa(r,t,[...n,...Fs(a)])}),t(s,n)}function l3(e,t,n){return pa(t,(s,i)=>{e=ua(e,i,r=>r3(r,s,n))}),e}function o3(e,t){function n(s,i){const r=a3(e,Fs(i));s.map(Fs).forEach(a=>{e=ua(e,a,()=>r)})}if(gn(t)){const[s,i]=t;s.forEach(r=>{e=ua(e,Fs(r),()=>e)}),i&&as(i,n)}else as(t,n);return e}var c3=(e,t)=>Us(e)||gn(e)||js(e)||Gs(e)||Od(e,t);function u3(e,t,n){const s=n.get(e);s?s.push(t):n.set(e,[t])}function p3(e,t){const n={};let s;return e.forEach(i=>{if(i.length<=1)return;t||(i=i.map(l=>l.map(String)).sort((l,o)=>l.length-o.length));const[r,...a]=i;r.length===0?s=a.map(Rr):n[Rr(r)]=a.map(Rr)}),s?ca(n)?[s]:[s,n]:ca(n)?void 0:n}var Fd=(e,t,n,s,i=[],r=[],a=new Map)=>{var l;const o=J2(e);if(!o){u3(e,i,t);const m=a.get(e);if(m)return s?{transformedValue:null}:m}if(!c3(e,n)){const m=Lc(e,n),_=m?{transformedValue:m.value,annotations:[m.type]}:{transformedValue:e};return o||a.set(e,_),_}if(xi(r,e))return{transformedValue:null};const u=Lc(e,n),p=(l=u==null?void 0:u.value)!=null?l:e,d=gn(p)?[]:{},f={};as(p,(m,_)=>{if(_==="__proto__"||_==="constructor"||_==="prototype")throw new Error(`Detected property ${_}. This is a prototype pollution risk, please remove it from your object.`);const b=Fd(m,t,n,s,[...i,_],[...r,e],a);d[_]=b.transformedValue,gn(b.annotations)?f[_]=b.annotations:Us(b.annotations)&&as(b.annotations,(y,E)=>{f[Cd(_)+"."+E]=y})});const h=ca(f)?{transformedValue:d,annotations:u?[u.type]:void 0}:{transformedValue:d,annotations:u?[u.type,f]:f};return o||a.set(e,h),h};T();T();function Rd(e){return Object.prototype.toString.call(e).slice(8,-1)}function Pc(e){return Rd(e)==="Array"}function d3(e){if(Rd(e)!=="Object")return!1;const t=Object.getPrototypeOf(e);return!!t&&t.constructor===Object&&t===Object.prototype}function f3(e,t,n,s,i){const r={}.propertyIsEnumerable.call(s,t)?"enumerable":"nonenumerable";r==="enumerable"&&(e[t]=n),i&&r==="nonenumerable"&&Object.defineProperty(e,t,{value:n,enumerable:!1,writable:!0,configurable:!0})}function da(e,t={}){if(Pc(e))return e.map(i=>da(i,t));if(!d3(e))return e;const n=Object.getOwnPropertyNames(e),s=Object.getOwnPropertySymbols(e);return[...n,...s].reduce((i,r)=>{if(Pc(t.props)&&!t.props.includes(r))return i;const a=e[r],l=da(a,t);return f3(i,r,l,e,t.nonenumerable),i},{})}var Se=class{constructor({dedupe:e=!1}={}){this.classRegistry=new $2,this.symbolRegistry=new Ed(t=>{var n;return(n=t.description)!=null?n:""}),this.customTransformerRegistry=new U2,this.allowedErrorProps=[],this.dedupe=e}serialize(e){const t=new Map,n=Fd(e,t,this,this.dedupe),s={json:n.transformedValue};n.annotations&&(s.meta={...s.meta,values:n.annotations});const i=p3(t,this.dedupe);return i&&(s.meta={...s.meta,referentialEqualities:i}),s}deserialize(e){const{json:t,meta:n}=e;let s=da(t);return n!=null&&n.values&&(s=l3(s,n.values,this)),n!=null&&n.referentialEqualities&&(s=o3(s,n.referentialEqualities)),s}stringify(e){return JSON.stringify(this.serialize(e))}parse(e){return this.deserialize(JSON.parse(e))}registerClass(e,t){this.classRegistry.register(e,t)}registerSymbol(e,t){this.symbolRegistry.register(e,t)}registerCustom(e,t){this.customTransformerRegistry.register({name:t,...e})}allowErrorProps(...e){this.allowedErrorProps.push(...e)}};Se.defaultInstance=new Se;Se.serialize=Se.defaultInstance.serialize.bind(Se.defaultInstance);Se.deserialize=Se.defaultInstance.deserialize.bind(Se.defaultInstance);Se.stringify=Se.defaultInstance.stringify.bind(Se.defaultInstance);Se.parse=Se.defaultInstance.parse.bind(Se.defaultInstance);Se.registerClass=Se.defaultInstance.registerClass.bind(Se.defaultInstance);Se.registerSymbol=Se.defaultInstance.registerSymbol.bind(Se.defaultInstance);Se.registerCustom=Se.defaultInstance.registerCustom.bind(Se.defaultInstance);Se.allowErrorProps=Se.defaultInstance.allowErrorProps.bind(Se.defaultInstance);T();T();T();T();T();T();T();T();T();T();T();T();T();T();T();T();T();T();T();T();T();T();T();var Fc,Rc;(Rc=(Fc=q).__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__)!=null||(Fc.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__=[]);var Nc,Mc;(Mc=(Nc=q).__VUE_DEVTOOLS_KIT_RPC_CLIENT__)!=null||(Nc.__VUE_DEVTOOLS_KIT_RPC_CLIENT__=null);var Vc,$c;($c=(Vc=q).__VUE_DEVTOOLS_KIT_RPC_SERVER__)!=null||(Vc.__VUE_DEVTOOLS_KIT_RPC_SERVER__=null);var zc,Hc;(Hc=(zc=q).__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__)!=null||(zc.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__=null);var Uc,jc;(jc=(Uc=q).__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__)!=null||(Uc.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__=null);var Gc,qc;(qc=(Gc=q).__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__)!=null||(Gc.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__=null);T();T();T();T();T();T();T();const h3=JSON.parse('{"encrypt":{},"logo":"/logo.png","author":{"name":"Zzz","url":"https://ylzhong.top"},"fullscreen":true,"contributors":false,"docsDir":"src","repo":"https://github.com/870138612/870138612.github.io","footer":"终将美好，我们的春夏秋冬。","copyright":"Copyright © 2023-present Liang","displayFooter":true,"pageInfo":["Author","Category","Tag","Date","Original","Word","ReadingTime"],"blog":{"timeline":"一天一天","sidebarDisplay":"mobile","intro":"/intro.html"},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家"},"navbar":[{"text":"导航","icon":"daohang","link":"/home.md"},{"text":"文章","icon":"articlelist","link":"/article/"},{"text":"分类","icon":"fenlei","link":"/category/"},{"text":"标签","icon":"tag","link":"/tag/"},{"text":"时间轴","icon":"timeline","link":"/timeline/"}],"sidebar":{"/":[{"collapsible":true,"text":"代码走读openstack","icon":"ops","prefix":"openstack/","children":"structure"},{"collapsible":true,"text":"随记","icon":"duihua","prefix":"other/","children":"structure"},"intro.md"]}}}}'),g3=ee(h3),Nd=()=>g3,Md=Symbol(""),v3=()=>{const e=xe(Md);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},m3=(e,t)=>{const{locales:n,...s}=e;return{...s,...n==null?void 0:n[t]}},_3=Rt({enhance({app:e}){const t=Nd(),n=e._context.provides[Wa],s=A(()=>m3(t.value,n.routeLocale.value));e.provide(Md,s),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return s.value}}}),O2({app:e,id:"org.vuejs.vuepress.plugin-theme-data",label:"VuePress Theme Data Plugin",packageName:"@vuepress/plugin-theme-data",homepage:"https://v2.vuepress.vuejs.org",logo:"https://v2.vuepress.vuejs.org/images/hero.png",componentStateTypes:["VuePress"]},i=>{i.on.inspectComponent(r=>{r.instanceData.state.push({type:"VuePress",key:"themeData",editable:!1,value:t.value},{type:"VuePress",key:"themeLocaleData",editable:!1,value:s.value})})})}}),k3=Object.freeze(Object.defineProperty({__proto__:null,default:_3},Symbol.toStringTag,{value:"Module"})),y3=e=>new Promise(t=>{setTimeout(t,e)}),b3=e=>{const t=tt();return A(()=>e[t.value]??{})},A3=/language-(shellscript|shell|bash|sh|zsh)/,E3=({delay:e=500,duration:t=2e3,locales:n,selector:s,showInMobile:i,ignoreSelector:r=[],transform:a})=>{const l=Qa("(max-width: 419px)"),o=A(()=>!l.value||i),u=b3(n),p=De(),d=b=>{var E;if(b.hasAttribute("copy-code"))return;const y=document.createElement("button");y.type="button",y.classList.add("vp-copy-code-button"),y.setAttribute("aria-label",u.value.copy),y.setAttribute("data-copied",u.value.copied),(E=b.parentElement)==null||E.insertBefore(y,b),b.setAttribute("copy-code","")};de(()=>[p.value.path,o.value],async()=>{document.body.classList.toggle("no-copy-code",!o.value),o.value&&(await Xt(),await y3(e),document.querySelectorAll(s.join(",")).forEach(d))},{immediate:!0});const{copy:h}=d_({legacy:!0}),m=new WeakMap,_=async(b,y,E)=>{const g=y.cloneNode(!0);r.length&&g.querySelectorAll(r.join(",")).forEach(M=>{M.remove()}),a&&a(g);let w=g.textContent||"";if(A3.test(b.className)&&(w=w.replace(/^ *(\$|>) /gm,"")),await h(w),t<=0)return;E.classList.add("copied"),clearTimeout(m.get(E));const P=setTimeout(()=>{E.classList.remove("copied"),E.blur(),m.delete(E)},t);m.set(E,P)};ze("click",b=>{const y=b.target;if(o.value&&y.matches('div[class*="language-"] > button.vp-copy-code-button')){const E=y.parentElement,g=y.nextElementSibling;if(!E||!g)return;_(E,g,y)}})};var w3=[],S3={"/":{copy:"复制代码",copied:"已复制"}},C3=['[vp-content] div[class*="language-"] pre'];const x3=Rt({setup:()=>{E3({selector:C3,ignoreSelector:w3,locales:S3,duration:2e3,delay:500,showInMobile:!1})}}),T3=Object.freeze(Object.defineProperty({__proto__:null,default:x3},Symbol.toStringTag,{value:"Module"})),B3=Rt({setup(){ze("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})}}),O3=Object.freeze(Object.defineProperty({__proto__:null,default:B3},Symbol.toStringTag,{value:"Module"})),I3=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),D3={enhance:({app:e})=>{}},L3=Object.freeze(Object.defineProperty({__proto__:null,default:D3},Symbol.toStringTag,{value:"Module"})),P3=e=>new Promise(t=>{setTimeout(t,e)}),F3=e=>{const t=tt();return A(()=>e[t.value]??{})},R3=ee({}),Vd=Symbol(""),N3=()=>xe(Vd),M3=e=>{e.provide(Vd,R3)},V3='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',$3=e=>Te(e)?Array.from(document.querySelectorAll(e)):e.map(t=>Array.from(document.querySelectorAll(t))).flat(),$d=e=>new Promise((t,n)=>{e.complete?t({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>{t($d(e))},e.onerror=()=>{n()})}),z3=(e,{download:t=!0,fullscreen:n=!0}={})=>{e.on("uiRegister",()=>{if(e.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:s=>{const i=[];let r=-1;for(let a=0;a<e.getNumItems();a++){const l=document.createElement("div");l.className="photo-swipe-bullet",l.onclick=o=>{e.goTo(i.indexOf(o.target))},i.push(l),s.appendChild(l)}e.on("change",()=>{r>=0&&i[r].classList.remove("active"),i[e.currIndex].classList.add("active"),r=e.currIndex})}}),n){const{isSupported:s,toggle:i}=nr();s.value&&e.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{i()}})}t&&e.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:s=>{s.setAttribute("download",""),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener"),e.on("change",()=>{s.setAttribute("href",e.currSlide.data.src)})}})})},H3=(e,{scrollToClose:t=!0,download:n=!0,fullscreen:s=!0,...i})=>ne(async()=>{const{default:r}=await import("./photoswipe.esm-GXRgw7eJ.js");return{default:r}},[]).then(({default:r})=>{let a=null;const l=e.map(o=>({html:V3,element:o,msrc:o.src}));return e.forEach((o,u)=>{const p=()=>{a==null||a.destroy(),a=new r({preloaderDelay:0,showHideAnimationType:"zoom",...i,dataSource:l,index:u,...t?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),z3(a,{download:n,fullscreen:s}),a.addFilter("thumbEl",()=>o),a.addFilter("placeholderSrc",()=>o.src),a.init()};o.getAttribute("photo-swipe")||(o.style.cursor="zoom-in",o.addEventListener("click",()=>{p()}),o.addEventListener("keypress",({key:d})=>{d==="Enter"&&p()}),o.setAttribute("photo-swipe","")),$d(o).then(d=>{l.splice(u,1,d),a==null||a.refreshSlideContent(u)})}),t?ze("wheel",()=>{a==null||a.close()}):()=>{}}),U3=({selector:e,locales:t,delay:n=500,download:s=!0,fullscreen:i=!0,scrollToClose:r=!0})=>{const a=N3(),l=F3(t),o=De(),u=_e();let p=null;const d=()=>{const{photoSwipe:f}=u.value;f!==!1&&Xt().then(()=>P3(n)).then(async()=>{const h=Te(f)?f:e;p=await H3($3(h),{...a.value,...l.value,download:s,fullscreen:i,scrollToClose:r})})};Ie(()=>{d(),de(()=>[o.value.path,a.value],()=>{p==null||p(),d()})}),Js(()=>{p==null||p()})};var j3={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const G3="[vp-content] :not(a) > img:not([no-view])",q3=j3,K3=800,W3=!0,Y3=!0,X3=!0;var Q3=Rt({enhance:({app:e})=>{M3(e)},setup:()=>{U3({selector:G3,delay:K3,locales:q3,download:W3,fullscreen:Y3,scrollToClose:X3})}});const J3=Object.freeze(Object.defineProperty({__proto__:null,default:Q3},Symbol.toStringTag,{value:"Module"})),{entries:Z3}=Object,zd="VUEPRESS_REDIRECT_STATUS",Kc=b_(zd,{}),Wc=w_(zd,{}),e4=e=>{const t=A_(),n=tt(),s=Z3(e.config);return A(()=>{if(s.some(([i])=>n.value===i)){for(const i of t.value)for(const[r,a]of s)if(a.includes(i))return r===n.value?null:{lang:i,localePath:r}}return null})};var t4=z({name:"RedirectModal",props:{config:{type:Object,required:!0},locales:{type:Object,required:!0}},setup(e){const t=Jt(),n=qp(),s=tt(),i=e4(e.config),r=ee(),a=Za(r),l=ee(!1),o=A(()=>{if(!i.value)return null;const{lang:p,localePath:d}=i.value,f=[e.locales[d],e.locales[s.value]];return{hint:f.map(({hint:h})=>h.replace("$1",p)),switch:f.map(({switch:h})=>h.replace("$1",p)).join(" / "),cancel:f.map(({cancel:h})=>h).join(" / "),remember:f.map(({remember:h})=>h).join(" / ")}}),u=()=>{Wc.value[s.value]=!0,l.value&&(Kc.value[s.value]=!0),a.value=!1};return de(n,()=>{a.value=!1}),Ie(async()=>{r.value=document.body,await Xt(),i.value&&!Wc.value[s.value]&&!Kc.value[s.value]&&(a.value=!0)}),Xi(()=>{a.value=!1}),()=>c(bp,{name:"redirect-modal-fade"},()=>{var p,d,f,h;return a.value?c("div",{key:"mask",class:"redirect-modal-mask"},c("div",{key:"popup",class:"redirect-modal-wrapper"},[c("div",{class:"redirect-modal-content"},(p=o.value)==null?void 0:p.hint.map(m=>c("p",m))),c("div",{class:"redirect-modal-hint"},[c("input",{id:"remember-redirect",type:"checkbox",value:l.value,onChange:()=>{l.value=!l.value}}),c("label",{for:"remember-redirect"},(d=o.value)==null?void 0:d.remember)]),c("button",{type:"button",class:"redirect-modal-action primary",onClick:()=>{u(),t.replace(n.value.replace(s.value,i.value.localePath))}},(f=o.value)==null?void 0:f.switch),c("button",{type:"button",class:"redirect-modal-action",onClick:()=>{u()}},(h=o.value)==null?void 0:h.cancel)])):null})}}),n4={config:{"/":["zh-CN"]},autoLocale:!1,defaultLocale:"/",localeFallback:!0,defaultBehavior:"defaultLocale"},s4={"/":{name:"简体中文",hint:"您的首选语言是 $1，是否切换到该语言？",switch:"切换到 $1",cancel:"取消",remember:"记住我的选择"}};const Hd=n4;var i4=Rt({setup(){},rootComponents:[()=>c(t4,{config:Hd,locales:s4})]});const r4=Object.freeze(Object.defineProperty({__proto__:null,config:Hd,default:i4},Symbol.toStringTag,{value:"Module"})),a4=e=>typeof e<"u",{keys:l4}=Object,fe=({name:e="",color:t="currentColor",ariaLabel:n},{attrs:s,slots:i})=>{var r;return c("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":n??`${e} icon`,...s},(r=i.default)==null?void 0:r.call(i))};fe.displayName="IconBase";const pl=(e,{slots:t})=>{var n;return(n=t.default)==null?void 0:n.call(t)},o4=e=>Fn(e)?e:`https://github.com/${e}`,dl=(e="")=>!Fn(e)||e.includes("github.com")?"GitHub":e.includes("bitbucket.org")?"Bitbucket":e.includes("gitlab.com")?"GitLab":e.includes("gitee.com")?"Gitee":null,Ud=()=>c(fe,{name:"github"},()=>c("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));Ud.displayName="GitHubIcon";const jd=()=>c(fe,{name:"gitee"},()=>c("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));jd.displayName="GiteeIcon";const Gd=()=>c(fe,{name:"bitbucket"},()=>c("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Gd.displayName="BitbucketIcon";const qd=()=>c(fe,{name:"source"},()=>c("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));qd.displayName="SourceIcon";const c4=({link:e,type:t=dl(e??"")})=>{if(!t)return null;const n=t.toLowerCase();return c(n==="bitbucket"?Gd:n==="github"?Ud:n==="gitlab"?"GitLab":n==="gitee"?jd:qd)},u4=(e,t=0)=>{let n=3735928559^t,s=1103547991^t;for(let i=0,r;i<e.length;i++)r=e.charCodeAt(i),n=Math.imul(n^r,2654435761),s=Math.imul(s^r,1597334677);return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(s^s>>>13,3266489909),s=Math.imul(s^s>>>16,2246822507),s^=Math.imul(n^n>>>13,3266489909),4294967296*(2097151&s)+(n>>>0)},ri=(e,t)=>u4(e)%t;let p4=class{constructor(){pr(this,"containerElement");pr(this,"messageElements",{});const t="message-container",n=document.getElementById(t);n?this.containerElement=n:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}pop(t,n=2e3){const s=document.createElement("div"),i=Date.now();return s.className="message move-in",s.innerHTML=t,this.containerElement.appendChild(s),this.messageElements[i]=s,n>0&&setTimeout(()=>{this.close(i)},n),i}close(t){if(t){const n=this.messageElements[t];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.messageElements[t]})}else l4(this.messageElements).forEach(n=>this.close(Number(n)))}destroy(){document.body.removeChild(this.containerElement)}};const Kd=/#.*$/u,d4=e=>{const t=Kd.exec(e);return t?t[0]:""},Yc=e=>decodeURI(e).replace(Kd,"").replace(/\/index\.html$/iu,"/").replace(/\/(README|index)\.md$/iu,"/").replace(/\.(?:html|md)$/iu,""),Wd=(e,t)=>{if(!a4(t))return!1;const n=Yc(e.path),s=Yc(t),i=d4(t);return i?i===e.hash&&(!s||n===s):n===s};var f4=e=>Object.prototype.toString.call(e)==="[object Object]",qs=e=>typeof e=="string";const{isArray:Yd}=Array,Xc=e=>f4(e)&&qs(e.name),Ks=(e,t=!1)=>e?Yd(e)?e.map(n=>qs(n)?{name:n}:Xc(n)?n:null).filter(n=>n!==null):qs(e)?[{name:e}]:Xc(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,e),[]):[],Xd=(e,t)=>{if(e){if(Yd(e)&&e.every(qs))return e;if(qs(e))return[e];console.error(`Expect ${t} to be \`string[] | string | undefined\`, but got`,e)}return[]},Qd=e=>Xd(e,"category"),Jd=e=>Xd(e,"tag"),h4=e=>{const t=tt();return A(()=>e[t.value]??{})};var Qc={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const Zd=()=>{const e=De();return A(()=>e.value.readingTime??null)},ef=(e,t)=>{const{minutes:n,words:s}=e,{less1Minute:i,word:r,time:a}=t;return{time:n<1?i:a.replace("$time",Math.round(n).toString()),words:r.replace("$word",s.toString())}},Jc={words:"",time:""},fa=typeof Qc>"u"?null:Qc,tf=()=>fa?h4(fa):A(()=>null),g4=()=>{if(typeof fa>"u")return A(()=>Jc);const e=Zd(),t=tf();return A(()=>e.value&&t.value?ef(e.value,t.value):Jc)},Zt=()=>Nd(),ce=()=>v3(),rt=()=>{const e=Zt();return A(()=>!!e.value.pure)},Ti=()=>null,v4="719px",m4="1440px",_4="true",k4="9",_n={mobileBreakPoint:v4,pcBreakPoint:m4,enableThemeColor:_4,"theme-1":"#f26d6d","theme-2":"#f1cbcd","theme-3":"#3eaf7c","theme-4":"#fb9b5f",colorNumber:k4},fl={"/openstack/":[{text:"计算服务nova",prefix:"nova/",collapsible:!0,icon:"nova",children:["launcher","pci_passthrough","service"]},{text:"网络服务neutron",prefix:"neutron/",collapsible:!0,icon:"net",children:["openstack_3service"]},{text:"卷服务cinder",prefix:"cinder/",collapsible:!0,icon:"cinder",children:["openstack_serv4ice"]}],"/other/":["component_oslo_messaging"]},Ue=e=>{const{icon:t="",color:n,size:s}=e,i=n||s?{}:null;return n&&(i.color=n),s&&(i.height=Number.isNaN(Number(s))?s:`${s}px`),Fn(t)?c("img",{class:"icon",src:t,alt:"","no-view":"",style:i}):sr(t)?c("img",{class:"icon",src:we(t),alt:"","aria-hidden":"","no-view":"",style:i}):c(Ct("FontIcon"),e)};Ue.displayName="HopeIcon";const nf=()=>{const e=ce();return A(()=>e.value.author)},y4="http://.",Mn=()=>{const e=Jt(),t=Ft();return n=>{if(n)if(sr(n))t.path!==n&&e.push(n);else if(ei(n))window&&window.open(n);else{const s=t.path.slice(0,t.path.lastIndexOf("/"));e.push(new URL(`${s}/${encodeURI(n)}`,y4).pathname)}}},sf=()=>{const e=_e(),t=nf();return A(()=>{const{author:n}=e.value;return n?Ks(n):n===!1?[]:Ks(t.value,!1)})},b4=()=>{const e=_e(),t=xe(Symbol.for("categoryMap"));return A(()=>Qd(e.value.category??e.value.categories).map(n=>{var s;return{name:n,path:((s=t==null?void 0:t.value.map[n])==null?void 0:s.path)??""}}))},A4=()=>{const e=_e(),t=xe(Symbol.for("tagMap"));return A(()=>Jd(e.value.tag??e.value.tags).map(n=>{var s;return{name:n,path:((s=t==null?void 0:t.value.map[n])==null?void 0:s.path)??""}}))},E4=()=>{const e=_e(),t=De();return A(()=>{const n=el(e.value.date);if(n)return n;const{createdTime:s}=t.value.git??{};return s?new Date(s):null})},w4=()=>{const e=ce(),t=De(),n=_e(),s=sf(),i=b4(),r=A4(),a=E4(),l=Zd(),o=g4(),u=A(()=>({author:s.value,category:i.value,date:a.value,localizedDate:t.value.localizedDate,tag:r.value,isOriginal:n.value.isOriginal??!1,readingTime:l.value,readingTimeLocale:o.value,pageview:n.value.pageview??!0})),p=A(()=>n.value.pageInfo??e.value.pageInfo??null);return{info:u,items:p}},hl=(e,t)=>"activeMatch"in t?new RegExp(t.activeMatch,"u").test(e.path):Wd(e,t.link),gl=(e,t)=>"children"in t?!!t.prefix&&Wd(e,t.prefix)||t.children.some(n=>gl(e,n)):hl(e,t),ha=e=>!ja(e)&&!ei(e);var Ze=(e=>(e.title="t",e.shortTitle="s",e.icon="i",e.index="I",e.order="O",e.breadcrumbExclude="b",e))(Ze||{}),qe=(e=>(e.type="y",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e))(qe||{}),rf=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(rf||{});const zi=(e,t=!1,n)=>{const{meta:s,path:i,notFound:r}=yt(e,n);return r?{text:i,link:i}:{text:!t&&s[Ze.shortTitle]?s[Ze.shortTitle]:s[Ze.title]||i,link:i,...s[Ze.icon]?{icon:s[Ze.icon]}:{}}},Tn=(e="",t="")=>sr(t)||ei(t)?t:`${Ep(e)}${t}`,af=(e,t)=>{const n=Te(e)?zi(Tn(t,e)):e.link?{...e,link:ha(e.link)?yt(Tn(t,e.link)).path:e.link}:e;if("children"in n){const s=Tn(t,n.prefix),i=n.children==="structure"?fl[s]:n.children;return{...n,prefix:s,children:i.map(r=>af(r,s))}}return{...n}},ga=({config:e,prefix:t=""})=>e.map(n=>af(n,t)),S4=({config:e,routePath:t,headerDepth:n})=>{const s=Dn(e).sort((i,r)=>r.length-i.length);for(const i of s)if(Vi(decodeURI(t),i)){const r=e[i];return ga({config:r==="structure"?fl[i]:r||[],headerDepth:n,prefix:i})}return console.warn(`${decodeURI(t)} is missing sidebar config.`),[]},C4=({config:e,headerDepth:t,routeLocale:n,routePath:s})=>e==="structure"?ga({config:fl[n],headerDepth:t,prefix:n}):sa(e)?ga({config:e,headerDepth:t}):Ji(e)?S4({config:e,routePath:s,headerDepth:t}):[],lf=Symbol(""),x4=()=>{const e=_e(),t=ce(),n=tt(),s=qp(),i=A(()=>e.value.home?!1:e.value.sidebar??t.value.sidebar??"structure"),r=A(()=>e.value.headerDepth??t.value.headerDepth??2),a=A(()=>C4({config:i.value,headerDepth:r.value,routeLocale:n.value,routePath:s.value}));wt(lf,a)},vl=()=>{const e=xe(lf);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},{mobileBreakPoint:T4,pcBreakPoint:B4}=_n,Zc=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,ai=()=>{const e=ee(!1),t=ee(!1),n=()=>{e.value=window.innerWidth<=(Zc(T4)??719),t.value=window.innerWidth>=(Zc(B4)??1440)};return ze("resize",n,!1),ze("orientationchange",n,!1),Ie(()=>{n()}),{isMobile:e,isPC:t}},of=Symbol(""),li=()=>{const e=xe(of);if(!e)throw new Error("useDarkmode() is called without provider.");return e},O4=e=>{const t=Zt(),n=v_(),s=A(()=>t.value.darkmode??"switch"),i=Ja("vuepress-theme-hope-scheme","auto"),r=A(()=>{const l=s.value;return l==="disable"?!1:l==="enable"?!0:l==="auto"?n.value:l==="toggle"?i.value==="dark":i.value==="dark"||i.value==="auto"&&n.value}),a=A(()=>{const l=s.value;return l==="switch"||l==="toggle"});e.provide(of,{canToggle:a,config:s,isDarkmode:r,status:i}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>r.value}})},I4=()=>{const{config:e,isDarkmode:t,status:n}=li();$a(()=>{e.value==="disable"?n.value="light":e.value==="enable"?n.value="dark":e.value==="toggle"&&n.value==="auto"&&(n.value="light")}),Ie(()=>{de(t,s=>document.documentElement.setAttribute("data-theme",s?"dark":"light"),{immediate:!0})})};var D4=z({name:"PageFooter",setup(){const e=Zt(),t=ce(),n=_e(),s=sf(),i=A(()=>{const{copyright:u,footer:p}=n.value;return p!==!1&&!!(u||p||t.value.displayFooter)}),r=A(()=>{const{footer:u}=n.value;return u===!1?!1:Te(u)?u:t.value.footer??""}),a=A(()=>s.value.map(({name:u})=>u).join(", ")),l=u=>`Copyright © ${new Date().getFullYear()} ${a.value} ${u?`${u} Licensed`:""}`,o=A(()=>{const{copyright:u,license:p=""}=n.value,{license:d}=e.value,{copyright:f}=t.value;return u??(p?l(p):f??(a.value||d?l(d):!1))});return()=>i.value?c("footer",{class:"vp-footer-wrapper","vp-footer":""},[r.value?c("div",{class:"vp-footer",innerHTML:r.value}):null,o.value?c("div",{class:"vp-copyright",innerHTML:o.value}):null]):null}}),it=z({name:"AutoLink",props:{config:{type:Object,required:!0}},emits:["focusout"],slots:Object,setup(e,{emit:t,slots:n}){return()=>{const{icon:s}=e.config;return c(qm,{...e,onFocusout:()=>t("focusout")},{default:n.default?()=>n.default():null,before:n.before?()=>n.before():s?()=>c(Ue,{icon:s}):null,after:n.after?()=>n.after():null})}}}),L4=z({name:"NavbarDropdown",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=De(),s=ps(e,"config"),i=A(()=>s.value.ariaLabel??s.value.text),r=ee(!1);de(()=>n.value.path,()=>{r.value=!1});const a=l=>{l.detail===0&&(r.value=!r.value)};return()=>{var l;return c("div",{class:["vp-dropdown-wrapper",{open:r.value}]},[c("button",{type:"button",class:"vp-dropdown-title","aria-label":i.value,onClick:a},[((l=t.title)==null?void 0:l.call(t))||[c(Ue,{icon:s.value.icon}),e.config.text],c("span",{class:"arrow"}),c("ul",{class:"vp-dropdown"},s.value.children.map((o,u)=>{const p=u===s.value.children.length-1;return c("li",{class:"vp-dropdown-item"},"children"in o?[c("h4",{class:"vp-dropdown-subtitle"},o.link?c(it,{config:o,onFocusout:()=>{o.children.length===0&&p&&(r.value=!1)}}):o.text),c("ul",{class:"vp-dropdown-subitems"},o.children.map((d,f)=>c("li",{class:"vp-dropdown-subitem"},c(it,{config:d,onFocusout:()=>{f===o.children.length-1&&p&&(r.value=!1)}}))))]:c(it,{config:o,onFocusout:()=>{p&&(r.value=!1)}}))}))])])}}});const cf=(e,t="")=>Te(e)?zi(Tn(t,e)):"children"in e?{...e,...e.link&&ha(e.link)?{link:yt(Tn(t,e.link)).path}:{},children:e.children.map(n=>cf(n,Tn(t,e.prefix)))}:{...e,link:ha(e.link)?yt(Tn(t,e.link)).path:e.link},uf=()=>{const e=ce();return A(()=>(e.value.navbar||[]).map(t=>cf(t)))},P4=()=>{const e=ce(),t=A(()=>e.value.repo),n=A(()=>t.value?o4(t.value):null),s=A(()=>t.value?dl(t.value):null),i=A(()=>n.value?e.value.repoLabel??s.value??"Source":null);return A(()=>!n.value||!i.value||e.value.repoDisplay===!1?null:{type:s.value??"Source",label:i.value,link:n.value})};var F4=z({name:"NavScreenMenu",props:{config:{type:Object,required:!0}},setup(e){const t=De(),n=ps(e,"config"),s=A(()=>n.value.ariaLabel??n.value.text),i=ee(!1);de(()=>t.value.path,()=>{i.value=!1});const r=(a,l)=>l[l.length-1]===a;return()=>[c("button",{type:"button",class:["vp-nav-screen-menu-title",{active:i.value}],"aria-label":s.value,onClick:()=>{i.value=!i.value}},[c("span",{class:"text"},[c(Ue,{icon:n.value.icon}),e.config.text]),c("span",{class:["arrow",i.value?"down":"end"]})]),c("ul",{class:["vp-nav-screen-menu",{hide:!i.value}]},n.value.children.map(a=>c("li",{class:"vp-nav-screen-menu-item"},"children"in a?[c("h4",{class:"vp-nav-screen-menu-subtitle"},a.link?c(it,{config:a,onFocusout:()=>{r(a,n.value.children)&&a.children.length===0&&(i.value=!1)}}):a.text),c("ul",{class:"vp-nav-screen-menu-subitems"},a.children.map(l=>c("li",{class:"vp-nav-screen-menu-subitem"},c(it,{config:l,onFocusout:()=>{r(l,a.children)&&r(a,n.value.children)&&(i.value=!1)}}))))]:c(it,{config:a,onFocusout:()=>{r(a,n.value.children)&&(i.value=!1)}}))))]}}),R4=z({name:"NavScreenLinks",setup(){const e=uf();return()=>e.value.length?c("nav",{class:"nav-screen-links"},e.value.map(t=>c("div",{class:"navbar-links-item"},"children"in t?c(F4,{config:t}):c(it,{config:t})))):null}});const pf=()=>c(fe,{name:"dark"},()=>c("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));pf.displayName="DarkIcon";const df=()=>c(fe,{name:"light"},()=>c("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));df.displayName="LightIcon";const ff=()=>c(fe,{name:"auto"},()=>c("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));ff.displayName="AutoIcon";const hf=()=>c(fe,{name:"enter-fullscreen"},()=>c("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));hf.displayName="EnterFullScreenIcon";const gf=()=>c(fe,{name:"cancel-fullscreen"},()=>c("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));gf.displayName="CancelFullScreenIcon";const vf=()=>c(fe,{name:"outlook"},()=>[c("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);vf.displayName="OutlookIcon";var mf=z({name:"ColorModeSwitch",setup(){const{config:e,isDarkmode:t,status:n}=li(),s=rt(),i=()=>{e.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"},r=async a=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!s.value)||!a){i();return}const l=a.clientX,o=a.clientY,u=Math.hypot(Math.max(l,innerWidth-l),Math.max(o,innerHeight-o)),p=t.value;await document.startViewTransition(async()=>{i(),await Xt()}).ready,t.value!==p&&document.documentElement.animate({clipPath:t.value?[`circle(${u}px at ${l}px ${o}px)`,`circle(0px at ${l}px ${o}px)`]:[`circle(0px at ${l}px ${o}px)`,`circle(${u}px at ${l}px ${o}px)`]},{duration:400,pseudoElement:t.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>c("button",{type:"button",class:"vp-color-mode-switch",id:"color-mode-switch",onClick:r},[c(ff,{style:{display:n.value==="auto"?"block":"none"}}),c(pf,{style:{display:n.value==="dark"?"block":"none"}}),c(df,{style:{display:n.value==="light"?"block":"none"}})])}}),N4=z({name:"ColorMode",setup(){const e=ce(),{canToggle:t}=li(),n=A(()=>e.value.outlookLocales.darkmode);return()=>t.value?c("div",{class:"vp-color-mode"},[c("label",{class:"vp-color-mode-title",for:"color-mode-switch"},n.value),c(mf)]):null}});const Nr="VUEPRESS_THEME_COLOR";var M4=z({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const t=(n="")=>{const s=document.documentElement.classList,i=Dn(e.themeColor);if(!n){localStorage.removeItem(Nr),s.remove(...i);return}s.remove(...i.filter(r=>r!==n)),s.add(n),localStorage.setItem(Nr,n)};return Ie(()=>{const n=localStorage.getItem(Nr);n&&t(n)}),()=>c("ul",{class:"vp-theme-color-picker",id:"theme-color-picker"},[c("li",c("span",{class:"theme-color",onClick:()=>t()})),Nn(e.themeColor).map(([n,s])=>c("li",c("span",{style:{background:s},onClick:()=>t(n)})))])}});const Xn=_n.enableThemeColor==="true",V4=Xn?H_(Nn(_n).filter(([e])=>e.startsWith("theme-"))):{};var $4=z({name:"ThemeColor",setup(){const e=ce(),t=A(()=>e.value.outlookLocales.themeColor);return()=>Xn?c("div",{class:"vp-theme-color"},[c("label",{class:"vp-theme-color-title",for:"theme-color-picker"},t.value),c(M4,{themeColor:V4})]):null}}),z4=z({name:"ToggleFullScreenButton",setup(){const{isSupported:e,isFullscreen:t,toggle:n}=nr();return()=>e?c("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:t.value,onClick:()=>n()},t.value?c(gf):c(hf)):null}}),_f=z({name:"ToggleFullScreenButton",setup(){const e=ce(),{isSupported:t}=nr(),n=A(()=>e.value.outlookLocales.fullscreen);return()=>t?c("div",{class:"full-screen-wrapper"},[c("label",{class:"full-screen-title",for:"full-screen-switch"},n.value),c(z4)]):null}}),kf=z({name:"OutlookSettings",setup(){const e=Zt(),t=rt(),n=A(()=>!t.value&&e.value.fullscreen);return()=>c(Yp,()=>[Xn?c($4):null,c(N4),n.value?c(_f):null])}}),H4=z({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:t,slots:n}){const s=De(),{isMobile:i}=ai(),r=He(),a=Za(r);return Ie(()=>{r.value=document.body,de(i,l=>{!l&&e.show&&(a.value=!1,t("close"))}),de(()=>s.value.path,()=>{a.value=!1,t("close")})}),Js(()=>{a.value=!1}),()=>c(es,{name:"fade",onEnter:()=>{a.value=!0},onAfterLeave:()=>{a.value=!1}},()=>{var l,o;return e.show?c("div",{id:"nav-screen",class:"vp-nav-screen"},c("div",{class:"vp-nav-screen-container"},[(l=n.before)==null?void 0:l.call(n),c(R4),c("div",{class:"vp-outlook-wrapper"},c(kf)),(o=n.after)==null?void 0:o.call(n)])):null})}}),U4=z({name:"NavbarBrand",setup(){const e=tt(),t=ti(),n=ce(),s=A(()=>n.value.home??e.value),i=A(()=>t.value.title),r=A(()=>n.value.navbarTitle??i.value),a=A(()=>n.value.logo?we(n.value.logo):null),l=A(()=>n.value.logoDark?we(n.value.logoDark):null);return()=>c(Ve,{to:s.value,class:"vp-brand","aria-label":n.value.routeLocales.home},()=>[a.value?c("img",{class:["vp-nav-logo",{light:!!l.value}],src:a.value,alt:""}):null,l.value?c("img",{class:["vp-nav-logo dark"],src:l.value,alt:""}):null,r.value?c("span",{class:["vp-site-name",{"hide-in-pad":a.value&&(n.value.hideSiteNameOnMobile??!0)}]},r.value):null])}}),j4=z({name:"NavbarLinks",setup(){const e=uf();return()=>e.value.length?c("nav",{class:"vp-nav-links"},e.value.map(t=>c("div",{class:"vp-nav-item hide-in-mobile"},"children"in t?c(L4,{config:t}):c(it,{config:t})))):null}}),G4=z({name:"RepoLink",setup(){const e=P4();return()=>e.value?c("div",{class:"vp-nav-item vp-action"},c("a",{class:"vp-action-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},c(c4,{type:e.value.type,style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const yf=({active:e=!1},{emit:t})=>c("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>t("toggle")},c("span",[c("span",{class:"vp-top"}),c("span",{class:"vp-middle"}),c("span",{class:"vp-bottom"})]));yf.displayName="ToggleNavbarButton";const va=(e,{emit:t})=>c("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},c("span",{class:"icon"}));va.displayName="ToggleSidebarButton",va.emits=["toggle"];var q4=z({name:"OutlookButton",setup(){const e=Zt(),t=De(),{canToggle:n}=li(),{isSupported:s}=nr(),i=rt(),r=ee(!1),a=A(()=>!i.value&&e.value.fullscreen&&s),l=A(()=>Xn||n.value||a.value);return de(()=>t.value.path,()=>{r.value=!1}),()=>l.value?c("div",{class:"vp-nav-item hide-in-mobile"},n.value&&!a.value&&!Xn?c(mf):a.value&&!n.value&&!Xn?c(_f):c("button",{type:"button",class:["vp-outlook-button",{open:r.value}],tabindex:"-1","aria-hidden":!0},[c(vf),c("div",{class:"vp-outlook-dropdown"},c(kf))])):null}}),K4=z({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:t,slots:n}){const s=ce(),{isMobile:i}=ai(),r=ee(!1),a=A(()=>{const{navbarAutoHide:p="mobile"}=s.value;return p!=="none"&&(p==="always"||i.value)}),l=A(()=>s.value.navbarLayout??{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),o={Brand:U4,Language:Ti,Links:j4,Repo:G4,Outlook:q4,Search:Kt("SearchBox")?Ct("SearchBox"):Ti},u=p=>o[p]??(Kt(p)?Ct(p):Ti);return()=>{var p,d,f,h,m,_,b,y,E;return[c("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":a.value}],"vp-navbar":""},[c("div",{class:"vp-navbar-start"},[c(va,{onToggle:()=>{r.value&&(r.value=!1),t("toggleSidebar")}}),(p=n.startBefore)==null?void 0:p.call(n),(d=l.value.start)==null?void 0:d.map(g=>c(u(g))),(f=n.startAfter)==null?void 0:f.call(n)]),c("div",{class:"vp-navbar-center"},[(h=n.centerBefore)==null?void 0:h.call(n),(m=l.value.center)==null?void 0:m.map(g=>c(u(g))),(_=n.centerAfter)==null?void 0:_.call(n)]),c("div",{class:"vp-navbar-end"},[(b=n.endBefore)==null?void 0:b.call(n),(y=l.value.end)==null?void 0:y.map(g=>c(u(g))),(E=n.endAfter)==null?void 0:E.call(n),c(yf,{active:r.value,onToggle:()=>{r.value=!r.value}})])]),c(H4,{show:r.value,onClose:()=>{r.value=!1}},{before:n.screenTop?()=>n.screenTop():null,after:n.screenBottom?()=>n.screenBottom():null})]}}}),W4=z({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const t=Ft();return()=>Te(e.config.link)?c(it,{class:["vp-sidebar-link",{active:hl(t,e.config)}],config:{...e.config,exact:!0}}):c("p",e,[c(Ue,{icon:e.config.icon}),e.config.text])}}),Y4=z({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const n=Ft(),s=ee(!1),i=A(()=>gl(n,e.config)),r=A(()=>hl(n,e.config)),a=A(()=>e.open||e.config.expanded&&!s.value);return()=>{const{collapsible:l,children:o=[],icon:u,prefix:p,link:d,text:f}=e.config;return c("section",{class:"vp-sidebar-group"},[c(l?"button":"p",{class:["vp-sidebar-header",{clickable:l||d,exact:r.value,active:i.value}],...l?{type:"button",onClick:()=>{s.value=!0,t("toggle")}}:{}},[c(Ue,{icon:u}),d?c(it,{class:"vp-sidebar-title no-external-link-icon",config:{text:f,link:d}}):c("span",{class:"vp-sidebar-title"},f),l?c("span",{class:["vp-arrow",a.value?"down":"end"]}):null]),a.value||!l?c(bf,{key:p,config:o}):null])}}}),bf=z({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const t=Ft(),n=ee(-1),s=i=>{n.value=i===n.value?-1:i};return de(()=>t.path,()=>{const i=e.config.findIndex(r=>gl(t,r));n.value=i},{immediate:!0,flush:"post"}),()=>c("ul",{class:"vp-sidebar-links"},e.config.map((i,r)=>c("li","children"in i?c(Y4,{config:i,open:r===n.value,onToggle:()=>s(r)}):c(W4,{config:i}))))}}),X4=z({name:"SideBar",slots:Object,setup(e,{slots:t}){const n=Ft(),s=vl(),i=He();return Ie(()=>{de(()=>n.hash,r=>{const a=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${r}"]`);if(!a)return;const{top:l,height:o}=i.value.getBoundingClientRect(),{top:u,height:p}=a.getBoundingClientRect();u<l?a.scrollIntoView(!0):u+p>l+o&&a.scrollIntoView(!1)},{immediate:!0})}),()=>{var r,a,l;return c("aside",{ref:i,key:"sidebar",id:"sidebar",class:"vp-sidebar","vp-sidebar":""},[(r=t.top)==null?void 0:r.call(t),((a=t.default)==null?void 0:a.call(t))??c(bf,{config:s.value}),(l=t.bottom)==null?void 0:l.call(t)])}}}),ml=z({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){const n=Jt(),s=_e(),i=Zt(),r=ce(),{isMobile:a,isPC:l}=ai(),o=rt(),[u,p]=na(!1),[d,f]=na(!1),h=vl(),m=ee(!1),_=A(()=>e.noNavbar||s.value.navbar===!1||r.value.navbar===!1?!1:!!(r.value.logo??r.value.repo??r.value.navbar)),b=A(()=>e.noSidebar?!1:s.value.sidebar!==!1&&h.value.length!==0&&!s.value.home),y=A(()=>s.value.externalLinkIcon??i.value.externalLinkIcon??!0),E=A(()=>!e.noToc&&!s.value.home&&(s.value.toc??r.value.toc??!0)),g={x:0,y:0},w=R=>{g.x=R.changedTouches[0].clientX,g.y=R.changedTouches[0].clientY},P=R=>{const Q=R.changedTouches[0].clientX-g.x,V=R.changedTouches[0].clientY-g.y;Math.abs(Q)>Math.abs(V)*1.5&&Math.abs(Q)>40&&(Q>0&&g.x<=80?p(!0):p(!1))};let M=0;return ze("scroll",l_(()=>{const R=window.scrollY;R<=58||R<M?m.value=!1:M+200<R&&!u.value&&(m.value=!0),M=R},300,!0)),de(a,R=>{R||p(!1)}),Ie(()=>{const R=Za(document.body);de(u,V=>{R.value=V});const Q=n.afterEach(()=>{p(!1)});Js(()=>{R.value=!1,Q()})}),()=>c(Kt("GlobalEncrypt")?Ct("GlobalEncrypt"):pl,()=>c("div",{class:["theme-container",{"hide-navbar":m.value,"no-navbar":!_.value,"sidebar-collapsed":!a.value&&!l.value&&d.value,"sidebar-open":a.value&&u.value,"no-sidebar":!b.value&&!t.sidebar&&!t.sidebarTop&&!t.sidebarBottom,"external-link-icon":y.value,pure:o.value,"has-toc":E.value},e.containerClass,s.value.containerClass??""],"vp-container":"",onTouchStart:w,onTouchEnd:P},[_.value?c(K4,{onToggleSidebar:()=>p()},{startBefore:t.navbarStartBefore?()=>t.navbarStartBefore():null,startAfter:t.navbarStartAfter?()=>t.navbarStartAfter():null,centerBefore:t.navbarCenterBefore?()=>t.navbarCenterBefore():null,centerAfter:t.navbarCenterAfter?()=>t.navbarCenterAfter():null,endBefore:t.navbarEndBefore?()=>t.navbarEndBefore():null,endAfter:t.navbarEndAfter?()=>t.navbarEndAfter():null,screenTop:t.navScreenTop?()=>t.navScreenTop():null,screenBottom:t.navScreenBottom?()=>t.navScreenBottom():null}):null,c(es,{name:"fade"},()=>u.value?c("div",{class:"vp-sidebar-mask",onClick:()=>p(!1)}):null),c(es,{name:"fade"},()=>a.value?null:c("div",{class:"toggle-sidebar-wrapper",onClick:()=>f()},c("span",{class:["arrow",d.value?"end":"start"]}))),c(X4,{},{default:t.sidebar?()=>t.sidebar():null,top:t.sidebarTop?()=>t.sidebarTop():null,bottom:t.sidebarBottom?()=>t.sidebarBottom():null}),t.default(),c(D4)]))}});const le=z({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:t}){const n=i=>{i.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,i.style.transform="translateY(-20px)",i.style.opacity="0"},s=i=>{i.style.transform="translateY(0)",i.style.opacity="1"};return()=>{const i={name:"drop",appear:e.appear,onAppear:n,onAfterAppear:s,onEnter:n,onAfterEnter:s,onBeforeLeave:n},r=()=>t.default();return e.type==="group"?c(bp,i,r):c(es,i,r)}}}),ls=({custom:e})=>c(Xp,{class:["theme-hope-content",{custom:e}],"vp-content":""});ls.displayName="MarkdownContent",ls.props={custom:Boolean};const Af=()=>c(fe,{name:"author"},()=>c("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Af.displayName="AuthorIcon";const Ef=()=>c(fe,{name:"calendar"},()=>c("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Ef.displayName="CalendarIcon";const wf=()=>c(fe,{name:"category"},()=>c("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));wf.displayName="CategoryIcon";const Sf=()=>c(fe,{name:"print"},()=>c("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));Sf.displayName="PrintIcon";const Cf=()=>c(fe,{name:"tag"},()=>c("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Cf.displayName="TagIcon";const xf=()=>c(fe,{name:"timer"},()=>c("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));xf.displayName="TimerIcon";const Tf=()=>c(fe,{name:"word"},()=>[c("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),c("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Tf.displayName="WordIcon";const kn=()=>{const e=ce();return A(()=>e.value.metaLocales)};var Q4=z({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0}},setup(e){const t=kn(),n=rt();return()=>e.author.length?c("span",{class:"page-author-info","aria-label":`${t.value.author}${n.value?"":"🖊"}`,...n.value?{}:{"data-balloon-pos":"up"}},[c(Af),c("span",e.author.map(s=>s.url?c("a",{class:"page-author-item",href:s.url,target:"_blank",rel:"noopener noreferrer"},s.name):c("span",{class:"page-author-item"},s.name))),c("span",{property:"author",content:e.author.map(s=>s.name).join(", ")})]):null}}),J4=z({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0}},setup(e){const t=kn(),n=Mn(),s=rt();return()=>e.category.length?c("span",{class:"page-category-info","aria-label":`${t.value.category}${s.value?"":"🌈"}`,...s.value?{}:{"data-balloon-pos":"up"}},[c(wf),e.category.map(({name:i,path:r})=>c("span",{class:["page-category-item",{[`color${ri(i,Number(_n.colorNumber))}`]:!s.value,clickable:r}],role:r?"navigation":"",onClick:()=>{r&&n(r)}},i)),c("meta",{property:"articleSection",content:e.category.map(({name:i})=>i).join(",")})]):null}}),Z4=z({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""}},setup(e){const t=Ya(),n=kn(),s=rt();return()=>e.date?c("span",{class:"page-date-info","aria-label":`${n.value.date}${s.value?"":"📅"}`,...s.value?{}:{"data-balloon-pos":"up"}},[c(Ef),c("span",{"data-allow-mismatch":"text"},e.localizedDate||e.date.toLocaleDateString(t.value)),c("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),ek=z({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const t=kn();return()=>e.isOriginal?c("span",{class:"page-original-info"},t.value.origin):null}}),tk=z({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null}},setup(e){const t=kn(),n=rt(),s=A(()=>{if(!e.readingTime)return null;const{minutes:i}=e.readingTime;return i<1?"PT1M":`PT${Math.round(i)}M`});return()=>{var i,r;return(i=e.readingTimeLocale)!=null&&i.time?c("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${n.value?"":"⌛"}`,...n.value?{}:{"data-balloon-pos":"up"}},[c(xf),c("span",(r=e.readingTimeLocale)==null?void 0:r.time),c("meta",{property:"timeRequired",content:s.value})]):null}}}),nk=z({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]}},setup(e){const t=kn(),n=Mn(),s=rt();return()=>e.tag.length?c("span",{class:"page-tag-info","aria-label":`${t.value.tag}${s.value?"":"🏷"}`,...s.value?{}:{"data-balloon-pos":"up"}},[c(Cf),e.tag.map(({name:i,path:r})=>c("span",{class:["page-tag-item",{[`color${ri(i,Number(_n.colorNumber))}`]:!s.value,clickable:r}],role:r?"navigation":"",onClick:()=>{r&&n(r)}},i)),c("meta",{property:"keywords",content:e.tag.map(({name:i})=>i).join(",")})]):null}}),sk=z({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null}},setup(e){const t=kn(),n=rt();return()=>{var s,i,r;return(s=e.readingTimeLocale)!=null&&s.words?c("span",{class:"page-word-info","aria-label":`${t.value.words}${n.value?"":"🔠"}`,...n.value?{}:{"data-balloon-pos":"up"}},[c(Tf),c("span",(i=e.readingTimeLocale)==null?void 0:i.words),c("meta",{property:"wordCount",content:(r=e.readingTime)==null?void 0:r.words})]):null}}}),Bf=z({name:"PageInfo",components:{AuthorInfo:Q4,CategoryInfo:J4,DateInfo:Z4,OriginalInfo:ek,PageViewInfo:Ti,ReadingTimeInfo:tk,TagInfo:nk,WordInfo:sk},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const t=rt();return()=>e.items?c("div",{class:"page-info"},e.items.map(n=>c(Ct(`${n}Info`),{...e.info,isPure:t.value}))):null}}),ik=z({name:"PrintButton",setup(){const e=Zt(),t=ce();return()=>e.value.print===!1?null:c("button",{type:"button",class:"print-button",title:t.value.metaLocales.print,onClick:()=>{window.print()}},c(Sf))}}),Of=z({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:t}){const n=Ft(),s=De(),i=kn(),[r,a]=na(),l=He(),o=ee("-1.7rem"),u=d=>{var f;(f=l.value)==null||f.scrollTo({top:d,behavior:"smooth"})},p=()=>{if(l.value){const d=document.querySelector(".vp-toc-item.active");d?o.value=`${d.getBoundingClientRect().top-l.value.getBoundingClientRect().top+l.value.scrollTop}px`:o.value="-1.7rem"}else o.value="-1.7rem"};return Ie(()=>{de(()=>n.hash,d=>{if(l.value){const f=document.querySelector(`#toc a.vp-toc-link[href$="${d}"]`);if(!f)return;const{top:h,height:m}=l.value.getBoundingClientRect(),{top:_,height:b}=f.getBoundingClientRect();_<h?u(l.value.scrollTop+_-h):_+b>h+m&&u(l.value.scrollTop+_+b-h-m)}}),de(()=>n.fullPath,p,{flush:"post",immediate:!0})}),()=>{var m,_;const d=({title:b,level:y,slug:E})=>c(Ve,{to:`#${E}`,class:["vp-toc-link",`level${y}`],onClick:()=>{a()}},()=>b),f=(b,y)=>b.length&&y>0?c("ul",{class:"vp-toc-list"},b.map(E=>{const g=f(E.children,y-1);return[c("li",{class:["vp-toc-item",{active:n.hash===`#${E.slug}`}]},d(E)),g?c("li",g):null]})):null,h=e.items.length?f(e.items,e.headerDepth):s.value.headers?f(s.value.headers,e.headerDepth):null;return h?c("div",{class:"vp-toc-placeholder"},[c("aside",{id:"toc","vp-toc":""},[(m=t.before)==null?void 0:m.call(t),c("div",{class:"vp-toc-header",onClick:()=>{a()}},[i.value.toc,c(ik),c("div",{class:["arrow",r.value?"down":"end"]})]),c("div",{class:["vp-toc-wrapper",r.value?"open":""],ref:l},[h,c("div",{class:"vp-toc-marker",style:{top:o.value}})]),(_=t.after)==null?void 0:_.call(t)])]):null}}}),_l=z({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=De(),n=ce(),s=He(),i=({target:r})=>{const a=document.querySelector(r.hash);if(a){const l=()=>{a.removeAttribute("tabindex"),a.removeEventListener("blur",l)};a.setAttribute("tabindex","-1"),a.addEventListener("blur",l),a.focus(),window.scrollTo(0,0)}};return Ie(()=>{de(()=>t.value.path,()=>s.value.focus())}),()=>[c("span",{ref:s,tabindex:"-1"}),c("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:i},n.value.routeLocales.skipToContent)]}});let Mr=null,ys=null;const ma={wait:()=>Mr,pending:()=>{Mr=new Promise(e=>{ys=e})},resolve:()=>{ys==null||ys(),Mr=null,ys=null}},If=(e,{slots:t})=>c(es,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:ma.resolve,onBeforeLeave:ma.pending},()=>t.default());If.displayName="FadeSlideY";const rk=(e,t)=>{const n=e.replace(t,"/").split("/"),s=[];let i=Ga(t);return n.forEach((r,a)=>{a!==n.length-1?(i+=`${r}/`,s.push({link:i,name:r||"Home"})):r!==""&&(i+=r,s.push({link:i,name:r}))}),s},eu=(e,t)=>e===!1?e:Ji(e)?{...e,link:zi(e.link,!0,t).link}:Te(e)?zi(e,!0,t):null,_a=(e,t,n)=>{const s=e.findIndex(r=>r.link===t);if(s!==-1){const r=e[s+n];return r?r.link?r:"prefix"in r&&!yt(r.prefix).notFound?{...r,link:r.prefix}:null:null}for(const r of e)if("children"in r){const a=_a(r.children,t,n);if(a)return a}const i=e.findIndex(r=>"prefix"in r&&r.prefix===t);if(i!==-1){const r=e[i+n];return r?r.link?r:"prefix"in r&&!yt(r.prefix).notFound?{...r,link:r.prefix}:null:null}return null},ak=()=>{const e=_e(),t=ce(),n=vl(),s=Ft(),i=A(()=>{const a=eu(e.value.prev,s.path);return a===!1?null:a??(t.value.prevLink===!1?null:_a(n.value,s.path,-1))}),r=A(()=>{const a=eu(e.value.next,s.path);return a===!1?null:a??(t.value.nextLink===!1?null:_a(n.value,s.path,1))});return{prevLink:i,nextLink:r}},ka=(e,{slots:t})=>{var d,f;const{bgImage:n,bgImageDark:s,bgImageStyle:i,color:r,description:a,image:l,imageDark:o,header:u,features:p=[]}=e;return c("div",{class:"vp-feature-wrapper"},[n?c("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${n})`},i]}):null,s?c("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},i]}):null,c("div",{class:"vp-feature",style:r?{color:r}:{}},[((d=t.image)==null?void 0:d.call(t,e))??[l?c("img",{class:["vp-feature-image",{light:o}],src:we(l),alt:""}):null,o?c("img",{class:"vp-feature-image dark",src:we(o),alt:""}):null],((f=t.info)==null?void 0:f.call(t,e))??[u?c("h2",{class:"vp-feature-header"},u):null,a?c("p",{class:"vp-feature-description",innerHTML:a}):null],p.length?c("div",{class:"vp-features"},p.map(({icon:h,title:m,details:_,link:b})=>{const y=[c("h3",{class:"vp-feature-title"},[c(Ue,{icon:h}),c("span",{innerHTML:m})]),c("p",{class:"vp-feature-details",innerHTML:_})];return b?ja(b)?c("a",{class:"vp-feature-item link",href:b,"aria-label":m,target:"_blank"},y):c(Ve,{class:"vp-feature-item link",to:b,"aria-label":m},()=>y):c("div",{class:"vp-feature-item"},y)})):null])])};ka.displayName="FeaturePanel";var lk=z({name:"HeroInfo",slots:Object,setup(e,{slots:t}){const n=_e(),s=ti(),i=A(()=>n.value.heroFullScreen??!1),r=A(()=>{const{heroText:u,tagline:p}=n.value;return{text:u??s.value.title??"Hello",tagline:p??s.value.description??"",isFullScreen:i.value}}),a=A(()=>{const{heroText:u,heroImage:p,heroImageDark:d,heroAlt:f,heroImageStyle:h}=n.value;return{image:p?we(p):null,imageDark:d?we(d):null,imageStyle:h,alt:f??u??"",isFullScreen:i.value}}),l=A(()=>{const{bgImage:u,bgImageDark:p,bgImageStyle:d}=n.value;return{image:Te(u)?we(u):null,imageDark:Te(p)?we(p):null,bgStyle:d,isFullScreen:i.value}}),o=A(()=>n.value.actions??[]);return()=>{var u,p,d;return c("header",{class:["vp-hero-info-wrapper",{fullscreen:i.value}]},[((u=t.bg)==null?void 0:u.call(t,l.value))??[l.value.image?c("div",{class:["vp-hero-mask",{light:l.value.imageDark}],style:[{"background-image":`url(${l.value.image})`},l.value.bgStyle]}):null,l.value.imageDark?c("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${l.value.imageDark})`},l.value.bgStyle]}):null],c("div",{class:"vp-hero-info"},[((p=t.logo)==null?void 0:p.call(t,a.value))??c(le,{appear:!0,type:"group"},()=>{const{image:f,imageDark:h,imageStyle:m,alt:_}=a.value;return[f?c("img",{key:"light",class:["vp-hero-image",{light:h}],style:m,src:f,alt:_}):null,h?c("img",{key:"dark",class:"vp-hero-image dark",style:m,src:h,alt:_}):null]}),((d=t.info)==null?void 0:d.call(t,r.value))??c("div",{class:"vp-hero-infos"},[r.value.text?c(le,{appear:!0,delay:.04},()=>c("h1",{id:"main-title",class:"vp-hero-title"},r.value.text)):null,r.value.tagline?c(le,{appear:!0,delay:.08},()=>c("p",{id:"main-description",innerHTML:r.value.tagline})):null,o.value.length?c(le,{appear:!0,delay:.12},()=>c("p",{class:"vp-hero-actions"},o.value.map(f=>c(it,{class:["vp-hero-action",f.type??"default","no-external-link-icon"],config:f},f.icon?{before:()=>c(Ue,{icon:f.icon})}:{})))):null])])])}}});const Df=(e,{slots:t})=>{var f,h,m;const{bgImage:n,bgImageDark:s,bgImageStyle:i,color:r,description:a,image:l,imageDark:o,header:u,highlights:p=[],type:d="un-order"}=e;return c("div",{class:"vp-highlight-wrapper",style:r?{color:r}:{}},[n?c("div",{class:["vp-highlight-bg",{light:s}],style:[{"background-image":`url(${n})`},i]}):null,s?c("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${s})`},i]}):null,c("div",{class:"vp-highlight"},[((f=t.image)==null?void 0:f.call(t,e))??[l?c("img",{class:["vp-highlight-image",{light:o}],src:we(l),alt:""}):null,o?c("img",{class:"vp-highlight-image dark",src:we(o),alt:""}):null],((h=t.info)==null?void 0:h.call(t,e))??[c("div",{class:"vp-highlight-info-wrapper"},c("div",{class:"vp-highlight-info"},[u?c("h2",{class:"vp-highlight-header",innerHTML:u}):null,a?c("p",{class:"vp-highlight-description",innerHTML:a}):null,((m=t.highlights)==null?void 0:m.call(t,p))??c(d==="order"?"ol":d==="no-order"?"dl":"ul",{class:"vp-highlights"},p.map(({icon:_,title:b,details:y,link:E})=>{const g=[c(d==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[_?c(Ue,{class:"vp-highlight-icon",icon:_}):null,c("span",{innerHTML:b})]),y?c(d==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:y}):null];return c(d==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:E}]},E?ja(E)?c("a",{class:"vp-highlight-item link",href:E,"aria-label":b,target:"_blank"},g):c(Ve,{class:"vp-highlight-item link",to:E,"aria-label":b},()=>g):c("div",{class:"vp-highlight-item"},g))}))]))]])])};Df.displayName="HighlightPanel";var ok=z({name:"HomePage",slots:Object,setup(e,{slots:t}){const n=_e(),s=A(()=>{const{features:r}=n.value;return sa(r)?r:null}),i=A(()=>{const{highlights:r}=n.value;return sa(r)?r:null});return()=>{var r,a,l,o;return c("main",{id:"main-content",class:"vp-page vp-project-home","aria-labelledby":n.value.heroText===null?"":"main-title"},[(r=t.top)==null?void 0:r.call(t),c(lk),((a=i.value)==null?void 0:a.map(u=>"features"in u?c(ka,u):c(Df,u)))??(s.value?c(le,{appear:!0,delay:.24},()=>c(ka,{features:s.value})):null),(l=t.center)==null?void 0:l.call(t),c(le,{appear:!0,delay:.32},()=>c(ls)),(o=t.bottom)==null?void 0:o.call(t)])}}}),ck=z({name:"BreadCrumb",setup(){const e=De(),t=tt(),n=_e(),s=ce(),i=He([]),r=A(()=>(n.value.breadcrumb??s.value.breadcrumb??!0)&&i.value.length>1),a=A(()=>n.value.breadcrumbIcon??s.value.breadcrumbIcon??!0),l=()=>{const o=rk(e.value.path,t.value).map(({link:u,name:p})=>{const{path:d,meta:f,notFound:h}=yt(u);return h||f[Ze.breadcrumbExclude]?null:{title:f[Ze.shortTitle]||f[Ze.title]||p,icon:f[Ze.icon],path:d}}).filter(u=>u!==null);o.length>1&&(i.value=o)};return Ie(()=>{de(()=>e.value.path,l,{immediate:!0})}),()=>c("nav",{class:["vp-breadcrumb",{disable:!r.value}]},r.value?c("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},i.value.map((o,u)=>c("li",{class:{"is-active":i.value.length-1===u},property:"itemListElement",typeof:"ListItem"},[c(Ve,{to:o.path,property:"item",typeof:"WebPage"},()=>[a.value?c(Ue,{icon:o.icon}):null,c("span",{property:"name"},o.title||"Unknown")]),c("meta",{property:"position",content:u+1})]))):[])}}),uk=z({name:"PageNav",setup(){const e=ce(),t=Mn(),{prevLink:n,nextLink:s}=ak();return ze("keydown",i=>{i.altKey&&(i.key==="ArrowRight"?s.value&&(t(s.value.link),i.preventDefault()):i.key==="ArrowLeft"&&n.value&&(t(n.value.link),i.preventDefault()))}),()=>n.value||s.value?c("nav",{class:"vp-page-nav"},[n.value?c(it,{class:"prev",config:n.value},()=>{var i,r;return[c("div",{class:"hint"},[c("span",{class:"arrow start"}),e.value.metaLocales.prev]),c("div",{class:"link"},[c(Ue,{icon:(i=n.value)==null?void 0:i.icon}),(r=n.value)==null?void 0:r.text])]}):null,s.value?c(it,{class:"next",config:s.value},()=>{var i,r;return[c("div",{class:"hint"},[e.value.metaLocales.next,c("span",{class:"arrow end"})]),c("div",{class:"link"},[(i=s.value)==null?void 0:i.text,c(Ue,{icon:(r=s.value)==null?void 0:r.icon})])]}):null]):null}});const pk=()=>{const e=ce(),t=De(),n=_e();return A(()=>{var s;return n.value.contributors??e.value.contributors??!0?((s=t.value.git)==null?void 0:s.contributors)??null:null})},dk={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},fk=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:s,editLinkPattern:i})=>{if(!s)return null;const r=dl(e);let a;return i?a=i:r!==null&&(a=dk[r]),a?a.replace(/:repo/u,Fn(e)?e:`https://github.com/${e}`).replace(/:branch/u,t).replace(/:path/u,wp(`${Ga(n)}/${s}`)):null},hk=()=>{const e=ce(),t=De(),n=_e();return A(()=>{const{repo:s,docsRepo:i=s,docsBranch:r="main",docsDir:a="",editLink:l,editLinkPattern:o=""}=e.value;if(!(n.value.editLink??l??!0)||!i)return null;const u=fk({docsRepo:i,docsBranch:r,docsDir:a,editLinkPattern:o,filePathRelative:t.value.filePathRelative});return u?{text:e.value.metaLocales.editLink,link:u}:null})},gk=()=>{const e=ti(),t=ce(),n=De(),s=_e();return A(()=>{var i,r;return!(s.value.lastUpdated??t.value.lastUpdated??!0)||!((i=n.value.git)!=null&&i.updatedTime)?null:new Date((r=n.value.git)==null?void 0:r.updatedTime).toLocaleString(e.value.lang)})};var vk=z({name:"PageTitle",setup(){const e=De(),t=_e(),n=ce(),{info:s,items:i}=w4();return()=>c("div",{class:"vp-page-title"},[c("h1",[n.value.titleIcon===!1?null:c(Ue,{icon:t.value.icon}),e.value.title]),c(Bf,{info:s.value,...i.value===null?{}:{items:i.value}}),c("hr")])}});const Lf=()=>c(fe,{name:"edit"},()=>[c("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),c("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Lf.displayName="EditIcon";var mk=z({name:"PageMeta",setup(){const e=ce(),t=hk(),n=gk(),s=pk();return()=>{var r;const{metaLocales:i}=e.value;return c("footer",{class:"vp-page-meta"},[t.value?c("div",{class:"vp-meta-item edit-link"},c(it,{class:"vp-meta-label",config:t.value},{before:()=>c(Lf)})):null,c("div",{class:"vp-meta-item git-info"},[n.value?c("div",{class:"update-time"},[c("span",{class:"vp-meta-label"},`${i.lastUpdated}: `),c("span",{class:"vp-meta-info","data-allow-mismatch":"text"},n.value)]):null,(r=s.value)!=null&&r.length?c("div",{class:"contributors"},[c("span",{class:"vp-meta-label"},`${i.contributors}: `),s.value.map(({email:a,name:l},o)=>[c("span",{class:"vp-meta-info",title:`email: ${a}`},l),o!==s.value.length-1?",":""])]):null])])}}}),_k=z({name:"NormalPage",slots:Object,setup(e,{slots:t}){const n=_e(),{isDarkmode:s}=li(),i=ce(),r=A(()=>n.value.toc??i.value.toc??!0),a=A(()=>n.value.headerDepth??i.value.headerDepth??2);return()=>c("main",{id:"main-content",class:"vp-page"},c(Kt("LocalEncrypt")?Ct("LocalEncrypt"):pl,()=>{var l,o,u,p;return[(l=t.top)==null?void 0:l.call(t),n.value.cover?c("div",{class:"page-cover"},c("img",{src:we(n.value.cover),alt:"","no-view":""})):null,c(ck),c(vk),r.value?c(Of,{headerDepth:a.value},{before:t.tocBefore?()=>t.tocBefore():null,after:t.tocAfter?()=>t.tocAfter():null}):null,(o=t.contentBefore)==null?void 0:o.call(t),c(ls),(u=t.contentAfter)==null?void 0:u.call(t),c(mk),c(uk),Kt("CommentService")?c(Ct("CommentService"),{darkmode:s.value}):null,(p=t.bottom)==null?void 0:p.call(t)]}))}}),kk=z({name:"PortfolioHero",slots:Object,setup(e,{slots:t}){const n=nf(),s=_e(),i=ee(0),r=A(()=>{var f;return((f=s.value.titles)==null?void 0:f[i.value])??""}),a=ee(""),l=A(()=>{const{name:f,avatar:h,avatarDark:m,avatarAlt:_,avatarStyle:b}=s.value;return{name:f??n.value.name,avatar:h?we(h):null,avatarDark:m?we(m):null,avatarStyle:b,alt:(_||f)??""}}),o=A(()=>{const{bgImage:f,bgImageDark:h,bgImageStyle:m}=s.value;return{image:Te(f)?we(f):null,imageDark:Te(h)?we(h):null,bgStyle:m}}),u=A(()=>{const{welcome:f,name:h,titles:m,medias:_}=s.value;return{name:h??n.value.name,welcome:f??"👋 Hi There, I'm",title:a.value,titles:m??[],medias:_??[]}}),p=()=>{a.value="";let f=0,h=!1;const m=async()=>{if(!h)if(a.value+=r.value[f],f+=1,await Xt(),f<r.value.length)setTimeout(()=>{m()},150);else{const _=u.value.titles.length;setTimeout(()=>{i.value=_<=1||i.value===u.value.titles.length-1?0:i.value+1},1e3)}};return m(),()=>{h=!0}};let d;return Ie(()=>{de(r,()=>{d==null||d(),d=p()},{immediate:!0})}),()=>{var f,h,m;return c("section",{id:"portfolio",class:["vp-portfolio",{bg:o.value.image}]},[((f=t.bg)==null?void 0:f.call(t,o.value))??[o.value.image?c("div",{class:["vp-portfolio-mask",{light:o.value.imageDark}],style:[{background:`url(${o.value.image}) center/cover no-repeat`},o.value.bgStyle]}):null,o.value.imageDark?c("div",{class:"vp-portfolio-mask dark",style:[{background:`url(${o.value.imageDark}) center/cover no-repeat`},o.value.bgStyle]}):null],((h=t.avatar)==null?void 0:h.call(t,l.value))??c("div",{class:"vp-portfolio-avatar"},[c(le,{delay:.04},()=>{const{avatarDark:_,name:b,alt:y,avatarStyle:E}=l.value;return[c("img",{key:"light",class:{light:_},src:l.value.avatar,title:b,alt:y,style:E}),_?c("img",{key:"dark",class:"dark",src:_,title:b,alt:y,style:E}):null]})]),c("div",{class:"vp-portfolio-container"},((m=t.info)==null?void 0:m.call(t,u.value))??c("div",{class:"vp-portfolio-info"},[c(le,{appear:!0,delay:.08},()=>c("h6",{class:"vp-portfolio-welcome"},u.value.welcome)),c(le,{appear:!0,delay:.12},()=>c("h1",{class:"vp-portfolio-name",id:"main-title"},u.value.name)),c(le,{appear:!0,delay:.16},()=>c("h2",{class:"vp-portfolio-title"},a.value)),c(le,{appear:!0,delay:.2},()=>u.value.medias.length?c("div",{class:"vp-portfolio-medias"},u.value.medias.map(({name:_,url:b,icon:y})=>c("a",{class:"vp-portfolio-media",href:b,rel:"noopener noreferrer",target:"_blank",title:_},c(Ue,{icon:y})))):Kt("SocialMedias")?c(Ct("SocialMedias")):null)]))])}}}),yk=z({name:"PortfolioHome",setup(){const e=_e(),t=A(()=>e.value.content??"portfolio");return()=>c("main",{id:"main-content",class:"vp-page vp-portfolio-home","aria-labelledby":"main-title"},[c(kk),t.value==="none"?null:c("div",{},c(le,{appear:!0,delay:.24},()=>c(ls,{class:{"vp-portfolio-content":t.value==="portfolio"}})))])}}),bk=z({name:"Layout",slots:Object,setup(e,{slots:t}){const n=Zt(),s=ce(),i=De(),r=_e(),a=rt(),{isMobile:l}=ai(),o=A(()=>{var u,p;return((u=s.value.blog)==null?void 0:u.sidebarDisplay)??((p=n.value.blog)==null?void 0:p.sidebarDisplay)??"mobile"});return()=>[c(_l),c(ml,{},{default:()=>{var u;return((u=t.default)==null?void 0:u.call(t))??(r.value.portfolio?c(yk):r.value.home?c(ok):c(a.value?pl:If,()=>c(_k,{key:i.value.path},{top:t.top?()=>t.top():null,bottom:t.bottom?()=>t.bottom():null,contentBefore:t.contentBefore?()=>t.contentBefore():null,contentAfter:t.contentAfter?()=>t.contentAfter():null,tocBefore:t.tocBefore?()=>t.tocBefore():null,tocAfter:t.tocAfter?()=>t.tocAfter():null})))},navScreenBottom:o.value==="none"&&Kt("BloggerInfo")?()=>c(Ct("BloggerInfo")):null,sidebar:!l.value&&o.value==="always"&&Kt("BloggerInfo")?()=>c(Ct("BloggerInfo")):null})]}}),Ak=z({name:"NotFoundHint",setup(){const e=ce(),t=()=>{const n=e.value.routeLocales.notFoundMsg;return n[Math.floor(Math.random()*n.length)]};return()=>c("div",{class:"not-found-hint"},[c("p",{class:"error-code"},"404"),c("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),c("p",{class:"error-hint"},t())])}}),Ek=z({name:"NotFound",slots:Object,setup(e,{slots:t}){const n=Jt(),s=tt(),i=ce();return()=>[c(_l),c(ml,{noSidebar:!0},()=>{var r;return c("main",{id:"main-content",class:"vp-page not-found"},((r=t.default)==null?void 0:r.call(t))??[c(Ak),c("div",{class:"actions"},[c("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},i.value.routeLocales.back),c("button",{type:"button",class:"action-button",onClick:()=>{n.push(i.value.home??s.value)}},i.value.routeLocales.home)])])})]}});const wk={},Sk={category:{"/":{path:"/category/",map:{openstack:{path:"/category/openstack/",indexes:[0,1]},openstack组件:{path:"/category/openstack%E7%BB%84%E4%BB%B6/",indexes:[2]},随记:{path:"/category/%E9%9A%8F%E8%AE%B0/",indexes:[3,4,2,5,6,7]},oslo_messaging:{path:"/category/oslo-messaging/",indexes:[2]},neutron:{path:"/category/neutron/",indexes:[8]},openstack中的Service:{path:"/category/openstack%E4%B8%AD%E7%9A%84service/",indexes:[5,6,7]},oslo:{path:"/category/oslo/",indexes:[4,5,6,7]},cinder:{path:"/category/cinder/",indexes:[9]},nova:{path:"/category/nova/",indexes:[10]},openstack中的Launcher:{path:"/category/openstack%E4%B8%AD%E7%9A%84launcher/",indexes:[4]},设备PCI直通:{path:"/category/%E8%AE%BE%E5%A4%87pci%E7%9B%B4%E9%80%9A/",indexes:[3]}}}},tag:{"/":{path:"/tag/",map:{openstack:{path:"/tag/openstack/",indexes:[0,1]},oslo_service:{path:"/tag/oslo-service/",indexes:[2]},Transport:{path:"/tag/transport/",indexes:[2]},RPC:{path:"/tag/rpc/",indexes:[2]},oslo_messaging:{path:"/tag/oslo-messaging/",indexes:[2,5,6,7]},neutron:{path:"/tag/neutron/",indexes:[8]},WSGIService:{path:"/tag/wsgiservice/",indexes:[5,6,7]},wsgi:{path:"/tag/wsgi/",indexes:[5,6,7]},cinder:{path:"/tag/cinder/",indexes:[9]},nova:{path:"/tag/nova/",indexes:[10]},ServiceLauncher:{path:"/tag/servicelauncher/",indexes:[4]},Launcher:{path:"/tag/launcher/",indexes:[4]},ProcessLauncher:{path:"/tag/processlauncher/",indexes:[4]},"PCI passthrough":{path:"/tag/pci-passthrough/",indexes:[3]}}}}},Pf=["/openstack/","/other/","/other/component_oslo_messaging.html","/openstack/nova/pci_passthrough.html","/openstack/nova/launcher.html","/openstack/neutron/openstack_3service.html","/openstack/cinder/openstack_serv4ice.html","/openstack/nova/service.html","/openstack/neutron/","/openstack/cinder/","/openstack/nova/"],Ck={article:{"/":{path:"/article/",indexes:[3,4,2,5,6,7,0,1,8,9,10]}},star:{"/":{path:"/star/",indexes:[3,4,2,5,6,7]}},timeline:{"/":{path:"/timeline/",indexes:[3,4,2,5,6,7,0,1,8,9,10]}}},ya=He(Sk);mn(ya);const Ff=e=>{const t=De(),n=_e(),s=tt();return A(()=>{var l;const i=e??((l=n.value.blog)==null?void 0:l.key)??"";if(!i)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!(i in ya.value))throw new Error(`useBlogCategory: key ${i} is invalid`);const r=ya.value[i][s.value],a={path:r.path,map:{}};for(const o in r.map){const u=r.map[o];a.map[o]={path:u.path,items:[]};for(const p of u.indexes){const{path:d,meta:f}=yt(Pf[p]);a.map[o].items.push({path:d,info:f})}t.value.path===u.path&&(a.currentItems=a.map[o].items)}return a})},ba=He(Ck);mn(ba);const or=e=>{const t=_e(),n=tt();return A(()=>{var a;const s=e??((a=t.value.blog)==null?void 0:a.key)??"";if(!s)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!(s in ba.value))throw new Error(`useBlogType: key ${e} is invalid`);const i=ba.value[s][n.value],r={path:i.path,items:[]};for(const l of i.indexes){const{path:o,meta:u}=yt(Pf[l]);r.items.push({path:o,info:u})}return r})},Rf=()=>c(fe,{name:"lock"},()=>c("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Rf.displayName="LockIcon";var xk=[];const Nf=Symbol(""),kl=()=>{const e=xe(Nf);if(!e)throw new Error("useTimeline() is called without provider.");return e},Tk=()=>{const e=or("timeline"),t=Ya(),n=A(()=>{const s=[];return e.value.items.forEach(({info:i,path:r})=>{const a=el(i[qe.date]);if(a){const l=a.getFullYear();(!s[0]||s[0].year!==l)&&s.unshift({year:l,items:[]}),s[0].items.push({date:a.toLocaleDateString(t.value,{month:"numeric",day:"numeric"}),info:i,path:r})}}),{...e.value,config:s.reverse()}});wt(Nf,n)},Mf=Symbol(""),oi=()=>{const e=xe(Mf);if(!e)throw new Error("useArticles() is called without provider.");return e},Bk=()=>{const e=or("article");wt(Mf,e)},Vf=Symbol.for("categoryMap"),ci=()=>{const e=xe(Vf);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},Ok=()=>{const e=Ff("category");wt(Vf,e)},$f=Symbol(""),yl=()=>{const e=xe($f);if(!e)throw new Error("useStars() is called without provider.");return e},Ik=()=>{const e=or("star");wt($f,e)},zf=Symbol.for("tagMap"),ui=()=>{const e=xe(zf);if(!e)throw new Error("useTagMap() is called without provider.");return e},Dk=()=>{const e=Ff("tag");wt(zf,e)},Lk=()=>{Bk(),Ok(),Ik(),Dk(),Tk()},pi=()=>{const e=Zt(),t=ce();return A(()=>({...e.value.blog,...t.value.blog}))},Pk=e=>{const t=ce();return A(()=>{const{[qe.author]:n}=e.value;return n?Ks(n):n===!1?[]:Ks(t.value.author,!1)})},Fk=e=>{const t=ci();return A(()=>Qd(e.value[qe.category]).map(n=>({name:n,path:t.value.map[n].path})))},Rk=e=>{const t=ui();return A(()=>Jd(e.value[qe.tag]).map(n=>({name:n,path:t.value.map[n].path})))},Nk=e=>A(()=>{const{[qe.date]:t}=e.value;return el(t)}),Mk=e=>{const t=ps(e,"info"),n=pi(),s=Pk(t),i=Fk(t),r=Rk(t),a=Nk(t),l=tf(),o=A(()=>({author:s.value,category:i.value,date:a.value,localizedDate:t.value[qe.localizedDate]??"",tag:r.value,isOriginal:t.value[qe.isOriginal]??!1,readingTime:t.value[qe.readingTime]??null,readingTimeLocale:t.value[qe.readingTime]&&l.value?ef(t.value[qe.readingTime],l.value):null,pageview:e.path})),u=A(()=>n.value.articleInfo);return{info:o,items:u}};var Hf=z({name:"SocialMedias",setup(){const e=pi(),t=rt(),n=A(()=>Nn(e.value.medias??{}).map(([s,i])=>typeof i=="string"?{name:s,icon:wk[s],link:i}:{name:s,...i}));return()=>n.value.length?c("div",{class:"vp-social-medias"},n.value.map(({name:s,icon:i,link:r})=>c("a",{class:"vp-social-media",href:r,rel:"noopener noreferrer",target:"_blank","aria-label":s||"",...t.value?{}:{"data-balloon-pos":"up"},innerHTML:Fn(i)?`<img class="icon ${s}-icon" src="${i}">`:i}))):null}}),bl=z({name:"BloggerInfo",setup(){const e=pi(),t=ti(),n=ce(),s=oi(),i=ci(),r=ui(),a=kl(),l=Mn(),o=A(()=>{var f;return e.value.name??((f=Ks(n.value.author)[0])==null?void 0:f.name)??t.value.title}),u=A(()=>e.value.avatar??n.value.logo),p=A(()=>n.value.blogLocales),d=A(()=>e.value.intro);return()=>{const{article:f,category:h,tag:m,timeline:_}=p.value,b=[[s.value.path,s.value.items.length,f],[i.value.path,Dn(i.value.map).length,h],[r.value.path,Dn(r.value.map).length,m],[a.value.path,a.value.items.length,_]];return c("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[c("div",{class:"vp-blogger",...d.value?{"aria-label":p.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>l(d.value)}:{}},[u.value?c("img",{class:"vp-blogger-avatar",src:we(u.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,o.value?c("div",{class:"vp-blogger-name",property:"name"},o.value):null,e.value.description?c("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,d.value?c("meta",{property:"url",content:we(d.value)}):null]),c("div",{class:"vp-blog-counts"},b.map(([y,E,g])=>c(Ve,{class:"vp-blog-count",to:y},()=>[c("div",{class:"count"},E),c("div",g)]))),c(Hf)])}}});const Al=()=>c(fe,{name:"category"},()=>c("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Al.displayName="CategoryIcon";const El=()=>c(fe,{name:"tag"},()=>c("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));El.displayName="TagIcon";const wl=()=>c(fe,{name:"timeline"},()=>c("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));wl.displayName="TimelineIcon";const Uf=()=>c(fe,{name:"slides"},()=>c("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Uf.displayName="SlideIcon";const jf=()=>c(fe,{name:"sticky"},()=>[c("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);jf.displayName="StickyIcon";const cr=()=>c(fe,{name:"article"},()=>c("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));cr.displayName="ArticleIcon";const Gf=()=>c(fe,{name:"book"},()=>c("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));Gf.displayName="BookIcon";const qf=()=>c(fe,{name:"link"},()=>c("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));qf.displayName="LinkIcon";const Kf=()=>c(fe,{name:"project"},()=>c("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Kf.displayName="ProjectIcon";const Wf=()=>c(fe,{name:"friend"},()=>c("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));Wf.displayName="FriendIcon";const Aa=()=>c(fe,{name:"slide-down"},()=>c("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Aa.displayName="SlideDownIcon";const Yf=()=>c("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});Yf.displayName="EmptyIcon";var Vk=z({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const n=ps(e,"info"),{info:s,items:i}=Mk(e);return()=>{var f,h,m;const{[Ze.title]:r,[qe.type]:a,[qe.isEncrypted]:l=!1,[qe.cover]:o,[qe.excerpt]:u,[qe.sticky]:p}=n.value,d=s.value;return c("div",{class:"vp-article-wrapper"},c("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((f=t.cover)==null?void 0:f.call(t,{cover:o}))??(o?[c("img",{class:"vp-article-cover",src:we(o),alt:"",loading:"lazy"}),c("meta",{property:"image",content:we(o)})]:[]),p?c(jf):null,c(Ve,{to:e.path},()=>{var _;return((_=t.title)==null?void 0:_.call(t,{title:r,isEncrypted:l,type:a}))??c("header",{class:"vp-article-title"},[l?c(Rf):null,a===rf.slide?c(Uf):null,c("span",{property:"headline"},r)])}),((h=t.excerpt)==null?void 0:h.call(t,{excerpt:u}))??(u?c("div",{class:"vp-article-excerpt",innerHTML:u}):null),c("hr",{class:"vp-article-hr"}),((m=t.info)==null?void 0:m.call(t,{info:d}))??c(Bf,{info:d,...i.value?{items:i.value}:{}})]))}}}),$k=z({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:t}){let n;const s=ce(),i=ee(""),r=A(()=>s.value.paginationLocales),a=A(()=>Math.ceil(e.total/e.perPage)),l=A(()=>!!a.value&&a.value!==1),o=A(()=>a.value<7?!1:e.current>4),u=A(()=>a.value<7?!1:e.current<a.value-3),p=A(()=>{const{current:h}=e;let m=1,_=a.value;const b=[];a.value>=7&&(h<=4&&h<a.value-3?(m=1,_=5):h>4&&h>=a.value-3?(_=a.value,m=a.value-4):a.value>7&&(m=h-2,_=h+2));for(let y=m;y<=_;y++)b.push(y);return b}),d=h=>t("updateCurrentPage",h),f=h=>{const m=parseInt(h,10);m<=a.value&&m>0?d(m):n.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${r.value.errorText.replace(/\$page/gu,a.value.toString())}`)};return Ie(()=>{n=new p4}),()=>c("div",{class:"vp-pagination"},l.value?c("nav",{class:"vp-pagination-list"},[c("div",{class:"vp-pagination-number "},[e.current>1?c("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>d(e.current-1)},r.value.prev):null,o.value?[c("div",{role:"navigation",onClick:()=>d(1)},1),c("div",{class:"ellipsis"},"...")]:null,p.value.map(h=>c("div",{key:h,class:{active:e.current===h},role:"navigation",onClick:()=>d(h)},h)),u.value?[c("div",{class:"ellipsis"},"..."),c("div",{role:"navigation",onClick:()=>d(a.value)},a.value)]:null,e.current<a.value?c("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>d(e.current+1)},r.value.next):null]),c("div",{class:"vp-pagination-nav"},[c("label",{for:"navigation-text"},`${r.value.navigate}: `),c("input",{id:"navigation-text",value:i.value,onInput:({target:h})=>{i.value=h.value},onKeydown:h=>{h.key==="Enter"&&(h.preventDefault(),f(i.value))}}),c("button",{class:"vp-pagination-button",type:"button",role:"navigation",title:r.value.action,onClick:()=>f(i.value)},r.value.action)])]):[])}}),Sl=z({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const t=Ft(),n=Jt(),s=pi(),i=ee(1),r=A(()=>s.value.articlePerPage??10),a=A(()=>e.items.slice((i.value-1)*r.value,i.value*r.value)),l=async o=>{i.value=o;const u={...t.query};!(u.page===o.toString()||o===1&&!u.page)&&(o===1?delete u.page:u.page=o.toString(),await n.push({path:t.path,query:u}))};return Ie(()=>{const{page:o}=t.query;l(o?Number(o):1),de(i,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)})}),()=>c("div",{id:"article-list",class:"vp-article-list",role:"feed"},a.value.length?[...a.value.map(({info:o,path:u},p)=>c(le,{appear:!0,delay:p*.04},()=>c(Vk,{key:u,info:o,path:u}))),c($k,{current:i.value,perPage:r.value,total:e.items.length,onUpdateCurrentPage:l})]:c(Yf))}}),Xf=z({name:"CategoryList",setup(){const e=De(),t=ci();return()=>c("ul",{class:"vp-category-list"},Nn(t.value.map).sort(([,n],[,s])=>s.items.length-n.items.length).map(([n,{path:s,items:i}])=>c("li",{class:["vp-category",`color${ri(n,Number(_n.colorNumber))}`,{active:s===e.value.path}]},c(Ve,{to:s},()=>[n,c("span",{class:"vp-category-count"},i.length)]))))}}),Qf=z({name:"TagList",setup(){const e=_e(),t=ui(),n=s=>{var i;return s===((i=e.value.blog)==null?void 0:i.name)};return()=>c("ul",{class:"vp-tag-list"},Nn(t.value.map).sort(([,s],[,i])=>i.items.length-s.items.length).map(([s,{path:i,items:r}])=>c("li",{class:["vp-tag",`color${ri(s,Number(_n.colorNumber))}`,{active:n(s)}]},c(Ve,{to:i},()=>[s,c("span",{class:"vp-tag-count"},r.length)]))))}}),zk=z({name:"TimelineList",setup(){const e=ce(),t=kl(),n=Mn(),s=A(()=>e.value.blogLocales.timeline);return()=>c("div",{class:"timeline-list-wrapper"},[c("div",{class:"timeline-list-title",onClick:()=>n(t.value.path)},[c(wl),c("span",{class:"num"},t.value.items.length),s.value]),c("hr"),c("div",{class:"timeline-content"},c("ul",{class:"timeline-list"},t.value.config.map(({year:i,items:r},a)=>c(le,{appear:!0,delay:.08*(a+1)},()=>c("li",[c("h3",{class:"timeline-year"},i),c("ul",{class:"timeline-year-wrapper"},r.map(({date:l,info:o,path:u})=>c("li",{class:"timeline-item"},[c("span",{class:"timeline-date"},l),c(Ve,{class:"timeline-title",to:u},()=>o[Ze.title])])))])))))])}});const Hk={article:cr,category:Al,tag:El,timeline:wl};var Jf=z({name:"InfoList",setup(){const e=ce(),t=oi(),n=ci(),s=A(()=>Dn(n.value.map).length),i=yl(),r=ui(),a=A(()=>Dn(r.value.map).length),l=Mn(),o=ee("article"),u=A(()=>e.value.blogLocales);return()=>c("div",{class:"vp-blog-infos"},[c("div",{class:"vp-blog-type-switcher"},Nn(Hk).map(([p,d])=>c("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{o.value=p}},c("div",{class:["vp-blog-type-icon-wrapper",{active:o.value===p}],"aria-label":u.value[p],"data-balloon-pos":"up"},c(d))))),c(le,()=>o.value==="article"?c("div",{class:"vp-star-article-wrapper"},[c("div",{class:"title",onClick:()=>l(t.value.path)},[c(cr),c("span",{class:"num"},t.value.items.length),u.value.article]),c("hr"),i.value.items.length?c("ul",{class:"vp-star-articles"},i.value.items.map(({info:p,path:d},f)=>c(le,{appear:!0,delay:.08*(f+1)},()=>c("li",{class:"vp-star-article"},c(Ve,{to:d},()=>p[Ze.title]))))):c("div",{class:"vp-star-article-empty"},u.value.empty.replace("$text",u.value.star))]):o.value==="category"?c("div",{class:"vp-category-wrapper"},[s.value?[c("div",{class:"title",onClick:()=>l(n.value.path)},[c(Al),c("span",{class:"num"},s.value),u.value.category]),c("hr"),c(le,{delay:.04},()=>c(Xf))]:c("div",{class:"vp-category-empty"},u.value.empty.replace("$text",u.value.category))]):o.value==="tag"?c("div",{class:"vp-tag-wrapper"},[a.value?[c("div",{class:"title",onClick:()=>l(r.value.path)},[c(El),c("span",{class:"num"},a.value),u.value.tag]),c("hr"),c(le,{delay:.04},()=>c(Qf))]:c("div",{class:"vp-tag-empty"},u.value.empty.replace("$text",u.value.tag))]):c(le,()=>c(zk)))])}}),ur=z({name:"BlogWrapper",slots:Object,setup(e,{slots:t}){const{isMobile:n}=ai();return()=>[c(_l),c(ml,{noSidebar:!0,noToc:!0},{default:()=>t.default(),navScreenBottom:()=>c(bl),sidebar:n.value?()=>c(Jf):null})]}});const di=()=>c("aside",{class:"vp-blog-info-wrapper"},[c(le,()=>c(bl)),c(le,{delay:.04},()=>c(Jf))]);di.displayName="InfoPanel";var Uk=z({name:"BlogPage",setup(){const e=De(),t=_e(),n=ci(),s=ui();return()=>{const{key:i="",name:r=""}=t.value.blog||{},a=r?i==="category"?n.value.map[r].items:i==="tag"?s.value.map[r].items:[]:[];return c(ur,()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[c(le,()=>i==="category"?c(Xf):i==="tag"?c(Qf):null),r?c(le,{appear:!0,delay:.24},()=>c(Sl,{key:e.value.path,items:a})):null]),c(le,{delay:.16},()=>c(di,{key:"blog"}))])))}}});const jk="//theme-hope-assets.vuejs.press/hero/default.jpg";var Gk=z({name:"BlogHero",slots:Object,setup(e,{slots:t}){const n=_e(),s=ti(),i=He(),r=A(()=>n.value.heroFullScreen??!1),a=A(()=>{const{heroText:o,heroImage:u,heroImageDark:p,heroAlt:d,heroImageStyle:f,tagline:h}=n.value;return{text:o??s.value.title??"Hello",tagline:h??"",image:u?we(u):null,imageDark:p?we(p):null,alt:d??o??"",imageStyle:f,isFullScreen:r.value}}),l=A(()=>{const{bgImage:o,bgImageDark:u,bgImageStyle:p}=n.value;return{image:Te(o)?we(o):o===!1?null:jk,imageDark:Te(u)?we(u):null,bgStyle:p,isFullScreen:r.value}});return()=>{var o,u;return n.value.hero===!1?null:c("div",{ref:i,class:["vp-blog-hero",{fullscreen:r.value,"no-bg":!l.value.image}]},[((o=t.bg)==null?void 0:o.call(t,l.value))??[l.value.image?c("div",{class:["vp-blog-mask",{light:l.value.imageDark}],style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.bgStyle]}):null,l.value.imageDark?c("div",{class:"vp-blog-mask dark",style:[{background:`url(${l.value.imageDark}) center/cover no-repeat`},l.value.bgStyle]}):null],((u=t.info)==null?void 0:u.call(t,a.value))??[c(le,{appear:!0,type:"group",delay:.04},()=>{const{image:p,imageDark:d,imageStyle:f,alt:h}=a.value;return[p?c("img",{key:"light",class:["vp-blog-hero-image",{light:d}],style:f,src:p,alt:h}):null,d?c("img",{key:"dark",class:"vp-blog-hero-image dark",style:f,src:d,alt:h}):null]}),c(le,{appear:!0,delay:.08},()=>a.value.text?c("h1",{class:"vp-blog-hero-title"},a.value.text):null),c(le,{appear:!0,delay:.12},()=>a.value.tagline?c("p",{class:"vp-blog-hero-description",innerHTML:a.value.tagline}):null)],a.value.isFullScreen?c("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:i.value.clientHeight,behavior:"smooth"})}},[c(Aa),c(Aa)]):null])}}});const qk=["link","article","book","project","friend"];var Kk=z({name:"ProjectPanel",components:{ArticleIcon:cr,BookIcon:Gf,FriendIcon:Wf,LinkIcon:qf,ProjectIcon:Kf},props:{items:{type:Array,required:!0}},setup(e){const t=rt(),n=Mn(),s=(i="",r="icon")=>qk.includes(i)?c(Ct(`${i}-icon`)):Fn(i)?c("img",{class:"vp-project-image",src:i,alt:r}):sr(i)?c("img",{class:"vp-project-image",src:we(i),alt:r}):c(Ue,{icon:i});return()=>c("div",{class:"vp-project-panel"},e.items.map(({icon:i,link:r,name:a,desc:l,background:o})=>c("div",{class:["vp-project-card",{[`color${ri(a,Number(_n.colorNumber))}`]:!t.value&&!o}],...o?{style:o}:{},onClick:()=>n(r)},[s(i,a),c("div",{class:"vp-project-name"},a),c("div",{class:"vp-project-desc"},l)])))}}),Wk=z({name:"BlogHomePage",setup(){const e=oi(),t=_e(),n=A(()=>t.value.projects??[]);return()=>c("div",{class:"vp-page vp-blog-home"},[c(Gk),c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[n.value.length?c(le,{appear:!0,delay:.16},()=>c(Kk,{items:n.value})):null,c(le,{appear:!0,delay:.24},()=>c(Sl,{items:e.value.items}))]),c(le,{appear:!0,delay:.16},()=>c(di,{key:"blog"}))]),c(le,{appear:!0,delay:.28},()=>c(ls))])}});const Zf=()=>c(ur,()=>c(Wk));Zf.displayName="BlogHome";var Yk=z({name:"ArticleType",setup(){const e=De(),t=tt(),n=ce(),s=oi(),i=yl(),r=A(()=>{const a=n.value.blogLocales;return[{text:a.all,path:s.value.path},{text:a.star,path:i.value.path},...xk.map(({key:l,path:o})=>{const u=o.replace(/^\//,t.value);return{text:a[l]??yt(u).meta[Ze.title]??l,path:u}})]});return()=>c("ul",{class:"vp-article-type-wrapper"},r.value.map(a=>c("li",{class:["vp-article-type",{active:a.path===e.value.path}]},c(Ve,{to:a.path},()=>a.text))))}}),Xk=z({name:"BlogPage",setup(){const e=or(),t=_e(),n=De(),s=oi(),i=yl(),r=A(()=>{const{key:a="",type:l}=t.value.blog||{};return a==="star"?i.value.items:l==="type"&&a?e.value.items:s.value.items});return()=>c(ur,()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[c(le,()=>c(Yk)),c(le,{appear:!0,delay:.24},()=>c(Sl,{key:n.value.path,items:r.value}))]),c(le,{delay:.16},()=>c(di,{key:"blog"}))])))}}),Qk=z({name:"TimelineItems",setup(){const e=pi(),t=ce(),n=kl(),s=A(()=>e.value.timeline??t.value.blogLocales.timelineTitle),i=A(()=>n.value.config.map(({year:r})=>({title:r.toString(),level:2,slug:r.toString(),children:[]})));return()=>c("div",{class:"timeline-wrapper"},c("ul",{class:"timeline-content"},[c(le,()=>c("li",{class:"motto"},s.value)),c(Of,{items:i.value}),n.value.config.map(({year:r,items:a},l)=>c(le,{appear:!0,delay:.08*(l+1),type:"group"},()=>[c("h3",{key:"title",id:r,class:"timeline-year-title"},c("span",r)),c("li",{key:"content",class:"timeline-year-list"},[c("ul",{class:"timeline-year-wrapper"},a.map(({date:o,info:u,path:p})=>c("li",{class:"timeline-item"},[c("span",{class:"timeline-date"},o),c(Ve,{class:"timeline-title",to:p},()=>u[Ze.title])])))])]))]))}});const eh=()=>c(ur,()=>c("div",{class:"vp-page vp-blog"},c("div",{class:"blog-page-wrapper"},[c("main",{id:"main-content",class:"vp-blog-main"},[c(le,{appear:!0,delay:.24},()=>c(Qk))]),c(le,{delay:.16},()=>c(di,{key:"blog"}))])));eh.displayName="Timeline";U_(e=>{const t=e.t,n=e.I!==!1,s=e.i;return n?{title:t,content:s?()=>[c(Ue,{icon:s}),t]:null,order:e.O,index:e.I}:null});const Jk={enhance:({app:e,router:t})=>{const{scrollBehavior:n}=t.options;t.options.scrollBehavior=async(...s)=>(await ma.wait(),n(...s)),O4(e),e.component("HopeIcon",Ue),e.component("BloggerInfo",bl),e.component("SocialMedias",Hf)},setup:()=>{I4(),x4(),Lk()},layouts:{Layout:bk,NotFound:Ek,BlogCategory:Uk,BlogHome:Zf,BlogType:Xk,Timeline:eh}},Zk=Object.freeze(Object.defineProperty({__proto__:null,default:Jk},Symbol.toStringTag,{value:"Module"})),ey=[{title:"主页",headers:[],path:"/",pathLocale:"/",extraFields:`---
home: true
title: 主页
layout: BlogHome
icon: home
heroFullScreen: false
bgImage: /home/img.jpg
heroText: 终将美好
tagline: 我们的春夏秋冬
projects:
  - icon: nova
    name: 计算服务nova
    desc: nova
    link: /openstack/nova/
  - icon: net
    name: 网络服务neutron
    desc: neutron
    link: /openstack/neutron/
  - icon: cinder
    name: 卷服务cinder
    desc: cinder
    link: /openstack/cinder/
  - icon: duihua
    name: 随记
    desc: 随记
    link: /other/
---

`},{title:"导航",headers:[],path:"/home.html",pathLocale:"/",extraFields:`---
title: 导航
icon: daohang 
index: false
cover: /home/sky.jpg
pageInfo: false
article: false
timeline: false
toc: false
---

 <Catalog/>

`},{title:"关于",headers:[],path:"/intro.html",pathLocale:"/",extraFields:`---
icon: wenhao
cover: /home/aboutme.jpg
editLink: false
article: false
index: false
---
# 关于

Openstack代码阅读笔记

`},{title:"代码走读openstack",headers:[],path:"/openstack/",pathLocale:"/",extraFields:`---
title: 代码走读openstack
icon: ops 
index: false
cover: /home/sky.jpg
dir:
  order: 1
category:
  - openstack
tag:
  - openstack
---


 <Catalog/>`},{title:"随记",headers:[],path:"/other/",pathLocale:"/",extraFields:`---
title: 随记
icon: duihua
index: false
order: 99
cover: /discoverybackground/ocean4.jpg
dir:
  order: 2
category:
  - openstack
tag:
  - openstack
---



<Catalog />
`},{title:"oslo_messaging组件",headers:[{level:2,title:"oslo_messaging",slug:"oslo-messaging",link:"#oslo-messaging",children:[{level:3,title:"Transport",slug:"transport",link:"#transport",children:[]},{level:3,title:"AMQPDriverBase",slug:"amqpdriverbase",link:"#amqpdriverbase",children:[]},{level:3,title:"流程图",slug:"流程图",link:"#流程图",children:[]}]}],path:"/other/component_oslo_messaging.html",pathLocale:"/",extraFields:`---
title: oslo_messaging组件
star: true
icon: page
category:
  - openstack组件
  - 随记
  - oslo_messaging
tag: 
  - oslo_service
  - Transport
  - RPC
  - oslo_messaging
---


## oslo_messaging

🌈相关链接[openstack中的Service](https://ylzhong.top/openstack/nova/service.html)

### Transport

在创建\`RPCServer\`和\`RPCClient\`都需要指定\`transport\`，openstack的每个模块中\`rpcapi.py\`的\`init()\`方法中都会存在\`create_transport()\`方法，本质是调用\`msg_transport._get_transport\`

\`\`\`python
def _get_transport(conf, url=None, allowed_remote_exmods=None,
                   transport_cls=RPCTransport):
    allowed_remote_exmods = allowed_remote_exmods or []
    # 注册配置
    conf.register_opts(_transport_opts)

    if not isinstance(url, TransportURL):
        # 如果设置的url不是TransportURL类，则解析为此类
        url = TransportURL.parse(conf, url)
	
    # 添加参数，默认交换机和远程异常模块
    kwargs = dict(default_exchange=conf.control_exchange,
                  allowed_remote_exmods=allowed_remote_exmods)

    try:
        # 根据url.transport前缀加载驱动
        mgr = driver.DriverManager('oslo.messaging.drivers',
                                   url.transport.split('+')[0],
                                   invoke_on_load=True,
                                   invoke_args=[conf, url],
                                   invoke_kwds=kwargs)
    except RuntimeError as ex:
        raise DriverLoadFailure(url.transport, ex)
	# 调用Transport的构造方法
    return transport_cls(mgr.driver)
\`\`\`

调用\`Transport\`构造方法，可将其看为RPC通信的基类，已经实现了通信需要的各中方法，仅需要\`driver\`作为参数

\`\`\`python
class Transport:

    def __init__(self, driver):
        self.conf = driver.conf
        self._driver = driver
	
    # 要求driver实现部分特征？
    def _require_driver_features(self, requeue=False):
        self._driver.require_features(requeue=requeue)

    # rpc调用的主要方法，调用driver中的send()方法，需要传入target中包含topic参数
    def _send(self, target, ctxt, message, wait_for_reply=None, timeout=None,
              call_monitor_timeout=None, retry=None, transport_options=None):
        if not target.topic:
            raise exceptions.InvalidTarget('A topic is required to send',
                                           target)
        return self._driver.send(target, ctxt, message,
                                 wait_for_reply=wait_for_reply,
                                 timeout=timeout,
                                 call_monitor_timeout=call_monitor_timeout,
                                 retry=retry,
                                 transport_options=transport_options)
	# 发送通知
    def _send_notification(self, target, ctxt, message, version, retry=None):
        ...

    # 监听
    def _listen(self, target, batch_size, batch_timeout):
        ...

    def _listen_for_notifications(self, targets_and_priorities, pool,
        ...

    def cleanup(self):
        ...
\`\`\`

将\`RPCTransport\`继承\`Transport\`类，则拥有监听消息，发送消息的基本流程

### AMQPDriverBase

由于使用消息队列作为发送消息的驱动，所以查看类\`AMQPDriverBase\`类，所有的消息队列的\`Driver\`都需要继承这个类，例如\`oslo_massaging.drivers.impl_rabbit.RabbitDriver\`

\`\`\`python
class AMQPDriverBase(base.BaseDriver):
    missing_destination_retry_timeout = 0

    def __init__(self, conf, url, connection_pool,
                 default_exchange=None, allowed_remote_exmods=None):
        super().__init__(conf, url, default_exchange,
                         allowed_remote_exmods)
		# 设置默认交换机
        self._default_exchange = default_exchange
        # 设置默认连接池，通过impl_rabbit.py可以看到连接池的大小默认为30
        self._connection_pool = connection_pool

        
        self._reply_q_lock = threading.Lock()
        self._reply_q = None
        self._reply_q_conn = None
        self._waiter = None
        # 以hostname和processname设置队列的名称
        if conf.oslo_messaging_rabbit.use_queue_manager:
            self._q_manager = QManager(
                hostname=conf.oslo_messaging_rabbit.hostname,
                processname=conf.oslo_messaging_rabbit.processname)
        else:
            self._q_manager = None

    def _get_exchange(self, target):
        # target自带的交换机或默认交换机，nova中的target多数没有指定交换机，所以名字是''？
        return target.exchange or self._default_exchange

    def _get_connection(self, purpose=rpc_common.PURPOSE_SEND, retry=None):
        """
        rpc_common.ConnectionContext.init:
        	...
            if pooled:
            	# 当操作为send，直接从连接池中获取连接
                self.connection = connection_pool.get(retry=retry)
            else:
            	# 尝试创建新的连接，保证了发送操作和监听操作不会是同一个连接
                self.connection = connection_pool.create(purpose)
        	...
        """
        return rpc_common.ConnectionContext(self._connection_pool,
                                            purpose=purpose,
                                            retry=retry)

    def _get_reply_q(self):
        # 保证线程安全
        with self._reply_q_lock:
            # NOTE(amorin) Re-use reply_q when it already exists
            # This avoid creating too many queues on AMQP server (rabbit)
            if self._reply_q is not None:
                return self._reply_q

            if self._q_manager:
                reply_q = 'reply_' + self._q_manager.get()
            else:
                reply_q = 'reply_' + uuid.uuid4().hex
            LOG.debug('Creating reply queue: %s', reply_q)

            conn = self._get_connection(rpc_common.PURPOSE_LISTEN)

            self._waiter = ReplyWaiter(reply_q, conn,
                                       self._allowed_remote_exmods)
			# 对于每个连接，都会生成一个队列用于监听
            self._reply_q = reply_q
            self._reply_q_conn = conn

        return self._reply_q

    # 创建RPCClient时，应该指定call_monitor_timeout，当监听超过这个时间则返回timeout
    def _send(self, target, ctxt, message,
              wait_for_reply=None, timeout=None, call_monitor_timeout=None,
              envelope=True, notify=False, retry=None, transport_options=None):

        msg = message
        reply_q = None
        if 'method' in msg:
            LOG.debug('Calling RPC method %s on target %s', msg.get('method'),
                      target.topic)
        else:
            LOG.debug('Sending message to topic %s', target.topic)

        if wait_for_reply:
            # 需要监听，则创建一个专用队列，即调用RPCClient.call()方法，则会创建一个专用队列
            reply_q = self._get_reply_q()
            msg_id = uuid.uuid4().hex
            msg.update({'_msg_id': msg_id})
            msg.update({'_reply_q': reply_q})
            msg.update({'_timeout': call_monitor_timeout})
            LOG.debug('Expecting reply to msg %s in queue %s', msg_id,
                      reply_q)

        rpc_amqp._add_unique_id(msg)
        unique_id = msg[rpc_amqp.UNIQUE_ID]

        rpc_amqp.pack_context(msg, ctxt)
		
        # 需要对消息进行包装（序列化）
        if envelope:
            msg = rpc_common.serialize_msg(msg)
		
        # 监听消息返回
        if wait_for_reply:
            self._waiter.listen(msg_id)
            log_msg = "CALL msg_id: %s " % msg_id
        else:
            log_msg = "CAST unique_id: %s " % unique_id

        try:
            with self._get_connection(rpc_common.PURPOSE_SEND, retry) as conn:
                if notify:
                    exchange = self._get_exchange(target)
                    LOG.debug(log_msg + "NOTIFY exchange '%(exchange)s'"
                              " topic '%(topic)s'", {'exchange': exchange,
                                                     'topic': target.topic})
                    # 通知类消息则发送通知
                    conn.notify_send(exchange, target.topic, msg, retry=retry)
                elif target.fanout:
                    # 广播类消息则发送广播
                    log_msg += "FANOUT topic '{topic}'".format(
                        topic=target.topic)
                    LOG.debug(log_msg)
                    conn.fanout_send(target.topic, msg, retry=retry)
                else:
                    # 否则就发送给target，如果没有指定server，则轮训给target下的server
                    topic = target.topic
                    exchange = self._get_exchange(target)
                    if target.server:
                        # 发送给target下的server，则将routingKey命名为target.server
                        topic = '{}.{}'.format(target.topic, target.server)
                    LOG.debug(log_msg + "exchange '%(exchange)s'"
                              " topic '%(topic)s'", {'exchange': exchange,
                                                     'topic': topic})
                    # 根据交换机，路由键发送到指定队列中
                    conn.topic_send(exchange_name=exchange, topic=topic,
                                    msg=msg, timeout=timeout, retry=retry,
                                    transport_options=transport_options)
		
            if wait_for_reply:
                # call()方法需要等待消息完成，timeout：整个监听过程的超时时间，call_monitor_timeout不为0则添加另一个定时器监听返回消息，超时则抛出异常
                result = self._waiter.wait(msg_id, timeout,
                                           call_monitor_timeout, reply_q)
                if isinstance(result, Exception):
                    raise result
                return result
        finally:
            if wait_for_reply:
                # 取消监听
                self._waiter.unlisten(msg_id)

    def send(self, target, ctxt, message, wait_for_reply=None, timeout=None,
             call_monitor_timeout=None, retry=None, transport_options=None):
        return self._send(target, ctxt, message, wait_for_reply, timeout,
                          call_monitor_timeout, retry=retry,
                          transport_options=transport_options)

    def send_notification(self, target, ctxt, message, version, retry=None):
        return self._send(target, ctxt, message,
                          envelope=(version == 2.0), notify=True, retry=retry)

    # 控制消费者消费不同种类的消息，其中消费者是rpcserver
    def listen(self, target, batch_size, batch_timeout):
        conn = self._get_connection(rpc_common.PURPOSE_LISTEN)

        listener = RpcAMQPListener(self, conn)
		
        # 为topic为target.topic的消息定义消费者，topic是routingKey
        conn.declare_topic_consumer(exchange_name=self._get_exchange(target),
                                    topic=target.topic,
                                    callback=listener)
        
        # 为topic为topic.server的消息定义消费者
        conn.declare_topic_consumer(exchange_name=self._get_exchange(target),
                                    topic='{}.{}'.format(target.topic,
                                                         target.server),
                                    callback=listener)
        # 为topic为fanout=True的消息定义消费者
        conn.declare_fanout_consumer(target.topic, listener)
		
        # 轮训传入的消息并执行Listener在启动start时传入的回调函数
        return base.PollStyleListenerAdapter(listener, batch_size,
                                             batch_timeout)

    # 创建消费者，貌似是根据优先级创建
    def listen_for_notifications(self, targets_and_priorities, pool,
                                 batch_size, batch_timeout):
        conn = self._get_connection(rpc_common.PURPOSE_LISTEN)

        listener = NotificationAMQPListener(self, conn)
        for target, priority in targets_and_priorities:
            conn.declare_topic_consumer(
                exchange_name=self._get_exchange(target),
                topic='{}.{}'.format(target.topic, priority),
                callback=listener, queue_name=pool)
        return base.PollStyleListenerAdapter(listener, batch_size,
                                             batch_timeout)

    def cleanup(self):
        if self._connection_pool:
            # 连接池置为空，不再接受新的请求
            self._connection_pool.empty()
        self._connection_pool = None

        with self._reply_q_lock:
            if self._reply_q is not None:
                self._waiter.stop()
                self._reply_q_conn.close()
                self._reply_q_conn = None
                self._reply_q = None
                self._waiter = None
\`\`\`

### 流程图
创建\`rpcserver\`时会创建三个队列，分别为\`topic\`、\`tppic.server\`、\`fanout\`，\`rpcclient\`使用\`call()
\`方法时，会临时创建一个反向的\`reply\`队列用于监听，调用任务完成后这个队列就会被删除
![oslo_messaging通信方式](/image/oslo_messaging.png)
**创建rpcserver**

创建rpcserver需要指定\`topic\`和\`server\`，创建rpcserver时会创建三个队列与对应类型的交换机绑定，其对应的路由键分别为\`topic.server\`、\`topic\`、\`topic\`

**创建rpcclient**

创建rpcclient需要指定\`topic\`

-   如果不指定\`server\`，则消息发送到\`topic\`消息队列中，并通过轮询的方式发送给消费者（rpcserver）。
-   如果指定了\`server\`则会发送给\`topic.server\`队列，并由一个rpcserver消费。
-   如果指定\`fanout=True\`，则消息会发送到\`fanout\`队列中，订阅该队列的所有消费者都会收到这个消息
`},{title:"网络服务neutron",headers:[],path:"/openstack/neutron/",pathLocale:"/",extraFields:`---
title: 网络服务neutron
icon: net 
index: false
cover: /discoverybackground/ocean2.jpg
dir:
  order: 2
category:
  - neutron
tag:
  - neutron
---

<Catalog/>
`},{title:"openstack中的Service",headers:[{level:2,title:"nova.service.Service",slug:"nova-service-service",link:"#nova-service-service",children:[{level:3,title:"create",slug:"create",link:"#create",children:[]},{level:3,title:"init",slug:"init",link:"#init",children:[]},{level:3,title:"start、stop",slug:"start、stop",link:"#start、stop",children:[]},{level:3,title:"总结",slug:"总结",link:"#总结",children:[]}]},{level:2,title:"nova.service.WSGIService",slug:"nova-service-wsgiservice",link:"#nova-service-wsgiservice",children:[{level:3,title:"WSGIService",slug:"wsgiservice",link:"#wsgiservice",children:[]},{level:3,title:"eventlet.wsgi.server",slug:"eventlet-wsgi-server",link:"#eventlet-wsgi-server",children:[]},{level:3,title:"总结",slug:"总结-1",link:"#总结-1",children:[]}]},{level:2,title:"ServiceLauncher",slug:"servicelauncher",link:"#servicelauncher",children:[]}],path:"/openstack/neutron/openstack_3service.html",pathLocale:"/",extraFields:`---
title: openstack中的Service
star: true
icon: page
category:
  - openstack中的Service
  - 随记
  - oslo
tag: 
  - WSGIService
  - oslo_messaging
  - wsgi
---


## nova.service.Service

主要用于启动rpc服务，启动定时任务

### create

以\`nova.service.Service.create\`方法为例：

\`\`\`python
# 父类为oslo_service.Service

@classmethod
def create(cls, host=None, binary=None, topic=None, manager=None,
           report_interval=None, periodic_enable=None,
           periodic_fuzzy_delay=None, periodic_interval_max=None):
 	  # 相关配置检查
    if not host:
        host = CONF.host
    if not binary:
        binary = os.path.basename(sys.argv[0])
    if not topic:
        topic = binary.rpartition('nova-')[2]
    if not manager:
        # 为当前的wsgi服务配置对应的manager，manager中用来启动定时任务，或暴露endpoint服务端点
        manager = SERVICE_MANAGERS.get(binary)
    if report_interval is None:
        report_interval = CONF.report_interval
    if periodic_enable is None:
        periodic_enable = CONF.periodic_enable
    if periodic_fuzzy_delay is None:
        periodic_fuzzy_delay = CONF.periodic_fuzzy_delay

    debugger.init()
	  # 调用超类的构造方法
    service_obj = cls(host, binary, topic, manager,
                      report_interval=report_interval,
                      periodic_enable=periodic_enable,
                      periodic_fuzzy_delay=periodic_fuzzy_delay,
                      periodic_interval_max=periodic_interval_max)
    try:
        utils.raise_if_old_compute()
    except exception.TooOldComputeService as e:
        if CONF.workarounds.disable_compute_service_check_for_ffu:
            LOG.warning(str(e))
        else:
            raise

    return service_obj
\`\`\`

调用上述方法只后会返回一个\`nova.service.Service\`对象

### init

\`nova.service.Service\`对象构造方法：

\`\`\`python
def __init__(self, host, binary, topic, manager, report_interval=None,
             periodic_enable=None, periodic_fuzzy_delay=None,
             periodic_interval_max=None, *args, **kwargs):
    super(Service, self).__init__()
    self.host = host
    self.binary = binary
    self.topic = topic
    self.manager_class_name = manager
    # 似乎是选择RPC服务的驱动，例如以rabbitmq作为RPC服务的通信组件
    self.servicegroup_api = servicegroup.API()
    # 以manager的名字获取对应的类
    manager_class = importutils.import_class(self.manager_class_name)
    # 创建api的TARGET
    if objects_base.NovaObject.indirection_api:
        # API()的init方法展示了创建端点的过程
        conductor_api = conductor.API()
        conductor_api.wait_until_ready(context.get_admin_context())
    self.manager = manager_class(host=self.host, *args, **kwargs)
    self.rpcserver = None
    self.report_interval = report_interval
    # 是否允许定时任务启动
    self.periodic_enable = periodic_enable
    self.periodic_fuzzy_delay = periodic_fuzzy_delay
    self.periodic_interval_max = periodic_interval_max
    self.saved_args, self.saved_kwargs = args, kwargs
    self.backdoor_port = None
    setup_profiler(binary, self.host)
\`\`\`

\`conductor_api = conductor.API()\`中\`init\`调用了\`BaseAPI\`，主要用于创建调用\`rpcserver\`的\`client\`，代码如下：

\`\`\`python
def __init__(self, topic):
    super(BaseAPI, self).__init__()
    # 使用oslo_message组件进行rpc通信 Target方法还有fanout表示是否广播，server表示一个Target下某个精确的server，如果不指定server，则轮训发送到这个rpcserver下的一个server，
    target = messaging.Target(topic=topic,
                              namespace=_NAMESPACE,
                              version='1.0')
    version_cap = self.VERSION_ALIASES.get(CONF.upgrade_levels.baseapi,
                                           CONF.upgrade_levels.baseapi)
    # 根据Target获取到调用rpcserver的client
    self.client = rpc.get_client(target, version_cap=version_cap)
\`\`\`

### start、stop

\`\`\`python
def start(self):
    context.CELL_CACHE = {}

    verstr = version.version_string_with_package()
    LOG.info('Starting %(topic)s node (version %(version)s)',
              {'topic': self.topic, 'version': verstr})
    self.basic_config_check()
    ctxt = context.get_admin_context()
    # 获取服务在数据库中的记录（nova中server的部分数据会保存在数据库中）
    self.service_ref = objects.Service.get_by_host_and_binary(
        ctxt, self.host, self.binary)
    # nova.manager.Manager中没有做任何操作，默认为pass
    self.manager.init_host(self.service_ref)
    self.model_disconnected = False
    if self.service_ref:
        # 更新数据库中server的version
        _update_service_ref(self.service_ref)

    else:
        try:
            # 数据库中创建server
            self.service_ref = _create_service_ref(self, ctxt)
        except (exception.ServiceTopicExists,
                exception.ServiceBinaryExists):
            # NOTE(danms): If we race to create a record with a sibling
            # worker, don't fail here.
            self.service_ref = objects.Service.get_by_host_and_binary(
                ctxt, self.host, self.binary)
	  # manager中的前置处理，默认为pass
    self.manager.pre_start_hook(self.service_ref)
    # 设置后门端口，调试作用？
    if self.backdoor_port is not None:
        self.manager.backdoor_port = self.backdoor_port

    LOG.debug("Creating RPC server for service %s", self.topic)
    # 使用oslo_messaging创建Target，必选topic和server，注意此处是创建rpcserver而不是client
    target = messaging.Target(topic=self.topic, server=self.host)
    # 服务的端点，可以添加多个类，暴露其中的public方法
    endpoints = [
        self.manager,
        baserpc.BaseRPCAPI(self.manager.service_name, self.backdoor_port)
    ]
    endpoints.extend(self.manager.additional_endpoints)

    serializer = objects_base.NovaObjectSerializer()
	
    """
    # 使用消息队列创建rpcserver
    return messaging.get_rpc_server(TRANSPORT,
                                    target,
                                    endpoints,
                                    executor='eventlet',
                                    serializer=serializer,
                                    access_policy=access_policy)
    """
    self.rpcserver = rpc.get_server(target, endpoints, serializer)
    self.rpcserver.start()
    # manager后处理
    self.manager.post_start_hook()

    LOG.debug("Join ServiceGroup membership for this service %s",
              self.topic)
    # Add service to the ServiceGroup membership group.
    self.servicegroup_api.join(self.host, self.topic, self)

    if self.periodic_enable:
        if self.periodic_fuzzy_delay:
            initial_delay = random.randint(0, self.periodic_fuzzy_delay)
        else:
            initial_delay = None
		# 往线程池中添加定时任务，self.periodic_tasks即执行manager中的periodic_tasks，将添加了定时任务注解的方法以设置的spacing时间间隔周期执行方法
        self.tg.add_dynamic_timer(self.periodic_tasks,
                                 initial_delay=initial_delay,
                                 periodic_interval_max=
                                    self.periodic_interval_max)
        
    def periodic_tasks(self, raise_on_error=False):
        """Tasks to be run at a periodic interval."""
        ctxt = context.get_admin_context()
        return self.manager.periodic_tasks(ctxt, raise_on_error=raise_on_error)
    
    def stop(self):
        """stop the service and clean up."""
        try:
            # 关闭RPC监听，线程池shutdown(wait=True)
            self.rpcserver.stop()
            self.rpcserver.wait()
        except Exception:
            pass

        try:
            self.manager.cleanup_host()
        except Exception:
            LOG.exception('Service error occurred during cleanup_host')
            pass

        super(Service, self).stop()
\`\`\`

\`oslo_messaging\`中使用RabbitMQ作为消息队列，其中rpc连接数最大值默认为\`30\`，每次进行\`call\`调用都会生成一个连接进行监听返回值，如果在短时间内调用多次\`call\`但是没有获取到返回值，会导致连接被占用完，后续的\`call\`会被阻塞直到超过\`timeout\`返回超时错误，如果设置了\`call_monitor_timeout\`则会创建定时器查询返回值，超时则抛出\`timeout\`异常

### 总结

\`Service\`内通过设置\`endpoint\`展示了对外的\`remote\`方法，\`target\`中表明了RPC调用的\`routingKey\`，通过\`target\`和\`endpoint\`就可以注册一个\`rpcserver\`

在\`Client\`端，只需要通过相同配置的\`target\`即可获取对应到\`rpcserver\`的\`client\`，它是生产者，\`client\`发送的请求发送给交换机只后，根据\`routingKey\`找到对应的队列，队列注册各种\`topic\`类型的\`Listener\`处理请求，消费者是\`rpcserver\`



##  nova.service.WSGIService

### WSGIService

\`WSGIService\`主要与\`Service\`的区别在于\`start\`方法

\`\`\`python
def start(self):
	# 复制原始套接字对象，原对象通过self._socket = eventlet.listen(bind_addr, family, backlog=backlog)获得
    dup_socket = self._socket.dup()
    
    # 允许重用本地端口和地址
    dup_socket.setsockopt(socket.SOL_SOCKET,
                          socket.SO_REUSEADDR, 1)
    
    # keepAlive
    dup_socket.setsockopt(socket.SOL_SOCKET,
                          socket.SO_KEEPALIVE, 1)

    # 设置TCP连接的存活时间
    if hasattr(socket, 'TCP_KEEPIDLE'):
        dup_socket.setsockopt(socket.IPPROTO_TCP,
                              socket.TCP_KEEPIDLE,
                              CONF.wsgi.tcp_keepidle)

    # 检查SSL配置
    if self._use_ssl:
        try:
            ca_file = CONF.wsgi.ssl_ca_file
            cert_file = CONF.wsgi.ssl_cert_file
            key_file = CONF.wsgi.ssl_key_file

            if cert_file and not os.path.exists(cert_file):
                raise RuntimeError(
                      _("Unable to find cert_file : %s") % cert_file)

            if ca_file and not os.path.exists(ca_file):
                raise RuntimeError(
                      _("Unable to find ca_file : %s") % ca_file)

            if key_file and not os.path.exists(key_file):
                raise RuntimeError(
                      _("Unable to find key_file : %s") % key_file)

            if self._use_ssl and (not cert_file or not key_file):
                raise RuntimeError(
                      _("When running server in SSL mode, you must "
                        "specify both a cert_file and key_file "
                        "option value in your configuration file"))
            ssl_kwargs = {
                'server_side': True,
                'certfile': cert_file,
                'keyfile': key_file,
                'cert_reqs': ssl.CERT_NONE,
            }

            if CONF.wsgi.ssl_ca_file:
                ssl_kwargs['ca_certs'] = ca_file
                ssl_kwargs['cert_reqs'] = ssl.CERT_REQUIRED
			# 将套接字包装成支持SSL的套接字
            dup_socket = eventlet.wrap_ssl(dup_socket,
                                           **ssl_kwargs)
        except Exception:
            with excutils.save_and_reraise_exception():
                LOG.error(
                    "Failed to start %(name)s on %(host)s:%(port)s with "
                    "SSL support",
                    {'name': self.name, 'host': self.host,
                     'port': self.port})
	# 设置wsgi初始化的参数
    wsgi_kwargs = {
        'func': eventlet.wsgi.server,
        'sock': dup_socket,
        'site': self.app,
        'protocol': self._protocol,
        'custom_pool': self._pool,
        'log': self._logger,
        'log_format': CONF.wsgi.wsgi_log_format,
        'debug': False,
        'keepalive': CONF.wsgi.keep_alive,
        'socket_timeout': self.client_socket_timeout
        }

    if self._max_url_len:
        wsgi_kwargs['url_length_limit'] = self._max_url_len
	# 启动WSGI服务器，本质是执行参数中的 func: eventlet.wsgi.server方法
    self._server = utils.spawn(**wsgi_kwargs)
\`\`\`

\`eventlet.wsgi.server\`中创建了\`WSGIServer\`并监听

### eventlet.wsgi.server

\`\`\`python
def server(sock, site,
           log=None,
           environ=None,
           max_size=None,
           max_http_version=DEFAULT_MAX_HTTP_VERSION,
           protocol=HttpProtocol,
           server_event=None,
           minimum_chunk_size=None,
           log_x_forwarded_for=True,
           custom_pool=None,
           keepalive=True,
           log_output=True,
           log_format=DEFAULT_LOG_FORMAT,
           url_length_limit=MAX_REQUEST_LINE,
           debug=True,
           socket_timeout=None,
           capitalize_response_headers=True):
	# 创建HTTPServer对象
    serv = Server(
        sock, sock.getsockname(),
        site, log,
        environ=environ,
        max_http_version=max_http_version,
        protocol=protocol,
        minimum_chunk_size=minimum_chunk_size,
        log_x_forwarded_for=log_x_forwarded_for,
        keepalive=keepalive,
        log_output=log_output,
        log_format=log_format,
        url_length_limit=url_length_limit,
        debug=debug,
        socket_timeout=socket_timeout,
        capitalize_response_headers=capitalize_response_headers,
    )
    # 提示配置将来会被弃用，并在journalctl中打印
    if server_event is not None:
        warnings.warn(
            'eventlet.wsgi.Server() server_event kwarg is deprecated and will be removed soon',
            DeprecationWarning, stacklevel=2)
        server_event.send(serv)
    # 设置一些默认参数
    if max_size is None:
        max_size = DEFAULT_MAX_SIMULTANEOUS_REQUESTS
    if custom_pool is not None:
        pool = custom_pool
    else:
        # 使用绿线程执行HTTP请求
        pool = eventlet.GreenPool(max_size)
	# 检查线程池中是否有spawn和waitall方法，用于后续的优雅关闭
    if not (hasattr(pool, 'spawn') and hasattr(pool, 'waitall')):
        raise AttributeError('''\\
    eventlet.wsgi.Server pool must provide methods: \`spawn\`, \`waitall\`.
    If unsure, use eventlet.GreenPool.''')

    connections = {}
	
    # 清理连接操作
    def _clean_connection(_, conn):
        connections.pop(conn[0], None)
        conn[2] = STATE_CLOSE
        greenio.shutdown_safe(conn[1])
        conn[1].close()

    try:
        # journalctl中打印服务启动
        serv.log.info('({}) wsgi starting up on {}'.format(serv.pid, socket_repr(sock)))
        # 全局变量为True才会监听
        while is_accepting:
            try:
                # 接受请求
                client_socket, client_addr = sock.accept()
                # 设置超时时间
                client_socket.settimeout(serv.socket_timeout)
                # journalctl中打印
                serv.log.debug('({}) accepted {!r}'.format(serv.pid, client_addr))
                # 添加到connections字典中
                connections[client_addr] = connection = [client_addr, client_socket, STATE_IDLE]
                # 使用线程池执行process_request，并通过link设置线程执行完毕的回调函数，清理connection
                (pool.spawn(serv.process_request, connection)
                    .link(_clean_connection, connection))
            except ACCEPT_EXCEPTIONS as e:
                if support.get_errno(e) not in ACCEPT_ERRNO:
                    raise
                else:
                    break
            except (KeyboardInterrupt, SystemExit):
                serv.log.info('wsgi exiting')
                break
    finally:
        # 上方循环break或者全局变量is_accepting被设置为False，则停止请求监听
        for cs in connections.values():
            prev_state = cs[2]
            # 设置连接状态为CLOSE
            cs[2] = STATE_CLOSE
            # 如果状态为空闲，则调用安全关闭，
            if prev_state == STATE_IDLE:
                greenio.shutdown_safe(cs[1])
        # 等待线程池中的所有任务执行完毕
        pool.waitall()
        # journalctl记录wsgi退出，并记录此时是否正在接受新的连接
        serv.log.info('({}) wsgi exited, is_accepting={}'.format(serv.pid, is_accepting))
        try:
            #关闭套接字
            sock.close()
        except OSError as e:
            if support.get_errno(e) not in BROKEN_SOCK:
                traceback.print_exc()
\`\`\`

### 总结

可以发现，决定是否接受新的请求取决于\`is_accepting\`，所以在使用\`eventlet.wsgi.server\`创建HTTP监听服务时，可以在\`stop\`执行时，将\`is_accepting=False\`，此时\`WSGIServer\`不会再接受新的请求，并进行优雅关闭

## ServiceLauncher

nova中的服务使用启动器进行统一管理，`},{title:"卷服务cinder",headers:[],path:"/openstack/cinder/",pathLocale:"/",extraFields:`---
title: 卷服务cinder
icon: cinder 
index: false
cover: /discoverybackground/ocean3.jpg
dir:
  order: 3
category:
  - cinder
tag:
  - cinder
---

<Catalog/>
`},{title:"openstack中的Service",headers:[{level:2,title:"nova.service.Service",slug:"nova-service-service",link:"#nova-service-service",children:[{level:3,title:"create",slug:"create",link:"#create",children:[]},{level:3,title:"init",slug:"init",link:"#init",children:[]},{level:3,title:"start、stop",slug:"start、stop",link:"#start、stop",children:[]},{level:3,title:"总结",slug:"总结",link:"#总结",children:[]}]},{level:2,title:"nova.service.WSGIService",slug:"nova-service-wsgiservice",link:"#nova-service-wsgiservice",children:[{level:3,title:"WSGIService",slug:"wsgiservice",link:"#wsgiservice",children:[]},{level:3,title:"eventlet.wsgi.server",slug:"eventlet-wsgi-server",link:"#eventlet-wsgi-server",children:[]},{level:3,title:"总结",slug:"总结-1",link:"#总结-1",children:[]}]},{level:2,title:"ServiceLauncher",slug:"servicelauncher",link:"#servicelauncher",children:[]}],path:"/openstack/cinder/openstack_serv4ice.html",pathLocale:"/",extraFields:`---
title: openstack中的Service
star: true
icon: page
category:
  - openstack中的Service
  - 随记
  - oslo
tag: 
  - WSGIService
  - oslo_messaging
  - wsgi
---


## nova.service.Service

主要用于启动rpc服务，启动定时任务

### create

以\`nova.service.Service.create\`方法为例：

\`\`\`python
# 父类为oslo_service.Service

@classmethod
def create(cls, host=None, binary=None, topic=None, manager=None,
           report_interval=None, periodic_enable=None,
           periodic_fuzzy_delay=None, periodic_interval_max=None):
 	  # 相关配置检查
    if not host:
        host = CONF.host
    if not binary:
        binary = os.path.basename(sys.argv[0])
    if not topic:
        topic = binary.rpartition('nova-')[2]
    if not manager:
        # 为当前的wsgi服务配置对应的manager，manager中用来启动定时任务，或暴露endpoint服务端点
        manager = SERVICE_MANAGERS.get(binary)
    if report_interval is None:
        report_interval = CONF.report_interval
    if periodic_enable is None:
        periodic_enable = CONF.periodic_enable
    if periodic_fuzzy_delay is None:
        periodic_fuzzy_delay = CONF.periodic_fuzzy_delay

    debugger.init()
	  # 调用超类的构造方法
    service_obj = cls(host, binary, topic, manager,
                      report_interval=report_interval,
                      periodic_enable=periodic_enable,
                      periodic_fuzzy_delay=periodic_fuzzy_delay,
                      periodic_interval_max=periodic_interval_max)
    try:
        utils.raise_if_old_compute()
    except exception.TooOldComputeService as e:
        if CONF.workarounds.disable_compute_service_check_for_ffu:
            LOG.warning(str(e))
        else:
            raise

    return service_obj
\`\`\`

调用上述方法只后会返回一个\`nova.service.Service\`对象

### init

\`nova.service.Service\`对象构造方法：

\`\`\`python
def __init__(self, host, binary, topic, manager, report_interval=None,
             periodic_enable=None, periodic_fuzzy_delay=None,
             periodic_interval_max=None, *args, **kwargs):
    super(Service, self).__init__()
    self.host = host
    self.binary = binary
    self.topic = topic
    self.manager_class_name = manager
    # 似乎是选择RPC服务的驱动，例如以rabbitmq作为RPC服务的通信组件
    self.servicegroup_api = servicegroup.API()
    # 以manager的名字获取对应的类
    manager_class = importutils.import_class(self.manager_class_name)
    # 创建api的TARGET
    if objects_base.NovaObject.indirection_api:
        # API()的init方法展示了创建端点的过程
        conductor_api = conductor.API()
        conductor_api.wait_until_ready(context.get_admin_context())
    self.manager = manager_class(host=self.host, *args, **kwargs)
    self.rpcserver = None
    self.report_interval = report_interval
    # 是否允许定时任务启动
    self.periodic_enable = periodic_enable
    self.periodic_fuzzy_delay = periodic_fuzzy_delay
    self.periodic_interval_max = periodic_interval_max
    self.saved_args, self.saved_kwargs = args, kwargs
    self.backdoor_port = None
    setup_profiler(binary, self.host)
\`\`\`

\`conductor_api = conductor.API()\`中\`init\`调用了\`BaseAPI\`，主要用于创建调用\`rpcserver\`的\`client\`，代码如下：

\`\`\`python
def __init__(self, topic):
    super(BaseAPI, self).__init__()
    # 使用oslo_message组件进行rpc通信 Target方法还有fanout表示是否广播，server表示一个Target下某个精确的server，如果不指定server，则轮训发送到这个rpcserver下的一个server，
    target = messaging.Target(topic=topic,
                              namespace=_NAMESPACE,
                              version='1.0')
    version_cap = self.VERSION_ALIASES.get(CONF.upgrade_levels.baseapi,
                                           CONF.upgrade_levels.baseapi)
    # 根据Target获取到调用rpcserver的client
    self.client = rpc.get_client(target, version_cap=version_cap)
\`\`\`

### start、stop

\`\`\`python
def start(self):
    context.CELL_CACHE = {}

    verstr = version.version_string_with_package()
    LOG.info('Starting %(topic)s node (version %(version)s)',
              {'topic': self.topic, 'version': verstr})
    self.basic_config_check()
    ctxt = context.get_admin_context()
    # 获取服务在数据库中的记录（nova中server的部分数据会保存在数据库中）
    self.service_ref = objects.Service.get_by_host_and_binary(
        ctxt, self.host, self.binary)
    # nova.manager.Manager中没有做任何操作，默认为pass
    self.manager.init_host(self.service_ref)
    self.model_disconnected = False
    if self.service_ref:
        # 更新数据库中server的version
        _update_service_ref(self.service_ref)

    else:
        try:
            # 数据库中创建server
            self.service_ref = _create_service_ref(self, ctxt)
        except (exception.ServiceTopicExists,
                exception.ServiceBinaryExists):
            # NOTE(danms): If we race to create a record with a sibling
            # worker, don't fail here.
            self.service_ref = objects.Service.get_by_host_and_binary(
                ctxt, self.host, self.binary)
	  # manager中的前置处理，默认为pass
    self.manager.pre_start_hook(self.service_ref)
    # 设置后门端口，调试作用？
    if self.backdoor_port is not None:
        self.manager.backdoor_port = self.backdoor_port

    LOG.debug("Creating RPC server for service %s", self.topic)
    # 使用oslo_messaging创建Target，必选topic和server，注意此处是创建rpcserver而不是client
    target = messaging.Target(topic=self.topic, server=self.host)
    # 服务的端点，可以添加多个类，暴露其中的public方法
    endpoints = [
        self.manager,
        baserpc.BaseRPCAPI(self.manager.service_name, self.backdoor_port)
    ]
    endpoints.extend(self.manager.additional_endpoints)

    serializer = objects_base.NovaObjectSerializer()
	
    """
    # 使用消息队列创建rpcserver
    return messaging.get_rpc_server(TRANSPORT,
                                    target,
                                    endpoints,
                                    executor='eventlet',
                                    serializer=serializer,
                                    access_policy=access_policy)
    """
    self.rpcserver = rpc.get_server(target, endpoints, serializer)
    self.rpcserver.start()
    # manager后处理
    self.manager.post_start_hook()

    LOG.debug("Join ServiceGroup membership for this service %s",
              self.topic)
    # Add service to the ServiceGroup membership group.
    self.servicegroup_api.join(self.host, self.topic, self)

    if self.periodic_enable:
        if self.periodic_fuzzy_delay:
            initial_delay = random.randint(0, self.periodic_fuzzy_delay)
        else:
            initial_delay = None
		# 往线程池中添加定时任务，self.periodic_tasks即执行manager中的periodic_tasks，将添加了定时任务注解的方法以设置的spacing时间间隔周期执行方法
        self.tg.add_dynamic_timer(self.periodic_tasks,
                                 initial_delay=initial_delay,
                                 periodic_interval_max=
                                    self.periodic_interval_max)
        
    def periodic_tasks(self, raise_on_error=False):
        """Tasks to be run at a periodic interval."""
        ctxt = context.get_admin_context()
        return self.manager.periodic_tasks(ctxt, raise_on_error=raise_on_error)
    
    def stop(self):
        """stop the service and clean up."""
        try:
            # 关闭RPC监听，线程池shutdown(wait=True)
            self.rpcserver.stop()
            self.rpcserver.wait()
        except Exception:
            pass

        try:
            self.manager.cleanup_host()
        except Exception:
            LOG.exception('Service error occurred during cleanup_host')
            pass

        super(Service, self).stop()
\`\`\`

\`oslo_messaging\`中使用RabbitMQ作为消息队列，其中rpc连接数最大值默认为\`30\`，每次进行\`call\`调用都会生成一个连接进行监听返回值，如果在短时间内调用多次\`call\`但是没有获取到返回值，会导致连接被占用完，后续的\`call\`会被阻塞直到超过\`timeout\`返回超时错误，如果设置了\`call_monitor_timeout\`则会创建定时器查询返回值，超时则抛出\`timeout\`异常

### 总结

\`Service\`内通过设置\`endpoint\`展示了对外的\`remote\`方法，\`target\`中表明了RPC调用的\`routingKey\`，通过\`target\`和\`endpoint\`就可以注册一个\`rpcserver\`

在\`Client\`端，只需要通过相同配置的\`target\`即可获取对应到\`rpcserver\`的\`client\`，它是生产者，\`client\`发送的请求发送给交换机只后，根据\`routingKey\`找到对应的队列，队列注册各种\`topic\`类型的\`Listener\`处理请求，消费者是\`rpcserver\`



##  nova.service.WSGIService

### WSGIService

\`WSGIService\`主要与\`Service\`的区别在于\`start\`方法

\`\`\`python
def start(self):
	# 复制原始套接字对象，原对象通过self._socket = eventlet.listen(bind_addr, family, backlog=backlog)获得
    dup_socket = self._socket.dup()
    
    # 允许重用本地端口和地址
    dup_socket.setsockopt(socket.SOL_SOCKET,
                          socket.SO_REUSEADDR, 1)
    
    # keepAlive
    dup_socket.setsockopt(socket.SOL_SOCKET,
                          socket.SO_KEEPALIVE, 1)

    # 设置TCP连接的存活时间
    if hasattr(socket, 'TCP_KEEPIDLE'):
        dup_socket.setsockopt(socket.IPPROTO_TCP,
                              socket.TCP_KEEPIDLE,
                              CONF.wsgi.tcp_keepidle)

    # 检查SSL配置
    if self._use_ssl:
        try:
            ca_file = CONF.wsgi.ssl_ca_file
            cert_file = CONF.wsgi.ssl_cert_file
            key_file = CONF.wsgi.ssl_key_file

            if cert_file and not os.path.exists(cert_file):
                raise RuntimeError(
                      _("Unable to find cert_file : %s") % cert_file)

            if ca_file and not os.path.exists(ca_file):
                raise RuntimeError(
                      _("Unable to find ca_file : %s") % ca_file)

            if key_file and not os.path.exists(key_file):
                raise RuntimeError(
                      _("Unable to find key_file : %s") % key_file)

            if self._use_ssl and (not cert_file or not key_file):
                raise RuntimeError(
                      _("When running server in SSL mode, you must "
                        "specify both a cert_file and key_file "
                        "option value in your configuration file"))
            ssl_kwargs = {
                'server_side': True,
                'certfile': cert_file,
                'keyfile': key_file,
                'cert_reqs': ssl.CERT_NONE,
            }

            if CONF.wsgi.ssl_ca_file:
                ssl_kwargs['ca_certs'] = ca_file
                ssl_kwargs['cert_reqs'] = ssl.CERT_REQUIRED
			# 将套接字包装成支持SSL的套接字
            dup_socket = eventlet.wrap_ssl(dup_socket,
                                           **ssl_kwargs)
        except Exception:
            with excutils.save_and_reraise_exception():
                LOG.error(
                    "Failed to start %(name)s on %(host)s:%(port)s with "
                    "SSL support",
                    {'name': self.name, 'host': self.host,
                     'port': self.port})
	# 设置wsgi初始化的参数
    wsgi_kwargs = {
        'func': eventlet.wsgi.server,
        'sock': dup_socket,
        'site': self.app,
        'protocol': self._protocol,
        'custom_pool': self._pool,
        'log': self._logger,
        'log_format': CONF.wsgi.wsgi_log_format,
        'debug': False,
        'keepalive': CONF.wsgi.keep_alive,
        'socket_timeout': self.client_socket_timeout
        }

    if self._max_url_len:
        wsgi_kwargs['url_length_limit'] = self._max_url_len
	# 启动WSGI服务器，本质是执行参数中的 func: eventlet.wsgi.server方法
    self._server = utils.spawn(**wsgi_kwargs)
\`\`\`

\`eventlet.wsgi.server\`中创建了\`WSGIServer\`并监听

### eventlet.wsgi.server

\`\`\`python
def server(sock, site,
           log=None,
           environ=None,
           max_size=None,
           max_http_version=DEFAULT_MAX_HTTP_VERSION,
           protocol=HttpProtocol,
           server_event=None,
           minimum_chunk_size=None,
           log_x_forwarded_for=True,
           custom_pool=None,
           keepalive=True,
           log_output=True,
           log_format=DEFAULT_LOG_FORMAT,
           url_length_limit=MAX_REQUEST_LINE,
           debug=True,
           socket_timeout=None,
           capitalize_response_headers=True):
	# 创建HTTPServer对象
    serv = Server(
        sock, sock.getsockname(),
        site, log,
        environ=environ,
        max_http_version=max_http_version,
        protocol=protocol,
        minimum_chunk_size=minimum_chunk_size,
        log_x_forwarded_for=log_x_forwarded_for,
        keepalive=keepalive,
        log_output=log_output,
        log_format=log_format,
        url_length_limit=url_length_limit,
        debug=debug,
        socket_timeout=socket_timeout,
        capitalize_response_headers=capitalize_response_headers,
    )
    # 提示配置将来会被弃用，并在journalctl中打印
    if server_event is not None:
        warnings.warn(
            'eventlet.wsgi.Server() server_event kwarg is deprecated and will be removed soon',
            DeprecationWarning, stacklevel=2)
        server_event.send(serv)
    # 设置一些默认参数
    if max_size is None:
        max_size = DEFAULT_MAX_SIMULTANEOUS_REQUESTS
    if custom_pool is not None:
        pool = custom_pool
    else:
        # 使用绿线程执行HTTP请求
        pool = eventlet.GreenPool(max_size)
	# 检查线程池中是否有spawn和waitall方法，用于后续的优雅关闭
    if not (hasattr(pool, 'spawn') and hasattr(pool, 'waitall')):
        raise AttributeError('''\\
    eventlet.wsgi.Server pool must provide methods: \`spawn\`, \`waitall\`.
    If unsure, use eventlet.GreenPool.''')

    connections = {}
	
    # 清理连接操作
    def _clean_connection(_, conn):
        connections.pop(conn[0], None)
        conn[2] = STATE_CLOSE
        greenio.shutdown_safe(conn[1])
        conn[1].close()

    try:
        # journalctl中打印服务启动
        serv.log.info('({}) wsgi starting up on {}'.format(serv.pid, socket_repr(sock)))
        # 全局变量为True才会监听
        while is_accepting:
            try:
                # 接受请求
                client_socket, client_addr = sock.accept()
                # 设置超时时间
                client_socket.settimeout(serv.socket_timeout)
                # journalctl中打印
                serv.log.debug('({}) accepted {!r}'.format(serv.pid, client_addr))
                # 添加到connections字典中
                connections[client_addr] = connection = [client_addr, client_socket, STATE_IDLE]
                # 使用线程池执行process_request，并通过link设置线程执行完毕的回调函数，清理connection
                (pool.spawn(serv.process_request, connection)
                    .link(_clean_connection, connection))
            except ACCEPT_EXCEPTIONS as e:
                if support.get_errno(e) not in ACCEPT_ERRNO:
                    raise
                else:
                    break
            except (KeyboardInterrupt, SystemExit):
                serv.log.info('wsgi exiting')
                break
    finally:
        # 上方循环break或者全局变量is_accepting被设置为False，则停止请求监听
        for cs in connections.values():
            prev_state = cs[2]
            # 设置连接状态为CLOSE
            cs[2] = STATE_CLOSE
            # 如果状态为空闲，则调用安全关闭，
            if prev_state == STATE_IDLE:
                greenio.shutdown_safe(cs[1])
        # 等待线程池中的所有任务执行完毕
        pool.waitall()
        # journalctl记录wsgi退出，并记录此时是否正在接受新的连接
        serv.log.info('({}) wsgi exited, is_accepting={}'.format(serv.pid, is_accepting))
        try:
            #关闭套接字
            sock.close()
        except OSError as e:
            if support.get_errno(e) not in BROKEN_SOCK:
                traceback.print_exc()
\`\`\`

### 总结

可以发现，决定是否接受新的请求取决于\`is_accepting\`，所以在使用\`eventlet.wsgi.server\`创建HTTP监听服务时，可以在\`stop\`执行时，将\`is_accepting=False\`，此时\`WSGIServer\`不会再接受新的请求，并进行优雅关闭

## ServiceLauncher

nova中的服务使用启动器进行统一管理，`},{title:"计算服务nova",headers:[],path:"/openstack/nova/",pathLocale:"/",extraFields:`---
title: 计算服务nova
icon: nova 
index: false
cover: /discoverybackground/ocean1.jpg
dir:
  order: 1
category:
  - nova
tag:
  - nova
---

<Catalog/>
`},{title:"Launcher",headers:[{level:2,title:"Launcher",slug:"launcher",link:"#launcher",children:[{level:3,title:"Launcher基类",slug:"launcher基类",link:"#launcher基类",children:[]},{level:3,title:"ServiceLauncher",slug:"servicelauncher",link:"#servicelauncher",children:[]},{level:3,title:"ProcessLauncher",slug:"processlauncher",link:"#processlauncher",children:[]}]}],path:"/openstack/nova/launcher.html",pathLocale:"/",extraFields:`---
title: Launcher
star: true
icon: page
category:
  - openstack中的Launcher
  - 随记
  - oslo
tag: 
  - ServiceLauncher
  - Launcher
  - ProcessLauncher
---




## Launcher

### Launcher基类

Openstack中使用启动器\`oslo_service.service.Launcher\`管理各种\`Service\`，启动器能在收到\`systemctl stop\`发出的\`kill -15\`信号之后，执行内部\`services\`的\`stop()\`方法，如果能在\`stop()\`中添加优雅关闭的逻辑代码，则能实现服务的生命流程托管于\`Launcher\`，从而实现整个主进程的优雅关闭

\`Launcher\`中提供了模板方法

\`\`\`python
class Launcher(object):
    
    def __init__(self, conf, restart_method='reload'):
        self.conf = conf
        conf.register_opts(_options.service_opts)
        self.services = Services(restart_method=restart_method)
        self.backdoor_port = (
            eventlet_backdoor.initialize_if_enabled(self.conf))
        self.restart_method = restart_method
	
    # 用于将Service对象放入到启动器中，必须得用oslo_service.Service类作为参数
    def launch_service(self, service, workers=1):
        
        if workers is not None and workers != 1:
            raise ValueError(_("Launcher asked to start multiple workers"))
        _check_service_base(service)
        service.backdoor_port = self.backdoor_port
        self.services.add(service)

    def stop(self):
        self.services.stop()

    def wait(self):
        self.services.wait()

    def restart(self):
        if self.restart_method == 'reload':
            self.conf.reload_config_files()
        else:  # self.restart_method == 'mutate'
            self.conf.mutate_config_files()
        self.services.restart()
\`\`\`

### ServiceLauncher

\`ServiceLauncher\`是单进程版本的\`Launcher\`，在基类\`Launcher\`中添加了优雅关闭方法，针对信号的处理方法

\`\`\`python
class ServiceLauncher(Launcher):

    def __init__(self, conf, restart_method='reload'):
        super(ServiceLauncher, self).__init__(
            conf, restart_method=restart_method)
        # 注册信号处理方法
        self.signal_handler = SignalHandler()
	
    # 优雅关闭
    def _graceful_shutdown(self, *args):
        # 清空信号处理监听器
        self.signal_handler.clear()
        # 如果设置了优雅关闭的超时时间，则会设置一个闹钟，当尝试关闭开始后，发生了超时则给进程发送SIGALRM信号杀死进程
        if (self.conf.graceful_shutdown_timeout and
                self.signal_handler.is_signal_supported('SIGALRM')):
            signal.alarm(self.conf.graceful_shutdown_timeout)
        self.stop()

    def _reload_service(self, *args):
        # 发送重启信号
        self.signal_handler.clear()
        raise SignalExit(signal.SIGHUP)

    def _fast_exit(self, *args):
        LOG.info('Caught SIGINT signal, instantaneous exiting')
        # 快速退出
        os._exit(1)

    def _on_timeout_exit(self, *args):
        # 优雅关闭超时后退出
        LOG.info('Graceful shutdown timeout exceeded, '
                 'instantaneous exiting')
        os._exit(1)

    def handle_signal(self):
        # 添加应对各种信号的处理办法
        self.signal_handler.clear()
        self.signal_handler.add_handler('SIGTERM', self._graceful_shutdown)
        self.signal_handler.add_handler('SIGINT', self._fast_exit)
        self.signal_handler.add_handler('SIGHUP', self._reload_service)
        self.signal_handler.add_handler('SIGALRM', self._on_timeout_exit)

    # 等待exit或者信号发生，并进行相应的退出处理
    def _wait_for_exit_or_signal(self):
        status = None
        signo = 0

        if self.conf.log_options:
            LOG.debug('Full set of CONF:')
            self.conf.log_opt_values(LOG, logging.DEBUG)

        try:
            super(ServiceLauncher, self).wait()
        except SignalExit as exc:
            signame = self.signal_handler.signals_to_name[exc.signo]
            LOG.info('Caught %s, handling', signame)
            status = exc.code
            signo = exc.signo
        except SystemExit as exc:
            self.stop()
            status = exc.code
        except Exception:
            self.stop()
        return status, signo

    def wait(self):
		# 通知守护进程，当前进程已经启动
        systemd.notify_once()
        # 重置信号处理监听
        self.signal_handler.clear()
        while True:
            # 添加信号处理监听
            self.handle_signal()
            # 等待异常或信号
            status, signo = self._wait_for_exit_or_signal()
            # 如果不是SIGHUP或DAEMON则退出循环，否则重启服务
            if not _is_sighup_and_daemon(signo):
                break
            self.restart()
		# 等待Service完成，Launcher中使用Services类包装多个Service，内部使用greenpool.GreenPool(thread_pool_size)执行每个Service
        super(ServiceLauncher, self).wait()
        return status
\`\`\`

\`ServiceLauncher\`中使用绿线程执行每一个\`Service\`，所以在启动之后通过\`systemctl status\`可以看到只有一个进程执行

### ProcessLauncher

\`ProcessLauncher\`是采用\`fork()\`创建子进程，每个子进程添加了一个\`Launcher\`处理\`Service\`

\`\`\`python
class ProcessLauncher(object):

    def __init__(self, conf, wait_interval=0.01, restart_method='reload'):
        self.conf = conf
        conf.register_opts(_options.service_opts)
        self.children = {}
        self.sigcaught = None
        self.running = True
        self.wait_interval = wait_interval
        self.launcher = None
        # 用于读取父进程是否死亡
        rfd, self.writepipe = os.pipe()
        self.readpipe = eventlet.greenio.GreenPipe(rfd, 'r')
        # 信号处理器对象
        self.signal_handler = SignalHandler()
        # 添加信号处理器
        self.handle_signal()
        # 检查传入的重启方法是否为reload或者mutate
        self.restart_method = restart_method
        if restart_method not in _LAUNCHER_RESTART_METHODS:
            raise ValueError(_("Invalid restart_method: %s") % restart_method)

    def handle_signal(self):
        # 添加了各种信号的处理器，仅有SIGTERM和SIGHUP才会让running=False
        self.signal_handler.add_handler('SIGTERM', self._handle_term)
        self.signal_handler.add_handler('SIGHUP', self._handle_hup)
        self.signal_handler.add_handler('SIGINT', self._fast_exit)
        self.signal_handler.add_handler('SIGALRM', self._on_alarm_exit)

    # systemctl stop发出信号后执行这个方法
    def _handle_term(self, signo, frame):
        self.sigcaught = signo
        self.running = False
        self.signal_handler.clear()

    def _handle_hup(self, signo, frame):
        self.sigcaught = signo
        self.running = False

    def _fast_exit(self, signo, frame):
        LOG.info('Caught SIGINT signal, instantaneous exiting')
        os._exit(1)

    def _on_alarm_exit(self, signo, frame):
        LOG.info('Graceful shutdown timeout exceeded, '
                 'instantaneous exiting')
        os._exit(1)

    def _pipe_watcher(self):
       	# 查看父进程是否死亡
        self.readpipe.read(1)
        LOG.info('Parent process has died unexpectedly, exiting')
        if self.launcher:
            self.launcher.stop()
        sys.exit(1)

    def _child_process_handle_signal(self):
		# 子启动器执行stop
        def _sigterm(*args):
            self.signal_handler.clear()
            self.launcher.stop()
		
        def _sighup(*args):
            self.signal_handler.clear()
            raise SignalExit(signal.SIGHUP)
        self.signal_handler.clear()
		# 为子进程添加信号处理方法
        self.signal_handler.add_handler('SIGTERM', _sigterm)
        self.signal_handler.add_handler('SIGHUP', _sighup)
        self.signal_handler.add_handler('SIGINT', self._fast_exit)

    def _child_wait_for_exit_or_signal(self, launcher):
        status = 0
        signo = 0

        try:
            # 等待子进程中的launcher里的任务执行完毕
            launcher.wait()
        except SignalExit as exc:
            # 检测到信号
            signame = self.signal_handler.signals_to_name[exc.signo]
            LOG.info('Child caught %s, handling', signame)
            # 设置信号
            status = exc.code
            signo = exc.signo
        except SystemExit as exc:
            launcher.stop()
            status = exc.code
        except BaseException:
            launcher.stop()
            LOG.exception('Unhandled exception')
            status = 2

        return status, signo

    def _child_process(self, service):
        # 子监听任务
        self._child_process_handle_signal()

        # Reopen the eventlet hub to make sure we don't share an epoll
        # fd with parent and/or siblings, which would be bad
        eventlet.hubs.use_hub()

        # Close write to ensure only parent has it open
        os.close(self.writepipe)
        # Create greenthread to watch for parent to close pipe
        eventlet.spawn_n(self._pipe_watcher)

        # Reseed random number generator
        random.seed()
		# 创建一个Launcher将Service注册进去，自动执行start方法
        launcher = Launcher(self.conf, restart_method=self.restart_method)
        launcher.launch_service(service)
        return launcher

    def _start_child(self, wrap):
        if len(wrap.forktimes) > wrap.workers:
            # Limit ourselves to one process a second (over the period of
            # number of workers * 1 second). This will allow workers to
            # start up quickly but ensure we don't fork off children that
            # die instantly too quickly.
            if time.time() - wrap.forktimes[0] < wrap.workers:
                LOG.info('Forking too fast, sleeping')
                time.sleep(1)

            wrap.forktimes.pop(0)

        wrap.forktimes.append(time.time())

        pid = os.fork()
        if pid == 0:
           	# fork失败了，则杀死之前fork的进程
            tpool.killall()
            self.launcher = self._child_process(wrap.service)
            while True:
                # 等待子进程接受信号，并做wait关闭
                self._child_process_handle_signal()
                status, signo = self._child_wait_for_exit_or_signal(
                    self.launcher)
                # 不是SIGHUP和守护进程，则不需要重启启动器，执行os._exit(status)
                if not _is_sighup_and_daemon(signo):
                    self.launcher.wait()
                    break
                # 重启启动器
                self.launcher.restart()
			# 强制退出
            os._exit(status)

        LOG.debug('Started child %d', pid)
		
        wrap.children.add(pid)
        self.children[pid] = wrap
		
        return pid

    def launch_service(self, service, workers=1):
        # 检查是否属于oslo_service.Service
        _check_service_base(service)
        wrap = ServiceWrapper(service, workers)

        if hasattr(gc, 'freeze'):
            gc.freeze()

        LOG.info('Starting %d workers', wrap.workers)
        # 如果发现workers大于service任务数，则再启动子进程，直到有workers个service任务执行
        while self.running and len(wrap.children) < wrap.workers:
            self._start_child(wrap)

    def _wait_child(self):
        try:
            # 查看pid，status
            pid, status = os.waitpid(0, os.WNOHANG)
            if not pid:
                return None
        except OSError as exc:
            if exc.errno not in (errno.EINTR, errno.ECHILD):
                raise
            return None

        if os.WIFSIGNALED(status):
            # 因为信号退出
            sig = os.WTERMSIG(status)
            LOG.info('Child %(pid)d killed by signal %(sig)d',
                     dict(pid=pid, sig=sig))
        else:
            # 使用stop方法正常退出
            code = os.WEXITSTATUS(status)
            LOG.info('Child %(pid)s exited with status %(code)d',
                     dict(pid=pid, code=code))

        if pid not in self.children:
            LOG.warning('pid %d not in child list', pid)
            return None

        wrap = self.children.pop(pid)
        wrap.children.remove(pid)
        # wrap==None则表示没有子进程退出
        return wrap

    # 重启service和_start_children相似，当running=True会一直循环
    def _respawn_children(self):
        while self.running:
            wrap = self._wait_child()
            if not wrap:
                # 为wrap空则表示没有进程退出，等待时间后进行下一次循环
                eventlet.greenthread.sleep(self.wait_interval)
                continue
            while self.running and len(wrap.children) < wrap.workers:
                self._start_child(wrap)

    def wait(self):
		# 通知守护线程，当前进程已经开始启动
        systemd.notify_once()
        if self.conf.log_options:
            LOG.debug('Full set of CONF:')
            self.conf.log_opt_values(LOG, logging.DEBUG)

        try:
            while True:
                # 信号处理注册
                self.handle_signal()
                # 重启，但是子进程如果是存活的，此方法不会做什么操作，进程会卡在这个方法的循环内
                self._respawn_children()
                # 收到非SIGTERM，SIGHUP信号，则直接退出不作任何处理
                if not self.sigcaught:
                    return
				# SIGTERM和SIGHUP需要停止子进程
                signame = self.signal_handler.signals_to_name[self.sigcaught]
                LOG.info('Caught %s, stopping children', signame)
                # 如果不是SIGHUP或daemon，则break
                if not _is_sighup_and_daemon(self.sigcaught):
                    break
                    
                child_signal = signal.SIGTERM
                if self.restart_method == 'reload':
                    # 重新加载配置项
                    self.conf.reload_config_files()
                elif self.restart_method == 'mutate':
                    # 在原有配置上进行修改，并调用回调
                    self.conf.mutate_config_files()
                    # 设置关闭信号为SIGHUP，常用于重新加载配置
                    child_signal = signal.SIGHUP
                for service in set([wrap.service for wrap in self.children.values()]):
                    # 修改配置后需要执行的操作
                    """
                    def reset(self):
                        self.manager.reset()
                        context.CELL_CACHE = {}
                    """
                    service.reset()
				# 停止children
                for pid in self.children:
                    os.kill(pid, child_signal)
				# 重启
                self.running = True
                # 清空信号
                self.sigcaught = None
        except eventlet.greenlet.GreenletExit:
            LOG.info("Wait called after thread killed. Cleaning up.")
        # 能走到这里说明有GreenletExit或者收到了非SIGHUP信号或者当前进程为守护进程，
        # 设置优雅关闭的超时时间
        if (self.conf.graceful_shutdown_timeout and
                self.signal_handler.is_signal_supported('SIGALRM')):
            signal.alarm(self.conf.graceful_shutdown_timeout)
		
        self.stop()

    def stop(self):
        # 启动器不再执行的标记，则wait()方法中的self._respawn_children()会跳出
        self.running = False

        LOG.debug("Stop services.")
        for service in set(
                [wrap.service for wrap in self.children.values()]):
            # 调用每个service的stop()
            service.stop()
            
		# 使用os.kill杀死子进程，在逻辑中应该删除这部分代码
        LOG.debug("Killing children.")
        for pid in self.children:
            try:
                os.kill(pid, signal.SIGTERM)
            except OSError as exc:
                if exc.errno != errno.ESRCH:
                    raise

        #  等待子进程的pid为0
        if self.children:
            LOG.info('Waiting on %d children to exit', len(self.children))
            while self.children:
                self._wait_child()
        # 主进程结束的日志
        LOG.info("Process launcher has stop.")
\`\`\`

在主进程启动的时候，会为每一个\`Service\`创建一个子进程执行，如果所有进程都正常启动并\`wait\`住，则主进程会在\`self._respawn_children()\`方法里循环，当执行\`systemctl stop\`停止启动器时，发送\`SIGTERM\`给主进程，主进程接受到之后，会在\`if not _is_sighup_and_daemon(self.sigcaught)\`判断内\`break\`，之后设置优雅关闭的超时时间，执行\`self.stop()\`

\`self.stop()\`执行\`services\`里每个\`service\`的\`stop\`方法，并检查子进程是否结束，等到所有子进程退出后，打印日志
`},{title:"PCI直通",headers:[{level:2,title:"PCI直通示例",slug:"pci直通示例",link:"#pci直通示例",children:[{level:3,title:"计算节点准备",slug:"计算节点准备",link:"#计算节点准备",children:[]},{level:3,title:"配置nova-compute",slug:"配置nova-compute",link:"#配置nova-compute",children:[]},{level:3,title:"配置nova-scheduler",slug:"配置nova-scheduler",link:"#配置nova-scheduler",children:[]},{level:3,title:"配置nova-api",slug:"配置nova-api",link:"#配置nova-api",children:[]},{level:3,title:"配置 Flavor",slug:"配置-flavor",link:"#配置-flavor",children:[]},{level:3,title:"高级配置",slug:"高级配置",link:"#高级配置",children:[]},{level:3,title:"验证PCI直通",slug:"验证pci直通",link:"#验证pci直通",children:[]},{level:3,title:"常见问题解决",slug:"常见问题解决",link:"#常见问题解决",children:[]}]},{level:2,title:"PciPassthroughFilter",slug:"pcipassthroughfilter",link:"#pcipassthroughfilter",children:[]}],path:"/openstack/nova/pci_passthrough.html",pathLocale:"/",extraFields:`---
title: PCI直通
star: true
icon: page
category:
  - 设备PCI直通
  - 随记

tag: 
  - PCI passthrough
---



## PCI直通示例
一些PCI设备提供独占设备能力和共享能力，在使用SR-IOV时，物理设备会被虚拟化为多个PCI设备，虚拟化设备可以分配给不同的主机，在PCI直通的情况下，完整的物理设备只会分配给一个主机。

### 计算节点准备

- 硬件要求：
  - BIOS 启用 VT-d（Intel）或 AMD-Vi（AMD）。
  - Linux 内核启用 IOMMU：添加\`intel_iommu=on\`或\`amd_iommu=on\`到内核参数。

- 验证命令：

  \`\`\`bash
  dmesg | grep -i iommu  # 检查 IOMMU 是否启用
  lspci -v               # 查看 PCI 设备信息及地址（如 0000:41:00.0）
  \`\`\`

### 配置nova-compute

-  指定 PCI 设备，定义设备别名：

  \`\`\`ini
  [pci]
  alias = { "vendor_id":"8086", "product_id":"154d", "device_type":"type-PF", "name":"a1" }
  passthrough_whitelist = {"vendor_id": "8086", "product_id": "154d"}
  \`\`\`

  - \`device_type\`必须指定为\`type-PF\`（SR-IOV 父设备）、\`type-VF\`（子设备）或\`type-PCI\`（非 SR-IOV 设备）。

### 配置nova-scheduler

- 启用 \`PciPassthroughFilter\` 过滤器：

  \`\`\`ini
  [filter_scheduler]
  enabled_filters = ...,PciPassthroughFilter
  \`\`\`

### 配置nova-api

- 控制器节点需同步 \`pci.alias\` 配置，与计算节点一致：

  \`\`\`ini
  [pci]
  alias = { "vendor_id":"8086", "product_id":"154d", "device_type":"type-PF", "name":"a1" }
  \`\`\`

### 配置 Flavor

- 通过 Flavor 请求 PCI 设备（示例请求 2 个 \`a1\` 设备）：

  \`\`\`ini
  openstack flavor set m1.large --property "pci_passthrough:alias"="a1:2"
  \`\`\`


### 高级配置

##### PCI-NUMA 亲和策略

- 策略选项：
  - \`required\`：设备必须与实例的 NUMA 节点严格绑定
  - \`socket\`：设备与实例在同一CPU插槽即可
  - \`preferred\`：尽量亲和，但不强制
  - \`legacy\`：默认策略，兼容旧版本行为

- 配置示例：

  \`\`\`ini
  openstack flavor set $FLAVOR --property pci_numa_affinity_policy=preferred
  \`\`\`

### 验证PCI直通

- 登录实例

通过SSH或控制台登录实例

\`\`\`bash
openstack console url show VM-with-PCI  # 获取控制台 URL
\`\`\`

- 检查PCI设备

\`\`\`bash
lspci  # 列出所有 PCI 设备
\`\`\`

- 预期输出

\`\`\`bash
00:04.0 Ethernet controller: Intel Corporation 82599ES 10-Gigabit SFI/SFP+ Network Connection (rev 01)
\`\`\`

### 常见问题解决

#### 问题 1：实例启动失败

- 原因：PCI 设备未正确配置或资源不足。

- 解决：

  \`\`\`bash
  nova-status upgrade check  # 检查 Nova 服务状态
  openstack hypervisor stats show  # 查看计算节点 PCI 资源池
  \`\`\`

#### 问题 2：设备未出现在实例中

- 原因：驱动未正确绑定或 IOMMU 未启用。

- 解决：

  \`\`\`bash
  dmesg | grep -i vfio  # 检查 VFIO 驱动绑定状态
  cat /proc/cmdline     # 确认内核参数包含 \`intel_iommu=on\`
  \`\`\`

## PciPassthroughFilter

在\`nova.conf\`配置的过滤器的作用：在创建虚拟机时，通过scheduler顺序执行配置的\`filter\`中的\`host_passes\`过滤符合条件的host并返回

\`\`\`python
class PciPassthroughFilter(filters.BaseHostFilter, filters.CandidateFilterMixin):
    # 过滤器检查主机是否有足够的PCI设备满足虚拟机的创建请求
	# BaseHostFilter基础过滤器，用于调度时执行内部的host_passes方法
    # CandidateFilterMixin提供候选资源过滤的功能，支持复杂的资源需求匹配
  	# 只会在创建的时候执行，重构时不执行
    RUN_ON_REBUILD = False
	# host_state：主机的当前状态（如资源使用情况、PCI设备信息）
    # spec_obj：虚拟机的规格请求（如PCI设备需求）
    def host_passes(self, host_state, spec_obj):
        pci_requests = spec_obj.pci_requests
        # 如果没有PCI请求，直接放行
        if not pci_requests or not pci_requests.requests:
            return True
		# 如果主机没有PCI设备信息，则无法满足任何的PCI请求，不符合要求，返回False
        if not host_state.pci_stats:
            LOG.debug("%(host_state)s doesn't have the required PCI devices"
                      " (%(requests)s)",
                      {'host_state': host_state, 'requests': pci_requests})
            return False
		# 检查每个候选是否满足PCI请求
        good_candidates = self.filter_candidates(
            host_state,
           
            """
            support_requests比对主机的PCI设备与虚拟机请求（例如数量、vendor_id、product_id）
            provider_mapping时一个字典，用来记录资源提供者之间的映射关系,例如
            {
                # 虚拟功能（VF）的 UUID -> 对应的物理功能（PF）的 UUID
                "vf_uuid_1": "pf_uuid_123",
                "vf_uuid_2": "pf_uuid_123",
                ...
            }
            """ 
            lambda candidate: host_state.pci_stats.support_requests(
                pci_requests.requests, provider_mapping=candidate["mappings"]
            ),
        )
		# 没有符合要求的PCI设备
        if not good_candidates:
            LOG.debug("%(host_state)s doesn't have the required PCI devices"
                      " (%(requests)s)",
                      {'host_state': host_state, 'requests': pci_requests})
            return False

        return True
\`\`\`
`},{title:"Service",headers:[{level:2,title:"nova.service.Service",slug:"nova-service-service",link:"#nova-service-service",children:[{level:3,title:"create",slug:"create",link:"#create",children:[]},{level:3,title:"init",slug:"init",link:"#init",children:[]},{level:3,title:"start、stop",slug:"start、stop",link:"#start、stop",children:[]},{level:3,title:"总结",slug:"总结",link:"#总结",children:[]}]},{level:2,title:"nova.service.WSGIService",slug:"nova-service-wsgiservice",link:"#nova-service-wsgiservice",children:[{level:3,title:"WSGIService",slug:"wsgiservice",link:"#wsgiservice",children:[]},{level:3,title:"eventlet.wsgi.server",slug:"eventlet-wsgi-server",link:"#eventlet-wsgi-server",children:[]},{level:3,title:"总结",slug:"总结-1",link:"#总结-1",children:[]}]}],path:"/openstack/nova/service.html",pathLocale:"/",extraFields:`---
title: Service
star: true
icon: page
category:
  - openstack中的Service
  - 随记
  - oslo
tag: 
  - WSGIService
  - oslo_messaging
  - wsgi
---


## nova.service.Service

主要用于启动rpc服务，启动定时任务

### create

以\`nova.service.Service.create\`方法为例：

\`\`\`python
# 父类为oslo_service.Service

@classmethod
def create(cls, host=None, binary=None, topic=None, manager=None,
           report_interval=None, periodic_enable=None,
           periodic_fuzzy_delay=None, periodic_interval_max=None):
 	  # 相关配置检查
    if not host:
        host = CONF.host
    if not binary:
        binary = os.path.basename(sys.argv[0])
    if not topic:
        topic = binary.rpartition('nova-')[2]
    if not manager:
        # 为当前的wsgi服务配置对应的manager，manager中用来启动定时任务，或暴露endpoint服务端点
        manager = SERVICE_MANAGERS.get(binary)
    if report_interval is None:
        report_interval = CONF.report_interval
    if periodic_enable is None:
        periodic_enable = CONF.periodic_enable
    if periodic_fuzzy_delay is None:
        periodic_fuzzy_delay = CONF.periodic_fuzzy_delay

    debugger.init()
	  # 调用超类的构造方法
    service_obj = cls(host, binary, topic, manager,
                      report_interval=report_interval,
                      periodic_enable=periodic_enable,
                      periodic_fuzzy_delay=periodic_fuzzy_delay,
                      periodic_interval_max=periodic_interval_max)
    try:
        utils.raise_if_old_compute()
    except exception.TooOldComputeService as e:
        if CONF.workarounds.disable_compute_service_check_for_ffu:
            LOG.warning(str(e))
        else:
            raise

    return service_obj
\`\`\`

调用上述方法只后会返回一个\`nova.service.Service\`对象

### init

\`nova.service.Service\`对象构造方法：

\`\`\`python
def __init__(self, host, binary, topic, manager, report_interval=None,
             periodic_enable=None, periodic_fuzzy_delay=None,
             periodic_interval_max=None, *args, **kwargs):
    super(Service, self).__init__()
    self.host = host
    self.binary = binary
    self.topic = topic
    self.manager_class_name = manager
    # 似乎是选择RPC服务的驱动，例如以rabbitmq作为RPC服务的通信组件
    self.servicegroup_api = servicegroup.API()
    # 以manager的名字获取对应的类
    manager_class = importutils.import_class(self.manager_class_name)
    # 创建api的TARGET
    if objects_base.NovaObject.indirection_api:
        # API()的init()方法展示了创建端点的过程
        conductor_api = conductor.API()
        conductor_api.wait_until_ready(context.get_admin_context())
    self.manager = manager_class(host=self.host, *args, **kwargs)
    self.rpcserver = None
    self.report_interval = report_interval
    # 是否允许定时任务启动
    self.periodic_enable = periodic_enable
    self.periodic_fuzzy_delay = periodic_fuzzy_delay
    self.periodic_interval_max = periodic_interval_max
    self.saved_args, self.saved_kwargs = args, kwargs
    self.backdoor_port = None
    setup_profiler(binary, self.host)
\`\`\`

\`conductor_api = conductor.API()\`中\`init\`调用了\`BaseAPI\`，主要用于创建调用\`rpcserver\`的\`client\`，代码如下：

\`\`\`python
def __init__(self, topic):
    super(BaseAPI, self).__init__()
    # 使用oslo_message组件进行rpc通信，Target类中包含属性fanout表示是否广播，server表示一个Target下某个精确的server，如果不指定server，则轮训发送到这个rpcserver
    下的一个server，
    target = messaging.Target(topic=topic,
                              namespace=_NAMESPACE,
                              version='1.0')
    version_cap = self.VERSION_ALIASES.get(CONF.upgrade_levels.baseapi,
                                           CONF.upgrade_levels.baseapi)
    # 根据Target获取到调用rpcserver的client
    self.client = rpc.get_client(target, version_cap=version_cap)
\`\`\`

### start、stop

\`\`\`python
def start(self):
    context.CELL_CACHE = {}

    verstr = version.version_string_with_package()
    LOG.info('Starting %(topic)s node (version %(version)s)',
              {'topic': self.topic, 'version': verstr})
    self.basic_config_check()
    ctxt = context.get_admin_context()
    # 获取服务在数据库中的记录（nova中server的部分数据会保存在数据库中）
    self.service_ref = objects.Service.get_by_host_and_binary(
        ctxt, self.host, self.binary)
    # nova.manager.Manager中没有做任何操作，默认为pass
    self.manager.init_host(self.service_ref)
    self.model_disconnected = False
    if self.service_ref:
        # 更新数据库中server的version
        _update_service_ref(self.service_ref)

    else:
        try:
            # 数据库中创建server
            self.service_ref = _create_service_ref(self, ctxt)
        except (exception.ServiceTopicExists,
                exception.ServiceBinaryExists):
            # NOTE(danms): If we race to create a record with a sibling
            # worker, don't fail here.
            self.service_ref = objects.Service.get_by_host_and_binary(
                ctxt, self.host, self.binary)
	  # manager中的前置处理，默认为pass
    self.manager.pre_start_hook(self.service_ref)
    # 设置后门端口，调试作用？
    if self.backdoor_port is not None:
        self.manager.backdoor_port = self.backdoor_port

    LOG.debug("Creating RPC server for service %s", self.topic)
    # 使用oslo_messaging创建Target，必选topic和server，注意此处是创建rpcserver而不是client
    target = messaging.Target(topic=self.topic, server=self.host)
    # 服务的端点，可以添加多个类，暴露其中的public方法
    endpoints = [
        self.manager,
        baserpc.BaseRPCAPI(self.manager.service_name, self.backdoor_port)
    ]
    endpoints.extend(self.manager.additional_endpoints)

    serializer = objects_base.NovaObjectSerializer()
	
    """
    # 使用消息队列创建rpcserver
    return messaging.get_rpc_server(TRANSPORT,
                                    target,
                                    endpoints,
                                    executor='eventlet',
                                    serializer=serializer,
                                    access_policy=access_policy)
    """
    self.rpcserver = rpc.get_server(target, endpoints, serializer)
    self.rpcserver.start()
    # manager后处理
    self.manager.post_start_hook()

    LOG.debug("Join ServiceGroup membership for this service %s",
              self.topic)
    # Add service to the ServiceGroup membership group.
    self.servicegroup_api.join(self.host, self.topic, self)

    if self.periodic_enable:
        if self.periodic_fuzzy_delay:
            initial_delay = random.randint(0, self.periodic_fuzzy_delay)
        else:
            initial_delay = None
		# 往线程池中添加定时任务，self.periodic_tasks即执行manager中的periodic_tasks，将添加了定时任务注解的方法以设置的spacing时间间隔周期执行方法
        self.tg.add_dynamic_timer(self.periodic_tasks,
                                 initial_delay=initial_delay,
                                 periodic_interval_max=
                                    self.periodic_interval_max)
        
    def periodic_tasks(self, raise_on_error=False):
        """Tasks to be run at a periodic interval."""
        ctxt = context.get_admin_context()
        return self.manager.periodic_tasks(ctxt, raise_on_error=raise_on_error)
    
    def stop(self):
        """stop the service and clean up."""
        try:
            # 关闭RPC监听，线程池shutdown(wait=True)
            self.rpcserver.stop()
            self.rpcserver.wait()
        except Exception:
            pass

        try:
            self.manager.cleanup_host()
        except Exception:
            LOG.exception('Service error occurred during cleanup_host')
            pass

        super(Service, self).stop()
\`\`\`

\`oslo_messaging\`中使用RabbitMQ作为消息队列，其中rpc连接数最大值默认为\`30\`，每次进行\`call\`调用都会生成一个连接进行监听返回值，如果在短时间内调用多次\`call\`但是没有获取到返回值，会导致连接被占用完，后续的\`call\`会被阻塞直到超过\`timeout\`返回超时错误，如果设置了\`call_monitor_timeout\`则会创建定时器查询返回值，超时则抛出\`timeout\`异常

### 总结

\`Service\`内通过设置\`endpoint\`展示了对外的\`remote\`方法，\`target\`中表明了RPC调用的\`routingKey\`，通过\`target\`和\`endpoint\`就可以注册一个\`rpcserver\`

在\`Client\`端，只需要通过相同配置的\`target\`即可获取对应到\`rpcserver\`的\`client\`，它是生产者，\`client\`发送的请求发送给交换机只后，根据\`routingKey\`找到对应的队列，队列注册各种\`topic\`类型的\`Listener\`处理请求，消费者是\`rpcserver\`



##  nova.service.WSGIService

### WSGIService

\`WSGIService\`中使用了\`nova.wsgi.Server\`，\`start\`方法：

\`\`\`python
def start(self):
	# 复制原始套接字对象，原对象通过self._socket = eventlet.listen(bind_addr, family, backlog=backlog)获得
    dup_socket = self._socket.dup()
    
    # 允许重用本地端口和地址
    dup_socket.setsockopt(socket.SOL_SOCKET,
                          socket.SO_REUSEADDR, 1)
    
    # keepAlive
    dup_socket.setsockopt(socket.SOL_SOCKET,
                          socket.SO_KEEPALIVE, 1)

    # 设置TCP连接的存活时间
    if hasattr(socket, 'TCP_KEEPIDLE'):
        dup_socket.setsockopt(socket.IPPROTO_TCP,
                              socket.TCP_KEEPIDLE,
                              CONF.wsgi.tcp_keepidle)

    # 检查SSL配置
    if self._use_ssl:
        try:
            ca_file = CONF.wsgi.ssl_ca_file
            cert_file = CONF.wsgi.ssl_cert_file
            key_file = CONF.wsgi.ssl_key_file

            if cert_file and not os.path.exists(cert_file):
                raise RuntimeError(
                      _("Unable to find cert_file : %s") % cert_file)

            if ca_file and not os.path.exists(ca_file):
                raise RuntimeError(
                      _("Unable to find ca_file : %s") % ca_file)

            if key_file and not os.path.exists(key_file):
                raise RuntimeError(
                      _("Unable to find key_file : %s") % key_file)

            if self._use_ssl and (not cert_file or not key_file):
                raise RuntimeError(
                      _("When running server in SSL mode, you must "
                        "specify both a cert_file and key_file "
                        "option value in your configuration file"))
            ssl_kwargs = {
                'server_side': True,
                'certfile': cert_file,
                'keyfile': key_file,
                'cert_reqs': ssl.CERT_NONE,
            }

            if CONF.wsgi.ssl_ca_file:
                ssl_kwargs['ca_certs'] = ca_file
                ssl_kwargs['cert_reqs'] = ssl.CERT_REQUIRED
			# 将套接字包装成支持SSL的套接字
            dup_socket = eventlet.wrap_ssl(dup_socket,
                                           **ssl_kwargs)
        except Exception:
            with excutils.save_and_reraise_exception():
                LOG.error(
                    "Failed to start %(name)s on %(host)s:%(port)s with "
                    "SSL support",
                    {'name': self.name, 'host': self.host,
                     'port': self.port})
	# 设置wsgi初始化的参数
    wsgi_kwargs = {
        'func': eventlet.wsgi.server,
        'sock': dup_socket,
        'site': self.app,
        'protocol': self._protocol,
        'custom_pool': self._pool,
        'log': self._logger,
        'log_format': CONF.wsgi.wsgi_log_format,
        'debug': False,
        'keepalive': CONF.wsgi.keep_alive,
        'socket_timeout': self.client_socket_timeout
        }

    if self._max_url_len:
        wsgi_kwargs['url_length_limit'] = self._max_url_len
	# 启动WSGI服务器，本质是执行参数中的 func: eventlet.wsgi.server方法
    self._server = utils.spawn(**wsgi_kwargs)
\`\`\`

\`eventlet.wsgi.server\`中创建了\`WSGIServer\`并监听

### eventlet.wsgi.server

\`\`\`python
def server(sock, site,
           log=None,
           environ=None,
           max_size=None,
           max_http_version=DEFAULT_MAX_HTTP_VERSION,
           protocol=HttpProtocol,
           server_event=None,
           minimum_chunk_size=None,
           log_x_forwarded_for=True,
           custom_pool=None,
           keepalive=True,
           log_output=True,
           log_format=DEFAULT_LOG_FORMAT,
           url_length_limit=MAX_REQUEST_LINE,
           debug=True,
           socket_timeout=None,
           capitalize_response_headers=True):
	# 创建HTTPServer对象
    serv = Server(
        sock, sock.getsockname(),
        site, log,
        environ=environ,
        max_http_version=max_http_version,
        protocol=protocol,
        minimum_chunk_size=minimum_chunk_size,
        log_x_forwarded_for=log_x_forwarded_for,
        keepalive=keepalive,
        log_output=log_output,
        log_format=log_format,
        url_length_limit=url_length_limit,
        debug=debug,
        socket_timeout=socket_timeout,
        capitalize_response_headers=capitalize_response_headers,
    )
    # 提示配置将来会被弃用，并在journalctl中打印
    if server_event is not None:
        warnings.warn(
            'eventlet.wsgi.Server() server_event kwarg is deprecated and will be removed soon',
            DeprecationWarning, stacklevel=2)
        server_event.send(serv)
    # 设置一些默认参数
    if max_size is None:
        max_size = DEFAULT_MAX_SIMULTANEOUS_REQUESTS
    if custom_pool is not None:
        pool = custom_pool
    else:
        # 使用绿线程执行HTTP请求
        pool = eventlet.GreenPool(max_size)
	# 检查线程池中是否有spawn和waitall方法，用于后续的优雅关闭
    if not (hasattr(pool, 'spawn') and hasattr(pool, 'waitall')):
        raise AttributeError('''\\
    eventlet.wsgi.Server pool must provide methods: \`spawn\`, \`waitall\`.
    If unsure, use eventlet.GreenPool.''')

    connections = {}
	
    # 清理连接操作
    def _clean_connection(_, conn):
        connections.pop(conn[0], None)
        conn[2] = STATE_CLOSE
        greenio.shutdown_safe(conn[1])
        conn[1].close()

    try:
        # journalctl中打印服务启动
        serv.log.info('({}) wsgi starting up on {}'.format(serv.pid, socket_repr(sock)))
        # 全局变量为True才会监听
        while is_accepting:
            try:
                # 接受请求
                client_socket, client_addr = sock.accept()
                # 设置超时时间
                client_socket.settimeout(serv.socket_timeout)
                # journalctl中打印
                serv.log.debug('({}) accepted {!r}'.format(serv.pid, client_addr))
                # 添加到connections字典中
                connections[client_addr] = connection = [client_addr, client_socket, STATE_IDLE]
                # 使用线程池执行process_request，并通过link设置线程执行完毕的回调函数，清理connection
                (pool.spawn(serv.process_request, connection)
                    .link(_clean_connection, connection))
            except ACCEPT_EXCEPTIONS as e:
                if support.get_errno(e) not in ACCEPT_ERRNO:
                    raise
                else:
                    break
            except (KeyboardInterrupt, SystemExit):
                serv.log.info('wsgi exiting')
                break
    finally:
        # 上方循环break或者全局变量is_accepting被设置为False，则停止请求监听
        for cs in connections.values():
            prev_state = cs[2]
            # 设置连接状态为CLOSE
            cs[2] = STATE_CLOSE
            # 如果状态为空闲，则调用安全关闭，
            if prev_state == STATE_IDLE:
                greenio.shutdown_safe(cs[1])
        # 等待线程池中的所有任务执行完毕
        pool.waitall()
        # journalctl记录wsgi退出，并记录此时是否正在接受新的连接
        serv.log.info('({}) wsgi exited, is_accepting={}'.format(serv.pid, is_accepting))
        try:
            #关闭套接字
            sock.close()
        except OSError as e:
            if support.get_errno(e) not in BROKEN_SOCK:
                traceback.print_exc()
\`\`\`

### 总结

可以发现，决定是否接受新的请求取决于\`is_accepting\`，所以在使用\`eventlet.wsgi.server\`创建HTTP监听服务时，可以在\`stop\`执行时，将\`is_accepting=False\`，此时\`WSGIServer\`不会再接受新的请求，并进行优雅关闭

`},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:"404 Not Found"},{title:"分类",headers:[],path:"/category/",pathLocale:"/",extraFields:""},{title:"openstack 分类",headers:[],path:"/category/openstack/",pathLocale:"/",extraFields:""},{title:"openstack组件 分类",headers:[],path:"/category/openstack%E7%BB%84%E4%BB%B6/",pathLocale:"/",extraFields:""},{title:"随记 分类",headers:[],path:"/category/%E9%9A%8F%E8%AE%B0/",pathLocale:"/",extraFields:""},{title:"oslo_messaging 分类",headers:[],path:"/category/oslo-messaging/",pathLocale:"/",extraFields:""},{title:"neutron 分类",headers:[],path:"/category/neutron/",pathLocale:"/",extraFields:""},{title:"openstack中的Service 分类",headers:[],path:"/category/openstack%E4%B8%AD%E7%9A%84service/",pathLocale:"/",extraFields:""},{title:"oslo 分类",headers:[],path:"/category/oslo/",pathLocale:"/",extraFields:""},{title:"cinder 分类",headers:[],path:"/category/cinder/",pathLocale:"/",extraFields:""},{title:"nova 分类",headers:[],path:"/category/nova/",pathLocale:"/",extraFields:""},{title:"openstack中的Launcher 分类",headers:[],path:"/category/openstack%E4%B8%AD%E7%9A%84launcher/",pathLocale:"/",extraFields:""},{title:"设备PCI直通 分类",headers:[],path:"/category/%E8%AE%BE%E5%A4%87pci%E7%9B%B4%E9%80%9A/",pathLocale:"/",extraFields:""},{title:"标签",headers:[],path:"/tag/",pathLocale:"/",extraFields:""},{title:"标签: openstack",headers:[],path:"/tag/openstack/",pathLocale:"/",extraFields:""},{title:"标签: oslo_service",headers:[],path:"/tag/oslo-service/",pathLocale:"/",extraFields:""},{title:"标签: Transport",headers:[],path:"/tag/transport/",pathLocale:"/",extraFields:""},{title:"标签: RPC",headers:[],path:"/tag/rpc/",pathLocale:"/",extraFields:""},{title:"标签: oslo_messaging",headers:[],path:"/tag/oslo-messaging/",pathLocale:"/",extraFields:""},{title:"标签: neutron",headers:[],path:"/tag/neutron/",pathLocale:"/",extraFields:""},{title:"标签: WSGIService",headers:[],path:"/tag/wsgiservice/",pathLocale:"/",extraFields:""},{title:"标签: wsgi",headers:[],path:"/tag/wsgi/",pathLocale:"/",extraFields:""},{title:"标签: cinder",headers:[],path:"/tag/cinder/",pathLocale:"/",extraFields:""},{title:"标签: nova",headers:[],path:"/tag/nova/",pathLocale:"/",extraFields:""},{title:"标签: ServiceLauncher",headers:[],path:"/tag/servicelauncher/",pathLocale:"/",extraFields:""},{title:"标签: Launcher",headers:[],path:"/tag/launcher/",pathLocale:"/",extraFields:""},{title:"标签: ProcessLauncher",headers:[],path:"/tag/processlauncher/",pathLocale:"/",extraFields:""},{title:"标签: PCI passthrough",headers:[],path:"/tag/pci-passthrough/",pathLocale:"/",extraFields:""},{title:"文章",headers:[],path:"/article/",pathLocale:"/",extraFields:""},{title:"星标",headers:[],path:"/star/",pathLocale:"/",extraFields:""},{title:"时间轴",headers:[],path:"/timeline/",pathLocale:"/",extraFields:""}],ty=e=>e instanceof Element?document.activeElement===e&&(["TEXTAREA","SELECT","INPUT"].includes(e.tagName)||e.hasAttribute("contenteditable")):!1,ny=(e,t)=>t.some(n=>{if(Te(n))return n===e.key;const{key:s,ctrl:i=!1,shift:r=!1,alt:a=!1}=n;return s===e.key&&i===e.ctrlKey&&r===e.shiftKey&&a===e.altKey}),sy=/[^\x00-\x7F]/,iy=e=>e.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),tu=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),nu=(e,t)=>{const n=t.join(" "),s=iy(e);if(sy.test(e))return s.some(r=>n.toLowerCase().includes(r));const i=e.endsWith(" ");return new RegExp(`${s.map((r,a)=>s.length===a+1&&!i?`(?=.*\\b${tu(r)})`:`(?=.*\\b${tu(r)}\\b)`).join("")}.+`,"gi").test(n)},ry=({input:e,hotKeys:t})=>{if(t.value.length===0)return;const n=s=>{e.value&&ny(s,t.value)&&!ty(s.target)&&(s.preventDefault(),e.value.focus())};Ie(()=>{document.addEventListener("keydown",n)}),Xi(()=>{document.removeEventListener("keydown",n)})},ay=ee(ey),ly=()=>ay,oy=({searchIndex:e,routeLocale:t,query:n,maxSuggestions:s})=>{const i=A(()=>e.value.filter(r=>r.pathLocale===t.value));return A(()=>{const r=n.value.trim().toLowerCase();if(!r)return[];const a=[],l=(o,u)=>{nu(r,[u.title])&&a.push({link:`${o.path}#${u.slug}`,title:o.title,header:u.title});for(const p of u.children){if(a.length>=s.value)return;l(o,p)}};for(const o of i.value){if(a.length>=s.value)break;if(nu(r,[o.title,...o.extraFields])){a.push({link:o.path,title:o.title});continue}for(const u of o.headers){if(a.length>=s.value)break;l(o,u)}}return a})},cy=e=>{const t=ee(0);return{focusIndex:t,focusNext:()=>{t.value<e.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?t.value-=1:t.value=e.value.length-1}}},uy=z({name:"SearchBox",props:{locales:{type:Object,default:()=>({})},hotKeys:{type:Array,default:()=>[]},maxSuggestions:{type:Number,default:5}},setup(e){const{locales:t,hotKeys:n,maxSuggestions:s}=Qh(e),i=Jt(),r=tt(),a=ly(),l=ee(null),o=ee(!1),u=ee(""),p=A(()=>t.value[r.value]??{}),d=oy({searchIndex:a,routeLocale:r,query:u,maxSuggestions:s}),{focusIndex:f,focusNext:h,focusPrev:m}=cy(d);ry({input:l,hotKeys:n});const _=A(()=>o.value&&!!d.value.length),b=()=>{_.value&&m()},y=()=>{_.value&&h()},E=g=>{if(!_.value)return;const w=d.value[g];w&&i.push(w.link).then(()=>{u.value="",f.value=0})};return()=>c("form",{class:"search-box",role:"search"},[c("input",{ref:l,type:"search",placeholder:p.value.placeholder,autocomplete:"off",spellcheck:!1,value:u.value,onFocus:()=>{o.value=!0},onBlur:()=>{o.value=!1},onInput:g=>{u.value=g.target.value},onKeydown:g=>{switch(g.key){case"ArrowUp":{b();break}case"ArrowDown":{y();break}case"Enter":{g.preventDefault(),E(f.value);break}}}}),_.value&&c("ul",{class:"suggestions",onMouseleave:()=>{f.value=-1}},d.value.map(({link:g,title:w,header:P},M)=>c("li",{class:["suggestion",{focus:f.value===M}],onMouseenter:()=>{f.value=M},onMousedown:()=>{E(M)}},c("a",{href:g,onClick:R=>{R.preventDefault()}},[c("span",{class:"page-title"},w),P&&c("span",{class:"page-header"},`> ${P}`)]))))])}});var py=["s","/"],dy={};const fy=dy,hy=py,gy=5;var vy=Rt({enhance({app:e}){e.component("SearchBox",t=>c(uy,{locales:fy,hotKeys:hy,maxSuggestions:gy,...t}))}});const my=Object.freeze(Object.defineProperty({__proto__:null,default:vy},Symbol.toStringTag,{value:"Module"})),Ei=[Ym,Xm,D_,V_,Y_,e0,l0,k3,T3,O3,I3,L3,J3,r4,Zk,my].map(e=>e.default).filter(Boolean),_y=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["meta",{"name":"robots","content":"all"}],["meta",{"http-equiv":"Pragma","content":"no-cache"}],["meta",{"http-equiv":"Expires","content":"0"}],["link",{"rel":"icon","href":"/assets/icon/favicon.ico"}]],"locales":{"/":{"lang":"zh-CN","title":"Zzz","description":"Zzz"}}}');var Ss=He(_y),ky=sm,yy=()=>{const e=Nm({history:ky(Ga("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(t,n,s)=>s||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{if(t.path!==n.path||n===Ht){const s=yt(t.fullPath);if(s.path!==t.fullPath)return s.path;const i=await s.loader();t.meta={...s.meta,_pageChunk:i}}else t.path===n.path&&(t.meta=n.meta)}),e},by=e=>{e.component("ClientOnly",Yp),e.component("Content",Xp),e.component("RouteLink",Ve)},Ay=(e,t,n)=>{const s=A(()=>t.currentRoute.value.path),i=Eu((b,y)=>({get(){return b(),t.currentRoute.value.meta._pageChunk},set(E){t.currentRoute.value.meta._pageChunk=E,y()}})),r=A(()=>En.resolveLayouts(n)),a=A(()=>En.resolveRouteLocale(Ss.value.locales,s.value)),l=A(()=>En.resolveSiteLocaleData(Ss.value,a.value)),o=A(()=>i.value.comp),u=A(()=>i.value.data),p=A(()=>u.value.frontmatter),d=A(()=>En.resolvePageHeadTitle(u.value,l.value)),f=A(()=>En.resolvePageHead(d.value,p.value,l.value)),h=A(()=>En.resolvePageLang(u.value,l.value)),m=A(()=>En.resolvePageLayout(u.value,r.value)),_={layouts:r,pageData:u,pageComponent:o,pageFrontmatter:p,pageHead:f,pageHeadTitle:d,pageLang:h,pageLayout:m,redirects:ta,routeLocale:a,routePath:s,routes:Yn,siteData:Ss,siteLocaleData:l};return e.provide(Wa,_),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>p.value},$head:{get:()=>f.value},$headTitle:{get:()=>d.value},$lang:{get:()=>h.value},$page:{get:()=>u.value},$routeLocale:{get:()=>a.value},$site:{get:()=>Ss.value},$siteLocale:{get:()=>l.value},$withBase:{get:()=>we}}),_},Ey=([e,t,n=""])=>{const s=Object.entries(t).map(([l,o])=>Te(o)?`[${l}=${JSON.stringify(o)}]`:o?`[${l}]`:"").join(""),i=`head > ${e}${s}`;return Array.from(document.querySelectorAll(i)).find(l=>l.innerText===n)??null},wy=([e,t,n])=>{if(!Te(e))return null;const s=document.createElement(e);return Ji(t)&&Object.entries(t).forEach(([i,r])=>{Te(r)?s.setAttribute(i,r):r&&s.setAttribute(i,"")}),Te(n)&&s.appendChild(document.createTextNode(n)),s},Sy=()=>{const e=$m(),t=Ya();let n=[];const s=()=>{e.value.forEach(a=>{const l=Ey(a);l&&n.push(l)})},i=()=>{const a=[];return e.value.forEach(l=>{const o=wy(l);o&&a.push(o)}),a},r=()=>{document.documentElement.lang=t.value;const a=i();n.forEach((l,o)=>{const u=a.findIndex(p=>l.isEqualNode(p));u===-1?(l.remove(),delete n[o]):a.splice(u,1)}),a.forEach(l=>document.head.appendChild(l)),n=[...n.filter(l=>!!l),...a]};wt(Um,r),Ie(()=>{s(),de(e,r,{immediate:!1})})},Cy=i1,xy=async()=>{var s;const e=Cy({name:"Vuepress",setup(){var a;Sy();for(const l of Ei)(a=l.setup)==null||a.call(l);const i=Ei.flatMap(({rootComponents:l=[]})=>l.map(o=>c(o))),r=zm();return()=>[c(r.value),i]}}),t=yy();by(e);const n=Ay(e,t,Ei);{const{setupDevtools:i}=await ne(async()=>{const{setupDevtools:r}=await import("./setupDevtools-7MC2TMWH-DXDxGAB2.js");return{setupDevtools:r}},[]);i(e,n)}for(const i of Ei)await((s=i.enhance)==null?void 0:s.call(i,{app:e,router:t,siteData:Ss}));return e.use(t),{app:e,router:t}};xy().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{Me as a,lp as b,Oy as c,xy as createVueApp,Iy as d,By as o,Ct as r,O2 as s,de as w};
