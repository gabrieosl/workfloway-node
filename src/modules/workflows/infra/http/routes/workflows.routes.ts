import { Router } from 'express';

import WorkflowsController from '../controllers/WorkflowsController';

const workflowsRouter = Router();
const workflowsController = new WorkflowsController();

workflowsRouter.get('/', workflowsController.index);
workflowsRouter.get('/:id', workflowsController.show);
// TODO observationsTypesRouter.use(Middleware to ensure is manager);
workflowsRouter.post('/', workflowsController.create);
workflowsRouter.put('/:id', workflowsController.update);
// workflowsRouter.delete('/:id', workflowsController.delete);
export default workflowsRouter;
