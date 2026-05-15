import express from "express";
import cors from "cors";
import eventRoute from "./routes/eventRoute";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/events", eventRoute);

//jalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
