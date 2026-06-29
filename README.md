# 🎬 ReelRate

**Rate • Review • Discover**

## Deskripsi

ReelRate merupakan aplikasi web full-stack yang dirancang sebagai platform untuk mengelola dan membagikan ulasan film. Pengguna dapat menambahkan data film, memberikan rating, menulis review, serta mengelola seluruh informasi melalui antarmuka yang sederhana dan responsif.

Aplikasi ini dikembangkan sebagai implementasi konsep Full Stack Web Development dengan memanfaatkan database MySQL sebagai media penyimpanan data. ReelRate menerapkan operasi Create, Read, Update, dan Delete (CRUD) pada data film dan review yang saling berelasi sehingga mampu memberikan pengalaman pengelolaan data yang terstruktur dan mudah digunakan.

---

## Teknologi yang Digunakan

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MySQL

---

# Cara Menjalankan Aplikasi

## 1. Clone Repository

```bash
git clone https://github.com/username/ReelRate.git](https://github.com/KresnaJelek713/ReelRate-Movie_Review_Website/tree/main
cd ReelRate
```

---

## 2. Menjalankan Backend

Masuk ke folder backend.

```bash
cd backend
```

Install seluruh dependency.

```bash
npm install
```

Buat file `.env` kemudian sesuaikan konfigurasi database.

Contoh:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=reelrate
PORT=5000
```

Jalankan backend.

```bash
npm run dev
```

Backend akan berjalan pada:

```
http://localhost:5000
```

---

## 3. Menjalankan Frontend

Buka terminal baru.

Masuk ke folder frontend.

```bash
cd frontend
```

Install dependency.

```bash
npm install
```

Jalankan aplikasi.

```bash
npm run dev
```

Frontend akan berjalan pada:

```
http://localhost:5173
```

---

## Struktur Project

```
ReelRate
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── config
│   └── server.js
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```
