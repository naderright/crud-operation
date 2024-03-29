const userModel = require("../../../DB/model/userModel");

const signup = async (req, res) => {
    const { first_name, last_name,age, email, password } = req.body;
    try {
        const findUser = await userModel.findOne({ email }).select('email name');
        if (findUser) {
            res.json({ message: 'email already exist', findUser });
        } else {
            const user = new userModel({ first_name, last_name,age, email, password } );
            const savedUser = await user.save();
            if (savedUser) {
                res.status(201);
                res.json({ message: 'success login' })
            } else {
                res.status(400);
                res.json({ message: 'something wrong with login' })
            }
        }
    } catch (error) {
        res.json({ message: 'err', error })
    }

}

module.exports = signup;