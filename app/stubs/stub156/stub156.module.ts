import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub156Component} from "./stub156.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub156Component
        }])
    ],
    declarations: [
        Stub156Component
    ]
})
export class Stub156Module {

}
