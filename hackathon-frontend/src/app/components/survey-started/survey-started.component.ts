import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-survey-started',
  standalone: true,
  imports: [],
  templateUrl: './survey-started.component.html',
  styleUrl: './survey-started.component.scss'
})
export class SurveyStartedComponent {
  @Input() description?: string;

}
