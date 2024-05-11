const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://gizemavci:159753@cluster0.pxpsfvj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const databaseName = "task-manager";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // const id = new ObjectId();
    // console.log(id);
    // console.log(id.getTimestamp());
    // console.log(id.id.length);
    // console.log(id.toHexString.length);
    const db = client.db(databaseName);
    await db.collection("users").insertOne({
      _id: 10,
      name: "Deneme",
      age: 10,
    });

    // const db = client.db(databaseName);
    // await db.collection("users").insertOne({
    //   name: "Gizem",

    //   age: 21,
    // });

    // const db = client.db(databaseName);
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
    //     description: "Ödevilerini yap",
    //     completed: false,
    //   },
    // ]);

    //const db = client.db(databaseName);

    const user = await db
      .collection("users")
      .findOne({ name: "Gizem" }, (error, user) => {
        if (error) {
          console.log("Kullanıcı bulunamadı");
        }
      });
    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
