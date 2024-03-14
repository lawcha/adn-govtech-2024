import { Component, inject } from '@angular/core';
import { QuestionComponent } from '../question/question.component';
import { QuestionModel } from '../../model/question.model';
import { AnswerModel } from '../../model/answer.model';
import { HistoryStoreService } from '../../services/history-store.service';
import { QuestionWithAnswersModel } from '../../model/question-with-answers.model';
import { DaoService } from '../../services/dao.service';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [
    QuestionComponent
  ],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent {

  historyStoreService: HistoryStoreService = inject(HistoryStoreService);
  daoService: DaoService = inject(DaoService);

  questionList: QuestionWithAnswersModel[] = [];

  onCompleted(answer: QuestionWithAnswersModel): void {
    // Register state
    this.historyStoreService.pushHistory(answer);
    // Request next question
    const nextQuestion = this.daoService.fetchNextQuestion(answer.selectedAnswerId!!);
    // Add new question to GUI
    this.questionList.push(nextQuestion);
  }

}
