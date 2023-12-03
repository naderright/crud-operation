const jwt = require('jsonwebtoken');
const userModel = require('../DB/model/userModel');

const auth = () => {
    return async (req, res, next) => {
        const headerToken = req.headers['authorization'];
        try {
            if (!headerToken.startsWith('Bearer') || headerToken == null || headerToken == undefined) {
                res.json({ message: 'In valid header token' })
            } else {
                const token = headerToken.split(' ')[1];
                if (!token) {
                    res.json({ message: 'in valid token' });
                } else {
                    const decoded = jwt.verify(token, process.env.jwt_secret);
                    const findUser = await userModel.findById(decoded.id).select('id name email phone');
                    if (!findUser) {
                        res.json({ message: 'in valid user' })
                    } else {
                        req.user = findUser;
                        next()
                    }
                }

            }
        } catch (error) {
            res.json({ message: 'err', error })
        }
    }
}

module.exports = auth;