import { Component, OnInit } from 'angular2/core';
import { User } from '../../../users/interfaces/user.component';
import { UserService } from '../../../users/services/user.service';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/partials/dashboard/components/dashboard/dashboard.component.html',
  styleUrls: ['app/partials/dashboard/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
	title = 'Dashboard';
	users: User[] = [];
	constructor(
		private _router: Router,
		private _userService: UserService
	) { }
	ngOnInit() {
		this._userService.getUsers().then(users => this.users = users.slice(1,5));
	}
	gotoDetail(user: User) {
		let link = ['UserDetail', { id: user.id }];
		this._router.navigate(link);
	}
}