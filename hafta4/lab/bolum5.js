async function doubleAfterDelay(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, x * 1000); // x saniye bekler
  });
}

async function demo() {
  console.log("request  submitted, calculating...");
  let result = await doubleAfterDelay(3);
  console.log(result);
}

demo();
