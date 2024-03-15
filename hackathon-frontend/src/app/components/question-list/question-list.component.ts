import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { HistoryStoreService } from '../../services/history-store.service';
import { QuestionWithAnswersModel } from '../../model/question-with-answers.model';
import { DaoService } from '../../services/dao.service';
import { Subscription } from 'rxjs';
import { questionAnswer1, questionAnswer2, questionAnswer3, questionAnswer4 } from '../../model/question-with-answer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [
    QuestionComponent, CommonModule
  ],
  providers: [HistoryStoreService, DaoService],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent implements OnInit, OnDestroy {

  private readonly TOTAL_QUESTION_NUMBER = 5;

  @Output() onSurveyCompleted: EventEmitter<void> = new EventEmitter<void>();

  readonly subscriptions: Subscription[] = [];

  historyStoreService: HistoryStoreService = inject(HistoryStoreService);
  daoService: DaoService = inject(DaoService);

  questionList: QuestionWithAnswersModel[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  ngOnInit() {
    // Fetch first question
    this.daoService.fetchNextQuestion(this.questionList).subscribe((res) => {
      this.questionList.push(res);
      //this.historyStoreService.pushHistory(res);
    });
  }

  onCompleted(answer: QuestionWithAnswersModel): void {
    // Register state
    this.historyStoreService.pushHistory(answer);
    this.questionList = this.historyStoreService.getHistory();
    // Request next question
    console.log(answer);
    this.subscriptions.push(this.daoService.fetchNextQuestion(this.questionList).subscribe(question => {
      // Add new question to GUI
      this.questionList.push(question);
      // If survey finished, show results
      if (this.questionList.length === this.TOTAL_QUESTION_NUMBER) {
        this.onSurveyCompleted.emit();
      }
    }));
  }

}
