import { CommonModule } from '@angular/common';
import { Component,EventEmitter,output, Input } from '@angular/core';
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
}
