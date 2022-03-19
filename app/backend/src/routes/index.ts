import { Router } from 'express';

import sessionsRouter from './sessions.routes';

const router = Router();

router.use('/login', sessionsRouter);

export default router;
