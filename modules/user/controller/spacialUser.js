const userModel = require("../../../DB/model/userModel");

const spacialUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.findById(id).select('-password -phone');
        if (user) {
            res.status(201).json({ message: 'success get user', user });
        } else {
            res.status(404).json({ message: 'Not Fount User' })
        }
    } catch (error) {
        res.json({ message: 'err', error })
    }

};


module.exports = spacialUser