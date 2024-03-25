import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
	styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
	likesNumber: number = 0;
	emojiCount: number = 0;
	@ViewChild("emojiContainer") emojiContainerRef!: ElementRef;
	@ViewChild("likesNumber") likesNumberInputRef!: ElementRef;
	emojiContainer!: HTMLDivElement;
	likesNumberInput!: HTMLInputElement;

	ngAfterViewInit() {
		this.emojiContainer = this.emojiContainerRef.nativeElement;
		this.likesNumberInput = this.likesNumberInputRef.nativeElement;
	}

	insertNewLikeEmoji() {
		this.emojiCount++;
		localStorage.setItem("emojiCount", this.emojiCount.toString());
		this.emojiContainer.insertAdjacentHTML("beforeend", 
		`<span id='👍🏻-${this.emojiCount}'>👍🏻</span>`);
	}

	incrementInputValueByOne(input: HTMLInputElement) {
		const newValue = Number(input.getAttribute("value")) + 1;
		input.setAttribute("value", String(newValue));
	}
}
