import { getRepository, Repository } from 'typeorm';

import Tag from '../entities/Tag';
import ITagsRepository from '@modules/subjects/repositories/ITagsRepository';
import ICreateTagDTO from '@modules/subjects/dtos/ICreateTagDTO';
import Observation from '@modules/observations/infra/typeorm/entities/Observation';
import Submission from '../entities/Submission';
import IUpdateTagDTO from '@modules/subjects/dtos/IUpdateTagDTO';

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

  public async update(id: string, { name }: IUpdateTagDTO): Promise<Tag> {
    const tag = await this.ormRepository.findOne(id);
    if (!tag) {
      throw new Error('Tag not found');
    }
    tag.name = name;
    await this.ormRepository.save(tag);
    return tag;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
