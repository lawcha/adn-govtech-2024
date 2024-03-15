import { Component, Input } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { QuestionWithAnswersModel } from '../../model/question-with-answers.model';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    AccordionComponent
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  @Input() survey?: QuestionWithAnswersModel[];

  results: string[] = []; // TODO adapt with BE

}
