import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Todos';
  placeholderText = 'What needs to be done???';
  background = 'yellow';
  todoValue;
  state;

  constructor(public dataService: DataService) {}

  newTodo(inputElement) {
    // 使用樣版變數
    // this.todos.push(inputElement.value);
    // inputElement.value = '';

    // 使用 ngModel 的值
    this.dataService.newTodo(this.todoValue);
    this.todoValue = '';
  }

  toggleComplete(todo) {
    this.dataService.toggleComplete(todo);
  }

  completeAll() {
    this.dataService.completeAll();
  }

  removeTodo(idx, todo) {
    this.dataService.removeTodo(idx);
  }

  clearComplete() {
    this.dataService.clearComplete();
  }
}
