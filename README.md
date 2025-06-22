# MbotixTECH Gmail Dot Combination Generator

## 📸 Tampilan Aplikasi

<div align="center">

### 🎨 Interface Utama
```
╔══════════════════════════════════════════════════════════════════════════════════════╗
║  ███╗   ███╗██████╗  ██████╗ ████████╗██╗██╗  ██╗████████╗███████╗ ██████╗██╗  ██╗  ║
║  ████╗ ████║██╔══██╗██╔═══██╗╚══██╔══╝██║╚██╗██╔╝╚══██╔══╝██╔════╝██╔════╝██║  ██║  ║
║  ██╔████╔██║██████╔╝██║   ██║   ██║   ██║ ╚███╔╝    ██║   █████╗  ██║     ███████║  ║
║  ██║╚██╔╝██║██╔══██╗██║   ██║   ██║   ██║ ██╔██╗    ██║   ██╔══╝  ██║     ██╔══██║  ║
║  ██║ ╚═╝ ██║██████╔╝╚██████╔╝   ██║   ██║██╔╝ ██╗   ██║   ███████╗╚██████╗██║  ██║  ║
║  ╚═╝     ╚═╝╚═════╝  ╚═════╝    ╚═╝   ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝  ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────┐
│ 🚀 Gmail Dot Combination Generator 🚀                      │
│ Generate all possible email combinations with dots         │
└─────────────────────────────────────────────────────────────┘

✅ MbotixTECH Generator Ready!

📧 Masukkan email Gmail utama: mbotixtech@gmail.com
🔢 Berapa banyak kombinasi yang ingin di-generate? 10

🔧 Memproses email kombinasi...

Progress: [██████████████████████████████] 100% (10/10)

✅ Proses selesai!
```

### 📊 Hasil Generate
```
┌─────────────────────────────────────────────────────────────┐
│ 📊 HASIL GENERATE EMAIL                                    │
│                                                             │
│ 🔢 Total kombinasi: 10                                     │
│ ⏱️  Waktu proses: 0.16 detik                               │
│ 📁 File tersimpan: result.txt                              │
│                                                             │
│ ✨ Semua kombinasi berhasil di-generate!                   │
└─────────────────────────────────────────────────────────────┘

📋 Preview hasil (5 pertama):
──────────────────────────────────────────────────
 1. mbotixtech@gmail.com
 2. m.botixtech@gmail.com
 3. mb.otixtech@gmail.com
 4. mbo.tixtech@gmail.com
 5. mbot.ixtech@gmail.com
... dan 5 kombinasi lainnya
──────────────────────────────────────────────────
```

### 🎉 Pesan Selesai
```
┌─────────────────────────────────────────────────────────────┐
│                     🎉 TERIMA KASIH! 🎉                    │
│                                                             │
│          Telah menggunakan MbotixTECH Email Generator      │
│          Follow kami untuk tools menarik lainnya!          │
│                                                             │
│          📧 Contact: mbotixtech@gmail.com                  │
│          🌐 Website: mbotix.tech                           │
│          🐙 GitHub: https://github.com/MbotixTech          │
└─────────────────────────────────────────────────────────────┘
```

</div>

---

## 🚀 Apa Ini?

**MbotixTECH Gmail Dot Combination Generator** adalah tool berbasis Node.js untuk menghasilkan semua kemungkinan kombinasi alamat email Gmail dengan titik (`.`) di username.  
Cocok untuk testing, multi-register, bypass duplicate check, dan kebutuhan profesional lain di dunia digital.

> **Fakta Unik:**  
> Gmail akan mengabaikan titik (`.`) di username.  
> Contoh:  
> - `mbotairdrop@gmail.com`  
> - `m.botairdrop@gmail.com`  
> - `mbot.airdrop@gmail.com`  
> Akan masuk ke inbox **yang sama**.

---

## ✨ Fitur Unggulan

- CLI interaktif & profesional (banner, warna, progress bar)
- Input email utama + jumlah maksimal kombinasi (limit 1000, biar tetap ringan)
- **Preview hasil** di terminal
- **Export** semua kombinasi ke `result.txt` (format clean, cuma email list)
- Friendly error & info (pakai `boxen`, `chalk`, `figlet`)
- Kode clean, mudah modif, cocok untuk dev & non-dev

---

## 📦 Instalasi

1. **Clone repo:**
   ```bash
   git clone https://github.com/MbotixTech/email-generator.git
   cd email-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **(Pastikan Node.js v16 atau di atasnya)**

---

## ⚡️ Cara Pakai

```bash
node index.js
```

### Atau, jika file sudah executable:

```bash
./index.js
```

**Ikuti instruksi di terminal:**

* Masukkan email utama Gmail (misal: `mbotairdrop@gmail.com`)
* Masukkan jumlah kombinasi (misal: `100`)
* Tool akan generate kombinasi, tampil progress, dan save hasil ke `result.txt`

---

## 📂 Output

File **result.txt** berisi daftar email kombinasi dalam format sederhana:

```
mbotixtech@gmail.com
m.botixtech@gmail.com
mb.otixtech@gmail.com
mbo.tixtech@gmail.com
mbot.ixtech@gmail.com
mboti.xtech@gmail.com
mbotix.tech@gmail.com
mbotixt.ech@gmail.com
mbotixte.ch@gmail.com
mbotixtech@gmail.com
```

* **Format clean**: Satu email per baris, tanpa nomor atau informasi tambahan
* **Ready to use**: Mudah di-copy, import ke tools lain, atau diproses lebih lanjut
