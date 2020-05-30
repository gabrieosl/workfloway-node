import { getRepository, Repository } from 'typeorm';

import ObservationType from '../entities/ObservationType';
import IObservationTypesRepository from '@modules/observations/repositories/IObservationTypesRepository';
import ICreateObservationTypeDTO from '@modules/observations/dtos/ICreateObservationTypeDTO';

export default class ObservationTypesRepository
  implements IObservationTypesRepository {
  private ormRepository: Repository<ObservationType>;

  constructor() {
    this.ormRepository = getRepository(ObservationType);
  }

  public async index(): Promise<ObservationType[]> {
    const observationTypes = this.ormRepository.find();

    return observationTypes;
  }

  public async create({
    name,
  }: ICreateObservationTypeDTO): Promise<ObservationType> {
    const observationType = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(observationType);

    return observationType;
  }

  public async delete(): Promise<boolean> {
    console.log('Delete a observationType is not implemented.');
    return true;
  }
}
