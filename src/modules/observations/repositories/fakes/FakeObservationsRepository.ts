import { uuid } from 'uuidv4';

import IObservationsRepository from '../IObservationsRepository';
import ICreateObservationDTO from '@modules/observations/dtos/ICreateObservationDTO';
import IUpdateObservationDTO from '@modules/observations/dtos/IUpdateObservationDTO';
import Observation from '@modules/observations/infra/typeorm/entities/Observation';

export default class FakeObservationsRepository
  implements IObservationsRepository {
  private observations: Observation[] = [];

  public async index(): Promise<Observation[]> {
    return this.observations;
  }

  public async create({
    comment,
    submission_id,
    type_id,
    value,
    user_id,
  }: ICreateObservationDTO): Promise<Observation> {
    const observation = new Observation();

    Object.assign(observation, {
      id: uuid(),
      comment,
      submission_id,
      type_id,
      value,
      user_id,
    });

    this.observations.push(observation);

    return observation;
  }

  public async delete(observation_id: string): Promise<boolean> {
    const obs = this.observations.findIndex(obs => obs.id === observation_id);

    if (obs) {
      this.observations.splice(obs, 1);
      return true;
    }
    return false;
  }

  public async findById(id: string): Promise<Observation | undefined> {
    return this.observations.find(item => item.id === id);
  }

  public async findByUserId(userId: string): Promise<Observation[]> {
    return this.observations.filter(item => item.user_id === userId);
  }

  public async save(data: Observation): Promise<Observation> {
    const index = this.observations.findIndex(item => item.id === data.id);

    if (index >= 0) {
      this.observations[index] = data;
    }

    return data;
  }
}
