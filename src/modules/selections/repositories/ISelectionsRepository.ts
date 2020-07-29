import ICreateSelectionDTO from '../dtos/ICreateSelectionDTO';
import ISelectionEntity from '../schemas/ISelectionSchema';

export default interface ISelectionsRepository {
  create(data: ICreateSelectionDTO): Promise<ISelectionEntity>;
  index(size: number, page: number): Promise<ISelectionEntity[]>;
  findById(id: string): Promise<ISelectionEntity | undefined>;
}
