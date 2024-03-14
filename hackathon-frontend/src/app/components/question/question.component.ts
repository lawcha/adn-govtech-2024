import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ErrorComponent } from '../error/error.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CardComponent,
    ErrorComponent,
    NgIf
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() title?: string;
}
