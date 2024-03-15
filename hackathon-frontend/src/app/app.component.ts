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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent, ResultsComponent, QuestionListComponent, SurveyStartedComponent],
  providers: [HistoryStoreService, DaoService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
	mockedModel = [questionAnswer1, questionAnswer2, questionAnswer3];
  survey: QuestionWithAnswersModel[] = [];

  readonly historyStoreService = inject(HistoryStoreService)

  onSurveyCompleted(): void {
    this.survey = this.historyStoreService.getHistory();
  }
}
