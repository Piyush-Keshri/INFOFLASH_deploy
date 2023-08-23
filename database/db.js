import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const Connection = async (url) => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true });
        console.log('Database Connected Successfully');
    }
    catch (error) {
        console.log('Error while Connecting The Database', error);
    }

}

export default Connection;
