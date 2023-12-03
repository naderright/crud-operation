const { default: mongoose } = require("mongoose")

const connectDB = ()=>{
    return mongoose.connect(process.env.DB_URL).then((result)=>{
        console.log('conected DB');
    }).catch((err)=>{
        console.log(err);
    })
};

module.exports = connectDB;