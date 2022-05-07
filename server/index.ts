import express, { Express } from 'express';
import { router as loginRouter } from './routes/login';
import { router as blogRouter } from './routes/blog';
import mongoose from 'mongoose';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();
app.use(helmet());

app.use(loginRouter);
app.use('/blog', blogRouter);

mongoose.connect(`${process.env.DB_URL}`)
    .then(res => app.listen(port, () => console.log(`server started on http://localhost:${port}`)))
    .catch((err) => console.log(err));


