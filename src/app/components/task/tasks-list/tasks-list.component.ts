import {Component, Input} from '@angular/core';
import {Task} from '../../user-panel/user-panel.component';
import {TaskItemComponent} from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItemComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  @Input({ required: true }) taskList!: Task[];
}
