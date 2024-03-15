import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ErrorComponent } from '../error/error.component';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { QuestionWithAnswersModel } from '../../model/question-with-answers.model';
import { SurveyStartedComponent } from '../survey-started/survey-started.component';
import { AnswerModel, TypeEnum } from '../../model/answer.model';
import { CountryDropdownComponent } from '../country-dropdown/country-dropdown.component';

@Component({
	selector: 'app-question',
	standalone: true,
	imports: [
		CardComponent,
		ErrorComponent,
		NgIf,
		NgForOf,
		CommonModule,
		SurveyStartedComponent,
		CountryDropdownComponent
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

	setSelectedCountry(country: string) {
		switch (country) {
			case 'Switzerland':
			case 'Germany':
				this.selectedAnswer = {
					level: 4,
					question_id: 5,
					answer: 'NO_RISK',
					id: 10,
					type: TypeEnum.COUNTRY
				};
				break;
			case 'Thailand':
				this.selectedAnswer = {
					level: 4,
					question_id: 5,
					answer: 'HIGH_RISK',
					id: 12,
					type: TypeEnum.COUNTRY
				};
				break;
			case 'USA':
				this.selectedAnswer = {
					level: 4,
					question_id: 5,
					answer: 'LOW_RISK',
					id: 11,
					type: TypeEnum.COUNTRY
				};
				break;
			default:
				this.selectedAnswer = {
					level: 4,
					question_id: 5,
					answer: 'NO_RISK',
					id: 10,
					type: TypeEnum.COUNTRY
				};
				break;
		}

	}
}
