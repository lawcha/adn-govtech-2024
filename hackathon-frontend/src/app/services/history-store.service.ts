import { Injectable } from '@angular/core';
import { QuestionModel } from '../model/question.model';
import { AnswerModel } from '../model/answer.model';
import { BehaviorSubject } from 'rxjs';
import { QuestionWithAnswersModel } from '../model/question-with-answers.model';

@Injectable()
export class HistoryStoreService {

  private history: Array<QuestionWithAnswersModel> = [];

  pushHistory(questionEntry: QuestionWithAnswersModel) {
    this.history.push(questionEntry);
  }
  getHistory(): Array<QuestionWithAnswersModel> {
    return this.history;
  }
  getLast(): QuestionWithAnswersModel | undefined {
    return this.history.at(-1);
  }
}
