const questions = [
  // --- 1-qism (1-25) ---
  {
    question: "Odamda buyrak usti bezining qobiq qismidan ishlab chiqariladigan va moddalar almashinuvini (shu jumladan uglerod va suv-tuz almashinuvini) boshqaruvchi gormonlar guruhi qanday ataladi?",
    options: ["Kortikosteroidlar (masalan, kortizol va aldosteron)", "Adrenalin va noradrenalin", "Insulin va glyukagon", "Tiroksin va kaltsitonin"],
    answer: 0,
    explanation: "Buyrak usti bezining qobiq qismi kortikosteroid gormonlarni (glyukokortikoidlar va mineralokortikoidlar) ishlab chiqaradi."
  },
  {
    question: "O'simliklarda urug'ning unib chiqishi uchun eng asosiy zarur bo'lgan tashqi omillar qaysilar?",
    options: ["Suv, kislorod va qulay harorat", "Faqat quyosh nuri va azot", "Faqat ko'mir angidrid gazi", "Quruq muhit va sovuq"],
    answer: 0,
    explanation: "Urug' tinch holatdan faol rivojlanishga o'tishi uchun suv (gidratatsiya), kislorod (nafas olish uchun) va maqbul harorat zarur."
  },
  {
    question: "Molekulyar biologiyada mRNKdagi stop-kodonlarga (UAA, UAG, UGA) to'g'ri keluvchi tRNK antikodonlari mavjud emasligi nimani anglatadi?",
    options: ["Oqsil sintezi davom etaveradi", "Translyatsiya jarayoni shu yerda yakunlanadi (tugallanadi)", "Aminokislota zanjiri ikkiga bo'linib ketadi", "DNK parchalanib ketadi"],
    answer: 1,
    explanation: "Stop-kodonlar aminokislotani kodlamaydi, balki translyatsiya jarayonini yakunlab, tayyor oqsil zanjirining ribosomadan ajralishini ta'minlaydi."
  },
  {
    question: "Odam qonidagi leykotsitlarning asosiy vazifasi nimadan iborat?",
    options: ["Kislorod tashish", "Organizmga kirgan yot jismlar va mikroblarga qarshi kurashish (himoya)", "Qon ivishini ta'minlash", "Ozuqa moddalarni to'qimalarga yetkazish"],
    answer: 1,
    explanation: "Leykotsitlar (oq qon tanachalari) fagotsitoz va antitelolar hosil qilish orqali organizmni infeksiyalardan himoya qiladi."
  },
  {
    question: "Evolyutsiya nazariyasida rudiment organlar deb nimaga aytiladi?",
    options: ["Ajdodlarida yaxshi rivojlangan, lekin hozirgi kunda o'z ahamiyatini yo'qotib, qoldiq holatda qolgan organlarga", "Yangi paydo bo'lgan mukammal organlarga", "Vazifasi butunlay boshqa turga o'tgan organlarga", "Faqat o'simliklarga xos bo'lgan o'simtalarga"],
    answer: 0,
    explanation: "Rudimentlar (masalan, odamda ko'richakning chuvalchangsimon o'simtasi yoki quloq suprasi mushaklari) ajdodlarda muhim bo'lgan, ammo hozirda ahamiyati kamaygan organlardir."
  },
  {
    question: "O'simliklarda hujayra devorining asosiy kimyoviy tarkibiy qismi nima?",
    options: ["Glikogen", "Sellyuloza (letchatka)", "Xitin", "Kraxmal"],
    answer: 1,
    explanation: "O'simlik hujayralari devori mustahkam polisaxarid bo'lgan sellyulozadan tashkil topgan."
  },
  {
    question: "Odamda yurak siklining umumiy davomiyligi o'rtacha 0.8 soniyani tashkil etsa, shundan qancha qismi bo'lmachalar qisqarishiga to'g'ri keladi?",
    options: ["0.1 soniya", "0.3 soniya", "0.4 soniya", "0.8 soniya"],
    answer: 0,
    explanation: "Yurak siklida bo'lmachalar qisqarishi 0.1 s, qorinchalar qisqarishi 0.3 s, umumiy tanaffus (pauza) esa 0.4 soniyani tashkil qiladi."
  },
  {
    question: "Genetika fanida digibrid chatishtirishda (ikkita belgi bo'yicha) F2 avlodda fenotip bo'yicha ajralish nisbati qanday bo'ladi (Mendelning 3-qonuni)?",
    options: ["3:1", "9:3:3:1", "1:2:1", "1:1"],
    answer: 1,
    explanation: "Mendelning uchinchi qonuniga ko'ra, ikki juft muqobil belgilar bo'yicha geterozigota organizmlar chatishtirilganda F2 da 9:3:3:1 nisbatda fenotipik ajralish yuz beradi."
  },
  {
    question: "Mitokondriya va xloroplastlarning boshqa organoidlardan farqli o'laroq o'ziga xos qaysi xususiyati mavjud?",
    options: ["O'zining shaxsiy xromosomasi (DNK) va ribosomalariga egaligi", "Faqat uglevod sinflashi", "Hujayra yadroini boshqarishi", "Faqat oqsillarni parchalashi"],
    answer: 0,
    explanation: "Mitokondriya va xloroplastlar yarim avtonom organoidlar bo'lib, ularning o'z circular (halqa shaklidagi) DNKsi va oqsil sintezlovchi ribosomalar mavjud."
  },
  {
    question: "Odamda o'pkaning funksional birligi bo'lib, gazlar almashinuvi yuz beradigan eng kichik pufakchalar qanday ataladi?",
    options: ["Bronxiolalar", "Alveolalar", "Tracheya", "Nefronlar"],
    answer: 1,
    explanation: "Alveolalar bir qavat epiteliy bilan o'ralgan kichik pufakchalar bo'lib, ularni o'rab turgan kapilyarlar orqali qon va havo o'rtasida kislorod va CO2 almashinadi."
  },
  {
    question: "O'simliklarda organik moddalar sintezlanmaydigan, faqat zaxira oziq moddalarni to'playdigan rangsiz plastidalar qanday nomlanadi?",
    options: ["Xloroplastlar", "Xromoplastlar", "Leykoplastlar", "Ribosomalar"],
    answer: 2,
    explanation: "Leykoplastlar rangsiz plastidalar bo'lib, ular asosan ildiz, tuganak va urug'larda kraxmal, oqsil hamda yog'larni to'playdi."
  },
  {
    question: "Odam organizmida erkak jinsiy gormoni bo'lgan testosteron asosan qayerda ishlab chiqariladi?",
    options: ["Prostata bezida", "Urug'donlarda (testikullarda)", "Gipofizda", "Buyrak usti bezida"],
    answer: 1,
    explanation: "Testosteron asosan urug'donlarning Leydig hujayralari tomonidan ishlab chiqariladi va ikkilamchi jinsiy belgilarni boshqaradi."
  },
  {
    question: "Bakteriyalar va boshqa prokariotlarda genetik axborot asosan qaysi tuzilmada joylashgan?",
    options: ["Shakllangan yadroda", "Halqa shaklidagi bitta DNK molekulasida (nukleoid)", "Xromosomalar majmuida (2n)", "Mitoxondriyalarda"],
    answer: 1,
    explanation: "Prokariotlarda yadro qobig'i yo'q, ularning irsiy axboroti sitoplazmada erkin joylashgan halqasimon yalang'och DNK (nukleoid) da saqlanadi."
  },
  {
    question: "Odamda ovqat hazm qilish traktining qaysi qismida suvning asosiy qismi so'rilib qon tomirlariga o'tadi?",
    options: ["Me'da (oshqozon)", "O'n ikki barmoq ichak", "Ingichka ichak", "Yo'g'on ichak"],
    answer: 3,
    explanation: "Yo'g'on ichakda ovqat hazm bo'lmay qolgan qoldiqlaridagi suv va minerallar intensiv ravishda qonga so'rilib, ahlat massasi quyuqlashadi."
  },
  {
    question: "Evolyutsiya jarayonida kelib chiqishi turlicha bo'lgan, lekin tashqi ko'rinishi va bajaradigan vazifasi o'xshash bo'lgan organlar qanday ataladi?",
    options: ["Homolog organlar", "Analog organlar", "Rudimentlar", "Atavizmlar"],
    answer: 1,
    explanation: "Analog organlar (masalan, qush qanoti va hasharot qanoti) kelib chiqishi jihatidan har xil, ammo bir xil vazifani bajarish uchun moslashgan organlardir."
  },
  {
    question: "Odamda qon guruhlari qaysi tizim bo'yicha eng keng tarqalgan holda tasniflanadi?",
    options: ["ABO tizimi va Rezus faktor", "MN tizimi", "X va Y tizimi", "Faqat glyukoza tizimi"],
    answer: 0,
    explanation: "K. Landshteyner kashf etgan ABO tizimi va Rezus (Rh) faktor odam qon quyish amaliyotida eng muhim tasnif ҳisoblanadi."
  },
  {
    question: "O'simliklarda vegetativ ko'payish turlaridan biri bo'lib, ona o'simlikdan ajratilmagan holda tuproqqa ko'mib ildiz ottrish usuli nima deb ataladi?",
    options: ["Qalamcha qilish", "Payvand qilish", "Parishin (g'ujum) qilish", "Urug' ekish"],
    answer: 2,
    explanation: "Parishin qilish — novdani egib tuproqqa ko'mib qo'yish orqali yangi ildiz hosil qilish va keyinchalik ona o'simlikdan ajratib olish usulidir."
  },
  {
    question: "Odam organizmida gormonlar qaysi tizimlar orqali tana bo'ylab tarqaladi va organlar ishini boshqaradi?",
    options: ["Faqat asab yo'llari orqali", "Qon va limfa suyuqligi orqali (gormonal/gumoral boshqaruv)", "Faqat nafas yo'llari orqali", "Ovqat hazm qilish nayi orqali"],
    answer: 1,
    explanation: "Gumoral boshqaruv tizimi endokrin bezlar ishlab chiqargan gormonlarni qon va limfa orqali to'qima hamda organlarga yetkazib beradi."
  },
  {
    question: "Meyoz bo'linish natijasida bitta diploid (2n) hujayradan nechta va qanday xromosomali hujayralar hosil bo'ladi?",
    options: ["2 ta diploid hujayra", "4 ta haploid (1n) hujayra", "4 ta diploid hujayra", "1 ta yirik hujayra"],
    answer: 1,
    explanation: "Meyoz ikki marta ketma-ket bo'linishdan iborat bo'lib, natijada xromosomalar soni ikki marta kamaygan 4 ta haploid (1n) jinsiy hujayra hosil bo'ladi."
  },
  {
    question: "Odamda markaziy asab tizimi qaysi qismlardan iborat?",
    options: ["Bosh miya va orqa miya", "Barcha sezgi organlari", "Bosh miya va barcha periferik nervlar", "Faqat uzunchoq miya va orqa miya"],
    answer: 0,
    explanation: "Markaziy asab tizimi bosh miya va orqa miyadan, periferik asab tizimi esa ulardan chiqadigan nervlar va tugunlardan tashkil topgan."
  },
  {
    question: "O'simliklarda ildiz bosimi va transpiratsiya o'rtasidagi farq nimada?",
    options: ["Ildiz bosimi pastdan yuqoriga faol suradi, transpiratsiya esa yuqoridan tortadi", "Ikkalasi ham bir xil jarayon", "Transpiratsiya faqat kechasi ishlaydi", "Ildiz bosimi barglar tomonidan boshqariladi"],
    answer: 0,
    explanation: "Ildiz bosimi ildiz hujayralarining faoliyati evaziga suvni pastdan yuqoriga siqib chiqaradi, transpiratsiya esa barglardan bug'lanish kuchi orqali suvni tortib chiqaradi."
  },
  {
    question: "Odamda me'da shirasining kislotaliligini ta'minlovchi asosiy kimyoviy birikma qaysi?",
    options: ["Sulfat kislota (H2SO4)", "Xlorid kislota (HCl)", "Fosfat kislota", "Sut kislota"],
    answer: 1,
    explanation: "Me'da bezlari ajratadigan shira tarkibida 0.3-0.5% konsentratsiyadagi xlorid kislota mavjud bo'lib, u mikroblarni o'ldiradi va pepsinga sharoit yaratadi."
  },
  {
    question: "Genetika fanida xromosomalarning tuzilishi yoki sonining o'zgarishi bilan bog'liq bo'lgan irsiy o'zgaruvchanlik turi qanday ataladi?",
    options: ["Modifikatsion o'zgaruvchanlik", "Mutatsion o'zgaruvchanlik", "Kombinativ o'zgaruvchanlik", "Faqat fenotipik o'zgarish"],
    answer: 1,
    explanation: "Mutatsion o'zgaruvchanlik genotipning, xromosomalar yoki genlar tuzilishining keskin va irsiylanadigan tarzda o'zgarishidir."
  },
  {
    question: "Odam organizmida qon shakarining (glyukoza) miqdori normadan oshib ketganda uni kamaytirish uchun qaysi organ va gormon faollashadi?",
    options: ["Oshqozon osti bezi va insulin gormoni", "Jigar va adrenalin", "Buyrak va vasopressin", "Qalqonsimon bez va tiroksin"],
    answer: 0,
    explanation: "Qondagi glyukoza ko'payganda oshqozon osti bezining beta-hujayralari insulin ajratib, ortiqcha qandni to'qimalarga va jigarga glikogen shaklida zaxiraga oldiradi."
  },
  {
    question: "Tabiiy tanlanishning shakllari ichida populyatsiyada o'rtacha (ma'lum standartdagi) belgilarni saqlab qoladigan, chetga chiqqanlarni yo'q qiladigan tanlanish turi nima deyiladi?",
    options: ["Harakatlantiruvchi tanlanish", "Stabilizatsiyalovchi (barqarorlashtiruvchi) tanlanish", "Dizruptiv (buzuvchi) tanlanish", "Sun'iy tanlanish"],
    answer: 1,
    explanation: "Stabilizatsiyalovchi tanlanish o'zgarmas muhit sharoitida o'rtacha optimal belgilarni saqlab qoladi va keskin o'zgargan variantlarni yo'q qiladi."
  },

  // --- 2-qism (26-50) ---
  {
    question: "Odam organizmida limfa tugunlarining asosiy vazifasi nimalardan iborat?",
    options: ["Qizil qon tanachalarini parchalash", "Limfani filtrlash va organizmga tushgan mikroblarga qarshi antitelolar hosil qilish", "Faqat yog'larni hazm qilish", "Qon bosimini boshqarish"],
    answer: 1,
    explanation: "Limfa tugunlari biologik filtr vazifasini bajarib, limfa oqimi bilan kelgan yot zarrachalar va mikroblarni ushlab qoladi hamda limfotsitlar ishlab chiqarib immunitetni ta'minlaydi."
  },
  {
    question: "O'simliklarda ildizning eniga o'sishi va yillik halqalarning hosil bo'lishi qaysi to'qimaning faoliyati bilan bog'liq?",
    options: ["Kambiy (yon meristema)", "Epidermis", "Floema", "Asosiy to'qima"],
    answer: 0,
    explanation: "Kambiy hujayralari bahor va yoz oylarida jadal bo'linib, ichkariga ksilema (yog'ochlik), tashqariga esa floema hujayralarini hosil qiladi, natijada poya eniga o'sadi va yillik halqalar yuzaga keladi."
  },
  {
    question: "Molekulyar biologiyada mRNK sintezlanish jarayoni (transkripsiya) qaysi ferment yordamida amalga oshiriladi?",
    options: ["DNK-polimeraza", "RNK-polimeraza", "Amilaza", "Lipaza"],
    answer: 1,
    explanation: "RNK-polimeraza fermenti DNK zanjirining muayyan qismiga birikib, komplementarlik prinsipi asosida uning nusxasini — mRNK molekulasini sintezlaydi."
  },
  {
    question: "Odamda yurak ishining avtomatikligi (tashqi nerv ta'sirisiz ham o'z-o'zidan qisqarishi) qaysi tuzilma tomonidan ta'minlanadi?",
    options: ["Sinus-bo'lmacha tugunidagi o'tkazuvchi tizim maxsus muskul hujayralari", "Uzunchoq miya markazlari", "Qon tomir devoridagi retseptorlar", "Miyacha"],
    answer: 0,
    explanation: "Yurakning o'tkazuvchi tizimi (sinus-bo'lmacha tuguni) o'zida elektr impulsini hosil qilish xususiyatiga ega bo'lib, yurakning ritmik avtomatik qisqarishini ta'minlaydi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiya genofondining tasodifiy va keskin ravishda kamayib ketishi (masalan, tabiiy ofatlar tufayli) nima dietitian ataladi?",
    options: ["Genlar dreyfi va 'butilka gorlari' effekti", "Krossingover", "Mutatsion bosim", "Epistaz"],
    answer: 0,
    explanation: "Populyatsiya soni keskin kamayib ketganda (butilka gori effekti) genofond xilma-xilligi qisqaradi va genlar dreyfi kuchayadi."
  },
  {
    question: "O'simliklarda barglarning to'kilishidan oldin ularning bandi asosida qaysi maxsus hujayralar qatlami hosil bo'ladi?",
    options: ["Ajratuvchi (probka) qatlam", "Kambiy qatlami", "Stoma hujayralari", "Ksilema naylari"],
    answer: 0,
    explanation: "Kuzda barg bandi asosida o'tkazuvchi naylarni berkituvchi va bargning uzilib tushishini ta'minlovchi ajratuvchi (probka) qatlam hosil bo'ladi."
  },
  {
    question: "Odam qonining asosiy koagulyatsiyasida (ivishida) faol ishtirok etuvchi qon plazmasi oqsili fibrinogendan fibrin hosil bo'lishini ta'minlovchi ferment qaysi?",
    options: ["Trombin", "Pepsin", "Amilaza", "Insulin"],
    answer: 0,
    explanation: "Qon ivish jarayonining oxirgi bosqichida trombin fermenti ta'sirida eriydigan fibrinogen erimaydigan fibrin tolasiga aylanib laxta hosil qiladi."
  },
  {
    question: "Genetika fanida jinsiy xromosomaga birikkan holda irsiylanadigan kasalliklarga qaysilar kiradi?",
    options: ["Gemofiliya va daltonizm", "Albinizm va fenilketonuriya", "Dovdirash va gipertrixoz", "Down sindromi"],
    answer: 0,
    explanation: "Gemofiliya (qon ivimaslik) va daltonizm (rang ajratolmaslik) X-xromosomaga birikkan retsessiv kasalliklardir."
  },
  {
    question: "Hujayra energetik almashinuvining kislorodli (aerob) bosqichi natijasida 1 molekula glyukozadan jami nechta molekula ATF sintezlanadi?",
    options: ["2 ta ATF", "36 yoki 38 ta ATF", "4 ta ATF", "0 ta ATF"],
    answer: 1,
    explanation: "Glikoliz va mitoxondriyadagi to'liq (aerob) parchalanish natijasida jami 36-38 molekula ATF energiyasi hosil bo'ladi."
  },
  {
    question: "Odamda buyraklar faoliyatining neyrogumoral boshqaruvida suvning qonga qayta so'rilishini (reabsorbsiyasini) kuchaytiruvchi gormon qaysi?",
    options: ["Vasopressin (antidiuretik gormon - ADG)", "Insulin", "Adrenalin", "Somatotropin"],
    answer: 0,
    explanation: "Gipofizning orqa bo'lagidan ajraladigan vasopressin (ADG) buyrak naychalarida suvning qayta so'rilishini kuchaytirib, siydik miqdorini kamaytiradi."
  },
  {
    question: "O'simliklarda generativ organlar qatoriga qaysi qismlar kiradi?",
    options: ["Ildiz, poya, barg", "Gul, meva va urug'", "Faqat barglar", "Faqat kurtaklar"],
    answer: 1,
    explanation: "O'simliklarning ko'payish vazifasini bajaruvchi organlari generativ organlar (gul, meva, urug') deb ataladi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismida eshitish va hid bilish sezgi zonalari joylashgan?",
    options: ["Peshona bo'lagi", "Chakka bo'lagi", "Ensa bo'lagi", "Tepa bo'lagi"],
    answer: 1,
    explanation: "Bosh miya yarim sharlarining chakka bo'lagida eshitish, hid bilish va ta'm bilish markazlari joylashgan."
  },
  {
    question: "Populyatsiyada tabiiy tanlanishning qaysi turi yangi turlarning paydo bo'lishiga (divergensiyaga) olib keluvchi asosiy omil hisoblanadi?",
    options: ["Harakatlantiruvchi va dizruptiv (buzuvchi) tanlanish", "Stabilizatsiyalovchi tanlanish", "Sun'iy tanlanish", "Faqat genlar dreyfi"],
    answer: 0,
    explanation: "Harakatlantiruvchi va dizruptiv tanlanishlar muhit o'zgarganda yangi belgilarga ega individlarni saqlab qolib, tur ichida tabaqalanish va yangi turlar kelib chiqishiga sabab bo'ladi."
  },
  {
    question: "Odam organizmida oqsillar hazm bo'lishi ingichka ichakda qaysi fermentlar yordamida yakuniga yetkaziladi?",
    options: ["Tripsin va ximotripsin (peptidazalar)", "Amilaza va maltaza", "Lipaza", "Pepsin va xlorid kislota"],
    answer: 0,
    explanation: "Oshqozon osti bezi ajratadigan tripsin va ingichka ichak devori fermentlari oqsillarni oxirgi aminokislotalargacha parchalaydi."
  },
  {
    question: "Biogeosenozda ozuqa zanjirining to'g'ri ketma-ketligini ko'rsating:",
    options: ["Yirtqichlar -> O'simliklar -> Herbivorlar", "Produtsentlar (o'simliklar) -> Konsumentlar (o'txo'rlar) -> Yirtqichlar -> Redutsentlar", "Redutsentlar -> O'simliklar -> Quyosh", "Faqat mikroorganizmlar -> O'simliklar"],
    answer: 1,
    explanation: "Ozuqa zanjiri doimo yashil o'simliklardan (produtsentlardan) boshlanib, o'txo'r va yirtqich hayvonlar orqali parchalovchilarga (redutsentlarga) borib taqaladi."
  },
  {
    question: "O'simliklarda suvning ildizdan so'rilishida va bargdan bug'lanishida ishtirok etuvchi asosiy qoplovchi va o'tkazuvchi to'qima qismlari qaysilar?",
    options: ["Epidermis va ksilema", "Kambiy va floema", "Kork va periderm", "Asosiy va mexanik to'qima"],
    answer: 0,
    explanation: "Epidermis suvning tashqi muhit bilan bog'lanishini tartibga solsa, ksilema esa uni yuqoriga o'tkazib beradi."
  },
  {
    question: "Odamda qon guruhini aniqlashda universal donor (barcha qon guruhlariga bera oladigan) qaysi qon guruhi hisoblanadi?",
    options: ["I (O) guruhi", "II (A) guruhi", "III (B) guruhi", "IV (AB) guruhi"],
    answer: 0,
    explanation: "I (O) qon guruhi eritrotsitlarida aglutinogenlar bo'lmagani uchun uni istalgan boshqa guruhdagi bemorlarga quyish mumkin (konservativ yondashuvda)."
  },
  {
    question: "Genetika masalalarida ota-onaning genotipi AaBb va aabb bo'lsa, ularning naslida barcha belgilari bo'yicha retsessiv (aabb) individ chiqish ehtimoli qanday?",
    options: ["0%", "25%", "50%", "100%"],
    answer: 1,
    explanation: "AaBb organizm 4 xil gameta beradi (AB, Ab, aB, ab), aabb esa faqat bitta (ab) gameta beradi. Chatishtirganda 1/4 qism (25%) aabb chiqadi."
  },
  {
    question: "Odamda nafas olish markazi bosh miyaning qaysi qismida joylashgan?",
    options: ["Uzunchoq miya", "Miyacha", "Peshona bo'lagi", "Orqa miya"],
    answer: 0,
    explanation: "Uzunchoq miyada nafas olish, yurak-qon tomir faoliyati va ovqat hazm qilishni boshqaruvchi avtomatik markazlar joylashgan."
  },
  {
    question: "Evolyutsiya dalillaridan biri bo'lib, turli geologik qatlamlarda saqlanib qolgan qadimgi organizm qoldiqlari qanday ataladi?",
    options: ["Paleontologik qoldiqlar (fossilchalar)", "Rudimentlar", "Atavizmlar", "Homolog organlar"],
    answer: 0,
    explanation: "Paleontologik topilmalar (fossilchalar) o'tmishda yashab ketgan organizmlarning tuzilishi va evolyutsion ketma-ketligini o'rganishda asosiy dalil hisoblanadi."
  },
  {
    question: "O'simliklarda barg og'izchalari orqali kislorod va karbonat angidrid almashinuvi qaysi jarayon orqali amalga oshiriladi?",
    options: ["Oddiy diffuziya", "Faol transport", "Osmos", "Transpiratsiya"],
    answer: 0,
    explanation: "Gazlar kontsentratsiyalar farqiga ko'ra og'izcha teshikchalari orqali tashqi muhitdan hujayra oralig'iga diffuziya yo'li bilan o'tadi."
  },
  {
    question: "Odamda qalqonsimon bez tomonidan ishlab chiqariladigan va organizmda asosiy moddalar almashinuvini (energiya almashinuvini) boshqaruvchi yod saqlovchi gormon qaysi?",
    options: ["Tiroksin (va triyodtironin)", "Insulin", "Adrenalin", "Paratgormon"],
    answer: 0,
    explanation: "Tiroksin gormoni tarkibida yod bo'lib, u barcha to'qimalarda moddalar almashinuvi tezligini va energiya hosil bo'lishini boshqaradi."
  },
  {
    question: "Hujayra bo'linishining mitoz bosqichida xromatidlar bir-biridan ajralib mustaqil xromosomaga aylanadigan va qutblarga qarab harakatlanadigan fazasi qaysi?",
    options: ["Anafaza", "Metafaza", "Profaza", "Telofaza"],
    answer: 0,
    explanation: "Anafazada opa-singil xromatidlar bo'linib, o'rtasidan ajraladi va duk mipcasi tolalari ta'sirida hujayraning qarama-qarshi qutblariga tortib ketiladi."
  },
  {
    question: "Genetika fanida Morgan qoidasiga ko'ra, xromosomada birikkan holda irsiylanadigan genlar orasidagi masofa nim bilan o'lchanadi?",
    options: ["Morganida (protsentda - % krossingover)", "Nukleotidlar soni bilan", "Gramm bilan", "Genlar soni bilan"],
    answer: 0,
    explanation: "Genlar orasidagi masofa krossingover foizi bilan belgilanib, morganida birligi bilan o'lchanadi."
  },
  {
    question: "Odamda ko'zning yorug'lik nurlarini o'tkazuvchi va shox parda ortida joylashgan rangdor qism markazidagi teshik qanday nomlanadi?",
    options: ["Qorachiq (pupila)", "Gavhar", "To'r parda", "Shishasimon tana"],
    answer: 0,
    explanation: "Qorachiq ko'zga tushadigan yorug'lik miqdorini boshqarish uchun ko'zning rangdor pardasidagi teshik bo'lib xizmat qiladi."
  },

  // --- 3-qism (51-75) ---
  {
    question: "Odam organizmida buyrak usti bezining qobiq qismi gormonlaridan biri bo'lgan aldosteronning asosiy vazifasi nima?",
    options: ["Qonda natriy ionlarini ushlab qolish va kaliy chiqarilishini boshqarish", "Qon shakarini keskin oshirish", "Yurak urish tezligini kamaytirish", "Suyaklarda kaltsiy to'plash"],
    answer: 0,
    explanation: "Aldosteron mineralokortikoid bo'lib, organizmda tuz va suv muvozanatini (natriyning qayta so'rilishini) tartibga soladi."
  },
  {
    question: "O'simliklarda barglarning tuzilishida fotosintez jarayoni eng jadal kechadigan va ko'p miqdorda xloroplast saqlovchi asosiy to'qima qismi qaysi?",
    options: ["Ustunsimon parenxima (asosiy to'qima)", "Gubkasimon parenxima", "Epidermis", "Ksilema"],
    answer: 0,
    explanation: "Ustunsimon parenxima hujayralari zich joylashgan va ko'p xloroplastga ega bo'lib, quyosh nuri tushadigan ustki qismda fotosintezni eng yaxshi bajaradi."
  },
  {
    question: "Molekulyar biologiyada translyatsiya jarayonida aminokislotalarni mRNK kodonlariga mos ravishda ribosomaga tashib beruvchi RNK turi qanday ataladi?",
    options: ["tRNK (transport RNK)", "mRNK", "rRNK", "DNK"],
    answer: 0,
    explanation: "tRNK (transport RNK) o'zining bir uchida muayyan aminokislotani, ikkinchi uchida esa antikodonni saqlab, ribosomaga yetkazib beradi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi haroratni boshqarish, moddalar almashinuvi, ochlik, to'yinganlik va chanqoqlik markazlarini o'z ichiga oladi?",
    options: ["Oraliq miya (gipotalamus)", "Miyacha", "Uzunchoq miya", "Peshona bo'lagi"],
    answer: 0,
    explanation: "Gipotalamus (oraliq miya tarkibida) vegetativ asab tizimining oliy markazi bo'lib, tana harorati, suv-tuz va moddalar almashinuvini nazorat qiladi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada yangi genlar va allellarning paydo bo'lishining asosiy birlamchi manbai nima?",
    options: ["Mutatsiyalar", "Tabiiy tanlanish", "Modifikatsion o'zgarishlar", "Genlar dreyfi"],
    answer: 0,
    explanation: "Mutatsion jarayon genofondda yangi irsiy o'zgarishlar va allellarni hosil qiluvchi yagona birlamchi manba hisoblanadi."
  },
  {
    question: "O'simliklarda ildizning tuproqdan suv va mineral tuzlarni so'rib oluvchi eng faol qismi qaysi?",
    options: ["Ildiz tukchalari sohasi", "Ildiz uchi (chexlik)", "O'tkazuvchi zona", "Poya bilan tutashgan qism"],
    answer: 0,
    explanation: "Ildiz tukchalari epidermis hujayralarining o'simtalari bo'lib, ular so'rish yuzasini keskin oshiradi va suvni shimiladi."
  },
  {
    question: "Odamda qonning shakqli elementlaridan biri bo'lgan trombotsitlarning asosiy vazifasi nimadan iborat?",
    options: ["Kislorod tashish", "Qon ivish jarayonida (gemostazda) qatnashish", "Immunitetni ta'minlash", "Oqsil sintez qilish"],
    answer: 1,
    explanation: "Trombotsitlar (qon plastinkalari) qon tomir shikastlanganda uning yuzasiga yopishib, laxta hosil qilish va qon ketishini to'xtatishda boshlang'ich rolni o'ynaydi."
  },
  {
    question: "Genetika fanida qon guruhlari irsiylanishida A va B allellari bir xil darajada namoyon bo'lib, IV (AB) guruhni hosil qilishi o'zaro ta'sirning qaysi turiga kiradi?",
    options: ["Kodominantlik", "To'liq dominantlik", "Chala dominantlik", "Epistaz"],
    answer: 0,
    explanation: "Kodominantlikda ikkala allel ham bir vaqtning o'zida mustaqil ravishda o'z mahsulotini yuzaga chiqaradi (masalan, AB qon guruhi)."
  },
  {
    question: "Hujayraning energetik almashinuvida kislorodsiz (glyukoliz) bosqichi hujayraning qaysi qismida yuz beradi?",
    options: ["Sitoplazmada (matriksda)", "Mitoxondriya kristalarida", "Yadro ichida", "Ribosomada"],
    answer: 0,
    explanation: "Glikoliz jarayoni kislorod talab etmagani uchun sitoplazmada kechib, 1 molekula glyukozadan 2 molekula pirat kislota va 2 ta ATF hosil qiladi."
  },
  {
    question: "Odamda eshitish va muvozanat retseptorlari bosh miyaning qaysi sezgi organida va qismida joylashgan?",
    options: ["Ichki quloqda (chig'anoq va yarim doira kanallarida)", "O'rta quloqda", "Ko'z to'r pardasida", "Burun bo'shlig'ida"],
    answer: 0,
    explanation: "Ichki quloqdagi Korti organi eshitishni, vestibulyar apparat (yarim doira kanallari) esa tana muvozanatini ta'minlaydi."
  },
  {
    question: "O'simliklarda barglarning tikan yoki mo'ylovga aylanishi evolyutsiyada qanday o'zgarish turi hisoblanadi?",
    options: ["Organlarning metamorfozi (vazifasiga ko'ra o'zgarishi)", "Rudimentlar", "Atavizmlar", "Sun'iy mutatsiya"],
    answer: 0,
    explanation: "Metamorfoz — organlarning yashash sharoitiga moslashib, asosiy vazifasini o'zgartirishi (masalan, kaktus tikani — barg metamorfozi)."
  },
  {
    question: "Odam organizmida ozuqa moddalarning hazm bo'lishi va so'rilishi asosan ovqat hazm qilish traktining qaysi qismida to'liq amalga oshadi?",
    options: ["Ingichka ichakda", "Oshqozonda", "Yo'g'on ichakda", "Qizilo'ngachda"],
    answer: 0,
    explanation: "Ingichka ichak (ayniqsa uning o'n ikki barmoq ichak qismi va keyingi bo'limlari) barcha oziq moddalarni parchalab, qonga to'liq so'rib oluvchi asosiy joydir."
  },
  {
    question: "Genetika masalalarida ota-onaning ikkalasi ham ikkala belgi bo'yicha geterozigota (AaBb) bo'lsa, naslda fenotip bo'yicha nechta har xil variant hosil bo'ladi?",
    options: ["4 xil", "2 xil", "16 xil", "9 xil"],
    answer: 0,
    explanation: "Digibrid chatishtirishda (AaBb x AaBb) Mendelning uchinchi qonuniga ko'ra fenotipik jihatdan 9:3:3:1 nisbatda 4 xil turdagi fenotipik guruhlar hosil bo'ladi."
  },
  {
    question: "Odamda yurak qorinchalarining qisqarishi (sistolasi) paytida qaysi yurak qopqoqlari ochilib, qon tomirlarga haydaladi?",
    options: ["Yarim oysimon qopqoqlar (aorta va o'pka arteriyasi og'zidagi)", "Tabaqali (mitral va uch tabaqali) qopqoqlar", "Faqat bo'lmacha qopqoqlari", "Hech qaysi qopqoq ochilmaydi"],
    answer: 0,
    explanation: "Qorinchalar qisqarganda tabaqali qopqoqlar yopilib bo'lmachalarga qon qaytishini to'xtatadi, yarim oysimon qopqoqlar ochilib esa qon aorta va o'pka arteriyasiga o'tadi."
  },
  {
    question: "Biogeosenozda oziq zanjirlarining o'zaro chirmashib ketishi natijasida hosil bo'lgan murakkab tarmoq qanday ataladi?",
    options: ["Oziq to'ri (trofik tarmoq)", "Ekologik piramida", "Genofond", "Biomassa"],
    answer: 0,
    explanation: "Tabiatda organizmlar bitta emas, bir nechta oziq turlari bilan oziqlangani uchun oddiy zanjirlar o'zaro kesishib oziq to'rini hosil qiladi."
  },
  {
    question: "O'simliklarda generativ ko'payishning eng asosiy va evolyutsion jihatdan eng yuksak bosqichi qaysi guruhga xos?",
    options: ["Yopiq urug'lilar (gulli o'simliklar)", "Yo'sinlar", "Qirqbo'g'imlar", "Ochiq urug'lilar"],
    answer: 0,
    explanation: "Yopiq urug'li o'simliklar gul, ikki marta urug'lanish va meva hosil qilish xususiyati tufayli tabiatda eng ustun mavqega ega."
  },
  {
    question: "Odamda markaziy asab tizimining refleks yoyi qaysi ketma-ketlikda tuzilgan?",
    options: ["Retseptor -> Sezuvchi neyronga -> Markaziy nerv tizimi -> Harakatlantiruvchi neyronga -> Ishchi organ", "Ishchi organ -> Retseptor -> Miyaga", "Harakatlantiruvchi neyron -> Retseptor -> Markaz", "Faqat orqa miya -> Muskul"],
    answer: 0,
    explanation: "Refleks yoyi beshta asosiy qismdan iborat bo'lib, qo'zg'alish retseptordan boshlanib ishchi organda yakunlanadi."
  },
  {
    question: "Hujayra bo'linishining mitoz jarayonida xromosomalarning spirallashib, zichlashishi va yadro qobig'ining erib ketishi qaysi bosqichda sodir bo'ladi?",
    options: ["Profaza", "Metafaza", "Anafaza", "Telofaza"],
    answer: 0,
    explanation: "Profazada xromosomalar qisqarib qalinlashadi, yadrocha va yadro qobig'i yo'qolib, bo'linish dukchasi hosil bo'la boshlaydi."
  },
  {
    question: "Odam organizmida qon plazmasining asosiy oqsillaridan biri bo'lib, osmotik bosimni ta'minlovchi va moddalarni tashiydigan asosiy oqsil qaysi?",
    options: ["Albumin", "Gemoglobin", "Fibrinogen", "Insulin"],
    answer: 0,
    explanation: "Albuminlar qon plazmasida eng ko'p miqdorda uchraydigan oqsillar bo'lib, qonning osmotik bosimini ushlab turishda va turli birikmalarni bog'lab tashishda muhim."
  },
  {
    question: "Evolyutsiya jarayonida turlar sonining ko'payishi va ularning turli xil yashash sharoitlariga moslashib tarqalishi biologiyada qanday ataladi?",
    options: ["Divergensiya (tarqalish) va biologik progress", "Degeneratsiya", "Retrogres", "Mutatsion turg'unlik"],
    answer: 0,
    explanation: "Divergensiya — umumiy ajdoddan kelib chiqqan guruhlarning turli sharoitlarga moslashib boshqa-boshqa belgilarga ega bo'lishi va tarqalishidir."
  },
  {
    question: "O'simliklarda suv va mineral moddalarni ildizdan poya va barglarga o'tkazuvchi naysimon tuzilmalar qanday nomlanadi?",
    options: ["Ksilema (yog'ochlik)", "Floema (loks)", "Kambiy", "Parenxima"],
    answer: 0,
    explanation: "Ksilema o'simlikning suv va unda erigan mineral moddalarni pastdan yuqoriga harakatlantiruvchi o'tkazuvchi to'qima tizimidir."
  },
  {
    question: "Odamda bosh miyaning qaysi qismida shartli reflekslar va tafakkur, nutq, ong faoliyatini boshqaruvchi oliy markazlar joylashgan?",
    options: ["Katta yarim sharlar po'stlog'i (korteks)", "Uzunchoq miya", "Miyacha", "Ko'prik"],
    answer: 0,
    explanation: "Batta yarim sharlar po'stlog'i oliy nerv faoliyatining markazi bo'lib, barcha shartli reflekslar, xotira va ongli harakatlarni boshqaradi."
  },
  {
    question: "Genetika fanida nuklein kislotalar (DNK va RNK) tarkibiga kiruvchi purin asoslari qaysilar?",
    options: ["Adenin va Guanin", "Timin va Sitozin", "Urasil va Timin", "Faqat Sitozin va Urasil"],
    answer: 0,
    explanation: "Nukleotidlar tarkibidagi azotli asoslar purinlar (Adenin, Guanin) va pirimidinlar (Timin, Sitozin, Urasil) deb bo'linadi."
  },
  {
    question: "Odam organizmida siydik ajratish tizimining asosiy funksional birligi bo'lib, qonni filtrlab siydik hosil qiluvchi mikroskopik tuzilma nima deb ataladi?",
    options: ["Nefron", "Neyron", "Alveola", "Nefron va akson"],
    answer: 0,
    explanation: "Har bir buyrakda bir millionga yaqin nefronlar mavjud bo'lib, ular qonni filtrlash va siydik hosil qilish vazifasini bajaradi."
  },
  {
    question: "Tabiiy tanlanish natijasida populyatsiyada genlar chastotasining yo'nalishli o'zgarishi va yangi adaptatsiyalarning kelib chiqishi qaysi omil bilan birgalikda yuz beradi?",
    options: ["Mutatsion o'zgaruvchanlik va irsiylanish", "Faqat modifikatsion o'zgarish", "Tashqi muhitning o'zgarmasligi", "Sun'iy tanlanish"],
    answer: 0,
    explanation: "Tabiiy tanlanish mutatsiyalar natijasida hosil bo'lgan irsiy xilma-xillikni tanlab olib, muhitga moslashishni yuzaga keltiradi."
  },

  // --- 4-qism (76-100) ---
  {
    question: "Odam organizmida me'da osti bezining endokrin qismi bo'lgan Langerhans orolchalarining alfa-hujayralari qaysi gormonni ishlab chiqaradi?",
    options: ["Glyukagon", "Insulin", "Adrenalin", "Tiroksin"],
    answer: 0,
    explanation: "Alfa-hujayralar glyukagon ishlab chiqarib, qondagi glyukoza miqdori pasayganda jigardagi glikogenni glyukozaga aylantirib qonga chiqaradi."
  },
  {
    question: "O'simliklarda barglarning pastki qismida ko'proq joylashgan va gaz almashinuvini ta'minlovchi og'izchalar qaysi to'qimaga tegishli?",
    options: ["Qoplovchi to'qima (epidermisning hosilasi)", "O'tkazuvchi to'qima", "Asosiy to'qima (parenxima)", "Mexanik to'qima"],
    answer: 0,
    explanation: "Og'izchalar qoplovchi to'qima bo'lgan epidermisning maxsus juft hujayralari bo'lib, transpiratsiya va gaz almashinuvini boshqaradi."
  },
  {
    question: "Molekulyar biologiyada replikatsiya jarayoni DNK molekulasida qanday prinsip asosida amalga oshiriladi?",
    options: ["Komplementarlik prinsipi (A-T, G-S)", "Faqat tasodifiy birikish", "Triplet kodlash", "Translyatsiya prinsipi"],
    answer: 0,
    explanation: "DNK ikkilanishida (replikatsiyada) har bir eski zanjir asosida komplementarlik qoidasiga ko'ra yangi zanjir sintezlanadi."
  },
  {
    question: "Odamda yurak-qon tomir tizimida qonning eng sekin harakatlanadigan va moddalar almashinuvi to'g'ridan-to'g'ri to'qimalar bilan sodir bo'ladigan qismi qaysi?",
    options: ["Kapilyarlar", "Arteriyalar", "Venalar", "Aorta"],
    answer: 0,
    explanation: "Kapilyarlarning devori bir qavat epiteliy hujayralaridan iborat bo'lib, qon oqimi u yerda sekinlashadi va gazlar hamda ozuqa moddalar almashinadi."
  },
  {
    question: "Evolyutsiya nazariyasida atavizm deb nimaga aytiladi?",
    options: ["Uzoq ajdodlarida bo'lgan, ammo hozirgi avlodlarda tasodifan namoyon bo'ladigan belgilar", "Hozirgi kunda yo'qolib ketgan organlar", "Faqat o'simliklarga xos o'simtalar", "Organlarning o'z vazifasini yo'qotishi"],
    answer: 0,
    explanation: "Atavizmlar (masalan, odamda ko'p emiziklilik yoki dumlilik) uzoq ajdodlarga xos belgilarning ayrim hollarda qayta yuzaga chiqishidir."
  },
  {
    question: "O'simliklarda ildiz bosimi va transpiratsiya natijasida suv va moddalarning yuqoriga harakatlanishida qaysi fizika-kimyoviy hodisalar muhim rol o'ynaydi?",
    options: ["Kapillyarlik (sirt tarangligi) va osmos", "Faqat elektr toki", "Magnit maydoni", "Mexanik bosim"],
    answer: 0,
    explanation: "Suv ksilemaning ingichka naychalarida kapillyarlik hodisasi va yuqoridan so'ruvchi kuch ta'sirida yuqoriga ko'tariladi."
  },
  {
    question: "Odamda qon zardobida antitelo (aglyutinin) yetishmagan yoki barcha guruhlarga moslasha oladigan, qon quyishda 'universal retsipient' hisoblangan guruh qaysi?",
    options: ["IV (AB) qon guruhi", "I (O) qon guruhi", "II (A) qon guruhi", "III (B) qon guruhi"],
    answer: 0,
    explanation: "IV (AB) qon guruhi eritrotsitlarida aglutinogenlar A va B bo'lib, zardobida aglyutininlar yo'qligi uchun universal retsipient hisoblanadi."
  },
  {
    question: "Genetika fanida polimeriya deb ataluvchi genlararo o'zaro ta'sir turi nimani anglatadi?",
    options: ["Bir nechta noallel dominant genlarning bitta belgining rivojlanishiga bir xil yo'nalishda ta'sir ko'rsatishi", "Bitta genning boshqasini to'sib qo'yishi", "Genlar sonining kamayib ketishi", "Xromosomalarning yo'qolishi"],
    answer: 0,
    explanation: "Polimeriyada bir nechta dominant genlar bitta belgining (masalan, tana rangi yoki o'simlikdagi qand miqdori) ifodalanishini kuchaytiradi."
  },
  {
    question: "Hujayraning energiyaga bo'lgan ehtiyojini qondiruvchi va asosiy 'energetik stansiyasi' hisoblangan organoid qaysi?",
    options: ["Mitoxondriya", "Ribosoma", "Kompleks Golji", "Lizosoma"],
    answer: 0,
    explanation: "Mitoxondriya organik moddalarni parchalab, ATF shaklida hujayrani energiya bilan ta'minlaydi."
  },
  {
    question: "Odamda teri qoplami organizmda qanday asosiy vazifalarni bajaradi?",
    options: ["Himoya, termoregulyatsiya, sezish va ajratish", "Faqat kislorod yutish", "Faqat qon hosil qilish", "Faqat oqsil sintez qilish"],
    answer: 0,
    explanation: "Teri mexanik shikastlanishdan, mikroblardan himoya qiladi, ter ajratish orqali haroratni rostlaydi va retseptorlar orqali sezadi."
  },
  {
    question: "O'simliklarda vegetativ ko'payish turlaridan biri bo'lib, yer ostki poyasi (pazasi) yoki tuganaklari orqali ko'payish qaysi o'simliklarga xos?",
    options: ["Kartoshka, piyoz, yaltirbosh", "Faqat yo'sinlar", "Faqat qirqbo'g'imlar", "Faqat qarag'ay"],
    answer: 0,
    explanation: "Kartoshka tuganaklari, piyozboshlar va ildizpoyalar o'simliklarning vegetativ yo'l bilan tez ko'payishini ta'minlaydi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi ko'rish va eshitish reflekslarining birlamchi markazlari hamda mushaklar tonusini boshqarishda qatnashadi?",
    options: ["O'rta miya", "Uzunchoq miya", "Miyacha", "Peshona bo'lagi"],
    answer: 0,
    explanation: "O'rta miyada ko'rish va eshitishning orientir reflekslari, shuningdek mushak tonusini boshqaruvchi markazlar joylashgan."
  },
  {
    question: "Evolyutsiya jarayonida populyatsiyalar sonining cheklanishi va ularning izolyatsiyalanishi natijasida yangi turlarning kelib chiqishi qanday ataladi?",
    options: ["Geografik va ekologik izolyatsiya (spektatsiya)", "Modifikatsion o'zgarish", "Faqat mitoz", "Atavizm"],
    answer: 0,
    explanation: "Izolyatsiya turlararo erkin chatishtirishni to'xtatib, genofondlarning farqlanishiga va yangi turlar paydo bo'lishiga olib keladi."
  },
  {
    question: "Odamda ovqat hazm qilish sistemasida oqsillarni parchalovchi asosiy fermentlar qayerlarda ishlab chiqariladi?",
    options: ["Oshqozon, oshqozon osti bezi va ingichka ichak", "Faqat og'iz bo'shlig'ida", "Faqat yo'g'on ichakda", "Jigarning o'zida"],
    answer: 0,
    explanation: "Oshqozonda pepsin, oshqozon osti bezida tripsin va ingichka ichakda peptidazalar oqsillarni bosqichma-bosqich parchalaydi."
  },
  {
    question: "Biogeosenozda produtsentlar vazifasini bajaruvchi asosiy organizmlar guruhi qaysilar?",
    options: ["Xlorofill saqlovchi yashil o'simliklar va suvo'tlar", "Yirtqich hayvonlar", "Zamburug'lar va bakteriyalar", "Faqat o'txo'r hayvonlar"],
    answer: 0,
    explanation: "Produtsentlar quyosh energiyasidan foydalanib noorganik moddalardan organik modda sintezlovchi autotrof organizmlardir (o'simliklar)."
  },
  {
    question: "O'simliklarda suv bug'lanishini (transpiratsiyani) kamaytiruvchi moslanishlarga qaysilar kiradi?",
    options: ["Barglarning tikan yoki mum qoplami bilan qoplanishi", "Barg yuzasining haddan tashqari kengayishi", "Og'izchalarning doim ochiq turishi", "Ildizning yo'qligi"],
    answer: 0,
    explanation: "Qurg'oqchlik sharoitida o'simliklar barglarini tikanga aylantiradi yoki qalin mum qoplami hosil qilib suvni tejashga moslashadi."
  },
  {
    question: "Odamda jinsiy hujayralar (spermatozoyid va tuxumhujayra) qaysi turdagi hujayra bo'linishi natijasida hosil bo'ladi?",
    options: ["Meyoz", "Mitoz", "Amitoz", "Faqat regeneratsiya"],
    answer: 0,
    explanation: "Jinsiy hujayralar meyoz bo'lishi orqali hosil bo'lib, ularda xromosomalar soni ikki marta kamaygan (haploid - 1n) bo'ladi."
  },
  {
    question: "Genetika masalalarida ota-ona organizmlarning genotipi Aa va aa bo'lsa, ularning avlodida fenotip bo'yicha ajralish nisbati qanday bo'ladi (to'liq dominantlikda)?",
    options: ["1:1 (50% dominant, 50% retsessiv)", "3:1", "9:3:3:1", "1:2:1"],
    answer: 0,
    explanation: "Analiz qiluvchi chatishtirishga o'xshash bu holatda (Aa x aa) naslda 50% dominant va 50% retsessiv belgili individlar (1:1) hosil bo'ladi."
  },
  {
    question: "Odam organizmida qon aylanishining kichik doirasi qaysi qorinchadan boshlanib, qaysi bo'lmachada tugaydi?",
    options: ["O'ng qorincha — Chap bo'lmacha", "Chap qorincha — O'ng bo'lmacha", "Chap qorincha — Chap bo'lmacha", "O'ng qorincha — O'ng bo'lmacha"],
    answer: 0,
    explanation: "Kichik qon aylanish doirasi o'ng qorinchadan boshlanib o'pka orqali kislorodga boyib, chap bo'lmachaga kelib tugaydi."
  },
  {
    question: "Evolyutsiya nazariyasiga ko'ra, tur kriteriyalari (mezonlari) ichida turlarni bir-biridan farqlashda eng muhim va aniq mezon qaysi?",
    options: ["Genetik mezon", "Morfologik mezon", "Geografik mezon", "Fiziologik mezon"],
    answer: 0,
    explanation: "Genetik mezon (har bir turning o'ziga xos xromosomalar soni va tuzilishi) turlarni aniq farqlashda eng muhim mezon hisoblanadi."
  },
  {
    question: "O'simliklarda urug'lanishdan keyin gulning qaysi qismidan meva, qaysi qismidan esa urug' rivojlanadi?",
    options: ["Tugunchadan — meva, urug'kurtakdan — urug'", "Gulqo'rg'ondan — meva, changchidan — urug'", "Gulkosachadan — meva, tumshunchadan — urug'", "Faqat poyadan — meva"],
    answer: 0,
    explanation: "Ikki marta urug'lanishdan so'ng tuguncha devoridan meva, urug'kurtakdan esa urug' hosil bo'ladi."
  },
  {
    question: "Odamda xotira, ta'lim olish va axborotni saqlash jarayonlari bosh miyaning qaysi qismi bilan bevosita bog'liq?",
    options: ["Katta yarim sharlar po'stlog'i va limfik tizim", "Faqat uzunchoq miya", "Faqat miyacha", "Orqa miya"],
    answer: 0,
    explanation: "Katta yarim sharlar po'stlog'i va limbik tizim xotirani shakllantirish, o'rganish va tajribalarni saqlashda markaziy rol o'ynaydi."
  },
  {
    question: "Molekulyar biologiyada mRNK dagi genetik kodning universal xususiyati nimani anglatadi?",
    options: ["Barcha tirik organizmlarda bir xil kodonlar bir xil aminokislotalarni kodlashini", "Faqat bitta turga xos ekanligini", "Kodonlarning doim o'zgarib turishini", "Oqsillarning mutlaqo har xil tuzilishini"],
    answer: 0,
    explanation: "Genetik kodning universalligi shundan iboratki, bakteriyadan tortib odamgacha barcha tirik organizmlarda bir xil tripletlar bir xil aminokislotalarni belgilaydi."
  },
  {
    question: "Odamda limfa tizimining qon tomirlaridan farqli ravishda qanday o'ziga xos tuzilish xususiyati mavjud?",
    options: ["Yarim oysimon qopqoqlarga egaligi va yurak kabi markaziy nasosi yo'qligi", "Qonni faqat yurakka haydashi", "Tarkibida doim qizil qon tanachalari bo'lishi", "Faqat arteriyalardan iboratligi"],
    answer: 0,
    explanation: "Limfa tomirlari bir tomonlama harakatni ta'minlovchi ko'plab qopqoqlarga ega, biroq ularda qonni haydaydigan alohida yurak yo'q (harakat mushaklar qisqarishi hisobiga bo'ladi)."
  },
  {
    question: "Tabiiy tanlanish natijasida organizmlarda muhit sharoitlariga moslashish (adaptatsiya) hosil bo'lishi qaysi olim tomonidan ilmiy asoslab berilgan?",
    options: ["Charlz Darvin", "Jan Batist Lamark", "Gregor Mendel", "Robert Huk"],
    answer: 0,
    explanation: "Charlz Darvin tabiiy tanlanish ta'limoti orqali organizmlarning muhitga moslanishi va turlarning evolyutsiyasini ilmiy tushuntirib bergan."
  },

  // --- 5-qism (101-125) ---
  {
    question: "Odam organizmida erkak jinsiy hujayralari — spermatozoyidlar yetilib chiqadigan va harakatchanligini ta'minlaydigan asosiy organ qanday ataladi?",
    options: ["Urug'don (testikula) va uning ortig'i", "Prostata bezi", "Siydik pufagi", "Buyrak usti bezi"],
    answer: 0,
    explanation: "Spermatozoyidlar urug'donlarda hosil bo'lib, ularning ortig'ida yetiladi va harakatlanish xususiyatiga ega bo'ladi."
  },
  {
    question: "O'simliklarda barglar va poyalarning qari qismlarini tashqi muhitdan himoya qiluvchi va qalin qoplamani hosil qiluvchi to'qima qanday nomlanadi?",
    options: ["Probka (periderm) va qobiq", "Epidermis", "Kambiy", "Ksilema"],
    answer: 0,
    explanation: "O'simliklar ulg'aygach, epidermis o'rnini qalin va o'lik hujayralardan iborat probka (periderm) qoplovchi to'qimasi egallaydi."
  },
  {
    question: "Molekulyar biologiyada ribosomada oqsil sintezi (translyatsiya) jarayoni boshlanishini ta'minlovchi boshlang'ich kodon qaysi?",
    options: ["AUG (Metionin)", "UAA", "UAG", "UGA"],
    answer: 0,
    explanation: "AUG kodoni start-kodon bo'lib, u metionin aminokislotasini kodlaydi va oqsil sintezining boshlanish nuqtasi hisoblanadi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi ko'z qorachig'ining yorug'likka reaksiyasini va yutinish jarayonining avtomatik reflekslarini boshqaradi?",
    options: ["O'rta miya", "Miyacha", "Peshona bo'lagi", "Orqa miya"],
    answer: 0,
    explanation: "O'rta miya ko'z qorachig'i kattalashishi yoki kichrayishini hamda yutinish kabi avtomatik harakat reflekslarini tartibga soladi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyalar o'rtasida genlar almashinuvining yuz berishi biologiyada qanday ataladi?",
    options: ["Genlar oqimi (migratsiya)", "Genlar dreyfi", "Mutatsion jarayon", "Krossingover"],
    answer: 0,
    explanation: "Turli populyatsiyaga mansub individlarning ko'chishi va chatishib genlar almashinishini ta'minlashi genlar oqimi deb ataladi."
  },
  {
    question: "O'simliklarda ildiz qalpog'i (chexlik) qanday asosiy vazifani bajaradi?",
    options: ["Ildiz uchini tuproqqa kirishda shikastlanishdan saqlash", "Suvni shimilish", "Fotosintez qilish", "Organik modda to'plash"],
    answer: 0,
    explanation: "Ildiz qalpog'i tirik hujayralardan iborat bo'lib, tuproqda o'sayotgan ildiz uchini mexanik shikastlanishdan himoya qiladi."
  },
  {
    question: "Odamda organizmning immun tizimida asosiy rol o'ynovchi T-limfotsitlar qaysi organda yetiladi va o'z vazifasini bajarishga tayyorlanadi?",
    options: ["Timus (ayrisimon bez)", "Taloq", "Jigar", "Oshqozon osti bezi"],
    answer: 0,
    explanation: "T-limfotsitlar suyak ko'migida hosil bo'lsa-da, timus (ayrisimon bez) orqali o'tib maxsus immun vazifasiga ega bo'lib yetiladi."
  },
  {
    question: "Genetika fanida Mendelning birinchi qonuni (Uniformlik qonuni) bo'yicha toza liniyadagi dominant va retsessiv ota-onalar chatishtirilganda F1 avlodda qanday natija chiqadi?",
    options: ["Barcha nasl bir xil (dominant belgiga ega) bo'ladi", "Faqat retsessiv belgilar chiqadi", "50% dominant, 50% retsessiv bo'ladi", "Barcha belgilar yo'qolib ketadi"],
    answer: 0,
    explanation: "Mendelning birinchi qonuniga muvofiq, geterozigota holatdagi birinchi avlod (F1) tashqi ko'rinishidan bir xil (uniform) bo'lib chiqadi."
  },
  {
    question: "Hujayraning bo'linishga tayyorgarlik ko'radigan interfaza davri qaysi bosqichlardan iborat?",
    options: ["G1 (presintetik), S (sintetik) va G2 (postsintetik) davrlari", "Profaza, metafaza, anafaza", "Faqat mitotik davr", "Meyoz I va Meyoz II"],
    answer: 0,
    explanation: "Interfaza uchta ketma-ket bosqichdan iborat bo'lib, sintetik (S) davrda DNK ikkilanishi sodir bo'ladi."
  },
  {
    question: "Odamda yurak devori nechta qavatdan iborat va ularning nomi qaysilar?",
    options: ["Uch qavat: epikard, miokard va endokard", "Ikki qavat: tashqi va ichki", "Faqat bitta muskul qavati", "To'rt qavat"],
    answer: 0,
    explanation: "Yurak devori tashqi yupqa epikard, qalin o'rta muskul — miokard va ichki endokard qavatlaridan tuzilgan."
  },
  {
    question: "O'simliklarda generativ organ hisoblangan gulning asosiy qismlari qaysilar?",
    options: ["Changchi va urug'chi", "Kosa yaproq va barg", "Faqat poya", "Ildiz va ildizbo'g'zi"],
    answer: 0,
    explanation: "Changchi va urug'chi gulning jinsiy ko'payishni ta'minlovchi asosiy generativ qismlaridir."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi ichki organlar faoliyatini va vegetativ funksiyalarni boshqarishda eng asosiy markaz hisoblanadi?",
    options: ["Uzunchoq miya va oraliq miya", "Faqat miyacha", "Faqat yirik yarim sharlar po'stlog'i", "Faqat ensa bo'lagi"],
    answer: 0,
    explanation: "Uzunchoq miya va oraliq miya hayotiy muhim vegetativ reflekslarni (nafas, qon aylanish, hazm qilish) boshqaradi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyalar sonining cheklanishi va ularning izolyatsiyalanishi natijasida yangi turlarning kelib chiqishi qanday ataladi?",
    options: ["Geografik va ekologik izolyatsiya (spektatsiya)", "Modifikatsion o'zgarish", "Faqat mitoz", "Atavizm"],
    answer: 0,
    explanation: "Geografik izolyatsiya tur areallarining tabiiy to'siqlar tufayli bo'linishi va ular orasidagi aloqaning uzilishi orqali sodir bo'ladi."
  },
  {
    question: "Odam organizmida qon shakarini boshqaruvchi ikkita asosiy gormon ishlab chiqaruvchi bez qaysi?",
    options: ["Oshqozon osti bezi (insulin va glyukagon)", "Buyrak usti bezi", "Gipofiz", "Qalqonsimon bez"],
    answer: 0,
    explanation: "Oshqozon osti bezi insulin va glyukagon gormonlarini ishlab chiqarib, qonda glyukoza miqdorini doimiy me'yorda saqlaydi."
  },
  {
    question: "Biogeosenozda trofik darajalar (oziq zanjiri pog'onalari) bo'ylab energiya o'tishida ekologik qoida bo'yicha taxminan qancha energiya keyingi bosqichga o'tadi?",
    options: ["Taxminan 10%", "100%", "Faqat 1%", "50%"],
    answer: 0,
    explanation: "Lindman qoidasiga (10% qoidasiga) ko'ra, har bir yuqori trofik pog'onaga oldingi pog'ona energiyasining atigi 10 foizigina o'tadi."
  },
  {
    question: "O'simliklarda suv bug'lanishini (transpiratsiyani) va gazlar almashinuvini ta'minlovchi og'izchalar qanday ochilib yopiladi?",
    options: ["Og'izcha hujayralarining turgor bosimining o'zgarishi hisobiga", "Faqat shamol ta'sirida", "Kambiyning bo'linishi bilan", "Mexanik to'qimaning tortilishi bilan"],
    answer: 0,
    explanation: "Og'izcha hujayralariga suv kirib turgori oshganda teshik ochiladi, suv chiqib ketib turgor pasayganda esa yopiladi."
  },
  {
    question: "Odamda jinsiy xromosomalar orqali irsiylanadigan kasalliklarga tashxis qo'yilganda, erkaklarda kasallikning ayollarga nisbatan tezroq namoyon bo'lish sababi nimada?",
    options: ["Erkaklarda bitta X-xromosoma mavjud bo'lib, undagi retsessiv genlarni to'suvchi ikkinchi X yo'qligida", "Erkaklarda xromosomalar umuman yo'qligida", "Ayollarda genlar umuman bo'lmasligida", "Faqat yoshga bog'liqligida"],
    answer: 0,
    explanation: "Erkaklar geterogametik (XY) bo'lgani uchun X xromosomadagi har qanday retsessiv patologik gen darhol fenotipda namoyon bo'ladi."
  },
  {
    question: "Genetika fanida turli belgilarga javob beruvchi nonallel genlarning o'zaro ta'sir turlariga qaysilar kiradi?",
    options: ["Komplementarlik, epistaz, polimeriya", "Faqat mitoz va meyoz", "Faqat transkripsiya va translyatsiya", "Faqat gomologik birikish"],
    answer: 0,
    explanation: "Nonallel genlarning o'zaro ta'siriga komplementarlik, epistaz va polimeriya turlari kiradi."
  },
  {
    question: "Odam organizmida limfa suyuqligining harakati qaysi omillar ta'sirida amalga oshiriladi?",
    options: ["Skelet mushaklarining qisqarishi, tomir qopqoqlari va nafas olish harakatlari", "Faqat yurakning qisqarish kuchi", "Faqat buyrak bosimi", "Faqat qon aylanish tezligi"],
    answer: 0,
    explanation: "Limfa tomirlarida yurak kabi nasos yo'q, shuning uchun limfa mushaklarning qisqarishi va tomir ichidagi bir tomonlama qopqoqlar yordamida harakatlanadi."
  },
  {
    question: "Evolyutsiya jarayonida turlarning turg'unligini va muhitga moslashishini ta'minlovchi asosiy harakatlantiruvchi kuch nima?",
    options: ["Tabiiy tanlanish", "Faqat modifikatsiya", "Tasodifiy o'lim", "Faqat sun'iy tanlanish"],
    answer: 0,
    explanation: "Charlz Darvinga ko'ra, tabiiy tanlanish eng yashovchan va moslashgan individlarni saqlab qolib, evolyutsiyaning asosiy harakatlantiruvchi kuchi hisoblanadi."
  },
  {
    question: "O'simliklarda ildiz orqali so'rilgan suv va mineral tuzlar poya bo'ylab qaysi yo'nalishda harakatlanadi?",
    options: ["Faqat pastdan yuqoriga (ksilema bo'ylab)", "Faqat yuqoridan pastga", "Ikkala tomonga bir xil", "Faqat bargdan ildizga"],
    answer: 0,
    explanation: "Suv va mineral tuzlar ildizdan olinib, ksilema orqali faqat pastdan yuqoriga — barglar va novdalarga qarab oqadi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismida tana harorati, uyg'onish va uxlash sikllarini boshqaruvchi markazlar joylashgan?",
    options: ["Oraliq miya (gipotalamus va talamus)", "Miyacha", "Uzunchoq miya", "Ensa bo'lagi"],
    answer: 0,
    explanation: "Oraliq miya uyqu va uyg'onish, ishtaha, harorat kabi ko'plab fiziologik jarayonlarni muvofiqlashtiradi."
  },
  {
    question: "Molekulyar biologiyada oqsil biosintezi jarayonida kodon va antikodon orasidagi bog'lanish qaysi organoidda sodir bo'ladi?",
    options: ["Ribosomada", "Yadroda", "Mitoxondriyada", "Lizosomada"],
    answer: 0,
    explanation: "Translyatsiya jarayoni ribosomada kechib, unda mRNK kodoni bilan tRNK antikodoni o'zaro komplementar bog'lanadi."
  },
  {
    question: "Odam organizmida qon bosimining pasayib ketishiga qarshi javoban qaysi gormon yoki moddalar tizimi faollashadi?",
    options: ["Renin-angiotensin-aldosteron tizimi va adrenalin", "Faqat insulin", "Faqat tiroksin", "Faqat safro suyuqligi"],
    answer: 0,
    explanation: "Qon bosimi tushganda buyrak renin ajratib, qon tomirlarini toraytiruvchi va bosimni ko'taruvchi angiotensin-aldosteron tizimini faollashtiradi."
  },
  {
    question: "Genetika fanida nuklein kislotalarning (DNK) monomeri nima deb ataladi?",
    options: ["Nukleotid", "Aminokislota", "Monosaxarid", "Glikogen"],
    answer: 0,
    explanation: "Har bir DNK zanjiri azotli asos, dezoksiriboza va fosfat guruhidan iborat nukleotid monomerlarining birikishidan hosil bo'ladi."
  },

  // --- 6-qism (126-150) ---
  {
    question: "Odam organizmida erkak jinsiy hujayrasi — spermatozoyidning yetilish jarayoni qanday ataladi?",
    options: ["Spermatogenez", "Oogenez", "Mitoz", "Fagotsitoz"],
    answer: 0,
    explanation: "Spermatogenez — urug'donlarda kechadigan va yakunda haploid xromosomali spermatozoyidlar hosil bo'ladigan murakkab jarayondir."
  },
  {
    question: "O'simliklarda barglarning tukchalar bilan qoplanishi qanday ekologik ahamiyatga ega?",
    options: ["Ortiqcha suv bug'lanishining (transpiratsiyaning) oldini oladi va qizib ketishdan saqlaydi", "Fotosintezni to'xtatadi", "Ozuqa moddalarni zaxiralaydi", "Urug'lanishni tezlashtiradi"],
    answer: 0,
    explanation: "Qurg'oqchil yoki issiq muhitdagi o'simliklarning tuklar bilan qoplanishi quyosh nurlarini qaytarib, ortiqcha transpiratsiyadan asraydi."
  },
  {
    question: "Molekulyar biologiyada mRNK molekulasining yetilish jarayoni — intronlarning kesib tashlanishi va eksonlarning qo'shilishi qanday ataladi?",
    options: ["Splaytsing (processing)", "Translyatsiya", "Replikatsiya", "Mutatsiya"],
    answer: 0,
    explanation: "Splaytsing — eukariotlarda birlamchi mRNK dan funksional bo'lmagan qismlarni (intronlarni) olib tashlab, kerakli qismlarni (eksonlarni) birlashtirish jarayoni."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi tana muvozanatini saqlash hamda harakatlarni muvofiqlashtirish uchun asosiy markaz hisoblanadi?",
    options: ["Miyacha (cerebellum)", "Uzunchoq miya", "Peshona bo'lagi", "Oraliq miya"],
    answer: 0,
    explanation: "Miyacha mushaklar tonusini boshqarib, gavda muvozanatini va aniq harakatlarni muvofiqlashtiradi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyalar sonining tasodifiy ravishda keskin kamayib ketishi natijasida genlar xilma-xilligining yo'qolishi qanday nomlanadi?",
    options: ["Butilka gori (bottle-neck) effekti", "Krossingover", "Komplementarlik", "Transkripsiya"],
    answer: 0,
    explanation: "Tabiiy ofatlar yoki boshqa omillar tufayli populyatsiya soni keskin kamayganda genofond qisqarib, butilka gori effekti yuzaga keladi."
  },
  {
    question: "O'simliklarda ildiz tizimining asosiy turlari qaysilar?",
    options: ["O'q ildiz va popuk ildiz", "Faqat barg ildiz", "Faqat yer ustki ildiz", "Faqat qobig'i yo'q ildiz"],
    answer: 0,
    explanation: "O'simliklarda asosiy ildiz yaxshi rivojlangan o'q ildiz tizimi va asosiy ildiz tez nobud bo'lib poyadan o'sadigan popuk ildiz turlari mavjud."
  },
  {
    question: "Odam organizmida qon ivish sistemasining buzilishi va irsiylanuvchi kasallik — gemofiliya qaysi xromosomaga birikkan holda irsiylanadi?",
    options: ["X-xromosomaga retsessiv tarzda", "Y-xromosomaga dominant tarzda", "Autosoma xromosomaga", "Mitoxondrial DNKga"],
    answer: 0,
    explanation: "Gemofiliya X-xromosomaga birikkan retsessiv patologiya bo'lib, ayollarda geterozigotada yashirinib o'tadi, erkaklarda esa namoyon bo'ladi."
  },
  {
    question: "Genetika fanida Mendelning ikkinchi qonuni — ajralish qonuni qaysi nisbatni namoyon qiladi (fenotip bo'yicha)?",
    options: ["3:1", "9:3:3:1", "1:2:1", "1:1"],
    answer: 0,
    explanation: "Geterozigotali organizmlar o'zaro chatishtirilganda F2 avlodda fenotip bo'yicha 3:1 nisbatda ajralish kuzatiladi."
  },
  {
    question: "Hujayraning bo'linish jarayonida xromosomalar ikkiga bo'linib qutblarga tarqaladigan anafaza bosqichidan oldingi muhim faza qaysi?",
    options: ["Metafaza", "Profaza", "Telofaza", "Interfaza"],
    answer: 0,
    explanation: "Metafaza bosqichida xromosomalar ekvator bo'ylab tizilib, so'ng anafazaga o'tib qutblarga tortiladi."
  },
  {
    question: "Odamda buyraklar faoliyatining boshqarilishida ishtirok etuvchi va siydik hosil bo'lishini kamaytiruvchi (suvni qayta so'ruvchi) gormon qaysi?",
    options: ["Vasopressin (antidiuretik gormon - ADG)", "Insulin", "Adrenalin", "Testosteron"],
    answer: 0,
    explanation: "Gipofiz tomonidan ajratiladigan vasopressin buyrak naychalarida suvning qonga qayta so'rilishini kuchaytirib, siydik hajmini qisqartiradi."
  },
  {
    question: "O'simliklarda suvning ildizdan barglargacha bo'lgan masofaga harakatlanishini ta'minlovchi asosiy hayotiy kuchlar qaysilar?",
    options: ["Ildiz bosimi va barglarning transpiratsiya (so'ruvchi) kuchi", "Faqat quyosh nuri", "Faqat tuproq harorati", "Faqat qobig'ining qisqarishi"],
    answer: 0,
    explanation: "Ildiz bosimi pastdan siqib chiqarsa, transpiratsiya kuchi yuqoridan tortib, suvning ksilema bo'ylab uzluksiz oqishini ta'minlaydi."
  },
  {
    question: "Odamda limfa tizimining asosiy vazifalaridan biri bo'lgan himoya funksiyasi qaysi hujayralar orqali amalga oshiriladi?",
    options: ["Limfotsitlar (oq qon tanachalari)", "Eritrotsitlar", "Trombotsitlar", "Albuminlar"],
    answer: 0,
    explanation: "Limfa tugunlarida yetiladigan limfotsitlar organizmga tushgan mikroblarni zararsizlantirib, antitelolar hosil qiladi."
  },
  {
    question: "Evolyutsiya nazariyasida bir xil vazifani bajaruvchi, lekin kelib chiqishi turlicha bo'lgan organlar qanday ataladi?",
    options: ["Analog organlar", "Homolog organlar", "Rudimentlar", "Atavizmlar"],
    answer: 0,
    explanation: "Kelib chiqishi har xil, ammo bir xil funksiyani bajaruvchi organlar analog organlar deb ataladi (masalan, qush va hasharot qanotlari)."
  },
  {
    question: "Odam organizmida oshqozon shirasining tarkibiy qismi bo'lgan va oqsillarni parchalovchi pepsin fermenti faollashishi uchun qaysi kislota zarur?",
    options: ["Xlorid kislota (HCl)", "Sulfat kislota", "Fosfat kislota", "Sut kislota"],
    answer: 0,
    explanation: "Me'da bezlari ajratadigan xlorid kislota muhitni kislotali qilib, pepsinogenni faol pepsinga aylantiradi."
  },
  {
    question: "Biogeosenozda ozuqa zanjirining boshlang'ich pog'onasini egallovchi produtsentlar kimlar?",
    options: ["Yashil o'simliklar va suvo'tlar (avtotroflar)", "Yirtqich hayvonlar", "Zamburug'lar", "Bakteriyalar"],
    answer: 0,
    explanation: "Produtsentlar quyosh energiyasi yordamida noorganik moddalardan organik modda hosil qiluvchi o'simliklardir."
  },
  {
    question: "O'simliklarda hujayraning qaysi organoidi fotosintez jarayonini amalga oshiradi?",
    options: ["Xloroplast", "Mitoxondriya", "Lizosoma", "Ribosoma"],
    answer: 0,
    explanation: "Xloroplastlar tarkibidagi xlorofill yordamida quyosh energiyasini yutib, suv va karbonat angidridni organik moddaga aylantiradi."
  },
  {
    question: "Odamda qon guruhlari sistemasida universal donor sifatida qaysi guruh e'tirof etiladi?",
    options: ["I (O) guruhi", "II (A) guruhi", "III (B) guruhi", "IV (AB) guruhi"],
    answer: 0,
    explanation: "I (O) qon guruhi eritrotsitlarida aglutinogenlar bo'lmagani uchun uni boshqa barcha guruhdagi bemorlarga quyish mumkin."
  },
  {
    question: "Genetika fanida turli allel genlarning o'zaro ta'siri natijasida yangi belgining paydo bo'lishi qanday ataladi?",
    options: ["Komplementarlik", "Epistaz", "Polimeriya", "Mutatsiya"],
    answer: 0,
    explanation: "Komplementarlikda ikki xil noallel genlar birgalikda ta'sir ko'rsatib, alohida-alohida bo'lmagan yangi belgini yuzaga keltiradi."
  },
  {
    question: "Hujayraning energetik almashinuvida kislorodli (aerob) bosqich qayerda va qanday kechadi?",
    options: ["Mitoxondriya matritsasi va kristalarida, ATF va CO2 hosil bo'ladi", "Sitoplazmada glikoliz kabi", "Yadro ichida DNKda", "Ribosomada oqsil kabi"],
    answer: 0,
    explanation: "Kislorodli bosqich mitoxondriyalarda kechib, pirat kislotani oxirigacha parchalaydi va ko'p miqdorda ATF hosil qiladi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismida eshitish, ko'rish, ta'm bilish va hid bilish sezgilarining oliy qabul qilish zonalari joylashgan?",
    options: ["Katta yarim sharlar po'stlog'i (korteks)", "Uzunchoq miya", "Miyacha", "Orqa miya"],
    answer: 0,
    explanation: "Katta yarim sharlar po'stlog'ida barcha sezgi organlaridan kelgan axborotlarni tahlil qiluvchi oliy markazlar joylashgan."
  },
  {
    question: "O'simliklarda ikki marta urug'lanish jarayonida chang nayidan kelgan ikkita spermiydan biri tuxumhujayra bilan qo'shilsa, ikkinchisi nima bilan qo'shiladi?",
    options: ["Markaziy hujayra (endosperm) bilan", "Kosa yaproq bilan", "Ildiz uchi bilan", "Faqat po'stloq bilan"],
    answer: 0,
    explanation: "Navashin kashf etgan ikki marta urug'lanishda bir spermiy tuxumhujayra (zigota) bilan, ikkinchisi esa markaziy hujayra bilan qo'shilib endosperm hosil qiladi."
  },
  {
    question: "Odam organizmida qon bosimini va yurak urish tezligini oshiruvchi buyrak usti bezi gormoni qaysi?",
    options: ["Adrenalin (va noradrenalin)", "Insulin", "Tiroksin", "Vasopressin"],
    answer: 0,
    explanation: "Adrenalin stress yoki qo'rquv paytida buyrak usti bezi miya qismidan ajralib, yurak urishini tezlashtiradi va qon bosimini ko'taradi."
  },
  {
    question: "Evolyutsiya nazariyasida bir xil umumiy ajdoddan kelib chiqqan organlarning tuzilishi o'xshash, lekin vazifasi turlicha bo'lishi nima deb ataladi?",
    options: ["Homolog organlar", "Analog organlar", "Rudimentlar", "Atavizmlar"],
    answer: 0,
    explanation: "Homolog organlar kelib chiqishi bir xil, tuzilishi o'xshash, biroq bajaradigan ishi turlicha bo'lgan organlardir (masalan, qush qanoti va odam qo'li)."
  },
  {
    question: "Odamda terining asosiy funksiyalaridan biri bo'lgan termoregulyatsiya qaysi jarayon orqali boshqariladi?",
    options: ["Ter bezlari orqali ter ajratish va qon tomirlarining kengayib-torayishi", "Faqat sochlarning o'sishi bilan", "Faqat tirnoqlar orqali", "Faqat yog' bezlari orqali"],
    answer: 0,
    explanation: "Terlash va teri osti kapilyarlarining kengayib issiqlik chiqarishi tana haroratini doimiy bir maromda ushlab turadi."
  },
  {
    question: "Genetika fanida DNK molekulasining qo'sh spiral tuzilishini va uning tuzilish qoidalarini aniqlagan olimlar kimlar?",
    options: ["J. Uotson va F. Krik", "G. Mendel va T. Morgan", "C. Darvin va J. Lamark", "R. Huk va Livenhuk"],
    answer: 0,
    explanation: "1953-yilda Uotson va Krik DNK ning fazoviy qo'sh spiral modelini yaratib, biologiyada ulkan kashfiyot qildilar."
  },

  // --- 7-qism (151-175) ---
  {
    question: "Odam organizmida qon aylanishining katta doirasi qayerdan boshlanib qayerda tugaydi?",
    options: ["Chap qorincha — O'ng bo'lmacha", "O'ng qorincha — Chap bo'lmacha", "Chap qorincha — Chap bo'lmacha", "O'ng qorincha — O'ng bo'lmacha"],
    answer: 0,
    explanation: "Katta qon aylanish doirasi chap qorinchadan chiqib, barcha organlarni aylanib o'tgach, o'ng bo'lmachaga kelib tugaydi."
  },
  {
    question: "O'simliklarda barglarning kuzda to'kilishidan oldin sodir bo'ladigan asosiy biokimyoviy o'zgarish nima?",
    options: ["Xlorofill parchalanib, barg pigmentlari o'zgaradi va ajratuvchi qatlam hosil bo'ladi", "Barglar o'sishdan to'xtab suvni ko'paytiradi", "Faqat ildizga qarab oqsil oqadi", "Fotosintez kuchayadi"],
    answer: 0,
    explanation: "Kuzda xlorofill yemirilishi natijasida boshqa pigmentlar (karotin, xantofill) ko'rinib qoladi va ajratuvchi qatlam hosil bo'lib barg uziladi."
  },
  {
    question: "Molekulyar biologiyada mRNK molekulasidagi uchlik nukleotidlar (kodonlar) soni 300 ta bo'lsa, uning asosida sintezlanadigan oqsil molekulasidagi aminokislotalar soni nechta bo'ladi?",
    options: ["300 ta", "100 ta", "900 ta", "150 ta"],
    answer: 0,
    explanation: "Har bir kodon bitta aminokislotani kodlaydi, shuning uchun 300 ta kodon 300 ta aminokislotadan iborat oqsilni hosil qiladi (stop-kodonlarni hisobga olmaganda asosiy qism)."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi uyqu va uyg'onish siklini, shuningdek asosiy biologik ritmlarni boshqaradi?",
    options: ["Oraliq miya (gipotalamus va epifiz)", "Miyacha", "Uzunchoq miya", "Peshona bo'lagi"],
    answer: 0,
    explanation: "Epifiz va gipotalamus (oraliq miya qismlari) melatonin va boshqa moddalar orqali biologik ritmlar hamda uyquni boshqaradi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada yangi genotiplar va kombinatsiyalarning hosil bo'lishining asosiy manbalaridan biri nima?",
    options: ["Jinsiy ko'payish va krossingover", "Faqat mitoz", "Faqat hujayraning o'lchami", "Fotosintez"],
    answer: 0,
    explanation: "Jinsiy ko'payish jarayonida xromosomalarning erkin tarqalishi va krossingover kombinativ o'zgaruvchanlikni keltirib chiqaradi."
  },
  {
    question: "O'simliklarda ildizning eniga o'sishini ta'minlovchi yon meristema (kambiy) qaysi to'qimalar orasida joylashgan?",
    options: ["Ksilema va floema orasida", "Epidermis ustida", "Faqat ildiz qalpog'ida", "Faqat barg to'qimasida"],
    answer: 0,
    explanation: "Kambiy ksilema (yog'ochlik) va floema (loks) o'tkazuvchi to'qimalari orasida joylashgan bo'lib, eniga o'sishni ta'minlaydi."
  },
  {
    question: "Odam organizmida qon ivishining buzilishi va irsiylanuvchi kasallik — daltonizm (rang ajratolmaslik) qanday irsiylanadi?",
    options: ["X-xromosomaga birikkan retsessiv belgisi sifatida", "Y-xromosomaga dominant tarzda", "Autosomada kodominant tarzda", "Mitoxondrial yo'l bilan"],
    answer: 0,
    explanation: "Daltonizm ham gemofiliya kabi X-xromosomaga birikkan retsessiv kasallik bo'lib, erkaklarda tezroq namoyon bo'ladi."
  },
  {
    question: "Genetika fanida digibrid chatishtirishda ota-onalar ikkala belgi bo'yicha geterozigota (AaBb) bo'lsa, F2 avlodda nechta genotipik sinf (variant) hosil bo'ladi?",
    options: ["9 xil genotipik sinf", "4 xil", "16 xil", "2 xil"],
    answer: 0,
    explanation: "Mendel qoidasiga ko'ra digibrid chatishtirishda F2 da genotip bo'yicha 9 xil turdagi genotipik kombinatsiyalar yuzaga keladi."
  },
  {
    question: "Hujayraning bo'linish jarayonida xromosomalarning ekvator bo'ylab qator bo'lib yig'ilishi qaysi fazada sodir bo'ladi?",
    options: ["Metafaza", "Profaza", "Anafaza", "Telofaza"],
    answer: 0,
    explanation: "Metafazada xromosomalar maksimal darajada spirallashib, hujayraning qoq o'rtasida (ekvatorda) metafaza plastinkasini hosil qiladi."
  },
  {
    question: "Odamda buyrak usti bezining qobiq qismidan ishlab chiqariladigan va organizmning stressga chidamliligini oshiruvchi asosiy glyukokortikoid gormon qaysi?",
    options: ["Cortizol (kortizol)", "Insulin", "Adrenalin", "Testosteron"],
    answer: 0,
    explanation: "Kortizol stress gormoni bo'lib, uglerod va oqsil almashinuvini boshqaradi hamda organizmning yallig'lanishga qarshi kurashishiga yordam beradi."
  },
  {
    question: "O'simliklarda barglarning ustki qismini qoplab turuvchi va suv bug'lanishidan saqlovchi yupqa shaffof qatlam qanday ataladi?",
    options: ["Kutikula (mum qatlami)", "Kambiy", "Probka", "Ksilema"],
    answer: 0,
    explanation: "Epidermis ustidan ajralib chiquvchi mumsimon modda — kutikula barglarni ortiqcha transpiratsiyadan himoya qiladi."
  },
  {
    question: "Odam organizmida limfa tugunlari qanday asosiy biologik vazifani bajaradi?",
    options: ["Biologik filtr vazifasini bajarib, mikroblarni ushlab qoladi va limfotsitlar ishlab chiqaradi", "Qonni qizdiradi", "Yog'larni to'liq parchalaydi", "Faqat kislorod tashiydi"],
    answer: 0,
    explanation: "Limfa tugunlari limfani filtrlash va organizm immunitetini ta'minlashda asosiy to'siq hisoblanadi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada mutatsiyalar natijasida yuzaga kelgan yangi belgilarning saqlanib qolishini ta'minlovchi asosiy omil nima?",
    options: ["Tabiiy tanlanish", "Faqat tasodifiy o'lim", "Mitoz bo'linish", "Sun'iy yoritish"],
    answer: 0,
    explanation: "Tabiiy tanlanish eng muvaffaqiyatli mutatsiyaga ega individlarni tanlab olib, ularning keyingi avlodga o'tishini ta'minlaydi."
  },
  {
    question: "Odamda me'da shirasi tarkibidagi asosiy ferment bo'lgan pepsin qanday sharoitda faol ishlaydi?",
    options: ["Faqat kislotali muhitda (xlorid kislota mavjudligida)", "Faqat ishqoriy muhitda", "Faqat neytral suvda", "Muhitning ahamiyati yo'q"],
    answer: 0,
    explanation: "Pepsin faqat me'dadagi xlorid kislota yaratgan kislotali muhitdagina oqsillarni parchalash xususiyatiga ega bo'ladi."
  },
  {
    question: "Biogeosenozda ozuqa zanjirining ikkinchi pog'onasini (birinchi tartibli konsumentlarni) odatda qanday organizmlar tashkil etadi?",
    options: ["O'txo'r hayvonlar (herbivorlar)", "Yirtqichlar", "Yashil o'simliklar", "Bakteriyalar"],
    answer: 0,
    explanation: "O'simliklar bilan oziqlanadigan o'txo'r hayvonlar ozuqa zanjirida produtsentlardan keyingi birinchi tartibli konsumentlardir."
  },
  {
    question: "O'simliklarda suvning ildizdan so'rilishini ta'minlovchi asosiy fizik hodisa qaysi?",
    options: ["Osmos va diffuziya", "Magnit tortishish", "Faqat mexanik bosim", "Elektr toki"],
    answer: 0,
    explanation: "Ildiz tukchalaridagi hujayra shirasining konsentratsiyasi yuqori bo'lgani uchun tuproqdagi suv osmos qonuniga ko'ra ichkariga o'tadi."
  },
  {
    question: "Odamda qon guruhlarini aniqlashda ABO tizimi bo'yicha eritrotsitlarda aglyutinogenlar va zardobda aglyutininlar qanday xususiyatga ega?",
    options: ["Bir xil nomdagi aglyutinogen va aglyutinin birga bo'lsa qon ivib (aglyutinatsiyalanib) qoladi", "Ular hech qachon o'zaro ta'sir qilmaydi", "Qonni suyultiradi", "Faqat kislorod hosil qiladi"],
    answer: 0,
    explanation: "A va alfa yoki B va beta birga uchrashsa aglyutinatsiya (cho'kma hosil bo'lib yopishish) yuz beradi."
  },
  {
    question: "Genetika fanida Morgan qoidasiga ko'ra, xromosomada birikkan genlarning bir-biridan krossingover natijasida ajralib ketish ehtimoli nimaga bog'liq?",
    options: ["Genlar orasidagi masofaga", "Faqat xromosomaning rangi bilan", "Hujayraning haroratiga", "Faqat yadro o'lchamiga"],
    answer: 0,
    explanation: "Genlar orasidagi masofa qancha uzoq bo'lsa, ular orasida krossingover sodir bo'lish ehtimoli shunchalik yuqori bo'ladi."
  },
  {
    question: "Hujayraning energetik almashinuvida kislorodsiz bosqichda 1 molekula glyukozadan qancha miqdorda ATF hosil bo'ladi?",
    options: ["2 ta ATF", "36 ta ATF", "38 ta ATF", "0 ta ATF"],
    answer: 0,
    explanation: "Glikoliz (kislorodsiz bosqich) natijasida 2 molekula ATF hosil bo'lib, asosiy energiya kislorodli bosqichda ajralib chiqadi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi nutqning motor markazini (so'zlash qobiliyatini) o'z ichiga oladi?",
    options: ["Peshona bo'lagi (Broka markazi)", "Ensa bo'lagi", "Miyacha", "Uzunchoq miya"],
    answer: 0,
    explanation: "Katta yarim sharlar peshona bo'lagining quyi qismida nutq harakatlarini boshqaruvchi Broka markazi joylashgan."
  },
  {
    question: "O'simliklarda ikki marta urug'lanish jarayonini kashf etgan buyuk rus olimi kim?",
    options: ["S.G. Navashin", "C. Darvin", "G. Mendel", "I. Pavlov"],
    answer: 0,
    explanation: "S.G. Navashin 1898-yilda yopiq urug'li o'simliklarda ikki marta urug'lanish hodisasini ilmiy kashf etgan."
  },
  {
    question: "Odam organizmida qon bosimini doimiy ushlab turishda va qon tomirlarini toraytirishda qaysi gormon yoki modda muhim rol o'ynaydi?",
    options: ["Adrenalin va vazopressin", "Faqat insulin", "Faqat safro", "Faqat melatonin"],
    answer: 0,
    explanation: "Adrenalin va vazopressin qon tomirlarini toraytirib, arterial qon bosimining ko'tarilishini ta'minlaydi."
  },
  {
    question: "Evolyutsiya nazariyasida turlarning kelib chiqishi va ularning o'zgarishini tushuntiruvchi ilk ilmiy ta'limotni kim yaratgan?",
    options: ["Jan Batist Lamark", "Charlz Darvin", "Gregor Mendel", "Lui Paster"],
    answer: 0,
    explanation: "J.B. Lamark o'zining evolyutsion nazariyasida organizmlarning tashqi muhit ta'sirida o'zgarishi va irsiylanishini birinchi bo'lib ilgari surgan."
  },
  {
    question: "Odamda terining ostki qavati qanday nomlanadi va u qanday vazifani bajaradi?",
    options: ["Yog' qatlami (podkoktelnaya kletchatka) — issiqlikni saqlash va zaxira ozuqa to'plash", "Epidermis — faqat suv o'tkazish", "Dermis — faqat tirnoq o'stirish", "Faqat suyak hosil qilish"],
    answer: 0,
    explanation: "Teri osti yog' qatlami organizmni sovqotishdan saqlaydi va energiyani zaxira holatida yig'adi."
  },
  {
    question: "Genetika fanida irsiy axborotni saqlovchi va uni nasldan-naslga o'tkazuvchi asosiy molekula qaysi?",
    options: ["DNK (dezoksiribonuklein kislota)", "RNK", "Atsetilxolin", "Glyukogen"],
    answer: 0,
    explanation: "DNK barcha tirik organizmlarda irsiy axborotni saqlash va nusxalash vazifasini bajaruvchi asosiy makromolekuladir."
  },

  // --- 8-qism (176-200) ---
  {
    question: "Odam organizmida buyrak usti bezining miya qismidan ishlab chiqariladigan va shoshilinch holatlarda qonga chiqariladigan asosiy gormonlar qaysilar?",
    options: ["Adrenalin va noradrenalin", "Insulin va glyukagon", "Tiroksin va kaltsitonin", "Testosteron va estrogen"],
    answer: 0,
    explanation: "Buyrak usti bezining miya qismi adrenalin va noradrenalin ishlab chiqarib, organizmni stress va xavf-xatar holatlariga tezkor tayyorlaydi."
  },
  {
    question: "O'simliklarda barglar orqali ortiqcha suvning bug'lanishi qanday ataladi?",
    options: ["Transpiratsiya", "Fotosintez", "Glikoliz", "Osmos"],
    answer: 0,
    explanation: "Transpiratsiya — o'simlik barglaridagi og'izchalar orqali suvning bug'lanish jarayoni bo'lib, u sovish va suvni yuqoriga tortishda yordam beradi."
  },
  {
    question: "Molekulyar biologiyada mRNK dagi genetik kodning uchlik (triplet) xususiyati nimani anglatadi?",
    options: ["Har bir aminokislota ketma-ket kelgan 3 ta nukleotid tomonidan kodlanishini", "DNK ning 3 ta zanjirli bo'lishini", "Oqsillarning faqat 3 xil bo'lishini", "Ribosomaning 3 qismdan iboratligini"],
    answer: 0,
    explanation: "Genetik kod uchlik (triplet) tuzilishga ega bo'lib, 3 ta nukleotid birgalikda bitta aminokislotani belgilaydi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi yurak-qon tomir faoliyati va nafas olishning avtomatik markazlarini saqlaydi?",
    options: ["Uzunchoq miya", "Miyacha", "Peshona bo'lagi", "Oraliq miya"],
    answer: 0,
    explanation: "Uzunchoq miyada hayot uchun muhim bo'lgan nafas olish, yurak urishi, yutish va qusish reflekslarining markazlari joylashgan."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada genlar chastotasining tasodifiy omillar tufayli o'zgarishi qanday nomlanadi?",
    options: ["Genlar dreyfi", "Mutatsiya", "Krossingover", "Transkripsiya"],
    answer: 0,
    explanation: "Genlar dreyfi — populyatsiyada tasodifiy voqealar tufayli ayrim allellarning chastotasi o'zgarib ketish hodisasidir."
  },
  {
    question: "O'simliklarda ildiz qismidan so'rilgan suv va mineral tuzlar poya bo'ylab qaysi to'qima orqali harakatlanadi?",
    options: ["Ksilema (yog'ochlik)", "Floema (loks)", "Kambiy", "Epidermis"],
    answer: 0,
    explanation: "Ksilema o'simlikning suv va minerallarni ildizdan barglarga o'tkazuvchi asosiy o'tkazuvchi naylar tizimidir."
  },
  {
    question: "Odamda qon guruhlari sistemasida IV (AB) qon guruhiga ega bo'lgan shaxslarning zardobida qanday aglyutininlar mavjud?",
    options: ["Aglyutininlar umuman yo'q", "Faqat alfa", "Faqat beta", "Ham alfa, ham beta"],
    answer: 0,
    explanation: "IV qon guruhida eritrotsitlarda A va B aglyutinogenlar bo'lib, zardobda aglyutininlar (alfa va beta) bo'lmaydi."
  },
  {
    question: "Genetika fanida ota-ona organizmning irsiy belgilari to'plami nima deb ataladi?",
    options: ["Genotip", "Fenotip", "Kariotip", "Genom"],
    answer: 0,
    explanation: "Genotip — organizmdagi barcha genlarning yig'indisi bo'lib, u tashqi muhit bilan birgalikda fenotipni shakllantiradi."
  },
  {
    question: "Hujayraning mitoz bo'linishida xromosomalar qutblarga tarqalib bo'lgach, ularning atrofida yadro qobig'ining qayta shakllanishi qaysi fazada yuz beradi?",
    options: ["Telofaza", "Profaza", "Metafaza", "Anafaza"],
    answer: 0,
    explanation: "Telofaza mitozning oxirgi bosqichi bo'lib, bunda xromosomalar cho'zilib, yadro qobig'i va yadrochalar qaytadan hosil bo'ladi."
  },
  {
    question: "Odam organizmida qon shakarini oshiruvchi va jigardagi glikogenni glyukozaga aylantiruvchi gormon qaysi?",
    options: ["Glyukagon", "Insulin", "Adrenalin", "Testosteron"],
    answer: 0,
    explanation: "Oshqozon osti bezining alfa-hujayralari ishlab chiqaradigan glyukagon gormoni qondagi glyukoza kamayganda uni oshiradi."
  },
  {
    question: "O'simliklarda generativ organ hisoblangan gulning o'zak qismlari va barglari biriktirilgan kengaygan qismi qanday ataladi?",
    options: ["Gul o'rni", "Tuguncha", "Changchi", "Urug'chi"],
    answer: 0,
    explanation: "Gul o'rni — poyaning kengaygan qismi bo'lib, uning ustida kosa yaproqlar, toj yaproqlar, changchi va urug'chilar joylashadi."
  },
  {
    question: "Odamda limfa sistemasining eng yirik tomiri qayerga quyiladi?",
    options: ["Ko'krak limfa yo'li orqali ko'krak osti venalariga (qon tomirga)", "To'g'ridan-to'g'ri yurak qorinchasiga", "Ingichka ichakka", "Buyrak jomiga"],
    answer: 0,
    explanation: "Limfa suyuqligi oxir-oqibat yirik limfa yo'llari orqali bo'yin va ko'krak qafasidagi yirik qon venalariga qo'shiladi."
  },
  {
    question: "Evolyutsiya nazariyasida turlarning paydo bo'lishida vaqtinchalik yoki makoniy to'siqlar tufayli yuzaga keladigan izolyatsiya turi nima deyiladi?",
    options: ["Geografik izolyatsiya", "Ekologik izolyatsiya", "Genetik izolyatsiya", "Fiziologik izolyatsiya"],
    answer: 0,
    explanation: "Geografik izolyatsiya turlar o'rtasidagi erkin chatishtirishni to'xtatuvchi tabiiy to'siqlar (daryo, tog') orqali amalga oshadi."
  },
  {
    question: "Odamda oziq moddalarni parchalovchi fermentlar ishlab chiqaruvchi va ovqat hazm qilishda eng yirik bez hisoblangan organ qaysi?",
    options: ["Jigar", "Oshqozon", "Buyrak", "Taloq"],
    answer: 0,
    explanation: "Jigar organizmdagi eng yirik bez bo'lib, safro ishlab chiqaradi va moddalar almashinuvida muhim markaziy rol o'ynaydi."
  },
  {
    question: "Biogeosenozda trofik darajalar bo'yicha yuqori pog'onaga ko'tarilgan sari umumiy biomassa va energiya miqdori qanday o'zgaradi?",
    options: ["Keskin kamayib boradi", "O'zgarmas qoladi", "Ortib boradi", "Avval ko'payib, keyin yo'qoladi"],
    answer: 0,
    explanation: "Ekologik piramida qoidasiga ko'ra, har bir yuqori pog'onaga o'tganda energiya va biomassa 90% atrofida kamayib boradi."
  },
  {
    question: "O'simliklarda barglar va poyalarning qoplovchi to'qimasi shikastlanganda uning o'rnini qoplaydigan va qalinlashtiradigan ikkilamchi qoplovchi to'qima qaysi?",
    options: ["Probka (periderm)", "Epidermis", "Kambiy", "Ksilema"],
    answer: 0,
    explanation: "O'simliklar yo'g'onlashganda epidermis o'rnini probka (periderm) qoplovchi to'qimasi egallaydi."
  },
  {
    question: "Odamda qon guruhlari va Rezus (Rh) faktorning mos kelmasligi homiladorlikda qanday holatni keltirib chiqarishi mumkin?",
    options: ["Rezus-konflikt (gemolitik kasallik)", "Faqat qon bosimi oshishi", "Faqat suyak yemirilishi", "Hech qanday ta'sir ko'rsatmaydi"],
    answer: 0,
    explanation: "Ona rezus-manfiy, homila rezus-musbat bo'lganda rezus-konflikt yuzaga kelib, gemolitik kasallikka sabab bo'lishi mumkin."
  },
  {
    question: "Genetika fanida bir xil belgining muqobil shakllarini (masalan, sariq yoki yashil rangni) belgilovchi genlar qanday ataladi?",
    options: ["Allel genlar", "Nonallel genlar", "Polimer genlar", "Stop-kodonlar"],
    answer: 0,
    explanation: "Allel genlar gomolog xromosomalarning bir xil uchastkalarida joylashib, bitta belgining turli ko'rinishlarini ifodalaydi."
  },
  {
    question: "Hujayraning energetik almashinuvida glyukozaning kislorodsiz parchalanishi (glyoliz) qaysi organoidda yoki joyda ketadi?",
    options: ["Sitoplazmada", "Mitoxondriya kristalarida", "Yadro ichida", "Ribosomada"],
    answer: 0,
    explanation: "Glikoliz jarayoni sitoplazmada kechib, kislorod talab etmagan holda 2 ta ATF hosil qiladi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi vizual (ko'rish) axborotlarni qabul qilish va qayta ishlashning asosiy markazi hisoblanadi?",
    options: ["Ensa bo'lagi", "Peshona bo'lagi", "Chakka bo'lagi", "Miyacha"],
    answer: 0,
    explanation: "Bosh miya yarim sharlarining ensa bo'lagida ko'rish sezgi zonalari va tasvirlarni tahlil qilish markazlari joylashgan."
  },
  {
    question: "O'simliklarda urug'ning unib chiqishi uchun zarur bo'lgan asosiy uchta tashqi omil qaysilar?",
    options: ["Suv, kislorod va qulay harorat", "Faqat quyosh nuri va azot", "Faqat quruqlik va muzlash", "Faqat karbonat angidrid"],
    answer: 0,
    explanation: "Urug' tinch holatdan o'sishga o'tishi uchun suv, nafas olish uchun kislorod va ma'lum darajadagi harorat kerak bo'ladi."
  },
  {
    question: "Odam organizmida qon bosimini va organizmda suv-tuz almashinuvini boshqaruvchi asosiy mineralokortikoid gormon qaysi?",
    options: ["Aldosteron", "Kortizol", "Insulin", "Adrenalin"],
    answer: 0,
    explanation: "Buyrak usti bezining qobiq qismidan chiqadigan aldosteron natriy ionlarini ushlab qolib, suv balansini va qon bosimini rostlaydi."
  },
  {
    question: "Evolyutsiya nazariyasida tirik tabiatning tarixiy taraqqiyoti davomida sodir bo'ladigan umumiy murakkablashuv va taraqqiyot qanday ataladi?",
    options: ["Biologik progress", "Biologik regress", "Degeneratsiya", "Atavizm"],
    answer: 0,
    explanation: "Biologik progress turning qulashi emas, aksincha sonining ortishi, areolining kengayishi va progressiv rivojlanishidir."
  },
  {
    question: "Odamda terining sezuvchanlik funksiyasini ta'minlovchi retseptorlar asosan terining qaysi qatlamida joylashgan?",
    options: ["Dermis (chin teri qatlami)", "Epidermisning eng ustki qismi", "Faqat yog' qatlamida", "Faqat soch tolalarida"],
    answer: 0,
    explanation: "Dermis (chin teri) qatlamida bosim, og'riq, harorat va teginishni sezuvchi ko'plab nerv oxirlari (retseptorlar) joylashgan."
  },
  {
    question: "Genetika fanida xromosomalarning tuzilishi buzilishi (masalan, bo'lakcha uzilishi, teskari aylanishi yoki almashinuvi) bilan bog'liq mutatsiyalar qanday ataladi?",
    options: ["Xromosomal mutatsiyalar (aberatsiyalar)", "Genli mutatsiyalar", "Genomli mutatsiyalar", "Modifikatsiyalar"],
    answer: 0,
    explanation: "Xromosomal mutatsiyalar xromosomaning tuzilishi o'zgarishi (delyatsiya, inversiya, translyokatsiya) bilan tavsiflanadi."
  },

  // --- 9-qism (201-225) ---
  {
    question: "Odam organizmida erkak jinsiy hujayrasi — spermatozoyidning yetilish jarayoni qanday ataladi?",
    options: ["Spermatogenez", "Oogenez", "Mitoz", "Fagotsitoz"],
    answer: 0,
    explanation: "Spermatogenez — urug'donlarda kechadigan va yakunda haploid xromosomali spermatozoyidlar hosil bo'ladigan murakkab jarayondir."
  },
  {
    question: "O'simliklarda barglarning tukchalar bilan qoplanishi qanday ekologik ahamiyatga ega?",
    options: ["Ortiqcha suv bug'lanishining (transpiratsiyaning) oldini oladi va qizib ketishdan saqlaydi", "Fotosintezni to'xtatadi", "Ozuqa moddalarni zaxiralaydi", "Urug'lanishni tezlashtiradi"],
    answer: 0,
    explanation: "Qurg'oqchil yoki issiq muhitdagi o'simliklarning tuklar bilan qoplanishi quyosh nurlarini qaytarib, ortiqcha transpiratsiyadan asraydi."
  },
  {
    question: "Molekulyar biologiyada mRNK molekulasining yetilish jarayoni — intronlarning kesib tashlanishi va eksonlarning qo'shilishi qanday ataladi?",
    options: ["Splaytsing (processing)", "Translyatsiya", "Replikatsiya", "Mutatsiya"],
    answer: 0,
    explanation: "Splaytsing — eukariotlarda birlamchi mRNK dan funksional bo'lmagan qismlarni (intronlarni) olib tashlab, kerakli qismlarni (eksonlarni) birlashtirish jarayoni."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi tana muvozanatini saqlash hamda harakatlarni muvofiqlashtirish uchun asosiy markaz hisoblanadi?",
    options: ["Miyacha (cerebellum)", "Uzunchoq miya", "Peshona bo'lagi", "Oraliq miya"],
    answer: 0,
    explanation: "Miyacha mushaklar tonusini boshqarib, gavda muvozanatini va aniq harakatlarni muvofiqlashtiradi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyalar sonining tasodifiy ravishda keskin kamayib ketishi natijasida genlar xilma-xilligining yo'qolishi qanday nomlanadi?",
    options: ["Butilka gori (bottle-neck) effekti", "Krossingover", "Komplementarlik", "Transkripsiya"],
    answer: 0,
    explanation: "Tabiiy ofatlar yoki boshqa omillar tufayli populyatsiya soni keskin kamayganda genofond qisqarib, butilka gori effekti yuzaga keladi."
  },
  {
    question: "O'simliklarda ildiz tizimining asosiy turlari qaysilar?",
    options: ["O'q ildiz va popuk ildiz", "Faqat barg ildiz", "Faqat yer ustki ildiz", "Faqat qobig'i yo'q ildiz"],
    answer: 0,
    explanation: "O'simliklarda asosiy ildiz yaxshi rivojlangan o'q ildiz tizimi va asosiy ildiz tez nobud bo'lib poyadan o'sadigan popuk ildiz turlari mavjud."
  },
  {
    question: "Odam organizmida qon ivish sistemasining buzilishi va irsiylanuvchi kasallik — gemofiliya qaysi xromosomaga birikkan holda irsiylanadi?",
    options: ["X-xromosomaga retsessiv tarzda", "Y-xromosomaga dominant tarzda", "Autosoma xromosomaga", "Mitoxondrial DNKga"],
    answer: 0,
    explanation: "Gemofiliya X-xromosomaga birikkan retsessiv patologiya bo'lib, ayollarda geterozigotada yashirinib o'tadi, erkaklarda esa namoyon bo'ladi."
  },
  {
    question: "Genetika fanida Mendelning ikkinchi qonuni — ajralish qonuni qaysi nisbatni namoyon qiladi (fenotip bo'yicha)?",
    options: ["3:1", "9:3:3:1", "1:2:1", "1:1"],
    answer: 0,
    explanation: "Geterozigotali organizmlar o'zaro chatishtirilganda F2 avlodda fenotip bo'yicha 3:1 nisbatda ajralish kuzatiladi."
  },
  {
    question: "Hujayraning bo'linish jarayonida xromosomalar ikkiga bo'linib qutblarga tarqaladigan anafaza bosqichidan oldingi muhim faza qaysi?",
    options: ["Metafaza", "Profaza", "Telofaza", "Interfaza"],
    answer: 0,
    explanation: "Metafaza bosqichida xromosomalar ekvator bo'ylab tizilib, so'ng anafazaga o'tib qutblarga tortiladi."
  },
  {
    question: "Odamda buyraklar faoliyatining boshqarilishida ishtirok etuvchi va siydik hosil bo'lishini kamaytiruvchi (suvni qayta so'ruvchi) gormon qaysi?",
    options: ["Vasopressin (antidiuretik gormon - ADG)", "Insulin", "Adrenalin", "Testosteron"],
    answer: 0,
    explanation: "Gipofiz tomonidan ajratiladigan vasopressin buyrak naychalarida suvning qonga qayta so'rilishini kuchaytirib, siydik hajmini qisqartiradi."
  },
  {
    question: "O'simliklarda suvning ildizdan barglargacha bo'lgan masofaga harakatlanishini ta'minlovchi asosiy hayotiy kuchlar qaysilar?",
    options: ["Ildiz bosimi va barglarning transpiratsiya (so'ruvchi) kuchi", "Faqat quyosh nuri", "Faqat tuproq harorati", "Faqat qobig'ining qisqarishi"],
    answer: 0,
    explanation: "Ildiz bosimi pastdan siqib chiqarsa, transpiratsiya kuchi yuqoridan tortib, suvning ksilema bo'ylab uzluksiz oqishini ta'minlaydi."
  },
  {
    question: "Odamda limfa tizimining asosiy vazifalaridan biri bo'lgan himoya funksiyasi qaysi hujayralar orqali amalga oshiriladi?",
    options: ["Limfotsitlar (oq qon tanachalari)", "Eritrotsitlar", "Trombotsitlar", "Albuminlar"],
    answer: 0,
    explanation: "Limfa tugunlarida yetiladigan limfotsitlar organizmga tushgan mikroblarni zararsizlantirib, antitelolar hosil qiladi."
  },
  {
    question: "Evolyutsiya nazariyasida bir xil vazifani bajaruvchi, lekin kelib chiqishi turlicha bo'lgan organlar qanday ataladi?",
    options: ["Analog organlar", "Homolog organlar", "Rudimentlar", "Atavizmlar"],
    answer: 0,
    explanation: "Kelib chiqishi har xil, ammo bir xil funksiyani bajaruvchi organlar analog organlar deb ataladi (masalan, qush va hasharot qanotlari)."
  },
  {
    question: "Odam organizmida oshqozon shirasining tarkibiy qismi bo'lgan va oqsillarni parchalovchi pepsin fermenti faollashishi uchun qaysi kislota zarur?",
    options: ["Xlorid kislota (HCl)", "Sulfat kislota", "Fosfat kislota", "Sut kislota"],
    answer: 0,
    explanation: "Me'da bezlari ajratadigan xlorid kislota muhitni kislotali qilib, pepsinogenni faol pepsinga aylantiradi."
  },
  {
    question: "Biogeosenozda ozuqa zanjirining boshlang'ich pog'onasini egallovchi produtsentlar kimlar?",
    options: ["Yashil o'simliklar va suvo'tlar (avtotroflar)", "Yirtqich hayvonlar", "Zamburug'lar", "Bakteriyalar"],
    answer: 0,
    explanation: "Produtsentlar quyosh energiyasi yordamida noorganik moddalardan organik modda hosil qiluvchi o'simliklardir."
  },
  {
    question: "O'simliklarda hujayraning qaysi organoidi fotosintez jarayonini amalga oshiradi?",
    options: ["Xloroplast", "Mitoxondriya", "Lizosoma", "Ribosoma"],
    answer: 0,
    explanation: "Xloroplastlar tarkibidagi xlorofill yordamida quyosh energiyasini yutib, suv va karbonat angidridni organik moddaga aylantiradi."
  },
  {
    question: "Odamda qon guruhlari sistemasida universal donor sifatida qaysi guruh e'tirof etiladi?",
    options: ["I (O) guruhi", "II (A) guruhi", "III (B) guruhi", "IV (AB) guruhi"],
    answer: 0,
    explanation: "I (O) qon guruhi eritrotsitlarida aglutinogenlar bo'lmagani uchun uni boshqa barcha guruhdagi bemorlarga quyish mumkin."
  },
  {
    question: "Genetika fanida turli allel genlarning o'zaro ta'siri natijasida yangi belgining paydo bo'lishi qanday ataladi?",
    options: ["Komplementarlik", "Epistaz", "Polimeriya", "Mutatsiya"],
    answer: 0,
    explanation: "Komplementarlikda ikki xil noallel genlar birgalikda ta'sir ko'rsatib, alohida-alohida bo'lmagan yangi belgini yuzaga keltiradi."
  },
  {
    question: "Hujayraning energetik almashinuvida kislorodli (aerob) bosqich qayerda va qanday kechadi?",
    options: ["Mitoxondriya matritsasi va kristalarida, ATF va CO2 hosil bo'ladi", "Sitoplazmada glikoliz kabi", "Yadro ichida DNKda", "Ribosomada oqsil kabi"],
    answer: 0,
    explanation: "Kislorodli bosqich mitoxondriyalarda kechib, pirat kislotani oxirigacha parchalaydi va ko'p miqdorda ATF hosil qiladi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismida eshitish, ko'rish, ta'm bilish va hid bilish sezgilarining oliy qabul qilish zonalari joylashgan?",
    options: ["Katta yarim sharlar po'stlog'i (korteks)", "Uzunchoq miya", "Miyacha", "Orqa miya"],
    answer: 0,
    explanation: "Katta yarim sharlar po'stlog'ida barcha sezgi organlaridan kelgan axborotlarni tahlil qiluvchi oliy markazlar joylashgan."
  },
  {
    question: "O'simliklarda ikki marta urug'lanish jarayonida chang nayidan kelgan ikkita spermiydan biri tuxumhujayra bilan qo'shilsa, ikkinchisi nima bilan qo'shiladi?",
    options: ["Markaziy hujayra (endosperm) bilan", "Kosa yaproq bilan", "Ildiz uchi bilan", "Faqat po'stloq bilan"],
    answer: 0,
    explanation: "Navashin kashf etgan ikki marta urug'lanishda bir spermiy tuxumhujayra (zigota) bilan, ikkinchisi esa markaziy hujayra bilan qo'shilib endosperm hosil qiladi."
  },
  {
    question: "Odam organizmida qon bosimini va yurak urish tezligini oshiruvchi buyrak usti bezi gormoni qaysi?",
    options: ["Adrenalin (va noradrenalin)", "Insulin", "Tiroksin", "Vasopressin"],
    answer: 0,
    explanation: "Adrenalin stress yoki qo'rquv paytida buyrak usti bezi miya qismidan ajralib, yurak urishini tezlashtiradi va qon bosimini ko'taradi."
  },
  {
    question: "Evolyutsiya nazariyasida bir xil umumiy ajdoddan kelib chiqqan organlarning tuzilishi o'xshash, lekin vazifasi turlicha bo'lishi nima deb ataladi?",
    options: ["Homolog organlar", "Analog organlar", "Rudimentlar", "Atavizmlar"],
    answer: 0,
    explanation: "Homolog organlar kelib chiqishi bir xil, tuzilishi o'xshash, biroq bajaradigan ishi turlicha bo'lgan organlardir (masalan, qush qanoti va odam qo'li)."
  },
  {
    question: "Odamda terining asosiy funksiyalaridan biri bo'lgan termoregulyatsiya qaysi jarayon orqali boshqariladi?",
    options: ["Ter bezlari orqali ter ajratish va qon tomirlarining kengayib-torayishi", "Faqat sochlarning o'sishi bilan", "Faqat tirnoqlar orqali", "Faqat yog' bezlari orqali"],
    answer: 0,
    explanation: "Terlash va teri osti kapilyarlarining kengayib issiqlik chiqarishi tana haroratini doimiy bir maromda ushlab turadi."
  },
  {
    question: "Genetika fanida DNK molekulasining qo'sh spiral tuzilishini va uning tuzilish qoidalarini aniqlagan olimlar kimlar?",
    options: ["J. Uotson va F. Krik", "G. Mendel va T. Morgan", "C. Darvin va J. Lamark", "R. Huk va Livenhuk"],
    answer: 0,
    explanation: "1953-yilda Uotson va Krik DNK ning fazoviy qo'sh spiral modelini yaratib, biologiyada ulkan kashfiyot qildilar."
  },

  // --- 10-qism (226-250) ---
  {
    question: "Odam organizmida qon aylanishining katta doirasi qayerdan boshlanib qayerda tugaydi?",
    options: ["Chap qorincha — O'ng bo'lmacha", "O'ng qorincha — Chap bo'lmacha", "Chap qorincha — Chap bo'lmacha", "O'ng qorincha — O'ng bo'lmacha"],
    answer: 0,
    explanation: "Katta qon aylanish doirasi chap qorinchadan chiqib, barcha organlarni aylanib o'tgach, o'ng bo'lmachaga kelib tugaydi."
  },
  {
    question: "O'simliklarda barglarning kuzda to'kilishidan oldin sodir bo'ladigan asosiy biokimyoviy o'zgarish nima?",
    options: ["Xlorofill parchalanib, barg pigmentlari o'zgaradi va ajratuvchi qatlam hosil bo'ladi", "Barglar o'sishdan to'xtab suvni ko'paytiradi", "Faqat ildizga qarab oqsil oqadi", "Fotosintez kuchayadi"],
    answer: 0,
    explanation: "Kuzda xlorofill yemirilishi natijasida boshqa pigmentlar (karotin, xantofill) ko'rinib qoladi va ajratuvchi qatlam hosil bo'lib barg uziladi."
  },
  {
    question: "Molekulyar biologiyada mRNK molekulasidagi uchlik nukleotidlar (kodonlar) soni 300 ta bo'lsa, uning asosida sintezlanadigan oqsil molekulasidagi aminokislotalar soni nechta bo'ladi?",
    options: ["300 ta", "100 ta", "900 ta", "150 ta"],
    answer: 0,
    explanation: "Har bir kodon bitta aminokislotani kodlaydi, shuning uchun 300 ta kodon 300 ta aminokislotadan iborat oqsilni hosil qiladi (stop-kodonlarni hisobga olmaganda asosiy qism)."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi uyqu va uyg'onish siklini, shuningdek asosiy biologik ritmlarni boshqaradi?",
    options: ["Oraliq miya (gipotalamus va epifiz)", "Miyacha", "Uzunchoq miya", "Peshona bo'lagi"],
    answer: 0,
    explanation: "Epifiz va gipotalamus (oraliq miya qismlari) melatonin va boshqa moddalar orqali biologik ritmlar hamda uyquni boshqaradi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada yangi genotiplar va kombinatsiyalarning hosil bo'lishining asosiy manbalaridan biri nima?",
    options: ["Jinsiy ko'payish va krossingover", "Faqat mitoz", "Faqat hujayraning o'lchami", "Fotosintez"],
    answer: 0,
    explanation: "Jinsiy ko'payish jarayonida xromosomalarning erkin tarqalishi va krossingover kombinativ o'zgaruvchanlikni keltirib chiqaradi."
  },
  {
    question: "O'simliklarda ildizning eniga o'sishini ta'minlovchi yon meristema (kambiy) qaysi to'qimalar orasida joylashgan?",
    options: ["Ksilema va floema orasida", "Epidermis ustida", "Faqat ildiz qalpog'ida", "Faqat barg to'qimasida"],
    answer: 0,
    explanation: "Kambiy ksilema (yog'ochlik) va floema (loks) o'tkazuvchi to'qimalari orasida joylashgan bo'lib, eniga o'sishni ta'minlaydi."
  },
  {
    question: "Odam organizmida qon ivishining buzilishi va irsiylanuvchi kasallik — daltonizm (rang ajratolmaslik) qanday irsiylanadi?",
    options: ["X-xromosomaga birikkan retsessiv belgisi sifatida", "Y-xromosomaga dominant tarzda", "Autosomada kodominant tarzda", "Mitoxondrial yo'l bilan"],
    answer: 0,
    explanation: "Daltonizm ham gemofiliya kabi X-xromosomaga birikkan retsessiv kasallik bo'lib, erkaklarda tezroq namoyon bo'ladi."
  },
  {
    question: "Genetika fanida digibrid chatishtirishda ota-onalar ikkala belgi bo'yicha geterozigota (AaBb) bo'lsa, F2 avlodda nechta genotipik sinf (variant) hosil bo'ladi?",
    options: ["9 xil genotipik sinf", "4 xil", "16 xil", "2 xil"],
    answer: 0,
    explanation: "Mendel qoidasiga ko'ra digibrid chatishtirishda F2 da genotip bo'yicha 9 xil turdagi genotipik kombinatsiyalar yuzaga keladi."
  },
  {
    question: "Hujayraning bo'linish jarayonida xromosomalarning ekvator bo'ylab qator bo'lib yig'ilishi qaysi fazada sodir bo'ladi?",
    options: ["Metafaza", "Profaza", "Anafaza", "Telofaza"],
    answer: 0,
    explanation: "Metafazada xromosomalar maksimal darajada spirallashib, hujayraning qoq o'rtasida (ekvatorda) metafaza plastinkasini hosil qiladi."
  },
  {
    question: "Odamda buyrak usti bezining qobiq qismidan ishlab chiqariladigan va organizmning stressga chidamliligini oshiruvchi asosiy glyukokortikoid gormon qaysi?",
    options: ["Cortizol (kortizol)", "Insulin", "Adrenalin", "Testosteron"],
    answer: 0,
    explanation: "Kortizol stress gormoni bo'lib, uglerod va oqsil almashinuvini boshqaradi hamda organizmning yallig'lanishga qarshi kurashishiga yordam beradi."
  },
  {
    question: "O'simliklarda barglarning ustki qismini qoplab turuvchi va suv bug'lanishidan saqlovchi yupqa shaffof qatlam qanday ataladi?",
    options: ["Kutikula (mum qatlami)", "Kambiy", "Probka", "Ksilema"],
    answer: 0,
    explanation: "Epidermis ustidan ajralib chiquvchi mumsimon modda — kutikula barglarni ortiqcha transpiratsiyadan himoya qiladi."
  },
  {
    question: "Odam organizmida limfa tugunlari qanday asosiy biologik vazifani bajaradi?",
    options: ["Biologik filtr vazifasini bajarib, mikroblarni ushlab qoladi va limfotsitlar ishlab chiqaradi", "Qonni qizdiradi", "Yog'larni to'liq parchalaydi", "Faqat kislorod tashiydi"],
    answer: 0,
    explanation: "Limfa tugunlari limfani filtrlash va organizm immunitetini ta'minlashda asosiy to'siq hisoblanadi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada mutatsiyalar natijasida yuzaga kelgan yangi belgilarning saqlanib qolishini ta'minlovchi asosiy omil nima?",
    options: ["Tabiiy tanlanish", "Faqat tasodifiy o'lim", "Mitoz bo'linish", "Sun'iy yoritish"],
    answer: 0,
    explanation: "Tabiiy tanlanish eng muvaffaqiyatli mutatsiyaga ega individlarni tanlab olib, ularning keyingi avlodga o'tishini ta'minlaydi."
  },
  {
    question: "Odamda me'da shirasi tarkibidagi asosiy ferment bo'lgan pepsin qanday sharoitda faol ishlaydi?",
    options: ["Faqat kislotali muhitda (xlorid kislota mavjudligida)", "Faqat ishqoriy muhitda", "Faqat neytral suvda", "Muhitning ahamiyati yo'q"],
    answer: 0,
    explanation: "Pepsin faqat me'dadagi xlorid kislota yaratgan kislotali muhitdagina oqsillarni parchalash xususiyatiga ega bo'ladi."
  },
  {
    question: "Biogeosenozda ozuqa zanjirining ikkinchi pog'onasini (birinchi tartibli konsumentlarni) odatda qanday organizmlar tashkil etadi?",
    options: ["O'txo'r hayvonlar (herbivorlar)", "Yirtqichlar", "Yashil o'simliklar", "Bakteriyalar"],
    answer: 0,
    explanation: "O'simliklar bilan oziqlanadigan o'txo'r hayvonlar ozuqa zanjirida produtsentlardan keyingi birinchi tartibli konsumentlardir."
  },
  {
    question: "O'simliklarda suvning ildizdan so'rilishini ta'minlovchi asosiy fizik hodisa qaysi?",
    options: ["Osmos va diffuziya", "Magnit tortishish", "Faqat mexanik bosim", "Elektr toki"],
    answer: 0,
    explanation: "Ildiz tukchalaridagi hujayra shirasining konsentratsiyasi yuqori bo'lgani uchun tuproqdagi suv osmos qonuniga ko'ra ichkariga o'tadi."
  },
  {
    question: "Odamda qon guruhlarini aniqlashda ABO tizimi bo'yicha eritrotsitlarda aglyutinogenlar va zardobda aglyutininlar qanday xususiyatga ega?",
    options: ["Bir xil nomdagi aglyutinogen va aglyutinin birga bo'lsa qon ivib (aglyutinatsiyalanib) qoladi", "Ular hech qachon o'zaro ta'sir qilmaydi", "Qonni suyultiradi", "Faqat kislorod hosil qiladi"],
    answer: 0,
    explanation: "A va alfa yoki B va beta birga uchrashsa aglyutinatsiya (cho'kma hosil bo'lib yopishish) yuz beradi."
  },
  {
    question: "Genetika fanida Morgan qoidasiga ko'ra, xromosomada birikkan genlarning bir-biridan krossingover natijasida ajralib ketish ehtimoli nimaga bog'liq?",
    options: ["Genlar orasidagi masofaga", "Faqat xromosomaning rangi bilan", "Hujayraning haroratiga", "Faqat yadro o'lchamiga"],
    answer: 0,
    explanation: "Genlar orasidagi masofa qancha uzoq bo'lsa, ular orasida krossingover sodir bo'lish ehtimoli shunchalik yuqori bo'ladi."
  },
  {
    question: "Hujayraning energetik almashinuvida kislorodsiz bosqichda 1 molekula glyukozadan qancha miqdorda ATF hosil bo'ladi?",
    options: ["2 ta ATF", "36 ta ATF", "38 ta ATF", "0 ta ATF"],
    answer: 0,
    explanation: "Glikoliz (kislorodsiz bosqich) natijasida 2 molekula ATF hosil bo'lib, asosiy energiya kislorodli bosqichda ajralib chiqadi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi nutqning motor markazini (so'zlash qobiliyatini) o'z ichiga oladi?",
    options: ["Peshona bo'lagi (Broka markazi)", "Ensa bo'lagi", "Miyacha", "Uzunchoq miya"],
    answer: 0,
    explanation: "Katta yarim sharlar peshona bo'lagining quyi qismida nutq harakatlarini boshqaruvchi Broka markazi joylashgan."
  },
  {
    question: "O'simliklarda ikki marta urug'lanish jarayonini kashf etgan buyuk rus olimi kim?",
    options: ["S.G. Navashin", "C. Darvin", "G. Mendel", "I. Pavlov"],
    answer: 0,
    explanation: "S.G. Navashin 1898-yilda yopiq urug'li o'simliklarda ikki marta urug'lanish hodisasini ilmiy kashf etgan."
  },
  {
    question: "Odam organizmida qon bosimini doimiy ushlab turishda va qon tomirlarini toraytirishda qaysi gormon yoki modda muhim rol o'ynaydi?",
    options: ["Adrenalin va vazopressin", "Faqat insulin", "Faqat safro", "Faqat melatonin"],
    answer: 0,
    explanation: "Adrenalin va vazopressin qon tomirlarini toraytirib, arterial qon bosimining ko'tarilishini ta'minlaydi."
  },
  {
    question: "Evolyutsiya nazariyasida turlarning kelib chiqishi va ularning o'zgarishini tushuntiruvchi ilk ilmiy ta'limotni kim yaratgan?",
    options: ["Jan Batist Lamark", "Charlz Darvin", "Gregor Mendel", "Lui Paster"],
    answer: 0,
    explanation: "J.B. Lamark o'zining evolyutsion nazariyasida organizmlarning tashqi muhit ta'sirida o'zgarishi va irsiylanishini birinchi bo'lib ilgari surgan."
  },
  {
    question: "Odamda terining ostki qavati qanday nomlanadi va u qanday vazifani bajaradi?",
    options: ["Yog' qatlami (podkoktelnaya kletchatka) — issiqlikni saqlash va zaxira ozuqa to'plash", "Epidermis — faqat suv o'tkazish", "Dermis — faqat tirnoq o'stirish", "Faqat suyak hosil qilish"],
    answer: 0,
    explanation: "Teri osti yog' qatlami organizmni sovqotishdan saqlaydi va energiyani zaxira holatida yig'adi."
  },
  {
    question: "Genetika fanida irsiy axborotni saqlovchi va uni nasldan-naslga o'tkazuvchi asosiy molekula qaysi?",
    options: ["DNK (dezoksiribonuklein kislota)", "RNK", "Atsetilxolin", "Glyukogen"],
    answer: 0,
    explanation: "DNK barcha tirik organizmlarda irsiy axborotni saqlash va nusxalash vazifasini bajaruvchi asosiy makromolekuladir."
  },

  // --- 11-qism (251-275) ---
  {
    question: "Odam organizmida buyrak usti bezining miya qismidan ishlab chiqariladigan va shoshilinch holatlarda qonga chiqariladigan asosiy gormonlar qaysilar?",
    options: ["Adrenalin va noradrenalin", "Insulin va glyukagon", "Tiroksin va kaltsitonin", "Testosteron va estrogen"],
    answer: 0,
    explanation: "Buyrak usti bezining miya qismi adrenalin va noradrenalin ishlab chiqarib, organizmni stress va xavf-xatar holatlariga tezkor tayyorlaydi."
  },
  {
    question: "O'simliklarda barglar orqali ortiqcha suvning bug'lanishi qanday ataladi?",
    options: ["Transpiratsiya", "Fotosintez", "Glikoliz", "Osmos"],
    answer: 0,
    explanation: "Transpiratsiya — o'simlik barglaridagi og'izchalar orqali suvning bug'lanish jarayoni bo'lib, u sovish va suvni yuqoriga tortishda yordam beradi."
  },
  {
    question: "Molekulyar biologiyada mRNK dagi genetik kodning uchlik (triplet) xususiyati nimani anglatadi?",
    options: ["Har bir aminokislota ketma-ket kelgan 3 ta nukleotid tomonidan kodlanishini", "DNK ning 3 ta zanjirli bo'lishini", "Oqsillarning faqat 3 xil bo'lishini", "Ribosomaning 3 qismdan iboratligini"],
    answer: 0,
    explanation: "Genetik kod uchlik (triplet) tuzilishga ega bo'lib, 3 ta nukleotid birgalikda bitta aminokislotani belgilaydi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi yurak-qon tomir faoliyati va nafas olishning avtomatik markazlarini saqlaydi?",
    options: ["Uzunchoq miya", "Miyacha", "Peshona bo'lagi", "Oraliq miya"],
    answer: 0,
    explanation: "Uzunchoq miyada hayot uchun muhim bo'lgan nafas olish, yurak urishi, yutish va qusish reflekslarining markazlari joylashgan."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada genlar chastotasining tasodifiy omillar tufayli o'zgarishi qanday nomlanadi?",
    options: ["Genlar dreyfi", "Mutatsiya", "Krossingover", "Transkripsiya"],
    answer: 0,
    explanation: "Genlar dreyfi — populyatsiyada tasodifiy voqealar tufayli ayrim allellarning chastotasi o'zgarib ketish hodisasidir."
  },
  {
    question: "O'simliklarda ildiz qismidan so'rilgan suv va mineral tuzlar poya bo'ylab qaysi to'qima orqali harakatlanadi?",
    options: ["Ksilema (yog'ochlik)", "Floema (loks)", "Kambiy", "Epidermis"],
    answer: 0,
    explanation: "Ksilema o'simlikning suv va minerallarni ildizdan barglarga o'tkazuvchi asosiy o'tkazuvchi naylar tizimidir."
  },
  {
    question: "Odamda qon guruhlari sistemasida IV (AB) qon guruhiga ega bo'lgan shaxslarning zardobida qanday aglyutininlar mavjud?",
    options: ["Aglyutininlar umuman yo'q", "Faqat alfa", "Faqat beta", "Ham alfa, ham beta"],
    answer: 0,
    explanation: "IV qon guruhida eritrotsitlarda A va B aglyutinogenlar bo'lib, zardobda aglyutininlar (alfa va beta) bo'lmaydi."
  },
  {
    question: "Genetika fanida ota-ona organizmning irsiy belgilari to'plami nima deb ataladi?",
    options: ["Genotip", "Fenotip", "Kariotip", "Genom"],
    answer: 0,
    explanation: "Genotip — organizmdagi barcha genlarning yig'indisi bo'lib, u tashqi muhit bilan birgalikda fenotipni shakllantiradi."
  },
  {
    question: "Hujayraning mitoz bo'linishida xromosomalar qutblarga tarqalib bo'lgach, ularning atrofida yadro qobig'ining qayta shakllanishi qaysi fazada yuz beradi?",
    options: ["Telofaza", "Profaza", "Metafaza", "Anafaza"],
    answer: 0,
    explanation: "Telofaza mitozning oxirgi bosqichi bo'lib, bunda xromosomalar cho'zilib, yadro qobig'i va yadrochalar qaytadan hosil bo'ladi."
  },
  {
    question: "Odam organizmida qon shakarini oshiruvchi va jigardagi glikogenni glyukozaga aylantiruvchi gormon qaysi?",
    options: ["Glyukagon", "Insulin", "Adrenalin", "Testosteron"],
    answer: 0,
    explanation: "Oshqozon osti bezining alfa-hujayralari ishlab chiqaradigan glyukagon gormoni qondagi glyukoza kamayganda uni oshiradi."
  },
  {
    question: "O'simliklarda generativ organ hisoblangan gulning o'zak qismlari va barglari biriktirilgan kengaygan qismi qanday ataladi?",
    options: ["Gul o'rni", "Tuguncha", "Changchi", "Urug'chi"],
    answer: 0,
    explanation: "Gul o'rni — poyaning kengaygan qismi bo'lib, uning ustida kosa yaproqlar, toj yaproqlar, changchi va urug'chilar joylashadi."
  },
  {
    question: "Odamda limfa sistemasining eng yirik tomiri qayerga quyiladi?",
    options: ["Ko'krak limfa yo'li orqali ko'krak osti venalariga (qon tomirga)", "To'g'ridan-to'g'ri yurak qorinchasiga", "Ingichka ichakka", "Buyrak jomiga"],
    answer: 0,
    explanation: "Limfa suyuqligi oxir-oqibat yirik limfa yo'llari orqali bo'yin va ko'krak qafasidagi yirik qon venalariga qo'shiladi."
  },
  {
    question: "Evolyutsiya nazariyasida turlarning paydo bo'lishida vaqtinchalik yoki makoniy to'siqlar tufayli yuzaga keladigan izolyatsiya turi nima deyiladi?",
    options: ["Geografik izolyatsiya", "Ekologik izolyatsiya", "Genetik izolyatsiya", "Fiziologik izolyatsiya"],
    answer: 0,
    explanation: "Geografik izolyatsiya turlar o'rtasidagi erkin chatishtirishni to'xtatuvchi tabiiy to'siqlar (daryo, tog') orqali amalga oshadi."
  },
  {
    question: "Odamda oziq moddalarni parchalovchi fermentlar ishlab chiqaruvchi va ovqat hazm qilishda eng yirik bez hisoblangan organ qaysi?",
    options: ["Jigar", "Oshqozon", "Buyrak", "Taloq"],
    answer: 0,
    explanation: "Jigar organizmdagi eng yirik bez bo'lib, safro ishlab chiqaradi va moddalar almashinuvida muhim markaziy rol o'ynaydi."
  },
  {
    question: "Biogeosenozda trofik darajalar bo'yicha yuqori pog'onaga ko'tarilgan sari umumiy biomassa va energiya miqdori qanday o'zgaradi?",
    options: ["Keskin kamayib boradi", "O'zgarmas qoladi", "Ortib boradi", "Avval ko'payib, keyin yo'qoladi"],
    answer: 0,
    explanation: "Ekologik piramida qoidasiga ko'ra, har bir yuqori pog'onaga o'tganda energiya va biomassa 90% atrofida kamayib boradi."
  },
  {
    question: "O'simliklarda barglar va poyalarning qoplovchi to'qimasi shikastlanganda uning o'rnini qoplaydigan va qalinlashtiradigan ikkilamchi qoplovchi to'qima qaysi?",
    options: ["Probka (periderm)", "Epidermis", "Kambiy", "Ksilema"],
    answer: 0,
    explanation: "O'simliklar yo'g'onlashganda epidermis o'rnini probka (periderm) qoplovchi to'qimasi egallaydi."
  },
  {
    question: "Odamda qon guruhlari va Rezus (Rh) faktorning mos kelmasligi homiladorlikda qanday holatni keltirib chiqarishi mumkin?",
    options: ["Rezus-konflikt (gemolitik kasallik)", "Faqat qon bosimi oshishi", "Faqat suyak yemirilishi", "Hech qanday ta'sir ko'rsatmaydi"],
    answer: 0,
    explanation: "Ona rezus-manfiy, homila rezus-musbat bo'lganda rezus-konflikt yuzaga kelib, gemolitik kasallikka sabab bo'lishi mumkin."
  },
  {
    question: "Genetika fanida bir xil belgining muqobil shakllarini (masalan, sariq yoki yashil rangni) belgilovchi genlar qanday ataladi?",
    options: ["Allel genlar", "Nonallel genlar", "Polimer genlar", "Stop-kodonlar"],
    answer: 0,
    explanation: "Allel genlar gomolog xromosomalarning bir xil uchastkalarida joylashib, bitta belgining turli ko'rinishlarini ifodalaydi."
  },
  {
    question: "Hujayraning energetik almashinuvida glyukozaning kislorodsiz parchalanishi (glyoliz) qaysi organoidda yoki joyda ketadi?",
    options: ["Sitoplazmada", "Mitoxondriya kristalarida", "Yadro ichida", "Ribosomada"],
    answer: 0,
    explanation: "Glikoliz jarayoni sitoplazmada kechib, kislorod talab etmagan holda 2 ta ATF hosil qiladi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi vizual (ko'rish) axborotlarni qabul qilish va qayta ishlashning asosiy markazi hisoblanadi?",
    options: ["Ensa bo'lagi", "Peshona bo'lagi", "Chakka bo'lagi", "Miyacha"],
    answer: 0,
    explanation: "Bosh miya yarim sharlarining ensa bo'lagida ko'rish sezgi zonalari va tasvirlarni tahlil qilish markazlari joylashgan."
  },
  {
    question: "O'simliklarda urug'ning unib chiqishi uchun zarur bo'lgan asosiy uchta tashqi omil qaysilar?",
    options: ["Suv, kislorod va qulay harorat", "Faqat quyosh nuri va azot", "Faqat quruqlik va muzlash", "Faqat karbonat angidrid"],
    answer: 0,
    explanation: "Urug' tinch holatdan o'sishga o'tishi uchun suv, nafas olish uchun kislorod va ma'lum darajadagi harorat kerak bo'ladi."
  },
  {
    question: "Odam organizmida qon bosimini va organizmda suv-tuz almashinuvini boshqaruvchi asosiy mineralokortikoid gormon qaysi?",
    options: ["Aldosteron", "Kortizol", "Insulin", "Adrenalin"],
    answer: 0,
    explanation: "Buyrak usti bezining qobiq qismidan chiqadigan aldosteron natriy ionlarini ushlab qolib, suv balansini va qon bosimini rostlaydi."
  },
  {
    question: "Evolyutsiya nazariyasida tirik tabiatning tarixiy taraqqiyoti davomida sodir bo'ladigan umumiy murakkablashuv va taraqqiyot qanday ataladi?",
    options: ["Biologik progress", "Biologik regress", "Degeneratsiya", "Atavizm"],
    answer: 0,
    explanation: "Biologik progress turning qulashi emas, aksincha sonining ortishi, areolining kengayishi va progressiv rivojlanishidir."
  },
  {
    question: "Odamda terining sezuvchanlik funksiyasini ta'minlovchi retseptorlar asosan terining qaysi qatlamida joylashgan?",
    options: ["Dermis (chin teri qatlami)", "Epidermisning eng ustki qismi", "Faqat yog' qatlamida", "Faqat soch tolalarida"],
    answer: 0,
    explanation: "Dermis (chin teri) qatlamida bosim, og'riq, harorat va teginishni sezuvchi ko'plab nerv oxirlari (retseptorlar) joylashgan."
  },
  {
    question: "Genetika fanida xromosomalarning tuzilishi buzilishi (masalan, bo'lakcha uzilishi, teskari aylanishi yoki almashinuvi) bilan bog'liq mutatsiyalar qanday ataladi?",
    options: ["Xromosomal mutatsiyalar (aberatsiyalar)", "Genli mutatsiyalar", "Genomli mutatsiyalar", "Modifikatsiyalar"],
    answer: 0,
    explanation: "Xromosomal mutatsiyalar xromosomaning tuzilishi o'zgarishi (delyatsiya, inversiya, translyokatsiya) bilan tavsiflanadi."
  },

  // --- 12-qism (276-300) ---
  {
    question: "Odam organizmida erkak jinsiy gormoni bo'lgan testosteron asosan qayerda ishlab chiqariladi?",
    options: ["Urug'donlarda (testikullarda)", "Prostata bezida", "Buyrak usti bezida", "Gipofizda"],
    answer: 0,
    explanation: "Testosteron asosan urug'donlarning Leydig hujayralari tomonidan ishlab chiqarilib, ikkilamchi jinsiy belgilarni boshqaradi."
  },
  {
    question: "O'simliklarda barglar va poyalarning yuzasini qoplab turuvchi tirik hujayrali asosiy qoplovchi to'qima qanday ataladi?",
    options: ["Epidermis", "Kambiy", "Probka", "Ksilema"],
    answer: 0,
    explanation: "Epidermis — barg va yosh novdalarni tashqi muhitdan o'rab turuvchi, gaz almashinuvi va transpiratsiyani tartibga soluvchi asosiy qoplovchi to'qima."
  },
  {
    question: "Molekulyar biologiyada mRNK molekulasidagi irsiy axborotni oqsil ketma-ketligiga tarjima qilish jarayoni qanday nomlanadi?",
    options: ["Translyatsiya", "Transkripsiya", "Replikatsiya", "Mutatsiya"],
    answer: 0,
    explanation: "Translyatsiya — ribosomada mRNK kodonlariga mos ravishda aminokislotalarni oqsil zanjiriga yig'ish jarayonidir."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi ko'z qorachig'ining kengayib-torayishini va muskul tonusini boshqaruvchi refleks markazlarini o'z ichiga oladi?",
    options: ["O'rta miya", "Uzunchoq miya", "Miyacha", "Peshona bo'lagi"],
    answer: 0,
    explanation: "O'rta miya ko'z qorachig'ining yorug'likka javobini, ko'rish va eshitishning yo'naltiruvchi reflekslarini ta'minlaydi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyalar o'rtasida genlar oqimini ta'minlovchi va yangi genetik xilma-xillikni olib keluvchi omil nima?",
    options: ["Migratsiya (individlarning ko'chishi va qo'shilishi)", "Faqat mitoz", "Faqat tasodifiy ofat", "Mutatsiyaning to'xtashi"],
    answer: 0,
    explanation: "Migratsiya natijasida bir populyatsiyadan boshqasiga individlar o'tib, genlar almashinuvini (genlar oqimini) yuzaga keltiradi."
  },
  {
    question: "O'simliklarda ildizning tuproqqa kirib borishini ta'minlovchi va uni shikastlanishdan asrovchi qism qanday nomlanadi?",
    options: ["Ildiz qalpog'i (chexlik)", "Kambiy halqasi", "Ildiz tukchalari", "O'tkazuvchi zona"],
    answer: 0,
    explanation: "Ildiz qalpog'i ildiz uchidagi nozik hujayralarni tuproq zarralari bilan to'qnashganda mexanik shikastlanishdan himoya qiladi."
  },
  {
    question: "Odamda qon zardobida antitelolar (aglyutininlar) bo'lmagan va universal retsipient hisoblangan qon guruhi qaysi?",
    options: ["IV (AB) qon guruhi", "I (O) qon guruhi", "II (A) qon guruhi", "III (B) qon guruhi"],
    answer: 0,
    explanation: "IV qon guruhi zardobida aglyutininlar yo'qligi sababli u boshqa barcha guruhdagi qonlarni qabul qila oladi."
  },
  {
    question: "Genetika fanida turli belgilarga ega ota-onalarni chatishtirganda F1 avlodda faqat bitta dominant belgining yuzaga chiqishi qanday ataladi?",
    options: ["Uniformlik (bir xillik) qonuni — Mendelning 1-qonuni", "Ajralish qonuni", "Kodominantlik", "Epistaz"],
    answer: 0,
    explanation: "Mendelning birinchi qonuniga ko'ra, toza liniyadagi ota-onalarni chatishtirganda birinchi avlod bir xil (uniform) bo'lib chiqadi."
  },
  {
    question: "Hujayraning mitoz bo'linishida xromatidlarning bir-biridan ajralib, qarama-qarshi qutblarga qarab harakatlanadigan fazasi qaysi?",
    options: ["Anafaza", "Metafaza", "Profaza", "Telofaza"],
    answer: 0,
    explanation: "Anafazada opa-singil xromatidlar bo'linib, mustaqil xromosomalarga aylanadi va duk nillari yordamida qutblarga tortiladi."
  },
  {
    question: "Odam organizmida suv va tuz almashinuvini boshqaruvchi hamda buyrak naychalarida suvning qayta so'rilishini kuchaytiruvchi gormon qaysi?",
    options: ["Vasopressin (antidiuretik gormon - ADG)", "Insulin", "Testosteron", "Adrenalin"],
    answer: 0,
    explanation: "Gipofiz tomonidan ajratiladigan vasopressin buyrakda suvni ushlab qolib, siydik miqdorini kamaytiradi."
  },
  {
    question: "O'simliklarda vegetativ ko'payish turlaridan biri bo'lib, o'simlik novdasini tuproqqa ko'mib ildiz ottrish usuli nima deb ataladi?",
    options: ["Parishin qilish", "Qalamcha qilish", "Payvand qilish", "Urug' ekish"],
    answer: 0,
    explanation: "Parishin qilish usulida novda ona o'simlikdan ajratilmagan holda tuproqqa egib ko'miladi va ildiz otgach kesib olinadi."
  },
  {
    question: "Odamda qon aylanishining kichik doirasi qayerdan boshlanib qayerda tugaydi?",
    options: ["O'ng qorincha — Chap bo'lmacha", "Chap qorincha — O'ng bo'lmacha", "Chap qorincha — Chap bo'lmacha", "O'ng qorincha — O'ng bo'lmacha"],
    answer: 0,
    explanation: "Kichik qon aylanish doirasi o'ng qorinchadan chiqib, o'pka kapilyarlarida kislorodga boyib, chap bo'lmachaga kelib tugaydi."
  },
  {
    question: "Evolyutsiya nazariyasida populyatsiyada genlar chastotasining mutlaqo tasodifiy omillar ta'sirida o'zgarishi qanday ataladi?",
    options: ["Genlar dreyfi", "Tabiiy tanlanish", "Krossingover", "Transkripsiya"],
    answer: 0,
    explanation: "Genlar dreyfi tasodifiy omillar natijasida allellar chastotasining avloddan-avlodga keskin tebranishidir."
  },
  {
    question: "Odam organizmida oqsillarni parchalovchi asosiy fermentlar ketma-ket qaysi organlarda ishlaydi?",
    options: ["Me'da (oshqozon) va ingichka ichak", "Faqat og'iz bo'shlig'ida", "Faqat yo'g'on ichakda", "Faqat buyrakda"],
    answer: 0,
    explanation: "Oqsillar dastlab oshqozonda pepsin ta'sirida, so'ngra ingichka ichakda tripsin va peptidazalar yordamida parchanadi."
  },
  {
    question: "Biogeosenozda ozuqa zanjirining barqarorligini ta'minlovchi va o'lik organik qoldiqlarni parchalovchi organizmlar guruhi qanday ataladi?",
    options: ["Redutsentlar (saprofitlar)", "Produtsentlar", "Konsumentlar", "Avtotroflar"],
    answer: 0,
    explanation: "Redutsentlar (bakteriyalar va zamburug'lar) o'lik organik moddalarni noorganik moddalarga aylantirib, moddalar aylanishini yopadi."
  },
  {
    question: "O'simliklarda suvning ildizdan barglarga ko'tarilishida asosiy so'ruvchi kuchni hosil qiluvchi jarayon nima?",
    options: ["Transpiratsiya (barglar orqali suv bug'lanishi)", "Faqat ildiz bosimi", "Kambiyning bo'linishi", "Fotosintez"],
    answer: 0,
    explanation: "Barglardan suvning bug'lanishi (transpiratsiya) yuqoridan so'ruvchi kuchni hosil qilib, suvni ksilema bo'ylab tortib chiqaradi."
  },
  {
    question: "Odamda qon guruhlarini aniqlashda I (O) qon guruhiga ega shaxslar eritrotsitlarida qanday aglyutinogenlar mavjud?",
    options: ["Aglyutinogenlar umuman yo'q", "Faqat A", "Faqat B", "Ham A, ham B"],
    answer: 0,
    explanation: "I (O) qon guruhi eritrotsitlarida A va B aglyutinogenlari bo'lmagani uchun uni universal donor deyishadi."
  },
  {
    question: "Genetika fanida digibrid chatishtirishda F2 avlodda fenotip bo'yicha hosil bo'ladigan klassik ajralish nisbati qanday?",
    options: ["9:3:3:1", "3:1", "1:2:1", "1:1"],
    answer: 0,
    explanation: "Mendelning uchinchi qonuniga ko'ra, ikki juft belgi bo'yicha geterozigotalar chatishtirilganda fenotip bo'yicha 9:3:3:1 nisbat kuzatiladi."
  },
  {
    question: "Hujayraning energetik almashinuvida kislorodli (aerob) bosqich natijasida 1 molekula glyukozadan nechta ATF hosil bo'ladi?",
    options: ["36 yoki 38 ta ATF", "2 ta ATF", "4 ta ATF", "0 ta ATF"],
    answer: 0,
    explanation: "Mitoxondriyadagi to'liq kislorodli parchalanish natijasida jami 36-38 molekula ATF energiyasi ajralib chiqadi."
  },
  {
    question: "Odamda bosh miyaning qaysi qismi muvozanatni saqlash va harakatlarni aniq muvofiqlashtirish uchun mas'ul?",
    options: ["Miyacha", "Uzunchoq miya", "Oraliq miya", "Peshona bo'lagi"],
    answer: 0,
    explanation: "Miyacha mushaklar faoliyatini muvofiqlashtirib, tana muvozanatini boshqarishda asosiy rol o'ynaydi."
  },
  {
    question: "O'simliklarda generative organlar qatoriga qaysilar kiradi?",
    options: ["Gul, meva va urug'", "Ildiz, poya va barg", "Faqat barglar", "Faqat kurtaklar"],
    answer: 0,
    explanation: "Ko'payish vazifasini bajaruvchi gul, meva va urug'lar o'simliklarning generativ organlari hisoblanadi."
  },
  {
    question: "Odam organizmida qon shakarini kamaytiruvchi va glyukozani to'qimalarga o'tkazuvchi yagona gormon qaysi?",
    options: ["Insulin", "Glyukagon", "Adrenalin", "Tiroksin"],
    answer: 0,
    explanation: "Oshqozon osti bezi ishlab chiqaradigan insulin gormoni qondagi ortiqcha glyukozani kamaytirib, organizmni energiya bilan ta'minlaydi."
  },
  {
    question: "Evolyutsiya nazariyasida turli xil ajdodlardan kelib chiqqan, ammo o'xshash vazifani bajaruvchi organlar qanday ataladi?",
    options: ["Analog organlar", "Homolog organlar", "Rudimentlar", "Atavizmlar"],
    answer: 0,
    explanation: "Kelib chiqishi turlicha, lekin vazifasi bir xil bo'lgan organlar analog organlar deyiladi (masalan, qush va hasharot qanotlari)."
  },
  {
    question: "Odamda teri qoplami orqali amalga oshiriladigan asosiy jarayonlardan biri — ter ajratish qanday vazifani bajaradi?",
    options: ["Termoregulyatsiya (tanani sovutish) va ortiqcha tuzlarni chiqarish", "Faqat kislorod yutish", "Faqat oqsil sintez qilish", "Faqat qon hosil qilish"],
    answer: 0,
    explanation: "Ter bezlari orqali suv va ortiqcha tuzlar chiqarilib, tana harorati doimiy bir maromda ushlab turiladi."
  },
  {
    question: "Genetika fanida nuklein kislotalardan biri bo'lgan DNK molekulasining monomeri nima deb ataladi?",
    options: ["Nukleotid", "Aminokislota", "Monosaxarid", "Glikogen"],
    answer: 0,
    explanation: "DNK zanjiri azotli asos, dezoksiriboza va fosfat guruhidan iborat millionlab nukleotid monomerlarining birikishidan hosil bo'ladi."
  }
];
