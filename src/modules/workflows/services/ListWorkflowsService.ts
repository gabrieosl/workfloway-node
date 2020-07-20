import { injectable, inject } from 'tsyringe';

import IWorkflowsRepository from '../repositories/IWorkflowsRepository';
import IWorkflowEntity from '../schemas/IWorkflowSchema';

@injectable()
export default class ListWorkflowsService {
  constructor(
    @inject('WorkflowsRepository')
    private workflowsRepository: IWorkflowsRepository
  ) {}

  public async execute(size = 15, page = 1): Promise<IWorkflowEntity[]> {
    const workflows = await this.workflowsRepository.index(size, page);

    return workflows;
  }
}
