function Bn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},gr={duration:.5,overwrite:!1,delay:0},yl,Et,st,bn=1e8,Pt=1/bn,mo=Math.PI*2,Ff=mo/4,Of=0,Yu=Math.sqrt,Bf=Math.cos,kf=Math.sin,St=function(e){return typeof e=="string"},ht=function(e){return typeof e=="function"},Wn=function(e){return typeof e=="number"},Ml=function(e){return typeof e>"u"},wn=function(e){return typeof e=="object"},Ot=function(e){return e!==!1},Sl=function(){return typeof window<"u"},_s=function(e){return ht(e)||St(e)},$u=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dt=Array.isArray,_o=/(?:-?\.?\d|\.)+/gi,Zu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,lr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ba=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ku=/[+-]=-?[.\d]+/,ju=/[^,'"\[\]\s]+/gi,zf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot,Mn,go,Tl,Qt={},ta={},Ju,Qu=function(e){return(ta=vr(e,Qt))&&Ht},El=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ts=function(e,t){return!t&&console.warn(e)},eh=function(e,t){return e&&(Qt[e]=t)&&ta&&(ta[e]=t)||Qt},ns=function(){return 0},Vf={suppressEvents:!0,isStart:!0,kill:!1},qs={suppressEvents:!0,kill:!1},Hf={suppressEvents:!0},bl={},ai=[],vo={},th,qt={},Aa={},oc=30,Ys=[],Al="",wl=function(e){var t=e[0],n,i;if(wn(t)||ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ys.length;i--&&!Ys[i].targetTest(t););n=Ys[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new bh(e[i],n)))||e.splice(i,1);return e},Ui=function(e){return e._gsap||wl(on(e))[0]._gsap},nh=function(e,t,n){return(n=e[t])&&ht(n)?e[t]():Ml(n)&&e.getAttribute&&e.getAttribute(t)||n},Bt=function(e,t){return(e=e.split(",")).forEach(t)||e},dt=function(e){return Math.round(e*1e5)/1e5||0},vt=function(e){return Math.round(e*1e7)/1e7||0},hr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Gf=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},na=function(){var e=ai.length,t=ai.slice(0),n,i;for(vo={},ai.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ih=function(e,t,n,i){ai.length&&!Et&&na(),e.render(t,n,Et&&t<0&&(e._initted||e._startAt)),ai.length&&!Et&&na()},rh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ju).length<2?t:St(e)?e.trim():e},sh=function(e){return e},en=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wf=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},vr=function(e,t){for(var n in t)e[n]=t[n];return e},lc=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=wn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},ia=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Kr=function(e){var t=e.parent||ot,n=e.keyframes?Wf(Dt(e.keyframes)):en;if(Ot(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Xf=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ah=function(e,t,n,i,s){var a=e[i],l;if(s)for(l=t[s];a&&a[s]>l;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ma=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ui=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ni=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qf=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xo=function(e,t,n,i){return e._startAt&&(Et?e._startAt.revert(qs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Yf=function r(e){return!e||e._ts&&r(e.parent)},cc=function(e){return e._repeat?xr(e._tTime,e=e.duration()+e._rDelay)*e:0},xr=function(e,t){var n=Math.floor(e=vt(e/t));return e&&n===e?n-1:n},ra=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_a=function(e){return e._end=vt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},ga=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=vt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_a(e),n._dirty||Ni(n,e)),e},oh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ra(e.rawTime(),t),(!t._dur||us(0,t.totalDuration(),n)-t._tTime>Pt)&&t.render(n,!0)),Ni(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Tn=function(e,t,n,i){return t.parent&&ui(t),t._start=vt((Wn(n)?n:n||e!==ot?an(e,n,t):e._time)+t._delay),t._end=vt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ah(e,t,"_first","_last",e._sort?"_start":0),yo(t)||(e._recent=t),i||oh(e,t),e._ts<0&&ga(e,e._tTime),e},lh=function(e,t){return(Qt.ScrollTrigger||El("scrollTrigger",t))&&Qt.ScrollTrigger.create(t,e)},ch=function(e,t,n,i,s){if(Cl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Et&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&th!==Zt.frame)return ai.push(e),e._lazy=[s,i],1},$f=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},yo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Zf=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&$f(e)&&!(!e._initted&&yo(e))||(e._ts<0||e._dp._ts<0)&&!yo(e))?0:1,l=e._rDelay,u=0,h,d,o;if(l&&e._repeat&&(u=us(0,e._tDur,t),d=xr(u,l),e._yoyo&&d&1&&(a=1-a),d!==xr(e._tTime,l)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Et||i||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&ch(e,t,i,n,u))return;for(o=e._zTime,e._zTime=t||(n?Pt:0),n||(n=t&&!o),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=u,h=e._pt;h;)h.r(a,h.d),h=h._next;t<0&&xo(e,t,n,!0),e._onUpdate&&!n&&Kt(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&Kt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ui(e,1),!n&&!Et&&(Kt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Kf=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},yr=function(e,t,n,i){var s=e._repeat,a=vt(t)||0,l=e._tTime/e._tDur;return l&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:vt(a*(s+1)+e._rDelay*s):a,l>0&&!i&&ga(e,e._tTime=e._tDur*l),e.parent&&_a(e),n||Ni(e.parent,e),e},uc=function(e){return e instanceof Nt?Ni(e):yr(e,e._dur)},jf={_start:0,endTime:ns,totalDuration:ns},an=function r(e,t,n){var i=e.labels,s=e._recent||jf,a=e.duration()>=bn?s.endTime(!1):e._dur,l,u,h;return St(t)&&(isNaN(t)||t in i)?(u=t.charAt(0),h=t.substr(-1)==="%",l=t.indexOf("="),u==="<"||u===">"?(l>=0&&(t=t.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(l<0?s:n).totalDuration()/100:1)):l<0?(t in i||(i[t]=a),i[t]):(u=parseFloat(t.charAt(l-1)+t.substr(l+1)),h&&n&&(u=u/100*(Dt(n)?n[0]:n).totalDuration()),l>1?r(e,t.substr(0,l-1),n)+u:a+u)):t==null?a:+t},jr=function(e,t,n){var i=Wn(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],l,u;if(i&&(a.duration=t[1]),a.parent=n,e){for(l=a,u=n;u&&!("immediateRender"in l);)l=u.vars.defaults||{},u=Ot(u.vars.inherit)&&u.parent;a.immediateRender=Ot(l.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new gt(t[0],a,t[s+1])},pi=function(e,t){return e||e===0?t(e):t},us=function(e,t,n){return n<e?e:n>t?t:n},Ct=function(e,t){return!St(e)||!(t=zf.exec(e))?"":t[1]},Jf=function(e,t,n){return pi(n,function(i){return us(e,t,i)})},Mo=[].slice,uh=function(e,t){return e&&wn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wn(e[0]))&&!e.nodeType&&e!==Mn},Qf=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return St(i)&&!t||uh(i,1)?(s=n).push.apply(s,on(i)):n.push(i)})||n},on=function(e,t,n){return st&&!t&&st.selector?st.selector(e):St(e)&&!n&&(go||!Mr())?Mo.call((t||Tl).querySelectorAll(e),0):Dt(e)?Qf(e,n):uh(e)?Mo.call(e,0):e?[e]:[]},So=function(e){return e=on(e)[0]||ts("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return on(t,n.querySelectorAll?n:n===e?ts("Invalid scope")||Tl.createElement("div"):e)}},hh=function(e){return e.sort(function(){return .5-Math.random()})},fh=function(e){if(ht(e))return e;var t=wn(e)?e:{each:e},n=Fi(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},l=i>0&&i<1,u=isNaN(i)||l,h=t.axis,d=i,o=i;return St(i)?d=o={center:.5,edges:.5,end:1}[i]||0:!l&&u&&(d=i[0],o=i[1]),function(c,f,_){var g=(_||t).length,m=a[g],p,y,M,x,b,A,w,C,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,bn])[1],!v){for(w=-1e8;w<(w=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=u?Math.min(v,g)*d-.5:i%v,y=v===bn?0:u?g*o/v-.5:i/v|0,w=0,C=bn,A=0;A<g;A++)M=A%v-p,x=y-(A/v|0),m[A]=b=h?Math.abs(h==="y"?x:M):Yu(M*M+x*x),b>w&&(w=b),b<C&&(C=b);i==="random"&&hh(m),m.max=w-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(v>g?g-1:h?h==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ct(t.amount||t.each)||0,n=n&&g<0?Sh(n):n}return g=(m[c]-m.min)/m.max||0,vt(m.b+(n?n(g):g)*m.v)+m.u}},To=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=vt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Wn(n)?0:Ct(n))}},dh=function(e,t){var n=Dt(e),i,s;return!n&&wn(e)&&(i=n=e.radius||bn,e.values?(e=on(e.values),(s=!Wn(e[0]))&&(i*=i)):e=To(e.increment)),pi(t,n?ht(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var l=parseFloat(s?a.x:a),u=parseFloat(s?a.y:0),h=bn,d=0,o=e.length,c,f;o--;)s?(c=e[o].x-l,f=e[o].y-u,c=c*c+f*f):c=Math.abs(e[o]-l),c<h&&(h=c,d=o);return d=!i||h<=i?e[d]:a,s||d===a||Wn(a)?d:d+Ct(a)}:To(e))},ph=function(e,t,n,i){return pi(Dt(e)?!t:n===!0?!!(n=0):!i,function(){return Dt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ed=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},td=function(e,t){return function(n){return e(parseFloat(n))+(t||Ct(n))}},nd=function(e,t,n){return _h(e,t,0,1,n)},mh=function(e,t,n){return pi(n,function(i){return e[~~t(i)]})},id=function r(e,t,n){var i=t-e;return Dt(e)?mh(e,r(0,e.length),t):pi(n,function(s){return(i+(s-e)%i)%i+e})},rd=function r(e,t,n){var i=t-e,s=i*2;return Dt(e)?mh(e,r(0,e.length-1),t):pi(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},is=function(e){for(var t=0,n="",i,s,a,l;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),l=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(l?ju:_o),n+=e.substr(t,i-t)+ph(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},_h=function(e,t,n,i,s){var a=t-e,l=i-n;return pi(s,function(u){return n+((u-e)/a*l||0)})},sd=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=St(e),l={},u,h,d,o,c;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Dt(e)&&!Dt(t)){for(d=[],o=e.length,c=o-2,h=1;h<o;h++)d.push(r(e[h-1],e[h]));o--,s=function(_){_*=o;var g=Math.min(c,~~_);return d[g](_-g)},n=t}else i||(e=vr(Dt(e)?[]:{},e));if(!d){for(u in t)Rl.call(l,e,u,"get",t[u]);s=function(_){return Il(_,l)||(a?e.p:e)}}}return pi(n,s)},hc=function(e,t,n){var i=e.labels,s=bn,a,l,u;for(a in i)l=i[a]-t,l<0==!!n&&l&&s>(l=Math.abs(l))&&(u=a,s=l);return u},Kt=function(e,t,n){var i=e.vars,s=i[t],a=st,l=e._ctx,u,h,d;if(s)return u=i[t+"Params"],h=i.callbackScope||e,n&&ai.length&&na(),l&&(st=l),d=u?s.apply(h,u):s.call(h),st=a,d},Yr=function(e){return ui(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Et),e.progress()<1&&Kt(e,"onInterrupt"),e},cr,gh=[],vh=function(e){if(e)if(e=!e.name&&e.default||e,Sl()||e.headless){var t=e.name,n=ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ns,render:Il,add:Rl,kill:Md,modifier:yd,rawVars:0},a={targetTest:0,get:0,getSetter:Dl,aliases:{},register:0};if(Mr(),e!==i){if(qt[t])return;en(i,en(ia(e,s),a)),vr(i.prototype,vr(s,ia(e,a))),qt[i.prop=t]=i,e.targetTest&&(Ys.push(i),bl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}eh(t,i),e.register&&e.register(Ht,i,kt)}else gh.push(e)},tt=255,$r={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},wa=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*tt+.5|0},xh=function(e,t,n){var i=e?Wn(e)?[e>>16,e>>8&tt,e&tt]:0:$r.black,s,a,l,u,h,d,o,c,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),$r[e])i=$r[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),l=e.charAt(3),e="#"+s+s+a+a+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&tt,i&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(_o),!t)u=+i[0]%360/360,h=+i[1]/100,d=+i[2]/100,a=d<=.5?d*(h+1):d+h-d*h,s=d*2-a,i.length>3&&(i[3]*=1),i[0]=wa(u+1/3,s,a),i[1]=wa(u,s,a),i[2]=wa(u-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Zu),n&&i.length<4&&(i[3]=1),i}else i=e.match(_o)||$r.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/tt,a=i[1]/tt,l=i[2]/tt,o=Math.max(s,a,l),c=Math.min(s,a,l),d=(o+c)/2,o===c?u=h=0:(f=o-c,h=d>.5?f/(2-o-c):f/(o+c),u=o===s?(a-l)/f+(a<l?6:0):o===a?(l-s)/f+2:(s-a)/f+4,u*=60),i[0]=~~(u+.5),i[1]=~~(h*100+.5),i[2]=~~(d*100+.5)),n&&i.length<4&&(i[3]=1),i},yh=function(e){var t=[],n=[],i=-1;return e.split(oi).forEach(function(s){var a=s.match(lr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},fc=function(e,t,n){var i="",s=(e+i).match(oi),a=t?"hsla(":"rgba(",l=0,u,h,d,o;if(!s)return e;if(s=s.map(function(c){return(c=xh(c,t,1))&&a+(t?c[0]+","+c[1]+"%,"+c[2]+"%,"+c[3]:c.join(","))+")"}),n&&(d=yh(e),u=n.c,u.join(i)!==d.c.join(i)))for(h=e.replace(oi,"1").split(lr),o=h.length-1;l<o;l++)i+=h[l]+(~u.indexOf(l)?s.shift()||a+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!h)for(h=e.split(oi),o=h.length-1;l<o;l++)i+=h[l]+s[l];return i+h[o]},oi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in $r)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),ad=/hsl[a]?\(/,Mh=function(e){var t=e.join(" "),n;if(oi.lastIndex=0,oi.test(t))return n=ad.test(t),e[1]=fc(e[1],n),e[0]=fc(e[0],n,yh(e[1])),!0},rs,Zt=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,l=[],u,h,d,o,c,f,_=function g(m){var p=r()-i,y=m===!0,M,x,b,A;if((p>e||p<0)&&(n+=p-t),i+=p,b=i-n,M=b-a,(M>0||y)&&(A=++o.frame,c=b-o.time*1e3,o.time=b=b/1e3,a+=M+(M>=s?4:s-M),x=1),y||(u=h(g)),x)for(f=0;f<l.length;f++)l[f](b,c,A,m)};return o={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return c/(1e3/(m||60))},wake:function(){Ju&&(!go&&Sl()&&(Mn=go=window,Tl=Mn.document||{},Qt.gsap=Ht,(Mn.gsapVersions||(Mn.gsapVersions=[])).push(Ht.version),Qu(ta||Mn.GreenSockGlobals||!Mn.gsap&&Mn||{}),gh.forEach(vh)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&o.sleep(),h=d||function(m){return setTimeout(m,a-o.time*1e3+1|0)},rs=1,_(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(u),rs=0,h=ns},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=o.time*1e3+s},add:function(m,p,y){var M=p?function(x,b,A,w){m(x,b,A,w),o.remove(M)}:m;return o.remove(m),l[y?"unshift":"push"](M),Mr(),M},remove:function(m,p){~(p=l.indexOf(m))&&l.splice(p,1)&&f>=p&&f--},_listeners:l},o}(),Mr=function(){return!rs&&Zt.wake()},Oe={},od=/^[\d.\-M][\d.\-,\s]/,ld=/["']/g,cd=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,l,u,h;s<a;s++)u=n[s],l=s!==a-1?u.lastIndexOf(","):u.length,h=u.substr(0,l),t[i]=isNaN(h)?h.replace(ld,"").trim():+h,i=u.substr(l+1).trim();return t},ud=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},hd=function(e){var t=(e+"").split("("),n=Oe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[cd(t[1])]:ud(e).split(",").map(rh)):Oe._CE&&od.test(e)?Oe._CE("",e):n},Sh=function(e){return function(t){return 1-e(1-t)}},Th=function r(e,t){for(var n=e._first,i;n;)n instanceof Nt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Fi=function(e,t){return e&&(ht(e)?e:Oe[e]||hd(e))||t},Vi=function(e,t,n,i){n===void 0&&(n=function(u){return 1-t(1-u)}),i===void 0&&(i=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Bt(e,function(l){Oe[l]=Qt[l]=s,Oe[a=l.toLowerCase()]=n;for(var u in s)Oe[a+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=Oe[l+"."+u]=s[u]}),s},Eh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ra=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/mo*(Math.asin(1/i)||0),l=function(d){return d===1?1:i*Math.pow(2,-10*d)*kf((d-a)*s)+1},u=e==="out"?l:e==="in"?function(h){return 1-l(1-h)}:Eh(l);return s=mo/s,u.config=function(h,d){return r(e,h,d)},u},Ca=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Eh(n);return i.config=function(s){return r(e,s)},i};Bt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Vi(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;Vi("Elastic",Ra("in"),Ra("out"),Ra());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(l){return l<t?r*l*l:l<n?r*Math.pow(l-1.5/e,2)+.75:l<i?r*(l-=2.25/e)*l+.9375:r*Math.pow(l-2.625/e,2)+.984375};Vi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Vi("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Vi("Circ",function(r){return-(Yu(1-r*r)-1)});Vi("Sine",function(r){return r===1?1:-Bf(r*Ff)+1});Vi("Back",Ca("in"),Ca("out"),Ca());Oe.SteppedEase=Oe.steps=Qt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Pt;return function(l){return((i*us(0,a,l)|0)+s)*n}}};gr.ease=Oe["quad.out"];Bt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Al+=r+","+r+"Params,"});var bh=function(e,t){this.id=Of++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nh,this.set=t?t.getSetter:Dl},ss=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,yr(this,+t.duration,1,1),this.data=t.data,st&&(this._ctx=st,st.data.push(this)),rs||Zt.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,yr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Mr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ga(this,n),!s._dp||s.parent||oh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Tn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ih(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+cc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+cc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?xr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ra(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(us(-Math.abs(this._delay),this._tDur,s),i!==!1),_a(this),qf(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Mr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Tn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ot(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ra(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Hf);var i=Et;return Et=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Et=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,uc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,uc(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(an(this,n),Ot(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ot(i)),this._dur||(this._zTime=-1e-8),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Pt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=ht(n)?n:sh,l=function(){var h=i.then;i.then=null,ht(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),s(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Yr(this)},r}();en(ss.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Nt=function(r){qu(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ot(n.sortChildren),ot&&Tn(n.parent||ot,Bn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&lh(Bn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return jr(0,arguments,this),this},t.from=function(i,s,a){return jr(1,arguments,this),this},t.fromTo=function(i,s,a,l){return jr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Kr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new gt(i,s,an(this,a),1),this},t.call=function(i,s,a){return Tn(this,gt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,l,u,h,d){return a.duration=s,a.stagger=a.stagger||l,a.onComplete=h,a.onCompleteParams=d,a.parent=this,new gt(i,a,an(this,u)),this},t.staggerFrom=function(i,s,a,l,u,h,d){return a.runBackwards=1,Kr(a).immediateRender=Ot(a.immediateRender),this.staggerTo(i,s,a,l,u,h,d)},t.staggerFromTo=function(i,s,a,l,u,h,d,o){return l.startAt=a,Kr(l).immediateRender=Ot(l.immediateRender),this.staggerTo(i,s,l,u,h,d,o)},t.render=function(i,s,a){var l=this._time,u=this._dirty?this.totalDuration():this._tDur,h=this._dur,d=i<=0?0:vt(i),o=this._zTime<0!=i<0&&(this._initted||!h),c,f,_,g,m,p,y,M,x,b,A,w;if(this!==ot&&d>u&&i>=0&&(d=u),d!==this._tTime||a||o){if(l!==this._time&&h&&(d+=this._time-l,i+=this._time-l),c=d,x=this._start,M=this._ts,p=!M,o&&(h||(l=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=h+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(c=vt(d%m),d===u?(g=this._repeat,c=h):(b=vt(d/m),g=~~b,g&&g===b&&(c=h,g--),c>h&&(c=h)),b=xr(this._tTime,m),!l&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),A&&g&1&&(c=h-c,w=1),g!==b&&!this._lock){var C=A&&b&1,v=C===(A&&g&1);if(g<b&&(C=!C),l=C?0:d%h?h:d,this._lock=1,this.render(l||(w?0:vt(g*m)),s,!h)._lock=0,this._tTime=d,!s&&this.parent&&Kt(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),l&&l!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,u=this._tDur,v&&(this._lock=2,l=C?h:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Th(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Kf(this,vt(l),vt(c)),y&&(d-=c-(c=y._start))),this._tTime=d,this._time=c,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,l=0),!l&&c&&!s&&!g&&(Kt(this,"onStart"),this._tTime!==d))return this;if(c>=l&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||c>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(c-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(c-f._start)*f._ts,s,a),c!==this._time||!this._ts&&!p){y=0,_&&(d+=this._zTime=-1e-8);break}}f=_}else{f=this._last;for(var T=i<0?i:c;f;){if(_=f._prev,(f._act||T<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(T-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(T-f._start)*f._ts,s,a||Et&&(f._initted||f._startAt)),c!==this._time||!this._ts&&!p){y=0,_&&(d+=this._zTime=T?-1e-8:Pt);break}}f=_}}if(y&&!s&&(this.pause(),y.render(c>=l?0:-1e-8)._zTime=c>=l?1:-1,this._ts))return this._start=x,_a(this),this.render(i,s,a);this._onUpdate&&!s&&Kt(this,"onUpdate",!0),(d===u&&this._tTime>=this.totalDuration()||!d&&l)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!h)&&(d===u&&this._ts>0||!d&&this._ts<0)&&ui(this,1),!s&&!(i<0&&!l)&&(d||l||!u)&&(Kt(this,d===u&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Wn(s)||(s=an(this,s,i)),!(i instanceof ss)){if(Dt(i))return i.forEach(function(l){return a.add(l,s)}),this;if(St(i))return this.addLabel(i,s);if(ht(i))i=gt.delayedCall(0,i);else return this}return this!==i?Tn(this,i,s):this},t.getChildren=function(i,s,a,l){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),l===void 0&&(l=-1e8);for(var u=[],h=this._first;h;)h._start>=l&&(h instanceof gt?s&&u.push(h):(a&&u.push(h),i&&u.push.apply(u,h.getChildren(!0,s,a)))),h=h._next;return u},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return St(i)?this.removeLabel(i):ht(i)?this.killTweensOf(i):(i.parent===this&&ma(this,i),i===this._recent&&(this._recent=this._last),Ni(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=vt(Zt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=an(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var l=gt.delayedCall(0,s||ns,a);return l.data="isPause",this._hasPause=1,Tn(this,l,an(this,i))},t.removePause=function(i){var s=this._first;for(i=an(this,i);s;)s._start===i&&s.data==="isPause"&&ui(s),s=s._next},t.killTweensOf=function(i,s,a){for(var l=this.getTweensOf(i,a),u=l.length;u--;)ni!==l[u]&&l[u].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],l=on(i),u=this._first,h=Wn(s),d;u;)u instanceof gt?Gf(u._targets,l)&&(h?(!ni||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&a.push(u):(d=u.getTweensOf(l,s)).length&&a.push.apply(a,d),u=u._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,l=an(a,i),u=s,h=u.startAt,d=u.onStart,o=u.onStartParams,c=u.immediateRender,f,_=gt.to(a,en({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(h&&"time"in h?h.time:a._time))/a.timeScale())||Pt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((l-(h&&"time"in h?h.time:a._time))/a.timeScale());_._dur!==m&&yr(_,m,0,1).render(_._time,!0,!0),f=1}d&&d.apply(_,o||[])}},s));return c?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,en({startAt:{time:an(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),hc(this,an(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),hc(this,an(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var l=this._first,u=this.labels,h;l;)l._start>=a&&(l._start+=i,l._end+=i),l=l._next;if(s)for(h in u)u[h]>=a&&(u[h]+=i);return Ni(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ni(this)},t.totalDuration=function(i){var s=0,a=this,l=a._last,u=bn,h,d,o;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(o=a.parent;l;)h=l._prev,l._dirty&&l.totalDuration(),d=l._start,d>u&&a._sort&&l._ts&&!a._lock?(a._lock=1,Tn(a,l,d-l._delay,1)._lock=0):u=d,d<0&&l._ts&&(s-=d,(!o&&!a._dp||o&&o.smoothChildTiming)&&(a._start+=d/a._ts,a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),u=0),l._end>s&&l._ts&&(s=l._end),l=h;yr(a,a===ot&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ot._ts&&(ih(ot,ra(i,ot)),th=Zt.frame),Zt.frame>=oc){oc+=jt.autoSleep||120;var s=ot._first;if((!s||!s._ts)&&jt.autoSleep&&Zt._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zt.sleep()}}},e}(ss);en(Nt.prototype,{_lock:0,_hasPause:0,_forcing:0});var fd=function(e,t,n,i,s,a,l){var u=new kt(this._pt,e,t,0,1,Dh,null,s),h=0,d=0,o,c,f,_,g,m,p,y;for(u.b=n,u.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=is(i)),a&&(y=[n,i],a(y,e,t),n=y[0],i=y[1]),c=n.match(ba)||[];o=ba.exec(i);)_=o[0],g=i.substring(h,o.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==c[d++]&&(m=parseFloat(c[d-1])||0,u._pt={_next:u._pt,p:g||d===1?g:",",s:m,c:_.charAt(1)==="="?hr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},h=ba.lastIndex);return u.c=h<i.length?i.substring(h,i.length):"",u.fp=l,(Ku.test(i)||p)&&(u.e=0),this._pt=u,u},Rl=function(e,t,n,i,s,a,l,u,h,d){ht(i)&&(i=i(s||0,e,a));var o=e[t],c=n!=="get"?n:ht(o)?h?e[t.indexOf("set")||!ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():o,f=ht(o)?h?gd:Ch:Pl,_;if(St(i)&&(~i.indexOf("random(")&&(i=is(i)),i.charAt(1)==="="&&(_=hr(c,i)+(Ct(c)||0),(_||_===0)&&(i=_))),!d||c!==i||Eo)return!isNaN(c*i)&&i!==""?(_=new kt(this._pt,e,t,+c||0,i-(c||0),typeof o=="boolean"?xd:Ph,0,f),h&&(_.fp=h),l&&_.modifier(l,this,e),this._pt=_):(!o&&!(t in e)&&El(t,i),fd.call(this,e,t,c,i,f,u||jt.stringFilter,h))},dd=function(e,t,n,i,s){if(ht(e)&&(e=Jr(e,s,t,n,i)),!wn(e)||e.style&&e.nodeType||Dt(e)||$u(e))return St(e)?Jr(e,s,t,n,i):e;var a={},l;for(l in e)a[l]=Jr(e[l],s,t,n,i);return a},Ah=function(e,t,n,i,s,a){var l,u,h,d;if(qt[e]&&(l=new qt[e]).init(s,l.rawVars?t[e]:dd(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=u=new kt(n._pt,s,e,0,1,l.render,l,0,l.priority),n!==cr))for(h=n._ptLookup[n._targets.indexOf(s)],d=l._props.length;d--;)h[l._props[d]]=u;return l},ni,Eo,Cl=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,l=i.immediateRender,u=i.lazy,h=i.onUpdate,d=i.runBackwards,o=i.yoyoEase,c=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!yl,x=e.timeline,b,A,w,C,v,T,P,z,F,V,q,G,K;if(x&&(!c||!s)&&(s="none"),e._ease=Fi(s,gr.ease),e._yEase=o?Sh(Fi(o===!0?s:o,gr.ease)):0,o&&e._yoyo&&!e._repeat&&(o=e._yEase,e._yEase=e._ease,e._ease=o),e._from=!x&&!!i.runBackwards,!x||c&&!i.stagger){if(z=m[0]?Ui(m[0]).harness:0,G=z&&i[z.prop],b=ia(i,bl),g&&(g._zTime<0&&g.progress(1),t<0&&d&&l&&!f?g.render(-1,!0):g.revert(d&&_?qs:Vf),g._lazy=0),a){if(ui(e._startAt=gt.set(m,en({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Ot(u),startAt:null,delay:0,onUpdate:h&&function(){return Kt(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Et||!l&&!f)&&e._startAt.revert(qs),l&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&_&&!g){if(t&&(l=!1),w=en({overwrite:!1,data:"isFromStart",lazy:l&&!g&&Ot(u),immediateRender:l,stagger:0,parent:p},b),G&&(w[z.prop]=G),ui(e._startAt=gt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Et?e._startAt.revert(qs):e._startAt.render(-1,!0)),e._zTime=t,!l)r(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,u=_&&Ot(u)||u&&!_,A=0;A<m.length;A++){if(v=m[A],P=v._gsap||wl(m)[A]._gsap,e._ptLookup[A]=V={},vo[P.id]&&ai.length&&na(),q=y===m?A:y.indexOf(v),z&&(F=new z).init(v,G||b,e,q,y)!==!1&&(e._pt=C=new kt(e._pt,v,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(H){V[H]=C}),F.priority&&(T=1)),!z||G)for(w in b)qt[w]&&(F=Ah(w,b,e,q,v,y))?F.priority&&(T=1):V[w]=C=Rl.call(e,v,w,"get",b[w],q,y,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),M&&e._pt&&(ni=e,ot.killTweensOf(v,V,e.globalTime(t)),K=!e.parent,ni=0),e._pt&&u&&(vo[P.id]=1)}T&&Ih(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!K,c&&t<=0&&x.render(bn,!0,!0)},pd=function(e,t,n,i,s,a,l,u){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,o,c,f;if(!h)for(h=e._ptCache[t]=[],c=e._ptLookup,f=e._targets.length;f--;){if(d=c[f][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Eo=1,e.vars[t]="+=0",Cl(e,l),Eo=0,u?ts(t+" not eligible for reset"):1;h.push(d)}for(f=h.length;f--;)o=h[f],d=o._pt||o,d.s=(i||i===0)&&!s?i:d.s+(i||0)+a*d.c,d.c=n-d.s,o.e&&(o.e=dt(n)+Ct(o.e)),o.b&&(o.b=d.s+Ct(o.b))},md=function(e,t){var n=e[0]?Ui(e[0]).harness:0,i=n&&n.aliases,s,a,l,u;if(!i)return t;s=vr({},t);for(a in i)if(a in s)for(u=i[a].split(","),l=u.length;l--;)s[u[l]]=s[a];return s},_d=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,l;if(Dt(t))l=n[e]||(n[e]=[]),t.forEach(function(u,h){return l.push({t:h/(t.length-1)*100,v:u,e:s})});else for(a in t)l=n[a]||(n[a]=[]),a==="ease"||l.push({t:parseFloat(e),v:t[a],e:s})},Jr=function(e,t,n,i,s){return ht(e)?e.call(t,n,i,s):St(e)&&~e.indexOf("random(")?is(e):e},wh=Al+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rh={};Bt(wh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Rh[r]=1});var gt=function(r){qu(e,r);function e(n,i,s,a){var l;typeof i=="number"&&(s.duration=i,i=s,s=null),l=r.call(this,a?i:Kr(i))||this;var u=l.vars,h=u.duration,d=u.delay,o=u.immediateRender,c=u.stagger,f=u.overwrite,_=u.keyframes,g=u.defaults,m=u.scrollTrigger,p=u.yoyoEase,y=i.parent||ot,M=(Dt(n)||$u(n)?Wn(n[0]):"length"in i)?[n]:on(n),x,b,A,w,C,v,T,P;if(l._targets=M.length?wl(M):ts("GSAP target "+n+" not found. https://gsap.com",!jt.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=f,_||c||_s(h)||_s(d)){if(i=l.vars,x=l.timeline=new Nt({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:M}),x.kill(),x.parent=x._dp=Bn(l),x._start=0,c||_s(h)||_s(d)){if(w=M.length,T=c&&fh(c),wn(c))for(C in c)~wh.indexOf(C)&&(P||(P={}),P[C]=c[C]);for(b=0;b<w;b++)A=ia(i,Rh),A.stagger=0,p&&(A.yoyoEase=p),P&&vr(A,P),v=M[b],A.duration=+Jr(h,Bn(l),b,v,M),A.delay=(+Jr(d,Bn(l),b,v,M)||0)-l._delay,!c&&w===1&&A.delay&&(l._delay=d=A.delay,l._start+=d,A.delay=0),x.to(v,A,T?T(b,v,M):0),x._ease=Oe.none;x.duration()?h=d=0:l.timeline=0}else if(_){Kr(en(x.vars.defaults,{ease:"none"})),x._ease=Fi(_.ease||i.ease||"none");var z=0,F,V,q;if(Dt(_))_.forEach(function(G){return x.to(M,G,">")}),x.duration();else{A={};for(C in _)C==="ease"||C==="easeEach"||_d(C,_[C],A,_.easeEach);for(C in A)for(F=A[C].sort(function(G,K){return G.t-K.t}),z=0,b=0;b<F.length;b++)V=F[b],q={ease:V.e,duration:(V.t-(b?F[b-1].t:0))/100*h},q[C]=V.v,x.to(M,q,z),z+=q.duration;x.duration()<h&&x.to({},{duration:h-x.duration()})}}h||l.duration(h=x.duration())}else l.timeline=0;return f===!0&&!yl&&(ni=Bn(l),ot.killTweensOf(M),ni=0),Tn(y,Bn(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),(o||!h&&!_&&l._start===vt(y._time)&&Ot(o)&&Yf(Bn(l))&&y.data!=="nested")&&(l._tTime=-1e-8,l.render(Math.max(0,-d)||0)),m&&lh(Bn(l),m),l}var t=e.prototype;return t.render=function(i,s,a){var l=this._time,u=this._tDur,h=this._dur,d=i<0,o=i>u-Pt&&!d?u:i<Pt?0:i,c,f,_,g,m,p,y,M,x;if(!h)Zf(this,i,s,a);else if(o!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(c=o,M=this.timeline,this._repeat){if(g=h+this._rDelay,this._repeat<-1&&d)return this.totalTime(g*100+i,s,a);if(c=vt(o%g),o===u?(_=this._repeat,c=h):(m=vt(o/g),_=~~m,_&&_===m?(c=h,_--):c>h&&(c=h)),p=this._yoyo&&_&1,p&&(x=this._yEase,c=h-c),m=xr(this._tTime,g),c===l&&!a&&this._initted&&_===m)return this._tTime=o,this;_!==m&&(M&&this._yEase&&Th(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&c!==g&&this._initted&&(this._lock=a=1,this.render(vt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(ch(this,d?i:c,a,s,o))return this._tTime=0,this;if(l!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(h!==this._dur)return this.render(i,s,a)}if(this._tTime=o,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(c/h),this._from&&(this.ratio=y=1-y),c&&!l&&!s&&!_&&(Kt(this,"onStart"),this._tTime!==o))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(c/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(d&&xo(this,i,s,a),Kt(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Kt(this,"onRepeat"),(o===this._tDur||!o)&&this._tTime===o&&(d&&!this._onUpdate&&xo(this,i,!0,!0),(i||!h)&&(o===this._tDur&&this._ts>0||!o&&this._ts<0)&&ui(this,1),!s&&!(d&&!l)&&(o||l||p)&&(Kt(this,o===u?"onComplete":"onReverseComplete",!0),this._prom&&!(o<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,l,u){rs||Zt.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Cl(this,h),d=this._ease(h/this._dur),pd(this,i,s,a,l,d,h,u)?this.resetTo(i,s,a,l,1):(ga(this,0),this.parent||ah(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Yr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Et),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ni&&ni.vars.overwrite!==!0)._first||Yr(this),this.parent&&a!==this.timeline.totalDuration()&&yr(this,this._dur*this.timeline._tDur/a,0,1),this}var l=this._targets,u=i?on(i):l,h=this._ptLookup,d=this._pt,o,c,f,_,g,m,p;if((!s||s==="all")&&Xf(l,u))return s==="all"&&(this._pt=0),Yr(this);for(o=this._op=this._op||[],s!=="all"&&(St(s)&&(g={},Bt(s,function(y){return g[y]=1}),s=g),s=md(l,s)),p=l.length;p--;)if(~u.indexOf(l[p])){c=h[p],s==="all"?(o[p]=s,_=c,f={}):(f=o[p]=o[p]||{},_=s);for(g in _)m=c&&c[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ma(this,m,"_pt"),delete c[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&d&&Yr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return jr(1,arguments)},e.delayedCall=function(i,s,a,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:l})},e.fromTo=function(i,s,a){return jr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ot.killTweensOf(i,s,a)},e}(ss);en(gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bt("staggerTo,staggerFrom,staggerFromTo",function(r){gt[r]=function(){var e=new Nt,t=Mo.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Pl=function(e,t,n){return e[t]=n},Ch=function(e,t,n){return e[t](n)},gd=function(e,t,n,i){return e[t](i.fp,n)},vd=function(e,t,n){return e.setAttribute(t,n)},Dl=function(e,t){return ht(e[t])?Ch:Ml(e[t])&&e.setAttribute?vd:Pl},Ph=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},xd=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Dh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Il=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},yd=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Md=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ma(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Sd=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Ih=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},kt=function(){function r(t,n,i,s,a,l,u,h,d){this.t=n,this.s=s,this.c=a,this.p=i,this.r=l||Ph,this.d=u||this,this.set=h||Pl,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Sd,this.m=n,this.mt=s,this.tween=i},r}();Bt(Al+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return bl[r]=1});Qt.TweenMax=Qt.TweenLite=gt;Qt.TimelineLite=Qt.TimelineMax=Nt;ot=new Nt({sortChildren:!1,defaults:gr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jt.stringFilter=Mh;var Oi=[],$s={},Td=[],dc=0,Ed=0,Pa=function(e){return($s[e]||Td).map(function(t){return t()})},bo=function(){var e=Date.now(),t=[];e-dc>2&&(Pa("matchMediaInit"),Oi.forEach(function(n){var i=n.queries,s=n.conditions,a,l,u,h;for(l in i)a=Mn.matchMedia(i[l]).matches,a&&(u=1),a!==s[l]&&(s[l]=a,h=1);h&&(n.revert(),u&&t.push(n))}),Pa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),dc=e,Pa("matchMedia"))},Lh=function(){function r(t,n){this.selector=n&&So(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ed++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){ht(n)&&(s=i,i=n,n=ht);var a=this,l=function(){var h=st,d=a.selector,o;return h&&h!==a&&h.data.push(a),s&&(a.selector=So(s)),st=a,o=i.apply(a,arguments),ht(o)&&a._r.push(o),st=h,a.selector=d,a.isReverted=!1,o};return a.last=l,n===ht?l(a,function(u){return a.add(null,u)}):n?a[n]=l:l},e.ignore=function(n){var i=st;st=null,n(this),st=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var l=s.getTweens(),u=s.data.length,h;u--;)h=s.data[u],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(d){return l.splice(l.indexOf(d),1)}));for(l.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,o){return o.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),u=s.data.length;u--;)h=s.data[u],h instanceof Nt?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof gt)&&h.revert&&h.revert(n);s._r.forEach(function(d){return d(n,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),i)for(var a=Oi.length;a--;)Oi[a].id===this.id&&Oi.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),bd=function(){function r(t){this.contexts=[],this.scope=t,st&&st.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){wn(n)||(n={matches:n});var a=new Lh(0,s||this.scope),l=a.conditions={},u,h,d;st&&!a.selector&&(a.selector=st.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(h in n)h==="all"?d=1:(u=Mn.matchMedia(n[h]),u&&(Oi.indexOf(a)<0&&Oi.push(a),(l[h]=u.matches)&&(d=1),u.addListener?u.addListener(bo):u.addEventListener("change",bo)));return d&&i(a,function(o){return a.add(null,o)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),sa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return vh(i)})},timeline:function(e){return new Nt(e)},getTweensOf:function(e,t){return ot.getTweensOf(e,t)},getProperty:function(e,t,n,i){St(e)&&(e=on(e)[0]);var s=Ui(e||{}).get,a=n?sh:rh;return n==="native"&&(n=""),e&&(t?a((qt[t]&&qt[t].get||s)(e,t,n,i)):function(l,u,h){return a((qt[l]&&qt[l].get||s)(e,l,u,h))})},quickSetter:function(e,t,n){if(e=on(e),e.length>1){var i=e.map(function(d){return Ht.quickSetter(d,t,n)}),s=i.length;return function(d){for(var o=s;o--;)i[o](d)}}e=e[0]||{};var a=qt[t],l=Ui(e),u=l.harness&&(l.harness.aliases||{})[t]||t,h=a?function(d){var o=new a;cr._pt=0,o.init(e,n?d+n:d,cr,0,[e]),o.render(1,o),cr._pt&&Il(1,cr)}:l.set(e,u);return a?h:function(d){return h(e,u,n?d+n:d,l,1)}},quickTo:function(e,t,n){var i,s=Ht.to(e,en((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(u,h,d){return s.resetTo(t,u,h,d)};return a.tween=s,a},isTweening:function(e){return ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Fi(e.ease,gr.ease)),lc(gr,e||{})},config:function(e){return lc(jt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(l){return l&&!qt[l]&&!Qt[l]&&ts(t+" effect requires "+l+" plugin.")}),Aa[t]=function(l,u,h){return n(on(l),en(u||{},s),h)},a&&(Nt.prototype[t]=function(l,u,h){return this.add(Aa[t](l,wn(u)?u:(h=u)&&{},this),h)})},registerEase:function(e,t){Oe[e]=Fi(t)},parseEase:function(e,t){return arguments.length?Fi(e,t):Oe},getById:function(e){return ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nt(e),i,s;for(n.smoothChildTiming=Ot(e.smoothChildTiming),ot.remove(n),n._dp=0,n._time=n._tTime=ot._time,i=ot._first;i;)s=i._next,(t||!(!i._dur&&i instanceof gt&&i.vars.onComplete===i._targets[0]))&&Tn(n,i,i._start-i._delay),i=s;return Tn(ot,n,0),n},context:function(e,t){return e?new Lh(e,t):st},matchMedia:function(e){return new bd(e)},matchMediaRefresh:function(){return Oi.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||bo()},addEventListener:function(e,t){var n=$s[e]||($s[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=$s[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:id,wrapYoyo:rd,distribute:fh,random:ph,snap:dh,normalize:nd,getUnit:Ct,clamp:Jf,splitColor:xh,toArray:on,selector:So,mapRange:_h,pipe:ed,unitize:td,interpolate:sd,shuffle:hh},install:Qu,effects:Aa,ticker:Zt,updateRoot:Nt.updateRoot,plugins:qt,globalTimeline:ot,core:{PropTween:kt,globals:eh,Tween:gt,Timeline:Nt,Animation:ss,getCache:Ui,_removeLinkedListItem:ma,reverting:function(){return Et},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return yl=e}}};Bt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return sa[r]=gt[r]});Zt.add(Nt.updateRoot);cr=sa.to({},{duration:0});var Ad=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},wd=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ad(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Da=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(l){var u,h;if(St(s)&&(u={},Bt(s,function(d){return u[d]=1}),s=u),t){u={};for(h in s)u[h]=t(s[h]);s=u}wd(l,s)}}}},Ht=sa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,l,u;this.tween=n;for(a in t)u=e.getAttribute(a)||"",l=this.add(e,"setAttribute",(u||0)+"",t[a],i,s,0,0,a),l.op=a,l.b=u,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Et?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Da("roundProps",To),Da("modifiers"),Da("snap",dh))||sa;gt.version=Nt.version=Ht.version="3.12.7";Ju=1;Sl()&&Mr();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pc,ii,fr,Ll,Di,mc,Ul,Rd=function(){return typeof window<"u"},Xn={},Ai=180/Math.PI,dr=Math.PI/180,Xi=Math.atan2,_c=1e8,Nl=/([A-Z])/g,Cd=/(left|right|width|margin|padding|x)/i,Pd=/[\s,\(]\S/,En={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ao=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Dd=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Id=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ld=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Uh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Nh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ud=function(e,t,n){return e.style[t]=n},Nd=function(e,t,n){return e.style.setProperty(t,n)},Fd=function(e,t,n){return e._gsap[t]=n},Od=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Bd=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},kd=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},lt="transform",zt=lt+"Origin",zd=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Xn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=En[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=kn(i,l)}):this.tfm[e]=a.x?a[e]:kn(i,e),e===zt&&(this.tfm.zOrigin=a.zOrigin);else return En.transform.split(",").forEach(function(l){return r.call(n,l,t)});if(this.props.indexOf(lt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(zt,t,"")),e=lt}(s||t)&&this.props.push(e,t,s[e])},Fh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Vd=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Nl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ul(),(!s||!s.isStart)&&!n[lt]&&(Fh(n),i.zOrigin&&n[zt]&&(n[zt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Oh=function(e,t){var n={target:e,props:[],revert:Vd,save:zd};return e._gsap||Ht.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Bh,wo=function(e,t){var n=ii.createElementNS?ii.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ii.createElement(e);return n&&n.style?n:ii.createElement(e)},An=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Nl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Sr(t)||t,1)||""},gc="O,Moz,ms,Ms,Webkit".split(","),Sr=function(e,t,n){var i=t||Di,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(gc[a]+e in s););return a<0?null:(a===3?"ms":a>=0?gc[a]:"")+e},Ro=function(){Rd()&&window.document&&(pc=window,ii=pc.document,fr=ii.documentElement,Di=wo("div")||{style:{}},wo("div"),lt=Sr(lt),zt=lt+"Origin",Di.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bh=!!Sr("perspective"),Ul=Ht.core.reverting,Ll=1)},vc=function(e){var t=e.ownerSVGElement,n=wo("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),fr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),fr.removeChild(n),s},xc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},kh=function(e){var t,n;try{t=e.getBBox()}catch{t=vc(e),n=1}return t&&(t.width||t.height)||n||(t=vc(e)),t&&!t.width&&!t.x&&!t.y?{x:+xc(e,["x","cx","x1"])||0,y:+xc(e,["y","cy","y1"])||0,width:0,height:0}:t},zh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&kh(e))},Bi=function(e,t){if(t){var n=e.style,i;t in Xn&&t!==zt&&(t=lt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Nl,"-$1").toLowerCase())):n.removeAttribute(t)}},ri=function(e,t,n,i,s,a){var l=new kt(e._pt,t,n,0,1,a?Nh:Uh);return e._pt=l,l.b=i,l.e=s,e._props.push(n),l},yc={deg:1,rad:1,turn:1},Hd={grid:1,flex:1},hi=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",l=Di.style,u=Cd.test(t),h=e.tagName.toLowerCase()==="svg",d=(h?"client":"offset")+(u?"Width":"Height"),o=100,c=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||yc[i]||yc[a])return s;if(a!=="px"&&!c&&(s=r(e,t,n,"px")),p=e.getCTM&&zh(e),(f||a==="%")&&(Xn[t]||~t.indexOf("adius")))return _=p?e.getBBox()[u?"width":"height"]:e[d],dt(f?s/_*o:s/100*_);if(l[u?"width":"height"]=o+(c?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!h?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ii||!g.appendChild)&&(g=ii.body),m=g._gsap,m&&f&&m.width&&u&&m.time===Zt.time&&!m.uncache)return dt(s/m.width*o);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=o+i,_=e[d],y?e.style[t]=y:Bi(e,t)}else(f||a==="%")&&!Hd[An(g,"display")]&&(l.position=An(e,"position")),g===e&&(l.position="static"),g.appendChild(Di),_=Di[d],g.removeChild(Di),l.position="absolute";return u&&f&&(m=Ui(g),m.time=Zt.time,m.width=g[d]),dt(c?_*s/o:_&&s?o/_*s:0)},kn=function(e,t,n,i){var s;return Ll||Ro(),t in En&&t!=="transform"&&(t=En[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xn[t]&&t!=="transform"?(s=os(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:oa(An(e,zt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=aa[t]&&aa[t](e,t,n)||An(e,t)||nh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?hi(e,t,s,n)+n:s},Gd=function(e,t,n,i){if(!n||n==="none"){var s=Sr(t,e,1),a=s&&An(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=An(e,"borderTopColor"))}var l=new kt(this._pt,e.style,t,0,1,Dh),u=0,h=0,d,o,c,f,_,g,m,p,y,M,x,b;if(l.b=n,l.e=i,n+="",i+="",i==="auto"&&(g=e.style[t],e.style[t]=i,i=An(e,t)||i,g?e.style[t]=g:Bi(e,t)),d=[n,i],Mh(d),n=d[0],i=d[1],c=n.match(lr)||[],b=i.match(lr)||[],b.length){for(;o=lr.exec(i);)m=o[0],y=i.substring(u,o.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=c[h++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=hr(f,m)+x),p=parseFloat(m),M=m.substr((p+"").length),u=lr.lastIndex-M.length,M||(M=M||jt.units[t]||x,u===i.length&&(i+=M,l.e+=M)),x!==M&&(f=hi(e,t,g,M)||0),l._pt={_next:l._pt,p:y||h===1?y:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});l.c=u<i.length?i.substring(u,i.length):""}else l.r=t==="display"&&i==="none"?Nh:Uh;return Ku.test(i)&&(l.e=0),this._pt=l,l},Mc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Wd=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Mc[n]||n,t[1]=Mc[i]||i,t.join(" ")},Xd=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,l,u,h;if(s==="all"||s===!0)i.cssText="",u=1;else for(s=s.split(","),h=s.length;--h>-1;)l=s[h],Xn[l]&&(u=1,l=l==="transformOrigin"?zt:lt),Bi(n,l);u&&(Bi(n,lt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",os(n,1),a.uncache=1,Fh(i)))}},aa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new kt(e._pt,t,n,0,0,Xd);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},as=[1,0,0,1,0,0],Vh={},Hh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sc=function(e){var t=An(e,lt);return Hh(t)?as:t.substr(7).match(Zu).map(dt)},Fl=function(e,t){var n=e._gsap||Ui(e),i=e.style,s=Sc(e),a,l,u,h;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?as:s):(s===as&&!e.offsetParent&&e!==fr&&!n.svg&&(u=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,l=e.nextElementSibling,fr.appendChild(e)),s=Sc(e),u?i.display=u:Bi(e,"display"),h&&(l?a.insertBefore(e,l):a?a.appendChild(e):fr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Co=function(e,t,n,i,s,a){var l=e._gsap,u=s||Fl(e,!0),h=l.xOrigin||0,d=l.yOrigin||0,o=l.xOffset||0,c=l.yOffset||0,f=u[0],_=u[1],g=u[2],m=u[3],p=u[4],y=u[5],M=t.split(" "),x=parseFloat(M[0])||0,b=parseFloat(M[1])||0,A,w,C,v;n?u!==as&&(w=f*m-_*g)&&(C=x*(m/w)+b*(-g/w)+(g*y-m*p)/w,v=x*(-_/w)+b*(f/w)-(f*y-_*p)/w,x=C,b=v):(A=kh(e),x=A.x+(~M[0].indexOf("%")?x/100*A.width:x),b=A.y+(~(M[1]||M[0]).indexOf("%")?b/100*A.height:b)),i||i!==!1&&l.smooth?(p=x-h,y=b-d,l.xOffset=o+(p*f+y*g)-p,l.yOffset=c+(p*_+y*m)-y):l.xOffset=l.yOffset=0,l.xOrigin=x,l.yOrigin=b,l.smooth=!!i,l.origin=t,l.originIsAbsolute=!!n,e.style[zt]="0px 0px",a&&(ri(a,l,"xOrigin",h,x),ri(a,l,"yOrigin",d,b),ri(a,l,"xOffset",o,l.xOffset),ri(a,l,"yOffset",c,l.yOffset)),e.setAttribute("data-svg-origin",x+" "+b)},os=function(e,t){var n=e._gsap||new bh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",l="deg",u=getComputedStyle(e),h=An(e,zt)||"0",d,o,c,f,_,g,m,p,y,M,x,b,A,w,C,v,T,P,z,F,V,q,G,K,H,te,oe,me,Ee,$e,X,Q;return d=o=c=g=m=p=y=M=x=0,f=_=1,n.svg=!!(e.getCTM&&zh(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(i[lt]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[lt]!=="none"?u[lt]:"")),i.scale=i.rotate=i.translate="none"),w=Fl(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),h=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),Co(e,K||h,!!K||n.originIsAbsolute,n.smooth!==!1,w)),b=n.xOrigin||0,A=n.yOrigin||0,w!==as&&(P=w[0],z=w[1],F=w[2],V=w[3],d=q=w[4],o=G=w[5],w.length===6?(f=Math.sqrt(P*P+z*z),_=Math.sqrt(V*V+F*F),g=P||z?Xi(z,P)*Ai:0,y=F||V?Xi(F,V)*Ai+g:0,y&&(_*=Math.abs(Math.cos(y*dr))),n.svg&&(d-=b-(b*P+A*F),o-=A-(b*z+A*V))):(Q=w[6],$e=w[7],oe=w[8],me=w[9],Ee=w[10],X=w[11],d=w[12],o=w[13],c=w[14],C=Xi(Q,Ee),m=C*Ai,C&&(v=Math.cos(-C),T=Math.sin(-C),K=q*v+oe*T,H=G*v+me*T,te=Q*v+Ee*T,oe=q*-T+oe*v,me=G*-T+me*v,Ee=Q*-T+Ee*v,X=$e*-T+X*v,q=K,G=H,Q=te),C=Xi(-F,Ee),p=C*Ai,C&&(v=Math.cos(-C),T=Math.sin(-C),K=P*v-oe*T,H=z*v-me*T,te=F*v-Ee*T,X=V*T+X*v,P=K,z=H,F=te),C=Xi(z,P),g=C*Ai,C&&(v=Math.cos(C),T=Math.sin(C),K=P*v+z*T,H=q*v+G*T,z=z*v-P*T,G=G*v-q*T,P=K,q=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=dt(Math.sqrt(P*P+z*z+F*F)),_=dt(Math.sqrt(G*G+Q*Q)),C=Xi(q,G),y=Math.abs(C)>2e-4?C*Ai:0,x=X?1/(X<0?-X:X):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Hh(An(e,lt)),K&&e.setAttribute("transform",K))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=o-((n.yPercent=o&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-o)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=c+a,n.scaleX=dt(f),n.scaleY=dt(_),n.rotation=dt(g)+l,n.rotationX=dt(m)+l,n.rotationY=dt(p)+l,n.skewX=y+l,n.skewY=M+l,n.transformPerspective=x+a,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(i[zt]=oa(h)),n.xOffset=n.yOffset=0,n.force3D=jt.force3D,n.renderTransform=n.svg?Yd:Bh?Gh:qd,n.uncache=0,n},oa=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ia=function(e,t,n){var i=Ct(t);return dt(parseFloat(t)+parseFloat(hi(e,"x",n+"px",i)))+i},qd=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Gh(e,t)},vi="0deg",Or="0px",xi=") ",Gh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,l=n.y,u=n.z,h=n.rotation,d=n.rotationY,o=n.rotationX,c=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,M=n.zOrigin,x="",b=p==="auto"&&e&&e!==1||p===!0;if(M&&(o!==vi||d!==vi)){var A=parseFloat(d)*dr,w=Math.sin(A),C=Math.cos(A),v;A=parseFloat(o)*dr,v=Math.cos(A),a=Ia(y,a,w*v*-M),l=Ia(y,l,-Math.sin(A)*-M),u=Ia(y,u,C*v*-M+M)}m!==Or&&(x+="perspective("+m+xi),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||a!==Or||l!==Or||u!==Or)&&(x+=u!==Or||b?"translate3d("+a+", "+l+", "+u+") ":"translate("+a+", "+l+xi),h!==vi&&(x+="rotate("+h+xi),d!==vi&&(x+="rotateY("+d+xi),o!==vi&&(x+="rotateX("+o+xi),(c!==vi||f!==vi)&&(x+="skew("+c+", "+f+xi),(_!==1||g!==1)&&(x+="scale("+_+", "+g+xi),y.style[lt]=x||"translate(0, 0)"},Yd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,l=n.y,u=n.rotation,h=n.skewX,d=n.skewY,o=n.scaleX,c=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,M=parseFloat(a),x=parseFloat(l),b,A,w,C,v;u=parseFloat(u),h=parseFloat(h),d=parseFloat(d),d&&(d=parseFloat(d),h+=d,u+=d),u||h?(u*=dr,h*=dr,b=Math.cos(u)*o,A=Math.sin(u)*o,w=Math.sin(u-h)*-c,C=Math.cos(u-h)*c,h&&(d*=dr,v=Math.tan(h-d),v=Math.sqrt(1+v*v),w*=v,C*=v,d&&(v=Math.tan(d),v=Math.sqrt(1+v*v),b*=v,A*=v)),b=dt(b),A=dt(A),w=dt(w),C=dt(C)):(b=o,C=c,A=w=0),(M&&!~(a+"").indexOf("px")||x&&!~(l+"").indexOf("px"))&&(M=hi(f,"x",a,"px"),x=hi(f,"y",l,"px")),(_||g||m||p)&&(M=dt(M+_-(_*b+g*w)+m),x=dt(x+g-(_*A+g*C)+p)),(i||s)&&(v=f.getBBox(),M=dt(M+i/100*v.width),x=dt(x+s/100*v.height)),v="matrix("+b+","+A+","+w+","+C+","+M+","+x+")",f.setAttribute("transform",v),y&&(f.style[lt]=v)},$d=function(e,t,n,i,s){var a=360,l=St(s),u=parseFloat(s)*(l&&~s.indexOf("rad")?Ai:1),h=u-i,d=i+h+"deg",o,c;return l&&(o=s.split("_")[1],o==="short"&&(h%=a,h!==h%(a/2)&&(h+=h<0?a:-360)),o==="cw"&&h<0?h=(h+a*_c)%a-~~(h/a)*a:o==="ccw"&&h>0&&(h=(h-a*_c)%a-~~(h/a)*a)),e._pt=c=new kt(e._pt,t,n,i,h,Dd),c.e=d,c.u="deg",e._props.push(n),c},Tc=function(e,t){for(var n in t)e[n]=t[n];return e},Zd=function(e,t,n){var i=Tc({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,l,u,h,d,o,c,f,_;i.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),a[lt]=t,l=os(n,1),Bi(n,lt),n.setAttribute("transform",h)):(h=getComputedStyle(n)[lt],a[lt]=t,l=os(n,1),a[lt]=h);for(u in Xn)h=i[u],d=l[u],h!==d&&s.indexOf(u)<0&&(f=Ct(h),_=Ct(d),o=f!==_?hi(n,u,h,_):parseFloat(h),c=parseFloat(d),e._pt=new kt(e._pt,l,u,o,c-o,Ao),e._pt.u=_||0,e._props.push(u));Tc(l,i)};Bt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(l){return e<2?r+l:"border"+l+r});aa[e>1?"border"+r:r]=function(l,u,h,d,o){var c,f;if(arguments.length<4)return c=a.map(function(_){return kn(l,_,h)}),f=c.join(" "),f.split(c[0]).length===5?c[0]:f;c=(d+"").split(" "),f={},a.forEach(function(_,g){return f[_]=c[g]=c[g]||c[(g-1)/2|0]}),l.init(u,f,o)}});var Wh={name:"css",register:Ro,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,l=e.style,u=n.vars.startAt,h,d,o,c,f,_,g,m,p,y,M,x,b,A,w,C;Ll||Ro(),this.styles=this.styles||Oh(e),C=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(d=t[g],!(qt[g]&&Ah(g,t,n,i,e,s)))){if(f=typeof d,_=aa[g],f==="function"&&(d=d.call(n,i,e,s),f=typeof d),f==="string"&&~d.indexOf("random(")&&(d=is(d)),_)_(this,e,g,d,n)&&(w=1);else if(g.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(g)+"").trim(),d+="",oi.lastIndex=0,oi.test(h)||(m=Ct(h),p=Ct(d)),p?m!==p&&(h=hi(e,g,h,p)+p):m&&(d+=m),this.add(l,"setProperty",h,d,i,s,0,0,g),a.push(g),C.push(g,0,l[g]);else if(f!=="undefined"){if(u&&g in u?(h=typeof u[g]=="function"?u[g].call(n,i,e,s):u[g],St(h)&&~h.indexOf("random(")&&(h=is(h)),Ct(h+"")||h==="auto"||(h+=jt.units[g]||Ct(kn(e,g))||""),(h+"").charAt(1)==="="&&(h=kn(e,g))):h=kn(e,g),c=parseFloat(h),y=f==="string"&&d.charAt(1)==="="&&d.substr(0,2),y&&(d=d.substr(2)),o=parseFloat(d),g in En&&(g==="autoAlpha"&&(c===1&&kn(e,"visibility")==="hidden"&&o&&(c=0),C.push("visibility",0,l.visibility),ri(this,l,"visibility",c?"inherit":"hidden",o?"inherit":"hidden",!o)),g!=="scale"&&g!=="transform"&&(g=En[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in Xn,M){if(this.styles.save(g),x||(b=e._gsap,b.renderTransform&&!t.parseTransform||os(e,t.parseTransform),A=t.smoothOrigin!==!1&&b.smooth,x=this._pt=new kt(this._pt,l,lt,0,1,b.renderTransform,b,0,-1),x.dep=1),g==="scale")this._pt=new kt(this._pt,b,"scaleY",b.scaleY,(y?hr(b.scaleY,y+o):o)-b.scaleY||0,Ao),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(zt,0,l[zt]),d=Wd(d),b.svg?Co(e,d,0,A,0,this):(p=parseFloat(d.split(" ")[2])||0,p!==b.zOrigin&&ri(this,b,"zOrigin",b.zOrigin,p),ri(this,l,g,oa(h),oa(d)));continue}else if(g==="svgOrigin"){Co(e,d,1,A,0,this);continue}else if(g in Vh){$d(this,b,g,c,y?hr(c,y+d):d);continue}else if(g==="smoothOrigin"){ri(this,b,"smooth",b.smooth,d);continue}else if(g==="force3D"){b[g]=d;continue}else if(g==="transform"){Zd(this,d,e);continue}}else g in l||(g=Sr(g)||g);if(M||(o||o===0)&&(c||c===0)&&!Pd.test(d)&&g in l)m=(h+"").substr((c+"").length),o||(o=0),p=Ct(d)||(g in jt.units?jt.units[g]:m),m!==p&&(c=hi(e,g,h,p)),this._pt=new kt(this._pt,M?b:l,g,c,(y?hr(c,y+o):o)-c,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Ld:Ao),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=h,this._pt.r=Id);else if(g in l)Gd.call(this,e,g,h,y?y+d:d);else if(g in e)this.add(e,g,h||e[g],y?y+d:d,i,s);else if(g!=="parseTransform"){El(g,d);continue}M||(g in l?C.push(g,0,l[g]):typeof e[g]=="function"?C.push(g,2,e[g]()):C.push(g,1,h||e[g])),a.push(g)}}w&&Ih(this)},render:function(e,t){if(t.tween._time||!Ul())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:kn,aliases:En,getSetter:function(e,t,n){var i=En[t];return i&&i.indexOf(",")<0&&(t=i),t in Xn&&t!==zt&&(e._gsap.x||kn(e,"x"))?n&&mc===n?t==="scale"?Od:Fd:(mc=n||{})&&(t==="scale"?Bd:kd):e.style&&!Ml(e.style[t])?Ud:~t.indexOf("-")?Nd:Dl(e,t)},core:{_removeProperty:Bi,_getMatrix:Fl}};Ht.utils.checkPrefix=Sr;Ht.core.getStyleSaver=Oh;(function(r,e,t,n){var i=Bt(r+","+e+","+t,function(s){Xn[s]=1});Bt(e,function(s){jt.units[s]="deg",Vh[s]=1}),En[i[13]]=r+","+e,Bt(n,function(s){var a=s.split(":");En[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){jt.units[r]="px"});Ht.registerPlugin(Wh);var Kd=Ht.registerPlugin(Wh)||Ht;Kd.core.Tween;var Br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},La={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var Ec;function Xx(){return Ec||(Ec=1,function(r){(function(){var e=function(){this.init()};e.prototype={init:function(){var o=this||t;return o._counter=1e3,o._html5AudioPool=[],o.html5PoolSize=10,o._codecs={},o._howls=[],o._muted=!1,o._volume=1,o._canPlayEvent="canplaythrough",o._navigator=typeof window<"u"&&window.navigator?window.navigator:null,o.masterGain=null,o.noAudio=!1,o.usingWebAudio=!0,o.autoSuspend=!0,o.ctx=null,o.autoUnlock=!0,o._setup(),o},volume:function(o){var c=this||t;if(o=parseFloat(o),c.ctx||d(),typeof o<"u"&&o>=0&&o<=1){if(c._volume=o,c._muted)return c;c.usingWebAudio&&c.masterGain.gain.setValueAtTime(o,t.ctx.currentTime);for(var f=0;f<c._howls.length;f++)if(!c._howls[f]._webAudio)for(var _=c._howls[f]._getSoundIds(),g=0;g<_.length;g++){var m=c._howls[f]._soundById(_[g]);m&&m._node&&(m._node.volume=m._volume*o)}return c}return c._volume},mute:function(o){var c=this||t;c.ctx||d(),c._muted=o,c.usingWebAudio&&c.masterGain.gain.setValueAtTime(o?0:c._volume,t.ctx.currentTime);for(var f=0;f<c._howls.length;f++)if(!c._howls[f]._webAudio)for(var _=c._howls[f]._getSoundIds(),g=0;g<_.length;g++){var m=c._howls[f]._soundById(_[g]);m&&m._node&&(m._node.muted=o?!0:m._muted)}return c},stop:function(){for(var o=this||t,c=0;c<o._howls.length;c++)o._howls[c].stop();return o},unload:function(){for(var o=this||t,c=o._howls.length-1;c>=0;c--)o._howls[c].unload();return o.usingWebAudio&&o.ctx&&typeof o.ctx.close<"u"&&(o.ctx.close(),o.ctx=null,d()),o},codecs:function(o){return(this||t)._codecs[o.replace(/^x-/,"")]},_setup:function(){var o=this||t;if(o.state=o.ctx&&o.ctx.state||"suspended",o._autoSuspend(),!o.usingWebAudio)if(typeof Audio<"u")try{var c=new Audio;typeof c.oncanplaythrough>"u"&&(o._canPlayEvent="canplay")}catch{o.noAudio=!0}else o.noAudio=!0;try{var c=new Audio;c.muted&&(o.noAudio=!0)}catch{}return o.noAudio||o._setupCodecs(),o},_setupCodecs:function(){var o=this||t,c=null;try{c=typeof Audio<"u"?new Audio:null}catch{return o}if(!c||typeof c.canPlayType!="function")return o;var f=c.canPlayType("audio/mpeg;").replace(/^no$/,""),_=o._navigator?o._navigator.userAgent:"",g=_.match(/OPR\/(\d+)/g),m=g&&parseInt(g[0].split("/")[1],10)<33,p=_.indexOf("Safari")!==-1&&_.indexOf("Chrome")===-1,y=_.match(/Version\/(.*?) /),M=p&&y&&parseInt(y[1],10)<15;return o._codecs={mp3:!!(!m&&(f||c.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(c.canPlayType('audio/wav; codecs="1"')||c.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!c.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!c.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(c.canPlayType("audio/x-m4a;")||c.canPlayType("audio/m4a;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(c.canPlayType("audio/x-m4b;")||c.canPlayType("audio/m4b;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(c.canPlayType("audio/x-mp4;")||c.canPlayType("audio/mp4;")||c.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!M&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!M&&c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!c.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(c.canPlayType("audio/x-flac;")||c.canPlayType("audio/flac;")).replace(/^no$/,"")},o},_unlockAudio:function(){var o=this||t;if(!(o._audioUnlocked||!o.ctx)){o._audioUnlocked=!1,o.autoUnlock=!1,!o._mobileUnloaded&&o.ctx.sampleRate!==44100&&(o._mobileUnloaded=!0,o.unload()),o._scratchBuffer=o.ctx.createBuffer(1,1,22050);var c=function(f){for(;o._html5AudioPool.length<o.html5PoolSize;)try{var _=new Audio;_._unlocked=!0,o._releaseHtml5Audio(_)}catch{o.noAudio=!0;break}for(var g=0;g<o._howls.length;g++)if(!o._howls[g]._webAudio)for(var m=o._howls[g]._getSoundIds(),p=0;p<m.length;p++){var y=o._howls[g]._soundById(m[p]);y&&y._node&&!y._node._unlocked&&(y._node._unlocked=!0,y._node.load())}o._autoResume();var M=o.ctx.createBufferSource();M.buffer=o._scratchBuffer,M.connect(o.ctx.destination),typeof M.start>"u"?M.noteOn(0):M.start(0),typeof o.ctx.resume=="function"&&o.ctx.resume(),M.onended=function(){M.disconnect(0),o._audioUnlocked=!0,document.removeEventListener("touchstart",c,!0),document.removeEventListener("touchend",c,!0),document.removeEventListener("click",c,!0),document.removeEventListener("keydown",c,!0);for(var x=0;x<o._howls.length;x++)o._howls[x]._emit("unlock")}};return document.addEventListener("touchstart",c,!0),document.addEventListener("touchend",c,!0),document.addEventListener("click",c,!0),document.addEventListener("keydown",c,!0),o}},_obtainHtml5Audio:function(){var o=this||t;if(o._html5AudioPool.length)return o._html5AudioPool.pop();var c=new Audio().play();return c&&typeof Promise<"u"&&(c instanceof Promise||typeof c.then=="function")&&c.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(o){var c=this||t;return o._unlocked&&c._html5AudioPool.push(o),c},_autoSuspend:function(){var o=this;if(!(!o.autoSuspend||!o.ctx||typeof o.ctx.suspend>"u"||!t.usingWebAudio)){for(var c=0;c<o._howls.length;c++)if(o._howls[c]._webAudio){for(var f=0;f<o._howls[c]._sounds.length;f++)if(!o._howls[c]._sounds[f]._paused)return o}return o._suspendTimer&&clearTimeout(o._suspendTimer),o._suspendTimer=setTimeout(function(){if(o.autoSuspend){o._suspendTimer=null,o.state="suspending";var _=function(){o.state="suspended",o._resumeAfterSuspend&&(delete o._resumeAfterSuspend,o._autoResume())};o.ctx.suspend().then(_,_)}},3e4),o}},_autoResume:function(){var o=this;if(!(!o.ctx||typeof o.ctx.resume>"u"||!t.usingWebAudio))return o.state==="running"&&o.ctx.state!=="interrupted"&&o._suspendTimer?(clearTimeout(o._suspendTimer),o._suspendTimer=null):o.state==="suspended"||o.state==="running"&&o.ctx.state==="interrupted"?(o.ctx.resume().then(function(){o.state="running";for(var c=0;c<o._howls.length;c++)o._howls[c]._emit("resume")}),o._suspendTimer&&(clearTimeout(o._suspendTimer),o._suspendTimer=null)):o.state==="suspending"&&(o._resumeAfterSuspend=!0),o}};var t=new e,n=function(o){var c=this;if(!o.src||o.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}c.init(o)};n.prototype={init:function(o){var c=this;return t.ctx||d(),c._autoplay=o.autoplay||!1,c._format=typeof o.format!="string"?o.format:[o.format],c._html5=o.html5||!1,c._muted=o.mute||!1,c._loop=o.loop||!1,c._pool=o.pool||5,c._preload=typeof o.preload=="boolean"||o.preload==="metadata"?o.preload:!0,c._rate=o.rate||1,c._sprite=o.sprite||{},c._src=typeof o.src!="string"?o.src:[o.src],c._volume=o.volume!==void 0?o.volume:1,c._xhr={method:o.xhr&&o.xhr.method?o.xhr.method:"GET",headers:o.xhr&&o.xhr.headers?o.xhr.headers:null,withCredentials:o.xhr&&o.xhr.withCredentials?o.xhr.withCredentials:!1},c._duration=0,c._state="unloaded",c._sounds=[],c._endTimers={},c._queue=[],c._playLock=!1,c._onend=o.onend?[{fn:o.onend}]:[],c._onfade=o.onfade?[{fn:o.onfade}]:[],c._onload=o.onload?[{fn:o.onload}]:[],c._onloaderror=o.onloaderror?[{fn:o.onloaderror}]:[],c._onplayerror=o.onplayerror?[{fn:o.onplayerror}]:[],c._onpause=o.onpause?[{fn:o.onpause}]:[],c._onplay=o.onplay?[{fn:o.onplay}]:[],c._onstop=o.onstop?[{fn:o.onstop}]:[],c._onmute=o.onmute?[{fn:o.onmute}]:[],c._onvolume=o.onvolume?[{fn:o.onvolume}]:[],c._onrate=o.onrate?[{fn:o.onrate}]:[],c._onseek=o.onseek?[{fn:o.onseek}]:[],c._onunlock=o.onunlock?[{fn:o.onunlock}]:[],c._onresume=[],c._webAudio=t.usingWebAudio&&!c._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(c),c._autoplay&&c._queue.push({event:"play",action:function(){c.play()}}),c._preload&&c._preload!=="none"&&c.load(),c},load:function(){var o=this,c=null;if(t.noAudio){o._emit("loaderror",null,"No audio support.");return}typeof o._src=="string"&&(o._src=[o._src]);for(var f=0;f<o._src.length;f++){var _,g;if(o._format&&o._format[f])_=o._format[f];else{if(g=o._src[f],typeof g!="string"){o._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}_=/^data:audio\/([^;,]+);/i.exec(g),_||(_=/\.([^.]+)$/.exec(g.split("?",1)[0])),_&&(_=_[1].toLowerCase())}if(_||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),_&&t.codecs(_)){c=o._src[f];break}}if(!c){o._emit("loaderror",null,"No codec support for selected audio sources.");return}return o._src=c,o._state="loading",window.location.protocol==="https:"&&c.slice(0,5)==="http:"&&(o._html5=!0,o._webAudio=!1),new i(o),o._webAudio&&a(o),o},play:function(o,c){var f=this,_=null;if(typeof o=="number")_=o,o=null;else{if(typeof o=="string"&&f._state==="loaded"&&!f._sprite[o])return null;if(typeof o>"u"&&(o="__default",!f._playLock)){for(var g=0,m=0;m<f._sounds.length;m++)f._sounds[m]._paused&&!f._sounds[m]._ended&&(g++,_=f._sounds[m]._id);g===1?o=null:_=null}}var p=_?f._soundById(_):f._inactiveSound();if(!p)return null;if(_&&!o&&(o=p._sprite||"__default"),f._state!=="loaded"){p._sprite=o,p._ended=!1;var y=p._id;return f._queue.push({event:"play",action:function(){f.play(y)}}),y}if(_&&!p._paused)return c||f._loadQueue("play"),p._id;f._webAudio&&t._autoResume();var M=Math.max(0,p._seek>0?p._seek:f._sprite[o][0]/1e3),x=Math.max(0,(f._sprite[o][0]+f._sprite[o][1])/1e3-M),b=x*1e3/Math.abs(p._rate),A=f._sprite[o][0]/1e3,w=(f._sprite[o][0]+f._sprite[o][1])/1e3;p._sprite=o,p._ended=!1;var C=function(){p._paused=!1,p._seek=M,p._start=A,p._stop=w,p._loop=!!(p._loop||f._sprite[o][2])};if(M>=w){f._ended(p);return}var v=p._node;if(f._webAudio){var T=function(){f._playLock=!1,C(),f._refreshBuffer(p);var V=p._muted||f._muted?0:p._volume;v.gain.setValueAtTime(V,t.ctx.currentTime),p._playStart=t.ctx.currentTime,typeof v.bufferSource.start>"u"?p._loop?v.bufferSource.noteGrainOn(0,M,86400):v.bufferSource.noteGrainOn(0,M,x):p._loop?v.bufferSource.start(0,M,86400):v.bufferSource.start(0,M,x),b!==1/0&&(f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),b)),c||setTimeout(function(){f._emit("play",p._id),f._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?T():(f._playLock=!0,f.once("resume",T),f._clearTimer(p._id))}else{var P=function(){v.currentTime=M,v.muted=p._muted||f._muted||t._muted||v.muted,v.volume=p._volume*t.volume(),v.playbackRate=p._rate;try{var V=v.play();if(V&&typeof Promise<"u"&&(V instanceof Promise||typeof V.then=="function")?(f._playLock=!0,C(),V.then(function(){f._playLock=!1,v._unlocked=!0,c?f._loadQueue():f._emit("play",p._id)}).catch(function(){f._playLock=!1,f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):c||(f._playLock=!1,C(),f._emit("play",p._id)),v.playbackRate=p._rate,v.paused){f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}o!=="__default"||p._loop?f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),b):(f._endTimers[p._id]=function(){f._ended(p),v.removeEventListener("ended",f._endTimers[p._id],!1)},v.addEventListener("ended",f._endTimers[p._id],!1))}catch(q){f._emit("playerror",p._id,q)}};v.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(v.src=f._src,v.load());var z=window&&window.ejecta||!v.readyState&&t._navigator.isCocoonJS;if(v.readyState>=3||z)P();else{f._playLock=!0,f._state="loading";var F=function(){f._state="loaded",P(),v.removeEventListener(t._canPlayEvent,F,!1)};v.addEventListener(t._canPlayEvent,F,!1),f._clearTimer(p._id)}}return p._id},pause:function(o){var c=this;if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"pause",action:function(){c.pause(o)}}),c;for(var f=c._getSoundIds(o),_=0;_<f.length;_++){c._clearTimer(f[_]);var g=c._soundById(f[_]);if(g&&!g._paused&&(g._seek=c.seek(f[_]),g._rateSeek=0,g._paused=!0,c._stopFade(f[_]),g._node))if(c._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),c._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||c._emit("pause",g?g._id:null)}return c},stop:function(o,c){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(o)}}),f;for(var _=f._getSoundIds(o),g=0;g<_.length;g++){f._clearTimer(_[g]);var m=f._soundById(_[g]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,f._stopFade(_[g]),m._node&&(f._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),f._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&f._clearSound(m._node))),c||f._emit("stop",m._id))}return f},mute:function(o,c){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(o,c)}}),f;if(typeof c>"u")if(typeof o=="boolean")f._muted=o;else return f._muted;for(var _=f._getSoundIds(c),g=0;g<_.length;g++){var m=f._soundById(_[g]);m&&(m._muted=o,m._interval&&f._stopFade(m._id),f._webAudio&&m._node?m._node.gain.setValueAtTime(o?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:o),f._emit("mute",m._id))}return f},volume:function(){var o=this,c=arguments,f,_;if(c.length===0)return o._volume;if(c.length===1||c.length===2&&typeof c[1]>"u"){var g=o._getSoundIds(),m=g.indexOf(c[0]);m>=0?_=parseInt(c[0],10):f=parseFloat(c[0])}else c.length>=2&&(f=parseFloat(c[0]),_=parseInt(c[1],10));var p;if(typeof f<"u"&&f>=0&&f<=1){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"volume",action:function(){o.volume.apply(o,c)}}),o;typeof _>"u"&&(o._volume=f),_=o._getSoundIds(_);for(var y=0;y<_.length;y++)p=o._soundById(_[y]),p&&(p._volume=f,c[2]||o._stopFade(_[y]),o._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(f,t.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=f*t.volume()),o._emit("volume",p._id))}else return p=_?o._soundById(_):o._sounds[0],p?p._volume:0;return o},fade:function(o,c,f,_){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(o,c,f,_)}}),g;o=Math.min(Math.max(0,parseFloat(o)),1),c=Math.min(Math.max(0,parseFloat(c)),1),f=parseFloat(f),g.volume(o,_);for(var m=g._getSoundIds(_),p=0;p<m.length;p++){var y=g._soundById(m[p]);if(y){if(_||g._stopFade(m[p]),g._webAudio&&!y._muted){var M=t.ctx.currentTime,x=M+f/1e3;y._volume=o,y._node.gain.setValueAtTime(o,M),y._node.gain.linearRampToValueAtTime(c,x)}g._startFadeInterval(y,o,c,f,m[p],typeof _>"u")}}return g},_startFadeInterval:function(o,c,f,_,g,m){var p=this,y=c,M=f-c,x=Math.abs(M/.01),b=Math.max(4,x>0?_/x:_),A=Date.now();o._fadeTo=f,o._interval=setInterval(function(){var w=(Date.now()-A)/_;A=Date.now(),y+=M*w,y=Math.round(y*100)/100,M<0?y=Math.max(f,y):y=Math.min(f,y),p._webAudio?o._volume=y:p.volume(y,o._id,!0),m&&(p._volume=y),(f<c&&y<=f||f>c&&y>=f)&&(clearInterval(o._interval),o._interval=null,o._fadeTo=null,p.volume(f,o._id),p._emit("fade",o._id))},b)},_stopFade:function(o){var c=this,f=c._soundById(o);return f&&f._interval&&(c._webAudio&&f._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(f._interval),f._interval=null,c.volume(f._fadeTo,o),f._fadeTo=null,c._emit("fade",o)),c},loop:function(){var o=this,c=arguments,f,_,g;if(c.length===0)return o._loop;if(c.length===1)if(typeof c[0]=="boolean")f=c[0],o._loop=f;else return g=o._soundById(parseInt(c[0],10)),g?g._loop:!1;else c.length===2&&(f=c[0],_=parseInt(c[1],10));for(var m=o._getSoundIds(_),p=0;p<m.length;p++)g=o._soundById(m[p]),g&&(g._loop=f,o._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=f,f&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,o.playing(m[p])&&(o.pause(m[p],!0),o.play(m[p],!0)))));return o},rate:function(){var o=this,c=arguments,f,_;if(c.length===0)_=o._sounds[0]._id;else if(c.length===1){var g=o._getSoundIds(),m=g.indexOf(c[0]);m>=0?_=parseInt(c[0],10):f=parseFloat(c[0])}else c.length===2&&(f=parseFloat(c[0]),_=parseInt(c[1],10));var p;if(typeof f=="number"){if(o._state!=="loaded"||o._playLock)return o._queue.push({event:"rate",action:function(){o.rate.apply(o,c)}}),o;typeof _>"u"&&(o._rate=f),_=o._getSoundIds(_);for(var y=0;y<_.length;y++)if(p=o._soundById(_[y]),p){o.playing(_[y])&&(p._rateSeek=o.seek(_[y]),p._playStart=o._webAudio?t.ctx.currentTime:p._playStart),p._rate=f,o._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(f,t.ctx.currentTime):p._node&&(p._node.playbackRate=f);var M=o.seek(_[y]),x=(o._sprite[p._sprite][0]+o._sprite[p._sprite][1])/1e3-M,b=x*1e3/Math.abs(p._rate);(o._endTimers[_[y]]||!p._paused)&&(o._clearTimer(_[y]),o._endTimers[_[y]]=setTimeout(o._ended.bind(o,p),b)),o._emit("rate",p._id)}}else return p=o._soundById(_),p?p._rate:o._rate;return o},seek:function(){var o=this,c=arguments,f,_;if(c.length===0)o._sounds.length&&(_=o._sounds[0]._id);else if(c.length===1){var g=o._getSoundIds(),m=g.indexOf(c[0]);m>=0?_=parseInt(c[0],10):o._sounds.length&&(_=o._sounds[0]._id,f=parseFloat(c[0]))}else c.length===2&&(f=parseFloat(c[0]),_=parseInt(c[1],10));if(typeof _>"u")return 0;if(typeof f=="number"&&(o._state!=="loaded"||o._playLock))return o._queue.push({event:"seek",action:function(){o.seek.apply(o,c)}}),o;var p=o._soundById(_);if(p)if(typeof f=="number"&&f>=0){var y=o.playing(_);y&&o.pause(_,!0),p._seek=f,p._ended=!1,o._clearTimer(_),!o._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=f);var M=function(){y&&o.play(_,!0),o._emit("seek",_)};if(y&&!o._webAudio){var x=function(){o._playLock?setTimeout(x,0):M()};setTimeout(x,0)}else M()}else if(o._webAudio){var b=o.playing(_)?t.ctx.currentTime-p._playStart:0,A=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(A+b*Math.abs(p._rate))}else return p._node.currentTime;return o},playing:function(o){var c=this;if(typeof o=="number"){var f=c._soundById(o);return f?!f._paused:!1}for(var _=0;_<c._sounds.length;_++)if(!c._sounds[_]._paused)return!0;return!1},duration:function(o){var c=this,f=c._duration,_=c._soundById(o);return _&&(f=c._sprite[_._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var o=this,c=o._sounds,f=0;f<c.length;f++)c[f]._paused||o.stop(c[f]._id),o._webAudio||(o._clearSound(c[f]._node),c[f]._node.removeEventListener("error",c[f]._errorFn,!1),c[f]._node.removeEventListener(t._canPlayEvent,c[f]._loadFn,!1),c[f]._node.removeEventListener("ended",c[f]._endFn,!1),t._releaseHtml5Audio(c[f]._node)),delete c[f]._node,o._clearTimer(c[f]._id);var _=t._howls.indexOf(o);_>=0&&t._howls.splice(_,1);var g=!0;for(f=0;f<t._howls.length;f++)if(t._howls[f]._src===o._src||o._src.indexOf(t._howls[f]._src)>=0){g=!1;break}return g&&delete s[o._src],t.noAudio=!1,o._state="unloaded",o._sounds=[],o=null,null},on:function(o,c,f,_){var g=this,m=g["_on"+o];return typeof c=="function"&&m.push(_?{id:f,fn:c,once:_}:{id:f,fn:c}),g},off:function(o,c,f){var _=this,g=_["_on"+o],m=0;if(typeof c=="number"&&(f=c,c=null),c||f)for(m=0;m<g.length;m++){var p=f===g[m].id;if(c===g[m].fn&&p||!c&&p){g.splice(m,1);break}}else if(o)_["_on"+o]=[];else{var y=Object.keys(_);for(m=0;m<y.length;m++)y[m].indexOf("_on")===0&&Array.isArray(_[y[m]])&&(_[y[m]]=[])}return _},once:function(o,c,f){var _=this;return _.on(o,c,f,1),_},_emit:function(o,c,f){for(var _=this,g=_["_on"+o],m=g.length-1;m>=0;m--)(!g[m].id||g[m].id===c||o==="load")&&(setTimeout((function(p){p.call(this,c,f)}).bind(_,g[m].fn),0),g[m].once&&_.off(o,g[m].fn,g[m].id));return _._loadQueue(o),_},_loadQueue:function(o){var c=this;if(c._queue.length>0){var f=c._queue[0];f.event===o&&(c._queue.shift(),c._loadQueue()),o||f.action()}return c},_ended:function(o){var c=this,f=o._sprite;if(!c._webAudio&&o._node&&!o._node.paused&&!o._node.ended&&o._node.currentTime<o._stop)return setTimeout(c._ended.bind(c,o),100),c;var _=!!(o._loop||c._sprite[f][2]);if(c._emit("end",o._id),!c._webAudio&&_&&c.stop(o._id,!0).play(o._id),c._webAudio&&_){c._emit("play",o._id),o._seek=o._start||0,o._rateSeek=0,o._playStart=t.ctx.currentTime;var g=(o._stop-o._start)*1e3/Math.abs(o._rate);c._endTimers[o._id]=setTimeout(c._ended.bind(c,o),g)}return c._webAudio&&!_&&(o._paused=!0,o._ended=!0,o._seek=o._start||0,o._rateSeek=0,c._clearTimer(o._id),c._cleanBuffer(o._node),t._autoSuspend()),!c._webAudio&&!_&&c.stop(o._id,!0),c},_clearTimer:function(o){var c=this;if(c._endTimers[o]){if(typeof c._endTimers[o]!="function")clearTimeout(c._endTimers[o]);else{var f=c._soundById(o);f&&f._node&&f._node.removeEventListener("ended",c._endTimers[o],!1)}delete c._endTimers[o]}return c},_soundById:function(o){for(var c=this,f=0;f<c._sounds.length;f++)if(o===c._sounds[f]._id)return c._sounds[f];return null},_inactiveSound:function(){var o=this;o._drain();for(var c=0;c<o._sounds.length;c++)if(o._sounds[c]._ended)return o._sounds[c].reset();return new i(o)},_drain:function(){var o=this,c=o._pool,f=0,_=0;if(!(o._sounds.length<c)){for(_=0;_<o._sounds.length;_++)o._sounds[_]._ended&&f++;for(_=o._sounds.length-1;_>=0;_--){if(f<=c)return;o._sounds[_]._ended&&(o._webAudio&&o._sounds[_]._node&&o._sounds[_]._node.disconnect(0),o._sounds.splice(_,1),f--)}}},_getSoundIds:function(o){var c=this;if(typeof o>"u"){for(var f=[],_=0;_<c._sounds.length;_++)f.push(c._sounds[_]._id);return f}else return[o]},_refreshBuffer:function(o){var c=this;return o._node.bufferSource=t.ctx.createBufferSource(),o._node.bufferSource.buffer=s[c._src],o._panner?o._node.bufferSource.connect(o._panner):o._node.bufferSource.connect(o._node),o._node.bufferSource.loop=o._loop,o._loop&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop||0),o._node.bufferSource.playbackRate.setValueAtTime(o._rate,t.ctx.currentTime),c},_cleanBuffer:function(o){var c=this,f=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!o.bufferSource)return c;if(t._scratchBuffer&&o.bufferSource&&(o.bufferSource.onended=null,o.bufferSource.disconnect(0),f))try{o.bufferSource.buffer=t._scratchBuffer}catch{}return o.bufferSource=null,c},_clearSound:function(o){var c=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);c||(o.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(o){this._parent=o,this.init()};i.prototype={init:function(){var o=this,c=o._parent;return o._muted=c._muted,o._loop=c._loop,o._volume=c._volume,o._rate=c._rate,o._seek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++t._counter,c._sounds.push(o),o.create(),o},create:function(){var o=this,c=o._parent,f=t._muted||o._muted||o._parent._muted?0:o._volume;return c._webAudio?(o._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),o._node.gain.setValueAtTime(f,t.ctx.currentTime),o._node.paused=!0,o._node.connect(t.masterGain)):t.noAudio||(o._node=t._obtainHtml5Audio(),o._errorFn=o._errorListener.bind(o),o._node.addEventListener("error",o._errorFn,!1),o._loadFn=o._loadListener.bind(o),o._node.addEventListener(t._canPlayEvent,o._loadFn,!1),o._endFn=o._endListener.bind(o),o._node.addEventListener("ended",o._endFn,!1),o._node.src=c._src,o._node.preload=c._preload===!0?"auto":c._preload,o._node.volume=f*t.volume(),o._node.load()),o},reset:function(){var o=this,c=o._parent;return o._muted=c._muted,o._loop=c._loop,o._volume=c._volume,o._rate=c._rate,o._seek=0,o._rateSeek=0,o._paused=!0,o._ended=!0,o._sprite="__default",o._id=++t._counter,o},_errorListener:function(){var o=this;o._parent._emit("loaderror",o._id,o._node.error?o._node.error.code:0),o._node.removeEventListener("error",o._errorFn,!1)},_loadListener:function(){var o=this,c=o._parent;c._duration=Math.ceil(o._node.duration*10)/10,Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue()),o._node.removeEventListener(t._canPlayEvent,o._loadFn,!1)},_endListener:function(){var o=this,c=o._parent;c._duration===1/0&&(c._duration=Math.ceil(o._node.duration*10)/10,c._sprite.__default[1]===1/0&&(c._sprite.__default[1]=c._duration*1e3),c._ended(o)),o._node.removeEventListener("ended",o._endFn,!1)}};var s={},a=function(o){var c=o._src;if(s[c]){o._duration=s[c].duration,h(o);return}if(/^data:[^;]+;base64,/.test(c)){for(var f=atob(c.split(",")[1]),_=new Uint8Array(f.length),g=0;g<f.length;++g)_[g]=f.charCodeAt(g);u(_.buffer,o)}else{var m=new XMLHttpRequest;m.open(o._xhr.method,c,!0),m.withCredentials=o._xhr.withCredentials,m.responseType="arraybuffer",o._xhr.headers&&Object.keys(o._xhr.headers).forEach(function(p){m.setRequestHeader(p,o._xhr.headers[p])}),m.onload=function(){var p=(m.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){o._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}u(m.response,o)},m.onerror=function(){o._webAudio&&(o._html5=!0,o._webAudio=!1,o._sounds=[],delete s[c],o.load())},l(m)}},l=function(o){try{o.send()}catch{o.onerror()}},u=function(o,c){var f=function(){c._emit("loaderror",null,"Decoding audio data failed.")},_=function(g){g&&c._sounds.length>0?(s[c._src]=g,h(c,g)):f()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(o).then(_).catch(f):t.ctx.decodeAudioData(o,_,f)},h=function(o,c){c&&!o._duration&&(o._duration=c.duration),Object.keys(o._sprite).length===0&&(o._sprite={__default:[0,o._duration*1e3]}),o._state!=="loaded"&&(o._state="loaded",o._emit("load"),o._loadQueue())},d=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var o=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),c=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=c?parseInt(c[1],10):null;if(o&&f&&f<9){var _=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!_&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};r.Howler=t,r.Howl=n,typeof Br<"u"?(Br.HowlerGlobal=e,Br.Howler=t,Br.Howl=n,Br.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(n=typeof n!="number"?s._pos[1]:n,i=typeof i!="number"?s._pos[2]:i,typeof t=="number")s._pos=[t,n,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(t,n,i,s,a,l){var u=this;if(!u.ctx||!u.ctx.listener)return u;var h=u._orientation;if(n=typeof n!="number"?h[1]:n,i=typeof i!="number"?h[2]:i,s=typeof s!="number"?h[3]:s,a=typeof a!="number"?h[4]:a,l=typeof l!="number"?h[5]:l,typeof t=="number")u._orientation=[t,n,i,s,a,l],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(l,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(t,n,i,s,a,l);else return h;return u},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var a=i._getSoundIds(n),l=0;l<a.length;l++){var u=i._soundById(a[l]);if(u)if(typeof t=="number")u._stereo=t,u._pos=[t,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&e(u,s),s==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(t,0,0):u._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",u._id);else return u._stereo}return i},Howl.prototype.pos=function(t,n,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(t,n,i,s)}}),a;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof t=="number")a._pos=[t,n,i];else return a._pos;for(var l=a._getSoundIds(s),u=0;u<l.length;u++){var h=a._soundById(l[u]);if(h)if(typeof t=="number")h._pos=[t,n,i],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setPosition(t,n,i)),a._emit("pos",h._id);else return h._pos}return a},Howl.prototype.orientation=function(t,n,i,s){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(t,n,i,s)}}),a;if(n=typeof n!="number"?a._orientation[1]:n,i=typeof i!="number"?a._orientation[2]:i,typeof s>"u")if(typeof t=="number")a._orientation=[t,n,i];else return a._orientation;for(var l=a._getSoundIds(s),u=0;u<l.length;u++){var h=a._soundById(l[u]);if(h)if(typeof t=="number")h._orientation=[t,n,i],h._node&&(h._panner||(h._pos||(h._pos=a._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,i)),a._emit("orientation",h._id);else return h._orientation}return a},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,s,a;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return a=t._soundById(parseInt(n[0],10)),a?a._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],s=parseInt(n[1],10));for(var l=t._getSoundIds(s),u=0;u<l.length;u++)if(a=t._soundById(l[u]),a){var h=a._pannerAttr;h={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:h.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:h.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:h.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:h.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:h.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:h.panningModel};var d=a._panner;d||(a._pos||(a._pos=t._pos||[0,0,-.5]),e(a,"spatial"),d=a._panner),d.coneInnerAngle=h.coneInnerAngle,d.coneOuterAngle=h.coneOuterAngle,d.coneOuterGain=h.coneOuterGain,d.distanceModel=h.distanceModel,d.maxDistance=h.maxDistance,d.refDistance=h.refDistance,d.rolloffFactor=h.rolloffFactor,d.panningModel=h.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()}(La)),La}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="172",qx={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yx={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jd=0,bc=1,Jd=2,Xh=1,Qd=2,On=3,fi=0,Vt=1,zn=2,li=0,pr=1,Ac=2,wc=3,Rc=4,ep=5,Ci=100,tp=101,np=102,ip=103,rp=104,sp=200,ap=201,op=202,lp=203,Po=204,Do=205,cp=206,up=207,hp=208,fp=209,dp=210,pp=211,mp=212,_p=213,gp=214,Io=0,Lo=1,Uo=2,Tr=3,No=4,Fo=5,Oo=6,Bo=7,qh=0,vp=1,xp=2,ci=0,yp=1,Mp=2,Sp=3,Tp=4,Ep=5,bp=6,Ap=7,Cc="attached",wp="detached",Yh=300,Er=301,br=302,ko=303,zo=304,va=306,Vo=1e3,Ii=1001,Ho=1002,Jt=1003,Rp=1004,gs=1005,ln=1006,Ua=1007,Li=1008,qn=1009,$h=1010,Zh=1011,ls=1012,Bl=1013,ki=1014,xn=1015,hs=1016,kl=1017,zl=1018,Ar=1020,Kh=35902,jh=1021,Jh=1022,cn=1023,Qh=1024,ef=1025,mr=1026,wr=1027,Vl=1028,Hl=1029,tf=1030,Gl=1031,Wl=1033,Zs=33776,Ks=33777,js=33778,Js=33779,Go=35840,Wo=35841,Xo=35842,qo=35843,Yo=36196,$o=37492,Zo=37496,Ko=37808,jo=37809,Jo=37810,Qo=37811,el=37812,tl=37813,nl=37814,il=37815,rl=37816,sl=37817,al=37818,ol=37819,ll=37820,cl=37821,Qs=36492,ul=36494,hl=36495,nf=36283,fl=36284,dl=36285,pl=36286,la=2300,ml=2301,Na=2302,Pc=2400,Dc=2401,Ic=2402,Cp=2500,$x=0,Zx=1,Kx=2,Pp=3200,Dp=3201,rf=0,Ip=1,ti="",Yt="srgb",Rr="srgb-linear",ca="linear",Qe="srgb",qi=7680,Lc=519,Lp=512,Up=513,Np=514,sf=515,Fp=516,Op=517,Bp=518,kp=519,_l=35044,Uc="300 es",Vn=2e3,ua=2001;class Hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nc=1234567;const Qr=Math.PI/180,Cr=180/Math.PI;function yn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[r&255]+wt[r>>8&255]+wt[r>>16&255]+wt[r>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Le(r,e,t){return Math.max(e,Math.min(t,r))}function Xl(r,e){return(r%e+e)%e}function zp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Vp(r,e,t){return r!==e?(t-r)/(e-r):0}function es(r,e,t){return(1-t)*r+t*e}function Hp(r,e,t,n){return es(r,e,1-Math.exp(-t*n))}function Gp(r,e=1){return e-Math.abs(Xl(r,e*2)-e)}function Wp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Xp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function qp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Yp(r,e){return r+Math.random()*(e-r)}function $p(r){return r*(.5-Math.random())}function Zp(r){r!==void 0&&(Nc=r);let e=Nc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kp(r){return r*Qr}function jp(r){return r*Cr}function Jp(r){return(r&r-1)===0&&r!==0}function Qp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function em(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tm(r,e,t,n,i){const s=Math.cos,a=Math.sin,l=s(t/2),u=a(t/2),h=s((e+n)/2),d=a((e+n)/2),o=s((e-n)/2),c=a((e-n)/2),f=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(l*d,u*o,u*c,l*h);break;case"YZY":r.set(u*c,l*d,u*o,l*h);break;case"ZXZ":r.set(u*o,u*c,l*d,l*h);break;case"XZX":r.set(l*d,u*_,u*f,l*h);break;case"YXY":r.set(u*f,l*d,u*_,l*h);break;case"ZYZ":r.set(u*_,u*f,l*d,l*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Je(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const jx={DEG2RAD:Qr,RAD2DEG:Cr,generateUUID:yn,clamp:Le,euclideanModulo:Xl,mapLinear:zp,inverseLerp:Vp,lerp:es,damp:Hp,pingpong:Gp,smoothstep:Wp,smootherstep:Xp,randInt:qp,randFloat:Yp,randFloatSpread:$p,seededRandom:Zp,degToRad:Kp,radToDeg:jp,isPowerOfTwo:Jp,ceilPowerOfTwo:Qp,floorPowerOfTwo:em,setQuaternionFromProperEuler:tm,normalize:Je,denormalize:gn};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Le(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,t,n,i,s,a,l,u,h){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,l,u,h)}set(e,t,n,i,s,a,l,u,h){const d=this.elements;return d[0]=e,d[1]=i,d[2]=l,d[3]=t,d[4]=s,d[5]=u,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],l=n[3],u=n[6],h=n[1],d=n[4],o=n[7],c=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],M=i[4],x=i[7],b=i[2],A=i[5],w=i[8];return s[0]=a*g+l*y+u*b,s[3]=a*m+l*M+u*A,s[6]=a*p+l*x+u*w,s[1]=h*g+d*y+o*b,s[4]=h*m+d*M+o*A,s[7]=h*p+d*x+o*w,s[2]=c*g+f*y+_*b,s[5]=c*m+f*M+_*A,s[8]=c*p+f*x+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],d=e[8];return t*a*d-t*l*h-n*s*d+n*l*u+i*s*h-i*a*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],d=e[8],o=d*a-l*h,c=l*u-d*s,f=h*s-a*u,_=t*o+n*c+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=o*g,e[1]=(i*h-d*n)*g,e[2]=(l*n-i*a)*g,e[3]=c*g,e[4]=(d*t-i*u)*g,e[5]=(i*s-l*t)*g,e[6]=f*g,e[7]=(n*u-h*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,l){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*l)+a+e,-i*h,i*u,-i*(-h*a+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new Pe;function af(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function cs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nm(){const r=cs("canvas");return r.style.display="block",r}const Fc={};function or(r){r in Fc||(Fc[r]=!0,console.warn(r))}function im(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function rm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sm(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Oc=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bc=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){const r={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Qe&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ti?ca:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Rr]:{primaries:e,whitePoint:n,transfer:ca,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Oc,fromXYZ:Bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),r}const Xe=am();function Hn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _r(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Yi;class om{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=cs("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lm=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,l=i.length;a<l;a++)i[a].isDataTexture?s.push(Oa(i[a].image)):s.push(Oa(i[a]))}else s=Oa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Oa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?om.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cm=0;class bt extends Hi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Ii,i=Ii,s=ln,a=Li,l=cn,u=qn,h=bt.DEFAULT_ANISOTROPY,d=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=yn(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vo:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vo:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Yh;bt.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,h=u[0],d=u[4],o=u[8],c=u[1],f=u[5],_=u[9],g=u[2],m=u[6],p=u[10];if(Math.abs(d-c)<.01&&Math.abs(o-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+c)<.1&&Math.abs(o+g)<.1&&Math.abs(_+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(h+1)/2,x=(f+1)/2,b=(p+1)/2,A=(d+c)/4,w=(o+g)/4,C=(_+m)/4;return M>x&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=w/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=C/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=w/s,i=C/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(o-g)*(o-g)+(c-d)*(c-d));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(o-g)/y,this.z=(c-d)/y,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this.w=Le(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this.w=Le(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class um extends Hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new of(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends um{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lf extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hm extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,l){let u=n[i+0],h=n[i+1],d=n[i+2],o=n[i+3];const c=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(l===0){e[t+0]=u,e[t+1]=h,e[t+2]=d,e[t+3]=o;return}if(l===1){e[t+0]=c,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(o!==g||u!==c||h!==f||d!==_){let m=1-l;const p=u*c+h*f+d*_+o*g,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const b=Math.sqrt(M),A=Math.atan2(b,p*y);m=Math.sin(m*A)/b,l=Math.sin(l*A)/b}const x=l*y;if(u=u*m+c*x,h=h*m+f*x,d=d*m+_*x,o=o*m+g*x,m===1-l){const b=1/Math.sqrt(u*u+h*h+d*d+o*o);u*=b,h*=b,d*=b,o*=b}}e[t]=u,e[t+1]=h,e[t+2]=d,e[t+3]=o}static multiplyQuaternionsFlat(e,t,n,i,s,a){const l=n[i],u=n[i+1],h=n[i+2],d=n[i+3],o=s[a],c=s[a+1],f=s[a+2],_=s[a+3];return e[t]=l*_+d*o+u*f-h*c,e[t+1]=u*_+d*c+h*o-l*f,e[t+2]=h*_+d*f+l*c-u*o,e[t+3]=d*_-l*o-u*c-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,l=Math.cos,u=Math.sin,h=l(n/2),d=l(i/2),o=l(s/2),c=u(n/2),f=u(i/2),_=u(s/2);switch(a){case"XYZ":this._x=c*d*o+h*f*_,this._y=h*f*o-c*d*_,this._z=h*d*_+c*f*o,this._w=h*d*o-c*f*_;break;case"YXZ":this._x=c*d*o+h*f*_,this._y=h*f*o-c*d*_,this._z=h*d*_-c*f*o,this._w=h*d*o+c*f*_;break;case"ZXY":this._x=c*d*o-h*f*_,this._y=h*f*o+c*d*_,this._z=h*d*_+c*f*o,this._w=h*d*o-c*f*_;break;case"ZYX":this._x=c*d*o-h*f*_,this._y=h*f*o+c*d*_,this._z=h*d*_-c*f*o,this._w=h*d*o+c*f*_;break;case"YZX":this._x=c*d*o+h*f*_,this._y=h*f*o+c*d*_,this._z=h*d*_-c*f*o,this._w=h*d*o-c*f*_;break;case"XZY":this._x=c*d*o-h*f*_,this._y=h*f*o-c*d*_,this._z=h*d*_+c*f*o,this._w=h*d*o+c*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],l=t[5],u=t[9],h=t[2],d=t[6],o=t[10],c=n+l+o;if(c>0){const f=.5/Math.sqrt(c+1);this._w=.25/f,this._x=(d-u)*f,this._y=(s-h)*f,this._z=(a-i)*f}else if(n>l&&n>o){const f=2*Math.sqrt(1+n-l-o);this._w=(d-u)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+h)/f}else if(l>o){const f=2*Math.sqrt(1+l-n-o);this._w=(s-h)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(u+d)/f}else{const f=2*Math.sqrt(1+o-n-l);this._w=(a-i)/f,this._x=(s+h)/f,this._y=(u+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Le(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,l=t._x,u=t._y,h=t._z,d=t._w;return this._x=n*d+a*l+i*h-s*u,this._y=i*d+a*u+s*l-n*h,this._z=s*d+a*h+n*u-i*l,this._w=a*d-n*l-i*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let l=a*e._w+n*e._x+i*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const h=Math.sqrt(u),d=Math.atan2(h,l),o=Math.sin((1-t)*d)/h,c=Math.sin(t*d)/h;return this._w=a*o+this._w*c,this._x=n*o+this._x*c,this._y=i*o+this._y*c,this._z=s*o+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,l=e.z,u=e.w,h=2*(a*i-l*n),d=2*(l*t-s*i),o=2*(s*n-a*t);return this.x=t+u*h+a*o-l*d,this.y=n+u*d+l*h-s*o,this.z=i+u*o+s*d-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Le(this.x,e.x,t.x),this.y=Le(this.y,e.y,t.y),this.z=Le(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Le(this.x,e,t),this.y=Le(this.y,e,t),this.z=Le(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Le(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,l=t.y,u=t.z;return this.x=i*u-s*l,this.y=s*a-n*u,this.z=n*l-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ba.copy(this).projectOnVector(e),this.sub(Ba)}reflect(e){return this.sub(Ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Le(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ba=new N,kc=new Dr;class mi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vs.copy(n.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),xs.subVectors(this.max,kr),$i.subVectors(e.a,kr),Zi.subVectors(e.b,kr),Ki.subVectors(e.c,kr),Zn.subVectors(Zi,$i),Kn.subVectors(Ki,Zi),yi.subVectors($i,Ki);let t=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-yi.z,yi.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,yi.z,0,-yi.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-yi.y,yi.x,0];return!ka(t,$i,Zi,Ki,xs)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,$i,Zi,Ki,xs))?!1:(ys.crossVectors(Zn,Kn),t=[ys.x,ys.y,ys.z],ka(t,$i,Zi,Ki,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,vs=new mi,$i=new N,Zi=new N,Ki=new N,Zn=new N,Kn=new N,yi=new N,kr=new N,xs=new N,ys=new N,Mi=new N;function ka(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Mi.fromArray(r,s);const l=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),u=e.dot(Mi),h=t.dot(Mi),d=n.dot(Mi);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>l)return!1}return!0}const fm=new mi,zr=new N,za=new N;class Yn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(za)),this.expandByPoint(zr.copy(e.center).sub(za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new N,Va=new N,Ms=new N,jn=new N,Ha=new N,Ss=new N,Ga=new N;class fs{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Va.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Va);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ms),l=jn.dot(this.direction),u=-jn.dot(Ms),h=jn.lengthSq(),d=Math.abs(1-a*a);let o,c,f,_;if(d>0)if(o=a*u-l,c=a*l-u,_=s*d,o>=0)if(c>=-_)if(c<=_){const g=1/d;o*=g,c*=g,f=o*(o+a*c+2*l)+c*(a*o+c+2*u)+h}else c=s,o=Math.max(0,-(a*c+l)),f=-o*o+c*(c+2*u)+h;else c=-s,o=Math.max(0,-(a*c+l)),f=-o*o+c*(c+2*u)+h;else c<=-_?(o=Math.max(0,-(-a*s+l)),c=o>0?-s:Math.min(Math.max(-s,-u),s),f=-o*o+c*(c+2*u)+h):c<=_?(o=0,c=Math.min(Math.max(-s,-u),s),f=c*(c+2*u)+h):(o=Math.max(0,-(a*s+l)),c=o>0?s:Math.min(Math.max(-s,-u),s),f=-o*o+c*(c+2*u)+h);else c=a>0?-s:s,o=Math.max(0,-(a*c+l)),f=-o*o+c*(c+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,o),i&&i.copy(Va).addScaledVector(Ms,c),f}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),i=In.dot(In)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,l,u;const h=1/this.direction.x,d=1/this.direction.y,o=1/this.direction.z,c=this.origin;return h>=0?(n=(e.min.x-c.x)*h,i=(e.max.x-c.x)*h):(n=(e.max.x-c.x)*h,i=(e.min.x-c.x)*h),d>=0?(s=(e.min.y-c.y)*d,a=(e.max.y-c.y)*d):(s=(e.max.y-c.y)*d,a=(e.min.y-c.y)*d),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),o>=0?(l=(e.min.z-c.z)*o,u=(e.max.z-c.z)*o):(l=(e.max.z-c.z)*o,u=(e.min.z-c.z)*o),n>u||l>i)||((l>n||n!==n)&&(n=l),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,i,s){Ha.subVectors(t,e),Ss.subVectors(n,e),Ga.crossVectors(Ha,Ss);let a=this.direction.dot(Ga),l;if(a>0){if(i)return null;l=1}else if(a<0)l=-1,a=-a;else return null;jn.subVectors(this.origin,e);const u=l*this.direction.dot(Ss.crossVectors(jn,Ss));if(u<0)return null;const h=l*this.direction.dot(Ha.cross(jn));if(h<0||u+h>a)return null;const d=-l*jn.dot(Ga);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,s,a,l,u,h,d,o,c,f,_,g,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,l,u,h,d,o,c,f,_,g,m)}set(e,t,n,i,s,a,l,u,h,d,o,c,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=l,p[13]=u,p[2]=h,p[6]=d,p[10]=o,p[14]=c,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ji.setFromMatrixColumn(e,0).length(),s=1/ji.setFromMatrixColumn(e,1).length(),a=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(i),h=Math.sin(i),d=Math.cos(s),o=Math.sin(s);if(e.order==="XYZ"){const c=a*d,f=a*o,_=l*d,g=l*o;t[0]=u*d,t[4]=-u*o,t[8]=h,t[1]=f+_*h,t[5]=c-g*h,t[9]=-l*u,t[2]=g-c*h,t[6]=_+f*h,t[10]=a*u}else if(e.order==="YXZ"){const c=u*d,f=u*o,_=h*d,g=h*o;t[0]=c+g*l,t[4]=_*l-f,t[8]=a*h,t[1]=a*o,t[5]=a*d,t[9]=-l,t[2]=f*l-_,t[6]=g+c*l,t[10]=a*u}else if(e.order==="ZXY"){const c=u*d,f=u*o,_=h*d,g=h*o;t[0]=c-g*l,t[4]=-a*o,t[8]=_+f*l,t[1]=f+_*l,t[5]=a*d,t[9]=g-c*l,t[2]=-a*h,t[6]=l,t[10]=a*u}else if(e.order==="ZYX"){const c=a*d,f=a*o,_=l*d,g=l*o;t[0]=u*d,t[4]=_*h-f,t[8]=c*h+g,t[1]=u*o,t[5]=g*h+c,t[9]=f*h-_,t[2]=-h,t[6]=l*u,t[10]=a*u}else if(e.order==="YZX"){const c=a*u,f=a*h,_=l*u,g=l*h;t[0]=u*d,t[4]=g-c*o,t[8]=_*o+f,t[1]=o,t[5]=a*d,t[9]=-l*d,t[2]=-h*d,t[6]=f*o+_,t[10]=c-g*o}else if(e.order==="XZY"){const c=a*u,f=a*h,_=l*u,g=l*h;t[0]=u*d,t[4]=-o,t[8]=h*d,t[1]=c*o+g,t[5]=a*d,t[9]=f*o-_,t[2]=_*o-f,t[6]=l*d,t[10]=g*o+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,pm)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Jn.crossVectors(n,Wt),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Jn.crossVectors(n,Wt)),Jn.normalize(),Ts.crossVectors(Wt,Jn),i[0]=Jn.x,i[4]=Ts.x,i[8]=Wt.x,i[1]=Jn.y,i[5]=Ts.y,i[9]=Wt.y,i[2]=Jn.z,i[6]=Ts.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],l=n[4],u=n[8],h=n[12],d=n[1],o=n[5],c=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],M=n[7],x=n[11],b=n[15],A=i[0],w=i[4],C=i[8],v=i[12],T=i[1],P=i[5],z=i[9],F=i[13],V=i[2],q=i[6],G=i[10],K=i[14],H=i[3],te=i[7],oe=i[11],me=i[15];return s[0]=a*A+l*T+u*V+h*H,s[4]=a*w+l*P+u*q+h*te,s[8]=a*C+l*z+u*G+h*oe,s[12]=a*v+l*F+u*K+h*me,s[1]=d*A+o*T+c*V+f*H,s[5]=d*w+o*P+c*q+f*te,s[9]=d*C+o*z+c*G+f*oe,s[13]=d*v+o*F+c*K+f*me,s[2]=_*A+g*T+m*V+p*H,s[6]=_*w+g*P+m*q+p*te,s[10]=_*C+g*z+m*G+p*oe,s[14]=_*v+g*F+m*K+p*me,s[3]=y*A+M*T+x*V+b*H,s[7]=y*w+M*P+x*q+b*te,s[11]=y*C+M*z+x*G+b*oe,s[15]=y*v+M*F+x*K+b*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],l=e[5],u=e[9],h=e[13],d=e[2],o=e[6],c=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*u*o-i*h*o-s*l*c+n*h*c+i*l*f-n*u*f)+g*(+t*u*f-t*h*c+s*a*c-i*a*f+i*h*d-s*u*d)+m*(+t*h*o-t*l*f-s*a*o+n*a*f+s*l*d-n*h*d)+p*(-i*l*d-t*u*o+t*l*c+i*a*o-n*a*c+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],l=e[5],u=e[6],h=e[7],d=e[8],o=e[9],c=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=o*m*h-g*c*h+g*u*f-l*m*f-o*u*p+l*c*p,M=_*c*h-d*m*h-_*u*f+a*m*f+d*u*p-a*c*p,x=d*g*h-_*o*h+_*l*f-a*g*f-d*l*p+a*o*p,b=_*o*u-d*g*u-_*l*c+a*g*c+d*l*m-a*o*m,A=t*y+n*M+i*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(g*c*s-o*m*s-g*i*f+n*m*f+o*i*p-n*c*p)*w,e[2]=(l*m*s-g*u*s+g*i*h-n*m*h-l*i*p+n*u*p)*w,e[3]=(o*u*s-l*c*s-o*i*h+n*c*h+l*i*f-n*u*f)*w,e[4]=M*w,e[5]=(d*m*s-_*c*s+_*i*f-t*m*f-d*i*p+t*c*p)*w,e[6]=(_*u*s-a*m*s-_*i*h+t*m*h+a*i*p-t*u*p)*w,e[7]=(a*c*s-d*u*s+d*i*h-t*c*h-a*i*f+t*u*f)*w,e[8]=x*w,e[9]=(_*o*s-d*g*s-_*n*f+t*g*f+d*n*p-t*o*p)*w,e[10]=(a*g*s-_*l*s+_*n*h-t*g*h-a*n*p+t*l*p)*w,e[11]=(d*l*s-a*o*s-d*n*h+t*o*h+a*n*f-t*l*f)*w,e[12]=b*w,e[13]=(d*g*i-_*o*i+_*n*c-t*g*c-d*n*m+t*o*m)*w,e[14]=(_*l*i-a*g*i-_*n*u+t*g*u+a*n*m-t*l*m)*w,e[15]=(a*o*i-d*l*i+d*n*u-t*o*u-a*n*c+t*l*c)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,l=e.y,u=e.z,h=s*a,d=s*l;return this.set(h*a+n,h*l-i*u,h*u+i*l,0,h*l+i*u,d*l+n,d*u-i*a,0,h*u-i*l,d*u+i*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,l=t._z,u=t._w,h=s+s,d=a+a,o=l+l,c=s*h,f=s*d,_=s*o,g=a*d,m=a*o,p=l*o,y=u*h,M=u*d,x=u*o,b=n.x,A=n.y,w=n.z;return i[0]=(1-(g+p))*b,i[1]=(f+x)*b,i[2]=(_-M)*b,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(c+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(_+M)*w,i[9]=(m-y)*w,i[10]=(1-(c+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ji.set(i[0],i[1],i[2]).length();const a=ji.set(i[4],i[5],i[6]).length(),l=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],mn.copy(this);const h=1/s,d=1/a,o=1/l;return mn.elements[0]*=h,mn.elements[1]*=h,mn.elements[2]*=h,mn.elements[4]*=d,mn.elements[5]*=d,mn.elements[6]*=d,mn.elements[8]*=o,mn.elements[9]*=o,mn.elements[10]*=o,t.setFromRotationMatrix(mn),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,i,s,a,l=Vn){const u=this.elements,h=2*s/(t-e),d=2*s/(n-i),o=(t+e)/(t-e),c=(n+i)/(n-i);let f,_;if(l===Vn)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(l===ua)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=o,u[12]=0,u[1]=0,u[5]=d,u[9]=c,u[13]=0,u[2]=0,u[6]=0,u[10]=f,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,s,a,l=Vn){const u=this.elements,h=1/(t-e),d=1/(n-i),o=1/(a-s),c=(t+e)*h,f=(n+i)*d;let _,g;if(l===Vn)_=(a+s)*o,g=-2*o;else if(l===ua)_=s*o,g=-1*o;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-c,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-f,u[2]=0,u[6]=0,u[10]=g,u[14]=-_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new N,mn=new Ue,dm=new N(0,0,0),pm=new N(1,1,1),Jn=new N,Ts=new N,Wt=new N,zc=new Ue,Vc=new Dr;class Rn{constructor(e=0,t=0,n=0,i=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],l=i[8],u=i[1],h=i[5],d=i[9],o=i[2],c=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-o,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-o,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,f),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-o,s)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mm=0;const Hc=new N,Ji=new Dr,Ln=new Ue,Es=new N,Vr=new N,_m=new N,gm=new Dr,Gc=new N(1,0,0),Wc=new N(0,1,0),Xc=new N(0,0,1),qc={type:"added"},vm={type:"removed"},Qi={type:"childadded",child:null},Wa={type:"childremoved",child:null};class pt extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new N,t=new Rn,n=new Dr,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Pe}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Gc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(Xc,e)}translateOnAxis(e,t){return Hc.copy(e).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(Xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Vr,Es,this.up):Ln.lookAt(Es,Vr,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vm),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,_m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const o=u[h];s(e.shapes,o)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(s(e.materials,this.material[u]));i.material=l}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];i.animations.push(s(e.animations,u))}}if(t){const l=a(e.geometries),u=a(e.materials),h=a(e.textures),d=a(e.images),o=a(e.shapes),c=a(e.skeletons),f=a(e.animations),_=a(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),o.length>0&&(n.shapes=o),c.length>0&&(n.skeletons=c),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}pt.DEFAULT_UP=new N(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new N,Un=new N,Xa=new N,Nn=new N,er=new N,tr=new N,Yc=new N,qa=new N,Ya=new N,$a=new N,Za=new Ye,Ka=new Ye,ja=new Ye;class vn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_n.subVectors(i,t),Un.subVectors(n,t),Xa.subVectors(e,t);const a=_n.dot(_n),l=_n.dot(Un),u=_n.dot(Xa),h=Un.dot(Un),d=Un.dot(Xa),o=a*h-l*l;if(o===0)return s.set(0,0,0),null;const c=1/o,f=(h*u-l*d)*c,_=(a*d-l*u)*c;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,s,a,l,u){return this.getBarycoord(e,t,n,i,Nn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Nn.x),u.addScaledVector(a,Nn.y),u.addScaledVector(l,Nn.z),u)}static getInterpolatedAttribute(e,t,n,i,s,a){return Za.setScalar(0),Ka.setScalar(0),ja.setScalar(0),Za.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,n),ja.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Za,s.x),a.addScaledVector(Ka,s.y),a.addScaledVector(ja,s.z),a}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),Un.subVectors(e,t),_n.cross(Un).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),_n.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,l;er.subVectors(i,n),tr.subVectors(s,n),qa.subVectors(e,n);const u=er.dot(qa),h=tr.dot(qa);if(u<=0&&h<=0)return t.copy(n);Ya.subVectors(e,i);const d=er.dot(Ya),o=tr.dot(Ya);if(d>=0&&o<=d)return t.copy(i);const c=u*o-d*h;if(c<=0&&u>=0&&d<=0)return a=u/(u-d),t.copy(n).addScaledVector(er,a);$a.subVectors(e,s);const f=er.dot($a),_=tr.dot($a);if(_>=0&&f<=_)return t.copy(s);const g=f*h-u*_;if(g<=0&&h>=0&&_<=0)return l=h/(h-_),t.copy(n).addScaledVector(tr,l);const m=d*_-f*o;if(m<=0&&o-d>=0&&f-_>=0)return Yc.subVectors(s,i),l=(o-d)/(o-d+(f-_)),t.copy(i).addScaledVector(Yc,l);const p=1/(m+g+c);return a=g*p,l=c*p,t.copy(n).addScaledVector(er,a).addScaledVector(tr,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},bs={h:0,s:0,l:0};function Ja(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Xl(e,1),t=Le(t,0,1),n=Le(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ja(a,s,e+1/3),this.g=Ja(a,s,e),this.b=Ja(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],l=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Xe.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Le(Rt.r*255,0,255))*65536+Math.round(Le(Rt.g*255,0,255))*256+Math.round(Le(Rt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,s=Rt.b,a=Math.max(n,i,s),l=Math.min(n,i,s);let u,h;const d=(l+a)/2;if(l===a)u=0,h=0;else{const o=a-l;switch(h=d<=.5?o/(a+l):o/(2-a-l),a){case n:u=(i-s)/o+(i<s?6:0);break;case i:u=(s-n)/o+2;break;case s:u=(n-i)/o+4;break}u/=6}return e.h=u,e.s=h,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Yt){Xe.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(bs);const n=es(Qn.h,bs.h,t),i=es(Qn.s,bs.s,t),s=es(Qn.l,bs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Fe;Fe.NAMES=cf;let xm=0;class Gi extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=pr,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Do,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Po&&(n.blendSrc=this.blendSrc),this.blendDst!==Do&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const l in s){const u=s[l];delete u.metadata,a.push(u)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class uf extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new N,As=new qe;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_l&&(e.usage=this.usage),e}}class hf extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ff extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gn extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ym=0;const sn=new Ue,Qa=new pt,nr=new N,Xt=new mi,Hr=new mi,Mt=new N;class $n extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?ff:hf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Qa.lookAt(e),Qa.updateMatrix(),this.applyMatrix4(Qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Xt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Hr.setFromBufferAttribute(l),this.morphTargetsRelative?(Mt.addVectors(Xt.min,Hr.min),Xt.expandByPoint(Mt),Mt.addVectors(Xt.max,Hr.max),Xt.expandByPoint(Mt)):(Xt.expandByPoint(Hr.min),Xt.expandByPoint(Hr.max))}Xt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],u=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)Mt.fromBufferAttribute(l,h),u&&(nr.fromBufferAttribute(e,h),Mt.add(nr)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],u=[];for(let C=0;C<n.count;C++)l[C]=new N,u[C]=new N;const h=new N,d=new N,o=new N,c=new qe,f=new qe,_=new qe,g=new N,m=new N;function p(C,v,T){h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,v),o.fromBufferAttribute(n,T),c.fromBufferAttribute(s,C),f.fromBufferAttribute(s,v),_.fromBufferAttribute(s,T),d.sub(h),o.sub(h),f.sub(c),_.sub(c);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(d).multiplyScalar(_.y).addScaledVector(o,-f.y).multiplyScalar(P),m.copy(o).multiplyScalar(f.x).addScaledVector(d,-_.x).multiplyScalar(P),l[C].add(g),l[v].add(g),l[T].add(g),u[C].add(m),u[v].add(m),u[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,v=y.length;C<v;++C){const T=y[C],P=T.start,z=T.count;for(let F=P,V=P+z;F<V;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new N,x=new N,b=new N,A=new N;function w(C){b.fromBufferAttribute(i,C),A.copy(b);const v=l[C];M.copy(v),M.sub(b.multiplyScalar(b.dot(v))).normalize(),x.crossVectors(A,v);const P=x.dot(u[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,v=y.length;C<v;++C){const T=y[C],P=T.start,z=T.count;for(let F=P,V=P+z;F<V;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,f=n.count;c<f;c++)n.setXYZ(c,0,0,0);const i=new N,s=new N,a=new N,l=new N,u=new N,h=new N,d=new N,o=new N;if(e)for(let c=0,f=e.count;c<f;c+=3){const _=e.getX(c+0),g=e.getX(c+1),m=e.getX(c+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),d.subVectors(a,s),o.subVectors(i,s),d.cross(o),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),h.fromBufferAttribute(n,m),l.add(d),u.add(d),h.add(d),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,f=t.count;c<f;c+=3)i.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),d.subVectors(a,s),o.subVectors(i,s),d.cross(o),n.setXYZ(c+0,d.x,d.y,d.z),n.setXYZ(c+1,d.x,d.y,d.z),n.setXYZ(c+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(l,u){const h=l.array,d=l.itemSize,o=l.normalized,c=new h.constructor(u.length*d);let f=0,_=0;for(let g=0,m=u.length;g<m;g++){l.isInterleavedBufferAttribute?f=u[g]*l.data.stride+l.offset:f=u[g]*d;for(let p=0;p<d;p++)c[_++]=h[f++]}return new hn(c,d,o)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $n,n=this.index.array,i=this.attributes;for(const l in i){const u=i[l],h=e(u,n);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,o=h.length;d<o;d++){const c=h[d],f=e(c,n);u.push(f)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let o=0,c=h.length;o<c;o++){const f=h[o];d.push(f.toJSON(e.data))}d.length>0&&(i[u]=d,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(t))}const s=e.morphAttributes;for(const h in s){const d=[],o=s[h];for(let c=0,f=o.length;c<f;c++)d.push(o[c].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const o=a[h];this.addGroup(o.start,o.count,o.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new Ue,Si=new fs,ws=new Yn,Zc=new N,Rs=new N,Cs=new N,Ps=new N,eo=new N,Ds=new N,Kc=new N,Is=new N;class un extends pt{constructor(e=new $n,t=new uf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(s&&l){Ds.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const d=l[u],o=s[u];d!==0&&(eo.fromBufferAttribute(o,e),a?Ds.addScaledVector(eo,d):Ds.addScaledVector(eo.sub(t),d))}t.add(Ds)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(ws.containsPoint(Si.origin)===!1&&(Si.intersectSphere(ws,Zc)===null||Si.origin.distanceToSquared(Zc)>(e.far-e.near)**2))&&($c.copy(s).invert(),Si.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,l=s.index,u=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,o=s.attributes.normal,c=s.groups,f=s.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,g=c.length;_<g;_++){const m=c[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,b=M;x<b;x+=3){const A=l.getX(x),w=l.getX(x+1),C=l.getX(x+2);i=Ls(this,p,e,n,h,d,o,A,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const y=l.getX(m),M=l.getX(m+1),x=l.getX(m+2);i=Ls(this,a,e,n,h,d,o,y,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(a))for(let _=0,g=c.length;_<g;_++){const m=c[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(u.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,b=M;x<b;x+=3){const A=x,w=x+1,C=x+2;i=Ls(this,p,e,n,h,d,o,A,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(u.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const y=m,M=m+1,x=m+2;i=Ls(this,a,e,n,h,d,o,y,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Mm(r,e,t,n,i,s,a,l){let u;if(e.side===Vt?u=n.intersectTriangle(a,s,i,!0,l):u=n.intersectTriangle(i,s,a,e.side===fi,l),u===null)return null;Is.copy(l),Is.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Is);return h<t.near||h>t.far?null:{distance:h,point:Is.clone(),object:r}}function Ls(r,e,t,n,i,s,a,l,u,h){r.getVertexPosition(l,Rs),r.getVertexPosition(u,Cs),r.getVertexPosition(h,Ps);const d=Mm(r,e,t,n,Rs,Cs,Ps,Kc);if(d){const o=new N;vn.getBarycoord(Kc,Rs,Cs,Ps,o),i&&(d.uv=vn.getInterpolatedAttribute(i,l,u,h,o,new qe)),s&&(d.uv1=vn.getInterpolatedAttribute(s,l,u,h,o,new qe)),a&&(d.normal=vn.getInterpolatedAttribute(a,l,u,h,o,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const c={a:l,b:u,c:h,normal:new N,materialIndex:0};vn.getNormal(Rs,Cs,Ps,c.normal),d.face=c,d.barycoord=o}return d}class ds extends $n{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const l=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],d=[],o=[];let c=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Gn(h,3)),this.setAttribute("normal",new Gn(d,3)),this.setAttribute("uv",new Gn(o,2));function _(g,m,p,y,M,x,b,A,w,C,v){const T=x/w,P=b/C,z=x/2,F=b/2,V=A/2,q=w+1,G=C+1;let K=0,H=0;const te=new N;for(let oe=0;oe<G;oe++){const me=oe*P-F;for(let Ee=0;Ee<q;Ee++){const $e=Ee*T-z;te[g]=$e*y,te[m]=me*M,te[p]=V,h.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[p]=A>0?1:-1,d.push(te.x,te.y,te.z),o.push(Ee/w),o.push(1-oe/C),K+=1}}for(let oe=0;oe<C;oe++)for(let me=0;me<w;me++){const Ee=c+me+q*oe,$e=c+me+q*(oe+1),X=c+(me+1)+q*(oe+1),Q=c+(me+1)+q*oe;u.push(Ee,$e,Q),u.push($e,X,Q),H+=6}l.addGroup(f,H,v),f+=H,c+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(r){const e={};for(let t=0;t<r.length;t++){const n=Pr(r[t]);for(const i in n)e[i]=n[i]}return e}function Sm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function df(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Tm={clone:Pr,merge:Ut};var Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=Sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pf extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new N,jc=new qe,Jc=new qe;class $t extends pf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,jc,Jc),t.subVectors(Jc,jc)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*i/u,t-=a.offsetY*n/h,i*=a.width/u,n*=a.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class Am extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $t(ir,rr,e,t);i.layers=this.layers,this.add(i);const s=new $t(ir,rr,e,t);s.layers=this.layers,this.add(s);const a=new $t(ir,rr,e,t);a.layers=this.layers,this.add(a);const l=new $t(ir,rr,e,t);l.layers=this.layers,this.add(l);const u=new $t(ir,rr,e,t);u.layers=this.layers,this.add(u);const h=new $t(ir,rr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,l,u]=t;for(const h of t)this.remove(h);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,u,h,d]=this.children,o=e.getRenderTarget(),c=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(o,c,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Yl extends bt{constructor(e,t,n,i,s,a,l,u,h,d){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,i,s,a,l,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wm extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ds(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:li});s.uniforms.tEquirect.value=t;const a=new un(i,s),l=t.minFilter;return t.minFilter===Li&&(t.minFilter=ln),new Am(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Jx extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new N;class mf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Je(t,this.array),n=Je(n,this.array),i=Je(i,this.array),s=Je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new hn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Qc=new N,eu=new Ye,tu=new Ye,Rm=new N,nu=new Ue,Us=new N,to=new Yn,iu=new Ue,no=new fs;class ey extends un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cc,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Us),this.boundingBox.expandByPoint(Us)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Us),this.boundingSphere.expandByPoint(Us)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(i),e.ray.intersectsSphere(to)!==!1&&(iu.copy(i).invert(),no.copy(e.ray).applyMatrix4(iu),!(this.boundingBox!==null&&no.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,no)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;eu.fromBufferAttribute(i.attributes.skinIndex,e),tu.fromBufferAttribute(i.attributes.skinWeight,e),Qc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=tu.getComponent(s);if(a!==0){const l=eu.getComponent(s);nu.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Rm.copy(Qc).applyMatrix4(nu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cm extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _f extends bt{constructor(e=null,t=1,n=1,i,s,a,l,u,h=Jt,d=Jt,o,c){super(null,a,l,u,h,d,i,s,o,c),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ru=new Ue,Pm=new Ue;class gf{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const l=e[s]?e[s].matrixWorld:Pm;ru.multiplyMatrices(l,t[s]),ru.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new gf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _f(t,e,e,cn,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Cm),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const l=n[i];e.boneInverses.push(l.toArray())}return e}}class su extends hn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new Ue,au=new Ue,Ns=[],ou=new mi,Dm=new Ue,Gr=new un,Wr=new Yn;class ty extends un{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new su(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),ou.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(ou)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),Wr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let l=0;l<n.length;l++)n[l]=i[a+l]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,sr),au.multiplyMatrices(n,sr),Gr.matrixWorld=au,Gr.raycast(e,Ns);for(let a=0,l=Ns.length;a<l;a++){const u=Ns[a];u.instanceId=s,u.object=this,t.push(u)}Ns.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new su(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _f(new Float32Array(i*this.count),i,this.count,Vl,xn));const s=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const l=this.geometry.morphTargetsRelative?1:1-a,u=i*e;s[u]=l,s.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const io=new N,Im=new N,Lm=new Pe;class wi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=io.subVectors(n,t).cross(Im.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(io),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lm.getNormalMatrix(e),i=this.coplanarPoint(io).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Yn,Fs=new N;class $l{constructor(e=new wi,t=new wi,n=new wi,i=new wi,s=new wi,a=new wi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,i=e.elements,s=i[0],a=i[1],l=i[2],u=i[3],h=i[4],d=i[5],o=i[6],c=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],y=i[13],M=i[14],x=i[15];if(n[0].setComponents(u-s,c-h,m-f,x-p).normalize(),n[1].setComponents(u+s,c+h,m+f,x+p).normalize(),n[2].setComponents(u+a,c+d,m+_,x+y).normalize(),n[3].setComponents(u-a,c-d,m-_,x-y).normalize(),n[4].setComponents(u-l,c-o,m-g,x-M).normalize(),t===Vn)n[5].setComponents(u+l,c+o,m+g,x+M).normalize();else if(t===ua)n[5].setComponents(l,o,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fs.x=i.normal.x>0?e.max.x:e.min.x,Fs.y=i.normal.y>0?e.max.y:e.min.y,Fs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Um extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ha=new N,fa=new N,lu=new Ue,Xr=new fs,Os=new Yn,ro=new N,cu=new N;class vf extends pt{constructor(e=new $n,t=new Um){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ha.fromBufferAttribute(t,i-1),fa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ha.distanceTo(fa);e.setAttribute("lineDistance",new Gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=s,e.ray.intersectsSphere(Os)===!1)return;lu.copy(i).invert(),Xr.copy(e.ray).applyMatrix4(lu);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=this.isLineSegments?2:1,d=n.index,c=n.attributes.position;if(d!==null){const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=h){const p=d.getX(g),y=d.getX(g+1),M=Bs(this,e,Xr,u,p,y);M&&t.push(M)}if(this.isLineLoop){const g=d.getX(_-1),m=d.getX(f),p=Bs(this,e,Xr,u,g,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=h){const p=Bs(this,e,Xr,u,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=Bs(this,e,Xr,u,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function Bs(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(ha.fromBufferAttribute(a,i),fa.fromBufferAttribute(a,s),t.distanceSqToSegment(ha,fa,ro,cu)>n)return;ro.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(ro);if(!(u<e.near||u>e.far))return{distance:u,point:cu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const uu=new N,hu=new N;class ny extends vf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)uu.fromBufferAttribute(t,i),hu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uu.distanceTo(hu);e.setAttribute("lineDistance",new Gn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iy extends vf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nm extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fu=new Ue,gl=new fs,ks=new Yn,zs=new N;class ry extends pt{constructor(e=new $n,t=new Nm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(i),ks.radius+=s,e.ray.intersectsSphere(ks)===!1)return;fu.copy(i).invert(),gl.copy(e.ray).applyMatrix4(fu);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,h=n.index,o=n.attributes.position;if(h!==null){const c=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=c,g=f;_<g;_++){const m=h.getX(_);zs.fromBufferAttribute(o,m),du(zs,m,u,i,e,t,this)}}else{const c=Math.max(0,a.start),f=Math.min(o.count,a.start+a.count);for(let _=c,g=f;_<g;_++)zs.fromBufferAttribute(o,_),du(zs,_,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const l=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function du(r,e,t,n,i,s,a){const l=gl.distanceSqToPoint(r);if(l<t){const u=new N;gl.closestPointToPoint(r,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;s.push({distance:h,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Vs extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class sy extends bt{constructor(e,t,n,i,s,a,l,u,h){super(e,t,n,i,s,a,l,u,h),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:ln,this.magFilter=s!==void 0?s:ln,this.generateMipmaps=!1;const d=this;function o(){d.needsUpdate=!0,e.requestVideoFrameCallback(o)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(o)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class xf extends bt{constructor(e,t,n,i,s,a,l,u,h,d=mr){if(d!==mr&&d!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===mr&&(n=ki),n===void 0&&d===wr&&(n=Ar),super(null,i,s,a,l,u,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:Jt,this.minFilter=u!==void 0?u:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xa extends $n{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,l=Math.floor(n),u=Math.floor(i),h=l+1,d=u+1,o=e/l,c=t/u,f=[],_=[],g=[],m=[];for(let p=0;p<d;p++){const y=p*c-a;for(let M=0;M<h;M++){const x=M*o-s;_.push(x,-y,0),g.push(0,0,1),m.push(M/l),m.push(1-p/u)}}for(let p=0;p<u;p++)for(let y=0;y<l;y++){const M=y+h*p,x=y+h*(p+1),b=y+1+h*(p+1),A=y+1+h*p;f.push(M,x,A),f.push(x,b,A)}this.setIndex(f),this.setAttribute("position",new Gn(_,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fm extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ay extends Fm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Om extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bm extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function km(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function pu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const l=t[s]*e;for(let u=0;u!==e;++u)i[a++]=r[l+u]}return i}function yf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ya{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let l=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const l=t[1];e<l&&(n=2,s=l);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const l=n+a>>>1;e<t[l]?a=l:n=l+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vm extends ya{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,l=i[s],u=i[a];if(l===void 0)switch(this.getSettings_().endingStart){case Dc:s=e,l=2*t-n;break;case Ic:s=i.length-2,l=t+i[s]-i[s+1];break;default:s=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Dc:a=e,u=2*n-t;break;case Ic:a=1,u=n+i[1]-i[0];break;default:a=e-1,u=t}const h=(n-t)*.5,d=this.valueSize;this._weightPrev=h/(t-l),this._weightNext=h/(u-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,d=this._offsetPrev,o=this._offsetNext,c=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-c*m+2*c*g-c*_,y=(1+c)*m+(-1.5-2*c)*g+(-.5+c)*_+1,M=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let b=0;b!==l;++b)s[b]=p*a[d+b]+y*a[h+b]+M*a[u+b]+x*a[o+b];return s}}class Hm extends ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=e*l,h=u-l,d=(n-t)/(i-t),o=1-d;for(let c=0;c!==l;++c)s[c]=a[h+c]*o+a[u+c]*d;return s}}class Gm extends ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hs(t,this.TimeBufferType),this.values=Hs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hs(e.times,Array),values:Hs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case ml:t=this.InterpolantFactoryMethodLinear;break;case Na:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return ml;case this.InterpolantFactoryMethodSmooth:return Na}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const l=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*l,a*l)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==s;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(a!==null&&a>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,a),e=!1;break}a=u}if(i!==void 0&&km(i))for(let l=0,u=i.length;l!==u;++l){const h=i[l];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Na,s=e.length-1;let a=1;for(let l=1;l<s;++l){let u=!1;const h=e[l],d=e[l+1];if(h!==d&&(l!==1||h!==e[0]))if(i)u=!0;else{const o=l*n,c=o-n,f=o+n;for(let _=0;_!==n;++_){const g=t[o+_];if(g!==t[c+_]||g!==t[f+_]){u=!0;break}}}if(u){if(l!==a){e[a]=e[l];const o=l*n,c=a*n;for(let f=0;f!==n;++f)t[c+f]=t[o+f]}++a}}if(s>0){e[a]=e[s];for(let l=s*n,u=a*n,h=0;h!==n;++h)t[u+h]=t[l+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=ml;class Ir extends Cn{constructor(e,t,n){super(e,t,n)}}Ir.prototype.ValueTypeName="bool";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=la;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Mf extends Cn{}Mf.prototype.ValueTypeName="color";class da extends Cn{}da.prototype.ValueTypeName="number";class Wm extends ya{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=(n-t)/(i-t);let h=e*l;for(let d=h+l;h!==d;h+=4)Dr.slerpFlat(s,0,a,h-l,a,h,u);return s}}class Ma extends Cn{InterpolantFactoryMethodLinear(e){return new Wm(this.times,this.values,this.getValueSize(),e)}}Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends Cn{constructor(e,t,n){super(e,t,n)}}Lr.prototype.ValueTypeName="string";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=la;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class pa extends Cn{}pa.prototype.ValueTypeName="vector";class oy{constructor(e="",t=-1,n=[],i=Cp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,l=n.length;a!==l;++a)t.push(qm(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Cn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let l=0;l<s;l++){let u=[],h=[];u.push((l+s-1)%s,l,(l+1)%s),h.push(0,1,0);const d=zm(u);u=pu(u,1,d),h=pu(h,1,d),!i&&u[0]===0&&(u.push(s),h.push(h[0])),a.push(new da(".morphTargetInfluences["+t[l].name+"]",u,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let l=0,u=e.length;l<u;l++){const h=e[l],d=h.name.match(s);if(d&&d.length>1){const o=d[1];let c=i[o];c||(i[o]=c=[]),c.push(h)}}const a=[];for(const l in i)a.push(this.CreateFromMorphTargetSequence(l,i[l],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(o,c,f,_,g){if(f.length!==0){const m=[],p=[];yf(f,m,p,_),m.length!==0&&g.push(new o(c,m,p))}},i=[],s=e.name||"default",a=e.fps||30,l=e.blendMode;let u=e.length||-1;const h=e.hierarchy||[];for(let o=0;o<h.length;o++){const c=h[o].keys;if(!(!c||c.length===0))if(c[0].morphTargets){const f={};let _;for(_=0;_<c.length;_++)if(c[_].morphTargets)for(let g=0;g<c[_].morphTargets.length;g++)f[c[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let y=0;y!==c[_].morphTargets.length;++y){const M=c[_];m.push(M.time),p.push(M.morphTarget===g?1:0)}i.push(new da(".morphTargetInfluence["+g+"]",m,p))}u=f.length*a}else{const f=".bones["+t[o].name+"]";n(pa,f+".position",c,"pos",i),n(Ma,f+".quaternion",c,"rot",i),n(pa,f+".scale",c,"scl",i)}}return i.length===0?null:new this(s,u,i,l)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Xm(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return da;case"vector":case"vector2":case"vector3":case"vector4":return pa;case"color":return Mf;case"quaternion":return Ma;case"bool":case"boolean":return Ir;case"string":return Lr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function qm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Xm(r.type);if(r.times===void 0){const t=[],n=[];yf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const si={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ym{constructor(e,t,n){const i=this;let s=!1,a=0,l=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){l++,s===!1&&i.onStart!==void 0&&i.onStart(d,a,l),s=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,l),a===l&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,o){return h.push(d,o),this},this.removeHandler=function(d){const o=h.indexOf(d);return o!==-1&&h.splice(o,2),this},this.getHandler=function(d){for(let o=0,c=h.length;o<c;o+=2){const f=h[o],_=h[o+1];if(f.global&&(f.lastIndex=0),f.test(d))return _}return null}}}const $m=new Ym;class Ur{constructor(e){this.manager=e!==void 0?e:$m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ur.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class Zm extends Error{constructor(e,t){super(e),this.response=t}}class ly extends Ur{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=si.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:i});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,u=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=Fn[e],o=h.body.getReader(),c=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),f=c?parseInt(c):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){y();function y(){o.read().then(({done:M,value:x})=>{if(M)p.close();else{g+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let A=0,w=d.length;A<w;A++){const C=d[A];C.onProgress&&C.onProgress(b)}p.enqueue(x),y()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Zm(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,l));case"json":return h.json();default:if(l===void 0)return h.text();{const o=/charset="?([^;"\s]*)"?/i.exec(l),c=o&&o[1]?o[1].toLowerCase():void 0,f=new TextDecoder(c);return h.arrayBuffer().then(_=>f.decode(_))}}}).then(h=>{si.add(e,h);const d=Fn[e];delete Fn[e];for(let o=0,c=d.length;o<c;o++){const f=d[o];f.onLoad&&f.onLoad(h)}}).catch(h=>{const d=Fn[e];if(d===void 0)throw this.manager.itemError(e),h;delete Fn[e];for(let o=0,c=d.length;o<c;o++){const f=d[o];f.onError&&f.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Sf extends Ur{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=si.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const l=cs("img");function u(){d(),si.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(o){d(),i&&i(o),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class cy extends Ur{constructor(e){super(e)}load(e,t,n,i){const s=new Yl;s.colorSpace=Yt;const a=new Sf(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let l=0;function u(h){a.load(e[h],function(d){s.images[h]=d,l++,l===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let h=0;h<e.length;++h)u(h);return s}}class uy extends Ur{constructor(e){super(e)}load(e,t,n,i){const s=new bt,a=new Sf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Zl extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const so=new Ue,mu=new N,_u=new N;class Kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $l,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),so.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(so)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Km extends Kl{constructor(){super(new $t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hy extends Zl{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Km}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gu=new Ue,qr=new N,ao=new N;class jm extends Kl{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(qr),ao.copy(n.position),ao.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ao),n.updateMatrixWorld(),i.makeTranslation(-qr.x,-qr.y,-qr.z),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu)}}class fy extends Zl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tf extends pf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,l-=d*this.view.offsetY,u=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Jm extends Kl{constructor(){super(new Tf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dy extends Zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Jm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class py{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class my extends Ur{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=si.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),s.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const u=fetch(e,l).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(h){return si.add(e,h),t&&t(h),s.manager.itemEnd(e),h}).catch(function(h){i&&i(h),si.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});si.add(e,u),s.manager.itemStart(e)}}class Qm extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _y{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vu(){return performance.now()}const jl="\\[\\]\\.:\\/",e_=new RegExp("["+jl+"]","g"),Jl="[^"+jl+"]",t_="[^"+jl.replace("\\.","")+"]",n_=/((?:WC+[\/:])*)/.source.replace("WC",Jl),i_=/(WCOD+)?/.source.replace("WCOD",t_),r_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),s_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),a_=new RegExp("^"+n_+i_+r_+s_+"$"),o_=["material","materials","bones","map"];class l_{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(e_,"")}static parseTrackName(e){const t=a_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);o_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const l=s[a];if(l.name===t||l.uuid===t)return l;const u=n(l.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===h){h=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(u=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=l_;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ef{constructor(e){this.value=e}clone(){return new Ef(this.value.clone===void 0?this.value:this.value.clone())}}const xu=new Ue;class gy{constructor(e,t,n=0,i=1/0){this.ray=new fs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xu),this}intersectObject(e,t=!0,n=[]){return vl(e,this,n,t),n.sort(yu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)vl(e[i],this,n,t);return n.sort(yu),n}}function yu(r,e){return r.distance-e.distance}function vl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,l=s.length;a<l;a++)vl(s[a],e,t,!0)}}class vy{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Le(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xy extends Hi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Mu(r,e,t,n){const i=c_(n);switch(t){case jh:return r*e;case Qh:return r*e;case ef:return r*e*2;case Vl:return r*e/i.components*i.byteLength;case Hl:return r*e/i.components*i.byteLength;case tf:return r*e*2/i.components*i.byteLength;case Gl:return r*e*2/i.components*i.byteLength;case Jh:return r*e*3/i.components*i.byteLength;case cn:return r*e*4/i.components*i.byteLength;case Wl:return r*e*4/i.components*i.byteLength;case Zs:case Ks:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case js:case Js:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wo:case qo:return Math.max(r,16)*Math.max(e,8)/4;case Go:case Xo:return Math.max(r,8)*Math.max(e,8)/2;case Yo:case $o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Qs:case ul:case hl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case nf:case fl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case dl:case pl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c_(r){switch(r){case qn:case $h:return{byteLength:1,components:1};case ls:case Zh:case hs:return{byteLength:2,components:1};case kl:case zl:return{byteLength:2,components:4};case ki:case Bl:case xn:return{byteLength:4,components:1};case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function u_(r){const e=new WeakMap;function t(l,u){const h=l.array,d=l.usage,o=h.byteLength,c=r.createBuffer();r.bindBuffer(u,c),r.bufferData(u,h,d),l.onUploadCallback();let f;if(h instanceof Float32Array)f=r.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=r.SHORT;else if(h instanceof Uint32Array)f=r.UNSIGNED_INT;else if(h instanceof Int32Array)f=r.INT;else if(h instanceof Int8Array)f=r.BYTE;else if(h instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:o}}function n(l,u,h){const d=u.array,o=u.updateRanges;if(r.bindBuffer(h,l),o.length===0)r.bufferSubData(h,0,d);else{o.sort((f,_)=>f.start-_.start);let c=0;for(let f=1;f<o.length;f++){const _=o[c],g=o[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++c,o[c]=g)}o.length=c+1;for(let f=0,_=o.length;f<_;f++){const g=o[f];r.bufferSubData(h,g.start*d.BYTES_PER_ELEMENT,d,g.start,g.count)}u.clearUpdateRanges()}u.onUploadCallback()}function i(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(r.deleteBuffer(u.buffer),e.delete(l))}function a(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=e.get(l);if(h===void 0)e.set(l,t(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:i,remove:s,update:a}}var h_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,d_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,__=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,y_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,U_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V_="gl_FragColor = linearToOutputTexel( gl_FragColor );",H_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ug=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,H0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:h_,alphahash_pars_fragment:f_,alphamap_fragment:d_,alphamap_pars_fragment:p_,alphatest_fragment:m_,alphatest_pars_fragment:__,aomap_fragment:g_,aomap_pars_fragment:v_,batching_pars_vertex:x_,batching_vertex:y_,begin_vertex:M_,beginnormal_vertex:S_,bsdfs:T_,iridescence_fragment:E_,bumpmap_pars_fragment:b_,clipping_planes_fragment:A_,clipping_planes_pars_fragment:w_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:C_,color_fragment:P_,color_pars_fragment:D_,color_pars_vertex:I_,color_vertex:L_,common:U_,cube_uv_reflection_fragment:N_,defaultnormal_vertex:F_,displacementmap_pars_vertex:O_,displacementmap_vertex:B_,emissivemap_fragment:k_,emissivemap_pars_fragment:z_,colorspace_fragment:V_,colorspace_pars_fragment:H_,envmap_fragment:G_,envmap_common_pars_fragment:W_,envmap_pars_fragment:X_,envmap_pars_vertex:q_,envmap_physical_pars_fragment:ig,envmap_vertex:Y_,fog_vertex:$_,fog_pars_vertex:Z_,fog_fragment:K_,fog_pars_fragment:j_,gradientmap_pars_fragment:J_,lightmap_pars_fragment:Q_,lights_lambert_fragment:eg,lights_lambert_pars_fragment:tg,lights_pars_begin:ng,lights_toon_fragment:rg,lights_toon_pars_fragment:sg,lights_phong_fragment:ag,lights_phong_pars_fragment:og,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:ug,lights_fragment_maps:hg,lights_fragment_end:fg,logdepthbuf_fragment:dg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:_g,map_fragment:gg,map_pars_fragment:vg,map_particle_fragment:xg,map_particle_pars_fragment:yg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:Tg,morphcolor_vertex:Eg,morphnormal_vertex:bg,morphtarget_pars_vertex:Ag,morphtarget_vertex:wg,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Pg,normal_pars_vertex:Dg,normal_vertex:Ig,normalmap_pars_fragment:Lg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Og,opaque_fragment:Bg,packing:kg,premultiplied_alpha_fragment:zg,project_vertex:Vg,dithering_fragment:Hg,dithering_pars_fragment:Gg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Yg,shadowmap_vertex:$g,shadowmask_pars_fragment:Zg,skinbase_vertex:Kg,skinning_pars_vertex:jg,skinning_vertex:Jg,skinnormal_vertex:Qg,specularmap_fragment:e0,specularmap_pars_fragment:t0,tonemapping_fragment:n0,tonemapping_pars_fragment:i0,transmission_fragment:r0,transmission_pars_fragment:s0,uv_pars_fragment:a0,uv_pars_vertex:o0,uv_vertex:l0,worldpos_vertex:c0,background_vert:u0,background_frag:h0,backgroundCube_vert:f0,backgroundCube_frag:d0,cube_vert:p0,cube_frag:m0,depth_vert:_0,depth_frag:g0,distanceRGBA_vert:v0,distanceRGBA_frag:x0,equirect_vert:y0,equirect_frag:M0,linedashed_vert:S0,linedashed_frag:T0,meshbasic_vert:E0,meshbasic_frag:b0,meshlambert_vert:A0,meshlambert_frag:w0,meshmatcap_vert:R0,meshmatcap_frag:C0,meshnormal_vert:P0,meshnormal_frag:D0,meshphong_vert:I0,meshphong_frag:L0,meshphysical_vert:U0,meshphysical_frag:N0,meshtoon_vert:F0,meshtoon_frag:O0,points_vert:B0,points_frag:k0,shadow_vert:z0,shadow_frag:V0,sprite_vert:H0,sprite_frag:G0},ne={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Sn={basic:{uniforms:Ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Ut([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Ut([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Ut([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Ut([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Ut([ne.points,ne.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Ut([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Ut([ne.common,ne.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Ut([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Ut([ne.sprite,ne.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Ut([ne.common,ne.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Ut([ne.lights,ne.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Sn.physical={uniforms:Ut([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Gs={r:0,b:0,g:0},Ei=new Rn,W0=new Ue;function X0(r,e,t,n,i,s,a){const l=new Fe(0);let u=s===!0?0:1,h,d,o=null,c=0,f=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function g(M){let x=!1;const b=_(M);b===null?p(l,u):b&&b.isColor&&(p(b,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,x){const b=_(x);b&&(b.isCubeTexture||b.mapping===va)?(d===void 0&&(d=new un(new ds(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Pr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Ei.copy(x.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(W0.makeRotationFromEuler(Ei)),d.material.toneMapped=Xe.getTransfer(b.colorSpace)!==Qe,(o!==b||c!==b.version||f!==r.toneMapping)&&(d.material.needsUpdate=!0,o=b,c=b.version,f=r.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new un(new xa(2,2),new di({name:"BackgroundMaterial",uniforms:Pr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(b.colorSpace)!==Qe,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(o!==b||c!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,o=b,c=b.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,x){M.getRGB(Gs,df(r)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,x,a)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return l},setClearColor:function(M,x=1){l.set(M),u=x,p(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(M){u=M,p(l,u)},render:g,addToRenderList:m,dispose:y}}function q0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null);let s=i,a=!1;function l(T,P,z,F,V){let q=!1;const G=o(F,z,P);s!==G&&(s=G,h(s.object)),q=f(T,F,z,V),q&&_(T,F,z,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(T,P,z,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function u(){return r.createVertexArray()}function h(T){return r.bindVertexArray(T)}function d(T){return r.deleteVertexArray(T)}function o(T,P,z){const F=z.wireframe===!0;let V=n[T.id];V===void 0&&(V={},n[T.id]=V);let q=V[P.id];q===void 0&&(q={},V[P.id]=q);let G=q[F];return G===void 0&&(G=c(u()),q[F]=G),G}function c(T){const P=[],z=[],F=[];for(let V=0;V<t;V++)P[V]=0,z[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:F,object:T,attributes:{},index:null}}function f(T,P,z,F){const V=s.attributes,q=P.attributes;let G=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){const oe=V[H];let me=q[H];if(me===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),oe===void 0||oe.attribute!==me||me&&oe.data!==me.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function _(T,P,z,F){const V={},q=P.attributes;let G=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){let oe=q[H];oe===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor));const me={};me.attribute=oe,oe&&oe.data&&(me.data=oe.data),V[H]=me,G++}s.attributes=V,s.attributesNum=G,s.index=F}function g(){const T=s.newAttributes;for(let P=0,z=T.length;P<z;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){const z=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;z[T]=1,F[T]===0&&(r.enableVertexAttribArray(T),F[T]=1),V[T]!==P&&(r.vertexAttribDivisor(T,P),V[T]=P)}function y(){const T=s.newAttributes,P=s.enabledAttributes;for(let z=0,F=P.length;z<F;z++)P[z]!==T[z]&&(r.disableVertexAttribArray(z),P[z]=0)}function M(T,P,z,F,V,q,G){G===!0?r.vertexAttribIPointer(T,P,z,V,q):r.vertexAttribPointer(T,P,z,F,V,q)}function x(T,P,z,F){g();const V=F.attributes,q=z.getAttributes(),G=P.defaultAttributeValues;for(const K in q){const H=q[K];if(H.location>=0){let te=V[K];if(te===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(te=T.instanceColor)),te!==void 0){const oe=te.normalized,me=te.itemSize,Ee=e.get(te);if(Ee===void 0)continue;const $e=Ee.buffer,X=Ee.type,Q=Ee.bytesPerElement,_e=X===r.INT||X===r.UNSIGNED_INT||te.gpuType===Bl;if(te.isInterleavedBufferAttribute){const se=te.data,Te=se.stride,we=te.offset;if(se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<H.locationSize;Ne++)p(H.location+Ne,se.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<H.locationSize;Ne++)m(H.location+Ne);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let Ne=0;Ne<H.locationSize;Ne++)M(H.location+Ne,me/H.locationSize,X,oe,Te*Q,(we+me/H.locationSize*Ne)*Q,_e)}else{if(te.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)p(H.location+se,te.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let se=0;se<H.locationSize;se++)m(H.location+se);r.bindBuffer(r.ARRAY_BUFFER,$e);for(let se=0;se<H.locationSize;se++)M(H.location+se,me/H.locationSize,X,oe,me*Q,me/H.locationSize*se*Q,_e)}}else if(G!==void 0){const oe=G[K];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(H.location,oe);break;case 3:r.vertexAttrib3fv(H.location,oe);break;case 4:r.vertexAttrib4fv(H.location,oe);break;default:r.vertexAttrib1fv(H.location,oe)}}}}y()}function b(){C();for(const T in n){const P=n[T];for(const z in P){const F=P[z];for(const V in F)d(F[V].object),delete F[V];delete P[z]}delete n[T]}}function A(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const z in P){const F=P[z];for(const V in F)d(F[V].object),delete F[V];delete P[z]}delete n[T.id]}function w(T){for(const P in n){const z=n[P];if(z[T.id]===void 0)continue;const F=z[T.id];for(const V in F)d(F[V].object),delete F[V];delete z[T.id]}}function C(){v(),a=!0,s!==i&&(s=i,h(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:C,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function Y0(r,e,t){let n;function i(h){n=h}function s(h,d){r.drawArrays(n,h,d),t.update(d,n,1)}function a(h,d,o){o!==0&&(r.drawArraysInstanced(n,h,d,o),t.update(d,n,o))}function l(h,d,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,o);let f=0;for(let _=0;_<o;_++)f+=d[_];t.update(f,n,1)}function u(h,d,o,c){if(o===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<h.length;_++)a(h[_],d[_],c[_]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,d,0,c,0,o);let _=0;for(let g=0;g<o;g++)_+=d[g]*c[g];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function $0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==cn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const C=w===hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==qn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xn&&!C)}function u(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const d=u(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const o=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:o,reverseDepthBuffer:c,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function Z0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new wi,l=new Pe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(o,c){const f=o.length!==0||c||n!==0||i;return i=c,n=o.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(o,c){t=d(o,c,0)},this.setState=function(o,c,f){const _=o.clippingPlanes,g=o.clipIntersection,m=o.clipShadows,p=r.get(o);if(!i||_===null||_.length===0||s&&!m)s?d(null):h();else{const y=s?0:n,M=y*4;let x=p.clippingState||null;u.value=x,x=d(_,c,M,f);for(let b=0;b!==M;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(o,c,f,_){const g=o!==null?o.length:0;let m=null;if(g!==0){if(m=u.value,_!==!0||m===null){const p=f+g*4,y=c.matrixWorldInverse;l.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==g;++M,x+=4)a.copy(o[M]).applyMatrix4(y,l),a.normal.toArray(m,x),m[x+3]=a.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function K0(r){let e=new WeakMap;function t(a,l){return l===ko?a.mapping=Er:l===zo&&(a.mapping=br),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===ko||l===zo)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new wm(u.height);return h.fromEquirectangularTexture(r,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const l=a.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ur=4,Su=[.125,.215,.35,.446,.526,.582],Pi=20,oo=new Tf,Tu=new Fe;let lo=null,co=0,uo=0,ho=!1;const Ri=(1+Math.sqrt(5))/2,ar=1/Ri,Eu=[new N(-Ri,ar,0),new N(Ri,ar,0),new N(-ar,0,Ri),new N(ar,0,Ri),new N(0,Ri,-ar),new N(0,Ri,ar),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo,co,uo),this._renderer.xr.enabled=ho,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===br?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:hs,format:cn,colorSpace:Rr,depthBuffer:!1},i=Au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j0(s)),this._blurMaterial=J0(s,e,t)}return i}_compileMaterial(e){const t=new un(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,n,i){const l=new $t(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,o=d.autoClear,c=d.toneMapping;d.getClearColor(Tu),d.toneMapping=ci,d.autoClear=!1;const f=new uf({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),_=new un(new ds,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Tu),g=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(l.up.set(0,u[p],0),l.lookAt(h[p],0,0)):y===1?(l.up.set(0,0,u[p]),l.lookAt(0,h[p],0)):(l.up.set(0,u[p],0),l.lookAt(0,0,h[p]));const M=this._cubeSize;Ws(i,y*M,p>2?M:0,M,M),d.setRenderTarget(i),g&&d.render(_,l),d.render(e,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=c,d.autoClear=o,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Er||e.mapping===br;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new un(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;Ws(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,oo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),l=Eu[(i-s-1)%Eu.length];this._blur(e,s-1,s,a,l)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,l){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,o=new un(this._lodPlanes[i],h),c=h.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Pi-1),g=s/_,m=isFinite(s)?1+Math.floor(d*g):Pi;m>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);const p=[];let y=0;for(let w=0;w<Pi;++w){const C=w/g,v=Math.exp(-C*C/2);p.push(v),w===0?y+=v:w<m&&(y+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;c.envMap.value=e.texture,c.samples.value=m,c.weights.value=p,c.latitudinal.value=a==="latitudinal",l&&(c.poleAxis.value=l);const{_lodMax:M}=this;c.dTheta.value=_,c.mipInt.value=M-n;const x=this._sizeLods[i],b=3*x*(i>M-ur?i-M+ur:0),A=4*(this._cubeSize-x);Ws(t,b,A,3*x,2*x),u.setRenderTarget(t),u.render(o,oo)}}function j0(r){const e=[],t=[],n=[];let i=r;const s=r-ur+1+Su.length;for(let a=0;a<s;a++){const l=Math.pow(2,i);t.push(l);let u=1/l;a>r-ur?u=Su[a-r+ur-1]:a===0&&(u=0),n.push(u);const h=1/(l-2),d=-h,o=1+h,c=[d,d,o,d,o,o,d,d,o,o,d,o],f=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*f),M=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,C=A>2?0:-1,v=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(v,g*_*A),M.set(c,m*_*A);const T=[A,A,A,A,A,A];x.set(T,p*_*A)}const b=new $n;b.setAttribute("position",new hn(y,g)),b.setAttribute("uv",new hn(M,m)),b.setAttribute("faceIndex",new hn(x,p)),e.push(b),i>ur&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Au(r,e,t){const n=new zi(r,e,t);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function J0(r,e,t){const n=new Float32Array(Pi),i=new N(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function wu(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ru(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ql(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q0(r){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,h=u===ko||u===zo,d=u===Er||u===br;if(h||d){let o=e.get(l);const c=o!==void 0?o.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==c)return t===null&&(t=new bu(r)),o=h?t.fromEquirectangular(l,o):t.fromCubemap(l,o),o.texture.pmremVersion=l.pmremVersion,e.set(l,o),o.texture;if(o!==void 0)return o.texture;{const f=l.image;return h&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new bu(r)),o=h?t.fromEquirectangular(l):t.fromCubemap(l),o.texture.pmremVersion=l.pmremVersion,e.set(l,o),l.addEventListener("dispose",s),o.texture):null}}}return l}function i(l){let u=0;const h=6;for(let d=0;d<h;d++)l[d]!==void 0&&u++;return u===h}function s(l){const u=l.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ev(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&or("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tv(r,e,t,n){const i={},s=new WeakMap;function a(o){const c=o.target;c.index!==null&&e.remove(c.index);for(const _ in c.attributes)e.remove(c.attributes[_]);c.removeEventListener("dispose",a),delete i[c.id];const f=s.get(c);f&&(e.remove(f),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function l(o,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c}function u(o){const c=o.attributes;for(const f in c)e.update(c[f],r.ARRAY_BUFFER)}function h(o){const c=[],f=o.index,_=o.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let M=0,x=y.length;M<x;M+=3){const b=y[M+0],A=y[M+1],w=y[M+2];c.push(b,A,A,w,w,b)}}else if(_!==void 0){const y=_.array;g=_.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const b=M+0,A=M+1,w=M+2;c.push(b,A,A,w,w,b)}}else return;const m=new(af(c)?ff:hf)(c,1);m.version=g;const p=s.get(o);p&&e.remove(p),s.set(o,m)}function d(o){const c=s.get(o);if(c){const f=o.index;f!==null&&c.version<f.version&&h(o)}else h(o);return s.get(o)}return{get:l,update:u,getWireframeAttribute:d}}function nv(r,e,t){let n;function i(c){n=c}let s,a;function l(c){s=c.type,a=c.bytesPerElement}function u(c,f){r.drawElements(n,f,s,c*a),t.update(f,n,1)}function h(c,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,c*a,_),t.update(f,n,_))}function d(c,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,c,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function o(c,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<c.length;p++)h(c[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,c,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*g[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=o}function iv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=l*(s/3);break;case r.LINES:t.lines+=l*(s/2);break;case r.LINE_STRIP:t.lines+=l*(s-1);break;case r.LINE_LOOP:t.lines+=l*s;break;case r.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rv(r,e,t){const n=new WeakMap,i=new Ye;function s(a,l,u){const h=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,o=d!==void 0?d.length:0;let c=n.get(l);if(c===void 0||c.count!==o){let v=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",v)};c!==void 0&&c.texture.dispose();const f=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let M=0;f===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let x=l.attributes.position.count*M,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*b*4*o),w=new lf(A,x,b,o);w.type=xn,w.needsUpdate=!0;const C=M*4;for(let T=0;T<o;T++){const P=m[T],z=p[T],F=y[T],V=x*b*4*T;for(let q=0;q<P.count;q++){const G=q*C;f===!0&&(i.fromBufferAttribute(P,q),A[V+G+0]=i.x,A[V+G+1]=i.y,A[V+G+2]=i.z,A[V+G+3]=0),_===!0&&(i.fromBufferAttribute(z,q),A[V+G+4]=i.x,A[V+G+5]=i.y,A[V+G+6]=i.z,A[V+G+7]=0),g===!0&&(i.fromBufferAttribute(F,q),A[V+G+8]=i.x,A[V+G+9]=i.y,A[V+G+10]=i.z,A[V+G+11]=F.itemSize===4?i.w:1)}}c={count:o,texture:w,size:new qe(x,b)},n.set(l,c),l.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<h.length;g++)f+=h[g];const _=l.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",h)}u.getUniforms().setValue(r,"morphTargetsTexture",c.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",c.size)}return{update:s}}function sv(r,e,t,n){let i=new WeakMap;function s(u){const h=n.render.frame,d=u.geometry,o=e.get(u,d);if(i.get(o)!==h&&(e.update(o),i.set(o,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),i.get(u)!==h&&(t.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,r.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const c=u.skeleton;i.get(c)!==h&&(c.update(),i.set(c,h))}return o}function a(){i=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}const Af=new bt,Cu=new xf(1,1),wf=new lf,Rf=new hm,Cf=new Yl,Pu=[],Du=[],Iu=new Float32Array(16),Lu=new Float32Array(9),Uu=new Float32Array(4);function Nr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Pu[i];if(s===void 0&&(s=new Float32Array(i),Pu[i]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,r[a].toArray(s,l)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function yt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Sa(r,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function av(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ov(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),yt(t,e)}}function lv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),yt(t,e)}}function cv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),yt(t,e)}}function uv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Uu.set(n),r.uniformMatrix2fv(this.addr,!1,Uu),yt(t,n)}}function hv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Lu.set(n),r.uniformMatrix3fv(this.addr,!1,Lu),yt(t,n)}}function fv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Iu.set(n),r.uniformMatrix4fv(this.addr,!1,Iu),yt(t,n)}}function dv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function pv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),yt(t,e)}}function mv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),yt(t,e)}}function _v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),yt(t,e)}}function gv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),yt(t,e)}}function xv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),yt(t,e)}}function yv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),yt(t,e)}}function Mv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Cu.compareFunction=sf,s=Cu):s=Af,t.setTexture2D(e||s,i)}function Sv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rf,i)}function Tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cf,i)}function Ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wf,i)}function bv(r){switch(r){case 5126:return av;case 35664:return ov;case 35665:return lv;case 35666:return cv;case 35674:return uv;case 35675:return hv;case 35676:return fv;case 5124:case 35670:return dv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return _v;case 5125:return gv;case 36294:return vv;case 36295:return xv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Ev}}function Av(r,e){r.uniform1fv(this.addr,e)}function wv(r,e){const t=Nr(e,this.size,2);r.uniform2fv(this.addr,t)}function Rv(r,e){const t=Nr(e,this.size,3);r.uniform3fv(this.addr,t)}function Cv(r,e){const t=Nr(e,this.size,4);r.uniform4fv(this.addr,t)}function Pv(r,e){const t=Nr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Dv(r,e){const t=Nr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Iv(r,e){const t=Nr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Lv(r,e){r.uniform1iv(this.addr,e)}function Uv(r,e){r.uniform2iv(this.addr,e)}function Nv(r,e){r.uniform3iv(this.addr,e)}function Fv(r,e){r.uniform4iv(this.addr,e)}function Ov(r,e){r.uniform1uiv(this.addr,e)}function Bv(r,e){r.uniform2uiv(this.addr,e)}function kv(r,e){r.uniform3uiv(this.addr,e)}function zv(r,e){r.uniform4uiv(this.addr,e)}function Vv(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Af,s[a])}function Hv(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rf,s[a])}function Gv(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Cf,s[a])}function Wv(r,e,t){const n=this.cache,i=e.length,s=Sa(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||wf,s[a])}function Xv(r){switch(r){case 5126:return Av;case 35664:return wv;case 35665:return Rv;case 35666:return Cv;case 35674:return Pv;case 35675:return Dv;case 35676:return Iv;case 5124:case 35670:return Lv;case 35667:case 35671:return Uv;case 35668:case 35672:return Nv;case 35669:case 35673:return Fv;case 5125:return Ov;case 36294:return Bv;case 36295:return kv;case 36296:return zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Wv}}class qv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bv(t.type)}}class Yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xv(t.type)}}class $v{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const l=i[s];l.setValue(e,t[l.id],n)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function Nu(r,e){r.seq.push(e),r.map[e.id]=e}function Zv(r,e,t){const n=r.name,i=n.length;for(fo.lastIndex=0;;){const s=fo.exec(n),a=fo.lastIndex;let l=s[1];const u=s[2]==="]",h=s[3];if(u&&(l=l|0),h===void 0||h==="["&&a+2===i){Nu(t,h===void 0?new qv(l,r,e):new Yv(l,r,e));break}else{let o=t.map[l];o===void 0&&(o=new $v(l),Nu(t,o)),t=o}}}class ea{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Zv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Fu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Kv=37297;let jv=0;function Jv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}const Ou=new Pe;function Qv(r){Xe._getMatrix(Ou,Xe.workingColorSpace,r);const e=`mat3( ${Ou.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(r)){case ca:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Bu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Jv(r.getShaderSource(e),a)}else return i}function ex(r,e){const t=Qv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tx(r,e){let t;switch(e){case yp:t="Linear";break;case Mp:t="Reinhard";break;case Sp:t="Cineon";break;case Tp:t="ACESFilmic";break;case bp:t="AgX";break;case Ap:t="Neutral";break;case Ep:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xs=new N;function nx(){Xe.getLuminanceCoefficients(Xs);const r=Xs.x.toFixed(4),e=Xs.y.toFixed(4),t=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ix(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function rx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sx(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let l=1;s.type===r.FLOAT_MAT2&&(l=2),s.type===r.FLOAT_MAT3&&(l=3),s.type===r.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:l}}return t}function Zr(r){return r!==""}function ku(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function xl(r){return r.replace(ax,lx)}const ox=new Map;function lx(r,e){let t=Ie[e];if(t===void 0){const n=ox.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xl(t)}const cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(r){return r.replace(cx,ux)}function ux(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function fx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Er:case br:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case br:e="ENVMAP_MODE_REFRACTION";break}return e}function px(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qh:e="ENVMAP_BLENDING_MULTIPLY";break;case vp:e="ENVMAP_BLENDING_MIX";break;case xp:e="ENVMAP_BLENDING_ADD";break}return e}function mx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _x(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const u=hx(t),h=fx(t),d=dx(t),o=px(t),c=mx(t),f=ix(t),_=rx(s),g=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),p=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+o:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Ie.tonemapping_pars_fragment:"",t.toneMapping!==ci?tx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,ex("linearToOutputTexel",t.outputColorSpace),nx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),a=xl(a),a=ku(a,t),a=zu(a,t),l=xl(l),l=ku(l,t),l=zu(l,t),a=Vu(a),l=Vu(l),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+a,x=y+p+l,b=Fu(i,i.VERTEX_SHADER,M),A=Fu(i,i.FRAGMENT_SHADER,x);i.attachShader(g,b),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(b).trim(),V=i.getShaderInfoLog(A).trim();let q=!0,G=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,A);else{const K=Bu(i,b,"vertex"),H=Bu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+K+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(G=!1);G&&(P.diagnostics={runnable:q,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(b),i.deleteShader(A),C=new ea(i,g),v=sx(i,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,Kv)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}let gx=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xx(e),t.set(e,n)),n}}class xx{constructor(e){this.id=gx++,this.code=e,this.usedTimes=0}}function yx(r,e,t,n,i,s,a){const l=new ql,u=new vx,h=new Set,d=[],o=i.logarithmicDepthBuffer,c=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return h.add(v),v===0?"uv":`uv${v}`}function m(v,T,P,z,F){const V=z.fog,q=F.geometry,G=v.isMeshStandardMaterial?z.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),H=K&&K.mapping===va?K.image.height:null,te=_[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const oe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=oe!==void 0?oe.length:0;let Ee=0;q.morphAttributes.position!==void 0&&(Ee=1),q.morphAttributes.normal!==void 0&&(Ee=2),q.morphAttributes.color!==void 0&&(Ee=3);let $e,X,Q,_e;if(te){const je=Sn[te];$e=je.vertexShader,X=je.fragmentShader}else $e=v.vertexShader,X=v.fragmentShader,u.update(v),Q=u.getVertexShaderID(v),_e=u.getFragmentShaderID(v);const se=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,at=!!v.map,Ve=!!v.matcap,ft=!!K,D=!!v.aoMap,tn=!!v.lightMap,Be=!!v.bumpMap,ke=!!v.normalMap,xe=!!v.displacementMap,it=!!v.emissiveMap,ve=!!v.metalnessMap,R=!!v.roughnessMap,S=v.anisotropy>0,O=v.clearcoat>0,$=v.dispersion>0,j=v.iridescence>0,Y=v.sheen>0,ge=v.transmission>0,ae=S&&!!v.anisotropyMap,he=O&&!!v.clearcoatMap,He=O&&!!v.clearcoatNormalMap,ee=O&&!!v.clearcoatRoughnessMap,fe=j&&!!v.iridescenceMap,Se=j&&!!v.iridescenceThicknessMap,be=Y&&!!v.sheenColorMap,de=Y&&!!v.sheenRoughnessMap,ze=!!v.specularMap,De=!!v.specularColorMap,nt=!!v.specularIntensityMap,I=ge&&!!v.transmissionMap,ie=ge&&!!v.thicknessMap,W=!!v.gradientMap,Z=!!v.alphaMap,ce=v.alphaTest>0,le=!!v.alphaHash,Ce=!!v.extensions;let ct=ci;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ct=r.toneMapping);const At={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:$e,fragmentShader:X,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:se===null?r.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Rr,alphaToCoverage:!!v.alphaToCoverage,map:at,matcap:Ve,envMap:ft,envMapMode:ft&&K.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:tn,bumpMap:Be,normalMap:ke,displacementMap:c&&xe,emissiveMap:it,normalMapObjectSpace:ke&&v.normalMapType===Ip,normalMapTangentSpace:ke&&v.normalMapType===rf,metalnessMap:ve,roughnessMap:R,anisotropy:S,anisotropyMap:ae,clearcoat:O,clearcoatMap:he,clearcoatNormalMap:He,clearcoatRoughnessMap:ee,dispersion:$,iridescence:j,iridescenceMap:fe,iridescenceThicknessMap:Se,sheen:Y,sheenColorMap:be,sheenRoughnessMap:de,specularMap:ze,specularColorMap:De,specularIntensityMap:nt,transmission:ge,transmissionMap:I,thicknessMap:ie,gradientMap:W,opaque:v.transparent===!1&&v.blending===pr&&v.alphaToCoverage===!1,alphaMap:Z,alphaTest:ce,alphaHash:le,combine:v.combine,mapUv:at&&g(v.map.channel),aoMapUv:D&&g(v.aoMap.channel),lightMapUv:tn&&g(v.lightMap.channel),bumpMapUv:Be&&g(v.bumpMap.channel),normalMapUv:ke&&g(v.normalMap.channel),displacementMapUv:xe&&g(v.displacementMap.channel),emissiveMapUv:it&&g(v.emissiveMap.channel),metalnessMapUv:ve&&g(v.metalnessMap.channel),roughnessMapUv:R&&g(v.roughnessMap.channel),anisotropyMapUv:ae&&g(v.anisotropyMap.channel),clearcoatMapUv:he&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:He&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(v.sheenRoughnessMap.channel),specularMapUv:ze&&g(v.specularMap.channel),specularColorMapUv:De&&g(v.specularColorMap.channel),specularIntensityMapUv:nt&&g(v.specularIntensityMap.channel),transmissionMapUv:I&&g(v.transmissionMap.channel),thicknessMapUv:ie&&g(v.thicknessMap.channel),alphaMapUv:Z&&g(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ke||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(at||Z),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:o,reverseDepthBuffer:Te,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:at&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===Qe,decodeVideoTextureEmissive:it&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===Qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zn,flipSided:v.side===Vt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ce&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&v.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return At.vertexUv1s=h.has(1),At.vertexUv2s=h.has(2),At.vertexUv3s=h.has(3),h.clear(),At}function p(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)T.push(P),T.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(y(T,v),M(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function y(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){l.disableAll(),T.supportsVertexTextures&&l.enable(0),T.instancing&&l.enable(1),T.instancingColor&&l.enable(2),T.instancingMorph&&l.enable(3),T.matcap&&l.enable(4),T.envMap&&l.enable(5),T.normalMapObjectSpace&&l.enable(6),T.normalMapTangentSpace&&l.enable(7),T.clearcoat&&l.enable(8),T.iridescence&&l.enable(9),T.alphaTest&&l.enable(10),T.vertexColors&&l.enable(11),T.vertexAlphas&&l.enable(12),T.vertexUv1s&&l.enable(13),T.vertexUv2s&&l.enable(14),T.vertexUv3s&&l.enable(15),T.vertexTangents&&l.enable(16),T.anisotropy&&l.enable(17),T.alphaHash&&l.enable(18),T.batching&&l.enable(19),T.dispersion&&l.enable(20),T.batchingColor&&l.enable(21),v.push(l.mask),l.disableAll(),T.fog&&l.enable(0),T.useFog&&l.enable(1),T.flatShading&&l.enable(2),T.logarithmicDepthBuffer&&l.enable(3),T.reverseDepthBuffer&&l.enable(4),T.skinning&&l.enable(5),T.morphTargets&&l.enable(6),T.morphNormals&&l.enable(7),T.morphColors&&l.enable(8),T.premultipliedAlpha&&l.enable(9),T.shadowMapEnabled&&l.enable(10),T.doubleSided&&l.enable(11),T.flipSided&&l.enable(12),T.useDepthPacking&&l.enable(13),T.dithering&&l.enable(14),T.transmission&&l.enable(15),T.sheen&&l.enable(16),T.opaque&&l.enable(17),T.pointsUvs&&l.enable(18),T.decodeVideoTexture&&l.enable(19),T.decodeVideoTextureEmissive&&l.enable(20),T.alphaToCoverage&&l.enable(21),v.push(l.mask)}function x(v){const T=_[v.type];let P;if(T){const z=Sn[T];P=Tm.clone(z.uniforms)}else P=v.uniforms;return P}function b(v,T){let P;for(let z=0,F=d.length;z<F;z++){const V=d[z];if(V.cacheKey===T){P=V,++P.usedTimes;break}}return P===void 0&&(P=new _x(r,T,v,s),d.push(P)),P}function A(v){if(--v.usedTimes===0){const T=d.indexOf(v);d[T]=d[d.length-1],d.pop(),v.destroy()}}function w(v){u.remove(v)}function C(){u.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:w,programs:d,dispose:C}}function Mx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let l=r.get(a);return l===void 0&&(l={},r.set(a,l)),l}function n(a){r.delete(a)}function i(a,l,u){r.get(a)[l]=u}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Sx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(o,c,f,_,g,m){let p=r[e];return p===void 0?(p={id:o.id,object:o,geometry:c,material:f,groupOrder:_,renderOrder:o.renderOrder,z:g,group:m},r[e]=p):(p.id=o.id,p.object=o,p.geometry=c,p.material=f,p.groupOrder=_,p.renderOrder=o.renderOrder,p.z=g,p.group=m),e++,p}function l(o,c,f,_,g,m){const p=a(o,c,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function u(o,c,f,_,g,m){const p=a(o,c,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function h(o,c){t.length>1&&t.sort(o||Sx),n.length>1&&n.sort(c||Gu),i.length>1&&i.sort(c||Gu)}function d(){for(let o=e,c=r.length;o<c;o++){const f=r[o];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:d,sort:h}}function Tx(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Wu,r.set(n,[a])):i>=s.length?(a=new Wu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ex(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Fe};break;case"SpotLight":t={position:new N,direction:new N,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function bx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ax=0;function wx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Rx(r){const e=new Ex,t=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new N);const i=new N,s=new Ue,a=new Ue;function l(h){let d=0,o=0,c=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,y=0,M=0,x=0,b=0,A=0,w=0;h.sort(wx);for(let v=0,T=h.length;v<T;v++){const P=h[v],z=P.color,F=P.intensity,V=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=z.r*F,o+=z.g*F,c+=z.b*F;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],F);w++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(z).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[g]=G;const K=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,K.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=K.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=q,x++}g++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(z).multiplyScalar(F),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const K=P.shadow,H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(F),G.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=o,n.ambient[2]=c;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==M||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=M,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=w,n.version=Ax++)}function u(h,d){let o=0,c=0,f=0,_=0,g=0;const m=d.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const M=h[p];if(M.isDirectionalLight){const x=n.directional[o];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),o++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const x=n.point[c];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),c++}else if(M.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:l,setupView:u,state:n}}function Xu(r){const e=new Rx(r),t=[],n=[];function i(d){h.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function Cx(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let l;return a===void 0?(l=new Xu(r),e.set(i,[l])):s>=a.length?(l=new Xu(r),a.push(l)):l=a[s],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ix(r,e,t){let n=new $l;const i=new qe,s=new qe,a=new Ye,l=new Om({depthPacking:Dp}),u=new Bm,h={},d=t.maxTextureSize,o={[fi]:Vt,[Vt]:fi,[zn]:zn},c=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Px,fragmentShader:Dx}),f=c.clone();f.defines.HORIZONTAL_PASS=1;const _=new $n;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new un(_,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let p=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),z=r.state;z.setBlending(li),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=p!==On&&this.type===On,V=p===On&&this.type!==On;for(let q=0,G=A.length;q<G;q++){const K=A[q],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const te=H.getFrameExtents();if(i.multiply(te),s.copy(H.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(s.x=Math.floor(d/te.x),i.x=s.x*te.x,H.mapSize.x=s.x),i.y>d&&(s.y=Math.floor(d/te.y),i.y=s.y*te.y,H.mapSize.y=s.y)),H.map===null||F===!0||V===!0){const me=this.type!==On?{minFilter:Jt,magFilter:Jt}:{};H.map!==null&&H.map.dispose(),H.map=new zi(i.x,i.y,me),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const oe=H.getViewportCount();for(let me=0;me<oe;me++){const Ee=H.getViewport(me);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),z.viewport(a),H.updateMatrices(K,me),n=H.getFrustum(),x(w,C,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===On&&y(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,T,P)};function y(A,w){const C=e.update(g);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zi(i.x,i.y)),c.uniforms.shadow_pass.value=A.map.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,C,c,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,C,f,g,null)}function M(A,w,C,v){let T=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)T=P;else if(T=C.isPointLight===!0?u:l,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=T.uuid,F=w.uuid;let V=h[z];V===void 0&&(V={},h[z]=V);let q=V[F];q===void 0&&(q=T.clone(),V[F]=q,w.addEventListener("dispose",b)),T=q}if(T.visible=w.visible,T.wireframe=w.wireframe,v===On?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:o[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=r.properties.get(T);z.light=C}return T}function x(A,w,C,v,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===On)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=e.update(A),V=A.material;if(Array.isArray(V)){const q=F.groups;for(let G=0,K=q.length;G<K;G++){const H=q[G],te=V[H.materialIndex];if(te&&te.visible){const oe=M(A,te,v,T);A.onBeforeShadow(r,A,w,C,F,oe,H),r.renderBufferDirect(C,null,F,oe,A,H),A.onAfterShadow(r,A,w,C,F,oe,H)}}}else if(V.visible){const q=M(A,V,v,T);A.onBeforeShadow(r,A,w,C,F,q,null),r.renderBufferDirect(C,null,F,q,A,null),A.onAfterShadow(r,A,w,C,F,q,null)}}const z=A.children;for(let F=0,V=z.length;F<V;F++)x(z[F],w,C,v,T)}function b(A){A.target.removeEventListener("dispose",b);for(const C in h){const v=h[C],T=A.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}const Lx={[Io]:Lo,[Uo]:Oo,[No]:Bo,[Tr]:Fo,[Lo]:Io,[Oo]:Uo,[Bo]:No,[Fo]:Tr};function Ux(r,e){function t(){let I=!1;const ie=new Ye;let W=null;const Z=new Ye(0,0,0,0);return{setMask:function(ce){W!==ce&&!I&&(r.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){I=ce},setClear:function(ce,le,Ce,ct,At){At===!0&&(ce*=ct,le*=ct,Ce*=ct),ie.set(ce,le,Ce,ct),Z.equals(ie)===!1&&(r.clearColor(ce,le,Ce,ct),Z.copy(ie))},reset:function(){I=!1,W=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,W=null,Z=null,ce=null;return{setReversed:function(le){if(ie!==le){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const ct=ce;ce=null,this.setClear(ct)}ie=le},getReversed:function(){return ie},setTest:function(le){le?se(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(le){W!==le&&!I&&(r.depthMask(le),W=le)},setFunc:function(le){if(ie&&(le=Lx[le]),Z!==le){switch(le){case Io:r.depthFunc(r.NEVER);break;case Lo:r.depthFunc(r.ALWAYS);break;case Uo:r.depthFunc(r.LESS);break;case Tr:r.depthFunc(r.LEQUAL);break;case No:r.depthFunc(r.EQUAL);break;case Fo:r.depthFunc(r.GEQUAL);break;case Oo:r.depthFunc(r.GREATER);break;case Bo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=le}},setLocked:function(le){I=le},setClear:function(le){ce!==le&&(ie&&(le=1-le),r.clearDepth(le),ce=le)},reset:function(){I=!1,W=null,Z=null,ce=null,ie=!1}}}function i(){let I=!1,ie=null,W=null,Z=null,ce=null,le=null,Ce=null,ct=null,At=null;return{setTest:function(je){I||(je?se(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(je){ie!==je&&!I&&(r.stencilMask(je),ie=je)},setFunc:function(je,fn,Pn){(W!==je||Z!==fn||ce!==Pn)&&(r.stencilFunc(je,fn,Pn),W=je,Z=fn,ce=Pn)},setOp:function(je,fn,Pn){(le!==je||Ce!==fn||ct!==Pn)&&(r.stencilOp(je,fn,Pn),le=je,Ce=fn,ct=Pn)},setLocked:function(je){I=je},setClear:function(je){At!==je&&(r.clearStencil(je),At=je)},reset:function(){I=!1,ie=null,W=null,Z=null,ce=null,le=null,Ce=null,ct=null,At=null}}}const s=new t,a=new n,l=new i,u=new WeakMap,h=new WeakMap;let d={},o={},c=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,M=null,x=null,b=null,A=null,w=new Fe(0,0,0),C=0,v=!1,T=null,P=null,z=null,F=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=K>=2);let te=null,oe={};const me=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),$e=new Ye().fromArray(me),X=new Ye().fromArray(Ee);function Q(I,ie,W,Z){const ce=new Uint8Array(4),le=r.createTexture();r.bindTexture(I,le),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<W;Ce++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(ie+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return le}const _e={};_e[r.TEXTURE_2D]=Q(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=Q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[r.TEXTURE_2D_ARRAY]=Q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=Q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),se(r.DEPTH_TEST),a.setFunc(Tr),Be(!1),ke(bc),se(r.CULL_FACE),D(li);function se(I){d[I]!==!0&&(r.enable(I),d[I]=!0)}function Te(I){d[I]!==!1&&(r.disable(I),d[I]=!1)}function we(I,ie){return o[I]!==ie?(r.bindFramebuffer(I,ie),o[I]=ie,I===r.DRAW_FRAMEBUFFER&&(o[r.FRAMEBUFFER]=ie),I===r.FRAMEBUFFER&&(o[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ne(I,ie){let W=f,Z=!1;if(I){W=c.get(ie),W===void 0&&(W=[],c.set(ie,W));const ce=I.textures;if(W.length!==ce.length||W[0]!==r.COLOR_ATTACHMENT0){for(let le=0,Ce=ce.length;le<Ce;le++)W[le]=r.COLOR_ATTACHMENT0+le;W.length=ce.length,Z=!0}}else W[0]!==r.BACK&&(W[0]=r.BACK,Z=!0);Z&&r.drawBuffers(W)}function at(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const Ve={[Ci]:r.FUNC_ADD,[tp]:r.FUNC_SUBTRACT,[np]:r.FUNC_REVERSE_SUBTRACT};Ve[ip]=r.MIN,Ve[rp]=r.MAX;const ft={[sp]:r.ZERO,[ap]:r.ONE,[op]:r.SRC_COLOR,[Po]:r.SRC_ALPHA,[dp]:r.SRC_ALPHA_SATURATE,[hp]:r.DST_COLOR,[cp]:r.DST_ALPHA,[lp]:r.ONE_MINUS_SRC_COLOR,[Do]:r.ONE_MINUS_SRC_ALPHA,[fp]:r.ONE_MINUS_DST_COLOR,[up]:r.ONE_MINUS_DST_ALPHA,[pp]:r.CONSTANT_COLOR,[mp]:r.ONE_MINUS_CONSTANT_COLOR,[_p]:r.CONSTANT_ALPHA,[gp]:r.ONE_MINUS_CONSTANT_ALPHA};function D(I,ie,W,Z,ce,le,Ce,ct,At,je){if(I===li){g===!0&&(Te(r.BLEND),g=!1);return}if(g===!1&&(se(r.BLEND),g=!0),I!==ep){if(I!==m||je!==v){if((p!==Ci||x!==Ci)&&(r.blendEquation(r.FUNC_ADD),p=Ci,x=Ci),je)switch(I){case pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ac:r.blendFunc(r.ONE,r.ONE);break;case wc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ac:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,M=null,b=null,A=null,w.set(0,0,0),C=0,m=I,v=je}return}ce=ce||ie,le=le||W,Ce=Ce||Z,(ie!==p||ce!==x)&&(r.blendEquationSeparate(Ve[ie],Ve[ce]),p=ie,x=ce),(W!==y||Z!==M||le!==b||Ce!==A)&&(r.blendFuncSeparate(ft[W],ft[Z],ft[le],ft[Ce]),y=W,M=Z,b=le,A=Ce),(ct.equals(w)===!1||At!==C)&&(r.blendColor(ct.r,ct.g,ct.b,At),w.copy(ct),C=At),m=I,v=!1}function tn(I,ie){I.side===zn?Te(r.CULL_FACE):se(r.CULL_FACE);let W=I.side===Vt;ie&&(W=!W),Be(W),I.blending===pr&&I.transparent===!1?D(li):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Z=I.stencilWrite;l.setTest(Z),Z&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),it(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){T!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),T=I)}function ke(I){I!==jd?(se(r.CULL_FACE),I!==P&&(I===bc?r.cullFace(r.BACK):I===Jd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),P=I}function xe(I){I!==z&&(G&&r.lineWidth(I),z=I)}function it(I,ie,W){I?(se(r.POLYGON_OFFSET_FILL),(F!==ie||V!==W)&&(r.polygonOffset(ie,W),F=ie,V=W)):Te(r.POLYGON_OFFSET_FILL)}function ve(I){I?se(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function R(I){I===void 0&&(I=r.TEXTURE0+q-1),te!==I&&(r.activeTexture(I),te=I)}function S(I,ie,W){W===void 0&&(te===null?W=r.TEXTURE0+q-1:W=te);let Z=oe[W];Z===void 0&&(Z={type:void 0,texture:void 0},oe[W]=Z),(Z.type!==I||Z.texture!==ie)&&(te!==W&&(r.activeTexture(W),te=W),r.bindTexture(I,ie||_e[I]),Z.type=I,Z.texture=ie)}function O(){const I=oe[te];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(I){$e.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),$e.copy(I))}function de(I){X.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),X.copy(I))}function ze(I,ie){let W=h.get(ie);W===void 0&&(W=new WeakMap,h.set(ie,W));let Z=W.get(I);Z===void 0&&(Z=r.getUniformBlockIndex(ie,I.name),W.set(I,Z))}function De(I,ie){const Z=h.get(ie).get(I);u.get(ie)!==Z&&(r.uniformBlockBinding(ie,Z,I.__bindingPointIndex),u.set(ie,Z))}function nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},te=null,oe={},o={},c=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,M=null,x=null,b=null,A=null,w=new Fe(0,0,0),C=0,v=!1,T=null,P=null,z=null,F=null,V=null,$e.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:se,disable:Te,bindFramebuffer:we,drawBuffers:Ne,useProgram:at,setBlending:D,setMaterial:tn,setFlipSided:Be,setCullFace:ke,setLineWidth:xe,setPolygonOffset:it,setScissorTest:ve,activeTexture:R,bindTexture:S,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:j,texImage2D:fe,texImage3D:Se,updateUBOMapping:ze,uniformBlockBinding:De,texStorage2D:He,texStorage3D:ee,texSubImage2D:Y,texSubImage3D:ge,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:be,viewport:de,reset:nt}}function Nx(r,e,t,n,i,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qe,d=new WeakMap;let o;const c=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return f?new OffscreenCanvas(R,S):cs("canvas")}function g(R,S,O){let $=1;const j=ve(R);if((j.width>O||j.height>O)&&($=O/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor($*j.width),ge=Math.floor($*j.height);o===void 0&&(o=_(Y,ge));const ae=S?_(Y,ge):o;return ae.width=Y,ae.height=ge,ae.getContext("2d").drawImage(R,0,0,Y,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+ge+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,S,O,$,j=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=S;if(S===r.RED&&(O===r.FLOAT&&(Y=r.R32F),O===r.HALF_FLOAT&&(Y=r.R16F),O===r.UNSIGNED_BYTE&&(Y=r.R8)),S===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.R8UI),O===r.UNSIGNED_SHORT&&(Y=r.R16UI),O===r.UNSIGNED_INT&&(Y=r.R32UI),O===r.BYTE&&(Y=r.R8I),O===r.SHORT&&(Y=r.R16I),O===r.INT&&(Y=r.R32I)),S===r.RG&&(O===r.FLOAT&&(Y=r.RG32F),O===r.HALF_FLOAT&&(Y=r.RG16F),O===r.UNSIGNED_BYTE&&(Y=r.RG8)),S===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RG8UI),O===r.UNSIGNED_SHORT&&(Y=r.RG16UI),O===r.UNSIGNED_INT&&(Y=r.RG32UI),O===r.BYTE&&(Y=r.RG8I),O===r.SHORT&&(Y=r.RG16I),O===r.INT&&(Y=r.RG32I)),S===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),O===r.UNSIGNED_INT&&(Y=r.RGB32UI),O===r.BYTE&&(Y=r.RGB8I),O===r.SHORT&&(Y=r.RGB16I),O===r.INT&&(Y=r.RGB32I)),S===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),O===r.UNSIGNED_INT&&(Y=r.RGBA32UI),O===r.BYTE&&(Y=r.RGBA8I),O===r.SHORT&&(Y=r.RGBA16I),O===r.INT&&(Y=r.RGBA32I)),S===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),S===r.RGBA){const ge=j?ca:Xe.getTransfer($);O===r.FLOAT&&(Y=r.RGBA32F),O===r.HALF_FLOAT&&(Y=r.RGBA16F),O===r.UNSIGNED_BYTE&&(Y=ge===Qe?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(R,S){let O;return R?S===null||S===ki||S===Ar?O=r.DEPTH24_STENCIL8:S===xn?O=r.DEPTH32F_STENCIL8:S===ls&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ki||S===Ar?O=r.DEPTH_COMPONENT24:S===xn?O=r.DEPTH_COMPONENT32F:S===ls&&(O=r.DEPTH_COMPONENT16),O}function b(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&d.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),T(S)}function C(R){const S=n.get(R);if(S.__webglInit===void 0)return;const O=R.source,$=c.get(O);if($){const j=$[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(R),Object.keys($).length===0&&c.delete(O)}n.remove(R)}function v(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const O=R.source,$=c.get(O);delete $[S.__cacheKey],a.memory.textures--}function T(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let j=0;j<S.__webglFramebuffer[$].length;j++)r.deleteFramebuffer(S.__webglFramebuffer[$][j]);else r.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)r.deleteFramebuffer(S.__webglFramebuffer[$]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=R.textures;for(let $=0,j=O.length;$<j;$++){const Y=n.get(O[$]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(R)}let P=0;function z(){P=0}function F(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function V(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function q(R,S){const O=n.get(R);if(R.isVideoTexture&&xe(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,R,S);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+S)}function G(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){X(O,R,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+S)}function K(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){X(O,R,S);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+S)}function H(R,S){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Q(O,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+S)}const te={[Vo]:r.REPEAT,[Ii]:r.CLAMP_TO_EDGE,[Ho]:r.MIRRORED_REPEAT},oe={[Jt]:r.NEAREST,[Rp]:r.NEAREST_MIPMAP_NEAREST,[gs]:r.NEAREST_MIPMAP_LINEAR,[ln]:r.LINEAR,[Ua]:r.LINEAR_MIPMAP_NEAREST,[Li]:r.LINEAR_MIPMAP_LINEAR},me={[Lp]:r.NEVER,[kp]:r.ALWAYS,[Up]:r.LESS,[sf]:r.LEQUAL,[Np]:r.EQUAL,[Bp]:r.GEQUAL,[Fp]:r.GREATER,[Op]:r.NOTEQUAL};function Ee(R,S){if(S.type===xn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===Ua||S.magFilter===gs||S.magFilter===Li||S.minFilter===ln||S.minFilter===Ua||S.minFilter===gs||S.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,te[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,oe[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,oe[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jt||S.minFilter!==gs&&S.minFilter!==Li||S.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function $e(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const $=S.source;let j=c.get($);j===void 0&&(j={},c.set($,j));const Y=V(S);if(Y!==R.__cacheKey){j[Y]===void 0&&(j[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,O=!0),j[Y].usedTimes++;const ge=j[R.__cacheKey];ge!==void 0&&(j[R.__cacheKey].usedTimes--,ge.usedTimes===0&&v(S)),R.__cacheKey=Y,R.__webglTexture=j[Y].texture}return O}function X(R,S,O){let $=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=r.TEXTURE_3D);const j=$e(R,S),Y=S.source;t.bindTexture($,R.__webglTexture,r.TEXTURE0+O);const ge=n.get(Y);if(Y.version!==ge.__version||j===!0){t.activeTexture(r.TEXTURE0+O);const ae=Xe.getPrimaries(Xe.workingColorSpace),he=S.colorSpace===ti?null:Xe.getPrimaries(S.colorSpace),He=S.colorSpace===ti||ae===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ee=g(S.image,!1,i.maxTextureSize);ee=it(S,ee);const fe=s.convert(S.format,S.colorSpace),Se=s.convert(S.type);let be=M(S.internalFormat,fe,Se,S.colorSpace,S.isVideoTexture);Ee($,S);let de;const ze=S.mipmaps,De=S.isVideoTexture!==!0,nt=ge.__version===void 0||j===!0,I=Y.dataReady,ie=b(S,ee);if(S.isDepthTexture)be=x(S.format===wr,S.type),nt&&(De?t.texStorage2D(r.TEXTURE_2D,1,be,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,be,ee.width,ee.height,0,fe,Se,null));else if(S.isDataTexture)if(ze.length>0){De&&nt&&t.texStorage2D(r.TEXTURE_2D,ie,be,ze[0].width,ze[0].height);for(let W=0,Z=ze.length;W<Z;W++)de=ze[W],De?I&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,de.width,de.height,fe,Se,de.data):t.texImage2D(r.TEXTURE_2D,W,be,de.width,de.height,0,fe,Se,de.data);S.generateMipmaps=!1}else De?(nt&&t.texStorage2D(r.TEXTURE_2D,ie,be,ee.width,ee.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,Se,ee.data)):t.texImage2D(r.TEXTURE_2D,0,be,ee.width,ee.height,0,fe,Se,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,be,ze[0].width,ze[0].height,ee.depth);for(let W=0,Z=ze.length;W<Z;W++)if(de=ze[W],S.format!==cn)if(fe!==null)if(De){if(I)if(S.layerUpdates.size>0){const ce=Mu(de.width,de.height,S.format,S.type);for(const le of S.layerUpdates){const Ce=de.data.subarray(le*ce/de.data.BYTES_PER_ELEMENT,(le+1)*ce/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,le,de.width,de.height,1,fe,Ce)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,ee.depth,fe,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,W,be,de.width,de.height,ee.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,ee.depth,fe,Se,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,W,be,de.width,de.height,ee.depth,0,fe,Se,de.data)}else{De&&nt&&t.texStorage2D(r.TEXTURE_2D,ie,be,ze[0].width,ze[0].height);for(let W=0,Z=ze.length;W<Z;W++)de=ze[W],S.format!==cn?fe!==null?De?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,W,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(r.TEXTURE_2D,W,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?I&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,de.width,de.height,fe,Se,de.data):t.texImage2D(r.TEXTURE_2D,W,be,de.width,de.height,0,fe,Se,de.data)}else if(S.isDataArrayTexture)if(De){if(nt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ie,be,ee.width,ee.height,ee.depth),I)if(S.layerUpdates.size>0){const W=Mu(ee.width,ee.height,S.format,S.type);for(const Z of S.layerUpdates){const ce=ee.data.subarray(Z*W/ee.data.BYTES_PER_ELEMENT,(Z+1)*W/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,fe,Se,ce)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Se,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,ee.width,ee.height,ee.depth,0,fe,Se,ee.data);else if(S.isData3DTexture)De?(nt&&t.texStorage3D(r.TEXTURE_3D,ie,be,ee.width,ee.height,ee.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Se,ee.data)):t.texImage3D(r.TEXTURE_3D,0,be,ee.width,ee.height,ee.depth,0,fe,Se,ee.data);else if(S.isFramebufferTexture){if(nt)if(De)t.texStorage2D(r.TEXTURE_2D,ie,be,ee.width,ee.height);else{let W=ee.width,Z=ee.height;for(let ce=0;ce<ie;ce++)t.texImage2D(r.TEXTURE_2D,ce,be,W,Z,0,fe,Se,null),W>>=1,Z>>=1}}else if(ze.length>0){if(De&&nt){const W=ve(ze[0]);t.texStorage2D(r.TEXTURE_2D,ie,be,W.width,W.height)}for(let W=0,Z=ze.length;W<Z;W++)de=ze[W],De?I&&t.texSubImage2D(r.TEXTURE_2D,W,0,0,fe,Se,de):t.texImage2D(r.TEXTURE_2D,W,be,fe,Se,de);S.generateMipmaps=!1}else if(De){if(nt){const W=ve(ee);t.texStorage2D(r.TEXTURE_2D,ie,be,W.width,W.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Se,ee)}else t.texImage2D(r.TEXTURE_2D,0,be,fe,Se,ee);m(S)&&p($),ge.__version=Y.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Q(R,S,O){if(S.image.length!==6)return;const $=$e(R,S),j=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+O);const Y=n.get(j);if(j.version!==Y.__version||$===!0){t.activeTexture(r.TEXTURE0+O);const ge=Xe.getPrimaries(Xe.workingColorSpace),ae=S.colorSpace===ti?null:Xe.getPrimaries(S.colorSpace),he=S.colorSpace===ti||ge===ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let Z=0;Z<6;Z++)!He&&!ee?fe[Z]=g(S.image[Z],!0,i.maxCubemapSize):fe[Z]=ee?S.image[Z].image:S.image[Z],fe[Z]=it(S,fe[Z]);const Se=fe[0],be=s.convert(S.format,S.colorSpace),de=s.convert(S.type),ze=M(S.internalFormat,be,de,S.colorSpace),De=S.isVideoTexture!==!0,nt=Y.__version===void 0||$===!0,I=j.dataReady;let ie=b(S,Se);Ee(r.TEXTURE_CUBE_MAP,S);let W;if(He){De&&nt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,ze,Se.width,Se.height);for(let Z=0;Z<6;Z++){W=fe[Z].mipmaps;for(let ce=0;ce<W.length;ce++){const le=W[ce];S.format!==cn?be!==null?De?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,le.width,le.height,be,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,ze,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,0,0,le.width,le.height,be,de,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce,ze,le.width,le.height,0,be,de,le.data)}}}else{if(W=S.mipmaps,De&&nt){W.length>0&&ie++;const Z=ve(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ie,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){De?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe[Z].width,fe[Z].height,be,de,fe[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,fe[Z].width,fe[Z].height,0,be,de,fe[Z].data);for(let ce=0;ce<W.length;ce++){const Ce=W[ce].image[Z].image;De?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,Ce.width,Ce.height,be,de,Ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,ze,Ce.width,Ce.height,0,be,de,Ce.data)}}else{De?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,de,fe[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,be,de,fe[Z]);for(let ce=0;ce<W.length;ce++){const le=W[ce];De?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,0,0,be,de,le.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce+1,ze,be,de,le.image[Z])}}}m(S)&&p(r.TEXTURE_CUBE_MAP),Y.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function _e(R,S,O,$,j,Y){const ge=s.convert(O.format,O.colorSpace),ae=s.convert(O.type),he=M(O.internalFormat,ge,ae,O.colorSpace),He=n.get(S),ee=n.get(O);if(ee.__renderTarget=S,!He.__hasExternalTextures){const fe=Math.max(1,S.width>>Y),Se=Math.max(1,S.height>>Y);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,Y,he,fe,Se,S.depth,0,ge,ae,null):t.texImage2D(j,Y,he,fe,Se,0,ge,ae,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ke(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,j,ee.__webglTexture,0,Be(S)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,j,ee.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(R,S,O){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,j=$&&$.isDepthTexture?$.type:null,Y=x(S.stencilBuffer,j),ge=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=Be(S);ke(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,Y,S.width,S.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,Y,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,R)}else{const $=S.textures;for(let j=0;j<$.length;j++){const Y=$[j],ge=s.convert(Y.format,Y.colorSpace),ae=s.convert(Y.type),he=M(Y.internalFormat,ge,ae,Y.colorSpace),He=Be(S);O&&ke(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,he,S.width,S.height):ke(S)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,he,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,he,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const j=$.__webglTexture,Y=Be(S);if(S.depthTexture.format===mr)ke(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(S.depthTexture.format===wr)ke(S)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function we(R){const S=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,R)}else if(O){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=r.createRenderbuffer(),se(S.__webglDepthbuffer[$],R,!1);else{const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),se(S.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,j)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(R,S,O){const $=n.get(R);S!==void 0&&_e($.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&we(R)}function at(R){const S=R.texture,O=n.get(R),$=n.get(S);R.addEventListener("dispose",w);const j=R.textures,Y=R.isWebGLCubeRenderTarget===!0,ge=j.length>1;if(ge||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=S.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let he=0;he<S.mipmaps.length;he++)O.__webglFramebuffer[ae][he]=r.createFramebuffer()}else O.__webglFramebuffer[ae]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)O.__webglFramebuffer[ae]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(ge)for(let ae=0,he=j.length;ae<he;ae++){const He=n.get(j[ae]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ke(R)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const he=j[ae];O.__webglColorRenderbuffer[ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);const He=s.convert(he.format,he.colorSpace),ee=s.convert(he.type),fe=M(he.internalFormat,He,ee,he.colorSpace,R.isXRRenderTarget===!0),Se=Be(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,fe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),se(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ee(r.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)_e(O.__webglFramebuffer[ae][he],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else _e(O.__webglFramebuffer[ae],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ae=0,he=j.length;ae<he;ae++){const He=j[ae],ee=n.get(He);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),Ee(r.TEXTURE_2D,He),_e(O.__webglFramebuffer,R,He,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,0),m(He)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let ae=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),Ee(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)_e(O.__webglFramebuffer[he],R,S,r.COLOR_ATTACHMENT0,ae,he);else _e(O.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ae,0);m(S)&&p(ae),t.unbindTexture()}R.depthBuffer&&we(R)}function Ve(R){const S=R.textures;for(let O=0,$=S.length;O<$;O++){const j=S[O];if(m(j)){const Y=y(R),ge=n.get(j).__webglTexture;t.bindTexture(Y,ge),p(Y),t.unbindTexture()}}}const ft=[],D=[];function tn(R){if(R.samples>0){if(ke(R)===!1){const S=R.textures,O=R.width,$=R.height;let j=r.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(R),ae=S.length>1;if(ae)for(let he=0;he<S.length;he++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<S.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const He=n.get(S[he]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,He,0)}r.blitFramebuffer(0,0,O,$,0,0,O,$,j,r.NEAREST),u===!0&&(ft.length=0,D.length=0,ft.push(r.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ft.push(Y),D.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<S.length;he++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const He=n.get(S[he]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&u){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Be(R){return Math.min(i.maxSamples,R.samples)}function ke(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xe(R){const S=a.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function it(R,S){const O=R.colorSpace,$=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Rr&&O!==ti&&(Xe.getTransfer(O)===Qe?($!==cn||j!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Ne,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ke}function Fx(r,e){function t(n,i=ti){let s;const a=Xe.getTransfer(i);if(n===qn)return r.UNSIGNED_BYTE;if(n===kl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===zl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return r.BYTE;if(n===Zh)return r.SHORT;if(n===ls)return r.UNSIGNED_SHORT;if(n===Bl)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===xn)return r.FLOAT;if(n===hs)return r.HALF_FLOAT;if(n===jh)return r.ALPHA;if(n===Jh)return r.RGB;if(n===cn)return r.RGBA;if(n===Qh)return r.LUMINANCE;if(n===ef)return r.LUMINANCE_ALPHA;if(n===mr)return r.DEPTH_COMPONENT;if(n===wr)return r.DEPTH_STENCIL;if(n===Vl)return r.RED;if(n===Hl)return r.RED_INTEGER;if(n===tf)return r.RG;if(n===Gl)return r.RG_INTEGER;if(n===Wl)return r.RGBA_INTEGER;if(n===Zs||n===Ks||n===js||n===Js)if(a===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Wo||n===Xo||n===qo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yo||n===$o||n===Zo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yo||n===$o)return a===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ko||n===jo||n===Jo||n===Qo||n===el||n===tl||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ko)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qo)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cl)return a===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qs||n===ul||n===hl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qs)return a===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nf||n===fl||n===dl||n===pl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Ox={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(h,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=h.joints["index-finger-tip"],o=h.joints["thumb-tip"],c=d.position.distanceTo(o.position),f=.02,_=.005;h.inputState.pinching&&c>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&c<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ox)))}return l!==null&&(l.visible=i!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:Bx,fragmentShader:kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vx extends Hi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,l="local-floor",u=1,h=null,d=null,o=null,c=null,f=null,_=null;const g=new zx,m=t.getContextAttributes();let p=null,y=null;const M=[],x=[],b=new qe;let A=null;const w=new $t;w.viewport=new Ye;const C=new $t;C.viewport=new Ye;const v=[w,C],T=new Qm;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=M[X];return Q===void 0&&(Q=new po,M[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=M[X];return Q===void 0&&(Q=new po,M[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=M[X];return Q===void 0&&(Q=new po,M[X]=Q),Q.getHandSpace()};function F(X){const Q=x.indexOf(X.inputSource);if(Q===-1)return;const _e=M[Q];_e!==void 0&&(_e.update(X.inputSource,X.frame,h||a),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let X=0;X<M.length;X++){const Q=x[X];Q!==null&&(x[X]=null,M[X].disconnect(Q))}P=null,z=null,g.reset(),e.setRenderTarget(p),f=null,c=null,o=null,i=null,y=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return c!==null?c:f},this.getBinding=function(){return o},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let _e=null,se=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?wr:mr,se=m.stencil?Ar:ki);const we={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};o=new XRWebGLBinding(i,t),c=o.createProjectionLayer(we),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),y=new zi(c.textureWidth,c.textureHeight,{format:cn,type:qn,depthTexture:new xf(c.textureWidth,c.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new zi(f.framebufferWidth,f.framebufferHeight,{format:cn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}y.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await i.requestReferenceSpace(l),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(X){for(let Q=0;Q<X.removed.length;Q++){const _e=X.removed[Q],se=x.indexOf(_e);se>=0&&(x[se]=null,M[se].disconnect(_e))}for(let Q=0;Q<X.added.length;Q++){const _e=X.added[Q];let se=x.indexOf(_e);if(se===-1){for(let we=0;we<M.length;we++)if(we>=x.length){x.push(_e),se=we;break}else if(x[we]===null){x[we]=_e,se=we;break}if(se===-1)break}const Te=M[se];Te&&Te.connect(_e)}}const G=new N,K=new N;function H(X,Q,_e){G.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const se=G.distanceTo(K),Te=Q.projectionMatrix.elements,we=_e.projectionMatrix.elements,Ne=Te[14]/(Te[10]-1),at=Te[14]/(Te[10]+1),Ve=(Te[9]+1)/Te[5],ft=(Te[9]-1)/Te[5],D=(Te[8]-1)/Te[0],tn=(we[8]+1)/we[0],Be=Ne*D,ke=Ne*tn,xe=se/(-D+tn),it=xe*-D;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(it),X.translateZ(xe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ve=Ne+xe,R=at+xe,S=Be-it,O=ke+(se-it),$=Ve*at/R*ve,j=ft*at/R*ve;X.projectionMatrix.makePerspective(S,O,$,j,ve,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function te(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let Q=X.near,_e=X.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),T.near=C.near=w.near=Q,T.far=C.far=w.far=_e,(P!==T.near||z!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,z=T.far),w.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,T.layers.mask=w.layers.mask|C.layers.mask;const se=X.parent,Te=T.cameras;te(T,se);for(let we=0;we<Te.length;we++)te(Te[we],se);Te.length===2?H(T,w,C):T.projectionMatrix.copy(w.projectionMatrix),oe(X,T,se)};function oe(X,Q,_e){_e===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Cr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(c===null&&f===null))return u},this.setFoveation=function(X){u=X,c!==null&&(c.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)};let me=null;function Ee(X,Q){if(d=Q.getViewerPose(h||a),_=Q,d!==null){const _e=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let se=!1;_e.length!==T.cameras.length&&(T.cameras.length=0,se=!0);for(let we=0;we<_e.length;we++){const Ne=_e[we];let at=null;if(f!==null)at=f.getViewport(Ne);else{const ft=o.getViewSubImage(c,Ne);at=ft.viewport,we===0&&(e.setRenderTargetTextures(y,ft.colorTexture,c.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(y))}let Ve=v[we];Ve===void 0&&(Ve=new $t,Ve.layers.enable(we),Ve.viewport=new Ye,v[we]=Ve),Ve.matrix.fromArray(Ne.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ne.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(at.x,at.y,at.width,at.height),we===0&&(T.matrix.copy(Ve.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),se===!0&&T.cameras.push(Ve)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const we=o.getDepthInformation(_e[0]);we&&we.isValid&&we.texture&&g.init(e,we,i.renderState)}}for(let _e=0;_e<M.length;_e++){const se=x[_e],Te=M[_e];se!==null&&Te!==void 0&&Te.update(se,Q,h||a)}me&&me(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const $e=new bf;$e.setAnimationLoop(Ee),this.setAnimationLoop=function(X){me=X},this.dispose=function(){}}}const bi=new Rn,Hx=new Ue;function Gx(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,df(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),o(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),c(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?u(m,p,y,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,bi.copy(x),bi.x*=-1,bi.y*=-1,bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(bi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function u(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function o(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function c(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wx(r,e,t,n){let i={},s={},a=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function h(y,M){let x=i[y.id];x===void 0&&(_(y),x=d(y),i[y.id]=x,y.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(y,b);const A=e.render.frame;s[y.id]!==A&&(c(y),s[y.id]=A)}function d(y){const M=o();y.__bindingPointIndex=M;const x=r.createBuffer(),b=y.__size,A=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,b,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function o(){for(let y=0;y<l;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(y){const M=i[y.id],x=y.uniforms,b=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,w=x.length;A<w;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,T=C.length;v<T;v++){const P=C[v];if(f(P,A,v,b)===!0){const z=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let q=0;q<F.length;q++){const G=F[q],K=g(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,z+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,x,b){const A=y.value,w=M+"_"+x;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const C=b[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return b[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function _(y){const M=y.uniforms;let x=0;const b=16;for(let w=0,C=M.length;w<C;w++){const v=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,P=v.length;T<P;T++){const z=v[T],F=Array.isArray(z.value)?z.value:[z.value];for(let V=0,q=F.length;V<q;V++){const G=F[V],K=g(G),H=x%b,te=H%K.boundary,oe=H+te;x+=te,oe!==0&&b-oe<K.storage&&(x+=b-oe),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=K.storage}}}const A=x%b;return A>0&&(x+=b-A),y.__size=x,y.__cache={},this}function g(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:u,update:h,dispose:p}}class yy{constructor(e={}){const{canvas:t=nm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:o=!1,reverseDepthBuffer:c=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=ci,this.toneMappingExposure=1;const x=this;let b=!1,A=0,w=0,C=null,v=-1,T=null;const P=new Ye,z=new Ye;let F=null;const V=new Fe(0);let q=0,G=t.width,K=t.height,H=1,te=null,oe=null;const me=new Ye(0,0,G,K),Ee=new Ye(0,0,G,K);let $e=!1;const X=new $l;let Q=!1,_e=!1;this.transmissionResolutionScale=1;const se=new Ue,Te=new Ue,we=new N,Ne=new Ye,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ft(){return C===null?H:1}let D=n;function tn(E,L){return t.getContext(E,L)}try{const E={alpha:!0,depth:i,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:o};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ol}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),D===null){const L="webgl2";if(D=tn(L,E),D===null)throw tn(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Be,ke,xe,it,ve,R,S,O,$,j,Y,ge,ae,he,He,ee,fe,Se,be,de,ze,De,nt,I;function ie(){Be=new ev(D),Be.init(),De=new Fx(D,Be),ke=new $0(D,Be,e,De),xe=new Ux(D,Be),ke.reverseDepthBuffer&&c&&xe.buffers.depth.setReversed(!0),it=new iv(D),ve=new Mx,R=new Nx(D,Be,xe,ve,ke,De,it),S=new K0(x),O=new Q0(x),$=new u_(D),nt=new q0(D,$),j=new tv(D,$,it,nt),Y=new sv(D,j,$,it),be=new rv(D,ke,R),ee=new Z0(ve),ge=new yx(x,S,O,Be,ke,nt,ee),ae=new Gx(x,ve),he=new Tx,He=new Cx(Be),Se=new X0(x,S,O,xe,Y,f,u),fe=new Ix(x,Y,ke),I=new Wx(D,it,ke,xe),de=new Y0(D,Be,it),ze=new nv(D,Be,it),it.programs=ge.programs,x.capabilities=ke,x.extensions=Be,x.properties=ve,x.renderLists=he,x.shadowMap=fe,x.state=xe,x.info=it}ie();const W=new Vx(x,D);this.xr=W,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(G,K,!1))},this.getSize=function(E){return E.set(G,K)},this.setSize=function(E,L,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,K=L,t.width=Math.floor(E*H),t.height=Math.floor(L*H),B===!0&&(t.style.width=E+"px",t.style.height=L+"px"),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(G*H,K*H).floor()},this.setDrawingBufferSize=function(E,L,B){G=E,K=L,H=B,t.width=Math.floor(E*B),t.height=Math.floor(L*B),this.setViewport(0,0,E,L)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,L,B,k){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,L,B,k),xe.viewport(P.copy(me).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Ee)},this.setScissor=function(E,L,B,k){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,L,B,k),xe.scissor(z.copy(Ee).multiplyScalar(H).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(E){xe.setScissorTest($e=E)},this.setOpaqueSort=function(E){te=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(E=!0,L=!0,B=!0){let k=0;if(E){let U=!1;if(C!==null){const J=C.texture.format;U=J===Wl||J===Gl||J===Hl}if(U){const J=C.texture.type,re=J===qn||J===ki||J===ls||J===Ar||J===kl||J===zl,ue=Se.getClearColor(),pe=Se.getClearAlpha(),Ae=ue.r,Re=ue.g,ye=ue.b;re?(_[0]=Ae,_[1]=Re,_[2]=ye,_[3]=pe,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Ae,g[1]=Re,g[2]=ye,g[3]=pe,D.clearBufferiv(D.COLOR,0,g))}else k|=D.COLOR_BUFFER_BIT}L&&(k|=D.DEPTH_BUFFER_BIT),B&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Se.dispose(),he.dispose(),He.dispose(),ve.dispose(),S.dispose(),O.dispose(),Y.dispose(),nt.dispose(),I.dispose(),ge.dispose(),W.dispose(),W.removeEventListener("sessionstart",ec),W.removeEventListener("sessionend",tc),_i.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=it.autoReset,L=fe.enabled,B=fe.autoUpdate,k=fe.needsUpdate,U=fe.type;ie(),it.autoReset=E,fe.enabled=L,fe.autoUpdate=B,fe.needsUpdate=k,fe.type=U}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){const L=E.target;L.removeEventListener("dispose",Ce),ct(L)}function ct(E){At(E),ve.remove(E)}function At(E){const L=ve.get(E).programs;L!==void 0&&(L.forEach(function(B){ge.releaseProgram(B)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,B,k,U,J){L===null&&(L=at);const re=U.isMesh&&U.matrixWorld.determinant()<0,ue=Pf(E,L,B,k,U);xe.setMaterial(k,re);let pe=B.index,Ae=1;if(k.wireframe===!0){if(pe=j.getWireframeAttribute(B),pe===void 0)return;Ae=2}const Re=B.drawRange,ye=B.attributes.position;let Ge=Re.start*Ae,Ze=(Re.start+Re.count)*Ae;J!==null&&(Ge=Math.max(Ge,J.start*Ae),Ze=Math.min(Ze,(J.start+J.count)*Ae)),pe!==null?(Ge=Math.max(Ge,0),Ze=Math.min(Ze,pe.count)):ye!=null&&(Ge=Math.max(Ge,0),Ze=Math.min(Ze,ye.count));const mt=Ze-Ge;if(mt<0||mt===1/0)return;nt.setup(U,k,ue,B,pe);let ut,We=de;if(pe!==null&&(ut=$.get(pe),We=ze,We.setIndex(ut)),U.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*ft()),We.setMode(D.LINES)):We.setMode(D.TRIANGLES);else if(U.isLine){let Me=k.linewidth;Me===void 0&&(Me=1),xe.setLineWidth(Me*ft()),U.isLineSegments?We.setMode(D.LINES):U.isLineLoop?We.setMode(D.LINE_LOOP):We.setMode(D.LINE_STRIP)}else U.isPoints?We.setMode(D.POINTS):U.isSprite&&We.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)We.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))We.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Me=U._multiDrawStarts,Tt=U._multiDrawCounts,Ke=U._multiDrawCount,dn=pe?$.get(pe).bytesPerElement:1,Wi=ve.get(k).currentProgram.getUniforms();for(let Gt=0;Gt<Ke;Gt++)Wi.setValue(D,"_gl_DrawID",Gt),We.render(Me[Gt]/dn,Tt[Gt])}else if(U.isInstancedMesh)We.renderInstances(Ge,mt,U.count);else if(B.isInstancedBufferGeometry){const Me=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Tt=Math.min(B.instanceCount,Me);We.renderInstances(Ge,mt,Tt)}else We.render(Ge,mt)};function je(E,L,B){E.transparent===!0&&E.side===zn&&E.forceSinglePass===!1?(E.side=Vt,E.needsUpdate=!0,ms(E,L,B),E.side=fi,E.needsUpdate=!0,ms(E,L,B),E.side=zn):ms(E,L,B)}this.compile=function(E,L,B=null){B===null&&(B=E),p=He.get(B),p.init(L),M.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),E!==B&&E.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const k=new Set;return E.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const J=U.material;if(J)if(Array.isArray(J))for(let re=0;re<J.length;re++){const ue=J[re];je(ue,B,U),k.add(ue)}else je(J,B,U),k.add(J)}),M.pop(),p=null,k},this.compileAsync=function(E,L,B=null){const k=this.compile(E,L,B);return new Promise(U=>{function J(){if(k.forEach(function(re){ve.get(re).currentProgram.isReady()&&k.delete(re)}),k.size===0){U(E);return}setTimeout(J,10)}Be.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let fn=null;function Pn(E){fn&&fn(E)}function ec(){_i.stop()}function tc(){_i.start()}const _i=new bf;_i.setAnimationLoop(Pn),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(E){fn=E,W.setAnimationLoop(E),E===null?_i.stop():_i.start()},W.addEventListener("sessionstart",ec),W.addEventListener("sessionend",tc),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,L,C),p=He.get(E,M.length),p.init(L),M.push(p),Te.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(Te),_e=this.localClippingEnabled,Q=ee.init(this.clippingPlanes,_e),m=he.get(E,y.length),m.init(),y.push(m),W.enabled===!0&&W.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&Ta(J,L,-1/0,x.sortObjects)}Ta(E,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,oe),Ve=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ve&&Se.addToRenderList(m,E),this.info.render.frame++,Q===!0&&ee.beginShadows();const B=p.state.shadowsArray;fe.render(B,E,L),Q===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(p.setupLights(),L.isArrayCamera){const J=L.cameras;if(U.length>0)for(let re=0,ue=J.length;re<ue;re++){const pe=J[re];ic(k,U,E,pe)}Ve&&Se.render(E);for(let re=0,ue=J.length;re<ue;re++){const pe=J[re];nc(m,E,pe,pe.viewport)}}else U.length>0&&ic(k,U,E,L),Ve&&Se.render(E),nc(m,E,L);C!==null&&w===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,L),nt.resetDefaultState(),v=-1,T=null,M.pop(),M.length>0?(p=M[M.length-1],Q===!0&&ee.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ta(E,L,B,k){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){k&&Ne.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Te);const re=Y.update(E),ue=E.material;ue.visible&&m.push(E,re,ue,B,Ne.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const re=Y.update(E),ue=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ne.copy(E.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ne.copy(re.boundingSphere.center)),Ne.applyMatrix4(E.matrixWorld).applyMatrix4(Te)),Array.isArray(ue)){const pe=re.groups;for(let Ae=0,Re=pe.length;Ae<Re;Ae++){const ye=pe[Ae],Ge=ue[ye.materialIndex];Ge&&Ge.visible&&m.push(E,re,Ge,B,Ne.z,ye)}}else ue.visible&&m.push(E,re,ue,B,Ne.z,null)}}const J=E.children;for(let re=0,ue=J.length;re<ue;re++)Ta(J[re],L,B,k)}function nc(E,L,B,k){const U=E.opaque,J=E.transmissive,re=E.transparent;p.setupLightsView(B),Q===!0&&ee.setGlobalState(x.clippingPlanes,B),k&&xe.viewport(P.copy(k)),U.length>0&&ps(U,L,B),J.length>0&&ps(J,L,B),re.length>0&&ps(re,L,B),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ic(E,L,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new zi(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?hs:qn,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const J=p.state.transmissionRenderTarget[k.id],re=k.viewport||P;J.setSize(re.z*x.transmissionResolutionScale,re.w*x.transmissionResolutionScale);const ue=x.getRenderTarget();x.setRenderTarget(J),x.getClearColor(V),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&Se.render(B);const pe=x.toneMapping;x.toneMapping=ci;const Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),Q===!0&&ee.setGlobalState(x.clippingPlanes,k),ps(E,B,k),R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ye=0,Ge=L.length;ye<Ge;ye++){const Ze=L[ye],mt=Ze.object,ut=Ze.geometry,We=Ze.material,Me=Ze.group;if(We.side===zn&&mt.layers.test(k.layers)){const Tt=We.side;We.side=Vt,We.needsUpdate=!0,rc(mt,B,k,ut,We,Me),We.side=Tt,We.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J))}x.setRenderTarget(ue),x.setClearColor(V,q),Ae!==void 0&&(k.viewport=Ae),x.toneMapping=pe}function ps(E,L,B){const k=L.isScene===!0?L.overrideMaterial:null;for(let U=0,J=E.length;U<J;U++){const re=E[U],ue=re.object,pe=re.geometry,Ae=k===null?re.material:k,Re=re.group;ue.layers.test(B.layers)&&rc(ue,L,B,pe,Ae,Re)}}function rc(E,L,B,k,U,J){E.onBeforeRender(x,L,B,k,U,J),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.onBeforeRender(x,L,B,k,E,J),U.transparent===!0&&U.side===zn&&U.forceSinglePass===!1?(U.side=Vt,U.needsUpdate=!0,x.renderBufferDirect(B,L,k,U,E,J),U.side=fi,U.needsUpdate=!0,x.renderBufferDirect(B,L,k,U,E,J),U.side=zn):x.renderBufferDirect(B,L,k,U,E,J),E.onAfterRender(x,L,B,k,U,J)}function ms(E,L,B){L.isScene!==!0&&(L=at);const k=ve.get(E),U=p.state.lights,J=p.state.shadowsArray,re=U.state.version,ue=ge.getParameters(E,U.state,J,L,B),pe=ge.getProgramCacheKey(ue);let Ae=k.programs;k.environment=E.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",Ce),Ae=new Map,k.programs=Ae);let Re=Ae.get(pe);if(Re!==void 0){if(k.currentProgram===Re&&k.lightsStateVersion===re)return ac(E,ue),Re}else ue.uniforms=ge.getUniforms(E),E.onBeforeCompile(ue,x),Re=ge.acquireProgram(ue,pe),Ae.set(pe,Re),k.uniforms=ue.uniforms;const ye=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=ee.uniform),ac(E,ue),k.needsLights=If(E),k.lightsStateVersion=re,k.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Re,k.uniformsList=null,Re}function sc(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=ea.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function ac(E,L){const B=ve.get(E);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Pf(E,L,B,k,U){L.isScene!==!0&&(L=at),R.resetTextureUnits();const J=L.fog,re=k.isMeshStandardMaterial?L.environment:null,ue=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Rr,pe=(k.isMeshStandardMaterial?O:S).get(k.envMap||re),Ae=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ye=!!B.morphAttributes.position,Ge=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color;let mt=ci;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(mt=x.toneMapping);const ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,We=ut!==void 0?ut.length:0,Me=ve.get(k),Tt=p.state.lights;if(Q===!0&&(_e===!0||E!==T)){const It=E===T&&k.id===v;ee.setState(k,E,It)}let Ke=!1;k.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Tt.state.version||Me.outputColorSpace!==ue||U.isBatchedMesh&&Me.batching===!1||!U.isBatchedMesh&&Me.batching===!0||U.isBatchedMesh&&Me.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Me.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Me.instancing===!1||!U.isInstancedMesh&&Me.instancing===!0||U.isSkinnedMesh&&Me.skinning===!1||!U.isSkinnedMesh&&Me.skinning===!0||U.isInstancedMesh&&Me.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Me.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Me.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Me.instancingMorph===!1&&U.morphTexture!==null||Me.envMap!==pe||k.fog===!0&&Me.fog!==J||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==Re||Me.morphTargets!==ye||Me.morphNormals!==Ge||Me.morphColors!==Ze||Me.toneMapping!==mt||Me.morphTargetsCount!==We)&&(Ke=!0):(Ke=!0,Me.__version=k.version);let dn=Me.currentProgram;Ke===!0&&(dn=ms(k,L,U));let Wi=!1,Gt=!1,Fr=!1;const rt=dn.getUniforms(),nn=Me.uniforms;if(xe.useProgram(dn.program)&&(Wi=!0,Gt=!0,Fr=!0),k.id!==v&&(v=k.id,Gt=!0),Wi||T!==E){xe.buffers.depth.getReversed()?(se.copy(E.projectionMatrix),rm(se),sm(se),rt.setValue(D,"projectionMatrix",se)):rt.setValue(D,"projectionMatrix",E.projectionMatrix),rt.setValue(D,"viewMatrix",E.matrixWorldInverse);const Ft=rt.map.cameraPosition;Ft!==void 0&&Ft.setValue(D,we.setFromMatrixPosition(E.matrixWorld)),ke.logarithmicDepthBuffer&&rt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&rt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,Gt=!0,Fr=!0)}if(U.isSkinnedMesh){rt.setOptional(D,U,"bindMatrix"),rt.setOptional(D,U,"bindMatrixInverse");const It=U.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),rt.setValue(D,"boneTexture",It.boneTexture,R))}U.isBatchedMesh&&(rt.setOptional(D,U,"batchingTexture"),rt.setValue(D,"batchingTexture",U._matricesTexture,R),rt.setOptional(D,U,"batchingIdTexture"),rt.setValue(D,"batchingIdTexture",U._indirectTexture,R),rt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&rt.setValue(D,"batchingColorTexture",U._colorsTexture,R));const rn=B.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&be.update(U,B,dn),(Gt||Me.receiveShadow!==U.receiveShadow)&&(Me.receiveShadow=U.receiveShadow,rt.setValue(D,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(nn.envMap.value=pe,nn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(nn.envMapIntensity.value=L.environmentIntensity),Gt&&(rt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Me.needsLights&&Df(nn,Fr),J&&k.fog===!0&&ae.refreshFogUniforms(nn,J),ae.refreshMaterialUniforms(nn,k,H,K,p.state.transmissionRenderTarget[E.id]),ea.upload(D,sc(Me),nn,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ea.upload(D,sc(Me),nn,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&rt.setValue(D,"center",U.center),rt.setValue(D,"modelViewMatrix",U.modelViewMatrix),rt.setValue(D,"normalMatrix",U.normalMatrix),rt.setValue(D,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const It=k.uniformsGroups;for(let Ft=0,Ea=It.length;Ft<Ea;Ft++){const gi=It[Ft];I.update(gi,dn),I.bind(gi,dn)}}return dn}function Df(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function If(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,L,B){ve.get(E.texture).__webglTexture=L,ve.get(E.depthTexture).__webglTexture=B;const k=ve.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,L){const B=ve.get(E);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const Lf=D.createFramebuffer();this.setRenderTarget=function(E,L=0,B=0){C=E,A=L,w=B;let k=!0,U=null,J=!1,re=!1;if(E){const pe=ve.get(E);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(pe.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(pe.__hasExternalTextures)R.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(pe.__boundDepthTexture!==ye){if(ye!==null&&ve.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(re=!0);const Re=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?U=Re[L][B]:U=Re[L],J=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?U=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[B]:U=Re,P.copy(E.viewport),z.copy(E.scissor),F=E.scissorTest}else P.copy(me).multiplyScalar(H).floor(),z.copy(Ee).multiplyScalar(H).floor(),F=$e;if(B!==0&&(U=Lf),xe.bindFramebuffer(D.FRAMEBUFFER,U)&&k&&xe.drawBuffers(E,U),xe.viewport(P),xe.scissor(z),xe.setScissorTest(F),J){const pe=ve.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,B)}else if(re){const pe=ve.get(E.texture),Ae=L;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,pe.__webglTexture,B,Ae)}else if(E!==null&&B!==0){const pe=ve.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,B)}v=-1},this.readRenderTargetPixels=function(E,L,B,k,U,J,re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){xe.bindFramebuffer(D.FRAMEBUFFER,ue);try{const pe=E.texture,Ae=pe.format,Re=pe.type;if(!ke.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-k&&B>=0&&B<=E.height-U&&D.readPixels(L,B,k,U,De.convert(Ae),De.convert(Re),J)}finally{const pe=C!==null?ve.get(C).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(E,L,B,k,U,J,re){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&re!==void 0&&(ue=ue[re]),ue){const pe=E.texture,Ae=pe.format,Re=pe.type;if(!ke.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=E.width-k&&B>=0&&B<=E.height-U){xe.bindFramebuffer(D.FRAMEBUFFER,ue);const ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),D.readPixels(L,B,k,U,De.convert(Ae),De.convert(Re),0);const Ge=C!==null?ve.get(C).__webglFramebuffer:null;xe.bindFramebuffer(D.FRAMEBUFFER,Ge);const Ze=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await im(D,Ze,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(ye),D.deleteSync(Ze),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,L=null,B=0){E.isTexture!==!0&&(or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-B),U=Math.floor(E.image.width*k),J=Math.floor(E.image.height*k),re=L!==null?L.x:0,ue=L!==null?L.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,B,0,0,re,ue,U,J),xe.unbindTexture()};const Uf=D.createFramebuffer(),Nf=D.createFramebuffer();this.copyTextureToTexture=function(E,L,B=null,k=null,U=0,J=null){E.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],L=arguments[2],J=arguments[3]||0,B=null),J===null&&(U!==0?(or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let re,ue,pe,Ae,Re,ye,Ge,Ze,mt;const ut=E.isCompressedTexture?E.mipmaps[J]:E.image;if(B!==null)re=B.max.x-B.min.x,ue=B.max.y-B.min.y,pe=B.isBox3?B.max.z-B.min.z:1,Ae=B.min.x,Re=B.min.y,ye=B.isBox3?B.min.z:0;else{const rn=Math.pow(2,-U);re=Math.floor(ut.width*rn),ue=Math.floor(ut.height*rn),E.isDataArrayTexture?pe=ut.depth:E.isData3DTexture?pe=Math.floor(ut.depth*rn):pe=1,Ae=0,Re=0,ye=0}k!==null?(Ge=k.x,Ze=k.y,mt=k.z):(Ge=0,Ze=0,mt=0);const We=De.convert(L.format),Me=De.convert(L.type);let Tt;L.isData3DTexture?(R.setTexture3D(L,0),Tt=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(R.setTexture2DArray(L,0),Tt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(L,0),Tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const Ke=D.getParameter(D.UNPACK_ROW_LENGTH),dn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Wi=D.getParameter(D.UNPACK_SKIP_PIXELS),Gt=D.getParameter(D.UNPACK_SKIP_ROWS),Fr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,Re),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ye);const rt=E.isDataArrayTexture||E.isData3DTexture,nn=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){const rn=ve.get(E),It=ve.get(L),Ft=ve.get(rn.__renderTarget),Ea=ve.get(It.__renderTarget);xe.bindFramebuffer(D.READ_FRAMEBUFFER,Ft.__webglFramebuffer),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let gi=0;gi<pe;gi++)rt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(E).__webglTexture,U,ye+gi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.get(L).__webglTexture,J,mt+gi)),D.blitFramebuffer(Ae,Re,re,ue,Ge,Ze,re,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(U!==0||E.isRenderTargetTexture||ve.has(E)){const rn=ve.get(E),It=ve.get(L);xe.bindFramebuffer(D.READ_FRAMEBUFFER,Uf),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Nf);for(let Ft=0;Ft<pe;Ft++)rt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,rn.__webglTexture,U,ye+Ft):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,rn.__webglTexture,U),nn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,J,mt+Ft):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,It.__webglTexture,J),U!==0?D.blitFramebuffer(Ae,Re,re,ue,Ge,Ze,re,ue,D.COLOR_BUFFER_BIT,D.NEAREST):nn?D.copyTexSubImage3D(Tt,J,Ge,Ze,mt+Ft,Ae,Re,re,ue):D.copyTexSubImage2D(Tt,J,Ge,Ze,Ae,Re,re,ue);xe.bindFramebuffer(D.READ_FRAMEBUFFER,null),xe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else nn?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Tt,J,Ge,Ze,mt,re,ue,pe,We,Me,ut.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,J,Ge,Ze,mt,re,ue,pe,We,ut.data):D.texSubImage3D(Tt,J,Ge,Ze,mt,re,ue,pe,We,Me,ut):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,Ge,Ze,re,ue,We,Me,ut.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,Ge,Ze,ut.width,ut.height,We,ut.data):D.texSubImage2D(D.TEXTURE_2D,J,Ge,Ze,re,ue,We,Me,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ke),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Wi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fr),J===0&&L.generateMipmaps&&D.generateMipmap(Tt),xe.unbindTexture()},this.copyTextureToTexture3D=function(E,L,B=null,k=null,U=0){return E.isTexture!==!0&&(or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,E=arguments[2],L=arguments[3],U=arguments[4]||0),or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,L,B,k,U)},this.initRenderTarget=function(E){ve.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,xe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}export{gf as $,Fm as A,$n as B,xy as C,dy as D,zn as E,ly as F,et as G,ey as H,ty as I,un as J,ny as K,Ur as L,qx as M,Jt as N,pt as O,wi as P,Dr as Q,fs as R,vy as S,Yx as T,vf as U,N as V,iy as W,ry as X,Vs as Y,$t as Z,Tf as _,qe as a,oy as a0,Cm as a1,ml as a2,Ue as a3,Rp as a4,Ua as a5,gs as a6,Ii as a7,Ho as a8,la as a9,fi as aa,mf as ab,bt as ac,pa as ad,da as ae,Ma as af,mi as ag,Yn as ah,ya as ai,Jx as aj,yy as ak,Kd as al,cy as am,xa as an,di as ao,Ef as ap,sy as aq,Rn as ar,gy as as,Ym as at,_y as au,jx as b,Yt as c,Rr as d,hn as e,Fe as f,Xe as g,$x as h,Kx as i,Zx as j,py as k,hy as l,fy as m,uf as n,ay as o,su as p,uy as q,Xx as r,my as s,Qx as t,ln as u,Li as v,Vo as w,Nm as x,Gi as y,Um as z};
