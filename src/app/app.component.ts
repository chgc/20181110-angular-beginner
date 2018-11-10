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

  todos = this.dataService.todos;

  todoValue;

  constructor(private dataService: DataService) {}

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
    // 方法1
    // this.todos.splice(this.todos.indexOf(todo), 1);
    // 方法2
    // this.todos = this.todos.filter(_todo => _todo !== todo);
    // 方法3
    // this.todos.splice(idx, 1);
    this.dataService.removeTodo(idx);
  }
}
