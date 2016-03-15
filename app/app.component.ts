import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DashboardComponent } from './partials/dashboard/components/dashboard.component';
import { HeroService }     from './partials/heroes/services/hero.service';
import { HeroesComponent } from './partials/heroes/components/heroes.component';
import { HeroDetailComponent } from './partials/heroes/components/hero-detail.component';
import { CategoryDetailComponent } from './partials/categories/components/category-detail.component';
import { CategoriesComponent } from './partials/categories/components/categories.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/partials/home/home.html',
	styleUrls:['app/partials/home/home.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		HeroService
	]
})

@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	}, {
		path: '/hero/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	}, {
		path: '/categories',
		name: 'Categories',
		component: CategoriesComponent
	}, {
		path: '/category/:id',
		name: 'Category',
		component: CategoryDetailComponent
	}
])

export class AppComponent {
  title = 'TKBG - O Jogo da Base de Conhecimento';
}