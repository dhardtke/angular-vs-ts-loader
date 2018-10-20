import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub178Component} from "./stub178.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub178Component
        }])
    ],
    declarations: [
        Stub178Component
    ]
})
export class Stub178Module {

}
