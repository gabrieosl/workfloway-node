import ISubmissionsEntity from '../entities/ISubmissionEntity';
import FakeSubjectsRepository from '../repositories/fakes/FakeSubjectsRepository';
import FakeSubmissionsRepository from '../repositories/fakes/FakeSubmissionsRepository';
import CreateSubjectService from './CreateSubjectService';
import CreateSubmissionService from './CreateSubmissionService';

let fakeSubjectsRepository: FakeSubjectsRepository;
let fakeSubmissionsRepository: FakeSubmissionsRepository;
let createSubmission: CreateSubmissionService;
let createSubject: CreateSubjectService;

describe('Create Submission', () => {
  beforeEach(() => {
    fakeSubmissionsRepository = new FakeSubmissionsRepository();
    fakeSubjectsRepository = new FakeSubjectsRepository();
    createSubmission = new CreateSubmissionService(fakeSubmissionsRepository);
    createSubject = new CreateSubjectService(fakeSubjectsRepository);
  });

  it('should be able to create a submission associated to a subject', async () => {
    const subject = await createSubject.execute({
      study: 'PLBR201501',
      batch: 'F102380A',
      name: 'ABC12345D',
      project: 'Project001',
    });

    const submission = await createSubmission.execute({
      count: 1,
      customer: 'Customer 1',
      subject_id: subject.id,
      vehicle: 'Vehicle 1',
    });

    expect(submission).toHaveProperty('id');
    expect(submission.subject_id).toEqual(subject.id);
  });
});
