import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { questionAnswer1, questionAnswer2, questionAnswer3 } from './model/question-with-answer';
import { ResultsComponent } from './components/results/results.component';
import { QuestionWithAnswersModel } from './model/question-with-answers.model';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { HistoryStoreService } from './services/history-store.service';
import { DaoService } from './services/dao.service';
import { SurveyStartedComponent } from './components/survey-started/survey-started.component';
import { CountryDropdownComponent } from './components/country-dropdown/country-dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent, ResultsComponent, QuestionListComponent, SurveyStartedComponent, CountryDropdownComponent],
  providers: [HistoryStoreService, DaoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
	mockedModel = [questionAnswer1, questionAnswer2, questionAnswer3];
  survey: QuestionWithAnswersModel[] = [];

  readonly historyStoreService = inject(HistoryStoreService)
  readonly dao = inject(DaoService)

  onSurveyCompleted(): void {
    this.survey = this.historyStoreService.getHistory();
  }

  test() {
    this.dao.fetchNextQuestion([
      {
        selectedAnswerId: 0,
        answers: [],
        question: { question: '', id: 0, level: 0 }
      },
      {
        selectedAnswerId: 5,
        answers: [],
        question: { question: '', id: 0, level: 0 }
      },
      {
        selectedAnswerId: 6,
        answers: [],
        question: { question: '', id: 0, level: 0 }
      }
    ]).subscribe(e => console.log(e));
  }
}
