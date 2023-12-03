const bcrypt = require("bcrypt");
const userModel = require("../../../DB/model/userModel");
const jwt = require('jsonwebtoken');

const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            const passwordMatch = bcrypt.compare(password, user.password);
            if (passwordMatch) {
                const token = jwt.sign({ id: user.id, isLoggedIn: true }, process.env.jwt_secret, { expiresIn: '1h' })
                if (token) {
                    res.status(201);
                    res.json({ message: "Done", token })
                } else {
                    res.status(404)
                    res.json({ message: 'token in valid' })
                }

            } else {
                res.status(404).jason({ message: 'email or password in valid' })
            }
        } else {
            res.status(404)
            res.json({ messge: 'email or password in valid' })
        }
    } catch (error) {
        res.json({ message: 'err', error })
    }

};

module.exports = signin;