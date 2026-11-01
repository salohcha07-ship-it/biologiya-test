// RASMLI SAVOLLAR (SVG chizmalar bilan) - Biologiya Milliy Sertifikat
// Har bir savolda: topic, image (SVG matn), question, options, answer (0-3 indeks), explanation

// Chizmalar ilmiy jihatdan qayta ko'rib chiqildi va yangilandi (yurak, nefron, ko'z, gul, DNK, hazm, barg, miya, nafas a'zolari, hujayra)
// ===== YORDAMCHI FUNKSIYALAR =====
const _eduSvg = (body) => `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;max-width:100%;height:auto" role="img" aria-label="Biologiya o‘quv chizmasi"><defs><linearGradient id="paper" x2="0" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#f1f5f9"/></linearGradient><linearGradient id="tissue" x2="1" y2="1"><stop stop-color="#fda4af"/><stop offset="1" stop-color="#be4565"/></linearGradient></defs><rect width="600" height="400" rx="14" fill="url(#paper)"/><g stroke-linecap="round" stroke-linejoin="round" font-family="Arial,sans-serif">${body}</g></svg>`;
const _tag = (n,x,y,tx,ty) => `<path d="M${x} ${y} L${tx} ${ty}" stroke="#334155" stroke-width="2.2" fill="none"/><circle cx="${tx}" cy="${ty}" r="4" fill="#334155"/><circle cx="${x}" cy="${y}" r="17" fill="#5b21b6" stroke="#fff" stroke-width="3"/><text x="${x}" y="${y+6}" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">${n}</text>`;
// tomir: oq hoshiya + rangli ichki chiziq
const _v = (d,c,w) => `<path d="${d}" stroke="#fff" stroke-width="${w+5}" fill="none" stroke-linecap="round"/><path d="${d}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round"/>`;
// beshburchak (dezoksiriboza)
const _pent = (cx,cy,d) => `<polygon points="${cx},${cy-18} ${cx+17*d},${cy-6} ${cx+10.5*d},${cy+14.5} ${cx-10.5*d},${cy+14.5} ${cx-17*d},${cy-6}" fill="#86efac" stroke="#166534" stroke-width="3"/>`;

const RASMLAR = {};
Object.assign(RASMLAR, {
 // ---------- HAYVON HUJAYRASI ----------
 hujayra:_eduSvg(`
<ellipse cx="300" cy="205" rx="245" ry="155" fill="#fff7ed" stroke="#b45309" stroke-width="7"/>
<g fill="none" stroke="#94a3b8" stroke-width="5"><path d="M215 288 q25 14 50 0 t50 0 t50 0"/><path d="M225 306 q25 12 50 0 t50 0 t40 0"/></g>
<g fill="#475569"><circle cx="240" cy="291" r="2.8"/><circle cx="265" cy="285" r="2.8"/><circle cx="290" cy="277" r="2.8"/><circle cx="315" cy="285" r="2.8"/><circle cx="340" cy="291" r="2.8"/><circle cx="365" cy="285" r="2.8"/><circle cx="250" cy="308" r="2.8"/><circle cx="275" cy="302" r="2.8"/><circle cx="300" cy="294" r="2.8"/><circle cx="325" cy="302" r="2.8"/><circle cx="345" cy="308" r="2.8"/></g>
<circle cx="300" cy="190" r="62" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="5"/><circle cx="300" cy="190" r="55" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
<path d="M262 170 q10 -12 20 0 t20 0 t20 0 M262 212 q10 12 20 0 t20 0 t20 0" stroke="#2563eb" stroke-width="2.5" fill="none"/>
<circle cx="300" cy="190" r="17" fill="#1e3a8a"/>
<g fill="#fdba74" stroke="#9a3412" stroke-width="4"><ellipse cx="150" cy="170" rx="46" ry="24"/><ellipse cx="435" cy="290" rx="46" ry="24"/></g>
<g fill="#fed7aa" stroke="#9a3412" stroke-width="2"><ellipse cx="150" cy="170" rx="38" ry="16"/><ellipse cx="435" cy="290" rx="38" ry="16"/></g>
<g stroke="#9a3412" stroke-width="2.5" fill="none"><path d="M128 155 L128 172 M142 185 L142 168 M156 155 L156 172 M170 185 L170 168"/><path d="M413 275 L413 292 M427 305 L427 288 M441 275 L441 292 M455 305 L455 288"/></g>
${Array.from({length:5},(_,i)=>`<path d="M395 ${150+i*13} Q440 ${130+i*13} 485 ${150+i*13}" stroke="#15803d" stroke-width="10" fill="none"/><path d="M395 ${150+i*13} Q440 ${130+i*13} 485 ${150+i*13}" stroke="#86efac" stroke-width="5" fill="none"/>`).join('')}
<g fill="#bbf7d0" stroke="#15803d" stroke-width="2.5"><circle cx="383" cy="160" r="6"/><circle cx="381" cy="190" r="6"/><circle cx="498" cy="168" r="6"/><circle cx="500" cy="196" r="6"/></g>
<circle cx="160" cy="290" r="17" fill="#ddd6fe" stroke="#6d28d9" stroke-width="4"/>
<g fill="#5b21b6"><circle cx="153" cy="285" r="2.8"/><circle cx="166" cy="288" r="2.8"/><circle cx="158" cy="297" r="2.8"/><circle cx="168" cy="297" r="2.8"/></g>
<circle cx="205" cy="98" r="11" fill="#ddd6fe" stroke="#6d28d9" stroke-width="3"/>
<text x="300" y="388" text-anchor="middle" font-size="16" fill="#64748b">Hayvon hujayrasi</text>
${_tag(1,300,28,300,130)}${_tag(2,70,100,111,160)}${_tag(3,520,70,470,144)}${_tag(4,95,345,147,301)}${_tag(5,25,205,57,205)}`),

 // ---------- YURAK (old ko'rinish) ----------
 yurak:_eduSvg(`
<path d="M290 130 C250 80 175 95 165 165 C145 255 230 325 300 365 C370 325 455 255 435 165 C425 95 350 80 310 130 L300 145Z" fill="url(#tissue)" stroke="#9f1239" stroke-width="7"/>
<path d="M300 150 L300 345" stroke="#7f1d1d" stroke-width="7"/>
<path d="M185 180 Q235 140 285 190 L285 270 Q235 285 195 245Z" fill="#93c5fd" stroke="#1d4ed8" stroke-width="5"/>
<path d="M315 190 Q365 140 415 180 L405 245 Q365 285 315 270Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="5"/>
<path d="M195 255 Q240 235 285 280 L285 345 Q225 325 195 255Z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="5"/>
<path d="M315 280 Q365 235 405 255 Q375 330 315 345Z" fill="#f87171" stroke="#b91c1c" stroke-width="5"/>
<path d="M200 254 Q238 244 270 264" stroke="#475569" stroke-width="5" fill="none"/>
<g fill="#e2e8f0" stroke="#475569" stroke-width="2.5"><path d="M204 258 L222 254 L214 277Z"/><path d="M226 254 L244 257 L236 280Z"/><path d="M248 259 L266 266 L258 286Z"/></g>
<path d="M334 270 Q366 246 404 256" stroke="#475569" stroke-width="5" fill="none"/>
<g fill="#e2e8f0" stroke="#475569" stroke-width="2.5"><path d="M338 264 L364 252 L358 285Z"/><path d="M368 252 L398 258 L384 291Z"/></g>
${_v("M556 155 C515 155 455 172 415 193",'#dc2626',10)}${_v("M556 238 C515 236 455 228 410 224",'#dc2626',10)}
${_v("M192 28 L194 180",'#2563eb',16)}
${_v("M280 290 L280 130",'#2563eb',16)}${_v("M280 130 C268 106 252 96 230 92",'#2563eb',12)}${_v("M280 130 C292 108 330 98 368 106",'#2563eb',12)}
${_v("M322 290 L322 128 C322 74 372 52 408 64 C436 74 446 100 446 138",'#dc2626',18)}
<polygon points="436,136 456,136 446,158" fill="#dc2626"/>
<g font-size="14" fill="#334155"><circle cx="26" cy="338" r="7" fill="#2563eb"/><text x="40" y="343">venoz qon</text><circle cx="26" cy="362" r="7" fill="#dc2626"/><text x="40" y="367">arterial qon</text></g>
<text x="300" y="392" text-anchor="middle" font-size="12" fill="#64748b">Old tomondan ko‘rinishi: rasmning chap tomoni — yurakning o‘ng yarmi</text>
${_tag(1,95,200,220,215)}${_tag(2,505,290,380,225)}${_tag(3,95,290,230,305)}${_tag(4,505,345,370,310)}${_tag(5,500,40,412,56)}${_tag(6,105,70,188,80)}${_tag(7,250,28,280,190)}${_tag(8,565,95,500,160)}`),

 // ---------- NEFRON ----------
 nefron:_eduSvg(`
<path d="M55 18 L88 64" stroke="#ef4444" stroke-width="14"/><path d="M125 64 L152 20" stroke="#f87171" stroke-width="8"/>
<circle cx="105" cy="110" r="55" fill="#fff1f2" stroke="#be123c" stroke-width="7"/><circle cx="105" cy="110" r="46" fill="none" stroke="#fb7185" stroke-width="2"/>
<circle cx="105" cy="110" r="34" fill="#fecaca"/>
<g stroke="#dc2626" stroke-width="5" fill="none"><path d="M88 66 C80 84 78 100 88 112"/><path d="M122 66 C130 84 132 100 122 112"/><path d="M82 92 C95 78 120 80 130 96 C138 112 118 134 98 130 C80 126 76 108 90 98 C102 90 118 96 118 108 C118 120 100 122 96 112"/></g>
<path d="M148 148 C185 150 205 135 225 150 C250 168 230 195 205 200 C180 206 190 235 220 235 C250 235 262 255 240 270" fill="none" stroke="#f59e0b" stroke-width="14"/>
<path d="M240 270 L240 345" stroke="#0ea5e9" stroke-width="7" fill="none"/>
<path d="M240 345 Q262 372 284 345" stroke="#0ea5e9" stroke-width="9" fill="none"/>
<path d="M284 345 L284 275" stroke="#0369a1" stroke-width="12" fill="none"/>
<path d="M284 275 C284 245 310 238 325 255 C345 278 375 262 370 238 C365 212 335 205 345 180 C355 158 395 165 410 170 L440 170" fill="none" stroke="#84cc16" stroke-width="14"/>
<path d="M450 40 L450 325" stroke="#8b5cf6" stroke-width="18"/><polygon points="435,320 465,320 450,352" fill="#8b5cf6"/>
${_tag(1,35,190,66,149)}${_tag(6,205,50,125,100)}${_tag(2,300,95,225,152)}${_tag(3,150,355,240,335)}${_tag(4,400,300,370,238)}${_tag(5,520,300,456,290)}`),

 // ---------- KO'Z ----------
 koz:_eduSvg(`
<circle cx="340" cy="200" r="133" fill="#f0fdfa"/>
<path d="M222 124 Q150 200 222 276 L262 262 L262 138Z" fill="#dbeafe"/>
<path d="M222 124 A140 140 0 1 1 222 276" fill="none" stroke="#94a3b8" stroke-width="12"/>
<path d="M228 128 A133 133 0 1 1 228 272" fill="none" stroke="#7c2d12" stroke-width="4"/>
<path d="M265 98 A127 127 0 1 1 265 302" fill="none" stroke="#e11d48" stroke-width="6"/>
<path d="M222 124 Q150 200 222 276" stroke="#38bdf8" stroke-width="9" fill="none"/>
<path d="M236 128 L262 136 L268 158 L244 150Z" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2.5"/><path d="M236 272 L262 264 L268 242 L244 250Z" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2.5"/>
<path d="M262 150 L286 158 M262 250 L286 242" stroke="#64748b" stroke-width="1.8"/>
<path d="M258 140 L258 172" stroke="#0f766e" stroke-width="12"/><path d="M258 228 L258 260" stroke="#0f766e" stroke-width="12"/>
<ellipse cx="290" cy="200" rx="24" ry="50" fill="#bfdbfe" stroke="#2563eb" stroke-width="4"/>
<path d="M470 197 L562 185 L562 245 L470 233Z" fill="#fde047" stroke="#a16207" stroke-width="3"/>
<ellipse cx="468" cy="216" rx="6" ry="14" fill="#fef9c3" stroke="#a16207" stroke-width="2"/>
${_tag(1,70,100,195,162)}${_tag(2,255,38,258,150)}${_tag(3,292,372,292,238)}${_tag(4,420,375,380,240)}${_tag(5,500,50,422,103)}${_tag(6,545,300,471,218)}`),

 // ---------- GUL (bo'ylama kesim) ----------
 gul:_eduSvg(`
<path d="M300 332 L300 398" stroke="#15803d" stroke-width="14"/>
<path d="M285 318 C250 335 215 320 195 290 C230 290 260 300 285 318Z" fill="#4ade80" stroke="#166534" stroke-width="4"/>
<path d="M315 318 C350 335 385 320 405 290 C370 290 340 300 315 318Z" fill="#4ade80" stroke="#166534" stroke-width="4"/>
<path d="M282 302 C225 270 175 190 185 120 C230 150 290 230 282 302Z" fill="#f9a8d4" stroke="#be185d" stroke-width="4"/>
<path d="M318 302 C375 270 425 190 415 120 C370 150 310 230 318 302Z" fill="#f9a8d4" stroke="#be185d" stroke-width="4"/>
<ellipse cx="300" cy="318" rx="34" ry="12" fill="#ca8a04" stroke="#854d0e" stroke-width="3"/>
<path d="M276 312 C262 260 258 200 262 150" stroke="#15803d" stroke-width="5" fill="none"/><path d="M324 312 C338 260 342 200 338 150" stroke="#15803d" stroke-width="5" fill="none"/>
<ellipse cx="262" cy="138" rx="11" ry="20" fill="#fbbf24" stroke="#a16207" stroke-width="3"/><ellipse cx="338" cy="138" rx="11" ry="20" fill="#fbbf24" stroke="#a16207" stroke-width="3"/>
<g fill="#fde68a"><circle cx="258" cy="132" r="2.5"/><circle cx="266" cy="141" r="2.5"/><circle cx="334" cy="132" r="2.5"/><circle cx="342" cy="141" r="2.5"/></g>
<path d="M300 256 L300 90" stroke="#16a34a" stroke-width="8"/>
<ellipse cx="300" cy="285" rx="28" ry="33" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>
<g fill="#fef3c7" stroke="#a16207" stroke-width="2"><ellipse cx="289" cy="282" rx="7" ry="9"/><ellipse cx="311" cy="282" rx="7" ry="9"/><ellipse cx="300" cy="300" rx="7" ry="9"/></g>
<ellipse cx="300" cy="78" rx="16" ry="11" fill="#be123c" stroke="#881337" stroke-width="3"/>
${_tag(1,400,40,313,75)}${_tag(2,500,300,328,288)}${_tag(3,470,100,348,133)}${_tag(4,540,200,392,190)}${_tag(5,110,345,240,307)}${_tag(6,110,200,261,197)}`)
});
Object.assign(RASMLAR, {
 // ---------- DNK (nukleotidlar va juftlashish) ----------
 dnk:_eduSvg(`
<g stroke="#94a3b8" stroke-width="9"><path d="M170 28 L170 372"/><path d="M430 28 L430 372"/></g>
${[45,165,285].map(y=>`<circle cx="170" cy="${y}" r="15" fill="#fbbf24" stroke="#92400e" stroke-width="3"/><circle cx="430" cy="${y}" r="15" fill="#fbbf24" stroke="#92400e" stroke-width="3"/>`).join('')}
${[105,225,345].map(y=>_pent(170,y,1)+_pent(430,y,-1)).join('')}
${[[105,'A','#3b82f6','T','#ef4444',2],[225,'G','#eab308','C','#a855f7',3],[345,'T','#ef4444','A','#3b82f6',2]].map(([y,l,lc,r,rc,n])=>`<rect x="190" y="${y-11}" width="90" height="22" rx="5" fill="${lc}"/><rect x="320" y="${y-11}" width="90" height="22" rx="5" fill="${rc}"/><text x="235" y="${y+6}" text-anchor="middle" font-size="17" font-weight="700" fill="#fff">${l}</text><text x="365" y="${y+6}" text-anchor="middle" font-size="17" font-weight="700" fill="#fff">${r}</text><path d="${n===2?`M280 ${y-5} H320 M280 ${y+5} H320`:`M280 ${y-7} H320 M280 ${y} H320 M280 ${y+7} H320`}" stroke="#0f172a" stroke-width="3" stroke-dasharray="5 4" fill="none"/>`).join('')}
${_tag(1,70,45,154,45)}${_tag(2,70,118,156,108)}${_tag(3,235,380,235,355)}${_tag(4,300,28,300,100)}`),

 // ---------- HAZM QILISH A'ZOLARI ----------
 hazm:_eduSvg(`
<path d="M300 8 L300 74" stroke="#eab08b" stroke-width="20"/>
<path d="M236 226 C275 214 335 216 385 224 C415 228 438 218 452 210 C460 220 454 238 434 244 C392 256 305 254 255 246 C238 242 230 234 236 226Z" fill="#fde047" stroke="#a16207" stroke-width="4"/>
<path d="M300 70 C320 48 405 52 428 100 C452 150 438 200 392 206 C355 211 318 206 298 194 C328 176 346 128 322 98 C312 85 303 82 300 70Z" fill="#fda4af" stroke="#be123c" stroke-width="5"/>
<path d="M105 80 C135 52 215 50 285 80 C280 125 262 165 225 178 C165 190 110 150 105 80Z" fill="#a16207" stroke="#78350f" stroke-width="5"/>
<path d="M222 178 C205 182 200 205 212 215 C226 222 240 206 236 188Z" fill="#22c55e" stroke="#166534" stroke-width="3"/>
<path d="M195 372 L195 272 L455 272 L455 360 Q455 384 428 384 Q404 384 400 372" fill="none" stroke="#65a30d" stroke-width="20" stroke-linejoin="round"/>
<path d="M195 372 L195 272 L455 272 L455 360 Q455 384 428 384 Q404 384 400 372" fill="none" stroke="#d9f99d" stroke-width="20" stroke-linecap="butt" stroke-dasharray="3 13"/>
<path d="M298 190 C262 198 232 208 228 232 C226 252 240 262 256 262 L244 283 L234 296" fill="none" stroke="#fb923c" stroke-width="14"/>
<path d="M232 298 H410 q18 0 18 9 t-18 9 H240 q-18 0 -18 9 t18 9 H410 q18 0 18 9 t-18 9 H250" fill="none" stroke="#fb923c" stroke-width="12"/>
${_tag(1,225,28,295,32)}${_tag(2,520,110,420,118)}${_tag(3,60,100,135,100)}${_tag(4,520,240,425,232)}${_tag(5,300,383,300,352)}${_tag(6,105,330,190,330)}`),

 // ---------- BARG KESIMI ----------
 barg:_eduSvg(`
<rect x="40" y="194" width="520" height="112" fill="#f0fdf4"/>
<rect x="40" y="38" width="520" height="9" fill="#facc15" stroke="#a16207" stroke-width="2"/>
${Array.from({length:18},(_,i)=>`<rect x="${42+i*28.6}" y="49" width="27" height="38" rx="3" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>`).join('')}
${Array.from({length:19},(_,i)=>{const x=44+i*27;return `<rect x="${x}" y="92" width="23" height="98" rx="10" fill="#86efac" stroke="#166534" stroke-width="2"/><circle cx="${x+6}" cy="106" r="3.5" fill="#15803d"/><circle cx="${x+17}" cy="128" r="3.5" fill="#15803d"/><circle cx="${x+6}" cy="150" r="3.5" fill="#15803d"/><circle cx="${x+17}" cy="172" r="3.5" fill="#15803d"/>`}).join('')}
${[0,1,2].flatMap(r=>Array.from({length:12},(_,j)=>({x:(r===1?101:80)+j*42,y:222+r*30}))).filter(c=>c.x<545&&!(c.x>205&&c.x<315&&c.y<290)&&!(Math.abs(c.x-413)<48&&c.y>265)).map(c=>`<ellipse cx="${c.x}" cy="${c.y}" rx="17" ry="14" fill="#bbf7d0" stroke="#166534" stroke-width="2"/><circle cx="${c.x-4}" cy="${c.y-2}" r="3" fill="#15803d"/><circle cx="${c.x+5}" cy="${c.y+4}" r="3" fill="#15803d"/>`).join('')}
<ellipse cx="260" cy="246" rx="48" ry="42" fill="#f0fdf4" stroke="#15803d" stroke-width="3"/>
<g fill="#7dd3fc" stroke="#0369a1" stroke-width="2.5"><circle cx="240" cy="230" r="9"/><circle cx="260" cy="224" r="9"/><circle cx="280" cy="230" r="9"/></g>
<g fill="#fdba74" stroke="#c2410c" stroke-width="2"><circle cx="240" cy="256" r="6"/><circle cx="256" cy="262" r="6"/><circle cx="272" cy="262" r="6"/><circle cx="284" cy="256" r="6"/><circle cx="262" cy="274" r="6"/></g>
${Array.from({length:18},(_,i)=>i).filter(i=>i!==12&&i!==13).map(i=>`<rect x="${42+i*28.6}" y="306" width="27" height="38" rx="3" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>`).join('')}
<ellipse cx="401" cy="325" rx="8" ry="18" fill="#4ade80" stroke="#166534" stroke-width="2.5"/><ellipse cx="425" cy="325" rx="8" ry="18" fill="#4ade80" stroke="#166534" stroke-width="2.5"/>
<circle cx="401" cy="323" r="2.5" fill="#15803d"/><circle cx="425" cy="327" r="2.5" fill="#15803d"/>
<rect x="40" y="344" width="369" height="5" fill="#fde68a" stroke="#a16207" stroke-width="1.5"/><rect x="417" y="344" width="143" height="5" fill="#fde68a" stroke="#a16207" stroke-width="1.5"/>
${_tag(1,22,20,62,42)}${_tag(2,22,68,58,68)}${_tag(3,22,140,56,140)}${_tag(4,22,222,72,222)}${_tag(5,470,378,426,332)}${_tag(6,545,200,288,228)}${_tag(7,262,382,262,274)}`),

 // ---------- BOSH MIYA (yon ko'rinish) ----------
 miya:_eduSvg(`
<ellipse cx="420" cy="283" rx="64" ry="38" fill="#fbcfe8" stroke="#9d174d" stroke-width="5"/>
<g stroke="#be567c" stroke-width="3" fill="none"><path d="M375 270 Q420 262 465 270"/><path d="M370 283 Q420 275 470 283"/><path d="M375 296 Q420 288 465 296"/><path d="M385 308 Q420 301 455 308"/></g>
<path d="M312 262 L350 262 L352 304 L310 304Z" fill="#fb923c" stroke="#9a3412" stroke-width="4"/>
<path d="M302 304 L360 304 Q368 322 360 340 L302 340 Q294 322 302 304Z" fill="#f59e0b" stroke="#92400e" stroke-width="4"/>
<path d="M308 340 L356 340 L346 384 L318 384Z" fill="#c2410c" stroke="#7c2d12" stroke-width="4"/>
<path d="M320 384 L344 384 L344 400 L320 400Z" fill="#cbd5e1" stroke="#64748b" stroke-width="3"/>
<g transform="translate(0,-20)">
<path d="M100 170 C70 90 145 35 230 55 C285 25 385 55 420 115 C470 125 495 200 450 245 C425 290 355 300 300 275 C240 315 145 280 130 235 C90 230 80 200 100 170Z" fill="#f9b4c7" stroke="#9d174d" stroke-width="7"/>
<g fill="none" stroke="#be567c" stroke-width="5"><path d="M130 125 q30 -40 65 0 t65 0 t65 0 t65 0 M115 170 q35 -35 70 0 t70 0 t70 0 t70 0 M145 215 q30 -30 60 0 t60 0 t60 0"/></g>
</g>
<text x="586" y="392" text-anchor="end" font-size="13" fill="#64748b">Yon ko‘rinish: chapda — old</text>
${_tag(1,70,40,175,105)}${_tag(2,540,330,470,300)}${_tag(3,190,300,316,285)}${_tag(4,190,345,300,322)}${_tag(5,190,382,314,362)}`),

 // ---------- NAFAS A'ZOLARI ----------
 opka:_eduSvg(`
<path d="M262 112 C190 105 125 175 122 265 C120 325 168 350 225 340 C270 332 288 300 285 245 C283 178 285 118 262 112Z" fill="#fda4af" stroke="#be123c" stroke-width="6"/>
<path d="M338 112 C410 105 475 175 478 265 C480 325 432 350 375 340 C338 333 325 315 330 296 C312 285 312 250 314 222 C315 160 318 118 338 112Z" fill="#fda4af" stroke="#be123c" stroke-width="6"/>
<path d="M300 160 L262 200 M300 160 L340 205" stroke="#fb7185" stroke-width="14" fill="none"/>
<g stroke="#dc2626" stroke-width="6" fill="none"><path d="M262 200 L225 235 L185 285 M262 200 L250 250 L240 305 M225 235 L170 225"/><path d="M340 205 L385 240 L425 285 M340 205 L352 258 L358 294 M385 240 L440 225"/></g>
<g fill="#fff" stroke="#dc2626" stroke-width="2.5"><circle cx="185" cy="285" r="6"/><circle cx="240" cy="305" r="6"/><circle cx="170" cy="225" r="6"/><circle cx="425" cy="285" r="6"/><circle cx="358" cy="294" r="6"/><circle cx="440" cy="225" r="6"/></g>
<path d="M0 352 L70 350 Q300 280 530 350 L600 352 L600 400 L0 400Z" fill="#f1f5f9"/>
<path d="M70 350 Q300 280 530 350" stroke="#b45309" stroke-width="16" fill="none"/>
<rect x="291" y="70" width="18" height="92" fill="#fee2e2"/>
${[78,90,102,114,126,138,150].map(y=>`<rect x="286" y="${y}" width="28" height="8" rx="3" fill="#f87171" stroke="#b91c1c" stroke-width="1.5"/>`).join('')}
<path d="M276 20 L324 20 L318 66 L282 66Z" fill="#fde68a" stroke="#b45309" stroke-width="4"/>
<path d="M288 20 Q300 2 312 20Z" fill="#fcd34d" stroke="#b45309" stroke-width="2"/>
<path d="M286 46 L298 54 M314 46 L302 54" stroke="#92400e" stroke-width="3" fill="none"/>
<path d="M440 225 L490 140" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 4"/>
<circle cx="530" cy="90" r="58" fill="#fff" stroke="#94a3b8" stroke-width="3" stroke-dasharray="6 5"/>
${[[508,76],[550,72],[530,112]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="20" fill="#ffe4e6" stroke="#dc2626" stroke-width="3"/><circle cx="${x}" cy="${y}" r="26" fill="none" stroke="#2563eb" stroke-width="3" stroke-dasharray="5 4"/>`).join('')}
${_tag(1,150,40,281,45)}${_tag(2,150,118,288,116)}${_tag(3,50,215,272,190)}${_tag(4,565,205,536,131)}${_tag(5,60,385,136,333)}${_tag(6,555,320,455,300)}`)
});
Object.assign(RASMLAR, {
 // ---------- NEYRON ----------
 neyron:_eduSvg(`<g stroke="#64748b" stroke-width="9" fill="none"><path d="M155 195 L85 115 L35 85 M85 115 L65 45 M155 195 L70 215 L25 260 M70 215 L45 300 M155 195 L110 285 M155 195 L225 195"/></g><circle cx="155" cy="195" r="58" fill="#fde68a" stroke="#a16207" stroke-width="6"/><circle cx="155" cy="195" r="20" fill="#92400e"/><path d="M210 195 L520 195" stroke="#475569" stroke-width="12"/><g fill="#fbbf24" stroke="#c2410c" stroke-width="4"><rect x="250" y="170" width="65" height="50" rx="22"/><rect x="335" y="170" width="65" height="50" rx="22"/><rect x="420" y="170" width="65" height="50" rx="22"/></g><g stroke="#475569" stroke-width="7" fill="none"><path d="M520 195 L565 145 M520 195 L575 195 M520 195 L565 245"/></g>${_tag(1,35,30,60,100)}${_tag(2,150,335,155,255)}${_tag(3,220,90,225,190)}${_tag(4,360,90,365,170)}${_tag(5,405,290,325,195)}${_tag(6,560,90,555,150)}`)
});

const rasmliSavollar = [
  // ===== HUJAYRA =====
  { topic: "Hujayra", image: RASMLAR.hujayra,
    question: "Rasmda 2-raqam bilan ko'rsatilgan organoidning asosiy vazifasi nima?",
    options: ["Oqsil sintezi", "Organik moddalarni oksidlab, ATF sintez qilish", "Fotosintez jarayonini amalga oshirish", "Hujayra ichida moddalarni hazm qilish"],
    answer: 1, explanation: "2 - mitoxondriya: kislorodli nafas olishda ATF hosil qiladi (hujayraning 'energiya stansiyasi')." },
  { topic: "Hujayra", image: RASMLAR.hujayra,
    question: "1-raqam bilan ko'rsatilgan tuzilmada nima joylashgan?",
    options: ["Lizosomalar", "Fotosintetik pigmentlar", "Xromatin shaklidagi DNK", "Hujayra shirasi"],
    answer: 2, explanation: "1 - yadro: unda xromatin (DNK + oqsil) va yadrocha bor; irsiy axborot shu yerda saqlanadi." },
  { topic: "Hujayra", image: RASMLAR.hujayra,
    question: "3-raqam bilan ko'rsatilgan organoid qanday vazifani bajaradi?",
    options: ["Fermentlar yordamida moddalarni parchalaydi", "ATF sintez qiladi", "Ribosomalarni hosil qiladi", "Moddalarni to'playdi, o'zgartiradi va hujayradan chiqaradi"],
    answer: 3, explanation: "3 - Golji apparati: moddalarni to'plash, o'zgartirish, pufakchalarga o'rab chiqarish, lizosoma hosil qilish." },
  { topic: "Hujayra", image: RASMLAR.hujayra,
    question: "4-raqam bilan ko'rsatilgan organoidning o'ziga xosligi nimada?",
    options: ["Gidrolitik fermentlarga ega, hujayra ichi hazmini bajaradi", "Xlorofill saqlaydi", "DNK replikatsiyasini amalga oshiradi", "Oqsillarni sintez qiladi"],
    answer: 0, explanation: "4 - lizosoma: bir membranali, gidrolitik fermentlar saqlaydi (hujayra ichi hazmi, eskirgan organoidlarni yo'qotish)." },
  { topic: "Hujayra", image: RASMLAR.hujayra,
    question: "5-raqam bilan ko'rsatilgan tuzilmaning asosiy xossasi qaysi?",
    options: ["Hujayraga qattiq shakl beruvchi sellyulozali qatlam", "Moddalarni tanlab o'tkazadi (yarim o'tkazuvchan)", "Irsiy axborotni saqlaydi", "Energiya hosil qiladi"],
    answer: 1, explanation: "5 - plazmatik membrana: lipid qo'sh qavat va oqsillardan iborat, moddalarni tanlab o'tkazadi." },

  // ===== YURAK =====
  { topic: "Yurak", image: RASMLAR.yurak,
    question: "4-raqam bilan ko'rsatilgan bo'limning devori eng qalin. Buning sababi nima?",
    options: ["U kichik qon aylanish doirasiga qon haydaydi", "U qonni o'pkadan qabul qiladi", "Unda klapanlar bo'lmaydi", "U katta qon aylanish doirasiga qon haydab, katta qarshilikni yengadi"],
    answer: 3, explanation: "4 - chap qorincha: aorta orqali butun tanaga qon haydaydi, shuning uchun mushak devori eng qalin." },
  { topic: "Yurak", image: RASMLAR.yurak,
    question: "5-raqam bilan ko'rsatilgan tomir orqali qanday qon oqadi?",
    options: ["Arterial qon, to'qimalarga", "Venoz qon, o'pkaga", "Venoz qon, yurakka", "Arterial qon, yurakka"],
    answer: 0, explanation: "5 - aorta: chap qorinchadan chiqib, kislorodga boy arterial qonni katta doira bo'ylab to'qimalarga olib boradi." },
  { topic: "Yurak", image: RASMLAR.yurak,
    question: "7-raqam bilan ko'rsatilgan tomir qaysi qorinchadan chiqadi va qanday qon olib boradi?",
    options: ["Chap qorinchadan, arterial qon", "O'ng qorinchadan, venoz qon", "O'ng qorinchadan, arterial qon", "Chap qorinchadan, venoz qon"],
    answer: 1, explanation: "7 - o'pka arteriyasi: o'ng qorinchadan chiqib, venoz qonni o'pkaga olib boradi (kichik doira boshi). Arteriyada venoz qon oqadigan yagona tomir." },
  { topic: "Yurak", image: RASMLAR.yurak,
    question: "1 va 3 raqamli bo'limlar orasidagi klapan qanday nomlanadi?",
    options: ["Ikki tabaqali", "Uch tabaqali", "Yarim oysimon", "Aorta klapani"],
    answer: 1, explanation: "O'ng bo'lmacha va o'ng qorincha orasida uch tabaqali klapan, chap tomonda ikki tabaqali (mitral) klapan joylashgan." },
  { topic: "Yurak", image: RASMLAR.yurak,
    question: "6-raqam bilan ko'rsatilgan tomir qonni qaysi bo'limga keltiradi?",
    options: ["Chap bo'lmachaga", "O'ng qorinchaga", "O'ng bo'lmachaga", "Chap qorinchaga"],
    answer: 2, explanation: "6 - yuqori kovak vena: tananing yuqori qismidan venoz qonni o'ng bo'lmachaga keltiradi (katta doira oxiri)." },
  { topic: "Yurak", image: RASMLAR.yurak,
    question: "8-raqam bilan ko'rsatilgan tomirlarda qanday qon oqadi va qayerga boradi?",
    options: ["Venoz qon, o'pkadan chap bo'lmachaga", "Arterial qon, o'ng bo'lmachadan o'pkaga", "Arterial qon, o'pkadan chap bo'lmachaga", "Venoz qon, o'ng qorinchadan o'pkaga"],
    answer: 2, explanation: "8 - o'pka venalari: o'pkada kislorodga boyigan arterial qonni chap bo'lmachaga olib keladi (kichik doira oxiri). Venada arterial qon oqadigan tomir." },

  // ===== NEFRON =====
  { topic: "Ayirish a'zolari", image: RASMLAR.nefron,
    question: "6-raqam bilan ko'rsatilgan tuzilmada qanday jarayon kechadi?",
    options: ["Qonning filtrlanishi, birlamchi siydik hosil bo'lishi", "Qayta so'rilish", "Ajralish (sekretsiya)", "Siydikning konsentratsiyalanishi"],
    answer: 0, explanation: "6 - kapillyar koptokcha (glomerulus): qon plazmasi filtrlanadi; kuniga taxminan 150-180 l birlamchi siydik hosil bo'ladi." },
  { topic: "Ayirish a'zolari", image: RASMLAR.nefron,
    question: "2-raqam bilan ko'rsatilgan qismda nimalar qayta so'riladi?",
    options: ["Faqat mochevina", "Oqsillar va eritrositlar", "Faqat tuzlar", "Glyukoza, aminokislotalar va suvning katta qismi"],
    answer: 3, explanation: "2 - proksimal (yaqin) o'ralgan kanalcha: glyukoza, aminokislotalar, vitaminlar va suv qayta so'riladi." },
  { topic: "Ayirish a'zolari", image: RASMLAR.nefron,
    question: "3-raqam bilan ko'rsatilgan qismning asosiy vazifasi nima?",
    options: ["Qonni filtrlash", "Suv va tuzlarni qayta so'rib, siydikni konsentratsiyalash", "Gormon ishlab chiqarish", "Siydikni to'plash"],
    answer: 1, explanation: "3 - Genle ilmog'i: osmotik gradient hosil qilib, siydikning quyuqlashishini ta'minlaydi." },
  { topic: "Ayirish a'zolari", image: RASMLAR.nefron,
    question: "1-raqam bilan ko'rsatilgan tuzilmaning nomi qaysi?",
    options: ["Buyrak jomi", "Siydik nayi", "Shumlyanskiy-Bouman kapsulasi", "Malpigi piramidasi"],
    answer: 2, explanation: "1 - Shumlyanskiy-Bouman kapsulasi. U koptokcha (glomerulus) bilan birga Malpigi tanachasini hosil qiladi." },
  { topic: "Ayirish a'zolari", image: RASMLAR.nefron,
    question: "5-raqam bilan ko'rsatilgan naycha siydikni qayerga yo'naltiradi?",
    options: ["Siydik pufagiga", "Buyrak jomiga", "Siydik chiqarish nayiga", "Qon tomirlariga"],
    answer: 1, explanation: "5 - yig'uvchi naycha: ikkilamchi siydik (kuniga taxminan 1,5-2 l) buyrak jomiga, undan siydik yo'li orqali pufakka o'tadi." },

  // ===== KO'Z =====
  { topic: "Sezgi a'zolari", image: RASMLAR.koz,
    question: "1-raqam bilan ko'rsatilgan qismning xususiyati qaysi?",
    options: ["Rangli, qorachiq kengligini boshqaradi", "Qon tomirlariga boy, yorug'lik sezadi", "Nurni sindiruvchi shaffof qism, unda qon tomirlari bo'lmaydi", "Ko'rish nervi chiqadigan joy"],
    answer: 2, explanation: "1 - shox parda: shaffof, nurni kuchli sindiradi, qon tomirlari yo'q." },
  { topic: "Sezgi a'zolari", image: RASMLAR.koz,
    question: "2-raqam bilan ko'rsatilgan qismning vazifasi nima?",
    options: ["Tasvirni hosil qilish", "Pigmentga ega, qorachiq kengligini boshqaradi", "Ko'z shaklini saqlash", "Impulsni miyaga o'tkazish"],
    answer: 1, explanation: "2 - rangdor parda (iris): pigment ko'z rangini belgilaydi, mushaklari qorachiqni toraytiradi va kengaytiradi." },
  { topic: "Sezgi a'zolari", image: RASMLAR.koz,
    question: "3-raqam bilan ko'rsatilgan tuzilma akkomodatsiyada qanday ishtirok etadi?",
    options: ["Egriligini o'zgartirib, nurni to'r pardada fokuslaydi", "Yorug'likni sezadi", "Qorachiq kengligini o'zgartiradi", "Ko'z ichi bosimini saqlaydi"],
    answer: 0, explanation: "3 - ko'z gavhari: kiprik mushaklari ta'sirida egriligi o'zgarib, yaqin va uzoq narsalar aniq ko'rinadi." },
  { topic: "Sezgi a'zolari", image: RASMLAR.koz,
    question: "4-raqam bilan ko'rsatilgan muhitning vazifasi nima?",
    options: ["Qorachiq kengligini boshqaradi", "Nur sezuvchi hujayralarni saqlaydi", "Ko'z yoshi ishlab chiqaradi", "Ko'z shaklini saqlab, nurni o'tkazadi"],
    answer: 3, explanation: "4 - shishasimon tana: shaffof jelesimon modda, ko'z shaklini saqlaydi va nurni to'r pardaga o'tkazadi." },
  { topic: "Sezgi a'zolari", image: RASMLAR.koz,
    question: "5-raqam bilan ko'rsatilgan qavatda tasvir qanday hosil bo'ladi?",
    options: ["To'g'ri va kattalashgan", "Teskari va kichraygan", "To'g'ri va kichraygan", "Teskari va kattalashgan"],
    answer: 1, explanation: "5 - to'r parda (retina): tasvir teskari va kichraygan holda hosil bo'ladi, miya uni to'g'ri qabul qilishga o'rgangan." },
  { topic: "Sezgi a'zolari", image: RASMLAR.koz,
    question: "6-raqam bilan ko'rsatilgan joyda nima uchun ko'rish sezilmaydi?",
    options: ["U yerda fotoreseptorlar yo'q", "U yerda faqat kolbachalar bor", "U yerda faqat tayoqchalar bor", "U yerda rangdor parda joylashgan"],
    answer: 0, explanation: "6 - ko'rish nervi chiqish joyi (ko'r dog'): tayoqcha va kolbachalar yo'q, shuning uchun yorug'lik sezilmaydi." },

  // ===== GUL =====
  { topic: "Gulli o'simliklar", image: RASMLAR.gul,
    question: "1-raqam bilan ko'rsatilgan qismning vazifasi qaysi?",
    options: ["Changni qabul qilish", "Chang donachalarini hosil qilish", "Hasharotlarni jalb qilish", "Urug'kurtaklarni himoya qilish"],
    answer: 0, explanation: "1 - urug'chi tumshuqchasi: yopishqoq, changlanishda chang shu yerga tushadi." },
  { topic: "Gulli o'simliklar", image: RASMLAR.gul,
    question: "2-raqam bilan ko'rsatilgan qism urug'lanishdan keyin nimaga aylanadi?",
    options: ["Urug'ga", "Mevaga", "Gulkosaga", "Changga"],
    answer: 1, explanation: "2 - tuguncha: undan meva, tugunchadagi urug'kurtakdan esa urug' hosil bo'ladi." },
  { topic: "Gulli o'simliklar", image: RASMLAR.gul,
    question: "3-raqam bilan ko'rsatilgan qismda nima hosil bo'ladi?",
    options: ["Urug'kurtak", "Tuxum hujayra", "Chang donachalari", "Meva"],
    answer: 2, explanation: "3 - changdon: unda chang donachalari (erkak gametofit) rivojlanadi." },
  { topic: "Gulli o'simliklar", image: RASMLAR.gul,
    question: "4-raqam bilan ko'rsatilgan barglar yig'indisi qanday nomlanadi?",
    options: ["Gulkosa", "Changchi", "Urug'chi", "Gultoji"],
    answer: 3, explanation: "4 - tojbarglar; ularning yig'indisi gultoji. Rangi va hidi bilan hasharotlarni jalb qiladi." },
  { topic: "Gulli o'simliklar", image: RASMLAR.gul,
    question: "5-raqam bilan ko'rsatilgan barglar yig'indisi nima deb ataladi?",
    options: ["Gulkosa", "Gultoji", "Changchilar", "Urug'chi"],
    answer: 0, explanation: "5 - kosachabarglar; ularning yig'indisi gulkosa. G'unchani himoya qiladi, odatda yashil." },
  { topic: "Gulli o'simliklar", image: RASMLAR.gul,
    question: "3 va 6 raqamli qismlar birgalikda gulning qaysi qismini tashkil etadi?",
    options: ["Urug'chi", "Gulkosa", "Changchi", "Gultoji"],
    answer: 2, explanation: "Changchi = changdon (3) + ipcha (6). Urug'chi = tumshuqcha + ustuncha + tuguncha." },

  // ===== NEYRON =====
  { topic: "Nerv sistemasi", image: RASMLAR.neyron,
    question: "1-raqam bilan ko'rsatilgan o'simtalar impulsni qanday yo'naltiradi?",
    options: ["Neyron tanasidan uzoqlashtiradi", "Neyron tanasiga olib keladi", "Faqat mushaklarga o'tkazadi", "Impulsni o'tkazmaydi"],
    answer: 1, explanation: "1 - dendritlar: qisqa, ko'p shoxlangan; impulsni neyron tanasiga olib keladi." },
  { topic: "Nerv sistemasi", image: RASMLAR.neyron,
    question: "4-raqam bilan ko'rsatilgan qobiqning vazifasi nima?",
    options: ["Impuls hosil qiladi", "Mediator ajratadi", "Aksonni izolyatsiya qilib, impuls tezligini oshiradi", "Yadroni saqlaydi"],
    answer: 2, explanation: "4 - mielin qobiq: yog'simon modda, aksonni izolyatsiya qiladi, o'tkazish tezligini oshiradi." },
  { topic: "Nerv sistemasi", image: RASMLAR.neyron,
    question: "5-raqam bilan ko'rsatilgan joyda nerv impulsi qanday o'tadi?",
    options: ["Sekin o'tadi", "To'xtaydi", "O'tkazilmaydi", "Tugundan tugunga sakrab o'tadi"],
    answer: 3, explanation: "5 - Ranvye tuguni: mielinsiz oraliq; impuls tugundan tugunga sakrab (saltator) o'tadi, tezlik oshadi." },
  { topic: "Nerv sistemasi", image: RASMLAR.neyron,
    question: "2-raqam bilan ko'rsatilgan qismning o'ziga xosligi qaysi?",
    options: ["Yadro va ko'pchilik organoidlar shu yerda, neyron hayotini ta'minlaydi", "Mielin qobig'i bor", "Mediator ajratadi", "Faqat impuls qabul qiladi"],
    answer: 0, explanation: "2 - neyron tanasi (soma): yadro va organoidlar joylashgan, moddalar almashinuvi markazi." },
  { topic: "Nerv sistemasi", image: RASMLAR.neyron,
    question: "3-raqam bilan ko'rsatilgan o'simtaning xususiyati qaysi?",
    options: ["Qisqa va ko'p shoxlangan", "Impulsni tanaga olib keladi", "Uzun, impulsni neyron tanasidan uzoqlashtiradi", "Mielin qobiq hosil qiladi"],
    answer: 2, explanation: "3 - akson: odatda bitta, uzun; impulsni tanadan boshqa neyron yoki ishchi organ tomon olib boradi." },
  { topic: "Nerv sistemasi", image: RASMLAR.neyron,
    question: "6-raqam bilan ko'rsatilgan uchlar sinapsda nimani ajratadi?",
    options: ["Mielin", "Gormon", "Ferment", "Mediator (neyrotransmitter)"],
    answer: 3, explanation: "6 - akson uchlari: sinaptik tirqishga mediator (masalan, atsetilxolin) ajratib, impulsni keyingi hujayraga uzatadi." },
];

rasmliSavollar.push(
  // ===== DNK =====
  { topic: "Molekulyar biologiya", image: RASMLAR.dnk,
    question: "Rasmda 1-raqam bilan ko'rsatilgan komponent nima?",
    options: ["Dezoksiriboza", "Azotli asos", "Aminokislota", "Fosfat kislota qoldig'i"],
    answer: 3, explanation: "1 - fosfat kislota qoldig'i. Shakar va fosfat DNK zanjirining 'umurtqasi'ni hosil qiladi." },
  { topic: "Molekulyar biologiya", image: RASMLAR.dnk,
    question: "2-raqam bilan ko'rsatilgan beshbo'g'imli uglevod qaysi?",
    options: ["Riboza", "Glyukoza", "Dezoksiriboza", "Fruktoza"],
    answer: 2, explanation: "DNKda dezoksiriboza, RNKda riboza bo'ladi." },
  { topic: "Molekulyar biologiya", image: RASMLAR.dnk,
    question: "3-raqam bilan ko'rsatilgan komponent DNKda qaysi turlarda uchraydi?",
    options: ["A, T, G, C", "A, U, G, C", "A, T, U, C", "T, U, G, C"],
    answer: 0, explanation: "DNKda adenin, timin, guanin, sitozin bor; uratsil faqat RNKda uchraydi." },
  { topic: "Molekulyar biologiya", image: RASMLAR.dnk,
    question: "4-raqam bilan ko'rsatilgan bog'lar haqida qaysi fikr to'g'ri?",
    options: ["Kovalent bog', zanjir ichida", "Vodorod bog', komplementar asoslar orasida", "Ion bog', fosfatlar orasida", "Peptid bog', aminokislotalar orasida"],
    answer: 1, explanation: "A-T orasida 2 ta, G-C orasida 3 ta vodorod bog'i bor; ular DNKning ikki zanjirini ushlab turadi." },
  { topic: "Molekulyar biologiya", image: RASMLAR.dnk,
    question: "1, 2 va 3 raqamli komponentlar birgalikda nimani hosil qiladi?",
    options: ["Nukleotid", "Nukleozid", "Aminokislota", "Triplet"],
    answer: 0, explanation: "Nukleotid = fosfat + shakar + azotli asos. Nukleozid esa fosfatsiz (shakar + asos)." },

  // ===== HAZM QILISH =====
  { topic: "Hazm qilish", image: RASMLAR.hazm,
    question: "1-raqam bilan ko'rsatilgan a'zoda ovqat qanday harakatlanadi?",
    options: ["Peristaltik to'lqin bilan", "Diffuziya yo'li bilan", "Kiprikchalar yordamida", "Qon oqimi bilan"],
    answer: 0, explanation: "1 - qizilo'ngach: silliq mushaklarning to'lqinsimon qisqarishi (peristaltika) ovqatni oshqozonga suradi." },
  { topic: "Hazm qilish", image: RASMLAR.hazm,
    question: "2-raqam bilan ko'rsatilgan a'zoda muhit va asosiy ferment qaysi?",
    options: ["Ishqoriy muhit, amilaza", "Kislotali muhit, pepsin", "Neytral muhit, lipaza", "Kislotali muhit, ptialin"],
    answer: 1, explanation: "2 - oshqozon: HCl kislotali muhit yaratadi, pepsin oqsillarni parchalaydi." },
  { topic: "Hazm qilish", image: RASMLAR.hazm,
    question: "3-raqam bilan ko'rsatilgan a'zo qaysi suyuqlikni ishlab chiqaradi?",
    options: ["Insulin", "Pepsin", "O't suyuqligi", "Amilaza"],
    answer: 2, explanation: "3 - jigar: o't yog'larni emulsiyalaydi va lipaza ta'sirini kuchaytiradi." },
  { topic: "Hazm qilish", image: RASMLAR.hazm,
    question: "4-raqam bilan ko'rsatilgan bezning o'ziga xosligi nimada?",
    options: ["Faqat o't ishlab chiqaradi", "Faqat xlorid kislota ishlab chiqaradi", "Faqat gormonlar ishlab chiqaradi", "Hazm fermentlari, insulin va glyukagon ishlab chiqaradi"],
    answer: 3, explanation: "4 - oshqozon osti bezi: aralash sekretsiyali bez; fermentlar o'n ikki barmoqli ichakka, gormonlar qonga ajraladi." },
  { topic: "Hazm qilish", image: RASMLAR.hazm,
    question: "5-raqam bilan ko'rsatilgan a'zoning asosiy vazifasi qaysi?",
    options: ["Oziq moddalarning asosiy qismi so'riladi", "Faqat suv so'riladi", "Faqat mikroorganizmlar yashaydi", "Ovqat mexanik maydalanadi"],
    answer: 0, explanation: "5 - ingichka ichak: vorsinkalar tufayli so'rilish yuzasi katta, oziq moddalar asosan shu yerda so'riladi." },
  { topic: "Hazm qilish", image: RASMLAR.hazm,
    question: "6-raqam bilan ko'rsatilgan a'zoda asosan nima sodir bo'ladi?",
    options: ["Oqsillar aminokislotagacha parchalanadi", "Suv so'riladi, najas shakllanadi", "Glyukoza so'riladi", "O't hosil bo'ladi"],
    answer: 1, explanation: "6 - yo'g'on ichak: suv so'riladi, foydali bakteriyalar vitamin K va B guruhini sintez qiladi." },

  // ===== BARG KESIMI =====
  { topic: "Botanika", image: RASMLAR.barg,
    question: "1-raqam bilan ko'rsatilgan qavatning vazifasi nima?",
    options: ["Fotosintez", "Gaz almashinuvi", "Suv bug'lanishini kamaytirish", "Moddalar tashish"],
    answer: 2, explanation: "1 - kutikula: epidermis ustidagi mumsimon qatlam, transpiratsiyani kamaytiradi." },
  { topic: "Botanika", image: RASMLAR.barg,
    question: "Eng ko'p xloroplast saqlovchi qavat qaysi raqam bilan ko'rsatilgan?",
    options: ["2", "3", "4", "5"],
    answer: 1, explanation: "3 - ustunsimon (palisad) parenxima: hujayralari zich joylashgan, xloroplastlarga boy, fotosintez asosan shu yerda." },
  { topic: "Botanika", image: RASMLAR.barg,
    question: "4-raqam bilan ko'rsatilgan qavatning o'ziga xosligi qaysi?",
    options: ["Hujayralari zich, ustunsimon", "Faqat tomirlardan iborat", "Xloroplastlari yo'q", "Hujayralar orasida havo bo'shliqlari ko'p, gaz almashinuvini osonlashtiradi"],
    answer: 3, explanation: "4 - g'ovak parenxima: hujayralar orasidagi bo'shliqlar gazlar harakatini ta'minlaydi." },
  { topic: "Botanika", image: RASMLAR.barg,
    question: "5-raqam bilan ko'rsatilgan tuzilma nima?",
    options: ["Ksilema naychasi", "Floema elementi", "Yopuvchi hujayralar orasidagi tirqish: gaz almashinuvi va transpiratsiya", "Doim yopiq teshik"],
    answer: 2, explanation: "5 - og'izcha: ikki yopuvchi hujayra tomonidan ochiladi va yopiladi." },
  { topic: "Botanika", image: RASMLAR.barg,
    question: "6-raqam bilan ko'rsatilgan o'tkazuvchi to'qima orqali nima tashiladi?",
    options: ["Organik moddalar pastga", "Suv va mineral tuzlar yuqoriga", "Faqat gormonlar", "Faqat gazlar"],
    answer: 1, explanation: "6 - ksilema (yog'ochlik): ildizdan suv va mineral tuzlarni bargga ko'taradi." },
  { topic: "Botanika", image: RASMLAR.barg,
    question: "7-raqam bilan ko'rsatilgan to'qimaning vazifasi nima?",
    options: ["Fotosintez mahsulotlarini (organik moddalarni) bargdan boshqa organlarga tashiydi", "Suvni yuqoriga ko'taradi", "Gaz almashtiradi", "Pigment saqlaydi"],
    answer: 0, explanation: "7 - floema (lub): elaksimon naychalar orqali shakar kabi organik moddalar tashiladi." },

  // ===== BOSH MIYA =====
  { topic: "Nerv sistemasi", image: RASMLAR.miya,
    question: "1-raqam bilan ko'rsatilgan bo'limning po'stlog'i qaysi moddadan tuzilgan?",
    options: ["Oq modda", "Kulrang modda (neyron tanalari)", "Mielin", "Suyak to'qimasi"],
    answer: 1, explanation: "Katta yarim sharlar po'stlog'i kulrang moddadan, ichki qismi oq moddadan iborat." },
  { topic: "Nerv sistemasi", image: RASMLAR.miya,
    question: "2-raqam bilan ko'rsatilgan bo'limning vazifasi qaysi?",
    options: ["Nafas va yurak markazi", "Nutq markazi", "Ko'rish markazi", "Harakatlar muvofiqligi va muvozanat"],
    answer: 3, explanation: "2 - miyacha: harakatlarni muvofiqlashtiradi, muvozanatni saqlaydi." },
  { topic: "Nerv sistemasi", image: RASMLAR.miya,
    question: "3-raqam bilan ko'rsatilgan bo'limda qaysi markazlar joylashgan?",
    options: ["Ko'rish va eshitish refleks markazlari", "Muvozanat markazi", "Nutq markazi", "Hazm markazi"],
    answer: 0, explanation: "3 - o'rta miya: ko'rish va eshitish orientirovka reflekslari, mushak tonusi." },
  { topic: "Nerv sistemasi", image: RASMLAR.miya,
    question: "4-raqam bilan ko'rsatilgan bo'lim qanday nomlanadi?",
    options: ["O'rta miya", "Miya ko'prigi (Varoliy ko'prigi)", "Oraliq miya", "Uzunchoq miya"],
    answer: 1, explanation: "4 - miya ko'prigi: miyacha, yarim sharlar va orqa miya o'rtasida o'tkazuvchi yo'llar joylashgan." },
  { topic: "Nerv sistemasi", image: RASMLAR.miya,
    question: "5-raqam bilan ko'rsatilgan bo'limda qaysi hayotiy markazlar joylashgan?",
    options: ["Nutq va fikrlash", "Muvozanat", "Nafas, qon aylanish, yutish va yo'tal reflekslari", "Ko'rish"],
    answer: 2, explanation: "5 - uzunchoq miya: nafas olish, yurak-tomir faoliyati, yutish, aksirish va yo'tal reflekslarining markazlari." },

  // ===== NAFAS A'ZOLARI =====
  { topic: "Nafas olish", image: RASMLAR.opka,
    question: "1-raqam bilan ko'rsatilgan a'zoning o'ziga xosligi nima?",
    options: ["Gaz almashinuvi shu yerda sodir bo'ladi", "Siliar epiteliy bilan qoplangan, ovozsiz", "Ovoz paychalari joylashgan", "To'liq xaftaga halqalardan iborat"],
    answer: 2, explanation: "1 - hiqildoq: ovoz paychalari bor, havoning o'tishi bilan tovush hosil bo'ladi." },
  { topic: "Nafas olish", image: RASMLAR.opka,
    question: "2-raqam bilan ko'rsatilgan nay devori nima bilan mustahkamlangan?",
    options: ["Suyak halqalari", "Yarim halqasimon xaftaga", "Mushak tolalari", "Pigment qatlami"],
    answer: 1, explanation: "2 - traxeya: yarim halqasimon xaftagalar uni doim ochiq saqlaydi, orqa devori qizilo'ngachga tegib turadi." },
  { topic: "Nafas olish", image: RASMLAR.opka,
    question: "3-raqam bilan ko'rsatilgan yo'llar keyin nimaga bo'linadi?",
    options: ["Bronxiolalarga, ular alveolalar bilan tugaydi", "To'g'ridan-to'g'ri qon tomirlariga", "Hiqildoqqa", "Traxeyaga"],
    answer: 0, explanation: "3 - bronxlar: shoxlanib bronxiolalarga, ular esa alveolalar to'plamiga o'tadi." },
  { topic: "Nafas olish", image: RASMLAR.opka,
    question: "4-raqam bilan ko'rsatilgan tuzilmaning devori qanday?",
    options: ["Xaftaga to'qimasi", "Ko'p qavatli epiteliy", "Silliq mushak", "Bir qavatli yassi epiteliy, kapillyarlar bilan o'ralgan"],
    answer: 3, explanation: "4 - alveola: devori juda yupqa, gazlar (O2 va CO2) diffuziya orqali almashadi." },
  { topic: "Nafas olish", image: RASMLAR.opka,
    question: "5-raqam bilan ko'rsatilgan tuzilma nafas olishda qanday o'zgaradi?",
    options: ["Bo'shashib, gumbaz holiga o'tadi", "Qisqarib, yassilanadi, ko'krak qafasi hajmi oshadi", "Qisqarib, yuqoriga ko'tariladi", "O'zgarmaydi"],
    answer: 1, explanation: "5 - diafragma: nafas olishda qisqarib yassilanadi, ko'krak qafasi hajmi kattalashadi va havo o'pkaga kiradi." },
  { topic: "Nafas olish", image: RASMLAR.opka,
    question: "6-raqam bilan ko'rsatilgan a'zoning tuzilishi haqida to'g'ri fikr:",
    options: ["Skelet mushaklaridan iborat", "Xaftaga to'qimasidan iborat", "Alveolalardan iborat g'ovak to'qima; o'pkada mushak yo'q", "Suyak to'qimasidan iborat"],
    answer: 2, explanation: "6 - o'pka: g'ovak to'qima, mushagi yo'q; kengayish va torayish ko'krak qafasi mushaklari va diafragma hisobiga bo'ladi." },
);


// GitHub Pages / brauzer va Node.js uchun eksport
if (typeof module !== "undefined" && module.exports) module.exports = rasmliSavollar;
