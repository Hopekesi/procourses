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

app.get('/meta/',(req,res)=>{
  console.log(req)
  res.send(1416153129)
});

app.post('/meta/',(req,res)=>{
  console.log('start of post req')
  console.log(req)
  console.log('end of post req')
});

app.use('/',(req,res)=>{
  console.log("....")
  res.send("ok")
});
app.listen(cfg.PORT, async () => {
  await connectDB();
  console.log(`Server running on port http://localhost:${cfg.PORT}`);
});
