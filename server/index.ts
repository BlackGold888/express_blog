import express, { Express } from 'express';
import { router as loginRouter } from './routes/login';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(helmet());

app.use(loginRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server started on http://localhost:${port}`));
