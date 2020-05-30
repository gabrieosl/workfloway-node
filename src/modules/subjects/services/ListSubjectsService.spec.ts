import ISubjectsEntity from '../entities/ISubjectEntity';
import FakeSubjectsRepository from '../repositories/fakes/FakeSubjectsRepository';
import ListSubjectsService from './ListSubjectsService';

let fakeSubjectsRepository: FakeSubjectsRepository;
let listSubjects: ListSubjectsService;

describe('List Subjects', () => {
  beforeEach(() => {
    fakeSubjectsRepository = new FakeSubjectsRepository();
    listSubjects = new ListSubjectsService(fakeSubjectsRepository);
  });

  it('should be able to list subjects', async () => {
    expect(await listSubjects.execute()).toBeInstanceOf(Array);
  });
});
