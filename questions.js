const biologyQuestionsDB = [
  {
    question: "Qo'sh zanjirli DNK molekulasida Timin nukleotidlari soni umumiy nukleotidlarning 20% ini tashkil etadi. Ushbu DNK molekulasida Guanin nukleotidlari necha foizni tashkil qiladi?",
    options: ["20%", "30%", "40%", "60%"],
    answer: 1,
    explanation: "DNKda Chargaff qoidasiga ko'ra A=T va G=S bo'ladi. Agar Timin 20% bo'lsa, Adenin ham 20% bo'ladi. A+T = 40%. Qolgan 60% qismi G+S ga tegishli. Guanin ulushi 60% / 2 = 30% bo'ladi."
  },
  {
    question: "Hujayra nafas olishining glikoliz bosqichida 1 molekula glyukoza to'liq parchalanganda necha molekula ATF va necha molekula Sut kislotasi hosil bo'ladi?",
    options: ["2 ATF, 2 Sut kislota", "38 ATF, 0 Sut kislota", "36 ATF, 2 Sut kislota", "4 ATF, 1 Sut kislota"],
    answer: 0,
    explanation: "Kislorodsiz (anaerob) glikoliz bosqichida 1 molekula glyukozadan 2 molekula sut kislotasi va sof 2 molekula ATF energiyasi ajralib chiqadi."
  },
  {
    question: "O'simliklarda fotosintezning qorong'ilik bosqichida (Kalvin sikli) CO2 ning birikishi va glyukoza sintezlanishi uchun qaysi moddalar zarur bo'ladi?",
    options: ["Faqat yorug'lik va H2O", "ATF va NADF·H", "O2 va Glyukoza", "Xlorofill va Karotin"],
    answer: 1,
    explanation: "Qorong'ilik bosqichida yorug'lik bosqichida toplanib tayyorlangan ATF energiyasi va NADF·H vodorod tashuvchisi sarflanadi."
  },
  {
    question: "Odam fiziologiyasida gipoksiya (kislorod tanqisligi) sharoitida qaysi gormon buyraklar tomonidan ishlab chiqariladi va eritrotsitlar sintezini rag'batlantiradi?",
    options: ["Tiroksin", "Eritropoetin", "Insulin", "Adrenalin"],
    answer: 1,
    explanation: "Buyraklar gipoksiya holatiga javoban Eritropoetin (EPO) gormonini qonga chiqaradi va bu suyak ko'mida eritrotsitlar hosil bo'lishini tezlashtiradi."
  },
  {
    question: "Meyoz bo'linishning prophaza-I bosqichida sodir bo'ladigan genetik xilma-xillikning asosiy manbai bo'lgan jarayon qaysi?",
    options: ["Sitokinez", "Krossingover", "Replikatsiya", "Transkripsiya"],
    answer: 1,
    explanation: "Prophaza-I da gomologik xromosomalarning konyugatsiyasi va krossingoveri (genlar almashinuvi) yuz beradi."
  },
  {
    question: "DNK zanjiridagi A-T va G-S juftliklari orasidagi vodorod bog'lari soni qanday taqsimlanadi?",
    options: ["A-T (2 ta), G-S (3 ta)", "A-T (3 ta), G-S (2 ta)", "Ikkalasi ham 2 tadan", "Ikkalasi ham 3 tadan"],
    answer: 0,
    explanation: "Adenin va Timin orasida 2 ta, Guanin va Sitozin orasida esa 3 ta vodorod bog'i hosil bo'ladi."
  },
  {
    question: "100 ta aminokislotadan tashkil topgan oqsil molekulasini kodlaydigan mRNK segmentida nechta nukleotid bo'ladi (stop-kodon hisobga olinganda)?",
    options: ["300 ta", "303 ta", "100 ta", "600 ta"],
    answer: 1,
    explanation: "Har bir aminokislotani 3 ta nukleotid kodlaydi (100 * 3 = 300). Translyatsiyani tugatuvchi 1 ta stop-kodon ham 3 nukleotiddan iborat: 300 + 3 = 303 ta."
  },
  {
    question: "Nukleotidlar tarkibidagi uglevod turi DNK va RNKda qanday farqlanadi?",
    options: ["DNKda riboza, RNKda dezoksiriboza", "DNKda dezoksiriboza, RNKda riboza", "Ikkalasida ham glyukoza", "Ikkalasida ham fruktoza"],
    answer: 1,
    explanation: "DNK tarkibida dezoksiriboza qandi, RNK tarkibida esa riboza qandi mavjud."
  },
  {
    question: "Odamda autosoma-retsessiv turda irsiylanadigan kasallikni ko'rsating:",
    options: ["Gemofiliya", "Daltonizm", "Albinizm", "Gipertrixoz"],
    answer: 2,
    explanation: "Albinizm autosomada joylashgan retsessiv gen orqali irsiylanadi. Gemofiliya va daltonizm esa X-xromosomaga birikkan retsessiv kasalliklardir."
  },
  {
    question: "Bakteriya genetik materialining viruslar (bakteriofaglar) orqali boshqa bakteriyaga o'tishi jarayoni nima deyiladi?",
    options: ["Transformatsiya", "Transduksiya", "Konyugatsiya", "Mutatsiya"],
    answer: 1,
    explanation: "Bakteriofaglar vositasida genlarning bir bakteriyadan boshqasiga o'tishi transduksiya deyiladi."
  },
  {
    question: "Geterozigotali (AaBb) organizm necha xil tipdagi gameta hosil qiladi (genlar birikmagan holatda)?",
    options: ["2 xil", "4 xil", "8 xil", "16 xil"],
    answer: 1,
    explanation: "2^n formulasi bo'yicha (n - geterozigota juftlar soni): 2^2 = 4 xil gameta (AB, Ab, aB, ab)."
  },
  {
    question: "Mitoz bo'linishning anafaza bosqichida hujayrada xromosoma va DNK to'plami qanday bo'ladi?",
    options: ["2n 2c", "2n 4c", "4n 4c", "1n 1c"],
    answer: 2,
    explanation: "Anafazada xromatidlar (opa-singil xromosomalar) ajraladi va har biri mustaqil xromosomaga aylanadi, natijada to'plam 4n 4c bo'lib qoladi."
  },
  {
    question: "Ekologiyada 10% qoidasiga (Lindeman qoidasi) ko'ra, har bir trofik darajadan keyingisiga energiya qanday o'tadi?",
    options: ["10% saqlanib, 90% yo'qoladi", "90% o'tadi, 10% yo'qoladi", "50% o'tadi", "100% o'tadi"],
    answer: 0,
    explanation: "Oldingi trofik darajadagi energiyaning taxminan 10% qismi keyingi daraja biomassasiga o'tadi, 90% issiqlik va sarf sifatida yo'qoladi."
  },
  {
    question: "Odam yuragining qaysi kamerasidan kichik qon aylanish doirasi boshlanadi?",
    options: ["Chap qorincha", "O'ng qorincha", "Chap bo'lmacha", "O'ng bo'lmacha"],
    answer: 1,
    explanation: "Kichik (o'pka) qon aylanish doirasi o'ng qorinchadan o'pka arteriyasi poyasi orqali boshlanadi."
  },
  {
    question: "Simbiotik azot fiksatsiyalovchi tuganak bakteriyalari qaysi o'simliklar oilasi ildizida uchraydi?",
    options: ["Murakkabgulshaxslar", "Burchoqdoshlar (Dukkakdoshlar)", "Sho'radoshlar", "Bug'doydoshlar"],
    answer: 1,
    explanation: "Rhizobium turkumidagi tuganak bakteriyalar burchoqdoshlar (dukkakliklar) ildizida simbioz yashaydi."
  },
  {
    question: "Qaysi organoid hujayrada gidrolitik fermentlarni saqlaydi va moddalarni avtoliz (parchalash) vazifasini bajaradi?",
    options: ["Ribosoma", "Lizosoma", "Mitoxondriya", "Golji majmuasi"],
    answer: 1,
    explanation: "Lizosomalar tarkibidagi gidrolitik fermentlar orqali hujayra ichki hazm qilishini va zararlangan qismlarni parchalashni amalga oshiradi."
  },
  {
    question: "DNK zanjiridan mRNK sintezlanish jarayoni nima deyiladi?",
    options: ["Translyatsiya", "Transkripsiya", "Replikatsiya", "Reparatsiya"],
    answer: 1,
    explanation: "DNK qolipida RNK sintezlanishi transkripsiya, mRNK matritsasida oqsil sintezlanishi esa translyatsiya deyiladi."
  },
  {
    question: "Gipofiz bezining oldingi bo'lagidan ajralib chiquvchi bo'y o'sishini ta'minlaydigan gormon qaysi?",
    options: ["Somatotropin", "Oksitotsin", "Vasopressin", "Insulin"],
    answer: 0,
    explanation: "Somatotrop gormoni (STH) suyaklar va to'qimalarning o'sishini rag'batlantiradi."
  },
  {
    question: "Genetika fanining otasi hisoblangan va birinchi marta irsiyat qonuniyatlarini kashf etgan olim kim?",
    options: ["Charlz Darvin", "Gregor Mendel", "Tomas Morgan", "Rikardo Boveri"],
    answer: 1,
    explanation: "Gregor Mendel 1865-yilda noxat o'simligida o'tkazgan tajribalari orqali irsiyatning asosiy qonuniyatlarini ochib bergan."
  },
  {
    question: "Odam qonidagi qaysi hujayralar yadroga ega emas va kislorod tashishga moslashgan?",
    options: ["Leykotsitlar", "Trombotsitlar", "Eritrotsitlar", "Limfotsitlar"],
    answer: 2,
    explanation: "Sutemizuvchilar va odamning yetuk eritrotsitlarida yadro bo'lmaydi, bu esa ko'proq gemoglobin joylashishi va O2 tashilishini ta'minlaydi."
  },
  {
    question: "Glikoliz jarayoni hujayraning qaysi qismida yuz beradi va uning oxirgi mahsulotlari nima?",
    options: ["Mitoxondriya matriksida, CO2 va H2O", "Sitoplazmada (sitozol), Pirat kislota (piruvat) va ATF", "Xloroplastda, Glyukoza va O2", "Yadroda, mRNK va oqsil"],
    answer: 1,
    explanation: "Glikoliz kislorodsiz muhitda sitoplazmada kechib, 1 molekula glyukozadan 2 molekula piruvat va sof 2 molekula ATF hosil bo'ladi."
  },
  {
    question: "Odamda siqilish va stress paytida qaysi bezi gormoni qonga ko'p miqdorda chiqarilib, yurak urishini tezlashtiradi va qon bosimini oshiradi?",
    options: ["Insulin", "Adrenalin", "Tiroksin", "Timozin"],
    answer: 1,
    explanation: "Buyrak usti bezining miya qismidan ajraladigan adrenalin gormoni organizmni shoshilinch holatlarga tayyorlaydi."
  },
  {
    question: "Urug'lanmagan tuxum hujayradan yangi organizmning rivojlanish jarayoni biologiyada nima deb ataladi?",
    options: ["Konyugatsiya", "Partenogenez", "Metamorfoz", "Regeneratsiya"],
    answer: 1,
    explanation: "Partenogenez — jinsiy ko'payishning bir turi bo'lib, bunda urug'lanmagan tuxum hujayradan yangi organizm rivojlanadi (masalan, asalari va shira hasharotlarida)."
  },
  {
    question: "Quyidagilardan qaysi biri prokariot organizmlarga misol bo'la oladi?",
    options: ["Achitqi zamburug'i", "Oddiy amöba", "Bakteriyalar", "Xlamidomunada"],
    answer: 2,
    explanation: "Bakteriyalar va ko'k-yashil suvo'tlar (sianobakteriyalar) shakllangan yadroga ega bo'lmagan prokariot organizmlardir."
  },
  {
    question: "Oqsillar biosintezida anticodon qaysi molekulada joylashadi?",
    options: ["DNK da", "mRNK da", "tRNK da", "rRNK da"],
    answer: 2,
    explanation: "Transport RNK (tRNK) molekulasining maxsus uchligida antikodon bo'lib, u mRNK kodoniga mos ravishda aminokislotani olib keladi."
  },
  {
    question: "Odam organizmida qon ivishida ishtirok etuvchi asosiy oqsil (plazma oqsili) qaysi?",
    options: ["Gemoglobin", "Fibrinogen", "Insulin", "Albumin"],
    answer: 1,
    explanation: "Fibrinogen qon plazmasida erigan holda bo'ladi va qon tomir shikastlanganda fibrin tolalariga aylanib laxta hosil qiladi."
  },
  {
    question: "Gormonlar va ularni ishlab chiqaruvchi bezlar orasidagi mos kelmagan juftlikni toping:",
    options: ["Insulin — Oshqozon osti bezi", "Adrenalin — Buyrak usti bezi", "Tiroksin — Qalqonsimon bez", "Somatotropin — Buyraklar"],
    answer: 3,
    explanation: "Somatotropin (bo'y o'sish gormoni) buyraklar emas, balki bosh miyadagi gipofiz bezining oldingi bo'lagi tomonidan ishlab chiqariladi."
  },
  {
    question: "Xloroplast organoidining ichki suyuqlik muhiti (matriksi) nima deb ataladi?",
    options: ["Stroma", "Krista", "Tilakoid", "Matriks"],
    answer: 0,
    explanation: "Xloroplastning ichki bo'shlig'ini to'ldirib turuvchi suyuqlik stroma deyiladi, unda qorong'ilik bosqich reaksiyalari boradi."
  },
  {
    question: "Monoxromatik (rangni ajrata olmaslik) daltonizm kasalligi qaysi xromosoma orqali irsiylanadi?",
    options: ["Y-xromosoma", "X-xromosoma", "Autosoma (2-juft)", "Autosoma (21-juft)"],
    answer: 1,
    explanation: "Daltonizm va gemofiliya kasalliklari jinsiy X-xromosomaga birikkan holda retsessiv tarzda irsiylanadi."
  },
  {
    question: "O'simliklarda suv va mineral tuzlarning ildizdan poya va barglarga qarab harakatlanishi qaysi to'qima orqali amalga oshiradi?",
    options: ["Floema (loks)", "Ksilema (yog'ochlik)", "Kambiy", "Parrang to'qima"],
    answer: 1,
    explanation: "Ksilema (tomirlar va traxeyalar) orqali suv va erigan mineral moddalar pastdan yuqoriga harakatlanadi."
  },
  {
    question: "Odamda siydik hosil bo'lishining asosiy tarkibiy birligi (funksional birligi) qanday nomlanadi?",
    options: ["Nefron", "Neyron", "Alveola", "Nefridiya"],
    answer: 0,
    explanation: "Nefron buyrakning asosiy tuzilish va funksional birligi bo'lib, qonni filtrlab siydik hosil qiladi."
  },
  {
    question: "Mitoxondriyaning ichki membranasining ichkariga qarab burmalangan qismlari nima deb ataladi?",
    options: ["Stroma", "Krista", "Matriks", "Tilakoid"],
    answer: 1,
    explanation: "Mitoxondriya ichki membranasining burmalari kristalar deb ataladi, ularda ATF sintezlovchi fermentlar joylashgan."
  },
  {
    question: "Quyidagilardan qaysi biri qushlarga xos bo'lgan anatomik belgi hisoblanadi?",
    options: ["Tishlarning mavjudligi", "Terida bezlarning ko'p bo'lishi", "Pnevmatik (kovak) suyaklarning bo'lishi", "Doimiy bo'lmagan tana harorati"],
    answer: 2,
    explanation: "Qushlarning suyaklari ichi kovak (pnevmatik) bo'lib, tana vaznini yengillashtirishga va uchishga moslashgan."
  },
  {
    question: "Achitqi zamburug'lari qaysi turdagi bijg'ish jarayoni orqali energiya hosil qiladi?",
    options: ["Sut kislotali bijg'ish", "Spirtli bijg'ish", "Moy kislotali bijg'ish", "Achchiq bijg'ish"],
    answer: 1,
    explanation: "Achitqi zamburug'lari glyukozani spirtli bijg'itish natijasida etil spirti va CO2 hosil qiladi."
  },
  {
    question: "Odam skeletida miya qutisi nechta toq va juft suyaklardan tashkil topgan?",
    options: ["4 ta toq, 2 ta juft", "2 ta toq, 4 ta juft", "8 ta suyak (hammasi alohida)", "14 ta toq suyak"],
    answer: 0,
    explanation: "Kallaning miya bo'limi 4 ta toq (ensaa, peshona, ponasimon, g'ovak) va 2 ta juft (tepa, chakka) suyaklardan iborat."
  },
  {
    question: "Tabiiy tanlanish tushunchasini ilm-fanga birinchi bo'lib kiritgan va evolyusiya nazariyasini yaratgan olim kim?",
    options: ["Jean-Baptiste Lamarck", "Charles Darwin", "Gregor Mendel", "Robert Hooke"],
    answer: 1,
    explanation: "Charlz Darvin tabiiy tanlanish va yashash uchun kurash evolyutsiyaning asosiy harakatlantiruvchi kuchi ekanligini isbotlagan."
  },
  {
    question: "Odamda me'da shirasining asosiy fermenti bo'lgan va oqsillarni parchalovchi modda qaysi?",
    options: ["Pepsin", "Amilaza", "Lipaza", "Tripsin"],
    answer: 0,
    explanation: "Me'da bezlari ishlab chiqaradigan pepsin fermenti kislotali muhitda oqsillarni pepton va polipeptidlarga parchalaydi."
  },
  {
    question: "Genotipning tashqi muhit sharoitlari ta'sirida o'zgarish xususiyati biologiyada nima deyiladi?",
    options: ["Modifikatsion o'zgaruvchanlik", "Mutatsion o'zgaruvchanlik", "Krossingover", "Kombinativ o'zgaruvchanlik"],
    answer: 0,
    explanation: "Modifikatsion o'zgaruvchanlik genotip o'zgarmagan holda fenotipning muhit sharoitiga qarab o'zgarishidir."
  },
  {
    question: "O'simlik hujayrasini hayvon hujayrasidan farqlovchi asosiy organoid yoki qism qaysi?",
    options: ["Plazmatik membrana", "Hujayra qobig'i (sellyuloza)", "Ribosoma", "Mitoxondriya"],
    answer: 1,
    explanation: "O'simlik hujayralari tashqi tomondan sellyulozadan iborat qattiq hujayra qobig'i (qobiq) bilan o'ralgan bo'ladi."
  },
  {
    question: "Qon guruhlarini aniqlashda qon zardobidagi aglutininlar va eritrotsitlardagi qaysi moddalar o'zaro ta'sirlashadi?",
    options: ["Antigenlar (aglutinogenlar)", "Gormonlar", "Fermentlar", "Vitaminlar"],
    answer: 0,
    explanation: "Eritrotsitlardagi aglutinogenlar (A va B) va plazmadagi aglutininlar ($\alpha$ va $\beta$) o'zaro to'qnashganda aglutinatsiya (qon ivishi) yuz beradi."
  },
  {
    question: "Baliqlarning suv ostida muvozanat saqlashi va chuqurlikni boshqarishida qaysi organ muhim rol o'ynaydi?",
    options: ["Yon chiziq organi", "Suzish pufagi", "Jabra qopqog'i", "Buyrak"],
    answer: 1,
    explanation: "Suzish pufagi gazlar hajmini o'zgartirish orqali baliqning suv qatlamida suzib yurishini va muvozanatini ta'minlaydi."
  },
  {
    question: "DNK replikatsiyasi jarayoni qaysi ferment yordamida amalga oshiriladi va yangi zanjir sintezlanadi?",
    options: ["RNK-polimeraza", "DNK-polimeraza", "Amilaza", "Pepsin"],
    answer: 1,
    explanation: "DNK-polimeraza fermenti eski zanjir nusxasiga qarab komplementar asosda yangi DNK zanjirini ulab boradi."
  },
  {
    question: "Odam organizmida immun tizimining asosiy markaziy organi bo'lib, limfotsitlar yetiladigan bez qaysi?",
    options: ["Buyrak usti bezi", "Timus (ayrisimon bez)", "Qalqonsimon bez", "Me'da osti bezi"],
    answer: 1,
    explanation: "Timus (ayrisimon bez) T-limfotsitlarning yetilishida va immunologik nazoratda asosiy rol o'ynaydi."
  },
  {
    question: "Biogeosenozda produtsentlar vazifasini bajaruvchi organizmlarni ko'rsating:",
    options: ["O'txo'r hayvonlar", "Yashil o'simliklar", "Bakteriyalar va zamburug'lar", "Yirtqich hayvonlar"],
    answer: 1,
    explanation: "Produtsentlar noorganik moddalardan organik modda yaratuvchi autotrof organizmlar (yashil o'simliklar) hisoblanadi."
  },
  {
    question: "Odamda ko'zning yorug'lik nurlarini sindiruvchi asosiy qismi (linzasi) qaysi?",
    options: ["To'r parda", "Garov parda", "Gavhar (xrustalik)", "Shishasimon tana"],
    answer: 2,
    explanation: "Gavhar (xrustalik) va shox parda yorug'lik nurlarini sindirib, to'r pardada tasvir hosil bo'lishini ta'minlaydi."
  },
  {
    question: "Genlar tirik organizmlarda qanday tartibda joylashgan?",
    options: ["Xromosomalarda tartibsiz sochilgan", "Xromosomalarda chiziqli tartibda ketma-ket joylashgan", "Faqat sitoplazmada halqa shaklida", "Faqat ribosomalarda"],
    answer: 1,
    explanation: "Morgan qoidasiga ko'ra, genlar xromosomalarda ma'lum bir chiziqli tartibda joylashgan bo'ladi."
  },
  {
    question: "Atmosferadagi azotning o'simliklar o'zlashtira oladigan shaklga o'tishida qaysi mikroorganizmlar muhim rol o'ynaydi?",
    options: ["Zamburug'lar", "Tuganak bakteriyalar", "Achitqilar", "Viruslar"],
    answer: 1,
    explanation: "Dukkakli o'simliklar ildizida yashovchi tuganak bakteriyalar havodagi erkin azotni birikmalarga aylantiradi."
  },
  {
    question: "Odamning bosh miya yarim sharlari po'stlog'ida ko'rish markazi qaysi bo'lakda joylashgan?",
    options: ["Peshona bo'lagi", "Tepa bo'lagi", "Ensa bo'lagi", "Chakka bo'lagi"],
    answer: 2,
    explanation: "Ko'rish sezgi zonalari bosh miyaning ensa bo'lagida joylashgan bo'lib, ko'zdan kelgan signallarni tahlil qiladi."
  },
  {
    question: "Viruslar hujayra tuzilishiga ega emas, ularning asosiy tarkibiy qismlari nimadan iborat?",
    options: ["Sitoplazma va yadro", "DNK yoki RNK va oqsil qobiq (kapsid)", "Mitoxondriya va ribosoma", "Hujayra devori va plastidalar"],
    answer: 1,
    explanation: "Viruslar faqat genetik material (DNK yoki RNK) hamda ularni o'rab turuvchi oqsil qobiqdan (kapsiddan) iborat."
  },
  {
    question: "O'simliklarda barg og'izchalarining ochilishi va yopilishi asosan qaysi modda va jarayonga bog'liq?",
    options: ["Suv bosimi (turgor) va kaltsiy ionlari", "Suvning osmotik bosqichi va turgorning o'zgarishi", "Faqat harorat", "Kislorod miqdori"],
    answer: 1,
    explanation: "Og'izcha hujayralarida turgor bosqichining ortishi ularning ochilishiga, turgor tushishi esa yopilishiga olib keladi."
  }
];
