import {CATEGORIES} from '../mocks/mock-categories';
import {Injectable} from 'angular2/core';

@Injectable()
export class CategoryService {
	getCategories() {
		return Promise.resolve(CATEGORIES);
	}
	getCategory(id: number) {
		return Promise.resolve(CATEGORIES).then(
			categories => categories.filter(category => category.id === id)[0]
		);
	}
	goBack() {
		window.history.back();
	}
}