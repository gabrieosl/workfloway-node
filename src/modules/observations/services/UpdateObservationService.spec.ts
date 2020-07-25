import IObservationsEntity from '../entities/IObservationEntity';
import FakeObservationsRepository from '../repositories/fakes/FakeObservationsRepository';
import CreateObservationService from './CreateObservationService';
import UpdateObservationService from './UpdateObservationService';

let fakeObservationsRepository: FakeObservationsRepository;
let createObservation: CreateObservationService;
let updateObservation: UpdateObservationService;

describe('Update Observation', () => {
  beforeEach(() => {
    fakeObservationsRepository = new FakeObservationsRepository();
    createObservation = new CreateObservationService(
      fakeObservationsRepository
    );
    updateObservation = new UpdateObservationService(
      fakeObservationsRepository
    );
  });

  it('should be able to update a observation', async () => {
    const observation = await createObservation.execute({
      comment: 'some comment',
      subject_ids: ['some-submission-id'],
      type_id: 'some-type-id',
      value: 'some value',
      user_id: 'some-user-id',
    });

    const updatedObservation = await updateObservation.execute({
      id: observation[0].id,
      type_id: 'some-type-id2',
    });

    expect(updatedObservation.type_id).toEqual('some-type-id2');
  });
});
