import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerModel } from '../../model/answer.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() answer?: AnswerModel;
  @Input() image?: string;
  @Input() answerString?: string;

  @Output() onSelectedAnswer: EventEmitter<AnswerModel> = new EventEmitter<AnswerModel>();

	onClick() {
    this.onSelectedAnswer.emit(this.answer);
	}
}
