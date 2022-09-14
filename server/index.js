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
import multer from 'multer';

const app = express();
//to serve images for public;
app.use(express.static('public'));
app.use('/images', express.static('images'));

//middleware;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
app.use(morgan('dev'));
app.use(helmet());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log(`mongo db is connected to ${data.connection.host}`);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({
  storage: storage,
});

app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('file uploaded sucessfully');
  } catch (error) {
    console.log(error);
  }
});
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`server is listening to http://localhost:${PORT}`);
});
