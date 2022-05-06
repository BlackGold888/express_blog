import { Response, Request, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization']
    const token = bearerHeader && bearerHeader.split(' ')[1];
    if (token == null) return res.redirect('/login');
    jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err, authData) => {
        if (err) return res.redirect('/login');
        next();
    })
 }