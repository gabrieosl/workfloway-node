import { injectable, inject } from 'tsyringe';

import ITagsRepository from '../repositories/ITagsRepository';
import ITagEntity from '../entities/ITagEntity';
import IUpdateTagDTO from '../dtos/IUpdateTagDTO';

@injectable()
export default class UpdateTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository
  ) {}

  public async execute(
    id: string,
    { name }: IUpdateTagDTO
  ): Promise<ITagEntity> {
    const updatedTag = await this.tagsRepository.update(id, {
      name,
    });

    return updatedTag;
  }
}
