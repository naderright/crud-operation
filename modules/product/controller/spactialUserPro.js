const productModel = require("../../../DB/model/productModel")

const spactialUserPro = async (req, res) => {
    const id = req.user._id
    try {
        const product = await productModel.find({ userID: id });
        if (product) {
            res.status(201).json({ message: 'Done', product })
        } else {
            res.status(404).json({ message: 'not found Product' })

        }
    } catch (error) {
        res.json({ message: 'err', error })
    }

};
module.exports = spactialUserPro