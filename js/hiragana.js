// loop hiragana card hiragana.html
const hiraganaGojuuon = [
  // A-I-U-E-O
  { char: 'あ', meaning: 'a' },
  { char: 'い', meaning: 'i' },
  { char: 'う', meaning: 'u' },
  { char: 'え', meaning: 'e' },
  { char: 'お', meaning: 'o' },

  // K-row
  { char: 'か', meaning: 'ka' },
  { char: 'き', meaning: 'ki' },
  { char: 'く', meaning: 'ku' },
  { char: 'け', meaning: 'ke' },
  { char: 'こ', meaning: 'ko' },

  // S-row
  { char: 'さ', meaning: 'sa' },
  { char: 'し', meaning: 'shi' },
  { char: 'す', meaning: 'su' },
  { char: 'せ', meaning: 'se' },
  { char: 'そ', meaning: 'so' },

  // T-row
  { char: 'た', meaning: 'ta' },
  { char: 'ち', meaning: 'chi' },
  { char: 'つ', meaning: 'tsu' },
  { char: 'て', meaning: 'te' },
  { char: 'と', meaning: 'to' },

  // N-row
  { char: 'な', meaning: 'na' },
  { char: 'に', meaning: 'ni' },
  { char: 'ぬ', meaning: 'nu' },
  { char: 'ね', meaning: 'ne' },
  { char: 'の', meaning: 'no' },

  // H-row
  { char: 'は', meaning: 'ha' },
  { char: 'ひ', meaning: 'hi' },
  { char: 'ふ', meaning: 'fu' },
  { char: 'へ', meaning: 'he' },
  { char: 'ほ', meaning: 'ho' },

  // M-row
  { char: 'ま', meaning: 'ma' },
  { char: 'み', meaning: 'mi' },
  { char: 'む', meaning: 'mu' },
  { char: 'め', meaning: 'me' },
  { char: 'も', meaning: 'mo' },

  // Y-row
  { char: 'や', meaning: 'ya' },
  { char: '', meaning: '' },
  { char: 'ゆ', meaning: 'yu' },
  { char: '', meaning: '' },
  { char: 'よ', meaning: 'yo' },

  // R-row
  { char: 'ら', meaning: 'ra' },
  { char: 'り', meaning: 'ri' },
  { char: 'る', meaning: 'ru' },
  { char: 'れ', meaning: 're' },
  { char: 'ろ', meaning: 'ro' },

  // W-row + N
  { char: 'わ', meaning: 'wa' },
  { char: '', meaning: '' },
  { char: 'を', meaning: 'wo' },
  { char: '', meaning: '' },
  { char: 'ん', meaning: 'n' },
];

// dakuon
const hiraganaDakuon = [
  // GA行
  { char: 'が', meaning: 'ga' },
  { char: 'ぎ', meaning: 'gi' },
  { char: 'ぐ', meaning: 'gu' },
  { char: 'げ', meaning: 'ge' },
  { char: 'ご', meaning: 'go' },

  // ZA行
  { char: 'ざ', meaning: 'za' },
  { char: 'じ', meaning: 'ji' },
  { char: 'ず', meaning: 'zu' },
  { char: 'ぜ', meaning: 'ze' },
  { char: 'ぞ', meaning: 'zo' },

  // DA行
  { char: 'だ', meaning: 'da' },
  { char: 'ぢ', meaning: 'ji (di)' },
  { char: 'づ', meaning: 'zu (du)' },
  { char: 'で', meaning: 'de' },
  { char: 'ど', meaning: 'do' },

  // BA行
  { char: 'ば', meaning: 'ba' },
  { char: 'び', meaning: 'bi' },
  { char: 'ぶ', meaning: 'bu' },
  { char: 'べ', meaning: 'be' },
  { char: 'ぼ', meaning: 'bo' },

  // PA行
  { char: 'ぱ', meaning: 'pa' },
  { char: 'ぴ', meaning: 'pi' },
  { char: 'ぷ', meaning: 'pu' },
  { char: 'ぺ', meaning: 'pe' },
  { char: 'ぽ', meaning: 'po' },
];

// youon
const hiraganaYouon1 = [
  // KYA 行
  { char: 'きゃ', meaning: 'kya' },
  { char: 'きゅ', meaning: 'kyu' },
  { char: 'きょ', meaning: 'kyo' },

  // SHA 行
  { char: 'しゃ', meaning: 'sha' },
  { char: 'しゅ', meaning: 'shu' },
  { char: 'しょ', meaning: 'sho' },

  // CHA 行
  { char: 'ちゃ', meaning: 'cha' },
  { char: 'ちゅ', meaning: 'chu' },
  { char: 'ちょ', meaning: 'cho' },

  // NYA 行
  { char: 'にゃ', meaning: 'nya' },
  { char: 'にゅ', meaning: 'nyu' },
  { char: 'にょ', meaning: 'nyo' },

  // HYA 行
  { char: 'ひゃ', meaning: 'hya' },
  { char: 'ひゅ', meaning: 'hyu' },
  { char: 'ひょ', meaning: 'hyo' },

  // MYA 行
  { char: 'みゃ', meaning: 'mya' },
  { char: 'みゅ', meaning: 'myu' },
  { char: 'みょ', meaning: 'myo' },

  // RYA 行
  { char: 'りゃ', meaning: 'rya' },
  { char: 'りゅ', meaning: 'ryu' },
  { char: 'りょ', meaning: 'ryo' },
];

const hiraganaYouon2 = [
  // GYA 行
  { char: 'ぎゃ', meaning: 'gya' },
  { char: 'ぎゅ', meaning: 'gyu' },
  { char: 'ぎょ', meaning: 'gyo' },

  // JA 行 (じ + ゃ/ゅ/ょ)
  { char: 'じゃ', meaning: 'ja' },
  { char: 'じゅ', meaning: 'ju' },
  { char: 'じょ', meaning: 'jo' },

  // DYA 行 (jarang dipakai, tapi tetap ada di tabel resmi)
  { char: 'ぢゃ', meaning: 'ja (dya)' },
  { char: 'ぢゅ', meaning: 'ju (dyu)' },
  { char: 'ぢょ', meaning: 'jo (dyo)' },

  // BYA 行
  { char: 'びゃ', meaning: 'bya' },
  { char: 'びゅ', meaning: 'byu' },
  { char: 'びょ', meaning: 'byo' },

  // PYA 行
  { char: 'ぴゃ', meaning: 'pya' },
  { char: 'ぴゅ', meaning: 'pyu' },
  { char: 'ぴょ', meaning: 'pyo' },
];

function renderCards(data, containerId) {
  const container = document.getElementById(containerId);

  data.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="hiragana">${item.char}</div>
      <div class="meaning">${item.meaning}</div>
    `;
    container.appendChild(card);
  });
}

// Render Hiragana
renderCards(hiraganaGojuuon, 'hiragana-gojuuon');
renderCards(hiraganaDakuon, 'hiragana-dakuon');
renderCards(hiraganaYouon1, 'hiragana-youon');
renderCards(hiraganaYouon2, 'hiragana-youon-dakuten');
