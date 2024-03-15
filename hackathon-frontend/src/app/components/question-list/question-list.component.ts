import { Component, EventEmitter, inject, OnDestroy, Output } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { HistoryStoreService } from '../../services/history-store.service';
import { QuestionWithAnswersModel } from '../../model/question-with-answers.model';
import { DaoService } from '../../services/dao.service';
import { Subscription } from 'rxjs';
import { questionAnswer1, questionAnswer2, questionAnswer3 } from '../../model/question-with-answer';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [
    QuestionComponent
  ],
  providers: [HistoryStoreService, DaoService],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent implements OnDestroy {

  @Output() onSurveyCompleted: EventEmitter<void> = new EventEmitter<void>();

  readonly subscriptions: Subscription[] = [];

  historyStoreService: HistoryStoreService = inject(HistoryStoreService);
  daoService: DaoService = inject(DaoService);

  questionList: QuestionWithAnswersModel[] = [questionAnswer1, questionAnswer2, questionAnswer3];

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onCompleted(answer: QuestionWithAnswersModel): void {
    // Register state
    this.historyStoreService.pushHistory(answer);
    // Request next question
    this.subscriptions.push(this.daoService.fetchNextQuestion(this.questionList).subscribe(question => {
      // Add new question to GUI
      this.questionList.push(question);
      // If survey finished, show results
      this.onSurveyCompleted.emit();
    }));
  }

}
