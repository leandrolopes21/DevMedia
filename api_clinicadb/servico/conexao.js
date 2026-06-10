import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'medicos',
    password: '*medicos',
    database: 'clinicadb'
});

export default pool;