import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ErrorComponent } from '../error/error.component';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { QuestionWithAnswersModel } from '../../model/question-with-answers.model';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CardComponent,
    ErrorComponent,
    NgIf,
    NgForOf,
    CommonModule
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() questionWithAnswersModel?: QuestionWithAnswersModel;
  answered = false;
}
