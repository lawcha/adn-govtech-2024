import { Component, inject, Input, OnInit } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { QuestionWithAnswersModel } from '../../model/question-with-answers.model';
import { DaoService } from '../../services/dao.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ResultModel } from '../../model/result.model';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    AccordionComponent,
    AsyncPipe
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent implements OnInit {
  @Input() survey?: QuestionWithAnswersModel[];

  readonly daoService: DaoService = inject(DaoService);

  results$: Observable<ResultModel[]> = this.daoService.fetchResults(this.survey!);

  ngOnInit() {
  }

}
