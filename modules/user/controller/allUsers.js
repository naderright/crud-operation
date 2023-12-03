const userModel = require("../../../DB/model/userModel")

const allUsers = async (req, res) => {
    try {
        const users = await userModel.find().select('name email');
        if (users) {
            res.status(201).json({ message: 'all users', users });
        } else {
            res.status(404).json({ message: 'not found users' });

        }
    } catch (error) {
        res.json({ message: 'err', error })
    }

};

module.exports = allUsers