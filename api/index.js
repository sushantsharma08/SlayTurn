const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");
dotenv.config()


mongoose
.connect(
    process.env.MONGO_URL
)
.then(
    ()=>console.log("DBConnection Success")
)
.catch(
    (err)=>{console.log(err)}
);
// const corsOptions = {
//     origin: '*',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200,
//  }
 
app.use(cors(
    {
        origin: ["https://slayturn-api.onrender.com"],
        methods: ["GET","POST"],
        credentials: true
    }
));

// app.use(cors(corsOptions))
// app.use(cors()) 
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders",orderRoute)
app.use("/api/checkout",stripeRoute)

/*
    process.env.PORT || 5000 
    this line means if there is no port number specified inside our .env file
    we will use port 5000
*/
app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!")
  });