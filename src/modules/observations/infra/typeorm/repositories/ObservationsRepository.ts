import { getRepository, Repository } from 'typeorm';

import Observation from '../entities/Observation';
import IObservationsRepository from '@modules/observations/repositories/IObservationsRepository';
import ICreateObservationDTO from '@modules/observations/dtos/ICreateObservationDTO';

export default class ObservationsRepository implements IObservationsRepository {
  private ormRepository: Repository<Observation>;

  constructor() {
    this.ormRepository = getRepository(Observation);
  }

  public async index(): Promise<Observation[]> {
    const observations = this.ormRepository.find();

    return observations;
  }

  public async create({
    comment,
    submission_id,
    type_id,
    value,
    user_id,
  }: ICreateObservationDTO): Promise<Observation> {
    const observation = this.ormRepository.create({
      comment,
      submission_id,
      type_id,
      value,
      user_id,
    });

    await this.ormRepository.save(observation);

    return observation;
  }

  public async delete(): Promise<boolean> {
    console.log('Delete a observation is not implemented.');
    return true;
  }
}
