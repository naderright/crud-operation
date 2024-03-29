const Joi = require('joi');

const signupValidation = {
    body: Joi.object().required().keys({
        first_name: Joi.string().required().messages({
            'string.base':"sorry name must follow string char only",
            'string.empty':'plz fill u name',
            'any.required':'please enter u name'
        }),
        last_name: Joi.string().required().messages({
            'string.base':"sorry name must follow string char only",
            'string.empty':'plz fill u name',
            'any.required':'please enter u name'
        }),
        email : Joi.string().email().required(),
        password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        // cPassword: Joi.ref('password'),
        // phone:Joi.number().required()
    })
};
const signinValidation = {
    body:Joi.object().required().keys({
        email : Joi.string().email().required(),
        password : Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
}

const updateValid = {
    body:Joi.object().required().keys({
        name: Joi.string().required().messages({
            'string.base':"sorry name must follow string char only",
            'string.empty':'plz fill u name',
            'any.required':'please enter u name'
        }),
        phone:Joi.number().required()
    })
}



module.exports = {signupValidation,signinValidation,updateValid};