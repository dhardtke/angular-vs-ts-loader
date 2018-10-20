import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub109Component} from "./stub109.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub109Component
        }])
    ],
    declarations: [
        Stub109Component
    ]
})
export class Stub109Module {

}
