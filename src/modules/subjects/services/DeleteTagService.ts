import { injectable, inject } from 'tsyringe';

import ITagsRepository from '../repositories/ITagsRepository';
import ITagEntity from '../entities/ITagEntity';

@injectable()
export default class DeleteTagService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository
  ) {}

  public async execute(id: string): Promise<void> {
    await this.tagsRepository.delete(id);
  }
}
