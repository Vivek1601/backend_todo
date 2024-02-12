import mongoose from "mongoose";

export const connectDb = ()=>{mongoose.connect(process.env.MONGO_URL,{
    dbName : "Backend_API"
}).then((c)=>console.log(`Database connected with ${c.connection.host}`)).catch((e) => {
    console.log(e);
})
}