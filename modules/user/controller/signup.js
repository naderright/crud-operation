const userModel = require("../../../DB/model/userModel");

const signup = async (req, res) => {
    const { name, email, password, phone } = req.body;
    try {
        const findUser = await userModel.findOne({ email }).select('email name');
        if (findUser) {
            res.json({ message: 'email already exist', findUser });
        } else {
            const user = new userModel({ name, email, password, phone });
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