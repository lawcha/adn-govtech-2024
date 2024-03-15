import { AnswerModel, TypeEnum } from './answer.model';

export const answer1 : AnswerModel = {
  level: 0,
  question_id: 11,
  type: TypeEnum.COUNTRY,
  answer: 'Yes, I live in Switzerland'
}

export const answer2 : AnswerModel = {
  level: 0,
  question_id: 11,
  type: TypeEnum.COUNTRY,
  answer: 'No, I live somewhere else'
}

export const answer3 : AnswerModel = {
  level: 1,
  question_id: 12,
  type: TypeEnum.COUNTRY,
  answer: 'I am going on holidays with my pet'
}

export const answer4 : AnswerModel = {
  level: 1,
  question_id: 12,
  type: TypeEnum.COUNTRY,
  answer: 'I am coming back to Switzerland from holidays with my pet.'
}
