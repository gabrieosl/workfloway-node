import { getMongoRepository, MongoRepository } from 'typeorm';

import Selection from '../schemas/Selection';
import ISelectionsRepository from '@modules/selections/repositories/ISelectionsRepository';
import ICreateSelectionDTO from '@modules/selections/dtos/ICreateSelectionDTO';

export default class SelectionsRepository implements ISelectionsRepository {
  private ormRepository: MongoRepository<Selection>;

  constructor() {
    this.ormRepository = getMongoRepository(Selection, 'mongo');
  }

  public async index(size: number, page: number): Promise<Selection[]> {
    const selections = this.ormRepository.find({
      skip: size * (page - 1),
      take: size,
      order: {
        updated_at: 'DESC',
      },
      select: ['id', 'name'],
    });

    return selections;
  }

  public async create({
    id,
    name,
    content,
  }: ICreateSelectionDTO): Promise<Selection> {
    const selection = await this.ormRepository.save({
      id,
      name,
      content,
    });

    return selection;
  }

  public async findById(id: string): Promise<Selection | undefined> {
    const selection = await this.ormRepository.findOne(id);
    return selection;
  }

  public async delete(): Promise<boolean> {
    console.log('Delete a selection is not implemented.');
    return true;
  }
}
