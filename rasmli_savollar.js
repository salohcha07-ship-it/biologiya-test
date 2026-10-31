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
    '<path d="M205 118 L205 40 Q205 15 230 15 Q255 15 255 45 L255 100" stroke="#dc2626" stroke-width="14" fill="none"/>' +
    '<rect x="85" y="12" width="22" height="50" rx="4" fill="#1d4ed8"/>' +
    '<rect x="70" y="60" width="65" height="50" rx="14" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>' +
    '<rect x="145" y="60" width="65" height="50" rx="14" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/>' +
    '<rect x="65" y="115" width="70" height="75" rx="20" fill="#60a5fa" stroke="#1d4ed8" stroke-width="2"/>' +
    '<rect x="145" y="115" width="80" height="75" rx="24" fill="#f87171" stroke="#b91c1c" stroke-width="2"/>' +
    _b(1, 102, 85) + _b(2, 177, 85) + _b(3, 100, 152) + _b(4, 185, 152) + _b(5, 230, 15) + _b(6, 96, 32)
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
    question: "2-raqam bilan ko'rsatilgan bo'lmachaga qaysi tomirlardan qon quyiladi?",
    options: ["O'pka venalaridan", "Kovak venalardan", "O'pka arteriyasidan", "Aortadan"],
    answer: 0, explanation: "2 - chap bo'lmacha: o'pka venalari orqali o'pkadan arterial qon keladi." },
  { topic: "Yurak", image: RASMLAR.yurak,
    question: "1 va 3 raqamli bo'limlar orasidagi klapan qanday nomlanadi?",
    options: ["Ikki tabaqali", "Uch tabaqali", "Yarim oysimon", "Aorta klapani"],
    answer: 1, explanation: "O'ng bo'lmacha va o'ng qorincha orasida uch tabaqali klapan, chap tomonda ikki tabaqali (mitral) klapan joylashgan." },
  { topic: "Yurak", image: RASMLAR.yurak,
    question: "6-raqam bilan ko'rsatilgan tomir qonni qaysi bo'limga keltiradi?",
    options: ["Chap bo'lmachaga", "O'ng qorinchaga", "O'ng bo'lmachaga", "Chap qorinchaga"],
    answer: 2, explanation: "6 - yuqori kovak vena: tananing yuqori qismidan venoz qonni o'ng bo'lmachaga keltiradi (katta doira oxiri)." },

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
