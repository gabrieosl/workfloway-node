import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListWorkflowsService from '@modules/workflows/services/ListWorkflowsService';
import CreateWorkflowService from '@modules/workflows/services/CreateWorkflowService';

export default class WorkflowsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listWorkflows = container.resolve(ListWorkflowsService);

    const workflows = await listWorkflows.execute();

    return response.json(workflows);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createWorkflow = container.resolve(CreateWorkflowService);

    const content = JSON.stringify(request.body);

    const workflow = await createWorkflow.execute({ content });

    return response.json(workflow);
  }
}
