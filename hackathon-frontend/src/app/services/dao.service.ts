import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionWithAnswersModel } from '../model/question-with-answers.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DaoService {

  static readonly API_ROOT = 'https://localhost/api';

  http: HttpClient = inject(HttpClient);

  fetchNextQuestion(history: QuestionWithAnswersModel[]): Observable<QuestionWithAnswersModel> {
    return this.http.post<QuestionWithAnswersModel>(`${DaoService.API_ROOT}/qa`, history);
  }

}
