import ICreateWorkflowDTO from '../dtos/ICreateWorkflowDTO';
import IWorkflowEntity from '../schemas/IWorkflowSchema';

export default interface IWorkflowsRepository {
  create(data: ICreateWorkflowDTO): Promise<IWorkflowEntity>;
  index(): Promise<IWorkflowEntity[]>;
  findById(id: string): Promise<IWorkflowEntity | undefined>;
}
