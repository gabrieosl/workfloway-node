import Submission from '@modules/subjects/entities/ISubmissionEntity';
import ObservationType from '@modules/observations/entities/IObservationTypeEntity';
import User from '@modules/users/infra/typeorm/entities/User';
import ISubjectEntity from '@modules/subjects/entities/ISubjectEntity';

export default interface IObservationEntity {
  id: string;
  type_id: string;
  subject_id: string;
  submission_id: string;
  user_id: string;
  value: string;
  comment: string;
  created_at: Date;
  updated_at: Date;

  subject: ISubjectEntity;
  user: User;
}
