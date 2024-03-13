import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms'; // If you're using [(ngModel)]
import { By } from '@angular/platform-browser';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [FormsModule], // If your component uses [(ngModel)] or similar
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new todo', () => {
    const initialLength = component.todo.length;
    component.newTodoTitle = 'Test Todo';
    component.newTodoDate = new Date();
    component.addTodo();
    expect(component.todo.length).toBe(initialLength + 1);
    expect(component.todo[component.todo.length - 1].title).toEqual(
      'Test Todo'
    );
  });

  it('should delete a todo', () => {
    // Add a todo first
    component.newTodoTitle = 'Test Todo';
    component.newTodoDate = new Date();
    component.addTodo();
    const initialLength = component.todo.length;

    component.deleteTodo(0); // Assuming we delete the first todo
    expect(component.todo.length).toBe(initialLength - 1);
  });

  it('should reset input fields after adding a todo', () => {
    component.newTodoTitle = 'Test Todo';
    component.newTodoDate = new Date();
    component.addTodo();
    expect(component.newTodoTitle).toEqual('');
    expect(component.newTodoDate).toBeTruthy(); // Checks if newTodoDate is reset to a Date object
  });

  it('should update local storage after adding a todo', () => {
    spyOn(component, 'updateLocalStorage');
    component.newTodoTitle = 'Test Todo';
    component.newTodoDate = new Date();
    component.addTodo();
    expect(component.updateLocalStorage).toHaveBeenCalled();
  });

  it('should update local storage after deleting a todo', () => {
    // Add a todo first
    component.newTodoTitle = 'Test Todo';
    component.newTodoDate = new Date();
    component.addTodo();

    spyOn(component, 'updateLocalStorage');
    component.deleteTodo(0); // Assuming we delete the first todo
    expect(component.updateLocalStorage).toHaveBeenCalled();
  });
});
