import {Hono} from 'hono';

const userRouter = new Hono();

userRouter.get('/',(c)=>{
    return c.body('Thank you for coming');
});

export default userRouter;