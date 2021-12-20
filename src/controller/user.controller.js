const { pool } = require('../models/db.model');

const getUsers = async (req, res) => {
  const users = await pool.query('SELECT * FROM users');

  console.log(users.rows);

  res.status(200).json(users.rows);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

  res.status(200).json(user.rows);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;

  const newUser = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [
    name,
    email,
  ]);

  res.json({
    message: 'User created',
    user: {
      name,
      email,
    },
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const userUpdate = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id]
  );

  console.log(userUpdate);

  res.json('User Updated Succesfully ');
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM users WHERE id = $1', [id]);

  res.json(`User ${id} deleted successfully`);
};

module.exports = {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
};
