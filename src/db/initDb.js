import pool from './getPool.js';
import useDb from './useDb.js';

const createDb = async () => {
  try {
    await pool.query(`CREATE DATABASE IF NOT EXISTS ${process.env.NAME_DB};`);

    await useDb();

    await pool.query(`
    CREATE TABLE IF NOT EXISTS transacciones (
      trans_date_trans_time DATETIME,
      cc_num BIGINT,
      merchant VARCHAR(255),
      category VARCHAR(100),
      amt DECIMAL(10, 2),
      trans_num VARCHAR(100),
      unix_time VARCHAR(255)
  );`);

    console.log('Tablas de base de datos creada exitosamente');
  } catch (error) {
    throw error;
  }
};

createDb();
