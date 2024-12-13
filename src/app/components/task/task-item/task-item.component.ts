import {Component, Input} from '@angular/core';
import {Task} from '../../user-panel/user-panel.component';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input({required: true}) userTask!: Task

}
