import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../interfaces/todo-item.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todo: TodoItem;
  allTodos: TodoItem[]  = [];

  ngOnInit() {
  }

  addTodo(item: TodoItem) {
    this.allTodos.push(item);
    this.todo = item;
  }

  deleteTodo(id: string) {
    for (let i = 0; i < this.allTodos.length; i++) {
      if (this.allTodos[i].id === id) {
        this.allTodos.splice(i, 1);
        return;
      }
    }
  }

  completeAll() {
    this.allTodos.forEach(todo => {
      todo.completed = true;
    });
  }
}