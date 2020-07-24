export default interface ICreateObservationTypeDTO {
  comment: string;
  value: string;
  type_id: string;
  subject_ids: string[];
  user_id?: string;
}
