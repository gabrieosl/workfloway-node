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
    const observations = await createObservation.execute({
      comment: 'some-comment',
      subject_ids: ['some-subject-id'],
      type_id: 'some-type-id',
      value: 'some value',
      user_id: 'some-user-id',
    });

    expect(observations[0]).toHaveProperty('id');
  });
});
