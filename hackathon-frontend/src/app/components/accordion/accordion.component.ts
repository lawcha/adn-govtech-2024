import { Component, Input } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { ResultModel } from '../../model/result.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    AccordionItemComponent,
    CommonModule
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  @Input() resultList?: ResultModel[]
}
