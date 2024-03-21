import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LikesComponent } from './likes/likes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LikesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TemplateStatements';
}
