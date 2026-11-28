var rd=Object.defineProperty;var ad=(i,e)=>{for(var t in e)rd(i,t,{get:e[t],enumerable:!0})};var xr=class{constructor(e="worker.js"){this.worker=new Worker(e,{type:"module"}),this.next=1,this.waiting=new Map,this.onprogress=null,this.ready=new Promise((t,n)=>{this._ready=t,this._failed=n}),this.worker.onmessage=t=>{let n=t.data;if(n.progress){this.onprogress&&this.onprogress(n.progress.stage,n.progress.fraction);return}if(n.ready){this._ready();return}if(n.failed){this._failed(new Error(n.failed));return}let s=this.waiting.get(n.id);s&&(this.waiting.delete(n.id),n.ok?s.resolve(n.result):s.reject(new Error(n.error)))},this.worker.onerror=t=>this._failed(new Error(t.message||"The viewer's worker stopped."))}call(e,...t){let n=this.next++,s=t.filter(r=>r instanceof ArrayBuffer);return new Promise((r,a)=>{this.waiting.set(n,{resolve:r,reject:a}),this.worker.postMessage({id:n,fn:e,args:t},s)})}};var lh=0,cl=1,ch=2;var Ei=1,hh=2,rs=3,ui=0,Lt=1,Xt=2,Ai=0,as=1,hl=2,ul=3,dl=4,uh=5;var Ci=100,dh=101,fh=102,ph=103,mh=104,gh=200,_h=201,xh=202,vh=203,fl=204,pl=205,yh=206,Mh=207,Sh=208,bh=209,wh=210,Th=211,Eh=212,Ah=213,Ch=214,Wr=0,Ji=1,Xr=2,Ki=3,qr=4,$r=5,Yr=6,Zr=7,Ma=0,Rh=1,Ph=2,jt=0,ml=1,gl=2,_l=3,Js=4,xl=5,vl=6,yl=7;var Ml=300,Ri=301,os=302,Sa=303,ba=304,ti=1e3,Tn=1001,Jr=1002,ft=1003,Ih=1004;var Ks=1005;var Vt=1006,wa=1007;var ln=1008;var Bt=1009,Sl=1010,bl=1011,ls=1012,Ta=1013,gn=1014,cn=1015,_n=1016,Ea=1017,Aa=1018,Pi=1020,wl=35902,Tl=35899,El=1021,Al=1022,xn=1023,Hn=1026,Xn=1027,cs=1028,Ca=1029,di=1030,Ra=1031;var Pa=1033,js=33776,Qs=33777,er=33778,tr=33779,Ia=35840,La=35841,Da=35842,Na=35843,Ua=36196,Fa=37492,Oa=37496,Ba=37488,ka=37489,nr=37490,za=37491,Ha=37808,Va=37809,Ga=37810,Wa=37811,Xa=37812,qa=37813,$a=37814,Ya=37815,Za=37816,Ja=37817,Ka=37818,ja=37819,Qa=37820,eo=37821,to=36492,no=36494,io=36495,so=36283,ro=36284,ir=36285,ao=36286;var Cs=2300,Kr=2301,Vr=2302,el=2303,tl=2400,nl=2401,il=2402;var Lh=3200;var sr=0,Dh=1,vn="",Ht="srgb",Rs="srgb-linear",Ps="linear",je="srgb";var Gr=7680;var Nh=519,Uh=512,Fh=513,Oh=514,Cl=515,Bh=516,kh=517,Rl=518,Pl=519,zh=35044;var Il="300 es",an=2e3,ji=2001;function od(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ld(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){let i=Is("canvas");return i.style.display="block",i}var Ic={},Qi=null;function Ll(...i){let e="THREE."+i.shift();Qi?Qi("log",e,...i):console.log(e,...i)}function Vh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=Vh(i);let e="THREE."+i.shift();if(Qi)Qi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ie(...i){i=Vh(i);let e="THREE."+i.shift();if(Qi)Qi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function As(...i){let e=i.join(" ");e in Ic||(Ic[e]=!0,Re(...i))}function Gh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Wh={[Wr]:Wr,[Xr]:Yr,[qr]:qr,[Ki]:$r,[Ji]:Ji,[Yr]:Xr,[Zr]:Zr,[$r]:Ki},En=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Io=Math.PI/180,jr=180/Math.PI;function rr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function cd(i,e){return(i%e+e)%e}function Lo(i,e,t){return(1-t)*i+t*e}function Xh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hd(i,e){if(e.constructor===Float32Array)return i;let t=Dl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function ud(i,e){if(e.constructor===Float32Array)return i;let t=Dl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Bl=class Bl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bl.prototype.isVector2=!0;var He=Bl,Zt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||c!==d||l!==f||h!==g){let p=c*d+l*f+h*g+u*x;p<0&&(d=-d,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),T=Math.sin(M);m=Math.sin(m*M)/T,o=Math.sin(o*M)/T,c=c*m+d*o,l=l*m+f*o,h=h*m+g*o,u=u*m+x*o}else{c=c*m+d*o,l=l*m+f*o,h=h*m+g*o,u=u*m+x*o;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},kl=class kl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kl.prototype.isVector3=!0;var D=kl,Do=new D,Lc=new Zt,zl=class zl{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],p=s[3],m=s[6],M=s[1],T=s[4],w=s[7],C=s[2],E=s[5],_=s[8];return r[0]=a*x+o*M+c*C,r[3]=a*p+o*T+c*E,r[6]=a*m+o*w+c*_,r[1]=l*x+h*M+u*C,r[4]=l*p+h*T+u*E,r[7]=l*m+h*w+u*_,r[2]=d*x+f*M+g*C,r[5]=d*p+f*T+g*E,r[8]=d*m+f*w+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(No.makeScale(e,t)),this}rotate(e){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(No.makeRotation(-e)),this}translate(e,t){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zl.prototype.isMatrix3=!0;var Le=zl,No=new Le,Dc=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){let i={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===je&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vn?Ps:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rs]:{primaries:e,whitePoint:n,transfer:Ps,toXYZ:Dc,fromXYZ:Nc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:je,toXYZ:Dc,fromXYZ:Nc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}var qe=dd();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ui,Qr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=Is("canvas")),Ui.width=e.width,Ui.height=e.height;let s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Is("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fd=0,es=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var pd=0,Fo=new D,Pt=class i extends En{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Tn,s=Tn,r=Vt,a=ln,o=xn,c=Bt,l=i.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=rr(),this.name="",this.source=new es(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fo).x}get height(){return this.source.getSize(Fo).y}get depth(){return this.source.getSize(Fo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ti:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ti:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Ml;Pt.DEFAULT_ANISOTROPY=1;var Hl=class Hl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,w=(f+1)/2,C=(m+1)/2,E=(h+d)/4,_=(u+x)/4,b=(g+p)/4;return T>w&&T>C?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=E/n,r=_/n):w>C?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=E/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=_/r,s=b/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hl.prototype.isVector4=!0;var ct=Hl,ea=class extends En{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Pt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new es(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends ea{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ls=class extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ft,this.minFilter=ft,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ta=class extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ft,this.minFilter=ft,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ya=class ya{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,p)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ya().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,gd)}lookAt(e,t,n){let s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Zn.crossVectors(n,qt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Zn.crossVectors(n,qt)),Zn.normalize(),vr.crossVectors(qt,Zn),s[0]=Zn.x,s[4]=vr.x,s[8]=qt.x,s[1]=Zn.y,s[5]=vr.y,s[9]=qt.y,s[2]=Zn.z,s[6]=vr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],p=n[10],m=n[14],M=n[3],T=n[7],w=n[11],C=n[15],E=s[0],_=s[4],b=s[8],B=s[12],I=s[1],N=s[5],z=s[9],q=s[13],P=s[2],W=s[6],J=s[10],H=s[14],te=s[3],G=s[7],j=s[11],Q=s[15];return r[0]=a*E+o*I+c*P+l*te,r[4]=a*_+o*N+c*W+l*G,r[8]=a*b+o*z+c*J+l*j,r[12]=a*B+o*q+c*H+l*Q,r[1]=h*E+u*I+d*P+f*te,r[5]=h*_+u*N+d*W+f*G,r[9]=h*b+u*z+d*J+f*j,r[13]=h*B+u*q+d*H+f*Q,r[2]=g*E+x*I+p*P+m*te,r[6]=g*_+x*N+p*W+m*G,r[10]=g*b+x*z+p*J+m*j,r[14]=g*B+x*q+p*H+m*Q,r[3]=M*E+T*I+w*P+C*te,r[7]=M*_+T*N+w*W+C*G,r[11]=M*b+T*z+w*J+C*j,r[15]=M*B+T*q+w*H+C*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],M=c*f-l*d,T=o*f-l*u,w=o*d-c*u,C=a*f-l*h,E=a*d-c*h,_=a*u-o*h;return t*(x*M-p*T+m*w)-n*(g*M-p*C+m*E)+s*(g*T-x*C+m*_)-r*(g*w-x*E+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],M=t*o-n*a,T=t*c-s*a,w=t*l-r*a,C=n*c-s*o,E=n*l-r*o,_=s*l-r*c,b=h*x-u*g,B=h*p-d*g,I=h*m-f*g,N=u*p-d*x,z=u*m-f*x,q=d*m-f*p,P=M*q-T*z+w*N+C*I-E*B+_*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/P;return e[0]=(o*q-c*z+l*N)*W,e[1]=(s*z-n*q-r*N)*W,e[2]=(x*_-p*E+m*C)*W,e[3]=(d*E-u*_-f*C)*W,e[4]=(c*I-a*q-l*B)*W,e[5]=(t*q-s*I+r*B)*W,e[6]=(p*w-g*_-m*T)*W,e[7]=(h*_-d*w+f*T)*W,e[8]=(a*z-o*I+l*b)*W,e[9]=(n*I-t*z-r*b)*W,e[10]=(g*E-x*w+m*M)*W,e[11]=(u*w-h*E-f*M)*W,e[12]=(o*B-a*N-c*b)*W,e[13]=(t*N-n*B+s*b)*W,e[14]=(x*T-g*C-p*M)*W,e[15]=(h*C-u*T+d*M)*W,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,x=a*h,p=a*u,m=o*u,M=c*l,T=c*h,w=c*u,C=n.x,E=n.y,_=n.z;return s[0]=(1-(x+m))*C,s[1]=(f+w)*C,s[2]=(g-T)*C,s[3]=0,s[4]=(f-w)*E,s[5]=(1-(d+m))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(g+T)*_,s[9]=(p-M)*_,s[10]=(1-(d+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Fi.set(s[0],s[1],s[2]).length(),o=Fi.set(s[4],s[5],s[6]).length(),c=Fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),dn.copy(this);let l=1/a,h=1/o,u=1/c;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=h,dn.elements[5]*=h,dn.elements[6]*=h,dn.elements[8]*=u,dn.elements[9]*=u,dn.elements[10]*=u,t.setFromRotationMatrix(dn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=an,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===an)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ji)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=an,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===an)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===ji)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ya.prototype.isMatrix4=!0;var Je=ya,Fi=new D,dn=new Je,md=new D(0,0,0),gd=new D(1,1,1),Zn=new D,vr=new D,qt=new D,Uc=new Je,Fc=new Zt,An=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Uc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var ts=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_d=0,Oc=new D,Oi=new Zt,Un=new Je,yr=new D,ys=new D,xd=new D,vd=new Zt,Bc=new D(1,0,0),kc=new D(0,1,0),zc=new D(0,0,1),Hc={type:"added"},yd={type:"removed"},Bi={type:"childadded",child:null},Oo={type:"childremoved",child:null},yt=class i extends En{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new An,n=new Zt,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new Le}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(Bc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(zc,e)}translateOnAxis(e,t){return Oc.copy(e).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yr.copy(e):yr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ys,yr,this.up):Un.lookAt(yr,ys,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Un),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hc),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Md={type:"move"},ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=cd(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Bo(a,r,e+1/3),this.g=Bo(a,r,e),this.b=Bo(a,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return qe.workingToColorSpace(Ft.copy(this),e),Math.round($e(Ft.r*255,0,255))*65536+Math.round($e(Ft.g*255,0,255))*256+Math.round($e(Ft.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Ft.copy(this),t);let n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Ht){qe.workingToColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,s=Ft.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(Mr);let n=Lo(Jn.h,Mr.h,t),s=Lo(Jn.s,Mr.s,t),r=Lo(Jn.l,Mr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Ee;Ee.NAMES=qh;var Ds=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Si=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fn=new D,Fn=new D,ko=new D,On=new D,ki=new D,zi=new D,Vc=new D,zo=new D,Ho=new D,Vo=new D,Go=new ct,Wo=new ct,Xo=new ct,ei=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),fn.subVectors(e,t),s.cross(fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){fn.subVectors(s,t),Fn.subVectors(n,t),ko.subVectors(e,t);let a=fn.dot(fn),o=fn.dot(Fn),c=fn.dot(ko),l=Fn.dot(Fn),h=Fn.dot(ko),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Go.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Go.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Wo,r.y),a.addScaledVector(Xo,r.z),a}static isFrontFacing(e,t,n,s){return fn.subVectors(n,t),Fn.subVectors(e,t),fn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),fn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ki.subVectors(s,n),zi.subVectors(r,n),zo.subVectors(e,n);let c=ki.dot(zo),l=zi.dot(zo);if(c<=0&&l<=0)return t.copy(n);Ho.subVectors(e,s);let h=ki.dot(Ho),u=zi.dot(Ho);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(ki,a);Vo.subVectors(e,r);let f=ki.dot(Vo),g=zi.dot(Vo);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(zi,o);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Vc.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Vc,o);let m=1/(p+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(ki,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ms),br.subVectors(this.max,Ms),Hi.subVectors(e.a,Ms),Vi.subVectors(e.b,Ms),Gi.subVectors(e.c,Ms),Kn.subVectors(Vi,Hi),jn.subVectors(Gi,Vi),xi.subVectors(Hi,Gi);let t=[0,-Kn.z,Kn.y,0,-jn.z,jn.y,0,-xi.z,xi.y,Kn.z,0,-Kn.x,jn.z,0,-jn.x,xi.z,0,-xi.x,-Kn.y,Kn.x,0,-jn.y,jn.x,0,-xi.y,xi.x,0];return!qo(t,Hi,Vi,Gi,br)||(t=[1,0,0,0,1,0,0,0,1],!qo(t,Hi,Vi,Gi,br))?!1:(wr.crossVectors(Kn,jn),t=[wr.x,wr.y,wr.z],qo(t,Hi,Vi,Gi,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bn=[new D,new D,new D,new D,new D,new D,new D,new D],pn=new D,Sr=new Cn,Hi=new D,Vi=new D,Gi=new D,Kn=new D,jn=new D,xi=new D,Ms=new D,br=new D,wr=new D,vi=new D;function qo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vi.fromArray(i,r);let o=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var gt=new D,Tr=new He,Sd=0,dt=class extends En{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zh,this.updateRanges=[],this.gpuType=cn,this.version=0,this._normalizationScale=e!==void 0?Dl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tr.fromBufferAttribute(this,t),Tr.applyMatrix3(e),this.setXY(t,Tr.x,Tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):ud(e,this.array)}};var Ns=class extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Us=class extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Rt=class extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},bd=new Cn,Ss=new D,$o=new D,Vn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):bd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);let t=Ss.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add($o)),this.expandByPoint(Ss.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wd=0,rn=new Je,Yo=new yt,Wi=new D,$t=new Cn,bs=new Cn,Et=new D,It=class i extends En{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(od(e)?Us:Ns)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors($t.min,bs.min),$t.expandByPoint(Et),Et.addVectors($t.max,bs.max),$t.expandByPoint(Et)):($t.expandByPoint(bs.min),$t.expandByPoint(bs.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(Wi.fromBufferAttribute(e,l),Et.add(Wi)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new dt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new D,c[B]=new D;let h=new D,u=new D,d=new D,f=new He,g=new He,x=new He,p=new D,m=new D;function M(B,I,N){l[B]=l[I]=l[N]=1,h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,B),g.fromBufferAttribute(r,I),x.fromBufferAttribute(r,N),u.sub(h),d.sub(h),g.sub(f),x.sub(f);let z=1/(g.x*x.y-x.x*g.y);isFinite(z)&&(p.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(z),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(z),o[B].add(p),o[I].add(p),o[N].add(p),c[B].add(m),c[I].add(m),c[N].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,I=T.length;B<I;++B){let N=T[B],z=N.start,q=N.count;for(let P=z,W=z+q;P<W;P+=3)M(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let w=new D,C=new D,E=new D,_=new D;function b(B){E.fromBufferAttribute(s,B),_.copy(E);let I=o[B];w.copy(I),w.sub(E.multiplyScalar(E.dot(I))).normalize(),C.crossVectors(_,I);let z=C.dot(c[B])<0?-1:1;a.setXYZW(B,w.x,w.y,w.z,z)}for(let B=0,I=n.count;B<I;++B)l[B]&&b(B);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new dt(d,h,u)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zo=new D,Td=new D,Ed=new Le,Yt=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zo.subVectors(n,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Zo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ed.getNormalMatrix(e),s=this.coplanarPoint(Zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ad=0,mn=class extends En{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=as,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ee().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var kn=new D,Jo=new D,Er=new D,Ar=new D,is=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jo.copy(e).add(t).multiplyScalar(.5),Er.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(Jo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Er),o=Ar.dot(this.direction),c=-Ar.dot(Er),l=Ar.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jo).addScaledVector(Er,d),f}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,p=t.z-a.z,m=n.x-a.x,M=n.y-a.y,T=n.z-a.z,w=Math.abs(c),C=Math.abs(l),E=Math.abs(h),_,b,B,I,N,z,q,P,W,J,H,te;if(w>=C&&w>=E?(B=c,z=u,W=g,te=m,c>=0?(_=l,b=h,I=d,N=f,q=x,P=p,J=M,H=T):(_=h,b=l,I=f,N=d,q=p,P=x,J=T,H=M)):C>=E?(B=l,z=d,W=x,te=M,l>=0?(_=h,b=c,I=f,N=u,q=p,P=g,J=T,H=m):(_=c,b=h,I=u,N=f,q=g,P=p,J=m,H=T)):(B=h,z=f,W=p,te=T,h>=0?(_=c,b=l,I=u,N=d,q=g,P=x,J=m,H=M):(_=l,b=c,I=d,N=u,q=x,P=g,J=M,H=m)),B===0)return null;let G=_/B,j=b/B,Q=1/B,Se=I-G*z,Ne=N-j*z,Y=q-G*W,me=P-j*W,ve=J-G*te,Ae=H-j*te,ge=ve*me-Ae*Y,Fe=Se*Ae-Ne*ve,pt=Y*Ne-me*Se;if(s){if(ge<0||Fe<0||pt<0)return null}else if((ge<0||Fe<0||pt<0)&&(ge>0||Fe>0||pt>0))return null;let Pe=ge+Fe+pt;if(Pe===0)return null;let et=Q*(ge*z+Fe*W+pt*te);return(Pe>0?et<0:et>0)?null:this.at(et/Pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ni=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gc=new Je,yi=new is,Cr=new Vn,Wc=new D,Rr=new D,Pr=new D,Ir=new D,Ko=new D,Lr=new D,Xc=new D,Dr=new D,at=class extends yt{constructor(e=new It,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Ko.fromBufferAttribute(u,e),a?Lr.addScaledVector(Ko,h):Lr.addScaledVector(Ko.sub(t),h))}t.add(Lr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(Cr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Cr,Wc)===null||yi.origin.distanceToSquared(Wc)>(e.far-e.near)**2))&&(Gc.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let w=M,C=T;w<C;w+=3){let E=o.getX(w),_=o.getX(w+1),b=o.getX(w+2);s=Nr(this,m,e,n,l,h,u,E,_,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let M=o.getX(p),T=o.getX(p+1),w=o.getX(p+2);s=Nr(this,a,e,n,l,h,u,M,T,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let p=d[g],m=a[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let w=M,C=T;w<C;w+=3){let E=w,_=w+1,b=w+2;s=Nr(this,m,e,n,l,h,u,E,_,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let M=p,T=p+1,w=p+2;s=Nr(this,a,e,n,l,h,u,M,T,w),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Cd(i,e,t,n,s,r,a,o){let c;if(e.side===Lt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===ui,o),c===null)return null;Dr.copy(o),Dr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Dr);return l<t.near||l>t.far?null:{distance:l,point:Dr.clone(),object:i}}function Nr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Rr),i.getVertexPosition(c,Pr),i.getVertexPosition(l,Ir);let h=Cd(i,e,t,n,Rr,Pr,Ir,Xc);if(h){let u=new D;ei.getBarycoord(Xc,Rr,Pr,Ir,u),s&&(h.uv=ei.getInterpolatedAttribute(s,o,c,l,u,new He)),r&&(h.uv1=ei.getInterpolatedAttribute(r,o,c,l,u,new He)),a&&(h.normal=ei.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new D,materialIndex:0};ei.getNormal(Rr,Pr,Ir,d.normal),h.face=d,h.barycoord=u}return h}var bi=class extends Pt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=ft,h=ft,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fs=class extends dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xi=new Je,qc=new Je,Ur=[],$c=new Cn,Rd=new Je,ws=new at,Ts=new Vn,Os=class extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rd)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),$c.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union($c)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),Ts.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),e.ray.intersectsSphere(Ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),qc.multiplyMatrices(n,Xi),ws.matrixWorld=qc,ws.raycast(e,Ur);for(let a=0,o=Ur.length;a<o;a++){let c=Ur[a];c.instanceId=r,c.object=this,t.push(c)}Ur.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Fs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bi(new Float32Array(s*this.count),s,this.count,cs,cn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Mi=new Vn,Pd=new He(.5,.5),Fr=new D,ii=class{constructor(e=new Yt,t=new Yt,n=new Yt,s=new Yt,r=new Yt,a=new Yt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],M=r[12],T=r[13],w=r[14],C=r[15];if(s[0].setComponents(l-a,f-h,m-g,C-M).normalize(),s[1].setComponents(l+a,f+h,m+g,C+M).normalize(),s[2].setComponents(l+o,f+u,m+x,C+T).normalize(),s[3].setComponents(l-o,f-u,m-x,C-T).normalize(),n)s[4].setComponents(c,d,p,w).normalize(),s[5].setComponents(l-c,f-d,m-p,C-w).normalize();else if(s[4].setComponents(l-c,f-d,m-p,C-w).normalize(),t===an)s[5].setComponents(l+c,f+d,m+p,C+w).normalize();else if(t===ji)s[5].setComponents(c,d,p,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);let t=Pd.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yc=new Je,na=class i{constructor(){this.coordinateSystem=an,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Yc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ii),n[s].setFromProjectionMatrix(Yc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ii),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Rn=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ia=new D,sa=new D,Zc=new Je,Es=new is,Or=new Vn,jo=new D,Jc=new D,ra=class extends yt{constructor(e=new It,t=new Rn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ia.fromBufferAttribute(t,s-1),sa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ia.distanceTo(sa);e.setAttribute("lineDistance",new Rt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,e.ray.intersectsSphere(Or)===!1)return;Zc.copy(s).invert(),Es.copy(e.ray).applyMatrix4(Zc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=l){let m=h.getX(x),M=h.getX(x+1),T=Br(this,e,Es,c,m,M,x);T&&t.push(T)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(f),m=Br(this,e,Es,c,x,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,p=g-1;x<p;x+=l){let m=Br(this,e,Es,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Br(this,e,Es,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Br(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ia.fromBufferAttribute(o,s),sa.fromBufferAttribute(o,r),t.distanceSqToSegment(ia,sa,jo,Jc)>n)return;jo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(jo);if(!(l<e.near||l>e.far))return{distance:l,point:Jc.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Kc=new D,jc=new D,Gn=class extends ra{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Kc.fromBufferAttribute(t,s),jc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Kc.distanceTo(jc);e.setAttribute("lineDistance",new Rt(n,1))}else Re("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Bs=class extends Pt{constructor(e=[],t=Ri,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Wn=class extends Pt{constructor(e,t,n=gn,s,r,a,o=ft,c=ft,l,h=Hn,u=1){if(h!==Hn&&h!==Xn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new es(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ks=class extends Wn{constructor(e,t=gn,n=Ri,s,r,a=ft,o=ft,c,l=Hn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},zs=class extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},si=class i extends It{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2));function g(x,p,m,M,T,w,C,E,_,b,B){let I=w/_,N=C/b,z=w/2,q=C/2,P=E/2,W=_+1,J=b+1,H=0,te=0,G=new D;for(let j=0;j<J;j++){let Q=j*N-q;for(let Se=0;Se<W;Se++){let Ne=Se*I-z;G[x]=Ne*M,G[p]=Q*T,G[m]=P,l.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[m]=E>0?1:-1,h.push(G.x,G.y,G.z),u.push(Se/_),u.push(1-j/b),H+=1}}for(let j=0;j<b;j++)for(let Q=0;Q<_;Q++){let Se=d+Q+W*j,Ne=d+Q+W*(j+1),Y=d+(Q+1)+W*(j+1),me=d+(Q+1)+W*j;c.push(Se,Ne,me),c.push(Ne,Y,me),te+=6}o.addGroup(f,te,B),f+=te,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ri=class i extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let M=m*d-a;for(let T=0;T<l;T++){let w=T*u-r;g.push(w,-M,0),x.push(0,0,1),p.push(T/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let T=M+l*m,w=M+l*(m+1),C=M+1+l*(m+1),E=M+1+l*m;f.push(T,w,E),f.push(w,C,E)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Hs=class extends mn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ee(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ii(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Qc(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Qc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=Ii(i[t]);for(let s in n)e[s]=n[s]}return e}function Qc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Id(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var $h={clone:Ii,merge:kt},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new He().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ct().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},aa=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ai=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var oi=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sr,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=Ma,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oa=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},la=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function kr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ca=class extends li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nl:r=e,o=2*t-n;break;case il:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nl:a=e,c=2*n-t;break;case il:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,m=-d*p+2*d*x-d*g,M=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*g+1,T=(-1-f)*p+(1.5+f)*x+.5*g,w=f*p-f*x;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+M*a[l+C]+T*a[c+C]+w*a[u+C];return r}},ha=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},ua=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},da=class extends li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),x=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*x+a[c+p]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[l+g],p=a[c+g],m=f*d+g*2,M=u[m],T=u[m+1],w=e*d+g*2,C=h[w],E=h[w+1],_=Ud(n,t,M,C,s);r[g]=Yh(_,x,T,E,p)}return r}};function Yh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Nd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ud(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Yh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Nd(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Kt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qi(t,this.TimeBufferType),this.values=qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qi(e.times,Array),values:qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),kr(e.settings)&&(n.settings={inTangents:qi(e.settings.inTangents,Array),outTangents:qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new da(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Cs:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case Vr:t=this.InterpolantFactoryMethodSmooth;break;case el:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return Vr;case this.InterpolantFactoryMethodBezier:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;kr(this.settings)&&(eh(this.settings.inTangents,e),eh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;kr(this.settings)&&(th(this.settings.inTangents,e),th(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ie("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ie("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ld(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ie("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,kr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function eh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function th(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Kt.prototype.ValueTypeName="";Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=Kr;var ci=class extends Kt{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Cs;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};fa.prototype.ValueTypeName="color";var pa=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};pa.prototype.ValueTypeName="number";var ma=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Zt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Vs=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends Kt{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Cs;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};ga.prototype.ValueTypeName="vector";var _a=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zh=new _a,xa=class{constructor(e){this.manager=e!==void 0?e:Zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi=class extends yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Gs=class extends wi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Qo=new Je,nh=new D,ih=new D,Ws=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Bt,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ii,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(nh),ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ih),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Qo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===ji||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},zr=new D,Hr=new Zt,wn=new D,Xs=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zr,Hr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zr,Hr,wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(zr,Hr,wn),wn.x===1&&wn.y===1&&wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zr,Hr,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qn=new D,sh=new He,rh=new He,Ot=class extends Xs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,sh,rh),t.subVectors(rh,sh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Io*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var sl=class extends Ws{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0}},qs=class extends wi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ti=class extends Xs{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rl=class extends Ws{constructor(){super(new Ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends wi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new rl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ys=class extends wi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var $i=-90,Yi=1,ss=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot($i,Yi,e,t);s.layers=this.layers,this.add(s);let r=new Ot($i,Yi,e,t);r.layers=this.layers,this.add(r);let a=new Ot($i,Yi,e,t);a.layers=this.layers,this.add(a);let o=new Ot($i,Yi,e,t);o.layers=this.layers,this.add(o);let c=new Ot($i,Yi,e,t);c.layers=this.layers,this.add(c);let l=new Ot($i,Yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},va=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Ul="\\[\\]\\.:\\/",Fd=new RegExp("["+Ul+"]","g"),Fl="[^"+Ul+"]",Od="[^"+Ul.replace("\\.","")+"]",Bd=/((?:WC+[\/:])*)/.source.replace("WC",Fl),kd=/(WCOD+)?/.source.replace("WCOD",Od),zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fl),Hd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fl),Vd=new RegExp("^"+Bd+kd+zd+Hd+"$"),Gd=["material","materials","bones","map"],al=class{constructor(e,t,n){let s=n||rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fd,"")}static parseTrackName(e){let t=Vd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=al;rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray];rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P_=new Float32Array(1);var ah=new Je,Zs=class{constructor(e,t,n=0,s=1/0){this.ray=new is(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ie("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ah.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(e,t=!0,n=[]){return ol(e,this,n,t),n.sort(oh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ol(e[s],this,n,t);return n.sort(oh),n}};function oh(i,e){return i.distance-e.distance}function ol(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ol(r[a],e,t,!0)}}var Vl=class Vl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Vl.prototype.isMatrix2=!0;var ll=Vl;function Ol(i,e,t,n){let s=Wd(n);switch(t){case El:return i*e;case cs:return i*e/s.components*s.byteLength;case Ca:return i*e/s.components*s.byteLength;case di:return i*e*2/s.components*s.byteLength;case Ra:return i*e*2/s.components*s.byteLength;case Al:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case Pa:return i*e*4/s.components*s.byteLength;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case er:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:case Na:return Math.max(i,16)*Math.max(e,8)/4;case Ia:case Da:return Math.max(i,8)*Math.max(e,8)/2;case Ua:case Fa:case Ba:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case nr:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case to:case no:case io:return Math.ceil(i/4)*Math.ceil(e/4)*16;case so:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ir:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wd(i){switch(i){case Bt:case Sl:return{byteLength:1,components:1};case ls:case bl:case _n:return{byteLength:2,components:1};case Ea:case Aa:return{byteLength:2,components:4};case gn:case Ta:case cn:return{byteLength:4,components:1};case wl:case Tl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function _u(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qd(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qd=`#ifdef USE_AOMAP
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
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,of=`#ifdef USE_IRIDESCENCE
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
#endif`,lf=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,xf=`vec3 transformedNormal = objectNormal;
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
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Xf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qf=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hp=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
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
}`,nm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,_m=`#define STANDARD
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
}`,xm=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,vm=`#define TOON
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
}`,ym=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Mm=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,wm=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Tm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:$d,alphahash_pars_fragment:Yd,alphamap_fragment:Zd,alphamap_pars_fragment:Jd,alphatest_fragment:Kd,alphatest_pars_fragment:jd,aomap_fragment:Qd,aomap_pars_fragment:ef,batching_pars_vertex:tf,batching_vertex:nf,begin_vertex:sf,beginnormal_vertex:rf,bsdfs:af,iridescence_fragment:of,bumpmap_pars_fragment:lf,clipping_planes_fragment:cf,clipping_planes_pars_fragment:hf,clipping_planes_pars_vertex:uf,clipping_planes_vertex:df,color_fragment:ff,color_pars_fragment:pf,color_pars_vertex:mf,color_vertex:gf,common:_f,defaultnormal_vertex:xf,displacementmap_pars_vertex:vf,displacementmap_vertex:yf,emissivemap_fragment:Mf,emissivemap_pars_fragment:Sf,colorspace_fragment:bf,colorspace_pars_fragment:wf,envmap_fragment:Tf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:Af,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:kf,envmap_vertex:Rf,fog_vertex:Pf,fog_pars_vertex:If,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Uf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:zf,lights_toon_pars_fragment:Hf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:$f,lights_fragment_end:Yf,lightprobes_pars_fragment:Zf,logdepthbuf_fragment:Jf,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:vp,iridescence_pars_fragment:yp,opaque_fragment:Mp,packing:Sp,premultiplied_alpha_fragment:bp,project_vertex:wp,dithering_fragment:Tp,dithering_pars_fragment:Ep,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Np,skinning_vertex:Up,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:kp,tonemapping_pars_fragment:zp,transmission_fragment:Hp,transmission_pars_fragment:Vp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:$p,background_frag:Yp,backgroundCube_vert:Zp,backgroundCube_frag:Jp,cube_vert:Kp,cube_frag:jp,depth_vert:Qp,depth_frag:em,distance_vert:tm,distance_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:xm,meshtoon_vert:vm,meshtoon_frag:ym,points_vert:Mm,points_frag:Sm,shadow_vert:bm,shadow_frag:wm,sprite_vert:Tm,sprite_frag:Em},pe={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},In={basic:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ee(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:kt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:kt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:kt([pe.points,pe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:kt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:kt([pe.common,pe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:kt([pe.sprite,pe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:kt([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:kt([pe.lights,pe.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};In.physical={uniforms:kt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var oo={r:0,b:0,g:0},Am=new Je,xu=new Le;xu.set(-1,0,0,0,1,0,0,0,1);function Cm(i,e,t,n,s,r){let a=new Ee(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let w=M.backgroundBlurriness>0;T=e.get(T,w)}return T}function g(M){let T=!1,w=f(M);w===null?p(a,o):w&&w.isColor&&(p(w,1),T=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,T){let w=f(T);w&&w.isCubeTexture?(l===void 0&&(l=new at(new si(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Ii(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(T.backgroundRotation)).transpose(),w.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(xu),l.material.toneMapped=qe.getTransfer(w.colorSpace)!==je,(h!==w||u!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,u=w.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new at(new ri(2,2),new Jt({name:"BackgroundMaterial",uniforms:Ii(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=qe.getTransfer(w.colorSpace)!==je,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||u!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,u=w.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,T){M.getRGB(oo,Nl(i)),t.buffers.color.setClear(oo.r,oo.g,oo.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:x,dispose:m}}function Rm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(N,z,q,P,W){let J=!1,H=u(N,P,q,z);r!==H&&(r=H,l(r.object)),J=f(N,P,q,W),J&&g(N,P,q,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,w(N,z,q,P),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function u(N,z,q,P){let W=P.wireframe===!0,J=n[z.id];J===void 0&&(J={},n[z.id]=J);let H=N.isInstancedMesh===!0?N.id:0,te=J[H];te===void 0&&(te={},J[H]=te);let G=te[q.id];G===void 0&&(G={},te[q.id]=G);let j=G[W];return j===void 0&&(j=d(c()),G[W]=j),j}function d(N){let z=[],q=[],P=[];for(let W=0;W<t;W++)z[W]=0,q[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:P,object:N,attributes:{},index:null}}function f(N,z,q,P){let W=r.attributes,J=z.attributes,H=0,te=q.getAttributes();for(let G in te)if(te[G].location>=0){let Q=W[G],Se=J[G];if(Se===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Se=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Se=N.instanceColor)),Q===void 0||Q.attribute!==Se||Se&&Q.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(N,z,q,P){let W={},J=z.attributes,H=0,te=q.getAttributes();for(let G in te)if(te[G].location>=0){let Q=J[G];Q===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));let Se={};Se.attribute=Q,Q&&Q.data&&(Se.data=Q.data),W[G]=Se,H++}r.attributes=W,r.attributesNum=H,r.index=P}function x(){let N=r.newAttributes;for(let z=0,q=N.length;z<q;z++)N[z]=0}function p(N){m(N,0)}function m(N,z){let q=r.newAttributes,P=r.enabledAttributes,W=r.attributeDivisors;q[N]=1,P[N]===0&&(i.enableVertexAttribArray(N),P[N]=1),W[N]!==z&&(i.vertexAttribDivisor(N,z),W[N]=z)}function M(){let N=r.newAttributes,z=r.enabledAttributes;for(let q=0,P=z.length;q<P;q++)z[q]!==N[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function T(N,z,q,P,W,J,H){H===!0?i.vertexAttribIPointer(N,z,q,W,J):i.vertexAttribPointer(N,z,q,P,W,J)}function w(N,z,q,P){x();let W=P.attributes,J=q.getAttributes(),H=z.defaultAttributeValues;for(let te in J){let G=J[te];if(G.location>=0){let j=W[te];if(j===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){let Q=j.normalized,Se=j.itemSize,Ne=e.get(j);if(Ne===void 0)continue;let Y=Ne.buffer,me=Ne.type,ve=Ne.bytesPerElement,Ae=me===i.INT||me===i.UNSIGNED_INT||j.gpuType===Ta;if(j.isInterleavedBufferAttribute){let ge=j.data,Fe=ge.isInterleavedBuffer===!0?ge.stride:ge.itemSize,pt=j.offset;if(ge.isInstancedInterleavedBuffer||ge.isInstancedBufferAttribute){for(let Pe=0;Pe<G.locationSize;Pe++)m(G.location+Pe,ge.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Pe=0;Pe<G.locationSize;Pe++)p(G.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Pe=0;Pe<G.locationSize;Pe++)T(G.location+Pe,Se/G.locationSize,me,Q,Fe*ve,(pt+Se/G.locationSize*Pe)*ve,Ae)}else{if(j.isInstancedBufferAttribute){for(let ge=0;ge<G.locationSize;ge++)m(G.location+ge,j.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ge=0;ge<G.locationSize;ge++)p(G.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let ge=0;ge<G.locationSize;ge++)T(G.location+ge,Se/G.locationSize,me,Q,Se*ve,Se/G.locationSize*ge*ve,Ae)}}else if(H!==void 0){let Q=H[te];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(G.location,Q);break;case 3:i.vertexAttrib3fv(G.location,Q);break;case 4:i.vertexAttrib4fv(G.location,Q);break;default:i.vertexAttrib1fv(G.location,Q)}}}}M()}function C(){B();for(let N in n){let z=n[N];for(let q in z){let P=z[q];for(let W in P){let J=P[W];for(let H in J)h(J[H].object),delete J[H];delete P[W]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let z=n[N.id];for(let q in z){let P=z[q];for(let W in P){let J=P[W];for(let H in J)h(J[H].object),delete J[H];delete P[W]}}delete n[N.id]}function _(N){for(let z in n){let q=n[z];for(let P in q){let W=q[P];if(W[N.id]===void 0)continue;let J=W[N.id];for(let H in J)h(J[H].object),delete J[H];delete W[N.id]}}}function b(N){for(let z in n){let q=n[z],P=N.isInstancedMesh===!0?N.id:0,W=q[P];if(W!==void 0){for(let J in W){let H=W[J];for(let te in H)h(H[te].object),delete H[te];delete W[J]}delete q[P],Object.keys(q).length===0&&delete n[z]}}}function B(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function Pm(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Im(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==xn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Bt&&_!==cn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Re("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Re("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:w,maxSamples:C,samples:E}}function Lm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Yt,o=new Le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,T=M*4,w=m.clippingState||null;c.value=w,w=h(g,d,T,f);for(let C=0;C!==T;++C)w[C]=t[C];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let m=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,w=f;T!==x;++T,w+=4)a.copy(u[T]).applyMatrix4(M,o),a.normal.toArray(p,w),p[w+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var lr=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Bs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new si(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:Ai});r.uniforms.tEquirect.value=t;let a=new at(s,r),o=t.minFilter;return t.minFilter===ln&&(t.minFilter=Vt),new ss(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Jh=256,Dm=3,Nm=20,vu=256,yu=16,Um=3,Fm=new D,Om=new Ee,us=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ss(1,10,null),this._boxMesh=new at(new si(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Fm}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Om));let p=new ss(n,s,h);return p.position.copy(o),p.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Jh,Xh(e))}_fromTexture(e,t){e.mapping===Ri||e.mapping===os?this._setSize(e.image.length===0?Jh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Kh(e,!1,!1),n=Math.log2(e)-Dm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Kh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ri||e.mapping===os?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=jh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Bm(),this._integrationMaterial=km());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/yu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Um)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(vu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=zm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Kh(i,e,t){return new lr(i,{minFilter:ln,generateMipmaps:e,type:_n,colorSpace:Rs,depthBuffer:t})}function cr(i,e,t){return new Jt({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Lt,blending:Ai,depthTest:!1,depthWrite:!1})}function Bm(){return cr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function km(){return cr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function zm(){return cr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Nm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function jh(){return cr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qh(){return cr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Hm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Sa||f===ba)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new lr(g.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Sa||f===ba,x=f===Ri||f===os;if(g||x){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new us(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new us(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===Sa?d.mapping=Ri:f===ba&&(d.mapping=os),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Vm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&As("WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)e.update(x[p],i.ARRAY_BUFFER)}function u(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=x!==null?x.array.length:p.array.length/3-1,T=p.count>=65535?Us:Ns,w=new T(Math.ceil(M/3)*6,1),C=w.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,B=0;b<M;b+=3){let I=_[b+0],N=_[b+1],z=_[b+2];C[B++]=I,C[B++]=N,C[B++]=N,C[B++]=z,C[B++]=z,C[B++]=I}}else{m=p.version;for(let _=0,b=0;_<M;_+=3){let B=_+0,I=_+1,N=_+2;C[b++]=B,C[b++]=I,C[b++]=I,C[b++]=N,C[b++]=N,C[b++]=B}}w.version=m;let E=r.get(g);E&&e.remove(E),r.set(g,w)}function d(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let x=s[g].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function Wm(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let p=0;p<f;p++)x+=d[p];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Xm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function qm(i,e,t){let n=new WeakMap,s=new ct;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let B=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let w=o.attributes.position.count*T,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let E=new Float32Array(w*C*4*u),_=new Ls(E,w,C,u);_.type=cn,_.needsUpdate=!0;let b=T*4;for(let I=0;I<u;I++){let N=p[I],z=m[I],q=M[I],P=w*C*4*I;for(let W=0;W<N.count;W++){let J=W*b;f===!0&&(s.fromBufferAttribute(N,W),E[P+J+0]=s.x,E[P+J+1]=s.y,E[P+J+2]=s.z,E[P+J+3]=0),g===!0&&(s.fromBufferAttribute(z,W),E[P+J+4]=s.x,E[P+J+5]=s.y,E[P+J+6]=s.z,E[P+J+7]=0),x===!0&&(s.fromBufferAttribute(q,W),E[P+J+8]=s.x,E[P+J+9]=s.y,E[P+J+10]=s.z,E[P+J+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new He(w,C)},n.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function $m(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Ym={[ml]:"LINEAR_TONE_MAPPING",[gl]:"REINHARD_TONE_MAPPING",[_l]:"CINEON_TONE_MAPPING",[Js]:"ACES_FILMIC_TONE_MAPPING",[vl]:"AGX_TONE_MAPPING",[yl]:"NEUTRAL_TONE_MAPPING",[xl]:"CUSTOM_TONE_MAPPING"};function Zm(i,e,t,n,s,r){let a=new Gt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new It;h.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let u=new aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new at(h,u),f=new Ti(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,M=null,T=[],w=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),c!==null&&c.setSize(C,E);for(let _=0;_<T.length;_++){let b=T[_];b.setSize&&b.setSize(C,E)}},this.setEffects=function(C){T=C,w=T.length>0&&T[0].isRenderPass===!0;let E=a.width,_=a.height;T.length>0&&o===null&&(o=new Gt(E,_,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new Gt(E,_,{type:_n,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(B=>B.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new Wn(E,_),r===!0&&(l.format=Xn,l.type=Pi)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let B=0;B<T.length;B++){let I=T[B];I.setSize&&I.setSize(E,_),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(C,E){if(p||C.toneMapping===jt&&T.length===0)return!1;if(M=E,E!==null){let _=E.width,b=E.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return w===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=jt,!0},this.hasRenderPass=function(){return w},this.end=function(C,E){C.toneMapping=m,p=!0;let _=a,b=o;for(let B=0;B<T.length;B++){let I=T[B];I.enabled!==!1&&(I.render(C,b,_,E),I.needsSwap!==!1&&(_=b,b=b===o?c:o))}if(g!==C.outputColorSpace||x!==C.toneMapping){g=C.outputColorSpace,x=C.toneMapping,u.defines={},qe.getTransfer(g)===je&&(u.defines.SRGB_TRANSFER="");let B=Ym[x];B&&(u.defines[B]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,C.setRenderTarget(M),C.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Mu=new Pt,Su=new Wn(1,1),bu=new ks(1),wu=new Ls,Tu=new ta,Eu=new Bs,eu=[],tu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function ds(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=eu[s];if(r===void 0&&(r=new Float32Array(s),eu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ho(i,e){let t=tu[e];t===void 0&&(t=new Int32Array(e),tu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Jm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Km(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function eg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),St(t,n)}}function tg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),St(t,n)}}function ng(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),St(t,n)}}function ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function uo(i){return i.version===0&&(i.compareFunction=Pl,i.needsUpdate=!0),i}function ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=uo(Su):r=Mu,t.setTexture2D(e||r,s)}function dg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tu,s)}function fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=uo(bu):r=Eu,t.setTextureCube(e||r,s)}function pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wu,s)}function mg(i){switch(i){case 5126:return Jm;case 35664:return Km;case 35665:return jm;case 35666:return Qm;case 35674:return eg;case 35675:return tg;case 35676:return ng;case 5124:case 35670:return ig;case 35667:case 35671:return sg;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return og;case 36294:return lg;case 36295:return cg;case 36296:return hg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return pg}}function gg(i,e){i.uniform1fv(this.addr,e)}function _g(i,e){let t=ds(e,this.size,2);i.uniform2fv(this.addr,t)}function xg(i,e){let t=ds(e,this.size,3);i.uniform3fv(this.addr,t)}function vg(i,e){let t=ds(e,this.size,4);i.uniform4fv(this.addr,t)}function yg(i,e){let t=ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mg(i,e){let t=ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sg(i,e){let t=ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bg(i,e){i.uniform1iv(this.addr,e)}function wg(i,e){i.uniform2iv(this.addr,e)}function Tg(i,e){i.uniform3iv(this.addr,e)}function Eg(i,e){i.uniform4iv(this.addr,e)}function Ag(i,e){i.uniform1uiv(this.addr,e)}function Cg(i,e){i.uniform2uiv(this.addr,e)}function Rg(i,e){i.uniform3uiv(this.addr,e)}function Pg(i,e){i.uniform4uiv(this.addr,e)}function Ig(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=uo(Su):a=Mu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Lg(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Tu,r[a])}function Dg(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=uo(bu):a=Eu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Ng(i,e,t){let n=this.cache,s=e.length,r=ho(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wu,r[a])}function Ug(i){switch(i){case 5126:return gg;case 35664:return _g;case 35665:return xg;case 35666:return vg;case 35674:return yg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return bg;case 35667:case 35671:return wg;case 35668:case 35672:return Tg;case 35669:case 35673:return Eg;case 5125:return Ag;case 36294:return Cg;case 36295:return Rg;case 36296:return Pg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ng}}var Xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mg(t.type)}},ql=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ug(t.type)}},$l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Gl=/(\w+)(\])?(\[|\.)?/g;function ru(i,e){i.seq.push(e),i.map[e.id]=e}function Fg(i,e,t){let n=i.name,s=n.length;for(Gl.lastIndex=0;;){let r=Gl.exec(n),a=Gl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){ru(t,l===void 0?new Xl(o,i,e):new ql(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new $l(o),ru(t,u)),t=u}}}var hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Fg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function au(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Og=37297,Bg=0;function kg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ou=new Le;function zg(i){qe._getMatrix(ou,qe.workingColorSpace,i);let e=`mat3( ${ou.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Ps:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function lu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+kg(i.getShaderSource(e),o)}else return r}function Hg(i,e){let t=zg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Vg={[ml]:"Linear",[gl]:"Reinhard",[_l]:"Cineon",[Js]:"ACESFilmic",[vl]:"AgX",[yl]:"Neutral",[xl]:"Custom"};function Gg(i,e){let t=Vg[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lo=new D;function Wg(){qe.getLuminanceCoefficients(lo);let i=lo.x.toFixed(4),e=lo.y.toFixed(4),t=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function qg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $g(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function or(i){return i!==""}function cu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function hu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(Yg,Zg)}function Zg(i,e){let t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Yl(t)}var Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(Jg,Kg)}function Kg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var jg={[Ei]:"SHADOWMAP_TYPE_PCF",[rs]:"SHADOWMAP_TYPE_VSM"};function Qg(i){return jg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e0={[os]:"ENVMAP_MODE_REFRACTION"};function t0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":e0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n0={[Ma]:"ENVMAP_BLENDING_MULTIPLY",[Rh]:"ENVMAP_BLENDING_MIX",[Ph]:"ENVMAP_BLENDING_ADD"};function i0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":n0[i.combine]||"ENVMAP_BLENDING_NONE"}function s0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Qg(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=t0(t),u=i0(t),d=Xg(t),f=qg(r),g=s.createProgram(),x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(or).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(or).join(`
`),p.length>0&&(p+=`
`)):(x=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jt?"#define TONE_MAPPING":"",t.toneMapping!==jt?ke.tonemapping_pars_fragment:"",t.toneMapping!==jt?Gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Hg("linearToOutputTexel",t.outputColorSpace),Wg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),a=Yl(a),a=cu(a,t),a=hu(a,t),o=Yl(o),o=cu(o,t),o=hu(o,t),a=uu(a),o=uu(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+x+a,T=m+p+o,w=au(s,s.VERTEX_SHADER,M),C=au(s,s.FRAGMENT_SHADER,T);s.attachShader(g,w),s.attachShader(g,C),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(I){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(w)||"",q=s.getShaderInfoLog(C)||"",P=N.trim(),W=z.trim(),J=q.trim(),H=!0,te=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,C);else{let G=lu(s,w,"vertex"),j=lu(s,C,"fragment");Ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+G+`
`+j)}else P!==""?Re("WebGLProgram: Program Info Log:",P):(W===""||J==="")&&(te=!1);te&&(I.diagnostics={runnable:H,programLog:P,vertexShader:{log:W,prefix:x},fragmentShader:{log:J,prefix:p}})}s.deleteShader(w),s.deleteShader(C),_=new hs(s,g),b=$g(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(g,Og)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=C,this}var r0=0,Zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jl(e),t.set(e,n)),n}},Jl=class{constructor(e){this.id=r0++,this.code=e,this.usedTimes=0}};function a0(i){return i===di||i===nr||i===ir}function o0(i,e,t,n,s,r){let a=new ts,o=new Zl,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,b,B,I,N,z){let q=I.fog,P=N.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||W,J),te=d[_.type],G=n.precision;_.precision!==null&&(G=n.getMaxPrecision(_.precision),G!==_.precision&&Re("WebGLProgram.getParameters:",_.precision,"not supported, using",G,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=j!==void 0?j.length:0,Se=0;P.morphAttributes.position!==void 0&&(Se=1),P.morphAttributes.normal!==void 0&&(Se=2),P.morphAttributes.color!==void 0&&(Se=3);let Ne,Y,me,ve;if(te){let fe=In[te];Ne=fe.vertexShader,Y=fe.fragmentShader}else{Ne=_.vertexShader,Y=_.fragmentShader;let fe=o.getVertexShaderStage(_),tt=o.getFragmentShaderStage(_);o.update(_,fe,tt),me=fe.id,ve=tt.id}let Ae=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Fe=N.isInstancedMesh===!0,pt=N.isBatchedMesh===!0,Pe=!!_.map,et=!!_.matcap,nt=!!H,Ge=nt&&H.isPMREMTexture===!0,At=!!_.aoMap,xt=!!_.lightMap,Wt=!!_.bumpMap&&_.wireframe===!1,ht=!!_.normalMap,bn=!!_.displacementMap,bt=!!_.emissiveMap,en=!!_.metalnessMap,tn=!!_.roughnessMap,nn=_.anisotropy>0,L=_.clearcoat>0,sn=_.diffuseRoughness>0,ot=_.dispersion>0,lt=_.retroreflectivity>0,de=_.iridescence>0,vt=_.sheen>0,Ce=_.transmission>0,De=nn&&!!_.anisotropyMap,S=L&&!!_.clearcoatMap,v=L&&!!_.clearcoatNormalMap,F=L&&!!_.clearcoatRoughnessMap,ee=sn&&!!_.diffuseRoughnessMap,K=de&&!!_.iridescenceMap,se=de&&!!_.iridescenceThicknessMap,he=vt&&!!_.sheenColorMap,X=vt&&!!_.sheenRoughnessMap,$=!!_.specularMap,oe=!!_.specularColorMap,A=!!_.specularIntensityMap,Z=Ce&&!!_.transmissionMap,V=Ce&&!!_.thicknessMap,le=!!_.gradientMap,ie=!!_.alphaMap,re=_.alphaTest>0,we=!!_.alphaHash,Be=!!_.extensions,ne=jt;_.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ne=i.toneMapping);let Te=Ge?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Oe={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Ne,fragmentShader:Y,defines:_.defines,customVertexShaderID:me,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:G,batching:pt,batchingColor:pt&&N._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&N.instanceColor!==null,instancingMorph:Fe&&N.morphTexture!==null,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Pe,matcap:et,envMap:nt,envMapMode:nt&&H.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?Te.length-1:null,envMapSize:Ge?Te[0].width:null,aoMap:At,lightMap:xt,bumpMap:Wt,normalMap:ht,displacementMap:bn,emissiveMap:bt,normalMapObjectSpace:ht&&_.normalMapType===Dh,normalMapTangentSpace:ht&&_.normalMapType===sr,packedNormalMap:ht&&_.normalMapType===sr&&a0(_.normalMap.format),metalnessMap:en,roughnessMap:tn,anisotropy:nn,anisotropyMap:De,clearcoat:L,clearcoatMap:S,clearcoatNormalMap:v,clearcoatRoughnessMap:F,diffuseRoughness:sn,diffuseRoughnessMap:ee,dispersion:ot,retroreflection:lt,iridescence:de,iridescenceMap:K,iridescenceThicknessMap:se,sheen:vt,sheenColorMap:he,sheenRoughnessMap:X,specularMap:$,specularColorMap:oe,specularIntensityMap:A,transmission:Ce,transmissionMap:Z,thicknessMap:V,gradientMap:le,opaque:_.transparent===!1&&_.blending===as&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:we,combine:_.combine,mapUv:Pe&&f(_.map.channel),aoMapUv:At&&f(_.aoMap.channel),lightMapUv:xt&&f(_.lightMap.channel),bumpMapUv:Wt&&f(_.bumpMap.channel),normalMapUv:ht&&f(_.normalMap.channel),displacementMapUv:bn&&f(_.displacementMap.channel),emissiveMapUv:bt&&f(_.emissiveMap.channel),metalnessMapUv:en&&f(_.metalnessMap.channel),roughnessMapUv:tn&&f(_.roughnessMap.channel),anisotropyMapUv:De&&f(_.anisotropyMap.channel),clearcoatMapUv:S&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:K&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:X&&f(_.sheenRoughnessMap.channel),specularMapUv:$&&f(_.specularMap.channel),specularColorMapUv:oe&&f(_.specularColorMap.channel),specularIntensityMapUv:A&&f(_.specularIntensityMap.channel),transmissionMapUv:Z&&f(_.transmissionMap.channel),thicknessMapUv:V&&f(_.thicknessMap.channel),alphaMapUv:ie&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ht||nn),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Pe||ie),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ht===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Se,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Pe&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===je,decodeVideoTextureEmissive:bt&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===je,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xt,flipSided:_.side===Lt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Be&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&_.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let B in _.defines)b.push(B),b.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let b=d[_.type],B;if(b){let I=In[b];B=$h.clone(I.uniforms)}else B=_.uniforms;return B}function T(_,b){let B=h.get(b);return B!==void 0?++B.usedTimes:(B=new s0(i,b,_,s),l.push(B),h.set(b,B)),B}function w(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:M,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:l,dispose:E}}function l0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function c0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,p,m){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=p,M.group=m),e++,M}function c(d,f,g,x,p,m,M){M.reversedDepth===!0&&(p=-p);let T=o(d,f,g,x,p,m);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):t.push(T)}function l(d,f,g,x,p,m){let M=o(d,f,g,x,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||c0),n.length>1&&n.sort(f||fu),s.length>1&&s.sort(f||fu)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function h0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new pu,i.set(n,[a])):s>=r.length?(a=new pu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function u0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ee};break;case"SpotLight":t={position:new D,direction:new D,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function d0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var f0=0;function p0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function m0(i){let e=new u0,t=d0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Je,a=new Je;function o(l){let h=0,u=0,d=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,M=0,T=0,w=0,C=0,E=0,_=0,b=0,B=0,I=0;l.sort(p0);for(let z=0,q=l.length;z<q;z++){let P=l[z],W=P.color,J=P.intensity,H=P.distance,te=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===di?te=P.shadow.map.texture:te=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=W.r*J,u+=W.g*J,d+=W.b*J;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],J);I++}else if(P.isSunLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,Q=t.get(P);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=te;let Se=j.getViewportCount();for(let Ne=0;Ne<Se;Ne++)n.sunShadowMatrix[x+Ne]=j.getMatrix(Ne),n.sunShadowCascade[x+Ne]=j._cascadeData[Ne];x+=Se,g++}n.sun[f]=G,f++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let j=P.shadow,Q=t.get(P);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=P.shadow.matrix,C++}n.directional[p]=G,p++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(W).multiplyScalar(J),G.distance=H,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[M]=G;let j=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,j.updateMatrices(P),P.castShadow&&B++),n.spotLightMatrix[M]=j.matrix,P.castShadow){let Q=t.get(P);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,n.spotShadow[M]=Q,n.spotShadowMap[M]=te,_++}M++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(W).multiplyScalar(J),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=G,T++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let j=P.shadow,Q=t.get(P);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=P.shadow.matrix,E++}n.point[m]=G,m++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(J),G.groundColor.copy(P.groundColor).multiplyScalar(J),n.hemi[w]=G,w++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==M||N.rectAreaLength!==T||N.hemiLength!==w||N.numSunShadows!==g||N.numDirectionalShadows!==C||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=T,n.point.length=m,n.hemi.length=w,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-B,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=I,N.sunLength=f,N.directionalLength=p,N.pointLength=m,N.spotLength=M,N.rectAreaLength=T,N.hemiLength=w,N.numSunShadows=g,N.numDirectionalShadows=C,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=I,n.version=f0++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){let w=l[M];if(w.isSunLight){let C=n.sun[u];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(m),u++}else if(w.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(w.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),g++}else if(w.isRectAreaLight){let C=n.rectArea[x];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(w.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let C=n.hemi[p];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function mu(i){let e=new m0(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function g0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new mu(i),e.set(s,[o])):r>=a.length?(o=new mu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var _0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,v0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],y0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],gu=new Je,ar=new D,Wl=new D;function M0(i,e,t){let n=new ii,s=new He,r=new He,a=new ct,o=new oa,c=new la,l={},h=t.maxTextureSize,u={[ui]:Lt,[Lt]:ui,[Xt]:Xt},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:_0,fragmentShader:x0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new at(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ei;let m=this.type;this.render=function(E,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===hh&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ei);let B=i.getRenderTarget(),I=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Ai),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let q=m!==this.type;q&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=E.length;P<W;P++){let J=E[P],H=J.shadow;if(H===void 0){Re("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let te=H.getFrameExtents();s.multiply(te),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,H.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=G,H.map===null||q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===rs){if(J.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Gt(s.x,s.y,{format:di,type:_n,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new Wn(s.x,s.y,cn),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=Hn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ft,H.map.depthTexture.magFilter=ft}else J.isPointLight?(H.map=new lr(s.x),H.map.depthTexture=new ks(s.x,gn)):(H.map=new Gt(s.x,s.y),H.map.depthTexture=new Wn(s.x,s.y,gn)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=Hn,this.type===Ei?(H.map.depthTexture.compareFunction=G?Rl:Cl,H.map.depthTexture.minFilter=Vt,H.map.depthTexture.magFilter=Vt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ft,H.map.depthTexture.magFilter=ft);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();J.isPointLight!==!0&&H.updateMatrices(J,b);let Q=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let Se=0;Se<j;Se++){let Ne=H.getCamera(Se);if(J.isPointLight){let Y=H.camera,me=H.matrix,ve=J.distance||Y.far;ve!==Y.far&&(Y.far=ve,Y.updateProjectionMatrix()),ar.setFromMatrixPosition(J.matrixWorld),Y.position.copy(ar),Wl.copy(Y.position),Wl.add(v0[Se]),Y.up.copy(y0[Se]),Y.lookAt(Wl),Y.updateMatrixWorld(),me.makeTranslation(-ar.x,-ar.y,-ar.z),gu.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),H._frustum.setFromProjectionMatrix(gu,Y.coordinateSystem,Y.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(H.map),i.clear());let Y=H.getViewport(Se);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),z.viewport(a)}n=H.getFrustum(Se),w(_,b,Ne,J,Q,this.type)}H.isPointLightShadow!==!0&&this.type===rs&&M(H,b),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(B,I,N)};function M(E,_){let b=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Gt(s.x,s.y,{format:di,type:_n}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(_,null,b,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function T(E,_,b,B){let I=null,N=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)I=N;else if(I=b.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=I.uuid,q=_.uuid,P=l[z];P===void 0&&(P={},l[z]=P);let W=P[q];W===void 0&&(W=I.clone(),P[q]=W,_.addEventListener("dispose",C)),I=W}if(I.visible=_.visible,I.wireframe=_.wireframe,B===rs?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:u[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let z=i.properties.get(I);z.light=b}return I}function w(E,_,b,B,I,N){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===rs)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let P=e.update(E),W=E.material;if(Array.isArray(W)){let J=P.groups;for(let H=0,te=J.length;H<te;H++){let G=J[H],j=W[G.materialIndex];if(j&&j.visible){let Q=T(E,j,B,N);E.onBeforeShadow(i,E,_,b,P,Q,G),i.renderBufferDirect(b,null,P,Q,E,G),E.onAfterShadow(i,E,_,b,P,Q,G)}}}else if(W.visible){let J=T(E,W,B,N);E.onBeforeShadow(i,E,_,b,P,J,null),i.renderBufferDirect(b,null,P,J,E,null),E.onAfterShadow(i,E,_,b,P,J,null)}}let q=E.children;for(let P=0,W=q.length;P<W;P++)w(q[P],_,b,B,I,N)}function C(E){E.target.removeEventListener("dispose",C);for(let b in l){let B=l[b],I=E.target.uuid;I in B&&(B[I].dispose(),delete B[I])}}}function S0(i,e){function t(){let A=!1,Z=new ct,V=null,le=new ct(0,0,0,0);return{setMask:function(ie){V!==ie&&!A&&(i.colorMask(ie,ie,ie,ie),V=ie)},setLocked:function(ie){A=ie},setClear:function(ie,re,we,Be,ne){ne===!0&&(ie*=Be,re*=Be,we*=Be),Z.set(ie,re,we,Be),le.equals(Z)===!1&&(i.clearColor(ie,re,we,Be),le.copy(Z))},reset:function(){A=!1,V=null,le.set(-1,0,0,0)}}}function n(){let A=!1,Z=!1,V=null,le=null,ie=null;return{setReversed:function(re){if(Z!==re){let we=e.get("EXT_clip_control");re?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Z=re;let Be=ie;ie=null,this.setClear(Be)}},getReversed:function(){return Z},setTest:function(re){re?ge(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(re){V!==re&&!A&&(i.depthMask(re),V=re)},setFunc:function(re){if(Z&&(re=Wh[re]),le!==re){switch(re){case Wr:i.depthFunc(i.NEVER);break;case Ji:i.depthFunc(i.ALWAYS);break;case Xr:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case qr:i.depthFunc(i.EQUAL);break;case $r:i.depthFunc(i.GEQUAL);break;case Yr:i.depthFunc(i.GREATER);break;case Zr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=re}},setLocked:function(re){A=re},setClear:function(re){ie!==re&&(ie=re,Z&&(re=1-re),i.clearDepth(re))},reset:function(){A=!1,V=null,le=null,ie=null,Z=!1}}}function s(){let A=!1,Z=null,V=null,le=null,ie=null,re=null,we=null,Be=null,ne=null;return{setTest:function(Te){A||(Te?ge(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(Te){Z!==Te&&!A&&(i.stencilMask(Te),Z=Te)},setFunc:function(Te,Oe,fe){(V!==Te||le!==Oe||ie!==fe)&&(i.stencilFunc(Te,Oe,fe),V=Te,le=Oe,ie=fe)},setOp:function(Te,Oe,fe){(re!==Te||we!==Oe||Be!==fe)&&(i.stencilOp(Te,Oe,fe),re=Te,we=Oe,Be=fe)},setLocked:function(Te){A=Te},setClear:function(Te){ne!==Te&&(i.clearStencil(Te),ne=Te)},reset:function(){A=!1,Z=null,V=null,le=null,ie=null,re=null,we=null,Be=null,ne=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,T=null,w=null,C=null,E=null,_=null,b=new Ee(0,0,0),B=0,I=!1,N=null,z=null,q=null,P=null,W=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=te>=2);let j=null,Q={},Se=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Y=new ct().fromArray(Se),me=new ct().fromArray(Ne);function ve(A,Z,V,le){let ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(A,re),i.texParameteri(A,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(A,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let we=0;we<V;we++)A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(Z+we,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}let Ae={};Ae[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(i.DEPTH_TEST),a.setFunc(Ki),Wt(!1),ht(cl),ge(i.CULL_FACE),At(Ai);function ge(A){h[A]!==!0&&(i.enable(A),h[A]=!0)}function Fe(A){h[A]!==!1&&(i.disable(A),h[A]=!1)}function pt(A,Z){return d[A]!==Z?(i.bindFramebuffer(A,Z),d[A]=Z,A===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Z),A===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Pe(A,Z){let V=g,le=!1;if(A){V=f.get(Z),V===void 0&&(V=[],f.set(Z,V));let ie=A.textures;if(V.length!==ie.length||V[0]!==i.COLOR_ATTACHMENT0){for(let re=0,we=ie.length;re<we;re++)V[re]=i.COLOR_ATTACHMENT0+re;V.length=ie.length,le=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,le=!0);le&&i.drawBuffers(V)}function et(A){return x!==A?(i.useProgram(A),x=A,!0):!1}let nt={[Ci]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};nt[ph]=i.MIN,nt[mh]=i.MAX;let Ge={[gh]:i.ZERO,[_h]:i.ONE,[xh]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[wh]:i.SRC_ALPHA_SATURATE,[Sh]:i.DST_COLOR,[yh]:i.DST_ALPHA,[vh]:i.ONE_MINUS_SRC_COLOR,[pl]:i.ONE_MINUS_SRC_ALPHA,[bh]:i.ONE_MINUS_DST_COLOR,[Mh]:i.ONE_MINUS_DST_ALPHA,[Th]:i.CONSTANT_COLOR,[Eh]:i.ONE_MINUS_CONSTANT_COLOR,[Ah]:i.CONSTANT_ALPHA,[Ch]:i.ONE_MINUS_CONSTANT_ALPHA};function At(A,Z,V,le,ie,re,we,Be,ne,Te){if(A===Ai){p===!0&&(Fe(i.BLEND),p=!1);return}if(p===!1&&(ge(i.BLEND),p=!0),A!==uh){if(A!==m||Te!==I){if((M!==Ci||C!==Ci)&&(i.blendEquation(i.FUNC_ADD),M=Ci,C=Ci),Te)switch(A){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.ONE,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",A);break}else switch(A){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ul:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dl:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",A);break}T=null,w=null,E=null,_=null,b.set(0,0,0),B=0,m=A,I=Te}return}ie=ie||Z,re=re||V,we=we||le,(Z!==M||ie!==C)&&(i.blendEquationSeparate(nt[Z],nt[ie]),M=Z,C=ie),(V!==T||le!==w||re!==E||we!==_)&&(i.blendFuncSeparate(Ge[V],Ge[le],Ge[re],Ge[we]),T=V,w=le,E=re,_=we),(Be.equals(b)===!1||ne!==B)&&(i.blendColor(Be.r,Be.g,Be.b,ne),b.copy(Be),B=ne),m=A,I=!1}function xt(A,Z){A.side===Xt?Fe(i.CULL_FACE):ge(i.CULL_FACE);let V=A.side===Lt;Z&&(V=!V),Wt(V),A.blending===as&&A.transparent===!1?At(Ai):At(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),a.setFunc(A.depthFunc),a.setTest(A.depthTest),a.setMask(A.depthWrite),r.setMask(A.colorWrite);let le=A.stencilWrite;o.setTest(le),le&&(o.setMask(A.stencilWriteMask),o.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),o.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),bt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(A){N!==A&&(A?i.frontFace(i.CW):i.frontFace(i.CCW),N=A)}function ht(A){A!==lh?(ge(i.CULL_FACE),A!==z&&(A===cl?i.cullFace(i.BACK):A===ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),z=A}function bn(A){A!==q&&(H&&i.lineWidth(A),q=A)}function bt(A,Z,V){A?(ge(i.POLYGON_OFFSET_FILL),(P!==Z||W!==V)&&(P=Z,W=V,a.getReversed()&&(Z=-Z,V=-V),i.polygonOffset(Z,V))):Fe(i.POLYGON_OFFSET_FILL)}function en(A){A?ge(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function tn(A){A===void 0&&(A=i.TEXTURE0+J-1),j!==A&&(i.activeTexture(A),j=A)}function nn(A,Z,V){V===void 0&&(j===null?V=i.TEXTURE0+J-1:V=j);let le=Q[V];le===void 0&&(le={type:void 0,texture:void 0},Q[V]=le),(le.type!==A||le.texture!==Z)&&(j!==V&&(i.activeTexture(V),j=V),i.bindTexture(A,Z||Ae[A]),le.type=A,le.texture=Z)}function L(){let A=Q[j];A!==void 0&&A.type!==void 0&&(i.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function sn(){try{i.compressedTexImage2D(...arguments)}catch(A){Ie("WebGLState:",A)}}function ot(){try{i.compressedTexImage3D(...arguments)}catch(A){Ie("WebGLState:",A)}}function lt(){try{i.texSubImage2D(...arguments)}catch(A){Ie("WebGLState:",A)}}function de(){try{i.texSubImage3D(...arguments)}catch(A){Ie("WebGLState:",A)}}function vt(){try{i.compressedTexSubImage2D(...arguments)}catch(A){Ie("WebGLState:",A)}}function Ce(){try{i.compressedTexSubImage3D(...arguments)}catch(A){Ie("WebGLState:",A)}}function De(){try{i.texStorage2D(...arguments)}catch(A){Ie("WebGLState:",A)}}function S(){try{i.texStorage3D(...arguments)}catch(A){Ie("WebGLState:",A)}}function v(){try{i.texImage2D(...arguments)}catch(A){Ie("WebGLState:",A)}}function F(){try{i.texImage3D(...arguments)}catch(A){Ie("WebGLState:",A)}}function ee(A){return u[A]!==void 0?u[A]:i.getParameter(A)}function K(A,Z){u[A]!==Z&&(i.pixelStorei(A,Z),u[A]=Z)}function se(A){Y.equals(A)===!1&&(i.scissor(A.x,A.y,A.z,A.w),Y.copy(A))}function he(A){me.equals(A)===!1&&(i.viewport(A.x,A.y,A.z,A.w),me.copy(A))}function X(A,Z){let V=l.get(Z);V===void 0&&(V=new WeakMap,l.set(Z,V));let le=V.get(A);le===void 0&&(le=i.getUniformBlockIndex(Z,A.name),i.uniformBlockBinding(Z,le,le),V.set(A,le))}function $(A,Z,V){let ie=l.get(Z).get(A);c[ie]!==V&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,V),c[ie]=V)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},j=null,Q={},d={},c={},f=new WeakMap,g=[],x=null,p=!1,m=null,M=null,T=null,w=null,C=null,E=null,_=null,b=new Ee(0,0,0),B=0,I=!1,N=null,z=null,q=null,P=null,W=null,Y.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ge,disable:Fe,bindFramebuffer:pt,drawBuffers:Pe,useProgram:et,setBlending:At,setMaterial:xt,setFlipSided:Wt,setCullFace:ht,setLineWidth:bn,setPolygonOffset:bt,setScissorTest:en,activeTexture:tn,bindTexture:nn,unbindTexture:L,compressedTexImage2D:sn,compressedTexImage3D:ot,texImage2D:v,texImage3D:F,pixelStorei:K,getParameter:ee,updateUBOMapping:X,uniformBlockBinding:$,texStorage2D:De,texStorage3D:S,texSubImage2D:lt,texSubImage3D:de,compressedTexSubImage2D:vt,compressedTexSubImage3D:Ce,scissor:se,viewport:he,reset:oe}}function b0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,x=new FinalizationRegistry(S=>g.delete(S)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,v){return p?new OffscreenCanvas(S,v):Is("canvas")}function M(S,v,F){let ee=1,K=De(S);if((K.width>F||K.height>F)&&(ee=F/Math.max(K.width,K.height)),ee<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let se=Math.floor(ee*K.width),he=Math.floor(ee*K.height);d===void 0&&(d=m(se,he));let X=v?m(se,he):d;return X.width=se,X.height=he,X.getContext("2d").drawImage(S,0,0,se,he),Re("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+se+"x"+he+")."),X}else return"data"in S&&Re("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function T(S){return S.generateMipmaps}function w(S){i.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(S,v,F,ee,K,se=!1){if(S!==null){if(i[S]!==void 0)return i[S];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let he;ee&&(he=e.get("EXT_texture_norm16"),he||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=v;if(v===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8),F===i.UNSIGNED_SHORT&&he&&(X=he.R16_EXT),F===i.SHORT&&he&&(X=he.R16_SNORM_EXT)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),v===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8),F===i.UNSIGNED_SHORT&&he&&(X=he.RG16_EXT),F===i.SHORT&&he&&(X=he.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(F===i.UNSIGNED_SHORT&&he&&(X=he.RGB16_EXT),F===i.SHORT&&he&&(X=he.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){let $=se?Ps:qe.getTransfer(K);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=$===je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&he&&(X=he.RGBA16_EXT),F===i.SHORT&&he&&(X=he.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function _(S,v){let F;return S?v===null||v===gn||v===Pi?F=i.DEPTH24_STENCIL8:v===cn?F=i.DEPTH32F_STENCIL8:v===ls&&(F=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gn||v===Pi?F=i.DEPTH_COMPONENT24:v===cn?F=i.DEPTH_COMPONENT32F:v===ls&&(F=i.DEPTH_COMPONENT16),F}function b(S,v){return T(S)===!0||S.isFramebufferTexture&&S.minFilter!==ft&&S.minFilter!==Vt?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function B(S){let v=new WeakRef(S);n.get(S).__ref=v,g.add(v),x.register(S,v,v)}function I(S){let v=n.get(S).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function N(S){q(S.target)}function z(S){P(S.target)}function q(S){S.removeEventListener("dispose",N),I(S),J(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function P(S){S.removeEventListener("dispose",z),I(S),te(S)}function W(){for(let S of g){let v=S.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):q(v))}g.clear(),u.clear()}function J(S){let v=n.get(S);if(v.__webglInit===void 0)return;let F=S.source,ee=f.get(F);if(ee){let K=ee[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&H(S),Object.keys(ee).length===0&&f.delete(F)}n.remove(S)}function H(S){let v=n.get(S);i.deleteTexture(v.__webglTexture);let F=S.source,ee=f.get(F);delete ee[v.__cacheKey],a.memory.textures--}function te(S){let v=n.get(S);v.__depthDisposeCallback&&v.__depthDisposeCallback();let F=S.depthTexture;if(F&&F.renderTarget===S&&q(F),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let se=0;se<v.__webglFramebuffer[K].length;se++)i.deleteFramebuffer(v.__webglFramebuffer[K][se]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ee=S.textures;for(let K=0,se=ee.length;K<se;K++){let he=n.get(ee[K]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(ee[K])}n.remove(S)}let G=0;function j(){G=0}function Q(){return G}function Se(S){G=S}function Ne(){let S=G;return S>=s.maxTextures&&Re("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,S}function Y(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.mipmapsAutoUpdate),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function me(S,v){let F=n.get(S);if(S.isVideoTexture&&vt(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){let ee=S.image;if(ee===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(F,S,v);return}}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function ve(S,v){let F=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){xt(F,S,v);return}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function Ae(S,v){let F=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){xt(F,S,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function ge(S,v){let F=n.get(S);if(S.version>0&&F.__version!==S.version){Wt(F,S,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let Fe={[ti]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},pt={[ft]:i.NEAREST,[Ih]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[ln]:i.LINEAR_MIPMAP_LINEAR},Pe={[Uh]:i.NEVER,[Pl]:i.ALWAYS,[Fh]:i.LESS,[Cl]:i.LEQUAL,[Oh]:i.EQUAL,[Rl]:i.GEQUAL,[Bh]:i.GREATER,[kh]:i.NOTEQUAL};function et(S,v){if(v.type===cn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Vt||v.magFilter===wa||v.magFilter===Ks||v.magFilter===ln||v.minFilter===Vt||v.minFilter===wa||v.minFilter===Ks||v.minFilter===ln)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,Fe[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Fe[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Fe[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,pt[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,pt[v.minFilter]),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ft||v.minFilter!==Ks&&v.minFilter!==ln||v.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function nt(S,v){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",N),B(v));let ee=v.source,K=f.get(ee);K===void 0&&(K={},f.set(ee,K));let se=Y(v);if(se!==S.__cacheKey){K[se]===void 0&&(K[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[se].usedTimes++;let he=K[S.__cacheKey];he!==void 0&&(K[S.__cacheKey].usedTimes--,he.usedTimes===0&&H(v)),S.__cacheKey=se,S.__webglTexture=K[se].texture}return F}function Ge(S,v,F){return Math.floor(Math.floor(S/F)/v)}function At(S,v,F,ee){let se=S.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,ee,v.data);else{se.sort((A,Z)=>A.start-Z.start);let he=0;for(let A=1;A<se.length;A++){let Z=se[he],V=se[A],le=Z.start+Z.count,ie=Ge(V.start,v.width,4),re=Ge(Z.start,v.width,4);V.start<=le+1&&ie===re&&Ge(V.start+V.count-1,v.width,4)===ie?Z.count=Math.max(Z.count,V.start+V.count-Z.start):(++he,se[he]=V)}se.length=he+1;let X=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let A=0,Z=se.length;A<Z;A++){let V=se[A],le=Math.floor(V.start/4),ie=Math.ceil(V.count/4),re=le%v.width,we=Math.floor(le/v.width),Be=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,we),t.texSubImage2D(i.TEXTURE_2D,0,re,we,Be,ne,F,ee,v.data)}S.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,X),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function xt(S,v,F){let ee=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=i.TEXTURE_3D);let K=nt(S,v),se=v.source;t.bindTexture(ee,S.__webglTexture,i.TEXTURE0+F);let he=n.get(se);if(se.version!==he.__version||K===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ne=qe.getPrimaries(qe.workingColorSpace),Te=v.colorSpace===vn?null:qe.getPrimaries(v.colorSpace),Oe=v.colorSpace===vn||ne===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let $=M(v.image,!1,s.maxTextureSize);$=Ce(v,$);let oe=r.convert(v.format,v.colorSpace),A=r.convert(v.type),Z=E(v.internalFormat,oe,A,v.normalized,v.colorSpace,v.isVideoTexture);et(ee,v);let V,le=v.mipmaps,ie=v.isVideoTexture!==!0,re=he.__version===void 0||K===!0,we=se.dataReady,Be=b(v,$);if(v.isDepthTexture)Z=_(v.format===Xn,v.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Z,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,Z,$.width,$.height,0,oe,A,null));else if(v.isDataTexture)if(le.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,Z,le[0].width,le[0].height);for(let ne=0,Te=le.length;ne<Te;ne++)V=le[ne],ie?we&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,V.width,V.height,oe,A,V.data):t.texImage2D(i.TEXTURE_2D,ne,Z,V.width,V.height,0,oe,A,V.data);v.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,Be,Z,$.width,$.height),we&&At(v,$,oe,A)):t.texImage2D(i.TEXTURE_2D,0,Z,$.width,$.height,0,oe,A,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Z,le[0].width,le[0].height,$.depth);for(let ne=0,Te=le.length;ne<Te;ne++)if(V=le[ne],v.format!==xn)if(oe!==null)if(ie){if(we)if(v.layerUpdates.size>0){let Oe=Ol(V.width,V.height,v.format,v.type);for(let fe of v.layerUpdates){let tt=V.data.subarray(fe*Oe/V.data.BYTES_PER_ELEMENT,(fe+1)*Oe/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,fe,V.width,V.height,1,oe,tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,V.width,V.height,$.depth,oe,V.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Z,V.width,V.height,$.depth,0,V.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?we&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,V.width,V.height,$.depth,oe,A,V.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Z,V.width,V.height,$.depth,0,oe,A,V.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,Be,Z,le[0].width,le[0].height);for(let ne=0,Te=le.length;ne<Te;ne++)V=le[ne],v.format!==xn?oe!==null?ie?we&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,V.width,V.height,oe,V.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Z,V.width,V.height,0,V.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?we&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,V.width,V.height,oe,A,V.data):t.texImage2D(i.TEXTURE_2D,ne,Z,V.width,V.height,0,oe,A,V.data)}else if(v.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,Z,$.width,$.height,$.depth),we)if(v.layerUpdates.size>0){let ne=Ol($.width,$.height,v.format,v.type);for(let Te of v.layerUpdates){let Oe=$.data.subarray(Te*ne/$.data.BYTES_PER_ELEMENT,(Te+1)*ne/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,$.width,$.height,1,oe,A,Oe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,oe,A,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,$.width,$.height,$.depth,0,oe,A,$.data);else if(v.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,Be,Z,$.width,$.height,$.depth),we&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,oe,A,$.data)):t.texImage3D(i.TEXTURE_3D,0,Z,$.width,$.height,$.depth,0,oe,A,$.data);else if(v.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,Be,Z,$.width,$.height);else{let ne=$.width,Te=$.height;for(let Oe=0;Oe<Be;Oe++)t.texImage2D(i.TEXTURE_2D,Oe,Z,ne,Te,0,oe,A,null),ne>>=1,Te>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),$.parentNode!==ne){ne.appendChild($),u.add(v),ne.onpaint=Te=>{let Oe=Te.changedElements;for(let fe of u)Oe.includes(fe.image)&&(fe.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let Oe=i.RGBA,fe=i.RGBA,tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Oe,fe,tt,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(ie&&re){let ne=De(le[0]);t.texStorage2D(i.TEXTURE_2D,Be,Z,ne.width,ne.height)}for(let ne=0,Te=le.length;ne<Te;ne++)V=le[ne],ie?we&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,oe,A,V):t.texImage2D(i.TEXTURE_2D,ne,Z,oe,A,V);v.generateMipmaps=!1}else if(ie){if(re){let ne=De($);t.texStorage2D(i.TEXTURE_2D,Be,Z,ne.width,ne.height)}we&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,A,$)}else t.texImage2D(i.TEXTURE_2D,0,Z,oe,A,$);T(v)&&v.mipmapsAutoUpdate===!0&&w(ee),he.__version=se.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Wt(S,v,F){if(v.image.length!==6)return;let ee=nt(S,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+F);let se=n.get(K);if(K.version!==se.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);let he=qe.getPrimaries(qe.workingColorSpace),X=v.colorSpace===vn?null:qe.getPrimaries(v.colorSpace),$=v.colorSpace===vn||he===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let oe=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let fe=0;fe<6;fe++)!oe&&!A?Z[fe]=M(v.image[fe],!0,s.maxCubemapSize):Z[fe]=A?v.image[fe].image:v.image[fe],Z[fe]=Ce(v,Z[fe]);let V=Z[0],le=r.convert(v.format,v.colorSpace),ie=r.convert(v.type),re=E(v.internalFormat,le,ie,v.normalized,v.colorSpace),we=v.isVideoTexture!==!0,Be=se.__version===void 0||ee===!0,ne=K.dataReady,Te=b(v,V);et(i.TEXTURE_CUBE_MAP,v);let Oe;if(v.isDepthTexture){if(re=_(v.format===Xn,v.type),Be)if(we)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,V.width,V.height);else for(let fe=0;fe<6;fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,V.width,V.height,0,le,ie,null)}else if(oe){we&&Be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,re,V.width,V.height);for(let fe=0;fe<6;fe++){Oe=Z[fe].mipmaps;for(let tt=0;tt<Oe.length;tt++){let wt=Oe[tt];v.format!==xn?le!==null?we?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,tt,0,0,wt.width,wt.height,le,wt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,tt,re,wt.width,wt.height,0,wt.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,tt,0,0,wt.width,wt.height,le,ie,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,tt,re,wt.width,wt.height,0,le,ie,wt.data)}}}else{if(Oe=v.mipmaps,we&&Be){Oe.length>0&&Te++;let fe=De(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,re,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(A){we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Z[fe].width,Z[fe].height,le,ie,Z[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,Z[fe].width,Z[fe].height,0,le,ie,Z[fe].data);for(let tt=0;tt<Oe.length;tt++){let $n=Oe[tt].image[fe].image;we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,tt+1,0,0,$n.width,$n.height,le,ie,$n.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,tt+1,re,$n.width,$n.height,0,le,ie,$n.data)}}else{we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,le,ie,Z[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,re,le,ie,Z[fe]);for(let tt=0;tt<Oe.length;tt++){let wt=Oe[tt];we?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,tt+1,0,0,le,ie,wt.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,tt+1,re,le,ie,wt.image[fe])}}}T(v)&&v.mipmapsAutoUpdate===!0&&w(i.TEXTURE_CUBE_MAP),se.__version=K.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function ht(S,v,F,ee,K,se){let he=r.convert(F.format,F.colorSpace),X=r.convert(F.type),$=E(F.internalFormat,he,X,F.normalized,F.colorSpace),oe=n.get(v),A=n.get(F);if(A.__renderTarget=v,!oe.__hasExternalTextures){let Z=Math.max(1,v.width>>se),V=Math.max(1,v.height>>se);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,se,$,Z,V,v.depth,0,he,X,null):t.texImage2D(K,se,$,Z,V,0,he,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,K,A.__webglTexture,0,lt(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,K,A.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function bn(S,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer){let ee=v.depthTexture,K=ee&&ee.isDepthTexture?ee.type:null,se=_(v.stencilBuffer,K),he=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(v),se,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(v),se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,se,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,S)}else{let ee=v.textures;for(let K=0;K<ee.length;K++){let se=ee[K],he=r.convert(se.format,se.colorSpace),X=r.convert(se.type),$=E(se.internalFormat,he,X,se.normalized,se.colorSpace);de(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(v),$,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(v),$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(S,v,F){let ee=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);K.__renderTarget=v;let se=ee?v.depthTexture.image[0]:v.depthTexture.image;(!K.__webglTexture||se.width!==v.width||se.height!==v.height)&&(se.width=v.width,se.height=v.height,v.depthTexture.needsUpdate=!0),ee?ge(v.depthTexture,0):me(v.depthTexture,0);let he=K.__webglTexture,X=lt(v),$=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,oe=v.depthTexture.format===Xn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Hn)de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,$,he,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,oe,$,he,0);else if(v.depthTexture.format===Xn)de(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,$,he,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,oe,$,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function en(S){let v=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let ee=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ee){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ee.removeEventListener("dispose",K)};ee.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=ee}if(S.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let ee=0;ee<6;ee++)bt(v.__webglFramebuffer[ee],S,ee);else S.texture.mipmaps.length>0?bt(v.__webglFramebuffer[0],S,0):bt(v.__webglFramebuffer,S,0);else if(F){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]===void 0)v.__webglDepthbuffer[ee]=i.createRenderbuffer(),bn(v.__webglDepthbuffer[ee],S,!1);else{let K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,se)}}else if(S.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),bn(v.__webglDepthbuffer,S,!1);else{let K=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tn(S,v,F){let ee=n.get(S);v!==void 0&&ht(ee.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&en(S)}function nn(S){let v=S.texture,F=n.get(S),ee=n.get(v);S.addEventListener("dispose",z),B(S);let K=S.textures,se=S.isWebGLCubeRenderTarget===!0,he=K.length>1;if(he||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=v.version,a.memory.textures++),se){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(v.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let $=0;$<v.mipmaps.length;$++)F.__webglFramebuffer[X][$]=i.createFramebuffer()}else F.__webglFramebuffer[X]=i.createFramebuffer()}else{if(v.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<v.mipmaps.length;X++)F.__webglFramebuffer[X]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(he)for(let X=0,$=K.length;X<$;X++){let oe=n.get(K[X]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&de(S)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<K.length;X++){let $=K[X];F.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[X]);let oe=r.convert($.format,$.colorSpace),A=r.convert($.type),Z=E($.internalFormat,oe,A,$.normalized,$.colorSpace,S.isXRRenderTarget===!0),V=lt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,F.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),bn(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),et(i.TEXTURE_CUBE_MAP,v);for(let X=0;X<6;X++)if(v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)ht(F.__webglFramebuffer[X][$],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,$);else ht(F.__webglFramebuffer[X],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);T(v)?w(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(he){for(let X=0,$=K.length;X<$;X++){let oe=K[X],A=n.get(oe),Z=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Z=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,A.__webglTexture),et(Z,oe),ht(F.__webglFramebuffer,S,oe,i.COLOR_ATTACHMENT0+X,Z,0),T(oe)&&w(Z)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(X=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,ee.__webglTexture),et(X,v),v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)ht(F.__webglFramebuffer[$],S,v,i.COLOR_ATTACHMENT0,X,$);else ht(F.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,X,0);T(v)?w(X):v.mipmaps.length>0&&i.texParameteri(X,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}S.depthBuffer&&en(S)}function L(S){let v=S.textures;for(let F=0,ee=v.length;F<ee;F++){let K=v[F];if(T(K)&&K.mipmapsAutoUpdate===!0){let se=C(S),he=n.get(K).__webglTexture;t.bindTexture(se,he),w(se),t.unbindTexture()}}}let sn=[];function ot(S){if(S.samples>0){if(de(S)===!1){let v=S.textures,F=S.width,ee=S.height,K=i.COLOR_BUFFER_BIT,se=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(S),X=v.length>1;if(X)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),S.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);let A=n.get(v[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,A,0)}i.blitFramebuffer(0,0,F,ee,0,0,F,ee,K,i.NEAREST),c===!0&&(sn.length=0,sn.push(i.COLOR_ATTACHMENT0+oe),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&sn.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,sn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);let A=n.get(v[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,A,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&c){let v=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function lt(S){return Math.min(s.maxSamples,S.samples)}function de(S){let v=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(S){let v=a.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function Ce(S,v){let F=S.colorSpace,ee=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==Rs&&F!==vn&&(qe.getTransfer(F)===je?(ee!==xn||K!==Bt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",F)),v}function De(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=Ne,this.resetTextureUnits=j,this.getTextureUnits=Q,this.setTextureUnits=Se,this.setTexture2D=me,this.setTexture2DArray=ve,this.setTexture3D=Ae,this.setTextureCube=ge,this.rebindTextures=tn,this.setupRenderTarget=nn,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=en,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=de,this.dispose=W}function w0(i,e){function t(n,s=vn){let r,a=qe.getTransfer(s);if(n===Bt)return i.UNSIGNED_BYTE;if(n===Ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sl)return i.BYTE;if(n===bl)return i.SHORT;if(n===ls)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===gn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===_n)return i.HALF_FLOAT;if(n===El)return i.ALPHA;if(n===Al)return i.RGB;if(n===xn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Xn)return i.DEPTH_STENCIL;if(n===cs)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===di)return i.RG;if(n===Ra)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===js||n===Qs||n===er||n===tr)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ia||n===La||n===Da||n===Na)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba||n===ka||n===nr||n===za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Fa)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ba)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nr)return r.COMPRESSED_RG11_EAC;if(n===za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===$a||n===Ya||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Va)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ga)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eo)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===no||n===io)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===to)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===so||n===ro||n===ir||n===ao)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ir)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var T0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
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

}`,Kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new zs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jt({vertexShader:T0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new ri(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jl=class extends En{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new Kl,m={},M=t.getContextAttributes(),T=null,w=null,C=[],E=[],_=new He,b=null,B=null,I=new Ot;I.viewport=new ct;let N=new Ot;N.viewport=new ct;let z=[I,N],q=new va,P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let me=C[Y];return me===void 0&&(me=new ns,C[Y]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Y){let me=C[Y];return me===void 0&&(me=new ns,C[Y]=me),me.getGripSpace()},this.getHand=function(Y){let me=C[Y];return me===void 0&&(me=new ns,C[Y]=me),me.getHandSpace()};function J(Y){let me=E.indexOf(Y.inputSource);if(me===-1)return;let ve=C[me];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,l||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",te);for(let Y=0;Y<C.length;Y++){let me=E[Y];me!==null&&(E[Y]=null,C[Y].disconnect(me))}P=null,W=null,p.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(T),f=null,d=null,u=null,s=null,w=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),B!==null){let Y=B.camera;Y.fov=B.fov,Y.zoom=B.zoom,Y.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",H),s.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ae=null,ge=null;M.depth&&(ge=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?Xn:Hn,Ae=M.stencil?Pi:gn);let Fe={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Gt(d.textureWidth,d.textureHeight,{format:xn,type:Bt,depthTexture:new Wn(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Gt(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(Y){for(let me=0;me<Y.removed.length;me++){let ve=Y.removed[me],Ae=E.indexOf(ve);Ae>=0&&(E[Ae]=null,C[Ae].disconnect(ve))}for(let me=0;me<Y.added.length;me++){let ve=Y.added[me],Ae=E.indexOf(ve);if(Ae===-1){for(let Fe=0;Fe<C.length;Fe++)if(Fe>=E.length){E.push(ve),Ae=Fe;break}else if(E[Fe]===null){E[Fe]=ve,Ae=Fe;break}if(Ae===-1)break}let ge=C[Ae];ge&&ge.connect(ve)}}function G(Y,me){me===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(me.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let me=Y.near,ve=Y.far;p.texture!==null&&(p.depthNear>0&&(me=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),q.near=N.near=I.near=me,q.far=N.far=I.far=ve,(P!==q.near||W!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,W=q.far),q.layers.mask=Y.layers.mask|6,I.layers.mask=q.layers.mask&-5,N.layers.mask=q.layers.mask&-3;let Ae=Y.parent,ge=q.cameras;G(q,Ae);for(let Fe=0;Fe<ge.length;Fe++)G(ge[Fe],Ae);q.projectionMatrix.copy(I.projectionMatrix),q.projectionMatrixInverse.copy(I.projectionMatrixInverse),B===null&&Y.isPerspectiveCamera&&(B={camera:Y,fov:Y.fov,zoom:Y.zoom}),j(Y,q,Ae)};function j(Y,me,ve){ve===null?Y.matrix.copy(me.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(me.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(me.projectionMatrix),Y.projectionMatrixInverse.copy(me.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=jr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(Y){return m[Y]};let Q=null;function Se(Y,me){if(h=me.getViewerPose(l||a),g=me,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let Ae=!1;ve.length!==q.cameras.length&&(q.cameras.length=0,Ae=!0);for(let Pe=0;Pe<ve.length;Pe++){let et=ve[Pe],nt=null;if(f!==null)nt=f.getViewport(et);else{let At=u.getViewSubImage(d,et);nt=At.viewport,Pe===0&&(e.setRenderTargetTextures(w,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(w))}let Ge=z[Pe];Ge===void 0&&(Ge=new Ot,Ge.layers.enable(Pe),Ge.viewport=new ct,z[Pe]=Ge),Ge.matrix.fromArray(et.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(et.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(nt.x,nt.y,nt.width,nt.height),Pe===0&&(q.matrix.copy(Ge.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ae===!0&&q.cameras.push(Ge)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Pe=u.getDepthInformation(ve[0]);Pe&&Pe.isValid&&Pe.texture&&p.init(Pe,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Pe=0;Pe<ve.length;Pe++){let et=ve[Pe].camera;if(et){let nt=m[et];nt||(nt=new zs,m[et]=nt);let Ge=u.getCameraImage(et);nt.sourceTexture=Ge}}}}for(let ve=0;ve<C.length;ve++){let Ae=E[ve],ge=C[ve];Ae!==null&&ge!==void 0&&ge.update(Ae,me,l||a)}Q&&Q(Y,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}let Ne=new _u;Ne.setAnimationLoop(Se),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}},A0=new Je,Au=new Le;Au.set(-1,0,0,0,1,0,0,0,1);function C0(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Nl(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,T,w){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,M,T):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Lt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Lt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),T=M.envMap,w=M.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(A0.makeRotationFromEuler(w)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Au),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Lt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R0(i,e,t,n){let s={},r={};function a(M,T){let w=T.program;n.uniformBlockBinding(M,w,s[M.id])}function o(M,T){let w=s[M.id];w===void 0&&(g(M),w=c(M),s[M.id]=w,M.addEventListener("dispose",p));let C=T.program;n.updateUBOMapping(M,C);let E=e.render.frame;r[M.id]!==E&&(l(M),r[M.id]=E)}function c(M){let T=i.createBuffer(),w=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,C),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function l(M){let T=s[M.id],w=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let E=0,_=w.length;E<_;E++){let b=w[E];if(Array.isArray(b))for(let B=0,I=b.length;B<I;B++)h(b[B],E,B,C);else h(b,E,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,T,w,C){if(d(M,T,w,C)===!0){let E=M.__offset,_=M.value;if(Array.isArray(_)){let b=0;for(let B=0;B<_.length;B++){let I=_[B],N=x(I,!0);u(I,M.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,M.__data)}}function u(M,T,w){typeof M=="number"||typeof M=="boolean"?T[w]=M:M.isMatrix3?(T[w]=M.elements[0],T[w+1]=M.elements[1],T[w+2]=M.elements[2],T[w+3]=0,T[w+4]=M.elements[3],T[w+5]=M.elements[4],T[w+6]=M.elements[5],T[w+7]=0,T[w+8]=M.elements[6],T[w+9]=M.elements[7],T[w+10]=M.elements[8],T[w+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-w),w):M.toArray(T,w)}function d(M,T,w,C){let E=M.value,_=T+"_"+w;if(Array.isArray(E)){C[_]===void 0&&(C[_]=[]);let b=C[_],B=!1;for(let I=0;I<E.length;I++)f(E[I],b,I)===!0&&(B=!0);return B}return f(E,C,_)}function f(M,T,w){if(T[w]===void 0)return typeof M=="number"||typeof M=="boolean"?T[w]=M:ArrayBuffer.isView(M)?T[w]=M.slice():T[w]=M.clone(),!0;{let C=T[w];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return T[w]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(M){let T=M.uniforms,w=0,C=16;for(let _=0,b=T.length;_<b;_++){let B=Array.isArray(T[_])?T[_]:[T[_]];for(let I=0,N=B.length;I<N;I++){let z=B[I],q=Array.isArray(z.value)?z.value:[z.value],P=Array.isArray(T[_])||Array.isArray(z.value),W=w;for(let H=0,te=q.length;H<te;H++){let G=q[H],j=x(G,P),Q=w%C,Se=Q%j.boundary,Ne=Q+Se;w+=Se,Ne!==0&&C-Ne<j.storage&&(w+=C-Ne),H===0&&(W=w),w+=j.storage}let J=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new J((w-W)/Float32Array.BYTES_PER_ELEMENT),z.__offset=W}}let E=w%C;return E>0&&(w+=C-E),M.__size=w,M.__cache={},this}function x(M,T){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=16,w.storage=48):M.isMatrix4?(w.boundary=16,w.storage=64):M.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(w.boundary=16,w.storage=Math.ceil(w.storage/16)*16),w}function p(M){let T=M.target;T.removeEventListener("dispose",p),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var P0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pn=null;function I0(){return Pn===null&&(Pn=new bi(P0,16,16,di,_n),Pn.name="DFG_LUT",Pn.minFilter=Vt,Pn.magFilter=Vt,Pn.wrapS=Tn,Pn.wrapT=Tn,Pn.generateMipmaps=!1,Pn.needsUpdate=!0),Pn}var co=class{constructor(e={}){let{canvas:t=Hh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Bt}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,p=new Set([Pa,Ra,Ca]),m=new Set([Bt,gn,ls,Pi,Ea,Aa]),M=new Uint32Array(4),T=new Int32Array(4),w={textures:[],min:[],max:[],resolution:[]},C=null,E=null,_=[],b=[],B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,z=null,q=null,P=null,W=null;this._outputColorSpace=Ht;let J=0,H=0,te=null,G=-1,j=null,Q=new ct,Se=new ct,Ne=null,Y=new Ee(0),me=0,ve=t.width,Ae=t.height,ge=1,Fe=null,pt=null,Pe=new ct(0,0,ve,Ae),et=new ct(0,0,ve,Ae),nt=!1,Ge=new ii,At=new na,xt=!1,Wt=!1,ht=new Je,bn=new D,bt=new ct,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tn=!1;function nn(){return te===null?ge:1}let L=n;function sn(y,R){return t.getContext(y,R)}let ot,lt,de,vt,Ce,De,S,v,F,ee,K,se,he,X,$,oe,A,Z,V,le,ie,re,we;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){let R="webgl2";if(L=sn(R,y),L===null)throw sn(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(y){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ie("WebGLRenderer: "+y.message),y}function Be(){ot=new Vm(L),ot.init(),ie=new w0(L,ot),lt=new Im(L,ot,e,ie),de=new S0(L,ot),lt.reversedDepthBuffer&&d&&de.buffers.depth.setReversed(!0),q=L.createFramebuffer(),P=L.createFramebuffer(),W=L.createFramebuffer(),vt=new Xm(L),Ce=new l0,De=new b0(L,ot,de,Ce,lt,ie,vt),S=new Hm(I),v=new qd(L),re=new Rm(L,v),F=new Gm(L,v,vt,re),ee=new $m(L,F,v,re,vt),Z=new qm(L,lt,De),$=new Lm(Ce),K=new o0(I,S,ot,lt,re,$),se=new C0(I,Ce),he=new h0,X=new g0(ot),A=new Cm(I,S,de,ee,g,c),oe=new M0(I,ee,lt),we=new R0(L,vt,lt,de),V=new Pm(L,ot,vt),le=new Wm(L,ot,vt),vt.programs=K.programs,I.capabilities=lt,I.extensions=ot,I.properties=Ce,I.renderLists=he,I.shadowMap=oe,I.state=de,I.info=vt}x!==Bt&&(B=new Zm(x,t.width,t.height,o,s,r));let ne=new jl(I,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=ot.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ot.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(y){y!==void 0&&(ge=y,this.setSize(ve,Ae,!1))},this.getSize=function(y){return y.set(ve,Ae)},this.setSize=function(y,R,k=!0){if(ne.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=y,Ae=R,t.width=Math.floor(y*ge),t.height=Math.floor(R*ge),k===!0&&(t.style.width=y+"px",t.style.height=R+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,y,R)},this.getDrawingBufferSize=function(y){return y.set(ve*ge,Ae*ge).floor()},this.setDrawingBufferSize=function(y,R,k){ve=y,Ae=R,ge=k,t.width=Math.floor(y*k),t.height=Math.floor(R*k),this.setViewport(0,0,y,R)},this.setEffects=function(y){if(x===Bt){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let R=0;R<y.length;R++)if(y[R].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,R,k,U){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,R,k,U),de.viewport(Q.copy(Pe).multiplyScalar(nn()).round())},this.getScissor=function(y){return y.copy(et)},this.setScissor=function(y,R,k,U){y.isVector4?et.set(y.x,y.y,y.z,y.w):et.set(y,R,k,U),de.scissor(Se.copy(et).multiplyScalar(nn()).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(y){de.setScissorTest(nt=y)},this.setOpaqueSort=function(y){Fe=y},this.setTransparentSort=function(y){pt=y},this.getClearColor=function(y){return y.copy(A.getClearColor())},this.setClearColor=function(){A.setClearColor(...arguments)},this.getClearAlpha=function(){return A.getClearAlpha()},this.setClearAlpha=function(){A.setClearAlpha(...arguments)},this.clear=function(y=!0,R=!0,k=!0){let U=0;if(y){let O=!1;if(te!==null){let ue=te.texture.format;O=p.has(ue)}if(O){let ue=te.texture.type,xe=m.has(ue),ce=A.getClearColor(),_e=A.getClearAlpha(),be=ce.r,Ue=ce.g,We=ce.b;xe?(M[0]=be,M[1]=Ue,M[2]=We,M[3]=_e,L.clearBufferuiv(L.COLOR,0,M)):(T[0]=be,T[1]=Ue,T[2]=We,T[3]=_e,L.clearBufferiv(L.COLOR,0,T))}else U|=L.COLOR_BUFFER_BIT}R&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),z=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),A.dispose(),he.dispose(),X.dispose(),De.dispose(),Ce.dispose(),S.dispose(),ee.dispose(),F.dispose(),re.dispose(),we.dispose(),K.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Mc),ne.removeEventListener("sessionend",Sc),mi.stop()};function Te(y){y.preventDefault(),Ll("WebGLRenderer: Context Lost."),N=!0}function Oe(){Ll("WebGLRenderer: Context Restored."),N=!1;let y=vt.autoReset,R=oe.enabled,k=oe.autoUpdate,U=oe.needsUpdate,O=oe.type;Be(),vt.autoReset=y,oe.enabled=R,oe.autoUpdate=k,oe.needsUpdate=U,oe.type=O}function fe(y){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function tt(y){let R=y.target;R.removeEventListener("dispose",tt),wt(R)}function wt(y){$n(y),Ce.remove(y)}function $n(y){let R=Ce.get(y).programs;R!==void 0&&(R.forEach(function(k){K.releaseProgram(k)}),y.isShaderMaterial&&K.releaseShaderCache(y))}this.renderBufferDirect=function(y,R,k,U,O,ue){R===null&&(R=en);let xe=O.isMesh&&O.matrixWorld.determinantAffine()<0,ce=nd(y,R,k,U,O);de.setMaterial(U,xe);let _e=k.index,be=1;if(U.wireframe===!0){if(_e=F.getWireframeAttribute(k),_e===void 0)return;be=2}let Ue=k.drawRange,We=k.attributes.position,ye=Ue.start*be,Xe=(Ue.start+Ue.count)*be;ue!==null&&(ye=Math.max(ye,ue.start*be),Xe=Math.min(Xe,(ue.start+ue.count)*be)),_e!==null?(ye=Math.max(ye,0),Xe=Math.min(Xe,_e.count)):We!=null&&(ye=Math.max(ye,0),Xe=Math.min(Xe,We.count));let mt=Xe-ye;if(mt<0||mt===1/0)return;re.setup(O,U,ce,k,_e);let st,it=V;if(_e!==null&&(st=v.get(_e),it=le,it.setIndex(st)),O.isMesh)U.wireframe===!0?(de.setLineWidth(U.wireframeLinewidth*nn()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(O.isLine){let Dt=U.linewidth;Dt===void 0&&(Dt=1),de.setLineWidth(Dt*nn()),O.isLineSegments?it.setMode(L.LINES):O.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else O.isPoints?it.setMode(L.POINTS):O.isSprite&&it.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))it.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Dt=O._multiDrawStarts,Me=O._multiDrawCounts,zt=O._multiDrawCount,Ke=_e?v.get(_e).bytesPerElement:1,gi=Ce.get(U).currentProgram.getUniforms();for(let Nt=0;Nt<zt;Nt++)gi.setValue(L,"_gl_DrawID",Nt),it.render(Dt[Nt]/Ke,Me[Nt])}else if(O.isInstancedMesh)it.renderInstances(ye,mt,O.count);else if(k.isInstancedBufferGeometry){let Dt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,Dt);it.renderInstances(ye,mt,Me)}else it.render(ye,mt)};function yc(y,R,k,U){z!==null&&y.isNodeMaterial&&z.setObject(U,y),xt===!0&&$.setState(y,k,!1),y.transparent===!0&&y.side===Xt&&y.forceSinglePass===!1?(y.side=Lt,y.needsUpdate=!0,vs(y,R,U),y.side=ui,y.needsUpdate=!0,vs(y,R,U),y.side=Xt):vs(y,R,U)}this.compile=function(y,R,k=null){k===null&&(k=y),z!==null&&z.renderStart(y,R,k),E=X.get(k),E.init(R),b.push(E),k.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),y!==k&&y.traverseVisible(function(O){O.isLight&&O.layers.test(R.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),Wt=this.localClippingEnabled,xt=$.init(this.clippingPlanes,Wt),xt===!0&&$.setGlobalState(this.clippingPlanes,R),z!==null&&oe.render(E.state.shadowsArray,k,R);let U=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ue=O.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){let ce=ue[xe];yc(ce,k,R,O),U.add(ce)}else yc(ue,k,R,O),U.add(ue)}),E=b.pop(),z!==null&&z.renderEnd(),U},this.compileAsync=function(y,R,k=null){let U=this.compile(y,R,k);return new Promise(O=>{function ue(){if(U.forEach(function(xe){let _e=Ce.get(xe).currentProgram;(_e===void 0||_e.isReady())&&U.delete(xe)}),U.size===0){O(y);return}setTimeout(ue,10)}ot.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ro=null;function ed(y){Ro&&Ro(y)}function Mc(){mi.stop()}function Sc(){mi.start()}let mi=new _u;mi.setAnimationLoop(ed),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(y){Ro=y,ne.setAnimationLoop(y),y===null?mi.stop():mi.start()},ne.addEventListener("sessionstart",Mc),ne.addEventListener("sessionend",Sc),this.render=function(y,R){if(R!==void 0&&R.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(y,R);let k=ne.enabled===!0&&ne.isPresenting===!0,U=B!==null&&(te===null||k)&&B.begin(I,te);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(R),R=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,R,te),E=X.get(y,b.length),E.init(R),E.state.textureUnits=De.getTextureUnits(),b.push(E),ht.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),R.isArrayCamera?At.setFromArrayCamera(R):Ge.setFromProjectionMatrix(ht,an,R.reversedDepth),Wt=this.localClippingEnabled,xt=$.init(this.clippingPlanes,Wt),C=he.get(y,_.length),C.init(),_.push(C),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let xe=I.xr.getDepthSensingMesh();xe!==null&&Po(xe,R,-1/0,I.sortObjects)}Po(y,R,0,I.sortObjects),C.finish(),z!==null&&z.updateLights(E.state.lightsArray),I.sortObjects===!0&&C.sort(Fe,pt),tn=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,tn&&A.addToRenderList(C,y),this.info.autoReset===!0&&this.info.reset(),xt===!0&&$.beginShadows();let O=E.state.shadowsArray;if(oe.render(O,y,R),xt===!0&&$.endShadows(),(U&&B.hasRenderPass())===!1){let xe=C.opaque,ce=C.transmissive;if(E.setupLights(),R.isArrayCamera){let _e=R.cameras;if(ce.length>0)for(let be=0,Ue=_e.length;be<Ue;be++){let We=_e[be];wc(xe,ce,y,We)}tn&&A.render(y);for(let be=0,Ue=_e.length;be<Ue;be++){let We=_e[be];bc(C,y,We,We.viewport)}}else ce.length>0&&wc(xe,ce,y,R),tn&&A.render(y),bc(C,y,R)}te!==null&&H===0&&(De.updateMultisampleRenderTarget(te),De.updateRenderTargetMipmap(te)),U&&B.end(I),y.isScene===!0&&y.onAfterRender(I,y,R),re.resetDefaultState(),G=-1,j=null,b.pop(),b.length>0?(E=b[b.length-1],De.setTextureUnits(E.state.textureUnits),xt===!0&&$.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?C=_[_.length-1]:C=null,z!==null&&z.renderEnd()};function Po(y,R,k,U){if(y.visible===!1)return;if(y.layers.test(R.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(R);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let xe=R.isArrayCamera?At:Ge;if(!y.frustumCulled||y.intersectsFrustum(xe)){U&&bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ht);let ce=ee.update(y),_e=y.material;_e.visible&&C.push(y,ce,_e,k,bt.z,null,R)}}else if(y.isMesh||y.isLine||y.isPoints){let xe=R.isArrayCamera?At:Ge;if(!y.frustumCulled||y.intersectsFrustum(xe)){let ce=ee.update(y),_e=y.material;if(U&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),bt.copy(y.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),bt.copy(ce.boundingSphere.center)),bt.applyMatrix4(y.matrixWorld).applyMatrix4(ht)),Array.isArray(_e)){let be=ce.groups;for(let Ue=0,We=be.length;Ue<We;Ue++){let ye=be[Ue],Xe=_e[ye.materialIndex];Xe&&Xe.visible&&C.push(y,ce,Xe,k,bt.z,ye,R)}}else _e.visible&&C.push(y,ce,_e,k,bt.z,null,R)}}}let ue=y.children;for(let xe=0,ce=ue.length;xe<ce;xe++)Po(ue[xe],R,k,U)}function bc(y,R,k,U){let{opaque:O,transmissive:ue,transparent:xe}=y;E.setupLightsView(k),xt===!0&&$.setGlobalState(I.clippingPlanes,k),U&&de.viewport(Q.copy(U)),O.length>0&&gr(O,R,k),ue.length>0&&gr(ue,R,k),xe.length>0&&gr(xe,R,k),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function wc(y,R,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[U.id]===void 0){let ye=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[U.id]=new Gt(1,1,{generateMipmaps:!0,type:ye?_n:Bt,minFilter:ln,samples:Math.max(4,lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}let ue=E.state.transmissionRenderTarget[U.id],xe=U.viewport||Q;ue.setSize(xe.z*I.transmissionResolutionScale,xe.w*I.transmissionResolutionScale);let ce=I.getRenderTarget(),_e=I.getActiveCubeFace(),be=I.getActiveMipmapLevel();I.setRenderTarget(ue),I.getClearColor(Y),me=I.getClearAlpha(),me<1&&I.setClearColor(16777215,.5),I.clear(),tn&&A.render(k);let Ue=I.toneMapping;I.toneMapping=jt;let We=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),E.setupLightsView(U),xt===!0&&$.setGlobalState(I.clippingPlanes,U),gr(y,k,U),De.updateMultisampleRenderTarget(ue),De.updateRenderTargetMipmap(ue),ot.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Xe=0,mt=R.length;Xe<mt;Xe++){let st=R[Xe],{object:it,geometry:Dt,material:Me,group:zt}=st;if(Me.side===Xt&&it.layers.test(U.layers)){let Ke=Me.side;Me.side=Lt,Me.needsUpdate=!0,Tc(it,k,U,Dt,Me,zt),Me.side=Ke,Me.needsUpdate=!0,ye=!0}}ye===!0&&(De.updateMultisampleRenderTarget(ue),De.updateRenderTargetMipmap(ue))}I.setRenderTarget(ce,_e,be),I.setClearColor(Y,me),We!==void 0&&(U.viewport=We),I.toneMapping=Ue}function gr(y,R,k){let U=R.isScene===!0?R.overrideMaterial:null;for(let O=0,ue=y.length;O<ue;O++){let xe=y[O],{object:ce,geometry:_e,group:be}=xe,Ue=xe.material;Ue.allowOverride===!0&&U!==null&&(Ue=U),ce.layers.test(k.layers)&&Tc(ce,R,k,_e,Ue,be)}}function Tc(y,R,k,U,O,ue){z!==null&&O.isNodeMaterial&&z.setObject(y,O),y.onBeforeRender(I,R,k,U,O,ue),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(I,R,k,U,y,ue),O.transparent===!0&&O.side===Xt&&O.forceSinglePass===!1?(O.side=Lt,O.needsUpdate=!0,I.renderBufferDirect(k,R,U,O,y,ue),O.side=ui,O.needsUpdate=!0,I.renderBufferDirect(k,R,U,O,y,ue),O.side=Xt):I.renderBufferDirect(k,R,U,O,y,ue),y.onAfterRender(I,R,k,U,O,ue)}function Ec(y){let R=0;for(let k of y)k.texture!==null&&R++;return R}function vs(y,R,k){R.isScene!==!0&&(R=en);let U=Ce.get(y),O=E.state.lights,ue=E.state.shadowsArray,xe=O.state.version,ce=K.getParameters(y,O.state,ue,R,k,E.state.lightProbeGridArray),_e=K.getProgramCacheKey(ce),be=U.programs;U.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,U.fog=R.fog;let Ue=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;U.envMap=S.get(y.envMap||U.environment,Ue),U.envMapRotation=U.environment!==null&&y.envMap===null?R.environmentRotation:y.envMapRotation,be===void 0&&(y.addEventListener("dispose",tt),be=new Map,U.programs=be,U.programVariants=new Map);let We=be.get(_e);if(We!==void 0){if(U.currentProgram===We&&U.lightsStateVersion===xe)return Cc(y,ce),We}else ce.uniforms=K.getUniforms(y),z!==null&&y.isNodeMaterial&&z.build(y,k,ce),y.onBeforeCompile(ce,I),We=K.acquireProgram(ce,_e),be.set(_e,We),U.uniforms=ce.uniforms;let ye=U.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ye.clippingPlanes=$.uniform),Cc(y,ce),U.needsLights=sd(y),U.lightsStateVersion=xe,U.needsLights&&(ye.ambientLightColor.value=O.state.ambient,ye.lightProbe.value=O.state.probe,ye.sunLights.value=O.state.sun,ye.sunLightShadows.value=O.state.sunShadow,ye.directionalLights.value=O.state.directional,ye.directionalLightShadows.value=O.state.directionalShadow,ye.spotLights.value=O.state.spot,ye.spotLightShadows.value=O.state.spotShadow,ye.rectAreaLights.value=O.state.rectArea,ye.ltc_1.value=O.state.rectAreaLTC1,ye.ltc_2.value=O.state.rectAreaLTC2,ye.pointLights.value=O.state.point,ye.pointLightShadows.value=O.state.pointShadow,ye.hemisphereLights.value=O.state.hemi,ye.sunShadowMatrix.value=O.state.sunShadowMatrix,ye.sunShadowCascade.value=O.state.sunShadowCascade,ye.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ye.spotLightMatrix.value=O.state.spotLightMatrix,ye.spotLightMap.value=O.state.spotLightMap,ye.pointShadowMatrix.value=O.state.pointShadowMatrix),U.numLightProbeGrids=Ec(E.state.lightProbeGridArray),U.currentProgram=We,U.uniformsList=null,We}function td(y,R,k,U,O){let ue=Ce.get(y),xe=ue.currentProgram.id+","+U+","+O,ce=ue.programVariants.get(xe);return ce===void 0?(ce=vs(y,R,k),ue.programVariants.set(xe,ce)):(ue.currentProgram=ce,ue.uniformsList=null,ue.outputColorSpace=U,ue.toneMapping=O),ce}function Ac(y){if(y.uniformsList===null){let R=y.currentProgram.getUniforms();y.uniformsList=hs.seqWithValue(R.seq,y.uniforms)}return y.uniformsList}function Cc(y,R){let k=Ce.get(y);k.outputColorSpace=R.outputColorSpace,k.batching=R.batching,k.batchingColor=R.batchingColor,k.instancing=R.instancing,k.instancingColor=R.instancingColor,k.instancingMorph=R.instancingMorph,k.skinning=R.skinning,k.morphTargets=R.morphTargets,k.morphNormals=R.morphNormals,k.morphColors=R.morphColors,k.morphTargetsCount=R.morphTargetsCount,k.numClippingPlanes=R.numClippingPlanes,k.numIntersection=R.numClipIntersection,k.vertexAlphas=R.vertexAlphas,k.vertexTangents=R.vertexTangents,k.toneMapping=R.toneMapping}function nd(y,R,k,U,O){R.isScene!==!0&&(R=en),De.resetTextureUnits();let ue=R.fog,xe=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?R.environment:null,ce=te===null?I.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qe.workingColorSpace,_e=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,be=S.get(U.envMap||xe,_e),Ue=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,We=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ye=!!k.morphAttributes.position,Xe=!!k.morphAttributes.normal,mt=!!k.morphAttributes.color,st=jt;U.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(st=I.toneMapping);let it=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Dt=it!==void 0?it.length:0,Me=Ce.get(U),zt=E.state.lights;if(xt===!0&&(Wt===!0||y!==j)){let ut=y===j&&U.id===G;$.setState(U,y,ut)}let Ke=!1,gi=!1;U.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==zt.state.version||O.isBatchedMesh&&Me.batching===!1||!O.isBatchedMesh&&Me.batching===!0||O.isBatchedMesh&&Me.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Me.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Me.instancing===!1||!O.isInstancedMesh&&Me.instancing===!0||O.isSkinnedMesh&&Me.skinning===!1||!O.isSkinnedMesh&&Me.skinning===!0||O.isInstancedMesh&&Me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Me.instancingMorph===!1&&O.morphTexture!==null||Me.envMap!==be||U.fog===!0&&Me.fog!==ue||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==$.numPlanes||Me.numIntersection!==$.numIntersection)||Me.vertexAlphas!==Ue||Me.vertexTangents!==We||Me.morphTargets!==ye||Me.morphNormals!==Xe||Me.morphColors!==mt||Me.morphTargetsCount!==Dt||Me.numLightProbeGrids!==Ec(E.state.lightProbeGridArray)?Ke=!0:(Me.outputColorSpace!==ce||Me.toneMapping!==st)&&(gi=!0):(Ke=!0,Me.__version=U.version);let Nt=Me.currentProgram;(Ke===!0||gi===!0)&&(Nt=gi===!0?td(U,R,O,ce,st):vs(U,R,O),z&&U.isNodeMaterial&&z.onUpdateProgram(U,Nt,Me));let _r=!1,Yn=!1,_i=!1,Ze=Nt.getUniforms(),Ct=Me.uniforms;if(de.useProgram(Nt.program)&&(_r=!0,Yn=!0,_i=!0),U.id!==G&&(G=U.id,Yn=!0),_r||j!==y){de.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ze.setValue(L,"projectionMatrix",y.projectionMatrix),Ze.setValue(L,"viewMatrix",y.matrixWorldInverse);let Tt=Ze.map.cameraPosition;Tt!==void 0&&Tt.setValue(L,bn.setFromMatrixPosition(y.matrixWorld)),lt.logarithmicDepthBuffer&&Ze.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ze.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),j!==y&&(j=y,Yn=!0,_i=!0)}if(Me.needsLights&&(zt.state.sunShadowMap.length>0&&Ze.setValue(L,"sunShadowMap",zt.state.sunShadowMap,De),zt.state.directionalShadowMap.length>0&&Ze.setValue(L,"directionalShadowMap",zt.state.directionalShadowMap,De),zt.state.spotShadowMap.length>0&&Ze.setValue(L,"spotShadowMap",zt.state.spotShadowMap,De),zt.state.pointShadowMap.length>0&&Ze.setValue(L,"pointShadowMap",zt.state.pointShadowMap,De)),O.isSkinnedMesh){Ze.setOptional(L,O,"bindMatrix"),Ze.setOptional(L,O,"bindMatrixInverse");let ut=O.skeleton;ut&&(ut.boneTexture===null&&ut.computeBoneTexture(),Ze.setValue(L,"boneTexture",ut.boneTexture,De))}O.isBatchedMesh&&(Ze.setOptional(L,O,"batchingTexture"),Ze.setValue(L,"batchingTexture",O._matricesTexture,De),Ze.setOptional(L,O,"batchingIdTexture"),Ze.setValue(L,"batchingIdTexture",O._indirectTexture,De),Ze.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&Ze.setValue(L,"batchingColorTexture",O._colorsTexture,De));let un=k.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Z.update(O,k,Nt),(Yn||Me.receiveShadow!==O.receiveShadow)&&(Me.receiveShadow=O.receiveShadow,Ze.setValue(L,"receiveShadow",O.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&R.environment!==null&&(Ct.envMapIntensity.value=R.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=I0()),Yn){if(Ze.setValue(L,"toneMappingExposure",I.toneMappingExposure),Me.needsLights&&id(Ct,_i),ue&&U.fog===!0&&se.refreshFogUniforms(Ct,ue),se.refreshMaterialUniforms(Ct,U,ge,Ae,E.state.transmissionRenderTarget[y.id]),Me.needsLights&&Me.numLightProbeGrids>0){let ut=w,Tt=0;for(let Nn of E.state.lightProbeGridArray)Nn.texture!==null&&(ut.textures[Tt]=Nn.texture,ut.min[Tt]=Nn.boundingBox.min,ut.max[Tt]=Nn.boundingBox.max,ut.resolution[Tt]=Nn.resolution,Tt++);for(let Nn in ut)ut[Nn].length=Tt;Ct.probesSH.value=ut.textures,Ct.probesMin.value=ut.min,Ct.probesMax.value=ut.max,Ct.probesResolution.value=ut.resolution}hs.upload(L,Ac(Me),Ct,De)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(hs.upload(L,Ac(Me),Ct,De),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ze.setValue(L,"center",O.center),Ze.setValue(L,"modelViewMatrix",O.modelViewMatrix),Ze.setValue(L,"normalMatrix",O.normalMatrix),Ze.setValue(L,"modelMatrix",O.matrixWorld),U.uniformsGroups!==void 0){let ut=U.uniformsGroups;for(let Tt=0,Nn=ut.length;Tt<Nn;Tt++){let Pc=ut[Tt];we.update(Pc,Nt),we.bind(Pc,Nt)}}return Nt}function id(y,R){y.ambientLightColor.needsUpdate=R,y.lightProbe.needsUpdate=R,y.sunLights.needsUpdate=R,y.sunLightShadows.needsUpdate=R,y.directionalLights.needsUpdate=R,y.directionalLightShadows.needsUpdate=R,y.pointLights.needsUpdate=R,y.pointLightShadows.needsUpdate=R,y.spotLights.needsUpdate=R,y.spotLightShadows.needsUpdate=R,y.rectAreaLights.needsUpdate=R,y.hemisphereLights.needsUpdate=R}function sd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(y,R,k){let U=Ce.get(y);U.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Ce.get(y.texture).__webglTexture=R,Ce.get(y.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:k,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,R){let k=Ce.get(y);k.__webglFramebuffer=R,k.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(y,R=0,k=0){te=y,J=R,H=k;let U=null,O=!1,ue=!1;if(y){let ce=Ce.get(y);if(ce.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(L.FRAMEBUFFER,ce.__webglFramebuffer),Q.copy(y.viewport),Se.copy(y.scissor),Ne=y.scissorTest,de.viewport(Q),de.scissor(Se),de.setScissorTest(Ne),G=-1;return}else if(ce.__webglFramebuffer===void 0)De.setupRenderTarget(y);else if(ce.__hasExternalTextures)De.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ue=y.depthTexture;if(ce.__boundDepthTexture!==Ue){if(Ue!==null&&Ce.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(y)}}let _e=y.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ue=!0);let be=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(be[R])?U=be[R][k]:U=be[R],O=!0):y.samples>0&&De.useMultisampledRTT(y)===!1?U=Ce.get(y).__webglMultisampledFramebuffer:Array.isArray(be)?U=be[k]:U=be,Q.copy(y.viewport),Se.copy(y.scissor),Ne=y.scissorTest}else Q.copy(Pe).multiplyScalar(ge).floor(),Se.copy(et).multiplyScalar(ge).floor(),Ne=nt;if(k!==0&&(U=q),de.bindFramebuffer(L.FRAMEBUFFER,U)&&de.drawBuffers(y,U),de.viewport(Q),de.scissor(Se),de.setScissorTest(Ne),O){let ce=Ce.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+R,ce.__webglTexture,k)}else if(ue){let ce=R;for(let _e=0;_e<y.textures.length;_e++){let be=Ce.get(y.textures[_e]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_e,be.__webglTexture,k,ce)}}else if(y!==null&&k!==0){let ce=Ce.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ce.__webglTexture,k)}G=-1};function Rc(y){let R=Ce.get(y);return(R.__readFormat!==y.format||R.__readType!==y.type)&&(R.__readFormat=y.format,R.__readType=y.type,R.__formatReadable=lt.textureFormatReadable(y.format),R.__typeReadable=lt.textureTypeReadable(y.type)),R}this.readRenderTargetPixels=function(y,R,k,U,O,ue,xe,ce=0){if(!(y&&y.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe],Array.isArray(_e)&&(_e=_e[0])),_e){de.bindFramebuffer(L.FRAMEBUFFER,_e);try{let be=y.textures[ce],Ue=be.format,We=be.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ce);let ye=Rc(be);if(ye.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=y.width-U&&k>=0&&k<=y.height-O&&L.readPixels(R,k,U,O,ie.convert(Ue),ie.convert(We),ue)}finally{let be=te!==null?Ce.get(te).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,R,k,U,O,ue,xe,ce=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(_e=_e[xe],Array.isArray(_e)&&(_e=_e[0])),_e)if(R>=0&&R<=y.width-U&&k>=0&&k<=y.height-O){de.bindFramebuffer(L.FRAMEBUFFER,_e);let be=y.textures[ce],Ue=be.format,We=be.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ce);let ye=Rc(be);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Xe),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(R,k,U,O,ie.convert(Ue),ie.convert(We),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let mt=te!==null?Ce.get(te).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,mt);let st=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Gh(L,st,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Xe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Xe),L.deleteSync(st),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,R=null,k=0){let U=Math.pow(2,-k),O=Math.floor(y.image.width*U),ue=Math.floor(y.image.height*U),xe=R!==null?R.x:0,ce=R!==null?R.y:0;De.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,xe,ce,O,ue),de.unbindTexture()},this.copyTextureToTexture=function(y,R,k=null,U=null,O=0,ue=0){let xe,ce,_e,be,Ue,We,ye,Xe,mt,st=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(k!==null)xe=k.max.x-k.min.x,ce=k.max.y-k.min.y,_e=k.isBox3?k.max.z-k.min.z:1,be=k.min.x,Ue=k.min.y,We=k.isBox3?k.min.z:0;else{let Ze=Math.pow(2,-O);xe=Math.floor(st.width*Ze),ce=Math.floor(st.height*Ze),y.isDataArrayTexture?_e=st.depth:y.isData3DTexture?_e=Math.floor(st.depth*Ze):_e=1,be=0,Ue=0,We=0}U!==null?(ye=U.x,Xe=U.y,mt=U.z):(ye=0,Xe=0,mt=0);let it=ie.convert(R.format),Dt=ie.convert(R.type),Me;R.isData3DTexture?(De.setTexture3D(R,0),Me=L.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(De.setTexture2DArray(R,0),Me=L.TEXTURE_2D_ARRAY):(De.setTexture2D(R,0),Me=L.TEXTURE_2D),de.activeTexture(L.TEXTURE0),de.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,R.flipY),de.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),de.pixelStorei(L.UNPACK_ALIGNMENT,R.unpackAlignment);let zt=de.getParameter(L.UNPACK_ROW_LENGTH),Ke=de.getParameter(L.UNPACK_IMAGE_HEIGHT),gi=de.getParameter(L.UNPACK_SKIP_PIXELS),Nt=de.getParameter(L.UNPACK_SKIP_ROWS),_r=de.getParameter(L.UNPACK_SKIP_IMAGES);de.pixelStorei(L.UNPACK_ROW_LENGTH,st.width),de.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st.height),de.pixelStorei(L.UNPACK_SKIP_PIXELS,be),de.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),de.pixelStorei(L.UNPACK_SKIP_IMAGES,We);let Yn=y.isDataArrayTexture||y.isData3DTexture,_i=R.isDataArrayTexture||R.isData3DTexture;if(y.isDepthTexture){let Ze=Ce.get(y),Ct=Ce.get(R),un=Ce.get(Ze.__renderTarget),ut=Ce.get(Ct.__renderTarget);de.bindFramebuffer(L.READ_FRAMEBUFFER,un.__webglFramebuffer),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Tt=0;Tt<_e;Tt++)Yn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,O,We+Tt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(R).__webglTexture,ue,mt+Tt)),L.blitFramebuffer(be,Ue,be+xe,Ue+ce,ye,Xe,ye+xe,Xe+ce,L.DEPTH_BUFFER_BIT,L.NEAREST);de.bindFramebuffer(L.READ_FRAMEBUFFER,null),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||Ce.has(y)){let Ze=Ce.get(y),Ct=Ce.get(R);de.bindFramebuffer(L.READ_FRAMEBUFFER,P),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,W);for(let un=0;un<_e;un++)Yn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ze.__webglTexture,O,We+un):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ze.__webglTexture,O),_i?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ct.__webglTexture,ue,mt+un):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ct.__webglTexture,ue),O!==0?L.blitFramebuffer(be,Ue,be+xe,Ue+ce,ye,Xe,ye+xe,Xe+ce,L.COLOR_BUFFER_BIT,L.NEAREST):_i?L.copyTexSubImage3D(Me,ue,ye,Xe,mt+un,be,Ue,xe,ce):L.copyTexSubImage2D(Me,ue,ye,Xe,be,Ue,xe,ce);de.bindFramebuffer(L.READ_FRAMEBUFFER,null),de.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _i?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Me,ue,ye,Xe,mt,xe,ce,_e,it,Dt,st.data):R.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,ue,ye,Xe,mt,xe,ce,_e,it,st.data):L.texSubImage3D(Me,ue,ye,Xe,mt,xe,ce,_e,it,Dt,st):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ue,ye,Xe,xe,ce,it,Dt,st.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ue,ye,Xe,st.width,st.height,it,st.data):L.texSubImage2D(L.TEXTURE_2D,ue,ye,Xe,xe,ce,it,Dt,st);de.pixelStorei(L.UNPACK_ROW_LENGTH,zt),de.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),de.pixelStorei(L.UNPACK_SKIP_PIXELS,gi),de.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),de.pixelStorei(L.UNPACK_SKIP_IMAGES,_r),ue===0&&R.generateMipmaps===!0&&R.mipmapsAutoUpdate===!0&&L.generateMipmap(Me),de.unbindTexture()},this.initRenderTarget=function(y){Ce.get(y).__webglFramebuffer===void 0&&De.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?De.setTextureCube(y,0):y.isData3DTexture?De.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?De.setTexture2DArray(y,0):De.setTexture2D(y,0),de.unbindTexture()},this.resetState=function(){J=0,H=0,te=null,de.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};var fo=class extends Si{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new si;e.deleteAttribute("uv");let t=new ai({side:Lt}),n=new ai,s=new qs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new at(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Os(e,n,6),o=new yt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new at(e,fs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new at(e,fs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new at(e,fs(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new at(e,fs(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new at(e,fs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new at(e,fs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function fs(i){return new oi({color:0,emissive:16777215,emissiveIntensity:i})}var qn=4096;function Ln(i){let e=Math.cos(i.yaw),t=Math.sin(i.yaw),n=Math.cos(i.pitch),s=Math.sin(i.pitch),r=new D(n*e,n*t,s),a=new D(...i.target),o=a.clone().addScaledVector(r,i.distance),c=i.twoPoint&&i.perspective,l=c?new D(-e,-t,0):r.clone().negate(),h=new D(-t,e,0);if(i.roll){let d=new D().crossVectors(h,r.clone().negate());h=h.multiplyScalar(Math.cos(i.roll)).addScaledVector(d,Math.sin(i.roll))}let u=c?new D(0,0,1):new D().crossVectors(h,l);return{eye:o,target:a,forward:l,right:h,up:u,back:r}}function yn(i){return{target:[...i.target],distance:i.distance,yaw:i.yaw,pitch:i.pitch,fov:i.fov,perspective:i.perspective,twoPoint:!!i.twoPoint,roll:i.roll||0}}var ps=Math.PI/2-1e-4;function L0(i,e,t={}){return i.onBeforeCompile=n=>{n.uniforms.uVis=e.uniforms.faceVis,n.uniforms.uBack=e.uniforms.backColor,n.uniforms.uBackMode={value:t.backMode||0},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float faceId;
attribute vec4 backColor;
uniform sampler2D uVis;
varying float vVis;
varying vec4 vBackColor;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ int fid = int(faceId + 0.5);
  vVis = texelFetch(uVis, ivec2(fid % ${qn}, fid / ${qn}), 0).r;
  vBackColor = backColor; }`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uBack;
uniform float uBackMode;
varying float vVis;
varying vec4 vBackColor;`).replace("#include <map_fragment>",`#include <map_fragment>
if (vVis < 0.5) discard;
if (!gl_FrontFacing && uBackMode < 1.5) {
  if (vBackColor.a > 0.5 && uBackMode < 0.5) { diffuseColor.rgb = pow(vBackColor.rgb, vec3(2.2)); } else { diffuseColor.rgb = uBack; }
}`)},i.customProgramCacheKey=()=>"akar-face-"+(t.backMode||0),i}function D0(i,e){return i.onBeforeCompile=t=>{t.uniforms.uEdgeVis=e.uniforms.edgeVis,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float edgeId;
uniform sampler2D uEdgeVis;
varying float vVis;`).replace("#include <begin_vertex>",`#include <begin_vertex>
{ int eid = int(edgeId + 0.5);
  vVis = texelFetch(uEdgeVis, ivec2(eid % ${qn}, eid / ${qn}), 0).r; }`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vVis;`).replace("void main() {",`void main() {
if (vVis < 0.5) discard;`)},i.customProgramCacheKey=()=>"akar-edge",i}var N0=`
#include <common>
#include <clipping_planes_pars_vertex>
attribute float faceId;
uniform sampler2D uVis;
varying float vVis;
varying float vId;
void main() {
  #include <begin_vertex>
  #include <project_vertex>
  #include <clipping_planes_vertex>
  int fid = int(faceId + 0.5);
  vVis = texelFetch(uVis, ivec2(fid % ${qn}, fid / ${qn}), 0).r;
  vId = faceId + 1.0;
}`,U0=`
#include <common>
#include <packing>
#include <clipping_planes_pars_fragment>
uniform float uMode;
varying float vVis;
varying float vId;
void main() {
  #include <clipping_planes_fragment>
  if (vVis < 0.5) discard;
  if (uMode < 0.5) {
    float id = floor(vId + 0.5);
    float r = mod(id, 256.0); id = floor(id / 256.0);
    float g = mod(id, 256.0); id = floor(id / 256.0);
    float b = mod(id, 256.0);
    gl_FragColor = vec4(r / 255.0, g / 255.0, b / 255.0, 1.0);
  } else {
    gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
  }
}`,F0=`
varying vec2 vNdc;
void main() { vNdc = position.xy; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,O0=`
uniform mat4 uInvProj;
uniform mat4 uInvView;
uniform mat4 uViewProj;
uniform vec3 uSky;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform vec3 uPlain;
uniform float uSkyOn;
uniform float uGroundOn;
uniform float uDaylight;
uniform vec3 uSun;
uniform float uLook;      // 0 plain, 1 grass and soil, 2 lawn
uniform sampler2D uGrass;
uniform sampler2D uSoil;
uniform float uLight;     // how lit a level face is
uniform float uHaze;      // where the ground fades into the horizon (mm)
varying vec2 vNdc;

float Hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float ValueNoise(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(Hash12(i), Hash12(i + vec2(1.0, 0.0)), u.x), mix(Hash12(i + vec2(0.0, 1.0)), Hash12(i + vec2(1.0, 1.0)), u.x), u.y); }
float Fbm(vec2 p, int octaves, float w) {
  float s = 0.0, a = 0.5, norm = 0.0;
  for (int i = 0; i < 6; i++) { if (i >= octaves) break; float fade = 1.0 - smoothstep(0.35, 0.75, w);
    s += a * fade * ValueNoise(p) + a * (1.0 - fade) * 0.5; norm += a; p = mat2(1.6, 1.2, -1.2, 1.6) * p; w *= 2.0; a *= 0.5; }
  return s / norm; }
vec3 toLinear(vec3 c) { return pow(c, vec3(2.2)); }

vec3 skyColour(vec3 dir) {
  float z = clamp(dir.z, 0.0, 1.0);
  if (uDaylight > 0.5) {
    vec3 zenith = vec3(0.16, 0.36, 0.72);
    vec3 horizon = vec3(0.72, 0.82, 0.92);
    vec3 c = mix(horizon, zenith, pow(z, 0.5));
    float sun = max(dot(dir, normalize(uSun)), 0.0);
    c += vec3(1.0, 0.9, 0.7) * (pow(sun, 64.0) * 0.6 + pow(sun, 6.0) * 0.12) * step(0.0, uSun.z);
    return c;
  }
  return mix(uHorizon, uSky, pow(z, 0.6));
}

void main() {
  vec4 a = uInvProj * vec4(vNdc, -1.0, 1.0); a /= a.w;
  vec4 b = uInvProj * vec4(vNdc, 1.0, 1.0); b /= b.w;
  vec3 aw = (uInvView * vec4(a.xyz, 1.0)).xyz;
  vec3 bw = (uInvView * vec4(b.xyz, 1.0)).xyz;
  vec3 ray = bw - aw;
  vec3 dir = normalize(ray);
  vec3 c = uPlain;
  float depth = 1.0;
  bool ground = uGroundOn > 0.5 && ray.z < 0.0 && aw.z > 0.0;
  float t = ground ? -aw.z / ray.z : -1.0;
  if (ground && t > 0.0) {
    vec3 onGround = aw + ray * t;
    vec3 albedo = uGround;
    if (uLook > 0.5) {
      vec2 gp = onGround.xy * 0.001;
      float gw = max(length(dFdx(gp)), length(dFdy(gp)));
      vec2 gq = mat2(0.77, 0.64, -0.64, 0.77) * gp * 0.41 + vec2(0.31, 0.67);
      float mixer = smoothstep(0.3, 0.7, Fbm(gp * 0.18, 4, gw * 0.18));
      vec3 grass = mix(texture2D(uGrass, gp).rgb, texture2D(uGrass, gq).rgb, mixer);
      vec3 soil = mix(texture2D(uSoil, gp * 0.9 + 0.5).rgb, texture2D(uSoil, gq * 1.1).rgb, mixer);
      vec2 gr = mat2(0.34, -0.94, 0.94, 0.34) * gp * 0.13 + vec2(0.17, 0.53);
      float far = smoothstep(0.012, 0.09, gw);
      grass = mix(grass, mix(texture2D(uGrass, gr).rgb, grass, 0.35), far);
      soil = mix(soil, mix(texture2D(uSoil, gr * 1.3 + 0.2).rgb, soil, 0.35), far);
      float lawn = uLook > 1.5 ? 1.0 : 0.0;
      float patches = Fbm(gp * 0.09 + 7.0, 5, gw * 0.09) * 0.7 + Fbm(gp * 0.8 + 3.0, 3, gw * 0.8) * 0.3;
      float bare = smoothstep(0.52, 0.62, patches) * (1.0 - lawn);
      albedo = toLinear(mix(grass, soil, bare));
      float macro = Fbm(gp * 0.03 + 4.0, 3, gw * 0.03);
      float tone = Fbm(gp * 0.11 + 9.0, 3, gw * 0.11);
      albedo *= mix(vec3(1.12, 1.06, 0.84), vec3(0.92, 1.0, 0.92), smoothstep(0.35, 0.65, macro));
      albedo *= (0.82 + 0.36 * tone) * (lawn > 0.5 ? 1.45 : 1.22);
      if (lawn < 0.5) {
        float l = dot(albedo, vec3(0.3, 0.59, 0.11));
        albedo = mix(vec3(l), albedo, 0.82) * vec3(1.06, 1.0, 0.84);
        albedo = pow(albedo, vec3(1.12)) * 1.12;
      }
      albedo = pow(albedo, vec3(1.0 / 2.2)); // (back to the screen's colours: lit and hazed below as the plain ground is)
    }
    c = albedo * uLight;
    // Far off it fades into the horizon.
    float dist = length(onGround - aw);
    vec3 horizon = uSkyOn > 0.5 ? skyColour(vec3(dir.xy, 0.0)) : uPlain;
    c = mix(c, horizon, smoothstep(uHaze * 0.25, uHaze, dist) * 0.85);
    vec4 clip = uViewProj * vec4(onGround, 1.0);
    depth = clamp(clip.z / clip.w * 0.5 + 0.5, 0.0, 1.0);
    depth = min(depth + 2.0 * fwidth(depth) + 8e-6, 1.0);
  } else if (uSkyOn > 0.5) {
    c = skyColour(dir.z >= 0.0 ? dir : vec3(dir.xy, 0.0));
  }
  gl_FragDepth = depth;
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`;function hr(i,e="#ffffff"){return new Ee(i||e)}var po=class i{constructor(e){this.canvas=e,this.renderer=new co({canvas:e,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.setClearColor(16777215,1),this.renderer.localClippingEnabled=!1,this.renderer.shadowMap.type=Ei,this.gl=this.renderer.getContext(),this.maxSize=Math.min(this.gl.getParameter(this.gl.MAX_RENDERBUFFER_SIZE),this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE),8192),this.scene=new Si,this.modelGroup=new on,this.scene.add(this.modelGroup),this.cameraP=new Ot(35,1,10,1e6),this.cameraO=new Ti(-1,1,1,-1,-1e6,1e6),this.cameraP.up.set(0,0,1),this.cameraO.up.set(0,0,1),this.uniforms={faceVis:{value:null},edgeVis:{value:null},backColor:{value:new Ee(11977942)}},this.camera=null,this.style=null,this.shadows=null,this.sectionOn=!0,this.fogOn=null,this.realistic=!1,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.moving=!1,this.slow=!1,this.needsFrame=!1,this.onframe=null,this.batches=[],this.textures=new Map,this.faceFlags=null,this.edgeFlags=null,this.bounds=[-1e3,-1e3,0,1e3,1e3,2e3],this.hemi=new Gs(16777215,12104358,1.4),this.hemi.position.set(0,0,1),this.scene.add(this.hemi),this.sun=new $s(16777215,1.6),this.scene.add(this.sun),this.scene.add(this.sun.target),this.ambient=new Ys(16777215,.25),this.scene.add(this.ambient),this.skyMaterial=new Jt({vertexShader:F0,fragmentShader:O0,uniforms:{uInvProj:{value:new Je},uInvView:{value:new Je},uSky:{value:new Ee(9416915)},uHorizon:{value:new Ee(14477039)},uGround:{value:new Ee(8293208)},uPlain:{value:new Ee(16777215)},uSkyOn:{value:0},uGroundOn:{value:0},uViewProj:{value:new Je},uDaylight:{value:0},uSun:{value:new D(0,0,1)},uLook:{value:0},uGrass:{value:null},uSoil:{value:null},uLight:{value:1},uHaze:{value:1e6}},depthTest:!0,depthFunc:Ji,depthWrite:!0}),this.sky=new at(new ri(2,2),this.skyMaterial),this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,this.scene.add(this.sky),this.groundShadow=new at(new ri(1,1),new Hs({opacity:.32})),this.groundShadow.receiveShadow=!0,this.groundShadow.visible=!1,this.scene.add(this.groundShadow),this.edgeMaterial=D0(new Rn({color:0}),this),this.edges=null,this.section=new on,this.scene.add(this.section),this.annotations=new on,this.scene.add(this.annotations),this.overlay=new on,this.scene.add(this.overlay),this.pickMaterial=new Jt({vertexShader:N0,fragmentShader:U0,uniforms:{uVis:this.uniforms.faceVis,uMode:{value:0}},side:Xt,clipping:!0}),this.pickTarget=new Gt(1,1,{depthBuffer:!0}),this.pickPixel=new Uint8Array(4),this.envMap=null,this.resize()}clear(){for(let e of this.batches){e.mesh.geometry.dispose();for(let t of e.materials||[])t.dispose()}this.batches=[],this.modelGroup.clear();for(let e of this.textures.values())e.dispose();this.textures.clear(),this.edges&&(this.edges.geometry.dispose(),this.scene.remove(this.edges),this.edges=null),this.clearSection(),this.annotations.clear(),this.overlay.clear()}addBatch(e,t,n){let s=new Int32Array(e,0,3),r=s[0],a=s[1],o=s[2]===1,c=12,l=new Float32Array(e,c,r*3);c+=r*12;let h=new Int8Array(e,c,r*3);c+=r*3+3&-4;let u=null;o&&(u=new Float32Array(e,c,r*2),c+=r*8);let d=new Uint8Array(e,c,r*4);c+=r*4;let f=new Float32Array(e,c,r);c+=r*4;let g=new Uint32Array(e,c,a),x=new It;x.setAttribute("position",new dt(l,3)),x.setAttribute("normal",new dt(h,3,!0)),u&&x.setAttribute("uv",new dt(u,2)),x.setAttribute("backColor",new dt(d,4,!0)),x.setAttribute("faceId",new dt(f,1)),x.setIndex(new dt(g,1)),x.computeBoundingSphere();let p=new at(x,new ni);p.matrixAutoUpdate=!1,p.castShadow=!0,p.receiveShadow=!0;let m={mesh:p,info:t,material:n,materials:[]};return this.batches.push(m),this.modelGroup.add(p),m}setEdges(e){let t=new Int32Array(e,0,1)[0],n=new Float32Array(e,4,t*6),s=new Float32Array(t*2);for(let a=0;a<t;a++)s[a*2]=a,s[a*2+1]=a;let r=new It;r.setAttribute("position",new dt(n,3)),r.setAttribute("edgeId",new dt(s,1)),r.computeBoundingSphere(),this.edges=new Gn(r,this.edgeMaterial),this.edges.matrixAutoUpdate=!1,this.edges.renderOrder=2,this.scene.add(this.edges)}setTexture(e,t,n){!t||!t.size||createImageBitmap(t,{imageOrientation:"flipY"}).then(s=>{let r=new Pt(s);r.flipY=!1,r.wrapS=ti,r.wrapT=ti,r.colorSpace=Ht,r.anisotropy=Math.min(4,this.renderer.capabilities.getMaxAnisotropy()),r.generateMipmaps=!0,r.minFilter=ln,r.needsUpdate=!0,this.textures.set(e,r),this.scheduleStyle()},()=>{})}groundPictures(e){let t=e===2?"lawn":"grass",n=this.skyMaterial.uniforms;this.ground=this.ground||{};let s=o=>this.ground[o]!==void 0?this.ground[o]:(this.ground[o]=null,fetch("ground/"+o+".jpg").then(c=>c.ok?c.blob():Promise.reject()).then(c=>createImageBitmap(c)).then(c=>{let l=new Pt(c);l.wrapS=l.wrapT=ti,l.colorSpace=vn,l.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),l.minFilter=ln,l.generateMipmaps=!0,l.needsUpdate=!0,this.ground[o]=l,this.applyStyle()},()=>{}),null),r=s(t),a=s("soil");return r&&a?(n.uGrass.value=r,n.uSoil.value=a,!0):!1}setBounds(e){this.bounds=e;let t=this.center(),n=this.radius();this.groundShadow.position.set(t.x,t.y,0),this.groundShadow.scale.set(n*12,n*12,1)}center(){let e=this.bounds;return new D((e[0]+e[3])/2,(e[1]+e[4])/2,(e[2]+e[5])/2)}radius(){let e=this.bounds;return Math.max(1e3,.5*Math.hypot(e[3]-e[0],e[4]-e[1],e[5]-e[2]))}static visTexture(e){let t=Math.max(1,e.length),n=Math.ceil(t/qn),s=new Uint8Array(qn*n);for(let a=0;a<e.length;a++)s[a]=e[a]?255:0;let r=new bi(s,qn,n,cs,Bt);return r.minFilter=ft,r.magFilter=ft,r.unpackAlignment=1,r.generateMipmaps=!1,r.needsUpdate=!0,r}setVisibility(e,t){e&&(this.faceFlags=e,this.uniforms.faceVis.value&&this.uniforms.faceVis.value.dispose(),this.uniforms.faceVis.value=i.visTexture(e)),t&&(this.edgeFlags=t,this.uniforms.edgeVis.value&&this.uniforms.edgeVis.value.dispose(),this.uniforms.edgeVis.value=i.visTexture(t)),this.requestFrame()}setSection(e){if(this.clearSection(),!e||e.byteLength<8)return;let t=new Int32Array(e,0,2),n=t[0],s=t[1],r=new DataView(e),a=8;if(n>0){let o=new Float32Array(n*9),c=new Float32Array(n*9);for(let u=0;u<n;u++){for(let f=0;f<9;f++)o[u*9+f]=r.getFloat32(a,!0),a+=4;let d=new Ee(r.getUint8(a)/255,r.getUint8(a+1)/255,r.getUint8(a+2)/255).convertSRGBToLinear();a+=4;for(let f=0;f<3;f++)c[u*9+f*3]=d.r,c[u*9+f*3+1]=d.g,c[u*9+f*3+2]=d.b}let l=new It;l.setAttribute("position",new dt(o,3)),l.setAttribute("color",new dt(c,3));let h=new at(l,new ni({vertexColors:!0,side:Xt,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));h.renderOrder=1,this.section.add(h)}if(s>0){let o=new Float32Array(s*6);for(let h=0;h<s*6;h++)o[h]=r.getFloat32(a,!0),a+=4;let c=new It;c.setAttribute("position",new dt(o,3));let l=new Gn(c,new Rn({color:0}));l.renderOrder=3,this.section.add(l)}this.requestFrame()}clearSection(){for(let e of this.section.children)e.geometry.dispose(),e.material.dispose();this.section.clear()}setSectionPlane(e){this.sectionPlane=e?new Yt(new D(...e.normal).negate(),new D(...e.normal).dot(new D(...e.point))):null,this.requestFrame()}setStyle(e,t){this.style=e,t&&(this.shadows=t),this.applyStyle()}setRealistic(e){this.realistic=e,this.applyStyle()}environment(){if(!this.envMap){let e=new us(this.renderer);this.envMap=e.fromScene(new fo,.04).texture,e.dispose()}return this.envMap}scheduleStyle(){clearTimeout(this._styleTimer),this._styleTimer=setTimeout(()=>{this._materialsKey=null,this.applyStyle()},60)}setSun(e){this.shadows&&(this.shadows={...this.shadows,sun:e}),this.applyStyle()}applyStyle(){let e=this.style;if(!e)return;let t=e.faces,n=this.realistic,s=e.xray&&!n,r=e.background||{},a=hr(r.color,"#ffffff"),o=this.shadows||{on:!1},c=!!o.on&&t!=="Wireframe"&&t!=="HiddenLine"||n;this.renderer.toneMapping=n?Js:jt,this.renderer.toneMappingExposure=n?.9:1,this.renderer.shadowMap.enabled=c,this.renderer.setClearColor(a,1),this.uniforms.backColor.value.set(e.back||"#b6c4d6");let l=this.skyMaterial.uniforms;l.uPlain.value.copy(a),l.uSkyOn.value=r.sky||n?1:0,l.uGroundOn.value=r.ground||n?1:0,l.uSky.value.set(r.skyColor||"#8fb0d3"),l.uHorizon.value.copy(new Ee(r.skyColor||"#8fb0d3").lerp(new Ee(16777215),.72)),l.uGround.value.set(r.groundColor||"#a9bfa0"),l.uDaylight.value=r.skyLook==="Daylight"||n?1:0;let h=r.groundLook==="Lawn"?2:r.groundLook==="GrassAndSoil"||n?1:0;l.uLook.value=h&&this.groundPictures(h)?h:0,n&&!r.sky&&(l.uSky.value.set("#5e8ec6"),l.uHorizon.value.set("#e9e4d6"));let u=o.sun?new D(...o.sun):new D(-.4,-.6,.7);this.sunDirection=u.clone().normalize(),l.uSun.value.copy(this.sunDirection),l.uLight.value=c||o.sunShading||n?.62+.45*Math.max(0,this.sunDirection.z)*(n?1:(o.light??.8)+.2):1;let d=o.light??.8,f=o.dark??.45;if(n?(this.hemi.intensity=.55,this.hemi.color.set(14674687),this.hemi.groundColor.set(9142640),this.sun.intensity=u.z>0?2.5:.2,this.ambient.intensity=.05):c||o.sunShading?(this.hemi.intensity=.25+1.6*f,this.hemi.color.set(16777215),this.hemi.groundColor.set(14210252),this.sun.intensity=u.z>0?.4+2.2*d:0,this.ambient.intensity=.25):(this.hemi.intensity=1.5,this.hemi.color.set(16777215),this.hemi.groundColor.set(13223098),this.sun.intensity=1.25,this.ambient.intensity=.3),this.sun.castShadow=c,this.headlight=!(c||o.sunShading||n),c){let p=this.radius(),m=this.center();this.sun.position.copy(m).addScaledVector(this.sunDirection,p*3),this.sun.target.position.copy(m);let M=this.sun.shadow.camera;M.left=-p,M.right=p,M.top=p,M.bottom=-p,M.near=p*.5,M.far=p*6,M.updateProjectionMatrix();let T=this.maxSize>=8192&&!this.slow?4096:2048;this.sun.shadow.mapSize.x!==T&&(this.sun.shadow.mapSize.set(T,T),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=p*4e-4,this.sun.shadow.radius=3}this.groundShadow.visible=c&&o.onGround!==!1,this.scene.environment=n?this.environment():null;let g=[t,s,n,e.front,e.back,a.getHexString(),this.textures.size,this.batches.length].join("|");g!==this._materialsKey&&(this._materialsKey=g,this.makeMaterials(e,t,s,n,a));let x=(e.edges!==!1||t==="Wireframe"||t==="HiddenLine")&&this.edgesWanted!==!1;this.edges&&(this.edges.visible=x&&!(n&&e.edges===!1),this.edgeMaterial.color.set(n?"#3a3a3a":e.edgeColor||"#000000"),this.edgeMaterial.transparent=n,this.edgeMaterial.opacity=n?.35:1),this.requestFrame()}makeMaterials(e,t,n,s,r){for(let a of this.batches){for(let f of a.materials)f.dispose();a.materials=[];let o=a.material,c=a.mesh;if(t==="Wireframe"){c.visible=!1;continue}c.visible=!0;let l,h=o?o.opacity:1,u=hr(o?o.color:e.front,e.front||"#ffffff"),d=o&&this.textures.get(a.info.material);if(t==="HiddenLine")l=new ni({color:r});else if(t==="Monochrome")l=new oi({color:hr(e.front,"#ffffff")});else if(s)l=new ai({color:d?16777215:u,map:d||null,roughness:o&&o.roughness!=null?o.roughness:h<1?.05:.8,metalness:o&&o.metalness!=null?o.metalness:0,envMapIntensity:h<1?1.4:.6,emissive:o&&o.glows?u:0,emissiveIntensity:o&&o.glows?1.5:0});else{let f=t==="ShadedWithTextures"&&d;l=new oi({color:f?16777215:u,map:f?d:null})}l.side=Xt,l.polygonOffset=!0,l.polygonOffsetFactor=1,l.polygonOffsetUnits=1,d&&a.info.uv&&o.tileWidth&&l.map&&l.map.repeat.set(1,1),n?(l.transparent=!0,l.opacity=.5*h,l.depthWrite=!1):h<1&&t!=="HiddenLine"&&t!=="Monochrome"&&(l.transparent=!0,l.opacity=h,l.depthWrite=h>.9),L0(l,this,{backMode:t==="HiddenLine"?2:t==="Monochrome"?1:0}),c.material=l,c.renderOrder=l.transparent?1:0,a.materials.push(l)}}setCamera(e){this.camera=yn(e),this.requestFrame()}threeCamera(e,t,n=!0){let s=Ln(e),r=this.bounds,a=1/0,o=-1/0;for(let d=0;d<8;d++){let g=new D(d&1?r[3]:r[0],d&2?r[4]:r[1],d&4?r[5]:r[2]).sub(s.eye).dot(s.forward);a=Math.min(a,g),o=Math.max(o,g)}let c=this.radius();o=Math.max(o,e.distance)+c*.5+1e3,(this.groundShadow.visible||this.skyMaterial.uniforms.uGroundOn.value)&&(o=Math.max(o,e.distance+c*4));let l,h=Math.tan(e.fov*Math.PI/360),u=n&&t<1?1/t:1;if(e.perspective){if(l=this.cameraP,l.fov=2*Math.atan(h*u)*180/Math.PI,l.aspect=t,l.near=Math.max(10,a*.5,o/4e4),a<l.near*2&&(l.near=Math.max(10,Math.min(e.distance*.02,o/2e4))),l.far=o,l.position.copy(s.eye),l.up.copy(s.up),l.lookAt(s.eye.clone().add(s.forward)),l.updateProjectionMatrix(),e.twoPoint){let d=Math.tan(e.pitch)/(h*u);l.projectionMatrix.elements[9]=-d,l.projectionMatrixInverse.copy(l.projectionMatrix).invert()}}else{l=this.cameraO;let d=e.distance*h*u;l.left=-d*t,l.right=d*t,l.top=d,l.bottom=-d,l.near=-(c*4+e.distance),l.far=o+c,l.position.copy(s.eye),l.up.copy(s.up),l.lookAt(s.eye.clone().add(s.forward)),l.updateProjectionMatrix()}return l.updateMatrixWorld(!0),l}resize(){let e=Math.max(1,this.canvas.clientWidth),t=Math.max(1,this.canvas.clientHeight);this.width=e,this.height=t,this.renderer.setPixelRatio(this.moving&&this.slow?1:this.pixelRatio),this.renderer.setSize(e,t,!1),this.requestFrame()}requestFrame(){this.needsFrame||(this.needsFrame=!0,requestAnimationFrame(()=>{this.needsFrame=!1,this.draw()}))}setMoving(e){this.moving!==e&&(this.moving=e,this.slow&&(this.renderer.setPixelRatio(e?1:this.pixelRatio),this.renderer.setSize(this.width,this.height,!1)),this.requestFrame())}prepareFrame(e,t){let n=this.style||{};if(this.skyFrame(e),this.skyMaterial.uniforms.uHaze.value=Math.max(2e5,this.radius()*30),this.headlight&&this.camera){let a=Ln(this.camera),o=a.back.clone().addScaledVector(a.right,-.6).addScaledVector(a.up,.8).normalize();this.sun.position.copy(this.center()).addScaledVector(o,this.radius()*3),this.sun.target.position.copy(this.center())}else this.sunDirection&&(this.sun.position.copy(this.center()).addScaledVector(this.sunDirection,this.radius()*3),this.sun.target.position.copy(this.center()));this.sun.target.updateMatrixWorld();let s=n.fog;if((this.fogOn!=null?this.fogOn:s&&s.on)&&s&&this.camera){let a=Ln(this.camera),o=this.bounds,c=1/0,l=-1/0;for(let f=0;f<8;f++){let x=new D(f&1?o[3]:o[0],f&2?o[4]:o[1],f&4?o[5]:o[2]).sub(a.eye).dot(a.forward);c=Math.min(c,x),l=Math.max(l,x)}c=Math.max(0,c),l=Math.max(l,c+1);let h=s.useBackground?hr((n.background||{}).color,"#ffffff"):hr(s.color,"#ffffff"),u=c+s.start*(l-c),d=Math.max(u+1,c+s.end*(l-c));this.scene.fog?(this.scene.fog.color.copy(h),this.scene.fog.near=u,this.scene.fog.far=d):this.scene.fog=new Ds(h,u,d)}else this.scene.fog=null;this.renderer.clippingPlanes=this.sectionPlane&&this.sectionOn&&n.sectionCuts!==!1?[this.sectionPlane]:[],this.section.visible=this.renderer.clippingPlanes.length>0}skyFrame(e){let t=this.skyMaterial.uniforms;t.uInvProj.value.copy(e.projectionMatrixInverse),t.uInvView.value.copy(e.matrixWorld),t.uViewProj.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse)}draw(){if(!this.camera){this.renderer.clear();return}let e=performance.now(),t=this.width/this.height,n=this.threeCamera(this.camera,t);this.prepareFrame(n,t),this.renderSection(n);let s=performance.now()-e;this.moving&&s>40&&(this.slow=!0),this.lastCamera=n,this.onframe&&this.onframe(n)}renderSection(e,t=null){let n=this.renderer.clippingPlanes;if(this.renderer.setRenderTarget(t),n.length&&this.section.children.length){this.section.visible=!1,this.renderer.render(this.scene,e);let s=this.renderer.autoClear;this.renderer.autoClear=!1,this.renderer.clippingPlanes=[];let r=this.scene.children.map(o=>o.visible);for(let o of this.scene.children)o.visible=o===this.section;this.section.visible=!0;let a=this.scene.background;this.renderer.render(this.scene,e),this.scene.children.forEach((o,c)=>o.visible=r[c]),this.scene.background=a,this.renderer.autoClear=s,this.renderer.clippingPlanes=n}else this.renderer.render(this.scene,e);this.renderer.setRenderTarget(null)}pick(e,t){if(!this.camera||!this.batches.length)return null;let n=this.width/this.height,s=this.threeCamera(this.camera,n);this.prepareFrame(s,n);let r=this.width,a=this.height;s.setViewOffset(r,a,Math.floor(e),Math.floor(t),1,1);let o=this.scene.children.map(M=>M.visible);for(let M of this.scene.children)M.visible=M===this.modelGroup;let c=this.batches.map(M=>M.mesh.visible);for(let M of this.batches)M.mesh.visible=!0;let l=this.scene.fog;this.scene.fog=null,this.scene.overrideMaterial=this.pickMaterial;let h=new Ee;this.renderer.getClearColor(h);let u=this.renderer.getClearAlpha(),d=this.renderer.toneMapping;this.renderer.toneMapping=jt,this.renderer.setClearColor(0,0),this.renderer.setRenderTarget(this.pickTarget);let f=this.pickPixel;this.pickMaterial.uniforms.uMode.value=0,this.renderer.render(this.scene,s),this.renderer.readRenderTargetPixels(this.pickTarget,0,0,1,1,f);let g=f[0]+f[1]*256+f[2]*65536-1,x=1;if(g>=0&&(this.pickMaterial.uniforms.uMode.value=1,this.renderer.render(this.scene,s),this.renderer.readRenderTargetPixels(this.pickTarget,0,0,1,1,f),x=B0(f)),this.renderer.setRenderTarget(null),this.renderer.setClearColor(h,u),this.renderer.toneMapping=d,this.scene.overrideMaterial=null,this.scene.fog=l,this.scene.children.forEach((M,T)=>M.visible=o[T]),this.batches.forEach((M,T)=>M.mesh.visible=c[T]),s.clearViewOffset(),g<0)return null;let m=new D(e/r*2-1,-(t/a)*2+1,x*2-1).unproject(s);return{face:g,point:m}}toScreen(e,t=this.lastCamera){if(!t)return null;let n=new D(e.x,e.y,e.z).project(t);return n.z>1?null:{x:(n.x+1)/2*this.width,y:(1-n.y)/2*this.height,z:n.z}}ray(e,t){let n=this.lastCamera||this.threeCamera(this.camera,this.width/this.height),s=new Zs;return s.setFromCamera(new He(e/this.width*2-1,-(t/this.height)*2+1),n),s.ray}picture(e,t,n,{adjustPortrait:s=!1}={}){let r=Math.min(this.maxSize,4096),a=document.createElement("canvas");a.width=t,a.height=n;let o=a.getContext("2d"),c=t/n,l=this.camera,h=this.renderer.getPixelRatio();this.camera=e;let u=this.threeCamera(e,c,s);this.prepareFrame(u,c);let d=Math.min(r,t),f=Math.min(r,n);this.renderer.setPixelRatio(1),this.renderer.setSize(d,f,!1);try{for(let g=0;g<n;g+=f)for(let x=0;x<t;x+=d){let p=Math.min(d,t-x),m=Math.min(f,n-g);u.setViewOffset(t,n,x,g,d,f),u.updateMatrixWorld(!0),this.skyFrame(u),this.renderSection(u,null),o.drawImage(this.canvas,0,0,p,m,x,g,p,m)}}finally{u.clearViewOffset(),this.camera=l,this.renderer.setPixelRatio(h),this.renderer.setSize(this.width,this.height,!1),this.draw()}return a}};function B0(i){let e=.99609375;return i[0]/255*e+i[1]/255*e/256+i[2]/255*e/65536+i[3]/255/16777216}var mo=class{constructor(e,t){this.view=e,this.el=t,this.pointers=new Map,this.mode="orbit",this.enabled=!0,this.onTap=null,this.onMove=null,this.onMoveEnd=null,this.onPointerDown=null,this.lastTap=0,this.interceptor=null,this.intercepting=!1,t.addEventListener("pointerdown",n=>this.down(n)),t.addEventListener("pointermove",n=>this.move(n)),t.addEventListener("pointerup",n=>this.up(n)),t.addEventListener("pointercancel",n=>this.up(n,!0)),t.addEventListener("wheel",n=>this.wheel(n),{passive:!1}),t.addEventListener("contextmenu",n=>n.preventDefault())}get camera(){return this.view.camera}down(e){if(!(!this.enabled||!this.camera)){if(this.el.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.offsetX,y:e.offsetY,x0:e.offsetX,y0:e.offsetY,t0:performance.now(),button:e.button}),this.interceptor&&this.pointers.size===1&&e.button===0){this.intercepting=!0,this.interceptor.down(e.offsetX,e.offsetY);return}this.intercepting&&(this.intercepting=!1,this.interceptor.up(e.offsetX,e.offsetY,!0)),this.pointers.size===1?(this.travel=0,this.pivot=null):this.travel=99,this.gesture=null}}move(e){let t=this.pointers.get(e.pointerId);if(!t||!this.camera)return;if(this.intercepting){t.x=e.offsetX,t.y=e.offsetY,this.interceptor.move(e.offsetX,e.offsetY);return}let n=[...this.pointers.values()].map(o=>({x:o.x,y:o.y})),s=e.offsetX-t.x,r=e.offsetY-t.y;if(t.x=e.offsetX,t.y=e.offsetY,this.travel+=Math.abs(s)+Math.abs(r),this.travel<6&&this.pointers.size===1)return;this.view.setMoving(!0);let a=this.camera;if(this.pointers.size===1)t.button===1||t.button===2||e.shiftKey?this.pan(s,r):this.mode==="look"?this.look(s,r):this.orbit(s,r);else if(this.pointers.size===2){let o=[...this.pointers.values()].map(d=>({x:d.x,y:d.y})),c={x:(n[0].x+n[1].x)/2,y:(n[0].y+n[1].y)/2},l={x:(o[0].x+o[1].x)/2,y:(o[0].y+o[1].y)/2},h=Math.hypot(n[0].x-n[1].x,n[0].y-n[1].y),u=Math.hypot(o[0].x-o[1].x,o[0].y-o[1].y);this.mode==="look"?this.walk(l.x-c.x,l.y-c.y,u/Math.max(1,h)):(this.pan(l.x-c.x,l.y-c.y),h>1&&u>1&&this.zoomAt(l.x,l.y,h/u))}this.view.requestFrame(),this.onMove&&this.onMove()}up(e,t=!1){let n=this.pointers.get(e.pointerId);if(n){if(this.pointers.delete(e.pointerId),this.intercepting){this.intercepting=!1,this.interceptor.up(e.offsetX,e.offsetY,t);return}if(this.pointers.size===0&&(this.view.setMoving(!1),this.travel>=6&&this.onMoveEnd&&this.onMoveEnd(),!t&&this.travel<6&&performance.now()-n.t0<500)){let s=performance.now();if(s-this.lastTap<320&&Math.hypot(e.offsetX-this.lastTapX,e.offsetY-this.lastTapY)<30){this.lastTap=0,this.fit();return}this.lastTap=s,this.lastTapX=e.offsetX,this.lastTapY=e.offsetY;let r=e.offsetX,a=e.offsetY;clearTimeout(this.tapTimer),this.tapTimer=setTimeout(()=>{this.lastTap===s&&this.onTap&&this.onTap(r,a)},260)}}}wheel(e){if(!this.camera)return;e.preventDefault();let t=Math.exp(e.deltaY*.0015);this.zoomAt(e.offsetX,e.offsetY,t),this.view.requestFrame(),this.onMove&&this.onMove(),clearTimeout(this.wheelEnd),this.wheelEnd=setTimeout(()=>this.onMoveEnd&&this.onMoveEnd(),400)}orbit(e,t){let n=this.camera,s=.0075;if(!this.pivot){let p=this.pointers.values().next().value,m=p?this.view.pick(p.x0,p.y0):null;this.pivot=m?m.point.clone():new D(...n.target)}let a=Ln(n).eye,o=n.yaw,c=n.pitch;n.yaw-=e*s,n.pitch=Math.max(-ps,Math.min(ps,n.pitch+t*s));let l=new Zt().setFromAxisAngle(new D(0,0,1),n.yaw-o),h=new D(-Math.sin(o),Math.cos(o),0),u=new Zt().setFromAxisAngle(h,-(n.pitch-c)),d=l.multiply(u),f=a.sub(this.pivot).applyQuaternion(d).add(this.pivot),g=new D(Math.cos(n.pitch)*Math.cos(n.yaw),Math.cos(n.pitch)*Math.sin(n.yaw),Math.sin(n.pitch)),x=f.clone().addScaledVector(g,-n.distance);n.target=[x.x,x.y,x.z]}look(e,t){let n=this.camera,r=Ln(n).eye;n.yaw+=e*.004,n.pitch=Math.max(-ps,Math.min(ps,n.pitch-t*.004));let a=new D(Math.cos(n.pitch)*Math.cos(n.yaw),Math.cos(n.pitch)*Math.sin(n.yaw),Math.sin(n.pitch)),o=r.clone().addScaledVector(a,-n.distance);n.target=[o.x,o.y,o.z]}walk(e,t,n){let s=this.camera,r=Ln(s),a=Math.max(50,this.view.radius()/300),c=new D(r.forward.x,r.forward.y,0).normalize().multiplyScalar(t*a/10+(n-1)*a*20).addScaledVector(r.right,-e*a/10);s.target=[s.target[0]+c.x,s.target[1]+c.y,s.target[2]]}pan(e,t){let n=this.camera,s=Ln(n),r=this.view.height,a=this.view.width/r,o=a<1?1/a:1,c=n.distance;this.pivot&&n.perspective&&(c=Math.max(10,this.pivot.clone().sub(s.eye).dot(s.forward)));let l=2*c*Math.tan(n.fov*Math.PI/360)*o/r,h=s.right.clone().multiplyScalar(-e*l).addScaledVector(s.up,t*l);n.target=[n.target[0]+h.x,n.target[1]+h.y,n.target[2]+h.z]}zoomAt(e,t,n){let s=this.camera,r=Ln(s);if(!this.zoomPoint||performance.now()-this.zoomPointAt>400){let u=this.view.pick(e,t);this.zoomPoint=u?u.point:null}this.zoomPointAt=performance.now();let a=this.zoomPoint||new D(...s.target);if(!s.perspective){let u=new D(...s.target),d=a.clone().sub(u),f=d.clone().sub(r.forward.clone().multiplyScalar(d.dot(r.forward))),g=u.clone().add(f.multiplyScalar(1-n));s.distance=Math.max(10,s.distance*n),s.target=[g.x,g.y,g.z];return}let o=a.clone().add(r.eye.clone().sub(a).multiplyScalar(n)),c=r.back.clone().negate(),l=a.clone().sub(o).dot(c);l>50||(l=Math.max(50,s.distance*n));let h=o.clone().addScaledVector(c,l);s.target=[h.x,h.y,h.z],s.distance=l}fit(e=null){let t=this.camera;if(!t)return;let n=e||this.view.bounds,s=new D((n[0]+n[3])/2,(n[1]+n[4])/2,(n[2]+n[5])/2),r=Math.max(100,.5*Math.hypot(n[3]-n[0],n[4]-n[1],n[5]-n[2])),a=this.view.width/this.view.height,o=a<1?1/a:1,c=Math.tan(t.fov*Math.PI/360)*o,l=c*a,h;t.perspective?h=r/Math.sin(Math.atan(Math.min(c,l))):h=Math.max(r,r/a)/c,t.twoPoint=!1,t.target=[s.x,s.y,s.z],t.distance=Math.max(100,h*1.04),this.view.requestFrame(),this.onMove&&this.onMove(),this.onMoveEnd&&this.onMoveEnd()}standard(e){let t=this.camera,s={iso:[-Math.PI/4-Math.PI/2,Math.atan(1/Math.SQRT2)],top:[-Math.PI/2,ps],bottom:[-Math.PI/2,-ps],front:[-Math.PI/2,0],back:[Math.PI/2,0],left:[Math.PI,0],right:[0,0]}[e];s&&(t.yaw=s[0],t.pitch=s[1],t.roll=0,t.twoPoint=!1,this.fit())}};var ac={};ad(ac,{file:()=>rc,keep:()=>sc,list:()=>ic,remove:()=>go,update:()=>ur,used:()=>z0});var k0="akar-viewer",ec=null;function tc(){return ec||(ec=new Promise((i,e)=>{let t=indexedDB.open(k0,1);t.onupgradeneeded=()=>{let n=t.result;n.createObjectStore("models",{keyPath:"id"}),n.createObjectStore("files")},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})),ec}function nc(i,e,t){return tc().then(n=>new Promise((s,r)=>{let a=n.transaction(i,e),o;a.oncomplete=()=>s(o),a.onerror=()=>r(a.error),a.onabort=()=>r(a.error),o=t(a)}))}function Cu(i){return new Promise((e,t)=>{i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error)})}async function ic(){try{let i=await tc();return(await Cu(i.transaction("models").objectStore("models").getAll())).sort((t,n)=>n.opened-t.opened)}catch{return[]}}async function sc(i,e){let t=e.id||i.name+"|"+i.size+"|"+(i.lastModified||0),n={name:e.name||i.name,size:i.size,added:Date.now(),opened:Date.now(),scenes:0,sheets:0,thumb:null,...e,id:t};try{await nc(["models","files"],"readwrite",s=>{s.objectStore("models").put(n),s.objectStore("files").put(i,t)}),navigator.storage&&navigator.storage.persist&&navigator.storage.persist().catch(()=>{})}catch{}return t}async function ur(i,e){try{await nc(["models"],"readwrite",t=>{let n=t.objectStore("models"),s=n.get(i);s.onsuccess=()=>{s.result&&n.put({...s.result,...e})}})}catch{}}async function rc(i){let e=await tc();return Cu(e.transaction("files").objectStore("files").get(i))}async function go(i){await nc(["models","files"],"readwrite",e=>{e.objectStore("models").delete(i),e.objectStore("files").delete(i)})}async function z0(){return navigator.storage&&navigator.storage.estimate?await navigator.storage.estimate():null}var H0={back:"M15 5l-7 7 7 7",more:"M12 5.5h.01M12 12h.01M12 18.5h.01",layers:"M12 4l8.5 4.5L12 13 3.5 8.5zM3.5 12.5 12 17l8.5-4.5M3.5 16.5 12 21l8.5-4.5",check:"M5 12.5l4.5 4.5L19 7.5",share:"M12 3v12M7.5 7.5 12 3l4.5 4.5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6",scenes:"M 6.5 8.5 h 14 v 10 h -14 Z M 3.5 5.5 h 14 v 3 M 3.5 5.5 v 10 h 3 M 11.5 11.2 v 4.6 l 4 -2.3 Z",styles:"M 3.5 5 h 17 v 14 h -17 Z M 12 8.5 l 4 2.2 v 4.4 l -4 2.2 l -4 -2.2 v -4.4 Z M 8 10.7 l 4 2.2 l 4 -2.2 M 12 12.9 v 4.4",tape:"M 9.5 6.5 a 5.5 5.5 0 1 0 0 11 h 11 v -3.4 h -6",sheets:"M 5 3.5 h 10 l 4 4 V 20.5 H 5 Z M 15 3.5 v 4 h 4 M 8 11 h 8 M 8 14 h 8 M 8 17 h 5",search:"M 4 10.5 a 6.5 6.5 0 1 0 13 0 a 6.5 6.5 0 1 0 -13 0 M 15.2 15.2 L 20.5 20.5",eye:"M 2.5 12 S 6 5.5 12 5.5 S 21.5 12 21.5 12 S 18 18.5 12 18.5 S 2.5 12 2.5 12 Z M 9 12 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0",eyeoff:"M 2.5 12 S 6 5.5 12 5.5 S 21.5 12 21.5 12 S 18 18.5 12 18.5 S 2.5 12 2.5 12 Z M 9 12 a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0 M 4 4 L 20 20",close:"M 6 6 l 12 12 M 18 6 L 6 18",undo:"M 9 5.5 L 4.5 10 L 9 14.5 M 5 10 h 9 a 5 5 0 0 1 0 10 h -2.5",redo:"M 15 5.5 L 19.5 10 L 15 14.5 M 19 10 h -9 a 5 5 0 0 0 0 10 h 2.5",play:"M 8 5.5 v 13 l 10.5 -6.5 Z",stop:"M 7 7 h 10 v 10 h -10 Z",fit:"M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5",views:"M4 18.5h16L16 6H8zM9.5 6.5 7 18.5M14.5 6.5 17 18.5M5.5 13h13",walk:"M12 4.5a1.8 1.8 0 1 0 0 .1M10 21l1.5-6-2-2 1-5h3l1.5 4 2.5 1.5M11.5 15l2.5 2 1 4M10.5 8 8 11",phone:"M8 3h8a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8 3zM11 18h2",folder:"M3.5 7a1.5 1.5 0 0 1 1.5-1.5h4.5l2 2.5H19a1.5 1.5 0 0 1 1.5 1.5v8.5A1.5 1.5 0 0 1 19 19.5H5A1.5 1.5 0 0 1 3.5 18z",image:"M4 5h16v14H4zM4 16l5-5 4 4 2.5-2.5L20 17M15.5 9a1 1 0 1 0 0 .1",sun:"M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8",info:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 1 0 0-17M12 11v5.5M12 7.8h.01",trash:"M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",dl:"M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19.5h14",plus:"M12 5v14M5 12h14",section:"M4 20 20 4M7 4h13v13",mail:"M4 6h16v12H4zM4 7l8 6 8-6",checkc:"M12 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18M8 12.5l2.8 2.8L16.5 9.5",chev:"M9 6l6 6-6 6",file:"M7 3h7l5 5v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM14 3v5h5"};function Ye(i,e=22,t=""){return`<svg class="i" width="${e}" height="${e}" viewBox="0 0 24 24" aria-hidden="true" ${t}><path d="${H0[i]||""}"></path></svg>`}var Ru='<img src="brand/akar-wordmark.png" alt="Akar" class="wordmark">';function Ve(i){return String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}var Mn="0.19.2";var ms=typeof window<"u"&&window.AkarAndroid,Qt=!!ms;function V0(i){let e=new Uint8Array(i),t="",n=32768;for(let s=0;s<e.length;s+=n)t+=String.fromCharCode.apply(null,e.subarray(s,s+n));return btoa(t)}async function Pu(i,e){for(let t of e){let n=V0(await t.blob.arrayBuffer());ms.put(t.name,t.blob.type||"application/octet-stream",n)}return ms[i]()==="ok"}function Iu(){if(ms)return!0;try{return!!(navigator.canShare&&navigator.canShare({files:[new File(["x"],"x.png",{type:"image/png"})]}))}catch{return!1}}async function _o(i,e="Akar"){if(ms)return Pu("share",i);let t=i.map(n=>new File([n.blob],n.name,{type:n.blob.type}));if(navigator.canShare&&navigator.canShare({files:t}))try{return await navigator.share({files:t,title:e}),!0}catch(n){if(n&&n.name==="AbortError")return!0}return await oc(i),!0}async function oc(i){if(ms)return Pu("save",i);for(let e of i){let t=URL.createObjectURL(e.blob),n=document.createElement("a");n.href=t,n.download=e.name,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),6e4),await new Promise(s=>setTimeout(s,250))}return!0}var W0="https://akar.tesseractstudio.co/phone.json",Lu="akar.updates.auto",Du="akar.updates.last",Nu="akar.updates.snoozed",X0=24*3600*1e3;function lc(i){try{return localStorage.getItem(i)}catch{return null}}function cc(i,e){try{localStorage.setItem(i,e)}catch{}}function xo(){return lc(Lu)!=="off"}function Uu(i){cc(Lu,i?"on":"off")}function q0(i,e){let t=String(i).split(".").map(s=>parseInt(s,10)||0),n=String(e).split(".").map(s=>parseInt(s,10)||0);for(let s=0;s<Math.max(t.length,n.length);s++){let r=(t[s]||0)-(n[s]||0);if(r)return r>0?1:-1}return 0}async function hc(){let i=await fetch(W0+"?t="+Date.now(),{cache:"no-store"});if(!i.ok)throw new Error("the download site answered "+i.status);let e=await i.json();return cc(Du,String(Date.now())),{...e,newer:q0(e.version,Mn)>0}}async function Fu(i){if(!xo())return;let e=+(lc(Du)||0);if(!(Date.now()-e<X0))try{let t=await hc();t.newer&&lc(Nu)!==t.version+"|"+new Date().toDateString()&&i(t)}catch{}}function Ou(i){cc(Nu,i.version+"|"+new Date().toDateString())}function Bu(i,e,t){if(Qt&&window.AkarAndroid.update){window.akarUpdateProgress=(s,r)=>{r?t(r):e(s)},window.AkarAndroid.update(i.apk,i.sha256||"",i.size||0,i.version);return}let n=()=>location.reload();"serviceWorker"in navigator?navigator.serviceWorker.getRegistration().then(s=>s?s.update().then(n,n):n(),n):n()}function dr(i,e,{onClose:t,minimize:n=!1,peek:s=64,onState:r=null,from:a=null}={}){let o=!1,c=null,l=f=>f?Math.max(0,i.offsetHeight-s):0,h=(f,g)=>{i.style.transition=g?"transform 0.22s ease":"none",i.style.transform=`translateY(${f}px)`},u=f=>{o=f,i.classList.toggle("minimized",f),h(l(f),!0),r&&r(f)},d=()=>{h(i.offsetHeight+40,!0),setTimeout(()=>{o=!1,i.classList.remove("minimized"),t&&t(),i.style.transition="none",i.style.transform="",requestAnimationFrame(()=>i.style.transition="")},200)};for(let f of e){if(!f)continue;a||(f.style.touchAction="none"),f.addEventListener("pointerdown",x=>{x.button!==0||x.target.closest("button, a, input, label")&&!x.target.closest(".grab")||a&&!a(x.target)||(f.setPointerCapture(x.pointerId),c={id:x.pointerId,onBar:!!x.target.closest(".grab"),y0:x.clientY,base:l(o),t0:performance.now(),last:x.clientY,lastT:performance.now(),v:0,moved:0})}),f.addEventListener("pointermove",x=>{if(!c||x.pointerId!==c.id)return;let p=x.clientY-c.y0;c.moved=Math.max(c.moved,Math.abs(p));let m=performance.now();c.v=(x.clientY-c.last)/Math.max(1,m-c.lastT),c.last=x.clientY,c.lastT=m;let M=c.base+p;h(M<0?M/4:M,!1)});let g=x=>{if(!c||x.pointerId!==c.id)return;let p=c;c=null;let m=x.clientY-p.y0,M=i.offsetHeight;if(p.moved<6){n&&p.onBar?u(!o):h(l(o),!0);return}let T=p.v>.6,w=p.v<-.6;if(o){m<-40||w?u(!1):m>30||T?d():u(!0);return}m>M*.55||T&&m>40&&!n?d():n&&(m>Math.min(120,M*.2)||T)?u(!0):!n&&m>M*.25?d():u(!1)};f.addEventListener("pointerup",g),f.addEventListener("pointercancel",g)}return{reset(){o=!1,i.classList.remove("minimized"),i.style.transition="",i.style.transform=""},get minimized(){return o}}}var uc="tools@tesseractstudio.co",$0="brand/tesseract-logo.png";function zu(i){let e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}function Y0(i){return(i/1e6).toFixed(1)+" MB"}var dc=Qt?"for Android":"in your browser";function fc(i,{tall:e=!1,onclose:t=null}={}){let n=zu('<div class="sheet-scrim over"></div>'),s=zu(`<div class="big-sheet ${e?"tall":""}" role="dialog" aria-label="${Ve(i)}">
      <div class="grab" aria-hidden="true"><span></span></div>
      <div class="big-head"><div class="h1">${Ve(i)}</div><button class="ib" aria-label="Close">${Ye("close",24)}</button></div>
      <div class="big-body"></div></div>`);n.appendChild(s),document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add("in"));let r=()=>{n.classList.remove("in"),setTimeout(()=>n.remove(),220),t&&t()};return s.querySelector(".big-head button").onclick=r,dr(s,[s],{from:a=>!!a.closest(".grab, .big-head"),onClose:r}),n.addEventListener("click",a=>{a.target===n&&r()}),{el:s,body:s.querySelector(".big-body"),close:r,scrim:n}}function Hu(){let i=fc("About",{tall:!0});i.body.innerHTML=`
    <div class="acard">
      <div class="a-label">Developed by</div>
      <img src="${$0}" alt="Tesseract, Design | Build" class="tlogo">
      <div class="atext muted">Tesseract Studio, Hyderabad</div>
    </div>
    <div class="acard">
      <div class="a-label">Suggestions and questions</div>
      <div class="atext">Have an idea, found something wrong, or want to ask about the app? Write to us.</div>
      <a class="amail" href="mailto:${uc}?subject=${encodeURIComponent("Akar "+Mn+" "+dc)}">${uc}</a>
      <a class="pbtn wide" href="mailto:${uc}?subject=${encodeURIComponent("Akar "+Mn+" "+dc)}">${Ye("mail",18)} Email Tesseract Studio</a>
    </div>
    <div class="acard">
      <div class="a-label">Updates</div>
      <div class="atext">${Qt?`You have version ${Mn}. Akar looks for a newer version once a day and asks before updating. None of your models are sent.`:`You have version ${Mn}. In a browser the viewer is the newest each time it's opened with a connection; Akar also looks once a day while it's open. None of your models are sent.`}</div>
      <div class="opt-row"><span>Look for updates every day</span><button class="tog ${xo()?"on":""}" id="autoUpd" role="switch" aria-checked="${xo()}" aria-label="Look for updates every day"></button></div>
      <div id="updLine" hidden></div>
      <button class="sbtn wide" id="checkNow">Check now</button>
    </div>
    <div class="afoot">Akar ${Mn} ${dc}</div>`;let e=i.body.querySelector("#autoUpd");e.onclick=()=>{let r=!e.classList.contains("on");e.classList.toggle("on",r),e.setAttribute("aria-checked",String(r)),Uu(r)};let t=i.body.querySelector("#updLine"),n=(r,a)=>{t.hidden=!1,t.className="upd-line "+r,t.innerHTML=a},s=i.body.querySelector("#checkNow");s.onclick=async()=>{s.disabled=!0,n("","Looking for a newer version\u2026");try{let r=await hc();r.newer?(n("new",`${Ye("dl",18)}<span>Akar ${Ve(r.version)} is ready.</span>`),i.close(),pc(r)):n("ok",`${Ye("checkc",18)}<span>Checked just now: you have the newest Akar.</span>`)}catch{n("bad","<span>Couldn't reach akar.tesseractstudio.co. Check the connection and try again.</span>")}finally{s.disabled=!1}}}function pc(i){let e=fc("A new Akar is ready",{onclose:()=>Ou(i)}),t=i.size&&Qt?` \xB7 ${Y0(i.size)}`:"";e.body.innerHTML=`
    <div class="upd-head"><img src="icons/icon-192.png" alt="" class="upd-icon">
      <div><div class="sm">Version ${Ve(i.version)}${t} \xB7 you have ${Mn}</div></div></div>
    ${i.notes?`<div class="a-label" style="margin-top:14px">What's new</div><div class="upd-notes">${Ve(i.notes)}</div>`:""}
    <div class="sm" style="margin:12px 0 16px;line-height:1.5">${Qt?"Downloaded from akar.tesseractstudio.co; Android then asks you to install it. The models on the phone stay as they are.":"The viewer reloads with the new version. The models kept here stay as they are."}</div>
    <div id="updProgress" hidden><div class="bar"><div></div></div><div class="sm" id="updText"></div></div>
    <div class="row" id="updButtons" style="gap:10px"><button class="sbtn" id="notNow" style="flex:1">Not now</button><button class="pbtn" id="updNow" style="flex:1.4">${Qt?"Update":"Reload"}</button></div>`,e.body.querySelector("#notNow").onclick=()=>e.close(),e.body.querySelector("#updNow").onclick=()=>{let n=e.body.querySelector("#updProgress"),s=e.body.querySelector("#updProgress .bar > div"),r=e.body.querySelector("#updText");e.body.querySelector("#updButtons").hidden=!0,n.hidden=!1,r.textContent=Qt?"Downloading Akar "+i.version+"\u2026":"Reloading\u2026",Bu(i,a=>{s.style.width=Math.round(a*100)+"%",a>=1?r.textContent="Checked and ready: Android asks you to install it.":r.textContent=`Downloading Akar ${i.version}\u2026 ${Math.round(a*100)}%`},a=>{r.textContent="The update couldn't be downloaded: "+a,e.body.querySelector("#updButtons").hidden=!1})}}function Vu(){let i=fc("Open-source parts"),e=[["three.js","Draws the model in 3D.","MIT licence, \xA9 2010\u20132025 three.js authors","https://github.com/mrdoob/three.js/blob/dev/LICENSE"],[".NET runtime (WebAssembly)","Runs Akar's own code, which reads the model, its scenes and sheets, and writes the PDFs.","MIT licence, \xA9 .NET Foundation and contributors","https://github.com/dotnet/runtime/blob/main/LICENSE.TXT"]];Qt&&e.push(["AndroidX WebKit and Core","The Android app around the viewer.","Apache License 2.0, \xA9 The Android Open Source Project","https://www.apache.org/licenses/LICENSE-2.0"]),i.body.innerHTML=e.map(([t,n,s,r])=>`
    <div class="acard"><div style="font-weight:600">${Ve(t)}</div><div class="atext muted">${Ve(n)}</div>
      <a class="sm" href="${r}" target="_blank" rel="noopener">${Ve(s)}</a></div>`).join("")+'<div class="afoot">Akar itself is \xA9 Tesseract Studio.</div>'}var Z0=60;function J0(i,e){if(!i||!e)return!1;let t=(n,s,r)=>Math.abs(n-s)<=r;return t(i.distance,e.distance,Math.max(1,i.distance*1e-4))&&t(i.yaw,e.yaw,1e-4)&&t(i.pitch,e.pitch,1e-4)&&t(i.fov,e.fov,.001)&&i.perspective===e.perspective&&!!i.twoPoint==!!e.twoPoint&&i.target.every((n,s)=>t(n,e.target[s],Math.max(1,i.distance*1e-4)))}var vo=class{constructor(e,t){this.c=e,this.hooks=t,this.steps=[],this.at=-1,this.docId=null,this.applying=!1,this.queue=Promise.resolve()}get canUndo(){return this.at>0&&!this.applying}get canRedo(){return this.at<this.steps.length-1&&!this.applying}capture(){let e=this.c,t=e.view;return{camera:yn(t.camera),style:t.style,shadows:t.shadows,realistic:t.realistic,sectionOn:t.sectionOn,fogOn:t.fogOn,lookChoice:e.lookChoice,modelStyle:e.modelStyle,sceneIndex:e.sceneIndex,measure:e.measure?e.measure.snapshot():null,docId:this.docId}}record({doc:e=!1}={}){return this.queue=this.queue.then(async()=>{if(this.applying||this.c.closed)return;(e||this.docId==null)&&(this.docId=await this.hooks.engine.call("Snapshot"));let t=this.capture(),n=this.steps[this.at];n&&n.docId===t.docId&&J0(n.camera,t.camera)&&n.style===t.style&&n.shadows===t.shadows&&n.realistic===t.realistic&&n.sectionOn===t.sectionOn&&n.fogOn===t.fogOn&&n.sceneIndex===t.sceneIndex&&JSON.stringify(n.measure)===JSON.stringify(t.measure)||(this.steps.splice(this.at+1),this.steps.push(t),this.steps.length>Z0&&this.steps.shift(),this.at=this.steps.length-1,this.hooks.after())}).catch(()=>{}),this.queue}undo(){return this.go(-1)}redo(){return this.go(1)}go(e){return this.queue=this.queue.then(async()=>{let t=this.at+e;t<0||t>=this.steps.length||this.c.closed||(this.at=t,await this.apply(this.steps[t]))}).catch(()=>{}),this.queue}async apply(e){let t=this.c,n=t.view;this.applying=!0,this.hooks.after();try{if(t.lookChoice=e.lookChoice,t.modelStyle=e.modelStyle,n.realistic=e.realistic,n.sectionOn=e.sectionOn,n.fogOn=e.fogOn,n.setStyle(e.style,e.shadows),e.docId!==this.docId){let s=await this.hooks.engine.call("Restore",e.docId);this.docId=e.docId,await this.hooks.refreshVisibility(t),s&&s.ok&&await this.hooks.refreshSection(t,s.sections)}t.sceneIndex=e.sceneIndex,t.measure&&e.measure&&t.measure.restore(e.measure),await this.hooks.moveCamera(t,e.camera,280)}finally{this.applying=!1,this.hooks.after(),this.hooks.sync&&this.hooks.sync()}}};var gs=["#d92d2f","#2f6fd6","#1f9d55","#c77d12","#7a4bc4"],K0={Millimetres:"mm",Centimetres:"cm",Metres:"m",Inches:"in",Feet:"ft",Kilometres:"km",Yards:"yd",Miles:"mi"},yo=class{constructor(e,t,n){this.c=e,this.engine=t,this.ui=n,this.mode="distance",this.items=[],this.chain=null,this.pending=[],this.outlines=new Map,this.active=!1,this.svg=document.getElementById("overlay"),this.labels=document.getElementById("labels")}get view(){return this.c.view}start(e){this.active=!0,this.body=e;let t=document.getElementById("stage");this.tools=document.createElement("div"),this.tools.className="mtools",this.tools.innerHTML=`<div class="seg-wrap">
        <button class="seg" data-m="distance">Distance</button><button class="seg" data-m="area">Area</button><button class="seg" data-m="angle">Angle</button></div>
      <button class="pbtn" id="mDone" style="height:38px;padding:0 16px">Done</button>`,t.appendChild(this.tools);for(let n of this.tools.querySelectorAll(".seg"))n.onclick=()=>this.setMode(n.dataset.m);this.tools.querySelector("#mDone").onclick=()=>{this.ui.$("#tabs [data-tab=measure]").click()},this.magnifier=document.createElement("div"),this.magnifier.className="magnifier",this.magnifier.hidden=!0,this.magCanvas=document.createElement("canvas"),this.magCanvas.width=248,this.magCanvas.height=248,this.magnifier.appendChild(this.magCanvas),this.snapLabel=document.createElement("div"),this.snapLabel.className="snapname",this.snapLabel.hidden=!0,t.appendChild(this.magnifier),t.appendChild(this.snapLabel),this.c.nav.interceptor=this,this.setMode(this.mode),this.drawList(),this.follow()}stop(){this.active=!1,this.tools?.remove(),this.magnifier?.remove(),this.snapLabel?.remove(),this.c.nav.interceptor=null,this.chain=null,this.pending=[],this.follow()}snapshot(){return{items:this.items.slice(),chain:this.chain?this.chain.slice():null,pending:this.pending.slice()}}restore(e){this.items=e.items.slice(),this.chain=e.chain?e.chain.slice():null,this.pending=e.pending.slice(),this.drawList(),this.follow()}dispose(){this.stop(),this.items=[]}setMode(e){this.mode=e,this.chain=null,this.pending=[];for(let t of this.tools.querySelectorAll(".seg"))t.classList.toggle("on",t.dataset.m===e);this.ui.toast(e==="distance"?"Touch and slide to a point, lift to place it. Each next point measures from the last.":e==="area"?"Tap a face to measure its area.":"Place three points: the angle is at the middle one.",3200),this.follow()}undo(){if(this.pending.length)this.pending.pop();else if(this.items.length){let e=this.items.pop();this.chain&&e.kind==="distance"&&(this.chain.pop(),this.chain.length<2&&(this.chain=this.chain.length?this.chain:null))}else this.chain&&(this.chain=null);this.drawList(),this.follow()}down(e,t){this.track(e,t)}move(e,t){this.track(e,t)}up(e,t,n){this.magnifier.hidden=!0,this.snapLabel.hidden=!0;let s=this.snap;if(this.snap=null,n||!s){this.follow();return}this.place(s)}track(e,t){let n=this.view.pick(e,t);if(this.fingerAt={x:e,y:t},!n){this.snap=null,this.showMagnifier(e,t,null);return}let s=this.outlines.get(n.face);s===void 0&&(this.outlines.set(n.face,null),this.engine.call("FaceOutline",n.face).then(r=>{this.outlines.set(n.face,Array.from(r||[])),this.fingerAt&&this.fingerAt.x===e&&this.fingerAt.y===t&&this.track(e,t)},()=>{})),this.snap=this.snapTo(n,s||null,e,t),this.showMagnifier(e,t,this.snap)}snapTo(e,t,n,s){let r=this.view,a={point:e.point.clone(),kind:"On face",face:e.face,d:1/0};if(!t||!t.length)return a;let o=[];for(let u=0;u<t.length;){let d=t[u++],f=[];for(let g=0;g<d;g++)f.push(new D(t[u],t[u+1],t[u+2])),u+=3;o.push(f)}let c=(u,d)=>{let f=r.toScreen(u);if(!f)return 1/0;let g=Math.hypot(f.x-n,f.y-s);return g<=d?g:1/0},l=null,h=u=>{u.d<1/0&&(!l||u.rank<l.rank||u.rank===l.rank&&u.d<l.d)&&(l=u)};for(let u of o)for(let d=0;d<u.length;d++){let f=u[d],g=u[(d+1)%u.length];h({point:f.clone(),kind:"Endpoint",d:c(f,24),rank:0});let x=f.clone().add(g).multiplyScalar(.5);h({point:x,kind:"Midpoint",d:c(x,18),rank:1});let p=r.toScreen(f),m=r.toScreen(g);if(p&&m){let M=m.x-p.x,T=m.y-p.y,w=M*M+T*T;if(w>1){let C=Math.max(0,Math.min(1,((n-p.x)*M+(s-p.y)*T)/w)),E=Math.hypot(p.x+M*C-n,p.y+T*C-s);h({point:f.clone().lerp(g,C),kind:"On edge",d:E<12?E:1/0,rank:2})}}}return l&&(a={...l,face:e.face}),a}showMagnifier(e,t,n){let s=this.view;s.draw();let r=this.magnifier,a=124,o=2.4;r.hidden=!1;let c=t>a+40;r.style.left=Math.round(e-a/2)+"px",r.style.top=Math.round(c?t-a-52:t+52)+"px";let l=this.magCanvas.getContext("2d"),h=s.canvas,u=h.width/s.width,d=a/o*u;l.fillStyle="#fff",l.fillRect(0,0,248,248),l.drawImage(h,e*u-d/2,t*u-d/2,d,d,0,0,248,248);let f=124,g=124;if(n){let p=s.toScreen(n.point);p&&(f=124+(p.x-e)*o*2,g=124+(p.y-t)*o*2)}l.strokeStyle="#ffffffcc",l.lineWidth=3,l.beginPath(),l.arc(f,g,11,0,Math.PI*2),l.stroke(),l.fillStyle=n?"#1f9d55":"#9aa0a8",l.beginPath(),l.arc(f,g,9,0,Math.PI*2),l.fill();let x=this.snapLabel;x.hidden=!n,n&&(x.textContent=n.kind,x.style.left=e+"px",x.style.top=(c?t-48:t+52+a+4)+"px"),this.follow()}async place(e){let t=e.point.clone();if(this.mode==="distance")if(!this.chain)this.chain=[t];else{let n=this.chain[this.chain.length-1];this.chain.push(t);let s=n.distanceTo(t),r={kind:"distance",points:[n,t],value:s,text:"\u2026",colour:gs[this.items.length%gs.length]};this.items.push(r),r.text=await this.engine.call("Length",s)}else if(this.mode==="area"){let n=this.outlines.get(e.face),s=await this.engine.call("FaceArea",e.face);if(!s){this.ui.toast("That face's area can't be measured (it's part of a curved surface).");return}let r={kind:"area",points:[t],value:s,text:"\u2026",colour:gs[this.items.length%gs.length],outline:n||null};this.items.push(r),r.text=await this.engine.call("Area",s)}else if(this.pending.push(t),this.pending.length===3){let[n,s,r]=this.pending,a=n.clone().sub(s),o=r.clone().sub(s),c=a.angleTo(o)*180/Math.PI,l={kind:"angle",points:[n,s,r],value:c,text:"\u2026",colour:gs[this.items.length%gs.length]};this.items.push(l),this.pending=[],l.text=await this.engine.call("Angle",c)}this.drawList(),this.follow(),this.c.history?.record()}drawList(){if(!this.active||!this.body)return;let e=K0[this.c.summary.units]||"",t={distance:0,area:0,angle:0},n=this.items.map(r=>{t[r.kind]++;let a=r.kind==="distance"?"Distance "+t.distance:r.kind==="area"?"Area "+t.area:"Angle "+t.angle;return`<div class="mrow"><span class="dot" style="background:${r.colour}"></span>${a}<span class="v">${Ve(r.text)}</span></div>`}).join("");this.body.innerHTML=`<div class="panel-head"><div class="h2">Measurements</div><div class="row"><span class="sm">${e}</span>${this.items.length?'<button class="lnk" id="mClear">Clear</button>':""}</div></div>
      ${n||`<div class="sm" style="padding:6px 0 10px">Nothing measured yet. Measurements stay on the phone and aren't written into the model.</div>`}`;let s=this.body.querySelector("#mClear");s&&(s.onclick=()=>{this.items=[],this.chain=null,this.pending=[],this.drawList(),this.follow(),this.c.history?.record()})}follow(){let e=this.view;if(!this.svg||!e)return;if(!(this.items.length||this.chain||this.pending.length)){this.svg.innerHTML="";for(let o of this.labels.querySelectorAll(".mlabel"))o.remove();return}let n=o=>e.toScreen(o),s="",r=[];for(let o of this.items)if(o.kind==="distance"){let c=n(o.points[0]),l=n(o.points[1]);if(!c||!l)continue;s+=`<line x1="${c.x}" y1="${c.y}" x2="${l.x}" y2="${l.y}" stroke="${o.colour}" stroke-width="2.5" stroke-dasharray="7 5"/>`,s+=a(c)+a(l),r.push({x:(c.x+l.x)/2,y:(c.y+l.y)/2,text:o.text,colour:o.colour})}else if(o.kind==="area"){if(o.outline&&o.outline.length){let l=0,h="";for(;l<o.outline.length;){let u=o.outline[l++];for(let d=0;d<u;d++){let f=n(new D(o.outline[l],o.outline[l+1],o.outline[l+2]));l+=3,f&&(h+=(d?"L":"M")+f.x.toFixed(1)+" "+f.y.toFixed(1))}h+="Z"}s+=`<path d="${h}" fill="${o.colour}33" stroke="${o.colour}" stroke-width="2" fill-rule="evenodd"/>`}let c=n(o.points[0]);c&&r.push({x:c.x,y:c.y,text:o.text,colour:o.colour})}else{let[c,l,h]=o.points.map(n);if(!c||!l||!h)continue;s+=`<polyline points="${c.x},${c.y} ${l.x},${l.y} ${h.x},${h.y}" fill="none" stroke="${o.colour}" stroke-width="2.5"/>`+a(c)+a(l)+a(h),r.push({x:l.x,y:l.y-26,text:o.text,colour:o.colour})}for(let o of[...this.chain?this.chain.slice(-1):[],...this.pending]){let c=n(o);c&&(s+=a(c))}this.svg.innerHTML=s;for(let o of this.labels.querySelectorAll(".mlabel"))o.remove();for(let o of r){let c=document.createElement("div");c.className="mlabel",c.style.left=o.x+"px",c.style.top=o.y+"px",c.style.background=o.colour,c.textContent=o.text,this.labels.appendChild(c)}function a(o){return`<circle cx="${o.x}" cy="${o.y}" r="6" fill="#1f9d55" stroke="#fff" stroke-width="2"/>`}}drawOn(e,t,n,s){let r=l=>{let h=new D(l.x,l.y,l.z).project(t);return h.z>1?null:{x:(h.x+1)/2*n,y:(1-h.y)/2*s}},a=Math.max(1,n/1e3),o=(l,h,u,d)=>{e.font=`600 ${Math.round(15*a)}px -apple-system, Roboto, "Segoe UI", sans-serif`;let f=e.measureText(u).width+20*a,g=26*a;e.fillStyle=d,j0(e,l-f/2,h-g/2,f,g,g/2),e.fill(),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText(u,l,h+a)},c=l=>{e.fillStyle="#1f9d55",e.strokeStyle="#fff",e.lineWidth=2*a,e.beginPath(),e.arc(l.x,l.y,6*a,0,Math.PI*2),e.fill(),e.stroke()};for(let l of this.items){let h=l.points.map(r);h.some(u=>!u)||(e.strokeStyle=l.colour,e.lineWidth=3*a,l.kind==="distance"?(e.setLineDash([8*a,6*a]),e.beginPath(),e.moveTo(h[0].x,h[0].y),e.lineTo(h[1].x,h[1].y),e.stroke(),e.setLineDash([]),c(h[0]),c(h[1]),o((h[0].x+h[1].x)/2,(h[0].y+h[1].y)/2,l.text,l.colour)):l.kind==="angle"?(e.beginPath(),e.moveTo(h[0].x,h[0].y),e.lineTo(h[1].x,h[1].y),e.lineTo(h[2].x,h[2].y),e.stroke(),h.forEach(c),o(h[1].x,h[1].y-26*a,l.text,l.colour)):o(h[0].x,h[0].y,l.text,l.colour))}}};function j0(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}var Gu=24,Wu=110;function qu(i,e){let t=[["A0",841,1189],["A1",594,841],["A2",420,594],["A3",297,420],["A4",210,297]];for(let[n,s,r]of t)if(Math.abs(Math.min(i,e)-s)<2&&Math.abs(Math.max(i,e)-r)<2)return n+(i>e?" landscape":" portrait");return Math.round(i)+" \xD7 "+Math.round(e)+" mm"}function Q0(i,e){return qu(i,e).split(" ")[0]}function Xu(i,e,t,n,s,r,a=1,o=.6){i.setTransform(a,0,0,a,0,0),i.fillStyle=e.paper||"#ffffff",i.fillRect(s,r,e.width*n,e.height*n);let c=()=>i.setTransform(a*n,0,0,a*n,a*s,a*r);c(),i.lineCap="round",i.lineJoin="round";let l=0,h=o/n;for(let u of e.ops)switch(u.t){case"p":{if(!u._path){let d=new Path2D;u.r.forEach((f,g)=>{if(!(f.length<4)){d.moveTo(f[0],f[1]);for(let x=2;x<f.length;x+=2)d.lineTo(f[x],f[x+1]);u.c[g]&&d.closePath()}}),u._path=d}if(u.f&&(i.fillStyle=u.f,i.fill(u._path,"evenodd")),u.w!=null){let d=Math.max(h,u.w);i.lineWidth=d,i.strokeStyle=u.s,i.setLineDash(u.d&&u.d.some(f=>f>1e-6)?u.d.map(f=>Math.max(f,.001)):[]),i.stroke(u._path)}break}case"t":{let d=u.h/.718;if(d*n*a<1.2)break;i.save(),i.setTransform(a,0,0,a,a*(s+u.x*n),a*(r+u.y*n)),u.a&&i.rotate(-u.a*Math.PI/180),u.k&&i.scale(u.k,1),i.font=`${u.i?"italic ":""}${u.b?"bold ":""}${d*n}px ${e_(u.f)}`,i.fillStyle=u.c,i.textBaseline="alphabetic",i.fillText(u.s,0,0),i.restore();break}case"i":{let d=t[u.n];d?i.drawImage(d,u.x,u.y,u.w,u.h):(i.fillStyle="#eef0f3",i.fillRect(u.x,u.y,u.w,u.h));break}case"cb":i.save(),i.beginPath(),i.rect(u.x,u.y,u.w,u.h),i.clip(),l++;break;case"ce":l>0&&(i.restore(),l--,c());break}for(;l-- >0;)i.restore();i.setLineDash([]),i.setTransform(1,0,0,1,0,0)}function e_(i){return`"${(i||"Arial").replace(/"/g,"")}", Arial, Helvetica, sans-serif`}var Mo=class{constructor(e,t,n){this.c=e,this.engine=t,this.ui=n,this.open=!1,this.filter=null,this.drawings=new Map,this.thumbs=new Map}get sheets(){return this.c.summary.sheets}show(){this.open=!0,this.el?.remove();let e=document.getElementById("stage");this.el=document.createElement("div"),this.el.className="sheets-screen",e.appendChild(this.el),this.setTop("Sheets",this.c.name.replace(/\.akr$/i,"")),this.list()}setTop(e,t,n=null){if(document.getElementById("title").textContent=e,document.getElementById("subtitle").textContent=t,document.getElementById("tagsBtn").hidden=!0,document.getElementById("moreBtn").hidden=!n,n){let s=document.getElementById("moreBtn");s.innerHTML=Ye("share",21),s.onclick=n}}close(e=!1){this.open=!1,this.el?.remove(),this.el=null,this.viewer=null,document.getElementById("tagsBtn").hidden=!1;let t=document.getElementById("moreBtn");t.hidden=!1,t.innerHTML=Ye("more",22,'style="stroke-width:3"'),document.getElementById("title").textContent=this.c.name.replace(/\.akr$/i,""),e||hn(this.c,null),document.getElementById("moreBtn").onclick=null,this.c.rewireMore&&this.c.rewireMore()}list(){this.viewer=null;let e=this.sheets;if(this.setTop("Sheets",this.c.name.replace(/\.akr$/i,"")),this.el.innerHTML="",!e.length){this.el.innerHTML='<div class="empty" style="padding-top:60px">This model has no sheets. Sheets made in Akar on the PC show here.</div>';return}let t=[...new Set(e.map(a=>a.set).filter(Boolean))];if(t.length){let a=document.createElement("div");a.className="sheet-filter";let o=(c,l)=>{let h=document.createElement("button");h.className="chip"+(this.filter===l?" on":""),h.textContent=c,h.onclick=()=>{this.filter=l,this.list()},a.appendChild(h)};o("All "+e.length,null);for(let c of t)o(c+" "+e.filter(l=>l.set===c).length,c);this.el.appendChild(a)}let n=document.createElement("div");n.className="sheet-grid",this.el.appendChild(n);let s=e.filter(a=>!this.filter||a.set===this.filter),r=new IntersectionObserver(a=>{for(let o of a)o.isIntersecting&&(r.unobserve(o.target),this.thumb(o.target.dataset.id,o.target.querySelector(".paper")))},{root:n,rootMargin:"200px"});for(let a of s){let o=document.createElement("button");o.className="sheet-card",o.dataset.id=a.id,o.innerHTML=`<div class="paper"></div><div class="num">${a.number?`<b>${Ve(a.number)}</b> `:""}${Ve(a.title)}</div><div class="sz">${Ve(Q0(a.width,a.height))}${a.set?" \xB7 "+Ve(a.set):""}</div>`,o.onclick=()=>this.show1(e.indexOf(a)),n.appendChild(o),r.observe(o)}}async thumb(e,t){return this.queue=(this.queue||Promise.resolve()).then(async()=>{if(!this.el||!t.isConnected)return;let n=this.sheets.find(s=>s.id===e);try{await _s(this.c,e,Gu,!1);let s=await this.engine.call("SheetDrawing",e,Gu,500);if(!s.ok)return;let r=await this.images(s),a=t.clientWidth||160,o=t.clientHeight||113,c=Math.min(a/s.width,o/s.height),l=document.createElement("canvas"),h=Math.min(2,window.devicePixelRatio||1);l.width=Math.round(s.width*c*h),l.height=Math.round(s.height*c*h),l.style.width=s.width*c+"px",l.style.height=s.height*c+"px",Xu(l.getContext("2d"),s,r,c,0,0,h,.3),t.innerHTML="",t.appendChild(l)}catch{t.textContent=n?n.number:""}}),this.queue}async images(e){let t=new Set(e.ops.filter(s=>s.t==="i"&&s.n>=0).map(s=>s.n)),n=[];for(let s of t){let r=await this.engine.call("SheetImage",s);if(r&&r.length)try{n[s]=await createImageBitmap(new Blob([r]))}catch{}}return n}async show1(e){let t=this.sheets[e];this.index=e,this.el.innerHTML=`<div class="sheet-view"><canvas></canvas><div class="zoom-chip">\u2026</div>
      <div class="dots">${this.sheets.length>1&&this.sheets.length<=14?this.sheets.map((c,l)=>`<span class="${l===e?"on":""}"></span>`).join(""):""}</div>
      <div class="sheet-actions"><button class="sbtn" id="sMeasure">${Ye("tape",18)} Measure</button><button class="sbtn" id="s3d" disabled>${Ye("views",18)} Open this view in 3D</button></div></div>`;let n=`Sheet ${e+1} of ${this.sheets.length} \xB7 ${qu(t.width,t.height)}`;this.setTop((t.number?t.number+" ":"")+t.title,n,()=>this.shareSheet(t));let s=this.el.querySelector(".sheet-view"),r=s.querySelector("canvas"),a={s:t,d:null,images:[],zoom:1,ox:0,oy:0,fit:1,canvas:r,box:s,chosen:null,measuring:!1,marks:[]};this.viewer=a,this.el.querySelector("#sMeasure").onclick=c=>{a.measuring=!a.measuring,a.marks=[],c.currentTarget.classList.toggle("on",a.measuring),a.measuring&&this.ui.toast("Tap two points on the sheet. Inside a viewport drawn to scale, you get the real size."),this.redraw()},this.el.querySelector("#s3d").onclick=()=>{a.chosen&&this.ui.openViewInModel(this.c,a.chosen)},this.wireGestures(a);let o=this.drawings.get(t.id);if(!o){s.querySelector(".zoom-chip").textContent="Drawing\u2026";try{await _s(this.c,t.id,Wu,!1);let c=await this.engine.call("SheetDrawing",t.id,Wu,1600);if(!c.ok)throw new Error(c.error);o={d:c,images:await this.images(c)},this.drawings.set(t.id,o)}catch{s.querySelector(".zoom-chip").textContent="This sheet couldn't be drawn.";return}}this.viewer===a&&(a.d=o.d,a.images=o.images,this.fitSheet(a),this.redraw())}fitSheet(e){let t=e.box.clientWidth,n=e.box.clientHeight-70;e.fit=Math.min((t-16)/e.d.width,(n-16)/e.d.height),e.zoom=e.fit,e.ox=(t-e.d.width*e.zoom)/2,e.oy=(n-e.d.height*e.zoom)/2+6}redraw(){let e=this.viewer;if(!e||!e.d)return;let t=Math.min(3,window.devicePixelRatio||1),n=e.box.clientWidth,s=e.box.clientHeight;(e.canvas.width!==Math.round(n*t)||e.canvas.height!==Math.round(s*t))&&(e.canvas.width=Math.round(n*t),e.canvas.height=Math.round(s*t));let r=e.canvas.getContext("2d");r.setTransform(1,0,0,1,0,0),r.fillStyle="#d9dce1",r.fillRect(0,0,e.canvas.width,e.canvas.height),r.setTransform(t,0,0,t,0,0),r.fillStyle="#00000022",r.fillRect(e.ox+3,e.oy+4,e.d.width*e.zoom,e.d.height*e.zoom),Xu(r,e.d,e.images,e.zoom,e.ox,e.oy,t),r.setTransform(t,0,0,t,0,0),e.chosen&&(r.strokeStyle="#d92d2f",r.lineWidth=2,r.strokeRect(e.ox+e.chosen.x*e.zoom,e.oy+e.chosen.y*e.zoom,e.chosen.w*e.zoom,e.chosen.h*e.zoom));for(let a of e.marks)r.fillStyle="#1f9d55",r.beginPath(),r.arc(e.ox+a.x*e.zoom,e.oy+a.y*e.zoom,5,0,Math.PI*2),r.fill();if(e.marks.length===2){let[a,o]=e.marks,c=e.ox+a.x*e.zoom,l=e.oy+a.y*e.zoom,h=e.ox+o.x*e.zoom,u=e.oy+o.y*e.zoom;if(r.strokeStyle="#d92d2f",r.lineWidth=2.5,r.setLineDash([7,5]),r.beginPath(),r.moveTo(c,l),r.lineTo(h,u),r.stroke(),r.setLineDash([]),e.measureText){r.font="600 13px -apple-system, Roboto, sans-serif";let d=r.measureText(e.measureText).width+20,f=(c+h)/2,g=(l+u)/2;r.fillStyle="#d92d2f",r.beginPath(),r.roundRect(f-d/2,g-13,d,26,13),r.fill(),r.fillStyle="#fff",r.textAlign="center",r.textBaseline="middle",r.fillText(e.measureText,f,g+1),r.textAlign="start",r.textBaseline="alphabetic"}}r.setTransform(1,0,0,1,0,0),e.box.querySelector(".zoom-chip").textContent=Math.round(e.zoom/e.fit*100)+"%"}wireGestures(e){let t=new Map,n=0,s=null,r=!1,a=e.canvas;a.onpointerdown=c=>{a.setPointerCapture(c.pointerId),t.set(c.pointerId,{x:c.offsetX,y:c.offsetY}),t.size===1&&(n=0,r=!1,s={x:c.offsetX,y:c.offsetY,ox:e.ox,zoom:e.zoom,t:performance.now()})},a.onpointermove=c=>{let l=t.get(c.pointerId);if(!l||!e.d)return;let h=[...t.values()].map(d=>({...d}));l.x=c.offsetX,l.y=c.offsetY;let u=[...t.values()];if(t.size===1){let d=u[0].x-h[0].x,f=u[0].y-h[0].y;n+=Math.abs(d)+Math.abs(f),e.ox+=d,e.oy+=f}else if(t.size===2){n+=99;let d={x:(h[0].x+h[1].x)/2,y:(h[0].y+h[1].y)/2},f={x:(u[0].x+u[1].x)/2,y:(u[0].y+u[1].y)/2},g=Math.hypot(h[0].x-h[1].x,h[0].y-h[1].y),x=Math.hypot(u[0].x-u[1].x,u[0].y-u[1].y),p=g>1?x/g:1,m=Math.max(e.fit*.5,Math.min(e.fit*40,e.zoom*p)),M=m/e.zoom;e.ox=f.x-(d.x-e.ox)*M,e.oy=f.y-(d.y-e.oy)*M,e.zoom=m}this.redraw()};let o=c=>{if(!t.get(c.pointerId)||(t.delete(c.pointerId),t.size||!e.d))return;let h=c.offsetX-s.x;if(!r&&e.zoom<=e.fit*1.05&&Math.abs(h)>70&&performance.now()-s.t<600){r=!0;let u=this.index+(h<0?1:-1);if(u>=0&&u<this.sheets.length){this.show1(u);return}this.fitSheet(e),this.redraw();return}n<8&&this.tap(e,c.offsetX,c.offsetY)};a.onpointerup=o,a.onpointercancel=o,a.ondblclick=()=>{e.d&&(this.fitSheet(e),this.redraw())},a.onwheel=c=>{if(c.preventDefault(),!e.d)return;let l=Math.exp(-c.deltaY*.0015),h=Math.max(e.fit*.5,Math.min(e.fit*40,e.zoom*l)),u=h/e.zoom;e.ox=c.offsetX-(c.offsetX-e.ox)*u,e.oy=c.offsetY-(c.offsetY-e.oy)*u,e.zoom=h,this.redraw()}}async tap(e,t,n){let s=(t-e.ox)/e.zoom,r=(n-e.oy)/e.zoom;if(e.measuring){if(e.marks.length>=2&&(e.marks=[]),e.marks.push({x:s,y:r}),e.measureText="",e.marks.length===2){let[c,l]=e.marks,h=Math.hypot(l.x-c.x,l.y-c.y),u=(f,g)=>f.x>=g.x&&f.x<=g.x+g.w&&f.y>=g.y&&f.y<=g.y+g.h,d=e.d.viewports.find(f=>u(c,f)&&u(l,f));d&&d.parallel&&d.scale>0?e.measureText=await this.engine.call("Length",h*d.scale):e.measureText=h.toFixed(1)+" mm on paper"}this.redraw();return}let a=e.d.viewports.find(c=>s>=c.x&&s<=c.x+c.w&&r>=c.y&&r<=c.y+c.h);e.chosen=a&&a.camera?a:null;let o=this.el.querySelector("#s3d");o&&(o.disabled=!e.chosen),this.redraw()}async shareSheet(e){this.ui.toast("Making the PDF\u2026",8e3);try{await _s(this.c,e.id,150,!0);let t=await this.engine.call("PlotPdf",e.id,150,(e.number?e.number+" ":"")+e.title);await this.engine.call("ForgetPictures"),this.drawings.clear();let n=((e.number?e.number+" ":"")+e.title).replace(/[\\/:*?"<>|]+/g,"-").trim()||"Sheet";await _o([{name:n+".pdf",blob:new Blob([t],{type:"application/pdf"})}],n)}catch(t){this.ui.toast("The PDF couldn't be made: "+t.message)}}};var t_=[["screen","Screen"],["hd","Full HD 1920 \xD7 1080"],["4k","4K"],["a3","A3 at 300 dpi"]];function fr(i){return String(i).replace(/[\\/:*?"<>|]+/g,"-").replace(/\s+/g," ").trim()||"Akar"}var So=class{constructor(e,t,n){this.c=e,this.engine=t,this.ui=n,this.kind="picture",this.what="view",this.scenes=new Set,this.size="hd",this.look="shown",this.withMeasurements=!0,this.png=!1,this.sheetIds=null,this.onePdf=!0,this.scenePages=!1}show(e){this.body=e;let t=this.c.summary;this.sheetIds||(this.sheetIds=new Set(t.sheets.map(s=>s.id))),e.innerHTML=`<div class="panel-head"><div class="h2">Export</div></div>
      <div class="seg-wrap"><button class="seg ${this.kind==="picture"?"on":""}" data-k="picture">Picture</button><button class="seg ${this.kind==="pdf"?"on":""}" data-k="pdf">PDF</button></div>
      <div id="exBody"></div>
      <div class="row" style="margin-top:16px;gap:10px"><button class="sbtn" id="exSave" style="flex:1">Save to phone</button><button class="pbtn" id="exShare" style="flex:1.2">${Ye("share",18)} ${Iu()?"Share\u2026":"Download"}</button></div>`;for(let s of e.querySelectorAll("[data-k]"))s.onclick=()=>{this.kind=s.dataset.k,this.show(e)};let n=e.querySelector("#exBody");this.kind==="picture"?this.pictureOptions(n):this.pdfOptions(n),e.querySelector("#exSave").onclick=()=>this.run(!1),e.querySelector("#exShare").onclick=()=>this.run(!0)}chips(e,t,n,s){let r=document.createElement("div");r.innerHTML=`<div class="label">${Ve(e)}</div><div class="chips"></div>`;let a=r.querySelector(".chips");for(let[o,c,l]of t){let h=document.createElement("button");h.className="chip"+(o===n?" on":""),h.textContent=c,h.disabled=!!l,h.onclick=()=>s(o),a.appendChild(h)}return r}toggle(e,t,n){let s=document.createElement("div");return s.className="opt-row",s.innerHTML=`<span>${Ve(e)}</span><button class="tog ${t?"on":""}"></button>`,s.querySelector("button").onclick=r=>{let a=!r.currentTarget.classList.contains("on");r.currentTarget.classList.toggle("on",a),n(a)},s}pictureOptions(e){let t=this.c.summary,n=()=>this.show(this.body);if(t.scenes.length?e.appendChild(this.chips("What",[["view","This view"],["scenes",this.what==="scenes"&&this.scenes.size?`Scenes (${this.scenes.size})`:"Scenes\u2026"],["all",t.scenes.length===1?"The scene":`All ${t.scenes.length} scenes`]],this.what,r=>{this.what=r,n()})):this.what="view",this.what==="scenes"){let r=document.createElement("div");r.style.cssText="max-height:150px;overflow:auto;margin-top:6px",t.scenes.forEach((a,o)=>{let c=document.createElement("label");c.className="opt-row",c.style.minHeight="36px",c.innerHTML=`<span></span><input type="checkbox" ${this.scenes.has(o)?"checked":""} style="width:20px;height:20px;accent-color:#d92d2f">`,c.querySelector("span").textContent=a.name,c.querySelector("input").onchange=l=>{l.target.checked?this.scenes.add(o):this.scenes.delete(o)},r.appendChild(c)}),e.appendChild(r)}e.appendChild(this.chips("Size",t_,this.size,r=>{this.size=r,n()}));let s=this.c.view.realistic?"Realistic":document.getElementById("status").textContent.split(" \xB7 ")[0];e.appendChild(this.chips("Look",[["shown",`As shown (${s})`],["realistic","Realistic",!this.c.realisticOk],["hidden","Hidden line"]],this.look,r=>{this.look=r,n()})),this.c.measure.items.length&&e.appendChild(this.toggle("With the measurements",this.withMeasurements,r=>this.withMeasurements=r)),e.appendChild(this.toggle("PNG (else JPEG)",this.png,r=>this.png=r))}pdfOptions(e){let t=this.c.summary;if(t.sheets.length){let n=document.createElement("div");n.innerHTML='<div class="label">Sheets</div>';for(let s of t.sheets){let r=document.createElement("label");r.className="opt-row",r.style.minHeight="38px",r.innerHTML=`<span class="row" style="gap:10px"><input type="checkbox" ${this.sheetIds.has(s.id)?"checked":""} style="width:20px;height:20px;accent-color:#d92d2f"><span><b>${Ve(s.number)}</b> ${Ve(s.title)}</span></span><span class="sm">${Ve(n_(s.width,s.height))}</span>`,r.querySelector("input").onchange=a=>{a.target.checked?this.sheetIds.add(s.id):this.sheetIds.delete(s.id)},n.appendChild(r)}e.appendChild(n),e.appendChild(this.chips("As",[["one","One PDF"],["each","A PDF a sheet"]],this.onePdf?"one":"each",s=>{this.onePdf=s==="one",this.show(this.body)}))}else e.insertAdjacentHTML("beforeend",'<div class="sm" style="margin:12px 0 4px">This model has no sheets: the PDF can have its scenes as pages.</div>'),this.scenePages=!0;t.scenes.length&&e.appendChild(this.toggle("Scenes as pages too",this.scenePages,n=>this.scenePages=n))}busy(e){let t=document.getElementById("busy");if(!e){t.hidden=!0;return}t.hidden=!1,document.getElementById("busyWhat").textContent=e,document.getElementById("busyStage").textContent="",document.getElementById("busyBar").style.width="100%",document.getElementById("busyBar").style.opacity=.35}async run(e){let t=[];try{t=this.kind==="picture"?await this.pictures():await this.pdfs()}catch(s){this.busy(null),this.ui.toast("Export didn't work: "+(s&&s.message||s));return}if(this.busy(null),!t.length){this.ui.toast(this.kind==="pdf"?"Choose a sheet (or scenes as pages) first.":"Choose a scene first.");return}(e?await _o(t,this.c.name.replace(/\.akr$/i,"")):await oc(t))&&!e&&this.ui.toast(t.length===1?"Saved: "+t[0].name:`Saved ${t.length} files.`)}pixelSize(){let e=this.c.view,t=e.width<e.height;switch(this.size){case"screen":{let n=Math.min(window.devicePixelRatio||1,3);return[Math.round(e.width*n),Math.round(e.height*n)]}case"4k":return t?[2160,3840]:[3840,2160];case"a3":return t?[3508,4961]:[4961,3508];default:return t?[1080,1920]:[1920,1080]}}async pictures(){let e=this.c,t=e.view,n=e.summary,s=fr(e.name.replace(/\.akr$/i,"")),[r,a]=this.pixelSize(),o=this.png?"image/png":"image/jpeg",c=this.png?".png":".jpg",l={style:t.style,shadows:t.shadows,camera:yn(t.camera),realistic:t.realistic,sceneIndex:e.sceneIndex},h=[];if(this.what==="view")h.push({name:s+(e.sceneIndex>=0?" - "+fr(n.scenes[e.sceneIndex].name):""),scene:-1});else{let d=this.what==="all"?n.scenes.map((f,g)=>g):[...this.scenes].sort((f,g)=>f-g);for(let f of d)h.push({name:s+" - "+fr(n.scenes[f].name),scene:f})}let u=[];try{for(let d=0;d<h.length;d++){let f=h[d];this.busy(`Making ${h.length>1?`picture ${d+1} of ${h.length}`:"the picture"} (${r} \xD7 ${a})\u2026`),await new Promise(T=>setTimeout(T,30)),f.scene>=0&&await this.ui.applyScene(e,f.scene,{animate:!1});let g=this.look,x=t.style;g==="realistic"&&(t.realistic=!0),g==="hidden"&&(t.style={...x,faces:"HiddenLine",xray:!1,edges:!0}),t._materialsKey=null,t.applyStyle();let p=yn(t.camera),m=t.picture(p,r,a,{adjustPortrait:this.size==="screen"});if(this.withMeasurements&&e.measure.items.length&&f.scene<0){let T=t.threeCamera(p,r/a,this.size==="screen");e.measure.drawOn(m.getContext("2d"),T,r,a)}t.style=x,t.realistic=l.realistic,t._materialsKey=null,t.applyStyle();let M=await new Promise(T=>m.toBlob(T,o,.92));u.push({name:f.name+c,blob:M})}}finally{h.some(d=>d.scene>=0)&&await this.ui.restoreAfter(e,l)}return u}async pdfs(){let e=this.c,t=e.view,n=e.summary,s=fr(e.name.replace(/\.akr$/i,"")),r=n.sheets.filter(h=>this.sheetIds.has(h.id)).map(h=>h.id),a=150;if(!r.length&&!(this.scenePages&&n.scenes.length))return[];let o={style:t.style,shadows:t.shadows,camera:yn(t.camera),realistic:t.realistic,sceneIndex:e.sceneIndex},c=[],l=async()=>{if(this.scenePages)try{for(let h=0;h<n.scenes.length;h++){this.busy(`Drawing scene ${h+1} of ${n.scenes.length}\u2026`),await this.ui.applyScene(e,h,{animate:!1});let u=t.picture(yn(t.camera),2480,1754),d=await new Promise(f=>u.toBlob(f,"image/jpeg",.9));await this.engine.call("AddPicturePage",n.scenes[h].name,new Uint8Array(await d.arrayBuffer()),2480,1754)}}finally{await this.ui.restoreAfter(e,o)}};try{if(this.onePdf||!r.length){for(let u=0;u<r.length;u++){let d=n.sheets.find(f=>f.id===r[u]);this.busy(`Drawing ${d.number||d.title} (${u+1} of ${r.length})\u2026`),await this.ui.drawSheetPictures(e,r[u],a,!0)}await l(),this.busy("Writing the PDF\u2026");let h=await this.engine.call("PlotPdf",r.join(","),a,s);c.push({name:s+(r.length?" - Sheets":" - Scenes")+".pdf",blob:new Blob([h],{type:"application/pdf"})})}else for(let h=0;h<r.length;h++){let u=n.sheets.find(f=>f.id===r[h]);this.busy(`Plotting ${u.number||u.title} (${h+1} of ${r.length})\u2026`),await this.ui.drawSheetPictures(e,r[h],a,!0),h===r.length-1&&await l();let d=await this.engine.call("PlotPdf",r[h],a,(u.number?u.number+" ":"")+u.title);c.push({name:fr((u.number?u.number+" ":"")+u.title)+".pdf",blob:new Blob([d],{type:"application/pdf"})})}}finally{await this.engine.call("ForgetPictures").catch(()=>{}),await this.engine.call("ClearPicturePages").catch(()=>{}),e.sheets&&e.sheets.drawings.clear()}return c}};function n_(i,e){let t=[["A0",841,1189],["A1",594,841],["A2",420,594],["A3",297,420],["A4",210,297]];for(let[n,s,r]of t)if(Math.abs(Math.min(i,e)-s)<2&&Math.abs(Math.max(i,e)-r)<2)return n;return Math.round(i)+"\xD7"+Math.round(e)}var To=document.getElementById("app"),ze=null;function Ju(){return ze=new xr("worker.js"),ze.ready.catch(()=>{}),ze}Ju();function ae(i,e=document){return e.querySelector(i)}function Qe(i){let e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstElementChild}var $u=null;function fi(i,e=2600){let t=ae(".toast");t||(t=Qe('<div class="toast"></div>'),document.body.appendChild(t)),t.textContent=i,t.hidden=!1,clearTimeout($u),$u=setTimeout(()=>t.hidden=!0,e)}function i_(i){return i>=1e9?(i/1e9).toFixed(1)+" GB":(i/1e6).toFixed(1)+" MB"}function s_(i){let e=new Date(i),t=new Date,n=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});if(e.toDateString()===t.toDateString())return"Today, "+n;let s=new Date(t);return s.setDate(t.getDate()-1),e.toDateString()===s.toDateString()?"Yesterday":e.toLocaleDateString([],{day:"numeric",month:"short",year:e.getFullYear()===t.getFullYear()?void 0:"numeric"})}function pi(i,e,t){return i+" "+(i===1?e:t)}function r_(){let i=navigator.deviceMemory||4;return i>=8?8e6:i>=6?5e6:i>=4?3e6:15e5}function a_(i){return!i.renderer.capabilities.isWebGL2||(navigator.deviceMemory||4)<3?!1:i.maxSize>=4096}function xs(){Ku(),To.innerHTML="";let i=Qt?"In WhatsApp, Gmail or My Files, tap <b>Share</b> on an .akr and choose <b>Akar</b> to open it here.":/iPhone|iPad|Android/i.test(navigator.userAgent)?"Save an .akr to Files or Drive, then open it here with <b>Open a model</b>.":"Drop an .akr on this page, or use <b>Open a model</b>.",e=Qe(`
    <div id="home" class="screen">
      <div class="home-head">${Ru}</div>
      <div class="home-body">
        <button class="open-big" id="pick">
          <span class="open-ic">${Ye("file",28)}</span>
          <span class="open-text"><span class="t">Open a model</span><span class="s">.akr files saved in Akar on your PC: from the phone, Google Drive or OneDrive</span></span>
        </button>
        <div class="sec-head"><h3>Recent</h3><span class="sm" id="recentCount">Kept on this phone</span></div>
        <div id="recents"><div class="empty">\u2026</div></div>
        <div class="card tipcard"><span class="tip-ic">${Ye("share",19)}</span><span>${i}</span></div>
        <button class="devby" id="devby" aria-label="Developed by Tesseract Studio: about Akar">
          <span class="devby-t">Developed by ${Ye("chev",16)}</span>
          <img src="brand/tesseract-logo.png" alt="Tesseract, Design | Build">
        </button>
        <div class="pstrip"><div class="p1"><div class="sm">Privacy</div><div>Models stay on this phone. Nothing is uploaded.</div></div>
          <div class="p2"><div class="sm">Version</div><b>${Mn}</b></div></div>
        <div class="credits">Made with open-source three.js and .NET. <button class="linkish" id="licences">Licences</button></div>
      </div>
      <input type="file" id="file" hidden>
    </div>`);To.appendChild(e);let t=ae("#file",e);ae("#pick",e).onclick=()=>t.click(),t.onchange=()=>{let n=t.files&&t.files[0];t.value="",n&&Di(n)},ae("#devby",e).onclick=Hu,ae("#licences",e).onclick=Vu,e.addEventListener("dragover",n=>{n.preventDefault(),ae(".drop",e)||e.appendChild(Qe('<div class="drop">Drop an .akr model to open it</div>'))}),e.addEventListener("dragleave",n=>{(n.target===e||n.target.classList.contains("drop"))&&ae(".drop",e)?.remove()}),e.addEventListener("drop",n=>{n.preventDefault(),ae(".drop",e)?.remove();let s=n.dataTransfer.files&&n.dataTransfer.files[0];s&&Di(s)}),mc(),Fu(n=>{_t||pc(n)})}async function mc(){let i=ae("#recents");if(!i)return;let e=await ic();if(!e.length){i.innerHTML='<div class="empty">Models you open are kept here, so they open again without a connection.</div>';return}i.innerHTML="";let t=ae("#recentCount");t&&(t.textContent=pi(e.length,"model","models")+", kept on this phone");for(let n of e){let s=n.thumb?URL.createObjectURL(n.thumb):"",r=Qe(`
      <div class="card recent" role="button" tabindex="0">
        <div class="thumb" style="${s?`background-image:url(${s})`:""}"></div>
        <div class="meta"><div class="name">${Ve(n.name.replace(/\.akr$/i,""))}</div>
          <div class="sub">${i_(n.size)}${n.scenes?" \xB7 "+pi(n.scenes,"scene","scenes"):""}${n.sheets?" \xB7 "+pi(n.sheets,"sheet","sheets"):""}</div>
          <div class="sub">${s_(n.opened)}</div></div>
        <button class="ib more" aria-label="More">${Ye("more",22,'style="stroke-width:3"')}</button>
      </div>`);r.onclick=async a=>{if(!a.target.closest(".more"))try{let o=await rc(n.id);if(!o)throw new Error("gone");Di(o,n.name,n.id)}catch{fi("That model isn't on the phone any more."),await go(n.id).catch(()=>{}),mc()}},ae(".more",r).onclick=a=>{a.stopPropagation(),mr(a.currentTarget,[["Open",()=>r.click()],["Remove from this phone",async()=>{await go(n.id),mc()}]])},i.appendChild(r)}}function o_(i,e){let t=Qe('<div class="scrim" style="background:#0004;display:flex;align-items:flex-end"></div>'),n=Qe(`<div class="panel" style="position:relative;max-height:none;width:100%"><div class="grab"></div>
    <div class="panel-body"><div class="h2">${Ve(i)}</div><p class="sm" style="font-size:14px">${Ve(e)}</p>
    <button class="sbtn" style="width:100%">OK</button></div></div>`);t.appendChild(n),document.body.appendChild(t),t.onclick=s=>{(s.target===t||s.target.closest("button"))&&t.remove()},dr(n,[n],{from:s=>!!s.closest(".grab, .h2"),onClose:()=>t.remove()})}function mr(i,e){let t=Qe('<div class="scrim"></div>'),n=Qe('<div class="menu"></div>');for(let[r,a]of e){if(!r)continue;let o=Qe("<button></button>");o.textContent=r,o.onclick=()=>{t.remove(),n.remove(),a()},n.appendChild(o)}t.onclick=()=>{t.remove(),n.remove()},document.body.appendChild(t),document.body.appendChild(n);let s=i.getBoundingClientRect();n.style.top=Math.min(window.innerHeight-n.offsetHeight-8,s.bottom+4)+"px",n.style.right=Math.max(8,window.innerWidth-s.right)+"px"}var _t=null,Dn={};function Ku(){if(!_t)return;let i=_t;_t=null,i.closed=!0,i.measure?.dispose(),i.view?.clear(),i.view?.renderer.dispose(),i.view?.renderer.forceContextLoss(),window.removeEventListener("resize",i.onResize),ze.call("Close").catch(()=>{})}function l_(i){To.innerHTML="";let e=Qe(`
    <div id="model" class="screen immersive">
      <header class="topbar">
        <button class="ib" id="back" aria-label="Back">${Ye("back")}</button>
        <div class="titles"><div class="t1" id="title"></div><div class="t2" id="subtitle"></div></div>
        <button class="ib" id="tagsBtn" aria-label="Tags">${Ye("layers",21)}</button>
        <button class="ib" id="moreBtn" aria-label="More">${Ye("more",22,'style="stroke-width:3"')}</button>
      </header>
      <div class="stage" id="stage">
        <canvas id="view"></canvas>
        <svg class="overlay" id="overlay"></svg>
        <div class="labels" id="labels"></div>
        <div class="status-chip" id="status" hidden></div>
        <div class="undo-pill" id="undoPill"><button class="ib" id="undoBtn" aria-label="Undo" disabled>${Ye("undo")}</button><span class="undo-sep" aria-hidden="true"></span><button class="ib" id="redoBtn" aria-label="Redo" disabled>${Ye("redo")}</button></div>
        <div class="float-back"><button class="fab" id="back2" aria-label="Back">${Ye("back")}</button><div class="name" id="name2"></div></div>
        <div class="fabs" id="fabs">
          <button class="fab" id="fitBtn" aria-label="Fit the model">${Ye("fit")}</button>
          <button class="fab" id="viewsBtn" aria-label="Views">${Ye("views")}</button>
          <button class="fab" id="walkBtn" aria-label="Look around from eye height">${Ye("walk")}</button>
        </div>
        <div class="strip" id="strip"></div>
        <div class="panel away" id="panel"><button class="grab" id="grab" aria-label="Close"></button><div class="panel-body" id="panelBody"></div></div>
        <div class="busy" id="busy"><div class="busy-box"><div class="what" id="busyWhat"></div><div class="bar"><div id="busyBar"></div></div><div class="stage-name" id="busyStage"></div></div></div>
      </div>
      <nav class="tabs" id="tabs">
        ${[["scenes","Scenes","scenes"],["styles","Styles","styles"],["measure","Measure","tape"],["sheets","Sheets","sheets"],["export","Export","share"]].map(([t,n,s])=>`<button data-tab="${t}"><span class="pill">${Ye(s)}</span>${n}</button>`).join("")}
      </nav>
    </div>`);return To.appendChild(e),ae("#title").textContent=i.replace(/\.akr$/i,""),ae("#name2").textContent=i.replace(/\.akr$/i,""),ae("#back").onclick=()=>Eo(),ae("#back2").onclick=()=>Eo(),e}function Eo(){if(_t&&_t.sheets&&_t.sheets.open){_t.sheets.viewer?_t.sheets.list():_t.sheets.close();return}if(_t&&_t.tab){hn(_t,null);return}xs()}window.addEventListener("popstate",()=>{_t&&(Eo(),_t&&history.pushState({model:!0},""))});function Li(i,e=null,t=""){let n=ae("#busy");if(n){if(i===!1){n.hidden=!0;return}n.hidden=!1,ae("#busyWhat").textContent=i,ae("#busyStage").textContent=t,ae("#busyBar").style.width=e==null?"100%":Math.round(e*100)+"%",ae("#busyBar").style.opacity=e==null?.35:1}}async function Di(i,e=i.name,t=null){if(!e.toLowerCase().endsWith(".akr")){fi("That isn't an .akr model. Akar for phones opens models saved in Akar on the PC.");return}Ku(),l_(e),history.pushState({model:!0},"");let n={name:e,file:i,id:t,closed:!1,sceneIndex:-1};_t=n,Li("Opening "+e.replace(/\.akr$/i,""),0,"Reading the file");try{await ze.ready}catch{Li(!1),Ao("Akar couldn't start in this browser. It needs a recent Chrome, Safari, Edge or Firefox.");return}if(t?ur(t,{opened:Date.now()}):n.id=await sc(i,{name:e}),n.closed)return;let s;Dn.t0=performance.now();try{let r=await i.arrayBuffer();ze.onprogress=(a,o)=>{_t===n&&Li("Opening "+e.replace(/\.akr$/i,""),o*.85,a)},Dn.read=performance.now()-Dn.t0,s=await ze.call("open",r,r_()),Dn.open=performance.now()-Dn.t0}catch(r){s={ok:!1,error:/memory|abort|terminated|exit\(/i.test(String(r))?gc:"The model couldn't be opened: "+r.message},Ju()}finally{ze.onprogress=null}if(!n.closed){if(!s||!s.ok){Li(!1),Ao(s?/too big/i.test(s.error)?gc:s.error:"The model couldn't be opened.");return}n.summary=s,await c_(n)}}var gc="This model is too big for a phone to open. On the PC, save a copy with just what you want to show (one floor, say), and open that.";function Ao(i){let e=ae("#stage");e&&(e.appendChild(Qe(`<div class="busy"><div class="busy-box"><div class="what">${Ve(i)}</div>
    ${i===gc?"":'<p class="sm">If it opens in Akar on the PC, try saving it again there.</p>'}
    <button class="sbtn" id="failBack" style="margin-top:12px">Back</button></div></div>`)),ae("#failBack").onclick=()=>xs())}async function c_(i){let e=i.summary,t=ae("#view"),n;try{n=new po(t)}catch{Li(!1),Ao("This phone's browser can't draw 3D (WebGL 2 is needed).");return}i.view=n,i.realisticOk=a_(n),n.setBounds(e.bounds),t.addEventListener("webglcontextlost",h=>{h.preventDefault(),_t===i&&Ao("The phone's graphics were reset. Open the model again.")});let s=e.batches.length,r=0;for(let h=0;h<s;h++){if(i.closed)return;let u=await ze.call("batch",h),d=e.batches[h];n.addBatch(u,d,d.material>=0?e.materials[d.material]:null),r++,Li("Opening "+i.name.replace(/\.akr$/i,""),.85+.12*(r/s),"Drawing the model")}Dn.batches=performance.now()-Dn.t0,n.setEdges(await ze.call("edges"));let[a,o]=await Promise.all([ze.call("FaceVisibility"),ze.call("EdgeVisibility")]);if(i.closed)return;n.setVisibility(a,o),i.style=e.style,i.modelStyle=e.style,i.shadows=e.shadows,i.lookChoice=null,n.setStyle(e.style,e.shadows);let c=e.camera||{target:[0,0,0],distance:1e4,yaw:-2.356,pitch:.6,fov:35,perspective:!0};n.setCamera(c);let l=new mo(n,t);i.nav=l,e.camera||l.fit(),await _c(i),e.materials.forEach((h,u)=>{h.tileWidth&&ze.call("Texture",u).then(d=>{!i.closed&&d&&d.length&&n.setTexture(u,new Blob([d]),h)},()=>{})}),Dn.shown=performance.now()-Dn.t0,i.onResize=()=>n.resize(),window.addEventListener("resize",i.onResize),new ResizeObserver(()=>n.resize()).observe(t),Li(!1),i.measure=new yo(i,ze,{$:ae,toast:fi}),i.sheets=new Mo(i,ze,{$:ae,toast:fi,h:Qe,menu:mr,openViewInModel:E_}),i.exporter=new So(i,ze,{$:ae,toast:fi,h:Qe,menu:mr,applyScene:Co,restoreAfter:g_,drawSheetPictures:_s}),i.history=new vo(i,{engine:ze,refreshVisibility:Ni,refreshSection:_c,moveCamera:xc,after:()=>h_(i),sync:()=>{i.panelSync?.(),Sn(i)}}),ae("#undoBtn").onclick=()=>i.history.undo().then(()=>Sn(i)),ae("#redoBtn").onclick=()=>i.history.redo().then(()=>Sn(i)),l.onMoveEnd=()=>i.history.record(),i.panelDrag=dr(ae("#panel"),[ae("#panel")],{minimize:!0,from:h=>!!h.closest(".grab, .panel-head"),onClose:()=>hn(i,null)}),n.onframe=h=>{i.measure.follow(h),v_(i,h)},l.onTap=(h,u)=>y_(i,h,u),l.onMove=()=>{i.playing&&vc(i)},d_(i),x_(i),Sn(i),i.history.record({doc:!0}),e.leftOut>0&&u_(`A lighter copy, so it runs smoothly on this phone: ${pi(e.leftOut,"small object","small objects")} left out.`),setTimeout(()=>{if(!i.closed)try{n.picture(n.camera,344,256).toBlob(u=>ur(i.id,{thumb:u,scenes:e.scenes.length,sheets:e.sheets.length,opened:Date.now()}),"image/jpeg",.82)}catch{ur(i.id,{scenes:e.scenes.length,sheets:e.sheets.length})}},1500)}function h_(i){let e=ae("#undoBtn"),t=ae("#redoBtn");!e||!i.history||(e.disabled=!i.history.canUndo,t.disabled=!i.history.canRedo)}function u_(i){let e=Qe(`<div class="banner"><span>${Ve(i)}</span><button class="ib" style="width:26px;height:26px" aria-label="Close">${Ye("close",16)}</button></div>`);ae("button",e).onclick=()=>e.remove(),ae("#stage").appendChild(e),setTimeout(()=>e.remove(),12e3)}function Sn(i){let e=i.summary;if(i.sheets&&i.sheets.open)return;let t=i.sceneIndex>=0?"Scene: "+e.scenes[i.sceneIndex].name:e.scenes.length?pi(e.scenes.length,"scene","scenes"):"";i.tab==="measure"&&(t="Measuring"),ae("#subtitle").textContent=t;let n=wo(i),s=i.view.shadows,r=n;s&&s.on&&!i.view.realistic&&(r+=" \xB7 Shadows "+(s.time||"").slice(11,16)),i.view.realistic&&(r+=" \xB7 "+(s.time||"").slice(11,16));let a=ae("#status");a.textContent=r,a.hidden=i.tab==="measure"}function wo(i){if(i.view.realistic)return"Realistic";let e=i.view.style||{};return i.lookChoice&&i.lookChoice.startsWith("model:")?i.lookChoice.slice(6):e.xray?"X-ray":{Wireframe:"Wireframe",HiddenLine:"Hidden line",Shaded:"Shaded",ShadedWithTextures:"Textured",Monochrome:"Monochrome"}[e.faces]||"Textured"}function d_(i){let e=i.summary;for(let n of document.querySelectorAll("#tabs button"))n.onclick=()=>hn(i,i.tab===n.dataset.tab?null:n.dataset.tab);ae("#tagsBtn").onclick=()=>T_(i),i.rewireMore=()=>ae("#moreBtn").onclick=n=>f_(i,n.currentTarget),i.rewireMore(),ae("#fitBtn").onclick=()=>i.nav.fit(),ae("#viewsBtn").onclick=n=>mr(n.currentTarget,[["Iso",()=>i.nav.standard("iso")],["Top",()=>i.nav.standard("top")],["Front (South)",()=>i.nav.standard("front")],["Back (North)",()=>i.nav.standard("back")],["Left (West)",()=>i.nav.standard("left")],["Right (East)",()=>i.nav.standard("right")],[i.view.camera.perspective?"Parallel projection":"Perspective",()=>{i.view.camera.perspective=!i.view.camera.perspective,i.view.camera.twoPoint=!1,i.view.requestFrame(),i.history.record()}]]),ae("#walkBtn").onclick=()=>{let n=i.nav.mode!=="look";if(i.nav.mode=n?"look":"orbit",ae("#walkBtn").classList.toggle("on",n),n){let s=i.view.camera,r=Ln(s),a=i.view.bounds[2]>-1?0:i.view.bounds[2];if(r.eye.z>a+3e3||s.pitch>.5){let o=new D(r.eye.x,r.eye.y,a+1600);s.pitch=0,s.distance=3e3,s.perspective=!0;let c=new D(Math.cos(s.yaw),Math.sin(s.yaw),0),l=o.clone().addScaledVector(c,-s.distance);s.target=[l.x,l.y,l.z],i.view.requestFrame()}fi("Look around: one finger turns, two fingers walk."),i.history.record()}};let t=ae("#strip");t.innerHTML="",e.scenes.forEach((n,s)=>{let r=Qe('<button class="chip"></button>');r.textContent=n.name,r.onclick=()=>ju(i,s),t.appendChild(r)}),t.hidden=!e.scenes.length,ae("#tabs [data-tab=sheets]").disabled=!1}function hn(i,e){i.tab==="measure"&&e!=="measure"&&i.measure.stop(),i.tab=e,i.panelSync=null;for(let s of document.querySelectorAll("#tabs button"))s.classList.toggle("on",s.dataset.tab===e);let t=ae("#panel"),n=ae("#panelBody");if(ae("#strip").hidden=!!e||!i.summary.scenes.length,ae("#fabs").hidden=e==="measure",ae("#stage").classList.toggle("measuring",e==="measure"),e!=="sheets"&&i.sheets.open&&i.sheets.close(!0),!e){t.classList.add("away"),Sn(i);return}n.innerHTML="",i.panelDrag?.reset(),t.classList.remove("away"),e==="scenes"?p_(i,n):e==="styles"?Qu(i,n):e==="measure"?i.measure.start(n):e==="sheets"?(t.classList.add("away"),i.sheets.show()):e==="export"&&i.exporter.show(n),Sn(i)}function f_(i,e){ze.call("AnythingHidden").then(t=>{mr(e,[t?["Show everything again",async()=>{await ze.call("UnhideAll"),await Ni(i),i.history.record({doc:!0})}]:null,["Fit the model",()=>i.nav.fit()],[i.view.sectionOn?"Section cuts off":"Section cuts on",()=>{i.view.sectionOn=!i.view.sectionOn,i.view.requestFrame(),i.history.record()}],["About this model",()=>{let n=i.summary;o_(i.name.replace(/\.akr$/i,""),`${n.faces.toLocaleString()} faces, ${n.edges.toLocaleString()} edges, ${pi(n.scenes.length,"scene","scenes")}, ${pi(n.sheets.length,"sheet","sheets")}, ${pi(n.tags.length,"tag","tags")}. Units: ${n.units}.`+(n.leftOut?` A lighter copy: ${n.leftOut} small objects (${n.leftOutTriangles.toLocaleString()} triangles) left out.`:""))}],["Close the model",()=>xs()]].filter(Boolean))})}function p_(i,e){let t=i.summary;if(e.appendChild(Qe(`<div class="panel-head"><div class="h2">Scenes <span class="sm" style="font-size:14px">${t.scenes.length}</span></div>
    ${t.scenes.length>1?`<button class="small-btn" id="play">${Ye(i.playing?"stop":"play",16)} ${i.playing?"Stop":"Play"}</button>`:""}</div>`)),!t.scenes.length){e.appendChild(Qe('<div class="empty">This model has no scenes. Scenes made in Akar on the PC show here.</div>'));return}let n=Qe('<div class="grid2"></div>');t.scenes.forEach((r,a)=>{let o=Qe(`<button class="tile ${i.sceneIndex===a?"on":""}"><div class="pic"></div><div class="cap"></div></button>`);ae(".cap",o).textContent=r.name,o.onclick=()=>{ju(i,a);for(let c of n.children)c.classList.remove("on");o.classList.add("on")},n.appendChild(o),r.thumbnail?ze.call("SceneThumbnail",a).then(c=>{c&&c.length&&(ae(".pic",o).style.backgroundImage=`url(${URL.createObjectURL(new Blob([c]))})`)},()=>{}):m_(i,a).then(c=>{c&&(ae(".pic",o).style.backgroundImage=`url(${c})`)})}),e.appendChild(n),i.panelSync=()=>{i.tab!=="scenes"||!n.isConnected||Array.from(n.children).forEach((r,a)=>r.classList.toggle("on",i.sceneIndex===a))};let s=ae("#play",e);s&&(s.onclick=()=>i.playing?vc(i):__(i))}var bo=[];async function m_(i,e){let t=i.summary.scenes[e];if(!t.camera)return null;if(i.thumbs=i.thumbs||{},i.thumbs[e])return i.thumbs[e];await new Promise(n=>bo.push(n)===1&&n());try{let n=i.view.style;t.style&&i.view.setStyle(t.style);let s=i.view.picture(t.camera,320,200);t.style&&i.view.setStyle(n);let r=await new Promise(a=>s.toBlob(a,"image/jpeg",.8));return i.thumbs[e]=URL.createObjectURL(r)}finally{bo.shift(),bo.length&&bo[0]()}}async function Co(i,e,{animate:t=!0}={}){let n=await ze.call("ApplyScene",e);if(i.closed||!n.ok)return null;i.sceneIndex=e,i.lookChoice?(i.view.shadows=n.shadows,i.view.applyStyle()):i.view.setStyle(n.style,n.shadows),i.modelStyle=n.style,await Ni(i),await _c(i,n.sections),n.camera&&(t?await xc(i,n.camera,(i.summary.animation.transition||1.2)*1e3):i.view.setCamera(n.camera)),Sn(i);for(let[s,r]of[...document.querySelectorAll("#strip .chip")].entries())r.classList.toggle("on",s===e);return n}async function ju(i,e){i.playing&&vc(i),await Co(i,e),i.history.record({doc:!0})}async function g_(i,e){e.sceneIndex>=0&&await Co(i,e.sceneIndex,{animate:!1}),i.view.setStyle(e.style,e.shadows),i.view.setCamera(e.camera),i.view.realistic=e.realistic,i.view.applyStyle()}function xc(i,e,t){let n=yn(i.view.camera),s=yn(e);if(t<=0)return i.view.setCamera(s),Promise.resolve();let r=s.yaw-n.yaw;r=((r+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;let a=performance.now();return i.view.camera.perspective=s.perspective,new Promise(o=>{let c=()=>{if(i.closed)return o();let l=Math.min(1,(performance.now()-a)/t),h=l<.5?2*l*l:1-Math.pow(-2*l+2,2)/2,u=i.view.camera;u.target=n.target.map((d,f)=>d+(s.target[f]-d)*h),u.distance=Math.exp(Math.log(n.distance)+(Math.log(s.distance)-Math.log(n.distance))*h),u.yaw=n.yaw+r*h,u.pitch=n.pitch+(s.pitch-n.pitch)*h,u.fov=n.fov+(s.fov-n.fov)*h,u.roll=(n.roll||0)+((s.roll||0)-(n.roll||0))*h,u.twoPoint=l>=1?s.twoPoint:!1,i.view.requestFrame(),l<1?requestAnimationFrame(c):(i.view.setCamera(s),o())};requestAnimationFrame(c)})}async function __(i){let e=i.summary,t=e.scenes.map((r,a)=>({x:r,i:a})).filter(r=>r.x.animated!==!1),n=t.length?t:e.scenes.map((r,a)=>({x:r,i:a}));i.playing=!0,i.tab==="scenes"&&hn(i,null),fi("Playing the scenes. Touch the view to stop.");let s=Math.max(0,n.findIndex(r=>r.i===i.sceneIndex)+1);for(;i.playing&&!i.closed;){let{i:r}=n[s%n.length];await Co(i,r),await new Promise(a=>setTimeout(a,(e.animation.delay||1)*1e3)),s++}}function vc(i){i.playing&&(i.playing=!1,i.history.record({doc:!0}))}async function Ni(i){let[e,t]=await Promise.all([ze.call("FaceVisibility"),ze.call("EdgeVisibility")]);i.closed||i.view.setVisibility(e,t)}async function _c(i,e=i.summary.sections){let t=(e||[]).find(n=>n.active&&!n.inGroup);if(i.view.setSectionPlane(t||null),t){let n=await ze.call("SectionCut");i.closed||i.view.setSection(n.buffer||n)}else i.view.clearSection()}async function x_(i){let e=i.summary.annotations||[],t=[];i.annotationLabels=[];let n=ae("#labels");for(let s of e)if(s.kind==="dimension"){t.push(...s.a,...s.la,...s.b,...s.lb,...s.la,...s.lb);let r=s.la.map((a,o)=>(a+s.lb[o])/2);i.annotationLabels.push({p:new D(...r),text:s.text})}else s.kind==="radial"?(t.push(...s.a,...s.b,...s.b,...s.t),i.annotationLabels.push({p:new D(...s.t),text:s.text})):s.kind==="text"&&(s.leader&&t.push(...s.a,...s.t),i.annotationLabels.push({p:new D(...s.t),text:s.text}));if(i.view.annotations.clear(),t.length){let s=new It;s.setAttribute("position",new Rt(t,3)),i.view.annotations.add(new Gn(s,new Rn({color:1776929})))}for(let s of i.annotationLabels)s.el=Qe('<div class="alabel"></div>'),s.el.textContent=s.text,n.appendChild(s.el)}function v_(i,e){if(!i.annotationLabels)return;let t=i.annotationLabels.length>150;for(let n of i.annotationLabels){let s=i.view.toScreen(n.p,e);if(!s||t&&i.view.moving){n.el.style.display="none";continue}n.el.style.display="",n.el.style.left=s.x+"px",n.el.style.top=s.y+"px"}}async function y_(i,e,t){if(i.tab==="measure")return;let n=i.view.pick(e,t);if(!n){i.tab==="info"&&hn(i,null),pr(i);return}let s=await ze.call("Info",n.face);i.closed||!s||M_(i,s)}function M_(i,e){hn(i,"info");let t=ae("#panelBody"),n=(e.path||[]).join(" / "),s=[e.kind,e.definition&&e.definition!==e.name?e.definition:null,e.copies>1?`(${e.copies} copies)`:null].filter(Boolean).join(" \xB7 ");t.innerHTML="",t.appendChild(Qe(`<div>
    <div class="panel-head"><div><div class="h2">${Ve(e.name)}</div><div class="sm">${Ve(s)}${n?" \xB7 "+Ve(n):""}</div></div>
      <button class="ib" id="infoClose" aria-label="Close">${Ye("close")}</button></div>
    <div class="info-grid">
      ${e.tag?`<div class="k">Tag</div><div>${Ve(e.tag)}</div>`:""}
      ${e.material?`<div class="k">Material</div><div><span class="swatch" style="background:${Ve(e.material.color)}"></span>${Ve(e.material.name)}</div>`:""}
      ${e.size?`<div class="k">Size</div><div>${Ve(e.size)}</div>`:""}
      ${e.faceArea?`<div class="k">Face area</div><div>${Ve(e.faceArea)}</div>`:""}
    </div>
    <div class="row" style="gap:8px;flex-wrap:wrap">
      ${e.object>0?`<button class="small-btn" id="iso">${e.isolated?"Show all":"Isolate"}</button><button class="small-btn" id="hide">Hide</button>`:""}
      ${e.box?'<button class="small-btn" id="zoom">Zoom to it</button>':""}
    </div></div>`)),ae("#infoClose").onclick=()=>{hn(i,null),pr(i)};let r=ae("#iso");r&&(r.onclick=async()=>{await ze.call("Isolate",e.isolated?-1:e.object),await Ni(i),i.history.record({doc:!0}),hn(i,null),pr(i),e.isolated||fi("Only this shows. More (\u22EE) > Show everything again.")});let a=ae("#hide");a&&(a.onclick=async()=>{await ze.call("SetObjectHidden",e.object,!0),await Ni(i),i.history.record({doc:!0}),hn(i,null),pr(i)});let o=ae("#zoom");o&&(o.onclick=()=>i.nav.fit(e.box)),S_(i,e.box)}function S_(i,e){if(pr(i),!e)return;let[t,n,s,r,a,o]=e,c=(f,g,x)=>[f,g,x],l=[c(t,n,s),c(r,n,s),c(r,a,s),c(t,a,s),c(t,n,o),c(r,n,o),c(r,a,o),c(t,a,o)],h=[0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7],u=new It;u.setAttribute("position",new Rt(h.flatMap(f=>l[f]),3));let d=new Gn(u,new Rn({color:3108822,depthTest:!1}));d.renderOrder=10,i.highlight=d,i.view.overlay.add(d),i.view.requestFrame()}function pr(i){i.highlight&&(i.view.overlay.remove(i.highlight),i.highlight.geometry.dispose(),i.highlight=null,i.view.requestFrame())}var b_=[["textured","Textured",i=>({...i,faces:"ShadedWithTextures",xray:!1})],["shaded","Shaded",i=>({...i,faces:"Shaded",xray:!1})],["realistic","Realistic",i=>({...i,faces:"ShadedWithTextures",xray:!1})],["hidden","Hidden line",i=>({...i,faces:"HiddenLine",xray:!1,edges:!0})],["wire","Wireframe",i=>({...i,faces:"Wireframe",xray:!1,edges:!0})],["xray","X-ray",i=>({...i,faces:i.faces==="Wireframe"||i.faces==="HiddenLine"?"ShadedWithTextures":i.faces,xray:!0})],["mono","Monochrome",i=>({...i,faces:"Monochrome",xray:!1})]];function Yu(i){return i.lookChoice?i.lookChoice:null}function Qu(i,e){let t=i.summary,n=i.view,s=n.shadows||{};e.appendChild(Qe(`<div class="panel-head"><div class="h2">Style</div><span class="sm" id="lookNow">${Ve(wo(i))} now</span></div>`));let r=Qe('<div class="grid3"></div>'),a=b_.map(([g,x,p])=>({id:g,name:x,make:p}));for(let g of t.styles||[])a.push({id:"model:"+g.name,name:g.name,make:()=>({...g.look}),model:!0});let o=[];for(let g of a){let x=g.id==="realistic",p=Qe(`<button class="tile"><div class="pic">${g.model?'<span class="badge">In the model</span>':""}${x&&i.realisticOk?'<span class="badge ok">This phone can</span>':""}</div><div class="cap"></div></button>`);ae(".cap",p).textContent=g.name,x&&!i.realisticOk&&p.classList.add("dim"),p.onclick=()=>{if(x&&!i.realisticOk){w_(i,e);return}i.lookChoice=g.id,n.realistic=x,n.setStyle(g.make(i.modelStyle||t.style));for(let m of o)m.t.classList.toggle("on",m.look===g);ae("#lookNow").textContent=wo(i)+" now",Sn(i),i.history.record()},o.push({t:p,look:g}),r.appendChild(p)}let c=Yu(i);for(let g of o)g.t.classList.toggle("on",c?g.look.id===c:g.look.id===Zu(i));e.appendChild(r);let l=0,h=()=>{if(l>=o.length||i.tab!=="styles"||i.closed)return;let g=n.style,x=n.realistic,{t:p,look:m}=o[l++];if(m.id==="realistic"&&!i.realisticOk){requestAnimationFrame(h);return}n.style=m.make(i.modelStyle||t.style),n.realistic=m.id==="realistic",n._materialsKey=null,n.applyStyle();let M=n.picture(n.camera,240,150);n.style=g,n.realistic=x,n._materialsKey=null,n.applyStyle(),M.style.cssText="width:100%;height:100%;display:block",ae(".pic",p).prepend(M),setTimeout(h,30)};setTimeout(h,250);let u=s.time?new Date(s.time+":00"):new Date,d=u.getHours()*60+u.getMinutes(),f=u.toLocaleDateString([],{day:"numeric",month:"short"});e.appendChild(Qe(`<div>
    <div class="opt-row" style="margin-top:10px"><span>Shadows</span><span class="row"><span class="sm" id="sunTime">${f} \xB7 ${String(u.getHours()).padStart(2,"0")}:${String(u.getMinutes()).padStart(2,"0")}</span><button class="tog ${s.on?"on":""}" id="shTog" aria-label="Shadows"></button></span></div>
    <div class="row" style="gap:10px"><span class="sm">6:00</span><input type="range" class="slider" id="sunSlider" min="360" max="1080" step="5" value="${Math.max(360,Math.min(1080,d))}"><span class="sm">18:00</span></div>
    <div class="opt-row"><span>Section cuts</span><button class="tog ${n.sectionOn&&n.sectionPlane?"on":""}" id="secTog" ${n.sectionPlane?"":"disabled"} aria-label="Section cuts"></button>
      <span style="margin-left:24px">Fog</span><button class="tog ${n.fogOn??(n.style.fog&&n.style.fog.on)?"on":""}" id="fogTog" aria-label="Fog"></button></div>
    <div class="sm" style="margin-top:6px">Viewing only: the model keeps its own styles. Scenes bring theirs.</div>
  </div>`)),ae("#shTog").onclick=g=>{let x=!g.currentTarget.classList.contains("on");g.currentTarget.classList.toggle("on",x),n.shadows={...n.shadows||{},on:x},n.applyStyle(),Sn(i),i.history.record()},ae("#sunSlider").onchange=()=>setTimeout(()=>i.history.record(),150),ae("#sunSlider").oninput=async g=>{let x=+g.target.value,p=Math.floor(x/60),m=x%60;ae("#sunTime").textContent=`${f} \xB7 ${String(p).padStart(2,"0")}:${String(m).padStart(2,"0")}`;let M=await ze.call("SunDirection",u.getFullYear(),u.getMonth()+1,u.getDate(),p,m),T=(n.shadows.time||"").slice(0,11)+String(p).padStart(2,"0")+":"+String(m).padStart(2,"0");n.shadows={...n.shadows,time:T},n.setSun(Array.from(M)),Sn(i)},ae("#secTog").onclick=g=>{n.sectionOn=!n.sectionOn,g.currentTarget.classList.toggle("on",n.sectionOn),n.requestFrame(),i.history.record()},ae("#fogTog").onclick=g=>{let x=!g.currentTarget.classList.contains("on");g.currentTarget.classList.toggle("on",x),n.fogOn=x,n.requestFrame(),i.history.record()},i.panelSync=()=>{if(i.tab!=="styles"||!e.isConnected||!ae("#lookNow",e))return;ae("#lookNow",e).textContent=wo(i)+" now";let g=Yu(i)||Zu(i);for(let m of o)m.t.classList.toggle("on",m.look.id===g);let x=n.shadows||{};ae("#shTog",e).classList.toggle("on",!!x.on),ae("#secTog",e).classList.toggle("on",!!(n.sectionOn&&n.sectionPlane)),ae("#fogTog",e).classList.toggle("on",!!(n.fogOn??(n.style.fog&&n.style.fog.on)));let p=/(\d\d):(\d\d)$/.exec(x.time||"");p&&(ae("#sunSlider",e).value=String(Math.max(360,Math.min(1080,+p[1]*60+ +p[2]))),ae("#sunTime",e).textContent=`${f} \xB7 ${p[1]}:${p[2]}`)}}function Zu(i){let e=i.view.style||{};return i.view.realistic?"realistic":e.xray?"xray":{Wireframe:"wire",HiddenLine:"hidden",Shaded:"shaded",ShadedWithTextures:"textured",Monochrome:"mono"}[e.faces]||"textured"}function w_(i,e){let t=i.summary;e.innerHTML="",e.appendChild(Qe(`<div>
    <div class="row" style="margin:6px 0 10px"><span class="ib" style="background:#f1f2f4">${Ye("image")}</span><div class="h2">Realistic isn't available on this phone</div></div>
    <p class="sm" style="font-size:14px">Its graphics can't draw the Realistic look smoothly.${t.renders.length?" You can still see the renders saved in this model, made on the PC.":""}</p>
    <div class="grid3" id="renders"></div>
    <div class="row" style="margin-top:12px"><button class="small-btn" id="backToStyles">Back to styles</button></div></div>`));let n=ae("#renders",e);for(let s of t.renders){let r=Qe('<button class="tile"><div class="pic"></div><div class="cap"></div></button>');ae(".cap",r).textContent=s.name||s.scene||"Render",ze.call("Render",s.id).then(a=>{if(a&&a.length){let o=URL.createObjectURL(new Blob([a]));ae(".pic",r).style.backgroundImage=`url(${o})`,r.onclick=()=>window.open(o,"_blank")}}),n.appendChild(r)}ae("#backToStyles",e).onclick=()=>{e.innerHTML="",Qu(i,e)}}async function T_(i){let e=Qe(`
    <div class="screen over" style="z-index:40">
      <header class="topbar"><button class="ib" id="tagsBack" aria-label="Back">${Ye("back")}</button>
        <div class="titles"><div class="t1">Tags</div><div class="t2">Viewing only: the model keeps its own</div></div>
        <button class="lnk" id="showAll">Show all</button></header>
      <div class="list" id="tagList"></div>
    </div>`);document.body.appendChild(e),ae("#tagsBack",e).onclick=()=>e.remove();let t=async()=>{let n=await ze.call("Tags"),s=ae("#tagList",e);if(s.innerHTML="",!n.tags.length){s.appendChild(Qe('<div class="empty">This model has no tags.</div>'));return}let r=n.tagFolders||[],a=[],o=(c,l)=>{a.push({folder:c,depth:l});for(let h of r.filter(u=>u.parent===c.name))o(h,l+1);for(let h of n.tags.filter(u=>u.folder===c.name))a.push({tag:h,depth:l+1})};for(let c of n.tags.filter(l=>!l.folder))a.push({tag:c,depth:0});for(let c of r.filter(l=>!l.parent))o(c,0);for(let c of a){let l=c.tag?c.tag.shown:c.folder.visible,h=Qe(`<div class="tag-row ${l?"":"off"} ${c.folder?"folder":""}" style="padding-left:${18+c.depth*26}px">
        ${c.tag?`<span class="sw" style="background:${Ve(c.tag.color)}"></span>`:Ye("folder",20)}
        <span class="nm"></span><button class="ib" aria-label="Show or hide">${Ye((c.tag?c.tag.visible:c.folder.visible)?"eye":"eyeoff")}</button></div>`);ae(".nm",h).textContent=c.tag?c.tag.name:c.folder.name,ae("button",h).onclick=async()=>{c.tag?await ze.call("SetTagShown",c.tag.name,!c.tag.visible):await ze.call("SetTagFolderShown",c.folder.name,!c.folder.visible),await Ni(i),i.history.record({doc:!0}),t()},s.appendChild(h)}};ae("#showAll",e).onclick=async()=>{await ze.call("ShowAllTags"),await Ni(i),i.history.record({doc:!0}),t()},t()}async function _s(i,e,t,n){let r=(await ze.call("SheetPictures",e,t,n)).pictures||[];if(!r.length)return 0;let a=i.view,o={style:a.style,shadows:a.shadows,realistic:a.realistic,faceFlags:a.faceFlags,edgeFlags:a.edgeFlags,sectionPlane:a.sectionPlane,sectionOn:a.sectionOn,fogOn:a.fogOn,edgesWanted:a.edgesWanted},c=await ze.call("SectionCut");try{for(let l of r){let[h,u,d]=await Promise.all([ze.call("WantedFaces",l.key),ze.call("WantedEdges",l.key),ze.call("WantedSection",l.key)]);a.realistic=!1,a.fogOn=null,a.edgesWanted=l.edges,a.setStyle(l.style,l.shadows),a.setVisibility(h,u),a.sectionOn=!0,a.setSectionPlane(l.section||null),l.section?a.setSection(d.buffer||d):a.clearSection();let f=a.picture(l.camera,l.width,l.height),g=await new Promise(p=>f.toBlob(p,"image/jpeg",n?.9:.85)),x=new Uint8Array(await g.arrayBuffer());await ze.call("PutPicture",l.key,x,l.width,l.height)}}finally{a.realistic=o.realistic,a.fogOn=o.fogOn,a.edgesWanted=o.edgesWanted,a.sectionOn=o.sectionOn,a.setStyle(o.style,o.shadows),a.setVisibility(o.faceFlags,o.edgeFlags),a.sectionPlane=o.sectionPlane,o.sectionPlane?a.setSection(c.buffer||c):a.clearSection(),a.requestFrame()}return r.length}function E_(i,e){i.sheets.close(),hn(i,null),i.lookChoice=null,i.view.realistic=!1,i.view.setStyle(e.style),xc(i,e.camera,600).then(()=>i.history.record()),Sn(i)}async function A_(){if("serviceWorker"in navigator&&location.protocol==="https:"&&!Qt&&navigator.serviceWorker.register("sw.js").catch(()=>{}),window.AkarAndroid&&window.AkarAndroid.pending){let i=window.AkarAndroid.pending();if(i)try{let e=JSON.parse(i),n=await(await fetch(e.url)).blob();xs(),Di(new File([n],e.name||"Model.akr"));return}catch{}}if(location.search.includes("shared=1")&&"caches"in window)try{let i=await caches.open("akar-shared"),e=await i.match("shared-file");if(e){let t=decodeURIComponent(e.headers.get("x-name")||"Model.akr"),n=await e.blob();await i.delete("shared-file"),history.replaceState(null,"",location.pathname),xs(),Di(new File([n],t));return}}catch{}"launchQueue"in window&&window.launchQueue.setConsumer(async i=>{if(i.files&&i.files.length){let e=await i.files[0].getFile();Di(e)}}),xs()}window.akarOpenShared=async(i,e)=>{let n=await(await fetch(i)).blob();Di(new File([n],e||"Model.akr"))};window.akarBack=()=>{let i=document.querySelectorAll(".over, .scrim");return i.length?(i[i.length-1].remove(),document.querySelector(".menu")?.remove(),!0):_t?(Eo(),!0):!1};window.akarDebug={engine:()=>ze,current:()=>_t,store:ac,timings:Dn,drawSheetPictures:_s};A_();export{ae as $,Mn as VERSION,Co as applyScene,_t as current,_s as drawSheetPictures,mr as menu,Ni as refreshVisibility,g_ as restoreAfter,hn as selectTab,fi as toast};
