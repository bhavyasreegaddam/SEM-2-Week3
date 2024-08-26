const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');

const registerUser = async (username, password) => {
    const existingUser = await User.findOne({ username });
    if (existingUser) throw new Error('Username already exists');

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    return await newUser.save();
};

const loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) throw new Error('User not found');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Incorrect password');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return { token, username: user.username };
};

module.exports = { registerUser, loginUser };
