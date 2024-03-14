import { Injectable } from '@angular/core';
import { QuestionModel } from '../model/question.model';
import { AnswerModel } from '../model/answer.model';
import { BehaviorSubject } from 'rxjs';
import { QuestionWithAnswersModel } from '../model/question-with-answers.model';

@Injectable()
export class DaoService {

  fetchNextQuestion(answerId: number): QuestionWithAnswersModel {
    // TODO
  }

}
