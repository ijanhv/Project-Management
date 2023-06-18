import mongoose from "mongoose";

const connect = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}` .cyan.underline.bold);
};

export default connect;