const { database } = require('../../lib/database');

export default async (req, res) => {
  const data = (await database.query(`SELECT * FROM navigation_sidemenu`))[0];

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
}
