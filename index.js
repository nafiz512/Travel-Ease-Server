const express = require("express");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const app = express();
const PORT = process.env.port || 5000;

//midleware
app.use(express.json());
app.use(cors());

//mongodb altals
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qdankrh.mongodb.net/?appName=Cluster0`;

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
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        //database apis
        //user related api
        const user_db = client.db("usersDb");
        const userColl = user_db.collection("usersColl");
        app.post("/user", async (req, res) => {
            const query = { email: req.body.email };
            const result = await userColl.findOne(query);
            if (result) {
                return res.send("user is already exists. no need to insert ");
            } else {
                const add = await userColl.insertOne(req.body);
                res.send(add);
            }
        });
        //cars db
        const car_db = client.db("CarDb");
        const car_coll = car_db.collection("CarColl");
        //car api
        app.post("/addvehicle", async (req, res) => {
            const result = await car_coll.insertOne(req.body);
            res.send(result);
        });

        await client.db("admin").command({ ping: 1 });
        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);

// Simple Route
app.get("/", (req, res) => {
    res.send("server running on port ", PORT);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
