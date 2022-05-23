const { Client } = require("pg");

const getConnection = async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'nico',
    password: 'admin123',
    database: 'my-store'
  });
  await client.connect();
  return client;
};

module.exports = getConnection;
