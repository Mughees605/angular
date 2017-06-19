import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList = [] 
  title = 'app';
  getTodo(todoItem:{todo:string}){
    this.todoList.push(todoItem)
  }
}
