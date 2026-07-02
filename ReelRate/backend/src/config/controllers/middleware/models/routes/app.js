const express = require("express");
const cors = require("cors");
const movieRoutes = require("./routes/movieRoutes");

const app = express();

app.use(cors());
app.use("/api/movies", movieRoutes);
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to ReelRate API"
    });
});

module.exports = app;