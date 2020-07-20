import IObservationTypesEntity from '../entities/IObservationTypeEntity';
import FakeObservationTypesRepository from '../repositories/fakes/FakeObservationTypesRepository';
import CreateObservationTypeService from './CreateObservationTypeService';
import UpdateObservationTypeService from './UpdateObservationTypeService';

let fakeObservationTypesRepository: FakeObservationTypesRepository;
let createObservationType: CreateObservationTypeService;
let updateObservationType: UpdateObservationTypeService;

describe('Update ObservationType', () => {
  beforeEach(() => {
    fakeObservationTypesRepository = new FakeObservationTypesRepository();
    createObservationType = new CreateObservationTypeService(
      fakeObservationTypesRepository
    );
    updateObservationType = new UpdateObservationTypeService(
      fakeObservationTypesRepository
    );
  });

  it('should be able to update a observationType', async () => {
    const observationType = await createObservationType.execute({
      name: 'Enviar para teste',
    });

    const updatedObservationType = await updateObservationType.execute({
      id: observationType.id,
      name: 'Receber do teste',
    });

    expect(updatedObservationType.name).toEqual('Receber do teste');
  });
});
