const mongoose = require('mongoose');

//ish line se jo bhi aap ne .env file me define kiya hoga wo sara ka sara load ho gyega process object ke andar
require("dotenv").config();

//ye function ka kaam hai wo connection bnana between application and database
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("DB connection established");
    }).catch((err) => {
        console.log("Error connecting to database");
        console.error(err.message);
        process.exit(1);
    });

    module.exports = dbConnect;
}
