import IWorkflowsEntity from '../schemas/IWorkflowSchema';
import FakeWorkflowsRepository from '../repositories/fakes/FakeWorkflowsRepository';
import ListWorkflowsService from './ListWorkflowsService';

let fakeWorkflowsRepository: FakeWorkflowsRepository;
let listWorkflows: ListWorkflowsService;

describe('List Workflows', () => {
  beforeEach(() => {
    fakeWorkflowsRepository = new FakeWorkflowsRepository();
    listWorkflows = new ListWorkflowsService(fakeWorkflowsRepository);
  });

  it('should be able to list workflows', async () => {
    expect(await listWorkflows.execute()).toBeInstanceOf(Array);
  });
});
