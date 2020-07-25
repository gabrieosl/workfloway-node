export default interface ICreateSubjectDTO {
  items: {
    name: string;
    workflow_id: string;
    tags?: {
      [key: string]: string;
    };
  }[];
  workflow_id: string;
}
