import { Component, Input } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { USER } from '../../user/dummyUsers';
import { TaskService } from '../taskService/taskService';

@Component({
  selector: 'app-tasks-list',
  imports: [TaskItemComponent],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  @Input({ required: true }) userId!: USER['id'];
  constructor(public readonly taskService: TaskService) {}
}
