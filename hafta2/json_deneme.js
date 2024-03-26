const fs = require('fs')

const book = {
    title:'Kitap basligi',
    author:'Yazar',

}

const bookJSON=JSON.stringify(book)
fs.writeFileSync('denemeJson',bookJSON) //denemejson dosyası olusturuldu ve icerisine yazıldı
console.log (bookJSON)
//console.log (bookJSON.title) //bunu tanımaz,erisemez

const parsedObject = JSON.parse(bookJSON)

const dataBuffer = fs.readFileSync('denemeJson') //dosyadan okuma islemi
console.log(dataBuffer.toString())
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)
/*
console.log(parsedObject)
console.log(parsedObject.title) //artık json oldugundan oturu ereisebiliriz
console.log(parsedObject.author) // aynı zamanda bu da erisilebilir
*/