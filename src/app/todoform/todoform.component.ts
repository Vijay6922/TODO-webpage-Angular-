import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrl: './todoform.component.css'
})
export class TodoformComponent {

  constructor(private ts:TodoServiceService) {
    
  }
  todoInput="";
  addTask()
  {
   this.ts.addTodo(this.todoInput)
   this.todoInput=""
  }
  resetForm()
  {
    this.todoInput=""
  }
}
