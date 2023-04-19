import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color: string = '#000';
  backgroundColor: string = '#fff';
  border: string = '1px solid #ccc';
  boxShadow: string = 'none';
  buttonText: string = 'Przycisk';
  inputPlaceholder: string = 'Placeholder';
}