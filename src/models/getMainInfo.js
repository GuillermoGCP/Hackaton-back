import pool from '../db/getPool.js';
import useDb from '../db/useDb.js';

const getMainInfo = async () => {
  await useDb();

  const MainData = await pool.query('SELECT * FROM transacciones');

  return MainData;
};

export default getMainInfo;
