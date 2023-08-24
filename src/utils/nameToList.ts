import { ListEnum } from '../types/list';

export const nameToList = (value: ListEnum) => {
  const NameToList = {
    [ListEnum.POPULAR]: 'Популярное',
    [ListEnum.TOP]: 'Топ 250 фильмов',
    [ListEnum.AWAIT]: 'Скоро',
  };

  return NameToList[value];
};
