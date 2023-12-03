const userModel = require("../../../DB/model/userModel");

const deleteUser = async (req, res) => {
    const id = req.user._id;
    try {
        const user = await userModel.deleteOne({ _id: id });
        if (user) {
            res.status(201).json({ message: 'success deleted' })
        } else {
            res.status(404).json({ message: 'in valid Id' })
        }
    } catch (error) {
        res.json({ message: 'err', error })
    }

};

module.exports = deleteUser;