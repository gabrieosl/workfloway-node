import { getMongoRepository, MongoRepository } from 'typeorm';

import Workflow from '../schemas/Workflow';
import IWorkflowsRepository from '@modules/workflows/repositories/IWorkflowsRepository';
import ICreateWorkflowDTO from '@modules/workflows/dtos/ICreateWorkflowDTO';

export default class WorkflowsRepository implements IWorkflowsRepository {
  private ormRepository: MongoRepository<Workflow>;

  constructor() {
    this.ormRepository = getMongoRepository(Workflow, 'mongo');
  }

  public async index(): Promise<Workflow[]> {
    const workflows = this.ormRepository.find();

    return workflows;
  }

  public async create({ content }: ICreateWorkflowDTO): Promise<Workflow> {
    const workflow = this.ormRepository.create({
      content,
    });

    await this.ormRepository.save(workflow);

    return workflow;
  }

  public async delete(): Promise<boolean> {
    console.log('Delete a workflow is not implemented.');
    return true;
  }
}
