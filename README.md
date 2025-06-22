# MbotixTECH Gmail Dot Combination Generator

## 📸 Tampilan Aplikasi

<div align="center">

### 🎨 Interface Utama

```ini
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

```ini
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

```ini
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
>
> - `mbotixtech@gmail.com`
> - `m.botixtech@gmail.com`
> - `mbot.ixtech@gmail.com`  
>    Akan masuk ke inbox **yang sama**.

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

File **result.txt** berisi daftar email kombinasi dalam format sederhana:

```sh
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

---

## 📄 License
This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## ⚠️ Disclaimer & Tanggung Jawab

**PENTING: BACA SEBELUM MENGGUNAKAN**

### 🔒 Tanggung Jawab Pengguna
- **Penggunaan sepenuhnya menjadi tanggung jawab pengguna**
- Tool ini dibuat untuk tujuan **edukasi dan testing** yang sah
- Pengguna bertanggung jawab penuh atas segala konsekuensi dari penggunaan tool ini
- **MbotixTECH tidak bertanggung jawab** atas penyalahgunaan atau dampak negatif yang ditimbulkan

### ✅ Penggunaan yang Diperbolehkan
- Testing aplikasi web/sistem sendiri
- Demonstrasi konsep keamanan
- Penelitian akademis
- Pengembangan software

### ❌ Penggunaan yang Tidak Diperbolehkan
- Spam atau flooding email
- Melanggar Terms of Service platform
- Aktivitas ilegal atau merugikan pihak lain
- Bypass sistem keamanan tanpa izin

### 📝 Ketentuan Tambahan
- Tool ini **TIDAK** menyediakan akses ke akun email yang sudah ada
- Kombinasi email yang dihasilkan hanya untuk keperluan testing
- Pengguna wajib mematuhi hukum dan regulasi yang berlaku
- Gunakan dengan bijak dan bertanggung jawab

> **💡 Catatan:**  
> Dengan menggunakan tool ini, Anda menyetujui bahwa segala risiko dan tanggung jawab sepenuhnya berada di tangan Anda sebagai pengguna.
