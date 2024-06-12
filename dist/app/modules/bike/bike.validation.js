"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBikeValidationSchema = exports.createBikeValidationSchema = void 0;
const zod_1 = require("zod");
exports.createBikeValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        pricePerHour: zod_1.z.number(),
        isAvailable: zod_1.z.boolean().default(true),
        cc: zod_1.z.number(),
        year: zod_1.z.number(),
        model: zod_1.z.string(),
        brand: zod_1.z.string(),
    }),
});
exports.updateBikeValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        pricePerHour: zod_1.z.number().optional(),
        isAvailable: zod_1.z.boolean().optional(),
        cc: zod_1.z.number().optional(),
        year: zod_1.z.string().optional(),
        model: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
    }),
});
