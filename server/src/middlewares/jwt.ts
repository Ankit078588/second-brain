import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET as string;



interface PayloadInterface {
    _id: string
}


export function generateToken(payload: PayloadInterface) {
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '5d' });
    return token;
}


export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.cookies?.token as string;
        console.log(token);
        if(!token) {
            return res.status(401).json({message: 'Please Login.'});
        }

        try {
            const payload = jwt.verify(token, JWT_SECRET) as PayloadInterface;
            req.userId = payload._id;
            next();
        } catch(e) {
            return res.status(401).json({message: 'Session Expired. Please Login.'})
        }
    } catch(e) {
        res.status(500).json({message: 'Internal Server Error.'})
    }
}


