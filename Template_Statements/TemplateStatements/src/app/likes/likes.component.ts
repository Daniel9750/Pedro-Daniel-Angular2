import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-likes',
  standalone: true,
  imports: [NgClass],
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.css'
})
export class LikesComponent {
	public likes: number = 0;
	public btnBackground: string = "red";

	//* Increments by 1 the number property.
	incrementLikesNumber() {
		this.likes++;
	}

	//* Lets alternating between two background colors.
	setBtnBackgroundColor() {
		this.btnBackground == "red" ? this.btnBackground = "green" : this.btnBackground = "red";
	}
}
