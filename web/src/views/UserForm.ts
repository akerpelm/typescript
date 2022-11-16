import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const newName = input.value;
      this.model.set({ name: newName });
    }
  };
  template(): string {
    return `
      <div>
        <h1>User Form </h1>
        <div>Username: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name"> Update Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }
}
