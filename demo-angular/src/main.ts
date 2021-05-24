// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from '@nativescript/angular';

import { AppModule } from './app/app.module';

import { installMixins, themer } from '@nativescript-community/ui-material-core';
installMixins();

if (global.isIOS) {
    themer.setPrimaryColor('#bff937');
    themer.setAccentColor('#ff8a39');
    themer.setSecondaryColor('#a830d7');
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
