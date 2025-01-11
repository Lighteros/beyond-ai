import{$ as z,C as we,Fa as ae,Ia as Le,Ka as _,Ma as re,Na as Me,Q as Z,V as q,W as pe,Y as u,aa as Ae,c as k,ca as $,fa as ee,g as U,ga as Ve,ja as te,k as Y,l as be,m as J,o as W,p as V,t as c,u as K,x as T,y as x,z as Q}from"./chunk-RBQJDO3X.mjs";import{e as R,g as C}from"./chunk-HGKSM6ZA.mjs";C();C();C();var De=["x","y","z"],b=function(e){Object.assign(this,{uniforms:{},geometry:{vertices:[{x:0,y:0,z:0}]},mode:0,modifiers:{},attributes:[],multiplier:1,buffers:[]}),Object.assign(this,e),this.prepareProgram(),this.prepareUniforms(),this.prepareAttributes()};b.prototype.compileShader=function(e,t){var a=this.gl.createShader(e);return this.gl.shaderSource(a,t),this.gl.compileShader(a),a},b.prototype.prepareProgram=function(){var e=this.gl,t=this.vertex,a=this.fragment,i=e.createProgram();e.attachShader(i,this.compileShader(35633,t)),e.attachShader(i,this.compileShader(35632,a)),e.linkProgram(i),e.useProgram(i),this.program=i},b.prototype.prepareUniforms=function(){for(var e=Object.keys(this.uniforms),t=0;t<e.length;t+=1){var a=this.gl.getUniformLocation(this.program,e[t]);this.uniforms[e[t]].location=a}},b.prototype.prepareAttributes=function(){this.geometry.vertices!==void 0&&this.attributes.push({name:"aPosition",size:3}),this.geometry.normal!==void 0&&this.attributes.push({name:"aNormal",size:3}),this.attributeKeys=[];for(var e=0;e<this.attributes.length;e+=1)this.attributeKeys.push(this.attributes[e].name),this.prepareAttribute(this.attributes[e])},b.prototype.prepareAttribute=function(e){for(var t=this.geometry,a=this.multiplier,i=t.vertices,s=t.normal,r=new Float32Array(a*i.length*e.size),n=0;n<a;n+=1)for(var o=e.data&&e.data(n,a),l=n*i.length*e.size,f=0;f<i.length;f+=1)for(var m=0;m<e.size;m+=1){var d=this.modifiers[e.name];r[l]=d!==void 0?d(o,f,m,this):e.name==="aPosition"?i[f][De[m]]:e.name==="aNormal"?s[f][De[m]]:o[m],l+=1}this.attributes[this.attributeKeys.indexOf(e.name)].data=r,this.prepareBuffer(this.attributes[this.attributeKeys.indexOf(e.name)])},b.prototype.prepareBuffer=function(e){var t=e.data,a=e.name,i=e.size,s=this.gl.createBuffer();this.gl.bindBuffer(34962,s),this.gl.bufferData(34962,t,35044);var r=this.gl.getAttribLocation(this.program,a);this.gl.enableVertexAttribArray(r),this.gl.vertexAttribPointer(r,i,5126,!1,0,0),this.buffers[this.attributeKeys.indexOf(e.name)]={buffer:s,location:r,size:i}},b.prototype.render=function(e){var t=this,a=this.uniforms,i=this.multiplier,s=this.gl;s.useProgram(this.program);for(var r=0;r<this.buffers.length;r+=1){var n=this.buffers[r],o=n.location,l=n.buffer,f=n.size;s.enableVertexAttribArray(o),s.bindBuffer(34962,l),s.vertexAttribPointer(o,f,5126,!1,0,0)}Object.keys(e).forEach(function(m){a[m].value=e[m].value}),Object.keys(a).forEach(function(m){var d=a[m];t.uniformMap[d.type](d.location,d.value)}),s.drawArrays(this.mode,0,i*this.geometry.vertices.length),this.onRender&&this.onRender(this)},b.prototype.destroy=function(){for(var e=0;e<this.buffers.length;e+=1)this.gl.deleteBuffer(this.buffers[e].buffer);this.gl.deleteProgram(this.program),this.gl=null};var S=function(e){var t=this,a=e||{},i=a.canvas;i===void 0&&(i=document.querySelector("canvas"));var s=a.context;s===void 0&&(s={});var r=a.contextType;r===void 0&&(r="experimental-webgl");var n=a.settings;n===void 0&&(n={});var o=i.getContext(r,Object.assign({alpha:!1,antialias:!1},s));Object.assign(this,{gl:o,canvas:i,uniforms:{},instances:new Map,shouldRender:!0}),Object.assign(this,{devicePixelRatio:1,clearColor:[1,1,1,1],position:{x:0,y:0,z:2},clip:[.001,100]}),Object.assign(this,n),this.uniformMap={float:function(l,f){return o.uniform1f(l,f)},vec2:function(l,f){return o.uniform2fv(l,f)},vec3:function(l,f){return o.uniform3fv(l,f)},vec4:function(l,f){return o.uniform4fv(l,f)},mat2:function(l,f){return o.uniformMatrix2fv(l,!1,f)},mat3:function(l,f){return o.uniformMatrix3fv(l,!1,f)},mat4:function(l,f){return o.uniformMatrix4fv(l,!1,f)}},o.enable(o.DEPTH_TEST),o.depthFunc(o.LEQUAL),o.getContextAttributes().alpha===!1&&(o.clearColor.apply(o,this.clearColor),o.clearDepth(1)),this.onSetup&&this.onSetup(o),R.addEventListener("resize",function(){return t.resize()}),this.resize(),this.render()};S.prototype.resize=function(){var e=this.gl,t=this.canvas,a=this.devicePixelRatio,i=this.position;t.width=t.clientWidth*a,t.height=t.clientHeight*a;var s=e.drawingBufferWidth,r=e.drawingBufferHeight,n=s/r;e.viewport(0,0,s,r);var o=Math.tan(Math.PI/180*22.5),l=[1,0,0,0,0,1,0,0,0,0,1,0,i.x,i.y,(n<1?1:n)*-i.z,1];this.uniforms.uProjectionMatrix={type:"mat4",value:[.5/o,0,0,0,0,n/o*.5,0,0,0,0,-(this.clip[1]+this.clip[0])/(this.clip[1]-this.clip[0]),-1,0,0,-2*this.clip[1]*(this.clip[0]/(this.clip[1]-this.clip[0])),0]},this.uniforms.uViewMatrix={type:"mat4",value:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},this.uniforms.uModelMatrix={type:"mat4",value:l}},S.prototype.toggle=function(e){e!==this.shouldRender&&(this.shouldRender=e!==void 0?e:!this.shouldRender,this.shouldRender&&this.render())},S.prototype.render=function(){var e=this;this.gl.clear(16640),this.instances.forEach(function(t){t.render(e.uniforms)}),this.onRender&&this.onRender(this),this.shouldRender&&requestAnimationFrame(function(){return e.render()})},S.prototype.add=function(e,t){t===void 0&&(t={uniforms:{}}),t.uniforms===void 0&&(t.uniforms={}),Object.assign(t.uniforms,JSON.parse(JSON.stringify(this.uniforms))),Object.assign(t,{gl:this.gl,uniformMap:this.uniformMap});var a=new b(t);return this.instances.set(e,a),a},S.prototype.remove=function(e){var t=this.instances.get(e);t!==void 0&&(t.destroy(),this.instances.delete(e))},S.prototype.destroy=function(){var e=this;this.instances.forEach(function(t,a){t.destroy(),e.instances.delete(a)}),this.toggle(!1)};var Re=S;var ze="phi",Ne="theta",Pe="mapSamples",je="mapBrightness",Fe="baseColor",_e="markerColor",Be="glowColor",B="markers",Xe="diffuse",Se="devicePixelRatio",Ge="dark",Oe="offset",He="scale",Ie={[ze]:"A",[Ne]:"B",[Pe]:"k",[je]:"E",[Fe]:"L",[_e]:"M",[Be]:"y",[Xe]:"F",[Ge]:"G",[Oe]:"x",[He]:"C"},{PI:he,sin:Ee,cos:ke}=Math,Te=e=>[].concat(...e.map(t=>{let[a,i]=t.location;a=a*he/180,i=i*he/180-he;let s=ke(a);return[-s*ke(i),Ee(a),s*Ee(i),t.size]}),[0,0,0,0]),Ue=(e,t)=>{let a=(r,n,o)=>({type:r,value:typeof t[n]>"u"?o:t[n]}),i=e.getContext("webgl")?"webgl":"experimental-webgl",s=new Re({canvas:e,contextType:i,context:{alpha:!0,stencil:!1,antialias:!0,depth:!1,preserveDrawingBuffer:!1},settings:{[Se]:t[Se]||1,onSetup:r=>{let n=r.RGB,o=r.UNSIGNED_BYTE,l=r.TEXTURE_2D,f=r.createTexture();r.bindTexture(l,f),r.texImage2D(l,0,n,1,1,0,n,o,new Uint8Array([0,0,0,0]));let m=new Image;m.onload=()=>{r.bindTexture(l,f),r.texImage2D(l,0,n,n,o,m),r.generateMipmap(l);let d=r.getParameter(r.CURRENT_PROGRAM),h=r.getUniformLocation(d,"H");r.texParameteri(l,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(l,r.TEXTURE_MAG_FILTER,r.NEAREST),r.uniform1i(h,0)},m.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg=="}}});return s.add("",{vertex:"attribute vec3 aPosition;uniform mat4 uProjectionMatrix;uniform mat4 uModelMatrix;uniform mat4 uViewMatrix;void main(){gl_Position=uProjectionMatrix*uModelMatrix*uViewMatrix*vec4(aPosition,1.);}",fragment:"precision highp float;uniform vec2 r,x;uniform vec3 L,M,y;uniform vec4 z[64];uniform float A,B,k,C,D,E,F,G;uniform sampler2D H;float I=1./k;mat3 J(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0.,c,e,f,d*-e,d*c);}vec3 v(vec3 c,out float w){c=c.xzy;float p=max(2.,floor(log2(2.236068*k*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,p)/2.236068*vec2(1.,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),q=floor(vec2(e.y*f.x-d.y*(f.y*k+1.),-e.x*f.x+d.x*(f.y*k+1.))/(d.x*e.y-e.x*d.y));float n=3.141593;vec3 s;for(float h=0.;h<4.;h+=1.){vec2 t=vec2(mod(h,2.),floor(h*.5));float j=dot(g,q+t);if(j>k)continue;float a=j,b=0.;if(a>=524288.)a-=524288.,b+=.803894;if(a>=262144.)a-=262144.,b+=.901947;if(a>=131072.)a-=131072.,b+=.950973;if(a>=65536.)a-=65536.,b+=.475487;if(a>=32768.)a-=32768.,b+=.737743;if(a>=16384.)a-=16384.,b+=.868872;if(a>=8192.)a-=8192.,b+=.934436;if(a>=4096.)a-=4096.,b+=.467218;if(a>=2048.)a-=2048.,b+=.733609;if(a>=1024.)a-=1024.,b+=.866804;if(a>=512.)a-=512.,b+=.433402;if(a>=256.)a-=256.,b+=.216701;if(a>=128.)a-=128.,b+=.108351;if(a>=64.)a-=64.,b+=.554175;if(a>=32.)a-=32.,b+=.777088;if(a>=16.)a-=16.,b+=.888544;if(a>=8.)a-=8.,b+=.944272;if(a>=4.)a-=4.,b+=.472136;if(a>=2.)a-=2.,b+=.236068;if(a>=1.)a-=1.,b+=.618034;float l=fract(b)*6.283185,i=1.-2.*j*I,m=sqrt(1.-i*i);vec3 o=vec3(cos(l)*m,sin(l)*m,i);float u=length(c-o);if(u<n)n=u,s=o;}w=n;return s.xzy;}void main(){vec2 a=(gl_FragCoord.xy/r*2.-1.)/C-x*vec2(1.,-1.)/r;a.x*=r.x/r.y;float c=dot(a,a),b;vec3 d=vec3(0.,0.,1.),e=normalize(vec3(a,sqrt(.64-c)));if(c<=.64){vec3 f=e*J(B,A),g=v(f,b);float j=asin(g.y),h=acos(-g.x/cos(j));h=g.z<0.?-h:h;float t=texture2D(H,vec2(h*.5/3.141593,-(j/3.141593+.5))).x,u=smoothstep(8e-3,0.,b),l=dot(e,d),s=pow(l,F)*E,m=t*u*s,N=mix((1.-m)*pow(l,.4),m,G)+.1;gl_FragColor=vec4(L*N,1.);int O=int(D);float n=0.;for(int i=0;i<64;i++){if(i>=O)break;vec4 o=z[i];vec3 p=o.xyz,w=p-f;float q=o.w;if(dot(w,w)>q*q*4.)continue;vec3 P=v(p,b);b=length(P-f),b<q?n+=smoothstep(q*.5,0.,b):0.;}n=min(1.,n*s),gl_FragColor.xyz=mix(gl_FragColor.xyz,M,n),gl_FragColor.xyz+=pow(1.-dot(e,d),4.)*y;}float K=pow(dot(normalize(vec3(-a,sqrt(1.-c))),d),4.)*smoothstep(.1,1.,.2/(c-.64));gl_FragColor+=vec4(K*y,K);}",uniforms:{r:{type:"vec2",value:[t.width,t.height]},A:a("float",ze),B:a("float",Ne),k:a("float",Pe),E:a("float",je),L:a("vec3",Fe),M:a("vec3",_e),F:a("float",Xe),y:a("vec3",Be),G:a("float",Ge),z:{type:"vec4",value:Te(t[B])},D:{type:"float",value:t[B].length},x:a("vec2",Oe,[0,0]),C:a("float",He,1)},mode:4,geometry:{vertices:[{x:-100,y:100,z:0},{x:-100,y:-100,z:0},{x:100,y:100,z:0},{x:100,y:-100,z:0},{x:-100,y:-100,z:0},{x:100,y:100,z:0}]},onRender:({uniforms:r})=>{let n={};if(t.onRender){t.onRender(n);for(let o in Ie)n[o]!==void 0&&(r[Ie[o]].value=n[o]);n[B]!==void 0&&(r.z.value=Te(n[B]),r.D.value=n[B].length),n.width&&n.height&&(r.r.value=[n.width,n.height])}}}),s};function I(e){let{background:t,baseColor:a,glowColor:i,isDraggable:s,dragOptions:r,speed:n,theta:o,phi:l,dark:f,diffuse:m,maxSamples:d,mapBrightness:h,markerSize:N,markerArray:v,markerColor:w,scale:E,alignment:L,maxWidth:P,offset:j}=e,{offsetX:F,offsetY:O}=j,{stiffness:le,damping:ye,mass:We}=r,A=V(),M=V(null),fe=V(0),Ce=pe.current()===pe.canvas,H=we(0,{stiffness:le,damping:ye,mass:We,restDelta:1e-4,restSpeed:1e-4}),ue="radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 70%)";return be(()=>{let y=l,g=0,xe=()=>{A.current&&(g=A.current.offsetWidth)&&R.addEventListener("resize",xe)};xe();let ce=ve(a),me=ve(i),de=ve(w),Ke=Ue(A.current,{devicePixelRatio:2,width:g*2,height:g*2,phi:l,theta:o,dark:f,diffuse:m,mapSamples:d,mapBrightness:h,baseColor:[ce.r,ce.g,ce.b],glowColor:[me.r,me.g,me.b],markerColor:[de.r,de.g,de.b],markers:v.map(D=>({location:[D.latitude,D.longitude],size:N})),scale:E,offset:[F,O],onRender:D=>{Ce||(D.phi=y+H.get()),D.width=g*2,D.height=g*2,Ce||(D.phi=y+H.get(),y+=n/200)}});return()=>{Ke.destroy()}},[e]),c("div",{style:{...Qe,placeItems:L,background:t},children:c("div",{style:{width:"100%",aspectRatio:"1/1",maxWidth:P,WebkitMaskImage:ue,MozMaskImage:ue,maskImage:ue},children:c("canvas",{ref:A,style:{width:"100%",height:"100%",contain:"layout paint size",cursor:"auto",userSelect:"none"},onPointerDown:y=>{s&&(M.current=y.clientX-fe.current,A.current.style.cursor="grabbing")},onPointerUp:()=>{s&&(M.current=null,A.current.style.cursor="grab")},onPointerOver:()=>{s&&(A.current.style.cursor="grab")},onPointerOut:()=>{s&&(M.current=null,A.current.style.cursor="auto")},onMouseMove:y=>{if(s&&M.current!==null){let g=y.clientX-M.current;fe.current=g,H.set(g/100)}},onTouchMove:y=>{if(M.current!==null&&y.touches[0]){let g=y.touches[0].clientX-M.current;fe.current=g,H.set(g/100)}}})})})}I.defaultProps={background:"#000000",baseColor:"#333333",glowColor:"#ffffff",markerColor:"#ffffff",isDraggable:!0,dragOptions:{stiffness:200,damping:40,mass:1},speed:1,phi:0,theta:.3,dark:1,diffuse:2,mapBrightness:20,maxSamples:2e4,markerSize:.1,markerArray:{latitude:52.3676,longitude:4.9041},scale:1,alignment:"center",maxWidth:800,offset:{offsetX:0,offsetY:0}};I.displayName="Globe";var p=I.defaultProps,Ye=I.defaultProps.offset,ge=I.defaultProps.dragOptions;z(I,{background:{type:u.Color,title:"Backdrop",defaultValue:p.background},baseColor:{type:u.Color,title:"Base",defaultValue:p.baseColor},glowColor:{type:u.Color,title:"Glow",defaultValue:p.glowColor},markerColor:{type:u.Color,title:"Marker",defaultValue:p.markerColor},isDraggable:{type:u.Boolean,title:"Draggable",defaultValue:p.isDraggable},dragOptions:{type:u.Object,title:"Transition",controls:{stiffness:{type:u.Number,min:0,max:1e3,title:"Stiffness",defaultValue:ge.stiffness},damping:{type:u.Number,min:0,max:100,title:"Damping",defaultValue:ge.damping},mass:{type:u.Number,min:0,title:"Mass",displayStepper:!0,defaultValue:ge.mass}},hidden(e){return!e.isDraggable}},speed:{type:u.Number,min:0,step:.1,displayStepper:!0,title:"Speed",defaultValue:p.speed},phi:{type:u.Number,min:0,max:6.28,step:.01,displayStepper:!0,title:"Phi",defaultValue:p.phi},theta:{type:u.Number,min:-1.57,max:1.57,step:.01,title:"Theta",defaultValue:p.theta},dark:{type:u.Number,min:0,max:1,step:.1,displayStepper:!0,title:"Dark",defaultValue:p.dark},diffuse:{type:u.Number,min:0,max:5,step:.01,title:"Diffuse",defaultValue:p.diffuse},mapBrightness:{type:u.Number,min:0,max:12,step:.01,title:"Brightness",defaultValue:p.mapBrightness},maxSamples:{type:u.Number,min:0,max:1e5,title:"Samples",defaultValue:p.maxSamples},scale:{type:u.Number,min:0,max:5,step:.025,displayStepper:!0,title:"Scale",defaultValue:p.scale},alignment:{type:u.Enum,title:"Align",options:["flex-start","center","flex-end"],optionIcons:["align-top","align-middle","align-bottom"],defaultValue:p.alignment,displaySegmentedControl:!0},maxWidth:{type:u.Number,title:"Max Width",min:100,max:5e3,defaultValue:p.maxWidth},offset:{type:u.Object,title:"Offset",controls:{offsetX:{type:u.Number,min:-5e3,max:5e3,title:"X",defaultValue:Ye.offsetX},offsetY:{type:u.Number,min:-5e3,max:5e3,title:"Y",defaultValue:Ye.offsetY}}},markerSize:{type:u.Number,min:0,max:1,step:.01,title:"Markers",defaultValue:p.markerSize},markerArray:{type:u.Array,title:"Location",control:{type:u.Object,title:"Location",controls:{latitude:{type:u.Number,min:-90,max:90,title:"Lat",step:1e-4,defaultValue:p.markerArray.latitude},longitude:{type:u.Number,min:-180,max:180,title:"Long",step:1e-4,defaultValue:p.markerArray.longitude}}}}});var Qe={width:"100%",height:"100%",display:"flex",placeItems:"center",placeContent:"center",overflow:"visible"},ve=e=>({r:q(e).r/255,g:q(e).g/255,b:q(e).b/255});C();C();var qe=["xX42m1mjR","vpSDW5TUA","KTezXAb3o","DD8TsHI_h"],$e="framer-6nJlA",et={DD8TsHI_h:"framer-v-is4637",KTezXAb3o:"framer-v-xp54by",vpSDW5TUA:"framer-v-3zi6yi",xX42m1mjR:"framer-v-1x9fscr"};function tt(e,...t){let a={};return t?.forEach(i=>i&&Object.assign(a,e[i])),a}var at={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},rt=({value:e,children:t})=>{let a=Y(T),i=e??a.transition,s=W(()=>({...a,transition:i}),[JSON.stringify(i)]);return c(T.Provider,{value:s,children:t})},it=x(k),nt={"Variant 1":"xX42m1mjR","Variant 2":"vpSDW5TUA","Variant 3":"KTezXAb3o","Variant 4":"DD8TsHI_h"},ot=({height:e,id:t,width:a,...i})=>{var s,r;return{...i,variant:(r=(s=nt[i.variant])!==null&&s!==void 0?s:i.variant)!==null&&r!==void 0?r:"xX42m1mjR"}},st=(e,t)=>t.join("-")+e.layoutDependency,lt=U(function(e,t){let{activeLocale:a,setLocale:i}=Z(),{style:s,className:r,layoutId:n,variant:o,...l}=ot(e),{baseVariant:f,classNames:m,gestureVariant:d,setGestureState:h,setVariant:N,variants:v}=ae({cycleOrder:qe,defaultVariant:"xX42m1mjR",variant:o,variantClassNames:et}),w=st(e,v),E=V(null),L=()=>!["vpSDW5TUA","KTezXAb3o","DD8TsHI_h"].includes(f),P=()=>f==="vpSDW5TUA",j=()=>f==="KTezXAb3o",F=()=>f==="DD8TsHI_h",O=J(),le=[],ye=ee();return c(Q,{id:n??O,children:c(it,{animate:v,initial:!1,children:c(rt,{value:at,children:K(x.div,{...l,className:$($e,...le,"framer-1x9fscr",r,m),"data-framer-name":"Variant 1",layoutDependency:w,layoutId:"xX42m1mjR",onHoverEnd:()=>h({isHovered:!1}),onHoverStart:()=>h({isHovered:!0}),onTap:()=>h({isPressed:!1}),onTapCancel:()=>h({isPressed:!1}),onTapStart:()=>h({isPressed:!0}),ref:t??E,style:{...s},...tt({DD8TsHI_h:{"data-framer-name":"Variant 4"},KTezXAb3o:{"data-framer-name":"Variant 3"},vpSDW5TUA:{"data-framer-name":"Variant 2"}},f,d),children:[L()&&c(_,{className:"framer-7sh60x","data-framer-name":"mdi:cube-outline",layout:"position",layoutDependency:w,layoutId:"Rc_dyjPyI",opacity:1,svg:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 19 19"><path d="M 16.625 13.062 C 16.625 13.363 16.459 13.624 16.205 13.759 L 9.951 17.274 C 9.825 17.369 9.666 17.416 9.5 17.416 C 9.334 17.416 9.175 17.369 9.049 17.274 L 2.795 13.759 C 2.668 13.692 2.561 13.592 2.487 13.469 C 2.414 13.346 2.375 13.206 2.375 13.062 L 2.375 5.937 C 2.375 5.636 2.541 5.375 2.795 5.241 L 9.049 1.726 C 9.175 1.631 9.334 1.583 9.5 1.583 C 9.666 1.583 9.825 1.631 9.951 1.726 L 16.205 5.241 C 16.459 5.375 16.625 5.636 16.625 5.937 Z M 9.5 3.285 L 4.782 5.937 L 9.5 8.589 L 14.218 5.937 Z M 3.958 12.595 L 8.708 15.271 L 8.708 9.959 L 3.958 7.291 Z M 15.042 12.595 L 15.042 7.291 L 10.292 9.959 L 10.292 15.271 Z" fill="rgb(177,240,2)"></path></svg>',svgContentId:862263217,withExternalLayout:!0}),P()&&c(_,{className:"framer-1qw4q90","data-framer-name":"ant-design:api-outlined",fill:"rgba(0,0,0,1)",intrinsicHeight:20,intrinsicWidth:20,layoutDependency:w,layoutId:"DJNSuQ9EG",svg:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9223 2.90625L17.0942 2.07813C17.063 2.04688 17.0239 2.0332 16.9829 2.0332C16.9419 2.0332 16.9028 2.04883 16.8716 2.07813L15.3852 3.56445C14.7391 3.12667 13.9763 2.89326 13.1958 2.89453C12.1958 2.89453 11.1958 3.27539 10.4321 4.03906L8.44187 6.0293C8.4128 6.05866 8.39648 6.09832 8.39648 6.13965C8.39648 6.18098 8.4128 6.22063 8.44187 6.25L13.7485 11.5566C13.7798 11.5879 13.8188 11.6016 13.8598 11.6016C13.8989 11.6016 13.9399 11.5859 13.9712 11.5566L15.9614 9.56641C17.3071 8.21875 17.4653 6.13477 16.436 4.61523L17.9223 3.12891C17.9829 3.06641 17.9829 2.9668 17.9223 2.90625ZM15.02 8.62695L13.8598 9.78711L10.2114 6.13867L11.3716 4.97852C11.8579 4.49219 12.5063 4.22266 13.1958 4.22266C13.8852 4.22266 14.5317 4.49023 15.02 4.97852C15.5063 5.46484 15.7759 6.11328 15.7759 6.80273C15.7759 7.49219 15.5063 8.13867 15.02 8.62695ZM11.3052 10.6777C11.2758 10.6487 11.2361 10.6323 11.1948 10.6323C11.1535 10.6323 11.1138 10.6487 11.0845 10.6777L9.78367 11.9785L8.02 10.2148L9.32273 8.91211C9.38328 8.85156 9.38328 8.75195 9.32273 8.69141L8.6118 7.98047C8.58243 7.95139 8.54277 7.93508 8.50145 7.93508C8.46012 7.93508 8.42046 7.95139 8.39109 7.98047L7.08836 9.2832L6.24852 8.44336C6.23394 8.42877 6.21656 8.41727 6.19743 8.40955C6.1783 8.40183 6.15781 8.39805 6.13719 8.39844C6.09812 8.39844 6.05711 8.41406 6.02586 8.44336L4.03758 10.4336C2.69188 11.7813 2.53367 13.8652 3.56297 15.3848L2.07664 16.8711C2.04756 16.9005 2.03125 16.9401 2.03125 16.9814C2.03125 17.0228 2.04756 17.0624 2.07664 17.0918L2.90477 17.9199C2.93602 17.9512 2.97508 17.9648 3.01609 17.9648C3.05711 17.9648 3.09617 17.9492 3.12742 17.9199L4.61375 16.4336C5.27195 16.8809 6.03758 17.1035 6.8032 17.1035C7.8032 17.1035 8.8032 16.7227 9.56688 15.959L11.5571 13.9688C11.6177 13.9082 11.6177 13.8086 11.5571 13.748L10.7173 12.9082L12.02 11.6055C12.0805 11.5449 12.0805 11.4453 12.02 11.3848L11.3052 10.6777ZM8.62547 15.0215C8.38642 15.2618 8.10213 15.4523 7.78901 15.582C7.4759 15.7117 7.14018 15.7781 6.80125 15.7773C6.1118 15.7773 5.46531 15.5098 4.97703 15.0215C4.73676 14.7824 4.54625 14.4981 4.41651 14.185C4.28678 13.8719 4.22038 13.5362 4.22117 13.1973C4.22117 12.5078 4.48875 11.8613 4.97703 11.373L6.13719 10.2129L9.78563 13.8613L8.62547 15.0215Z" fill="#B1F002"/>
</svg>
`,withExternalLayout:!0}),j()&&c(_,{className:"framer-2av6cc","data-framer-name":"ri:apps-2-line",fill:"rgba(0,0,0,1)",intrinsicHeight:20,intrinsicWidth:20,layoutDependency:w,layoutId:"apy5XCeOU",svg:`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.83203 9.58398C5.33957 9.58398 4.85194 9.48699 4.39697 9.29853C3.942 9.11008 3.5286 8.83385 3.18038 8.48563C2.83216 8.13741 2.55594 7.72402 2.36748 7.26905C2.17903 6.81408 2.08203 6.32644 2.08203 5.83398C2.08203 5.34153 2.17903 4.85389 2.36748 4.39892C2.55594 3.94395 2.83216 3.53055 3.18038 3.18233C3.5286 2.83411 3.942 2.55789 4.39697 2.36944C4.85194 2.18098 5.33957 2.08398 5.83203 2.08398C6.82659 2.08398 7.78042 2.47907 8.48368 3.18233C9.18694 3.8856 9.58203 4.83942 9.58203 5.83398C9.58203 6.82855 9.18694 7.78237 8.48368 8.48563C7.78042 9.1889 6.82659 9.58398 5.83203 9.58398ZM5.83203 17.9173C4.83747 17.9173 3.88364 17.5222 3.18038 16.819C2.47712 16.1157 2.08203 15.1619 2.08203 14.1673C2.08203 13.1728 2.47712 12.2189 3.18038 11.5157C3.88364 10.8124 4.83747 10.4173 5.83203 10.4173C6.82659 10.4173 7.78042 10.8124 8.48368 11.5157C9.18694 12.2189 9.58203 13.1728 9.58203 14.1673C9.58203 15.1619 9.18694 16.1157 8.48368 16.819C7.78042 17.5222 6.82659 17.9173 5.83203 17.9173ZM14.1654 9.58398C13.6729 9.58398 13.1853 9.48699 12.7303 9.29853C12.2753 9.11008 11.8619 8.83385 11.5137 8.48563C11.1655 8.13741 10.8893 7.72402 10.7008 7.26905C10.5124 6.81408 10.4154 6.32644 10.4154 5.83398C10.4154 5.34153 10.5124 4.85389 10.7008 4.39892C10.8893 3.94395 11.1655 3.53055 11.5137 3.18233C11.8619 2.83411 12.2753 2.55789 12.7303 2.36944C13.1853 2.18098 13.6729 2.08398 14.1654 2.08398C15.1599 2.08398 16.1138 2.47907 16.817 3.18233C17.5203 3.8856 17.9154 4.83942 17.9154 5.83398C17.9154 6.82855 17.5203 7.78237 16.817 8.48563C16.1138 9.1889 15.1599 9.58398 14.1654 9.58398ZM14.1654 17.9173C13.1708 17.9173 12.217 17.5222 11.5137 16.819C10.8105 16.1157 10.4154 15.1619 10.4154 14.1673C10.4154 13.1728 10.8105 12.2189 11.5137 11.5157C12.217 10.8124 13.1708 10.4173 14.1654 10.4173C15.1599 10.4173 16.1138 10.8124 16.817 11.5157C17.5203 12.2189 17.9154 13.1728 17.9154 14.1673C17.9154 15.1619 17.5203 16.1157 16.817 16.819C16.1138 17.5222 15.1599 17.9173 14.1654 17.9173ZM5.83203 7.91732C6.38457 7.91732 6.91447 7.69782 7.30517 7.30712C7.69587 6.91642 7.91536 6.38652 7.91536 5.83398C7.91536 5.28145 7.69587 4.75155 7.30517 4.36085C6.91447 3.97014 6.38457 3.75065 5.83203 3.75065C5.2795 3.75065 4.74959 3.97014 4.35889 4.36085C3.96819 4.75155 3.7487 5.28145 3.7487 5.83398C3.7487 6.38652 3.96819 6.91642 4.35889 7.30712C4.74959 7.69782 5.2795 7.91732 5.83203 7.91732ZM5.83203 16.2507C6.38457 16.2507 6.91447 16.0312 7.30517 15.6405C7.69587 15.2498 7.91536 14.7199 7.91536 14.1673C7.91536 13.6148 7.69587 13.0849 7.30517 12.6942C6.91447 12.3035 6.38457 12.084 5.83203 12.084C5.2795 12.084 4.74959 12.3035 4.35889 12.6942C3.96819 13.0849 3.7487 13.6148 3.7487 14.1673C3.7487 14.7199 3.96819 15.2498 4.35889 15.6405C4.74959 16.0312 5.2795 16.2507 5.83203 16.2507ZM14.1654 7.91732C14.7179 7.91732 15.2478 7.69782 15.6385 7.30712C16.0292 6.91642 16.2487 6.38652 16.2487 5.83398C16.2487 5.28145 16.0292 4.75155 15.6385 4.36085C15.2478 3.97014 14.7179 3.75065 14.1654 3.75065C13.6128 3.75065 13.0829 3.97014 12.6922 4.36085C12.3015 4.75155 12.082 5.28145 12.082 5.83398C12.082 6.38652 12.3015 6.91642 12.6922 7.30712C13.0829 7.69782 13.6128 7.91732 14.1654 7.91732ZM14.1654 16.2507C14.7179 16.2507 15.2478 16.0312 15.6385 15.6405C16.0292 15.2498 16.2487 14.7199 16.2487 14.1673C16.2487 13.6148 16.0292 13.0849 15.6385 12.6942C15.2478 12.3035 14.7179 12.084 14.1654 12.084C13.6128 12.084 13.0829 12.3035 12.6922 12.6942C12.3015 13.0849 12.082 13.6148 12.082 14.1673C12.082 14.7199 12.3015 15.2498 12.6922 15.6405C13.0829 16.0312 13.6128 16.2507 14.1654 16.2507Z" fill="#B1F002"/>
</svg>
`,withExternalLayout:!0}),F()&&c(_,{className:"framer-1fly9tw","data-framer-name":"ri:copper-coin-line",fill:"rgba(0,0,0,1)",intrinsicHeight:18,intrinsicWidth:18,layoutDependency:w,layoutId:"ZjrnZmVEs",svg:`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.70166 15.9502C4.69829 15.9502 1.45312 12.705 1.45312 8.70166C1.45312 4.69829 4.69829 1.45312 8.70166 1.45312C12.705 1.45312 15.9502 4.69829 15.9502 8.70166C15.9502 12.705 12.705 15.9502 8.70166 15.9502ZM8.70166 14.5005C10.2396 14.5005 11.7146 13.8895 12.802 12.8021C13.8895 11.7146 14.5005 10.2396 14.5005 8.70166C14.5005 7.16371 13.8895 5.68876 12.802 4.60127C11.7146 3.51378 10.2396 2.90283 8.70166 2.90283C7.16371 2.90283 5.68876 3.51378 4.60127 4.60127C3.51378 5.68876 2.90283 7.16371 2.90283 8.70166C2.90283 10.2396 3.51378 11.7146 4.60127 12.8021C5.68876 13.8895 7.16371 14.5005 8.70166 14.5005ZM8.70166 5.11364L12.2897 8.70166L8.70166 12.2897L5.11363 8.70166L8.70166 5.11364ZM8.70166 7.16352L7.16425 8.70166L8.70093 10.2391L10.2391 8.70166L8.70166 7.16352Z" fill="#B1F002"/>
</svg>
`,withExternalLayout:!0})]})})})})}),ft=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-6nJlA.framer-1h0fm7c, .framer-6nJlA .framer-1h0fm7c { display: block; }",".framer-6nJlA.framer-1x9fscr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",".framer-6nJlA .framer-7sh60x { flex: none; height: 19px; position: relative; width: 19px; }",".framer-6nJlA .framer-1qw4q90 { flex: none; height: 20px; position: relative; width: 20px; }",".framer-6nJlA .framer-2av6cc { flex: none; height: 16px; position: relative; width: 16px; }",".framer-6nJlA .framer-1fly9tw { flex: none; height: 18px; position: relative; width: 18px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-6nJlA.framer-1x9fscr { gap: 0px; } .framer-6nJlA.framer-1x9fscr > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-6nJlA.framer-1x9fscr > :first-child { margin-top: 0px; } .framer-6nJlA.framer-1x9fscr > :last-child { margin-bottom: 0px; } }"],X=te(lt,ft,"framer-6nJlA"),oe=X;X.displayName="icon";X.defaultProps={height:19,width:19};z(X,{variant:{options:["xX42m1mjR","vpSDW5TUA","KTezXAb3o","DD8TsHI_h"],optionTitles:["Variant 1","Variant 2","Variant 3","Variant 4"],title:"Variant",type:u.Enum}});re(X,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0});var ut=Me(oe),se=Ae(oe),ct=["ajLs8muIH","nulNFXZ20"],mt="framer-44VlG",dt={ajLs8muIH:"framer-v-t4ftwv",nulNFXZ20:"framer-v-1e0ez0n"};function Je(e,...t){let a={};return t?.forEach(i=>i&&Object.assign(a,e[i])),a}var pt={damping:60,delay:0,mass:1,stiffness:500,type:"spring"},ht=({value:e,children:t})=>{let a=Y(T),i=e??a.transition,s=W(()=>({...a,transition:i}),[JSON.stringify(i)]);return c(T.Provider,{value:s,children:t})},gt=x(k),vt={"Variant 1":"xX42m1mjR","Variant 2":"vpSDW5TUA","Variant 3":"KTezXAb3o","Variant 4":"DD8TsHI_h"},yt={"Variant 1":"ajLs8muIH","Variant 2":"nulNFXZ20"},Ct=({height:e,id:t,title:a,variant1:i,width:s,...r})=>{var n,o,l,f,m,d;return{...r,u0g5o4dNy:(n=a??r.u0g5o4dNy)!==null&&n!==void 0?n:"Intuitive Experience",variant:(l=(o=yt[r.variant])!==null&&o!==void 0?o:r.variant)!==null&&l!==void 0?l:"ajLs8muIH",YtzC5mLwB:(d=(m=(f=vt[i])!==null&&f!==void 0?f:i)!==null&&m!==void 0?m:r.YtzC5mLwB)!==null&&d!==void 0?d:"xX42m1mjR"}},xt=(e,t)=>t.join("-")+e.layoutDependency,bt=U(function(e,t){let{activeLocale:a,setLocale:i}=Z(),{style:s,className:r,layoutId:n,variant:o,u0g5o4dNy:l,YtzC5mLwB:f,...m}=Ct(e),{baseVariant:d,classNames:h,gestureVariant:N,setGestureState:v,setVariant:w,variants:E}=ae({cycleOrder:ct,defaultVariant:"ajLs8muIH",variant:o,variantClassNames:dt}),L=xt(e,E),P=V(null),j=J(),F=[],O=ee();return c(Q,{id:n??j,children:c(gt,{animate:E,initial:!1,children:c(ht,{value:pt,children:K(x.div,{...m,className:$(mt,...F,"framer-t4ftwv",r,h),"data-framer-name":"Variant 1",layoutDependency:L,layoutId:"ajLs8muIH",onHoverEnd:()=>v({isHovered:!1}),onHoverStart:()=>v({isHovered:!0}),onTap:()=>v({isPressed:!1}),onTapCancel:()=>v({isPressed:!1}),onTapStart:()=>v({isPressed:!0}),ref:t??P,style:{backgroundColor:"rgb(36, 36, 36)",borderBottomLeftRadius:8,borderBottomRightRadius:8,borderTopLeftRadius:8,borderTopRightRadius:8,...s},...Je({nulNFXZ20:{"data-framer-name":"Variant 2"}},d,N),children:[c(Ve,{children:c(x.div,{className:"framer-q9rnlm-container",layoutDependency:L,layoutId:"aCyr2AY_L-container",children:c(oe,{height:"100%",id:"aCyr2AY_L",layoutId:"aCyr2AY_L",variant:f,width:"100%"})})}),c(Le,{__fromCanvasComponent:!0,children:c(k,{children:c(x.p,{style:{"--font-selector":"Q1VTVE9NO0dlaXN0IE1lZGl1bQ==","--framer-font-family":'"Geist Medium", "Geist Medium Placeholder", sans-serif',"--framer-text-color":"var(--extracted-r6o4lv, var(--token-5f775928-41ea-4fe0-af0d-fb6cc34398b3, rgb(164, 164, 164)))"},children:"Intuitive Experience"})}),className:"framer-1kcrp6o","data-framer-name":"Section Title",fonts:["CUSTOM;Geist Medium"],layoutDependency:L,layoutId:"F9FmnxkzD",style:{"--extracted-r6o4lv":"var(--token-5f775928-41ea-4fe0-af0d-fb6cc34398b3, rgb(164, 164, 164))","--framer-paragraph-spacing":"0px"},text:l,verticalAlignment:"top",withExternalLayout:!0,...Je({nulNFXZ20:{children:c(k,{children:c(x.p,{style:{"--font-selector":"Q1VTVE9NO0dlaXN0IE1lZGl1bQ==","--framer-font-family":'"Geist Medium", "Geist Medium Placeholder", sans-serif',"--framer-font-size":"14px","--framer-text-color":"var(--extracted-r6o4lv, var(--token-5f775928-41ea-4fe0-af0d-fb6cc34398b3, rgb(164, 164, 164)))"},children:"Intuitive Experience"})})}},d,N)})]})})})})}),wt=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-44VlG.framer-av7e9v, .framer-44VlG .framer-av7e9v { display: block; }",".framer-44VlG.framer-t4ftwv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 8px 4px 8px; position: relative; width: min-content; }",".framer-44VlG .framer-q9rnlm-container { flex: none; height: auto; position: relative; width: auto; }",".framer-44VlG .framer-1kcrp6o { flex: none; height: auto; position: relative; white-space: pre; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-44VlG.framer-t4ftwv { gap: 0px; } .framer-44VlG.framer-t4ftwv > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-44VlG.framer-t4ftwv > :first-child { margin-left: 0px; } .framer-44VlG.framer-t4ftwv > :last-child { margin-right: 0px; } }"],G=te(bt,wt,"framer-44VlG"),Ht=G;G.displayName="card-tag";G.defaultProps={height:27,width:189};z(G,{variant:{options:["ajLs8muIH","nulNFXZ20"],optionTitles:["Variant 1","Variant 2"],title:"Variant",type:u.Enum},u0g5o4dNy:{defaultValue:"Intuitive Experience",displayTextArea:!1,title:"Title",type:u.String},YtzC5mLwB:se?.variant&&{...se.variant,defaultValue:"xX42m1mjR",description:void 0,hidden:void 0,title:"Variant"}});re(G,[{explicitInter:!0,fonts:[{family:"Geist Medium",source:"custom",url:"https://framerusercontent.com/assets/RAunq9gIEfRZ9Vxar4zkftoSE.woff"}]},...ut],{supportsExplicitInterCodegen:!0});export{I as a,Ht as b};
//# sourceMappingURL=chunk-QCVA3Q3F.mjs.map
