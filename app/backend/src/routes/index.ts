import { Router } from 'express';

import clubsRouter from './clubs.routes';
import matchsRouter from './match.routes';
import sessionsRouter from './sessions.routes';
import leaderboard from './leaderboard.routes';

const router = Router();

router.use('/login', sessionsRouter);
router.use('/clubs', clubsRouter);
router.use('/matchs', matchsRouter);
router.use('/leaderboard', leaderboard);

export default router;
