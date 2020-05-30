import { injectable, inject } from 'tsyringe';

import IObservationTypesRepository from '../repositories/IObservationTypesRepository';
import IObservationTypeEntity from '../entities/IObservationTypeEntity';

@injectable()
export default class ListObservationTypesService {
  constructor(
    @inject('ObservationTypesRepository')
    private observationTypesRepository: IObservationTypesRepository
  ) {}

  public async execute(): Promise<IObservationTypeEntity[]> {
    const observationTypes = await this.observationTypesRepository.index();

    return observationTypes;
  }
}
