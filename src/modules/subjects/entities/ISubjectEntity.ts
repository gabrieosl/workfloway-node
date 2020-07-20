import SubjectToTag from '../infra/typeorm/entities/SubjectToTag';
import IObservationEntity from '@modules/observations/entities/IObservationEntity';
import ISubmissionEntity from './ISubmissionEntity';

export default interface ISubjectEntity {
  id: string;
  name: string;
  workflow_id: string;
  created_at: Date;
  updated_at: Date;

  tags: SubjectToTag[];
  observations: IObservationEntity[];
  submissions: ISubmissionEntity[];
}
