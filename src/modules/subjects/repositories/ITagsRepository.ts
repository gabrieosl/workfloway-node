import ITagEntity from '../entities/ITagEntity';
import ICreateTagDTO from '../dtos/ICreateTagDTO';

export default interface ITagsRepository {
  index(size: number, page: number): Promise<ITagEntity[]>;
  create(data: ICreateTagDTO): Promise<ITagEntity>;
}
