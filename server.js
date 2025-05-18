const express = require("express");
const locationRoutes = require("./routes/location");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT ;

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Welcome to Rwanda Location API!");
});

app.use("/api/location", locationRoutes);

// 404 handler - for routes not matched above
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
