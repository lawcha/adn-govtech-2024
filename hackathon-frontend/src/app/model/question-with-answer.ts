import { QuestionWithAnswersModel } from './question-with-answers.model';
import { question1, question2, question3, question4 } from './questions';
import { answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8 } from './answers';

export const questionAnswer1: QuestionWithAnswersModel = {
  question: question1,
  answers: [answer1, answer2]
}

export const questionAnswer2: QuestionWithAnswersModel = {
  question: question2,
  answers: [answer3, answer4]
}

export const questionAnswer3: QuestionWithAnswersModel = {
  question: question3,
  answers: [answer5, answer6]
}

export const questionAnswer4: QuestionWithAnswersModel = {
  question: question4,
  answers: [answer7, answer8]
}
