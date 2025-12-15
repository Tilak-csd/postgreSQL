"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// M V C => model view artitecture
// creating a connection to the PostgreSQL db
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: 'postgresql://neondb_owner:npg_5FfToYtqEM2D@ep-flat-dew-a4gxsvu0-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});
client.connect();
// Creating a Table in the database
async function createUserTable() {
    const result = await client.query(`
            CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `);
    console.log(result);
}
createUserTable();
