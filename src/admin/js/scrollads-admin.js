jQuery(function($){

	// phpjs.org date http://phpjs.org/functions/date/
	function date(n,t){var e,r,u=this,o=["Sun","Mon","Tues","Wednes","Thurs","Fri","Satur","January","February","March","April","May","June","July","August","September","October","November","December"],i=/\\?(.?)/gi,c=function(n,t){return r[n]?r[n]():t},a=function(n,t){for(n=String(n);n.length<t;)n="0"+n;return n};return r={d:function(){return a(r.j(),2)},D:function(){return r.l().slice(0,3)},j:function(){return e.getDate()},l:function(){return o[r.w()]+"day"},N:function(){return r.w()||7},S:function(){var n=r.j(),t=n%10;return 3>=t&&1==parseInt(n%100/10,10)&&(t=0),["st","nd","rd"][t-1]||"th"},w:function(){return e.getDay()},z:function(){var n=new Date(r.Y(),r.n()-1,r.j()),t=new Date(r.Y(),0,1);return Math.round((n-t)/864e5)},W:function(){var n=new Date(r.Y(),r.n()-1,r.j()-r.N()+3),t=new Date(n.getFullYear(),0,4);return a(1+Math.round((n-t)/864e5/7),2)},F:function(){return o[6+r.n()]},m:function(){return a(r.n(),2)},M:function(){return r.F().slice(0,3)},n:function(){return e.getMonth()+1},t:function(){return new Date(r.Y(),r.n(),0).getDate()},L:function(){var n=r.Y();return n%4===0&n%100!==0|n%400===0},o:function(){var n=r.n(),t=r.W(),e=r.Y();return e+(12===n&&9>t?1:1===n&&t>9?-1:0)},Y:function(){return e.getFullYear()},y:function(){return r.Y().toString().slice(-2)},a:function(){return e.getHours()>11?"pm":"am"},A:function(){return r.a().toUpperCase()},B:function(){var n=3600*e.getUTCHours(),t=60*e.getUTCMinutes(),r=e.getUTCSeconds();return a(Math.floor((n+t+r+3600)/86.4)%1e3,3)},g:function(){return r.G()%12||12},G:function(){return e.getHours()},h:function(){return a(r.g(),2)},H:function(){return a(r.G(),2)},i:function(){return a(e.getMinutes(),2)},s:function(){return a(e.getSeconds(),2)},u:function(){return a(1e3*e.getMilliseconds(),6)},e:function(){throw"Not supported (see source code of date() for timezone on how to add support)"},I:function(){var n=new Date(r.Y(),0),t=Date.UTC(r.Y(),0),e=new Date(r.Y(),6),u=Date.UTC(r.Y(),6);return n-t!==e-u?1:0},O:function(){var n=e.getTimezoneOffset(),t=Math.abs(n);return(n>0?"-":"+")+a(100*Math.floor(t/60)+t%60,4)},P:function(){var n=r.O();return n.substr(0,3)+":"+n.substr(3,2)},T:function(){return"UTC"},Z:function(){return 60*-e.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(i,c)},r:function(){return"D, d M Y H:i:s O".replace(i,c)},U:function(){return e/1e3|0}},this.date=function(n,t){return u=this,e=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t),n.replace(i,c)},this.date(n,t)}

	// phpjs.org date http://phpjs.org/functions/number_format/
	function number_format(n,t,e,i){n=(n+"").replace(/[^0-9+\-Ee.]/g,"");var r=isFinite(+n)?+n:0,a=isFinite(+t)?Math.abs(t):0,o=void 0===i?",":i,d=void 0===e?".":e,h="";return(h=(a?function(n,t){var e=Math.pow(10,t);return""+(Math.round(n*e)/e).toFixed(t)}(r,a):""+Math.round(r)).split("."))[0].length>3&&(h[0]=h[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,o)),(h[1]||"").length<a&&(h[1]=h[1]||"",h[1]+=new Array(a-h[1].length+1).join("0")),h.join(d)}
	// remove 소수점이후 영
	function netural_number_format(n,t,e,i){return number_format(n,t,e,i).replace(/\.(0|\.)+$/,'')}

	// phpjs.org strtotime http://phpjs.org/functions/strtotime/
	function strtotime(e,t){function a(e,t,a){var n,r=w[t];"undefined"!=typeof r&&(n=r-c.getDay(),0===n?n=7*a:n>0&&"last"===e?n-=7:0>n&&"next"===e&&(n+=7),c.setDate(c.getDate()+n))}function n(e){var t=e.split(" "),n=t[0],r=t[1].substring(0,3),s=/\d+/.test(n),u="ago"===t[2],i=("last"===n?-1:1)*(u?-1:1);if(s&&(i*=parseInt(n,10)),o.hasOwnProperty(r)&&!t[1].match(/^mon(day|\.)?$/i))return c["set"+o[r]](c["get"+o[r]]()+i);if("wee"===r)return c.setDate(c.getDate()+7*i);if("next"===n||"last"===n)a(n,r,i);else if(!s)return!1;return!0}var r,s,u,i,c,w,o,d,D,f,g,l=!1;if(!e)return l;if(e=e.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," ").replace(/[\t\r\n]/g,"").toLowerCase(),s=e.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/),s&&s[2]===s[4])if(s[1]>1901)switch(s[2]){case"-":return s[3]>12||s[5]>31?l:new Date(s[1],parseInt(s[3],10)-1,s[5],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3;case".":return l;case"/":return s[3]>12||s[5]>31?l:new Date(s[1],parseInt(s[3],10)-1,s[5],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3}else if(s[5]>1901)switch(s[2]){case"-":return s[3]>12||s[1]>31?l:new Date(s[5],parseInt(s[3],10)-1,s[1],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3;case".":return s[3]>12||s[1]>31?l:new Date(s[5],parseInt(s[3],10)-1,s[1],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3;case"/":return s[1]>12||s[3]>31?l:new Date(s[5],parseInt(s[1],10)-1,s[3],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3}else switch(s[2]){case"-":return s[3]>12||s[5]>31||s[1]<70&&s[1]>38?l:(i=s[1]>=0&&s[1]<=38?+s[1]+2e3:s[1],new Date(i,parseInt(s[3],10)-1,s[5],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3);case".":return s[5]>=70?s[3]>12||s[1]>31?l:new Date(s[5],parseInt(s[3],10)-1,s[1],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3:s[5]<60&&!s[6]?s[1]>23||s[3]>59?l:(u=new Date,new Date(u.getFullYear(),u.getMonth(),u.getDate(),s[1]||0,s[3]||0,s[5]||0,s[9]||0)/1e3):l;case"/":return s[1]>12||s[3]>31||s[5]<70&&s[5]>38?l:(i=s[5]>=0&&s[5]<=38?+s[5]+2e3:s[5],new Date(i,parseInt(s[1],10)-1,s[3],s[6]||0,s[7]||0,s[8]||0,s[9]||0)/1e3);case":":return s[1]>23||s[3]>59||s[5]>59?l:(u=new Date,new Date(u.getFullYear(),u.getMonth(),u.getDate(),s[1]||0,s[3]||0,s[5]||0)/1e3)}if("now"===e)return null===t||isNaN(t)?(new Date).getTime()/1e3|0:0|t;if(!isNaN(r=Date.parse(e)))return r/1e3|0;if((s=e.match(/^([0-9]{4}-[0-9]{2}-[0-9]{2})[ t]([0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?)([\+-][0-9]{2}(:[0-9]{2})?|z)/))&&("z"==s[4]?s[4]="Z":s[4].match(/^([\+-][0-9]{2})$/)&&(s[4]=s[4]+":00"),!isNaN(r=Date.parse(s[1]+"T"+s[2]+s[4]))))return r/1e3|0;if(c=t?new Date(1e3*t):new Date,w={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},o={yea:"FullYear",mon:"Month",day:"Date",hou:"Hours",min:"Minutes",sec:"Seconds"},D="(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)",f="([+-]?\\d+\\s"+D+"|(last|next)\\s"+D+")(\\sago)?",s=e.match(new RegExp(f,"gi")),!s)return l;for(g=0,d=s.length;d>g;g++)if(!n(s[g]))return l;return c.getTime()/1e3}
					
	// phpjs.org strtotime http://phpjs.org/functions/sha1/						
	function sha1(r){var e;try{var o=require("crypto").createHash("sha1");o.update(r),e=o.digest("hex")}catch(r){e=void 0}if(void 0!==e)return e;var t,a,c,h,n,s,d,u,f,C=function(r,e){return r<<e|r>>>32-e},A=function(r){var e,o="";for(e=7;e>=0;e--)o+=(r>>>4*e&15).toString(16);return o},i=new Array(80),p=1732584193,v=4023233417,g=2562383102,b=271733878,k=3285377520,l=(r=unescape(encodeURIComponent(r))).length,w=[];for(a=0;a<l-3;a+=4)c=r.charCodeAt(a)<<24|r.charCodeAt(a+1)<<16|r.charCodeAt(a+2)<<8|r.charCodeAt(a+3),w.push(c);switch(l%4){case 0:a=2147483648;break;case 1:a=r.charCodeAt(l-1)<<24|8388608;break;case 2:a=r.charCodeAt(l-2)<<24|r.charCodeAt(l-1)<<16|32768;break;case 3:a=r.charCodeAt(l-3)<<24|r.charCodeAt(l-2)<<16|r.charCodeAt(l-1)<<8|128}for(w.push(a);w.length%16!=14;)w.push(0);for(w.push(l>>>29),w.push(l<<3&4294967295),t=0;t<w.length;t+=16){for(a=0;a<16;a++)i[a]=w[t+a];for(a=16;a<=79;a++)i[a]=C(i[a-3]^i[a-8]^i[a-14]^i[a-16],1);for(h=p,n=v,s=g,d=b,u=k,a=0;a<=19;a++)f=C(h,5)+(n&s|~n&d)+u+i[a]+1518500249&4294967295,u=d,d=s,s=C(n,30),n=h,h=f;for(a=20;a<=39;a++)f=C(h,5)+(n^s^d)+u+i[a]+1859775393&4294967295,u=d,d=s,s=C(n,30),n=h,h=f;for(a=40;a<=59;a++)f=C(h,5)+(n&s|n&d|s&d)+u+i[a]+2400959708&4294967295,u=d,d=s,s=C(n,30),n=h,h=f;for(a=60;a<=79;a++)f=C(h,5)+(n^s^d)+u+i[a]+3395469782&4294967295,u=d,d=s,s=C(n,30),n=h,h=f;p=p+h&4294967295,v=v+n&4294967295,g=g+s&4294967295,b=b+d&4294967295,k=k+u&4294967295}return(f=A(p)+A(v)+A(g)+A(b)+A(k)).toLowerCase()}
											

	// AES256 encrypt
	function parseBigInt(t,r){return new BigInteger(t,r)}function linebrk(t,r){for(var n="",i=0;i+r<t.length;)n+=t.substring(i,i+r)+"\n",i+=r;return n+t.substring(i,t.length)}function byte2Hex(t){return t<16?"0"+t.toString(16):t.toString(16)}function RSAKey(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null}function RSASetPublic(t,r){null!=t&&null!=r&&t.length>0&&r.length>0?(this.n=parseBigInt(t,16),this.e=parseInt(r,16)):alert("Invalid RSA public key")}function RSADoPublic(t){return t.modPowInt(this.e,this.n)}function RSAEncrypt(t){var r=new Array;for(i=0;i<t.length;i++)r[i]=t.charCodeAt(i);m=new BigInteger(r);var n=this.doPublic(m);if(null==n)return null;var e=n.toString(16);return 0==(1&e.length)?e:"0"+e}function BigInteger(t,r,n){null!=t&&("number"==typeof t?this.fromNumber(t,r,n):null==r&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,r))}function nbi(){return new BigInteger(null)}function am1(t,r,n,i,e,o){for(;--o>=0;){var s=r*this[t++]+n[i]+e;e=Math.floor(s/67108864),n[i++]=67108863&s}return e}function am2(t,r,n,i,e,o){for(var s=32767&r,h=r>>15;--o>=0;){var u=32767&this[t],f=this[t++]>>15,a=h*u+f*s;e=((u=s*u+((32767&a)<<15)+n[i]+(1073741823&e))>>>30)+(a>>>15)+h*f+(e>>>30),n[i++]=1073741823&u}return e}function am3(t,r,n,i,e,o){for(var s=16383&r,h=r>>14;--o>=0;){var u=16383&this[t],f=this[t++]>>14,a=h*u+f*s;e=((u=s*u+((16383&a)<<14)+n[i]+e)>>28)+(a>>14)+h*f,n[i++]=268435455&u}return e}function int2char(t){return BI_RM.charAt(t)}function intAt(t,r){var n=BI_RC[t.charCodeAt(r)];return null==n?-1:n}function bnpCopyTo(t){for(var r=this.t-1;r>=0;--r)t[r]=this[r];t.t=this.t,t.s=this.s}function bnpFromInt(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+DV:this.t=0}function nbv(t){var r=nbi();return r.fromInt(t),r}function bnpFromString(t,r){var n;if(16==r)n=4;else if(8==r)n=3;else if(256==r)n=8;else if(2==r)n=1;else if(32==r)n=5;else{if(4!=r)return void this.fromRadix(t,r);n=2}this.t=0,this.s=0;for(var i=t.length,e=!1,o=0;--i>=0;){var s=8==n?255&t[i]:intAt(t,i);s<0?"-"==t.charAt(i)&&(e=!0):(e=!1,0==o?this[this.t++]=s:o+n>this.DB?(this[this.t-1]|=(s&(1<<this.DB-o)-1)<<o,this[this.t++]=s>>this.DB-o):this[this.t-1]|=s<<o,(o+=n)>=this.DB&&(o-=this.DB))}8==n&&0!=(128&t[0])&&(this.s=-1,o>0&&(this[this.t-1]|=(1<<this.DB-o)-1<<o)),this.clamp(),e&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function bnToString(t){if(this.s<0)return"-"+this.negate().toString(t);var r;if(16==t)r=4;else if(8==t)r=3;else if(2==t)r=1;else if(32==t)r=5;else{if(4!=t)return this.toRadix(t);r=2}var n,i=(1<<r)-1,e=!1,o="",s=this.t,h=this.DB-s*this.DB%r;if(s-- >0)for(h<this.DB&&(n=this[s]>>h)>0&&(e=!0,o=int2char(n));s>=0;)h<r?(n=(this[s]&(1<<h)-1)<<r-h,n|=this[--s]>>(h+=this.DB-r)):(n=this[s]>>(h-=r)&i,h<=0&&(h+=this.DB,--s)),n>0&&(e=!0),e&&(o+=int2char(n));return e?o:"0"}function bnNegate(){var t=nbi();return BigInteger.ZERO.subTo(this,t),t}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(t){var r=this.s-t.s;if(0!=r)return r;var n=this.t;if(0!=(r=n-t.t))return r;for(;--n>=0;)if(0!=(r=this[n]-t[n]))return r;return 0}function nbits(t){var r,n=1;return 0!=(r=t>>>16)&&(t=r,n+=16),0!=(r=t>>8)&&(t=r,n+=8),0!=(r=t>>4)&&(t=r,n+=4),0!=(r=t>>2)&&(t=r,n+=2),0!=(r=t>>1)&&(t=r,n+=1),n}function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(t,r){var n;for(n=this.t-1;n>=0;--n)r[n+t]=this[n];for(n=t-1;n>=0;--n)r[n]=0;r.t=this.t+t,r.s=this.s}function bnpDRShiftTo(t,r){for(var n=t;n<this.t;++n)r[n-t]=this[n];r.t=Math.max(this.t-t,0),r.s=this.s}function bnpLShiftTo(t,r){var n,i=t%this.DB,e=this.DB-i,o=(1<<e)-1,s=Math.floor(t/this.DB),h=this.s<<i&this.DM;for(n=this.t-1;n>=0;--n)r[n+s+1]=this[n]>>e|h,h=(this[n]&o)<<i;for(n=s-1;n>=0;--n)r[n]=0;r[s]=h,r.t=this.t+s+1,r.s=this.s,r.clamp()}function bnpRShiftTo(t,r){r.s=this.s;var n=Math.floor(t/this.DB);if(n>=this.t)r.t=0;else{var i=t%this.DB,e=this.DB-i,o=(1<<i)-1;r[0]=this[n]>>i;for(var s=n+1;s<this.t;++s)r[s-n-1]|=(this[s]&o)<<e,r[s-n]=this[s]>>i;i>0&&(r[this.t-n-1]|=(this.s&o)<<e),r.t=this.t-n,r.clamp()}}function bnpSubTo(t,r){for(var n=0,i=0,e=Math.min(t.t,this.t);n<e;)i+=this[n]-t[n],r[n++]=i&this.DM,i>>=this.DB;if(t.t<this.t){for(i-=t.s;n<this.t;)i+=this[n],r[n++]=i&this.DM,i>>=this.DB;i+=this.s}else{for(i+=this.s;n<t.t;)i-=t[n],r[n++]=i&this.DM,i>>=this.DB;i-=t.s}r.s=i<0?-1:0,i<-1?r[n++]=this.DV+i:i>0&&(r[n++]=i),r.t=n,r.clamp()}function bnpMultiplyTo(t,r){var n=this.abs(),i=t.abs(),e=n.t;for(r.t=e+i.t;--e>=0;)r[e]=0;for(e=0;e<i.t;++e)r[e+n.t]=n.am(0,i[e],r,e,0,n.t);r.s=0,r.clamp(),this.s!=t.s&&BigInteger.ZERO.subTo(r,r)}function bnpSquareTo(t){for(var r=this.abs(),n=t.t=2*r.t;--n>=0;)t[n]=0;for(n=0;n<r.t-1;++n){var i=r.am(n,r[n],t,2*n,0,1);(t[n+r.t]+=r.am(n+1,2*r[n],t,2*n+1,i,r.t-n-1))>=r.DV&&(t[n+r.t]-=r.DV,t[n+r.t+1]=1)}t.t>0&&(t[t.t-1]+=r.am(n,r[n],t,2*n,0,1)),t.s=0,t.clamp()}function bnpDivRemTo(t,r,n){var i=t.abs();if(!(i.t<=0)){var e=this.abs();if(e.t<i.t)return null!=r&&r.fromInt(0),void(null!=n&&this.copyTo(n));null==n&&(n=nbi());var o=nbi(),s=this.s,h=t.s,u=this.DB-nbits(i[i.t-1]);u>0?(i.lShiftTo(u,o),e.lShiftTo(u,n)):(i.copyTo(o),e.copyTo(n));var f=o.t,a=o[f-1];if(0!=a){var c=a*(1<<this.F1)+(f>1?o[f-2]>>this.F2:0),p=this.FV/c,l=(1<<this.F1)/c,g=1<<this.F2,v=n.t,b=v-f,m=null==r?nbi():r;for(o.dlShiftTo(b,m),n.compareTo(m)>=0&&(n[n.t++]=1,n.subTo(m,n)),BigInteger.ONE.dlShiftTo(f,m),m.subTo(o,o);o.t<f;)o[o.t++]=0;for(;--b>=0;){var y=n[--v]==a?this.DM:Math.floor(n[v]*p+(n[v-1]+g)*l);if((n[v]+=o.am(0,y,n,b,0,f))<y)for(o.dlShiftTo(b,m),n.subTo(m,n);n[v]<--y;)n.subTo(m,n)}null!=r&&(n.drShiftTo(f,r),s!=h&&BigInteger.ZERO.subTo(r,r)),n.t=f,n.clamp(),u>0&&n.rShiftTo(u,n),s<0&&BigInteger.ZERO.subTo(n,n)}}}function bnMod(t){var r=nbi();return this.abs().divRemTo(t,null,r),this.s<0&&r.compareTo(BigInteger.ZERO)>0&&t.subTo(r,r),r}function Classic(t){this.m=t}function cConvert(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function cRevert(t){return t}function cReduce(t){t.divRemTo(this.m,null,t)}function cMulTo(t,r,n){t.multiplyTo(r,n),this.reduce(n)}function cSqrTo(t,r){t.squareTo(r),this.reduce(r)}function bnpInvDigit(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var r=3&t;return r=r*(2-(15&t)*r)&15,r=r*(2-(255&t)*r)&255,r=r*(2-((65535&t)*r&65535))&65535,r=r*(2-t*r%this.DV)%this.DV,r>0?this.DV-r:-r}function Montgomery(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function montConvert(t){var r=nbi();return t.abs().dlShiftTo(this.m.t,r),r.divRemTo(this.m,null,r),t.s<0&&r.compareTo(BigInteger.ZERO)>0&&this.m.subTo(r,r),r}function montRevert(t){var r=nbi();return t.copyTo(r),this.reduce(r),r}function montReduce(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var r=0;r<this.m.t;++r){var n=32767&t[r],i=n*this.mpl+((n*this.mph+(t[r]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[n=r+this.m.t]+=this.m.am(0,i,t,r,0,this.m.t);t[n]>=t.DV;)t[n]-=t.DV,t[++n]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function montSqrTo(t,r){t.squareTo(r),this.reduce(r)}function montMulTo(t,r,n){t.multiplyTo(r,n),this.reduce(n)}function bnpIsEven(){return 0==(this.t>0?1&this[0]:this.s)}function bnpExp(t,r){if(t>4294967295||t<1)return BigInteger.ONE;var n=nbi(),i=nbi(),e=r.convert(this),o=nbits(t)-1;for(e.copyTo(n);--o>=0;)if(r.sqrTo(n,i),(t&1<<o)>0)r.mulTo(i,e,n);else{var s=n;n=i,i=s}return r.revert(n)}function bnModPowInt(t,r){var n;return n=t<256||r.isEven()?new Classic(r):new Montgomery(r),this.exp(t,n)}function randomKey32(){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",r="",n=0;n<32;n++){var i=Math.floor(Math.random()*t.length);r+=t.substring(i,i+1)}return r}function AES_Encode(t,r){return GibberishAES.size(256),GibberishAES.aesEncrypt(t,r)}function AES_Decode(t,r){return GibberishAES.size(256),GibberishAES.aesDecrypt(t,r)}RSAKey.prototype.doPublic=RSADoPublic,RSAKey.prototype.setPublic=RSASetPublic,RSAKey.prototype.encrypt=RSAEncrypt;var dbits,canary=0xdeadbeefcafe,j_lm=15715070==(16777215&canary);j_lm&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):j_lm&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array,rr,vv;for(rr="0".charCodeAt(0),vv=0;vv<=9;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;vv<36;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;vv<36;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1);var GibberishAES=function(){var t=14,r=8,n=!1,i=function(t){try{return unescape(encodeURIComponent(t))}catch(t){throw"Error on UTF-8 encode"}},e=function(t){try{return decodeURIComponent(escape(t))}catch(t){throw"Bad Key"}},o=function(t){var r,n,i=[];for(t.length<16&&(i=[r=16-t.length,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r]),n=0;n<t.length;n++)i[n]=t[n];return i},s=function(t,r){var n,i,e="";if(r){if((n=t[15])>16)throw"Decryption error: Maybe bad key";if(16==n)return"";for(i=0;i<16-n;i++)e+=String.fromCharCode(t[i])}else for(i=0;i<16;i++)e+=String.fromCharCode(t[i]);return e},h=function(t){var r,n="";for(r=0;r<t.length;r++)n+=(t[r]<16?"0":"")+t[r].toString(16);return n},u=function(t){var r=[];return t.replace(/(..)/g,function(t){r.push(parseInt(t,16))}),r},f=function(t,r){var n,e=[];for(r||(t=i(t)),n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e},a=function(n){switch(n){case 128:t=10,r=4;break;case 192:t=12,r=6;break;case 256:t=14,r=8;break;default:throw"Invalid Key Size Specified:"+n}},c=function(t){var r,n=[];for(r=0;r<t;r++)n=n.concat(Math.floor(256*Math.random()));return n},p=function(n,i){var e,o=t>=12?3:2,s=[],h=[],u=[],f=[],a=n.concat(i);for(u[0]=GibberishAES.Hash.MD5(a),f=u[0],e=1;e<o;e++)u[e]=GibberishAES.Hash.MD5(u[e-1].concat(a)),f=f.concat(u[e]);return s=f.slice(0,4*r),h=f.slice(4*r,4*r+16),{key:s,iv:h}},l=function(t,r){t=GibberishAES.s2a(t);var n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];r=D(GibberishAES.s2a(r));var i,e=Math.ceil(t.length/16),s=[],h=[];for(i=0;i<e;i++)s[i]=o(t.slice(16*i,16*i+16));for(t.length%16==0&&(s.push([16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]),e++),i=0;i<s.length;i++)s[i]=0===i?I(s[i],n):I(s[i],h[i-1]),h[i]=m(s[i],r);return GibberishAES.Base64.encode(h)},g=function(t,r){var n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];r=D(GibberishAES.s2a(r));var i,o=t.length/16,h=[],u=[],f="";for(i=0;i<o;i++)h.push(t.slice(16*i,16*(i+1)));for(i=h.length-1;i>=0;i--)u[i]=y(h[i],r),u[i]=0===i?I(u[i],n):I(u[i],h[i-1]);for(i=0;i<o-1;i++)f+=s(u[i]);return f+=s(u[i],!0),e(f)},v=function(t,r){t=GibberishAES.s2a(t);var n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];r=D(GibberishAES.s2a(r));var i,e=Math.ceil(t.length/16),s=[],h=[];for(i=0;i<e;i++)s[i]=o(t.slice(16*i,16*i+16));for(t.length%16==0&&(s.push([16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16]),e++),i=0;i<s.length;i++)s[i]=0===i?I(s[i],n):I(s[i],h[i-1]),h[i]=m(s[i],r);return GibberishAES.Base64.encode(h)},b=function(t,r){var n=GibberishAES.Base64.decode(t),i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];r=D(GibberishAES.s2a(r));var o,h=n.length/16,u=[],f=[],a="";for(o=0;o<h;o++)u.push(n.slice(16*o,16*(o+1)));for(o=u.length-1;o>=0;o--)f[o]=y(u[o],r),f[o]=0===o?I(f[o],i):I(f[o],u[o-1]);for(o=0;o<h-1;o++)a+=s(f[o]);return a+=s(f[o],!0),e(a)},m=function(r,i){n=!1;var e,o=S(r,i,0);for(e=1;e<t+1;e++)o=d(o),o=B(o),e<t&&(o=T(o)),o=S(o,i,e);return o},y=function(r,i){n=!0;var e,o=S(r,i,t);for(e=t-1;e>-1;e--)o=B(o),o=d(o),o=S(o,i,e),e>0&&(o=T(o));return o},d=function(t){var r,i=n?E:R,e=[];for(r=0;r<16;r++)e[r]=i[t[r]];return e},B=function(t){var r,i=[],e=n?[0,13,10,7,4,1,14,11,8,5,2,15,12,9,6,3]:[0,5,10,15,4,9,14,3,8,13,2,7,12,1,6,11];for(r=0;r<16;r++)i[r]=t[e[r]];return i},T=function(t){var r,i=[];if(n)for(r=0;r<4;r++)i[4*r]=q[t[4*r]]^G[t[1+4*r]]^O[t[2+4*r]]^F[t[3+4*r]],i[1+4*r]=F[t[4*r]]^q[t[1+4*r]]^G[t[2+4*r]]^O[t[3+4*r]],i[2+4*r]=O[t[4*r]]^F[t[1+4*r]]^q[t[2+4*r]]^G[t[3+4*r]],i[3+4*r]=G[t[4*r]]^O[t[1+4*r]]^F[t[2+4*r]]^q[t[3+4*r]];else for(r=0;r<4;r++)i[4*r]=w[t[4*r]]^x[t[1+4*r]]^t[2+4*r]^t[3+4*r],i[1+4*r]=t[4*r]^w[t[1+4*r]]^x[t[2+4*r]]^t[3+4*r],i[2+4*r]=t[4*r]^t[1+4*r]^w[t[2+4*r]]^x[t[3+4*r]],i[3+4*r]=x[t[4*r]]^t[1+4*r]^t[2+4*r]^w[t[3+4*r]];return i},S=function(t,r,n){var i,e=[];for(i=0;i<16;i++)e[i]=t[i]^r[n][i];return e},I=function(t,r){var n,i=[];for(n=0;n<16;n++)i[n]=t[n]^r[n];return i},D=function(n){var i,e,o,s,h=[],u=[],f=[];for(i=0;i<r;i++)e=[n[4*i],n[4*i+1],n[4*i+2],n[4*i+3]],h[i]=e;for(i=r;i<4*(t+1);i++){for(h[i]=[],o=0;o<4;o++)u[o]=h[i-1][o];for(i%r==0?(u=A(M(u)))[0]^=C[i/r-1]:r>6&&i%r==4&&(u=A(u)),o=0;o<4;o++)h[i][o]=h[i-r][o]^u[o]}for(i=0;i<t+1;i++)for(f[i]=[],s=0;s<4;s++)f[i].push(h[4*i+s][0],h[4*i+s][1],h[4*i+s][2],h[4*i+s][3]);return f},A=function(t){for(var r=0;r<4;r++)t[r]=R[t[r]];return t},M=function(t){var r,n=t[0];for(r=0;r<4;r++)t[r]=t[r+1];return t[3]=n,t},R=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],E=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],C=[1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],w=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],x=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],F=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],G=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],O=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],q=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141],P=function(t,r,n){var i,e=c(8),o=p(f(r,n),e),s=o.key,h=(o.iv,[[83,97,108,116,101,100,95,95].concat(e)]);return t=f(t,n),i=l(t,s),i=h.concat(i),V.encode(i)},_=function(t,r,n){var i=V.decode(t),e=i.slice(8,16),o=p(f(r,n),e),s=o.key;o.iv;return i=i.slice(16,i.length),t=g(i,s)},k=function(t){function r(t,r){return t<<r|t>>>32-r}function n(t,r){var n,i,e,o,s;return e=2147483648&t,o=2147483648&r,n=1073741824&t,i=1073741824&r,s=(1073741823&t)+(1073741823&r),n&i?2147483648^s^e^o:n|i?1073741824&s?3221225472^s^e^o:1073741824^s^e^o:s^e^o}function i(t,r,n){return t&r|~t&n}function e(t,r,n){return t&n|r&~n}function o(t,r,n){return t^r^n}function s(t,r,n){return r^(t|~n)}function h(t,e,o,s,h,u,f){return t=n(t,n(n(i(e,o,s),h),f)),n(r(t,u),e)}function u(t,i,o,s,h,u,f){return t=n(t,n(n(e(i,o,s),h),f)),n(r(t,u),i)}function f(t,i,e,s,h,u,f){return t=n(t,n(n(o(i,e,s),h),f)),n(r(t,u),i)}function a(t,i,e,o,h,u,f){return t=n(t,n(n(s(i,e,o),h),f)),n(r(t,u),i)}function c(t){var r,n,i=[];for(n=0;n<=3;n++)r=t>>>8*n&255,i=i.concat(r);return i}var p,l,g,v,b,m,y,d,B,T=[];for(T=function(t){for(var r,n=t.length,i=n+8,e=16*((i-i%64)/64+1),o=[],s=0,h=0;h<n;)s=h%4*8,o[r=(h-h%4)/4]=o[r]|t[h]<<s,h++;return r=(h-h%4)/4,s=h%4*8,o[r]=o[r]|128<<s,o[e-2]=n<<3,o[e-1]=n>>>29,o}(t),m=1732584193,y=4023233417,d=2562383102,B=271733878,p=0;p<T.length;p+=16)l=m,g=y,v=d,b=B,y=a(y=a(y=a(y=a(y=f(y=f(y=f(y=f(y=u(y=u(y=u(y=u(y=h(y=h(y=h(y=h(y,d=h(d,B=h(B,m=h(m,y,d,B,T[p+0],7,3614090360),y,d,T[p+1],12,3905402710),m,y,T[p+2],17,606105819),B,m,T[p+3],22,3250441966),d=h(d,B=h(B,m=h(m,y,d,B,T[p+4],7,4118548399),y,d,T[p+5],12,1200080426),m,y,T[p+6],17,2821735955),B,m,T[p+7],22,4249261313),d=h(d,B=h(B,m=h(m,y,d,B,T[p+8],7,1770035416),y,d,T[p+9],12,2336552879),m,y,T[p+10],17,4294925233),B,m,T[p+11],22,2304563134),d=h(d,B=h(B,m=h(m,y,d,B,T[p+12],7,1804603682),y,d,T[p+13],12,4254626195),m,y,T[p+14],17,2792965006),B,m,T[p+15],22,1236535329),d=u(d,B=u(B,m=u(m,y,d,B,T[p+1],5,4129170786),y,d,T[p+6],9,3225465664),m,y,T[p+11],14,643717713),B,m,T[p+0],20,3921069994),d=u(d,B=u(B,m=u(m,y,d,B,T[p+5],5,3593408605),y,d,T[p+10],9,38016083),m,y,T[p+15],14,3634488961),B,m,T[p+4],20,3889429448),d=u(d,B=u(B,m=u(m,y,d,B,T[p+9],5,568446438),y,d,T[p+14],9,3275163606),m,y,T[p+3],14,4107603335),B,m,T[p+8],20,1163531501),d=u(d,B=u(B,m=u(m,y,d,B,T[p+13],5,2850285829),y,d,T[p+2],9,4243563512),m,y,T[p+7],14,1735328473),B,m,T[p+12],20,2368359562),d=f(d,B=f(B,m=f(m,y,d,B,T[p+5],4,4294588738),y,d,T[p+8],11,2272392833),m,y,T[p+11],16,1839030562),B,m,T[p+14],23,4259657740),d=f(d,B=f(B,m=f(m,y,d,B,T[p+1],4,2763975236),y,d,T[p+4],11,1272893353),m,y,T[p+7],16,4139469664),B,m,T[p+10],23,3200236656),d=f(d,B=f(B,m=f(m,y,d,B,T[p+13],4,681279174),y,d,T[p+0],11,3936430074),m,y,T[p+3],16,3572445317),B,m,T[p+6],23,76029189),d=f(d,B=f(B,m=f(m,y,d,B,T[p+9],4,3654602809),y,d,T[p+12],11,3873151461),m,y,T[p+15],16,530742520),B,m,T[p+2],23,3299628645),d=a(d,B=a(B,m=a(m,y,d,B,T[p+0],6,4096336452),y,d,T[p+7],10,1126891415),m,y,T[p+14],15,2878612391),B,m,T[p+5],21,4237533241),d=a(d,B=a(B,m=a(m,y,d,B,T[p+12],6,1700485571),y,d,T[p+3],10,2399980690),m,y,T[p+10],15,4293915773),B,m,T[p+1],21,2240044497),d=a(d,B=a(B,m=a(m,y,d,B,T[p+8],6,1873313359),y,d,T[p+15],10,4264355552),m,y,T[p+6],15,2734768916),B,m,T[p+13],21,1309151649),d=a(d,B=a(B,m=a(m,y,d,B,T[p+4],6,4149444226),y,d,T[p+11],10,3174756917),m,y,T[p+2],15,718787259),B,m,T[p+9],21,3951481745),m=n(m,l),y=n(y,g),d=n(d,v),B=n(B,b);return c(m).concat(c(y),c(d),c(B))},V=function(){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r=t.split(""),n=function(t,n){var i,e,o=[],s="";for(totalChunks=Math.floor(16*t.length/3),i=0;i<16*t.length;i++)o.push(t[Math.floor(i/16)][i%16]);for(i=0;i<o.length;i+=3)s+=r[o[i]>>2],s+=r[(3&o[i])<<4|o[i+1]>>4],void 0!==o[i+1]?s+=r[(15&o[i+1])<<2|o[i+2]>>6]:s+="=",void 0!==o[i+2]?s+=r[63&o[i+2]]:s+="=";for(e=s.slice(0,64)+"\n",i=1;i<Math.ceil(s.length/64);i++)e+=s.slice(64*i,64*i+64)+(Math.ceil(s.length/64)==i+1?"":"\n");return e},i=function(r){r=r.replace(/\n/g,"");var n,i=[],e=[],o=[];for(n=0;n<r.length;n+=4)e[0]=t.indexOf(r.charAt(n)),e[1]=t.indexOf(r.charAt(n+1)),e[2]=t.indexOf(r.charAt(n+2)),e[3]=t.indexOf(r.charAt(n+3)),o[0]=e[0]<<2|e[1]>>4,o[1]=(15&e[1])<<4|e[2]>>2,o[2]=(3&e[2])<<6|e[3],i.push(o[0],o[1],o[2]);return i=i.slice(0,i.length-i.length%16)};return"function"==typeof Array.indexOf&&(t=r),{encode:n,decode:i}}();return{size:a,h2a:u,expandKey:D,encryptBlock:m,decryptBlock:y,Decrypt:n,s2a:f,rawEncrypt:l,aesEncrypt:v,aesDecrypt:b,dec:_,openSSLKey:p,a2h:h,enc:P,Hash:{MD5:k},Base64:V}}();"function"==typeof define&&define(function(){return GibberishAES});

    // 쿠키 생성
    function setCookie(e,o,t){var i=new Date;i.setDate(i.getDate()+t),cookies=e+"="+escape(o)+"; path=/ ",void 0!==t&&(cookies+=";expires="+i.toGMTString()+";"),document.cookie=cookies}
 
    // 쿠키 가져오기
    function getCookie(e){e+="=";var n=document.cookie,i=n.indexOf(e),t="";if(-1!=i){i+=e.length;var o=n.indexOf(";",i);-1==o&&(o=n.length),t=n.substring(i,o)}return unescape(t)}
	
	// 숫자에 , 넣기
	function numberWithCommas(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}
	
	
	
	/**
	 * 스크롤애드 광고 서버 통신 객체
	 */
	var ServerRequest = (function() {

		/**
		 * 작업 목록 - 서버 요청 작업을 동시에 여러개 진행하지 않도록 하기 위해 스풀링 처리함.
		 * @type Array
		 */
		var _job_pool = [];

		/**
		 * 작업 중인지 확인하는 인자. - 서버에 중복 request를 날리지 않게하기 위함.
		 * @type Boolean
		 */
		var _requesting = false;

		/**
		 * 작업 확인 간격 시간(ms)
		 * @type Number
		 */
		var _checking_interval = 200;

		/**
		 * 로그인 세션 삭제
		 * @returns {undefined}
		 */
		function sessionRemove() {
			setCookie('scrollads_login', 0);
			sessionStorage.removeItem('user');
			sessionStorage.removeItem('token');
			window.location.reload();
		}

		/**
		 * 토큰 추출
		 * @returns {Boolean}
		 */
		function getToken() {
			var tokenSesseion = sessionStorage.getItem('token');
			if (typeof tokenSesseion === 'undefined') {
				return false;
			} else {
				return tokenSesseion;
			}
		}
		var rsa = null;
		var rsa_key = {
			module: null,
			publicExponent: null,
			auth_token: getToken() ? getToken() : null
		};
		var aes_key = null;

		/**
		 * 인증키 설정
		 * @param {type} callback
		 * @returns {undefined}
		 */
		function rsa_get(callback) {
			var param = {'action': 'scrollads_action','url':'/rsa/public_key'};
			$.post(ajaxurl, param, function(res) { // wordpress admin ajax 를 사용함.
				var data = res;
				if (typeof data !== 'undefined' && data.success) {
					// -------------------------------------------------------------
					// rsa 준비
					rsa_key.module = data.payload.module;
					rsa_key.publicExponent = data.payload.publicExp;
					rsa = new RSAKey();
					rsa.setPublic(rsa_key.module, rsa_key.publicExponent);
					// aes 준비
					aes_key = randomKey32();
					callback.call();
					// -------------------------------------------------------------
				}
			},'json');
		}
		var lock_queue = {};

		/**
		 * 인증키 설정
		 * @param {type} token
		 * @returns {undefined}
		 */
		function set(token) {
			rsa_key.auth_token = token;
		}

		/**
		 * POST 작업 - 정확히는 작업예약.
		 * @param String url 서버 url.
		 * @param Object data 전달 데이터.
		 * @param Function callback 성공시 작업할 함수
		 * @param Function error 실패치 작업할 함수
		 * @param Boolean cache 캐시 사용 여부. True: 캐시 사용, False: 캐시 사용하지 않음.
		 * @returns Void 
		 */
		function post(url, data, callback, error, cache) {
			_job_pool.push({'url':url, 'data':data, 'callback':callback, 'error':error, 'cache':cache});
		}

		/**
		 * 암호화
		 * @param {type} p_str
		 * @returns {String}
		 */
		function encode(p_str) {
			return p_str ? AES_Encode(p_str, aes_key) : '';
		}
		
		/**
		 * 복호화
		 * @param {type} p_str
		 * @returns {String}
		 */
		function decode(p_str) {
			return p_str ? AES_Decode(p_str, aes_key) : '';
		}



		/**
		 * POST 작업 - 실제 작업. 예약된 정보를 받아서 실행함.
		 * @param String url 서버 url.
		 * @param Object data 전달 데이터.
		 * @param Function callback 성공시 작업할 함수
		 * @param Function error 실패치 작업할 함수
		 * @param Boolean cache 캐시 사용 여부. True: 캐시 사용, False: 캐시 사용하지 않음.
		 * @param Boolean stoptrack 트래킹 중단 여부. True: 트래킹 중단, False: 트리캥 실행. (Google Analytics)
		 * @returns Void
		 */
		function request_post(url, data, callback, error, cache, stoptrack) {
			_requesting = true;
			console.info('=========== api request ===========', (url), (data));
			cache = cache ? true : false ;
			var _self = this,
				init = function() {
					
					var data_origin = (data),
						param = {
							'rsa_module': rsa_key.module,
							'aes_key': rsa.encrypt(aes_key),
							'auth_token': rsa_key.auth_token ? AES_Encode(rsa_key.auth_token, aes_key) : '',
							'action': 'scrollads_action',
							'url':url
						};
					for (var idx in data) {
						// data[idx] = rsa.encrypt(encodeURIComponent(data[idx], 'UTF-8'));
						data[idx] = AES_Encode(encodeURIComponent(data[idx], 'UTF-8'), aes_key);
					}
					$.extend(param, data);
					var key = url + JSON.stringify(data);

					if (typeof lock_queue[key] === 'undefined' || !lock_queue[key]) {
						lock_queue[key] = true;
					} else {
						_requesting = false;
						//notify(gettextCatalog.getString('해당 요청이 처리중입니다.')+'<br>'+gettextCatalog.getString('잠시 후에 시도해주세요.'));
						return false;
					}
					$.ajax({
						url: ajaxurl,
						type: 'post',
						data: $.param(param),
						headers: {'Content-Type': 'application/x-www-form-urlencoded'},
						dataType: 'text',
//						'cache': cache,
						success: function(res) {
//							_self._requesting = false;
							_requesting = false;
							console.info('=========== api response success ===========', (url), (res));

							var _data = res;
							if(typeof _data == typeof '') { // 오류 메시지 전달 받을때 AES_Decode작업하면 오류발생해서 예외처리함.
								var result_decrypt = AES_Decode(_data, aes_key);
								_data = JSON.parse(result_decrypt);
							}
							console.info('=========== api response decode data ===========', (url), (_data));

							if(ajaxurl.indexOf('login')<0 && _data.error && _data.error.error_code=='3500') { // 로그인 작업이 아닌 다른 작업에서 토큰값 오류시 재 로그인
								// 로그아웃처리
								sessionRemove();
								return ;
							}
							
							lock_queue[key] = false;
							if (typeof callback == 'function') {
								if (typeof _data !== 'undefined') {
									if (_data.success) {
										// 성공시 콜백 등록된것 실행.
										callback(_data);
									} else {
										console.error('url: ' + url, ', data_origin: ', data_origin, ', fail data: ', (_data));
										// 실패시
										// 서버 오류 메시지 다국어 처리. - 서버 메시지 추가는 server.response.html 파일에 적어주세요.
										if ($.trim(_data.error.error_msg)!='') {
											_data.error.error_msg = gettextCatalog.getString(_data.error.error_msg);
										}
										if (_data.error.error_type == 'ScAuthException') {
											notify(gettextCatalog.getString('접근 권한이 없습니다.')+' '+gettextCatalog.getString('다시 로그인해주세요.'));
											sessionRemove();
										} else {
											if (typeof _data.error.error_msg !== 'undefined' && !_data.error.error_msg) {
												console.info(_data.error.error_msg ? _data.error.error_msg : (_data.error.error_type == 'ScUnknownException' ? gettextCatalog.getString('알 수 없는 오류가 발생했습니다.')+' '+gettextCatalog.getString('계속 해당오류가 발생하면, 관리자에게 알려주시기 바랍니다.') : ''));
											}
										}
										// 오류처리 함수 등로된것 실행. 없으면 패스
										if (typeof error === 'function') {
											error(_data.error);
										}
									}
								}
							}
						},
						error: function(error) {
//							_self._requesting = false;
							_requesting = false;
							console.error('=========== api response error ===========', (url), (error));

							var _data = error.config.data;
							if(typeof _data == typeof '') { // 오류 메시지 전달 받을때 AES_Decode작업하면 오류발생해서 예외처리함.
								var result_decrypt = AES_Decode(_data, aes_key);
								_data = JSON.parse(result_decrypt);
							}

							lock_queue[key] = false;
							if (typeof error === 'function') {
								error(obj.error);
							} else {
								console.error('알수 없는 오류가 발생했습니다. 다시 시도해주세요.', error);
							}
						}
					});
					
			};
			if (!rsa || !rsa_key.module || !rsa_key.publicExponent || !aes_key) {
				rsa_get(init);
			} else {
				init.call();
			}
		}
		
//		init.call();


		/**
		 * 작업 스풀링. - 0.1초 간격으로 예약된 작업 처리. 작업중일때는 실행하지 않고 기다림.
		 * @returns void
		 */
		function _spool() {
			if(!_requesting) {
				if(_job_pool.length>0) {
					// 작업 있을때
					_checking_interval = 450;
					var _job = _job_pool[0];
					request_post(_job.url, _job.data, _job.callback, _job.error, _job.cache);
					_job_pool = _job_pool.splice(1);
				} else {
					// 작업 없을때
					_checking_interval = 200;
				}
			}
			setTimeout(_spool, _checking_interval);
		}
		setTimeout(_spool, _checking_interval);



		/**
		 * POST 요청 결과를 파일로 받기 위한 다운로드 메소드.
		 * @param {type} url 액셀 다운로드 처리 주소.
		 * @param {type} data
		 * @returns {undefined}
		 */
		function download(url, data) {

			var url = window._scrollads_.URL_API_SERVER + url;
			var init = function() {
				url = "http:"+url;
				var data_origin = (data);
				var param = {
						rsa_module: rsa_key.module,
						aes_key: rsa.encrypt(aes_key),
						auth_token: rsa_key.auth_token ? AES_Encode(rsa_key.auth_token, aes_key) : ''
					}
				var $fm = "";
				var agent = navigator.userAgent;
				if (/msie|trident/i.test(agent)) {
					$fm = $('<form ng-submit="download_submit()" name="download_url" id="download_url" action="'+url+'" method="POST"></form>');
				}else{
					$fm = $('<form ng-submit="download_submit()" name="download_url" id="download_url" action="'+url+'" method="POST" target="hiddeniframe"></form>');
				}

				for (var idx in data) {
					data[idx] = AES_Encode(encodeURIComponent(data[idx], 'UTF-8'), aes_key);
				}
				$.extend(param, data);
				var key = url + JSON.stringify(data);
				if (typeof lock_queue[key] === 'undefined' || !lock_queue[key]) {
					lock_queue[key] = true;
				} else {
					notify(gettextCatalog.getString('해당 요청이 처리중입니다.')+'<br>'+gettextCatalog.getString('잠시 후에 시도해주세요.'));
					return false;
				}

				// 히든프레임 없으면 생성
				if($('#hiddeniframe').length<1) {
					$('body').append('<iframe name="hiddeniframe" id="hiddeniframe" src="about:blank" style="display:none;border:none;"></iframe>');
				}
				// 폼에 히든 값들 셋팅.
				for(i in param) {
					$fm.append('<input type="hidden" name="'+i+'" value="'+param[i]+'"/>');
				}
				for(i in data) {
					$fm.append('<input type="hidden" name="'+i+'" value="'+AES_Encode(encodeURIComponent(data[i], 'UTF-8'), aes_key)+'"/>');
				}
				//20170221 크롬 버전업으로 submit이 반드시 append를 해야 가능해졌음
				$('#hiddeniframe').after($fm);
				$('#download_url').submit();
				$('#download_url').remove();
				
				// 작업중 종료.
				lock_queue[key] = false;

			};
			if (!rsa || !rsa_key.module || !rsa_key.publicExponent || !aes_key) {
				rsa_get(init);
			} else {
				init.call();
			}
		}

		return {
			set: set,
			post: post,
			download: download
		};
	})();
	
	/**
	 * filterFactory generator
	 */
	var filterFactory = (function filterFactoryDef() {
		var filterFactory = function() {
			this.filter = [];
			this.sortField = '';
			this.sortDir = ''
			this.cls();
		};
		filterFactory.prototype.getObj = function(obj, type, operation) {
			var data = {};
			var key = Object.keys(obj);
			if (typeof type === 'undefined' || type == null) {
				type = 'string';
			}
			if (typeof operation === 'undefined' || operation == null) {
				operation = 'eq';
			}
			$.extend(data, {
				fieldName: key[0]
			});
			$.extend(data, {
				fieldValue: obj[key[0]]
			});
			$.extend(data, {
				valueType: type
			});
			$.extend(data, {
				operation: operation
			});
			return data;
		};
		filterFactory.prototype.get = function() {
			return {
				filterList: this.filter,
				sortField: this.sortField,
				sortDir: this.sortDir
			};
		};
		filterFactory.prototype.set = function(obj, type, operation) {
			var data = getObj(obj, type, operation);
			this.filter = [data];
		};
		filterFactory.prototype.setSortField = function(sortField) {
			this.sortField = sortField;
		};
		filterFactory.prototype.setSortDir = function(sortDir) {
			this.sortDir = sortDir;
		};
		filterFactory.prototype.push = function(obj, type, operation) {
			var data = this.getObj(obj, type, operation),
				pos = -1;
			for (var idx in this.filter) {
				if (this.filter[idx].fieldName == data.fieldName) {
					pos = idx;
					break;
				}
			}
			if (pos == -1) {
				this.filter.push(data);
			} else {
				this.filter[pos] = data;
			}
		};
		filterFactory.prototype.del = function(key) {
			for (var idx in this.filter) {
				if (this.filter[idx].fieldName == key) {
					this.filter.splice(idx, 1);
					break;
				}
			}
		};
		filterFactory.prototype.cls = function() {
			this.filter = [];
			this.filter.length = 0;
		};
		return filterFactory;
	})();


	/**
	 * 알림메시지 표시
	 * @param {type} p_msg
	 * @param {type} p_type ex)info, success, warning, danger
	 * @returns {undefined}
	 */
	function notify(p_msg, p_type) {
		p_msg = p_msg ? p_msg+'' : '';
		p_type = p_type ? p_type+'' : 'info'; // info, success, warning, danger
		var $html = $('<div class="alert alert-'+p_type+' fade in" role="alert">'+p_msg+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>').alert();
		$('#message').append($html);
	}
	
	/**
	 * 다국어 처리 객체.
	 * 다국어 번역은 PHP에서 처리. 결과를 wp localize script으로 받아옮.
	 * @type Object
	 */
	var gettextCatalog = {
		'getString': function(p_str) {
			if(scrollads_text_domain[sha1(p_str)]) {
				p_str=scrollads_text_domain[sha1(p_str)];
			}
			return p_str;
		}
	};
	
	// ---------------------------------------------------------------------- //
	// 로그인 
	
	/**
	 * 기본 로그인 - 일반사용자와 관리자 모두 로그일할때 사용한다.
	 * @param {type} user
	 * @param {type} callback
	 * @returns {undefined}
	 */
	function login(user, callback) {
		ServerRequest.post('/member/login', {
			user_type: user.type,
			user_id: user.id,
			user_pw: user.pw
		}, function(data) { // success
			var _token = $.trim(data.payload.auth.authToken);
			if(_token!='') {
				sessionStorage.setItem('user', JSON.stringify(data.payload.member));
				sessionStorage.setItem('token', _token);
				setCookie('scrollads_login', 1);
				ServerRequest.set(data.payload.auth.authToken);
			}
			if(typeof callback == typeof (function(){})){callback(true, data);}
		}, function(data) { // error
			if(typeof callback == typeof (function(){})){callback(false, data);}
		});
	}
	// relogin
	var _id = getCookie('scrollads_user_email'), _pw = getCookie('scrollads_site_key'), _token = $.trim(sessionStorage.getItem('token'));
	if(_id!=''&&_pw!='') {
		setCookie('scrollads_login', 0);
		login({'id':_id, 'pw':_pw, 'type':'3'}, function(){
			setCookie('scrollads_user_email','', -1);
			setCookie('scrollads_site_key','', -1);
		});
	}
	/**
	 * get user information on sessionStorage
	 */
	function getUser() {
		var userSesseion = sessionStorage.getItem('user');
		if (typeof userSesseion == typeof undefined) {
			return false;
		} else {
			return JSON.parse(userSesseion);
		}
	}
	

	// ---------------------------------------------------------------------- //
	// UI Components 
	
	// alert 
	$('.alert.alert-warning, .alert.alert-danger, .alert.alert-success, .alert.alert-info').alert();
	
	// date picker
	$('.datepicker').datepicker({changeMonth: true,changeYear: true});
	var _dateFormat = 'yy-mm-dd',
		$from = $(".datepicker_from").datepicker({
			defaultDate: "-1w",
			numberOfMonths: 2,
			'dateFormat':_dateFormat
		}).on( "change", function() {
			$to.datepicker( "option", "minDate", getDate( this ) );
		}),
		$to = $(".datepicker_to").datepicker({
			defaultDate: "0",
			numberOfMonths: 2,
			'dateFormat':_dateFormat
		}).on( "change", function() {
			$from.datepicker( "option", "maxDate", getDate( this ) );
		});
	function getDate(element) {
		var date;
		try {
			date = $.datepicker.parseDate(_dateFormat, element.value);
		} catch (error) {
			date = null;
		}
		return date;
	}
	
	// tab
	$('.nav.nav-tabs a').click(function(e){
		e.preventDefault();
		$(this).tab('show');
	});

	// ---------------------------------------------------------------------- //
	// 광고 설정
	if(window.location.href.indexOf('page=scrollads-adconfig')>-1) {
		
		// iframe 횡스크롤 숨기기.
		if($('#iframe_preview').length>0) {
			$($('#iframe_preview').get(0).contentDocument).find('body').css({'overflow-y': 'auto', 'overflow-x':'hidden'});
		}

		// 애니메이션 효과
		$("input.checkboxradio").checkboxradio({
			icon: false
		});

		// 택스트 광고 전환위치 silder
		$("#text_position_slider").slider({ 
			min: 30, max: 65, step: 5, value: 100 - $( '#text_position' ).val(),
			slide: function( event, ui ) { 
				$( '.line_text_position' ).css('top', (100 - ui.value) + '%' ); 
				$( '#text_position' ).val( (100 - ui.value) ); 
			}
		}).slider("pips", {
			rest: "label", step: 1, suffix: '%'
		}).slider("float");

		// 키워드 밀도 slider
		$("#keyword_exchage_percent_slider").slider({ 
			min: 10, max: 50, step: 5, value: $( '#keyword_exchage_percent' ).val(),
			slide: function( event, ui ) { $( '#keyword_exchage_percent' ).val( ui.value ); }
		}).slider("pips", {
			rest: "label", step: 1, suffix: ''
		}).slider("float");

		// 이미지 광고 전환위치 silder
		$("#image_position_slider").slider({ 
			min: 30, max: 100, step: 5, value: $( '#image_position' ).val(),
			slide: function( event, ui ) { 
				$( '#image_position' ).val( ui.value ); 
			}
		}).slider("pips", {
			rest: "label", step: 2, suffix: ''
		}).slider("float");

		// 광고의 이미지 간격 설정 slider
		$("#image_step_ratio_slider").slider({ 
			min: 1, max: 5, step: 1, value: $( '#image_step_ratio' ).val(),
			slide: function( event, ui ) { $( '#image_step_ratio' ).val( ui.value ); }
		}).slider("pips", {
			rest: "label", step: "1", suffix: ''
		}).slider("float");

		//광고 종류별 on/off 스위치 같음. 
		/*
		$('select[name^=ads_type]').change(function(){
			var val = $(this).val();
			if(val=='V') {
				$(this).siblings('[name^=ads_link]').attr('disabled',true);
			} else {
				$(this).siblings('[name^=ads_link]').attr('disabled',false);
			}
		});*/
		

		/**
		 * 광고 설정
		 */
		$('#btn_save_adconfig_basic').on('click', function(e){
			e.preventDefault();

			// check input value
			var $form = $('#form_config_basic'),
	//			$ads_area = $form.find('#ads_area'),
	//			ads_area = $.trim($ads_area.val())
				$alert = $('.alert')
				;

			// alert 초기화
			$alert.alert('close');

	//		if(ads_area==''){
	//			notify(gettextCatalog.getString("광고가 표시될 영역을 지정해주세요."));
	//			$ads_area.focus();
	//			return false;
	//		}

			$form.submit(); // save wordpress option

		});


	}
	// ---------------------------------------------------------------------- //
	// 사이트 등록 정보
	if(
		window.location.href.indexOf('page=scrollads-registration')>-1 ||
		window.location.href.indexOf('page=scrollads-properties')>-1
	) {
		
		/**
		 * 사이트 등록
		 */
		$('#btn_registe, #btn_save_config').on('click', function(e){
			e.preventDefault();

			// check input value
			var _url = '/member/register',
				param = {'user_type': 3},
				$form = $('#form-registe'),
				$alert = $('.alert'),
				$site_name = $form.find('#site_name'),
				site_name = $.trim($site_name.val()),
				$site_url = $form.find('#site_url'),
				site_url = $.trim($site_url.val()),
				$site_key = $form.find('#site_key'),
				site_key = $.trim($site_key.val()),
				$user_name = $form.find('#user_name'),
				user_name = $.trim($user_name.val()),
				$user_email = $form.find('#user_email'),
				user_email = $.trim($user_email.val()),
				$pid = $form.find('#pid');

			// alert 초기화
			$alert.alert('close');

			if(site_name==''){
				notify(gettextCatalog.getString("사이트 이름을 써주세요."));
				$site_name.focus();
				return false;
			}
			if(site_url==''){
				notify(gettextCatalog.getString("사이트 URL을 써주세요."));
				$site_url.focus();
				return false;
			}
			if(site_key==''){
				notify(gettextCatalog.getString("사이트 키값이 없습니다. 웹페이지를 새로고침한 후 다시 등록해주세요."));
				return false;
			}
			if(user_name==''){
				notify(gettextCatalog.getString("이름을 써주세요."));
				$user_name.focus();
				return false;
			}
			if(user_email==''){
				notify(gettextCatalog.getString("이메일을 써주세요."));
				$user_email.focus();
				return false;
			}

			// set parameters
			param.user_email = user_email;
			param.user_pw = site_key; //YwmvnVMqfddQyYn6
			param.user_name = user_name;
			param.site_name = site_name;
			param.site_url = site_url;

			// 작업경로
			if($(this).attr('id').indexOf('btn_save_config')>-1) {
				_url = '/member/update';
			} else {
				param.user_phone = '000000';
			}

			ServerRequest.post(_url, param, function(data) { // success
				var _pid = data.payload.advertId;
				if(_pid > 0) {
					$pid.val(_pid);
					notify(gettextCatalog.getString('등록 했습니다.'));
					$('#form-registe').submit(); // save wordpress option
				} else {
					notify(gettextCatalog.getString('등록하지 못했습니다. 잠시후 다시 시도해 주세요.'));
				}
			}, function(error) { // error
				if (error.error_type = 'ScInvalidParamException' && error.error_msg.length > 0) {
					notify(error.error_msg, 'warning');
				} else {
					notify(gettextCatalog.getString('등록하지 못했습니다. 잠시후 다시 시도해 주세요.'), 'warning');
				}
			});
		});

	}
	// ---------------------------------------------------------------------- //
	// dashboard
	if(window.location.href.indexOf('page=scrollads-dashboard')>-1) {

		var charts = [],
			dashboard = {
				data : {},
				init : function () {
					dashboard.data = {
						'cv' : 0, // 전체 콘텐츠 노출수
						'pv' : 0, // 전체 페이지 노출수
						'click' : 0, // 전체 클릭수
						'action' : 0, // 전체 전환수
						'price_in' : 0, // 전체 포인트 수입
						'price_out' : 0, // 전체 포인트 지출
						'ctr_pv' : 0, // 전체 페이지 클릭률
						'ctr_cv' : 0, // 전체 콘텐츠 클릭률
						'cvr_pv' : 0, // 전체 페이지 전환율
						'cvr_cv' : 0, // 전체 콘텐츠 전환율
						'row_data' : [], // 상세데이터(날짜, cv,pv,click,action,price_in,price_out)
						'row_labels' : [], // 차트용 라밸
						'row_chart_labels' : [], // 차트용 라밸
						'row_series' : [
							gettextCatalog.getString('날짜'),
							gettextCatalog.getString('콘텐츠 노출수'),
							gettextCatalog.getString('페이지 노출수'),
							gettextCatalog.getString('클릭수'),
							gettextCatalog.getString('콘텐츠 클릭률'),
							gettextCatalog.getString('페이지 클릭률'),
							gettextCatalog.getString('전환수'),
							gettextCatalog.getString('콘텐츠 전환율'),
							gettextCatalog.getString('페이지 전환율')
						]// 차트용 x축 값. 실제 데이터 연동시 변동됨.
					};
			},
			clearChart() {
				for (i in charts) {
					charts[i].destroy();
				}
			}
		};
		dashboard.init();
		// 통계데이터 가져오기
		// 검색 날짜.
		if( $('#stop_date').val()=='' || $('#stop_date').val()=='' ) {
			dashboard.start_day = dashboard.stop_day = new Date();
			dashboard.stop_day = new Date(dashboard.stop_day.getFullYear(), dashboard.stop_day.getMonth(), dashboard.stop_day.getDate()); // 오늘까지 구하도록 데이터로 설정
			dashboard.stop_date = date('Y-m-d', strtotime(dashboard.stop_day.toString())); //'2017-07-01'; // (dashboard.stop_day, 'yyyy-MM-dd');
			dashboard.start_day = new Date(dashboard.stop_day.getFullYear(), dashboard.stop_day.getMonth(), dashboard.stop_day.getDate() - 13); // 최근14일 데이터로 설정
			//	dashboard.start_day = new Date(dashboard.stop_day.getFullYear(), dashboard.stop_day.getMonth(), 1); // 이번달 1일로 설정
			dashboard.start_date = date('Y-m-d', strtotime(dashboard.start_day.toString())); //'2017-07-10'; //$filter('date')(dashboard.start_day, 'yyyy-MM-dd');
			$('#stop_date').val(dashboard.stop_date);
			$('#start_date').val(dashboard.start_date);
		} else {
			dashboard.start_date = $('#start_date').val();
			dashboard.start_day = new Date(dashboard.start_date.substr(0.4), dashboard.start_date.substr(5.2), dashboard.start_date.substr(8.2));
			dashboard.stop_date = $('#stop_date').val();
			dashboard.stop_day = new Date(dashboard.stop_date.substr(0.4), dashboard.stop_date.substr(5.2), dashboard.stop_date.substr(8.2));
		}
		$from.datepicker( "option", "maxDate", dashboard.stop_date );
		$to.datepicker( "option", "minDate", dashboard.start_date );

		dashboard.getSummaryData = function () {

			var _param = {
				'start_date' : dashboard.start_date,
				'stop_date' : dashboard.stop_date,
				'addsub' : dashboard.addsub == '1' ? 'Y' : 'N'
			},
			_apiurl = '/report2/daily/member';
			dashboard.data.row_chart_data = [];
			dashboard.data.row_chart_labels = [];
			dashboard.data.row_series = [];
			dashboard.browserLabel = [];
			dashboard.browserData = [];
			dashboard.deviceLabel = [];
			dashboard.deviceData = [];
			dashboard.osLabel = [];
			dashboard.osData = [];
			dashboard.publisherDeviceData = [];
			dashboard.publisherDataTotal = {
				cv : 0,
				click : 0,
				ctr : 0
			};
			dashboard.clearChart();


			// 데이터 요청
			ServerRequest.post(_apiurl, _param, function (data) {

				if (typeof data.payload == typeof undefined) {
					return;
				}
				dashboard.init();
				var _payloadtotal = data.payload.total;
				// total summary data 화면용으로 정리
				dashboard.data.cv = _payloadtotal.cv | 0, // 전체 콘텐츠 노출수
				dashboard.data.cv_pc = _payloadtotal.cv_pc | 0, // 전체 콘텐츠 노출수
				dashboard.data.cv_mo = _payloadtotal.cv_mo | 0, // 전체 콘텐츠 노출수

				dashboard.data.pv = _payloadtotal.pv | 0, // 전체 페이지 노출수

				dashboard.data.click = _payloadtotal.click | 0, // 전체 클릭수
				dashboard.data.click_pc = _payloadtotal.click_pc | 0, // 전체 클릭수
				dashboard.data.click_mo = _payloadtotal.click_mo | 0, // 전체 클릭수

				dashboard.data.action = _payloadtotal.action | 0, // 전체 전환수
				dashboard.data.action_pc = _payloadtotal.action_pc | 0, // 전체 전환수
				dashboard.data.action_mo = _payloadtotal.action_mo | 0, // 전체 전환수

				dashboard.data.price_in = _payloadtotal.price_in | 0, // 전체 포인트 수입
				dashboard.data.price_in_pc = _payloadtotal.price_in_pc | 0, // 전체 포인트 수입
				dashboard.data.price_in_mo = _payloadtotal.price_in_mo | 0, // 전체 포인트 수입

				dashboard.data.price_out = _payloadtotal.price_out | 0, // 전체 포인트 지출
				dashboard.data.price_out_pc = _payloadtotal.price_out_pc | 0, // 전체 포인트 지출
				dashboard.data.price_out_mo = _payloadtotal.price_out_mo | 0, // 전체 포인트 지출

				dashboard.data.avr_price = 0;
				if (_payloadtotal.price_in != 0 && _payloadtotal.click != 0) {
					dashboard.data.avr_price = parseInt(_payloadtotal.price_in / _payloadtotal.click * 100) / 100;
				}

				dashboard.data.ctr_pv = _payloadtotal.pv && _payloadtotal.click ? _payloadtotal.click / _payloadtotal.pv * 100 : 0, // 전체 페이지 클릭률
				dashboard.data.ctr_pv_pc = _payloadtotal.pv && _payloadtotal.click_pc ? _payloadtotal.click_pc / _payloadtotal.pv * 100 : 0, // 전체 페이지 클릭률
				dashboard.data.ctr_pv_mo = _payloadtotal.pv && _payloadtotal.click_mo ? _payloadtotal.click_mo / _payloadtotal.pv * 100 : 0, // 전체 페이지 클릭률

				dashboard.data.ctr_cv = _payloadtotal.cv && _payloadtotal.click ? _payloadtotal.click / _payloadtotal.cv * 100 : 0, // 전체 콘텐츠 클릭률
				dashboard.data.ctr_cv_pc = _payloadtotal.cv_pc && _payloadtotal.click_pc ? _payloadtotal.click_pc / _payloadtotal.cv_pc * 100 : 0, // 전체 콘텐츠 클릭률
				dashboard.data.ctr_cv_mo = _payloadtotal.cv_mo && _payloadtotal.click_mo ? _payloadtotal.click_mo / _payloadtotal.cv_mo * 100 : 0, // 전체 콘텐츠 클릭률

				dashboard.data.cvr_pv = _payloadtotal.pv && _payloadtotal.action ? _payloadtotal.action / _payloadtotal.pv * 100 : 0, // 전체 페이지 전환율
				dashboard.data.cvr_pv_pc = _payloadtotal.pv && _payloadtotal.action_pc ? _payloadtotal.action_pc / _payloadtotal.pv * 100 : 0, // 전체 페이지 전환율
				dashboard.data.cvr_pv_mo = _payloadtotal.pv && _payloadtotal.action_mo ? _payloadtotal.action_mo / _payloadtotal.pv * 100 : 0, // 전체 페이지 전환율

				dashboard.data.cvr_cv = _payloadtotal.cv && _payloadtotal.action ? _payloadtotal.action / _payloadtotal.cv * 100 : 0 // 전체 콘텐츠 전환율
					dashboard.data.cvr_cv_pc = _payloadtotal.cv_pc && _payloadtotal.action_pc ? _payloadtotal.action_pc / _payloadtotal.cv_pc * 100 : 0 // 전체 콘텐츠 전환율
					dashboard.data.cvr_cv_mo = _payloadtotal.cv_mo && _payloadtotal.action_mo ? _payloadtotal.action_mo / _payloadtotal.cv_mo * 100 : 0 // 전체 콘텐츠 전환율
			;
				// rowdata 화면용으로 정리
				var _list_data = data.payload.reportDailyMember;

				var _c_date = [],
				_c_cv = [],
				_c_cv_pc = [],
				_c_cv_mo = [],
				_c_pv = [],
				_c_click = [],
				_c_click_pc = [],
				_c_click_mo = [],
				_c_action = [],
				_c_action_pc = [],
				_c_action_mo = [],
				_c_ctr_cv = [],
				_c_ctr_cv_pc = [],
				_c_ctr_cv_mo = [],
				_c_ctr_pv = [],
				_c_ctr_pv_pc = [],
				_c_ctr_pv_mo = [],
				_c_cvr_cv = [],
				_c_cvr_cv_pc = [],
				_c_cvr_cv_mo = [],
				_c_cvr_pv = [],
				_c_cvr_pv_pc = [],
				_c_cvr_pv_mo = [];
				var _c_price_in = [],
				_c_price_in_pc = [],
				_c_price_in_mo = [],
				_c_price_out = [],
				_c_price_out_pc = [],
				_c_price_out_mo = [],
				_c_avr_price = [],
				_c_avr_price_pc = [],
				_c_avr_price_mo = [];
				//종료날짜부터 시작날짜까지
				var _date = dashboard.stop_date,
				_day = new Date((strtotime(_date) + '000') * 1),
				l = 0,
				item = [];
				// 기준 항목(날짜)에 맞는 데이터가 있는지 확인하여 출력에 필요한 데이터 만들기.
				while (date('Y-m-d',strtotime(_day.toString())) >= dashboard.start_date && l < 1000) {
					var _exists_date = false,
					_date = date('Y-m-d',_day);
					for (i in _list_data) { // 필요 데이터 생성
						var _row = _list_data[i];
						_row.pv = $.trim(_row.pv).replace(/[^0-9]/g, '');
						_row.sumviews = $.trim(_row.sumviews).replace(/[^0-9]/g, '');
						_row.sumclicks = $.trim(_row.sumclicks).replace(/[^0-9]/g, '');
						_row.sumactions = $.trim(_row.sumactions).replace(/[^0-9]/g, '');
						_row.price_in = $.trim(_row.price_in).replace(/[^0-9]/g, '');
						_row.price_out = $.trim(_row.price_out).replace(/[^0-9]/g, '');
						// 해당 날짜의 값을 추출
						if (_row.date == _date) {
							_exists_date = true;
							_c_date.push(_row.date);
							_c_pv.push(_row.pv | 0);
							_c_cv.push(_row.cv | 0);
							_c_cv_pc.push(_row.cv_pc | 0);
							_c_cv_mo.push(_row.cv_mo | 0);
							_c_click.push(_row.click | 0);
							_c_click_pc.push(_row.click_pc | 0);
							_c_click_mo.push(_row.click_mo | 0);
							_c_action.push(_row.action | 0);
							_c_action_pc.push(_row.action_pc | 0);
							_c_action_mo.push(_row.action_mo | 0);
							_c_price_in.push(_row.price_in | 0);
							_c_price_in_pc.push(_row.price_in_pc | 0);
							_c_price_in_mo.push(_row.price_in_mo | 0);
							_c_price_out.push(_row.price_out | 0);
							_c_price_out_pc.push(_row.price_out_pc | 0);
							_c_price_out_mo.push(_row.price_out_mo | 0);
							if (_row.price_in != 0 && _row.click != 0) {
								_c_avr_price.push(parseInt(_row.price_in / _row.click * 100) / 100);
							} else {
								_c_avr_price.push(0);
							}

							_c_ctr_pv.push(_row.pv && _row.click ? (_row.click / _row.pv * 100).toFixed(2) : 0);
							_c_ctr_pv_pc.push(_row.pv && _row.click_pc ? (_row.click_pc / _row.pv * 100).toFixed(2) : 0);
							_c_ctr_pv_mo.push(_row.pv && _row.click_mo ? (_row.click_mo / _row.pv * 100).toFixed(2) : 0);
							_c_ctr_cv.push(_row.cv && _row.click ? (_row.click / _row.cv * 100).toFixed(2) : 0);
							_c_ctr_cv_pc.push(_row.cv_pc && _row.click_pc ? (_row.click_pc / _row.cv_pc * 100).toFixed(2) : 0);
							_c_ctr_cv_mo.push(_row.cv_mo && _row.click_mo ? (_row.click_mo / _row.cv_mo * 100).toFixed(2) : 0);
							_c_cvr_pv.push(_row.pv && _row.action ? (_row.action / _row.pv * 100).toFixed(2) : 0);
							_c_cvr_pv_pc.push(_row.pv && _row.action_pc ? (_row.action_pc / _row.pv * 100).toFixed(2) : 0);
							_c_cvr_pv_mo.push(_row.pv && _row.action_mo ? (_row.action_mo / _row.pv * 100).toFixed(2) : 0);
							_c_cvr_cv.push(_row.cv && _row.action ? (_row.action / _row.cv * 100).toFixed(2) : 0);
							_c_cvr_cv_pc.push(_row.cv && _row.action_pc ? (_row.action_pc / _row.cv_pc * 100).toFixed(2) : 0);
							_c_cvr_cv_mo.push(_row.cv && _row.action_mo ? (_row.action_mo / _row.cv_mo * 100).toFixed(2) : 0);
							break;
						}
					}
					if (!_exists_date) { // 해당 날짜의 값이 없으면 전부 0으로 초기화
						_c_date.push(_date);
						_c_pv.push(0);
						_c_cv.push(0);
						_c_cv_pc.push(0);
						_c_cv_mo.push(0);
						_c_click.push(0);
						_c_click_pc.push(0);
						_c_click_mo.push(0);
						_c_action.push(0);
						_c_action_pc.push(0);
						_c_action_mo.push(0);
						_c_price_in.push(0);
						_c_price_in_pc.push(0);
						_c_price_in_mo.push(0);
						_c_price_out.push(0);
						_c_price_out_pc.push(0);
						_c_price_out_mo.push(0);
						_c_avr_price.push(0);
						_c_avr_price_pc.push(0);
						_c_avr_price_mo.push(0);
						_c_ctr_pv.push(0);
						_c_ctr_pv_pc.push(0);
						_c_ctr_pv_mo.push(0);
						_c_ctr_cv.push(0);
						_c_ctr_cv_pc.push(0);
						_c_ctr_cv_mo.push(0);
						_c_cvr_pv.push(0);
						_c_cvr_pv_pc.push(0);
						_c_cvr_pv_mo.push(0);
						_c_cvr_cv.push(0);
						_c_cvr_cv_pc.push(0);
						_c_cvr_cv_mo.push(0);
					}
					//				_day = new Date(_day.getFullYear(),_day.getMonth(),_day.getDate() +1 ), l++;  // 화면에 오름차순으로 표시
					_day = new Date(_day.getFullYear(), _day.getMonth(), _day.getDate() - 1),
					l++; // 화면에 내림차순으로 표시
				}

				dashboard.data.row_labels = _c_date;
				dashboard.data.row_chart_labels = _c_date.reverse();
				if (dashboard.realtime == '1') {
					dashboard.data.row_chart_labels = _c_date;
				}


				dashboard.getReportData = function (report_type) {
					dashboard.data.row_series = [gettextCatalog.getString('수익금액'), gettextCatalog.getString('노출수'), gettextCatalog.getString('클릭수'), gettextCatalog.getString('클릭률(%)')];
					dashboard.data.row_data = [_c_price_in, _c_cv, _c_click, _c_ctr_cv];
					dashboard.data.row_chart_data = [_c_price_in.reverse(), _c_cv.reverse(), _c_click.reverse(), _c_ctr_cv.reverse()];
					if (dashboard.realtime == '1') {
						dashboard.data.row_chart_data = [_c_price_in, _c_cv, _c_click, _c_ctr_cv];
					}
					dashboard.data.row_total = [dashboard.data.price_in, dashboard.data.cv, dashboard.data.click, dashboard.data.ctr_cv];
					dashboard.data.row_series.push(gettextCatalog.getString("평균단가"));
					dashboard.data.row_data.push(_c_avr_price);
					if (dashboard.realtime == '1') {
						dashboard.data.row_chart_data.push(_c_avr_price);
					} else {
						dashboard.data.row_chart_data.push(_c_avr_price.reverse());
					}
					dashboard.data.row_total.push(dashboard.data.avr_price);
				}
				dashboard.getReportData(dashboard.reportData);

				// amchart . 노출수 클릭수
				var am_chartData = [];
				for (i in dashboard.data.row_chart_labels) {
					am_chartData.push({
						"date" : dashboard.data.row_chart_labels[i],
						"c0" : dashboard.data.row_chart_data[0][i], // 지출금액
						"c1" : dashboard.data.row_chart_data[1][i], // cv
						"c2" : dashboard.data.row_chart_data[2][i], // clicks
						"c3" : dashboard.data.row_chart_data[3][i], // ctr
						"bulletClass" : dashboard.realtime == '1' && dashboard.data.row_chart_labels.length - 1 == i ? "lastBullet" : "",
						"dashLengthColumn" : dashboard.realtime == '1' && dashboard.data.row_chart_labels.length - 1 == i ? "5" : "",
						"alpha" : dashboard.realtime == '1' && dashboard.data.row_chart_labels.length - 1 == i ? 0.2 : 1
					});
				}

				var chart1 = {};
				chart1 = AmCharts.makeChart("amChart_1", {
					type : "serial",
					fontSize : 12,
					fontFamily : "Open Sans",
					dataDateFormat : "YYYY-MM-DD",
					dataProvider : am_chartData,
					export : {
						"enabled" : true
					},
					addClassNames : true,
					startDuration : 0.8,
					color : "#6c7b88",
					marginLeft : 0,
					// x축 설정
					categoryField : "date",
					categoryAxis : {
						parseDates : dashboard.realtime == '1' ? false : true,
						dashLength : 1,
						minorGridEnabled : true,
						labelFunction : dashboard.realtime == '1' ? function (valueText, date, categoryAxis) {
							return valueText ? valueText + '시' : '';
						}
						 : function (valueText, date, categoryAxis) {
							return date.toLocaleDateString();
						}, // 날짜 표시방식을 YYYY.M.D 로 표시 하게
						gridColor : "#FFFFFF",
						axisColor : "#555555"
					},
					// Y축 설정
					'valueAxes' : [{
							'id' : "a1",
							'title' : gettextCatalog.getString("노출수"),
							'position' : "left",
							'gridAlpha' : 0,
							'axisAlpha' : 0
						}, {
							'id' : "a2",
							'title' : gettextCatalog.getString("클릭수"),
							'position' : "right",
							'gridAlpha' : 0,
							'axisAlpha' : 0,
							'precision' : 0
						}, {
							'id' : "a3",
							'title' : gettextCatalog.getString("수익"),
							'position' : "left",
							'gridAlpha' : 0,
							'axisAlpha' : 0,
							'precision' : 0,
							"offset": 70
						}
					],
					// 그래프 설정
					graphs : [
						// 첫번째 바그래프
						{
							id : "g1",
							valueField : "c1",
							title : dashboard.data.row_series[1], //gettextCatalog.getString("노출수"),
							type : "column",
							fillAlphas : 0.7,
							valueAxis : "a1",
							balloonText : gettextCatalog.getString("[[value]]번 노출"),
							legendValueText : gettextCatalog.getString("[[value]]번 노출"),
							// legendPeriodValueText: "total: [[value.sum]] mi", // 범ㄹ체에 추가되는 내용.
							lineColor : "#BDBDBD",
							alphaField : "alpha",
							dashLengthField : "dashLengthColumn"
						},
						// 두번째 움직이는 점선 라인 그래프
						{
							id : "g2",
							valueField : "c2",
							classNameField : "bulletClass",
							title : dashboard.data.row_series[2], //gettextCatalog.getString("클릭수"),
							type : "smoothedLine",
							valueAxis : "a2",
							lineColor : "#F94B71",
							lineThickness : 2,
							lineAlpha : 0.8,
							legendValueText : gettextCatalog.getString("[[value]]번 클릭"),
							bullet : "round", // 블릿 이미지 형식.
							"bulletSize" : 8,
							//bulletSizeField: "c3",
							bulletBorderColor : "#F94B71",
							bulletBorderAlpha : 1,
							bulletBorderThickness : 4, // 블릿 태두리선 두깨
							bulletColor : "#FFFFFF",
							labelPosition : "right",
							balloonText : gettextCatalog.getString("[[value]]번 클릭"),
							showBalloon : true, // 풍선 보기
							animationPlayed : true // 애니메이션 보기.
						}, {
							id : "g3",
							valueField : "c0",
							classNameField : "bulletClass",
							title : dashboard.data.row_series[0],
							type : "line",
							dashLength : 0,
							valueAxis : "a3",
							lineColor : "#BB2929",
							lineThickness : 4,
							lineAlpha : 0.8,
							//fillAlphas: 0.2,
							legendValueText : gettextCatalog.getString("[[value]]원 수익"),
							// descriptionField: "townName",
							bullet : "triangleUp", // 블릿 이미지 형식.
							//bulletSizeField: "c3",
							bulletBorderColor : "#BB2929",
							bulletBorderAlpha : 1,
							bulletSize : 8,
							bulletBorderThickness : 4, // 블릿 태두리선 두깨
							bulletColor : "#FFEFEF",
							// labelText: "[[townName2]]",
							labelPosition : "right",
							balloonText : gettextCatalog.getString("[[value]]원 수익"),
							showBalloon : true, // 풍선 보기
							animationPlayed : true // 애니메이션 보기.
						}
					],
					// 커서 관련 옵션
					chartCursor : {
						zoomable : false,
						categoryBalloonDateFormat : "YYYY.M.D",
						cursorAlpha : 0,
						categoryBalloonColor : "#e26a6a",
						categoryBalloonAlpha : 0.8,
						valueBalloonsEnabled : false
					},
					// 범례관련 옵션.
					legend : {
						bulletType : "round",
						equalWidths : true,
						valueWidth : 80,
						useGraphSettings : true, // 그래프마다 아이콘이 적용됨.라인은 라인으로 바는 바로
						color : "#6c7b88" // 글자색
					}
				});
				
				// 일별 상세 정보
				var _tr = '', _row_labels = dashboard.data.row_labels, _row_data = dashboard.data.row_data, _row_total = dashboard.data.row_total;
				for ( i=0; i<_row_labels.length; i++) {
					var _date = _row_labels[i];
					_tr += '<tr ng-repeat="date in data.row_labels"><td class="text-center">'+_date+'</td>';
					for ( j=0; j<_row_data.length; j++) {
						_tr += '<td class="numeric text-right">'+netural_number_format(_row_data[j][i],2)+'</td>';
					}
					_tr += '</tr>';
				}
				_tr += '<tr><td class="text-center" translate>'+gettextCatalog.getString("합계")+'</td>';
				for (i=0; i<_row_total.length; i++) {
					var _val = _row_total[i];
					_tr += '<td class="numeric text-right">'+netural_number_format(_val,2)+'</td>';
				}
				$('#table_1 tbody').empty().append(_tr);
				
				// dashboard.data 값 화면에 출력
				$('#price_in').html('<small>$</small>'+netural_number_format(dashboard.data.price_in));
				$('#my_point').text(netural_number_format(dashboard.data.my_point));
				$('#cv').text(netural_number_format(dashboard.data.cv));
				$('#click').text(netural_number_format(dashboard.data.click));
				$('#ctr_cv').html(netural_number_format(dashboard.data.ctr_cv, 2)+'<small>%</small>');
				
				// 디바이스 통계 데이터
				var _url = '/report/publisher/software';
				// 디바이스 통계 데이터
				ServerRequest.post(_url, {
					start_date : dashboard.start_date,
					stop_date : dashboard.stop_date,
					report_type : 'device'
				}, function (data) {
					var _chartsData = {label:[], view:[], click:[]};
					dashboard.deviceViewTotal = 0, dashboard.deviceClickTotal = 0;
					var charts = data.payload ? data.payload : [];
					for (var idx in charts) {
						var data = charts[idx];
						_chartsData.view.push(parseInt(data.sumviews.replace(/[^0-9.]/g, ''))); // view 값
						_chartsData.click.push(parseInt(data.sumclicks.replace(/[^0-9.]/g, ''))); // view 값
						_chartsData.label.push(data.device);
						dashboard.deviceViewTotal += parseInt(data.sumviews.replace(/[^0-9.]/g, ''));
						dashboard.deviceClickTotal += parseInt(data.sumclicks.replace(/[^0-9.]/g, ''));
					}
					dashboard.deviceLabel = _chartsData.label;
					dashboard.deviceView = _chartsData.view;
					dashboard.deviceClick = _chartsData.click;
					var views_data_1 = [], click_data_1 = [],
						color_2 = ["#e384a6", "#f4d499", "#4d90d6", "#c7e38c", "#E5E8E8", "#9986c8", "#edf28c", "#ffd1d4", "#5ee1dc", "#b0eead", "#fef85a", "#8badd2"],
						device_column = dashboard.deviceLabel;
					for (var index = 0; index < dashboard.deviceView.length; index++) {
						var percent = dashboard.deviceView[index] / dashboard.deviceViewTotal * 100;
						percent = Math.round(percent, 2);
						views_data_1[index] = {
							color : color_2[index],
							name : device_column[index],
							y : dashboard.deviceView[index]
						}
					};
					for (var index = 0; index < dashboard.deviceClick.length; index++) {
						var percent = dashboard.deviceClick[index] / dashboard.deviceClickTotal * 100;
						percent = Math.round(percent, 2);
						click_data_1[index] = {
							color : color_2[index],
							name : device_column[index],
							y : dashboard.deviceClick[index]
						}
					};
					// amChart - device
					if(views_data_1.length>0) {
						AmCharts.makeChart("amChart_cv_device", {
							"type" : "pie",
							"theme" : "light",
							"outlineColor" : "#FFFFFF",
							"dataProvider" : views_data_1,
							"colorField" : "color",
							"titleField" : "name",
							"valueField" : "y",
							"labelRadius" : -50,
							"radius" : "42%",
							"innerRadius" : "60%",
							"labelText" : "[[name]]",
							"balloonText" : "[[value]]",
							"balloonFunction" : function (data) {
								var return_str = "";
								return_str = data.title + ":  " + data.percents.toFixed(2) + "%(" + numberWithCommas(data.value) + ")";
								if (views_data_3.length == 3 && views_data_3[0].name == '') {
									return_str = "no data";
								}
								return return_str;
							},
							"export" : {
								"enabled" : true
							}
						});
					}
					if(click_data_1.length>0) {
						AmCharts.makeChart("amChart_click_device", {
							"type" : "pie",
							"theme" : "light",
							"outlineColor" : "#FFFFFF",
							"dataProvider" : click_data_1,
							"colorField" : "color",
							"titleField" : "name",
							"valueField" : "y",
							"labelRadius" : -50,
							"radius" : "42%",
							"innerRadius" : "60%",
							"labelText" : "[[name]]",
							"balloonText" : "[[value]]",
							"balloonFunction" : function (data) {
								var return_str = "";
								return_str = data.title + ":  " + data.percents.toFixed(2) + "%(" + numberWithCommas(data.value) + ")";
								if (views_data_3.length == 3 && views_data_3[0].name == '') {
									return_str = "no data";
								}
								return return_str;
							},
							"export" : {
								"enabled" : true
							}
						});
					}
				}, function (error) {
					notify(error);
				});
				
				// 브라우저 통계 데이터
				ServerRequest.post(_url, {
					start_date : dashboard.start_date,
					stop_date : dashboard.stop_date,
					report_type : 'browser'
				}, function (data) {
					var _chartsData = {label:[], view:[], click:[]};
					dashboard.browserViewTotal = 0, dashboard.browserClickTotal = 0;
					var charts = data.payload && data.payload ? data.payload : [];
					for (var idx in charts) {
						var data = charts[idx];
						_chartsData.view.push(parseInt(data.sumviews.replace(/[^0-9.]/g, ''))); // view 값
						_chartsData.click.push(parseInt(data.sumclicks.replace(/[^0-9.]/g, ''))); // view 값
						_chartsData.label.push(data['b.name']);
						dashboard.browserViewTotal += parseInt(data.sumviews.replace(/[^0-9.]/g, ''));
						dashboard.browserClickTotal += parseInt(data.sumclicks.replace(/[^0-9.]/g, ''));
					}
					dashboard.browserLabel = _chartsData.label;
					dashboard.browserView = _chartsData.view;
					dashboard.browserClick = _chartsData.click;

					var color_3 = ["#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#0D8ECF", "#0D52D1", "#2A0CD0", "#8A0CCF", "#CD0D74"],
					browser_column = dashboard.browserLabel,
					views_data_2 = [], click_data_2 = [];
					for (var index = 0; index < dashboard.browserView.length; index++) {
						var percent = dashboard.browserView[index] / dashboard.browserViewTotal * 100;
						//percent = percent.toFixed(2)*1;
						percent = Math.round(percent, 2);
						views_data_2[index] = {
							color : color_3[index],
							name : browser_column[index],
							y : dashboard.browserView[index]
						};
					}
					for (var index = 0; index < dashboard.browserClick.length; index++) {
						var percent = dashboard.browserClick[index] / dashboard.browserClickTotal * 100;
						//percent = percent.toFixed(2)*1;
						percent = Math.round(percent, 2);
						click_data_2[index] = {
							color : color_3[index],
							name : browser_column[index],
							y : dashboard.browserClick[index]
						};
					}

					// amChart - browser
					if(views_data_2.length>0) {
						AmCharts.makeChart("amChart_cv_browser", {
							"type" : "serial",
							"theme" : "none",
							"categoryField" : "name",
							"rotate" : true,
							"startDuration" : 1,
							"categoryAxis" : {
								"gridPosition" : "start",
								"position" : "left"
							},
							"trendLines" : [],
							"graphs" : [{
									"balloonText" : "[[category]]:[[value]]",
									"fillAlphas" : 0.8,
									"id" : "amChart_cv_browser",
									"lineAlpha" : 0.2,
									"fillColorsField" : "color",
									"title" : "y",
									"type" : "column",
									"valueField" : "y"
								}
							],
							"guides" : [],
							"valueAxes" : [{
									"id" : "ValueAxis-1",
									"position" : "top",
									"axisAlpha" : 0
								}
							],
							"allLabels" : [],
							"balloon" : {},
							"titles" : [],
							"dataProvider" : views_data_2,
							"export" : {
								"enabled" : true
							}
						});
					}
					if(click_data_2.length>0) {
						AmCharts.makeChart("amChart_click_browser", {
							"type" : "serial",
							"theme" : "none",
							"categoryField" : "name",
							"rotate" : true,
							"startDuration" : 1,
							"categoryAxis" : {
								"gridPosition" : "start",
								"position" : "left"
							},
							"trendLines" : [],
							"graphs" : [{
									"balloonText" : "[[category]]:[[value]]",
									"fillAlphas" : 0.8,
									"id" : "amChart_click_browser",
									"lineAlpha" : 0.2,
									"fillColorsField" : "color",
									"title" : "y",
									"type" : "column",
									"valueField" : "y"
								}
							],
							"guides" : [],
							"valueAxes" : [{
									"id" : "ValueAxis-1",
									"position" : "top",
									"axisAlpha" : 0
								}
							],
							"allLabels" : [],
							"balloon" : {},
							"titles" : [],
							"dataProvider" : click_data_2,
							"export" : {
								"enabled" : true
							}
						});
					}
//					checkEmptyData(chart6);
				});
				
				// OS 통계 데이터
				ServerRequest.post(_url, {
					start_date : dashboard.start_date,
					stop_date : dashboard.stop_date,
					report_type : 'os'
				}, function (data) {
					var _chartsData = {
						label : [],
						view : [], //data : [],
						click : []
					};
					dashboard.osViewTotal = 0, dashboard.osClickTotal = 0;
					var charts = data.payload && data.payload ? data.payload : [];
					for (var idx in charts) {
						var data = charts[idx];
						_chartsData.view.push(parseInt(data.sumviews.replace(/[^0-9.]/g, ''))); // view 값
						_chartsData.click.push(parseInt(data.sumclicks.replace(/[^0-9.]/g, ''))); // view 값
						_chartsData.label.push(data['o.name']);
						dashboard.osViewTotal += parseInt(data.sumviews.replace(/[^0-9.]/g, ''));
						dashboard.osClickTotal += parseInt(data.sumclicks.replace(/[^0-9.]/g, ''));
					}
					dashboard.osLabel = _chartsData.label;
					dashboard.osView = _chartsData.view;
					dashboard.osClick = _chartsData.click;
					var views_data_3 = [], click_data_3 = [],
						color_4 = ["#495fba", "#e8d685", "#ae85c9", "#c9f0e1", "#d48652", "#629b6d", "#719dc3", "#719dc3"],
						os_column = dashboard.osLabel;

					for (var index = 0; index < dashboard.osView.length; index++) {
						var percent =  dashboard.osView[index] / dashboard.osViewTotal * 100;;
						views_data_3[index] = {
							color : color_4[index],
							name : os_column[index],
							y : dashboard.osView[index]
						}
					}
					for (var index = 0; index < dashboard.osClick.length; index++) {
						var percent =  dashboard.osClick[index] / dashboard.osClickTotal * 100;;
						click_data_3[index] = {
							color : color_4[index],
							name : os_column[index],
							y : dashboard.osClick[index]
						}
					}
						
					// amChart - os
					if(views_data_3.length>0) {
						AmCharts.makeChart("amChart_cv_os", {
							"type" : "serial",
							"theme" : "none",
							"categoryField" : "name",
							"rotate" : true,
							"startDuration" : 1,
							"categoryAxis" : {
								"gridPosition" : "start",
								"position" : "left"
							},
							"trendLines" : [],
							"graphs" : [{
									"balloonText" : "[[category]]:[[value]]",
									"fillAlphas" : 0.8,
									"id" : "amChart_cv_os",
									"lineAlpha" : 0.2,
									"fillColorsField" : "color",
									"title" : "y",
									"type" : "column",
									"valueField" : "y"
								}
							],
							"guides" : [],
							"valueAxes" : [{
									"id" : "ValueAxis-1",
									"position" : "top",
									"axisAlpha" : 0
								}
							],
							"allLabels" : [],
							"balloon" : {},
							"titles" : [],
							"dataProvider" : views_data_3,
							"export" : {
								"enabled" : true
							}
						});
					}
					// amChart - os
					if(click_data_3.length>0) {
						AmCharts.makeChart("amChart_click_os", {
							"type" : "serial",
							"theme" : "none",
							"categoryField" : "name",
							"rotate" : true,
							"startDuration" : 1,
							"categoryAxis" : {
								"gridPosition" : "start",
								"position" : "left"
							},
							"trendLines" : [],
							"graphs" : [{
									"balloonText" : "[[category]]:[[value]]",
									"fillAlphas" : 0.8,
									"id" : "amChart_click_os",
									"lineAlpha" : 0.2,
									"fillColorsField" : "color",
									"title" : "y",
									"type" : "column",
									"valueField" : "y"
								}
							],
							"guides" : [],
							"valueAxes" : [{
									"id" : "ValueAxis-1",
									"position" : "top",
									"axisAlpha" : 0
								}
							],
							"allLabels" : [],
							"balloon" : {},
							"titles" : [],
							"dataProvider" : click_data_3,
							"export" : {
								"enabled" : true
							}
						});
					}
//					checkEmptyData(chart6);
				});
				
				
				
				
				// 자동 갱신
				// 실시간만 새로고침함.
				if (dashboard.realtime == '1') {
					setTimeout(function () {
						dashboard.getSummaryData();
					}, 60000); // 60초에 한번씩 데이터 새로 고침.
				}

			}, function (error) {
				var _t = $.trim(error.error_msg) == '' ? gettextCatalog.getString('통계 데이터를 추출하는 도중 문제가 발생했습니다.') : error.error_msg;
				notify(_t);
			});
		}

		dashboard.setChart = function () {

			var checkEmptyData = function (chart) {
				if (0 == chart.dataProvider.length) {
					// set min/max on the value axis
					chart.valueAxes[0].minimum = 0;
					chart.valueAxes[0].maximum = 100;

					// add dummy data point
					var dataPoint = {
						dummyValue : 0
					};
					dataPoint[chart.categoryField] = '';
					chart.dataProvider = [dataPoint];

					// add label
					chart.addLabel(0, '50%', 'The chart contains no data', 'center');

					// set opacity of the chart div
					chart.chartDiv.style.opacity = 0.5;

					// redraw it
					chart.validateNow();
				}
			}
			var views_data_1,
			views_data_2,
			views_data_3,
			color_1 = Highcharts.getOptions().colors,
			color_2 = [
				"#e384a6", "#f4d499", "#4d90d6", "#c7e38c", "#E5E8E8", "#9986c8", "#edf28c", "#ffd1d4", "#5ee1dc", "#b0eead", "#fef85a", "#8badd2"
			],
			color_3 = [
				"#FF0F00", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#0D8ECF", "#0D52D1", "#2A0CD0", "#8A0CCF", "#CD0D74"
			],
			color_4 = [
				"#495fba", "#e8d685", "#ae85c9", "#c9f0e1", "#d48652", "#629b6d", "#719dc3", "#719dc3"
			],
			//color_2 = color_1,
			browser_column = dashboard.browserLabel,
			device_column = dashboard.deviceLabel;

			views_data_1 = [];
			for (var index = 0; index < dashboard.deviceData.length; index++) {
				var percent = dashboard.deviceData[index] / dashboard.browserTotal * 100;
				percent = Math.round(percent, 2);
				views_data_1[index] = {
					color : color_2[index],
					name : device_column[index],
					y : dashboard.deviceData[index]
				}
			}

			views_data_2 = [];
			for (var index = 0; index < dashboard.browserData.length; index++) {
				var percent = dashboard.browserData[index] / dashboard.browserTotal * 100;
				//percent = percent.toFixed(2)*1;
				percent = Math.round(percent, 2);
				views_data_2[index] = {
					color : color_3[index],
					name : browser_column[index],
					y : dashboard.browserData[index]
				};
			}

			views_data_3 = [];
			for (var index = 0; index < dashboard.publisherDeviceData.length; index++) {
				var percent = dashboard.publisherDeviceData[index].ctr;
				views_data_3[index] = {
					color : color_4[index],
					name : dashboard.publisherDeviceData[index].deviceName,
					y : !dashboard.publisherDeviceData[index].click ? 0 : dashboard.publisherDeviceData[index].click
				}
			}

			var title = "";
			if (browser_column.length == 0 && device_column.length == 0) {
				title = gettextCatalog.getString("검색 된 통계데이터가 없습니다.") + ' ' + gettextCatalog.getString("날짜를 지정해 통계데이터를 확인 해 주세요.");
			}
			AmCharts.addInitHandler(function (chart) {
				// check if data is mepty
				if (chart.dataProvider === undefined || chart.dataProvider.length === 0) {
					// add some bogus data
					var dp = {};
					dp[chart.titleField] = "";
					dp[chart.valueField] = 1;
					chart.dataProvider.push(dp)

					var dp = {};
					dp[chart.titleField] = "";
					dp[chart.valueField] = 1;
					chart.dataProvider.push(dp)

					var dp = {};
					dp[chart.titleField] = "";
					dp[chart.valueField] = 1;
					chart.dataProvider.push(dp)

					// disable slice labels
					chart.labelsEnabled = false;

					// add label to let users know the chart is empty
					chart.addLabel("50%", "50%", "The chart contains no data", "middle", 15);

					// dim the whole chart
					chart.alpha = 0.3;
				}
			}, ["pie"]);
			// amChart - device
			var chart6 = AmCharts.makeChart("amChart_6", {
					"type" : "serial",
					"theme" : "none",
					"categoryField" : "name",
					"rotate" : true,
					"startDuration" : 1,
					"categoryAxis" : {
						"gridPosition" : "start",
						"position" : "left"
					},
					"trendLines" : [],
					"graphs" : [{
							"balloonText" : "[[category]]:[[value]]",
							"fillAlphas" : 0.8,
							"id" : "AmGraph-1",
							"lineAlpha" : 0.2,
							"fillColorsField" : "color",
							"title" : "y",
							"type" : "column",
							"valueField" : "y"
						}
					],
					"guides" : [],
					"valueAxes" : [{
							"id" : "ValueAxis-1",
							"position" : "top",
							"axisAlpha" : 0
						}
					],
					"allLabels" : [],
					"balloon" : {},
					"titles" : [],
					"dataProvider" : views_data_2,
					"export" : {
						"enabled" : true
					}
					/*
					"type": "pie",
					"theme": "light",
					"dataProvider": views_data_2,
					"titleField": "name",
					"valueField": "y",
					"labelRadius": -50,
					"radius": "42%",
					"innerRadius": "60%",
					"labelText": "[[name]]",
					"export": {"enabled": true}
					 */
				});
			checkEmptyData(chart6);
			//publisherDeviceData
			var chart7 = AmCharts.makeChart("amChart_7", {
					"type" : "pie",
					"theme" : "light",
					"outlineColor" : "#FFFFFF",
					/*
					"angle": 20,
					"depth3D": 35,
					 */
					"dataProvider" : views_data_3,
					"colorField" : "color",
					"titleField" : "name",
					"valueField" : "y",
					"labelRadius" : -50,
					"radius" : "42%",
					"innerRadius" : "60%",
					"labelText" : "[[name]]",
					"balloonText" : "[[value]]",
					"balloonFunction" : function (data) {
						var return_str = "";
						return_str = data.title + ":  " + data.value + "Click(CTR:" + data.percents.toFixed(2) + "%)";
						if (views_data_3.length == 3 && views_data_3[0].name == '') {
							return_str = "no data";
						}
						return return_str;
					},
					"export" : {
						"enabled" : true
					}
				});
		}
		
		dashboard.getSummaryData();
		
	}
	
	
	// ---------------------------------------------------------------------- //
	// pointlist
	if(window.location.href.indexOf('page=scrollads-pointlist')>-1) {

		
		var refundInfo = {'requestMinAmount':100,'bankname':'paypal','accountnumber':'','accountname':''};

		// 출금액 silder
		var _max_num = $('#amount').val();
		$("#amount_slider").slider({ 
			min: 0, max: _max_num, step: 1, value: 0,
			slide: function( event, ui ) { 
				$( '.line_text_position' ).css('top', '$'+netural_number_format(ui.value) ); 
				$( '#text_position' ).val( ui.value ); 
			}
		}).slider("pips", {
			rest: "label", step: parseInt(_max_num/10), prefix: '$', suffix: ''
		}).slider("float");
		
		
		
		var user = getUser(),
			list = {total: 0,index: 0,count_per_page: '10',rows: [],selectedRows: []},
			filterAdaptor = new filterFactory();
//		filterAdaptor.push({member_no: user.memberNo}, 'int');
		filterAdaptor.push({'member_no': 43}, 'int'); // testing
		filterAdaptor.push({'order_type': 1}, 'int');
		var paging = function (index) {
			var filter = filterAdaptor.get();
			var param = {'current_page': index, 'count_per_page': list.count_per_page, 'addsub':'N' };
			$.extend(param, {'query_filter': JSON.stringify(filter)});
			ServerRequest.post('/point/order/list', param, function (data) {
				console.log(data);
				list.index = data.payload.currentPage;
				list.total = data.payload.totalCount;
				list.rows = data.payload.pointOrderList;
				if(data.payload.pointOrderList.length>0) {
					var _tr = '';
					for(i in data.payload.pointOrderList) {
						var row = data.payload.pointOrderList[i],
							state_no = row.state,
							staet_st = state_no==1 ? gettextCatalog.getString('출금완료') : state_no==2 ? gettextCatalog.getString('반려') : state_no==3 ? gettextCatalog.getString('취소') : gettextCatalog.getString('대기중') ;
						//+date('Y-m-d H:i',row.createTime)
						_tr += '<tr><td>'+row.createTime.substr(0,16)+'</td><td>'+netural_number_format(row.amount,2)+'</td><td>'+staet_st+'</td><td>'+row.bankName+'/'+row.bankAccountName+'/'+row.bankAccountNumber+'</td></tr>';
					}
					_tr += '';
					$('#table-pointlist tbody').empty().append(_tr);
				}
			}, function (error) {
//				console.log(error);
			});
		};
		var reload = function() {
			paging(list.index);
		};
		paging(1);
		
		
		
		
		// 환불 신청
		$('#btn_request_refund').on('click', function(e) {
			e.preventDefault();

			// check input value
			var $form = $('#form_request_sendmoney'),
				$alert = $('.alert');

			// alert 초기화
			$alert.alert('close');

			refundInfo.amount = $form.find('#amount').val();
			refundInfo.realAmount = $form.find('#amount').val();
			refundInfo.accountnumber = $form.find('#paypal_email').val();
			refundInfo.accountname = $form.find('#reciever_name').val();
			
			// 신청금액 확인
			if(refundInfo.amount < 1) {
				notify(gettextCatalog.getString('신청 금액을 선택해주세요.')); $('#amount').focus(); return false;
			}
			if($scope.refundInfo.amount.replace(/[^0-9]/g,'').length < 1){
				notify(gettextCatalog.getString('신청 금액은 숫자로만 입력 해 주세요.')); $('#amount').focus();
				return false;
			}
return false;
			if($scope.refundInfo.amount < $scope.refundInfo.requestMinAmount) {
				notify(gettextCatalog.getString('신청 금액은 최소 환불 신청 금액({{number}}원) 이상으로 입력해주세요.').replace('{{number}}',$filter('number')($scope.refundInfo.requestMinAmount))); $('#amount').focus(); return false;
			}
			if($scope.user.point_posible < $scope.refundInfo.amount) {
				notify(gettextCatalog.getString('신청 가능 금액을 넘게 입력하셨습니다.')+' '+gettextCatalog.getString('신청 금액은 신청 가능 금액({{number}}원)을 넘지 않게 입력해주세요.').replace('{{number}}', $filter('number')($scope.user.point_posible))); $('#amount').focus(); return false;
			}

			// 은행사용시.
			if($scope.appHelper.pg=='bank') {
				// 은행명 확인
				if($.trim($scope.refundInfo.bankname) == '') {
					notify(gettextCatalog.getString('은행명을 입력해주세요.')); $('#refundBankname').focus(); return false;
				}
				// 계좌번호 확인
				if(/[^0-9]/.test($.trim($scope.refundInfo.accountnumber))) {
					notify(gettextCatalog.getString('계좌번호는 숫자만 입력해주세요.')); $('#refundAccountNumber').focus(); return false;
				}
				if($.trim($scope.refundInfo.accountnumber) == '') {
					notify(gettextCatalog.getString('계좌번호를 입력해주세요.')); $('#refundAccountNumber').focus(); return false;
				}
				// 예금주명 확인
				if($.trim($scope.refundInfo.accountname) == '') {
					notify(gettextCatalog.getString('예금주명을 입력해주세요.')); $('#refundAccountName').focus(); return false;
				}
			}

			// paypal 사용시 email 확인
			if($scope.appHelper.pg=='paypal') {
				if($.trim($scope.refundInfo.accountnumber) == '') {
					notify(gettextCatalog.getString('Paypal 이메일을 입력해주세요.')); $('#refundAccountNumber').focus(); return false;
				}
				$scope.refundInfo.bankname = 'Paypal';
	//			$scope.refundInfo.accountname = 'user';
			}

	//		ServerRequest.post('/point/calc', )
			//console.log("마스터?", $scope.user.masterId);
			// 서브계정 포함, 미포함을 검색하는 변수
			if(!$scope.addsubrefund){
				//$scope.addsub = $scope.user.masterId == '마스터계정' ? 'Y' : 'N';
				$scope.addsub = 'N';
			}else{
				$scope.addsub = 'Y';
			}

			var tax1 = $('#refundTax1').val().replace(/[^0-9]/g,'')*1;
			var tax2 = $('#refundTax2').val().replace(/[^0-9]/g,'')*1;
			var refundTax = tax1+tax2;
			var param = {
				'point_amount':angular.copy($scope.refundInfo.amount),
				'real_amount':angular.copy($scope.refundInfo.realAmount),
				'bank_name':angular.copy($scope.refundInfo.bankname),
				'bank_account_name':angular.copy($scope.refundInfo.accountname),
				'bank_account_number':angular.copy($scope.refundInfo.accountnumber),
				'addsub':$scope.addsub,
				refund_tax: refundTax
			};
			var _msg = gettextCatalog.getString('환불 받을 아래의 계좌정보로 환불신청을 하시겠습니까?');
			_msg += "\n\n\t- ";
			_msg += "\n\n\t- " + gettextCatalog.getString('은행명') + ': '+ param.bank_name;
			_msg += "\n\t- " + gettextCatalog.getString('계좌번호') + ': '+ param.bank_account_number;
			_msg += "\n\t- " + gettextCatalog.getString('예금주') + ': '+ param.bank_account_name;
			_msg += "\n\t- " + gettextCatalog.getString('환불신청금액') + ': '+ ($filter('number')(param.point_amount))+"";
			if(confirm(_msg)){
				ServerRequest.post('/point/order/refund/add',param,function(data){
					notify(gettextCatalog.getString('환불신청이 등록되었습니다.'));
					$scope.refundInfo.amount=0; // 환불 신청 금액
					$scope.refundInfo.bankname=''; // 은행명
					$scope.refundInfo.accountnumber=''; // 계좌번호
					$scope.refundInfo.accountname=''; // 예금주명
					$scope.reload();
					jQuery('#modal-2').modal('hide');
				},function(error){
					var _msg = $.trim(error.error_msg)=='' ? gettextCatalog.getString('환불을 신청하지 못했습니다.')+' '+gettextCatalog.getString('잠시후 다시 신청해주세요.') : $.trim(error.error_msg);
					notify(_msg);
				});
			}


		});

	}

});