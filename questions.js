const questions = [
  {
    question: "O'simliklarda barglarning ustki qismini qoplab turuvchi va suv bug'lanishidan saqlovchi yupqa shaffof qatlam qanday ataladi?",
    options: ["Kutikula (mum qatlami)", "Kambiy", "Probka", "Ksilema"],
    topic: "Botanika",
    answer: 0,
    explanation: "Epidermis ustidan ajralib chiquvchi mumsimon modda — kutikula barglarni ortiqcha transpiratsiyadan himoya qiladi."
  },
  {
    question: "Baliqlardagi yon chiziq organining vazifasi nima?",
    options: ["Kislorodni qonga o'tkazish", "Suv oqimi va bosim o'zgarishini sezish", "Tovush chiqarish", "Ozuqani hidlash"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Yon chiziq kanalidagi sezuvchi hujayralar suv tebranishi va oqimini qabul qiladi, bu baliqqa to'dada yurishda va dushmandan qochishda yordam beradi."
  },
  {
    question: "Bakteriyalar va boshqa prokariotlarda genetik axborot asosan qaysi tuzilmada joylashgan?",
    options: ["Shakllangan yadroda", "Xromosomalar majmuida (2n)", "Mitoxondriyalarda", "Halqa shaklidagi bitta DNK molekulasida (nukleoid)"],
    topic: "Genetika",
    answer: 3,
    explanation: "Prokariotlarda yadro qobig'i yo'q, ularning irsiy axboroti sitoplazmada erkin joylashgan halqasimon yalang'och DNK (nukleoid) da saqlanadi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada genlar chastotasining tasodifiy omillar tufayli o'zgarishi qanday nomlanadi?",
    options: ["Mutatsiya", "Krossingover", "Genlar dreyfi", "Transkripsiya"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Genlar dreyfi — populyatsiyada tasodifiy voqealar tufayli ayrim allellarning chastotasi o'zgarib ketish hodisasidir."
  },
  {
    question: "Transkripsiya jarayonida RNK-polimeraza qanday ishlaydi?",
    options: ["RNKni 5'->3' yo'nalishda sintezlaydi, matritsa DNK zanjirini 3'->5' yo'nalishda o'qiydi", "RNKni 3'->5' yo'nalishda sintezlaydi, matritsa DNK zanjirini 5'->3' yo'nalishda o'qiydi", "DNKning ikkala zanjiridan bir vaqtda bitta RNK sintezlaydi", "Primer talab qiladi va Okazaki fragmentlari hosil qiladi"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Yangi nukleotidlar faqat 3' uchga qo'shiladi, shuning uchun RNK 5'->3' yo'nalishda o'sadi; matritsa zanjiri unga antiparallel o'qiladi."
  },
  {
    question: "Genetika fanida ota-ona organizmning irsiy belgilari to'plami nima deb ataladi?",
    options: ["Fenotip", "Genotip", "Kariotip", "Genom"],
    topic: "Genetika",
    answer: 1,
    explanation: "Genotip — organizmdagi barcha genlarning yig'indisi bo'lib, u tashqi muhit bilan birgalikda fenotipni shakllantiradi."
  },
  {
    question: "Odam askaridasi lichinkasining organizm ichidagi migratsiya yo'li qaysi javobda to'g'ri ko'rsatilgan?",
    options: ["Ichak - limfa - miya - yurak - ichak", "Ichak - jigar - buyrak - siydik pufagi - ichak", "Teri - qon - o'pka - halqum - ichak", "Ichak - qon - jigar - yurak - o'pka - halqum - yutilib, yana ichak"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Tuxum yutilgach, lichinka ichak devoridan qonga o'tib, jigar va yurak orqali o'pkaga boradi, yo'talgandan keyin yutilib, ichakda voyaga yetadi."
  },
  {
    question: "Odamda yurak siklining umumiy davomiyligi o'rtacha 0.8 soniyani tashkil etsa, shundan qancha qismi bo'lmachalar qisqarishiga to'g'ri keladi?",
    options: ["0.3 soniya", "0.4 soniya", "0.1 soniya", "0.8 soniya"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Yurak siklida bo'lmachalar qisqarishi 0.1 s, qorinchalar qisqarishi 0.3 s, umumiy tanaffus (pauza) esa 0.4 soniyani tashkil qiladi."
  },
  {
    question: "Odamda qalqonsimon bez tomonidan ishlab chiqariladigan va organizmda asosiy moddalar almashinuvini (energiya almashinuvini) boshqaruvchi yod saqlovchi gormon qaysi?",
    options: ["Tiroksin (va triyodtironin)", "Insulin", "Adrenalin", "Paratgormon"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Tiroksin gormoni tarkibida yod bo'lib, u barcha to'qimalarda moddalar almashinuvi tezligini va energiya hosil bo'lishini boshqaradi."
  },
  {
    question: "O'simliklarda barglar va poyalarning qari qismlarini tashqi muhitdan himoya qiluvchi va qalin qoplamani hosil qiluvchi to'qima qanday nomlanadi?",
    options: ["Epidermis", "Kambiy", "Ksilema", "Probka (periderm) va qobiq"],
    topic: "Botanika",
    answer: 3,
    explanation: "O'simliklar ulg'aygach, epidermis o'rnini qalin va o'lik hujayralardan iborat probka (periderm) qoplovchi to'qimasi egallaydi."
  },
  {
    question: "Odamda yurak-qon tomir tizimida qonning eng sekin harakatlanadigan va moddalar almashinuvi to'g'ridan-to'g'ri to'qimalar bilan sodir bo'ladigan qismi qaysi?",
    options: ["Arteriyalar", "Venalar", "Kapilyarlar", "Aorta"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Kapilyarlarning devori bir qavat epiteliy hujayralaridan iborat bo'lib, qon oqimi u yerda sekinlashadi va gazlar hamda ozuqa moddalar almashinadi."
  },
  {
    question: "Odamda oziq moddalarni parchalovchi fermentlar ishlab chiqaruvchi va ovqat hazm qilishda eng yirik bez hisoblangan organ qaysi?",
    options: ["Oshqozon", "Jigar", "Buyrak", "Taloq"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Jigar organizmdagi eng yirik bez bo'lib, safro ishlab chiqaradi va moddalar almashinuvida muhim markaziy rol o'ynaydi."
  },
  {
    question: "O'simliklarda suvning ildizdan so'rilishini ta'minlovchi asosiy fizik hodisa qaysi?",
    options: ["Magnit tortishish", "Faqat mexanik bosim", "Osmos va diffuziya", "Elektr toki"],
    topic: "Botanika",
    answer: 2,
    explanation: "Ildiz tukchalaridagi hujayra shirasining konsentratsiyasi yuqori bo'lgani uchun tuproqdagi suv osmos qonuniga ko'ra ichkariga o'tadi."
  },
  {
    question: "Lansetnikning qon aylanish tizimi qanday tuzilgan?",
    options: ["Ochiq, yuragi ikki kamerali", "Yopiq, yuragi uch kamerali", "Ochiq, yuragi yo'q", "Yopiq, yuragi yo'q"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Lansetnikda qon aylanish tizimi yopiq, yurak yo'q; qorin aortasi qon haydovchi vazifani bajaradi."
  },
  {
    question: "Libix qonuniga (minimum qonuni) ko'ra o'simlik hosildorligini qaysi omil belgilaydi?",
    options: ["Miqdori optimaldan eng ko'p chetga chiqqan, minimumdagi omil", "Eng ko'p miqdordagi omil", "Haroratning o'rtacha ko'rsatkichi", "Yorug'lik, qanday bo'lmasin"],
    topic: "Ekologiya",
    answer: 0,
    explanation: "Organizm hayoti eng yetishmaydigan (cheklovchi) omil bilan belgilanadi, boshqa omillar mo'l bo'lsa ham."
  },
  {
    question: "Genetika fanida nuklein kislotalarning (DNK) monomeri nima deb ataladi?",
    options: ["Aminokislota", "Nukleotid", "Monosaxarid", "Glikogen"],
    topic: "Genetika",
    answer: 1,
    explanation: "Har bir DNK zanjiri azotli asos, dezoksiriboza va fosfat guruhidan iborat nukleotid monomerlarining birikishidan hosil bo'ladi."
  },
  {
    question: "Kalvin siklida CO2 ni biriktiruvchi ferment va dastlabki barqaror mahsulot qaysi javobda to'g'ri ko'rsatilgan?",
    options: ["ATP-sintaza; glyukoza", "Katalaza; kraxmal", "RuBisKO fermenti; 3-fosfoglitserat kislota", "Gekzokinaza; PVK"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "RuBisKO CO2 ni ribuloza-1,5-bifosfatga biriktiradi va beqaror 6 uglerodli birikma darhol ikkita 3-fosfoglitserat molekulasiga bo'linadi."
  },
  {
    question: "Oziq zanjiri: o't → quyon → tulki → burgut. Lindeman qoidasiga (10%) ko'ra burgut biomassasi 5 kg bo'lsa, shu zanjirni ta'minlash uchun kamida qancha o't biomassasi kerak?",
    options: ["500 kg", "5000 kg", "50 000 kg", "50 kg"],
    topic: "Ekologiya",
    answer: 1,
    explanation: "Har bir pog'onada biomassa 10 marta ortib boradi: burgut 5 kg → tulki 50 kg → quyon 500 kg → o't 5000 kg."
  },
  {
    question: "Kavsh qaytaruvchi hayvonlar oshqozonining tuzilishi va ularda selluloza qanday hazm bo'ladi?",
    options: ["Ikki bo'limli; selluloza oshqozon shirasidagi tripsin bilan parchalanadi", "To'rt bo'limli; selluloza yo'g'on ichakda o't kislotasi bilan parchalanadi", "Bir bo'limli; selluloza so'lak amilazasi bilan parchalanadi", "To'rt bo'limli; selluloza katta qorinda simbiont mikroorganizmlar yordamida parchalanadi"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Kavsh qaytaruvchilarda sellulozani parchalovchi fermentlar yo'q; uni katta qorindagi bakteriyalar va infuzoriyalar parchalaydi."
  },
  {
    question: "Krossingover meyozning qaysi bosqichida sodir bo'ladi?",
    options: ["Profaza I", "Anafaza II", "Metafaza I", "Telofaza II"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Profaza I da gomologik xromosomalar konyugatsiyalanib, o'zaro uchastkalar almashadi."
  },
  {
    question: "O'simliklarda ildizning tuproqqa kirib borishini ta'minlovchi va uni shikastlanishdan asrovchi qism qanday nomlanadi?",
    options: ["Kambiy halqasi", "Ildiz tukchalari", "O'tkazuvchi zona", "Ildiz qalpog'i (chexlik)"],
    topic: "Botanika",
    answer: 3,
    explanation: "Ildiz qalpog'i ildiz uchidagi nozik hujayralarni tuproq zarralari bilan to'qnashganda mexanik shikastlanishdan himoya qiladi."
  },
  {
    question: "Suvning ildizdan tanasi bo'ylab yuqoriga ko'tarilishida asosiy harakatlantiruvchi kuch nima?",
    options: ["Barglarda hosil bo'ladigan ildiz bosimi", "Barglardagi transpiratsiya natijasida hosil bo'ladigan so'rish kuchi va suv molekulalari orasidagi kogeziya", "Quyosh nurining to'g'ridan-to'g'ri itaruvchi kuchi", "Yer tortishish kuchi"],
    topic: "Botanika",
    answer: 1,
    explanation: "Barglardan suv bug'langanda ksilemadagi suv ustuni uzluksiz tortiladi, kogeziya va adgeziya kuchlari uni uzilmasdan ushlab turadi."
  },
  {
    question: "Odam organizmida qon bosimining pasayib ketishiga qarshi javoban qaysi gormon yoki moddalar tizimi faollashadi?",
    options: ["Faqat insulin", "Faqat tiroksin", "Renin-angiotensin-aldosteron tizimi va adrenalin", "Faqat safro suyuqligi"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Qon bosimi tushganda buyrak renin ajratib, qon tomirlarini toraytiruvchi va bosimni ko'taruvchi angiotensin-aldosteron tizimini faollashtiradi."
  },
  {
    question: "Odam organizmida erkak jinsiy hujayralari — spermatozoyidlar yetilib chiqadigan va harakatchanligini ta'minlaydigan asosiy organ qanday ataladi?",
    options: ["Urug'don (testikula) va uning ortig'i", "Prostata bezi", "Siydik pufagi", "Buyrak usti bezi"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Spermatozoyidlar urug'donlarda hosil bo'lib, ularning ortig'ida yetiladi va harakatlanish xususiyatiga ega bo'ladi."
  },
  {
    question: "Evolyutsiya nazariyasida atavizm deb nimaga aytiladi?",
    options: ["Hozirgi kunda yo'qolib ketgan organlar", "Faqat o'simliklarga xos o'simtalar", "Organlarning o'z vazifasini yo'qotishi", "Uzoq ajdodlarida bo'lgan, ammo hozirgi avlodlarda tasodifan namoyon bo'ladigan belgilar"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Atavizmlar (masalan, odamda ko'p emiziklilik yoki dumlilik) uzoq ajdodlarga xos belgilarning ayrim hollarda qayta yuzaga chiqishidir."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi ichki organlar faoliyatini va vegetativ funksiyalarni boshqarishda eng asosiy markaz hisoblanadi?",
    options: ["Faqat miyacha", "Uzunchoq miya va oraliq miya", "Faqat yirik yarim sharlar po'stlog'i", "Faqat ensa bo'lagi"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Uzunchoq miya va oraliq miya hayotiy muhim vegetativ reflekslarni (nafas, qon aylanish, hazm qilish) boshqaradi."
  },
  {
    question: "Odam organizmida erkak jinsiy gormoni bo'lgan testosteron asosan qayerda ishlab chiqariladi?",
    options: ["Urug'donlarda (testikullarda)", "Prostata bezida", "Gipofizda", "Buyrak usti bezida"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Testosteron asosan urug'donlarning Leydig hujayralari tomonidan ishlab chiqariladi va ikkilamchi jinsiy belgilarni boshqaradi."
  },
  {
    question: "Odam organizmida qon shakarining (glyukoza) miqdori normadan oshib ketganda uni kamaytirish uchun qaysi organ va gormon faollashadi?",
    options: ["Jigar va adrenalin", "Buyrak va vasopressin", "Oshqozon osti bezi va insulin gormoni", "Qalqonsimon bez va tiroksin"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Qondagi glyukoza ko'payganda oshqozon osti bezining beta-hujayralari insulin ajratib, ortiqcha qandni to'qimalarga va jigarga glikogen shaklida zaxiraga oldiradi."
  },
  {
    question: "O'simliklarda suv bug'lanishini (transpiratsiyani) kamaytiruvchi moslanishlarga qaysilar kiradi?",
    options: ["Barglarning tikan yoki mum qoplami bilan qoplanishi", "Barg yuzasining haddan tashqari kengayishi", "Og'izchalarning doim ochiq turishi", "Ildizning yo'qligi"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "Qurg'oqchlik sharoitida o'simliklar barglarini tikanga aylantiradi yoki qalin mum qoplami hosil qilib suvni tejashga moslashadi."
  },
  {
    question: "Suyakli baliqlar jabrasida suv va qon qarama-qarshi yo'nalishda oqadi. Bu qarama-qarshi oqim tizimining ahamiyati nima?",
    options: ["Suvning jabradan o'tish tezligi oshadi", "Jabra bo'ylab doimiy konsentratsiya gradienti saqlanib, kislorod ko'proq o'zlashtiriladi", "Qon bosimi pasayib, yurak yengil ishlaydi", "Karbonat angidrid umuman ajralmaydi"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Qarama-qarshi oqimda qon bo'ylab suvdagi kislorod miqdori doim qondagidan yuqori bo'lib turadi, shuning uchun 80% gacha kislorod o'zlashtiriladi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismida tana harorati, uyg'onish va uxlash sikllarini boshqaruvchi markazlar joylashgan?",
    options: ["Miyacha", "Uzunchoq miya", "Oraliq miya (gipotalamus va talamus)", "Ensa bo'lagi"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Oraliq miya uyqu va uyg'onish, ishtaha, harorat kabi ko'plab fiziologik jarayonlarni muvofiqlashtiradi."
  },
  {
    question: "O'simliklarda barglar va poyalarning yuzasini qoplab turuvchi tirik hujayrali asosiy qoplovchi to'qima qanday ataladi?",
    options: ["Kambiy", "Probka", "Ksilema", "Epidermis"],
    topic: "Botanika",
    answer: 3,
    explanation: "Epidermis — barg va yosh novdalarni tashqi muhitdan o'rab turuvchi, gaz almashinuvi va transpiratsiyani tartibga soluvchi asosiy qoplovchi to'qima."
  },
  {
    question: "Turli kelib chiqishli organizmlarda o'xshash yashash sharoitiga moslashish tufayli o'xshash belgilar paydo bo'lishiga nima deyiladi?",
    options: ["Divergensiya", "Parallelizm", "Konvergensiya", "Ontogenez"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Masalan, akula (baliq) va delfin (sutemizuvchi) tana shakli suvda tez suzishga moslashgani uchun o'xshash; bu konvergensiyaga misol."
  },
  {
    question: "Odamda buyraklar faoliyatining neyrogumoral boshqaruvida suvning qonga qayta so'rilishini (reabsorbsiyasini) kuchaytiruvchi gormon qaysi?",
    options: ["Insulin", "Adrenalin", "Somatotropin", "Vasopressin (antidiuretik gormon - ADG)"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Gipofizning orqa bo'lagidan ajraladigan vasopressin (ADG) buyrak naychalarida suvning qayta so'rilishini kuchaytirib, siydik miqdorini kamaytiradi."
  },
  {
    question: "Yalang'och qoyatosh yuzasida birlamchi sukkessiyani qaysi organizmlar boshlab beradi?",
    options: ["Ignabargli daraxtlar", "Lishayniklar", "Qalin o'tli o'simliklar", "Sutemizuvchi hayvonlar"],
    topic: "Ekologiya",
    answer: 1,
    explanation: "Pioner organizmlar — lishayniklar kislotalar ajratib toshni yemiradi va dastlabki tuproq hosil qiladi, keyin moxlar, o'tlar, butalar va daraxtlar keladi."
  },
  {
    question: "Odamda qon guruhlarini aniqlashda I (O) qon guruhiga ega shaxslar eritrotsitlarida qanday aglyutinogenlar mavjud?",
    options: ["Aglyutinogenlar umuman yo'q", "Faqat A", "Faqat B", "Ham A, ham B"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "I (O) qon guruhi eritrotsitlarida A va B aglyutinogenlari bo'lmagani uchun uni universal donor deyishadi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi ko'z qorachig'ining yorug'likka reaksiyasini va yutinish jarayonining avtomatik reflekslarini boshqaradi?",
    options: ["Miyacha", "Peshona bo'lagi", "Orqa miya", "O'rta miya"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "O'rta miya ko'z qorachig'i kattalashishi yoki kichrayishini hamda yutinish kabi avtomatik harakat reflekslarini tartibga soladi."
  },
  {
    question: "Genetika fanida nuklein kislotalardan biri bo'lgan DNK molekulasining monomeri nima deb ataladi?",
    options: ["Aminokislota", "Nukleotid", "Monosaxarid", "Glikogen"],
    topic: "Genetika",
    answer: 1,
    explanation: "DNK zanjiri azotli asos, dezoksiriboza va fosfat guruhidan iborat millionlab nukleotid monomerlarining birikishidan hosil bo'ladi."
  },
  {
    question: "Tasmasimon chuvalchanglarda (masalan, qoramol solityorida) quyidagi organ sistemalaridan qaysi biri butunlay yo'qolgan?",
    options: ["Hazm qilish sistemasi", "Jinsiy sistema", "Nerv sistemasi", "Ayirish sistemasi (protonefridiylar)"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Parazit hayot kechirish tufayli ichak yo'qolgan: ozuqa xo'jayin ichagidan tana yuzasi orqali so'riladi, jinsiy sistema esa juda kuchli rivojlangan."
  },
  {
    question: "Molekulyar biologiyada mRNKdagi stop-kodonlarga (UAA, UAG, UGA) to'g'ri keluvchi tRNK antikodonlari mavjud emasligi nimani anglatadi?",
    options: ["Oqsil sintezi davom etaveradi", "Aminokislota zanjiri ikkiga bo'linib ketadi", "Translyatsiya jarayoni shu yerda yakunlanadi (tugallanadi)", "DNK parchalanib ketadi"],
    topic: "Genetika",
    answer: 2,
    explanation: "Stop-kodonlar aminokislotani kodlamaydi, balki translyatsiya jarayonini yakunlab, tayyor oqsil zanjirining ribosomadan ajralishini ta'minlaydi."
  },
  {
    question: "Odam organizmida suv va tuz almashinuvini boshqaruvchi hamda buyrak naychalarida suvning qayta so'rilishini kuchaytiruvchi gormon qaysi?",
    options: ["Vasopressin (antidiuretik gormon - ADG)", "Insulin", "Testosteron", "Adrenalin"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Gipofiz tomonidan ajratiladigan vasopressin buyrakda suvni ushlab qolib, siydik miqdorini kamaytiradi."
  },
  {
    question: "Biotsenoz (tirik organizmlar yig'indisi) va uning yashash joyi — biotop birgalikda nima deb ataladi?",
    options: ["Populyatsiya", "Biosfera", "Biogeosenoz (ekotizim)", "Areal"],
    topic: "Ekologiya",
    answer: 2,
    explanation: "Biotsenoz + biotop = biogeosenoz (ekotizim) — moddalar aylanishi va energiya oqimi kuzatiladigan birlik."
  },
  {
    question: "Marvarid asosan nimadan tashkil topgan?",
    options: ["Xitin va kaltsiy fosfat", "Kremniy dioksidi va keratin", "Selluloza va kaltsiy oksalat", "Kaltsiy karbonat (aragonit) va konxiolin oqsili"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Mantiya epiteliysi ajratadigan sedef (marvarid) kaltsiy karbonat kristallari va konxiolin oqsilidan iborat, u begona zarra atrofida qatlam-qatlam o'raladi."
  },
  {
    question: "Odam organizmida limfa tugunlari qanday asosiy biologik vazifani bajaradi?",
    options: ["Qonni qizdiradi", "Biologik filtr vazifasini bajarib, mikroblarni ushlab qoladi va limfotsitlar ishlab chiqaradi", "Yog'larni to'liq parchalaydi", "Faqat kislorod tashiydi"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Limfa tugunlari limfani filtrlash va organizm immunitetini ta'minlashda asosiy to'siq hisoblanadi."
  },
  {
    question: "Biogeosenozda ozuqa zanjirining to'g'ri ketma-ketligini ko'rsating:",
    options: ["Yirtqichlar -> O'simliklar -> Herbivorlar", "Redutsentlar -> O'simliklar -> Quyosh", "Faqat mikroorganizmlar -> O'simliklar", "Produtsentlar (o'simliklar) -> Konsumentlar (o'txo'rlar) -> Yirtqichlar -> Redutsentlar"],
    topic: "Ekologiya",
    answer: 3,
    explanation: "Ozuqa zanjiri doimo yashil o'simliklardan (produtsentlardan) boshlanib, o'txo'r va yirtqich hayvonlar orqali parchalovchilarga (redutsentlarga) borib taqaladi."
  },
  {
    question: "Odam organizmida qon shakarini boshqaruvchi ikkita asosiy gormon ishlab chiqaruvchi bez qaysi?",
    options: ["Buyrak usti bezi", "Oshqozon osti bezi (insulin va glyukagon)", "Gipofiz", "Qalqonsimon bez"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Oshqozon osti bezi insulin va glyukagon gormonlarini ishlab chiqarib, qonda glyukoza miqdorini doimiy me'yorda saqlaydi."
  },
  {
    question: "Gidraning himoya va hujum vazifasini bajaruvchi hujayralari qaysilar?",
    options: ["Chaqaruvchi hujayralar", "Oraliq hujayralar", "Epiteliy-mushak hujayralari", "Nerv hujayralari"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Chaqaruvchi hujayralardagi zaharli iplar o'ljani falajlaydi, ular asosan paypaslagichlarda joylashgan."
  },
  {
    question: "Biogeosenozda trofik darajalar (oziq zanjiri pog'onalari) bo'ylab energiya o'tishida ekologik qoida bo'yicha taxminan qancha energiya keyingi pog'onaga o'tadi?",
    options: ["100%", "Faqat 1%", "Taxminan 10%", "50%"],
    topic: "Ekologiya",
    answer: 2,
    explanation: "Lindman qoidasiga (10% qoidasiga) ko'ra, har bir yuqori trofik pog'onaga oldingi pog'ona energiyasining atigi 10 foizigina o'tadi."
  },
  {
    question: "Tuproqda ammoniy tuzlarining nitritlarga, so'ngra nitratlarga aylanishi qanday ataladi?",
    options: ["Denitrifikatsiya", "Ammonifikatsiya", "Molekulyar azotni biriktirish", "Nitrifikatsiya"],
    topic: "Ekologiya",
    answer: 3,
    explanation: "Nitrifikatsiya — nitrifikatsiyalovchi bakteriyalar (Nitrosomonas, Nitrobacter) tomonidan amalga oshiriladi. Denitrifikatsiyada esa nitratlar erkin azotgacha qaytariladi."
  },
  {
    question: "Molekulyar biologiyada mRNK sintezlanish jarayoni (transkripsiya) qaysi ferment yordamida amalga oshiriladi?",
    options: ["DNK-polimeraza", "Amilaza", "RNK-polimeraza", "Lipaza"],
    topic: "Genetika",
    answer: 2,
    explanation: "RNK-polimeraza fermenti DNK zanjirining muayyan qismiga birikib, komplementarlik prinsipi asosida uning nusxasini — mRNK molekulasini sintezlaydi."
  },
  {
    question: "Mollyuskalar orasida eng murakkab asab tizimi va yaxshi rivojlangan ko'zlar qaysi sinfda uchraydi?",
    options: ["Boshoyoqlilar", "Ikki pallalilar", "Qorinoyoqlilar", "Xitonlar"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Boshoyoqlilar (sakkizoyoq, kalmar) yuqori darajada rivojlangan bosh miya va murakkab ko'zlarga ega."
  },
  {
    question: "O'simliklarda generativ organ hisoblangan gulning o'zak qismlari va barglari biriktirilgan kengaygan qismi qanday ataladi?",
    options: ["Tuguncha", "Gul o'rni", "Changchi", "Urug'chi"],
    topic: "Botanika",
    answer: 1,
    explanation: "Gul o'rni — poyaning kengaygan qismi bo'lib, uning ustida kosa yaproqlar, toj yaproqlar, changchi va urug'chilar joylashadi."
  },
  {
    question: "Hujayra bo'linishining mitoz jarayonida xromosomalarning spirallashib, zichlashishi va yadro qobig'ining erib ketishi qaysi bosqichda sodir bo'ladi?",
    options: ["Metafaza", "Anafaza", "Telofaza", "Profaza"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Profazada xromosomalar qisqarib qalinlashadi, yadrocha va yadro qobig'i yo'qolib, bo'linish dukchasi hosil bo'la boshlaydi."
  },
  {
    question: "Odamda qon aylanishining kichik doirasi qayerdan boshlanib qayerda tugaydi?",
    options: ["Chap qorincha — Chap bo'lmacha", "O'ng qorincha — Chap bo'lmacha", "Chap qorincha — O'ng bo'lmacha", "O'ng qorincha — O me bo'lmacha"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Kichik qon aylanish doirasi o'ng qorinchadan chiqib, o'pka kapilyarlarida kislorodga boyib, chap bo'lmachaga kelib tugaydi."
  },
  {
    question: "Odamda qon guruhlari sistemasida IV (AB) qon guruhiga ega bo'lgan shaxslarning zardobida qanday aglyutininlar mavjud?",
    options: ["Faqat alfa", "Faqat beta", "Aglyutininlar umuman yo'q", "Ham alfa, ham beta"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "IV qon guruhida eritrotsitlarda A va B aglyutinogenlar bo'lib, zardobda aglyutininlar (alfa va beta) bo'lmaydi."
  },
  {
    question: "Genetika fanida digibrid chatishtirishda (ikkita belgi bo'yicha) F2 avlodda fenotip bo'yicha ajralish nisbati qanday bo'ladi (Mendelning 3-qonuni)?",
    options: ["9:3:3:1", "3:1", "1:2:1", "1:1"],
    topic: "Genetika",
    answer: 0,
    explanation: "Mendelning uchinchi qonuniga ko'ra, ikki juft muqobil belgilar bo'yicha geterozigota organizmlar chatishtirilganda F2 da 9:3:3:1 nisbatda fenotipik ajralish yuz beradi."
  },
  {
    question: "Biogeosenozda ozuqa zanjirining ikkinchi pog'onasini (birinchi tartibli konsumentlarni) odatda qanday organizmlar tashkil etadi?",
    options: ["Yirtqichlar", "O'txo'r hayvonlar (herbivorlar)", "Yashil o'simliklar", "Bakteriyalar"],
    topic: "Ekologiya",
    answer: 1,
    explanation: "O'simliklar bilan oziqlanadigan o'txo'r hayvonlar ozuqa zanjirida produtsentlardan keyingi birinchi tartibli konsumentlardir."
  },
  {
    question: "Odam organizmida limfa suyuqligining harakati qaysi omillar ta'sirida amalga oshiriladi?",
    options: ["Skelet mushaklarining qisqarishi, tomir qopqoqlari va nafas olish harakatlari", "Faqat yurakning qisqarish kuchi", "Faqat buyrak bosimi", "Faqat qon aylanish tezligi"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Limfa tomirlarida yurak kabi nasos yo'q, shuning uchun limfa mushaklarning qisqarishi va tomir ichidagi bir tomonlama qopqoqlar yordamida harakatlanadi."
  },
  {
    question: "O'simliklarda barglar va poyalarning qoplovchi to'qimasi shikastlanganda uning o'rnini qoplaydigan va qalinlashtiradigan ikkilamchi qoplovchi to'qima qaysi?",
    options: ["Epidermis", "Kambiy", "Ksilema", "Probka (periderm)"],
    topic: "Botanika",
    answer: 3,
    explanation: "O'simliklar yo'g'onlashganda epidermis o'rnini probka (periderm) qoplovchi to'qimasi egallaydi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada genlar chastotasining mutlaqo tasodifiy omillar ta'sirida o'zgarishi qanday ataladi?",
    options: ["Tabiiy tanlanish", "Krossingover", "Genlar dreyfi", "Transkripsiya"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Genlar dreyfi tasodifiy omillar natijasida allellar chastotasining avloddan-avlodga keskin tebranishidir."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi muvozanatni saqlash va harakatlarni aniq muvofiqlashtirish uchun mas'ul?",
    options: ["Uzunchoq miya", "Oraliq miya", "Peshona bo'lagi", "Miyacha"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Miyacha mushaklar faoliyatini muvofiqlashtirib, tana muvozanatini boshqarishda asosiy rol o'ynaydi."
  },
  {
    question: "Molekulyar biologiyada mRNK dagi genetik kodning universal xususiyati nimani anglatadi?",
    options: ["Barcha tirik organizmlarda bir xil kodonlar bir xil aminokislotalarni kodlashini", "Faqat bitta turga xos ekanligini", "Kodonlarning doim o'zgarib turishini", "Oqsillarning mutlaqo har xil tuzilishini"],
    topic: "Genetika",
    answer: 0,
    explanation: "Genetik kodning universalligi shundan iboratki, bakteriyadan tortib odamgacha barcha tirik organizmlarda bir xil tripletlar bir xil aminokislotalarni belgilaydi."
  },
  {
    question: "Molekulyar biologiyada mRNK molekulasidagi uchlik nukleotidlar (kodonlar) soni 300 ta bo'lsa, uning asosida sintezlanadigan oqsil molekulasidagi aminokislotalar soni nechta bo'ladi?",
    options: ["100 ta", "300 ta", "900 ta", "150 ta"],
    topic: "Genetika",
    answer: 1,
    explanation: "Har bir kodon bitta aminokislotani kodlaydi, shuning uchun 300 ta kodon 300 ta aminokislotadan iborat oqsilni hosil qiladi (stop-kodonlarni hisobga olmaganda asosiy qism)."
  },
  {
    question: "Odamda nafas olish markazi bosh miyaning qaysi qismida joylashgan?",
    options: ["Miyacha", "Peshona bo'lagi", "Uzunchoq miya", "Orqa miya"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Uzunchoq miyada nafas olish, yurak-qon tomir faoliyati va ovqat hazm qilishni boshqaruvchi avtomatik markazlar joylashgan."
  },
  {
    question: "Otasining qon guruhi IV (AB), onasiniki I (00) bo'lgan oilada farzandlarda qanday qon guruhlari bo'lishi mumkin?",
    options: ["II va III", "I va IV", "Faqat IV", "I, II, III va IV"],
    topic: "Genetika",
    answer: 0,
    explanation: "AB x 00 chatishtirishdan IAi (II guruh) va IBi (III guruh) genotiplar hosil bo'ladi; I va IV guruh bo'lishi mumkin emas."
  },
  {
    question: "Tabiiy tanlanishning shakllari ichida populyatsiyada o'rtacha (ma'lum standartdagi) belgilarni saqlab qoladigan, chetga chiqqanlarni yo'q qiladigan tanlanish turi nima deyiladi?",
    options: ["Harakatlantiruvchi tanlanish", "Dizruptiv (buzuvchi) tanlanish", "Stabilizatsiyalovchi (barqarorlashtiruvchi) tanlanish", "Sun'iy tanlanish"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Stabilizatsiyalovchi tanlanish o'zgarmas muhit sharoitida o'rtacha optimal belgilarni saqlab qoladi va keskin o'zgargan variantlarni yo'q qiladi."
  },
  {
    question: "O'simliklarda barglarning tikan yoki mo'ylovga aylanishi evolyutsiyada qanday o'zgarish turi hisoblanadi?",
    options: ["Rudimentlar", "Organlarning metamorfozi (vazifasiga ko'ra o'zgarishi)", "Atavizmlar", "Sun'iy mutatsiya"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Metamorfoz — organlarning yashash sharoitiga moslashib, asosiy vazifasini o'zgartirishi (masalan, kaktus tikani — barg metamorfozi)."
  },
  {
    question: "Evolyutsiya jarayonida turlar sonining ko'payishi va ularning turli xil yashash sharoitlariga moslashib tarqalishi biologiyada qanday ataladi?",
    options: ["Degeneratsiya", "Retrogres", "Mutatsion turg'unlik", "Divergensiya (tarqalish) va biologik progress"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Divergensiya — umumiy ajdoddan kelib chiqqan guruhlarning turli sharoitlarga moslashib boshqa-boshqa belgilarga ega bo'lishi va tarqalishidir."
  },
  {
    question: "O'simliklarda ildiz qismidan so'rilgan suv va mineral tuzlar poya bo'ylab qaysi to'qima orqali harakatlanadi?",
    options: ["Floema (loks)", "Kambiy", "Ksilema (yog'ochlik)", "Epidermis"],
    topic: "Botanika",
    answer: 2,
    explanation: "Ksilema o'simlikning suv va minerallarni ildizdan barglarga o'tkazuvchi asosiy o'tkazuvchi naylar tizimidir."
  },
  {
    question: "DNKning matritsa zanjiri 3'-TAC-GGC-ATT-5' ketma-ketligiga ega. Hosil bo'ladigan mRNK translyatsiyasida nechta aminokislotadan iborat peptid sintezlanadi?",
    options: ["2 ta", "3 ta", "9 ta", "1 ta"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "mRNK 5'-AUG-CCG-UAA-3'. AUG metionin, CCG prolin, UAA esa stop-kodon, shuning uchun peptid 2 ta aminokislotadan iborat."
  },
  {
    question: "O'simliklarda vegetativ ko'payish turlaridan biri bo'lib, yer ostki poyasi (pazasi) yoki tuganaklari orqali ko'payish qaysi o'simliklarga xos?",
    options: ["Faqat yo'sinlar", "Faqat qirqbo'g'imlar", "Faqat qarag'ay", "Kartoshka, piyoz, yaltirbosh"],
    topic: "Botanika",
    answer: 3,
    explanation: "Kartoshka tuganaklari, piyozboshlar va ildizpoyalar o'simliklarning vegetativ yo'l bilan tez ko'payishini ta'minlaydi."
  },
  {
    question: "Genetika fanida turli belgilarga ega ota-onalarni chatishtirganda F1 avlodda faqat bitta dominant belgining yuzaga chiqishi qanday ataladi?",
    options: ["Ajralish qonuni", "Uniformlik (bir xillik) qonuni — Mendelning 1-qonuni", "Kodominantlik", "Epistaz"],
    topic: "Genetika",
    answer: 1,
    explanation: "Mendelning birinchi qonuniga ko'ra, toza liniyadagi ota-onalarni chatishtirganda birinchi avlod bir xil (uniform) bo'lib chiqadi."
  },
  {
    question: "Qaysi organoidlarda 70S tipdagi ribosomalar mavjud?",
    options: ["Golji kompleksi va lizosomalar", "Yadro va yadrocha", "Sentriolalar va vakuolalar", "Mitoxondriyalar va plastidalar"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Mitoxondriya va plastidalar prokariotlarga o'xshash 70S ribosomalarga ega, bu ularning simbiotik kelib chiqishidan dalolat beradi. Eukariot sitoplazmasida esa 80S bo'ladi."
  },
  {
    question: "Genetika fanida turli belgilarga javob beruvchi nonallel genlarning o'zaro ta'sir turlariga qaysilar kiradi?",
    options: ["Faqat mitoz va meyoz", "Faqat transkripsiya va translyatsiya", "Komplementarlik, epistaz, polimeriya", "Faqat gomologik birikish"],
    topic: "Genetika",
    answer: 2,
    explanation: "Nonallel genlarning o'zaro ta'siriga komplementarlik, epistaz va polimeriya turlari kiradi."
  },
  {
    question: "Genetika masalalarida ota-ona organizmlarning genotipi Aa va aa bo'lsa, ularning avlodida fenotip bo'yicha ajralish nisbati qanday bo'ladi (to'liq dominantlikda)?",
    options: ["3:1", "1:1 (50% dominant, 50% retsessiv)", "9:3:3:1", "1:2:1"],
    topic: "Genetika",
    answer: 1,
    explanation: "Analiz qiluvchi chatishtirishga o'xshash bu holatda (Aa x aa) naslda 50% dominant va 50% retsessiv belgili individlar (1:1) hosil bo'ladi."
  },
  {
    question: "Hujayraning energetik almashinuvida kislorodsiz (glyukoliz) bosqichi hujayraning qaysi qismida yuz beradi?",
    options: ["Sitoplazmada (matriksda)", "Mitoxondriya kristalarida", "Yadro ichida", "Ribosomada"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Glikoliz jarayoni kislorod talab etmagani uchun sitoplazmada kechib, 1 molekula glyukozadan 2 molekula pirat kislota va 2 ta ATF hosil qiladi."
  },
  {
    question: "O'simliklarda generativ organlar qatoriga qaysi qismlar kiradi?",
    options: ["Ildiz, poya, barg", "Faqat barglar", "Gul, meva va urug'", "Faqat kurtaklar"],
    topic: "Botanika",
    answer: 2,
    explanation: "O'simliklarning ko'payish vazifasini bajaruvchi organlari generativ organlar (gul, meva, urug') deb ataladi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiya genofondining tasodifiy va keskin ravishda kamayib ketishi (masalan, tabiiy ofatlar tufayli) nima deb ataladi?",
    options: ["Krossingover", "Genlar dreyfi va 'butilka gorlari' effekti", "Mutatsion bosim", "Epistaz"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Populyatsiya soni keskin kamayib ketganda (butilka gori effekti) genofond xilma-xilligi qisqaradi va genlar dreyfi kuchayadi."
  },
  {
    question: "O'simliklarda generativ organ hisoblangan gulning asosiy qismlari qaysilar?",
    options: ["Kosa yaproq va barg", "Faqat poya", "Ildiz va ildizbo'g'zi", "Changchi va urug'chi"],
    topic: "Botanika",
    answer: 3,
    explanation: "Changchi va urug'chi gulning jinsiy ko'payishni ta'minlovchi asosiy generativ qismlaridir."
  },
  {
    question: "Molekulyar biologiyada translyatsiya jarayonida aminokislotalarni mRNK kodonlariga mos ravishda ribosomaga tashib beruvchi RNK turi qanday ataladi?",
    options: ["tRNK (transport RNK)", "mRNK", "rRNK", "DNK"],
    topic: "Genetika",
    answer: 0,
    explanation: "tRNK (transport RNK) o'zining bir uchida muayyan aminokislotani, ikkinchi uchida esa antikodonni saqlab, ribosomaga yetkazib beradi."
  },
  {
    question: "Hujayraning bo'linish jarayonida xromosomalarning ekvator bo'ylab qator bo'lib yig'ilishi qaysi fazada sodir bo'ladi?",
    options: ["Profaza", "Anafaza", "Telofaza", "Metafaza"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Metafazada xromosomalar maksimal darajada spirallashib, hujayraning qoq o'rtasida (ekvatorda) metafaza plastinkasini hosil qiladi."
  },
  {
    question: "Hujayraning energetik almashinuvida glyukozaning kislorodsiz parchalanishi (glyoliz) qaysi organoidda yoki joyda ketadi?",
    options: ["Mitoxondriya kristalarida", "Sitoplazmada", "Yadro ichida", "Ribosomada"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Glikoliz jarayoni sitoplazmada kechib, kislorod talab etmagan holda 2 ta ATF hosil qiladi."
  },
  {
    question: "Hujayraning mitoz bo'linishida xromatidlarning bir-biridan ajralib, qarama-qarshi qutblarga qarab harakatlanadigan fazasi qaysi?",
    options: ["Anafaza", "Metafaza", "Profaza", "Telofaza"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Anafazada opa-singil xromatidlar bo'linib, mustaqil xromosomalarga aylanadi va duk nillari yordamida qutblarga tortiladi."
  },
  {
    question: "Gauze qoidasi (raqobatli chetlashtirish prinsipi)ni qaysi ibora to'g'ri ifodalaydi?",
    options: ["Ikki tur doim bir-biriga foyda keltiradi", "Bir turning soni doim ikkinchi turning soniga teng bo'ladi", "Bir xil ekologik nishani egallagan ikki tur uzoq vaqt birga yashay olmaydi", "Yirtqich va o'lja soni hech qachon o'zgarmaydi"],
    topic: "Ekologiya",
    answer: 2,
    explanation: "Gauze tajribalarida (parameciyalar) bir xil resursdan foydalangan turlardan raqobatbardoshi ikkinchisini siqib chiqargan."
  },
  {
    question: "Odam organizmida siydik ajratish tizimining asosiy funksional birligi bo'lib, qonni filtrlab siydik hosil qiluvchi mikroskopik tuzilma nima deb ataladi?",
    options: ["Neyron", "Nefron", "Alveola", "Nefron va akson"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Har bir buyrakda bir millionga yaqin nefronlar mavjud bo'lib, ular qonni filtrlash va siydik hosil qilish vazifasini bajaradi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi yurak-qon tomir faoliyati va nafas olishning avtomatik markazlarini saqlaydi?",
    options: ["Miyacha", "Peshona bo'lagi", "Oraliq miya", "Uzunchoq miya"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Uzunchoq miyada hayot uchun muhim bo'lgan nafas olish, yurak urishi, yutish va qusish reflekslarining markazlari joylashgan."
  },
  {
    question: "Genetika fanida bir xil belgining muqobil shakllarini (masalan, sariq yoki yashil rangni) belgilovchi genlar qanday ataladi?",
    options: ["Allel genlar", "Nonallel genlar", "Polimer genlar", "Stop-kodonlar"],
    topic: "Genetika",
    answer: 0,
    explanation: "Allel genlar gomolog xromosomalarning bir xil uchastkalarida joylashib, bitta belgining turli ko'rinishlarini ifodalaydi."
  },
  {
    question: "Odamda yurak ishining avtomatikligi (tashqi nerv ta'sirisiz ham o'z-o'zidan qisqarishi) qaysi tuzilma tomonidan ta'minlanadi?",
    options: ["Uzunchoq miya markazlari", "Qon tomir devoridagi retseptorlar", "Sinus-bo'lmacha tugunidagi o'tkazuvchi tizim maxsus muskul hujayralari", "Miyacha"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Yurakning o'tkazuvchi tizimi (sinus-bo'lmacha tuguni) o'zida elektr impulsini hosil qilish xususiyatiga ega bo'lib, yurakning ritmik avtomatik qisqarishini ta'minlaydi."
  },
  {
    question: "Odamda limfa sistemasining eng yirik tomiri qayerga quyiladi?",
    options: ["To'g'ridan-to'g'ri yurak qorinchasiga", "Ko'krak limfa yo'li orqali ko'krak osti venalariga (qon tomirga)", "Ingichka ichakka", "Buyrak jomiga"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Limfa suyuqligi oxir-oqibat yirik limfa yo'llari orqali bo'yin va ko'krak qafasidagi yirik qon venalariga qo'shiladi."
  },
  {
    question: "Qaysi hayvonlar tipida uch qavatli embrion (mezoderma) birinchi marta paydo bo'lgan?",
    options: ["Ichak-bo'shliqlilar", "Shimgichlilar", "Yassi chuvalchanglar", "Ninaterililar"],
    topic: "Zoologiya",
    answer: 2,
    explanation: "Ichak-bo'shliqlilar va shimgichlilar ikki qavatli (ektoderma, entoderma), yassi chuvalchanglardan boshlab esa mezoderma ham rivojlangan."
  },
  {
    question: "O'simliklarda ildiz qalpog'i (chexlik) qanday asosiy vazifani bajaradi?",
    options: ["Suvni shimilish", "Fotosintez qilish", "Organik modda to'plash", "Ildiz uchini tuproqqa kirishda shikastlanishdan saqlash"],
    topic: "Botanika",
    answer: 3,
    explanation: "Ildiz qalpog'i tirik hujayralardan iborat bo'lib, tuproqda o'sayotgan ildiz uchini mexanik shikastlanishdan himoya qiladi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismida eshitish va hid bilish sezgi zonalari joylashgan?",
    options: ["Chakka bo'lagi", "Peshona bo'lagi", "Ensa bo'lagi", "Tepa bo'lagi"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Bosh miya yarim sharlarining chakka bo'lagida eshitish, hid bilish va ta'm bilish markazlari joylashgan."
  },
  {
    question: "Odamda terining sezuvchanlik funksiyasini ta'minlovchi retseptorlar asosan terining qaysi qatlamida joylashgan?",
    options: ["Epidermisning eng ustki qismi", "Dermis (chin teri qatlami)", "Faqat yog' qatlamida", "Faqat soch tolalarida"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Dermis (chin teri) qatlamida bosim, og'riq, harorat va teginishni sezuvchi ko'plab nerv oxirlari (retseptorlar) joylashgan."
  },
  {
    question: "Molekulyar biologiyada ribosomada oqsil sintezi (translyatsiya) jarayoni boshlanishini ta'minlovchi boshlang'ich kodon qaysi?",
    options: ["UAA", "UAG", "AUG (Metionin)", "UGA"],
    topic: "Genetika",
    answer: 2,
    explanation: "AUG kodoni start-kodon bo'lib, u metionin aminokislotasini kodlaydi va oqsil sintezining boshlanish nuqtasi hisoblanadi."
  },
  {
    question: "Kislotali yomg'irlar hosil bo'lishiga asosan qaysi gazlar sabab bo'ladi?",
    options: ["Kislorod va azot", "Metan va vodorod", "Argon va neon", "Oltingugurt dioksidi va azot oksidlari"],
    topic: "Ekologiya",
    answer: 3,
    explanation: "SO2 va NOx atmosferadagi suv bilan birikib sulfat va nitrat kislotalar hosil qiladi."
  },
  {
    question: "Ikkilamchi og'izlilar (deuterostomia) guruhiga qaysi hayvonlar kiradi?",
    options: ["Ninaterililar va xordalilar", "Mollyuskalar va halqali chuvalchanglar", "Yassi va yumaloq chuvalchanglar", "Bo'g'imoyoqlilar va mollyuskalar"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Ikkilamchi og'izlilarda embrionning birlamchi og'zi anal teshikka aylanadi, og'iz esa keyin hosil bo'ladi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi haroratni boshqarish, moddalar almashinuvini, ochlik, to'yinganlik va chanqoqlik markazlarini o'z ichiga oladi?",
    options: ["Miyacha", "Uzunchoq miya", "Oraliq miya (gipotalamus)", "Peshona bo'lagi"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Gipotalamus (oraliq miya tarkibida) vegetativ asab tizimining oliy markazi bo'lib, tana harorati, suv-tuz va moddalar almashinuvini nazorat qiladi."
  },
  {
    question: "Exinokokk (Echinococcus granulosus) ning asosiy (oxirgi) xo'jayini qaysi hayvon?",
    options: ["Qo'y", "Odam", "Cho'chqa", "It va boshqa itsimonlar"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Voyaga yetgan parazit itning ichagida yashaydi. Qo'y va odam oraliq xo'jayin bo'lib, ularning jigar va o'pkasida pufaksimon (exinokokk) bosqichi rivojlanadi."
  },
  {
    question: "Molekulyar biologiyada mRNK molekulasidagi irsiy axborotni oqsil ketma-ketligiga tarjima qilish jarayoni qanday nomlanadi?",
    options: ["Translyatsiya", "Transkripsiya", "Replikatsiya", "Mutatsiya"],
    topic: "Genetika",
    answer: 0,
    explanation: "Translyatsiya — ribosomada mRNK kodonlariga mos ravishda aminokislotalarni oqsil zanjiriga yig'ish jarayonidir."
  },
  {
    question: "Producentlarda 20 000 kJ energiya to'plangan. Lindeman qoidasiga ko'ra bu energiyaning qancha qismi ikkinchi tartibli iste'molchilarga (uchinchi trofik daraja) o'tadi?",
    options: ["2000 kJ", "200 kJ", "20 kJ", "2 kJ"],
    topic: "Ekologiya",
    answer: 1,
    explanation: "Har pog'onada energiyaning taxminan 10% o'tadi: 20 000 → 2000 (birinchi tartibli iste'molchi) → 200 kJ (ikkinchi tartibli iste'molchi)."
  },
  {
    question: "Quyidagi organ juftliklaridan qaysi biri analogik hisoblanadi?",
    options: ["Odam qo'li va kit suzgichi", "Ko'rshapalak qanoti va ot oyog'i", "Hasharot qanoti va qush qanoti", "Qush qanoti va ko'rshapalak qanoti"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Analogik organlar turli kelib chiqishga ega, lekin o'xshash vazifani bajaradi. Qush qanoti va hasharot qanoti turli tuzilishga ega; qolgan juftliklar tuzilish rejasi bo'yicha gomologik."
  },
  {
    question: "2n=8 bo'lgan organizmda meyoz II ning metafazasida bitta hujayradagi xromosoma va xromatidalar soni qancha?",
    options: ["8 ta xromosoma, 8 ta xromatida", "4 ta xromosoma, 4 ta xromatida", "8 ta xromosoma, 16 ta xromatida", "4 ta xromosoma, 8 ta xromatida"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Meyoz I dan keyin xromosomalar soni ikki baravar kamayadi (n=4), lekin har bir xromosoma hali ikki xromatidali: 4 xromosoma, 8 xromatida."
  },
  {
    question: "Hayvon hujayrasi plazmatik membranasida xolesterin qanday vazifani bajaradi?",
    options: ["Oqsil sintezini amalga oshiradi", "Membrana suyuqligini (harakatchanligini) tartibga solib, uni barqarorlashtiradi", "Ionlarni faol tashiydi", "Membrananing qutbli boshchalarini hosil qiladi"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Xolesterin fosfolipidlar orasida joylashib, past haroratda membrananing qotishiga, yuqori haroratda haddan tashqari suyuqlanishiga to'sqinlik qiladi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi ko'rish va eshitish reflekslarining birlamchi markazlari hamda mushaklar tonusini boshqarishda qatnashadi?",
    options: ["O'rta miya", "Uzunchoq miya", "Miyacha", "Peshona bo'lagi"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "O'rta miyada ko'rish va eshitishning orientir reflekslari, shuningdek mushak tonusini boshqaruvchi markazlar joylashgan."
  },
  {
    question: "Asalari oilasida trutnlar (erkak asalarilar) qanday rivojlanadi?",
    options: ["Urug'langan tuxumdan, diploid (2n) xromosoma to'plami bilan", "Urug'lanmagan tuxumdan, gaploid (n) xromosoma to'plami bilan", "Urug'langan tuxumdan, gaploid (n) xromosoma to'plami bilan", "Urug'lanmagan tuxumdan, diploid (2n) xromosoma to'plami bilan"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Trutnlar partenogenez yo'li bilan urug'lanmagan tuxumdan chiqadi, shuning uchun gaploid; ishchi asalarilar va ona asalari esa diploid."
  },
  {
    question: "DDT va og'ir metallar kabi turg'un zaharli moddalar ozuqa zanjirida qanday o'zgaradi?",
    options: ["Zanjirning yuqori bo'g'inlarida ularning konsentratsiyasi ortib boradi", "Zanjir bo'ylab teng taqsimlanadi", "Produtsentlarda eng ko'p to'planadi, keyin yo'qoladi", "Iste'molchilarda parchalanib ketadi"],
    topic: "Ekologiya",
    answer: 0,
    explanation: "Bu biomagnifikatsiya deyiladi: zaharli modda organizmda parchalanmay to'planadi va yirtqichlarda eng yuqori konsentratsiyaga yetadi."
  },
  {
    question: "O'simliklarda hujayra devorining asosiy kimyoviy tarkibiy qismi nima?",
    options: ["Glikogen", "Xitin", "Sellyuloza (letchatka)", "Kraxmal"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "O'simlik hujayralari devori mustahkam polisaxarid bo'lgan sellyulozadan tashkil topgan."
  },
  {
    question: "Genetika fanida irsiy axborotni saqlovchi va uni nasldan-naslga o'tkazuvchi asosiy molekula qaysi?",
    options: ["RNK", "Atsetilxolin", "Glyukogen", "DNK (dezoksiribonuklein kislota)"],
    topic: "Genetika",
    answer: 3,
    explanation: "DNK barcha tirik organizmlarda irsiy axborotni saqlash va nusxalash vazifasini bajaruvchi asosiy makromolekuladir."
  },
  {
    question: "Molekulyar biologiyada oqsil biosintezi jarayonida kodon va antikodon orasidagi bog'lanish qaysi organoidda sodir bo'ladi?",
    options: ["Yadroda", "Ribosomada", "Mitoxondriyada", "Lizosomada"],
    topic: "Genetika",
    answer: 1,
    explanation: "Translyatsiya jarayoni ribosomada kechib, unda mRNK kodoni bilan tRNK antikodoni o'zaro komplementar bog'lanadi."
  },
  {
    question: "Odamda markaziy asab tizimi qaysi qismlardan iborat?",
    options: ["Barcha sezgi organlari", "Bosh miya va barcha periferik nervlar", "Faqat uzunchoq miya va orqa miya", "Bosh miya va orqa miya"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Markaziy asab tizimi bosh miya va orqa miyadan, periferik asab tizimi esa ulardan chiqadigan nervlar va tugunlardan tashkil topgan."
  },
  {
    question: "O'simliklarda organik moddalar sintezlanmaydigan, faqat zaxira oziq moddalarni to'playdigan rangsiz plastidalar qanday nomlanadi?",
    options: ["Xloroplastlar", "Xromoplastlar", "Leykoplastlar", "Ribosomalar"],
    topic: "Botanika",
    answer: 2,
    explanation: "Leykoplastlar rangsiz plastidalar bo'lib, ular asosan ildiz, tuganak va urug'larda kraxmal, oqsil hamda yog'larni to'playdi."
  },
  {
    question: "Mitoxondriyada oksidlovchi fosforlanish (ATP ning asosiy qismi sintezi) qaerda kechadi?",
    options: ["Ichki membranada (kristalarda)", "Matriksda", "Tashqi membranada", "Membranalararo bo'shliqning suyuqligida"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Elektron tashish zanjiri va ATP-sintaza ichki membranada joylashgan. Krebs sikli esa matriksda kechadi."
  },
  {
    question: "Sudralib yuruvchilardan qaysi birining yuragi to'rt kamerali bo'ladi?",
    options: ["Kaltakesak", "Ilon", "Toshbaqa", "Timsoh"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Timsohlarning qorinchasi to'liq to'siq bilan bo'lingan; boshqa sudralib yuruvchilarda yurak uch kamerali (qorinchada chala to'siq)."
  },
  {
    question: "Quyidagi belgilardan qaysi biri K-strateg turlarga xos?",
    options: ["Nasl soni juda ko'p, umri qisqa", "Nasl soni juda ko'p, ota-ona g'amxo'rlik qilmaydi", "Nasl soni kam, umri uzoq, ota-ona nasl uchun g'amxo'rlik qiladi", "Balog'atga juda tez yetadi va nasl qoldirib o'ladi"],
    topic: "Ekologiya",
    answer: 2,
    explanation: "K-strateglar (fil, odam, kit) barqaror muhitda yashab, kam nasl qoldiradi va unga ko'p e'tibor beradi; r-strateglar esa (hasharot, bakteriya) ko'p va tez ko'payadi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi uyqu va uyg'onish siklini, shuningdek asosiy biologik ritmlarni boshqaradi?",
    options: ["Oraliq miya (gipotalamus va epifiz)", "Miyacha", "Uzunchoq miya", "Peshona bo'lagi"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Epifiz va gipotalamus (oraliq miya qismlari) melatonin va boshqa moddalar orqali biologik ritmlar hamda uyquni boshqaradi."
  },
  {
    question: "Quyidagi misollardan qaysi biri barqarorlashtiruvchi tanlanishga misol bo'ladi?",
    options: ["Yirtqichlar qarshisida eng yirik individlarning tanlanishi", "Chaqaloqlarning o'rtacha vaznga (3-3,5 kg) yaqin bo'lganlari ko'proq tirik qolishi", "Antibiotikka chidamli bakteriyalarning ko'payishi", "Ikki chekka rangdagi kapalaklarning saqlanib qolishi"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Barqarorlashtiruvchi tanlanish belgining o'rtacha qiymatini saqlaydi, ekstremal qiymatli individlar esa yo'q bo'ladi."
  },
  {
    question: "Genetika fanida Mendelning birinchi qonuni (Uniformlik qonuni) bo'yicha toza liniyadagi dominant va retsessiv ota-onalar chatishtirilganda F1 avlodda qanday natija chiqadi?",
    options: ["Barcha nasl bir xil (dominant belgiga ega) bo'ladi", "Faqat retsessiv belgilar chiqadi", "50% dominant, 50% retsessiv bo'ladi", "Barcha belgilar yo'qolib ketadi"],
    topic: "Genetika",
    answer: 0,
    explanation: "Mendelning birinchi qonuniga muvofiq, geterozigota holatdagi birinchi avlod (F1) tashqi ko'rinishidan bir xil (uniform) bo'lib chiqadi."
  },
  {
    question: "Hasharotlarning qon aylanish sistemasi ochiq bo'lishiga qaramay, gemolimfa nafas gazlarini tashishda deyarli ishtirok etmaydi. Buning sababi nima?",
    options: ["Gemolimfada gemoglobin juda ko'p bo'ladi va gaz almashinuvi shu orqali bo'ladi", "Gazlar trakeya tizimi orqali kislorodni bevosita to'qimalarga yetkazadi", "Hasharotlarning yuragi faqat nafas organlariga qon yuboradi", "Hasharotlarda gaz almashinuvi faqat teri orqali diffuziyada bo'ladi"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Trakeyalar va ularning mayda shoxchalari (trakeolalar) kislorodni to'g'ridan-to'g'ri hujayralarga olib boradi, shuning uchun gemolimfa asosan oziq moddalar va chiqindilarni tashiydi."
  },
  {
    question: "Biogeosenozda produtsentlar vazifasini bajaruvchi asosiy organizmlar guruhi qaysilar?",
    options: ["Yirtqich hayvonlar", "Zamburug'lar va bakteriyalar", "Faqat o'txo'r hayvonlar", "Xlorofill saqlovchi yashil o'simliklar va suvo'tlar"],
    topic: "Ekologiya",
    answer: 3,
    explanation: "Produtsentlar quyosh energiyasidan foydalanib noorganik moddalardan organik modda sintezlovchi autotrof organizmlardir (o'simliklar)."
  },
  {
    question: "Evolyutsiya nazariyasida turlarning turg'unligini va muhitga moslashishini ta'minlovchi asosiy harakatlantiruvchi kuch nima?",
    options: ["Faqat modifikatsiya", "Tasodifiy o'lim", "Tabiiy tanlanish", "Faqat sun'iy tanlanish"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Charlz Darvinga ko'ra, tabiiy tanlanish eng yashovchan va moslashgan individlarni saqlab qolib, evolyutsiyaning asosiy harakatlantiruvchi kuchi hisoblanadi."
  },
  {
    question: "O'simliklarda generativ ko'payishning eng asosiy va evolyutsion jihatdan eng yuksak bosqichi qaysi guruhga xos?",
    options: ["Yopiq urug'lilar (gulli o'simliklar)", "Yo'sinlar", "Qirqbo'g'imlar", "Ochiq urug'lilar"],
    topic: "Botanika",
    answer: 0,
    explanation: "Yopiq urug'li o'simliklar gul, ikki marta urug'lanish va meva hosil qilish xususiyati tufayli tabiatda eng ustun mavqega ega."
  },
  {
    question: "Hujayra bo'linishining mitoz bosqichida xromatidlar bir-biridan ajralib mustaqil xromosomaga aylanadigan va qutblarga qarab harakatlanadigan fazasi qaysi?",
    options: ["Metafaza", "Profaza", "Telofaza", "Anafaza"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Anafazada opa-singil xromatidlar bo'linib, o'rtasidan ajraladi va duk mipcasi tolalari ta'sirida hujayraning qarama-qarshi qutblariga tortib ketiladi."
  },
  {
    question: "O'simliklarda urug'ning unib chiqishi uchun eng asosiy zarur bo'lgan tashqi omillar qaysilar?",
    options: ["Faqat quyosh nuri va azot", "Suv, kislorod va qulay harorat", "Faqat ko'mir angidrid gazi", "Quruq muhit va sovuq"],
    topic: "Botanika",
    answer: 1,
    explanation: "Urug' tinch holatdan faol rivojlanishga o'tishi uchun suv (gidratatsiya), kislorod (nafas olish uchun) va maqbul harorat zarur."
  },
  {
    question: "Odamda xotira, ta'lim olish va axborotni saqlash jarayonlari bosh miyaning qaysi qismi bilan bevosita bog'liq?",
    options: ["Faqat uzunchoq miya", "Faqat miyacha", "Katta yarim sharlar po'stlog'i va limfik tizim", "Orqa miya"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Katta yarim sharlar po'stlog'i va limbik tizim xotirani shakllantirish, o'rganish va tajribalarni saqlashda markaziy rol o'ynaydi."
  },
  {
    question: "O'simliklarda barg og'izchalari orqali kislorod va karbonat angidrid almashinuvi qaysi jarayon orqali amalga oshiriladi?",
    options: ["Faol transport", "Oddiy diffuziya", "Osmos", "Transpiratsiya"],
    topic: "Botanika",
    answer: 1,
    explanation: "Gazlar kontsentratsiyalar farqiga ko'ra og'izcha teshikchalari orqali tashqi muhitdan hujayra oralig'iga diffuziya yo'li bilan o'tadi."
  },
  {
    question: "Molekulyar biologiyada replikatsiya jarayoni DNK molekulasida qanday prinsip asosida amalga oshiriladi?",
    options: ["Komplementarlik prinsipi (A-T, G-S)", "Faqat tasodifiy birikish", "Triplet kodlash", "Translyatsiya prinsipi"],
    topic: "Genetika",
    answer: 0,
    explanation: "DNK ikkilanishida (replikatsiyada) har bir eski zanjir asosida komplementarlik qoidasiga ko'ra yangi zanjir sintezlanadi."
  },
  {
    question: "Dengiz yulduzining suv-tomir (ambulakral) sistemasi asosan qanday vazifani bajaradi?",
    options: ["Qon aylanishini va qon bosimini boshqarish", "Faqat ayirish moddalarini chiqarish", "Naycha oyoqlar yordamida harakatlanish va o'ljani ushlab turish", "Ovqatni mexanik maydalash"],
    topic: "Zoologiya",
    answer: 2,
    explanation: "Suv-tomir sistemasidagi suv bosimi ostida naycha oyoqlar cho'zilib, so'rg'ichlari yordamida substratga yopishadi va ikki pallali mollyuska chig'anog'ini ochishga ham yordam beradi."
  },
  {
    question: "O'simliklarda ildizning eniga o'sishi va yillik halqalarning hosil bo'lishi qaysi to'qimaning faoliyati bilan bog'liq?",
    options: ["Epidermis", "Floema", "Asosiy to'qima", "Kambiy (yon meristema)"],
    topic: "Botanika",
    answer: 3,
    explanation: "Kambiy hujayralari bahor va yoz oylarida jadal bo'linib, ichkariga ksilema (yog'ochlik), tashqariga esa floema hujayralarini hosil qiladi, natijada poya eniga o'sadi va yillik halqalar yuzaga keladi."
  },
  {
    question: "Odamda teri qoplami orqali amalga oshiriladigan asosiy jarayonlardan biri — ter ajratish qanday vazifani bajaradi?",
    options: ["Faqat kislorod yutish", "Termoregulyatsiya (tanani sovutish) va ortiqcha tuzlarni chiqarish", "Faqat oqsil sintez qilish", "Faqat qon hosil qilish"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Ter bezlari orqali suv va ortiqcha tuzlar chiqarilib, tana harorati doimiy bir maromda ushlab turiladi."
  },
  {
    question: "Yomg'ir chuvalchangining qon aylanish sistemasi qanday tuzilgan?",
    options: ["Ochiq; qon tana bo'shlig'iga to'kiladi", "Yopiq; ikki kamerali haqiqiy yurak bor", "Qon aylanish sistemasi yo'q, gazlar faqat diffuziya bilan tashiladi", "Yopiq; qon tomirlari orasidagi halqasimon tomirlar yurak vazifasini bajaradi"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Halqalilarda qon tomirlar orqali oqadi (yopiq sistema). Yomg'ir chuvalchangida ma'lum segmentlardagi halqasimon tomirlar qisqarib qonni haydaydi."
  },
  {
    question: "Bezgak plazmodiysining asosiy va oraliq xo'jayinlari qaysi javobda to'g'ri ko'rsatilgan?",
    options: ["Asosiy xo'jayin - odam, oraliq xo'jayin - anofeles chivini", "Asosiy xo'jayin - kuliks chivini, oraliq xo'jayin - odam", "Asosiy xo'jayin - anofeles chivini, oraliq xo'jayin - odam", "Ikkalasi ham odam"],
    topic: "Zoologiya",
    answer: 2,
    explanation: "Plazmodiyning jinsiy ko'payishi (gametogoniya) chivin tanasida, jinssiz ko'payishi (shizogoniya) esa odamning jigari va eritrotsitlarida kechadi."
  },
  {
    question: "Odam qonining asosiy koagulyatsiyasida (ivishida) faol ishtirok etuvchi qon plazmasi oqsili fibrinogendan fibrin hosil bo'lishini ta'minlovchi ferment qaysi?",
    options: ["Trombin", "Pepsin", "Amilaza", "Insulin"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Qon ivish jarayonining oxirgi bosqichida trombin fermenti ta'sirida eriydigan fibrinogen erimaydigan fibrin tolasiga aylanib laxta hosil qiladi."
  },
  {
    question: "Odamda qonning shakqli elementlaridan biri bo'lgan trombotsitlarning asosiy vazifasi nimadan iborat?",
    options: ["Kislorod tashish", "Immunitetni ta'minlash", "Qon ivish jarayonida (gemostazda) qatnashish", "Oqsil sintez qilish"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Trombotsitlar (qon plastinkalari) qon tomir shikastlanganda uning yuzasiga yopishib, laxta hosil qilish va qon ketishini to'xtatishda boshlang'ich rolni o'ynaydi."
  },
  {
    question: "Odamda o'pkaning funksional birligi bo'lib, gazlar almashinuvi yuz beradigan eng kichik pufakchalar qanday ataladi?",
    options: ["Bronxiolalar", "Tracheya", "Nefronlar", "Alveolalar"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Alveolalar bir qavat epiteliy bilan o'ralgan kichik pufakchalar bo'lib, ularni o'rab turgan kapilyarlar orqali qon va havo o'rtasida kislorod va CO2 almashinadi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi ko'z qorachig'ining kengayib-torayishini va muskul tonusini boshqaruvchi refleks markazlarini o'z ichiga oladi?",
    options: ["O'rta miya", "Uzunchoq miya", "Miyacha", "Peshona bo'lagi"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "O'rta miya ko'z qorachig'ining yorug'likka javobini, ko'rish va eshitishning yo'naltiruvchi reflekslarini ta'minlaydi."
  },
  {
    question: "O'simliklarda barglar orqali ortiqcha suvning bug'lanishi qanday ataladi?",
    options: ["Fotosintez", "Transpiratsiya", "Glikoliz", "Osmos"],
    topic: "Botanika",
    answer: 1,
    explanation: "Transpiratsiya — o'simlik barglaridagi og'izchalar orqali suvning bug'lanish jarayoni bo'lib, u sovish va suvni yuqoriga tortishda yordam beradi."
  },
  {
    question: "Odamda ovqat hazm qilish sistemasida oqsillarni parchalovchi asosiy fermentlar qayerlarda ishlab chiqariladi?",
    options: ["Faqat og'iz bo'shlig'ida", "Faqat yo'g'on ichakda", "Oshqozon, oshqozon osti bezi va ingichka ichak", "Jigarning o'zida"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Oshqozonda pepsin, oshqozon osti bezida tripsin va ingichka ichakda peptidazalar oqsillarni bosqichma-bosqich parchalaydi."
  },
  {
    question: "Qaysi jarayon tuproqdagi azotni atmosferaga molekulyar azot (N2) holida qaytaradi?",
    options: ["Nitrifikatsiya", "Denitrifikatsiya", "Ammonifikatsiya", "Azot fiksatsiyasi"],
    topic: "Ekologiya",
    answer: 1,
    explanation: "Denitrifikatsiyalovchi bakteriyalar kislorod yetishmaganda nitratlarni N2 gacha qaytaradi."
  },
  {
    question: "O'simliklarda ildiz bosimi va transpiratsiya natijasida suv va moddalarning yuqoriga harakatlanishida qaysi fizika-kimyoviy hodisalar muhim rol o'ynaydi?",
    options: ["Kapillyarlik (sirt tarangligi) va osmos", "Faqat elektr toki", "Magnit maydoni", "Mexanik bosim"],
    topic: "Botanika",
    answer: 0,
    explanation: "Suv ksilemaning ingichka naychalarida kapillyarlik hodisasi va yuqoridan so'ruvchi kuch ta'sirida yuqoriga ko'tariladi."
  },
  {
    question: "Tuxum qo'yib ko'payadigan sutemizuvchilar (ornitorink, exidna) qaysi guruhga kiradi?",
    options: ["Yo'ldoshlilar", "Xaltalilar", "Hasharotxo'rlar", "Kloakalilar (birinchi hayvonlar)"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Kloakalilar tuxum qo'yadi, bolalarini sut bilan boqadi; ularda kloaka bor."
  },
  {
    question: "Odam organizmida me'da osti bezining endokrin qismi bo'lgan Langerhans orolchalarining alfa-hujayralari qaysi gormonni ishlab chiqaradi?",
    options: ["Insulin", "Glyukagon", "Adrenalin", "Tiroksin"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Alfa-hujayralar glyukagon ishlab chiqarib, qondagi glyukoza miqdori pasayganda jigardagi glikogenni glyukozaga aylantirib qonga chiqaradi."
  },
  {
    question: "Evolyutsiya nazariyasida turlarning paydo bo'lishida vaqtinchalik yoki makoniy to'siqlar tufayli yuzaga keladigan izolyatsiya turi nima deyiladi?",
    options: ["Ekologik izolyatsiya", "Genetik izolyatsiya", "Fiziologik izolyatsiya", "Geografik izolyatsiya"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Geografik izolyatsiya turlar o'rtasidagi erkin chatishtirishni to'xtatuvchi tabiiy to'siqlar (daryo, tog') orqali amalga oshadi."
  },
  {
    question: "Odam organizmida qon plazmasining asosiy oqsillaridan biri bo'lib, osmotik bosimni ta'minlovchi va moddalarni tashiydigan asosiy oqsil qaysi?",
    options: ["Gemoglobin", "Fibrinogen", "Albumin", "Insulin"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Albuminlar qon plazmasida eng ko'p miqdorda uchraydigan oqsillar bo'lib, qonning osmotik bosimini ushlab turishda va turli birikmalarni bog'lab tashishda muhim."
  },
  {
    question: "Genetika fanida digibrid chatishtirishda ota-onalar ikkala belgi bo'yicha geterozigota (AaBb) bo'lsa, F2 avlodda nechta genotipik sinf (variant) hosil bo'ladi?",
    options: ["9 xil genotipik sinf", "4 xil", "16 xil", "2 xil"],
    topic: "Genetika",
    answer: 0,
    explanation: "Mendel qoidasiga ko'ra digibrid chatishtirishda F2 da genotip bo'yicha 9 xil turdagi genotipik kombinatsiyalar yuzaga keladi."
  },
  {
    question: "O'simliklarda ildizning eniga o'sishini ta'minlovchi yon meristema (kambiy) qaysi to'qimalar orasida joylashgan?",
    options: ["Epidermis ustida", "Ksilema va floema orasida", "Faqat ildiz qalpog'ida", "Faqat barg to'qimasida"],
    topic: "Botanika",
    answer: 1,
    explanation: "Kambiy ksilema (yog'ochlik) va floema (loks) o'tkazuvchi to'qimalari orasida joylashgan bo'lib, eniga o'sishni ta'minlaydi."
  },
  {
    question: "Genetika fanida polimeriya deb ataluvchi genlararo o'zaro ta'sir turi nimani anglatadi?",
    options: ["Bitta genning boshqasini to'sib qo'yishi", "Genlar sonining kamayib ketishi", "Xromosomalarning yo'qolishi", "Bir nechta noallel dominant genlarning bitta belgining rivojlanishiga bir xil yo'nalishda ta'sir ko'rsatishi"],
    topic: "Genetika",
    answer: 3,
    explanation: "Polimeriyada bir nechta dominant genlar bitta belgining (masalan, tana rangi yoki o'simlikdagi qand miqdori) ifodalanishini kuchaytiradi."
  },
  {
    question: "Meyoz bo'linish natijasida bitta diploid (2n) hujayradan nechta va qanday xromosomali hujayralar hosil bo'ladi?",
    options: ["4 ta haploid (1n) hujayra", "2 ta diploid hujayra", "4 ta diploid hujayra", "1 ta yirik hujayra"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Meyoz ikki marta ketma-ket bo'linishdan iborat bo'lib, natijada xromosomalar soni ikki marta kamaygan 4 ta haploid (1n) jinsiy hujayra hosil bo'ladi."
  },
  {
    question: "Odamda qon guruhini aniqlashda universal donor (barcha qon guruhlariga bera oladigan) qaysi qon guruhi hisoblanadi?",
    options: ["II (A) guruhi", "III (B) guruhi", "I (O) guruhi", "IV (AB) guruhi"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "I (O) qon guruhi eritrotsitlarida aglutinogenlar bo'lmagani uchun uni istalgan boshqa guruhdagi bemorlarga quyish mumkin (konservativ yondashuvda)."
  },
  {
    question: "Qushlardagi havo xaltachalarining asosiy fiziologik ahamiyati nima?",
    options: ["O'pkadan nafas olishda ham, chiqarishda ham bir yo'nalishda uzluksiz havo oqimini ta'minlash", "Gaz almashinuvi aynan havo xaltachalarining devorida bo'ladi", "Faqat ovoz hosil qilish uchun xizmat qiladi", "Faqat tana haroratini oshirish uchun xizmat qiladi"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Xaltachalar havoni zaxira qilib, o'pka ichidagi nay-kapillyarlardan havoning uzluksiz o'tishini ta'minlaydi (qo'sh nafas olish); gaz almashinuvi o'pkada bo'ladi."
  },
  {
    question: "Yosh tuzilishi bo'yicha ekspansiv (keng asosli) piramida populyatsiya haqida nimani ko'rsatadi?",
    options: ["Keksa individlar ulushi katta, populyatsiya qisqarmoqda", "Barcha yosh guruhlar teng, populyatsiya barqaror", "Yosh individlar ulushi katta, populyatsiya o'sishda", "Populyatsiya tez orada yo'qoladi"],
    topic: "Ekologiya",
    answer: 2,
    explanation: "Ekspansiv piramidada asos keng bo'ladi, chunki tug'ilish ko'p. Barqaror piramida ustunsimon, qisqaruvchi piramidada esa asos tor bo'ladi."
  },
  {
    question: "Baliqlar yuragi nechta kamerali va qon aylanish doirasi nechta?",
    options: ["Uch kamerali, ikkita doira", "Ikki kamerali, bitta doira", "Ikki kamerali, ikkita doira", "To'rt kamerali, ikkita doira"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Baliqlar yuragi bitta bo'lmacha va bitta qorinchadan iborat, unda faqat venoz qon bo'ladi; qon aylanish doirasi bitta."
  },
  {
    question: "Halqali chuvalchanglarning yumaloq chuvalchanglardan asosiy progressiv belgisi nima?",
    options: ["Birlamchi tana bo'shlig'i", "Hazm yo'lining bir teshikligi", "Faqat ayrim jinsliligi", "Ikkilamchi tana bo'shlig'i (selom) va yopiq qon aylanish tizimi"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Halqali chuvalchanglarda selom va yopiq qon aylanish tizimi bor, tana segmentlarga bo'lingan."
  },
  {
    question: "Odam organizmida gormonlar qaysi tizimlar orqali tana bo'ylab tarqaladi va organlar ishini boshqaradi?",
    options: ["Faqat asab yo'llari orqali", "Qon va limfa suyuqligi orqali (gormonal/gumoral boshqaruv)", "Faqat nafas yo'llari orqali", "Ovqat hazm qilish nayi orqali"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Gumoral boshqaruv tizimi endokrin bezlar ishlab chiqargan gormonlarni qon va limfa orqali to'qima hamda organlarga yetkazib beradi."
  },
  {
    question: "Apoptozning nekrozdan asosiy farqi nima?",
    options: ["Apoptoz faqat jarohatdan keyin boshlanadi", "Apoptozda hujayra yorilib, ichidagi moddalari to'qimaga to'kiladi", "Apoptoz genetik dasturlangan, yallig'lanishsiz kechuvchi hujayra o'limi", "Apoptoz faqat prokariotlarda kuzatiladi"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "Apoptozda hujayra tartibli ravishda qisqarib, apoptoz tanachalariga bo'linadi va makrofaglar tomonidan yutiladi; embrional rivojlanish va to'qimalarni yangilashda muhim."
  },
  {
    question: "Malpigi naylari ayirish organi vazifasini bajaradigan hayvonlar qaysi javobda to'g'ri ko'rsatilgan?",
    options: ["Halqali chuvalchanglar va mollyuskalar", "Qisqichbaqasimonlar va yassi chuvalchanglar", "Ninaterililar va ichak-bo'shliqlilar", "Hasharotlar va o'rgimchaksimonlar"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Malpigi naylari ichak bilan gemolimfa orasida joylashgan bo'lib, siydik kislotasini ichakka chiqaradi; ular quruqlikda yashovchi bo'g'imoyoqlilarga xos."
  },
  {
    question: "Odamda bosh miyaning qaysi qismida shartli reflekslar va tafakkur, nutq, ong faoliyatini boshqaruvchi oliy markazlar joylashgan?",
    options: ["Katta yarim sharlar po'stlog'i (korteks)", "Uzunchoq miya", "Miyacha", "Ko'prik"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Batta yarim sharlar po'stlog'i oliy nerv faoliyatining markazi bo'lib, barcha shartli reflekslar, xotira va ongli harakatlarni boshqaradi."
  },
  {
    question: "Odamda organizmning immun tizimida asosiy rol o'ynovchi T-limfotsitlar qaysi organda yetiladi va o'z vazifasini bajarishga tayyorlanadi?",
    options: ["Taloq", "Jigar", "Timus (ayrisimon bez)", "Oshqozon osti bezi"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "T-limfotsitlar suyak ko'migida hosil bo'lsa-da, timus (ayrisimon bez) orqali o'tib maxsus immun vazifasiga ega bo'lib yetiladi."
  },
  {
    question: "Odamda markaziy asab tizimining refleks yoyi qaysi ketma-ketlikda tuzilgan?",
    options: ["Ishchi organ -> Retseptor -> Miyaga", "Harakatlantiruvchi neyron -> Retseptor -> Markaz", "Faqat orqa miya -> Musqul", "Retseptor -> Sezuvchi neyronga -> Markaziy nerv tizimi -> Harakatlantiruvchi neyronga -> Ishchi organ"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Refleks yoyi beshta asosiy qismdan iborat bo'lib, qo'zg'alish retseptordan boshlanib ishchi organda yakunlanadi."
  },
  {
    question: "Xordalilar tipiga xos belgilar qaysi qatorda to'g'ri keltirilgan?",
    options: ["Xorda, qorin tomonda nerv zanjiri, tashqi skelet", "Xorda, orqa tomonda nerv naychasi, halqumda jabra yoriqlari", "Orqa miya, xitin qoplam, ochiq qon aylanish", "Faqat xorda bo'lib, nerv naychasi yo'q"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Xordalilar embrional rivojlanishida xorda, nerv naychasi (orqada) va halqum jabra yoriqlari paydo bo'ladi."
  },
  {
    question: "Paporotniksimonlarning hayot siklida mustaqil yashaydigan gametofit qanday ko'rinishda bo'ladi?",
    options: ["Yurak shaklidagi kichik yashil plastinka (o'simta)", "Katta bargli sporofit", "Zich daraxt tanasi", "Mox tanasi"],
    topic: "Botanika",
    answer: 0,
    explanation: "Paporotnikda sporadan o'simta (gametofit) o'sadi, uning ostida anteridiy va arxegoniylar yetiladi; urug'langan tuxum hujayradan esa sporofit rivojlanadi."
  },
  {
    question: "Quyidagi munosabatlardan qaysi biri kommensalizmga misol bo'ladi?",
    options: ["Dukkakli o'simlik va tuganak bakteriyalar", "Bit va odam", "Lishayniklardagi zamburug' va suvo'ti", "Akula va unga yopishib yuruvchi remora baliq"],
    topic: "Ekologiya",
    answer: 3,
    explanation: "Remora akuladan foyda ko'radi (transport, oziq qoldig'i), akulaga esa na foyda, na zarar. Boshqa misollar: mutualizm va parazitizm."
  },
  {
    question: "Quyidagi o'zaro munosabatlardan qaysi biri kommensalizmga misol bo'ladi?",
    options: ["Remora baliqlarining akulaga yopishib, uning ovidan qolgan ozuqa bilan oziqlanishi", "Tugunak bakteriyalar va dukkakli o'simliklar hayoti", "Zamburug' va yuksak o'simlik ildizi (mikoriza)", "Bezgak plazmodiysi va odam"],
    topic: "Ekologiya",
    answer: 0,
    explanation: "Kommensalizmda bir tur foyda ko'radi, ikkinchisiga zarar ham, foyda ham yo'q. Tugunak bakteriyalar va mikoriza mutualizmga, plazmodiy parazitizmga misol."
  },
  {
    question: "Hujayraning energetik almashinuvida kislorodsiz bosqichda 1 molekula glyukozadan qancha miqdorda ATF hosil bo'ladi?",
    options: ["36 ta ATF", "38 ta ATF", "2 ta ATF", "0 ta ATF"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "Glikoliz (kislorodsiz bosqich) natijasida 2 molekula ATF hosil bo'lib, asosiy energiya kislorodli bosqichda ajralib chiqadi."
  },
  {
    question: "Biogeosenozda ozuqa zanjirining barqarorligini ta'minlovchi va o'lik organik qoldiqlarni parchalovchi organizmlar guruhi qanday ataladi?",
    options: ["Produtsentlar", "Redutsentlar (saprofitlar)", "Konsumentlar", "Avtotroflar"],
    topic: "Ekologiya",
    answer: 1,
    explanation: "Redutsentlar (bakteriyalar va zamburug'lar) o'lik organik moddalarni noorganik moddalarga aylantirib, moddalar aylanishini yopadi."
  },
  {
    question: "Nitrifikatsiya jarayonida azotli birikmalar qanday o'zgaradi?",
    options: ["Nitrat molekulyar azotga aylanadi", "Molekulyar azot ammiakka aylanadi", "Ammiak nitritga, so'ngra nitratga aylanadi", "Oqsil parchalanib ammiak hosil qiladi"],
    topic: "Ekologiya",
    answer: 2,
    explanation: "Nitrifikatsiyani nitrosomonas va nitrobakter bakteriyalari bajaradi: NH3 -> NO2 -> NO3. Nitrat molekulyar azotga aylanishi denitrifikatsiya, N2 ning ammiakka aylanishi azot fiksatsiyasi, oqsildan ammiak hosil bo'lishi ammonifikatsiya deyiladi."
  },
  {
    question: "Qaysi organoid hujayrada lipidlar sintezi va zaharli moddalarni zararsizlantirishda asosiy rol o'ynaydi?",
    options: ["Donador endoplazmatik to'r", "Silliq (donasiz) endoplazmatik to'r", "Lizosoma", "Ribosoma"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Silliq EPT lipidlar va steroidlar sintezida, jigar hujayralarida esa zaharsizlantirishda ishtirok etadi; donador EPT esa oqsil sintezi bilan bog'liq."
  },
  {
    question: "Fotosintezning yorug'lik fazasida hosil bo'lib, qorong'ulik fazasida sarflanadigan moddalar qaysilar?",
    options: ["ATP va NADPH", "Glyukoza va kislorod", "NADH va FADH2", "CO2 va suv"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Yorug'lik fazasida hosil bo'lgan ATP va NADPH Kalvin siklida CO2 ni uglevodgacha qaytarish uchun ishlatiladi."
  },
  {
    question: "O'simliklarda suv va mineral moddalarni ildizdan poya va barglarga o'tkazuvchi naysimon tuzilmalar qanday nomlanadi?",
    options: ["Floema (loks)", "Kambiy", "Parenxima", "Ksilema (yog'ochlik)"],
    topic: "Botanika",
    answer: 3,
    explanation: "Ksilema o'simlikning suv va unda erigan mineral moddalarni pastdan yuqoriga harakatlantiruvchi o'tkazuvchi to'qima tizimidir."
  },
  {
    question: "Evolyutsiya nazariyasida turlarning kelib chiqishi va ularning o'zgarishini tushuntiruvchi ilk ilmiy ta'limotni kim yaratgan?",
    options: ["Charlz Darvin", "Gregor Mendel", "Jan Batist Lamark", "Lui Paster"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "J.B. Lamark o'zining evolyutsion nazariyasida organizmlarning tashqi muhit ta'sirida o'zgarishi va irsiylanishini birinchi bo'lib ilgari surgan."
  },
  {
    question: "Quyidagilardan qaysi biri ikkilamchi suktsessiyaga misol bo'ladi?",
    options: ["Yangi hosil bo'lgan vulqon orolining o'simliklar bilan qoplanishi", "Muzlik chekingandan keyin yalang'och toshda lishayniklar paydo bo'lishi", "Yangi qum barxanida birinchi o'simliklar o'sishi", "Yong'indan keyin kuygan o'rmonning asta-sekin tiklanishi"],
    topic: "Ekologiya",
    answer: 3,
    explanation: "Ikkilamchi suktsessiya tuproq va urug' bankini saqlab qolgan joyda boshlanadi, shuning uchun birlamchisidan ancha tez kechadi."
  },
  {
    question: "Barglarda fotosintez natijasida hosil bo'lgan saxaroza o'simlik bo'ylab qaysi to'qima orqali tashiladi?",
    options: ["Floema (elaksimon naylar)", "Ksilema (traxeyalar va traxeidlar)", "Epidermis", "Pardalovchi to'qima"],
    topic: "Botanika",
    answer: 0,
    explanation: "Organik moddalar floema orqali ikki yo'nalishda (manba - iste'molchi) tashiladi; suv va mineral tuzlar esa ksilema orqali ko'tariladi."
  },
  {
    question: "Genetika fanida Morgan qoidasiga ko'ra, xromosomada birikkan genlarning bir-biridan krossingover natijasida ajralib ketish ehtimoli nimaga bog'liq?",
    options: ["Faqat xromosomaning rangi bilan", "Genlar orasidagi masofaga", "Hujayraning haroratiga", "Faqat yadro o'lchamiga"],
    topic: "Genetika",
    answer: 1,
    explanation: "Genlar orasidagi masofa qancha uzoq bo'lsa, ular orasida krossingover sodir bo'lish ehtimoli shunchalik yuqori bo'ladi."
  },
  {
    question: "Odam somatik hujayrasi mitozning metafazasida nechta xromosoma va qancha DNK (c) miqdoriga ega?",
    options: ["23 ta xromosoma, 2c DNK", "46 ta xromosoma, 2c DNK", "92 ta xromosoma, 4c DNK", "46 ta xromosoma, 4c DNK"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "S-fazada DNK ikki marta ortgani uchun G2 va metafazada har bir xromosoma ikkita xromatidadan iborat: 46 xromosoma, 92 xromatida, 4c DNK."
  },
  {
    question: "Odam qonidagi leykotsitlarning asosiy vazifasi nimadan iborat?",
    options: ["Organizmga kirgan yot jismlar va mikroblarga qarshi kurashish (himoya)", "Kislorod tashish", "Qon ivishini ta'minlash", "Ozuqa moddalarni to'qimalarga yetkazish"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Leykotsitlar (oq qon tanachalari) fagotsitoz va antitelolar hosil qilish orqali organizmni infeksiyalardan himoya qiladi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyalar o'rtasida genlar oqimini ta'minlovchi va yangi genetik xilma-xillikni olib keluvchi omil nima?",
    options: ["Faqat mitoz", "Faqat tasodifiy ofat", "Migratsiya (individlarning ko'chishi va qo'shilishi)", "Mutatsiyaning to'xtashi"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Migratsiya natijasida bir populyatsiyadan boshqasiga individlar o'tib, genlar almashinuvini (genlar oqimini) yuzaga keltiradi."
  },
  {
    question: "Quyidagi hasharotlardan qaysi biri to'liq o'zgarish bilan rivojlanadi?",
    options: ["Chigirtka", "Asalari", "Tarakan", "Ninachi"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Asalari: tuxum → lichinka → g'umbak → voyaga yetgan hasharot. Chigirtka, tarakan va ninachida g'umbak bosqichi yo'q."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada mutatsiyalar natijasida yuzaga kelgan yangi belgilarning saqlanib qolishini ta'minlovchi asosiy omil nima?",
    options: ["Faqat tasodifiy o'lim", "Mitoz bo'linish", "Sun'iy yoritish", "Tabiiy tanlanish"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Tabiiy tanlanish eng muvaffaqiyatli mutatsiyaga ega individlarni tanlab olib, ularning keyingi avlodga o'tishini ta'minlaydi."
  },
  {
    question: "Krebs sikli (trikarbon kislotalar sikli) hujayraning qaysi qismida kechadi?",
    options: ["Sitoplazmada", "Yadroda", "Mitoxondriya matriksida", "Golji apparatida"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "Krebs sikli mitoxondriya matriksida o'tadi, oxirgi bosqich — oksidlovchi fosforlanish — kristalarda."
  },
  {
    question: "Elton ekologik piramidalarining qaysi turi hech qachon teskari bo'lmaydi?",
    options: ["Biomassa piramidasi", "Energiya piramidasi", "Sonlar piramidasi", "Yosh piramidasi"],
    topic: "Ekologiya",
    answer: 1,
    explanation: "Energiya har bir trofik darajada kamayib boradi (issiqlik tarzida sochiladi), shuning uchun energiya piramidasi doimo asosi keng, cho'qqisi tor bo'ladi."
  },
  {
    question: "Evolyutsiya dalillaridan biri bo'lib, turli geologik qatlamlarda saqlanib qolgan qadimgi organizm qoldiqlari qanday ataladi?",
    options: ["Paleontologik qoldiqlar (fossilchalar)", "Rudimentlar", "Atavizmlar", "Homolog organlar"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "Paleontologik topilmalar (fossilchalar) o'tmishda yashab ketgan organizmlarning tuzilishi va evolyutsion ketma-ketligini o'rganishda asosiy dalil hisoblanadi."
  },
  {
    question: "Hujayraning energiyaga bo'lgan ehtiyojini qondiruvchi va asosiy 'energetik stansiyasi' hisoblangan organoid qaysi?",
    options: ["Ribosoma", "Kompleks Golji", "Lizosoma", "Mitoxondriya"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Mitoxondriya organik moddalarni parchalab, ATF shaklida hujayrani energiya bilan ta'minlaydi."
  },
  {
    question: "Hujayraning mitoz bo'linishida xromosomalar qutblarga tarqalib bo'lgach, ularning atrofida yadro qobig'ining qayta shakllanishi qaysi fazada yuz beradi?",
    options: ["Telofaza", "Profaza", "Metafaza", "Anafaza"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Telofaza mitozning oxirgi bosqichi bo'lib, bunda xromosomalar cho'zilib, yadro qobig'i va yadrochalar qaytadan hosil bo'ladi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyalar sonining cheklanishi va ularning izolyatsiyalanishi natijasida yangi turlarning kelib chiqishi qanday ataladi?",
    options: ["Modifikatsion o'zgarish", "Faqat mitoz", "Geografik va ekologik izolyatsiya (spektatsiya)", "Atavizm"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Izolyatsiya turlararo erkin chatishtirishni to'xtatib, genofondlarning farqlanishiga va yangi turlar paydo bo'lishiga olib keladi."
  },
  {
    question: "Odam organizmida qon bosimini doimiy ushlab turishda va qon tomirlarini toraytirishda qaysi gormon yoki modda muhim rol o'ynaydi?",
    options: ["Faqat insulin", "Adrenalin va vazopressin", "Faqat safro", "Faqat melatonin"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Adrenalin va vazopressin qon tomirlarini toraytirib, arterial qon bosimining ko'tarilishini ta'minlaydi."
  },
  {
    question: "O'simliklarda urug'ning unib chiqishi uchun zarur bo'lgan asosiy uchta tashqi omil qaysilar?",
    options: ["Suv, kislorod va qulay harorat", "Faqat quyosh nuri va azot", "Faqat quruqlik va muzlash", "Faqat karbonat angidrid"],
    topic: "Botanika",
    answer: 0,
    explanation: "Urug' tinch holatdan o'sishga o'tishi uchun suv, nafas olish uchun kislorod va ma'lum darajadagi harorat kerak bo'ladi."
  },
  {
    question: "Evtrofikatsiyada suv havzasidagi kislorod miqdori nima uchun keskin kamayadi?",
    options: ["Suv o'tlari kislorodni ko'p ajratib, uni suvdan chiqarib yuboradi", "Suvga ko'p kislorod kirib, uni zaharlaydi", "Ommaviy halok bo'lgan suv o'tlarini parchalovchi aerob bakteriyalar kislorodni ko'p sarflaydi", "Baliqlar soni ortib, faqat ularning nafasi kislorodni tugatadi"],
    topic: "Ekologiya",
    answer: 2,
    explanation: "Azot va fosfor ortiqcha kirganda suv o'tlari kuchli ko'payadi, so'ng o'lib chiriydi va bu jarayon kislorodni tugatib, suv hayvonlarining qirilishiga olib keladi."
  },
  {
    question: "O'simliklarda barglarning pastki qismida ko'proq joylashgan va gaz almashinuvini ta'minlovchi og'izchalar qaysi to'qimaga tegishli?",
    options: ["O'tkazuvchi to'qima", "Qoplovchi to me (epidermisning hosilasi)", "Asosiy to'qima (parenxima)", "Mexanik to'qima"],
    topic: "Botanika",
    answer: 1,
    explanation: "Og'izchalar qoplovchi to'qima bo'lgan epidermisning maxsus juft hujayralari bo'lib, transpiratsiya va gaz almashinuvini boshqaradi."
  },
  {
    question: "Birlamchi mahsulot (produtsentlar) energiyasi 10 000 kJ bo'lsa, Lindeman qoidasiga ko'ra III tartibli iste'molchilarga qancha energiya o'tadi?",
    options: ["1 kJ", "100 kJ", "1000 kJ", "10 kJ"],
    topic: "Ekologiya",
    answer: 3,
    explanation: "Har bir trofik darajada energiyaning taxminan 10% i keyingi darajaga o'tadi: 10 000 -> 1000 (I tartib) -> 100 (II tartib) -> 10 kJ (III tartib)."
  },
  {
    question: "Tabiiy tanlanish natijasida populyatsiyada genlar chastotasining yo'nalishli o'zgarishi va yangi adaptatsiyalarning kelib chiqishi qaysi omil bilan birgalikda yuz beradi?",
    options: ["Mutatsion o'zgaruvchanlik va irsiylanish", "Faqat modifikatsion o'zgarish", "Tashqi muhitning o'zgarmasligi", "Sun'iy tanlanish"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "Tabiiy tanlanish mutatsiyalar natijasida hosil bo'lgan irsiy xilma-xillikni tanlab olib, muhitga moslashishni yuzaga keltiradi."
  },
  {
    question: "Qushlarda 'ikki karra nafas olish' nimani anglatadi?",
    options: ["Qushlar nafas olishda ikki marta og'iz ochadi", "Nafas olish faqat havo xaltachalari orqali o'tadi", "Qushlar ham o'pka, ham jabra orqali nafas oladi", "Nafas olishda ham, nafas chiqarishda ham o'pkada gaz almashinuvi davom etadi"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Havo xaltachalari tufayli havo o'pka orqali ikki marta o'tadi, shu sababli nafas olishda ham, nafas chiqarishda ham kislorod qonga o'tadi."
  },
  {
    question: "Genetika fanida xromosomalarning tuzilishi buzilishi (masalan, bo'lakcha uzilishi, teskari aylanishi yoki almashinuvi) bilan bog'liq mutatsiyalar qanday ataladi?",
    options: ["Genli mutatsiyalar", "Xromosomal mutatsiyalar (aberatsiyalar)", "Genomli mutatsiyalar", "Modifikatsiyalar"],
    topic: "Genetika",
    answer: 1,
    explanation: "Xromosomal mutatsiyalar xromosomaning tuzilishi o'zgarishi (delyatsiya, inversiya, translyokatsiya) bilan tavsiflanadi."
  },
  {
    question: "Odamda jinsiy hujayralar (spermatozoyid va tuxumhujayra) qaysi turdagi hujayra bo'linishi natijasida hosil bo'ladi?",
    options: ["Mitoz", "Amitoz", "Meyoz", "Faqat regeneratsiya"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Jinsiy hujayralar meyoz bo'lishi orqali hosil bo'lib, ularda xromosomalar soni ikki marta kamaygan (haploid - 1n) bo'ladi."
  },
  {
    question: "Okeanda biomassa piramidasi teskari (ya'ni produtsentlar biomassasi iste'molchilarnikidan kam) bo'lishi mumkin. Buning sababi nima?",
    options: ["Fitoplankton hayvonlar uchun ozuqa bo'lmaydi", "Fitoplanktonning ko'payish tezligi va mahsuldorligi yuqori, umri esa qisqa", "Okeanda energiya piramidasi ham teskari bo'ladi", "Okeanda iste'molchilar fotosintez qiladi"],
    topic: "Ekologiya",
    answer: 1,
    explanation: "Fitoplankton tez ko'payib, tezda iste'mol qilinadi; shuning uchun har onda biomassasi kam bo'lsa ham, yil davomida mahsuloti katta bo'ladi. Energiya piramidasi esa hech qachon teskari bo'lmaydi."
  },
  {
    question: "Xardi-Vaynberg muvozanatidagi populyatsiyada retsessiv gomozigotalar (aa) 16% ni tashkil etsa, geterozigotalar (Aa) chastotasi qancha?",
    options: ["24%", "36%", "48%", "60%"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "q^2 = 0,16 bo'lsa q = 0,4, p = 0,6. Geterozigotalar chastotasi 2pq = 2 x 0,6 x 0,4 = 0,48."
  },
  {
    question: "Odam organizmida ozuqa moddalarning hazm bo'lishi va so'rilishi asosan ovqat hazm qilish traktining qaysi qismida to'liq amalga oshadi?",
    options: ["Ingichka ichakda", "Oshqozonda", "Yo'g'on ichakda", "Qizilo'ngachda"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Ingichka ichak (ayniqsa uning o'n ikki barmoq ichak qismi va keyingi bo'limlari) barcha oziq moddalarni parchalab, qonga to'liq so'rib oluvchi asosiy joydir."
  },
  {
    question: "C4-o'simliklarning (masalan, makkajo'xori) C3-o'simliklarga nisbatan asosiy afzalligi nima?",
    options: ["Fotosintez uchun yorug'lik talab qilmasligi", "Faqat suvda o'sishi", "Xlorofill o'rniga boshqa pigmentdan foydalanishi", "CO2 ni dastlab PEP-karboksilaza bilan biriktirib, o'tkazuvchi tutam qini hujayralarida to'plashi sababli issiq va quruq sharoitda ham samarali fotosintez qilishi"],
    topic: "Botanika",
    answer: 3,
    explanation: "C4-yo'lida CO2 qin hujayralarida konsentratsiyalanadi, bu fotonafas olish yo'qotishlarini kamaytiradi va og'izchalar qisman yopiq bo'lganda ham samaradorlikni saqlaydi."
  },
  {
    question: "Odam organizmida buyrak usti bezining qobiq qismi gormonlaridan biri bo'lgan aldosteronning asosiy vazifasi nima?",
    options: ["Qon shakarini keskin oshirish", "Qonda natriy ionlarini ushlab qolish va kaliy chiqarilishini boshqarish", "Yurak urish tezligini kamaytirish", "Suyaklarda kaltsiy to'plash"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Aldosteron mineralokortikoid bo'lib, organizmda tuz va suv muvozanatini (natriyning qayta so'rilishini) tartibga soladi."
  },
  {
    question: "Genetika fanida nuklein kislotalar (DNK va RNK) tarkibiga kiruvchi purin asoslari qaysilar?",
    options: ["Timin va Sitozin", "Urasil va Timin", "Adenin va Guanin", "Faqat Sitozin va Urasil"],
    topic: "Genetika",
    answer: 2,
    explanation: "Nukleotidlar tarkibidagi azotli asoslar purinlar (Adenin, Guanin) va pirimidinlar (Timin, Sitozin, Urasil) deb bo'linadi."
  },
  {
    question: "AaBbCc x AaBbCc chatishtirishda (genlar mustaqil irsiylanadi, to'liq dominantlik) A-B-cc fenotipli avlodlarning ulushi qancha?",
    options: ["3/64", "27/64", "1/16", "9/64"],
    topic: "Genetika",
    answer: 3,
    explanation: "Har bir juft alohida hisoblanadi: A- = 3/4, B- = 3/4, cc = 1/4. Umumiy ehtimol 3/4 x 3/4 x 1/4 = 9/64."
  },
  {
    question: "Ribosomalarning subbirliklari eukariot hujayrada qaerda hosil bo'ladi?",
    options: ["Yadrochada", "Golji kompleksida", "Lizosomada", "Tekis endoplazmatik to'rda"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Yadrochada rRNK sintezlanib, oqsillar bilan birikadi va subbirliklar hosil bo'ladi, keyin ular sitoplazmaga chiqadi."
  },
  {
    question: "Bitta glyukoza molekulasining glikolizi natijasida hosil bo'ladigan mahsulotlar qaysi javobda to'g'ri ko'rsatilgan?",
    options: ["2 molekula sut kislota, 2 NADH va 38 ATP", "1 molekula PVK, 1 NADH va 4 ATP", "2 molekula PVK, 2 NADH va sof 2 ATP", "2 molekula etil spirti, 2 CO2 va 36 ATP"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "Glikolizda 4 ATP hosil bo'lib 2 tasi sarflanadi, sof foyda 2 ATP; sitoplazmada kechadi va kislorodni talab qilmaydi."
  },
  {
    question: "Odamda buyrak usti bezining qobiq qismidan ishlab chiqariladigan va moddalar almashinuvini (shu jumladan uglerod va suv-tuz almashinuvini) boshqaruvchi gormonlar guruhi qanday ataladi?",
    options: ["Adrenalin va noradrenalin", "Kortikosteroidlar (masalan, kortizol va aldosteron)", "Insulin va glyukagon", "Tiroksin va kaltsitonin"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Buyrak usti bezining qobiq qismi kortikosteroid gormonlarni (glyukokortikoidlar va mineralokortikoidlar) ishlab chiqaradi."
  },
  {
    question: "Odam organizmida limfa tugunlarining asosiy vazifasi nimalardan iborat?",
    options: ["Limfani filtrlash va organizmga tushgan mikroblarga qarshi antitelolar hosil qilish", "Qizil qon tanachalarini parchalash", "Faqat yog'larni hazm qilish", "Qon bosimini boshqarish"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Limfa tugunlari biologik filtr vazifasini bajarib, limfa oqimi bilan kelgan yot zarrachalar va mikroblarni ushlab qoladi hamda limfotsitlar ishlab chiqarib immunitetni ta'minlaydi."
  },
  {
    question: "O'simliklarda vegetativ ko'payish turlaridan biri bo'lib, o'simlik novdasini tuproqqa ko'mib ildiz ottrish usuli nima deb ataladi?",
    options: ["Qalamcha qilish", "Payvand qilish", "Urug' ekish", "Parishin qilish"],
    topic: "Botanika",
    answer: 3,
    explanation: "Parishin qilish usulida novda ona o'simlikdan ajratilmagan holda tuproqqa egib ko'miladi va ildiz otgach kesib olinadi."
  },
  {
    question: "Evolyutsiya jarayonida kelib chiqishi turlicha bo'lgan, lekin tashqi ko'rinishi va bajaradigan vazifasi o'xshash bo'lgan organlar qanday ataladi?",
    options: ["Homolog organlar", "Analog organlar", "Rudimentlar", "Atavizmlar"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Analog organlar (masalan, qush qanoti va hasharot qanoti) kelib chiqishi jihatidan har xil, ammo bir xil vazifani bajarish uchun moslashgan organlardir."
  },
  {
    question: "Mitokondriya va xloroplastlarning boshqa organoidlardan farqli o'laroq o'ziga xos qaysi xususiyati mavjud?",
    options: ["Faqat uglevod sinflashi", "Hujayra yadroini boshqarishi", "Faqat oqsillarni parchalashi", "O'zining shaxsiy xromosomasi (DNK) va ribosomalariga egaligi"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Mitokondriya va xloroplastlar yarim avtonom organoidlar bo'lib, ularning o'z circular (halqa shaklidagi) DNKsi va oqsil sintezlovchi ribosomalar mavjud."
  },
  {
    question: "Biogeosenozda oziq zanjirlarining o'zaro chirmashib ketishi natijasida hosil bo'lgan murakkab tarmoq qanday ataladi?",
    options: ["Oziq to'ri (trofik tarmoq)", "Ekologik piramida", "Genofond", "Biomassa"],
    topic: "Ekologiya",
    answer: 0,
    explanation: "Tabiatda organizmlar bitta emas, bir nechta oziq turlari bilan oziqlangani uchun oddiy zanjirlar o'zaro kesishib oziq to'rini hosil qiladi."
  },
  {
    question: "Odamda qon guruhlari qaysi tizim bo'yicha eng keng tarqalgan holda tasniflanadi?",
    options: ["MN tizimi", "X va Y tizimi", "ABO tizimi va Rezus faktor", "Faqat glyukoza tizimi"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "K. Landshteyner kashf etgan ABO tizimi va Rezus (Rh) faktor odam qon quyish amaliyotida eng muhim tasnif ҳisoblanadi."
  },
  {
    question: "Turning ekologik nishasi nima?",
    options: ["Turning faqat yashash joyi", "Turning faqat oziqlanish vaqti", "Turning geografik tarqalish chegarasi", "Turning jamoadagi o'rni, resurslardan foydalanishi va boshqa turlar bilan munosabati"],
    topic: "Ekologiya",
    answer: 3,
    explanation: "Yashash joyi (habitat) \"manzil\", ekologik nisha esa \"kasb\" ga o'xshaydi: tur qanday yashashi va ekotizimda qanday rol o'ynashini bildiradi."
  },
  {
    question: "Odamda qon zardobida antitelolar (aglyutininlar) bo'lmagan va universal retsipient hisoblangan qon guruhi qaysi?",
    options: ["IV (AB) qon guruhi", "I (O) qon guruhi", "II (A) qon guruhi", "III (B) qon guruhi"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "IV qon guruhi zardobida aglyutininlar yo'qligi sababli u boshqa barcha guruhdagi qonlarni qabul qila oladi."
  },
  {
    question: "Odamda yurak devori nechta qavatdan iborat va ularning nomi qaysilar?",
    options: ["Ikki qavat: tashqi va ichki", "Uch qavat: epikard, miokard va endokard", "Faqat bitta muskul qavati", "To'rt qavat"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Yurak devori tashqi yupqa epikard, qalin o'rta muskul — miokard va ichki endokard qavatlaridan tuzilgan."
  },
  {
    question: "Odamda ovqat hazm qilish traktining qaysi qismida suvning asosiy qismi so'rilib qon tomirlariga o'tadi?",
    options: ["Me'da (oshqozon)", "O'n ikki barmoq ichak", "Yo'g'on ichak", "Ingichka ichak"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Yo'g'on ichakda ovqat hazm bo'lmay qolgan qoldiqlaridagi suv va minerallar intensiv ravishda qonga so'rilib, ahlat massasi quyuqlashadi."
  },
  {
    question: "Molekulyar biologiyada mRNK dagi genetik kodning uchlik (triplet) xususiyati nimani anglatadi?",
    options: ["DNK ning 3 ta zanjirli bo'lishini", "Oqsillarning faqat 3 xil bo'lishini", "Ribosomaning 3 qismdan iboratligini", "Har bir aminokislota ketma-ket kelgan 3 ta nukleotid tomonidan kodlanishini"],
    topic: "Genetika",
    answer: 3,
    explanation: "Genetik kod uchlik (triplet) tuzilishga ega bo'lib, 3 ta nukleotid birgalikda bitta aminokislotani belgilaydi."
  },
  {
    question: "Quyidagi biomalardan qaysi birida tuproq eng unumdor va gumusga eng boy bo'ladi?",
    options: ["Tropik yomg'ir o'rmoni", "Mo'tadil iqlimli dasht (qora tuproq)", "Cho'l", "Tundra"],
    topic: "Ekologiya",
    answer: 1,
    explanation: "Dashtda o't o'simliklarining ildiz qoldiqlari ko'p to'planadi. Tropik o'rmonda esa organik qoldiq tez parchalanib, ozuqa o'simliklarga shu zahoti o'zlashtiriladi, tuproq esa kambag'al bo'ladi."
  },
  {
    question: "Suvda va quruqlikda yashovchilar (masalan, baqa) yuragi qanday tuzilgan?",
    options: ["Ikki bo'lmacha va bitta qorincha", "Bitta bo'lmacha va bitta qorincha", "Ikki bo'lmacha va ikki qorincha", "Bitta bo'lmacha va ikki qorincha"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Uch kamerali yurak: ikki bo'lmacha, bitta qorincha; ikki qon aylanish doirasi, lekin qorinchada qon qisman aralashadi."
  },
  {
    question: "Libix (minimum) qonuniga ko'ra organizmning o'sishi va rivojlanishini nima cheklaydi?",
    options: ["Miqdori eng ko'p bo'lgan omil", "Barcha omillarning o'rtacha qiymati", "Miqdori minimumga eng yaqin bo'lgan omil", "Faqat harorat"],
    topic: "Ekologiya",
    answer: 2,
    explanation: "Libix qonuniga ko'ra, hosildorlikni eng kam miqdorda bo'lgan zarur omil belgilaydi, boshqa omillar mo'l bo'lsa ham."
  },
  {
    question: "Hujayra energetik almashinuvining kislorodli (aerob) bosqichi natijasida 1 molekula glyukozadan jami nechta molekula ATF sintezlanadi?",
    options: ["2 ta ATF", "4 ta ATF", "0 ta ATF", "36 yoki 38 ta ATF"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Glikoliz va mitoxondriyadagi to'liq (aerob) parchalanish natijasida jami 36-38 molekula ATF energiyasi hosil bo'ladi."
  },
  {
    question: "O'simliklarda ikki marta urug'lanish jarayonini kashf etgan buyuk rus olimi kim?",
    options: ["S.G. Navashin", "C. Darvin", "G. Mendel", "I. Pavlov"],
    topic: "Botanika",
    answer: 0,
    explanation: "S.G. Navashin 1898-yilda yopiq urug'li o'simliklarda ikki marta urug'lanish hodisasini ilmiy kashf etgan."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi vizual (ko'rish) axborotlarni qabul qilish va qayta ishlashning asosiy markazi hisoblanadi?",
    options: ["Peshona bo'lagi", "Chakka bo'lagi", "Ensa bo'lagi", "Miyacha"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Bosh miya yarim sharlarining ensa bo'lagida ko'rish sezgi zonalari va tasvirlarni tahlil qilish markazlari joylashgan."
  },
  {
    question: "Biogeosenozda trofik darajalar bo'yicha yuqori pog'onaga ko'tarilgan sari umumiy biomassa va energiya miqdori qanday o'zgaradi?",
    options: ["O'zgarmas qoladi", "Keskin kamayib boradi", "Ortib boradi", "Avval ko'payib, keyin yo'qoladi"],
    topic: "Ekologiya",
    answer: 1,
    explanation: "Ekologik piramida qoidasiga ko'ra, har bir yuqori pog'onaga o'tganda energiya va biomassa 95-90% atrofida kamayib boradi."
  },
  {
    question: "O'simliklarda suv bug'lanishini (transpiratsiyani) va gazlar almashinuvini ta'minlovchi og'izchalar qanday ochilib yopiladi?",
    options: ["Faqat shamol ta'sirida", "Kambiyning bo'linishi bilan", "Mexanik to'qimaning tortilishi bilan", "Og'izcha hujayralarining turgor bosimining o'zgarishi hisobiga"],
    topic: "Botanika",
    answer: 3,
    explanation: "Og'izcha hujayralariga suv kirib turgori oshganda teshik ochiladi, suv chiqib ketib turgor pasayganda esa yopiladi."
  },
  {
    question: "Allopatrik tur hosil bo'lishi qanday omil bilan boshlanadi?",
    options: ["Populyatsiyalarning geografik izolyatsiyasi", "Ploidlikning o'zgarishi", "Bir hududda ko'payish vaqtlarining farqlanishi", "Bir hududda jinsiy tanlanish"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "Allopatrik tur hosil bo'lishida populyatsiyalar to'siq (tog', dengiz) bilan ajraladi, genlar almashinuvi to'xtaydi va mustaqil evolyutsiya boshlanadi."
  },
  {
    question: "Gemofiliya geni X-xromosomada joylashgan retsessiv gen. Sog'lom otadan va tashuvchi ona (XHXh) dan tug'ilgan o'g'il bolalarning necha foizi kasal bo'ladi?",
    options: ["0%", "50%", "25%", "100%"],
    topic: "Genetika",
    answer: 1,
    explanation: "Ona XH yoki Xh xromosomasini teng ehtimol bilan beradi; o'g'ilda Y otadan keladi, shuning uchun Xh olgan o'g'illar (50%) kasal bo'ladi."
  },
  {
    question: "Genetika fanida Morgan qoidasiga ko'ra, xromosomada birikkan holda irsiylanadigan genlar orasidagi masofa nimada o'lchanadi?",
    options: ["Nukleotidlar soni bilan", "Gramm bilan", "Morganida (protsentda - % krossingover)", "Genlar soni bilan"],
    topic: "Genetika",
    answer: 2,
    explanation: "Genlar orasidagi masofa krossingover foizi bilan belgilanib, morganida birligi bilan o'lchanadi."
  },
  {
    question: "DNK molekulasida adenin nukleotidlari 30% ni tashkil etsa, sitozin nukleotidlari necha foizni tashkil etadi?",
    options: ["30%", "20%", "40%", "70%"],
    topic: "Genetika",
    answer: 1,
    explanation: "Chargaff qoidasi: A = T va G = C. A + T = 60% bo'lsa, G + C = 40%, ya'ni sitozin 20%."
  },
  {
    question: "Odamda terining ostki qavati qanday nomlanadi va u qanday vazifani bajaradi?",
    options: ["Epidermis — faqat suv o'tkazish", "Dermis — faqat tirnoq o'stirish", "Yog' qatlami (podkoktelnaya kletchatka) — issiqlikni saqlash va zaxira ozuqa to'plash", "Faqat suyak hosil qilish"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Teri osti yog' qatlami organizmni sovqotishdan saqlaydi va energiyani zaxira holatida yig'adi."
  },
  {
    question: "Odamda teri qoplami organizmda qanday asosiy vazifalarni bajaradi?",
    options: ["Faqat kislorod yutish", "Faqat qon hosil qilish", "Faqat oqsil sintez qilish", "Himoya, termoregulyatsiya, sezish va ajratish"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Teri mexanik shikastlanishdan, mikroblardan himoya qiladi, ter ajratish orqali haroratni rostlaydi va retseptorlar orqali sezadi."
  },
  {
    question: "Qushlarning sudralib yuruvchilar bilan qarindoshligini qaysi belgilar tasdiqlaydi?",
    options: ["Oyoqlaridagi shox tangachalar va tuxum qo'yib ko'payishi", "Issiq qonlilik va to'rt kamerali yurak", "Qanotlarning mavjudligi", "Qo'sh nafas olish"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Qushlar oyoqlaridagi shox tangachalar, yumurtasining tuzilishi va embrion rivojlanishi bilan sudralib yuruvchilarga yaqin; issiq qonlilik va to'rt kamerali yurak sutemizuvchilar bilan umumiy."
  },
  {
    question: "Genetika fanida qon guruhlari irsiylanishida A va B allellari bir xil darajada namoyon bo'lib, IV (AB) guruhni hosil qilishi o'zaro ta'sirning qaysi turiga kiradi?",
    options: ["To'liq dominantlik", "Chala dominantlik", "Kodominantlik", "Epistaz"],
    topic: "Genetika",
    answer: 2,
    explanation: "Kodominantlikda ikkala allel ham bir vaqtning o'zida mustaqil ravishda o'z mahsulotini yuzaga chiqaradi (masalan, AB qon guruhi)."
  },
  {
    question: "Logistik o'sishda populyatsiya soni muhit sig'imiga (K) yaqinlashganda uning o'sish tezligi qanday o'zgaradi?",
    options: ["Maksimal darajaga yetadi", "Eksponensial ravishda tezlashadi", "Doimo manfiy bo'ladi", "Nolga intiladi"],
    topic: "Ekologiya",
    answer: 3,
    explanation: "Resurslar va joy cheklanganligi sababli, son K ga yaqinlashganda tug'ilish va o'lim tenglashib, o'sish to'xtaydi."
  },
  {
    question: "Odamda me'da shirasi tarkibidagi asosiy ferment bo'lgan pepsin qanday sharoitda faol ishlaydi?",
    options: ["Faqat ishqoriy muhitda", "Faqat kislotali muhitda (xlorid kislota mavjudligida)", "Faqat neytral suvda", "Muhitning ahamiyati yo'q"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Pepsin faqat me'dadagi xlorid kislota yaratgan kislotali muhitdagina oqsillarni parchalash xususiyatiga ega bo'ladi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyalar o'rtasida genlar almashinuvining yuz berishi biologiyada qanday ataladi?",
    options: ["Genlar oqimi (migratsiya)", "Genlar dreyfi", "Mutatsion jarayon", "Krossingover"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "Turli populyatsiyaga mansub individlarning ko'chishi va chatishib genlar almashinishini ta'minlashi genlar oqimi deb ataladi."
  },
  {
    question: "Evolyutsiya nazariyasiga ko'ra, tur kriteriyalari (mezonlari) ichida turlarni bir-biridan farqlashda eng muhim va aniq mezon qaysi?",
    options: ["Morfologik mezon", "Geografik mezon", "Genetik mezon", "Fiziologik mezon"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Genetik mezon (har bir turning o'ziga xos xromosomalar soni va tuzilishi) turlarni aniq farqlashda eng muhim mezon hisoblanadi."
  },
  {
    question: "Odamda qon guruhlari va Rezus (Rh) faktorning mos kelmasligi homiladorlikda qanday holatni keltirib chiqarishi mumkin?",
    options: ["Faqat qon bosimi oshishi", "Rezus-konflikt (gemolitik kasallik)", "Faqat suyak yemirilishi", "Hech qanday ta'sir ko'rsatmaydi"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Ona rezus-manfiy, homila rezus-musbat bo'lganda rezus-konflikt yuzaga kelib, gemolitik kasallikka sabab bo'lishi mumkin."
  },
  {
    question: "Na+/K+ nasosi har bir ish siklida qancha ion tashiydi?",
    options: ["2 ta Na+ ni hujayradan chiqaradi, 3 ta K+ ni hujayraga kiritadi", "1 ta Na+ va 1 ta K+ ni bir tomonga tashiydi", "3 ta Na+ va 3 ta K+ ni hujayraga kiritadi", "3 ta Na+ ni hujayradan chiqaradi, 2 ta K+ ni hujayraga kiritadi"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Bu faol transport bo'lib, bitta ATP sarflanadi va membranada ion gradienti hamda potensiallar farqini hosil qiladi."
  },
  {
    question: "Odamda yurak qorinchalarining qisqarishi (sistolasi) paytida qaysi yurak qopqoqlari ochilib, qon tomirlarga haydaladi?",
    options: ["Yarim oysimon qopqoqlar (aorta va o'pka arteriyasi og'zidagi)", "Tabaqali (mitral va uch tabaqali) qopqoqlar", "Faqat bo'lmacha qopqoqlari", "Hech qaysi qopqoq ochilmaydi"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Qorinchalar qisqarganda tabaqali qopqoqlar yopilib bo'lmachalarga qon qaytishini to'xtatadi, yarim oysimon qopqoqlar ochilib esa qon aorta va o'pka arteriyasiga o'tadi."
  },
  {
    question: "Evolyutsiya nazariyasida rudiment organlar deb nimaga aytiladi?",
    options: ["Yangi paydo bo'lgan mukammal organlarga", "Ajdodlarida yaxshi rivojlangan, lekin hozirgi kunda o'z ahamiyatini yo'qotib, qoldiq holatda qolgan organlarga", "Vazifasi butunlay boshqa turga o'tgan organlarga", "Faqat o'simliklarga xos bo'lgan o'simtalarga"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Rudimentlar (masalan, odamda ko'richakning chuvalchangsimon o'simtasi yoki quloq suprasi mushaklari) ajdodlarda muhim bo'lgan, ammo hozirda ahamiyati kamaygan organlardir."
  },
  {
    question: "Hujayraning energetik almashinuvida kislorodli (aerob) bosqich natijasida 1 molekula glyukozadan nechta ATF hosil bo'ladi?",
    options: ["2 ta ATF", "4 ta ATF", "36 yoki 38 ta ATF", "0 ta ATF"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "Mitoxondriyadagi to'liq kislorodli parchalanish natijasida jami 36-38 molekula ATF energiyasi ajralib chiqadi."
  },
  {
    question: "Ko'lda 100 ta baliq belgilanib qo'yib yuborildi. Keyinchalik 200 ta baliq tutildi va ulardan 10 tasi belgilangan bo'lib chiqdi. Baliqlarning taxminiy umumiy soni qancha?",
    options: ["2000", "1000", "200", "20 000"],
    topic: "Ekologiya",
    answer: 0,
    explanation: "Linkoln-Petersen usuli: N = (belgilanganlar soni x ikkinchi tutilgan soni) / ikkinchi marta tutilgan belgilanganlar = 100 x 200 / 10 = 2000."
  },
  {
    question: "Ikki qavatli gastrula bosqichida qaysi kurtak varaqlar mavjud bo'ladi?",
    options: ["Ektoderma va mezoderma", "Mezoderma va endoderma", "Faqat endoderma", "Ektoderma va endoderma"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Gastrulyatsiya natijasida avval ektoderma va endoderma hosil bo'ladi; mezoderma uch qavatli hayvonlarda keyin paydo bo'ladi."
  },
  {
    question: "Genetika masalalarida ota-onaning ikkalasi ham ikkala belgi bo'yicha geterozigota (AaBb) bo'lsa, naslda fenotip bo'yicha nechta har xil variant hosil bo'ladi?",
    options: ["16 xil", "4 xil", "2 xil", "9 xil"],
    topic: "Genetika",
    answer: 1,
    explanation: "Digibrid chatishtirishda (AaBb x AaBb) Mendelning uchinchi qonuniga ko'ra fenotipik jihatdan 9:3:3:1 nisbatda 4 xil turdagi fenotipik guruhlar hosil bo'ladi."
  },
  {
    question: "Sistematik kategoriyalarning kichikdan kattaga to'g'ri ketma-ketligini ko'rsating.",
    options: ["Tur – oila – avlod – turkum – sinf – tip", "Tur – turkum – avlod – oila – sinf – tip", "Tur – avlod – turkum – oila – tip – sinf", "Tur – avlod – oila – turkum – sinf – tip"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "To'g'ri tartib: tur → avlod → oila → turkum → sinf → tip → olam."
  },
  {
    question: "Odamda buyrak usti bezining qobiq qismidan ishlab chiqariladigan va organizmning stressga chidamliligini oshiruvchi asosiy glyukokortikoid gormon qaysi?",
    options: ["Cortizol (kortizol)", "Insulin", "Adrenalin", "Testosteron"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Kortizol stress gormoni bo'lib, uglerod va oqsil almashinuvini boshqaradi hamda organizmning yallig'lanishga qarshi kurashishiga yordam beradi."
  },
  {
    question: "Genetika masalalarida ota-onaning genotipi AaBb va aabb bo'lsa, ularning naslida barcha belgilari bo'yicha retsessiv (aabb) individ chiqish ehtimoli qanday?",
    options: ["0%", "50%", "25%", "100%"],
    topic: "Genetika",
    answer: 2,
    explanation: "AaBb organizm 4 xil gameta beradi (AB, Ab, aB, ab), aabb esa faqat bitta (ab) gameta beradi. Chatishtirganda 1/4 qism (25%) aabb chiqadi."
  },
  {
    question: "Hujayra devori bor o'simlik hujayrasi gipotonik eritmaga tushganda nima sodir bo'ladi?",
    options: ["Suv hujayradan chiqib, plazmoliz boshlanadi", "Suv hujayraga kiradi, turgor bosimi ortadi, lekin hujayra devori yorilishga yo'l qo'ymaydi", "Hujayra devori eriydi va hujayra yoriladi", "Hech qanday suv harakati bo'lmaydi"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Gipotonik muhitda osmos tufayli suv hujayra ichiga kiradi; mustahkam hujayra devori hujayrani turgor holatida ushlab turadi, hayvon hujayrasi esa yorilib ketishi mumkin."
  },
  {
    question: "O'simliklarda barglarning tuzilishida fotosintez jarayoni eng jadal kechadigan va ko'p miqdorda xloroplast saqlovchi asosiy to'qima qismi qaysi?",
    options: ["Gubkasimon parenxima", "Epidermis", "Ustunsimon parenxima (asosiy to'qima)", "Ksilema"],
    topic: "Botanika",
    answer: 2,
    explanation: "Ustunsimon parenxima hujayralari zich joylashgan va ko'p xloroplastga ega bo'lib, quyosh nuri tushadigan ustki qismda fotosintezni eng yaxshi bajaradi."
  },
  {
    question: "Timsohlarning yuragi boshqa sudralib yuruvchilarnikidan nimasi bilan farq qiladi?",
    options: ["Qorinchalari to'liq ajralgan (to'rt kamerali), lekin aorta ravoqlari orasidagi teshik orqali qon qisman aralashishi mumkin", "Uch kamerali bo'lib, qorinchasida to'siq umuman bo'lmaydi", "Ikki kamerali, faqat venoz qon aylanadi", "Besh kamerali, qo'shimcha bo'lmacha bor"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Timsohlarda qorinchalar to'liq to'siq bilan ajralgan, ammo chap va o'ng aorta ravoqlari Panizza teshigi orqali tutashadi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi nutqning motor markazini (so'zlash qobiliyatini) o'z ichiga oladi?",
    options: ["Ensa bo'lagi", "Miyacha", "Uzunchoq miya", "Peshona bo'lagi (Broka markazi)"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Katta yarim sharlar peshona bo'lagining quyi qismida nutq harakatlarini boshqaruvchi Broka markazi joylashgan."
  },
  {
    question: "O'simliklarda barglarning to'kilishidan oldin ularning bandi asosida qaysi maxsus hujayralar qatlami hosil bo'ladi?",
    options: ["Ajratuvchi (probka) qatlam", "Kambiy qatlami", "Stoma hujayralari", "Ksilema naylari"],
    topic: "Botanika",
    answer: 0,
    explanation: "Kuzda barg bandi asosida o'tkazuvchi naylarni berkituvchi va bargning uzilib tushishini ta'minlovchi ajratuvchi (probka) qatlam hosil bo'ladi."
  },
  {
    question: "Genetika fanida jinsiy xromosomaga birikkan holda irsiylanishi mumkin bo'lgan kasalliklarga qaysilar kiradi?",
    options: ["Albinizm va fenilketonuriya", "Dovdirash va gipertrixoz", "Gemofiliya va daltonizm", "Down sindromi"],
    topic: "Genetika",
    answer: 2,
    explanation: "Gemofiliya (qon ivimaslik) va daltonizm (rang ajratolmaslik) X-xromosomaga birikkan retsessiv kasalliklardir."
  },
  {
    question: "Odamda ko'zning yorug'lik nurlarini o'tkazuvchi va shox parda ortida joylashgan rangdor qism markazidagi teshik qanday nomlanadi?",
    options: ["Gavhar", "Qorachiq (pupila)", "To'r parda", "Shishasimon tana"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Qorachiq ko'zga tushadigan yorug'lik miqdorini boshqarish uchun ko'zning rangdor pardasidagi teshik bo'lib xizmat qiladi."
  },
  {
    question: "Baqa itbaliqida (lichinkasida) yurak va qon aylanish doiralari qanday?",
    options: ["Uch kamerali yurak va ikkita qon aylanish doirasi", "To'rt kamerali yurak va ikkita qon aylanish doirasi", "Ikki kamerali yurak va ikkita qon aylanish doirasi", "Ikki kamerali yurak va bitta qon aylanish doirasi"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Itbaliq baliqlarga o'xshab jabra bilan nafas oladi: yuragi bitta bo'lmacha va bitta qorinchadan iborat, qon bitta doira bo'ylab aylanadi. Voyaga yetgan baqada yurak uch kamerali bo'ladi."
  },
  {
    question: "Stratosferadagi ozon qatlamining yemirilishiga asosan qaysi moddalar sabab bo'ladi?",
    options: ["Metan", "Azot", "Freonlar (xlorftoruglerodlar)", "Argon"],
    topic: "Ekologiya",
    answer: 2,
    explanation: "Freonlardan ajralgan xlor atomlari ozon molekulalarini parchalaydi, natijada ultrabinafsha nurlanishdan himoya susayadi."
  },
  {
    question: "Odam organizmida qon bosimini va organizmda suv-tuz almashinuvini boshqaruvchi asosiy mineralokortikoid gormon qaysi?",
    options: ["Kortizol", "Aldosteron", "Insulin", "Adrenalin"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Buyrak usti bezining qobiq qismidan chiqadigan aldosteron natriy ionlarini ushlab qolib, suv balansini va qon bosimini rostlaydi."
  },
  {
    question: "Gidraning qaysi hujayralari uning yuqori regeneratsiya qobiliyatini ta'minlaydi?",
    options: ["Oraliq (interstitsial) hujayralar", "Nish otuvchi (chaquvchi) hujayralar", "Nerv hujayralari", "Bez hujayralari"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Oraliq hujayralar ildiz hujayralarga o'xshab bo'linib, chaquvchi, nerv va jinsiy hujayralarga aylanishi mumkin."
  },
  {
    question: "Sentriola mikronaychalari qanday tuzilishga ega?",
    options: ["9 ta juft mikronaychalar va markazda 2 ta (9x2+2)", "2 ta ustun mikronaychalar (2x2)", "12 ta yakka mikronaychalar", "9 ta uchlik mikronaychalar (9x3)"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Sentriola silindrsimon bo'lib, devori 9 ta uchlik mikronaychadan iborat; (9x2)+2 tuzilish esa xivchin va kiprikchalarga xos."
  },
  {
    question: "Evribiont organizmlar qanday turlar hisoblanadi?",
    options: ["Ekologik omillarning keng o'zgarishiga chidamli turlar", "Faqat tor harorat oralig'ida yashay oladigan turlar", "Faqat chuchuk suvda yashaydigan turlar", "Faqat tuproqda yashaydigan turlar"],
    topic: "Ekologiya",
    answer: 0,
    explanation: "Evribiontlar (masalan, uy chivini, ko'p yirtqichlar) keng tolerantlik chegarasiga ega; stenobiontlar esa tor chegarali."
  },
  {
    question: "Genlar dreyfi (genetik drift) qaysi populyatsiyalarda eng kuchli ta'sir ko'rsatadi?",
    options: ["Juda katta va doimiy aralashib turadigan populyatsiyalarda", "Kichik va izolyatsiyalangan populyatsiyalarda", "Faqat suvda yashovchi populyatsiyalarda", "Faqat o'simliklar populyatsiyasida"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Soni kam populyatsiyada allellar chastotasi tasodifiy o'zgarib, ayrim allellar yo'qolishi yoki fiksatsiyalanishi mumkin (butilka og'zi va asoschi samaralari)."
  },
  {
    question: "Odam organizmida buyrak usti bezining miya qismidan ishlab chiqariladigan va shoshilinch holatlarda qonga chiqariladigan asosiy gormonlar qaysilar?",
    options: ["Insulin va glyukagon", "Tiroksin va kaltsitonin", "Testosteron va estrogen", "Adrenalin va noradrenalin"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Buyrak usti bezining miya qismi adrenalin va noradrenalin ishlab chiqarib, organizmni stress va xavf-xatar holatlariga tezkor tayyorlaydi."
  },
  {
    question: "Odam organizmida oqsillar hazm bo'lishi ingichka ichakda qaysi fermentlar yordamida yakuniga yetkaziladi?",
    options: ["Amilaza va maltaza", "Lipaza", "Tripsin va ximotripsin (peptidazalar)", "Pepsin va xlorid kislota"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Oshqozon osti bezi ajratadigan tripsin va ingichka ichak devori fermentlari oqsillarni oxirgi aminokislotalargacha parchalaydi."
  },
  {
    question: "Fotosintezning yorug'lik fazasida ajralib chiqadigan kislorod qaysi moddadan hosil bo'ladi?",
    options: ["Karbonat angidriddan", "Suvdan", "Glyukozadan", "ATFdan"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Kislorod suvning fotolizidan hosil bo'ladi (tilakoid membranalarida)."
  },
  {
    question: "Genetika fanida xromosomalarning tuzilishi yoki sonining o'zgarishi bilan bog'liq bo'lgan irsiy o'zgaruvchanlik turi qanday ataladi?",
    options: ["Mutatsion o'zgaruvchanlik", "Modifikatsion o'zgaruvchanlik", "Kombinativ o'zgaruvchanlik", "Faqat fenotipik o'zgarish"],
    topic: "Genetika",
    answer: 0,
    explanation: "Mutatsion o'zgaruvchanlik genotipning, xromosomalar yoki genlar tuzilishining keskin va irsiylanadigan tarzda o'zgarishidir."
  },
  {
    question: "O'simliklarda urug'lanishdan keyin gulning qaysi qismidan meva, qaysi qismidan esa urug' rivojlanadi?",
    options: ["Gulqo'rg'ondan — meva, changchidan — urug'", "Gulkosachadan — meva, tumshunchadan — urug'", "Tugunchadan — meva, urug'kurtakdan — urug'", "Faqat poyadan — meva"],
    topic: "Botanika",
    answer: 2,
    explanation: "Ikki marta urug'lanishdan so'ng tuguncha devoridan meva, urug'kurtakdan esa urug' hosil bo'ladi."
  },
  {
    question: "Odam organizmida qon ivishining buzilishi va irsiylanuvchi kasallik — daltonizm (rang ajratolmaslik) qanday irsiynadi?",
    options: ["Y-xromosomaga dominant tarzda", "Autosomada kodominant tarzda", "Mitoxondrial yo'l bilan", "X-xromosomaga birikkan retsessiv belgisi sifatida"],
    topic: "Genetika",
    answer: 3,
    explanation: "Daltonizm ham gemofiliya kabi X-xromosomaga birikkan retsessiv kasallik bo'lib, erkaklarda tezroq namoyon bo'ladi."
  },
  {
    question: "Odamda eshitish va muvozanat retseptorlari bosh miyaning qaysi sezgi organida va qismida joylashgan?",
    options: ["O'rta quloqda", "Ichki quloqda (chig'anoq va yarim doira kanallarida)", "Ko'z to'r pardasida", "Burun bo'shlig'ida"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Ichki quloqdagi Korti organi eshitishni, vestibulyar apparat (yarim doira kanallari) esa tana muvozanatini ta'minlaydi."
  },
  {
    question: "Genetika fanida digibrid chatishtirishda F2 avlodda fenotip bo'yicha hosil bo'ladigan klassik ajralish nisbati qanday?",
    options: ["3:1", "1:2:1", "1:1", "9:3:3:1"],
    topic: "Genetika",
    answer: 3,
    explanation: "Mendelning uchinchi qonuniga ko'ra, ikki juft belgi bo'yicha geterozigotalar chatishtirilganda fenotip bo'yicha 9:3:3:1 nisbat kuzatiladi."
  },
  {
    question: "Populyatsiya soni muhit sig'imiga (K) yetganda quyidagilardan qaysi biri yuz beradi?",
    options: ["Tug'ilish va o'lim tenglashib, son nisbatan barqarorlashadi", "Tug'ilish o'limdan ancha ko'payadi", "Populyatsiya zudlik bilan butunlay yo'qoladi", "Individlar soni eksponensial o'sishda davom etadi"],
    topic: "Ekologiya",
    answer: 0,
    explanation: "Logistik o'sishda resurslar cheklanganligi tufayli o'sish sekinlashadi va son muhit sig'imi atrofida barqarorlashadi."
  },
  {
    question: "O'simliklarda generative organlar qatoriga qaysilar kiradi?",
    options: ["Ildiz, poya va barg", "Faqat barglar", "Gul, meva va urug'", "Faqat kurtaklar"],
    topic: "Botanika",
    answer: 2,
    explanation: "Ko'payish vazifasini bajaruvchi gul, meva va urug'lar o'simliklarning generativ organlari hisoblanadi."
  },
  {
    question: "Okeanda fitoplanktonning ayni paytdagi biomassasi zooplanktonnikidan kam bo'lishi (biomassa piramidasining teskari bo'lishi) mumkin. Buning asosiy sababi nima?",
    options: ["Fitoplanktonning bo'linish va yangilanish tezligi juda yuqori, kam biomassa ham ko'p mahsulot beradi", "Zooplankton fotosintez qiladi", "Fitoplankton energiyani o'zlashtirmaydi", "Okeanda producentlar umuman bo'lmaydi"],
    topic: "Ekologiya",
    answer: 0,
    explanation: "Fitoplankton bir necha kunda yangilanadi, shuning uchun kichik biomassa bilan ham zooplanktonni oziqlantiradi; energiya piramidasi esa hech qachon teskari bo'lmaydi."
  },
  {
    question: "O'simliklarda suvning ildizdan barglarga ko'tarilishida asosiy so'ruvchi kuchni hosil qiluvchi jarayon nima?",
    options: ["Faqat ildiz bosimi", "Kambiyning bo'linishi", "Fotosintez", "Transpiratsiya (barglar orqali suv bug'lanishi)"],
    topic: "Botanika",
    answer: 3,
    explanation: "Barglardan suvning bug'lanishi (transpiratsiya) yuqoridan so'ruvchi kuchni hosil qilib, suvni ksilema bo'ylab tortib chiqaradi."
  },
  {
    question: "Ornitorinx sudralib yuruvchilarga qaysi belgisi bilan o'xshash?",
    options: ["Sut bezlarining borligi", "Tanasining jun bilan qoplanganligi", "Tuxum qo'yishi va kloakasining borligi", "Issiq qonliligi"],
    topic: "Zoologiya",
    answer: 2,
    explanation: "Bir teshiklilar (ornitorinx, exidna) tuxum qo'yadi va ularning ichak, siydik va jinsiy yo'llari bitta kloakaga ochiladi; sut bezlari, jun va issiq qonlilik esa sutemizuvchilarga xos."
  },
  {
    question: "Evolyutsiya nazariyasida tirik tabiatning tarixiy taraqqiyoti davomida sodir bo'ladigan umumiy murakkablashuv va taraqqiyot qanday ataladi?",
    options: ["Biologik regress", "Biologik progress", "Degeneratsiya", "Atavizm"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Biologik progress turning qulashi emas, aksincha sonining ortishi, areolining kengayishi va progressiv rivojlanishidir."
  },
  {
    question: "Birlamchi suktsessiya qaerda boshlanadi?",
    options: ["Yong'indan keyin kuygan o'rmonda", "Tashlab ketilgan ekin maydonida", "Kesilgan o'rmon maydonida", "Tuproq mavjud bo'lmagan yalang'och substratda, masalan, qotgan vulqon lavasida"],
    topic: "Ekologiya",
    answer: 3,
    explanation: "Birlamchi suktsessiyada pioner organizmlar (lishayniklar, suv o'tlari) toshni parchalab, tuproq hosil qiladi; ikkilamchisida esa tuproq va urug'lar saqlanib qolgan bo'ladi."
  },
  {
    question: "O'rgimchaksimonlar sinfi vakillariga xos belgilar qaysi javobda to'g'ri keltirilgan?",
    options: ["3 juft oyoq, tanasi bosh, ko'krak va qorindan iborat", "4 juft oyoq, tanasi bosh-ko'krak va qorindan iborat, mo'ylovi yo'q", "5 juft oyoq, 2 juft mo'ylov", "4 juft oyoq, tanasi uch bo'limli"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "O'rgimchaksimonlarda 4 juft yurish oyog'i, tana 2 bo'limli (bosh-ko'krak va qorin), mo'ylovlar yo'q."
  },
  {
    question: "F2 da fenotiplar bo'yicha 9:7 nisbat qaysi genlar o'zaro ta'siriga xos?",
    options: ["Polimeriya", "Dominant epistaz", "Komplementarlik", "To'liq dominantlik"],
    topic: "Genetika",
    answer: 2,
    explanation: "Komplementarlikda ikkala dominant allel birgalikda bo'lsagina belgi namoyon bo'ladi (9 qismda), qolgan 7 qismda belgi bo'lmaydi."
  },
  {
    question: "Bezgak plazmodiysining jinsiy ko'payishi qayerda kechadi?",
    options: ["Anofeles chivinining oshqozonida", "Odam jigarida", "Odam eritrotsitlarida", "Kulex chivinining so'lak bezlarida"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Jinsiy ko'payish anofeles chivinida kechadi (chivin — yakuniy xo'jayin); odamda jinssiz ko'payish (shizogoniya) bo'ladi."
  },
  {
    question: "Odamda me'da shirasining kislotaliligini ta'minlovchi asosiy kimyoviy birikma qaysi?",
    options: ["Sulfat kislota (H2SO4)", "Xlorid kislota (HCl)", "Fosfat kislota", "Sut kislota"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Me'da bezlari ajratadigan shira tarkibida 0.3-0.5% konsentratsiyadagi xlorid kislota mavjud bo'lib, u mikroblarni o'ldiradi va pepsinga sharoit yaratadi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada yangi genlar va allellarning paydo bo'lishining asosiy birlamchi manbai nima?",
    options: ["Mutatsiyalar", "Tabiiy tanlanish", "Modifikatsion o'zgarishlar", "Genlar dreyfi"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "Mutatsion jarayon genofondda yangi irsiy o'zgarishlar va allellarni hosil qiluvchi yagona birlamchi manba hisoblanadi."
  },
  {
    question: "Odam organizmida qon aylanishining katta doirasi qayerdan boshlanib qayerda tugaydi?",
    options: ["O'ng qorincha — Chap bo'lmacha", "Chap qorincha — Chap bo'lmacha", "O'ng qorincha — O'ng bo'lmacha", "Chap qorincha — O'ng bo'lmacha"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Katta qon aylanish doirasi chap qorinchadan chiqib, barcha organlarni aylanib o'tgach, o'ng bo'lmachaga kelib tugaydi."
  },
  {
    question: "Odam organizmida oqsillarni parchalovchi asosiy fermentlar ketma-ket qaysi organlarda ishlaydi?",
    options: ["Faqat og'iz bo'shlig'ida", "Faqat yo'g'on ichakda", "Me'da (oshqozon) va ingichka ichak", "Faqat buyrakda"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "Oqsillar dastlab oshqozonda pepsin ta'sirida, so'ngra ingichka ichakda tripsin va peptidazalar yordamida parchanadi."
  },
  {
    question: "Evolyutsiya nazariyasida turli xil ajdodlardan kelib chiqqan, ammo o'xshash vazifani bajaruvchi organlar qanday ataladi?",
    options: ["Homolog organlar", "Analog organlar", "Rudimentlar", "Atavizmlar"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Kelib chiqishi turlicha, lekin vazifasi bir xil bo'lgan organlar analog organlar deyiladi (masalan, qush va hasharot qanotlari)."
  },
  {
    question: "Odam organizmida qon aylanishining kichik doirasi qaysi qorinchadan boshlanib, qaysi bo'lmachada tugaydi?",
    options: ["O'ng qorincha — Chap bo'lmacha", "Chap qorincha — O'ng bo'lmacha", "Chap qorincha — Chap bo'lmacha", "O'ng qorincha — O'ng bo'lmacha"],
    topic: "Odam anatomiyasi",
    answer: 0,
    explanation: "Kichik qon aylanish doirasi o'ng qorinchadan boshlanib o'pka orqali kislorodga boyib, chap bo'lmachaga kelib tugaydi."
  },
  {
    question: "Gulli o'simliklarda qo'sh urug'lanishdan so'ng hosil bo'lgan endospermning ploidligi qanday?",
    options: ["Diploid (2n)", "Gaploid (n)", "Tetraploid (4n)", "Triploid (3n)"],
    topic: "Botanika",
    answer: 3,
    explanation: "Bitta spermiy tuxum hujayra bilan (zigota 2n), ikkinchisi markaziy hujayraning ikkita yadrosi bilan qo'shilib, 3n endosperm hosil qiladi."
  },
  {
    question: "Atavizm va rudiment organlar o'rtasidagi farq qaysi javobda to'g'ri ko'rsatilgan?",
    options: ["Atavizm barcha individlarda bor, rudiment esa faqat ayrim individlarda uchraydi", "Atavizm ham, rudiment ham faqat kasallik natijasida paydo bo'ladi", "Atavizm - ajdodlarga xos belgining ayrim individlarda paydo bo'lishi, rudiment esa barcha individlarda bor, ammo funksiyasini yo'qotgan organ", "Atavizm - yangi paydo bo'lgan organ, rudiment - yo'qolgan organ"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Atavizmga misol: odamda dum bo'lib tug'ilish, to'liq mo'ynalik. Rudimentga misol: ko'richak, quloq muskullari."
  },
  {
    question: "O'simliklarda suvning ildizdan so'rilishida va bargdan bug'lanishida ishtirok etuvchi asosiy qoplovchi va o'tkazuvchi to'qima qismlari qaysilar?",
    options: ["Epidermis va ksilema", "Kambiy va floema", "Kork va periderm", "Asosiy va mexanik to'qima"],
    topic: "Botanika",
    answer: 0,
    explanation: "Epidermis suvning tashqi muhit bilan bog'lanishini tartibga solsa, ksilema esa uni yuqoriga o'tkazib beradi."
  },
  {
    question: "O'simliklarda ildiz orqali so'rilgan suv va mineral tuzlar poya bo'ylab qaysi yo'nalishda harakatlanadi?",
    options: ["Faqat yuqoridan pastga", "Ikkala tomonga bir xil", "Faqat pastdan yuqoriga (ksilema bo'ylab)", "Faqat bargdan ildizga"],
    topic: "Botanika",
    answer: 2,
    explanation: "Suv va mineral tuzlar ildizdan olinib, ksilema orqali faqat pastdan yuqoriga — barglar va novdalarga qarab oqadi."
  },
  {
    question: "Odamda qon guruhlarini aniqlashda ABO tizimi bo'yicha eritrotsitlarda aglyutinogenlar va zardobda aglyutininlar qanday xususiyatga ega?",
    options: ["Ular hech qachon o'zaro ta'sir qilmaydi", "Qonni suyultiradi", "Faqat kislorod hosil qiladi", "Bir xil nomdagi aglyutinogen va aglyutinin birga bo'lsa qon ivib (aglyutinatsiyalanib) qoladi"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "A va alfa yoki B va beta birga uchrashsa aglyutinatsiya (cho'kma hosil bo'lib yopishish) yuz beradi."
  },
  {
    question: "O'simliklarda vegetativ ko'payish turlaridan biri bo'lib, ona o'simlikdan ajratilmagan holda tuproqqa ko'mib ildiz ottrish usuli nima deb ataladi?",
    options: ["Qalamcha qilish", "Parishin (g'ujum) qilish", "Payvand qilish", "Urug' ekish"],
    topic: "Botanika",
    answer: 1,
    explanation: "Parishin qilish — novdani egib tuproqqa ko'mib qo'yish orqali yangi ildiz hosil qilish va keyinchalik ona o'simlikdan ajratib olish usulidir."
  },
  {
    question: "O'simliklarda ildizning tuproqdan suv va mineral tuzlarni so'rib oluvchi eng faol qismi qaysi?",
    options: ["Ildiz uchi (chexlik)", "O'tkazuvchi zona", "Poya bilan tutashgan qism", "Ildiz tukchalari sohasi"],
    topic: "Botanika",
    answer: 3,
    explanation: "Ildiz tukchalari epidermis hujayralarining o'simtalari bo'lib, ular so'rish yuzasini keskin oshiradi va suvni shimiladi."
  },
  {
    question: "Odamda qon zardobida antitelo (aglyutinin) yetishmagan yoki barcha guruhlarga moslasha oladigan, qon quyishda 'universal retsipient' hisoblangan guruh qaysi?",
    options: ["I (O) qon guruhi", "II (A) qon guruhi", "IV (AB) qon guruhi", "III (B) qon guruhi"],
    topic: "Odam anatomiyasi",
    answer: 2,
    explanation: "IV (AB) qon guruhi eritrotsitlarida aglutinogenlar A va B bo'lib, zardobida aglyutininlar yo'qligi uchun universal retsipient hisoblanadi."
  },
  {
    question: "Odamda jinsiy xromosomalar orqali irsiylanishi mumkin bo'lgan kasalliklarga tashxis qo'yilganda, erkaklarda kasallikning ayollarga nisbatan tezroq namoyon bo'lish sababi nimada?",
    options: ["Erkaklarda xromosomalar umuman yo'qligida", "Erkaklarda bitta X-xromosoma mavjud bo'lib, undagi retsessiv genlarni to'suvchi ikkinchi X yo'qligida", "Ayollarda genlar umuman bo'lmasligida", "Faqat yoshga bog'liqligida"],
    topic: "Genetika",
    answer: 1,
    explanation: "Erkaklar geterogametik (XY) bo'lgani uchun X xromosomadagi har qanday retsessiv patologik gen darhol fenotipda namoyon bo'ladi."
  },
  {
    question: "Birlamchi tana bo'shlig'i (psevdosel) qaysi hayvonlar tipiga xos?",
    options: ["Yumaloq chuvalchanglar", "Halqali chuvalchanglar", "Yassi chuvalchanglar", "Mollyuskalar"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Yumaloq chuvalchanglarda tana bo'shlig'i devorlari o'z epiteliysiga ega emas (birlamchi); halqalilarda ikkilamchi bo'shliq (selom) bo'ladi, yassilarda esa bo'shliq yo'q."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada yangi genotiplar va kombinatsiyalarning hosil bo'lishining asosiy manbalaridan biri nima?",
    options: ["Faqat mitoz", "Faqat hujayraning o'lchami", "Fotosintez", "Jinsiy ko'payish va krossingover"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Jinsiy ko'payish jarayonida xromosomalarning erkin tarqalishi va krossingover kombinativ o'zgaruvchanlikni keltirib chiqaradi."
  },
  {
    question: "Hujayraning bo'linishga tayyorgarlik ko'radigan interfaza davri qaysi bosqichlardan iborat?",
    options: ["Profaza, metafaza, anafaza", "G1 (presintetik), S (sintetik) va G2 (postsintetik) davrlari", "Faqat mitotik davr", "Meyoz I va Meyoz II"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Interfaza uchta ketma-ket bosqichdan iborat bo'lib, sintetik (S) davrda DNK ikkilanishi sodir bo'ladi."
  },
  {
    question: "O'simliklarda ildiz bosimi va transpiratsiya o'rtasidagi farq nimada?",
    options: ["Ikkalasi ham bir xil jarayon", "Transpiratsiya faqat kechasi ishlaydi", "Ildiz bosimi pastdan yuqoriga faol suradi, transpiratsiya esa yuqoridan tortadi", "Ildiz bosimi barglar tomonidan boshqariladi"],
    topic: "Botanika",
    answer: 2,
    explanation: "Ildiz bosimi ildiz hujayralarining faoliyati evaziga suvni pastdan yuqoriga siqib chiqaradi, transpiratsiya esa barglardan bug'lanish kuchi orqali suvni tortib chiqaradi."
  },
  {
    question: "Parchalovchilar (redutsentlar) ekotizimda qanday rol o'ynaydi?",
    options: ["Organik qoldiqlarni mineral birikmalargacha parchalab, ularni moddalar aylanishiga qaytaradi", "Quyosh energiyasini organik moddalarga aylantiradi", "Faqat o'txo'r hayvonlar sonini boshqaradi", "Atmosferadan kislorod yutadi va uni to'playdi"],
    topic: "Ekologiya",
    answer: 0,
    explanation: "Bakteriyalar va zamburug'lar o'lik organik moddalarni mineralizatsiya qiladi, shu tufayli produtsentlar ularni qayta o'zlashtiradi."
  },
  {
    question: "Populyatsiyada tabiiy tanlanishning qaysi turi yangi turlarning paydo bo'lishiga (divergensiyaga) olib keluvchi asosiy omil hisoblanadi?",
    options: ["Stabilizatsiyalovchi tanlanish", "Sun'iy tanlanish", "Harakatlantiruvchi va dizruptiv (buzuvchi) tanlanish", "Faqat genlar dreyfi"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Harakatlantiruvchi va dizruptiv tanlanishlar muhit o'zgarganda yangi belgilarga ega individlarni saqlab qolib, tur ichida tabaqalanish va yangi turlar kelib chiqishiga sabab bo'ladi."
  },
  {
    question: "Odam organizmida qon shakarini kamaytiruvchi va glyukozani to'qimalarga o'tkazuvchi yagona gormon qaysi?",
    options: ["Glyukagon", "Insulin", "Adrenalin", "Tiroksin"],
    topic: "Odam anatomiyasi",
    answer: 1,
    explanation: "Oshqozon osti bezi ishlab chiqaradigan insulin gormoni qondagi ortiqcha glyukozani kamaytirib, organizmni energiya bilan ta'minlaydi."
  },
  {
    question: "O'simliklarda barglarning kuzda to'kilishidan oldin sodir bo'ladigan asosiy biokimyoviy o'zgarish nima?",
    options: ["Xlorofill parchalanib, barg pigmentlari o'zgaradi va ajratuvchi qatlam hosil bo'ladi", "Barglar o'sishdan to'xtab suvni ko'paytiradi", "Faqat ildizga qarab oqsil oqadi", "Fotosintez kuchayadi"],
    topic: "Botanika",
    answer: 0,
    explanation: "Kuzda xlorofill yemirilishi natijasida boshqa pigmentlar (karotin, xantofill) ko'rinib qoladi va ajratuvchi qatlam hosil bo'lib barg uziladi."
  },
  {
    question: "Odam organizmida qon shakarini oshiruvchi va jigardagi glikogenni glyukozaga aylantiruvchi gormon qaysi?",
    options: ["Insulin", "Adrenalin", "Testosteron", "Glyukagon"],
    topic: "Odam anatomiyasi",
    answer: 3,
    explanation: "Oshqozon osti bezining alfa-hujayralari ishlab chiqaradigan glyukagon gormoni qondagi glyukoza kamayganda uni oshiradi."
  },
  {
    question: "Populyatsiyada retsessiv gomozigota (aa) fenotipli individlar 9% ni tashkil etadi (Xardi–Vaynberg muvozanati). Dominant belgili individlar orasida geterozigotalar ulushi taxminan qancha?",
    options: ["42%","46%","49%","70%"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "q²=0,09 → q=0,3, p=0,7. Aa=2pq=0,42. Dominant fenotipli individlar ulushi 1−0,09=0,91. Geterozigotalar ulushi 0,42/0,91≈0,46 (46%)."
  },
  {
    question: "Odam populyatsiyasida erkaklarning 8% i X-xromosomaga birikkan retsessiv belgi (masalan, daltonizm) bilan kasallangan. Populyatsiya muvozanatda deb hisoblab, kasal ayollar ulushini toping.",
    options: ["0,64%","1,6%","8%","14,7%"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "Erkaklarda belgi chastotasi allel chastotasiga teng: q=0,08. Ayol kasal bo'lishi uchun ikkala X da allel kerak: q²=0,0064 (0,64%). 14,7% — tashuvchi ayollar ulushi (2pq)."
  },
  {
    question: "Bir necha urug' tasodifan okean orolida yangi populyatsiya hosil qildi. Ota populyatsiyada nodir (0,5%) bo'lgan allel yangi populyatsiyada 12% chastotada uchraydi. Buning eng ehtimoliy sababi nima?",
    options: ["Barqarorlashtiruvchi tanlanish","Orttirilgan belgilarning irsiylanishi","Asoschi effekti (genetik drift turi)","Yo'nalishli mutatsiya bosimi"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Yangi populyatsiyani kam sonli asoschilar yaratganda ularning genofondi ota populyatsiyaning tasodifiy namunasi bo'ladi, shuning uchun nodir allel chastotasi keskin o'zgarishi mumkin (asoschi effekti)."
  },
  {
    question: "Antibiotiklarga chidamli bakteriyalar paydo bo'lishini Darvin ta'limoti nuqtai nazaridan qaysi fikr to'g'ri tushuntiradi?",
    options: ["Antibiotik bakteriyalarda chidamlilik genini hosil qiladi","Bakteriyalar antibiotikka o'rganib, chidamlilikni avlodlarga beradi","Chidamlilik faqat boshqa turlardan gen olish orqali paydo bo'ladi","Populyatsiyada oldindan mavjud chidamli variantlar antibiotik ta'sirida tanlanib, ko'payadi"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Mutatsiyalar tasodifiy va muhit ta'siridan oldin paydo bo'ladi. Antibiotik yo'naltiruvchi tanlanish omili sifatida chidamli variantlarni saqlab qoladi, sezgirlarini yo'q qiladi."
  },
  {
    question: "Retsessiv letal allel (aa genotip nobud bo'ladi) chastotasi q=0,2 ga teng. Muvozanatdagi populyatsiyada bir avloddan keyin shu allel chastotasi taxminan qanday bo'ladi?",
    options: ["0,04","0,10","0,17","0,20"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Nobud bo'lgan aa ulushi q²=0,04. Qolganlar orasida q′=pq/(1−q²)=0,16/0,96≈0,17 (q′=q/(1+q)=1/6)."
  },
  {
    question: "Quyidagi misollardan qaysi biri to'g'ri tasniflangan?",
    options: ["Qushlarda to'rt kamerali yurakning paydo bo'lishi — idioadaptatsiya","Parazit tasmasimon chuvalchanglarda hazm tizimining yo'qolishi — degeneratsiya","Gulli o'simliklarda qo'sh urug'lanish — degeneratsiya","Qushlar tumshug'ining turli shaklga ega bo'lishi — aromorfoz"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Parazitlikka o'tish tufayli organlarning soddalashishi va yo'qolishi degeneratsiya hisoblanadi. To'rt kamerali yurak va qo'sh urug'lanish — aromorfozlar, tumshuq shakllari esa idioadaptatsiya."
  },
  {
    question: "Biologik progress mezonlari qaysi javobda to'liq va to'g'ri berilgan?",
    options: ["Individlar sonining ko'payishi, arealning kengayishi, yangi kenja turlar va taksonlar sonining ortishi","Individlar sonining kamayishi, arealning torayishi, tur xilma-xilligining ortishi","Faqat morfologik murakkablashuv va tuzilishning takomillashuvi","Individlar sonining ko'payishi, arealning torayishi, taksonlarning kamayishi"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "A.N. Severtsov va I.I. Shmalgauzen bo'yicha biologik progress: son ortishi, areal kengayishi va kenja taksonlarning ko'payishi. Regressda bu ko'rsatkichlar teskari yo'nalishda bo'ladi."
  },
  {
    question: "Sintetik evolyutsiya nazariyasiga ko'ra elementar birlik, elementar material va elementar hodisa qaysi javobda to'g'ri ko'rsatilgan?",
    options: ["Individ; kombinativ o'zgaruvchanlik; tur hosil bo'lishi","Tur; modifikatsion o'zgaruvchanlik; tabiiy tanlanish","Biotsenoz; mutatsiya; gen oqimi","Populyatsiya; mutatsion va kombinativ o'zgaruvchanlik; populyatsiya genofondining yo'nalishli o'zgarishi"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Evolyutsiya populyatsiyada kechadi (elementar birlik), uning materiali mutatsion va kombinativ o'zgaruvchanlik, elementar hodisa esa populyatsiya genofondining barqaror o'zgarishi."
  },
  {
    question: "Ot va eshak chatishtirilganda hosil bo'ladigan xachir naslsiz bo'ladi. Bu qaysi reproduktiv izolyatsiya shakliga misol?",
    options: ["Prezigotik: etologik izolyatsiya","Prezigotik: mexanik izolyatsiya","Postzigotik: duragaylarning steril bo'lishi","Geografik izolyatsiya"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Chatishish va urug'lanish sodir bo'ladi, zigota rivojlanadi, lekin duragay (xachir) steril. Bu zigotadan keyingi (postzigotik) izolyatsiya shakli."
  },
  {
    question: "G.D. Karpechenko turp (2n=18) va karam (2n=18) ni chatishtirdi. F₁ duragaylari 18 xromosomali va steril bo'ldi, xromosomalar soni ikki marta oshirilgach (36) unumdor bo'ldi. Sterillik sababi va unumdorlik tiklanishi izohi qaysi javobda to'g'ri?",
    options: ["Xromosomalar soni toq, shuning uchun mitoz kechmaydi; ikkilanganda son juft bo'ladi","F₁ da gomologik xromosomalar yo'q, meyozda konyugatsiya buziladi; ikkilanganda har bir xromosoma o'z juftini topadi","F₁ da genlar dominantlik qilmaydi; ikkilanganda dominantlik tiklanadi","Duragay gametalari o'lik bo'ladi; ikkilanganda mutatsiyalar yo'qoladi"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "F₁ da 9 turp va 9 karam xromosomasi bor, ular o'zaro gomologik emas, meyozda juftlashmaydi. Poliploidiyadan keyin har bir xromosoma gomologik juft topadi va unumdor gametalar hosil bo'ladi."
  },
  {
    question: "Ot evolyutsiyasi filogenetik qatorida (eogippusdan hozirgi otgacha) oldingi oyoq barmoqlari soni qanday o'zgargan?",
    options: ["To'rt barmoqdan uch barmoqqa, so'ng bitta barmoqqa kamaygan, oyoq uzaygan","Bir barmoqdan uch barmoqqa ko'paygan","Besh barmoqdan ikki barmoqqa kamaygan","O'zgarmagan, faqat gavdasi kattalashgan"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "V.O. Kovalevskiy tadqiqotlariga ko'ra ot ajdodlarida barmoqlar soni kamayib, III barmoq asosiy tayanchga aylangan, oyoq uzaygan, tishlar murakkablashgan."
  },
  {
    question: "Quruqlikka chiqqan dastlabki umurtqalilar (stegosefallar) qaysi guruhdan va qaysi geologik davrda kelib chiqqan?",
    options: ["Tog'ay baliqlardan, Silur davrida","Nurli suzgichli baliqlardan, Perm davrida","Sudralib yuruvchilardan, Karbon davrida","Lobsimon suzgichli (kross-pterigiy) baliqlardan, Devon davrida"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Devon davrida lobsimon suzgichli baliqlardan ilk suvda-quruqlikda yashovchilar (stegosefallar) kelib chiqqan."
  },
  {
    question: "Neandertallar haqidagi qaysi fikr zamonaviy antropologiya ma'lumotlariga ko'proq mos keladi?",
    options: ["Ular Homo sapiensning to'g'ridan-to'g'ri va yagona ajdodi","Ular Homo sapiens bilan hech qachon bir vaqtda yashamagan","Ular Homo sapiensning ajdodi emas, evolyutsiyaning yon shoxi bo'lib, u bilan bir davrda yonma-yon yashagan","Ular Australopitekning eng qadimgi vakillari"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Neandertallar (paleoantroplar) Yevropa va G'arbiy Osiyoda yashagan, Kroman'on odami (neoantrop) bilan bir davrda uchragan. Ular hozirgi odamning to'g'ridan-to'g'ri ajdodi emas, yon shox hisoblanadi."
  },
  {
    question: "S.S. Chetverikov tabiiy populyatsiyalarni 'mutatsiyalar shimgichi' deb atagan. Bunga sabab nima?",
    options: ["Mutatsiyalar tanlanish ta'sirida tezda yo'qoladi","Retsessiv mutatsiyalar geterozigota holatda fenotipda namoyon bo'lmay, tanlanishdan chetda saqlanib to'planadi","Mutatsiyalar faqat gametalarda paydo bo'ladi","Populyatsiyada faqat dominant mutatsiyalar saqlanadi"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Retsessiv allellar geterozigotalarda yashirin holda saqlanadi, shu sababli populyatsiya yashirin o'zgaruvchanlik zaxirasiga ega bo'ladi."
  },
  {
    question: "Bezgak keng tarqalgan hududlarda o'roqsimon hujayrali anemiya allelining (HbS) chastotasi yuqori bo'ladi. Buning eng to'g'ri izohi qaysi?",
    options: ["Geterozigotalar (HbA/HbS) bezgakka chidamli va moslashuvchanligi yuqori; tanlanish ikkala allelni saqlab turadi","HbS allel bezgak plazmodiysi ta'sirida paydo bo'ladi","HbS gomozigotalar bezgakdan to'liq himoyalangan","Bu allel faqat genetik drift tufayli ko'paygan, tanlanishga aloqasi yo'q"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "Geterozigotalar ustunligi (balanslovchi tanlanish): HbA/HbS bezgakda omon qolish ehtimoli yuqori, HbS/HbS esa noqulay, shu sababli populyatsiyada ikkala allel saqlanadi."
  },
  {
    question: "Darvin Madagaskarda nektar shpori 30 sm bo'lgan orxideya borligini ko'rib, uni changlatuvchi, xartumi shunday uzun kapalak bo'lishi kerak, deb taxmin qilgan (keyinchalik topilgan). Orxideya shpori va kapalak xartumining birgalikda uzayishi qanday jarayonga misol?",
    options: ["Konvergensiya","Adaptiv radiatsiya","Genetik drift","Koevolyutsiya"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Ikki turning o'zaro ta'sirda bir-birining evolyutsiyasiga ta'sir ko'rsatib, birgalikda o'zgarishi koevolyutsiya deyiladi."
  },
  {
    question: "Ikki zaharli (achchiq) kapalak turi bir-biriga o'xshash ogohlantiruvchi rangga ega bo'lib, yirtqichlar ularni bir xil tarzda eslab qoladi. Bu hodisa qanday ataladi?",
    options: ["Beyts mimikriyasi","Kriptik (yashiruvchi) rang","Myuller mimikriyasi","Maskirovka"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Myuller mimikriyasida bir nechta himoyalangan (zaharli) tur o'zaro o'xshash bo'ladi. Beyts mimikriyasida esa himoyasiz tur himoyalangan turga taqlid qiladi."
  },
  {
    question: "Tovus erkagining uzun va yorqin dumi yirtqichlarga qulay nishon bo'lsa-da, populyatsiyada saqlanib qolgan. Buni qaysi tushuncha eng yaxshi izohlaydi?",
    options: ["Barqarorlashtiruvchi tanlanish","Jinsiy tanlanish (urg'ochilar tanlovi)","Genetik drift","Orttirilgan belgilarning irsiylanishi"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "Jinsiy tanlanishda belgi omon qolishga emas, juftlashish va nasl qoldirish muvaffaqiyatiga ta'sir qiladi. Urg'ochilar yorqin erkaklarni afzal ko'rgani uchun belgi saqlanadi."
  },
  {
    question: "Miller va Yuri tajribasida (1953) dastlabki Yer atmosferasini taqlid qilish uchun qaysi gazlar aralashmasi va qanday ta'sir qo'llangan?",
    options: ["Metan, ammiak, vodorod va suv bug'i; elektr uchqunlari","Kislorod, azot va karbonat angidrid; ultrabinafsha nurlar","Metan, kislorod va suv bug'i; yuqori bosim","Azot, vodorod sulfid va kislorod; radiatsiya"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "Tajribada qaytaruvchi atmosfera (CH₄, NH₃, H₂, H₂O bug'i) elektr razryadlari ta'sirida aminokislotalar kabi organik moddalar hosil qilgan."
  },
  {
    question: "Quyidagi xususiyatlardan qaysi biri mitoxondriya va xloroplastlarning endosimbiotik kelib chiqishiga zid (uni qo'llab-quvvatlamaydi)?",
    options: ["Halqasimon DNK mavjudligi","70S ribosomalarning mavjudligi","Ikkiga bo'linish yo'li bilan ko'payishi","DNKsining yadro DNKsi kabi gistonlar bilan o'ralgan va oqsil sintezi 80S ribosomalarda kechishi"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Bu organoidlarda prokariotlarga o'xshash halqasimon yalang'och DNK, 70S ribosomalar va ikkiga bo'linish bor, bu endosimbioz dalillari. Histonli DNK va 80S ribosoma esa eukariot yadro xususiyati."
  },
  {
    question: "Populyatsiya ichidagi genetik xilma-xillikni odatda oshiradigan omillar juftligi qaysi?",
    options: ["Genetik drift va yo'nalishli tanlanish","Izolyatsiya va barqarorlashtiruvchi tanlanish","Mutatsiya jarayoni va gen oqimi (migratsiya)","Yaqin qarindoshlar chatishuvi va genetik drift"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Mutatsiya yangi allellar hosil qiladi, migratsiya esa boshqa populyatsiyalardan yangi allellarni olib keladi. Drift, yo'nalishli va barqarorlashtiruvchi tanlanish, qarindoshlar chatishuvi odatda xilma-xillikni kamaytiradi."
  },
  {
    question: "Fosil suyakda ¹⁴C miqdori tirik organizmdagiga nisbatan 25% ni tashkil etadi. ¹⁴C yarim yemirilish davri 5730 yil bo'lsa, qoldiq taxminan necha yillik?",
    options: ["5730","11 460","17 190","22 920"],
    topic: "Evolyutsiya",
    answer: 1,
    explanation: "25% = 1/4 = (1/2)². Demak, 2 yarim yemirilish davri o'tgan: 2×5730=11 460 yil."
  },
  {
    question: "Populyatsiyada 500 ta individdan 200 tasi AA, 200 tasi Aa, 100 tasi aa genotipli. A allel chastotasi va populyatsiyaning Xardi–Vaynberg holati haqida qaysi javob to'g'ri?",
    options: ["p=0,6; muvozanatda emas: geterozigotalar kutilganidan kam","p=0,6; muvozanatda, chunki allel chastotalari o'zgarmagan","p=0,4; muvozanatda emas: geterozigotalar kutilganidan ko'p","p=0,5; muvozanatda"],
    topic: "Evolyutsiya",
    answer: 0,
    explanation: "p=(2×200+200)/1000=0,6, q=0,4. Muvozanatda AA=180, Aa=240, aa=80 bo'lishi kerak edi. Kuzatilgan Aa=200 kutilganidan kam, demak populyatsiya muvozanatda emas."
  },
  {
    question: "Latimeriya va ginkgo kabi turlar geologik o'tmishdagi guruhlarning xususiyatlarini saqlab qolgan holda hozirgacha yashab kelmoqda. Ular qanday ataladi?",
    options: ["Atavizmlar","Rudimentlar","Invaziv turlar","Tirik fossillar (relikt shakllar)"],
    topic: "Evolyutsiya",
    answer: 3,
    explanation: "Qadimgi guruhlarning belgilarini saqlagan, hozirgi kunda kam sonli turlar bilan vakil bo'lgan organizmlar relikt (tirik fossil) shakllar deyiladi."
  },
  {
    question: "Darvin ta'limotiga ko'ra yashash uchun kurashning eng shiddatli shakli qaysi?",
    options: ["Turlararo kurash","Noqulay abiotik sharoitlar bilan kurash","Ichkituriy kurash (bir tur individlari o'rtasidagi)","Yirtqich va o'lja o'rtasidagi kurash"],
    topic: "Evolyutsiya",
    answer: 2,
    explanation: "Bir tur individlarining ehtiyojlari (oziq, makon, juft) bir xil bo'lgani uchun ular o'rtasidagi raqobat eng kuchli bo'ladi."
  },
  {
    question: "Prokariot genida kodlanadigan oqsil 120 ta aminokislotadan iborat. Stop-kodonni hisobga olib, shu genning ikki zanjirli DNK qismidagi jami nukleotidlar sonini toping (intronlar yo'q).",
    options: ["360","363","720","726"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "120 aminokislota + 1 stop-kodon = 121 kodon → bir zanjirda 363 nukleotid, ikki zanjirda 363×2=726."
  },
  {
    question: "Ikki zanjirli DNK fragmentida jami 3000 ta nukleotid bor, timin 20% ni tashkil etadi. Shu fragmentdagi vodorod bog'lari soni qancha?",
    options: ["3300","3600","3900","4500"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "T=A=600, G=C=900 (har biri 30%). A=T orasida 2 ta, G≡C orasida 3 ta bog' bor: 600×2+900×3=1200+2700=3900."
  },
  {
    question: "7 molekula glyukozadan 4 tasi to'liq kislorodli oksidlandi (glikolizda 2 ATF va kislorodli bosqichda 36 ATF hosil bo'ladi), 3 tasi esa sut kislotali bijg'ishga uchradi. Hosil bo'lgan jami ATF sonini toping.",
    options: ["158","164","176","266"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "To'liq oksidlanish: 4×(2+36)=152 ATF. Bijg'ish: 3×2=6 ATF. Jami 152+6=158."
  },
  {
    question: "2n=20 bo'lgan organizmda meyoz I ning anafazasida hujayraning bir qutbiga ketayotgan xromosomalar va xromatidlar soni qanday?",
    options: ["20 xromosoma, 20 xromatid","10 xromosoma, 20 xromatid","10 xromosoma, 10 xromatid","20 xromosoma, 40 xromatid"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Meyoz I anafazasida gomologik xromosomalar ajraladi, xromatidlar esa ajralmaydi. Har qutbga 10 ta ikki xromatidli xromosoma boradi, ya'ni 20 xromatid."
  },
  {
    question: "2n=12 bo'lgan organizmda krossingover bo'lmaganda, gomologik xromosomalarning mustaqil taqsimlanishi hisobiga nechta xil gameta hosil bo'lishi mumkin?",
    options: ["6","12","36","64"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Gameta xillari soni 2ⁿ, bunda n — gaploid to'plamdagi xromosomalar soni (6). 2⁶=64."
  },
  {
    question: "2n=18 bo'lgan hujayrada meyoz I telofazasi oxirida hosil bo'lgan har bir hujayrada xromosoma soni va DNK miqdori (c) qanday?",
    options: ["9 xromosoma, 1c","18 xromosoma, 2c","9 xromosoma, 2c","18 xromosoma, 4c"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "Meyoz I natijasida xromosomalar soni ikki marta kamayadi (n=9), lekin har bir xromosoma hali ikki xromatidli, shuning uchun DNK miqdori 2c. 1c ga meyoz II dan keyin tushiladi."
  },
  {
    question: "Genning matritsa zanjiri 3'-TAC-GGT-CCA-5' ketma-ketligiga ega. Ikkinchi kodonga mos keluvchi tRNK antikodoni qaysi?",
    options: ["CCA","GGU","UAC","CCU"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Matritsa GGT → mRNK kodoni CCA → tRNK antikodoni GGU (matritsa tripleti bilan bir xil, faqat T o'rniga U)."
  },
  {
    question: "Quyidagi gen mutatsiyalaridan qaysi biri oqsil tuzilishiga eng kam ta'sir ko'rsatishi mumkin?",
    options: ["Kodondagi uchinchi nukleotid almashinuvi natijasida o'sha aminokislotani kodlovchi sinonim kodon hosil bo'lishi","Genning boshida bitta nukleotid qo'shilishi","Aminokislota kodonining stop-kodonga aylanishi","Genning o'rtasida ikkita nukleotid yo'qolishi"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Genetik kod degeneratsiyalangan: ko'pincha uchinchi nukleotid almashinuvi bir xil aminokislotani beradi (jim mutatsiya). Kadr siljishi va nonsens mutatsiyalar oqsilni keskin o'zgartiradi."
  },
  {
    question: "Laktoza yo'qligida E. coli lak-operoni 'o'chiq' bo'ladi. Muhitga laktoza qo'shilganda nima sodir bo'ladi?",
    options: ["Laktoza RNK-polimerazaga bog'lanib promotorni yopadi","Laktoza (allolaktoza) repressor oqsilga bog'lanib uni operatordan ajratadi va strukturaviy genlar transkripsiyalanadi","Laktoza operatorga bevosita bog'lanib transkripsiyani to'xtatadi","Laktoza gen-regulyatorni mutatsiyaga uchratadi"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Repressor operatorga bog'lanib transkripsiyani to'sib turadi. Induktor (laktoza) repressorni inaktivlaydi, RNK-polimeraza operon genlarini o'qiy boshlaydi."
  },
  {
    question: "Quyidagi moddalar juftligidan qaysi biri plazmatik membrananing lipid qatlami orqali tashuvchi oqsilsiz, oddiy diffuziya bilan o'ta oladi?",
    options: ["Glyukoza va aminokislotalar","Na⁺ va K⁺ ionlari","Suvda eriydigan yirik oqsil molekulalari","Kislorod va steroid gormonlar"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Kichik nopolyar (gidrofob) molekulalar va gazlar (O₂, CO₂, steroidlar) lipid qatlamdan erkin o'tadi. Qutbli va zaryadlangan moddalar uchun tashuvchi yoki kanal oqsillar kerak."
  },
  {
    question: "Kalvin sikli natijasida 1 molekula glyukoza sintezlanishi uchun jami nechta CO₂, ATF va NADF·H sarflanadi?",
    options: ["6 CO₂, 12 ATF, 18 NADF·H","12 CO₂, 18 ATF, 12 NADF·H","6 CO₂, 18 ATF, 12 NADF·H","6 CO₂, 36 ATF, 6 NADF·H"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "6 CO₂ ning 6 marta biriktirilishi uchun 18 ATF va 12 NADF·H sarflanadi va 1 glyukoza hosil bo'ladi."
  },
  {
    question: "Fotosintez jarayonida 18 g glyukoza hosil bo'lganda ajralib chiqqan kislorod massasi qancha? (Ar: C=12, H=1, O=16)",
    options: ["19,2 g","9,6 g","32 g","38,4 g"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "6CO₂+6H₂O→C₆H₁₂O₆+6O₂. 180 g glyukozaga 6×32=192 g O₂ to'g'ri keladi. 18 g glyukoza uchun 19,2 g O₂."
  },
  {
    question: "Kemosintez haqidagi qaysi fikr to'g'ri?",
    options: ["Kemosintezlovchi bakteriyalar CO₂ dan organik modda hosil qilishda yorug'lik energiyasidan foydalanadi","Nitrifikatsiyalovchi bakteriyalar ammiak yoki nitritni oksidlab ajralgan energiya hisobiga CO₂ dan organik modda sintezlaydi","Kemosintez faqat eukariotlarga xos","Kemosintezda suv fotolizlanib kislorod ajraladi"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Kemosintezda energiya anorganik moddalar (NH₃, H₂S, Fe²⁺ va b.) oksidlanishidan olinadi. Bu jarayon yorug'likka va suv fotolliziga bog'liq emas, faqat prokariotlarda uchraydi."
  },
  {
    question: "OIV (retrovirus) hujayraga kirgach irsiy axborot oqimi qanday kechadi?",
    options: ["DNK → RNK → oqsil","RNK → oqsil, DNK hosil bo'lmaydi","Oqsil → RNK → DNK","RNK → DNK (teskari transkriptaza) → RNK → oqsil"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Retroviruslarda teskari transkriptaza virus RNKsi asosida DNK sintezlaydi. Bu DNK xo'jayin genomiga kiradi va undan yana RNK hamda oqsillar hosil bo'ladi."
  },
  {
    question: "Genetik kodning 'ustma-ust tushmaslik' xususiyati nimani bildiradi?",
    options: ["Bitta aminokislota bir nechta kodon bilan kodlanadi","Barcha tirik organizmlarda kod bir xil","mRNKdagi har bir nukleotid faqat bitta kodon tarkibiga kiradi","Kodonlar oralig'ida ajratuvchi belgilar bor"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "O'qish bir kodondan keyin keyingisiga o'tadi, nukleotidlar ikki kodonga bir vaqtda kirmaydi. Birinchi javob — degeneratsiya, ikkinchisi — universallik."
  },
  {
    question: "Og'ir azot (¹⁵N) bilan belgilangan DNKli bakteriyalar oddiy (¹⁴N) muhitga o'tkazilib, 3 marta bo'lindi. Hosil bo'lgan 8 ta DNK molekulasidan nechtasida ¹⁵N saqlanadi?",
    options: ["1","2","4","8"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Replikatsiya yarim konservativ. Dastlabki ikkita ¹⁵N zanjir har doim bittadan yangi molekulaga o'tadi, shuning uchun 8 ta molekulaning faqat 2 tasida ¹⁵N bor (¹⁵N/¹⁴N duragay)."
  },
  {
    question: "Replikatsiya vilkasida orqada qoluvchi zanjirda hosil bo'lgan Okazaki fragmentlarini bir-biriga tikib, yaxlit zanjir hosil qiluvchi ferment qaysi?",
    options: ["DNK-ligaza","Xelikaza","RNK-polimeraza","Restriktaza"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Orqada qoluvchi zanjir qisqa bo'laklar (Okazaki fragmentlari) bilan sintezlanadi. Ularni DNK-ligaza kovalent bog' bilan biriktiradi."
  },
  {
    question: "Lizosomalarning gidrolitik fermentlari hujayrada qaysi ketma-ketlikda hosil bo'ladi va qadoqlanadi?",
    options: ["Silliq EPT da sintezlanadi, yadroda qadoqlanadi","Mitoxondriyada sintezlanadi, lizosomaga o'tadi","Donador EPT ribosomalarida sintezlanadi, Golji kompleksida qadoqlanadi, lizosoma pufakchalari ajraladi","Erkin ribosomalarda sintezlanadi, peroksisomaga o'tadi"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "Membrana bilan o'ralgan organoidlarga mo'ljallangan oqsillar donador EPT dagi ribosomalarda sintezlanadi, Golji kompleksida o'zgartirilib, lizosoma pufakchalariga o'raladi."
  },
  {
    question: "Hujayraning qaysi organoidida katalaza fermenti zararli vodorod peroksidni suv va kislorodga parchalaydi?",
    options: ["Lizosoma","Golji kompleksi","Vakuola","Peroksisoma"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Peroksisomalarda oksidlanish reaksiyalari natijasida hosil bo'lgan H₂O₂ katalaza fermenti yordamida 2H₂O₂→2H₂O+O₂ ga parchalanadi."
  },
  {
    question: "Kolxitsin moddasi mitozda nima uchun hujayralarni metafazada to'xtatib qo'yadi?",
    options: ["DNK replikatsiyasini to'xtatadi","Urchuq iplari (mikronaychalar) hosil bo'lishini buzadi","Sentromerani bo'ladi","Yadro qobig'ining erishini oldini oladi"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Kolxitsin tubulin polimerizatsiyasini to'sadi, urchuq ipi shakllanmaydi, xromosomalar qutblarga tortilmaydi. Shu sababli poliploid hujayralar olishda ishlatiladi."
  },
  {
    question: "Quyidagi qatorlarning qaysi birida keltirilgan tuzilmalarning hammasi ham bakteriya, ham o'simlik hujayrasida bo'ladi?",
    options: ["Ribosoma, plazmatik membrana, sitoplazma","Mitoxondriya, nukleoid, ribosoma","Plazmatik membrana, Golji kompleksi, hujayra devori","Yadro, ribosoma, xloroplast"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "Mitoxondriya, Golji kompleksi, yadro va xloroplast bakteriyalarda yo'q. Ribosoma, plazmatik membrana va sitoplazma barcha hujayralarga xos."
  },
  {
    question: "Xromatinning asosiy tuzilma birligi — nukleosoma qanday tuzilgan?",
    options: ["Faqat oqsil bilan bog'lanmagan DNK bo'lagi","Histon bo'lmagan 4 ta oqsil molekulasiga o'ralgan RNK","8 ta histon oqsili molekulasidan iborat o'zak va uni o'rab turgan DNK bo'lagi","Ikki xromatid birlashgan joy"],
    topic: "Sitologiya",
    answer: 2,
    explanation: "Nukleosomada DNK ipi sakkizta histon oqsili (oktamer) atrofiga o'raladi. Nukleosomalar zanjirsimon joylashib xromatinni hosil qiladi."
  },
  {
    question: "Hujayrada DNK jiddiy shikastlanganda p53 oqsili qanday vazifani bajaradi?",
    options: ["Hujayra siklini to'xtatib, tuzatish imkonini beradi; tuzatib bo'lmasa apoptozni ishga tushiradi","Hujayra bo'linishini tezlashtiradi","DNK replikatsiyasini ikki baravar oshiradi","Telomerazani faollashtirib hujayrani o'lmas qiladi"],
    topic: "Sitologiya",
    answer: 0,
    explanation: "p53 'genom qo'riqchisi': shikastlanishda siklni to'xtatadi, DNK tiklanishini ishga soladi, tuzatib bo'lmasa hujayrani apoptozga yo'naltiradi. Uning yo'qolishi o'sma rivojlanishiga olib kelishi mumkin."
  },
  {
    question: "Raqobatli ingibitor ferment faolligini qanday pasaytiradi va uning ta'sirini qanday kamaytirish mumkin?",
    options: ["Fermentni denaturatsiyalaydi; haroratni oshirish bilan","Substratga o'xshash bo'lib aktiv markazga bog'lanadi; substrat konsentratsiyasini oshirish bilan","Aktiv markazdan uzoqda bog'lanib ferment shaklini o'zgartiradi; substratni ko'paytirish bilan","Substratni parchalaydi; ferment konsentratsiyasini kamaytirish bilan"],
    topic: "Sitologiya",
    answer: 1,
    explanation: "Raqobatli ingibitor substrat bilan aktiv markaz uchun raqobatlashadi. Substrat konsentratsiyasi oshganda ingibitor siqib chiqariladi. Uchinchi javob — raqobatsiz ingibitorga xos."
  },
  {
    question: "Mitoxondriyada oksidlovchi fosforlanish jarayonida ATF sintezi uchun to'g'ridan-to'g'ri energiya manbai nima?",
    options: ["Glikoliz natijasida hosil bo'lgan piruvat","Krebs siklida ajraladigan CO₂","Kislorodning ATF-sintazaga to'g'ridan-to'g'ri bog'lanishi","Ichki membrananing ikki tomonidagi H⁺ (proton) gradienti"],
    topic: "Sitologiya",
    answer: 3,
    explanation: "Elektron tashish zanjiri protonlarni matriksdan membranalararo bo'shliqqa chiqaradi. Protonlar ATF-sintaza orqali matriksga qaytishda ajralgan energiya ATF sintezini ta'minlaydi."
  },
  {
    question: "Jigar qurti (Fasciola hepatica) hayot siklida oraliq xo'jayin va yangi xo'jayinni yuqtiruvchi invazion bosqich qaysi javobda to'g'ri ko'rsatilgan?",
    options: ["Planariya; sista","Qoramol; finna","Kichik hovuz salyangozi; adoleskariya","Anofeles chivini; sporozoit"],
    topic: "Zoologiya",
    answer: 2,
    explanation: "Miratsidiy kichik hovuz salyangoziga kirib, sporosista, redi va serkariya bosqichlaridan o'tadi. Serkariya o'simlikka yopishib adoleskariyaga (sistaga) aylanadi va o'txo'r hayvon yoki odam yutganda yuqadi."
  },
  {
    question: "Quyidagi qatorlarning qaysi birida faqat chala o'zgarish (pupa bosqichisiz) bilan rivojlanadigan hasharotlar keltirilgan?",
    options: ["Chigirtka, tarakan, shira","Kapalak, asalari, chumoli","Pashsha, chivin, burga","Qo'ng'iz, ari, pashsha"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Chigirtka, tarakan va shirada tuxum → lichinka (nimfa) → imago bosqichlari o'tadi, pupa yo'q. Kapalak, asalari, pashsha, chivin, burga va qo'ng'izlar to'liq o'zgarish bilan rivojlanadi."
  },
  {
    question: "Daryo qisqichbaqasi (qisqichbaqasimonlar sinfi) o'rgimchaksimonlardan qaysi belgisi bilan farq qiladi?",
    options: ["Boshko'krak bo'limining yo'qligi","O'pka xaltachalari va traxeya bilan nafas olishi","Mo'ylovlarining bo'lmasligi","Ikki juft mo'ylovi (antenna) bo'lishi va jabra bilan nafas olishi"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Qisqichbaqasimonlarda ikki juft mo'ylov va jabra nafasi xos. O'rgimchaksimonlarda mo'ylov yo'q, nafas o'pka xaltachalari yoki traxeya orqali kechadi."
  },
  {
    question: "Quyon va kemiruvchilarning tishlari tuzilishiga xos qaysi javob to'g'ri?",
    options: ["Qoziq tishlari kuchli rivojlangan, kesuvchi tishlari yo'q","Qoziq tishlari yo'q, kesuvchi tishlari ildizsiz bo'lib umr bo'yi o'sadi, ular va oziq tishlar orasida tishsiz oraliq bor","Barcha tishlari bir xil shaklda va ildizsiz","Yirtqich tishlari ildizli, kesuvchi tishlari o'smaydi"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Kesuvchi tishlar yemirilgani sari o'sib turadi. Qoziq tishlar bo'lmagani uchun kesuvchi va oziq tishlar orasida tishsiz oraliq (diastema) hosil bo'ladi."
  },
  {
    question: "Yirtqich sutemizuvchilarning 'yirtqich tishi' deb nomlangan tishlari qaysilar?",
    options: ["Yuqori va pastki jag'dagi qoziq tishlar","Yuqori va pastki jag'dagi birinchi kesuvchi tishlar","Yuqori jag'ning oxirgi kichik oziq tishi va pastki jag'ning birinchi katta oziq tishi","Yuqori va pastki jag'ning oxirgi katta oziq tishlari"],
    topic: "Zoologiya",
    answer: 2,
    explanation: "Qoziq tishlar o'ljani ushlab turadi, yirtqich tishlar esa qaychisimon ishlab go'shtni kesadi."
  },
  {
    question: "Qushlarda siydik pufagining bo'lmasligi va ayirish mahsuloti sifatida siydik kislotasi ajralishining biologik ahamiyati nima?",
    options: ["Suvni tejash va tana massasini kamaytirish (uchishga moslashuv)","Tanadagi tuzlar miqdorini oshirish","Qonning kislorod tashish xususiyatini kuchaytirish","Qanotlarning issiqlik rejimini tartibga solish"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Siydik kislotasi kam suv bilan quyuq holda chiqariladi, siydik pufagi yo'qligi esa tana massasini yengillashtiradi. Ikkalasi uchishga moslashuvdir."
  },
  {
    question: "Ilon tilini tez-tez chiqarib kiritishining asosiy sababi nima?",
    options: ["Tana haroratini pasaytirish","Havodagi hid molekulalarini tutib, tanglaydagi hid bilish (Yakobson) organiga yetkazish","Ovoz chiqarish","Suv ichish uchun suyuqlikni so'rish"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Ikkiga bo'lingan til hid zarralarini tutadi va ularni Yakobson organiga yetkazadi. Ilon shu yo'l bilan o'ljani va dushmanni sezadi."
  },
  {
    question: "Sudralib yuruvchilarning quruqlikda ko'payishga moslashuvi sifatida qaysi javob to'g'ri?",
    options: ["Tashqi urug'lanish va suvda tuxum qo'yish","Embrionning suvdagi lichinka bosqichini o'tishi","Tuxumda faqat sariqlik bo'lishi, embrion qobiqlarining bo'lmasligi","Ichki urug'lanish, tuxumning zich po'st bilan o'ralishi va embrion qobiqlari (amnion, allantois) hosil bo'lishi"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Amnion embrionni suyuq muhitda saqlaydi, allantois ayirish mahsulotlarini yig'adi va gaz almashinuvida qatnashadi. Shuning uchun sudralib yuruvchilar suvdan mustaqil ko'payadi."
  },
  {
    question: "Qaysi hayvonlar guruhida asab tizimi halqumusti asab halqasi va qorin tomonda joylashgan zanjirsimon asab tugunlaridan iborat?",
    options: ["Ichakbo'shliqlilar va g'ovaklilar","Xordalilar va ignatanlilar","Halqali chuvalchanglar va bo'g'imoyoqlilar","Yassi va yumaloq chuvalchanglar"],
    topic: "Zoologiya",
    answer: 2,
    explanation: "Halqali chuvalchanglar va bo'g'imoyoqlilarda qorin asab zanjiri bo'ladi. Xordalilarda asab tizimi naychasimon va orqa tomonda joylashgan, ichakbo'shliqlilarda esa tarqoq (to'rsimon) tuzilgan."
  },
  {
    question: "Odam qanday holatda cho'chqa solityori (Taenia solium) ning oraliq xo'jayiniga aylanadi?",
    options: ["Parazit tuxumlarini yutganda: onkosfera qon orqali to'qimalarga o'tib, finnaga aylanadi (sistitserkoz)","Pishmagan finnali go'sht yeganda","Faqat onasining qornida homila davrida","Chivin chaqqanda"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Finnali go'shtni yeyish solityorning voyaga yetgan shakli ichakda rivojlanishiga olib keladi. Tuxumlarni yutish esa finna to'qimalarda rivojlanishiga, ya'ni sistitserkozga sabab bo'ladi."
  },
  {
    question: "Teri leyshmanioziga (pend yarasi) sabab bo'luvchi leyshmaniyalarni odamga qaysi hasharot tashiydi?",
    options: ["Anofeles chivini","Moskit (Phlebotomus)","Se-se pashshasi","Bit"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Leyshmaniyalar mayda qon so'ruvchi moskitlar orqali yuqadi. Anofeles bezgak plazmodiysini, se-se pashshasi tripanosomani tashiydi."
  },
  {
    question: "Infuzoriya-tufelkada konyugatsiya jarayonining natijasi qanday?",
    options: ["Individlar soni ikki baravar ko'payadi","Makronukleus ikkiga bo'linib ko'payish sodir bo'ladi","Ikkala individ qo'shilib bitta hujayra hosil qiladi","Individlar mikronukleus materiali bilan almashadi, genetik jihatdan yangilanadi, soni ko'paymaydi"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Konyugatsiya jinsiy jarayon: irsiy material almashinadi, lekin individlar soni ko'paymaydi. Tufelka odatda ikkiga bo'linib ko'payadi."
  },
  {
    question: "Evglena hayvonlar va o'simliklar o'rtasidagi o'tish shakli deb hisoblanadi. Buning sababi nima?",
    options: ["Yorug'likda xloroplastlari yordamida fotosintez qiladi, qorong'ida esa tayyor organik moddalar bilan oziqlanadi","Faqat avtotrof oziqlanadi va xivchini yo'q","Hujayra devori sellyulozadan iborat va harakatlanmaydi","Faqat parazit holda yashaydi"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Evglena miksotrof: yorug'likda avtotrof, qorong'ida geterotrof oziqlanadi. Shuningdek, xivchin yordamida harakatlanadi."
  },
  {
    question: "Birlamchi og'izlilar (halqali chuvalchanglar, yumshoqtanlilar, bo'g'imoyoqlilar) embrional rivojlanishida gastrulyatsiyadan keyin blastopor nimaga aylanadi?",
    options: ["Anal teshikka","Bosh miyaga","Og'iz teshigiga","Tana bo'shlig'iga"],
    topic: "Zoologiya",
    answer: 2,
    explanation: "Birlamchi og'izlilarda blastopor og'izga aylanadi, anal teshik keyin hosil bo'ladi. Ikkilamchi og'izlilarda esa blastopor anal teshik hosil qiladi."
  },
  {
    question: "Tog'ay baliqlarda (akula) suzgich pufagi bo'lmasa-da, ular suv tubiga cho'kib ketmaydi. Bunga qaysi omillar yordam beradi?",
    options: ["Katta o'pkalari va havo yutishi","Yog'ga boy yengil jigar va harakat paytida suzgichlarning hosil qiladigan ko'taruvchi kuchi","Tana suyaklarining havo bilan to'ldirilganligi","Terisidagi havo pufakchalari"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Akula jigari ko'p yog' saqlaydi, bu tanani yengillashtiradi. Doimiy harakat va yassi ko'krak suzgichlari ko'taruvchi kuch hosil qiladi."
  },
  {
    question: "Tovuq va o'rdak jo'jalari tuxumdan tuklangan, ko'zi ochiq holda chiqadi va darrov onasiga ergashadi. Bu holat tuxumning qaysi xususiyati bilan bog'liq?",
    options: ["Tuxumda sariqlik kam bo'lishi bilan","Embrional rivojlanishning juda qisqaligi bilan","Tuxumning ona tanasida rivojlanishi bilan","Tuxumda sariqlik zaxirasi ko'pligi va embrion rivojlanishining uzoq davom etishi bilan"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Sariqlik zaxirasi ko'p bo'lgani uchun embrion tuxum ichida uzoq rivojlanadi va jo'ja tuxumdan yetuk holda chiqadi."
  },
  {
    question: "Xaltali sutemizuvchilar (kenguru) bolalari juda kam rivojlangan holda tug'ilib, ona xaltasida rivojlanishini davom ettiradi. Buning sababi nima?",
    options: ["Ular tuxum qo'yadi","Ularda sut bezlari bo'lmaydi","Yo'ldosh (plasenta) bo'lmaydi yoki juda sodda bo'ladi, embrion ona organizmidan uzoq oziqlana olmaydi","Homiladorlik davri juda uzoq davom etadi"],
    topic: "Zoologiya",
    answer: 2,
    explanation: "Yo'ldosh yo'qligi yoki sodda ekanligi sababli bola erta tug'iladi va xaltada sut bilan oziqlanib rivojlanadi."
  },
  {
    question: "Ikki pallali mollyuskalarda (midiya, marvarid chig'anog'i) bosh va radulaning reduksiyalanishi (yo'qolishi) nima bilan bog'liq?",
    options: ["Hayotning o'troq bo'lishi va jabralar yordamida suvdan oziq zarralarini filtrlab oziqlanish bilan","Yirtqichlik bilan oziqlanish bilan","Quruqlikda yashashga o'tish bilan","Faol suzish bilan"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "O'troq ikki pallalilar oziqni jabralar yordamida suvdan filtrlab oladi, shuning uchun ularga bosh va radula (qirg'ich) kerak emas."
  },
  {
    question: "Marjon poliplari to'qimalarida yashaydigan bir hujayrali suvo'tlar (zooxantellalar) bilan poliplar o'rtasidagi o'zaro munosabat qanday ataladi va ahamiyati nima?",
    options: ["Parazitlik: suvo'tlar poliplarni zaiflashtiradi","Mutualizm: suvo'tlar fotosintez mahsulotlarini beradi, poliplar ularga boshpana va CO₂ hamda biogen moddalar beradi","Kommensalizm: suvo'tlar foyda ko'radi, poliplarga ta'sir qilmaydi","Raqobat: ikkalasi bir xil resursdan foydalanadi"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Ikkala tomon ham foyda ko'radi, bu mutualizm. Suvo'tlar yo'qolsa marjonlar oqarib qoladi (bleaching)."
  },
  {
    question: "G'ovaklilar (shimgichlar) tanasidagi xoanotsitlar (yoqali hujayralar) qanday vazifani bajaradi?",
    options: ["Skelet igna-spikulalarini hosil qiladi","Tanani tashqi muhitdan qoplab turadi","Jinsiy hujayralarni ishlab chiqaradi","Xivchinlari bilan suv oqimini hosil qiladi va ovqat zarralarini tutib hazm qiladi"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Xoanotsitlar xivchinlari bilan tana ichiga suv oqimini yo'naltiradi, suvdagi mayda zarralarni tutib, hujayra ichida hazm qiladi."
  },
  {
    question: "Tibbiyot zulugi so'lagidagi girudin moddasi qanday vazifani bajaradi?",
    options: ["Qon ivishini tezlashtiradi","Qon bosimini oshiradi","Qonning ivishiga to'sqinlik qiladi","Qon hujayralarini parchalaydi"],
    topic: "Zoologiya",
    answer: 2,
    explanation: "Girudin trombinni inaktivlaydi va qon ivishini to'sadi. Shu sababli zuluk so'rayotganda qon suyuq holda qoladi."
  },
  {
    question: "Hasharotlarda yuvenil (yoshlik) gormoni yuqori konsentratsiyada bo'lganda tullash natijasida nima sodir bo'ladi?",
    options: ["Lichinka tez pupaga aylanadi","Lichinka keyingi yoshdagi lichinkaga o'tadi, metamorfoz sodir bo'lmaydi","Imago bevosita tuxum qo'yadi","Lichinka nobud bo'ladi"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Ekdizon tullashni boshlaydi, yuvenil gormon esa lichinka belgilarini saqlaydi. Uning miqdori kamayganda pupa va imagoga o'tiladi."
  },
  {
    question: "K. Frish tadqiqotlariga ko'ra asalarilarning aylana raqsi va 8 shaklidagi raqsi qanday axborot beradi?",
    options: ["Aylana raqs — oziq manbai yaqinda; 8 shaklidagi raqs — uzoqda, yo'nalish va masofani bildiradi","Aylana raqs — xavf; 8 shaklidagi raqs — oziq","Aylana raqs — uzoqdagi manba; 8 shaklidagi raqs — yaqin manba","Ikkalasi ham faqat uya haroratini bildiradi"],
    topic: "Zoologiya",
    answer: 0,
    explanation: "Aylana raqs yaqin oziq manbasini bildiradi. 8 shaklidagi raqsning yo'nalishi quyoshga nisbatan yo'nalishni, davomiyligi esa masofani ko'rsatadi."
  },
  {
    question: "Chuchuk suvda yashovchi suyakli baliqlarda suv-tuz almashinuvi qanday kechadi?",
    options: ["Dengiz suvini ichib, tuzni jabra orqali chiqaradi, siydigi kam va quyuq","Suv teri orqali chiqib ketadi, ular ko'p suv ichadi","Suv va tuz almashinuvi umuman bo'lmaydi","Suv teri va jabra orqali tanaga kiradi, ko'p suyultirilgan siydik chiqariladi, tuzlar jabra orqali faol so'riladi"],
    topic: "Zoologiya",
    answer: 3,
    explanation: "Chuchuk suv baliq tanasiga nisbatan gipotonik, shuning uchun suv tanaga kiradi. Ortiqcha suv ko'p suyultirilgan siydik bilan chiqariladi, yo'qotilgan tuzlar esa jabra orqali tiklanadi."
  },
  {
    question: "Donxo'r qushlarning mushakli oshqozoni ichida mayda toshlar bo'lishining ahamiyati nima?",
    options: ["Ular kaltsiy bilan to'yintirish uchun yutiladi","Ular yordamida oziq mexanik maydalanadi, chunki qushlarda tishlar yo'q va qattiq don chaynalmaydi","Toshlar ovqat hazm qiluvchi fermentlar hosil qiladi","Toshlar tanani og'irlashtirib suvda suzishga yordam beradi"],
    topic: "Zoologiya",
    answer: 1,
    explanation: "Mushakli oshqozon qisqarganda mayda toshlar donni ezib maydalaydi, bu tishlar vazifasini bajaradi."
  },
  {
    question: "Qisqa kun o'simligi uzun tunda gullashi kerak. Agar uzun qorong'u davr o'rtasida qisqa vaqt yorug'lik bilan uzilsa, o'simlikda nima sodir bo'ladi?",
    options: ["Gullash to'xtaydi, chunki gullash uzluksiz qorong'u davr uzunligiga bog'liq","Gullash tezlashadi","Gullashga ta'sir qilmaydi","O'simlik darrov nobud bo'ladi"],
    topic: "Botanika",
    answer: 0,
    explanation: "Fotoperiodizmda hal qiluvchi omil — tunning uzluksiz davomiyligi. Qorong'u davr yorug'lik bilan uzilsa, qisqa kun o'simligi gullash signalini olmaydi."
  },
  {
    question: "Qurg'oqchilikda barg og'izchalarining yopilishini ta'minlovchi o'simlik gormoni qaysi?",
    options: ["Gibberellin","Sitokinin","Auksin","Abssiz kislota"],
    topic: "Botanika",
    answer: 3,
    explanation: "Suv taqchilligida abssiz kislota to'planadi va to'siquvchi hujayralardan ionlar chiqishiga sabab bo'lib, og'izchalarni yopadi."
  },
  {
    question: "Poyaning uchki kurtagi uzib tashlanganda yon kurtaklar o'sa boshlaydi. Buning sababi nima?",
    options: ["Gibberellin miqdori keskin ortadi","Uchki kurtakdan hosil bo'ladigan auksin yon kurtaklar o'sishini to'sib turgan edi, u yo'qolgach to'siq olib tashlanadi","Etilen ishlab chiqarilishi to'xtaydi","Fotosintez tezligi pasayadi"],
    topic: "Botanika",
    answer: 1,
    explanation: "Bu hodisa apikal (uchki) ustunlik deyiladi. Uchki kurtak auksini yon kurtaklar o'sishini susaytiradi."
  },
  {
    question: "Bitta pishgan olma yonida saqlangan yashil mevalar tezroq pishadi. Buning sababi nima?",
    options: ["Olma kislorod ajratadi","Olma suv bug'ini yutib, mevalarni quritadi","Pishgan meva gaz holidagi etilen ajratadi va u qo'shni mevalarning pishishini tezlashtiradi","Olma yorug'lik energiyasini chiqaradi"],
    topic: "Botanika",
    answer: 2,
    explanation: "Etilen — gaz holidagi gormon, meva pishishini, barg to'kilishini tezlashtiradi."
  },
  {
    question: "Fototropizmda (poyaning yorug'lik tomonga egilishi) auksin qanday ta'sir ko'rsatadi?",
    options: ["Soya tomonda ko'proq to'planib, u yerdagi hujayralar o'sishini kuchaytiradi, poya yorug'lik tomonga egiladi","Yorug'lik tomonda to'planib hujayralarni cho'zadi, poya soyaga egiladi","Yorug'likda parchalanib ketgani sababli o'sish butunlay to'xtaydi","Ildizga o'tib, poya o'sishini to'xtatadi"],
    topic: "Botanika",
    answer: 0,
    explanation: "Yorug'lik auksinning soya tomonga ko'chishiga sabab bo'ladi. Soya tomon tezroq cho'zilgani uchun poya yorug'lik tomonga egiladi."
  },
  {
    question: "Azot yetishmasligining dastlabki belgisi qaysi javobda to'g'ri ko'rsatilgan?",
    options: ["Eng yosh barglar sarg'ayadi, eski barglar yashil qoladi","Barglar to'q yashil bo'lib, o'sish tezlashadi","Eng pastki (eski) barglar sarg'ayadi, chunki azot yosh to'qimalarga qayta taqsimlanadi","Gullar soni keskin ko'payadi"],
    topic: "Botanika",
    answer: 2,
    explanation: "Azot o'simlikda harakatchan element: yetishmasa eski barglardan yosh barglarga ko'chadi, shu sababli xloroz pastki barglardan boshlanadi."
  },
  {
    question: "Ildiz endodermasidagi Kaspari belbog'ining asosiy vazifasi nima?",
    options: ["Fotosintez mahsulotlarini ildizga tashish","Ildizning eniga o'sishini ta'minlash","Ildiz tukchalari hosil bo'lishini rag'batlantirish","Hujayra devorlari bo'ylab suv va tuzlarning markaziy silindrga bevosita o'tishini to'sib, tanlab o'tkazishni ta'minlash"],
    topic: "Botanika",
    answer: 3,
    explanation: "Kaspari belbog'i suberin bilan to'yingan, suv va tuzlarni endoderma hujayralari protoplasti orqali o'tishga majbur qiladi, shu tariqa moddalar o'tishi nazorat qilinadi."
  },
  {
    question: "Bir pallali o'simliklar poyasi tuzilishining qaysi xususiyati ularning eniga qalinlashmasligini izohlaydi?",
    options: ["O'tkazuvchi bog'lamlari halqa bo'lib joylashgan va kambiy bor","O'tkazuvchi bog'lamlari tarqoq joylashgan va yopiq tipda, kambiyi yo'q","Poyasi yog'ochlashgan va yillik halqalari bor","Elaksimon naylari yo'q"],
    topic: "Botanika",
    answer: 1,
    explanation: "Kambiy bo'lmasa ikkilamchi yog'och va lub hosil bo'lmaydi, shuning uchun bir pallalilar poyasi (bug'doy, makkajo'xori) eniga o'smaydi."
  },
  {
    question: "Gul to'rtta kosacha bargi, xoch shaklida joylashgan to'rtta toj bargi, oltita changchi (ikkitasi kalta, to'rttasi uzun) va bitta ikki xonali ustki tuguncha urug'chidan iborat. Bu belgilar qaysi oilaga xos?",
    options: ["Karamdoshlar (xochguldoshlar)","Ra'nodoshlar","Dukkakdoshlar","Ituzumdoshlar (pomidor, kartoshka)"],
    topic: "Botanika",
    answer: 0,
    explanation: "Karamdoshlar gulining formulasi to'rt kosacha, to'rt toj barg, 2+4 changchi va ikki xonali ustki tuguncha, mevasi ko'sakcha yoki qo'zoq."
  },
  {
    question: "Dukkakdosh o'simliklar ildizidagi tuganak bakteriyalar atmosfera azotini qaysi birikmaga aylantirib beradi?",
    options: ["Nitrat kislotaga","Azotning kislorodli oksidlariga","Ammiak (ammoniy ioni) ga","Aminokislotalar va oqsillarga to'g'ridan-to'g'ri"],
    topic: "Botanika",
    answer: 2,
    explanation: "Tuganak bakteriyalardagi nitrogenaza fermenti N₂ ni ammiakka qaytaradi, o'simlik uni aminokislotalar sintezi uchun ishlatadi."
  },
  {
    question: "Mox o'simligining spora qutichasi joylashgan uzun poyachasi qaysi avlodga mansub va ploidligi qanday?",
    options: ["Gametofit, gaploid (n)","Gametofit, diploid (2n)","Sporofit, gaploid (n)","Sporofit, diploid (2n)"],
    topic: "Botanika",
    answer: 3,
    explanation: "Moxlarda yashil o'simlik gaploid gametofit, spora qutichali poyacha esa gametofitga bog'liq diploid sporofitdir."
  },
  {
    question: "Paporotniksimonlarda meyoz qaysi jarayonda sodir bo'ladi?",
    options: ["Gametalar hosil bo'lishida","Sporangiylarda sporalar hosil bo'lishida","Zigotaning bo'linishida","O'simtaning (gametofitning) o'sishida"],
    topic: "Botanika",
    answer: 1,
    explanation: "Paporotniklarda sporangiylardagi diploid sporali hujayralar meyoz yo'li bilan bo'linib gaploid sporalar hosil qiladi."
  },
  {
    question: "Qarag'ay urug'ining zaxira oziq to'qimasi (endosperm) qanday ploidlikka ega va u qaysi tuzilmaning davomi?",
    options: ["Triploid (3n), qo'sh urug'lanish natijasi","Diploid (2n), nutsellus qoldig'i","Gaploid (n), urg'ochi gametofit","Poliploid (4n), zigotaning bo'linishi natijasi"],
    topic: "Botanika",
    answer: 2,
    explanation: "Ochiq urug'lilarda endosperm — urug'lanishdan oldin hosil bo'lgan gaploid urg'ochi gametofit. Yopiq urug'lilarda esa endosperm qo'sh urug'lanish natijasida triploid bo'ladi."
  },
  {
    question: "Yopiq urug'lilarning yetuk embrion xaltasida nechta yadro va nechta hujayra bo'ladi?",
    options: ["8 yadro, 7 hujayra","8 yadro, 8 hujayra","7 yadro, 7 hujayra","4 yadro, 4 hujayra"],
    topic: "Botanika",
    answer: 0,
    explanation: "Megaspora uch marta mitoz bo'linib 8 yadro hosil qiladi. Ikki qutbiy yadro markaziy hujayrada joylashadi, shuning uchun hujayralar 7 ta: tuxum hujayra, 2 sinergida, 3 antipod va markaziy hujayra."
  },
  {
    question: "Quyidagi belgilardan qaysi biri shamol bilan changlanadigan o'simliklarga xos?",
    options: ["Yirik yorqin gul qoplamasi va hidli nektar","Yopishqoq, og'ir chang donachalari","Changchilar soni kam, urug'chi tumshuqchasi silliq","Gul qoplamasi kichik yoki yo'q, changlar yengil va ko'p, urug'chi tumshuqchasi patsimon"],
    topic: "Botanika",
    answer: 3,
    explanation: "Anemofil o'simliklarda gul qoplamasi sodda, changlar yengil va ko'p miqdorda hosil bo'ladi, patsimon tumshuqcha esa changni yaxshi tutadi."
  },
  {
    question: "Quyidagi mevalardan qaysi biri soxta meva hisoblanadi?",
    options: ["Gilos","Olma","Pomidor","Shaftoli"],
    topic: "Botanika",
    answer: 1,
    explanation: "Olmada meva shakllanishida tuguncha bilan birga guldon ham ishtirok etadi, shuning uchun u soxta meva hisoblanadi."
  },
  {
    question: "Loviya (ikki pallali o'simlik) urug'ida zaxira oziq moddalar qayerda to'planadi?",
    options: ["Urug' pallalarida","Endospermda","Urug' po'stida","Murtak ildizchasida"],
    topic: "Botanika",
    answer: 0,
    explanation: "Dukkakdoshlar urug'ida endosperm rivojlanish davomida sarflanib ketadi, zaxira moddalar pallalarga o'tadi. Bug'doyda esa endosperm saqlanadi."
  },
  {
    question: "Yorug'lik to'yinish nuqtasiga yetgandan keyin, harorat optimal bo'lsa, fotosintez tezligini yana oshirishi mumkin bo'lgan omil qaysi?",
    options: ["Yorug'lik intensivligini yanada oshirish","Haroratni 50°C ga ko'tarish","CO₂ konsentratsiyasini oshirish","Tuproq namligini keskin kamaytirish"],
    topic: "Botanika",
    answer: 2,
    explanation: "Yorug'lik to'yinganda cheklovchi omil CO₂ bo'lib qoladi (Blekman qonuni). Yuqori harorat fermentlarni buzadi."
  },
  {
    question: "Fotosintezning kompensatsiya nuqtasi nima?",
    options: ["Fotosintez tezligi eng yuqori bo'lgan yorug'lik darajasi","Nafas olish to'xtagan yorug'lik darajasi","Barg og'izchalari to'liq yopilgan payt","Fotosintez bilan nafas olish tezliklari tenglashgan yorug'lik darajasi"],
    topic: "Botanika",
    answer: 3,
    explanation: "Kompensatsiya nuqtasida CO₂ ning fotosintezda yutilishi nafas olishda ajralishiga teng bo'ladi, shuning uchun sof gaz almashinuvi nolga teng."
  },
  {
    question: "Gutatsiya (barg chetlarida suv tomchilari ajralishi) qanday sharoitda kuzatiladi?",
    options: ["Issiq quruq kunda transpiratsiya kuchli bo'lganda","Havo namligi yuqori, transpiratsiya sust va ildiz bosimi mavjud sharoitda (ko'pincha tong paytida)","Qish davrida, ildiz faolligi to'xtaganda","Faqat suvda o'sadigan o'simliklarda, quruq tuproqda emas"],
    topic: "Botanika",
    answer: 1,
    explanation: "Transpiratsiya sust bo'lganda ildiz bosimi suvni gidatodlar orqali tomchi holida chiqaradi. Bu hodisa gutatsiya deyiladi."
  },
  {
    question: "Sho'rlangan tuproqda o'simlik suv bilan yetarli ta'minlanmagan holda so'lishi mumkin. Buning sababi nima?",
    options: ["Tuproqda kislorod ko'payib ketadi","Ildiz tukchalari bo'linib ketadi","Tuproq eritmasining osmotik bosimi hujayra shirasinikidan yuqori bo'lib qoladi va suv so'rilmaydi","Fotosintez tezlashib suv sarfi ortadi"],
    topic: "Botanika",
    answer: 2,
    explanation: "Suv osmos yo'li bilan kam konsentratsiyali joydan ko'p konsentratsiyali joyga o'tadi. Tuproq eritmasi quyuq bo'lsa, suv ildizga kirmaydi yoki hatto chiqib ketadi."
  },
  {
    question: "Daraxt tanasi kesimida yillik halqaning och rangli, keng naylardan iborat qismi qaysi yog'ochga mansub?",
    options: ["Bahor (erta) yog'ochi","Yoz-kuz (kech) yog'ochi","Kambiy hujayralari","Lub qatlami"],
    topic: "Botanika",
    answer: 0,
    explanation: "Bahorda kambiy keng naychali, yupqa devorli hujayralar hosil qiladi (och rang). Yoz-kuzda tor, qalin devorli hujayralar (to'q rang) hosil bo'ladi."
  },
  {
    question: "Quyidagi juftliklardan qaysi birida ikkala organ ham o'zgargan (metamorfozlangan) yer osti poyasi hisoblanadi?",
    options: ["Sabzi ildizmevasi va sholg'om","Georgin ildiz tuganagi va sabzi","Kartoshka tuganagi va georgin ildiz tuganagi","Kartoshka tuganagi va piyoz"],
    topic: "Botanika",
    answer: 3,
    explanation: "Kartoshka tuganagi — qisqargan yer osti novdasi, piyoz — yer osti kurtagi (qisqargan poya va etli barglar). Sabzi, sholg'om va georgin tuganagi ildiz metamorfozi."
  },
  {
    question: "Xlamidomonada va spirogira kabi yashil suvo'tlarda hayot siklida meyoz qachon sodir bo'ladi?",
    options: ["Gametalar hosil bo'lishida","Zigota o'sib chiqishida (zigotik meyoz), shuning uchun vegetativ hujayralari gaploid","Vegetativ hujayralar bo'linishida","Meyoz bo'lmaydi, chunki ular faqat mitoz bilan ko'payadi"],
    topic: "Botanika",
    answer: 1,
    explanation: "Bu suvo'tlarda faqat zigota diploid. Zigota meyoz bilan bo'linadi va gaploid hujayralar hosil qiladi."
  },
  {
    question: "Bug'doy donining aslida urug' emas, meva ekanini qaysi belgi ko'rsatadi?",
    options: ["Donda faqat murtak bo'lishi","Dondagi endospermning kraxmalga boyligi","Meva qobig'i va urug' po'sti birga qo'shilib ketgan (donak)","Donning ildizcha bilan chiqishi"],
    topic: "Botanika",
    answer: 2,
    explanation: "Don — bir urug'li meva (donak): meva qobig'i urug' po'sti bilan qo'shilib o'sgan. Haqiqiy urug'da esa po'st mevadan ajralgan bo'ladi."
  }
];
