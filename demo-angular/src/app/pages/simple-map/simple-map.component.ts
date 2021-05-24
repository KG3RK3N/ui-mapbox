import { Component } from '@angular/core';
import { SETTINGS } from '../../../../../mapbox_config';

@Component({
    templateUrl: './simple-map.component.html'
})
export class SimpleMapComponent {
    settings: any = SETTINGS;
}
