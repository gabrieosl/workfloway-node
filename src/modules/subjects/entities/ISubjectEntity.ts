import ITagEntity from './ITagEntity';
import IObservationEntity from '@modules/observations/entities/IObservationEntity';
import ISubmissionEntity from './ISubmissionEntity';

export default interface ISubjectEntity {
  id: string;
  name: string;
  workflow_id: string;
  created_at: Date;
  updated_at: Date;

  tags: ITagEntity[];
  observations: IObservationEntity[];
  submissions: ISubmissionEntity[];
}
