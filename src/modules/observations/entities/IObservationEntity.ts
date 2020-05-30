import Repetition from '@modules/subjects/entities/IRepetitionEntity';
import ObservationType from '@modules/observations/entities/IObservationTypeEntity';

export default interface IObservationEntity {
  id: string;
  comment: string;
  value: string;
  type_id: string;
  type: ObservationType;
  repetition_id: string;
  repetition: Repetition;
  user_id?: string;
  user?: string;
  created_at: Date;
  updated_at: Date;
}
