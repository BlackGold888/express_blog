import {Request, Response} from "express";

export class LoginController {
    static login(req: Request, res: Response) {
        res.status(200).send('ssss');
    }
}