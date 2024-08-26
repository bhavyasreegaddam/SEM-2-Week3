const { registerUser, loginUser } = require('../services/userService');

const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await registerUser(username, password);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const { token, username } = await loginUser(username, password);
        res.header('Authorization', token).send({ token, username });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { register, login };
