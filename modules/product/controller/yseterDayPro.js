const moment = require("moment");
const userModel = require("../../../DB/model/userModel");

const yseterDayPro = async (req, res) => {
    const yasterDay = moment().subtract(1, 'days').toString();
    const beforYasterDay = moment().subtract(2, 'days').toString();
    try {
        const products = await userModel.find({ createdAt: { $gt: beforYasterDay, $lt: yasterDay } });
        if (products.length) {
            res.status(201).json({ message: 'product YasterDay', products })
        } else {
            res.status(404).json({ message: 'Not Found product YasterDay' })

        }
    } catch (error) {
        res.json({ message: 'err', error })
    }

};

module.exports = yseterDayPro