import { CommonModule } from '@angular/common';
import { Component,EventEmitter,output, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-completed-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed-tasklist.component.html',
  styleUrl: './completed-tasklist.component.scss'
})
export class CompletedTasklistComponent {
 @Input() tasks:Task[]=[];
   @Output() emitTasks: EventEmitter<Task[]> = new EventEmitter();
 selectedTasks:Task[]=[]
 visszaData(id:number)
 {
   let currentTask=this.selectedTasks.findIndex(item=>item.id==id)
          this.tasks.push(this.selectedTasks[currentTask]);
        this.selectedTasks.splice(currentTask,1);

         this.emitTasks.emit(this.tasks);
 }

}
