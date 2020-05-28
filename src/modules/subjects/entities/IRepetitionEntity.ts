import Subject from './ISubjectEntity';

export default interface IRepetitionEntity {
  id: string;
  subject_id: string;
  subject: Subject;
  count: number;
  vehicle: string;
  customer: string;
  created_at: Date;
  updated_at: Date;
}
