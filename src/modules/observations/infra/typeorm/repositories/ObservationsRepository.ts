import { getRepository, Repository } from 'typeorm';

import Observation from '../entities/Observation';
import IObservationsRepository from '@modules/observations/repositories/IObservationsRepository';
import ICreateObservationDTO from '@modules/observations/dtos/ICreateObservationDTO';
import IUpdateObservationDTO from '@modules/observations/dtos/IUpdateObservationDTO';

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
    type_id,
    subject_ids,
    user_id,
    value,
  }: ICreateObservationDTO): Promise<Observation[]> {
    const observations: Observation[] = [];
    subject_ids.forEach(async subject => {
      const observation = this.ormRepository.create({
        comment,
        subject_id: subject,
        type_id,
        value,
        user_id,
      });

      await this.ormRepository.save(observation);
      observations.push(observation);
    });

    return observations;
  }

  public async delete(): Promise<boolean> {
    console.log('Delete a observation is not implemented.');
    return true;
  }

  public async findById(id: string): Promise<Observation | undefined> {
    const observation = await this.ormRepository.findOne(id);
    return observation;
  }

  public async findByUserId(userId: string): Promise<Observation[]> {
    const observations = await this.ormRepository.find({
      where: {
        user_id: userId,
      },
    });

    return observations;
  }

  public async save(data: Observation): Promise<Observation> {
    return this.ormRepository.save(data);
  }
}
