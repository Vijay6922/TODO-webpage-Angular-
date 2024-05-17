import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }
  taskId=1;
  todoList=[
   
  ]
  addTodo(taskName)
  {
    this.todoList.push({"id":this.taskId++,"task":taskName})
  }
  deleteTodo(index)
  {
    this.todoList.splice(index,1)
  }
}
