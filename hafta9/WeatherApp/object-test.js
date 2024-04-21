//Object property shorthand
//Destructuring

const userName = "Can";
const userAge = 25;

const user = {
  userName,
  age: userAge,
  location: "Bursa",
};

console.log(user);
//Object destructing

const product = {
  label: "Kırmızı laptop",
  price: 300,
  stock: 20,
  salePrice: undefined,
  rating: 3,
};

// const label = product.label;
// const stoce = product.stoce;

const { label: etiket, stock, rating = 5 } = product;

console.log(etiket);
console.log(stock);
console.log(rating);

///////

const transaction = (type, { label, stock }) => {
  //const { label } = myProduct;
  console.log(type, label, stock);
};

transaction("order", product);
