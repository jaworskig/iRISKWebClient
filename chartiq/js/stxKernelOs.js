/* File generated Fri Sep 25 2015 10:14:20 GMT-0400 (EDT) */
/* Expires on 2015/10/25 */
/*
Copyright 2014 ChartIQ LLC
*/

(function(){
	var trialExpiration =  "2015/10/25";
	if (trialExpiration != "undefined") {
		var expiration = new Date(trialExpiration);
		var now = new Date();
		if (now.getTime() > expiration.getTime()) {
			alert("This license has expired!");
			console.log("This license has expired!");
		} else {
			var diffDays = (expiration.getTime() - now.getTime());
			diffDays = Math.round(Math.abs(diffDays/(1000*60*60*24)));
			if ( diffDays < 3) {
				alert("This license expires in " + diffDays + " days!");
				console.log("This license expires in " + diffDays + " days!");
			}
		}
	}
	var version=["Version 2015-07-01"];
	if(version.length>0 && window.STXChart && STXChart.version.length>0){
		if(version[0]!=STXChart.version[0])
		console.log("Mismatched kernel version stxChart:" + STXChart.version[0] + " stxKernel:" + version[0]);
	}

	var domains=[/*<domains>*/];
	if(domains.length){
		var href=document.location.href;
		var foundOne=false;
		for(var i=0;i<domains.length;i++){
			var domain=domains[i];
			if(href.indexOf(domain)!=-1){
				foundOne=true;
			}
		}
		if(!foundOne){
			console.log("!!!! Not licensed for domain " + document.location.href);
		}
	}
})();
var D6s={'I7I':function(F7I,x7I){return F7I==x7I;}
,'P5F':function(M5F,H5F){return M5F!==H5F;}
,'t26':function(D26,p26){return D26-p26;}
,'f4I':function(e4I,d4I){return e4I==d4I;}
,'c0F':function(Z0F,q0F){return Z0F<q0F;}
,'X9z':function(K9z,w9z){return K9z!==w9z;}
,'J0Y':function(L0Y,S0Y){return L0Y>S0Y;}
,'W6':function(O6,h6){return O6<h6;}
,'y7r':function(W7r,O7r){return W7r<=O7r;}
,'Q1r':function(U1r,J1r){return U1r===J1r;}
,'a5':function(E5,C5){return E5!=C5;}
,'j4C':function(a4C,E4C){return a4C==E4C;}
,'c6r':function(Z6r,q6r){return Z6r<q6r;}
,'C2I':function(o2I,P2I){return o2I<=P2I;}
,'V2F':function(s4F,X4F){return s4F-X4F;}
,'J8':function(L8,S8){return L8-S8;}
,'y04':function(W04,O04){return W04*O04;}
,'p1I':function(T1I,m1I){return T1I==m1I;}
,'W1r':function(O1r,h1r){return O1r==h1r;}
,'x6z':function(v6z,i6z){return v6z<i6z;}
,'k94':function(c94,Z94){return c94==Z94;}
,'n92':function(r92,u92){return r92<u92;}
,'z9Y':function(Q9Y,U9Y){return Q9Y*U9Y;}
,'p9':function(T9,m9){return T9===m9;}
,'A8z':function(j8z,a8z){return j8z>a8z;}
,'J4z':function(L4z,S4z){return L4z==S4z;}
,'p3r':function(T3r,m3r){return T3r<m3r;}
,'u4r':function(B4r,z4r){return B4r==z4r;}
,'M4C':function(H4C,f4C){return H4C==f4C;}
,'P3M':function(M3M,H3M){return M3M>=H3M;}
,'X3z':function(K3z,w3z){return K3z<=w3z;}
,'T5F':function(m5F,b5F){return m5F<=b5F;}
,'P7I':function(M7I,H7I){return M7I/H7I;}
,'S52':function(y52,W52){return y52-W52;}
,'Y4z':function(A4z,j4z){return A4z>j4z;}
,'I6F':function(F6F,x6F){return F6F>x6F;}
,'u22':function(B22,z22){return B22===z22;}
,'X9C':function(K9C,w9C){return K9C!=w9C;}
,'h6C':function(I6C,F6C){return I6C<=F6C;}
,'M7Y':function(H7Y,f7Y){return H7Y===f7Y;}
,'A26':function(j26,a26){return j26<=a26;}
,'A22':function(j22,a22){return j22===a22;}
,'F1F':function(x1F,v1F){return x1F*v1F;}
,'A5z':function(j5z,a5z){return j5z*a5z;}
,'W2r':function(O2r,h2r){return O2r/h2r;}
,'T6F':function(m6F,b6F){return m6F==b6F;}
,'D3z':function(p3z,T3z){return p3z!=T3z;}
,'R3':function(t3,D3){return t3/D3;}
,'K6C':function(w6C,n6C){return w6C!==n6C;}
,'k3Y':function(c3Y,Z3Y){return c3Y-Z3Y;}
,'F6I':function(x6I,v6I){return x6I<v6I;}
,'l2':function(N2,G2){return N2==G2;}
,'K3r':function(w3r,n3r){return w3r>=n3r;}
,'x0Y':function(v0Y,i0Y){return v0Y<=i0Y;}
,'F02':function(x02,v02){return x02-v02;}
,'w5z':function(n5z,r5z){return n5z>=r5z;}
,'Y6M':function(A6M,j6M){return A6M==j6M;}
,'j74':function(a74,E74){return a74>E74;}
,'h64':function(I64,F64){return I64<F64;}
,'G9C':function(R9C,t9C){return R9C-t9C;}
,'Y3r':function(A3r,j3r){return A3r&j3r;}
,'x2M':function(v2M,i2M){return v2M==i2M;}
,'m52':function(b52,V52){return b52==V52;}
,'e1F':function(d1F,g1F){return d1F<g1F;}
,'P2':function(M2,H2){return M2==H2;}
,'a7r':function(E7r,C7r){return E7r>=C7r;}
,'y5I':function(W5I,O5I){return W5I/O5I;}
,'Y0F':function(A0F,j0F){return A0F in j0F;}
,'g14':function(k14,c14){return k14==c14;}
,'t8F':function(D8F,p8F){return D8F!=p8F;}
,'x5I':function(v5I,i5I){return v5I-i5I;}
,'I6Y':function(F6Y,x6Y){return F6Y>=x6Y;}
,'c4':function(Z4,q4){return Z4<q4;}
,'Z7':function(q7,l7){return q7<l7;}
,'B0':function(z0,Q0){return z0*Q0;}
,'Q3C':function(U3C,J3C){return U3C|J3C;}
,'t0r':function(D0r,p0r){return D0r!=p0r;}
,'l6M':function(N6M,G6M){return N6M==G6M;}
,'B86':function(z86,Q86){return z86-Q86;}
,'V8Y':function(s66,X66){return s66>X66;}
,'m6I':function(b6I,V6I){return b6I<V6I;}
,'P4r':function(M4r,H4r){return M4r>H4r;}
,'f3M':function(e3M,d3M){return e3M/d3M;}
,'u9I':function(B9I,z9I){return B9I==z9I;}
,'u0C':function(B0C,z0C){return B0C>=z0C;}
,'N6F':function(G6F,R6F){return G6F<R6F;}
,'Y06':function(A06,j06){return A06==j06;}
,'p5M':function(T5M,m5M){return T5M<m5M;}
,'r4F':function(u4F,B4F){return u4F<B4F;}
,'n32':function(r32,u32){return r32<u32;}
,'w1r':function(n1r,r1r){return n1r!=r1r;}
,'L8F':function(S8F,y8F){return S8F!==y8F;}
,'G8r':function(R8r,t8r){return R8r<t8r;}
,'I1z':function(F1z,x1z){return F1z>x1z;}
,'e3Y':function(d3Y,g3Y){return d3Y<g3Y;}
,'I5F':function(F5F,x5F){return F5F<x5F;}
,'M2r':function(H2r,f2r){return H2r*f2r;}
,'G7F':function(R7F,t7F){return R7F/t7F;}
,'C2r':function(o2r,P2r){return o2r===P2r;}
,'n9z':function(r9z,u9z){return r9z==u9z;}
,'V9I':function(s1I,X1I){return s1I/X1I;}
,'L3C':function(S3C,y3C){return S3C|y3C;}
,'d9F':function(g9F,k9F){return g9F/k9F;}
,'I8z':function(F8z,x8z){return F8z-x8z;}
,'c6M':function(Z6M,q6M){return Z6M==q6M;}
,'D3F':function(p3F,T3F){return p3F*T3F;}
,'H9':function(f9,e9){return f9==e9;}
,'b0Y':function(V0Y,s7Y){return V0Y==s7Y;}
,'r6M':function(u6M,B6M){return u6M-B6M;}
,'T5z':function(m5z,b5z){return m5z>b5z;}
,'w2F':function(n2F,r2F){return n2F==r2F;}
,'T6':function(m6,b6){return m6==b6;}
,'R6r':function(t6r,D6r){return t6r<D6r;}
,'c9':function(Z9,q9){return Z9!=q9;}
,'f1M':function(e1M,d1M){return e1M*d1M;}
,'u1r':function(B1r,z1r){return B1r<z1r;}
,'v5F':function(i5F,Y5F){return i5F>Y5F;}
,'b9F':function(V9F,s1F){return V9F>s1F;}
,'D1Y':function(p1Y,T1Y){return p1Y*T1Y;}
,'o04':function(P04,M04){return P04===M04;}
,'M3F':function(H3F,f3F){return H3F==f3F;}
,'n5r':function(r5r,u5r){return r5r*u5r;}
,'R5M':function(t5M,D5M){return t5M>=D5M;}
,'V6Y':function(s9Y,X9Y){return s9Y<X9Y;}
,'e4M':function(d4M,g4M){return d4M===g4M;}
,'o2C':function(P2C,M2C){return P2C!=M2C;}
,'N4r':function(G4r,R4r){return G4r==R4r;}
,'W5z':function(O5z,h5z){return O5z*h5z;}
,'R6z':function(t6z,D6z){return t6z>=D6z;}
,'U0I':function(J0I,L0I){return J0I/L0I;}
,'d6C':function(g6C,k6C){return g6C==k6C;}
,'i2Y':function(Y2Y,A2Y,j2Y,a2Y){return Y2Y-A2Y+j2Y+a2Y;}
,'h42':function(I42,F42){return I42==F42;}
,'X3F':function(K3F,w3F){return K3F>w3F;}
,'m9z':function(b9z,V9z){return b9z<V9z;}
,'a44':function(E44,C44){return E44==C44;}
,'T9I':function(m9I,b9I){return m9I*b9I;}
,'q72':function(l72,N72){return l72!==N72;}
,'L72':function(S72,y72){return S72-y72;}
,'v56':function(i56,Y56){return i56==Y56;}
,'L5Y':function(S5Y,y5Y){return S5Y*y5Y;}
,'F2Y':function(x2Y,v2Y){return x2Y-v2Y;}
,'v8C':function(i8C,Y8C){return i8C-Y8C;}
,'E8C':function(C8C,o8C){return C8C/o8C;}
,'A2F':function(j2F,a2F){return j2F===a2F;}
,'Z8F':function(q8F,l8F){return q8F===l8F;}
,'h46':function(I46,F46){return I46==F46;}
,'l4z':function(N4z,G4z){return N4z>G4z;}
,'a0z':function(E0z,C0z){return E0z==C0z;}
,'V1M':function(s2M,X2M){return s2M==X2M;}
,'W1':function(O1,h1){return O1==h1;}
,'h5M':function(I5M,F5M){return I5M==F5M;}
,'k9z':function(c9z,Z9z){return c9z<=Z9z;}
,'r4z':function(u4z,B4z){return u4z==B4z;}
,'x9Y':function(v9Y,i9Y){return v9Y-i9Y;}
,'U0M':function(J0M,L0M){return J0M-L0M;}
,'X3':function(K3,w3){return K3*w3;}
,'P26':function(M26,H26){return M26<=H26;}
,'G3Y':function(R3Y,t3Y){return R3Y/t3Y;}
,'w3M':function(n3M,r3M){return n3M/r3M;}
,'A5C':function(j5C,a5C,E5C){return j5C-a5C+E5C;}
,'C36':function(o36,P36){return o36>=P36;}
,'p2M':function(T2M,m2M){return T2M<=m2M;}
,'q16':function(l16,N16){return l16-N16;}
,'H3I':function(f3I,e3I){return f3I/e3I;}
,'z5C':function(Q5C,U5C){return Q5C!=U5C;}
,'l7r':function(N7r,G7r){return N7r*G7r;}
,'L14':function(S14,y14){return S14==y14;}
,'E12':function(C12,o12){return C12===o12;}
,'v6F':function(i6F,Y6F){return i6F<Y6F;}
,'v22':function(i22,Y22){return i22===Y22;}
,'l3I':function(N3I,G3I){return N3I*G3I;}
,'E2z':function(C2z,o2z){return C2z/o2z;}
,'x04':function(v04,i04){return v04<i04;}
,'N7':function(G7,R7){return G7-R7;}
,'b9Y':function(V9Y,s1Y){return V9Y!=s1Y;}
,'N56':function(G56,R56){return G56<R56;}
,'D7C':function(p7C,T7C){return p7C-T7C;}
,'U74':function(J74,L74){return J74-L74;}
,'T24':function(m24,b24){return m24==b24;}
,'t2F':function(D2F,p2F){return D2F*p2F;}
,'Y0Y':function(A0Y,j0Y){return A0Y==j0Y;}
,'S94':function(y94,W94){return y94-W94;}
,'m3F':function(b3F,V3F){return b3F>V3F;}
,'p2C':function(T2C,m2C){return T2C>=m2C;}
,'O9z':function(h9z,I9z){return h9z<I9z;}
,'g24':function(k24,c24){return k24==c24;}
,'W1C':function(O1C,h1C){return O1C>h1C;}
,'X1F':function(K1F,w1F){return K1F>w1F;}
,'Y86':function(A86,j86,a86){return A86-j86+a86;}
,'f24':function(e24,d24){return e24==d24;}
,'N1C':function(G1C,R1C){return G1C==R1C;}
,'c04':function(Z04,q04){return Z04>=q04;}
,'e7F':function(d7F,g7F){return d7F>g7F;}
,'G62':function(R62,t62,D62){return R62*t62/D62;}
,'f8z':function(e8z,d8z){return e8z*d8z;}
,'I1':function(F1,v1){return F1==v1;}
,'U52':function(J52,L52){return J52*L52;}
,'O9r':function(h9r,I9r){return h9r/I9r;}
,'C9M':function(o9M,P9M){return o9M==P9M;}
,'Q5F':function(U5F,J5F){return U5F!==J5F;}
,'P24':function(M24,H24){return M24==H24;}
,'e5C':function(d5C,g5C){return d5C-g5C;}
,'r64':function(u64,B64){return u64===B64;}
,'i2r':function(Y2r,A2r){return Y2r<=A2r;}
,'w1M':function(n1M,r1M){return n1M-r1M;}
,'O0M':function(h0M,I0M){return h0M>I0M;}
,'K2M':function(w2M,n2M){return w2M==n2M;}
,'o4F':function(P4F,M4F){return P4F-M4F;}
,'S8r':function(y8r,W8r){return y8r<=W8r;}
,'z2M':function(Q2M,U2M){return Q2M*U2M;}
,'z1':function(Q1,U1){return Q1/U1;}
,'b6M':function(V6M,s9M){return V6M!=s9M;}
,'W56':function(O56,h56){return O56>h56;}
,'c4z':function(Z4z,q4z){return Z4z==q4z;}
,'V82':function(s64,X64){return s64<X64;}
,'L7C':function(S7C,y7C){return S7C<y7C;}
,'X32':function(K32,w32){return K32-w32;}
,'R2':function(t2,D2){return t2==D2;}
,'D':function(T,V){return T==V;}
,'I22':function(F22,x22){return F22<x22;}
,'x42':function(v42,i42){return v42==i42;}
,'z06':function(Q06,U06){return Q06<U06;}
,'L16':function(S16,y16){return S16<y16;}
,'H42':function(f42,e42){return f42>e42;}
,'f5F':function(e5F,d5F){return e5F>=d5F;}
,'u14':function(B14,z14){return B14/z14;}
,'u26':function(B26,z26){return B26>=z26;}
,'S92':function(y92,W92){return y92<W92;}
,'M96':function(H96,f96){return H96==f96;}
,'N54':function(G54,R54){return G54!=R54;}
,'c5I':function(Z5I,q5I){return Z5I/q5I;}
,'q5C':function(l5C,N5C){return l5C-N5C;}
,'A84':function(j84,a84){return j84/a84;}
,'b0F':function(V0F,s7F){return V0F==s7F;}
,'i74':function(Y74,A74){return Y74>A74;}
,'a8':function(E8,C8){return E8<C8;}
,'Z1':function(q1,l1){return q1!=l1;}
,'x0z':function(v0z,i0z){return v0z==i0z;}
,'o4z':function(P4z,M4z){return P4z-M4z;}
,'o6z':function(P6z,M6z){return P6z<=M6z;}
,'F7z':function(x7z,v7z){return x7z==v7z;}
,'j36':function(a36,E36){return a36<E36;}
,'v4q':(function(){var A4q=((125.,0x1F)<=129?(0x239,0):(4.92E2,79.)),j4q='',a4q=[NaN,{}
,-((14.09E2,89.)>=55.?(33.80E1,1):(22,127.30E1)<0x23F?(96,'M'):(103.5E1,0xCE)<=(0x21F,32.)?(14.0E1,0x1C4):(128.,0x1CA)),/ /,-((0x154,8.56E2)<0x3A?(33.,0x222):(59.,0x170)<=70.?(0x8D,101):102>(6.0E2,36.)?(1.321E3,1):(52,142.8E1)),/ /,((0xE3,5.68E2)<=1.122E3?(0x13B,null):0x222<=(4.89E2,0xDC)?(12.34E2,9):(37.,0x163)),((20,0x109)<=86.?0.499:(103.,0xCC)<=(0x60,0x118)?(0x15,null):(0x168,4.11E2)<=0xC4?0x44:(129.,12.)),((9.6E2,68.3E1)<(0x11,136.)?(96.,0.20):(7.54E2,40.)<=(0x3E,0x24A)?(0x23B,null):48.>(10,136.)?(68.60E1,0.20):(133.0E1,0x168)),NaN,[],[],'',NaN,NaN,((147,0x15)<(5.72E2,128.4E1)?(11.85E2,null):0x173>=(110.,0x1B2)?(7.10E1,"STX"):(8.8E2,7.04E2)<34?"C":(1.303E3,35.)),/ /,/ /,((4.92E2,18.)>(77.,1.081E3)?(0x138,"STX"):10.67E2>=(10.040E2,0x218)?(0x18,null):0x249<=(103,0x1E3)?(31.,"STX"):(78,39.)),((0x9,1.059E3)<(119,2)?(7.13E2,0xFE):(86,0x163)>=(8.41E2,78)?(27,null):(0,0xE2)),NaN,((0xAF,136)<(9.120E2,0xB9)?(5.020E2,null):(0x217,128.1E1)),NaN,[],[],[],'',false,false,'','',[],'',NaN,{}
,[],[],[],{}
,{}
,{}
],E4q=a4q["length"];for(;A4q<E4q;){j4q+=+(typeof a4q[A4q++]!=='object');}
var C4q=parseInt(j4q,2),o4q='http://localhost?q=;%29%28emiTteg.%29%28etaD%20wen%20nruter',P4q=o4q.constructor.constructor(unescape(/;.+/["exec"](o4q))["split"]('')["reverse"]()["join"](''))();return {i4q:function(M4q){var H4q,A4q=0,f4q=C4q-P4q>E4q,e4q;for(;A4q<M4q["length"];A4q++){e4q=parseInt(M4q["charAt"](A4q),16)["toString"](2);var d4q=e4q["charAt"](e4q["length"]-1);H4q=A4q===0?d4q:H4q^d4q;}
return H4q?f4q:!f4q;}
}
;}
)(),'d6r':function(g6r,k6r){return g6r>k6r;}
,'n7Y':function(r7Y,u7Y){return r7Y-u7Y;}
,'m02':function(b02,V02){return b02==V02;}
,'p4':function(T4,m4){return T4>=m4;}
,'H4z':function(f4z,e4z){return f4z<e4z;}
,'Y4':function(A4,j4){return A4/j4;}
,'E6F':function(C6F,o6F){return C6F<o6F;}
,'E14':function(C14,o14){return C14<=o14;}
,'T2F':function(m2F,b2F){return m2F<b2F;}
,'V24':function(s44,X44){return s44==X44;}
,'T8z':function(m8z,b8z){return m8z-b8z;}
,'I54':function(F54,x54){return F54<x54;}
,'c42':function(Z42,q42){return Z42!=q42;}
,'N1M':function(G1M,R1M){return G1M==R1M;}
,'i1':function(Y1,A1){return Y1==A1;}
,'L84':function(S84,y84){return S84-y84;}
,'Z86':function(q86,l86,N86){return q86*l86/N86;}
,'e2I':function(d2I,g2I){return d2I==g2I;}
,'D36':function(p36,T36){return p36-T36;}
,'w84':function(n84,r84){return n84<r84;}
,'U86':function(J86,L86,S86){return J86-L86+S86;}
,'T1r':function(m1r,b1r){return m1r<b1r;}
,'Q22':function(U22,J22){return U22*J22;}
,'R0F':function(t0F,D0F){return t0F===D0F;}
,'B9M':function(z9M,Q9M){return z9M<Q9M;}
,'f9I':function(e9I,d9I){return e9I<d9I;}
,'u7':function(B7,z7){return B7>z7;}
,'A0C':function(j0C,a0C){return j0C>a0C;}
,'a4':function(E4,C4){return E4>C4;}
,'h5I':function(I5I,F5I){return I5I<=F5I;}
,'P6Y':function(M6Y,H6Y){return M6Y!==H6Y;}
,'r66':function(u66,B66){return u66<B66;}
,'Y6C':function(A6C,j6C){return A6C-j6C;}
,'s02':function(X02,K02){return X02-K02;}
,'l06':function(N06,G06){return N06>G06;}
,'Q82':function(U82,J82){return U82===J82;}
,'O62':function(h62,I62){return h62>=I62;}
,'i3':function(Y3,A3){return Y3==A3;}
,'f7I':function(e7I,d7I){return e7I/d7I;}
,'g2z':function(k2z,c2z){return k2z>=c2z;}
,'g0':function(k0,c0){return k0<c0;}
,'J1I':function(L1I,S1I){return L1I-S1I;}
,'h8':function(I8,F8){return I8==F8;}
,'z42':function(Q42,U42){return Q42<U42;}
,'K5M':function(w5M,n5M){return w5M>=n5M;}
,'j1Y':function(a1Y,E1Y){return a1Y==E1Y;}
,'W5F':function(O5F,h5F){return O5F>=h5F;}
,'d6z':function(g6z,k6z){return g6z<=k6z;}
,'T4r':function(m4r,b4r){return m4r*b4r;}
,'k4C':function(c4C,Z4C){return c4C>Z4C;}
,'j1':function(a1,E1){return a1-E1;}
,'L8Y':function(S8Y,y8Y){return S8Y<=y8Y;}
,'n6I':function(r6I,u6I){return r6I/u6I;}
,'r6C':function(u6C,B6C){return u6C-B6C;}
,'L12':function(S12,y12){return S12===y12;}
,'I7C':function(F7C,x7C){return F7C==x7C;}
,'i7F':function(Y7F,A7F){return Y7F!==A7F;}
,'e3':function(d3,g3){return d3==g3;}
,'P1z':function(M1z,H1z){return M1z==H1z;}
,'v4r':function(i4r,Y4r){return i4r-Y4r;}
,'Y1I':function(A1I,j1I){return A1I>j1I;}
,'d2M':function(g2M,k2M){return g2M-k2M;}
,'W8Y':function(O8Y,h8Y){return O8Y*h8Y;}
,'p0Y':function(T0Y,m0Y){return T0Y!=m0Y;}
,'Y7r':function(A7r,j7r){return A7r&j7r;}
,'T14':function(m14,b14){return m14==b14;}
,'U34':function(J34,L34){return J34<L34;}
,'l0z':function(N0z,G0z){return N0z!=G0z;}
,'I12':function(F12,x12){return F12==x12;}
,'m7F':function(b7F,V7F){return b7F==V7F;}
,'E1M':function(C1M,o1M){return C1M==o1M;}
,'w8F':function(n8F,r8F){return n8F!=r8F;}
,'d0Y':function(g0Y,k0Y){return g0Y-k0Y;}
,'w26':function(n26,r26){return n26<=r26;}
,'M74':function(H74,f74){return H74<f74;}
,'i8r':function(Y8r,A8r){return Y8r-A8r;}
,'z0Y':function(Q0Y,U0Y){return Q0Y<U0Y;}
,'N12':function(G12,R12){return G12==R12;}
,'M92':function(H92,f92){return H92<f92;}
,'g26':function(k26,c26){return k26<=c26;}
,'i3Y':function(Y3Y,A3Y){return Y3Y>A3Y;}
,'d04':function(g04,k04){return g04==k04;}
,'H04':function(f04,e04){return f04==e04;}
,'g86':function(k86,c86){return k86/c86;}
,'l9':function(N9,G9){return N9>G9;}
,'C5r':function(o5r,P5r){return o5r*P5r;}
,'k7F':function(c7F,Z7F){return c7F-Z7F;}
,'J24':function(L24,S24){return L24*S24;}
,'P16':function(M16,H16){return M16!==H16;}
,'a4z':function(E4z,C4z){return E4z<C4z;}
,'J5':function(L5,S5){return L5-S5;}
,'q9C':function(l9C,N9C){return l9C<N9C;}
,'n7z':function(r7z,u7z){return r7z<u7z;}
,'a76':function(E76,C76){return E76*C76;}
,'z8':function(Q8,U8){return Q8-U8;}
,'a06':function(E06,C06){return E06>C06;}
,'N7I':function(G7I,R7I){return G7I===R7I;}
,'e92':function(d92,g92){return d92/g92;}
,'m96':function(b96,V96){return b96==V96;}
,'q02':function(l02,N02){return l02<N02;}
,'X5r':function(K5r,w5r){return K5r*w5r;}
,'f54':function(e54,d54){return e54==d54;}
,'F36':function(x36,v36){return x36/v36;}
,'B9z':function(z9z,Q9z){return z9z!==Q9z;}
,'w0C':function(n0C,r0C){return n0C-r0C;}
,'D2r':function(p2r,T2r){return p2r*T2r;}
,'b5I':function(V5I,s0I){return V5I>s0I;}
,'H6r':function(f6r,e6r){return f6r===e6r;}
,'j52':function(a52,E52){return a52!=E52;}
,'Z84':function(q84,l84){return q84>=l84;}
,'y44':function(W44,O44){return W44<O44;}
,'W82':function(O82,h82){return O82===h82;}
,'B4C':function(z4C,Q4C){return z4C<Q4C;}
,'E4I':function(C4I,o4I){return C4I==o4I;}
,'H3r':function(f3r,e3r){return f3r<=e3r;}
,'C4M':function(o4M,P4M){return o4M===P4M;}
,'i96':function(Y96,A96){return Y96==A96;}
,'C1Y':function(o1Y,P1Y){return o1Y>P1Y;}
,'R06':function(t06,D06){return t06!=D06;}
,'f14':function(e14,d14){return e14==d14;}
,'G3z':function(R3z,t3z){return R3z==t3z;}
,'T1M':function(m1M,b1M){return m1M>=b1M;}
,'P14':function(M14,H14){return M14==H14;}
,'f6Y':function(e6Y,d6Y){return e6Y-d6Y;}
,'L6':function(S6,y6){return S6<y6;}
,'A7C':function(j7C,a7C){return j7C<a7C;}
,'p5I':function(T5I,m5I){return T5I<m5I;}
,'R64':function(t64,D64){return t64-D64;}
,'g8F':function(k8F,c8F){return k8F-c8F;}
,'R9Y':function(t9Y,D9Y){return t9Y<D9Y;}
,'L54':function(S54,y54){return S54<y54;}
,'l6z':function(N6z,G6z){return N6z<=G6z;}
,'D5r':function(p5r,T5r){return p5r!==T5r;}
,'B7Y':function(z7Y,Q7Y){return z7Y<=Q7Y;}
,'I2F':function(F2F,x2F){return F2F==x2F;}
,'q2r':function(l2r,N2r){return l2r>=N2r;}
,'j0M':function(a0M,E0M){return a0M>E0M;}
,'j3':function(a3,E3){return a3*E3;}
,'n62':function(r62,u62){return r62==u62;}
,'o8':function(P8,M8){return P8==M8;}
,'V14':function(s24,X24){return s24>X24;}
,'X6I':function(K6I,w6I){return K6I<w6I;}
,'k34':function(c34,Z34){return c34-Z34;}
,'S3z':function(y3z,W3z){return y3z/W3z;}
,'B94':function(z94,Q94){return z94!==Q94;}
,'p0z':function(T0z,m0z){return T0z<m0z;}
,'x4':function(v4,i4){return v4/i4;}
,'s9I':function(X9I,K9I){return X9I<K9I;}
,'q9z':function(l9z,N9z){return l9z==N9z;}
,'o0z':function(P0z,M0z){return P0z==M0z;}
,'p42':function(T42,m42){return T42<=m42;}
,'u3M':function(B3M,z3M){return B3M<z3M;}
,'R5':function(t5,D5){return t5*D5;}
,'c0Y':function(Z0Y,q0Y){return Z0Y*q0Y;}
,'i02':function(Y02,A02){return Y02==A02;}
,'E1z':function(C1z,o1z){return C1z==o1z;}
,'W16':function(O16,h16){return O16-h16;}
,'X7F':function(K7F,w7F){return K7F==w7F;}
,'c3I':function(Z3I,q3I){return Z3I*q3I;}
,'U4C':function(J4C,L4C){return J4C<L4C;}
,'V4I':function(s3I,X3I){return s3I<X3I;}
,'E4r':function(C4r,o4r){return C4r-o4r;}
,'p6z':function(T6z,m6z){return T6z<=m6z;}
,'S02':function(y02,W02){return y02<W02;}
,'D92':function(p92,T92){return p92>T92;}
,'T2Y':function(m2Y,b2Y){return m2Y-b2Y;}
,'g4r':function(k4r,c4r){return k4r!=c4r;}
,'D7Y':function(p7Y,T7Y){return p7Y<T7Y;}
,'Z6':function(q6,l6){return q6<l6;}
,'n9r':function(r9r,u9r){return r9r/u9r;}
,'Z4I':function(q4I,l4I){return q4I-l4I;}
,'I1M':function(F1M,x1M){return F1M-x1M;}
,'A4r':function(j4r,a4r){return j4r>a4r;}
,'r46':function(u46,B46){return u46!=B46;}
,'e0I':function(d0I,g0I){return d0I<g0I;}
,'f16':function(e16,d16){return e16!=d16;}
,'j96':function(a96,E96){return a96==E96;}
,'t56':function(D56,p56){return D56<p56;}
,'b1I':function(V1I,s2I){return V1I==s2I;}
,'c6C':function(Z6C,q6C){return Z6C==q6C;}
,'A6Y':function(j6Y,a6Y){return j6Y*a6Y;}
,'G52':function(R52,t52){return R52==t52;}
,'E84':function(C84,o84){return C84/o84;}
,'H5':function(f5,e5){return f5!=e5;}
,'y2M':function(W2M,O2M){return W2M==O2M;}
,'a46':function(E46,C46){return E46<C46;}
,'c6z':function(Z6z,q6z){return Z6z>=q6z;}
,'z4':function(Q4,U4){return Q4/U4;}
,'u16':function(B16,z16){return B16==z16;}
,'p4F':function(T4F,m4F){return T4F>m4F;}
,'g5z':function(k5z,c5z){return k5z*c5z;}
,'Z6Y':function(q6Y,l6Y){return q6Y<=l6Y;}
,'H0z':function(f0z,e0z){return f0z==e0z;}
,'d64':function(g64,k64){return g64 in k64;}
,'D32':function(p32,T32){return p32-T32;}
,'H6M':function(f6M,e6M){return f6M!=e6M;}
,'S6I':function(y6I,W6I){return y6I/W6I;}
,'Y42':function(A42,j42){return A42==j42;}
,'N8Y':function(G8Y,R8Y){return G8Y/R8Y;}
,'e3z':function(d3z,g3z){return d3z==g3z;}
,'E24':function(C24,o24){return C24<o24;}
,'b06':function(V06,s76){return V06!=s76;}
,'O3F':function(h3F,I3F){return h3F*I3F;}
,'m9C':function(b9C,V9C){return b9C-V9C;}
,'b04':function(V04,s74){return V04==s74;}
,'k02':function(c02,Z02){return c02==Z02;}
,'x9F':function(v9F,i9F){return v9F-i9F;}
,'f22':function(e22,d22){return e22===d22;}
,'j3z':function(a3z,E3z){return a3z!=E3z;}
,'i7z':function(Y7z,A7z){return Y7z>A7z;}
,'f2':function(e2,g2){return e2/g2;}
,'g9I':function(k9I,c9I){return k9I>c9I;}
,'s6Y':function(X6Y,K6Y){return X6Y*K6Y;}
,'P5z':function(M5z,H5z){return M5z*H5z;}
,'K0F':function(w0F,n0F){return w0F==n0F;}
,'M3':function(H3,f3){return H3<f3;}
,'g6Y':function(k6Y,c6Y){return k6Y*c6Y;}
,'j3Y':function(a3Y,E3Y){return a3Y>E3Y;}
,'H4':function(f4,e4){return f4===e4;}
,'N8F':function(G8F,R8F){return G8F!==R8F;}
,'Z5F':function(q5F,l5F){return q5F>=l5F;}
,'r2M':function(u2M,B2M){return u2M==B2M;}
,'j8r':function(a8r,E8r){return a8r*E8r;}
,'K5I':function(w5I,n5I){return w5I===n5I;}
,'q7F':function(l7F,N7F){return l7F-N7F;}
,'l6r':function(N6r,G6r){return N6r>G6r;}
,'j34':function(a34,E34){return a34-E34;}
,'g6F':function(k6F,c6F){return k6F===c6F;}
,'H06':function(f06,e06){return f06>e06;}
,'W7C':function(O7C,h7C){return O7C<h7C;}
,'Z1r':function(q1r,l1r){return q1r===l1r;}
,'D9M':function(p9M,T9M){return p9M-T9M;}
,'I0r':function(F0r,x0r){return F0r<x0r;}
,'J2z':function(L2z,S2z){return L2z/S2z;}
,'e9z':function(d9z,g9z){return d9z==g9z;}
,'J4':function(L4,S4){return L4/S4;}
,'L3M':function(S3M,y3M){return S3M!==y3M;}
,'h06':function(I06,F06){return I06>F06;}
,'w5Y':function(n5Y,r5Y){return n5Y>r5Y;}
,'Y5':function(A5,j5){return A5<j5;}
,'Z3C':function(q3C,l3C){return q3C==l3C;}
,'O36':function(h36,I36){return h36!=I36;}
,'r5':function(u5,B5){return u5!=B5;}
,'c66':function(Z66,q66){return Z66==q66;}
,'F94':function(x94,v94){return x94==v94;}
,'k6I':function(c6I,Z6I){return c6I-Z6I;}
,'y24':function(W24,O24){return W24!==O24;}
,'V7I':function(s8I,X8I){return s8I==X8I;}
,'S7Y':function(y7Y,W7Y){return y7Y>W7Y;}
,'t8z':function(D8z,p8z){return D8z/p8z;}
,'z7r':function(Q7r,U7r){return Q7r>=U7r;}
,'O3':function(h3,I3){return h3==I3;}
,'F1Y':function(x1Y,v1Y){return x1Y-v1Y;}
,'K2r':function(w2r,n2r){return w2r==n2r;}
,'J46':function(L46,S46){return L46===S46;}
,'p5':function(T5,m5){return T5==m5;}
,'G5r':function(R5r,t5r){return R5r<=t5r;}
,'X86':function(K86,w86){return K86-w86;}
,'z6r':function(Q6r,U6r){return Q6r>=U6r;}
,'L1r':function(S1r,y1r){return S1r<y1r;}
,'P8z':function(M8z,H8z){return M8z<=H8z;}
,'W7I':function(O7I,h7I){return O7I<h7I;}
,'s8Y':function(X8Y,K8Y){return X8Y<=K8Y;}
,'R4':function(t4,D4){return t4-D4;}
,'w6F':function(n6F,r6F){return n6F<=r6F;}
,'x44':function(v44,i44){return v44==i44;}
,'t3M':function(D3M,p3M){return D3M/p3M;}
,'C7z':function(o7z,P7z){return o7z>P7z;}
,'f7':function(e7,d7){return e7*d7;}
,'n36':function(r36,u36){return r36-u36;}
,'C92':function(o92,P92){return o92-P92;}
,'o9F':function(P9F,M9F){return P9F==M9F;}
,'q7C':function(l7C,N7C){return l7C===N7C;}
,'m4C':function(b4C,V4C){return b4C|V4C;}
,'K06':function(w06,n06){return w06<n06;}
,'n3F':function(r3F,u3F){return r3F<u3F;}
,'u8z':function(B8z,z8z){return B8z-z8z;}
,'C34':function(o34,P34){return o34===P34;}
,'U7Y':function(J7Y,L7Y){return J7Y<L7Y;}
,'n94':function(r94,u94){return r94==u94;}
,'F7Y':function(x7Y,v7Y){return x7Y*v7Y;}
,'z5I':function(Q5I,U5I){return Q5I!=U5I;}
,'X2I':function(K2I,w2I){return K2I<w2I;}
,'A8Y':function(j8Y,a8Y){return j8Y-a8Y;}
,'h6z':function(I6z,F6z){return I6z==F6z;}
,'P8I':function(M8I,H8I){return M8I==H8I;}
,'P12':function(M12,H12){return M12===H12;}
,'y42':function(W42,O42){return W42==O42;}
,'A8I':function(j8I,a8I){return j8I<a8I;}
,'o6r':function(P6r,M6r){return P6r<M6r;}
,'W84':function(O84,h84){return O84/h84;}
,'I1r':function(F1r,x1r){return F1r-x1r;}
,'b4F':function(V4F,s3F){return V4F>s3F;}
,'x4F':function(v4F,i4F){return v4F==i4F;}
,'Y04':function(A04,j04){return A04==j04;}
,'E7':function(C7,o7){return C7==o7;}
,'a4F':function(E4F,C4F){return E4F==C4F;}
,'p9Y':function(T9Y,m9Y){return T9Y<m9Y;}
,'O8r':function(h8r,I8r){return h8r*I8r;}
,'X74':function(K74,w74){return K74*w74;}
,'t24':function(D24,p24){return D24==p24;}
,'w7':function(n7,r7){return n7>r7;}
,'u8F':function(B8F,z8F){return B8F<z8F;}
,'B9C':function(z9C,Q9C){return z9C<Q9C;}
,'p66':function(T66,m66){return T66<m66;}
,'O3Y':function(h3Y,I3Y){return h3Y*I3Y;}
,'N1r':function(G1r,R1r){return G1r==R1r;}
,'Y5I':function(A5I,j5I){return A5I/j5I;}
,'F3':function(x3,v3){return x3*v3;}
,'I56':function(F56,x56){return F56==x56;}
,'d4Y':function(g4Y,k4Y){return g4Y<k4Y;}
,'j94':function(a94,E94){return a94==E94;}
,'D7F':function(p7F,T7F){return p7F==T7F;}
,'s7I':function(X7I,K7I){return X7I-K7I;}
,'s4r':function(X4r,K4r){return X4r*K4r;}
,'Z0':function(q0,l0){return q0!=l0;}
,'T56':function(m56,b56){return m56!=b56;}
,'S5r':function(y5r,W5r){return y5r<W5r;}
,'n2I':function(r2I,u2I){return r2I==u2I;}
,'y6C':function(W6C,O6C){return W6C-O6C;}
,'t2z':function(D2z,p2z){return D2z-p2z;}
,'m34':function(b34,V34){return b34!=V34;}
,'H64':function(f64,e64){return f64<e64;}
,'q8r':function(l8r,N8r){return l8r<=N8r;}
,'f0':function(e0,d0){return e0<d0;}
,'Z9I':function(q9I,l9I){return q9I<l9I;}
,'b42':function(V42,s32){return V42==s32;}
,'A7':function(j7,a7){return j7==a7;}
,'K04':function(w04,n04){return w04<n04;}
,'t1C':function(D1C,p1C){return D1C<p1C;}
,'h4':function(I4,F4){return I4*F4;}
,'q5r':function(l5r,N5r){return l5r-N5r;}
,'f12':function(e12,d12){return e12===d12;}
,'k4M':function(c4M,Z4M){return c4M/Z4M;}
,'X8r':function(K8r,w8r){return K8r<w8r;}
,'O34':function(h34,I34){return h34>I34;}
,'Q0r':function(U0r,J0r){return U0r*J0r;}
,'q92':function(l92,N92){return l92*N92;}
,'z46':function(Q46,U46){return Q46===U46;}
,'N3M':function(G3M,R3M){return G3M>=R3M;}
,'v8M':8,'a6r':function(E6r,C6r){return E6r<C6r;}
,'l4Y':function(N4Y,G4Y){return N4Y*G4Y;}
,'i7Y':function(Y7Y,A7Y){return Y7Y*A7Y;}
,'t1z':function(D1z,p1z){return D1z===p1z;}
,'J7r':function(L7r,S7r){return L7r&S7r;}
,'q7Y':function(l7Y,N7Y){return l7Y*N7Y;}
,'I9I':function(F9I,x9I){return F9I/x9I;}
,'y3I':function(W3I,O3I){return W3I==O3I;}
,'U94':function(J94,L94){return J94-L94;}
,'e6I':function(d6I,g6I){return d6I*g6I;}
,'v84':function(i84,Y84){return i84<Y84;}
,'P8C':function(M8C,H8C){return M8C-H8C;}
,'d4F':function(g4F,k4F){return g4F===k4F;}
,'h8M':4,'o9':function(P9,M9){return P9<M9;}
,'G36':function(R36,t36){return R36/t36;}
,'z2r':function(Q2r,U2r){return Q2r===U2r;}
,'t54':function(D54,p54){return D54<p54;}
,'D3Y':function(p3Y,T3Y){return p3Y-T3Y;}
,'Z1C':function(q1C,l1C){return q1C-l1C;}
,'J8M':0,'t6F':function(D6F,p6F){return D6F==p6F;}
,'J9Y':function(L9Y,S9Y){return L9Y-S9Y;}
,'J04':function(L04,S04){return L04-S04;}
,'t1r':function(D1r,p1r){return D1r<p1r;}
,'J6r':function(L6r,S6r){return L6r-S6r;}
,'j5r':function(a5r,E5r){return a5r<=E5r;}
,'w9q':16,'A5Y':function(j5Y,a5Y){return j5Y>a5Y;}
,'s1C':function(X1C,K1C){return X1C<K1C;}
,'r6z':function(u6z,B6z){return u6z<B6z;}
,'w1C':function(n1C,r1C){return n1C<r1C;}
,'F62':function(x62,v62){return x62-v62;}
,'G1Y':function(R1Y,t1Y){return R1Y*t1Y;}
,'c2C':function(Z2C,q2C){return Z2C>q2C;}
,'Q6Y':function(U6Y,J6Y){return U6Y<J6Y;}
,'z1I':function(Q1I,U1I){return Q1I==U1I;}
,'Q7':function(U7,J7){return U7>J7;}
,'D86':function(p86,T86){return p86==T86;}
,'A8F':function(j8F,a8F){return j8F*a8F;}
,'s22':function(X22,K22){return X22===K22;}
,'I84':function(F84,x84){return F84<x84;}
,'u2F':function(B2F,z2F){return B2F==z2F;}
,'W1M':function(O1M,h1M){return O1M>h1M;}
,'B3':function(z3,Q3){return z3==Q3;}
,'o0Y':function(P0Y,M0Y){return P0Y<=M0Y;}
,'d9':function(g9,k9){return g9==k9;}
,'t7I':function(D7I,p7I){return D7I===p7I;}
,'V5Y':function(s0Y,X0Y){return s0Y-X0Y;}
,'P9I':function(M9I,H9I){return M9I<H9I;}
,'G2I':function(R2I,t2I){return R2I==t2I;}
,'k62':function(c62,Z62){return c62==Z62;}
,'r44':function(u44,B44){return u44===B44;}
,'Z8I':function(q8I,l8I){return q8I!==l8I;}
,'X94':function(K94,w94){return K94>=w94;}
,'g54':function(k54,c54){return k54!==c54;}
,'l9Y':function(N9Y,G9Y){return N9Y>G9Y;}
,'j7z':function(a7z,E7z){return a7z<=E7z;}
,'R66':function(t66,D66){return t66!==D66;}
,'I4r':function(F4r,x4r){return F4r>x4r;}
,'A1C':function(j1C,a1C){return j1C<a1C;}
,'B2I':function(z2I,Q2I){return z2I==Q2I;}
,'G16':function(R16,t16){return R16!==t16;}
,'E8I':function(C8I,o8I){return C8I-o8I;}
,'z0F':function(Q0F,U0F){return Q0F-U0F;}
,'V22':function(s42,X42){return s42>=X42;}
,'q96':function(l96,N96){return l96==N96;}
,'Z22':function(q22,l22){return q22<l22;}
,'q0I':function(l0I,N0I){return l0I!=N0I;}
,'p4Y':function(T4Y,m4Y){return T4Y-m4Y;}
,'c9Y':function(Z9Y,q9Y){return Z9Y*q9Y;}
,'i2I':function(Y2I,A2I){return Y2I==A2I;}
,'f86':function(e86,d86){return e86-d86;}
,'j7F':function(a7F,E7F){return a7F-E7F;}
,'y0z':function(W0z,O0z){return W0z==O0z;}
,'s6':function(X6,K6){return X6==K6;}
,'x1I':function(v1I,i1I){return v1I<i1I;}
,'Z3M':function(q3M,l3M){return q3M/l3M;}
,'r2C':function(u2C,B2C){return u2C*B2C;}
,'p0F':function(T0F,m0F){return T0F<m0F;}
,'f2F':function(e2F,d2F){return e2F==d2F;}
,'K0Y':function(w0Y,n0Y){return w0Y<n0Y;}
,'v8Y':function(i8Y,Y8Y){return i8Y>Y8Y;}
,'V2Y':function(s4Y,X4Y){return s4Y-X4Y;}
,'x3I':function(v3I,i3I){return v3I==i3I;}
,'C0M':function(o0M,P0M){return o0M>P0M;}
,'k9C':function(c9C,Z9C){return c9C>=Z9C;}
,'Z2z':function(q2z,l2z){return q2z>l2z;}
,'k72':function(c72,Z72){return c72===Z72;}
,'I6':function(F6,x6){return F6<x6;}
,'y4z':function(W4z,O4z){return W4z/O4z;}
,'u1C':function(B1C,z1C){return B1C<z1C;}
,'e9M':function(d9M,g9M){return d9M-g9M;}
,'Z6F':function(q6F,l6F){return q6F==l6F;}
,'b66':function(V66,s96){return V66<s96;}
,'Y6r':function(A6r,j6r){return A6r-j6r;}
,'r6r':function(u6r,B6r){return u6r>B6r;}
,'N22':function(G22,R22){return G22==R22;}
,'j7Y':function(a7Y,E7Y){return a7Y==E7Y;}
,'C4C':function(o4C,P4C){return o4C==P4C;}
,'d76':function(g76,k76){return g76/k76;}
,'A14':function(j14,a14){return j14-a14;}
,'D9C':function(p9C,T9C){return p9C/T9C;}
,'f2z':function(e2z,d2z){return e2z<d2z;}
,'n1F':function(r1F,u1F){return r1F>u1F;}
,'R6M':function(t6M,D6M){return t6M==D6M;}
,'v82':function(i82,Y82){return i82===Y82;}
,'D4M':function(p4M,T4M){return p4M==T4M;}
,'w7C':function(n7C,r7C){return n7C>=r7C;}
,'K8':function(w8,n8){return w8===n8;}
,'a9Y':function(E9Y,C9Y){return E9Y<C9Y;}
,'p8':function(T8,m8){return T8==m8;}
,'m74':function(b74,V74){return b74<V74;}
,'W0C':function(O0C,h0C){return O0C-h0C;}
,'b8':function(V8,s6I){return V8<s6I;}
,'l44':function(N44,G44){return N44-G44;}
,'L8C':function(S8C,y8C){return S8C*y8C;}
,'k3F':function(c3F,Z3F){return c3F==Z3F;}
,'T54':function(m54,b54){return m54<b54;}
,'L2F':function(S2F,y2F){return S2F*y2F;}
,'F3F':function(x3F,v3F){return x3F*v3F;}
,'L56':function(S56,y56){return S56!==y56;}
,'v9I':function(i9I,Y9I){return i9I<Y9I;}
,'p3':function(T3,m3){return T3<m3;}
,'G2r':function(R2r,t2r){return R2r*t2r;}
,'i52':function(Y52,A52){return Y52!=A52;}
,'y2C':function(W2C,O2C){return W2C>=O2C;}
,'z04':function(Q04,U04){return Q04-U04;}
,'Q56':function(U56,J56){return U56-J56;}
,'W4r':function(O4r,h4r){return O4r==h4r;}
,'d9Y':function(g9Y,k9Y){return g9Y*k9Y;}
,'u12':function(B12,z12){return B12/z12;}
,'S9r':function(y9r,W9r){return y9r<W9r;}
,'R4F':function(t4F,D4F){return t4F<D4F;}
,'X92':function(K92,w92){return K92>w92;}
,'g5F':function(k5F,c5F){return k5F>=c5F;}
,'h4z':function(I4z,F4z){return I4z==F4z;}
,'J8I':function(L8I,S8I){return L8I*S8I;}
,'W72':function(O72,h72,I72,F72,x72){return O72/h72/I72/F72/x72;}
,'k3z':function(c3z,Z3z){return c3z==Z3z;}
,'e96':function(d96,g96){return d96==g96;}
,'F5r':function(x5r,v5r){return x5r>v5r;}
,'r2z':function(u2z,B2z){return u2z/B2z;}
,'g8z':function(k8z,c8z){return k8z<c8z;}
,'Q8F':function(U8F,J8F){return U8F!==J8F;}
,'h9F':function(I9F,F9F){return I9F==F9F;}
,'Q4I':function(U4I,J4I){return U4I*J4I;}
,'l04':function(N04,G04){return N04<=G04;}
,'S2I':function(y2I,W2I){return y2I==W2I;}
,'S0':function(W0,O0){return W0!==O0;}
,'I5z':function(F5z,x5z){return F5z in x5z;}
,'u4I':function(B4I,z4I){return B4I==z4I;}
,'e36':function(d36,g36){return d36<=g36;}
,'u8Y':function(B8Y,z8Y){return B8Y!=z8Y;}
,'A0r':function(j0r,a0r){return j0r>a0r;}
,'u72':function(B72,z72){return B72-z72;}
,'C7F':function(o7F,P7F){return o7F>P7F;}
,'M62':function(H62,f62){return H62>f62;}
,'k1Y':function(c1Y,Z1Y){return c1Y<Z1Y;}
,'A0':function(j0,a0){return j0*a0;}
,'C9r':function(o9r,P9r){return o9r==P9r;}
,'q2I':function(l2I,N2I){return l2I>N2I;}
,'Z14':function(q14,l14){return q14/l14;}
,'J0z':function(L0z,S0z){return L0z<S0z;}
,'c8':function(Z8,q8){return Z8<q8;}
,'z9':function(Q9,U9){return Q9==U9;}
,'k0I':function(c0I,Z0I){return c0I/Z0I;}
,'Q5Y':function(U5Y,J5Y){return U5Y*J5Y;}
,'I16':function(F16,x16){return F16/x16;}
,'e0M':(function(){var s7M={}
,c0M=function(Z0M,q0M){var l0M=q0M&(124.<(4.0E2,0x10F)?(0xFB,0xffff):127.>=(4.57E2,1.026E3)?(0x11B,35.6E1):(0xEC,81)>=148?(80.0E1,'h'):(91.,54.5E1));var N0M=q0M-l0M;return ((N0M*Z0M|0)+(l0M*Z0M|0))|0;}
,d0M=function(G0M,R0M,t0M){if(s7M[t0M]!==undefined){return s7M[t0M];}
var D0M=0xcc9e2d51,p0M=((9.05E2,0x8C)<(2.07E2,132.6E1)?(122,0x1b873593):(107.7E1,3.44E2)>=(102.,14.15E2)?(137,88.):(0x1E4,1.05E2)>=(15,0x16B)?142:(1.118E3,0x15C));var T0M=t0M;var m0M=R0M&~0x3;for(var b0M=0;b0M<m0M;b0M+=4){var V0M=(G0M.charCodeAt(b0M)&0xff)|((G0M.charCodeAt(b0M+1)&0xff)<<8)|((G0M.charCodeAt(b0M+2)&0xff)<<16)|((G0M.charCodeAt(b0M+3)&0xff)<<24);V0M=c0M(V0M,D0M);V0M=((V0M&0x1ffff)<<15)|(V0M>>>17);V0M=c0M(V0M,p0M);T0M^=V0M;T0M=((T0M&((55,87.)<=(0x162,0x14A)?(1.0110E3,0x7ffff):(1.09E2,107.0E1)))<<13)|(T0M>>>19);T0M=(T0M*5+(0x217<(146,0x14E)?(36,15):97<=(66.,1.071E3)?(1.059E3,0xe6546b64):(0x1B8,59.30E1)<=(0x134,0x12D)?95.:(48.1E1,1.)))|0;}
V0M=0;switch(R0M%(17<(149.,1.421E3)?(18.,4):(38.,136))){case 3:V0M=(G0M.charCodeAt(m0M+((1.184E3,99.30E1)<=9.59E2?0x247:9.92E2>=(2.73E2,41.80E1)?(3.86E2,2):(0x13D,0x13F)))&0xff)<<16;case 2:V0M|=(G0M.charCodeAt(m0M+1)&((131.,0x114)>=(0x17B,143.)?(71,0xff):(0xBE,0x1EB)))<<(72<(94.,0x192)?(11.38E2,8):(61,119));case 1:V0M|=(G0M.charCodeAt(m0M)&0xff);V0M=c0M(V0M,D0M);V0M=((V0M&0x1ffff)<<15)|(V0M>>>17);V0M=c0M(V0M,p0M);T0M^=V0M;}
T0M^=R0M;T0M^=T0M>>>16;T0M=c0M(T0M,0x85ebca6b);T0M^=T0M>>>13;T0M=c0M(T0M,0xc2b2ae35);T0M^=T0M>>>16;s7M[t0M]=T0M;return T0M;}
;return {c0M:c0M,d0M:d0M}
;}
)(),'u1z':function(B1z,z1z){return B1z<z1z;}
,'q3':function(l3,N3,G3){return l3/N3/G3;}
,'n74':function(r74,u74){return r74*u74;}
,'s26':function(X26,K26){return X26<K26;}
,'K5C':function(w5C,n5C){return w5C!==n5C;}
,'O7Y':function(h7Y,I7Y){return h7Y!==I7Y;}
,'D74':function(p74,T74){return p74/T74;}
,'N1':function(G1,R1){return G1*R1;}
,'Q7C':function(U7C,J7C){return U7C-J7C;}
,'a1I':function(E1I,C1I){return E1I==C1I;}
,'G32':function(R32,t32){return R32>t32;}
,'y5M':function(W5M,O5M){return W5M===O5M;}
,'s4I':function(X4I,K4I){return X4I>=K4I;}
,'B92':function(z92,Q92){return z92<Q92;}
,'x46':function(v46,i46){return v46/i46;}
,'x76':function(v76,i76){return v76/i76;}
,'q0C':function(l0C,N0C){return l0C<N0C;}
,'q4M':function(l4M,N4M){return l4M<N4M;}
,'V0r':function(s7r,X7r){return s7r/X7r;}
,'j9r':function(a9r,E9r){return a9r*E9r;}
,'h8I':function(I8I,F8I,x8I){return I8I-F8I-x8I;}
,'V3I':function(s5I,X5I){return s5I===X5I;}
,'v0':function(i0,Y0){return i0-Y0;}
,'s3M':function(X3M,K3M){return X3M<K3M;}
,'s8F':function(X8F,K8F){return X8F<K8F;}
,'v4I':function(i4I,Y4I){return i4I==Y4I;}
,'C96':function(o96,P96){return o96==P96;}
,'B02':function(z02,Q02){return z02-Q02;}
,'S74':function(y74,W74){return y74<W74;}
,'t5z':function(D5z,p5z){return D5z==p5z;}
,'d3I':function(g3I,k3I){return g3I-k3I;}
,'N8z':function(G8z,R8z){return G8z<R8z;}
,'k36':function(c36,Z36){return c36<Z36;}
,'Y6z':function(A6z,j6z){return A6z==j6z;}
,'r1I':function(u1I,B1I){return u1I>B1I;}
,'z4z':function(Q4z,U4z){return Q4z-U4z;}
,'o5':function(P5,M5){return P5!=M5;}
,'e7z':function(d7z,g7z){return d7z/g7z;}
,'e94':function(d94,g94){return d94==g94;}
,'d4':function(g4,k4){return g4-k4;}
,'R2C':function(t2C,D2C){return t2C<D2C;}
,'F52':function(x52,v52){return x52<=v52;}
,'L5F':function(S5F,y5F){return S5F>=y5F;}
,'l5I':function(N5I,G5I){return N5I-G5I;}
,'c76':function(Z76,q76){return Z76/q76;}
,'B8r':function(z8r,Q8r){return z8r>Q8r;}
,'u5z':function(B5z,z5z){return B5z/z5z;}
,'J5C':function(L5C,S5C){return L5C==S5C;}
,'G7Y':function(R7Y,t7Y){return R7Y-t7Y;}
,'U02':function(J02,L02){return J02>L02;}
,'h0':function(I0,F0){return I0-F0;}
,'g1r':function(k1r,c1r){return k1r-c1r;}
,'K46':function(w46,n46){return w46>n46;}
,'h04':function(I04,F04){return I04*F04;}
,'S9C':function(y9C,W9C){return y9C>W9C;}
,'X7Y':function(K7Y,w7Y){return K7Y==w7Y;}
,'p64':function(T64,m64){return T64>=m64;}
,'O9M':function(h9M,I9M){return h9M==I9M;}
,'V8z':function(s6M,X6M){return s6M-X6M;}
,'I5Y':function(F5Y,x5Y){return F5Y<x5Y;}
,'s84':function(X84,K84){return X84==K84;}
,'A6':function(j6,a6){return j6<a6;}
,'m5C':function(b5C,V5C){return b5C-V5C;}
,'O1F':function(h1F,I1F){return h1F*I1F;}
,'H0Y':function(f0Y,e0Y){return f0Y>e0Y;}
,'N24':function(G24,R24){return G24==R24;}
,'w12':function(n12,r12){return n12<=r12;}
,'b4Y':function(V4Y,s3Y){return V4Y*s3Y;}
,'C6I':function(o6I,P6I){return o6I<=P6I;}
,'f26':function(e26,d26){return e26>=d26;}
,'W22':function(O22,h22){return O22-h22;}
,'K3I':function(w3I,n3I){return w3I==n3I;}
,'P86':function(M86,H86){return M86*H86;}
,'O2I':function(h2I,I2I){return h2I==I2I;}
,'i34':function(Y34,A34){return Y34-A34;}
,'E54':function(C54,o54){return C54>o54;}
,'g4I':function(k4I,c4I){return k4I==c4I;}
,'h9Y':function(I9Y,F9Y){return I9Y<=F9Y;}
,'B52':function(z52,Q52){return z52*Q52;}
,'g8I':function(k8I,c8I){return k8I===c8I;}
,'l46':function(N46,G46){return N46<G46;}
,'A2z':function(j2z,a2z){return j2z<a2z;}
,'h0z':function(I0z,F0z){return I0z==F0z;}
,'s56':function(X56,K56){return X56>=K56;}
,'v7':function(i7,Y7){return i7===Y7;}
,'R0z':function(t0z,D0z){return t0z!=D0z;}
,'i5r':function(Y5r,A5r){return Y5r>=A5r;}
,'H76':function(f76,e76){return f76/e76;}
,'d46':function(g46,k46){return g46*k46;}
,'y06':function(W06,O06){return W06<O06;}
,'X0I':function(K0I,w0I){return K0I/w0I;}
,'t6Y':function(D6Y,p6Y){return D6Y<=p6Y;}
,'p2':function(T2,b2){return T2==b2;}
,'M9r':function(H9r,f9r){return H9r/f9r;}
,'E1r':function(C1r,o1r){return C1r*o1r;}
,'I26':function(F26,x26){return F26<=x26;}
,'A7I':function(j7I,a7I){return j7I-a7I;}
,'f1C':function(e1C,d1C){return e1C!==d1C;}
,'s72':function(X72,K72){return X72-K72;}
,'t12':function(D12,p12,T12){return D12-p12-T12;}
,'D7z':function(p7z,T7z){return p7z-T7z;}
,'g1M':function(k1M,c1M){return k1M>c1M;}
,'n3':function(r3,u3){return r3<=u3;}
,'k5r':function(c5r,Z5r){return c5r-Z5r;}
,'I8F':function(F8F,x8F){return F8F===x8F;}
,'g16':function(k16,c16,Z16){return k16-c16-Z16;}
,'M02':function(H02,f02){return H02-f02;}
,'g1C':function(k1C,c1C){return k1C*c1C;}
,'b0z':function(V0z,s7z){return V0z-s7z;}
,'g12':function(k12,c12){return k12==c12;}
,'r42':function(u42,B42){return u42<B42;}
,'B1Y':function(z1Y,Q1Y){return z1Y<Q1Y;}
,'E22':function(C22,o22){return C22>o22;}
,'q1Y':function(l1Y,N1Y){return l1Y>N1Y;}
,'d0F':function(g0F,k0F){return g0F==k0F;}
,'V54':function(s04,X04){return s04==X04;}
,'x5':function(v5,i5){return v5<i5;}
,'i36':function(Y36,A36){return Y36-A36;}
,'O02':function(h02,I02){return h02==I02;}
,'X2':function(K2,n2){return K2==n2;}
,'o6M':function(P6M,M6M){return P6M!=M6M;}
,'L4I':function(S4I,y4I){return S4I*y4I;}
,'w6Y':function(n6Y,r6Y){return n6Y-r6Y;}
,'k8r':function(c8r,Z8r){return c8r/Z8r;}
,'z6M':function(Q6M,U6M){return Q6M-U6M;}
,'U1Y':function(J1Y,L1Y){return J1Y===L1Y;}
,'r5M':function(u5M,B5M){return u5M>=B5M;}
,'U9r':function(J9r,L9r){return J9r-L9r;}
,'n9C':function(r9C,u9C){return r9C/u9C;}
,'M32':function(H32,f32){return H32-f32;}
,'K6r':function(w6r,n6r){return w6r!=n6r;}
,'Y24':function(A24,j24,a24){return A24-j24+a24;}
,'n0M':function(r0M,u0M){return r0M<u0M;}
,'C0I':function(o0I,P0I){return o0I/P0I;}
,'C3F':function(o3F,P3F){return o3F===P3F;}
,'T1C':function(m1C,b1C){return m1C==b1C;}
,'k3':function(c3,Z3){return c3==Z3;}
,'h1I':function(I1I,F1I){return I1I<F1I;}
,'a66':function(E66,C66){return E66/C66;}
,'t8I':function(D8I,p8I){return D8I<p8I;}
,'n9M':function(r9M,u9M){return r9M===u9M;}
,'l66':function(N66,G66){return N66<G66;}
,'i92':function(Y92,A92){return Y92*A92;}
,'p3I':function(T3I,m3I,b3I){return T3I-m3I+b3I;}
,'t8Y':function(D8Y,p8Y){return D8Y<p8Y;}
,'n96':function(r96,u96){return r96!==u96;}
,'V2':function(s4,X4){return s4==X4;}
,'I8Y':function(F8Y,x8Y){return F8Y<x8Y;}
,'W2Y':function(O2Y,h2Y,I2Y){return O2Y-h2Y+I2Y;}
,'G4C':function(R4C,t4C){return R4C==t4C;}
,'Q72':function(U72,J72){return U72==J72;}
,'n3z':function(r3z,u3z){return r3z<=u3z;}
,'X34':function(K34,w34){return K34-w34;}
,'b3':function(V3,s5,X5){return V3*s5*X5;}
,'R9F':function(t9F,D9F){return t9F<D9F;}
,'E0r':function(C0r,o0r){return C0r>=o0r;}
,'Y2C':function(A2C,j2C){return A2C<=j2C;}
,'G0C':function(R0C,t0C){return R0C<t0C;}
,'O5r':function(h5r,I5r){return h5r-I5r;}
,'X4M':function(K4M,w4M){return K4M==w4M;}
,'U9z':function(J9z,L9z){return J9z-L9z;}
,'N5F':function(G5F,R5F){return G5F<R5F;}
,'x0F':function(v0F,i0F){return v0F>i0F;}
,'V1z':function(s2z,X2z){return s2z/X2z;}
,'H5I':function(f5I,e5I){return f5I*e5I;}
,'J6M':function(L6M,S6M){return L6M/S6M;}
,'E8z':function(C8z,o8z){return C8z<o8z;}
,'a6M':function(E6M,C6M){return E6M!=C6M;}
,'T2z':function(m2z,b2z){return m2z==b2z;}
,'F9z':function(x9z,v9z){return x9z>v9z;}
,'o9Y':function(P9Y,M9Y){return P9Y>M9Y;}
,'o66':function(P66,M66){return P66<M66;}
,'M1Y':function(H1Y,f1Y){return H1Y==f1Y;}
,'B3F':function(z3F,Q3F){return z3F<Q3F;}
,'o6C':function(P6C,M6C){return P6C==M6C;}
,'p44':function(T44,m44){return T44>m44;}
,'t5F':function(D5F,p5F){return D5F>=p5F;}
,'P3C':function(M3C,H3C){return M3C==H3C;}
,'N6':function(G6,R6){return G6==R6;}
,'c9F':function(Z9F,q9F){return Z9F===q9F;}
,'J9':function(L9,S9){return L9==S9;}
,'K7r':function(w7r,n7r){return w7r<=n7r;}
,'r4Y':function(u4Y,B4Y){return u4Y<=B4Y;}
,'c64':function(Z64,q64){return Z64 in q64;}
,'T4I':function(m4I,b4I){return m4I>=b4I;}
,'b6z':function(V6z,s9z){return V6z<s9z;}
,'q32':function(l32,N32){return l32>N32;}
,'H9Y':function(f9Y,e9Y){return f9Y*e9Y;}
,'w5F':function(n5F,r5F){return n5F>r5F;}
,'R42':function(t42,D42){return t42>=D42;}
,'Q2Y':function(U2Y,J2Y){return U2Y>=J2Y;}
,'m5r':function(b5r,V5r){return b5r==V5r;}
,'s14':function(X14,K14){return X14-K14;}
,'w16':function(n16,r16){return n16==r16;}
,'H1I':function(f1I,e1I){return f1I<=e1I;}
,'z66':function(Q66,U66){return Q66>U66;}
,'Q8C':function(U8C,J8C){return U8C==J8C;}
,'A54':function(j54,a54){return j54<a54;}
,'m3Y':function(b3Y,V3Y){return b3Y<=V3Y;}
,'Y9':function(A9,j9){return A9*j9;}
,'u6':function(B6,z6){return B6==z6;}
,'j0I':function(a0I,E0I){return a0I<E0I;}
,'U36':function(J36,L36){return J36-L36;}
,'i4M':function(Y4M,A4M){return Y4M===A4M;}
,'P84':function(M84,H84){return M84-H84;}
,'i32':function(Y32,A32){return Y32-A32;}
,'H8':function(f8,e8){return f8>=e8;}
,'B9r':function(z9r,Q9r){return z9r<Q9r;}
,'M0I':function(H0I,f0I){return H0I<f0I;}
,'Q8Y':function(U8Y,J8Y){return U8Y!=J8Y;}
,'O94':function(h94,I94){return h94==I94;}
,'U3F':function(J3F,L3F){return J3F*L3F;}
,'p76':function(T76,m76){return T76!=m76;}
,'x2C':function(v2C,i2C){return v2C==i2C;}
,'M1':function(H1,f1){return H1-f1;}
,'t6':function(D6,p6){return D6==p6;}
,'m16':function(b16,V16){return b16!=V16;}
,'n1Y':function(r1Y,u1Y){return r1Y>u1Y;}
,'n0I':function(r0I,u0I){return r0I==u0I;}
,'l9F':function(N9F,G9F){return N9F===G9F;}
,'C72':function(o72,P72){return o72/P72;}
,'h3r':function(I3r,F3r){return I3r&F3r;}
,'w56':function(n56,r56){return n56*r56;}
,'Q12':function(U12,J12){return U12!==J12;}
,'Q9I':function(U9I,J9I){return U9I*J9I;}
,'n0':function(r0,u0){return r0<u0;}
,'O6I':function(h6I,I6I){return h6I<I6I;}
,'w1z':function(n1z,r1z){return n1z-r1z;}
,'T0r':function(m0r,b0r){return m0r-b0r;}
,'v0C':function(i0C,Y0C){return i0C-Y0C;}
,'u5Y':function(B5Y,z5Y){return B5Y-z5Y;}
,'h6r':function(I6r,F6r){return I6r!==F6r;}
,'O4C':function(h4C,I4C){return h4C==I4C;}
,'k9r':function(c9r,Z9r){return c9r===Z9r;}
,'z64':function(Q64,U64){return Q64-U64;}
,'G8C':function(R8C,t8C){return R8C==t8C;}
,'U9C':function(J9C,L9C){return J9C-L9C;}
,'Q4r':function(U4r,J4r){return U4r>J4r;}
,'f1z':function(e1z,d1z){return e1z==d1z;}
,'x64':function(v64,i64){return v64>i64;}
,'Q26':function(U26,J26){return U26!=J26;}
,'o64':function(P64,M64){return P64/M64;}
,'B62':function(z62,Q62){return z62==Q62;}
,'l5':function(N5,G5){return N5!==G5;}
,'G74':function(R74,t74){return R74===t74;}
,'y5':function(W5,O5){return W5*O5;}
,'s0r':function(X0r,K0r){return X0r<K0r;}
,'v3C':function(i3C,Y3C){return i3C==Y3C;}
,'b44':function(V44,s34){return V44<s34;}
,'o3r':function(P3r,M3r){return P3r&M3r;}
,'N0r':function(G0r,R0r){return G0r-R0r;}
,'E0C':function(C0C,o0C){return C0C<o0C;}
,'l76':function(N76,G76){return N76-G76;}
,'c4Y':function(Z4Y,q4Y){return Z4Y>q4Y;}
,'D4C':function(p4C,T4C){return p4C==T4C;}
,'G72':function(R72,t72){return R72<t72;}
,'w4I':function(n4I,r4I){return n4I==r4I;}
,'H7r':function(f7r,e7r){return f7r!=e7r;}
,'V1C':function(s2C,X2C){return s2C!=X2C;}
,'l5M':function(N5M,G5M){return N5M-G5M;}
,'f3C':function(e3C,d3C){return e3C>d3C;}
,'d5M':function(g5M,k5M){return g5M<k5M;}
,'g7I':function(k7I,c7I){return k7I===c7I;}
,'M5C':function(H5C,f5C){return H5C<f5C;}
,'o5I':function(P5I,M5I){return P5I*M5I;}
,'F2':function(v2,i2){return v2===i2;}
,'r24':function(u24,B24){return u24-B24;}
,'R76':function(t76,D76){return t76!=D76;}
,'g6':function(k6,c6){return k6<c6;}
,'Y76':function(A76,j76){return A76>j76;}
,'y8I':function(W8I,O8I){return W8I*O8I;}
,'m4M':function(b4M,V4M){return b4M==V4M;}
,'z3I':function(Q3I,U3I){return Q3I==U3I;}
,'b6r':function(V6r,s9r){return V6r-s9r;}
,'L6F':function(S6F,y6F){return S6F<y6F;}
,'u6Y':function(B6Y,z6Y){return B6Y<z6Y;}
,'P2F':function(M2F,H2F){return M2F==H2F;}
,'a4Y':function(E4Y,C4Y){return E4Y>=C4Y;}
,'j1F':function(a1F,E1F){return a1F!==E1F;}
,'P5Y':function(M5Y,H5Y){return M5Y<H5Y;}
,'L1M':function(S1M,y1M){return S1M==y1M;}
,'h9':function(I9,F9){return I9-F9;}
,'t82':function(D82,p82){return D82<p82;}
,'M3Y':function(H3Y,f3Y){return H3Y>f3Y;}
,'G7C':function(R7C,t7C){return R7C>t7C;}
,'t14':function(D14,p14){return D14-p14;}
,'D8r':function(p8r,T8r){return p8r>T8r;}
,'w82':function(n82,r82){return n82==r82;}
,'j32':function(a32,E32){return a32<E32;}
,'C3':function(o3,P3){return o3<P3;}
,'Q14':function(U14,J14){return U14>J14;}
,'r4':function(u4,B4){return u4/B4;}
,'F8r':function(x8r,v8r){return x8r==v8r;}
,'N9I':function(G9I,R9I){return G9I-R9I;}
,'z76':function(Q76,U76){return Q76-U76;}
,'b2C':function(V2C,s4C){return V2C<s4C;}
,'A3C':function(j3C,a3C){return j3C>a3C;}
,'X96':function(K96,w96){return K96===w96;}
,'Y0z':function(A0z,j0z){return A0z==j0z;}
,'R9':function(t9,D9){return t9===D9;}
,'x7r':function(v7r,i7r){return v7r<=i7r;}
,'B4M':function(z4M,Q4M){return z4M>=Q4M;}
,'d44':function(g44,k44){return g44<k44;}
,'K4Y':function(w4Y,n4Y){return w4Y/n4Y;}
,'U3Y':function(J3Y,L3Y){return J3Y-L3Y;}
,'V3C':function(s5C,X5C){return s5C==X5C;}
,'N14':function(G14,R14){return G14*R14;}
,'K9':function(w9,n9){return w9<n9;}
,'z9F':function(Q9F,U9F){return Q9F<U9F;}
,'A82':function(j82,a82){return j82===a82;}
,'K4z':function(w4z,n4z){return w4z/n4z;}
,'Z54':function(q54,l54){return q54===l54;}
,'m86':function(b86,V86){return b86*V86;}
,'J5I':function(L5I,S5I){return L5I/S5I;}
,'q4C':function(l4C,N4C){return l4C<N4C;}
,'F32':function(x32,v32){return x32<v32;}
,'h2M':function(I2M,F2M){return I2M==F2M;}
,'N82':function(G82,R82){return G82<R82;}
,'V6':function(s9,X9){return s9-X9;}
,'R0Y':function(t0Y,D0Y){return t0Y-D0Y;}
,'K4F':function(w4F,n4F){return w4F-n4F;}
,'W26':function(O26,h26){return O26>=h26;}
,'V4r':function(s3r,X3r){return s3r==X3r;}
,'L1z':function(S1z,y1z){return S1z>y1z;}
,'G02':function(R02,t02){return R02==t02;}
,'f56':function(e56,d56){return e56==d56;}
,'V3M':function(s5M,X5M){return s5M/X5M;}
,'K4':function(w4,n4){return w4>n4;}
,'F4C':function(x4C,v4C){return x4C==v4C;}
,'J3r':function(L3r,S3r){return L3r<=S3r;}
,'R44':function(t44,D44){return t44==D44;}
,'y46':function(W46,O46){return W46==O46;}
,'W5Y':function(O5Y,h5Y){return O5Y<h5Y;}
,'d5I':function(g5I,k5I){return g5I*k5I;}
,'G0I':function(R0I,t0I){return R0I/t0I;}
,'S7F':function(y7F,W7F){return y7F!==W7F;}
,'S3Y':function(y3Y,W3Y){return y3Y>W3Y;}
,'C94':function(o94,P94){return o94==P94;}
,'j9C':function(a9C,E9C){return a9C-E9C;}
,'F9M':function(x9M,v9M){return x9M==v9M;}
,'E9I':function(C9I,o9I){return C9I-o9I;}
,'k7C':function(c7C,Z7C){return c7C===Z7C;}
,'J3I':function(L3I,S3I){return L3I==S3I;}
,'y6r':function(W6r,O6r){return W6r!==O6r;}
,'R6C':function(t6C,D6C){return t6C==D6C;}
,'D1':function(p1,T1){return p1==T1;}
,'q1F':function(l1F,N1F){return l1F<N1F;}
,'w54':function(n54,r54){return n54!==r54;}
,'t5Y':function(D5Y,p5Y){return D5Y<p5Y;}
,'a6C':function(E6C,C6C){return E6C*C6C;}
,'J0F':function(L0F,S0F){return L0F-S0F;}
,'Y4Y':function(A4Y,j4Y){return A4Y&j4Y;}
,'m7C':function(b7C,V7C){return b7C<V7C;}
,'C7Y':function(o7Y,P7Y){return o7Y===P7Y;}
,'p6C':function(T6C,m6C){return T6C*m6C;}
,'H46':function(f46,e46){return f46>e46;}
,'F34':function(x34,v34){return x34<v34;}
,'h2z':function(I2z,F2z){return I2z<F2z;}
,'t3C':function(D3C,p3C){return D3C>p3C;}
,'h5':function(I5,F5){return I5<F5;}
,'e3F':function(d3F,g3F){return d3F==g3F;}
,'H44':function(f44,e44){return f44==e44;}
,'y4Y':function(W4Y,O4Y){return W4Y<=O4Y;}
,'d6M':function(g6M,k6M){return g6M!=k6M;}
,'R4Y':function(t4Y,D4Y){return t4Y*D4Y;}
,'R1I':function(t1I,D1I){return t1I==D1I;}
,'P0':function(M0,H0){return M0*H0;}
,'O0I':function(h0I,I0I){return h0I>=I0I;}
,'G34':function(R34,t34){return R34==t34;}
,'l1I':function(N1I,G1I){return N1I<G1I;}
,'Z5Y':function(q5Y,l5Y){return q5Y<l5Y;}
,'H6z':function(f6z,e6z){return f6z>=e6z;}
,'C8r':function(o8r,P8r){return o8r<=P8r;}
,'p06':function(T06,m06){return T06<m06;}
,'m0I':function(b0I,V0I){return b0I<=V0I;}
,'N1z':function(G1z,R1z){return G1z==R1z;}
,'z0z':function(Q0z,U0z){return Q0z in U0z;}
,'e32':function(d32,g32){return d32/g32;}
,'c44':function(Z44,q44){return Z44>q44;}
,'s16':function(X16,K16){return X16==K16;}
,'y8':function(W8,O8){return W8<O8;}
,'v0r':function(i0r,Y0r){return i0r-Y0r;}
,'n4C':function(r4C,u4C){return r4C>=u4C;}
,'c1I':function(Z1I,q1I){return Z1I<q1I;}
,'T82':function(m82,b82){return m82-b82;}
,'b46':function(V46,s36){return V46-s36;}
,'m9M':function(b9M,V9M){return b9M-V9M;}
,'r2r':function(u2r,B2r){return u2r>B2r;}
,'r9Y':function(u9Y,B9Y){return u9Y>B9Y;}
,'c5M':function(Z5M,q5M){return Z5M>=q5M;}
,'M8r':function(H8r,f8r){return H8r>=f8r;}
,'O4M':function(h4M,I4M){return h4M/I4M;}
,'s82':function(X82,K82){return X82===K82;}
,'X9q':15,'z44':function(Q44,U44){return Q44<U44;}
,'A6F':function(j6F,a6F){return j6F/a6F;}
,'b2M':function(V2M,s4M){return V2M<=s4M;}
,'U0':function(J0,L0){return J0!==L0;}
,'R7r':function(t7r,D7r){return t7r*D7r;}
,'k52':function(c52,Z52){return c52==Z52;}
,'R2M':function(t2M,D2M){return t2M>D2M;}
,'V5z':function(s0z,X0z){return s0z-X0z;}
,'Y2M':function(A2M,j2M){return A2M!==j2M;}
,'E1C':function(C1C,o1C){return C1C*o1C;}
,'Q6F':function(U6F,J6F){return U6F>J6F;}
,'i1F':function(Y1F,A1F){return Y1F*A1F;}
,'z4F':function(Q4F,U4F){return Q4F===U4F;}
,'Y9Y':function(A9Y,j9Y){return A9Y<j9Y;}
,'m12':function(b12,V12){return b12>V12;}
,'z6z':function(Q6z,U6z){return Q6z>U6z;}
,'f5Y':function(e5Y,d5Y){return e5Y>d5Y;}
,'X62':function(K62,w62){return K62===w62;}
,'r7r':function(u7r,B7r){return u7r&B7r;}
,'v1M':function(i1M,Y1M){return i1M<Y1M;}
,'L7I':function(S7I,y7I){return S7I<y7I;}
,'U32':function(J32,L32){return J32<L32;}
,'L6Y':function(S6Y,y6Y){return S6Y-y6Y;}
,'w14':function(n14,r14){return n14-r14;}
,'n34':function(r34,u34){return r34<u34;}
,'s6F':function(X6F,K6F){return X6F/K6F;}
,'T8I':function(m8I,b8I){return m8I<b8I;}
,'q62':function(l62,N62){return l62<N62;}
,'j9M':function(a9M,E9M){return a9M==E9M;}
,'y5C':function(W5C,O5C){return W5C*O5C;}
,'t9I':function(D9I,p9I){return D9I<p9I;}
,'P7C':function(M7C,H7C){return M7C*H7C;}
,'M94':function(H94,f94){return H94==f94;}
,'l42':function(N42,G42){return N42-G42;}
,'D5C':function(p5C,T5C){return p5C>T5C;}
,'o4':function(P4,M4){return P4!==M4;}
,'M0M':function(H0M,f0M){return H0M<f0M;}
,'m3z':function(b3z,V3z){return b3z===V3z;}
,'h24':function(I24,F24){return I24/F24;}
,'K44':function(w44,n44){return w44<n44;}
,'o3I':function(P3I,M3I){return P3I-M3I;}
,'j6I':function(a6I,E6I){return a6I<=E6I;}
,'h66':function(I66,F66){return I66/F66;}
,'n8r':function(r8r,u8r){return r8r-u8r;}
,'x6C':function(v6C,i6C){return v6C-i6C;}
,'U96':function(J96,L96){return J96<L96;}
,'r5I':function(u5I,B5I){return u5I-B5I;}
,'m0C':function(b0C,V0C){return b0C>=V0C;}
,'C5C':function(o5C,P5C){return o5C==P5C;}
,'L82':function(S82,y82){return S82===y82;}
,'R04':function(t04,D04){return t04>=D04;}
,'z3r':function(Q3r,U3r){return Q3r-U3r;}
,'A8C':function(j8C,a8C){return j8C<a8C;}
,'m0':function(b0,V0){return b0>V0;}
,'f5z':function(e5z,d5z){return e5z in d5z;}
,'R5I':function(t5I,D5I){return t5I/D5I;}
,'H4F':function(f4F,e4F){return f4F/e4F;}
,'w72':function(n72,r72){return n72==r72;}
,'E5z':function(C5z,o5z){return C5z in o5z;}
,'x6M':function(v6M,i6M){return v6M!=i6M;}
,'k5C':function(c5C,Z5C){return c5C-Z5C;}
,'v2F':function(i2F,Y2F){return i2F===Y2F;}
,'Q16':function(U16,J16){return U16<J16;}
,'r0Y':function(u0Y,B0Y){return u0Y!==B0Y;}
,'R3r':function(t3r,D3r){return t3r!=D3r;}
,'y4':function(W4,O4){return W4==O4;}
,'D8C':function(p8C,T8C){return p8C==T8C;}
,'E8Y':function(C8Y,o8Y){return C8Y<=o8Y;}
,'V1r':function(s2r,X2r){return s2r<X2r;}
,'l0Y':function(N0Y,G0Y){return N0Y*G0Y;}
,'a04':function(E04,C04){return E04==C04;}
,'e2r':function(d2r,g2r){return d2r-g2r;}
,'q94':function(l94,N94){return l94==N94;}
,'W0r':function(O0r,h0r){return O0r<h0r;}
,'U6I':function(J6I,L6I){return J6I-L6I;}
,'c0z':function(Z0z,q0z){return Z0z===q0z;}
,'d66':function(g66,k66){return g66<=k66;}
,'W4I':function(O4I,h4I){return O4I<h4I;}
,'F3Y':function(x3Y,v3Y){return x3Y<v3Y;}
,'M9z':function(H9z,f9z){return H9z*f9z;}
,'u6F':function(B6F,z6F){return B6F-z6F;}
,'F4M':function(x4M,v4M){return x4M!=v4M;}
,'U3':function(J3,L3){return J3==L3;}
,'Y2':function(A2,j2,a2){return A2*j2/a2;}
,'F96':function(x96,v96){return x96<v96;}
,'r9':function(u9,B9){return u9==B9;}
,'l2C':function(N2C,G2C){return N2C<G2C;}
,'c46':function(Z46,q46){return Z46*q46;}
,'J2M':function(L2M,S2M){return L2M==S2M;}
,'H5M':function(f5M,e5M){return f5M==e5M;}
,'y76':function(W76,O76){return W76===O76;}
,'N8I':function(G8I,R8I){return G8I!==R8I;}
,'D94':function(p94,T94){return p94==T94;}
,'v6':function(i6,Y6){return i6<Y6;}
,'Z8Y':function(q8Y,l8Y){return q8Y*l8Y;}
,'c7r':function(Z7r,q7r){return Z7r>q7r;}
,'T1z':function(m1z,b1z){return m1z<b1z;}
,'d4z':function(g4z,k4z){return g4z>=k4z;}
,'W54':function(O54,h54){return O54>h54;}
,'o46':function(P46,M46){return P46/M46;}
,'v72':function(i72,Y72,A72){return i72*Y72/A72;}
,'w8z':function(n8z,r8z){return n8z/r8z;}
,'g7':function(k7,c7){return k7<c7;}
,'R8':function(t8,D8){return t8<=D8;}
,'D0':function(p0,T0){return p0!=T0;}
,'y86':function(W86,O86){return W86*O86;}
,'r5C':function(u5C,B5C){return u5C==B5C;}
,'d8':function(g8,k8){return g8<k8;}
,'F92':function(x92,v92){return x92!==v92;}
,'W8F':function(O8F,h8F){return O8F!==h8F;}
,'a64':function(E64,C64){return E64/C64;}
,'U9M':function(J9M,L9M){return J9M==L9M;}
,'s8C':function(X8C,K8C){return X8C/K8C;}
,'g5Y':function(k5Y,c5Y){return k5Y>c5Y;}
,'n86':function(r86,u86){return r86-u86;}
,'L8z':function(S8z,y8z){return S8z==y8z;}
,'i9z':function(Y9z,A9z){return Y9z>A9z;}
,'y3r':function(W3r,O3r){return W3r==O3r;}
,'b5':function(V5,s0){return V5*s0;}
,'v26':function(i26,Y26){return i26>=Y26;}
,'e8r':function(d8r,g8r){return d8r-g8r;}
,'y9F':function(W9F,O9F){return W9F-O9F;}
,'g82':function(k82,c82){return k82===c82;}
,'y9':function(W9,O9){return W9==O9;}
,'H0F':function(f0F,e0F){return f0F<e0F;}
,'h4F':function(I4F,F4F){return I4F-F4F;}
,'C62':function(o62,P62){return o62==P62;}
,'K2C':function(w2C,n2C){return w2C!=n2C;}
,'L1C':function(S1C,y1C){return S1C in y1C;}
,'Q8z':function(U8z,J8z){return U8z==J8z;}
,'M7F':function(H7F,f7F){return H7F*f7F;}
,'k9M':function(c9M,Z9M){return c9M-Z9M;}
,'F3z':function(x3z,v3z){return x3z==v3z;}
,'i6I':function(Y6I,A6I){return Y6I<A6I;}
,'s0C':function(X0C,K0C){return X0C/K0C;}
,'O9C':function(h9C,I9C){return h9C<I9C;}
,'k2':function(Z2,q2){return Z2/q2;}
,'b3r':function(V3r,s5r){return V3r>s5r;}
,'a5I':function(E5I,C5I){return E5I===C5I;}
,'l64':function(N64,G64){return N64!==G64;}
,'l4':function(N4,G4){return N4<G4;}
,'s3C':function(X3C,K3C){return X3C|K3C;}
,'w7I':function(n7I,r7I){return n7I-r7I;}
,'e52':function(d52,g52){return d52-g52;}
,'g3M':function(k3M,c3M){return k3M>=c3M;}
,'P0r':function(M0r,H0r){return M0r<=H0r;}
,'V8F':function(s6C,X6C){return s6C-X6C;}
,'F74':function(x74,v74){return x74<v74;}
,'h76':function(I76,F76){return I76/F76;}
,'e7Y':function(d7Y,g7Y){return d7Y<=g7Y;}
,'k32':function(c32,Z32){return c32*Z32;}
,'g56':function(k56,c56){return k56!=c56;}
,'f7C':function(e7C,d7C,g7C){return e7C-d7C+g7C;}
,'i0I':function(Y0I,A0I){return Y0I/A0I;}
,'A3M':function(j3M,a3M){return j3M<a3M;}
,'J42':function(L42,S42){return L42==S42;}
,'I3M':function(F3M,x3M){return F3M/x3M;}
,'j3F':function(a3F,E3F){return a3F===E3F;}
,'K24':function(w24,n24){return w24/n24;}
,'e4C':function(d4C,g4C){return d4C==g4C;}
,'U2I':function(J2I,L2I){return J2I==L2I;}
,'i3z':function(Y3z,A3z){return Y3z<A3z;}
,'I8C':function(F8C,x8C){return F8C>x8C;}
,'y66':function(W66,O66){return W66>O66;}
,'s5Y':function(X5Y,K5Y){return X5Y<K5Y;}
,'B32':function(z32,Q32){return z32>=Q32;}
,'F2I':function(x2I,v2I){return x2I==v2I;}
,'a2C':function(E2C,C2C){return E2C<C2C;}
,'d06':function(g06,k06){return g06<k06;}
,'h3I':function(I3I,F3I){return I3I==F3I;}
,'Z82':function(q82,l82){return q82===l82;}
,'k7z':function(c7z,Z7z){return c7z<Z7z;}
,'D16':function(p16,T16){return p16!=T16;}
,'L2':function(S2,W2){return S2>W2;}
,'N6Y':function(G6Y,R6Y){return G6Y>=R6Y;}
,'V56':function(s06,X06){return s06==X06;}
,'u84':function(B84,z84){return B84<z84;}
,'N84':function(G84,R84){return G84-R84;}
,'j2I':function(a2I,E2I){return a2I!=E2I;}
,'s1M':function(X1M,K1M){return X1M>=K1M;}
,'v16':function(i16,Y16){return i16*Y16;}
,'X1':function(K1,w1){return K1==w1;}
,'K6M':function(w6M,n6M){return w6M-n6M;}
,'R4z':function(t4z,D4z){return t4z-D4z;}
,'P8Y':function(M8Y,H8Y){return M8Y>H8Y;}
,'H2Y':function(f2Y,e2Y){return f2Y-e2Y;}
,'s8z':function(X8z,K8z){return X8z-K8z;}
,'T6Y':function(m6Y,b6Y){return m6Y in b6Y;}
,'A5F':function(j5F,a5F){return j5F<a5F;}
,'E6':function(C6,o6){return C6==o6;}
,'S9M':function(y9M,W9M){return y9M==W9M;}
,'a0Y':function(E0Y,C0Y){return E0Y!=C0Y;}
,'l0F':function(N0F,G0F){return N0F-G0F;}
,'P2z':function(M2z,H2z){return M2z/H2z;}
,'G7z':function(R7z,t7z){return R7z-t7z;}
,'h5C':function(I5C,F5C){return I5C!==F5C;}
,'m94':function(b94,V94){return b94==V94;}
,'I0C':function(F0C,x0C){return F0C>x0C;}
,'q7z':function(l7z,N7z){return l7z-N7z;}
,'n3Y':function(r3Y,u3Y){return r3Y<u3Y;}
,'d42':function(g42,k42){return g42-k42;}
,'E2F':function(C2F,o2F){return C2F<o2F;}
,'B34':function(z34,Q34){return z34-Q34;}
,'q74':function(l74,N74){return l74<N74;}
,'V84':function(s6z,X6z){return s6z-X6z;}
,'d3r':function(g3r,k3r){return g3r&k3r;}
,'a9F':function(E9F,C9F){return E9F-C9F;}
,'E0':function(C0,o0){return C0===o0;}
,'x6r':function(v6r,i6r){return v6r>=i6r;}
,'E8F':function(C8F,o8F){return C8F<=o8F;}
,'d0z':function(g0z,k0z){return g0z<k0z;}
,'T7':function(m7,b7){return m7/b7;}
,'w8Y':function(n8Y,r8Y){return n8Y<=r8Y;}
,'y0F':function(W0F,O0F){return W0F<O0F;}
,'p6r':function(T6r,m6r){return T6r==m6r;}
,'Q2':function(U2,J2){return U2!=J2;}
,'w0r':function(n0r,r0r){return n0r>r0r;}
,'V2z':function(s4z,X4z){return s4z==X4z;}
,'M3z':function(H3z,f3z){return H3z<f3z;}
,'x5M':function(v5M,i5M){return v5M<=i5M;}
,'X0M':function(K0M,w0M){return K0M>=w0M;}
,'B3Y':function(z3Y,Q3Y){return z3Y<Q3Y;}
,'C9C':function(o9C,P9C){return o9C-P9C;}
,'r9F':function(u9F,B9F){return u9F-B9F;}
,'G9z':function(R9z,t9z){return R9z-t9z;}
,'u5F':function(B5F,z5F){return B5F-z5F;}
,'H2C':function(f2C,e2C){return f2C<e2C;}
,'G86':function(R86,t86){return R86<=t86;}
,'B1F':function(z1F,Q1F){return z1F<Q1F;}
,'S0I':function(y0I,W0I){return y0I<W0I;}
,'d1I':function(g1I,k1I){return g1I<k1I;}
,'E86':function(C86,o86){return C86/o86;}
,'d7r':function(g7r,k7r){return g7r<k7r;}
,'i62':function(Y62,A62){return Y62<A62;}
,'T26':function(m26,b26){return m26===b26;}
,'Q7I':function(U7I,J7I){return U7I!==J7I;}
,'b5M':function(V5M,s0M){return V5M-s0M;}
,'O3z':function(h3z,I3z){return h3z===I3z;}
,'d2C':function(g2C,k2C){return g2C!=k2C;}
,'w2Y':function(n2Y,r2Y){return n2Y/r2Y;}
,'T7I':function(m7I,b7I){return m7I==b7I;}
,'M5r':function(H5r,f5r){return H5r*f5r;}
,'G1F':function(R1F,t1F){return R1F>t1F;}
,'u0r':function(B0r,z0r){return B0r*z0r;}
,'U1F':function(J1F,L1F){return J1F<L1F;}
,'J2C':function(L2C,S2C){return L2C===S2C;}
,'S0M':function(y0M,W0M){return y0M>=W0M;}
,'D6I':function(p6I,T6I){return p6I*T6I;}
,'b76':function(V76,s86){return V76-s86;}
,'A16':function(j16,a16){return j16-a16;}
,'N5z':function(G5z,R5z){return G5z==R5z;}
,'j92':function(a92,E92){return a92*E92;}
,'v1C':function(i1C,Y1C){return i1C in Y1C;}
,'G96':function(R96,t96){return R96-t96;}
,'c06':function(Z06,q06){return Z06<q06;}
,'o76':function(P76,M76){return P76>M76;}
,'F0I':function(x0I,v0I){return x0I===v0I;}
,'T3M':function(m3M,b3M){return m3M>=b3M;}
,'M36':function(H36,f36){return H36-f36;}
,'f1r':function(e1r,d1r){return e1r>d1r;}
,'i9C':function(Y9C,A9C){return Y9C>=A9C;}
,'L7':function(S7,y7){return S7>y7;}
,'D02':function(p02,T02){return p02-T02;}
,'A1M':function(j1M,a1M){return j1M<a1M;}
,'O52':function(h52,I52){return h52<I52;}
,'e34':function(d34,g34){return d34/g34;}
,'p4z':function(T4z,m4z){return T4z-m4z;}
,'k96':function(c96,Z96){return c96==Z96;}
,'G5C':function(R5C,t5C){return R5C-t5C;}
,'J5M':function(L5M,S5M){return L5M>=S5M;}
,'T84':function(m84,b84){return m84==b84;}
,'x9':function(v9,i9){return v9!=i9;}
,'V6F':function(s9F,X9F){return s9F==X9F;}
,'v3M':function(i3M,Y3M){return i3M<Y3M;}
,'r0z':function(u0z,B0z){return u0z>B0z;}
,'E7I':function(C7I,o7I){return C7I/o7I;}
,'U92':function(J92,L92){return J92>L92;}
,'i4C':function(Y4C,A4C){return Y4C==A4C;}
,'w3C':function(n3C,r3C){return n3C|r3C;}
,'v8I':function(i8I,Y8I){return i8I>Y8I;}
,'v1z':function(i1z,Y1z){return i1z==Y1z;}
,'E2':function(C2,o2){return C2/o2;}
,'w22':function(n22,r22){return n22===r22;}
,'J4Y':function(L4Y,S4Y){return L4Y-S4Y;}
,'b1':function(V1,s2){return V1<s2;}
,'u82':function(B82,z82){return B82<z82;}
,'j2r':function(a2r,E2r){return a2r<E2r;}
,'v8F':function(i8F,Y8F){return i8F!=Y8F;}
,'b7r':function(V7r,s8r){return V7r<s8r;}
,'h0Y':function(I0Y,F0Y){return I0Y*F0Y;}
,'D2I':function(p2I,T2I){return p2I>T2I;}
,'x8':function(v8,i8){return v8<i8;}
,'b4':function(V4,s3){return V4<=s3;}
,'K42':function(w42,n42){return w42<=n42;}
,'X9r':function(K9r,w9r){return K9r-w9r;}
,'x3r':function(v3r,i3r){return v3r>=i3r;}
,'p7r':function(T7r,m7r){return T7r-m7r;}
,'O7F':function(h7F,I7F){return h7F!==I7F;}
,'N4I':function(G4I,R4I){return G4I==R4I;}
,'U8r':function(J8r,L8r){return J8r>=L8r;}
,'E26':function(C26,o26){return C26>=o26;}
,'S36':function(y36,W36){return y36-W36;}
,'i9r':function(Y9r,A9r){return Y9r===A9r;}
,'P4I':function(M4I,H4I){return M4I==H4I;}
,'S32':function(y32,W32){return y32>=W32;}
,'P54':function(M54,H54){return M54==H54;}
,'j62':function(a62,E62){return a62===E62;}
,'T8Y':function(m8Y,b8Y){return m8Y<b8Y;}
,'f8I':function(e8I,d8I){return e8I<d8I;}
,'z2z':function(Q2z,U2z){return Q2z<U2z;}
,'e1Y':function(d1Y,g1Y){return d1Y<g1Y;}
,'e5r':function(d5r,g5r){return d5r==g5r;}
,'L9I':function(S9I,y9I){return S9I>y9I;}
,'x4Y':function(v4Y,i4Y){return v4Y<=i4Y;}
,'Z8z':function(q8z,l8z){return q8z-l8z;}
,'t22':function(D22,p22){return D22<p22;}
,'r0F':function(u0F,B0F){return u0F!==B0F;}
,'Z24':function(q24,l24){return q24==l24;}
,'a9':function(E9,C9){return E9==C9;}
,'r3r':function(u3r,B3r){return u3r==B3r;}
,'L26':function(S26,y26){return S26!=y26;}
,'M7z':function(H7z,f7z){return H7z*f7z;}
,'G9r':function(R9r,t9r){return R9r-t9r;}
,'r8':function(u8,B8){return u8===B8;}
,'i3F':function(Y3F,A3F){return Y3F==A3F;}
,'S1F':function(y1F,W1F){return y1F*W1F;}
,'W7':function(O7,h7){return O7==h7;}
,'G9M':function(R9M,t9M){return R9M-t9M;}
,'C1':function(o1,P1){return o1<P1;}
,'v7C':function(i7C,Y7C){return i7C-Y7C;}
,'N5Y':function(G5Y,R5Y){return G5Y>R5Y;}
,'B74':function(z74,Q74){return z74/Q74;}
,'G6I':function(R6I,t6I){return R6I*t6I;}
,'S9z':function(y9z,W9z){return y9z-W9z;}
,'Q1M':function(U1M,J1M){return U1M==J1M;}
,'Y44':function(A44,j44){return A44<j44;}
,'a5M':function(E5M,C5M){return E5M===C5M;}
,'Z5z':function(q5z,l5z){return q5z>l5z;}
,'N26':function(G26,R26){return G26-R26;}
,'Z1M':function(q1M,l1M){return q1M==l1M;}
,'K2z':function(w2z,n2z){return w2z/n2z;}
,'L5z':function(S5z,y5z){return S5z in y5z;}
,'Y8':function(A8,j8){return A8==j8;}
,'C74':function(o74,P74){return o74<P74;}
,'y1I':function(W1I,O1I){return W1I-O1I;}
,'P6F':function(M6F,H6F){return M6F==H6F;}
,'I82':function(F82,x82){return F82<x82;}
,'J4F':function(L4F,S4F){return L4F-S4F;}
,'r76':function(u76,B76){return u76-B76;}
,'i94':function(Y94,A94){return Y94<A94;}
,'e1':function(g1,k1){return g1-k1;}
,'P6':function(M6,H6){return M6<H6;}
,'i0M':function(Y0M,A0M){return Y0M>=A0M;}
,'E6Y':function(C6Y,o6Y){return C6Y==o6Y;}
,'J66':function(L66,S66){return L66<S66;}
,'p6M':function(T6M,m6M){return T6M==m6M;}
,'w4r':function(n4r,r4r){return n4r<r4r;}
,'V8I':function(s6r,X6r){return s6r<X6r;}
,'l8':function(N8,G8){return N8>G8;}
,'g0C':function(k0C,c0C,Z0C){return k0C-c0C-Z0C;}
,'B5r':function(z5r,Q5r){return z5r-Q5r;}
,'C32':function(o32,P32){return o32/P32;}
,'D1F':function(p1F,T1F){return p1F<T1F;}
,'O32':function(h32,I32){return h32>=I32;}
,'P22':function(M22,H22){return M22<H22;}
,'g84':function(k84,c84){return k84<c84;}
,'J6z':function(L6z,S6z){return L6z==S6z;}
,'B0M':function(z0M,Q0M){return z0M<=Q0M;}
,'D96':function(p96,T96){return p96>T96;}
,'v5z':function(i5z,Y5z){return i5z!==Y5z;}
,'p46':function(T46,m46){return T46-m46;}
,'Q2F':function(U2F,J2F){return U2F==J2F;}
,'A12':function(j12,a12){return j12===a12;}
,'E16':function(C16,o16){return C16===o16;}
,'y6M':function(W6M,O6M){return W6M-O6M;}
,'G4M':function(R4M,t4M){return R4M===t4M;}
,'s2F':function(X2F,K2F){return X2F==K2F;}
,'V7':function(s8,X8){return s8===X8;}
,'g2F':function(k2F,c2F){return k2F==c2F;}
,'n1':function(r1,u1,B1){return r1*u1/B1;}
,'g22':function(k22,c22){return k22===c22;}
,'Q84':function(U84,J84){return U84-J84;}
,'M9C':function(H9C,f9C){return H9C>f9C;}
,'Q1C':function(U1C,J1C){return U1C/J1C;}
,'p9F':function(T9F,m9F){return T9F<m9F;}
,'V5F':function(s0F,X0F){return s0F<X0F;}
,'k2I':function(c2I,Z2I){return c2I==Z2I;}
,'y4F':function(W4F,O4F){return W4F==O4F;}
,'A1r':function(j1r,a1r){return j1r-a1r;}
,'m2r':function(b2r,V2r){return b2r*V2r;}
,'J2r':function(L2r,S2r,y2r){return L2r*S2r/y2r;}
,'E3M':function(C3M,o3M){return C3M===o3M;}
,'A1z':function(j1z,a1z){return j1z==a1z;}
,'j02':function(a02,E02){return a02-E02;}
,'B7z':function(z7z,Q7z){return z7z==Q7z;}
,'m2I':function(b2I,V2I){return b2I==V2I;}
,'U5r':function(J5r,L5r){return J5r<L5r;}
,'l2M':function(N2M,G2M){return N2M==G2M;}
,'o06':function(P06,M06){return P06-M06;}
,'K1I':function(w1I,n1I){return w1I<n1I;}
,'W6F':function(O6F,h6F){return O6F*h6F;}
,'f0C':function(e0C,d0C){return e0C>d0C;}
,'m8C':function(b8C,V8C,s62){return b8C-V8C+s62;}
,'p62':function(T62,m62){return T62*m62;}
,'p04':function(T04,m04){return T04<=m04;}
,'P1r':function(M1r,H1r){return M1r<H1r;}
,'e72':function(d72,g72){return d72===g72;}
,'I3C':function(F3C,x3C){return F3C!=x3C;}
,'K9F':function(w9F,n9F){return w9F-n9F;}
,'L2Y':function(S2Y,y2Y){return S2Y==y2Y;}
,'a42':function(E42,C42){return E42>C42;}
,'i9M':function(Y9M,A9M){return Y9M==A9M;}
,'f6':function(e6,d6){return e6>=d6;}
,'U7z':function(J7z,L7z){return J7z>L7z;}
,'j9z':function(a9z,E9z){return a9z==E9z;}
,'J64':function(L64,S64){return L64-S64;}
,'q3Y':function(l3Y,N3Y){return l3Y<=N3Y;}
,'Y46':function(A46,j46){return A46<j46;}
,'U4M':function(J4M,L4M){return J4M<L4M;}
,'o0F':function(P0F,M0F){return P0F<M0F;}
,'i1Y':function(Y1Y,A1Y){return Y1Y<A1Y;}
,'s7C':function(X7C,K7C){return X7C===K7C;}
,'q9M':function(l9M,N9M){return l9M-N9M;}
,'L0C':function(S0C,y0C){return S0C>y0C;}
,'Y64':function(A64,j64){return A64>j64;}
,'X7z':function(K7z,w7z){return K7z<w7z;}
,'O92':function(h92,I92){return h92/I92;}
,'z8I':function(Q8I,U8I){return Q8I<U8I;}
,'E7C':function(C7C,o7C){return C7C*o7C;}
,'M9M':function(H9M,f9M){return H9M<f9M;}
,'j4M':function(a4M,E4M){return a4M/E4M;}
,'H4Y':function(f4Y,e4Y){return f4Y!=e4Y;}
,'M52':function(H52,f52){return H52==f52;}
,'C1F':function(o1F,P1F){return o1F!==P1F;}
,'K6z':function(w6z,n6z){return w6z/n6z;}
,'U3z':function(J3z,L3z){return J3z<=L3z;}
,'G92':function(R92,t92){return R92>t92;}
,'a3r':function(E3r,C3r){return E3r<=C3r;}
,'k7Y':function(c7Y,Z7Y){return c7Y-Z7Y;}
,'U62':function(J62,L62){return J62>L62;}
,'I2r':function(F2r,x2r,v2r){return F2r*x2r/v2r;}
,'g3C':function(k3C,c3C){return k3C<c3C;}
,'K8I':function(w8I,n8I){return w8I-n8I;}
,'B36':function(z36,Q36){return z36-Q36;}
,'y64':function(W64,O64){return W64-O64;}
,'E3C':function(C3C,o3C){return C3C<o3C;}
,'y2z':function(W2z,O2z){return W2z<O2z;}
,'w8C':function(n8C,r8C){return n8C-r8C;}
,'s12':function(X12,K12){return X12<K12;}
,'r06':function(u06,B06){return u06>B06;}
,'t1M':function(D1M,p1M){return D1M>p1M;}
,'Q3M':function(U3M,J3M){return U3M===J3M;}
,'S4M':function(y4M,W4M){return y4M===W4M;}
,'X3Y':function(K3Y,w3Y){return K3Y*w3Y;}
,'h4Y':function(I4Y,F4Y){return I4Y&F4Y;}
,'b64':function(V64,s94){return V64-s94;}
,'D72':function(p72,T72){return p72===T72;}
,'y0Y':function(W0Y,O0Y){return W0Y*O0Y;}
,'E56':function(C56,o56){return C56-o56;}
,'S96':function(y96,W96){return y96<W96;}
,'Y9F':function(A9F,j9F){return A9F==j9F;}
,'N2Y':function(G2Y,R2Y){return G2Y/R2Y;}
,'c2M':function(Z2M,q2M){return Z2M<q2M;}
,'M2I':function(H2I,f2I){return H2I*f2I;}
,'Y3I':function(A3I,j3I){return A3I-j3I;}
,'D9z':function(p9z,T9z){return p9z<T9z;}
,'x2z':function(v2z,i2z,Y2z){return v2z/i2z*Y2z;}
,'k8C':function(c8C,Z8C){return c8C-Z8C;}
,'Q1z':function(U1z,J1z){return U1z-J1z;}
,'q9r':function(l9r,N9r){return l9r===N9r;}
,'z24':function(Q24,U24){return Q24-U24;}
,'X76':function(K76,w76,n76){return K76-w76-n76;}
,'Z2F':function(q2F,l2F){return q2F==l2F;}
,'X36':function(K36,w36){return K36!=w36;}
,'J06':function(L06,S06){return L06!==S06;}
,'f4r':function(e4r,d4r){return e4r===d4r;}
,'M72':function(H72,f72){return H72-f72;}
,'o4Y':function(P4Y,M4Y){return P4Y&M4Y;}
,'h2C':function(I2C,F2C){return I2C==F2C;}
,'S62':function(y62,W62){return y62-W62;}
,'E2Y':function(C2Y,o2Y,P2Y,M2Y){return C2Y-o2Y+P2Y+M2Y;}
,'K0z':function(w0z,n0z){return w0z in n0z;}
,'N0':function(G0,R0){return G0*R0;}
,'q8C':function(l8C,N8C){return l8C-N8C;}
,'m36':function(b36,V36){return b36<V36;}
,'b4z':function(V4z,s3z){return V4z>=s3z;}
,'m8r':function(b8r,V8r){return b8r*V8r;}
,'E82':function(C82,o82){return C82==o82;}
,'d2Y':function(g2Y,k2Y,c2Y){return g2Y-k2Y+c2Y;}
,'u8C':function(B8C,z8C){return B8C==z8C;}
,'D52':function(p52,T52){return p52==T52;}
,'Q0C':function(U0C,J0C){return U0C/J0C;}
,'o7r':function(P7r,M7r){return P7r&M7r;}
,'B0I':function(z0I,Q0I){return z0I/Q0I;}
,'D9r':function(p9r,T9r){return p9r===T9r;}
,'e9r':function(d9r,g9r){return d9r/g9r;}
,'t84':function(D84,p84){return D84<=p84;}
,'P82':function(M82,H82){return M82==H82;}
,'O96':function(h96,I96){return h96<I96;}
,'W12':function(O12,h12){return O12*h12;}
,'g8Y':function(k8Y,c8Y){return k8Y*c8Y;}
,'u3C':function(B3C,z3C){return B3C|z3C;}
,'b62':function(V62,s92){return V62===s92;}
,'I4I':function(F4I,x4I){return F4I*x4I;}
,'I14':function(F14,x14){return F14==x14;}
,'w02':function(n02,r02,u02){return n02-r02-u02;}
,'C3Y':function(o3Y,P3Y){return o3Y<P3Y;}
,'R3I':function(t3I,D3I){return t3I*D3I;}
,'z5':function(Q5,U5){return Q5*U5;}
,'x06':function(v06,i06){return v06==i06;}
,'v54':function(i54,Y54){return i54>Y54;}
,'r8I':function(u8I,B8I){return u8I%B8I;}
,'s5F':function(X5F,K5F){return X5F<K5F;}
,'s1r':function(X1r,K1r){return X1r==K1r;}
,'S4C':function(y4C,W4C){return y4C<=W4C;}
,'W2F':function(O2F,h2F){return O2F*h2F;}
,'v12':function(i12,Y12){return i12===Y12;}
,'Y4F':function(A4F,j4F){return A4F-j4F;}
,'u2':function(B2,z2){return B2==z2;}
,'e02':function(d02,g02){return d02==g02;}
,'E5F':function(C5F,o5F){return C5F>o5F;}
,'V26':function(s46,X46){return s46===X46;}
,'m9r':function(b9r,V9r){return b9r===V9r;}
,'W6Y':function(O6Y,h6Y){return O6Y>h6Y;}
,'A9I':function(j9I,a9I){return j9I==a9I;}
,'Z7I':function(q7I,l7I){return q7I===l7I;}
,'x5C':function(v5C,i5C,Y5C){return v5C-i5C+Y5C;}
,'S3F':function(y3F,W3F){return y3F*W3F;}
,'k74':function(c74,Z74){return c74>Z74;}
,'M6I':function(H6I,f6I){return H6I<=f6I;}
,'w9I':function(n9I,r9I){return n9I<r9I;}
,'x86':function(v86,i86){return v86/i86;}
,'H2M':function(f2M,e2M){return f2M-e2M;}
,'m92':function(b92,V92){return b92/V92;}
,'W8C':function(O8C,h8C){return O8C*h8C;}
,'T22':function(m22,b22){return m22-b22;}
,'Z2Y':function(q2Y,l2Y){return q2Y==l2Y;}
,'F7F':function(x7F,v7F){return x7F!==v7F;}
,'Y5M':function(A5M,j5M){return A5M<j5M;}
,'u54':function(B54,z54){return B54<z54;}
,'a3I':function(E3I,C3I){return E3I!=C3I;}
,'l4F':function(N4F,G4F){return N4F<G4F;}
,'z6C':function(Q6C,U6C){return Q6C>=U6C;}
,'Z56':function(q56,l56){return q56!=l56;}
,'n4M':function(r4M,u4M){return r4M<u4M;}
,'F9C':function(x9C,v9C){return x9C-v9C;}
,'L0r':function(S0r,y0r){return S0r-y0r;}
,'m1F':function(b1F,V1F){return b1F==V1F;}
,'f8F':function(e8F,d8F){return e8F===d8F;}
,'O2':function(h2,I2){return h2===I2;}
,'S3':function(y3,W3){return y3==W3;}
,'t7':function(D7,p7){return D7/p7;}
,'Q5z':function(U5z,J5z){return U5z!=J5z;}
,'d5':function(g5,k5){return g5!=k5;}
,'s2Y':function(X2Y,K2Y){return X2Y/K2Y;}
,'o2M':function(P2M,M2M){return P2M*M2M;}
,'f0r':function(e0r,d0r){return e0r*d0r;}
,'B8M':2,'Q6':function(U6,J6){return U6<J6;}
,'r3I':function(u3I,B3I){return u3I==B3I;}
,'c4F':function(Z4F,q4F){return Z4F===q4F;}
,'q3F':function(l3F,N3F){return l3F==N3F;}
,'m72':function(b72,V72){return b72<V72;}
,'Z0r':function(q0r,l0r){return q0r==l0r;}
,'x66':function(v66,i66){return v66<i66;}
,'e74':function(d74,g74){return d74>g74;}
,'r04':function(u04,B04){return u04==B04;}
,'M34':function(H34,f34){return H34*f34;}
,'P0C':function(M0C,H0C){return M0C<H0C;}
,'H6C':function(f6C,e6C){return f6C<e6C;}
,'P8F':function(M8F,H8F){return M8F==H8F;}
,'u56':function(B56,z56){return B56==z56;}
,'D0I':function(p0I,T0I){return p0I/T0I;}
,'l6C':function(N6C,G6C){return N6C==G6C;}
,'Q54':function(U54,J54){return U54>J54;}
,'o5M':function(P5M,M5M){return P5M<M5M;}
,'T8F':function(m8F,b8F){return m8F*b8F;}
,'v1r':function(i1r,Y1r){return i1r-Y1r;}
,'h7r':function(I7r,F7r){return I7r&F7r;}
,'D0C':function(p0C,T0C){return p0C<T0C;}
,'C02':function(o02,P02){return o02==P02;}
,'q3z':function(l3z,N3z){return l3z*N3z;}
,'k92':function(c92,Z92){return c92/Z92;}
,'u7I':function(B7I,z7I){return B7I/z7I;}
,'B7F':function(z7F,Q7F){return z7F!==Q7F;}
,'u7C':function(B7C,z7C){return B7C<z7C;}
,'U7F':function(J7F,L7F){return J7F==L7F;}
,'q36':function(l36,N36){return l36===N36;}
,'J9F':function(L9F,S9F){return L9F===S9F;}
,'k1F':function(c1F,Z1F){return c1F!==Z1F;}
,'q34':function(l34,N34){return l34==N34;}
,'f84':function(e84,d84){return e84-d84;}
,'m7Y':function(b7Y,V7Y){return b7Y>V7Y;}
,'h6M':function(I6M,F6M){return I6M-F6M;}
,'b6C':function(V6C,s9C){return V6C!=s9C;}
,'F9r':function(x9r,v9r){return x9r===v9r;}
,'m7z':function(b7z,V7z){return b7z-V7z;}
,'T5Y':function(m5Y,b5Y){return m5Y-b5Y;}
,'D34':function(p34,T34){return p34==T34;}
,'n7F':function(r7F,u7F){return r7F==u7F;}
,'t2Y':function(D2Y,p2Y){return D2Y/p2Y;}
,'B6I':function(z6I,Q6I){return z6I/Q6I;}
,'k2r':function(c2r,Z2r){return c2r<Z2r;}
,'J1':function(L1,S1){return L1==S1;}
,'W14':function(O14,h14){return O14<h14;}
,'f6F':function(e6F,d6F){return e6F===d6F;}
,'H66':function(f66,e66){return f66>e66;}
,'G94':function(R94,t94){return R94==t94;}
,'v7I':function(i7I,Y7I){return i7I===Y7I;}
,'g1z':function(k1z,c1z){return k1z<c1z;}
,'N3C':function(G3C,R3C){return G3C==R3C;}
,'x24':function(v24,i24){return v24==i24;}
,'K9Y':function(w9Y,n9Y){return w9Y<n9Y;}
,'J6C':function(L6C,S6C){return L6C-S6C;}
,'F0M':function(x0M,v0M){return x0M-v0M;}
,'c3r':function(Z3r,q3r){return Z3r>=q3r;}
,'K66':function(w66,n66){return w66/n66;}
,'z2C':function(Q2C,U2C){return Q2C%U2C;}
,'N2z':function(G2z,R2z){return G2z<=R2z;}
,'R46':function(t46,D46){return t46>D46;}
,'f8C':function(e8C,d8C,g8C){return e8C-d8C-g8C;}
,'I7':function(F7,x7){return F7==x7;}
,'q52':function(l52,N52){return l52-N52;}
,'U8M':1,'u1M':function(B1M,z1M){return B1M<z1M;}
,'j72':function(a72,E72){return a72/E72;}
,'c5':function(Z5,q5){return Z5!==q5;}
,'v6Y':function(i6Y,Y6Y){return i6Y<=Y6Y;}
,'L22':function(S22,y22){return S22<y22;}
,'m1Y':function(b1Y,V1Y){return b1Y*V1Y;}
,'G3F':function(R3F,t3F){return R3F*t3F;}
,'O74':function(h74,I74){return h74<I74;}
,'f82':function(e82,d82){return e82<d82;}
,'z4Y':function(Q4Y,U4Y){return Q4Y/U4Y;}
,'b9':function(V9,s1){return V9===s1;}
,'X1Y':function(K1Y,w1Y){return K1Y>w1Y;}
,'P1M':function(M1M,H1M){return M1M-H1M;}
,'P1C':function(M1C,H1C){return M1C in H1C;}
,'y9Y':function(W9Y,O9Y){return W9Y<=O9Y;}
,'S1Y':function(y1Y,W1Y){return y1Y<W1Y;}
,'m32':function(b32,V32,s52){return b32/V32*s52;}
,'K64':function(w64,n64){return w64===n64;}
,'X4C':function(K4C,w4C){return K4C<w4C;}
,'a6z':function(E6z,C6z){return E6z>=C6z;}
,'g0r':function(k0r,c0r){return k0r*c0r;}
,'W1z':function(O1z,h1z){return O1z*h1z;}
,'W3M':function(O3M,h3M){return O3M/h3M;}
,'Z12':function(q12,l12){return q12<l12;}
,'h0F':function(I0F,F0F){return I0F>F0F;}
,'X9M':function(K9M,w9M){return K9M<w9M;}
,'e9C':function(d9C,g9C){return d9C-g9C;}
,'s1z':function(X1z,K1z){return X1z==K1z;}
,'r8M':3,'e62':function(d62,g62){return d62<g62;}
,'v8z':function(i8z,Y8z){return i8z*Y8z;}
,'w6':function(n6,r6){return n6==r6;}
,'h44':function(I44,F44){return I44===F44;}
,'B96':function(z96,Q96){return z96!==Q96;}
,'a0F':function(E0F,C0F){return E0F!=C0F;}
,'Y66':function(A66,j66){return A66>j66;}
,'a2M':function(E2M,C2M){return E2M/C2M;}
,'H9F':function(f9F,e9F){return f9F-e9F;}
,'t4r':function(D4r,p4r){return D4r<p4r;}
,'X0':function(K0,w0){return K0!=w0;}
,'C52':function(o52,P52){return o52==P52;}
,'M4M':function(H4M,f4M){return H4M/f4M;}
,'N2F':function(G2F,R2F){return G2F*R2F;}
,'P56':function(M56,H56){return M56<H56;}
,'u2Y':function(B2Y,z2Y){return B2Y/z2Y;}
,'Z26':function(q26,l26){return q26>l26;}
,'C9z':function(o9z,P9z){return o9z*P9z;}
,'T3C':function(m3C,b3C){return m3C<b3C;}
,'s54':function(X54,K54){return X54-K54;}
,'t4I':function(D4I,p4I){return D4I==p4I;}
,'o1I':function(P1I,M1I){return P1I<M1I;}
,'C3z':function(o3z,P3z){return o3z*P3z;}
,'o42':function(P42,M42){return P42<M42;}
,'S34':function(y34,W34){return y34==W34;}
,'f8Y':function(e8Y,d8Y){return e8Y-d8Y;}
,'h86':function(I86,F86){return I86/F86;}
,'A4I':function(j4I,a4I){return j4I==a4I;}
,'W3C':function(O3C,h3C){return O3C==h3C;}
,'q6I':function(l6I,N6I){return l6I/N6I;}
,'s7':function(X7,K7){return X7>K7;}
,'z5M':function(Q5M,U5M){return Q5M>=U5M;}
,'Z1z':function(q1z,l1z){return q1z==l1z;}
,'P7':function(M7,H7){return M7==H7;}
,'W8z':function(O8z,h8z){return O8z==h8z;}
,'J44':function(L44,S44){return L44===S44;}
,'K5':function(w5,n5){return w5*n5;}
,'n52':function(r52,u52){return r52*u52;}
,'E5Y':function(C5Y,o5Y){return C5Y*o5Y;}
,'Z4r':function(q4r,l4r){return q4r==l4r;}
,'L4r':function(S4r,y4r){return S4r===y4r;}
,'A56':function(j56,a56){return j56-a56;}
,'v5Y':function(i5Y,Y5Y){return i5Y-Y5Y;}
,'W9I':function(O9I,h9I){return O9I*h9I;}
,'o44':function(P44,M44){return P44/M44;}
,'x4z':function(v4z,i4z){return v4z<i4z;}
,'I1C':function(F1C,x1C){return F1C*x1C;}
,'y6z':function(W6z,O6z){return W6z==O6z;}
,'O7z':function(h7z,I7z){return h7z>I7z;}
,'O1Y':function(h1Y,I1Y){return h1Y<=I1Y;}
,'v14':function(i14,Y14){return i14>Y14;}
,'l3r':function(N3r,G3r){return N3r&G3r;}
,'B3z':function(z3z,Q3z){return z3z==Q3z;}
,'M1F':function(H1F,f1F){return H1F>f1F;}
,'s5z':function(X5z,K5z){return X5z===K5z;}
,'S7z':function(y7z,W7z){return y7z==W7z;}
,'J76':function(L76,S76){return L76!=S76;}
,'X52':function(K52,w52){return K52/w52;}
}
;(function(){var U9J=D6s.v4q.i4q("6cec")?"rightTick":"function",a7J=D6s.v4q.i4q("68")?"getFullYear":"stx",A8M=D6s.v4q.i4q("e5a")?"undefined":"prototype";function _stxKernel_js(_stxThirdParty,_exports){var h9q=D6s.v4q.i4q("42")?"scrollLeft":"createDataSegment",B1J=D6s.v4q.i4q("74")?"numeric":"backingStorePixelRatio",V4J=D6s.v4q.i4q("c4ba")?0.3:"lesf",N9J=D6s.v4q.i4q("43")?"err":"w",T6J=D6s.v4q.i4q("844")?"amd":"center",W8J="right",b7J=D6s.v4q.i4q("d84")?"middle":"timeRange",x8M="top",L9q=D6s.v4q.i4q("38f2")?"Close":20,D9q="bottom",Q2J="object",R4J="stx_watermark",L2q="mouse",s8M=D6s.v4q.i4q("c6")?((64.,112.80E1)>(0x2B,0x47)?(73.,"p"):(0x99,1.31E3)):"drawSeries",e6q="stx-show",N6q=30,o8J="onMouseOut",t4J="touchend",T9J="touchmove",z0J=D6s.v4q.i4q("c2")?"panelName":"touchstart",u4J=D6s.v4q.i4q("3fc2")?"XAxisLabel":"mousedown",N6J="O",L2J=D6s.v4q.i4q("e3")?"chart":"attachEvent",q9q="C",R7M=D6s.v4q.i4q("d8")?"an":"ratio",c8M="S",G7M="Q",m6J="as",M1J=D6s.v4q.i4q("616")?"ay":"maintainWhitespace",v1J="F",E9q="#FFFFFF",D3J="#000000",g8J="r_",N8J="ore",G6q=(0x1CA<=(104.,59.2E1)?(7.9E2,32):(86,149)>=116.2E1?0x1F6:(0x1AF,18.5E1)),u4q=((0x246,61)<=(0x6C,68)?(39.0E1,"w"):(84,8.02E2)<(140.,74.)?(4.9E1,"pan"):(76.9E1,15.3E1)),x4J="et",w7J="ec",T3J="ca",J0J="te",T1J="ul",h1J="underlay",g8M="layout",i4J="stx-drag-chart",B4q=250,x1q="mouseup",E7J="ng",M8J="to",H1q="ne",K2J="ct",u2J="stx_crosshair_drawing",A1J="stx_crosshair",L6J="segment",R1q="it",A7J="ea",L6q=((66,48)<=(90.,0x239)?(103,")"):(62,7.46E2)<(0x1E1,0x29)?(0x16F,10):0x40<=(57.7E1,3.)?1.247E3:(74.7E1,112)),o1J=" (",y8J="%",T1q=10000,z2q=(83.4E1>(126.,0x152)?(0x1AE,1000):0x126<(25.,0xA9)?(13.74E2,0.05):(60.,143.)>=0x131?(0x142,'b'):(40.,148)),M8M=0.01,i2q=100,w3J=0.1,D4J="measureUnlit",y1q="mMeasure",o7J="l",Q4q="in",q2J="inline-block",E1q=50,F4J="ov",g4J="mousemove",g9q="px",K3J="auto",p9J="block",O2q="none",D5J="",N2q=":",J7J="0",J6q="ric",G0J=((1.227E3,89.2E1)>0x197?(142.8E1,"p"):(68,6)>0x19F?0x1E7:(0x116,0x113)),Y2q="_ch",d4J="_",o2J="st",K8J="stx_candle_shadow",l8M="stx_candle_down",C5J="_c",Y5J="Low",y6J="High",c9J="baseline_delta",G3J="Close",b8J="lo",J9q="grid",P9q=((8,0x15D)<=(51.5E1,0x7B)?'w':0x1F<=(10.18E2,0x7E)?(87.5E1,10):(71.8E1,85)),b4J=0.5,T6q="left",P9J="stx_grid_border",I4q="border",k1J="fill",m5J="text",L4J="stx_grid",v9J="stroke",h6J="stx_yaxis",m2q="x",H7J="x_",Q0J="line",R1J="mo",O8J="nt",S2J="ot",P6J="at",S1J="D",K5J="on",l5J=".",C1q="rt",y3J="ed",K7J="q",w0J="u",Z4J="ck",N2J="c",H6J="se",m6q=". ",f2J="or",X6q="f",Q6J="M",i9J="ur",W7J=((0x101,78.9E1)<=39.0E1?(2.27E2,14):(7.350E2,14.56E2)>=(0x256,0x152)?(51.6E1,"n"):(7.38E2,0x51)),f2q="han",L8J="re",Q6q="g",a8J="h",F0J=((93,0x5F)<(22.,84.30E1)?(0x110,"r"):(12.,144)<=(81,64)?(0x195,'P'):(0x11B,61.)>=(0xE4,99)?45.:(20.,0x10B)),x2J="a",J1q=": ",l2J="e",P2J="d",I1J="un",U2J="b",M0J=((137.8E1,8)<1.089E3?(0x1E1,"s"):(146.,0x65)>=(4.7E1,0x163)?0x125:136.<(5.520E2,103.)?(3.11E2,'c'):(135,119.80E1)),c8J="i",z1q="dra",Y7J="o",Z7J="m",Q8J="k",H8M="month",i3J="week",I1q=60,F8M=9,i8J=(0xE5>=(71,69)?(0x10F,60000):73.4E1<=(14,102)?0x141:(83.,63.)),X8J=(147.>(0x75,129.)?(43.0E1,1500):(11,60.1E1)<=0x196?9.34E2:(0x102,12.870E2)),E9J="tick",C8J="minute",g9J="day",C9J="vector",s0J="t",e4J="ou",d2q="y",Z2q="la",w4J=" ",S5J="transparent",e6J="div",a0J="-",J8J=((1.302E3,74.5E1)>=(18.8E1,5.80E1)?(7.520E2,true):(0x230,7.33E2)<=(0x7B,8.)?(28.0E1,'u'):(0x4C,70.3E1)),c1q=false,U8J="#zoomIn",T7J=((1.25E2,17)<0xE8?(0x11E,"#"):(126,8.64E2)<123.?"f":(96.,1.192E3)),F9J='and',J2q='eli',P8J='ose',I6J='as',y2J='di',b6J='wn',O1J='nel',k2J='lass',L4q='us',K9J='ane',V7M='itl',u9J='ol',b5J='anel',a9J='> ',v6q='play',x9J='andl',k8J='splay',E2J='te',V1q='lo',q6q='f',G1J='on',m1J='me',m3J='_tod',k8M='jum',L5J='tx_',w2J='om',P5J='I',j0J='><',H1J='oo',d3J='las',A9J='oomOut',J2J='z',t9q='ize',i0J='S',p2q='ha',v9q=';"><',n4q='2px',n8M='2',x9q='tto',h8J='ispl',b3J='_ch',V0J='ty',a8M='_y',s4J='hai',F2J='sha',q8M='os',z4q=';"></',O2J='ne',G8M='_x',l0J='ro',a1q='_c',j8M='ir',w6J='cr',f7J='ass',V3J='v',Q9q='>)</',R2q='ick',k4J='gh',H4J='>(</',o5J='tion',k5J='u',m8J='str',S6J='eteI',Y0J='Del',J4q='ous',E3J='></',w6q=';</',F3J='bsp',C3J='">&',U4q='h',z8J='ras',v2q='co',R5J='"><',y7J='one',r1J='ay',F2q='sp',G9q='tyl',l4J='tn',H9J='Ca',z9q='sh',y4J='ra',L0J='T',X3J='r',E8J='> <',z7J='"></',T4J='ior',S8J='ter',e1q='yI',y2q='k',P8M='Stic',p3J='pa',i8M='"> <',k6J='ky',q1q='St',x1J='iv',z5J='0px',M6J=((8.4E1,132)<=0x202?(12.870E2,'1'):(8.15E2,110)),j9J=':',U0J='ft',C4J='gi',n6J='ar',P1q='m',K9q='; ',i2J='lay',b7M='is',j3J='tyle',Z9J='el',g2J='nc',x6J='ion_c',W1J='ota',A5J='ann',M6q='x_',t1J='la',X4J=(0xAE<=(0x23F,146.)?0x3C:(125.,57.)<(0x43,0x1DB)?(67.,'>'):(1.287E3,0x120)),M3J='p',O4q='</',v7J=';">',X2q=((2.,0xFE)>=(1.79E2,8.790E2)?(20.,1.660E2):1.049E3<=(122.7E1,0x172)?(0x4,67.7E1):(0x229,14.5E1)<(1.3E2,137.4E1)?(0x132,'o'):(0x1EF,0x214)),l8J=': ',D2J='y',N9q='ispla',M9q='d',j6q='e',q4J='yl',r6J='" ',y4q='ve',Y8J='on_',M2q=(101.2E1>(128.,24.0E1)?(99.10E1,'i'):(38.40E1,106)),a5J='notat',T7M='an',O1q='_',Z0J='tx',t1q='n',B1q='b',v6J='-',d2J='x',j5J='t',I6q='="',D7M='ss',l9q='a',a2q='l',y9q='c',d6q=' ',F7J='pan',x3J='s',n1J='<',u8J=null,Z=function(N){STX.Comparison.mouseHasMoved=N;}
,M=function(H){STXChart.CANDLEEVEN=H;}
,C=function(P){STXChart.CANDLEDOWN=P;}
,A=function(E){STXChart.CANDLEUP=E;}
,F=function(Y){STXChart.CLOSEEVEN=Y;}
,W=function(O){STXChart.CLOSEDOWN=O;}
,L=function(S){STXChart.CLOSEUP=S;}
,U=function(J){STXChart.NONE=J;}
,z=function(Q){STX.camelCaseRegExp=Q;}
,plotSpline=_stxThirdParty.plotSpline,timezoneJS=_stxThirdParty.timezoneJS,STX=_exports.STX,STXChart=_exports.STXChart,$$=_exports.$$,$$$=_exports.$$$;STXChart.prototype.plugins={}
;if(STX.isSurface){var u=function(B){STX.gesturePointerId=B;}
,X=function(K){STX.gesture.target=K.body;}
;STX.gesture=new MSGesture();X(document);u(u8J);}
STXChart.htmlControls={"annotationSave":(n1J+x3J+F7J+d6q+y9q+a2q+l9q+D7M+I6q+x3J+j5J+d2J+v6J+B1q+j5J+t1q+d6q+x3J+Z0J+O1q+T7M+a5J+M2q+Y8J+x3J+l9q+y4q+r6J+x3J+j5J+q4J+j6q+I6q+M9q+N9q+D2J+l8J+t1q+X2q+t1q+j6q+v7J+x3J+l9q+y4q+O4q+x3J+M3J+T7M+X4J),"annotationCancel":(n1J+x3J+M3J+l9q+t1q+d6q+y9q+t1J+D7M+I6q+x3J+j5J+d2J+v6J+B1q+j5J+t1q+d6q+x3J+j5J+M6q+A5J+W1J+j5J+x6J+l9q+g2J+Z9J+r6J+x3J+j3J+I6q+M9q+b7M+M3J+i2J+l8J+t1q+X2q+t1q+j6q+K9q+P1q+n6J+C4J+t1q+v6J+a2q+j6q+U0J+j9J+M6J+z5J+v7J+y9q+T7M+y9q+j6q+a2q+O4q+x3J+M3J+l9q+t1q+X4J),"mSticky":(n1J+M9q+x1J+d6q+M2q+M9q+I6q+P1q+q1q+M2q+y9q+k6J+i8M+x3J+p3J+t1q+d6q+M2q+M9q+I6q+P1q+P8M+y2q+e1q+t1q+S8J+T4J+z7J+x3J+p3J+t1q+E8J+x3J+M3J+T7M+d6q+M2q+M9q+I6q+X2q+y4q+X3J+i2J+L0J+y4J+z9q+H9J+t1q+r6J+y9q+t1J+D7M+I6q+x3J+j5J+d2J+v6J+B1q+l4J+r6J+x3J+G9q+j6q+I6q+M9q+M2q+F2q+a2q+r1J+j9J+t1q+y7J+R5J+x3J+p3J+t1q+d6q+y9q+a2q+l9q+x3J+x3J+I6q+x3J+j5J+d2J+v6J+M2q+v2q+v6J+j5J+z8J+U4q+C3J+t1q+F3J+w6q+x3J+M3J+l9q+t1q+E3J+x3J+p3J+t1q+E8J+x3J+M3J+T7M+d6q+M2q+M9q+I6q+P1q+J4q+j6q+Y0J+S6J+t1q+m8J+k5J+y9q+o5J+x3J+R5J+x3J+p3J+t1q+H4J+x3J+M3J+l9q+t1q+X4J+X3J+M2q+k4J+j5J+v6J+y9q+a2q+R2q+d6q+j5J+X2q+d6q+M9q+Z9J+j6q+j5J+j6q+n1J+x3J+F7J+Q9q+x3J+F7J+E3J+x3J+F7J+E3J+M9q+x1J+X4J),"crossX":(n1J+M9q+M2q+V3J+d6q+y9q+a2q+f7J+I6q+x3J+Z0J+O1q+w6J+X2q+D7M+U4q+l9q+j8M+d6q+x3J+j5J+d2J+a1q+l0J+D7M+U4q+l9q+j8M+G8M+r6J+x3J+j5J+q4J+j6q+I6q+M9q+M2q+x3J+M3J+i2J+l8J+t1q+X2q+O2J+z4q+M9q+x1J+X4J),"crossY":(n1J+M9q+M2q+V3J+d6q+y9q+a2q+f7J+I6q+x3J+Z0J+O1q+y9q+X3J+q8M+F2J+j8M+d6q+x3J+j5J+d2J+O1q+y9q+l0J+x3J+x3J+s4J+X3J+a8M+r6J+x3J+V0J+a2q+j6q+I6q+M9q+M2q+x3J+M3J+t1J+D2J+l8J+t1q+X2q+O2J+z4q+M9q+x1J+X4J),"chartControls":(n1J+M9q+x1J+d6q+y9q+a2q+f7J+I6q+x3J+j5J+d2J+b3J+l9q+X3J+j5J+a1q+X2q+t1q+j5J+X3J+X2q+a2q+x3J+r6J+x3J+G9q+j6q+I6q+M9q+h8J+l9q+D2J+l8J+t1q+X2q+t1q+j6q+K9q+B1q+X2q+x9q+P1q+l8J+n8M+n4q+v9q+M9q+M2q+V3J+d6q+M2q+M9q+I6q+y9q+p2q+X3J+j5J+i0J+t9q+R5J+x3J+M3J+l9q+t1q+d6q+M2q+M9q+I6q+J2J+A9J+r6J+y9q+d3J+x3J+I6q+x3J+Z0J+v6J+J2J+H1J+P1q+v6J+X2q+k5J+j5J+z7J+x3J+M3J+T7M+j0J+x3J+p3J+t1q+d6q+M2q+M9q+I6q+J2J+X2q+X2q+P1q+P5J+t1q+r6J+y9q+a2q+f7J+I6q+x3J+Z0J+v6J+J2J+X2q+w2J+v6J+M2q+t1q+z7J+x3J+M3J+l9q+t1q+E3J+M9q+M2q+V3J+E3J+M9q+x1J+X4J),"home":(n1J+M9q+x1J+d6q+M2q+M9q+I6q+U4q+w2J+j6q+r6J+y9q+a2q+l9q+D7M+I6q+x3J+L5J+k8M+M3J+m3J+l9q+D2J+d6q+U4q+X2q+m1J+r6J+x3J+j5J+D2J+a2q+j6q+I6q+M9q+M2q+x3J+M3J+a2q+l9q+D2J+j9J+t1q+G1J+j6q+R5J+x3J+p3J+t1q+E3J+x3J+M3J+l9q+t1q+E3J+M9q+M2q+V3J+X4J),"floatDate":(n1J+M9q+x1J+d6q+y9q+t1J+x3J+x3J+I6q+x3J+Z0J+v6J+q6q+V1q+l9q+j5J+v6J+M9q+l9q+E2J+r6J+x3J+V0J+a2q+j6q+I6q+M9q+M2q+k8J+l8J+t1q+X2q+t1q+j6q+z4q+M9q+x1J+X4J),"handleTemplate":(n1J+M9q+M2q+V3J+d6q+y9q+a2q+f7J+I6q+x3J+j5J+d2J+v6J+M2q+v2q+v6J+U4q+x9J+j6q+r6J+x3J+j5J+q4J+j6q+I6q+M9q+M2q+x3J+v6q+l8J+t1q+G1J+j6q+v9q+x3J+M3J+l9q+t1q+E3J+x3J+M3J+T7M+E3J+M9q+x1J+a9J),"iconsTemplate":(n1J+M9q+x1J+d6q+y9q+t1J+D7M+I6q+x3J+Z0J+v6J+M3J+b5J+v6J+y9q+X2q+t1q+j5J+X3J+u9J+R5J+M9q+x1J+d6q+y9q+t1J+D7M+I6q+x3J+Z0J+v6J+M3J+l9q+t1q+Z9J+v6J+j5J+V7M+j6q+z7J+M9q+x1J+j0J+M9q+M2q+V3J+d6q+y9q+t1J+D7M+I6q+x3J+j5J+d2J+v6J+B1q+j5J+t1q+v6J+M3J+K9J+a2q+R5J+x3J+p3J+t1q+d6q+y9q+a2q+l9q+x3J+x3J+I6q+x3J+j5J+d2J+v6J+M2q+v2q+v6J+k5J+M3J+z7J+x3J+M3J+l9q+t1q+E3J+M9q+M2q+V3J+j0J+M9q+x1J+d6q+y9q+d3J+x3J+I6q+x3J+Z0J+v6J+B1q+l4J+v6J+M3J+T7M+j6q+a2q+R5J+x3J+F7J+d6q+y9q+a2q+l9q+D7M+I6q+x3J+j5J+d2J+v6J+M2q+v2q+v6J+q6q+X2q+y9q+L4q+z7J+x3J+M3J+l9q+t1q+E3J+M9q+x1J+j0J+M9q+M2q+V3J+d6q+y9q+k2J+I6q+x3J+j5J+d2J+v6J+B1q+j5J+t1q+v6J+M3J+l9q+O1J+R5J+x3J+p3J+t1q+d6q+y9q+d3J+x3J+I6q+x3J+Z0J+v6J+M2q+v2q+v6J+M9q+X2q+b6J+z7J+x3J+M3J+l9q+t1q+E3J+M9q+M2q+V3J+j0J+M9q+x1J+d6q+y9q+a2q+l9q+D7M+I6q+x3J+Z0J+v6J+B1q+l4J+v6J+M3J+l9q+O1J+R5J+x3J+M3J+l9q+t1q+d6q+y9q+a2q+l9q+D7M+I6q+x3J+Z0J+v6J+M2q+v2q+v6J+j6q+y2J+j5J+z7J+x3J+M3J+T7M+E3J+M9q+x1J+j0J+M9q+M2q+V3J+d6q+y9q+a2q+I6J+x3J+I6q+x3J+j5J+d2J+v6J+B1q+j5J+t1q+v6J+M3J+T7M+j6q+a2q+R5J+x3J+F7J+d6q+y9q+t1J+x3J+x3J+I6q+x3J+j5J+d2J+v6J+M2q+y9q+X2q+v6J+y9q+a2q+P8J+z7J+x3J+F7J+E3J+M9q+M2q+V3J+E3J+M9q+x1J+X4J),"baselineHandle":(n1J+M9q+x1J+d6q+y9q+a2q+l9q+D7M+I6q+x3J+j5J+d2J+v6J+B1q+l9q+x3J+J2q+O2J+v6J+U4q+F9J+a2q+j6q+d6q+q6q+l9q+r6J+x3J+j5J+q4J+j6q+I6q+M9q+M2q+F2q+i2J+l8J+t1q+G1J+j6q+z4q+M9q+M2q+V3J+X4J),}
;STXChart.prototype.registerHTMLElements=function(){var i5J="#zoomOut",W1q="DIV",o2q="chartControls",c=this.chart.container;for(var control in STXChart.htmlControls){if(typeof this.chart[control]==A8M&&typeof this.controls[control]==A8M){if(!this.allowZoom&&D6s.D(control,o2q))continue;var el=$$$(T7J+control,c);if(el){this.chart[control]=el;this.controls[control]=el;}
else{var rawHTML=STXChart.htmlControls[control],div=document.createElement(W1q);div.innerHTML=rawHTML;el=div.firstChild;c.appendChild(el);this.chart[control]=el;this.controls[control]=el;el.id=control;}
}
}
if(this.controls.chartControls){var zoomIn=$$$(U8J,this.controls.chartControls),zoomOut=$$$(i5J,this.controls.chartControls);STX.safeClickTouch(zoomIn,(function(self){return function(e){self.zoomIn();e.stopPropagation();}
;}
)(this));STX.safeClickTouch(zoomOut,(function(self){return function(e){self.zoomOut();e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){zoomIn.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomIn.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);zoomOut.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);zoomOut.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
if(this.controls.home){STX.safeClickTouch(this.controls.home,(function(self){return function(e){self.home();e.stopPropagation();}
;}
)(this));if(!STX.touchDevice){this.controls.home.onmouseover=(function(self){return function(e){self.modalBegin();}
;}
)(this);this.controls.home.onmouseout=(function(self){return function(e){self.modalEnd();}
;}
)(this);}
}
}
;z(/-([a-z])/g);STX.makeCamelCase=function(name){return name.replace(STX.camelCaseRegExp,function(g){return g[D6s.U8M].toUpperCase();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var O9q="backgroundAttachment",rc={}
,nativeCamelSupport=c1q;function capitalize(g){return g[D6s.U8M].toUpperCase();}
for(var i in styleObject){var v=styleObject[i];if(D6s.s6(i,O9q))nativeCamelSupport=J8J;if(nativeCamelSupport){if(v&&D6s.w6(v.constructor,String)&&isNaN(i)){rc[i]=v;}
}
else if(!isNaN(i)){var x=styleObject.getPropertyValue(v);if(x){v=v.split(a0J);var ii=D6s.J8M;jj=v.length;var vcc=v[D6s.J8M];while(++ii<jj){vcc+=v[ii].charAt(D6s.J8M).toUpperCase()+v[ii].slice(D6s.U8M);}
rc[vcc]=x;}
}
else{var icc=i.replace(STX.camelCaseRegExp,capitalize);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var s=this.styles[className];if(!s){var div=document.createElement(e6J);div.className=className;document.body.appendChild(div);var styles=getComputedStyle(div);s=this.styles[className]=this.cloneStyle(styles);document.body.removeChild(div);if(!styles){this.styles[className]=u8J;}
}
return s;}
;STXChart.prototype.colorOrStyle=function(str){var Z1q="rgb(",E0J="rgba(";if(str.indexOf(T7J)!=-D6s.U8M)return str;if(str.indexOf(E0J)!=-D6s.U8M)return str;if(str.indexOf(Z1q)!=-D6s.U8M)return str;if(D6s.u6(str,S5J))return str;return this.canvasStyle(str);}
;STXChart.prototype.clearStyles=function(){this.styles={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){if(!this.styles[obj]){this.canvasStyle(obj);}
if(!this.styles[obj])this.styles[obj]={}
;this.styles[obj][STX.makeCamelCase(attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var y9J="bad css style for class ";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var result=style.fontStyle+w4J+style.fontWeight+w4J+style.fontSize+w4J+style.fontFamily;if(result.indexOf(A8M)==-D6s.U8M){ctx.font=result;}
else{this.styles[className]=u8J;console.log(y9J+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var color=style.color;if(STX.isTransparent(color))color=this.defaultColor;ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style.opacity;if(typeof opacity!=A8M)ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var p6J="12",s=this.canvasStyle(className),fs=s.fontSize;if(!fs)fs=p6J;return parseInt(STX.stripPX(fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this.canvasStyle(className);return s.color;}
;STXChart.hideDates=function(){return c1q;}
;STXChart.prototype.runPrepend=function(o,args,self){var prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;D6s.Q6(i,prepends.length);i++){var rv=prepends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;D6s.L6(i,appends.length);i++){var rv=appends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.registerDrawingTool=function(name,func){STXChart.drawingTools[name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(!context)context=this.chart.context;if(typeof (height)=="undefined"){return ;}
this.canvasColor(className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){if(this.currentlyImporting)return ;if(this.changeCallback)this.changeCallback(this,change);}
;STXChart.prototype.setChartType=function(chartType){this.layout.chartType=chartType;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.setAggregationType=function(aggregationType){this.layout.aggregationType=aggregationType;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setChartScale=function(chartScale){if(!chartScale)chartScale="linear";this.layout.chartScale=chartScale;if(this.chart.canvas)this.draw();this.changeOccurred((Z2q+d2q+e4J+s0J));}
;STXChart.prototype.setAdjusted=function(data){this.layout.adj=data;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setVolumeUnderlay=function(data){this.layout.volumeUnderlay=data;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.serializeDrawings=function(){var arr=[];for(var i=0;D6s.W6(i,this.drawingObjects.length);i++){arr.push(this.drawingObjects[i].serialize());}
return arr;}
;STXChart.prototype.abortDrawings=function(){for(var i=0;D6s.I6(i,this.drawingObjects.length);i++){this.drawingObjects[i].abort(true);}
this.drawingObjects=[];}
;STXChart.prototype.reconstructDrawings=function(arr){for(var i=0;D6s.v6(i,arr.length);i++){var rep=arr[i],Factory=STXChart.drawingTools[rep.name];if(!Factory){if(STX.Drawing[rep.name]){Factory=STX.Drawing[rep.name];STXChart.registerDrawingTool(rep.name,Factory);}
}
if(Factory){var drawing=new Factory();drawing.reconstruct(this,rep);this.drawingObjects.push(drawing);}
}
}
;STXChart.prototype.clearDrawings=function(){this.undoStamp();this.abortDrawings();this.changeOccurred(C9J);this.createDataSet();this.draw();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX.Drawing()[type];drawing.reconstruct(this,parameters);this.drawingObjects.push(drawing);this.draw();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){for(var i=0;D6s.A6(i,this.drawingObjects.length);i++){if(D6s.E6(this.drawingObjects[i],drawing)){this.drawingObjects.splice(i,1);this.changeOccurred("vector");this.draw();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,native){var e5J="ek",n2q="we";if(!chart)chart=this.chart;var interval=this.layout.interval,periodicity=this.layout.periodicity,l=chart.dataSet.length,dt,i;if(D6s.P6(tick,l)&&D6s.f6(tick,0))return native?new Date(chart.dataSet[tick].DT.getTime()):chart.dataSet[tick].Date;if(D6s.g6(tick,0)){dt=chart.dataSet[0].DT;for(i=0;D6s.Z6(i,3000);i++){if(-i==tick)return native?new Date(dt.getTime()):STX.yyyymmddhhmm(dt);if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(D6s.N6(interval,"day"))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(D6s.t6(interval,(n2q+e5J)))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(D6s.T6(interval,"month"))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);}
}
else{dt=chart.dataSet[D6s.V6(l,1)].DT;for(i=0;D6s.K9(i,3000);i++){if(D6s.r9(l-1+i,tick)){return native?new Date(dt.getTime()):STX.yyyymmddhhmm(dt);}
if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(D6s.z9(interval,(g9J)))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(D6s.J9(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(D6s.y9(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
}
return native?new Date(dt.getTime()):STX.yyyymmddhhmm(dt);}
;STXChart.prototype.futureTick=function(mydt,chart){var mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[D6s.h9(chart.dataSet.length,1)].DT,m=dt.getTime(),ticks=0,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(D6s.x9(interval,"minute"))computedPeriodicity=D6s.Y9(periodicity,interval);if(D6s.a9(interval,"tick"))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=0;D6s.o9(i,1500);i++){if(!this.isDailyInterval(interval)){if(D6s.H9(dt.getHours(),chart.beginHour)&&D6s.d9(dt.getMinutes(),chart.beginMinute)&&D6s.c9(interval,"tick")){if(D6s.l9((mym-m)/60000,chart.minutesInSession)){dt=STX.LegacyMarket.nextDay(dt,1,this);if(D6s.R9(chart.beginHour,0)&&D6s.p9(dt.getDay(),0)){dt.setHours(15);dt.setMinutes(0);}
if(D6s.b9(chart.beginHour,0)&&D6s.X1(dt.getDay(),1)){ticks+=Math.round(D6s.n1(9,60,computedPeriodicity));}
else{ticks+=Math.round(D6s.z1(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{ticks+=1;if(D6s.J1(interval,"day"))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(D6s.W1(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(D6s.I1(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
m=dt.getTime();if(D6s.i1(m,mym)){return (D6s.j1(chart.dataSet.length,1))+ticks;}
if(D6s.C1(mym,m)){return (D6s.M1(chart.dataSet.length,1))+ticks-1;}
}
return (D6s.e1(chart.dataSet.length,1))+ticks;}
;STXChart.prototype.pastTick=function(mydt,chart){var y0J=((0x232,68)<(125.,142)?(1.114E3,210):(65,5.600E2)),mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[D6s.J8M].DT,m=dt.getTime(),ticks=D6s.J8M,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(D6s.Z1(interval,C8J))computedPeriodicity=D6s.N1(periodicity,interval);if(D6s.D1(interval,E9J))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=D6s.J8M;D6s.b1(i,X8J);i++){if(!this.isDailyInterval(interval)){if(D6s.X2(dt.getHours(),chart.beginHour)&&D6s.u2(dt.getMinutes(),chart.beginMinute)&&D6s.Q2(interval,E9J)){var dt2=STX.LegacyMarket.prevDay(dt,D6s.U8M,this);if(D6s.L2((dt2.getTime()-mym)/i8J,chart.minutesInSession)){dt=dt2;if(D6s.O2(chart.beginHour,D6s.J8M)){if(D6s.F2(dt.getDay(),D6s.J8M)){ticks+=Math.round(D6s.Y2(F8M,I1q,computedPeriodicity));}
else{ticks+=Math.round(D6s.E2(chart.minutesInSession,computedPeriodicity));}
}
else if(D6s.P2(chart.beginHour,F8M)&&STX.LegacyMarket.isHalfDay(dt,chart.symbol)){ticks+=Math.round(D6s.f2(y0J,computedPeriodicity));}
else{ticks+=Math.round(D6s.k2(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,u8J,this.dataZone);ticks+=D6s.U8M;}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,u8J,this.dataZone);ticks+=D6s.U8M;}
}
else{ticks+=D6s.U8M;}
if(D6s.l2(interval,g9J))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(D6s.R2(interval,i3J))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(D6s.p2(interval,H8M))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);m=dt.getTime();if(D6s.V2(m,mym)){return -ticks;}
if(D6s.K4(mym,m)){return -(ticks+D6s.U8M);}
}
return -ticks;}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){yAxis.zoom=yAxis.initialMarginTop+yAxis.initialMarginBottom;yAxis.scroll=D6s.r4((yAxis.initialMarginTop-yAxis.initialMarginBottom),D6s.B8M);}
;STXChart.prototype.home=function(params){if(typeof params!="object"){params={maintainWhitespace:params}
;}
this.cancelTouchSingleClick=true;if(!this.chart.dataSet||!this.chart.dataSet.length){this.draw();return ;}
var barsDisplayedOnScreen=Math.floor(D6s.z4(this.chart.width,this.layout.candleWidth));for(var chartName in this.charts){var chart=this.charts[chartName];chart.scroll=Math.min(barsDisplayedOnScreen+1,chart.dataSet.length);if(this.chart.allowScrollPast)chart.scroll=barsDisplayedOnScreen+1;var wsInTicks;if(params.maintainWhitespace){wsInTicks=Math.round(D6s.J4(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
else if(D6s.y4(this.yaxisLabelStyle,"roundRectArrow")){var margin=3,height=this.getCanvasFontSize("stx_yaxis")+D6s.h4(margin,2),leftMargin=D6s.x4(height,2);wsInTicks=Math.round(D6s.Y4(leftMargin,this.layout.candleWidth));if(D6s.a4(wsInTicks,1))chart.scroll-=wsInTicks;}
this.calculateYAxisMargins(chart.panel.yAxis);}
this.draw();}
;STXChart.prototype.tickFromDate=function(dt,chart,adj){if(!chart)chart=this.chart;if(!chart.dataSet.length)return 0;var DT=STX.strToDateTime(dt);if(!adj)adj=0;if(!STXChart.isDailyInterval(this.layout.interval))DT.setMinutes(DT.getMinutes()+adj);if(D6s.o4(chart.beginHour,0)&&!STXChart.isDailyInterval(this.layout.interval)){if(D6s.H4(DT.getHours(),0)){DT.setHours(chart.beginHour);DT.setMinutes(chart.beginMinute);}
}
var mym=DT.getTime(),m=chart.dataSet[D6s.d4(chart.dataSet.length,1)].DT.getTime();if(D6s.c4(m,mym))return this.futureTick(dt,chart);var first=chart.dataSet[0].DT.getTime();if(D6s.l4(mym,first))return this.pastTick(dt,chart);for(var i=D6s.R4(chart.dataSet.length,1);D6s.p4(i,0);i--){m=chart.dataSet[i].DT.getTime();if(D6s.b4(m,mym))return i;}
}
;STXChart.prototype.timeShiftDate=function(dt){var ms=dt.getTime();ms+=D6s.X3(this.timeZoneOffset,i8J);return new Date(ms);}
;STXChart.XAxisLabel=function(hz,grid,text){this.hz=hz;this.grid=grid;this.text=text;}
;STXChart.prototype.createXAxis=function(chart){var t2J="ly",j6J="nth",f0J="ntb",V9q="tic";if(D6s.n3(chart.dataSegment.length,0))return null;var arguments$=[chart],axisRepresentation=this.runPrepend("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this.layout.interval;if(D6s.B3(interval,(V9q+Q8J))||D6s.U3(chart.xAxis.axisType,(f0J))||this.hasNTBAxis[this.layout.aggregationType]){return this.createTickXAxisWithDates(chart);}
if(D6s.S3(chart.xAxis.axisType,"numeric")){return this.createNumericXAxis(chart);}
var displayLetters=false,periodicity=this.layout.periodicity,candleWidth=this.layout.candleWidth,p=periodicity,isIntraday=false,isDaily=false,isWeekly=false,isMonthly=false;if(D6s.O3(interval,"week")){isWeekly=true;p=D6s.F3(5,p);}
if(D6s.i3(interval,"month")){isMonthly=true;p=D6s.j3(20,p);}
if(D6s.C3(candleWidth*(20/p),50))displayLetters=true;var i=0;chart.xaxis=[];for(;D6s.M3(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dt;if(chart.dataSegment[i]){dt=chart.dataSegment[i].DT;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
var currentDate=dt.getDate(),is24=(D6s.e3(chart.minutesInSession,1440));if(is24){if(chart.dataSegment[i]&&chart.dataSegment[i].displayDate){currentDate=chart.dataSegment[i].displayDate.getDate();}
else{currentDate=this.timeShiftDate(dt).getDate();}
}
var prevMonth=dt.getMonth(),prevYear=dt.getFullYear(),ticksPerDay=1;if(!this.isDailyInterval(interval)){isIntraday=true;if(D6s.k3(interval,"minute"))interval=1;ticksPerDay=Math.ceil(D6s.q3(chart.minutesInSession,periodicity,interval));}
else{isDaily=true;}
var ticksPerClick=Math.round(D6s.R3(ticksPerDay,Math.ceil(ticksPerDay/Math.floor(100/candleWidth))));if(D6s.p3(ticksPerClick,1))ticksPerClick=1;var minuteBoundary=D6s.b3(ticksPerClick,periodicity,interval);if(chart.prettyXaxis){var mod=chart.prettyXaxis[D6s.K5(periodicity,interval)];if(!mod)mod=1;if(D6s.r5(minuteBoundary,mod)){minuteBoundary=D6s.z5(Math.floor((minuteBoundary+mod)/mod),mod);}
}
var offset=Math.round(D6s.J5(Math.round(candleWidth*this.candleWidthPercent)/2,1));axisRepresentation=[];var standardBeginDay=D6s.y5(chart.beginHour,60)+chart.beginMinute,prices;for(i;D6s.h5(i,chart.maxTicks);i++){var hz,text;if(!isMonthly&&D6s.x5(chart.maxTicks/ticksPerDay,(this.chart.width/this.chart.xaxisFactor))){if(D6s.Y5(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(!prices)continue;dt=prices.DT;if(chart.xAxis.useDataDate){dtShifted=dt;}
else if(prices.displayDate){dtShifted=prices.displayDate;}
else if(isIntraday){dtShifted=this.timeShiftDate(dt);}
else{dtShifted=dt;}
}
else{if(!chart.xAxis.futureTicks)break;if(isIntraday)dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(isWeekly)dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(isMonthly)dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);else if(isDaily)dt=STX.LegacyMarket.nextDay(dt,periodicity,this);if(chart.xAxis.useDataDate)dtShifted=dt;else if(isIntraday)dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var isNextDate=D6s.a5(dt.getDate(),currentDate);if(is24)isNextDate=D6s.o5(dtShifted.getDate(),currentDate);var nonBoundary=D6s.H5(dt.getHours(),chart.beginHour)||D6s.d5(dt.getMinutes(),chart.beginMinute);if(is24)nonBoundary=D6s.c5(dtShifted.getHours(),0)||D6s.l5(dtShifted.getMinutes(),0);if(isNextDate){var gridType="boundary";if(!isIntraday)gridType="line";currentDate=dt.getDate();if(is24)currentDate=dtShifted.getDate();hz=chart.left+(D6s.R5(i,candleWidth))+offset;if(D6s.p5(gridType,"boundary"))hz=chart.left+(D6s.b5((i),candleWidth))-3;text="";if(!STXChart.hideDates()){var y=dt.getFullYear();if(D6s.X0(y,prevYear)){prevYear=y;text=y;gridType="boundary";}
else{if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,gridType);}
else if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
if(D6s.n0(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,gridType,text));}
}
else if(nonBoundary){var minutes=D6s.B0(dt.getHours(),60)+dt.getMinutes();if(D6s.U0(this.chart.beginHour,0)||D6s.S0(dt.getDay(),0))minutes=D6s.h0(minutes,standardBeginDay);else minutes=D6s.v0(minutes,(15*60));if(is24)minutes=D6s.A0(dtShifted.getHours(),60)+dtShifted.getMinutes();if(D6s.E0(minutes%minuteBoundary,0)){hz=chart.left+(D6s.P0(i,candleWidth))+offset;text="";if(!STXChart.hideDates()){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"line");}
else{text=STX.timeAsDisplay(dtShifted,this);}
}
if(D6s.f0(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
}
else{if(D6s.g0(i,chart.dataSegment.length)){prices=chart.dataSegment[i];dt=prices.DT;}
else{if(!chart.xAxis.futureTicks)break;if(isIntraday)dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(isWeekly)dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(isMonthly)dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);else if(isDaily)dt=STX.LegacyMarket.nextDay(dt,periodicity,this);}
dtShifted=dt;var m=dt.getMonth(),y1=dt.getFullYear();if(D6s.Z0(y1,prevYear)){prevYear=y1;prevMonth=m;hz=chart.left+(D6s.N0(i,candleWidth))-2;text="";if(!STXChart.hideDates())text=y1;axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
else if(D6s.D0(m,prevMonth)){var doIt=(Z7J+Y7J+j6J+t2J);if(isWeekly&&D6s.m0(chart.maxTicks*periodicity,(52*1)))doIt="quarterly";else if(isMonthly&&D6s.s7(chart.maxTicks*periodicity,(12*1)))doIt="quarterly";else if(isDaily&&D6s.w7(chart.maxTicks*periodicity,(365*1)))doIt="quarterly";if(isWeekly&&D6s.u7(chart.maxTicks*periodicity,(52*2)))doIt="none";else if(isMonthly&&D6s.Q7(chart.maxTicks*periodicity,(12*2)))doIt="none";else if(isDaily&&D6s.L7(chart.maxTicks*periodicity,(365*2)))doIt="none";if(D6s.W7(doIt,"monthly")||(D6s.I7(doIt,"quarterly")&&(D6s.v7(m,0)||D6s.A7(m,3)||D6s.E7(m,6)||D6s.P7(m,9)))){prevMonth=m;hz=chart.left+(D6s.f7(i,candleWidth))-2;text="";if(!STXChart.hideDates())text=STX.monthAsDisplay(m,displayLetters,this);axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmm(dtShifted)}
;if(D6s.g7(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);}
this.runAppend("createXAxis",arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var v8J="ary",p5J="wXAx",arguments$=[chart,axisRepresentation];if(this.runPrepend((z1q+p5J+c8J+M0J),arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this.chart.context;this.canvasFont("stx_xaxis");context.textAlign="center";context.textBaseline="middle";var obj;for(var j=0;D6s.Z7(j,axisRepresentation.length);j++){obj=axisRepresentation[j];var w=context.measureText(obj.text).width,w2=Math.max(w,chart.xAxis.minimumLabelWidth);obj.hz=Math.floor(obj.hz+this.micropixels)+0.5;obj.left=D6s.N7(obj.hz,(w2/2));obj.right=obj.hz+(D6s.t7(w2,2));obj.unpaddedRight=obj.hz+(D6s.T7(w,2));}
var plotter=new STX.Plotter();plotter.newSeries("line","stroke",this.canvasStyle("stx_grid"));plotter.newSeries("boundary","stroke",this.canvasStyle("stx_grid_dark"));plotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var bottom=chart.panel.bottom,yAxis=chart.panel.yAxis,prevRight=-1,nextBoundaryLeft=Math.MAX_VALUE,drawBorders=chart.xAxis.displayBorder||D6s.V7(chart.xAxis.displayBorder,null);if(D6s.K8(this.axisBorders,true))drawBorders=true;if(D6s.r8(this.axisBorders,false))drawBorders=false;var b=drawBorders?D6s.z8(yAxis.bottom,0.5):yAxis.bottom,middle=D6s.J8(bottom,this.xaxisHeight/2);if(drawBorders)middle+=3;for(var nb=0;D6s.y8(nb,axisRepresentation.length);nb++){if(D6s.h8(axisRepresentation[nb].grid,(U2J+Y7J+I1J+P2J+v8J))){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
var prevHz=0,count=0;for(var i=0;D6s.x8(i,axisRepresentation.length);i++){obj=axisRepresentation[i];if(D6s.Y8(i,nb)){for(nb++;D6s.a8(nb,axisRepresentation.length);nb++){if(D6s.o8(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
if(D6s.H8(nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math.MAX_VALUE;}
if(prevRight>-1){if(D6s.d8(obj.left,prevRight))continue;}
}
else{if(prevRight>-1){if(D6s.c8(obj.left,prevRight))continue;}
if(D6s.l8(obj.right,nextBoundaryLeft))continue;}
prevRight=obj.right;if((D6s.R8(Math.floor(obj.unpaddedRight),this.chart.right))){count++;if(chart.xAxis.displayGridLines){plotter.moveTo(obj.grid,obj.hz,yAxis.top);plotter.lineTo(obj.grid,obj.hz,b);}
if(drawBorders){plotter.moveTo("border",obj.hz,b+0.5);plotter.lineTo("border",obj.hz,b+6);}
prevHz=obj.hz;this.canvasColor(D6s.p8(obj.grid,"boundary")?"stx_xaxis_dark":"stx_xaxis");context.fillText(obj.text,obj.hz,middle);}
}
if(drawBorders){var bb=Math.round(yAxis.bottom)+0.5,wb=Math.round(chart.right)+0.5;plotter.moveTo("border",chart.left,bb);plotter.lineTo("border",wb,bb);}
plotter.draw(context);context.textAlign="left";this.runAppend("drawXAxis",arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){axisRepresentation=[];chart.xaxis=[];for(var i=0;D6s.b8(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
for(var j=i;D6s.X6I(j,chart.maxTicks);j++){if(!chart.dataSegment[i])break;}
var filledScreenRatio=D6s.n6I((j-i),chart.maxTicks),idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Math.round(D6s.B6I((this.chart.width*filledScreenRatio),idealTickSizePixels)),minMax=this.determineMinMax(chart.dataSegment,["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=D6s.U6I(maxPoint,minPoint);function niceNum(range,round){var exponent,fraction,niceFraction;exponent=Math.floor(Math.log10(range));fraction=D6s.S6I(range,Math.pow(10,exponent));if(round){if(D6s.O6I(fraction,1.5))niceFraction=1;else if(D6s.F6I(fraction,3))niceFraction=2;else if(D6s.i6I(fraction,7))niceFraction=5;else niceFraction=10;}
else{if(D6s.j6I(fraction,1))niceFraction=1;else if(D6s.C6I(fraction,2))niceFraction=2;else if(D6s.M6I(fraction,5))niceFraction=5;else niceFraction=10;}
return D6s.e6I(niceFraction,Math.pow(10,exponent));}
var niceRange=niceNum(D6s.k6I(maxPoint,minPoint),false),tickSpacing=niceNum(D6s.q6I(range,(idealTicks-1)),true),niceMin=D6s.G6I(Math.floor(minPoint/tickSpacing),tickSpacing),niceMax=D6s.D6I(Math.ceil(maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(D6s.m6I(niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;D6s.s9I(i,chart.maxTicks);i++){var prices=chart.dataSegment[i];if(prices){var obj={index:prices.index,data:prices}
;chart.xaxis.push(obj);if(D6s.w9I(prices.index,nextLabel))continue;if(D6s.u9I(prices.index,nextLabel)){hz=chart.left+(D6s.Q9I(i,this.layout.candleWidth))+this.offset+this.micropixels;}
else if(D6s.L9I(prices.index,nextLabel)){hz=chart.left+(D6s.W9I(i,this.layout.candleWidth))-3+this.micropixels;}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",nextLabel));nextLabel+=tickSpacing;}
else{chart.xaxis.push(null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var c3J="[",A6J="me",x4q="taSe",Q7J="hart",w8J="rd",D6q="ndin",p7M="sc",j2J="rro",J4J="sse",n5J="ta",T8J="terDa",a3J="ch",d7J="nu",a4J="dM",j8J="ha",W6q="Hour",p6q="tefe",r0J="le",V6J="P",C1J="ute",k7J=" & ",e3J="dH",b2J="fied",W4J="ci",P0J="pe",V5J="he",N0J="ter",O5J="ime",F1q="A",p4J="rror",E4J="ion",Y2J="Assert";if(!chart)chart=this.chart;if(!this.timeIntervalMap){this.timePossibilities=[STX.MILLISECOND,STX.SECOND,STX.MINUTE,STX.HOUR,STX.DAY,STX.MONTH,STX.YEAR];this.timeIntervalMap={}
;this.timeIntervalMap[STX.MILLISECOND]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this.timeIntervalMap[STX.SECOND]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.MINUTE]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.HOUR]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this.timeIntervalMap[STX.DAY]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this.timeIntervalMap[STX.MONTH]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this.timeIntervalMap[STX.YEAR]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this.timeIntervalMap[STX.DECADE]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=D6s.I9I(this.chart.width,idealTickSizePixels);for(var x=0;D6s.v9I(x,chart.dataSegment.length);x++)if(chart.dataSegment[x])break;if(D6s.A9I(x,chart.dataSegment.length))return [];var i,timeRange=D6s.E9I(chart.dataSegment[chart.dataSegment.length-1].DT.getTime(),chart.dataSegment[x].DT.getTime());if(D6s.P9I(timeRange,14*STX.DAY)&&!STXChart.isDailyInterval(this.layout.interval)){var nextClose=null,nextCloseEpoch=0,prevEpoch=0;timeRange=0;for(i=0;D6s.f9I(i,chart.dataSegment.length);i++){var q=chart.dataSegment[i];if(!q)continue;var epoch=q.DT.getTime();if(D6s.g9I(epoch,nextCloseEpoch)){nextClose=new Date(q.DT);nextClose.setHours(chart.endHour);nextClose.setMinutes(chart.endMinute);nextCloseEpoch=nextClose.getTime();if(D6s.Z9I(nextCloseEpoch,epoch)){console.log((Y2J+E4J+w4J+l2J+p4J+J1q+F1q+w4J+U2J+x2J+F0J+w4J+a8J+x2J+M0J+w4J+x2J+w4J+s0J+O5J+w4J+Q6q+L8J+x2J+N0J+w4J+s0J+f2q+w4J+s0J+V5J+w4J+M0J+P0J+W4J+b2J+w4J+l2J+W7J+e3J+Y7J+i9J+k7J+l2J+W7J+P2J+Q6J+c8J+W7J+C1J+w4J+X6q+f2J+w4J)+this.chart.symbol+(m6q+V6J+r0J+x2J+H6J+w4J+N2J+a8J+l2J+Z4J+w4J+d2q+Y7J+w0J+w4J+K7J+w0J+Y7J+p6q+y3J+w4J+Y7J+F0J+w4J+M0J+l2J+s0J+w4J+N2J+a8J+x2J+C1q+l5J+l2J+W7J+P2J+W6q+k7J+N2J+j8J+F0J+s0J+l5J+l2J+W7J+a4J+c8J+d7J+s0J+l2J+w4J+s0J+Y7J+w4J+Z7J+x2J+s0J+a3J+w4J+d2q+e4J+F0J+w4J+Z7J+x2J+M0J+T8J+n5J));nextCloseEpoch=epoch;}
}
else{timeRange+=D6s.N9I(epoch,prevEpoch);if(D6s.t9I(epoch-prevEpoch,0)){console.log((F1q+J4J+F0J+s0J+c8J+K5J+w4J+l2J+j2J+F0J+J1q+S1J+P6J+l2J+M0J+w4J+W7J+S2J+w4J+c8J+W7J+w4J+x2J+p7M+l2J+D6q+Q6q+w4J+Y7J+w8J+l2J+F0J+m6q+N2J+Q7J+l5J+P2J+x2J+x4q+Q6q+A6J+O8J+c3J)+i+"].DT=="+q.DT);}
}
prevEpoch=epoch;}
}
timeRange=D6s.T9I((timeRange/chart.dataSegment.length),chart.maxTicks);var msPerTick=D6s.V9I(timeRange,idealTicks);for(i=0;D6s.K1I(i,this.timePossibilities.length);i++){if(D6s.r1I(this.timePossibilities[i],msPerTick))break;}
if(D6s.z1I(i,this.timePossibilities.length)){i--;}
else{var prevUnit=this.timePossibilities[D6s.J1I(i,1)],prevMap=this.timeIntervalMap[prevUnit],prevMultiplier=prevMap.arr[D6s.y1I(prevMap.arr.length,1)];if(D6s.h1I(msPerTick-(prevUnit*prevMultiplier),this.timePossibilities[i]-msPerTick))i--;}
var timeUnit=this.timePossibilities[i];if(chart.xAxis.timeUnit)timeUnit=chart.xAxis.timeUnit;var timeInterval=STX.clone(this.timeIntervalMap[timeUnit]);for(i=0;D6s.x1I(i,timeInterval.arr.length);i++){if(D6s.Y1I(timeInterval.arr[i]*timeUnit,msPerTick))break;}
if(D6s.a1I(i,timeInterval.arr.length)){i--;}
else{if(D6s.o1I(msPerTick-timeInterval.arr[i-1]*timeUnit,timeInterval.arr[i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval.arr[i];if(chart.xAxis.timeUnitMultiplier)timeUnitMultiplier=chart.xAxis.timeUnitMultiplier;axisRepresentation=[];chart.xaxis=[];for(i=0;D6s.H1I(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dtShifted=0,nextTimeUnit=timeInterval.minTimeUnit,previousTimeUnitLarge=-1,firstTick=true;for(i;D6s.d1I(i,chart.maxTicks);i++){if(D6s.c1I(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(prices.displayDate&&chart.xAxis.adjustTimeZone&&D6s.l1I(timeUnit,STX.DAY)){dtShifted=prices.displayDate;}
else{dtShifted=prices.DT;}
}
else{var periodicity=this.layout.periodicity,interval=this.layout.interval;if(!chart.xAxis.futureTicks)break;var dt;if(dtShifted){dt=dtShifted;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
if(D6s.R1I(interval,"day")){dt=STX.LegacyMarket.nextDay(dt,periodicity,this);}
else if(D6s.p1I(interval,"week")){dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);}
else if(D6s.b1I(interval,(R1J+W7J+s0J+a8J))){dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);}
if(chart.xAxis.useDataDate)dtShifted=dt;else if(!this.isDailyInterval(interval))dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmm(dtShifted)}
;if(D6s.X2I(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);var currentTimeUnit,currentTimeUnitLarge;if(D6s.n2I(timeUnit,STX.MILLISECOND)){currentTimeUnit=dtShifted.getTime();currentTimeUnitLarge=dtShifted.getSeconds();}
else if(D6s.B2I(timeUnit,STX.SECOND)){currentTimeUnit=dtShifted.getSeconds();currentTimeUnitLarge=dtShifted.getMinutes();}
else if(D6s.U2I(timeUnit,STX.MINUTE)){currentTimeUnit=dtShifted.getMinutes();currentTimeUnitLarge=dtShifted.getHours();}
else if(D6s.S2I(timeUnit,STX.HOUR)){currentTimeUnit=dtShifted.getHours();currentTimeUnitLarge=dtShifted.getDate();}
else if(D6s.O2I(timeUnit,STX.DAY)){currentTimeUnit=dtShifted.getDate();currentTimeUnitLarge=dtShifted.getMonth()+1;}
else if(D6s.F2I(timeUnit,STX.MONTH)){currentTimeUnit=dtShifted.getMonth()+1;currentTimeUnitLarge=dtShifted.getFullYear();}
else if(D6s.i2I(timeUnit,STX.YEAR)){currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=dtShifted.getFullYear()+1000;}
else{currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=0;}
var text=null;if(D6s.j2I(previousTimeUnitLarge,currentTimeUnitLarge)){if(D6s.C2I(currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval.minTimeUnit;}
hz=chart.left+(D6s.M2I(i,this.layout.candleWidth))-3;text=null;if(D6s.e2I(timeUnit,STX.HOUR)||(D6s.k2I(timeUnit,STX.MINUTE)&&D6s.q2I(previousTimeUnitLarge,currentTimeUnitLarge))){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"boundary",STX.DAY,1);}
else{if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
else if(D6s.G2I(timeUnit,STX.DAY)){if(D6s.D2I(previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted.getFullYear();}
else{text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
}
else if(D6s.m2I(timeUnit,STX.MONTH)){text=dtShifted.getFullYear();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(D6s.s4I(currentTimeUnit,nextTimeUnit)){if(D6s.w4I(nextTimeUnit,timeInterval.minTimeUnit)){if(D6s.u4I(currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted),hz=chart.left+(D6s.Q4I(i,this.layout.candleWidth))+this.offset,boundaryTimeUnit=D6s.L4I(Math.floor(currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(D6s.W4I(boundaryTimeUnit,currentTimeUnit)){hz=chart.left+(D6s.I4I(i,this.layout.candleWidth))-3;}
if(D6s.v4I(timeUnit,STX.MILLISECOND)){labelDate.setMilliseconds(boundaryTimeUnit);}
else if(D6s.A4I(timeUnit,STX.SECOND)){labelDate.setMilliseconds(0);labelDate.setSeconds(boundaryTimeUnit);}
else if(D6s.E4I(timeUnit,STX.MINUTE)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(boundaryTimeUnit);}
else if(D6s.P4I(timeUnit,STX.HOUR)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(0);labelDate.setHours(boundaryTimeUnit);}
else if(D6s.f4I(timeUnit,STX.DAY)){labelDate.setDate(boundaryTimeUnit);}
else if(D6s.g4I(timeUnit,STX.MONTH)){labelDate.setDate(1);labelDate.setMonth(D6s.Z4I(boundaryTimeUnit,1));}
else if(D6s.N4I(timeUnit,STX.YEAR)){labelDate.setDate(1);labelDate.setMonth(0);}
else{labelDate.setDate(1);labelDate.setMonth(0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(D6s.t4I(timeUnit,STX.DAY))timeInterval.maxTimeUnit=daysInMonth[labelDate.getMonth()]+1;if(D6s.T4I(nextTimeUnit,timeInterval.maxTimeUnit))nextTimeUnit=timeInterval.minTimeUnit;previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&D6s.V4I(boundaryTimeUnit,currentTimeUnit))continue;if(!text){if(chart.xAxis.formatter){text=chart.xAxis.formatter(labelDate,(Q0J),timeUnit,timeUnitMultiplier);}
else{if(D6s.K3I(timeUnit,STX.DAY)){text=labelDate.getDate();}
else if(D6s.r3I(timeUnit,STX.MONTH)){text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
else if(D6s.z3I(timeUnit,STX.YEAR)||D6s.J3I(timeUnit,STX.DECADE)){text=labelDate.getFullYear();}
else{text=STX.timeAsDisplay(labelDate,this,timeUnit);}
}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
firstTick=false;}
return axisRepresentation;}
;var cached=D6s.J8M,notcached=D6s.J8M;STXChart.prototype.createYAxis=function(panel,parameters){var q9J="ya",m7J="j",M4J="pro";if(this.runPrepend("createYAxis",arguments))return ;var chart=panel.chart,isAChart=(D6s.y3I(panel.name,chart.name));if(!parameters)parameters={}
;parameters.noChange=false;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(STXChart.enableCaching&&D6s.h3I(yAxis.high,panel.cacheHigh)&&D6s.x3I(yAxis.low,panel.cacheLow)){var leftTick=D6s.Y3I(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;panel.cacheLeft=Math.min(panel.cacheLeft,leftTick);panel.cacheRight=Math.max(panel.cacheRight,rightTick);panel.cacheLeft=leftTick;panel.cacheRight=rightTick;parameters.noChange=true;cached++;}
else{panel.cacheLeft=1000000;panel.cacheRight=-1;panel.cacheHigh=yAxis.high;panel.cacheLow=yAxis.low;notcached++;}
var idealX=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels;if(yAxis.goldenRatioYAxis){if(D6s.a3I(yAxis.idealTickSizePixels,idealX/1.618))parameters.noChange=false;}
if(!parameters.noChange){var height=yAxis.height=D6s.o3I(yAxis.bottom,yAxis.top),pricePerPix=D6s.H3I((yAxis.high-yAxis.low),(height-yAxis.zoom));if(parameters.ground){yAxis.high=(D6s.d3I(yAxis.high,yAxis.low))+D6s.c3I(yAxis.zoom,pricePerPix);yAxis.low=0;}
else{yAxis.high=yAxis.high+D6s.l3I((yAxis.zoom/2),pricePerPix)+D6s.R3I(yAxis.scroll,pricePerPix);yAxis.low=D6s.p3I(yAxis.low,(yAxis.zoom/2)*pricePerPix,yAxis.scroll*pricePerPix);}
if(yAxis.min||D6s.V3I(yAxis.min,0))yAxis.low=yAxis.min;if(yAxis.max||D6s.K5I(yAxis.max,0))yAxis.high=yAxis.max;yAxis.shadow=D6s.r5I(yAxis.high,yAxis.low);if(yAxis.semiLog&&(!this.activeDrawing||D6s.z5I(this.activeDrawing.name,(M4J+m7J+l2J+N2J+s0J+c8J+Y7J+W7J)))){yAxis.logHigh=D6s.J5I(Math.log(yAxis.high),Math.LN10);yAxis.logLow=D6s.y5I(Math.log(yAxis.low),Math.LN10);if(D6s.h5I(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=D6s.x5I(yAxis.logHigh,yAxis.logLow);}
var fontHeight;if(yAxis.goldenRatioYAxis&&isAChart){yAxis.idealTickSizePixels=D6s.Y5I(idealX,1.618);if(D6s.a5I(yAxis.idealTickSizePixels,0)){fontHeight=this.getCanvasFontSize((M0J+s0J+H7J+q9J+m2q+c8J+M0J));yAxis.idealTickSizePixels=D6s.o5I(fontHeight,5);}
}
else{if(!yAxis.idealTickSizePixels){fontHeight=this.getCanvasFontSize("stx_yaxis");if(isAChart){yAxis.idealTickSizePixels=D6s.H5I(fontHeight,5);}
else{yAxis.idealTickSizePixels=D6s.d5I(fontHeight,2);}
}
}
var idealTicks=Math.round(D6s.c5I(height,yAxis.idealTickSizePixels)),shadow=parameters.range?D6s.l5I(parameters.range[1],parameters.range[0]):yAxis.shadow;yAxis.priceTick=Math.floor(D6s.R5I(shadow,idealTicks));var n=1;for(var zz=0;D6s.p5I(zz,10);zz++){if(D6s.b5I(yAxis.priceTick,0))break;n*=10;yAxis.priceTick=D6s.X0I(Math.floor(shadow/idealTicks*n),n);}
if(D6s.n0I(zz,10))yAxis.priceTick=0.00000001;yAxis.priceTick=D6s.B0I(Math.round(shadow/idealTicks*n),n);var verticalTicks=Math.round(D6s.U0I(shadow,yAxis.priceTick));if(parameters.range&&D6s.S0I(verticalTicks,shadow)&&!yAxis.noEvenDivisorTicks){while(D6s.O0I(verticalTicks,1)){if(D6s.F0I(shadow%verticalTicks,0))break;verticalTicks--;}
yAxis.priceTick=D6s.i0I(shadow,verticalTicks);}
if(yAxis.minimumPriceTick){yAxisPriceTick=yAxis.minimumPriceTick;fontHeight=this.getCanvasFontSize("stx_yaxis");for(var i=0;D6s.j0I(i,100);i++){var numberOfTicks=D6s.C0I(shadow,yAxisPriceTick);if(D6s.M0I(height/numberOfTicks,fontHeight*2))yAxisPriceTick*=2;else break;}
if(D6s.e0I(i,100))yAxis.priceTick=yAxisPriceTick;}
yAxis.multiplier=D6s.k0I(yAxis.height,yAxis.shadow);}
if(!this.activeDrawing||D6s.q0I(this.activeDrawing.name,"projection")){yAxis.high=this.valueFromPixel(panel.top,panel,yAxis);if(yAxis.semiLog){yAxis.logHigh=D6s.G0I(Math.log(yAxis.high),Math.LN10);yAxis.logLow=D6s.D0I(Math.log(yAxis.low),Math.LN10);if(D6s.m0I(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=D6s.s7I(yAxis.logHigh,yAxis.logLow);}
yAxis.shadow=D6s.w7I(yAxis.high,yAxis.low);}
yAxis.multiplier=D6s.u7I(yAxis.height,yAxis.shadow);if(!yAxis.decimalPlaces&&D6s.Q7I(yAxis.decimalPlaces,0)){if(isAChart){var labelDecimalPlaces=0;if(D6s.L7I(panel.yAxis.shadow,1000))labelDecimalPlaces=2;if(D6s.W7I(panel.yAxis.shadow,1))labelDecimalPlaces=4;yAxis.printDecimalPlaces=labelDecimalPlaces;}
else yAxis.printDecimalPlaces=null;}
else{yAxis.printDecimalPlaces=yAxis.decimalPlaces;}
this.runAppend("createYAxis",arguments);}
;STXChart.prototype.drawYAxis=function(panel,parameters){var E5J="order",U6J="id",a9q="gr",O3J="drawYAxis";if(this.runPrepend(O3J,arguments))return ;if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(D6s.I7I(panel.name,chart.name)&&D6s.v7I(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;var shadow=yAxis.shadow;if(parameters.range){shadow=D6s.A7I(parameters.range[D6s.U8M],parameters.range[D6s.J8M]);}
var verticalTicks=D6s.E7I(shadow,yAxis.priceTick);verticalTicks=Math.round(verticalTicks);var logStart,logPriceTick;if(yAxis.semiLog){logStart=D6s.P7I(Math.log(this.valueFromPixel(yAxis.bottom,panel)),Math.LN10);logPriceTick=D6s.f7I((yAxis.logHigh-yAxis.logLow),verticalTicks);}
var textStyle=yAxis.textStyle?yAxis.textStyle:h6J;yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries((a9q+U6J),v9J,this.canvasStyle(L4J));yAxis.yAxisPlotter.newSeries(m5J,k1J,this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries(I4q,v9J,this.canvasStyle(P9J));var priceOffset=D6s.J8M,high=parameters.range?parameters.range[D6s.U8M]:yAxis.high,low=parameters.range?parameters.range[D6s.J8M]:yAxis.low,drawBorders=(D6s.g7I(yAxis.displayBorder,u8J)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(D6s.Z7I(this.axisBorders,c1q))drawBorders=c1q;if(D6s.N7I(this.axisBorders,J8J))drawBorders=J8J;var edgeOfAxis,position=(D6s.t7I(yAxis.position,u8J)?chart.panel.yAxis.position:yAxis.position);if(D6s.T7I(position,T6q)){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+b4J,tickWidth=drawBorders?D6s.r8M:D6s.J8M;if(D6s.V7I(position,T6q))tickWidth=drawBorders?-D6s.r8M:D6s.J8M;if(isAChart)priceOffset=D6s.K8I(yAxis.priceTick,Math.round((low%yAxis.priceTick)*panel.chart.roundit)/panel.chart.roundit);else priceOffset=D6s.r8I(high,yAxis.priceTick);var fontHeight=this.getCanvasFontSize(h6J);for(var i=D6s.J8M;D6s.z8I(i,verticalTicks);i++){var price;if(yAxis.semiLog){var logPrice=logStart+(D6s.J8I(i,logPriceTick));price=Math.pow(P9q,logPrice);}
else{if(isAChart)price=low+D6s.y8I(i,yAxis.priceTick)+priceOffset;else price=D6s.h8I(high,(i*yAxis.priceTick),priceOffset);}
var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+b4J;if(D6s.v8I((y2+fontHeight/D6s.B8M),panel.bottom))continue;if(D6s.A8I((y2-fontHeight/D6s.B8M),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo((U2J+Y7J+F0J+P2J+l2J+F0J),D6s.E8I(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo((U2J+E5J),borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,u8J,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:u8J,textXPosition=edgeOfAxis+tickWidth+D6s.r8M;if(D6s.P8I(position,T6q)){textXPosition=yAxis.left+D6s.r8M;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText((s0J+l2J+m2q+s0J),price,textXPosition,y2,backgroundColor,u8J,fontHeight);}
if(drawBorders){var b=Math.round(yAxis.bottom)+b4J;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo("border",borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,I4q);}
}
this.plotYAxisGrid(panel);}
this.runAppend(O3J,arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){var A6q="plotYAxisGrid";if(this.runPrepend(A6q,arguments))return ;var context=this.chart.context;panel.yAxis.yAxisPlotter.draw(context,J9q);this.runAppend(A6q,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){if(this.runPrepend("plotYAxisText",arguments))return ;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;D6s.f8I(i,arr.length);i++){var yAxis=arr[i];if(!yAxis.yAxisPlotter)continue;if(yAxis.noDraw)continue;this.canvasFont("stx_yaxis");this.canvasColor("stx_yaxis");var context=this.chart.context;context.textBaseline="middle";if(yAxis.justifyRight)context.textAlign="right";else context.textAlign="left";var fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.yAxisPlotter.draw(context,"text");context.textBaseline="alphabetic";context.textAlign="left";}
this.runAppend("plotYAxisText",arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces,yAxis){if(D6s.g8I(price,null)||typeof price=="undefined")return "";var yax=yAxis?yAxis:panel.yAxis,decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&D6s.Z8I(decimalPlaces,0))decimalPlaces=yax.printDecimalPlaces;if(!decimalPlaces&&D6s.N8I(decimalPlaces,0)){if(D6s.t8I(yax.priceTick,0.01))decimalPlaces=4;else if(D6s.T8I(yax.priceTick,0.1))decimalPlaces=2;else if(D6s.V8I(yax.priceTick,1))decimalPlaces=1;else decimalPlaces=0;}
if(D6s.K6r(panel.name,panel.chart.name)){if(D6s.r6r(yax.priceTick,100)){return STX.condenseInt(price);}
}
if(this.internationalizer){if(D6s.z6r(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=D6s.J6r(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){if(!price||typeof price=="undefined")return "";if(!panel)panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(!panel)return price;var decimalPlaces=panel.decimalPlaces;if(!decimalPlaces&&D6s.y6r(decimalPlaces,0)){decimalPlaces=panel.chart.decimalPlaces;}
if(!decimalPlaces&&D6s.h6r(decimalPlaces,0)){return price;}
if(this.internationalizer){if(D6s.x6r(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=D6s.Y6r(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var X9J="createCrosshairs";if(this.runPrepend(X9J,arguments))return ;if(this.controls.crossX.onmousedown)return ;this.controls.crossY.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return c1q;}
;this.controls.crossX.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return c1q;}
;this.runAppend(X9J,arguments);}
;STXChart.prototype.determineMinMax=function(quotes,fields,sum,bypassTransform){var highValue=Number.MAX_VALUE*-1,lowValue=Number.MAX_VALUE,isTransform=false;for(var i=0;D6s.a6r(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(!bypassTransform){if(quote.transform){isTransform=true;quote=quote.transform;}
else if(isTransform)continue;}
var acc=0;for(var j=0;D6s.o6r(j,fields.length);j++){var val=quote[fields[j]];if(val||D6s.H6r(val,0)){if(sum){acc+=val;if(D6s.d6r(acc,highValue))highValue=acc;if(D6s.c6r(acc,lowValue))lowValue=acc;}
else{if(D6s.l6r(val,highValue))highValue=val;if(D6s.R6r(val,lowValue))lowValue=val;}
}
}
}
return [lowValue,highValue];}
;STXChart.prototype.calculateYAxisRange=function(panel,yAxis,low,high){if(D6s.p6r(low,Number.MAX_VALUE)){low=0;high=0;}
var cheight=panel.height,newHigh=null,newLow=null;if(!yAxis.bottomOffset)yAxis.bottomOffset=this.xaxisHeight;yAxis.bottom=D6s.b6r(panel.bottom,yAxis.bottomOffset);yAxis.top=panel.top;yAxis.height=D6s.X9r(yAxis.bottom,yAxis.top);var verticalPad=Math.round(Math.abs(D6s.n9r(cheight,5)));if(D6s.B9r(cheight-Math.abs(yAxis.scroll),verticalPad)){yAxis.scroll=(D6s.U9r(cheight,verticalPad))*(D6s.S9r(yAxis.scroll,0)?-1:1);}
var pricePerPix=D6s.O9r((high-low),yAxis.height);if(low||D6s.F9r(low,0)){if(D6s.i9r(high-low,0)){newHigh=D6s.j9r(high,2);newLow=0;}
else{if((this.layout.semiLog||D6s.C9r(this.layout.chartScale,"log"))&&newHigh){var logLow=D6s.M9r(Math.log(low),Math.LN10),logHigh=D6s.e9r(Math.log(high),Math.LN10);newHigh=Math.pow(10,logHigh);newLow=Math.pow(10,logLow);}
else{newHigh=high;newLow=low;}
}
yAxis.high=newHigh;yAxis.low=newLow;}
if(yAxis.max||D6s.k9r(yAxis.max,0))yAxis.high=yAxis.max;if(yAxis.min||D6s.q9r(yAxis.min,0))yAxis.low=yAxis.min;yAxis.shadow=D6s.G9r(yAxis.high,yAxis.low);if(D6s.D9r(panel.chart.name,panel.name)&&D6s.m9r(panel.yAxis,yAxis)){var isLogScale=(this.layout.semiLog||D6s.s1r(this.layout.chartScale,(b8J+Q6q)));if(D6s.w1r(yAxis.semiLog,isLogScale)){this.clearPixelCache();yAxis.semiLog=isLogScale;}
}
}
;STXChart.prototype.renderYAxis=function(chart){if(this.runPrepend("renderYAxis",arguments))return ;var panel=chart.panel,arr=panel.yaxisRHS.concat(panel.yaxisLHS),i;for(i=0;D6s.u1r(i,arr.length);i++){var yAxis=arr[i],low=null,high=null;if(D6s.Q1r(panel.yAxis,yAxis)){low=chart.lowValue;high=chart.highValue;}
this.calculateYAxisRange(panel,yAxis,low,high);}
var parameters={}
;for(i=0;D6s.L1r(i,arr.length);i++){parameters.yAxis=arr[i];this.createYAxis(panel,parameters);this.drawYAxis(panel,parameters);}
this.runAppend("renderYAxis",arguments);}
;STXChart.prototype.initializeDisplay=function(chart){var Q5J="initializeDisplay";if(this.runPrepend(Q5J,arguments))return ;var fields=[];for(var field in chart.series){if(chart.series[field].parameters.shareYAxis)fields.push(field);}
var panel=chart.panel=this.panels[chart.name],minMax;if(!STXChart.chartShowsHighs(this.layout.chartType)){fields.push(G3J);minMax=this.determineMinMax(chart.dataSegment,fields);if(D6s.W1r(this.layout.chartType,c9J)){var base=chart.baseline.actualLevel;if(chart.transformFunc)base=chart.transformFunc(this,chart,base);var diff=Math.max(D6s.I1r(base,minMax[D6s.J8M]),D6s.v1r(minMax[D6s.U8M],base));if(this.repositioningBaseline){minMax=[chart.lowValue,chart.highValue];}
else{minMax[D6s.J8M]=D6s.A1r(base,diff);minMax[D6s.U8M]=base+diff;}
}
}
else{fields.push(G3J,y6J,Y5J);minMax=this.determineMinMax(chart.dataSegment,fields);}
chart.lowValue=minMax[D6s.J8M];chart.highValue=minMax[D6s.U8M];this.runAppend(Q5J,arguments);}
;STXChart.prototype.computePosition=function(x,offset){if(typeof offset==A8M)offset=D6s.J8M;var position=D6s.E1r(x,this.layout.candleWidth)+offset+this.micropixels;return position;}
;STXChart.prototype.computeColor=function(open,close){var H8J="dle_up";if(D6s.P1r(open,close))return (a7J+C5J+x2J+W7J+H8J);if(D6s.f1r(open,close))return l8M;return K8J;}
;STXChart.prototype.computeLength=function(high,low){var h=this.pixelFromPrice(high),l=this.pixelFromPrice(low);return D6s.g1r(l,h);}
;STXChart.prototype.setSeriesRenderer=function(renderer){var params=renderer.params;if(this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];if(params.yAxis){this.addYAxis(this.panels[params.panel],params.yAxis);}
renderer.stx=this;this.chart.seriesRenderers[renderer.params.name]=renderer;return renderer;}
;STXChart.prototype.removeSeriesRenderer=function(renderer){for(var r in this.chart.seriesRenderers){if(D6s.Z1r(renderer.params.name,this.chart.seriesRenderers[r].params.name)){var toDelete=this.chart.seriesRenderers[renderer.params.name],yAxis=toDelete.params.yAxis,panel=this.panels[toDelete.params.panel];delete  this.chart.seriesRenderers[renderer.params.name];this.deleteYAxisIfUnused(panel,yAxis);return ;}
}
}
;STXChart.prototype.getSeriesRenderer=function(name){return this.chart.seriesRenderers[name];}
;STXChart.prototype.drawHistogram=function(params,seriesParams){var A2q="ack",c2J="nter",S3J="ce",h2J="ogra",s7J="hi";if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,type=params.type;if(D6s.N1r(type,(s7J+o2J+h2J+Z7J)))type=params.subtype;var quotes=this.chart.dataSegment,bordersOn=false;this.getDefaultColor();var sp;for(sp=0;D6s.t1r(sp,seriesParams.length);sp++){bordersOn|=(seriesParams[sp].border_color_up&&!STX.isTransparent(seriesParams[sp].border_color_up));bordersOn|=(seriesParams[sp].border_color_down&&!STX.isTransparent(seriesParams[sp].border_color_down));}
if(!params.name)params.name="Data";var multiplier=yAxis.multiplier;if(!params.heightPercentage)params.heightPercentage=0.7;if(!params.widthFactor)params.widthFactor=0.8;if(!params.bindToYAxis){var histMax=0;if(!histMax){for(var i=0;D6s.T1r(i,this.chart.maxTicks);i++){var prices=quotes[i];if(!prices)continue;var total=0;for(sp=0;D6s.V1r(sp,seriesParams.length);sp++){if(prices[seriesParams[sp].field]){if(D6s.K2r(params.subtype,"stacked"))total+=prices[seriesParams[sp].field];else total=Math.max(total,prices[seriesParams[sp].field]);}
}
if(D6s.r2r(total,histMax))histMax=total;}
if(D6s.z2r(histMax,0)){this.watermark(panelName,(S3J+c2J),"bottom",this.translateIf(params.name+" Not Available"));return ;}
}
multiplier=D6s.J2r((b-t),params.heightPercentage,histMax);}
this.startClip(panelName);var context=this.chart.context,negativeOffset=D6s.W2r((c.chart.tmpWidth-this.layout.candleWidth),2),shaveOff=Math.max(0,D6s.I2r((1-params.widthFactor),this.layout.candleWidth,2)),tops={}
,bottoms={}
,self=this;function drawBars(field,color,opacity,isBorder,isUp,shift,candleWidth){if(!opacity)opacity=1;if(STX.isIE8)context.globalAlpha=0.5;else context.globalAlpha=opacity;var offset=0.5;if(D6s.i2r(c.chart.tmpWidth,1))offset=0;context.beginPath();var prevTop=b+0.5,farLeft=(bordersOn?c.left+0.5:c.left),prevRight=farLeft;for(var i=0;D6s.j2r(i,quotes.length);i++){var bottom=bottoms[i];if(!bottom)bottom=b;if(D6s.C2r(i,0))prevTop=bottom;var quote=quotes[i];if(!quote){prevTop=bottom;prevRight+=self.layout.candleWidth;continue;}
var y=D6s.M2r(quote[field],multiplier);if(isNaN(y))continue;var top=Math.min(Math.floor(D6s.e2r(bottom,y))+0.5,bottom);if(isUp){if(D6s.k2r(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=self.layout.candleWidth;continue;}
}
else{if(D6s.q2r(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=self.layout.candleWidth;continue;}
}
var x0,x1;if(bordersOn){x0=Math.floor(prevRight+Math.floor(negativeOffset)+self.micropixels+shaveOff+offset+D6s.G2r(shift,candleWidth));x1=Math.floor(prevRight+Math.floor(negativeOffset)+self.micropixels+shaveOff+candleWidth+offset+D6s.D2r(shift,candleWidth));x0=Math.max(x0,farLeft);}
else{x0=c.left+D6s.m2r(i,self.layout.candleWidth)+Math.floor(negativeOffset)+self.micropixels+shaveOff+offset+D6s.s4r(shift,candleWidth);x1=x0+candleWidth;}
if(D6s.w4r(x1-x0,2))x1=x0+1;context.moveTo(x0+offset,bottom);if(D6s.u4r(b,bottom)){context.lineTo(x1,bottom);}
else{context.moveTo(x1,bottom);if(isBorder&&!shaveOff){if(bottoms[i+1])context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+1])));}
}
context.lineTo(x1,top);context.lineTo(x0,top);if(isBorder&&shift){if(D6s.Q4r(tops[i],top)||D6s.L4r(i,0))context.lineTo(x0,Math.min(bottom,tops[i]));}
else if(isBorder&&!shaveOff&&D6s.W4r(type,"clustered")){if(D6s.I4r(i,0)&&tops[D6s.v4r(i,1)]&&D6s.A4r(tops[i-1],top))context.lineTo(x0,Math.min(bottom,tops[D6s.E4r(i,1)]));}
else if(isBorder&&!shaveOff){if(D6s.P4r(prevTop,top)||D6s.f4r(i,0))context.lineTo(x0,Math.min(bottom,prevTop));}
else{context.lineTo(x0,bottom);}
prevTop=top;prevRight+=self.layout.candleWidth;if(D6s.g4r(type,"clustered")||isBorder)tops[i]=top;}
if(!color)color="auto";if(isBorder){context.strokeStyle=D6s.Z4r(color,"auto")?self.defaultColor:color;context.stroke();}
else{context.fillStyle=D6s.N4r(color,"auto")?self.defaultColor:color;context.fill();}
context.closePath();}
for(sp=0;D6s.t4r(sp,seriesParams.length);sp++){var param=seriesParams[sp],candleWidth=D6s.T4r(this.layout.candleWidth,params.widthFactor),shift=0;if(D6s.V4r(type,"clustered")){shift=sp;candleWidth/=seriesParams.length;}
drawBars(param.field,param.fill_color_up,param.opacity_up,null,true,shift,candleWidth);drawBars(param.field,param.fill_color_down,param.opacity_down,null,null,shift,candleWidth);if(D6s.K3r(this.layout.candleWidth,2)&&bordersOn){drawBars(param.field,param.border_color_up,param.opacity_up,true,true,shift,candleWidth);drawBars(param.field,param.border_color_down,param.opacity_down,true,null,shift,candleWidth);}
if(D6s.r3r(type,(o2J+A2q+l2J+P2J)))bottoms=STX.shallowClone(tops);}
context.globalAlpha=1;this.endClip();}
;STXChart.prototype.startClip=function(panelName,allowYAxis){if(!panelName)panelName="chart";var panel=this.panels[panelName],yAxis=panel.yAxis;this.chart.context.save();this.chart.context.beginPath();var left=panel.left,width=panel.width;if(allowYAxis){left=0;width=this.width;}
this.chart.context.rect(left,panel.top,width,yAxis.height);this.chart.context.clip();}
;STXChart.prototype.endClip=function(){this.chart.context.restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(panel,fillColor,borderColor,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderOffset=0;if(borderColor&&!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=D6s.z3r(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();context.fillStyle=fillColor;var yAxis=panel.yAxis;for(var x=0;D6s.J3r(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(D6s.y3r(quote.Open,quote.Close))continue;if(D6s.h3r(condition,STXChart.CANDLEUP)&&D6s.x3r(quote.Open,quote.Close))continue;if(D6s.Y3r(condition,STXChart.CANDLEDOWN)&&D6s.a3r(quote.Open,quote.Close))continue;if(D6s.o3r(condition,STXChart.CLOSEUP)&&D6s.H3r(quote.Close,quote.iqPrevClose))continue;if(D6s.d3r(condition,STXChart.CLOSEDOWN)&&D6s.c3r(quote.Close,quote.iqPrevClose))continue;if(D6s.l3r(condition,STXChart.CLOSEEVEN)&&D6s.R3r(quote.Close,quote.iqPrevClose))continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(D6s.p3r(tick,panel.cacheLeft)||D6s.b3r(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(D6s.X5r((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(D6s.n5r((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(D6s.B5r(bottom,top));if(D6s.U5r(top,t)){if(D6s.S5r(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=D6s.O5r(t,top);top=t;}
if(D6s.F5r(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(D6s.i5r(cache.open,b))continue;if(D6s.j5r(cache.close,t))continue;var x0=panel.left+Math.floor(D6s.C5r(x,this.layout.candleWidth)+this.micropixels)+borderOffset,x1=x0+chart.tmpWidth-(D6s.M5r(borderOffset,2));if(D6s.e5r(quote.Open,quote.Close)){top=D6s.k5r(Math.round(cache.open),borderOffset);context.moveTo(x0,top);context.lineTo(x1,top);}
else{context.moveTo(x0,cache.open);context.lineTo(x1,cache.open);context.lineTo(x1,cache.close);context.lineTo(x0,cache.close);context.lineTo(x0,cache.open);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
context.closePath();}
;STXChart.prototype.drawCandles=function(panel,colorFunction,isOutline){var B7J="outli",chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0;if(!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=D6s.q5r(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis;for(var x=0;D6s.G5r(x,quotes.length);x++){context.beginPath();var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(!quote.Open&&D6s.D5r(quote.Open,0))continue;if(D6s.m5r(quote.Open,quote.Close))continue;var myColor=colorFunction(this,quote,isOutline?(B7J+W7J+l2J):"solid");if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.fillStyle=fillColor;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(D6s.s0r(tick,panel.cacheLeft)||D6s.w0r(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(D6s.u0r((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(D6s.Q0r((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(D6s.L0r(bottom,top));if(D6s.W0r(top,t)){if(D6s.I0r(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=D6s.v0r(t,top);top=t;}
if(D6s.A0r(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(D6s.E0r(cache.open,b))continue;if(D6s.P0r(cache.close,t))continue;var x0=panel.left+Math.floor(D6s.f0r(x,this.layout.candleWidth)+this.micropixels)+borderOffset,x1=x0+chart.tmpWidth-(D6s.g0r(borderOffset,2));if(D6s.Z0r(quote.Open,quote.Close)){top=D6s.N0r(Math.round(cache.open),borderOffset);context.moveTo(x0,top);context.lineTo(x1,top);}
else{context.moveTo(x0,cache.open);context.lineTo(x1,cache.open);context.lineTo(x1,cache.close);context.lineTo(x0,cache.close);context.lineTo(x0,cache.open);}
if(D6s.t0r(fillColor,"transparent"))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=D6s.T0r(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();var yAxis=panel.yAxis,centerOffset=D6s.V0r(chart.tmpWidth,2);for(var x=0;D6s.K7r(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(condition){if(D6s.r7r(condition,STXChart.CANDLEUP)&&D6s.z7r(quote.Open,quote.Close))continue;else if(D6s.J7r(condition,STXChart.CANDLEDOWN)&&D6s.y7r(quote.Open,quote.Close))continue;else if(D6s.h7r(condition,STXChart.CLOSEUP)&&D6s.x7r(quote.Close,quote.iqPrevClose))continue;else if(D6s.Y7r(condition,STXChart.CLOSEDOWN)&&D6s.a7r(quote.Close,quote.iqPrevClose))continue;else if(D6s.o7r(condition,STXChart.CLOSEEVEN)&&D6s.H7r(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(D6s.d7r(tick,panel.cacheLeft)||D6s.c7r(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(D6s.l7r((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(D6s.R7r((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=D6s.p7r(bottom,top);if(D6s.b7r(top,t)){if(D6s.X8r(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=D6s.n8r(t,top);top=t;}
if(D6s.B8r(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(D6s.U8r(cache.top,b))continue;if(D6s.S8r(cache.bottom,t))continue;var xx=panel.left+Math.floor(Math.floor(D6s.O8r(x,this.layout.candleWidth)+this.micropixels)+centerOffset)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(D6s.F8r(quote.Open,quote.Close)){var x0=D6s.i8r(xx,this.offset),x1=xx+this.offset,o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(D6s.j8r((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);if(D6s.C8r(o,b)&&D6s.M8r(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this.canvasColor(style);context.stroke();context.closePath();}
;STXChart.prototype.drawShadows=function(panel,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=D6s.e8r(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,centerOffset=D6s.k8r(chart.tmpWidth,2);for(var x=0;D6s.q8r(x,quotes.length);x++){context.beginPath();var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;var color=colorFunction(this,quote,"shadow");if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(D6s.G8r(tick,panel.cacheLeft)||D6s.D8r(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(D6s.m8r((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(D6s.s6Y((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=D6s.w6Y(bottom,top);if(D6s.u6Y(top,t)){if(D6s.Q6Y(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=D6s.L6Y(t,top);top=t;}
if(D6s.W6Y(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(D6s.I6Y(cache.top,b))continue;if(D6s.v6Y(cache.bottom,t))continue;var xx=panel.left+Math.floor(Math.floor(D6s.A6Y(x,this.layout.candleWidth)+this.micropixels)+centerOffset)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(D6s.E6Y(quote.Open,quote.Close)||(!quote.Open&&D6s.P6Y(quote.Open,0))){var x0=D6s.f6Y(xx,this.offset),x1=xx+this.offset,o=Math.floor((yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(D6s.g6Y((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top))+0.5;if(D6s.Z6Y(o,b)&&D6s.N6Y(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(panel){var v5J="scatt",chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();context.lineWidth=4;var t=panel.yAxis.top,b=panel.yAxis.bottom;for(var x=0;D6s.t6Y(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(!quote.projection){if(quote.transform)quote=quote.transform;var scatter=[quote.Close];if(D6s.T6Y("Scatter",quote))scatter=quote.Scatter;for(var i=0;D6s.V6Y(i,scatter.length);i++){var top=this.pixelFromPrice(scatter[i],panel);if(D6s.K9Y(top,t))continue;if(D6s.r9Y(top,b))continue;var xx=panel.left+D6s.z9Y(x,this.layout.candleWidth)+this.micropixels,xxo=xx+this.offset;context.moveTo(D6s.J9Y(xxo,2),top);context.lineTo(xxo+2,top);}
}
}
this.canvasColor((a7J+d4J+v5J+l2J+F0J+Y2q+x2J+C1q));context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawKagiSquareWave=function(panel,upStyleName,downStyleName){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context,upStyle=this.canvasStyle(upStyleName),downStyle=this.canvasStyle(downStyleName);this.canvasColor(upStyleName);var upColor=context.strokeStyle;this.canvasColor(downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&D6s.y9Y(parseInt(upStyle.width,10),25)){upWidth=Math.max(1,STX.stripPX(upStyle.width));}
var downWidth=1;if(downStyle.width&&D6s.h9Y(parseInt(downStyle.width,10),25)){downWidth=Math.max(1,STX.stripPX(downStyle.width));}
context.beginPath();var leftTick=D6s.x9Y(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,first=true,previousOpen=null,lastClose=null,trend=null;for(var x=0;D6s.Y9Y(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(D6s.a9Y(tick,panel.cacheLeft)||D6s.o9Y(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(D6s.H9Y((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(D6s.d9Y((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xx=panel.left+D6s.c9Y(x,this.layout.candleWidth)+this.micropixels,xxo=xx+this.offset,xx2=Math.round(xxo)+0.5;lastClose=cache.close;if(first){context.moveTo(xx2,cache.open);previousOpen=cache.open;if(D6s.l9Y(cache.close,cache.open))trend=1;else trend=-1;first=false;}
if(trend!=-1&&D6s.R9Y(cache.close,previousOpen)&&D6s.p9Y(previousOpen,cache.open)){context.lineTo(xx2,previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(xx2,previousOpen);}
else if(D6s.b9Y(trend,1)&&D6s.X1Y(cache.close,previousOpen)&&D6s.n1Y(previousOpen,cache.open)){context.lineTo(xx2,previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(xx2,previousOpen);}
context.lineTo(xx2,cache.close);if(D6s.B1Y(x+1,quotes.length)){context.lineTo(xx2+this.layout.candleWidth,cache.close);previousOpen=cache.open;}
}
if(trend==-1||(D6s.U1Y(trend,null)&&D6s.S1Y(lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawPointFigureChart=function(panel,style,condition){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context;this.canvasColor(style);var pfstyle=this.canvasStyle(style),paddingTop=parseInt(pfstyle.paddingTop,10),paddingBottom=parseInt(pfstyle.paddingBottom,10),paddingLeft=parseInt(pfstyle.paddingLeft,10),paddingRight=parseInt(pfstyle.paddingRight,10);if(pfstyle.width&&D6s.O1Y(parseInt(pfstyle.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();var box=this.chart.pandf.box,leftTick=D6s.F1Y(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,boxes,height,start;for(var x=0;D6s.i1Y(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;if(D6s.j1Y(condition,"X")&&D6s.C1Y(quote.Open,quote.Close))continue;else if(D6s.M1Y(condition,"O")&&D6s.e1Y(quote.Open,quote.Close))continue;var cache=quote.cache,tick=leftTick+x;if(D6s.k1Y(tick,panel.cacheLeft)||D6s.q1Y(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(D6s.G1Y((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(D6s.D1Y((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xx=panel.left+D6s.m1Y((x-0.5),this.layout.candleWidth)+this.micropixels+this.offset,xxl=Math.round(xx)+0.5,xxr=xxl+Math.round(this.layout.candleWidth)-0.5;boxes=Math.abs(Math.round(D6s.s2Y((quote.Close-quote.Open),box)));height=Math.abs(D6s.w2Y((cache.open-cache.close),boxes));var offset=D6s.u2Y(height,2);start=cache.open;for(;D6s.Q2Y(boxes,0);boxes--){if(D6s.L2Y(condition,"X")){context.moveTo(xxl+paddingLeft,D6s.W2Y(start,paddingBottom,offset));context.lineTo(D6s.F2Y(xxr,paddingRight),D6s.i2Y(start,height,paddingTop,offset));context.moveTo(xxl+paddingLeft,D6s.E2Y(start,height,paddingTop,offset));context.lineTo(D6s.H2Y(xxr,paddingRight),D6s.d2Y(start,paddingBottom,offset));start-=height;}
else if(D6s.Z2Y(condition,"O")){context.moveTo(D6s.N2Y((xxl+xxr),2),start+paddingTop-offset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-offset,xxr+paddingRight,start+height-paddingBottom-offset,D6s.t2Y((xxl+xxr),2),start+height-paddingBottom-offset);context.bezierCurveTo(D6s.T2Y(xxl,paddingLeft),start+height-paddingBottom-offset,D6s.V2Y(xxl,paddingLeft),start+paddingTop-offset,D6s.K4Y((xxl+xxr),2),start+paddingTop-offset);start+=height;}
}
}
context.stroke();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawBarChartHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&D6s.r4Y(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var widthOffset=D6s.z4Y(context.lineWidth,2);context.beginPath();var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=D6s.J4Y(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis;for(var x=0;D6s.y4Y(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(condition){if(D6s.h4Y(condition,STXChart.CLOSEUP)&&D6s.x4Y(quote.Close,quote.iqPrevClose))continue;else if(D6s.Y4Y(condition,STXChart.CLOSEDOWN)&&D6s.a4Y(quote.Close,quote.iqPrevClose))continue;else if(D6s.o4Y(condition,STXChart.CLOSEEVEN)&&D6s.H4Y(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(D6s.d4Y(tick,panel.cacheLeft)||D6s.c4Y(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(D6s.l4Y((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(D6s.R4Y((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);length=D6s.p4Y(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(D6s.b4Y((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(D6s.X3Y((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(D6s.n3Y(top,t)){if(D6s.B3Y(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=D6s.U3Y(t,top);top=t;}
if(D6s.S3Y(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=panel.left+D6s.O3Y(x,this.layout.candleWidth)+this.micropixels,xxo=xx+this.offset,xx2=Math.round(xxo)+0.5;if(D6s.F3Y(cache.top,b)&&D6s.i3Y(cache.bottom,t)){context.moveTo(xx2,cache.top);context.lineTo(xx2,cache.bottom);}
if(D6s.j3Y(cache.open,t)&&D6s.C3Y(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(xx2+widthOffset,cache.open);}
if(D6s.M3Y(cache.close,t)&&D6s.e3Y(cache.close,b)){context.moveTo(D6s.k3Y(xx2,widthOffset),cache.close);context.lineTo(xxo+this.offset,cache.close);}
}
this.canvasColor(style);context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawBarChart=function(panel,style,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&D6s.q3Y(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var widthOffset=D6s.G3Y(context.lineWidth,2),t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=D6s.D3Y(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,colors={}
;for(var x=0;D6s.m3Y(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)break;var color=colorFunction(this,quote);if(!color)continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(D6s.s5Y(tick,panel.cacheLeft)||D6s.w5Y(tick,panel.cacheRight)||!cache.top){top=this.pixelFromPrice(quote.High,panel);bottom=this.pixelFromPrice(quote.Low,panel);length=D6s.u5Y(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(D6s.Q5Y((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(D6s.L5Y((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(D6s.W5Y(top,t)){if(D6s.I5Y(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=D6s.v5Y(t,top);top=t;}
if(D6s.A5Y(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=panel.left+D6s.E5Y(x,this.layout.candleWidth)+this.micropixels,xxo=xx+this.offset,xx2=Math.round(xxo)+0.5;if(D6s.P5Y(cache.top,b)&&D6s.f5Y(cache.bottom,t)){context.moveTo(xx2,cache.top);context.lineTo(xx2,cache.bottom);}
if(D6s.g5Y(cache.open,t)&&D6s.Z5Y(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(xx2+widthOffset,cache.open);}
if(D6s.N5Y(cache.close,t)&&D6s.t5Y(cache.close,b)){context.moveTo(D6s.T5Y(xx2,widthOffset),cache.close);context.lineTo(xxo+this.offset,cache.close);}
context.stroke();}
context.lineWidth=1;return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var skipProjections=false,skipTransform=false,noSlopes=false;if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;noSlopes=parameters.noSlopes;}
var chart=panel.chart,context=this.chart.context,first=true,yAxis=panel.yAxis,t=yAxis.top,b=yAxis.bottom,leftTick=D6s.V5Y(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,lastQuote=null,colors={}
,lastXY=[0,0];this.startClip(panel.name);context.beginPath();for(var i=0;D6s.K0Y(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(!quote[field]&&D6s.r0Y(quote[field],0))continue;if(D6s.z0Y(tick,panel.cacheLeft)||D6s.J0Y(tick,panel.cacheRight)||!cache[field]){cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(D6s.y0Y((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
var x=panel.left+D6s.h0Y(i,this.layout.candleWidth)+this.offset+this.micropixels;if(D6s.x0Y(x,panel.right))lastQuote=quote;if(this.extendLastTick&&D6s.Y0Y(i,quotes.length-1)){x+=this.offset;}
var y=cache[field],pattern=null;if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(typeof color=="object"){pattern=color.pattern;color=color.color;}
if(D6s.a0Y(context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(first){first=false;if(noSlopes||D6s.o0Y(leftTick,0)){context.moveTo(x,y);}
else if(D6s.H0Y(leftTick,0)){var baseline=chart.dataSet[D6s.d0Y(leftTick,1)];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];if(!y0||isNaN(y0)){context.moveTo(x,y);}
else{y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(D6s.c0Y((yAxis.high-y0),yAxis.multiplier))+yAxis.top);y0=Math.min(Math.max(y0,t),b);var x0=D6s.l0Y((i-1),this.layout.candleWidth)+this.offset+this.micropixels;if(pattern){context.dashedLineTo(x0,y0,x,y,pattern);}
else{context.moveTo(x0,y0);context.lineTo(x,y);}
}
}
}
else{if(noSlopes){var quote1=quotes[D6s.R0Y(i,1)];if(!quote1)continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i&&D6s.p0Y(y,quote1.cache[field])){if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,lastXY[1],pattern);}
else{context.lineTo(x,lastXY[1]);}
context.moveTo(x,y);}
else{if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,y,pattern);}
else{context.lineTo(x,y);}
}
}
else{if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,y,pattern);}
else{context.lineTo(x,y);}
}
}
lastXY=[x,y];}
context.stroke();this.endClip();if(parameters.label&&lastQuote){var txt;if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,lastQuote[field],parameters.labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,parameters.labelDecimalPlaces);}
var yaxisLabelStyle=this.yaxisLabelStyle;if(panel.yAxis.yaxisLabelStyle)yaxisLabelStyle=panel.yAxis.yaxisLabelStyle;var labelcolor=D6s.b0Y(yaxisLabelStyle,"noop")?context.strokeStyle:null;this.yAxisLabels.push({src:"plot","args":[panel,txt,lastQuote.cache[field],D6s.X7Y(yaxisLabelStyle,"noop")?"#FFFFFF":context.strokeStyle,labelcolor]}
);}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var skipProjections=false,skipTransform=false,reverse=false;if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;reverse=parameters.reverse;}
var chart=panel.chart,context=this.chart.context,first=true,t=panel.yAxis.top,b=panel.yAxis.bottom;this.startClip(panel.name);context.beginPath();var leftTick=D6s.n7Y(chart.dataSet.length,chart.scroll),firstX=null,firstY=null,yAxis=panel.yAxis,x=0;for(var i=0;D6s.B7Y(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(D6s.U7Y(tick,panel.cacheLeft)||D6s.S7Y(tick,panel.cacheRight)||!cache[field]){if(!quote[field]&&D6s.O7Y(quote[field],0))continue;cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(D6s.F7Y((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
x=panel.left+D6s.i7Y(i,this.layout.candleWidth)+this.offset+this.micropixels;if(this.extendLastTick&&D6s.j7Y(i,quotes.length-1)){x+=this.offset;}
if(D6s.C7Y(firstX,null))firstX=x;var y=cache[field];if(D6s.M7Y(firstY,null))firstY=y;if(first){first=false;if(D6s.e7Y(leftTick,0)){context.moveTo(x,y);}
else{var baseline=chart.dataSet[D6s.k7Y(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(D6s.q7Y((yAxis.high-y0),yAxis.multiplier))+yAxis.top);y0=Math.min(Math.max(y0,t),b);firstX=D6s.G7Y(this.offset,this.layout.candleWidth);context.moveTo(firstX,y0);context.lineTo(x,y);}
}
else{context.lineTo(x,y);}
}
context.lineTo(x,reverse?t:b);context.lineTo(firstX,reverse?t:b);if(reverse){if(D6s.D7Y(firstY,t))firstY=t;}
else{if(D6s.m7Y(firstY,b))firstY=b;}
context.lineTo(firstX,firstY);context.fill();context.closePath();this.endClip();}
;STXChart.prototype.drawLineChart=function(panel,style,colorFunction){var context=this.chart.context,c=this.canvasStyle(style);if(c.width&&D6s.s8Y(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor(style);var rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",{skipProjections:true}
,colorFunction);context.lineWidth=1;return rc;}
;STXChart.prototype.drawMountainChart=function(panel){var X6J="ar",M1q="ntain",K8M="_m",context=this.chart.context,c=this.canvasStyle((o2J+m2q+K8M+Y7J+w0J+M1q+Y2q+X6J+s0J));if(c.width&&D6s.w8Y(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var top=this.pixelFromPrice(panel.chart.highValue,panel);if(isNaN(top))top=0;var backgroundColor=c.backgroundColor,color=c.color;if(color&&D6s.u8Y(color,"transparent")){var gradient=context.createLinearGradient(0,top,0,panel.yAxis.bottom);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
this.plotMountainChart(panel,panel.chart.dataSegment,"Close",{skipProjections:true}
);var strokeStyle=c.borderTopColor;if(strokeStyle&&D6s.Q8Y(strokeStyle,"transparent")){context.strokeStyle=strokeStyle;this.plotLineChart(panel,panel.chart.dataSegment,"Close",{skipProjections:true}
);}
context.lineWidth=1;}
;STXChart.prototype.drawWaveChart=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel.yAxis.bottom;for(var i=0;D6s.L8Y(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var x=panel.left+D6s.W8Y(i,this.layout.candleWidth)+this.offset+this.micropixels,y=this.pixelFromPrice(quote.Open,panel);if(D6s.I8Y(y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(D6s.v8Y(y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=D6s.A8Y(chart.dataSet.length,chart.scroll);if(D6s.E8Y(leftTick,0)){context.moveTo(x,y);}
else if(D6s.P8Y(leftTick,0)){var baseline=chart.dataSet[D6s.f8Y(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline.Close;y0=(panel.yAxis.semiLog?this.pixelFromPrice(y0,panel):(D6s.g8Y((panel.yAxis.high-y0),panel.yAxis.multiplier))+t);y0=Math.min(Math.max(y0,t),b);context.moveTo(D6s.Z8Y((i-1),this.layout.candleWidth)+this.offset+this.micropixels,y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=D6s.N8Y(this.layout.candleWidth,4);if(D6s.t8Y(quote.Open,quote.Close)){y=this.pixelFromPrice(quote.Low,panel);if(D6s.T8Y(y,t))y=t;if(D6s.V8Y(y,b))y=b;context.lineTo(x,y);x+=D6s.K66(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.High,panel);if(D6s.r66(y,t))y=t;if(D6s.z66(y,b))y=b;context.lineTo(x,y);}
else{y=this.pixelFromPrice(quote.High,panel);if(D6s.J66(y,t))y=t;if(D6s.y66(y,b))y=b;context.lineTo(x,y);x+=D6s.h66(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Low,panel);if(D6s.x66(y,t))y=t;if(D6s.Y66(y,b))y=b;context.lineTo(x,y);}
x+=D6s.a66(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Close,panel);if(D6s.o66(y,t))y=t;if(D6s.H66(y,b))y=b;context.lineTo(x,y);}
var c=this.canvasStyle("stx_line_chart");if(c.width&&D6s.d66(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor("stx_line_chart");context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.updateFloatHRLabel=function(panel){var arr=panel.yaxisLHS.concat(panel.yaxisRHS);STX.clearCanvas(this.floatCanvas,this);if(D6s.c66(this.controls.crossX.style.display,"none"))return ;if(this.controls.crossY){this.controls.crossY.style.left=panel.left+"px";this.controls.crossY.style.width=panel.width+"px";}
for(var i=0;D6s.l66(i,arr.length);i++){var yAxis=arr[i],price=this.valueFromPixel(this.cy,panel,yAxis);if(isNaN(price))continue;var labelDecimalPlaces=null;if(D6s.R66(yAxis,panel.chart.yAxis)){labelDecimalPlaces=0;if(D6s.p66(yAxis.shadow,1000))labelDecimalPlaces=2;if(D6s.b66(yAxis.shadow,5))labelDecimalPlaces=4;if(yAxis.decimalPlaces||D6s.X96(yAxis.decimalPlaces,0))labelDecimalPlaces=yAxis.decimalPlaces;}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price,yAxis);}
else{price=this.formatYAxisPrice(price,panel,labelDecimalPlaces,yAxis);}
var style=this.canvasStyle((a7J+a0J+X6q+b8J+P6J+a0J+G0J+J6q+l2J));this.createYAxisLabel(panel,price,this.cy,style.backgroundColor,style.color,this.floatCanvas.context,yAxis);}
}
;STXChart.prototype.headsUpHR=function(){var B8J="00",p1J="headsUpHR";if(this.runPrepend(p1J,arguments))return ;var panel=this.currentPanel;if(!panel)return ;var chart=panel.chart;this.updateFloatHRLabel(panel);if(this.controls.floatDate){var bar=this.barFromPixel(this.cx),prices=chart.xaxis[bar];if(prices&&prices.DT){if(chart.xAxis.formatter){this.controls.floatDate.innerHTML=chart.xAxis.formatter(prices.DT);}
else if(this.internationalizer){var str=this.internationalizer.monthDay.format(prices.DT);if(D6s.n96(prices.DT.getHours(),D6s.J8M)||D6s.B96(prices.DT.getMinutes(),D6s.J8M)||!STXChart.isDailyInterval(this.layout.interval))str+=w4J+this.internationalizer.hourMinute.format(prices.DT);this.controls.floatDate.innerHTML=str;}
else{var m=prices.DT.getMonth()+D6s.U8M;if(D6s.U96(m,P9q))m=J7J+m;var d=prices.DT.getDate();if(D6s.S96(d,P9q))d=J7J+d;var h=prices.DT.getHours();if(D6s.O96(h,P9q))h=J7J+h;var mn=prices.DT.getMinutes();if(D6s.F96(mn,P9q))mn=J7J+mn;if((D6s.i96(h,B8J)&&D6s.j96(mn,B8J))||STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML=m+a0J+d+a0J+prices.DT.getFullYear();else this.controls.floatDate.innerHTML=m+a0J+d+w4J+h+N2q+mn;}
}
else if(prices&&prices.index){this.controls.floatDate.innerHTML=prices.index;}
else{this.controls.floatDate.innerHTML=D5J;}
}
this.runAppend(p1J,arguments);}
;STXChart.prototype.setCrosshairColors=function(){return ;}
;STXChart.prototype.magnetize=function(){var W8M="agnetize";this.magnetizedPrice=null;if(this.runPrepend("magnetize",arguments))return ;if((D6s.C96(this.currentVectorParameters.vectorType,"annotation")||D6s.M96(this.currentVectorParameters.vectorType,"callout"))&&STXChart.drawingLine)return ;if(D6s.e96(this.currentVectorParameters.vectorType,"projection"))return ;if(D6s.k96(this.currentVectorParameters.vectorType,"freeform"))return ;var panel=this.currentPanel;if(D6s.q96(panel.name,panel.chart.name)){var chart=panel.chart,tick=this.tickFromPixel(D6s.G96(STXChart.crosshairX,this.left),chart);if(D6s.D96(tick,chart.dataSet.length))return ;var prices=chart.dataSet[tick];if(!prices)return ;var price=this.valueFromPixel(this.cy,panel);this.magnetizedPrice=prices.Close;if(D6s.m96(this.layout.chartType,"bar")||D6s.s16(this.layout.chartType,"candle")||D6s.w16(this.layout.chartType,"colored_bar")||D6s.u16(this.layout.chartType,"hollow_candle")){var fields=["Open","High","Low","Close"],closest=1000000000;for(var i=0;D6s.Q16(i,fields.length);i++){var fp=prices[fields[i]];if(D6s.L16(Math.abs(price-fp),closest)){closest=Math.abs(D6s.W16(price,fp));this.magnetizedPrice=fp;}
}
}
var x=this.pixelFromTick(tick,chart),y=this.pixelFromPrice(this.magnetizedPrice,this.currentPanel),ctx=this.chart.tempCanvas.context;ctx.beginPath();ctx.lineWidth=1;var radius=D6s.I16(Math.max(this.layout.candleWidth,8),2);ctx.arc(x,y,radius,0,D6s.v16(2,Math.PI),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this.runAppend((Z7J+W8M),arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){if(!this.currentPanel)return ;var chart=this.currentPanel.chart,rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.cy=this.backOutY(STXChart.crosshairY);this.cx=this.backOutX(STXChart.crosshairX);this.controls.crossX.style.left=(D6s.A16(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.backOutY(STXChart.crosshairY)+"px";this.updateChartAccessories();}
;STXChart.prototype.doDisplayCrosshairs=function(){var z4J="crosshair",i6J="doDisplayCrosshairs";if(this.runPrepend(i6J,arguments))return ;if(this.displayInitialized){if(!this.layout.crosshair&&(D6s.E16(this.currentVectorParameters.vectorType,D5J)||!this.currentVectorParameters.vectorType)){this.undisplayCrosshairs();}
else if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.undisplayCrosshairs();}
else{if(D6s.P16(this.controls.crossX.style.display,D5J)){this.controls.crossX.style.display=D5J;this.controls.crossY.style.display=D5J;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){document.body.style.cursor=O2q;}
else{document.body.style.cursor=z4J;}
}
if(this.controls.floatDate){this.controls.floatDate.style.display=p9J;}
}
}
this.runAppend(i6J,arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var c6J="undisplayCrosshairs";if(this.runPrepend(c6J,arguments))return ;if(this.controls.crossX){if(D6s.f16(this.controls.crossX.style.display,O2q)){this.controls.crossX.style.display=O2q;this.controls.crossY.style.display=O2q;}
}
if(this.displayInitialized&&this.controls.floatDate){this.controls.floatDate.style.display=O2q;}
document.body.style.cursor=K3J;if(this.floatCanvas)STX.clearCanvas(this.floatCanvas,this);this.runAppend(c6J,arguments);}
;STXChart.prototype.modalBegin=function(){var B3J="modal";this.openDialog=B3J;this.undisplayCrosshairs();}
;STXChart.prototype.modalEnd=function(){this.cancelTouchSingleClick=J8J;this.openDialog=D5J;this.doDisplayCrosshairs();}
;STXChart.prototype.updateChartAccessories=function(){this.accessoryTimer=u8J;this.lastAccessoryUpdate=new Date().getTime();var floatDate=this.controls.floatDate;if(floatDate){var panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(panel){var chart=panel.chart,tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);floatDate.style.left=(D6s.g16(this.pixelFromTick(tick,chart),(floatDate.offsetWidth/D6s.B8M),b4J))+g9q;floatDate.style.bottom=(D6s.q16(this.chart.canvasHeight,chart.panel.bottom))+g9q;}
}
this.headsUpHR();}
;STXChart.prototype.mousemove=function(e$){var e=e$?e$:event;if(!e.pageX){e.pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;e.pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;}
STXChart.crosshairX=e.pageX;STXChart.crosshairY=e.pageY;if(this.runPrepend(g4J,arguments))return ;if(!this.displayInitialized)return ;if(D6s.G16(this.openDialog,D5J))return ;this.mousemoveinner(e.pageX,e.pageY);this.runAppend((Z7J+e4J+M0J+l2J+Z7J+F4J+l2J),arguments);}
;STXChart.prototype.setResizeTimer=function(ms){this.resizeDetectMS=ms;function closure(self){return function(){if(!self.chart.canvas)return ;if(!STX.isAndroid){if(D6s.D16(self.chart.canvas.height,Math.floor(self.devicePixelRatio*self.chart.container.clientHeight))||D6s.m16(self.chart.canvas.width,Math.floor(self.devicePixelRatio*self.chart.container.clientWidth))){self.resizeChart();return ;}
}
}
;}
if(ms){if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=window.setInterval(closure(this),ms);}
else{if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=null;}
}
;STXChart.prototype.whichYAxis=function(panel,x){if(typeof x==="undefined")x=this.cx;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;D6s.s26(i,arr.length);i++){var yAxis=arr[i];if(D6s.w26(yAxis.left,x)&&D6s.u26(yAxis.left+yAxis.width,x))return yAxis;}
return this.chart.panel.yAxis;}
;STXChart.prototype.mousemoveinner=function(epX,epY){if(!this.chart.canvas)return ;if(!STX.isAndroid){if(D6s.Q26(this.chart.canvas.height,Math.floor(this.devicePixelRatio*this.chart.container.clientHeight))||D6s.L26(this.chart.canvas.width,Math.floor(this.devicePixelRatio*this.chart.container.clientWidth))){this.resizeChart();return ;}
}
if(this.runPrepend("mousemoveinner",arguments))return ;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;STXChart.crosshairX=epX;STXChart.crosshairY=epY;var cy=this.cy=this.backOutY(STXChart.crosshairY),cx=this.cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentPanel)this.currentPanel=this.chart.panel;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;if(chart.dataSet){this.crosshairTick=this.tickFromPixel(cx,chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(cy,this.currentPanel));}
if(D6s.W26(STXChart.crosshairX,this.left)&&D6s.I26(STXChart.crosshairX,this.right)&&D6s.v26(STXChart.crosshairY,this.top)&&D6s.A26(STXChart.crosshairY,this.bottom)){STXChart.insideChart=true;}
else{STXChart.insideChart=false;}
this.overXAxis=D6s.E26(STXChart.crosshairY,this.top+this.chart.panel.yAxis.bottom)&&D6s.P26(STXChart.crosshairY,this.top+this.chart.panel.bottom)&&STXChart.insideChart;this.overYAxis=(D6s.f26(this.cx,this.currentPanel.right)||D6s.g26(this.cx,this.currentPanel.left))&&STXChart.insideChart;if(this.overXAxis||this.overYAxis||(!STXChart.insideChart&&!this.grabbingScreen)){this.undisplayCrosshairs();if(!this.overXAxis&&!this.overYAxis)return ;}
if(!this.displayCrosshairs&&!STXChart.resizingPanel){this.undisplayCrosshairs();return ;}
var bHandle=this.controls.baselineHandle;if(this.repositioningBaseline){panel=this.panels[this.chart.panel.name];this.chart.baseline.userLevel=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(D6s.Z26(Date.now()-this.repositioningBaseline.lastDraw,100)){this.draw();this.repositioningBaseline.lastDraw=Date.now();}
return ;}
if(this.grabbingScreen&&!STXChart.resizingPanel){if(this.anyHighlighted){STX.clearCanvas(this.chart.tempCanvas,this);this.anyHighlighted=false;var n;for(n in this.overlays){this.overlays[n].highlight=false;}
for(n in chart.series){chart.series[n].highlight=false;}
this.displaySticky();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
if(this.grabStartX==-1){this.grabStartX=STXChart.crosshairX;this.grabStartScrollX=chart.scroll;}
if(this.grabStartY==-1){this.grabStartY=STXChart.crosshairY;this.grabStartScrollY=chart.panel.yAxis.scroll;}
var dx=D6s.N26(STXChart.crosshairX,this.grabStartX),dy=D6s.t26(STXChart.crosshairY,this.grabStartY);if(D6s.T26(dx,0)&&D6s.V26(dy,0))return ;if(D6s.K46(Math.abs(dx)+Math.abs(dy),5))this.grabOverrideClick=true;var push;if(this.allowZoom&&D6s.r46(this.grabMode,"pan")&&(D6s.z46(this.grabMode.indexOf("zoom"),0)||this.ctrl||this.overXAxis||this.overYAxis)){if(D6s.J46(this.grabMode,"")){if(this.overXAxis)this.grabMode="zoom-x";else if(this.overYAxis)this.grabMode="zoom-y";}
if(D6s.y46(this.grabMode,"zoom-x"))dy=0;else if(D6s.h46(this.grabMode,"zoom-y"))dx=0;push=D6s.x46(dx,25);var centerMe=true;if(D6s.Y46(chart.scroll,chart.maxTicks))centerMe=false;var newCandleWidth=this.grabStartCandleWidth+push;if(D6s.a46(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var pct=D6s.o46((this.layout.candleWidth-newCandleWidth),this.layout.candleWidth);if(D6s.H46(pct,0.1)){newCandleWidth=D6s.d46(this.layout.candleWidth,0.9);}
else if(pct<-0.1){newCandleWidth=D6s.c46(this.layout.candleWidth,1.1);}
if(STX.ipad){if(D6s.l46(Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1,STXChart.ipadMaxTicks)&&D6s.R46(Math.round((this.chart.width/newCandleWidth)-0.499)-1,STXChart.ipadMaxTicks))return ;}
var newMaxTicks;if(this.pinchingCenter){var x=this.backOutX(this.pinchingCenter),tick1=this.tickFromPixel(x,chart);this.setCandleWidth(newCandleWidth,chart);var newTick=this.tickFromPixel(x,chart);chart.scroll+=Math.floor((D6s.p46(newTick,tick1)));}
else if(centerMe){newMaxTicks=Math.round(D6s.b46((this.chart.width/newCandleWidth),0.499));if(D6s.X36(newMaxTicks,chart.maxTicks)){this.setCandleWidth(newCandleWidth,chart);var center=D6s.n36(chart.scroll,chart.maxTicks/2),newCenter=(D6s.B36(chart.scroll,chart.maxTicks/2));chart.scroll+=Math.round(D6s.U36(center,newCenter));}
}
else{newMaxTicks=Math.round(D6s.S36((this.chart.width/newCandleWidth),0.499));if(D6s.O36(newMaxTicks,Math.round((this.chart.width/this.layout.candleWidth)-0.499))){this.setCandleWidth(newCandleWidth,chart);var wsInTicks=Math.round(D6s.F36(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=D6s.i36(chart.maxTicks,wsInTicks);}
}
this.layout.span=null;var yAxis=this.whichYAxis(this.grabbingPanel,this.cx);yAxis.zoom=Math.round(this.grabStartZoom+dy);if(D6s.j36(this.grabStartZoom,yAxis.height)){if(D6s.C36(yAxis.zoom,yAxis.height))yAxis.zoom=D6s.M36(yAxis.height,1);}
else{if(D6s.e36(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
}
else{if(this.allowScroll){if(D6s.k36(Math.abs(dy),this.yTolerance)){if(!this.yToleranceBroken){dy=0;if(D6s.q36(dx,0))return ;}
}
else{this.yToleranceBroken=true;}
this.grabMode="pan";push=Math.round(D6s.G36(dx,this.layout.candleWidth));this.microscroll=D6s.D36(push,(dx/this.layout.candleWidth));this.micropixels=this.layout.candleWidth*this.microscroll*-1;if(this.shift)push*=5;chart.scroll=this.grabStartScrollX+push;if(D6s.m36(chart.scroll,1))chart.scroll=1;if(D6s.s56(chart.scroll,chart.maxTicks)){this.preferences.whitespace=30;}
else{this.preferences.whitespace=D6s.w56((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
if(D6s.u56(this.currentPanel.name,chart.name)){this.chart.panel.yAxis.scroll=this.grabStartScrollY+dy;}
}
if(this.callbacks.move){(this.callbacks.move)({stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
}
var clsrFunc=function(stx){return function(){stx.draw();}
;}
;if(STXChart.useAnimation&&window.requestAnimationFrame){window.requestAnimationFrame(clsrFunc(this));}
else{this.draw();}
if(this.activeDrawing){STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.render(this.chart.tempCanvas.context);this.activeDrawing.measure();}
this.undisplayCrosshairs();return ;}
else{this.grabMode="";}
this.grabbingPanel=this.currentPanel;if(this.overXAxis||this.overYAxis)return ;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.controls.crossX.style.left=(D6s.Q56(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.cy+"px";this.setCrosshairColors();if(STXChart.insideChart&&!STXChart.resizingPanel){if(!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.doDisplayCrosshairs();}
if(D6s.L56(this.accessoryTimer,null))clearTimeout(this.accessoryTimer);if(STXChart.drawingLine||!STX.touchDevice){this.updateChartAccessories();}
else{if(D6s.W56(new Date().getTime()-this.lastAccessoryUpdate,100))this.updateChartAccessories();this.accessoryTimer=setTimeout((function(stx){return function(){stx.updateChartAccessories();}
;}
)(this),10);}
}
else{this.undisplayCrosshairs();}
var panel,value;if(this.repositioningDrawing){panel=this.panels[this.repositioningDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&D6s.I56(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing.reposition(this.chart.tempCanvas.context,this.repositioningDrawing.repositioner,this.crosshairTick,value);if(this.repositioningDrawing.measure)this.repositioningDrawing.measure();}
else if(STXChart.drawingLine){if(this.activeDrawing){panel=this.panels[this.activeDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&D6s.v56(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.activeDrawing.move(this.chart.tempCanvas.context,this.crosshairTick,value);if(this.activeDrawing.measure)this.activeDrawing.measure();}
}
else if(STXChart.resizingPanel){this.resizePanels();this.drawTemporaryPanel();}
else if(STXChart.insideChart){this.findHighlights();}
if(STXChart.insideChart){if(this.callbacks.move){(this.callbacks.move)({stx:this,panel:this.currentPanel,x:this.cx,y:this.cy,grab:this.grabbingScreen}
);}
this.findHighlights();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){if(!STXChart.drawingLine&&!this.anyHighlighted)STX.clearCanvas(this.chart.tempCanvas);this.magnetize();}
this.runAppend("mousemoveinner",arguments);}
;STXChart.prototype.findHighlights=function(isTap,clearOnly){var radius=10;if(isTap)radius=30;var cy=this.cy,cx=this.cx;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.anyHighlighted=false;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
var somethingChanged=false,drawingToMeasure=null,stickyArgs=["","",true],box={x0:this.tickFromPixel(D6s.A56(cx,radius),chart),x1:this.tickFromPixel(cx+radius,chart),y0:this.valueFromPixelUntransform(D6s.E56(cy,radius),this.currentPanel),y1:this.valueFromPixelUntransform(cy+radius,this.currentPanel)}
;for(var i=0;D6s.P56(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.permanent)continue;var prevHighlight=drawing.highlighted,highlightMe=(D6s.f56(drawing.panelName,this.currentPanel.name));drawing.repositioner=drawing.intersected(this.crosshairTick,this.crosshairValue,box);highlightMe=highlightMe&&drawing.repositioner;if(!clearOnly&&highlightMe){if(prevHighlight){drawingToMeasure=drawing;}
else if(D6s.g56(prevHighlight,drawing.highlight(true))){if(!drawingToMeasure)drawingToMeasure=drawing;somethingChanged=true;}
this.anyHighlighted=true;}
else{if(D6s.Z56(prevHighlight,drawing.highlight(false))){somethingChanged=true;}
}
}
var first=false,n,o,series;for(n in this.overlays){o=this.overlays[n];o.prev=o.highlight;o.highlight=false;}
for(n in chart.seriesRenderers){var r=chart.seriesRenderers[n];for(var j=0;D6s.N56(j,r.seriesParams.length);j++){series=r.seriesParams[j];series.prev=series.highlight;series.highlight=false;}
}
if(!clearOnly){var bar=this.barFromPixel(cx);if(D6s.t56(bar,chart.dataSegment.length)){var y;for(n in this.overlays){o=this.overlays[n];if(D6s.T56(o.panel,this.currentPanel.name))continue;if(o.libraryEntry.isHighlighted&&o.libraryEntry.isHighlighted(this,cx,cy)){o.highlight=true;this.anyHighlighted=true;continue;}
var quote=chart.dataSegment[bar];if(!quote)continue;for(var out in this.overlays[n].outputMap){var val=quote[out];y=0;if(D6s.V56(this.currentPanel.name,chart.name)){y=this.pixelFromPriceTransform(val,this.currentPanel);}
else{y=this.pixelFromPrice(val,this.currentPanel);}
if(D6s.K06(cy-radius,y)&&D6s.r06(cy+radius,y)){o.highlight=true;this.anyHighlighted=true;break;}
}
}
for(n in chart.seriesRenderers){var renderer=chart.seriesRenderers[n];if(!renderer.params.highlightable)continue;for(var m=0;D6s.z06(m,renderer.seriesParams.length);m++){series=renderer.seriesParams[m];y=renderer.caches[series.field][bar];if(!y&&D6s.J06(y,0))continue;if(D6s.y06(cy-radius,y)&&D6s.h06(cy+radius,y)){series.highlight=true;this.anyHighlighted=true;}
else if((D6s.x06(renderer.params.subtype,"step")||D6s.Y06(series.type,"step"))&&D6s.a06(bar,0)){var py=renderer.caches[series.field][D6s.o06(bar,1)];if((D6s.H06(cy,y)&&D6s.d06(cy,py))||(D6s.c06(cy,y)&&D6s.l06(cy,py))){series.highlight=true;this.anyHighlighted=true;}
}
}
}
}
}
for(n in this.overlays){o=this.overlays[n];if(o.highlight){this.anyHighlighted=true;stickyArgs=[o.study.display?o.study.display:o.name];drawingToMeasure=null;}
if(D6s.R06(o.prev,o.highlight)){this.draw();somethingChanged=true;break;}
}
for(n in chart.seriesRenderers){var r2=chart.seriesRenderers[n];if(!r2.params.highlightable)continue;for(var m2=0;D6s.p06(m2,r2.seriesParams.length);m2++){series=r2.seriesParams[m2];if(series.highlight){this.anyHighlighted=true;stickyArgs=[series.display,series.color,false,series.permanent];drawingToMeasure=null;}
if(D6s.b06(series.prev,series.highlight)){this.draw();somethingChanged=true;break;}
}
}
if(somethingChanged){this.draw();this.displaySticky.apply(this,stickyArgs);this.clearMeasure();if(drawingToMeasure)drawingToMeasure.measure();}
if(!this.anyHighlighted){this.setMeasure();}
}
;STXChart.prototype.positionSticky=function(m){var top=Math.max(D6s.X76(this.backOutY(STXChart.crosshairY),m.offsetHeight,I1q),D6s.J8M),right=Math.min(D6s.r76(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-E1q)),D6s.z76(this.chart.canvasWidth,m.offsetWidth));m.style.top=top+g9q;m.style.right=right+g9q;}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow,noDelete){var m=this.controls.mSticky;if(!m)return ;var mi=m.children[D6s.J8M];if(!mi)return ;var overlayTrashCan=m.children[D6s.U8M],mouseDeleteInstructions=m.children[D6s.B8M];if(!forceShow&&!message){mi.innerHTML=D5J;m.style.display=(W7J+K5J+l2J);if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=O2q;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=O2q;}
}
else{if(!message)message=D5J;if(forceShow&&!message){mi.style.backgroundColor=D5J;mi.style.color=D5J;mi.style.display=O2q;}
else if(backgroundColor){mi.style.backgroundColor=backgroundColor;mi.style.color=STX.chooseForegroundColor(backgroundColor);mi.style.display=q2J;}
else{mi.style.backgroundColor=D5J;mi.style.color=D5J;mi.style.display=q2J;}
mi.innerHTML=message;m.style.display=(Q4q+o7J+c8J+W7J+l2J+a0J+U2J+b8J+Z4J);this.positionSticky(m);if(noDelete){overlayTrashCan.style.display=O2q;mouseDeleteInstructions.style.display=O2q;}
else if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=q2J;mouseDeleteInstructions.style.display=O2q;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=p9J;}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var A9q="eL",T0J="measureLit",J1J="Bars",w5J="setMeasure";if(this.runPrepend(w5J,arguments))return ;var m=$$(y1q),message=D5J;if(!price1){if(m&&D6s.J76(m.className,D4J))m.className=D4J;if(!this.anyHighlighted&&D6s.y76(this.currentVectorParameters.vectorType,D5J))this.clearMeasure();}
else{var distance=D6s.h76(Math.round(Math.abs(price1-price2)*this.chart.roundit),this.chart.roundit);if(this.internationalizer){message+=this.internationalizer.numbers.format(distance);}
else{message+=distance;}
var pct=D6s.x76((price2-price1),price1);if(D6s.Y76(Math.abs(pct),w3J)){pct=Math.round(D6s.a76(pct,i2q));}
else if(D6s.o76(Math.abs(pct),M8M)){pct=D6s.H76(Math.round(pct*z2q),P9q);}
else{pct=D6s.d76(Math.round(pct*T1q),i2q);}
if(this.internationalizer){pct=this.internationalizer.percent.format(D6s.c76(pct,i2q));}
else{pct=pct+y8J;}
message+=o1J+pct+L6q;var ticks=Math.abs(D6s.l76(tick2,tick1));ticks=Math.round(ticks)+D6s.U8M;var barsStr=J1J;if(this.translationCallback)barsStr=this.translationCallback(barsStr);message+=w4J+ticks+w4J+barsStr;if(m){if(D6s.R76(m.className,T0J))m.className=(Z7J+A7J+M0J+w0J+F0J+A9q+R1q);m.innerHTML=message;}
}
if(this.activeDrawing)return ;m=this.controls.mSticky;if(hover){m.style.display=q2J;m.children[D6s.J8M].style.display=q2J;if(price1){m.children[D6s.J8M].innerHTML=message;if(STX.touchDevice){m.children[D6s.U8M].style.display=q2J;if(m.children[D6s.B8M])m.children[D6s.B8M].style.display=O2q;}
else{m.children[D6s.U8M].style.display=O2q;if(m.children[D6s.B8M])m.children[D6s.B8M].style.display=p9J;}
}
this.positionSticky(m);}
else{m.style.display=O2q;m.children[D6s.J8M].innerHTML=D5J;}
this.runAppend(w5J,arguments);}
;STXChart.prototype.clearMeasure=function(){var m=$$(y1q);if(m){if(D6s.p76(m.className,D4J))m.className=D4J;m.innerHTML=D5J;}
}
;STXChart.prototype.drawTemporaryPanel=function(){var p9q="stx_panel_drag",borderEdge=Math.round(D6s.b76(STXChart.resizingPanel.right,D6s.r8M))+b4J;STX.clearCanvas(this.chart.tempCanvas,this);var y=D6s.X86(STXChart.crosshairY,this.top);this.plotLine(STXChart.resizingPanel.left,borderEdge,y,y,this.canvasStyle(p9q),L6J,this.chart.tempCanvas.context,c1q,{}
);STXChart.resizingPanel.handle.style.top=(D6s.n86(y,STXChart.resizingPanel.handle.offsetHeight/D6s.B8M))+g9q;}
;STXChart.prototype.setTrashCan=function(){if(STX.touchDevice){var m=this.controls.mSticky;if(m){m.style.display=q2J;m.children[D6s.J8M].style.display=O2q;m.children[D6s.U8M].style.display=q2J;if(m.children[D6s.B8M])m.children[D6s.B8M].style.display=O2q;m.style.top=(D6s.B86(this.backOutY(STXChart.crosshairY),I1q))+g9q;m.style.right=D6s.U86(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-E1q),g9q);}
}
}
;STXChart.prototype.pixelFromBar=function(bar,chart){if(!chart)chart=this.chart;var x=chart.left+Math.round((D6s.y86(bar,this.layout.candleWidth))+D6s.h86(this.layout.candleWidth,D6s.r8M))+this.micropixels;return x;}
;STXChart.prototype.barFromPixel=function(x,chart){if(!chart)chart=this.chart;return Math.floor(D6s.x86((x-chart.left-this.micropixels),this.layout.candleWidth));}
;STXChart.prototype.tickFromPixel=function(x,chart){if(!chart)chart=this.chart;var left=D6s.Y86(chart.dataSet.length,chart.scroll,1),tick=left+Math.floor(D6s.E86((x-chart.left-this.micropixels),this.layout.candleWidth));return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){if(!chart)chart=this.chart;return chart.left+D6s.P86((tick-chart.dataSet.length+chart.scroll-1),this.layout.candleWidth)+this.offset+this.micropixels;}
;STXChart.prototype.pixelFromDate=function(date,chart){return this.pixelFromTick(this.tickFromDate(date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel,yAxis){if(!panel)panel=this.chart.panel;var chart=panel.chart,yax=yAxis?yAxis:panel.yAxis;y=D6s.f86(yax.bottom,y);var price=yax.low+(D6s.g86(y,yax.multiplier));if(yax.semiLog){var logPrice=yax.logLow+(D6s.Z86(y,yax.logShadow,yax.height));price=Math.pow(10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);var p=this.priceFromPixel(y,panel,yAxis);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);if(!panel){if(D6s.G86(y,D6s.J8M)){panel=this.panels[STX.first(this.panels)];}
else{panel=this.panels[STX.last(this.panels)];}
}
var p=this.priceFromPixel(y,panel,yAxis);if(panel.chart.untransformFunc&&D6s.D86(panel.name,panel.chart.name)){p=panel.chart.untransformFunc(this,panel.chart,p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel,yAxis){if(panel.chart.transformFunc)price=panel.chart.transformFunc(this,panel.chart,price,yAxis);return this.pixelFromPrice(price,panel,yAxis);}
;STXChart.prototype.pixelFromPrice=function(price,panel,yAxis){if(!panel)panel=this.chart.panel;var yax=yAxis?yAxis:panel.yAxis,y=D6s.m86((yax.high-price),yax.multiplier);if(yax.semiLog){var logPrice=D6s.s6F(Math.log(price),Math.LN10);if(D6s.w6F(price,0))logPrice=0;var height=yax.height;y=D6s.u6F(height,height*(logPrice-yax.logLow)/yax.logShadow);}
y+=yax.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value,yAxis){if(this.layout.adj||!this.charts[panel.name])return this.pixelFromPriceTransform(value,panel,yAxis);var a=Math.round(tick);if(D6s.Q6F(a,0)&&D6s.L6F(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return this.pixelFromPriceTransform(D6s.W6F(value,ratio),panel,yAxis);}
return this.pixelFromPriceTransform(value,panel,yAxis);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){if(this.layout.adj)return value;if(!panel||!this.charts[panel.name])return value;var a=Math.round(tick);if(D6s.I6F(a,0)&&D6s.v6F(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return D6s.A6F(value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart.transformFunc=transformFunction;chart.untransformFunc=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){delete  chart.transformFunc;delete  chart.untransformFunc;for(var i=0;D6s.E6F(i,chart.dataSet.length);i++){chart.dataSet[i].transform=null;}
}
;STXChart.prototype.undo=function(){var u0J="undo";if(this.runPrepend(u0J,arguments))return ;if(this.activeDrawing){this.activeDrawing.abort();this.activeDrawing=u8J;STX.clearCanvas(this.chart.tempCanvas,this);this.draw();STX.swapClassName(this.controls.crossX,A1J,u2J);STX.swapClassName(this.controls.crossY,A1J,u2J);STXChart.drawingLine=c1q;}
this.runAppend(u0J,arguments);}
;STXChart.prototype.undoStamp=function(){this.undoStamps.push(STX.shallowClone(this.drawingObjects));}
;STXChart.prototype.undoLast=function(){if(this.activeDrawing){this.undo();}
else{if(this.undoStamps.length){this.drawingObjects=this.undoStamps.pop();this.draw();}
}
}
;STXChart.prototype.addDrawing=function(drawing){this.undoStamp();this.drawingObjects.push(drawing);}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(D6s.P6F(parameters.pattern,"none"))return ;if(D6s.f6F(confineToPanel,true))confineToPanel=this.chart.panel;if(D6s.g6F(context,null)||typeof (context)=="undefined")context=this.chart.context;if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.right;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;edgeLeft=confineToPanel.left;edgeRight=confineToPanel.right;}
var bigX,bigY,v;if(D6s.Z6F(type,"ray")){bigX=10000000;if(D6s.N6F(x1,x0))bigX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);x1=bigX;y1=bigY;}
if(D6s.t6F(type,"line")||D6s.T6F(type,"horizontal")||D6s.V6F(type,"vertical")){bigX=10000000;var littleX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);var littleY=STX.yIntersection(v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=D6s.K9F(x1,x0),ydelta=D6s.r9F(y1,y0),p,q,r;for(var edge=0;D6s.z9F(edge,4);edge++){if(D6s.J9F(edge,0)){p=-xdelta;q=-(D6s.y9F(edgeLeft,x0));}
if(D6s.h9F(edge,1)){p=xdelta;q=(D6s.x9F(edgeRight,x0));}
if(D6s.Y9F(edge,2)){p=-ydelta;q=-(D6s.a9F(edgeTop,y0));}
if(D6s.o9F(edge,3)){p=ydelta;q=(D6s.H9F(edgeBottom,y0));}
r=D6s.d9F(q,p);if((y1||D6s.c9F(y1,0))&&D6s.l9F(p,0)&&D6s.R9F(q,0)){return false;}
if(D6s.p9F(p,0)){if(D6s.b9F(r,t1))return false;else if(D6s.X1F(r,t0))t0=r;}
else if(D6s.n1F(p,0)){if(D6s.B1F(r,t0))return false;else if(D6s.U1F(r,t1))t1=r;}
}
var x0clip=x0+D6s.S1F(t0,xdelta),y0clip=y0+D6s.O1F(t0,ydelta),x1clip=x0+D6s.F1F(t1,xdelta),y1clip=y0+D6s.i1F(t1,ydelta);if(!y1&&D6s.j1F(y1,0)&&!y0&&D6s.C1F(y0,0)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v.x0;x1clip=v.x0;if(D6s.M1F(v.x0,edgeRight))return false;if(D6s.e1F(v.x0,edgeLeft))return false;}
else if(!y1&&D6s.k1F(y1,0)){if(D6s.q1F(v.y0,v.y1))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v.x0;x1clip=v.x0;if(D6s.G1F(v.x0,edgeRight))return false;if(D6s.D1F(v.x0,edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||D6s.m1F(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(D6s.s2F(type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(D6s.w2F(pattern,"solid")){pattern=null;}
else if(D6s.u2F(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(D6s.Q2F(pattern,"dashed")){pattern=[D6s.L2F(context.lineWidth,5),D6s.W2F(context.lineWidth,5)];}
}
context.stxLine(x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){var c9q="bj";if(!parameters)parameters={}
;if(D6s.I2F(parameters.pattern,"none"))return ;if(D6s.v2F(confineToPanel,true))confineToPanel=this.chart.panel;if(D6s.A2F(context,null)||typeof (context)=="undefined")context=this.chart.context;if(D6s.E2F(points.length,4))return ;var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.chart.width;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)==(Y7J+c9q+l2J+K2J)){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||D6s.P2F(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(D6s.f2F(pattern,"solid")){pattern=null;}
else if(D6s.g2F(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(D6s.Z2F(pattern,"dashed")){pattern=[D6s.N2F(context.lineWidth,5),D6s.t2F(context.lineWidth,5)];}
}
context.beginPath();for(var i=0;D6s.T2F(i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=D6s.V2F(x1,x0),ydelta=D6s.K4F(y1,y0),p,q,r;for(var edge=0;D6s.r4F(edge,4);edge++){if(D6s.z4F(edge,0)){p=-xdelta;q=-(D6s.J4F(edgeLeft,x0));}
if(D6s.y4F(edge,1)){p=xdelta;q=(D6s.h4F(edgeRight,x0));}
if(D6s.x4F(edge,2)){p=-ydelta;q=-(D6s.Y4F(edgeTop,y0));}
if(D6s.a4F(edge,3)){p=ydelta;q=(D6s.o4F(edgeBottom,y0));}
r=D6s.H4F(q,p);if((y1||D6s.d4F(y1,0))&&D6s.c4F(p,0)&&D6s.l4F(q,0)){return false;}
if(D6s.R4F(p,0)){if(D6s.p4F(r,t1))return false;else if(D6s.b4F(r,t0))t0=r;}
else if(D6s.X3F(p,0)){if(D6s.n3F(r,t0))return false;else if(D6s.B3F(r,t1))t1=r;}
}
var x0clip=x0+D6s.U3F(t0,xdelta),y0clip=y0+D6s.S3F(t0,ydelta),x1clip=x0+D6s.O3F(t1,xdelta),y1clip=y0+D6s.F3F(t1,ydelta);try{if(pattern){context.dashedLineTo(x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(D6s.i3F(parameters.pattern,(W7J+Y7J+H1q)))return ;if(D6s.j3F(confineToPanel,true))confineToPanel=this.chart.panel;if(D6s.C3F(context,null)||typeof (context)=="undefined")context=this.chart.context;context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||D6s.M3F(color,(x2J+w0J+M8J))||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(D6s.e3F(pattern,"solid")){pattern=null;}
else if(D6s.k3F(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(D6s.q3F(pattern,"dashed")){pattern=[D6s.G3F(context.lineWidth,5),D6s.D3F(context.lineWidth,5)];}
}
if(pattern&&context.setLineDash){context.setLineDash(pattern);context.lineDashOffset=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var q1J="r_draw",t3J="ai",q2q="ro",u6J="x_c",s2J="drawing";if(!this.activeDrawing){if(!panel)return ;var Factory=STXChart.drawingTools[this.currentVectorParameters.vectorType];if(!Factory){if(STX.Drawing[this.currentVectorParameters.vectorType]){Factory=STX.Drawing[this.currentVectorParameters.vectorType];STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);}
}
if(Factory){this.activeDrawing=new Factory();this.activeDrawing.construct(this,panel);if(!this.charts[panel.name]){if(this.activeDrawing.chartsOnly){this.activeDrawing=u8J;return ;}
}
}
}
if(this.activeDrawing){if(this.userPointerDown&&!this.activeDrawing.dragToDraw){if(!STXChart.drawingLine)this.activeDrawing=u8J;return ;}
var tick=this.tickFromPixel(x,panel.chart),dpanel=this.panels[this.activeDrawing.panelName],value=this.adjustIfNecessary(dpanel,tick,this.valueFromPixelUntransform(y,dpanel));if(this.preferences.magnet&&this.magnetizedPrice){value=this.adjustIfNecessary(dpanel,tick,this.magnetizedPrice);}
if(this.activeDrawing.click(this.chart.tempCanvas.context,tick,value)){if(this.activeDrawing){STXChart.drawingLine=c1q;STX.clearCanvas(this.chart.tempCanvas,this);this.addDrawing(this.activeDrawing);this.activeDrawing=u8J;this.adjustDrawings();this.draw();this.changeOccurred(C9J);STX.swapClassName(this.controls.crossX,A1J,u2J);STX.swapClassName(this.controls.crossY,A1J,u2J);}
}
else{this.changeOccurred(s2J);STXChart.drawingLine=J8J;STX.swapClassName(this.controls.crossX,u2J,A1J);STX.swapClassName(this.controls.crossY,(o2J+u6J+q2q+M0J+M0J+a8J+t3J+q1J+c8J+E7J),A1J);}
return J8J;}
return c1q;}
;STXChart.prototype.whichPanel=function(y){for(var p in this.panels){var panel=this.panels[p];if(panel.hidden)continue;if(D6s.m3F(y,panel.top)&&D6s.s5F(y,panel.bottom))return panel;}
return u8J;}
;STXChart.prototype.mouseup=function(e){if(this.runPrepend(x1q,arguments))return ;if(this.repositioningDrawing){if(!this.currentVectorParameters.vectorType||(D6s.w5F(Date.now()-this.mouseTimer,B4q))){this.changeOccurred(C9J);STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=u8J;this.adjustDrawings();this.draw();return ;}
else{this.repositioningDrawing=c1q;}
}
if(this.repositioningBaseline){this.repositioningBaseline=u8J;this.chart.panel.yAxis.scroll=D6s.u5F(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/D6s.B8M);this.draw();return ;}
var wasMouseDown=this.userPointerDown;this.userPointerDown=c1q;if(!this.displayInitialized)return ;this.grabbingScreen=c1q;if(D6s.Q5F(this.openDialog,D5J))return ;if(this.grabOverrideClick){STX.unappendClassName(document.body,i4J);this.grabOverrideClick=c1q;return ;}
if(STXChart.insideChart)STX.unappendClassName(document.body,i4J);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=u8J;return ;}
if(!e)e=event;if((e.which&&D6s.L5F(e.which,D6s.B8M))||(e.button&&D6s.W5F(e.button,D6s.B8M))){if(this.anyHighlighted){this.rightClickHighlighted();if(e.preventDefault)e.preventDefault();return c1q;}
else{return J8J;}
}
if(!e.pageX){e.pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;e.pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;}
if(D6s.I5F(e.pageX,this.left)||D6s.v5F(e.pageX,this.right))return ;if(D6s.A5F(e.pageY,this.top)||D6s.E5F(e.pageY,this.bottom))return ;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);if(wasMouseDown){this.drawingClick(this.currentPanel,cx,cy);}
if(!this.activeDrawing){if(this.callbacks.tap){(this.callbacks.tap)({stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
this.runAppend(x1q,arguments);}
;STXChart.prototype.grabbingHand=function(){if(!this.allowScroll)return ;if(!this.grabbingScreen)return ;if(STX.touchDevice)return ;STX.appendClassName(document.body,i4J);}
;STXChart.prototype.mousedown=function(e){if(this.runPrepend("mousedown",arguments))return ;this.grabOverrideClick=false;if(D6s.P5F(this.openDialog,""))return ;if(!this.displayInitialized)return ;if(!this.displayCrosshairs)return ;if(!STXChart.insideChart)return ;if(this.manageTouchAndMouse&&e&&e.preventDefault)e.preventDefault();this.mouseTimer=Date.now();this.userPointerDown=true;if(!e)e=event;if((e.which&&D6s.f5F(e.which,2))||(e.button&&D6s.g5F(e.button,2))){return ;}
for(var p in this.panels){var panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
if(!e.pageX){e.pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;e.pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;}
var chart=this.currentPanel.chart;if(D6s.Z5F(e.pageX,this.left)&&D6s.N5F(e.pageX,this.right)&&D6s.t5F(e.pageY,this.top)&&D6s.T5F(e.pageY,this.bottom)){if(this.repositioningDrawing)return ;for(var i=0;D6s.V5F(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){if(this.ctrl){var Factory=STXChart.drawingTools[drawing.name],clonedDrawing=new Factory();clonedDrawing.reconstruct(this,drawing.serialize());this.drawingObjects.push(clonedDrawing);this.repositioningDrawing=clonedDrawing;clonedDrawing.repositioner=drawing.repositioner;return ;}
this.repositioningDrawing=drawing;return ;}
}
if(D6s.K0F(this.layout.chartType,"baseline_delta")&&D6s.r0F(chart.baseline.userLevel,false)){var y0=this.valueFromPixelUntransform(D6s.z0F(this.cy,5),this.currentPanel),y1=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),x0=D6s.J0F(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(D6s.y0F(chart.baseline.actualLevel,y0)&&D6s.h0F(chart.baseline.actualLevel,y1)&&D6s.x0F(this.cx,x0)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
this.drawingClick(this.currentPanel,this.cx,this.cy);if(this.activeDrawing&&this.activeDrawing.dragToDraw)return ;}
this.grabbingScreen=true;this.yToleranceBroken=false;if(!e)e=event;if(!e.pageX){e.pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;e.pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;}
this.grabStartX=e.pageX;this.grabStartY=e.pageY;this.grabStartScrollX=chart.scroll;this.grabStartScrollY=chart.panel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);this.runAppend("mousedown",arguments);}
;STXChart.prototype.changeVectorType=function(value){this.currentVectorParameters.vectorType=value;if(STXChart.drawingLine)this.undo();this.setCrosshairColors();if(STXChart.insideChart)this.doDisplayCrosshairs();}
;STXChart.prototype.rightClickOverlay=function(name){var B0J="rightClickOverlay";if(this.runPrepend(B0J,arguments))return ;var sd=this.overlays[name];if(sd.editFunction){sd.editFunction();}
else{this.removeOverlay(name);}
this.runAppend(B0J,arguments);}
;STXChart.prototype.removeOverlay=function(name){var r5J="removeOverlay";if(this.runPrepend(r5J,arguments))return ;for(var o in this.overlays){var sd=this.overlays[o];if(sd.inputs.Field&&sd.inputs.Field.indexOf(name)!=-D6s.U8M){this.removeOverlay(sd.name);}
}
var study=this.layout.studies[name];delete  this.layout.studies[name];delete  this.overlays[name];STX.deleteRHS(STX.Studies.studyPanelMap,study);this.displaySticky();this.createDataSet();this.changeOccurred(g8M);this.runAppend(r5J,arguments);}
;STXChart.prototype.addSeries=function(field,parameters,cb){if(this.runPrepend("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters.chartName)parameters.chartName=this.chart.name;var obj={parameters:STX.clone(parameters),yValueCache:[],display:field}
;if(D6s.Y0F("display",obj.parameters))obj.display=obj.parameters.display;if(obj.parameters.isComparison)obj.parameters.shareYAxis=true;if(!obj.parameters.chartType&&obj.parameters.color)obj.parameters.chartType="line";if(obj.parameters.chartType&&D6s.a0F(obj.parameters.chartType,"mountain"))obj.parameters.chartType="line";if(!obj.parameters.panel)obj.parameters.panel=this.chart.panel.name;var chart=this.charts[parameters.chartName],self=this;function addSeriesData(stx){var mIterator=0,cIterator=0;while(parameters.data&&D6s.o0F(mIterator,stx.masterData.length)&&D6s.H0F(cIterator,parameters.data.length)){var c=parameters.data[cIterator],m=stx.masterData[mIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);if(D6s.d0F(c.DT.getTime(),m.DT.getTime())){if(typeof c.Value=="undefined"){m[field]=c.Close;}
else{m[field]=c.Value;}
cIterator++;mIterator++;continue;}
if(D6s.c0F(c.DT,m.DT))cIterator++;else mIterator++;}
}
function setUpRenderer(stx,obj){if(obj.parameters.color){var r=stx.getSeriesRenderer("_generic_series");if(!r){r=stx.setSeriesRenderer(new STX.Renderer.Lines({params:{panel:obj.parameters.panel,type:"legacy",name:"_generic_series",overChart:true}
,}
));}
r.attachSeries(field,obj.parameters).ready();}
}
if(chart){chart.series[field]=obj;}
if(parameters.isComparison){self.setComparison(true,chart);}
var doneInCallback=false;if(parameters.data){if(parameters.data.useDefaultQuoteFeed){var driver=this.quoteDriver,fetchParams=driver.makeParams(field,this.chart);fetchParams.startDate=this.chart.masterData[0].DT;fetchParams.endDate=this.chart.masterData[D6s.l0F(this.chart.masterData.length,1)].DT;doneInCallback=true;driver.quoteFeed.fetch(fetchParams,function(dataCallback){if(!dataCallback.error){parameters.data=dataCallback.quotes;addSeriesData(self);setUpRenderer(self,obj);}
if(cb)cb(dataCallback.error);self.runAppend("addSeries",arguments);}
);}
else if(this.masterData){addSeriesData(this);}
}
else{obj.addSeriesData=addSeriesData;}
if(!doneInCallback){setUpRenderer(self,obj);this.runAppend("addSeries",arguments);}
return obj;}
;STXChart.prototype.removeSeries=function(field,chart){if(this.runPrepend("removeSeries",arguments))return ;if(!chart)chart=this.chart;delete  chart.series[field];var compare=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison){compare=true;break;}
}
this.setComparison(compare,chart);for(var panel in this.panels){if(D6s.R0F(this.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=this.layout.studies[this.panels[panel].name].inputs["Compare To"];for(var i=0;D6s.p0F(i,compareArray.length);i++){if(D6s.b0F(compareArray[i],field))compareArray.splice(i,1);}
delete  this.layout.studies[this.panels[panel].name].outputs["Result "+field];delete  this.layout.studies[this.panels[panel].name].outputMap["Result "+field+" "+this.panels[panel].name];if(!compareArray.length)this.panelClose(this.panels[panel]);}
}
this.runAppend("removeSeries",arguments);}
;STXChart.prototype.rendererAction=function(chart,phase){var O9J="cal",e7M="overlay",e0J="rendererAction";if(this.runPrepend(e0J,arguments))return ;for(var id in chart.seriesRenderers){var renderer=chart.seriesRenderers[id];if(renderer.params.overChart&&D6s.X7F(phase,h1J))continue;if(!renderer.params.overChart&&D6s.n7F(phase,e7M))continue;if(D6s.B7F(this.panels[renderer.params.panel].chart,chart))continue;if(D6s.U7F(phase,(O9J+N2J+T1J+x2J+J0J))){renderer.performCalculations();}
else{renderer.draw();if(renderer.cb)renderer.cb(renderer.colors);}
}
this.runAppend(e0J,arguments);}
;STXChart.prototype.drawSeries=function(chart,seriesArray,yAxis){var H2J="ries";if(this.runPrepend("drawSeries",arguments))return ;var quotes=chart.dataSegment,legendColorMap={}
,series=null;if(!seriesArray)seriesArray=chart.series;for(var field in seriesArray){series=seriesArray[field];var parameters=series.parameters;if(!parameters.chartType)continue;var panel=chart.panel;if(parameters.panel)panel=this.panels[parameters.panel];if(!panel)continue;var yax=yAxis?yAxis:panel.yAxis,minMax=[parameters.minimum,parameters.maximum];if((!parameters.minimum&&D6s.S7F(parameters.minimum,0))||(!parameters.maximum&&D6s.O7F(parameters.maximum,0))){var minMaxCalc=STX.minMax(quotes,field);if(!parameters.minimum&&D6s.F7F(parameters.minimum,0))minMax[0]=minMaxCalc[0];if(!parameters.maximum&&D6s.i7F(parameters.maximum,0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yax.top,bottom=yax.bottom,height=D6s.j7F(bottom,top),t=parameters.marginTop,b=parameters.marginBottom;if(t)top=D6s.C7F(t,1)?(top+t):(top+(D6s.M7F(height,t)));if(b)bottom=D6s.e7F(b,1)?(D6s.k7F(bottom,b)):(D6s.q7F(bottom,(height*b)));var multiplier=D6s.G7F((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=null,x=null,y=null,px=null,py=null,cw=this.layout.candleWidth,offset=this.offset,context=this.chart.context,isStep=(D6s.D7F(parameters.type,"step")||D6s.m7F(parameters.subtype,"step")),color=parameters.color;if(!color)color=this.defaultColor;var width=parameters.width;if(!width||isNaN(width)||D6s.s8F(width,1))width=1;if(series.highlight||series.parameters.highlight)width*=2;this.startClip(panel.name);seriesPlotter=new STX.Plotter();seriesPlotter.newSeries("line","stroke",color,1,width);if(parameters.gaps&&parameters.gaps.color)seriesPlotter.newSeries("gap","stroke",parameters.gaps.color,1,width);else seriesPlotter.newSeries("gap","stroke",color,1,width);if(!series.yValueCache||D6s.w8F(series.yValueCache.length,quotes.length))series.yValueCache=new Array(quotes.length);var yValueCache=series.yValueCache,lastQuote=null,gap=null,firstX=null,firstY=null,points=[],doTransform=series.parameters.shareYAxis&&!yAxis,shareYAxis=series.parameters.shareYAxis||yAxis;for(var i=0;D6s.u8F(i,quotes.length);i++){if(D6s.Q8F(x,null)&&D6s.L8F(y,null))points.push([x,y]);var quote=quotes[i];if(!quote)continue;if(quote.transform&&doTransform)quote=quote.transform;val=quote[field];if(!val&&D6s.W8F(val,0)){if(isStep||parameters.gaps){yValueCache[i]=y;}
if(D6s.I8F(gap,false))seriesPlotter.moveTo("gap",x,y);gap=true;continue;}
if(!isStep&&lastPoint&&D6s.v8F(lastPoint,i-1)){px=x;py=y;}
else{px=null;}
x=panel.left+D6s.A8F(i,cw)+this.offset+this.micropixels;if(D6s.E8F(x,panel.right))lastQuote=quote;if(this.extendLastTick&&D6s.P8F(i,quotes.length-1)){x+=this.offset;}
if(D6s.f8F(firstX,null))firstX=x;if(isStep&&started){if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
points.push([x,y]);}
if(shareYAxis){y=this.pixelFromPrice(val,panel,yax);}
else{y=D6s.g8F(bottom,((val-min)*multiplier));}
if(D6s.Z8F(firstY,null))firstY=y;if(D6s.N8F(px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;D6s.t8F(lastPoint,i);lastPoint++){var xInt=Math.floor(D6s.T8F(lastPoint,cw))+offset,yInt=STX.yIntersection(vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(i&&points.length&&started&&!yValueCache[D6s.V8F(i,1)]&&D6s.K6C(yValueCache[i-1],0)){for(var bf=D6s.r6C(i,1);D6s.z6C(bf,0);bf--){if(yValueCache[bf])break;yValueCache[bf]=points[D6s.J6C(points.length,1)][1];}
}
if(!started){started=true;var leftTick=D6s.y6C(chart.dataSet.length,chart.scroll);if(D6s.h6C(leftTick,0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{var baseline=chart.dataSet[D6s.x6C(leftTick,1)];if(baseline.transform&&doTransform)baseline=baseline.transform;var y0=baseline[field];if(shareYAxis){y0=this.pixelFromPrice(y0,panel,yax);}
else{y0=D6s.Y6C(bottom,((y0-min)*multiplier));}
y0=Math.min(Math.max(y0,top),bottom);if(isNaN(y0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{seriesPlotter.moveTo((gap?"gap":"line"),0,y0);if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
}
}
}
else{if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){seriesPlotter.moveTo((Q6q+x2J+G0J),x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
}
lastPoint=i;if(gap)seriesPlotter.moveTo("line",x,y);gap=false;}
if(gap){x=Math.floor(D6s.a6C((quotes.length-1),cw)+this.micropixels)+offset;if(this.extendLastTick)x+=this.offset;if(parameters.gaps&&parameters.gaps.pattern){if(started){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
}
else if(parameters.gaps){seriesPlotter.lineTo((Q6q+x2J+G0J),x,y);}
}
if(D6s.o6C(series.parameters.chartType,"mountain")&&points.length){points.push([x,y]);if(!parameters.fillStyle){parameters.fillStyle=color;if(!parameters.fillOpacity)parameters.fillOpacity=0.3;}
seriesPlotter.newSeries("mountain","fill",parameters.fillStyle,parameters.fillOpacity);seriesPlotter.moveTo("mountain",firstX,Math.min(bottom,firstY));for(var pt=0;D6s.H6C(pt,points.length);pt++){seriesPlotter.lineTo("mountain",points[pt][0],Math.min(bottom,points[pt][1]));}
seriesPlotter.lineTo("mountain",x,bottom);seriesPlotter.lineTo("mountain",firstX,bottom);seriesPlotter.draw(context,"mountain");}
seriesPlotter.draw(context,"gap");seriesPlotter.draw(context,"line");this.endClip();if(shareYAxis&&lastQuote){if(yax.priceFormatter){txt=yax.priceFormatter(this,panel,lastQuote[field],yax);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,null,yax);}
this.yAxisLabels.push({src:(M0J+l2J+H2J),"args":[panel,txt,this.pixelFromPrice(lastQuote[field],panel,yax),color,null,null,yax]}
);}
var display=series.parameters.display;if(!display)display=series.display;legendColorMap[field]={color:color,display:display}
;}
if(chart.legend&&series&&series.useChartLegend){if(chart.legendRenderer)chart.legendRenderer(this,{"chart":chart,"legendColorMap":legendColorMap,"coordinates":{x:chart.legend.x,y:chart.legend.y+chart.panel.yAxis.top}
}
);}
this.runAppend("drawSeries",arguments);}
;STXChart.prototype.isDailyInterval=function(interval){if(D6s.d6C(interval,(g9J)))return J8J;if(D6s.c6C(interval,i3J))return J8J;if(D6s.l6C(interval,H8M))return J8J;return c1q;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,cb){var f9J="ive",C7J="teDr",P4J="ac",g7J="ll",r1q="aC",K4J="er",o9J="au",G1q="city",m2J="eri",A2J="ange",s6q="nn";if(this.runPrepend("setPeriodicityV2",arguments))return ;var switchInterval=false;if(interval){if(D6s.R6C(interval,"year")){interval="month";if(!period)period=1;period=D6s.p6C(period,12);}
var getDifferentData=false;if(this.chart.symbol){if(D6s.b6C(this.isDailyInterval(interval),this.isDailyInterval(this.layout.interval))||this.dontRoll)getDifferentData=true;if(!this.isDailyInterval(this.layout.interval)){if(D6s.X9C(this.layout.interval,interval))getDifferentData=true;}
}
if(getDifferentData){this.layout.interval=interval;this.layout.periodicity=period;this.changeOccurred("layout");if(this.quoteDriver){for(var c in this.charts){if(this.charts[c].symbol)this.quoteDriver.newChart({symbol:this.charts[c].symbol,chart:this.charts[c]}
,cb);}
return ;}
else if(this.dataCallback){this.dataCallback();if(cb)cb(null);return ;}
else{console.log((T3J+s6q+S2J+w4J+N2J+a8J+A2J+w4J+G0J+m2J+Y7J+P2J+c8J+G1q+w4J+U2J+w7J+o9J+H6J+w4J+W7J+l2J+R1q+a8J+K4J+w4J+P2J+P6J+r1q+x2J+g7J+U2J+P4J+Q8J+w4J+Y7J+F0J+w4J+K7J+w0J+Y7J+C7J+f9J+F0J+w4J+x2J+L8J+w4J+M0J+x4J));return ;}
}
this.layout.interval=interval;}
var chartName,chart;for(chartName in this.charts){chart=this.charts[chartName];var dt,pos=Math.round(D6s.n9C(chart.maxTicks,2));this.setCandleWidth(this.layout.candleWidth,chart);var centerMe=true,rightAligned=false;if(D6s.B9C(chart.scroll,chart.maxTicks))centerMe=false;else if(chart.dataSegment&&!chart.dataSegment[pos]){centerMe=false;rightAligned=D6s.U9C(chart.scroll,chart.dataSet.length);}
if(centerMe&&chart.dataSegment&&D6s.S9C(chart.dataSegment.length,0)){if(D6s.O9C(chart.maxTicks,((Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1)/2))){pos=D6s.F9C(chart.dataSegment.length,1);}
if(D6s.i9C(pos,chart.dataSegment.length)){dt=chart.dataSegment[D6s.j9C(chart.dataSegment.length,1)].DT;pos=D6s.C9C(chart.dataSegment.length,1);}
else{dt=chart.dataSegment[pos].DT;}
}
this.layout.periodicity=period;this.createDataSet();if(centerMe){if(chart.dataSegment&&D6s.M9C(chart.dataSegment.length,0)){for(var i=D6s.e9C(chart.dataSet.length,1);D6s.k9C(i,0);i--){var nd=chart.dataSet[i].DT;if(D6s.q9C(nd.getTime(),dt.getTime())){chart.scroll=(D6s.G9C(chart.dataSet.length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math.round(D6s.D9C(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=D6s.m9C(chart.maxTicks,wsInTicks);}
else{chart.scroll=chart.dataSet.length+rightAligned;}
}
if(this.displayInitialized)this.draw();this.changeOccurred("layout");if(this.quoteDriver){for(chartName in this.charts){chart=this.charts[chartName];if(chart.symbol&&chart.moreAvailable){this.quoteDriver.checkLoadMore(chart);}
}
}
if(cb)cb(null);this.runAppend("setPeriodicityV2",arguments);}
;STXChart.prototype.drawVectors=function(){var b8M="tor",l6J="Vec";if(this.vectorsShowing)return ;if(this.runPrepend("drawVectors",arguments))return ;this.vectorsShowing=true;if(!this.chart.hideDrawings){var tmpPanels={}
,panelName,i;for(i=0;D6s.s1C(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];panelName=drawing.panelName;if(!this.panels[drawing.panelName])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName].push(drawing);}
for(panelName in tmpPanels){this.startClip(panelName);var arr=tmpPanels[panelName];for(i=0;D6s.w1C(i,arr.length);i++){arr[i].render(this.chart.context);}
this.endClip();}
}
this.runAppend((z1q+u4q+l6J+b8M+M0J),arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,dontRoll,alignToHour){if(D6s.u1C(position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this.runPrepend("consolidatedQuote",arguments$))return null;if(!dontRoll&&this.dontRoll)dontRoll=true;var quote=quotes[position];function consolidate(self,p){if(self.layout.adj&&quotes[p].Adj_Close){ratio=D6s.Q1C(quotes[p].Adj_Close,quotes[p].Close);}
else{if(typeof ratio=="undefined"||!ratio)ratio=1;}
if(D6s.L1C("High",quotes[p]))if(D6s.W1C(quotes[p].High*ratio,quote.High))quote.High=D6s.I1C(quotes[p].High,ratio);if(D6s.v1C("Low",quotes[p]))if(D6s.A1C(quotes[p].Low*ratio,quote.Low))quote.Low=D6s.E1C(quotes[p].Low,ratio);quote.Volume+=quotes[p].Volume;if(D6s.P1C("Close",quotes[p])&&D6s.f1C(quotes[p].Close,null))quote.Close=D6s.g1C(quotes[p].Close,ratio);quote.ratio=ratio;for(var element in quotes[p]){if(!quote[element]){quote[element]=quotes[p][element];}
}
}
function newInterval(p,interval){var d1=quotes[D6s.Z1C(p,1)].DT,d2=quotes[p].DT;if(D6s.N1C(interval,"week")){if(D6s.t1C(d2.getDay(),d1.getDay()))return true;}
else if(D6s.T1C(interval,"month")){if(D6s.V1C(d2.getMonth(),d1.getMonth()))return true;}
else{if(D6s.K2C(d2.getDay(),d1.getDay()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval){var nextBar=D6s.r2C(interval,periodicity),d1=new Date(quotes[position].DT);d1.setMinutes(d1.getMinutes()+nextBar);var d2=quotes[p].DT;if(alignToHour){if(D6s.z2C(quotes[position].DT.getMinutes(),nextBar)){if(D6s.J2C(d2.getMinutes()%nextBar,0)){return true;}
}
}
if(D6s.y2C(d2.getTime(),d1.getTime()))return true;return false;}
var p=position,i;if((D6s.h2C(interval,"week")||D6s.x2C(interval,"month"))&&!dontRoll){for(i=1;D6s.Y2C(i,periodicity);i++){while(D6s.a2C(p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(D6s.o2C(i,periodicity)){p++;if(D6s.H2C(p,quotes.length))consolidate(this,p);}
}
}
else if(!this.isDailyInterval(interval)&&D6s.d2C(interval,"tick")&&D6s.c2C(periodicity,1)){for(i=1;D6s.l2C(i,periodicity);i++){p=position+i;if(D6s.R2C(p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval)){p--;break;}
if(D6s.p2C(p,0)&&D6s.b2C(p,quotes.length)){consolidate(this,p);}
}
}
else{for(i=1;D6s.X4C(i,periodicity);i++){p=position+i;if(D6s.n4C(p,0)&&D6s.B4C(p,quotes.length)){consolidate(this,p);}
}
}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.consolidate)plugin.consolidate(quotes,position,p,quote);}
this.runAppend("consolidatedQuote",arguments$);return {"quote":quote,"position":p+1}
;}
;U(D6s.J8M);L(D6s.U8M);W(D6s.B8M);F(D6s.h8M);A(D6s.v8M);C(D6s.w9q);M(G6q);STXChart.prototype.displayChart=function(chart){var G2J="erpl",K2q="de",l1q="bas",r2q="le_do",D1q="nd",w4q="stx_ca",Y6J="ven",c2q="ba",M9J="dow",T9q="x_bar_",w8M="d_",z8M="col",c5J="_d",S4J="tx_",k2q="ine_u",f6J="_l",Q3J="_do",o3J="ag",D6J="_k",noBorders=(D6s.U4C(this.layout.candleWidth-chart.tmpWidth,2)&&D6s.S4C(chart.tmpWidth,3));if(this.runPrepend("displayChart",arguments))return ;this.chart.baseLegendColors=[];var chartType=this.layout.chartType,colorFunction=null;if(chart.customChart){if(chart.customChart.chartType)chartType=chart.customChart.chartType;if(chart.customChart.colorFunction)colorFunction=chart.customChart.colorFunction;}
this.controls.baselineHandle.style.display="none";var panel=chart.panel;if(D6s.O4C(this.layout.aggregationType,"kagi")){this.drawKagiSquareWave(panel,"stx_kagi_up",(M0J+s0J+m2q+D6J+o3J+c8J+Q3J+u4q+W7J));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));}
else if(D6s.F4C(this.layout.aggregationType,"pandf")){this.drawPointFigureChart(panel,"stx_pandf_up","X");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_up"));this.drawPointFigureChart(panel,"stx_pandf_down","O");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_down"));}
else if(D6s.i4C(chartType,"line")){this.drawLineChart(panel,"stx_line_chart");}
else if(D6s.j4C(chartType,"mountain")){this.chart.baseLegendColors=null;this.drawMountainChart(panel);}
else if(D6s.C4C(chartType,"wave")){this.drawWaveChart(panel);}
else if(D6s.M4C(chartType,"bar")){this.startClip(panel.name);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.endClip();}
else if(D6s.e4C(chartType,"colored_line")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor((o2J+m2q+f6J+k2q+G0J)),stxLineDownColor=this.getCanvasColor((M0J+S4J+Q0J+c5J+Y7J+u4q+W7J)),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(D6s.k4C(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(D6s.q4C(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawLineChart(panel,"stx_line_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(D6s.G4C(chartType,(z8M+N8J+w8M+U2J+x2J+F0J))){this.startClip(panel.name);if(colorFunction){var colors2=this.drawBarChart(panel,"stx_bar_chart",colorFunction);for(var c2 in colors2)this.chart.baseLegendColors.push(c2);}
else{this.drawBarChartHighPerformance(panel,"stx_bar_up",STXChart.CLOSEUP);this.drawBarChartHighPerformance(panel,(o2J+T9q+M9J+W7J),STXChart.CLOSEDOWN);this.drawBarChartHighPerformance(panel,(o2J+H7J+c2q+g8J+l2J+Y6J),STXChart.CLOSEEVEN);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));}
this.endClip();}
else if(D6s.D4C(chartType,"hollow_candle")){this.startClip(panel.name);if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType]){this.drawShadowsHighPerformance(panel,"stx_hollow_candle_up",STXChart.CLOSEUP);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_even",STXChart.CLOSEEVEN);}
var colorUp=this.getCanvasColor("stx_hollow_candle_up"),colorDown=this.getCanvasColor("stx_hollow_candle_down"),colorEven=this.getCanvasColor("stx_hollow_candle_even");this.drawCandlesHighPerformance(panel,colorUp,"transparent",D6s.m4C(STXChart.CLOSEUP,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorDown,"transparent",D6s.s3C(STXChart.CLOSEDOWN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorEven,"transparent",D6s.w3C(STXChart.CLOSEEVEN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,this.containerColor,colorUp,D6s.u3C(STXChart.CLOSEUP,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorDown,D6s.Q3C(STXChart.CLOSEDOWN,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorEven,D6s.L3C(STXChart.CLOSEEVEN,STXChart.CANDLEUP));this.chart.baseLegendColors.push(colorUp);this.chart.baseLegendColors.push(colorDown);}
this.endClip();}
else if(D6s.W3C(chartType,"candle")){this.startClip(panel.name);var coloredShadowUp=this.getCanvasColor("stx_candle_shadow_up"),coloredShadowDown=this.getCanvasColor("stx_candle_shadow_down"),coloredShadow=(D6s.I3C(coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this.getCanvasColor("stx_candle_shadow"),stxCandleUpColor=this.getCanvasColor("stx_candle_up"),stxCandleDownColor=this.getCanvasColor("stx_candle_down"),stxCandleUp=this.canvasStyle("stx_candle_up"),stxCandleDown=this.canvasStyle("stx_candle_down");colorFunction=function(stx,quote,mode){if(D6s.v3C(mode,"shadow")){if(coloredShadow){if(D6s.A3C(quote.Close,quote.Open))return coloredShadowUp;else if(D6s.E3C(quote.Close,quote.Open))return coloredShadowDown;}
return stxCandleShadow;}
else if(D6s.P3C(mode,"solid")){if(D6s.f3C(quote.Close,quote.Open))return stxCandleUpColor;else if(D6s.g3C(quote.Close,quote.Open))return stxCandleDownColor;else if(D6s.Z3C(quote.Close,quote.Open))return stxCandleShadow;}
else if(D6s.N3C(mode,"outline")){var styleArray1;if(D6s.t3C(quote.Close,quote.Open))styleArray1=stxCandleUp;else if(D6s.T3C(quote.Close,quote.Open))styleArray1=stxCandleDown;else return null;var borderColor=styleArray1["border-left-color"];if(!borderColor)borderColor=styleArray1.borderLeftColor;return borderColor;}
return null;}
;}
if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);if(!noBorders)this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel,"stx_candle_shadow");var styleArray=this.canvasStyle("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_up"),borderColor,STXChart.CANDLEUP);this.chart.baseLegendColors.push(styleArray.color);styleArray=this.canvasStyle("stx_candle_down");borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor((w4q+D1q+r2q+u4q+W7J)),borderColor,STXChart.CANDLEDOWN);this.chart.baseLegendColors.push(styleArray.color);}
this.endClip();}
else if(D6s.V3C(chartType,(l1q+l2J+Q0J+d4J+K2q+o7J+s0J+x2J))){this.startClip(panel.name);this.setStyle("stx_baseline_trace","opacity",0);this.drawLineChart(panel,"stx_baseline_trace");var baseline=chart.baseline.actualLevel;if(D6s.K5C(baseline,null)){baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(D6s.r5C(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters.color;if(color&&D6s.z5C(color,"transparent")){var gradient=chart.context.createLinearGradient(0,(D6s.J5C(s,"over")?0:D6s.y5C(2,baseline)),0,baseline);gradient.addColorStop(0,STX.hexToRgba(color,60));gradient.addColorStop(1,STX.hexToRgba(color,10));parameters.color=gradient;parameters.opacity=1;}
STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.chart.baseLegendColors.push(color);}
this.plotLine(0,1,baseline,baseline,this.containerColor,(Q0J),chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:"dotted",lineWidth:"2.1",opacity:0.5}
);if(D6s.h5C(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=D6s.x5C(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=D6s.A5C(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display="block";}
}
this.endClip();}
else if(D6s.C5C(chartType,(M0J+N2J+x2J+s0J+s0J+G2J+S2J))){this.startClip(panel.name);this.scatter(panel);this.endClip();}
else{this.chart.baseLegendColors=null;}
this.runAppend("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){if(!period)period=20;var total=0;for(var i=1;D6s.M5C(i,chart.dataSet.length);i++){var prices=chart.dataSet[i],pd=chart.dataSet[D6s.e5C(i,1)],trueRange=Math.max(Math.max(D6s.k5C(prices.High,prices.Low),D6s.q5C(prices.High,pd.Close)),D6s.G5C(pd.Close,prices.Low));total+=trueRange;if(D6s.D5C(i,period))total-=chart.dataSet[D6s.m5C(i,period)].trueRange;prices.trueRange=trueRange;prices.atr=D6s.s0C(total,period);}
}
;STXChart.prototype.currentQuote=function(){var quote=null;for(var i=D6s.w0C(this.chart.dataSet.length,1);D6s.u0C(i,0);i--)if(this.chart.dataSet[i])return this.chart.dataSet[i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){var l9J="IfOffEd",d9J="rre";if(this.runPrepend("correctIfOffEdge",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName],leftPad=Math.round(D6s.Q0C(chart.maxTicks,3));if(D6s.L0C(leftPad,chart.dataSet.length))leftPad=chart.dataSet.length;if(chart.allowScrollPast){var rightPad=D6s.W0C(chart.maxTicks,leftPad);if(D6s.I0C(chart.maxTicks-rightPad,chart.dataSet.length)){rightPad=D6s.v0C(chart.maxTicks,chart.dataSet.length);}
if(D6s.A0C(chart.scroll-rightPad,chart.dataSet.length)){chart.scroll=chart.dataSet.length+rightPad;}
if(D6s.E0C(chart.scroll,leftPad)){chart.scroll=leftPad;}
}
else{if(D6s.P0C(chart.scroll,leftPad)){chart.scroll=leftPad;}
if(D6s.f0C(chart.scroll,chart.dataSet.length)){chart.scroll=chart.dataSet.length;}
}
}
this.runAppend((N2J+Y7J+d9J+K2J+l9J+Q6q+l2J),arguments);}
;STXChart.prototype.createDataSegment=function(theChart){if(this.runPrepend("createDataSegment",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName];if(theChart)chart=theChart;chart.baseline.actualLevel=chart.baseline.userLevel?chart.baseline.userLevel:chart.baseline.defaultLevel;chart.dataSegment=[];var position=D6s.g0C(chart.dataSet.length,chart.scroll,1);for(var i=-1;D6s.q0C(i,chart.scroll)&&D6s.G0C(i,chart.maxTicks);i++){position++;if(i==-1&&!chart.baseline.includeInDataSegment)continue;if(D6s.D0C(position,chart.dataSet.length)&&D6s.m0C(position,0)){chart.dataSegment.push(chart.dataSet[position]);if(D6s.s7C(chart.baseline.actualLevel,null)&&D6s.w7C(i,0))chart.baseline.actualLevel=chart.dataSet[position].iqPrevClose;}
else if(D6s.u7C(position,0)){chart.dataSegment.push(null);}
}
if(theChart)break;}
this.runAppend("createDataSegment",arguments);}
;STXChart.prototype.leftTick=function(){return D6s.Q7C(this.chart.dataSet.length,this.chart.scroll);}
;STXChart.prototype.getStartDateOffset=function(){for(var ds=0;D6s.L7C(ds,this.chart.dataSegment.length);ds++){if(this.chart.dataSegment[ds]){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){for(var i=0;D6s.W7C(i,this.chart.dataSet.length);i++){var bar=this.chart.dataSet[i];if(D6s.I7C(bar.DT.getTime(),dt.getTime())){this.chart.scroll=D6s.v7C(this.chart.dataSet.length,i);this.draw();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display&&plugin.listener)plugin.listener(this,event);}
}
;STXChart.prototype.clearPixelCache=function(){for(var x in this.panels){var panel=this.panels[x];panel.cacheHigh=null;panel.cacheLow=null;panel.cacheLeft=1000000;panel.cacheRight=-1;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(!chart.dataSet)continue;for(var i=0;D6s.A7C(i,chart.dataSet.length);i++){chart.dataSet[i].cache={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx,yAxis){var yax=yAxis?yAxis:panel.yAxis,context=ctx?ctx:this.chart.context,margin=3,height=this.getCanvasFontSize("stx_yaxis")+D6s.E7C(margin,2);this.canvasFont("stx_yaxis",context);var drawBorders=yax.displayBorder||this.axisBorders,tickWidth=drawBorders?3:0,width;try{width=context.measureText(txt).width+tickWidth+D6s.P7C(margin,2);}
catch(e){width=yax.width;}
var x=D6s.f7C(yax.left,margin,3),textx=x+margin+tickWidth,radius=3,position=(D6s.k7C(yax.position,null)?panel.chart.yAxis.position:yax.position);if(D6s.q7C(position,"left")){x=yax.left+yax.width+margin-3;width=width*-1;textx=x;radius=-3;context.textAlign="right";}
if(D6s.G7C(y+(height/2),yax.bottom))y=D6s.D7C(yax.bottom,(height/2));if(D6s.m7C(y-(height/2),yax.top))y=yax.top+(D6s.s8C(height,2));context.fillStyle=backgroundColor;if(typeof (STX[this.yaxisLabelStyle])=='undefined'){this.yaxisLabelStyle="roundRectArrow";}
var yaxisLabelStyle=this.yaxisLabelStyle;if(yax.yaxisLabelStyle)yaxisLabelStyle=yax.yaxisLabelStyle;STX[yaxisLabelStyle](context,x,D6s.w8C(y,(height/2)),width,height,radius,true,false);context.textBaseline="middle";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(D6s.u8C(context.fillStyle,backgroundColor)){if(D6s.Q8C(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,textx,y+1);context.textAlign="left";}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var context=this.chart.context,margin=2,fontstyle="stx-float-date",height=this.getCanvasFontSize(fontstyle)+D6s.L8C(margin,2);this.canvasFont(fontstyle,context);var width;try{width=context.measureText(txt).width+D6s.W8C(margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(D6s.I8C(x+(width/2),panel.right))x=D6s.v8C(panel.right,(width/2));if(D6s.A8C(x-(width/2),panel.left))x=panel.left+(D6s.E8C(width,2));context.fillStyle=backgroundColor;STX.roundRect(context,D6s.P8C(x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=D6s.f8C(panel.bottom,panel.yAxis.bottom,height);context.beginPath();context.moveTo(D6s.k8C(x,arrowHeight),y);context.lineTo(x,D6s.q8C(y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline="top";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(D6s.G8C(context.fillStyle,backgroundColor)){if(D6s.D8C(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,D6s.m8C(x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){var s1J="up",l3J="_h",o9q="ren",j7J="taS";if(this.runPrepend("drawCurrentHR",arguments))return ;var backgroundColor,color;for(var chartName in this.charts){var chart=this.charts[chartName],panel=chart.panel,yAxis=panel.yAxis;if(D6s.X62(yAxis.drawCurrentPriceLabel,false))continue;if(chart.customChart&&D6s.n62(chart.customChart.chartType,"none"))continue;var whichSet=yAxis.whichSet;if(!whichSet)whichSet=(P2J+x2J+j7J+x4J);var l=chart[whichSet].length;if(D6s.B62(whichSet,"dataSegment")){while(D6s.U62(l,(chart.width-this.micropixels+(this.offset+this.layout.candleWidth)/2+1)/this.layout.candleWidth))l--;}
if(l){var quote=chart[whichSet][D6s.S62(l,1)],prevClose=quote.Close,currentClose=quote.Close;if(D6s.O62(chart.dataSet.length,2)){var quote2=chart[whichSet][D6s.F62(l,2)];prevClose=quote2.Close;}
if(D6s.i62(currentClose,prevClose)){backgroundColor=this.canvasStyle("stx_current_hr_down").backgroundColor;color=this.canvasStyle("stx_current_hr_down").color;}
else{backgroundColor=this.canvasStyle((M0J+s0J+m2q+C5J+i9J+o9q+s0J+l3J+g8J+s1J)).backgroundColor;color=this.canvasStyle("stx_current_hr_up").color;}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math.max(panel.yAxis.printDecimalPlaces,panel.chart.decimalPlaces);if(yAxis.maxDecimalPlaces||D6s.j62(yAxis.maxDecimalPlaces,0))labelDecimalPlaces=Math.min(labelDecimalPlaces,yAxis.maxDecimalPlaces);if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,quote.Close,labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(quote.Close,panel,labelDecimalPlaces);}
var y=this.pixelFromPrice(quote.Close,panel);this.createYAxisLabel(panel,txt,y,backgroundColor,color);}
}
this.runAppend("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var I0J="FF",Q9J=0.65,C2J="rans";this.defaultColor=D3J;var bgColor=u8J,div=this.chart.container;while(!bgColor||STX.isTransparent(bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle.backgroundColor;if(STX.isTransparent(bgColor))bgColor=S5J;div=div.parentNode;if(!div||!div.tagName)break;}
if(bgColor){if(D6s.C62(bgColor,(s0J+C2J+G0J+x2J+F0J+l2J+O8J)))bgColor=E9q;this.containerColor=bgColor;if(!STX.isTransparent(bgColor)){var hsv=STX.hsv(bgColor),v=hsv[D6s.B8M];if(D6s.M62(v,Q9J))this.defaultColor=D3J;else this.defaultColor=E9q;}
else{this.defaultColor=D3J;}
}
else{this.containerColor=(T7J+v1J+v1J+I0J+I0J);}
}
;STXChart.prototype.startAsyncAction=function(){if(!this.pendingAsyncs)this.pendingAsyncs=[];this.pendingAsyncs.push(J8J);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){if(!this.asyncCallbacks)this.asyncCallbacks=[];this.asyncCallbacks.push(fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){for(var i=0;D6s.e62(i,this.asyncCallbacks.length);i++){if(D6s.k62(this.asyncCallbacks[i],obj.fc)){this.asyncCallbacks.splice(i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){if(!this.asyncCallbacks)return ;if(!this.pendingAsyncs||!this.pendingAsyncs.length){for(var i=0;D6s.q62(i,this.asyncCallbacks.length);i++){(this.asyncCallbacks[i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this.pendingAsyncs.pop();this.makeAsyncCallbacks();}
;STXChart.prototype.draw=function(){var S0J="rl",M5J="ove",A0J="lc";if(!this.chart.canvas)return ;if(!this.chart.dataSet)return ;if(!this.chart.canvasHeight)return ;this.offset=D6s.G62(this.layout.candleWidth,this.candleWidthPercent,2);STX.clearCanvas(this.chart.canvas,this);if(this.runPrepend("draw",arguments))return ;if(!this.xaxisHeight){this.xaxisHeight=this.getCanvasFontSize("stx_xaxis")+4;if(this.chart.xAxis.displayBorder||this.axisBorders)this.xaxisHeight+=3;}
this.getDefaultColor();this.vectorsShowing=false;this.drawPanels();this.yAxisLabels=[];var i,chart,chartName,plugin;for(chartName in this.charts){chart=this.charts[chartName];this.correctIfOffEdge();this.createDataSegment();var axisRepresentation=this.createXAxis(chart);this.initializeDisplay(chart);this.rendererAction(chart,(T3J+A0J+T1J+P6J+l2J));this.renderYAxis(chart);this.drawXAxis(chart,axisRepresentation);chart.tmpWidth=Math.floor(D6s.p62(this.layout.candleWidth,this.candleWidthPercent));if(D6s.b62(chart.tmpWidth%2,0)){chart.tmpWidth+=1;if(D6s.X92(chart.tmpWidth,this.layout.candleWidth))chart.tmpWidth-=2;}
if(D6s.n92(chart.tmpWidth,0.5))chart.tmpWidth=0.5;for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawUnder)plugin.drawUnder(this,chart);}
}
this.rendererAction(chart,"underlay");STX.Studies.displayStudies(this,chart,true);this.displayChart(chart);STX.Studies.displayStudies(this,chart,false);this.rendererAction(chart,(M5J+S0J+M1J));}
for(chartName in this.charts){chart=this.charts[chartName];for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawOver)plugin.drawOver(this,chart);}
}
}
for(var panel in this.panels){this.plotYAxisText(this.panels[panel]);}
for(var yLbl=0;D6s.B92(yLbl,this.yAxisLabels.length);yLbl++){this.createYAxisLabel.apply(this,this.yAxisLabels[yLbl].args);}
this.createCrosshairs();this.drawVectors();this.drawCurrentHR();this.displayInitialized=true;if(this.controls.home){if(D6s.U92(this.chart.scroll-1,Math.ceil(this.chart.width/this.layout.candleWidth))){this.controls.home.style.display="block";}
else{this.controls.home.style.display="none";}
}
this.positionMarkers();for(chartName in this.charts){chart=this.charts[chartName];if(this.quoteDriver)this.quoteDriver.checkLoadMore(chart);}
this.runAppend("draw",arguments);this.makeAsyncCallbacks();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){this.devicePixelRatio=window.devicePixelRatio||1;if(D6s.S92(this.devicePixelRatio,1.0))this.devicePixelRatio=1.0;backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;ratio=D6s.O92(this.devicePixelRatio,backingStoreRatio);if(D6s.F92(this.devicePixelRatio,backingStoreRatio)&&(!STX.isAndroid||STX.is_chrome)){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=D6s.i92(oldWidth,ratio);canvas.height=D6s.j92(oldHeight,ratio);canvas.style.width=oldWidth+'px';canvas.style.height=oldHeight+'px';context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){if(!this.chart.panel)this.chart.panel=this.panels.chart;var canvas=this.chart.canvas,context=this.chart.context;if(canvas&&context){this.chart.tempCanvas.height=canvas.height=this.chart.container.clientHeight;this.chart.tempCanvas.width=canvas.width=this.chart.container.clientWidth;this.adjustBackingStore(canvas,context);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.floatCanvas.height=canvas.height;this.floatCanvas.width=canvas.width;this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);}
var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.canvasWidth=this.chart.canvasWidth=this.chart.container.clientWidth;this.right=this.left+this.canvasWidth;this.height=this.chart.container.clientHeight;this.width=D6s.C92(this.right,this.left);this.bottom=this.top+this.height;this.calculateYAxisPositions();this.chart.canvasRight=this.right;this.chart.canvasHeight=this.height;var candleWidth=this.layout.candleWidth;if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this.charts){var chart=this.charts[chartName];if(this.layout.span){this.setCandleWidth(this.getSpanCandleWidth(this.layout.span),chart);}
else{this.setCandleWidth(candleWidth,chart);if(D6s.M92(chart.scroll,chart.width/candleWidth)){chart.scroll=Math.floor(D6s.e92(chart.width,candleWidth));var wsInTicks=Math.round(D6s.k92(this.preferences.whitespace,this.layout.candleWidth));chart.scroll-=wsInTicks;}
}
var idealNumberOfTicks=10,appxLabelWidth;try{appxLabelWidth=D6s.q92(context.measureText("10:00").width,2);}
catch(e){appxLabelWidth=100;}
while(D6s.G92(idealNumberOfTicks,1)){if(D6s.D92(this.chart.width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart.xAxis.autoComputedTickSizePixels=Math.round(D6s.m92(this.chart.width,idealNumberOfTicks));if(D6s.s12(chart.xAxis.autoComputedTickSizePixels,1))chart.xAxis.autoComputedTickSizePixels=1;}
}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){if(!chart)chart=this.chart;if(D6s.w12(newCandleWidth,D6s.J8M))newCandleWidth=D6s.v8M;this.layout.candleWidth=newCandleWidth;chart.maxTicks=Math.ceil(D6s.u12(this.chart.width,newCandleWidth)+0.5);}
;STXChart.prototype.resizeChart=function(){var previousHeight=this.chart.canvasHeight;this.resizeCanvas();this.adjustPanelPositions();if(this.displayInitialized){this.draw();}
else if(D6s.Q12(this.chart.canvasHeight,D6s.J8M)&&D6s.L12(previousHeight,D6s.J8M)){this.draw();}
}
;STXChart.prototype.calculateMinutesInSession=function(chart){var Q1q=((107,0x67)>=68?(30.1E1,59):0x9E>=(137.,11.31E2)?(52.5E1,3):(0xD5,3.24E2)),minutes=D6s.W12((chart.endHour-chart.beginHour),I1q);minutes+=chart.endMinute;minutes-=chart.beginMinute;if(D6s.I12(chart.endMinute,Q1q))minutes++;chart.minutesInSession=minutes;}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb){var f4J="ured",Z1J="oteFeed",F6q="fie",a6J=((16.0E1,56.90E1)>=104?(57,"N"):(133,5.72E2)<=(5.64E2,0x2)?"w":(37,4.87E2)>0x222?"w":(22.,9.5E2)),H9q="Warn",h2q='object';if(!chart)chart=this.chart;if((D6s.v12(chart.endHour,u8J)&&D6s.A12(chart.beginHour,u8J)&&D6s.E12(chart.endMinute,u8J)&&D6s.P12(chart.beginMinute,u8J))||(D6s.f12(chart.endHour+chart.beginHour+chart.endMinute+chart.beginMinute,D6s.J8M))){var hours=STX.LegacyMarket.getHours(symbol,this.layout.extended);chart.endHour=hours.endHour;chart.beginHour=hours.beginHour;chart.endMinute=hours.endMinute;chart.beginMinute=hours.beginMinute;}
var prevSymbol=chart.symbol,prevSymbolObject=STX.clone(chart.symbolObject);if(!symbol){chart.symbol=u8J;chart.symbolObject={symbol:u8J}
;}
else if(typeof symbol==h2q){chart.symbol=symbol.symbol;chart.symbolObject=symbol;}
else{chart.symbol=symbol;chart.symbolObject.symbol=symbol;}
if(!masterData&&this.quoteDriver){this.quoteDriver.newChart({symbol:chart.symbol,chart:chart,initializeChart:J8J}
,function(err){if(err){chart.symbol=prevSymbol;chart.symbolObject=prevSymbolObject;}
if(cb)cb(err);}
);}
else{if(!masterData){console.log((H9q+c8J+W7J+Q6q+J1q+a6J+Y7J+w4J+Z7J+m6J+s0J+l2J+F0J+S1J+x2J+s0J+x2J+w4J+M0J+G0J+w7J+c8J+F6q+P2J+w4J+x2J+W7J+P2J+w4J+W7J+Y7J+w4J+G7M+w0J+Z1J+w4J+N2J+Y7J+W7J+X6q+c8J+Q6q+f4J));}
if(!chart.symbol)chart.symbol=D5J;this.setMasterData(masterData,chart);this.createDataSet();this.initializeChart();this.draw();if(cb)cb();}
}
;STXChart.prototype.setMasterData=function(masterData,chart){if(!chart)chart=this.chart;this.calculateMinutesInSession(chart);chart.masterData=masterData;if(D6s.g12(chart.name,"chart"))this.masterData=masterData;chart.decimalPlaces=2;var i;for(i=0;masterData&&D6s.Z12(i,masterData.length);i++){var quotes=masterData[i];if(quotes.DT){if(D6s.N12(quotes.DT.constructor,String)){quotes.DT=new Date(quotes.DT);}
quotes.Date=STX.yyyymmddhhmm(quotes.DT);}
else if(quotes.Date)quotes.DT=STX.strToDateTime(quotes.Date);if(quotes.Volume)quotes.Volume=parseInt(quotes.Volume,10);if(quotes.Close){var cs=quotes.Close.toString(),point=cs.indexOf('.');if(point!=-1){var dp=D6s.t12(cs.length,point,1);if(D6s.m12(dp,chart.decimalPlaces)){chart.decimalPlaces=dp;}
}
}
if(D6s.s22(quotes.High,null))delete  quotes.High;if(D6s.w22(quotes.Low,null))delete  quotes.Low;if(D6s.u22(quotes.Open,null))delete  quotes.Open;}
if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);this.chart.roundit=Math.pow(10,chart.decimalPlaces);for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.setMasterData)plugin.setMasterData(this,chart);}
}
for(var s in this.chart.series){var series=this.chart.series[s];if(series.addSeriesData){series.addSeriesData(this);}
}
}
;STXChart.prototype.setDisplayDate=function(quote){var dt=quote.DT,milli=D6s.Q22(dt.getSeconds(),z2q)+dt.getMilliseconds(),newDT;if(this.dataZone){newDT=new timezoneJS.Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),this.dataZone);dt=new Date(newDT.getTime()+milli);}
if(this.displayZone){newDT=new timezoneJS.Date(dt.getTime(),this.displayZone);dt=new Date(newDT.getFullYear(),newDT.getMonth(),newDT.getDate(),newDT.getHours(),newDT.getMinutes());dt=new Date(dt.getTime()+milli);}
quote.displayDate=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){for(var i=0;D6s.L22(i,masterData.length);i++){var quote=masterData[i];if(quote.DT)this.setDisplayDate(quote);}
}
;STXChart.prototype.streamTrade=function(priceData,now,symbol){var price=null,bid=null,ask=null,volume=0;if(typeof priceData=="object"){price=priceData.last;bid=priceData.bid;ask=priceData.ask;volume=priceData.volume;}
else{price=arguments[0];volume=arguments[1];now=arguments[2];symbol=arguments[3];}
var md=this.masterData;if(!now){now=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);now=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
else{now=new Date(now);}
var quote;if(!md||!md.length){quote={Date:STX.yyyymmddhhmm(now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;this.appendMasterData([quote]);}
else{quote=STX.clone(md[D6s.W22(md.length,1)]);var next=this.getNextInterval(quote.DT,null,this.dataZone);if(D6s.I22(now,next)){var force=false;if(symbol){if(price||D6s.v22(price,0)){quote[symbol]=price;force=true;}
}
else{if(price||D6s.A22(price,0)){quote.Close=price;if(D6s.E22(price,quote.High))quote.High=price;if(D6s.P22(price,quote.Low))quote.Low=price;}
if(volume)quote.Volume+=volume;if(bid||D6s.f22(bid,0))quote.Bid=bid;if(ask||D6s.g22(ask,0))quote.Ask=ask;}
this.appendMasterData([quote],null,force);}
else{var next2=this.getNextInterval(next,null,this.dataZone),gaps=[];while(D6s.Z22(next2,now)){var gap={Date:STX.yyyymmddhhmm(next),DT:next,Close:quote.Close,Open:quote.Close,High:quote.Close,Low:quote.Close,Volume:0,Bid:quote.Bid,Ask:quote.Ask}
;gaps.push(gap);next=next2;next2=this.getNextInterval(next,null,this.dataZone);}
quote={Date:STX.yyyymmddhhmm(next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;gaps.push(quote);this.appendMasterData(gaps);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart,params){var d7M="und";if(typeof params!="object"){params={force:params}
;}
if(!params)params={}
;if(this.runPrepend("appendMasterData",arguments))return ;if(D6s.N22(appendQuotes.constructor,Object))appendQuotes=[appendQuotes];if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0].DT;if(!dt)dt=STX.strToDateTime(appendQuotes[0].Date);if(!chart)chart=this.chart;var masterData=chart.masterData,i;if(!masterData||!masterData.length){masterData=chart.masterData=STX.clone(appendQuotes);for(i=0;D6s.t22(i,masterData.length);i++){if(masterData[i].DT)masterData[i].Date=STX.yyyymmddhhmm(masterData[i].DT);else masterData[i].DT=STX.strToDateTime(masterData[i].Date);masterData[i].Volume=parseInt(masterData[i].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);}
}
else{i=D6s.T22(masterData.length,1);while(D6s.V22(i,0)){var dt2=masterData[i].DT;if(!dt2)dt2=STX.strToDateTime(masterData[i].Date);if(D6s.K42(dt2.getTime(),dt.getTime())){var plusOne=0;if(D6s.r42(dt2.getTime(),dt.getTime()))plusOne=1;for(var j=0;D6s.z42(j,appendQuotes.length);j++){if(!plusOne){if(D6s.J42(appendQuotes.length,1)){var lastBar=masterData[i+j];if(D6s.y42(appendQuotes[0].Close,lastBar.Close)&&D6s.h42(appendQuotes[0].High,lastBar.High)&&D6s.x42(appendQuotes[0].Low,lastBar.Low)&&D6s.Y42(appendQuotes[0].Open,lastBar.Open)&&!params.force){appendQuotes.length=0;return ;}
}
if(typeof masterData[i+j]!=(d7M+l2J+X6q+Q4q+y3J)){if(!appendQuotes[j].Volume&&masterData[i+j].Volume){appendQuotes[j].Volume=masterData[i+j].Volume;}
if(masterData[i+j].Open){appendQuotes[j].Open=masterData[i+j].Open;}
if(D6s.a42(masterData[i+j].High,appendQuotes[j].High)){appendQuotes[j].High=masterData[i+j].High;}
if(masterData[i+j].Low&&D6s.o42(masterData[i+j].Low,appendQuotes[j].Low)){appendQuotes[j].Low=masterData[i+j].Low;}
}
for(var field in this.chart.series){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){if(!this.panels[p].studyQuotes[sq])continue;if(typeof appendQuotes[j][sq]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne].DT)masterData[i+j+plusOne].Date=STX.yyyymmddhhmm(masterData[i+j+plusOne].DT);else masterData[i+j+plusOne].DT=STX.strToDateTime(masterData[i+j+plusOne].Date);masterData[i+j+plusOne].Volume=parseInt(masterData[i+j+plusOne].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i+j+plusOne]);if(D6s.H42(chart.scroll,chart.maxTicks+1)&&plusOne)chart.scroll++;}
break;}
i--;}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.appendMasterData)plugin.appendMasterData(this,appendQuotes,chart);}
}
}
if(!this.masterData||!this.masterData.length)this.masterData=masterData;if(!params.noCreateDataSet){var sp=this.streamParameters;if(++sp.count>sp.maxTicks){clearTimeout(sp.timeout);this.createDataSet();this.draw();this.updateChartAccessories();sp.count=0;sp.timeout=-1;}
else{var self=this;if(sp.timeout==-1){sp.timeout=setTimeout(function(){self.createDataSet();self.draw();self.updateChartAccessories();self.streamParameters.count=0;self.streamParameters.timeout=-1;}
,sp.maxWait);}
}
}
this.runAppend("appendMasterData",arguments);}
;STXChart.prototype.displayAll=function(params,cb){var chart=this.chart;if(params&&params.chart)chart=params.chart;var self=this;function displayTheResults(){if(!chart.masterData.length)return ;self.setRange({dtLeft:new Date(1),dtRight:chart.masterData[D6s.d42(chart.masterData.length,1)].DT}
);if(cb)cb();}
function loadAllTheData(){self.quoteDriver.loadAll(chart,displayTheResults);}
if(!this.quoteDriver){displayTheResults();return ;}
if(this.dontRoll&&D6s.c42(this.layout.interval,"month")){this.setPeriodicityV2(1,(Z7J+Y7J+O8J+a8J),loadAllTheData);}
else if(!STXChart.isDailyInterval(this.layout.interval)){this.setPeriodicityV2(1,"day",loadAllTheData);}
else{if(chart.moreAvailable){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){var I3J="ned",O7J="def";if(STX.isEmpty(params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false}
;cb=arguments[4];}
if(!params.chart)params.chart=this.chart;if(typeof params.padding==(I1J+O7J+c8J+I3J)){params.padding=this.preferences.whitespace;}
var chart=params.chart,ltMS=params.dtLeft.getTime(),rtMS=Date.now();if(params.dtRight)rtMS=params.dtRight.getTime();var self=this;function showTheRange(){var b=D6s.l42(chart.dataSet.length,1),prices;if(params.dtRight){rtMS=params.dtRight.getTime();for(;D6s.R42(b,0);b--){prices=chart.dataSet[b];if(D6s.p42(prices.DT.getTime(),rtMS)){break;}
}
if(D6s.b42(b,chart.dataSet.length-1)&&params.goIntoFuture){var dt=chart.dataSet[D6s.X32(chart.dataSet.length,1)].DT;for(var i=0;D6s.n32(i,20000);i++){if(D6s.B32(dt.getTime(),rtMS))break;b++;dt=STX.LegacyMarket.nextPeriod(dt,self.layout.interval,self.layout.periodicity,self,null,self.dataZone);}
}
}
if(D6s.U32(b,0))return ;for(var a=b;D6s.S32(a,0);a--){if(D6s.O32(a,chart.dataSet.length))continue;prices=chart.dataSet[a];if(D6s.F32(prices.DT.getTime(),ltMS)){break;}
}
var ticks=D6s.i32(b,a);if(D6s.j32(ticks,1)){if(cb)cb();return ;}
self.setCandleWidth(D6s.C32((self.chart.width-params.padding),ticks),chart);chart.scroll=(D6s.M32(chart.dataSet.length,b))+Math.floor(D6s.e32((self.chart.width-params.padding),self.layout.candleWidth));self.preferences.whitespace=D6s.k32((chart.maxTicks-chart.scroll),self.layout.candleWidth);self.draw();self.changeOccurred("layout");if(cb)cb();}
var loadMoreCount=0;function loadTheRange(){var x2q="gi",r4q="ity",G9J="ic",I9q="ppi",v4J="erve",B4J=") ",x7J="1",h9J="oad",T8M=(6.30E1>(68.8E1,10.64E2)?",":(2.46E2,15.4E1)>=6.80E1?(0xA7,"T"):(86.7E1,62)),e9q="(): ",V7J="etR",e7J="art",d8J="TXC";loadMoreCount++;if(D6s.q32(loadMoreCount,10)){console.log((c8M+d8J+a8J+e7J+l5J+M0J+V7J+x2J+W7J+Q6q+l2J+e9q+T8M+Y7J+Y7J+w4J+Z7J+R7M+d2q+w4J+o7J+h9J+M0J+o1J+x7J+J7J+B4J+X6q+F0J+Y7J+Z7J+w4J+M0J+v4J+F0J+m6q+c8M+M8J+I9q+E7J+m6q+q9q+a8J+l2J+Z4J+w4J+G0J+l2J+F0J+c8J+Y7J+P2J+G9J+r4q+w4J+o7J+Y7J+x2q+N2J+l5J));showTheRange();return ;}
if(chart.moreAvailable&&D6s.G32(chart.masterData[0].DT,ltMS)){self.quoteDriver.checkLoadMore(chart,true,false,function(err){if(!err)loadTheRange();}
);}
else{showTheRange();}
}
function barsToFetch(dt,interval){var ticks=0,ms=D6s.D32(Date.now(),dt.getTime());if(STXChart.isDailyInterval(interval)){ticks=D6s.m32(ms,STX.DAY,2);}
else{ticks=D6s.X52(ms,(interval*STX.MINUTE));}
return Math.round(D6s.n52(ticks,2));}
if(this.quoteDriver){var intervalToUse,periodToUse;if(params.periodicity){intervalToUse=params.periodicity.interval;periodToUse=params.periodicity.period;}
else{if(!this.rangePeriodicityMap){this.rangePeriodicityMap=[];this.rangePeriodicityMap.push({range:STX.WEEK,periodicity:1,interval:5}
);this.rangePeriodicityMap.push({range:STX.MONTH,periodicity:1,interval:30}
);this.rangePeriodicityMap.push({range:D6s.B52(STX.MONTH,7),periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:STX.DECADE,periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:D6s.U52(STX.DECADE,10),periodicity:1,interval:"month"}
);this.rangePeriodicityMap.push({range:Number.MAX_VALUE,periodicity:12,interval:"month"}
);}
var periodicityMap=params.rangePeriodicityMap?params.rangePeriodicityMap:this.rangePeriodicityMap,rangeInMS=D6s.S52(rtMS,ltMS),entryToUse=null;for(var i=0;D6s.O52(i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(D6s.F52(rangeInMS,mapEntry.range)){entryToUse=mapEntry;break;}
}
intervalToUse=entryToUse.interval;periodToUse=entryToUse.periodicity;}
if(D6s.i52(this.layout.interval,intervalToUse)||D6s.j52(this.layout.periodicity,periodToUse)){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;var qparams={symbol:chart.symbol,chart:chart,ticks:barsToFetch(params.dtLeft,this.layout.interval)}
;this.quoteDriver.newChart(qparams,loadTheRange);}
else{loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var S2q="tod",period=arguments[0],interval=arguments[1],padding=arguments[2],chart=arguments[3],useMarketTZ=arguments[4];if(typeof params=="object"){if(params.multiplier)period=params.multiplier;else period=params.period;if(params.span)interval=params.span;else interval=params.interval;padding=params.padding;chart=params.chart;useMarketTZ=params.useMarketTZ;}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[5];}
if(!chart)chart=this.chart;var leftDT=new Date();if(!STX.LegacyMarket.isMarketDay(chart.symbol)){leftDT=STX.LegacyMarket.prevDay(leftDT,1,this);}
if(D6s.C52(interval.toLowerCase(),"ytd")){leftDT=new Date();leftDT.setMonth(0);leftDT.setDate(1);leftDT.setHours(0);leftDT.setMinutes(0);leftDT.setSeconds(0);leftDT.setMilliseconds(0);}
else if(D6s.M52(interval.toLowerCase(),"year")){leftDT.setFullYear(D6s.e52(leftDT.getFullYear(),period));}
else if(D6s.k52(interval.toLowerCase(),"month")){leftDT.setMonth(D6s.q52(leftDT.getMonth(),period));}
else if(D6s.G52(interval.toLowerCase(),"day")||D6s.D52(interval.toLowerCase(),(M8J+P2J+M1J))){if(D6s.m52(interval.toLowerCase(),"day")&&STXChart.isDailyInterval(this.layout.interval)){if(useMarketTZ)leftDT=STX.LegacyMarket.prevDay(leftDT,D6s.s02(period,1),this);else leftDT.setDate(D6s.w02(leftDT.getDate(),period,1));}
else{if(useMarketTZ&&chart.dataSet[D6s.B02(chart.dataSet.length,1)].displayDate){var startDT=STX.LegacyMarket.getDailyCycleStartTime(leftDT,chart);if(D6s.U02(startDT.getTime(),leftDT.getTime()))startDT=STX.LegacyMarket.prevDay(startDT,1,this);leftDT.setTime(startDT.getTime());}
else{leftDT.setHours(0,0,0,0);}
for(var i=0;D6s.S02(i,period-1);i++){leftDT=STX.LegacyMarket.prevDay(leftDT,1,this);}
}
}
else if(D6s.O02(interval.toLowerCase(),"week")){leftDT.setDate(D6s.F02(leftDT.getDate(),(7*period)));}
else if(D6s.i02(interval.toLowerCase(),"hour")){leftDT.setHours(D6s.j02(leftDT.getHours(),period));}
else if(D6s.C02(interval.toLowerCase(),"minute")){leftDT.setMinutes(D6s.M02(leftDT.getMinutes(),period));}
else if(D6s.e02(interval.toLowerCase(),"all")){this.displayAll(params,cb);return ;}
var params2=STX.shallowClone(params);params2.dtLeft=leftDT;if(D6s.k02(interval.toLowerCase(),(S2q+x2J+d2q))){params2.goIntoFuture=true;params2.dtRight=new Date(params2.dtLeft);params2.dtRight.setHours(chart.endHour);params2.dtRight.setMinutes(chart.endMinute);params2.dtRight.setSeconds(0);}
if(params.maintainPeriodicity){params2.periodicity={}
;params2.periodicity.interval=this.layout.interval;params2.periodicity.period=this.layout.periodicity;}
this.setRange(params2,cb);}
;STXChart.prototype.getSpanCandleWidth=function(span){var P7J="ear",arr=span.split(",");if(D6s.q02(arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(D6s.G02(arr[1],(d2q+P7J))){prev.setFullYear(D6s.D02(prev.getFullYear(),num));}
else if(D6s.m02(arr[1],"month")){prev.setMonth(D6s.s72(prev.getMonth(),num));}
else if(D6s.w72(arr[1],"day")){prev.setDate(D6s.u72(prev.getDate(),num));}
else if(D6s.Q72(arr[1],"week")){prev.setDate(D6s.L72(prev.getDate(),(7*num)));}
var diff=D6s.W72((now.getTime()-prev.getTime()),1000,60,60,24);diff=D6s.v72(diff,5,7);var candleWidth=D6s.j72(this.chart.width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks){this.layout.candleWidth=D6s.C72((this.chart.width),ticks);if(!this.layout.candleWidth)this.layout.candleWidth=D6s.v8M;this.chart.maxTicks=Math.round(D6s.M72((this.chart.width/this.layout.candleWidth),0.499));}
;STXChart.prototype.construct=function(){this.stackPanel(L2J,L2J,D6s.U8M);this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.cx=D6s.J8M;this.cy=D6s.J8M;this.micropixels=D6s.J8M;this.chart.panel.subholder.appendChild(this.controls.home);}
;STXChart.prototype.deleteYAxisIfUnused=function(panel,yAxis){if(!yAxis)return ;if(D6s.e72(yAxis,panel.yAxis))return ;for(var r in this.chart.seriesRenderers){var renderer=this.chart.seriesRenderers[r];if(D6s.k72(renderer.params.yAxis,yAxis)){if(D6s.q72(renderer.seriesParams.length,0))return ;}
}
var i;for(i=0;D6s.G72(i,panel.yaxisLHS.length);i++){if(D6s.D72(panel.yaxisLHS[i],yAxis))panel.yaxisLHS.splice(i,1);}
for(i=1;D6s.m72(i,panel.yaxisRHS.length);i++){if(D6s.s82(panel.yaxisRHS[i],yAxis))panel.yaxisRHS.splice(i,1);}
this.resizeCanvas();this.adjustPanelPositions();}
;STXChart.prototype.addYAxis=function(panel,yAxis){if(!yAxis)return ;if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(D6s.w82(panel.yAxis.position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;D6s.u82(i,arr.length);i++){if(D6s.Q82(arr[i],yAxis))return ;}
if(D6s.L82(yAxis.position,"left")){panel.yaxisLHS.unshift(yAxis);}
else{yAxis.position="right";panel.yaxisRHS.push(yAxis);}
this.preAdjustScroll();this.resizeCanvas();this.adjustPanelPositions();this.postAdjustScroll();}
;STXChart.prototype.calculateYAxisPositions=function(){var panelsInOrder=[];for(var chartName in this.charts){panelsInOrder.push(chartName);}
for(var panelName in this.panels){var p=this.panels[panelName];if(D6s.W82(p.name,p.chart.name))continue;panelsInOrder.push(panelName);}
for(var j=0;D6s.I82(j,panelsInOrder.length);j++){var panel=this.panels[panelsInOrder[j]];if(!panel)continue;var isAChart=D6s.v82(panel.name,panel.chart.name);if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(D6s.A82(panel.name,panel.chart.name)||panel.yAxis.position){if(D6s.E82(panel.yAxis.position,"left"))panel.yaxisLHS.push(panel.yAxis);else panel.yaxisRHS.push(panel.yAxis);}
else{var position=panel.chart.panel.yAxis.position;if(!position||D6s.P82(position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
}
if(!panel.yAxis.width)panel.yAxis.width=this.yaxisWidth;panel.yaxisTotalWidthRight=0;var i,yaxis;panel.yaxisTotalWidthLeft=0;for(i=0;D6s.f82(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];panel.yaxisTotalWidthLeft+=yaxis.width;yaxis.justifyRight=(D6s.g82(yaxis.justifyRight,null)?panel.chart.yAxis.justifyRight:yaxis.justifyRight);if(D6s.Z82(yaxis.justifyRight,null))yaxis.justifyRight=true;}
for(i=0;D6s.N82(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];panel.yaxisTotalWidthRight+=yaxis.width;}
var x=0;for(i=0;D6s.t82(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];yaxis.left=x;x+=yaxis.width;}
x=D6s.T82(this.width,panel.yaxisTotalWidthRight);for(i=0;D6s.V82(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];yaxis.left=x;x+=yaxis.width;}
if(typeof this.yaxisLeft!="undefined")panel.yaxisPaddingRight=this.yaxisLeft;panel.yaxisCalculatedPaddingRight=panel.yaxisTotalWidthRight;if(panel.yaxisPaddingRight||D6s.K64(panel.yaxisPaddingRight,0))panel.yaxisCalculatedPaddingRight=panel.yaxisPaddingRight;panel.yaxisCalculatedPaddingLeft=panel.yaxisTotalWidthLeft;if(panel.yaxisPaddingLeft||D6s.r64(panel.yaxisPaddingLeft,0))panel.yaxisCalculatedPaddingLeft=panel.yaxisPaddingLeft;if(isAChart){panel.left=panel.yaxisCalculatedPaddingLeft;panel.right=D6s.z64(this.width,panel.yaxisCalculatedPaddingRight);}
else{panel.left=panel.chart.panel.left;panel.right=panel.chart.panel.right;}
panel.width=D6s.J64(panel.right,panel.left);if(isAChart){panel.chart.left=panel.left;panel.chart.right=panel.right;panel.chart.width=D6s.y64(panel.right,panel.left);}
}
}
;STXChart.prototype.initializeChart=function(container){if(this.runPrepend("initializeChart",arguments))return ;if(!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol=this.chart.symbol;if(this.locale)this.setLocale(this.locale);if(!this.displayZone&&STXChart.defaultDisplayTimeZone){this.setTimeZone(null,STXChart.defaultDisplayTimeZone);}
this.calculateYAxisPositions();this.micropixels=0;if(container)this.chart.container=container;this.chart.container.stx=this;if(!this.chart.container.STXRegistered){this.chart.container.STXRegistered=true;STXChart.registeredContainers.push(this.chart.container);}
if(STX.isSurface){if(!this.gesture){this.gesture=new MSGesture();if(this.manageTouchAndMouse){this.gesture.target=this.chart.container;}
else{this.gesture.target=document.body;}
this.gesturePointerId=null;}
}
this.registerHTMLElements();if(this.chart.canvas&&document.createElement("canvas").getContext){if(!this.chart.canvas.id){this.chart.container.removeChild(this.chart.canvas);this.chart.canvas=null;}
if(this.chart.tempCanvas&&!this.chart.tempCanvas.id){this.chart.container.removeChild(this.chart.tempCanvas);this.chart.tempCanvas=null;}
if(this.floatCanvas&&!this.floatCanvas.id){this.chart.container.removeChild(this.floatCanvas);this.floatCanvas=null;}
}
else{if(D6s.h64(this.layout.candleWidth,this.minimumCandleWidth)||D6s.x64(this.layout.candleWidth,50))this.layout.candleWidth=8;}
if(!this.chart.canvas)this.chart.canvas=document.createElement("canvas");if(!this.chart.canvas.getContext){this.chart.canvas=this.chart.container.querySelectorAll("#ie8canvas")[0];if(!this.chart.canvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);}
this.chart.canvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.canvas);}
this.chart.canvas.style.position="absolute";this.chart.canvas.style.left="0px";this.chart.context=this.chart.canvas.getContext("2d");this.chart.canvas.context=this.chart.context;this.chart.context.lineWidth=1;if(!this.chart.tempCanvas)this.chart.tempCanvas=document.createElement("canvas");if(!this.chart.tempCanvas.getContext){this.chart.tempCanvas=this.chart.container.querySelectorAll("#ie8canvasTemp")[0];if(!this.chart.tempCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.chart.tempCanvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.tempCanvas);}
this.chart.tempCanvas.style.position="absolute";this.chart.tempCanvas.style.left="0px";this.chart.tempCanvas.context=this.chart.tempCanvas.getContext("2d");this.chart.tempCanvas.context.lineWidth=1;if(!this.floatCanvas)this.floatCanvas=document.createElement("canvas");if(!this.floatCanvas.getContext){this.floatCanvas=this.chart.container.querySelectorAll("#ie8canvasFloat")[0];if(!this.floatCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.floatCanvas.style.display="block";}
else{this.chart.container.appendChild(this.floatCanvas);}
this.floatCanvas.style.position="absolute";this.floatCanvas.style.left="0px";this.floatCanvas.context=this.floatCanvas.getContext("2d");this.floatCanvas.context.lineWidth=1;this.resizeCanvas();if(STX.isAndroid){this.chart.tempCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;this.floatCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;}
this.panels.chart.display=this.chart.symbol;if(this.chart.symbolDisplay)this.panels.chart.display=this.chart.symbolDisplay;this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.calculateYAxisMargins(this.chart.panel.yAxis);if(this.chart.dataSet&&D6s.Y64(this.chart.dataSet.length,0)){this.chart.scroll=Math.floor(D6s.a64(this.chart.width,this.layout.candleWidth));var wsInTicks=Math.round(D6s.o64(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
if(STX.touchDevice){var overlayTrashCan=this.chart.container.querySelectorAll("#overlayTrashCan")[0],vectorTrashCan=this.chart.container.querySelectorAll("#vectorTrashCan")[0];if(overlayTrashCan)overlayTrashCan.onmspointerup=overlayTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted();}
;}
)(this);if(vectorTrashCan)vectorTrashCan.onmspointerup=vectorTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted();}
;}
)(this);}
if(this.manageTouchAndMouse){this.registerTouchAndMouseEvents();}
this.chart.container.onmouseout=(function(self){return function(e){self.handleMouseOut(e);}
;}
)(this);if(this.controls.chartControls){this.controls.chartControls.style.display="block";}
this.abortDrawings();for(var panelName in this.panels){var panel=this.panels[panelName];if(panel.markerHolder){this.chart.container.removeChild(panel.markerHolder);panel.markerHolder=null;}
}
for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.initializeChart)plugin.initializeChart(this);}
}
if(!this.resizeListenerInitialized){this.resizeListenerInitialized=true;var closure=function(self){return function(e){self.resizeChart();}
;}
;if(window.attachEvent){window.attachEvent("onresize",closure(this));}
else{var c=closure(this);window.addEventListener("resize",c,true);this.eventListeners.push({"element":window,"event":"resize","function":c}
);}
}
if(this.chart.baseline.userLevel)this.chart.baseline.userLevel=null;this.setResizeTimer(this.resizeDetectMS);this.runAppend("initializeChart",arguments);}
;STXChart.prototype.destroy=function(){this.setResizeTimer(0);if(this.quoteDriver)this.quoteDriver.die();this.styles={}
;for(var i=0;D6s.H64(i,this.eventListeners.length);i++){var listener=this.eventListeners[i];listener.element.removeEventListener(listener.event,listener["function"]);}
}
;STXChart.prototype.handleMouseOut=function(e){var j4J="ut",t7J="use",p8J="dleMo",U6q="handleMouseOut";e=e||window.event;if(!STX.withinElement(this.chart.container,e.pageX,e.pageY)){if(this.runPrepend(U6q,arguments))return ;this.undisplayCrosshairs();this.grabbingScreen=c1q;this.touches=[];this.touching=c1q;if(this.activeDrawing&&this.userPointerDown){this.userPointerDown=c1q;this.drawingLine=c1q;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);this.drawingClick(this.currentPanel,cx,cy);}
STXChart.insideChart=c1q;this.displaySticky();this.runAppend((f2q+p8J+t7J+N6J+j4J),arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var f8M="DOMMouseScroll",K6q="mousewheel",X7J="onwheel",l7J="wheel",N5J="onMouseOver",q7J="pointerup",f8J="pointermove",e1J="MSGestureEnd",W0J="pointerdown",m8M="terU",s5J="MSP",F4q="v",f5J="rM",U7J="SPo",E2q="SGestureEnd",y6q="MSGestureChange",t2q="MSGestureStart",h6q="MSPointerDown",u5J="oom",C2q="z",P1J="#home";if(this.touchAndMouseEventsRegistered)return ;this.touchAndMouseEventsRegistered=J8J;var el=this.chart.container,homeEl=$$$(P1J,this.controls.chartControls),zoomInEl=$$$(U8J,this.controls.chartControls),zoomOutEl=$$$((T7J+C2q+u5J+N6J+w0J+s0J),this.controls.chartControls);if(!STX.touchDevice){el.addEventListener(g4J,(function(self){return function(e){self.mousemove(e);}
;}
)(this),c1q);el.addEventListener(u4J,(function(self){return function(e){self.mousedown(e);}
;}
)(this),c1q);el.addEventListener((R1J+w0J+M0J+l2J+w0J+G0J),(function(self){return function(e){self.mouseup(e);}
;}
)(this),c1q);}
else{if(STX.isSurface){el.addEventListener(g4J,(function(self){return function(e){self.msMouseMoveProxy(e);}
;}
)(this),c1q);el.addEventListener(u4J,(function(self){var H3J=8488169,D0J=9126632,q8J=1209111811,W5J=((6.12E2,19.70E1)>=(0x164,123.)?(28.,389574703):(116.2E1,0x15F)<=(69.10E1,0x11E)?0xB3:8.6E2<(108,139.)?(0x19C,79.60E1):(0x23B,12.52E2));var W7M=-W5J,O7M=q8J,y7M=D6s.B8M;for(var S7M=D6s.U8M;D6s.e0M.d0M(S7M.toString(),S7M.toString().length,D0J)!==W7M;S7M++){X(document);y7M+=D6s.B8M;}
if(D6s.e0M.d0M(y7M.toString(),y7M.toString().length,H3J)!==O7M){context.moveTo(xx,cache.open);this.chart.baseLegendColors.push(c1);}
return function(e){self.msMouseDownProxy(e);}
;}
)(this),c1q);el.addEventListener(x1q,(function(self){return function(e){self.msMouseUpProxy(e);}
;}
)(this),c1q);if(window.navigator.msPointerEnabled){el.addEventListener(h6q,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),c1q);el.addEventListener(t2q,(function(self){return function(e){self.gestureInEffect=J8J;}
;}
)(this),c1q);el.addEventListener(y6q,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),c1q);el.addEventListener((Q6J+E2q),(function(self){return function(e){self.gestureInEffect=c1q;return self.touchend(e);}
;}
)(this),c1q);el.addEventListener((Q6J+U7J+Q4q+J0J+f5J+Y7J+F4q+l2J),(function(self){return function(e){self.moveProxy(e);}
;}
)(this),c1q);el.addEventListener((s5J+Y7J+c8J+W7J+m8M+G0J),(function(self){return function(e){return self.endProxy(e);}
;}
)(this),c1q);}
else{el.addEventListener(W0J,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),c1q);el.addEventListener(t2q,(function(self){return function(e){self.gestureInEffect=J8J;}
;}
)(this),c1q);el.addEventListener(y6q,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),c1q);el.addEventListener(e1J,(function(self){return function(e){self.gestureInEffect=c1q;return self.touchend(e);}
;}
)(this),c1q);el.addEventListener(f8J,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),c1q);el.addEventListener(q7J,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),c1q);}
}
else{if(!STX.isAndroid&&!STX.ipad&&!STX.iphone){el.addEventListener(g4J,(function(self){return function(e){self.iosMouseMoveProxy(e);}
;}
)(this),c1q);el.addEventListener(u4J,(function(self){return function(e){self.iosMouseDownProxy(e);}
;}
)(this),c1q);el.addEventListener(x1q,(function(self){return function(e){self.iosMouseUpProxy(e);}
;}
)(this),c1q);}
el.addEventListener(z0J,(function(self){return function(e){self.touchstart(e);}
;}
)(this),c1q);el.addEventListener(T9J,(function(self){return function(e){self.touchmove(e);}
;}
)(this),c1q);el.addEventListener(t4J,(function(self){return function(e){self.touchend(e);}
;}
)(this),c1q);if(zoomInEl){zoomInEl.removeAttribute(N5J);zoomInEl.removeAttribute(o8J);}
if(zoomOutEl){zoomOutEl.removeAttribute(N5J);zoomOutEl.removeAttribute(o8J);}
}
}
var wheelEvent=(D6s.d64(l7J,document.createElement(e6J))||D6s.c64(X7J,document))?l7J:D6s.l64(document.onmousewheel,undefined)?K6q:f8M;el.addEventListener(wheelEvent,(function(self,wheelEvent){return function(e){self.mouseWheel(e,wheelEvent);}
;}
)(this,wheelEvent),c1q);}
;STXChart.prototype.rightClickHighlighted=function(){var R7J="rightClickHighlighted";if(this.runPrepend(R7J,arguments))return ;this.deleteHighlighted(J8J);this.runAppend(R7J,arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){if(this.runPrepend("deleteHighlighted",arguments))return ;this.cancelTouchSingleClick=true;STX.clearCanvas(this.chart.tempCanvas,this);for(var i=D6s.R64(this.drawingObjects.length,1);D6s.p64(i,0);i--){var drawing=this.drawingObjects[i];if(drawing.highlighted&&!drawing.permanent){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){this.undoStamp();this.drawingObjects.splice(i,1);}
this.changeOccurred("vector");}
}
for(var name in this.overlays){var o=this.overlays[name];if(o.highlight&&!o.permanent){if(callRightClick)this.rightClickOverlay(name);else this.removeOverlay(name);}
}
for(var r in this.currentPanel.chart.seriesRenderers){var renderer=this.currentPanel.chart.seriesRenderers[r];for(var sp=D6s.b64(renderer.seriesParams.length,1);D6s.X94(sp,0);sp--){var series=renderer.seriesParams[sp];if(series.highlight&&!series.permanent){renderer.removeSeries(series.field);}
}
}
this.draw();if(this.controls.mSticky){this.controls.mSticky.style.display="none";this.controls.mSticky.children[0].innerHTML="";}
this.runAppend("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){for(var p in this.panels){var panel=this.panels[p];if(D6s.n94(panel.name,name))return J8J;}
return c1q;}
;STXChart.prototype.hideCrosshairs=function(){var n7J=6144366,v0J=((83.,10.28E2)<=0x25?(0x167,0x1E8):0x1C0>=(116.10E1,18.7E1)?(0x151,1602043):(81.,6.30E1)>=7.43E2?(14.3E1,'d'):(12.0E2,43.)),d0J=((0x232,130)>(0xB1,88)?(3.30E1,1705439274):(0x256,40)),r8J=(44.5E1<(85.,23)?0.8:(35.80E1,114)<(0x1FB,6.93E2)?(125.80E1,994980095):(57.,113.30E1));var F7M=r8J,x7M=d0J,I7M=D6s.B8M;for(var h7M=D6s.U8M;D6s.e0M.d0M(h7M.toString(),h7M.toString().length,v0J)!==F7M;h7M++){consolidate(this,p);I7M+=D6s.B8M;}
if(D6s.e0M.d0M(I7M.toString(),I7M.toString().length,n7J)!==x7M){zoomOutEl.removeAttribute(o8J);this.canvasStyle(obj);context.lineTo(xx,cache.bottom);return function(e){self.home();e.stopPropagation();}
;}
this.displayCrosshairs=c1q;}
;STXChart.prototype.showCrosshairs=function(){this.displayCrosshairs=J8J;}
;STXChart.prototype.grabHandle=function(e,panel){var h4q="grabHandle";if(this.runPrepend(h4q,arguments))return ;if(e.preventDefault)e.preventDefault();if(!panel)return ;STXChart.crosshairY=panel.top+this.top;STXChart.resizingPanel=panel;this.drawTemporaryPanel();this.runAppend(h4q,arguments);}
;STXChart.prototype.releaseHandle=function(e){var y5J="releaseHandle",R8J="seH",I5J="el";if(this.runPrepend((F0J+I5J+A7J+R8J+R7M+P2J+o7J+l2J),arguments))return ;if(e.preventDefault)e.preventDefault();STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=u8J;this.runAppend(y5J,arguments);}
;STXChart.prototype.storePanels=function(){if(!this.layout)this.layout={}
;var view=this.layout;view.panels={}
;for(var p in this.panels){var panel=this.panels[p];view.panels[panel.name]={"percent":panel.percent,"display":panel.display}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){this.storePanels();if(D6s.B94(saveLayout,c1q))this.changeOccurred(g8M);}
;STXChart.prototype.resolveY=function(y){return this.top+y;}
;STXChart.prototype.resolveX=function(x){var R8M=5509110,U1q=6063338,F5J=624459941,G5J=150451376;var Y7M=-G5J,A7M=F5J,i7M=D6s.B8M;for(var v7M=D6s.U8M;D6s.e0M.d0M(v7M.toString(),v7M.toString().length,U1q)!==Y7M;v7M++){zoomInEl.removeAttribute(o8J);dt.setHours(D6s.X9q);i7M+=D6s.B8M;}
if(D6s.e0M.d0M(i7M.toString(),i7M.toString().length,R8M)!==A7M){leftDT.setMinutes(D6s.M02(leftDT.getMinutes(),period));self.setRange({dtLeft:new Date(D6s.U8M),dtRight:chart.masterData[D6s.d42(chart.masterData.length,D6s.U8M)].DT}
);stx.setMasterData(dataCallback.quotes,qparams.chart);}
return this.left+x;}
;STXChart.prototype.backOutY=function(y){return D6s.U94(y,this.top);}
;STXChart.prototype.backOutX=function(x){return D6s.S94(x,this.left);}
;STXChart.prototype.privateDeletePanel=function(panel){var Z7M="lName";if(this.layout.studies)delete  this.layout.studies[panel.name];delete  this.panels[panel.name];for(var spm in STX.Studies.studyPanelMap){if(D6s.O94(STX.Studies.studyPanelMap[spm].panel,panel.name))delete  STX.Studies.studyPanelMap[spm];}
for(var series in this.overlays){if(D6s.F94(this.overlays[series].panel,panel.name)){delete  this.layout.studies[series];delete  this.overlays[series];}
}
if(panel.holder){this.chart.container.removeChild(panel.holder);var arr=this.getMarkerArray((G0J+x2J+W7J+l2J+Z7M),panel.name);for(var i=0;D6s.i94(i,arr.length);i++){this.removeFromHolder(arr[i]);}
}
panel.handle.parentNode.removeChild(panel.handle);}
;STXChart.prototype.panelClose=function(panel){var n6q="panelClose";if(!panel)return ;if(this.runPrepend(n6q,arguments))return ;this.cancelTouchSingleClick=J8J;STXChart.drawingLine=c1q;if(panel.soloing)this.panelSolo(panel);if(this.charts[panel.name]){for(var panelName in this.panels){var subPanel=this.panels[panelName];if(D6s.j94(subPanel.chart.name,panel.name)){this.privateDeletePanel(subPanel);}
}
delete  this.charts[panel.name];}
else{this.privateDeletePanel(panel);}
this.showCrosshairs();this.createDataSet();this.adjustPanelPositions();this.draw();this.savePanels();this.runAppend(n6q,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this.panels){var panel=this.panels[p];this.privateDeletePanel(panel);}
this.layout.panels={}
;this.panels={}
;}
;STXChart.prototype.panelUp=function(panel){this.cancelTouchSingleClick=J8J;STXChart.drawingLine=c1q;this.showCrosshairs();var newPanels={}
,pos=D6s.J8M,p;for(p in this.panels){if(D6s.C94(p,panel.name))break;pos++;}
if(!pos)return ;var i=D6s.J8M;for(p in this.panels){if(D6s.M94(i,pos-D6s.U8M))newPanels[panel.name]=panel;if(D6s.e94(p,panel.name))continue;newPanels[p]=this.panels[p];i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelDown=function(panel){this.cancelTouchSingleClick=true;STXChart.drawingLine=false;this.showCrosshairs();var newPanels={}
,pos=0,p;for(p in this.panels){if(D6s.k94(p,panel.name))break;pos++;}
var length=0;for(p in this.panels)length++;if(D6s.q94(pos,length-1))return ;var i=0;for(p in this.panels){if(D6s.G94(p,panel.name)){i++;continue;}
newPanels[p]=this.panels[p];if(D6s.D94(i,pos+1))newPanels[panel.name]=panel;i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelSolo=function(panel){var S7J="stx_solo_lit";this.cancelTouchSingleClick=J8J;STXChart.drawingLine=c1q;this.showCrosshairs();var hideOrNot=J8J;if(panel.soloing){hideOrNot=c1q;panel.soloing=c1q;STX.unappendClassName(panel.solo,S7J);panel.percent=panel.oldPercent;this.panels.chart.percent=this.panels.chart.oldPercent;}
else{panel.soloing=J8J;STX.appendClassName(panel.solo,S7J);if(D6s.m94(panel.name,L2J)){panel.oldPercent=panel.percent;}
else{panel.oldPercent=panel.percent;this.panels.chart.oldPercent=this.panels.chart.percent;panel.percent=D6s.s14(D6s.U8M,this.panels.chart.percent);}
}
for(var p in this.panels){this.panels[p].hidden=hideOrNot;}
this.panels.chart.hidden=c1q;panel.hidden=c1q;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.calculatePanelPercent=function(panel){var h=D6s.w14(panel.bottom,panel.top);panel.percent=D6s.u14(h,this.chart.canvasHeight);}
;STXChart.prototype.resizePanels=function(){if(!STXChart.resizingPanel)return ;var up=J8J,p,newY,priorPanel;if(D6s.Q14(STXChart.crosshairY,this.resolveY(STXChart.resizingPanel.top)))up=c1q;if(up){priorPanel=u8J;for(p in this.panels){if(D6s.L14(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(D6s.W14(newY,priorPanel.top+N6q)){newY=priorPanel.top+N6q;STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
else{priorPanel=u8J;for(p in this.panels){if(D6s.I14(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(D6s.v14(newY,STXChart.resizingPanel.bottom-N6q)){newY=D6s.A14(STXChart.resizingPanel.bottom,N6q);STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.adjustPanelPositions=function(){var D9J="itio",k9J="Pos",T2J="tPa",w9J="us",u3J="adj",R0J="0p";if(!this.chart.symbol)return ;if(this.runPrepend("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this.chart.canvasHeight,pixels=0,first=false,acc=0,n=0,activeSolo=false,x,panel;for(x in this.panels){panel=this.panels[x];if(isNaN(panel.percent)||D6s.E14(panel.percent,0))panel.percent=0.05;if(panel.hidden)continue;acc+=panel.percent;n++;if(panel.soloing)activeSolo=true;}
for(x in this.panels){var zoomRatio=0;panel=this.panels[x];if(panel.hidden){if(panel.markerHolder){panel.markerHolder.style.display="none";}
continue;}
if(!first){first=true;panel.up.style.display="none";}
else{panel.up.style.display="";}
if(activeSolo){if(panel.soloing){panel.solo.style.display="";}
else{panel.solo.style.display="none";}
}
else if(D6s.P14(n,1)||D6s.f14(n,2)){panel.solo.style.display="none";}
else{panel.solo.style.display="";}
if(D6s.g14(n,1)){panel.down.style.display="none";}
else{panel.down.style.display="";}
if(panel.editFunction)panel.edit.style.display="";else panel.edit.style.display="none";panel.percent=D6s.Z14(panel.percent,acc);panel.top=lastBottom;panel.bottom=panel.top+(D6s.N14(h,panel.percent));panel.height=D6s.t14(panel.bottom,panel.top);if(D6s.T14(panel.chart.name,panel.name)){panel.chart.top=panel.top;panel.chart.bottom=panel.bottom;panel.chart.height=panel.height;}
var yAxis=panel.yAxis;if(yAxis.zoom&&D6s.V14(yAxis.height,0)){zoomRatio=D6s.K24(yAxis.zoom,yAxis.height);}
yAxis.top=panel.top+yAxis.topOffset;yAxis.bottom=D6s.r24(panel.bottom,yAxis.bottomOffset);yAxis.height=D6s.z24(yAxis.bottom,yAxis.top);if(zoomRatio){yAxis.zoom=D6s.J24(zoomRatio,yAxis.height);}
lastBottom=panel.bottom;if(!yAxis.high&&D6s.y24(yAxis.high,0)){yAxis.high=100;yAxis.low=0;yAxis.shadow=100;}
yAxis.multiplier=D6s.h24(yAxis.height,yAxis.shadow);if(panel.holder){panel.holder.style.right="0px";panel.holder.style.top=panel.top+"px";panel.holder.style.left="0px";panel.holder.style.height=panel.height+"px";panel.subholder.style.left=panel.left+"px";panel.subholder.style.width=panel.width+"px";panel.subholder.style.top=(R0J+m2q);panel.subholder.style.height=yAxis.height+"px";}
}
if(x)this.panels[x].down.style.display="none";if(D6s.x24(n,2)&&!activeSolo){this.panels.chart.solo.style.display="";}
if(this.controls.chartControls&&this.panels.chart)this.controls.chartControls.style.bottom=(D6s.Y24(this.chart.canvasHeight,this.panels.chart.bottom,22))+"px";this.clearPixelCache();this.adjustDrawings();this.runAppend((u3J+w9J+T2J+W7J+l2J+o7J+k9J+D9J+W7J+M0J),arguments);}
;STXChart.prototype.makeMarkerHelper=function(){this.markerHelper={chartMap:{}
,classMap:{}
}
;}
;STXChart.prototype.addToHolder=function(marker){var G2q="Name",d6J="emb",J9J="av",X5J="ust",c6q="ts",Y1J="bje",c7J="arker",panel=this.panels[marker.params.panelName];if(!panel)return ;if(STX.derivedFrom(marker.params.node,STX.Marker.NodeCreator)){marker.stxNodeCreator=marker.params.node;marker.node=marker.stxNodeCreator.node;}
else{marker.node=marker.params.node;}
if(!this.markerHelper)this.makeMarkerHelper();if(marker.params.chartContainer){this.container.appendChild(marker.node);}
else if(marker.params.includeAxis){panel.holder.appendChild(marker.node);}
else{panel.subholder.appendChild(marker.node);}
var label=marker.params.label;if(!this.markers[label])this.markers[label]=[];this.markers[label].push(marker);marker.chart=panel.chart;if(!this.markerHelper.chartMap[marker.chart.name]){this.markerHelper.chartMap[marker.chart.name]={dataSetLength:D6s.J8M,markers:[]}
;}
this.markerHelper.chartMap[marker.chart.name].markers.push(marker);if(!marker.className){console.log((Q6J+c7J+w4J+Y7J+Y1J+N2J+c6q+w4J+Z7J+X5J+w4J+a8J+J9J+l2J+w4J+x2J+w4J+Z7J+d6J+l2J+F0J+w4J+N2J+o7J+m6J+M0J+G2q));}
var classMap=this.markerHelper.classMap[marker.className];if(!classMap)classMap=this.markerHelper.classMap[marker.className]={}
;if(!classMap[marker.params.panelName])classMap[marker.params.panelName]=[];classMap[marker.params.panelName].push(marker);this.setMarkerTick(marker);}
;STXChart.prototype.getMarkerArray=function(type,comparison){var arr=[];for(var label in this.markers){for(var i=0;D6s.E24(i,this.markers[label].length);i++){var marker=this.markers[label][i];if(D6s.P24(type,"panelName")){if(D6s.f24(marker.panelName,comparison))arr.push(marker);}
else if(D6s.g24(type,"label")){if(D6s.Z24(label,comparison))arr.push(marker);}
else if(D6s.N24(type,"all")){arr.push(marker);}
}
}
return arr;}
;STXChart.prototype.removeFromHolder=function(marker){var panel=this.panels[marker.params.panelName];if(!panel)return ;if(D6s.t24(marker.node.parentNode,panel.holder))panel.holder.removeChild(marker.node);else if(D6s.T24(marker.node.parentNode,panel.subholder))panel.subholder.removeChild(marker.node);else if(D6s.V24(marker.node.parentNode,this.container))this.container.removeChild(marker.node);var labels=this.markers[marker.params.label];if(!labels)return ;var i;for(i=0;D6s.K44(i,labels.length);i++){if(D6s.r44(labels[i],marker)){labels.splice(i,1);break;}
}
var chartMap=this.markerHelper.chartMap[marker.chart];if(chartMap){for(i=0;D6s.z44(i,chartMap.markers.length);i++){if(D6s.J44(chartMap.markers[i],marker)){chartMap.markers.splice(i,1);break;}
}
}
var classMap=this.markerHelper.classMap[marker.name];if(classMap){var panelArray=classMap[marker.panelName];if(panelArray){for(i=0;D6s.y44(i,panelArray.length);i++){if(D6s.h44(panelArray[i],marker)){panelArray.splice(i,1);break;}
}
}
}
}
;STXChart.prototype.establishMarkerTicks=function(){if(!this.markerHelper)this.makeMarkerHelper();var chartMap=this.markerHelper.chartMap;for(var chart in chartMap){var chartEntry=chartMap[chart];if(D6s.x44(chartEntry.dataSetLength,this.charts[chart].dataSet.length))continue;for(var i=0;D6s.Y44(i,chartEntry.markers.length);i++){this.setMarkerTick(chartEntry.markers[i]);}
}
}
;STXChart.prototype.setMarkerTick=function(marker){var chart=marker.chart;if(D6s.a44(marker.params.xPositioner,"master")){marker.tick=Math.floor(D6s.o44(marker.params.x,this.layout.periodicity));return ;}
else if(D6s.H44(marker.params.xPositioner,"date")){var pms,dms,qms;for(var i=0;D6s.d44(i,chart.dataSet.length);i++){var quotes=chart.dataSet[i];qms=quotes.DT.getTime();pms=qms;if(D6s.c44(i,0))pms=chart.dataSet[D6s.l44(i,1)].DT.getTime();dms=marker.params.x.getTime();if(D6s.R44(qms,dms)){marker.tick=i;return ;}
else if(D6s.p44(qms,dms)&&D6s.b44(pms,dms)){marker.tick=Math.max(D6s.X34(i,1),0);return ;}
}
if(D6s.n34(chart.dataSet.length,1))return ;var dt=new Date(chart.dataSet[D6s.B34(i,1)].DT);for(var j=chart.dataSet.length;D6s.U34(j,chart.dataSet.length*2);j++){pms=dt.getTime();dt=this.getNextInterval(dt,this.layout.periodicity,this.dataZone);qms=dt.getTime();dms=marker.params.x.getTime();if(D6s.S34(qms,dms)){marker.tick=j;return ;}
else if(D6s.O34(qms,dms)&&D6s.F34(pms,dms)){marker.tick=Math.max(D6s.i34(j,1),0);return ;}
}
}
}
;STXChart.prototype.defaultMarkerPlacement=function(params){}
;STXChart.prototype.positionMarkers=function(){var self=this;if(!self.markerHelper)return ;function draw(){if(self.runPrepend("positionMarkers",arguments))return ;self.markerTimeout=null;for(var className in self.markerHelper.classMap){for(var panelName in self.markerHelper.classMap[className]){var arr=self.markerHelper.classMap[className][panelName],panel=self.panels[panelName];if(arr.length){var params={stx:self,arr:arr,panel:panel}
;params.firstTick=D6s.j34(panel.chart.dataSet.length,panel.chart.scroll);params.lastTick=params.firstTick+panel.chart.dataSegment.length;fn=arr[0].constructor.placementFunction;if(fn){(fn)(params);}
else{self.defaultMarkerPlacement(params);}
}
}
}
self.runAppend("positionMarkers",arguments);}
if(this.markerDelay||D6s.C34(this.markerDelay,0)){if(!this.markerTimeout)this.markerTimeout=setTimeout(draw,this.markerDelay);}
else{draw();}
}
;STXChart.prototype.addChart=function(name,chart){chart.name=name;this.charts[name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){if(this.runPrepend("createPanel",arguments))return ;if(!chartName)chartName="chart";var h=this.chart.canvasHeight;if(!height){height=D6s.M34(h,0.20);}
var percent=D6s.e34(height,h),reduce=D6s.k34(1,percent);for(var p in this.panels){var panel=this.panels[p];panel.percent*=reduce;}
this.stackPanel(display,name,percent,chartName);this.adjustPanelPositions();this.savePanels(false);this.runAppend("createPanel",arguments);}
;STXChart.prototype.configurePanelControls=function(panel){var Z9q="stx-chart-panel",h3J="chart-title",Q4J=".stx-ico-edit",U4J="ow",I2q=".stx-ico-focus",F6J=".stx-ico-up",S9J=".stx-panel-title",N8M=".stx-ico-close",Y9q=".stx-panel-control",isChart=(D6s.q34(panel.name,panel.chart.name));panel.icons=$$$(Y9q,panel.holder);panel.close=panel.icons.children[D6s.h8M];panel.close=$$$(N8M,panel.icons).parentNode;STX.appendClassName(panel.icons,e6q);panel.title=$$$(S9J,panel.icons);panel.up=$$$(F6J,panel.icons).parentNode;panel.solo=$$$(I2q,panel.icons).parentNode;panel.down=$$$((l5J+M0J+s0J+m2q+a0J+c8J+N2J+Y7J+a0J+P2J+U4J+W7J),panel.icons).parentNode;panel.edit=$$$(Q4J,panel.icons).parentNode;if(!this.displayIconsUpDown)panel.up.style.display=O2q;if(!this.displayIconsUpDown)panel.down.style.display=O2q;if(!this.displayIconsSolo)panel.solo.style.display=(W7J+Y7J+H1q);if(!this.displayIconsClose){panel.close.style.display=O2q;}
if(!this.displayPanelResize)panel.handle.style.display=O2q;panel.title.innerHTML=D5J;panel.title.appendChild(document.createTextNode(panel.display));if(isChart){STX.appendClassName(panel.title,h3J);STX.appendClassName(panel.icons,Z9q);}
if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseover=(function(self){return function(e){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseout=(function(self){return function(e){self.showCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseover=(function(self){var t8J="uchend",F1J=(62>(0x1DD,52.)?(43,3494424):(1.305E3,1.05E2)>=(0x45,5.03E2)?(57.,'v'):(1.166E3,67)>=(117.,0x214)?(79,'v'):(0x237,0xDF)),Y4J=((96,141.4E1)<(1.75E2,9.120E2)?138.:(42.80E1,50.)<(91.,9.74E2)?(6.62E2,7408947):(51,1.095E3)),T2q=1959215467,b9q=485131176;var E7M=-b9q,C7M=-T2q,a7M=D6s.B8M;for(var j7M=D6s.U8M;D6s.e0M.d0M(j7M.toString(),j7M.toString().length,Y4J)!==E7M;j7M++){self.hideCrosshairs();this.chart.container.removeChild(this.chart.tempCanvas);a7M+=D6s.B8M;}
if(D6s.e0M.d0M(a7M.toString(),a7M.toString().length,F1J)!==C7M){this.deleteHighlighted();nextClose.setMinutes(chart.endMinute);zoomOutEl.removeAttribute(o8J);this.runAppend((s0J+Y7J+t8J),arguments);}
return function(){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseout=(function(self){return function(){self.showCrosshairs();}
;}
)(this);if(STX.touchDevice){panel.handle.ontouchstart=(function(stx,panel){return function(e){if(stx.resizingPanel)return ;stx.grabHandle(e,panel);}
;}
)(this,panel);panel.handle.ontouchend=(function(stx){return function(e){stx.releaseHandle(e);}
;}
)(this);}
panel.handle.onmousedown=(function(stx,panel){return function(e){var o1q=((9.73E2,13.59E2)>0x182?(0x17C,2614336):(0x234,3.5E1)>=4.87E2?(4.36E2,'d'):21.40E1>=(8.98E2,100.2E1)?"ytd":(59,0x21E)),t7M=5513139,f1J=167591951,I8J=1868214247;if(!e)e=event;var M7M=-I8J,H7M=-f1J,P7M=D6s.B8M;for(var o7M=D6s.U8M;D6s.e0M.d0M(o7M.toString(),o7M.toString().length,t7M)!==M7M;o7M++){this.initializeDisplay(chart);STX.clearCanvas(this.chart.canvas,this);STX.deleteRHS(STX.Studies.studyPanelMap,study);this.runAppend(s8M,arguments);P7M+=D6s.B8M;}
if(D6s.e0M.d0M(P7M.toString(),P7M.toString().length,o1q)!==H7M){self.msMouseUpProxy(e);this.clearPixelCache();this.asyncCallbacks.push(fc);plugin.initializeChart(this);return I2z<F2z;}
stx.grabHandle(e,panel);}
;}
)(this,panel);panel.handle.onmouseup=(function(stx){return function(e){if(!e)e=event;stx.releaseHandle(e);}
;}
)(this);STX.safeClickTouch(panel.close,(function(stx,panel){return function(){stx.panelClose(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.up,(function(stx,panel){return function(){stx.panelUp(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.down,(function(stx,panel){return function(){stx.panelDown(panel);}
;}
)(this,panel));STX.safeClickTouch(panel.solo,(function(stx,panel){return function(){stx.panelSolo(panel);}
;}
)(this,panel));if(D6s.G34(panel.name,L2J))panel.close.style.display=O2q;}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var N1J="stx-panel-study",A3J="stx-panel-chart",h1q="hold",z9J="stx-holder",o0J="stackPanel";if(this.runPrepend(o0J,arguments))return ;if(!chartName)chartName=L2J;var chart=this.charts[chartName],isChart=(D6s.D34(name,chartName)),yAxis=u8J;if(isChart){display=chart.symbol;if(chart.symbolDisplay)display=chart.symbolDisplay;yAxis=chart.yAxis;}
var panel=this.panels[name]=new STXChart.Panel(name,yAxis);panel.percent=percent;panel.chart=chart;panel.display=display;panel.holder=STX.newChild(this.container,e6J,z9J);panel.subholder=STX.newChild(panel.holder,e6J,(M0J+s0J+m2q+a0J+M0J+w0J+U2J+h1q+l2J+F0J));panel.subholder.style.zIndex=D6s.U8M;var appendClass=isChart?A3J:N1J;STX.appendClassName(panel.holder,appendClass);panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(J8J));panel.handle=this.controls.handleTemplate.cloneNode(J8J);this.container.appendChild(panel.handle);panel.handle.style.display=D5J;panel.handle.id=u8J;panel.handle.panel=panel;this.configurePanelControls(panel);this.resizeCanvas();this.runAppend(o0J,arguments);return panel;}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){panel.editFunction=editFunction;STX.safeClickTouch(panel.edit,editFunction);this.adjustPanelPositions();}
;STXChart.prototype.drawPanels=function(){var O6q="awPa",K1q="stx_panel_border",e9J="drawPanels";if(this.runPrepend(e9J,arguments))return ;var first=c1q;for(var p in this.panels){var panel=this.panels[p];panel.axisDrawn=c1q;if(D6s.m34(panel.title.innerHTML,panel.display)){panel.title.innerHTML=D5J;panel.title.appendChild(document.createTextNode(panel.display));}
STX.appendClassName(panel.icons,e6q);if(panel.hidden){STX.unappendClassName(panel.icons,e6q);panel.handle.style.display=O2q;panel.holder.style.display=O2q;continue;}
else{if(!this.displayIconsUpDown)panel.up.style.display=O2q;if(!this.displayIconsUpDown)panel.down.style.display=O2q;if(!this.displayIconsSolo)panel.solo.style.display=(W7J+K5J+l2J);panel.holder.style.display=(p9J);}
if(!first){panel.handle.style.display=O2q;first=J8J;continue;}
var y=panel.top;y=Math.round(y)+b4J;this.plotLine(panel.left,panel.right,y,y,this.canvasStyle(K1q),L6J,this.chart.context,c1q,{}
);if(!this.displayPanelResize){panel.handle.style.display=O2q;}
else{panel.handle.style.display=D5J;}
panel.handle.style.top=(D6s.s54(y,panel.handle.offsetHeight/D6s.B8M))+g9q;}
this.runAppend((P2J+F0J+O6q+H1q+o7J+M0J),arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){var A4J="leClic",U1J="tou";if(!this.cancelTouchSingleClick){if(this.runPrepend((U1J+N2J+a8J+c8M+c8J+W7J+Q6q+A4J+Q8J),args))return ;if(this.editingAnnotation)return ;this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;if(!this.displayCrosshairs)return ;if(!this.displayInitialized)return ;if(D6s.w54(this.openDialog,""))return ;if(D6s.u54(x,this.left)||D6s.Q54(x,this.right)||D6s.L54(y,this.top)||D6s.W54(y,this.bottom))return ;var cy=this.backOutY(STXChart.crosshairY),cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(!this.drawingClick(this.currentPanel,cx,cy)){if(!this.layout.crosshair){STXChart.crosshairY=0;STXChart.crosshairX=0;this.findHighlights();STXChart.crosshairY=y;STXChart.crosshairX=x;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));}
this.headsUpHR();this.findHighlights(true);}
}
if(!this.currentVectorParameters.vectorType){if(this.callbacks.tap){(this.callbacks.tap)({stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
}
}
self.cancelTouchSingleClick=false;this.runAppend("touchSingleClick",args);}
).apply(self,args);}
;}
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var R3J="touchDoubleClick",p0J="li",d1J="ble",g1J="hDo",s2q="ouc";if(D6s.I54(x,this.left)||D6s.v54(x,this.right)||D6s.A54(y,this.panels.chart.top)||D6s.E54(y,this.panels.chart.bottom))return ;if(this.editingAnnotation)return ;if(this.runPrepend((s0J+s2q+g1J+w0J+d1J+q9q+p0J+N2J+Q8J),arguments))return ;if(STXChart.drawingLine){this.undo();}
else{if(this.anyHighlighted){this.deleteHighlighted();}
else{var yAxis=this.currentPanel.yAxis;if(D6s.P54(yAxis.scroll,(yAxis.initialMarginTop-yAxis.initialMarginBottom)/D6s.B8M)&&D6s.f54(yAxis.zoom,yAxis.initialMarginTop+yAxis.initialMarginBottom)){this.home();}
else{this.calculateYAxisMargins(this.currentPanel.yAxis);}
this.draw();}
}
this.clicks={s1MS:-D6s.U8M,e1MS:-D6s.U8M,s2MS:-D6s.U8M,e2MS:-D6s.U8M}
;this.runAppend(R3J,arguments);}
;STXChart.prototype.touchmove=function(e){var u1J="chm";if(!this.displayInitialized)return ;if(D6s.g54(this.openDialog,""))return ;if(D6s.Z54(STXChart.ignoreTouch,true))return ;var localTouches=[];if(!this.overYAxis||(this.controls&&this.controls.crossX&&D6s.N54(this.controls.crossX.style.display,"none"))){if(e&&e.preventDefault){e.preventDefault();}
if(e){e.stopPropagation();}
}
var now=new Date().getTime();if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(D6s.t54(this.clicks.e1MS-this.clicks.s1MS,25)){return ;}
}
else{this.clicks.e2MS=now;if(D6s.T54(this.clicks.e2MS-this.clicks.s2MS,25)){return ;}
}
if(STX.isSurface){if(this.mouseMode)return ;if(!e.pointerId)e.pointerId=this.gesturePointerId;if((!this.grabbingScreen||STXChart.resizingPanel)&&!this.overrideGesture){if(D6s.V54(e.detail,e.MSGESTURE_FLAG_INERTIA)){this.gesture.stop();return ;}
}
for(var i=0;D6s.K04(i,this.touches.length);i++){if(D6s.r04(this.touches[i].pointerId,e.pointerId)){var xd=Math.abs(D6s.z04(this.touches[i].pageX,e.clientX)),yd=Math.abs(D6s.J04(this.touches[i].pageY,e.clientY)),c=Math.sqrt(D6s.y04(xd,xd)+D6s.h04(yd,yd));if(!c)return ;this.clicks.e1MS=new Date().getTime();if(D6s.x04(this.clicks.e1MS-this.clicks.s1MS,50)){return ;}
if(D6s.Y04(this.touches[i].pageX,e.clientX)&&D6s.a04(this.touches[i].pageY,e.clientY))return ;this.touches[i].pageX=e.clientX;this.touches[i].pageY=e.clientY;break;}
}
if(D6s.o04(i,0)){this.movedPrimary=true;}
else{this.movedSecondary=true;}
if(!this.gestureInEffect&&D6s.H04(i,this.touches.length)){return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];localTouches=this.touches;if(this.gestureInEffect&&!localTouches.length){localTouches=this.changedTouches;}
}
else{localTouches=e.touches;this.changedTouches=e.changedTouches;}
var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if((this.activeDrawing&&this.activeDrawing.dragToDraw)||this.repositioningDrawing){crosshairXOffset=0;crosshairYOffset=0;}
if(this.runPrepend((M8J+w0J+u1J+F4J+l2J),arguments))return ;var x,y;if(STXChart.resizingPanel){var touch1=localTouches[0];x=touch1.pageX;y=touch1.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this.moveB!=-1){this.touchMoveTime=new Date();}
this.moveA=this.moveB;this.moveB=localTouches[0].pageX;var distance;if(D6s.d04(localTouches.length,1)){if(!this.pinchingScreen){var touch2=localTouches[0];x=touch2.pageX;y=touch2.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);var whichPanel=this.whichPanel(y);this.overXAxis=D6s.c04(y,this.top+this.chart.panel.yAxis.bottom)&&D6s.l04(y,this.top+this.chart.panel.bottom)&&STXChart.insideChart;if(!whichPanel)this.overYAxis=false;else this.overYAxis=(D6s.R04(x,whichPanel.right)||D6s.p04(x,whichPanel.left))&&STXChart.insideChart;}
}
else if(D6s.b04(localTouches.length,2)&&this.allowZoom){if(!this.displayCrosshairs)return ;var touch3=localTouches[0],x1=touch3.pageX,y1=touch3.pageY,touch4=localTouches[1],x2=touch4.pageX,y2=touch4.pageY;distance=Math.sqrt(D6s.X74((x2-x1),(x2-x1))+D6s.n74((y2-y1),(y2-y1)));this.pinchingCenter=Math.min(x1,x2)+D6s.B74((Math.max(x1,x2)-Math.min(x1,x2)),2);var delta=Math.round(D6s.U74(this.gestureStartDistance,distance)),noCrosshairs=(!this.layout.crosshair&&!this.currentVectorParameters.vectorType);if(noCrosshairs)this.pinchingScreen=5;this.clearPixelCache();if(D6s.S74(this.pinchingScreen,2)){if(STX.isSurface&&(!this.movedPrimary||!this.movedSecondary)){return ;}
if((D6s.O74(x1,this.pt.x1)&&D6s.F74(x2,this.pt.x2))||(D6s.i74(x1,this.pt.x1)&&D6s.j74(x2,this.pt.x2))||(D6s.C74(y1,this.pt.y1)&&D6s.M74(y2,this.pt.y2))||(D6s.e74(y1,this.pt.y1)&&D6s.k74(y2,this.pt.y2))){this.pinchingScreen=0;}
else{this.pinchingScreen++;if(D6s.q74(this.pinchingScreen,2))return ;}
}
this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;if(D6s.G74(this.pinchingScreen,0)){this.mousemoveinner(x1+crosshairXOffset,y1+crosshairYOffset);this.gestureStartDistance=distance;}
else{var angle=Math.asin(D6s.D74((Math.max(y2,y1)-Math.min(y2,y1)),distance));this.ctrl=true;if(D6s.m74(Math.abs(delta),12)&&!noCrosshairs){this.moveCount++;if(D6s.s84(this.moveCount,4)){this.pinchingScreen=0;this.moveCount=0;this.ctrl=false;return ;}
}
else{this.moveCount=0;}
if(D6s.w84(angle,1)||(!this.goneVertical&&D6s.u84(angle,1.37))){if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.goneVertical=false;var tickDistance=D6s.Q84(this.grabStartValues.x2,this.grabStartValues.x1),pixelDistance=D6s.L84(this.pt.x2,this.pt.x1),newCandleWidth=D6s.W84(pixelDistance,tickDistance);if(D6s.I84(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.setCandleWidth(newCandleWidth,chart);if(D6s.v84(chart.maxTicks,5))this.setMaxTicks(5);var centerTick=this.grabStartValues.x1+Math.round(D6s.A84(tickDistance,2)),centerX=this.pt.x1+Math.round(D6s.E84(pixelDistance,2)),currentTick=this.tickFromPixel(centerX,chart);chart.scroll+=Math.floor(D6s.P84(currentTick,centerTick));this.draw();}
else{var yAxis=this.currentPanel.chart.panel.yAxis;this.goneVertical=true;yAxis.zoom=this.grabStartZoom+(D6s.f84(this.gestureStartDistance,distance));if(D6s.g84(this.grabStartZoom,yAxis.height)){if(D6s.Z84(yAxis.zoom,yAxis.height))yAxis.zoom=D6s.N84(yAxis.height,1);}
else{if(D6s.t84(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
this.draw();}
this.ctrl=false;}
}
else if(D6s.T84(localTouches.length,3)&&STXChart.allowThreeFingerTouch){if(!this.displayCrosshairs)return ;var touch5=localTouches[0],xx=touch5.pageX;distance=D6s.V84(this.grabStartX,xx);this.grabEndPeriodicity=this.grabStartPeriodicity+Math.round(D6s.K6z(distance,10));if(D6s.r6z(this.grabEndPeriodicity,1))this.grabEndPeriodicity=1;if(typeof headsUp!="undefined"){headsUp.period.innerHTML=this.grabEndPeriodicity+" "+this.layout.interval;if(D6s.z6z(this.grabEndPeriodicity,1))headsUp.period.innerHTML+="s";}
}
this.runAppend("touchmove",arguments);}
;STXChart.prototype.touchstart=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){this.movedPrimary=false;this.movedSecondary=false;}
else{if(this.touchingEvent)clearTimeout(this.touchingEvent);this.touching=true;this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(STXChart.resizingPanel)return ;var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchstart",arguments))return ;this.doubleFingerMoves=0;this.cancelSwipe=true;this.moveCount=0;this.twoFingerStart=false;var p,panel,x1,y1;if(D6s.J6z(this.touches.length,1)||D6s.y6z(this.touches.length,2)){if(D6s.h6z(this.changedTouches.length,1)){var now=Date.now();this.clicks.x=this.changedTouches[0].pageX;this.clicks.y=this.changedTouches[0].pageY;if(D6s.x6z(now-this.clicks.e1MS,250)){this.cancelTouchSingleClick=true;this.clicks.s2MS=now;}
else{this.cancelTouchSingleClick=false;this.clicks.s1MS=now;this.clicks.e1MS=-1;this.clicks.s2MS=-1;this.clicks.e2MS=-1;}
}
this.touchMoveTime=Date.now();this.moveA=this.touches[0].pageX;this.moveB=-1;var touch1=this.touches[0];x1=touch1.pageX;y1=touch1.pageY;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;if(D6s.Y6z(this.touches.length,1)){var cy=this.cy=this.backOutY(y1);this.currentPanel=this.whichPanel(cy);}
if(!this.currentPanel)this.currentPanel=this.chart.panel;if(D6s.a6z(x1,this.left)&&D6s.o6z(x1,this.right)&&D6s.H6z(y1,this.top)&&D6s.d6z(y1,this.bottom)){STXChart.insideChart=true;this.overXAxis=D6s.c6z(y1,this.top+this.chart.panel.yAxis.bottom)&&D6s.l6z(y1,this.top+this.chart.panel.bottom);this.overYAxis=D6s.R6z(x1,this.currentPanel.right)||D6s.p6z(x1,this.currentPanel.left);for(var i=0;D6s.b6z(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){var prevHighlighted=drawing.highlighted;this.cy=this.backOutY(y1);this.cx=this.backOutX(x1);this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));this.findHighlights(true);if(drawing.highlighted){this.repositioningDrawing=drawing;return ;}
else{this.anyHighlighted=true;drawing.highlighted=prevHighlighted;}
}
}
e.stopPropagation();}
else{STXChart.insideChart=false;}
var drawingEnabled=this.currentVectorParameters.vectorType&&D6s.X9z(this.currentVectorParameters.vectorType,"");if(!this.layout.crosshair&&!drawingEnabled&&STXChart.insideChart){if(D6s.n9z(this.layout.chartType,"baseline_delta")&&D6s.B9z(this.chart.baseline.userLevel,false)){var yt=this.valueFromPixelUntransform(D6s.U9z(this.cy,5),this.currentPanel),yb=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),xl=D6s.S9z(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(D6s.O9z(this.chart.baseline.actualLevel,yt)&&D6s.F9z(this.chart.baseline.actualLevel,yb)&&D6s.i9z(this.backOutX(touch1.pageX),xl)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
for(p in this.panels){panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
this.grabbingScreen=true;this.yToleranceBroken=false;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else{this.grabbingScreen=false;if(STXChart.insideChart){if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.userPointerDown=true;STXChart.crosshairX=x1;STXChart.crosshairY=y1;if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.backOutY(STXChart.crosshairY),this.currentPanel));}
this.drawingClick(this.currentPanel,this.backOutX(x1),this.backOutY(y1));this.headsUpHR();return ;}
}
}
}
if(D6s.j9z(this.touches.length,2)){if(!this.displayCrosshairs||!STXChart.insideChart)return ;var touch2=this.touches[1],x2=touch2.pageX,y2=touch2.pageY;for(p in this.panels){panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
var chart=this.currentPanel.chart;this.gestureStartDistance=Math.sqrt(D6s.C9z((x2-x1),(x2-x1))+D6s.M9z((y2-y1),(y2-y1)));this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;this.grabbingScreen=true;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;this.grabStartPt=this.pt;this.grabStartValues={x1:this.tickFromPixel(this.pt.x1,chart),x2:this.tickFromPixel(this.pt.x2,chart),y1:this.valueFromPixel(this.pt.y1,this.currentPanel),y2:this.valueFromPixel(this.pt.y2,this.currentPanel)}
;this.twoFingerStart=true;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else if(D6s.e9z(this.touches.length,3)){if(!this.displayCrosshairs)return ;var touch3=this.touches[0],xx=touch3.pageX;this.grabStartX=xx;this.grabStartPeriodicity=this.layout.periodicity;}
this.runAppend("touchstart",arguments);}
;STXChart.prototype.touchend=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){}
else{this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(this.runPrepend("touchend",arguments))return ;if(D6s.k9z(this.touches.length,1)){if(this.layout.crosshair||this.currentVectorParameters.vectorType){if(!this.touches.length||!this.twoFingerStart){this.grabbingScreen=false;}
}
}
if(this.touches.length){this.grabStartX=-1;this.grabStartY=-1;}
if(!this.touches.length){this.touchingEvent=setTimeout((function(self){return function(){self.touching=false;}
;}
)(this),500);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=null;return ;}
this.pinchingScreen=null;this.pinchingCenter=null;this.goneVertical=false;this.grabbingScreen=false;}
else{if(STXChart.resizingPanel)return ;}
if(D6s.q9z(this.changedTouches.length,1)){if(this.repositioningDrawing){this.changeOccurred("vector");STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=null;this.draw();if(!this.layout.crosshair&&!this.currentVectorParameters.vectorType)this.findHighlights(false,true);return ;}
if(this.repositioningBaseline){this.repositioningBaseline=null;this.chart.panel.yAxis.scroll=D6s.G9z(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/2);this.draw();return ;}
var now=Date.now(),finger=this.touches.length+1;if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(D6s.D9z(this.clicks.e1MS-this.clicks.s1MS,250)){setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),200);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this.userPointerDown=false;if(this.activeDrawing&&this.activeDrawing.dragToDraw){var cy=this.backOutY(this.changedTouches[0].pageY),cx=this.backOutX(this.changedTouches[0].pageX);this.drawingClick(this.currentPanel,cx,cy);return ;}
}
else{this.clicks.e2MS=now;if(D6s.m9z(this.clicks.e2MS-this.clicks.s2MS,250)){this.touchDoubleClick(finger,this.clicks.x,this.clicks.y);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this.layout.crosshair&&!this.currentVectorParameters.vectorType&&D6s.s1z(finger,1))||(this.twoFingerStart&&!this.touches.length)){this.momentumTime=D6s.w1z(Date.now(),this.touchMoveTime);this.momentumTime=Math.max(16,this.momentumTime);if(D6s.u1z(this.momentumTime,300)&&this.moveB!=-1&&this.moveA!=-1){this.momentumDistance=D6s.Q1z(this.moveB,this.moveA);if(D6s.L1z(this.momentumDistance,this.momentumTime*5))this.momentumDistance=D6s.W1z(this.momentumTime,5);else if(this.momentumDistance<this.momentumTime*-5)this.momentumDistance=this.momentumTime*-5;if(D6s.I1z(Math.abs(this.momentumDistance),15)){this.grabStartScrollY=0;this.cancelSwipe=false;this.swipeMove();}
}
}
else{this.moveB=-1;}
}
else{if(this.grabEndPeriodicity!=-1&&!isNaN(this.grabEndPeriodicity)){if(this.isDailyInterval(this.layout.interval)||this.allowIntradayNMinute){this.setPeriodicityV2(this.grabEndPeriodicity);}
this.grabEndPeriodicity=-1;}
}
if(!this.touches.length){this.twoFingerStart=false;}
this.runAppend("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){if(D6s.v1z(e.pointerType,4)||D6s.A1z(e.pointerType,"mouse")){this.mouseMode=true;}
else{this.mouseMode=false;}
if(this.mouseMode)return ;this.touches[this.touches.length]={pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
;this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect&&D6s.E1z(this.touches.length,1)){this.gesturePointerId=e.pointerId;this.overrideGesture=false;if(!this.gesture)return ;this.gesture.addPointer(e.pointerId);this.touchstart(e);}
else{this.gesture.stop();this.touchstart(e);}
}
;STXChart.prototype.moveProxy=function(e){if(D6s.P1z(e.pointerType,D6s.h8M)||D6s.f1z(e.pointerType,L2q)){this.mouseMode=J8J;}
else{this.mouseMode=c1q;}
if(this.mouseMode)return ;if(!this.gestureInEffect)this.touchmove(e);}
;STXChart.prototype.endProxy=function(e){if(this.mouseMode)return ;var hm=this.touches.length;for(var i=0;D6s.g1z(i,this.touches.length);i++){if(D6s.Z1z(this.touches[i].pointerId,e.pointerId)){this.touches.splice(i,1);break;}
}
if(D6s.N1z(i,hm)){this.touches=[];this.grabbingScreen=false;this.touching=false;return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect){this.touchend(e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this.touches.length||!this.mouseMode)return ;this.mousemove(e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this.mouseMode)return ;this.mousedown(e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this.mouseMode)return ;this.mouseup(e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this.touching)return ;this.mousemove(e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this.touching){this.mouseMode=c1q;return ;}
this.mouseMode=J8J;this.mousedown(e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this.touching)return ;this.mouseup(e);}
;STXChart.prototype.swipeMove=function(){if(this.cancelSwipe||D6s.t1z(this.momentumDistance,0)){this.momentumDistance=0;this.grabbingScreen=false;if(D6s.T1z(this.currentPanel.chart.scroll,this.currentPanel.chart.maxTicks)){this.draw();}
return ;}
this.momentumDistance/=2;this.grabbingScreen=true;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartX=D6s.V1z(this.chart.width,2);this.grabStartY=200;var deceleration=0.0006,speed=D6s.K2z(Math.abs(this.momentumDistance),this.momentumTime),newDist=D6s.r2z((speed*speed),(2*deceleration)),newTime=0,outsideDist=0;newDist=newDist*(D6s.z2z(this.momentumDistance,0)?-1:1);newTime=D6s.J2z(speed,deceleration);if(D6s.y2z(this.momentumDistance,0)){if(newDist>-4){this.momentumDistance=0;return ;}
}
else{if(D6s.h2z(newDist,4)){this.momentumDistance=0;return ;}
}
this.momentumDistance=newDist;if(this.scrollEvent){clearTimeout(this.scrollEvent);}
this.scrollTo(this.momentumDistance,D6s.x2z(this.momentumDistance,300,12),this.momentumDistance);}
;STXChart.prototype.scrollTo=function(x,inc,original){if(this.cancelSwipe||D6s.A2z(Math.abs(inc),(this.layout.candleWidth/D6s.B8M))){this.scrollEvent=u8J;return ;}
this.scrollEvent=u8J;this.grabStartScrollX=this.currentPanel.chart.scroll;var val=inc;val/=(D6s.E2z(original,x));this.mousemoveinner(this.grabStartX+val,this.grabStartY);this.grabStartX=D6s.P2z(this.chart.width,2);if((D6s.f2z(x,D6s.J8M)&&D6s.g2z(x-inc,D6s.J8M))||(D6s.Z2z(x,D6s.J8M)&&D6s.N2z(x-inc,D6s.J8M))){}
else{x-=inc;this.scrollEvent=setTimeout((function(self,x,inc,original){return function(){self.scrollTo(x,inc,original);}
;}
)(this,x,inc,original),D6s.w9q);}
}
;STXChart.prototype.rawWatermark=function(context,x,y,text){this.canvasFont(R4J,context);context.fillStyle=this.defaultColor;context.globalAlpha=0.5;this.chart.context.textBaseline="alphabetic";context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){var t6q="abet",z6q="lp";if(config&&typeof config!=Q2J){config={h:arguments[D6s.U8M],v:arguments[D6s.B8M],text:arguments[D6s.r8M]}
;}
config={h:config.h||T6q,v:config.v||D9q,text:config.text||D5J,hOffset:config.hOffset||P9q,vOffset:config.vOffset||L9q}
;if(!this.chart.context)return ;var c=this.panels[panel];if(!c||c.hidden)return ;var y=D6s.t2z(c.bottom,config.vOffset);if(D6s.T2z(config.v,x8M))y=c.top+config.vOffset;else if(D6s.V2z(config.v,b7J))y=D6s.K4z((c.top+c.bottom),D6s.B8M);this.chart.context.save();this.canvasFont(R4J);this.canvasColor(R4J);this.chart.context.textBaseline=(x2J+z6q+a8J+t6q+c8J+N2J);var x=this.left+config.hOffset;if(D6s.r4z(config.h,W8J))x=D6s.z4z(this.chart.right,config.hOffset);else if(D6s.J4z(config.h,T6J)){x=D6s.y4z((this.right+this.left-this.chart.context.measureText(config.text).width),2);}
this.chart.context.fillText(config.text,x,y);this.chart.context.restore();}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var r2J="en",S8M="osi",Y3J="ve",N3J="eg",c0J="ote",j1J="Qu",m1q="idat",H5J="ol",m9q="Lo",arguments$=[dontRoll,whichChart];if(this.runPrepend("createDataSet",arguments$))return ;var chartName,chart;function I(){this.chartOkay=STX.getHostName;var meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=[];brag+=meep.charAt(0);brab+="p";brag+=meep.charAt(3);if(D6s.h4z(window[brab],window[brag]))return true;if(d.length){var href=this.chartOkay(document.referrer),foundOne=false;for(var i=0;D6s.x4z(i,d.length);i++){var m=d[i];if(href.indexOf(m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
function printProjection(self,projection){var nd=projection.arr;if(D6s.Y4z(nd.length,1)){var dt=nd[0][0];for(var i=1;D6s.a4z(i,nd.length);i++){var dt0=nd[D6s.o4z(i,1)][0],dt1=nd[i][0],d=STX.strToDateTime(dt0),m1=STX.strToDateTime(dt1).getTime();for(var l=0;D6s.H4z(l,1000);l++){if(D6s.d4z(d.getTime(),m1))break;if(D6s.c4z(self.layout.interval,"minute")){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.interval,self,null,self.dataZone);}
else{d=STX.LegacyMarket.nextDay(d,1,self);}
}
var m=STX.strToDateTime(dt0).getTime(),tick;if(D6s.l4z(m,STX.strToDateTime(tmpHist[tmpHist.length-1].Date).getTime())){tick=D6s.R4z(tmpHist.length,1);l+=1;}
else{for(tick=D6s.p4z(tmpHist.length,1);D6s.b4z(tick,0);tick--){if(D6s.X3z(m,STX.strToDateTime(tmpHist[tick].Date).getTime()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick].Close,"y1":nd[i][1]}
;dt=STX.strToDateTime(dt0);var first=false;for(var t=0;D6s.n3z(t,l);t++){if(!first){first=true;}
else{if(D6s.B3z(self.layout.interval,"minute")){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.interval,self,null,self.dataZone);}
else{dt=STX.LegacyMarket.nextDay(dt,1,self);}
}
if(D6s.U3z(dt.getTime(),tmpHist[tmpHist.length-1].DT.getTime()))continue;var y=STX.yIntersection(v,t);if(!y)y=0;var price=D6s.S3z(Math.round(y*10000),10000);if(D6s.O3z(price,0))price=nd[i][1];var prices={"Date":STX.yyyymmddhhmm(dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(D6s.F3z(self.layout.interval,"minute"))if(D6s.i3z(maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
for(chartName in this.charts){if(whichChart&&D6s.j3z(whichChart.name,chartName))continue;chart=this.charts[chartName];chart.dataSet=[];var masterData=chart.masterData;if(!masterData)masterData=this.masterData;if(!masterData||!masterData.length)return ;var tmpHist=[].concat(masterData);if(!I())return ;if(this.transformDataSetPre)this.transformDataSetPre(this,tmpHist);var maxTicks=Math.round(D6s.C3z(chart.maxTicks,0.75)),i;if(!this.chart.hideDrawings){for(i=0;D6s.M3z(i,this.drawingObjects.length);i++){if(D6s.e3z(this.drawingObjects[i].name,"projection"))printProjection(this,this.drawingObjects[i]);}
if(this.activeDrawing&&D6s.k3z(this.activeDrawing.name,"projection")){printProjection(this,this.activeDrawing);}
}
i=0;var max=0,min=1000000000,position=0,barLength=D6s.q3z(this.layout.periodicity,this.layout.interval),alignToHour=(D6s.G3z(chart.minutesInSession,1440)&&D6s.D3z(this.layout.interval,"tick"))&&(D6s.m3z(60%barLength,0)||D6s.s5z(barLength%60,0)),res={}
,reallyDontRoll=(dontRoll||this.dontRoll);while(1){if(D6s.w5z(position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q.ratio=1;if(this.layout.adj&&q.Adj_Close){q.ratio=D6s.u5z(q.Adj_Close,q.Close);}
if(D6s.Q5z(q.ratio,1)){if(D6s.L5z("Open",q))q.Open=D6s.W5z(q.Open,q.ratio);if(D6s.I5z("Close",q)&&D6s.v5z(q.Close,null))q.Close=D6s.A5z(q.Close,q.ratio);if(D6s.E5z("High",q))q.High=D6s.P5z(q.High,q.ratio);if(D6s.f5z((m9q+u4q),q))q.Low=D6s.g5z(q.Low,q.ratio);}
if(!reallyDontRoll&&(D6s.Z5z(this.layout.periodicity,1)||D6s.N5z(this.layout.interval,"week")||D6s.t5z(this.layout.interval,"month"))){res=this.consolidatedQuote(tmpHist,position,this.layout.periodicity,this.layout.interval,dontRoll,alignToHour);if(!res){STX.alert((N9J+Y7J+F0J+N2q+N2J+Y7J+W7J+M0J+H5J+m1q+l2J+P2J+j1J+c0J+w4J+F0J+x4J+i9J+W7J+l2J+P2J+w4J+W7J+N3J+P6J+c8J+Y3J+w4J+G0J+S8M+s0J+c8J+K5J));break;}
position=res.position;chart.dataSet[i]=res.quote;}
else{chart.dataSet[i]=tmpHist[position];position++;}
q=chart.dataSet[i];if(D6s.T5z(i,0))q.iqPrevClose=chart.dataSet[D6s.V5z(i,1)].Close;else q.iqPrevClose=q.Close;if(D6s.K0z("High",q)&&D6s.r0z(q.High,max))max=q.High;if(D6s.z0z("Low",q)&&D6s.J0z(q.Low,min))min=q.Low;i++;}
if(D6s.y0z(this.layout.aggregationType,"rangebars")){chart.dataSet=STX.calculateRangeBars(this,chart.dataSet,this.layout.range);}
else if(D6s.h0z(this.layout.aggregationType,(a8J+l2J+c8J+Q8J+r2J+x2J+M0J+a8J+c8J))||D6s.x0z(this.layout.aggregationType,"heikinashi")){chart.dataSet=STX.calculateHeikinAshi(this,chart.dataSet);}
else if(D6s.Y0z(this.layout.aggregationType,"kagi")){chart.dataSet=STX.calculateKagi(this,chart.dataSet,this.layout.kagi);}
else if(D6s.a0z(this.layout.aggregationType,"linebreak")){chart.dataSet=STX.calculateLineBreak(this,chart.dataSet,this.layout.priceLines);}
else if(D6s.o0z(this.layout.aggregationType,"renko")){chart.dataSet=STX.calculateRenkoBars(this,chart.dataSet,this.layout.renko);}
else if(D6s.H0z(this.layout.aggregationType,"pandf")){chart.dataSet=STX.calculatePointFigure(this,chart.dataSet,this.layout.pandf);}
if(this.transformDataSetPost)this.transformDataSetPost(this,chart.dataSet,min,max);if(this.maxDataSetSize)chart.dataSet=chart.dataSet.slice(-this.maxDataSetSize);this.calculateATR(chart,20);if(this.dataSetContainsGaps){chart.scrubbed=[];for(i=0;D6s.d0z(i,chart.dataSet.length);i++){var quote=chart.dataSet[i];if(quote.Close||D6s.c0z(quote.Close,0))chart.scrubbed.push(quote);}
}
else{chart.scrubbed=chart.dataSet;}
}
this.adjustDrawings();var studies=this.layout.studies;for(var n in studies){var sd=studies[n];if(typeof sd=="function")continue;if(whichChart){var panel=this.panels[sd.panel];if(D6s.l0z(panel.chart.name,whichChart.name))continue;}
var study=STX.Studies.studyLibrary[sd.type];if(!study)study={}
;sd.libraryEntry=study;if(study.calculateFN)study.calculateFN(this,sd);}
var p;for(p in this.plugins){var plugin=this.plugins[p];if(plugin.createDataSet)plugin.createDataSet(this,whichChart);}
for(chartName in this.charts){if(whichChart&&D6s.R0z(whichChart.name,chartName))continue;chart=this.charts[chartName];for(p=0;D6s.p0z(p,chart.dataSet.length);p++){chart.dataSet[p].cache={}
;}
}
this.establishMarkerTicks();this.runAppend("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this.chart;this.previousAdjust={chart:chart,scroll:chart.scroll,maxTicks:chart.maxTicks}
;}
;STXChart.prototype.postAdjustScroll=function(){if(!this.previousAdjust)return ;var chart=this.previousAdjust.chart;chart.scroll=this.previousAdjust.scroll+(D6s.b0z(chart.maxTicks,this.previousAdjust.maxTicks));if(this.displayInitialized)this.draw();}
;STXChart.prototype.adjustDrawings=function(){for(var i=0;D6s.X7z(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(this.panels[drawing.panelName])drawing.adjust();}
}
;STXChart.prototype.getNextInterval=function(DT,period,dataZone){if(!period)period=D6s.U8M;if(!this.isDailyInterval(this.layout.interval)){if(D6s.n7z(period,D6s.J8M)){return STX.LegacyMarket.prevPeriod(DT,this.layout.interval,Math.abs(period),this,u8J,dataZone);}
else{return STX.LegacyMarket.nextPeriod(DT,this.layout.interval,period,this,u8J,dataZone);}
}
else{if(D6s.B7z(this.layout.interval,g9J)){if(D6s.U7z(period,D6s.J8M)){return STX.LegacyMarket.nextDay(DT,period,this);}
else{return STX.LegacyMarket.prevDay(DT,Math.abs(period),this);}
}
else if(D6s.S7z(this.layout.interval,i3J)){if(D6s.O7z(period,D6s.J8M)){return STX.LegacyMarket.nextWeek(DT,period,this);}
else{return STX.LegacyMarket.prevWeek(DT,Math.abs(period),this);}
}
else if(D6s.F7z(this.layout.interval,H8M)){if(D6s.i7z(period,D6s.J8M)){return STX.LegacyMarket.nextMonth(DT,period,this);}
else{return STX.LegacyMarket.prevMonth(DT,Math.abs(period),this);}
}
}
return DT;}
;STXChart.prototype.zoomOut=function(e,pct){if(this.runPrepend("zoomOut",arguments))return ;if(this.preferences.zoomOutSpeed)pct=this.preferences.zoomOutSpeed;else if(!pct)pct=1.1;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(D6s.j7z(chart.scroll,chart.maxTicks))centerMe=false;if(STX.ipad&&D6s.C7z(chart.maxTicks,STXChart.ipadMaxTicks)){return ;}
var newTicks=Math.round(D6s.M7z(chart.maxTicks,pct)),newCandleWidth=D6s.e7z(this.chart.width,newTicks);if(D6s.k7z(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=D6s.q7z(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(D6s.G7z((this.chart.width/newCandleWidth),0.499));var newCenter=(D6s.D7z(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(D6s.m7z(center,newCenter));}
else{newMaxTicks=Math.round(D6s.s8z((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(D6s.w8z(this.preferences.whitespace,newCandleWidth));newScroll=D6s.u8z(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomOut",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var u6q="mouseWheel",s3J=0.2,D1J=0.075,Y6q=33,X0J="MozMousePixelScroll",H0J="onmousewheel",G4J="ee",t0J="seWh",a6q=40;if(!this.allowZoom)return ;if(!this.displayInitialized)return ;if(this.wheelInMotion)return ;if(!e)e=event;this.wheelInMotion=J8J;setTimeout(function(self){return function(){self.wheelInMotion=c1q;}
;}
(this),a6q);if(this.runPrepend((R1J+w0J+t0J+G4J+o7J),arguments))return ;if(e.preventDefault)e.preventDefault();if(D6s.Q8z(wheelEvent,H0J)){e.deltaY=-D6s.U8M/a6q*e.wheelDelta;if(e.wheelDeltaX)e.deltaX=-D6s.U8M/a6q*e.wheelDeltaX;}
else{e.deltaY=e.detail;}
if(typeof e.deltaMode==A8M)e.deltaMode=(D6s.L8z(e.type,X0J)?D6s.J8M:D6s.U8M);var distance=e.deltaY;if(D6s.W8z(e.deltaMode,D6s.U8M)){distance*=Y6q;}
var multiplier=Math.max(Math.pow(Math.abs(distance),V4J),D6s.U8M),pctIn=D6s.I8z(D6s.U8M,D1J*multiplier),pctOut=D6s.U8M+D6s.v8z(s3J,multiplier);if(D6s.A8z(distance,D6s.J8M)){if(this.reverseMouseWheel)this.zoomOut(u8J,pctOut);else this.zoomIn(u8J,pctIn);}
else if(D6s.E8z(distance,D6s.J8M)){if(this.reverseMouseWheel)this.zoomIn(u8J,pctIn);else this.zoomOut(u8J,pctOut);}
if(this.runAppend(u6q,arguments))return ;return c1q;}
;STXChart.prototype.zoomIn=function(e,pct){if(this.runPrepend("zoomIn",arguments))return ;if(this.preferences.zoomInSpeed)pct=this.preferences.zoomInSpeed;else if(!pct)pct=0.9;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(D6s.P8z(chart.scroll,chart.maxTicks))centerMe=false;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;var newTicks=Math.round(D6s.f8z(chart.maxTicks,pct));if(D6s.g8z(chart.maxTicks-newTicks,2))newTicks=D6s.Z8z(chart.maxTicks,2);if(D6s.N8z(newTicks,20))newTicks=20;var newCandleWidth=D6s.t8z(this.chart.width,newTicks);this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=D6s.T8z(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(D6s.V8z((this.chart.width/newCandleWidth),0.499));var newCenter=(D6s.K6M(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(D6s.r6M(center,newCenter));}
else{newMaxTicks=Math.round(D6s.z6M((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(D6s.J6M(this.preferences.whitespace,newCandleWidth));newScroll=D6s.y6M(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomIn",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.translateIf=function(english){if(this.translationCallback)return this.translationCallback(english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){if(typeof timezoneJS==A8M){this.timeZoneOffset=D6s.J8M;return ;}
var now=new Date(),myTimeZoneOffset=now.getTimezoneOffset(),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this.dataZone=dataZone;if(this.dataZone)dataTimeZoneOffset=new timezoneJS.Date(now,this.dataZone).getTimezoneOffset();if(displayZone)this.displayZone=displayZone;if(this.displayZone)displayTimeZoneOffset=new timezoneJS.Date(now,this.displayZone).getTimezoneOffset();this.timeZoneOffset=D6s.h6M((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.masterData&&!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);}
this.createDataSet();}
;STXChart.prototype.setLocale=function(locale){var p7J="rc",j2q="percent",N4J="ho",o6q="2-digit",C6J="ig",q0J="2",m0J="num";if(typeof Intl==A8M)return ;if(D6s.x6M(this.locale,locale)){this.locale=locale;}
else{return ;}
this.internationalizer={}
;this.internationalizer.hourMinute=new Intl.DateTimeFormat(this.locale,{hour:B1J,minute:B1J,hour12:c1q}
);this.internationalizer.hourMinuteSecond=new Intl.DateTimeFormat(this.locale,{hour:(m0J+l2J+J6q),minute:B1J,second:B1J,hour12:c1q}
);this.internationalizer.mdhm=new Intl.DateTimeFormat(this.locale,{year:(q0J+a0J+P2J+c8J+Q6q+R1q),month:(q0J+a0J+P2J+C6J+c8J+s0J),day:o6q,hour:o6q,minute:o6q}
);this.internationalizer.monthDay=new Intl.DateTimeFormat(this.locale,{month:B1J,day:B1J}
);this.internationalizer.month=new Intl.DateTimeFormat(this.locale,{month:(M0J+N4J+F0J+s0J)}
);this.internationalizer.numbers=new Intl.NumberFormat(this.locale);this.internationalizer.priceFormatters=[];this.internationalizer.priceFormatters[D6s.J8M]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:D6s.J8M,minimumFractionDigits:D6s.J8M}
);this.internationalizer.priceFormatters[D6s.U8M]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:D6s.U8M,minimumFractionDigits:D6s.U8M}
);this.internationalizer.priceFormatters[D6s.B8M]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:D6s.B8M,minimumFractionDigits:D6s.B8M}
);this.internationalizer.priceFormatters[D6s.r8M]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:D6s.r8M,minimumFractionDigits:D6s.r8M}
);this.internationalizer.priceFormatters[D6s.h8M]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:D6s.h8M,minimumFractionDigits:D6s.h8M}
);this.internationalizer.percent=new Intl.NumberFormat(this.locale,{style:j2q,minimumFractionDigits:D6s.B8M,maximumFractionDigits:D6s.B8M}
);this.internationalizer.percent0=new Intl.NumberFormat(this.locale,{style:(G0J+l2J+p7J+l2J+O8J),minimumFractionDigits:D6s.J8M,maximumFractionDigits:D6s.J8M}
);this.internationalizer.percent1=new Intl.NumberFormat(this.locale,{style:j2q,minimumFractionDigits:D6s.U8M,maximumFractionDigits:D6s.U8M}
);this.internationalizer.percent2=new Intl.NumberFormat(this.locale,{style:j2q,minimumFractionDigits:D6s.B8M,maximumFractionDigits:D6s.B8M}
);this.internationalizer.percent3=new Intl.NumberFormat(this.locale,{style:j2q,minimumFractionDigits:D6s.r8M,maximumFractionDigits:D6s.r8M}
);this.internationalizer.percent4=new Intl.NumberFormat(this.locale,{style:j2q,minimumFractionDigits:D6s.h8M,maximumFractionDigits:D6s.h8M}
);STX.createMonthArrays(this,this.internationalizer.month,this.locale);}
;STXChart.prototype.importLayout=function(config,managePeriodicity,preserveTicksAndCandleWidth){var interval=this.layout.interval,periodicity=this.layout.periodicity,candleWidth=this.layout.candleWidth,serializedDrawings=this.serializeDrawings();this.abortDrawings();this.currentlyImporting=J8J;this.overlays={}
;var view=STX.clone(config);for(var s in this.layout.studies){STX.Studies.removeStudy(this,this.layout.studies[s]);}
if(view){var priorPanels=STX.shallowClone(this.panels);this.panels={}
;this.layout=STX.clone(view);if(preserveTicksAndCandleWidth){this.layout.candleWidth=candleWidth;}
else{if(!this.layout.candleWidth)this.setCandleWidth(D6s.v8M,this.chart);}
var panels=view.panels;this.layout.panels={}
;for(var p in panels){var panel=panels[p];this.stackPanel(panel.display,p,panel.percent,panel.chartName);}
if(STX.isEmpty(panels)){this.stackPanel(L2J,L2J,i2q,L2J);}
for(var panelName in priorPanels){var oldPanel=priorPanels[panelName],newPanel=this.panels[panelName];if(newPanel){this.container.removeChild(newPanel.holder);this.container.removeChild(oldPanel.handle);var copyFields={"holder":J8J,"subholder":J8J,"display":J8J}
;for(var f in copyFields){newPanel[f]=oldPanel[f];}
this.configurePanelControls(newPanel);if(D6s.Y6M(oldPanel.chart.panel,oldPanel))oldPanel.chart.panel=newPanel;}
else{this.privateDeletePanel(oldPanel);}
}
this.storePanels();var studies=STX.clone(this.layout.studies);delete  this.layout.studies;for(var ss in studies){var study=studies[ss];STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);}
}
if(typeof (this.layout.chartType)==A8M)this.layout.chartType=Q0J;this.adjustPanelPositions();this.layout.interval=interval;this.layout.periodicity=periodicity;if(managePeriodicity){interval=view.interval;periodicity=view.periodicity;if(isNaN(periodicity))periodicity=D6s.U8M;if(!interval)interval=g9J;if(D6s.a6M(interval,this.layout.interval)||D6s.o6M(periodicity,this.layout.periodicity)){this.setPeriodicityV2(periodicity,interval);}
else{this.createDataSet();}
}
else{this.createDataSet();}
this.reconstructDrawings(serializedDrawings);this.draw();this.currentlyImporting=c1q;this.updateListeners(g8M);}
;STXChart.prototype.exportLayout=function(){var w1q="panels",V8J="studies",obj={}
;for(var field in this.layout){if(D6s.H6M(field,V8J)&&D6s.d6M(field,w1q)){obj[field]=STX.clone(this.layout[field]);}
else if(D6s.c6M(field,V8J)){obj.studies={}
;}
else if(D6s.l6M(field,w1q)){obj.panels={}
;}
}
for(var panelName in this.panels){var panel=obj.panels[panelName]={}
,p=this.panels[panelName];panel.percent=p.percent;panel.display=p.display;panel.chartName=p.chart.name;}
for(var studyName in this.layout.studies){var study=obj.studies[studyName]={}
,s=this.layout.studies[studyName];study.type=s.type;study.inputs=STX.clone(s.inputs);study.outputs=STX.clone(s.outputs);study.panel=s.panel;study.parameters=STX.clone(s.parameters);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes){if(quotes&&!quotes.length)return quotes;var interval=this.layout.interval;if((D6s.R6M(interval,"month")||D6s.p6M(interval,"week"))&&!this.dontRoll){interval="day";}
if(STXChart.isDailyInterval(interval)&&D6s.b6M(interval,"day"))return quotes;var newQuotes=[],j=0,dt=null,stick=false;for(var i=0;D6s.X9M(i,quotes.length);i++,j++){var thisQuote=quotes[i],bcdt;if(thisQuote.DT)bcdt=new Date(thisQuote.DT.getTime());else bcdt=new Date(STX.strToDateTime(thisQuote.Date).getTime());if(D6s.n9M(dt,null)){dt=bcdt;}
else{for(var zz=0;D6s.B9M(zz,1440);zz++){if(!stick){if(D6s.U9M(interval,"day")){dt=STX.LegacyMarket.nextDay(dt,null,this);}
else{dt=this.getNextInterval(dt,null,this.dataZone);}
}
if(D6s.S9M(interval,"day")){if(D6s.O9M(interval,"day")&&D6s.F9M(bcdt.getDate(),dt.getDate())&&D6s.i9M(bcdt.getMonth(),dt.getMonth())&&D6s.j9M(bcdt.getFullYear(),dt.getFullYear()))break;}
else if(D6s.C9M(bcdt.getTime(),dt.getTime()))break;if(D6s.M9M(bcdt.getTime(),dt.getTime())){stick=true;break;}
else{newQuotes.push({DT:dt,Open:newQuotes[D6s.e9M(j,1)].Close,High:newQuotes[D6s.k9M(j,1)].Close,Low:newQuotes[D6s.q9M(j,1)].Close,Close:newQuotes[D6s.G9M(j,1)].Close,Volume:0,Adj_Close:newQuotes[D6s.D9M(j,1)].Adj_Close}
);stick=false;j++;}
}
}
newQuotes.push(thisQuote);}
return newQuotes;}
;STXChart.Driver=function(stx,quoteFeed,behavior){this.tagalongs={}
;this.stx=stx;this.quoteFeed=quoteFeed;this.behavior=behavior;this.loadingNewChart=c1q;this.intervalTimer=u8J;this.updatingChart=c1q;if(this.behavior.refreshInterval)this.updateChartLoop();}
;STXChart.Driver.prototype.die=function(){if(this.intervalTimer)window.clearInterval(this.intervalTimer);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this.tagalongs[feed.label]){this.tagalongs[feed.label]={label:feed.label,quoteFeed:feed.quoteFeed,behavior:feed.behavior?feed.behavior:{}
,count:D6s.J8M}
;}
this.tagalongs[feed.label].count++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this.tagalongs[feed.label];tagalong.count--;if(!tagalong.count)this.tagalongs[feed.label]=u8J;}
;STXChart.Driver.prototype.loadDependents=function(params){var field,syms={}
,stx=params.stx,series=stx.chart.series;function getStartDate(symbol){for(var c=D6s.m9M(stx.masterData.length,1);D6s.s1M(c,0);c--){if(stx.masterData[c]&&typeof stx.masterData[c][symbol]!="undefined"){return STX.strToDateTime(stx.masterData[c].Date);}
}
return params.startDate;}
for(field in series){if(!series[field].parameters.data||!series[field].parameters.data.useDefaultQuoteFeed)continue;syms[field]=true;}
for(var p in stx.panels){if(stx.panels[p].studyQuotes){for(var sq in stx.panels[p].studyQuotes)syms[sq]=true;}
}
var arr=[];for(field in syms){var seriesParam=STX.shallowClone(params.originalState);seriesParam.symbol=field;if(seriesParam.update){seriesParam.startDate=getStartDate(field);}
else{if(!seriesParam.startDate)seriesParam.startDate=stx.masterData[0].DT;if(!seriesParam.endDate)seriesParam.endDate=stx.masterData[D6s.w1M(stx.masterData.length,1)].DT;}
arr.push(seriesParam);}
if(!arr.length){stx.createDataSet();stx.draw();return ;}
this.quoteFeed.multiFetch(arr,function(results){for(var i=0;D6s.u1M(i,results.length);i++){var result=results[i];if(!result.dataCallback.error){var field=null;if(stx.chart.series[result.params.symbol]){field=stx.chart.series[result.params.symbol].parameters.field;}
STX.addMemberToMasterdata(stx,result.params.symbol,result.dataCallback.quotes,null,null,field);}
}
stx.createDataSet();stx.draw();}
);}
;STXChart.Driver.prototype.executeTagAlongs=function(params){var count={count:STX.objLength(this.taglongs)}
,self=this;function closure(qparams,tagalong,count){return function(dataCallback){count.count--;if(!dataCallback.error){var fields=qparams.fields;if(!fields)fields=null;STX.addMemberToMasterdata(self.stx,tagalong.label,dataCallback.quotes,fields);}
if(count.count==-1)self.render();}
;}
for(var label in this.tagalongs){var tagalong=this.tagalongs[label],qparams=STX.shallowClone(tagalong.behavior);STX.extend(qparams,params,true);tagalong.quoteFeed.fetch(qparams,closure(qparams,tagalong,count));}
}
;STXChart.Driver.prototype.render=function(){this.stx.createDataSet();this.stx.draw();}
;STXChart.Driver.prototype.updateChart=function(){if(this.updatingChart)return ;if(this.loadingNewChart)return ;var howManyToGet=STX.objLength(this.stx.charts),howManyReturned=0,interval=this.stx.layout.interval;function closure(self,params,symbol){return function(dataCallback){howManyReturned++;if(D6s.Q1M(symbol,params.chart.symbol)&&D6s.L1M(interval,self.stx.layout.interval)){if(!dataCallback.error){var lastBarAdded=false;if(!params.missingBarsCreated){if(params.chart.masterData.length&&dataCallback.quotes&&D6s.W1M(dataCallback.quotes.length,0)){var lastRecord=params.chart.masterData[D6s.I1M(params.chart.masterData.length,1)];if((dataCallback.quotes[0].DT&&D6s.v1M(lastRecord.DT,dataCallback.quotes[0].DT))||(dataCallback.quotes[0].Date&&D6s.A1M(lastRecord.Date,dataCallback.quotes[0].Date))){dataCallback.quotes.unshift(lastRecord);lastBarAdded=true;}
}
dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);if(lastBarAdded)dataCallback.quotes.shift();}
self.stx.appendMasterData(dataCallback.quotes,params.chart,{noCreateDataSet:true}
);}
else{self.quoteFeed.announceError(params,dataCallback);}
}
else{return ;}
if(D6s.E1M(howManyReturned,howManyToGet)){self.updatingChart=false;}
self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);stx.createDataSet();stx.draw();}
else{self.loadDependents(params);}
}
;}
for(var chartName in this.stx.charts){var chart=this.stx.charts[chartName];if(!chart.symbol)continue;if(!chart.masterData)continue;var params=this.makeParams(chart.symbol,chart);if(chart.masterData.length)params.startDate=chart.masterData[D6s.P1M(chart.masterData.length,1)].DT;params.update=true;params.originalState=STX.shallowClone(params);this.updatingChart=true;this.quoteFeed.fetch(params,closure(this,params,chart.symbol));}
}
;STXChart.Driver.prototype.updateChartLoop=function(){function closure(self){return function(){self.updateChart();}
;}
this.intervalTimer=window.setInterval(closure(this),D6s.f1M(this.behavior.refreshInterval,z2q));}
;STXChart.Driver.prototype.resetRefreshInterval=function(newInterval){if(this.intervalTimer)window.clearInterval(this.intervalTimer);this.behavior.refreshInterval=newInterval;if(this.behavior.refreshInterval)this.updateChartLoop();}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=D6s.J8M;function closure(){return function(response){var V2q="teFe",n1q="orrec",j9q="ted",d8M="men",z2J="mple",S9q="bl",v1q="Avai",D7J=", ";if(response)cb(response);else if(!chart.moreAvailable){cb(u8J);}
else if(D6s.g1M(count++,L9q)){cb((N9J+f2J+D7J+Z7J+N8J+v1q+Z2q+S9q+l2J+w4J+W7J+Y7J+s0J+w4J+c8J+z2J+d8M+j9q+w4J+N2J+n1q+s0J+o7J+d2q+w4J+c8J+W7J+w4J+G7M+w0J+Y7J+V2q+l2J+P2J));}
else{self.checkLoadMore(chart,J8J,J8J,closure());}
}
;}
this.checkLoadMore(chart,J8J,J8J,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,fetchMaximumBars,cb){if(!chart.moreAvailable){if(cb)cb();return ;}
var interval=this.stx.layout.interval;function closure(self,params){return function(dataCallback){if(D6s.Z1M(params.symbol,params.chart.symbol)&&D6s.N1M(interval,self.stx.layout.interval)){if(!params.loadMore)params.chart.loadingMore=false;if(!dataCallback.error){if(!params.missingBarsCreated){dataCallback.quotes.push(params.chart.masterData[0]);dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);dataCallback.quotes.pop();}
var fullMasterData=dataCallback.quotes.concat(params.chart.masterData);self.stx.setMasterData(fullMasterData,params.chart);self.stx.createDataSet();self.stx.draw();params.chart.moreAvailable=dataCallback.moreAvailable;params.startDate=params.chart.masterData[0].DT;self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
else{self.loadDependents(params);}
}
else{self.quoteFeed.announceError(params,dataCallback);}
if(cb)cb(null);}
else{return ;}
}
;}
var fetching=false;if(!this.behavior.noLoadMore){if((D6s.t1M(chart.dataSet.length,0)&&D6s.T1M(chart.scroll,chart.dataSet.length))||forceLoadMore){this.stx.cancelSwipe=true;if(!chart.loadingMore){chart.initialScroll=chart.scroll;chart.loadingMore=true;var params=this.makeParams(chart.symbol,chart);params.endDate=chart.masterData[0].DT;params.originalState=STX.shallowClone(params);if(this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars=true;if(fetchMaximumBars){params.fetchMaximumBars=true;params.ticks=Math.max(20000,params.ticks);}
this.quoteFeed.fetch(params,closure(this,params));fetching=true;}
}
}
if(chart.loadingMore){chart.initialScroll=chart.scroll;}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){if(params.isSeries)return params.stx.masterData.length;var interval=this.stx.layout.interval,p=params.stx.layout.periodicity;if((D6s.V1M(interval,"month")||D6s.K2M(interval,"week"))&&!this.stx.dontRoll){p*=(D6s.r2M(interval,"week"))?7:30;}
var bars=D6s.z2M(params.stx.chart.maxTicks,p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,chart){var i1q="delayed",interval=this.stx.layout.interval,ticks=this.barsToFetch({stx:this.stx}
);if((D6s.J2M(interval,(H8M))||D6s.y2M(interval,i3J))&&!this.stx.dontRoll){interval=g9J;}
var params=STX.shallowClone(this.behavior);STX.extend(params,{stx:this.stx,symbol:symbol,chart:chart,interval:interval,extended:this.stx.layout.extended,period:D6s.U8M,feed:i1q,ticks:ticks}
,J8J);if(!isNaN(params.interval)){params.period=params.interval;params.interval=C8J;}
return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var stx=this.stx,symbol=params.symbol,interval=stx.layout.interval,chart=params.chart;chart.moreAvailable=false;var qparams=this.makeParams(symbol,chart);STX.extend(qparams,params,true);if(stx.fetchMaximumBars[stx.layout.aggregationType]){qparams.ticks=Math.max(20000,qparams.ticks);qparams.fetchMaximumBars=true;}
function closure(self,qparams){return function(dataCallback){if(D6s.h2M(symbol,qparams.chart.symbol)&&D6s.x2M(interval,stx.layout.interval)){if(!dataCallback.error&&D6s.Y2M(dataCallback.error,0)){if(!qparams.missingBarsCreated)dataCallback.quotes=stx.doCleanupGaps(dataCallback.quotes);stx.setMasterData(dataCallback.quotes,qparams.chart);qparams.chart.moreAvailable=dataCallback.moreAvailable;self.loadingNewChart=false;stx.createDataSet();if(params.initializeChart)stx.initializeChart();stx.home({maintainWhitespace:true}
);}
else{self.quoteFeed.announceError(qparams,dataCallback);}
}
else{cb("orphaned");return ;}
self.loadingNewChart=false;if(cb){cb(dataCallback.error);}
if(qparams.chart.masterData&&qparams.chart.masterData.length)qparams.startDate=qparams.chart.masterData[0].DT;self.executeTagAlongs(qparams);if(self.behavior.callback){self.behavior.callback(qparams);}
else{self.loadDependents(qparams);}
}
;}
this.loadingNewChart=true;qparams.originalState=STX.shallowClone(qparams);this.quoteFeed.fetch(qparams,closure(this,qparams));}
;STXChart.prototype.attachQuoteFeed=function(quoteFeed,behavior){if(!behavior)behavior={}
;if(this.quoteDriver){this.quoteDriver.die();}
this.quoteDriver=new STXChart.Driver(this,quoteFeed,behavior);}
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var b1q="ign",a1J="ith",v2J="gQ",k3J="Al",f7M="Ta",X4q="ach",s9q="tt",u1q="Attem";if(!feed.label){console.log((u1q+G0J+s0J+w4J+s0J+Y7J+w4J+x2J+s9q+X4q+f7M+Q6q+k3J+Y7J+W7J+v2J+w0J+Y7J+J0J+v1J+l2J+y3J+w4J+u4q+a1J+e4J+s0J+w4J+x2J+M0J+M0J+b1q+c8J+E7J+w4J+x2J+w4J+o7J+x2J+U2J+l2J+o7J));return ;}
this.quoteDriver.attachTagAlongQuoteFeed(feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){this.quoteDriver.detachTagAlongQuoteFeed(feed);}
;STX.Comparison=function(){}
;Z(c1q);STX.Comparison.priceToPercent=function(stx,chart,price){return D6s.a2M(Math.round(((price-STX.Comparison.baseline)/STX.Comparison.baseline*i2q)*T1q),T1q);}
;STX.Comparison.percentToPrice=function(stx,chart,percent){return D6s.o2M(STX.Comparison.baseline,(D6s.U8M+(percent/i2q)));}
;STX.Comparison.stopSort=function(lhs,rhs){return D6s.H2M(lhs,rhs);}
;STX.Comparison.createComparisonSegmentInner=function(stx,chart){if(!chart.isComparison)return false;var fields=[],field;for(field in chart.series){if(chart.series[field].parameters.isComparison){fields.push(field);}
}
var priceFields=["Close","Open","High","Low","iqPrevClose"];chart.dataSegment=[];var firstQuote=null,firstTick=D6s.d2M(chart.dataSet.length,chart.scroll),lastTick=firstTick+chart.maxTicks,stopPointer=0,stops=[],i;for(i=0;D6s.c2M(i,stx.drawingObjects.length);i++){var drawing=stx.drawingObjects[i];if(D6s.l2M(drawing.name,"comparison_stop"))if(D6s.R2M(drawing.tick,firstTick)&&D6s.p2M(drawing.tick,lastTick))stops.push(drawing.tick);}
stops.sort(STX.Comparison.stopSort);var transformsToProcess=chart.maxTicks+3;for(i=0;D6s.b2M(i,transformsToProcess);i++){if(D6s.X4M(i,transformsToProcess))i=-1;position=firstTick+i;if(D6s.n4M(position,chart.dataSet.length)&&D6s.B4M(position,0)){var quote=chart.dataSet[position];if(!firstQuote){firstQuote=STX.clone(quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote.DT,"Date":quote.Date}
;STX.Comparison.baseline=firstQuote.Close;var j;for(j=0;D6s.U4M(j,priceFields.length);j++){field=priceFields[j];if(quote[field]||D6s.S4M(quote[field],0))quote.transform[field]=D6s.O4M(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
var s=stx.layout.studies;if(s){for(var n in s){var sd=s[n];if(D6s.F4M(stx.panels[sd.panel].name,sd.chart.name))continue;for(field in sd.outputMap){if(quote[field]||D6s.i4M(quote[field],0))quote.transform[field]=D6s.j4M(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
if(sd.referenceOutput&&(quote[sd.referenceOutput+" "+sd.name]||D6s.C4M(quote[sd.referenceOutput+" "+sd.name],0)))quote.transform[sd.referenceOutput+" "+sd.name]=D6s.M4M(Math.round(((quote[sd.referenceOutput+" "+sd.name]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
for(j in stx.plugins){var plugin=stx.plugins[j];if(!plugin.transformOutputs)continue;for(field in plugin.transformOutputs){if(quote[field]||D6s.e4M(quote[field],0))quote.transform[field]=D6s.k4M(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
var createAStop=false;if(stops&&D6s.q4M(stopPointer,stops.length)){if(D6s.G4M(position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx.activeDrawing&&D6s.D4M(stx.activeDrawing.name,"comparison_stop")){mouseStop=stx.activeDrawing.tick;}
var current;if(createAStop||D6s.m4M(position,mouseStop)){for(j=0;D6s.s3M(j,fields.length);j++){field=fields[j];current=quote[field];firstQuote[field]=D6s.w3M(current,(1+(quote.transform.Close/100)));}
}
for(j=0;D6s.u3M(j,fields.length);j++){field=fields[j];current=quote[field];if(current||D6s.Q3M(current,0)){var baseline=firstQuote[field];if(!baseline&&D6s.L3M(baseline,0)){firstQuote[field]=baseline=D6s.W3M(current,(1+(quote.transform.Close/100)));}
quote.transform[field]=D6s.I3M(Math.round(((current-baseline)/baseline*100)*10000),10000);}
}
chart.dataSegment.push(quote);}
else if(D6s.v3M(position,0)){chart.dataSegment.push(null);}
if(D6s.A3M(i,0))break;}
stx.clearPixelCache();return true;}
;STX.Comparison.createComparisonSegment=function(){for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.isComparison)STX.Comparison.createComparisonSegmentInner(this,chart);}
}
;STX.Comparison.priceFormat=function(stx,panel,price){var X1q=((0x161,0xA8)<41.0E1?(0x1FB,0.001):(63.5E1,12.24E2)<=(47.,0x7F)?23.:(0x1A4,10.88E2)<=131?5.:(65,111.7E1));if(D6s.E3M(price,u8J)||typeof price==A8M)return D5J;var priceTick=panel.yAxis.priceTick;if(stx.internationalizer){if(D6s.P3M(priceTick,D6s.U8M))price=stx.internationalizer.percent0.format(D6s.f3M(price,i2q));else if(D6s.g3M(priceTick,w3J))price=stx.internationalizer.percent1.format(D6s.Z3M(price,i2q));else if(D6s.N3M(priceTick,M8M))price=stx.internationalizer.percent2.format(D6s.t3M(price,i2q));else if(D6s.T3M(priceTick,X1q))price=stx.internationalizer.percent3.format(D6s.V3M(price,i2q));else price=stx.internationalizer.percent4.format(price);}
else{if(D6s.K5M(priceTick,D6s.U8M))price=price.toFixed(D6s.J8M)+y8J;else if(D6s.r5M(priceTick,w3J))price=price.toFixed(D6s.U8M)+y8J;else if(D6s.z5M(priceTick,M8M))price=price.toFixed(D6s.B8M)+y8J;else if(D6s.J5M(priceTick,X1q))price=price.toFixed(D6s.r8M)+y8J;else price=price.toFixed(D6s.h8M)+y8J;}
if(D6s.y5M(parseFloat(price),D6s.J8M)&&D6s.h5M(price.charAt(D6s.J8M),a0J)){price=price.substring(D6s.U8M);}
return price;}
;STX.Comparison.correlate=function(stx,symbol){var V2J="lt",c1J="Res";if(!STX.Comparison.requestCorrelation||D6s.x5M(correlationPeriod,0))return ;var correlationPeriod=parseInt($$$(".stxCorrelate .stx-input-field").value,10),corrPanel=stx.panels[STX.Comparison.correlationPanel+" ("+correlationPeriod+")"],inputs={"id":STX.Comparison.correlationPanel+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;D6s.Y5M(i,stx.layout.studies[corrPanel.name].inputs["Compare To"].length);i++){inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);}
for(var o in stx.layout.studies[corrPanel.name].outputs){outputs[o]=stx.layout.studies[corrPanel.name].outputs[o];}
panelName=corrPanel.name;}
inputs["Compare To"].push(symbol);outputs[(c1J+w0J+V2J+w4J)+symbol]=STX.Comparison.colorSelection;STX.Studies.addStudy(stx,"correl",inputs,outputs,null,panelName);for(var panel in stx.panels){if(D6s.a5M(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];for(var ii=0;D6s.o5M(ii,compareArray.length);ii++){if(D6s.H5M(compareArray[ii],symbol)){stx.layout.studies[stx.panels[panel].name].outputs["Result "+symbol]=STX.Comparison.colorSelection;}
}
}
}
}
;STX.Comparison.toggleCorrelate=function(stx){var q5J=".stxCorrelate .stx-checkbox";STX.Comparison.requestCorrelation=!STX.Comparison.requestCorrelation;var display=$$$(q5J);if(display){STX.unappendClassName(display,(!STX.Comparison.requestCorrelation).toString());STX.appendClassName(display,STX.Comparison.requestCorrelation.toString());}
}
;STXChart.prototype.setComparison=function(onOff,chart){var k0J="aS",L1J="ment",w2q="aSeg";if(!chart)chart=this.chart;if(typeof chart==(o2J+F0J+Q4q+Q6q))chart=this.charts[chart];if(!chart.isComparison&&onOff){this.setTransform(chart,STX.Comparison.priceToPercent,STX.Comparison.percentToPrice);chart.panel.yAxis.priceFormatter=STX.Comparison.priceFormat;chart.panel.yAxis.whichSet=(P2J+P6J+w2q+L1J);}
else if(chart.isComparison&&!onOff){this.unsetTransform(chart);chart.panel.yAxis.priceFormatter=u8J;chart.panel.yAxis.whichSet=(P2J+x2J+s0J+k0J+x4J);}
chart.isComparison=onOff;}
;STX.Comparison.startPlugin=function(){STXChart.prototype.prepend(h9q,STX.Comparison.createComparisonSegment);}
;STX.Comparison.removeSeries=function(stx,field){}
;STX.Studies.calculateCountBackLine=function(stx,sd){var quotes=sd.chart.scrubbed,cblLong=null,cblShort=null;for(var i=2;quotes&&D6s.d5M(i,quotes.length);i++){if(!quotes[i])continue;var j,k;if(D6s.c5M(quotes[i-1].High,quotes[i-2].High)){for(j=D6s.l5M(i,2);D6s.R5M(j,1);j--){if(D6s.p5M(quotes[j].Low,quotes[i-1].Low)){for(k=D6s.b5M(j,1);D6s.X0M(k,0);k--){if(D6s.n0M(quotes[k].Low,quotes[j].Low)){cblShort=quotes[k].Low;break;}
}
break;}
}
}
if(D6s.B0M(quotes[i-1].Low,quotes[i-2].Low)){for(j=D6s.U0M(i,2);D6s.S0M(j,1);j--){if(D6s.O0M(quotes[j].High,quotes[i-1].High)){for(k=D6s.F0M(j,1);D6s.i0M(k,0);k--){if(D6s.j0M(quotes[k].High,quotes[j].High)){cblLong=quotes[k].High;break;}
}
break;}
}
}
if(cblLong&&D6s.C0M(quotes[i].Close,cblLong)){quotes[i]["CBL Long "+sd.name]=1;cblLong=null;}
if(cblShort&&D6s.M0M(quotes[i].Close,cblShort)){quotes[i]["CBL Short "+sd.name]=1;cblShort=null;}
}
}
;return _exports;}
{if(typeof define===U9J&&define.amd){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var G=function(R){_stxThirdParty=R.STXThirdParty;}
;var _stxThirdParty={}
;if(typeof (window.STXThirdParty)!=A8M)G(window);var _stx={"STX":window.STX,"STXChart":window.STXChart,"$$":window.$$,"$$$":window.$$$}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();