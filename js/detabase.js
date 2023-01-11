const connection = require('../database/database');

const formInsert = (name, title, body) => {
  const query = 'insert into form_content set ?';
  connection.query(query, { name: name, title: title, body: body }, (err, rows) => {
    if (err) throw new Error('データの登録に失敗しました');
  });
};

module.exports.formInsert = (name, title, body) => formInsert(name, title, body);
const mysql = require('mysql');
const env = require('dotenv');

env.config();

const config = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
};

module.exports = mysql.createConnection(config);
