import IObservationsEntity from '../entities/IObservationEntity';
import FakeObservationsRepository from '../repositories/fakes/FakeObservationsRepository';
import CreateObservationService from './CreateObservationService';

let fakeObservationsRepository: FakeObservationsRepository;
let createObservation: CreateObservationService;

describe('Create Observation', () => {
  beforeEach(() => {
    fakeObservationsRepository = new FakeObservationsRepository();
    createObservation = new CreateObservationService(
      fakeObservationsRepository
    );
  });

  it('should be able to create a observation', async () => {
    const observation = await createObservation.execute({
      name: 'Enviar para teste',
    });

    expect(observation).toHaveProperty('id');
  });
});
