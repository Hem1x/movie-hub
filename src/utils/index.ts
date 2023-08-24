export const numberWithSpaces = (x: string) => {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
