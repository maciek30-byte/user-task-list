import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task/taskService/taskService';
import { USER } from '../user/dummyUsers';

@Component({
  selector: 'app-add-task-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task-modal.component.html',
  styleUrl: './add-task-modal.component.css',
})
export class AddTaskModalComponent {
  @Input({ required: true }) userId!: USER['id'];
  @Output() onCloseModal = new EventEmitter();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  constructor(private readonly taskService: TaskService) {}

  logIt() {
    console.log({
      summary: this.enteredSummary,
      tittle: this.enteredTitle,
      date: this.enteredDate,
    });
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId,
    );

    this.onCloseModal.emit();
  }
}
