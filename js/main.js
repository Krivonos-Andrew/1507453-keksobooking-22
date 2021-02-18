'use strict';

function getRandomFloat(min, max) {
  if (min === max) {
    return 0;
  }
  const minValue = Math.min(min, max);
  const maxValue = Math.max(min, max);
  return Math.random() * (maxValue - minValue) + minValue;
}
// eslint-disable-next-line no-console
console.log(getRandomFloat(1, 10));

function getRandomInRange(min, max) {
  if (min === max) {
    return 0;
  }
  const minValue = Math.min(min, max);
  const maxValue = Math.max(min, max);
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
// eslint-disable-next-line no-console
console.log(getRandomInRange(1, 10));

const imageNumber = '0' + getRandomFloat(1, 8);
const cost = Math.random() > 0;
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

const FEATURES = [
  wifi, dishwasher, parking, washer, elevator, conditioner,
];

const FOTOS = {
  'http: //o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
};

const getOffers = () => {
  const offers = [];

  for (let i = 0; i < 10; i++) {
    const offer = getOffer();
    offers.push(offer);
  };

  return offers;
};

const OFFERS = {
  location = {
    x: getRandomInRange(35.65000, 35.70000),
    y: getRandomInRange(139.70000, 139.80000),
  },

  autor = {
    avatar: 'img/avatars/user(imageNumber).png ',
  },

  offer = {
    title: 'Мое объявление',
    adress: {
      x = location.x,
      y = location.y,
    },

    price: cost,
    type: getRandomItem(TYPES),
    rooms: cost,
    guests: cost,
    checkin: getRandomItem(CHECKINS),
    features: [],
    description: 'Описание помещения',
    photos: [],
  },
};
