import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
todoName:string = ""
@Output() passedTodo = new EventEmitter<{todo:string}>();
  constructor() { }

  ngOnInit() {
  }
  onAdd(todoName:string){
    this.passedTodo.emit({todo:todoName})
  }

}
