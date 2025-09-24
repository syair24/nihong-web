const katakanaGojuuon = [
  // A I U E O
  { char: 'ア', meaning: 'a' },
  { char: 'イ', meaning: 'i' },
  { char: 'ウ', meaning: 'u' },
  { char: 'エ', meaning: 'e' },
  { char: 'オ', meaning: 'o' },

  // KA KI KU KE KO
  { char: 'カ', meaning: 'ka' },
  { char: 'キ', meaning: 'ki' },
  { char: 'ク', meaning: 'ku' },
  { char: 'ケ', meaning: 'ke' },
  { char: 'コ', meaning: 'ko' },

  // SA SHI SU SE SO
  { char: 'サ', meaning: 'sa' },
  { char: 'シ', meaning: 'shi' },
  { char: 'ス', meaning: 'su' },
  { char: 'セ', meaning: 'se' },
  { char: 'ソ', meaning: 'so' },

  // TA CHI TSU TE TO
  { char: 'タ', meaning: 'ta' },
  { char: 'チ', meaning: 'chi' },
  { char: 'ツ', meaning: 'tsu' },
  { char: 'テ', meaning: 'te' },
  { char: 'ト', meaning: 'to' },

  // NA NI NU NE NO
  { char: 'ナ', meaning: 'na' },
  { char: 'ニ', meaning: 'ni' },
  { char: 'ヌ', meaning: 'nu' },
  { char: 'ネ', meaning: 'ne' },
  { char: 'ノ', meaning: 'no' },

  // HA HI FU HE HO
  { char: 'ハ', meaning: 'ha' },
  { char: 'ヒ', meaning: 'hi' },
  { char: 'フ', meaning: 'fu' },
  { char: 'ヘ', meaning: 'he' },
  { char: 'ホ', meaning: 'ho' },

  // MA MI MU ME MO
  { char: 'マ', meaning: 'ma' },
  { char: 'ミ', meaning: 'mi' },
  { char: 'ム', meaning: 'mu' },
  { char: 'メ', meaning: 'me' },
  { char: 'モ', meaning: 'mo' },

  // YA YU YO
  { char: 'ヤ', meaning: 'ya' },
  { char: '', meaning: '' },
  { char: 'ユ', meaning: 'yu' },
  { char: '', meaning: '' },
  { char: 'ヨ', meaning: 'yo' },

  // RA RI RU RE RO
  { char: 'ラ', meaning: 'ra' },
  { char: 'リ', meaning: 'ri' },
  { char: 'ル', meaning: 'ru' },
  { char: 'レ', meaning: 're' },
  { char: 'ロ', meaning: 'ro' },

  // WA WO N
  { char: 'ワ', meaning: 'wa' },
  { char: '', meaning: '' },
  { char: 'ヲ', meaning: 'wo' },
  { char: '', meaning: '' },
  { char: 'ン', meaning: 'n' },
];

// dakuon
const katakanaDakuon = [
  // GA GY GU GE GO
  { char: 'ガ', meaning: 'ga' },
  { char: 'ギ', meaning: 'gi' },
  { char: 'グ', meaning: 'gu' },
  { char: 'ゲ', meaning: 'ge' },
  { char: 'ゴ', meaning: 'go' },

  // ZA JI ZU ZE ZO
  { char: 'ザ', meaning: 'za' },
  { char: 'ジ', meaning: 'ji' },
  { char: 'ズ', meaning: 'zu' },
  { char: 'ゼ', meaning: 'ze' },
  { char: 'ゾ', meaning: 'zo' },

  // DA JI ZU DE DO
  { char: 'ダ', meaning: 'da' },
  { char: 'ヂ', meaning: 'ji' },
  { char: 'ヅ', meaning: 'zu' },
  { char: 'デ', meaning: 'de' },
  { char: 'ド', meaning: 'do' },

  // BA BI BU BE BO
  { char: 'バ', meaning: 'ba' },
  { char: 'ビ', meaning: 'bi' },
  { char: 'ブ', meaning: 'bu' },
  { char: 'ベ', meaning: 'be' },
  { char: 'ボ', meaning: 'bo' },

  // PA PI PU PE PO (Handakuon)
  { char: 'パ', meaning: 'pa' },
  { char: 'ピ', meaning: 'pi' },
  { char: 'プ', meaning: 'pu' },
  { char: 'ペ', meaning: 'pe' },
  { char: 'ポ', meaning: 'po' },
];

const katakanaYouon1 = [
  // KYA KYU KYO
  { char: 'キャ', meaning: 'kya' },
  { char: 'キュ', meaning: 'kyu' },
  { char: 'キョ', meaning: 'kyo' },

  // SHA SHU SHO
  { char: 'シャ', meaning: 'sha' },
  { char: 'シュ', meaning: 'shu' },
  { char: 'ショ', meaning: 'sho' },

  // CHA CHU CHO
  { char: 'チャ', meaning: 'cha' },
  { char: 'チュ', meaning: 'chu' },
  { char: 'チョ', meaning: 'cho' },

  // NYA NYU NYO
  { char: 'ニャ', meaning: 'nya' },
  { char: 'ニュ', meaning: 'nyu' },
  { char: 'ニョ', meaning: 'nyo' },

  // HYA HYU HYO
  { char: 'ヒャ', meaning: 'hya' },
  { char: 'ヒュ', meaning: 'hyu' },
  { char: 'ヒョ', meaning: 'hyo' },

  // MYA MYU MYO
  { char: 'ミャ', meaning: 'mya' },
  { char: 'ミュ', meaning: 'myu' },
  { char: 'ミョ', meaning: 'myo' },

  // RYA RYU RYO
  { char: 'リャ', meaning: 'rya' },
  { char: 'リュ', meaning: 'ryu' },
  { char: 'リョ', meaning: 'ryo' },
];

const katakanaYouon2 = [
  // GYA GYU GYO
  { char: 'ギャ', meaning: 'gya' },
  { char: 'ギュ', meaning: 'gyu' },
  { char: 'ギョ', meaning: 'gyo' },

  // JA JU JO
  { char: 'ジャ', meaning: 'ja' },
  { char: 'ジュ', meaning: 'ju' },
  { char: 'ジョ', meaning: 'jo' },

  // BYA BYU BYO
  { char: 'ビャ', meaning: 'bya' },
  { char: 'ビュ', meaning: 'byu' },
  { char: 'ビョ', meaning: 'byo' },

  // PYA PYU PYO
  { char: 'ピャ', meaning: 'pya' },
  { char: 'ピュ', meaning: 'pyu' },
  { char: 'ピョ', meaning: 'pyo' },
];

function renderCards(data, containerId) {
  const container = document.getElementById(containerId);

  data.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="katakana char">${item.char}</div>
      <div class="meaning">${item.meaning}</div>
    `;
    container.appendChild(card);
  });
}

renderCards(katakanaGojuuon, 'katakana-gojuuon');
renderCards(katakanaDakuon, 'katakana-dakuon');
renderCards(katakanaYouon1, 'katakana-youon');
renderCards(katakanaYouon2, 'katakana-youon-dakuten');
