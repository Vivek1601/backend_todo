import mongoose from "mongoose";

export const connectDb = ()=>{mongoose.connect(process.env.MONGO_URL,{
    dbName : "Backend_API"
}).then(()=>console.log("Database connected")).catch((e) => {
    console.log(e);
})
}