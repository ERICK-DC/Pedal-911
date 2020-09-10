const { Router } = require('express');
const router = Router();

const {getLogin, getRegister,getBicicletas,postRegister,getAlquiler,postLogin,getAlquiler2,getAlquiler3,getAlquiler4,getAlquiler5,} = require('../controllers/index.controller');

router.get('/', getLogin);
router.post('/',postLogin);
router.get('/register',getRegister);
router.get('/bicicletas',getBicicletas);
router.get('/alquiler',getAlquiler);
router.get('/alquiler_2',getAlquiler2);
router.get('/alquiler_3',getAlquiler3);
router.get('/alquiler_4',getAlquiler4);
router.get('/alquiler_5',getAlquiler5);
router.post('/register',postRegister);

module.exports = router;