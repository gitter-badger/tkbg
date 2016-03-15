import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Category} from './category.component';
import {CategoryService} from '../services/category.service';

@Component({
    selector: 'my-category-detail',
    templateUrl: 'app/partials/categories/views/category-detail.component.html',
    styleUrls: ['app/partials/categories/css/category-detail.component.css'],
    inputs: ['category']
})

export class CategoryDetailComponent {
    category: Category;
    constructor(
        private _categoryService: CategoryService,
        private _routeParams: RouteParams
	) { }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._categoryService.getCategory(id).then(category => this.category = category);
    }
    goBack() {
        window.history.back();
    }
}