import mongoose from "mongoose";


// mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;