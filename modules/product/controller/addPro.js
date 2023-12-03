const productModel = require("../../../DB/model/productModel");

const addPro = async (req, res) => {
    const { title, description, price } = req.body;
    // const id = req.user._id;
    try {
        const product = await productModel.insertMany({ title, description, price, userID: user.id });
        if (product) {
            res.status(201).json({ message: 'success add product', product });
        } else {
            res.status(404).json({ message: 'failed add product' })
        }
    } catch (error) {
        res.json({ message: "err", error })
    }

};

module.exports = addPro