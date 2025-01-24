import mongoose from "mongoose";
import config from "config";

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try{
        console.log('Connected to DB')
        await mongoose.connect(dbUri);
    } catch(error) {
        console.error('Could not connect to db');
        process.exit(1);
    }
}

export default connect;