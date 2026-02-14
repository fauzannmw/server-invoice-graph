import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import invoiceRoutes from "./routes/invoiceRoutes";
import errorMiddleware from "./middleware/errorMiddleware";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", invoiceRoutes);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
