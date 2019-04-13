import "zone.js/dist/zone";
import "core-js/proposals/reflect-metadata";
import "zone.js/dist/zone-error";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
