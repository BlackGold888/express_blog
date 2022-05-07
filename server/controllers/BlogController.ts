import {Request, Response} from "express";
import { Blog } from '../models/Blog';

export class BlogController {
    static save(req: Request, res: Response){
        const blog = new Blog({
            title: 'Title 1',
            user_id: 1,
            description: 'lorem lorem lorem lorem'
        });

        blog.save()
            .then((res: any) => {
                res.send(res);
            })
            .catch((err: any) => res.status(500).send(err));
    }
}