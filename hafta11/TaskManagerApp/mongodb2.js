// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;

// const connectionURL =
//   "mongodb+srv://gizemavci:<password>@cluster0.pxpsfvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const databaseName = "task-manager";

// MongoClient.connect(connectionURL, (error, client) => {
//   if (error) {
//     return console.log("Veri tabanı bağlantısı kurulamadı:");
//   }
//   console.log("Veri bağlantısı kuruldu.");
//   // Bağlantı başarılı olduğunda yapılacak işlemler buraya eklenebilir.
// });

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://gizemavci:159753@cluster0.pxpsfvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const databaseName = "task-manager";

async function run() {
  try {
    // const id = new ObjectId();
    // console.log(id);
    // console.log(id.id);
    // console.log(id.id.length);
    // console.log(id.toHexString.length);
    // console.log(id.getTimestamp());
    const db = client.db(databaseName);

    const user = await db
      .collection("users")
      .findOne({ name: "Gizem" }, (error, user) => {
        if (error) {
          console.log("Kullanıcı bulunamadı");
        }
      });
    console.log(user);
    // await db.collection("users").insertOne({
    //   _id: id,
    //   name: "Kadir",
    //   age: 24,
    // });
    // await db.collection("users").insertOne(
    //   {
    //     name: "Gizem",
    //     age: 21,
    //   },
    //   (error, response) => {
    //     if (error) {
    //       return console.log("Kayıt edilmedi");
    //     }
    //     console.log(result.ops);
    //     console.log(
    //       "${result.insertedCount} documents were inserted with the "
    //     );
    //   }
    // );

    // await db.collection("tasks").insertMany([
    //   {
    //     description: "Odanı temizle",
    //     completed: true,
    //   },
    //   {
    //     description: "Çiçekleri sula",
    //     completed: false,
    //   },
    //   {
    //     description: "Ödevleri yap",
    //     completed: false,
    //   },
    // ]);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
