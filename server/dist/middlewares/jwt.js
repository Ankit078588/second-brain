"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = generateToken;
exports.isAuthenticated = isAuthenticated;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
function generateToken(payload) {
    const token = jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: '5d' });
    return token;
}
function isAuthenticated(req, res, next) {
    var _a;
    try {
        const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
        console.log(token);
        if (!token) {
            return res.status(401).json({ message: 'Please Login.' });
        }
        try {
            const payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            req.userId = payload._id;
            next();
        }
        catch (e) {
            return res.status(401).json({ message: 'Session Expired. Please Login.' });
        }
    }
    catch (e) {
        res.status(500).json({ message: 'Internal Server Error.' });
    }
}
