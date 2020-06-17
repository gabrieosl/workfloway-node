import { uuid } from 'uuidv4';

import IWorkflowsRepository from '../IWorkflowsRepository';
import ICreateWorkflowDTO from '@modules/workflows/dtos/ICreateWorkflowDTO';
import IWorkflow from '@modules/workflows/schemas/IWorkflowSchema';
import { ObjectID } from 'mongodb';

export default class FakeWorkflowsRepository implements IWorkflowsRepository {
  private workflows: IWorkflow[] = [];

  public async index(): Promise<IWorkflow[]> {
    return this.workflows;
  }

  public async create({ content }: ICreateWorkflowDTO): Promise<IWorkflow> {
    const workflow = {} as IWorkflow;

    Object.assign(workflow, { id: new ObjectID(), content });

    this.workflows.push(workflow);

    return workflow;
  }

  public async findById(id: string): Promise<IWorkflow | undefined> {
    const _id = ObjectID.createFromHexString(id);
    return this.workflows.find(wf => wf.id === _id);
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
