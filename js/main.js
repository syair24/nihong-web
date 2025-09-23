//============== notif ================
document.addEventListener('DOMContentLoaded', () => {
  const notif = document.getElementById('notif');
  const closeBtn = notif.querySelector('button');

  setTimeout(() => {
    notif.classList.add('show');
  }, 5000);

  closeBtn.addEventListener('click', () => {
    notif.classList.remove('show');
  });
});

//============== navigasi ================
// Ambil tombol hamburger dan elemen nav
const btnNav = document.querySelector('.nav-container .hamburger');
const navMenu = document.querySelector('.nav-container nav');

// Klik tombol hamburger → toggle menu & kunci scroll body
btnNav.addEventListener('click', function (e) {
  e.stopPropagation();
  navMenu.classList.toggle('show');

  if (navMenu.classList.contains('show')) {
    document.body.style.overflow = 'hidden'; // nonaktifkan scroll
  } else {
    document.body.style.overflow = ''; // aktifkan scroll lagi
  }
});

// Klik di luar area nav → tutup menu & balikin scroll
document.addEventListener('click', function (e) {
  if (!navMenu.contains(e.target) && !btnNav.contains(e.target)) {
    navMenu.classList.remove('show');
    document.body.style.overflow = '';
  }
});

// Klik salah satu link dalam nav → tutup menu & balikin scroll
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    document.body.style.overflow = '';
  });
});

// ==================================
// hiragana tabel hirakana.html
//===================================

// ============= zoom card big ================
// ambil elemen
const hiraganaCards = document.querySelectorAll('.card-container');
const zoomSection = document.getElementById('zoom-section');
const cardBig = document.querySelector('.card-big');
const closeBigCard = cardBig.querySelector('.close-btn');
const soundBtn = document.querySelector('.sound-btn'); // pastikan tombol ada di HTML

let currentText = ''; // simpan teks yang sedang ditampilkan

// tombol suara hanya dipasang sekali
soundBtn.addEventListener('click', () => {
  if (!currentText) return;

  const utterance = new SpeechSynthesisUtterance(currentText);
  utterance.lang = 'ja-JP';
  window.speechSynthesis.speak(utterance);
});

// fungsi untuk tampilkan zoom card
function showZoomCard(hiragana, meaning) {
  // hapus konten lama
  const oldContent = cardBig.querySelectorAll('h1, p');
  oldContent.forEach((el) => el.remove());

  // buat elemen baru
  const zoomCardHiragana = document.createElement('h1');
  zoomCardHiragana.textContent = hiragana;

  const zoomCardMeaning = document.createElement('p');
  zoomCardMeaning.textContent = meaning;

  // tambahkan di cardBig
  // taruh di awal child cardBig
  cardBig.insertBefore(zoomCardHiragana, cardBig.firstChild);
  cardBig.insertBefore(zoomCardMeaning, cardBig.firstChild.nextSibling);

  zoomSection.classList.add('show');

  // simpan teks untuk tombol suara
  currentText = hiragana;
}

// klik card
hiraganaCards.forEach((container) => {
  container.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;

    const hiraganaEl = card.querySelector('.char');
    const meaningEl = card.querySelector('.meaning');
    if (!hiraganaEl || !meaningEl) return;

    showZoomCard(hiraganaEl.textContent, meaningEl.textContent);
  });
});

// tombol close
closeBigCard.addEventListener('click', () => {
  zoomSection.classList.remove('show');
  cardBig.querySelectorAll('h1, p').forEach((el) => el.remove());
  currentText = ''; // reset teks saat ditutup
});
