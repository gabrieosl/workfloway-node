import { uuid } from 'uuidv4';

import IObservationTypesRepository from '../IObservationTypesRepository';
import ICreateObservationTypeDTO from '@modules/observations/dtos/ICreateObservationTypeDTO';
import ObservationType from '@modules/observations/infra/typeorm/entities/ObservationType';

export default class FakeObservationTypesRepository
  implements IObservationTypesRepository {
  private observationTypes: ObservationType[] = [];

  public async index(): Promise<ObservationType[]> {
    return this.observationTypes;
  }

  public async create({
    name,
  }: ICreateObservationTypeDTO): Promise<ObservationType> {
    const observationType = new ObservationType();

    Object.assign(observationType, { id: uuid(), name });

    this.observationTypes.push(observationType);

    return observationType;
  }

  public async delete(observationType_id: string): Promise<boolean> {
    const obsType = this.observationTypes.findIndex(
      obsType => obsType.id === observationType_id
    );

    if (obsType) {
      this.observationTypes.splice(obsType, 1);
      return true;
    }
    return false;
  }
}
