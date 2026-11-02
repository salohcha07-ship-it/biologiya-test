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
    question: "Odam organizmida qon bosimining pasayib ketishiga qaravan qaysi gormon yoki moddalar tizimi faollashadi?",
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
    explanation: "Qurg'oqchilik sharoitida o'simliklar barglarini tikanga aylantiradi yoki qalin mum qoplami hosil qilib suvni tejashga moslashadi."
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
    options: ["Chap qorincha — Chap bo'lmacha", "O'ng qorincha — Chap bo'lmacha", "Chap qorincha — O'ng bo'lmacha", "O'ng qorincha — O'ng bo'lmacha"],
    topic: "Odam anatomiyasi",
    answer: 0,
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
  }
];
