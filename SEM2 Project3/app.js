const express = require('express');
const app = express();
const connectToDB = require('./src/config/DBconnection');
const userRoutes = require('./src/routes/userRoutes');
const bookRoutes = require('./src/routes/bookRoutes');
require('dotenv').config();

connectToDB();

app.use(express.json());

app.use('/user', userRoutes);
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Online Library System');
});

console.log(process.env.DBCONNECT)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
