import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Drawer } from '@nativescript-community/ui-drawer';
import { RouterExtensions } from '@nativescript/angular';
import { filter } from 'rxjs/operators';
import { DebugService } from '~/app/services/debug.service';
import { EventsService } from '~/app/services/events.service';

@Component({
    templateUrl: './drawer-wrapper.component.html',
    styleUrls: ['./drawer-wrapper.component.scss']
})
export class DrawerWrapperComponent {
    @ViewChild('drawer', { static: true }) drawerElementRef: ElementRef;

    private drawer: Drawer;

    constructor(private router: Router, private routerExtensions: RouterExtensions, private eventsService: EventsService, private debugService: DebugService) {}

    async ngOnInit() {
        this.drawer = this.drawerElementRef.nativeElement;

        this.router.events.pipe(filter((event: any) => event instanceof NavigationStart)).subscribe((event: NavigationStart) => {
            if (this.drawer && this.drawer.isOpened()) {
                this.drawer.close();
            }
        });
    }

    // ----------------------------------------------------------------------------------------

    /**
     * Navigate to the named route.
     *
     * @see MapComponent
     *
     * @link https://github.com/NativeScript/android-runtime/issues/1487
     * @link https://github.com/NativeScript/NativeScript/issues/7954
     * @link https://github.com/NativeScript/NativeScript/issues/7867
     *
     * @todo I could not get the Page events to work the way I expected in map.component so I'm using my own events here.
     */

    onNavItemTap(navItemRoute: string): void {
        console.log("AppComponent::onNavItemTap(): '" + navItemRoute + "' ---- '" + this.debugService.incrementCounter(navItemRoute));

        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: 'fade'
            }
        });

        this.drawer.close();
    }
}
