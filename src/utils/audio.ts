let currentAudio: HTMLAudioElement | null = null;

export const playAudio = (text: string) => {
  if (!text) return;

  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const encodedText = encodeURIComponent(text);
  const url = `https://dict.youdao.com/dictvoice?audio=${encodedText}&le=jap`;

  currentAudio = new Audio(url);

  currentAudio.play().catch((e) => {
    console.warn("Audio Playback Error:", e);
  });

  currentAudio.onended = () => {
    currentAudio = null;
  };
};
