const auth = require('../../Middelware/auth');
const validation = require('../../Middelware/validation');
const addPro = require('./controller/addPro');
const deletePro = require('./controller/deletePro');
const spactialUserPro = require('./controller/spactialUserPro');
const updatePro = require('./controller/updatePro');
const yseterDayPro = require('./controller/yseterDayPro');
const { addProValidation, updateProValidation } = require('./productValid');

const productRouter = require('express').Router();


productRouter.post('/product',auth(),validation(addProValidation),addPro);
productRouter.patch('/product/:id',auth(),validation(updateProValidation),updatePro);
productRouter.delete('/product/:id',auth(),deletePro);
productRouter.get('user/product',auth(),spactialUserPro);
productRouter.get('user/product',auth(),yseterDayPro);

module.exports = productRouter;