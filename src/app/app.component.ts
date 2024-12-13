import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {DUMMY_USERS, USER} from './components/user/dummyUsers';
import {UserComponent} from './components/user/user.component';
import {UserPanelComponent} from './components/user-panel/user-panel.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, UserPanelComponent],
  templateUrl:"app.component.html",
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: Pick<USER, 'name' | 'id'> | undefined;

  onSelectUser(id: USER['id']) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new Error('user is not exist');
    }

    this.selectedUser = user;
    console.log('this is selected user', this.selectedUser);
  }
}
