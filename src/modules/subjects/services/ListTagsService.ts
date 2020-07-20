import { injectable, inject } from 'tsyringe';

import ITagsRepository from '../repositories/ITagsRepository';
import ITagEntity from '../entities/ITagEntity';

@injectable()
export default class ListTagsService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository
  ) {}

  public async execute(size = 15, page = 1): Promise<ITagEntity[]> {
    const tags = await this.tagsRepository.index(size, page);

    return tags;
  }
}
