import {
  TYPES,
  CHECKINS,
  CHECKOUTS,
  FEATURES,
  FOTOS
} from './const.js';


const getRandomFloat = (min, max) => {
  if (min === max) {
    return 0;
  }
  const minValue = Math.min(min, max);
  const maxValue = Math.max(min, max);
  return Math.random() * (maxValue - minValue) + minValue;
}


const getRandomInRange = (min, max) => {
  if (min === max) {
    return 0;
  }
  const minValue = Math.min(min, max);
  const maxValue = Math.max(min, max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

const getRandomItem = (items) => {
  return items[getRandomInRange(0, items.length - 1)];
}

const getRandomItems = (items) => {
  const itemCount = getRandomInRange(0, items.length - 1)
  const result = [];

  while (result.length - 1 < itemCount) {
    const randomItem = getRandomItem(items);
    if (!result.includes(getRandomItem)) {
      result.push(randomItem)
    }
  }
  return result;
};

const getOffer = () => {

  return {
    autor: {
      avatar: `img/avatars/user 0${getRandomFloat(1, 8)}.png`,
    },
    offer: {
      title: 'Мое объявление',
      adress: {
        x: getRandomInRange(35.65000, 35.70000),
        y: getRandomInRange(139.70000, 139.80000),
      },
      price: getRandomInRange(100, 1000),
      type: getRandomItem(TYPES),
      rooms: getRandomInRange(1, 10),
      guests: getRandomInRange(0, 10),
      checkIn: getRandomItem(CHECKINS),
      checkOut: getRandomItem(CHECKOUTS),
      features: getRandomItems(FEATURES),
      description: 'Описание помещения',
      photos: getRandomItems(FOTOS),
    },
  };
}

const getOffers = () => {
  const offers = [];

  for (let i = 0; i < 10; i++) {
    offers.push(getOffer());
  }
  return offers;
}

export default getOffers;
