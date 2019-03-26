import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item.interface';
import { generateId } from '../../interfaces/generate.id';
@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

  @Output() todoItem: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  
  todoTitle = '';
  todoText = '';

  ngOnInit() {
  }

  addTodoItem() {
    this.todoItem.emit({
      id: generateId(),
      title: this.todoTitle,
      text: this.todoText,
      completed: false
    });
    
    this.todoTitle = '';
    this.todoText = '';
  }

}
