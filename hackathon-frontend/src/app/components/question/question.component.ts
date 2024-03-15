import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ErrorComponent } from '../error/error.component';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { QuestionWithAnswersModel } from '../../model/question-with-answers.model';
import { SurveyStartedComponent } from '../survey-started/survey-started.component';
import { AnswerModel } from '../../model/answer.model';

@Component({
	selector: 'app-question',
	standalone: true,
	imports: [
		CardComponent,
		ErrorComponent,
		NgIf,
		NgForOf,
		CommonModule,
		SurveyStartedComponent
	],
	templateUrl: './question.component.html',
	styleUrl: './question.component.scss'
})
export class QuestionComponent {
	@Input() questionWithAnswersModel?: QuestionWithAnswersModel;
	@Output() onCompleted: EventEmitter<QuestionWithAnswersModel> = new EventEmitter<QuestionWithAnswersModel>();
	selectedAnswer?: AnswerModel;
	isErrorDisplayed = false;
	isSubmitted = false;

	onNextQuestionClick() {
		if (this.selectedAnswer && this.questionWithAnswersModel) {
			this.isErrorDisplayed = false;
			this.isSubmitted = true;
			this.onCompleted.emit({
				...this.questionWithAnswersModel,
				selectedAnswerId: this.selectedAnswer.id
			});
		}
		else {
			this.isErrorDisplayed = true;
		}
	}

	setSelectedAnswer($event: AnswerModel) {
		this.selectedAnswer = $event;
	}
}
