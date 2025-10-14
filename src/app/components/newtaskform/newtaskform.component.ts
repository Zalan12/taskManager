import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-newtaskform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newtaskform.component.html',
  styleUrl: './newtaskform.component.scss'
})
export class NewtaskformComponent {

  @Input() tasks:Task[]=[];
     @Output() emitTasks: EventEmitter<Task[]> = new EventEmitter();
  addTask()
  {
    console.log("su");
    let taskName:any=document.querySelector("#task");
    let taskDesc:any=document.querySelector("#desc");
    let taskPriority:any=document.querySelector("#priority");
    let taskStatus:any=document.querySelector("#status");
    let newTask:Task=
    {
      id:1,
      task:taskName.value,
      desc:taskDesc.value,
      priority:taskPriority.value,
      status:taskStatus.value
    }
    this.tasks.push(newTask);
    console.log(this.tasks)

    this.emitTasks.emit(this.tasks);
  }
}
