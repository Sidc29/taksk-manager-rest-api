require('dotenv').config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks")

//middleware
app.use(express.json());

//routes
app.use("/", tasks)

app.use((req, res, next) => {
    res.status(404)
    res.json({ msg: "Oops! Looks like you are lost" })
})

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => console.log(`Server is up and running at http://localhost:${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start();