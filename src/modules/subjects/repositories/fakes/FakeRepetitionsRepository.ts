import { uuid } from 'uuidv4';

import IRepetitionsRepository from '../IRepetitionsRepository';
import ICreateRepetitionDTO from '@modules/subjects/dtos/ICreateRepetitionDTO';
import Repetition from '@modules/subjects/infra/typeorm/entities/Repetition';

export default class FakeRepetitionsRepository
  implements IRepetitionsRepository {
  private repetitions: Repetition[] = [];

  public async index(): Promise<Repetition[]> {
    return this.repetitions;
  }

  public async create({
    count,
    customer,
    subject_id,
    vehicle,
  }: ICreateRepetitionDTO): Promise<Repetition> {
    const repetition = new Repetition();

    Object.assign(repetition, {
      id: uuid(),
      count,
      customer,
      subject_id,
      vehicle,
    });

    this.repetitions.push(repetition);

    return repetition;
  }
}
