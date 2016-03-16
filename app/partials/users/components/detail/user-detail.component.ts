import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {User} from '../../interfaces/user.component';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'my-user-detail',
    templateUrl: 'app/partials/users/components/detail/user-detail.component.html',
    styleUrls: ['app/partials/users/components/detail/user-detail.component.css'],
    inputs: ['user']
})

export class UserDetailComponent {
    user: User;
    constructor(
        private _userService: UserService,
        private _routeParams: RouteParams
    ) { }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._userService.getUser(id).then(user => this.user = user);
    }
    goBack() {
        window.history.back();
    }
}