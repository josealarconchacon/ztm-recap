import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  // properties
  newTodoTitle: string = '';
  newTodoDate: Date = new Date();

  todo: Todo[] = [];

  // Life cycle hook
  ngOnInit(): void {
    let saveTodo = localStorage.getItem('todo');
    //only load the todo if there is a save todo, otherwise, create an empty array
    this.todo = saveTodo ? JSON.parse(saveTodo) : [];
  }

  addTodo() {
    // Validate fields
    const isTitleValid = this.newTodoTitle.trim().length > 0;
    const isDateValid = !!this.newTodoDate;

    if (isTitleValid && isDateValid) {
      const newTodo: Todo = {
        id: Date.now(),
        title: this.newTodoTitle,
        date: this.newTodoDate,
      };

      this.todo.push(newTodo);
      this.resetTodoInput();

      // Local storage
      this.updateLocalStorage();
    }
  }

  deleteTodo(index: number) {
    this.todo.splice(index, 1);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }

  resetTodoInput() {
    this.newTodoTitle = '';
    this.newTodoDate = new Date();
  }
}
