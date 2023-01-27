require('dotenv').config();
require('express-async-errors');

const express = require("express");
const app = express();

const cors = require('cors')
const connectDB = require("./db/connect");
const tasksRouter = require("./routes/tasks");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.static("public"))
app.use(express.json());
app.use(cors())

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

//routes
app.use("/api/v1/tasks", tasksRouter);

const PORT = process.env.PORT || 3000;

// custom middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

(async () => {
    try {
        console.log("Establishing connection with the DB....");
        await connectDB(process.env.MONGO_URI);
        console.log("Connection established");
        app.listen(PORT, () => console.log(`Server is up and running at ${PORT}`));
    } catch (error) {
        console.log(error);
    }
})();