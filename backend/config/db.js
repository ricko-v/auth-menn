import mongoose from "mongoose";

const db = {
    connect: async () => {
        try {
            await mongoose.connect(process.env.MONGO_DB);
            console.log('Database Connected', process.env.MONGO_DB);
        } catch (err) {
            console.log(err)
        }
    }
}

export default db;