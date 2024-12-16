import { Component, Input } from '@angular/core';
import { Task } from '../../user-panel/user-panel.component';
import { TaskService } from '../taskService/taskService';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [DatePipe],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input({ required: true }) userTask!: Task;

  constructor(private readonly taskService: TaskService) {}

  onTaskComplete() {
    this.taskService.removeTask(this.userTask.id);
  }
}
