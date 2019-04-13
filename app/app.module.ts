import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NavComponent} from "./nav/nav.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavComponent
    ],
    imports: [
        NoopAnimationsModule,
        BrowserModule,
        CommonModule,
        RouterModule.forRoot([
            {
                path: "",
                pathMatch: "full",
                component: HomeComponent
            },
            {
                path: "stubs",
                loadChildren: "./stubs/stub-routing.module#StubRoutingModule"
            }
        ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
