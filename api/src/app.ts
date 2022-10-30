import express from "express";
import userRouter from "./routes/user.routes";

require('./db/connection');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/user",userRouter);


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
})