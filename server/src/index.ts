import express from "express";
import "dotenv/config";

const app = express();

const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is live");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
