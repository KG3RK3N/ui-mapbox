import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { HomePageComponent } from './pages/home/home-page.component';

import { EventsService } from './services/events.service';
import { PlatformService } from './services/platform.service';
import { SettingsService } from './services/settings.service';
import { DebugService } from './services/debug.service';
import { NativeScriptMaterialCardViewModule } from '@nativescript-community/ui-material-cardview/angular';
import { SimpleMapComponent } from './pages/simple-map/simple-map.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "@nativescript/angular";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "@nativescript/angular";

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule, NativeScriptMaterialCardViewModule],
    declarations: [AppComponent, MapComponent, HomePageComponent, SimpleMapComponent],
    providers: [EventsService, PlatformService, SettingsService, DebugService],
    schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
