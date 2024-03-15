export enum TypeEnum {
  TEXT = 'text',
  COUNTRY = 'country'
}

export interface AnswerModel {
  id: number;
  level: number;
  question_id: number;
  type: TypeEnum
  answer: string;
}
