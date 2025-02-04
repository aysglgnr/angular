import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  // template: `
  //   <h1>Welcome to {{ title }}!</h1>
  //  <router-outlet/> 
  // `
})
export class AppComponent {
  title = 'first-ng-app';
}
