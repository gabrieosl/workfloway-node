import ICreateWorkflowDTO from '../dtos/ICreateWorkflowDTO';
import IUpdateWorkflowDTO from '../dtos/IUpdateWorkflowDTO';
import IWorkflowEntity from '../schemas/IWorkflowSchema';

export default interface IWorkflowsRepository {
  create(data: ICreateWorkflowDTO): Promise<IWorkflowEntity>;
  index(size: number, page: number): Promise<IWorkflowEntity[]>;
  findById(id: string): Promise<IWorkflowEntity | undefined>;
  update(
    id: string,
    data: IUpdateWorkflowDTO
  ): Promise<IWorkflowEntity | undefined>;
}
