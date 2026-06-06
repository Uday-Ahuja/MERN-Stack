import express from 'express';
import fs from 'fs';
import userRouter from './routes/user.js';
const app = express();
const port = 8080;
//connection
import connectMongoDB from './connection.js';
connectMongoDB('...').then(() => console.log("MongoDb Connected"));


// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
import logReqRes from './middleware/index.js';
app.use(logReqRes('log.txt'));
//Routes
app.use("/users",userRouter);

// =======================
// SERVER
// =======================

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});