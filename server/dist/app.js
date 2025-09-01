"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const UserModel_1 = require("./models/UserModel");
const PORT = process.env.PORT || 3000;
const db_1 = __importDefault(require("./config/db"));
const jwt_1 = require("./middlewares/jwt");
const ContentModel_1 = require("./models/ContentModel");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.send('Welcome to Home page');
});
app.post('/api/auth/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        const user = yield UserModel_1.UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already registered.' });
        }
        const newUser = yield UserModel_1.UserModel.create({
            name,
            email,
            password
        });
        res.status(200).json({ message: 'Signup successful.' });
    }
    catch (e) {
        res.status(500).json({ message: 'Internal server error.' });
    }
}));
app.post('/api/auth/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        const user = yield UserModel_1.UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Incorrect credentials.' });
        }
        const isMatch = user.comparePassword(password);
        if (isMatch) {
            const token = (0, jwt_1.generateToken)({ _id: user._id });
            return res.status(200).json({ message: 'Login successful.', token: token });
        }
        else {
            return res.status(400).json({ message: 'Incorrect credientials.' });
        }
    }
    catch (e) {
        res.status(500).json({ message: 'Internal server error.' });
    }
}));
app.post('/api/content', jwt_1.isAuthenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.userId;
        const { title, link } = req.body;
        if (!title || !link) {
            return res.status(400).json({ message: 'All fields are required.' });
        }
        const newContent = yield ContentModel_1.ContentModel.create({
            title,
            link,
            userId
        });
        res.status(200).json({ message: 'Content added.', newContent });
    }
    catch (e) {
        res.status(500).json({ message: 'Internal server error.' });
    }
}));
app.get('/api/content', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contents = yield ContentModel_1.ContentModel.find({ userId: req.userId }).populate('userId', 'name');
        res.status(200).json({ message: 'Content fetched.', contents });
    }
    catch (e) {
        res.status(500).json({ message: 'Internal server error.' });
    }
}));
app.delete('/api/content', jwt_1.isAuthenticated, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { content_id } = req.body;
        if (!content_id)
            return res.status(403).json({ message: 'Please provide content_id' });
        const deletedContent = yield ContentModel_1.ContentModel.deleteOne({ userId: req.userId, _id: content_id });
        console.log(deletedContent);
        if (deletedContent.deletedCount === 0)
            return res.status(400).json({ message: 'Content not found.' });
        res.status(200).json({ message: 'Content deleted.', deletedContent });
    }
    catch (e) {
        res.status(500).json({ message: 'Internal server error.' });
    }
}));
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.default)();
    console.log(`Server Running on PORT: ${PORT}`);
}));
