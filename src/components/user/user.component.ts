import { Component, Input, output } from '@angular/core';
import { USER } from './dummyUsers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true,
})
export class UserComponent {
  @Input({ required: true }) user!: Pick<USER, 'name' | 'avatar' | 'id'>;
  @Input({ required: true }) isSelected!: boolean;
  select = output<USER['id']>();

  get imagePath() {
    return 'assets/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
