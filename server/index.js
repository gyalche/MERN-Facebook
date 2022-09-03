import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mongoose from 'mongoose';

//routes import routes;
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import postRouter from './routes/posts.js';

const app = express();

//middleware;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
app.use(morgan('dev'));
app.use(helmet());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log(`mongo db is connected to ${data.connection.host}`);
  });

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`server is listening to http://localhost:${PORT}`);
});
