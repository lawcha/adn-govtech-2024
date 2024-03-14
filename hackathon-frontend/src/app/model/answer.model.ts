export enum TypeEnum {
  TEXT = 'text',
  COUNTRY = 'country'
}

export interface AnswerModel {
  level: number;
  question_id: number;
  type: TypeEnum
  answer: string;
}
