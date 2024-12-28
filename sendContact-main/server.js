const https = require("https");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());

const corsOptions = {
  origin: [
    "https://localhost:3000",
 ,
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
  ],
  credentials: true,
};

app.use(cors(corsOptions));

connectDB();

const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/UserRoutes");
app.use("/contact", contactRoutes);
app.use("/user", userRoutes);

const sslOptions = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

app.get("/getdata", (req, res) => {
  res.json({ result: "hello from backend with https" });
});

const PORT = process.env.PORT || 5000;
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Server is running securely on https://localhost:${PORT}`);
});
