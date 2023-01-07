const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const tasks = require("./routes/tasks")

//middleware
app.use(express.static("public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks)

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