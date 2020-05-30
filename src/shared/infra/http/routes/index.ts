import { Router } from 'express';

import observationsRouter from '@modules/observations/infra/http/routes/observations.routes';
import observationTypesRouter from '@modules/observations/infra/http/routes/observationTypes.routes';
import subjectsRouter from '@modules/subjects/infra/http/routes/subjects.routes';
import workflowsRouter from '@modules/workflows/infra/http/routes/workflows.routes';

const routes = Router();
routes.use('/observations', observationsRouter);
routes.use('/observationtypes', observationTypesRouter);
routes.use('/subjects', subjectsRouter);
routes.use('/workflows', workflowsRouter);
routes.use('/', (request, response) => response.json({ home: 'home' }));

export default routes;
