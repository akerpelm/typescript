import { User } from './models/User';

const user = new User({ name: 'Alex', age: 28 });

user.on('change', () => {
  console.log('change 1');
});
user.on('change', () => {
  console.log('change 2');
});
user.on('click', () => {
  console.log('click 1');
});

user.trigger('click');
