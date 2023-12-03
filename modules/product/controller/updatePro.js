const productModel = require("../../../DB/model/productModel");

const updatePro = async (req, res) => {
    const { price } = req.body;
    const { id } = req.params;
    try {
        const findPro = await productModel.findById(id);
        if (findPro) {
            const updatedPro = await productModel.findByIdAndUpdate({ id }, { price }, { new: true });
            if (updatePro) {
                res.status(201).json({ message: 'success update product', updatedPro })
            } else {
                res.status(404).json({ message: 'something wrong' })
            }
        } else {
            res.status(404).json({ message: 'in valid id' })
        }
    } catch (error) {
        res.json({ message: 'err', error })
    }

};

module.exports = updatePro