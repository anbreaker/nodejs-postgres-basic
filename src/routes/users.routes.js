const { Router } = require('express');
const router = Router();

const {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} = require('../controller/user.controller');

// localhost:3000/api/users
router.get('/users', getUsers);

router.post('/users', createUser);

// localhost:3000/api/users/1
router.get('/users/:id', getUserById);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router;
