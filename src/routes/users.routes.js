const { Router } = require('express');
const router = Router();

const { createUser, getUserById, getUsers } = require('../controller/user.controller');

// localhost:3000/api/users
router.get('/users', getUsers);

router.post('/users', createUser);

// localhost:3000/api/users/1
router.get('/users/:id', getUserById);

module.exports = router;
