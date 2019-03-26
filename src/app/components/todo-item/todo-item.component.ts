import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item.interface';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges {

  @Input() todoItem: TodoItem;
  @Input() todos:TodoItem[];
  @Input() TodoItemComplete: boolean;
  @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();

  question: boolean;
  class: string;

  ngOnChanges(changes: SimpleChanges) {
    this.todoItem.completed = changes["TodoItemComplete"].currentValue;
    this.findComplete();
  }

  ngOnInit() {
  }

  delete() {
    this.question = confirm('Delete this todo ?');
    if (this.question) {
      this.deleteItem.emit(this.todoItem.id);
    }
  }

  completeTodo() {
    this.todoItem.completed = true;
    this.class = 'completed';
  }

  findComplete() {
    for(let i = 0; i < this.todos.length; i ++) {
      if (this.todos[i].completed === true) {
        this.class = 'completed';
      }
    }
  }
}
