import { Task } from './task.js'
import { User } from './user.js'

const newTask = new Task('Hello, world!');

const newUser = new User(newTask);

newUser.do();