import { injectable, inject } from 'tsyringe';

import IObservationTypesRepository from '../repositories/IObservationTypesRepository';
import IObservationTypeEntity from '../entities/IObservationTypeEntity';
import ICreateObservationTypeDTO from '../dtos/ICreateObservationTypeDTO';

@injectable()
export default class CreateObservationTypeService {
  constructor(
    @inject('ObservationTypesRepository')
    private observationTypesRepository: IObservationTypesRepository
  ) {}

  public async execute({
    name,
  }: ICreateObservationTypeDTO): Promise<IObservationTypeEntity> {
    const observationType = await this.observationTypesRepository.create({
      name,
    });

    return observationType;
  }
}
