import ICreateWorkflowDTO from '../dtos/ICreateWorkflowDTO';
import IWorflowEntity from '../schemas/IWorkflowSchema';

export default interface IWorkflowsRepository {
  create(data: ICreateWorkflowDTO): Promise<IWorflowEntity>;
  index(): Promise<IWorflowEntity[]>;
}
