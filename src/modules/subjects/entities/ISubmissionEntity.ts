import Subject from './ISubjectEntity';

export default interface ISubmissionEntity {
  id: string;
  subject_id: string;
  repetition: number;
  closed: boolean;
  created_at: Date;
  updated_at: Date;
  subject: Subject;
}
