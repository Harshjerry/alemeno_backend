const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
const courseRouter=require("./routes/course");



mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("db connection successful"))
  .catch((err) => {
    console.log(err);
  });
// added for cors  
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.use(express.json());
app.use("/api/courses", courseRouter);

app.use("/", (req, res) => {
  return res.status(200).json(
    {
      success: true,
      message: "Everything OK"
    }
  )
})

app.listen(process.env.PORT||5000, () => {
  console.log("backend is running");
});
