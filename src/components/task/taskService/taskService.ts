import { Injectable } from '@angular/core';
import { Task } from '../../user-panel/user-panel.component';
import { USER } from '../../user/dummyUsers';

type NewTask = Pick<Task, 'title' | 'summary' | 'dueDate'>;

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(idUser: USER['id']) {
    return this.tasks.filter(({ userId }) => userId === idUser);
  }

  addTask(taskData: NewTask, userId: USER['id']) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });

    this.saveToLocalStorage();
  }

  removeTask(idRemovedTask: Task['id']) {
    this.tasks = this.tasks.filter((task) => idRemovedTask !== task.id);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
