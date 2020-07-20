import { getRepository, Repository } from 'typeorm';

import Tag from '../entities/Tag';
import ITagsRepository from '@modules/subjects/repositories/ITagsRepository';
import ICreateTagDTO from '@modules/subjects/dtos/ICreateTagDTO';
import Observation from '@modules/observations/infra/typeorm/entities/Observation';
import Submission from '../entities/Submission';

export default class TagsRepository implements ITagsRepository {
  private ormRepository: Repository<Tag>;

  constructor() {
    this.ormRepository = getRepository(Tag);
  }

  public async index(size: number, page: number): Promise<Tag[]> {
    const tags = await this.ormRepository.find({
      skip: (page - 1) * size,
      take: size,
    });

    return tags;
  }

  public async create({ name }: ICreateTagDTO): Promise<Tag> {
    const tag = this.ormRepository.create({
      name,
    });

    this.ormRepository.save(tag);

    return tag;
  }
}
