const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });
const app = express();
const path = require("path");

require("./db/conn");

app.use((req,res,next)=>{
  const allowedOrigins = ['http://gofood-delivery.onrender.com', 'https://gofood-delivery.onrender.com'];
      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin)) {
           res.setHeader('Access-Control-Allow-Origin', origin);
      }
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      res.header("Access-Control-Allow-credentials", true);
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
      next();
});

app.use(express.json());
const PORT = process.env.PORT || 3000;
app.use("/api",require("./router/auth"));


//-----------------------Deployment----------------

const __dirname1 = path.resolve();

if(process.env.NODE_ENV === 'production')
{
  app.use(express.static(path.join(__dirname1,'/frontend/dist')));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname1,"frontend","dist","index.html"));
  })
  "frontend","dist",""
}

//-----------------------Deployment----------------

app.listen(PORT, () => {
  console.log(`Listening to port no. ${PORT}`);
});