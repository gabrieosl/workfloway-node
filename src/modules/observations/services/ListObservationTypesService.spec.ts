import IObservationTypesEntity from '../entities/IObservationTypeEntity';
import FakeObservationTypesRepository from '../repositories/fakes/FakeObservationTypesRepository';
import ListObservationTypesService from './ListObservationTypesService';

let fakeObservationTypesRepository: FakeObservationTypesRepository;
let listObservationTypes: ListObservationTypesService;

describe('List ObservationTypes', () => {
  beforeEach(() => {
    fakeObservationTypesRepository = new FakeObservationTypesRepository();
    listObservationTypes = new ListObservationTypesService(
      fakeObservationTypesRepository
    );
  });

  it('should be able to list observationTypes', async () => {
    expect(await listObservationTypes.execute()).toBeInstanceOf(Array);
  });
});
