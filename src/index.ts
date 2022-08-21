import express from "express";
import { lowerQueryStringKeys } from "./utilities/middlewares";
import imgRoutes from "./routes/image";

const app = express();
const port = 3000;

app.use("/api/image", lowerQueryStringKeys, imgRoutes);

app.listen(port, () => {
  console.log(`Listening to port ${port} :`);
});

export default app;
