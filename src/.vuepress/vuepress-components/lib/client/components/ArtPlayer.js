import{usePageLang as S}from"@vuepress/client";import{defineComponent as v,onMounted as P,onUnmounted as b,h as T,camelize as h}from"vue";import{keys as E}from"vuepress-shared/client";import{u as M}from"../size-daba93c1.js";import"@vuepress/shared";import"@vueuse/core";const z=["mp4","mp3","webm","ogg","m3u8","hls","ts","flv","mpd","dash"],A=e=>(e==null?void 0:e.split(".").pop())||"",k=async(e,t,n,r=!1,a=0)=>{const d=(await import("dashjs/dist/dash.all.min.js")).default;if(d.supportsMediaSource()){const i=d.MediaPlayer().create();i.initialize(e,t,r,a),n(()=>i.destroy())}},L=async(e,t,n)=>{const r=(await import("mpegts.js/dist/mpegts.js")).default;if(r.isSupported()){const a=r.createPlayer({type:"flv",url:t});a.attachMediaElement(e),a.load(),n(()=>a.destroy())}},R=async(e,t,n)=>{const r=(await import("hls.js/dist/hls.min.js")).default;if(e.canPlayType("application/x-mpegURL")||e.canPlayType("application/vnd.apple.mpegURL"))e.src=t;else if(r.isSupported()){const a=new r;a.attachMedia(e),a.on(r.Events.MEDIA_ATTACHED,function(){a.loadSource(t)}),n(()=>a.destroy())}},D=["no-fullscreen","no-hotkey","no-playback-rate","no-setting","no-mutex","no-plays-inline"],O=["airplay","autoplay","aspect-ratio","auto-mini","auto-size","auto-orientation","auto-playback","fast-forward","flip","fullscreen-web","lock","loop","is-live","muted","mini-progress-bar","pip","screenshot","subtitle-offset"],U=["en","pl","cs","es","fa"],_=["zh-cn","zh-tw"],x=e=>{const t=e.toLowerCase(),n=t.split("-")[0];return _.includes(t)?t:U.includes(n)?n:n==="zh"?"zh-cn":"en"};var C=v({name:"ArtPlayer",props:{src:{type:String,required:!0},type:{type:String,default:""},poster:{type:String,default:""},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},config:{type:Object,default:null},customPlayer:{type:Function,default:e=>e}},setup(e,{attrs:t}){const n=S(),{el:r,width:a,height:d}=M(e,0);let i;const w=()=>{var f,l,m;const o={theme:"#3eaf7c",...ART_PLAYER_OPTIONS,container:r.value,title:e.title,poster:e.poster,url:e.src,type:e.type||A(e.src),lang:x(n.value),...e.config,useSSR:!1},g=E(t);if(D.forEach(s=>{g.includes(s)&&(o[h(s.replace(/^no-/,""))]=!1)}),O.forEach(s=>{g.includes(s)&&(o[h(s)]=!0)}),o.type){const s=o.customType??(o.customType={});if(z.includes(o.type.toLowerCase()))switch(o.type){case"m3u8":case"hls":s[f=o.type]??(s[f]=(p,c,u)=>R(p,c,y=>{u.on("destroy",y)}));break;case"flv":s[l=o.type]??(s[l]=(p,c,u)=>L(p,c,y=>{u.on("destroy",y)}));break;case"mpd":case"dash":s[m=o.type]??(s[m]=(p,c,u)=>k(p,c,y=>{u.on("destroy",y)}));break}else console.warn(`[components]: ArtPlayer does not support current file type ${o.type}!`)}return o};return P(async()=>{const{default:f}=await import("artplayer"),l=new f(w());i=await e.customPlayer(l)||l}),b(()=>{i==null||i.destroy()}),()=>T("div",{ref:r,style:{width:a.value,height:d.value}},"Loading...")}});export{C as default};
//# sourceMappingURL=ArtPlayer.js.map