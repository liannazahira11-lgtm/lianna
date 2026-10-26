// ===== 1. TOGGLE TEMA (TERANG PINK <-> GELAP) =====
const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

btnTema.addEventListener('click', function () {
  bodyHalaman.classList.toggle('dark-mode');

  if (bodyHalaman.classList.contains('dark-mode')) {
    btnTema.textContent = '☀️ Mode Terang';
  } else {
    btnTema.textContent = '🌙 Mode Gelap';
  }
});

// ===== 2. MODAL KIRIM PESAN =====
const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

btnBukaModal.addEventListener('click', function (event) {
  event.preventDefault();               // cegah link membuka email
  elemenModal.classList.add('show');    // tampilkan modal
});

btnTutupModal.addEventListener('click', function () {
  elemenModal.classList.remove('show'); // sembunyikan modal
});