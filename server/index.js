const express = require("express");
const app = express();
const crud = require("./routes/crudRoutes");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const database = require("./config/database");
database.connect();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// allow every origin with credentials
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/v1/user", crud);

app.get("/", (req, res) => {
  res.send(" Your server is up and running..");
});

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
