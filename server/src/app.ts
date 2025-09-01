import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import { UserModel } from './models/UserModel';

const PORT = process.env.PORT || 3000;
import connectDB from './config/db';
import { generateToken, isAuthenticated } from './middlewares/jwt';
import { ContentModel } from './models/ContentModel';


const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());




app.get('/', (req, res) => {
    res.send('Welcome to Home page');
})


// Auth Routes
app.post('/api/auth/register', async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({message: 'All fields are required.'});
        }


        // Check if user already exists
        const user = await UserModel.findOne({email});
        if(user) {
            return res.status(400).json({message: 'Email already registered.'});
        }
 
        // Register new user
        const newUser = await UserModel.create({
            name,
            email,
            password         // hash password before saving
        });

        res.status(200).json({message: 'Signup successful.'});
    } catch(e) {
        res.status(500).json({message: 'Internal server error.'});
    }
})

app.post('/api/auth/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message: 'All fields are required.'});
        }

        const user = await UserModel.findOne({email});
        if(!user) {
            return res.status(404).json({message: 'Incorrect credentials.'});
        }

        const isMatch = user.comparePassword(password);
        if(isMatch) {
            const token = generateToken({_id: user._id as string});
            return res.status(200).json({message: 'Login successful.', token: token});
        } else{
            return res.status(400).json({message: 'Incorrect credientials.'})
        }
    } catch(e) {
        res.status(500).json({message: 'Internal server error.'});
    }
})




// Content Routes
// Post content
app.post('/api/content', isAuthenticated, async (req, res) => {
    try {
        const userId = req.userId as string;

        const {title, link} = req.body;
        if(!title || !link) {
            return res.status(400).json({message: 'All fields are required.'});
        }

        const newContent = await ContentModel.create({
            title,
            link,
            userId
        });

        res.status(200).json({message: 'Content added.', newContent})
    } catch(e) {
        res.status(500).json({message: 'Internal server error.'});
    }
})

// Fetch content  --> isAuthenticated
app.get('/api/content', async (req, res) => {
    try {
        const contents = await ContentModel.find({userId: req.userId}).populate('userId', 'name');

        res.status(200).json({message: 'Content fetched.', contents})
    } catch(e) {
        res.status(500).json({message: 'Internal server error.'});
    }
})

// Delete content
app.delete('/api/content', isAuthenticated, async (req, res) => {
    try {
        const { content_id } = req.body;
        if(!content_id) return res.status(403).json({message: 'Please provide content_id'});

        const deletedContent = await ContentModel.deleteOne({userId: req.userId, _id: content_id});
        console.log(deletedContent)
        if(deletedContent.deletedCount === 0) return res.status(400).json({message: 'Content not found.'});

        res.status(200).json({message: 'Content deleted.', deletedContent})
    } catch(e) {
        res.status(500).json({message: 'Internal server error.'});
    }
})


// Content 
// app.post('/', ())










app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server Running on PORT: ${PORT}`);
})



