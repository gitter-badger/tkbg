import {USERS} from '../mocks/mock-users';
import {Injectable} from 'angular2/core';

@Injectable()
export class UserService {
	getUsers() {
		return Promise.resolve(USERS);
	}
	getUser(id: number) {
		return Promise.resolve(USERS).then(
			users => users.filter(user => user.id === id)[0]
		);
	}
	goBack() {
		window.history.back();
	}
}