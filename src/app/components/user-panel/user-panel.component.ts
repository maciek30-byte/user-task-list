import { Component, Input, OnInit } from '@angular/core';
import { USER } from '../user/dummyUsers';
import { TASKS } from '../task/dummyTasks';
import {TasksListComponent} from '../task/tasks-list/tasks-list.component';

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-user-panel',
  imports: [TasksListComponent],
  templateUrl: 'user-panel.component.html',
  styleUrl: 'user-panel.component.css',
})
export class UserPanelComponent {
  @Input({ required: true }) user!: Pick<USER, 'name' | 'id'>;

  get selectedUserTasks(): Task[] {
    return TASKS.filter(({ userId }) => userId === this.user.id);
  }
}
