import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { pages } from './pages';

const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' }, { path: 'home', component: HomePageComponent }, ...pages];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {}
