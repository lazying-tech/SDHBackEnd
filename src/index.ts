import express, { Request, Response } from "express";
import MainRoute from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1", MainRoute);
app.use("/", (req: Request, res: Response) => {
  res.json("SDH");
});
app.listen(PORT, () => {
  console.log(`Listenning at ${PORT} port`);
});
