import { Component, Input } from '@angular/core';
import { USER } from '../user/dummyUsers';
import { TasksListComponent } from '../task/tasks-list/tasks-list.component';
import {AddTaskModalComponent} from '../add-task-modal/add-task-modal.component';

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-user-panel',
  imports: [TasksListComponent, AddTaskModalComponent],
  templateUrl: 'user-panel.component.html',
  styleUrl: 'user-panel.component.css',
})
export class UserPanelComponent {
  @Input({ required: true }) user!: Pick<USER, 'name' | 'id'>;
  isAddTaskModalOpen = false;

  openAddTaskModal(){
    this.isAddTaskModalOpen = true;
  }

  closeAddTaskModal(){
    this.isAddTaskModalOpen = false;
  }
}

