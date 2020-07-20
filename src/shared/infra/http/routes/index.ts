import { Router } from 'express';

import observationsRouter from '@modules/observations/infra/http/routes/observations.routes';
import observationTypesRouter from '@modules/observations/infra/http/routes/observationTypes.routes';
import subjectsRouter from '@modules/subjects/infra/http/routes/subjects.routes';
import tagsRouter from '@modules/subjects/infra/http/routes/tags.routes';
import workflowsRouter from '@modules/workflows/infra/http/routes/workflows.routes';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordsRouter from '@modules/users/infra/http/routes/passwords.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();
routes.use('/observations', observationsRouter);
routes.use('/observationtypes', observationTypesRouter);
routes.use('/subjects', subjectsRouter);
routes.use('/tags', tagsRouter);
routes.use('/workflows', workflowsRouter);

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordsRouter);
routes.use('/profile', profileRouter);

routes.use('/', (request, response) => response.json({ home: 'home' }));

export default routes;
