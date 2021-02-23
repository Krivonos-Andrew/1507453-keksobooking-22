'use strict';
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];
const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',
];

const FOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

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
    const getRandomItem = getRandomItem(items);
    if (!result.includes(getRandomItem)) {
      result.push(getRandomItem)
    }
  }
  return result;
};

const getOffer = () => {
  const offer = [];
  const offers = {
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
      // eslint-disable-next-line no-undef
      type: getRandomItem(TYPES),
      rooms: getRandomInRange(1, 10),
      guests: getRandomInRange(0, 10),
      // eslint-disable-next-line no-undef
      checkIn: getRandomItem(CHECKINS),
      checkOut: getRandomItem(CHECKOUTS),
      features: getRandomItems(FEATURES),
      description: 'Описание помещения',
      photos: getRandomItems(FOTOS),
    },
  }
  offer.push(offers);
  return offer;
}

// eslint-disable-next-line no-unused-vars
const getOffers = () => {
  const offers = [];

  for (let i = 0; i < 10; i++) {
    const offer = getOffer();
    offers.push(offer);
  }
  return offers;
}
