const express = require("express");
const cors = require("cors");
const findRoute = require("./routes/matchingRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", findRoute);

const server = app.listen(5000, () => {
  console.log(`Server Started on PORT 5000`);
});
