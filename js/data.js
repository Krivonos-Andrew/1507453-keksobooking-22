import {
  TYPES,
  CHECKINS,
  CHECKOUTS,
  FEATURES,
  FOTOS
} from './consts.js';


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
    if (!result.includes(randomItem)) {
      result.push(randomItem)
    }
  }
  return result;
};

const getOffer = () => {

  return {
    autor: {
      avatar: `img/avatars/user0${getRandomInRange(1, 8)}.png`,
    },
    offer: {
      title: 'Мое объявление',
      address: {
        x: getRandomFloat(35.65000, 35.70000),
        y: getRandomFloat(139.70000, 139.80000),
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
