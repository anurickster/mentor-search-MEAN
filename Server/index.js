const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const url = process.env.DB_URL;
const cors = require('cors');
const Mentor = require('./models/mentor');
const mongoose = require('mongoose');
const colors = require('colors');
const mentorRoute = require('./routes/mentor');
const userRoute = require('./routes/user');
const errorHandler = require('./middlewares/errorHandler');

// connect to db;
const connnectToDB = async () => {
  await mongoose.connect(url);
  console.log('Connected to DB'.green);
};
connnectToDB();

// pre middlewares
app.use(cors());
app.use(express.json());
app.use('/mentors', mentorRoute);
app.use('/auth', userRoute);

// db and fetch all mentors
app.get('/mentor', async (req, res) => {
  let mentors = await Mentor.find();
  res.json(mentors);
});

//post middlewares
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on Port ${port}...`));
