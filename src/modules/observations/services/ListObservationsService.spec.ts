import IObservationsEntity from '../entities/IObservationEntity';
import FakeObservationsRepository from '../repositories/fakes/FakeObservationsRepository';
import ListObservationsService from './ListObservationsService';

let fakeObservationsRepository: FakeObservationsRepository;
let listObservations: ListObservationsService;

describe('List Observations', () => {
  beforeEach(() => {
    fakeObservationsRepository = new FakeObservationsRepository();
    listObservations = new ListObservationsService(fakeObservationsRepository);
  });

  it('should be able to list observations', async () => {
    expect(await listObservations.execute()).toBeInstanceOf(Array);
  });
});
