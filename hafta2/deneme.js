const command = process.argv[2];
console.log(process.argv);

if (command === "add") {
  console.log("Not ekleme");
} else if (command === "remove") {
  console.log("Not silme");
} else if (command === "list") {
  console.log("Not listeleme");
} else {
  console.log("Gecersiz islem");
}
