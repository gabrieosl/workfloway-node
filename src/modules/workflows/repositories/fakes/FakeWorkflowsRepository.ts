import { uuid } from 'uuidv4';

import IWorkflowsRepository from '../IWorkflowsRepository';
import ICreateWorkflowDTO from '@modules/workflows/dtos/ICreateWorkflowDTO';
import Workflow from '@modules/workflows/infra/typeorm/schemas/Workflow';
import { ObjectID } from 'typeorm';

export default class FakeWorkflowsRepository implements IWorkflowsRepository {
  private workflows: Workflow[] = [];

  public async index(): Promise<Workflow[]> {
    return this.workflows;
  }

  public async create({ content }: ICreateWorkflowDTO): Promise<Workflow> {
    const workflow = new Workflow();

    Object.assign(workflow, { id: uuid(), content });

    this.workflows.push(workflow);

    return workflow;
  }

  public async delete(workflow_id: ObjectID): Promise<boolean> {
    const obsType = this.workflows.findIndex(
      obsType => obsType.id === workflow_id
    );

    if (obsType) {
      this.workflows.splice(obsType, 1);
      return true;
    }
    return false;
  }
}
