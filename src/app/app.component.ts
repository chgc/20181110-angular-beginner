import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Todos';
  placeholderText = 'What needs to be done???';

  newTodo(event, inputElement) {
    if (event.code === 'Enter') {
      console.log(inputElement.value);
    }
  }
}
