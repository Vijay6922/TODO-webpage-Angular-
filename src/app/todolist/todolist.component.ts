import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit{

  constructor(private ts:TodoServiceService)
  {
  }
  todos;

  ngOnInit(): void {
  
    this.todos=this.ts.todoList;
  }

  removeTodo(index)
  {
    this.ts.deleteTodo(index);
  }
}
