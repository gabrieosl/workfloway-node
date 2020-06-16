import IRepetitionsEntity from '../entities/IRepetitionEntity';
import FakeSubjectsRepository from '../repositories/fakes/FakeSubjectsRepository';
import FakeRepetitionsRepository from '../repositories/fakes/FakeRepetitionsRepository';
import CreateSubjectService from './CreateSubjectService';
import CreateRepetitionService from './CreateRepetitionService';

let fakeSubjectsRepository: FakeSubjectsRepository;
let fakeRepetitionsRepository: FakeRepetitionsRepository;
let createRepetition: CreateRepetitionService;
let createSubject: CreateSubjectService;

describe('Create Repetition', () => {
  beforeEach(() => {
    fakeRepetitionsRepository = new FakeRepetitionsRepository();
    fakeSubjectsRepository = new FakeSubjectsRepository();
    createRepetition = new CreateRepetitionService(fakeRepetitionsRepository);
    createSubject = new CreateSubjectService(fakeSubjectsRepository);
  });

  it('should be able to create a repetition associated to a subject', async () => {
    const subject = await createSubject.execute({
      study: 'PLBR201501',
      batch: 'F102380A',
      name: 'ABC12345D',
      project: 'Project001',
    });

    const repetition = await createRepetition.execute({
      count: 1,
      customer: 'Customer 1',
      subject_id: subject.id,
      vehicle: 'Vehicle 1',
    });

    expect(repetition).toHaveProperty('id');
    expect(repetition.subject_id).toEqual(subject.id);
  });
});
