# MbotixTECH Gmail Dot Combination Generator

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
- **Export** semua kombinasi ke `result.txt` (rapih & ada summary)
- Friendly error & info (pakai `boxen`, `chalk`, `figlet`)
- Kode clean, mudah modif, cocok untuk dev & non-dev

---

## 📦 Instalasi

1. **Clone repo:**
   ```bash
   git clone https://github.com/MbotixTech/gmail-dot-combo-generator.git
   cd gmail-dot-combo-generator
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
