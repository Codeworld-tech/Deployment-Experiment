const mongoose = require('mongoose');

async function connectToDB(){
    // Connection of Clusters 
    await mongoose.connect('mongodb+srv://shazimshah808:6UULmCSCnkOkPZSo@cluster0.07po2ps.mongodb.net/')
}

module.exports = {
    connectToDB
}