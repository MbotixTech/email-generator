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
> - `mbotixtech@gmail.com`  
> - `m.botixtech@gmail.com`  
> - `mbotix.tech@gmail.com`  
> Akan masuk ke inbox **yang sama**.

---

## ✨ Fitur Unggulan

- CLI interaktif & profesional (banner, warna, progress bar)
- Input email utama + jumlah maksimal kombinasi (limit 1000, biar tetap ringan)
- **Preview hasil** di terminal
- **Export** semua kombinasi ke `result.txt` (rapih & ada summary)
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
npm start
```

### Atau, jika file sudah executable:

```bash
./index.js
```

**Ikuti instruksi di terminal:**

* Masukkan email utama Gmail (misal: `mbotixtech@gmail.com`)
* Masukkan jumlah kombinasi (misal: `100`)
* Tool akan generate kombinasi, tampil progress, dan save hasil ke `result.txt`

---

## 📂 Output

* File **result.txt** berisi semua kombinasi email
* Format rapih + summary info + timestamp

---

## 🛠️ Dependencies (Tools):

* [`inquirer`](https://www.npmjs.com/package/inquirer) - Input interaktif
* [`chalk`](https://www.npmjs.com/package/chalk) - Warna di terminal
* [`figlet`](https://www.npmjs.com/package/figlet) - Banner ASCII art
* [`boxen`](https://www.npmjs.com/package/boxen) - Kotak pesan/info
* [`fs`](https://nodejs.org/api/fs.html) - File system (bawaan Node.js)
* [`path`](https://nodejs.org/api/path.html) - Path utilities (bawaan Node.js)

---

## 🔒 Catatan Penting

* **Jangan gunakan untuk aktivitas spam atau hal yang melanggar aturan Gmail!**
* Tool ini hanya generate kombinasi, **tidak membuat akun Gmail baru**
* Limit maksimal 1000 kombinasi sekali generate (bisa diubah di kodenya kalau perlu)
* Semua kombinasi hanya berlaku di Gmail, **bukan email provider lain**

---

## 📄 Lisensi

MIT License
© 2025 [MbotixTECH](https://mbotix.tech)

---

## 👋 Kontak & Dukungan

* Email: [mbotixtech@gmail.com](mailto:mbotixtech@gmail.com)
* Website: [https://mbotix.tech](https://mbotix.tech)
* GitHub: [MbotixTech](https://github.com/MbotixTech)

---

**Powered by MbotixTECH – Professional Email Tools**
