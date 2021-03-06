import { getMongoRepository, MongoRepository } from 'typeorm';

import Workflow from '../schemas/Workflow';
import IWorkflowsRepository from '@modules/workflows/repositories/IWorkflowsRepository';
import ICreateWorkflowDTO from '@modules/workflows/dtos/ICreateWorkflowDTO';
import IUpdateWorkflowDTO from '@modules/workflows/dtos/IUpdateWorkflowDTO';

export default class WorkflowsRepository implements IWorkflowsRepository {
  private ormRepository: MongoRepository<Workflow>;

  constructor() {
    this.ormRepository = getMongoRepository(Workflow, 'mongo');
  }

  public async index(size: number, page: number): Promise<Workflow[]> {
    const workflows = this.ormRepository.find({
      skip: size * (page - 1),
      take: size,
      order: {
        name: 'ASC',
      },
      select: ['id', 'name'],
    });

    return workflows;
  }

  public async create({
    name,
    content,
  }: ICreateWorkflowDTO): Promise<Workflow> {
    const workflow = this.ormRepository.create({
      name,
      content,
    });

    await this.ormRepository.save(workflow);

    return workflow;
  }

  public async findById(id: string): Promise<Workflow | undefined> {
    const workflow = await this.ormRepository.findOne(id);
    return workflow;
  }

  public async update(
    id: string,
    { name, content }: IUpdateWorkflowDTO
  ): Promise<Workflow | undefined> {
    const workflow = await this.findById(id);
    if (workflow) {
      workflow.content = content;
      workflow.name = name;
      this.ormRepository.save(workflow);
    }

    return workflow;
  }

  public async delete(): Promise<boolean> {
    console.log('Delete a workflow is not implemented.');
    return true;
  }
}
