import { Component, OnInit } from 'angular2/core';
import { Category } from '../../categories/components/category.component';
import { CategoryService } from '../../categories/services/category.service';
import { Router } from 'angular2/router';

@Component({
	selector: 'my-category-detail',
	templateUrl: 'app/partials/categories/views/category-detail.component.html',
	styleUrls: ['app/partials/categories/css/category-detail.component.css']
})

export class CategoryDetailComponent implements OnInit {
	title = 'Detalhe da categoria';
	categories: Category[] = [];
	constructor(
		private _router: Router,
		private _categoryService: CategoryService
	) { }
	ngOnInit() {
		this._categoryService.getCategories().then(categories => this.categories = categories.slice(1, 5));
	}
	gotoDetail(category: Category) {
		let link = ['CategoryDetail', { id: category.id }];
		this._router.navigate(link);
	}
}