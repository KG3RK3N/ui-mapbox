import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { DrawerWrapperComponent } from './pages/drawer-wrapper/drawer-wrapper.component';

const routes: Routes = [
    { path: '', redirectTo: '/drawer/home', pathMatch: 'full' },
    {
        path: 'drawer',
        component: DrawerWrapperComponent,
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomePageComponent }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
