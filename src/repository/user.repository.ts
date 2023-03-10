import { pool } from '../DB';
import { iUser } from '../interfaces/interfaces';

async function getUsersDB() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM users';
  const data = (await client.query(sql)).rows;
  return data;
}

async function getUsersByIdDB(id: number) {
  const client = await pool.connect();
  const sql = 'SELECT * FROM users WHERE id=$1';
  const data = (await client.query(sql, [id])).rows;
  return data;
}

async function updateUsersDB(id: number, name: string, surname: string, pwd: string, email: string, status: number) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'UPDATE users SET name = $1, surname = $2, pwd =$3, email = $4, status = $5 WHERE id=$6 RETURNING *';
    const data = (await client.query(sql, [name, surname, pwd, email, status, id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(error);
    return [];
  }
}

async function deleteUsersDB(id: number) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'UPDATE users SET status =1 WHERE id=$1 RETURNING *';
    const data = (await client.query(sql, [id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(error);
    return [];
  }
}

async function pachtUsersDB(id: number, dataFromClient: iUser) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const sql = 'SELECT * FROM users WHERE id=$1';
    const data = (await client.query(sql, [id])).rows[0];
    const mergeData = { ...data, ...dataFromClient };
    const sql2 = 'UPDATE users SET name = $1, surname = $2,pwd=$3, email=$4, status=$5 WHERE id=$6 RETURNING *';
    const data2 = (await client.query(sql2, [mergeData.name, mergeData.surname, mergeData.pwd, mergeData.email, mergeData.status, id])).rows;
    await client.query('COMMIT');
    return data2;
  } catch (error) {
    await client.query('ROLLBACK');
    console.log(`pachtUsersDB ${error}`);
    return [];
  }
}

export { getUsersDB, getUsersByIdDB, updateUsersDB, deleteUsersDB, pachtUsersDB };
