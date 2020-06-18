import { uuid } from 'uuidv4';

import IWorkflowsRepository from '../IWorkflowsRepository';
import ICreateWorkflowDTO from '@modules/workflows/dtos/ICreateWorkflowDTO';
import IUpdateWorkflowDTO from '@modules/workflows/dtos/IUpdateWorkflowDTO';
import IWorkflow from '@modules/workflows/schemas/IWorkflowSchema';
import { ObjectID } from 'mongodb';

export default class FakeWorkflowsRepository implements IWorkflowsRepository {
  private workflows: IWorkflow[] = [];

  public async index(): Promise<IWorkflow[]> {
    return this.workflows;
  }

  public async create({
    name,
    content,
  }: ICreateWorkflowDTO): Promise<IWorkflow> {
    const workflow = {} as IWorkflow;

    Object.assign(workflow, { id: new ObjectID(), name, content });

    this.workflows.push(workflow);

    return workflow;
  }

  public async findById(id: string): Promise<IWorkflow | undefined> {
    const _id = ObjectID.createFromHexString(id);
    return this.workflows.find(wf => wf.id === _id);
  }

  public async update(
    id: string,
    { name, content }: IUpdateWorkflowDTO
  ): Promise<IWorkflow> {
    const _id = ObjectID.createFromHexString(id);
    const index = this.workflows.findIndex(wf => wf.id === _id);
    Object.assign(this.workflows[index], { name, content });

    return this.workflows[index];
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
