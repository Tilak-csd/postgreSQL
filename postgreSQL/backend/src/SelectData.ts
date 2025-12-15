import { Client } from "pg";

async function SelectData(email:string) {
    const client = new Client({
        connectionString: 'postgresql://neondb_owner:npg_5FfToYtqEM2D@ep-flat-dew-a4gxsvu0-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
    })
    await client.connect()
    try {
        const query = `SELECT * FROM users WHERE email = $1`;
        const res = await client.query(query, [email])
        if(res.rows.length >0){
            console.log("user found");
            return res.rows[0]
        }else{
            console.log("No User found with the given email");
            return null;
        }
    } catch (error) {
        console.error("Cannot perform the query,", error);
    }finally{
        await client.end()
    }
    
}

async function main() {
    const user = await SelectData("tilak@gmail.com");
    console.log(user);
}

main();

