import express from "express";
import connectDB from "./db.js";
import courseRoute from "./Routes/courses.routes.js"
import cfg from './config/config.js'

const app = express()
app.disable('x-powered-by');
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  next();
});


app.use('/procourses/',courseRoute);

app.listen(cfg.PORT, async () => {
  await connectDB();
  console.log(`Server running on port http://localhost:${cfg.PORT}`);
});
