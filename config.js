// ============================================================
// OUR MOMENTS - BIRTHDAY SURPRISE CONFIGURATION
// Generated with Surprise Customizer
// ============================================================

window.OM_BIRTHDAY_DATA = {
  "n": "Ananya",
  "f": "Om",
  "t": 1792390229000,
  "a": 22,
  "b": "1020",
  "ck": "p",
  "rs": [
    "Your laugh is my favorite sound in the world.",
    "You light up my everyday and make every moment.",
    "No one listens to me or gets me quite like you ❤️",
    "You inspire me every single day just by being ❤️💕",
    "Life with you, my Ananya, is most beautiful. ✨"
  ],
  "p": [
    "assets/photo_1.jpeg",
    "assets/photo_2.jpeg",
    "assets/photo_3.jpeg",
    "assets/photo_4.jpeg",
    "assets/photo_5.jpeg"
  ],
  "c": [
    "Happy Birthday to the one who makes my whole world brighter 🌸✨",
    "Every happiness in my life begins and ends with you, my Love. ❤️🥹♾️",
    "You are the most beautiful chapter of my life, my Ananya. ❤️",
    "Walking through life with you is my ultimate source of joy 💕",
    "With your hand held in mine, every path feels like home ✨❤️"
  ],
  "m": "Subject: To the Girl Who Has My Heart - Happy 22nd Birthday, Ananya ❤️✨\n\nMy Dearest Ananya, 💓\n\nHappy 22nd Birthday, my love! ❤️\n\nThese past three years by your side have been nothing short of magic. You bring so much light into my world, and being with you feels like home. You are my joy, my peace, and the person I cherish most in this life.\n\nI pray that this new year brings you all the happiness and success you so deeply deserve. I want nothing more than to walk beside you, hold your hand.❤️"
};

try {
  const savedData = localStorage.getItem('OM_CUSTOM_BIRTHDAY_DATA');
  if (savedData) {
    const parsed = JSON.parse(savedData);
    if (parsed && parsed.n) {
      window.OM_BIRTHDAY_DATA = parsed;
    }
  }
} catch (e) {
  console.log('Using default config data');
}
