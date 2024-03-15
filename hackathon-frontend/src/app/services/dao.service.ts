import { inject, Injectable } from '@angular/core';
import { QuestionModel } from '../model/question.model';
import { AnswerModel } from '../model/answer.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuestionWithAnswersModel } from '../model/question-with-answers.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DaoService {

  static readonly API_ROOT = 'https://localhost/api';

  http: HttpClient = inject(HttpClient);

  fetchNextQuestion(answerId: number): Observable<QuestionWithAnswersModel> {
    return this.http.get<QuestionWithAnswersModel>(`${DaoService.API_ROOT}/nextquestion/${answerId}`);
  }

}
