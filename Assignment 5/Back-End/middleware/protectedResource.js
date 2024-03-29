const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const mongoose = require("mongoose");
const UserModel = mongoose.model("UserModel");

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ error: "Please log in to continue..!" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET, (error, payload) => {
        if (error) {
            return res.status(401).json({ error: "Please log in to continue..!" });
        }
        const { _id } = payload;
        UserModel.findById(_id)
            .then((dbuser) => {
                req.user = dbuser;
                next();//goes to the next middleware or goes to the REST API 
            });
    });
}