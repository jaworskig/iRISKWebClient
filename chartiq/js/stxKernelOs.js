/* File generated Tue Sep 15 2015 07:41:44 GMT-0400 (EDT) */
/* Expires on 2015/09/28 */
/*
Copyright 2014 ChartIQ LLC
*/

(function(){
	var trialExpiration =  "2016/09/28";
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
var M2t={'z7L':function(I7L,s7L){return I7L===s7L;}
,'D0y':function(e0y,m0y){return e0y<m0y;}
,'Z4L':function(t3L,b3L){return t3L-b3L;}
,'u6y':function(z6y,I6y){return z6y/I6y;}
,'V7W':function(k7W,o7W){return k7W-o7W;}
,'i14':function(j14,K14){return j14-K14;}
,'X2H':function(a2H,W2H){return a2H-W2H;}
,'C0n':function(R0n,B0n){return R0n>B0n;}
,'O8n':function(v8n,l8n){return v8n==l8n;}
,'p6H':function(n6H,U6H){return n6H==U6H;}
,'S4G':function(P4G,Q4G){return P4G/Q4G;}
,'W8y':function(f8y,w8y){return f8y*w8y;}
,'U67':function(X67,a67){return X67>a67;}
,'t0H':function(b0H,A0H){return b0H==A0H;}
,'c0n':function(p0n,n0n){return p0n*n0n;}
,'K5H':function(J5H,F5H){return J5H==F5H;}
,'J67':function(F67,u67){return F67==u67;}
,'h8N':function(r8N,S8N){return r8N===S8N;}
,'z0N':function(I0N,s0N){return I0N*s0N;}
,'Q5G':function(C5G,R5G){return C5G<R5G;}
,'J57':function(F57,u57){return F57<u57;}
,'b84':function(A84,L84){return A84===L84;}
,'I3N':function(s3N,G3N){return s3N===G3N;}
,'T5n':function(Y5n,O5n){return Y5n*O5n;}
,'I5N':(function(){var t2N={}
,D5N=function(e5N,m5N){var x5N=m5N&((0x1FD,11.34E2)<=(0x193,73.)?(95," ("):(8.1E1,0x9B)>=(124.7E1,63.)?(4.,0xffff):(79.4E1,0x123)>0x24C?(0x13F,'o'):(26.90E1,66.10E1));var c5N=m5N-x5N;return ((c5N*e5N|(8.32E2<=(115,0x101)?"O":(0x1D3,81.7E1)>(90,4.5E1)?(0x9A,0):(0x21D,0xC2)))+(x5N*e5N|((26.,56)<(0x178,130)?(58.,0):0x225<=(113.,33.)?(0x4F,0x205):(0x229,0x194))))|((135,0x126)<9.01E2?(0x10A,0):(0x1B0,26.90E1));}
,s5N=function(p5N,n5N,U5N){if(t2N[U5N]!==undefined){return t2N[U5N];}
var X5N=(0x21C<(0x137,0x21)?(6.,"O"):0x131>=(137.,5.37E2)?0x235:0x1D8>=(17.6E1,136)?(11.49E2,0xcc9e2d51):(141.20E1,61.2E1)),a5N=((0xA0,69)<10.31E2?(0xF6,0x1b873593):(0x232,69.));var W5N=U5N;var f5N=n5N&~((132,115)>(4.67E2,0x220)?"Low":(37,0xCE)<0x155?(5.83E2,0x3):118<(0xA,32)?(115.,57):(0x1E1,34.));for(var w5N=((1.295E3,39.30E1)>142.0E1?(20.5E1,"L"):(0x227,65.)>=(0xF1,0x193)?0.0:(3.030E2,61)<=0x82?(10.84E2,0):(1.119E3,3.050E2));w5N<f5N;w5N+=(63>(0x12C,0x230)?'B':(3.21E2,6.890E2)>=90.4E1?(2.1E2,"B"):126<=(4.98E2,0xEA)?(8,4):(0x11B,0xD8))){var Z5N=(p5N.charCodeAt(w5N)&((16,0xBE)<4.78E2?(0x81,0xff):(0x1C,36.)))|((p5N.charCodeAt(w5N+1)&((5.98E2,20.)<=7E0?16:(0x151,0xAE)<=(3.91E2,0x1E5)?(2.40E1,0xff):(0xE1,0xB4)))<<8)|((p5N.charCodeAt(w5N+((141,0xD2)<=(0x105,0x1A6)?(97.,2):0x9F<=(0x1BC,59.)?(0x1D5,'q'):(0x257,0x2A)))&0xff)<<16)|((p5N.charCodeAt(w5N+3)&0xff)<<24);Z5N=D5N(Z5N,X5N);Z5N=((Z5N&((0x80,36.)<=(136.9E1,1.306E3)?(0x3C,0x1ffff):(105,37.1E1)))<<((0x0,24)<=130.?(70.3E1,15):(43,45.90E1)))|(Z5N>>>17);Z5N=D5N(Z5N,a5N);W5N^=Z5N;W5N=((W5N&0x7ffff)<<13)|(W5N>>>19);W5N=(W5N*((17,0x238)>=8.64E2?(9.76E2,"Y"):(1.2630E3,97)>0x20?(1.5E1,5):(0x23,0x151))+0xe6546b64)|0;}
Z5N=0;switch(n5N%((6.09E2,0x212)<100.?(137,13.31E2):(144,0x120)>14?(66.2E1,4):(0x1C7,38.6E1))){case 3:Z5N=(p5N.charCodeAt(f5N+2)&((20,0x88)<=80.?0x1DC:(1.085E3,0xE5)<=0x1AD?(33,0xff):(113.,111.10E1)))<<16;case ((114,132.)>=38?(0x10C,2):(47,0xB1)):Z5N|=(p5N.charCodeAt(f5N+1)&0xff)<<8;case 1:Z5N|=(p5N.charCodeAt(f5N)&0xff);Z5N=D5N(Z5N,X5N);Z5N=((Z5N&0x1ffff)<<((2.62E2,0x6A)<=56?(1.3E1,"O"):(1.075E3,9.290E2)>=0x232?(1.419E3,15):(0x24C,0x17A)))|(Z5N>>>17);Z5N=D5N(Z5N,a5N);W5N^=Z5N;}
W5N^=n5N;W5N^=W5N>>>16;W5N=D5N(W5N,0x85ebca6b);W5N^=W5N>>>13;W5N=D5N(W5N,0xc2b2ae35);W5N^=W5N>>>16;t2N[U5N]=W5N;return W5N;}
;return {D5N:D5N,s5N:s5N}
;}
)(),'f2H':function(w2H,Z2H){return w2H-Z2H;}
,'f7m':16,'c9n':function(p9n,n9n){return p9n-n9n;}
,'C2W':function(R2W,B2W){return R2W==B2W;}
,'X2L':function(a2L,W2L){return a2L==W2L;}
,'D3H':function(e3H,m3H){return e3H==m3H;}
,'x34':function(c34,p34){return c34<p34;}
,'S0N':function(P0N,Q0N){return P0N<Q0N;}
,'Q4n':function(C4n,R4n){return C4n-R4n;}
,'L1L':function(h1L,r1L){return h1L>r1L;}
,'a6':function(W6,f6){return W6!=f6;}
,'r4n':function(S4n,P4n){return S4n-P4n;}
,'z3a':function(I3a,s3a){return I3a===s3a;}
,'H97':function(V97,k97){return V97*k97;}
,'N8N':function(D8N,e8N){return D8N-e8N;}
,'d8H':function(q8H,i8H){return q8H==i8H;}
,'S2W':function(P2W,Q2W){return P2W-Q2W;}
,'S4L':function(P4L,Q4L){return P4L==Q4L;}
,'F8H':function(u8H,z8H){return u8H*z8H;}
,'q8':function(i8,j8){return i8==j8;}
,'p7W':function(n7W,U7W,X7W){return n7W*U7W/X7W;}
,'Q3G':function(C3G,R3G){return C3G/R3G;}
,'j6L':function(K6L,J6L){return K6L===J6L;}
,'z94':function(I94,s94){return I94-s94;}
,'H3y':function(V3y,k3y){return V3y*k3y;}
,'Z2':function(t9,b9){return t9===b9;}
,'J4W':function(F4W,u4W){return F4W<u4W;}
,'k3L':function(o3L,E3L){return o3L==E3L;}
,'C9G':function(R9G,B9G){return R9G!=B9G;}
,'M4G':function(g4G,y4G,d4G,q4G){return g4G-y4G+d4G+q4G;}
,'p2L':function(n2L,U2L){return n2L/U2L;}
,'R7y':function(B7y,H7y){return B7y-H7y;}
,'Z5a':function(t2a,b2a){return t2a/b2a;}
,'Z2y':function(t9y,b9y){return t9y==b9y;}
,'y4H':function(d4H,q4H){return d4H<q4H;}
,'f2W':function(w2W,Z2W){return w2W<Z2W;}
,'r7a':function(S7a,P7a){return S7a>P7a;}
,'I0':function(s0,G0){return s0-G0;}
,'Z0n':function(t4n,b4n){return t4n>b4n;}
,'r9':function(S9,P9){return S9===P9;}
,'d6n':function(q6n,i6n){return q6n-i6n;}
,'V6L':function(k6L,o6L){return k6L*o6L;}
,'P94':function(Q94,C94){return Q94-C94;}
,'Q7N':function(C7N,R7N){return C7N-R7N;}
,'Z9L':function(t77,b77){return t77-b77;}
,'T3n':function(Y3n,O3n){return Y3n===O3n;}
,'i2y':function(j2y,K2y){return j2y/K2y;}
,'t1L':function(b1L,A1L){return b1L<A1L;}
,'l9y':function(M9y,g9y){return M9y>g9y;}
,'i04':function(j04,K04){return j04===K04;}
,'U9H':function(X9H,a9H){return X9H/a9H;}
,'l67':function(M67,g67){return M67==g67;}
,'F1a':function(u1a,z1a){return u1a*z1a;}
,'z4L':function(I4L,s4L){return I4L==s4L;}
,'O8H':function(v8H,l8H){return v8H>l8H;}
,'U44':function(X44,a44){return X44-a44;}
,'t97':function(b97,A97){return b97/A97;}
,'L0n':function(h0n,r0n){return h0n-r0n;}
,'K0y':function(J0y,F0y){return J0y<F0y;}
,'W5a':function(f5a,w5a){return f5a-w5a;}
,'c9L':function(p9L,n9L){return p9L!==n9L;}
,'k8':function(o8,E8){return o8==E8;}
,'k74':function(o74,E74){return o74>E74;}
,'R6W':function(B6W,H6W){return B6W<H6W;}
,'H9W':function(V9W,k9W){return V9W===k9W;}
,'p5W':function(n5W,U5W){return n5W==U5W;}
,'w1y':function(Z1y,t5y){return Z1y>t5y;}
,'Y27':function(O27,v27){return O27==v27;}
,'y6N':function(d6N,q6N){return d6N<q6N;}
,'X57':function(a57,W57){return a57<W57;}
,'m6G':function(x6G,c6G){return x6G<=c6G;}
,'Y7':function(O7,v7){return O7<v7;}
,'S1n':function(P1n,Q1n){return P1n<Q1n;}
,'Z4G':function(t3G,b3G){return t3G-b3G;}
,'Z1n':function(t5n,b5n){return t5n==b5n;}
,'l2y':function(M2y,g2y){return M2y===g2y;}
,'t07':function(b07,A07){return b07<A07;}
,'F3N':function(u3N,z3N){return u3N/z3N;}
,'E8H':function(T8H,Y8H){return T8H<Y8H;}
,'S9L':function(P9L,Q9L){return P9L<Q9L;}
,'T3W':function(Y3W,O3W){return Y3W==O3W;}
,'l6':function(M6,g6){return M6<g6;}
,'S7L':function(P7L,Q7L){return P7L-Q7L;}
,'t1G':function(b1G,A1G){return b1G<A1G;}
,'F0L':function(u0L,z0L){return u0L>z0L;}
,'k7N':function(o7N,E7N){return o7N-E7N;}
,'k1y':function(o1y,E1y){return o1y/E1y;}
,'y9y':function(d9y,q9y){return d9y<q9y;}
,'r24':function(S24,P24){return S24-P24;}
,'M6n':function(g6n,y6n){return g6n-y6n;}
,'A5L':function(L5L,h5L){return L5L==h5L;}
,'O5N':function(v5N,l5N){return v5N-l5N;}
,'l4L':function(M4L,g4L){return M4L===g4L;}
,'J4L':function(F4L,u4L){return F4L==u4L;}
,'Y0W':function(O0W,v0W){return O0W==v0W;}
,'s9':function(G9,N9){return G9<N9;}
,'q3n':function(i3n,j3n){return i3n==j3n;}
,'y4L':function(d4L,q4L){return d4L===q4L;}
,'K5G':function(J5G,F5G){return J5G<=F5G;}
,'z14':function(I14,s14){return I14==s14;}
,'s3L':function(G3L,N3L){return G3L===N3L;}
,'e7G':function(m7G,x7G){return m7G<=x7G;}
,'t3a':function(b3a,A3a){return b3a*A3a;}
,'O7W':function(v7W,l7W){return v7W-l7W;}
,'W07':function(f07,w07){return f07==w07;}
,'k0y':function(o0y,E0y){return o0y-E0y;}
,'H7L':function(V7L,k7L){return V7L<k7L;}
,'e0W':function(m0W,x0W){return m0W<x0W;}
,'d37':function(q37,i37){return q37==i37;}
,'g7N':function(y7N,d7N){return y7N==d7N;}
,'F7W':function(u7W,z7W){return u7W>z7W;}
,'I8H':function(s8H,G8H){return s8H==G8H;}
,'L3a':function(h3a,r3a){return h3a<r3a;}
,'F6L':function(u6L,z6L){return u6L==z6L;}
,'f4a':function(w4a,Z4a){return w4a*Z4a;}
,'i7L':function(j7L,K7L){return j7L<K7L;}
,'f8W':function(w8W,Z8W){return w8W/Z8W;}
,'z9G':function(I9G,s9G){return I9G-s9G;}
,'h0L':function(r0L,S0L){return r0L>S0L;}
,'v0y':function(l0y,M0y){return l0y<M0y;}
,'G2y':function(N2y,D2y){return N2y===D2y;}
,'U3a':function(X3a,a3a){return X3a<a3a;}
,'J1H':function(F1H,u1H){return F1H*u1H;}
,'o2':function(E2,T2){return E2===T2;}
,'P1W':function(Q1W,C1W){return Q1W*C1W;}
,'Q7n':function(C7n,R7n){return C7n-R7n;}
,'v2a':function(l2a,M2a){return l2a<=M2a;}
,'K6y':function(J6y,F6y){return J6y-F6y;}
,'G4n':function(N4n,D4n){return N4n==D4n;}
,'G9W':function(N9W,D9W){return N9W===D9W;}
,'m9a':function(x9a,c9a){return x9a<=c9a;}
,'I6G':function(s6G,G6G){return s6G<G6G;}
,'h1W':function(r1W,S1W){return r1W*S1W;}
,'E84':function(T84,Y84){return T84<Y84;}
,'o9H':function(E9H,T9H){return E9H==T9H;}
,'l9n':function(M9n,g9n){return M9n<g9n;}
,'l0':function(M0,g0){return M0==g0;}
,'B7H':function(H7H,V7H){return H7H==V7H;}
,'a54':function(W54,f54){return W54<f54;}
,'b1a':function(A1a,L1a){return A1a*L1a;}
,'z6N':function(I6N,s6N){return I6N/s6N;}
,'R87':function(B87,H87){return B87-H87;}
,'W1n':function(f1n,w1n){return f1n<w1n;}
,'j3N':function(K3N,J3N){return K3N===J3N;}
,'v6y':function(l6y,M6y){return l6y==M6y;}
,'j8H':function(K8H,J8H){return K8H*J8H;}
,'K5n':function(J5n,F5n){return J5n===F5n;}
,'G1L':function(N1L,D1L){return N1L>=D1L;}
,'L5a':function(h5a,r5a){return h5a>r5a;}
,'a47':function(W47,f47){return W47>=f47;}
,'w7a':function(Z7a,t8a){return Z7a-t8a;}
,'r34':function(S34,P34){return S34!=P34;}
,'R4y':function(B4y,H4y){return B4y==H4y;}
,'l4W':function(M4W,g4W){return M4W===g4W;}
,'W4n':function(f4n,w4n){return f4n==w4n;}
,'f3N':function(w3N,Z3N){return w3N==Z3N;}
,'s5G':function(G5G,N5G){return G5G-N5G;}
,'t0W':function(b0W,A0W){return b0W<A0W;}
,'h6G':function(r6G,S6G){return r6G<S6G;}
,'A34':function(L34,h34){return L34>h34;}
,'p6W':function(n6W,U6W){return n6W>U6W;}
,'X87':function(a87,W87){return a87/W87;}
,'J8y':function(F8y,u8y){return F8y<u8y;}
,'O6L':function(v6L,l6L){return v6L*l6L;}
,'Q3W':function(C3W,R3W){return C3W<R3W;}
,'j2H':function(K2H,J2H){return K2H>J2H;}
,'k5H':function(o5H,E5H){return o5H==E5H;}
,'A8G':function(L8G,h8G){return L8G<h8G;}
,'u47':function(z47,I47){return z47<I47;}
,'c0a':function(p0a,n0a){return p0a==n0a;}
,'a1N':function(W1N,f1N){return W1N<f1N;}
,'h84':function(r84,S84){return r84!==S84;}
,'d5N':function(q5N,i5N){return q5N>i5N;}
,'Z1G':function(t5G,b5G){return t5G-b5G;}
,'d1W':function(q1W,i1W){return q1W!=i1W;}
,'q5n':function(i5n,j5n){return i5n==j5n;}
,'v3H':function(l3H,M3H){return l3H<M3H;}
,'j1W':function(K1W,J1W){return K1W==J1W;}
,'G4L':function(N4L,D4L){return N4L==D4L;}
,'n1N':function(U1N,X1N){return U1N>=X1N;}
,'p5y':function(n5y,U5y){return n5y/U5y;}
,'n7n':function(U7n,X7n){return U7n-X7n;}
,'O2L':function(v2L,l2L){return v2L!==l2L;}
,'t0n':function(b0n,A0n){return b0n-A0n;}
,'Y9G':function(O9G,v9G){return O9G<v9G;}
,'A3G':function(L3G,h3G){return L3G/h3G;}
,'l9H':function(M9H,g9H){return M9H*g9H;}
,'W9W':function(f9W,w9W){return f9W-w9W;}
,'p64':function(n64,U64){return n64/U64;}
,'x54':function(c54,p54){return c54>p54;}
,'G94':function(N94,D94){return N94/D94;}
,'d6L':function(q6L,i6L){return q6L===i6L;}
,'L2W':function(h2W,r2W){return h2W==r2W;}
,'O1W':function(v1W,l1W){return v1W<=l1W;}
,'C6N':function(R6N,B6N){return R6N===B6N;}
,'U6N':function(X6N,a6N){return X6N/a6N;}
,'N2n':function(D2n,e2n){return D2n>e2n;}
,'f57':function(w57,Z57){return w57>=Z57;}
,'b94':function(A94,L94){return A94-L94;}
,'h2n':function(r2n,S2n){return r2n*S2n;}
,'H07':function(V07,k07){return V07 in k07;}
,'Y4W':function(O4W,v4W){return O4W<v4W;}
,'C14':function(R14,B14){return R14-B14;}
,'s24':function(G24,N24){return G24/N24;}
,'t7G':function(b7G,A7G){return b7G*A7G;}
,'d87':function(q87,i87){return q87-i87;}
,'k7H':function(o7H,E7H){return o7H==E7H;}
,'T3G':function(Y3G,O3G){return Y3G&O3G;}
,'g3W':function(y3W,d3W){return y3W==d3W;}
,'e0H':function(m0H,x0H){return m0H==x0H;}
,'e7L':function(m7L,x7L){return m7L==x7L;}
,'F7y':function(u7y,z7y){return u7y<=z7y;}
,'d2H':function(q2H,i2H){return q2H<=i2H;}
,'e4W':function(m4W,x4W){return m4W<x4W;}
,'o04':function(E04,T04){return E04-T04;}
,'r6a':function(S6a,P6a){return S6a==P6a;}
,'s4N':function(G4N,N4N){return G4N-N4N;}
,'x8G':function(c8G,p8G){return c8G>p8G;}
,'r9y':function(S9y,P9y){return S9y%P9y;}
,'u3W':function(z3W,I3W){return z3W>I3W;}
,'a7N':function(W7N,f7N){return W7N==f7N;}
,'I2H':function(s2H,G2H){return s2H/G2H;}
,'a3L':function(W3L,f3L){return W3L>f3L;}
,'t04':function(b04,A04){return b04==A04;}
,'h3':function(r3,S3){return r3==S3;}
,'u1N':function(z1N,I1N){return z1N==I1N;}
,'p2W':function(n2W,U2W){return n2W<U2W;}
,'Z5':function(t2,b2){return t2>b2;}
,'y9L':function(d9L,q9L){return d9L*q9L;}
,'v6a':function(l6a,M6a){return l6a>=M6a;}
,'O5y':function(v5y,l5y){return v5y===l5y;}
,'T1':function(Y1,O1){return Y1!=O1;}
,'T5G':function(Y5G,O5G){return Y5G*O5G;}
,'N37':function(D37,e37){return D37>e37;}
,'r3G':function(S3G,P3G){return S3G<=P3G;}
,'Q5H':function(C5H,R5H){return C5H in R5H;}
,'B1y':function(H1y,V1y){return H1y/V1y;}
,'j6W':function(K6W,J6W){return K6W/J6W;}
,'t6N':function(b6N,A6N){return b6N<A6N;}
,'P8W':function(Q8W,C8W){return Q8W<C8W;}
,'M8N':function(g8N,y8N){return g8N==y8N;}
,'u9':function(z9,I9){return z9>=I9;}
,'V8H':function(k8H,o8H){return k8H-o8H;}
,'z4H':function(I4H,s4H){return I4H<s4H;}
,'X1a':function(a1a,W1a){return a1a!==W1a;}
,'z27':function(I27,s27,G27){return I27-s27+G27;}
,'c44':function(p44,n44){return p44-n44;}
,'g54':function(y54,d54){return y54==d54;}
,'m0L':function(x0L,c0L){return x0L<c0L;}
,'s1y':function(G1y,N1y){return G1y*N1y;}
,'o1L':function(E1L,T1L){return E1L>=T1L;}
,'f7y':function(w7y,Z7y){return w7y<Z7y;}
,'n47':function(U47,X47){return U47<X47;}
,'U3y':function(X3y,a3y){return X3y==a3y;}
,'n3L':function(U3L,X3L){return U3L<X3L;}
,'n8':function(U8,X8){return U8===X8;}
,'r8G':function(S8G,P8G){return S8G>P8G;}
,'m8n':function(x8n,c8n){return x8n==c8n;}
,'v24':function(l24,M24){return l24/M24;}
,'B34':function(H34,V34){return H34===V34;}
,'q6a':function(i6a,j6a){return i6a<=j6a;}
,'l1G':function(M1G,g1G){return M1G-g1G;}
,'Y4a':function(O4a,v4a,l4a){return O4a*v4a/l4a;}
,'R1W':function(B1W,H1W){return B1W*H1W;}
,'J04':function(F04,u04){return F04!==u04;}
,'P0L':function(Q0L,C0L){return Q0L<C0L;}
,'y27':function(d27,q27){return d27<q27;}
,'j2n':function(K2n,J2n){return K2n<J2n;}
,'K6a':function(J6a,F6a){return J6a&F6a;}
,'y67':function(d67,q67){return d67>q67;}
,'f6W':function(w6W,Z6W,t1W){return w6W/Z6W*t1W;}
,'V1a':function(k1a,o1a){return k1a<o1a;}
,'a5G':function(W5G,f5G){return W5G!=f5G;}
,'H4W':function(V4W,k4W){return V4W<k4W;}
,'F6n':function(u6n,z6n){return u6n*z6n;}
,'u74':function(z74,I74){return z74>I74;}
,'p1a':function(n1a,U1a){return n1a<=U1a;}
,'X6n':function(a6n,W6n){return a6n==W6n;}
,'Q8L':function(C8L,R8L){return C8L<R8L;}
,'n74':function(U74,X74){return U74!==X74;}
,'o2y':function(E2y,T2y){return E2y<T2y;}
,'A8L':function(L8L,h8L){return L8L-h8L;}
,'m8a':function(x8a,c8a){return x8a===c8a;}
,'a1y':function(W1y,f1y){return W1y<f1y;}
,'O5W':function(v5W,l5W){return v5W-l5W;}
,'O8N':function(v8N,l8N){return v8N==l8N;}
,'g7n':function(y7n,d7n){return y7n>d7n;}
,'d5W':function(q5W,i5W){return q5W-i5W;}
,'I8W':function(s8W,G8W){return s8W/G8W;}
,'X6W':function(a6W,W6W){return a6W-W6W;}
,'u7n':function(z7n,I7n){return z7n<I7n;}
,'t27':function(b27,A27){return b27===A27;}
,'W3y':function(f3y,w3y){return f3y>=w3y;}
,'c0W':function(p0W,n0W){return p0W==n0W;}
,'g4N':function(y4N,d4N){return y4N!==d4N;}
,'s47':function(G47,N47){return G47!=N47;}
,'t3y':function(b3y,A3y){return b3y>=A3y;}
,'T5H':function(Y5H,O5H){return Y5H==O5H;}
,'D4':function(e4,m4){return e4==m4;}
,'m4a':function(x4a,c4a){return x4a>=c4a;}
,'M8W':function(g8W,y8W){return g8W*y8W;}
,'N8W':function(D8W,e8W){return D8W/e8W;}
,'Z07':function(t47,b47){return t47!=b47;}
,'t9H':function(b9H,A9H){return b9H-A9H;}
,'t14':function(b14,A14){return b14>=A14;}
,'N0G':function(D0G,e0G){return D0G<e0G;}
,'b37':function(A37,L37){return A37<L37;}
,'d7y':function(q7y,i7y){return q7y<=i7y;}
,'U0a':function(X0a,a0a){return X0a<a0a;}
,'s7n':function(G7n,N7n){return G7n in N7n;}
,'H9G':function(V9G,k9G){return V9G<=k9G;}
,'T94':function(Y94,O94){return Y94/O94;}
,'L1n':function(h1n,r1n){return h1n!==r1n;}
,'d2W':function(q2W,i2W){return q2W/i2W;}
,'i0a':function(j0a,K0a){return j0a*K0a;}
,'T8':function(Y8,O8){return Y8-O8;}
,'Y1L':function(O1L,v1L){return O1L<v1L;}
,'e4n':function(m4n,x4n){return m4n==x4n;}
,'k7n':function(o7n,E7n){return o7n-E7n;}
,'b0G':function(A0G,L0G){return A0G>L0G;}
,'U1n':function(X1n,a1n){return X1n<a1n;}
,'B7n':function(H7n,V7n){return H7n-V7n;}
,'P6W':function(Q6W,C6W){return Q6W>=C6W;}
,'S5':function(P5,Q5){return P5!==Q5;}
,'U07':function(X07,a07){return X07<a07;}
,'K7N':function(J7N,F7N){return J7N!=F7N;}
,'L3y':function(h3y,r3y){return h3y==r3y;}
,'b7y':function(A7y,L7y){return A7y<L7y;}
,'d2L':function(q2L,i2L){return q2L-i2L;}
,'s4G':function(G4G,N4G,D4G){return G4G-N4G+D4G;}
,'b64':function(A64,L64){return A64!=L64;}
,'E0G':function(T0G,Y0G){return T0G<=Y0G;}
,'M7W':function(g7W,y7W){return g7W<y7W;}
,'a8G':function(W8G,f8G){return W8G<f8G;}
,'T77':function(Y77,O77){return Y77<=O77;}
,'G0a':function(N0a,D0a){return N0a-D0a;}
,'m2n':function(x2n,c2n){return x2n<c2n;}
,'N2L':function(D2L,e2L){return D2L-e2L;}
,'g0y':function(y0y,d0y){return y0y>d0y;}
,'A4N':function(L4N,h4N){return L4N==h4N;}
,'W7L':function(f7L,w7L){return f7L==w7L;}
,'L6':function(h6,r6){return h6==r6;}
,'J9n':function(F9n,u9n){return F9n-u9n;}
,'C7':function(R7,B7){return R7<B7;}
,'O37':function(v37,l37){return v37==l37;}
,'U0W':function(X0W,a0W,W0W){return X0W-a0W-W0W;}
,'M0L':function(g0L,y0L){return g0L*y0L;}
,'g1N':function(y1N,d1N){return y1N<d1N;}
,'K74':function(J74,F74){return J74<F74;}
,'C7G':function(R7G,B7G){return R7G<B7G;}
,'W67':function(f67,w67){return f67<w67;}
,'X8a':function(a8a,W8a){return a8a===W8a;}
,'L44':function(h44,r44){return h44<=r44;}
,'E2G':function(T2G,Y2G){return T2G!==Y2G;}
,'S1G':function(P1G,Q1G){return P1G-Q1G;}
,'n3H':function(U3H,X3H){return U3H-X3H;}
,'r47':function(S47,P47){return S47*P47;}
,'w3n':function(Z3n,t6n){return Z3n<t6n;}
,'S1L':function(P1L,Q1L){return P1L-Q1L;}
,'a6y':function(W6y,f6y,w6y){return W6y-f6y+w6y;}
,'m27':function(x27,c27){return x27===c27;}
,'H9L':function(V9L,k9L){return V9L!==k9L;}
,'E4y':function(T4y,Y4y){return T4y==Y4y;}
,'r3W':function(S3W,P3W){return S3W<P3W;}
,'w8G':function(Z8G,t0G){return Z8G!=t0G;}
,'M5N':function(g5N,y5N){return g5N>=y5N;}
,'b6G':function(A6G,L6G){return A6G*L6G;}
,'O6n':function(v6n,l6n){return v6n<l6n;}
,'t5a':function(b5a,A5a){return b5a<A5a;}
,'r5L':function(S5L,P5L){return S5L!==P5L;}
,'A2a':function(L2a,h2a){return L2a<=h2a;}
,'i0W':function(j0W,K0W){return j0W===K0W;}
,'k2a':function(o2a,E2a){return o2a<=E2a;}
,'S8y':function(P8y,Q8y){return P8y==Q8y;}
,'P2n':function(Q2n,C2n){return Q2n/C2n;}
,'Z7':function(t8,b8){return t8-b8;}
,'o14':function(E14,T14){return E14>T14;}
,'x4':function(c4,p4){return c4==p4;}
,'L0W':function(h0W,r0W){return h0W<=r0W;}
,'A7H':function(L7H,h7H){return L7H/h7H;}
,'N6H':function(D6H,e6H){return D6H==e6H;}
,'F2n':function(u2n,z2n){return u2n<z2n;}
,'S57':function(P57,Q57){return P57>=Q57;}
,'r7n':function(S7n,P7n){return S7n===P7n;}
,'O6W':function(v6W,l6W){return v6W<l6W;}
,'F37':function(u37,z37){return u37==z37;}
,'e4H':function(m4H,x4H){return m4H>x4H;}
,'B0y':function(H0y,V0y){return H0y-V0y;}
,'Z7G':function(t8G,b8G){return t8G<b8G;}
,'N6W':function(D6W,e6W){return D6W*e6W;}
,'m1a':function(x1a,c1a){return x1a-c1a;}
,'w3H':function(Z3H,t6H){return Z3H>=t6H;}
,'y9G':function(d9G,q9G){return d9G-q9G;}
,'Y9L':function(O9L,v9L){return O9L===v9L;}
,'I37':function(s37,G37){return s37==G37;}
,'C57':function(R57,B57){return R57/B57;}
,'G5':function(N5,D5){return N5*D5;}
,'w5L':function(Z5L,t2L){return Z5L==t2L;}
,'f64':function(w64,Z64){return w64<Z64;}
,'p6n':function(n6n,U6n){return n6n==U6n;}
,'E6L':function(T6L,Y6L){return T6L*Y6L;}
,'A74':function(L74,h74){return L74/h74;}
,'v5n':function(l5n,M5n){return l5n<M5n;}
,'e1H':function(m1H,x1H){return m1H>x1H;}
,'y0a':function(d0a,q0a){return d0a-q0a;}
,'l07':function(M07,g07){return M07 in g07;}
,'y7G':function(d7G,q7G){return d7G*q7G;}
,'K2a':function(J2a,F2a){return J2a&F2a;}
,'O9a':function(v9a,l9a){return v9a==l9a;}
,'w54':function(Z54,t24){return Z54!=t24;}
,'R64':function(B64,H64){return B64-H64;}
,'B74':function(H74,V74){return H74<V74;}
,'l57':function(M57,g57){return M57-g57;}
,'Z9W':function(t7n,b7n){return t7n<b7n;}
,'e9y':function(m9y,x9y){return m9y!==x9y;}
,'U5':function(X5,a5){return X5>a5;}
,'g2a':function(y2a,d2a){return y2a&d2a;}
,'s6a':function(G6a,N6a){return G6a&N6a;}
,'t4G':function(b4G,A4G){return b4G/A4G;}
,'o7':function(E7,T7){return E7<T7;}
,'f97':function(w97,Z97,t7W){return w97-Z97+t7W;}
,'s34':function(G34,N34){return G34*N34;}
,'M6W':function(g6W,y6W){return g6W-y6W;}
,'I0G':function(s0G,G0G){return s0G<G0G;}
,'D9':function(e9,m9){return e9<m9;}
,'B1':function(H1,V1){return H1<V1;}
,'A0':function(L0,h0){return L0==h0;}
,'k7a':function(o7a,E7a){return o7a!==E7a;}
,'x7H':function(c7H,p7H){return c7H<=p7H;}
,'S3y':function(P3y,Q3y){return P3y==Q3y;}
,'K7a':function(J7a,F7a){return J7a<F7a;}
,'Y8y':function(O8y,v8y){return O8y/v8y;}
,'N87':function(D87,e87){return D87>=e87;}
,'j7y':function(K7y,J7y){return K7y<=J7y;}
,'d0':function(q0,i0){return q0-i0;}
,'p2G':function(n2G,U2G){return n2G-U2G;}
,'u8':function(z8,I8){return z8==I8;}
,'W9n':function(f9n,w9n){return f9n==w9n;}
,'W2y':function(f2y,w2y){return f2y==w2y;}
,'j6H':function(K6H,J6H){return K6H*J6H;}
,'O8W':function(v8W,l8W){return v8W!==l8W;}
,'f3':function(w3,Z3){return w3==Z3;}
,'M6G':function(g6G,y6G){return g6G>y6G;}
,'p8W':function(n8W,U8W){return n8W>U8W;}
,'S9W':function(P9W,Q9W){return P9W<Q9W;}
,'E6n':function(T6n,Y6n){return T6n>Y6n;}
,'d0L':function(q0L,i0L){return q0L!==i0L;}
,'n3W':function(U3W,X3W){return U3W>=X3W;}
,'a9':function(W9,f9){return W9==f9;}
,'T7N':function(Y7N,O7N){return Y7N-O7N;}
,'Q1y':function(C1y,R1y){return C1y!=R1y;}
,'C0':function(R0,B0){return R0/B0;}
,'V9N':1,'d6W':function(q6W,i6W){return q6W<i6W;}
,'W9L':function(f9L,w9L){return f9L*w9L;}
,'o1H':function(E1H,T1H){return E1H*T1H;}
,'D6y':function(e6y,m6y){return e6y*m6y;}
,'d2G':function(q2G,i2G){return q2G==i2G;}
,'J7':function(F7,u7){return F7<u7;}
,'s7N':function(G7N,N7N){return G7N!=N7N;}
,'n8G':function(U8G,X8G){return U8G<X8G;}
,'X8n':function(a8n,W8n){return a8n==W8n;}
,'I2W':function(s2W,G2W){return s2W===G2W;}
,'B3G':function(H3G,V3G){return H3G-V3G;}
,'D3n':function(e3n,m3n){return e3n>m3n;}
,'s2':function(G2,N2){return G2<N2;}
,'B9y':function(H9y,V9y){return H9y*V9y;}
,'K1y':function(J1y,F1y){return J1y*F1y;}
,'m97':function(x97,c97){return x97-c97;}
,'I5W':function(s5W,G5W){return s5W==G5W;}
,'G44':function(N44,D44){return N44<=D44;}
,'Y6':function(O6,v6){return O6<v6;}
,'v7N':function(l7N,M7N){return l7N!=M7N;}
,'Q7a':function(C7a,R7a){return C7a>=R7a;}
,'Z3a':function(t6a,b6a){return t6a==b6a;}
,'f84':function(w84,Z84){return w84==Z84;}
,'b3':function(A3,L3){return A3/L3;}
,'E7y':function(T7y,Y7y){return T7y<Y7y;}
,'p8N':function(n8N,U8N){return n8N-U8N;}
,'p9a':function(n9a,U9a){return n9a<U9a;}
,'j64':function(K64,J64){return K64>=J64;}
,'g8':function(y8,d8){return y8*d8;}
,'H0W':function(V0W,k0W){return V0W===k0W;}
,'u1y':function(z1y,I1y){return z1y*I1y;}
,'U4G':function(X4G,a4G){return X4G/a4G;}
,'j87':function(K87,J87){return K87-J87;}
,'c8y':function(p8y,n8y){return p8y-n8y;}
,'F2G':function(u2G,z2G){return u2G===z2G;}
,'V1W':function(k1W,o1W){return k1W-o1W;}
,'O3':function(v3,l3){return v3!==l3;}
,'b2H':function(A2H,L2H){return A2H<L2H;}
,'L7L':function(h7L,r7L){return h7L<=r7L;}
,'v5H':function(l5H,M5H){return l5H==M5H;}
,'Q6a':function(C6a,R6a){return C6a-R6a;}
,'I4a':function(s4a,G4a){return s4a-G4a;}
,'W14':function(f14,w14){return f14!=w14;}
,'M2H':function(g2H,y2H){return g2H>y2H;}
,'U9y':function(X9y,a9y){return X9y<a9y;}
,'j84':function(K84,J84){return K84==J84;}
,'C0H':function(R0H,B0H){return R0H-B0H;}
,'m84':function(x84,c84){return x84==c84;}
,'N64':function(D64,e64){return D64<e64;}
,'w3W':function(Z3W,t6W){return Z3W==t6W;}
,'u4G':function(z4G,I4G){return z4G-I4G;}
,'g24':function(y24,d24){return y24>d24;}
,'f1W':function(w1W,Z1W){return w1W==Z1W;}
,'c6N':function(p6N,n6N){return p6N>=n6N;}
,'U7L':function(X7L,a7L){return X7L==a7L;}
,'F64':function(u64,z64){return u64-z64;}
,'F6H':function(u6H,z6H){return u6H<z6H;}
,'U4H':function(X4H,a4H){return X4H-a4H;}
,'G4W':function(N4W,D4W){return N4W===D4W;}
,'r54':function(S54,P54){return S54>P54;}
,'Z44':function(t34,b34){return t34===b34;}
,'d5y':function(q5y,i5y){return q5y<i5y;}
,'r1N':function(S1N,P1N){return S1N>=P1N;}
,'C4G':function(R4G,B4G){return R4G>=B4G;}
,'E6W':function(T6W,Y6W){return T6W>=Y6W;}
,'R5W':function(B5W,H5W){return B5W>H5W;}
,'l6N':function(M6N,g6N){return M6N<g6N;}
,'L5':function(h5,r5){return h5*r5;}
,'I64':function(s64,G64){return s64<=G64;}
,'V2n':function(k2n,o2n){return k2n<o2n;}
,'T7H':function(Y7H,O7H){return Y7H==O7H;}
,'s0y':function(G0y,N0y){return G0y<N0y;}
,'R0G':function(B0G,H0G){return B0G===H0G;}
,'k9y':function(o9y,E9y){return o9y*E9y;}
,'T4N':function(Y4N,O4N){return Y4N==O4N;}
,'h6n':function(r6n,S6n){return r6n<S6n;}
,'Y7L':function(O7L,v7L){return O7L>v7L;}
,'B3H':function(H3H,V3H){return H3H==V3H;}
,'n0':function(U0,X0){return U0==X0;}
,'r3L':function(S3L,P3L){return S3L<P3L;}
,'N3':function(D3,e3){return D3>=e3;}
,'G7G':function(N7G,D7G){return N7G*D7G;}
,'h64':function(r64,S64){return r64-S64;}
,'Z4n':function(t3n,b3n){return t3n==b3n;}
,'U2y':function(X2y,a2y){return X2y===a2y;}
,'r7H':function(S7H,P7H){return S7H<P7H;}
,'F84':function(u84,z84){return u84==z84;}
,'Y0':function(O0,v0){return O0==v0;}
,'i57':function(j57,K57){return j57<K57;}
,'n54':function(U54,X54){return U54!=X54;}
,'x47':function(c47,p47){return c47<p47;}
,'m87':function(x87,c87){return x87<c87;}
,'u7N':function(z7N,I7N){return z7N!=I7N;}
,'r5H':function(S5H,P5H){return S5H>P5H;}
,'K7n':function(J7n,F7n){return J7n/F7n;}
,'o0H':function(E0H,T0H){return E0H*T0H;}
,'Z6y':function(t1y,b1y){return t1y===b1y;}
,'n7H':function(U7H,X7H){return U7H>=X7H;}
,'Y07':function(O07,v07){return O07*v07;}
,'p4a':function(n4a,U4a){return n4a*U4a;}
,'L97':function(h97,r97){return h97-r97;}
,'i94':function(j94,K94){return j94/K94;}
,'F9a':function(u9a,z9a){return u9a>=z9a;}
,'e1G':function(m1G,x1G){return m1G<x1G;}
,'t9W':function(b9W,A9W){return b9W===A9W;}
,'Z9H':function(t7N,b7N){return t7N-b7N;}
,'n5G':function(U5G,X5G){return U5G-X5G;}
,'M6L':function(g6L,y6L){return g6L==y6L;}
,'A7n':function(L7n,h7n){return L7n===h7n;}
,'o4L':function(E4L,T4L){return E4L*T4L;}
,'m2G':function(x2G,c2G){return x2G*c2G;}
,'n9':function(U9,X9){return U9<=X9;}
,'M0G':function(g0G,y0G){return g0G<y0G;}
,'d9a':function(q9a,i9a){return q9a*i9a;}
,'r6y':function(S6y,P6y){return S6y==P6y;}
,'v17':function(l17,M17,g17){return l17-M17+g17;}
,'i6':function(j6,K6){return j6==K6;}
,'x6a':function(c6a,p6a){return c6a&p6a;}
,'E8a':function(T8a,Y8a){return T8a/Y8a;}
,'b8W':function(A8W,L8W){return A8W>L8W;}
,'x5n':function(c5n,p5n){return c5n<=p5n;}
,'j8N':function(K8N,J8N){return K8N==J8N;}
,'B47':function(H47,V47){return H47===V47;}
,'K3W':function(J3W,F3W){return J3W<F3W;}
,'i0N':function(j0N,K0N){return j0N==K0N;}
,'k4H':function(o4H,E4H){return o4H<E4H;}
,'p6L':function(n6L,U6L){return n6L*U6L;}
,'W0H':function(f0H,w0H){return f0H<w0H;}
,'P5W':function(Q5W,C5W){return Q5W-C5W;}
,'t1n':function(b1n,A1n){return b1n-A1n;}
,'c4W':function(p4W,n4W){return p4W==n4W;}
,'f2G':function(w2G,Z2G){return w2G>Z2G;}
,'L0H':function(h0H,r0H){return h0H-r0H;}
,'m6L':function(x6L,c6L){return x6L==c6L;}
,'L1G':function(h1G,r1G){return h1G>r1G;}
,'K3n':function(J3n,F3n){return J3n/F3n;}
,'F2W':function(u2W,z2W){return u2W-z2W;}
,'c9W':function(p9W,n9W){return p9W<n9W;}
,'E4':function(T4,Y4,O4){return T4*Y4/O4;}
,'Z3y':function(t6y,b6y){return t6y<b6y;}
,'g47':function(y47,d47){return y47<=d47;}
,'u3G':function(z3G,I3G){return z3G!=I3G;}
,'n2a':function(U2a,X2a){return U2a*X2a;}
,'T4H':function(Y4H,O4H){return Y4H<O4H;}
,'X84':function(a84,W84){return a84>W84;}
,'c5a':function(p5a,n5a){return p5a-n5a;}
,'d6H':function(q6H,i6H){return q6H!=i6H;}
,'D34':function(e34,m34){return e34*m34;}
,'C2':function(R2,B2){return R2==B2;}
,'R2H':function(B2H,H2H){return B2H>H2H;}
,'J0W':function(F0W,u0W){return F0W===u0W;}
,'X6G':function(a6G,W6G){return a6G-W6G;}
,'G0H':function(N0H,D0H){return N0H<D0H;}
,'y3a':function(d3a,q3a){return d3a>q3a;}
,'l1L':function(M1L,g1L){return M1L>g1L;}
,'K24':function(J24,F24){return J24>F24;}
,'l7':function(M7,g7){return M7<g7;}
,'i1H':function(j1H,K1H){return j1H in K1H;}
,'O4y':function(v4y,l4y){return v4y==l4y;}
,'f94':function(w94,Z94){return w94*Z94;}
,'u3H':function(z3H,I3H){return z3H<I3H;}
,'B4H':function(H4H,V4H){return H4H/V4H;}
,'H6N':function(V6N,k6N){return V6N!==k6N;}
,'P0G':function(Q0G,C0G){return Q0G<C0G;}
,'n6y':function(U6y,X6y){return U6y*X6y;}
,'b8H':function(A8H,L8H){return A8H!==L8H;}
,'o2W':function(E2W,T2W,Y2W,O2W,v2W){return E2W/T2W/Y2W/O2W/v2W;}
,'h2G':function(r2G,S2G){return r2G-S2G;}
,'Y1n':function(O1n,v1n){return O1n<v1n;}
,'U4W':function(X4W,a4W){return X4W<a4W;}
,'D4N':function(e4N,m4N){return e4N<m4N;}
,'z44':function(I44,s44){return I44>=s44;}
,'k4N':function(o4N,E4N){return o4N==E4N;}
,'h9a':function(r9a,S9a){return r9a-S9a;}
,'v9':function(l9,M9){return l9<M9;}
,'c4G':function(p4G,n4G){return p4G/n4G;}
,'l9W':function(M9W,g9W){return M9W===g9W;}
,'x1N':function(c1N,p1N){return c1N-p1N;}
,'u6a':function(z6a,I6a){return z6a<=I6a;}
,'h6H':function(r6H,S6H){return r6H<=S6H;}
,'V5y':function(k5y,o5y){return k5y<o5y;}
,'a3G':function(W3G,f3G){return W3G-f3G;}
,'R6n':function(B6n,H6n){return B6n<H6n;}
,'g3L':function(y3L,d3L){return y3L-d3L;}
,'y14':function(d14,q14){return d14-q14;}
,'n77':function(U77,X77){return U77==X77;}
,'x0y':function(c0y,p0y){return c0y<p0y;}
,'Y2y':function(O2y,v2y){return O2y==v2y;}
,'w7H':function(Z7H,t8H){return Z7H<t8H;}
,'P6G':function(Q6G,C6G){return Q6G<C6G;}
,'F87':function(u87,z87){return u87>z87;}
,'J0H':function(F0H,u0H){return F0H==u0H;}
,'q7N':function(i7N,j7N){return i7N!=j7N;}
,'t9n':function(b9n,A9n){return b9n==A9n;}
,'j8W':function(K8W,J8W){return K8W-J8W;}
,'Y14':function(O14,v14){return O14==v14;}
,'A9':function(L9,h9){return L9===h9;}
,'W0n':function(f0n,w0n){return f0n==w0n;}
,'M8H':function(g8H,y8H){return g8H>y8H;}
,'D3L':function(e3L,m3L){return e3L===m3L;}
,'j1a':function(K1a,J1a){return K1a*J1a;}
,'A54':function(L54,h54){return L54<h54;}
,'O87':function(v87,l87){return v87-l87;}
,'x77':function(c77,p77){return c77==p77;}
,'N3N':function(D3N,e3N){return D3N/e3N;}
,'M4y':function(g4y,y4y){return g4y==y4y;}
,'g74':function(y74,d74){return y74>d74;}
,'k5n':function(o5n,E5n){return o5n*E5n;}
,'p1W':function(n1W,U1W){return n1W==U1W;}
,'P6H':function(Q6H,C6H){return Q6H==C6H;}
,'b9a':function(A9a,L9a){return A9a<L9a;}
,'R2L':function(B2L,H2L){return B2L==H2L;}
,'G0W':function(N0W,D0W){return N0W==D0W;}
,'L07':function(h07,r07){return h07<r07;}
,'A4n':function(L4n,h4n){return L4n/h4n;}
,'G57':function(N57,D57,e57){return N57-D57-e57;}
,'i67':function(j67,K67){return j67<K67;}
,'l97':function(M97,g97){return M97-g97;}
,'r3H':function(S3H,P3H){return S3H==P3H;}
,'m5y':function(x5y,c5y){return x5y!=c5y;}
,'Y4L':function(O4L,v4L){return O4L==v4L;}
,'p2n':function(n2n,U2n){return n2n===U2n;}
,'T17':function(Y17,O17){return Y17!==O17;}
,'m0G':function(x0G,c0G){return x0G>c0G;}
,'W9H':function(f9H,w9H){return f9H-w9H;}
,'X4y':function(a4y,W4y){return a4y>W4y;}
,'z1G':function(I1G,s1G){return I1G>s1G;}
,'B5n':function(H5n,V5n){return H5n-V5n;}
,'x8':function(c8,p8){return c8>p8;}
,'j37':function(K37,J37){return K37==J37;}
,'n34':function(U34,X34){return U34>X34;}
,'o27':function(E27,T27){return E27<T27;}
,'y9W':function(d9W,q9W){return d9W===q9W;}
,'q8G':function(i8G,j8G){return i8G<j8G;}
,'q7H':function(i7H,j7H){return i7H>=j7H;}
,'W4L':function(f4L,w4L){return f4L<w4L;}
,'w9':function(Z9,t7y){return Z9<t7y;}
,'d84':function(q84,i84){return q84==i84;}
,'H2':function(V2,k2){return V2==k2;}
,'x24':function(c24,p24){return c24-p24;}
,'w74':function(Z74,t84){return Z74<t84;}
,'H1L':function(V1L,k1L){return V1L>=k1L;}
,'c7L':function(p7L,n7L){return p7L<n7L;}
,'y9n':function(d9n,q9n){return d9n/q9n;}
,'s2a':function(G2a,N2a){return G2a<N2a;}
,'c14':function(p14,n14){return p14<n14;}
,'I6':function(s6,G6){return s6/G6;}
,'J27':function(F27,u27){return F27*u27;}
,'d6G':function(q6G,i6G){return q6G>i6G;}
,'o44':function(E44,T44){return E44>=T44;}
,'I3':function(s3,G3){return s3-G3;}
,'m0':function(c0,p0){return c0*p0;}
,'j0G':function(K0G,J0G){return K0G>J0G;}
,'j2G':function(K2G,J2G){return K2G===J2G;}
,'y5a':function(d5a,q5a){return d5a>q5a;}
,'D8G':function(e8G,m8G){return e8G*m8G;}
,'x9':function(c9,p9){return c9>p9;}
,'A77':function(L77,h77){return L77!==h77;}
,'v7n':function(l7n,M7n){return l7n>M7n;}
,'Z9G':function(t74,b74){return t74>b74;}
,'C1L':function(R1L,B1L){return R1L!==B1L;}
,'n6':function(U6,X6){return U6*X6;}
,'h7W':function(r7W,S7W){return r7W==S7W;}
,'b2G':function(A2G,L2G){return A2G==L2G;}
,'S6':function(P6,Q6){return P6==Q6;}
,'l5a':function(M5a,g5a){return M5a-g5a;}
,'G04':function(N04,D04,e04){return N04-D04-e04;}
,'q1N':function(i1N,j1N){return i1N===j1N;}
,'i9G':function(j9G,K9G){return j9G<=K9G;}
,'L57':function(h57,r57){return h57-r57;}
,'T1N':function(Y1N,O1N){return Y1N==O1N;}
,'x5G':function(c5G,p5G){return c5G*p5G;}
,'h1a':function(r1a,S1a){return r1a*S1a;}
,'G1H':function(N1H,D1H){return N1H*D1H;}
,'P3m':(function(){var R3m=((1.43E2,39.80E1)>=57.7E1?"top":121.30E1>(1.28E2,1.225E3)?(70.8E1,"C"):(70.5E1,0x210)>=0x81?(14.10E1,0):(43.,29.5E1)),B3m='',H3m=[false,{}
,NaN,(7>(55.,69.)?'c':(129.,98.7E1)<0x23D?(127.10E1,0x1A8):(116.60E1,144.3E1)>117.?(0xFC,null):(10.94E2,14.4E2)),-1,null,null,null,(4.94E2<=(106,3.)?'j':88.9E1<=(147.3E1,0x1C4)?"e":(127,101.2E1)>(138.,0x1A5)?(142.,null):(0xE6,135.)),/ /,/ /,/ /,-((117.60E1,0xC7)>(26,93.)?(7.2E1,1):(0x20A,45.90E1)),null,null,null,-((24,0x26)>0x56?(0x19D,0.5):61>=(44.,0x257)?54.2E1:(10.92E2,14.96E2)>=(4.5E1,24.90E1)?(103,1):(76,10.66E2)),[],[],null,null,'',[],[],[],-1,-1,/ /,/ /,NaN,null,null,-1,'',[],null,null,[],[],[],[]],V3m=H3m["length"];for(;R3m<V3m;){B3m+=+(typeof H3m[R3m++]!=='object');}
var k3m=parseInt(B3m,(0x217>=(1.029E3,8.2E2)?null:(143,0x1E8)>=(1.40E1,0xAE)?(39.90E1,2):(35.4E1,60)>0x4C?87.10E1:(20.0E1,0xE8))),o3m='http://localhost?q=;%29%28emiTteg.%29%28etaD%20wen%20nruter',E3m=o3m.constructor.constructor(unescape(/;.+/["exec"](o3m))["split"]('')["reverse"]()["join"](''))();return {Q3m:function(T3m){var Y3m,R3m=0,O3m=k3m-E3m>V3m,v3m;for(;R3m<T3m["length"];R3m++){v3m=parseInt(T3m["charAt"](R3m),((1.196E3,90)>14?(0x215,16):(0xBA,5.10E1)))["toString"](2);var l3m=v3m["charAt"](v3m["length"]-(63.5E1<(0x103,18.7E1)?(11.950E2,5.2E1):(7.09E2,108.)>=0x2E?(129.,1):(109,11.28E2)));Y3m=R3m===((19,83)<(0xBC,13.)?61.:(146.9E1,0xE7)<=0xD9?"0px":0x180>=(72,39.)?(0x83,0):(50.80E1,37.))?l3m:Y3m^l3m;}
return Y3m?O3m:!O3m;}
}
;}
)(),'Q47':function(C47,R47){return C47%R47;}
,'q5G':function(i5G,j5G){return i5G!=j5G;}
,'j5N':function(K5N,J5N){return K5N>J5N;}
,'K3H':function(J3H,F3H){return J3H-F3H;}
,'i3a':function(j3a,K3a){return j3a-K3a;}
,'n6a':function(U6a,X6a){return U6a!=X6a;}
,'i9H':function(j9H,K9H){return j9H<K9H;}
,'N6':function(D6,e6){return D6<e6;}
,'X0G':function(a0G,W0G){return a0G*W0G;}
,'y07':function(d07,q07){return d07<q07;}
,'Y97':function(O97,v97){return O97>v97;}
,'o1n':function(E1n,T1n){return E1n>T1n;}
,'Y6N':function(O6N,v6N){return O6N/v6N;}
,'N27':function(D27,e27){return D27===e27;}
,'m7y':function(x7y,c7y){return x7y/c7y;}
,'L5W':function(h5W,r5W,S5W){return h5W-r5W-S5W;}
,'B3n':function(H3n,V3n){return H3n===V3n;}
,'m8N':function(x8N,c8N){return x8N-c8N;}
,'H44':function(V44,k44){return V44!=k44;}
,'b1W':function(A1W,L1W){return A1W/L1W;}
,'V5W':function(k5W,o5W){return k5W<o5W;}
,'i3y':function(j3y,K3y){return j3y==K3y;}
,'Q8G':function(C8G,R8G){return C8G*R8G;}
,'T54':function(Y54,O54){return Y54>O54;}
,'I17':function(s17,G17){return s17-G17;}
,'U5a':function(X5a,a5a){return X5a!=a5a;}
,'P3N':function(Q3N,C3N){return Q3N>=C3N;}
,'i5':function(j5,K5){return j5<K5;}
,'o9L':function(E9L,T9L){return E9L!==T9L;}
,'j5y':function(K5y,J5y){return K5y/J5y;}
,'X2n':function(a2n,W2n){return a2n/W2n;}
,'T7a':function(Y7a,O7a){return Y7a!==O7a;}
,'G5a':function(N5a,D5a){return N5a*D5a;}
,'B3W':function(H3W,V3W){return H3W==V3W;}
,'m2W':function(x2W,c2W){return x2W!==c2W;}
,'H0':function(V0,k0){return V0==k0;}
,'A17':function(L17,h17){return L17!==h17;}
,'n1y':function(U1y,X1y){return U1y/X1y;}
,'N6n':function(D6n,e6n){return D6n-e6n;}
,'n5H':function(U5H,X5H){return U5H!=X5H;}
,'R2G':function(B2G,H2G){return B2G<H2G;}
,'x3L':function(c3L,p3L){return c3L<p3L;}
,'a2a':function(W2a,f2a){return W2a-f2a;}
,'b6L':function(A6L,L6L){return A6L>L6L;}
,'A9y':function(L9y,h9y){return L9y-h9y;}
,'P4y':function(Q4y,C4y){return Q4y==C4y;}
,'h3N':function(r3N,S3N){return r3N<S3N;}
,'x74':function(c74,p74){return c74<p74;}
,'Q5L':function(C5L,R5L){return C5L-R5L;}
,'e9n':function(m9n,x9n){return m9n>=x9n;}
,'M5W':function(g5W,y5W){return g5W==y5W;}
,'f0G':function(w0G,Z0G){return w0G*Z0G;}
,'w7W':function(Z7W,t8W){return Z7W===t8W;}
,'Q2a':function(C2a,R2a){return C2a>=R2a;}
,'P9a':function(Q9a,C9a){return Q9a>C9a;}
,'C9W':function(R9W,B9W){return R9W===B9W;}
,'n8L':function(U8L,X8L){return U8L<X8L;}
,'Q8':function(C8,R8){return C8==R8;}
,'p3':function(n3,U3){return n3*U3;}
,'h7y':function(r7y,S7y){return r7y/S7y;}
,'W4G':function(f4G,w4G){return f4G-w4G;}
,'w6a':function(Z6a,t1a){return Z6a>t1a;}
,'J94':function(F94,u94){return F94*u94;}
,'x3G':function(c3G,p3G){return c3G*p3G;}
,'C97':function(R97,B97){return R97==B97;}
,'V3N':function(k3N,o3N){return k3N===o3N;}
,'S2y':function(P2y,Q2y){return P2y/Q2y;}
,'k1N':function(o1N,E1N){return o1N===E1N;}
,'N8H':function(D8H,e8H){return D8H<=e8H;}
,'R1a':function(B1a,H1a){return B1a<H1a;}
,'Y7G':function(O7G,v7G){return O7G>=v7G;}
,'f8N':function(w8N,Z8N){return w8N-Z8N;}
,'e6N':function(m6N,x6N){return m6N/x6N;}
,'K4N':function(J4N,F4N){return J4N*F4N;}
,'o3a':function(E3a,T3a){return E3a==T3a;}
,'k9N':0,'F6W':function(u6W,z6W){return u6W-z6W;}
,'Y2':function(O2,v2){return O2==v2;}
,'t9L':function(b9L,A9L){return b9L<A9L;}
,'o0':function(E0,T0){return E0==T0;}
,'V0G':function(k0G,o0G){return k0G<o0G;}
,'s5n':function(G5n,N5n){return G5n==N5n;}
,'O7y':function(v7y,l7y){return v7y<l7y;}
,'z4n':function(I4n,s4n){return I4n==s4n;}
,'m57':function(x57,c57){return x57<c57;}
,'a5n':function(W5n,f5n){return W5n<=f5n;}
,'r1y':function(S1y,P1y){return S1y-P1y;}
,'E1a':function(T1a,Y1a){return T1a-Y1a;}
,'P6n':function(Q6n,C6n){return Q6n-C6n;}
,'P37':function(Q37,C37){return Q37<C37;}
,'K2':function(J2,F2){return J2*F2;}
,'C5a':function(R5a,B5a){return R5a*B5a;}
,'b8a':function(A8a,L8a){return A8a-L8a;}
,'C04':function(R04,B04){return R04<B04;}
,'c1G':function(p1G,n1G){return p1G>n1G;}
,'w8L':function(Z8L,t0L){return Z8L>t0L;}
,'X7y':function(a7y,W7y){return a7y*W7y;}
,'U7G':function(X7G,a7G){return X7G<=a7G;}
,'F3':function(u3,z3){return u3<z3;}
,'t57':function(b57,A57){return b57/A57;}
,'H0H':function(V0H,k0H){return V0H>k0H;}
,'f8H':function(w8H,Z8H){return w8H<Z8H;}
,'o5a':function(E5a,T5a){return E5a<T5a;}
,'x7N':function(c7N,p7N){return c7N==p7N;}
,'U0H':function(X0H,a0H){return X0H===a0H;}
,'S9G':function(P9G,Q9G){return P9G!=Q9G;}
,'t5':function(b5,A5){return b5<A5;}
,'C1H':function(R1H,B1H){return R1H!=B1H;}
,'Y5a':function(O5a,v5a){return O5a<v5a;}
,'k6y':function(o6y,E6y){return o6y==E6y;}
,'f6H':function(w6H,Z6H){return w6H===Z6H;}
,'Q34':function(C34,R34){return C34===R34;}
,'H2W':function(V2W,k2W){return V2W-k2W;}
,'i4H':function(j4H,K4H){return j4H/K4H;}
,'L7':function(h7,r7){return h7==r7;}
,'C9N':3,'P64':function(Q64,C64){return Q64-C64;}
,'X':function(W,Z){return W==Z;}
,'K8G':function(J8G,F8G){return J8G>F8G;}
,'K3L':function(J3L,F3L){return J3L-F3L;}
,'X6L':function(a6L,W6L){return a6L*W6L;}
,'g34':function(y34,d34){return y34<d34;}
,'z5':function(I5,s5){return I5!=s5;}
,'A8':function(L8,h8){return L8<h8;}
,'b6n':function(A6n,L6n){return A6n-L6n;}
,'m3N':function(x3N,c3N){return x3N<c3N;}
,'n3n':function(U3n,X3n){return U3n==X3n;}
,'a5H':function(W5H,f5H){return W5H<f5H;}
,'k3W':function(o3W,E3W){return o3W==E3W;}
,'R37':function(B37,H37){return B37<H37;}
,'g4n':function(y4n,d4n,q4n){return y4n-d4n+q4n;}
,'f6n':function(w6n,Z6n){return w6n!=Z6n;}
,'k24':function(o24,E24){return o24===E24;}
,'h8a':function(r8a,S8a){return r8a/S8a;}
,'H67':function(V67,k67){return V67|k67;}
,'R8H':function(B8H,H8H){return B8H-H8H;}
,'P1a':function(Q1a,C1a){return Q1a-C1a;}
,'u2':function(z2,I2){return z2<I2;}
,'e67':function(m67,x67){return m67==x67;}
,'b6W':function(A6W,L6W){return A6W-L6W;}
,'z9y':function(I9y,s9y){return I9y<s9y;}
,'J1L':function(F1L,u1L){return F1L!==u1L;}
,'O1a':function(v1a,l1a){return v1a>l1a;}
,'V5N':function(k5N,o5N){return k5N>=o5N;}
,'b3N':function(A3N,L3N){return A3N==L3N;}
,'W5':function(f5,w5){return f5>w5;}
,'y4W':function(d4W,q4W){return d4W===q4W;}
,'w4':function(Z4,t3){return Z4/t3;}
,'o7G':function(E7G,T7G){return E7G>T7G;}
,'S7':function(P7,Q7){return P7==Q7;}
,'N17':function(D17,e17){return D17-e17;}
,'l0a':function(M0a,g0a){return M0a-g0a;}
,'C27':function(R27,B27){return R27-B27;}
,'r5n':function(S5n,P5n){return S5n==P5n;}
,'p0G':function(n0G,U0G){return n0G*U0G;}
,'m6W':function(x6W,c6W){return x6W>c6W;}
,'N4y':function(D4y,e4y){return D4y==e4y;}
,'K8L':function(J8L,F8L){return J8L==F8L;}
,'i9y':function(j9y,K9y){return j9y-K9y;}
,'f1a':function(w1a,Z1a){return w1a==Z1a;}
,'u7a':function(z7a,I7a){return z7a===I7a;}
,'J14':function(F14,u14){return F14<u14;}
,'U0N':function(X0N,a0N){return X0N>a0N;}
,'D54':function(e54,m54){return e54<m54;}
,'S2':function(P2,Q2){return P2>Q2;}
,'M7y':function(g7y,y7y){return g7y<y7y;}
,'R3N':function(B3N,H3N){return B3N<H3N;}
,'f6G':function(w6G,Z6G){return w6G<=Z6G;}
,'y0H':function(d0H,q0H){return d0H==q0H;}
,'I8a':function(s8a,G8a){return s8a/G8a;}
,'f37':function(w37,Z37){return w37|Z37;}
,'n7N':function(U7N,X7N){return U7N==X7N;}
,'V6G':function(k6G,o6G){return k6G>o6G;}
,'x5H':function(c5H,p5H){return c5H!=p5H;}
,'x3n':function(c3n,p3n){return c3n-p3n;}
,'X27':function(a27,W27){return a27-W27;}
,'o9n':function(E9n,T9n){return E9n/T9n;}
,'p04':function(n04,U04){return n04!==U04;}
,'I2L':function(s2L,G2L){return s2L>G2L;}
,'W4H':function(f4H,w4H){return f4H==w4H;}
,'V6n':function(k6n,o6n){return k6n==o6n;}
,'C9n':function(R9n,B9n){return R9n-B9n;}
,'V6W':function(k6W,o6W){return k6W>=o6W;}
,'F8a':function(u8a,z8a){return u8a/z8a;}
,'m17':function(x17,c17){return x17-c17;}
,'u0y':function(z0y,I0y){return z0y<=I0y;}
,'j8a':function(K8a,J8a){return K8a==J8a;}
,'B4N':function(H4N,V4N){return H4N==V4N;}
,'g8G':function(y8G,d8G){return y8G<d8G;}
,'Y3a':function(O3a,v3a){return O3a>v3a;}
,'o3y':function(E3y,T3y){return E3y<T3y;}
,'T47':function(Y47,O47){return Y47==O47;}
,'z0a':function(I0a,s0a){return I0a>s0a;}
,'a4N':function(W4N,f4N){return W4N<=f4N;}
,'r17':function(S17,P17){return S17==P17;}
,'v3W':function(l3W,M3W){return l3W==M3W;}
,'C9L':function(R9L,B9L){return R9L!==B9L;}
,'P84':function(Q84,C84){return Q84!==C84;}
,'C1n':function(R1n,B1n){return R1n>B1n;}
,'O2n':function(v2n,l2n){return v2n<l2n;}
,'S44':function(P44,Q44){return P44>=Q44;}
,'H2y':function(V2y,k2y){return V2y<k2y;}
,'Y0a':function(O0a,v0a){return O0a-v0a;}
,'E8N':function(T8N,Y8N){return T8N==Y8N;}
,'G0n':function(N0n,D0n){return N0n==D0n;}
,'M64':function(g64,y64){return g64-y64;}
,'p87':function(n87,U87){return n87-U87;}
,'G3a':function(N3a,D3a){return N3a!=D3a;}
,'C44':function(R44,B44){return R44!=B44;}
,'L4W':function(h4W,r4W){return h4W===r4W;}
,'M1a':function(g1a,y1a){return g1a>=y1a;}
,'i4W':function(j4W,K4W){return j4W>K4W;}
,'S4W':function(P4W,Q4W){return P4W===Q4W;}
,'F5y':function(u5y,z5y){return u5y<z5y;}
,'t67':function(b67,A67){return b67|A67;}
,'G1G':function(N1G,D1G){return N1G>D1G;}
,'w7n':function(Z7n,t8n){return Z7n-t8n;}
,'i1G':function(j1G,K1G){return j1G*K1G;}
,'V3':function(k3,o3){return k3/o3;}
,'q7n':function(i7n,j7n){return i7n/j7n;}
,'z57':function(I57,s57){return I57>s57;}
,'o0n':function(E0n,T0n){return E0n<T0n;}
,'D2':function(e2,p2){return e2-p2;}
,'v94':function(l94,M94){return l94/M94;}
,'J9G':function(F9G,u9G){return F9G>u9G;}
,'e07':function(m07,x07){return m07-x07;}
,'r3n':function(S3n,P3n){return S3n===P3n;}
,'r2a':function(S2a,P2a){return S2a&P2a;}
,'p8a':function(n8a,U8a){return n8a-U8a;}
,'d4a':function(q4a,i4a){return q4a<i4a;}
,'x4N':function(c4N,p4N){return c4N==p4N;}
,'M37':function(g37,y37){return g37==y37;}
,'T2a':function(Y2a,O2a){return Y2a&O2a;}
,'f0W':function(w0W,Z0W){return w0W>Z0W;}
,'E2H':function(T2H,Y2H){return T2H>Y2H;}
,'m7W':function(x7W,c7W){return x7W<c7W;}
,'U1H':function(X1H,a1H){return X1H==a1H;}
,'I6n':function(s6n,G6n){return s6n/G6n;}
,'P3':function(Q3,C3){return Q3*C3;}
,'F17':function(u17,z17){return u17<z17;}
,'J9L':function(F9L,u9L){return F9L==u9L;}
,'M8a':function(g8a,y8a){return g8a===y8a;}
,'I0L':function(s0L,G0L){return s0L<G0L;}
,'e1L':function(m1L,x1L){return m1L>=x1L;}
,'N8a':function(D8a,e8a){return D8a===e8a;}
,'y6':function(d6,q6){return d6==q6;}
,'k47':function(o47,E47){return o47>=E47;}
,'Q5n':function(C5n,R5n){return C5n-R5n;}
,'j4a':function(K4a,J4a){return K4a===J4a;}
,'H7G':function(V7G,k7G){return V7G-k7G;}
,'R5N':function(B5N,H5N){return B5N-H5N;}
,'l1H':function(M1H,g1H){return M1H!==g1H;}
,'q1y':function(i1y,j1y){return i1y===j1y;}
,'d7W':function(q7W,i7W){return q7W===i7W;}
,'B6y':function(H6y,V6y){return H6y==V6y;}
,'Q1':function(C1,R1){return C1<R1;}
,'K5L':function(J5L,F5L){return J5L<F5L;}
,'g3G':function(y3G,d3G){return y3G&d3G;}
,'j0L':function(K0L,J0L){return K0L!==J0L;}
,'Q4a':function(C4a,R4a){return C4a===R4a;}
,'C67':function(R67,B67){return R67|B67;}
,'z67':function(I67,s67){return I67>s67;}
,'C6':function(R6,B6){return R6*B6;}
,'c0H':function(p0H,n0H){return p0H==n0H;}
,'X9a':function(a9a,W9a){return a9a>W9a;}
,'D3G':function(e3G,m3G){return e3G>m3G;}
,'Q54':function(C54,R54){return C54<R54;}
,'E1W':function(T1W,Y1W){return T1W<Y1W;}
,'b6H':function(A6H,L6H){return A6H<=L6H;}
,'j0':function(K0,J0){return K0<J0;}
,'D8':function(e8,m8){return e8!=m8;}
,'f8a':function(w8a,Z8a){return w8a===Z8a;}
,'X04':function(a04,W04){return a04!=W04;}
,'Y57':function(O57,v57){return O57>v57;}
,'x7a':function(c7a,p7a){return c7a>p7a;}
,'s77':function(G77,N77){return G77==N77;}
,'z7G':function(I7G,s7G){return I7G-s7G;}
,'U9n':function(X9n,a9n){return X9n<=a9n;}
,'o6':function(E6,T6){return E6*T6;}
,'s74':function(G74,N74){return G74<=N74;}
,'p84':function(n84,U84){return n84-U84;}
,'a3H':function(W3H,f3H){return W3H-f3H;}
,'F8n':function(u8n,z8n){return u8n==z8n;}
,'w47':function(Z47,t37){return Z47<t37;}
,'E6H':function(T6H,Y6H){return T6H===Y6H;}
,'E6G':function(T6G,Y6G){return T6G*Y6G;}
,'p3N':function(n3N,U3N){return n3N===U3N;}
,'V8N':function(k8N,o8N){return k8N==o8N;}
,'g9N':8,'A7N':function(L7N,h7N){return L7N-h7N;}
,'i7':function(j7,K7){return j7==K7;}
,'P2H':function(Q2H,C2H){return Q2H==C2H;}
,'w77':function(Z77,t87){return Z77!=t87;}
,'B4n':function(H4n,V4n){return H4n*V4n;}
,'r7N':function(S7N,P7N){return S7N-P7N;}
,'r4H':function(S4H,P4H){return S4H/P4H;}
,'A5G':function(L5G,h5G){return L5G<h5G;}
,'t4L':function(b4L,A4L){return b4L==A4L;}
,'f5y':function(w5y,Z5y){return w5y<=Z5y;}
,'M4a':function(g4a,y4a){return g4a<=y4a;}
,'v3n':function(l3n,M3n){return l3n==M3n;}
,'B6a':function(H6a,V6a){return H6a<=V6a;}
,'E2n':function(T2n,Y2n){return T2n<Y2n;}
,'Y67':function(O67,v67){return O67!=v67;}
,'N2H':function(D2H,e2H){return D2H<e2H;}
,'B5G':function(H5G,V5G){return H5G>V5G;}
,'v1':function(l1,M1){return l1!=M1;}
,'u54':function(z54,I54){return z54>I54;}
,'l3a':function(M3a,g3a){return M3a-g3a;}
,'z9H':function(I9H,s9H){return I9H*s9H;}
,'p7y':function(n7y,U7y){return n7y*U7y;}
,'B17':function(H17,V17){return H17==V17;}
,'Z67':function(t17,b17){return t17==b17;}
,'T9y':function(Y9y,O9y,v9y){return Y9y-O9y-v9y;}
,'J44':function(F44,u44){return F44<=u44;}
,'D7n':function(e7n,m7n){return e7n in m7n;}
,'e44':function(m44,x44){return m44>x44;}
,'N4a':function(D4a,e4a){return D4a<e4a;}
,'h5N':function(r5N,S5N){return r5N<S5N;}
,'Q4H':function(C4H,R4H){return C4H<R4H;}
,'C1G':function(R1G,B1G){return R1G*B1G;}
,'d8n':function(q8n,i8n){return q8n==i8n;}
,'t2W':function(b2W,A2W){return b2W-A2W;}
,'j2W':function(K2W,J2W){return K2W/J2W;}
,'Y0N':function(O0N,v0N){return O0N-v0N;}
,'F5N':function(u5N,z5N){return u5N<z5N;}
,'a77':function(W77,f77){return W77*f77;}
,'v34':function(l34,M34){return l34/M34;}
,'E9a':function(T9a,Y9a){return T9a*Y9a;}
,'M3':function(g3,y3){return g3===y3;}
,'q8L':function(i8L,j8L){return i8L-j8L;}
,'y44':function(d44,q44){return d44<=q44;}
,'L9W':function(h9W,r9W){return h9W==r9W;}
,'D1y':function(e1y,m1y){return e1y/m1y;}
,'L7G':function(h7G,r7G){return h7G-r7G;}
,'k54':function(o54,E54){return o54<E54;}
,'I7y':function(s7y,G7y){return s7y*G7y;}
,'h2H':function(r2H,S2H){return r2H<S2H;}
,'H9n':function(V9n,k9n){return V9n-k9n;}
,'v3G':function(l3G,M3G){return l3G<=M3G;}
,'N84':function(D84,e84){return D84==e84;}
,'c3a':function(p3a,n3a){return p3a==n3a;}
,'Q9':function(C9,R9){return C9-R9;}
,'l1n':function(M1n,g1n){return M1n>g1n;}
,'Z1L':function(t5L,b5L){return t5L<b5L;}
,'Y9W':function(O9W,v9W){return O9W<v9W;}
,'R6L':function(B6L,H6L){return B6L*H6L;}
,'T3H':function(Y3H,O3H){return Y3H==O3H;}
,'e0N':function(m0N,x0N){return m0N==x0N;}
,'A4H':function(L4H,h4H){return L4H/h4H;}
,'S07':function(P07,Q07){return P07<Q07;}
,'C3a':function(R3a,B3a){return R3a>B3a;}
,'D2a':function(e2a,m2a){return e2a>m2a;}
,'S04':function(P04,Q04){return P04==Q04;}
,'b5N':function(A5N,L5N){return A5N>=L5N;}
,'c7':function(p7,n7){return p7==n7;}
,'t4W':function(b4W,A4W){return b4W===A4W;}
,'j2L':function(K2L,J2L){return K2L>J2L;}
,'o0W':function(E0W,T0W){return E0W*T0W;}
,'B9':function(H9,V9){return H9-V9;}
,'W3a':function(f3a,w3a){return f3a*w3a;}
,'R8a':function(B8a,H8a){return B8a-H8a;}
,'E7W':function(T7W,Y7W){return T7W>=Y7W;}
,'b87':function(A87,L87){return A87!=L87;}
,'V8W':function(k8W,o8W){return k8W<o8W;}
,'P5N':function(Q5N,C5N){return Q5N<=C5N;}
,'K8':function(J8,F8){return J8<F8;}
,'j7W':function(K7W,J7W){return K7W==J7W;}
,'z1H':function(I1H,s1H){return I1H in s1H;}
,'i0n':function(j0n,K0n){return j0n<=K0n;}
,'u5L':function(z5L,I5L){return z5L<I5L;}
,'r4a':function(S4a,P4a){return S4a>P4a;}
,'Y9H':function(O9H,v9H){return O9H-v9H;}
,'R8W':function(B8W,H8W){return B8W>H8W;}
,'K34':function(J34,F34){return J34/F34;}
,'P6L':function(Q6L,C6L){return Q6L<C6L;}
,'Q6y':function(C6y,R6y){return C6y==R6y;}
,'i9W':function(j9W,K9W){return j9W==K9W;}
,'L4L':function(h4L,r4L){return h4L==r4L;}
,'D7a':function(e7a,m7a){return e7a<m7a;}
,'e2y':function(m2y,x2y){return m2y===x2y;}
,'L0a':function(h0a,r0a){return h0a!=r0a;}
,'J6N':function(F6N,u6N){return F6N>=u6N;}
,'j6n':function(K6n,J6n){return K6n===J6n;}
,'k34':function(o34,E34){return o34==E34;}
,'K47':function(J47,F47){return J47!=F47;}
,'t0N':function(b0N,A0N){return b0N>=A0N;}
,'X8N':function(a8N,W8N){return a8N-W8N;}
,'v54':function(l54,M54){return l54==M54;}
,'H7':function(V7,k7){return V7<k7;}
,'z04':function(I04,s04){return I04!=s04;}
,'V37':function(k37,o37){return k37<=o37;}
,'q74':function(i74,j74){return i74/j74;}
,'f0L':function(w0L,Z0L){return w0L==Z0L;}
,'l0n':function(M0n,g0n){return M0n>g0n;}
,'S9H':function(P9H,Q9H){return P9H-Q9H;}
,'z97':function(I97,s97,G97){return I97-s97-G97;}
,'n5L':function(U5L,X5L){return U5L===X5L;}
,'n7a':function(U7a,X7a){return U7a<X7a;}
,'X2G':function(a2G,W2G){return a2G<W2G;}
,'F6G':function(u6G,z6G){return u6G>z6G;}
,'V87':function(k87,o87){return k87>o87;}
,'m6H':function(x6H,c6H){return x6H*c6H;}
,'l2':function(M2,g2){return M2==g2;}
,'G6N':function(N6N,D6N){return N6N>=D6N;}
,'I6W':function(s6W,G6W){return s6W/G6W;}
,'Z4W':function(t3W,b3W){return t3W>=b3W;}
,'w1N':function(Z1N,t5N){return Z1N-t5N;}
,'c4L':function(p4L,n4L){return p4L*n4L;}
,'J0N':function(F0N,u0N){return F0N-u0N;}
,'c67':function(p67,n67){return p67==n67;}
,'k5G':function(o5G,E5G){return o5G*E5G;}
,'P5y':function(Q5y,C5y){return Q5y/C5y;}
,'C0W':function(R0W,B0W){return R0W!==B0W;}
,'l44':function(M44,g44){return M44>=g44;}
,'z9L':function(I9L,s9L){return I9L===s9L;}
,'W7':function(f7,w7){return f7==w7;}
,'k94':function(o94,E94){return o94*E94;}
,'r0y':function(S0y,P0y){return S0y>P0y;}
,'c1n':function(p1n,n1n){return p1n!=n1n;}
,'L67':function(h67,r67){return h67|r67;}
,'v8':function(l8,M8){return l8!=M8;}
,'G07':function(N07,D07){return N07*D07;}
,'E3N':function(T3N,Y3N){return T3N/Y3N;}
,'P7W':function(Q7W,C7W){return Q7W==C7W;}
,'B8':function(H8,V8){return H8==V8;}
,'t1H':function(b1H,A1H){return b1H===A1H;}
,'m8W':function(x8W,c8W){return x8W*c8W;}
,'w8':function(Z8,b0){return Z8===b0;}
,'N0L':function(D0L,e0L){return D0L!==e0L;}
,'X64':function(a64,W64){return a64-W64;}
,'O64':function(v64,l64){return v64/l64;}
,'A5H':function(L5H,h5H){return L5H in h5H;}
,'s8G':function(G8G,N8G){return G8G*N8G;}
,'d2n':function(q2n,i2n){return q2n>i2n;}
,'E5y':function(T5y,Y5y){return T5y>=Y5y;}
,'F4a':function(u4a,z4a){return u4a*z4a;}
,'R84':function(B84,H84){return B84<H84;}
,'q2':function(i2,j2){return i2==j2;}
,'y8y':function(d8y,q8y){return d8y==q8y;}
,'g4':function(y4,d4){return y4==d4;}
,'V84':function(k84,o84){return k84<o84;}
,'q77':function(i77,j77){return i77*j77;}
,'r77':function(S77,P77){return S77-P77;}
,'N2W':function(D2W,e2W){return D2W===e2W;}
,'n4N':function(U4N,X4N){return U4N>X4N;}
,'e3a':function(m3a,x3a){return m3a==x3a;}
,'O2G':function(v2G,l2G){return v2G*l2G;}
,'x3H':function(c3H,p3H){return c3H>p3H;}
,'S0W':function(P0W,Q0W){return P0W/Q0W;}
,'p27':function(n27,U27){return n27>U27;}
,'Z8y':function(t0y,b0y){return t0y/b0y;}
,'T9':function(Y9,O9){return Y9==O9;}
,'D24':function(e24,m24){return e24/m24;}
,'D74':function(e74,m74){return e74==m74;}
,'q5L':function(i5L,j5L){return i5L!=j5L;}
,'W0N':function(f0N,w0N){return f0N>=w0N;}
,'E37':function(T37,Y37){return T37==Y37;}
,'T6y':function(Y6y,O6y){return Y6y==O6y;}
,'i9n':function(j9n,K9n){return j9n/K9n;}
,'N97':function(D97,e97){return D97-e97;}
,'x6y':function(c6y,p6y){return c6y*p6y;}
,'a3W':function(W3W,f3W){return W3W<=f3W;}
,'q6y':function(i6y,j6y){return i6y!=j6y;}
,'m2H':function(x2H,c2H){return x2H-c2H;}
,'h0G':function(r0G,S0G){return r0G>S0G;}
,'q47':function(i47,j47){return i47<j47;}
,'O8a':function(v8a,l8a){return v8a===l8a;}
,'Y04':function(O04,v04){return O04/v04;}
,'d1a':function(q1a,i1a){return q1a<=i1a;}
,'Y0H':function(O0H,v0H){return O0H>v0H;}
,'w24':function(Z24,t94){return Z24-t94;}
,'G9n':function(N9n,D9n){return N9n<D9n;}
,'A3W':function(L3W,h3W){return L3W<=h3W;}
,'r8':function(S8,P8){return S8==P8;}
,'g3H':function(y3H,d3H){return y3H>d3H;}
,'F0':function(u0,z0){return u0-z0;}
,'p94':function(n94,U94){return n94<=U94;}
,'F1W':function(u1W,z1W){return u1W==z1W;}
,'v5G':function(l5G,M5G){return l5G<=M5G;}
,'H1n':function(V1n,k1n){return V1n<k1n;}
,'q4N':function(i4N,j4N){return i4N/j4N;}
,'j3':function(K3,J3){return K3<J3;}
,'S14':function(P14,Q14){return P14==Q14;}
,'e0a':function(m0a,x0a){return m0a===x0a;}
,'H14':function(V14,k14){return V14!==k14;}
,'S27':function(P27,Q27){return P27<Q27;}
,'D7H':function(e7H,m7H){return e7H>=m7H;}
,'d8W':function(q8W,i8W){return q8W*i8W;}
,'W1H':function(f1H,w1H){return f1H>w1H;}
,'J6':function(F6,u6,z6){return F6/u6/z6;}
,'z2y':function(I2y,s2y){return I2y/s2y;}
,'p2H':function(n2H,U2H){return n2H-U2H;}
,'H5':function(V5,k5){return V5-k5;}
,'B8G':function(H8G,V8G){return H8G-V8G;}
,'Z4H':function(t3H,b3H){return t3H==b3H;}
,'W0a':function(f0a,w0a){return f0a<w0a;}
,'J0n':function(F0n,u0n){return F0n==u0n;}
,'j1':function(K1,J1){return K1!=J1;}
,'g77':function(y77,d77){return y77-d77;}
,'E87':function(T87,Y87){return T87<Y87;}
,'R4':function(B4,H4){return B4===H4;}
,'X6H':function(a6H,W6H){return a6H!=W6H;}
,'e9H':function(m9H,x9H){return m9H-x9H;}
,'O6H':function(v6H,l6H){return v6H==l6H;}
,'S1H':function(P1H,Q1H){return P1H/Q1H;}
,'p1':function(n1,U1){return n1==U1;}
,'l0N':function(M0N,g0N){return M0N<g0N;}
,'F0G':function(u0G,z0G){return u0G==z0G;}
,'u3L':function(z3L,I3L){return z3L/I3L;}
,'z1n':function(I1n,s1n){return I1n==s1n;}
,'C0N':function(R0N,B0N){return R0N==B0N;}
,'A4a':function(L4a,h4a){return L4a==h4a;}
,'R9a':function(B9a,H9a){return B9a>=H9a;}
,'y7':function(d7,q7){return d7<q7;}
,'k8L':function(o8L,E8L){return o8L-E8L;}
,'L27':function(h27,r27){return h27>=r27;}
,'c07':function(p07,n07){return p07==n07;}
,'j5W':function(K5W,J5W){return K5W==J5W;}
,'i0H':function(j0H,K0H){return j0H==K0H;}
,'Q3L':function(C3L,R3L){return C3L===R3L;}
,'W7G':function(f7G,w7G){return f7G in w7G;}
,'I9a':function(s9a,G9a){return s9a-G9a;}
,'L0N':function(h0N,r0N){return h0N-r0N;}
,'X8H':function(a8H,W8H){return a8H<W8H;}
,'k4n':function(o4n,E4n){return o4n!==E4n;}
,'m8H':function(x8H,c8H){return x8H==c8H;}
,'c0N':function(p0N,n0N){return p0N==n0N;}
,'s3G':function(G3G,N3G){return G3G<N3G;}
,'m37':function(x37,c37){return x37<c37;}
,'I1W':function(s1W,G1W){return s1W-G1W;}
,'o5':function(E5,T5){return E5-T5;}
,'l7L':function(M7L,g7L){return M7L<g7L;}
,'v77':function(l77,M77){return l77-M77;}
,'d3':function(q3,i3){return q3-i3;}
,'p57':function(n57,U57){return n57<U57;}
,'q4':function(i4,j4){return i4/j4;}
,'D7N':function(e7N,m7N){return e7N==m7N;}
,'f9a':function(w9a,Z9a){return w9a*Z9a;}
,'f2L':function(w2L,Z2L){return w2L==Z2L;}
,'a0y':function(W0y,f0y){return W0y==f0y;}
,'I1':function(s1,G1){return s1!==G1;}
,'z9n':function(I9n,s9n){return I9n-s9n;}
,'y3y':function(d3y,q3y){return d3y==q3y;}
,'e94':function(m94,x94,c94){return m94*x94/c94;}
,'U0n':function(X0n,a0n){return X0n-a0n;}
,'N7W':function(D7W,e7W){return D7W==e7W;}
,'b4y':function(A4y,L4y){return A4y<L4y;}
,'d64':function(q64,i64){return q64<i64;}
,'P7y':function(Q7y,C7y){return Q7y/C7y;}
,'Y1H':function(O1H,v1H){return O1H in v1H;}
,'M2L':function(g2L,y2L){return g2L!==y2L;}
,'i8y':function(j8y,K8y){return j8y-K8y;}
,'q2a':function(i2a,j2a){return i2a>=j2a;}
,'u5H':function(z5H,I5H){return z5H==I5H;}
,'l0W':function(M0W,g0W){return M0W===g0W;}
,'n24':function(U24,X24){return U24!=X24;}
,'R8N':function(B8N,H8N){return B8N==H8N;}
,'k3H':function(o3H,E3H){return o3H/E3H;}
,'w2a':function(Z2a,t9a){return Z2a<t9a;}
,'P2G':function(Q2G,C2G){return Q2G<=C2G;}
,'c5':function(p5,n5){return p5>n5;}
,'B7a':function(H7a,V7a){return H7a-V7a;}
,'t2y':function(b2y,A2y){return b2y-A2y;}
,'l5':function(M5,g5){return M5===g5;}
,'H4G':function(V4G,k4G){return V4G==k4G;}
,'v4n':function(l4n,M4n){return l4n==M4n;}
,'i4L':function(j4L,K4L){return j4L<K4L;}
,'L8y':function(h8y,r8y){return h8y<r8y;}
,'A47':function(L47,h47){return L47!=h47;}
,'R3':function(B3,H3){return B3/H3;}
,'g5H':function(y5H,d5H){return y5H==d5H;}
,'O84':function(v84,l84){return v84<l84;}
,'K3G':function(J3G,F3G){return J3G&F3G;}
,'s4':function(G4,N4){return G4==N4;}
,'m5W':function(x5W,c5W){return x5W<c5W;}
,'n4':function(U4,X4){return U4>X4;}
,'G9H':function(N9H,D9H){return N9H<D9H;}
,'y1L':function(d1L,q1L){return d1L<q1L;}
,'Y9n':function(O9n,v9n){return O9n<v9n;}
,'u7H':function(z7H,I7H){return z7H>=I7H;}
,'i6N':function(j6N,K6N){return j6N===K6N;}
,'w34':function(Z34,t64){return Z34-t64;}
,'a6a':function(W6a,f6a){return W6a<f6a;}
,'A5n':function(L5n,h5n){return L5n<h5n;}
,'K7H':function(J7H,F7H){return J7H<=F7H;}
,'t0a':function(b0a,A0a){return b0a==A0a;}
,'G14':function(N14,D14){return N14!=D14;}
,'q34':function(i34,j34){return i34<j34;}
,'P87':function(Q87,C87){return Q87<C87;}
,'U9L':function(X9L,a9L){return X9L!=a9L;}
,'X1W':function(a1W,W1W){return a1W==W1W;}
,'f04':function(w04,Z04){return w04!=Z04;}
,'F8W':function(u8W,z8W){return u8W<z8W;}
,'Q4N':function(C4N,R4N){return C4N*R4N;}
,'o7L':function(E7L,T7L){return E7L*T7L;}
,'l9G':function(M9G,g9G){return M9G>g9G;}
,'Z1H':function(t5H,b5H){return t5H-b5H;}
,'Y0n':function(O0n,v0n){return O0n==v0n;}
,'h5y':function(r5y,S5y){return r5y==S5y;}
,'I1a':function(s1a,G1a){return s1a==G1a;}
,'u5G':function(z5G,I5G){return z5G>I5G;}
,'C7L':function(R7L,B7L){return R7L>B7L;}
,'J5':function(F5,u5){return F5<u5;}
,'X3N':function(a3N,W3N){return a3N==W3N;}
,'B5L':function(H5L,V5L){return H5L-V5L;}
,'e7':function(m7,x7){return m7<x7;}
,'T1y':function(Y1y,O1y){return Y1y<=O1y;}
,'j17':function(K17,J17){return K17==J17;}
,'S9n':function(P9n,Q9n){return P9n<Q9n;}
,'h6L':function(r6L,S6L){return r6L<S6L;}
,'X97':function(a97,W97){return a97==W97;}
,'T24':function(Y24,O24){return Y24/O24;}
,'M3N':function(g3N,y3N){return g3N===y3N;}
,'M84':function(g84,y84){return g84==y84;}
,'H04':function(V04,k04){return V04<k04;}
,'e9W':function(m9W,x9W){return m9W===x9W;}
,'J9H':function(F9H,u9H){return F9H<=u9H;}
,'l7G':function(M7G,g7G){return M7G<=g7G;}
,'g5L':function(y5L,d5L){return y5L in d5L;}
,'D5L':function(e5L,m5L){return e5L<m5L;}
,'Z9y':function(t7a,b7a){return t7a<b7a;}
,'A3n':function(L3n,h3n){return L3n<h3n;}
,'G67':function(N67,D67){return N67<D67;}
,'k6a':function(o6a,E6a){return o6a==E6a;}
,'B24':function(H24,V24){return H24!=V24;}
,'P4':function(Q4,C4){return Q4>C4;}
,'y0W':function(d0W,q0W){return d0W===q0W;}
,'T8L':function(Y8L,O8L){return Y8L==O8L;}
,'B2a':function(H2a,V2a){return H2a&V2a;}
,'F8N':function(u8N,z8N){return u8N<z8N;}
,'d8N':function(q8N,i8N){return q8N==i8N;}
,'J5a':function(F5a,u5a){return F5a<=u5a;}
,'R94':function(B94,H94,V94){return B94-H94+V94;}
,'G7L':function(N7L,D7L){return N7L===D7L;}
,'o1G':function(E1G,T1G){return E1G<T1G;}
,'n2':function(U2,X2){return U2/X2;}
,'X2W':function(a2W,W2W){return a2W===W2W;}
,'l27':function(M27,g27){return M27-g27;}
,'b2n':function(A2n,L2n){return A2n*L2n;}
,'r1':function(S1,P1){return S1*P1;}
,'Q1N':function(C1N,R1N){return C1N>=R1N;}
,'y57':function(d57,q57){return d57>q57;}
,'w6':function(Z6,b1){return Z6*b1;}
,'X5W':function(a5W,W5W){return a5W-W5W;}
,'x7n':function(c7n,p7n){return c7n!==p7n;}
,'J1n':function(F1n,u1n){return F1n==u1n;}
,'o6N':function(E6N,T6N){return E6N/T6N;}
,'p17':function(n17,U17){return n17-U17;}
,'k9':function(o9,E9){return o9<E9;}
,'v47':function(l47,M47){return l47==M47;}
,'s5L':function(G5L,N5L){return G5L==N5L;}
,'N0':function(D0,e0){return D0!=e0;}
,'L04':function(h04,r04){return h04==r04;}
,'g7H':function(y7H,d7H){return y7H==d7H;}
,'v4N':function(l4N,M4N){return l4N==M4N;}
,'U1L':function(X1L,a1L){return X1L>=a1L;}
,'f2n':function(w2n,Z2n){return w2n<Z2n;}
,'y5':function(d5,q5){return d5*q5;}
,'W4W':function(f4W,w4W){return f4W-w4W;}
,'i9L':function(j9L,K9L){return j9L<=K9L;}
,'Q3H':function(C3H,R3H){return C3H-R3H;}
,'s8':function(G8,N8){return G8==N8;}
,'T6a':function(Y6a,O6a){return Y6a&O6a;}
,'A6a':function(L6a,h6a){return L6a>=h6a;}
,'q5H':function(i5H,j5H){return i5H==j5H;}
,'o0N':function(E0N,T0N){return E0N>T0N;}
,'U9G':function(X9G,a9G){return X9G<a9G;}
,'i4G':function(j4G,K4G,J4G,F4G){return j4G-K4G+J4G+F4G;}
,'J97':function(F97,u97){return F97-u97;}
,'Q0y':function(C0y,R0y){return C0y==R0y;}
,'q54':function(i54,j54){return i54>j54;}
,'I84':function(s84,G84){return s84==G84;}
,'m3':function(x3,c3){return x3<=c3;}
,'n5n':function(U5n,X5n){return U5n>=X5n;}
,'R8n':function(B8n,H8n){return B8n-H8n;}
,'i7G':function(j7G,K7G){return j7G==K7G;}
,'m6n':function(x6n,c6n){return x6n==c6n;}
,'f5W':function(w5W,Z5W){return w5W==Z5W;}
,'H0n':function(V0n,k0n){return V0n==k0n;}
,'q7a':function(i7a,j7a){return i7a<j7a;}
,'V2G':function(k2G,o2G){return k2G>o2G;}
,'x3W':function(c3W,p3W){return c3W-p3W;}
,'D3W':function(e3W,m3W){return e3W!=m3W;}
,'Y3y':function(O3y,v3y){return O3y*v3y;}
,'g5G':function(y5G,d5G){return y5G==d5G;}
,'H1H':function(V1H,k1H){return V1H in k1H;}
,'C4L':function(R4L,B4L){return R4L==B4L;}
,'U4L':function(X4L,a4L){return X4L*a4L;}
,'o9W':function(E9W,T9W){return E9W===T9W;}
,'O9N':4,'w0':function(Z0,t4){return Z0==t4;}
,'o4a':function(E4a,T4a){return E4a/T4a;}
,'R2n':function(B2n,H2n){return B2n-H2n;}
,'Z0H':function(t4H,b4H){return t4H/b4H;}
,'H57':function(V57,k57){return V57>k57;}
,'G8y':function(N8y,D8y){return N8y>D8y;}
,'r5G':function(S5G,P5G){return S5G!==P5G;}
,'A1N':function(L1N,h1N){return L1N>=h1N;}
,'E5N':function(T5N,Y5N){return T5N>Y5N;}
,'J4n':function(F4n,u4n){return F4n==u4n;}
,'J2y':function(F2y,u2y){return F2y/u2y;}
,'y04':function(d04,q04){return d04-q04;}
,'y0N':function(d0N,q0N){return d0N<q0N;}
,'A7a':function(L7a,h7a){return L7a!=h7a;}
,'Y44':function(O44,v44){return O44<=v44;}
,'c1H':function(p1H,n1H){return p1H==n1H;}
,'S3a':function(P3a,Q3a){return P3a==Q3a;}
,'G9y':function(N9y,D9y){return N9y===D9y;}
,'x5L':function(c5L,p5L){return c5L-p5L;}
,'S97':function(P97,Q97){return P97==Q97;}
,'L4G':function(h4G,r4G){return h4G/r4G;}
,'E64':function(T64,Y64){return T64!=Y64;}
,'b7W':function(A7W,L7W){return A7W===L7W;}
,'Q9y':function(C9y,R9y){return C9y<R9y;}
,'U1G':function(X1G,a1G){return X1G<a1G;}
,'C07':function(R07,B07){return R07/B07;}
,'a74':function(W74,f74){return W74<f74;}
,'x1y':function(c1y,p1y){return c1y-p1y;}
,'q3H':function(i3H,j3H){return i3H<j3H;}
,'s3W':function(G3W,N3W){return G3W-N3W;}
,'h8H':function(r8H,S8H){return r8H==S8H;}
,'v4H':function(l4H,M4H,g4H){return l4H/M4H*g4H;}
,'J7L':function(F7L,u7L){return F7L==u7L;}
,'H8y':function(V8y,k8y){return V8y>k8y;}
,'w5H':function(Z5H,t2H){return Z5H-t2H;}
,'v7a':function(l7a,M7a){return l7a>=M7a;}
,'N6G':function(D6G,e6G){return D6G-e6G;}
,'o57':function(E57,T57){return E57-T57;}
,'f27':function(w27,Z27){return w27<Z27;}
,'D77':function(e77,m77){return e77==m77;}
,'Z6N':function(t1N,b1N){return t1N/b1N;}
,'t8y':function(b8y,A8y){return b8y<A8y;}
,'m64':function(x64,c64){return x64===c64;}
,'z0n':function(I0n,s0n){return I0n==s0n;}
,'l8y':function(M8y,g8y){return M8y<g8y;}
,'Z14':function(t54,b54){return t54==b54;}
,'z07':function(I07,s07){return I07!==s07;}
,'A3H':function(L3H,h3H){return L3H/h3H;}
,'A6y':function(L6y,h6y){return L6y==h6y;}
,'u77':function(z77,I77){return z77<I77;}
,'H4L':function(V4L,k4L){return V4L*k4L;}
,'G0N':function(N0N,D0N){return N0N>D0N;}
,'T4n':function(Y4n,O4n){return Y4n/O4n;}
,'X5y':function(a5y,W5y){return a5y/W5y;}
,'B9N':2,'r74':function(S74,P74){return S74<P74;}
,'s7H':function(G7H,N7H){return G7H<=N7H;}
,'H5a':function(V5a,k5a){return V5a-k5a;}
,'y17':function(d17,q17,i17){return d17-q17+i17;}
,'E3':function(T3,Y3){return T3>Y3;}
,'e4L':function(m4L,x4L){return m4L==x4L;}
,'y97':function(d97,q97){return d97<q97;}
,'r0':function(S0,P0,Q0){return S0*P0/Q0;}
,'f1':function(w1,Z1){return w1!=Z1;}
,'B8L':function(H8L,V8L){return H8L===V8L;}
,'a34':function(W34,f34){return W34-f34;}
,'j8n':function(K8n,J8n){return K8n==J8n;}
,'i44':function(j44,K44){return j44>=K44;}
,'X8W':function(a8W,W8W){return a8W>W8W;}
,'y2y':function(d2y,q2y){return d2y-q2y;}
,'W9y':function(f9y,w9y){return f9y<w9y;}
,'p6G':function(n6G,U6G){return n6G/U6G;}
,'l9L':function(M9L,g9L){return M9L!=g9L;}
,'b8N':function(A8N,L8N){return A8N<L8N;}
,'G4H':function(N4H,D4H){return N4H>=D4H;}
,'a7a':function(W7a,f7a){return W7a==f7a;}
,'Z7L':function(t8L,b8L){return t8L==b8L;}
,'k5L':function(o5L,E5L){return o5L<E5L;}
,'E0L':function(T0L,Y0L){return T0L*Y0L;}
,'z0W':function(I0W,s0W){return I0W===s0W;}
,'h37':function(r37,S37){return r37>=S37;}
,'a8':function(W8,f8){return W8===f8;}
,'o07':function(E07,T07){return E07>T07;}
,'k3G':function(o3G,E3G){return o3G<=E3G;}
,'q24':function(i24,j24){return i24*j24;}
,'a7n':function(W7n,f7n){return W7n>=f7n;}
,'s1N':function(G1N,N1N){return G1N<N1N;}
,'w5n':function(Z5n,t2n){return Z5n==t2n;}
,'l0H':function(M0H,g0H){return M0H==g0H;}
,'K54':function(J54,F54){return J54-F54;}
,'B1N':function(H1N,V1N){return H1N>=V1N;}
,'E8n':function(T8n,Y8n){return T8n==Y8n;}
,'N2G':function(D2G,e2G){return D2G-e2G;}
,'s54':function(G54,N54){return G54<N54;}
,'D1N':function(e1N,m1N){return e1N>=m1N;}
,'h94':function(r94,S94){return r94-S94;}
,'n0y':function(U0y,X0y){return U0y==X0y;}
,'l2W':function(M2W,g2W,y2W){return M2W*g2W/y2W;}
,'D6a':function(e6a,m6a){return e6a>=m6a;}
,'A3L':function(L3L,h3L){return L3L-h3L;}
,'B77':function(H77,V77){return H77-V77;}
,'H3a':function(V3a,k3a){return V3a===k3a;}
,'g6y':function(y6y,d6y){return y6y-d6y;}
,'v7H':function(l7H,M7H){return l7H<M7H;}
,'j9a':function(K9a,J9a){return K9a<=J9a;}
,'P8H':function(Q8H,C8H){return Q8H!==C8H;}
,'N6L':function(D6L,e6L){return D6L==e6L;}
,'b0L':function(A0L,L0L){return A0L>L0L;}
,'t44':function(b44,A44){return b44<A44;}
,'z1L':function(I1L,s1L){return I1L>=s1L;}
,'K1N':function(J1N,F1N){return J1N<F1N;}
,'j4y':function(K4y,J4y){return K4y<=J4y;}
,'z0H':function(I0H,s0H){return I0H==s0H;}
,'W1G':function(f1G,w1G){return f1G-w1G;}
,'V8a':function(k8a,o8a){return k8a<o8a;}
,'v1y':function(l1y,M1y){return l1y-M1y;}
,'T3L':function(Y3L,O3L){return Y3L-O3L;}
,'h8W':function(r8W,S8W){return r8W<S8W;}
,'A2':function(L2,h2){return L2>h2;}
,'J9W':function(F9W,u9W){return F9W==u9W;}
,'G9L':function(N9L,D9L){return N9L-D9L;}
,'h4y':function(r4y,S4y){return r4y==S4y;}
,'T7n':function(Y7n,O7n){return Y7n<O7n;}
,'P8n':function(Q8n,C8n){return Q8n!==C8n;}
,'Z0N':function(t4N,b4N){return t4N==b4N;}
,'L6N':function(h6N,r6N){return h6N/r6N;}
,'y7L':function(d7L,q7L){return d7L/q7L;}
,'J3a':function(F3a,u3a){return F3a>u3a;}
,'V7y':function(k7y,o7y){return k7y/o7y;}
,'z8y':function(I8y,s8y){return I8y<s8y;}
,'M6H':function(g6H,y6H){return g6H<y6H;}
,'v8G':function(l8G,M8G){return l8G-M8G;}
,'e5':function(m5,x5){return m5!=x5;}
,'M9a':function(g9a,y9a){return g9a-y9a;}
,'M2G':function(g2G,y2G){return g2G*y2G;}
,'w0y':function(Z0y,t4y){return Z0y==t4y;}
,'v1N':function(l1N,M1N){return l1N<=M1N;}
,'u3n':function(z3n,I3n){return z3n==I3n;}
,'s8L':function(G8L,N8L){return G8L/N8L;}
,'p97':function(n97,U97){return n97==U97;}
,'D47':function(e47,m47){return e47>m47;}
,'r8L':function(S8L,P8L){return S8L-P8L;}
,'J0a':function(F0a,u0a){return F0a<u0a;}
,'W44':function(f44,w44){return f44===w44;}
,'X3':function(a3,W3){return a3<=W3;}
,'e5a':function(m5a,x5a){return m5a==x5a;}
,'O0L':function(v0L,l0L){return v0L*l0L;}
,'k3n':function(o3n,E3n){return o3n<E3n;}
,'Q17':function(C17,R17){return C17!=R17;}
,'L2y':function(h2y,r2y){return h2y-r2y;}
,'U9W':function(X9W,a9W){return X9W<a9W;}
,'I8N':function(s8N,G8N){return s8N-G8N;}
,'b24':function(A24,L24,h24){return A24-L24-h24;}
,'l04':function(M04,g04){return M04*g04;}
,'U7':function(X7,a7){return X7==a7;}
,'z5a':function(I5a,s5a){return I5a*s5a;}
,'f4y':function(w4y,Z4y){return w4y==Z4y;}
,'d4y':function(q4y,i4y){return q4y!=i4y;}
,'I6L':function(s6L,G6L){return s6L==G6L;}
,'q9':function(i9,j9){return i9<j9;}
,'X17':function(a17,W17){return a17>W17;}
,'g8L':function(y8L,d8L){return y8L==d8L;}
,'N5y':function(D5y,e5y){return D5y/e5y;}
,'M87':function(g87,y87){return g87>=y87;}
,'E2L':function(T2L,Y2L){return T2L!==Y2L;}
,'H1G':function(V1G,k1G){return V1G*k1G;}
,'a24':function(W24,f24){return W24!=f24;}
,'e4G':function(m4G,x4G){return m4G==x4G;}
,'M2n':function(g2n,y2n){return g2n>y2n;}
,'V2L':function(k2L,o2L){return k2L!==o2L;}
,'g1y':function(y1y,d1y){return y1y/d1y;}
,'L9G':function(h9G,r9G){return h9G<=r9G;}
,'b2L':function(A2L,L2L){return A2L==L2L;}
,'O2H':function(v2H,l2H){return v2H==l2H;}
,'h4':function(r4,S4){return r4!=S4;}
,'a0':function(W0,f0){return W0<f0;}
,'K4':function(J4,F4){return J4/F4;}
,'T74':function(Y74,O74){return Y74/O74;}
,'T8G':function(Y8G,O8G){return Y8G<=O8G;}
,'o4G':function(E4G,T4G,Y4G){return E4G-T4G+Y4G;}
,'X4a':function(a4a,W4a){return a4a*W4a;}
,'c9G':function(p9G,n9G){return p9G/n9G;}
,'g94':function(y94,d94,q94){return y94-d94+q94;}
,'d3N':function(q3N,i3N){return q3N/i3N;}
,'u34':function(z34,I34){return z34>I34;}
,'R6G':function(B6G,H6G){return B6G-H6G;}
,'n3G':function(U3G,X3G){return U3G*X3G;}
,'P8N':function(Q8N,C8N){return Q8N<C8N;}
,'w5G':function(Z5G,t2G){return Z5G==t2G;}
,'G3y':function(N3y,D3y){return N3y==D3y;}
,'s6y':function(G6y,N6y){return G6y-N6y;}
,'V2H':function(k2H,o2H){return k2H==o2H;}
,'T5L':function(Y5L,O5L){return Y5L>O5L;}
,'U14':function(X14,a14){return X14<a14;}
,'H27':function(V27,k27){return V27<k27;}
,'C2y':function(R2y,B2y){return R2y!==B2y;}
,'S67':function(P67,Q67){return P67|Q67;}
,'Q24':function(C24,R24){return C24-R24;}
,'c9H':function(p9H,n9H){return p9H<n9H;}
,'X37':function(a37,W37){return a37==W37;}
,'S5a':function(P5a,Q5a){return P5a*Q5a;}
,'B5H':function(H5H,V5H){return H5H<V5H;}
,'w7N':function(Z7N,t8N){return Z7N!=t8N;}
,'z3y':function(I3y,s3y){return I3y==s3y;}
,'i97':function(j97,K97){return j97/K97;}
,'p8H':function(n8H,U8H){return n8H-U8H;}
,'C4W':function(R4W,B4W){return R4W*B4W;}
,'A1':function(L1,h1){return L1-h1;}
,'V6H':function(k6H,o6H){return k6H/o6H;}
,'K77':function(J77,F77){return J77==F77;}
,'d8a':function(q8a,i8a){return q8a*i8a;}
,'p0L':function(n0L,U0L){return n0L>U0L;}
,'s5H':function(G5H,N5H){return G5H<N5H;}
,'i07':function(j07,K07){return j07*K07;}
,'R0L':function(B0L,H0L){return B0L<H0L;}
,'i27':function(j27,K27){return j27*K27;}
,'K9':function(J9,F9){return J9==F9;}
,'u24':function(z24,I24){return z24/I24;}
,'F2L':function(u2L,z2L){return u2L*z2L;}
,'N1a':function(D1a,e1a){return D1a-e1a;}
,'c3y':function(p3y,n3y){return p3y==n3y;}
,'P8a':function(Q8a,C8a){return Q8a<C8a;}
,'f8n':function(w8n,Z8n){return w8n==Z8n;}
,'H9H':function(V9H,k9H){return V9H==k9H;}
,'L14':function(h14,r14){return h14*r14;}
,'W1L':function(f1L,w1L){return f1L<=w1L;}
,'y1H':function(d1H,q1H){return d1H*q1H;}
,'m2L':function(x2L,c2L){return x2L-c2L;}
,'Y1G':function(O1G,v1G){return O1G<v1G;}
,'J3y':function(F3y,u3y){return F3y==u3y;}
,'d0G':function(q0G,i0G){return q0G==i0G;}
,'E8W':function(T8W,Y8W){return T8W/Y8W;}
,'e0n':function(m0n,x0n){return m0n/x0n;}
,'L9H':function(h9H,r9H){return h9H/r9H;}
,'z9W':function(I9W,s9W){return I9W<s9W;}
,'c4H':function(p4H,n4H){return p4H<=n4H;}
,'M1W':function(g1W,y1W){return g1W!=y1W;}
,'m1W':function(x1W,c1W){return x1W-c1W;}
,'i4n':function(j4n,K4n){return j4n<K4n;}
,'g7a':function(y7a,d7a){return y7a-d7a;}
,'a4':function(W4,f4){return W4/f4;}
,'t6':function(b6,A6){return b6==A6;}
,'M8n':function(g8n,y8n){return g8n<y8n;}
,'I2G':function(s2G,G2G){return s2G<=G2G;}
,'C3y':function(R3y,B3y){return R3y*B3y;}
,'S6N':function(P6N,Q6N){return P6N<Q6N;}
,'D5G':function(e5G,m5G){return e5G*m5G;}
,'V8n':function(k8n,o8n){return k8n-o8n;}
,'c4n':function(p4n,n4n){return p4n==n4n;}
,'H6':function(V6,k6){return V6==k6;}
,'O0G':function(v0G,l0G){return v0G-l0G;}
,'F2H':function(u2H,z2H){return u2H*z2H;}
,'a7H':function(W7H,f7H){return W7H<=f7H;}
,'F5W':function(u5W,z5W){return u5W-z5W;}
,'s3H':function(G3H,N3H){return G3H>=N3H;}
,'V9a':function(k9a,o9a){return k9a<=o9a;}
,'V4y':function(k4y,o4y){return k4y==o4y;}
,'k8G':function(o8G,E8G){return o8G<=E8G;}
,'z7':function(I7,s7){return I7>=s7;}
,'O3N':function(v3N,l3N){return v3N!=l3N;}
,'R6H':function(B6H,H6H){return B6H<=H6H;}
,'l3y':function(M3y,g3y){return M3y==g3y;}
,'i1n':function(j1n,K1n){return j1n>K1n;}
,'N8n':function(D8n,e8n){return D8n==e8n;}
,'g3n':function(y3n,d3n){return y3n<d3n;}
,'u4N':function(z4N,I4N){return z4N-I4N;}
,'H0a':function(V0a,k0a){return V0a<k0a;}
,'y0n':function(d0n,q0n){return d0n-q0n;}
,'L9n':function(h9n,r9n){return h9n<r9n;}
,'J9y':function(F9y,u9y){return F9y==u9y;}
,'x2a':function(c2a,p2a){return c2a*p2a;}
,'s3n':function(G3n,N3n){return G3n<N3n;}
,'N5W':function(D5W,e5W){return D5W==e5W;}
,'u4':function(z4,I4){return z4==I4;}
,'f17':function(w17,Z17){return w17-Z17;}
,'e14':function(m14,x14){return m14!=x14;}
,'Q74':function(C74,R74){return C74>R74;}
,'f6L':function(w6L,Z6L){return w6L>Z6L;}
,'f87':function(w87,Z87){return w87-Z87;}
,'T34':function(Y34,O34){return Y34==O34;}
,'I6H':function(s6H,G6H){return s6H==G6H;}
,'h6W':function(r6W,S6W){return r6W<S6W;}
,'I7W':function(s7W,G7W){return s7W<G7W;}
,'y1G':function(d1G,q1G){return d1G>q1G;}
,'t7':function(b7,A7){return b7==A7;}
,'E5W':function(T5W,Y5W){return T5W==Y5W;}
,'u8L':function(z8L,I8L){return z8L-I8L;}
,'B3L':function(H3L,V3L){return H3L-V3L;}
,'e9L':function(m9L,x9L){return m9L===x9L;}
,'t5W':function(b5W,A5W){return b5W-A5W;}
,'G9G':function(N9G,D9G){return N9G*D9G;}
,'h8n':function(r8n,S8n){return r8n==S8n;}
,'L1H':function(h1H,r1H){return h1H>=r1H;}
,'M5y':function(g5y,y5y){return g5y/y5y;}
,'S0n':function(P0n,Q0n){return P0n/Q0n;}
,'o4W':function(E4W,T4W){return E4W-T4W;}
,'g1':function(q1,i1){return q1!=i1;}
,'b8n':function(A8n,L8n){return A8n>=L8n;}
,'J1G':function(F1G,u1G){return F1G<u1G;}
,'c9y':function(p9y,n9y){return p9y!==n9y;}
,'p37':function(n37,U37){return n37==U37;}
,'Q77':function(C77,R77){return C77>=R77;}
,'R5y':function(B5y,H5y){return B5y/H5y;}
,'t7L':function(b7L,A7L){return b7L/A7L;}
,'x8L':function(c8L,p8L){return c8L===p8L;}
,'q3L':function(i3L,j3L){return i3L==j3L;}
,'S7G':function(P7G,Q7G){return P7G<Q7G;}
,'N1W':function(D1W,e1W){return D1W==e1W;}
,'U4n':function(X4n,a4n){return X4n==a4n;}
,'p4y':function(n4y,U4y){return n4y==U4y;}
,'j6G':function(K6G,J6G){return K6G<J6G;}
,'F4y':function(u4y,z4y){return u4y*z4y;}
,'g5n':function(y5n,d5n){return y5n==d5n;}
,'y9H':function(d9H,q9H){return d9H>q9H;}
,'A0y':function(L0y,h0y){return L0y<h0y;}
,'g9':function(y9,d9){return y9==d9;}
,'o67':function(E67,T67){return E67==T67;}
,'k77':function(o77,E77){return o77-E77;}
,'P2L':function(Q2L,C2L){return Q2L!==C2L;}
,'u8G':function(z8G,I8G){return z8G*I8G;}
,'V0L':function(k0L,o0L){return k0L*o0L;}
,'C8y':function(R8y,B8y){return R8y*B8y;}
,'F1':function(u1,z1){return u1!==z1;}
,'W6N':function(f6N,w6N){return f6N>=w6N;}
,'g6a':function(y6a,d6a){return y6a&d6a;}
,'v5L':function(l5L,M5L){return l5L>M5L;}
,'o9G':function(E9G,T9G){return E9G*T9G;}
,'w3L':function(Z3L,t6L){return Z3L>t6L;}
,'I87':function(s87,G87){return s87-G87;}
,'a7W':function(W7W,f7W){return W7W*f7W;}
,'e1n':function(m1n,x1n){return m1n===x1n;}
,'c7G':function(p7G,n7G){return p7G>=n7G;}
,'I2n':function(s2n,G2n){return s2n>G2n;}
,'T0y':function(Y0y,O0y){return Y0y<O0y;}
,'J4H':function(F4H,u4H){return F4H/u4H;}
,'v8L':function(l8L,M8L){return l8L-M8L;}
,'N9a':function(D9a,e9a){return D9a/e9a;}
,'k17':function(o17,E17){return o17*E17;}
,'u2a':function(z2a,I2a){return z2a!=I2a;}
,'N1':function(D1,e1){return D1*e1;}
,'e9G':function(m9G,x9G){return m9G*x9G;}
,'c1L':function(p1L,n1L){return p1L<n1L;}
,'o97':function(E97,T97){return E97*T97;}
,'k1':function(o1,E1){return o1<E1;}
,'Z0a':function(t4a,b4a){return t4a<b4a;}
,'r4N':function(S4N,P4N){return S4N==P4N;}
,'O4G':function(v4G,l4G){return v4G-l4G;}
,'V64':function(k64,o64){return k64-o64;}
,'a3n':function(W3n,f3n){return W3n>f3n;}
,'s7a':function(G7a,N7a){return G7a>N7a;}
,'X0L':function(a0L,W0L){return a0L<W0L;}
,'e8y':function(m8y,x8y){return m8y<x8y;}
,'p8n':function(n8n,U8n){return n8n==U8n;}
,'e3y':function(m3y,x3y){return m3y-x3y;}
,'y1n':function(d1n,q1n){return d1n<q1n;}
,'b5y':function(A5y,L5y){return A5y/L5y;}
,'Q3n':function(C3n,R3n){return C3n<R3n;}
,'L9L':function(h9L,r9L){return h9L!=r9L;}
,'v3L':function(l3L,M3L){return l3L==M3L;}
,'i1L':function(j1L,K1L){return j1L>K1L;}
,'U8y':function(X8y,a8y){return X8y<a8y;}
,'i5a':function(j5a,K5a){return j5a>=K5a;}
,'q3W':function(i3W,j3W){return i3W>j3W;}
,'w4N':function(Z4N,t3N){return Z4N<=t3N;}
,'R7W':function(B7W,H7W){return B7W>H7W;}
,'A1y':function(L1y,h1y){return L1y===h1y;}
,'W9G':function(f9G,w9G){return f9G<w9G;}
,'C0a':function(R0a,B0a){return R0a===B0a;}
,'q3G':function(i3G,j3G){return i3G>=j3G;}
,'w3G':function(Z3G,t6G){return Z3G*t6G;}
,'G7':function(N7,D7){return N7<D7;}
,'I5y':function(s5y,G5y){return s5y<G5y;}
,'S0H':function(P0H,Q0H){return P0H<Q0H;}
,'u5n':function(z5n,I5n){return z5n==I5n;}
,'m04':function(x04,c04){return x04-c04;}
,'I8n':function(s8n,G8n){return s8n==G8n;}
,'v74':function(l74,M74){return l74<M74;}
,'B4a':function(H4a,V4a,k4a){return H4a*V4a/k4a;}
,'v4':function(l4,M4){return l4/M4;}
,'Q7H':function(C7H,R7H){return C7H>R7H;}
,'m4y':function(x4y,c4y){return x4y>c4y;}
,'z4W':function(I4W,s4W){return I4W===s4W;}
,'o0a':function(E0a,T0a){return E0a==T0a;}
,'D5n':function(e5n,m5n){return e5n>=m5n;}
,'h2L':function(r2L,S2L){return r2L==S2L;}
,'B54':function(H54,V54){return H54!==V54;}
,'t9G':function(b9G,A9G){return b9G<=A9G;}
,'V4':function(k4,o4){return k4===o4;}
,'l14':function(M14,g14){return M14==g14;}
,'X1':function(a1,W1){return a1*W1;}
,'G1n':function(N1n,D1n){return N1n!==D1n;}
,'h87':function(r87,S87){return r87/S87;}
,'o8y':function(E8y,T8y){return E8y*T8y;}
,'N7y':function(D7y,e7y){return D7y-e7y;}
,'a2':function(W2,f2){return W2/f2;}
,'B7N':function(H7N,V7N){return H7N/V7N;}
,'Z9n':function(t7H,b7H){return t7H-b7H;}
,'m6':function(x6,c6,p6){return x6*c6*p6;}
,'C9H':function(R9H,B9H){return R9H==B9H;}
,'c2y':function(p2y,n2y){return p2y===n2y;}
,'X94':function(a94,W94){return a94==W94;}
,'I4y':function(s4y,G4y){return s4y==G4y;}
,'J7G':function(F7G,u7G){return F7G!==u7G;}
,'H0N':function(V0N,k0N){return V0N==k0N;}
,'b4':function(A4,L4){return A4==L4;}
,'S0a':function(P0a,Q0a){return P0a<Q0a;}
,'O6G':function(v6G,l6G){return v6G<l6G;}
,'C5':function(R5,B5){return R5!==B5;}
,'a5L':function(W5L,f5L){return W5L<f5L;}
,'J07':function(F07,u07){return F07 in u07;}
,'D8L':function(e8L,m8L){return e8L===m8L;}
,'q0y':function(i0y,j0y){return i0y==j0y;}
,'D5H':function(e5H,m5H){return e5H===m5H;}
,'Y5':function(O5,v5){return O5*v5;}
,'a8L':function(W8L,f8L){return W8L<f8L;}
}
;(function(){var Y8Y=M2t.P3m.Q3m("ce")?"prices":"function",i9N=M2t.P3m.Q3m("82a")?"displayAll":"undefined";function _stxKernel_js(_stxThirdParty,_exports){var B8m=M2t.P3m.Q3m("5734")?"createDataSegment":"grabbingPanel",A2Y=M2t.P3m.Q3m("cd6e")?"dataSet":"preAdjustScroll",B0Y=M2t.P3m.Q3m("81")?"numeric":"drawCurrentHR",Z3Y=M2t.P3m.Q3m("d72")?"pan":0.3,Z0Y=M2t.P3m.Q3m("347")?"textBaseline":"zoom",W7Y=M2t.P3m.Q3m("b21")?"repositioner":"center",R9Y="right",X2Y=M2t.P3m.Q3m("23e")?"middle":"querySelectorAll",M9N="top",S8m=M2t.P3m.Q3m("13")?"baselineHandle":20,G8m="bottom",B4Y="object",U3Y=M2t.P3m.Q3m("ed73")?"stx_watermark":"solo",a0m="mouse",c0Y=M2t.P3m.Q3m("e1e")?"gap":"calculateRangeBars",s4Y="resize",i7m="stx-show",M1Y="el",X2N="an",L4Y=M2t.P3m.Q3m("a7c")?"ct":"quoteDriver",u9Y=M2t.P3m.Q3m("3b6a")?"Low":"0px",N7m=30,J0m="it",e9N="layout",I7Y=M2t.P3m.Q3m("5e")?"div":"grabStartZoom",X3Y=M2t.P3m.Q3m("7131")?"coloredShadowUp":"touchend",Z8Y="touchmove",B9Y="nt",S3Y="mousedown",I5Y="2",E3Y="ab",k4Y="chart",L9Y="k",g1Y=((0x10D,0x253)>=(97,88.)?(149.8E1,"X"):(5.,0x74)),V1Y="deleteHighlighted",U2N="Q",r1Y="ta",j7Y=(111.>=(0x250,148)?(0x169,33):(131.,0x177)<=(1.339E3,0x1A7)?(0x13,"N"):(131,1.428E3)),Y8m="#FFFFFF",a6Y="#000000",V2Y="dotted",x4m="w",J2Y="x_",G0Y="ay",e7m=32,o4Y="ot",Q8Y="us",H0Y="calculate",z2N="overlay",q0Y="underlay",b5Y="line",u8m="C",J7Y="ig",J4Y="st",c4m=((0x56,49)<=52.40E1?(112.30E1,250):(0x1FC,67.)),S0m="mouseup",C4Y="stx_crosshair_drawing",F0Y="stx_crosshair",o7Y="segment",t7m=")",I0Y=" (",C9Y="%",D0m=((0xC0,0xEE)>=106?(0x78,10000):90.4E1<=(17,76)?(3.48E2,8.6E1):(140,0x10E)),n0m=1000,u9N=0.01,S4m=100,L6Y=0.1,a3Y="measureUnlit",t0m="mMeasure",p4Y="inline-block",V0m=50,R4m="z",v0m="ne",X0Y="mo",m3Y="mousemove",K8m="px",A6Y="auto",w8Y="block",t4m="none",D1Y="",d4m=":",S2Y="0",m9Y="no",H3Y="ow",f2Y="stx_candle_shadow",p9N="stx_candle_down",Z2N="stx_candle_up",d1Y="Low",E7Y="High",m8Y="baseline_delta",p6Y="Close",q4Y="der",I9Y="lo",k6Y="ed",V7m="plotYAxisGrid",l8m=10,O7Y="stx_yaxis",x7m="left",w3Y=0.5,f1Y="le",I8Y="stx_grid_border",h3m="border",m0Y="fill",m1Y="text",V7Y="id",J4m="x",y8Y="stroke",r8m="grid",p8Y="ya",D3Y="_",n8m="tx",m9N=(0x180>(36,75.)?(0x1B1,"S"):117<(148.,115.)?(10.64E2,0x21A):(86,92)),E0m="rt",y2Y="ng",u7Y="at",l0Y="D",L1Y="on",j3Y="ut",n4m="in",H7Y=(0x66<=(13.60E1,129.6E1)?(0x1A1,"M"):(5.4E2,0xEB)>(15,0xEE)?(0xEC,0x136):(8.290E2,124.)),G0m="nd",E9Y="ha",s1Y=".",A8Y=(48.>(51,0x199)?(128.,"o"):(1.3780E3,9.06E2)<128.?(0x1D0,"$$"):88.2E1>(36.80E1,0xBC)?(0x5F,"P"):(0x14F,0x108)),c7m=". ",G5Y="p",c1Y="he",r5Y="te",v2Y="ea",W9Y=((48.7E1,0x1F1)>61.?(147.5E1,"g"):63.40E1<=(0x63,0x24D)?(0x217,32):0x22C<=(0x7E,0x16D)?(0xAF,6.72E2):(0x153,72.)),A7Y="ar",f8m=": ",O2Y="o",e0m="rr",r0m="A",Q4Y="en",N2Y="m",v4m="y",A3Y="er",F2Y="art",X1Y="u",a5Y=((37,61.)>(75,0x154)?118.:(0x3E,76.10E1)>=(68,0x5C)?(0x46,"q"):(127.30E1,24.)),R2Y="n",m5Y="li",q3Y="lin",z9N="month",l6Y="week",e8Y="day",h0m=60,l9N=9,k9Y=60000,a2Y=1500,u8Y="tick",O9Y="minute",c3Y="ck",h2Y="ti",T9Y=((0x24A,5.4E2)>48?(35,"h"):0x91>(9.620E2,0x1AF)?0x153:(0x1DE,0x2E)>=0x10A?(84,0xB8):(97.,115)),z8Y="vector",f7Y="as",q2Y="l",I4Y="or",D9Y="f",n4Y="e",p1Y=(0x1E9<=(38.5E1,13.96E2)?(0x154,"t"):(55.30E1,0x23F)),g5Y="s",M4Y="ss",U4Y="c",g4Y="a",H4Y="b",L3Y=" ",E1Y="transparent",B5Y="r",S3m="v",K9Y="i",F4Y="d",Y5Y="-",r9Y=true,y0m=false,y1Y="#zoomOut",U2Y="#",y4Y='lay',J5Y='isp',Z4Y='nd',l2Y='line',j7m='se',m0m='lo',S8Y='ane',B7m='dit',w7Y='wn',D4m='ocus',d0Y='nel',c8Y='el',Z9N='it',x1Y='anel',u2Y='ass',F8Y='> ',Q1Y='dl',r4m='co',D4Y='lass',C2Y='one',s7m='f',z2Y='pl',h4Y='om',I9N='p_tod',Y0m='tx_jum',Z7Y='In',T5Y='><',G4m='ut',U9N='oom',q9Y='mOu',V4Y='z',L0Y='hart',V8m=';"><',e4m='2px',Q9N='2',O4Y='tom',z3Y='_co',a8Y='art',k1Y='tx_',j9N='_y',D6Y='shai',p4m=';"></',t9N='is',g6Y='tyle',e3Y='r_',U4m='h',z5Y='ro',H0m='_c',T0m='ai',s4m='rossh',j0Y='iv',L8m='>)</',K4Y='te',f0m='k',x2N='lic',k5Y='ht',l1Y='ig',I3Y='>(</',n0Y='structi',i2Y='teIn',m4Y='D',F1Y='u',q6Y='></',p9Y=';</',Y6Y='bsp',i6Y='">&',A8m='sh',a2N='ss',W0Y='la',N1Y='"><',C0Y='ay',x5Y='spl',Y7m='le',S4Y='hC',p7m='yTra',Y9Y='> <',t2Y='"></',t6Y=(124<(20.,8.78E2)?(123.,'r'):(5.7E2,39.30E1)),s7Y='erio',s9N='kyI',P9N='tic',y9N='"> <',O0Y='cky',T3Y='ti',o5Y='S',W6Y='pa',W8m='ancel',E8m='0p',z7Y='1',J8Y=':',C0m='eft',q7Y='in',u4m='g',r7Y='ar',O0m='m',W7m='; ',U0Y='on',c9Y='pla',n5Y='ty',s8Y='anc',R7Y='io',G7Y='at',y7m='x_',p3Y='tn',v7Y='as',C4m='l',k2Y='pan',b3Y='>',Z4m='</',W4m='ve',E2Y=';">',Y4Y='ne',x0m=((37,0x249)<(4,0x6F)?1.434E3:119.<=(105.,134.)?(4.18E2,'o'):0x2A>=(42.,29.0E1)?(100,'u'):(0x1E1,66.5E1)),F9Y=': ',W4Y='y',l4Y='spla',o4m=((3.,0x61)>(0x28,110.0E1)?(101.,1):60.6E1>=(42.90E1,0x21)?(83.,'i'):(66.,0)>=(114,0x1D3)?1:(13.55E2,1.037E3)),M8m='d',I8m='tyl',S7Y='" ',o7m='e',b1Y='v',c8m='sa',F6Y='tion_',y0Y='ota',w2N='an',L0m='_',u5Y='tx',U8m=(117.>(7.51E2,2.30E1)?(65.,'b'):(128.70E1,117.0E1)),y7Y='-',G4Y=((0x20B,0xE8)<=(28,0x23F)?(1.2550E3,'x'):(23.3E1,39)),q1Y='t',h7m='="',s6Y='las',P8m='c',K7m=' ',z0m='n',z8m='a',J6Y='p',O6Y='s',Q0Y='<',t9Y=(1.299E3<=(149.8E1,123.)?(42.,0x11B):(0x19C,0x4)<0xA2?(117,null):(9.3E1,0x80)>=135.?34.:(147.5E1,35)),G=function(N){STX.Comparison.mouseHasMoved=N;}
,u=function(z){STXChart.CANDLEEVEN=z;}
,J=function(F){STXChart.CANDLEDOWN=F;}
,M=function(K){STXChart.CANDLEUP=K;}
,Y=function(O){STXChart.CLOSEEVEN=O;}
,E=function(T){STXChart.CLOSEDOWN=T;}
,H=function(V){STXChart.CLOSEUP=V;}
,R=function(B){STXChart.NONE=B;}
,Q=function(C){STX.camelCaseRegExp=C;}
,plotSpline=_stxThirdParty.plotSpline,timezoneJS=_stxThirdParty.timezoneJS,STX=_exports.STX,STXChart=_exports.STXChart,$$=_exports.$$,$$$=_exports.$$$;STXChart.prototype.plugins={}
;if(STX.isSurface){var S=function(P){STX.gesturePointerId=P;}
,A=function(L){STX.gesture.target=L.body;}
;STX.gesture=new MSGesture();A(document);S(t9Y);}
STXChart.htmlControls={"annotationSave":(Q0Y+O6Y+J6Y+z8m+z0m+K7m+P8m+s6Y+O6Y+h7m+O6Y+q1Y+G4Y+y7Y+U8m+q1Y+z0m+K7m+O6Y+u5Y+L0m+w2N+z0m+y0Y+F6Y+c8m+b1Y+o7m+S7Y+O6Y+I8m+o7m+h7m+M8m+o4m+l4Y+W4Y+F9Y+z0m+x0m+Y4Y+E2Y+O6Y+z8m+W4m+Z4m+O6Y+J6Y+z8m+z0m+b3Y),"annotationCancel":(Q0Y+O6Y+k2Y+K7m+P8m+C4m+v7Y+O6Y+h7m+O6Y+q1Y+G4Y+y7Y+U8m+p3Y+K7m+O6Y+q1Y+y7m+w2N+z0m+x0m+q1Y+G7Y+R7Y+z0m+L0m+P8m+s8Y+o7m+C4m+S7Y+O6Y+n5Y+C4m+o7m+h7m+M8m+o4m+O6Y+c9Y+W4Y+F9Y+z0m+U0Y+o7m+W7m+O0m+r7Y+u4m+q7Y+y7Y+C4m+C0m+J8Y+z7Y+E8m+G4Y+E2Y+P8m+W8m+Z4m+O6Y+W6Y+z0m+b3Y),"mSticky":(Q0Y+M8m+o4m+b1Y+K7m+o4m+M8m+h7m+O0m+o5Y+T3Y+O0Y+y9N+O6Y+k2Y+K7m+o4m+M8m+h7m+O0m+o5Y+P9N+s9N+z0m+q1Y+s7Y+t6Y+t2Y+O6Y+W6Y+z0m+Y9Y+O6Y+J6Y+w2N+K7m+o4m+M8m+h7m+x0m+b1Y+o7m+t6Y+C4m+z8m+p7m+O6Y+S4Y+w2N+S7Y+P8m+C4m+z8m+O6Y+O6Y+h7m+O6Y+u5Y+y7Y+U8m+q1Y+z0m+S7Y+O6Y+n5Y+Y7m+h7m+M8m+o4m+x5Y+C0Y+J8Y+z0m+x0m+z0m+o7m+N1Y+O6Y+W6Y+z0m+K7m+P8m+W0Y+a2N+h7m+O6Y+u5Y+y7Y+o4m+P8m+x0m+y7Y+q1Y+t6Y+z8m+A8m+i6Y+z0m+Y6Y+p9Y+O6Y+k2Y+q6Y+O6Y+k2Y+Y9Y+O6Y+W6Y+z0m+K7m+o4m+M8m+h7m+O0m+x0m+F1Y+O6Y+o7m+m4Y+o7m+Y7m+i2Y+n0Y+x0m+z0m+O6Y+N1Y+O6Y+J6Y+z8m+z0m+I3Y+O6Y+W6Y+z0m+b3Y+t6Y+l1Y+k5Y+y7Y+P8m+x2N+f0m+K7m+q1Y+x0m+K7m+M8m+o7m+Y7m+K4Y+Q0Y+O6Y+k2Y+L8m+O6Y+J6Y+w2N+q6Y+O6Y+J6Y+w2N+q6Y+M8m+o4m+b1Y+b3Y),"crossX":(Q0Y+M8m+j0Y+K7m+P8m+C4m+z8m+O6Y+O6Y+h7m+O6Y+q1Y+G4Y+L0m+P8m+s4m+T0m+t6Y+K7m+O6Y+u5Y+H0m+z5Y+a2N+U4m+z8m+o4m+e3Y+G4Y+S7Y+O6Y+g6Y+h7m+M8m+t9N+J6Y+C4m+C0Y+F9Y+z0m+x0m+z0m+o7m+p4m+M8m+o4m+b1Y+b3Y),"crossY":(Q0Y+M8m+j0Y+K7m+P8m+C4m+v7Y+O6Y+h7m+O6Y+u5Y+L0m+P8m+t6Y+x0m+O6Y+A8m+z8m+o4m+t6Y+K7m+O6Y+u5Y+H0m+t6Y+x0m+O6Y+D6Y+t6Y+j9N+S7Y+O6Y+I8m+o7m+h7m+M8m+o4m+l4Y+W4Y+F9Y+z0m+x0m+Y4Y+p4m+M8m+j0Y+b3Y),"chartControls":(Q0Y+M8m+j0Y+K7m+P8m+s6Y+O6Y+h7m+O6Y+k1Y+P8m+U4m+a8Y+z3Y+z0m+q1Y+z5Y+C4m+O6Y+S7Y+O6Y+q1Y+W4Y+C4m+o7m+h7m+M8m+t9N+J6Y+C4m+C0Y+F9Y+z0m+x0m+z0m+o7m+W7m+U8m+x0m+q1Y+O4Y+F9Y+Q9N+e4m+V8m+M8m+o4m+b1Y+K7m+o4m+M8m+h7m+P8m+L0Y+o5Y+o4m+V4Y+o7m+N1Y+O6Y+J6Y+w2N+K7m+o4m+M8m+h7m+V4Y+x0m+x0m+q9Y+q1Y+S7Y+P8m+C4m+v7Y+O6Y+h7m+O6Y+q1Y+G4Y+y7Y+V4Y+U9N+y7Y+x0m+G4m+t2Y+O6Y+J6Y+w2N+T5Y+O6Y+J6Y+w2N+K7m+o4m+M8m+h7m+V4Y+U9N+Z7Y+S7Y+P8m+W0Y+O6Y+O6Y+h7m+O6Y+q1Y+G4Y+y7Y+V4Y+x0m+x0m+O0m+y7Y+o4m+z0m+t2Y+O6Y+k2Y+q6Y+M8m+j0Y+q6Y+M8m+o4m+b1Y+b3Y),"home":(Q0Y+M8m+j0Y+K7m+o4m+M8m+h7m+U4m+x0m+O0m+o7m+S7Y+P8m+W0Y+a2N+h7m+O6Y+Y0m+I9N+z8m+W4Y+K7m+U4m+h4Y+o7m+S7Y+O6Y+n5Y+C4m+o7m+h7m+M8m+t9N+z2Y+C0Y+J8Y+z0m+U0Y+o7m+N1Y+O6Y+J6Y+w2N+q6Y+O6Y+k2Y+q6Y+M8m+o4m+b1Y+b3Y),"floatDate":(Q0Y+M8m+j0Y+K7m+P8m+C4m+v7Y+O6Y+h7m+O6Y+q1Y+G4Y+y7Y+s7m+C4m+x0m+G7Y+y7Y+M8m+z8m+q1Y+o7m+S7Y+O6Y+q1Y+W4Y+C4m+o7m+h7m+M8m+t9N+J6Y+W0Y+W4Y+F9Y+z0m+C2Y+p4m+M8m+o4m+b1Y+b3Y),"handleTemplate":(Q0Y+M8m+j0Y+K7m+P8m+D4Y+h7m+O6Y+q1Y+G4Y+y7Y+o4m+r4m+y7Y+U4m+z8m+z0m+Q1Y+o7m+S7Y+O6Y+I8m+o7m+h7m+M8m+t9N+c9Y+W4Y+F9Y+z0m+x0m+z0m+o7m+V8m+O6Y+W6Y+z0m+q6Y+O6Y+W6Y+z0m+q6Y+M8m+j0Y+F8Y),"iconsTemplate":(Q0Y+M8m+j0Y+K7m+P8m+C4m+u2Y+h7m+O6Y+q1Y+G4Y+y7Y+J6Y+x1Y+y7Y+P8m+U0Y+q1Y+z5Y+C4m+N1Y+M8m+o4m+b1Y+K7m+P8m+C4m+u2Y+h7m+O6Y+q1Y+G4Y+y7Y+J6Y+z8m+Y4Y+C4m+y7Y+q1Y+Z9N+Y7m+t2Y+M8m+j0Y+T5Y+M8m+j0Y+K7m+P8m+C4m+v7Y+O6Y+h7m+O6Y+q1Y+G4Y+y7Y+U8m+p3Y+y7Y+J6Y+w2N+c8Y+N1Y+O6Y+J6Y+w2N+K7m+P8m+C4m+v7Y+O6Y+h7m+O6Y+u5Y+y7Y+o4m+r4m+y7Y+F1Y+J6Y+t2Y+O6Y+W6Y+z0m+q6Y+M8m+j0Y+T5Y+M8m+o4m+b1Y+K7m+P8m+W0Y+O6Y+O6Y+h7m+O6Y+u5Y+y7Y+U8m+q1Y+z0m+y7Y+J6Y+z8m+d0Y+N1Y+O6Y+J6Y+w2N+K7m+P8m+s6Y+O6Y+h7m+O6Y+q1Y+G4Y+y7Y+o4m+r4m+y7Y+s7m+D4m+t2Y+O6Y+W6Y+z0m+q6Y+M8m+o4m+b1Y+T5Y+M8m+j0Y+K7m+P8m+W0Y+O6Y+O6Y+h7m+O6Y+u5Y+y7Y+U8m+q1Y+z0m+y7Y+J6Y+z8m+z0m+c8Y+N1Y+O6Y+W6Y+z0m+K7m+P8m+C4m+z8m+O6Y+O6Y+h7m+O6Y+u5Y+y7Y+o4m+P8m+x0m+y7Y+M8m+x0m+w7Y+t2Y+O6Y+W6Y+z0m+q6Y+M8m+o4m+b1Y+T5Y+M8m+j0Y+K7m+P8m+s6Y+O6Y+h7m+O6Y+q1Y+G4Y+y7Y+U8m+q1Y+z0m+y7Y+J6Y+z8m+z0m+o7m+C4m+N1Y+O6Y+W6Y+z0m+K7m+P8m+C4m+u2Y+h7m+O6Y+q1Y+G4Y+y7Y+o4m+P8m+x0m+y7Y+o7m+B7m+t2Y+O6Y+J6Y+z8m+z0m+q6Y+M8m+o4m+b1Y+T5Y+M8m+o4m+b1Y+K7m+P8m+C4m+v7Y+O6Y+h7m+O6Y+q1Y+G4Y+y7Y+U8m+p3Y+y7Y+J6Y+S8Y+C4m+N1Y+O6Y+J6Y+w2N+K7m+P8m+W0Y+a2N+h7m+O6Y+q1Y+G4Y+y7Y+o4m+r4m+y7Y+P8m+m0m+j7m+t2Y+O6Y+W6Y+z0m+q6Y+M8m+j0Y+q6Y+M8m+o4m+b1Y+b3Y),"baselineHandle":(Q0Y+M8m+j0Y+K7m+P8m+W0Y+O6Y+O6Y+h7m+O6Y+q1Y+G4Y+y7Y+U8m+z8m+j7m+l2Y+y7Y+U4m+z8m+Z4Y+C4m+o7m+K7m+s7m+z8m+S7Y+O6Y+g6Y+h7m+M8m+J5Y+y4Y+F9Y+z0m+U0Y+o7m+p4m+M8m+j0Y+b3Y),}
;STXChart.prototype.registerHTMLElements=function(){var h9Y="#zoomIn",A0m="DIV",V4m="chartControls",c=this.chart.container;for(var control in STXChart.htmlControls){if(typeof this.chart[control]==i9N&&typeof this.controls[control]==i9N){if(!this.allowZoom&&M2t.X(control,V4m))continue;var el=$$$(U2Y+control,c);if(el){this.chart[control]=el;this.controls[control]=el;}
else{var rawHTML=STXChart.htmlControls[control],div=document.createElement(A0m);div.innerHTML=rawHTML;el=div.firstChild;c.appendChild(el);this.chart[control]=el;this.controls[control]=el;el.id=control;}
}
}
if(this.controls.chartControls){var zoomIn=$$$(h9Y,this.controls.chartControls),zoomOut=$$$(y1Y,this.controls.chartControls);STX.safeClickTouch(zoomIn,(function(self){return function(e){self.zoomIn();e.stopPropagation();}
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
;Q(/-([a-z])/g);STX.makeCamelCase=function(name){return name.replace(STX.camelCaseRegExp,function(g){return g[M2t.V9N].toUpperCase();}
);}
;STXChart.prototype.cloneStyle=function(styleObject){var R8m="backgroundAttachment",rc={}
,nativeCamelSupport=y0m;function capitalize(g){return g[M2t.V9N].toUpperCase();}
for(var i in styleObject){var v=styleObject[i];if(M2t.t7(i,R8m))nativeCamelSupport=r9Y;if(nativeCamelSupport){if(v&&M2t.L7(v.constructor,String)&&isNaN(i)){rc[i]=v;}
}
else if(!isNaN(i)){var x=styleObject.getPropertyValue(v);if(x){v=v.split(Y5Y);var ii=M2t.k9N;jj=v.length;var vcc=v[M2t.k9N];while(++ii<jj){vcc+=v[ii].charAt(M2t.k9N).toUpperCase()+v[ii].slice(M2t.V9N);}
rc[vcc]=x;}
}
else{var icc=i.replace(STX.camelCaseRegExp,capitalize);rc[icc]=v;}
}
return rc;}
;STXChart.prototype.canvasStyle=function(className){var s=this.styles[className];if(!s){var div=document.createElement((F4Y+K9Y+S3m));div.className=className;document.body.appendChild(div);var styles=getComputedStyle(div);s=this.styles[className]=this.cloneStyle(styles);document.body.removeChild(div);if(!styles){this.styles[className]=t9Y;}
}
return s;}
;STXChart.prototype.colorOrStyle=function(str){var q0m="rgb(",x9Y="(",T4m="gba";if(str.indexOf(U2Y)!=-M2t.V9N)return str;if(str.indexOf((B5Y+T4m+x9Y))!=-M2t.V9N)return str;if(str.indexOf(q0m)!=-M2t.V9N)return str;if(M2t.S7(str,E1Y))return str;return this.canvasStyle(str);}
;STXChart.prototype.clearStyles=function(){this.styles={}
;}
;STXChart.prototype.setStyle=function(obj,attribute,value){if(!this.styles[obj]){this.canvasStyle(obj);}
if(!this.styles[obj])this.styles[obj]={}
;this.styles[obj][STX.makeCamelCase(attribute)]=value;}
;STXChart.prototype.canvasFont=function(className,ctx){var i0m="yl";if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var result=style.fontStyle+L3Y+style.fontWeight+L3Y+style.fontSize+L3Y+style.fontFamily;if(result.indexOf(i9N)==-M2t.V9N){ctx.font=result;}
else{this.styles[className]=t9Y;console.log((H4Y+g4Y+F4Y+L3Y+U4Y+M4Y+L3Y+g5Y+p1Y+i0m+n4Y+L3Y+D9Y+I4Y+L3Y+U4Y+q2Y+f7Y+g5Y+L3Y)+className);}
}
;STXChart.prototype.canvasColor=function(className,ctx){if(!ctx)ctx=this.chart.context;var style=this.canvasStyle(className);if(!style)return ;var color=style.color;if(STX.isTransparent(color))color=this.defaultColor;ctx.globalAlpha=1;ctx.fillStyle=color;ctx.strokeStyle=color;var opacity=style.opacity;if(typeof opacity!=i9N)ctx.globalAlpha=opacity;}
;STXChart.prototype.getCanvasFontSize=function(className){var a7Y="12",s=this.canvasStyle(className),fs=s.fontSize;if(!fs)fs=a7Y;return parseInt(STX.stripPX(fs));}
;STXChart.prototype.getCanvasColor=function(className){var s=this.canvasStyle(className);return s.color;}
;STXChart.hideDates=function(){return y0m;}
;STXChart.prototype.runPrepend=function(o,args,self){var prepends=this["prepend"+o];if(!prepends)return false;if(!self)self=this;for(var i=0;M2t.C7(i,prepends.length);i++){var rv=prepends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.prototype.runAppend=function(o,args,self){var appends=this["append"+o];if(!appends)return false;if(!self)self=this;for(var i=0;M2t.H7(i,appends.length);i++){var rv=appends[i].apply(self,args);if(rv)return rv;}
return false;}
;STXChart.registerDrawingTool=function(name,func){STXChart.drawingTools[name]=func;}
;STXChart.prototype.createBlock=function(left,width,top,height,className,context){if(!context)context=this.chart.context;if(typeof (height)=="undefined"){return ;}
this.canvasColor(className,context);context.fillRect(left,top,width,height);context.globalAlpha=1;}
;STXChart.prototype.changeOccurred=function(change){if(this.currentlyImporting)return ;if(this.changeCallback)this.changeCallback(this,change);}
;STXChart.prototype.setChartType=function(chartType){this.layout.chartType=chartType;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.setAggregationType=function(aggregationType){this.layout.aggregationType=aggregationType;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setChartScale=function(chartScale){if(!chartScale)chartScale="linear";this.layout.chartScale=chartScale;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.setAdjusted=function(data){this.layout.adj=data;if(this.chart.canvas){this.createDataSet();this.draw();}
this.changeOccurred("layout");}
;STXChart.prototype.setVolumeUnderlay=function(data){this.layout.volumeUnderlay=data;if(this.chart.canvas)this.draw();this.changeOccurred("layout");}
;STXChart.prototype.serializeDrawings=function(){var arr=[];for(var i=0;M2t.o7(i,this.drawingObjects.length);i++){arr.push(this.drawingObjects[i].serialize());}
return arr;}
;STXChart.prototype.abortDrawings=function(){for(var i=0;M2t.Y7(i,this.drawingObjects.length);i++){this.drawingObjects[i].abort(true);}
this.drawingObjects=[];}
;STXChart.prototype.reconstructDrawings=function(arr){for(var i=0;M2t.l7(i,arr.length);i++){var rep=arr[i],Factory=STXChart.drawingTools[rep.name];if(!Factory){if(STX.Drawing[rep.name]){Factory=STX.Drawing[rep.name];STXChart.registerDrawingTool(rep.name,Factory);}
}
if(Factory){var drawing=new Factory();drawing.reconstruct(this,rep);this.drawingObjects.push(drawing);}
}
}
;STXChart.prototype.clearDrawings=function(){this.undoStamp();this.abortDrawings();this.changeOccurred(z8Y);this.createDataSet();this.draw();}
;STXChart.prototype.createDrawing=function(type,parameters){var drawing=new STX.Drawing()[type];drawing.reconstruct(this,parameters);this.drawingObjects.push(drawing);this.draw();return drawing;}
;STXChart.prototype.removeDrawing=function(drawing){for(var i=0;M2t.y7(i,this.drawingObjects.length);i++){if(M2t.i7(this.drawingObjects[i],drawing)){this.drawingObjects.splice(i,1);this.changeOccurred("vector");this.draw();return ;}
}
}
;STXChart.prototype.dateFromTick=function(tick,chart,native){var o1Y="mon";if(!chart)chart=this.chart;var interval=this.layout.interval,periodicity=this.layout.periodicity,l=chart.dataSet.length,dt,i;if(M2t.J7(tick,l)&&M2t.z7(tick,0))return native?new Date(chart.dataSet[tick].DT.getTime()):chart.dataSet[tick].Date;if(M2t.G7(tick,0)){dt=chart.dataSet[0].DT;for(i=0;M2t.e7(i,3000);i++){if(-i==tick)return native?new Date(dt.getTime()):STX.yyyymmddhhmm(dt);if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(M2t.c7(interval,"day"))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(M2t.U7(interval,"week"))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(M2t.W7(interval,"month"))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);}
}
else{dt=chart.dataSet[M2t.Z7(l,1)].DT;for(i=0;M2t.A8(i,3000);i++){if(M2t.r8(l-1+i,tick)){return native?new Date(dt.getTime()):STX.yyyymmddhhmm(dt);}
if(!this.isDailyInterval(interval))dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(M2t.Q8(interval,"day"))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(M2t.B8(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(M2t.k8(interval,(o1Y+p1Y+T9Y)))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
}
return native?new Date(dt.getTime()):STX.yyyymmddhhmm(dt);}
;STXChart.prototype.futureTick=function(mydt,chart){var mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[M2t.T8(chart.dataSet.length,1)].DT,m=dt.getTime(),ticks=0,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(M2t.v8(interval,"minute"))computedPeriodicity=M2t.g8(periodicity,interval);if(M2t.q8(interval,"tick"))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=0;M2t.K8(i,1500);i++){if(!this.isDailyInterval(interval)){if(M2t.u8(dt.getHours(),chart.beginHour)&&M2t.s8(dt.getMinutes(),chart.beginMinute)&&M2t.D8(interval,(h2Y+c3Y))){if(M2t.x8((mym-m)/60000,chart.minutesInSession)){dt=STX.LegacyMarket.nextDay(dt,1,this);if(M2t.n8(chart.beginHour,0)&&M2t.a8(dt.getDay(),0)){dt.setHours(15);dt.setMinutes(0);}
if(M2t.w8(chart.beginHour,0)&&M2t.A0(dt.getDay(),1)){ticks+=Math.round(M2t.r0(9,60,computedPeriodicity));}
else{ticks+=Math.round(M2t.C0(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);ticks+=1;}
}
else{ticks+=1;if(M2t.H0(interval,"day"))dt=STX.LegacyMarket.nextDay(dt,periodicity,this);else if(M2t.o0(interval,"week"))dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(M2t.Y0(interval,"month"))dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
m=dt.getTime();if(M2t.l0(m,mym)){return (M2t.d0(chart.dataSet.length,1))+ticks;}
if(M2t.j0(mym,m)){return (M2t.F0(chart.dataSet.length,1))+ticks-1;}
}
return (M2t.I0(chart.dataSet.length,1))+ticks;}
;STXChart.prototype.pastTick=function(mydt,chart){var S5Y=210,mym=STX.strToDateTime(mydt).getTime(),interval=this.layout.interval,periodicity=this.layout.periodicity,dt=chart.dataSet[M2t.k9N].DT,m=dt.getTime(),ticks=M2t.k9N,computedPeriodicity=periodicity;if(!this.isDailyInterval(interval)){if(M2t.N0(interval,O9Y))computedPeriodicity=M2t.m0(periodicity,interval);if(M2t.n0(interval,u8Y))computedPeriodicity=this.chart.xAxis.futureTicksInterval;}
for(var i=M2t.k9N;M2t.a0(i,a2Y);i++){if(!this.isDailyInterval(interval)){if(M2t.w0(dt.getHours(),chart.beginHour)&&M2t.b4(dt.getMinutes(),chart.beginMinute)&&M2t.h4(interval,u8Y)){var dt2=STX.LegacyMarket.prevDay(dt,M2t.V9N,this);if(M2t.P4((dt2.getTime()-mym)/k9Y,chart.minutesInSession)){dt=dt2;if(M2t.R4(chart.beginHour,M2t.k9N)){if(M2t.V4(dt.getDay(),M2t.k9N)){ticks+=Math.round(M2t.E4(l9N,h0m,computedPeriodicity));}
else{ticks+=Math.round(M2t.v4(chart.minutesInSession,computedPeriodicity));}
}
else if(M2t.g4(chart.beginHour,l9N)&&STX.LegacyMarket.isHalfDay(dt,chart.symbol)){ticks+=Math.round(M2t.q4(S5Y,computedPeriodicity));}
else{ticks+=Math.round(M2t.K4(chart.minutesInSession,computedPeriodicity));}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,t9Y,this.dataZone);ticks+=M2t.V9N;}
}
else{dt=STX.LegacyMarket.prevPeriod(dt,interval,periodicity,this,t9Y,this.dataZone);ticks+=M2t.V9N;}
}
else{ticks+=M2t.V9N;}
if(M2t.u4(interval,e8Y))dt=STX.LegacyMarket.prevDay(dt,periodicity,this);else if(M2t.s4(interval,l6Y))dt=STX.LegacyMarket.prevWeek(dt,periodicity,this);else if(M2t.D4(interval,z9N))dt=STX.LegacyMarket.prevMonth(dt,periodicity,this);m=dt.getTime();if(M2t.x4(m,mym)){return -ticks;}
if(M2t.n4(mym,m)){return -(ticks+M2t.V9N);}
}
return -ticks;}
;STXChart.prototype.calculateYAxisMargins=function(yAxis){yAxis.zoom=yAxis.initialMarginTop+yAxis.initialMarginBottom;yAxis.scroll=M2t.a4((yAxis.initialMarginTop-yAxis.initialMarginBottom),M2t.B9N);}
;STXChart.prototype.home=function(params){if(typeof params!="object"){params={maintainWhitespace:params}
;}
this.cancelTouchSingleClick=true;if(!this.chart.dataSet||!this.chart.dataSet.length){this.draw();return ;}
var barsDisplayedOnScreen=Math.floor(M2t.w4(this.chart.width,this.layout.candleWidth));for(var chartName in this.charts){var chart=this.charts[chartName];chart.scroll=Math.min(barsDisplayedOnScreen+1,chart.dataSet.length);if(this.chart.allowScrollPast)chart.scroll=barsDisplayedOnScreen+1;var wsInTicks;if(params.maintainWhitespace){wsInTicks=Math.round(M2t.b3(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
else if(M2t.h3(this.yaxisLabelStyle,"roundRectArrow")){var margin=3,height=this.getCanvasFontSize("stx_yaxis")+M2t.P3(margin,2),leftMargin=M2t.R3(height,2);wsInTicks=Math.round(M2t.V3(leftMargin,this.layout.candleWidth));if(M2t.E3(wsInTicks,1))chart.scroll-=wsInTicks;}
this.calculateYAxisMargins(chart.panel.yAxis);}
this.draw();}
;STXChart.prototype.tickFromDate=function(dt,chart,adj){if(!chart)chart=this.chart;if(!chart.dataSet.length)return 0;var DT=STX.strToDateTime(dt);if(!adj)adj=0;if(!STXChart.isDailyInterval(this.layout.interval))DT.setMinutes(DT.getMinutes()+adj);if(M2t.O3(chart.beginHour,0)&&!STXChart.isDailyInterval(this.layout.interval)){if(M2t.M3(DT.getHours(),0)){DT.setHours(chart.beginHour);DT.setMinutes(chart.beginMinute);}
}
var mym=DT.getTime(),m=chart.dataSet[M2t.d3(chart.dataSet.length,1)].DT.getTime();if(M2t.j3(m,mym))return this.futureTick(dt,chart);var first=chart.dataSet[0].DT.getTime();if(M2t.F3(mym,first))return this.pastTick(dt,chart);for(var i=M2t.I3(chart.dataSet.length,1);M2t.N3(i,0);i--){m=chart.dataSet[i].DT.getTime();if(M2t.m3(m,mym))return i;}
}
;STXChart.prototype.timeShiftDate=function(dt){var ms=dt.getTime();ms+=M2t.p3(this.timeZoneOffset,k9Y);return new Date(ms);}
;STXChart.XAxisLabel=function(hz,grid,text){this.hz=hz;this.grid=grid;this.text=text;}
;STXChart.prototype.createXAxis=function(chart){var u7m="onthly";if(M2t.X3(chart.dataSegment.length,0))return null;var arguments$=[chart],axisRepresentation=this.runPrepend("createXAxis",arguments$);if(axisRepresentation)return axisRepresentation;var interval=this.layout.interval;if(M2t.f3(interval,"tick")||M2t.t6(chart.xAxis.axisType,"ntb")||this.hasNTBAxis[this.layout.aggregationType]){return this.createTickXAxisWithDates(chart);}
if(M2t.L6(chart.xAxis.axisType,"numeric")){return this.createNumericXAxis(chart);}
var displayLetters=false,periodicity=this.layout.periodicity,candleWidth=this.layout.candleWidth,p=periodicity,isIntraday=false,isDaily=false,isWeekly=false,isMonthly=false;if(M2t.S6(interval,"week")){isWeekly=true;p=M2t.C6(5,p);}
if(M2t.H6(interval,"month")){isMonthly=true;p=M2t.o6(20,p);}
if(M2t.Y6(candleWidth*(20/p),50))displayLetters=true;var i=0;chart.xaxis=[];for(;M2t.l6(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dt;if(chart.dataSegment[i]){dt=chart.dataSegment[i].DT;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
var currentDate=dt.getDate(),is24=(M2t.y6(chart.minutesInSession,1440));if(is24){if(chart.dataSegment[i]&&chart.dataSegment[i].displayDate){currentDate=chart.dataSegment[i].displayDate.getDate();}
else{currentDate=this.timeShiftDate(dt).getDate();}
}
var prevMonth=dt.getMonth(),prevYear=dt.getFullYear(),ticksPerDay=1;if(!this.isDailyInterval(interval)){isIntraday=true;if(M2t.i6(interval,"minute"))interval=1;ticksPerDay=Math.ceil(M2t.J6(chart.minutesInSession,periodicity,interval));}
else{isDaily=true;}
var ticksPerClick=Math.round(M2t.I6(ticksPerDay,Math.ceil(ticksPerDay/Math.floor(100/candleWidth))));if(M2t.N6(ticksPerClick,1))ticksPerClick=1;var minuteBoundary=M2t.m6(ticksPerClick,periodicity,interval);if(chart.prettyXaxis){var mod=chart.prettyXaxis[M2t.n6(periodicity,interval)];if(!mod)mod=1;if(M2t.a6(minuteBoundary,mod)){minuteBoundary=M2t.w6(Math.floor((minuteBoundary+mod)/mod),mod);}
}
var offset=Math.round(M2t.A1(Math.round(candleWidth*this.candleWidthPercent)/2,1));axisRepresentation=[];var standardBeginDay=M2t.r1(chart.beginHour,60)+chart.beginMinute,prices;for(i;M2t.Q1(i,chart.maxTicks);i++){var hz,text;if(!isMonthly&&M2t.B1(chart.maxTicks/ticksPerDay,(this.chart.width/this.chart.xaxisFactor))){if(M2t.k1(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(!prices)continue;dt=prices.DT;if(chart.xAxis.useDataDate){dtShifted=dt;}
else if(prices.displayDate){dtShifted=prices.displayDate;}
else if(isIntraday){dtShifted=this.timeShiftDate(dt);}
else{dtShifted=dt;}
}
else{if(!chart.xAxis.futureTicks)break;if(isIntraday)dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(isWeekly)dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(isMonthly)dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);else if(isDaily)dt=STX.LegacyMarket.nextDay(dt,periodicity,this);if(chart.xAxis.useDataDate)dtShifted=dt;else if(isIntraday)dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var isNextDate=M2t.T1(dt.getDate(),currentDate);if(is24)isNextDate=M2t.v1(dtShifted.getDate(),currentDate);var nonBoundary=M2t.g1(dt.getHours(),chart.beginHour)||M2t.j1(dt.getMinutes(),chart.beginMinute);if(is24)nonBoundary=M2t.F1(dtShifted.getHours(),0)||M2t.I1(dtShifted.getMinutes(),0);if(isNextDate){var gridType="boundary";if(!isIntraday)gridType="line";currentDate=dt.getDate();if(is24)currentDate=dtShifted.getDate();hz=chart.left+(M2t.N1(i,candleWidth))+offset;if(M2t.p1(gridType,"boundary"))hz=chart.left+(M2t.X1((i),candleWidth))-3;text="";if(!STXChart.hideDates()){var y=dt.getFullYear();if(M2t.f1(y,prevYear)){prevYear=y;text=y;gridType="boundary";}
else{if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,gridType);}
else if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
if(M2t.t5(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,gridType,text));}
}
else if(nonBoundary){var minutes=M2t.L5(dt.getHours(),60)+dt.getMinutes();if(M2t.S5(this.chart.beginHour,0)||M2t.C5(dt.getDay(),0))minutes=M2t.H5(minutes,standardBeginDay);else minutes=M2t.o5(minutes,(15*60));if(is24)minutes=M2t.Y5(dtShifted.getHours(),60)+dtShifted.getMinutes();if(M2t.l5(minutes%minuteBoundary,0)){hz=chart.left+(M2t.y5(i,candleWidth))+offset;text="";if(!STXChart.hideDates()){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,(q3Y+n4Y));}
else{text=STX.timeAsDisplay(dtShifted,this);}
}
if(M2t.i5(hz,chart.right)){axisRepresentation.push(new STXChart.XAxisLabel(hz,(m5Y+R2Y+n4Y),text));}
}
}
}
else{if(M2t.J5(i,chart.dataSegment.length)){prices=chart.dataSegment[i];dt=prices.DT;}
else{if(!chart.xAxis.futureTicks)break;if(isIntraday)dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);else if(isWeekly)dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);else if(isMonthly)dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);else if(isDaily)dt=STX.LegacyMarket.nextDay(dt,periodicity,this);}
dtShifted=dt;var m=dt.getMonth(),y1=dt.getFullYear();if(M2t.z5(y1,prevYear)){prevYear=y1;prevMonth=m;hz=chart.left+(M2t.G5(i,candleWidth))-2;text="";if(!STXChart.hideDates())text=y1;axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
else if(M2t.e5(m,prevMonth)){var doIt="monthly";if(isWeekly&&M2t.c5(chart.maxTicks*periodicity,(52*1)))doIt="quarterly";else if(isMonthly&&M2t.U5(chart.maxTicks*periodicity,(12*1)))doIt="quarterly";else if(isDaily&&M2t.W5(chart.maxTicks*periodicity,(365*1)))doIt=(a5Y+X1Y+F2Y+A3Y+q2Y+v4m);if(isWeekly&&M2t.Z5(chart.maxTicks*periodicity,(52*2)))doIt="none";else if(isMonthly&&M2t.A2(chart.maxTicks*periodicity,(12*2)))doIt="none";else if(isDaily&&M2t.S2(chart.maxTicks*periodicity,(365*2)))doIt="none";if(M2t.C2(doIt,(N2Y+u7m))||(M2t.H2(doIt,"quarterly")&&(M2t.o2(m,0)||M2t.Y2(m,3)||M2t.l2(m,6)||M2t.q2(m,9)))){prevMonth=m;hz=chart.left+(M2t.K2(i,candleWidth))-2;text="";if(!STXChart.hideDates())text=STX.monthAsDisplay(m,displayLetters,this);axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmm(dtShifted)}
;if(M2t.u2(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);}
this.runAppend("createXAxis",arguments$);return axisRepresentation;}
;STXChart.prototype.drawXAxis=function(chart,axisRepresentation){var R5Y="xi",f2N="awX",i8m="dr",N5Y="ter",arguments$=[chart,axisRepresentation];if(this.runPrepend("drawXAxis",arguments$))return ;if(!axisRepresentation)return ;var priorBoundary=null,context=this.chart.context;this.canvasFont("stx_xaxis");context.textAlign=(U4Y+Q4Y+N5Y);context.textBaseline="middle";var obj;for(var j=0;M2t.s2(j,axisRepresentation.length);j++){obj=axisRepresentation[j];var w=context.measureText(obj.text).width,w2=Math.max(w,chart.xAxis.minimumLabelWidth);obj.hz=Math.floor(obj.hz+this.micropixels)+0.5;obj.left=M2t.D2(obj.hz,(w2/2));obj.right=obj.hz+(M2t.n2(w2,2));obj.unpaddedRight=obj.hz+(M2t.a2(w,2));}
var plotter=new STX.Plotter();plotter.newSeries((q3Y+n4Y),"stroke",this.canvasStyle("stx_grid"));plotter.newSeries("boundary","stroke",this.canvasStyle("stx_grid_dark"));plotter.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));var bottom=chart.panel.bottom,yAxis=chart.panel.yAxis,prevRight=-1,nextBoundaryLeft=Math.MAX_VALUE,drawBorders=chart.xAxis.displayBorder||M2t.Z2(chart.xAxis.displayBorder,null);if(M2t.A9(this.axisBorders,true))drawBorders=true;if(M2t.r9(this.axisBorders,false))drawBorders=false;var b=drawBorders?M2t.Q9(yAxis.bottom,0.5):yAxis.bottom,middle=M2t.B9(bottom,this.xaxisHeight/2);if(drawBorders)middle+=3;for(var nb=0;M2t.k9(nb,axisRepresentation.length);nb++){if(M2t.T9(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
var prevHz=0,count=0;for(var i=0;M2t.v9(i,axisRepresentation.length);i++){obj=axisRepresentation[i];if(M2t.g9(i,nb)){for(nb++;M2t.q9(nb,axisRepresentation.length);nb++){if(M2t.K9(axisRepresentation[nb].grid,"boundary")){nextBoundaryLeft=axisRepresentation[nb].left;break;}
}
if(M2t.u9(nb,axisRepresentation.length)){nb=-1;nextBoundaryLeft=Math.MAX_VALUE;}
if(prevRight>-1){if(M2t.s9(obj.left,prevRight))continue;}
}
else{if(prevRight>-1){if(M2t.D9(obj.left,prevRight))continue;}
if(M2t.x9(obj.right,nextBoundaryLeft))continue;}
prevRight=obj.right;if((M2t.n9(Math.floor(obj.unpaddedRight),this.chart.right))){count++;if(chart.xAxis.displayGridLines){plotter.moveTo(obj.grid,obj.hz,yAxis.top);plotter.lineTo(obj.grid,obj.hz,b);}
if(drawBorders){plotter.moveTo("border",obj.hz,b+0.5);plotter.lineTo("border",obj.hz,b+6);}
prevHz=obj.hz;this.canvasColor(M2t.a9(obj.grid,"boundary")?"stx_xaxis_dark":"stx_xaxis");context.fillText(obj.text,obj.hz,middle);}
}
if(drawBorders){var bb=Math.round(yAxis.bottom)+0.5,wb=Math.round(chart.right)+0.5;plotter.moveTo("border",chart.left,bb);plotter.lineTo("border",wb,bb);}
plotter.draw(context);context.textAlign="left";this.runAppend((i8m+f2N+r0m+R5Y+g5Y),arguments$);}
;STXChart.prototype.createNumericXAxis=function(chart){axisRepresentation=[];chart.xaxis=[];for(var i=0;M2t.w9(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
for(var j=i;M2t.b7y(j,chart.maxTicks);j++){if(!chart.dataSegment[i])break;}
var filledScreenRatio=M2t.h7y((j-i),chart.maxTicks),idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=Math.round(M2t.P7y((this.chart.width*filledScreenRatio),idealTickSizePixels)),minMax=this.determineMinMax(chart.dataSegment,["index"]),maxPoint=minMax[1],minPoint=minMax[0],range=M2t.R7y(maxPoint,minPoint);function niceNum(range,round){var exponent,fraction,niceFraction;exponent=Math.floor(Math.log10(range));fraction=M2t.V7y(range,Math.pow(10,exponent));if(round){if(M2t.E7y(fraction,1.5))niceFraction=1;else if(M2t.O7y(fraction,3))niceFraction=2;else if(M2t.M7y(fraction,7))niceFraction=5;else niceFraction=10;}
else{if(M2t.d7y(fraction,1))niceFraction=1;else if(M2t.j7y(fraction,2))niceFraction=2;else if(M2t.F7y(fraction,5))niceFraction=5;else niceFraction=10;}
return M2t.I7y(niceFraction,Math.pow(10,exponent));}
var niceRange=niceNum(M2t.N7y(maxPoint,minPoint),false),tickSpacing=niceNum(M2t.m7y(range,(idealTicks-1)),true),niceMin=M2t.p7y(Math.floor(minPoint/tickSpacing),tickSpacing),niceMax=M2t.X7y(Math.ceil(maxPoint/tickSpacing),tickSpacing),nextLabel=niceMin;if(M2t.f7y(niceMin,minPoint))nextLabel=niceMin+tickSpacing;var hz;for(i;M2t.t8y(i,chart.maxTicks);i++){var prices=chart.dataSegment[i];if(prices){var obj={index:prices.index,data:prices}
;chart.xaxis.push(obj);if(M2t.L8y(prices.index,nextLabel))continue;if(M2t.S8y(prices.index,nextLabel)){hz=chart.left+(M2t.C8y(i,this.layout.candleWidth))+this.offset+this.micropixels;}
else if(M2t.H8y(prices.index,nextLabel)){hz=chart.left+(M2t.o8y(i,this.layout.candleWidth))-3+this.micropixels;}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",nextLabel));nextLabel+=tickSpacing;}
else{chart.xaxis.push(null);}
}
return axisRepresentation;}
;STXChart.prototype.createTickXAxisWithDates=function(chart){var e6Y="[",E5Y="egment",q8m="rder",W2N="sc",G3Y="es",N3Y="ser",q9N="As",x4Y="ata",i5Y="asterD",d8Y="ur",m8m="tch",X8m="dHour",S6Y="ef",s3Y="ou",I0m="dMin",s2Y=" & ",T8Y="our",a0Y=(0x1E9>(71.,0x255)?(32.,"K"):(0x1D2,0x55)>=53?(0x118,"H"):(83,7.42E2)),Y4m="han",O1Y="ime",K3Y="ion",S9Y="Ass";if(!chart)chart=this.chart;if(!this.timeIntervalMap){this.timePossibilities=[STX.MILLISECOND,STX.SECOND,STX.MINUTE,STX.HOUR,STX.DAY,STX.MONTH,STX.YEAR];this.timeIntervalMap={}
;this.timeIntervalMap[STX.MILLISECOND]={arr:[1,2,5,10,20,50,100,250,500],minTimeUnit:0,maxTimeUnit:1000}
;this.timeIntervalMap[STX.SECOND]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.MINUTE]={arr:[1,2,5,10,15,30],minTimeUnit:0,maxTimeUnit:60}
;this.timeIntervalMap[STX.HOUR]={arr:[1,2,3,4,6,12],minTimeUnit:0,maxTimeUnit:24}
;this.timeIntervalMap[STX.DAY]={arr:[1,2,7,14],minTimeUnit:1,maxTimeUnit:32}
;this.timeIntervalMap[STX.MONTH]={arr:[1,2,3,6],minTimeUnit:1,maxTimeUnit:13}
;this.timeIntervalMap[STX.YEAR]={arr:[1,2,3,5],minTimeUnit:1,maxTimeUnit:20000000}
;this.timeIntervalMap[STX.DECADE]={arr:[10],minTimeUnit:0,maxTimeUnit:2000000}
;}
var daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31],idealTickSizePixels=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels,idealTicks=M2t.Y8y(this.chart.width,idealTickSizePixels);for(var x=0;M2t.l8y(x,chart.dataSegment.length);x++)if(chart.dataSegment[x])break;if(M2t.y8y(x,chart.dataSegment.length))return [];var i,timeRange=M2t.i8y(chart.dataSegment[chart.dataSegment.length-1].DT.getTime(),chart.dataSegment[x].DT.getTime());if(M2t.J8y(timeRange,14*STX.DAY)&&!STXChart.isDailyInterval(this.layout.interval)){var nextClose=null,nextCloseEpoch=0,prevEpoch=0;timeRange=0;for(i=0;M2t.z8y(i,chart.dataSegment.length);i++){var q=chart.dataSegment[i];if(!q)continue;var epoch=q.DT.getTime();if(M2t.G8y(epoch,nextCloseEpoch)){nextClose=new Date(q.DT);nextClose.setHours(chart.endHour);nextClose.setMinutes(chart.endMinute);nextCloseEpoch=nextClose.getTime();if(M2t.e8y(nextCloseEpoch,epoch)){console.log((S9Y+n4Y+B5Y+p1Y+K3Y+L3Y+n4Y+e0m+O2Y+B5Y+f8m+r0m+L3Y+H4Y+A7Y+L3Y+T9Y+f7Y+L3Y+g4Y+L3Y+p1Y+O1Y+L3Y+W9Y+B5Y+v2Y+r5Y+B5Y+L3Y+p1Y+Y4m+L3Y+p1Y+c1Y+L3Y+g5Y+G5Y+n4Y+U4Y+K9Y+D9Y+K9Y+n4Y+F4Y+L3Y+n4Y+R2Y+F4Y+a0Y+T8Y+s2Y+n4Y+R2Y+I0m+X1Y+p1Y+n4Y+L3Y+D9Y+I4Y+L3Y)+this.chart.symbol+(c7m+A8Y+q2Y+v2Y+g5Y+n4Y+L3Y+U4Y+T9Y+n4Y+c3Y+L3Y+v4m+s3Y+L3Y+a5Y+X1Y+O2Y+p1Y+S6Y+n4Y+n4Y+F4Y+L3Y+O2Y+B5Y+L3Y+g5Y+n4Y+p1Y+L3Y+U4Y+T9Y+F2Y+s1Y+n4Y+R2Y+X8m+s2Y+U4Y+E9Y+B5Y+p1Y+s1Y+n4Y+G0m+H7Y+n4m+j3Y+n4Y+L3Y+p1Y+O2Y+L3Y+N2Y+g4Y+m8m+L3Y+v4m+O2Y+d8Y+L3Y+N2Y+i5Y+x4Y));nextCloseEpoch=epoch;}
}
else{timeRange+=M2t.c8y(epoch,prevEpoch);if(M2t.U8y(epoch-prevEpoch,0)){console.log((q9N+N3Y+p1Y+K9Y+L1Y+L3Y+n4Y+e0m+O2Y+B5Y+f8m+l0Y+u7Y+G3Y+L3Y+R2Y+O2Y+p1Y+L3Y+K9Y+R2Y+L3Y+g4Y+W2N+n4Y+G0m+K9Y+y2Y+L3Y+O2Y+q8m+c7m+U4Y+E9Y+E0m+s1Y+F4Y+u7Y+g4Y+m9N+E5Y+e6Y)+i+"].DT=="+q.DT);}
}
prevEpoch=epoch;}
}
timeRange=M2t.W8y((timeRange/chart.dataSegment.length),chart.maxTicks);var msPerTick=M2t.Z8y(timeRange,idealTicks);for(i=0;M2t.A0y(i,this.timePossibilities.length);i++){if(M2t.r0y(this.timePossibilities[i],msPerTick))break;}
if(M2t.Q0y(i,this.timePossibilities.length)){i--;}
else{var prevUnit=this.timePossibilities[M2t.B0y(i,1)],prevMap=this.timeIntervalMap[prevUnit],prevMultiplier=prevMap.arr[M2t.k0y(prevMap.arr.length,1)];if(M2t.T0y(msPerTick-(prevUnit*prevMultiplier),this.timePossibilities[i]-msPerTick))i--;}
var timeUnit=this.timePossibilities[i];if(chart.xAxis.timeUnit)timeUnit=chart.xAxis.timeUnit;var timeInterval=STX.clone(this.timeIntervalMap[timeUnit]);for(i=0;M2t.v0y(i,timeInterval.arr.length);i++){if(M2t.g0y(timeInterval.arr[i]*timeUnit,msPerTick))break;}
if(M2t.q0y(i,timeInterval.arr.length)){i--;}
else{if(M2t.K0y(msPerTick-timeInterval.arr[i-1]*timeUnit,timeInterval.arr[i]*timeUnit-msPerTick))i--;}
var timeUnitMultiplier=timeInterval.arr[i];if(chart.xAxis.timeUnitMultiplier)timeUnitMultiplier=chart.xAxis.timeUnitMultiplier;axisRepresentation=[];chart.xaxis=[];for(i=0;M2t.u0y(i,chart.maxTicks);i++){if(chart.dataSegment[i])break;chart.xaxis.push(null);}
var dtShifted=0,nextTimeUnit=timeInterval.minTimeUnit,previousTimeUnitLarge=-1,firstTick=true;for(i;M2t.s0y(i,chart.maxTicks);i++){if(M2t.D0y(i,chart.dataSegment.length)){prices=chart.dataSegment[i];if(prices.displayDate&&chart.xAxis.adjustTimeZone&&M2t.x0y(timeUnit,STX.DAY)){dtShifted=prices.displayDate;}
else{dtShifted=prices.DT;}
}
else{var periodicity=this.layout.periodicity,interval=this.layout.interval;if(!chart.xAxis.futureTicks)break;var dt;if(dtShifted){dt=dtShifted;}
else{dt=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);dt=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
if(M2t.n0y(interval,"day")){dt=STX.LegacyMarket.nextDay(dt,periodicity,this);}
else if(M2t.a0y(interval,"week")){dt=STX.LegacyMarket.nextWeek(dt,periodicity,this);}
else if(M2t.w0y(interval,"month")){dt=STX.LegacyMarket.nextMonth(dt,periodicity,this);}
else{dt=STX.LegacyMarket.nextPeriod(dt,interval,periodicity,this,null,this.dataZone);}
if(chart.xAxis.useDataDate)dtShifted=dt;else if(!this.isDailyInterval(interval))dtShifted=this.timeShiftDate(dt);else dtShifted=dt;}
var obj={DT:dtShifted,Date:STX.yyyymmddhhmm(dtShifted)}
;if(M2t.b4y(i,chart.dataSegment.length))obj.data=chart.dataSegment[i];else obj.data=null;chart.xaxis.push(obj);var currentTimeUnit,currentTimeUnitLarge;if(M2t.h4y(timeUnit,STX.MILLISECOND)){currentTimeUnit=dtShifted.getTime();currentTimeUnitLarge=dtShifted.getSeconds();}
else if(M2t.P4y(timeUnit,STX.SECOND)){currentTimeUnit=dtShifted.getSeconds();currentTimeUnitLarge=dtShifted.getMinutes();}
else if(M2t.R4y(timeUnit,STX.MINUTE)){currentTimeUnit=dtShifted.getMinutes();currentTimeUnitLarge=dtShifted.getHours();}
else if(M2t.V4y(timeUnit,STX.HOUR)){currentTimeUnit=dtShifted.getHours();currentTimeUnitLarge=dtShifted.getDate();}
else if(M2t.E4y(timeUnit,STX.DAY)){currentTimeUnit=dtShifted.getDate();currentTimeUnitLarge=dtShifted.getMonth()+1;}
else if(M2t.O4y(timeUnit,STX.MONTH)){currentTimeUnit=dtShifted.getMonth()+1;currentTimeUnitLarge=dtShifted.getFullYear();}
else if(M2t.M4y(timeUnit,STX.YEAR)){currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=dtShifted.getFullYear()+1000;}
else{currentTimeUnit=dtShifted.getFullYear();currentTimeUnitLarge=0;}
var text=null;if(M2t.d4y(previousTimeUnitLarge,currentTimeUnitLarge)){if(M2t.j4y(currentTimeUnit,nextTimeUnit)){nextTimeUnit=timeInterval.minTimeUnit;}
hz=chart.left+(M2t.F4y(i,this.layout.candleWidth))-3;text=null;if(M2t.I4y(timeUnit,STX.HOUR)||(M2t.N4y(timeUnit,STX.MINUTE)&&M2t.m4y(previousTimeUnitLarge,currentTimeUnitLarge))){if(chart.xAxis.formatter){text=chart.xAxis.formatter(dtShifted,"boundary",STX.DAY,1);}
else{if(this.internationalizer){text=this.internationalizer.monthDay.format(dtShifted);}
else{text=(dtShifted.getMonth()+1)+"/"+dtShifted.getDate();}
}
}
else if(M2t.p4y(timeUnit,STX.DAY)){if(M2t.X4y(previousTimeUnitLarge,currentTimeUnitLarge)){text=dtShifted.getFullYear();}
else{text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
}
else if(M2t.f4y(timeUnit,STX.MONTH)){text=dtShifted.getFullYear();}
if(text&&previousTimeUnitLarge!=-1){axisRepresentation.push(new STXChart.XAxisLabel(hz,"boundary",text));}
}
if(M2t.t3y(currentTimeUnit,nextTimeUnit)){if(M2t.L3y(nextTimeUnit,timeInterval.minTimeUnit)){if(M2t.S3y(currentTimeUnitLarge,previousTimeUnitLarge))continue;}
var labelDate=new Date(dtShifted),hz=chart.left+(M2t.C3y(i,this.layout.candleWidth))+this.offset,boundaryTimeUnit=M2t.H3y(Math.floor(currentTimeUnit/timeUnitMultiplier),timeUnitMultiplier);if(M2t.o3y(boundaryTimeUnit,currentTimeUnit)){hz=chart.left+(M2t.Y3y(i,this.layout.candleWidth))-3;}
if(M2t.l3y(timeUnit,STX.MILLISECOND)){labelDate.setMilliseconds(boundaryTimeUnit);}
else if(M2t.y3y(timeUnit,STX.SECOND)){labelDate.setMilliseconds(0);labelDate.setSeconds(boundaryTimeUnit);}
else if(M2t.i3y(timeUnit,STX.MINUTE)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(boundaryTimeUnit);}
else if(M2t.J3y(timeUnit,STX.HOUR)){labelDate.setMilliseconds(0);labelDate.setSeconds(0);labelDate.setMinutes(0);labelDate.setHours(boundaryTimeUnit);}
else if(M2t.z3y(timeUnit,STX.DAY)){labelDate.setDate(boundaryTimeUnit);}
else if(M2t.G3y(timeUnit,STX.MONTH)){labelDate.setDate(1);labelDate.setMonth(M2t.e3y(boundaryTimeUnit,1));}
else if(M2t.c3y(timeUnit,STX.YEAR)){labelDate.setDate(1);labelDate.setMonth(0);}
else{labelDate.setDate(1);labelDate.setMonth(0);}
nextTimeUnit=boundaryTimeUnit+timeUnitMultiplier;if(M2t.U3y(timeUnit,STX.DAY))timeInterval.maxTimeUnit=daysInMonth[labelDate.getMonth()]+1;if(M2t.W3y(nextTimeUnit,timeInterval.maxTimeUnit))nextTimeUnit=timeInterval.minTimeUnit;previousTimeUnitLarge=currentTimeUnitLarge;if(firstTick&&M2t.Z3y(boundaryTimeUnit,currentTimeUnit))continue;if(!text){if(chart.xAxis.formatter){text=chart.xAxis.formatter(labelDate,"line",timeUnit,timeUnitMultiplier);}
else{if(M2t.A6y(timeUnit,STX.DAY)){text=labelDate.getDate();}
else if(M2t.r6y(timeUnit,STX.MONTH)){text=STX.monthAsDisplay(dtShifted.getMonth(),false,this);}
else if(M2t.Q6y(timeUnit,STX.YEAR)||M2t.B6y(timeUnit,STX.DECADE)){text=labelDate.getFullYear();}
else{text=STX.timeAsDisplay(labelDate,this,timeUnit);}
}
axisRepresentation.push(new STXChart.XAxisLabel(hz,"line",text));}
}
firstTick=false;}
return axisRepresentation;}
;var cached=M2t.k9N,notcached=M2t.k9N;STXChart.prototype.createYAxis=function(panel,parameters){var Q7Y="proje";if(this.runPrepend("createYAxis",arguments))return ;var chart=panel.chart,isAChart=(M2t.k6y(panel.name,chart.name));if(!parameters)parameters={}
;parameters.noChange=false;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(STXChart.enableCaching&&M2t.T6y(yAxis.high,panel.cacheHigh)&&M2t.v6y(yAxis.low,panel.cacheLow)){var leftTick=M2t.g6y(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;panel.cacheLeft=Math.min(panel.cacheLeft,leftTick);panel.cacheRight=Math.max(panel.cacheRight,rightTick);panel.cacheLeft=leftTick;panel.cacheRight=rightTick;parameters.noChange=true;cached++;}
else{panel.cacheLeft=1000000;panel.cacheRight=-1;panel.cacheHigh=yAxis.high;panel.cacheLow=yAxis.low;notcached++;}
var idealX=chart.xAxis.idealTickSizePixels?chart.xAxis.idealTickSizePixels:chart.xAxis.autoComputedTickSizePixels;if(yAxis.goldenRatioYAxis){if(M2t.q6y(yAxis.idealTickSizePixels,idealX/1.618))parameters.noChange=false;}
if(!parameters.noChange){var height=yAxis.height=M2t.K6y(yAxis.bottom,yAxis.top),pricePerPix=M2t.u6y((yAxis.high-yAxis.low),(height-yAxis.zoom));if(parameters.ground){yAxis.high=(M2t.s6y(yAxis.high,yAxis.low))+M2t.D6y(yAxis.zoom,pricePerPix);yAxis.low=0;}
else{yAxis.high=yAxis.high+M2t.x6y((yAxis.zoom/2),pricePerPix)+M2t.n6y(yAxis.scroll,pricePerPix);yAxis.low=M2t.a6y(yAxis.low,(yAxis.zoom/2)*pricePerPix,yAxis.scroll*pricePerPix);}
if(yAxis.min||M2t.Z6y(yAxis.min,0))yAxis.low=yAxis.min;if(yAxis.max||M2t.A1y(yAxis.max,0))yAxis.high=yAxis.max;yAxis.shadow=M2t.r1y(yAxis.high,yAxis.low);if(yAxis.semiLog&&(!this.activeDrawing||M2t.Q1y(this.activeDrawing.name,"projection"))){yAxis.logHigh=M2t.B1y(Math.log(yAxis.high),Math.LN10);yAxis.logLow=M2t.k1y(Math.log(yAxis.low),Math.LN10);if(M2t.T1y(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=M2t.v1y(yAxis.logHigh,yAxis.logLow);}
var fontHeight;if(yAxis.goldenRatioYAxis&&isAChart){yAxis.idealTickSizePixels=M2t.g1y(idealX,1.618);if(M2t.q1y(yAxis.idealTickSizePixels,0)){fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.idealTickSizePixels=M2t.K1y(fontHeight,5);}
}
else{if(!yAxis.idealTickSizePixels){fontHeight=this.getCanvasFontSize("stx_yaxis");if(isAChart){yAxis.idealTickSizePixels=M2t.u1y(fontHeight,5);}
else{yAxis.idealTickSizePixels=M2t.s1y(fontHeight,2);}
}
}
var idealTicks=Math.round(M2t.D1y(height,yAxis.idealTickSizePixels)),shadow=parameters.range?M2t.x1y(parameters.range[1],parameters.range[0]):yAxis.shadow;yAxis.priceTick=Math.floor(M2t.n1y(shadow,idealTicks));var n=1;for(var zz=0;M2t.a1y(zz,10);zz++){if(M2t.w1y(yAxis.priceTick,0))break;n*=10;yAxis.priceTick=M2t.b5y(Math.floor(shadow/idealTicks*n),n);}
if(M2t.h5y(zz,10))yAxis.priceTick=0.00000001;yAxis.priceTick=M2t.P5y(Math.round(shadow/idealTicks*n),n);var verticalTicks=Math.round(M2t.R5y(shadow,yAxis.priceTick));if(parameters.range&&M2t.V5y(verticalTicks,shadow)&&!yAxis.noEvenDivisorTicks){while(M2t.E5y(verticalTicks,1)){if(M2t.O5y(shadow%verticalTicks,0))break;verticalTicks--;}
yAxis.priceTick=M2t.M5y(shadow,verticalTicks);}
if(yAxis.minimumPriceTick){yAxisPriceTick=yAxis.minimumPriceTick;fontHeight=this.getCanvasFontSize("stx_yaxis");for(var i=0;M2t.d5y(i,100);i++){var numberOfTicks=M2t.j5y(shadow,yAxisPriceTick);if(M2t.F5y(height/numberOfTicks,fontHeight*2))yAxisPriceTick*=2;else break;}
if(M2t.I5y(i,100))yAxis.priceTick=yAxisPriceTick;}
yAxis.multiplier=M2t.N5y(yAxis.height,yAxis.shadow);}
if(!this.activeDrawing||M2t.m5y(this.activeDrawing.name,(Q7Y+U4Y+h2Y+O2Y+R2Y))){yAxis.high=this.valueFromPixel(panel.top,panel,yAxis);if(yAxis.semiLog){yAxis.logHigh=M2t.p5y(Math.log(yAxis.high),Math.LN10);yAxis.logLow=M2t.X5y(Math.log(yAxis.low),Math.LN10);if(M2t.f5y(yAxis.low,0))yAxis.logLow=0;yAxis.logShadow=M2t.t2y(yAxis.logHigh,yAxis.logLow);}
yAxis.shadow=M2t.L2y(yAxis.high,yAxis.low);}
yAxis.multiplier=M2t.S2y(yAxis.height,yAxis.shadow);if(!yAxis.decimalPlaces&&M2t.C2y(yAxis.decimalPlaces,0)){if(isAChart){var labelDecimalPlaces=0;if(M2t.H2y(panel.yAxis.shadow,1000))labelDecimalPlaces=2;if(M2t.o2y(panel.yAxis.shadow,1))labelDecimalPlaces=4;yAxis.printDecimalPlaces=labelDecimalPlaces;}
else yAxis.printDecimalPlaces=null;}
else{yAxis.printDecimalPlaces=yAxis.decimalPlaces;}
this.runAppend("createYAxis",arguments);}
;STXChart.prototype.drawYAxis=function(panel,parameters){var N0Y="rde",N9Y="bo",V3Y="ft",d8m="_gr",e4Y="xis",E6Y="drawYAxis";if(this.runPrepend(E6Y,arguments))return ;if(!parameters)parameters={}
;var yAxis=parameters.yAxis?parameters.yAxis:panel.yAxis;if(!parameters.noDraw&&!yAxis.noDraw){if(!yAxis.yAxisPlotter||!parameters.noChange){var chart=panel.chart,isAChart=(M2t.Y2y(panel.name,chart.name)&&M2t.l2y(yAxis,panel.yAxis));if(!yAxis.priceTick)return ;var shadow=yAxis.shadow;if(parameters.range){shadow=M2t.y2y(parameters.range[M2t.V9N],parameters.range[M2t.k9N]);}
var verticalTicks=M2t.i2y(shadow,yAxis.priceTick);verticalTicks=Math.round(verticalTicks);var logStart,logPriceTick;if(yAxis.semiLog){logStart=M2t.J2y(Math.log(this.valueFromPixel(yAxis.bottom,panel)),Math.LN10);logPriceTick=M2t.z2y((yAxis.logHigh-yAxis.logLow),verticalTicks);}
var textStyle=yAxis.textStyle?yAxis.textStyle:(g5Y+n8m+D3Y+p8Y+e4Y);yAxis.yAxisPlotter=new STX.Plotter();yAxis.yAxisPlotter.newSeries(r8m,y8Y,this.canvasStyle((g5Y+p1Y+J4m+d8m+V7Y)));yAxis.yAxisPlotter.newSeries(m1Y,m0Y,this.colorOrStyle(textStyle));yAxis.yAxisPlotter.newSeries(h3m,y8Y,this.canvasStyle(I8Y));var priceOffset=M2t.k9N,high=parameters.range?parameters.range[M2t.V9N]:yAxis.high,low=parameters.range?parameters.range[M2t.k9N]:yAxis.low,drawBorders=(M2t.G2y(yAxis.displayBorder,t9Y)?chart.panel.yAxis.displayBorder:yAxis.displayBorder);if(M2t.e2y(this.axisBorders,y0m))drawBorders=y0m;if(M2t.c2y(this.axisBorders,r9Y))drawBorders=r9Y;var edgeOfAxis,position=(M2t.U2y(yAxis.position,t9Y)?chart.panel.yAxis.position:yAxis.position);if(M2t.W2y(position,(f1Y+V3Y))){edgeOfAxis=yAxis.left+yAxis.width;}
else{edgeOfAxis=yAxis.left;}
var borderEdge=Math.round(edgeOfAxis)+w3Y,tickWidth=drawBorders?M2t.C9N:M2t.k9N;if(M2t.Z2y(position,x7m))tickWidth=drawBorders?-M2t.C9N:M2t.k9N;if(isAChart)priceOffset=M2t.A9y(yAxis.priceTick,Math.round((low%yAxis.priceTick)*panel.chart.roundit)/panel.chart.roundit);else priceOffset=M2t.r9y(high,yAxis.priceTick);var fontHeight=this.getCanvasFontSize(O7Y);for(var i=M2t.k9N;M2t.Q9y(i,verticalTicks);i++){var price;if(yAxis.semiLog){var logPrice=logStart+(M2t.B9y(i,logPriceTick));price=Math.pow(l8m,logPrice);}
else{if(isAChart)price=low+M2t.k9y(i,yAxis.priceTick)+priceOffset;else price=M2t.T9y(high,(i*yAxis.priceTick),priceOffset);}
var y=this.pixelFromPrice(price,panel,yAxis),y2=Math.round(y)+w3Y;if(M2t.l9y((y2+fontHeight/M2t.B9N),panel.bottom))continue;if(M2t.y9y((y2-fontHeight/M2t.B9N),panel.top))continue;if(yAxis.displayGridLines){yAxis.yAxisPlotter.moveTo("grid",panel.left,y2);yAxis.yAxisPlotter.lineTo("grid",panel.right,y2);}
if(drawBorders){yAxis.yAxisPlotter.moveTo("border",M2t.i9y(borderEdge,0.5),y2);yAxis.yAxisPlotter.lineTo("border",borderEdge+tickWidth,y2);}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price);}
else{price=this.formatYAxisPrice(price,panel,t9Y,yAxis);}
var backgroundColor=yAxis.textBackground?this.containerColor:t9Y,textXPosition=edgeOfAxis+tickWidth+M2t.C9N;if(M2t.J9y(position,x7m)){textXPosition=yAxis.left+M2t.C9N;if(yAxis.justifyRight)textXPosition=yAxis.left+yAxis.width+tickWidth-3;}
else{if(yAxis.justifyRight)textXPosition=edgeOfAxis+yAxis.width;}
yAxis.yAxisPlotter.addText(m1Y,price,textXPosition,y2,backgroundColor,t9Y,fontHeight);}
if(drawBorders){var b=Math.round(yAxis.bottom)+w3Y;yAxis.yAxisPlotter.moveTo("border",borderEdge,yAxis.top);yAxis.yAxisPlotter.lineTo((N9Y+N0Y+B5Y),borderEdge,b);yAxis.yAxisPlotter.draw(this.chart.context,(N9Y+B5Y+F4Y+n4Y+B5Y));}
}
this.plotYAxisGrid(panel);}
this.runAppend(E6Y,arguments);}
;STXChart.prototype.plotYAxisGrid=function(panel){if(this.runPrepend(V7m,arguments))return ;var context=this.chart.context;panel.yAxis.yAxisPlotter.draw(context,r8m);this.runAppend(V7m,arguments);}
;STXChart.prototype.plotYAxisText=function(panel){if(this.runPrepend("plotYAxisText",arguments))return ;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;M2t.z9y(i,arr.length);i++){var yAxis=arr[i];if(!yAxis.yAxisPlotter)continue;if(yAxis.noDraw)continue;this.canvasFont("stx_yaxis");this.canvasColor("stx_yaxis");var context=this.chart.context;context.textBaseline="middle";if(yAxis.justifyRight)context.textAlign="right";else context.textAlign="left";var fontHeight=this.getCanvasFontSize("stx_yaxis");yAxis.yAxisPlotter.draw(context,"text");context.textBaseline="alphabetic";context.textAlign="left";}
this.runAppend("plotYAxisText",arguments);}
;STXChart.prototype.formatYAxisPrice=function(price,panel,requestedDecimalPlaces,yAxis){if(M2t.G9y(price,null)||typeof price=="undefined")return "";var yax=yAxis?yAxis:panel.yAxis,decimalPlaces=requestedDecimalPlaces;if(!decimalPlaces&&M2t.e9y(decimalPlaces,0))decimalPlaces=yax.printDecimalPlaces;if(!decimalPlaces&&M2t.c9y(decimalPlaces,0)){if(M2t.U9y(yax.priceTick,0.01))decimalPlaces=4;else if(M2t.W9y(yax.priceTick,0.1))decimalPlaces=2;else if(M2t.Z9y(yax.priceTick,1))decimalPlaces=1;else decimalPlaces=0;}
if(M2t.A7a(panel.name,panel.chart.name)){if(M2t.r7a(yax.priceTick,100)){return STX.condenseInt(price);}
}
if(this.internationalizer){if(M2t.Q7a(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=M2t.B7a(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.formatPrice=function(price,panel){var H1Y="unde";if(!price||typeof price==(H1Y+D9Y+n4m+k6Y))return "";if(!panel)panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(!panel)return price;var decimalPlaces=panel.decimalPlaces;if(!decimalPlaces&&M2t.k7a(decimalPlaces,0)){decimalPlaces=panel.chart.decimalPlaces;}
if(!decimalPlaces&&M2t.T7a(decimalPlaces,0)){return price;}
if(this.internationalizer){if(M2t.v7a(decimalPlaces,this.internationalizer.priceFormatters.length))decimalPlaces=M2t.g7a(this.internationalizer.priceFormatters.length,1);price=this.internationalizer.priceFormatters[decimalPlaces].format(price);}
else{price=price.toFixed(decimalPlaces);}
return price;}
;STXChart.prototype.createCrosshairs=function(){var h8Y="createCrosshairs";if(this.runPrepend(h8Y,arguments))return ;if(this.controls.crossX.onmousedown)return ;this.controls.crossY.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return y0m;}
;this.controls.crossX.onmousedown=function(e){if(!e)e=event;if(e.preventDefault)e.preventDefault();return y0m;}
;this.runAppend(h8Y,arguments);}
;STXChart.prototype.determineMinMax=function(quotes,fields,sum,bypassTransform){var highValue=Number.MAX_VALUE*-1,lowValue=Number.MAX_VALUE,isTransform=false;for(var i=0;M2t.q7a(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(!bypassTransform){if(quote.transform){isTransform=true;quote=quote.transform;}
else if(isTransform)continue;}
var acc=0;for(var j=0;M2t.K7a(j,fields.length);j++){var val=quote[fields[j]];if(val||M2t.u7a(val,0)){if(sum){acc+=val;if(M2t.s7a(acc,highValue))highValue=acc;if(M2t.D7a(acc,lowValue))lowValue=acc;}
else{if(M2t.x7a(val,highValue))highValue=val;if(M2t.n7a(val,lowValue))lowValue=val;}
}
}
}
return [lowValue,highValue];}
;STXChart.prototype.calculateYAxisRange=function(panel,yAxis,low,high){if(M2t.a7a(low,Number.MAX_VALUE)){low=0;high=0;}
var cheight=panel.height,newHigh=null,newLow=null;if(!yAxis.bottomOffset)yAxis.bottomOffset=this.xaxisHeight;yAxis.bottom=M2t.w7a(panel.bottom,yAxis.bottomOffset);yAxis.top=panel.top;yAxis.height=M2t.b8a(yAxis.bottom,yAxis.top);var verticalPad=Math.round(Math.abs(M2t.h8a(cheight,5)));if(M2t.P8a(cheight-Math.abs(yAxis.scroll),verticalPad)){yAxis.scroll=(M2t.R8a(cheight,verticalPad))*(M2t.V8a(yAxis.scroll,0)?-1:1);}
var pricePerPix=M2t.E8a((high-low),yAxis.height);if(low||M2t.O8a(low,0)){if(M2t.M8a(high-low,0)){newHigh=M2t.d8a(high,2);newLow=0;}
else{if((this.layout.semiLog||M2t.j8a(this.layout.chartScale,(I9Y+W9Y)))&&newHigh){var logLow=M2t.F8a(Math.log(low),Math.LN10),logHigh=M2t.I8a(Math.log(high),Math.LN10);newHigh=Math.pow(10,logHigh);newLow=Math.pow(10,logLow);}
else{newHigh=high;newLow=low;}
}
yAxis.high=newHigh;yAxis.low=newLow;}
if(yAxis.max||M2t.N8a(yAxis.max,0))yAxis.high=yAxis.max;if(yAxis.min||M2t.m8a(yAxis.min,0))yAxis.low=yAxis.min;yAxis.shadow=M2t.p8a(yAxis.high,yAxis.low);if(M2t.X8a(panel.chart.name,panel.name)&&M2t.f8a(panel.yAxis,yAxis)){var isLogScale=(this.layout.semiLog||M2t.t0a(this.layout.chartScale,"log"));if(M2t.L0a(yAxis.semiLog,isLogScale)){this.clearPixelCache();yAxis.semiLog=isLogScale;}
}
}
;STXChart.prototype.renderYAxis=function(chart){var l5Y="YAx",O8m="ren";if(this.runPrepend("renderYAxis",arguments))return ;var panel=chart.panel,arr=panel.yaxisRHS.concat(panel.yaxisLHS),i;for(i=0;M2t.S0a(i,arr.length);i++){var yAxis=arr[i],low=null,high=null;if(M2t.C0a(panel.yAxis,yAxis)){low=chart.lowValue;high=chart.highValue;}
this.calculateYAxisRange(panel,yAxis,low,high);}
var parameters={}
;for(i=0;M2t.H0a(i,arr.length);i++){parameters.yAxis=arr[i];this.createYAxis(panel,parameters);this.drawYAxis(panel,parameters);}
this.runAppend((O8m+q4Y+l5Y+K9Y+g5Y),arguments);}
;STXChart.prototype.initializeDisplay=function(chart){var R1Y="initializeDisplay";if(this.runPrepend(R1Y,arguments))return ;var fields=[];for(var field in chart.series){if(chart.series[field].parameters.shareYAxis)fields.push(field);}
var panel=chart.panel=this.panels[chart.name],minMax;if(!STXChart.chartShowsHighs(this.layout.chartType)){fields.push(p6Y);minMax=this.determineMinMax(chart.dataSegment,fields);if(M2t.o0a(this.layout.chartType,m8Y)){var base=chart.baseline.actualLevel;if(chart.transformFunc)base=chart.transformFunc(this,chart,base);var diff=Math.max(M2t.Y0a(base,minMax[M2t.k9N]),M2t.l0a(minMax[M2t.V9N],base));if(this.repositioningBaseline){minMax=[chart.lowValue,chart.highValue];}
else{minMax[M2t.k9N]=M2t.y0a(base,diff);minMax[M2t.V9N]=base+diff;}
}
}
else{fields.push(p6Y,E7Y,d1Y);minMax=this.determineMinMax(chart.dataSegment,fields);}
chart.lowValue=minMax[M2t.k9N];chart.highValue=minMax[M2t.V9N];this.runAppend(R1Y,arguments);}
;STXChart.prototype.computePosition=function(x,offset){if(typeof offset==i9N)offset=M2t.k9N;var position=M2t.i0a(x,this.layout.candleWidth)+offset+this.micropixels;return position;}
;STXChart.prototype.computeColor=function(open,close){if(M2t.J0a(open,close))return Z2N;if(M2t.z0a(open,close))return p9N;return f2Y;}
;STXChart.prototype.computeLength=function(high,low){var h=this.pixelFromPrice(high),l=this.pixelFromPrice(low);return M2t.G0a(l,h);}
;STXChart.prototype.setSeriesRenderer=function(renderer){var params=renderer.params;if(this.chart.seriesRenderers[renderer.params.name])return this.chart.seriesRenderers[renderer.params.name];if(params.yAxis){this.addYAxis(this.panels[params.panel],params.yAxis);}
renderer.stx=this;this.chart.seriesRenderers[renderer.params.name]=renderer;return renderer;}
;STXChart.prototype.removeSeriesRenderer=function(renderer){for(var r in this.chart.seriesRenderers){if(M2t.e0a(renderer.params.name,this.chart.seriesRenderers[r].params.name)){var toDelete=this.chart.seriesRenderers[renderer.params.name],yAxis=toDelete.params.yAxis,panel=this.panels[toDelete.params.panel];delete  this.chart.seriesRenderers[renderer.params.name];this.deleteYAxisIfUnused(panel,yAxis);return ;}
}
}
;STXChart.prototype.getSeriesRenderer=function(name){return this.chart.seriesRenderers[name];}
;STXChart.prototype.drawHistogram=function(params,seriesParams){if(!seriesParams||!seriesParams.length)return ;var panelName=params.panel;if(!panelName)panelName="chart";var c=this.panels[panelName];if(!c)return ;var yAxis=params.yAxis?params.yAxis:c.yAxis,b=Math.floor(yAxis.bottom)+0.5,t=Math.floor(yAxis.top)+0.5,type=params.type;if(M2t.c0a(type,"histogram"))type=params.subtype;var quotes=this.chart.dataSegment,bordersOn=false;this.getDefaultColor();var sp;for(sp=0;M2t.U0a(sp,seriesParams.length);sp++){bordersOn|=(seriesParams[sp].border_color_up&&!STX.isTransparent(seriesParams[sp].border_color_up));bordersOn|=(seriesParams[sp].border_color_down&&!STX.isTransparent(seriesParams[sp].border_color_down));}
if(!params.name)params.name="Data";var multiplier=yAxis.multiplier;if(!params.heightPercentage)params.heightPercentage=0.7;if(!params.widthFactor)params.widthFactor=0.8;if(!params.bindToYAxis){var histMax=0;if(!histMax){for(var i=0;M2t.W0a(i,this.chart.maxTicks);i++){var prices=quotes[i];if(!prices)continue;var total=0;for(sp=0;M2t.Z0a(sp,seriesParams.length);sp++){if(prices[seriesParams[sp].field]){if(M2t.A4a(params.subtype,"stacked"))total+=prices[seriesParams[sp].field];else total=Math.max(total,prices[seriesParams[sp].field]);}
}
if(M2t.r4a(total,histMax))histMax=total;}
if(M2t.Q4a(histMax,0)){this.watermark(panelName,"center","bottom",this.translateIf(params.name+" Not Available"));return ;}
}
multiplier=M2t.B4a((b-t),params.heightPercentage,histMax);}
this.startClip(panelName);var context=this.chart.context,negativeOffset=M2t.o4a((c.chart.tmpWidth-this.layout.candleWidth),2),shaveOff=Math.max(0,M2t.Y4a((1-params.widthFactor),this.layout.candleWidth,2)),tops={}
,bottoms={}
,self=this;function drawBars(field,color,opacity,isBorder,isUp,shift,candleWidth){if(!opacity)opacity=1;if(STX.isIE8)context.globalAlpha=0.5;else context.globalAlpha=opacity;var offset=0.5;if(M2t.M4a(c.chart.tmpWidth,1))offset=0;context.beginPath();var prevTop=b+0.5,farLeft=(bordersOn?c.left+0.5:c.left),prevRight=farLeft;for(var i=0;M2t.d4a(i,quotes.length);i++){var bottom=bottoms[i];if(!bottom)bottom=b;if(M2t.j4a(i,0))prevTop=bottom;var quote=quotes[i];if(!quote){prevTop=bottom;prevRight+=self.layout.candleWidth;continue;}
var y=M2t.F4a(quote[field],multiplier);if(isNaN(y))continue;var top=Math.min(Math.floor(M2t.I4a(bottom,y))+0.5,bottom);if(isUp){if(M2t.N4a(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=self.layout.candleWidth;continue;}
}
else{if(M2t.m4a(quote.Close,quote.iqPrevClose)){prevTop=top;prevRight+=self.layout.candleWidth;continue;}
}
var x0,x1;if(bordersOn){x0=Math.floor(prevRight+Math.floor(negativeOffset)+self.micropixels+shaveOff+offset+M2t.p4a(shift,candleWidth));x1=Math.floor(prevRight+Math.floor(negativeOffset)+self.micropixels+shaveOff+candleWidth+offset+M2t.X4a(shift,candleWidth));x0=Math.max(x0,farLeft);}
else{x0=c.left+M2t.f4a(i,self.layout.candleWidth)+Math.floor(negativeOffset)+self.micropixels+shaveOff+offset+M2t.t3a(shift,candleWidth);x1=x0+candleWidth;}
if(M2t.L3a(x1-x0,2))x1=x0+1;context.moveTo(x0+offset,bottom);if(M2t.S3a(b,bottom)){context.lineTo(x1,bottom);}
else{context.moveTo(x1,bottom);if(isBorder&&!shaveOff){if(bottoms[i+1])context.moveTo(x1,Math.max(top,Math.min(bottom,bottoms[i+1])));}
}
context.lineTo(x1,top);context.lineTo(x0,top);if(isBorder&&shift){if(M2t.C3a(tops[i],top)||M2t.H3a(i,0))context.lineTo(x0,Math.min(bottom,tops[i]));}
else if(isBorder&&!shaveOff&&M2t.o3a(type,"clustered")){if(M2t.Y3a(i,0)&&tops[M2t.l3a(i,1)]&&M2t.y3a(tops[i-1],top))context.lineTo(x0,Math.min(bottom,tops[M2t.i3a(i,1)]));}
else if(isBorder&&!shaveOff){if(M2t.J3a(prevTop,top)||M2t.z3a(i,0))context.lineTo(x0,Math.min(bottom,prevTop));}
else{context.lineTo(x0,bottom);}
prevTop=top;prevRight+=self.layout.candleWidth;if(M2t.G3a(type,"clustered")||isBorder)tops[i]=top;}
if(!color)color="auto";if(isBorder){context.strokeStyle=M2t.e3a(color,"auto")?self.defaultColor:color;context.stroke();}
else{context.fillStyle=M2t.c3a(color,(g4Y+j3Y+O2Y))?self.defaultColor:color;context.fill();}
context.closePath();}
for(sp=0;M2t.U3a(sp,seriesParams.length);sp++){var param=seriesParams[sp],candleWidth=M2t.W3a(this.layout.candleWidth,params.widthFactor),shift=0;if(M2t.Z3a(type,"clustered")){shift=sp;candleWidth/=seriesParams.length;}
drawBars(param.field,param.fill_color_up,param.opacity_up,null,true,shift,candleWidth);drawBars(param.field,param.fill_color_down,param.opacity_down,null,null,shift,candleWidth);if(M2t.A6a(this.layout.candleWidth,2)&&bordersOn){drawBars(param.field,param.border_color_up,param.opacity_up,true,true,shift,candleWidth);drawBars(param.field,param.border_color_down,param.opacity_down,true,null,shift,candleWidth);}
if(M2t.r6a(type,"stacked"))bottoms=STX.shallowClone(tops);}
context.globalAlpha=1;this.endClip();}
;STXChart.prototype.startClip=function(panelName,allowYAxis){if(!panelName)panelName="chart";var panel=this.panels[panelName],yAxis=panel.yAxis;this.chart.context.save();this.chart.context.beginPath();var left=panel.left,width=panel.width;if(allowYAxis){left=0;width=this.width;}
this.chart.context.rect(left,panel.top,width,yAxis.height);this.chart.context.clip();}
;STXChart.prototype.endClip=function(){this.chart.context.restore();}
;STXChart.prototype.drawCandlesHighPerformance=function(panel,fillColor,borderColor,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderOffset=0;if(borderColor&&!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=M2t.Q6a(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();context.fillStyle=fillColor;var yAxis=panel.yAxis;for(var x=0;M2t.B6a(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(M2t.k6a(quote.Open,quote.Close))continue;if(M2t.T6a(condition,STXChart.CANDLEUP)&&M2t.v6a(quote.Open,quote.Close))continue;if(M2t.g6a(condition,STXChart.CANDLEDOWN)&&M2t.q6a(quote.Open,quote.Close))continue;if(M2t.K6a(condition,STXChart.CLOSEUP)&&M2t.u6a(quote.Close,quote.iqPrevClose))continue;if(M2t.s6a(condition,STXChart.CLOSEDOWN)&&M2t.D6a(quote.Close,quote.iqPrevClose))continue;if(M2t.x6a(condition,STXChart.CLOSEEVEN)&&M2t.n6a(quote.Close,quote.iqPrevClose))continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(M2t.a6a(tick,panel.cacheLeft)||M2t.w6a(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(M2t.b1a((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(M2t.h1a((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(M2t.P1a(bottom,top));if(M2t.R1a(top,t)){if(M2t.V1a(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=M2t.E1a(t,top);top=t;}
if(M2t.O1a(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(M2t.M1a(cache.open,b))continue;if(M2t.d1a(cache.close,t))continue;var x0=panel.left+Math.floor(M2t.j1a(x,this.layout.candleWidth)+this.micropixels)+borderOffset,x1=x0+chart.tmpWidth-(M2t.F1a(borderOffset,2));if(M2t.I1a(quote.Open,quote.Close)){top=M2t.N1a(Math.round(cache.open),borderOffset);context.moveTo(x0,top);context.lineTo(x1,top);}
else{context.moveTo(x0,cache.open);context.lineTo(x1,cache.open);context.lineTo(x1,cache.close);context.lineTo(x0,cache.close);context.lineTo(x0,cache.open);}
}
context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
context.closePath();}
;STXChart.prototype.drawCandles=function(panel,colorFunction,isOutline){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context,t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,borderColor="transparent",fillColor="transparent",borderOffset=0;if(!STX.isTransparent(borderColor))borderOffset=0.5;var leftTick=M2t.m1a(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis;for(var x=0;M2t.p1a(x,quotes.length);x++){context.beginPath();var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(!quote.Open&&M2t.X1a(quote.Open,0))continue;if(M2t.f1a(quote.Open,quote.Close))continue;var myColor=colorFunction(this,quote,isOutline?"outline":"solid");if(!myColor)continue;if(isOutline)borderColor=myColor;else fillColor=myColor;context.fillStyle=fillColor;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(M2t.t5a(tick,panel.cacheLeft)||M2t.L5a(tick,panel.cacheRight)||!cache.open){var o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(M2t.S5a((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top),c=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(M2t.C5a((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);top=Math.floor(Math.min(o,c))+borderOffset;bottom=Math.max(o,c);length=Math.floor(M2t.H5a(bottom,top));if(M2t.o5a(top,t)){if(M2t.Y5a(top+length,t)){cache.open=top;cache.close=top;continue;}
length-=M2t.l5a(t,top);top=t;}
if(M2t.y5a(top+length,b)){length-=(top+length-b);}
length=Math.max(length,2);cache.open=top;cache.close=cache.open+length;}
if(M2t.i5a(cache.open,b))continue;if(M2t.J5a(cache.close,t))continue;var x0=panel.left+Math.floor(M2t.z5a(x,this.layout.candleWidth)+this.micropixels)+borderOffset,x1=x0+chart.tmpWidth-(M2t.G5a(borderOffset,2));if(M2t.e5a(quote.Open,quote.Close)){top=M2t.c5a(Math.round(cache.open),borderOffset);context.moveTo(x0,top);context.lineTo(x1,top);}
else{context.moveTo(x0,cache.open);context.lineTo(x1,cache.open);context.lineTo(x1,cache.close);context.lineTo(x0,cache.close);context.lineTo(x0,cache.open);}
if(M2t.U5a(fillColor,"transparent"))context.fill();if(borderOffset){context.lineWidth=1;context.strokeStyle=borderColor;context.stroke();}
}
}
;STXChart.prototype.drawShadowsHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=M2t.W5a(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks;context.beginPath();var yAxis=panel.yAxis,centerOffset=M2t.Z5a(chart.tmpWidth,2);for(var x=0;M2t.A2a(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;if(condition){if(M2t.r2a(condition,STXChart.CANDLEUP)&&M2t.Q2a(quote.Open,quote.Close))continue;else if(M2t.B2a(condition,STXChart.CANDLEDOWN)&&M2t.k2a(quote.Open,quote.Close))continue;else if(M2t.T2a(condition,STXChart.CLOSEUP)&&M2t.v2a(quote.Close,quote.iqPrevClose))continue;else if(M2t.g2a(condition,STXChart.CLOSEDOWN)&&M2t.q2a(quote.Close,quote.iqPrevClose))continue;else if(M2t.K2a(condition,STXChart.CLOSEEVEN)&&M2t.u2a(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(M2t.s2a(tick,panel.cacheLeft)||M2t.D2a(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(M2t.x2a((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(M2t.n2a((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=M2t.a2a(bottom,top);if(M2t.w2a(top,t)){if(M2t.b9a(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=M2t.h9a(t,top);top=t;}
if(M2t.P9a(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(M2t.R9a(cache.top,b))continue;if(M2t.V9a(cache.bottom,t))continue;var xx=panel.left+Math.floor(Math.floor(M2t.E9a(x,this.layout.candleWidth)+this.micropixels)+centerOffset)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(M2t.O9a(quote.Open,quote.Close)){var x0=M2t.M9a(xx,this.offset),x1=xx+this.offset,o=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(M2t.d9a((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);if(M2t.j9a(o,b)&&M2t.F9a(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
}
this.canvasColor(style);context.stroke();context.closePath();}
;STXChart.prototype.drawShadows=function(panel,colorFunction){var R0Y="sh",chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=this.chart.context;context.lineWidth=1;var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,left,leftTick=M2t.I9a(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,centerOffset=M2t.N9a(chart.tmpWidth,2);for(var x=0;M2t.m9a(x,quotes.length);x++){context.beginPath();var quote=quotes[x];if(!quote)continue;if(quote.projection)continue;var color=colorFunction(this,quote,(R0Y+g4Y+F4Y+H3Y));if(!color)continue;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(M2t.p9a(tick,panel.cacheLeft)||M2t.X9a(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(M2t.f9a((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(M2t.t7G((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);var length=M2t.L7G(bottom,top);if(M2t.S7G(top,t)){if(M2t.C7G(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=M2t.H7G(t,top);top=t;}
if(M2t.o7G(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=cache.top+length;}
if(M2t.Y7G(cache.top,b))continue;if(M2t.l7G(cache.bottom,t))continue;var xx=panel.left+Math.floor(Math.floor(M2t.y7G(x,this.layout.candleWidth)+this.micropixels)+centerOffset)+0.5;context.moveTo(xx,cache.top);context.lineTo(xx,cache.bottom);if(M2t.i7G(quote.Open,quote.Close)||(!quote.Open&&M2t.J7G(quote.Open,0))){var x0=M2t.z7G(xx,this.offset),x1=xx+this.offset,o=Math.floor((yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(M2t.G7G((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top))+0.5;if(M2t.e7G(o,b)&&M2t.c7G(o,t)){context.moveTo(x0,o);context.lineTo(x1,o);}
}
context.strokeStyle=color;context.stroke();}
}
;STXChart.prototype.scatter=function(panel){var H5Y="catt",chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();context.lineWidth=4;var t=panel.yAxis.top,b=panel.yAxis.bottom;for(var x=0;M2t.U7G(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(!quote.projection){if(quote.transform)quote=quote.transform;var scatter=[quote.Close];if(M2t.W7G((m9N+H5Y+A3Y),quote))scatter=quote.Scatter;for(var i=0;M2t.Z7G(i,scatter.length);i++){var top=this.pixelFromPrice(scatter[i],panel);if(M2t.A8G(top,t))continue;if(M2t.r8G(top,b))continue;var xx=panel.left+M2t.Q8G(x,this.layout.candleWidth)+this.micropixels,xxo=xx+this.offset;context.moveTo(M2t.B8G(xxo,2),top);context.lineTo(xxo+2,top);}
}
}
this.canvasColor("stx_scatter_chart");context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawKagiSquareWave=function(panel,upStyleName,downStyleName){var chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context,upStyle=this.canvasStyle(upStyleName),downStyle=this.canvasStyle(downStyleName);this.canvasColor(upStyleName);var upColor=context.strokeStyle;this.canvasColor(downStyleName);var downColor=context.strokeStyle,upWidth=1;if(upStyle.width&&M2t.k8G(parseInt(upStyle.width,10),25)){upWidth=Math.max(1,STX.stripPX(upStyle.width));}
var downWidth=1;if(downStyle.width&&M2t.T8G(parseInt(downStyle.width,10),25)){downWidth=Math.max(1,STX.stripPX(downStyle.width));}
context.beginPath();var leftTick=M2t.v8G(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis,first=true,previousOpen=null,lastClose=null,trend=null;for(var x=0;M2t.g8G(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(M2t.q8G(tick,panel.cacheLeft)||M2t.K8G(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(M2t.u8G((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(M2t.s8G((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xx=panel.left+M2t.D8G(x,this.layout.candleWidth)+this.micropixels,xxo=xx+this.offset,xx2=Math.round(xxo)+0.5;lastClose=cache.close;if(first){context.moveTo(xx2,cache.open);previousOpen=cache.open;if(M2t.x8G(cache.close,cache.open))trend=1;else trend=-1;first=false;}
if(trend!=-1&&M2t.n8G(cache.close,previousOpen)&&M2t.a8G(previousOpen,cache.open)){context.lineTo(xx2,previousOpen);context.strokeStyle=downColor;context.lineWidth=downWidth;context.stroke();context.closePath();context.beginPath();trend=-1;context.moveTo(xx2,previousOpen);}
else if(M2t.w8G(trend,1)&&M2t.b0G(cache.close,previousOpen)&&M2t.h0G(previousOpen,cache.open)){context.lineTo(xx2,previousOpen);context.strokeStyle=upColor;context.lineWidth=upWidth;context.stroke();context.closePath();context.beginPath();trend=1;context.moveTo(xx2,previousOpen);}
context.lineTo(xx2,cache.close);if(M2t.P0G(x+1,quotes.length)){context.lineTo(xx2+this.layout.candleWidth,cache.close);previousOpen=cache.open;}
}
if(trend==-1||(M2t.R0G(trend,null)&&M2t.V0G(lastClose,previousOpen))){context.strokeStyle=upColor;context.lineWidth=upWidth;}
else{context.strokeStyle=downColor;context.lineWidth=downWidth;}
context.stroke();context.closePath();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawPointFigureChart=function(panel,style,condition){var Y0Y=1039749,m2Y="orde",I2N=2998599,u6Y=1391306707,B2Y=399821183,chart=panel.chart;this.startClip(panel.name);var quotes=chart.dataSegment,context=chart.context;this.canvasColor(style);var pfstyle=this.canvasStyle(style),paddingTop=parseInt(pfstyle.paddingTop,10),paddingBottom=parseInt(pfstyle.paddingBottom,10),paddingLeft=parseInt(pfstyle.paddingLeft,10),paddingRight=parseInt(pfstyle.paddingRight,10);if(pfstyle.width&&M2t.E0G(parseInt(pfstyle.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(pfstyle.width));}
else{context.lineWidth=2;}
context.beginPath();var box=this.chart.pandf.box,leftTick=M2t.O0G(chart.dataSet.length,chart.scroll),yAxis=panel.yAxis;var o2N=B2Y,E2N=-u6Y,k2N=M2t.B9N;for(var V2N=M2t.V9N;M2t.I5N.s5N(V2N.toString(),V2N.toString().length,I2N)!==o2N;V2N++){this.panelClose(this.panels[panel]);plotter.moveTo((H4Y+m2Y+B5Y),chart.left,bb);loadAllTheData();k2N+=M2t.B9N;}
if(M2t.I5N.s5N(k2N.toString(),k2N.toString().length,Y0Y)!==E2N){plotter.lineTo(h3m,wb,bb);}
var boxes,height,start;for(var x=0;M2t.M0G(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;if(M2t.d0G(condition,"X")&&M2t.j0G(quote.Open,quote.Close))continue;else if(M2t.F0G(condition,"O")&&M2t.I0G(quote.Open,quote.Close))continue;var cache=quote.cache,tick=leftTick+x;if(M2t.N0G(tick,panel.cacheLeft)||M2t.m0G(tick,panel.cacheRight)||!cache.open){cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(M2t.p0G((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(M2t.X0G((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);}
var xx=panel.left+M2t.f0G((x-0.5),this.layout.candleWidth)+this.micropixels+this.offset,xxl=Math.round(xx)+0.5,xxr=xxl+Math.round(this.layout.candleWidth)-0.5;boxes=Math.abs(Math.round(M2t.t4G((quote.Close-quote.Open),box)));height=Math.abs(M2t.L4G((cache.open-cache.close),boxes));var offset=M2t.S4G(height,2);start=cache.open;for(;M2t.C4G(boxes,0);boxes--){if(M2t.H4G(condition,"X")){context.moveTo(xxl+paddingLeft,M2t.o4G(start,paddingBottom,offset));context.lineTo(M2t.O4G(xxr,paddingRight),M2t.M4G(start,height,paddingTop,offset));context.moveTo(xxl+paddingLeft,M2t.i4G(start,height,paddingTop,offset));context.lineTo(M2t.u4G(xxr,paddingRight),M2t.s4G(start,paddingBottom,offset));start-=height;}
else if(M2t.e4G(condition,"O")){context.moveTo(M2t.c4G((xxl+xxr),2),start+paddingTop-offset);context.bezierCurveTo(xxr+paddingRight,start+paddingTop-offset,xxr+paddingRight,start+height-paddingBottom-offset,M2t.U4G((xxl+xxr),2),start+height-paddingBottom-offset);context.bezierCurveTo(M2t.W4G(xxl,paddingLeft),start+height-paddingBottom-offset,M2t.Z4G(xxl,paddingLeft),start+paddingTop-offset,M2t.A3G((xxl+xxr),2),start+paddingTop-offset);start+=height;}
}
}
context.stroke();this.endClip();context.lineWidth=1;}
;STXChart.prototype.drawBarChartHighPerformance=function(panel,style,condition){var chart=panel.chart,quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&M2t.r3G(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var widthOffset=M2t.Q3G(context.lineWidth,2);context.beginPath();var t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=M2t.B3G(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis;for(var x=0;M2t.k3G(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)break;if(condition){if(M2t.T3G(condition,STXChart.CLOSEUP)&&M2t.v3G(quote.Close,quote.iqPrevClose))continue;else if(M2t.g3G(condition,STXChart.CLOSEDOWN)&&M2t.q3G(quote.Close,quote.iqPrevClose))continue;else if(M2t.K3G(condition,STXChart.CLOSEEVEN)&&M2t.u3G(quote.Close,quote.iqPrevClose))continue;}
if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(M2t.s3G(tick,panel.cacheLeft)||M2t.D3G(tick,panel.cacheRight)||!cache.top){top=(yAxis.semiLog?this.pixelFromPrice(quote.High,panel):(M2t.x3G((yAxis.high-quote.High),yAxis.multiplier))+yAxis.top);bottom=(yAxis.semiLog?this.pixelFromPrice(quote.Low,panel):(M2t.n3G((yAxis.high-quote.Low),yAxis.multiplier))+yAxis.top);length=M2t.a3G(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(M2t.w3G((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(M2t.b6G((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(M2t.h6G(top,t)){if(M2t.P6G(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=M2t.R6G(t,top);top=t;}
if(M2t.V6G(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=panel.left+M2t.E6G(x,this.layout.candleWidth)+this.micropixels,xxo=xx+this.offset,xx2=Math.round(xxo)+0.5;if(M2t.O6G(cache.top,b)&&M2t.M6G(cache.bottom,t)){context.moveTo(xx2,cache.top);context.lineTo(xx2,cache.bottom);}
if(M2t.d6G(cache.open,t)&&M2t.j6G(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(xx2+widthOffset,cache.open);}
if(M2t.F6G(cache.close,t)&&M2t.I6G(cache.close,b)){context.moveTo(M2t.N6G(xx2,widthOffset),cache.close);context.lineTo(xxo+this.offset,cache.close);}
}
this.canvasColor(style);context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.drawBarChart=function(panel,style,colorFunction){var chart=panel.chart;if(!chart){chart=panel;panel=panel.chart;}
var quotes=chart.dataSegment,context=chart.context,c=this.canvasStyle(style);if(c.width&&M2t.m6G(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var widthOffset=M2t.p6G(context.lineWidth,2),t=panel.yAxis.top,b=panel.yAxis.bottom,top,bottom,length,leftTick=M2t.X6G(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,yAxis=panel.yAxis,colors={}
;for(var x=0;M2t.f6G(x,quotes.length);x++){var quote=quotes[x];if(!quote)continue;if(quote.projection)break;var color=colorFunction(this,quote);if(!color)continue;colors[color]=1;context.strokeStyle=color;context.beginPath();if(quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+x;if(M2t.t1G(tick,panel.cacheLeft)||M2t.L1G(tick,panel.cacheRight)||!cache.top){top=this.pixelFromPrice(quote.High,panel);bottom=this.pixelFromPrice(quote.Low,panel);length=M2t.S1G(bottom,top);cache.open=(yAxis.semiLog?this.pixelFromPrice(quote.Open,panel):(M2t.C1G((yAxis.high-quote.Open),yAxis.multiplier))+yAxis.top);cache.close=(yAxis.semiLog?this.pixelFromPrice(quote.Close,panel):(M2t.H1G((yAxis.high-quote.Close),yAxis.multiplier))+yAxis.top);if(M2t.o1G(top,t)){if(M2t.Y1G(top+length,t)){cache.top=top;cache.bottom=top;continue;}
length-=M2t.l1G(t,top);top=t;}
if(M2t.y1G(top+length,b)){length-=(top+length-b);}
cache.top=top;cache.bottom=top+length;}
var xx=panel.left+M2t.i1G(x,this.layout.candleWidth)+this.micropixels,xxo=xx+this.offset,xx2=Math.round(xxo)+0.5;if(M2t.J1G(cache.top,b)&&M2t.z1G(cache.bottom,t)){context.moveTo(xx2,cache.top);context.lineTo(xx2,cache.bottom);}
if(M2t.G1G(cache.open,t)&&M2t.e1G(cache.open,b)){context.moveTo(xx,cache.open);context.lineTo(xx2+widthOffset,cache.open);}
if(M2t.c1G(cache.close,t)&&M2t.U1G(cache.close,b)){context.moveTo(M2t.W1G(xx2,widthOffset),cache.close);context.lineTo(xxo+this.offset,cache.close);}
context.stroke();}
context.lineWidth=1;return colors;}
;STXChart.prototype.plotLineChart=function(panel,quotes,field,parameters,colorFunction){var Q5Y="noop",skipProjections=false,skipTransform=false,noSlopes=false;if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;noSlopes=parameters.noSlopes;}
var chart=panel.chart,context=this.chart.context,first=true,yAxis=panel.yAxis,t=yAxis.top,b=yAxis.bottom,leftTick=M2t.Z1G(chart.dataSet.length,chart.scroll),rightTick=leftTick+chart.maxTicks,lastQuote=null,colors={}
,lastXY=[0,0];this.startClip(panel.name);context.beginPath();for(var i=0;M2t.A5G(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(!quote[field]&&M2t.r5G(quote[field],0))continue;if(M2t.Q5G(tick,panel.cacheLeft)||M2t.B5G(tick,panel.cacheRight)||!cache[field]){cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(M2t.k5G((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
var x=panel.left+M2t.T5G(i,this.layout.candleWidth)+this.offset+this.micropixels;if(M2t.v5G(x,panel.right))lastQuote=quote;if(this.extendLastTick&&M2t.g5G(i,quotes.length-1)){x+=this.offset;}
var y=cache[field],pattern=null;if(colorFunction){var color=colorFunction(this,quote);if(!color)continue;if(typeof color=="object"){pattern=color.pattern;color=color.color;}
if(M2t.q5G(context.strokeStyle,color)){if(!first){context.stroke();context.beginPath();context.moveTo(lastXY[0],lastXY[1]);}
context.strokeStyle=color;colors[color]=1;}
}
if(first){first=false;if(noSlopes||M2t.K5G(leftTick,0)){context.moveTo(x,y);}
else if(M2t.u5G(leftTick,0)){var baseline=chart.dataSet[M2t.s5G(leftTick,1)];if(!skipTransform&&baseline.transform)baseline=baseline.transform;var y0=baseline[field];if(!y0||isNaN(y0)){context.moveTo(x,y);}
else{y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(M2t.D5G((yAxis.high-y0),yAxis.multiplier))+yAxis.top);y0=Math.min(Math.max(y0,t),b);var x0=M2t.x5G((i-1),this.layout.candleWidth)+this.offset+this.micropixels;if(pattern){context.dashedLineTo(x0,y0,x,y,pattern);}
else{context.moveTo(x0,y0);context.lineTo(x,y);}
}
}
}
else{if(noSlopes){var quote1=quotes[M2t.n5G(i,1)];if(!quote1)continue;if(!skipTransform&&quote1.transform)quote1=quote1.transform;if(i&&M2t.a5G(y,quote1.cache[field])){if(pattern){context.dashedLineTo(lastXY[0],lastXY[1],x,lastXY[1],pattern);}
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
var yaxisLabelStyle=this.yaxisLabelStyle;if(panel.yAxis.yaxisLabelStyle)yaxisLabelStyle=panel.yAxis.yaxisLabelStyle;var labelcolor=M2t.w5G(yaxisLabelStyle,(m9Y+O2Y+G5Y))?context.strokeStyle:null;this.yAxisLabels.push({src:"plot","args":[panel,txt,lastQuote.cache[field],M2t.b2G(yaxisLabelStyle,(Q5Y))?"#FFFFFF":context.strokeStyle,labelcolor]}
);}
return colors;}
;STXChart.prototype.plotMountainChart=function(panel,quotes,field,parameters){var skipProjections=false,skipTransform=false,reverse=false;if(parameters){skipProjections=parameters.skipProjections;skipTransform=parameters.skipTransform;reverse=parameters.reverse;}
var chart=panel.chart,context=this.chart.context,first=true,t=panel.yAxis.top,b=panel.yAxis.bottom;this.startClip(panel.name);context.beginPath();var leftTick=M2t.h2G(chart.dataSet.length,chart.scroll),firstX=null,firstY=null,yAxis=panel.yAxis,x=0;for(var i=0;M2t.P2G(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(skipProjections&&quote.projection)break;if(!skipTransform&&quote.transform)quote=quote.transform;var cache=quote.cache,tick=leftTick+i;if(M2t.R2G(tick,panel.cacheLeft)||M2t.V2G(tick,panel.cacheRight)||!cache[field]){if(!quote[field]&&M2t.E2G(quote[field],0))continue;cache[field]=(yAxis.semiLog?this.pixelFromPrice(quote[field],panel):(M2t.O2G((yAxis.high-quote[field]),yAxis.multiplier))+yAxis.top);}
x=panel.left+M2t.M2G(i,this.layout.candleWidth)+this.offset+this.micropixels;if(this.extendLastTick&&M2t.d2G(i,quotes.length-1)){x+=this.offset;}
if(M2t.j2G(firstX,null))firstX=x;var y=cache[field];if(M2t.F2G(firstY,null))firstY=y;if(first){first=false;if(M2t.I2G(leftTick,0)){context.moveTo(x,y);}
else{var baseline=chart.dataSet[M2t.N2G(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline[field];y0=(yAxis.semiLog?this.pixelFromPrice(y0,panel):(M2t.m2G((yAxis.high-y0),yAxis.multiplier))+yAxis.top);y0=Math.min(Math.max(y0,t),b);firstX=M2t.p2G(this.offset,this.layout.candleWidth);context.moveTo(firstX,y0);context.lineTo(x,y);}
}
else{context.lineTo(x,y);}
}
context.lineTo(x,reverse?t:b);context.lineTo(firstX,reverse?t:b);if(reverse){if(M2t.X2G(firstY,t))firstY=t;}
else{if(M2t.f2G(firstY,b))firstY=b;}
context.lineTo(firstX,firstY);context.fill();context.closePath();this.endClip();}
;STXChart.prototype.drawLineChart=function(panel,style,colorFunction){var context=this.chart.context,c=this.canvasStyle(style);if(c.width&&M2t.t9G(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor(style);var rc=this.plotLineChart(panel,panel.chart.dataSegment,"Close",{skipProjections:true}
,colorFunction);context.lineWidth=1;return rc;}
;STXChart.prototype.drawMountainChart=function(panel){var context=this.chart.context,c=this.canvasStyle("stx_mountain_chart");if(c.width&&M2t.L9G(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
var top=this.pixelFromPrice(panel.chart.highValue,panel);if(isNaN(top))top=0;var backgroundColor=c.backgroundColor,color=c.color;if(color&&M2t.S9G(color,"transparent")){var gradient=context.createLinearGradient(0,top,0,panel.yAxis.bottom);gradient.addColorStop(0,backgroundColor);gradient.addColorStop(1,color);context.fillStyle=gradient;}
else{context.fillStyle=backgroundColor;}
this.plotMountainChart(panel,panel.chart.dataSegment,"Close",{skipProjections:true}
);var strokeStyle=c.borderTopColor;if(strokeStyle&&M2t.C9G(strokeStyle,"transparent")){context.strokeStyle=strokeStyle;this.plotLineChart(panel,panel.chart.dataSegment,"Close",{skipProjections:true}
);}
context.lineWidth=1;}
;STXChart.prototype.drawWaveChart=function(panel){var chart=panel.chart,quotes=chart.dataSegment,context=this.chart.context;context.beginPath();var first=false,reset=false,t=panel.yAxis.top,b=panel.yAxis.bottom;for(var i=0;M2t.H9G(i,quotes.length);i++){var quote=quotes[i];if(!quote)continue;if(quote.projection)break;if(quote.transform)quote=quote.transform;var x=panel.left+M2t.o9G(i,this.layout.candleWidth)+this.offset+this.micropixels,y=this.pixelFromPrice(quote.Open,panel);if(M2t.Y9G(y,t)){y=t;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else if(M2t.l9G(y,b)){y=b;if(reset){context.moveTo(x,y);continue;}
reset=true;}
else{reset=false;}
if(!first){first=true;var leftTick=M2t.y9G(chart.dataSet.length,chart.scroll);if(M2t.i9G(leftTick,0)){context.moveTo(x,y);}
else if(M2t.J9G(leftTick,0)){var baseline=chart.dataSet[M2t.z9G(leftTick,1)];if(baseline.transform)baseline=baseline.transform;var y0=baseline.Close;y0=(panel.yAxis.semiLog?this.pixelFromPrice(y0,panel):(M2t.G9G((panel.yAxis.high-y0),panel.yAxis.multiplier))+t);y0=Math.min(Math.max(y0,t),b);context.moveTo(M2t.e9G((i-1),this.layout.candleWidth)+this.offset+this.micropixels,y0);context.lineTo(x,y);}
context.moveTo(x,y);}
else{context.lineTo(x,y);}
x+=M2t.c9G(this.layout.candleWidth,4);if(M2t.U9G(quote.Open,quote.Close)){y=this.pixelFromPrice(quote.Low,panel);if(M2t.W9G(y,t))y=t;if(M2t.Z9G(y,b))y=b;context.lineTo(x,y);x+=M2t.A74(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.High,panel);if(M2t.r74(y,t))y=t;if(M2t.Q74(y,b))y=b;context.lineTo(x,y);}
else{y=this.pixelFromPrice(quote.High,panel);if(M2t.B74(y,t))y=t;if(M2t.k74(y,b))y=b;context.lineTo(x,y);x+=M2t.T74(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Low,panel);if(M2t.v74(y,t))y=t;if(M2t.g74(y,b))y=b;context.lineTo(x,y);}
x+=M2t.q74(this.layout.candleWidth,4);y=this.pixelFromPrice(quote.Close,panel);if(M2t.K74(y,t))y=t;if(M2t.u74(y,b))y=b;context.lineTo(x,y);}
var c=this.canvasStyle("stx_line_chart");if(c.width&&M2t.s74(parseInt(c.width,10),25)){context.lineWidth=Math.max(1,STX.stripPX(c.width));}
else{context.lineWidth=1;}
this.canvasColor("stx_line_chart");context.stroke();context.closePath();context.lineWidth=1;}
;STXChart.prototype.updateFloatHRLabel=function(panel){var Z9Y="ric",arr=panel.yaxisLHS.concat(panel.yaxisRHS);STX.clearCanvas(this.floatCanvas,this);if(M2t.D74(this.controls.crossX.style.display,"none"))return ;if(this.controls.crossY){this.controls.crossY.style.left=panel.left+"px";this.controls.crossY.style.width=panel.width+"px";}
for(var i=0;M2t.x74(i,arr.length);i++){var yAxis=arr[i],price=this.valueFromPixel(this.cy,panel,yAxis);if(isNaN(price))continue;var labelDecimalPlaces=null;if(M2t.n74(yAxis,panel.chart.yAxis)){labelDecimalPlaces=0;if(M2t.a74(yAxis.shadow,1000))labelDecimalPlaces=2;if(M2t.w74(yAxis.shadow,5))labelDecimalPlaces=4;if(yAxis.decimalPlaces||M2t.b84(yAxis.decimalPlaces,0))labelDecimalPlaces=yAxis.decimalPlaces;}
if(yAxis.priceFormatter){price=yAxis.priceFormatter(this,panel,price,yAxis);}
else{price=this.formatYAxisPrice(price,panel,labelDecimalPlaces,yAxis);}
var style=this.canvasStyle((g5Y+n8m+Y5Y+D9Y+I9Y+u7Y+Y5Y+G5Y+Z9Y+n4Y));this.createYAxisLabel(panel,price,this.cy,style.backgroundColor,style.color,this.floatCanvas.context,yAxis);}
}
;STXChart.prototype.headsUpHR=function(){var f0Y="headsUpHR",A9Y="00",h5Y="HR",z4m="adsUp";if(this.runPrepend((T9Y+n4Y+z4m+h5Y),arguments))return ;var panel=this.currentPanel;if(!panel)return ;var chart=panel.chart;this.updateFloatHRLabel(panel);if(this.controls.floatDate){var bar=this.barFromPixel(this.cx),prices=chart.xaxis[bar];if(prices&&prices.DT){if(chart.xAxis.formatter){this.controls.floatDate.innerHTML=chart.xAxis.formatter(prices.DT);}
else if(this.internationalizer){var str=this.internationalizer.monthDay.format(prices.DT);if(M2t.h84(prices.DT.getHours(),M2t.k9N)||M2t.P84(prices.DT.getMinutes(),M2t.k9N)||!STXChart.isDailyInterval(this.layout.interval))str+=L3Y+this.internationalizer.hourMinute.format(prices.DT);this.controls.floatDate.innerHTML=str;}
else{var m=prices.DT.getMonth()+M2t.V9N;if(M2t.R84(m,l8m))m=S2Y+m;var d=prices.DT.getDate();if(M2t.V84(d,l8m))d=S2Y+d;var h=prices.DT.getHours();if(M2t.E84(h,l8m))h=S2Y+h;var mn=prices.DT.getMinutes();if(M2t.O84(mn,l8m))mn=S2Y+mn;if((M2t.M84(h,(A9Y))&&M2t.d84(mn,A9Y))||STXChart.isDailyInterval(this.layout.interval))this.controls.floatDate.innerHTML=m+Y5Y+d+Y5Y+prices.DT.getFullYear();else this.controls.floatDate.innerHTML=m+Y5Y+d+L3Y+h+d4m+mn;}
}
else if(prices&&prices.index){this.controls.floatDate.innerHTML=prices.index;}
else{this.controls.floatDate.innerHTML=D1Y;}
}
this.runAppend(f0Y,arguments);}
;STXChart.prototype.setCrosshairColors=function(){return ;}
;STXChart.prototype.magnetize=function(){var W0m="allou";this.magnetizedPrice=null;if(this.runPrepend("magnetize",arguments))return ;if((M2t.j84(this.currentVectorParameters.vectorType,"annotation")||M2t.F84(this.currentVectorParameters.vectorType,(U4Y+W0m+p1Y)))&&STXChart.drawingLine)return ;if(M2t.I84(this.currentVectorParameters.vectorType,"projection"))return ;if(M2t.N84(this.currentVectorParameters.vectorType,"freeform"))return ;var panel=this.currentPanel;if(M2t.m84(panel.name,panel.chart.name)){var chart=panel.chart,tick=this.tickFromPixel(M2t.p84(STXChart.crosshairX,this.left),chart);if(M2t.X84(tick,chart.dataSet.length))return ;var prices=chart.dataSet[tick];if(!prices)return ;var price=this.valueFromPixel(this.cy,panel);this.magnetizedPrice=prices.Close;if(M2t.f84(this.layout.chartType,"bar")||M2t.t04(this.layout.chartType,"candle")||M2t.L04(this.layout.chartType,"colored_bar")||M2t.S04(this.layout.chartType,"hollow_candle")){var fields=["Open","High","Low","Close"],closest=1000000000;for(var i=0;M2t.C04(i,fields.length);i++){var fp=prices[fields[i]];if(M2t.H04(Math.abs(price-fp),closest)){closest=Math.abs(M2t.o04(price,fp));this.magnetizedPrice=fp;}
}
}
var x=this.pixelFromTick(tick,chart),y=this.pixelFromPrice(this.magnetizedPrice,this.currentPanel),ctx=this.chart.tempCanvas.context;ctx.beginPath();ctx.lineWidth=1;var radius=M2t.Y04(Math.max(this.layout.candleWidth,8),2);ctx.arc(x,y,radius,0,M2t.l04(2,Math.PI),false);ctx.fillStyle="#FFFFFF";ctx.strokeStyle="#000000";ctx.fill();ctx.stroke();ctx.closePath();}
this.runAppend("magnetize",arguments);}
;STXChart.prototype.positionCrosshairsAtPointer=function(){if(!this.currentPanel)return ;var chart=this.currentPanel.chart,rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.cy=this.backOutY(STXChart.crosshairY);this.cx=this.backOutX(STXChart.crosshairX);this.controls.crossX.style.left=(M2t.y04(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.backOutY(STXChart.crosshairY)+"px";this.updateChartAccessories();}
;STXChart.prototype.doDisplayCrosshairs=function(){var C3Y="crosshair",d7Y="doDisplayCrosshairs";if(this.runPrepend(d7Y,arguments))return ;if(this.displayInitialized){if(!this.layout.crosshair&&(M2t.i04(this.currentVectorParameters.vectorType,D1Y)||!this.currentVectorParameters.vectorType)){this.undisplayCrosshairs();}
else if(STX.Drawing[this.currentVectorParameters.vectorType]&&(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.undisplayCrosshairs();}
else{if(M2t.J04(this.controls.crossX.style.display,D1Y)){this.controls.crossX.style.display=D1Y;this.controls.crossY.style.display=D1Y;if(this.preferences.magnet&&this.currentVectorParameters.vectorType){document.body.style.cursor=t4m;}
else{document.body.style.cursor=C3Y;}
}
if(this.controls.floatDate){this.controls.floatDate.style.display=w8Y;}
}
}
this.runAppend(d7Y,arguments);}
;STXChart.prototype.undisplayCrosshairs=function(){var D7Y="undisplayCrosshairs";if(this.runPrepend(D7Y,arguments))return ;if(this.controls.crossX){if(M2t.z04(this.controls.crossX.style.display,t4m)){this.controls.crossX.style.display=t4m;this.controls.crossY.style.display=t4m;}
}
if(this.displayInitialized&&this.controls.floatDate){this.controls.floatDate.style.display=(m9Y+R2Y+n4Y);}
document.body.style.cursor=A6Y;if(this.floatCanvas)STX.clearCanvas(this.floatCanvas,this);this.runAppend(D7Y,arguments);}
;STXChart.prototype.modalBegin=function(){var P6Y="modal";this.openDialog=P6Y;this.undisplayCrosshairs();}
;STXChart.prototype.modalEnd=function(){this.cancelTouchSingleClick=r9Y;this.openDialog=D1Y;this.doDisplayCrosshairs();}
;STXChart.prototype.updateChartAccessories=function(){var q8Y=2450679,C7m=7427611,W1Y=1294740210,b9Y=1727718717;var O2N=-b9Y,v2N=W1Y,Y2N=M2t.B9N;for(var T2N=M2t.V9N;M2t.I5N.s5N(T2N.toString(),T2N.toString().length,C7m)!==O2N;T2N++){this.setPeriodicityV2(this.grabEndPeriodicity);l--;this.runAppend(V7m,arguments);this.chart.context.restore();Y2N+=M2t.B9N;}
if(M2t.I5N.s5N(Y2N.toString(),Y2N.toString().length,q8Y)!==v2N){return b0n-A0n;}
this.accessoryTimer=t9Y;this.lastAccessoryUpdate=new Date().getTime();var floatDate=this.controls.floatDate;if(floatDate){var panel=this.currentPanel;if(!panel)panel=this.chart.panel;if(panel){var chart=panel.chart,tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);floatDate.style.left=(M2t.G04(this.pixelFromTick(tick,chart),(floatDate.offsetWidth/M2t.B9N),w3Y))+K8m;floatDate.style.bottom=(M2t.m04(this.chart.canvasHeight,chart.panel.bottom))+K8m;}
}
this.headsUpHR();}
;STXChart.prototype.mousemove=function(e$){var e=e$?e$:event;if(!e.pageX){e.pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;e.pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;}
STXChart.crosshairX=e.pageX;STXChart.crosshairY=e.pageY;if(this.runPrepend(m3Y,arguments))return ;if(!this.displayInitialized)return ;if(M2t.p04(this.openDialog,D1Y))return ;this.mousemoveinner(e.pageX,e.pageY);this.runAppend(m3Y,arguments);}
;STXChart.prototype.setResizeTimer=function(ms){this.resizeDetectMS=ms;function closure(self){return function(){if(!self.chart.canvas)return ;if(!STX.isAndroid){if(M2t.X04(self.chart.canvas.height,Math.floor(self.devicePixelRatio*self.chart.container.clientHeight))||M2t.f04(self.chart.canvas.width,Math.floor(self.devicePixelRatio*self.chart.container.clientWidth))){self.resizeChart();return ;}
}
}
;}
if(ms){if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=window.setInterval(closure(this),ms);}
else{if(this.resizeTimeout)window.clearInterval(this.resizeTimeout);this.resizeTimeout=null;}
}
;STXChart.prototype.whichYAxis=function(panel,x){if(typeof x==="undefined")x=this.cx;var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;M2t.t44(i,arr.length);i++){var yAxis=arr[i];if(M2t.L44(yAxis.left,x)&&M2t.S44(yAxis.left+yAxis.width,x))return yAxis;}
return this.chart.panel.yAxis;}
;STXChart.prototype.mousemoveinner=function(epX,epY){var J7m="pan",T1Y="om",f4Y="movei";if(!this.chart.canvas)return ;if(!STX.isAndroid){if(M2t.C44(this.chart.canvas.height,Math.floor(this.devicePixelRatio*this.chart.container.clientHeight))||M2t.H44(this.chart.canvas.width,Math.floor(this.devicePixelRatio*this.chart.container.clientWidth))){this.resizeChart();return ;}
}
if(this.runPrepend((X0Y+X1Y+g5Y+n4Y+f4Y+R2Y+v0m+B5Y),arguments))return ;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;STXChart.crosshairX=epX;STXChart.crosshairY=epY;var cy=this.cy=this.backOutY(STXChart.crosshairY),cx=this.cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentPanel)this.currentPanel=this.chart.panel;if(!this.currentPanel)return ;var chart=this.currentPanel.chart;if(chart.dataSet){this.crosshairTick=this.tickFromPixel(cx,chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(cy,this.currentPanel));}
if(M2t.o44(STXChart.crosshairX,this.left)&&M2t.Y44(STXChart.crosshairX,this.right)&&M2t.l44(STXChart.crosshairY,this.top)&&M2t.y44(STXChart.crosshairY,this.bottom)){STXChart.insideChart=true;}
else{STXChart.insideChart=false;}
this.overXAxis=M2t.i44(STXChart.crosshairY,this.top+this.chart.panel.yAxis.bottom)&&M2t.J44(STXChart.crosshairY,this.top+this.chart.panel.bottom)&&STXChart.insideChart;this.overYAxis=(M2t.z44(this.cx,this.currentPanel.right)||M2t.G44(this.cx,this.currentPanel.left))&&STXChart.insideChart;if(this.overXAxis||this.overYAxis||(!STXChart.insideChart&&!this.grabbingScreen)){this.undisplayCrosshairs();if(!this.overXAxis&&!this.overYAxis)return ;}
if(!this.displayCrosshairs&&!STXChart.resizingPanel){this.undisplayCrosshairs();return ;}
var bHandle=this.controls.baselineHandle;if(this.repositioningBaseline){panel=this.panels[this.chart.panel.name];this.chart.baseline.userLevel=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(M2t.e44(Date.now()-this.repositioningBaseline.lastDraw,100)){this.draw();this.repositioningBaseline.lastDraw=Date.now();}
return ;}
if(this.grabbingScreen&&!STXChart.resizingPanel){if(this.anyHighlighted){STX.clearCanvas(this.chart.tempCanvas,this);this.anyHighlighted=false;var n;for(n in this.overlays){this.overlays[n].highlight=false;}
for(n in chart.series){chart.series[n].highlight=false;}
this.displaySticky();}
if(this.preferences.magnet&&this.currentVectorParameters.vectorType){STX.clearCanvas(this.chart.tempCanvas,this);}
if(this.grabStartX==-1){this.grabStartX=STXChart.crosshairX;this.grabStartScrollX=chart.scroll;}
if(this.grabStartY==-1){this.grabStartY=STXChart.crosshairY;this.grabStartScrollY=chart.panel.yAxis.scroll;}
var dx=M2t.c44(STXChart.crosshairX,this.grabStartX),dy=M2t.U44(STXChart.crosshairY,this.grabStartY);if(M2t.W44(dx,0)&&M2t.Z44(dy,0))return ;if(M2t.A34(Math.abs(dx)+Math.abs(dy),5))this.grabOverrideClick=true;var push;if(this.allowZoom&&M2t.r34(this.grabMode,"pan")&&(M2t.Q34(this.grabMode.indexOf("zoom"),0)||this.ctrl||this.overXAxis||this.overYAxis)){if(M2t.B34(this.grabMode,"")){if(this.overXAxis)this.grabMode="zoom-x";else if(this.overYAxis)this.grabMode=(R4m+O2Y+T1Y+Y5Y+v4m);}
if(M2t.k34(this.grabMode,"zoom-x"))dy=0;else if(M2t.T34(this.grabMode,"zoom-y"))dx=0;push=M2t.v34(dx,25);var centerMe=true;if(M2t.g34(chart.scroll,chart.maxTicks))centerMe=false;var newCandleWidth=this.grabStartCandleWidth+push;if(M2t.q34(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;var pct=M2t.K34((this.layout.candleWidth-newCandleWidth),this.layout.candleWidth);if(M2t.u34(pct,0.1)){newCandleWidth=M2t.s34(this.layout.candleWidth,0.9);}
else if(pct<-0.1){newCandleWidth=M2t.D34(this.layout.candleWidth,1.1);}
if(STX.ipad){if(M2t.x34(Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1,STXChart.ipadMaxTicks)&&M2t.n34(Math.round((this.chart.width/newCandleWidth)-0.499)-1,STXChart.ipadMaxTicks))return ;}
var newMaxTicks;if(this.pinchingCenter){var x=this.backOutX(this.pinchingCenter),tick1=this.tickFromPixel(x,chart);this.setCandleWidth(newCandleWidth,chart);var newTick=this.tickFromPixel(x,chart);chart.scroll+=Math.floor((M2t.a34(newTick,tick1)));}
else if(centerMe){newMaxTicks=Math.round(M2t.w34((this.chart.width/newCandleWidth),0.499));if(M2t.b64(newMaxTicks,chart.maxTicks)){this.setCandleWidth(newCandleWidth,chart);var center=M2t.h64(chart.scroll,chart.maxTicks/2),newCenter=(M2t.P64(chart.scroll,chart.maxTicks/2));chart.scroll+=Math.round(M2t.R64(center,newCenter));}
}
else{newMaxTicks=Math.round(M2t.V64((this.chart.width/newCandleWidth),0.499));if(M2t.E64(newMaxTicks,Math.round((this.chart.width/this.layout.candleWidth)-0.499))){this.setCandleWidth(newCandleWidth,chart);var wsInTicks=Math.round(M2t.O64(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=M2t.M64(chart.maxTicks,wsInTicks);}
}
this.layout.span=null;var yAxis=this.whichYAxis(this.grabbingPanel,this.cx);yAxis.zoom=Math.round(this.grabStartZoom+dy);if(M2t.d64(this.grabStartZoom,yAxis.height)){if(M2t.j64(yAxis.zoom,yAxis.height))yAxis.zoom=M2t.F64(yAxis.height,1);}
else{if(M2t.I64(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
}
else{if(this.allowScroll){if(M2t.N64(Math.abs(dy),this.yTolerance)){if(!this.yToleranceBroken){dy=0;if(M2t.m64(dx,0))return ;}
}
else{this.yToleranceBroken=true;}
this.grabMode=(J7m);push=Math.round(M2t.p64(dx,this.layout.candleWidth));this.microscroll=M2t.X64(push,(dx/this.layout.candleWidth));this.micropixels=this.layout.candleWidth*this.microscroll*-1;if(this.shift)push*=5;chart.scroll=this.grabStartScrollX+push;if(M2t.f64(chart.scroll,1))chart.scroll=1;if(M2t.t14(chart.scroll,chart.maxTicks)){this.preferences.whitespace=30;}
else{this.preferences.whitespace=M2t.L14((chart.maxTicks-chart.scroll),this.layout.candleWidth);}
if(M2t.S14(this.currentPanel.name,chart.name)){this.chart.panel.yAxis.scroll=this.grabStartScrollY+dy;}
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
this.grabbingPanel=this.currentPanel;if(this.overXAxis||this.overYAxis)return ;var tick=this.tickFromPixel(this.backOutX(STXChart.crosshairX),chart);this.controls.crossX.style.left=(M2t.C14(this.pixelFromTick(tick,chart),0.5))+"px";this.controls.crossY.style.top=this.cy+"px";this.setCrosshairColors();if(STXChart.insideChart&&!STXChart.resizingPanel){if(!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){this.doDisplayCrosshairs();}
if(M2t.H14(this.accessoryTimer,null))clearTimeout(this.accessoryTimer);if(STXChart.drawingLine||!STX.touchDevice){this.updateChartAccessories();}
else{if(M2t.o14(new Date().getTime()-this.lastAccessoryUpdate,100))this.updateChartAccessories();this.accessoryTimer=setTimeout((function(stx){return function(){stx.updateChartAccessories();}
;}
)(this),10);}
}
else{this.undisplayCrosshairs();}
var panel,value;if(this.repositioningDrawing){panel=this.panels[this.repositioningDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&M2t.Y14(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing.reposition(this.chart.tempCanvas.context,this.repositioningDrawing.repositioner,this.crosshairTick,value);if(this.repositioningDrawing.measure)this.repositioningDrawing.measure();}
else if(STXChart.drawingLine){if(this.activeDrawing){panel=this.panels[this.activeDrawing.panelName];value=this.adjustIfNecessary(panel,this.crosshairTick,this.valueFromPixelUntransform(this.backOutY(STXChart.crosshairY),panel));if(this.preferences.magnet&&this.magnetizedPrice&&M2t.l14(panel.name,panel.chart.name)){value=this.adjustIfNecessary(panel,this.crosshairTick,this.magnetizedPrice);}
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
var somethingChanged=false,drawingToMeasure=null,stickyArgs=["","",true],box={x0:this.tickFromPixel(M2t.y14(cx,radius),chart),x1:this.tickFromPixel(cx+radius,chart),y0:this.valueFromPixelUntransform(M2t.i14(cy,radius),this.currentPanel),y1:this.valueFromPixelUntransform(cy+radius,this.currentPanel)}
;for(var i=0;M2t.J14(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.permanent)continue;var prevHighlight=drawing.highlighted,highlightMe=(M2t.z14(drawing.panelName,this.currentPanel.name));drawing.repositioner=drawing.intersected(this.crosshairTick,this.crosshairValue,box);highlightMe=highlightMe&&drawing.repositioner;if(!clearOnly&&highlightMe){if(prevHighlight){drawingToMeasure=drawing;}
else if(M2t.G14(prevHighlight,drawing.highlight(true))){if(!drawingToMeasure)drawingToMeasure=drawing;somethingChanged=true;}
this.anyHighlighted=true;}
else{if(M2t.e14(prevHighlight,drawing.highlight(false))){somethingChanged=true;}
}
}
var first=false,n,o,series;for(n in this.overlays){o=this.overlays[n];o.prev=o.highlight;o.highlight=false;}
for(n in chart.seriesRenderers){var r=chart.seriesRenderers[n];for(var j=0;M2t.c14(j,r.seriesParams.length);j++){series=r.seriesParams[j];series.prev=series.highlight;series.highlight=false;}
}
if(!clearOnly){var bar=this.barFromPixel(cx);if(M2t.U14(bar,chart.dataSegment.length)){var y;for(n in this.overlays){o=this.overlays[n];if(M2t.W14(o.panel,this.currentPanel.name))continue;if(o.libraryEntry.isHighlighted&&o.libraryEntry.isHighlighted(this,cx,cy)){o.highlight=true;this.anyHighlighted=true;continue;}
var quote=chart.dataSegment[bar];if(!quote)continue;for(var out in this.overlays[n].outputMap){var val=quote[out];y=0;if(M2t.Z14(this.currentPanel.name,chart.name)){y=this.pixelFromPriceTransform(val,this.currentPanel);}
else{y=this.pixelFromPrice(val,this.currentPanel);}
if(M2t.A54(cy-radius,y)&&M2t.r54(cy+radius,y)){o.highlight=true;this.anyHighlighted=true;break;}
}
}
for(n in chart.seriesRenderers){var renderer=chart.seriesRenderers[n];if(!renderer.params.highlightable)continue;for(var m=0;M2t.Q54(m,renderer.seriesParams.length);m++){series=renderer.seriesParams[m];y=renderer.caches[series.field][bar];if(!y&&M2t.B54(y,0))continue;if(M2t.k54(cy-radius,y)&&M2t.T54(cy+radius,y)){series.highlight=true;this.anyHighlighted=true;}
else if((M2t.v54(renderer.params.subtype,"step")||M2t.g54(series.type,"step"))&&M2t.q54(bar,0)){var py=renderer.caches[series.field][M2t.K54(bar,1)];if((M2t.u54(cy,y)&&M2t.s54(cy,py))||(M2t.D54(cy,y)&&M2t.x54(cy,py))){series.highlight=true;this.anyHighlighted=true;}
}
}
}
}
}
for(n in this.overlays){o=this.overlays[n];if(o.highlight){this.anyHighlighted=true;stickyArgs=[o.study.display?o.study.display:o.name];drawingToMeasure=null;}
if(M2t.n54(o.prev,o.highlight)){this.draw();somethingChanged=true;break;}
}
for(n in chart.seriesRenderers){var r2=chart.seriesRenderers[n];if(!r2.params.highlightable)continue;for(var m2=0;M2t.a54(m2,r2.seriesParams.length);m2++){series=r2.seriesParams[m2];if(series.highlight){this.anyHighlighted=true;stickyArgs=[series.display,series.color,false,series.permanent];drawingToMeasure=null;}
if(M2t.w54(series.prev,series.highlight)){this.draw();somethingChanged=true;break;}
}
}
if(somethingChanged){this.draw();this.displaySticky.apply(this,stickyArgs);this.clearMeasure();if(drawingToMeasure)drawingToMeasure.measure();}
if(!this.anyHighlighted){this.setMeasure();}
}
;STXChart.prototype.positionSticky=function(m){var top=Math.max(M2t.b24(this.backOutY(STXChart.crosshairY),m.offsetHeight,h0m),M2t.k9N),right=Math.min(M2t.r24(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-V0m)),M2t.Q24(this.chart.canvasWidth,m.offsetWidth));m.style.top=top+K8m;m.style.right=right+K8m;}
;STXChart.prototype.displaySticky=function(message,backgroundColor,forceShow,noDelete){var L5Y="non",m=this.controls.mSticky;if(!m)return ;var mi=m.children[M2t.k9N];if(!mi)return ;var overlayTrashCan=m.children[M2t.V9N],mouseDeleteInstructions=m.children[M2t.B9N];if(!forceShow&&!message){mi.innerHTML=D1Y;m.style.display=(L5Y+n4Y);if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=t4m;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=t4m;}
}
else{if(!message)message=D1Y;if(forceShow&&!message){mi.style.backgroundColor=D1Y;mi.style.color=D1Y;mi.style.display=t4m;}
else if(backgroundColor){mi.style.backgroundColor=backgroundColor;mi.style.color=STX.chooseForegroundColor(backgroundColor);mi.style.display=p4Y;}
else{mi.style.backgroundColor=D1Y;mi.style.color=D1Y;mi.style.display=p4Y;}
mi.innerHTML=message;m.style.display=p4Y;this.positionSticky(m);if(noDelete){overlayTrashCan.style.display=t4m;mouseDeleteInstructions.style.display=t4m;}
else if(STX.touchDevice&&overlayTrashCan){overlayTrashCan.style.display=p4Y;mouseDeleteInstructions.style.display=t4m;}
else if(!STX.touchDevice&&mouseDeleteInstructions){mouseDeleteInstructions.style.display=w8Y;}
}
}
;STXChart.prototype.setMeasure=function(price1,price2,tick1,tick2,hover){var c5Y="measureLit",T0Y="Bars",X6Y="lit",j9Y="Un",h1Y="setMeasure";if(this.runPrepend(h1Y,arguments))return ;var m=$$(t0m),message=D1Y;if(!price1){if(m&&M2t.B24(m.className,a3Y))m.className=(N2Y+v2Y+g5Y+X1Y+B5Y+n4Y+j9Y+X6Y);if(!this.anyHighlighted&&M2t.k24(this.currentVectorParameters.vectorType,D1Y))this.clearMeasure();}
else{var distance=M2t.T24(Math.round(Math.abs(price1-price2)*this.chart.roundit),this.chart.roundit);if(this.internationalizer){message+=this.internationalizer.numbers.format(distance);}
else{message+=distance;}
var pct=M2t.v24((price2-price1),price1);if(M2t.g24(Math.abs(pct),L6Y)){pct=Math.round(M2t.q24(pct,S4m));}
else if(M2t.K24(Math.abs(pct),u9N)){pct=M2t.u24(Math.round(pct*n0m),l8m);}
else{pct=M2t.s24(Math.round(pct*D0m),S4m);}
if(this.internationalizer){pct=this.internationalizer.percent.format(M2t.D24(pct,S4m));}
else{pct=pct+C9Y;}
message+=I0Y+pct+t7m;var ticks=Math.abs(M2t.x24(tick2,tick1));ticks=Math.round(ticks)+M2t.V9N;var barsStr=T0Y;if(this.translationCallback)barsStr=this.translationCallback(barsStr);message+=L3Y+ticks+L3Y+barsStr;if(m){if(M2t.n24(m.className,c5Y))m.className=c5Y;m.innerHTML=message;}
}
if(this.activeDrawing)return ;m=this.controls.mSticky;if(hover){m.style.display=p4Y;m.children[M2t.k9N].style.display=p4Y;if(price1){m.children[M2t.k9N].innerHTML=message;if(STX.touchDevice){m.children[M2t.V9N].style.display=p4Y;if(m.children[M2t.B9N])m.children[M2t.B9N].style.display=t4m;}
else{m.children[M2t.V9N].style.display=t4m;if(m.children[M2t.B9N])m.children[M2t.B9N].style.display=w8Y;}
}
this.positionSticky(m);}
else{m.style.display=t4m;m.children[M2t.k9N].innerHTML=D1Y;}
this.runAppend(h1Y,arguments);}
;STXChart.prototype.clearMeasure=function(){var m=$$(t0m);if(m){if(M2t.a24(m.className,a3Y))m.className=a3Y;m.innerHTML=D1Y;}
}
;STXChart.prototype.drawTemporaryPanel=function(){var N8m="stx_panel_drag",borderEdge=Math.round(M2t.w24(STXChart.resizingPanel.right,M2t.C9N))+w3Y;STX.clearCanvas(this.chart.tempCanvas,this);var y=M2t.b94(STXChart.crosshairY,this.top);this.plotLine(STXChart.resizingPanel.left,borderEdge,y,y,this.canvasStyle(N8m),o7Y,this.chart.tempCanvas.context,y0m,{}
);STXChart.resizingPanel.handle.style.top=(M2t.h94(y,STXChart.resizingPanel.handle.offsetHeight/M2t.B9N))+K8m;}
;STXChart.prototype.setTrashCan=function(){if(STX.touchDevice){var m=this.controls.mSticky;if(m){m.style.display=p4Y;m.children[M2t.k9N].style.display=t4m;m.children[M2t.V9N].style.display=p4Y;if(m.children[M2t.B9N])m.children[M2t.B9N].style.display=t4m;m.style.top=(M2t.P94(this.backOutY(STXChart.crosshairY),h0m))+K8m;m.style.right=M2t.R94(this.chart.canvasWidth,(this.backOutX(STXChart.crosshairX)-V0m),K8m);}
}
}
;STXChart.prototype.pixelFromBar=function(bar,chart){if(!chart)chart=this.chart;var x=chart.left+Math.round((M2t.k94(bar,this.layout.candleWidth))+M2t.T94(this.layout.candleWidth,M2t.C9N))+this.micropixels;return x;}
;STXChart.prototype.barFromPixel=function(x,chart){if(!chart)chart=this.chart;return Math.floor(M2t.v94((x-chart.left-this.micropixels),this.layout.candleWidth));}
;STXChart.prototype.tickFromPixel=function(x,chart){if(!chart)chart=this.chart;var left=M2t.g94(chart.dataSet.length,chart.scroll,1),tick=left+Math.floor(M2t.i94((x-chart.left-this.micropixels),this.layout.candleWidth));return tick;}
;STXChart.prototype.pixelFromTick=function(tick,chart){if(!chart)chart=this.chart;return chart.left+M2t.J94((tick-chart.dataSet.length+chart.scroll-1),this.layout.candleWidth)+this.offset+this.micropixels;}
;STXChart.prototype.pixelFromDate=function(date,chart){return this.pixelFromTick(this.tickFromDate(date,chart),chart);}
;STXChart.prototype.priceFromPixel=function(y,panel,yAxis){if(!panel)panel=this.chart.panel;var chart=panel.chart,yax=yAxis?yAxis:panel.yAxis;y=M2t.z94(yax.bottom,y);var price=yax.low+(M2t.G94(y,yax.multiplier));if(yax.semiLog){var logPrice=yax.logLow+(M2t.e94(y,yax.logShadow,yax.height));price=Math.pow(10,logPrice);}
return price;}
;STXChart.prototype.valueFromPixel=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);var p=this.priceFromPixel(y,panel,yAxis);return p;}
;STXChart.prototype.valueFromPixelUntransform=function(y,panel,yAxis){if(!panel)panel=this.whichPanel(y);if(!panel){if(M2t.p94(y,M2t.k9N)){panel=this.panels[STX.first(this.panels)];}
else{panel=this.panels[STX.last(this.panels)];}
}
var p=this.priceFromPixel(y,panel,yAxis);if(panel.chart.untransformFunc&&M2t.X94(panel.name,panel.chart.name)){p=panel.chart.untransformFunc(this,panel.chart,p);}
return p;}
;STXChart.prototype.pixelFromPriceTransform=function(price,panel,yAxis){if(panel.chart.transformFunc)price=panel.chart.transformFunc(this,panel.chart,price,yAxis);return this.pixelFromPrice(price,panel,yAxis);}
;STXChart.prototype.pixelFromPrice=function(price,panel,yAxis){if(!panel)panel=this.chart.panel;var yax=yAxis?yAxis:panel.yAxis,y=M2t.f94((yax.high-price),yax.multiplier);if(yax.semiLog){var logPrice=M2t.t7L(Math.log(price),Math.LN10);if(M2t.L7L(price,0))logPrice=0;var height=yax.height;y=M2t.S7L(height,height*(logPrice-yax.logLow)/yax.logShadow);}
y+=yax.top;return y;}
;STXChart.prototype.pixelFromValueAdjusted=function(panel,tick,value,yAxis){if(this.layout.adj||!this.charts[panel.name])return this.pixelFromPriceTransform(value,panel,yAxis);var a=Math.round(tick);if(M2t.C7L(a,0)&&M2t.H7L(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return this.pixelFromPriceTransform(M2t.o7L(value,ratio),panel,yAxis);}
return this.pixelFromPriceTransform(value,panel,yAxis);}
;STXChart.prototype.adjustIfNecessary=function(panel,tick,value){if(this.layout.adj)return value;if(!panel||!this.charts[panel.name])return value;var a=Math.round(tick);if(M2t.Y7L(a,0)&&M2t.l7L(a,panel.chart.dataSet.length)&&(ratio=panel.chart.dataSet[a].ratio)){return M2t.y7L(value,ratio);}
return value;}
;STXChart.prototype.setTransform=function(chart,transformFunction,untransformFunction){chart.transformFunc=transformFunction;chart.untransformFunc=untransformFunction;}
;STXChart.prototype.unsetTransform=function(chart){delete  chart.transformFunc;delete  chart.untransformFunc;for(var i=0;M2t.i7L(i,chart.dataSet.length);i++){chart.dataSet[i].transform=null;}
}
;STXChart.prototype.undo=function(){var w1Y="undo";if(this.runPrepend(w1Y,arguments))return ;if(this.activeDrawing){this.activeDrawing.abort();this.activeDrawing=t9Y;STX.clearCanvas(this.chart.tempCanvas,this);this.draw();STX.swapClassName(this.controls.crossX,F0Y,C4Y);STX.swapClassName(this.controls.crossY,F0Y,C4Y);STXChart.drawingLine=y0m;}
this.runAppend(w1Y,arguments);}
;STXChart.prototype.undoStamp=function(){this.undoStamps.push(STX.shallowClone(this.drawingObjects));}
;STXChart.prototype.undoLast=function(){if(this.activeDrawing){this.undo();}
else{if(this.undoStamps.length){this.drawingObjects=this.undoStamps.pop();this.draw();}
}
}
;STXChart.prototype.addDrawing=function(drawing){this.undoStamp();this.drawingObjects.push(drawing);}
;STXChart.prototype.plotLine=function(x0,x1,y0,y1,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(M2t.J7L(parameters.pattern,"none"))return ;if(M2t.z7L(confineToPanel,true))confineToPanel=this.chart.panel;if(M2t.G7L(context,null)||typeof (context)=="undefined")context=this.chart.context;if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1)){return ;}
var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.right;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;edgeLeft=confineToPanel.left;edgeRight=confineToPanel.right;}
var bigX,bigY,v;if(M2t.e7L(type,(B5Y+g4Y+v4m))){bigX=10000000;if(M2t.c7L(x1,x0))bigX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);x1=bigX;y1=bigY;}
if(M2t.U7L(type,"line")||M2t.W7L(type,"horizontal")||M2t.Z7L(type,"vertical")){bigX=10000000;var littleX=-10000000;v={"x0":x0,"x1":x1,"y0":y0,"y1":y1}
;bigY=STX.yIntersection(v,bigX);var littleY=STX.yIntersection(v,littleX);x0=littleX;x1=bigX;y0=littleY;y1=bigY;}
var t0=0.0,t1=1.0,xdelta=M2t.A8L(x1,x0),ydelta=M2t.r8L(y1,y0),p,q,r;for(var edge=0;M2t.Q8L(edge,4);edge++){if(M2t.B8L(edge,0)){p=-xdelta;q=-(M2t.k8L(edgeLeft,x0));}
if(M2t.T8L(edge,1)){p=xdelta;q=(M2t.v8L(edgeRight,x0));}
if(M2t.g8L(edge,2)){p=-ydelta;q=-(M2t.q8L(edgeTop,y0));}
if(M2t.K8L(edge,3)){p=ydelta;q=(M2t.u8L(edgeBottom,y0));}
r=M2t.s8L(q,p);if((y1||M2t.D8L(y1,0))&&M2t.x8L(p,0)&&M2t.n8L(q,0)){return false;}
if(M2t.a8L(p,0)){if(M2t.w8L(r,t1))return false;else if(M2t.b0L(r,t0))t0=r;}
else if(M2t.h0L(p,0)){if(M2t.P0L(r,t0))return false;else if(M2t.R0L(r,t1))t1=r;}
}
var x0clip=x0+M2t.V0L(t0,xdelta),y0clip=y0+M2t.E0L(t0,ydelta),x1clip=x0+M2t.O0L(t1,xdelta),y1clip=y0+M2t.M0L(t1,ydelta);if(!y1&&M2t.d0L(y1,0)&&!y0&&M2t.j0L(y0,0)){y0clip=edgeTop;y1clip=edgeBottom;x0clip=v.x0;x1clip=v.x0;if(M2t.F0L(v.x0,edgeRight))return false;if(M2t.I0L(v.x0,edgeLeft))return false;}
else if(!y1&&M2t.N0L(y1,0)){if(M2t.m0L(v.y0,v.y1))y1clip=edgeBottom;else y1clip=edgeTop;x0clip=v.x0;x1clip=v.x0;if(M2t.p0L(v.x0,edgeRight))return false;if(M2t.X0L(v.x0,edgeLeft))return false;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||M2t.f0L(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;if(M2t.t4L(type,"zig zag"))context.lineWidth=5;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(M2t.L4L(pattern,"solid")){pattern=null;}
else if(M2t.S4L(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(M2t.C4L(pattern,"dashed")){pattern=[M2t.H4L(context.lineWidth,5),M2t.o4L(context.lineWidth,5)];}
}
context.stxLine(x0clip,y0clip,x1clip,y1clip,context.strokeStyle,context.globalAlpha,context.lineWidth,pattern);context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.connectTheDots=function(points,color,type,context,confineToPanel,parameters){var x6Y="one";if(!parameters)parameters={}
;if(M2t.Y4L(parameters.pattern,(R2Y+x6Y)))return ;if(M2t.l4L(confineToPanel,true))confineToPanel=this.chart.panel;if(M2t.y4L(context,null)||typeof (context)=="undefined")context=this.chart.context;if(M2t.i4L(points.length,4))return ;var edgeTop=0,edgeBottom=this.chart.canvasHeight,edgeLeft=0,edgeRight=this.chart.width;if(confineToPanel){edgeBottom=confineToPanel.yAxis.bottom;edgeTop=confineToPanel.yAxis.top;}
context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||M2t.J4L(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(M2t.z4L(pattern,"solid")){pattern=null;}
else if(M2t.G4L(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(M2t.e4L(pattern,"dashed")){pattern=[M2t.c4L(context.lineWidth,5),M2t.U4L(context.lineWidth,5)];}
}
context.beginPath();for(var i=0;M2t.W4L(i,points.length-2);i+=2){var x0=points[i],y0=points[i+1],x1=points[i+2],y1=points[i+3];if(isNaN(x0)||isNaN(x1)||isNaN(y0)||isNaN(y1))return ;var t0=0.0,t1=1.0,xdelta=M2t.Z4L(x1,x0),ydelta=M2t.A3L(y1,y0),p,q,r;for(var edge=0;M2t.r3L(edge,4);edge++){if(M2t.Q3L(edge,0)){p=-xdelta;q=-(M2t.B3L(edgeLeft,x0));}
if(M2t.k3L(edge,1)){p=xdelta;q=(M2t.T3L(edgeRight,x0));}
if(M2t.v3L(edge,2)){p=-ydelta;q=-(M2t.g3L(edgeTop,y0));}
if(M2t.q3L(edge,3)){p=ydelta;q=(M2t.K3L(edgeBottom,y0));}
r=M2t.u3L(q,p);if((y1||M2t.s3L(y1,0))&&M2t.D3L(p,0)&&M2t.x3L(q,0)){return false;}
if(M2t.n3L(p,0)){if(M2t.a3L(r,t1))return false;else if(M2t.w3L(r,t0))t0=r;}
else if(M2t.b6L(p,0)){if(M2t.h6L(r,t0))return false;else if(M2t.P6L(r,t1))t1=r;}
}
var x0clip=x0+M2t.R6L(t0,xdelta),y0clip=y0+M2t.V6L(t0,ydelta),x1clip=x0+M2t.E6L(t1,xdelta),y1clip=y0+M2t.O6L(t1,ydelta);try{if(pattern){context.dashedLineTo(x0clip,y0clip,x1clip,y1clip,pattern);}
else{context.moveTo(x0clip,y0clip);context.lineTo(x1clip,y1clip);}
}
catch(e){}
}
context.stroke();context.closePath();context.globalAlpha=1;context.lineWidth=1;}
;STXChart.prototype.plotSpline=function(points,tension,color,type,context,confineToPanel,parameters){if(!parameters)parameters={}
;if(M2t.M6L(parameters.pattern,"none"))return ;if(M2t.d6L(confineToPanel,true))confineToPanel=this.chart.panel;if(M2t.j6L(context,null)||typeof (context)=="undefined")context=this.chart.context;context.save();context.lineWidth=1.1;if(typeof (color)=="object"){context.strokeStyle=color.color;if(color.opacity)context.globalAlpha=color.opacity;else context.globalAlpha=1;context.lineWidth=parseInt(STX.stripPX(color.width));}
else{if(!color||M2t.F6L(color,"auto")||STX.isTransparent(color)){context.strokeStyle=this.defaultColor;}
else{context.strokeStyle=color;}
}
if(parameters.opacity)context.globalAlpha=parameters.opacity;if(parameters.lineWidth)context.lineWidth=parameters.lineWidth;var pattern=null;if(parameters.pattern){pattern=parameters.pattern;if(M2t.I6L(pattern,"solid")){pattern=null;}
else if(M2t.N6L(pattern,"dotted")){pattern=[context.lineWidth,context.lineWidth];}
else if(M2t.m6L(pattern,"dashed")){pattern=[M2t.p6L(context.lineWidth,5),M2t.X6L(context.lineWidth,5)];}
}
if(pattern&&context.setLineDash){context.setLineDash(pattern);context.lineDashOffset=0;}
plotSpline(points,tension,context);context.restore();}
;STXChart.prototype.drawingClick=function(panel,x,y){var b4Y="drawing",N8Y=4419841,r9N=3136808,w0m=(107.4E1>=(21.,0x6E)?(9.,1295775663):20.>=(145.70E1,0x1F)?"x0":(0x1F7,68.)<=25.?(126.5E1,9.15E2):(121.4E1,15.8E1)),U5Y=815479526;var g2N=U5Y,y2N=-w0m,M2N=M2t.B9N;for(var l2N=M2t.V9N;M2t.I5N.s5N(l2N.toString(),l2N.toString().length,r9N)!==g2N;l2N++){this.mousemoveinner(this.grabStartX+val,this.grabStartY);context.moveTo(M2t.W1G(xx2,widthOffset),cache.close);M2N+=M2t.B9N;}
if(M2t.I5N.s5N(M2N.toString(),M2N.toString().length,N8Y)!==y2N){return X7G<=a7G;}
if(!this.activeDrawing){if(!panel)return ;var Factory=STXChart.drawingTools[this.currentVectorParameters.vectorType];if(!Factory){if(STX.Drawing[this.currentVectorParameters.vectorType]){Factory=STX.Drawing[this.currentVectorParameters.vectorType];STXChart.registerDrawingTool(this.currentVectorParameters.vectorType,Factory);}
}
if(Factory){this.activeDrawing=new Factory();this.activeDrawing.construct(this,panel);if(!this.charts[panel.name]){if(this.activeDrawing.chartsOnly){this.activeDrawing=t9Y;return ;}
}
}
}
if(this.activeDrawing){if(this.userPointerDown&&!this.activeDrawing.dragToDraw){if(!STXChart.drawingLine)this.activeDrawing=t9Y;return ;}
var tick=this.tickFromPixel(x,panel.chart),dpanel=this.panels[this.activeDrawing.panelName],value=this.adjustIfNecessary(dpanel,tick,this.valueFromPixelUntransform(y,dpanel));if(this.preferences.magnet&&this.magnetizedPrice){value=this.adjustIfNecessary(dpanel,tick,this.magnetizedPrice);}
if(this.activeDrawing.click(this.chart.tempCanvas.context,tick,value)){if(this.activeDrawing){STXChart.drawingLine=y0m;STX.clearCanvas(this.chart.tempCanvas,this);this.addDrawing(this.activeDrawing);this.activeDrawing=t9Y;this.adjustDrawings();this.draw();this.changeOccurred(z8Y);STX.swapClassName(this.controls.crossX,F0Y,C4Y);STX.swapClassName(this.controls.crossY,F0Y,C4Y);}
}
else{this.changeOccurred(b4Y);STXChart.drawingLine=r9Y;STX.swapClassName(this.controls.crossX,C4Y,F0Y);STX.swapClassName(this.controls.crossY,C4Y,F0Y);}
return r9Y;}
return y0m;}
;STXChart.prototype.whichPanel=function(y){for(var p in this.panels){var panel=this.panels[p];if(panel.hidden)continue;if(M2t.f6L(y,panel.top)&&M2t.t1L(y,panel.bottom))return panel;}
return t9Y;}
;STXChart.prototype.mouseup=function(e){var d3Y="stx-drag-chart";if(this.runPrepend(S0m,arguments))return ;if(this.repositioningDrawing){if(!this.currentVectorParameters.vectorType||(M2t.L1L(Date.now()-this.mouseTimer,c4m))){this.changeOccurred(z8Y);STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=t9Y;this.adjustDrawings();this.draw();return ;}
else{this.repositioningDrawing=y0m;}
}
if(this.repositioningBaseline){this.repositioningBaseline=t9Y;this.chart.panel.yAxis.scroll=M2t.S1L(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/M2t.B9N);this.draw();return ;}
var wasMouseDown=this.userPointerDown;this.userPointerDown=y0m;if(!this.displayInitialized)return ;this.grabbingScreen=y0m;if(M2t.C1L(this.openDialog,D1Y))return ;if(this.grabOverrideClick){STX.unappendClassName(document.body,d3Y);this.grabOverrideClick=y0m;return ;}
if(STXChart.insideChart)STX.unappendClassName(document.body,d3Y);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=t9Y;return ;}
if(!e)e=event;if((e.which&&M2t.H1L(e.which,M2t.B9N))||(e.button&&M2t.o1L(e.button,M2t.B9N))){if(this.anyHighlighted){this.rightClickHighlighted();if(e.preventDefault)e.preventDefault();return y0m;}
else{return r9Y;}
}
if(!e.pageX){e.pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;e.pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;}
if(M2t.Y1L(e.pageX,this.left)||M2t.l1L(e.pageX,this.right))return ;if(M2t.y1L(e.pageY,this.top)||M2t.i1L(e.pageY,this.bottom))return ;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);if(wasMouseDown){this.drawingClick(this.currentPanel,cx,cy);}
if(!this.activeDrawing){if(this.callbacks.tap){(this.callbacks.tap)({stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
this.runAppend(S0m,arguments);}
;STXChart.prototype.grabbingHand=function(){var f9Y="ra";if(!this.allowScroll)return ;if(!this.grabbingScreen)return ;if(STX.touchDevice)return ;STX.appendClassName(document.body,(J4Y+J4m+Y5Y+F4Y+f9Y+W9Y+Y5Y+U4Y+T9Y+A7Y+p1Y));}
;STXChart.prototype.mousedown=function(e){if(this.runPrepend("mousedown",arguments))return ;this.grabOverrideClick=false;if(M2t.J1L(this.openDialog,""))return ;if(!this.displayInitialized)return ;if(!this.displayCrosshairs)return ;if(!STXChart.insideChart)return ;if(this.manageTouchAndMouse&&e&&e.preventDefault)e.preventDefault();this.mouseTimer=Date.now();this.userPointerDown=true;if(!e)e=event;if((e.which&&M2t.z1L(e.which,2))||(e.button&&M2t.G1L(e.button,2))){return ;}
for(var p in this.panels){var panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
if(!e.pageX){e.pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;e.pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;}
var chart=this.currentPanel.chart;if(M2t.e1L(e.pageX,this.left)&&M2t.c1L(e.pageX,this.right)&&M2t.U1L(e.pageY,this.top)&&M2t.W1L(e.pageY,this.bottom)){if(this.repositioningDrawing)return ;for(var i=0;M2t.Z1L(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){if(this.ctrl){var Factory=STXChart.drawingTools[drawing.name],clonedDrawing=new Factory();clonedDrawing.reconstruct(this,drawing.serialize());this.drawingObjects.push(clonedDrawing);this.repositioningDrawing=clonedDrawing;clonedDrawing.repositioner=drawing.repositioner;return ;}
this.repositioningDrawing=drawing;return ;}
}
if(M2t.A5L(this.layout.chartType,"baseline_delta")&&M2t.r5L(chart.baseline.userLevel,false)){var y0=this.valueFromPixelUntransform(M2t.Q5L(this.cy,5),this.currentPanel),y1=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),x0=M2t.B5L(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(M2t.k5L(chart.baseline.actualLevel,y0)&&M2t.T5L(chart.baseline.actualLevel,y1)&&M2t.v5L(this.cx,x0)){this.repositioningBaseline={lastDraw:Date.now()}
;return ;}
}
this.drawingClick(this.currentPanel,this.cx,this.cy);if(this.activeDrawing&&this.activeDrawing.dragToDraw)return ;}
this.grabbingScreen=true;this.yToleranceBroken=false;if(!e)e=event;if(!e.pageX){e.pageX=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;e.pageY=e.clientY+document.body.scrollTop+document.documentElement.scrollTop;}
this.grabStartX=e.pageX;this.grabStartY=e.pageY;this.grabStartScrollX=chart.scroll;this.grabStartScrollY=chart.panel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);this.runAppend("mousedown",arguments);}
;STXChart.prototype.changeVectorType=function(value){this.currentVectorParameters.vectorType=value;if(STXChart.drawingLine)this.undo();this.setCrosshairColors();if(STXChart.insideChart)this.doDisplayCrosshairs();}
;STXChart.prototype.rightClickOverlay=function(name){var Z1Y="rightClickOverlay",P8Y="lay",Z5Y="kOv",Y3Y="ht";if(this.runPrepend((B5Y+J7Y+Y3Y+u8m+m5Y+U4Y+Z5Y+A3Y+P8Y),arguments))return ;var sd=this.overlays[name];if(sd.editFunction){sd.editFunction();}
else{this.removeOverlay(name);}
this.runAppend(Z1Y,arguments);}
;STXChart.prototype.removeOverlay=function(name){var B4m="yo",S1Y="removeOverlay";if(this.runPrepend(S1Y,arguments))return ;for(var o in this.overlays){var sd=this.overlays[o];if(sd.inputs.Field&&sd.inputs.Field.indexOf(name)!=-M2t.V9N){this.removeOverlay(sd.name);}
}
var study=this.layout.studies[name];delete  this.layout.studies[name];delete  this.overlays[name];STX.deleteRHS(STX.Studies.studyPanelMap,study);this.displaySticky();this.createDataSet();this.changeOccurred((q2Y+g4Y+B4m+X1Y+p1Y));this.runAppend(S1Y,arguments);}
;STXChart.prototype.addSeries=function(field,parameters,cb){var t7Y="display";if(this.runPrepend("addSeries",arguments))return ;if(!parameters)parameters={}
;if(!parameters.chartName)parameters.chartName=this.chart.name;var obj={parameters:STX.clone(parameters),yValueCache:[],display:field}
;if(M2t.g5L((t7Y),obj.parameters))obj.display=obj.parameters.display;if(obj.parameters.isComparison)obj.parameters.shareYAxis=true;if(!obj.parameters.chartType&&obj.parameters.color)obj.parameters.chartType=(b5Y);if(obj.parameters.chartType&&M2t.q5L(obj.parameters.chartType,"mountain"))obj.parameters.chartType=(q2Y+K9Y+v0m);if(!obj.parameters.panel)obj.parameters.panel=this.chart.panel.name;var chart=this.charts[parameters.chartName],self=this;function addSeriesData(stx){var mIterator=0,cIterator=0;while(parameters.data&&M2t.K5L(mIterator,stx.masterData.length)&&M2t.u5L(cIterator,parameters.data.length)){var c=parameters.data[cIterator],m=stx.masterData[mIterator];if(!c.DT||typeof c.DT=="undefined")c.DT=STX.strToDateTime(c.Date);if(M2t.s5L(c.DT.getTime(),m.DT.getTime())){if(typeof c.Value=="undefined"){m[field]=c.Close;}
else{m[field]=c.Value;}
cIterator++;mIterator++;continue;}
if(M2t.D5L(c.DT,m.DT))cIterator++;else mIterator++;}
}
function setUpRenderer(stx,obj){if(obj.parameters.color){var r=stx.getSeriesRenderer("_generic_series");if(!r){r=stx.setSeriesRenderer(new STX.Renderer.Lines({params:{panel:obj.parameters.panel,type:"legacy",name:"_generic_series",overChart:true}
,}
));}
r.attachSeries(field,obj.parameters).ready();}
}
if(chart){chart.series[field]=obj;}
if(parameters.isComparison){self.setComparison(true,chart);}
var doneInCallback=false;if(parameters.data){if(parameters.data.useDefaultQuoteFeed){var driver=this.quoteDriver,fetchParams=driver.makeParams(field,this.chart);fetchParams.startDate=this.chart.masterData[0].DT;fetchParams.endDate=this.chart.masterData[M2t.x5L(this.chart.masterData.length,1)].DT;doneInCallback=true;driver.quoteFeed.fetch(fetchParams,function(dataCallback){if(!dataCallback.error){parameters.data=dataCallback.quotes;addSeriesData(self);setUpRenderer(self,obj);}
if(cb)cb(dataCallback.error);self.runAppend("addSeries",arguments);}
);}
else if(this.masterData){addSeriesData(this);}
}
else{obj.addSeriesData=addSeriesData;}
if(!doneInCallback){setUpRenderer(self,obj);this.runAppend("addSeries",arguments);}
return obj;}
;STXChart.prototype.removeSeries=function(field,chart){if(this.runPrepend("removeSeries",arguments))return ;if(!chart)chart=this.chart;delete  chart.series[field];var compare=false;for(var s in chart.series){if(chart.series[s].parameters.isComparison){compare=true;break;}
}
this.setComparison(compare,chart);for(var panel in this.panels){if(M2t.n5L(this.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=this.layout.studies[this.panels[panel].name].inputs["Compare To"];for(var i=0;M2t.a5L(i,compareArray.length);i++){if(M2t.w5L(compareArray[i],field))compareArray.splice(i,1);}
delete  this.layout.studies[this.panels[panel].name].outputs["Result "+field];delete  this.layout.studies[this.panels[panel].name].outputMap["Result "+field+" "+this.panels[panel].name];if(!compareArray.length)this.panelClose(this.panels[panel]);}
}
this.runAppend("removeSeries",arguments);}
;STXChart.prototype.rendererAction=function(chart,phase){var j5Y="rendererAction";if(this.runPrepend(j5Y,arguments))return ;for(var id in chart.seriesRenderers){var renderer=chart.seriesRenderers[id];if(renderer.params.overChart&&M2t.b2L(phase,q0Y))continue;if(!renderer.params.overChart&&M2t.h2L(phase,z2N))continue;if(M2t.P2L(this.panels[renderer.params.panel].chart,chart))continue;if(M2t.R2L(phase,H0Y)){renderer.performCalculations();}
else{renderer.draw();if(renderer.cb)renderer.cb(renderer.colors);}
}
this.runAppend(j5Y,arguments);}
;STXChart.prototype.drawSeries=function(chart,seriesArray,yAxis){var i0Y="un",c2N="ga",T7Y="ke",M4m="ro";if(this.runPrepend("drawSeries",arguments))return ;var quotes=chart.dataSegment,legendColorMap={}
,series=null;if(!seriesArray)seriesArray=chart.series;for(var field in seriesArray){series=seriesArray[field];var parameters=series.parameters;if(!parameters.chartType)continue;var panel=chart.panel;if(parameters.panel)panel=this.panels[parameters.panel];if(!panel)continue;var yax=yAxis?yAxis:panel.yAxis,minMax=[parameters.minimum,parameters.maximum];if((!parameters.minimum&&M2t.V2L(parameters.minimum,0))||(!parameters.maximum&&M2t.E2L(parameters.maximum,0))){var minMaxCalc=STX.minMax(quotes,field);if(!parameters.minimum&&M2t.O2L(parameters.minimum,0))minMax[0]=minMaxCalc[0];if(!parameters.maximum&&M2t.M2L(parameters.maximum,0))minMax[1]=minMaxCalc[1];}
var min=minMax[0],top=yax.top,bottom=yax.bottom,height=M2t.d2L(bottom,top),t=parameters.marginTop,b=parameters.marginBottom;if(t)top=M2t.j2L(t,1)?(top+t):(top+(M2t.F2L(height,t)));if(b)bottom=M2t.I2L(b,1)?(M2t.N2L(bottom,b)):(M2t.m2L(bottom,(height*b)));var multiplier=M2t.p2L((bottom-top),(minMax[1]-min)),started=false,lastPoint=null,val=null,x=null,y=null,px=null,py=null,cw=this.layout.candleWidth,offset=this.offset,context=this.chart.context,isStep=(M2t.X2L(parameters.type,"step")||M2t.f2L(parameters.subtype,"step")),color=parameters.color;if(!color)color=this.defaultColor;var width=parameters.width;if(!width||isNaN(width)||M2t.t9L(width,1))width=1;if(series.highlight||series.parameters.highlight)width*=2;this.startClip(panel.name);seriesPlotter=new STX.Plotter();seriesPlotter.newSeries((q2Y+K9Y+R2Y+n4Y),"stroke",color,1,width);if(parameters.gaps&&parameters.gaps.color)seriesPlotter.newSeries("gap",(g5Y+p1Y+M4m+T7Y),parameters.gaps.color,1,width);else seriesPlotter.newSeries("gap","stroke",color,1,width);if(!series.yValueCache||M2t.L9L(series.yValueCache.length,quotes.length))series.yValueCache=new Array(quotes.length);var yValueCache=series.yValueCache,lastQuote=null,gap=null,firstX=null,firstY=null,points=[],doTransform=series.parameters.shareYAxis&&!yAxis,shareYAxis=series.parameters.shareYAxis||yAxis;for(var i=0;M2t.S9L(i,quotes.length);i++){if(M2t.C9L(x,null)&&M2t.H9L(y,null))points.push([x,y]);var quote=quotes[i];if(!quote)continue;if(quote.transform&&doTransform)quote=quote.transform;val=quote[field];if(!val&&M2t.o9L(val,0)){if(isStep||parameters.gaps){yValueCache[i]=y;}
if(M2t.Y9L(gap,false))seriesPlotter.moveTo("gap",x,y);gap=true;continue;}
if(!isStep&&lastPoint&&M2t.l9L(lastPoint,i-1)){px=x;py=y;}
else{px=null;}
x=panel.left+M2t.y9L(i,cw)+this.offset+this.micropixels;if(M2t.i9L(x,panel.right))lastQuote=quote;if(this.extendLastTick&&M2t.J9L(i,quotes.length-1)){x+=this.offset;}
if(M2t.z9L(firstX,null))firstX=x;if(isStep&&started){if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo((c2N+G5Y),x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?(W9Y+g4Y+G5Y):"line"),x,y);}
points.push([x,y]);}
if(shareYAxis){y=this.pixelFromPrice(val,panel,yax);}
else{y=M2t.G9L(bottom,((val-min)*multiplier));}
if(M2t.e9L(firstY,null))firstY=y;if(M2t.c9L(px,null)){var vector={x0:px,x1:x,y0:py,y1:y}
;for(;M2t.U9L(lastPoint,i);lastPoint++){var xInt=Math.floor(M2t.W9L(lastPoint,cw))+offset,yInt=STX.yIntersection(vector,xInt);yValueCache[lastPoint]=yInt;}
}
yValueCache[i]=y;if(i&&points.length&&started&&!yValueCache[M2t.Z9L(i,1)]&&M2t.A77(yValueCache[i-1],0)){for(var bf=M2t.r77(i,1);M2t.Q77(bf,0);bf--){if(yValueCache[bf])break;yValueCache[bf]=points[M2t.B77(points.length,1)][1];}
}
if(!started){started=true;var leftTick=M2t.k77(chart.dataSet.length,chart.scroll);if(M2t.T77(leftTick,0)){seriesPlotter.moveTo((gap?(c2N+G5Y):"line"),x,y);}
else{var baseline=chart.dataSet[M2t.v77(leftTick,1)];if(baseline.transform&&doTransform)baseline=baseline.transform;var y0=baseline[field];if(shareYAxis){y0=this.pixelFromPrice(y0,panel,yax);}
else{y0=M2t.g77(bottom,((y0-min)*multiplier));}
y0=Math.min(Math.max(y0,top),bottom);if(isNaN(y0)){seriesPlotter.moveTo((gap?"gap":"line"),x,y);}
else{seriesPlotter.moveTo((gap?"gap":"line"),0,y0);if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo("line",x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":(q2Y+n4m+n4Y)),x,y);}
}
}
}
else{if(gap&&parameters.gaps&&parameters.gaps.pattern){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
else if(gap&&!parameters.gaps){seriesPlotter.moveTo("gap",x,y);}
else if(!gap&&parameters.pattern){seriesPlotter.dashedLineTo((m5Y+v0m),x,y,parameters.pattern);}
else{seriesPlotter.lineTo((gap?"gap":"line"),x,y);}
}
lastPoint=i;if(gap)seriesPlotter.moveTo("line",x,y);gap=false;}
if(gap){x=Math.floor(M2t.q77((quotes.length-1),cw)+this.micropixels)+offset;if(this.extendLastTick)x+=this.offset;if(parameters.gaps&&parameters.gaps.pattern){if(started){seriesPlotter.dashedLineTo("gap",x,y,parameters.gaps.pattern);}
}
else if(parameters.gaps){seriesPlotter.lineTo("gap",x,y);}
}
if(M2t.K77(series.parameters.chartType,"mountain")&&points.length){points.push([x,y]);if(!parameters.fillStyle){parameters.fillStyle=color;if(!parameters.fillOpacity)parameters.fillOpacity=0.3;}
seriesPlotter.newSeries("mountain","fill",parameters.fillStyle,parameters.fillOpacity);seriesPlotter.moveTo((X0Y+i0Y+p1Y+g4Y+n4m),firstX,Math.min(bottom,firstY));for(var pt=0;M2t.u77(pt,points.length);pt++){seriesPlotter.lineTo("mountain",points[pt][0],Math.min(bottom,points[pt][1]));}
seriesPlotter.lineTo("mountain",x,bottom);seriesPlotter.lineTo("mountain",firstX,bottom);seriesPlotter.draw(context,"mountain");}
seriesPlotter.draw(context,"gap");seriesPlotter.draw(context,"line");this.endClip();if(shareYAxis&&lastQuote){if(yax.priceFormatter){txt=yax.priceFormatter(this,panel,lastQuote[field],yax);}
else{txt=this.formatYAxisPrice(lastQuote[field],panel,null,yax);}
this.yAxisLabels.push({src:"series","args":[panel,txt,this.pixelFromPrice(lastQuote[field],panel,yax),color,null,null,yax]}
);}
var display=series.parameters.display;if(!display)display=series.display;legendColorMap[field]={color:color,display:display}
;}
if(chart.legend&&series&&series.useChartLegend){if(chart.legendRenderer)chart.legendRenderer(this,{"chart":chart,"legendColorMap":legendColorMap,"coordinates":{x:chart.legend.x,y:chart.legend.y+chart.panel.yAxis.top}
}
);}
this.runAppend("drawSeries",arguments);}
;STXChart.prototype.isDailyInterval=function(interval){if(M2t.s77(interval,e8Y))return r9Y;if(M2t.D77(interval,l6Y))return r9Y;if(M2t.x77(interval,z9N))return r9Y;return y0m;}
;STXChart.prototype.setPeriodicityV2=function(period,interval,cb){var g3Y="et",Q9Y="re",G8Y="ive",b4m="eD",P4m="ack",P1Y="ei",W5Y="ec",K0m="city",K4m="di",f6Y="rio",M2Y="ann";if(this.runPrepend("setPeriodicityV2",arguments))return ;var switchInterval=false;if(interval){if(M2t.n77(interval,(v4m+n4Y+g4Y+B5Y))){interval="month";if(!period)period=1;period=M2t.a77(period,12);}
var getDifferentData=false;if(this.chart.symbol){if(M2t.w77(this.isDailyInterval(interval),this.isDailyInterval(this.layout.interval))||this.dontRoll)getDifferentData=true;if(!this.isDailyInterval(this.layout.interval)){if(M2t.b87(this.layout.interval,interval))getDifferentData=true;}
}
if(getDifferentData){this.layout.interval=interval;this.layout.periodicity=period;this.changeOccurred("layout");if(this.quoteDriver){for(var c in this.charts){if(this.charts[c].symbol)this.quoteDriver.newChart({symbol:this.charts[c].symbol,chart:this.charts[c]}
,cb);}
return ;}
else if(this.dataCallback){this.dataCallback();if(cb)cb(null);return ;}
else{console.log((U4Y+M2Y+O2Y+p1Y+L3Y+U4Y+E9Y+R2Y+W9Y+n4Y+L3Y+G5Y+n4Y+f6Y+K4m+K0m+L3Y+H4Y+W5Y+g4Y+Q8Y+n4Y+L3Y+R2Y+P1Y+p1Y+c1Y+B5Y+L3Y+F4Y+g4Y+p1Y+g4Y+u8m+g4Y+q2Y+q2Y+H4Y+P4m+L3Y+O2Y+B5Y+L3Y+a5Y+X1Y+o4Y+b4m+B5Y+G8Y+B5Y+L3Y+g4Y+Q9Y+L3Y+g5Y+g3Y));return ;}
}
this.layout.interval=interval;}
var chartName,chart;for(chartName in this.charts){chart=this.charts[chartName];var dt,pos=Math.round(M2t.h87(chart.maxTicks,2));this.setCandleWidth(this.layout.candleWidth,chart);var centerMe=true,rightAligned=false;if(M2t.P87(chart.scroll,chart.maxTicks))centerMe=false;else if(chart.dataSegment&&!chart.dataSegment[pos]){centerMe=false;rightAligned=M2t.R87(chart.scroll,chart.dataSet.length);}
if(centerMe&&chart.dataSegment&&M2t.V87(chart.dataSegment.length,0)){if(M2t.E87(chart.maxTicks,((Math.round((this.chart.width/this.layout.candleWidth)-0.499)-1)/2))){pos=M2t.O87(chart.dataSegment.length,1);}
if(M2t.M87(pos,chart.dataSegment.length)){dt=chart.dataSegment[M2t.d87(chart.dataSegment.length,1)].DT;pos=M2t.j87(chart.dataSegment.length,1);}
else{dt=chart.dataSegment[pos].DT;}
}
this.layout.periodicity=period;this.createDataSet();if(centerMe){if(chart.dataSegment&&M2t.F87(chart.dataSegment.length,0)){for(var i=M2t.I87(chart.dataSet.length,1);M2t.N87(i,0);i--){var nd=chart.dataSet[i].DT;if(M2t.m87(nd.getTime(),dt.getTime())){chart.scroll=(M2t.p87(chart.dataSet.length,i))+pos;break;}
}
}
}
else if(!rightAligned){var wsInTicks=Math.round(M2t.X87(this.preferences.whitespace,this.layout.candleWidth));chart.scroll=M2t.f87(chart.maxTicks,wsInTicks);}
else{chart.scroll=chart.dataSet.length+rightAligned;}
}
if(this.displayInitialized)this.draw();this.changeOccurred("layout");if(this.quoteDriver){for(chartName in this.charts){chart=this.charts[chartName];if(chart.symbol&&chart.moreAvailable){this.quoteDriver.checkLoadMore(chart);}
}
}
if(cb)cb(null);this.runAppend("setPeriodicityV2",arguments);}
;STXChart.prototype.drawVectors=function(){if(this.vectorsShowing)return ;if(this.runPrepend("drawVectors",arguments))return ;this.vectorsShowing=true;if(!this.chart.hideDrawings){var tmpPanels={}
,panelName,i;for(i=0;M2t.t07(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];panelName=drawing.panelName;if(!this.panels[drawing.panelName])continue;if(!tmpPanels[panelName]){tmpPanels[panelName]=[];}
tmpPanels[panelName].push(drawing);}
for(panelName in tmpPanels){this.startClip(panelName);var arr=tmpPanels[panelName];for(i=0;M2t.L07(i,arr.length);i++){arr[i].render(this.chart.context);}
this.endClip();}
}
this.runAppend("drawVectors",arguments);}
;STXChart.prototype.consolidatedQuote=function(quotes,position,periodicity,interval,dontRoll,alignToHour){if(M2t.S07(position,0))return null;var arguments$=[quotes,position,periodicity,interval,dontRoll,alignToHour];if(this.runPrepend("consolidatedQuote",arguments$))return null;if(!dontRoll&&this.dontRoll)dontRoll=true;var quote=quotes[position];function consolidate(self,p){var o0m="Hig";if(self.layout.adj&&quotes[p].Adj_Close){ratio=M2t.C07(quotes[p].Adj_Close,quotes[p].Close);}
else{if(typeof ratio=="undefined"||!ratio)ratio=1;}
if(M2t.H07((o0m+T9Y),quotes[p]))if(M2t.o07(quotes[p].High*ratio,quote.High))quote.High=M2t.Y07(quotes[p].High,ratio);if(M2t.l07("Low",quotes[p]))if(M2t.y07(quotes[p].Low*ratio,quote.Low))quote.Low=M2t.i07(quotes[p].Low,ratio);quote.Volume+=quotes[p].Volume;if(M2t.J07("Close",quotes[p])&&M2t.z07(quotes[p].Close,null))quote.Close=M2t.G07(quotes[p].Close,ratio);quote.ratio=ratio;for(var element in quotes[p]){if(!quote[element]){quote[element]=quotes[p][element];}
}
}
function newInterval(p,interval){var d1=quotes[M2t.e07(p,1)].DT,d2=quotes[p].DT;if(M2t.c07(interval,"week")){if(M2t.U07(d2.getDay(),d1.getDay()))return true;}
else if(M2t.W07(interval,"month")){if(M2t.Z07(d2.getMonth(),d1.getMonth()))return true;}
else{if(M2t.A47(d2.getDay(),d1.getDay()))return true;}
return false;}
function newIntradayInterval(position,p,periodicity,interval){var nextBar=M2t.r47(interval,periodicity),d1=new Date(quotes[position].DT);d1.setMinutes(d1.getMinutes()+nextBar);var d2=quotes[p].DT;if(alignToHour){if(M2t.Q47(quotes[position].DT.getMinutes(),nextBar)){if(M2t.B47(d2.getMinutes()%nextBar,0)){return true;}
}
}
if(M2t.k47(d2.getTime(),d1.getTime()))return true;return false;}
var p=position,i;if((M2t.T47(interval,"week")||M2t.v47(interval,"month"))&&!dontRoll){for(i=1;M2t.g47(i,periodicity);i++){while(M2t.q47(p+1,quotes.length)&&!newInterval(p+1,interval)){p++;consolidate(this,p);}
if(M2t.K47(i,periodicity)){p++;if(M2t.u47(p,quotes.length))consolidate(this,p);}
}
}
else if(!this.isDailyInterval(interval)&&M2t.s47(interval,"tick")&&M2t.D47(periodicity,1)){for(i=1;M2t.x47(i,periodicity);i++){p=position+i;if(M2t.n47(p,quotes.length)&&newIntradayInterval(position,p,periodicity,interval)){p--;break;}
if(M2t.a47(p,0)&&M2t.w47(p,quotes.length)){consolidate(this,p);}
}
}
else{for(i=1;M2t.b37(i,periodicity);i++){p=position+i;if(M2t.h37(p,0)&&M2t.P37(p,quotes.length)){consolidate(this,p);}
}
}
for(i in this.plugins){var plugin=this.plugins[i];if(plugin.consolidate)plugin.consolidate(quotes,position,p,quote);}
this.runAppend("consolidatedQuote",arguments$);return {"quote":quote,"position":p+1}
;}
;R(M2t.k9N);H(M2t.V9N);E(M2t.B9N);Y(M2t.O9N);M(M2t.g9N);J(M2t.f7m);u(e7m);STXChart.prototype.displayChart=function(chart){var K8Y="ock",C6Y="_do",u1Y="_d",x2Y="_sha",w6Y="ca",I7m="le_",b2Y="w_c",L3m="holl",M8Y="_u",x7Y="ndl",f4m="tx_hollow",i7Y="le_e",G2Y="and",K6Y="ollow",P7Y="_dow",r3m="ndf",k8Y="x_p",y6Y="disp",noBorders=(M2t.R37(this.layout.candleWidth-chart.tmpWidth,2)&&M2t.V37(chart.tmpWidth,3));if(this.runPrepend((y6Y+q2Y+G0Y+u8m+T9Y+F2Y),arguments))return ;this.chart.baseLegendColors=[];var chartType=this.layout.chartType,colorFunction=null;if(chart.customChart){if(chart.customChart.chartType)chartType=chart.customChart.chartType;if(chart.customChart.colorFunction)colorFunction=chart.customChart.colorFunction;}
this.controls.baselineHandle.style.display="none";var panel=chart.panel;if(M2t.E37(this.layout.aggregationType,"kagi")){this.drawKagiSquareWave(panel,"stx_kagi_up","stx_kagi_down");this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_kagi_down"));}
else if(M2t.O37(this.layout.aggregationType,"pandf")){this.drawPointFigureChart(panel,"stx_pandf_up","X");this.chart.baseLegendColors.push(this.getCanvasColor("stx_pandf_up"));this.drawPointFigureChart(panel,"stx_pandf_down","O");this.chart.baseLegendColors.push(this.getCanvasColor((g5Y+p1Y+k8Y+g4Y+r3m+P7Y+R2Y)));}
else if(M2t.M37(chartType,"line")){this.drawLineChart(panel,"stx_line_chart");}
else if(M2t.d37(chartType,"mountain")){this.chart.baseLegendColors=null;this.drawMountainChart(panel);}
else if(M2t.j37(chartType,"wave")){this.drawWaveChart(panel);}
else if(M2t.F37(chartType,"bar")){this.startClip(panel.name);this.drawBarChartHighPerformance(panel,"stx_bar_chart");this.endClip();}
else if(M2t.I37(chartType,"colored_line")){this.startClip(panel.name);var stxLineUpColor=this.getCanvasColor("stx_line_up"),stxLineDownColor=this.getCanvasColor("stx_line_down"),stxLineColor=this.getCanvasColor("stx_line_chart");if(!colorFunction)colorFunction=function(stx,quote,mode){if(M2t.N37(quote.Close,quote.iqPrevClose))return stxLineUpColor;else if(M2t.m37(quote.Close,quote.iqPrevClose))return stxLineDownColor;else return stxLineColor;return null;}
;var colors1=this.drawLineChart(panel,"stx_line_chart",colorFunction);for(var c1 in colors1)this.chart.baseLegendColors.push(c1);this.endClip();}
else if(M2t.p37(chartType,"colored_bar")){this.startClip(panel.name);if(colorFunction){var colors2=this.drawBarChart(panel,"stx_bar_chart",colorFunction);for(var c2 in colors2)this.chart.baseLegendColors.push(c2);}
else{this.drawBarChartHighPerformance(panel,"stx_bar_up",STXChart.CLOSEUP);this.drawBarChartHighPerformance(panel,"stx_bar_down",STXChart.CLOSEDOWN);this.drawBarChartHighPerformance(panel,"stx_bar_even",STXChart.CLOSEEVEN);this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_up"));this.chart.baseLegendColors.push(this.getCanvasColor("stx_bar_down"));}
this.endClip();}
else if(M2t.X37(chartType,"hollow_candle")){this.startClip(panel.name);if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType]){this.drawShadowsHighPerformance(panel,"stx_hollow_candle_up",STXChart.CLOSEUP);this.drawShadowsHighPerformance(panel,"stx_hollow_candle_down",STXChart.CLOSEDOWN);this.drawShadowsHighPerformance(panel,(J4Y+J4m+D3Y+T9Y+K6Y+D3Y+U4Y+G2Y+i7Y+S3m+n4Y+R2Y),STXChart.CLOSEEVEN);}
var colorUp=this.getCanvasColor((g5Y+f4m+D3Y+U4Y+g4Y+x7Y+n4Y+M8Y+G5Y)),colorDown=this.getCanvasColor("stx_hollow_candle_down"),colorEven=this.getCanvasColor((g5Y+p1Y+J4m+D3Y+L3m+O2Y+b2Y+g4Y+G0m+I7m+n4Y+S3m+Q4Y));this.drawCandlesHighPerformance(panel,colorUp,"transparent",M2t.f37(STXChart.CLOSEUP,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorDown,"transparent",M2t.t67(STXChart.CLOSEDOWN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,colorEven,"transparent",M2t.L67(STXChart.CLOSEEVEN,STXChart.CANDLEDOWN));this.drawCandlesHighPerformance(panel,this.containerColor,colorUp,M2t.S67(STXChart.CLOSEUP,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorDown,M2t.C67(STXChart.CLOSEDOWN,STXChart.CANDLEUP));this.drawCandlesHighPerformance(panel,this.containerColor,colorEven,M2t.H67(STXChart.CLOSEEVEN,STXChart.CANDLEUP));this.chart.baseLegendColors.push(colorUp);this.chart.baseLegendColors.push(colorDown);}
this.endClip();}
else if(M2t.o67(chartType,"candle")){this.startClip(panel.name);var coloredShadowUp=this.getCanvasColor("stx_candle_shadow_up"),coloredShadowDown=this.getCanvasColor((g5Y+p1Y+J2Y+w6Y+G0m+q2Y+n4Y+x2Y+F4Y+O2Y+x4m+u1Y+H3Y+R2Y)),coloredShadow=(M2t.Y67(coloredShadowUp,coloredShadowDown));if(!colorFunction&&coloredShadow){var stxCandleShadow=this.getCanvasColor("stx_candle_shadow"),stxCandleUpColor=this.getCanvasColor("stx_candle_up"),stxCandleDownColor=this.getCanvasColor((g5Y+p1Y+J2Y+U4Y+g4Y+G0m+f1Y+C6Y+x4m+R2Y)),stxCandleUp=this.canvasStyle("stx_candle_up"),stxCandleDown=this.canvasStyle("stx_candle_down");colorFunction=function(stx,quote,mode){var i1Y="ol";if(M2t.l67(mode,"shadow")){if(coloredShadow){if(M2t.y67(quote.Close,quote.Open))return coloredShadowUp;else if(M2t.i67(quote.Close,quote.Open))return coloredShadowDown;}
return stxCandleShadow;}
else if(M2t.J67(mode,(g5Y+i1Y+V7Y))){if(M2t.z67(quote.Close,quote.Open))return stxCandleUpColor;else if(M2t.G67(quote.Close,quote.Open))return stxCandleDownColor;else if(M2t.e67(quote.Close,quote.Open))return stxCandleShadow;}
else if(M2t.c67(mode,"outline")){var styleArray1;if(M2t.U67(quote.Close,quote.Open))styleArray1=stxCandleUp;else if(M2t.W67(quote.Close,quote.Open))styleArray1=stxCandleDown;else return null;var borderColor=styleArray1["border-left-color"];if(!borderColor)borderColor=styleArray1.borderLeftColor;return borderColor;}
return null;}
;}
if(colorFunction){if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadows(panel,colorFunction);this.drawCandles(panel,colorFunction,false);if(!noBorders)this.drawCandles(panel,colorFunction,true);}
else{if(!this.noWicksOnCandles[this.layout.aggregationType])this.drawShadowsHighPerformance(panel,"stx_candle_shadow");var styleArray=this.canvasStyle("stx_candle_up"),borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_up"),borderColor,STXChart.CANDLEUP);this.chart.baseLegendColors.push(styleArray.color);styleArray=this.canvasStyle("stx_candle_down");borderColor=styleArray["border-left-color"];if(!borderColor)borderColor=styleArray.borderLeftColor;if(noBorders)borderColor=null;this.drawCandlesHighPerformance(panel,this.getCanvasColor("stx_candle_down"),borderColor,STXChart.CANDLEDOWN);this.chart.baseLegendColors.push(styleArray.color);}
this.endClip();}
else if(M2t.Z67(chartType,"baseline_delta")){this.startClip(panel.name);this.setStyle("stx_baseline_trace","opacity",0);this.drawLineChart(panel,"stx_baseline_trace");var baseline=chart.baseline.actualLevel;if(M2t.A17(baseline,null)){baseline=this.pixelFromPriceTransform(baseline,chart.panel);var styles={"over":"stx_baseline_up","under":"stx_baseline_down"}
;for(var s in styles){var parameters={panelName:"chart",band:"Close",threshold:chart.baseline.actualLevel,color:this.getCanvasColor(styles[s]),direction:(M2t.r17(s,"over")?1:-1),edgeHighlight:this.getCanvasColor(styles[s]),edgeParameters:{pattern:"solid",lineWidth:parseInt(this.canvasStyle(styles[s]).width,10)+0.1,opacity:1}
}
,color=parameters.color;if(color&&M2t.Q17(color,"transparent")){var gradient=chart.context.createLinearGradient(0,(M2t.B17(s,"over")?0:M2t.k17(2,baseline)),0,baseline);gradient.addColorStop(0,STX.hexToRgba(color,60));gradient.addColorStop(1,STX.hexToRgba(color,10));parameters.color=gradient;parameters.opacity=1;}
STX.Studies.preparePeakValleyFill(this,chart.dataSegment,parameters);this.chart.baseLegendColors.push(color);}
this.plotLine(0,1,baseline,baseline,this.containerColor,"line",chart.context,true,{pattern:"solid",lineWidth:"1.1",opacity:1}
);this.plotLine(0,1,baseline,baseline,this.getCanvasColor("stx_baseline"),"line",chart.context,true,{pattern:(V2Y),lineWidth:"2.1",opacity:0.5}
);if(M2t.T17(this.chart.baseline.userLevel,false)){this.controls.baselineHandle.style.top=M2t.v17(baseline,parseInt(getComputedStyle(this.controls.baselineHandle).height,10)/2,"px");this.controls.baselineHandle.style.left=M2t.y17(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10),"px");this.controls.baselineHandle.style.display=(H4Y+q2Y+K8Y);}
}
this.endClip();}
else if(M2t.j17(chartType,"scatterplot")){this.startClip(panel.name);this.scatter(panel);this.endClip();}
else{this.chart.baseLegendColors=null;}
this.runAppend("displayChart",arguments);}
;STXChart.prototype.calculateATR=function(chart,period){if(!period)period=20;var total=0;for(var i=1;M2t.F17(i,chart.dataSet.length);i++){var prices=chart.dataSet[i],pd=chart.dataSet[M2t.I17(i,1)],trueRange=Math.max(Math.max(M2t.N17(prices.High,prices.Low),M2t.m17(prices.High,pd.Close)),M2t.p17(pd.Close,prices.Low));total+=trueRange;if(M2t.X17(i,period))total-=chart.dataSet[M2t.f17(i,period)].trueRange;prices.trueRange=trueRange;prices.atr=M2t.t57(total,period);}
}
;STXChart.prototype.currentQuote=function(){var quote=null;for(var i=M2t.L57(this.chart.dataSet.length,1);M2t.S57(i,0);i--)if(this.chart.dataSet[i])return this.chart.dataSet[i];return null;}
;STXChart.prototype.correctIfOffEdge=function(theChart){if(this.runPrepend("correctIfOffEdge",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName],leftPad=Math.round(M2t.C57(chart.maxTicks,3));if(M2t.H57(leftPad,chart.dataSet.length))leftPad=chart.dataSet.length;if(chart.allowScrollPast){var rightPad=M2t.o57(chart.maxTicks,leftPad);if(M2t.Y57(chart.maxTicks-rightPad,chart.dataSet.length)){rightPad=M2t.l57(chart.maxTicks,chart.dataSet.length);}
if(M2t.y57(chart.scroll-rightPad,chart.dataSet.length)){chart.scroll=chart.dataSet.length+rightPad;}
if(M2t.i57(chart.scroll,leftPad)){chart.scroll=leftPad;}
}
else{if(M2t.J57(chart.scroll,leftPad)){chart.scroll=leftPad;}
if(M2t.z57(chart.scroll,chart.dataSet.length)){chart.scroll=chart.dataSet.length;}
}
}
this.runAppend("correctIfOffEdge",arguments);}
;STXChart.prototype.createDataSegment=function(theChart){var D9N="men",P0Y="Seg";if(this.runPrepend("createDataSegment",arguments))return ;for(var chartName in this.charts){var chart=this.charts[chartName];if(theChart)chart=theChart;chart.baseline.actualLevel=chart.baseline.userLevel?chart.baseline.userLevel:chart.baseline.defaultLevel;chart.dataSegment=[];var position=M2t.G57(chart.dataSet.length,chart.scroll,1);for(var i=-1;M2t.m57(i,chart.scroll)&&M2t.p57(i,chart.maxTicks);i++){position++;if(i==-1&&!chart.baseline.includeInDataSegment)continue;if(M2t.X57(position,chart.dataSet.length)&&M2t.f57(position,0)){chart.dataSegment.push(chart.dataSet[position]);if(M2t.t27(chart.baseline.actualLevel,null)&&M2t.L27(i,0))chart.baseline.actualLevel=chart.dataSet[position].iqPrevClose;}
else if(M2t.S27(position,0)){chart.dataSegment.push(null);}
}
if(theChart)break;}
this.runAppend((U4Y+B5Y+v2Y+r5Y+l0Y+g4Y+p1Y+g4Y+P0Y+D9N+p1Y),arguments);}
;STXChart.prototype.leftTick=function(){return M2t.C27(this.chart.dataSet.length,this.chart.scroll);}
;STXChart.prototype.getStartDateOffset=function(){for(var ds=0;M2t.H27(ds,this.chart.dataSegment.length);ds++){if(this.chart.dataSegment[ds]){return ds;}
}
return 0;}
;STXChart.prototype.setStartDate=function(dt){for(var i=0;M2t.o27(i,this.chart.dataSet.length);i++){var bar=this.chart.dataSet[i];if(M2t.Y27(bar.DT.getTime(),dt.getTime())){this.chart.scroll=M2t.l27(this.chart.dataSet.length,i);this.draw();return ;}
}
}
;STXChart.prototype.updateListeners=function(event){for(var i in this.plugins){var plugin=this.plugins[i];if(plugin.display&&plugin.listener)plugin.listener(this,event);}
}
;STXChart.prototype.clearPixelCache=function(){for(var x in this.panels){var panel=this.panels[x];panel.cacheHigh=null;panel.cacheLow=null;panel.cacheLeft=1000000;panel.cacheRight=-1;}
for(var chartName in this.charts){var chart=this.charts[chartName];if(!chart.dataSet)continue;for(var i=0;M2t.y27(i,chart.dataSet.length);i++){chart.dataSet[i].cache={}
;}
}
}
;STXChart.prototype.createYAxisLabel=function(panel,txt,y,backgroundColor,color,ctx,yAxis){var n7m="dl",j4Y="mid",n8Y="ax",b0m="tx_y",k0m="is",yax=yAxis?yAxis:panel.yAxis,context=ctx?ctx:this.chart.context,margin=3,height=this.getCanvasFontSize((g5Y+p1Y+J2Y+p8Y+J4m+k0m))+M2t.i27(margin,2);this.canvasFont((g5Y+b0m+n8Y+K9Y+g5Y),context);var drawBorders=yax.displayBorder||this.axisBorders,tickWidth=drawBorders?3:0,width;try{width=context.measureText(txt).width+tickWidth+M2t.J27(margin,2);}
catch(e){width=yax.width;}
var x=M2t.z27(yax.left,margin,3),textx=x+margin+tickWidth,radius=3,position=(M2t.N27(yax.position,null)?panel.chart.yAxis.position:yax.position);if(M2t.m27(position,"left")){x=yax.left+yax.width+margin-3;width=width*-1;textx=x;radius=-3;context.textAlign="right";}
if(M2t.p27(y+(height/2),yax.bottom))y=M2t.X27(yax.bottom,(height/2));if(M2t.f27(y-(height/2),yax.top))y=yax.top+(M2t.t97(height,2));context.fillStyle=backgroundColor;if(typeof (STX[this.yaxisLabelStyle])=='undefined'){this.yaxisLabelStyle="roundRectArrow";}
var yaxisLabelStyle=this.yaxisLabelStyle;if(yax.yaxisLabelStyle)yaxisLabelStyle=yax.yaxisLabelStyle;STX[yaxisLabelStyle](context,x,M2t.L97(y,(height/2)),width,height,radius,true,false);context.textBaseline=(j4Y+n7m+n4Y);context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(M2t.S97(context.fillStyle,backgroundColor)){if(M2t.C97(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle="#000000";else context.fillStyle="#FFFFFF";}
context.fillText(txt,textx,y+1);context.textAlign=(f1Y+D9Y+p1Y);}
;STXChart.prototype.createXAxisLabel=function(panel,txt,x,backgroundColor,color,pointed){var context=this.chart.context,margin=2,fontstyle="stx-float-date",height=this.getCanvasFontSize(fontstyle)+M2t.H97(margin,2);this.canvasFont(fontstyle,context);var width;try{width=context.measureText(txt).width+M2t.o97(margin,2);}
catch(e){width=0;}
var y=panel.top+panel.height-height;if(M2t.Y97(x+(width/2),panel.right))x=M2t.l97(panel.right,(width/2));if(M2t.y97(x-(width/2),panel.left))x=panel.left+(M2t.i97(width,2));context.fillStyle=backgroundColor;STX.roundRect(context,M2t.J97(x,(width/2)),y,width,height,3,true,false);if(pointed){var arrowHeight=M2t.z97(panel.bottom,panel.yAxis.bottom,height);context.beginPath();context.moveTo(M2t.N97(x,arrowHeight),y);context.lineTo(x,M2t.m97(y,arrowHeight));context.lineTo(x+arrowHeight,y);context.closePath();context.fill();}
context.textBaseline="top";context.fillStyle=color?color:STX.chooseForegroundColor(backgroundColor);if(M2t.p97(context.fillStyle,backgroundColor)){if(M2t.X97(backgroundColor.toUpperCase(),"#FFFFFF"))context.fillStyle=(U2Y+S2Y+S2Y+S2Y+S2Y+S2Y+S2Y);else context.fillStyle="#FFFFFF";}
context.fillText(txt,M2t.f97(x,width/2,margin),y+margin);}
;STXChart.prototype.drawCurrentHR=function(){if(this.runPrepend("drawCurrentHR",arguments))return ;var backgroundColor,color;for(var chartName in this.charts){var chart=this.charts[chartName],panel=chart.panel,yAxis=panel.yAxis;if(M2t.b7W(yAxis.drawCurrentPriceLabel,false))continue;if(chart.customChart&&M2t.h7W(chart.customChart.chartType,"none"))continue;var whichSet=yAxis.whichSet;if(!whichSet)whichSet="dataSet";var l=chart[whichSet].length;if(M2t.P7W(whichSet,"dataSegment")){while(M2t.R7W(l,(chart.width-this.micropixels+(this.offset+this.layout.candleWidth)/2+1)/this.layout.candleWidth))l--;}
if(l){var quote=chart[whichSet][M2t.V7W(l,1)],prevClose=quote.Close,currentClose=quote.Close;if(M2t.E7W(chart.dataSet.length,2)){var quote2=chart[whichSet][M2t.O7W(l,2)];prevClose=quote2.Close;}
if(M2t.M7W(currentClose,prevClose)){backgroundColor=this.canvasStyle("stx_current_hr_down").backgroundColor;color=this.canvasStyle("stx_current_hr_down").color;}
else{backgroundColor=this.canvasStyle("stx_current_hr_up").backgroundColor;color=this.canvasStyle("stx_current_hr_up").color;}
if(quote.transform)quote=quote.transform;var txt,labelDecimalPlaces=Math.max(panel.yAxis.printDecimalPlaces,panel.chart.decimalPlaces);if(yAxis.maxDecimalPlaces||M2t.d7W(yAxis.maxDecimalPlaces,0))labelDecimalPlaces=Math.min(labelDecimalPlaces,yAxis.maxDecimalPlaces);if(yAxis.priceFormatter){txt=yAxis.priceFormatter(this,panel,quote.Close,labelDecimalPlaces);}
else{txt=this.formatYAxisPrice(quote.Close,panel,labelDecimalPlaces);}
var y=this.pixelFromPrice(quote.Close,panel);this.createYAxisLabel(panel,txt,y,backgroundColor,color);}
}
this.runAppend("drawCurrentHR",arguments);}
;STXChart.prototype.getDefaultColor=function(){var E8Y=0.65;this.defaultColor=a6Y;var bgColor=t9Y,div=this.chart.container;while(!bgColor||STX.isTransparent(bgColor)){var cStyle=getComputedStyle(div);if(!cStyle)return ;bgColor=cStyle.backgroundColor;if(STX.isTransparent(bgColor))bgColor=E1Y;div=div.parentNode;if(!div||!div.tagName)break;}
if(bgColor){if(M2t.j7W(bgColor,E1Y))bgColor=Y8m;this.containerColor=bgColor;if(!STX.isTransparent(bgColor)){var hsv=STX.hsv(bgColor),v=hsv[M2t.B9N];if(M2t.F7W(v,E8Y))this.defaultColor=a6Y;else this.defaultColor=Y8m;}
else{this.defaultColor=a6Y;}
}
else{this.containerColor=Y8m;}
}
;STXChart.prototype.startAsyncAction=function(){if(!this.pendingAsyncs)this.pendingAsyncs=[];this.pendingAsyncs.push(r9Y);}
;STXChart.prototype.registerChartDrawnCallback=function(fc){if(!this.asyncCallbacks)this.asyncCallbacks=[];this.asyncCallbacks.push(fc);return {fc:fc}
;}
;STXChart.prototype.unregisterChartDrawnCallback=function(obj){for(var i=0;M2t.I7W(i,this.asyncCallbacks.length);i++){if(M2t.N7W(this.asyncCallbacks[i],obj.fc)){this.asyncCallbacks.splice(i,1);return ;}
}
}
;STXChart.prototype.makeAsyncCallbacks=function(){if(!this.asyncCallbacks)return ;if(!this.pendingAsyncs||!this.pendingAsyncs.length){for(var i=0;M2t.m7W(i,this.asyncCallbacks.length);i++){(this.asyncCallbacks[i])();}
}
}
;STXChart.prototype.completeAsyncAction=function(){this.pendingAsyncs.pop();this.makeAsyncCallbacks();}
;STXChart.prototype.draw=function(){if(!this.chart.canvas)return ;if(!this.chart.dataSet)return ;if(!this.chart.canvasHeight)return ;this.offset=M2t.p7W(this.layout.candleWidth,this.candleWidthPercent,2);STX.clearCanvas(this.chart.canvas,this);if(this.runPrepend("draw",arguments))return ;if(!this.xaxisHeight){this.xaxisHeight=this.getCanvasFontSize("stx_xaxis")+4;if(this.chart.xAxis.displayBorder||this.axisBorders)this.xaxisHeight+=3;}
this.getDefaultColor();this.vectorsShowing=false;this.drawPanels();this.yAxisLabels=[];var i,chart,chartName,plugin;for(chartName in this.charts){chart=this.charts[chartName];this.correctIfOffEdge();this.createDataSegment();var axisRepresentation=this.createXAxis(chart);this.initializeDisplay(chart);this.rendererAction(chart,"calculate");this.renderYAxis(chart);this.drawXAxis(chart,axisRepresentation);chart.tmpWidth=Math.floor(M2t.a7W(this.layout.candleWidth,this.candleWidthPercent));if(M2t.w7W(chart.tmpWidth%2,0)){chart.tmpWidth+=1;if(M2t.b8W(chart.tmpWidth,this.layout.candleWidth))chart.tmpWidth-=2;}
if(M2t.h8W(chart.tmpWidth,0.5))chart.tmpWidth=0.5;for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawUnder)plugin.drawUnder(this,chart);}
}
this.rendererAction(chart,"underlay");STX.Studies.displayStudies(this,chart,true);this.displayChart(chart);STX.Studies.displayStudies(this,chart,false);this.rendererAction(chart,"overlay");}
for(chartName in this.charts){chart=this.charts[chartName];for(i in this.plugins){plugin=this.plugins[i];if(plugin.display){if(plugin.drawOver)plugin.drawOver(this,chart);}
}
}
for(var panel in this.panels){this.plotYAxisText(this.panels[panel]);}
for(var yLbl=0;M2t.P8W(yLbl,this.yAxisLabels.length);yLbl++){this.createYAxisLabel.apply(this,this.yAxisLabels[yLbl].args);}
this.createCrosshairs();this.drawVectors();this.drawCurrentHR();this.displayInitialized=true;if(this.controls.home){if(M2t.R8W(this.chart.scroll-1,Math.ceil(this.chart.width/this.layout.candleWidth))){this.controls.home.style.display="block";}
else{this.controls.home.style.display="none";}
}
this.positionMarkers();for(chartName in this.charts){chart=this.charts[chartName];if(this.quoteDriver)this.quoteDriver.checkLoadMore(chart);}
this.runAppend("draw",arguments);this.makeAsyncCallbacks();}
;STXChart.prototype.adjustBackingStore=function(canvas,context){var w5Y='px';this.devicePixelRatio=window.devicePixelRatio||1;if(M2t.V8W(this.devicePixelRatio,1.0))this.devicePixelRatio=1.0;backingStoreRatio=context.webkitBackingStorePixelRatio||context.mozBackingStorePixelRatio||context.msBackingStorePixelRatio||context.oBackingStorePixelRatio||context.backingStorePixelRatio||1;ratio=M2t.E8W(this.devicePixelRatio,backingStoreRatio);if(M2t.O8W(this.devicePixelRatio,backingStoreRatio)&&(!STX.isAndroid||STX.is_chrome)){var oldWidth=canvas.width,oldHeight=canvas.height;canvas.width=M2t.M8W(oldWidth,ratio);canvas.height=M2t.d8W(oldHeight,ratio);canvas.style.width=oldWidth+'px';canvas.style.height=oldHeight+(w5Y);context.scale(ratio,ratio);}
}
;STXChart.prototype.resizeCanvas=function(){if(!this.chart.panel)this.chart.panel=this.panels.chart;var canvas=this.chart.canvas,context=this.chart.context;if(canvas&&context){this.chart.tempCanvas.height=canvas.height=this.chart.container.clientHeight;this.chart.tempCanvas.width=canvas.width=this.chart.container.clientWidth;this.adjustBackingStore(canvas,context);this.adjustBackingStore(this.chart.tempCanvas,this.chart.tempCanvas.context);this.floatCanvas.height=canvas.height;this.floatCanvas.width=canvas.width;this.adjustBackingStore(this.floatCanvas,this.floatCanvas.context);}
var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.canvasWidth=this.chart.canvasWidth=this.chart.container.clientWidth;this.right=this.left+this.canvasWidth;this.height=this.chart.container.clientHeight;this.width=M2t.j8W(this.right,this.left);this.bottom=this.top+this.height;this.calculateYAxisPositions();this.chart.canvasRight=this.right;this.chart.canvasHeight=this.height;var candleWidth=this.layout.candleWidth;if(typeof (candleWidth)=="undefined")candleWidth=8;for(var chartName in this.charts){var chart=this.charts[chartName];if(this.layout.span){this.setCandleWidth(this.getSpanCandleWidth(this.layout.span),chart);}
else{this.setCandleWidth(candleWidth,chart);if(M2t.F8W(chart.scroll,chart.width/candleWidth)){chart.scroll=Math.floor(M2t.I8W(chart.width,candleWidth));var wsInTicks=Math.round(M2t.N8W(this.preferences.whitespace,this.layout.candleWidth));chart.scroll-=wsInTicks;}
}
var idealNumberOfTicks=10,appxLabelWidth;try{appxLabelWidth=M2t.m8W(context.measureText("10:00").width,2);}
catch(e){appxLabelWidth=100;}
while(M2t.p8W(idealNumberOfTicks,1)){if(M2t.X8W(this.chart.width/appxLabelWidth,idealNumberOfTicks))break;idealNumberOfTicks/=1.5;}
chart.xAxis.autoComputedTickSizePixels=Math.round(M2t.f8W(this.chart.width,idealNumberOfTicks));if(M2t.t0W(chart.xAxis.autoComputedTickSizePixels,1))chart.xAxis.autoComputedTickSizePixels=1;}
}
;STXChart.prototype.setCandleWidth=function(newCandleWidth,chart){if(!chart)chart=this.chart;if(M2t.L0W(newCandleWidth,M2t.k9N))newCandleWidth=M2t.g9N;this.layout.candleWidth=newCandleWidth;chart.maxTicks=Math.ceil(M2t.S0W(this.chart.width,newCandleWidth)+0.5);}
;STXChart.prototype.resizeChart=function(){var previousHeight=this.chart.canvasHeight;this.resizeCanvas();this.adjustPanelPositions();if(this.displayInitialized){this.draw();}
else if(M2t.C0W(this.chart.canvasHeight,M2t.k9N)&&M2t.H0W(previousHeight,M2t.k9N)){this.draw();}
}
;STXChart.prototype.calculateMinutesInSession=function(chart){var a8m=59,minutes=M2t.o0W((chart.endHour-chart.beginHour),h0m);minutes+=chart.endMinute;minutes-=chart.beginMinute;if(M2t.Y0W(chart.endMinute,a8m))minutes++;chart.minutesInSession=minutes;}
;STXChart.prototype.newChart=function(symbol,masterData,chart,cb){var T7m="igu",H2Y="nf",x0Y="oteFeed",r7m="fie",z6Y="pec",n7Y="erD",o8Y="ast",E4Y="Warni",A4m='object';if(!chart)chart=this.chart;if((M2t.l0W(chart.endHour,t9Y)&&M2t.y0W(chart.beginHour,t9Y)&&M2t.i0W(chart.endMinute,t9Y)&&M2t.J0W(chart.beginMinute,t9Y))||(M2t.z0W(chart.endHour+chart.beginHour+chart.endMinute+chart.beginMinute,M2t.k9N))){var hours=STX.LegacyMarket.getHours(symbol,this.layout.extended);chart.endHour=hours.endHour;chart.beginHour=hours.beginHour;chart.endMinute=hours.endMinute;chart.beginMinute=hours.beginMinute;}
var prevSymbol=chart.symbol,prevSymbolObject=STX.clone(chart.symbolObject);if(!symbol){chart.symbol=t9Y;chart.symbolObject={symbol:t9Y}
;}
else if(typeof symbol==A4m){chart.symbol=symbol.symbol;chart.symbolObject=symbol;}
else{chart.symbol=symbol;chart.symbolObject.symbol=symbol;}
if(!masterData&&this.quoteDriver){this.quoteDriver.newChart({symbol:chart.symbol,chart:chart,initializeChart:r9Y}
,function(err){if(err){chart.symbol=prevSymbol;chart.symbolObject=prevSymbolObject;}
if(cb)cb(err);}
);}
else{if(!masterData){console.log((E4Y+R2Y+W9Y+f8m+j7Y+O2Y+L3Y+N2Y+o8Y+n7Y+g4Y+r1Y+L3Y+g5Y+z6Y+K9Y+r7m+F4Y+L3Y+g4Y+R2Y+F4Y+L3Y+R2Y+O2Y+L3Y+U2N+X1Y+x0Y+L3Y+U4Y+O2Y+H2Y+T7m+B5Y+n4Y+F4Y));}
if(!chart.symbol)chart.symbol=D1Y;this.setMasterData(masterData,chart);this.createDataSet();this.initializeChart();this.draw();if(cb)cb();}
}
;STXChart.prototype.setMasterData=function(masterData,chart){if(!chart)chart=this.chart;this.calculateMinutesInSession(chart);chart.masterData=masterData;if(M2t.G0W(chart.name,"chart"))this.masterData=masterData;chart.decimalPlaces=2;var i;for(i=0;masterData&&M2t.e0W(i,masterData.length);i++){var quotes=masterData[i];if(quotes.DT){if(M2t.c0W(quotes.DT.constructor,String)){quotes.DT=new Date(quotes.DT);}
quotes.Date=STX.yyyymmddhhmm(quotes.DT);}
else if(quotes.Date)quotes.DT=STX.strToDateTime(quotes.Date);if(quotes.Volume)quotes.Volume=parseInt(quotes.Volume,10);if(quotes.Close){var cs=quotes.Close.toString(),point=cs.indexOf('.');if(point!=-1){var dp=M2t.U0W(cs.length,point,1);if(M2t.f0W(dp,chart.decimalPlaces)){chart.decimalPlaces=dp;}
}
}
if(M2t.t4W(quotes.High,null))delete  quotes.High;if(M2t.L4W(quotes.Low,null))delete  quotes.Low;if(M2t.S4W(quotes.Open,null))delete  quotes.Open;}
if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(masterData);this.chart.roundit=Math.pow(10,chart.decimalPlaces);for(i in this.plugins){var plugin=this.plugins[i];if(plugin.display){if(plugin.setMasterData)plugin.setMasterData(this,chart);}
}
for(var s in this.chart.series){var series=this.chart.series[s];if(series.addSeriesData){series.addSeriesData(this);}
}
}
;STXChart.prototype.setDisplayDate=function(quote){var dt=quote.DT,milli=M2t.C4W(dt.getSeconds(),n0m)+dt.getMilliseconds(),newDT;if(this.dataZone){newDT=new timezoneJS.Date(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),this.dataZone);dt=new Date(newDT.getTime()+milli);}
if(this.displayZone){newDT=new timezoneJS.Date(dt.getTime(),this.displayZone);dt=new Date(newDT.getFullYear(),newDT.getMonth(),newDT.getDate(),newDT.getHours(),newDT.getMinutes());dt=new Date(dt.getTime()+milli);}
quote.displayDate=dt;}
;STXChart.prototype.setDisplayDates=function(masterData){for(var i=0;M2t.H4W(i,masterData.length);i++){var quote=masterData[i];if(quote.DT)this.setDisplayDate(quote);}
}
;STXChart.prototype.streamTrade=function(priceData,now,symbol){var price=null,bid=null,ask=null,volume=0;if(typeof priceData=="object"){price=priceData.last;bid=priceData.bid;ask=priceData.ask;volume=priceData.volume;}
else{price=arguments[0];volume=arguments[1];now=arguments[2];symbol=arguments[3];}
var md=this.masterData;if(!now){now=new Date();if(this.dataZone){var tzNow=STX.convertTimeZone(now,null,this.dataZone);now=new Date(tzNow.getFullYear(),tzNow.getMonth(),tzNow.getDate(),tzNow.getHours(),tzNow.getMinutes(),tzNow.getSeconds(),tzNow.getMilliseconds());}
}
else{now=new Date(now);}
var quote;if(!md||!md.length){quote={Date:STX.yyyymmddhhmm(now),DT:now,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;this.appendMasterData([quote]);}
else{quote=STX.clone(md[M2t.o4W(md.length,1)]);var next=this.getNextInterval(quote.DT,null,this.dataZone);if(M2t.Y4W(now,next)){var force=false;if(symbol){if(price||M2t.l4W(price,0)){quote[symbol]=price;force=true;}
}
else{if(price||M2t.y4W(price,0)){quote.Close=price;if(M2t.i4W(price,quote.High))quote.High=price;if(M2t.J4W(price,quote.Low))quote.Low=price;}
if(volume)quote.Volume+=volume;if(bid||M2t.z4W(bid,0))quote.Bid=bid;if(ask||M2t.G4W(ask,0))quote.Ask=ask;}
this.appendMasterData([quote],null,force);}
else{var next2=this.getNextInterval(next,null,this.dataZone),gaps=[];while(M2t.e4W(next2,now)){var gap={Date:STX.yyyymmddhhmm(next),DT:next,Close:quote.Close,Open:quote.Close,High:quote.Close,Low:quote.Close,Volume:0,Bid:quote.Bid,Ask:quote.Ask}
;gaps.push(gap);next=next2;next2=this.getNextInterval(next,null,this.dataZone);}
quote={Date:STX.yyyymmddhhmm(next),DT:next,Open:price,Close:price,High:price,Low:price,Volume:volume,Bid:bid,Ask:ask}
;gaps.push(quote);this.appendMasterData(gaps);}
}
}
;STXChart.prototype.appendMasterData=function(appendQuotes,chart,params){var i8Y="rD",d2Y="endM";if(typeof params!="object"){params={force:params}
;}
if(!params)params={}
;if(this.runPrepend((g4Y+G5Y+G5Y+d2Y+f7Y+p1Y+n4Y+i8Y+g4Y+p1Y+g4Y),arguments))return ;if(M2t.c4W(appendQuotes.constructor,Object))appendQuotes=[appendQuotes];if(!appendQuotes||!appendQuotes.length)return ;var dt=appendQuotes[0].DT;if(!dt)dt=STX.strToDateTime(appendQuotes[0].Date);if(!chart)chart=this.chart;var masterData=chart.masterData,i;if(!masterData||!masterData.length){masterData=chart.masterData=STX.clone(appendQuotes);for(i=0;M2t.U4W(i,masterData.length);i++){if(masterData[i].DT)masterData[i].Date=STX.yyyymmddhhmm(masterData[i].DT);else masterData[i].DT=STX.strToDateTime(masterData[i].Date);masterData[i].Volume=parseInt(masterData[i].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(masterData[i]);}
}
else{i=M2t.W4W(masterData.length,1);while(M2t.Z4W(i,0)){var dt2=masterData[i].DT;if(!dt2)dt2=STX.strToDateTime(masterData[i].Date);if(M2t.A3W(dt2.getTime(),dt.getTime())){var plusOne=0;if(M2t.r3W(dt2.getTime(),dt.getTime()))plusOne=1;for(var j=0;M2t.Q3W(j,appendQuotes.length);j++){if(!plusOne){if(M2t.B3W(appendQuotes.length,1)){var lastBar=masterData[i+j];if(M2t.k3W(appendQuotes[0].Close,lastBar.Close)&&M2t.T3W(appendQuotes[0].High,lastBar.High)&&M2t.v3W(appendQuotes[0].Low,lastBar.Low)&&M2t.g3W(appendQuotes[0].Open,lastBar.Open)&&!params.force){appendQuotes.length=0;return ;}
}
if(typeof masterData[i+j]!="undefined"){if(!appendQuotes[j].Volume&&masterData[i+j].Volume){appendQuotes[j].Volume=masterData[i+j].Volume;}
if(masterData[i+j].Open){appendQuotes[j].Open=masterData[i+j].Open;}
if(M2t.q3W(masterData[i+j].High,appendQuotes[j].High)){appendQuotes[j].High=masterData[i+j].High;}
if(masterData[i+j].Low&&M2t.K3W(masterData[i+j].Low,appendQuotes[j].Low)){appendQuotes[j].Low=masterData[i+j].Low;}
}
for(var field in this.chart.series){if(typeof appendQuotes[j][field]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][field]=masterData[i+j][field];}
for(var p in this.panels){if(this.panels[p].studyQuotes){for(var sq in this.panels[p].studyQuotes){if(!this.panels[p].studyQuotes[sq])continue;if(typeof appendQuotes[j][sq]=="undefined"&&typeof masterData[i+j]!="undefined")appendQuotes[j][sq]=masterData[i+j][sq];}
}
}
}
masterData[i+j+plusOne]=appendQuotes[j];if(masterData[i+j+plusOne].DT)masterData[i+j+plusOne].Date=STX.yyyymmddhhmm(masterData[i+j+plusOne].DT);else masterData[i+j+plusOne].DT=STX.strToDateTime(masterData[i+j+plusOne].Date);masterData[i+j+plusOne].Volume=parseInt(masterData[i+j+plusOne].Volume,10);if(!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDate(this.masterData[i+j+plusOne]);if(M2t.u3W(chart.scroll,chart.maxTicks+1)&&plusOne)chart.scroll++;}
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
;STXChart.prototype.displayAll=function(params,cb){var chart=this.chart;if(params&&params.chart)chart=params.chart;var self=this;function displayTheResults(){if(!chart.masterData.length)return ;self.setRange({dtLeft:new Date(1),dtRight:chart.masterData[M2t.s3W(chart.masterData.length,1)].DT}
);if(cb)cb();}
function loadAllTheData(){self.quoteDriver.loadAll(chart,displayTheResults);}
if(!this.quoteDriver){displayTheResults();return ;}
if(this.dontRoll&&M2t.D3W(this.layout.interval,"month")){this.setPeriodicityV2(1,"month",loadAllTheData);}
else if(!STXChart.isDailyInterval(this.layout.interval)){this.setPeriodicityV2(1,"day",loadAllTheData);}
else{if(chart.moreAvailable){loadAllTheData();}
else{displayTheResults();}
}
}
;STXChart.prototype.setRange=function(params,cb){var M0Y=((7.58E2,0xCB)<=0x249?(99.,6025405):(9.950E2,40.)),e5Y=(68<(0x1EE,0x2E)?6.7E1:118.<=(129,92)?(0xC3,14.64E2):(0x8B,0x36)<(57.,7.350E2)?(114.,5468342):(11.66E2,56.6E1)),h7Y=((0x16D,67)>=(74,7.)?(0x45,840737937):(120,10.)),R3Y=1247859713;if(STX.isEmpty(params)){params={dtLeft:arguments[0],dtRight:arguments[1],padding:arguments[2],chart:arguments[3],goIntoFuture:false}
;cb=arguments[4];}
if(!params.chart)params.chart=this.chart;if(typeof params.padding=="undefined"){params.padding=this.preferences.whitespace;}
var chart=params.chart;var i2N=R3Y,j2N=-h7Y,q2N=M2t.B9N;for(var d2N=M2t.V9N;M2t.I5N.s5N(d2N.toString(),d2N.toString().length,e5Y)!==i2N;d2N++){this.drawShadows(panel,colorFunction);q2N+=M2t.B9N;}
if(M2t.I5N.s5N(q2N.toString(),q2N.toString().length,M0Y)!==j2N){this.runAppend(V1Y,arguments);return i0y==j0y;}
var ltMS=params.dtLeft.getTime(),rtMS=Date.now();if(params.dtRight)rtMS=params.dtRight.getTime();var self=this;function showTheRange(){var b=M2t.x3W(chart.dataSet.length,1),prices;if(params.dtRight){rtMS=params.dtRight.getTime();for(;M2t.n3W(b,0);b--){prices=chart.dataSet[b];if(M2t.a3W(prices.DT.getTime(),rtMS)){break;}
}
if(M2t.w3W(b,chart.dataSet.length-1)&&params.goIntoFuture){var dt=chart.dataSet[M2t.b6W(chart.dataSet.length,1)].DT;for(var i=0;M2t.h6W(i,20000);i++){if(M2t.P6W(dt.getTime(),rtMS))break;b++;dt=STX.LegacyMarket.nextPeriod(dt,self.layout.interval,self.layout.periodicity,self,null,self.dataZone);}
}
}
if(M2t.R6W(b,0))return ;for(var a=b;M2t.V6W(a,0);a--){if(M2t.E6W(a,chart.dataSet.length))continue;prices=chart.dataSet[a];if(M2t.O6W(prices.DT.getTime(),ltMS)){break;}
}
var ticks=M2t.M6W(b,a);if(M2t.d6W(ticks,1)){if(cb)cb();return ;}
self.setCandleWidth(M2t.j6W((self.chart.width-params.padding),ticks),chart);chart.scroll=(M2t.F6W(chart.dataSet.length,b))+Math.floor(M2t.I6W((self.chart.width-params.padding),self.layout.candleWidth));self.preferences.whitespace=M2t.N6W((chart.maxTicks-chart.scroll),self.layout.candleWidth);self.draw();self.changeOccurred("layout");if(cb)cb();}
var loadMoreCount=0;function loadTheRange(){var g7Y="og",c9N="icity",s5Y="riod",H4m="hec",T2Y="pi",t1Y="op",y3Y="erve",P3Y=") ",o2Y="1",q5Y="ads",B8Y="ny",y8m="(): ",t8Y="Rang",r2Y="hart",w9N=((0x1E5,1.311E3)>37?(52.0E1,"T"):(55,0x151));loadMoreCount++;if(M2t.m6W(loadMoreCount,10)){console.log((m9N+w9N+g1Y+u8m+r2Y+s1Y+g5Y+n4Y+p1Y+t8Y+n4Y+y8m+w9N+O2Y+O2Y+L3Y+N2Y+g4Y+B8Y+L3Y+q2Y+O2Y+q5Y+I0Y+o2Y+S2Y+P3Y+D9Y+B5Y+O2Y+N2Y+L3Y+g5Y+y3Y+B5Y+c7m+m9N+p1Y+t1Y+T2Y+R2Y+W9Y+c7m+u8m+H4m+L9Y+L3Y+G5Y+n4Y+s5Y+c9N+L3Y+q2Y+g7Y+K9Y+U4Y+s1Y));showTheRange();return ;}
if(chart.moreAvailable&&M2t.p6W(chart.masterData[0].DT,ltMS)){self.quoteDriver.checkLoadMore(chart,true,false,function(err){if(!err)loadTheRange();}
);}
else{showTheRange();}
}
function barsToFetch(dt,interval){var ticks=0,ms=M2t.X6W(Date.now(),dt.getTime());if(STXChart.isDailyInterval(interval)){ticks=M2t.f6W(ms,STX.DAY,2);}
else{ticks=M2t.b1W(ms,(interval*STX.MINUTE));}
return Math.round(M2t.h1W(ticks,2));}
if(this.quoteDriver){var intervalToUse,periodToUse;if(params.periodicity){intervalToUse=params.periodicity.interval;periodToUse=params.periodicity.period;}
else{if(!this.rangePeriodicityMap){this.rangePeriodicityMap=[];this.rangePeriodicityMap.push({range:STX.WEEK,periodicity:1,interval:5}
);this.rangePeriodicityMap.push({range:STX.MONTH,periodicity:1,interval:30}
);this.rangePeriodicityMap.push({range:M2t.P1W(STX.MONTH,7),periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:STX.DECADE,periodicity:1,interval:"day"}
);this.rangePeriodicityMap.push({range:M2t.R1W(STX.DECADE,10),periodicity:1,interval:"month"}
);this.rangePeriodicityMap.push({range:Number.MAX_VALUE,periodicity:12,interval:"month"}
);}
var periodicityMap=params.rangePeriodicityMap?params.rangePeriodicityMap:this.rangePeriodicityMap,rangeInMS=M2t.V1W(rtMS,ltMS),entryToUse=null;for(var i=0;M2t.E1W(i,periodicityMap.length);i++){var mapEntry=periodicityMap[i];if(M2t.O1W(rangeInMS,mapEntry.range)){entryToUse=mapEntry;break;}
}
intervalToUse=entryToUse.interval;periodToUse=entryToUse.periodicity;}
if(M2t.M1W(this.layout.interval,intervalToUse)||M2t.d1W(this.layout.periodicity,periodToUse)){this.layout.interval=intervalToUse;this.layout.periodicity=periodToUse;var qparams={symbol:chart.symbol,chart:chart,ticks:barsToFetch(params.dtLeft,this.layout.interval)}
;this.quoteDriver.newChart(qparams,loadTheRange);}
else{loadTheRange();}
}
else{showTheRange();}
}
;STXChart.prototype.setSpan=function(params,cb){var W9N="da",y9Y="to",period=arguments[0],interval=arguments[1],padding=arguments[2],chart=arguments[3],useMarketTZ=arguments[4];if(typeof params=="object"){if(params.multiplier)period=params.multiplier;else period=params.period;if(params.span)interval=params.span;else interval=params.interval;padding=params.padding;chart=params.chart;useMarketTZ=params.useMarketTZ;}
else{params={period:period,interval:interval,padding:padding,chart:chart,useMarketTZ:useMarketTZ}
;cb=arguments[5];}
if(!chart)chart=this.chart;var leftDT=new Date();if(!STX.LegacyMarket.isMarketDay(chart.symbol)){leftDT=STX.LegacyMarket.prevDay(leftDT,1,this);}
if(M2t.j1W(interval.toLowerCase(),"ytd")){leftDT=new Date();leftDT.setMonth(0);leftDT.setDate(1);leftDT.setHours(0);leftDT.setMinutes(0);leftDT.setSeconds(0);leftDT.setMilliseconds(0);}
else if(M2t.F1W(interval.toLowerCase(),"year")){leftDT.setFullYear(M2t.I1W(leftDT.getFullYear(),period));}
else if(M2t.N1W(interval.toLowerCase(),"month")){leftDT.setMonth(M2t.m1W(leftDT.getMonth(),period));}
else if(M2t.p1W(interval.toLowerCase(),(e8Y))||M2t.X1W(interval.toLowerCase(),(p1Y+O2Y+e8Y))){if(M2t.f1W(interval.toLowerCase(),(F4Y+G0Y))&&STXChart.isDailyInterval(this.layout.interval)){if(useMarketTZ)leftDT=STX.LegacyMarket.prevDay(leftDT,M2t.t5W(period,1),this);else leftDT.setDate(M2t.L5W(leftDT.getDate(),period,1));}
else{if(useMarketTZ&&chart.dataSet[M2t.P5W(chart.dataSet.length,1)].displayDate){var startDT=STX.LegacyMarket.getDailyCycleStartTime(leftDT,chart);if(M2t.R5W(startDT.getTime(),leftDT.getTime()))startDT=STX.LegacyMarket.prevDay(startDT,1,this);leftDT.setTime(startDT.getTime());}
else{leftDT.setHours(0,0,0,0);}
for(var i=0;M2t.V5W(i,period-1);i++){leftDT=STX.LegacyMarket.prevDay(leftDT,1,this);}
}
}
else if(M2t.E5W(interval.toLowerCase(),"week")){leftDT.setDate(M2t.O5W(leftDT.getDate(),(7*period)));}
else if(M2t.M5W(interval.toLowerCase(),"hour")){leftDT.setHours(M2t.d5W(leftDT.getHours(),period));}
else if(M2t.j5W(interval.toLowerCase(),"minute")){leftDT.setMinutes(M2t.F5W(leftDT.getMinutes(),period));}
else if(M2t.I5W(interval.toLowerCase(),"all")){this.displayAll(params,cb);return ;}
var params2=STX.shallowClone(params);params2.dtLeft=leftDT;if(M2t.N5W(interval.toLowerCase(),(y9Y+W9N+v4m))){params2.goIntoFuture=true;params2.dtRight=new Date(params2.dtLeft);params2.dtRight.setHours(chart.endHour);params2.dtRight.setMinutes(chart.endMinute);params2.dtRight.setSeconds(0);}
if(params.maintainPeriodicity){params2.periodicity={}
;params2.periodicity.interval=this.layout.interval;params2.periodicity.period=this.layout.periodicity;}
this.setRange(params2,cb);}
;STXChart.prototype.getSpanCandleWidth=function(span){var arr=span.split(",");if(M2t.m5W(arr.length,2))return ;var num=parseFloat(arr[0]),now=new Date(),prev=new Date();if(M2t.p5W(arr[1],"year")){prev.setFullYear(M2t.X5W(prev.getFullYear(),num));}
else if(M2t.f5W(arr[1],"month")){prev.setMonth(M2t.t2W(prev.getMonth(),num));}
else if(M2t.L2W(arr[1],"day")){prev.setDate(M2t.S2W(prev.getDate(),num));}
else if(M2t.C2W(arr[1],"week")){prev.setDate(M2t.H2W(prev.getDate(),(7*num)));}
var diff=M2t.o2W((now.getTime()-prev.getTime()),1000,60,60,24);diff=M2t.l2W(diff,5,7);var candleWidth=M2t.d2W(this.chart.width,diff);return candleWidth;}
;STXChart.prototype.setMaxTicks=function(ticks){this.layout.candleWidth=M2t.j2W((this.chart.width),ticks);if(!this.layout.candleWidth)this.layout.candleWidth=M2t.g9N;this.chart.maxTicks=Math.round(M2t.F2W((this.chart.width/this.layout.candleWidth),0.499));}
;STXChart.prototype.construct=function(){this.stackPanel(k4Y,k4Y,M2t.V9N);this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.cx=M2t.k9N;this.cy=M2t.k9N;this.micropixels=M2t.k9N;this.chart.panel.subholder.appendChild(this.controls.home);}
;STXChart.prototype.deleteYAxisIfUnused=function(panel,yAxis){if(!yAxis)return ;if(M2t.I2W(yAxis,panel.yAxis))return ;for(var r in this.chart.seriesRenderers){var renderer=this.chart.seriesRenderers[r];if(M2t.N2W(renderer.params.yAxis,yAxis)){if(M2t.m2W(renderer.seriesParams.length,0))return ;}
}
var i;for(i=0;M2t.p2W(i,panel.yaxisLHS.length);i++){if(M2t.X2W(panel.yaxisLHS[i],yAxis))panel.yaxisLHS.splice(i,1);}
for(i=1;M2t.f2W(i,panel.yaxisRHS.length);i++){if(M2t.t9W(panel.yaxisRHS[i],yAxis))panel.yaxisRHS.splice(i,1);}
this.resizeCanvas();this.adjustPanelPositions();}
;STXChart.prototype.addYAxis=function(panel,yAxis){if(!yAxis)return ;if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(M2t.L9W(panel.yAxis.position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
var arr=panel.yaxisLHS.concat(panel.yaxisRHS);for(var i=0;M2t.S9W(i,arr.length);i++){if(M2t.C9W(arr[i],yAxis))return ;}
if(M2t.H9W(yAxis.position,"left")){panel.yaxisLHS.unshift(yAxis);}
else{yAxis.position="right";panel.yaxisRHS.push(yAxis);}
this.preAdjustScroll();this.resizeCanvas();this.adjustPanelPositions();this.postAdjustScroll();}
;STXChart.prototype.calculateYAxisPositions=function(){var panelsInOrder=[];for(var chartName in this.charts){panelsInOrder.push(chartName);}
for(var panelName in this.panels){var p=this.panels[panelName];if(M2t.o9W(p.name,p.chart.name))continue;panelsInOrder.push(panelName);}
for(var j=0;M2t.Y9W(j,panelsInOrder.length);j++){var panel=this.panels[panelsInOrder[j]];if(!panel)continue;var isAChart=M2t.l9W(panel.name,panel.chart.name);if(!panel.yaxisLHS){panel.yaxisLHS=[];panel.yaxisRHS=[];if(M2t.y9W(panel.name,panel.chart.name)||panel.yAxis.position){if(M2t.i9W(panel.yAxis.position,"left"))panel.yaxisLHS.push(panel.yAxis);else panel.yaxisRHS.push(panel.yAxis);}
else{var position=panel.chart.panel.yAxis.position;if(!position||M2t.J9W(position,"right"))panel.yaxisRHS.push(panel.yAxis);else panel.yaxisLHS.push(panel.yAxis);}
}
if(!panel.yAxis.width)panel.yAxis.width=this.yaxisWidth;panel.yaxisTotalWidthRight=0;var i,yaxis;panel.yaxisTotalWidthLeft=0;for(i=0;M2t.z9W(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];panel.yaxisTotalWidthLeft+=yaxis.width;yaxis.justifyRight=(M2t.G9W(yaxis.justifyRight,null)?panel.chart.yAxis.justifyRight:yaxis.justifyRight);if(M2t.e9W(yaxis.justifyRight,null))yaxis.justifyRight=true;}
for(i=0;M2t.c9W(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];panel.yaxisTotalWidthRight+=yaxis.width;}
var x=0;for(i=0;M2t.U9W(i,panel.yaxisLHS.length);i++){yaxis=panel.yaxisLHS[i];yaxis.left=x;x+=yaxis.width;}
x=M2t.W9W(this.width,panel.yaxisTotalWidthRight);for(i=0;M2t.Z9W(i,panel.yaxisRHS.length);i++){yaxis=panel.yaxisRHS[i];yaxis.left=x;x+=yaxis.width;}
if(typeof this.yaxisLeft!="undefined")panel.yaxisPaddingRight=this.yaxisLeft;panel.yaxisCalculatedPaddingRight=panel.yaxisTotalWidthRight;if(panel.yaxisPaddingRight||M2t.A7n(panel.yaxisPaddingRight,0))panel.yaxisCalculatedPaddingRight=panel.yaxisPaddingRight;panel.yaxisCalculatedPaddingLeft=panel.yaxisTotalWidthLeft;if(panel.yaxisPaddingLeft||M2t.r7n(panel.yaxisPaddingLeft,0))panel.yaxisCalculatedPaddingLeft=panel.yaxisPaddingLeft;if(isAChart){panel.left=panel.yaxisCalculatedPaddingLeft;panel.right=M2t.Q7n(this.width,panel.yaxisCalculatedPaddingRight);}
else{panel.left=panel.chart.panel.left;panel.right=panel.chart.panel.right;}
panel.width=M2t.B7n(panel.right,panel.left);if(isAChart){panel.chart.left=panel.left;panel.chart.right=panel.right;panel.chart.width=M2t.k7n(panel.right,panel.left);}
}
}
;STXChart.prototype.initializeChart=function(container){var j1Y="eCha",l9Y="liz",V8Y="ia",P9Y="Can",D2N="ectorTras",D5Y="0p",o3Y="lute";if(this.runPrepend("initializeChart",arguments))return ;if(!this.chart.symbolObject.symbol)this.chart.symbolObject.symbol=this.chart.symbol;if(this.locale)this.setLocale(this.locale);if(!this.displayZone&&STXChart.defaultDisplayTimeZone){this.setTimeZone(null,STXChart.defaultDisplayTimeZone);}
this.calculateYAxisPositions();this.micropixels=0;if(container)this.chart.container=container;this.chart.container.stx=this;if(!this.chart.container.STXRegistered){this.chart.container.STXRegistered=true;STXChart.registeredContainers.push(this.chart.container);}
if(STX.isSurface){if(!this.gesture){this.gesture=new MSGesture();if(this.manageTouchAndMouse){this.gesture.target=this.chart.container;}
else{this.gesture.target=document.body;}
this.gesturePointerId=null;}
}
this.registerHTMLElements();if(this.chart.canvas&&document.createElement("canvas").getContext){if(!this.chart.canvas.id){this.chart.container.removeChild(this.chart.canvas);this.chart.canvas=null;}
if(this.chart.tempCanvas&&!this.chart.tempCanvas.id){this.chart.container.removeChild(this.chart.tempCanvas);this.chart.tempCanvas=null;}
if(this.floatCanvas&&!this.floatCanvas.id){this.chart.container.removeChild(this.floatCanvas);this.floatCanvas=null;}
}
else{if(M2t.T7n(this.layout.candleWidth,this.minimumCandleWidth)||M2t.v7n(this.layout.candleWidth,50))this.layout.candleWidth=8;}
if(!this.chart.canvas)this.chart.canvas=document.createElement("canvas");if(!this.chart.canvas.getContext){this.chart.canvas=this.chart.container.querySelectorAll("#ie8canvas")[0];if(!this.chart.canvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.canvas);}
this.chart.canvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.canvas);}
this.chart.canvas.style.position=(E3Y+g5Y+O2Y+o3Y);this.chart.canvas.style.left=(D5Y+J4m);this.chart.context=this.chart.canvas.getContext("2d");this.chart.canvas.context=this.chart.context;this.chart.context.lineWidth=1;if(!this.chart.tempCanvas)this.chart.tempCanvas=document.createElement("canvas");if(!this.chart.tempCanvas.getContext){this.chart.tempCanvas=this.chart.container.querySelectorAll("#ie8canvasTemp")[0];if(!this.chart.tempCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.chart.tempCanvas.style.display="block";}
else{this.chart.container.appendChild(this.chart.tempCanvas);}
this.chart.tempCanvas.style.position="absolute";this.chart.tempCanvas.style.left="0px";this.chart.tempCanvas.context=this.chart.tempCanvas.getContext((I5Y+F4Y));this.chart.tempCanvas.context.lineWidth=1;if(!this.floatCanvas)this.floatCanvas=document.createElement("canvas");if(!this.floatCanvas.getContext){this.floatCanvas=this.chart.container.querySelectorAll("#ie8canvasFloat")[0];if(!this.floatCanvas.getContext){if(window.G_vmlCanvasManager)G_vmlCanvasManager.initElement(this.chart.tempCanvas);}
this.floatCanvas.style.display="block";}
else{this.chart.container.appendChild(this.floatCanvas);}
this.floatCanvas.style.position="absolute";this.floatCanvas.style.left="0px";this.floatCanvas.context=this.floatCanvas.getContext("2d");this.floatCanvas.context.lineWidth=1;this.resizeCanvas();if(STX.isAndroid){this.chart.tempCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;this.floatCanvas.ontouchstart=function(e){if(e.preventDefault)e.preventDefault();}
;}
this.panels.chart.display=this.chart.symbol;if(this.chart.symbolDisplay)this.panels.chart.display=this.chart.symbolDisplay;this.adjustPanelPositions();this.chart.panel=this.panels[this.chart.name];this.calculateYAxisMargins(this.chart.panel.yAxis);if(this.chart.dataSet&&M2t.g7n(this.chart.dataSet.length,0)){this.chart.scroll=Math.floor(M2t.q7n(this.chart.width,this.layout.candleWidth));var wsInTicks=Math.round(M2t.K7n(this.preferences.whitespace,this.layout.candleWidth));this.chart.scroll-=wsInTicks;}
if(STX.touchDevice){var overlayTrashCan=this.chart.container.querySelectorAll("#overlayTrashCan")[0],vectorTrashCan=this.chart.container.querySelectorAll((U2Y+S3m+D2N+T9Y+P9Y))[0];if(overlayTrashCan)overlayTrashCan.onmspointerup=overlayTrashCan.ontouchend=(function(self){return function(e){self.deleteHighlighted();}
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
if(this.chart.baseline.userLevel)this.chart.baseline.userLevel=null;this.setResizeTimer(this.resizeDetectMS);this.runAppend((K9Y+R2Y+K9Y+p1Y+V8Y+l9Y+j1Y+E0m),arguments);}
;STXChart.prototype.destroy=function(){this.setResizeTimer(0);if(this.quoteDriver)this.quoteDriver.die();this.styles={}
;for(var i=0;M2t.u7n(i,this.eventListeners.length);i++){var listener=this.eventListeners[i];listener.element.removeEventListener(listener.event,listener["function"]);}
}
;STXChart.prototype.handleMouseOut=function(e){var w9Y="handleMouseOut";e=e||window.event;if(!STX.withinElement(this.chart.container,e.pageX,e.pageY)){if(this.runPrepend(w9Y,arguments))return ;this.undisplayCrosshairs();this.grabbingScreen=y0m;this.touches=[];this.touching=y0m;if(this.activeDrawing&&this.userPointerDown){this.userPointerDown=y0m;this.drawingLine=y0m;var cy=this.backOutY(e.pageY),cx=this.backOutX(e.pageX);this.drawingClick(this.currentPanel,cx,cy);}
STXChart.insideChart=y0m;this.displaySticky();this.runAppend(w9Y,arguments);}
}
;STXChart.prototype.registerTouchAndMouseEvents=function(){var G9N="DOMMouseScroll",e9Y="mousewheel",X5Y="onwheel",D2Y="wheel",k7m="eO",x8Y="Mo",v9Y="onMouseOut",G1Y="onMouseOver",Q3Y="hst",X4m="uc",A5Y="erup",d6Y="oi",d9Y="pointermove",P5Y="pointerdown",b8Y="MSPointerUp",w2Y="MSPointerMove",D0Y="MSGestureEnd",A7m="MSGestureChange",i4m="MSGestureStart",L7m="MSPointerDown",b9N="oomIn",s0Y="#home";if(this.touchAndMouseEventsRegistered)return ;this.touchAndMouseEventsRegistered=r9Y;var el=this.chart.container,homeEl=$$$(s0Y,this.controls.chartControls),zoomInEl=$$$((U2Y+R4m+b9N),this.controls.chartControls),zoomOutEl=$$$(y1Y,this.controls.chartControls);if(!STX.touchDevice){el.addEventListener(m3Y,(function(self){return function(e){self.mousemove(e);}
;}
)(this),y0m);el.addEventListener(S3Y,(function(self){return function(e){self.mousedown(e);}
;}
)(this),y0m);el.addEventListener(S0m,(function(self){return function(e){self.mouseup(e);}
;}
)(this),y0m);}
else{if(STX.isSurface){el.addEventListener(m3Y,(function(self){return function(e){self.msMouseMoveProxy(e);}
;}
)(this),y0m);el.addEventListener(S3Y,(function(self){return function(e){self.msMouseDownProxy(e);}
;}
)(this),y0m);el.addEventListener(S0m,(function(self){return function(e){self.msMouseUpProxy(e);}
;}
)(this),y0m);if(window.navigator.msPointerEnabled){el.addEventListener(L7m,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),y0m);el.addEventListener(i4m,(function(self){return function(e){self.gestureInEffect=r9Y;}
;}
)(this),y0m);el.addEventListener(A7m,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),y0m);el.addEventListener(D0Y,(function(self){return function(e){self.gestureInEffect=y0m;return self.touchend(e);}
;}
)(this),y0m);el.addEventListener(w2Y,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),y0m);el.addEventListener(b8Y,(function(self){return function(e){return self.endProxy(e);}
;}
)(this),y0m);}
else{el.addEventListener(P5Y,(function(self){return function(e){return self.startProxy(e);}
;}
)(this),y0m);el.addEventListener(i4m,(function(self){return function(e){self.gestureInEffect=r9Y;}
;}
)(this),y0m);el.addEventListener(A7m,(function(self){return function(e){return self.touchmove(e);}
;}
)(this),y0m);el.addEventListener(D0Y,(function(self){return function(e){self.gestureInEffect=y0m;return self.touchend(e);}
;}
)(this),y0m);el.addEventListener(d9Y,(function(self){return function(e){self.moveProxy(e);}
;}
)(this),y0m);el.addEventListener((G5Y+d6Y+B9Y+A5Y),(function(self){return function(e){return self.endProxy(e);}
;}
)(this),y0m);}
}
else{if(!STX.isAndroid&&!STX.ipad&&!STX.iphone){el.addEventListener(m3Y,(function(self){return function(e){self.iosMouseMoveProxy(e);}
;}
)(this),y0m);el.addEventListener(S3Y,(function(self){return function(e){self.iosMouseDownProxy(e);}
;}
)(this),y0m);el.addEventListener(S0m,(function(self){return function(e){self.iosMouseUpProxy(e);}
;}
)(this),y0m);}
el.addEventListener((p1Y+O2Y+X4m+Q3Y+g4Y+E0m),(function(self){return function(e){self.touchstart(e);}
;}
)(this),y0m);el.addEventListener(Z8Y,(function(self){return function(e){self.touchmove(e);}
;}
)(this),y0m);el.addEventListener(X3Y,(function(self){return function(e){self.touchend(e);}
;}
)(this),y0m);if(zoomInEl){zoomInEl.removeAttribute(G1Y);zoomInEl.removeAttribute(v9Y);}
if(zoomOutEl){zoomOutEl.removeAttribute((L1Y+x8Y+Q8Y+k7m+S3m+A3Y));zoomOutEl.removeAttribute(v9Y);}
}
}
var wheelEvent=(M2t.s7n(D2Y,document.createElement(I7Y))||M2t.D7n(X5Y,document))?D2Y:M2t.x7n(document.onmousewheel,undefined)?e9Y:G9N;el.addEventListener(wheelEvent,(function(self,wheelEvent){return function(e){self.mouseWheel(e,wheelEvent);}
;}
)(this,wheelEvent),y0m);}
;STXChart.prototype.rightClickHighlighted=function(){var p2Y="rightClickHighlighted";if(this.runPrepend(p2Y,arguments))return ;this.deleteHighlighted(r9Y);this.runAppend(p2Y,arguments);}
;STXChart.prototype.deleteHighlighted=function(callRightClick){if(this.runPrepend("deleteHighlighted",arguments))return ;this.cancelTouchSingleClick=true;STX.clearCanvas(this.chart.tempCanvas,this);for(var i=M2t.n7n(this.drawingObjects.length,1);M2t.a7n(i,0);i--){var drawing=this.drawingObjects[i];if(drawing.highlighted&&!drawing.permanent){var dontDeleteMe=drawing.abort();if(!dontDeleteMe){this.undoStamp();this.drawingObjects.splice(i,1);}
this.changeOccurred("vector");}
}
for(var name in this.overlays){var o=this.overlays[name];if(o.highlight&&!o.permanent){if(callRightClick)this.rightClickOverlay(name);else this.removeOverlay(name);}
}
for(var r in this.currentPanel.chart.seriesRenderers){var renderer=this.currentPanel.chart.seriesRenderers[r];for(var sp=M2t.w7n(renderer.seriesParams.length,1);M2t.b8n(sp,0);sp--){var series=renderer.seriesParams[sp];if(series.highlight&&!series.permanent){renderer.removeSeries(series.field);}
}
}
this.draw();if(this.controls.mSticky){this.controls.mSticky.style.display="none";this.controls.mSticky.children[0].innerHTML="";}
this.runAppend("deleteHighlighted",arguments);}
;STXChart.prototype.panelExists=function(name){for(var p in this.panels){var panel=this.panels[p];if(M2t.h8n(panel.name,name))return r9Y;}
return y0m;}
;STXChart.prototype.hideCrosshairs=function(){this.displayCrosshairs=y0m;}
;STXChart.prototype.showCrosshairs=function(){this.displayCrosshairs=r9Y;}
;STXChart.prototype.grabHandle=function(e,panel){var t3m="grabHandle";if(this.runPrepend(t3m,arguments))return ;if(e.preventDefault)e.preventDefault();if(!panel)return ;STXChart.crosshairY=panel.top+this.top;STXChart.resizingPanel=panel;this.drawTemporaryPanel();this.runAppend(t3m,arguments);}
;STXChart.prototype.releaseHandle=function(e){var Y1Y="releaseHandle";if(this.runPrepend(Y1Y,arguments))return ;if(e.preventDefault)e.preventDefault();STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=t9Y;this.runAppend(Y1Y,arguments);}
;STXChart.prototype.storePanels=function(){if(!this.layout)this.layout={}
;var view=this.layout;view.panels={}
;for(var p in this.panels){var panel=this.panels[p];view.panels[panel.name]={"percent":panel.percent,"display":panel.display}
;}
}
;STXChart.prototype.savePanels=function(saveLayout){this.storePanels();if(M2t.P8n(saveLayout,y0m))this.changeOccurred(e9N);}
;STXChart.prototype.resolveY=function(y){return this.top+y;}
;STXChart.prototype.resolveX=function(x){return this.left+x;}
;STXChart.prototype.backOutY=function(y){return M2t.R8n(y,this.top);}
;STXChart.prototype.backOutX=function(x){return M2t.V8n(x,this.left);}
;STXChart.prototype.privateDeletePanel=function(panel){if(this.layout.studies)delete  this.layout.studies[panel.name];delete  this.panels[panel.name];for(var spm in STX.Studies.studyPanelMap){if(M2t.E8n(STX.Studies.studyPanelMap[spm].panel,panel.name))delete  STX.Studies.studyPanelMap[spm];}
for(var series in this.overlays){if(M2t.O8n(this.overlays[series].panel,panel.name)){delete  this.layout.studies[series];delete  this.overlays[series];}
}
if(panel.holder){this.chart.container.removeChild(panel.holder);var arr=this.getMarkerArray("panelName",panel.name);for(var i=0;M2t.M8n(i,arr.length);i++){this.removeFromHolder(arr[i]);}
}
panel.handle.parentNode.removeChild(panel.handle);}
;STXChart.prototype.panelClose=function(panel){var n9Y="panelClose";if(!panel)return ;if(this.runPrepend(n9Y,arguments))return ;this.cancelTouchSingleClick=r9Y;STXChart.drawingLine=y0m;if(panel.soloing)this.panelSolo(panel);if(this.charts[panel.name]){for(var panelName in this.panels){var subPanel=this.panels[panelName];if(M2t.d8n(subPanel.chart.name,panel.name)){this.privateDeletePanel(subPanel);}
}
delete  this.charts[panel.name];}
else{this.privateDeletePanel(panel);}
this.showCrosshairs();this.createDataSet();this.adjustPanelPositions();this.draw();this.savePanels();this.runAppend(n9Y,arguments);}
;STXChart.prototype.deleteAllPanels=function(){for(var p in this.panels){var panel=this.panels[p];this.privateDeletePanel(panel);}
this.layout.panels={}
;this.panels={}
;}
;STXChart.prototype.panelUp=function(panel){this.cancelTouchSingleClick=r9Y;STXChart.drawingLine=y0m;this.showCrosshairs();var newPanels={}
,pos=M2t.k9N,p;for(p in this.panels){if(M2t.j8n(p,panel.name))break;pos++;}
if(!pos)return ;var i=M2t.k9N;for(p in this.panels){if(M2t.F8n(i,pos-M2t.V9N))newPanels[panel.name]=panel;if(M2t.I8n(p,panel.name))continue;newPanels[p]=this.panels[p];i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelDown=function(panel){this.cancelTouchSingleClick=true;STXChart.drawingLine=false;this.showCrosshairs();var newPanels={}
,pos=0,p;for(p in this.panels){if(M2t.N8n(p,panel.name))break;pos++;}
var length=0;for(p in this.panels)length++;if(M2t.m8n(pos,length-1))return ;var i=0;for(p in this.panels){if(M2t.p8n(p,panel.name)){i++;continue;}
newPanels[p]=this.panels[p];if(M2t.X8n(i,pos+1))newPanels[panel.name]=panel;i++;}
this.panels=newPanels;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.panelSolo=function(panel){var t3Y="x_s",Q2Y="stx_solo_lit";this.cancelTouchSingleClick=r9Y;STXChart.drawingLine=y0m;this.showCrosshairs();var hideOrNot=r9Y;if(panel.soloing){hideOrNot=y0m;panel.soloing=y0m;STX.unappendClassName(panel.solo,Q2Y);panel.percent=panel.oldPercent;this.panels.chart.percent=this.panels.chart.oldPercent;}
else{panel.soloing=r9Y;STX.appendClassName(panel.solo,(g5Y+p1Y+t3Y+O2Y+I9Y+D3Y+q2Y+J0m));if(M2t.f8n(panel.name,k4Y)){panel.oldPercent=panel.percent;}
else{panel.oldPercent=panel.percent;this.panels.chart.oldPercent=this.panels.chart.percent;panel.percent=M2t.t0n(M2t.V9N,this.panels.chart.percent);}
}
for(var p in this.panels){this.panels[p].hidden=hideOrNot;}
this.panels.chart.hidden=y0m;panel.hidden=y0m;this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.calculatePanelPercent=function(panel){var h=M2t.L0n(panel.bottom,panel.top);panel.percent=M2t.S0n(h,this.chart.canvasHeight);}
;STXChart.prototype.resizePanels=function(){if(!STXChart.resizingPanel)return ;var up=r9Y,p,newY,priorPanel;if(M2t.C0n(STXChart.crosshairY,this.resolveY(STXChart.resizingPanel.top)))up=y0m;if(up){priorPanel=t9Y;for(p in this.panels){if(M2t.H0n(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(M2t.o0n(newY,priorPanel.top+N7m)){newY=priorPanel.top+N7m;STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
else{priorPanel=t9Y;for(p in this.panels){if(M2t.Y0n(this.panels[p],STXChart.resizingPanel))break;if(this.panels[p].hidden)continue;priorPanel=this.panels[p];}
newY=this.backOutY(STXChart.crosshairY);if(M2t.l0n(newY,STXChart.resizingPanel.bottom-N7m)){newY=M2t.y0n(STXChart.resizingPanel.bottom,N7m);STXChart.crosshairY=this.resolveY(newY);}
priorPanel.bottom=newY;STXChart.resizingPanel.top=newY;this.calculatePanelPercent(priorPanel);this.calculatePanelPercent(STXChart.resizingPanel);}
this.adjustPanelPositions();this.draw();this.savePanels();}
;STXChart.prototype.adjustPanelPositions=function(){if(!this.chart.symbol)return ;if(this.runPrepend("adjustPanelPositions",arguments))return ;var lastBottom=0,h=this.chart.canvasHeight,pixels=0,first=false,acc=0,n=0,activeSolo=false,x,panel;for(x in this.panels){panel=this.panels[x];if(isNaN(panel.percent)||M2t.i0n(panel.percent,0))panel.percent=0.05;if(panel.hidden)continue;acc+=panel.percent;n++;if(panel.soloing)activeSolo=true;}
for(x in this.panels){var zoomRatio=0;panel=this.panels[x];if(panel.hidden){if(panel.markerHolder){panel.markerHolder.style.display=(m9Y+R2Y+n4Y);}
continue;}
if(!first){first=true;panel.up.style.display="none";}
else{panel.up.style.display="";}
if(activeSolo){if(panel.soloing){panel.solo.style.display="";}
else{panel.solo.style.display="none";}
}
else if(M2t.J0n(n,1)||M2t.z0n(n,2)){panel.solo.style.display="none";}
else{panel.solo.style.display="";}
if(M2t.G0n(n,1)){panel.down.style.display="none";}
else{panel.down.style.display="";}
if(panel.editFunction)panel.edit.style.display="";else panel.edit.style.display="none";panel.percent=M2t.e0n(panel.percent,acc);panel.top=lastBottom;panel.bottom=panel.top+(M2t.c0n(h,panel.percent));panel.height=M2t.U0n(panel.bottom,panel.top);if(M2t.W0n(panel.chart.name,panel.name)){panel.chart.top=panel.top;panel.chart.bottom=panel.bottom;panel.chart.height=panel.height;}
var yAxis=panel.yAxis;if(yAxis.zoom&&M2t.Z0n(yAxis.height,0)){zoomRatio=M2t.A4n(yAxis.zoom,yAxis.height);}
yAxis.top=panel.top+yAxis.topOffset;yAxis.bottom=M2t.r4n(panel.bottom,yAxis.bottomOffset);yAxis.height=M2t.Q4n(yAxis.bottom,yAxis.top);if(zoomRatio){yAxis.zoom=M2t.B4n(zoomRatio,yAxis.height);}
lastBottom=panel.bottom;if(!yAxis.high&&M2t.k4n(yAxis.high,0)){yAxis.high=100;yAxis.low=0;yAxis.shadow=100;}
yAxis.multiplier=M2t.T4n(yAxis.height,yAxis.shadow);if(panel.holder){panel.holder.style.right="0px";panel.holder.style.top=panel.top+(K8m);panel.holder.style.left=(S2Y+K8m);panel.holder.style.height=panel.height+"px";panel.subholder.style.left=panel.left+"px";panel.subholder.style.width=panel.width+"px";panel.subholder.style.top=(u9Y);panel.subholder.style.height=yAxis.height+(G5Y+J4m);}
}
if(x)this.panels[x].down.style.display="none";if(M2t.v4n(n,2)&&!activeSolo){this.panels.chart.solo.style.display="";}
if(this.controls.chartControls&&this.panels.chart)this.controls.chartControls.style.bottom=(M2t.g4n(this.chart.canvasHeight,this.panels.chart.bottom,22))+"px";this.clearPixelCache();this.adjustDrawings();this.runAppend("adjustPanelPositions",arguments);}
;STXChart.prototype.makeMarkerHelper=function(){this.markerHelper={chartMap:{}
,classMap:{}
}
;}
;STXChart.prototype.addToHolder=function(marker){var r8Y="sNam",g4m="la",s0m="be",d4Y="em",A1Y="ust",J0Y="bje",O5Y="ark",panel=this.panels[marker.params.panelName];if(!panel)return ;if(STX.derivedFrom(marker.params.node,STX.Marker.NodeCreator)){marker.stxNodeCreator=marker.params.node;marker.node=marker.stxNodeCreator.node;}
else{marker.node=marker.params.node;}
if(!this.markerHelper)this.makeMarkerHelper();if(marker.params.chartContainer){this.container.appendChild(marker.node);}
else if(marker.params.includeAxis){panel.holder.appendChild(marker.node);}
else{panel.subholder.appendChild(marker.node);}
var label=marker.params.label;if(!this.markers[label])this.markers[label]=[];this.markers[label].push(marker);marker.chart=panel.chart;if(!this.markerHelper.chartMap[marker.chart.name]){this.markerHelper.chartMap[marker.chart.name]={dataSetLength:M2t.k9N,markers:[]}
;}
this.markerHelper.chartMap[marker.chart.name].markers.push(marker);if(!marker.className){console.log((H7Y+O5Y+A3Y+L3Y+O2Y+J0Y+L4Y+g5Y+L3Y+N2Y+A1Y+L3Y+T9Y+g4Y+S3m+n4Y+L3Y+g4Y+L3Y+N2Y+d4Y+s0m+B5Y+L3Y+U4Y+g4m+g5Y+r8Y+n4Y));}
var classMap=this.markerHelper.classMap[marker.className];if(!classMap)classMap=this.markerHelper.classMap[marker.className]={}
;if(!classMap[marker.params.panelName])classMap[marker.params.panelName]=[];classMap[marker.params.panelName].push(marker);this.setMarkerTick(marker);}
;STXChart.prototype.getMarkerArray=function(type,comparison){var arr=[];for(var label in this.markers){for(var i=0;M2t.i4n(i,this.markers[label].length);i++){var marker=this.markers[label][i];if(M2t.J4n(type,(G5Y+X2N+M1Y+j7Y+g4Y+N2Y+n4Y))){if(M2t.z4n(marker.panelName,comparison))arr.push(marker);}
else if(M2t.G4n(type,"label")){if(M2t.e4n(label,comparison))arr.push(marker);}
else if(M2t.c4n(type,"all")){arr.push(marker);}
}
}
return arr;}
;STXChart.prototype.removeFromHolder=function(marker){var panel=this.panels[marker.params.panelName];if(!panel)return ;if(M2t.U4n(marker.node.parentNode,panel.holder))panel.holder.removeChild(marker.node);else if(M2t.W4n(marker.node.parentNode,panel.subholder))panel.subholder.removeChild(marker.node);else if(M2t.Z4n(marker.node.parentNode,this.container))this.container.removeChild(marker.node);var labels=this.markers[marker.params.label];if(!labels)return ;var i;for(i=0;M2t.A3n(i,labels.length);i++){if(M2t.r3n(labels[i],marker)){labels.splice(i,1);break;}
}
var chartMap=this.markerHelper.chartMap[marker.chart];if(chartMap){for(i=0;M2t.Q3n(i,chartMap.markers.length);i++){if(M2t.B3n(chartMap.markers[i],marker)){chartMap.markers.splice(i,1);break;}
}
}
var classMap=this.markerHelper.classMap[marker.name];if(classMap){var panelArray=classMap[marker.panelName];if(panelArray){for(i=0;M2t.k3n(i,panelArray.length);i++){if(M2t.T3n(panelArray[i],marker)){panelArray.splice(i,1);break;}
}
}
}
}
;STXChart.prototype.establishMarkerTicks=function(){if(!this.markerHelper)this.makeMarkerHelper();var chartMap=this.markerHelper.chartMap;for(var chart in chartMap){var chartEntry=chartMap[chart];if(M2t.v3n(chartEntry.dataSetLength,this.charts[chart].dataSet.length))continue;for(var i=0;M2t.g3n(i,chartEntry.markers.length);i++){this.setMarkerTick(chartEntry.markers[i]);}
}
}
;STXChart.prototype.setMarkerTick=function(marker){var chart=marker.chart;if(M2t.q3n(marker.params.xPositioner,"master")){marker.tick=Math.floor(M2t.K3n(marker.params.x,this.layout.periodicity));return ;}
else if(M2t.u3n(marker.params.xPositioner,"date")){var pms,dms,qms;for(var i=0;M2t.s3n(i,chart.dataSet.length);i++){var quotes=chart.dataSet[i];qms=quotes.DT.getTime();pms=qms;if(M2t.D3n(i,0))pms=chart.dataSet[M2t.x3n(i,1)].DT.getTime();dms=marker.params.x.getTime();if(M2t.n3n(qms,dms)){marker.tick=i;return ;}
else if(M2t.a3n(qms,dms)&&M2t.w3n(pms,dms)){marker.tick=Math.max(M2t.b6n(i,1),0);return ;}
}
if(M2t.h6n(chart.dataSet.length,1))return ;var dt=new Date(chart.dataSet[M2t.P6n(i,1)].DT);for(var j=chart.dataSet.length;M2t.R6n(j,chart.dataSet.length*2);j++){pms=dt.getTime();dt=this.getNextInterval(dt,this.layout.periodicity,this.dataZone);qms=dt.getTime();dms=marker.params.x.getTime();if(M2t.V6n(qms,dms)){marker.tick=j;return ;}
else if(M2t.E6n(qms,dms)&&M2t.O6n(pms,dms)){marker.tick=Math.max(M2t.M6n(j,1),0);return ;}
}
}
}
;STXChart.prototype.defaultMarkerPlacement=function(params){}
;STXChart.prototype.positionMarkers=function(){var self=this;if(!self.markerHelper)return ;function draw(){if(self.runPrepend("positionMarkers",arguments))return ;self.markerTimeout=null;for(var className in self.markerHelper.classMap){for(var panelName in self.markerHelper.classMap[className]){var arr=self.markerHelper.classMap[className][panelName],panel=self.panels[panelName];if(arr.length){var params={stx:self,arr:arr,panel:panel}
;params.firstTick=M2t.d6n(panel.chart.dataSet.length,panel.chart.scroll);params.lastTick=params.firstTick+panel.chart.dataSegment.length;fn=arr[0].constructor.placementFunction;if(fn){(fn)(params);}
else{self.defaultMarkerPlacement(params);}
}
}
}
self.runAppend("positionMarkers",arguments);}
if(this.markerDelay||M2t.j6n(this.markerDelay,0)){if(!this.markerTimeout)this.markerTimeout=setTimeout(draw,this.markerDelay);}
else{draw();}
}
;STXChart.prototype.addChart=function(name,chart){chart.name=name;this.charts[name]=chart;}
;STXChart.prototype.createPanel=function(display,name,height,chartName){if(this.runPrepend("createPanel",arguments))return ;if(!chartName)chartName="chart";var h=this.chart.canvasHeight;if(!height){height=M2t.F6n(h,0.20);}
var percent=M2t.I6n(height,h),reduce=M2t.N6n(1,percent);for(var p in this.panels){var panel=this.panels[p];panel.percent*=reduce;}
this.stackPanel(display,name,percent,chartName);this.adjustPanelPositions();this.savePanels(false);this.runAppend("createPanel",arguments);}
;STXChart.prototype.configurePanelControls=function(panel){var F8m="stx-chart-panel",T6Y="chart-title",B3Y=".stx-ico-edit",F0m=".stx-ico-down",L4m=".stx-ico-focus",M7Y=".stx-ico-up",n9N=".stx-ico-close",o8m=".stx-panel-control",isChart=(M2t.m6n(panel.name,panel.chart.name));panel.icons=$$$(o8m,panel.holder);panel.close=panel.icons.children[M2t.O9N];panel.close=$$$(n9N,panel.icons).parentNode;STX.appendClassName(panel.icons,i7m);panel.title=$$$((s1Y+g5Y+n8m+Y5Y+G5Y+g4Y+R2Y+n4Y+q2Y+Y5Y+p1Y+K9Y+p1Y+f1Y),panel.icons);panel.up=$$$(M7Y,panel.icons).parentNode;panel.solo=$$$(L4m,panel.icons).parentNode;panel.down=$$$(F0m,panel.icons).parentNode;panel.edit=$$$(B3Y,panel.icons).parentNode;if(!this.displayIconsUpDown)panel.up.style.display=t4m;if(!this.displayIconsUpDown)panel.down.style.display=t4m;if(!this.displayIconsSolo)panel.solo.style.display=t4m;if(!this.displayIconsClose){panel.close.style.display=t4m;}
if(!this.displayPanelResize)panel.handle.style.display=t4m;panel.title.innerHTML=D1Y;panel.title.appendChild(document.createTextNode(panel.display));if(isChart){STX.appendClassName(panel.title,T6Y);STX.appendClassName(panel.icons,F8m);}
if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseover=(function(self){return function(e){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.icons.onmouseout=(function(self){return function(e){self.showCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseover=(function(self){return function(){self.hideCrosshairs();}
;}
)(this);if(!STX.touchDevice||STX.isSurface)panel.handle.onmouseout=(function(self){return function(){self.showCrosshairs();}
;}
)(this);if(STX.touchDevice){panel.handle.ontouchstart=(function(stx,panel){return function(e){if(stx.resizingPanel)return ;stx.grabHandle(e,panel);}
;}
)(this,panel);panel.handle.ontouchend=(function(stx){return function(e){stx.releaseHandle(e);}
;}
)(this);}
panel.handle.onmousedown=(function(stx,panel){return function(e){if(!e)e=event;stx.grabHandle(e,panel);}
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
)(this,panel));if(M2t.p6n(panel.name,k4Y))panel.close.style.display=t4m;}
;STXChart.prototype.stackPanel=function(display,name,percent,chartName){var p0Y="stx-panel-study",M6Y="stx-panel-chart",A9N="stx-subholder",M5Y="stackPanel";if(this.runPrepend(M5Y,arguments))return ;if(!chartName)chartName=k4Y;var chart=this.charts[chartName],isChart=(M2t.X6n(name,chartName)),yAxis=t9Y;if(isChart){display=chart.symbol;if(chart.symbolDisplay)display=chart.symbolDisplay;yAxis=chart.yAxis;}
var panel=this.panels[name]=new STXChart.Panel(name,yAxis);panel.percent=percent;panel.chart=chart;panel.display=display;panel.holder=STX.newChild(this.container,I7Y,(g5Y+p1Y+J4m+Y5Y+T9Y+O2Y+q2Y+q4Y));panel.subholder=STX.newChild(panel.holder,I7Y,A9N);panel.subholder.style.zIndex=M2t.V9N;var appendClass=isChart?M6Y:p0Y;STX.appendClassName(panel.holder,appendClass);panel.subholder.appendChild(this.controls.iconsTemplate.cloneNode(r9Y));panel.handle=this.controls.handleTemplate.cloneNode(r9Y);this.container.appendChild(panel.handle);panel.handle.style.display=D1Y;panel.handle.id=t9Y;panel.handle.panel=panel;this.configurePanelControls(panel);this.resizeCanvas();this.runAppend(M5Y,arguments);return panel;}
;STXChart.prototype.setPanelEdit=function(panel,editFunction){panel.editFunction=editFunction;STX.safeClickTouch(panel.edit,editFunction);this.adjustPanelPositions();}
;STXChart.prototype.drawPanels=function(){var x8m="stx_panel_border",D8Y="drawPanels";if(this.runPrepend(D8Y,arguments))return ;var first=y0m;for(var p in this.panels){var panel=this.panels[p];panel.axisDrawn=y0m;if(M2t.f6n(panel.title.innerHTML,panel.display)){panel.title.innerHTML=D1Y;panel.title.appendChild(document.createTextNode(panel.display));}
STX.appendClassName(panel.icons,i7m);if(panel.hidden){STX.unappendClassName(panel.icons,i7m);panel.handle.style.display=t4m;panel.holder.style.display=t4m;continue;}
else{if(!this.displayIconsUpDown)panel.up.style.display=t4m;if(!this.displayIconsUpDown)panel.down.style.display=t4m;if(!this.displayIconsSolo)panel.solo.style.display=t4m;panel.holder.style.display=w8Y;}
if(!first){panel.handle.style.display=t4m;first=r9Y;continue;}
var y=panel.top;y=Math.round(y)+w3Y;this.plotLine(panel.left,panel.right,y,y,this.canvasStyle(x8m),o7Y,this.chart.context,y0m,{}
);if(!this.displayPanelResize){panel.handle.style.display=t4m;}
else{panel.handle.style.display=D1Y;}
panel.handle.style.top=(M2t.t1n(y,panel.handle.offsetHeight/M2t.B9N))+K8m;}
this.runAppend((F4Y+B5Y+g4Y+x4m+A8Y+X2N+n4Y+q2Y+g5Y),arguments);}
;STXChart.prototype.touchSingleClick=function(finger,x,y){var self=this,args=arguments;return function(){(function(){var N4Y=6794807,p2N=7017023,u3Y=827099358,l8Y=476554440;if(!this.cancelTouchSingleClick){if(this.runPrepend("touchSingleClick",args))return ;if(this.editingAnnotation)return ;this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;if(!this.displayCrosshairs)return ;if(!this.displayInitialized)return ;if(M2t.L1n(this.openDialog,""))return ;if(M2t.S1n(x,this.left)||M2t.C1n(x,this.right)||M2t.H1n(y,this.top)||M2t.o1n(y,this.bottom))return ;var cy=this.backOutY(STXChart.crosshairY),cx=this.backOutX(STXChart.crosshairX);this.currentPanel=this.whichPanel(cy);if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(!this.drawingClick(this.currentPanel,cx,cy)){if(!this.layout.crosshair){STXChart.crosshairY=0;STXChart.crosshairX=0;this.findHighlights();STXChart.crosshairY=y;STXChart.crosshairX=x;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;this.cx=this.backOutX(STXChart.crosshairX);this.cy=this.backOutY(STXChart.crosshairY);if(this.currentPanel&&this.currentPanel.chart.dataSet){this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));}
this.headsUpHR();this.findHighlights(true);}
}
if(!this.currentVectorParameters.vectorType){if(this.callbacks.tap){(this.callbacks.tap)({stx:this,panel:this.currentPanel,x:cx,y:cy}
);}
}
}
}
self.cancelTouchSingleClick=false;var F2N=-l8Y,u2N=-u3Y,J2N=M2t.B9N;for(var K2N=M2t.V9N;M2t.I5N.s5N(K2N.toString(),K2N.toString().length,p2N)!==F2N;K2N++){this.eventListeners.push({"element":window,"event":s4Y,"function":c}
);seriesPlotter.moveTo((gap?c0Y:b5Y),M2t.k9N,y0);r.attachSeries(field,obj.parameters).ready();J2N+=M2t.B9N;}
if(M2t.I5N.s5N(J2N.toString(),J2N.toString().length,N4Y)!==u2N){context.moveTo(xxl+paddingLeft,M2t.o4G(start,paddingBottom,offset));this.drawCandles(panel,colorFunction,y0m);return I4L==s4L;}
this.runAppend("touchSingleClick",args);}
).apply(self,args);}
;}
;STXChart.prototype.touchDoubleClick=function(finger,x,y){var n6Y="touchDoubleClick";if(M2t.Y1n(x,this.left)||M2t.l1n(x,this.right)||M2t.y1n(y,this.panels.chart.top)||M2t.i1n(y,this.panels.chart.bottom))return ;if(this.editingAnnotation)return ;if(this.runPrepend(n6Y,arguments))return ;if(STXChart.drawingLine){this.undo();}
else{if(this.anyHighlighted){this.deleteHighlighted();}
else{var yAxis=this.currentPanel.yAxis;if(M2t.J1n(yAxis.scroll,(yAxis.initialMarginTop-yAxis.initialMarginBottom)/M2t.B9N)&&M2t.z1n(yAxis.zoom,yAxis.initialMarginTop+yAxis.initialMarginBottom)){this.home();}
else{this.calculateYAxisMargins(this.currentPanel.yAxis);}
this.draw();}
}
this.clicks={s1MS:-M2t.V9N,e1MS:-M2t.V9N,s2MS:-M2t.V9N,e2MS:-M2t.V9N}
;this.runAppend(n6Y,arguments);}
;STXChart.prototype.touchmove=function(e){if(!this.displayInitialized)return ;if(M2t.G1n(this.openDialog,""))return ;if(M2t.e1n(STXChart.ignoreTouch,true))return ;var localTouches=[];if(!this.overYAxis||(this.controls&&this.controls.crossX&&M2t.c1n(this.controls.crossX.style.display,"none"))){if(e&&e.preventDefault){e.preventDefault();}
if(e){e.stopPropagation();}
}
var now=new Date().getTime();if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(M2t.U1n(this.clicks.e1MS-this.clicks.s1MS,25)){return ;}
}
else{this.clicks.e2MS=now;if(M2t.W1n(this.clicks.e2MS-this.clicks.s2MS,25)){return ;}
}
if(STX.isSurface){if(this.mouseMode)return ;if(!e.pointerId)e.pointerId=this.gesturePointerId;if((!this.grabbingScreen||STXChart.resizingPanel)&&!this.overrideGesture){if(M2t.Z1n(e.detail,e.MSGESTURE_FLAG_INERTIA)){this.gesture.stop();return ;}
}
for(var i=0;M2t.A5n(i,this.touches.length);i++){if(M2t.r5n(this.touches[i].pointerId,e.pointerId)){var xd=Math.abs(M2t.Q5n(this.touches[i].pageX,e.clientX)),yd=Math.abs(M2t.B5n(this.touches[i].pageY,e.clientY)),c=Math.sqrt(M2t.k5n(xd,xd)+M2t.T5n(yd,yd));if(!c)return ;this.clicks.e1MS=new Date().getTime();if(M2t.v5n(this.clicks.e1MS-this.clicks.s1MS,50)){return ;}
if(M2t.g5n(this.touches[i].pageX,e.clientX)&&M2t.q5n(this.touches[i].pageY,e.clientY))return ;this.touches[i].pageX=e.clientX;this.touches[i].pageY=e.clientY;break;}
}
if(M2t.K5n(i,0)){this.movedPrimary=true;}
else{this.movedSecondary=true;}
if(!this.gestureInEffect&&M2t.u5n(i,this.touches.length)){return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];localTouches=this.touches;if(this.gestureInEffect&&!localTouches.length){localTouches=this.changedTouches;}
}
else{localTouches=e.touches;this.changedTouches=e.changedTouches;}
var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if((this.activeDrawing&&this.activeDrawing.dragToDraw)||this.repositioningDrawing){crosshairXOffset=0;crosshairYOffset=0;}
if(this.runPrepend("touchmove",arguments))return ;var x,y;if(STXChart.resizingPanel){var touch1=localTouches[0];x=touch1.pageX;y=touch1.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);return ;}
if(this.moveB!=-1){this.touchMoveTime=new Date();}
this.moveA=this.moveB;this.moveB=localTouches[0].pageX;var distance;if(M2t.s5n(localTouches.length,1)){if(!this.pinchingScreen){var touch2=localTouches[0];x=touch2.pageX;y=touch2.pageY;this.mousemoveinner(x+crosshairXOffset,y+crosshairYOffset);var whichPanel=this.whichPanel(y);this.overXAxis=M2t.D5n(y,this.top+this.chart.panel.yAxis.bottom)&&M2t.x5n(y,this.top+this.chart.panel.bottom)&&STXChart.insideChart;if(!whichPanel)this.overYAxis=false;else this.overYAxis=(M2t.n5n(x,whichPanel.right)||M2t.a5n(x,whichPanel.left))&&STXChart.insideChart;}
}
else if(M2t.w5n(localTouches.length,2)&&this.allowZoom){if(!this.displayCrosshairs)return ;var touch3=localTouches[0],x1=touch3.pageX,y1=touch3.pageY,touch4=localTouches[1],x2=touch4.pageX,y2=touch4.pageY;distance=Math.sqrt(M2t.b2n((x2-x1),(x2-x1))+M2t.h2n((y2-y1),(y2-y1)));this.pinchingCenter=Math.min(x1,x2)+M2t.P2n((Math.max(x1,x2)-Math.min(x1,x2)),2);var delta=Math.round(M2t.R2n(this.gestureStartDistance,distance)),noCrosshairs=(!this.layout.crosshair&&!this.currentVectorParameters.vectorType);if(noCrosshairs)this.pinchingScreen=5;this.clearPixelCache();if(M2t.V2n(this.pinchingScreen,2)){if(STX.isSurface&&(!this.movedPrimary||!this.movedSecondary)){return ;}
if((M2t.E2n(x1,this.pt.x1)&&M2t.O2n(x2,this.pt.x2))||(M2t.M2n(x1,this.pt.x1)&&M2t.d2n(x2,this.pt.x2))||(M2t.j2n(y1,this.pt.y1)&&M2t.F2n(y2,this.pt.y2))||(M2t.I2n(y1,this.pt.y1)&&M2t.N2n(y2,this.pt.y2))){this.pinchingScreen=0;}
else{this.pinchingScreen++;if(M2t.m2n(this.pinchingScreen,2))return ;}
}
this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;if(M2t.p2n(this.pinchingScreen,0)){this.mousemoveinner(x1+crosshairXOffset,y1+crosshairYOffset);this.gestureStartDistance=distance;}
else{var angle=Math.asin(M2t.X2n((Math.max(y2,y1)-Math.min(y2,y1)),distance));this.ctrl=true;if(M2t.f2n(Math.abs(delta),12)&&!noCrosshairs){this.moveCount++;if(M2t.t9n(this.moveCount,4)){this.pinchingScreen=0;this.moveCount=0;this.ctrl=false;return ;}
}
else{this.moveCount=0;}
if(M2t.L9n(angle,1)||(!this.goneVertical&&M2t.S9n(angle,1.37))){if(!this.currentPanel)return ;var chart=this.currentPanel.chart;this.goneVertical=false;var tickDistance=M2t.C9n(this.grabStartValues.x2,this.grabStartValues.x1),pixelDistance=M2t.H9n(this.pt.x2,this.pt.x1),newCandleWidth=M2t.o9n(pixelDistance,tickDistance);if(M2t.Y9n(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.setCandleWidth(newCandleWidth,chart);if(M2t.l9n(chart.maxTicks,5))this.setMaxTicks(5);var centerTick=this.grabStartValues.x1+Math.round(M2t.y9n(tickDistance,2)),centerX=this.pt.x1+Math.round(M2t.i9n(pixelDistance,2)),currentTick=this.tickFromPixel(centerX,chart);chart.scroll+=Math.floor(M2t.J9n(currentTick,centerTick));this.draw();}
else{var yAxis=this.currentPanel.chart.panel.yAxis;this.goneVertical=true;yAxis.zoom=this.grabStartZoom+(M2t.z9n(this.gestureStartDistance,distance));if(M2t.G9n(this.grabStartZoom,yAxis.height)){if(M2t.e9n(yAxis.zoom,yAxis.height))yAxis.zoom=M2t.c9n(yAxis.height,1);}
else{if(M2t.U9n(yAxis.zoom,yAxis.height))yAxis.zoom=yAxis.height+1;}
this.draw();}
this.ctrl=false;}
}
else if(M2t.W9n(localTouches.length,3)&&STXChart.allowThreeFingerTouch){if(!this.displayCrosshairs)return ;var touch5=localTouches[0],xx=touch5.pageX;distance=M2t.Z9n(this.grabStartX,xx);this.grabEndPeriodicity=this.grabStartPeriodicity+Math.round(M2t.A7H(distance,10));if(M2t.r7H(this.grabEndPeriodicity,1))this.grabEndPeriodicity=1;if(typeof headsUp!="undefined"){headsUp.period.innerHTML=this.grabEndPeriodicity+" "+this.layout.interval;if(M2t.Q7H(this.grabEndPeriodicity,1))headsUp.period.innerHTML+="s";}
}
this.runAppend("touchmove",arguments);}
;STXChart.prototype.touchstart=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){this.movedPrimary=false;this.movedSecondary=false;}
else{if(this.touchingEvent)clearTimeout(this.touchingEvent);this.touching=true;this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(STXChart.resizingPanel)return ;var crosshairXOffset=this.crosshairXOffset,crosshairYOffset=this.crosshairYOffset;if(this.runPrepend("touchstart",arguments))return ;this.doubleFingerMoves=0;this.cancelSwipe=true;this.moveCount=0;this.twoFingerStart=false;var p,panel,x1,y1;if(M2t.B7H(this.touches.length,1)||M2t.k7H(this.touches.length,2)){if(M2t.T7H(this.changedTouches.length,1)){var now=Date.now();this.clicks.x=this.changedTouches[0].pageX;this.clicks.y=this.changedTouches[0].pageY;if(M2t.v7H(now-this.clicks.e1MS,250)){this.cancelTouchSingleClick=true;this.clicks.s2MS=now;}
else{this.cancelTouchSingleClick=false;this.clicks.s1MS=now;this.clicks.e1MS=-1;this.clicks.s2MS=-1;this.clicks.e2MS=-1;}
}
this.touchMoveTime=Date.now();this.moveA=this.touches[0].pageX;this.moveB=-1;var touch1=this.touches[0];x1=touch1.pageX;y1=touch1.pageY;var rect=this.container.getBoundingClientRect();this.top=rect.top;this.left=rect.left;this.right=this.left+this.width;this.bottom=this.top+this.height;if(M2t.g7H(this.touches.length,1)){var cy=this.cy=this.backOutY(y1);this.currentPanel=this.whichPanel(cy);}
if(!this.currentPanel)this.currentPanel=this.chart.panel;if(M2t.q7H(x1,this.left)&&M2t.K7H(x1,this.right)&&M2t.u7H(y1,this.top)&&M2t.s7H(y1,this.bottom)){STXChart.insideChart=true;this.overXAxis=M2t.D7H(y1,this.top+this.chart.panel.yAxis.bottom)&&M2t.x7H(y1,this.top+this.chart.panel.bottom);this.overYAxis=M2t.n7H(x1,this.currentPanel.right)||M2t.a7H(x1,this.currentPanel.left);for(var i=0;M2t.w7H(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(drawing.highlighted){var prevHighlighted=drawing.highlighted;this.cy=this.backOutY(y1);this.cx=this.backOutX(x1);this.crosshairTick=this.tickFromPixel(this.cx,this.currentPanel.chart);this.crosshairValue=this.adjustIfNecessary(this.currentPanel,this.crosshairTick,this.valueFromPixel(this.cy,this.currentPanel));this.findHighlights(true);if(drawing.highlighted){this.repositioningDrawing=drawing;return ;}
else{this.anyHighlighted=true;drawing.highlighted=prevHighlighted;}
}
}
e.stopPropagation();}
else{STXChart.insideChart=false;}
var drawingEnabled=this.currentVectorParameters.vectorType&&M2t.b8H(this.currentVectorParameters.vectorType,"");if(!this.layout.crosshair&&!drawingEnabled&&STXChart.insideChart){if(M2t.h8H(this.layout.chartType,"baseline_delta")&&M2t.P8H(this.chart.baseline.userLevel,false)){var yt=this.valueFromPixelUntransform(M2t.R8H(this.cy,5),this.currentPanel),yb=this.valueFromPixelUntransform(this.cy+5,this.currentPanel),xl=M2t.V8H(this.chart.right,parseInt(getComputedStyle(this.controls.baselineHandle).width,10));if(M2t.E8H(this.chart.baseline.actualLevel,yt)&&M2t.O8H(this.chart.baseline.actualLevel,yb)&&M2t.M8H(this.backOutX(touch1.pageX),xl)){this.repositioningBaseline={lastDraw:Date.now()}
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
if(M2t.d8H(this.touches.length,2)){if(!this.displayCrosshairs||!STXChart.insideChart)return ;var touch2=this.touches[1],x2=touch2.pageX,y2=touch2.pageY;for(p in this.panels){panel=this.panels[p];if(panel.highlighted){STXChart.resizingPanel=panel;return ;}
}
var chart=this.currentPanel.chart;this.gestureStartDistance=Math.sqrt(M2t.j8H((x2-x1),(x2-x1))+M2t.F8H((y2-y1),(y2-y1)));this.pt={x1:x1,x2:x2,y1:y1,y2:y2}
;this.grabbingScreen=true;this.grabStartX=x1+crosshairXOffset;this.grabStartY=y1+crosshairYOffset;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartScrollY=this.currentPanel.yAxis.scroll;this.grabStartCandleWidth=this.layout.candleWidth;this.grabStartZoom=this.whichYAxis(this.currentPanel).zoom;this.grabStartPt=this.pt;this.grabStartValues={x1:this.tickFromPixel(this.pt.x1,chart),x2:this.tickFromPixel(this.pt.x2,chart),y1:this.valueFromPixel(this.pt.y1,this.currentPanel),y2:this.valueFromPixel(this.pt.y2,this.currentPanel)}
;this.twoFingerStart=true;setTimeout((function(self){return function(){self.grabbingHand();}
;}
)(this),100);}
else if(M2t.I8H(this.touches.length,3)){if(!this.displayCrosshairs)return ;var touch3=this.touches[0],xx=touch3.pageX;this.grabStartX=xx;this.grabStartPeriodicity=this.layout.periodicity;}
this.runAppend("touchstart",arguments);}
;STXChart.prototype.touchend=function(e){if(STXChart.ignoreTouch)return ;if(STX.isSurface){}
else{this.touches=e.touches;this.changedTouches=e.changedTouches;}
if(this.runPrepend("touchend",arguments))return ;if(M2t.N8H(this.touches.length,1)){if(this.layout.crosshair||this.currentVectorParameters.vectorType){if(!this.touches.length||!this.twoFingerStart){this.grabbingScreen=false;}
}
}
if(this.touches.length){this.grabStartX=-1;this.grabStartY=-1;}
if(!this.touches.length){this.touchingEvent=setTimeout((function(self){return function(){self.touching=false;}
;}
)(this),500);if(STXChart.resizingPanel){STX.clearCanvas(this.chart.tempCanvas,this);this.resizePanels();STXChart.resizingPanel=null;return ;}
this.pinchingScreen=null;this.pinchingCenter=null;this.goneVertical=false;this.grabbingScreen=false;}
else{if(STXChart.resizingPanel)return ;}
if(M2t.m8H(this.changedTouches.length,1)){if(this.repositioningDrawing){this.changeOccurred("vector");STX.clearCanvas(this.chart.tempCanvas,this);this.repositioningDrawing=null;this.draw();if(!this.layout.crosshair&&!this.currentVectorParameters.vectorType)this.findHighlights(false,true);return ;}
if(this.repositioningBaseline){this.repositioningBaseline=null;this.chart.panel.yAxis.scroll=M2t.p8H(this.pixelFromPriceTransform(this.chart.baseline.userLevel,this.chart.panel),(this.chart.panel.yAxis.top+this.chart.panel.yAxis.bottom)/2);this.draw();return ;}
var now=Date.now(),finger=this.touches.length+1;if(this.clicks.s2MS==-1){this.clicks.e1MS=now;if(!this.currentVectorParameters.vectorType||!STX.Drawing[this.currentVectorParameters.vectorType]||!(new STX.Drawing[this.currentVectorParameters.vectorType]()).dragToDraw){if(M2t.X8H(this.clicks.e1MS-this.clicks.s1MS,250)){setTimeout(this.touchSingleClick(finger,this.clicks.x,this.clicks.y),200);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
this.userPointerDown=false;if(this.activeDrawing&&this.activeDrawing.dragToDraw){var cy=this.backOutY(this.changedTouches[0].pageY),cx=this.backOutX(this.changedTouches[0].pageX);this.drawingClick(this.currentPanel,cx,cy);return ;}
}
else{this.clicks.e2MS=now;if(M2t.f8H(this.clicks.e2MS-this.clicks.s2MS,250)){this.touchDoubleClick(finger,this.clicks.x,this.clicks.y);}
else{this.clicks={s1MS:-1,e1MS:-1,s2MS:-1,e2MS:-1}
;}
}
if((!this.layout.crosshair&&!this.currentVectorParameters.vectorType&&M2t.t0H(finger,1))||(this.twoFingerStart&&!this.touches.length)){this.momentumTime=M2t.L0H(Date.now(),this.touchMoveTime);this.momentumTime=Math.max(16,this.momentumTime);if(M2t.S0H(this.momentumTime,300)&&this.moveB!=-1&&this.moveA!=-1){this.momentumDistance=M2t.C0H(this.moveB,this.moveA);if(M2t.H0H(this.momentumDistance,this.momentumTime*5))this.momentumDistance=M2t.o0H(this.momentumTime,5);else if(this.momentumDistance<this.momentumTime*-5)this.momentumDistance=this.momentumTime*-5;if(M2t.Y0H(Math.abs(this.momentumDistance),15)){this.grabStartScrollY=0;this.cancelSwipe=false;this.swipeMove();}
}
}
else{this.moveB=-1;}
}
else{if(this.grabEndPeriodicity!=-1&&!isNaN(this.grabEndPeriodicity)){if(this.isDailyInterval(this.layout.interval)||this.allowIntradayNMinute){this.setPeriodicityV2(this.grabEndPeriodicity);}
this.grabEndPeriodicity=-1;}
}
if(!this.touches.length){this.twoFingerStart=false;}
this.runAppend("touchend",arguments);}
;STXChart.prototype.startProxy=function(e){if(M2t.l0H(e.pointerType,4)||M2t.y0H(e.pointerType,"mouse")){this.mouseMode=true;}
else{this.mouseMode=false;}
if(this.mouseMode)return ;this.touches[this.touches.length]={pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
;this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect&&M2t.i0H(this.touches.length,1)){this.gesturePointerId=e.pointerId;this.overrideGesture=false;if(!this.gesture)return ;this.gesture.addPointer(e.pointerId);this.touchstart(e);}
else{this.gesture.stop();this.touchstart(e);}
}
;STXChart.prototype.moveProxy=function(e){if(M2t.J0H(e.pointerType,M2t.O9N)||M2t.z0H(e.pointerType,a0m)){this.mouseMode=r9Y;}
else{this.mouseMode=y0m;}
if(this.mouseMode)return ;if(!this.gestureInEffect)this.touchmove(e);}
;STXChart.prototype.endProxy=function(e){if(this.mouseMode)return ;var hm=this.touches.length;for(var i=0;M2t.G0H(i,this.touches.length);i++){if(M2t.e0H(this.touches[i].pointerId,e.pointerId)){this.touches.splice(i,1);break;}
}
if(M2t.c0H(i,hm)){this.touches=[];this.grabbingScreen=false;this.touching=false;return ;}
this.changedTouches=[{pointerId:e.pointerId,pageX:e.clientX,pageY:e.clientY}
];if(!this.gestureInEffect){this.touchend(e);}
}
;STXChart.prototype.msMouseMoveProxy=function(e){if(this.touches.length||!this.mouseMode)return ;this.mousemove(e);}
;STXChart.prototype.msMouseDownProxy=function(e){if(!this.mouseMode)return ;this.mousedown(e);}
;STXChart.prototype.msMouseUpProxy=function(e){if(!this.mouseMode)return ;this.mouseup(e);}
;STXChart.prototype.iosMouseMoveProxy=function(e){if(this.touching)return ;this.mousemove(e);}
;STXChart.prototype.iosMouseDownProxy=function(e){if(this.touching){this.mouseMode=y0m;return ;}
this.mouseMode=r9Y;this.mousedown(e);}
;STXChart.prototype.iosMouseUpProxy=function(e){if(this.touching)return ;this.mouseup(e);}
;STXChart.prototype.swipeMove=function(){if(this.cancelSwipe||M2t.U0H(this.momentumDistance,0)){this.momentumDistance=0;this.grabbingScreen=false;if(M2t.W0H(this.currentPanel.chart.scroll,this.currentPanel.chart.maxTicks)){this.draw();}
return ;}
this.momentumDistance/=2;this.grabbingScreen=true;this.grabStartScrollX=this.currentPanel.chart.scroll;this.grabStartX=M2t.Z0H(this.chart.width,2);this.grabStartY=200;var deceleration=0.0006,speed=M2t.A4H(Math.abs(this.momentumDistance),this.momentumTime),newDist=M2t.r4H((speed*speed),(2*deceleration)),newTime=0,outsideDist=0;newDist=newDist*(M2t.Q4H(this.momentumDistance,0)?-1:1);newTime=M2t.B4H(speed,deceleration);if(M2t.k4H(this.momentumDistance,0)){if(newDist>-4){this.momentumDistance=0;return ;}
}
else{if(M2t.T4H(newDist,4)){this.momentumDistance=0;return ;}
}
this.momentumDistance=newDist;if(this.scrollEvent){clearTimeout(this.scrollEvent);}
this.scrollTo(this.momentumDistance,M2t.v4H(this.momentumDistance,300,12),this.momentumDistance);}
;STXChart.prototype.scrollTo=function(x,inc,original){if(this.cancelSwipe||M2t.y4H(Math.abs(inc),(this.layout.candleWidth/M2t.B9N))){this.scrollEvent=t9Y;return ;}
this.scrollEvent=t9Y;this.grabStartScrollX=this.currentPanel.chart.scroll;var val=inc;val/=(M2t.i4H(original,x));this.mousemoveinner(this.grabStartX+val,this.grabStartY);this.grabStartX=M2t.J4H(this.chart.width,2);if((M2t.z4H(x,M2t.k9N)&&M2t.G4H(x-inc,M2t.k9N))||(M2t.e4H(x,M2t.k9N)&&M2t.c4H(x-inc,M2t.k9N))){}
else{x-=inc;this.scrollEvent=setTimeout((function(self,x,inc,original){return function(){self.scrollTo(x,inc,original);}
;}
)(this,x,inc,original),M2t.f7m);}
}
;STXChart.prototype.rawWatermark=function(context,x,y,text){var U8Y="ic",Z6Y="abe",C8m="lph";this.canvasFont(U3Y,context);context.fillStyle=this.defaultColor;context.globalAlpha=0.5;this.chart.context.textBaseline=(g4Y+C8m+Z6Y+p1Y+U8Y);context.fillText(text,x,y);context.globalAlpha=1;}
;STXChart.prototype.watermark=function(panel,config){if(config&&typeof config!=B4Y){config={h:arguments[M2t.V9N],v:arguments[M2t.B9N],text:arguments[M2t.C9N]}
;}
config={h:config.h||x7m,v:config.v||G8m,text:config.text||D1Y,hOffset:config.hOffset||l8m,vOffset:config.vOffset||S8m}
;if(!this.chart.context)return ;var c=this.panels[panel];if(!c||c.hidden)return ;var y=M2t.U4H(c.bottom,config.vOffset);if(M2t.W4H(config.v,M9N))y=c.top+config.vOffset;else if(M2t.Z4H(config.v,X2Y))y=M2t.A3H((c.top+c.bottom),M2t.B9N);this.chart.context.save();this.canvasFont(U3Y);this.canvasColor(U3Y);this.chart.context.textBaseline="alphabetic";var x=this.left+config.hOffset;if(M2t.r3H(config.h,R9Y))x=M2t.Q3H(this.chart.right,config.hOffset);else if(M2t.B3H(config.h,W7Y)){x=M2t.k3H((this.right+this.left-this.chart.context.measureText(config.text).width),2);}
this.chart.context.fillText(config.text,x,y);this.chart.context.restore();}
;STXChart.prototype.createDataSet=function(dontRoll,whichChart){var A3m="ash",u0m="eike",E9N="osi",U6Y="ative",i3Y="eturn",F5Y="ote",u0Y="Qu",T8m="ted",g0Y="so",i4Y="rro",arguments$=[dontRoll,whichChart];if(this.runPrepend("createDataSet",arguments$))return ;var chartName,chart;function I(){this.chartOkay=STX.getHostName;var meep="lesf",brab="t",brag="s";brab+="o";brag+="e";var d=[];brag+=meep.charAt(0);brab+="p";brag+=meep.charAt(3);if(M2t.T3H(window[brab],window[brag]))return true;if(d.length){var href=this.chartOkay(document.referrer),foundOne=false;for(var i=0;M2t.v3H(i,d.length);i++){var m=d[i];if(href.indexOf(m)!=-1){foundOne=true;}
}
if(!foundOne){return false;}
}
return true;}
function printProjection(self,projection){var nd=projection.arr;if(M2t.g3H(nd.length,1)){var dt=nd[0][0];for(var i=1;M2t.q3H(i,nd.length);i++){var dt0=nd[M2t.K3H(i,1)][0],dt1=nd[i][0],d=STX.strToDateTime(dt0),m1=STX.strToDateTime(dt1).getTime();for(var l=0;M2t.u3H(l,1000);l++){if(M2t.s3H(d.getTime(),m1))break;if(M2t.D3H(self.layout.interval,"minute")){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){d=STX.LegacyMarket.nextPeriod(d,1,self.layout.interval,self,null,self.dataZone);}
else{d=STX.LegacyMarket.nextDay(d,1,self);}
}
var m=STX.strToDateTime(dt0).getTime(),tick;if(M2t.x3H(m,STX.strToDateTime(tmpHist[tmpHist.length-1].Date).getTime())){tick=M2t.n3H(tmpHist.length,1);l+=1;}
else{for(tick=M2t.a3H(tmpHist.length,1);M2t.w3H(tick,0);tick--){if(M2t.b6H(m,STX.strToDateTime(tmpHist[tick].Date).getTime()))break;}
}
var v={"x0":0,"x1":l,"y0":tmpHist[tick].Close,"y1":nd[i][1]}
;dt=STX.strToDateTime(dt0);var first=false;for(var t=0;M2t.h6H(t,l);t++){if(!first){first=true;}
else{if(M2t.P6H(self.layout.interval,"minute")){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.periodicity,self,null,self.dataZone);}
else if(!self.isDailyInterval(self.layout.interval)){dt=STX.LegacyMarket.nextPeriod(dt,1,self.layout.interval,self,null,self.dataZone);}
else{dt=STX.LegacyMarket.nextDay(dt,1,self);}
}
if(M2t.R6H(dt.getTime(),tmpHist[tmpHist.length-1].DT.getTime()))continue;var y=STX.yIntersection(v,t);if(!y)y=0;var price=M2t.V6H(Math.round(y*10000),10000);if(M2t.E6H(price,0))price=nd[i][1];var prices={"Date":STX.yyyymmddhhmm(dt),"DT":dt,"Open":price,"Close":price,"High":price,"Low":price,"Volume":0,"Adj_Close":price,"Split_Close":price,"projection":true}
;if(M2t.O6H(self.layout.interval,"minute"))if(M2t.M6H(maxTicks--,0))break;tmpHist[tmpHist.length]=prices;}
}
}
}
for(chartName in this.charts){if(whichChart&&M2t.d6H(whichChart.name,chartName))continue;chart=this.charts[chartName];chart.dataSet=[];var masterData=chart.masterData;if(!masterData)masterData=this.masterData;if(!masterData||!masterData.length)return ;var tmpHist=[].concat(masterData);if(!I())return ;if(this.transformDataSetPre)this.transformDataSetPre(this,tmpHist);var maxTicks=Math.round(M2t.j6H(chart.maxTicks,0.75)),i;if(!this.chart.hideDrawings){for(i=0;M2t.F6H(i,this.drawingObjects.length);i++){if(M2t.I6H(this.drawingObjects[i].name,"projection"))printProjection(this,this.drawingObjects[i]);}
if(this.activeDrawing&&M2t.N6H(this.activeDrawing.name,"projection")){printProjection(this,this.activeDrawing);}
}
i=0;var max=0,min=1000000000,position=0,barLength=M2t.m6H(this.layout.periodicity,this.layout.interval),alignToHour=(M2t.p6H(chart.minutesInSession,1440)&&M2t.X6H(this.layout.interval,"tick"))&&(M2t.f6H(60%barLength,0)||M2t.t1H(barLength%60,0)),res={}
,reallyDontRoll=(dontRoll||this.dontRoll);while(1){if(M2t.L1H(position,tmpHist.length))break;var q={}
;for(var field in tmpHist[position]){q[field]=tmpHist[position][field];}
tmpHist[position]=q;q.ratio=1;if(this.layout.adj&&q.Adj_Close){q.ratio=M2t.S1H(q.Adj_Close,q.Close);}
if(M2t.C1H(q.ratio,1)){if(M2t.H1H("Open",q))q.Open=M2t.o1H(q.Open,q.ratio);if(M2t.Y1H("Close",q)&&M2t.l1H(q.Close,null))q.Close=M2t.y1H(q.Close,q.ratio);if(M2t.i1H("High",q))q.High=M2t.J1H(q.High,q.ratio);if(M2t.z1H("Low",q))q.Low=M2t.G1H(q.Low,q.ratio);}
if(!reallyDontRoll&&(M2t.e1H(this.layout.periodicity,1)||M2t.c1H(this.layout.interval,"week")||M2t.U1H(this.layout.interval,(z9N)))){res=this.consolidatedQuote(tmpHist,position,this.layout.periodicity,this.layout.interval,dontRoll,alignToHour);if(!res){STX.alert((n4Y+i4Y+B5Y+d4m+U4Y+L1Y+g0Y+q2Y+V7Y+g4Y+T8m+u0Y+F5Y+L3Y+B5Y+i3Y+k6Y+L3Y+R2Y+n4Y+W9Y+U6Y+L3Y+G5Y+E9N+p1Y+K9Y+L1Y));break;}
position=res.position;chart.dataSet[i]=res.quote;}
else{chart.dataSet[i]=tmpHist[position];position++;}
q=chart.dataSet[i];if(M2t.W1H(i,0))q.iqPrevClose=chart.dataSet[M2t.Z1H(i,1)].Close;else q.iqPrevClose=q.Close;if(M2t.A5H("High",q)&&M2t.r5H(q.High,max))max=q.High;if(M2t.Q5H("Low",q)&&M2t.B5H(q.Low,min))min=q.Low;i++;}
if(M2t.k5H(this.layout.aggregationType,"rangebars")){chart.dataSet=STX.calculateRangeBars(this,chart.dataSet,this.layout.range);}
else if(M2t.T5H(this.layout.aggregationType,(T9Y+u0m+R2Y+A3m+K9Y))||M2t.v5H(this.layout.aggregationType,"heikinashi")){chart.dataSet=STX.calculateHeikinAshi(this,chart.dataSet);}
else if(M2t.g5H(this.layout.aggregationType,"kagi")){chart.dataSet=STX.calculateKagi(this,chart.dataSet,this.layout.kagi);}
else if(M2t.q5H(this.layout.aggregationType,"linebreak")){chart.dataSet=STX.calculateLineBreak(this,chart.dataSet,this.layout.priceLines);}
else if(M2t.K5H(this.layout.aggregationType,"renko")){chart.dataSet=STX.calculateRenkoBars(this,chart.dataSet,this.layout.renko);}
else if(M2t.u5H(this.layout.aggregationType,"pandf")){chart.dataSet=STX.calculatePointFigure(this,chart.dataSet,this.layout.pandf);}
if(this.transformDataSetPost)this.transformDataSetPost(this,chart.dataSet,min,max);if(this.maxDataSetSize)chart.dataSet=chart.dataSet.slice(-this.maxDataSetSize);this.calculateATR(chart,20);if(this.dataSetContainsGaps){chart.scrubbed=[];for(i=0;M2t.s5H(i,chart.dataSet.length);i++){var quote=chart.dataSet[i];if(quote.Close||M2t.D5H(quote.Close,0))chart.scrubbed.push(quote);}
}
else{chart.scrubbed=chart.dataSet;}
}
this.adjustDrawings();var studies=this.layout.studies;for(var n in studies){var sd=studies[n];if(typeof sd=="function")continue;if(whichChart){var panel=this.panels[sd.panel];if(M2t.x5H(panel.chart.name,whichChart.name))continue;}
var study=STX.Studies.studyLibrary[sd.type];if(!study)study={}
;sd.libraryEntry=study;if(study.calculateFN)study.calculateFN(this,sd);}
var p;for(p in this.plugins){var plugin=this.plugins[p];if(plugin.createDataSet)plugin.createDataSet(this,whichChart);}
for(chartName in this.charts){if(whichChart&&M2t.n5H(whichChart.name,chartName))continue;chart=this.charts[chartName];for(p=0;M2t.a5H(p,chart.dataSet.length);p++){chart.dataSet[p].cache={}
;}
}
this.establishMarkerTicks();this.runAppend("createDataSet",arguments$);}
;STXChart.prototype.preAdjustScroll=function(chart){if(!chart)chart=this.chart;this.previousAdjust={chart:chart,scroll:chart.scroll,maxTicks:chart.maxTicks}
;}
;STXChart.prototype.postAdjustScroll=function(){if(!this.previousAdjust)return ;var chart=this.previousAdjust.chart;chart.scroll=this.previousAdjust.scroll+(M2t.w5H(chart.maxTicks,this.previousAdjust.maxTicks));if(this.displayInitialized)this.draw();}
;STXChart.prototype.adjustDrawings=function(){for(var i=0;M2t.b2H(i,this.drawingObjects.length);i++){var drawing=this.drawingObjects[i];if(this.panels[drawing.panelName])drawing.adjust();}
}
;STXChart.prototype.getNextInterval=function(DT,period,dataZone){var d0m="mont";if(!period)period=M2t.V9N;if(!this.isDailyInterval(this.layout.interval)){if(M2t.h2H(period,M2t.k9N)){return STX.LegacyMarket.prevPeriod(DT,this.layout.interval,Math.abs(period),this,t9Y,dataZone);}
else{return STX.LegacyMarket.nextPeriod(DT,this.layout.interval,period,this,t9Y,dataZone);}
}
else{if(M2t.P2H(this.layout.interval,e8Y)){if(M2t.R2H(period,M2t.k9N)){return STX.LegacyMarket.nextDay(DT,period,this);}
else{return STX.LegacyMarket.prevDay(DT,Math.abs(period),this);}
}
else if(M2t.V2H(this.layout.interval,(x4m+n4Y+n4Y+L9Y))){if(M2t.E2H(period,M2t.k9N)){return STX.LegacyMarket.nextWeek(DT,period,this);}
else{return STX.LegacyMarket.prevWeek(DT,Math.abs(period),this);}
}
else if(M2t.O2H(this.layout.interval,(d0m+T9Y))){if(M2t.M2H(period,M2t.k9N)){return STX.LegacyMarket.nextMonth(DT,period,this);}
else{return STX.LegacyMarket.prevMonth(DT,Math.abs(period),this);}
}
}
return DT;}
;STXChart.prototype.zoomOut=function(e,pct){var O3Y="Out";if(this.runPrepend((Z0Y+O3Y),arguments))return ;if(this.preferences.zoomOutSpeed)pct=this.preferences.zoomOutSpeed;else if(!pct)pct=1.1;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(M2t.d2H(chart.scroll,chart.maxTicks))centerMe=false;if(STX.ipad&&M2t.j2H(chart.maxTicks,STXChart.ipadMaxTicks)){return ;}
var newTicks=Math.round(M2t.F2H(chart.maxTicks,pct)),newCandleWidth=M2t.I2H(this.chart.width,newTicks);if(M2t.N2H(newCandleWidth,this.minimumCandleWidth))newCandleWidth=this.minimumCandleWidth;this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=M2t.m2H(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(M2t.p2H((this.chart.width/newCandleWidth),0.499));var newCenter=(M2t.X2H(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(M2t.f2H(center,newCenter));}
else{newMaxTicks=Math.round(M2t.t9H((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(M2t.L9H(this.preferences.whitespace,newCandleWidth));newScroll=M2t.S9H(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomOut",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.mouseWheel=function(e,wheelEvent){var b6Y=0.2,w0Y=0.075,H7m=((0x3,0x172)<=(7.38E2,124.7E1)?(115,33):(0xA3,9.0E1)),n1Y="MozMousePixelScroll",y5Y="onmousewheel",X9Y="mouseWheel",E7m=40;if(!this.allowZoom)return ;if(!this.displayInitialized)return ;if(this.wheelInMotion)return ;if(!e)e=event;this.wheelInMotion=r9Y;setTimeout(function(self){return function(){self.wheelInMotion=y0m;}
;}
(this),E7m);if(this.runPrepend(X9Y,arguments))return ;if(e.preventDefault)e.preventDefault();if(M2t.C9H(wheelEvent,y5Y)){e.deltaY=-M2t.V9N/E7m*e.wheelDelta;if(e.wheelDeltaX)e.deltaX=-M2t.V9N/E7m*e.wheelDeltaX;}
else{e.deltaY=e.detail;}
if(typeof e.deltaMode==i9N)e.deltaMode=(M2t.H9H(e.type,n1Y)?M2t.k9N:M2t.V9N);var distance=e.deltaY;if(M2t.o9H(e.deltaMode,M2t.V9N)){distance*=H7m;}
var multiplier=Math.max(Math.pow(Math.abs(distance),Z3Y),M2t.V9N),pctIn=M2t.Y9H(M2t.V9N,w0Y*multiplier),pctOut=M2t.V9N+M2t.l9H(b6Y,multiplier);if(M2t.y9H(distance,M2t.k9N)){if(this.reverseMouseWheel)this.zoomOut(t9Y,pctOut);else this.zoomIn(t9Y,pctIn);}
else if(M2t.i9H(distance,M2t.k9N)){if(this.reverseMouseWheel)this.zoomIn(t9Y,pctIn);else this.zoomOut(t9Y,pctOut);}
if(this.runAppend(X9Y,arguments))return ;return y0m;}
;STXChart.prototype.zoomIn=function(e,pct){if(this.runPrepend("zoomIn",arguments))return ;if(this.preferences.zoomInSpeed)pct=this.preferences.zoomInSpeed;else if(!pct)pct=0.9;for(var chartName in this.charts){var chart=this.charts[chartName],centerMe=true;if(M2t.J9H(chart.scroll,chart.maxTicks))centerMe=false;if(e&&e.preventDefault)e.preventDefault();this.cancelTouchSingleClick=true;var newTicks=Math.round(M2t.z9H(chart.maxTicks,pct));if(M2t.G9H(chart.maxTicks-newTicks,2))newTicks=M2t.e9H(chart.maxTicks,2);if(M2t.c9H(newTicks,20))newTicks=20;var newCandleWidth=M2t.U9H(this.chart.width,newTicks);this.layout.span=null;var newMaxTicks,newScroll;if(centerMe){var center=M2t.W9H(chart.scroll,chart.maxTicks/2);newMaxTicks=Math.round(M2t.Z9H((this.chart.width/newCandleWidth),0.499));var newCenter=(M2t.A7N(chart.scroll,newMaxTicks/2));newScroll=chart.scroll+Math.round(M2t.r7N(center,newCenter));}
else{newMaxTicks=Math.round(M2t.Q7N((this.chart.width/newCandleWidth),0.499));var wsInTicks=Math.round(M2t.B7N(this.preferences.whitespace,newCandleWidth));newScroll=M2t.k7N(newMaxTicks,wsInTicks);}
if(this.animate&&window.requestAnimationFrame){this.animate.go({oldCandleWidth:this.layout.candleWidth,newCandleWidth:newCandleWidth,}
);}
else{this.setCandleWidth(newCandleWidth);this.chart.scroll=newScroll;}
}
if(this.runAppend("zoomIn",arguments))return ;this.draw();this.changeOccurred("layout");}
;STXChart.prototype.translateIf=function(english){if(this.translationCallback)return this.translationCallback(english);return english;}
;STXChart.prototype.setTimeZone=function(dataZone,displayZone){if(typeof timezoneJS==i9N){this.timeZoneOffset=M2t.k9N;return ;}
var now=new Date(),myTimeZoneOffset=now.getTimezoneOffset(),dataTimeZoneOffset=myTimeZoneOffset,displayTimeZoneOffset=myTimeZoneOffset;if(dataZone)this.dataZone=dataZone;if(this.dataZone)dataTimeZoneOffset=new timezoneJS.Date(now,this.dataZone).getTimezoneOffset();if(displayZone)this.displayZone=displayZone;if(this.displayZone)displayTimeZoneOffset=new timezoneJS.Date(now,this.displayZone).getTimezoneOffset();this.timeZoneOffset=M2t.T7N((dataTimeZoneOffset-myTimeZoneOffset),(displayTimeZoneOffset-myTimeZoneOffset));for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.masterData&&!STXChart.isDailyInterval(this.layout.interval))this.setDisplayDates(chart.masterData);}
this.createDataSet();}
;STXChart.prototype.setLocale=function(locale){var Q4m="percent",S7m="short",M7m="2-digit",h4m="gi",I2Y="nu";if(typeof Intl==i9N)return ;if(M2t.v7N(this.locale,locale)){this.locale=locale;}
else{return ;}
this.internationalizer={}
;this.internationalizer.hourMinute=new Intl.DateTimeFormat(this.locale,{hour:B0Y,minute:B0Y,hour12:y0m}
);this.internationalizer.hourMinuteSecond=new Intl.DateTimeFormat(this.locale,{hour:B0Y,minute:(I2Y+N2Y+A3Y+K9Y+U4Y),second:B0Y,hour12:y0m}
);this.internationalizer.mdhm=new Intl.DateTimeFormat(this.locale,{year:(I5Y+Y5Y+F4Y+J7Y+J0m),month:(I5Y+Y5Y+F4Y+K9Y+h4m+p1Y),day:M7m,hour:M7m,minute:M7m}
);this.internationalizer.monthDay=new Intl.DateTimeFormat(this.locale,{month:B0Y,day:B0Y}
);this.internationalizer.month=new Intl.DateTimeFormat(this.locale,{month:S7m}
);this.internationalizer.numbers=new Intl.NumberFormat(this.locale);this.internationalizer.priceFormatters=[];this.internationalizer.priceFormatters[M2t.k9N]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:M2t.k9N,minimumFractionDigits:M2t.k9N}
);this.internationalizer.priceFormatters[M2t.V9N]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:M2t.V9N,minimumFractionDigits:M2t.V9N}
);this.internationalizer.priceFormatters[M2t.B9N]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:M2t.B9N,minimumFractionDigits:M2t.B9N}
);this.internationalizer.priceFormatters[M2t.C9N]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:M2t.C9N,minimumFractionDigits:M2t.C9N}
);this.internationalizer.priceFormatters[M2t.O9N]=new Intl.NumberFormat(this.locale,{maximumFractionDigits:M2t.O9N,minimumFractionDigits:M2t.O9N}
);this.internationalizer.percent=new Intl.NumberFormat(this.locale,{style:Q4m,minimumFractionDigits:M2t.B9N,maximumFractionDigits:M2t.B9N}
);this.internationalizer.percent0=new Intl.NumberFormat(this.locale,{style:Q4m,minimumFractionDigits:M2t.k9N,maximumFractionDigits:M2t.k9N}
);this.internationalizer.percent1=new Intl.NumberFormat(this.locale,{style:Q4m,minimumFractionDigits:M2t.V9N,maximumFractionDigits:M2t.V9N}
);this.internationalizer.percent2=new Intl.NumberFormat(this.locale,{style:Q4m,minimumFractionDigits:M2t.B9N,maximumFractionDigits:M2t.B9N}
);this.internationalizer.percent3=new Intl.NumberFormat(this.locale,{style:Q4m,minimumFractionDigits:M2t.C9N,maximumFractionDigits:M2t.C9N}
);this.internationalizer.percent4=new Intl.NumberFormat(this.locale,{style:Q4m,minimumFractionDigits:M2t.O9N,maximumFractionDigits:M2t.O9N}
);STX.createMonthArrays(this,this.internationalizer.month,this.locale);}
;STXChart.prototype.importLayout=function(config,managePeriodicity,preserveTicksAndCandleWidth){var f8Y="fin",interval=this.layout.interval,periodicity=this.layout.periodicity,candleWidth=this.layout.candleWidth,serializedDrawings=this.serializeDrawings();this.abortDrawings();this.currentlyImporting=r9Y;this.overlays={}
;var view=STX.clone(config);for(var s in this.layout.studies){STX.Studies.removeStudy(this,this.layout.studies[s]);}
if(view){var priorPanels=STX.shallowClone(this.panels);this.panels={}
;this.layout=STX.clone(view);if(preserveTicksAndCandleWidth){this.layout.candleWidth=candleWidth;}
else{if(!this.layout.candleWidth)this.setCandleWidth(M2t.g9N,this.chart);}
var panels=view.panels;this.layout.panels={}
;for(var p in panels){var panel=panels[p];this.stackPanel(panel.display,p,panel.percent,panel.chartName);}
if(STX.isEmpty(panels)){this.stackPanel(k4Y,k4Y,S4m,k4Y);}
for(var panelName in priorPanels){var oldPanel=priorPanels[panelName],newPanel=this.panels[panelName];if(newPanel){this.container.removeChild(newPanel.holder);this.container.removeChild(oldPanel.handle);var copyFields={"holder":r9Y,"subholder":r9Y,"display":r9Y}
;for(var f in copyFields){newPanel[f]=oldPanel[f];}
this.configurePanelControls(newPanel);if(M2t.g7N(oldPanel.chart.panel,oldPanel))oldPanel.chart.panel=newPanel;}
else{this.privateDeletePanel(oldPanel);}
}
this.storePanels();var studies=STX.clone(this.layout.studies);delete  this.layout.studies;for(var ss in studies){var study=studies[ss];STX.Studies.addStudy(this,study.type,study.inputs,study.outputs,study.parameters,study.panel);}
}
if(typeof (this.layout.chartType)==(X1Y+G0m+n4Y+f8Y+n4Y+F4Y))this.layout.chartType=b5Y;this.adjustPanelPositions();this.layout.interval=interval;this.layout.periodicity=periodicity;if(managePeriodicity){interval=view.interval;periodicity=view.periodicity;if(isNaN(periodicity))periodicity=M2t.V9N;if(!interval)interval=e8Y;if(M2t.q7N(interval,this.layout.interval)||M2t.K7N(periodicity,this.layout.periodicity)){this.setPeriodicityV2(periodicity,interval);}
else{this.createDataSet();}
}
else{this.createDataSet();}
this.reconstructDrawings(serializedDrawings);this.draw();this.currentlyImporting=y0m;this.updateListeners(e9N);}
;STXChart.prototype.exportLayout=function(){var p8m="panels",s9Y="studies",obj={}
;for(var field in this.layout){if(M2t.u7N(field,s9Y)&&M2t.s7N(field,p8m)){obj[field]=STX.clone(this.layout[field]);}
else if(M2t.D7N(field,s9Y)){obj.studies={}
;}
else if(M2t.x7N(field,p8m)){obj.panels={}
;}
}
for(var panelName in this.panels){var panel=obj.panels[panelName]={}
,p=this.panels[panelName];panel.percent=p.percent;panel.display=p.display;panel.chartName=p.chart.name;}
for(var studyName in this.layout.studies){var study=obj.studies[studyName]={}
,s=this.layout.studies[studyName];study.type=s.type;study.inputs=STX.clone(s.inputs);study.outputs=STX.clone(s.outputs);study.panel=s.panel;study.parameters=STX.clone(s.parameters);}
return obj;}
;STXChart.prototype.doCleanupGaps=function(quotes){if(quotes&&!quotes.length)return quotes;var interval=this.layout.interval;if((M2t.n7N(interval,"month")||M2t.a7N(interval,"week"))&&!this.dontRoll){interval="day";}
if(STXChart.isDailyInterval(interval)&&M2t.w7N(interval,"day"))return quotes;var newQuotes=[],j=0,dt=null,stick=false;for(var i=0;M2t.b8N(i,quotes.length);i++,j++){var thisQuote=quotes[i],bcdt;if(thisQuote.DT)bcdt=new Date(thisQuote.DT.getTime());else bcdt=new Date(STX.strToDateTime(thisQuote.Date).getTime());if(M2t.h8N(dt,null)){dt=bcdt;}
else{for(var zz=0;M2t.P8N(zz,1440);zz++){if(!stick){if(M2t.R8N(interval,"day")){dt=STX.LegacyMarket.nextDay(dt,null,this);}
else{dt=this.getNextInterval(dt,null,this.dataZone);}
}
if(M2t.V8N(interval,"day")){if(M2t.E8N(interval,"day")&&M2t.O8N(bcdt.getDate(),dt.getDate())&&M2t.M8N(bcdt.getMonth(),dt.getMonth())&&M2t.d8N(bcdt.getFullYear(),dt.getFullYear()))break;}
else if(M2t.j8N(bcdt.getTime(),dt.getTime()))break;if(M2t.F8N(bcdt.getTime(),dt.getTime())){stick=true;break;}
else{newQuotes.push({DT:dt,Open:newQuotes[M2t.I8N(j,1)].Close,High:newQuotes[M2t.N8N(j,1)].Close,Low:newQuotes[M2t.m8N(j,1)].Close,Close:newQuotes[M2t.p8N(j,1)].Close,Volume:0,Adj_Close:newQuotes[M2t.X8N(j,1)].Adj_Close}
);stick=false;j++;}
}
}
newQuotes.push(thisQuote);}
return newQuotes;}
;STXChart.Driver=function(stx,quoteFeed,behavior){this.tagalongs={}
;this.stx=stx;this.quoteFeed=quoteFeed;this.behavior=behavior;this.loadingNewChart=y0m;this.intervalTimer=t9Y;this.updatingChart=y0m;if(this.behavior.refreshInterval)this.updateChartLoop();}
;STXChart.Driver.prototype.die=function(){if(this.intervalTimer)window.clearInterval(this.intervalTimer);}
;STXChart.Driver.prototype.attachTagAlongQuoteFeed=function(feed){if(!this.tagalongs[feed.label]){this.tagalongs[feed.label]={label:feed.label,quoteFeed:feed.quoteFeed,behavior:feed.behavior?feed.behavior:{}
,count:M2t.k9N}
;}
this.tagalongs[feed.label].count++;}
;STXChart.Driver.prototype.detachTagAlongQuoteFeed=function(feed){var tagalong=this.tagalongs[feed.label];tagalong.count--;if(!tagalong.count)this.tagalongs[feed.label]=t9Y;}
;STXChart.Driver.prototype.loadDependents=function(params){var field,syms={}
,stx=params.stx,series=stx.chart.series;function getStartDate(symbol){for(var c=M2t.f8N(stx.masterData.length,1);M2t.t0N(c,0);c--){if(stx.masterData[c]&&typeof stx.masterData[c][symbol]!="undefined"){return STX.strToDateTime(stx.masterData[c].Date);}
}
return params.startDate;}
for(field in series){if(!series[field].parameters.data||!series[field].parameters.data.useDefaultQuoteFeed)continue;syms[field]=true;}
for(var p in stx.panels){if(stx.panels[p].studyQuotes){for(var sq in stx.panels[p].studyQuotes)syms[sq]=true;}
}
var arr=[];for(field in syms){var seriesParam=STX.shallowClone(params.originalState);seriesParam.symbol=field;if(seriesParam.update){seriesParam.startDate=getStartDate(field);}
else{if(!seriesParam.startDate)seriesParam.startDate=stx.masterData[0].DT;if(!seriesParam.endDate)seriesParam.endDate=stx.masterData[M2t.L0N(stx.masterData.length,1)].DT;}
arr.push(seriesParam);}
if(!arr.length){stx.createDataSet();stx.draw();return ;}
this.quoteFeed.multiFetch(arr,function(results){for(var i=0;M2t.S0N(i,results.length);i++){var result=results[i];if(!result.dataCallback.error){var field=null;if(stx.chart.series[result.params.symbol]){field=stx.chart.series[result.params.symbol].parameters.field;}
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
;STXChart.Driver.prototype.updateChart=function(){if(this.updatingChart)return ;if(this.loadingNewChart)return ;var howManyToGet=STX.objLength(this.stx.charts),howManyReturned=0,interval=this.stx.layout.interval;function closure(self,params,symbol){return function(dataCallback){howManyReturned++;if(M2t.C0N(symbol,params.chart.symbol)&&M2t.H0N(interval,self.stx.layout.interval)){if(!dataCallback.error){var lastBarAdded=false;if(!params.missingBarsCreated){if(params.chart.masterData.length&&dataCallback.quotes&&M2t.o0N(dataCallback.quotes.length,0)){var lastRecord=params.chart.masterData[M2t.Y0N(params.chart.masterData.length,1)];if((dataCallback.quotes[0].DT&&M2t.l0N(lastRecord.DT,dataCallback.quotes[0].DT))||(dataCallback.quotes[0].Date&&M2t.y0N(lastRecord.Date,dataCallback.quotes[0].Date))){dataCallback.quotes.unshift(lastRecord);lastBarAdded=true;}
}
dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);if(lastBarAdded)dataCallback.quotes.shift();}
self.stx.appendMasterData(dataCallback.quotes,params.chart,{noCreateDataSet:true}
);}
else{self.quoteFeed.announceError(params,dataCallback);}
}
else{return ;}
if(M2t.i0N(howManyReturned,howManyToGet)){self.updatingChart=false;}
self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);stx.createDataSet();stx.draw();}
else{self.loadDependents(params);}
}
;}
for(var chartName in this.stx.charts){var chart=this.stx.charts[chartName];if(!chart.symbol)continue;if(!chart.masterData)continue;var params=this.makeParams(chart.symbol,chart);if(chart.masterData.length)params.startDate=chart.masterData[M2t.J0N(chart.masterData.length,1)].DT;params.update=true;params.originalState=STX.shallowClone(params);this.updatingChart=true;this.quoteFeed.fetch(params,closure(this,params,chart.symbol));}
}
;STXChart.Driver.prototype.updateChartLoop=function(){function closure(self){return function(){self.updateChart();}
;}
this.intervalTimer=window.setInterval(closure(this),M2t.z0N(this.behavior.refreshInterval,n0m));}
;STXChart.Driver.prototype.resetRefreshInterval=function(newInterval){if(this.intervalTimer)window.clearInterval(this.intervalTimer);this.behavior.refreshInterval=newInterval;if(this.behavior.refreshInterval)this.updateChartLoop();}
;STXChart.Driver.prototype.loadAll=function(chart,cb){var self=this,count=M2t.k9N;function closure(){return function(response){var L2Y="eFe",a4Y="ly",r4Y="mp",e0Y="ble",k0Y="Av",n2Y=", ",W3Y="rror";if(response)cb(response);else if(!chart.moreAvailable){cb(t9Y);}
else if(M2t.G0N(count++,S8m)){cb((n4Y+W3Y+n2Y+N2Y+O2Y+B5Y+n4Y+k0Y+g4Y+K9Y+q2Y+g4Y+e0Y+L3Y+R2Y+O2Y+p1Y+L3Y+K9Y+r4Y+q2Y+n4Y+N2Y+Q4Y+p1Y+k6Y+L3Y+U4Y+O2Y+e0m+n4Y+L4Y+a4Y+L3Y+K9Y+R2Y+L3Y+U2N+X1Y+o4Y+L2Y+k6Y));}
else{self.checkLoadMore(chart,r9Y,r9Y,closure());}
}
;}
this.checkLoadMore(chart,r9Y,r9Y,closure());}
;STXChart.Driver.prototype.checkLoadMore=function(chart,forceLoadMore,fetchMaximumBars,cb){if(!chart.moreAvailable){if(cb)cb();return ;}
var interval=this.stx.layout.interval;function closure(self,params){return function(dataCallback){if(M2t.e0N(params.symbol,params.chart.symbol)&&M2t.c0N(interval,self.stx.layout.interval)){if(!params.loadMore)params.chart.loadingMore=false;if(!dataCallback.error){if(!params.missingBarsCreated){dataCallback.quotes.push(params.chart.masterData[0]);dataCallback.quotes=self.stx.doCleanupGaps(dataCallback.quotes);dataCallback.quotes.pop();}
var fullMasterData=dataCallback.quotes.concat(params.chart.masterData);self.stx.setMasterData(fullMasterData,params.chart);self.stx.createDataSet();self.stx.draw();params.chart.moreAvailable=dataCallback.moreAvailable;params.startDate=params.chart.masterData[0].DT;self.executeTagAlongs(params);if(self.behavior.callback){self.behavior.callback(params);}
else{self.loadDependents(params);}
}
else{self.quoteFeed.announceError(params,dataCallback);}
if(cb)cb(null);}
else{return ;}
}
;}
var fetching=false;if(!this.behavior.noLoadMore){if((M2t.U0N(chart.dataSet.length,0)&&M2t.W0N(chart.scroll,chart.dataSet.length))||forceLoadMore){this.stx.cancelSwipe=true;if(!chart.loadingMore){chart.initialScroll=chart.scroll;chart.loadingMore=true;var params=this.makeParams(chart.symbol,chart);params.endDate=chart.masterData[0].DT;params.originalState=STX.shallowClone(params);if(this.stx.fetchMaximumBars[this.stx.layout.aggregationType])fetchMaximumBars=true;if(fetchMaximumBars){params.fetchMaximumBars=true;params.ticks=Math.max(20000,params.ticks);}
this.quoteFeed.fetch(params,closure(this,params));fetching=true;}
}
}
if(chart.loadingMore){chart.initialScroll=chart.scroll;}
if(!fetching&&cb)cb(null);}
;STXChart.Driver.prototype.barsToFetch=function(params){if(params.isSeries)return params.stx.masterData.length;var interval=this.stx.layout.interval,p=params.stx.layout.periodicity;if((M2t.Z0N(interval,"month")||M2t.A4N(interval,"week"))&&!this.stx.dontRoll){p*=(M2t.r4N(interval,"week"))?7:30;}
var bars=M2t.Q4N(params.stx.chart.maxTicks,p);return bars;}
;STXChart.Driver.prototype.makeParams=function(symbol,chart){var P0m="delayed",interval=this.stx.layout.interval,ticks=this.barsToFetch({stx:this.stx}
);if((M2t.B4N(interval,z9N)||M2t.k4N(interval,l6Y))&&!this.stx.dontRoll){interval=e8Y;}
var params=STX.shallowClone(this.behavior);STX.extend(params,{stx:this.stx,symbol:symbol,chart:chart,interval:interval,extended:this.stx.layout.extended,period:M2t.V9N,feed:P0m,ticks:ticks}
,r9Y);if(!isNaN(params.interval)){params.period=params.interval;params.interval=O9Y;}
return params;}
;STXChart.Driver.prototype.newChart=function(params,cb){var stx=this.stx,symbol=params.symbol,interval=stx.layout.interval,chart=params.chart;chart.moreAvailable=false;var qparams=this.makeParams(symbol,chart);STX.extend(qparams,params,true);if(stx.fetchMaximumBars[stx.layout.aggregationType]){qparams.ticks=Math.max(20000,qparams.ticks);qparams.fetchMaximumBars=true;}
function closure(self,qparams){return function(dataCallback){var j2Y="ane";if(M2t.T4N(symbol,qparams.chart.symbol)&&M2t.v4N(interval,stx.layout.interval)){if(!dataCallback.error&&M2t.g4N(dataCallback.error,0)){if(!qparams.missingBarsCreated)dataCallback.quotes=stx.doCleanupGaps(dataCallback.quotes);stx.setMasterData(dataCallback.quotes,qparams.chart);qparams.chart.moreAvailable=dataCallback.moreAvailable;self.loadingNewChart=false;stx.createDataSet();if(params.initializeChart)stx.initializeChart();stx.home({maintainWhitespace:true}
);}
else{self.quoteFeed.announceError(qparams,dataCallback);}
}
else{cb((O2Y+B5Y+G5Y+T9Y+j2Y+F4Y));return ;}
self.loadingNewChart=false;if(cb){cb(dataCallback.error);}
if(qparams.chart.masterData&&qparams.chart.masterData.length)qparams.startDate=qparams.chart.masterData[0].DT;self.executeTagAlongs(qparams);if(self.behavior.callback){self.behavior.callback(qparams);}
else{self.loadDependents(qparams);}
}
;}
this.loadingNewChart=true;qparams.originalState=STX.shallowClone(qparams);this.quoteFeed.fetch(qparams,closure(this,qparams));}
;STXChart.prototype.attachQuoteFeed=function(quoteFeed,behavior){if(!behavior)behavior={}
;if(this.quoteDriver){this.quoteDriver.die();}
this.quoteDriver=new STXChart.Driver(this,quoteFeed,behavior);}
;STXChart.prototype.attachTagAlongQuoteFeed=function(feed){var z4Y="igning",n3Y="ho",q4m="Fe",E0Y="Quot",N6Y="Al",R7m="hT";if(!feed.label){console.log((r0m+p1Y+p1Y+n4Y+N2Y+G5Y+p1Y+L3Y+p1Y+O2Y+L3Y+g4Y+p1Y+p1Y+g4Y+U4Y+R7m+g4Y+W9Y+N6Y+O2Y+y2Y+E0Y+n4Y+q4m+n4Y+F4Y+L3Y+x4m+K9Y+p1Y+n3Y+j3Y+L3Y+g4Y+M4Y+z4Y+L3Y+g4Y+L3Y+q2Y+E3Y+M1Y));return ;}
this.quoteDriver.attachTagAlongQuoteFeed(feed);}
;STXChart.prototype.detachTagAlongQuoteFeed=function(feed){this.quoteDriver.detachTagAlongQuoteFeed(feed);}
;STX.Comparison=function(){}
;G(y0m);STX.Comparison.priceToPercent=function(stx,chart,price){return M2t.q4N(Math.round(((price-STX.Comparison.baseline)/STX.Comparison.baseline*S4m)*D0m),D0m);}
;STX.Comparison.percentToPrice=function(stx,chart,percent){return M2t.K4N(STX.Comparison.baseline,(M2t.V9N+(percent/S4m)));}
;STX.Comparison.stopSort=function(lhs,rhs){return M2t.u4N(lhs,rhs);}
;STX.Comparison.createComparisonSegmentInner=function(stx,chart){if(!chart.isComparison)return false;var fields=[],field;for(field in chart.series){if(chart.series[field].parameters.isComparison){fields.push(field);}
}
var priceFields=["Close","Open","High","Low","iqPrevClose"];chart.dataSegment=[];var firstQuote=null,firstTick=M2t.s4N(chart.dataSet.length,chart.scroll),lastTick=firstTick+chart.maxTicks,stopPointer=0,stops=[],i;for(i=0;M2t.D4N(i,stx.drawingObjects.length);i++){var drawing=stx.drawingObjects[i];if(M2t.x4N(drawing.name,"comparison_stop"))if(M2t.n4N(drawing.tick,firstTick)&&M2t.a4N(drawing.tick,lastTick))stops.push(drawing.tick);}
stops.sort(STX.Comparison.stopSort);var transformsToProcess=chart.maxTicks+3;for(i=0;M2t.w4N(i,transformsToProcess);i++){if(M2t.b3N(i,transformsToProcess))i=-1;position=firstTick+i;if(M2t.h3N(position,chart.dataSet.length)&&M2t.P3N(position,0)){var quote=chart.dataSet[position];if(!firstQuote){firstQuote=STX.clone(quote);}
if(!quote.transform)quote.transform={"cache":{}
,"DT":quote.DT,"Date":quote.Date}
;STX.Comparison.baseline=firstQuote.Close;var j;for(j=0;M2t.R3N(j,priceFields.length);j++){field=priceFields[j];if(quote[field]||M2t.V3N(quote[field],0))quote.transform[field]=M2t.E3N(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
var s=stx.layout.studies;if(s){for(var n in s){var sd=s[n];if(M2t.O3N(stx.panels[sd.panel].name,sd.chart.name))continue;for(field in sd.outputMap){if(quote[field]||M2t.M3N(quote[field],0))quote.transform[field]=M2t.d3N(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
if(sd.referenceOutput&&(quote[sd.referenceOutput+" "+sd.name]||M2t.j3N(quote[sd.referenceOutput+" "+sd.name],0)))quote.transform[sd.referenceOutput+" "+sd.name]=M2t.F3N(Math.round(((quote[sd.referenceOutput+" "+sd.name]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
for(j in stx.plugins){var plugin=stx.plugins[j];if(!plugin.transformOutputs)continue;for(field in plugin.transformOutputs){if(quote[field]||M2t.I3N(quote[field],0))quote.transform[field]=M2t.N3N(Math.round(((quote[field]-STX.Comparison.baseline)/STX.Comparison.baseline*100)*10000),10000);}
}
var createAStop=false;if(stops&&M2t.m3N(stopPointer,stops.length)){if(M2t.p3N(position,stops[stopPointer])){createAStop=true;stopPointer++;}
}
var mouseStop=null;if(stx.activeDrawing&&M2t.X3N(stx.activeDrawing.name,"comparison_stop")){mouseStop=stx.activeDrawing.tick;}
var current;if(createAStop||M2t.f3N(position,mouseStop)){for(j=0;M2t.t6N(j,fields.length);j++){field=fields[j];current=quote[field];firstQuote[field]=M2t.L6N(current,(1+(quote.transform.Close/100)));}
}
for(j=0;M2t.S6N(j,fields.length);j++){field=fields[j];current=quote[field];if(current||M2t.C6N(current,0)){var baseline=firstQuote[field];if(!baseline&&M2t.H6N(baseline,0)){firstQuote[field]=baseline=M2t.o6N(current,(1+(quote.transform.Close/100)));}
quote.transform[field]=M2t.Y6N(Math.round(((current-baseline)/baseline*100)*10000),10000);}
}
chart.dataSegment.push(quote);}
else if(M2t.l6N(position,0)){chart.dataSegment.push(null);}
if(M2t.y6N(i,0))break;}
stx.clearPixelCache();return true;}
;STX.Comparison.createComparisonSegment=function(){for(var chartName in this.charts){var chart=this.charts[chartName];if(chart.isComparison)STX.Comparison.createComparisonSegmentInner(this,chart);}
}
;STX.Comparison.priceFormat=function(stx,panel,price){var e8m=(12.01E2<(2.2E1,141.)?(1.057E3,0x1B6):(118,0x1EA)<=(7.42E2,126)?(14.73E2,"e"):6.25E2<=(1.431E3,12.200E2)?(22.3E1,0.001):(13,0x1BC));if(M2t.i6N(price,t9Y)||typeof price==i9N)return D1Y;var priceTick=panel.yAxis.priceTick;if(stx.internationalizer){if(M2t.J6N(priceTick,M2t.V9N))price=stx.internationalizer.percent0.format(M2t.z6N(price,S4m));else if(M2t.G6N(priceTick,L6Y))price=stx.internationalizer.percent1.format(M2t.e6N(price,S4m));else if(M2t.c6N(priceTick,u9N))price=stx.internationalizer.percent2.format(M2t.U6N(price,S4m));else if(M2t.W6N(priceTick,e8m))price=stx.internationalizer.percent3.format(M2t.Z6N(price,S4m));else price=stx.internationalizer.percent4.format(price);}
else{if(M2t.A1N(priceTick,M2t.V9N))price=price.toFixed(M2t.k9N)+C9Y;else if(M2t.r1N(priceTick,L6Y))price=price.toFixed(M2t.V9N)+C9Y;else if(M2t.Q1N(priceTick,u9N))price=price.toFixed(M2t.B9N)+C9Y;else if(M2t.B1N(priceTick,e8m))price=price.toFixed(M2t.C9N)+C9Y;else price=price.toFixed(M2t.O9N)+C9Y;}
if(M2t.k1N(parseFloat(price),M2t.k9N)&&M2t.T1N(price.charAt(M2t.k9N),Y5Y)){price=price.substring(M2t.V9N);}
return price;}
;STX.Comparison.correlate=function(stx,symbol){var G9Y="ult",b3m="Re";if(!STX.Comparison.requestCorrelation||M2t.v1N(correlationPeriod,0))return ;var correlationPeriod=parseInt($$$(".stxCorrelate .stx-input-field").value,10),corrPanel=stx.panels[STX.Comparison.correlationPanel+" ("+correlationPeriod+")"],inputs={"id":STX.Comparison.correlationPanel+" ("+correlationPeriod+")","Period":correlationPeriod,"Compare To":[]}
,outputs={}
,panelName=null;if(corrPanel){for(var i=0;M2t.g1N(i,stx.layout.studies[corrPanel.name].inputs["Compare To"].length);i++){inputs["Compare To"].push(stx.layout.studies[corrPanel.name].inputs["Compare To"][i]);}
for(var o in stx.layout.studies[corrPanel.name].outputs){outputs[o]=stx.layout.studies[corrPanel.name].outputs[o];}
panelName=corrPanel.name;}
inputs["Compare To"].push(symbol);outputs[(b3m+g5Y+G9Y+L3Y)+symbol]=STX.Comparison.colorSelection;STX.Studies.addStudy(stx,"correl",inputs,outputs,null,panelName);for(var panel in stx.panels){if(M2t.q1N(stx.panels[panel].name.indexOf(STX.Comparison.correlationPanel),0)){var compareArray=stx.layout.studies[stx.panels[panel].name].inputs["Compare To"];for(var ii=0;M2t.K1N(ii,compareArray.length);ii++){if(M2t.u1N(compareArray[ii],symbol)){stx.layout.studies[stx.panels[panel].name].outputs["Result "+symbol]=STX.Comparison.colorSelection;}
}
}
}
}
;STX.Comparison.toggleCorrelate=function(stx){var I1Y=".stxCorrelate .stx-checkbox";STX.Comparison.requestCorrelation=!STX.Comparison.requestCorrelation;var display=$$$(I1Y);if(display){STX.unappendClassName(display,(!STX.Comparison.requestCorrelation).toString());STX.appendClassName(display,STX.Comparison.requestCorrelation.toString());}
}
;STXChart.prototype.setComparison=function(onOff,chart){var M9Y="Segm",W2Y="string";if(!chart)chart=this.chart;if(typeof chart==W2Y)chart=this.charts[chart];if(!chart.isComparison&&onOff){this.setTransform(chart,STX.Comparison.priceToPercent,STX.Comparison.percentToPrice);chart.panel.yAxis.priceFormatter=STX.Comparison.priceFormat;chart.panel.yAxis.whichSet=(F4Y+g4Y+r1Y+M9Y+n4Y+B9Y);}
else if(chart.isComparison&&!onOff){this.unsetTransform(chart);chart.panel.yAxis.priceFormatter=t9Y;chart.panel.yAxis.whichSet=A2Y;}
chart.isComparison=onOff;}
;STX.Comparison.startPlugin=function(){STXChart.prototype.prepend(B8m,STX.Comparison.createComparisonSegment);}
;STX.Comparison.removeSeries=function(stx,field){}
;STX.Studies.calculateCountBackLine=function(stx,sd){var h0Y="L",v7m="CB",quotes=sd.chart.scrubbed,cblLong=null,cblShort=null;for(var i=2;quotes&&M2t.s1N(i,quotes.length);i++){if(!quotes[i])continue;var j,k;if(M2t.D1N(quotes[i-1].High,quotes[i-2].High)){for(j=M2t.x1N(i,2);M2t.n1N(j,1);j--){if(M2t.a1N(quotes[j].Low,quotes[i-1].Low)){for(k=M2t.w1N(j,1);M2t.b5N(k,0);k--){if(M2t.h5N(quotes[k].Low,quotes[j].Low)){cblShort=quotes[k].Low;break;}
}
break;}
}
}
if(M2t.P5N(quotes[i-1].Low,quotes[i-2].Low)){for(j=M2t.R5N(i,2);M2t.V5N(j,1);j--){if(M2t.E5N(quotes[j].High,quotes[i-1].High)){for(k=M2t.O5N(j,1);M2t.M5N(k,0);k--){if(M2t.d5N(quotes[k].High,quotes[j].High)){cblLong=quotes[k].High;break;}
}
break;}
}
}
if(cblLong&&M2t.j5N(quotes[i].Close,cblLong)){quotes[i][(v7m+h0Y+L3Y+h0Y+O2Y+y2Y+L3Y)+sd.name]=1;cblLong=null;}
if(cblShort&&M2t.F5N(quotes[i].Close,cblShort)){quotes[i]["CBL Short "+sd.name]=1;cblShort=null;}
}
}
;return _exports;}
{if(typeof define===Y8Y&&define.amd){define(["stxTimeZoneData","stxThirdParty","stx"],function(_stxTimeZoneData,_stxThirdParty,_stx){return _stxKernel_js(_stxThirdParty,_stx);}
);}
else{var D=function(U){_stxThirdParty=U.STXThirdParty;}
;var _stxThirdParty={}
;if(typeof (window.STXThirdParty)!=i9N)D(window);var _stx={"STX":window.STX,"STXChart":window.STXChart,"$$":window.$$,"$$$":window.$$$}
;_stxKernel_js(_stxThirdParty,_stx);}
}
}
)();