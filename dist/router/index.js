"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_route_1 = require("../modules/users/users.route");
const router = express_1.default.Router();
const moduleRoute = [
    {
        path: '/auth',
        route: users_route_1.authRouter,
    },
    {
        path: '/user',
        route: users_route_1.userRouter,
    },
];
moduleRoute.forEach((r) => router.use(r.path, r.route));
exports.default = router;
