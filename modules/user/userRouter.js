const signup = require('./controller/signup');
const validation = require('../../Middelware/validation');
const auth = require('../../Middelware/auth');
const {signupValidation,signinValidation, updateValid} = require('./validateUser');
const signin = require('./controller/signin');
const updateUser = require('./controller/updateUser');
const deleteUser = require('./controller/deleteUser');
const allUsers = require('./controller/allUsers');
const spacialUser = require('./controller/spacialUser');
const userRouter = require('express').Router();


userRouter.post('/signup',validation(signupValidation),signup);
userRouter.post('/signin',validation(signinValidation),signin);
userRouter.patch('user',auth(),validation(updateValid),updateUser);
userRouter.delete('user',auth(),deleteUser);
userRouter.get('users',allUsers);
userRouter.get('users/:id',auth(),spacialUser);




module.exports = userRouter;