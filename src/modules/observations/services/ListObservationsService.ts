import { injectable, inject } from 'tsyringe';

import IObservationsRepository from '../repositories/IObservationsRepository';
import IObservationEntity from '../entities/IObservationEntity';

@injectable()
export default class ListObservationsService {
  constructor(
    @inject('ObservationsRepository')
    private observationsRepository: IObservationsRepository
  ) {}

  public async execute(): Promise<IObservationEntity[]> {
    const observations = await this.observationsRepository.index();

    return observations;
  }
}
