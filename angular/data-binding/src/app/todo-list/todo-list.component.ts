import { Component } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  // properties
  newTodoTitle: string = '';
  newTodoDate: Date = new Date();

  todo: Todo[] = [];

  addTodo() {
    // validate fields
    if (this.newTodoTitle.trim().length && this.newTodoDate) {
      let newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle,
        date: this.newTodoDate,
      };
      this.todo.push(newTodo);
      this.newTodoTitle = '';
      this.newTodoDate = new Date();
    }
  }
}
