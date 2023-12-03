const Joi = require("joi");

const addProValidation = {
    body:Joi.object().required().keys({
        title:Joi.string().required().alphanum(),
        description:Joi.string().required(),
        price:Joi.number().required()
    })
};
const updateProValidation = {
    body:Joi.object().required().keys({
        price:Joi.number().required()
    })
};


module.exports = {addProValidation,updateProValidation}