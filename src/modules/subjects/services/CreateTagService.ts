import { injectable, inject } from 'tsyringe';

import ITagsRepository from '../repositories/ITagsRepository';
import ITagEntity from '../entities/ITagEntity';
import ICreateTagDTO from '../dtos/ICreateTagDTO';

@injectable()
export default class CreateTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository
  ) {}

  public async execute({ name }: ICreateTagDTO): Promise<ITagEntity> {
    const tag = await this.tagsRepository.create({
      name,
    });

    return tag;
  }
}
