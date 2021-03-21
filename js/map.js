/* global L:readonly */

const map = L.map('mapcanvas')
  .setView({
    lat: 33.523,
    lng: 133.616,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const marker = L.marker({
  lat: 59.96831,
  lng: 30.31748,
});
marker.addTo(map);
