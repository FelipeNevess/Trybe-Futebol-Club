import { Router } from 'express';

import clubsRouter from './clubs.routes';
import sessionsRouter from './sessions.routes';

const router = Router();

router.use('/login', sessionsRouter);
router.use('/clubs', clubsRouter);

export default router;
