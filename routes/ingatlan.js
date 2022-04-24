const express = require('express')
const router=express.Router()
const {getIngatlan,createIngatlan,deleteIngatlan}=require('../controllers/ingatlan')

router.route('/').get(getIngatlan)
router.route('/').post(createIngatlan)
router.route('/:id').delete(deleteIngatlan)

module.exports = router