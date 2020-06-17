import 'reflect-metadata';
import IWorkflowsEntity from '../schemas/IWorkflowSchema';
import FakeWorkflowsRepository from '../repositories/fakes/FakeWorkflowsRepository';
import ShowWorkflowService from './ShowWorkflowService';

let fakeWorkflowsRepository: FakeWorkflowsRepository;
let showWorkflow: ShowWorkflowService;

describe('Show Workflow', () => {
  beforeEach(() => {
    fakeWorkflowsRepository = new FakeWorkflowsRepository();
    showWorkflow = new ShowWorkflowService(fakeWorkflowsRepository);
  });

  it('should be able to show workflows', async () => {
    const workflow = await fakeWorkflowsRepository.create({
      name: 'SOME-WORKFLOW',
      content: '[][][]',
    });
    const wantedWorkflow = await showWorkflow.execute(String(workflow.id));
    expect(wantedWorkflow).toEqual(workflow);
  });
});
