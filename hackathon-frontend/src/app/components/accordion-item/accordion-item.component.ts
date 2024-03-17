import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss'
})
export class AccordionItemComponent {
  @Input() title?: string;
  @Input() content?: string;
  open = false;

  toggleAccordion() {
   this.open = !this.open;
  }
}
