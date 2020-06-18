import { injectable, inject } from 'tsyringe';

import IWorkflowsRepository from '../repositories/IWorkflowsRepository';
import IWorkflowSchema from '../schemas/IWorkflowSchema';
import IUpdateWorkflowDTO from '../dtos/IUpdateWorkflowDTO';

@injectable()
export default class UpdateWorkflowService {
  constructor(
    @inject('WorkflowsRepository')
    private workflowsRepository: IWorkflowsRepository
  ) {}

  public async execute(
    id: string,
    { name, content }: IUpdateWorkflowDTO
  ): Promise<IWorkflowSchema> {
    const workflow = await this.workflowsRepository.update(id, {
      name,
      content,
    });

    if (!workflow) {
      throw new Error('not found');
    }

    return workflow;
  }
}
