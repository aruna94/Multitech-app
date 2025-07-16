// app.js
const express = require('express');
const sql = require('mssql');
const app = express();

// MSSQL DB config
const config = {
    user: 'myuser',
    password: 'MyStrongP@ssw0rd',
    server: 'localhost',
    database: 'manytech',
    options: {
      encrypt: false,
      trustServerCertificate: true
    }
};

// Express route
app.get('/', async (req, res) => {
  try {
    // Connect to DB
    await sql.connect(config);

    // Run a simple query
    const result = await sql.query`SELECT * FROM machine1`;

    // Log results to console
    console.log(result.recordset);

    res.send('Data fetched! Check console.');
  } catch (err) {
    console.error('DB Error:', err);
    res.status(500).send('Database error');
  }
});

// Start Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
