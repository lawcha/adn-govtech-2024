import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionComponent } from './components/question/question.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
