const express = require('express');
const router = express.Router();


const usercontroller = require('../controllers/user.controller');


router.get('/', usercontroller.getUsers);

router.get('/:userID', usercontroller.getUser);

router.post('/create', usercontroller.createUser);

router.put('/:userID', usercontroller.updateUser);

router.delete('/:userID', usercontroller.deleteUser);



module.exports = router;