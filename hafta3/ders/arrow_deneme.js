/*
const square = function (x) {
  return x * x;
};

console.log(square(4));

*/
// Arrow functşion - Js ES6 feature
/*
const square = (x) => {
  return x * x;
};
*/
/*
const square = (x) => x * x;
console.log(square(4));
*/

//myEvent objesi
// const myEvent = {
//   name: "xx bebek doğum gunu partısı",
//   printGuestList: function () {
//     console.log(this.name + "için katılımcı lıstesi");
//   },
// };

const myEvent = {
  name: "xx bebek doğum gunu partısı",
  guestList: ["Gizem", "Kadir", "Özgül"],
  printGuestList() {
    console.log(this.name + "için katılımcı lıstesi");
    //this diyerek objeyı refore ettık
    this.guestList.forEach((guest) => {
      //guest listedeki her elemanın ismi
      console.log(guest + ", " + this.name + "ne katılıyor");
      //yazılacak her sey array in her elemanı ıcın teker teker calısacak sebebı de foreach komutu
    });
  },
};

myEvent.printGuestList();
