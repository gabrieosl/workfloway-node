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
      comment: 'some-comment',
      submission_id: 'some-submission-id',
      type_id: 'some-type-id',
      value: 'some value',
      user_id: 'some-user-id',
    });

    expect(observation).toHaveProperty('id');
  });
});
