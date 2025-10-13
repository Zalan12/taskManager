import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasklistComponent } from "./components/tasklist/tasklist.component";
import { CompletedTasklistComponent } from "./components/completed-tasklist/completed-tasklist.component";
import { Task } from './interfaces/Task';
import { NewtaskformComponent } from "./components/newtaskform/newtaskform.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TasklistComponent, CompletedTasklistComponent, NewtaskformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'taskManager';

  tasks:Task[]=[

    {
    id:1,
    task:"Haza menni",
    desc:"Haladj mar guti",
    priority:"Fontos",
    status:1
    },
    {
      id:2,
      task:"Megérkezni",
      desc:"segitseg",
      priority:"Elenyésző",
      status:0
      }

  
  ];
  selectedTasks:Task[]=[];
  getSelectedTasks(tasks:Task[])
  {
     this.selectedTasks=tasks
  }
}
