import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService }     from './partials/heroes/hero.service';
import { HeroesComponent } from './partials/heroes/heroes.component';
import { DashboardComponent } from './partials/dashboard/dashboard.component';
import { HeroDetailComponent } from './partials/heroes/hero-detail.component';

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
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	},{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	}
])

export class AppComponent {
  title = 'Tour of Heroes';
}