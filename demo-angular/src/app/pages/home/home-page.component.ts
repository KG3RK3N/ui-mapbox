import { Component } from '@angular/core';
import { pages } from '~/app/pages';

@Component({
    selector: 'home-page',
    moduleId: module.id,
    templateUrl: './home-page.component.html'
})
export class HomePageComponent {
    get pages() {
        return pages;
    }
}
