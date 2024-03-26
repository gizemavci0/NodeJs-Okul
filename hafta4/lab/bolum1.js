function regularFunction() {
  console.log("Regular function 'this':", this);

  setTimeout(function () {
    console.log("Regular function callback 'this':", this);
  }, 1000);
}

const arrowFunction = () => {
  console.log("Arrow funciton 'this' :", this);

  setTimeout(() => {
    console.log("Regular function callback 'this':", this);
  }, 1000);
};

const obj = {
  value: "Object value",
  methodWithRegular: function () {
    console.log("Regular method 'this' : ", this);
  },
  methodWithArrow: () => {
    console.log("Arrow method 'this' :", this);
  },
};

regularFunction();
arrowFunction();
obj.methodWithRegular();
obj.methodWithArrow();
