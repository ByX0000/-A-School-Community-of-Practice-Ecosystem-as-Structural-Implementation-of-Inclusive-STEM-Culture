// ============================================================
// GİKAL TOPLULUKLAR KULÜBÜ — VERİ KATMANI
// Tüm site içeriği burada. Düzenlemek için sadece bu dosyayı değiştir.
// ============================================================

// 6 KATEGORİ
const CATEGORIES = [
  { id: 'finans',         name: 'Finans & Girişimcilik',        color: '#c08838', icon: '💼' },
  { id: 'teknoloji',      name: 'Teknoloji & İnovasyon',        color: '#1a2c4e', icon: '⚙️' },
  { id: 'akademik',       name: 'Akademik & Entelektüel',       color: '#5b1e2c', icon: '📚' },
  { id: 'sanat',          name: 'Sanat & Kültür',               color: '#a04a2c', icon: '🎭' },
  { id: 'sosyal',         name: 'Sosyal Sorumluluk',            color: '#2d4a3e', icon: '🌱' },
  { id: 'uluslararasi',   name: 'Uluslararası & Diplomasi',     color: '#4a2347', icon: '🌍' }
];

// 20 TOPLULUK (Grafikler belgesi tablosu — resmi sıralama)
const COMMUNITIES = [
  { rank: 1,  name: 'Yapay Zekâ Topluluğu',                     cat: 'teknoloji',    members: 25, pct: 7,  desc: 'AI araçları, ChatGPT/Claude prompt mühendisliği, makine öğrenmesi temelleri.' },
  { rank: 2,  name: 'Finans Topluluğu',                         cat: 'finans',       members: 22, pct: 6,  desc: 'Temel ekonomi, borsa simülasyonları, finansal okuryazarlık eğitimleri, portföy yönetimi yarışmaları.' },
  { rank: 3,  name: 'Kodlama & Yazılım Topluluğu',              cat: 'teknoloji',    members: 22, pct: 6,  desc: 'Python, JavaScript, web geliştirme, hackathon hazırlıkları, proje bazlı öğrenme.' },
  { rank: 4,  name: 'Girişimcilik Topluluğu',                   cat: 'finans',       members: 20, pct: 6,  desc: 'Start-up fikirleri geliştirme, iş planı yazımı, pitch sunumları, yerel girişimcilerle buluşmalar.' },
  { rank: 5,  name: 'Oyun Geliştirme Topluluğu',                cat: 'teknoloji',    members: 20, pct: 6,  desc: 'Unity/Unreal Engine, oyun tasarımı, indie oyun projeleri, game jam etkinlikleri.' },
  { rank: 6,  name: 'Kitap Okuma Topluluğu',                    cat: 'akademik',     members: 20, pct: 6,  desc: 'Aylık kitap seçimi, tartışma oturumları, yazar söyleşileri, kitap değişim etkinlikleri.' },
  { rank: 7,  name: 'MUN Topluluğu',                            cat: 'uluslararasi', members: 18, pct: 5,  desc: 'Diplomatik simülasyonlar, konferans katılımları, uluslararası ilişkiler eğitimi.' },
  { rank: 8,  name: 'Kripto & Blockchain Topluluğu',            cat: 'finans',       members: 18, pct: 5,  desc: 'Blockchain teknolojisi, Web3 projeleri, NFT ve DeFi tartışmaları.' },
  { rank: 9,  name: 'Robotik & Maker Topluluğu',                cat: 'teknoloji',    members: 18, pct: 5,  desc: 'Arduino, Raspberry Pi, 3D baskı, FIRST Robotik (FRC) yarışmalarına hazırlık.' },
  { rank: 10, name: 'Münazara Topluluğu',                       cat: 'akademik',     members: 18, pct: 5,  desc: 'Türkçe ve İngilizce münazara, retorik eğitimi, ulusal yarışmalara katılım.' },
  { rank: 11, name: 'Sinema & Film Topluluğu',                  cat: 'sanat',        members: 18, pct: 5,  desc: 'Film analizleri, kısa film yapımı, sinema tarihi, film festivali organizasyonu.' },
  { rank: 12, name: 'Çevre & Sürdürülebilirlik Topluluğu',      cat: 'sosyal',       members: 16, pct: 5,  desc: 'Geri dönüşüm projeleri, karbon ayak izi azaltma, çevre kampanyaları, yeşil okul girişimleri.' },
  { rank: 13, name: 'Fotoğraf & Görsel Sanatlar Topluluğu',     cat: 'sanat',        members: 16, pct: 5,  desc: 'Fotoğraf teknikleri, dijital düzenleme, sergi organizasyonu, sokak fotoğrafçılığı.' },
  { rank: 14, name: 'Bilim & Araştırma Topluluğu',              cat: 'akademik',     members: 16, pct: 5,  desc: 'TÜBİTAK projeleri, bilim fuarları, deney atölyeleri, araştırma metodolojisi.' },
  { rank: 15, name: 'Tiyatro & Drama Topluluğu',                cat: 'sanat',        members: 15, pct: 4,  desc: 'Sahne sanatları, doğaçlama, yıl sonu gösterisi, drama terapisi teknikleri.' },
  { rank: 16, name: 'Erasmus+ & eTwinning Topluluğu',           cat: 'uluslararasi', members: 15, pct: 4,  desc: 'Avrupa projeleri, uluslararası ortaklıklar, kültürel değişim programları.' },
  { rank: 17, name: 'Gönüllülük & Toplum Hizmeti Topluluğu',    cat: 'sosyal',       members: 14, pct: 4,  desc: 'Hayır projeleri, kan bağışı, huzurevi ziyaretleri, mahalle temizlik kampanyaları.' },
  { rank: 18, name: 'Matematik & Mantık Topluluğu',             cat: 'akademik',     members: 14, pct: 4,  desc: 'Olimpiyat hazırlık, problem çözme teknikleri, matematik tarihi, akıl oyunları.' },
  { rank: 19, name: 'Yaratıcı Yazarlık Topluluğu',              cat: 'sanat',        members: 13, pct: 4,  desc: 'Öykü, şiir, senaryo yazımı, edebiyat atölyeleri, dergi/fanzin çıkarma.' },
  { rank: 20, name: 'Akıl Sağlığı & Farkındalık Topluluğu',     cat: 'sosyal',       members: 12, pct: 3,  desc: 'Mental sağlık farkındalığı, akran desteği, stres yönetimi atölyeleri.' }
];

// YILLIK TAKVİM (Eylül → Haziran — evrak planı tablosu)
const CALENDAR = [
  { month: 'Eylül',   theme: 'Tanıtım & Kayıt Dönemi',        details: 'Tanıtım standı, ilgi anketi, üye kayıtları, topluluk lideri seçimleri', icon: '📋', color: '#c08838' },
  { month: 'Ekim',    theme: 'Toplulukların Aktifleşmesi',     details: 'İlk toplantılar, yıllık plan hazırlama, mentor eşleştirmeleri',         icon: '🌱', color: '#2d4a3e' },
  { month: 'Kasım',   theme: 'Etkinlik Maratonu',              details: 'Her topluluktan en az 1 etkinlik, konuk konuşmacılar',                  icon: '🎯', color: '#a04a2c' },
  { month: 'Aralık',  theme: 'GİKAL Topluluklar Festivali',   details: 'Tüm toplulukların ortak sergisi, yarışmalar, ödül töreni',              icon: '✨', color: '#5b1e2c' },
  { month: 'Ocak',    theme: 'Yarıyıl Değerlendirmesi',        details: 'Performans raporları, yeni üye alımı, strateji revizyonu',              icon: '📊', color: '#1a2c4e' },
  { month: 'Şubat',   theme: 'Proje Geliştirme Dönemi',        details: 'TÜBİTAK, Erasmus+ proje başvuruları, hackathon hazırlıkları',           icon: '🔬', color: '#4a2347' },
  { month: 'Mart',    theme: 'Dış Etkinlikler',                details: 'Yarışma katılımları, okul dışı ziyaretler, şirket gezileri',            icon: '🚀', color: '#c08838' },
  { month: 'Nisan',   theme: 'Topluluklar Arası İşbirliği',    details: 'Ortak projeler, interdisipliner çalışmalar',                            icon: '🔗', color: '#2d4a3e' },
  { month: 'Mayıs',   theme: 'Yıl Sonu Değerlendirmesi',       details: 'Final sunumları, başarı sertifikaları, liderlik devri',                icon: '🏆', color: '#a04a2c' },
  { month: 'Haziran', theme: 'Yaz Planlaması',                 details: 'Yaz projeleri, gelecek yıl stratejisi, arşivleme',                     icon: '🗂️', color: '#5b1e2c' }
];

// 6 FAZLI CHECKLIST (90 görev)
const CHECKLIST_PHASES = [
  {
    id: 'kurulus',
    label: 'Faz 1 · Kuruluş & Hazırlık',
    period: 'Ağustos – Eylül',
    icon: '⚡',
    color: '#c08838',
    tasks: [
      'Okul müdürlüğüne kuruluş dosyasının resmi olarak teslim edilmesi',
      'Kulüp tüzüğünün ve yönergesinin son hali ile onaylanması',
      'Danışman öğretmen görev tebliği (Mesut Akatay) — yazılı belge',
      'e-Okul Sosyal Etkinlik Modülü\'nde kulüp kaydının açılması',
      '20 topluluk için boş klasör/dosya yapısının dijital ortamda kurulması',
      'Logo, kurumsal kimlik ve "Bir Çatı, Bin Fikir" görsel kimliği',
      'Web sitesi (GitHub + Vercel) ve sosyal medya hesaplarının açılması',
      'Tanıtım broşürü, A3 afiş ve sınıflara dağıtılacak kayıt formlarının basımı',
      'Üyelik Başvuru Formu, Liderlik Başvuru Formu, İlgi Alanı Anketi PDF/Form linkleri',
      'Etkinlik Planlama Şablonu ve Aylık Faaliyet Raporu Şablonu finalleştirme',
      'Okul kayıt haftası tanıtım programı (rehberlik servisi ile koordineli)',
      'Sınıf temsilcileri ve öğrenci konseyi ile ön bilgilendirme toplantısı',
      'Velilere yönelik tanıtım metninin hazırlanması ve okul iletişim kanalından duyuru',
      'Topluluk lideri olmaya aday öğrencilerin ön mülakat takvimi',
      'Açılış etkinliği için salon, ekipman ve davet listesi planı'
    ]
  },
  {
    id: 'baslangic',
    label: 'Faz 2 · Başlangıç & Üye Alımı',
    period: 'Eylül – Ekim',
    icon: '🌱',
    color: '#2d4a3e',
    tasks: [
      'Tanıtım standının açılması (en az 5 iş günü, ana koridor)',
      'Tüm sınıflara İlgi Alanı Anketi\'nin uygulanması',
      'Üyelik formu kabul süresinin başlatılması (resmi tarih duyurusu)',
      '20 topluluk için lider ve yardımcı seçimlerinin tamamlanması',
      'Topluluk Temsilcileri Konseyi\'nin ilk toplantısı',
      'Her topluluğun üye listesinin Genel Sekreter\'e teslimi',
      'Topluluk başına minimum 5 üye barajının kontrolü',
      'Çoklu üyelik dağılımının taranması (en fazla 3 topluluk kuralı)',
      'Lider eğitimi atölyesi 1: rol, sorumluluk, etik kurallar',
      'Lider eğitimi atölyesi 2: etkinlik planlama ve raporlama',
      'Açılış kokteyli / "Topluluklar Tanıtım Günü" etkinliği',
      'Resmi açılış basın bülteninin yayımı (web sitesi + sosyal medya)',
      'Mentor öğretmen-topluluk eşleştirmelerinin tamamlanması',
      'Yıllık plan şablonunun her topluluğa dağıtılması',
      'Eylül-Ekim aylık faaliyet raporlarının ilk teslim tarihi'
    ]
  },
  {
    id: 'aktivasyon',
    label: 'Faz 3 · Aktivasyon & İlk Etkinlikler',
    period: 'Kasım – Aralık',
    icon: '🎯',
    color: '#a04a2c',
    tasks: [
      'Her topluluktan en az 1 ana etkinliğin Kasım ayında gerçekleşmesi',
      'Konuk konuşmacı / dış paydaş davetleri (en az 5 etkinlik)',
      'İçerik üretimi: her etkinlikten 3 fotoğraf + 1 kısa video + 1 metin',
      'Kasım sonu konsey toplantısı: ilk değerlendirme',
      'GİKAL Topluluklar Festivali tarihinin ilanı (Aralık ortası)',
      'Festival için stand alanı, ekipman, jüri ve ödül listesi planlaması',
      'Festival tanıtım kampanyası (10 gün önceden başlayan duyuru zinciri)',
      'Festival günü: 20 topluluğun ortak sergisi ve sahne programı',
      'Festival kapsamında topluluklar arası mini yarışmalar',
      'Yılın ilk ödül töreni: en aktif 3 topluluk + en yaratıcı 3 proje',
      'Festival sonrası medya raporu ve teşekkür mesajları',
      'Aralık sonu mali rapor (Faz 1+2+3 harcamaları)',
      'Yarıyıl tatili önce arşivleme kontrolü (klasör yapısı tam mı?)',
      'Sosyal medya etkileşim raporu — takipçi, beğeni, yorum metrikleri',
      'Yarıyıl sonu danışman raporu (idareye sunulacak)'
    ]
  },
  {
    id: 'derinlesme',
    label: 'Faz 4 · Derinleşme & Proje Üretimi',
    period: 'Ocak – Şubat',
    icon: '🔬',
    color: '#1a2c4e',
    tasks: [
      'Yarıyıl başı strateji toplantısı (yönetim + temsilciler konseyi)',
      'Performans değerlendirme raporlarının hazırlanması',
      'Düşük performanslı toplulukların revize stratejisi',
      'Yeni üye alımı 2. dalga (boş kontenjanları doldur)',
      'TÜBİTAK 2204-A projeleri için topluluk başvurularının açılışı',
      'Erasmus+ ve eTwinning proje fikirlerinin toplanması',
      'Hackathon (Kodlama + Yapay Zekâ + Oyun Geliştirme ortak)',
      'Münazara turnuvası (okul içi eleme)',
      'Borsa simülasyonu yarışması (Finans + Girişimcilik ortak)',
      'Bilim atölyeleri serisi (haftalık)',
      'Yaratıcı Yazarlık dergi/fanzin ilk sayısının basıma hazırlığı',
      'Sinema topluluğu kısa film çekim takvimi',
      'Tiyatro topluluğu yıl sonu gösterisi metin/sahneleme provası',
      'Robotik topluluğu FRC NYC Regional hazırlığı (Nisan 9-12)',
      'Şubat sonu konsey toplantısı + kategori bazlı performans haritası'
    ]
  },
  {
    id: 'genisleme',
    label: 'Faz 5 · Genişleme & Dış İşbirlikleri',
    period: 'Mart – Nisan',
    icon: '🚀',
    color: '#4a2347',
    tasks: [
      'Yarışma katılımlarının resmi takibi (en az 10 ulusal/uluslararası)',
      'Şirket / üniversite ziyaretleri (Maltepe, Kadir Has, Türk-Alman protokolü kullan)',
      'MUN konferansları için delegasyon hazırlığı',
      'Topluluklar arası ortak proje şartnamesinin yayımlanması',
      'En az 5 interdisipliner ortak proje fikrinin onaylanması',
      'Erasmus+ KA121 hareketliliği koordinasyonu (tarih ve görevliler)',
      'Çevre topluluğu okul-mahalle temizlik kampanyası',
      'Gönüllülük topluluğu hayır kermesi / kan bağışı günü',
      'Akıl Sağlığı topluluğu farkındalık haftası etkinlik serisi',
      'Fotoğraf topluluğu yıllık sergi (okul fuayesi)',
      'Sosyal medya kampanyası: "20 topluluk, 20 hikâye"',
      'Mart sonu mali ara rapor',
      'Nisan ortası velilere açık etkinlik günü',
      'Sponsorluk dosyalarının hazırlanması (gelecek yıl için)',
      'Nisan sonu konsey toplantısı: yıl sonu sergi planlaması'
    ]
  },
  {
    id: 'kapanis',
    label: 'Faz 6 · Kapanış & Devir',
    period: 'Mayıs – Haziran',
    icon: '🏆',
    color: '#5b1e2c',
    tasks: [
      'Tüm toplulukların yıl sonu final sunumlarının hazırlığı',
      'Yıl sonu sergi/festivalin organizasyonu',
      'Başarı sertifikalarının basımı (her topluluk + ortak ödüller)',
      'Yılın Topluluk Lideri seçimi ve ödül töreni',
      'Yılın Aktif Üyesi seçimleri (her topluluk için)',
      'En İnovatif Proje, En Etkili Sosyal Sorumluluk Projesi ödülleri',
      'Topluluklar Arası İşbirliği Ödülü töreni',
      'Liderlik devir teslim toplantısı (yeni dönem hazırlığı)',
      'Yıl sonu kapsamlı mali raporun hazırlanması',
      'Yıl sonu performans göstergeleri raporu (KPI tablosu)',
      'Üye memnuniyet anketinin uygulanması ve raporlanması',
      'Web sitesi yıl sonu güncellemesi: arşiv + galeri',
      'GitHub deposunun temizlenmesi ve gelecek yıl branch\'inin açılması',
      'Yaz dönemi proje listesinin yayımı (gönüllü öğrenciler için)',
      'Gelecek yıl stratejik planı taslağı (Mayıs sonu hazır olmalı)'
    ]
  }
];

// 12 AYLIK YOL HARİTASI (stratejik milestone'lar)
const ROADMAP = [
  {
    phase: 'Q3 / 2025',
    title: 'Kuruluş Çeyreği',
    milestone: 'Eylül – Kasım',
    color: '#c08838',
    items: [
      { label: 'Resmi kuruluş', text: 'Tüzük, yönerge ve okul müdürlüğü onayı tamamlanır.' },
      { label: 'Yapısal kurulum', text: '20 topluluk lideri seçimi, konseyin oluşumu, dijital altyapı kurulumu.' },
      { label: 'İlk etkinlikler', text: 'Tanıtım standı, açılış etkinliği, her topluluğun ilk toplantısı.' }
    ]
  },
  {
    phase: 'Q4 / 2025',
    title: 'İvme Çeyreği',
    milestone: 'Aralık – Şubat',
    color: '#5b1e2c',
    items: [
      { label: 'Topluluklar Festivali', text: 'Aralık ortası — 20 topluluğun ortak sergisi ve sahne programı.' },
      { label: 'Yarıyıl değerlendirmesi', text: 'KPI raporu, strateji revizyonu, yeni üye alımı 2. dalgası.' },
      { label: 'Proje üretimi', text: 'TÜBİTAK 2204-A başvuruları, Erasmus+ proje fikirleri, hackathon.' }
    ]
  },
  {
    phase: 'Q1 / 2026',
    title: 'Genişleme Çeyreği',
    milestone: 'Mart – Mayıs',
    color: '#1a2c4e',
    items: [
      { label: 'Dış işbirlikleri', text: 'Üniversite protokolleri (Maltepe, Kadir Has, Türk-Alman) kullanılır.' },
      { label: 'Yarışma katılımı', text: 'En az 10 ulusal/uluslararası yarışmaya kayıt; FRC NYC, MUN konferansları.' },
      { label: 'İnterdisipliner', text: 'Topluluklar arası ortak projeler, kapsayıcı sergiler.' }
    ]
  },
  {
    phase: 'Q2 / 2026',
    title: 'Kapanış & Devir',
    milestone: 'Haziran – Ağustos',
    color: '#2d4a3e',
    items: [
      { label: 'Yıl sonu töreni', text: 'Sertifika dağıtımı, ödüller, liderlik devir-teslimi.' },
      { label: 'Arşiv ve raporlama', text: 'Mali rapor, KPI raporu, üye memnuniyet anketi, web arşivi.' },
      { label: '2026–2027 hazırlığı', text: 'Yeni dönem stratejik planı, sponsorluk dosyaları, gelecek yıl tüzüğü.' }
    ]
  }
];

// PERFORMANS GÖSTERGELERİ (KPI'lar)
const KPIS = [
  { metric: 'Toplam aktif üye',         target: '200+',   detail: 'Yıl sonunda minimum 200 aktif üye',           icon: '👥' },
  { metric: 'Topluluk başına üye',      target: '10+',    detail: 'Her toplulukta minimum 10 düzenli üye',       icon: '🌱' },
  { metric: 'Düzenlenen etkinlik',      target: '50+',    detail: 'Yılda en az 50 farklı etkinlik',              icon: '🎯' },
  { metric: 'Yarışma katılımı',         target: '10+',    detail: 'En az 10 ulusal/uluslararası yarışma',        icon: '🏅' },
  { metric: 'Ödül & derece',            target: '5+',     detail: 'En az 5 derece, ödül veya sertifika',         icon: '🏆' },
  { metric: 'Üye memnuniyeti',          target: '%80+',   detail: 'Yıl sonu anketinde memnuniyet eşiği',         icon: '✨' },
  { metric: 'Sosyal medya takipçi',     target: '1000+',  detail: 'Tüm platformlar toplam',                      icon: '📱' },
  { metric: 'Etkileşim oranı',          target: '%5+',    detail: 'Sosyal medya engagement rate',                icon: '📈' },
  { metric: 'Aktif danışman',           target: '1',      detail: 'Mesut Akatay — birleşik koordinasyon',        icon: '🎓' }
];

// BÜTÇE DAĞILIMI
const BUDGET = [
  { item: 'Etkinlik & organizasyon',    pct: 40, color: '#c08838' },
  { item: 'Malzeme & ekipman',          pct: 25, color: '#1a2c4e' },
  { item: 'Yarışma & konferans',        pct: 20, color: '#5b1e2c' },
  { item: 'Tanıtım & iletişim',         pct: 10, color: '#2d4a3e' },
  { item: 'Acil durum fonu',            pct: 5,  color: '#a04a2c' }
];

// İLHAM VEREN TOPLULUKLAR
const INSPIRATIONS = [
  { name: 'Key Club International',       origin: 'ABD · 1925',          desc: 'Dünyanın en eski ve en büyük lise hizmet organizasyonu. Toplum hizmeti ve liderlik geliştirmeye odaklanır.' },
  { name: 'DECA',                          origin: 'ABD / Uluslararası',  desc: '225.000+ üyesiyle girişimcilik, pazarlama ve finans alanında en büyük öğrenci organizasyonu.' },
  { name: 'FBLA',                          origin: 'ABD',                  desc: '200.000+ üyesiyle ABD\'nin en büyük iş dünyası öğrenci organizasyonu. Liderlik atölyeleri ve yarışmalar.' },
  { name: 'Blockchain at Berkeley',        origin: 'ABD',                  desc: 'Üniversite öğrencileri tarafından kurulan, Fortune 500 şirketlerine danışmanlık veren blockchain topluluğu.' },
  { name: 'Blockchain Education Network',  origin: 'Küresel',              desc: '35+ ülkede 160+ şubesiyle blockchain eğitimi veren uluslararası ağ.' },
  { name: 'Technovation',                  origin: 'Küresel',              desc: 'Genç kadınları mobil uygulama geliştirme ve girişimcilik konusunda güçlendiren küresel program.' },
  { name: 'Conrad Challenge',              origin: 'ABD',                  desc: 'Havacılık, siber güvenlik, enerji gibi 8 kategoride inovasyon yarışması düzenleyen platform.' },
  { name: 'Amnesty International Youth',   origin: 'Küresel',              desc: 'İnsan hakları savunuculuğu yapan gençlik kolları. 150+ ülkede aktif.' },
  { name: 'Roots & Shoots',                origin: 'Küresel',              desc: 'Jane Goodall tarafından kurulan çevre ve toplum odaklı gençlik hareketi.' },
  { name: 'Science Olympiad',              origin: 'ABD',                  desc: '5.800+ takımla bilim yarışmaları düzenleyen, STEM eğitimini destekleyen organizasyon.' }
];
