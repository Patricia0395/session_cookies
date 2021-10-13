var express = require('express');

var router = express.Router();

const userAddValidation = require('../validations/userValidation');

const { index, users, logout, destroy } = require('../controllers/indexController');

/* GET home page. */
router.get('/', index);
router.post('/', userAddValidation,  users);
router.get('/logout', logout);
router.get('/destroy', destroy);



module.exports = router;
