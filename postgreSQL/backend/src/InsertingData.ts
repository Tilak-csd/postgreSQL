import { log } from "node:console";
import { Client } from "pg";

async function InsertData(username : string, email : string) {
    const client = new Client({
        connectionString: 'postgresql://neondb_owner:npg_5FfToYtqEM2D@ep-flat-dew-a4gxsvu0-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
    })

    await client.connect();
    try {
        // prevents from SQL Injection
        const query = `INSERT INTO users (username, email) VALUES ($1, $2)`;
        const values = [username, email]
        const res = await client.query(query, values)
        console.log("Data INserted successfully");
    } catch (error) {
        console.error("Error during the insertion: ", error);
        return null
    }finally{
        await client.end()
    }
}

InsertData("tilak", "tilak@gmail.com")