import { Hono } from 'hono'
import {PrismaClient} from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import userRouter from './routes/user';
import loanRouter from './routes/loan';

const app = new Hono();

app.route('/api/v1/user',userRouter);
app.route('/api/v1/loan',loanRouter);

app.get('/', (c) => {
  return c.text('Hello Dhruv!')
})

export default app
