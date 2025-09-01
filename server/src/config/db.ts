import mongoose from 'mongoose';


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log('MongoDB connected.');
    } catch(e) {
        console.log('MongoDB connection error.', e);
    }
}


export default connectDB;
