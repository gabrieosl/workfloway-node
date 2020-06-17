import { injectable, inject } from 'tsyringe';

import IWorkflowsRepository from '../repositories/IWorkflowsRepository';
import IWorkflowSchema from '../schemas/IWorkflowSchema';
import ICreateWorkflowDTO from '../dtos/ICreateWorkflowDTO';

@injectable()
export default class CreateWorkflowService {
  constructor(
    @inject('WorkflowsRepository')
    private workflowsRepository: IWorkflowsRepository
  ) {}

  public async execute({
    name,
    content,
  }: ICreateWorkflowDTO): Promise<IWorkflowSchema> {
    const workflow = await this.workflowsRepository.create({
      name,
      content,
    });

    return workflow;
  }
}
