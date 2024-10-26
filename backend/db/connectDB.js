import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb connected ${con.connection.host}`);
  } catch (error) {
    console.log("Error connection to MongoDb", error.message);
    process.exit(1); // 1 is failure , 0 status code is success
  }
};
