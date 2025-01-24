import mongoose from "mongoose";
import config from "config";
import log from "./logger";

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try{
        log.info('Connected to DB')
        await mongoose.connect(dbUri);
    } catch(error) {
        log.error('Could not connect to db');
        process.exit(1);
    }
}

export default connect;