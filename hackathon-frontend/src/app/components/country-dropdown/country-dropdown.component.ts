import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-country-dropdown',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './country-dropdown.component.html',
	styleUrl: './country-dropdown.component.scss'
})

export class CountryDropdownComponent {
	@Output() onSelectCountry: EventEmitter<string> = new EventEmitter<string>();

	countries = ['Switzerland', 'Germany', 'Thailand', 'USA'];

	onCountryClick(country: string) {
		this.onSelectCountry.emit(country);
	}
}
