// JavaScript
console.log('Hello world!');

const map = L.map('map').setView([33.67069591406787, 130.44462560635102], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

//L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);

// Open Street Map hot
// L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
// }).addTo(map);

//アイコン
// const whiteIcon = L.icon({
//     iconUrl: 'images/ico.png',
//     shadowUrl: 'images/ico_shadow.png',
  
//   iconSize:     [40, 40], // size of the icon
//   shadowSize:   [40, 40], // size of the shadow
//   iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
//   shadowAnchor: [20, 40],  // the same for the shadow
//   popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
//   });
  
// L.marker([33.67069591406787, 130.44462560635102], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！').openPopup();

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });


  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
  
  L.marker([33.67069591406787, 130.44462560635102], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
  L.marker([33.659611421012094, 130.44417933417964], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');
  L.marker([33.67014890814041, 130.43451696666395], { icon: blueIcon }).addTo(map).bindPopup('こんにちは！');

  const circle = L.circle([33.67069591406787, 130.44462560635102], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("半径1kmの範囲");

  // 多角形の表示
const polygon = L.polygon([
  [33.659477344298615, 130.4443508698498],
  [33.64936071204908, 130.44052348056405],
  [33.65017120430754, 130.45237495791383]
], {
  color: 'blue',
  fillColor: '#30f',
  fillOpacity: 0.3
}).addTo(map);

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);
