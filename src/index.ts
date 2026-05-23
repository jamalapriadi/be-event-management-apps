import express from "express";
import cors from "cors";
import eventRoute from "./routes/eventRoute.js";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

app.use("/events", eventRoute);

//jalankan server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
