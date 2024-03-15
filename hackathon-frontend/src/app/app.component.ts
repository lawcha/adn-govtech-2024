import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';
import { questionAnswer1 } from './model/question-with-answer';
import { ResultsComponent } from './components/results/results.component';
import { QuestionWithAnswersModel } from './model/question-with-answers.model';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { HistoryStoreService } from './services/history-store.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent, ResultsComponent, QuestionListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
	mockedModel = questionAnswer1;
  survey: QuestionWithAnswersModel[] = [];

  readonly historyStoreService = inject(HistoryStoreService)

  onSurveyCompleted(): void {
    this.survey = this.historyStoreService.getHistory();
  }
}
