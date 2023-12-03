const dataMethod = ['body','params','query'];
const validation = (schema)=>{
    return (req,res,next)=>{
        const validationError = [];
         dataMethod.forEach((key)=>{
             if (schema[key]) {
                 const validationResult = schema[key].validate(req[key]);
                 if (validationResult.error){
                      validationError.push(validationResult.error.details)
                 }
             } 
         });
         if (validationError.length) {
               res.json({message:'validatin Errorr',err:validationError});
         } else {
             next();
         }
    }
};

module.exports = validation;