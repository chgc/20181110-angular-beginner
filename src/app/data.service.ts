import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  todos = [];
  constructor() {}

  newTodo(todo) {
    this.todos.push({
      label: todo,
      isCompleted: false
    });
  }

  toggleComplete(todo) {
    todo.isCompleted = !todo.isCompleted;
  }

  completeAll() {
    this.todos.forEach(todo => (todo.isCompleted = true));
  }

  removeTodo(idx) {
    // 方法1
    // this.todos.splice(this.todos.indexOf(todo), 1);
    // 方法2
    // this.todos = this.todos.filter(_todo => _todo !== todo);
    // 方法3
    this.todos.splice(idx, 1);
  }
}
