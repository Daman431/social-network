const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.CONNECTIONSTRING, (err: any) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Successfully connected to DB`);
});