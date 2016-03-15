import {Component} from 'angular2/core';
import {Category} from './category.component';
import {CategoryDetailComponent} from './category-detail.component';
import {CategoryService} from '../services/category.service';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
	selector: 'my-categories',
	templateUrl: 'app/partials/categories/views/categories.component.html',
	styleUrls: ['app/partials/categories/css/categories.component.css'],
	directives: [CategoryDetailComponent]
})

export class CategoriesComponent implements OnInit {
	categories: Category[];
	selectedCategory: Category;
	constructor(
		private _router: Router,
		private _categoryService: CategoryService) { }
	getCategories() {
		this._categoryService.getCategories().then(categories => this.categories = categories);
	}
	ngOnInit() {
		this.getCategories();
	}
	onSelect(category: Category) { this.selectedCategory = category; }
	gotoDetail() {
		this._router.navigate(['CategoryDetail', { id: this.selectedCategory.id }]);
	}
}