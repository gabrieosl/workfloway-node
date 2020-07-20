import { getRepository, Repository } from 'typeorm';

import ObservationType from '../entities/ObservationType';
import IObservationTypesRepository from '@modules/observations/repositories/IObservationTypesRepository';
import ICreateObservationTypeDTO from '@modules/observations/dtos/ICreateObservationTypeDTO';
import IUpdateObservationTypeDTO from '@modules/observations/dtos/IUpdateObservationTypeDTO';

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

  public async update({
    id,
    name,
  }: IUpdateObservationTypeDTO): Promise<ObservationType> {
    const observationType = await this.ormRepository.findOne(id);

    if (observationType) {
      observationType.name = name;
      await this.ormRepository.save(observationType);
      return observationType;
    }
    return {} as ObservationType;
  }
}
