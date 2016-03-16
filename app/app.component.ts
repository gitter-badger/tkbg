import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DashboardComponent } from './partials/dashboard/components/dashboard/dashboard.component';
import { UserService }     from './partials/users/services/user.service';
import { UsersComponent } from './partials/users/components/list/users.component';
import { UserDetailComponent } from './partials/users/components/detail/user-detail.component';
import { CategoryService }     from './partials/categories/services/category.service';
import { CategoryDetailComponent } from './partials/categories/components/detail/category-detail.component';
import { CategoriesComponent } from './partials/categories/components/list/categories.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/partials/home/components/home/home.html',
	styleUrls:['app/partials/home/components/home/home.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		UserService,
		CategoryService
	]
})

@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},{
		path: '/users',
		name: 'Users',
		component: UsersComponent
	}, {
		path: '/user/:id',
		name: 'UserDetail',
		component: UserDetailComponent
	}, {
		path: '/categories',
		name: 'Categories',
		component: CategoriesComponent
	}, {
		path: '/category/:id',
		name: 'CategoryDetail',
		component: CategoryDetailComponent
	}
])

export class AppComponent {
  title = 'TKBG - O Jogo da Base de Conhecimento';
}