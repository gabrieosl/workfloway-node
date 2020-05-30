import IObservationTypesEntity from '../entities/IObservationTypeEntity';
import FakeObservationTypesRepository from '../repositories/fakes/FakeObservationTypesRepository';
import CreateObservationTypeService from './CreateObservationTypeService';

let fakeObservationTypesRepository: FakeObservationTypesRepository;
let createObservationType: CreateObservationTypeService;

describe('Create ObservationType', () => {
  beforeEach(() => {
    fakeObservationTypesRepository = new FakeObservationTypesRepository();
    createObservationType = new CreateObservationTypeService(
      fakeObservationTypesRepository
    );
  });

  it('should be able to create a observationType', async () => {
    const observationType = await createObservationType.execute({
      name: 'Enviar para teste',
    });

    expect(observationType).toHaveProperty('id');
  });
});
