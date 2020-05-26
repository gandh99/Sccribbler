const { Client } = require('pg');

const client = new Client()
client
    .connect()
    .then(() => console.log(`Connected to PostgreSQL database on port ${process.env.PGPORT}...`))
    .catch((err: any) => console.log(err));

module.exports = client