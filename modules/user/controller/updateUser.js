const userModel = require("../../../DB/model/userModel");

const updateUser = async (req, res) => {
    const { name, phone } = req.body;
    const id = req.user._id;
    try {
        const user = await userModel.findByIdAndUpdate({ id }, { name, phone }, { new: true }).select('-password');
        if (user) {
            res.status(201);
            res.json({ message: 'success update', user });
        } else {
            res.status(404).json({ message: 'in valid Id' })
        }
    } catch (error) {
        res.json({ message: 'err', error })
    }


};

module.exports = updateUser;