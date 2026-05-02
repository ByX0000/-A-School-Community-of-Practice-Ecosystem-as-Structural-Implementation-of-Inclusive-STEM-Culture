# GİKAL Topluluklar Kulübü

> **"Bir Çatı, Bin Fikir"**
> Göztepe İhsan Kurşunoğlu Anadolu Lisesi · 2025–2026 Eğitim-Öğretim Yılı

Tek çatı altında **20 topluluk**, **6 kategori**, **350 öğrenci**. Bu site kulübün resmi tanıtım, planlama ve takip platformudur — yıllık plan, interaktif checklist (90 görev), aylık takvim, stratejik yol haritası ve performans göstergelerini tek bir sayfada toplar.

## Özellikler

- **20 topluluk vitrini** — kategori bazlı filtreleme, üye sayısı, açıklama
- **6 kategori dağılım grafiği** — animasyonlu çubuk grafik
- **Aylık faaliyet takvimi** — Eylül → Haziran döngüsü
- **İnteraktif yıllık checklist** — 6 faz, 90 görev, lokalstorage'da kalıcı tıklama, ilerleme çubuğu, faz bazlı sekme
- **4 çeyreklik yol haritası** — Q3/2025 → Q2/2026 stratejik kilometre taşları
- **9 KPI kartı** — yıl sonu hedefleri
- **Bütçe donut grafiği** — yıllık dağılım (5 kalem)
- **Dünyadan ilham veren 10 öğrenci organizasyonu**
- **Yazdırma desteği** — checklist'i fiziksel kopyaya dönüştür
- **Tamamen responsive** — mobil/tablet/masaüstü
- **Sıfır build adımı** — saf HTML/CSS/JS, Tailwind CDN

## Klasör Yapısı

```
gikal-topluluklar/
├── index.html       # Tüm site yapısı (tek sayfa)
├── data.js          # 20 topluluk, takvim, checklist, KPI verisi
├── app.js           # İnteraktif davranış (filtreleme, checklist, vb.)
├── vercel.json      # Vercel deploy ayarları
└── README.md        # Bu dosya
```

## GitHub'a Yükleme (3 Adım)

```bash
# 1. Yerel klasörde
cd gikal-topluluklar
git init
git add .
git commit -m "İlk yayın: GİKAL Topluluklar Kulübü"

# 2. GitHub'da yeni repo oluştur (boş)
# https://github.com/new → ad: gikal-topluluklar

# 3. Yerelden GitHub'a push
git remote add origin https://github.com/ByX0000/gikal-topluluklar.git
git branch -M main
git push -u origin main
```

## Vercel'a Deploy (2 Adım)

1. **vercel.com** → "New Project" → GitHub'dan `gikal-topluluklar` reposunu seç
2. "Deploy" tuşuna bas — Vercel otomatik olarak statik site olarak yayınlar

> Build adımı yok. Framework: **Other**. Output Directory: **boş bırak**.

İlk deploy sonrası varsayılan adres: `gikal-topluluklar.vercel.app`
Özel domain bağlamak için Vercel → Settings → Domains.

## Düzenleme

**İçerik değiştirmek için sadece `data.js` dosyasını düzenle.** Tüm topluluk listesi, takvim, checklist görevleri ve KPI hedefleri buradadır. HTML veya CSS dosyalarına dokunmadan içerik yönetilebilir.

Örnek: 21. topluluk eklemek için `COMMUNITIES` dizisine yeni bir nesne ekle:

```js
{ rank: 21, name: 'Felsefe Topluluğu', cat: 'akademik', members: 12, pct: 3, desc: 'Antik Yunan'dan günümüze felsefi metin tartışmaları.' }
```

## Renk Paleti

| Token        | Hex       | Kullanım                   |
|--------------|-----------|----------------------------|
| `parchment`  | `#f5f1ea` | Ana zemin                  |
| `ink`        | `#0f0d12` | Birincil metin             |
| `ochre`      | `#c08838` | Vurgu, finans kategorisi   |
| `wine`       | `#5b1e2c` | Kayıt seksiyonu, akademik  |
| `midnight`   | `#1a2c4e` | Teknoloji kategorisi       |
| `forest`     | `#2d4a3e` | Sosyal sorumluluk          |
| `rust`       | `#a04a2c` | Sanat & kültür             |
| `plum`       | `#4a2347` | Uluslararası & diplomasi   |

## Tipografi

- **Display**: Fraunces (serif, başlıklar)
- **İtalik**: Instrument Serif (vurgulu italik)
- **Mono**: JetBrains Mono (etiketler, kod hissi)
- **Gövde**: Inter Tight (paragraflar)

Tüm fontlar Google Fonts üzerinden CDN olarak yüklenir.

## İletişim

**Hazırlayan:** Mesut Akatay — Kulüp Danışman Öğretmeni
**Onaylayan:** Necdet Bayındır — Okul Müdürü
**Kurum:** Göztepe İhsan Kurşunoğlu Anadolu Lisesi · OID: E10036477

---

© 2025–2026 GİKAL · MIT lisansı altında açık kaynak.
