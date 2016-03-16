import {Component} from 'angular2/core';
import {User} from '../../interfaces/user.component';
import {UserDetailComponent} from '../detail/user-detail.component';
import {UserService} from '../../services/user.service';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'my-users',
    templateUrl: 'app/partials/users/components/list/users.component.html',
    styleUrls: ['app/partials/users/components/list/users.component.css'],
    directives: [UserDetailComponent]
})

export class UsersComponent implements OnInit {
    users: User[];
    selectedUser: User;
    constructor(
        private _router: Router,
        private _userService: UserService) { }
    getUsers() {
        this._userService.getUsers().then(users => this.users = users);
    }
    ngOnInit() {
        this.getUsers();
    }
    onSelect(user: User) { this.selectedUser = user; }
    gotoDetail() {
        this._router.navigate(['UserDetail', { id: this.selectedUser.id }]);
    }
}