import { uuid } from 'uuidv4';

import ITagsRepository from '../ITagsRepository';
import ICreateTagDTO from '@modules/subjects/dtos/ICreateTagDTO';
import Tag from '@modules/subjects/infra/typeorm/entities/Tag';

export default class FakeTagsRepository implements ITagsRepository {
  private tags: Tag[] = [];

  public async index(): Promise<Tag[]> {
    return this.tags;
  }

  public async create({ name }: ICreateTagDTO): Promise<Tag> {
    const tag = new Tag();

    Object.assign(tag, { id: uuid(), name });

    this.tags.push(tag);

    return tag;
  }

  public async update(id: string, { name }: ICreateTagDTO): Promise<Tag> {
    const index = this.tags.findIndex(tag => tag.id === id);
    if (index) {
      this.tags[index].name = name;
    }

    return this.tags[index];
  }

  public async delete(id: string): Promise<void> {
    this.tags = this.tags.filter(tag => tag.id !== id);
  }
}
