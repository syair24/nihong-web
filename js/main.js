//notifikasi
function showNotif() {
  const notif = document.getElementById('notif');

  // reset animasi
  notif.style.display = 'block';
  notif.classList.remove('show-notif');
  void notif.offsetWidth;
  notif.classList.add('show-notif');

  // coba play audio dengan jeda
  setTimeout(() => {
    const audio = new Audio('assets/audio/notif.mp3');
    audio.play().catch((err) => {
      console.warn('Autoplay diblokir, menunggu interaksi user...');
      // kalau gagal, aktifkan listener 1x klik
      document.addEventListener(
        'click',
        () => {
          audio.play();
        },
        { once: true }
      );
    });
  }, 300);
}

window.addEventListener('load', () => {
  showNotif();
});

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
