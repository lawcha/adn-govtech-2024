import { Component, inject, Input, OnInit } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { QuestionWithAnswersModel } from '../../model/question-with-answers.model';
import { DaoService } from '../../services/dao.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { ResultModel } from '../../model/result.model';
import { HistoryStoreService } from '../../services/history-store.service';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    AccordionComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements OnInit {
  readonly daoService: DaoService = inject(DaoService);
  readonly historyDao: HistoryStoreService = inject(HistoryStoreService);

  results$: Observable<ResultModel[]> = this.daoService.fetchResults(this.historyDao.getHistory());

  ngOnInit() {
  }

}
