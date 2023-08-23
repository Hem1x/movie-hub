export const minToHours = (min: number) => {
  const hours = Math.floor(min / 60);
  const minutes = min - hours * 60;
  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};
