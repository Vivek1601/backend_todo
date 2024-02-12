import { connectDb } from "./data/database.js";
import {app} from "./app.js";

connectDb();
// console.log(process.env.PORT);
app.listen(process.env.PORT,()=>{
    console.log(`server is working on port: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
})

// in package json file 
// "start":  "node server.js", //"set NODE_ENV=Production && node server.js",
//     "dev": "nodemon server.js" //"set NODE_ENV=development && nodemon server.js"