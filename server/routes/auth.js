import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

//register;
router.post('/register', async (req, res) => {
  try {
    //generate has password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    req.body.password = hashedPassword;
    //create user;
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const { email } = req.body;
    const chekEmail = await User.findOne({ email });
    if (chekEmail) {
      res.status(404).json('email is already in use');
    }
    //save user
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json('user not found');

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(404).json('wrong password');

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1d',
    });
    res.status(201).json({ token: token, user });
  } catch (error) {
    console.log(error);
  }
});
export default router;
