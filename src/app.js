import express from 'express';
import sessionRoutes from './routers/session.routes';
import userRouter from './routers/users.routes';

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/login', sessionRoutes);

app.listen(3000);

export default app;