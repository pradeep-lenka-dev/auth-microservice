const express = require('express')
const router = express.Router();
const userController = require ('./userController')

router.get('/', userController.getUser)
router.post('/', userController.creatUser)

module.exports = router;