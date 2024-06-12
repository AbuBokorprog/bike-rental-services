"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    phone: {
        type: Number,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    },
});
// const loginSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });
exports.userModel = (0, mongoose_1.model)('user', userSchema);
// const userLogin = model('login', loginSchema);
// export { userLogin, userSignIn };