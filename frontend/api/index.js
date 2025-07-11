// /api/index.js

const express = require('express');
const cors = require('cors');
const app = express();

// Konfigurasi CORS dasar untuk menerima semua permintaan
app.use(cors());

// Route untuk login (hanya untuk tes)
app.post('/login', (req, res) => {
  res.status(200).json({ message: 'Endpoint /login berhasil dijangkau!' });
});

// Route untuk tes umum
app.get('/test', (req, res) => {
  res.status(200).json({ message: 'API Vercel berjalan dengan baik!' });
});

// Export aplikasi untuk Vercel
module.exports = app;
