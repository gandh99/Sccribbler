const { Client } = require('pg');

let client
if (process.env.NODE_ENV === 'development') {
    client = new Client()
} else if (process.env.NODE_ENV === 'production') {
    client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    })
}

client
    .connect()
    .then(() => console.log(`Connected to PostgreSQL database on port ${process.env.PGPORT}...`))
    .catch((err: any) => console.log(err));

module.exports = client