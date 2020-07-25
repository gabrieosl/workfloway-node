import ISubjectsEntity from '../entities/ISubjectEntity';
import FakeSubjectsRepository from '../repositories/fakes/FakeSubjectsRepository';
import CreateSubjectService from './CreateSubjectService';

let fakeSubjectsRepository: FakeSubjectsRepository;
let createSubject: CreateSubjectService;

describe('Create Subject', () => {
  beforeEach(() => {
    fakeSubjectsRepository = new FakeSubjectsRepository();
    createSubject = new CreateSubjectService(fakeSubjectsRepository);
  });

  it('should be able to create a subject', async () => {
    const subject = await createSubject.execute({
      items: [
        {
          name: 'ABC12345D',
          workflow_id: 'some-workflow-id',
        },
      ],
      workflow_id: 'some-workflow-id',
    });

    expect(subject).toHaveProperty('id');
  });
});
