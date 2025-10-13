import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/Task';


@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {
  @Input() tasks:Task[]=[];
  @Output() emitTasks: EventEmitter<Task[]> = new EventEmitter();
  selectedTasks:Task[]=[]
  finishedTask(id:number)
  {
    console.log("Selected-Task: ",id)

    let idx=this.selectedTasks.findIndex(item=>item.id==id)

    if(idx==-1)
      {
        let currentTask=this.tasks.findIndex(item=>item.id==id)
        this.selectedTasks.push(this.tasks[currentTask]);
        
      }
      else
      {
        this.selectedTasks.splice(idx,1);
      }
    
    
      this.emitTasks.emit(this.selectedTasks);
  }

}
