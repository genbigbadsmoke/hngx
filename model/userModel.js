const mongoose =  require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true,
        default: 1,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User