import {Component, EventEmitter, Input, output, Output} from '@angular/core';
import { USER } from './dummyUsers';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true
})
export class UserComponent {
  @Input({ required: true }) user!: Pick<USER, 'name' | 'avatar' | "id">;
  select = output<USER['id']>()

  get imagePath() {
    return 'assets/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
