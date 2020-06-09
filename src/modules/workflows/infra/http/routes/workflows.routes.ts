import { Router } from 'express';

import WorkflowsController from '../controllers/WorkflowsController';

const workflowsRouter = Router();
const workflowsController = new WorkflowsController();

workflowsRouter.get('/', workflowsController.index);
// TODO observationsTypesRouter.use(Middleware to ensure is manager);
workflowsRouter.post('/', workflowsController.create);
export default workflowsRouter;
