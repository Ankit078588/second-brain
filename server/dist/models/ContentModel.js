"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ContentSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    tags: [{ type: mongoose_1.default.Types.ObjectId, ref: 'Tag', default: [] }],
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', default: [] }
});
exports.ContentModel = mongoose_1.default.model('Content', ContentSchema);
