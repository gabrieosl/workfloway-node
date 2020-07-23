import ITagEntity from '../entities/ITagEntity';
import ICreateTagDTO from '../dtos/ICreateTagDTO';
import IUpdateTagDTO from '../dtos/IUpdateTagDTO';

export default interface ITagsRepository {
  index(size: number, page: number): Promise<ITagEntity[]>;
  create(data: ICreateTagDTO): Promise<ITagEntity>;
  update(id: string, data: IUpdateTagDTO): Promise<ITagEntity>;
  delete(id: string): Promise<void>;
}
