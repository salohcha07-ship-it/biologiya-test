// RASMLI SAVOLLAR (SVG chizmalar bilan) - Biologiya Milliy Sertifikat
// Har bir savolda: topic, image (SVG matn), question, options, answer (0-3 indeks), explanation

const _bg = '<rect width="300" height="200" rx="12" fill="#f8fafc"/>';
const _b = (n, x, y) =>
  `<circle cx="${x}" cy="${y}" r="9" fill="#7c3aed"/><text x="${x}" y="${y + 4}" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff" font-family="Arial,sans-serif">${n}</text>`;
const _L = (n, bx, by, tx, ty) =>
  `<line x1="${bx}" y1="${by}" x2="${tx}" y2="${ty}" stroke="#334155" stroke-width="1.3"/><circle cx="${tx}" cy="${ty}" r="2.5" fill="#334155"/>` + _b(n, bx, by);
const _svg = (inner) =>
  `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;height:auto">${_bg}${inner}</svg>`;

const RASMLAR = {
  hujayra: _svg(
    '<ellipse cx="150" cy="100" rx="135" ry="88" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>' +
    '<circle cx="150" cy="100" r="32" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/><circle cx="150" cy="100" r="9" fill="#1e3a8a"/>' +
    '<ellipse cx="70" cy="90" rx="24" ry="12" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><path d="M54 90 q5-8 10 0 t10 0 t10 0" stroke="#b91c1c" fill="none" stroke-width="1.5"/>' +
    '<path d="M210 70 q20-10 40 0 M212 80 q18-10 36 0 M214 90 q16-10 32 0" stroke="#15803d" stroke-width="4" fill="none" stroke-linecap="round"/>' +
    '<circle cx="105" cy="155" r="10" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/>' +
    _L(1, 150, 45, 150, 70) + _L(2, 60, 50, 68, 82) + _L(3, 225, 40, 230, 68) + _L(4, 70, 165, 96, 157) + _L(5, 16, 40, 39, 51)
  ),
  yurak: _svg(
    '<path d="M142 120 L142 48 Q142 36 122 33" stroke="#60a5fa" stroke-width="12" fill="none" stroke-linecap="round"/>' +
    '<path d="M160 118 L160 44 Q160 15 195 15 Q237 15 237 50" stroke="#dc2626" stroke-width="14" fill="none"/>' +
    '<polygon points="229,50 245,50 237,66" fill="#dc2626"/>' +
    '<path d="M222 82 L262 76 M222 102 L262 108" stroke="#ef4444" stroke-width="8" stroke-linecap="round"/>' +
    '<rect x="80" y="10" width="18" height="48" rx="3" fill="#1d4ed8"/>' +
    '<rect x="72" y="55" width="60" height="50" rx="10" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>' +
    '<rect x="172" y="55" width="53" height="50" rx="10" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>' +
    '<path d="M75 112 L145 112 L145 182 Q95 165 75 125 Z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M152 112 L228 112 Q230 160 195 192 L152 182 Z" fill="#f87171" stroke="#b91c1c" stroke-width="2" stroke-linejoin="round"/>' +
    '<rect x="88" y="105" width="30" height="7" rx="2" fill="#475569"/><rect x="180" y="105" width="35" height="7" rx="2" fill="#475569"/>' +
    '<circle cx="12" cy="14" r="5" fill="#3b82f6"/><text x="21" y="18" font-size="9" fill="#334155" font-family="Arial,sans-serif">venoz</text>' +
    '<circle cx="12" cy="30" r="5" fill="#ef4444"/><text x="21" y="34" font-size="9" fill="#334155" font-family="Arial,sans-serif">arterial</text>' +
    '<text x="12" y="195" font-size="11" fill="#64748b" font-family="Arial,sans-serif">O\'ng</text><text x="262" y="195" font-size="11" fill="#64748b" font-family="Arial,sans-serif">Chap</text>' +
    _b(1, 102, 80) + _b(2, 198, 80) + _b(3, 108, 150) + _b(4, 190, 150) + _b(5, 197, 15) + _b(6, 89, 32) + _b(7, 142, 62) + _b(8, 246, 79)
  ),
  nefron: _svg(
    '<circle cx="45" cy="60" r="28" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/><circle cx="45" cy="60" r="14" fill="#ef4444"/>' +
    '<path d="M72 62 q12-22 24 0 t24 0 t24 0" stroke="#f59e0b" stroke-width="7" fill="none" stroke-linecap="round"/>' +
    '<path d="M144 62 L144 170 Q158 188 172 170 L172 80" stroke="#0ea5e9" stroke-width="7" fill="none" stroke-linejoin="round"/>' +
    '<path d="M172 80 q10-20 20 0 t20 0 L246 80" stroke="#22c55e" stroke-width="7" fill="none" stroke-linecap="round"/>' +
    '<path d="M250 20 L250 180" stroke="#a855f7" stroke-width="10" stroke-linecap="round"/>' +
    _L(1, 15, 15, 26, 41) + _L(6, 20, 105, 38, 66) + _L(2, 96, 20, 96, 62) + _L(3, 115, 130, 141, 130) + _L(4, 192, 125, 192, 82) + _L(5, 215, 150, 245, 150)
  ),
  koz: _svg(
    '<circle cx="160" cy="100" r="75" fill="#f1f5f9" stroke="#64748b" stroke-width="3"/>' +
    '<path d="M90 70 Q60 100 90 130" stroke="#38bdf8" stroke-width="6" fill="none" stroke-linecap="round"/>' +
    '<path d="M105 60 L105 85 M105 115 L105 140" stroke="#92400e" stroke-width="8" stroke-linecap="round"/>' +
    '<ellipse cx="118" cy="100" rx="10" ry="22" fill="#fde68a" stroke="#ca8a04" stroke-width="2"/>' +
    '<path d="M217 52 A75 75 0 0 1 217 148" stroke="#dc2626" stroke-width="5" fill="none"/>' +
    '<rect x="233" y="92" width="55" height="16" rx="6" fill="#facc15" stroke="#a16207" stroke-width="2"/>' +
    _L(1, 28, 65, 74, 98) + _L(2, 100, 20, 105, 66) + _L(3, 118, 185, 118, 121) + _b(4, 165, 100) + _L(5, 270, 45, 229, 69) + _L(6, 268, 145, 262, 108)
  ),
  gul: _svg(
    '<rect x="146" y="165" width="8" height="35" fill="#16a34a"/>' +
    '<ellipse cx="70" cy="95" rx="14" ry="48" transform="rotate(-20 70 95)" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/>' +
    '<ellipse cx="230" cy="95" rx="14" ry="48" transform="rotate(20 230 95)" fill="#f9a8d4" stroke="#be185d" stroke-width="2"/>' +
    '<ellipse cx="118" cy="152" rx="22" ry="8" transform="rotate(20 118 152)" fill="#4ade80" stroke="#166534" stroke-width="2"/>' +
    '<ellipse cx="182" cy="152" rx="22" ry="8" transform="rotate(-20 182 152)" fill="#4ade80" stroke="#166534" stroke-width="2"/>' +
    '<ellipse cx="150" cy="162" rx="30" ry="8" fill="#a16207"/>' +
    '<path d="M132 140 L112 75 M168 140 L188 75" stroke="#15803d" stroke-width="3" fill="none"/>' +
    '<ellipse cx="110" cy="68" rx="7" ry="10" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/>' +
    '<ellipse cx="190" cy="68" rx="7" ry="10" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/>' +
    '<rect x="147" y="60" width="6" height="40" fill="#22c55e"/><circle cx="150" cy="56" r="8" fill="#f43f5e"/>' +
    '<ellipse cx="150" cy="115" rx="16" ry="22" fill="#86efac" stroke="#166534" stroke-width="2"/>' +
    '<circle cx="143" cy="126" r="4" fill="#166534"/><circle cx="157" cy="126" r="4" fill="#166534"/>' +
    _L(1, 120, 35, 146, 53) + _b(2, 150, 106) + _L(3, 232, 35, 192, 62) + _L(4, 35, 135, 66, 115) + _L(5, 65, 185, 105, 156) + _L(6, 240, 125, 181, 100)
  ),
  neyron: _svg(
    '<path d="M70 88 L32 52 M70 95 L20 95 M72 112 L28 148 M32 52 L18 40 M28 148 L14 160" stroke="#475569" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<path d="M112 100 L255 100" stroke="#475569" stroke-width="4"/>' +
    '<rect x="125" y="91" width="35" height="18" rx="8" fill="#fb923c" stroke="#c2410c" stroke-width="1.5"/>' +
    '<rect x="170" y="91" width="35" height="18" rx="8" fill="#fb923c" stroke="#c2410c" stroke-width="1.5"/>' +
    '<rect x="215" y="91" width="30" height="18" rx="8" fill="#fb923c" stroke="#c2410c" stroke-width="1.5"/>' +
    '<path d="M255 100 L285 80 M255 100 L287 100 M255 100 L285 120" stroke="#475569" stroke-width="3" stroke-linecap="round"/>' +
    '<circle cx="90" cy="100" r="22" fill="#fde68a" stroke="#a16207" stroke-width="2"/><circle cx="90" cy="100" r="8" fill="#92400e"/>' +
    _L(1, 15, 70, 35, 95) + _L(2, 90, 150, 90, 118) + _L(3, 118, 60, 118, 98) + _L(4, 142, 60, 142, 92) + _L(5, 165, 140, 165, 102) + _L(6, 262, 45, 270, 90)
  ),
};

const _eduSvg = (body) => `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" role="img" aria-label="Biologiya o‘quv chizmasi"><defs><linearGradient id="paper" x2="0" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#f1f5f9"/></linearGradient><linearGradient id="tissue" x2="1" y2="1"><stop stop-color="#fda4af"/><stop offset="1" stop-color="#be4565"/></linearGradient></defs><rect width="600" height="400" rx="14" fill="url(#paper)"/><g stroke-linecap="round" stroke-linejoin="round" font-family="Arial,sans-serif">${body}</g></svg>`;
const _tag = (n,x,y,tx,ty) => `<path d="M${x} ${y} L${tx} ${ty}" stroke="#334155" stroke-width="2.2" fill="none"/><circle cx="${tx}" cy="${ty}" r="4" fill="#334155"/><circle cx="${x}" cy="${y}" r="17" fill="#5b21b6" stroke="#fff" stroke-width="3"/><text x="${x}" y="${y+6}" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">${n}</text>`;
Object.assign(RASMLAR, {
 hujayra:_eduSvg(`<ellipse cx="300" cy="205" rx="245" ry="155" fill="#fef3c7" stroke="#a16207" stroke-width="7"/><ellipse cx="300" cy="205" rx="232" ry="142" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/><circle cx="300" cy="205" r="62" fill="#93c5fd" stroke="#1d4ed8" stroke-width="5"/><circle cx="300" cy="205" r="20" fill="#1e40af"/><path d="M275 160 Q300 145 325 160 M275 250 Q300 265 325 250" stroke="#2563eb" stroke-width="3" fill="none"/><g fill="#fb923c" stroke="#9a3412" stroke-width="4"><ellipse cx="145" cy="170" rx="42" ry="22"/><ellipse cx="420" cy="270" rx="42" ry="22"/></g><g stroke="#7c2d12" stroke-width="4" fill="none"><path d="M112 170 q12 -20 24 0 t24 0 t24 0 M387 270 q12 -20 24 0 t24 0 t24 0"/></g><g fill="#86efac" stroke="#15803d" stroke-width="3"><path d="M405 100 q35 -20 65 0 q-30 18 -65 0 M410 122 q30 -18 55 0"/></g><g fill="#c4b5fd" stroke="#6d28d9" stroke-width="3"><circle cx="155" cy="285" r="18"/><circle cx="190" cy="95" r="12"/></g>${_tag(1,300,65,300,143)}${_tag(2,90,90,140,150)}${_tag(3,510,75,445,112)}${_tag(4,95,330,155,285)}${_tag(5,25,205,58,205)}`),
 yurak:_eduSvg(`<path d="M290 120 C250 70 175 85 165 155 C145 245 230 315 300 360 C370 315 455 245 435 155 C425 85 350 70 310 120 L300 135Z" fill="url(#tissue)" stroke="#9f1239" stroke-width="7"/><path d="M300 140 L300 335" stroke="#7f1d1d" stroke-width="7"/><path d="M185 170 Q235 130 285 180 L285 260 Q235 275 195 235Z" fill="#93c5fd" stroke="#1d4ed8" stroke-width="5"/><path d="M315 180 Q365 130 415 170 L405 235 Q365 275 315 260Z" fill="#fca5a5" stroke="#b91c1c" stroke-width="5"/><path d="M195 245 Q240 225 285 270 L285 335 Q225 315 195 245Z" fill="#60a5fa" stroke="#1d4ed8" stroke-width="5"/><path d="M315 270 Q365 225 405 245 Q375 320 315 335Z" fill="#f87171" stroke="#b91c1c" stroke-width="5"/><path d="M230 125 C220 65 225 35 250 25" stroke="#2563eb" stroke-width="24" fill="none"/><path d="M345 130 C360 55 390 35 420 45" stroke="#dc2626" stroke-width="27" fill="none"/><path d="M285 145 C270 85 285 55 305 35" stroke="#2563eb" stroke-width="18" fill="none"/><path d="M390 170 C440 115 470 110 490 125" stroke="#dc2626" stroke-width="16" fill="none"/>${_tag(1,145,170,210,190)}${_tag(2,455,185,380,190)}${_tag(3,145,290,225,285)}${_tag(4,455,300,370,290)}${_tag(5,505,35,415,45)}${_tag(6,165,35,230,55)}${_tag(7,275,25,295,45)}${_tag(8,520,120,480,125)}`),
 nefron:_eduSvg(`<path d="M145 95 C80 40 40 115 95 155 C145 190 190 120 145 95Z" fill="#fee2e2" stroke="#b91c1c" stroke-width="5"/><g fill="none" stroke="#dc2626" stroke-width="8"><path d="M90 110 q-20 -35 5 -40 t30 35 t30 -20 t-5 55 t-35 5 t-25 -35"/></g><path d="M160 125 C210 115 210 160 245 155 C285 150 270 210 250 225 C225 245 250 300 290 300 C330 300 340 255 315 230 C290 205 315 170 355 170 C395 170 400 210 435 200" fill="none" stroke="#f59e0b" stroke-width="18"/><path d="M250 220 L250 320 Q280 350 310 320 L310 220" fill="none" stroke="#0ea5e9" stroke-width="16"/><path d="M435 80 L435 340" stroke="#16a34a" stroke-width="20" fill="none"/><path d="M130 75 C190 20 240 35 250 80" stroke="#dc2626" stroke-width="6" fill="none"/><path d="M435 200 C475 185 480 150 480 125" stroke="#16a34a" stroke-width="7" fill="none"/>${_tag(1,55,45,105,85)}${_tag(6,30,190,95,145)}${_tag(2,215,80,220,145)}${_tag(3,180,330,255,285)}${_tag(4,375,260,365,175)}${_tag(5,500,330,435,300)}`),
 koz:_eduSvg(`<path d="M65 200 Q170 55 350 80 Q470 95 520 200 Q465 305 350 320 Q170 345 65 200Z" fill="#f8fafc" stroke="#475569" stroke-width="8"/><path d="M65 200 Q95 130 145 115 Q120 200 145 285 Q95 270 65 200Z" fill="#7dd3fc" stroke="#0284c7" stroke-width="5"/><path d="M145 115 Q205 75 350 85 Q470 95 500 200 Q470 305 350 315 Q205 325 145 285" fill="#fef3c7" fill-opacity=".45" stroke="#d97706" stroke-width="5"/><path d="M200 100 Q175 200 200 300" stroke="#0f766e" stroke-width="18" fill="none"/><ellipse cx="220" cy="200" rx="30" ry="62" fill="#bfdbfe" stroke="#2563eb" stroke-width="5"/><path d="M470 105 Q515 200 470 295" stroke="#be123c" stroke-width="10" fill="none"/><path d="M500 200 L585 200" stroke="#facc15" stroke-width="20"/><path d="M505 185 L585 185 M505 215 L585 215" stroke="#a16207" stroke-width="3"/><circle cx="200" cy="200" r="11" fill="#0f172a"/>${_tag(1,40,100,85,180)}${_tag(2,175,45,195,130)}${_tag(3,230,365,220,260)}${_tag(4,340,200,350,200)}${_tag(5,480,45,475,110)}${_tag(6,550,300,520,205)}`),
 gul:_eduSvg(`<g fill="#f9a8d4" stroke="#be185d" stroke-width="4"><ellipse cx="300" cy="115" rx="55" ry="105"/><ellipse cx="300" cy="115" rx="55" ry="105" transform="rotate(72 300 200)"/><ellipse cx="300" cy="115" rx="55" ry="105" transform="rotate(144 300 200)"/><ellipse cx="300" cy="115" rx="55" ry="105" transform="rotate(216 300 200)"/><ellipse cx="300" cy="115" rx="55" ry="105" transform="rotate(288 300 200)"/></g><path d="M300 190 L300 335" stroke="#15803d" stroke-width="12"/><g stroke="#15803d" stroke-width="7" fill="none"><path d="M300 190 L300 90"/><path d="M285 205 Q250 155 245 95 M315 205 Q350 155 355 95"/></g><g fill="#fbbf24" stroke="#a16207" stroke-width="4"><ellipse cx="245" cy="90" rx="13" ry="25"/><ellipse cx="355" cy="90" rx="13" ry="25"/></g><path d="M300 80 L300 225" stroke="#16a34a" stroke-width="9"/><circle cx="300" cy="72" r="15" fill="#be123c"/><path d="M265 235 Q245 265 285 255 L300 245 L315 255 Q355 265 335 235 L315 220 L300 230 L285 220Z" fill="#4ade80" stroke="#166534" stroke-width="5"/><ellipse cx="300" cy="230" rx="35" ry="45" fill="#86efac" stroke="#166534" stroke-width="5"/><ellipse cx="300" cy="240" rx="15" ry="20" fill="#fef3c7" stroke="#a16207" stroke-width="3"/>${_tag(1,300,20,300,58)}${_tag(2,360,330,310,255)}${_tag(3,430,65,355,90)}${_tag(4,75,145,150,170)}${_tag(5,80,300,270,250)}${_tag(6,500,150,330,140)}`),
 neyron:_eduSvg(`<g stroke="#64748b" stroke-width="9" fill="none"><path d="M155 195 L85 115 L35 85 M85 115 L65 45 M155 195 L70 215 L25 260 M70 215 L45 300 M155 195 L110 285 M155 195 L225 195"/></g><circle cx="155" cy="195" r="58" fill="#fde68a" stroke="#a16207" stroke-width="6"/><circle cx="155" cy="195" r="20" fill="#92400e"/><path d="M210 195 L520 195" stroke="#475569" stroke-width="12"/><g fill="#fbbf24" stroke="#c2410c" stroke-width="4"><rect x="250" y="170" width="65" height="50" rx="22"/><rect x="335" y="170" width="65" height="50" rx="22"/><rect x="420" y="170" width="65" height="50" rx="22"/></g><g stroke="#475569" stroke-width="7" fill="none"><path d="M520 195 L565 145 M520 195 L575 195 M520 195 L565 245"/></g>${_tag(1,35,30,75,100)}${_tag(2,150,335,155,255)}${_tag(3,220,90,225,190)}${_tag(4,360,90,365,170)}${_tag(5,405,290,325,195)}${_tag(6,560,90,555,150)}`)
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

// ================= QO'SHIMCHA MAVZULAR =================
const _pent = (x, y) =>
  `<polygon points="${x},${y - 9} ${x + 9},${y - 3} ${x + 6},${y + 8} ${x - 6},${y + 8} ${x - 9},${y - 3}" fill="#22c55e" stroke="#166534" stroke-width="1.5"/>`;

Object.assign(RASMLAR, {
  dnk: _svg(
    '<path d="M100 15 L100 185 M200 15 L200 185" stroke="#94a3b8" stroke-width="6"/>' +
    [30, 95, 160].map(y => `<circle cx="100" cy="${y}" r="8" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/><circle cx="200" cy="${y}" r="8" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>`).join('') +
    [62, 127].map(y => _pent(100, y) + _pent(200, y)).join('') +
    '<rect x="108" y="58" width="38" height="9" rx="3" fill="#3b82f6"/><rect x="154" y="58" width="38" height="9" rx="3" fill="#ef4444"/>' +
    '<rect x="108" y="123" width="38" height="9" rx="3" fill="#facc15"/><rect x="154" y="123" width="38" height="9" rx="3" fill="#a855f7"/>' +
    '<path d="M146 60 L154 60 M146 65 L154 65 M146 125 L154 125 M146 128 L154 128 M146 131 L154 131" stroke="#0f172a" stroke-width="1.5"/>' +
    _L(1, 45, 30, 92, 30) + _L(2, 45, 62, 91, 63) + _L(3, 127, 22, 127, 58) + _L(4, 150, 175, 150, 129)
  ),
  hazm: _svg(
    '<path d="M95 190 L95 108 L210 108 L210 190" stroke="#a16207" stroke-width="10" fill="none" stroke-linejoin="round"/>' +
    '<path d="M130 120 Q175 122 170 133 T130 146 T170 159 T130 172" stroke="#f472b6" stroke-width="8" fill="none" stroke-linecap="round"/>' +
    '<path d="M150 8 L150 55" stroke="#fb7185" stroke-width="8"/>' +
    '<ellipse cx="105" cy="72" rx="32" ry="18" transform="rotate(-8 105 72)" fill="#b45309" stroke="#78350f" stroke-width="2"/>' +
    '<ellipse cx="165" cy="72" rx="30" ry="18" transform="rotate(15 165 72)" fill="#fda4af" stroke="#be123c" stroke-width="2"/>' +
    '<ellipse cx="168" cy="98" rx="28" ry="6" fill="#fde047" stroke="#a16207" stroke-width="1.5"/>' +
    _L(1, 100, 28, 146, 30) + _L(2, 250, 60, 193, 75) + _L(3, 35, 60, 74, 76) + _L(4, 250, 100, 192, 98) + _L(5, 250, 140, 172, 133) + _L(6, 255, 175, 210, 165)
  ),
  barg: _svg(
    '<rect x="20" y="42" width="260" height="40" fill="#4ade80"/>' +
    Array.from({ length: 13 }, (_, i) => `<rect x="${22 + i * 20}" y="44" width="16" height="36" rx="5" fill="#22c55e" stroke="#166534"/>`).join('') +
    '<rect x="20" y="82" width="260" height="68" fill="#dcfce7"/>' +
    Array.from({ length: 14 }, (_, i) => `<ellipse cx="${35 + i * 18}" cy="${98 + (i % 3) * 18}" rx="8" ry="7" fill="#4ade80" stroke="#166534"/>`).join('') +
    '<rect x="20" y="24" width="260" height="18" fill="#bbf7d0" stroke="#15803d"/>' +
    '<rect x="20" y="20" width="260" height="4" fill="#facc15"/>' +
    '<rect x="20" y="150" width="260" height="18" fill="#bbf7d0" stroke="#15803d"/>' +
    '<ellipse cx="190" cy="159" rx="6" ry="8" fill="#166534"/><ellipse cx="210" cy="159" rx="6" ry="8" fill="#166534"/>' +
    '<rect x="196" y="150" width="8" height="19" fill="#f8fafc"/>' +
    '<circle cx="110" cy="115" r="20" fill="#fef3c7" stroke="#a16207" stroke-width="2"/><circle cx="110" cy="108" r="6" fill="#3b82f6"/><circle cx="110" cy="124" r="6" fill="#f97316"/>' +
    _L(1, 40, 9, 60, 22) + _b(2, 40, 33) + _b(3, 80, 62) + _b(4, 50, 125) + _L(5, 235, 188, 205, 164) + _L(6, 160, 100, 116, 108) + _L(7, 160, 140, 116, 124)
  ),
  miya: _svg(
    '<ellipse cx="222" cy="158" rx="34" ry="22" fill="#fde68a" stroke="#ca8a04" stroke-width="2"/>' +
    '<path d="M194 152 q28-7 56 0 M192 160 q30-7 60 0 M197 168 q25-7 50 0" stroke="#ca8a04" stroke-width="1.5" fill="none"/>' +
    '<path d="M55 95 Q40 55 85 32 Q135 10 195 25 Q250 42 252 88 Q254 118 228 128 L205 130 Q180 150 140 148 Q95 146 80 125 Q58 120 55 95 Z" fill="#fbcfe8" stroke="#be185d" stroke-width="2.5" stroke-linejoin="round"/>' +
    '<path d="M75 70 q15-18 30 0 t30 0 t30 0 t30 0 t30 0 M70 95 q15-16 30 0 t30 0 t30 0 t30 0 t25 0 M95 50 q15-14 30 0 t30 0 t30 0 t30 0" stroke="#be185d" stroke-width="2" fill="none"/>' +
    '<path d="M120 108 Q160 100 200 118" stroke="#9d174d" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<rect x="156" y="138" width="24" height="16" rx="4" fill="#fdba74" stroke="#c2410c" stroke-width="1.5"/>' +
    '<ellipse cx="168" cy="162" rx="23" ry="11" fill="#a5b4fc" stroke="#4338ca" stroke-width="1.5"/>' +
    '<path d="M156 168 L180 168 L176 198 L160 198 Z" fill="#86efac" stroke="#15803d" stroke-width="1.5" stroke-linejoin="round"/>' +
    '<text x="12" y="16" font-size="10" fill="#64748b" font-family="Arial,sans-serif">Old</text><text x="262" y="16" font-size="10" fill="#64748b" font-family="Arial,sans-serif">Orqa</text>' +
    _b(1, 110, 72) + _L(2, 272, 135, 252, 152) + _L(3, 95, 152, 157, 146) + _L(4, 95, 175, 146, 162) + _L(5, 100, 190, 160, 186)
  ),
  opka: _svg(
    '<path d="M145 60 Q60 60 60 130 Q60 175 110 175 L145 175 Z" fill="#fda4af" stroke="#be123c" stroke-width="2"/>' +
    '<path d="M155 60 Q240 60 240 130 Q240 175 190 175 L155 175 Z" fill="#fda4af" stroke="#be123c" stroke-width="2"/>' +
    '<rect x="143" y="25" width="14" height="60" fill="#fecaca" stroke="#b91c1c" stroke-width="1.5"/>' +
    '<path d="M143 38 L157 38 M143 48 L157 48 M143 58 L157 58 M143 68 L157 68 M143 78 L157 78" stroke="#b91c1c" stroke-width="1.5"/>' +
    '<ellipse cx="150" cy="20" rx="12" ry="8" fill="#fcd34d" stroke="#b45309" stroke-width="1.5"/>' +
    '<path d="M150 85 L110 115 M150 85 L190 115 L202 124" stroke="#fb7185" stroke-width="7" fill="none" stroke-linecap="round"/>' +
    '<circle cx="205" cy="118" r="6" fill="#fff" stroke="#be123c"/><circle cx="214" cy="126" r="6" fill="#fff" stroke="#be123c"/><circle cx="205" cy="134" r="6" fill="#fff" stroke="#be123c"/><circle cx="195" cy="128" r="6" fill="#fff" stroke="#be123c"/>' +
    '<path d="M40 185 Q150 150 260 185" stroke="#7c3aed" stroke-width="6" fill="none"/>' +
    _L(1, 100, 20, 139, 21) + _L(2, 100, 55, 143, 55) + _L(3, 270, 70, 170, 100) + _L(4, 272, 135, 220, 128) + _L(5, 30, 150, 84, 174) + _b(6, 100, 115)
  ),
});

Object.assign(RASMLAR, {
 dnk:_eduSvg(`<g stroke="#64748b" stroke-width="10" fill="none"><path d="M180 35 C500 100 100 300 420 365"/><path d="M420 35 C100 100 500 300 180 365"/></g><g stroke-width="9" stroke-linecap="round"><path d="M210 55 L390 55 M255 105 L345 105 M280 155 L320 155 M280 245 L320 245 M255 295 L345 295 M210 345 L390 345" stroke="#2563eb"/><path d="M390 55 L210 55 M345 105 L255 105 M320 155 L280 155 M320 245 L280 245 M345 295 L255 295 M390 345 L210 345" stroke="#dc2626"/></g><g fill="#fbbf24" stroke="#92400e" stroke-width="3"><circle cx="180" cy="35" r="15"/><circle cx="420" cy="35" r="15"/><circle cx="420" cy="365" r="15"/><circle cx="180" cy="365" r="15"/></g><g fill="#86efac" stroke="#166534" stroke-width="3"><polygon points="210,85 230,75 245,95 230,115 210,105"/><polygon points="370,85 390,75 405,95 390,115 370,105"/></g>${_tag(1,80,35,180,35)}${_tag(2,80,120,220,100)}${_tag(3,500,145,390,105)}${_tag(4,500,300,300,245)}`),
 hazm:_eduSvg(`<path d="M285 25 L285 105" stroke="#eab08b" stroke-width="28"/><path d="M285 105 C230 100 220 170 270 190 C320 210 380 180 365 135 C350 105 315 105 285 105" fill="#fda4af" stroke="#be123c" stroke-width="6"/><path d="M250 175 Q185 140 150 180 Q120 215 170 230 Q200 240 225 220" fill="#a16207" stroke="#78350f" stroke-width="7"/><path d="M340 190 Q420 185 430 240 Q440 280 400 300" fill="none" stroke="#dc8b36" stroke-width="20"/><path d="M300 215 C240 245 245 300 300 300 C360 300 360 340 300 350 C240 360 235 315 270 300" fill="none" stroke="#f59e0b" stroke-width="18"/><path d="M270 300 Q210 265 190 300 Q175 335 220 355 Q270 375 300 350" fill="none" stroke="#16a34a" stroke-width="14"/><path d="M380 185 Q410 155 445 175 Q465 195 440 215" fill="#b45309" stroke="#78350f" stroke-width="5"/><path d="M380 205 Q340 225 340 245" stroke="#facc15" stroke-width="9" fill="none"/>${_tag(1,230,35,285,65)}${_tag(2,420,105,355,145)}${_tag(3,80,160,160,185)}${_tag(4,500,220,430,205)}${_tag(5,500,330,340,310)}${_tag(6,110,330,190,320)}`),
 barg:_eduSvg(`<rect x="45" y="55" width="510" height="24" fill="#facc15" stroke="#a16207" stroke-width="3"/><rect x="45" y="79" width="510" height="50" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/><g fill="#4ade80" stroke="#15803d" stroke-width="3">${Array.from({length:12},(_,i)=>`<rect x="${60+i*40}" y="135" width="28" height="90" rx="12"/>`).join('')}</g><rect x="45" y="230" width="510" height="95" fill="#dcfce7" stroke="#15803d" stroke-width="3"/><g fill="#86efac" stroke="#166534" stroke-width="2">${Array.from({length:12},(_,i)=>`<ellipse cx="${70+i*40}" cy="265" rx="12" ry="8"/>`).join('')}</g><path d="M45 325 L555 325 L555 350 L45 350Z" fill="#bbf7d0" stroke="#15803d" stroke-width="3"/><path d="M440 325 Q460 285 480 325 M460 325 Q480 285 500 325" stroke="#166534" stroke-width="5" fill="none"/><path d="M290 145 L290 310" stroke="#0ea5e9" stroke-width="12"/><path d="M315 145 L315 310" stroke="#f59e0b" stroke-width="12"/>${_tag(1,30,35,55,55)}${_tag(2,120,95,120,80)}${_tag(3,160,180,160,175)}${_tag(4,100,280,120,270)}${_tag(5,520,375,475,330)}${_tag(6,290,115,290,160)}${_tag(7,350,115,315,160)}`),
 miya:_eduSvg(`<path d="M100 170 C70 90 145 35 230 55 C285 25 385 55 420 115 C470 125 495 200 450 245 C425 290 355 300 300 275 C240 315 145 280 130 235 C90 230 80 200 100 170Z" fill="#f9b4c7" stroke="#9d174d" stroke-width="7"/><g fill="none" stroke="#be567c" stroke-width="5"><path d="M130 125 q30 -40 65 0 t65 0 t65 0 t65 0 M115 170 q35 -35 70 0 t70 0 t70 0 t70 0 M145 215 q30 -30 60 0 t60 0 t60 0"/></g><path d="M360 250 Q390 220 420 245 Q450 270 425 300 Q390 325 360 290Z" fill="#e9a3ad" stroke="#9d174d" stroke-width="5"/><path d="M310 250 L310 290 L340 315 L350 350" fill="none" stroke="#c2410c" stroke-width="22"/><path d="M315 290 Q280 300 280 330" fill="none" stroke="#ea580c" stroke-width="18"/><path d="M330 315 L330 380" stroke="#9a3412" stroke-width="17"/>${_tag(1,120,40,170,75)}${_tag(2,500,300,420,275)}${_tag(3,260,350,310,275)}${_tag(4,450,350,335,320)}${_tag(5,530,385,345,365)}`),
 opka:_eduSvg(`<path d="M285 25 L315 25 L315 135 L285 135Z" fill="#fda4af" stroke="#be123c" stroke-width="5"/><g stroke="#be123c" stroke-width="4"><path d="M285 50 L315 50 M285 75 L315 75 M285 100 L315 100 M285 125 L315 125"/></g><path d="M300 130 L235 190 M300 130 L365 190" stroke="#dc6b80" stroke-width="18" fill="none"/><path d="M235 190 Q175 125 130 190 Q70 260 115 345 Q165 380 245 330 Q270 270 235 190Z" fill="#fda4af" stroke="#be123c" stroke-width="6"/><path d="M365 190 Q425 125 470 190 Q530 260 485 345 Q435 380 355 330 Q330 270 365 190Z" fill="#fda4af" stroke="#be123c" stroke-width="6"/><g stroke="#b91c1c" stroke-width="8" fill="none"><path d="M235 190 L180 245 L155 295 M235 190 L220 265 L205 325 M365 190 L420 245 L445 295 M365 190 L380 265 L395 325"/></g><path d="M95 365 Q300 300 505 365" stroke="#7c2d12" stroke-width="18" fill="none"/><g fill="#fff" stroke="#dc2626" stroke-width="4"><circle cx="510" cy="80" r="28"/><circle cx="550" cy="65" r="22"/><circle cx="545" cy="110" r="22"/></g><g stroke="#dc2626" stroke-width="3"><path d="M490 80 L530 80 M510 60 L510 100 M535 65 L565 65 M545 45 L545 85"/></g>${_tag(1,200,25,300,25)}${_tag(2,90,100,290,75)}${_tag(3,520,160,390,205)}${_tag(4,570,35,530,80)}${_tag(5,45,375,180,355)}${_tag(6,95,245,135,250)}`)
});

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
