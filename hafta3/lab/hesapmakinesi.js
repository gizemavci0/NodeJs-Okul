const yargs = require("yargs");
yargs.version("1.1.0");
//console.log(yargs.argv);

a = process.argv[3];
b = process.argv[4];

yargs.command({
  command: "toplama",
  describe: "toplama işlemi",
  handler: function () {
    console.log("Sonuc : ", parseInt(a) + parseInt(b));
  },
});

yargs.command({
  command: "cikarma",
  describe: "cikarma işlemi",
  handler: function () {
    console.log("Sonuc : ", a - b);
  },
});
yargs.command({
  command: "carpma",
  describe: "carpma işlemi",
  handler: function () {
    console.log("Sonuc : ", a * b);
  },
});
yargs.command({
  command: "bolme",
  describe: "bolme işlemi",
  handler: function () {
    console.log("Sonuc : ", a / b);
  },
});

yargs.parse();
