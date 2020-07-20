import { injectable, inject } from 'tsyringe';

import IObservationTypesRepository from '../repositories/IObservationTypesRepository';
import IObservationTypeEntity from '../entities/IObservationTypeEntity';
import IUpdateObservationTypeDTO from '../dtos/IUpdateObservationTypeDTO';

@injectable()
export default class UpdateObservationTypeService {
  constructor(
    @inject('ObservationTypesRepository')
    private observationTypesRepository: IObservationTypesRepository
  ) {}

  public async execute({
    id,
    name,
  }: IUpdateObservationTypeDTO): Promise<IObservationTypeEntity> {
    const observationType = await this.observationTypesRepository.update({
      id,
      name,
    });

    return observationType;
  }
}
