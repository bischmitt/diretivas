import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent implements OnInit {

  @Input() todo: Todo =  {
    id: 0,
    title: '',
    done: false,
  };
  @Output() remove = new EventEmitter;
  done = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  removeTodo():void {
    this.remove.emit(this.todo);
  }

  markAsDone():void {
    this.done = true;
  }

}
