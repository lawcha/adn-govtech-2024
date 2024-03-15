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

export const answer5 : AnswerModel = {
  level: 1,
  question_id: 12,
  type: TypeEnum.COUNTRY,
  answer: 'I am moving to Switzerland and want to bring my pet with me.'
}

export const answer6 : AnswerModel = {
  level: 1,
  question_id: 12,
  type: TypeEnum.COUNTRY,
  answer: 'I am going to holidays in Switzerland with my pet.'
}

export const answer7 : AnswerModel = {
  level: 2,
  question_id: 13,
  type: TypeEnum.COUNTRY,
  answer: 'Cat'
}

export const answer8 : AnswerModel = {
  level: 2,
  question_id: 13,
  type: TypeEnum.COUNTRY,
  answer: 'Dog'
}

export const answer9 : AnswerModel = {
  level: 3,
  question_id: 14,
  type: TypeEnum.COUNTRY,
  answer: 'Less than 7 months ago'
}
export const answer10 : AnswerModel = {
  level: 3,
  question_id: 14,
  type: TypeEnum.COUNTRY,
  answer: 'More than 7 months ago'
}
