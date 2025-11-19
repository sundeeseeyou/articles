import express from "express";
import cors from "cors";

const APP = express();
const PORT = 9090;

APP.use(express.static("public"));
APP.use(cors());

APP.get("/", async (req, res) => {
  res.sendStatus(200);
});

APP.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
