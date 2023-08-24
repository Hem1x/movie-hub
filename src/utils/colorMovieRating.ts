export const colorMovieRating = (rating: string) => {
  if (rating) {
    const ratingNum = Number(rating);
    if (ratingNum > 6.9) {
      return '#009533';
    } else if (ratingNum > 5 && ratingNum <= 6.9) {
      return '#AF9210';
    } else if (rating.includes('%')) {
      return '#009533';
    } else {
      return 'red';
    }
  } else {
    return '#828282';
  }
};
