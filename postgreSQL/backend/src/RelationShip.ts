
// M V C => model view artitecture
// creating a connection to the PostgreSQL db
import { Client } from "pg";

const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_5FfToYtqEM2D@ep-flat-dew-a4gxsvu0-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
})

client.connect()

// Creating a Table in the database
async function createAnotherTable() {
    const result = await client.query(`
            CREATE TABLE locaion (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            country VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL
            
            )
        `);        
        console.log(result);
        
}

createAnotherTable();