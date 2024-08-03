import {Hono} from 'hono';

const loanRouter = new Hono();

loanRouter.get('/',(c)=>{
    return c.body('Thank you for loan');
});

export default loanRouter;