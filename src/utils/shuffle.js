const normailise = ({ uRL_ }) => uRL_;

export function shuffle(a) {
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const getRandomImages = (images, amount) =>
  amount >= images.length
    ? images.map(normailise)
    : shuffle(images)
        .slice(0, amount)
        .map(normailise);
