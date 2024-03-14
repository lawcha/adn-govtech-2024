import { QuestionModel } from './question.model';
import { AnswerModel } from './answer.model';

export interface QuestionWithAnswersModel {
  question: QuestionModel;
  answers: AnswerModel[]
  selectedAnswerId?: number;
}
