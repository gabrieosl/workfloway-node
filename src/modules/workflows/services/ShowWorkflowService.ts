import { injectable, inject } from 'tsyringe';

import IWorkflowsRepository from '../repositories/IWorkflowsRepository';
import IWorkflowEntity from '../schemas/IWorkflowSchema';

@injectable()
export default class ShowWorkflowsService {
  constructor(
    @inject('WorkflowsRepository')
    private workflowsRepository: IWorkflowsRepository
  ) {}

  public async execute(id: string): Promise<IWorkflowEntity | undefined> {
    const workflow = await this.workflowsRepository.findById(id);
    return workflow;
  }
}
