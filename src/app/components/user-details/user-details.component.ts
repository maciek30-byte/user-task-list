import { Component, Input } from '@angular/core';
import { USER } from '../user/dummyUsers';
import {TasksListComponent} from '../task/tasks-list/tasks-list.component';
import {TASKS} from "../task/dummyTasks";

@Component({
  selector: 'app-user-details',
  imports: [TasksListComponent],
  templateUrl: "user-details.component.html",
styleUrl:"user-details.component.css"
})

export class UserDetailsComponent {
  @Input({required: true}) user!: Pick<USER, 'name' | 'id'>;
}

