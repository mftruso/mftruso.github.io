import{D as S,$ as K,H as z,A as M}from"./app.config.c27f6a49.js";import{u as N}from"./cookie.1cad474a.js";import{g as W,a as O,e as A,s as T,b as j,w as H,d as R,c as J}from"./query.c3f7607a.js";import{c as q,p as B}from"./_commonjsHelpers.0ee3bad0.js";const G=()=>{const n=new Map;return{hasItem(r){return n.has(r)},getItem(r){return n.get(r)||null},setItem(r,e){n.set(r,e)},removeItem(r){n.delete(r)},getKeys(){return Array.from(n.keys())},clear(){n.clear()},dispose(){n.clear()}}};function Z(n){return!n||typeof n.then!="function"?Promise.resolve(n):n}function p(n,...r){try{return Z(n(...r))}catch(e){return Promise.reject(e)}}function k(n){const r=typeof n;return n===null||r!=="object"&&r!=="function"}function F(n){return k(n)?n+"":JSON.stringify(n)}const Q=()=>{const n=new Map;return{hasItem(r){return n.has(r)},getItem(r){return n.get(r)||null},setItem(r,e){n.set(r,e)},removeItem(r){n.delete(r)},getKeys(){return Array.from(n.keys())},clear(){n.clear()},dispose(){n.clear()}}},V=["hasItem","getItem","setItem","removeItem","getMeta","setMeta","removeMeta","getKeys","clear","mount","unmount"];function b(n,r){if(r=I(r),!r)return n;const e={...n};for(const a of V)e[a]=(i="",...s)=>n[a](r+i,...s);return e.getKeys=(a="",...i)=>n.getKeys(r+a,...i).then(s=>s.map(o=>o.slice(r.length))),e}function g(n){return n?n.replace(/[/\\]/g,":").replace(/:+/g,":").replace(/^:|:$/g,""):""}function I(n){return n=g(n),n?n+":":""}function X(n={}){const r={mounts:{"":n.driver||Q()},mountpoints:[""],watching:!1,watchListeners:[],unwatch:{}},e=t=>{for(const u of r.mountpoints)if(t.startsWith(u))return{relativeKey:t.slice(u.length),driver:r.mounts[u]};return{relativeKey:t,driver:r.mounts[""]}},a=(t,u)=>r.mountpoints.filter(c=>c.startsWith(t)||u&&t.startsWith(c)).map(c=>({relativeBase:t.length>c.length?t.slice(c.length):void 0,mountpoint:c,driver:r.mounts[c]})),i=(t,u)=>{if(r.watching){u=g(u);for(const c of r.watchListeners)c(t,u)}},s=async()=>{if(!r.watching){r.watching=!0;for(const t in r.mounts)r.unwatch[t]=await x(r.mounts[t],i,t)}},o=async()=>{if(r.watching){for(const t in r.unwatch)await r.unwatch[t]();r.unwatch={},r.watching=!1}},h={hasItem(t){t=g(t);const{relativeKey:u,driver:c}=e(t);return p(c.hasItem,u)},getItem(t){t=g(t);const{relativeKey:u,driver:c}=e(t);return p(c.getItem,u).then(l=>S(l))},async setItem(t,u){if(u===void 0)return h.removeItem(t);t=g(t);const{relativeKey:c,driver:l}=e(t);l.setItem&&(await p(l.setItem,c,F(u)),l.watch||i("update",t))},async removeItem(t,u=!0){t=g(t);const{relativeKey:c,driver:l}=e(t);l.removeItem&&(await p(l.removeItem,c),u&&await p(l.removeItem,c+"$"),l.watch||i("remove",t))},async getMeta(t,u){t=g(t);const{relativeKey:c,driver:l}=e(t),m=Object.create(null);if(l.getMeta&&Object.assign(m,await p(l.getMeta,c)),!u){const f=await p(l.getItem,c+"$").then(y=>S(y));f&&typeof f=="object"&&(typeof f.atime=="string"&&(f.atime=new Date(f.atime)),typeof f.mtime=="string"&&(f.mtime=new Date(f.mtime)),Object.assign(m,f))}return m},setMeta(t,u){return this.setItem(t+"$",u)},removeMeta(t){return this.removeItem(t+"$")},async getKeys(t){t=I(t);const u=a(t,!0);let c=[];const l=[];for(const m of u){const y=(await p(m.driver.getKeys,m.relativeBase)).map(d=>m.mountpoint+g(d)).filter(d=>!c.some(w=>d.startsWith(w)));l.push(...y),c=[m.mountpoint,...c.filter(d=>!d.startsWith(m.mountpoint))]}return t?l.filter(m=>m.startsWith(t)&&!m.endsWith("$")):l.filter(m=>!m.endsWith("$"))},async clear(t){t=I(t),await Promise.all(a(t,!1).map(async u=>{if(u.driver.clear)return p(u.driver.clear);if(u.driver.removeItem){const c=await u.driver.getKeys();return Promise.all(c.map(l=>u.driver.removeItem(l)))}}))},async dispose(){await Promise.all(Object.values(r.mounts).map(t=>C(t)))},async watch(t){return await s(),r.watchListeners.push(t),async()=>{r.watchListeners=r.watchListeners.filter(u=>u!==t),r.watchListeners.length===0&&await o()}},async unwatch(){r.watchListeners=[],await o()},mount(t,u){if(t=I(t),t&&r.mounts[t])throw new Error(`already mounted at ${t}`);return t&&(r.mountpoints.push(t),r.mountpoints.sort((c,l)=>l.length-c.length)),r.mounts[t]=u,r.watching&&Promise.resolve(x(u,i,t)).then(c=>{r.unwatch[t]=c}).catch(console.error),h},async unmount(t,u=!0){t=I(t),!(!t||!r.mounts[t])&&(r.watching&&t in r.unwatch&&(r.unwatch[t](),delete r.unwatch[t]),u&&await C(r.mounts[t]),r.mountpoints=r.mountpoints.filter(c=>c!==t),delete r.mounts[t])}};return h}function x(n,r,e){return n.watch?n.watch((a,i)=>r(a,e+i)):()=>{}}async function C(n){typeof n.dispose=="function"&&await p(n.dispose)}function ee(n={}){const r=te(e,n.operators);function e(a,i){return typeof i!="object"||i instanceof RegExp?r.$eq(a,i):Object.keys(i||{}).every(s=>{const o=i[s];if(s.startsWith("$")&&r[s]){const h=r[s];return typeof h=="function"?h(a,o):!1}return e(W(a,s),o)})}return e}function te(n,r={}){return{$match:(e,a)=>n(e,a),$eq:(e,a)=>a instanceof RegExp?a.test(e):e===a,$ne:(e,a)=>a instanceof RegExp?!a.test(e):e!==a,$not:(e,a)=>!n(e,a),$and:(e,a)=>(O(a,"$and requires an array as condition"),a.every(i=>n(e,i))),$or:(e,a)=>(O(a,"$or requires an array as condition"),a.some(i=>n(e,i))),$in:(e,a)=>A(a).some(i=>Array.isArray(e)?n(e,{$contains:i}):n(e,i)),$contains:(e,a)=>(e=Array.isArray(e)?e:String(e),A(a).every(i=>e.includes(i))),$icontains:(e,a)=>{if(typeof a!="string")throw new TypeError("$icontains requires a string, use $contains instead");return e=String(e).toLocaleLowerCase(),A(a).every(i=>e.includes(i.toLocaleLowerCase()))},$containsAny:(e,a)=>(O(a,"$containsAny requires an array as condition"),e=Array.isArray(e)?e:String(e),a.some(i=>e.includes(i))),$exists:(e,a)=>a?typeof e<"u":typeof e>"u",$type:(e,a)=>typeof e===String(a),$regex:(e,a)=>{if(!(a instanceof RegExp)){const i=String(a).match(/\/(.*)\/([dgimsuy]*)$/);a=i?new RegExp(i[1],i[2]||""):new RegExp(a)}return a.test(String(e||""))},$lt:(e,a)=>e<a,$lte:(e,a)=>e<=a,$gt:(e,a)=>e>a,$gte:(e,a)=>e>=a,...r||{}}}function D(n){const r=ee(),e=(i,{query:s,before:o,after:h})=>{const t=typeof s=="string"?{_path:s}:s,u=i.findIndex(l=>r(l,t));o=o||1,h=h||1;const c=new Array(o+h).fill(null,0);return u===-1?c:c.map((l,m)=>i[u-o+m+Number(m>=o)]||null)},a=[(i,s)=>i.filter(o=>A(s.where).every(h=>r(o,h))),(i,s)=>A(s.sort).forEach(o=>T(i,o)),(i,s)=>s.surround?e(i,s.surround):i,(i,s)=>s.skip?i.slice(s.skip):i,(i,s)=>s.limit?i.slice(0,s.limit):i,(i,s)=>j(H(s.without))(i),(i,s)=>j(R(s.only))(i)];return async i=>{const s=await n(),o=i.params(),h=a.reduce((t,u)=>u(t,o)||t,s);return o.first?h[0]:h}}var L={},re={get exports(){return L},set exports(n){L=n}};(function(n,r){(function(e,a,i){n.exports=i(),n.exports.default=i()})("slugify",q,function(){var e=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),a=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function i(s,o){if(typeof s!="string")throw new Error("slugify: string argument expected");o=typeof o=="string"?{replacement:o}:o||{};var h=a[o.locale]||{},t=o.replacement===void 0?"-":o.replacement,u=o.trim===void 0?!0:o.trim,c=s.normalize().split("").reduce(function(l,m){var f=h[m]||e[m]||m;return f===t&&(f=" "),l+f.replace(o.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return o.strict&&(c=c.replace(/[^A-Za-z0-9\s]/g,"")),u&&(c=c.trim()),c=c.replace(/\s+/g,t),o.lower&&(c=c.toLowerCase()),c}return i.extend=function(s){Object.assign(e,s)},i})})(re);const ne=n=>n.split(/[\s-]/g).map(B).join(" ");function ae(n,r){const{navigation:e}=K().content,a=s=>({...se(["title",...e.fields])(s),...oe(s==null?void 0:s.navigation)?s.navigation:{}}),i=n.sort((s,o)=>s._path.localeCompare(o._path)).reduce((s,o)=>{const h=o._path.substring(1).split("/"),t=o._id.split(":").slice(1),u=!!t[t.length-1].match(/([1-9][0-9]*\.)?index.md/g),c=f=>({title:f.title,_path:f._path,_file:f._file,children:[],...a(f),...f._draft?{_draft:!0}:{}}),l=c(o);if(u){const f=r[l._path];if(typeof(f==null?void 0:f.navigation)<"u"&&!(f!=null&&f.navigation))return s;if(o._path!=="/"){const y=c(o);l.children.push(y)}Object.assign(l,a(f))}return h.length===1?(s.push(l),s):(h.slice(0,-1).reduce((f,y,d)=>{const w="/"+h.slice(0,d+1).join("/"),v=r[w];if(typeof(v==null?void 0:v.navigation)<"u"&&!v.navigation)return[];let $=f.find(Y=>Y._path===w);return $||($={title:ne(y),_path:w,_file:o._file,children:[],...a(v)},f.push($)),$.children},s).push(l),s)},[]);return P(i)}const ie=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function P(n){const r=n.sort((e,a)=>ie.compare(e._file,a._file));for(const e of r)e.children.length?P(e.children):delete e.children,delete e._file;return n}function se(n){return r=>(r=r||{},n&&n.length?n.filter(e=>typeof r[e]<"u").reduce((e,a)=>Object.assign(e,{[a]:r[a]}),{}):r)}function oe(n){return Object.prototype.toString.call(n)==="[object Object]"}const ce=n=>M(n,K().public.content.api.baseURL),ue=b(X({driver:G()}),"@content"),U=()=>N("previewToken").value;function le(n){async function r(){const e=new Set(await n.getKeys("cache:")),a=U();if(a){(await n.getItem(`${a}$`).then(t=>t||{})).ignoreBuiltContents&&e.clear();const o=await n.getKeys(`${a}:`),h=await Promise.all(o.map(t=>n.getItem(t)));for(const t of h)e.delete(`cache:${t._id}`),t.__deleted||e.add(`${a}:${t._id}`)}return await Promise.all(Array.from(e).map(s=>n.getItem(s)))}return{storage:n,fetch:D(r),query:e=>J(D(r),e)}}let _=null,E=null;async function fe(){return E?await E:_||(E=he(),_=await E),_}async function he(){const n=z(),{content:r}=K().public,e=le(ue),a=await e.storage.getItem("integrity");if(r.integrity!==+(a||0)){const{contents:i,navigation:s}=await $fetch(ce(r.integrity?`cache.${r.integrity}.json`:"cache.json"));await Promise.all(i.map(o=>e.storage.setItem(`cache:${o._id}`,o))),await e.storage.setItem("navigation",s),await e.storage.setItem("integrity",r.integrity)}return await n.callHook("content:storage",e.storage),e}async function de(n){const r=await fe();if(!U()&&Object.keys(n||{}).length===0)return r.storage.getItem("navigation");const e=await r.query(n).where({_partial:!1,navigation:{$ne:!1}}).find(),i=(await r.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((s,o)=>{var t;((t=o.title)==null?void 0:t.toLowerCase())==="dir"&&(o.title=void 0);const h=o._path.split("/").slice(0,-1).join("/")||"/";return s[h]={...o,...o.body},s},{});return ae(e,i)}export{ue as contentStorage,le as createDB,de as generateNavigation,U as getPreview,fe as useContentDatabase};
