const mongoose = require('mongoose');
require('dotenv').config();

export const connectDb = async ():Promise<void> => {
    try {
        await mongoose.connect(
          `mongodb+srv://${process.env.CLUSTERKEYS}@cluster-test.ci0r7e4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-test`
        );

        console.log('Database running');
    } catch (error) {
        console.log('An error occured');
        throw new Error(`Error initializing the database: ${error}`);
    }
}