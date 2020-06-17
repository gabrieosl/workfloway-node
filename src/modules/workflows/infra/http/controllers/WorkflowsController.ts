import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListWorkflowsService from '@modules/workflows/services/ListWorkflowsService';
import CreateWorkflowService from '@modules/workflows/services/CreateWorkflowService';
import ShowWorkflowService from '@modules/workflows/services/ShowWorkflowService';

export default class WorkflowsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listWorkflows = container.resolve(ListWorkflowsService);

    const workflows = await listWorkflows.execute();

    return response.json(workflows);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const createWorkflow = container.resolve(CreateWorkflowService);

    const { name } = request.body;
    const content = JSON.stringify(request.body.content);

    const workflow = await createWorkflow.execute({ name, content });

    return response.json(workflow);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showWorkflow = container.resolve(ShowWorkflowService);

    const { id } = request.params;

    const workflow = await showWorkflow.execute(id);
    return response.json(workflow);
  }
}
