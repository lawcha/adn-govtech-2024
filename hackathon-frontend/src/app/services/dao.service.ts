import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionWithAnswersModel } from '../model/question-with-answers.model';
import { HttpClient } from '@angular/common/http';
import { ResultModel } from '../model/result.model';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  static readonly API_ROOT = 'http://localhost:8080';

  http: HttpClient = inject(HttpClient);

  fetchNextQuestion(history: QuestionWithAnswersModel[]): Observable<QuestionWithAnswersModel> {
    console.log(history);
    const answers = {
      answers: history.map(e => e.selectedAnswerId)
    }
    console.log(answers);
    return this.http.post<QuestionWithAnswersModel>(`${DaoService.API_ROOT}/qa`, answers);
  }

  fetchResults(history: QuestionWithAnswersModel[]): Observable<ResultModel[]> {
    console.log(history);
    const answerIdList = history.map(question => question.selectedAnswerId!!);
    return this.http.get<ResultModel[]>(`${DaoService.API_ROOT}/content?answerIds=${answerIdList.join('&answerIds=')}`);
  }

}
