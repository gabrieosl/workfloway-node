export default interface ICreateSubjectDTO {
  name: string;
  workflow_id: string;
  tags: {
    [key: string]: string;
  };
}
