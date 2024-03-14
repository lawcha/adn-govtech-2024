import { Component } from '@angular/core';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    QuestionComponent
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
}
