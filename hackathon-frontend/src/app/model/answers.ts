import { AnswerModel, TypeEnum } from './answer.model';

export const answer1 : AnswerModel = {
  id: 0,
  level: 0,
  question_id: 0,
  type: TypeEnum.COUNTRY,
  answer: 'Yes, I live in Switzerland'
}

export const answer2 : AnswerModel = {
  id: 1,
  level: 0,
  question_id: 0,
  type: TypeEnum.COUNTRY,
  answer: 'No, I live somewhere else'
}

export const answer3 : AnswerModel = {
  id: 2,
  level: 1,
  question_id: 1,
  type: TypeEnum.COUNTRY,
  answer: 'I am going on holidays with my pet'
}

export const answer4 : AnswerModel = {
  id: 3,
  level: 1,
  question_id: 1,
  type: TypeEnum.COUNTRY,
  answer: 'I am coming back to Switzerland from holidays with my pet.'
}

export const answer5 : AnswerModel = {
  id: 4,
  level: 1,
  question_id: 2,
  type: TypeEnum.COUNTRY,
  answer: 'I am moving to Switzerland and want to bring my pet with me.'
}

export const answer6 : AnswerModel = {
  id: 5,
  level: 1,
  question_id: 2,
  type: TypeEnum.COUNTRY,
  answer: 'I am going to holidays in Switzerland with my pet.'
}

export const answer7 : AnswerModel = {
  id: 6,
  level: 2,
  question_id: 3,
  type: TypeEnum.COUNTRY,
  answer: 'Cat'
}

export const answer8 : AnswerModel = {
  id: 7,
  level: 2,
  question_id: 3,
  type: TypeEnum.COUNTRY,
  answer: 'Dog'
}

export const answer9 : AnswerModel = {
  id: 8,
  level: 3,
  question_id: 4,
  type: TypeEnum.COUNTRY,
  answer: 'Less than 7 months ago'
}
export const answer10 : AnswerModel = {
  id: 9,
  level: 3,
  question_id: 4,
  type: TypeEnum.COUNTRY,
  answer: 'More than 7 months ago'
}
