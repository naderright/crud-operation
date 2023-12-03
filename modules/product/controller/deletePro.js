const productModel = require("../../../DB/model/productModel");

const deletePro = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productModel.findByIdAndDelete({ id });
        if (product) {
            res.status(201).json({ message: 'success delete product' })
        } else {
            res.status(404).json({ message: 'failed to delete product' })

        }
    } catch (error) {
        res.json({ message: 'err', error })
    }

};

module.exports = deletePro