import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "zone.js/dist/zone-error";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "app.module";

// noinspection JSIgnoredPromiseFromCall
platformBrowserDynamic().bootstrapModule(AppModule);
