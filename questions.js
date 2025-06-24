const quizDataFromFile = [
  {
    "question": "guten Tag",
    "correct": "iyi günler",
    "choices": [
      "arkadaşım",
      "siz kimsiniz?",
      "iyi günler",
      "-E bakmak"
    ]
  },
  {
    "question": "hallo",
    "correct": "merhaba",
    "choices": [
      "merhaba",
      "alo?",
      "dikkat etmek",
      "neler?"
    ]
  },
  {
    "question": "auf Wiedersehen",
    "correct": "güle güle",
    "choices": [
      "güle güle",
      "postane",
      "lokanta",
      "defter"
    ]
  },
  {
    "question": "tschüss (duzend)",
    "correct": "hoşça kal",
    "choices": [
      "hoşça kal",
      "ev",
      "hâlâ + Verneinung",
      "dul"
    ]
  },
  {
    "question": "tschüss (siezend)",
    "correct": "hoşça kalın",
    "choices": [
      "-E başlamak",
      "iş",
      "hoşça kalın",
      "dikkat etmek"
    ]
  },
  {
    "question": "wie heißt du?",
    "correct": "adin ne?",
    "choices": [
      "kendisi",
      "tamam",
      "dikkat edin",
      "adin ne?"
    ]
  },
  {
    "question": "Vorname",
    "correct": "ad",
    "choices": [
      "gözlük, gözlüğü",
      "ad",
      "dönerci",
      "İrlandalı"
    ]
  },
  {
    "question": "was?",
    "correct": "ne?",
    "choices": [
      "-İ dinlemek",
      "dolap, dolabı",
      "ne?",
      "öyle mi?"
    ]
  },
  {
    "question": "mein Name (ist)",
    "correct": "adım",
    "choices": [
      "televizyon izlemek",
      "siz kimsiniz?",
      "adım",
      "hiçbir şey + Verneinung"
    ]
  },
  {
    "question": "wie heißt du?",
    "correct": "senin adın ne?",
    "choices": [
      "değil mi?",
      "senin adın ne?",
      "Rusça",
      "ok iyi"
    ]
  },
  {
    "question": "ich heiße",
    "correct": "benim adım",
    "choices": [
      "emin",
      "yeterli",
      "Norveçli",
      "benim adım"
    ]
  },
  {
    "question": "sehr erfreut",
    "correct": "memnun oldum",
    "choices": [
      "-İ beğenmek",
      "öyle mi?",
      "yorgun",
      "memnun oldum"
    ]
  },
  {
    "question": "auch ich",
    "correct": "ben de",
    "choices": [
      "ben de",
      "memnun oldum",
      "on",
      "tercume etmek"
    ]
  },
  {
    "question": "guten Morgen",
    "correct": "günaydın",
    "choices": [
      "günaydın",
      "az",
      "yeterli",
      "kütüphane"
    ]
  },
  {
    "question": "wie heißen Sie?",
    "correct": "adınız ne?",
    "choices": [
      "sabahleyin",
      "gazeteci",
      "nişanlı",
      "adınız ne?"
    ]
  },
  {
    "question": "nun gut",
    "correct": "peki",
    "choices": [
      "basit",
      "peki",
      "kaç yaşındasınız?",
      "dinç"
    ]
  },
  {
    "question": "wie heißen Sie?",
    "correct": "sizin adınız ne?",
    "choices": [
      "ikisi (de)",
      "gece",
      "sizin adınız ne?",
      "gelmek"
    ]
  },
  {
    "question": "wer ist das?",
    "correct": "bu kim?",
    "choices": [
      "nereden?",
      "-E bakmak",
      "şöyle böyle",
      "bu kim?"
    ]
  },
  {
    "question": "wer?",
    "correct": "kim?",
    "choices": [
      "sandalye",
      "gelecek",
      "kim?",
      "nişanlı"
    ]
  },
  {
    "question": "ich darf Ihnen vorstellen",
    "correct": "sizi tanıştırayım",
    "choices": [
      "mesleğiniz ne?",
      "hukuk, hukuğu",
      "sizi tanıştırayım",
      "postacı"
    ]
  },
  {
    "question": "dieser (hier); das (hier) ist",
    "correct": "bu",
    "choices": [
      "altı",
      "beğeniyorum",
      "Norveçli",
      "bu"
    ]
  },
  {
    "question": "und das ist",
    "correct": "bu da",
    "choices": [
      "tekrar yapmak",
      "bu",
      "dul",
      "bu da"
    ]
  },
  {
    "question": "dieser (da); das (da) ist",
    "correct": "şu",
    "choices": [
      "ad",
      "bilmek",
      "on",
      "şu"
    ]
  },
  {
    "question": "Freund",
    "correct": "arkadaş",
    "choices": [
      "arkadaş",
      "Portekizli",
      "kimler?",
      "kolay gelsin"
    ]
  },
  {
    "question": "jener; das (dort) ist; er, sie, es",
    "correct": "o",
    "choices": [
      "-E bakmak",
      "o",
      "bu da",
      "ne tesadüf"
    ]
  },
  {
    "question": "ich weiß (es) nicht",
    "correct": "bilmiyorum",
    "choices": [
      "şurada",
      "tekrar yapın",
      "sabahleyin",
      "bilmiyorum"
    ]
  },
  {
    "question": "wissen",
    "correct": "bilmek",
    "choices": [
      "Yunalı",
      "bilmek",
      "beyaz tahta",
      "hiçbir şey + Verneinung"
    ]
  },
  {
    "question": "ich kenne nicht",
    "correct": "tanımıyorum",
    "choices": [
      "Portekizli",
      "-E yardım etmek",
      "ile / -(y)IE",
      "tanımıyorum"
    ]
  },
  {
    "question": "kennen",
    "correct": "tanımak",
    "choices": [
      "Türkçe",
      "tanımak",
      "nişanlı",
      "hiç + Verneinung"
    ]
  },
  {
    "question": "Buch",
    "correct": "kitap, kitabı",
    "choices": [
      "-mEk için",
      "arkadaş",
      "kitap, kitabı",
      "nerede?"
    ]
  },
  {
    "question": "wir",
    "correct": "biz",
    "choices": [
      "affedersiniz",
      "dolap, dolabı",
      "biz",
      "kolay gelsin"
    ]
  },
  {
    "question": "ihr, sie",
    "correct": "siz",
    "choices": [
      "ikisi (de)",
      "hoşça kal",
      "siz",
      "gül"
    ]
  },
  {
    "question": "sie",
    "correct": "onlar",
    "choices": [
      "onlar",
      "peki",
      "dönerci",
      "mavi"
    ]
  },
  {
    "question": "Sie sind Türkin/Türke; ihr seid Türkinnen/Türken",
    "correct": "Türksünüz",
    "choices": [
      "Türksünüz",
      "tercume etmek",
      "hangi?",
      "en az"
    ]
  },
  {
    "question": "guten Abend",
    "correct": "iyi akşamlar",
    "choices": [
      "masa",
      "tekrar",
      "Tunuslu",
      "iyi akşamlar"
    ]
  },
  {
    "question": "mein Freund",
    "correct": "arkadaşım",
    "choices": [
      "canım",
      "f. Vorname + Hanım",
      "önemsiz",
      "arkadaşım"
    ]
  },
  {
    "question": "bist du Türke / Türkin?",
    "correct": "sen Türk müsün?",
    "choices": [
      "akşam",
      "fena",
      "buluşmak",
      "sen Türk müsün?"
    ]
  },
  {
    "question": "Türkin / Türke",
    "correct": "Türk",
    "choices": [
      "arkadaş",
      "soyadım",
      "şehir, şehri",
      "Türk"
    ]
  },
  {
    "question": "ja",
    "correct": "evet",
    "choices": [
      "bir",
      "oynamak",
      "evet",
      "siz kimsiniz?"
    ]
  },
  {
    "question": "und Sie?",
    "correct": "ya siz?",
    "choices": [
      "ya siz?",
      "siz kimsiniz?",
      "Rus",
      "gelmek"
    ]
  },
  {
    "question": "und (in kurzen Gegenfragen)",
    "correct": "ya",
    "choices": [
      "berber",
      "ev",
      "Türksünüz",
      "ya"
    ]
  },
  {
    "question": "und",
    "correct": "ve",
    "choices": [
      "telefon",
      "oda",
      "bu akşam",
      "ve"
    ]
  },
  {
    "question": "Deutsche(r)",
    "correct": "Alman",
    "choices": [
      "şunlar",
      "Alman",
      "tekrar",
      "sanırım"
    ]
  },
  {
    "question": "Österreicher(in)",
    "correct": "Avusturyalı",
    "choices": [
      "yıl",
      "adin ne?",
      "Avusturyalı",
      "oda"
    ]
  },
  {
    "question": "hübsch, schön",
    "correct": "güzel",
    "choices": [
      "güzel",
      "sıkıcı",
      "beraber",
      "gül"
    ]
  },
  {
    "question": "Engländer",
    "correct": "İngiliz",
    "choices": [
      "kaç yaşındasınız?",
      "arkadaş",
      "Viyana",
      "İngiliz"
    ]
  },
  {
    "question": "Spanier(in)",
    "correct": "İspanyol",
    "choices": [
      "tekrar yapın",
      "İspanyol",
      "size",
      "kitapçı"
    ]
  },
  {
    "question": "Tunesier(in)",
    "correct": "Tunuslu",
    "choices": [
      "Polonyalı",
      "Tunuslu",
      "meselâ",
      "on"
    ]
  },
  {
    "question": "Professor(in)",
    "correct": "profesör",
    "choices": [
      "bu kim?",
      "profesör",
      "erkek kardeş",
      "bak"
    ]
  },
  {
    "question": "Französin, Franzose",
    "correct": "Fransız",
    "choices": [
      "zaman",
      "beğeniyorum",
      "zor",
      "Fransız"
    ]
  },
  {
    "question": "Italinier(in)",
    "correct": "İtalyan",
    "choices": [
      "anlamadım",
      "İtalyan",
      "Portekizli",
      "resim çizmek"
    ]
  },
  {
    "question": "Schweizer(in)",
    "correct": "İsviçreli",
    "choices": [
      "senin adın ne?",
      "gri",
      "akşam",
      "İsviçreli"
    ]
  },
  {
    "question": "Russin, Russe",
    "correct": "Rus",
    "choices": [
      "değil",
      "resim çizmek",
      "Rus",
      "kaç yaşındasınız?"
    ]
  },
  {
    "question": "Amerikaner(in)",
    "correct": "Amerikalı",
    "choices": [
      "yorucu",
      "Amerikalı",
      "-İ kurmak",
      "çiklet"
    ]
  },
  {
    "question": "nicht",
    "correct": "değil",
    "choices": [
      "Alman",
      "hiçbir şey + Verneinung",
      "değil",
      "yüz"
    ]
  },
  {
    "question": "amerikanisch",
    "correct": "Amerikan",
    "choices": [
      "tekrar etmek",
      "boş zaman",
      "ev hanımı",
      "Amerikan"
    ]
  },
  {
    "question": "Chinesin, Chinese",
    "correct": "Çinli",
    "choices": [
      "Çinli",
      "yıl",
      "-İ ezberlemek",
      "tahta"
    ]
  },
  {
    "question": "Griechin, Grieche",
    "correct": "Yunalı",
    "choices": [
      "taksi",
      "Yunalı",
      "çocuk, çocuğu",
      "biri"
    ]
  },
  {
    "question": "Syrier(in)",
    "correct": "Suriyeli",
    "choices": [
      "hobi",
      "Suriyeli",
      "elbette",
      "iyi günler"
    ]
  },
  {
    "question": "Aserbaidschaner(in)",
    "correct": "Azeri, Azerbaycanlı",
    "choices": [
      "rahatsız",
      "Azeri, Azerbaycanlı",
      "çabuk",
      "boş"
    ]
  },
  {
    "question": "Libanesin, Libanese",
    "correct": "Lübnanlı",
    "choices": [
      "çok",
      "mp3 çalar",
      "aşçı",
      "Lübnanlı"
    ]
  },
  {
    "question": "Polin, Pole",
    "correct": "Polonyalı",
    "choices": [
      "Polonyalı",
      "doktor",
      "yazı",
      "Yunalı"
    ]
  },
  {
    "question": "Kanadier(in)",
    "correct": "Kanadalı",
    "choices": [
      "Kanadalı",
      "ay",
      "fena değil",
      "konuşmak"
    ]
  },
  {
    "question": "Niederländer(in)",
    "correct": "Hollandalı",
    "choices": [
      "Hollandalı",
      "yine",
      "-İ dinlemek",
      "dans"
    ]
  },
  {
    "question": "Dänin, Däne",
    "correct": "Danimarkalı",
    "choices": [
      "Danimarkalı",
      "Türkçe",
      "nişanlı",
      "arkadaşım"
    ]
  },
  {
    "question": "Staatsangehörigkeit",
    "correct": "uyruk, uyruğu",
    "choices": [
      "zevk",
      "uyruk, uyruğu",
      "musunuz?",
      "burada"
    ]
  },
  {
    "question": "Gute Nacht",
    "correct": "iyi geceler",
    "choices": [
      "memnun oldum",
      "Rusça",
      "ile / -(y)IE",
      "iyi geceler"
    ]
  },
  {
    "question": "Entschuldigung",
    "correct": "pardon",
    "choices": [
      "haber",
      "duvar",
      "şoför",
      "pardon"
    ]
  },
  {
    "question": "mein Nachname (ist)",
    "correct": "soyadım",
    "choices": [
      "soyadım",
      "Avusturyalı",
      "en az",
      "aşçı"
    ]
  },
  {
    "question": "Nachname",
    "correct": "soyadı",
    "choices": [
      "dede",
      "dil",
      "polis",
      "soyadı"
    ]
  },
  {
    "question": "woher stammst du?",
    "correct": "nerelisin?",
    "choices": [
      "tamam",
      "vermek",
      "artık",
      "nerelisin?"
    ]
  },
  {
    "question": "woher stammend?",
    "correct": "nereli?",
    "choices": [
      "İstanbullu",
      "tamam",
      "tanımak",
      "nereli?"
    ]
  },
  {
    "question": "Istanbuler(in)",
    "correct": "İstanbullu",
    "choices": [
      "İstanbullu",
      "kalem",
      "Amerikan",
      "ok iyi"
    ]
  },
  {
    "question": "aus Ankara stammend",
    "correct": "Ankaralı",
    "choices": [
      "Ankaralı",
      "motosiklet",
      "fena değil",
      "futbolcu"
    ]
  },
  {
    "question": "aus Erzurum stammend",
    "correct": "Erzurumlu",
    "choices": [
      "kadın",
      "satmak",
      "Erzurumlu",
      "masa"
    ]
  },
  {
    "question": "diese (hier)",
    "correct": "bunlar",
    "choices": [
      "bunlar",
      "İngilizce",
      "öğrenci",
      "Portekizli"
    ]
  },
  {
    "question": "diese (da)",
    "correct": "şunlar",
    "choices": [
      "neden?",
      "şunlar",
      "Yunalı",
      "tatil"
    ]
  },
  {
    "question": "jene",
    "correct": "onlar",
    "choices": [
      "teneffüs",
      "onlar",
      "benim adım",
      "ikisi (de)"
    ]
  },
  {
    "question": "Wien",
    "correct": "Viyana",
    "choices": [
      "eş",
      "Viyana",
      "sanmak",
      "mühendis"
    ]
  },
  {
    "question": "Zürich",
    "correct": "Zürih",
    "choices": [
      "röportaj",
      "bir",
      "kimler?",
      "Zürih"
    ]
  },
  {
    "question": "er/sie selbst",
    "correct": "kendisi",
    "choices": [
      "bütün",
      "kendisi",
      "sık sık",
      "görüşmek üzere"
    ]
  },
  {
    "question": "(sich) selbst",
    "correct": "kendi",
    "choices": [
      "biz",
      "yarın",
      "Japon",
      "kendi"
    ]
  },
  {
    "question": "wer sind Sie? wer seid ihr?",
    "correct": "siz kimsiniz?",
    "choices": [
      "onlar",
      "gelecek",
      "canım",
      "siz kimsiniz?"
    ]
  },
  {
    "question": "entschuldigen Sie",
    "correct": "affedersiniz",
    "choices": [
      "affedersiniz",
      "Çin",
      "renk, rengi",
      "tekrar"
    ]
  },
  {
    "question": "Beruf",
    "correct": "meslek, mesleği",
    "choices": [
      "fotoğrafı çektim",
      "meslek, mesleği",
      "nine",
      "bana zor geliyor"
    ]
  },
  {
    "question": "sehr, viel",
    "correct": "çok",
    "choices": [
      "profesör",
      "ne iş yapıyorsunuz?",
      "dE",
      "çok"
    ]
  },
  {
    "question": "ich habe nicht verstanden",
    "correct": "anlamadım",
    "choices": [
      "Yunalı",
      "anlamadım",
      "tanımıyorum",
      "doktor"
    ]
  },
  {
    "question": "könnten Sie wiederholen?",
    "correct": "tekrar eder misiniz?",
    "choices": [
      "tekrar eder misiniz?",
      "dil",
      "yedi",
      "meslek, mesleği"
    ]
  },
  {
    "question": "wiederholen",
    "correct": "tekrar etmek",
    "choices": [
      "yeterli",
      "tekrar etmek",
      "adam",
      "hafta"
    ]
  },
  {
    "question": "nein",
    "correct": "hayır",
    "choices": [
      "mp3 çalar",
      "postacı",
      "konuşmak",
      "hayır"
    ]
  },
  {
    "question": "noch einmal",
    "correct": "yine",
    "choices": [
      "yine",
      "var",
      "dergi",
      "yirmi"
    ]
  },
  {
    "question": "könnten Sie buchstabieren?",
    "correct": "harf harf söyler misiniz?",
    "choices": [
      "harf harf söyler misiniz?",
      "öğrenci",
      "hiç bir zaman + Verneinung",
      "onlar"
    ]
  },
  {
    "question": "danke",
    "correct": "teşekkür ederim",
    "choices": [
      "-DEn önce",
      "İspanyolca",
      "teşekkür ederim",
      "araba"
    ]
  },
  {
    "question": "bitte; keine Ursache",
    "correct": "bir şey değil",
    "choices": [
      "yazı",
      "nişanlı",
      "büro",
      "bir şey değil"
    ]
  },
  {
    "question": "Irin, Ire",
    "correct": "İrlandalı",
    "choices": [
      "yüz",
      "İrlandalı",
      "değil",
      "Norveçli"
    ]
  },
  {
    "question": "Schüler(in); Student(in)",
    "correct": "öğrenci",
    "choices": [
      "öğrenci",
      "var",
      "abla",
      "ceket"
    ]
  },
  {
    "question": "Frisör(in)",
    "correct": "kuaför",
    "choices": [
      "bu",
      "doktor",
      "kuaför",
      "sokak, sokağı"
    ]
  },
  {
    "question": "Ärztin, Arzt",
    "correct": "doktor",
    "choices": [
      "bu kim?",
      "babaanne",
      "doktor",
      "teşekkür ederim"
    ]
  },
  {
    "question": "Polizist(in)",
    "correct": "polis",
    "choices": [
      "bilmiyorum",
      "polis",
      "ne dersin?",
      "başka"
    ]
  },
  {
    "question": "Fahrer(in)",
    "correct": "şoför",
    "choices": [
      "afiş",
      "ağaç, ağacı",
      "şoför",
      "sıkıcı"
    ]
  },
  {
    "question": "Fußballspieler(in)",
    "correct": "futbolcu",
    "choices": [
      "doğru",
      "etmek (ed-)",
      "futbolcu",
      "sanmak"
    ]
  },
  {
    "question": "Rechtsanwältin, Rechtsanwalt",
    "correct": "avukat",
    "choices": [
      "oldukça",
      "iyi akşamlar",
      "avukat",
      "İstanbullu"
    ]
  },
  {
    "question": "Friseur",
    "correct": "berber",
    "choices": [
      "berber",
      "ne tesadüf",
      "pardon",
      "üç"
    ]
  },
  {
    "question": "jetzt",
    "correct": "şimdi",
    "choices": [
      "İtalyan",
      "basit",
      "önce",
      "şimdi"
    ]
  },
  {
    "question": "was für ein Zufall",
    "correct": "ne tesadüf",
    "choices": [
      "abla",
      "henüz",
      "ne tesadüf",
      "tezgâhtarlık, tezgâhtarlığı"
    ]
  },
  {
    "question": "Portugiesin, Portugiese",
    "correct": "Portekizli",
    "choices": [
      "ya",
      "yaş",
      "ağaç, ağacı",
      "Portekizli"
    ]
  },
  {
    "question": "Angestellte(r), Beamtin, Beamter",
    "correct": "memur",
    "choices": [
      "dil",
      "memur",
      "bir dakika",
      "yazmak"
    ]
  },
  {
    "question": "Genf",
    "correct": "Cenevre",
    "choices": [
      "sokak, sokağı",
      "röportaj",
      "Cenevre",
      "hastane"
    ]
  },
  {
    "question": "Telefon",
    "correct": "telefon",
    "choices": [
      "tatilde",
      "telefon",
      "yemek, yemeği",
      "ağaç, ağacı"
    ]
  },
  {
    "question": "sehr gut",
    "correct": "ok iyi",
    "choices": [
      "Kanadalı",
      "gece",
      "ok iyi",
      "altmiş"
    ]
  },
  {
    "question": "gut",
    "correct": "iyi",
    "choices": [
      "iyi",
      "peki",
      "gibi",
      "yanlış"
    ]
  },
  {
    "question": "nicht schlecht",
    "correct": "fena değil",
    "choices": [
      "bana zor geliyor",
      "abla",
      "fena değil",
      "sıkıcı"
    ]
  },
  {
    "question": "nicht gut",
    "correct": "iyi değil",
    "choices": [
      "çalışmak",
      "iyi değil",
      "eş",
      "saat, saati"
    ]
  },
  {
    "question": "nicht besonders",
    "correct": "şöyle böyle",
    "choices": [
      "ne?",
      "şöyle böyle",
      "emin",
      "kırmızı"
    ]
  },
  {
    "question": "bitte?",
    "correct": "efendim?",
    "choices": [
      "efendim?",
      "henüz",
      "Ankaralı",
      "arkadaşım"
    ]
  },
  {
    "question": "Frau",
    "correct": "f. Vorname + Hanım",
    "choices": [
      "f. Vorname + Hanım",
      "peki",
      "gitmek (gid-)",
      "fena"
    ]
  },
  {
    "question": "wie geht es Ihnen?",
    "correct": "nasılsınız?",
    "choices": [
      "nasılsınız?",
      "adınız ne?",
      "bu",
      "alo?"
    ]
  },
  {
    "question": "wie?",
    "correct": "nasıl?",
    "choices": [
      "sempatik",
      "nasıl?",
      "biraz",
      "tamam"
    ]
  },
  {
    "question": "danke (dir)",
    "correct": "sağ ol",
    "choices": [
      "satmak",
      "sağ ol",
      "gibi",
      "iş"
    ]
  },
  {
    "question": "dort",
    "correct": "orada",
    "choices": [
      "orada",
      "büyük",
      "veya",
      "Türkiye'ye"
    ]
  },
  {
    "question": "hier",
    "correct": "burada",
    "choices": [
      "sık sık",
      "sigara",
      "fotoğraf",
      "burada"
    ]
  },
  {
    "question": "einen Moment",
    "correct": "bir dakika",
    "choices": [
      "palto",
      "bir dakika",
      "yok",
      "bin"
    ]
  },
  {
    "question": "ein(e)",
    "correct": "bir",
    "choices": [
      "var",
      "bir",
      "burada",
      "cümle"
    ]
  },
  {
    "question": "Minute",
    "correct": "dakika",
    "choices": [
      "dakika",
      "Arap, Arabı",
      "otuz",
      "küçük"
    ]
  },
  {
    "question": "Hallo?",
    "correct": "alo?",
    "choices": [
      "memnun oldum",
      "alo?",
      "canım istemiyor",
      "yıl"
    ]
  },
  {
    "question": "Mutter",
    "correct": "anne",
    "choices": [
      "butikte",
      "anne",
      "çocuk, çocuğu",
      "sizi tanıştırayım"
    ]
  },
  {
    "question": "Vater",
    "correct": "baba",
    "choices": [
      "Tunuslu",
      "evet",
      "baba",
      "çabuk"
    ]
  },
  {
    "question": "Großmutter",
    "correct": "nine",
    "choices": [
      "nine",
      "kişi",
      "-İ kurmak",
      "kelime"
    ]
  },
  {
    "question": "Großvater",
    "correct": "dede",
    "choices": [
      "dede",
      "neden?",
      "bu gece",
      "evli"
    ]
  },
  {
    "question": "nicht sehr",
    "correct": "pek + Verneinung",
    "choices": [
      "birkaç",
      "kaç yaşındasınız?",
      "pek + Verneinung",
      "Lübnanlı"
    ]
  },
  {
    "question": "Alter",
    "correct": "yaşılık, yaşlılığı",
    "choices": [
      "kiz kardeş",
      "Ankaralı",
      "-E başlamak",
      "yaşılık, yaşlılığı"
    ]
  },
  {
    "question": "so ist, hier ist",
    "correct": "işte",
    "choices": [
      "işte",
      "sinema",
      "butikte",
      "ne zamandan beri?"
    ]
  },
  {
    "question": "schade",
    "correct": "yazık",
    "choices": [
      "memur",
      "renk, rengi",
      "hoşça kal",
      "yazık"
    ]
  },
  {
    "question": "bis bald",
    "correct": "görüşmek üzere",
    "choices": [
      "evli",
      "görüşmek üzere",
      "tabii",
      "ne zamandan beri?"
    ]
  },
  {
    "question": "Herr",
    "correct": "m. Vorname + Bey",
    "choices": [
      "m. Vorname + Bey",
      "Avusturya",
      "sık sık",
      "f. Vorname + Hanım"
    ]
  },
  {
    "question": "ein bisschen; ein wenig; etwas",
    "correct": "biraz",
    "choices": [
      "Ankaralı",
      "Rus",
      "senin adın ne?",
      "biraz"
    ]
  },
  {
    "question": "ziemlich gut",
    "correct": "iyice",
    "choices": [
      "Amerikalı",
      "iyice",
      "kütüphane",
      "dikkat etmek"
    ]
  },
  {
    "question": "nicht wahr?; oder?",
    "correct": "değil mi?",
    "choices": [
      "iyi akşamlar",
      "Amerikan",
      "değil mi?",
      "alo?"
    ]
  },
  {
    "question": "auch, und",
    "correct": "dE",
    "choices": [
      "dE",
      "bana zor geliyor",
      "nerede?",
      "beğeniyorum"
    ]
  },
  {
    "question": "schlecht",
    "correct": "kötü",
    "choices": [
      "hoşça kal",
      "yirmi",
      "ben de",
      "kötü"
    ]
  },
  {
    "question": "Großmutter (mütterlichseits)",
    "correct": "annanne",
    "choices": [
      "annanne",
      "ne renk?",
      "ezberleyin",
      "kuaför"
    ]
  },
  {
    "question": "Großmutter (vätterlichseits)",
    "correct": "babaanne",
    "choices": [
      "babaanne",
      "öğrenci",
      "önemli",
      "sanmak"
    ]
  },
  {
    "question": "Sohn",
    "correct": "oğul, oğlu",
    "choices": [
      "doktor",
      "oğul, oğlu",
      "rahatsız",
      "ise"
    ]
  },
  {
    "question": "Tochter; Mädchen",
    "correct": "kız",
    "choices": [
      "antipatik",
      "kız",
      "Danimarkalı",
      "bir milyar"
    ]
  },
  {
    "question": "Familienfoto",
    "correct": "aile fotoğrafı",
    "choices": [
      "canım",
      "sempatik",
      "aile fotoğrafı",
      "kadın"
    ]
  },
  {
    "question": "Familie",
    "correct": "aile",
    "choices": [
      "bugün",
      "-E bakmak",
      "gibi",
      "aile"
    ]
  },
  {
    "question": "Foto; Bild",
    "correct": "fotoğraf",
    "choices": [
      "yine",
      "etmek (ed-)",
      "Lübnanlı",
      "fotoğraf"
    ]
  },
  {
    "question": "ich mach",
    "correct": "beğeniyorum",
    "choices": [
      "beğeniyorum",
      "sizin adınız ne?",
      "resim, resmi",
      "Erzurumlu"
    ]
  },
  {
    "question": "gefallen; mögen",
    "correct": "-İ beğenmek",
    "choices": [
      "-İ beğenmek",
      "müdür",
      "evet",
      "büfe"
    ]
  },
  {
    "question": "wo?",
    "correct": "nerede?",
    "choices": [
      "hastane",
      "-DEn önce",
      "nerede?",
      "hobi"
    ]
  },
  {
    "question": "deiner Meinung nach",
    "correct": "sence",
    "choices": [
      "futbolcu",
      "m. Vorname + Bey",
      "sence",
      "zaman"
    ]
  },
  {
    "question": "natürlich",
    "correct": "tabii ki",
    "choices": [
      "neredeyse",
      "tabii ki",
      "telefon etmek",
      "şimdi"
    ]
  },
  {
    "question": "ich habe das Foto gemacht",
    "correct": "fotoğrafı çektim",
    "choices": [
      "büyük",
      "neden?",
      "annanne",
      "fotoğrafı çektim"
    ]
  },
  {
    "question": "Ehefrau, Ehemann",
    "correct": "eş",
    "choices": [
      "pek + Verneinung",
      "siz",
      "eş",
      "olarak"
    ]
  },
  {
    "question": "Kind",
    "correct": "çocuk, çocuğu",
    "choices": [
      "çocuk, çocuğu",
      "telefon etmek",
      "ne dersin?",
      "yemek, yemeği"
    ]
  },
  {
    "question": "wie alt sind Sie?",
    "correct": "kaç yaşındasınız?",
    "choices": [
      "İsviçreli",
      "kaç yaşındasınız?",
      "Viyana",
      "eş"
    ]
  },
  {
    "question": "wie viel?",
    "correct": "kaç?",
    "choices": [
      "tezgâhtar",
      "kaç?",
      "İrlandalı",
      "Norveçli"
    ]
  },
  {
    "question": "(ist) ... Jahre alt",
    "correct": "yaşında",
    "choices": [
      "yarın",
      "doktor",
      "ilk",
      "yaşında"
    ]
  },
  {
    "question": "Alter",
    "correct": "yaş",
    "choices": [
      "-İ kurmak",
      "yaş",
      "elli",
      "ne renk?"
    ]
  },
  {
    "question": "verheiratet",
    "correct": "evli",
    "choices": [
      "evli",
      "aynı zamanda",
      "telefon etmek",
      "zamanım yok"
    ]
  },
  {
    "question": "Hausfrau",
    "correct": "ev hanımı",
    "choices": [
      "anne",
      "ev hanımı",
      "günaydın",
      "aynı zamanda"
    ]
  },
  {
    "question": "beide",
    "correct": "ikisi (de)",
    "choices": [
      "ikisi (de)",
      "emekli",
      "-DEn önce",
      "kuaför"
    ]
  },
  {
    "question": "eins",
    "correct": "bir",
    "choices": [
      "antipatik",
      "bir",
      "yeterli",
      "yetmiş"
    ]
  },
  {
    "question": "zwei",
    "correct": "iki",
    "choices": [
      "bu gece",
      "üç",
      "kendisi",
      "iki"
    ]
  },
  {
    "question": "drei",
    "correct": "üç",
    "choices": [
      "üç",
      "müşteri",
      "kahvaltı etmek",
      "kelime"
    ]
  },
  {
    "question": "vier",
    "correct": "dört",
    "choices": [
      "dergi",
      "kabul",
      "dört",
      "ne dersin?"
    ]
  },
  {
    "question": "fünf",
    "correct": "beş",
    "choices": [
      "tamam",
      "tezgâhtar",
      "beş",
      "dans etmek"
    ]
  },
  {
    "question": "sechs",
    "correct": "altı",
    "choices": [
      "altı",
      "diploma",
      "çabuk",
      "nereye?"
    ]
  },
  {
    "question": "sieben",
    "correct": "yedi",
    "choices": [
      "rica ederim",
      "bugün",
      "yedi",
      "beğeniyor"
    ]
  },
  {
    "question": "acht",
    "correct": "sekiz",
    "choices": [
      "pardon",
      "çok",
      "sekiz",
      "hobi"
    ]
  },
  {
    "question": "neun",
    "correct": "dokuz",
    "choices": [
      "televizyon izlemek",
      "dokuz",
      "şu an",
      "yıl"
    ]
  },
  {
    "question": "zehn",
    "correct": "on",
    "choices": [
      "soyadım",
      "dikkat edin",
      "on",
      "bu kim?"
    ]
  },
  {
    "question": "Tomate",
    "correct": "domates",
    "choices": [
      "sıkıcı",
      "hayırlı işler",
      "kuaför",
      "domates"
    ]
  },
  {
    "question": "Taxi",
    "correct": "taksi",
    "choices": [
      "sabahleyin",
      "bu gece",
      "yorucu",
      "taksi"
    ]
  },
  {
    "question": "Rose",
    "correct": "gül",
    "choices": [
      "senin adın ne?",
      "yeşil",
      "gül",
      "sormak"
    ]
  },
  {
    "question": "Zeitung",
    "correct": "gazete",
    "choices": [
      "dakika",
      "gazete",
      "zevk için",
      "üç"
    ]
  },
  {
    "question": "Bus",
    "correct": "otobüs",
    "choices": [
      "avlu",
      "sadece",
      "otobüs",
      "bence"
    ]
  },
  {
    "question": "zwanzig",
    "correct": "yirmi",
    "choices": [
      "çakmak",
      "yirmi",
      "hastane",
      "ne renk?"
    ]
  },
  {
    "question": "dreißig",
    "correct": "otuz",
    "choices": [
      "tabii ki",
      "yok",
      "otuz",
      "nasılsınız?"
    ]
  },
  {
    "question": "vierzig",
    "correct": "kırk",
    "choices": [
      "tercume etmek",
      "kırk",
      "önemsiz",
      "ne iş yapıyorsunuz?"
    ]
  },
  {
    "question": "fünfzig",
    "correct": "elli",
    "choices": [
      "harita",
      "az",
      "yeterince",
      "elli"
    ]
  },
  {
    "question": "sechsig",
    "correct": "altmiş",
    "choices": [
      "altmiş",
      "bak",
      "Hollandalı",
      "başka"
    ]
  },
  {
    "question": "siebzig",
    "correct": "yetmiş",
    "choices": [
      "yirmi",
      "yetmiş",
      "doğru",
      "kendi"
    ]
  },
  {
    "question": "neunzig",
    "correct": "doksan",
    "choices": [
      "kırmızı",
      "doksan",
      "futbolcu",
      "ikisi (de)"
    ]
  },
  {
    "question": "hundert",
    "correct": "yüz",
    "choices": [
      "kendi",
      "yüz",
      "zamanım yok",
      "kiz kardeş"
    ]
  },
  {
    "question": "tausend",
    "correct": "bin",
    "choices": [
      "şimdi",
      "bin",
      "beğeniyor",
      "yardım"
    ]
  },
  {
    "question": "eine Million",
    "correct": "bir milyon",
    "choices": [
      "hafta",
      "bir milyon",
      "meslek, mesleği",
      "zevk"
    ]
  },
  {
    "question": "eine Milliarde",
    "correct": "bir milyar",
    "choices": [
      "Danimarkalı",
      "Polonyalı",
      "bir milyar",
      "daha"
    ]
  },
  {
    "question": "Personenstand",
    "correct": "medenî hâl",
    "choices": [
      "medenî hâl",
      "ne zamandan beri?",
      "röportaj",
      "Viyana"
    ]
  },
  {
    "question": "ledig",
    "correct": "bekâr",
    "choices": [
      "sporcu",
      "bekâr",
      "hastane",
      "nereden?"
    ]
  },
  {
    "question": "Rentner(in)",
    "correct": "emekli",
    "choices": [
      "memnun oldum",
      "Avusturyalı",
      "ne renk?",
      "emekli"
    ]
  },
  {
    "question": "Witwe(r)",
    "correct": "dul",
    "choices": [
      "daha",
      "Norveçli",
      "Viyana",
      "dul"
    ]
  },
  {
    "question": "geschieden",
    "correct": "ayrı",
    "choices": [
      "ayrı",
      "bir milyar",
      "hiç bir zaman + Verneinung",
      "Portekizli"
    ]
  },
  {
    "question": "wie schön",
    "correct": "ne güzel",
    "choices": [
      "ne güzel",
      "beğeniyorum",
      "henüz + Verneinung",
      "fena"
    ]
  },
  {
    "question": "Frau",
    "correct": "kadın",
    "choices": [
      "kadın",
      "öyle mi?",
      "tercume etmek",
      "siz kimsiniz?"
    ]
  },
  {
    "question": "verlobt",
    "correct": "nişanlı",
    "choices": [
      "nişanlı",
      "hayır",
      "adım",
      "köy"
    ]
  },
  {
    "question": "ich gratuliere",
    "correct": "tebrikler",
    "choices": [
      "sıkıcı",
      "tebrikler",
      "tekrar yapmak",
      "önemli"
    ]
  },
  {
    "question": "keine Ursache",
    "correct": "rica ederim",
    "choices": [
      "rica ederim",
      "hemşire",
      "konuşmak",
      "kırk"
    ]
  },
  {
    "question": "Was machen Sie beruflich?",
    "correct": "ne iş yapıyorsunuz?",
    "choices": [
      "bilmek",
      "ne iş yapıyorsunuz?",
      "var",
      "aile fotoğrafı"
    ]
  },
  {
    "question": "Arbeit",
    "correct": "iş",
    "choices": [
      "bunlar",
      "kahvaltı etmek",
      "iş",
      "İstanbullu"
    ]
  },
  {
    "question": "machen, tun",
    "correct": "yapmak",
    "choices": [
      "defter",
      "Portekizli",
      "ev hanımı",
      "yapmak"
    ]
  },
  {
    "question": "Ingenieur(in)",
    "correct": "mühendis",
    "choices": [
      "butikte",
      "mühendis",
      "beğeniyorum",
      "emin"
    ]
  },
  {
    "question": "Koch, Köchin",
    "correct": "aşçı",
    "choices": [
      "aşçı",
      "nişanlı",
      "oda",
      "ise"
    ]
  },
  {
    "question": "Krankenschwester",
    "correct": "hemşire",
    "choices": [
      "İspanyol",
      "hemşire",
      "üniversite",
      "kim?"
    ]
  },
  {
    "question": "Briefträger(in)",
    "correct": "postacı",
    "choices": [
      "küçük",
      "dolap, dolabı",
      "postacı",
      "banka"
    ]
  },
  {
    "question": "Verkäufer(in)",
    "correct": "tezgâhtar",
    "choices": [
      "tezgâhtar",
      "hastane",
      "para",
      "dikkat edin"
    ]
  },
  {
    "question": "Journalist(in)",
    "correct": "gazeteci",
    "choices": [
      "-E bakmak",
      "yaşılık, yaşlılığı",
      "beğeniyor",
      "gazeteci"
    ]
  },
  {
    "question": "Interview",
    "correct": "röportaj",
    "choices": [
      "röportaj",
      "hayırlı işler",
      "postacı",
      "Avusturyalı"
    ]
  },
  {
    "question": "bitte (einladend)",
    "correct": "buyurun",
    "choices": [
      "sabahleyin",
      "buyurun",
      "henüz",
      "etmek (ed-)"
    ]
  },
  {
    "question": "Nachrichtensendung",
    "correct": "haber programı",
    "choices": [
      "afiş",
      "nereli?",
      "çocuk, çocuğu",
      "haber programı"
    ]
  },
  {
    "question": "Nachricht",
    "correct": "haber",
    "choices": [
      "banka",
      "sence",
      "nerede?",
      "haber"
    ]
  },
  {
    "question": "Sendung",
    "correct": "program",
    "choices": [
      "yine",
      "program",
      "-E bakmak",
      "şu an"
    ]
  },
  {
    "question": "für",
    "correct": "için",
    "choices": [
      "ama",
      "için",
      "-İ ezberlemek",
      "yeşil"
    ]
  },
  {
    "question": "Ihnen; euch",
    "correct": "size",
    "choices": [
      "bunlar",
      "affedersiniz",
      "yıl",
      "size"
    ]
  },
  {
    "question": "einige; ein paar",
    "correct": "birkaç",
    "choices": [
      "birkaç",
      "memur",
      "tamam",
      "büro"
    ]
  },
  {
    "question": "fragen",
    "correct": "soru sormak",
    "choices": [
      "soru sormak",
      "fotoğraf",
      "yazık",
      "medenî hâl"
    ]
  },
  {
    "question": "Frage",
    "correct": "soru",
    "choices": [
      "kiz kardeş",
      "soru",
      "oturmak",
      "sık sık"
    ]
  },
  {
    "question": "fragen; (eine Frage) stellen",
    "correct": "sormak",
    "choices": [
      "fena değil",
      "İsveçli",
      "zevk",
      "sormak"
    ]
  },
  {
    "question": "wollen; wünschen",
    "correct": "istemek",
    "choices": [
      "kitapçı",
      "istemek",
      "neden?",
      "kırmızı"
    ]
  },
  {
    "question": "ich höre Ihnen zu",
    "correct": "sizi dinliyorum",
    "choices": [
      "hoşça kal",
      "siz kimsiniz?",
      "sizi dinliyorum",
      "hiçbir şey + Verneinung"
    ]
  },
  {
    "question": "(an-, zu-)hören",
    "correct": "-İ dinlemek",
    "choices": [
      "-İ dinlemek",
      "sekiz",
      "kötü",
      "vermek"
    ]
  },
  {
    "question": "Kantine",
    "correct": "kantin",
    "choices": [
      "kantin",
      "ya siz?",
      "hoş bulduk",
      "ne dersin?"
    ]
  },
  {
    "question": "als",
    "correct": "olarak",
    "choices": [
      "oda",
      "kiz kardeş",
      "bu gece",
      "olarak"
    ]
  },
  {
    "question": "was ist Ihr Beruf?",
    "correct": "mesleğiniz ne?",
    "choices": [
      "tezgâhtar",
      "tatilde",
      "mesleğiniz ne?",
      "nerelisin?"
    ]
  },
  {
    "question": "leben",
    "correct": "yaşamak",
    "choices": [
      "köy",
      "kaç yaşındasınız?",
      "yaşamak",
      "Hollandalı"
    ]
  },
  {
    "question": "im Urlaub",
    "correct": "tatilde",
    "choices": [
      "sekiz",
      "tatilde",
      "otobüs",
      "dönerci"
    ]
  },
  {
    "question": "Urlaub; Ferien",
    "correct": "tatil",
    "choices": [
      "zevk",
      "akşam",
      "tatil",
      "sanmak"
    ]
  },
  {
    "question": "arbeiten",
    "correct": "çalışmak",
    "choices": [
      "sıkıcı",
      "çalışmak",
      "yardım",
      "program"
    ]
  },
  {
    "question": "in einer Boutique",
    "correct": "butikte",
    "choices": [
      "evet",
      "tekrar etmek",
      "henüz",
      "butikte"
    ]
  },
  {
    "question": "Boutique",
    "correct": "butik, butiği",
    "choices": [
      "çünkü",
      "butik, butiği",
      "biz",
      "önemsiz"
    ]
  },
  {
    "question": "der Verkäuferberuf",
    "correct": "tezgâhtarlık, tezgâhtarlığı",
    "choices": [
      "İsviçreli",
      "gece",
      "tezgâhtarlık, tezgâhtarlığı",
      "ya"
    ]
  },
  {
    "question": "wohnen; sitzen",
    "correct": "oturmak",
    "choices": [
      "duvar",
      "şimdi",
      "kurs",
      "oturmak"
    ]
  },
  {
    "question": "richtig",
    "correct": "doğru",
    "choices": [
      "bak",
      "doğru",
      "kantin",
      "gazeteci"
    ]
  },
  {
    "question": "FALSCH",
    "correct": "yanlış",
    "choices": [
      "rahatsız",
      "anlamadım",
      "görmek",
      "yanlış"
    ]
  },
  {
    "question": "Restaurant; Gaststätte",
    "correct": "lokanta",
    "choices": [
      "bu akşam",
      "hiç bir zaman + Verneinung",
      "butikte",
      "lokanta"
    ]
  },
  {
    "question": "wichtig",
    "correct": "önemli",
    "choices": [
      "önemli",
      "ama",
      "arkadaş",
      "arkadaşım"
    ]
  },
  {
    "question": "Ihrer Meinung nach",
    "correct": "sizce",
    "choices": [
      "nereye?",
      "sizce",
      "biz",
      "annanne"
    ]
  },
  {
    "question": "Stadt",
    "correct": "şehir, şehri",
    "choices": [
      "kolay gelsin",
      "boş",
      "röportaj",
      "şehir, şehri"
    ]
  },
  {
    "question": "gefällt Ihnen?",
    "correct": "beğeniyor",
    "choices": [
      "beğeniyor",
      "o",
      "babaanne",
      "Norveçli"
    ]
  },
  {
    "question": "mögen Sie?",
    "correct": "musunuz?",
    "choices": [
      "musunuz?",
      "sınıf",
      "fotoğrafı çektim",
      "-E bakmak"
    ]
  },
  {
    "question": "Bank (Geldinstitut)",
    "correct": "banka",
    "choices": [
      "banka",
      "sadece",
      "Yunalı",
      "nerede?"
    ]
  },
  {
    "question": "schwierig",
    "correct": "zor",
    "choices": [
      "efendim?",
      "nasıl?",
      "-DEn önce",
      "zor"
    ]
  },
  {
    "question": "Stunde; Uhr",
    "correct": "saat, saati",
    "choices": [
      "bir şey değil",
      "boş",
      "yedi",
      "saat, saati"
    ]
  },
  {
    "question": "mindestens",
    "correct": "en az",
    "choices": [
      "basit",
      "için",
      "dokuz",
      "en az"
    ]
  },
  {
    "question": "wenig",
    "correct": "az",
    "choices": [
      "çocuk, çocuğu",
      "acaba (in Fragen)",
      "ne zamandan beri?",
      "az"
    ]
  },
  {
    "question": "Krankenhaus",
    "correct": "hastane",
    "choices": [
      "hastane",
      "her",
      "bence",
      "ok iyi"
    ]
  },
  {
    "question": "einfach",
    "correct": "kolay",
    "choices": [
      "tabii ki",
      "afiş",
      "kolay",
      "satmak"
    ]
  },
  {
    "question": "anstrengend",
    "correct": "yorucu",
    "choices": [
      "yorucu",
      "şu an",
      "ayrıca",
      "öğrenci"
    ]
  },
  {
    "question": "da",
    "correct": "şurada",
    "choices": [
      "şurada",
      "orada",
      "ders",
      "pardon"
    ]
  },
  {
    "question": "aber",
    "correct": "fakat",
    "choices": [
      "altmiş",
      "saat, saati",
      "hâlâ + Verneinung",
      "fakat"
    ]
  },
  {
    "question": "Kunde",
    "correct": "müşteri",
    "choices": [
      "hafta",
      "o",
      "müşteri",
      "haber programı"
    ]
  },
  {
    "question": "ziemlich",
    "correct": "oldukça",
    "choices": [
      "telefon",
      "oldukça",
      "henüz + Verneinung",
      "yetmiş"
    ]
  },
  {
    "question": "sympathisch; nett",
    "correct": "sempatik",
    "choices": [
      "hoşça kalın",
      "kimin?",
      "sempatik",
      "kahvaltı etmek"
    ]
  },
  {
    "question": "sehr erfreut, Sie kennen zu lernen",
    "correct": "tanıştığımıza memnun oldum",
    "choices": [
      "tanıştığımıza memnun oldum",
      "yardım",
      "fotoğraf",
      "ceket"
    ]
  },
  {
    "question": "(schickes) Restaurant",
    "correct": "restoran",
    "choices": [
      "restoran",
      "araba",
      "ayrıca",
      "taksi"
    ]
  },
  {
    "question": "Dönerverkäufer",
    "correct": "dönerci",
    "choices": [
      "röportaj",
      "lamba",
      "dönerci",
      "satmak"
    ]
  },
  {
    "question": "Dorf",
    "correct": "köy",
    "choices": [
      "bu da",
      "haber",
      "hiç bir zaman + Verneinung",
      "köy"
    ]
  },
  {
    "question": "Ober; Kellner",
    "correct": "garson",
    "choices": [
      "Arap, Arabı",
      "garson",
      "değil",
      "adin ne?"
    ]
  },
  {
    "question": "Schule",
    "correct": "okul",
    "choices": [
      "orada",
      "ders",
      "okul",
      "doktor"
    ]
  },
  {
    "question": "Postamt",
    "correct": "postane",
    "choices": [
      "ad",
      "-DEn sonra",
      "bu ne demek?",
      "postane"
    ]
  },
  {
    "question": "Büro",
    "correct": "büro",
    "choices": [
      "tahta",
      "büro",
      "artık",
      "dakika"
    ]
  },
  {
    "question": "Universität",
    "correct": "üniversite",
    "choices": [
      "kâğıt, kâğıdı",
      "üniversite",
      "zaman",
      "kelime"
    ]
  },
  {
    "question": "interessant",
    "correct": "ilginç",
    "choices": [
      "bu",
      "tabii ki",
      "buyurun",
      "ilginç"
    ]
  },
  {
    "question": "langweilig",
    "correct": "sıkıcı",
    "choices": [
      "dede",
      "abla",
      "şoför",
      "sıkıcı"
    ]
  },
  {
    "question": "amüsant",
    "correct": "eğlenceli",
    "choices": [
      "memnun oldum",
      "değil",
      "eğlenceli",
      "ders"
    ]
  },
  {
    "question": "Was bedeutet das?",
    "correct": "bu ne demek?",
    "choices": [
      "öyle mi?",
      "bu ne demek?",
      "motosiklet",
      "bugün"
    ]
  },
  {
    "question": "Klassenzimmer",
    "correct": "sınıf",
    "choices": [
      "biz",
      "sınıf",
      "aşçı",
      "-İ beğenmek"
    ]
  },
  {
    "question": "Optiker",
    "correct": "gözlükçü",
    "choices": [
      "çiçek çiçeği",
      "gözlükçü",
      "biri",
      "okumak"
    ]
  },
  {
    "question": "zum Beispiel",
    "correct": "meselâ",
    "choices": [
      "pek + Verneinung",
      "hayır",
      "bu da",
      "meselâ"
    ]
  },
  {
    "question": "Brille",
    "correct": "gözlük, gözlüğü",
    "choices": [
      "gitmek (gid-)",
      "gözlük, gözlüğü",
      "kitapçı",
      "çakmak"
    ]
  },
  {
    "question": "Wörterbuch",
    "correct": "süzlük, sözlüğü",
    "choices": [
      "süzlük, sözlüğü",
      "kitap, kitabı",
      "Cenevre",
      "burada"
    ]
  },
  {
    "question": "in Ordnung; einverstanden",
    "correct": "tamam",
    "choices": [
      "tamam",
      "fena değil",
      "Türkçe",
      "dokuz"
    ]
  },
  {
    "question": "verkaufen",
    "correct": "satmak",
    "choices": [
      "boş zaman",
      "evli",
      "iyi günler",
      "satmak"
    ]
  },
  {
    "question": "schau",
    "correct": "bak",
    "choices": [
      "dans",
      "Ankaralı",
      "gitmek (gid-)",
      "bak"
    ]
  },
  {
    "question": "(an-, hin-, zu)sehen, -schauen",
    "correct": "-E bakmak",
    "choices": [
      "-E bakmak",
      "mesleğiniz ne?",
      "-E başlamak",
      "ne dersin?"
    ]
  },
  {
    "question": "Text",
    "correct": "yazı",
    "choices": [
      "kütüphane",
      "yazı",
      "siz",
      "afiş"
    ]
  },
  {
    "question": "schreiben",
    "correct": "yazmak",
    "choices": [
      "hiçbir şey + Verneinung",
      "nerede?",
      "ne iş yapıyorsunuz?",
      "yazmak"
    ]
  },
  {
    "question": "(an)kommen",
    "correct": "gelmek",
    "choices": [
      "kahvaltı",
      "gelmek",
      "peki",
      "program"
    ]
  },
  {
    "question": "Ministerium",
    "correct": "bakanlık, bakanlığı",
    "choices": [
      "Arap, Arabı",
      "rahat",
      "bakanlık, bakanlığı",
      "yüz"
    ]
  },
  {
    "question": "Imbissstube",
    "correct": "büfe",
    "choices": [
      "yazık",
      "büfe",
      "buluşmak",
      "kütüphane"
    ]
  },
  {
    "question": "sprechen, reden",
    "correct": "konuşmak",
    "choices": [
      "sanmak",
      "ders",
      "konuşmak",
      "oldukça"
    ]
  },
  {
    "question": "Buchhändler(in)",
    "correct": "kitapçı",
    "choices": [
      "ilginç",
      "kitapçı",
      "yedi",
      "şoför"
    ]
  },
  {
    "question": "Banker(in)",
    "correct": "bankacı",
    "choices": [
      "pardon",
      "zaman",
      "postane",
      "bankacı"
    ]
  },
  {
    "question": "Sportler(in)",
    "correct": "sporcu",
    "choices": [
      "zevk",
      "sporcu",
      "soru",
      "Türksünüz"
    ]
  },
  {
    "question": "aber",
    "correct": "ama",
    "choices": [
      "Viyana",
      "ad",
      "ama",
      "otobüs"
    ]
  },
  {
    "question": "Wunsch, etwa: \"möge es leicht fallen\"",
    "correct": "kolay gelsin",
    "choices": [
      "kolay gelsin",
      "tatil",
      "zaman",
      "-İ izlemek"
    ]
  },
  {
    "question": "Wunsch, etwa: \"gute Geschäfte!\" (beim Verlassen eines Geschäftes)",
    "correct": "hayırlı işler",
    "choices": [
      "canım istemiyor",
      "hayırlı işler",
      "iyi akşamlar",
      "hafta"
    ]
  },
  {
    "question": "Sprache",
    "correct": "dil",
    "choices": [
      "Avusturyalı",
      "dil",
      "iyi",
      "fotoğrafı çektim"
    ]
  },
  {
    "question": "Türkisch",
    "correct": "Türkçe",
    "choices": [
      "ne güzel",
      "Fransızca",
      "Türkçe",
      "hiç bir zaman + Verneinung"
    ]
  },
  {
    "question": "lernen",
    "correct": "öğrenmek",
    "choices": [
      "öğrenmek",
      "en az",
      "İspanyol",
      "iyi"
    ]
  },
  {
    "question": "Spanisch",
    "correct": "İspanyolca",
    "choices": [
      "İspanyolca",
      "avlu",
      "neler?",
      "Fransız"
    ]
  },
  {
    "question": "Russisch",
    "correct": "Rusça",
    "choices": [
      "dans etmek",
      "fotoğraf",
      "palto",
      "Rusça"
    ]
  },
  {
    "question": "Französisch",
    "correct": "Fransızca",
    "choices": [
      "nasılsınız?",
      "Fransızca",
      "siz",
      "sporcu"
    ]
  },
  {
    "question": "Englisch",
    "correct": "İngilizce",
    "choices": [
      "sizin adınız ne?",
      "bu akşam",
      "neredeyse",
      "İngilizce"
    ]
  },
  {
    "question": "Person",
    "correct": "kişi",
    "choices": [
      "Danimarkalı",
      "kişi",
      "oğul, oğlu",
      "tatilde"
    ]
  },
  {
    "question": "es gibt; ist vorhanden",
    "correct": "var",
    "choices": [
      "Fransız",
      "ağabey [abi]",
      "var",
      "artık"
    ]
  },
  {
    "question": "Mann; Mensch",
    "correct": "adam",
    "choices": [
      "ben de",
      "çünkü",
      "adam",
      "kahvaltı etmek"
    ]
  },
  {
    "question": "herzlich willkommen",
    "correct": "hoş geldiniz",
    "choices": [
      "butik, butiği",
      "süzlük, sözlüğü",
      "fotoğraf",
      "hoş geldiniz"
    ]
  },
  {
    "question": "(Antwort) herzlich willkommen",
    "correct": "hoş bulduk",
    "choices": [
      "şu",
      "hoş bulduk",
      "için",
      "değil"
    ]
  },
  {
    "question": "Moskau",
    "correct": "Moskova",
    "choices": [
      "opera",
      "İngiliz",
      "ne renk?",
      "Moskova"
    ]
  },
  {
    "question": "andere(r,s)",
    "correct": "başka",
    "choices": [
      "başka",
      "sürpriz",
      "sadece",
      "sanmak"
    ]
  },
  {
    "question": "leider",
    "correct": "maalesef",
    "choices": [
      "dergi",
      "maalesef",
      "Japon",
      "çakmak"
    ]
  },
  {
    "question": "natürlich; selbstverständlich",
    "correct": "tabii",
    "choices": [
      "tabii",
      "gün",
      "okumak",
      "kendi"
    ]
  },
  {
    "question": "jemand",
    "correct": "biri",
    "choices": [
      "biri",
      "biraz",
      "sempatik",
      "meselâ"
    ]
  },
  {
    "question": "lesen; studieren",
    "correct": "okumak",
    "choices": [
      "okumak",
      "yanlış",
      "tamam",
      "hastane"
    ]
  },
  {
    "question": "Jura",
    "correct": "hukuk, hukuğu",
    "choices": [
      "hukuk, hukuğu",
      "mesleğiniz ne?",
      "köy",
      "harf harf söyler misiniz?"
    ]
  },
  {
    "question": "gleichzeitig",
    "correct": "aynı zamanda",
    "choices": [
      "arkadaşım",
      "dönmek",
      "aynı zamanda",
      "İsveçli"
    ]
  },
  {
    "question": "gleich; dasselbe",
    "correct": "aynı",
    "choices": [
      "iyi geceler",
      "çiçek çiçeği",
      "kelime",
      "aynı"
    ]
  },
  {
    "question": "Zeit",
    "correct": "zaman",
    "choices": [
      "telefon",
      "zaman",
      "kaç yaşındasınız?",
      "bak"
    ]
  },
  {
    "question": "hingegen",
    "correct": "ise",
    "choices": [
      "değil",
      "sandalye",
      "ise",
      "bak"
    ]
  },
  {
    "question": "überhaupt nicht",
    "correct": "hiç + Verneinung",
    "choices": [
      "restoran",
      "butik, butiği",
      "Alman",
      "hiç + Verneinung"
    ]
  },
  {
    "question": "Norweger(in)",
    "correct": "Norveçli",
    "choices": [
      "sigara",
      "çizmek",
      "yeterli",
      "Norveçli"
    ]
  },
  {
    "question": "Notwegisch",
    "correct": "Norveççe",
    "choices": [
      "oda",
      "daha",
      "hiç + Verneinung",
      "Norveççe"
    ]
  },
  {
    "question": "Japaner(in)",
    "correct": "Japon",
    "choices": [
      "kiz kardeş",
      "lokanta",
      "banka",
      "Japon"
    ]
  },
  {
    "question": "Araber(in)",
    "correct": "Arap, Arabı",
    "choices": [
      "dönerci",
      "harf harf söyler misiniz?",
      "Arap, Arabı",
      "merhaba"
    ]
  },
  {
    "question": "Schwedin, Schwede",
    "correct": "İsveçli",
    "choices": [
      "İsveçli",
      "çok",
      "üniversite",
      "yeterli"
    ]
  },
  {
    "question": "Chinesin, Chinese",
    "correct": "Çin",
    "choices": [
      "çabuk",
      "elbette",
      "bankacı",
      "Çin"
    ]
  },
  {
    "question": "warum?",
    "correct": "neden?",
    "choices": [
      "Lübnanlı",
      "evet",
      "nişanlı",
      "neden?"
    ]
  },
  {
    "question": "Österreich",
    "correct": "Avusturya",
    "choices": [
      "ilk",
      "bütün",
      "Avusturya",
      "dE"
    ]
  },
  {
    "question": "nur; lediglich",
    "correct": "sadece",
    "choices": [
      "Amerikan",
      "sadece",
      "tekrar yapın",
      "kaç?"
    ]
  },
  {
    "question": "mit; und",
    "correct": "ile / -(y)IE",
    "choices": [
      "Zürih",
      "ne?",
      "Alman",
      "ile / -(y)IE"
    ]
  },
  {
    "question": "um... zu",
    "correct": "-mEk için",
    "choices": [
      "-mEk için",
      "yardım",
      "neler?",
      "değil mi?"
    ]
  },
  {
    "question": "außer",
    "correct": "başka",
    "choices": [
      "sekiz",
      "aile fotoğrafı",
      "başka",
      "tekrar yapmak"
    ]
  },
  {
    "question": "denn; weil",
    "correct": "çünkü",
    "choices": [
      "fena değil",
      "canım istemiyor",
      "çünkü",
      "haber programı"
    ]
  },
  {
    "question": "meiner Meinung nach",
    "correct": "bence",
    "choices": [
      "bence",
      "on",
      "beyaz tahta",
      "ben de"
    ]
  },
  {
    "question": "zum Spaß",
    "correct": "zevk için",
    "choices": [
      "istemek",
      "bu akşam",
      "zevk için",
      "boş"
    ]
  },
  {
    "question": "Spaß",
    "correct": "zevk",
    "choices": [
      "zevk",
      "çocuk, çocuğu",
      "okumak",
      "az"
    ]
  },
  {
    "question": "oft",
    "correct": "sık sık",
    "choices": [
      "sık sık",
      "taksi",
      "ceket",
      "fotoğraf"
    ]
  },
  {
    "question": "woher?",
    "correct": "nereden?",
    "choices": [
      "babaanne",
      "-DEn sonra",
      "sizin adınız ne?",
      "nereden?"
    ]
  },
  {
    "question": "Haus; Wohnung",
    "correct": "ev",
    "choices": [
      "araba",
      "tezgâhtarlık, tezgâhtarlığı",
      "şimdi",
      "ev"
    ]
  },
  {
    "question": "Leiter(in); Direktor(in)",
    "correct": "müdür",
    "choices": [
      "gelecek",
      "yaşında",
      "kahvaltı",
      "müdür"
    ]
  },
  {
    "question": "zusammen; gemeinsam",
    "correct": "beraber",
    "choices": [
      "beraber",
      "abla",
      "postacı",
      "üniversite"
    ]
  },
  {
    "question": "schnell",
    "correct": "çabuk",
    "choices": [
      "musunuz?",
      "evli",
      "çabuk",
      "altmiş"
    ]
  },
  {
    "question": "in die Türkei",
    "correct": "Türkiye'ye",
    "choices": [
      "kantin",
      "dakika",
      "Türkiye'ye",
      "onlar"
    ]
  },
  {
    "question": "ich gehe; ich fahre",
    "correct": "gidiyorum",
    "choices": [
      "yapmak",
      "gidiyorum",
      "hangi?",
      "tebrikler"
    ]
  },
  {
    "question": "gehen; fahren",
    "correct": "gitmek (gid-)",
    "choices": [
      "zamanım yok",
      "gitmek (gid-)",
      "iş",
      "sandalye"
    ]
  },
  {
    "question": "was alles?",
    "correct": "neler?",
    "choices": [
      "ev",
      "neler?",
      "satmak",
      "olarak"
    ]
  },
  {
    "question": "wer alles?",
    "correct": "kimler?",
    "choices": [
      "maalesef",
      "ne güzel",
      "kimler?",
      "bin"
    ]
  },
  {
    "question": "es gibt nicht; ist nicht vorhanden",
    "correct": "yok",
    "choices": [
      "öğrenmek",
      "konuşmak",
      "yok",
      "saat, saati"
    ]
  },
  {
    "question": "Tisch",
    "correct": "masa",
    "choices": [
      "masa",
      "Zürih",
      "dans",
      "harf harf söyler misiniz?"
    ]
  },
  {
    "question": "Jacke",
    "correct": "ceket",
    "choices": [
      "köy",
      "canım",
      "ceket",
      "bu da"
    ]
  },
  {
    "question": "Zeitschrift",
    "correct": "dergi",
    "choices": [
      "dergi",
      "oynamak",
      "eğlenceli",
      "mesleğiniz ne?"
    ]
  },
  {
    "question": "Fahrrad",
    "correct": "bisiklet",
    "choices": [
      "ama",
      "bisiklet",
      "meselâ",
      "artık"
    ]
  },
  {
    "question": "Lampe",
    "correct": "lamba",
    "choices": [
      "lamba",
      "sence",
      "kantin",
      "annanne"
    ]
  },
  {
    "question": "Fernseher",
    "correct": "televizyon",
    "choices": [
      "çünkü",
      "nereye?",
      "televizyon",
      "Erzurumlu"
    ]
  },
  {
    "question": "Jahr",
    "correct": "yıl",
    "choices": [
      "bu kim?",
      "yıl",
      "Portekizli",
      "İngilizce"
    ]
  },
  {
    "question": "seit",
    "correct": "-DEn beri",
    "choices": [
      "-DEn beri",
      "tanıştığımıza memnun oldum",
      "zor",
      "şöyle böyle"
    ]
  },
  {
    "question": "seit wann?",
    "correct": "ne zamandan beri?",
    "choices": [
      "için",
      "siz kimsiniz?",
      "ne zamandan beri?",
      "efendim?"
    ]
  },
  {
    "question": "nach; in",
    "correct": "-DEn sonra",
    "choices": [
      "-DEn sonra",
      "kolay",
      "alo?",
      "henüz"
    ]
  },
  {
    "question": "noch, Komparativartikel",
    "correct": "daha",
    "choices": [
      "yüz",
      "sandalye",
      "daha",
      "öyle mi?"
    ]
  },
  {
    "question": "mal sehen",
    "correct": "bakalım",
    "choices": [
      "sıkıcı",
      "bu da",
      "bakalım",
      "birkaç"
    ]
  },
  {
    "question": "welche(r,s)?",
    "correct": "hangi?",
    "choices": [
      "birkaç",
      "hangi?",
      "palto",
      "Norveççe"
    ]
  },
  {
    "question": "wie",
    "correct": "gibi",
    "choices": [
      "tanıştığımıza memnun oldum",
      "gibi",
      "buyurun",
      "-İ kurmak"
    ]
  },
  {
    "question": "außerdem",
    "correct": "ayrıca",
    "choices": [
      "hoşça kalın",
      "ayrıca",
      "teneffüs",
      "ilginç"
    ]
  },
  {
    "question": "Monat",
    "correct": "ay",
    "choices": [
      "ay",
      "ile / -(y)IE",
      "üniversite",
      "İrlandalı"
    ]
  },
  {
    "question": "jede(r,s)",
    "correct": "her",
    "choices": [
      "lamba",
      "her",
      "sık sık",
      "tabii ki"
    ]
  },
  {
    "question": "beginnen; anfangen",
    "correct": "-E başlamak",
    "choices": [
      "-E başlamak",
      "anne",
      "gazeteci",
      "röportaj"
    ]
  },
  {
    "question": "ich habe keine Zeit",
    "correct": "zamanım yok",
    "choices": [
      "televizyon",
      "zamanım yok",
      "bilmiyorum",
      "tanımak"
    ]
  },
  {
    "question": "Tag",
    "correct": "gün",
    "choices": [
      "sormak",
      "gün",
      "kaç?",
      "rica ederim"
    ]
  },
  {
    "question": "Woche",
    "correct": "hafta",
    "choices": [
      "görmek",
      "sekiz",
      "hafta",
      "onlar"
    ]
  },
  {
    "question": "morgen",
    "correct": "yarın",
    "choices": [
      "meslek, mesleği",
      "iki",
      "neler?",
      "yarın"
    ]
  },
  {
    "question": "vor",
    "correct": "-DEn önce",
    "choices": [
      "merhaba",
      "telefon",
      "-DEn önce",
      "hiçbir şey + Verneinung"
    ]
  },
  {
    "question": "Unterricht",
    "correct": "ders",
    "choices": [
      "ile / -(y)IE",
      "biraz",
      "ders",
      "kaç yaşındasınız?"
    ]
  },
  {
    "question": "Kurs",
    "correct": "kurs",
    "choices": [
      "opera",
      "Çin",
      "bakalım",
      "kurs"
    ]
  },
  {
    "question": "kommend; nächste(r,s)",
    "correct": "gelecek",
    "choices": [
      "bilgisayar",
      "gelecek",
      "ay",
      "mp3 çalar"
    ]
  },
  {
    "question": "Gymnasium",
    "correct": "lise",
    "choices": [
      "haber",
      "lise",
      "tamam",
      "için"
    ]
  },
  {
    "question": "Bibliothek; Bücherei",
    "correct": "kütüphane",
    "choices": [
      "kütüphane",
      "her",
      "ne tesadüf",
      "meselâ"
    ]
  },
  {
    "question": "Zigarette",
    "correct": "sigara",
    "choices": [
      "-mEk için",
      "iyice",
      "ne tesadüf",
      "sigara"
    ]
  },
  {
    "question": "Geld",
    "correct": "para",
    "choices": [
      "para",
      "Avusturyalı",
      "sanmak",
      "vermek"
    ]
  },
  {
    "question": "Stift",
    "correct": "kalem",
    "choices": [
      "otobüs",
      "m. Vorname + Bey",
      "şoför",
      "kalem"
    ]
  },
  {
    "question": "MP3-Player",
    "correct": "mp3 çalar",
    "choices": [
      "mp3 çalar",
      "Yunalı",
      "bin",
      "dört"
    ]
  },
  {
    "question": "Kaugummi",
    "correct": "çiklet",
    "choices": [
      "çiklet",
      "memur",
      "hayırlı işler",
      "kimin?"
    ]
  },
  {
    "question": "Feuerzeug",
    "correct": "çakmak",
    "choices": [
      "nasılsınız?",
      "çakmak",
      "hobi",
      "bilmiyorum"
    ]
  },
  {
    "question": "ältere Schwester",
    "correct": "abla",
    "choices": [
      "duvar",
      "hafta",
      "abla",
      "beraber"
    ]
  },
  {
    "question": "älterer Bruder",
    "correct": "ağabey [abi]",
    "choices": [
      "palto",
      "fena",
      "ağabey [abi]",
      "yedi"
    ]
  },
  {
    "question": "Schwester",
    "correct": "kiz kardeş",
    "choices": [
      "o",
      "Japon",
      "kiz kardeş",
      "gri"
    ]
  },
  {
    "question": "Bruder",
    "correct": "erkek kardeş",
    "choices": [
      "renk, rengi",
      "erkek kardeş",
      "yaşında",
      "-İ dinlemek"
    ]
  },
  {
    "question": "Auto",
    "correct": "araba",
    "choices": [
      "ayrıca",
      "tekrar eder misiniz?",
      "araba",
      "vermek"
    ]
  },
  {
    "question": "Motorrad",
    "correct": "motosiklet",
    "choices": [
      "postane",
      "uyruk, uyruğu",
      "motosiklet",
      "berber"
    ]
  },
  {
    "question": "Diplom",
    "correct": "diploma",
    "choices": [
      "bunlar",
      "diploma",
      "bu ne demek?",
      "televizyon"
    ]
  },
  {
    "question": "fernsehen",
    "correct": "televizyon izlemek",
    "choices": [
      "meslek, mesleği",
      "-İ beğenmek",
      "gözlükçü",
      "televizyon izlemek"
    ]
  },
  {
    "question": "(ver)folgen",
    "correct": "-İ izlemek",
    "choices": [
      "önemli",
      "sence",
      "-İ izlemek",
      "beyaz tahta"
    ]
  },
  {
    "question": "telefonieren",
    "correct": "telefon etmek",
    "choices": [
      "peki",
      "Amerikan",
      "lokanta",
      "telefon etmek"
    ]
  },
  {
    "question": "tun; machen",
    "correct": "etmek (ed-)",
    "choices": [
      "meslek, mesleği",
      "gözlük, gözlüğü",
      "etmek (ed-)",
      "tahta"
    ]
  },
  {
    "question": "bar Bar",
    "correct": "konser Konzert",
    "choices": [
      "konser Konzert",
      "ayrı",
      "nereye?",
      "Amerikan"
    ]
  },
  {
    "question": "tanzuen",
    "correct": "dans etmek",
    "choices": [
      "dans etmek",
      "bu da",
      "babaanne",
      "müzik; müziği"
    ]
  },
  {
    "question": "Tanz",
    "correct": "dans",
    "choices": [
      "tekrar yapmak",
      "hayır",
      "sizi dinliyorum",
      "dans"
    ]
  },
  {
    "question": "Musik",
    "correct": "müzik; müziği",
    "choices": [
      "müzik; müziği",
      "hoş bulduk",
      "sekiz",
      "ders"
    ]
  },
  {
    "question": "Kino",
    "correct": "sinema",
    "choices": [
      "uyruk, uyruğu",
      "iyi",
      "bu akşam",
      "sinema"
    ]
  },
  {
    "question": "Freizeit",
    "correct": "boş zaman",
    "choices": [
      "meslek, mesleği",
      "boş zaman",
      "banka",
      "on"
    ]
  },
  {
    "question": "frei",
    "correct": "boş",
    "choices": [
      "eş",
      "hiç + Verneinung",
      "boş",
      "orada"
    ]
  },
  {
    "question": "wohin?",
    "correct": "nereye?",
    "choices": [
      "bu da",
      "nereye?",
      "bilgisayar",
      "banka"
    ]
  },
  {
    "question": "oder",
    "correct": "veya",
    "choices": [
      "veya",
      "elli",
      "meslek, mesleği",
      "ilk"
    ]
  },
  {
    "question": "müde",
    "correct": "yorgun",
    "choices": [
      "yorgun",
      "-İ kurmak",
      "bankacı",
      "gece"
    ]
  },
  {
    "question": "Straße",
    "correct": "sokak, sokağı",
    "choices": [
      "yeterince",
      "sokak, sokağı",
      "dul",
      "sinema"
    ]
  },
  {
    "question": "morgens",
    "correct": "sabahleyin",
    "choices": [
      "için",
      "burada",
      "zor",
      "sabahleyin"
    ]
  },
  {
    "question": "sichtreffen",
    "correct": "buluşmak",
    "choices": [
      "tamam",
      "buluşmak",
      "tercume etmek",
      "Rus"
    ]
  },
  {
    "question": "selbstverständlich; natürlich",
    "correct": "elbette",
    "choices": [
      "profesör",
      "tezgâhtarlık, tezgâhtarlığı",
      "evet",
      "elbette"
    ]
  },
  {
    "question": "schon",
    "correct": "henüz",
    "choices": [
      "kahvaltı",
      "henüz",
      "aşçı",
      "resim çizmek"
    ]
  },
  {
    "question": "noch nicht",
    "correct": "henüz + Verneinung",
    "choices": [
      "oturmak",
      "ödev",
      "henüz + Verneinung",
      "sigara"
    ]
  },
  {
    "question": "heute Abend",
    "correct": "bu akşam",
    "choices": [
      "çocuk, çocuğu",
      "bu akşam",
      "-İ dinlemek",
      "size"
    ]
  },
  {
    "question": "Abend",
    "correct": "akşam",
    "choices": [
      "memur",
      "meslek, mesleği",
      "akşam",
      "tabii"
    ]
  },
  {
    "question": "zuerst; zunächst",
    "correct": "önce",
    "choices": [
      "önce",
      "-E bakmak",
      "daha",
      "restoran"
    ]
  },
  {
    "question": "ich habe keine Lust",
    "correct": "canım istemiyor",
    "choices": [
      "Hollandalı",
      "İsviçreli",
      "şehir, şehri",
      "canım istemiyor"
    ]
  },
  {
    "question": "dann; also",
    "correct": "o zaman",
    "choices": [
      "ayrı",
      "ceket",
      "hiç bir zaman + Verneinung",
      "o zaman"
    ]
  },
  {
    "question": "was hälst du davon?",
    "correct": "ne dersin?",
    "choices": [
      "bir milyar",
      "kız",
      "ne dersin?",
      "mavi"
    ]
  },
  {
    "question": "einverstanden",
    "correct": "kabul",
    "choices": [
      "oda",
      "harf harf söyler misiniz?",
      "kabul",
      "hiç bir zaman + Verneinung"
    ]
  },
  {
    "question": "Baum",
    "correct": "ağaç, ağacı",
    "choices": [
      "çakmak",
      "gelecek",
      "ağaç, ağacı",
      "beğeniyorum"
    ]
  },
  {
    "question": "Diskothek",
    "correct": "diskotek, diskoteği",
    "choices": [
      "diskotek, diskoteği",
      "nerelisin?",
      "yemek, yemeği",
      "çakmak"
    ]
  },
  {
    "question": "Blatt; Papier",
    "correct": "kâğıt, kâğıdı",
    "choices": [
      "görmek",
      "sizi tanıştırayım",
      "lamba",
      "kâğıt, kâğıdı"
    ]
  },
  {
    "question": "zurückkommen; zurückkehren",
    "correct": "dönmek",
    "choices": [
      "dönmek",
      "öyle mi?",
      "hayırlı işler",
      "fakat"
    ]
  },
  {
    "question": "Oper",
    "correct": "opera",
    "choices": [
      "opera",
      "Amerikalı",
      "profesör",
      "Erzurumlu"
    ]
  },
  {
    "question": "nie(mals)",
    "correct": "hiç bir zaman + Verneinung",
    "choices": [
      "soru sormak",
      "bu kim?",
      "sarı",
      "hiç bir zaman + Verneinung"
    ]
  },
  {
    "question": "heute",
    "correct": "bugün",
    "choices": [
      "oturmak",
      "Alman",
      "az",
      "bugün"
    ]
  },
  {
    "question": "heute Nacht",
    "correct": "bu gece",
    "choices": [
      "bu gece",
      "büfe",
      "sadece",
      "sandalye"
    ]
  },
  {
    "question": "Nacht",
    "correct": "gece",
    "choices": [
      "hoşça kal",
      "gece",
      "kurun",
      "ayrıca"
    ]
  },
  {
    "question": "übersetzen; dolmetschen",
    "correct": "tercume etmek",
    "choices": [
      "iyi değil",
      "doksan",
      "para",
      "tercume etmek"
    ]
  },
  {
    "question": "frühstücken",
    "correct": "kahvaltı etmek",
    "choices": [
      "kahvaltı etmek",
      "nasıl?",
      "emin",
      "var"
    ]
  },
  {
    "question": "Frühstück",
    "correct": "kahvaltı",
    "choices": [
      "kahvaltı",
      "dokuz",
      "yarın",
      "beyaz tahta"
    ]
  },
  {
    "question": "helfen",
    "correct": "-E yardım etmek",
    "choices": [
      "-E bakmak",
      "-E yardım etmek",
      "televizyon",
      "efendim?"
    ]
  },
  {
    "question": "Hilfe",
    "correct": "yardım",
    "choices": [
      "ya",
      "hiç bir zaman + Verneinung",
      "tamam",
      "yardım"
    ]
  },
  {
    "question": "Stuhl",
    "correct": "sandalye",
    "choices": [
      "postacı",
      "için",
      "dört",
      "sandalye"
    ]
  },
  {
    "question": "Computer",
    "correct": "bilgisayar",
    "choices": [
      "yoksa",
      "bilgisayar",
      "yeterince",
      "günaydın"
    ]
  },
  {
    "question": "Heft",
    "correct": "defter",
    "choices": [
      "bu akşam",
      "defter",
      "sizce",
      "-DEn beri"
    ]
  },
  {
    "question": "(Schreib)Tafel",
    "correct": "tahta",
    "choices": [
      "her",
      "tahta",
      "yaşında",
      "Türksünüz"
    ]
  },
  {
    "question": "Schrank",
    "correct": "dolap, dolabı",
    "choices": [
      "ad",
      "Azeri, Azerbaycanlı",
      "dolap, dolabı",
      "tekrar etmek"
    ]
  },
  {
    "question": "groß",
    "correct": "büyük",
    "choices": [
      "iyi",
      "çabuk",
      "büyük",
      "Çin"
    ]
  },
  {
    "question": "ruhig; gemütlich",
    "correct": "rahat",
    "choices": [
      "bu akşam",
      "tatilde",
      "ya siz?",
      "rahat"
    ]
  },
  {
    "question": "Mantel",
    "correct": "palto",
    "choices": [
      "biraz",
      "palto",
      "yapmak",
      "Zürih"
    ]
  },
  {
    "question": "Wand",
    "correct": "duvar",
    "choices": [
      "boş",
      "duvar",
      "altmiş",
      "kötü"
    ]
  },
  {
    "question": "Landkarte",
    "correct": "harita",
    "choices": [
      "harita",
      "çok",
      "yedi",
      "aynı zamanda"
    ]
  },
  {
    "question": "Plakat",
    "correct": "afiş",
    "choices": [
      "ağabey [abi]",
      "kişi",
      "yüz",
      "afiş"
    ]
  },
  {
    "question": "Whiteboard",
    "correct": "beyaz tahta",
    "choices": [
      "İngilizce",
      "birkaç",
      "dakika",
      "beyaz tahta"
    ]
  },
  {
    "question": "rot",
    "correct": "kırmızı",
    "choices": [
      "neredeyse",
      "ağabey [abi]",
      "ilginç",
      "kırmızı"
    ]
  },
  {
    "question": "Blume",
    "correct": "çiçek çiçeği",
    "choices": [
      "çiçek çiçeği",
      "aşçı",
      "-mEk için",
      "bir milyon"
    ]
  },
  {
    "question": "schwarz",
    "correct": "siyah",
    "choices": [
      "etmek (ed-)",
      "lokanta",
      "siyah",
      "adam"
    ]
  },
  {
    "question": "wessen ist?; wem gehört?",
    "correct": "kimin?",
    "choices": [
      "efendim?",
      "Alman",
      "telefon etmek",
      "kimin?"
    ]
  },
  {
    "question": "sicher",
    "correct": "emin",
    "choices": [
      "elbette",
      "konser Konzert",
      "emin",
      "ya"
    ]
  },
  {
    "question": "klein",
    "correct": "küçük",
    "choices": [
      "işte",
      "küçük",
      "televizyon izlemek",
      "mp3 çalar"
    ]
  },
  {
    "question": "grau",
    "correct": "gri",
    "choices": [
      "gri",
      "kendisi",
      "görmek",
      "aile fotoğrafı"
    ]
  },
  {
    "question": "Stereoanlage",
    "correct": "müzik seti",
    "choices": [
      "Türkçe",
      "-E bakmak",
      "butikte",
      "müzik seti"
    ]
  },
  {
    "question": "vielleicht",
    "correct": "belki",
    "choices": [
      "bana zor geliyor",
      "belki",
      "tanımak",
      "şunlar"
    ]
  },
  {
    "question": "grün",
    "correct": "yeşil",
    "choices": [
      "zevk için",
      "Norveçli",
      "yeşil",
      "önce"
    ]
  },
  {
    "question": "blau",
    "correct": "mavi",
    "choices": [
      "Türkçe",
      "mavi",
      "süzlük, sözlüğü",
      "yeterince"
    ]
  },
  {
    "question": "gelb",
    "correct": "sarı",
    "choices": [
      "erkek kardeş",
      "bana zor geliyor",
      "sarı",
      "harita"
    ]
  },
  {
    "question": "braun",
    "correct": "kahverengi",
    "choices": [
      "hayır",
      "Suriyeli",
      "kahverengi",
      "tanıştığımıza memnun oldum"
    ]
  },
  {
    "question": "welche Farbe?",
    "correct": "ne renk?",
    "choices": [
      "arkadaş",
      "opera",
      "ne renk?",
      "merhaba"
    ]
  },
  {
    "question": "Farbe",
    "correct": "renk, rengi",
    "choices": [
      "kimler?",
      "renk, rengi",
      "evet",
      "ne renk?"
    ]
  },
  {
    "question": "ich glaube",
    "correct": "sanırım",
    "choices": [
      "Suriyeli",
      "berber",
      "sanırım",
      "kahverengi"
    ]
  },
  {
    "question": "glauben",
    "correct": "sanmak",
    "choices": [
      "ne iş yapıyorsunuz?",
      "sanmak",
      "baba",
      "şoför"
    ]
  },
  {
    "question": "interessant",
    "correct": "enteresan",
    "choices": [
      "enteresan",
      "-DEn sonra",
      "medenî hâl",
      "müzik seti"
    ]
  },
  {
    "question": "unsympathisch",
    "correct": "antipatik",
    "choices": [
      "musunuz?",
      "onlar",
      "antipatik",
      "sence"
    ]
  },
  {
    "question": "munter",
    "correct": "dinç",
    "choices": [
      "dinç",
      "canım istemiyor",
      "değil mi?",
      "meslek, mesleği"
    ]
  },
  {
    "question": "unwichtig",
    "correct": "önemsiz",
    "choices": [
      "palto",
      "tahta",
      "önemsiz",
      "tekrar eder misiniz?"
    ]
  },
  {
    "question": "ungemütlich",
    "correct": "rahatsız",
    "choices": [
      "rahatsız",
      "avlu",
      "biraz",
      "gri"
    ]
  },
  {
    "question": "fällt mir schwer",
    "correct": "bana zor geliyor",
    "choices": [
      "İtalyan",
      "etmek (ed-)",
      "kaç?",
      "bana zor geliyor"
    ]
  },
  {
    "question": "Satz",
    "correct": "cümle",
    "choices": [
      "zamanım yok",
      "Danimarkalı",
      "cümle",
      "gazeteci"
    ]
  },
  {
    "question": "Pause",
    "correct": "teneffüs",
    "choices": [
      "teneffüs",
      "işte",
      "soyadım",
      "mavi"
    ]
  },
  {
    "question": "gar nichts",
    "correct": "hiçbir şey + Verneinung",
    "choices": [
      "afiş",
      "hiçbir şey + Verneinung",
      "başarılar",
      "avukat"
    ]
  },
  {
    "question": "tatsächlich? ist es so?",
    "correct": "öyle mi?",
    "choices": [
      "Hollandalı",
      "hangi?",
      "tekrar",
      "öyle mi?"
    ]
  },
  {
    "question": "ganz; alle(s)",
    "correct": "bütün",
    "choices": [
      "bütün",
      "Hollandalı",
      "kendisi",
      "hafta"
    ]
  },
  {
    "question": "Pausenhof",
    "correct": "avlu",
    "choices": [
      "görüşmek üzere",
      "iyi günler",
      "avlu",
      "henüz + Verneinung"
    ]
  },
  {
    "question": "spielen",
    "correct": "oynamak",
    "choices": [
      "oynamak",
      "tanıştığımıza memnun oldum",
      "Rus",
      "kahvaltı etmek"
    ]
  },
  {
    "question": "zeichen; malen",
    "correct": "resim çizmek",
    "choices": [
      "Çin",
      "resim çizmek",
      "bana zor geliyor",
      "yapmak"
    ]
  },
  {
    "question": "Bild; Zeichnung",
    "correct": "resim, resmi",
    "choices": [
      "etmek (ed-)",
      "en az",
      "resim, resmi",
      "daha"
    ]
  },
  {
    "question": "zeichnen",
    "correct": "çizmek",
    "choices": [
      "ne zamandan beri?",
      "memnun oldum",
      "çizmek",
      "okul"
    ]
  },
  {
    "question": "Überraschung",
    "correct": "sürpriz",
    "choices": [
      "-mEk için",
      "sürpriz",
      "-İ kurmak",
      "sinema"
    ]
  },
  {
    "question": "Liebe(r,s)",
    "correct": "canım",
    "choices": [
      "gözlük, gözlüğü",
      "ayrı",
      "röportaj",
      "canım"
    ]
  },
  {
    "question": "Zimmer; Raum",
    "correct": "oda",
    "choices": [
      "yazmak",
      "dede",
      "oda",
      "kötü"
    ]
  },
  {
    "question": "Aufgabe",
    "correct": "ödev",
    "choices": [
      "İrlandalı",
      "ödev",
      "şoför",
      "satmak"
    ]
  },
  {
    "question": "Essen",
    "correct": "yemek, yemeği",
    "choices": [
      "opera",
      "az",
      "yemek, yemeği",
      "yaşında"
    ]
  },
  {
    "question": "sehen",
    "correct": "görmek",
    "choices": [
      "görmek",
      "henüz",
      "anne",
      "İngilizce"
    ]
  },
  {
    "question": "wen?",
    "correct": "kimi?",
    "choices": [
      "gidiyorum",
      "kimi?",
      "kişi",
      "telefon"
    ]
  },
  {
    "question": "geben",
    "correct": "vermek",
    "choices": [
      "vermek",
      "neden?",
      "hiçbir şey + Verneinung",
      "yoksa"
    ]
  },
  {
    "question": "Hobby",
    "correct": "hobi",
    "choices": [
      "efendim?",
      "hobi",
      "beş",
      "dikkat edin"
    ]
  },
  {
    "question": "wohl; denn; obwohl",
    "correct": "acaba (in Fragen)",
    "choices": [
      "masa",
      "acaba (in Fragen)",
      "pek + Verneinung",
      "boş"
    ]
  },
  {
    "question": "oder (in Alternativen)",
    "correct": "yoksa",
    "choices": [
      "büro",
      "yoksa",
      "sporcu",
      "ok iyi"
    ]
  },
  {
    "question": "ausreichend",
    "correct": "yeterince",
    "choices": [
      "yeterince",
      "acaba (in Fragen)",
      "televizyon",
      "tekrar yapın"
    ]
  },
  {
    "question": "erste(r,s)",
    "correct": "ilk",
    "choices": [
      "bisiklet",
      "ilk",
      "İspanyolca",
      "yapmak"
    ]
  },
  {
    "question": "wiederholen Sie",
    "correct": "tekrar yapın",
    "choices": [
      "bu gece",
      "kişi",
      "tekrar yapın",
      "boş zaman"
    ]
  },
  {
    "question": "wiederholen",
    "correct": "tekrar yapmak",
    "choices": [
      "m. Vorname + Bey",
      "tekrar yapmak",
      "köy",
      "hiç bir zaman + Verneinung"
    ]
  },
  {
    "question": "Wiederholung",
    "correct": "tekrar",
    "choices": [
      "adin ne?",
      "resim çizmek",
      "tekrar",
      "var"
    ]
  },
  {
    "question": "Wort",
    "correct": "kelime",
    "choices": [
      "doktor",
      "hemşire",
      "tekrar yapmak",
      "kelime"
    ]
  },
  {
    "question": "lernen Sie auswendig",
    "correct": "ezberleyin",
    "choices": [
      "gibi",
      "Ankaralı",
      "üniversite",
      "ezberleyin"
    ]
  },
  {
    "question": "auswendig lernen",
    "correct": "-İ ezberlemek",
    "choices": [
      "zor",
      "biraz",
      "çiçek çiçeği",
      "-İ ezberlemek"
    ]
  },
  {
    "question": "viel Erfolg",
    "correct": "başarılar",
    "choices": [
      "postacı",
      "başarılar",
      "şu an",
      "ya siz?"
    ]
  },
  {
    "question": "nun",
    "correct": "şu an",
    "choices": [
      "sizce",
      "evli",
      "müzik; müziği",
      "şu an"
    ]
  },
  {
    "question": "schlecht",
    "correct": "fena",
    "choices": [
      "rahat",
      "fena",
      "siz",
      "yine"
    ]
  },
  {
    "question": "immer noch",
    "correct": "hâlâ + Verneinung",
    "choices": [
      "Türkiye'ye",
      "yaşamak",
      "hâlâ + Verneinung",
      "kimi?"
    ]
  },
  {
    "question": "genug; ausreichend",
    "correct": "yeterli",
    "choices": [
      "nasıl?",
      "yeterli",
      "müzik seti",
      "küçük"
    ]
  },
  {
    "question": "einfach",
    "correct": "basit",
    "choices": [
      "alo?",
      "basit",
      "-İ beğenmek",
      "konuşmak"
    ]
  },
  {
    "question": "kurz",
    "correct": "kısa",
    "choices": [
      "arkadaşım",
      "ne zamandan beri?",
      "kısa",
      "istemek"
    ]
  },
  {
    "question": "bilden Sie",
    "correct": "kurun",
    "choices": [
      "kurun",
      "dolap, dolabı",
      "iyice",
      "sizi tanıştırayım"
    ]
  },
  {
    "question": "bilden",
    "correct": "-İ kurmak",
    "choices": [
      "kaç?",
      "öyle mi?",
      "-İ kurmak",
      "diploma"
    ]
  },
  {
    "question": "nunmehr",
    "correct": "artık",
    "choices": [
      "kantin",
      "artık",
      "yaş",
      "boş zaman"
    ]
  },
  {
    "question": "fast",
    "correct": "neredeyse",
    "choices": [
      "para",
      "yeşil",
      "neredeyse",
      "nereli?"
    ]
  },
  {
    "question": "passen Sie auf",
    "correct": "dikkat edin",
    "choices": [
      "hemşire",
      "hangi?",
      "dikkat edin",
      "fena değil"
    ]
  },
  {
    "question": "aufpassen",
    "correct": "dikkat etmek",
    "choices": [
      "restoran",
      "ilginç",
      "ne iş yapıyorsunuz?",
      "dikkat etmek"
    ]
  }
];